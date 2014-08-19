function v888() {
  var testTypedArray = new Uint8Array(1);
  testTypedArray[0] = -1;
  testTypedArray[0] = testTypedArray[0] >> 0;
  if(testTypedArray[0] != 255) {
    cout("Detected faulty math by your browser.", 2);
    return true
  }else {
    return false
  }
  return
}
function v887(length$$20, defaultValue, numberType) {
  try {
    if(settings[5]) {
      throw new Error("");
    }
    var v5553 = numberType != "float32";
    if(v5553) {
      var v8483 = GameBoyWindow.opera;
      if(v8483) {
        v8483 = this.checkForOperaMathBug()
      }
      v5553 = v8483
    }
    if(v5553) {
      throw new Error("");
    }
    switch(numberType) {
      case "int8":
        var arrayHandle = new Int8Array(length$$20);
        break;
      case "uint8":
        arrayHandle = new Uint8Array(length$$20);
        break;
      case "int32":
        arrayHandle = new Int32Array(length$$20);
        break;
      case "float32":
        arrayHandle = new Float32Array(length$$20)
    }
    if(defaultValue != 0) {
      var index$$67 = 0;
      var v893 = index$$67 < length$$20;
      for(;v893;) {
        var v892 = index$$67;
        index$$67 = index$$67 + 1;
        arrayHandle[v892] = defaultValue;
        v893 = index$$67 < length$$20
      }
    }
  }catch(error$$27) {
    cout("Could not convert an array to a typed array: " + error$$27.message, 1);
    arrayHandle = [];
    index$$67 = 0;
    var v897 = index$$67 < length$$20;
    for(;v897;) {
      var v896 = index$$67;
      index$$67 = index$$67 + 1;
      arrayHandle[v896] = defaultValue;
      v897 = index$$67 < length$$20
    }
  }
  return arrayHandle
}
function v886(baseArray$$1) {
  try {
    var v5555 = !baseArray$$1;
    if(!v5555) {
      v5555 = !baseArray$$1.length
    }
    if(v5555) {
      return[]
    }
    var arrayTemp = [];
    var index$$66 = 0;
    var v899 = index$$66 < baseArray$$1.length;
    for(;v899;) {
      arrayTemp[index$$66] = baseArray$$1[index$$66];
      index$$66 = index$$66 + 1;
      v899 = index$$66 < baseArray$$1.length
    }
    return arrayTemp
  }catch(error$$26) {
    cout("Conversion from a typed array failed: " + error$$26.message, 1);
    return baseArray$$1
  }
  return
}
function v885(baseArray, memtype) {
  try {
    var v5559 = settings[5];
    if(!v5559) {
      var v8486 = memtype != "float32";
      if(v8486) {
        var v9756 = GameBoyWindow.opera;
        if(v9756) {
          v9756 = this.checkForOperaMathBug()
        }
        v8486 = v9756
      }
      v5559 = v8486
    }
    if(v5559) {
      return baseArray
    }
    var v5560 = !baseArray;
    if(!v5560) {
      v5560 = !baseArray.length
    }
    if(v5560) {
      return[]
    }
    var length$$19 = baseArray.length;
    switch(memtype) {
      case "uint8":
        var typedArrayTemp = new Uint8Array(length$$19);
        break;
      case "int8":
        typedArrayTemp = new Int8Array(length$$19);
        break;
      case "int32":
        typedArrayTemp = new Int32Array(length$$19);
        break;
      case "float32":
        typedArrayTemp = new Float32Array(length$$19)
    }
    var index$$65 = 0;
    var v903 = index$$65 < length$$19;
    for(;v903;) {
      typedArrayTemp[index$$65] = baseArray[index$$65];
      index$$65 = index$$65 + 1;
      v903 = index$$65 < length$$19
    }
    return typedArrayTemp
  }catch(error$$25) {
    cout("Could not convert an array to a typed array: " + error$$25.message, 1);
    return baseArray
  }
  return
}
function v884() {
  function v883(parentObj$$673, address$$167, data$$141) {
    if(parentObj$$673.inBootstrap) {
      parentObj$$673.cGBC = (data$$141 & 1) == 0;
      if(parentObj$$673.name + parentObj$$673.gameCode + parentObj$$673.ROM[323] == "Game and Watch 50") {
        parentObj$$673.cGBC = true;
        cout("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1)
      }
      cout("Booted to GBC Mode: " + parentObj$$673.cGBC, 0)
    }
    parentObj$$673.memory[65388] = data$$141;
    return
  }
  function v882(parentObj$$672, address$$166, data$$140) {
    cout("Boot ROM reads blocked: Bootstrap process has ended.", 0);
    parentObj$$672.inBootstrap = false;
    parentObj$$672.disableBootROM();
    parentObj$$672.memory[65360] = data$$140;
    return
  }
  if(this.inBootstrap) {
    this.memoryHighWriter[80] = this.memoryWriter[65360] = v882;
    if(this.cGBC) {
      this.memoryHighWriter[108] = this.memoryWriter[65388] = v883
    }
  }else {
    this.memoryHighWriter[80] = this.memoryWriter[65360] = this.cartIgnoreWrite
  }
  return
}
function v881() {
  function v880(parentObj$$671, address$$165, data$$139) {
    parentObj$$671.memory[65357] = data$$139;
    return
  }
  function v879(parentObj$$670, address$$164, data$$138) {
    if(parentObj$$670.memory[65353] != data$$138) {
      parentObj$$670.midScanLineJIT();
      JAM.call(parentObj$$670.updateGBOBJPalette, parentObj$$670, [4, data$$138]);
      parentObj$$670.memory[65353] = data$$138
    }
    return
  }
  function v878(parentObj$$669, address$$163, data$$137) {
    if(parentObj$$669.memory[65352] != data$$137) {
      parentObj$$669.midScanLineJIT();
      JAM.call(parentObj$$669.updateGBOBJPalette, parentObj$$669, [0, data$$137]);
      parentObj$$669.memory[65352] = data$$137
    }
    return
  }
  function v877(parentObj$$668, address$$162, data$$136) {
    if(parentObj$$668.memory[65351] != data$$136) {
      parentObj$$668.midScanLineJIT();
      JAM.call(parentObj$$668.updateGBBGPalette, parentObj$$668, [data$$136]);
      parentObj$$668.memory[65351] = data$$136
    }
    return
  }
  function v876(parentObj$$667, address$$161, data$$135) {
    parentObj$$667.memory[65350] = data$$135;
    var v5570 = data$$135 > 127;
    if(v5570) {
      v5570 = data$$135 < 224
    }
    if(v5570) {
      data$$135 = data$$135 << 8;
      address$$161 = 65024;
      var stat$$1 = parentObj$$667.modeSTAT;
      parentObj$$667.modeSTAT = 0;
      var newData$$1 = 0;
      var v929 = (address$$161 = address$$161 + 1) < 65184;
      do {
        var v924 = parentObj$$667.memoryReader;
        var v925 = data$$135;
        data$$135 = data$$135 + 1;
        newData$$1 = JAM.call(JAM.get(v924, data$$135, JAM.policy.p1), v924, [parentObj$$667, v925]);
        var v8495 = parentObj$$667.memory;
        introspect(JAM.policy.p1) {
          var v5572 = v8495[address$$161]
        }
        if(newData$$1 != v5572) {
          parentObj$$667.modeSTAT = stat$$1;
          parentObj$$667.graphicsJIT();
          parentObj$$667.modeSTAT = 0;
          var v926 = parentObj$$667.memory;
          var v927 = address$$161;
          address$$161 = address$$161 + 1;
          v926[v927] = newData$$1;
          break
        }
        v929 = (address$$161 = address$$161 + 1) < 65184
      }while(v929);
      if(address$$161 < 65184) {
        var v938 = address$$161 < 65184;
        do {
          var v930 = parentObj$$667.memory;
          var v931 = address$$161;
          address$$161 = address$$161 + 1;
          var v5574 = parentObj$$667.memoryReader;
          var v5575 = data$$135;
          data$$135 = data$$135 + 1;
          var v10772 = JAM.call(JAM.get(v5574, data$$135, JAM.policy.p1), v5574, [parentObj$$667, v5575]);
          v930[v931] = v10772;
          var v932 = parentObj$$667.memory;
          var v933 = address$$161;
          address$$161 = address$$161 + 1;
          var v5576 = parentObj$$667.memoryReader;
          var v5577 = data$$135;
          data$$135 = data$$135 + 1;
          var v10773 = JAM.call(JAM.get(v5576, data$$135, JAM.policy.p1), v5576, [parentObj$$667, v5577]);
          v932[v933] = v10773;
          var v934 = parentObj$$667.memory;
          var v935 = address$$161;
          address$$161 = address$$161 + 1;
          var v5578 = parentObj$$667.memoryReader;
          var v5579 = data$$135;
          data$$135 = data$$135 + 1;
          var v10774 = JAM.call(JAM.get(v5578, data$$135, JAM.policy.p1), v5578, [parentObj$$667, v5579]);
          v934[v935] = v10774;
          var v936 = parentObj$$667.memory;
          var v937 = address$$161;
          address$$161 = address$$161 + 1;
          var v5580 = parentObj$$667.memoryReader;
          var v5581 = data$$135;
          data$$135 = data$$135 + 1;
          var v10775 = JAM.call(JAM.get(v5580, data$$135, JAM.policy.p1), v5580, [parentObj$$667, v5581]);
          v936[v937] = v10775;
          v938 = address$$161 < 65184
        }while(v938)
      }
      parentObj$$667.modeSTAT = stat$$1
    }
    return
  }
  function v875(parentObj$$666, address$$160, data$$134) {
    parentObj$$666.LYCMatchTriggerSTAT = (data$$134 & 64) == 64;
    parentObj$$666.mode2TriggerSTAT = (data$$134 & 32) == 32;
    parentObj$$666.mode1TriggerSTAT = (data$$134 & 16) == 16;
    parentObj$$666.mode0TriggerSTAT = (data$$134 & 8) == 8;
    parentObj$$666.memory[65345] = data$$134 & 120;
    var v8496 = !parentObj$$666.usedBootROM;
    if(!v8496) {
      v8496 = !parentObj$$666.usedGBCBootROM
    }
    var v5582 = v8496;
    if(v5582) {
      var v8497 = parentObj$$666.LCDisOn;
      if(v8497) {
        v8497 = parentObj$$666.modeSTAT < 2
      }
      v5582 = v8497
    }
    if(v5582) {
      parentObj$$666.interruptsRequested = parentObj$$666.interruptsRequested | 2;
      parentObj$$666.checkIRQMatching()
    }
    return
  }
  function v874(parentObj$$665, address$$159, data$$133) {
    if(parentObj$$665.memory[65344] != data$$133) {
      parentObj$$665.midScanLineJIT();
      var temp_var$$22 = data$$133 > 127;
      if(temp_var$$22 != parentObj$$665.LCDisOn) {
        parentObj$$665.LCDisOn = temp_var$$22;
        var v947 = parentObj$$665.memory;
        v947[65345] = v947[65345] & 120;
        parentObj$$665.midScanlineOffset = -1;
        parentObj$$665.totalLinesPassed = parentObj$$665.currentX = parentObj$$665.queuedScanLines = parentObj$$665.lastUnrenderedLine = parentObj$$665.STATTracker = parentObj$$665.LCDTicks = parentObj$$665.actualScanLine = parentObj$$665.memory[65348] = 0;
        if(parentObj$$665.LCDisOn) {
          parentObj$$665.modeSTAT = 2;
          parentObj$$665.matchLYC();
          parentObj$$665.LCDCONTROL = parentObj$$665.LINECONTROL
        }else {
          parentObj$$665.modeSTAT = 0;
          parentObj$$665.LCDCONTROL = parentObj$$665.DISPLAYOFFCONTROL;
          parentObj$$665.DisplayShowOff()
        }
        parentObj$$665.interruptsRequested = parentObj$$665.interruptsRequested & 253
      }
      var v951;
      if((data$$133 & 64) == 64) {
        v951 = 1024
      }else {
        v951 = 0
      }
      parentObj$$665.gfxWindowCHRBankPosition = v951;
      parentObj$$665.gfxWindowDisplay = (data$$133 & 32) == 32;
      var v953;
      if((data$$133 & 16) == 16) {
        v953 = 0
      }else {
        v953 = 128
      }
      parentObj$$665.gfxBackgroundBankOffset = v953;
      var v954;
      if((data$$133 & 8) == 8) {
        v954 = 1024
      }else {
        v954 = 0
      }
      parentObj$$665.gfxBackgroundCHRBankPosition = v954;
      parentObj$$665.gfxSpriteNormalHeight = (data$$133 & 4) == 0;
      parentObj$$665.gfxSpriteShow = (data$$133 & 2) == 2;
      parentObj$$665.bgEnabled = (data$$133 & 1) == 1;
      parentObj$$665.memory[65344] = data$$133
    }
    return
  }
  function v873(parentObj$$664, address$$158, data$$132) {
    if((data$$132 & 1) == 1) {
      parentObj$$664.memory[65282] = data$$132 & 127;
      parentObj$$664.serialTimer = 4096;
      parentObj$$664.serialShiftTimer = parentObj$$664.serialShiftTimerAllocated = 512
    }else {
      parentObj$$664.memory[65282] = data$$132;
      parentObj$$664.serialShiftTimer = parentObj$$664.serialShiftTimerAllocated = parentObj$$664.serialTimer = 0
    }
    return
  }
  function v872(parentObj$$663, address$$157, data$$131) {
    parentObj$$663.memory[65396] = data$$131;
    return
  }
  function v871(parentObj$$662, address$$156, data$$130) {
    var addressCheck = parentObj$$662.memory[65361] << 8 | parentObj$$662.memory[65362];
    var v5593 = !parentObj$$662.hdmaRunning;
    if(!v5593) {
      var v8505 = addressCheck < 53248;
      if(!v8505) {
        v8505 = addressCheck >= 57344
      }
      v5593 = v8505
    }
    if(v5593) {
      var v966 = parentObj$$662;
      var v10776 = Math.max(data$$130 & 7, 1);
      v966.gbcRamBank = v10776;
      parentObj$$662.gbcRamBankPosition = (parentObj$$662.gbcRamBank - 1 << 12) - 53248;
      parentObj$$662.gbcRamBankPositionECHO = parentObj$$662.gbcRamBankPosition - 8192
    }
    parentObj$$662.memory[65392] = data$$130;
    return
  }
  function v870(parentObj$$661, address$$155, data$$129) {
    JAM.call(parentObj$$661.updateGBCOBJPalette, parentObj$$661, [parentObj$$661.memory[65386] & 63, data$$129]);
    if(parentObj$$661.memory[65386] > 127) {
      var next$$1 = parentObj$$661.memory[65386] + 1 & 63;
      parentObj$$661.memory[65386] = next$$1 | 128;
      parentObj$$661.memory[65387] = parentObj$$661.gbcOBJRawPalette[next$$1]
    }else {
      parentObj$$661.memory[65387] = data$$129
    }
    return
  }
  function v869(parentObj$$660, address$$154, data$$128) {
    parentObj$$660.memory[65387] = parentObj$$660.gbcOBJRawPalette[data$$128 & 63];
    parentObj$$660.memory[65386] = data$$128;
    return
  }
  function v868(parentObj$$659, address$$153, data$$127) {
    JAM.call(parentObj$$659.updateGBCBGPalette, parentObj$$659, [parentObj$$659.memory[65384] & 63, data$$127]);
    if(parentObj$$659.memory[65384] > 127) {
      var next = parentObj$$659.memory[65384] + 1 & 63;
      parentObj$$659.memory[65384] = next | 128;
      parentObj$$659.memory[65385] = parentObj$$659.gbcBGRawPalette[next]
    }else {
      parentObj$$659.memory[65385] = data$$127
    }
    return
  }
  function v867(parentObj$$658, address$$152, data$$126) {
    parentObj$$658.memory[65385] = parentObj$$658.gbcBGRawPalette[data$$126 & 63];
    parentObj$$658.memory[65384] = data$$126;
    return
  }
  function v866(parentObj$$657, address$$151, data$$125) {
    if(!parentObj$$657.hdmaRunning) {
      if((data$$125 & 128) == 0) {
        JAM.call(parentObj$$657.DMAWrite, parentObj$$657, [(data$$125 & 127) + 1]);
        parentObj$$657.memory[65365] = 255
      }else {
        parentObj$$657.hdmaRunning = true;
        parentObj$$657.memory[65365] = data$$125 & 127
      }
    }else {
      if((data$$125 & 128) == 0) {
        parentObj$$657.hdmaRunning = false;
        var v991 = parentObj$$657.memory;
        v991[65365] = v991[65365] | 128
      }else {
        parentObj$$657.memory[65365] = data$$125 & 127
      }
    }
    return
  }
  function v865(parentObj$$656, address$$150, data$$124) {
    if(!parentObj$$656.hdmaRunning) {
      parentObj$$656.memory[65364] = data$$124 & 240
    }
    return
  }
  function v864(parentObj$$655, address$$149, data$$123) {
    if(!parentObj$$655.hdmaRunning) {
      parentObj$$655.memory[65363] = data$$123 & 31
    }
    return
  }
  function v863(parentObj$$654, address$$148, data$$122) {
    if(!parentObj$$654.hdmaRunning) {
      parentObj$$654.memory[65362] = data$$122 & 240
    }
    return
  }
  function v862(parentObj$$653, address$$147, data$$121) {
    if(!parentObj$$653.hdmaRunning) {
      parentObj$$653.memory[65361] = data$$121
    }
    return
  }
  function v861(parentObj$$652, address$$146, data$$120) {
    parentObj$$652.currVRAMBank = data$$120 & 1;
    if(parentObj$$652.currVRAMBank > 0) {
      parentObj$$652.BGCHRCurrentBank = parentObj$$652.BGCHRBank2
    }else {
      parentObj$$652.BGCHRCurrentBank = parentObj$$652.BGCHRBank1
    }
    return
  }
  function v860(parentObj$$651, address$$145, data$$119) {
    parentObj$$651.memory[65357] = data$$119 & 127 | parentObj$$651.memory[65357] & 128;
    return
  }
  function v859(parentObj$$650, address$$144, data$$118) {
    parentObj$$650.memory[65350] = data$$118;
    if(data$$118 < 224) {
      data$$118 = data$$118 << 8;
      address$$144 = 65024;
      var stat = parentObj$$650.modeSTAT;
      parentObj$$650.modeSTAT = 0;
      var newData = 0;
      var v1011 = (address$$144 = address$$144 + 1) < 65184;
      do {
        var v1006 = parentObj$$650.memoryReader;
        var v1007 = data$$118;
        data$$118 = data$$118 + 1;
        newData = JAM.call(JAM.get(v1006, data$$118, JAM.policy.p1), v1006, [parentObj$$650, v1007]);
        var v8516 = parentObj$$650.memory;
        introspect(JAM.policy.p1) {
          var v5620 = v8516[address$$144]
        }
        if(newData != v5620) {
          parentObj$$650.modeSTAT = stat;
          parentObj$$650.graphicsJIT();
          parentObj$$650.modeSTAT = 0;
          var v1008 = parentObj$$650.memory;
          var v1009 = address$$144;
          address$$144 = address$$144 + 1;
          v1008[v1009] = newData;
          break
        }
        v1011 = (address$$144 = address$$144 + 1) < 65184
      }while(v1011);
      if(address$$144 < 65184) {
        var v1020 = address$$144 < 65184;
        do {
          var v1012 = parentObj$$650.memory;
          var v1013 = address$$144;
          address$$144 = address$$144 + 1;
          var v5622 = parentObj$$650.memoryReader;
          var v5623 = data$$118;
          data$$118 = data$$118 + 1;
          var v10777 = JAM.call(JAM.get(v5622, data$$118, JAM.policy.p1), v5622, [parentObj$$650, v5623]);
          v1012[v1013] = v10777;
          var v1014 = parentObj$$650.memory;
          var v1015 = address$$144;
          address$$144 = address$$144 + 1;
          var v5624 = parentObj$$650.memoryReader;
          var v5625 = data$$118;
          data$$118 = data$$118 + 1;
          var v10778 = JAM.call(JAM.get(v5624, data$$118, JAM.policy.p1), v5624, [parentObj$$650, v5625]);
          v1014[v1015] = v10778;
          var v1016 = parentObj$$650.memory;
          var v1017 = address$$144;
          address$$144 = address$$144 + 1;
          var v5626 = parentObj$$650.memoryReader;
          var v5627 = data$$118;
          data$$118 = data$$118 + 1;
          var v10779 = JAM.call(JAM.get(v5626, data$$118, JAM.policy.p1), v5626, [parentObj$$650, v5627]);
          v1016[v1017] = v10779;
          var v1018 = parentObj$$650.memory;
          var v1019 = address$$144;
          address$$144 = address$$144 + 1;
          var v5628 = parentObj$$650.memoryReader;
          var v5629 = data$$118;
          data$$118 = data$$118 + 1;
          var v10780 = JAM.call(JAM.get(v5628, data$$118, JAM.policy.p1), v5628, [parentObj$$650, v5629]);
          v1018[v1019] = v10780;
          v1020 = address$$144 < 65184
        }while(v1020)
      }
      parentObj$$650.modeSTAT = stat
    }
    return
  }
  function v858(parentObj$$649, address$$143, data$$117) {
    parentObj$$649.LYCMatchTriggerSTAT = (data$$117 & 64) == 64;
    parentObj$$649.mode2TriggerSTAT = (data$$117 & 32) == 32;
    parentObj$$649.mode1TriggerSTAT = (data$$117 & 16) == 16;
    parentObj$$649.mode0TriggerSTAT = (data$$117 & 8) == 8;
    parentObj$$649.memory[65345] = data$$117 & 120;
    return
  }
  function v857(parentObj$$648, address$$142, data$$116) {
    if(parentObj$$648.memory[65344] != data$$116) {
      parentObj$$648.midScanLineJIT();
      var temp_var$$21 = data$$116 > 127;
      if(temp_var$$21 != parentObj$$648.LCDisOn) {
        parentObj$$648.LCDisOn = temp_var$$21;
        var v1028 = parentObj$$648.memory;
        v1028[65345] = v1028[65345] & 120;
        parentObj$$648.midScanlineOffset = -1;
        parentObj$$648.totalLinesPassed = parentObj$$648.currentX = parentObj$$648.queuedScanLines = parentObj$$648.lastUnrenderedLine = parentObj$$648.STATTracker = parentObj$$648.LCDTicks = parentObj$$648.actualScanLine = parentObj$$648.memory[65348] = 0;
        if(parentObj$$648.LCDisOn) {
          parentObj$$648.modeSTAT = 2;
          parentObj$$648.matchLYC();
          parentObj$$648.LCDCONTROL = parentObj$$648.LINECONTROL
        }else {
          parentObj$$648.modeSTAT = 0;
          parentObj$$648.LCDCONTROL = parentObj$$648.DISPLAYOFFCONTROL;
          parentObj$$648.DisplayShowOff()
        }
        parentObj$$648.interruptsRequested = parentObj$$648.interruptsRequested & 253
      }
      var v1032;
      if((data$$116 & 64) == 64) {
        v1032 = 1024
      }else {
        v1032 = 0
      }
      parentObj$$648.gfxWindowCHRBankPosition = v1032;
      parentObj$$648.gfxWindowDisplay = (data$$116 & 32) == 32;
      var v1034;
      if((data$$116 & 16) == 16) {
        v1034 = 0
      }else {
        v1034 = 128
      }
      parentObj$$648.gfxBackgroundBankOffset = v1034;
      var v1035;
      if((data$$116 & 8) == 8) {
        v1035 = 1024
      }else {
        v1035 = 0
      }
      parentObj$$648.gfxBackgroundCHRBankPosition = v1035;
      parentObj$$648.gfxSpriteNormalHeight = (data$$116 & 4) == 0;
      parentObj$$648.gfxSpriteShow = (data$$116 & 2) == 2;
      parentObj$$648.BGPriorityEnabled = (data$$116 & 1) == 1;
      parentObj$$648.priorityFlaggingPathRebuild();
      parentObj$$648.memory[65344] = data$$116
    }
    return
  }
  function v856(parentObj$$647, address$$141, data$$115) {
    if((data$$115 & 1) == 1) {
      parentObj$$647.memory[65282] = data$$115 & 127;
      var v1042;
      if((data$$115 & 2) == 0) {
        v1042 = 4096
      }else {
        v1042 = 128
      }
      parentObj$$647.serialTimer = v1042;
      var v1043;
      if((data$$115 & 2) == 0) {
        v1043 = 512
      }else {
        v1043 = 16
      }
      parentObj$$647.serialShiftTimer = parentObj$$647.serialShiftTimerAllocated = v1043
    }else {
      parentObj$$647.memory[65282] = data$$115;
      parentObj$$647.serialShiftTimer = parentObj$$647.serialShiftTimerAllocated = parentObj$$647.serialTimer = 0
    }
    return
  }
  if(this.cGBC) {
    this.memoryHighWriter[2] = this.memoryWriter[65282] = v856;
    this.memoryHighWriter[64] = this.memoryWriter[65344] = v857;
    this.memoryHighWriter[65] = this.memoryWriter[65345] = v858;
    this.memoryHighWriter[70] = this.memoryWriter[65350] = v859;
    this.memoryHighWriter[77] = this.memoryWriter[65357] = v860;
    this.memoryHighWriter[79] = this.memoryWriter[65359] = v861;
    this.memoryHighWriter[81] = this.memoryWriter[65361] = v862;
    this.memoryHighWriter[82] = this.memoryWriter[65362] = v863;
    this.memoryHighWriter[83] = this.memoryWriter[65363] = v864;
    this.memoryHighWriter[84] = this.memoryWriter[65364] = v865;
    this.memoryHighWriter[85] = this.memoryWriter[65365] = v866;
    this.memoryHighWriter[104] = this.memoryWriter[65384] = v867;
    this.memoryHighWriter[105] = this.memoryWriter[65385] = v868;
    this.memoryHighWriter[106] = this.memoryWriter[65386] = v869;
    this.memoryHighWriter[107] = this.memoryWriter[65387] = v870;
    this.memoryHighWriter[112] = this.memoryWriter[65392] = v871;
    this.memoryHighWriter[116] = this.memoryWriter[65396] = v872
  }else {
    this.memoryHighWriter[2] = this.memoryWriter[65282] = v873;
    this.memoryHighWriter[64] = this.memoryWriter[65344] = v874;
    this.memoryHighWriter[65] = this.memoryWriter[65345] = v875;
    this.memoryHighWriter[70] = this.memoryWriter[65350] = v876;
    this.memoryHighWriter[71] = this.memoryWriter[65351] = v877;
    this.memoryHighWriter[72] = this.memoryWriter[65352] = v878;
    this.memoryHighWriter[73] = this.memoryWriter[65353] = v879;
    this.memoryHighWriter[77] = this.memoryWriter[65357] = v880;
    this.memoryHighWriter[79] = this.memoryWriter[65359] = this.cartIgnoreWrite;
    this.memoryHighWriter[85] = this.memoryWriter[65365] = this.cartIgnoreWrite;
    this.memoryHighWriter[104] = this.memoryWriter[65384] = this.cartIgnoreWrite;
    this.memoryHighWriter[105] = this.memoryWriter[65385] = this.cartIgnoreWrite;
    this.memoryHighWriter[106] = this.memoryWriter[65386] = this.cartIgnoreWrite;
    this.memoryHighWriter[107] = this.memoryWriter[65387] = this.cartIgnoreWrite;
    this.memoryHighWriter[108] = this.memoryWriter[65388] = this.cartIgnoreWrite;
    this.memoryHighWriter[112] = this.memoryWriter[65392] = this.cartIgnoreWrite;
    this.memoryHighWriter[116] = this.memoryWriter[65396] = this.cartIgnoreWrite
  }
  return
}
function v855() {
  function v854(parentObj$$646, address$$140, data$$114) {
    parentObj$$646.interruptsEnabled = data$$114;
    parentObj$$646.checkIRQMatching();
    return
  }
  function v853(parentObj$$645, address$$139, data$$113) {
    parentObj$$645.memory[65397] = data$$113;
    return
  }
  function v852(parentObj$$644, address$$138, data$$112) {
    parentObj$$644.memory[65395] = data$$112;
    return
  }
  function v851(parentObj$$643, address$$137, data$$111) {
    parentObj$$643.memory[65394] = data$$111;
    return
  }
  function v850(parentObj$$642, address$$136, data$$110) {
    if(parentObj$$642.memory[65355] != data$$110) {
      parentObj$$642.midScanLineJIT();
      parentObj$$642.memory[65355] = data$$110;
      parentObj$$642.windowX = data$$110 - 7
    }
    return
  }
  function v849(parentObj$$641, address$$135, data$$109) {
    if(parentObj$$641.windowY != data$$109) {
      parentObj$$641.midScanLineJIT();
      parentObj$$641.windowY = data$$109
    }
    return
  }
  function v848(parentObj$$640, address$$134, data$$108) {
    if(parentObj$$640.memory[65349] != data$$108) {
      parentObj$$640.memory[65349] = data$$108;
      if(parentObj$$640.LCDisOn) {
        parentObj$$640.matchLYC()
      }
    }
    return
  }
  function v847(parentObj$$639, address$$133, data$$107) {
    if(parentObj$$639.LCDisOn) {
      parentObj$$639.modeSTAT = 2;
      parentObj$$639.midScanlineOffset = -1;
      parentObj$$639.totalLinesPassed = parentObj$$639.currentX = parentObj$$639.queuedScanLines = parentObj$$639.lastUnrenderedLine = parentObj$$639.LCDTicks = parentObj$$639.STATTracker = parentObj$$639.actualScanLine = parentObj$$639.memory[65348] = 0
    }
    return
  }
  function v846(parentObj$$638, address$$132, data$$106) {
    if(parentObj$$638.backgroundX != data$$106) {
      parentObj$$638.midScanLineJIT();
      parentObj$$638.backgroundX = data$$106
    }
    return
  }
  function v845(parentObj$$637, address$$131, data$$105) {
    if(parentObj$$637.backgroundY != data$$105) {
      parentObj$$637.midScanLineJIT();
      parentObj$$637.backgroundY = data$$105
    }
    return
  }
  function v844(parentObj$$636, address$$130, data$$104) {
    JAM.call(parentObj$$636.channel3WriteRAM, parentObj$$636, [15, data$$104]);
    return
  }
  function v843(parentObj$$635, address$$129, data$$103) {
    JAM.call(parentObj$$635.channel3WriteRAM, parentObj$$635, [14, data$$103]);
    return
  }
  function v842(parentObj$$634, address$$128, data$$102) {
    JAM.call(parentObj$$634.channel3WriteRAM, parentObj$$634, [13, data$$102]);
    return
  }
  function v841(parentObj$$633, address$$127, data$$101) {
    JAM.call(parentObj$$633.channel3WriteRAM, parentObj$$633, [12, data$$101]);
    return
  }
  function v840(parentObj$$632, address$$126, data$$100) {
    JAM.call(parentObj$$632.channel3WriteRAM, parentObj$$632, [11, data$$100]);
    return
  }
  function v839(parentObj$$631, address$$125, data$$99) {
    JAM.call(parentObj$$631.channel3WriteRAM, parentObj$$631, [10, data$$99]);
    return
  }
  function v838(parentObj$$630, address$$124, data$$98) {
    JAM.call(parentObj$$630.channel3WriteRAM, parentObj$$630, [9, data$$98]);
    return
  }
  function v837(parentObj$$629, address$$123, data$$97) {
    JAM.call(parentObj$$629.channel3WriteRAM, parentObj$$629, [8, data$$97]);
    return
  }
  function v836(parentObj$$628, address$$122, data$$96) {
    JAM.call(parentObj$$628.channel3WriteRAM, parentObj$$628, [7, data$$96]);
    return
  }
  function v835(parentObj$$627, address$$121, data$$95) {
    JAM.call(parentObj$$627.channel3WriteRAM, parentObj$$627, [6, data$$95]);
    return
  }
  function v834(parentObj$$626, address$$120, data$$94) {
    JAM.call(parentObj$$626.channel3WriteRAM, parentObj$$626, [5, data$$94]);
    return
  }
  function v833(parentObj$$625, address$$119, data$$93) {
    JAM.call(parentObj$$625.channel3WriteRAM, parentObj$$625, [4, data$$93]);
    return
  }
  function v832(parentObj$$624, address$$118, data$$92) {
    JAM.call(parentObj$$624.channel3WriteRAM, parentObj$$624, [3, data$$92]);
    return
  }
  function v831(parentObj$$623, address$$117, data$$91) {
    JAM.call(parentObj$$623.channel3WriteRAM, parentObj$$623, [2, data$$91]);
    return
  }
  function v830(parentObj$$622, address$$116, data$$90) {
    JAM.call(parentObj$$622.channel3WriteRAM, parentObj$$622, [1, data$$90]);
    return
  }
  function v829(parentObj$$621, address$$115, data$$89) {
    JAM.call(parentObj$$621.channel3WriteRAM, parentObj$$621, [0, data$$89]);
    return
  }
  function v828(parentObj$$620, address$$114, data$$88) {
    parentObj$$620.audioJIT();
    var v5678 = !parentObj$$620.soundMasterEnabled;
    if(v5678) {
      v5678 = data$$88 > 127
    }
    if(v5678) {
      parentObj$$620.memory[65318] = 128;
      parentObj$$620.soundMasterEnabled = true;
      parentObj$$620.initializeAudioStartState()
    }else {
      var v5679 = parentObj$$620.soundMasterEnabled;
      if(v5679) {
        v5679 = data$$88 < 128
      }
      if(v5679) {
        parentObj$$620.memory[65318] = 0;
        parentObj$$620.soundMasterEnabled = false;
        var index$$64 = 65296;
        var v1097 = index$$64 < 65318;
        for(;v1097;) {
          var v1096 = parentObj$$620.memoryWriter;
          JAM.call(v1096[index$$64], v1096, [parentObj$$620, index$$64, 0]);
          index$$64 = index$$64 + 1;
          v1097 = index$$64 < 65318
        }
      }
    }
    return
  }
  function v827(parentObj$$619, address$$113, data$$87) {
    var v5680 = parentObj$$619.soundMasterEnabled;
    if(v5680) {
      v5680 = parentObj$$619.memory[65317] != data$$87
    }
    if(v5680) {
      parentObj$$619.audioJIT();
      parentObj$$619.memory[65317] = data$$87;
      parentObj$$619.rightChannel1 = (data$$87 & 1) == 1;
      parentObj$$619.rightChannel2 = (data$$87 & 2) == 2;
      parentObj$$619.rightChannel3 = (data$$87 & 4) == 4;
      parentObj$$619.rightChannel4 = (data$$87 & 8) == 8;
      parentObj$$619.leftChannel1 = (data$$87 & 16) == 16;
      parentObj$$619.leftChannel2 = (data$$87 & 32) == 32;
      parentObj$$619.leftChannel3 = (data$$87 & 64) == 64;
      parentObj$$619.leftChannel4 = data$$87 > 127;
      parentObj$$619.channel1OutputLevelCache();
      parentObj$$619.channel2OutputLevelCache();
      parentObj$$619.channel3OutputLevelCache();
      parentObj$$619.channel4OutputLevelCache()
    }
    return
  }
  function v826(parentObj$$618, address$$112, data$$86) {
    var v5681 = parentObj$$618.soundMasterEnabled;
    if(v5681) {
      v5681 = parentObj$$618.memory[65316] != data$$86
    }
    if(v5681) {
      parentObj$$618.audioJIT();
      parentObj$$618.memory[65316] = data$$86;
      parentObj$$618.VinLeftChannelMasterVolume = (data$$86 >> 4 & 7) + 1;
      parentObj$$618.VinRightChannelMasterVolume = (data$$86 & 7) + 1;
      parentObj$$618.mixerOutputLevelCache()
    }
    return
  }
  function v825(parentObj$$617, address$$111, data$$85) {
    if(parentObj$$617.soundMasterEnabled) {
      parentObj$$617.audioJIT();
      parentObj$$617.memory[65315] = data$$85;
      parentObj$$617.channel4consecutive = (data$$85 & 64) == 0;
      if(data$$85 > 127) {
        var nr42 = parentObj$$617.memory[65313];
        parentObj$$617.channel4envelopeVolume = nr42 >> 4;
        parentObj$$617.channel4currentVolume = parentObj$$617.channel4envelopeVolume << parentObj$$617.channel4VolumeShifter;
        parentObj$$617.channel4envelopeSweepsLast = (nr42 & 7) - 1;
        if(parentObj$$617.channel4totalLength == 0) {
          parentObj$$617.channel4totalLength = 64
        }
        if((data$$85 & 64) == 64) {
          var v1120 = parentObj$$617.memory;
          v1120[65318] = v1120[65318] | 8
        }
      }
      parentObj$$617.channel4EnableCheck()
    }
    return
  }
  function v824(parentObj$$616, address$$110, data$$84) {
    if(parentObj$$616.soundMasterEnabled) {
      parentObj$$616.audioJIT();
      parentObj$$616.channel4FrequencyPeriod = Math.max((data$$84 & 7) << 4, 8) << (data$$84 >> 4);
      var bitWidth = data$$84 & 8;
      var v8531 = bitWidth == 8;
      if(v8531) {
        v8531 = parentObj$$616.channel4BitRange == 32767
      }
      var v5687 = v8531;
      if(!v5687) {
        var v8532 = bitWidth == 0;
        if(v8532) {
          v8532 = parentObj$$616.channel4BitRange == 127
        }
        v5687 = v8532
      }
      if(v5687) {
        parentObj$$616.channel4lastSampleLookup = 0;
        var v1125;
        if(bitWidth == 8) {
          v1125 = 127
        }else {
          v1125 = 32767
        }
        parentObj$$616.channel4BitRange = v1125;
        var v1126;
        if(bitWidth == 8) {
          v1126 = 7
        }else {
          v1126 = 15
        }
        parentObj$$616.channel4VolumeShifter = v1126;
        parentObj$$616.channel4currentVolume = parentObj$$616.channel4envelopeVolume << parentObj$$616.channel4VolumeShifter;
        var v1129;
        if(bitWidth == 8) {
          v1129 = parentObj$$616.LSFR7Table
        }else {
          v1129 = parentObj$$616.LSFR15Table
        }
        parentObj$$616.noiseSampleTable = v1129
      }
      parentObj$$616.memory[65314] = data$$84;
      parentObj$$616.channel4UpdateCache()
    }
    return
  }
  function v823(parentObj$$615, address$$109, data$$83) {
    if(parentObj$$615.soundMasterEnabled) {
      parentObj$$615.audioJIT();
      var v5691 = parentObj$$615.channel4Enabled;
      if(v5691) {
        v5691 = parentObj$$615.channel4envelopeSweeps == 0
      }
      if(v5691) {
        if(((parentObj$$615.memory[65313] ^ data$$83) & 8) == 8) {
          if((parentObj$$615.memory[65313] & 8) == 0) {
            if((parentObj$$615.memory[65313] & 7) == 7) {
              parentObj$$615.channel4envelopeVolume = parentObj$$615.channel4envelopeVolume + 2
            }else {
              parentObj$$615.channel4envelopeVolume = parentObj$$615.channel4envelopeVolume + 1
            }
          }
          parentObj$$615.channel4envelopeVolume = 16 - parentObj$$615.channel4envelopeVolume & 15
        }else {
          if((parentObj$$615.memory[65313] & 15) == 8) {
            parentObj$$615.channel4envelopeVolume = 1 + parentObj$$615.channel4envelopeVolume & 15
          }
        }
        parentObj$$615.channel4currentVolume = parentObj$$615.channel4envelopeVolume << parentObj$$615.channel4VolumeShifter
      }
      parentObj$$615.channel4envelopeType = (data$$83 & 8) == 8;
      parentObj$$615.memory[65313] = data$$83;
      parentObj$$615.channel4UpdateCache();
      parentObj$$615.channel4VolumeEnableCheck()
    }
    return
  }
  function v822(parentObj$$614, address$$108, data$$82) {
    var v5700 = parentObj$$614.soundMasterEnabled;
    if(!v5700) {
      v5700 = !parentObj$$614.cGBC
    }
    if(v5700) {
      if(parentObj$$614.soundMasterEnabled) {
        parentObj$$614.audioJIT()
      }
      parentObj$$614.channel4totalLength = 64 - (data$$82 & 63);
      parentObj$$614.memory[65312] = data$$82 | 192;
      parentObj$$614.channel4EnableCheck()
    }
    return
  }
  function v821(parentObj$$613, address$$107, data$$81) {
    if(parentObj$$613.soundMasterEnabled) {
      parentObj$$613.audioJIT();
      if(data$$81 > 127) {
        if(parentObj$$613.channel3totalLength == 0) {
          parentObj$$613.channel3totalLength = 256
        }
        parentObj$$613.channel3lastSampleLookup = 0;
        if((data$$81 & 64) == 64) {
          var v1150 = parentObj$$613.memory;
          v1150[65318] = v1150[65318] | 4
        }
      }
      parentObj$$613.channel3consecutive = (data$$81 & 64) == 0;
      parentObj$$613.channel3frequency = (data$$81 & 7) << 8 | parentObj$$613.channel3frequency & 255;
      parentObj$$613.channel3FrequencyPeriod = 2048 - parentObj$$613.channel3frequency << 1;
      parentObj$$613.memory[65310] = data$$81 & 64;
      parentObj$$613.channel3EnableCheck()
    }
    return
  }
  function v820(parentObj$$612, address$$106, data$$80) {
    if(parentObj$$612.soundMasterEnabled) {
      parentObj$$612.audioJIT();
      parentObj$$612.channel3frequency = parentObj$$612.channel3frequency & 1792 | data$$80;
      parentObj$$612.channel3FrequencyPeriod = 2048 - parentObj$$612.channel3frequency << 1;
      parentObj$$612.memory[65309] = data$$80
    }
    return
  }
  function v819(parentObj$$611, address$$105, data$$79) {
    if(parentObj$$611.soundMasterEnabled) {
      parentObj$$611.audioJIT();
      data$$79 = data$$79 & 96;
      parentObj$$611.memory[65308] = data$$79;
      var v1164;
      if(data$$79 == 0) {
        v1164 = 4
      }else {
        v1164 = (data$$79 >> 5) - 1
      }
      parentObj$$611.channel3patternType = v1164
    }
    return
  }
  function v818(parentObj$$610, address$$104, data$$78) {
    var v5710 = parentObj$$610.soundMasterEnabled;
    if(!v5710) {
      v5710 = !parentObj$$610.cGBC
    }
    if(v5710) {
      if(parentObj$$610.soundMasterEnabled) {
        parentObj$$610.audioJIT()
      }
      parentObj$$610.channel3totalLength = 256 - data$$78;
      parentObj$$610.memory[65307] = data$$78;
      parentObj$$610.channel3EnableCheck()
    }
    return
  }
  function v817(parentObj$$609, address$$103, data$$77) {
    if(parentObj$$609.soundMasterEnabled) {
      parentObj$$609.audioJIT();
      var v5711 = !parentObj$$609.channel3canPlay;
      if(v5711) {
        v5711 = data$$77 >= 128
      }
      if(v5711) {
        parentObj$$609.channel3lastSampleLookup = 0;
        parentObj$$609.channel3UpdateCache()
      }
      parentObj$$609.channel3canPlay = data$$77 > 127;
      var v5712 = parentObj$$609.channel3canPlay;
      if(v5712) {
        var v8545 = parentObj$$609.memory[65306] > 127;
        if(v8545) {
          v8545 = !parentObj$$609.channel3consecutive
        }
        v5712 = v8545
      }
      if(v5712) {
        var v1170 = parentObj$$609.memory;
        v1170[65318] = v1170[65318] | 4
      }
      parentObj$$609.memory[65306] = data$$77 & 128
    }
    return
  }
  function v816(parentObj$$608, address$$102, data$$76) {
    if(parentObj$$608.soundMasterEnabled) {
      parentObj$$608.audioJIT();
      if(data$$76 > 127) {
        var nr22 = parentObj$$608.memory[65303];
        parentObj$$608.channel2envelopeVolume = nr22 >> 4;
        parentObj$$608.channel2OutputLevelCache();
        parentObj$$608.channel2envelopeSweepsLast = (nr22 & 7) - 1;
        if(parentObj$$608.channel2totalLength == 0) {
          parentObj$$608.channel2totalLength = 64
        }
        if((data$$76 & 64) == 64) {
          var v1177 = parentObj$$608.memory;
          v1177[65318] = v1177[65318] | 2
        }
      }
      parentObj$$608.channel2consecutive = (data$$76 & 64) == 0;
      parentObj$$608.channel2frequency = (data$$76 & 7) << 8 | parentObj$$608.channel2frequency & 255;
      parentObj$$608.channel2FrequencyTracker = 2048 - parentObj$$608.channel2frequency << 2;
      parentObj$$608.memory[65305] = data$$76 & 64;
      parentObj$$608.channel2EnableCheck()
    }
    return
  }
  function v815(parentObj$$607, address$$101, data$$75) {
    if(parentObj$$607.soundMasterEnabled) {
      parentObj$$607.audioJIT();
      parentObj$$607.channel2frequency = parentObj$$607.channel2frequency & 1792 | data$$75;
      parentObj$$607.channel2FrequencyTracker = 2048 - parentObj$$607.channel2frequency << 2;
      parentObj$$607.memory[65304] = data$$75
    }
    return
  }
  function v814(parentObj$$606, address$$100, data$$74) {
    if(parentObj$$606.soundMasterEnabled) {
      parentObj$$606.audioJIT();
      var v5720 = parentObj$$606.channel2Enabled;
      if(v5720) {
        v5720 = parentObj$$606.channel2envelopeSweeps == 0
      }
      if(v5720) {
        if(((parentObj$$606.memory[65303] ^ data$$74) & 8) == 8) {
          if((parentObj$$606.memory[65303] & 8) == 0) {
            if((parentObj$$606.memory[65303] & 7) == 7) {
              parentObj$$606.channel2envelopeVolume = parentObj$$606.channel2envelopeVolume + 2
            }else {
              parentObj$$606.channel2envelopeVolume = parentObj$$606.channel2envelopeVolume + 1
            }
          }
          parentObj$$606.channel2envelopeVolume = 16 - parentObj$$606.channel2envelopeVolume & 15
        }else {
          if((parentObj$$606.memory[65303] & 15) == 8) {
            parentObj$$606.channel2envelopeVolume = 1 + parentObj$$606.channel2envelopeVolume & 15
          }
        }
        parentObj$$606.channel2OutputLevelCache()
      }
      parentObj$$606.channel2envelopeType = (data$$74 & 8) == 8;
      parentObj$$606.memory[65303] = data$$74;
      parentObj$$606.channel2VolumeEnableCheck()
    }
    return
  }
  function v813(parentObj$$605, address$$99, data$$73) {
    var v5729 = parentObj$$605.soundMasterEnabled;
    if(!v5729) {
      v5729 = !parentObj$$605.cGBC
    }
    if(v5729) {
      if(parentObj$$605.soundMasterEnabled) {
        parentObj$$605.audioJIT()
      }else {
        data$$73 = data$$73 & 63
      }
      parentObj$$605.channel2CachedDuty = parentObj$$605.dutyLookup[data$$73 >> 6];
      parentObj$$605.channel2totalLength = 64 - (data$$73 & 63);
      parentObj$$605.memory[65302] = data$$73 & 192;
      parentObj$$605.channel2EnableCheck()
    }
    return
  }
  function v812(parentObj$$604, address$$98, data$$72) {
    if(parentObj$$604.soundMasterEnabled) {
      parentObj$$604.audioJIT();
      parentObj$$604.channel1consecutive = (data$$72 & 64) == 0;
      parentObj$$604.channel1frequency = (data$$72 & 7) << 8 | parentObj$$604.channel1frequency & 255;
      parentObj$$604.channel1FrequencyTracker = 2048 - parentObj$$604.channel1frequency << 2;
      if(data$$72 > 127) {
        parentObj$$604.channel1timeSweep = parentObj$$604.channel1lastTimeSweep;
        parentObj$$604.channel1numSweep = parentObj$$604.channel1frequencySweepDivider;
        var nr12 = parentObj$$604.memory[65298];
        parentObj$$604.channel1envelopeVolume = nr12 >> 4;
        parentObj$$604.channel1OutputLevelCache();
        parentObj$$604.channel1envelopeSweepsLast = (nr12 & 7) - 1;
        if(parentObj$$604.channel1totalLength == 0) {
          parentObj$$604.channel1totalLength = 64
        }
        var v5734 = parentObj$$604.channel1lastTimeSweep > 0;
        if(!v5734) {
          v5734 = parentObj$$604.channel1frequencySweepDivider > 0
        }
        if(v5734) {
          var v1213 = parentObj$$604.memory;
          v1213[65318] = v1213[65318] | 1
        }else {
          var v1214 = parentObj$$604.memory;
          v1214[65318] = v1214[65318] & 254
        }
        if((data$$72 & 64) == 64) {
          var v1216 = parentObj$$604.memory;
          v1216[65318] = v1216[65318] | 1
        }
        parentObj$$604.channel1ShadowFrequency = parentObj$$604.channel1frequency;
        parentObj$$604.channel1SweepFault = false;
        parentObj$$604.runAudioSweep()
      }
      parentObj$$604.channel1EnableCheck();
      parentObj$$604.memory[65300] = data$$72 & 64
    }
    return
  }
  function v811(parentObj$$603, address$$97, data$$71) {
    if(parentObj$$603.soundMasterEnabled) {
      parentObj$$603.audioJIT();
      parentObj$$603.channel1frequency = parentObj$$603.channel1frequency & 1792 | data$$71;
      parentObj$$603.channel1FrequencyTracker = 2048 - parentObj$$603.channel1frequency << 2;
      parentObj$$603.memory[65299] = data$$71
    }
    return
  }
  function v810(parentObj$$602, address$$96, data$$70) {
    if(parentObj$$602.soundMasterEnabled) {
      parentObj$$602.audioJIT();
      var v5738 = parentObj$$602.channel1Enabled;
      if(v5738) {
        v5738 = parentObj$$602.channel1envelopeSweeps == 0
      }
      if(v5738) {
        if(((parentObj$$602.memory[65298] ^ data$$70) & 8) == 8) {
          if((parentObj$$602.memory[65298] & 8) == 0) {
            if((parentObj$$602.memory[65298] & 7) == 7) {
              parentObj$$602.channel1envelopeVolume = parentObj$$602.channel1envelopeVolume + 2
            }else {
              parentObj$$602.channel1envelopeVolume = parentObj$$602.channel1envelopeVolume + 1
            }
          }
          parentObj$$602.channel1envelopeVolume = 16 - parentObj$$602.channel1envelopeVolume & 15
        }else {
          if((parentObj$$602.memory[65298] & 15) == 8) {
            parentObj$$602.channel1envelopeVolume = 1 + parentObj$$602.channel1envelopeVolume & 15
          }
        }
        parentObj$$602.channel1OutputLevelCache()
      }
      parentObj$$602.channel1envelopeType = (data$$70 & 8) == 8;
      parentObj$$602.memory[65298] = data$$70;
      parentObj$$602.channel1VolumeEnableCheck()
    }
    return
  }
  function v809(parentObj$$601, address$$95, data$$69) {
    var v5747 = parentObj$$601.soundMasterEnabled;
    if(!v5747) {
      v5747 = !parentObj$$601.cGBC
    }
    if(v5747) {
      if(parentObj$$601.soundMasterEnabled) {
        parentObj$$601.audioJIT()
      }else {
        data$$69 = data$$69 & 63
      }
      parentObj$$601.channel1CachedDuty = parentObj$$601.dutyLookup[data$$69 >> 6];
      parentObj$$601.channel1totalLength = 64 - (data$$69 & 63);
      parentObj$$601.memory[65297] = data$$69 & 192;
      parentObj$$601.channel1EnableCheck()
    }
    return
  }
  function v808(parentObj$$600, address$$94, data$$68) {
    if(parentObj$$600.soundMasterEnabled) {
      parentObj$$600.audioJIT();
      var v5748 = parentObj$$600.channel1decreaseSweep;
      if(v5748) {
        v5748 = (data$$68 & 8) == 0
      }
      if(v5748) {
        if(parentObj$$600.channel1numSweep != parentObj$$600.channel1frequencySweepDivider) {
          parentObj$$600.channel1SweepFault = true
        }
      }
      parentObj$$600.channel1lastTimeSweep = (data$$68 & 112) >> 4;
      parentObj$$600.channel1frequencySweepDivider = data$$68 & 7;
      parentObj$$600.channel1decreaseSweep = (data$$68 & 8) == 8;
      parentObj$$600.memory[65296] = data$$68;
      parentObj$$600.channel1EnableCheck()
    }
    return
  }
  function v807(parentObj$$599, address$$93, data$$67) {
    parentObj$$599.interruptsRequested = data$$67;
    parentObj$$599.checkIRQMatching();
    return
  }
  function v806(parentObj$$598, address$$92, data$$66) {
    parentObj$$598.memory[65287] = data$$66 & 7;
    parentObj$$598.TIMAEnabled = (data$$66 & 4) == 4;
    var v1249 = parentObj$$598;
    var v9785;
    if((data$$66 & 3) != 0) {
      v9785 = data$$66 & 3
    }else {
      v9785 = 4
    }
    v1249.TACClocker = Math.pow(4, v9785) << 2;
    return
  }
  function v805(parentObj$$597, address$$91, data$$65) {
    parentObj$$597.memory[65286] = data$$65;
    return
  }
  function v804(parentObj$$596, address$$90, data$$64) {
    parentObj$$596.memory[65285] = data$$64;
    return
  }
  function v803(parentObj$$595, address$$89, data$$63) {
    parentObj$$595.DIVTicks = parentObj$$595.DIVTicks & 255;
    parentObj$$595.memory[65284] = 0;
    return
  }
  function v802(parentObj$$594, address$$88, data$$62) {
    if(parentObj$$594.memory[65282] < 128) {
      parentObj$$594.memory[65281] = data$$62
    }
    return
  }
  function v801(parentObj$$593, address$$87, data$$61) {
    var v1255 = parentObj$$593.memory;
    var v5754 = data$$61 & 48;
    var v9786;
    if((data$$61 & 32) == 0) {
      v9786 = parentObj$$593.JoyPad >> 4
    }else {
      v9786 = 15
    }
    var v8571 = v9786;
    var v9787;
    if((data$$61 & 16) == 0) {
      v9787 = parentObj$$593.JoyPad & 15
    }else {
      v9787 = 15
    }
    v1255[65280] = v5754 | v8571 & v9787;
    return
  }
  this.memoryHighWriter[0] = this.memoryWriter[65280] = v801;
  this.memoryHighWriter[1] = this.memoryWriter[65281] = v802;
  this.memoryHighWriter[4] = this.memoryWriter[65284] = v803;
  this.memoryHighWriter[5] = this.memoryWriter[65285] = v804;
  this.memoryHighWriter[6] = this.memoryWriter[65286] = v805;
  this.memoryHighWriter[7] = this.memoryWriter[65287] = v806;
  this.memoryHighWriter[15] = this.memoryWriter[65295] = v807;
  this.memoryHighWriter[16] = this.memoryWriter[65296] = v808;
  this.memoryHighWriter[17] = this.memoryWriter[65297] = v809;
  this.memoryHighWriter[18] = this.memoryWriter[65298] = v810;
  this.memoryHighWriter[19] = this.memoryWriter[65299] = v811;
  this.memoryHighWriter[20] = this.memoryWriter[65300] = v812;
  this.memoryHighWriter[22] = this.memoryWriter[65302] = v813;
  this.memoryHighWriter[23] = this.memoryWriter[65303] = v814;
  this.memoryHighWriter[24] = this.memoryWriter[65304] = v815;
  this.memoryHighWriter[25] = this.memoryWriter[65305] = v816;
  this.memoryHighWriter[26] = this.memoryWriter[65306] = v817;
  this.memoryHighWriter[27] = this.memoryWriter[65307] = v818;
  this.memoryHighWriter[28] = this.memoryWriter[65308] = v819;
  this.memoryHighWriter[29] = this.memoryWriter[65309] = v820;
  this.memoryHighWriter[30] = this.memoryWriter[65310] = v821;
  this.memoryHighWriter[32] = this.memoryWriter[65312] = v822;
  this.memoryHighWriter[33] = this.memoryWriter[65313] = v823;
  this.memoryHighWriter[34] = this.memoryWriter[65314] = v824;
  this.memoryHighWriter[35] = this.memoryWriter[65315] = v825;
  this.memoryHighWriter[36] = this.memoryWriter[65316] = v826;
  this.memoryHighWriter[37] = this.memoryWriter[65317] = v827;
  this.memoryHighWriter[38] = this.memoryWriter[65318] = v828;
  this.memoryHighWriter[39] = this.memoryWriter[65319] = this.cartIgnoreWrite;
  this.memoryHighWriter[40] = this.memoryWriter[65320] = this.cartIgnoreWrite;
  this.memoryHighWriter[41] = this.memoryWriter[65321] = this.cartIgnoreWrite;
  this.memoryHighWriter[42] = this.memoryWriter[65322] = this.cartIgnoreWrite;
  this.memoryHighWriter[43] = this.memoryWriter[65323] = this.cartIgnoreWrite;
  this.memoryHighWriter[44] = this.memoryWriter[65324] = this.cartIgnoreWrite;
  this.memoryHighWriter[45] = this.memoryWriter[65325] = this.cartIgnoreWrite;
  this.memoryHighWriter[46] = this.memoryWriter[65326] = this.cartIgnoreWrite;
  this.memoryHighWriter[47] = this.memoryWriter[65327] = this.cartIgnoreWrite;
  this.memoryHighWriter[48] = this.memoryWriter[65328] = v829;
  this.memoryHighWriter[49] = this.memoryWriter[65329] = v830;
  this.memoryHighWriter[50] = this.memoryWriter[65330] = v831;
  this.memoryHighWriter[51] = this.memoryWriter[65331] = v832;
  this.memoryHighWriter[52] = this.memoryWriter[65332] = v833;
  this.memoryHighWriter[53] = this.memoryWriter[65333] = v834;
  this.memoryHighWriter[54] = this.memoryWriter[65334] = v835;
  this.memoryHighWriter[55] = this.memoryWriter[65335] = v836;
  this.memoryHighWriter[56] = this.memoryWriter[65336] = v837;
  this.memoryHighWriter[57] = this.memoryWriter[65337] = v838;
  this.memoryHighWriter[58] = this.memoryWriter[65338] = v839;
  this.memoryHighWriter[59] = this.memoryWriter[65339] = v840;
  this.memoryHighWriter[60] = this.memoryWriter[65340] = v841;
  this.memoryHighWriter[61] = this.memoryWriter[65341] = v842;
  this.memoryHighWriter[62] = this.memoryWriter[65342] = v843;
  this.memoryHighWriter[63] = this.memoryWriter[65343] = v844;
  this.memoryHighWriter[66] = this.memoryWriter[65346] = v845;
  this.memoryHighWriter[67] = this.memoryWriter[65347] = v846;
  this.memoryHighWriter[68] = this.memoryWriter[65348] = v847;
  this.memoryHighWriter[69] = this.memoryWriter[65349] = v848;
  this.memoryHighWriter[74] = this.memoryWriter[65354] = v849;
  this.memoryHighWriter[75] = this.memoryWriter[65355] = v850;
  this.memoryHighWriter[114] = this.memoryWriter[65394] = v851;
  this.memoryHighWriter[115] = this.memoryWriter[65395] = v852;
  this.memoryHighWriter[117] = this.memoryWriter[65397] = v853;
  this.memoryHighWriter[118] = this.memoryWriter[65398] = this.cartIgnoreWrite;
  this.memoryHighWriter[119] = this.memoryWriter[65399] = this.cartIgnoreWrite;
  this.memoryHighWriter[255] = this.memoryWriter[65535] = v854;
  this.recompileModelSpecificIOWriteHandling();
  this.recompileBootIOWriteHandling();
  return
}
function v800(tilesToTransfer) {
  if(!this.halt) {
    this.CPUTicks = this.CPUTicks + (4 | tilesToTransfer << 5 << this.doubleSpeedShifter)
  }
  var source$$1 = this.memory[65361] << 8 | this.memory[65362];
  var destination = this.memory[65363] << 8 | this.memory[65364];
  var memoryReader = this.memoryReader;
  this.graphicsJIT();
  var memory = this.memory;
  if(this.currVRAMBank == 0) {
    var v1392 = tilesToTransfer > 0;
    do {
      if(destination < 6144) {
        var v1326 = memory;
        var v1327 = 32768 | destination;
        var v5829 = source$$1;
        source$$1 = source$$1 + 1;
        var v10781 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5829]);
        v1326[v1327] = v10781;
        var v1328 = memory;
        var v1329 = 32769 | destination;
        var v5830 = source$$1;
        source$$1 = source$$1 + 1;
        var v10782 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5830]);
        v1328[v1329] = v10782;
        var v1330 = memory;
        var v1331 = 32770 | destination;
        var v5831 = source$$1;
        source$$1 = source$$1 + 1;
        var v10783 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5831]);
        v1330[v1331] = v10783;
        var v1332 = memory;
        var v1333 = 32771 | destination;
        var v5832 = source$$1;
        source$$1 = source$$1 + 1;
        var v10784 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5832]);
        v1332[v1333] = v10784;
        var v1334 = memory;
        var v1335 = 32772 | destination;
        var v5833 = source$$1;
        source$$1 = source$$1 + 1;
        var v10785 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5833]);
        v1334[v1335] = v10785;
        var v1336 = memory;
        var v1337 = 32773 | destination;
        var v5834 = source$$1;
        source$$1 = source$$1 + 1;
        var v10786 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5834]);
        v1336[v1337] = v10786;
        var v1338 = memory;
        var v1339 = 32774 | destination;
        var v5835 = source$$1;
        source$$1 = source$$1 + 1;
        var v10787 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5835]);
        v1338[v1339] = v10787;
        var v1340 = memory;
        var v1341 = 32775 | destination;
        var v5836 = source$$1;
        source$$1 = source$$1 + 1;
        var v10788 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5836]);
        v1340[v1341] = v10788;
        var v1342 = memory;
        var v1343 = 32776 | destination;
        var v5837 = source$$1;
        source$$1 = source$$1 + 1;
        var v10789 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5837]);
        v1342[v1343] = v10789;
        var v1344 = memory;
        var v1345 = 32777 | destination;
        var v5838 = source$$1;
        source$$1 = source$$1 + 1;
        var v10790 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5838]);
        v1344[v1345] = v10790;
        var v1346 = memory;
        var v1347 = 32778 | destination;
        var v5839 = source$$1;
        source$$1 = source$$1 + 1;
        var v10791 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5839]);
        v1346[v1347] = v10791;
        var v1348 = memory;
        var v1349 = 32779 | destination;
        var v5840 = source$$1;
        source$$1 = source$$1 + 1;
        var v10792 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5840]);
        v1348[v1349] = v10792;
        var v1350 = memory;
        var v1351 = 32780 | destination;
        var v5841 = source$$1;
        source$$1 = source$$1 + 1;
        var v10793 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5841]);
        v1350[v1351] = v10793;
        var v1352 = memory;
        var v1353 = 32781 | destination;
        var v5842 = source$$1;
        source$$1 = source$$1 + 1;
        var v10794 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5842]);
        v1352[v1353] = v10794;
        var v1354 = memory;
        var v1355 = 32782 | destination;
        var v5843 = source$$1;
        source$$1 = source$$1 + 1;
        var v10795 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5843]);
        v1354[v1355] = v10795;
        var v1356 = memory;
        var v1357 = 32783 | destination;
        var v5844 = source$$1;
        source$$1 = source$$1 + 1;
        var v10796 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5844]);
        v1356[v1357] = v10796;
        JAM.call(this.generateGBCTileBank1, this, [destination]);
        destination = destination + 16
      }else {
        destination = destination & 2032;
        var v1358 = this.BGCHRBank1;
        var v1359 = destination;
        destination = destination + 1;
        var v5845 = source$$1;
        source$$1 = source$$1 + 1;
        var v10797 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5845]);
        v1358[v1359] = v10797;
        var v1360 = this.BGCHRBank1;
        var v1361 = destination;
        destination = destination + 1;
        var v5846 = source$$1;
        source$$1 = source$$1 + 1;
        var v10798 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5846]);
        v1360[v1361] = v10798;
        var v1362 = this.BGCHRBank1;
        var v1363 = destination;
        destination = destination + 1;
        var v5847 = source$$1;
        source$$1 = source$$1 + 1;
        var v10799 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5847]);
        v1362[v1363] = v10799;
        var v1364 = this.BGCHRBank1;
        var v1365 = destination;
        destination = destination + 1;
        var v5848 = source$$1;
        source$$1 = source$$1 + 1;
        var v10800 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5848]);
        v1364[v1365] = v10800;
        var v1366 = this.BGCHRBank1;
        var v1367 = destination;
        destination = destination + 1;
        var v5849 = source$$1;
        source$$1 = source$$1 + 1;
        var v10801 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5849]);
        v1366[v1367] = v10801;
        var v1368 = this.BGCHRBank1;
        var v1369 = destination;
        destination = destination + 1;
        var v5850 = source$$1;
        source$$1 = source$$1 + 1;
        var v10802 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5850]);
        v1368[v1369] = v10802;
        var v1370 = this.BGCHRBank1;
        var v1371 = destination;
        destination = destination + 1;
        var v5851 = source$$1;
        source$$1 = source$$1 + 1;
        var v10803 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5851]);
        v1370[v1371] = v10803;
        var v1372 = this.BGCHRBank1;
        var v1373 = destination;
        destination = destination + 1;
        var v5852 = source$$1;
        source$$1 = source$$1 + 1;
        var v10804 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5852]);
        v1372[v1373] = v10804;
        var v1374 = this.BGCHRBank1;
        var v1375 = destination;
        destination = destination + 1;
        var v5853 = source$$1;
        source$$1 = source$$1 + 1;
        var v10805 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5853]);
        v1374[v1375] = v10805;
        var v1376 = this.BGCHRBank1;
        var v1377 = destination;
        destination = destination + 1;
        var v5854 = source$$1;
        source$$1 = source$$1 + 1;
        var v10806 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5854]);
        v1376[v1377] = v10806;
        var v1378 = this.BGCHRBank1;
        var v1379 = destination;
        destination = destination + 1;
        var v5855 = source$$1;
        source$$1 = source$$1 + 1;
        var v10807 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5855]);
        v1378[v1379] = v10807;
        var v1380 = this.BGCHRBank1;
        var v1381 = destination;
        destination = destination + 1;
        var v5856 = source$$1;
        source$$1 = source$$1 + 1;
        var v10808 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5856]);
        v1380[v1381] = v10808;
        var v1382 = this.BGCHRBank1;
        var v1383 = destination;
        destination = destination + 1;
        var v5857 = source$$1;
        source$$1 = source$$1 + 1;
        var v10809 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5857]);
        v1382[v1383] = v10809;
        var v1384 = this.BGCHRBank1;
        var v1385 = destination;
        destination = destination + 1;
        var v5858 = source$$1;
        source$$1 = source$$1 + 1;
        var v10810 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5858]);
        v1384[v1385] = v10810;
        var v1386 = this.BGCHRBank1;
        var v1387 = destination;
        destination = destination + 1;
        var v5859 = source$$1;
        source$$1 = source$$1 + 1;
        var v10811 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5859]);
        v1386[v1387] = v10811;
        var v1388 = this.BGCHRBank1;
        var v1389 = destination;
        destination = destination + 1;
        var v5860 = source$$1;
        source$$1 = source$$1 + 1;
        var v10812 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5860]);
        v1388[v1389] = v10812;
        destination = destination + 6144 & 8176
      }
      source$$1 = source$$1 & 65520;
      tilesToTransfer = tilesToTransfer - 1;
      v1392 = tilesToTransfer > 0
    }while(v1392)
  }else {
    var VRAM = this.VRAM;
    var v1459 = tilesToTransfer > 0;
    do {
      if(destination < 6144) {
        var v1393 = VRAM;
        var v1394 = destination;
        var v5861 = source$$1;
        source$$1 = source$$1 + 1;
        var v10813 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5861]);
        v1393[v1394] = v10813;
        var v1395 = VRAM;
        var v1396 = destination | 1;
        var v5862 = source$$1;
        source$$1 = source$$1 + 1;
        var v10814 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5862]);
        v1395[v1396] = v10814;
        var v1397 = VRAM;
        var v1398 = destination | 2;
        var v5863 = source$$1;
        source$$1 = source$$1 + 1;
        var v10815 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5863]);
        v1397[v1398] = v10815;
        var v1399 = VRAM;
        var v1400 = destination | 3;
        var v5864 = source$$1;
        source$$1 = source$$1 + 1;
        var v10816 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5864]);
        v1399[v1400] = v10816;
        var v1401 = VRAM;
        var v1402 = destination | 4;
        var v5865 = source$$1;
        source$$1 = source$$1 + 1;
        var v10817 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5865]);
        v1401[v1402] = v10817;
        var v1403 = VRAM;
        var v1404 = destination | 5;
        var v5866 = source$$1;
        source$$1 = source$$1 + 1;
        var v10818 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5866]);
        v1403[v1404] = v10818;
        var v1405 = VRAM;
        var v1406 = destination | 6;
        var v5867 = source$$1;
        source$$1 = source$$1 + 1;
        var v10819 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5867]);
        v1405[v1406] = v10819;
        var v1407 = VRAM;
        var v1408 = destination | 7;
        var v5868 = source$$1;
        source$$1 = source$$1 + 1;
        var v10820 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5868]);
        v1407[v1408] = v10820;
        var v1409 = VRAM;
        var v1410 = destination | 8;
        var v5869 = source$$1;
        source$$1 = source$$1 + 1;
        var v10821 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5869]);
        v1409[v1410] = v10821;
        var v1411 = VRAM;
        var v1412 = destination | 9;
        var v5870 = source$$1;
        source$$1 = source$$1 + 1;
        var v10822 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5870]);
        v1411[v1412] = v10822;
        var v1413 = VRAM;
        var v1414 = destination | 10;
        var v5871 = source$$1;
        source$$1 = source$$1 + 1;
        var v10823 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5871]);
        v1413[v1414] = v10823;
        var v1415 = VRAM;
        var v1416 = destination | 11;
        var v5872 = source$$1;
        source$$1 = source$$1 + 1;
        var v10824 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5872]);
        v1415[v1416] = v10824;
        var v1417 = VRAM;
        var v1418 = destination | 12;
        var v5873 = source$$1;
        source$$1 = source$$1 + 1;
        var v10825 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5873]);
        v1417[v1418] = v10825;
        var v1419 = VRAM;
        var v1420 = destination | 13;
        var v5874 = source$$1;
        source$$1 = source$$1 + 1;
        var v10826 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5874]);
        v1419[v1420] = v10826;
        var v1421 = VRAM;
        var v1422 = destination | 14;
        var v5875 = source$$1;
        source$$1 = source$$1 + 1;
        var v10827 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5875]);
        v1421[v1422] = v10827;
        var v1423 = VRAM;
        var v1424 = destination | 15;
        var v5876 = source$$1;
        source$$1 = source$$1 + 1;
        var v10828 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5876]);
        v1423[v1424] = v10828;
        JAM.call(this.generateGBCTileBank2, this, [destination]);
        destination = destination + 16
      }else {
        destination = destination & 2032;
        var v1425 = this.BGCHRBank2;
        var v1426 = destination;
        destination = destination + 1;
        var v5877 = source$$1;
        source$$1 = source$$1 + 1;
        var v10829 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5877]);
        v1425[v1426] = v10829;
        var v1427 = this.BGCHRBank2;
        var v1428 = destination;
        destination = destination + 1;
        var v5878 = source$$1;
        source$$1 = source$$1 + 1;
        var v10830 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5878]);
        v1427[v1428] = v10830;
        var v1429 = this.BGCHRBank2;
        var v1430 = destination;
        destination = destination + 1;
        var v5879 = source$$1;
        source$$1 = source$$1 + 1;
        var v10831 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5879]);
        v1429[v1430] = v10831;
        var v1431 = this.BGCHRBank2;
        var v1432 = destination;
        destination = destination + 1;
        var v5880 = source$$1;
        source$$1 = source$$1 + 1;
        var v10832 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5880]);
        v1431[v1432] = v10832;
        var v1433 = this.BGCHRBank2;
        var v1434 = destination;
        destination = destination + 1;
        var v5881 = source$$1;
        source$$1 = source$$1 + 1;
        var v10833 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5881]);
        v1433[v1434] = v10833;
        var v1435 = this.BGCHRBank2;
        var v1436 = destination;
        destination = destination + 1;
        var v5882 = source$$1;
        source$$1 = source$$1 + 1;
        var v10834 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5882]);
        v1435[v1436] = v10834;
        var v1437 = this.BGCHRBank2;
        var v1438 = destination;
        destination = destination + 1;
        var v5883 = source$$1;
        source$$1 = source$$1 + 1;
        var v10835 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5883]);
        v1437[v1438] = v10835;
        var v1439 = this.BGCHRBank2;
        var v1440 = destination;
        destination = destination + 1;
        var v5884 = source$$1;
        source$$1 = source$$1 + 1;
        var v10836 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5884]);
        v1439[v1440] = v10836;
        var v1441 = this.BGCHRBank2;
        var v1442 = destination;
        destination = destination + 1;
        var v5885 = source$$1;
        source$$1 = source$$1 + 1;
        var v10837 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5885]);
        v1441[v1442] = v10837;
        var v1443 = this.BGCHRBank2;
        var v1444 = destination;
        destination = destination + 1;
        var v5886 = source$$1;
        source$$1 = source$$1 + 1;
        var v10838 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5886]);
        v1443[v1444] = v10838;
        var v1445 = this.BGCHRBank2;
        var v1446 = destination;
        destination = destination + 1;
        var v5887 = source$$1;
        source$$1 = source$$1 + 1;
        var v10839 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5887]);
        v1445[v1446] = v10839;
        var v1447 = this.BGCHRBank2;
        var v1448 = destination;
        destination = destination + 1;
        var v5888 = source$$1;
        source$$1 = source$$1 + 1;
        var v10840 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5888]);
        v1447[v1448] = v10840;
        var v1449 = this.BGCHRBank2;
        var v1450 = destination;
        destination = destination + 1;
        var v5889 = source$$1;
        source$$1 = source$$1 + 1;
        var v10841 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5889]);
        v1449[v1450] = v10841;
        var v1451 = this.BGCHRBank2;
        var v1452 = destination;
        destination = destination + 1;
        var v5890 = source$$1;
        source$$1 = source$$1 + 1;
        var v10842 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5890]);
        v1451[v1452] = v10842;
        var v1453 = this.BGCHRBank2;
        var v1454 = destination;
        destination = destination + 1;
        var v5891 = source$$1;
        source$$1 = source$$1 + 1;
        var v10843 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5891]);
        v1453[v1454] = v10843;
        var v1455 = this.BGCHRBank2;
        var v1456 = destination;
        destination = destination + 1;
        var v5892 = source$$1;
        source$$1 = source$$1 + 1;
        var v10844 = JAM.call(JAM.get(memoryReader, source$$1, JAM.policy.p1), memoryReader, [this, v5892]);
        v1455[v1456] = v10844;
        destination = destination + 6144 & 8176
      }
      source$$1 = source$$1 & 65520;
      tilesToTransfer = tilesToTransfer - 1;
      v1459 = tilesToTransfer > 0
    }while(v1459)
  }
  memory[65361] = source$$1 >> 8;
  memory[65362] = source$$1 & 240;
  memory[65363] = destination >> 8;
  memory[65364] = destination & 240;
  return
}
function v799(parentObj$$592, address$$86, data$$60) {
  if(parentObj$$592.modeSTAT < 3) {
    address$$86 = address$$86 & 2047;
    var v8576 = parentObj$$592.BGCHRCurrentBank;
    introspect(JAM.policy.p1) {
      var v5894 = v8576[address$$86]
    }
    if(v5894 != data$$60) {
      parentObj$$592.graphicsJIT();
      JAM.set(parentObj$$592.BGCHRCurrentBank, address$$86, data$$60)
    }
  }
  return
}
function v798(parentObj$$591, address$$85, data$$59) {
  if(parentObj$$591.modeSTAT < 3) {
    address$$85 = address$$85 & 2047;
    var v8577 = parentObj$$591.BGCHRBank1;
    introspect(JAM.policy.p1) {
      var v5896 = v8577[address$$85]
    }
    if(v5896 != data$$59) {
      parentObj$$591.graphicsJIT();
      JAM.set(parentObj$$591.BGCHRBank1, address$$85, data$$59)
    }
  }
  return
}
function v797(parentObj$$590, address$$84, data$$58) {
  if(parentObj$$590.modeSTAT < 3) {
    if(parentObj$$590.currVRAMBank == 0) {
      var v8578 = parentObj$$590.memory;
      introspect(JAM.policy.p1) {
        var v5899 = v8578[address$$84]
      }
      if(v5899 != data$$58) {
        parentObj$$590.graphicsJIT();
        JAM.set(parentObj$$590.memory, address$$84, data$$58);
        JAM.call(parentObj$$590.generateGBCTileLineBank1, parentObj$$590, [address$$84])
      }
    }else {
      address$$84 = address$$84 & 8191;
      var v8579 = parentObj$$590.VRAM;
      introspect(JAM.policy.p1) {
        var v5900 = v8579[address$$84]
      }
      if(v5900 != data$$58) {
        parentObj$$590.graphicsJIT();
        JAM.set(parentObj$$590.VRAM, address$$84, data$$58);
        JAM.call(parentObj$$590.generateGBCTileLineBank2, parentObj$$590, [address$$84])
      }
    }
  }
  return
}
function v796(parentObj$$589, address$$83, data$$57) {
  if(parentObj$$589.modeSTAT < 3) {
    var v8580 = parentObj$$589.memory;
    introspect(JAM.policy.p1) {
      var v5902 = v8580[address$$83]
    }
    if(v5902 != data$$57) {
      parentObj$$589.graphicsJIT();
      JAM.set(parentObj$$589.memory, address$$83, data$$57);
      JAM.call(parentObj$$589.generateGBTileLine, parentObj$$589, [address$$83])
    }
  }
  return
}
function v795(parentObj$$588, address$$82, data$$56) {
  if(parentObj$$588.modeSTAT < 3) {
    var v8581 = parentObj$$588.memory;
    introspect(JAM.policy.p1) {
      var v5904 = v8581[address$$82]
    }
    if(v5904 != data$$56) {
      parentObj$$588.graphicsJIT();
      JAM.set(parentObj$$588.memory, address$$82, data$$56);
      JAM.call(parentObj$$588.generateGBOAMTileLine, parentObj$$588, [address$$82])
    }
  }
  return
}
function v794(parentObj$$587, address$$81, data$$55) {
  parentObj$$587.memory[address$$81 - 8192] = data$$55;
  return
}
function v793(parentObj$$586, address$$80, data$$54) {
  JAM.set(parentObj$$586.GBCMemory, address$$80 + parentObj$$586.gbcRamBankPositionECHO, data$$54);
  return
}
function v792(parentObj$$585, address$$79, data$$53) {
  if(parentObj$$585.modeSTAT < 2) {
    var v8582 = parentObj$$585.memory;
    introspect(JAM.policy.p1) {
      var v5907 = v8582[address$$79]
    }
    if(v5907 != data$$53) {
      parentObj$$585.graphicsJIT();
      JAM.set(parentObj$$585.memory, address$$79, data$$53)
    }
  }
  return
}
function v791(parentObj$$584, address$$78, data$$52) {
  JAM.set(parentObj$$584.GBCMemory, address$$78 + parentObj$$584.gbcRamBankPosition, data$$52);
  return
}
function v790(parentObj$$583, address$$77, data$$51) {
  var v5909 = parentObj$$583.MBCRAMBanksEnabled;
  if(!v5909) {
    v5909 = settings[10]
  }
  if(v5909) {
    switch(parentObj$$583.currMBCRAMBank) {
      case 0:
      ;
      case 1:
      ;
      case 2:
      ;
      case 3:
        JAM.set(parentObj$$583.MBCRam, address$$77 + parentObj$$583.currMBCRAMBankPosition, data$$51);
        break;
      case 8:
        if(data$$51 < 60) {
          parentObj$$583.RTCSeconds = data$$51
        }else {
          cout("(Bank #" + parentObj$$583.currMBCRAMBank + ") RTC write out of range: " + data$$51, 1)
        }
        break;
      case 9:
        if(data$$51 < 60) {
          parentObj$$583.RTCMinutes = data$$51
        }else {
          cout("(Bank #" + parentObj$$583.currMBCRAMBank + ") RTC write out of range: " + data$$51, 1)
        }
        break;
      case 10:
        if(data$$51 < 24) {
          parentObj$$583.RTCHours = data$$51
        }else {
          cout("(Bank #" + parentObj$$583.currMBCRAMBank + ") RTC write out of range: " + data$$51, 1)
        }
        break;
      case 11:
        parentObj$$583.RTCDays = data$$51 & 255 | parentObj$$583.RTCDays & 256;
        break;
      case 12:
        parentObj$$583.RTCDayOverFlow = data$$51 > 127;
        parentObj$$583.RTCHalt = (data$$51 & 64) == 64;
        parentObj$$583.RTCDays = (data$$51 & 1) << 8 | parentObj$$583.RTCDays & 255;
        break;
      default:
        cout("Invalid MBC3 bank address selected: " + parentObj$$583.currMBCRAMBank, 0)
    }
  }
  return
}
function v789(parentObj$$582, address$$76, data$$50) {
  var v5918 = parentObj$$582.MBCRAMBanksEnabled;
  if(!v5918) {
    v5918 = settings[10]
  }
  if(v5918) {
    JAM.set(parentObj$$582.MBCRam, address$$76 + parentObj$$582.currMBCRAMBankPosition, data$$50)
  }
  return
}
function v788(parentObj$$581, address$$75, data$$49) {
  parentObj$$581.memory[65280 | address$$75] = data$$49;
  return
}
function v787(parentObj$$580, address$$74, data$$48) {
  JAM.set(parentObj$$580.memory, address$$74, data$$48);
  return
}
function v786(parentObj$$579, address$$73, data$$47) {
  return
}
function v785(parentObj$$578, address$$72, data$$46) {
  parentObj$$578.currMBCRAMBank = data$$46 & 3;
  parentObj$$578.currMBCRAMBankPosition = (parentObj$$578.currMBCRAMBank << 13) - 40960;
  return
}
function v784(parentObj$$577, address$$71, data$$45) {
  parentObj$$577.currMBCRAMBank = data$$45 & 3;
  parentObj$$577.currMBCRAMBankPosition = (parentObj$$577.currMBCRAMBank << 13) - 40960;
  return
}
function v783(parentObj$$576, address$$70, data$$44) {
  parentObj$$576.currMBCRAMBank = data$$44 & 15;
  parentObj$$576.currMBCRAMBankPosition = (parentObj$$576.currMBCRAMBank << 13) - 40960;
  return
}
function v782(parentObj$$575, address$$69, data$$43) {
  parentObj$$575.ROMBank1offs = (data$$43 & 1) << 8 | parentObj$$575.ROMBank1offs & 255;
  parentObj$$575.setCurrentMBC5ROMBank();
  return
}
function v781(parentObj$$574, address$$68, data$$42) {
  parentObj$$574.ROMBank1offs = parentObj$$574.ROMBank1offs & 256 | data$$42;
  parentObj$$574.setCurrentMBC5ROMBank();
  return
}
function v780(parentObj$$573, address$$67, data$$41) {
  if(data$$41 == 0) {
    parentObj$$573.RTCisLatched = false
  }else {
    if(!parentObj$$573.RTCisLatched) {
      parentObj$$573.RTCisLatched = true;
      parentObj$$573.latchedSeconds = parentObj$$573.RTCSeconds | 0;
      parentObj$$573.latchedMinutes = parentObj$$573.RTCMinutes;
      parentObj$$573.latchedHours = parentObj$$573.RTCHours;
      parentObj$$573.latchedLDays = parentObj$$573.RTCDays & 255;
      parentObj$$573.latchedHDays = parentObj$$573.RTCDays >> 8
    }
  }
  return
}
function v779(parentObj$$572, address$$66, data$$40) {
  parentObj$$572.currMBCRAMBank = data$$40;
  if(data$$40 < 4) {
    parentObj$$572.currMBCRAMBankPosition = (parentObj$$572.currMBCRAMBank << 13) - 40960
  }
  return
}
function v778(parentObj$$571, address$$65, data$$39) {
  parentObj$$571.ROMBank1offs = data$$39 & 127;
  parentObj$$571.setCurrentMBC2AND3ROMBank();
  return
}
function v777(parentObj$$570, address$$64, data$$38) {
  parentObj$$570.ROMBank1offs = data$$38 & 15;
  parentObj$$570.setCurrentMBC2AND3ROMBank();
  return
}
function v776(parentObj$$569, address$$63, data$$37) {
  parentObj$$569.MBC1Mode = (data$$37 & 1) == 1;
  if(parentObj$$569.MBC1Mode) {
    parentObj$$569.ROMBank1offs = parentObj$$569.ROMBank1offs & 31;
    parentObj$$569.setCurrentMBC1ROMBank()
  }else {
    parentObj$$569.currMBCRAMBank = 0;
    parentObj$$569.currMBCRAMBankPosition = -40960
  }
  return
}
function v775(parentObj$$568, address$$62, data$$36) {
  if(parentObj$$568.MBC1Mode) {
    parentObj$$568.currMBCRAMBank = data$$36 & 3;
    parentObj$$568.currMBCRAMBankPosition = (parentObj$$568.currMBCRAMBank << 13) - 40960
  }else {
    parentObj$$568.ROMBank1offs = (data$$36 & 3) << 5 | parentObj$$568.ROMBank1offs & 31;
    parentObj$$568.setCurrentMBC1ROMBank()
  }
  return
}
function v774(parentObj$$567, address$$61, data$$35) {
  parentObj$$567.ROMBank1offs = parentObj$$567.ROMBank1offs & 96 | data$$35 & 31;
  parentObj$$567.setCurrentMBC1ROMBank();
  return
}
function v773(parentObj$$566, address$$60, data$$34) {
  parentObj$$566.MBCRAMBanksEnabled = (data$$34 & 15) == 10;
  return
}
function v772() {
  var index$$63 = 0;
  var v1603 = index$$63 <= 65535;
  for(;v1603;) {
    if(index$$63 < 32768) {
      if(this.cMBC1) {
        if(index$$63 < 8192) {
          this.memoryWriter[index$$63] = this.MBCWriteEnable
        }else {
          if(index$$63 < 16384) {
            this.memoryWriter[index$$63] = this.MBC1WriteROMBank
          }else {
            if(index$$63 < 24576) {
              this.memoryWriter[index$$63] = this.MBC1WriteRAMBank
            }else {
              this.memoryWriter[index$$63] = this.MBC1WriteType
            }
          }
        }
      }else {
        if(this.cMBC2) {
          if(index$$63 < 4096) {
            this.memoryWriter[index$$63] = this.MBCWriteEnable
          }else {
            var v5933 = index$$63 >= 8448;
            if(v5933) {
              v5933 = index$$63 < 8704
            }
            if(v5933) {
              this.memoryWriter[index$$63] = this.MBC2WriteROMBank
            }else {
              this.memoryWriter[index$$63] = this.cartIgnoreWrite
            }
          }
        }else {
          if(this.cMBC3) {
            if(index$$63 < 8192) {
              this.memoryWriter[index$$63] = this.MBCWriteEnable
            }else {
              if(index$$63 < 16384) {
                this.memoryWriter[index$$63] = this.MBC3WriteROMBank
              }else {
                if(index$$63 < 24576) {
                  this.memoryWriter[index$$63] = this.MBC3WriteRAMBank
                }else {
                  this.memoryWriter[index$$63] = this.MBC3WriteRTCLatch
                }
              }
            }
          }else {
            var v5934 = this.cMBC5;
            if(!v5934) {
              var v8588 = this.cRUMBLE;
              if(!v8588) {
                v8588 = this.cMBC7
              }
              v5934 = v8588
            }
            if(v5934) {
              if(index$$63 < 8192) {
                this.memoryWriter[index$$63] = this.MBCWriteEnable
              }else {
                if(index$$63 < 12288) {
                  this.memoryWriter[index$$63] = this.MBC5WriteROMBankLow
                }else {
                  if(index$$63 < 16384) {
                    this.memoryWriter[index$$63] = this.MBC5WriteROMBankHigh
                  }else {
                    if(index$$63 < 24576) {
                      var v1554 = this.memoryWriter;
                      var v5935;
                      if(this.cRUMBLE) {
                        v5935 = this.RUMBLEWriteRAMBank
                      }else {
                        v5935 = this.MBC5WriteRAMBank
                      }
                      v1554[index$$63] = v5935
                    }else {
                      this.memoryWriter[index$$63] = this.cartIgnoreWrite
                    }
                  }
                }
              }
            }else {
              if(this.cHuC3) {
                if(index$$63 < 8192) {
                  this.memoryWriter[index$$63] = this.MBCWriteEnable
                }else {
                  if(index$$63 < 16384) {
                    this.memoryWriter[index$$63] = this.MBC3WriteROMBank
                  }else {
                    if(index$$63 < 24576) {
                      this.memoryWriter[index$$63] = this.HuC3WriteRAMBank
                    }else {
                      this.memoryWriter[index$$63] = this.cartIgnoreWrite
                    }
                  }
                }
              }else {
                this.memoryWriter[index$$63] = this.cartIgnoreWrite
              }
            }
          }
        }
      }
    }else {
      if(index$$63 < 36864) {
        var v1573 = this.memoryWriter;
        var v5936;
        if(this.cGBC) {
          v5936 = this.VRAMGBCDATAWrite
        }else {
          v5936 = this.VRAMGBDATAWrite
        }
        v1573[index$$63] = v5936
      }else {
        if(index$$63 < 38912) {
          var v1574 = this.memoryWriter;
          var v5937;
          if(this.cGBC) {
            v5937 = this.VRAMGBCDATAWrite
          }else {
            v5937 = this.VRAMGBDATAUpperWrite
          }
          v1574[index$$63] = v5937
        }else {
          if(index$$63 < 40960) {
            var v1575 = this.memoryWriter;
            var v5938;
            if(this.cGBC) {
              v5938 = this.VRAMGBCCHRMAPWrite
            }else {
              v5938 = this.VRAMGBCHRMAPWrite
            }
            v1575[index$$63] = v5938
          }else {
            if(index$$63 < 49152) {
              var v8594 = this.numRAMBanks == 1 / 16;
              if(v8594) {
                v8594 = index$$63 < 41472
              }
              var v5939 = v8594;
              if(!v5939) {
                v5939 = this.numRAMBanks >= 1
              }
              if(v5939) {
                if(!this.cMBC3) {
                  this.memoryWriter[index$$63] = this.memoryWriteMBCRAM
                }else {
                  this.memoryWriter[index$$63] = this.memoryWriteMBC3RAM
                }
              }else {
                this.memoryWriter[index$$63] = this.cartIgnoreWrite
              }
            }else {
              if(index$$63 < 57344) {
                var v5941 = this.cGBC;
                if(v5941) {
                  v5941 = index$$63 >= 53248
                }
                if(v5941) {
                  this.memoryWriter[index$$63] = this.memoryWriteGBCRAM
                }else {
                  this.memoryWriter[index$$63] = this.memoryWriteNormal
                }
              }else {
                if(index$$63 < 65024) {
                  var v5942 = this.cGBC;
                  if(v5942) {
                    v5942 = index$$63 >= 61440
                  }
                  if(v5942) {
                    this.memoryWriter[index$$63] = this.memoryWriteECHOGBCRAM
                  }else {
                    this.memoryWriter[index$$63] = this.memoryWriteECHONormal
                  }
                }else {
                  if(index$$63 <= 65184) {
                    this.memoryWriter[index$$63] = this.memoryWriteOAMRAM
                  }else {
                    if(index$$63 < 65280) {
                      if(this.cGBC) {
                        this.memoryWriter[index$$63] = this.memoryWriteNormal
                      }else {
                        this.memoryWriter[index$$63] = this.cartIgnoreWrite
                      }
                    }else {
                      this.memoryWriter[index$$63] = this.memoryWriteNormal;
                      this.memoryHighWriter[index$$63 & 255] = this.memoryHighWriteNormal
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    index$$63 = index$$63 + 1;
    v1603 = index$$63 <= 65535
  }
  this.registerWriteJumpCompile();
  return
}
function v771(address$$59, data$$33) {
  var v1604 = this.memoryHighWriter;
  JAM.call(JAM.get(v1604, address$$59, JAM.policy.p1), v1604, [this, address$$59, data$$33]);
  return
}
function v770(address$$58, data$$32) {
  var v1605 = this.memoryWriter;
  JAM.call(JAM.get(v1605, address$$58, JAM.policy.p1), v1605, [this, address$$58, data$$32]);
  return
}
function v769() {
  this.currentROMBank = this.ROMBank1offs % this.ROMBankEdge - 1 << 14;
  return
}
function v768() {
  this.currentROMBank = Math.max(this.ROMBank1offs % this.ROMBankEdge - 1, 0) << 14;
  return
}
function v767() {
  switch(this.ROMBank1offs) {
    case 0:
    ;
    case 32:
    ;
    case 64:
    ;
    case 96:
      this.currentROMBank = this.ROMBank1offs % this.ROMBankEdge << 14;
      break;
    default:
      this.currentROMBank = this.ROMBank1offs % this.ROMBankEdge - 1 << 14
  }
  return
}
function v766(parentObj$$565, address$$57) {
  var v1611;
  if(parentObj$$565.modeSTAT > 2) {
    v1611 = 255
  }else {
    v1611 = parentObj$$565.BGCHRBank1[address$$57 & 2047]
  }
  return v1611
}
function v765(parentObj$$564, address$$56) {
  var v1612;
  if(parentObj$$564.modeSTAT > 2) {
    v1612 = 255
  }else {
    v1612 = parentObj$$564.BGCHRCurrentBank[address$$56 & 2047]
  }
  return v1612
}
function v764(parentObj$$563, address$$55) {
  var v1613;
  if(parentObj$$563.modeSTAT > 2) {
    v1613 = 255
  }else {
    var v5954 = parentObj$$563.memory;
    introspect(JAM.policy.p1) {
      v1613 = v5954[address$$55]
    }
  }
  return v1613
}
function v763(parentObj$$562, address$$54) {
  var v1614;
  if(parentObj$$562.modeSTAT > 2) {
    v1614 = 255
  }else {
    var v5956;
    if(parentObj$$562.currVRAMBank == 0) {
      var v8606 = parentObj$$562.memory;
      introspect(JAM.policy.p1) {
        v5956 = v8606[address$$54]
      }
    }else {
      v5956 = parentObj$$562.VRAM[address$$54 & 8191]
    }
    v1614 = v5956
  }
  return v1614
}
function v762(parentObj$$561, address$$53) {
  return 255
}
function v761(parentObj$$560, address$$52) {
  var v1615 = parentObj$$560.memory;
  var v1616 = address$$52 - 8192;
  introspect(JAM.policy.p1) {
    return v1615[v1616]
  }
}
function v760(parentObj$$559, address$$51) {
  var v1617 = parentObj$$559.GBCMemory;
  var v1618 = address$$51 + parentObj$$559.gbcRamBankPositionECHO;
  introspect(JAM.policy.p1) {
    return v1617[v1618]
  }
}
function v759(parentObj$$558, address$$50) {
  var v1619;
  if(parentObj$$558.modeSTAT > 1) {
    v1619 = 255
  }else {
    var v5959 = parentObj$$558.memory;
    introspect(JAM.policy.p1) {
      v1619 = v5959[address$$50]
    }
  }
  return v1619
}
function v758(parentObj$$557, address$$49) {
  var v1620 = parentObj$$557.GBCMemory;
  var v1621 = address$$49 + parentObj$$557.gbcRamBankPosition;
  introspect(JAM.policy.p1) {
    return v1620[v1621]
  }
}
function v757(parentObj$$556, address$$48) {
  var v5962 = parentObj$$556.MBCRAMBanksEnabled;
  if(!v5962) {
    v5962 = settings[10]
  }
  if(v5962) {
    switch(parentObj$$556.currMBCRAMBank) {
      case 0:
      ;
      case 1:
      ;
      case 2:
      ;
      case 3:
        var v1622 = parentObj$$556.MBCRam;
        var v1623 = address$$48 + parentObj$$556.currMBCRAMBankPosition;
        introspect(JAM.policy.p1) {
          return v1622[v1623]
        }
      ;
      case 8:
        return parentObj$$556.latchedSeconds;
      case 9:
        return parentObj$$556.latchedMinutes;
      case 10:
        return parentObj$$556.latchedHours;
      case 11:
        return parentObj$$556.latchedLDays;
      case 12:
        var v8612;
        if(parentObj$$556.RTCDayOverFlow) {
          v8612 = 128
        }else {
          v8612 = 0
        }
        var v5964 = v8612;
        var v8613;
        if(parentObj$$556.RTCHALT) {
          v8613 = 64
        }else {
          v8613 = 0
        }
        return v5964 + v8613 + parentObj$$556.latchedHDays
    }
  }
  return 255
}
function v756(parentObj$$555, address$$47) {
  var v5966 = parentObj$$555.MBCRAMBanksEnabled;
  if(!v5966) {
    v5966 = settings[10]
  }
  if(v5966) {
    switch(address$$47) {
      case 40960:
      ;
      case 41056:
      ;
      case 41072:
        return 0;
      case 41088:
        return 0;
      case 41040:
        return parentObj$$555.highY;
      case 41024:
        return parentObj$$555.lowY;
      case 41008:
        return parentObj$$555.highX;
      case 40992:
        return parentObj$$555.lowX;
      default:
        var v1628 = parentObj$$555.MBCRam;
        var v1629 = address$$47 + parentObj$$555.currMBCRAMBankPosition;
        introspect(JAM.policy.p1) {
          return v1628[v1629]
        }
    }
  }
  return 255
}
function v755(parentObj$$554, address$$46) {
  var v5968 = parentObj$$554.MBCRAMBanksEnabled;
  if(!v5968) {
    v5968 = settings[10]
  }
  if(v5968) {
    var v1631 = parentObj$$554.MBCRam;
    var v1632 = address$$46 + parentObj$$554.currMBCRAMBankPosition;
    introspect(JAM.policy.p1) {
      return v1631[v1632]
    }
  }
  return 255
}
function v754(parentObj$$553, address$$45) {
  var v1634 = parentObj$$553.ROM;
  var v1635 = parentObj$$553.currentROMBank + address$$45;
  introspect(JAM.policy.p1) {
    return v1634[v1635]
  }
}
function v753(parentObj$$552, address$$44) {
  var v1636 = parentObj$$552.memory;
  var v1637 = 65280 | address$$44;
  introspect(JAM.policy.p1) {
    return v1636[v1637]
  }
}
function v752(parentObj$$551, address$$43) {
  var v1638 = parentObj$$551.memory;
  introspect(JAM.policy.p1) {
    return v1638[address$$43]
  }
}
function v751() {
  function v750(parentObj$$550, address$$42) {
    return parentObj$$550.interruptsEnabled
  }
  function v749(parentObj$$549, address$$41) {
    return 0
  }
  function v748(parentObj$$548, address$$40) {
    return 143 | parentObj$$548.memory[65397]
  }
  function v747(parentObj$$547, address$$39) {
    return 64 | parentObj$$547.memory[65392]
  }
  function v746(parentObj$$546, address$$38) {
    return 254 | parentObj$$546.memory[65388]
  }
  function v745(parentObj$$545, address$$37) {
    var v5974;
    if(parentObj$$545.memory[65366] >= 192) {
      v5974 = 2 | parentObj$$545.memory[65366] & 193
    }else {
      v5974 = parentObj$$545.memory[65366] & 195
    }
    return 60 | v5974
  }
  function v744(parentObj$$544, address$$36) {
    var v5975 = !parentObj$$544.LCDisOn;
    if(v5975) {
      v5975 = parentObj$$544.hdmaRunning
    }
    if(v5975) {
      JAM.call(parentObj$$544.DMAWrite, parentObj$$544, [(parentObj$$544.memory[65365] & 127) + 1]);
      parentObj$$544.memory[65365] = 255;
      parentObj$$544.hdmaRunning = false
    }
    return parentObj$$544.memory[65365]
  }
  function v743(parentObj$$543, address$$35) {
    return parentObj$$543.currVRAMBank
  }
  function v742(parentObj$$542, address$$34) {
    return parentObj$$542.windowY
  }
  function v741(parentObj$$541, address$$33) {
    var v1647;
    if(parentObj$$541.LCDisOn) {
      v1647 = parentObj$$541.memory[65348]
    }else {
      v1647 = 0
    }
    return v1647
  }
  function v740(parentObj$$540, address$$32) {
    return parentObj$$540.backgroundX
  }
  function v739(parentObj$$539, address$$31) {
    return parentObj$$539.backgroundY
  }
  function v738(parentObj$$538, address$$30) {
    return 128 | parentObj$$538.memory[65345] | parentObj$$538.modeSTAT
  }
  function v737(parentObj$$537, address$$29) {
    var v1650;
    if(parentObj$$537.channel3canPlay) {
      v1650 = parentObj$$537.memory[65280 | parentObj$$537.channel3lastSampleLookup >> 1]
    }else {
      v1650 = parentObj$$537.memory[65280 | address$$29]
    }
    return v1650
  }
  function v736(parentObj$$536, address$$28) {
    var v1651;
    if(parentObj$$536.channel3canPlay) {
      v1651 = parentObj$$536.memory[65280 | parentObj$$536.channel3lastSampleLookup >> 1]
    }else {
      var v5987 = parentObj$$536.memory;
      introspect(JAM.policy.p1) {
        v1651 = v5987[address$$28]
      }
    }
    return v1651
  }
  function v735(parentObj$$535, address$$27) {
    parentObj$$535.audioJIT();
    return 112 | parentObj$$535.memory[65318]
  }
  function v734(parentObj$$534, address$$26) {
    return 191 | parentObj$$534.memory[65315]
  }
  function v733(parentObj$$533, address$$25) {
    return 191 | parentObj$$533.memory[65310]
  }
  function v732(parentObj$$532, address$$24) {
    return 255
  }
  function v731(parentObj$$531, address$$23) {
    return 159 | parentObj$$531.memory[65308]
  }
  function v730(parentObj$$530, address$$22) {
    return 127 | parentObj$$530.memory[65306]
  }
  function v729(parentObj$$529, address$$21) {
    return 191 | parentObj$$529.memory[65305]
  }
  function v728(parentObj$$528, address$$20) {
    return 63 | parentObj$$528.memory[65302]
  }
  function v727(parentObj$$527, address$$19) {
    return 191 | parentObj$$527.memory[65300]
  }
  function v726(parentObj$$526, address$$18) {
    return 63 | parentObj$$526.memory[65297]
  }
  function v725(parentObj$$525, address$$17) {
    return 128 | parentObj$$525.memory[65296]
  }
  function v724(parentObj$$524, address$$16) {
    return 224 | parentObj$$524.interruptsRequested
  }
  function v723(parentObj$$523, address$$15) {
    return 248 | parentObj$$523.memory[65287]
  }
  function v722(parentObj$$522, address$$14) {
    parentObj$$522.memory[65284] = parentObj$$522.memory[65284] + (parentObj$$522.DIVTicks >> 8) & 255;
    parentObj$$522.DIVTicks = parentObj$$522.DIVTicks & 255;
    return parentObj$$522.memory[65284]
  }
  function v721(parentObj$$521, address$$13) {
    var v6002;
    if(parentObj$$521.serialTimer <= 0) {
      v6002 = 126
    }else {
      v6002 = 254
    }
    return v6002 | parentObj$$521.memory[65282]
  }
  function v720(parentObj$$520, address$$12) {
    var v6004;
    if(parentObj$$520.serialTimer <= 0) {
      v6004 = 124
    }else {
      v6004 = 252
    }
    return v6004 | parentObj$$520.memory[65282]
  }
  function v719(parentObj$$519, address$$11) {
    var v1670;
    if(parentObj$$519.memory[65282] < 128) {
      v1670 = parentObj$$519.memory[65281]
    }else {
      v1670 = 255
    }
    return v1670
  }
  function v718(parentObj$$518, address$$10) {
    return 192 | parentObj$$518.memory[65280]
  }
  var index$$62 = 0;
  var v1758 = index$$62 <= 65535;
  for(;v1758;) {
    if(index$$62 < 16384) {
      this.memoryReader[index$$62] = this.memoryReadNormal
    }else {
      if(index$$62 < 32768) {
        this.memoryReader[index$$62] = this.memoryReadROM
      }else {
        if(index$$62 < 38912) {
          var v1674 = this.memoryReader;
          var v6009;
          if(this.cGBC) {
            v6009 = this.VRAMDATAReadCGBCPU
          }else {
            v6009 = this.VRAMDATAReadDMGCPU
          }
          v1674[index$$62] = v6009
        }else {
          if(index$$62 < 40960) {
            var v1675 = this.memoryReader;
            var v6010;
            if(this.cGBC) {
              v6010 = this.VRAMCHRReadCGBCPU
            }else {
              v6010 = this.VRAMCHRReadDMGCPU
            }
            v1675[index$$62] = v6010
          }else {
            var v6011 = index$$62 >= 40960;
            if(v6011) {
              v6011 = index$$62 < 49152
            }
            if(v6011) {
              var v8631 = this.numRAMBanks == 1 / 16;
              if(v8631) {
                v8631 = index$$62 < 41472
              }
              var v6012 = v8631;
              if(!v6012) {
                v6012 = this.numRAMBanks >= 1
              }
              if(v6012) {
                if(this.cMBC7) {
                  this.memoryReader[index$$62] = this.memoryReadMBC7
                }else {
                  if(!this.cMBC3) {
                    this.memoryReader[index$$62] = this.memoryReadMBC
                  }else {
                    this.memoryReader[index$$62] = this.memoryReadMBC3
                  }
                }
              }else {
                this.memoryReader[index$$62] = this.memoryReadBAD
              }
            }else {
              var v6014 = index$$62 >= 49152;
              if(v6014) {
                v6014 = index$$62 < 57344
              }
              if(v6014) {
                var v6015 = !this.cGBC;
                if(!v6015) {
                  v6015 = index$$62 < 53248
                }
                if(v6015) {
                  this.memoryReader[index$$62] = this.memoryReadNormal
                }else {
                  this.memoryReader[index$$62] = this.memoryReadGBCMemory
                }
              }else {
                var v6016 = index$$62 >= 57344;
                if(v6016) {
                  v6016 = index$$62 < 65024
                }
                if(v6016) {
                  var v6017 = !this.cGBC;
                  if(!v6017) {
                    v6017 = index$$62 < 61440
                  }
                  if(v6017) {
                    this.memoryReader[index$$62] = this.memoryReadECHONormal
                  }else {
                    this.memoryReader[index$$62] = this.memoryReadECHOGBCMemory
                  }
                }else {
                  if(index$$62 < 65184) {
                    this.memoryReader[index$$62] = this.memoryReadOAM
                  }else {
                    var v6018 = this.cGBC;
                    if(v6018) {
                      var v8638 = index$$62 >= 65184;
                      if(v8638) {
                        v8638 = index$$62 < 65280
                      }
                      v6018 = v8638
                    }
                    if(v6018) {
                      this.memoryReader[index$$62] = this.memoryReadNormal
                    }else {
                      if(index$$62 >= 65280) {
                        switch(index$$62) {
                          case 65280:
                            this.memoryHighReader[0] = this.memoryReader[65280] = v718;
                            break;
                          case 65281:
                            this.memoryHighReader[1] = this.memoryReader[65281] = v719;
                            break;
                          case 65282:
                            if(this.cGBC) {
                              this.memoryHighReader[2] = this.memoryReader[65282] = v720
                            }else {
                              this.memoryHighReader[2] = this.memoryReader[65282] = v721
                            }
                            break;
                          case 65284:
                            this.memoryHighReader[4] = this.memoryReader[65284] = v722;
                            break;
                          case 65287:
                            this.memoryHighReader[7] = this.memoryReader[65287] = v723;
                            break;
                          case 65295:
                            this.memoryHighReader[15] = this.memoryReader[65295] = v724;
                            break;
                          case 65296:
                            this.memoryHighReader[16] = this.memoryReader[65296] = v725;
                            break;
                          case 65297:
                            this.memoryHighReader[17] = this.memoryReader[65297] = v726;
                            break;
                          case 65299:
                            this.memoryHighReader[19] = this.memoryReader[65299] = this.memoryReadBAD;
                            break;
                          case 65300:
                            this.memoryHighReader[20] = this.memoryReader[65300] = v727;
                            break;
                          case 65302:
                            this.memoryHighReader[22] = this.memoryReader[65302] = v728;
                            break;
                          case 65304:
                            this.memoryHighReader[24] = this.memoryReader[65304] = this.memoryReadBAD;
                            break;
                          case 65305:
                            this.memoryHighReader[25] = this.memoryReader[65305] = v729;
                            break;
                          case 65306:
                            this.memoryHighReader[26] = this.memoryReader[65306] = v730;
                            break;
                          case 65307:
                            this.memoryHighReader[27] = this.memoryReader[65307] = this.memoryReadBAD;
                            break;
                          case 65308:
                            this.memoryHighReader[28] = this.memoryReader[65308] = v731;
                            break;
                          case 65309:
                            this.memoryHighReader[29] = this.memoryReader[65309] = v732;
                            break;
                          case 65310:
                            this.memoryHighReader[30] = this.memoryReader[65310] = v733;
                            break;
                          case 65311:
                          ;
                          case 65312:
                            this.memoryHighReader[index$$62 & 255] = this.memoryReader[index$$62] = this.memoryReadBAD;
                            break;
                          case 65315:
                            this.memoryHighReader[35] = this.memoryReader[65315] = v734;
                            break;
                          case 65318:
                            this.memoryHighReader[38] = this.memoryReader[65318] = v735;
                            break;
                          case 65319:
                          ;
                          case 65320:
                          ;
                          case 65321:
                          ;
                          case 65322:
                          ;
                          case 65323:
                          ;
                          case 65324:
                          ;
                          case 65325:
                          ;
                          case 65326:
                          ;
                          case 65327:
                            this.memoryHighReader[index$$62 & 255] = this.memoryReader[index$$62] = this.memoryReadBAD;
                            break;
                          case 65328:
                          ;
                          case 65329:
                          ;
                          case 65330:
                          ;
                          case 65331:
                          ;
                          case 65332:
                          ;
                          case 65333:
                          ;
                          case 65334:
                          ;
                          case 65335:
                          ;
                          case 65336:
                          ;
                          case 65337:
                          ;
                          case 65338:
                          ;
                          case 65339:
                          ;
                          case 65340:
                          ;
                          case 65341:
                          ;
                          case 65342:
                          ;
                          case 65343:
                            this.memoryReader[index$$62] = v736;
                            this.memoryHighReader[index$$62 & 255] = v737;
                            break;
                          case 65345:
                            this.memoryHighReader[65] = this.memoryReader[65345] = v738;
                            break;
                          case 65346:
                            this.memoryHighReader[66] = this.memoryReader[65346] = v739;
                            break;
                          case 65347:
                            this.memoryHighReader[67] = this.memoryReader[65347] = v740;
                            break;
                          case 65348:
                            this.memoryHighReader[68] = this.memoryReader[65348] = v741;
                            break;
                          case 65354:
                            this.memoryHighReader[74] = this.memoryReader[65354] = v742;
                            break;
                          case 65359:
                            this.memoryHighReader[79] = this.memoryReader[65359] = v743;
                            break;
                          case 65365:
                            if(this.cGBC) {
                              this.memoryHighReader[85] = this.memoryReader[65365] = v744
                            }else {
                              this.memoryReader[65365] = this.memoryReadNormal;
                              this.memoryHighReader[85] = this.memoryHighReadNormal
                            }
                            break;
                          case 65366:
                            if(this.cGBC) {
                              this.memoryHighReader[86] = this.memoryReader[65366] = v745
                            }else {
                              this.memoryReader[65366] = this.memoryReadNormal;
                              this.memoryHighReader[86] = this.memoryHighReadNormal
                            }
                            break;
                          case 65388:
                            if(this.cGBC) {
                              this.memoryHighReader[108] = this.memoryReader[65388] = v746
                            }else {
                              this.memoryHighReader[108] = this.memoryReader[65388] = this.memoryReadBAD
                            }
                            break;
                          case 65392:
                            if(this.cGBC) {
                              this.memoryHighReader[112] = this.memoryReader[65392] = v747
                            }else {
                              this.memoryHighReader[112] = this.memoryReader[65392] = this.memoryReadBAD
                            }
                            break;
                          case 65397:
                            this.memoryHighReader[117] = this.memoryReader[65397] = v748;
                            break;
                          case 65398:
                          ;
                          case 65399:
                            this.memoryHighReader[index$$62 & 255] = this.memoryReader[index$$62] = v749;
                            break;
                          case 65535:
                            this.memoryHighReader[255] = this.memoryReader[65535] = v750;
                            break;
                          default:
                            this.memoryReader[index$$62] = this.memoryReadNormal;
                            this.memoryHighReader[index$$62 & 255] = this.memoryHighReadNormal
                        }
                      }else {
                        this.memoryReader[index$$62] = this.memoryReadBAD
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    index$$62 = index$$62 + 1;
    v1758 = index$$62 <= 65535
  }
  return
}
function v717(address$$9) {
  var v1759 = this.memoryHighReader;
  return JAM.call(JAM.get(v1759, address$$9, JAM.policy.p1), v1759, [this, address$$9])
}
function v716(address$$8) {
  var v1760 = this.memoryReader;
  return JAM.call(JAM.get(v1760, address$$8, JAM.policy.p1), v1760, [this, address$$8])
}
function v715() {
  if(!this.halt) {
    this.halt = true;
    var currentClocks = -1;
    var temp_var$$20 = 0;
    if(this.LCDisOn) {
      if((this.interruptsEnabled & 1) == 1) {
        var v10377;
        if(this.modeSTAT == 1) {
          v10377 = 298
        }else {
          v10377 = 144
        }
        currentClocks = 456 * (v10377 - this.actualScanLine) - this.LCDTicks << this.doubleSpeedShifter
      }
      if((this.interruptsEnabled & 2) == 2) {
        if(this.mode0TriggerSTAT) {
          temp_var$$20 = this.clocksUntilMode0() - this.LCDTicks << this.doubleSpeedShifter;
          var v6064 = temp_var$$20 <= currentClocks;
          if(!v6064) {
            v6064 = currentClocks == -1
          }
          if(v6064) {
            currentClocks = temp_var$$20
          }
        }
        var v6065 = this.mode1TriggerSTAT;
        if(v6065) {
          v6065 = (this.interruptsEnabled & 1) == 0
        }
        if(v6065) {
          var v10378;
          if(this.modeSTAT == 1) {
            v10378 = 298
          }else {
            v10378 = 144
          }
          temp_var$$20 = 456 * (v10378 - this.actualScanLine) - this.LCDTicks << this.doubleSpeedShifter;
          var v6068 = temp_var$$20 <= currentClocks;
          if(!v6068) {
            v6068 = currentClocks == -1
          }
          if(v6068) {
            currentClocks = temp_var$$20
          }
        }
        if(this.mode2TriggerSTAT) {
          var v8646;
          if(this.actualScanLine >= 143) {
            v8646 = 456 * (154 - this.actualScanLine)
          }else {
            v8646 = 456
          }
          temp_var$$20 = v8646 - this.LCDTicks << this.doubleSpeedShifter;
          var v6071 = temp_var$$20 <= currentClocks;
          if(!v6071) {
            v6071 = currentClocks == -1
          }
          if(v6071) {
            currentClocks = temp_var$$20
          }
        }
        var v6072 = this.LYCMatchTriggerSTAT;
        if(v6072) {
          v6072 = this.memory[65349] <= 153
        }
        if(v6072) {
          temp_var$$20 = this.clocksUntilLYCMatch() - this.LCDTicks << this.doubleSpeedShifter;
          var v6075 = temp_var$$20 <= currentClocks;
          if(!v6075) {
            v6075 = currentClocks == -1
          }
          if(v6075) {
            currentClocks = temp_var$$20
          }
        }
      }
    }
    var v6076 = this.TIMAEnabled;
    if(v6076) {
      v6076 = (this.interruptsEnabled & 4) == 4
    }
    if(v6076) {
      temp_var$$20 = (256 - this.memory[65285]) * this.TACClocker - this.timerTicks;
      var v6079 = temp_var$$20 <= currentClocks;
      if(!v6079) {
        v6079 = currentClocks == -1
      }
      if(v6079) {
        currentClocks = temp_var$$20
      }
    }
    var v6080 = this.serialTimer > 0;
    if(v6080) {
      v6080 = (this.interruptsEnabled & 8) == 8
    }
    if(v6080) {
      var v6081 = this.serialTimer <= currentClocks;
      if(!v6081) {
        v6081 = currentClocks == -1
      }
      if(v6081) {
        currentClocks = this.serialTimer
      }
    }
  }else {
    currentClocks = this.remainingClocks
  }
  var maxClocks = this.CPUCyclesTotal - this.emulatorTicks << this.doubleSpeedShifter;
  if(currentClocks >= 0) {
    if(currentClocks <= maxClocks) {
      var v10845 = Math.max(currentClocks, this.CPUTicks);
      this.CPUTicks = v10845;
      this.updateCoreFull();
      this.halt = false;
      this.CPUTicks = 0
    }else {
      var v10846 = Math.max(maxClocks, this.CPUTicks);
      this.CPUTicks = v10846;
      this.remainingClocks = currentClocks - this.CPUTicks
    }
  }else {
    this.CPUTicks = this.CPUTicks + maxClocks
  }
  return
}
function v714() {
  if(this.IME) {
    this.IRQLineMatched = this.interruptsEnabled & this.interruptsRequested & 31
  }
  return
}
function v713() {
  var bitShift = 0;
  var testbit = 1;
  var v1811 = bitShift < 5;
  do {
    if((testbit & this.IRQLineMatched) == testbit) {
      this.IME = false;
      this.interruptsRequested = this.interruptsRequested - testbit;
      this.IRQLineMatched = 0;
      this.CPUTicks = 20;
      this.stackPointer = this.stackPointer - 1 & 65535;
      var v1799 = this.memoryWriter;
      JAM.call(v1799[this.stackPointer], v1799, [this, this.stackPointer, this.programCounter >> 8]);
      this.stackPointer = this.stackPointer - 1 & 65535;
      var v1804 = this.memoryWriter;
      JAM.call(v1804[this.stackPointer], v1804, [this, this.stackPointer, this.programCounter & 255]);
      this.programCounter = 64 | bitShift << 3;
      this.updateCore();
      return
    }
    testbit = 1 << (bitShift = bitShift + 1);
    v1811 = bitShift < 5
  }while(v1811);
  return
}
function v712() {
  this.graphicsJIT();
  this.renderMidScanLine();
  return
}
function v711() {
  if(this.queuedScanLines < 144) {
    this.queuedScanLines = this.queuedScanLines + 1
  }else {
    this.currentX = 0;
    this.midScanlineOffset = -1;
    if(this.lastUnrenderedLine < 143) {
      this.lastUnrenderedLine = this.lastUnrenderedLine + 1
    }else {
      this.lastUnrenderedLine = 0
    }
  }
  return
}
function v710() {
  var v1816 = this.queuedScanLines > 0;
  for(;v1816;) {
    JAM.call(this.renderScanLine, this, [this.lastUnrenderedLine]);
    if(this.lastUnrenderedLine < 143) {
      this.lastUnrenderedLine = this.lastUnrenderedLine + 1
    }else {
      this.lastUnrenderedLine = 0
    }
    this.queuedScanLines = this.queuedScanLines - 1;
    v1816 = this.queuedScanLines > 0
  }
  return
}
function v709() {
  this.totalLinesPassed = this.totalLinesPassed + this.queuedScanLines;
  this.graphicsJITScanlineGroup();
  return
}
function v708() {
  if(this.LCDisOn) {
    this.totalLinesPassed = 0;
    this.graphicsJITScanlineGroup()
  }
  return
}
function v707(address$$7) {
  var v8658 = this.memory;
  var v8659 = 1 | address$$7;
  introspect(JAM.policy.p1) {
    var v6104 = v8658[v8659]
  }
  var v1818 = v6104 << 8;
  var v6105 = this.memory;
  var v6106 = 40958 & address$$7;
  introspect(JAM.policy.p1) {
    var v1819 = v6105[v6106]
  }
  var lineCopy$$5 = v1818 | v1819;
  address$$7 = address$$7 & 8190;
  var v1820 = this.tileCache;
  var v1821 = address$$7 >> 4;
  introspect(JAM.policy.p1) {
    var tileBlock1$$4 = v1820[v1821]
  }
  var v1822 = this.tileCache;
  var v1823 = 512 | address$$7 >> 4;
  introspect(JAM.policy.p1) {
    var tileBlock2$$4 = v1822[v1823]
  }
  var v1824 = this.tileCache;
  var v1825 = 1024 | address$$7 >> 4;
  introspect(JAM.policy.p1) {
    var tileBlock3$$4 = v1824[v1825]
  }
  var v1826 = this.tileCache;
  var v1827 = 1536 | address$$7 >> 4;
  introspect(JAM.policy.p1) {
    var tileBlock4$$4 = v1826[v1827]
  }
  address$$7 = (address$$7 & 14) << 2;
  var addressFlipped$$4 = 56 - address$$7;
  tileBlock4$$4[addressFlipped$$4] = JAM.set(tileBlock2$$4, address$$7, tileBlock3$$4[addressFlipped$$4 | 7] = tileBlock1$$4[address$$7 | 7] = (lineCopy$$5 & 256) >> 7 | lineCopy$$5 & 1);
  tileBlock4$$4[addressFlipped$$4 | 1] = tileBlock2$$4[address$$7 | 1] = tileBlock3$$4[addressFlipped$$4 | 6] = tileBlock1$$4[address$$7 | 6] = (lineCopy$$5 & 512) >> 8 | (lineCopy$$5 & 2) >> 1;
  tileBlock4$$4[addressFlipped$$4 | 2] = tileBlock2$$4[address$$7 | 2] = tileBlock3$$4[addressFlipped$$4 | 5] = tileBlock1$$4[address$$7 | 5] = (lineCopy$$5 & 1024) >> 9 | (lineCopy$$5 & 4) >> 2;
  tileBlock4$$4[addressFlipped$$4 | 3] = tileBlock2$$4[address$$7 | 3] = tileBlock3$$4[addressFlipped$$4 | 4] = tileBlock1$$4[address$$7 | 4] = (lineCopy$$5 & 2048) >> 10 | (lineCopy$$5 & 8) >> 3;
  tileBlock4$$4[addressFlipped$$4 | 4] = tileBlock2$$4[address$$7 | 4] = tileBlock3$$4[addressFlipped$$4 | 3] = tileBlock1$$4[address$$7 | 3] = (lineCopy$$5 & 4096) >> 11 | (lineCopy$$5 & 16) >> 4;
  tileBlock4$$4[addressFlipped$$4 | 5] = tileBlock2$$4[address$$7 | 5] = tileBlock3$$4[addressFlipped$$4 | 2] = tileBlock1$$4[address$$7 | 2] = (lineCopy$$5 & 8192) >> 12 | (lineCopy$$5 & 32) >> 5;
  tileBlock4$$4[addressFlipped$$4 | 6] = tileBlock2$$4[address$$7 | 6] = tileBlock3$$4[addressFlipped$$4 | 1] = tileBlock1$$4[address$$7 | 1] = (lineCopy$$5 & 16384) >> 13 | (lineCopy$$5 & 64) >> 6;
  tileBlock4$$4[addressFlipped$$4 | 7] = tileBlock2$$4[address$$7 | 7] = tileBlock3$$4[addressFlipped$$4] = JAM.set(tileBlock1$$4, address$$7, (lineCopy$$5 & 32768) >> 14 | (lineCopy$$5 & 128) >> 7);
  return
}
function v706(vramAddress$$1) {
  var address$$6 = vramAddress$$1 >> 4;
  var v1837 = this.tileCache;
  var v1838 = 2048 | address$$6;
  introspect(JAM.policy.p1) {
    var tileBlock1$$3 = v1837[v1838]
  }
  var v1839 = this.tileCache;
  var v1840 = 2560 | address$$6;
  introspect(JAM.policy.p1) {
    var tileBlock2$$3 = v1839[v1840]
  }
  var v1841 = this.tileCache;
  var v1842 = 3072 | address$$6;
  introspect(JAM.policy.p1) {
    var tileBlock3$$3 = v1841[v1842]
  }
  var v1843 = this.tileCache;
  var v1844 = 3584 | address$$6;
  introspect(JAM.policy.p1) {
    var tileBlock4$$3 = v1843[v1844]
  }
  var lineCopy$$4 = 0;
  address$$6 = 0;
  var addressFlipped$$3 = 56;
  var v1855 = addressFlipped$$3 > -1;
  do {
    var v8670 = this.VRAM;
    var v8671 = 1 | vramAddress$$1;
    introspect(JAM.policy.p1) {
      var v6118 = v8670[v8671]
    }
    var v1845 = v6118 << 8;
    var v6119 = this.VRAM;
    introspect(JAM.policy.p1) {
      var v1846 = v6119[vramAddress$$1]
    }
    lineCopy$$4 = v1845 | v1846;
    tileBlock4$$3[addressFlipped$$3] = tileBlock2$$3[address$$6] = tileBlock3$$3[addressFlipped$$3 | 7] = tileBlock1$$3[address$$6 | 7] = (lineCopy$$4 & 256) >> 7 | lineCopy$$4 & 1;
    tileBlock4$$3[addressFlipped$$3 | 1] = tileBlock2$$3[address$$6 | 1] = tileBlock3$$3[addressFlipped$$3 | 6] = tileBlock1$$3[address$$6 | 6] = (lineCopy$$4 & 512) >> 8 | (lineCopy$$4 & 2) >> 1;
    tileBlock4$$3[addressFlipped$$3 | 2] = tileBlock2$$3[address$$6 | 2] = tileBlock3$$3[addressFlipped$$3 | 5] = tileBlock1$$3[address$$6 | 5] = (lineCopy$$4 & 1024) >> 9 | (lineCopy$$4 & 4) >> 2;
    tileBlock4$$3[addressFlipped$$3 | 3] = tileBlock2$$3[address$$6 | 3] = tileBlock3$$3[addressFlipped$$3 | 4] = tileBlock1$$3[address$$6 | 4] = (lineCopy$$4 & 2048) >> 10 | (lineCopy$$4 & 8) >> 3;
    tileBlock4$$3[addressFlipped$$3 | 4] = tileBlock2$$3[address$$6 | 4] = tileBlock3$$3[addressFlipped$$3 | 3] = tileBlock1$$3[address$$6 | 3] = (lineCopy$$4 & 4096) >> 11 | (lineCopy$$4 & 16) >> 4;
    tileBlock4$$3[addressFlipped$$3 | 5] = tileBlock2$$3[address$$6 | 5] = tileBlock3$$3[addressFlipped$$3 | 2] = tileBlock1$$3[address$$6 | 2] = (lineCopy$$4 & 8192) >> 12 | (lineCopy$$4 & 32) >> 5;
    tileBlock4$$3[addressFlipped$$3 | 6] = tileBlock2$$3[address$$6 | 6] = tileBlock3$$3[addressFlipped$$3 | 1] = tileBlock1$$3[address$$6 | 1] = (lineCopy$$4 & 16384) >> 13 | (lineCopy$$4 & 64) >> 6;
    tileBlock4$$3[addressFlipped$$3 | 7] = tileBlock2$$3[address$$6 | 7] = tileBlock3$$3[addressFlipped$$3] = tileBlock1$$3[address$$6] = (lineCopy$$4 & 32768) >> 14 | (lineCopy$$4 & 128) >> 7;
    address$$6 = address$$6 + 8;
    addressFlipped$$3 = addressFlipped$$3 - 8;
    vramAddress$$1 = vramAddress$$1 + 2;
    v1855 = addressFlipped$$3 > -1
  }while(v1855);
  return
}
function v705(address$$5) {
  var v8682 = this.VRAM;
  var v8683 = 1 | address$$5;
  introspect(JAM.policy.p1) {
    var v6128 = v8682[v8683]
  }
  var v1856 = v6128 << 8;
  var v6129 = this.VRAM;
  var v6130 = 8190 & address$$5;
  introspect(JAM.policy.p1) {
    var v1857 = v6129[v6130]
  }
  var lineCopy$$3 = v1856 | v1857;
  var v1858 = this.tileCache;
  var v1859 = 2048 | address$$5 >> 4;
  introspect(JAM.policy.p1) {
    var tileBlock1$$2 = v1858[v1859]
  }
  var v1860 = this.tileCache;
  var v1861 = 2560 | address$$5 >> 4;
  introspect(JAM.policy.p1) {
    var tileBlock2$$2 = v1860[v1861]
  }
  var v1862 = this.tileCache;
  var v1863 = 3072 | address$$5 >> 4;
  introspect(JAM.policy.p1) {
    var tileBlock3$$2 = v1862[v1863]
  }
  var v1864 = this.tileCache;
  var v1865 = 3584 | address$$5 >> 4;
  introspect(JAM.policy.p1) {
    var tileBlock4$$2 = v1864[v1865]
  }
  address$$5 = (address$$5 & 14) << 2;
  var addressFlipped$$2 = 56 - address$$5;
  tileBlock4$$2[addressFlipped$$2] = JAM.set(tileBlock2$$2, address$$5, tileBlock3$$2[addressFlipped$$2 | 7] = tileBlock1$$2[address$$5 | 7] = (lineCopy$$3 & 256) >> 7 | lineCopy$$3 & 1);
  tileBlock4$$2[addressFlipped$$2 | 1] = tileBlock2$$2[address$$5 | 1] = tileBlock3$$2[addressFlipped$$2 | 6] = tileBlock1$$2[address$$5 | 6] = (lineCopy$$3 & 512) >> 8 | (lineCopy$$3 & 2) >> 1;
  tileBlock4$$2[addressFlipped$$2 | 2] = tileBlock2$$2[address$$5 | 2] = tileBlock3$$2[addressFlipped$$2 | 5] = tileBlock1$$2[address$$5 | 5] = (lineCopy$$3 & 1024) >> 9 | (lineCopy$$3 & 4) >> 2;
  tileBlock4$$2[addressFlipped$$2 | 3] = tileBlock2$$2[address$$5 | 3] = tileBlock3$$2[addressFlipped$$2 | 4] = tileBlock1$$2[address$$5 | 4] = (lineCopy$$3 & 2048) >> 10 | (lineCopy$$3 & 8) >> 3;
  tileBlock4$$2[addressFlipped$$2 | 4] = tileBlock2$$2[address$$5 | 4] = tileBlock3$$2[addressFlipped$$2 | 3] = tileBlock1$$2[address$$5 | 3] = (lineCopy$$3 & 4096) >> 11 | (lineCopy$$3 & 16) >> 4;
  tileBlock4$$2[addressFlipped$$2 | 5] = tileBlock2$$2[address$$5 | 5] = tileBlock3$$2[addressFlipped$$2 | 2] = tileBlock1$$2[address$$5 | 2] = (lineCopy$$3 & 8192) >> 12 | (lineCopy$$3 & 32) >> 5;
  tileBlock4$$2[addressFlipped$$2 | 6] = tileBlock2$$2[address$$5 | 6] = tileBlock3$$2[addressFlipped$$2 | 1] = tileBlock1$$2[address$$5 | 1] = (lineCopy$$3 & 16384) >> 13 | (lineCopy$$3 & 64) >> 6;
  tileBlock4$$2[addressFlipped$$2 | 7] = tileBlock2$$2[address$$5 | 7] = tileBlock3$$2[addressFlipped$$2] = JAM.set(tileBlock1$$2, address$$5, (lineCopy$$3 & 32768) >> 14 | (lineCopy$$3 & 128) >> 7);
  return
}
function v704(vramAddress) {
  var address$$4 = vramAddress >> 4;
  var v1875 = this.tileCache;
  introspect(JAM.policy.p1) {
    var tileBlock1$$1 = v1875[address$$4]
  }
  var v1876 = this.tileCache;
  var v1877 = 512 | address$$4;
  introspect(JAM.policy.p1) {
    var tileBlock2$$1 = v1876[v1877]
  }
  var v1878 = this.tileCache;
  var v1879 = 1024 | address$$4;
  introspect(JAM.policy.p1) {
    var tileBlock3$$1 = v1878[v1879]
  }
  var v1880 = this.tileCache;
  var v1881 = 1536 | address$$4;
  introspect(JAM.policy.p1) {
    var tileBlock4$$1 = v1880[v1881]
  }
  var lineCopy$$2 = 0;
  vramAddress = vramAddress | 32768;
  address$$4 = 0;
  var addressFlipped$$1 = 56;
  var v1892 = addressFlipped$$1 > -1;
  do {
    var v8694 = this.memory;
    var v8695 = 1 | vramAddress;
    introspect(JAM.policy.p1) {
      var v6143 = v8694[v8695]
    }
    var v1882 = v6143 << 8;
    var v6144 = this.memory;
    introspect(JAM.policy.p1) {
      var v1883 = v6144[vramAddress]
    }
    lineCopy$$2 = v1882 | v1883;
    tileBlock4$$1[addressFlipped$$1] = tileBlock2$$1[address$$4] = tileBlock3$$1[addressFlipped$$1 | 7] = tileBlock1$$1[address$$4 | 7] = (lineCopy$$2 & 256) >> 7 | lineCopy$$2 & 1;
    tileBlock4$$1[addressFlipped$$1 | 1] = tileBlock2$$1[address$$4 | 1] = tileBlock3$$1[addressFlipped$$1 | 6] = tileBlock1$$1[address$$4 | 6] = (lineCopy$$2 & 512) >> 8 | (lineCopy$$2 & 2) >> 1;
    tileBlock4$$1[addressFlipped$$1 | 2] = tileBlock2$$1[address$$4 | 2] = tileBlock3$$1[addressFlipped$$1 | 5] = tileBlock1$$1[address$$4 | 5] = (lineCopy$$2 & 1024) >> 9 | (lineCopy$$2 & 4) >> 2;
    tileBlock4$$1[addressFlipped$$1 | 3] = tileBlock2$$1[address$$4 | 3] = tileBlock3$$1[addressFlipped$$1 | 4] = tileBlock1$$1[address$$4 | 4] = (lineCopy$$2 & 2048) >> 10 | (lineCopy$$2 & 8) >> 3;
    tileBlock4$$1[addressFlipped$$1 | 4] = tileBlock2$$1[address$$4 | 4] = tileBlock3$$1[addressFlipped$$1 | 3] = tileBlock1$$1[address$$4 | 3] = (lineCopy$$2 & 4096) >> 11 | (lineCopy$$2 & 16) >> 4;
    tileBlock4$$1[addressFlipped$$1 | 5] = tileBlock2$$1[address$$4 | 5] = tileBlock3$$1[addressFlipped$$1 | 2] = tileBlock1$$1[address$$4 | 2] = (lineCopy$$2 & 8192) >> 12 | (lineCopy$$2 & 32) >> 5;
    tileBlock4$$1[addressFlipped$$1 | 6] = tileBlock2$$1[address$$4 | 6] = tileBlock3$$1[addressFlipped$$1 | 1] = tileBlock1$$1[address$$4 | 1] = (lineCopy$$2 & 16384) >> 13 | (lineCopy$$2 & 64) >> 6;
    tileBlock4$$1[addressFlipped$$1 | 7] = tileBlock2$$1[address$$4 | 7] = tileBlock3$$1[addressFlipped$$1] = tileBlock1$$1[address$$4] = (lineCopy$$2 & 32768) >> 14 | (lineCopy$$2 & 128) >> 7;
    address$$4 = address$$4 + 8;
    addressFlipped$$1 = addressFlipped$$1 - 8;
    vramAddress = vramAddress + 2;
    v1892 = addressFlipped$$1 > -1
  }while(v1892);
  return
}
function v703(address$$3) {
  var v8706 = this.memory;
  var v8707 = 1 | address$$3;
  introspect(JAM.policy.p1) {
    var v6153 = v8706[v8707]
  }
  var v1893 = v6153 << 8;
  var v6154 = this.memory;
  var v6155 = 40958 & address$$3;
  introspect(JAM.policy.p1) {
    var v1894 = v6154[v6155]
  }
  var lineCopy$$1 = v1893 | v1894;
  address$$3 = address$$3 & 8190;
  var v1895 = this.tileCache;
  var v1896 = address$$3 >> 4;
  introspect(JAM.policy.p1) {
    var tileBlock1 = v1895[v1896]
  }
  var v1897 = this.tileCache;
  var v1898 = 512 | address$$3 >> 4;
  introspect(JAM.policy.p1) {
    var tileBlock2 = v1897[v1898]
  }
  var v1899 = this.tileCache;
  var v1900 = 1024 | address$$3 >> 4;
  introspect(JAM.policy.p1) {
    var tileBlock3 = v1899[v1900]
  }
  var v1901 = this.tileCache;
  var v1902 = 1536 | address$$3 >> 4;
  introspect(JAM.policy.p1) {
    var tileBlock4 = v1901[v1902]
  }
  address$$3 = (address$$3 & 14) << 2;
  var addressFlipped = 56 - address$$3;
  tileBlock4[addressFlipped] = JAM.set(tileBlock2, address$$3, tileBlock3[addressFlipped | 7] = tileBlock1[address$$3 | 7] = (lineCopy$$1 & 256) >> 7 | lineCopy$$1 & 1);
  tileBlock4[addressFlipped | 1] = tileBlock2[address$$3 | 1] = tileBlock3[addressFlipped | 6] = tileBlock1[address$$3 | 6] = (lineCopy$$1 & 512) >> 8 | (lineCopy$$1 & 2) >> 1;
  tileBlock4[addressFlipped | 2] = tileBlock2[address$$3 | 2] = tileBlock3[addressFlipped | 5] = tileBlock1[address$$3 | 5] = (lineCopy$$1 & 1024) >> 9 | (lineCopy$$1 & 4) >> 2;
  tileBlock4[addressFlipped | 3] = tileBlock2[address$$3 | 3] = tileBlock3[addressFlipped | 4] = tileBlock1[address$$3 | 4] = (lineCopy$$1 & 2048) >> 10 | (lineCopy$$1 & 8) >> 3;
  tileBlock4[addressFlipped | 4] = tileBlock2[address$$3 | 4] = tileBlock3[addressFlipped | 3] = tileBlock1[address$$3 | 3] = (lineCopy$$1 & 4096) >> 11 | (lineCopy$$1 & 16) >> 4;
  tileBlock4[addressFlipped | 5] = tileBlock2[address$$3 | 5] = tileBlock3[addressFlipped | 2] = tileBlock1[address$$3 | 2] = (lineCopy$$1 & 8192) >> 12 | (lineCopy$$1 & 32) >> 5;
  tileBlock4[addressFlipped | 6] = tileBlock2[address$$3 | 6] = tileBlock3[addressFlipped | 1] = tileBlock1[address$$3 | 1] = (lineCopy$$1 & 16384) >> 13 | (lineCopy$$1 & 64) >> 6;
  tileBlock4[addressFlipped | 7] = tileBlock2[address$$3 | 7] = tileBlock3[addressFlipped] = JAM.set(tileBlock1, address$$3, (lineCopy$$1 & 32768) >> 14 | (lineCopy$$1 & 128) >> 7);
  return
}
function v702(address$$2) {
  var v8718 = this.memory;
  var v8719 = 1 | address$$2;
  introspect(JAM.policy.p1) {
    var v6167 = v8718[v8719]
  }
  var v1912 = v6167 << 8;
  var v6168 = this.memory;
  var v6169 = 40958 & address$$2;
  introspect(JAM.policy.p1) {
    var v1913 = v6168[v6169]
  }
  var lineCopy = v1912 | v1913;
  var v1914 = this.tileCache;
  var v1915 = (address$$2 & 8176) >> 4;
  introspect(JAM.policy.p1) {
    var tileBlock = v1914[v1915]
  }
  address$$2 = (address$$2 & 14) << 2;
  tileBlock[address$$2 | 7] = (lineCopy & 256) >> 7 | lineCopy & 1;
  tileBlock[address$$2 | 6] = (lineCopy & 512) >> 8 | (lineCopy & 2) >> 1;
  tileBlock[address$$2 | 5] = (lineCopy & 1024) >> 9 | (lineCopy & 4) >> 2;
  tileBlock[address$$2 | 4] = (lineCopy & 2048) >> 10 | (lineCopy & 8) >> 3;
  tileBlock[address$$2 | 3] = (lineCopy & 4096) >> 11 | (lineCopy & 16) >> 4;
  tileBlock[address$$2 | 2] = (lineCopy & 8192) >> 12 | (lineCopy & 32) >> 5;
  tileBlock[address$$2 | 1] = (lineCopy & 16384) >> 13 | (lineCopy & 64) >> 6;
  JAM.set(tileBlock, address$$2, (lineCopy & 32768) >> 14 | (lineCopy & 128) >> 7);
  return
}
function v701(scanlineToRender$$9) {
  if(this.gfxSpriteShow) {
    var OAMAddress$$2 = 65024;
    var lineAdjusted$$2 = scanlineToRender$$9 + 16;
    var yoffset$$5 = 0;
    var xcoord$$1 = 0;
    var endX = 0;
    var xCounter = 0;
    var attrCode$$5 = 0;
    var palette$$5 = 0;
    var tile$$7 = null;
    var data$$31 = 0;
    var currentPixel$$1 = 0;
    var spriteCount$$2 = 0;
    if(this.gfxSpriteNormalHeight) {
      var v6187 = OAMAddress$$2 < 65184;
      if(v6187) {
        v6187 = spriteCount$$2 < 10
      }
      var v1946 = v6187;
      for(;v1946;) {
        var v6188 = this.memory;
        introspect(JAM.policy.p1) {
          var v1926 = v6188[OAMAddress$$2]
        }
        yoffset$$5 = lineAdjusted$$2 - v1926;
        if((yoffset$$5 & 7) == yoffset$$5) {
          var v6190 = this.memory;
          var v6191 = OAMAddress$$2 | 1;
          introspect(JAM.policy.p1) {
            var v1927 = v6190[v6191]
          }
          xcoord$$1 = v1927 - 8;
          endX = Math.min(160, xcoord$$1 + 8);
          attrCode$$5 = this.memory[OAMAddress$$2 | 3];
          palette$$5 = (attrCode$$5 & 7) << 2;
          var v1932 = this.tileCache;
          var v6192 = (attrCode$$5 & 8) << 8 | (attrCode$$5 & 96) << 4;
          var v8735 = this.memory;
          var v8736 = OAMAddress$$2 | 2;
          introspect(JAM.policy.p1) {
            var v6193 = v8735[v8736]
          }
          tile$$7 = v1932[v6192 | v6193];
          var v1934;
          if(xcoord$$1 > 0) {
            v1934 = xcoord$$1
          }else {
            v1934 = 0
          }
          xCounter = v1934;
          xcoord$$1 = xcoord$$1 - (yoffset$$5 << 3);
          currentPixel$$1 = this.pixelStart + xCounter;
          var v1944 = xCounter < endX;
          for(;v1944;) {
            var v8737 = this.frameBuffer;
            introspect(JAM.policy.p1) {
              var v6196 = v8737[currentPixel$$1]
            }
            if(v6196 >= 33554432) {
              data$$31 = tile$$7[xCounter - xcoord$$1];
              if(data$$31 > 0) {
                JAM.set(this.frameBuffer, currentPixel$$1, this.gbcOBJPalette[palette$$5 | data$$31])
              }
            }else {
              var v8738 = this.frameBuffer;
              introspect(JAM.policy.p1) {
                var v6199 = v8738[currentPixel$$1]
              }
              if(v6199 < 16777216) {
                data$$31 = tile$$7[xCounter - xcoord$$1];
                var v6200 = data$$31 > 0;
                if(v6200) {
                  v6200 = attrCode$$5 < 128
                }
                if(v6200) {
                  JAM.set(this.frameBuffer, currentPixel$$1, this.gbcOBJPalette[palette$$5 | data$$31])
                }
              }
            }
            xCounter = xCounter + 1;
            currentPixel$$1 = currentPixel$$1 + 1;
            v1944 = xCounter < endX
          }
          spriteCount$$2 = spriteCount$$2 + 1
        }
        OAMAddress$$2 = OAMAddress$$2 + 4;
        var v6203 = OAMAddress$$2 < 65184;
        if(v6203) {
          v6203 = spriteCount$$2 < 10
        }
        v1946 = v6203
      }
    }else {
      var v6204 = OAMAddress$$2 < 65184;
      if(v6204) {
        v6204 = spriteCount$$2 < 10
      }
      var v1970 = v6204;
      for(;v1970;) {
        var v6205 = this.memory;
        introspect(JAM.policy.p1) {
          var v1947 = v6205[OAMAddress$$2]
        }
        yoffset$$5 = lineAdjusted$$2 - v1947;
        if((yoffset$$5 & 15) == yoffset$$5) {
          var v6207 = this.memory;
          var v6208 = OAMAddress$$2 | 1;
          introspect(JAM.policy.p1) {
            var v1948 = v6207[v6208]
          }
          xcoord$$1 = v1948 - 8;
          endX = Math.min(160, xcoord$$1 + 8);
          attrCode$$5 = this.memory[OAMAddress$$2 | 3];
          palette$$5 = (attrCode$$5 & 7) << 2;
          if((attrCode$$5 & 64) == (64 & yoffset$$5 << 3)) {
            var v1953 = this.tileCache;
            var v6211 = (attrCode$$5 & 8) << 8 | (attrCode$$5 & 96) << 4;
            var v9874 = this.memory;
            var v9875 = OAMAddress$$2 | 2;
            introspect(JAM.policy.p1) {
              var v8742 = v9874[v9875]
            }
            tile$$7 = v1953[v6211 | v8742 & 254]
          }else {
            var v1955 = this.tileCache;
            var v8743 = (attrCode$$5 & 8) << 8 | (attrCode$$5 & 96) << 4;
            var v9878 = this.memory;
            var v9879 = OAMAddress$$2 | 2;
            introspect(JAM.policy.p1) {
              var v8744 = v9878[v9879]
            }
            tile$$7 = v1955[v8743 | v8744 | 1]
          }
          var v1958;
          if(xcoord$$1 > 0) {
            v1958 = xcoord$$1
          }else {
            v1958 = 0
          }
          xCounter = v1958;
          xcoord$$1 = xcoord$$1 - ((yoffset$$5 & 7) << 3);
          currentPixel$$1 = this.pixelStart + xCounter;
          var v1968 = xCounter < endX;
          for(;v1968;) {
            var v8746 = this.frameBuffer;
            introspect(JAM.policy.p1) {
              var v6216 = v8746[currentPixel$$1]
            }
            if(v6216 >= 33554432) {
              data$$31 = tile$$7[xCounter - xcoord$$1];
              if(data$$31 > 0) {
                JAM.set(this.frameBuffer, currentPixel$$1, this.gbcOBJPalette[palette$$5 | data$$31])
              }
            }else {
              var v8747 = this.frameBuffer;
              introspect(JAM.policy.p1) {
                var v6219 = v8747[currentPixel$$1]
              }
              if(v6219 < 16777216) {
                data$$31 = tile$$7[xCounter - xcoord$$1];
                var v6220 = data$$31 > 0;
                if(v6220) {
                  v6220 = attrCode$$5 < 128
                }
                if(v6220) {
                  JAM.set(this.frameBuffer, currentPixel$$1, this.gbcOBJPalette[palette$$5 | data$$31])
                }
              }
            }
            xCounter = xCounter + 1;
            currentPixel$$1 = currentPixel$$1 + 1;
            v1968 = xCounter < endX
          }
          spriteCount$$2 = spriteCount$$2 + 1
        }
        OAMAddress$$2 = OAMAddress$$2 + 4;
        var v6223 = OAMAddress$$2 < 65184;
        if(v6223) {
          v6223 = spriteCount$$2 < 10
        }
        v1970 = v6223
      }
    }
  }
  return
}
function v700(scanlineToRender$$8, drawableRange) {
  var address$$1 = 65024;
  var spriteCount$$1 = 0;
  var diff = 0;
  var v6224 = address$$1 < 65184;
  if(v6224) {
    v6224 = spriteCount$$1 < 10
  }
  var v1977 = v6224;
  for(;v1977;) {
    var v6225 = this.memory;
    introspect(JAM.policy.p1) {
      var v1973 = v6225[address$$1]
    }
    diff = scanlineToRender$$8 - v1973;
    if((diff & drawableRange) == diff) {
      var v1974 = this.OAMAddressCache;
      var v1975 = spriteCount$$1;
      spriteCount$$1 = spriteCount$$1 + 1;
      v1974[v1975] = address$$1
    }
    address$$1 = address$$1 + 4;
    var v6227 = address$$1 < 65184;
    if(v6227) {
      v6227 = spriteCount$$1 < 10
    }
    v1977 = v6227
  }
  return spriteCount$$1
}
function v699(scanlineToRender$$7) {
  if(this.gfxSpriteShow) {
    var lineAdjusted$$1 = scanlineToRender$$7 + 16;
    var OAMAddress$$1 = 65024;
    var yoffset$$4 = 0;
    var xcoord = 1;
    var xCoordStart = 0;
    var xCoordEnd = 0;
    var attrCode$$4 = 0;
    var palette$$4 = 0;
    var tile$$6 = null;
    var data$$30 = 0;
    var spriteCount = 0;
    var length$$18 = 0;
    var currentPixel = 0;
    var linePixel = 0;
    var v1980 = xcoord < 168;
    for(;v1980;) {
      var v1978 = this.sortBuffer;
      var v1979 = xcoord;
      xcoord = xcoord + 1;
      v1978[v1979] = 255;
      v1980 = xcoord < 168
    }
    if(this.gfxSpriteNormalHeight) {
      length$$18 = JAM.call(this.findLowestSpriteDrawable, this, [lineAdjusted$$1, 7]);
      var v2006 = spriteCount < length$$18;
      for(;v2006;) {
        OAMAddress$$1 = this.OAMAddressCache[spriteCount];
        var v8748 = this.memory;
        introspect(JAM.policy.p1) {
          var v6228 = v8748[OAMAddress$$1]
        }
        yoffset$$4 = lineAdjusted$$1 - v6228 << 3;
        attrCode$$4 = this.memory[OAMAddress$$1 | 3];
        palette$$4 = (attrCode$$4 & 16) >> 2;
        var v1986 = this.tileCache;
        var v6229 = (attrCode$$4 & 96) << 4;
        var v8750 = this.memory;
        var v8751 = OAMAddress$$1 | 2;
        introspect(JAM.policy.p1) {
          var v6230 = v8750[v8751]
        }
        tile$$6 = v1986[v6229 | v6230];
        linePixel = xCoordStart = this.memory[OAMAddress$$1 | 1];
        xCoordEnd = Math.min(168 - linePixel, 8);
        var v1991;
        if(linePixel > 7) {
          v1991 = 0
        }else {
          v1991 = 8 - linePixel
        }
        xcoord = v1991;
        var v1992 = this.pixelStart;
        var v6232;
        if(linePixel > 8) {
          v6232 = linePixel - 8
        }else {
          v6232 = 0
        }
        currentPixel = v1992 + v6232;
        var v2005 = xcoord < xCoordEnd;
        for(;v2005;) {
          var v8753 = this.sortBuffer;
          introspect(JAM.policy.p1) {
            var v6233 = v8753[linePixel]
          }
          if(v6233 > xCoordStart) {
            var v8754 = this.frameBuffer;
            introspect(JAM.policy.p1) {
              var v6234 = v8754[currentPixel]
            }
            if(v6234 >= 33554432) {
              data$$30 = tile$$6[yoffset$$4 | xcoord];
              if(data$$30 > 0) {
                JAM.set(this.frameBuffer, currentPixel, this.OBJPalette[palette$$4 | data$$30]);
                JAM.set(this.sortBuffer, linePixel, xCoordStart)
              }
            }else {
              var v8755 = this.frameBuffer;
              introspect(JAM.policy.p1) {
                var v6237 = v8755[currentPixel]
              }
              if(v6237 < 16777216) {
                data$$30 = tile$$6[yoffset$$4 | xcoord];
                var v6238 = data$$30 > 0;
                if(v6238) {
                  v6238 = attrCode$$4 < 128
                }
                if(v6238) {
                  JAM.set(this.frameBuffer, currentPixel, this.OBJPalette[palette$$4 | data$$30]);
                  JAM.set(this.sortBuffer, linePixel, xCoordStart)
                }
              }
            }
          }
          xcoord = xcoord + 1;
          currentPixel = currentPixel + 1;
          linePixel = linePixel + 1;
          v2005 = xcoord < xCoordEnd
        }
        spriteCount = spriteCount + 1;
        v2006 = spriteCount < length$$18
      }
    }else {
      length$$18 = JAM.call(this.findLowestSpriteDrawable, this, [lineAdjusted$$1, 15]);
      var v2035 = spriteCount < length$$18;
      for(;v2035;) {
        OAMAddress$$1 = this.OAMAddressCache[spriteCount];
        var v8756 = this.memory;
        introspect(JAM.policy.p1) {
          var v6241 = v8756[OAMAddress$$1]
        }
        yoffset$$4 = lineAdjusted$$1 - v6241 << 3;
        attrCode$$4 = this.memory[OAMAddress$$1 | 3];
        palette$$4 = (attrCode$$4 & 16) >> 2;
        if((attrCode$$4 & 64) == (64 & yoffset$$4)) {
          var v2012 = this.tileCache;
          var v6244 = (attrCode$$4 & 96) << 4;
          var v9880 = this.memory;
          var v9881 = OAMAddress$$1 | 2;
          introspect(JAM.policy.p1) {
            var v8758 = v9880[v9881]
          }
          tile$$6 = v2012[v6244 | v8758 & 254]
        }else {
          var v2014 = this.tileCache;
          var v8759 = (attrCode$$4 & 96) << 4;
          var v9883 = this.memory;
          var v9884 = OAMAddress$$1 | 2;
          introspect(JAM.policy.p1) {
            var v8760 = v9883[v9884]
          }
          tile$$6 = v2014[v8759 | v8760 | 1]
        }
        yoffset$$4 = yoffset$$4 & 63;
        linePixel = xCoordStart = this.memory[OAMAddress$$1 | 1];
        xCoordEnd = Math.min(168 - linePixel, 8);
        var v2020;
        if(linePixel > 7) {
          v2020 = 0
        }else {
          v2020 = 8 - linePixel
        }
        xcoord = v2020;
        var v2021 = this.pixelStart;
        var v6248;
        if(linePixel > 8) {
          v6248 = linePixel - 8
        }else {
          v6248 = 0
        }
        currentPixel = v2021 + v6248;
        var v2034 = xcoord < xCoordEnd;
        for(;v2034;) {
          var v8762 = this.sortBuffer;
          introspect(JAM.policy.p1) {
            var v6249 = v8762[linePixel]
          }
          if(v6249 > xCoordStart) {
            var v8763 = this.frameBuffer;
            introspect(JAM.policy.p1) {
              var v6250 = v8763[currentPixel]
            }
            if(v6250 >= 33554432) {
              data$$30 = tile$$6[yoffset$$4 | xcoord];
              if(data$$30 > 0) {
                JAM.set(this.frameBuffer, currentPixel, this.OBJPalette[palette$$4 | data$$30]);
                JAM.set(this.sortBuffer, linePixel, xCoordStart)
              }
            }else {
              var v8764 = this.frameBuffer;
              introspect(JAM.policy.p1) {
                var v6253 = v8764[currentPixel]
              }
              if(v6253 < 16777216) {
                data$$30 = tile$$6[yoffset$$4 | xcoord];
                var v6254 = data$$30 > 0;
                if(v6254) {
                  v6254 = attrCode$$4 < 128
                }
                if(v6254) {
                  JAM.set(this.frameBuffer, currentPixel, this.OBJPalette[palette$$4 | data$$30]);
                  JAM.set(this.sortBuffer, linePixel, xCoordStart)
                }
              }
            }
          }
          xcoord = xcoord + 1;
          currentPixel = currentPixel + 1;
          linePixel = linePixel + 1;
          v2034 = xcoord < xCoordEnd
        }
        spriteCount = spriteCount + 1;
        v2035 = spriteCount < length$$18
      }
    }
  }
  return
}
function v698(scanlineToRender$$6) {
  if(this.gfxWindowDisplay) {
    var scrollYAdjusted$$5 = scanlineToRender$$6 - this.windowY;
    if(scrollYAdjusted$$5 >= 0) {
      var v2039;
      if(this.windowX > 0) {
        v2039 = this.windowX + this.currentX
      }else {
        v2039 = this.currentX
      }
      var scrollXRangeAdjusted$$2 = v2039;
      var pixelPosition$$7 = this.pixelStart + scrollXRangeAdjusted$$2;
      var pixelPositionEnd$$5 = this.pixelStart + this.pixelEnd;
      if(pixelPosition$$7 < pixelPositionEnd$$5) {
        var tileYLine$$5 = (scrollYAdjusted$$5 & 7) << 3;
        var tileNumber$$6 = (this.gfxWindowCHRBankPosition | (scrollYAdjusted$$5 & 248) << 2) + (this.currentX >> 3);
        var v2046 = this.BGCHRBank1;
        introspect(JAM.policy.p1) {
          var chrCode$$5 = v2046[tileNumber$$6]
        }
        if(chrCode$$5 < this.gfxBackgroundBankOffset) {
          chrCode$$5 = chrCode$$5 | 256
        }
        var v2048 = this.BGCHRBank2;
        introspect(JAM.policy.p1) {
          var attrCode$$3 = v2048[tileNumber$$6]
        }
        var v2049 = this.tileCache;
        var v2050 = (attrCode$$3 & 8) << 8 | (attrCode$$3 & 96) << 4 | chrCode$$5;
        introspect(JAM.policy.p1) {
          var tile$$5 = v2049[v2050]
        }
        var palette$$3 = (attrCode$$3 & 7) << 2;
        var texel$$5 = scrollXRangeAdjusted$$2 - this.windowX & 7;
        scrollXRangeAdjusted$$2 = Math.min(8, texel$$5 + pixelPositionEnd$$5 - pixelPosition$$7);
        var v2056 = texel$$5 < scrollXRangeAdjusted$$2;
        for(;v2056;) {
          var v2054 = this.frameBuffer;
          var v2055 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6267 = this.gbcBGPalette;
          var v10443 = texel$$5;
          texel$$5 = texel$$5 + 1;
          var v9887 = tileYLine$$5 | v10443;
          introspect(JAM.policy.p1) {
            var v8769 = tile$$5[v9887]
          }
          JAM.set(v2054, v2055, v6267[palette$$3 | v8769]);
          v2056 = texel$$5 < scrollXRangeAdjusted$$2
        }
        scrollXRangeAdjusted$$2 = tileNumber$$6 + (pixelPositionEnd$$5 - pixelPosition$$7 >> 3);
        var v2081 = tileNumber$$6 < scrollXRangeAdjusted$$2;
        for(;v2081;) {
          chrCode$$5 = this.BGCHRBank1[tileNumber$$6 = tileNumber$$6 + 1];
          if(chrCode$$5 < this.gfxBackgroundBankOffset) {
            chrCode$$5 = chrCode$$5 | 256
          }
          attrCode$$3 = this.BGCHRBank2[tileNumber$$6];
          tile$$5 = this.tileCache[(attrCode$$3 & 8) << 8 | (attrCode$$3 & 96) << 4 | chrCode$$5];
          palette$$3 = (attrCode$$3 & 7) << 2;
          texel$$5 = tileYLine$$5;
          var v2065 = this.frameBuffer;
          var v2066 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6272 = this.gbcBGPalette;
          var v9890 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAM.policy.p1) {
            var v8772 = tile$$5[v9890]
          }
          JAM.set(v2065, v2066, v6272[palette$$3 | v8772]);
          var v2067 = this.frameBuffer;
          var v2068 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6274 = this.gbcBGPalette;
          var v9891 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAM.policy.p1) {
            var v8773 = tile$$5[v9891]
          }
          JAM.set(v2067, v2068, v6274[palette$$3 | v8773]);
          var v2069 = this.frameBuffer;
          var v2070 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6276 = this.gbcBGPalette;
          var v9892 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAM.policy.p1) {
            var v8774 = tile$$5[v9892]
          }
          JAM.set(v2069, v2070, v6276[palette$$3 | v8774]);
          var v2071 = this.frameBuffer;
          var v2072 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6278 = this.gbcBGPalette;
          var v9893 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAM.policy.p1) {
            var v8775 = tile$$5[v9893]
          }
          JAM.set(v2071, v2072, v6278[palette$$3 | v8775]);
          var v2073 = this.frameBuffer;
          var v2074 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6280 = this.gbcBGPalette;
          var v9894 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAM.policy.p1) {
            var v8776 = tile$$5[v9894]
          }
          JAM.set(v2073, v2074, v6280[palette$$3 | v8776]);
          var v2075 = this.frameBuffer;
          var v2076 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6282 = this.gbcBGPalette;
          var v9895 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAM.policy.p1) {
            var v8777 = tile$$5[v9895]
          }
          JAM.set(v2075, v2076, v6282[palette$$3 | v8777]);
          var v2077 = this.frameBuffer;
          var v2078 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6284 = this.gbcBGPalette;
          var v9896 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAM.policy.p1) {
            var v8778 = tile$$5[v9896]
          }
          JAM.set(v2077, v2078, v6284[palette$$3 | v8778]);
          var v2079 = this.frameBuffer;
          var v2080 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6286 = this.gbcBGPalette;
          introspect(JAM.policy.p1) {
            var v8779 = tile$$5[texel$$5]
          }
          JAM.set(v2079, v2080, v6286[palette$$3 | v8779]);
          v2081 = tileNumber$$6 < scrollXRangeAdjusted$$2
        }
        if(pixelPosition$$7 < pixelPositionEnd$$5) {
          chrCode$$5 = this.BGCHRBank1[tileNumber$$6 = tileNumber$$6 + 1];
          if(chrCode$$5 < this.gfxBackgroundBankOffset) {
            chrCode$$5 = chrCode$$5 | 256
          }
          attrCode$$3 = this.BGCHRBank2[tileNumber$$6];
          tile$$5 = this.tileCache[(attrCode$$3 & 8) << 8 | (attrCode$$3 & 96) << 4 | chrCode$$5];
          palette$$3 = (attrCode$$3 & 7) << 2;
          switch(pixelPositionEnd$$5 - pixelPosition$$7) {
            case 7:
              var v2089 = this.frameBuffer;
              var v2090 = pixelPosition$$7 + 6;
              var v6290 = this.gbcBGPalette;
              var v9899 = tileYLine$$5 | 6;
              introspect(JAM.policy.p1) {
                var v8782 = tile$$5[v9899]
              }
              JAM.set(v2089, v2090, v6290[palette$$3 | v8782]);
            case 6:
              var v2091 = this.frameBuffer;
              var v2092 = pixelPosition$$7 + 5;
              var v6292 = this.gbcBGPalette;
              var v9900 = tileYLine$$5 | 5;
              introspect(JAM.policy.p1) {
                var v8783 = tile$$5[v9900]
              }
              JAM.set(v2091, v2092, v6292[palette$$3 | v8783]);
            case 5:
              var v2093 = this.frameBuffer;
              var v2094 = pixelPosition$$7 + 4;
              var v6294 = this.gbcBGPalette;
              var v9901 = tileYLine$$5 | 4;
              introspect(JAM.policy.p1) {
                var v8784 = tile$$5[v9901]
              }
              JAM.set(v2093, v2094, v6294[palette$$3 | v8784]);
            case 4:
              var v2095 = this.frameBuffer;
              var v2096 = pixelPosition$$7 + 3;
              var v6296 = this.gbcBGPalette;
              var v9902 = tileYLine$$5 | 3;
              introspect(JAM.policy.p1) {
                var v8785 = tile$$5[v9902]
              }
              JAM.set(v2095, v2096, v6296[palette$$3 | v8785]);
            case 3:
              var v2097 = this.frameBuffer;
              var v2098 = pixelPosition$$7 + 2;
              var v6298 = this.gbcBGPalette;
              var v9903 = tileYLine$$5 | 2;
              introspect(JAM.policy.p1) {
                var v8786 = tile$$5[v9903]
              }
              JAM.set(v2097, v2098, v6298[palette$$3 | v8786]);
            case 2:
              var v2099 = this.frameBuffer;
              var v2100 = pixelPosition$$7 + 1;
              var v6300 = this.gbcBGPalette;
              var v9904 = tileYLine$$5 | 1;
              introspect(JAM.policy.p1) {
                var v8787 = tile$$5[v9904]
              }
              JAM.set(v2099, v2100, v6300[palette$$3 | v8787]);
            case 1:
              var v2101 = this.frameBuffer;
              var v6302 = this.gbcBGPalette;
              introspect(JAM.policy.p1) {
                var v8788 = tile$$5[tileYLine$$5]
              }
              JAM.set(v2101, pixelPosition$$7, v6302[palette$$3 | v8788])
          }
        }
      }
    }
  }
  return
}
function v697(scanlineToRender$$5) {
  if(this.gfxWindowDisplay) {
    var scrollYAdjusted$$4 = scanlineToRender$$5 - this.windowY;
    if(scrollYAdjusted$$4 >= 0) {
      var v2108;
      if(this.windowX > 0) {
        v2108 = this.windowX + this.currentX
      }else {
        v2108 = this.currentX
      }
      var scrollXRangeAdjusted$$1 = v2108;
      var pixelPosition$$6 = this.pixelStart + scrollXRangeAdjusted$$1;
      var pixelPositionEnd$$4 = this.pixelStart + this.pixelEnd;
      if(pixelPosition$$6 < pixelPositionEnd$$4) {
        var tileYLine$$4 = (scrollYAdjusted$$4 & 7) << 3;
        var tileNumber$$5 = (this.gfxWindowCHRBankPosition | (scrollYAdjusted$$4 & 248) << 2) + (this.currentX >> 3);
        var v2115 = this.BGCHRBank1;
        introspect(JAM.policy.p1) {
          var chrCode$$4 = v2115[tileNumber$$5]
        }
        if(chrCode$$4 < this.gfxBackgroundBankOffset) {
          chrCode$$4 = chrCode$$4 | 256
        }
        var v2117 = this.BGCHRBank2;
        introspect(JAM.policy.p1) {
          var attrCode$$2 = v2117[tileNumber$$5]
        }
        var v2118 = this.tileCache;
        var v2119 = (attrCode$$2 & 8) << 8 | (attrCode$$2 & 96) << 4 | chrCode$$4;
        introspect(JAM.policy.p1) {
          var tile$$4 = v2118[v2119]
        }
        var palette$$2 = (attrCode$$2 & 7) << 2 | (attrCode$$2 & 128) >> 2;
        var texel$$4 = scrollXRangeAdjusted$$1 - this.windowX & 7;
        scrollXRangeAdjusted$$1 = Math.min(8, texel$$4 + pixelPositionEnd$$4 - pixelPosition$$6);
        var v2126 = texel$$4 < scrollXRangeAdjusted$$1;
        for(;v2126;) {
          var v2124 = this.frameBuffer;
          var v2125 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6316 = this.gbcBGPalette;
          var v10444 = texel$$4;
          texel$$4 = texel$$4 + 1;
          var v9907 = tileYLine$$4 | v10444;
          introspect(JAM.policy.p1) {
            var v8793 = tile$$4[v9907]
          }
          JAM.set(v2124, v2125, v6316[palette$$2 | v8793]);
          v2126 = texel$$4 < scrollXRangeAdjusted$$1
        }
        scrollXRangeAdjusted$$1 = tileNumber$$5 + (pixelPositionEnd$$4 - pixelPosition$$6 >> 3);
        var v2152 = tileNumber$$5 < scrollXRangeAdjusted$$1;
        for(;v2152;) {
          chrCode$$4 = this.BGCHRBank1[tileNumber$$5 = tileNumber$$5 + 1];
          if(chrCode$$4 < this.gfxBackgroundBankOffset) {
            chrCode$$4 = chrCode$$4 | 256
          }
          attrCode$$2 = this.BGCHRBank2[tileNumber$$5];
          tile$$4 = this.tileCache[(attrCode$$2 & 8) << 8 | (attrCode$$2 & 96) << 4 | chrCode$$4];
          palette$$2 = (attrCode$$2 & 7) << 2 | (attrCode$$2 & 128) >> 2;
          texel$$4 = tileYLine$$4;
          var v2136 = this.frameBuffer;
          var v2137 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6323 = this.gbcBGPalette;
          var v9910 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAM.policy.p1) {
            var v8796 = tile$$4[v9910]
          }
          JAM.set(v2136, v2137, v6323[palette$$2 | v8796]);
          var v2138 = this.frameBuffer;
          var v2139 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6325 = this.gbcBGPalette;
          var v9911 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAM.policy.p1) {
            var v8797 = tile$$4[v9911]
          }
          JAM.set(v2138, v2139, v6325[palette$$2 | v8797]);
          var v2140 = this.frameBuffer;
          var v2141 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6327 = this.gbcBGPalette;
          var v9912 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAM.policy.p1) {
            var v8798 = tile$$4[v9912]
          }
          JAM.set(v2140, v2141, v6327[palette$$2 | v8798]);
          var v2142 = this.frameBuffer;
          var v2143 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6329 = this.gbcBGPalette;
          var v9913 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAM.policy.p1) {
            var v8799 = tile$$4[v9913]
          }
          JAM.set(v2142, v2143, v6329[palette$$2 | v8799]);
          var v2144 = this.frameBuffer;
          var v2145 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6331 = this.gbcBGPalette;
          var v9914 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAM.policy.p1) {
            var v8800 = tile$$4[v9914]
          }
          JAM.set(v2144, v2145, v6331[palette$$2 | v8800]);
          var v2146 = this.frameBuffer;
          var v2147 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6333 = this.gbcBGPalette;
          var v9915 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAM.policy.p1) {
            var v8801 = tile$$4[v9915]
          }
          JAM.set(v2146, v2147, v6333[palette$$2 | v8801]);
          var v2148 = this.frameBuffer;
          var v2149 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6335 = this.gbcBGPalette;
          var v9916 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAM.policy.p1) {
            var v8802 = tile$$4[v9916]
          }
          JAM.set(v2148, v2149, v6335[palette$$2 | v8802]);
          var v2150 = this.frameBuffer;
          var v2151 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6337 = this.gbcBGPalette;
          introspect(JAM.policy.p1) {
            var v8803 = tile$$4[texel$$4]
          }
          JAM.set(v2150, v2151, v6337[palette$$2 | v8803]);
          v2152 = tileNumber$$5 < scrollXRangeAdjusted$$1
        }
        if(pixelPosition$$6 < pixelPositionEnd$$4) {
          chrCode$$4 = this.BGCHRBank1[tileNumber$$5 = tileNumber$$5 + 1];
          if(chrCode$$4 < this.gfxBackgroundBankOffset) {
            chrCode$$4 = chrCode$$4 | 256
          }
          attrCode$$2 = this.BGCHRBank2[tileNumber$$5];
          tile$$4 = this.tileCache[(attrCode$$2 & 8) << 8 | (attrCode$$2 & 96) << 4 | chrCode$$4];
          palette$$2 = (attrCode$$2 & 7) << 2 | (attrCode$$2 & 128) >> 2;
          switch(pixelPositionEnd$$4 - pixelPosition$$6) {
            case 7:
              var v2161 = this.frameBuffer;
              var v2162 = pixelPosition$$6 + 6;
              var v6343 = this.gbcBGPalette;
              var v9919 = tileYLine$$4 | 6;
              introspect(JAM.policy.p1) {
                var v8806 = tile$$4[v9919]
              }
              JAM.set(v2161, v2162, v6343[palette$$2 | v8806]);
            case 6:
              var v2163 = this.frameBuffer;
              var v2164 = pixelPosition$$6 + 5;
              var v6345 = this.gbcBGPalette;
              var v9920 = tileYLine$$4 | 5;
              introspect(JAM.policy.p1) {
                var v8807 = tile$$4[v9920]
              }
              JAM.set(v2163, v2164, v6345[palette$$2 | v8807]);
            case 5:
              var v2165 = this.frameBuffer;
              var v2166 = pixelPosition$$6 + 4;
              var v6347 = this.gbcBGPalette;
              var v9921 = tileYLine$$4 | 4;
              introspect(JAM.policy.p1) {
                var v8808 = tile$$4[v9921]
              }
              JAM.set(v2165, v2166, v6347[palette$$2 | v8808]);
            case 4:
              var v2167 = this.frameBuffer;
              var v2168 = pixelPosition$$6 + 3;
              var v6349 = this.gbcBGPalette;
              var v9922 = tileYLine$$4 | 3;
              introspect(JAM.policy.p1) {
                var v8809 = tile$$4[v9922]
              }
              JAM.set(v2167, v2168, v6349[palette$$2 | v8809]);
            case 3:
              var v2169 = this.frameBuffer;
              var v2170 = pixelPosition$$6 + 2;
              var v6351 = this.gbcBGPalette;
              var v9923 = tileYLine$$4 | 2;
              introspect(JAM.policy.p1) {
                var v8810 = tile$$4[v9923]
              }
              JAM.set(v2169, v2170, v6351[palette$$2 | v8810]);
            case 2:
              var v2171 = this.frameBuffer;
              var v2172 = pixelPosition$$6 + 1;
              var v6353 = this.gbcBGPalette;
              var v9924 = tileYLine$$4 | 1;
              introspect(JAM.policy.p1) {
                var v8811 = tile$$4[v9924]
              }
              JAM.set(v2171, v2172, v6353[palette$$2 | v8811]);
            case 1:
              var v2173 = this.frameBuffer;
              var v6355 = this.gbcBGPalette;
              introspect(JAM.policy.p1) {
                var v8812 = tile$$4[tileYLine$$4]
              }
              JAM.set(v2173, pixelPosition$$6, v6355[palette$$2 | v8812])
          }
        }
      }
    }
  }
  return
}
function v696(scanlineToRender$$4) {
  if(this.gfxWindowDisplay) {
    var scrollYAdjusted$$3 = scanlineToRender$$4 - this.windowY;
    if(scrollYAdjusted$$3 >= 0) {
      var v2180;
      if(this.windowX > 0) {
        v2180 = this.windowX + this.currentX
      }else {
        v2180 = this.currentX
      }
      var scrollXRangeAdjusted = v2180;
      var pixelPosition$$5 = this.pixelStart + scrollXRangeAdjusted;
      var pixelPositionEnd$$3 = this.pixelStart + this.pixelEnd;
      if(pixelPosition$$5 < pixelPositionEnd$$3) {
        var tileYLine$$3 = (scrollYAdjusted$$3 & 7) << 3;
        var tileNumber$$4 = (this.gfxWindowCHRBankPosition | (scrollYAdjusted$$3 & 248) << 2) + (this.currentX >> 3);
        var v2187 = this.BGCHRBank1;
        introspect(JAM.policy.p1) {
          var chrCode$$3 = v2187[tileNumber$$4]
        }
        if(chrCode$$3 < this.gfxBackgroundBankOffset) {
          chrCode$$3 = chrCode$$3 | 256
        }
        var v2189 = this.tileCache;
        introspect(JAM.policy.p1) {
          var tile$$3 = v2189[chrCode$$3]
        }
        var texel$$3 = scrollXRangeAdjusted - this.windowX & 7;
        scrollXRangeAdjusted = Math.min(8, texel$$3 + pixelPositionEnd$$3 - pixelPosition$$5);
        var v2194 = texel$$3 < scrollXRangeAdjusted;
        for(;v2194;) {
          var v2192 = this.frameBuffer;
          var v2193 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6366 = this.BGPalette;
          var v9925 = texel$$3;
          texel$$3 = texel$$3 + 1;
          var v8815 = tileYLine$$3 | v9925;
          introspect(JAM.policy.p1) {
            var v6367 = tile$$3[v8815]
          }
          JAM.set(v2192, v2193, JAM.get(v6366, v6367, JAM.policy.p1));
          v2194 = texel$$3 < scrollXRangeAdjusted
        }
        scrollXRangeAdjusted = tileNumber$$4 + (pixelPositionEnd$$3 - pixelPosition$$5 >> 3);
        var v2216 = tileNumber$$4 < scrollXRangeAdjusted;
        for(;v2216;) {
          chrCode$$3 = this.BGCHRBank1[tileNumber$$4 = tileNumber$$4 + 1];
          if(chrCode$$3 < this.gfxBackgroundBankOffset) {
            chrCode$$3 = chrCode$$3 | 256
          }
          var v2199 = this.tileCache;
          introspect(JAM.policy.p1) {
            tile$$3 = v2199[chrCode$$3]
          }
          texel$$3 = tileYLine$$3;
          var v2200 = this.frameBuffer;
          var v2201 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6370 = this.BGPalette;
          var v8816 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAM.policy.p1) {
            var v6371 = tile$$3[v8816]
          }
          JAM.set(v2200, v2201, JAM.get(v6370, v6371, JAM.policy.p1));
          var v2202 = this.frameBuffer;
          var v2203 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6372 = this.BGPalette;
          var v8817 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAM.policy.p1) {
            var v6373 = tile$$3[v8817]
          }
          JAM.set(v2202, v2203, JAM.get(v6372, v6373, JAM.policy.p1));
          var v2204 = this.frameBuffer;
          var v2205 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6374 = this.BGPalette;
          var v8818 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAM.policy.p1) {
            var v6375 = tile$$3[v8818]
          }
          JAM.set(v2204, v2205, JAM.get(v6374, v6375, JAM.policy.p1));
          var v2206 = this.frameBuffer;
          var v2207 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6376 = this.BGPalette;
          var v8819 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAM.policy.p1) {
            var v6377 = tile$$3[v8819]
          }
          JAM.set(v2206, v2207, JAM.get(v6376, v6377, JAM.policy.p1));
          var v2208 = this.frameBuffer;
          var v2209 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6378 = this.BGPalette;
          var v8820 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAM.policy.p1) {
            var v6379 = tile$$3[v8820]
          }
          JAM.set(v2208, v2209, JAM.get(v6378, v6379, JAM.policy.p1));
          var v2210 = this.frameBuffer;
          var v2211 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6380 = this.BGPalette;
          var v8821 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAM.policy.p1) {
            var v6381 = tile$$3[v8821]
          }
          JAM.set(v2210, v2211, JAM.get(v6380, v6381, JAM.policy.p1));
          var v2212 = this.frameBuffer;
          var v2213 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6382 = this.BGPalette;
          var v8822 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAM.policy.p1) {
            var v6383 = tile$$3[v8822]
          }
          JAM.set(v2212, v2213, JAM.get(v6382, v6383, JAM.policy.p1));
          var v2214 = this.frameBuffer;
          var v2215 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6384 = this.BGPalette;
          introspect(JAM.policy.p1) {
            var v6385 = tile$$3[texel$$3]
          }
          JAM.set(v2214, v2215, JAM.get(v6384, v6385, JAM.policy.p1));
          v2216 = tileNumber$$4 < scrollXRangeAdjusted
        }
        if(pixelPosition$$5 < pixelPositionEnd$$3) {
          chrCode$$3 = this.BGCHRBank1[tileNumber$$4 = tileNumber$$4 + 1];
          if(chrCode$$3 < this.gfxBackgroundBankOffset) {
            chrCode$$3 = chrCode$$3 | 256
          }
          var v2220 = this.tileCache;
          introspect(JAM.policy.p1) {
            tile$$3 = v2220[chrCode$$3]
          }
          switch(pixelPositionEnd$$3 - pixelPosition$$5) {
            case 7:
              var v2221 = this.frameBuffer;
              var v2222 = pixelPosition$$5 + 6;
              var v6387 = this.BGPalette;
              var v8823 = tileYLine$$3 | 6;
              introspect(JAM.policy.p1) {
                var v6388 = tile$$3[v8823]
              }
              JAM.set(v2221, v2222, JAM.get(v6387, v6388, JAM.policy.p1));
            case 6:
              var v2223 = this.frameBuffer;
              var v2224 = pixelPosition$$5 + 5;
              var v6389 = this.BGPalette;
              var v8824 = tileYLine$$3 | 5;
              introspect(JAM.policy.p1) {
                var v6390 = tile$$3[v8824]
              }
              JAM.set(v2223, v2224, JAM.get(v6389, v6390, JAM.policy.p1));
            case 5:
              var v2225 = this.frameBuffer;
              var v2226 = pixelPosition$$5 + 4;
              var v6391 = this.BGPalette;
              var v8825 = tileYLine$$3 | 4;
              introspect(JAM.policy.p1) {
                var v6392 = tile$$3[v8825]
              }
              JAM.set(v2225, v2226, JAM.get(v6391, v6392, JAM.policy.p1));
            case 4:
              var v2227 = this.frameBuffer;
              var v2228 = pixelPosition$$5 + 3;
              var v6393 = this.BGPalette;
              var v8826 = tileYLine$$3 | 3;
              introspect(JAM.policy.p1) {
                var v6394 = tile$$3[v8826]
              }
              JAM.set(v2227, v2228, JAM.get(v6393, v6394, JAM.policy.p1));
            case 3:
              var v2229 = this.frameBuffer;
              var v2230 = pixelPosition$$5 + 2;
              var v6395 = this.BGPalette;
              var v8827 = tileYLine$$3 | 2;
              introspect(JAM.policy.p1) {
                var v6396 = tile$$3[v8827]
              }
              JAM.set(v2229, v2230, JAM.get(v6395, v6396, JAM.policy.p1));
            case 2:
              var v2231 = this.frameBuffer;
              var v2232 = pixelPosition$$5 + 1;
              var v6397 = this.BGPalette;
              var v8828 = tileYLine$$3 | 1;
              introspect(JAM.policy.p1) {
                var v6398 = tile$$3[v8828]
              }
              JAM.set(v2231, v2232, JAM.get(v6397, v6398, JAM.policy.p1));
            case 1:
              var v2233 = this.frameBuffer;
              var v6399 = this.BGPalette;
              introspect(JAM.policy.p1) {
                var v6400 = tile$$3[tileYLine$$3]
              }
              JAM.set(v2233, pixelPosition$$5, JAM.get(v6399, v6400, JAM.policy.p1))
          }
        }
      }
    }
  }
  return
}
function v695(scanlineToRender$$3) {
  var scrollYAdjusted$$2 = this.backgroundY + scanlineToRender$$3 & 255;
  var tileYLine$$2 = (scrollYAdjusted$$2 & 7) << 3;
  var tileYDown$$2 = this.gfxBackgroundCHRBankPosition | (scrollYAdjusted$$2 & 248) << 2;
  var scrollXAdjusted$$2 = this.backgroundX + this.currentX & 255;
  var pixelPosition$$4 = this.pixelStart + this.currentX;
  var v2246 = this.pixelStart;
  var v6405;
  var v9926 = this.gfxWindowDisplay;
  if(v9926) {
    v9926 = scanlineToRender$$3 - this.windowY >= 0
  }
  if(v9926) {
    v6405 = Math.min(Math.max(this.windowX, 0) + this.currentX, this.pixelEnd)
  }else {
    v6405 = this.pixelEnd
  }
  var pixelPositionEnd$$2 = v2246 + v6405;
  var tileNumber$$3 = tileYDown$$2 + (scrollXAdjusted$$2 >> 3);
  var v2249 = this.BGCHRBank1;
  introspect(JAM.policy.p1) {
    var chrCode$$2 = v2249[tileNumber$$3]
  }
  if(chrCode$$2 < this.gfxBackgroundBankOffset) {
    chrCode$$2 = chrCode$$2 | 256
  }
  var v2251 = this.BGCHRBank2;
  introspect(JAM.policy.p1) {
    var attrCode$$1 = v2251[tileNumber$$3]
  }
  var v2252 = this.tileCache;
  var v2253 = (attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2;
  introspect(JAM.policy.p1) {
    var tile$$2 = v2252[v2253]
  }
  var palette$$1 = (attrCode$$1 & 7) << 2;
  var texel$$2 = scrollXAdjusted$$2 & 7;
  var v6408 = texel$$2 < 8;
  if(v6408) {
    var v8834 = pixelPosition$$4 < pixelPositionEnd$$2;
    if(v8834) {
      v8834 = scrollXAdjusted$$2 < 256
    }
    v6408 = v8834
  }
  var v2257 = v6408;
  for(;v2257;) {
    var v2255 = this.frameBuffer;
    var v2256 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6409 = this.gbcBGPalette;
    var v10447 = texel$$2;
    texel$$2 = texel$$2 + 1;
    var v9931 = tileYLine$$2 | v10447;
    introspect(JAM.policy.p1) {
      var v8835 = tile$$2[v9931]
    }
    JAM.set(v2255, v2256, v6409[palette$$1 | v8835]);
    scrollXAdjusted$$2 = scrollXAdjusted$$2 + 1;
    var v6411 = texel$$2 < 8;
    if(v6411) {
      var v8836 = pixelPosition$$4 < pixelPositionEnd$$2;
      if(v8836) {
        v8836 = scrollXAdjusted$$2 < 256
      }
      v6411 = v8836
    }
    v2257 = v6411
  }
  var scrollXAdjustedAligned$$2 = Math.min(pixelPositionEnd$$2 - pixelPosition$$4, 256 - scrollXAdjusted$$2) >> 3;
  scrollXAdjusted$$2 = scrollXAdjusted$$2 + (scrollXAdjustedAligned$$2 << 3);
  scrollXAdjustedAligned$$2 = scrollXAdjustedAligned$$2 + tileNumber$$3;
  var v2282 = tileNumber$$3 < scrollXAdjustedAligned$$2;
  for(;v2282;) {
    chrCode$$2 = this.BGCHRBank1[tileNumber$$3 = tileNumber$$3 + 1];
    if(chrCode$$2 < this.gfxBackgroundBankOffset) {
      chrCode$$2 = chrCode$$2 | 256
    }
    attrCode$$1 = this.BGCHRBank2[tileNumber$$3];
    tile$$2 = this.tileCache[(attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2];
    palette$$1 = (attrCode$$1 & 7) << 2;
    texel$$2 = tileYLine$$2;
    var v2266 = this.frameBuffer;
    var v2267 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6417 = this.gbcBGPalette;
    var v9934 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAM.policy.p1) {
      var v8839 = tile$$2[v9934]
    }
    JAM.set(v2266, v2267, v6417[palette$$1 | v8839]);
    var v2268 = this.frameBuffer;
    var v2269 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6419 = this.gbcBGPalette;
    var v9935 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAM.policy.p1) {
      var v8840 = tile$$2[v9935]
    }
    JAM.set(v2268, v2269, v6419[palette$$1 | v8840]);
    var v2270 = this.frameBuffer;
    var v2271 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6421 = this.gbcBGPalette;
    var v9936 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAM.policy.p1) {
      var v8841 = tile$$2[v9936]
    }
    JAM.set(v2270, v2271, v6421[palette$$1 | v8841]);
    var v2272 = this.frameBuffer;
    var v2273 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6423 = this.gbcBGPalette;
    var v9937 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAM.policy.p1) {
      var v8842 = tile$$2[v9937]
    }
    JAM.set(v2272, v2273, v6423[palette$$1 | v8842]);
    var v2274 = this.frameBuffer;
    var v2275 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6425 = this.gbcBGPalette;
    var v9938 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAM.policy.p1) {
      var v8843 = tile$$2[v9938]
    }
    JAM.set(v2274, v2275, v6425[palette$$1 | v8843]);
    var v2276 = this.frameBuffer;
    var v2277 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6427 = this.gbcBGPalette;
    var v9939 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAM.policy.p1) {
      var v8844 = tile$$2[v9939]
    }
    JAM.set(v2276, v2277, v6427[palette$$1 | v8844]);
    var v2278 = this.frameBuffer;
    var v2279 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6429 = this.gbcBGPalette;
    var v9940 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAM.policy.p1) {
      var v8845 = tile$$2[v9940]
    }
    JAM.set(v2278, v2279, v6429[palette$$1 | v8845]);
    var v2280 = this.frameBuffer;
    var v2281 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6431 = this.gbcBGPalette;
    introspect(JAM.policy.p1) {
      var v8846 = tile$$2[texel$$2]
    }
    JAM.set(v2280, v2281, v6431[palette$$1 | v8846]);
    v2282 = tileNumber$$3 < scrollXAdjustedAligned$$2
  }
  if(pixelPosition$$4 < pixelPositionEnd$$2) {
    if(scrollXAdjusted$$2 < 256) {
      chrCode$$2 = this.BGCHRBank1[tileNumber$$3 = tileNumber$$3 + 1];
      if(chrCode$$2 < this.gfxBackgroundBankOffset) {
        chrCode$$2 = chrCode$$2 | 256
      }
      attrCode$$1 = this.BGCHRBank2[tileNumber$$3];
      tile$$2 = this.tileCache[(attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2];
      palette$$1 = (attrCode$$1 & 7) << 2;
      texel$$2 = tileYLine$$2 - 1;
      var v6435 = pixelPosition$$4 < pixelPositionEnd$$2;
      if(v6435) {
        v6435 = scrollXAdjusted$$2 < 256
      }
      var v2292 = v6435;
      for(;v2292;) {
        var v2290 = this.frameBuffer;
        var v2291 = pixelPosition$$4;
        pixelPosition$$4 = pixelPosition$$4 + 1;
        var v6436 = this.gbcBGPalette;
        var v9943 = texel$$2 = texel$$2 + 1;
        introspect(JAM.policy.p1) {
          var v8849 = tile$$2[v9943]
        }
        JAM.set(v2290, v2291, v6436[palette$$1 | v8849]);
        scrollXAdjusted$$2 = scrollXAdjusted$$2 + 1;
        var v6438 = pixelPosition$$4 < pixelPositionEnd$$2;
        if(v6438) {
          v6438 = scrollXAdjusted$$2 < 256
        }
        v2292 = v6438
      }
    }
    scrollXAdjustedAligned$$2 = (pixelPositionEnd$$2 - pixelPosition$$4 >> 3) + tileYDown$$2;
    var v2318 = tileYDown$$2 < scrollXAdjustedAligned$$2;
    for(;v2318;) {
      chrCode$$2 = this.BGCHRBank1[tileYDown$$2];
      if(chrCode$$2 < this.gfxBackgroundBankOffset) {
        chrCode$$2 = chrCode$$2 | 256
      }
      var v2297 = this.BGCHRBank2;
      var v2298 = tileYDown$$2;
      tileYDown$$2 = tileYDown$$2 + 1;
      attrCode$$1 = v2297[v2298];
      tile$$2 = this.tileCache[(attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2];
      palette$$1 = (attrCode$$1 & 7) << 2;
      texel$$2 = tileYLine$$2;
      var v2302 = this.frameBuffer;
      var v2303 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6442 = this.gbcBGPalette;
      var v9946 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAM.policy.p1) {
        var v8852 = tile$$2[v9946]
      }
      JAM.set(v2302, v2303, v6442[palette$$1 | v8852]);
      var v2304 = this.frameBuffer;
      var v2305 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6444 = this.gbcBGPalette;
      var v9947 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAM.policy.p1) {
        var v8853 = tile$$2[v9947]
      }
      JAM.set(v2304, v2305, v6444[palette$$1 | v8853]);
      var v2306 = this.frameBuffer;
      var v2307 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6446 = this.gbcBGPalette;
      var v9948 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAM.policy.p1) {
        var v8854 = tile$$2[v9948]
      }
      JAM.set(v2306, v2307, v6446[palette$$1 | v8854]);
      var v2308 = this.frameBuffer;
      var v2309 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6448 = this.gbcBGPalette;
      var v9949 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAM.policy.p1) {
        var v8855 = tile$$2[v9949]
      }
      JAM.set(v2308, v2309, v6448[palette$$1 | v8855]);
      var v2310 = this.frameBuffer;
      var v2311 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6450 = this.gbcBGPalette;
      var v9950 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAM.policy.p1) {
        var v8856 = tile$$2[v9950]
      }
      JAM.set(v2310, v2311, v6450[palette$$1 | v8856]);
      var v2312 = this.frameBuffer;
      var v2313 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6452 = this.gbcBGPalette;
      var v9951 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAM.policy.p1) {
        var v8857 = tile$$2[v9951]
      }
      JAM.set(v2312, v2313, v6452[palette$$1 | v8857]);
      var v2314 = this.frameBuffer;
      var v2315 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6454 = this.gbcBGPalette;
      var v9952 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAM.policy.p1) {
        var v8858 = tile$$2[v9952]
      }
      JAM.set(v2314, v2315, v6454[palette$$1 | v8858]);
      var v2316 = this.frameBuffer;
      var v2317 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6456 = this.gbcBGPalette;
      introspect(JAM.policy.p1) {
        var v8859 = tile$$2[texel$$2]
      }
      JAM.set(v2316, v2317, v6456[palette$$1 | v8859]);
      v2318 = tileYDown$$2 < scrollXAdjustedAligned$$2
    }
    if(pixelPosition$$4 < pixelPositionEnd$$2) {
      chrCode$$2 = this.BGCHRBank1[tileYDown$$2];
      if(chrCode$$2 < this.gfxBackgroundBankOffset) {
        chrCode$$2 = chrCode$$2 | 256
      }
      attrCode$$1 = this.BGCHRBank2[tileYDown$$2];
      tile$$2 = this.tileCache[(attrCode$$1 & 8) << 8 | (attrCode$$1 & 96) << 4 | chrCode$$2];
      palette$$1 = (attrCode$$1 & 7) << 2;
      switch(pixelPositionEnd$$2 - pixelPosition$$4) {
        case 7:
          var v2325 = this.frameBuffer;
          var v2326 = pixelPosition$$4 + 6;
          var v6460 = this.gbcBGPalette;
          var v9955 = tileYLine$$2 | 6;
          introspect(JAM.policy.p1) {
            var v8862 = tile$$2[v9955]
          }
          JAM.set(v2325, v2326, v6460[palette$$1 | v8862]);
        case 6:
          var v2327 = this.frameBuffer;
          var v2328 = pixelPosition$$4 + 5;
          var v6462 = this.gbcBGPalette;
          var v9956 = tileYLine$$2 | 5;
          introspect(JAM.policy.p1) {
            var v8863 = tile$$2[v9956]
          }
          JAM.set(v2327, v2328, v6462[palette$$1 | v8863]);
        case 5:
          var v2329 = this.frameBuffer;
          var v2330 = pixelPosition$$4 + 4;
          var v6464 = this.gbcBGPalette;
          var v9957 = tileYLine$$2 | 4;
          introspect(JAM.policy.p1) {
            var v8864 = tile$$2[v9957]
          }
          JAM.set(v2329, v2330, v6464[palette$$1 | v8864]);
        case 4:
          var v2331 = this.frameBuffer;
          var v2332 = pixelPosition$$4 + 3;
          var v6466 = this.gbcBGPalette;
          var v9958 = tileYLine$$2 | 3;
          introspect(JAM.policy.p1) {
            var v8865 = tile$$2[v9958]
          }
          JAM.set(v2331, v2332, v6466[palette$$1 | v8865]);
        case 3:
          var v2333 = this.frameBuffer;
          var v2334 = pixelPosition$$4 + 2;
          var v6468 = this.gbcBGPalette;
          var v9959 = tileYLine$$2 | 2;
          introspect(JAM.policy.p1) {
            var v8866 = tile$$2[v9959]
          }
          JAM.set(v2333, v2334, v6468[palette$$1 | v8866]);
        case 2:
          var v2335 = this.frameBuffer;
          var v2336 = pixelPosition$$4 + 1;
          var v6470 = this.gbcBGPalette;
          var v9960 = tileYLine$$2 | 1;
          introspect(JAM.policy.p1) {
            var v8867 = tile$$2[v9960]
          }
          JAM.set(v2335, v2336, v6470[palette$$1 | v8867]);
        case 1:
          var v2337 = this.frameBuffer;
          var v6472 = this.gbcBGPalette;
          introspect(JAM.policy.p1) {
            var v8868 = tile$$2[tileYLine$$2]
          }
          JAM.set(v2337, pixelPosition$$4, v6472[palette$$1 | v8868])
      }
    }
  }
  return
}
function v694(scanlineToRender$$2) {
  var scrollYAdjusted$$1 = this.backgroundY + scanlineToRender$$2 & 255;
  var tileYLine$$1 = (scrollYAdjusted$$1 & 7) << 3;
  var tileYDown$$1 = this.gfxBackgroundCHRBankPosition | (scrollYAdjusted$$1 & 248) << 2;
  var scrollXAdjusted$$1 = this.backgroundX + this.currentX & 255;
  var pixelPosition$$3 = this.pixelStart + this.currentX;
  var v2348 = this.pixelStart;
  var v6478;
  var v9961 = this.gfxWindowDisplay;
  if(v9961) {
    v9961 = scanlineToRender$$2 - this.windowY >= 0
  }
  if(v9961) {
    v6478 = Math.min(Math.max(this.windowX, 0) + this.currentX, this.pixelEnd)
  }else {
    v6478 = this.pixelEnd
  }
  var pixelPositionEnd$$1 = v2348 + v6478;
  var tileNumber$$2 = tileYDown$$1 + (scrollXAdjusted$$1 >> 3);
  var v2351 = this.BGCHRBank1;
  introspect(JAM.policy.p1) {
    var chrCode$$1 = v2351[tileNumber$$2]
  }
  if(chrCode$$1 < this.gfxBackgroundBankOffset) {
    chrCode$$1 = chrCode$$1 | 256
  }
  var v2353 = this.BGCHRBank2;
  introspect(JAM.policy.p1) {
    var attrCode = v2353[tileNumber$$2]
  }
  var v2354 = this.tileCache;
  var v2355 = (attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1;
  introspect(JAM.policy.p1) {
    var tile$$1 = v2354[v2355]
  }
  var palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
  var texel$$1 = scrollXAdjusted$$1 & 7;
  var v6483 = texel$$1 < 8;
  if(v6483) {
    var v8874 = pixelPosition$$3 < pixelPositionEnd$$1;
    if(v8874) {
      v8874 = scrollXAdjusted$$1 < 256
    }
    v6483 = v8874
  }
  var v2360 = v6483;
  for(;v2360;) {
    var v2358 = this.frameBuffer;
    var v2359 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6484 = this.gbcBGPalette;
    var v10450 = texel$$1;
    texel$$1 = texel$$1 + 1;
    var v9966 = tileYLine$$1 | v10450;
    introspect(JAM.policy.p1) {
      var v8875 = tile$$1[v9966]
    }
    JAM.set(v2358, v2359, v6484[palette | v8875]);
    scrollXAdjusted$$1 = scrollXAdjusted$$1 + 1;
    var v6486 = texel$$1 < 8;
    if(v6486) {
      var v8876 = pixelPosition$$3 < pixelPositionEnd$$1;
      if(v8876) {
        v8876 = scrollXAdjusted$$1 < 256
      }
      v6486 = v8876
    }
    v2360 = v6486
  }
  var scrollXAdjustedAligned$$1 = Math.min(pixelPositionEnd$$1 - pixelPosition$$3, 256 - scrollXAdjusted$$1) >> 3;
  scrollXAdjusted$$1 = scrollXAdjusted$$1 + (scrollXAdjustedAligned$$1 << 3);
  scrollXAdjustedAligned$$1 = scrollXAdjustedAligned$$1 + tileNumber$$2;
  var v2386 = tileNumber$$2 < scrollXAdjustedAligned$$1;
  for(;v2386;) {
    chrCode$$1 = this.BGCHRBank1[tileNumber$$2 = tileNumber$$2 + 1];
    if(chrCode$$1 < this.gfxBackgroundBankOffset) {
      chrCode$$1 = chrCode$$1 | 256
    }
    attrCode = this.BGCHRBank2[tileNumber$$2];
    tile$$1 = this.tileCache[(attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1];
    palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
    texel$$1 = tileYLine$$1;
    var v2370 = this.frameBuffer;
    var v2371 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6494 = this.gbcBGPalette;
    var v9969 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAM.policy.p1) {
      var v8879 = tile$$1[v9969]
    }
    JAM.set(v2370, v2371, v6494[palette | v8879]);
    var v2372 = this.frameBuffer;
    var v2373 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6496 = this.gbcBGPalette;
    var v9970 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAM.policy.p1) {
      var v8880 = tile$$1[v9970]
    }
    JAM.set(v2372, v2373, v6496[palette | v8880]);
    var v2374 = this.frameBuffer;
    var v2375 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6498 = this.gbcBGPalette;
    var v9971 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAM.policy.p1) {
      var v8881 = tile$$1[v9971]
    }
    JAM.set(v2374, v2375, v6498[palette | v8881]);
    var v2376 = this.frameBuffer;
    var v2377 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6500 = this.gbcBGPalette;
    var v9972 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAM.policy.p1) {
      var v8882 = tile$$1[v9972]
    }
    JAM.set(v2376, v2377, v6500[palette | v8882]);
    var v2378 = this.frameBuffer;
    var v2379 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6502 = this.gbcBGPalette;
    var v9973 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAM.policy.p1) {
      var v8883 = tile$$1[v9973]
    }
    JAM.set(v2378, v2379, v6502[palette | v8883]);
    var v2380 = this.frameBuffer;
    var v2381 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6504 = this.gbcBGPalette;
    var v9974 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAM.policy.p1) {
      var v8884 = tile$$1[v9974]
    }
    JAM.set(v2380, v2381, v6504[palette | v8884]);
    var v2382 = this.frameBuffer;
    var v2383 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6506 = this.gbcBGPalette;
    var v9975 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAM.policy.p1) {
      var v8885 = tile$$1[v9975]
    }
    JAM.set(v2382, v2383, v6506[palette | v8885]);
    var v2384 = this.frameBuffer;
    var v2385 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6508 = this.gbcBGPalette;
    introspect(JAM.policy.p1) {
      var v8886 = tile$$1[texel$$1]
    }
    JAM.set(v2384, v2385, v6508[palette | v8886]);
    v2386 = tileNumber$$2 < scrollXAdjustedAligned$$1
  }
  if(pixelPosition$$3 < pixelPositionEnd$$1) {
    if(scrollXAdjusted$$1 < 256) {
      chrCode$$1 = this.BGCHRBank1[tileNumber$$2 = tileNumber$$2 + 1];
      if(chrCode$$1 < this.gfxBackgroundBankOffset) {
        chrCode$$1 = chrCode$$1 | 256
      }
      attrCode = this.BGCHRBank2[tileNumber$$2];
      tile$$1 = this.tileCache[(attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1];
      palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
      texel$$1 = tileYLine$$1 - 1;
      var v6514 = pixelPosition$$3 < pixelPositionEnd$$1;
      if(v6514) {
        v6514 = scrollXAdjusted$$1 < 256
      }
      var v2397 = v6514;
      for(;v2397;) {
        var v2395 = this.frameBuffer;
        var v2396 = pixelPosition$$3;
        pixelPosition$$3 = pixelPosition$$3 + 1;
        var v6515 = this.gbcBGPalette;
        var v9978 = texel$$1 = texel$$1 + 1;
        introspect(JAM.policy.p1) {
          var v8889 = tile$$1[v9978]
        }
        JAM.set(v2395, v2396, v6515[palette | v8889]);
        scrollXAdjusted$$1 = scrollXAdjusted$$1 + 1;
        var v6517 = pixelPosition$$3 < pixelPositionEnd$$1;
        if(v6517) {
          v6517 = scrollXAdjusted$$1 < 256
        }
        v2397 = v6517
      }
    }
    scrollXAdjustedAligned$$1 = (pixelPositionEnd$$1 - pixelPosition$$3 >> 3) + tileYDown$$1;
    var v2424 = tileYDown$$1 < scrollXAdjustedAligned$$1;
    for(;v2424;) {
      chrCode$$1 = this.BGCHRBank1[tileYDown$$1];
      if(chrCode$$1 < this.gfxBackgroundBankOffset) {
        chrCode$$1 = chrCode$$1 | 256
      }
      var v2402 = this.BGCHRBank2;
      var v2403 = tileYDown$$1;
      tileYDown$$1 = tileYDown$$1 + 1;
      attrCode = v2402[v2403];
      tile$$1 = this.tileCache[(attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1];
      palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
      texel$$1 = tileYLine$$1;
      var v2408 = this.frameBuffer;
      var v2409 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6523 = this.gbcBGPalette;
      var v9981 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAM.policy.p1) {
        var v8892 = tile$$1[v9981]
      }
      JAM.set(v2408, v2409, v6523[palette | v8892]);
      var v2410 = this.frameBuffer;
      var v2411 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6525 = this.gbcBGPalette;
      var v9982 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAM.policy.p1) {
        var v8893 = tile$$1[v9982]
      }
      JAM.set(v2410, v2411, v6525[palette | v8893]);
      var v2412 = this.frameBuffer;
      var v2413 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6527 = this.gbcBGPalette;
      var v9983 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAM.policy.p1) {
        var v8894 = tile$$1[v9983]
      }
      JAM.set(v2412, v2413, v6527[palette | v8894]);
      var v2414 = this.frameBuffer;
      var v2415 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6529 = this.gbcBGPalette;
      var v9984 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAM.policy.p1) {
        var v8895 = tile$$1[v9984]
      }
      JAM.set(v2414, v2415, v6529[palette | v8895]);
      var v2416 = this.frameBuffer;
      var v2417 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6531 = this.gbcBGPalette;
      var v9985 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAM.policy.p1) {
        var v8896 = tile$$1[v9985]
      }
      JAM.set(v2416, v2417, v6531[palette | v8896]);
      var v2418 = this.frameBuffer;
      var v2419 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6533 = this.gbcBGPalette;
      var v9986 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAM.policy.p1) {
        var v8897 = tile$$1[v9986]
      }
      JAM.set(v2418, v2419, v6533[palette | v8897]);
      var v2420 = this.frameBuffer;
      var v2421 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6535 = this.gbcBGPalette;
      var v9987 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAM.policy.p1) {
        var v8898 = tile$$1[v9987]
      }
      JAM.set(v2420, v2421, v6535[palette | v8898]);
      var v2422 = this.frameBuffer;
      var v2423 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6537 = this.gbcBGPalette;
      introspect(JAM.policy.p1) {
        var v8899 = tile$$1[texel$$1]
      }
      JAM.set(v2422, v2423, v6537[palette | v8899]);
      v2424 = tileYDown$$1 < scrollXAdjustedAligned$$1
    }
    if(pixelPosition$$3 < pixelPositionEnd$$1) {
      chrCode$$1 = this.BGCHRBank1[tileYDown$$1];
      if(chrCode$$1 < this.gfxBackgroundBankOffset) {
        chrCode$$1 = chrCode$$1 | 256
      }
      attrCode = this.BGCHRBank2[tileYDown$$1];
      tile$$1 = this.tileCache[(attrCode & 8) << 8 | (attrCode & 96) << 4 | chrCode$$1];
      palette = (attrCode & 7) << 2 | (attrCode & 128) >> 2;
      switch(pixelPositionEnd$$1 - pixelPosition$$3) {
        case 7:
          var v2432 = this.frameBuffer;
          var v2433 = pixelPosition$$3 + 6;
          var v6543 = this.gbcBGPalette;
          var v9990 = tileYLine$$1 | 6;
          introspect(JAM.policy.p1) {
            var v8902 = tile$$1[v9990]
          }
          JAM.set(v2432, v2433, v6543[palette | v8902]);
        case 6:
          var v2434 = this.frameBuffer;
          var v2435 = pixelPosition$$3 + 5;
          var v6545 = this.gbcBGPalette;
          var v9991 = tileYLine$$1 | 5;
          introspect(JAM.policy.p1) {
            var v8903 = tile$$1[v9991]
          }
          JAM.set(v2434, v2435, v6545[palette | v8903]);
        case 5:
          var v2436 = this.frameBuffer;
          var v2437 = pixelPosition$$3 + 4;
          var v6547 = this.gbcBGPalette;
          var v9992 = tileYLine$$1 | 4;
          introspect(JAM.policy.p1) {
            var v8904 = tile$$1[v9992]
          }
          JAM.set(v2436, v2437, v6547[palette | v8904]);
        case 4:
          var v2438 = this.frameBuffer;
          var v2439 = pixelPosition$$3 + 3;
          var v6549 = this.gbcBGPalette;
          var v9993 = tileYLine$$1 | 3;
          introspect(JAM.policy.p1) {
            var v8905 = tile$$1[v9993]
          }
          JAM.set(v2438, v2439, v6549[palette | v8905]);
        case 3:
          var v2440 = this.frameBuffer;
          var v2441 = pixelPosition$$3 + 2;
          var v6551 = this.gbcBGPalette;
          var v9994 = tileYLine$$1 | 2;
          introspect(JAM.policy.p1) {
            var v8906 = tile$$1[v9994]
          }
          JAM.set(v2440, v2441, v6551[palette | v8906]);
        case 2:
          var v2442 = this.frameBuffer;
          var v2443 = pixelPosition$$3 + 1;
          var v6553 = this.gbcBGPalette;
          var v9995 = tileYLine$$1 | 1;
          introspect(JAM.policy.p1) {
            var v8907 = tile$$1[v9995]
          }
          JAM.set(v2442, v2443, v6553[palette | v8907]);
        case 1:
          var v2444 = this.frameBuffer;
          var v6555 = this.gbcBGPalette;
          introspect(JAM.policy.p1) {
            var v8908 = tile$$1[tileYLine$$1]
          }
          JAM.set(v2444, pixelPosition$$3, v6555[palette | v8908])
      }
    }
  }
  return
}
function v693(scanlineToRender$$1) {
  var scrollYAdjusted = this.backgroundY + scanlineToRender$$1 & 255;
  var tileYLine = (scrollYAdjusted & 7) << 3;
  var tileYDown = this.gfxBackgroundCHRBankPosition | (scrollYAdjusted & 248) << 2;
  var scrollXAdjusted = this.backgroundX + this.currentX & 255;
  var pixelPosition$$2 = this.pixelStart + this.currentX;
  var v2455 = this.pixelStart;
  var v6561;
  var v9996 = this.gfxWindowDisplay;
  if(v9996) {
    v9996 = scanlineToRender$$1 - this.windowY >= 0
  }
  if(v9996) {
    v6561 = Math.min(Math.max(this.windowX, 0) + this.currentX, this.pixelEnd)
  }else {
    v6561 = this.pixelEnd
  }
  var pixelPositionEnd = v2455 + v6561;
  var tileNumber$$1 = tileYDown + (scrollXAdjusted >> 3);
  var v2458 = this.BGCHRBank1;
  introspect(JAM.policy.p1) {
    var chrCode = v2458[tileNumber$$1]
  }
  if(chrCode < this.gfxBackgroundBankOffset) {
    chrCode = chrCode | 256
  }
  var v2460 = this.tileCache;
  introspect(JAM.policy.p1) {
    var tile = v2460[chrCode]
  }
  var texel = scrollXAdjusted & 7;
  var v6563 = texel < 8;
  if(v6563) {
    var v8912 = pixelPosition$$2 < pixelPositionEnd;
    if(v8912) {
      v8912 = scrollXAdjusted < 256
    }
    v6563 = v8912
  }
  var v2463 = v6563;
  for(;v2463;) {
    var v2461 = this.frameBuffer;
    var v2462 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6564 = this.BGPalette;
    var v9999 = texel;
    texel = texel + 1;
    var v8913 = tileYLine | v9999;
    introspect(JAM.policy.p1) {
      var v6565 = tile[v8913]
    }
    JAM.set(v2461, v2462, JAM.get(v6564, v6565, JAM.policy.p1));
    scrollXAdjusted = scrollXAdjusted + 1;
    var v6566 = texel < 8;
    if(v6566) {
      var v8914 = pixelPosition$$2 < pixelPositionEnd;
      if(v8914) {
        v8914 = scrollXAdjusted < 256
      }
      v6566 = v8914
    }
    v2463 = v6566
  }
  var scrollXAdjustedAligned = Math.min(pixelPositionEnd - pixelPosition$$2, 256 - scrollXAdjusted) >> 3;
  scrollXAdjusted = scrollXAdjusted + (scrollXAdjustedAligned << 3);
  scrollXAdjustedAligned = scrollXAdjustedAligned + tileNumber$$1;
  var v2485 = tileNumber$$1 < scrollXAdjustedAligned;
  for(;v2485;) {
    chrCode = this.BGCHRBank1[tileNumber$$1 = tileNumber$$1 + 1];
    if(chrCode < this.gfxBackgroundBankOffset) {
      chrCode = chrCode | 256
    }
    var v2468 = this.tileCache;
    introspect(JAM.policy.p1) {
      tile = v2468[chrCode]
    }
    texel = tileYLine;
    var v2469 = this.frameBuffer;
    var v2470 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6571 = this.BGPalette;
    var v8915 = texel;
    texel = texel + 1;
    introspect(JAM.policy.p1) {
      var v6572 = tile[v8915]
    }
    JAM.set(v2469, v2470, JAM.get(v6571, v6572, JAM.policy.p1));
    var v2471 = this.frameBuffer;
    var v2472 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6573 = this.BGPalette;
    var v8916 = texel;
    texel = texel + 1;
    introspect(JAM.policy.p1) {
      var v6574 = tile[v8916]
    }
    JAM.set(v2471, v2472, JAM.get(v6573, v6574, JAM.policy.p1));
    var v2473 = this.frameBuffer;
    var v2474 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6575 = this.BGPalette;
    var v8917 = texel;
    texel = texel + 1;
    introspect(JAM.policy.p1) {
      var v6576 = tile[v8917]
    }
    JAM.set(v2473, v2474, JAM.get(v6575, v6576, JAM.policy.p1));
    var v2475 = this.frameBuffer;
    var v2476 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6577 = this.BGPalette;
    var v8918 = texel;
    texel = texel + 1;
    introspect(JAM.policy.p1) {
      var v6578 = tile[v8918]
    }
    JAM.set(v2475, v2476, JAM.get(v6577, v6578, JAM.policy.p1));
    var v2477 = this.frameBuffer;
    var v2478 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6579 = this.BGPalette;
    var v8919 = texel;
    texel = texel + 1;
    introspect(JAM.policy.p1) {
      var v6580 = tile[v8919]
    }
    JAM.set(v2477, v2478, JAM.get(v6579, v6580, JAM.policy.p1));
    var v2479 = this.frameBuffer;
    var v2480 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6581 = this.BGPalette;
    var v8920 = texel;
    texel = texel + 1;
    introspect(JAM.policy.p1) {
      var v6582 = tile[v8920]
    }
    JAM.set(v2479, v2480, JAM.get(v6581, v6582, JAM.policy.p1));
    var v2481 = this.frameBuffer;
    var v2482 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6583 = this.BGPalette;
    var v8921 = texel;
    texel = texel + 1;
    introspect(JAM.policy.p1) {
      var v6584 = tile[v8921]
    }
    JAM.set(v2481, v2482, JAM.get(v6583, v6584, JAM.policy.p1));
    var v2483 = this.frameBuffer;
    var v2484 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6585 = this.BGPalette;
    introspect(JAM.policy.p1) {
      var v6586 = tile[texel]
    }
    JAM.set(v2483, v2484, JAM.get(v6585, v6586, JAM.policy.p1));
    v2485 = tileNumber$$1 < scrollXAdjustedAligned
  }
  if(pixelPosition$$2 < pixelPositionEnd) {
    if(scrollXAdjusted < 256) {
      chrCode = this.BGCHRBank1[tileNumber$$1 = tileNumber$$1 + 1];
      if(chrCode < this.gfxBackgroundBankOffset) {
        chrCode = chrCode | 256
      }
      var v2489 = this.tileCache;
      introspect(JAM.policy.p1) {
        tile = v2489[chrCode]
      }
      texel = tileYLine - 1;
      var v6588 = pixelPosition$$2 < pixelPositionEnd;
      if(v6588) {
        v6588 = scrollXAdjusted < 256
      }
      var v2492 = v6588;
      for(;v2492;) {
        var v2490 = this.frameBuffer;
        var v2491 = pixelPosition$$2;
        pixelPosition$$2 = pixelPosition$$2 + 1;
        var v6589 = this.BGPalette;
        var v8922 = texel = texel + 1;
        introspect(JAM.policy.p1) {
          var v6590 = tile[v8922]
        }
        JAM.set(v2490, v2491, JAM.get(v6589, v6590, JAM.policy.p1));
        scrollXAdjusted = scrollXAdjusted + 1;
        var v6591 = pixelPosition$$2 < pixelPositionEnd;
        if(v6591) {
          v6591 = scrollXAdjusted < 256
        }
        v2492 = v6591
      }
    }
    scrollXAdjustedAligned = (pixelPositionEnd - pixelPosition$$2 >> 3) + tileYDown;
    var v2515 = tileYDown < scrollXAdjustedAligned;
    for(;v2515;) {
      var v2495 = this.BGCHRBank1;
      var v2496 = tileYDown;
      tileYDown = tileYDown + 1;
      chrCode = v2495[v2496];
      if(chrCode < this.gfxBackgroundBankOffset) {
        chrCode = chrCode | 256
      }
      var v2498 = this.tileCache;
      introspect(JAM.policy.p1) {
        tile = v2498[chrCode]
      }
      texel = tileYLine;
      var v2499 = this.frameBuffer;
      var v2500 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6594 = this.BGPalette;
      var v8923 = texel;
      texel = texel + 1;
      introspect(JAM.policy.p1) {
        var v6595 = tile[v8923]
      }
      JAM.set(v2499, v2500, JAM.get(v6594, v6595, JAM.policy.p1));
      var v2501 = this.frameBuffer;
      var v2502 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6596 = this.BGPalette;
      var v8924 = texel;
      texel = texel + 1;
      introspect(JAM.policy.p1) {
        var v6597 = tile[v8924]
      }
      JAM.set(v2501, v2502, JAM.get(v6596, v6597, JAM.policy.p1));
      var v2503 = this.frameBuffer;
      var v2504 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6598 = this.BGPalette;
      var v8925 = texel;
      texel = texel + 1;
      introspect(JAM.policy.p1) {
        var v6599 = tile[v8925]
      }
      JAM.set(v2503, v2504, JAM.get(v6598, v6599, JAM.policy.p1));
      var v2505 = this.frameBuffer;
      var v2506 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6600 = this.BGPalette;
      var v8926 = texel;
      texel = texel + 1;
      introspect(JAM.policy.p1) {
        var v6601 = tile[v8926]
      }
      JAM.set(v2505, v2506, JAM.get(v6600, v6601, JAM.policy.p1));
      var v2507 = this.frameBuffer;
      var v2508 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6602 = this.BGPalette;
      var v8927 = texel;
      texel = texel + 1;
      introspect(JAM.policy.p1) {
        var v6603 = tile[v8927]
      }
      JAM.set(v2507, v2508, JAM.get(v6602, v6603, JAM.policy.p1));
      var v2509 = this.frameBuffer;
      var v2510 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6604 = this.BGPalette;
      var v8928 = texel;
      texel = texel + 1;
      introspect(JAM.policy.p1) {
        var v6605 = tile[v8928]
      }
      JAM.set(v2509, v2510, JAM.get(v6604, v6605, JAM.policy.p1));
      var v2511 = this.frameBuffer;
      var v2512 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6606 = this.BGPalette;
      var v8929 = texel;
      texel = texel + 1;
      introspect(JAM.policy.p1) {
        var v6607 = tile[v8929]
      }
      JAM.set(v2511, v2512, JAM.get(v6606, v6607, JAM.policy.p1));
      var v2513 = this.frameBuffer;
      var v2514 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6608 = this.BGPalette;
      introspect(JAM.policy.p1) {
        var v6609 = tile[texel]
      }
      JAM.set(v2513, v2514, JAM.get(v6608, v6609, JAM.policy.p1));
      v2515 = tileYDown < scrollXAdjustedAligned
    }
    if(pixelPosition$$2 < pixelPositionEnd) {
      chrCode = this.BGCHRBank1[tileYDown];
      if(chrCode < this.gfxBackgroundBankOffset) {
        chrCode = chrCode | 256
      }
      var v2518 = this.tileCache;
      introspect(JAM.policy.p1) {
        tile = v2518[chrCode]
      }
      switch(pixelPositionEnd - pixelPosition$$2) {
        case 7:
          var v2519 = this.frameBuffer;
          var v2520 = pixelPosition$$2 + 6;
          var v6611 = this.BGPalette;
          var v8930 = tileYLine | 6;
          introspect(JAM.policy.p1) {
            var v6612 = tile[v8930]
          }
          JAM.set(v2519, v2520, JAM.get(v6611, v6612, JAM.policy.p1));
        case 6:
          var v2521 = this.frameBuffer;
          var v2522 = pixelPosition$$2 + 5;
          var v6613 = this.BGPalette;
          var v8931 = tileYLine | 5;
          introspect(JAM.policy.p1) {
            var v6614 = tile[v8931]
          }
          JAM.set(v2521, v2522, JAM.get(v6613, v6614, JAM.policy.p1));
        case 5:
          var v2523 = this.frameBuffer;
          var v2524 = pixelPosition$$2 + 4;
          var v6615 = this.BGPalette;
          var v8932 = tileYLine | 4;
          introspect(JAM.policy.p1) {
            var v6616 = tile[v8932]
          }
          JAM.set(v2523, v2524, JAM.get(v6615, v6616, JAM.policy.p1));
        case 4:
          var v2525 = this.frameBuffer;
          var v2526 = pixelPosition$$2 + 3;
          var v6617 = this.BGPalette;
          var v8933 = tileYLine | 3;
          introspect(JAM.policy.p1) {
            var v6618 = tile[v8933]
          }
          JAM.set(v2525, v2526, JAM.get(v6617, v6618, JAM.policy.p1));
        case 3:
          var v2527 = this.frameBuffer;
          var v2528 = pixelPosition$$2 + 2;
          var v6619 = this.BGPalette;
          var v8934 = tileYLine | 2;
          introspect(JAM.policy.p1) {
            var v6620 = tile[v8934]
          }
          JAM.set(v2527, v2528, JAM.get(v6619, v6620, JAM.policy.p1));
        case 2:
          var v2529 = this.frameBuffer;
          var v2530 = pixelPosition$$2 + 1;
          var v6621 = this.BGPalette;
          var v8935 = tileYLine | 1;
          introspect(JAM.policy.p1) {
            var v6622 = tile[v8935]
          }
          JAM.set(v2529, v2530, JAM.get(v6621, v6622, JAM.policy.p1));
        case 1:
          var v2531 = this.frameBuffer;
          var v6623 = this.BGPalette;
          introspect(JAM.policy.p1) {
            var v6624 = tile[tileYLine]
          }
          JAM.set(v2531, pixelPosition$$2, JAM.get(v6623, v6624, JAM.policy.p1))
      }
    }
  }
  return
}
function v692(index$$61, data$$29) {
  var v8936 = this.gbcOBJRawPalette;
  introspect(JAM.policy.p1) {
    var v6625 = v8936[index$$61]
  }
  if(v6625 != data$$29) {
    JAM.set(this.gbcOBJRawPalette, index$$61, data$$29);
    if((index$$61 & 6) > 0) {
      this.midScanLineJIT();
      var v2536 = this.gbcOBJPalette;
      var v2537 = index$$61 >> 1;
      var v10655 = this.gbcOBJRawPalette;
      var v10656 = index$$61 | 1;
      introspect(JAM.policy.p1) {
        var v10453 = v10655[v10656]
      }
      var v10000 = v10453 << 8;
      var v10454 = this.gbcOBJRawPalette;
      var v10455 = index$$61 & 62;
      introspect(JAM.policy.p1) {
        var v10001 = v10454[v10455]
      }
      v2536[v2537] = 16777216 | JAM.call(this.RGBTint, this, [v10000 | v10001])
    }
  }
  return
}
function v691(index$$60, data$$28) {
  var v8938 = this.gbcBGRawPalette;
  introspect(JAM.policy.p1) {
    var v6628 = v8938[index$$60]
  }
  if(v6628 != data$$28) {
    this.midScanLineJIT();
    JAM.set(this.gbcBGRawPalette, index$$60, data$$28);
    if((index$$60 & 6) == 0) {
      var v10456 = this.gbcBGRawPalette;
      var v10457 = index$$60 | 1;
      introspect(JAM.policy.p1) {
        var v10002 = v10456[v10457]
      }
      var v8939 = v10002 << 8;
      var v10003 = this.gbcBGRawPalette;
      var v10004 = index$$60 & 62;
      introspect(JAM.policy.p1) {
        var v8940 = v10003[v10004]
      }
      data$$28 = 33554432 | JAM.call(this.RGBTint, this, [v8939 | v8940]);
      index$$60 = index$$60 >> 1;
      JAM.set(this.gbcBGPalette, index$$60, data$$28);
      this.gbcBGPalette[32 | index$$60] = 16777216 | data$$28
    }else {
      var v10005 = this.gbcBGRawPalette;
      var v10006 = index$$60 | 1;
      introspect(JAM.policy.p1) {
        var v8941 = v10005[v10006]
      }
      var v6631 = v8941 << 8;
      var v8942 = this.gbcBGRawPalette;
      var v8943 = index$$60 & 62;
      introspect(JAM.policy.p1) {
        var v6632 = v8942[v8943]
      }
      data$$28 = JAM.call(this.RGBTint, this, [v6631 | v6632]);
      index$$60 = index$$60 >> 1;
      JAM.set(this.gbcBGPalette, index$$60, data$$28);
      this.gbcBGPalette[32 | index$$60] = 16777216 | data$$28
    }
  }
  return
}
function v690(index$$59, data$$27) {
  this.gbOBJColorizedPalette[index$$59 | 1] = this.cachedOBJPaletteConversion[index$$59 | data$$27 >> 2 & 3];
  this.gbOBJColorizedPalette[index$$59 | 2] = this.cachedOBJPaletteConversion[index$$59 | data$$27 >> 4 & 3];
  this.gbOBJColorizedPalette[index$$59 | 3] = this.cachedOBJPaletteConversion[index$$59 | data$$27 >> 6];
  return
}
function v689(index$$58, data$$26) {
  this.gbOBJPalette[index$$58 | 1] = this.colors[data$$26 >> 2 & 3];
  this.gbOBJPalette[index$$58 | 2] = this.colors[data$$26 >> 4 & 3];
  this.gbOBJPalette[index$$58 | 3] = this.colors[data$$26 >> 6];
  return
}
function v688(data$$25) {
  var v2563 = this.gbBGColorizedPalette;
  var v8949 = this.cachedBGPaletteConversion;
  var v8950 = data$$25 & 3;
  introspect(JAM.policy.p1) {
    var v6645 = v8949[v8950]
  }
  v2563[0] = v6645 | 33554432;
  this.gbBGColorizedPalette[1] = this.cachedBGPaletteConversion[data$$25 >> 2 & 3];
  this.gbBGColorizedPalette[2] = this.cachedBGPaletteConversion[data$$25 >> 4 & 3];
  this.gbBGColorizedPalette[3] = this.cachedBGPaletteConversion[data$$25 >> 6];
  return
}
function v687(data$$24) {
  var v2567 = this.gbBGPalette;
  var v8953 = this.colors;
  var v8954 = data$$24 & 3;
  introspect(JAM.policy.p1) {
    var v6652 = v8953[v8954]
  }
  v2567[0] = v6652 | 33554432;
  this.gbBGPalette[1] = this.colors[data$$24 >> 2 & 3];
  this.gbBGPalette[2] = this.colors[data$$24 >> 4 & 3];
  this.gbBGPalette[3] = this.colors[data$$24 >> 6];
  return
}
function v686() {
  var counter = 0;
  var v2575 = counter < 4;
  for(;v2575;) {
    var adjustedIndex = counter << 1;
    var v2571 = this.cachedBGPaletteConversion;
    var v2572 = counter;
    var v10458 = this.gbcBGRawPalette;
    var v10459 = adjustedIndex | 1;
    introspect(JAM.policy.p1) {
      var v10009 = v10458[v10459]
    }
    var v8957 = v10009 << 8;
    var v10010 = this.gbcBGRawPalette;
    introspect(JAM.policy.p1) {
      var v8958 = v10010[adjustedIndex]
    }
    var v10847 = JAM.call(this.RGBTint, this, [v8957 | v8958]);
    v2571[v2572] = v10847;
    var v2573 = this.cachedOBJPaletteConversion;
    var v2574 = counter;
    var v10460 = this.gbcOBJRawPalette;
    var v10461 = adjustedIndex | 1;
    introspect(JAM.policy.p1) {
      var v10011 = v10460[v10461]
    }
    var v8959 = v10011 << 8;
    var v10012 = this.gbcOBJRawPalette;
    introspect(JAM.policy.p1) {
      var v8960 = v10012[adjustedIndex]
    }
    var v10848 = JAM.call(this.RGBTint, this, [v8959 | v8960]);
    v2573[v2574] = v10848;
    counter = counter + 1;
    v2575 = counter < 4
  }
  counter = 4;
  var v2578 = counter < 8;
  for(;v2578;) {
    adjustedIndex = counter << 1;
    var v2576 = this.cachedOBJPaletteConversion;
    var v2577 = counter;
    var v10462 = this.gbcOBJRawPalette;
    var v10463 = adjustedIndex | 1;
    introspect(JAM.policy.p1) {
      var v10013 = v10462[v10463]
    }
    var v8961 = v10013 << 8;
    var v10014 = this.gbcOBJRawPalette;
    introspect(JAM.policy.p1) {
      var v8962 = v10014[adjustedIndex]
    }
    var v10849 = JAM.call(this.RGBTint, this, [v8961 | v8962]);
    v2576[v2577] = v10849;
    counter = counter + 1;
    v2578 = counter < 8
  }
  this.updateGBBGPalette = this.updateGBColorizedBGPalette;
  this.updateGBOBJPalette = this.updateGBColorizedOBJPalette;
  JAM.call(this.updateGBBGPalette, this, [this.memory[65351]]);
  JAM.call(this.updateGBOBJPalette, this, [0, this.memory[65352]]);
  JAM.call(this.updateGBOBJPalette, this, [1, this.memory[65353]]);
  this.colorizedGBPalettes = true;
  return
}
function v685(value$$30) {
  var r = value$$30 & 31;
  var g = value$$30 >> 5 & 31;
  var b = value$$30 >> 10 & 31;
  return r * 13 + g * 2 + b >> 1 << 16 | g * 3 + b << 9 | r * 3 + g * 2 + b * 11 >> 1
}
function v684() {
  var v2586;
  if(this.LCDisOn) {
    v2586 = this.LINECONTROL
  }else {
    v2586 = this.DISPLAYOFFCONTROL
  }
  this.LCDCONTROL = v2586;
  var tileIndex = 0;
  if(!this.cGBC) {
    if(this.colorizedGBPalettes) {
      this.BGPalette = this.gbBGColorizedPalette;
      this.OBJPalette = this.gbOBJColorizedPalette;
      this.updateGBBGPalette = this.updateGBColorizedBGPalette;
      this.updateGBOBJPalette = this.updateGBColorizedOBJPalette
    }else {
      this.BGPalette = this.gbBGPalette;
      this.OBJPalette = this.gbOBJPalette
    }
    var v10850 = JAM.call(this.generateCacheArray, this, [1792]);
    this.tileCache = v10850;
    tileIndex = 32768;
    var v2588 = tileIndex < 36864;
    for(;v2588;) {
      JAM.call(this.generateGBOAMTileLine, this, [tileIndex]);
      tileIndex = tileIndex + 2;
      v2588 = tileIndex < 36864
    }
    tileIndex = 36864;
    var v2589 = tileIndex < 38912;
    for(;v2589;) {
      JAM.call(this.generateGBTileLine, this, [tileIndex]);
      tileIndex = tileIndex + 2;
      v2589 = tileIndex < 38912
    }
    var v10851 = JAM.call(this.getTypedArray, this, [256, 0, "uint8"]);
    this.sortBuffer = v10851;
    var v10852 = JAM.call(this.getTypedArray, this, [10, 0, "int32"]);
    this.OAMAddressCache = v10852
  }else {
    var v2590;
    if(this.currVRAMBank > 0) {
      v2590 = this.BGCHRBank2
    }else {
      v2590 = this.BGCHRBank1
    }
    this.BGCHRCurrentBank = v2590;
    var v10853 = JAM.call(this.generateCacheArray, this, [3968]);
    this.tileCache = v10853;
    var v2591 = tileIndex < 6144;
    for(;v2591;) {
      JAM.call(this.generateGBCTileBank1, this, [tileIndex]);
      JAM.call(this.generateGBCTileBank2, this, [tileIndex]);
      tileIndex = tileIndex + 16;
      v2591 = tileIndex < 6144
    }
  }
  this.renderPathBuild();
  return
}
function v683() {
  if(this.BGPriorityEnabled) {
    this.BGLayerRender = this.BGGBCLayerRender;
    this.WindowLayerRender = this.WindowGBCLayerRender
  }else {
    this.BGLayerRender = this.BGGBCLayerRenderNoPriorityFlagging;
    this.WindowLayerRender = this.WindowGBCLayerRenderNoPriorityFlagging
  }
  return
}
function v682() {
  if(!this.cGBC) {
    this.BGLayerRender = this.BGGBLayerRender;
    this.WindowLayerRender = this.WindowGBLayerRender;
    this.SpriteLayerRender = this.SpriteGBLayerRender
  }else {
    this.priorityFlaggingPathRebuild();
    this.SpriteLayerRender = this.SpriteGBCLayerRender
  }
  return
}
function v681() {
  cout("Stepping down from GBC mode.", 0);
  this.VRAM = this.GBCMemory = this.BGCHRCurrentBank = this.BGCHRBank2 = null;
  this.tileCache.length = 1792;
  if(settings[4]) {
    var v10854 = JAM.call(this.getTypedArray, this, [4, 0, "int32"]);
    this.gbBGColorizedPalette = v10854;
    var v10855 = JAM.call(this.getTypedArray, this, [8, 0, "int32"]);
    this.gbOBJColorizedPalette = v10855;
    var v10856 = JAM.call(this.getTypedArray, this, [4, 0, "int32"]);
    this.cachedBGPaletteConversion = v10856;
    var v10857 = JAM.call(this.getTypedArray, this, [8, 0, "int32"]);
    this.cachedOBJPaletteConversion = v10857;
    this.BGPalette = this.gbBGColorizedPalette;
    this.OBJPalette = this.gbOBJColorizedPalette;
    this.gbOBJPalette = this.gbBGPalette = null;
    this.getGBCColor()
  }else {
    var v10858 = JAM.call(this.getTypedArray, this, [8, 0, "int32"]);
    this.gbOBJPalette = v10858;
    var v10859 = JAM.call(this.getTypedArray, this, [4, 0, "int32"]);
    this.gbBGPalette = v10859;
    this.BGPalette = this.gbBGPalette;
    this.OBJPalette = this.gbOBJPalette
  }
  var v10860 = JAM.call(this.getTypedArray, this, [256, 0, "uint8"]);
  this.sortBuffer = v10860;
  var v10861 = JAM.call(this.getTypedArray, this, [10, 0, "int32"]);
  this.OAMAddressCache = v10861;
  this.renderPathBuild();
  this.memoryReadJumpCompile();
  this.memoryWriteJumpCompile();
  return
}
function v680() {
  var v2597;
  if(this.LCDisOn) {
    v2597 = this.LINECONTROL
  }else {
    v2597 = this.DISPLAYOFFCONTROL
  }
  this.LCDCONTROL = v2597;
  if(this.cGBC) {
    var v10862 = JAM.call(this.getTypedArray, this, [64, 0, "uint8"]);
    this.gbcOBJRawPalette = v10862;
    var v10863 = JAM.call(this.getTypedArray, this, [64, 0, "uint8"]);
    this.gbcBGRawPalette = v10863;
    var v10864 = JAM.call(this.getTypedArray, this, [32, 16777216, "int32"]);
    this.gbcOBJPalette = v10864;
    var v10865 = JAM.call(this.getTypedArray, this, [64, 0, "int32"]);
    this.gbcBGPalette = v10865;
    var v10866 = JAM.call(this.getTypedArray, this, [2048, 0, "uint8"]);
    this.BGCHRBank2 = v10866;
    var v2598;
    if(this.currVRAMBank > 0) {
      v2598 = this.BGCHRBank2
    }else {
      v2598 = this.BGCHRBank1
    }
    this.BGCHRCurrentBank = v2598;
    var v10867 = JAM.call(this.generateCacheArray, this, [3968]);
    this.tileCache = v10867
  }else {
    var v10868 = JAM.call(this.getTypedArray, this, [8, 0, "int32"]);
    this.gbOBJPalette = v10868;
    var v10869 = JAM.call(this.getTypedArray, this, [4, 0, "int32"]);
    this.gbBGPalette = v10869;
    this.BGPalette = this.gbBGPalette;
    this.OBJPalette = this.gbOBJPalette;
    var v10870 = JAM.call(this.generateCacheArray, this, [1792]);
    this.tileCache = v10870;
    var v10871 = JAM.call(this.getTypedArray, this, [256, 0, "uint8"]);
    this.sortBuffer = v10871;
    var v10872 = JAM.call(this.getTypedArray, this, [10, 0, "int32"]);
    this.OAMAddressCache = v10872
  }
  this.renderPathBuild();
  return
}
function v679() {
  var v6674 = this.actualScanLine < 144;
  if(v6674) {
    v6674 = this.modeSTAT == 3
  }
  if(v6674) {
    if(this.midScanlineOffset == -1) {
      this.midScanlineOffset = this.backgroundX & 7
    }
    if(this.LCDTicks >= 82) {
      this.pixelEnd = this.LCDTicks - 74;
      var v10873 = Math.min(this.pixelEnd - this.midScanlineOffset - this.pixelEnd % 8, 160);
      this.pixelEnd = v10873;
      if(this.bgEnabled) {
        this.pixelStart = this.lastUnrenderedLine * 160;
        JAM.call(this.BGLayerRender, this, [this.lastUnrenderedLine]);
        JAM.call(this.WindowLayerRender, this, [this.lastUnrenderedLine])
      }else {
        var pixelLine$$1 = this.lastUnrenderedLine * 160 + this.pixelEnd;
        var v2609;
        var v8974 = this.cGBC;
        if(!v8974) {
          v8974 = this.colorizedGBPalettes
        }
        if(v8974) {
          v2609 = 16316664
        }else {
          v2609 = 15728606
        }
        var defaultColor$$1 = v2609;
        var pixelPosition$$1 = this.lastUnrenderedLine * 160 + this.currentX;
        var v2613 = pixelPosition$$1 < pixelLine$$1;
        for(;v2613;) {
          JAM.set(this.frameBuffer, pixelPosition$$1, defaultColor$$1);
          pixelPosition$$1 = pixelPosition$$1 + 1;
          v2613 = pixelPosition$$1 < pixelLine$$1
        }
      }
      this.currentX = this.pixelEnd
    }
  }
  return
}
function v678(scanlineToRender) {
  this.pixelStart = scanlineToRender * 160;
  if(this.bgEnabled) {
    this.pixelEnd = 160;
    JAM.call(this.BGLayerRender, this, [scanlineToRender]);
    JAM.call(this.WindowLayerRender, this, [scanlineToRender])
  }else {
    var pixelLine = (scanlineToRender + 1) * 160;
    var v2618;
    var v8975 = this.cGBC;
    if(!v8975) {
      v8975 = this.colorizedGBPalettes
    }
    if(v8975) {
      v2618 = 16316664
    }else {
      v2618 = 15728606
    }
    var defaultColor = v2618;
    var pixelPosition = scanlineToRender * 160 + this.currentX;
    var v2622 = pixelPosition < pixelLine;
    for(;v2622;) {
      JAM.set(this.frameBuffer, pixelPosition, defaultColor);
      pixelPosition = pixelPosition + 1;
      v2622 = pixelPosition < pixelLine
    }
  }
  JAM.call(this.SpriteLayerRender, this, [scanlineToRender]);
  this.currentX = 0;
  this.midScanlineOffset = -1;
  return
}
function v677() {
  if(this.offscreenRGBCount > 0) {
    var v10874 = new Resize(160, 144, this.offscreenWidth, this.offscreenHeight, false, true);
    this.resizer = v10874
  }
  return
}
function v676() {
  var v2627 = this.resizer;
  return JAM.call(v2627.resize, v2627, [this.swizzledFrame])
}
function v675() {
  var bufferIndex$$2 = 0;
  var frameBuffer$$2 = this.swizzledFrame;
  var v6684 = this.cGBC;
  if(!v6684) {
    v6684 = this.colorizedGBPalettes
  }
  if(v6684) {
    var v2630 = bufferIndex$$2 < 69120;
    for(;v2630;) {
      var v2629 = bufferIndex$$2;
      bufferIndex$$2 = bufferIndex$$2 + 1;
      frameBuffer$$2[v2629] = 248;
      v2630 = bufferIndex$$2 < 69120
    }
  }else {
    var v2634 = bufferIndex$$2 < 69120;
    for(;v2634;) {
      var v2631 = bufferIndex$$2;
      bufferIndex$$2 = bufferIndex$$2 + 1;
      frameBuffer$$2[v2631] = 239;
      var v2632 = bufferIndex$$2;
      bufferIndex$$2 = bufferIndex$$2 + 1;
      frameBuffer$$2[v2632] = 255;
      var v2633 = bufferIndex$$2;
      bufferIndex$$2 = bufferIndex$$2 + 1;
      frameBuffer$$2[v2633] = 222;
      v2634 = bufferIndex$$2 < 69120
    }
  }
  return
}
function v674() {
  var frameBuffer$$1 = this.frameBuffer;
  var swizzledFrame = this.swizzledFrame;
  var bufferIndex$$1 = 0;
  var canvasIndex$$1 = 0;
  var v2639 = canvasIndex$$1 < 69120;
  for(;v2639;) {
    var v2636 = canvasIndex$$1;
    canvasIndex$$1 = canvasIndex$$1 + 1;
    introspect(JAM.policy.p1) {
      var v8977 = frameBuffer$$1[bufferIndex$$1]
    }
    swizzledFrame[v2636] = v8977 >> 16 & 255;
    var v2637 = canvasIndex$$1;
    canvasIndex$$1 = canvasIndex$$1 + 1;
    introspect(JAM.policy.p1) {
      var v8978 = frameBuffer$$1[bufferIndex$$1]
    }
    swizzledFrame[v2637] = v8978 >> 8 & 255;
    var v2638 = canvasIndex$$1;
    canvasIndex$$1 = canvasIndex$$1 + 1;
    var v8979 = bufferIndex$$1;
    bufferIndex$$1 = bufferIndex$$1 + 1;
    introspect(JAM.policy.p1) {
      var v6687 = frameBuffer$$1[v8979]
    }
    swizzledFrame[v2638] = v6687 & 255;
    v2639 = canvasIndex$$1 < 69120
  }
  return
}
function v673() {
  var canvasRGBALength = this.offscreenRGBCount;
  if(canvasRGBALength > 0) {
    var v2640;
    if(canvasRGBALength == 92160) {
      v2640 = this.swizzledFrame
    }else {
      v2640 = this.resizeFrameBuffer()
    }
    var frameBuffer = v2640;
    var canvasData = this.canvasBuffer.data;
    var bufferIndex = 0;
    var canvasIndex = 0;
    var v2645 = canvasIndex < canvasRGBALength;
    for(;v2645;) {
      var v2642 = canvasIndex;
      canvasIndex = canvasIndex + 1;
      var v6689 = bufferIndex;
      bufferIndex = bufferIndex + 1;
      canvasData[v2642] = frameBuffer[v6689];
      var v2643 = canvasIndex;
      canvasIndex = canvasIndex + 1;
      var v6690 = bufferIndex;
      bufferIndex = bufferIndex + 1;
      canvasData[v2643] = frameBuffer[v6690];
      var v2644 = canvasIndex;
      canvasIndex = canvasIndex + 1;
      var v6691 = bufferIndex;
      bufferIndex = bufferIndex + 1;
      canvasData[v2644] = frameBuffer[v6691];
      canvasIndex = canvasIndex + 1;
      v2645 = canvasIndex < canvasRGBALength
    }
    this.graphicsBlit()
  }
  return
}
function v672() {
  if(this.drewFrame) {
    this.dispatchDraw()
  }
  return
}
function v671() {
  this.swizzleFrameBuffer();
  this.drewFrame = true;
  return
}
function v670() {
  if(this.cTIMER) {
    var dateObj = new_Date();
    var newTime = dateObj.getTime();
    var timeElapsed = newTime - this.lastIteration;
    this.lastIteration = newTime;
    var v6692 = this.cTIMER;
    if(v6692) {
      v6692 = !this.RTCHALT
    }
    if(v6692) {
      this.RTCSeconds = this.RTCSeconds + timeElapsed / 1E3;
      var v2652 = this.RTCSeconds >= 60;
      for(;v2652;) {
        this.RTCSeconds = this.RTCSeconds - 60;
        this.RTCMinutes = this.RTCMinutes + 1;
        if(this.RTCMinutes >= 60) {
          this.RTCMinutes = this.RTCMinutes - 60;
          this.RTCHours = this.RTCHours + 1;
          if(this.RTCHours >= 24) {
            this.RTCHours = this.RTCHours - 24;
            this.RTCDays = this.RTCDays + 1;
            if(this.RTCDays >= 512) {
              this.RTCDays = this.RTCDays - 512;
              this.RTCDayOverFlow = true
            }
          }
        }
        v2652 = this.RTCSeconds >= 60
      }
    }
  }
  return
}
function v669() {
  JAM.call(this.DMAWrite, this, [1]);
  if(this.halt) {
    if(this.LCDTicks - this.spriteCount < (4 >> this.doubleSpeedShifter | 32)) {
      this.CPUTicks = 4 + (32 + this.spriteCount << this.doubleSpeedShifter);
      this.LCDTicks = this.spriteCount + (4 >> this.doubleSpeedShifter | 32)
    }
  }else {
    this.LCDTicks = this.LCDTicks + (4 >> this.doubleSpeedShifter | 32)
  }
  if(this.memory[65365] == 0) {
    this.hdmaRunning = false;
    this.memory[65365] = 255
  }else {
    this.memory[65365] = this.memory[65365] - 1
  }
  return
}
function v668() {
  if(this.drewBlank == 0) {
    this.clearFrameBuffer();
    this.drewFrame = true
  }
  this.drewBlank = 2;
  return
}
function v667() {
  function v666(parentObj$$517) {
    if(parentObj$$517.LCDTicks >= 8) {
      var v6718 = parentObj$$517.STATTracker != 4;
      if(v6718) {
        v6718 = parentObj$$517.memory[65348] == 153
      }
      if(v6718) {
        parentObj$$517.memory[65348] = 0;
        if(parentObj$$517.memory[65349] == 0) {
          var v2664 = parentObj$$517.memory;
          v2664[65345] = v2664[65345] | 4;
          if(parentObj$$517.LYCMatchTriggerSTAT) {
            parentObj$$517.interruptsRequested = parentObj$$517.interruptsRequested | 2;
            parentObj$$517.checkIRQMatching()
          }
        }else {
          var v2666 = parentObj$$517.memory;
          v2666[65345] = v2666[65345] & 123
        }
        parentObj$$517.STATTracker = 4
      }
      if(parentObj$$517.LCDTicks >= 456) {
        parentObj$$517.LCDTicks = parentObj$$517.LCDTicks - 456;
        parentObj$$517.STATTracker = parentObj$$517.actualScanLine = 0;
        var v2669 = parentObj$$517.LINECONTROL;
        JAM.call(v2669[0], v2669, [parentObj$$517])
      }
    }
    return
  }
  function v665(parentObj$$516) {
    if(parentObj$$516.LCDTicks >= 456) {
      parentObj$$516.LCDTicks = parentObj$$516.LCDTicks - 456;
      parentObj$$516.actualScanLine = parentObj$$516.memory[65348] = parentObj$$516.memory[65348] + 1;
      if(parentObj$$516.actualScanLine == parentObj$$516.memory[65349]) {
        var v2672 = parentObj$$516.memory;
        v2672[65345] = v2672[65345] | 4;
        if(parentObj$$516.LYCMatchTriggerSTAT) {
          parentObj$$516.interruptsRequested = parentObj$$516.interruptsRequested | 2;
          parentObj$$516.checkIRQMatching()
        }
      }else {
        var v2674 = parentObj$$516.memory;
        v2674[65345] = v2674[65345] & 123
      }
      var v2676 = parentObj$$516.LINECONTROL;
      JAM.call(JAM.get(v2676, parentObj$$516.actualScanLine, JAM.policy.p1), v2676, [parentObj$$516])
    }
    return
  }
  function v664(parentObj$$515) {
    if(parentObj$$515.LCDTicks < 80) {
      parentObj$$515.scanLineMode2()
    }else {
      if(parentObj$$515.LCDTicks < 252) {
        parentObj$$515.scanLineMode3()
      }else {
        if(parentObj$$515.LCDTicks < 456) {
          parentObj$$515.scanLineMode0()
        }else {
          parentObj$$515.LCDTicks = parentObj$$515.LCDTicks - 456;
          if(parentObj$$515.STATTracker != 3) {
            if(parentObj$$515.STATTracker != 2) {
              var v6735 = parentObj$$515.STATTracker == 0;
              if(v6735) {
                v6735 = parentObj$$515.mode2TriggerSTAT
              }
              if(v6735) {
                parentObj$$515.interruptsRequested = parentObj$$515.interruptsRequested | 2
              }
              parentObj$$515.incrementScanLineQueue()
            }
            if(parentObj$$515.hdmaRunning) {
              parentObj$$515.executeHDMA()
            }
            if(parentObj$$515.mode0TriggerSTAT) {
              parentObj$$515.interruptsRequested = parentObj$$515.interruptsRequested | 2
            }
          }
          parentObj$$515.actualScanLine = parentObj$$515.memory[65348] = 144;
          if(parentObj$$515.memory[65349] == 144) {
            var v2685 = parentObj$$515.memory;
            v2685[65345] = v2685[65345] | 4;
            if(parentObj$$515.LYCMatchTriggerSTAT) {
              parentObj$$515.interruptsRequested = parentObj$$515.interruptsRequested | 2
            }
          }else {
            var v2687 = parentObj$$515.memory;
            v2687[65345] = v2687[65345] & 123
          }
          parentObj$$515.STATTracker = 0;
          parentObj$$515.modeSTAT = 1;
          var v6740 = parentObj$$515.interruptsRequested;
          var v9002;
          if(parentObj$$515.mode1TriggerSTAT) {
            v9002 = 3
          }else {
            v9002 = 1
          }
          parentObj$$515.interruptsRequested = v6740 | v9002;
          parentObj$$515.checkIRQMatching();
          if(parentObj$$515.drewBlank == 0) {
            var v6743 = parentObj$$515.totalLinesPassed < 144;
            if(!v6743) {
              var v9004 = parentObj$$515.totalLinesPassed == 144;
              if(v9004) {
                v9004 = parentObj$$515.midScanlineOffset > -1
              }
              v6743 = v9004
            }
            if(v6743) {
              parentObj$$515.graphicsJITVBlank();
              parentObj$$515.prepareFrame()
            }
          }else {
            parentObj$$515.drewBlank = parentObj$$515.drewBlank - 1
          }
          var v2691 = parentObj$$515.LINECONTROL;
          JAM.call(v2691[144], v2691, [parentObj$$515])
        }
      }
    }
    return
  }
  function v663(parentObj$$514) {
    if(parentObj$$514.LCDTicks < 80) {
      parentObj$$514.scanLineMode2()
    }else {
      if(parentObj$$514.LCDTicks < 252) {
        parentObj$$514.scanLineMode3()
      }else {
        if(parentObj$$514.LCDTicks < 456) {
          parentObj$$514.scanLineMode0()
        }else {
          parentObj$$514.LCDTicks = parentObj$$514.LCDTicks - 456;
          if(parentObj$$514.STATTracker != 3) {
            if(parentObj$$514.STATTracker != 2) {
              var v6751 = parentObj$$514.STATTracker == 0;
              if(v6751) {
                v6751 = parentObj$$514.mode2TriggerSTAT
              }
              if(v6751) {
                parentObj$$514.interruptsRequested = parentObj$$514.interruptsRequested | 2
              }
              parentObj$$514.incrementScanLineQueue()
            }
            if(parentObj$$514.hdmaRunning) {
              parentObj$$514.executeHDMA()
            }
            if(parentObj$$514.mode0TriggerSTAT) {
              parentObj$$514.interruptsRequested = parentObj$$514.interruptsRequested | 2
            }
          }
          parentObj$$514.actualScanLine = parentObj$$514.memory[65348] = parentObj$$514.memory[65348] + 1;
          if(parentObj$$514.actualScanLine == parentObj$$514.memory[65349]) {
            var v2700 = parentObj$$514.memory;
            v2700[65345] = v2700[65345] | 4;
            if(parentObj$$514.LYCMatchTriggerSTAT) {
              parentObj$$514.interruptsRequested = parentObj$$514.interruptsRequested | 2
            }
          }else {
            var v2702 = parentObj$$514.memory;
            v2702[65345] = v2702[65345] & 123
          }
          parentObj$$514.checkIRQMatching();
          parentObj$$514.STATTracker = 0;
          parentObj$$514.modeSTAT = 2;
          var v2704 = parentObj$$514.LINECONTROL;
          JAM.call(JAM.get(v2704, parentObj$$514.actualScanLine, JAM.policy.p1), v2704, [parentObj$$514])
        }
      }
    }
    return
  }
  var line$$3 = 0;
  var v2716 = line$$3 < 154;
  for(;v2716;) {
    if(line$$3 < 143) {
      this.LINECONTROL[line$$3] = v663
    }else {
      if(line$$3 == 143) {
        this.LINECONTROL[143] = v664
      }else {
        if(line$$3 < 153) {
          this.LINECONTROL[line$$3] = v665
        }else {
          this.LINECONTROL[153] = v666
        }
      }
    }
    line$$3 = line$$3 + 1;
    v2716 = line$$3 < 154
  }
  return
}
function v662() {
  this.updateCore();
  if(this.emulatorTicks >= this.CPUCyclesTotal) {
    this.iterationEndRoutine()
  }
  return
}
function v661() {
  this.LCDTicks = this.LCDTicks + (this.CPUTicks >> this.doubleSpeedShifter);
  var v2718 = this.LCDCONTROL;
  JAM.call(JAM.get(v2718, this.actualScanLine, JAM.policy.p1), v2718, [this]);
  var timedTicks$$1 = this.CPUTicks >> this.doubleSpeedShifter;
  this.audioTicks = this.audioTicks + timedTicks$$1;
  this.emulatorTicks = this.emulatorTicks + timedTicks$$1;
  this.DIVTicks = this.DIVTicks + this.CPUTicks;
  if(this.TIMAEnabled) {
    this.timerTicks = this.timerTicks + this.CPUTicks;
    var v2724 = this.timerTicks >= this.TACClocker;
    for(;v2724;) {
      this.timerTicks = this.timerTicks - this.TACClocker;
      if((this.memory[65285] = this.memory[65285] + 1) == 256) {
        this.memory[65285] = this.memory[65286];
        this.interruptsRequested = this.interruptsRequested | 4;
        this.checkIRQMatching()
      }
      v2724 = this.timerTicks >= this.TACClocker
    }
  }
  if(this.serialTimer > 0) {
    this.serialTimer = this.serialTimer - this.CPUTicks;
    if(this.serialTimer <= 0) {
      this.interruptsRequested = this.interruptsRequested | 8;
      this.checkIRQMatching()
    }
    this.serialShiftTimer = this.serialShiftTimer - this.CPUTicks;
    if(this.serialShiftTimer <= 0) {
      this.serialShiftTimer = this.serialShiftTimerAllocated;
      this.memory[65281] = this.memory[65281] << 1 & 254 | 1
    }
  }
  return
}
function v660() {
  if(this.memory[65348] == this.memory[65349]) {
    var v2730 = this.memory;
    v2730[65345] = v2730[65345] | 4;
    if(this.LYCMatchTriggerSTAT) {
      this.interruptsRequested = this.interruptsRequested | 2;
      this.checkIRQMatching()
    }
  }else {
    var v2732 = this.memory;
    v2732[65345] = v2732[65345] & 123
  }
  return
}
function v659(line$$2) {
  this.spriteCount = 252;
  var v6789 = this.cGBC;
  if(v6789) {
    v6789 = this.gfxSpriteShow
  }
  if(v6789) {
    var lineAdjusted = line$$2 + 16;
    var yoffset$$3 = 0;
    var v2734;
    if(this.gfxSpriteNormalHeight) {
      v2734 = 8
    }else {
      v2734 = 16
    }
    var yCap = v2734;
    var OAMAddress = 65024;
    var v6791 = OAMAddress < 65184;
    if(v6791) {
      v6791 = this.spriteCount < 312
    }
    var v2737 = v6791;
    for(;v2737;) {
      var v6792 = this.memory;
      introspect(JAM.policy.p1) {
        var v2735 = v6792[OAMAddress]
      }
      yoffset$$3 = lineAdjusted - v2735;
      var v6793 = yoffset$$3 > -1;
      if(v6793) {
        v6793 = yoffset$$3 < yCap
      }
      if(v6793) {
        this.spriteCount = this.spriteCount + 6
      }
      OAMAddress = OAMAddress + 4;
      var v6795 = OAMAddress < 65184;
      if(v6795) {
        v6795 = this.spriteCount < 312
      }
      v2737 = v6795
    }
  }
  return
}
function v658() {
  switch(this.modeSTAT) {
    case 0:
      if(this.actualScanLine == 143) {
        JAM.call(this.updateSpriteCount, this, [0]);
        return this.spriteCount + 5016
      }
      JAM.call(this.updateSpriteCount, this, [this.actualScanLine + 1]);
      return this.spriteCount + 456;
    case 2:
    ;
    case 3:
      JAM.call(this.updateSpriteCount, this, [this.actualScanLine]);
      return this.spriteCount;
    case 1:
      JAM.call(this.updateSpriteCount, this, [0]);
      return this.spriteCount + 456 * (154 - this.actualScanLine)
  }
  return
}
function v657() {
  if(this.memory[65349] != 0) {
    if(this.memory[65349] > this.actualScanLine) {
      return 456 * (this.memory[65349] - this.actualScanLine)
    }
    return 456 * (154 - this.actualScanLine + this.memory[65349])
  }
  var v9026;
  var v10467 = this.actualScanLine == 153;
  if(v10467) {
    v10467 = this.memory[65348] == 0
  }
  if(v10467) {
    v9026 = 154
  }else {
    v9026 = 153 - this.actualScanLine
  }
  return 456 * v9026 + 8
}
function v656() {
  if(this.modeSTAT != 0) {
    if(this.STATTracker != 2) {
      if(this.STATTracker == 0) {
        if(this.mode2TriggerSTAT) {
          this.interruptsRequested = this.interruptsRequested | 2;
          this.checkIRQMatching()
        }
        this.modeSTAT = 3
      }
      this.incrementScanLineQueue();
      JAM.call(this.updateSpriteCount, this, [this.actualScanLine]);
      this.STATTracker = 2
    }
    if(this.LCDTicks >= this.spriteCount) {
      if(this.hdmaRunning) {
        this.executeHDMA()
      }
      if(this.mode0TriggerSTAT) {
        this.interruptsRequested = this.interruptsRequested | 2;
        this.checkIRQMatching()
      }
      this.STATTracker = 3;
      this.modeSTAT = 0
    }
  }
  return
}
function v655() {
  if(this.modeSTAT != 3) {
    var v6815 = this.STATTracker == 0;
    if(v6815) {
      v6815 = this.mode2TriggerSTAT
    }
    if(v6815) {
      this.interruptsRequested = this.interruptsRequested | 2;
      this.checkIRQMatching()
    }
    this.STATTracker = 1;
    this.modeSTAT = 3
  }
  return
}
function v654() {
  if(this.STATTracker != 1) {
    if(this.mode2TriggerSTAT) {
      this.interruptsRequested = this.interruptsRequested | 2;
      this.checkIRQMatching()
    }
    this.STATTracker = 1;
    this.modeSTAT = 2
  }
  return
}
function v653() {
  var endModulus = this.CPUCyclesTotalCurrent % 4;
  this.CPUCyclesTotal = this.CPUCyclesTotalBase + this.CPUCyclesTotalCurrent - endModulus;
  this.CPUCyclesTotalCurrent = endModulus;
  return
}
function v652() {
  this.CPUStopped = true;
  this.iterationEndRoutine();
  if(this.emulatorTicks < 0) {
    this.audioTicks = this.audioTicks - this.emulatorTicks;
    this.audioJIT()
  }
  return
}
function v651() {
  if((this.stopEmulator & 1) == 0) {
    this.audioJIT();
    this.memory[65284] = this.memory[65284] + (this.DIVTicks >> 8) & 255;
    this.DIVTicks = this.DIVTicks & 255;
    this.stopEmulator = this.stopEmulator | 1;
    this.emulatorTicks = this.emulatorTicks - this.CPUCyclesTotal;
    this.CPUCyclesTotalCurrent = this.CPUCyclesTotalCurrent + this.CPUCyclesTotalRoundoff;
    this.recalculateIterationClockLimit()
  }
  return
}
function v650() {
  var opcodeToExecute = 0;
  var timedTicks = 0;
  var v2793 = this.stopEmulator == 0;
  for(;v2793;) {
    switch(this.IRQEnableDelay) {
      case 1:
        this.IME = true;
        this.checkIRQMatching();
      case 2:
        this.IRQEnableDelay = this.IRQEnableDelay - 1
    }
    if(this.IRQLineMatched > 0) {
      this.launchIRQ()
    }
    var v2771 = this.memoryReader;
    opcodeToExecute = JAM.call(JAM.get(v2771, this.programCounter, JAM.policy.p1), v2771, [this, this.programCounter]);
    this.programCounter = this.programCounter + 1 & 65535;
    if(this.skipPCIncrement) {
      this.programCounter = this.programCounter - 1 & 65535;
      this.skipPCIncrement = false
    }
    var v2777 = this.TICKTable;
    introspect(JAM.policy.p1) {
      this.CPUTicks = v2777[opcodeToExecute]
    }
    var v2778 = this.OPCODE;
    JAM.call(JAM.get(v2778, opcodeToExecute, JAM.policy.p1), v2778, [this]);
    this.LCDTicks = this.LCDTicks + (this.CPUTicks >> this.doubleSpeedShifter);
    var v2779 = this.LCDCONTROL;
    JAM.call(JAM.get(v2779, this.actualScanLine, JAM.policy.p1), v2779, [this]);
    timedTicks = this.CPUTicks >> this.doubleSpeedShifter;
    this.audioTicks = this.audioTicks + timedTicks;
    this.emulatorTicks = this.emulatorTicks + timedTicks;
    this.DIVTicks = this.DIVTicks + this.CPUTicks;
    if(this.TIMAEnabled) {
      this.timerTicks = this.timerTicks + this.CPUTicks;
      var v2785 = this.timerTicks >= this.TACClocker;
      for(;v2785;) {
        this.timerTicks = this.timerTicks - this.TACClocker;
        if((this.memory[65285] = this.memory[65285] + 1) == 256) {
          this.memory[65285] = this.memory[65286];
          this.interruptsRequested = this.interruptsRequested | 4;
          this.checkIRQMatching()
        }
        v2785 = this.timerTicks >= this.TACClocker
      }
    }
    if(this.serialTimer > 0) {
      this.serialTimer = this.serialTimer - this.CPUTicks;
      if(this.serialTimer <= 0) {
        this.interruptsRequested = this.interruptsRequested | 8;
        this.checkIRQMatching()
      }
      this.serialShiftTimer = this.serialShiftTimer - this.CPUTicks;
      if(this.serialShiftTimer <= 0) {
        this.serialShiftTimer = this.serialShiftTimerAllocated;
        this.memory[65281] = this.memory[65281] << 1 & 254 | 1
      }
    }
    if(this.emulatorTicks >= this.CPUCyclesTotal) {
      this.iterationEndRoutine()
    }
    this.instructions = this.instructions + 1;
    if(this.instructions > this.totalInstructions) {
      this.iterationEndRoutine();
      this.stopEmulator = this.stopEmulator | 2;
      checkFinalState()
    }
    v2793 = this.stopEmulator == 0
  }
  return
}
function v649() {
  if((this.stopEmulator & 2) == 0) {
    if((this.stopEmulator & 1) == 1) {
      if(!this.CPUStopped) {
        this.stopEmulator = 0;
        this.drewFrame = false;
        this.audioUnderrunAdjustment();
        this.clockUpdate();
        if(!this.halt) {
          this.executeIteration()
        }else {
          this.CPUTicks = 0;
          this.calculateHALTPeriod();
          if(this.halt) {
            this.updateCoreFull()
          }else {
            this.executeIteration()
          }
        }
        this.requestDraw()
      }else {
        this.audioUnderrunAdjustment();
        this.audioTicks = this.audioTicks + this.CPUCyclesTotal;
        this.audioJIT();
        this.stopEmulator = this.stopEmulator | 1
      }
    }else {
      cout("Iterator restarted a faulted core.", 2);
      pause()
    }
  }
  return
}
function v648() {
  this.cachedChannel4Sample = this.noiseSampleTable[this.channel4currentVolume | this.channel4lastSampleLookup];
  this.channel4OutputLevelCache();
  return
}
function v647(address, data$$23) {
  if(this.channel3canPlay) {
    this.audioJIT()
  }
  this.memory[65328 | address] = data$$23;
  address = address << 1;
  JAM.set(this.channel3PCM, address, data$$23 >> 4);
  this.channel3PCM[address | 1] = data$$23 & 15;
  return
}
function v646() {
  var v6879 = this.channel3PCM;
  var v6880 = this.channel3lastSampleLookup;
  introspect(JAM.policy.p1) {
    var v2807 = v6879[v6880]
  }
  this.cachedChannel3Sample = v2807 >> this.channel3patternType;
  this.channel3OutputLevelCache();
  return
}
function v645() {
  this.mixerOutputCache = ((this.channel1currentSampleLeftTrimary + this.channel2currentSampleLeftTrimary + this.channel3currentSampleLeftSecondary + this.channel4currentSampleLeftSecondary) * this.VinLeftChannelMasterVolume << 9) + (this.channel1currentSampleRightTrimary + this.channel2currentSampleRightTrimary + this.channel3currentSampleRightSecondary + this.channel4currentSampleRightSecondary) * this.VinRightChannelMasterVolume;
  return
}
function v644() {
  if(this.channel4Enabled) {
    this.channel4currentSampleLeftSecondary = this.channel4currentSampleLeft;
    this.channel4currentSampleRightSecondary = this.channel4currentSampleRight
  }else {
    this.channel4currentSampleLeftSecondary = 0;
    this.channel4currentSampleRightSecondary = 0
  }
  this.mixerOutputLevelCache();
  return
}
function v643() {
  var v2812;
  if(this.leftChannel4) {
    v2812 = this.cachedChannel4Sample
  }else {
    v2812 = 0
  }
  this.channel4currentSampleLeft = v2812;
  var v2813;
  if(this.rightChannel4) {
    v2813 = this.cachedChannel4Sample
  }else {
    v2813 = 0
  }
  this.channel4currentSampleRight = v2813;
  this.channel4OutputLevelSecondaryCache();
  return
}
function v642() {
  this.channel4canPlay = this.memory[65313] > 7;
  this.channel4EnableCheck();
  this.channel4OutputLevelSecondaryCache();
  return
}
function v641() {
  var v6887 = this.channel4consecutive;
  if(!v6887) {
    v6887 = this.channel4totalLength > 0
  }
  var v2815 = v6887;
  if(v2815) {
    v2815 = this.channel4canPlay
  }
  this.channel4Enabled = v2815;
  this.channel4OutputLevelSecondaryCache();
  return
}
function v640() {
  if(this.channel3Enabled) {
    this.channel3currentSampleLeftSecondary = this.channel3currentSampleLeft;
    this.channel3currentSampleRightSecondary = this.channel3currentSampleRight
  }else {
    this.channel3currentSampleLeftSecondary = 0;
    this.channel3currentSampleRightSecondary = 0
  }
  this.mixerOutputLevelCache();
  return
}
function v639() {
  var v2817;
  if(this.leftChannel3) {
    v2817 = this.cachedChannel3Sample
  }else {
    v2817 = 0
  }
  this.channel3currentSampleLeft = v2817;
  var v2818;
  if(this.rightChannel3) {
    v2818 = this.cachedChannel3Sample
  }else {
    v2818 = 0
  }
  this.channel3currentSampleRight = v2818;
  this.channel3OutputLevelSecondaryCache();
  return
}
function v638() {
  var v2819 = this.channel3consecutive;
  if(!v2819) {
    v2819 = this.channel3totalLength > 0
  }
  this.channel3Enabled = v2819;
  this.channel3OutputLevelSecondaryCache();
  return
}
function v637() {
  var v6892 = this.channel2CachedDuty;
  var v6893 = this.channel2DutyTracker;
  introspect(JAM.policy.p1) {
    var v2820 = v6892[v6893]
  }
  if(v2820) {
    this.channel2currentSampleLeftTrimary = this.channel2currentSampleLeftSecondary;
    this.channel2currentSampleRightTrimary = this.channel2currentSampleRightSecondary
  }else {
    this.channel2currentSampleLeftTrimary = 0;
    this.channel2currentSampleRightTrimary = 0
  }
  this.mixerOutputLevelCache();
  return
}
function v636() {
  if(this.channel2Enabled) {
    this.channel2currentSampleLeftSecondary = this.channel2currentSampleLeft;
    this.channel2currentSampleRightSecondary = this.channel2currentSampleRight
  }else {
    this.channel2currentSampleLeftSecondary = 0;
    this.channel2currentSampleRightSecondary = 0
  }
  this.channel2OutputLevelTrimaryCache();
  return
}
function v635() {
  var v2822;
  if(this.leftChannel2) {
    v2822 = this.channel2envelopeVolume
  }else {
    v2822 = 0
  }
  this.channel2currentSampleLeft = v2822;
  var v2823;
  if(this.rightChannel2) {
    v2823 = this.channel2envelopeVolume
  }else {
    v2823 = 0
  }
  this.channel2currentSampleRight = v2823;
  this.channel2OutputLevelSecondaryCache();
  return
}
function v634() {
  this.channel2canPlay = this.memory[65303] > 7;
  this.channel2EnableCheck();
  this.channel2OutputLevelSecondaryCache();
  return
}
function v633() {
  var v6897 = this.channel2consecutive;
  if(!v6897) {
    v6897 = this.channel2totalLength > 0
  }
  var v2825 = v6897;
  if(v2825) {
    v2825 = this.channel2canPlay
  }
  this.channel2Enabled = v2825;
  this.channel2OutputLevelSecondaryCache();
  return
}
function v632() {
  var v6898 = this.channel1CachedDuty;
  var v6899 = this.channel1DutyTracker;
  introspect(JAM.policy.p1) {
    var v2826 = v6898[v6899]
  }
  if(v2826) {
    this.channel1currentSampleLeftTrimary = this.channel1currentSampleLeftSecondary;
    this.channel1currentSampleRightTrimary = this.channel1currentSampleRightSecondary
  }else {
    this.channel1currentSampleLeftTrimary = 0;
    this.channel1currentSampleRightTrimary = 0
  }
  this.mixerOutputLevelCache();
  return
}
function v631() {
  if(this.channel1Enabled) {
    this.channel1currentSampleLeftSecondary = this.channel1currentSampleLeft;
    this.channel1currentSampleRightSecondary = this.channel1currentSampleRight
  }else {
    this.channel1currentSampleLeftSecondary = 0;
    this.channel1currentSampleRightSecondary = 0
  }
  this.channel1OutputLevelTrimaryCache();
  return
}
function v630() {
  var v2828;
  if(this.leftChannel1) {
    v2828 = this.channel1envelopeVolume
  }else {
    v2828 = 0
  }
  this.channel1currentSampleLeft = v2828;
  var v2829;
  if(this.rightChannel1) {
    v2829 = this.channel1envelopeVolume
  }else {
    v2829 = 0
  }
  this.channel1currentSampleRight = v2829;
  this.channel1OutputLevelSecondaryCache();
  return
}
function v629() {
  this.channel1canPlay = this.memory[65298] > 7;
  this.channel1EnableCheck();
  this.channel1OutputLevelSecondaryCache();
  return
}
function v628() {
  var v6903 = this.channel1consecutive;
  if(!v6903) {
    v6903 = this.channel1totalLength > 0
  }
  var v2831 = v6903;
  if(v2831) {
    var v6904 = !this.channel1SweepFault;
    if(v6904) {
      v6904 = this.channel1canPlay
    }
    v2831 = v6904
  }
  this.channel1Enabled = v2831;
  this.channel1OutputLevelSecondaryCache();
  return
}
function v627() {
  if((this.channel1FrequencyCounter = this.channel1FrequencyCounter - 1) == 0) {
    this.channel1FrequencyCounter = this.channel1FrequencyTracker;
    this.channel1DutyTracker = this.channel1DutyTracker + 1 & 7;
    this.channel1OutputLevelTrimaryCache()
  }
  if((this.channel2FrequencyCounter = this.channel2FrequencyCounter - 1) == 0) {
    this.channel2FrequencyCounter = this.channel2FrequencyTracker;
    this.channel2DutyTracker = this.channel2DutyTracker + 1 & 7;
    this.channel2OutputLevelTrimaryCache()
  }
  if((this.channel3Counter = this.channel3Counter - 1) == 0) {
    if(this.channel3canPlay) {
      this.channel3lastSampleLookup = this.channel3lastSampleLookup + 1 & 31
    }
    this.channel3Counter = this.channel3FrequencyPeriod;
    this.channel3UpdateCache()
  }
  if((this.channel4Counter = this.channel4Counter - 1) == 0) {
    this.channel4lastSampleLookup = this.channel4lastSampleLookup + 1 & this.channel4BitRange;
    this.channel4Counter = this.channel4FrequencyPeriod;
    this.channel4UpdateCache()
  }
  return
}
function v626() {
  if(this.channel1envelopeSweepsLast > -1) {
    if(this.channel1envelopeSweeps > 0) {
      this.channel1envelopeSweeps = this.channel1envelopeSweeps - 1
    }else {
      if(!this.channel1envelopeType) {
        if(this.channel1envelopeVolume > 0) {
          this.channel1envelopeVolume = this.channel1envelopeVolume - 1;
          this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
          this.channel1OutputLevelCache()
        }else {
          this.channel1envelopeSweepsLast = -1
        }
      }else {
        if(this.channel1envelopeVolume < 15) {
          this.channel1envelopeVolume = this.channel1envelopeVolume + 1;
          this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
          this.channel1OutputLevelCache()
        }else {
          this.channel1envelopeSweepsLast = -1
        }
      }
    }
  }
  if(this.channel2envelopeSweepsLast > -1) {
    if(this.channel2envelopeSweeps > 0) {
      this.channel2envelopeSweeps = this.channel2envelopeSweeps - 1
    }else {
      if(!this.channel2envelopeType) {
        if(this.channel2envelopeVolume > 0) {
          this.channel2envelopeVolume = this.channel2envelopeVolume - 1;
          this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
          this.channel2OutputLevelCache()
        }else {
          this.channel2envelopeSweepsLast = -1
        }
      }else {
        if(this.channel2envelopeVolume < 15) {
          this.channel2envelopeVolume = this.channel2envelopeVolume + 1;
          this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
          this.channel2OutputLevelCache()
        }else {
          this.channel2envelopeSweepsLast = -1
        }
      }
    }
  }
  if(this.channel4envelopeSweepsLast > -1) {
    if(this.channel4envelopeSweeps > 0) {
      this.channel4envelopeSweeps = this.channel4envelopeSweeps - 1
    }else {
      if(!this.channel4envelopeType) {
        if(this.channel4envelopeVolume > 0) {
          this.channel4currentVolume = (this.channel4envelopeVolume = this.channel4envelopeVolume - 1) << this.channel4VolumeShifter;
          this.channel4envelopeSweeps = this.channel4envelopeSweepsLast;
          this.channel4UpdateCache()
        }else {
          this.channel4envelopeSweepsLast = -1
        }
      }else {
        if(this.channel4envelopeVolume < 15) {
          this.channel4currentVolume = (this.channel4envelopeVolume = this.channel4envelopeVolume + 1) << this.channel4VolumeShifter;
          this.channel4envelopeSweeps = this.channel4envelopeSweepsLast;
          this.channel4UpdateCache()
        }else {
          this.channel4envelopeSweepsLast = -1
        }
      }
    }
  }
  return
}
function v625() {
  if(this.channel1lastTimeSweep > 0) {
    if(this.channel1frequencySweepDivider > 0) {
      if(this.channel1numSweep > 0) {
        this.channel1numSweep = this.channel1numSweep - 1;
        if(this.channel1decreaseSweep) {
          this.channel1ShadowFrequency = this.channel1ShadowFrequency - (this.channel1ShadowFrequency >> this.channel1frequencySweepDivider);
          this.channel1frequency = this.channel1ShadowFrequency & 2047;
          this.channel1FrequencyTracker = 2048 - this.channel1frequency << 2
        }else {
          this.channel1ShadowFrequency = this.channel1ShadowFrequency + (this.channel1ShadowFrequency >> this.channel1frequencySweepDivider);
          this.channel1frequency = this.channel1ShadowFrequency;
          if(this.channel1ShadowFrequency <= 2047) {
            this.channel1FrequencyTracker = 2048 - this.channel1frequency << 2;
            if(this.channel1ShadowFrequency + (this.channel1ShadowFrequency >> this.channel1frequencySweepDivider) > 2047) {
              this.channel1SweepFault = true;
              this.channel1EnableCheck();
              var v2864 = this.memory;
              v2864[65318] = v2864[65318] & 254
            }
          }else {
            this.channel1frequency = this.channel1frequency & 2047;
            this.channel1SweepFault = true;
            this.channel1EnableCheck();
            var v2866 = this.memory;
            v2866[65318] = v2866[65318] & 254
          }
        }
      }
      this.channel1timeSweep = this.channel1lastTimeSweep
    }else {
      this.channel1SweepFault = true;
      this.channel1EnableCheck()
    }
  }
  return
}
function v624() {
  var v6948 = !this.channel1SweepFault;
  if(v6948) {
    v6948 = this.channel1timeSweep > 0
  }
  if(v6948) {
    if((this.channel1timeSweep = this.channel1timeSweep - 1) == 0) {
      this.runAudioSweep()
    }
  }
  return
}
function v623() {
  if(this.channel1totalLength > 1) {
    this.channel1totalLength = this.channel1totalLength - 1
  }else {
    if(this.channel1totalLength == 1) {
      this.channel1totalLength = 0;
      this.channel1EnableCheck();
      var v2874 = this.memory;
      v2874[65318] = v2874[65318] & 254
    }
  }
  if(this.channel2totalLength > 1) {
    this.channel2totalLength = this.channel2totalLength - 1
  }else {
    if(this.channel2totalLength == 1) {
      this.channel2totalLength = 0;
      this.channel2EnableCheck();
      var v2877 = this.memory;
      v2877[65318] = v2877[65318] & 253
    }
  }
  if(this.channel3totalLength > 1) {
    this.channel3totalLength = this.channel3totalLength - 1
  }else {
    if(this.channel3totalLength == 1) {
      this.channel3totalLength = 0;
      this.channel3EnableCheck();
      var v2880 = this.memory;
      v2880[65318] = v2880[65318] & 251
    }
  }
  if(this.channel4totalLength > 1) {
    this.channel4totalLength = this.channel4totalLength - 1
  }else {
    if(this.channel4totalLength == 1) {
      this.channel4totalLength = 0;
      this.channel4EnableCheck();
      var v2883 = this.memory;
      v2883[65318] = v2883[65318] & 247
    }
  }
  return
}
function v622() {
  var v2886 = this.sequencePosition;
  this.sequencePosition = this.sequencePosition + 1;
  switch(v2886) {
    case 0:
      this.clockAudioLength();
      break;
    case 2:
      this.clockAudioLength();
      this.clockAudioSweep();
      break;
    case 4:
      this.clockAudioLength();
      break;
    case 6:
      this.clockAudioLength();
      this.clockAudioSweep();
      break;
    case 7:
      this.clockAudioEnvelope();
      this.sequencePosition = 0
  }
  return
}
function v621() {
  if(settings[0]) {
    JAM.call(this.generateAudio, this, [this.audioTicks])
  }else {
    JAM.call(this.generateAudioFake, this, [this.audioTicks])
  }
  this.audioTicks = 0;
  return
}
function v620(numSamples$$1) {
  var v6962 = this.soundMasterEnabled;
  if(v6962) {
    v6962 = !this.CPUStopped
  }
  if(v6962) {
    var v2891 = (numSamples$$1 = numSamples$$1 - 1) > -1;
    for(;v2891;) {
      this.computeAudioChannels();
      if((this.sequencerClocks = this.sequencerClocks - 1) == 0) {
        this.audioComputeSequencer();
        this.sequencerClocks = 8192
      }
      v2891 = (numSamples$$1 = numSamples$$1 - 1) > -1
    }
  }
  return
}
function v619(numSamples) {
  var v6966 = this.soundMasterEnabled;
  if(v6966) {
    v6966 = !this.CPUStopped
  }
  if(v6966) {
    var samplesToGenerate = 0;
    var v2899 = numSamples > 0;
    for(;v2899;) {
      var v2893;
      if(numSamples < this.sequencerClocks) {
        v2893 = numSamples
      }else {
        v2893 = this.sequencerClocks
      }
      samplesToGenerate = v2893;
      this.sequencerClocks = this.sequencerClocks - samplesToGenerate;
      numSamples = numSamples - samplesToGenerate;
      var v2897 = (samplesToGenerate = samplesToGenerate - 1) > -1;
      for(;v2897;) {
        this.computeAudioChannels();
        var v2894 = this.currentBuffer;
        var v2895 = this.audioIndex;
        this.audioIndex = this.audioIndex + 1;
        JAM.set(v2894, v2895, this.mixerOutputCache);
        if(this.audioIndex == this.numSamplesTotal) {
          this.audioIndex = 0;
          this.outputAudio()
        }
        v2897 = (samplesToGenerate = samplesToGenerate - 1) > -1
      }
      if(this.sequencerClocks == 0) {
        this.audioComputeSequencer();
        this.sequencerClocks = 8192
      }
      v2899 = numSamples > 0
    }
  }else {
    var v2903 = (numSamples = numSamples - 1) > -1;
    for(;v2903;) {
      var v2900 = this.currentBuffer;
      var v2901 = this.audioIndex;
      this.audioIndex = this.audioIndex + 1;
      JAM.set(v2900, v2901, 61680);
      if(this.audioIndex == this.numSamplesTotal) {
        this.audioIndex = 0;
        this.outputAudio()
      }
      v2903 = (numSamples = numSamples - 1) > -1
    }
  }
  return
}
function v618() {
  var sampleFactor = 0;
  var dirtySample = 0;
  var averageL = 0;
  var averageR = 0;
  var destinationPosition = 0;
  var divisor1 = settings[13];
  var divisor2 = divisor1 * 240;
  var sourcePosition = 0;
  var v2912 = sourcePosition < this.numSamplesTotal;
  for(;v2912;) {
    sampleFactor = averageL = averageR = 0;
    var v2907 = sampleFactor < divisor1;
    for(;v2907;) {
      var v2905 = this.currentBuffer;
      var v2906 = sourcePosition;
      sourcePosition = sourcePosition + 1;
      dirtySample = v2905[v2906];
      averageL = averageL + (dirtySample >> 9);
      averageR = averageR + (dirtySample & 511);
      sampleFactor = sampleFactor + 1;
      v2907 = sampleFactor < divisor1
    }
    var v2908 = this.secondaryBuffer;
    var v2909 = destinationPosition;
    destinationPosition = destinationPosition + 1;
    v2908[v2909] = averageL / divisor2 - 1;
    var v2910 = this.secondaryBuffer;
    var v2911 = destinationPosition;
    destinationPosition = destinationPosition + 1;
    v2910[v2911] = averageR / divisor2 - 1;
    v2912 = sourcePosition < this.numSamplesTotal
  }
  var v2913 = this.audioHandle;
  JAM.call(v2913.writeAudioNoCallback, v2913, [this.secondaryBuffer]);
  return
}
function v617() {
  this.channel1FrequencyTracker = 8192;
  this.channel1DutyTracker = 0;
  this.channel1CachedDuty = this.dutyLookup[2];
  this.channel1totalLength = 0;
  this.channel1envelopeVolume = 0;
  this.channel1envelopeType = false;
  this.channel1envelopeSweeps = 0;
  this.channel1envelopeSweepsLast = 0;
  this.channel1consecutive = true;
  this.channel1frequency = 0;
  this.channel1SweepFault = false;
  this.channel1ShadowFrequency = 0;
  this.channel1timeSweep = 1;
  this.channel1lastTimeSweep = 0;
  this.channel1numSweep = 0;
  this.channel1frequencySweepDivider = 0;
  this.channel1decreaseSweep = false;
  this.channel2FrequencyTracker = 8192;
  this.channel2DutyTracker = 0;
  this.channel2CachedDuty = this.dutyLookup[2];
  this.channel2totalLength = 0;
  this.channel2envelopeVolume = 0;
  this.channel2envelopeType = false;
  this.channel2envelopeSweeps = 0;
  this.channel2envelopeSweepsLast = 0;
  this.channel2consecutive = true;
  this.channel2frequency = 0;
  this.channel3canPlay = false;
  this.channel3totalLength = 0;
  this.channel3patternType = 4;
  this.channel3frequency = 0;
  this.channel3consecutive = true;
  this.channel3Counter = 2048;
  this.channel4FrequencyPeriod = 8;
  this.channel4totalLength = 0;
  this.channel4envelopeVolume = 0;
  this.channel4currentVolume = 0;
  this.channel4envelopeType = false;
  this.channel4envelopeSweeps = 0;
  this.channel4envelopeSweepsLast = 0;
  this.channel4consecutive = true;
  this.channel4BitRange = 32767;
  this.noiseSampleTable = this.LSFR15Table;
  this.channel4VolumeShifter = 15;
  this.channel1FrequencyCounter = 8192;
  this.channel2FrequencyCounter = 8192;
  this.channel3Counter = 2048;
  this.channel3FrequencyPeriod = 2048;
  this.channel3lastSampleLookup = 0;
  this.channel4lastSampleLookup = 0;
  this.VinLeftChannelMasterVolume = 8;
  this.VinRightChannelMasterVolume = 8;
  this.mixerOutputCache = 0;
  this.sequencerClocks = 8192;
  this.sequencePosition = 0;
  this.channel4FrequencyPeriod = 8;
  this.channel4Counter = 8;
  this.cachedChannel3Sample = 0;
  this.cachedChannel4Sample = 0;
  this.channel1Enabled = false;
  this.channel2Enabled = false;
  this.channel3Enabled = false;
  this.channel4Enabled = false;
  this.channel1canPlay = false;
  this.channel2canPlay = false;
  this.channel4canPlay = false;
  this.channel1OutputLevelCache();
  this.channel2OutputLevelCache();
  this.channel3OutputLevelCache();
  this.channel4OutputLevelCache();
  return
}
function v616() {
  if(settings[0]) {
    var underrunAmount = this.bufferContainAmount - this.audioHandle.remainingBuffer();
    if(underrunAmount > 0) {
      this.CPUCyclesTotalCurrent = this.CPUCyclesTotalCurrent + (underrunAmount >> 1) * this.machineOut;
      this.recalculateIterationClockLimit()
    }
  }
  return
}
function v615() {
  var randomFactor = 1;
  var v10875 = JAM.call(this.getTypedArray, this, [524288, 0, "int8"]);
  this.LSFR15Table = v10875;
  var LSFR = 32767;
  var LSFRShifted = 16383;
  var index$$57 = 0;
  var v2953 = index$$57 < 32768;
  for(;v2953;) {
    randomFactor = 1 - (LSFR & 1);
    this.LSFR15Table[32768 | index$$57] = randomFactor;
    this.LSFR15Table[65536 | index$$57] = randomFactor * 2;
    this.LSFR15Table[98304 | index$$57] = randomFactor * 3;
    this.LSFR15Table[131072 | index$$57] = randomFactor * 4;
    this.LSFR15Table[163840 | index$$57] = randomFactor * 5;
    this.LSFR15Table[196608 | index$$57] = randomFactor * 6;
    this.LSFR15Table[229376 | index$$57] = randomFactor * 7;
    this.LSFR15Table[262144 | index$$57] = randomFactor * 8;
    this.LSFR15Table[294912 | index$$57] = randomFactor * 9;
    this.LSFR15Table[327680 | index$$57] = randomFactor * 10;
    this.LSFR15Table[360448 | index$$57] = randomFactor * 11;
    this.LSFR15Table[393216 | index$$57] = randomFactor * 12;
    this.LSFR15Table[425984 | index$$57] = randomFactor * 13;
    this.LSFR15Table[458752 | index$$57] = randomFactor * 14;
    this.LSFR15Table[491520 | index$$57] = randomFactor * 15;
    LSFRShifted = LSFR >> 1;
    LSFR = LSFRShifted | ((LSFRShifted ^ LSFR) & 1) << 14;
    index$$57 = index$$57 + 1;
    v2953 = index$$57 < 32768
  }
  var v10876 = JAM.call(this.getTypedArray, this, [2048, 0, "int8"]);
  this.LSFR7Table = v10876;
  LSFR = 127;
  index$$57 = 0;
  var v2986 = index$$57 < 128;
  for(;v2986;) {
    randomFactor = 1 - (LSFR & 1);
    this.LSFR7Table[128 | index$$57] = randomFactor;
    this.LSFR7Table[256 | index$$57] = randomFactor * 2;
    this.LSFR7Table[384 | index$$57] = randomFactor * 3;
    this.LSFR7Table[512 | index$$57] = randomFactor * 4;
    this.LSFR7Table[640 | index$$57] = randomFactor * 5;
    this.LSFR7Table[768 | index$$57] = randomFactor * 6;
    this.LSFR7Table[896 | index$$57] = randomFactor * 7;
    this.LSFR7Table[1024 | index$$57] = randomFactor * 8;
    this.LSFR7Table[1152 | index$$57] = randomFactor * 9;
    this.LSFR7Table[1280 | index$$57] = randomFactor * 10;
    this.LSFR7Table[1408 | index$$57] = randomFactor * 11;
    this.LSFR7Table[1536 | index$$57] = randomFactor * 12;
    this.LSFR7Table[1664 | index$$57] = randomFactor * 13;
    this.LSFR7Table[1792 | index$$57] = randomFactor * 14;
    this.LSFR7Table[1920 | index$$57] = randomFactor * 15;
    LSFRShifted = LSFR >> 1;
    LSFR = LSFRShifted | ((LSFRShifted ^ LSFR) & 1) << 6;
    index$$57 = index$$57 + 1;
    v2986 = index$$57 < 128
  }
  var v6989 = !this.noiseSampleTable;
  if(v6989) {
    v6989 = this.memory.length == 65536
  }
  if(v6989) {
    var v2987;
    if((this.memory[65314] & 8) == 8) {
      v2987 = this.LSFR7Table
    }else {
      v2987 = this.LSFR15Table
    }
    this.noiseSampleTable = v2987
  }
  return
}
function v614() {
  this.audioIndex = 0;
  this.bufferContainAmount = Math.max(this.sampleSize * settings[7] / settings[13], 4096) << 1;
  this.numSamplesTotal = this.sampleSize - this.sampleSize % settings[13] | 0;
  var v10877 = JAM.call(this.getTypedArray, this, [this.numSamplesTotal, 61680, "int32"]);
  this.currentBuffer = v10877;
  var v10878 = JAM.call(this.getTypedArray, this, [(this.numSamplesTotal << 1) / settings[13], 0, "float32"]);
  this.secondaryBuffer = v10878;
  return
}
function v613() {
  var v6996 = settings[0];
  if(v6996) {
    v6996 = this.audioHandle
  }
  if(v6996) {
    try {
      var v2993 = this.audioHandle;
      JAM.call(v2993.changeVolume, v2993, [settings[14]])
    }catch(error$$24) {
    }
  }
  return
}
function v612() {
  this.sampleSize = 4194304 / 1E3 * settings[6];
  this.machineOut = settings[13];
  if(settings[0]) {
    try {
      var parentObj$$513 = this;
      var v10879 = new XAudioServer(2, 4194304 / settings[13], 0, Math.max(this.sampleSize * settings[8] / settings[13], 8192) << 1, null, settings[14]);
      this.audioHandle = v10879;
      this.initAudioBuffer()
    }catch(error$$22) {
      cout("Audio system cannot run: " + error$$22.message, 2);
      settings[0] = false
    }
  }else {
    if(this.audioHandle) {
      try {
        var v3002 = this.audioHandle;
        JAM.call(v3002.changeVolume, v3002, [0])
      }catch(error$$23) {
      }
    }
  }
  return
}
function v611(x$$49, y$$32) {
  x$$49 = x$$49 * -100;
  x$$49 = x$$49 + 2047;
  this.highX = x$$49 >> 8;
  this.lowX = x$$49 & 255;
  y$$32 = y$$32 * -100;
  y$$32 = y$$32 + 2047;
  this.highY = y$$32 >> 8;
  this.lowY = y$$32 & 255;
  return
}
function v610(key$$14, down) {
  if(down) {
    this.JoyPad = this.JoyPad & (255 ^ 1 << key$$14);
    var v7002 = !this.cGBC;
    if(v7002) {
      var v9084 = !this.usedBootROM;
      if(!v9084) {
        v9084 = !this.usedGBCBootROM
      }
      v7002 = v9084
    }
    if(v7002) {
      this.interruptsRequested = this.interruptsRequested | 16;
      this.remainingClocks = 0;
      this.checkIRQMatching()
    }
  }else {
    this.JoyPad = this.JoyPad | 1 << key$$14
  }
  var v3006 = this.memory;
  var v7006 = this.memory[65280] & 48;
  var v10060;
  if((this.memory[65280] & 32) == 0) {
    v10060 = this.JoyPad >> 4
  }else {
    v10060 = 15
  }
  var v9086 = v10060;
  var v10061;
  if((this.memory[65280] & 16) == 0) {
    v10061 = this.JoyPad & 15
  }else {
    v10061 = 15
  }
  v3006[65280] = v7006 + (v9086 & v10061);
  this.CPUStopped = false;
  return
}
function v609() {
  var v7008 = this.offscreenWidth == this.onscreenWidth;
  if(v7008) {
    v7008 = this.offscreenHeight == this.onscreenHeight
  }
  if(v7008) {
    var v3007 = this.drawContextOnscreen;
    JAM.call(v3007.putImageData, v3007, [this.canvasBuffer, 0, 0])
  }else {
    var v3009 = this.drawContextOffscreen;
    JAM.call(v3009.putImageData, v3009, [this.canvasBuffer, 0, 0]);
    var v3011 = this.drawContextOnscreen;
    JAM.call(v3011.drawImage, v3011, [this.canvasOffscreen, 0, 0, this.onscreenWidth, this.onscreenHeight])
  }
  return
}
function v608() {
  this.recomputeDimension();
  if(this.offscreenRGBCount != 92160) {
    this.compileResizeFrameBufferFunction()
  }else {
    this.resizer = null
  }
  try {
    var v10880 = new GameBoyCanvas;
    this.canvasOffscreen = v10880;
    this.canvasOffscreen.width = this.offscreenWidth;
    this.canvasOffscreen.height = this.offscreenHeight;
    var v3019 = this.canvasOffscreen;
    var v10881 = JAM.call(v3019.getContext, v3019, ["2d"]);
    this.drawContextOffscreen = v10881;
    var v3020 = this.canvas;
    var v10882 = JAM.call(v3020.getContext, v3020, ["2d"]);
    this.drawContextOnscreen = v10882;
    try {
      var v3021 = this.drawContextOffscreen;
      var v10883 = JAM.call(v3021.createImageData, v3021, [this.offscreenWidth, this.offscreenHeight]);
      this.canvasBuffer = v10883
    }catch(error$$20) {
      cout('Falling back to the getImageData initialization (Error "' + error$$20.message + '").', 1);
      var v10884 = this.drawContextOffscreen.getImageData(0, 0, this.offscreenWidth, this.offscreenHeight);
      this.canvasBuffer = v10884
    }
    var index$$56 = this.offscreenRGBCount;
    var v3036 = index$$56 > 0;
    for(;v3036;) {
      this.canvasBuffer.data[index$$56 = index$$56 - 4] = 248;
      this.canvasBuffer.data[index$$56 + 1] = 248;
      this.canvasBuffer.data[index$$56 + 2] = 248;
      this.canvasBuffer.data[index$$56 + 3] = 255;
      v3036 = index$$56 > 0
    }
    this.graphicsBlit();
    this.canvas.style.visibility = "visible";
    if(this.swizzledFrame == null) {
      var v10885 = JAM.call(this.getTypedArray, this, [69120, 255, "uint8"]);
      this.swizzledFrame = v10885
    }
    this.drewFrame = true;
    this.requestDraw()
  }catch(error$$21) {
    throw new Error("HTML5 Canvas support required: " + error$$21.message + "file: " + error$$21.fileName + ", line: " + error$$21.lineNumber);
  }
  return
}
function v607() {
  initNewCanvas();
  this.onscreenWidth = this.canvas.width;
  this.onscreenHeight = this.canvas.height;
  var v7019 = GameBoyWindow;
  if(v7019) {
    v7019 = GameBoyWindow.mozRequestAnimationFrame
  }
  if(v7019) {
    var v3042 = this.canvas;
    var v7020;
    if(!settings[12]) {
      v7020 = 160
    }else {
      v7020 = this.canvas.width
    }
    v3042.width = this.onscreenWidth = v7020;
    var v3043 = this.canvas;
    var v7021;
    if(!settings[12]) {
      v7021 = 144
    }else {
      v7021 = this.canvas.height
    }
    v3043.height = this.onscreenHeight = v7021
  }else {
    this.onscreenWidth = this.canvas.width;
    this.onscreenHeight = this.canvas.height
  }
  var v3047;
  if(!settings[12]) {
    v3047 = 160
  }else {
    v3047 = this.canvas.width
  }
  this.offscreenWidth = v3047;
  var v3048;
  if(!settings[12]) {
    v3048 = 144
  }else {
    v3048 = this.canvas.height
  }
  this.offscreenHeight = v3048;
  this.offscreenRGBCount = this.offscreenWidth * this.offscreenHeight * 4;
  return
}
function v606() {
  var v3050 = this.cMBC1;
  if(!v3050) {
    var v7028 = this.cMBC2;
    if(!v7028) {
      var v9100 = this.cMBC3;
      if(!v9100) {
        var v10066 = this.cMBC5;
        if(!v10066) {
          var v10482 = this.cMBC7;
          if(!v10482) {
            v10482 = this.cRUMBLE
          }
          v10066 = v10482
        }
        v9100 = v10066
      }
      v7028 = v9100
    }
    v3050 = v7028
  }
  return v3050
}
function v605() {
  if(this.cMBC2) {
    this.numRAMBanks = 1 / 16
  }else {
    var v7030 = this.cMBC1;
    if(!v7030) {
      var v9102 = this.cRUMBLE;
      if(!v9102) {
        var v10068 = this.cMBC3;
        if(!v10068) {
          v10068 = this.cHuC3
        }
        v9102 = v10068
      }
      v7030 = v9102
    }
    if(v7030) {
      this.numRAMBanks = 4
    }else {
      if(this.cMBC5) {
        this.numRAMBanks = 16
      }else {
        if(this.cSRAM) {
          this.numRAMBanks = 1
        }
      }
    }
  }
  if(this.numRAMBanks > 0) {
    if(!this.MBCRAMUtilized()) {
      this.MBCRAMBanksEnabled = true
    }
    var v3056;
    if(typeof this.openMBC == "function") {
      v3056 = JAM.call(this.openMBC, this, [this.name])
    }else {
      v3056 = []
    }
    var MBCRam = v3056;
    if(MBCRam.length > 0) {
      var v10886 = JAM.call(this.toTypedArray, this, [MBCRam, "uint8"]);
      this.MBCRam = v10886
    }else {
      var v10887 = JAM.call(this.getTypedArray, this, [this.numRAMBanks * 8192, 0, "uint8"]);
      this.MBCRam = v10887
    }
  }
  cout("Actual bytes of MBC RAM allocated: " + this.numRAMBanks * 8192, 0);
  this.returnFromRTCState();
  if(this.cGBC) {
    var v10888 = JAM.call(this.getTypedArray, this, [8192, 0, "uint8"]);
    this.VRAM = v10888;
    var v10889 = JAM.call(this.getTypedArray, this, [28672, 0, "uint8"]);
    this.GBCMemory = v10889
  }
  this.memoryReadJumpCompile();
  this.memoryWriteJumpCompile();
  return
}
function v604() {
  this.baseCPUCyclesPerIteration = 524288 / 125 * settings[6];
  this.CPUCyclesTotalRoundoff = this.baseCPUCyclesPerIteration % 4;
  this.CPUCyclesTotalBase = this.CPUCyclesTotal = this.baseCPUCyclesPerIteration - this.CPUCyclesTotalRoundoff | 0;
  this.CPUCyclesTotalCurrent = 0;
  return
}
function v603() {
  var index$$55 = 0;
  var v3067 = index$$55 < 256;
  for(;v3067;) {
    this.memory[index$$55] = this.ROM[index$$55];
    index$$55 = index$$55 + 1;
    v3067 = index$$55 < 256
  }
  if(this.usedGBCBootROM) {
    index$$55 = 512;
    var v3069 = index$$55 < 2304;
    for(;v3069;) {
      this.memory[index$$55] = this.ROM[index$$55];
      index$$55 = index$$55 + 1;
      v3069 = index$$55 < 2304
    }
    if(!this.cGBC) {
      this.GBCtoGBModeAdjust()
    }else {
      this.recompileBootIOWriteHandling()
    }
  }else {
    this.recompileBootIOWriteHandling()
  }
  return
}
function v602() {
  var index$$54 = 308;
  var v3073 = index$$54 < 319;
  for(;v3073;) {
    if(this.ROMImage.charCodeAt(index$$54) > 0) {
      var v7044 = this.name;
      var v9107 = this.ROMImage;
      introspect(JAM.policy.p1) {
        var v7045 = v9107[index$$54]
      }
      this.name = v7044 + v7045
    }
    index$$54 = index$$54 + 1;
    v3073 = index$$54 < 319
  }
  index$$54 = 319;
  var v3075 = index$$54 < 323;
  for(;v3075;) {
    if(this.ROMImage.charCodeAt(index$$54) > 0) {
      var v7047 = this.gameCode;
      var v9109 = this.ROMImage;
      introspect(JAM.policy.p1) {
        var v7048 = v9109[index$$54]
      }
      this.gameCode = v7047 + v7048
    }
    index$$54 = index$$54 + 1;
    v3075 = index$$54 < 323
  }
  cout("Game Title: " + this.name + "[" + this.gameCode + "][" + this.ROMImage[323] + "]", 0);
  cout("Game Code: " + this.gameCode, 0);
  this.cartridgeType = this.ROM[327];
  cout("Cartridge type #" + this.cartridgeType, 0);
  var MBCType = "";
  switch(this.cartridgeType) {
    case 0:
      if(!settings[9]) {
        MBCType = "ROM";
        break
      }
    ;
    case 1:
      this.cMBC1 = true;
      MBCType = "MBC1";
      break;
    case 2:
      this.cMBC1 = true;
      this.cSRAM = true;
      MBCType = "MBC1 + SRAM";
      break;
    case 3:
      this.cMBC1 = true;
      this.cSRAM = true;
      this.cBATT = true;
      MBCType = "MBC1 + SRAM + BATT";
      break;
    case 5:
      this.cMBC2 = true;
      MBCType = "MBC2";
      break;
    case 6:
      this.cMBC2 = true;
      this.cBATT = true;
      MBCType = "MBC2 + BATT";
      break;
    case 8:
      this.cSRAM = true;
      MBCType = "ROM + SRAM";
      break;
    case 9:
      this.cSRAM = true;
      this.cBATT = true;
      MBCType = "ROM + SRAM + BATT";
      break;
    case 11:
      this.cMMMO1 = true;
      MBCType = "MMMO1";
      break;
    case 12:
      this.cMMMO1 = true;
      this.cSRAM = true;
      MBCType = "MMMO1 + SRAM";
      break;
    case 13:
      this.cMMMO1 = true;
      this.cSRAM = true;
      this.cBATT = true;
      MBCType = "MMMO1 + SRAM + BATT";
      break;
    case 15:
      this.cMBC3 = true;
      this.cTIMER = true;
      this.cBATT = true;
      MBCType = "MBC3 + TIMER + BATT";
      break;
    case 16:
      this.cMBC3 = true;
      this.cTIMER = true;
      this.cBATT = true;
      this.cSRAM = true;
      MBCType = "MBC3 + TIMER + BATT + SRAM";
      break;
    case 17:
      this.cMBC3 = true;
      MBCType = "MBC3";
      break;
    case 18:
      this.cMBC3 = true;
      this.cSRAM = true;
      MBCType = "MBC3 + SRAM";
      break;
    case 19:
      this.cMBC3 = true;
      this.cSRAM = true;
      this.cBATT = true;
      MBCType = "MBC3 + SRAM + BATT";
      break;
    case 25:
      this.cMBC5 = true;
      MBCType = "MBC5";
      break;
    case 26:
      this.cMBC5 = true;
      this.cSRAM = true;
      MBCType = "MBC5 + SRAM";
      break;
    case 27:
      this.cMBC5 = true;
      this.cSRAM = true;
      this.cBATT = true;
      MBCType = "MBC5 + SRAM + BATT";
      break;
    case 28:
      this.cRUMBLE = true;
      MBCType = "RUMBLE";
      break;
    case 29:
      this.cRUMBLE = true;
      this.cSRAM = true;
      MBCType = "RUMBLE + SRAM";
      break;
    case 30:
      this.cRUMBLE = true;
      this.cSRAM = true;
      this.cBATT = true;
      MBCType = "RUMBLE + SRAM + BATT";
      break;
    case 31:
      this.cCamera = true;
      MBCType = "GameBoy Camera";
      break;
    case 34:
      this.cMBC7 = true;
      this.cSRAM = true;
      this.cBATT = true;
      MBCType = "MBC7 + SRAM + BATT";
      break;
    case 253:
      this.cTAMA5 = true;
      MBCType = "TAMA5";
      break;
    case 254:
      this.cHuC3 = true;
      MBCType = "HuC3";
      break;
    case 255:
      this.cHuC1 = true;
      MBCType = "HuC1";
      break;
    default:
      MBCType = "Unknown";
      cout("Cartridge type is unknown.", 2);
      pause()
  }
  cout("Cartridge Type: " + MBCType + ".", 0);
  var v3083 = this.ROMBanks;
  var v3084 = this.ROM[328];
  introspect(JAM.policy.p1) {
    this.numROMBanks = v3083[v3084]
  }
  cout(this.numROMBanks + " ROM banks.", 0);
  var v7056 = this.RAMBanks;
  var v7057 = this.ROM[329];
  introspect(JAM.policy.p1) {
    var v3086 = v7056[v7057]
  }
  switch(v3086) {
    case 0:
      cout("No RAM banking requested for allocation or MBC is of type 2.", 0);
      break;
    case 2:
      cout("1 RAM bank requested for allocation.", 0);
      break;
    case 3:
      cout("4 RAM banks requested for allocation.", 0);
      break;
    case 4:
      cout("16 RAM banks requested for allocation.", 0);
      break;
    default:
      cout("RAM bank amount requested is unknown, will use maximum allowed by specified MBC type.", 0)
  }
  if(!this.usedBootROM) {
    switch(this.ROM[323]) {
      case 0:
        this.cGBC = false;
        cout("Only GB mode detected.", 0);
        break;
      case 50:
        var v7060 = !settings[2];
        if(v7060) {
          v7060 = this.name + this.gameCode + this.ROM[323] == "Game and Watch 50"
        }
        if(v7060) {
          this.cGBC = true;
          cout("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1)
        }else {
          this.cGBC = false
        }
        break;
      case 128:
        this.cGBC = !settings[2];
        cout("GB and GBC mode detected.", 0);
        break;
      case 192:
        this.cGBC = true;
        cout("Only GBC mode detected.", 0);
        break;
      default:
        this.cGBC = false;
        cout("Unknown GameBoy game type code #" + this.ROM[323] + ", defaulting to GB mode (Old games don't have a type code).", 1)
    }
    this.inBootstrap = false;
    this.setupRAM();
    this.initSkipBootstrap();
    this.initializeAudioStartState()
  }else {
    this.cGBC = this.usedGBCBootROM;
    this.setupRAM();
    this.initBootstrap()
  }
  this.initializeModeSpecificArrays();
  var cOldLicense = this.ROM[331];
  var cNewLicense = this.ROM[324] & 65280 | this.ROM[325] & 255;
  if(cOldLicense != 51) {
    cout("Old style license code: " + cOldLicense, 0)
  }else {
    cout("New style license code: " + cNewLicense, 0)
  }
  this.ROMImage = "";
  return
}
function v601() {
  if(this.ROMImage.length > 0) {
    return this.ROMImage.length
  }
  var length$$17 = this.ROM.length;
  var index$$53 = 0;
  var v3101 = index$$53 < length$$17;
  for(;v3101;) {
    var v7065 = this.ROMImage;
    var v10076 = this.ROM;
    introspect(JAM.policy.p1) {
      var v9119 = v10076[index$$53]
    }
    this.ROMImage = v7065 + String.fromCharCode(v9119);
    index$$53 = index$$53 + 1;
    v3101 = index$$53 < length$$17
  }
  return this.ROMImage
}
function v600() {
  this.ROM = [];
  this.usedBootROM = settings[1];
  var maxLength = this.ROMImage.length;
  if(maxLength < 16384) {
    throw new Error("ROM image size too small.");
  }
  var v10890 = JAM.call(this.getTypedArray, this, [maxLength, 0, "uint8"]);
  this.ROM = v10890;
  var romIndex = 0;
  if(this.usedBootROM) {
    if(!settings[11]) {
      var v3107 = romIndex < 256;
      for(;v3107;) {
        this.memory[romIndex] = this.GBCBOOTROM[romIndex];
        this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255;
        romIndex = romIndex + 1;
        v3107 = romIndex < 256
      }
      var v3110 = romIndex < 512;
      for(;v3110;) {
        this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255;
        romIndex = romIndex + 1;
        v3110 = romIndex < 512
      }
      var v3114 = romIndex < 2304;
      for(;v3114;) {
        this.memory[romIndex] = this.GBCBOOTROM[romIndex - 256];
        this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255;
        romIndex = romIndex + 1;
        v3114 = romIndex < 2304
      }
      this.usedGBCBootROM = true
    }else {
      var v3118 = romIndex < 256;
      for(;v3118;) {
        this.memory[romIndex] = this.GBBOOTROM[romIndex];
        this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255;
        romIndex = romIndex + 1;
        v3118 = romIndex < 256
      }
    }
    var v3122 = romIndex < 16384;
    for(;v3122;) {
      this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255;
      romIndex = romIndex + 1;
      v3122 = romIndex < 16384
    }
  }else {
    var v3125 = romIndex < 16384;
    for(;v3125;) {
      this.memory[romIndex] = this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255;
      romIndex = romIndex + 1;
      v3125 = romIndex < 16384
    }
  }
  var v3129 = romIndex < maxLength;
  for(;v3129;) {
    this.ROM[romIndex] = this.ROMImage.charCodeAt(romIndex) & 255;
    romIndex = romIndex + 1;
    v3129 = romIndex < maxLength
  }
  var v10891 = Math.floor(this.ROM.length / 16384);
  this.ROMBankEdge = v10891;
  this.interpretCartridge();
  this.checkIRQMatching();
  return
}
function v599() {
  cout("Starting the selected boot ROM.", 0);
  this.programCounter = 0;
  this.stackPointer = 0;
  this.IME = false;
  this.LCDTicks = 0;
  this.DIVTicks = 0;
  this.registerA = 0;
  this.registerB = 0;
  this.registerC = 0;
  this.registerD = 0;
  this.registerE = 0;
  this.FZero = this.FSubtract = this.FHalfCarry = this.FCarry = false;
  this.registersHL = 0;
  this.leftChannel1 = false;
  this.leftChannel2 = false;
  this.leftChannel3 = false;
  this.leftChannel4 = false;
  this.rightChannel1 = false;
  this.rightChannel2 = false;
  this.rightChannel3 = false;
  this.rightChannel4 = false;
  this.channel2frequency = this.channel1frequency = 0;
  this.channel4consecutive = this.channel2consecutive = this.channel1consecutive = false;
  this.VinLeftChannelMasterVolume = 8;
  this.VinRightChannelMasterVolume = 8;
  this.memory[65280] = 15;
  return
}
function v598() {
  var index$$52 = 255;
  var v3139 = index$$52 >= 0;
  for(;v3139;) {
    var v7083 = index$$52 >= 48;
    if(v7083) {
      v7083 = index$$52 < 64
    }
    if(v7083) {
      var v3132 = 65280 | index$$52;
      var v7084 = this.ffxxDump;
      introspect(JAM.policy.p1) {
        var v3133 = v7084[index$$52]
      }
      JAM.call(this.memoryWrite, this, [v3132, v3133])
    }else {
      switch(index$$52) {
        case 0:
        ;
        case 1:
        ;
        case 2:
        ;
        case 5:
        ;
        case 7:
        ;
        case 15:
        ;
        case 255:
          var v3134 = 65280 | index$$52;
          var v7085 = this.ffxxDump;
          introspect(JAM.policy.p1) {
            var v3135 = v7085[index$$52]
          }
          JAM.call(this.memoryWrite, this, [v3134, v3135]);
          break;
        default:
          this.memory[65280 | index$$52] = this.ffxxDump[index$$52]
      }
    }
    index$$52 = index$$52 - 1;
    v3139 = index$$52 >= 0
  }
  if(this.cGBC) {
    this.memory[65388] = 254;
    this.memory[65396] = 254
  }else {
    this.memory[65352] = 255;
    this.memory[65353] = 255;
    this.memory[65388] = 255;
    this.memory[65396] = 255
  }
  cout("Starting without the GBC boot ROM.", 0);
  var v3147;
  if(this.cGBC) {
    v3147 = 17
  }else {
    v3147 = 1
  }
  this.registerA = v3147;
  this.registerB = 0;
  this.registerC = 19;
  this.registerD = 0;
  this.registerE = 216;
  this.FZero = true;
  this.FSubtract = false;
  this.FHalfCarry = true;
  this.FCarry = true;
  this.registersHL = 333;
  this.LCDCONTROL = this.LINECONTROL;
  this.IME = false;
  this.IRQLineMatched = 0;
  this.interruptsRequested = 225;
  this.interruptsEnabled = 0;
  this.hdmaRunning = false;
  this.CPUTicks = 12;
  this.STATTracker = 0;
  this.modeSTAT = 1;
  this.spriteCount = 252;
  this.LYCMatchTriggerSTAT = false;
  this.mode2TriggerSTAT = false;
  this.mode1TriggerSTAT = false;
  this.mode0TriggerSTAT = false;
  this.LCDisOn = true;
  this.channel1FrequencyTracker = 8192;
  this.channel1DutyTracker = 0;
  this.channel1CachedDuty = this.dutyLookup[2];
  this.channel1totalLength = 0;
  this.channel1envelopeVolume = 0;
  this.channel1envelopeType = false;
  this.channel1envelopeSweeps = 0;
  this.channel1envelopeSweepsLast = 0;
  this.channel1consecutive = true;
  this.channel1frequency = 1985;
  this.channel1SweepFault = true;
  this.channel1ShadowFrequency = 1985;
  this.channel1timeSweep = 1;
  this.channel1lastTimeSweep = 0;
  this.channel1numSweep = 0;
  this.channel1frequencySweepDivider = 0;
  this.channel1decreaseSweep = false;
  this.channel2FrequencyTracker = 8192;
  this.channel2DutyTracker = 0;
  this.channel2CachedDuty = this.dutyLookup[2];
  this.channel2totalLength = 0;
  this.channel2envelopeVolume = 0;
  this.channel2envelopeType = false;
  this.channel2envelopeSweeps = 0;
  this.channel2envelopeSweepsLast = 0;
  this.channel2consecutive = true;
  this.channel2frequency = 0;
  this.channel3canPlay = false;
  this.channel3totalLength = 0;
  this.channel3patternType = 4;
  this.channel3frequency = 0;
  this.channel3consecutive = true;
  this.channel3Counter = 1048;
  this.channel4FrequencyPeriod = 8;
  this.channel4totalLength = 0;
  this.channel4envelopeVolume = 0;
  this.channel4currentVolume = 0;
  this.channel4envelopeType = false;
  this.channel4envelopeSweeps = 0;
  this.channel4envelopeSweepsLast = 0;
  this.channel4consecutive = true;
  this.channel4BitRange = 32767;
  this.channel4VolumeShifter = 15;
  this.channel1FrequencyCounter = 512;
  this.channel2FrequencyCounter = 512;
  this.channel3Counter = 2048;
  this.channel3FrequencyPeriod = 2048;
  this.channel3lastSampleLookup = 0;
  this.channel4lastSampleLookup = 0;
  this.VinLeftChannelMasterVolume = 1;
  this.VinRightChannelMasterVolume = 1;
  this.soundMasterEnabled = true;
  this.leftChannel1 = true;
  this.leftChannel2 = true;
  this.leftChannel3 = true;
  this.leftChannel4 = true;
  this.rightChannel1 = true;
  this.rightChannel2 = true;
  this.rightChannel3 = false;
  this.rightChannel4 = false;
  this.DIVTicks = 27044;
  this.LCDTicks = 160;
  this.timerTicks = 0;
  this.TIMAEnabled = false;
  this.TACClocker = 1024;
  this.serialTimer = 0;
  this.serialShiftTimer = 0;
  this.serialShiftTimerAllocated = 0;
  this.IRQEnableDelay = 0;
  this.actualScanLine = 144;
  this.lastUnrenderedLine = 0;
  this.gfxWindowDisplay = false;
  this.gfxSpriteShow = false;
  this.gfxSpriteNormalHeight = true;
  this.bgEnabled = true;
  this.BGPriorityEnabled = true;
  this.gfxWindowCHRBankPosition = 0;
  this.gfxBackgroundCHRBankPosition = 0;
  this.gfxBackgroundBankOffset = 0;
  this.windowY = 0;
  this.windowX = 0;
  this.drewBlank = 0;
  this.midScanlineOffset = -1;
  this.currentX = 0;
  return
}
function v597(tileAmount) {
  var tileArray = [];
  var tileNumber = 0;
  var v3152 = tileNumber < tileAmount;
  for(;v3152;) {
    var v3150 = tileArray;
    var v3151 = tileNumber;
    tileNumber = tileNumber + 1;
    var v10892 = JAM.call(this.getTypedArray, this, [64, 0, "uint8"]);
    v3150[v3151] = v10892;
    v3152 = tileNumber < tileAmount
  }
  return tileArray
}
function v596() {
  var v10893 = JAM.call(this.getTypedArray, this, [65536, 0, "uint8"]);
  this.memory = v10893;
  var v10894 = JAM.call(this.getTypedArray, this, [23040, 16316664, "int32"]);
  this.frameBuffer = v10894;
  var v10895 = JAM.call(this.getTypedArray, this, [2048, 0, "uint8"]);
  this.BGCHRBank1 = v10895;
  var v10896 = JAM.call(this.toTypedArray, this, [this.TICKTable, "uint8"]);
  this.TICKTable = v10896;
  var v10897 = JAM.call(this.toTypedArray, this, [this.SecondaryTICKTable, "uint8"]);
  this.SecondaryTICKTable = v10897;
  var v10898 = JAM.call(this.getTypedArray, this, [32, 0, "int8"]);
  this.channel3PCM = v10898;
  return
}
function v595() {
  this.initMemory();
  this.ROMLoad();
  this.initLCD();
  this.initSound();
  this.run();
  return
}
function v594() {
  var v7088 = typeof this.openRTC == "function";
  if(v7088) {
    v7088 = this.cTIMER
  }
  if(v7088) {
    var rtcData = JAM.call(this.openRTC, this, [this.name]);
    var index$$51 = 0;
    var v3156 = index$$51;
    index$$51 = index$$51 + 1;
    this.lastIteration = rtcData[v3156];
    var v3157 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCisLatched = rtcData[v3157];
    var v3158 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedSeconds = rtcData[v3158];
    var v3159 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedMinutes = rtcData[v3159];
    var v3160 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedHours = rtcData[v3160];
    var v3161 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedLDays = rtcData[v3161];
    var v3162 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedHDays = rtcData[v3162];
    var v3163 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCSeconds = rtcData[v3163];
    var v3164 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCMinutes = rtcData[v3164];
    var v3165 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCHours = rtcData[v3165];
    var v3166 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCDays = rtcData[v3166];
    var v3167 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCDayOverFlow = rtcData[v3167];
    this.RTCHALT = rtcData[index$$51]
  }
  return
}
function v593(returnedFrom) {
  var index$$50 = 0;
  var state$$1 = returnedFrom.slice(0);
  var v7089 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3169 = state$$1[v7089]
  }
  var v10899 = JAM.call(this.toTypedArray, this, [v3169, "uint8"]);
  this.ROM = v10899;
  var v10900 = Math.floor(this.ROM.length / 16384);
  this.ROMBankEdge = v10900;
  var v3171 = index$$50;
  index$$50 = index$$50 + 1;
  this.inBootstrap = state$$1[v3171];
  var v3172 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerA = state$$1[v3172];
  var v3173 = index$$50;
  index$$50 = index$$50 + 1;
  this.FZero = state$$1[v3173];
  var v3174 = index$$50;
  index$$50 = index$$50 + 1;
  this.FSubtract = state$$1[v3174];
  var v3175 = index$$50;
  index$$50 = index$$50 + 1;
  this.FHalfCarry = state$$1[v3175];
  var v3176 = index$$50;
  index$$50 = index$$50 + 1;
  this.FCarry = state$$1[v3176];
  var v3177 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerB = state$$1[v3177];
  var v3178 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerC = state$$1[v3178];
  var v3179 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerD = state$$1[v3179];
  var v3180 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerE = state$$1[v3180];
  var v3181 = index$$50;
  index$$50 = index$$50 + 1;
  this.registersHL = state$$1[v3181];
  var v3182 = index$$50;
  index$$50 = index$$50 + 1;
  this.stackPointer = state$$1[v3182];
  var v3183 = index$$50;
  index$$50 = index$$50 + 1;
  this.programCounter = state$$1[v3183];
  var v3184 = index$$50;
  index$$50 = index$$50 + 1;
  this.halt = state$$1[v3184];
  var v3185 = index$$50;
  index$$50 = index$$50 + 1;
  this.IME = state$$1[v3185];
  var v3186 = index$$50;
  index$$50 = index$$50 + 1;
  this.hdmaRunning = state$$1[v3186];
  var v3187 = index$$50;
  index$$50 = index$$50 + 1;
  this.CPUTicks = state$$1[v3187];
  var v3188 = index$$50;
  index$$50 = index$$50 + 1;
  this.doubleSpeedShifter = state$$1[v3188];
  var v7091 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3189 = state$$1[v7091]
  }
  var v10901 = JAM.call(this.toTypedArray, this, [v3189, "uint8"]);
  this.memory = v10901;
  var v7092 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3190 = state$$1[v7092]
  }
  var v10902 = JAM.call(this.toTypedArray, this, [v3190, "uint8"]);
  this.MBCRam = v10902;
  var v7093 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3191 = state$$1[v7093]
  }
  var v10903 = JAM.call(this.toTypedArray, this, [v3191, "uint8"]);
  this.VRAM = v10903;
  var v3192 = index$$50;
  index$$50 = index$$50 + 1;
  this.currVRAMBank = state$$1[v3192];
  var v7094 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3193 = state$$1[v7094]
  }
  var v10904 = JAM.call(this.toTypedArray, this, [v3193, "uint8"]);
  this.GBCMemory = v10904;
  var v3194 = index$$50;
  index$$50 = index$$50 + 1;
  this.MBC1Mode = state$$1[v3194];
  var v3195 = index$$50;
  index$$50 = index$$50 + 1;
  this.MBCRAMBanksEnabled = state$$1[v3195];
  var v3196 = index$$50;
  index$$50 = index$$50 + 1;
  this.currMBCRAMBank = state$$1[v3196];
  var v3197 = index$$50;
  index$$50 = index$$50 + 1;
  this.currMBCRAMBankPosition = state$$1[v3197];
  var v3198 = index$$50;
  index$$50 = index$$50 + 1;
  this.cGBC = state$$1[v3198];
  var v3199 = index$$50;
  index$$50 = index$$50 + 1;
  this.gbcRamBank = state$$1[v3199];
  var v3200 = index$$50;
  index$$50 = index$$50 + 1;
  this.gbcRamBankPosition = state$$1[v3200];
  var v3201 = index$$50;
  index$$50 = index$$50 + 1;
  this.ROMBank1offs = state$$1[v3201];
  var v3202 = index$$50;
  index$$50 = index$$50 + 1;
  this.currentROMBank = state$$1[v3202];
  var v3203 = index$$50;
  index$$50 = index$$50 + 1;
  this.cartridgeType = state$$1[v3203];
  var v3204 = index$$50;
  index$$50 = index$$50 + 1;
  this.name = state$$1[v3204];
  var v3205 = index$$50;
  index$$50 = index$$50 + 1;
  this.gameCode = state$$1[v3205];
  var v3206 = index$$50;
  index$$50 = index$$50 + 1;
  this.modeSTAT = state$$1[v3206];
  var v3207 = index$$50;
  index$$50 = index$$50 + 1;
  this.LYCMatchTriggerSTAT = state$$1[v3207];
  var v3208 = index$$50;
  index$$50 = index$$50 + 1;
  this.mode2TriggerSTAT = state$$1[v3208];
  var v3209 = index$$50;
  index$$50 = index$$50 + 1;
  this.mode1TriggerSTAT = state$$1[v3209];
  var v3210 = index$$50;
  index$$50 = index$$50 + 1;
  this.mode0TriggerSTAT = state$$1[v3210];
  var v3211 = index$$50;
  index$$50 = index$$50 + 1;
  this.LCDisOn = state$$1[v3211];
  var v3212 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxWindowCHRBankPosition = state$$1[v3212];
  var v3213 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxWindowDisplay = state$$1[v3213];
  var v3214 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxSpriteShow = state$$1[v3214];
  var v3215 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxSpriteNormalHeight = state$$1[v3215];
  var v3216 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxBackgroundCHRBankPosition = state$$1[v3216];
  var v3217 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxBackgroundBankOffset = state$$1[v3217];
  var v3218 = index$$50;
  index$$50 = index$$50 + 1;
  this.TIMAEnabled = state$$1[v3218];
  var v3219 = index$$50;
  index$$50 = index$$50 + 1;
  this.DIVTicks = state$$1[v3219];
  var v3220 = index$$50;
  index$$50 = index$$50 + 1;
  this.LCDTicks = state$$1[v3220];
  var v3221 = index$$50;
  index$$50 = index$$50 + 1;
  this.timerTicks = state$$1[v3221];
  var v3222 = index$$50;
  index$$50 = index$$50 + 1;
  this.TACClocker = state$$1[v3222];
  var v3223 = index$$50;
  index$$50 = index$$50 + 1;
  this.serialTimer = state$$1[v3223];
  var v3224 = index$$50;
  index$$50 = index$$50 + 1;
  this.serialShiftTimer = state$$1[v3224];
  var v3225 = index$$50;
  index$$50 = index$$50 + 1;
  this.serialShiftTimerAllocated = state$$1[v3225];
  var v3226 = index$$50;
  index$$50 = index$$50 + 1;
  this.IRQEnableDelay = state$$1[v3226];
  var v3227 = index$$50;
  index$$50 = index$$50 + 1;
  this.lastIteration = state$$1[v3227];
  var v3228 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC1 = state$$1[v3228];
  var v3229 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC2 = state$$1[v3229];
  var v3230 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC3 = state$$1[v3230];
  var v3231 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC5 = state$$1[v3231];
  var v3232 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC7 = state$$1[v3232];
  var v3233 = index$$50;
  index$$50 = index$$50 + 1;
  this.cSRAM = state$$1[v3233];
  var v3234 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMMMO1 = state$$1[v3234];
  var v3235 = index$$50;
  index$$50 = index$$50 + 1;
  this.cRUMBLE = state$$1[v3235];
  var v3236 = index$$50;
  index$$50 = index$$50 + 1;
  this.cCamera = state$$1[v3236];
  var v3237 = index$$50;
  index$$50 = index$$50 + 1;
  this.cTAMA5 = state$$1[v3237];
  var v3238 = index$$50;
  index$$50 = index$$50 + 1;
  this.cHuC3 = state$$1[v3238];
  var v3239 = index$$50;
  index$$50 = index$$50 + 1;
  this.cHuC1 = state$$1[v3239];
  var v3240 = index$$50;
  index$$50 = index$$50 + 1;
  this.drewBlank = state$$1[v3240];
  var v7095 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3241 = state$$1[v7095]
  }
  var v10905 = JAM.call(this.toTypedArray, this, [v3241, "int32"]);
  this.frameBuffer = v10905;
  var v3242 = index$$50;
  index$$50 = index$$50 + 1;
  this.bgEnabled = state$$1[v3242];
  var v3243 = index$$50;
  index$$50 = index$$50 + 1;
  this.BGPriorityEnabled = state$$1[v3243];
  var v3244 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1FrequencyTracker = state$$1[v3244];
  var v3245 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1FrequencyCounter = state$$1[v3245];
  var v3246 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1totalLength = state$$1[v3246];
  var v3247 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1envelopeVolume = state$$1[v3247];
  var v3248 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1envelopeType = state$$1[v3248];
  var v3249 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1envelopeSweeps = state$$1[v3249];
  var v3250 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1envelopeSweepsLast = state$$1[v3250];
  var v3251 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1consecutive = state$$1[v3251];
  var v3252 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1frequency = state$$1[v3252];
  var v3253 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1SweepFault = state$$1[v3253];
  var v3254 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1ShadowFrequency = state$$1[v3254];
  var v3255 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1timeSweep = state$$1[v3255];
  var v3256 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1lastTimeSweep = state$$1[v3256];
  var v3257 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1numSweep = state$$1[v3257];
  var v3258 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1frequencySweepDivider = state$$1[v3258];
  var v3259 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1decreaseSweep = state$$1[v3259];
  var v3260 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2FrequencyTracker = state$$1[v3260];
  var v3261 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2FrequencyCounter = state$$1[v3261];
  var v3262 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2totalLength = state$$1[v3262];
  var v3263 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2envelopeVolume = state$$1[v3263];
  var v3264 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2envelopeType = state$$1[v3264];
  var v3265 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2envelopeSweeps = state$$1[v3265];
  var v3266 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2envelopeSweepsLast = state$$1[v3266];
  var v3267 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2consecutive = state$$1[v3267];
  var v3268 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2frequency = state$$1[v3268];
  var v3269 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3canPlay = state$$1[v3269];
  var v3270 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3totalLength = state$$1[v3270];
  var v3271 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3patternType = state$$1[v3271];
  var v3272 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3frequency = state$$1[v3272];
  var v3273 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3consecutive = state$$1[v3273];
  var v7096 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3274 = state$$1[v7096]
  }
  var v10906 = JAM.call(this.toTypedArray, this, [v3274, "int8"]);
  this.channel3PCM = v10906;
  var v3275 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4FrequencyPeriod = state$$1[v3275];
  var v3276 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4lastSampleLookup = state$$1[v3276];
  var v3277 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4totalLength = state$$1[v3277];
  var v3278 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4envelopeVolume = state$$1[v3278];
  var v3279 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentVolume = state$$1[v3279];
  var v3280 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4envelopeType = state$$1[v3280];
  var v3281 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4envelopeSweeps = state$$1[v3281];
  var v3282 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4envelopeSweepsLast = state$$1[v3282];
  var v3283 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4consecutive = state$$1[v3283];
  var v3284 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4BitRange = state$$1[v3284];
  var v3285 = index$$50;
  index$$50 = index$$50 + 1;
  this.soundMasterEnabled = state$$1[v3285];
  var v3286 = index$$50;
  index$$50 = index$$50 + 1;
  this.VinLeftChannelMasterVolume = state$$1[v3286];
  var v3287 = index$$50;
  index$$50 = index$$50 + 1;
  this.VinRightChannelMasterVolume = state$$1[v3287];
  var v3288 = index$$50;
  index$$50 = index$$50 + 1;
  this.leftChannel1 = state$$1[v3288];
  var v3289 = index$$50;
  index$$50 = index$$50 + 1;
  this.leftChannel2 = state$$1[v3289];
  var v3290 = index$$50;
  index$$50 = index$$50 + 1;
  this.leftChannel3 = state$$1[v3290];
  var v3291 = index$$50;
  index$$50 = index$$50 + 1;
  this.leftChannel4 = state$$1[v3291];
  var v3292 = index$$50;
  index$$50 = index$$50 + 1;
  this.rightChannel1 = state$$1[v3292];
  var v3293 = index$$50;
  index$$50 = index$$50 + 1;
  this.rightChannel2 = state$$1[v3293];
  var v3294 = index$$50;
  index$$50 = index$$50 + 1;
  this.rightChannel3 = state$$1[v3294];
  var v3295 = index$$50;
  index$$50 = index$$50 + 1;
  this.rightChannel4 = state$$1[v3295];
  var v3296 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleLeft = state$$1[v3296];
  var v3297 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleRight = state$$1[v3297];
  var v3298 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleLeft = state$$1[v3298];
  var v3299 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleRight = state$$1[v3299];
  var v3300 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3currentSampleLeft = state$$1[v3300];
  var v3301 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3currentSampleRight = state$$1[v3301];
  var v3302 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentSampleLeft = state$$1[v3302];
  var v3303 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentSampleRight = state$$1[v3303];
  var v3304 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleLeftSecondary = state$$1[v3304];
  var v3305 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleRightSecondary = state$$1[v3305];
  var v3306 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleLeftSecondary = state$$1[v3306];
  var v3307 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleRightSecondary = state$$1[v3307];
  var v3308 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3currentSampleLeftSecondary = state$$1[v3308];
  var v3309 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3currentSampleRightSecondary = state$$1[v3309];
  var v3310 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentSampleLeftSecondary = state$$1[v3310];
  var v3311 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentSampleRightSecondary = state$$1[v3311];
  var v3312 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleLeftTrimary = state$$1[v3312];
  var v3313 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleRightTrimary = state$$1[v3313];
  var v3314 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleLeftTrimary = state$$1[v3314];
  var v3315 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleRightTrimary = state$$1[v3315];
  var v3316 = index$$50;
  index$$50 = index$$50 + 1;
  this.mixerOutputCache = state$$1[v3316];
  var v3317 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1DutyTracker = state$$1[v3317];
  var v3318 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1CachedDuty = state$$1[v3318];
  var v3319 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2DutyTracker = state$$1[v3319];
  var v3320 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2CachedDuty = state$$1[v3320];
  var v3321 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1Enabled = state$$1[v3321];
  var v3322 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2Enabled = state$$1[v3322];
  var v3323 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3Enabled = state$$1[v3323];
  var v3324 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4Enabled = state$$1[v3324];
  var v3325 = index$$50;
  index$$50 = index$$50 + 1;
  this.sequencerClocks = state$$1[v3325];
  var v3326 = index$$50;
  index$$50 = index$$50 + 1;
  this.sequencePosition = state$$1[v3326];
  var v3327 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3Counter = state$$1[v3327];
  var v3328 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4Counter = state$$1[v3328];
  var v3329 = index$$50;
  index$$50 = index$$50 + 1;
  this.cachedChannel3Sample = state$$1[v3329];
  var v3330 = index$$50;
  index$$50 = index$$50 + 1;
  this.cachedChannel4Sample = state$$1[v3330];
  var v3331 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3FrequencyPeriod = state$$1[v3331];
  var v3332 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3lastSampleLookup = state$$1[v3332];
  var v3333 = index$$50;
  index$$50 = index$$50 + 1;
  this.actualScanLine = state$$1[v3333];
  var v3334 = index$$50;
  index$$50 = index$$50 + 1;
  this.lastUnrenderedLine = state$$1[v3334];
  var v3335 = index$$50;
  index$$50 = index$$50 + 1;
  this.queuedScanLines = state$$1[v3335];
  var v3336 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCisLatched = state$$1[v3336];
  var v3337 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedSeconds = state$$1[v3337];
  var v3338 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedMinutes = state$$1[v3338];
  var v3339 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedHours = state$$1[v3339];
  var v3340 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedLDays = state$$1[v3340];
  var v3341 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedHDays = state$$1[v3341];
  var v3342 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCSeconds = state$$1[v3342];
  var v3343 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCMinutes = state$$1[v3343];
  var v3344 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCHours = state$$1[v3344];
  var v3345 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCDays = state$$1[v3345];
  var v3346 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCDayOverFlow = state$$1[v3346];
  var v3347 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCHALT = state$$1[v3347];
  var v3348 = index$$50;
  index$$50 = index$$50 + 1;
  this.usedBootROM = state$$1[v3348];
  var v3349 = index$$50;
  index$$50 = index$$50 + 1;
  this.skipPCIncrement = state$$1[v3349];
  var v3350 = index$$50;
  index$$50 = index$$50 + 1;
  this.STATTracker = state$$1[v3350];
  var v3351 = index$$50;
  index$$50 = index$$50 + 1;
  this.gbcRamBankPositionECHO = state$$1[v3351];
  var v3352 = index$$50;
  index$$50 = index$$50 + 1;
  this.numRAMBanks = state$$1[v3352];
  var v3353 = index$$50;
  index$$50 = index$$50 + 1;
  this.windowY = state$$1[v3353];
  var v3354 = index$$50;
  index$$50 = index$$50 + 1;
  this.windowX = state$$1[v3354];
  var v7097 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3355 = state$$1[v7097]
  }
  var v10907 = JAM.call(this.toTypedArray, this, [v3355, "uint8"]);
  this.gbcOBJRawPalette = v10907;
  var v7098 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3356 = state$$1[v7098]
  }
  var v10908 = JAM.call(this.toTypedArray, this, [v3356, "uint8"]);
  this.gbcBGRawPalette = v10908;
  var v7099 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3357 = state$$1[v7099]
  }
  var v10909 = JAM.call(this.toTypedArray, this, [v3357, "int32"]);
  this.gbOBJPalette = v10909;
  var v7100 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3358 = state$$1[v7100]
  }
  var v10910 = JAM.call(this.toTypedArray, this, [v3358, "int32"]);
  this.gbBGPalette = v10910;
  var v7101 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3359 = state$$1[v7101]
  }
  var v10911 = JAM.call(this.toTypedArray, this, [v3359, "int32"]);
  this.gbcOBJPalette = v10911;
  var v7102 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3360 = state$$1[v7102]
  }
  var v10912 = JAM.call(this.toTypedArray, this, [v3360, "int32"]);
  this.gbcBGPalette = v10912;
  var v7103 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3361 = state$$1[v7103]
  }
  var v10913 = JAM.call(this.toTypedArray, this, [v3361, "int32"]);
  this.gbBGColorizedPalette = v10913;
  var v7104 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3362 = state$$1[v7104]
  }
  var v10914 = JAM.call(this.toTypedArray, this, [v3362, "int32"]);
  this.gbOBJColorizedPalette = v10914;
  var v7105 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3363 = state$$1[v7105]
  }
  var v10915 = JAM.call(this.toTypedArray, this, [v3363, "int32"]);
  this.cachedBGPaletteConversion = v10915;
  var v7106 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3364 = state$$1[v7106]
  }
  var v10916 = JAM.call(this.toTypedArray, this, [v3364, "int32"]);
  this.cachedOBJPaletteConversion = v10916;
  var v7107 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3365 = state$$1[v7107]
  }
  var v10917 = JAM.call(this.toTypedArray, this, [v3365, "uint8"]);
  this.BGCHRBank1 = v10917;
  var v7108 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAM.policy.p1) {
    var v3366 = state$$1[v7108]
  }
  var v10918 = JAM.call(this.toTypedArray, this, [v3366, "uint8"]);
  this.BGCHRBank2 = v10918;
  var v3367 = index$$50;
  index$$50 = index$$50 + 1;
  this.haltPostClocks = state$$1[v3367];
  var v3368 = index$$50;
  index$$50 = index$$50 + 1;
  this.interruptsRequested = state$$1[v3368];
  var v3369 = index$$50;
  index$$50 = index$$50 + 1;
  this.interruptsEnabled = state$$1[v3369];
  this.checkIRQMatching();
  var v3370 = index$$50;
  index$$50 = index$$50 + 1;
  this.remainingClocks = state$$1[v3370];
  var v3371 = index$$50;
  index$$50 = index$$50 + 1;
  this.colorizedGBPalettes = state$$1[v3371];
  var v3372 = index$$50;
  index$$50 = index$$50 + 1;
  this.backgroundY = state$$1[v3372];
  var v3373 = index$$50;
  index$$50 = index$$50 + 1;
  this.backgroundX = state$$1[v3373];
  this.CPUStopped = state$$1[index$$50];
  this.fromSaveState = true;
  var v10919 = JAM.call(this.toTypedArray, this, [this.TICKTable, "uint8"]);
  this.TICKTable = v10919;
  var v10920 = JAM.call(this.toTypedArray, this, [this.SecondaryTICKTable, "uint8"]);
  this.SecondaryTICKTable = v10920;
  this.initializeReferencesFromSaveState();
  this.memoryReadJumpCompile();
  this.memoryWriteJumpCompile();
  this.initLCD();
  this.initSound();
  var v3376;
  if(this.channel4BitRange == 32767) {
    v3376 = this.LSFR15Table
  }else {
    v3376 = this.LSFR7Table
  }
  this.noiseSampleTable = v3376;
  var v3377;
  if(this.channel4BitRange == 32767) {
    v3377 = 15
  }else {
    v3377 = 7
  }
  this.channel4VolumeShifter = v3377;
  return
}
function v592() {
  return[JAM.call(this.fromTypedArray, this, [this.ROM]), this.inBootstrap, this.registerA, this.FZero, this.FSubtract, this.FHalfCarry, this.FCarry, this.registerB, this.registerC, this.registerD, this.registerE, this.registersHL, this.stackPointer, this.programCounter, this.halt, this.IME, this.hdmaRunning, this.CPUTicks, this.doubleSpeedShifter, JAM.call(this.fromTypedArray, this, [this.memory]), JAM.call(this.fromTypedArray, this, [this.MBCRam]), JAM.call(this.fromTypedArray, this, [this.VRAM]), 
  this.currVRAMBank, JAM.call(this.fromTypedArray, this, [this.GBCMemory]), this.MBC1Mode, this.MBCRAMBanksEnabled, this.currMBCRAMBank, this.currMBCRAMBankPosition, this.cGBC, this.gbcRamBank, this.gbcRamBankPosition, this.ROMBank1offs, this.currentROMBank, this.cartridgeType, this.name, this.gameCode, this.modeSTAT, this.LYCMatchTriggerSTAT, this.mode2TriggerSTAT, this.mode1TriggerSTAT, this.mode0TriggerSTAT, this.LCDisOn, this.gfxWindowCHRBankPosition, this.gfxWindowDisplay, this.gfxSpriteShow, 
  this.gfxSpriteNormalHeight, this.gfxBackgroundCHRBankPosition, this.gfxBackgroundBankOffset, this.TIMAEnabled, this.DIVTicks, this.LCDTicks, this.timerTicks, this.TACClocker, this.serialTimer, this.serialShiftTimer, this.serialShiftTimerAllocated, this.IRQEnableDelay, this.lastIteration, this.cMBC1, this.cMBC2, this.cMBC3, this.cMBC5, this.cMBC7, this.cSRAM, this.cMMMO1, this.cRUMBLE, this.cCamera, this.cTAMA5, this.cHuC3, this.cHuC1, this.drewBlank, JAM.call(this.fromTypedArray, this, [this.frameBuffer]), 
  this.bgEnabled, this.BGPriorityEnabled, this.channel1FrequencyTracker, this.channel1FrequencyCounter, this.channel1totalLength, this.channel1envelopeVolume, this.channel1envelopeType, this.channel1envelopeSweeps, this.channel1envelopeSweepsLast, this.channel1consecutive, this.channel1frequency, this.channel1SweepFault, this.channel1ShadowFrequency, this.channel1timeSweep, this.channel1lastTimeSweep, this.channel1numSweep, this.channel1frequencySweepDivider, this.channel1decreaseSweep, this.channel2FrequencyTracker, 
  this.channel2FrequencyCounter, this.channel2totalLength, this.channel2envelopeVolume, this.channel2envelopeType, this.channel2envelopeSweeps, this.channel2envelopeSweepsLast, this.channel2consecutive, this.channel2frequency, this.channel3canPlay, this.channel3totalLength, this.channel3patternType, this.channel3frequency, this.channel3consecutive, JAM.call(this.fromTypedArray, this, [this.channel3PCM]), this.channel4FrequencyPeriod, this.channel4lastSampleLookup, this.channel4totalLength, this.channel4envelopeVolume, 
  this.channel4currentVolume, this.channel4envelopeType, this.channel4envelopeSweeps, this.channel4envelopeSweepsLast, this.channel4consecutive, this.channel4BitRange, this.soundMasterEnabled, this.VinLeftChannelMasterVolume, this.VinRightChannelMasterVolume, this.leftChannel1, this.leftChannel2, this.leftChannel3, this.leftChannel4, this.rightChannel1, this.rightChannel2, this.rightChannel3, this.rightChannel4, this.channel1currentSampleLeft, this.channel1currentSampleRight, this.channel2currentSampleLeft, 
  this.channel2currentSampleRight, this.channel3currentSampleLeft, this.channel3currentSampleRight, this.channel4currentSampleLeft, this.channel4currentSampleRight, this.channel1currentSampleLeftSecondary, this.channel1currentSampleRightSecondary, this.channel2currentSampleLeftSecondary, this.channel2currentSampleRightSecondary, this.channel3currentSampleLeftSecondary, this.channel3currentSampleRightSecondary, this.channel4currentSampleLeftSecondary, this.channel4currentSampleRightSecondary, this.channel1currentSampleLeftTrimary, 
  this.channel1currentSampleRightTrimary, this.channel2currentSampleLeftTrimary, this.channel2currentSampleRightTrimary, this.mixerOutputCache, this.channel1DutyTracker, this.channel1CachedDuty, this.channel2DutyTracker, this.channel2CachedDuty, this.channel1Enabled, this.channel2Enabled, this.channel3Enabled, this.channel4Enabled, this.sequencerClocks, this.sequencePosition, this.channel3Counter, this.channel4Counter, this.cachedChannel3Sample, this.cachedChannel4Sample, this.channel3FrequencyPeriod, 
  this.channel3lastSampleLookup, this.actualScanLine, this.lastUnrenderedLine, this.queuedScanLines, this.RTCisLatched, this.latchedSeconds, this.latchedMinutes, this.latchedHours, this.latchedLDays, this.latchedHDays, this.RTCSeconds, this.RTCMinutes, this.RTCHours, this.RTCDays, this.RTCDayOverFlow, this.RTCHALT, this.usedBootROM, this.skipPCIncrement, this.STATTracker, this.gbcRamBankPositionECHO, this.numRAMBanks, this.windowY, this.windowX, JAM.call(this.fromTypedArray, this, [this.gbcOBJRawPalette]), 
  JAM.call(this.fromTypedArray, this, [this.gbcBGRawPalette]), JAM.call(this.fromTypedArray, this, [this.gbOBJPalette]), JAM.call(this.fromTypedArray, this, [this.gbBGPalette]), JAM.call(this.fromTypedArray, this, [this.gbcOBJPalette]), JAM.call(this.fromTypedArray, this, [this.gbcBGPalette]), JAM.call(this.fromTypedArray, this, [this.gbBGColorizedPalette]), JAM.call(this.fromTypedArray, this, [this.gbOBJColorizedPalette]), JAM.call(this.fromTypedArray, this, [this.cachedBGPaletteConversion]), JAM.call(this.fromTypedArray, 
  this, [this.cachedOBJPaletteConversion]), JAM.call(this.fromTypedArray, this, [this.BGCHRBank1]), JAM.call(this.fromTypedArray, this, [this.BGCHRBank2]), this.haltPostClocks, this.interruptsRequested, this.interruptsEnabled, this.remainingClocks, this.colorizedGBPalettes, this.backgroundY, this.backgroundX, this.CPUStopped]
}
function v591() {
  if(!this.cTIMER) {
    return[]
  }else {
    return[this.lastIteration, this.RTCisLatched, this.latchedSeconds, this.latchedMinutes, this.latchedHours, this.latchedLDays, this.latchedHDays, this.RTCSeconds, this.RTCMinutes, this.RTCHours, this.RTCDays, this.RTCDayOverFlow, this.RTCHALT]
  }
  return
}
function v590() {
  var v7131 = !this.cBATT;
  if(!v7131) {
    v7131 = this.MBCRam.length == 0
  }
  if(v7131) {
    return[]
  }else {
    return JAM.call(this.fromTypedArray, this, [this.MBCRam])
  }
  return
}
function v589(parentObj$$512) {
  parentObj$$512.registerA = parentObj$$512.registerA | 128;
  return
}
function v588(parentObj$$511) {
  var v3599 = parentObj$$511.memoryWriter;
  var v3600 = parentObj$$511.registersHL;
  var v3601 = parentObj$$511.registersHL;
  var v9135 = parentObj$$511.memoryReader;
  JAM.call(JAM.get(v3599, v3600, JAM.policy.p1), v3599, [parentObj$$511, v3601, JAM.call(JAM.get(v9135, parentObj$$511.registersHL, JAM.policy.p1), v9135, [parentObj$$511, parentObj$$511.registersHL]) | 128]);
  return
}
function v587(parentObj$$510) {
  parentObj$$510.registersHL = parentObj$$510.registersHL | 128;
  return
}
function v586(parentObj$$509) {
  parentObj$$509.registersHL = parentObj$$509.registersHL | 32768;
  return
}
function v585(parentObj$$508) {
  parentObj$$508.registerE = parentObj$$508.registerE | 128;
  return
}
function v584(parentObj$$507) {
  parentObj$$507.registerD = parentObj$$507.registerD | 128;
  return
}
function v583(parentObj$$506) {
  parentObj$$506.registerC = parentObj$$506.registerC | 128;
  return
}
function v582(parentObj$$505) {
  parentObj$$505.registerB = parentObj$$505.registerB | 128;
  return
}
function v581(parentObj$$504) {
  parentObj$$504.registerA = parentObj$$504.registerA | 64;
  return
}
function v580(parentObj$$503) {
  var v3603 = parentObj$$503.memoryWriter;
  var v3604 = parentObj$$503.registersHL;
  var v3605 = parentObj$$503.registersHL;
  var v9138 = parentObj$$503.memoryReader;
  JAM.call(JAM.get(v3603, v3604, JAM.policy.p1), v3603, [parentObj$$503, v3605, JAM.call(JAM.get(v9138, parentObj$$503.registersHL, JAM.policy.p1), v9138, [parentObj$$503, parentObj$$503.registersHL]) | 64]);
  return
}
function v579(parentObj$$502) {
  parentObj$$502.registersHL = parentObj$$502.registersHL | 64;
  return
}
function v578(parentObj$$501) {
  parentObj$$501.registersHL = parentObj$$501.registersHL | 16384;
  return
}
function v577(parentObj$$500) {
  parentObj$$500.registerE = parentObj$$500.registerE | 64;
  return
}
function v576(parentObj$$499) {
  parentObj$$499.registerD = parentObj$$499.registerD | 64;
  return
}
function v575(parentObj$$498) {
  parentObj$$498.registerC = parentObj$$498.registerC | 64;
  return
}
function v574(parentObj$$497) {
  parentObj$$497.registerB = parentObj$$497.registerB | 64;
  return
}
function v573(parentObj$$496) {
  parentObj$$496.registerA = parentObj$$496.registerA | 32;
  return
}
function v572(parentObj$$495) {
  var v3607 = parentObj$$495.memoryWriter;
  var v3608 = parentObj$$495.registersHL;
  var v3609 = parentObj$$495.registersHL;
  var v9141 = parentObj$$495.memoryReader;
  JAM.call(JAM.get(v3607, v3608, JAM.policy.p1), v3607, [parentObj$$495, v3609, JAM.call(JAM.get(v9141, parentObj$$495.registersHL, JAM.policy.p1), v9141, [parentObj$$495, parentObj$$495.registersHL]) | 32]);
  return
}
function v571(parentObj$$494) {
  parentObj$$494.registersHL = parentObj$$494.registersHL | 32;
  return
}
function v570(parentObj$$493) {
  parentObj$$493.registersHL = parentObj$$493.registersHL | 8192;
  return
}
function v569(parentObj$$492) {
  parentObj$$492.registerE = parentObj$$492.registerE | 32;
  return
}
function v568(parentObj$$491) {
  parentObj$$491.registerD = parentObj$$491.registerD | 32;
  return
}
function v567(parentObj$$490) {
  parentObj$$490.registerC = parentObj$$490.registerC | 32;
  return
}
function v566(parentObj$$489) {
  parentObj$$489.registerB = parentObj$$489.registerB | 32;
  return
}
function v565(parentObj$$488) {
  parentObj$$488.registerA = parentObj$$488.registerA | 16;
  return
}
function v564(parentObj$$487) {
  var v3611 = parentObj$$487.memoryWriter;
  var v3612 = parentObj$$487.registersHL;
  var v3613 = parentObj$$487.registersHL;
  var v9144 = parentObj$$487.memoryReader;
  JAM.call(JAM.get(v3611, v3612, JAM.policy.p1), v3611, [parentObj$$487, v3613, JAM.call(JAM.get(v9144, parentObj$$487.registersHL, JAM.policy.p1), v9144, [parentObj$$487, parentObj$$487.registersHL]) | 16]);
  return
}
function v563(parentObj$$486) {
  parentObj$$486.registersHL = parentObj$$486.registersHL | 16;
  return
}
function v562(parentObj$$485) {
  parentObj$$485.registersHL = parentObj$$485.registersHL | 4096;
  return
}
function v561(parentObj$$484) {
  parentObj$$484.registerE = parentObj$$484.registerE | 16;
  return
}
function v560(parentObj$$483) {
  parentObj$$483.registerD = parentObj$$483.registerD | 16;
  return
}
function v559(parentObj$$482) {
  parentObj$$482.registerC = parentObj$$482.registerC | 16;
  return
}
function v558(parentObj$$481) {
  parentObj$$481.registerB = parentObj$$481.registerB | 16;
  return
}
function v557(parentObj$$480) {
  parentObj$$480.registerA = parentObj$$480.registerA | 8;
  return
}
function v556(parentObj$$479) {
  var v3615 = parentObj$$479.memoryWriter;
  var v3616 = parentObj$$479.registersHL;
  var v3617 = parentObj$$479.registersHL;
  var v9147 = parentObj$$479.memoryReader;
  JAM.call(JAM.get(v3615, v3616, JAM.policy.p1), v3615, [parentObj$$479, v3617, JAM.call(JAM.get(v9147, parentObj$$479.registersHL, JAM.policy.p1), v9147, [parentObj$$479, parentObj$$479.registersHL]) | 8]);
  return
}
function v555(parentObj$$478) {
  parentObj$$478.registersHL = parentObj$$478.registersHL | 8;
  return
}
function v554(parentObj$$477) {
  parentObj$$477.registersHL = parentObj$$477.registersHL | 2048;
  return
}
function v553(parentObj$$476) {
  parentObj$$476.registerE = parentObj$$476.registerE | 8;
  return
}
function v552(parentObj$$475) {
  parentObj$$475.registerD = parentObj$$475.registerD | 8;
  return
}
function v551(parentObj$$474) {
  parentObj$$474.registerC = parentObj$$474.registerC | 8;
  return
}
function v550(parentObj$$473) {
  parentObj$$473.registerB = parentObj$$473.registerB | 8;
  return
}
function v549(parentObj$$472) {
  parentObj$$472.registerA = parentObj$$472.registerA | 4;
  return
}
function v548(parentObj$$471) {
  var v3619 = parentObj$$471.memoryWriter;
  var v3620 = parentObj$$471.registersHL;
  var v3621 = parentObj$$471.registersHL;
  var v9150 = parentObj$$471.memoryReader;
  JAM.call(JAM.get(v3619, v3620, JAM.policy.p1), v3619, [parentObj$$471, v3621, JAM.call(JAM.get(v9150, parentObj$$471.registersHL, JAM.policy.p1), v9150, [parentObj$$471, parentObj$$471.registersHL]) | 4]);
  return
}
function v547(parentObj$$470) {
  parentObj$$470.registersHL = parentObj$$470.registersHL | 4;
  return
}
function v546(parentObj$$469) {
  parentObj$$469.registersHL = parentObj$$469.registersHL | 1024;
  return
}
function v545(parentObj$$468) {
  parentObj$$468.registerE = parentObj$$468.registerE | 4;
  return
}
function v544(parentObj$$467) {
  parentObj$$467.registerD = parentObj$$467.registerD | 4;
  return
}
function v543(parentObj$$466) {
  parentObj$$466.registerC = parentObj$$466.registerC | 4;
  return
}
function v542(parentObj$$465) {
  parentObj$$465.registerB = parentObj$$465.registerB | 4;
  return
}
function v541(parentObj$$464) {
  parentObj$$464.registerA = parentObj$$464.registerA | 2;
  return
}
function v540(parentObj$$463) {
  var v3623 = parentObj$$463.memoryWriter;
  var v3624 = parentObj$$463.registersHL;
  var v3625 = parentObj$$463.registersHL;
  var v9153 = parentObj$$463.memoryReader;
  JAM.call(JAM.get(v3623, v3624, JAM.policy.p1), v3623, [parentObj$$463, v3625, JAM.call(JAM.get(v9153, parentObj$$463.registersHL, JAM.policy.p1), v9153, [parentObj$$463, parentObj$$463.registersHL]) | 2]);
  return
}
function v539(parentObj$$462) {
  parentObj$$462.registersHL = parentObj$$462.registersHL | 2;
  return
}
function v538(parentObj$$461) {
  parentObj$$461.registersHL = parentObj$$461.registersHL | 512;
  return
}
function v537(parentObj$$460) {
  parentObj$$460.registerE = parentObj$$460.registerE | 2;
  return
}
function v536(parentObj$$459) {
  parentObj$$459.registerD = parentObj$$459.registerD | 2;
  return
}
function v535(parentObj$$458) {
  parentObj$$458.registerC = parentObj$$458.registerC | 2;
  return
}
function v534(parentObj$$457) {
  parentObj$$457.registerB = parentObj$$457.registerB | 2;
  return
}
function v533(parentObj$$456) {
  parentObj$$456.registerA = parentObj$$456.registerA | 1;
  return
}
function v532(parentObj$$455) {
  var v3627 = parentObj$$455.memoryWriter;
  var v3628 = parentObj$$455.registersHL;
  var v3629 = parentObj$$455.registersHL;
  var v9156 = parentObj$$455.memoryReader;
  JAM.call(JAM.get(v3627, v3628, JAM.policy.p1), v3627, [parentObj$$455, v3629, JAM.call(JAM.get(v9156, parentObj$$455.registersHL, JAM.policy.p1), v9156, [parentObj$$455, parentObj$$455.registersHL]) | 1]);
  return
}
function v531(parentObj$$454) {
  parentObj$$454.registersHL = parentObj$$454.registersHL | 1;
  return
}
function v530(parentObj$$453) {
  parentObj$$453.registersHL = parentObj$$453.registersHL | 256;
  return
}
function v529(parentObj$$452) {
  parentObj$$452.registerE = parentObj$$452.registerE | 1;
  return
}
function v528(parentObj$$451) {
  parentObj$$451.registerD = parentObj$$451.registerD | 1;
  return
}
function v527(parentObj$$450) {
  parentObj$$450.registerC = parentObj$$450.registerC | 1;
  return
}
function v526(parentObj$$449) {
  parentObj$$449.registerB = parentObj$$449.registerB | 1;
  return
}
function v525(parentObj$$448) {
  parentObj$$448.registerA = parentObj$$448.registerA & 127;
  return
}
function v524(parentObj$$447) {
  var v3631 = parentObj$$447.memoryWriter;
  var v3632 = parentObj$$447.registersHL;
  var v3633 = parentObj$$447.registersHL;
  var v9159 = parentObj$$447.memoryReader;
  JAM.call(JAM.get(v3631, v3632, JAM.policy.p1), v3631, [parentObj$$447, v3633, JAM.call(JAM.get(v9159, parentObj$$447.registersHL, JAM.policy.p1), v9159, [parentObj$$447, parentObj$$447.registersHL]) & 127]);
  return
}
function v523(parentObj$$446) {
  parentObj$$446.registersHL = parentObj$$446.registersHL & 65407;
  return
}
function v522(parentObj$$445) {
  parentObj$$445.registersHL = parentObj$$445.registersHL & 32767;
  return
}
function v521(parentObj$$444) {
  parentObj$$444.registerE = parentObj$$444.registerE & 127;
  return
}
function v520(parentObj$$443) {
  parentObj$$443.registerD = parentObj$$443.registerD & 127;
  return
}
function v519(parentObj$$442) {
  parentObj$$442.registerC = parentObj$$442.registerC & 127;
  return
}
function v518(parentObj$$441) {
  parentObj$$441.registerB = parentObj$$441.registerB & 127;
  return
}
function v517(parentObj$$440) {
  parentObj$$440.registerA = parentObj$$440.registerA & 191;
  return
}
function v516(parentObj$$439) {
  var v3635 = parentObj$$439.memoryWriter;
  var v3636 = parentObj$$439.registersHL;
  var v3637 = parentObj$$439.registersHL;
  var v9162 = parentObj$$439.memoryReader;
  JAM.call(JAM.get(v3635, v3636, JAM.policy.p1), v3635, [parentObj$$439, v3637, JAM.call(JAM.get(v9162, parentObj$$439.registersHL, JAM.policy.p1), v9162, [parentObj$$439, parentObj$$439.registersHL]) & 191]);
  return
}
function v515(parentObj$$438) {
  parentObj$$438.registersHL = parentObj$$438.registersHL & 65471;
  return
}
function v514(parentObj$$437) {
  parentObj$$437.registersHL = parentObj$$437.registersHL & 49151;
  return
}
function v513(parentObj$$436) {
  parentObj$$436.registerE = parentObj$$436.registerE & 191;
  return
}
function v512(parentObj$$435) {
  parentObj$$435.registerD = parentObj$$435.registerD & 191;
  return
}
function v511(parentObj$$434) {
  parentObj$$434.registerC = parentObj$$434.registerC & 191;
  return
}
function v510(parentObj$$433) {
  parentObj$$433.registerB = parentObj$$433.registerB & 191;
  return
}
function v509(parentObj$$432) {
  parentObj$$432.registerA = parentObj$$432.registerA & 223;
  return
}
function v508(parentObj$$431) {
  var v3639 = parentObj$$431.memoryWriter;
  var v3640 = parentObj$$431.registersHL;
  var v3641 = parentObj$$431.registersHL;
  var v9165 = parentObj$$431.memoryReader;
  JAM.call(JAM.get(v3639, v3640, JAM.policy.p1), v3639, [parentObj$$431, v3641, JAM.call(JAM.get(v9165, parentObj$$431.registersHL, JAM.policy.p1), v9165, [parentObj$$431, parentObj$$431.registersHL]) & 223]);
  return
}
function v507(parentObj$$430) {
  parentObj$$430.registersHL = parentObj$$430.registersHL & 65503;
  return
}
function v506(parentObj$$429) {
  parentObj$$429.registersHL = parentObj$$429.registersHL & 57343;
  return
}
function v505(parentObj$$428) {
  parentObj$$428.registerE = parentObj$$428.registerE & 223;
  return
}
function v504(parentObj$$427) {
  parentObj$$427.registerD = parentObj$$427.registerD & 223;
  return
}
function v503(parentObj$$426) {
  parentObj$$426.registerC = parentObj$$426.registerC & 223;
  return
}
function v502(parentObj$$425) {
  parentObj$$425.registerB = parentObj$$425.registerB & 223;
  return
}
function v501(parentObj$$424) {
  parentObj$$424.registerA = parentObj$$424.registerA & 239;
  return
}
function v500(parentObj$$423) {
  var v3643 = parentObj$$423.memoryWriter;
  var v3644 = parentObj$$423.registersHL;
  var v3645 = parentObj$$423.registersHL;
  var v9168 = parentObj$$423.memoryReader;
  JAM.call(JAM.get(v3643, v3644, JAM.policy.p1), v3643, [parentObj$$423, v3645, JAM.call(JAM.get(v9168, parentObj$$423.registersHL, JAM.policy.p1), v9168, [parentObj$$423, parentObj$$423.registersHL]) & 239]);
  return
}
function v499(parentObj$$422) {
  parentObj$$422.registersHL = parentObj$$422.registersHL & 65519;
  return
}
function v498(parentObj$$421) {
  parentObj$$421.registersHL = parentObj$$421.registersHL & 61439;
  return
}
function v497(parentObj$$420) {
  parentObj$$420.registerE = parentObj$$420.registerE & 239;
  return
}
function v496(parentObj$$419) {
  parentObj$$419.registerD = parentObj$$419.registerD & 239;
  return
}
function v495(parentObj$$418) {
  parentObj$$418.registerC = parentObj$$418.registerC & 239;
  return
}
function v494(parentObj$$417) {
  parentObj$$417.registerB = parentObj$$417.registerB & 239;
  return
}
function v493(parentObj$$416) {
  parentObj$$416.registerA = parentObj$$416.registerA & 247;
  return
}
function v492(parentObj$$415) {
  var v3647 = parentObj$$415.memoryWriter;
  var v3648 = parentObj$$415.registersHL;
  var v3649 = parentObj$$415.registersHL;
  var v9171 = parentObj$$415.memoryReader;
  JAM.call(JAM.get(v3647, v3648, JAM.policy.p1), v3647, [parentObj$$415, v3649, JAM.call(JAM.get(v9171, parentObj$$415.registersHL, JAM.policy.p1), v9171, [parentObj$$415, parentObj$$415.registersHL]) & 247]);
  return
}
function v491(parentObj$$414) {
  parentObj$$414.registersHL = parentObj$$414.registersHL & 65527;
  return
}
function v490(parentObj$$413) {
  parentObj$$413.registersHL = parentObj$$413.registersHL & 63487;
  return
}
function v489(parentObj$$412) {
  parentObj$$412.registerE = parentObj$$412.registerE & 247;
  return
}
function v488(parentObj$$411) {
  parentObj$$411.registerD = parentObj$$411.registerD & 247;
  return
}
function v487(parentObj$$410) {
  parentObj$$410.registerC = parentObj$$410.registerC & 247;
  return
}
function v486(parentObj$$409) {
  parentObj$$409.registerB = parentObj$$409.registerB & 247;
  return
}
function v485(parentObj$$408) {
  parentObj$$408.registerA = parentObj$$408.registerA & 251;
  return
}
function v484(parentObj$$407) {
  var v3651 = parentObj$$407.memoryWriter;
  var v3652 = parentObj$$407.registersHL;
  var v3653 = parentObj$$407.registersHL;
  var v9174 = parentObj$$407.memoryReader;
  JAM.call(JAM.get(v3651, v3652, JAM.policy.p1), v3651, [parentObj$$407, v3653, JAM.call(JAM.get(v9174, parentObj$$407.registersHL, JAM.policy.p1), v9174, [parentObj$$407, parentObj$$407.registersHL]) & 251]);
  return
}
function v483(parentObj$$406) {
  parentObj$$406.registersHL = parentObj$$406.registersHL & 65531;
  return
}
function v482(parentObj$$405) {
  parentObj$$405.registersHL = parentObj$$405.registersHL & 64511;
  return
}
function v481(parentObj$$404) {
  parentObj$$404.registerE = parentObj$$404.registerE & 251;
  return
}
function v480(parentObj$$403) {
  parentObj$$403.registerD = parentObj$$403.registerD & 251;
  return
}
function v479(parentObj$$402) {
  parentObj$$402.registerC = parentObj$$402.registerC & 251;
  return
}
function v478(parentObj$$401) {
  parentObj$$401.registerB = parentObj$$401.registerB & 251;
  return
}
function v477(parentObj$$400) {
  parentObj$$400.registerA = parentObj$$400.registerA & 253;
  return
}
function v476(parentObj$$399) {
  var v3655 = parentObj$$399.memoryWriter;
  var v3656 = parentObj$$399.registersHL;
  var v3657 = parentObj$$399.registersHL;
  var v9177 = parentObj$$399.memoryReader;
  JAM.call(JAM.get(v3655, v3656, JAM.policy.p1), v3655, [parentObj$$399, v3657, JAM.call(JAM.get(v9177, parentObj$$399.registersHL, JAM.policy.p1), v9177, [parentObj$$399, parentObj$$399.registersHL]) & 253]);
  return
}
function v475(parentObj$$398) {
  parentObj$$398.registersHL = parentObj$$398.registersHL & 65533;
  return
}
function v474(parentObj$$397) {
  parentObj$$397.registersHL = parentObj$$397.registersHL & 65023;
  return
}
function v473(parentObj$$396) {
  parentObj$$396.registerE = parentObj$$396.registerE & 253;
  return
}
function v472(parentObj$$395) {
  parentObj$$395.registerD = parentObj$$395.registerD & 253;
  return
}
function v471(parentObj$$394) {
  parentObj$$394.registerC = parentObj$$394.registerC & 253;
  return
}
function v470(parentObj$$393) {
  parentObj$$393.registerB = parentObj$$393.registerB & 253;
  return
}
function v469(parentObj$$392) {
  parentObj$$392.registerA = parentObj$$392.registerA & 254;
  return
}
function v468(parentObj$$391) {
  var v3659 = parentObj$$391.memoryWriter;
  var v3660 = parentObj$$391.registersHL;
  var v3661 = parentObj$$391.registersHL;
  var v9180 = parentObj$$391.memoryReader;
  JAM.call(JAM.get(v3659, v3660, JAM.policy.p1), v3659, [parentObj$$391, v3661, JAM.call(JAM.get(v9180, parentObj$$391.registersHL, JAM.policy.p1), v9180, [parentObj$$391, parentObj$$391.registersHL]) & 254]);
  return
}
function v467(parentObj$$390) {
  parentObj$$390.registersHL = parentObj$$390.registersHL & 65534;
  return
}
function v466(parentObj$$389) {
  parentObj$$389.registersHL = parentObj$$389.registersHL & 65279;
  return
}
function v465(parentObj$$388) {
  parentObj$$388.registerE = parentObj$$388.registerE & 254;
  return
}
function v464(parentObj$$387) {
  parentObj$$387.registerD = parentObj$$387.registerD & 254;
  return
}
function v463(parentObj$$386) {
  parentObj$$386.registerC = parentObj$$386.registerC & 254;
  return
}
function v462(parentObj$$385) {
  parentObj$$385.registerB = parentObj$$385.registerB & 254;
  return
}
function v461(parentObj$$384) {
  parentObj$$384.FHalfCarry = true;
  parentObj$$384.FSubtract = false;
  parentObj$$384.FZero = (parentObj$$384.registerA & 128) == 0;
  return
}
function v460(parentObj$$383) {
  parentObj$$383.FHalfCarry = true;
  parentObj$$383.FSubtract = false;
  var v3664 = parentObj$$383;
  var v10082 = parentObj$$383.memoryReader;
  v3664.FZero = (JAM.call(JAM.get(v10082, parentObj$$383.registersHL, JAM.policy.p1), v10082, [parentObj$$383, parentObj$$383.registersHL]) & 128) == 0;
  return
}
function v459(parentObj$$382) {
  parentObj$$382.FHalfCarry = true;
  parentObj$$382.FSubtract = false;
  parentObj$$382.FZero = (parentObj$$382.registersHL & 128) == 0;
  return
}
function v458(parentObj$$381) {
  parentObj$$381.FHalfCarry = true;
  parentObj$$381.FSubtract = false;
  parentObj$$381.FZero = (parentObj$$381.registersHL & 32768) == 0;
  return
}
function v457(parentObj$$380) {
  parentObj$$380.FHalfCarry = true;
  parentObj$$380.FSubtract = false;
  parentObj$$380.FZero = (parentObj$$380.registerE & 128) == 0;
  return
}
function v456(parentObj$$379) {
  parentObj$$379.FHalfCarry = true;
  parentObj$$379.FSubtract = false;
  parentObj$$379.FZero = (parentObj$$379.registerD & 128) == 0;
  return
}
function v455(parentObj$$378) {
  parentObj$$378.FHalfCarry = true;
  parentObj$$378.FSubtract = false;
  parentObj$$378.FZero = (parentObj$$378.registerC & 128) == 0;
  return
}
function v454(parentObj$$377) {
  parentObj$$377.FHalfCarry = true;
  parentObj$$377.FSubtract = false;
  parentObj$$377.FZero = (parentObj$$377.registerB & 128) == 0;
  return
}
function v453(parentObj$$376) {
  parentObj$$376.FHalfCarry = true;
  parentObj$$376.FSubtract = false;
  parentObj$$376.FZero = (parentObj$$376.registerA & 64) == 0;
  return
}
function v452(parentObj$$375) {
  parentObj$$375.FHalfCarry = true;
  parentObj$$375.FSubtract = false;
  var v3672 = parentObj$$375;
  var v10085 = parentObj$$375.memoryReader;
  v3672.FZero = (JAM.call(JAM.get(v10085, parentObj$$375.registersHL, JAM.policy.p1), v10085, [parentObj$$375, parentObj$$375.registersHL]) & 64) == 0;
  return
}
function v451(parentObj$$374) {
  parentObj$$374.FHalfCarry = true;
  parentObj$$374.FSubtract = false;
  parentObj$$374.FZero = (parentObj$$374.registersHL & 64) == 0;
  return
}
function v450(parentObj$$373) {
  parentObj$$373.FHalfCarry = true;
  parentObj$$373.FSubtract = false;
  parentObj$$373.FZero = (parentObj$$373.registersHL & 16384) == 0;
  return
}
function v449(parentObj$$372) {
  parentObj$$372.FHalfCarry = true;
  parentObj$$372.FSubtract = false;
  parentObj$$372.FZero = (parentObj$$372.registerE & 64) == 0;
  return
}
function v448(parentObj$$371) {
  parentObj$$371.FHalfCarry = true;
  parentObj$$371.FSubtract = false;
  parentObj$$371.FZero = (parentObj$$371.registerD & 64) == 0;
  return
}
function v447(parentObj$$370) {
  parentObj$$370.FHalfCarry = true;
  parentObj$$370.FSubtract = false;
  parentObj$$370.FZero = (parentObj$$370.registerC & 64) == 0;
  return
}
function v446(parentObj$$369) {
  parentObj$$369.FHalfCarry = true;
  parentObj$$369.FSubtract = false;
  parentObj$$369.FZero = (parentObj$$369.registerB & 64) == 0;
  return
}
function v445(parentObj$$368) {
  parentObj$$368.FHalfCarry = true;
  parentObj$$368.FSubtract = false;
  parentObj$$368.FZero = (parentObj$$368.registerA & 32) == 0;
  return
}
function v444(parentObj$$367) {
  parentObj$$367.FHalfCarry = true;
  parentObj$$367.FSubtract = false;
  var v3680 = parentObj$$367;
  var v10088 = parentObj$$367.memoryReader;
  v3680.FZero = (JAM.call(JAM.get(v10088, parentObj$$367.registersHL, JAM.policy.p1), v10088, [parentObj$$367, parentObj$$367.registersHL]) & 32) == 0;
  return
}
function v443(parentObj$$366) {
  parentObj$$366.FHalfCarry = true;
  parentObj$$366.FSubtract = false;
  parentObj$$366.FZero = (parentObj$$366.registersHL & 32) == 0;
  return
}
function v442(parentObj$$365) {
  parentObj$$365.FHalfCarry = true;
  parentObj$$365.FSubtract = false;
  parentObj$$365.FZero = (parentObj$$365.registersHL & 8192) == 0;
  return
}
function v441(parentObj$$364) {
  parentObj$$364.FHalfCarry = true;
  parentObj$$364.FSubtract = false;
  parentObj$$364.FZero = (parentObj$$364.registerE & 32) == 0;
  return
}
function v440(parentObj$$363) {
  parentObj$$363.FHalfCarry = true;
  parentObj$$363.FSubtract = false;
  parentObj$$363.FZero = (parentObj$$363.registerD & 32) == 0;
  return
}
function v439(parentObj$$362) {
  parentObj$$362.FHalfCarry = true;
  parentObj$$362.FSubtract = false;
  parentObj$$362.FZero = (parentObj$$362.registerC & 32) == 0;
  return
}
function v438(parentObj$$361) {
  parentObj$$361.FHalfCarry = true;
  parentObj$$361.FSubtract = false;
  parentObj$$361.FZero = (parentObj$$361.registerB & 32) == 0;
  return
}
function v437(parentObj$$360) {
  parentObj$$360.FHalfCarry = true;
  parentObj$$360.FSubtract = false;
  parentObj$$360.FZero = (parentObj$$360.registerA & 16) == 0;
  return
}
function v436(parentObj$$359) {
  parentObj$$359.FHalfCarry = true;
  parentObj$$359.FSubtract = false;
  var v3688 = parentObj$$359;
  var v10091 = parentObj$$359.memoryReader;
  v3688.FZero = (JAM.call(JAM.get(v10091, parentObj$$359.registersHL, JAM.policy.p1), v10091, [parentObj$$359, parentObj$$359.registersHL]) & 16) == 0;
  return
}
function v435(parentObj$$358) {
  parentObj$$358.FHalfCarry = true;
  parentObj$$358.FSubtract = false;
  parentObj$$358.FZero = (parentObj$$358.registersHL & 16) == 0;
  return
}
function v434(parentObj$$357) {
  parentObj$$357.FHalfCarry = true;
  parentObj$$357.FSubtract = false;
  parentObj$$357.FZero = (parentObj$$357.registersHL & 4096) == 0;
  return
}
function v433(parentObj$$356) {
  parentObj$$356.FHalfCarry = true;
  parentObj$$356.FSubtract = false;
  parentObj$$356.FZero = (parentObj$$356.registerE & 16) == 0;
  return
}
function v432(parentObj$$355) {
  parentObj$$355.FHalfCarry = true;
  parentObj$$355.FSubtract = false;
  parentObj$$355.FZero = (parentObj$$355.registerD & 16) == 0;
  return
}
function v431(parentObj$$354) {
  parentObj$$354.FHalfCarry = true;
  parentObj$$354.FSubtract = false;
  parentObj$$354.FZero = (parentObj$$354.registerC & 16) == 0;
  return
}
function v430(parentObj$$353) {
  parentObj$$353.FHalfCarry = true;
  parentObj$$353.FSubtract = false;
  parentObj$$353.FZero = (parentObj$$353.registerB & 16) == 0;
  return
}
function v429(parentObj$$352) {
  parentObj$$352.FHalfCarry = true;
  parentObj$$352.FSubtract = false;
  parentObj$$352.FZero = (parentObj$$352.registerA & 8) == 0;
  return
}
function v428(parentObj$$351) {
  parentObj$$351.FHalfCarry = true;
  parentObj$$351.FSubtract = false;
  var v3696 = parentObj$$351;
  var v10094 = parentObj$$351.memoryReader;
  v3696.FZero = (JAM.call(JAM.get(v10094, parentObj$$351.registersHL, JAM.policy.p1), v10094, [parentObj$$351, parentObj$$351.registersHL]) & 8) == 0;
  return
}
function v427(parentObj$$350) {
  parentObj$$350.FHalfCarry = true;
  parentObj$$350.FSubtract = false;
  parentObj$$350.FZero = (parentObj$$350.registersHL & 8) == 0;
  return
}
function v426(parentObj$$349) {
  parentObj$$349.FHalfCarry = true;
  parentObj$$349.FSubtract = false;
  parentObj$$349.FZero = (parentObj$$349.registersHL & 2048) == 0;
  return
}
function v425(parentObj$$348) {
  parentObj$$348.FHalfCarry = true;
  parentObj$$348.FSubtract = false;
  parentObj$$348.FZero = (parentObj$$348.registerE & 8) == 0;
  return
}
function v424(parentObj$$347) {
  parentObj$$347.FHalfCarry = true;
  parentObj$$347.FSubtract = false;
  parentObj$$347.FZero = (parentObj$$347.registerD & 8) == 0;
  return
}
function v423(parentObj$$346) {
  parentObj$$346.FHalfCarry = true;
  parentObj$$346.FSubtract = false;
  parentObj$$346.FZero = (parentObj$$346.registerC & 8) == 0;
  return
}
function v422(parentObj$$345) {
  parentObj$$345.FHalfCarry = true;
  parentObj$$345.FSubtract = false;
  parentObj$$345.FZero = (parentObj$$345.registerB & 8) == 0;
  return
}
function v421(parentObj$$344) {
  parentObj$$344.FHalfCarry = true;
  parentObj$$344.FSubtract = false;
  parentObj$$344.FZero = (parentObj$$344.registerA & 4) == 0;
  return
}
function v420(parentObj$$343) {
  parentObj$$343.FHalfCarry = true;
  parentObj$$343.FSubtract = false;
  var v3704 = parentObj$$343;
  var v10097 = parentObj$$343.memoryReader;
  v3704.FZero = (JAM.call(JAM.get(v10097, parentObj$$343.registersHL, JAM.policy.p1), v10097, [parentObj$$343, parentObj$$343.registersHL]) & 4) == 0;
  return
}
function v419(parentObj$$342) {
  parentObj$$342.FHalfCarry = true;
  parentObj$$342.FSubtract = false;
  parentObj$$342.FZero = (parentObj$$342.registersHL & 4) == 0;
  return
}
function v418(parentObj$$341) {
  parentObj$$341.FHalfCarry = true;
  parentObj$$341.FSubtract = false;
  parentObj$$341.FZero = (parentObj$$341.registersHL & 1024) == 0;
  return
}
function v417(parentObj$$340) {
  parentObj$$340.FHalfCarry = true;
  parentObj$$340.FSubtract = false;
  parentObj$$340.FZero = (parentObj$$340.registerE & 4) == 0;
  return
}
function v416(parentObj$$339) {
  parentObj$$339.FHalfCarry = true;
  parentObj$$339.FSubtract = false;
  parentObj$$339.FZero = (parentObj$$339.registerD & 4) == 0;
  return
}
function v415(parentObj$$338) {
  parentObj$$338.FHalfCarry = true;
  parentObj$$338.FSubtract = false;
  parentObj$$338.FZero = (parentObj$$338.registerC & 4) == 0;
  return
}
function v414(parentObj$$337) {
  parentObj$$337.FHalfCarry = true;
  parentObj$$337.FSubtract = false;
  parentObj$$337.FZero = (parentObj$$337.registerB & 4) == 0;
  return
}
function v413(parentObj$$336) {
  parentObj$$336.FHalfCarry = true;
  parentObj$$336.FSubtract = false;
  parentObj$$336.FZero = (parentObj$$336.registerA & 2) == 0;
  return
}
function v412(parentObj$$335) {
  parentObj$$335.FHalfCarry = true;
  parentObj$$335.FSubtract = false;
  var v3712 = parentObj$$335;
  var v10100 = parentObj$$335.memoryReader;
  v3712.FZero = (JAM.call(JAM.get(v10100, parentObj$$335.registersHL, JAM.policy.p1), v10100, [parentObj$$335, parentObj$$335.registersHL]) & 2) == 0;
  return
}
function v411(parentObj$$334) {
  parentObj$$334.FHalfCarry = true;
  parentObj$$334.FSubtract = false;
  parentObj$$334.FZero = (parentObj$$334.registersHL & 2) == 0;
  return
}
function v410(parentObj$$333) {
  parentObj$$333.FHalfCarry = true;
  parentObj$$333.FSubtract = false;
  parentObj$$333.FZero = (parentObj$$333.registersHL & 512) == 0;
  return
}
function v409(parentObj$$332) {
  parentObj$$332.FHalfCarry = true;
  parentObj$$332.FSubtract = false;
  parentObj$$332.FZero = (parentObj$$332.registerE & 2) == 0;
  return
}
function v408(parentObj$$331) {
  parentObj$$331.FHalfCarry = true;
  parentObj$$331.FSubtract = false;
  parentObj$$331.FZero = (parentObj$$331.registerD & 2) == 0;
  return
}
function v407(parentObj$$330) {
  parentObj$$330.FHalfCarry = true;
  parentObj$$330.FSubtract = false;
  parentObj$$330.FZero = (parentObj$$330.registerC & 2) == 0;
  return
}
function v406(parentObj$$329) {
  parentObj$$329.FHalfCarry = true;
  parentObj$$329.FSubtract = false;
  parentObj$$329.FZero = (parentObj$$329.registerB & 2) == 0;
  return
}
function v405(parentObj$$328) {
  parentObj$$328.FHalfCarry = true;
  parentObj$$328.FSubtract = false;
  parentObj$$328.FZero = (parentObj$$328.registerA & 1) == 0;
  return
}
function v404(parentObj$$327) {
  parentObj$$327.FHalfCarry = true;
  parentObj$$327.FSubtract = false;
  var v3720 = parentObj$$327;
  var v10103 = parentObj$$327.memoryReader;
  v3720.FZero = (JAM.call(JAM.get(v10103, parentObj$$327.registersHL, JAM.policy.p1), v10103, [parentObj$$327, parentObj$$327.registersHL]) & 1) == 0;
  return
}
function v403(parentObj$$326) {
  parentObj$$326.FHalfCarry = true;
  parentObj$$326.FSubtract = false;
  parentObj$$326.FZero = (parentObj$$326.registersHL & 1) == 0;
  return
}
function v402(parentObj$$325) {
  parentObj$$325.FHalfCarry = true;
  parentObj$$325.FSubtract = false;
  parentObj$$325.FZero = (parentObj$$325.registersHL & 256) == 0;
  return
}
function v401(parentObj$$324) {
  parentObj$$324.FHalfCarry = true;
  parentObj$$324.FSubtract = false;
  parentObj$$324.FZero = (parentObj$$324.registerE & 1) == 0;
  return
}
function v400(parentObj$$323) {
  parentObj$$323.FHalfCarry = true;
  parentObj$$323.FSubtract = false;
  parentObj$$323.FZero = (parentObj$$323.registerD & 1) == 0;
  return
}
function v399(parentObj$$322) {
  parentObj$$322.FHalfCarry = true;
  parentObj$$322.FSubtract = false;
  parentObj$$322.FZero = (parentObj$$322.registerC & 1) == 0;
  return
}
function v398(parentObj$$321) {
  parentObj$$321.FHalfCarry = true;
  parentObj$$321.FSubtract = false;
  parentObj$$321.FZero = (parentObj$$321.registerB & 1) == 0;
  return
}
function v397(parentObj$$320) {
  parentObj$$320.FCarry = (parentObj$$320.registerA & 1) == 1;
  parentObj$$320.registerA = parentObj$$320.registerA >> 1;
  parentObj$$320.FHalfCarry = parentObj$$320.FSubtract = false;
  parentObj$$320.FZero = parentObj$$320.registerA == 0;
  return
}
function v396(parentObj$$319) {
  var v3729 = parentObj$$319.memoryReader;
  var temp_var$$19 = JAM.call(JAM.get(v3729, parentObj$$319.registersHL, JAM.policy.p1), v3729, [parentObj$$319, parentObj$$319.registersHL]);
  parentObj$$319.FCarry = (temp_var$$19 & 1) == 1;
  var v3733 = parentObj$$319.memoryWriter;
  JAM.call(JAM.get(v3733, parentObj$$319.registersHL, JAM.policy.p1), v3733, [parentObj$$319, parentObj$$319.registersHL, temp_var$$19 >> 1]);
  parentObj$$319.FHalfCarry = parentObj$$319.FSubtract = false;
  parentObj$$319.FZero = temp_var$$19 < 2;
  return
}
function v395(parentObj$$318) {
  parentObj$$318.FCarry = (parentObj$$318.registersHL & 1) == 1;
  parentObj$$318.registersHL = parentObj$$318.registersHL & 65280 | (parentObj$$318.registersHL & 255) >> 1;
  parentObj$$318.FHalfCarry = parentObj$$318.FSubtract = false;
  parentObj$$318.FZero = (parentObj$$318.registersHL & 255) == 0;
  return
}
function v394(parentObj$$317) {
  parentObj$$317.FCarry = (parentObj$$317.registersHL & 256) == 256;
  parentObj$$317.registersHL = parentObj$$317.registersHL >> 1 & 65280 | parentObj$$317.registersHL & 255;
  parentObj$$317.FHalfCarry = parentObj$$317.FSubtract = false;
  parentObj$$317.FZero = parentObj$$317.registersHL < 256;
  return
}
function v393(parentObj$$316) {
  parentObj$$316.FCarry = (parentObj$$316.registerE & 1) == 1;
  parentObj$$316.registerE = parentObj$$316.registerE >> 1;
  parentObj$$316.FHalfCarry = parentObj$$316.FSubtract = false;
  parentObj$$316.FZero = parentObj$$316.registerE == 0;
  return
}
function v392(parentObj$$315) {
  parentObj$$315.FCarry = (parentObj$$315.registerD & 1) == 1;
  parentObj$$315.registerD = parentObj$$315.registerD >> 1;
  parentObj$$315.FHalfCarry = parentObj$$315.FSubtract = false;
  parentObj$$315.FZero = parentObj$$315.registerD == 0;
  return
}
function v391(parentObj$$314) {
  parentObj$$314.FCarry = (parentObj$$314.registerC & 1) == 1;
  parentObj$$314.registerC = parentObj$$314.registerC >> 1;
  parentObj$$314.FHalfCarry = parentObj$$314.FSubtract = false;
  parentObj$$314.FZero = parentObj$$314.registerC == 0;
  return
}
function v390(parentObj$$313) {
  parentObj$$313.FCarry = (parentObj$$313.registerB & 1) == 1;
  parentObj$$313.registerB = parentObj$$313.registerB >> 1;
  parentObj$$313.FHalfCarry = parentObj$$313.FSubtract = false;
  parentObj$$313.FZero = parentObj$$313.registerB == 0;
  return
}
function v389(parentObj$$312) {
  parentObj$$312.registerA = (parentObj$$312.registerA & 15) << 4 | parentObj$$312.registerA >> 4;
  parentObj$$312.FZero = parentObj$$312.registerA == 0;
  parentObj$$312.FCarry = parentObj$$312.FHalfCarry = parentObj$$312.FSubtract = false;
  return
}
function v388(parentObj$$311) {
  var v3756 = parentObj$$311.memoryReader;
  var temp_var$$18 = JAM.call(JAM.get(v3756, parentObj$$311.registersHL, JAM.policy.p1), v3756, [parentObj$$311, parentObj$$311.registersHL]);
  temp_var$$18 = (temp_var$$18 & 15) << 4 | temp_var$$18 >> 4;
  var v3761 = parentObj$$311.memoryWriter;
  JAM.call(JAM.get(v3761, parentObj$$311.registersHL, JAM.policy.p1), v3761, [parentObj$$311, parentObj$$311.registersHL, temp_var$$18]);
  parentObj$$311.FZero = temp_var$$18 == 0;
  parentObj$$311.FCarry = parentObj$$311.FHalfCarry = parentObj$$311.FSubtract = false;
  return
}
function v387(parentObj$$310) {
  parentObj$$310.registersHL = parentObj$$310.registersHL & 65280 | (parentObj$$310.registersHL & 15) << 4 | (parentObj$$310.registersHL & 240) >> 4;
  parentObj$$310.FZero = (parentObj$$310.registersHL & 255) == 0;
  parentObj$$310.FCarry = parentObj$$310.FHalfCarry = parentObj$$310.FSubtract = false;
  return
}
function v386(parentObj$$309) {
  parentObj$$309.registersHL = (parentObj$$309.registersHL & 3840) << 4 | (parentObj$$309.registersHL & 61440) >> 4 | parentObj$$309.registersHL & 255;
  parentObj$$309.FZero = parentObj$$309.registersHL < 256;
  parentObj$$309.FCarry = parentObj$$309.FHalfCarry = parentObj$$309.FSubtract = false;
  return
}
function v385(parentObj$$308) {
  parentObj$$308.registerE = (parentObj$$308.registerE & 15) << 4 | parentObj$$308.registerE >> 4;
  parentObj$$308.FZero = parentObj$$308.registerE == 0;
  parentObj$$308.FCarry = parentObj$$308.FHalfCarry = parentObj$$308.FSubtract = false;
  return
}
function v384(parentObj$$307) {
  parentObj$$307.registerD = (parentObj$$307.registerD & 15) << 4 | parentObj$$307.registerD >> 4;
  parentObj$$307.FZero = parentObj$$307.registerD == 0;
  parentObj$$307.FCarry = parentObj$$307.FHalfCarry = parentObj$$307.FSubtract = false;
  return
}
function v383(parentObj$$306) {
  parentObj$$306.registerC = (parentObj$$306.registerC & 15) << 4 | parentObj$$306.registerC >> 4;
  parentObj$$306.FZero = parentObj$$306.registerC == 0;
  parentObj$$306.FCarry = parentObj$$306.FHalfCarry = parentObj$$306.FSubtract = false;
  return
}
function v382(parentObj$$305) {
  parentObj$$305.registerB = (parentObj$$305.registerB & 15) << 4 | parentObj$$305.registerB >> 4;
  parentObj$$305.FZero = parentObj$$305.registerB == 0;
  parentObj$$305.FCarry = parentObj$$305.FHalfCarry = parentObj$$305.FSubtract = false;
  return
}
function v381(parentObj$$304) {
  parentObj$$304.FCarry = (parentObj$$304.registerA & 1) == 1;
  parentObj$$304.registerA = parentObj$$304.registerA & 128 | parentObj$$304.registerA >> 1;
  parentObj$$304.FHalfCarry = parentObj$$304.FSubtract = false;
  parentObj$$304.FZero = parentObj$$304.registerA == 0;
  return
}
function v380(parentObj$$303) {
  var v3786 = parentObj$$303.memoryReader;
  var temp_var$$17 = JAM.call(JAM.get(v3786, parentObj$$303.registersHL, JAM.policy.p1), v3786, [parentObj$$303, parentObj$$303.registersHL]);
  parentObj$$303.FCarry = (temp_var$$17 & 1) == 1;
  temp_var$$17 = temp_var$$17 & 128 | temp_var$$17 >> 1;
  var v3792 = parentObj$$303.memoryWriter;
  JAM.call(JAM.get(v3792, parentObj$$303.registersHL, JAM.policy.p1), v3792, [parentObj$$303, parentObj$$303.registersHL, temp_var$$17]);
  parentObj$$303.FHalfCarry = parentObj$$303.FSubtract = false;
  parentObj$$303.FZero = temp_var$$17 == 0;
  return
}
function v379(parentObj$$302) {
  parentObj$$302.FCarry = (parentObj$$302.registersHL & 1) == 1;
  parentObj$$302.registersHL = parentObj$$302.registersHL & 65408 | (parentObj$$302.registersHL & 255) >> 1;
  parentObj$$302.FHalfCarry = parentObj$$302.FSubtract = false;
  parentObj$$302.FZero = (parentObj$$302.registersHL & 255) == 0;
  return
}
function v378(parentObj$$301) {
  parentObj$$301.FCarry = (parentObj$$301.registersHL & 256) == 256;
  parentObj$$301.registersHL = parentObj$$301.registersHL >> 1 & 65280 | parentObj$$301.registersHL & 33023;
  parentObj$$301.FHalfCarry = parentObj$$301.FSubtract = false;
  parentObj$$301.FZero = parentObj$$301.registersHL < 256;
  return
}
function v377(parentObj$$300) {
  parentObj$$300.FCarry = (parentObj$$300.registerE & 1) == 1;
  parentObj$$300.registerE = parentObj$$300.registerE & 128 | parentObj$$300.registerE >> 1;
  parentObj$$300.FHalfCarry = parentObj$$300.FSubtract = false;
  parentObj$$300.FZero = parentObj$$300.registerE == 0;
  return
}
function v376(parentObj$$299) {
  parentObj$$299.FCarry = (parentObj$$299.registerD & 1) == 1;
  parentObj$$299.registerD = parentObj$$299.registerD & 128 | parentObj$$299.registerD >> 1;
  parentObj$$299.FHalfCarry = parentObj$$299.FSubtract = false;
  parentObj$$299.FZero = parentObj$$299.registerD == 0;
  return
}
function v375(parentObj$$298) {
  parentObj$$298.FCarry = (parentObj$$298.registerC & 1) == 1;
  parentObj$$298.registerC = parentObj$$298.registerC & 128 | parentObj$$298.registerC >> 1;
  parentObj$$298.FHalfCarry = parentObj$$298.FSubtract = false;
  parentObj$$298.FZero = parentObj$$298.registerC == 0;
  return
}
function v374(parentObj$$297) {
  parentObj$$297.FCarry = (parentObj$$297.registerB & 1) == 1;
  parentObj$$297.registerB = parentObj$$297.registerB & 128 | parentObj$$297.registerB >> 1;
  parentObj$$297.FHalfCarry = parentObj$$297.FSubtract = false;
  parentObj$$297.FZero = parentObj$$297.registerB == 0;
  return
}
function v373(parentObj$$296) {
  parentObj$$296.FCarry = parentObj$$296.registerA > 127;
  parentObj$$296.registerA = parentObj$$296.registerA << 1 & 255;
  parentObj$$296.FHalfCarry = parentObj$$296.FSubtract = false;
  parentObj$$296.FZero = parentObj$$296.registerA == 0;
  return
}
function v372(parentObj$$295) {
  var v3822 = parentObj$$295.memoryReader;
  var temp_var$$16 = JAM.call(JAM.get(v3822, parentObj$$295.registersHL, JAM.policy.p1), v3822, [parentObj$$295, parentObj$$295.registersHL]);
  parentObj$$295.FCarry = temp_var$$16 > 127;
  temp_var$$16 = temp_var$$16 << 1 & 255;
  var v3826 = parentObj$$295.memoryWriter;
  JAM.call(JAM.get(v3826, parentObj$$295.registersHL, JAM.policy.p1), v3826, [parentObj$$295, parentObj$$295.registersHL, temp_var$$16]);
  parentObj$$295.FHalfCarry = parentObj$$295.FSubtract = false;
  parentObj$$295.FZero = temp_var$$16 == 0;
  return
}
function v371(parentObj$$294) {
  parentObj$$294.FCarry = (parentObj$$294.registersHL & 128) == 128;
  parentObj$$294.registersHL = parentObj$$294.registersHL & 65280 | parentObj$$294.registersHL << 1 & 255;
  parentObj$$294.FHalfCarry = parentObj$$294.FSubtract = false;
  parentObj$$294.FZero = (parentObj$$294.registersHL & 255) == 0;
  return
}
function v370(parentObj$$293) {
  parentObj$$293.FCarry = parentObj$$293.registersHL > 32767;
  parentObj$$293.registersHL = parentObj$$293.registersHL << 1 & 65024 | parentObj$$293.registersHL & 255;
  parentObj$$293.FHalfCarry = parentObj$$293.FSubtract = false;
  parentObj$$293.FZero = parentObj$$293.registersHL < 256;
  return
}
function v369(parentObj$$292) {
  parentObj$$292.FCarry = parentObj$$292.registerE > 127;
  parentObj$$292.registerE = parentObj$$292.registerE << 1 & 255;
  parentObj$$292.FHalfCarry = parentObj$$292.FSubtract = false;
  parentObj$$292.FZero = parentObj$$292.registerE == 0;
  return
}
function v368(parentObj$$291) {
  parentObj$$291.FCarry = parentObj$$291.registerD > 127;
  parentObj$$291.registerD = parentObj$$291.registerD << 1 & 255;
  parentObj$$291.FHalfCarry = parentObj$$291.FSubtract = false;
  parentObj$$291.FZero = parentObj$$291.registerD == 0;
  return
}
function v367(parentObj$$290) {
  parentObj$$290.FCarry = parentObj$$290.registerC > 127;
  parentObj$$290.registerC = parentObj$$290.registerC << 1 & 255;
  parentObj$$290.FHalfCarry = parentObj$$290.FSubtract = false;
  parentObj$$290.FZero = parentObj$$290.registerC == 0;
  return
}
function v366(parentObj$$289) {
  parentObj$$289.FCarry = parentObj$$289.registerB > 127;
  parentObj$$289.registerB = parentObj$$289.registerB << 1 & 255;
  parentObj$$289.FHalfCarry = parentObj$$289.FSubtract = false;
  parentObj$$289.FZero = parentObj$$289.registerB == 0;
  return
}
function v365(parentObj$$288) {
  var newFCarry$$15 = (parentObj$$288.registerA & 1) == 1;
  var v7393;
  if(parentObj$$288.FCarry) {
    v7393 = 128
  }else {
    v7393 = 0
  }
  parentObj$$288.registerA = v7393 | parentObj$$288.registerA >> 1;
  parentObj$$288.FCarry = newFCarry$$15;
  parentObj$$288.FHalfCarry = parentObj$$288.FSubtract = false;
  parentObj$$288.FZero = parentObj$$288.registerA == 0;
  return
}
function v364(parentObj$$287) {
  var v3853 = parentObj$$287.memoryReader;
  var temp_var$$15 = JAM.call(JAM.get(v3853, parentObj$$287.registersHL, JAM.policy.p1), v3853, [parentObj$$287, parentObj$$287.registersHL]);
  var newFCarry$$14 = (temp_var$$15 & 1) == 1;
  var v7395;
  if(parentObj$$287.FCarry) {
    v7395 = 128
  }else {
    v7395 = 0
  }
  temp_var$$15 = v7395 | temp_var$$15 >> 1;
  parentObj$$287.FCarry = newFCarry$$14;
  var v3859 = parentObj$$287.memoryWriter;
  JAM.call(JAM.get(v3859, parentObj$$287.registersHL, JAM.policy.p1), v3859, [parentObj$$287, parentObj$$287.registersHL, temp_var$$15]);
  parentObj$$287.FHalfCarry = parentObj$$287.FSubtract = false;
  parentObj$$287.FZero = temp_var$$15 == 0;
  return
}
function v363(parentObj$$286) {
  var newFCarry$$13 = (parentObj$$286.registersHL & 1) == 1;
  var v7397 = parentObj$$286.registersHL & 65280;
  var v9210;
  if(parentObj$$286.FCarry) {
    v9210 = 128
  }else {
    v9210 = 0
  }
  parentObj$$286.registersHL = v7397 | v9210 | (parentObj$$286.registersHL & 255) >> 1;
  parentObj$$286.FCarry = newFCarry$$13;
  parentObj$$286.FHalfCarry = parentObj$$286.FSubtract = false;
  parentObj$$286.FZero = (parentObj$$286.registersHL & 255) == 0;
  return
}
function v362(parentObj$$285) {
  var newFCarry$$12 = (parentObj$$285.registersHL & 256) == 256;
  var v9212;
  if(parentObj$$285.FCarry) {
    v9212 = 32768
  }else {
    v9212 = 0
  }
  parentObj$$285.registersHL = v9212 | parentObj$$285.registersHL >> 1 & 65280 | parentObj$$285.registersHL & 255;
  parentObj$$285.FCarry = newFCarry$$12;
  parentObj$$285.FHalfCarry = parentObj$$285.FSubtract = false;
  parentObj$$285.FZero = parentObj$$285.registersHL < 256;
  return
}
function v361(parentObj$$284) {
  var newFCarry$$11 = (parentObj$$284.registerE & 1) == 1;
  var v7406;
  if(parentObj$$284.FCarry) {
    v7406 = 128
  }else {
    v7406 = 0
  }
  parentObj$$284.registerE = v7406 | parentObj$$284.registerE >> 1;
  parentObj$$284.FCarry = newFCarry$$11;
  parentObj$$284.FHalfCarry = parentObj$$284.FSubtract = false;
  parentObj$$284.FZero = parentObj$$284.registerE == 0;
  return
}
function v360(parentObj$$283) {
  var newFCarry$$10 = (parentObj$$283.registerD & 1) == 1;
  var v7409;
  if(parentObj$$283.FCarry) {
    v7409 = 128
  }else {
    v7409 = 0
  }
  parentObj$$283.registerD = v7409 | parentObj$$283.registerD >> 1;
  parentObj$$283.FCarry = newFCarry$$10;
  parentObj$$283.FHalfCarry = parentObj$$283.FSubtract = false;
  parentObj$$283.FZero = parentObj$$283.registerD == 0;
  return
}
function v359(parentObj$$282) {
  var newFCarry$$9 = (parentObj$$282.registerC & 1) == 1;
  var v7412;
  if(parentObj$$282.FCarry) {
    v7412 = 128
  }else {
    v7412 = 0
  }
  parentObj$$282.registerC = v7412 | parentObj$$282.registerC >> 1;
  parentObj$$282.FCarry = newFCarry$$9;
  parentObj$$282.FHalfCarry = parentObj$$282.FSubtract = false;
  parentObj$$282.FZero = parentObj$$282.registerC == 0;
  return
}
function v358(parentObj$$281) {
  var newFCarry$$8 = (parentObj$$281.registerB & 1) == 1;
  var v7415;
  if(parentObj$$281.FCarry) {
    v7415 = 128
  }else {
    v7415 = 0
  }
  parentObj$$281.registerB = v7415 | parentObj$$281.registerB >> 1;
  parentObj$$281.FCarry = newFCarry$$8;
  parentObj$$281.FHalfCarry = parentObj$$281.FSubtract = false;
  parentObj$$281.FZero = parentObj$$281.registerB == 0;
  return
}
function v357(parentObj$$280) {
  var newFCarry$$7 = parentObj$$280.registerA > 127;
  var v3887 = parentObj$$280.registerA << 1 & 255;
  var v7418;
  if(parentObj$$280.FCarry) {
    v7418 = 1
  }else {
    v7418 = 0
  }
  parentObj$$280.registerA = v3887 | v7418;
  parentObj$$280.FCarry = newFCarry$$7;
  parentObj$$280.FHalfCarry = parentObj$$280.FSubtract = false;
  parentObj$$280.FZero = parentObj$$280.registerA == 0;
  return
}
function v356(parentObj$$279) {
  var v3890 = parentObj$$279.memoryReader;
  var temp_var$$14 = JAM.call(JAM.get(v3890, parentObj$$279.registersHL, JAM.policy.p1), v3890, [parentObj$$279, parentObj$$279.registersHL]);
  var newFCarry$$6 = temp_var$$14 > 127;
  var v3893 = temp_var$$14 << 1 & 255;
  var v7420;
  if(parentObj$$279.FCarry) {
    v7420 = 1
  }else {
    v7420 = 0
  }
  temp_var$$14 = v3893 | v7420;
  parentObj$$279.FCarry = newFCarry$$6;
  var v3895 = parentObj$$279.memoryWriter;
  JAM.call(JAM.get(v3895, parentObj$$279.registersHL, JAM.policy.p1), v3895, [parentObj$$279, parentObj$$279.registersHL, temp_var$$14]);
  parentObj$$279.FHalfCarry = parentObj$$279.FSubtract = false;
  parentObj$$279.FZero = temp_var$$14 == 0;
  return
}
function v355(parentObj$$278) {
  var newFCarry$$5 = (parentObj$$278.registersHL & 128) == 128;
  var v3899 = parentObj$$278.registersHL & 65280 | parentObj$$278.registersHL << 1 & 255;
  var v7424;
  if(parentObj$$278.FCarry) {
    v7424 = 1
  }else {
    v7424 = 0
  }
  parentObj$$278.registersHL = v3899 | v7424;
  parentObj$$278.FCarry = newFCarry$$5;
  parentObj$$278.FHalfCarry = parentObj$$278.FSubtract = false;
  parentObj$$278.FZero = (parentObj$$278.registersHL & 255) == 0;
  return
}
function v354(parentObj$$277) {
  var newFCarry$$4 = parentObj$$277.registersHL > 32767;
  var v7426 = parentObj$$277.registersHL << 1 & 65024;
  var v9225;
  if(parentObj$$277.FCarry) {
    v9225 = 256
  }else {
    v9225 = 0
  }
  parentObj$$277.registersHL = v7426 | v9225 | parentObj$$277.registersHL & 255;
  parentObj$$277.FCarry = newFCarry$$4;
  parentObj$$277.FHalfCarry = parentObj$$277.FSubtract = false;
  parentObj$$277.FZero = parentObj$$277.registersHL < 256;
  return
}
function v353(parentObj$$276) {
  var newFCarry$$3 = parentObj$$276.registerE > 127;
  var v3907 = parentObj$$276.registerE << 1 & 255;
  var v7430;
  if(parentObj$$276.FCarry) {
    v7430 = 1
  }else {
    v7430 = 0
  }
  parentObj$$276.registerE = v3907 | v7430;
  parentObj$$276.FCarry = newFCarry$$3;
  parentObj$$276.FHalfCarry = parentObj$$276.FSubtract = false;
  parentObj$$276.FZero = parentObj$$276.registerE == 0;
  return
}
function v352(parentObj$$275) {
  var newFCarry$$2 = parentObj$$275.registerD > 127;
  var v3911 = parentObj$$275.registerD << 1 & 255;
  var v7432;
  if(parentObj$$275.FCarry) {
    v7432 = 1
  }else {
    v7432 = 0
  }
  parentObj$$275.registerD = v3911 | v7432;
  parentObj$$275.FCarry = newFCarry$$2;
  parentObj$$275.FHalfCarry = parentObj$$275.FSubtract = false;
  parentObj$$275.FZero = parentObj$$275.registerD == 0;
  return
}
function v351(parentObj$$274) {
  var newFCarry$$1 = parentObj$$274.registerC > 127;
  var v3915 = parentObj$$274.registerC << 1 & 255;
  var v7434;
  if(parentObj$$274.FCarry) {
    v7434 = 1
  }else {
    v7434 = 0
  }
  parentObj$$274.registerC = v3915 | v7434;
  parentObj$$274.FCarry = newFCarry$$1;
  parentObj$$274.FHalfCarry = parentObj$$274.FSubtract = false;
  parentObj$$274.FZero = parentObj$$274.registerC == 0;
  return
}
function v350(parentObj$$273) {
  var newFCarry = parentObj$$273.registerB > 127;
  var v3919 = parentObj$$273.registerB << 1 & 255;
  var v7436;
  if(parentObj$$273.FCarry) {
    v7436 = 1
  }else {
    v7436 = 0
  }
  parentObj$$273.registerB = v3919 | v7436;
  parentObj$$273.FCarry = newFCarry;
  parentObj$$273.FHalfCarry = parentObj$$273.FSubtract = false;
  parentObj$$273.FZero = parentObj$$273.registerB == 0;
  return
}
function v349(parentObj$$272) {
  parentObj$$272.FCarry = (parentObj$$272.registerA & 1) == 1;
  var v7438;
  if(parentObj$$272.FCarry) {
    v7438 = 128
  }else {
    v7438 = 0
  }
  parentObj$$272.registerA = v7438 | parentObj$$272.registerA >> 1;
  parentObj$$272.FHalfCarry = parentObj$$272.FSubtract = false;
  parentObj$$272.FZero = parentObj$$272.registerA == 0;
  return
}
function v348(parentObj$$271) {
  var v3926 = parentObj$$271.memoryReader;
  var temp_var$$13 = JAM.call(JAM.get(v3926, parentObj$$271.registersHL, JAM.policy.p1), v3926, [parentObj$$271, parentObj$$271.registersHL]);
  parentObj$$271.FCarry = (temp_var$$13 & 1) == 1;
  var v7440;
  if(parentObj$$271.FCarry) {
    v7440 = 128
  }else {
    v7440 = 0
  }
  temp_var$$13 = v7440 | temp_var$$13 >> 1;
  var v3932 = parentObj$$271.memoryWriter;
  JAM.call(JAM.get(v3932, parentObj$$271.registersHL, JAM.policy.p1), v3932, [parentObj$$271, parentObj$$271.registersHL, temp_var$$13]);
  parentObj$$271.FHalfCarry = parentObj$$271.FSubtract = false;
  parentObj$$271.FZero = temp_var$$13 == 0;
  return
}
function v347(parentObj$$270) {
  parentObj$$270.FCarry = (parentObj$$270.registersHL & 1) == 1;
  var v7442 = parentObj$$270.registersHL & 65280;
  var v9237;
  if(parentObj$$270.FCarry) {
    v9237 = 128
  }else {
    v9237 = 0
  }
  parentObj$$270.registersHL = v7442 | v9237 | (parentObj$$270.registersHL & 255) >> 1;
  parentObj$$270.FHalfCarry = parentObj$$270.FSubtract = false;
  parentObj$$270.FZero = (parentObj$$270.registersHL & 255) == 0;
  return
}
function v346(parentObj$$269) {
  parentObj$$269.FCarry = (parentObj$$269.registersHL & 256) == 256;
  var v9239;
  if(parentObj$$269.FCarry) {
    v9239 = 32768
  }else {
    v9239 = 0
  }
  parentObj$$269.registersHL = v9239 | parentObj$$269.registersHL >> 1 & 65280 | parentObj$$269.registersHL & 255;
  parentObj$$269.FHalfCarry = parentObj$$269.FSubtract = false;
  parentObj$$269.FZero = parentObj$$269.registersHL < 256;
  return
}
function v345(parentObj$$268) {
  parentObj$$268.FCarry = (parentObj$$268.registerE & 1) == 1;
  var v7451;
  if(parentObj$$268.FCarry) {
    v7451 = 128
  }else {
    v7451 = 0
  }
  parentObj$$268.registerE = v7451 | parentObj$$268.registerE >> 1;
  parentObj$$268.FHalfCarry = parentObj$$268.FSubtract = false;
  parentObj$$268.FZero = parentObj$$268.registerE == 0;
  return
}
function v344(parentObj$$267) {
  parentObj$$267.FCarry = (parentObj$$267.registerD & 1) == 1;
  var v7454;
  if(parentObj$$267.FCarry) {
    v7454 = 128
  }else {
    v7454 = 0
  }
  parentObj$$267.registerD = v7454 | parentObj$$267.registerD >> 1;
  parentObj$$267.FHalfCarry = parentObj$$267.FSubtract = false;
  parentObj$$267.FZero = parentObj$$267.registerD == 0;
  return
}
function v343(parentObj$$266) {
  parentObj$$266.FCarry = (parentObj$$266.registerC & 1) == 1;
  var v7457;
  if(parentObj$$266.FCarry) {
    v7457 = 128
  }else {
    v7457 = 0
  }
  parentObj$$266.registerC = v7457 | parentObj$$266.registerC >> 1;
  parentObj$$266.FHalfCarry = parentObj$$266.FSubtract = false;
  parentObj$$266.FZero = parentObj$$266.registerC == 0;
  return
}
function v342(parentObj$$265) {
  parentObj$$265.FCarry = (parentObj$$265.registerB & 1) == 1;
  var v7460;
  if(parentObj$$265.FCarry) {
    v7460 = 128
  }else {
    v7460 = 0
  }
  parentObj$$265.registerB = v7460 | parentObj$$265.registerB >> 1;
  parentObj$$265.FHalfCarry = parentObj$$265.FSubtract = false;
  parentObj$$265.FZero = parentObj$$265.registerB == 0;
  return
}
function v341(parentObj$$264) {
  parentObj$$264.FCarry = parentObj$$264.registerA > 127;
  var v3960 = parentObj$$264.registerA << 1 & 255;
  var v7463;
  if(parentObj$$264.FCarry) {
    v7463 = 1
  }else {
    v7463 = 0
  }
  parentObj$$264.registerA = v3960 | v7463;
  parentObj$$264.FHalfCarry = parentObj$$264.FSubtract = false;
  parentObj$$264.FZero = parentObj$$264.registerA == 0;
  return
}
function v340(parentObj$$263) {
  var v3963 = parentObj$$263.memoryReader;
  var temp_var$$12 = JAM.call(JAM.get(v3963, parentObj$$263.registersHL, JAM.policy.p1), v3963, [parentObj$$263, parentObj$$263.registersHL]);
  parentObj$$263.FCarry = temp_var$$12 > 127;
  var v3966 = temp_var$$12 << 1 & 255;
  var v7465;
  if(parentObj$$263.FCarry) {
    v7465 = 1
  }else {
    v7465 = 0
  }
  temp_var$$12 = v3966 | v7465;
  var v3968 = parentObj$$263.memoryWriter;
  JAM.call(JAM.get(v3968, parentObj$$263.registersHL, JAM.policy.p1), v3968, [parentObj$$263, parentObj$$263.registersHL, temp_var$$12]);
  parentObj$$263.FHalfCarry = parentObj$$263.FSubtract = false;
  parentObj$$263.FZero = temp_var$$12 == 0;
  return
}
function v339(parentObj$$262) {
  parentObj$$262.FCarry = (parentObj$$262.registersHL & 128) == 128;
  var v3972 = parentObj$$262.registersHL & 65280 | parentObj$$262.registersHL << 1 & 255;
  var v7469;
  if(parentObj$$262.FCarry) {
    v7469 = 1
  }else {
    v7469 = 0
  }
  parentObj$$262.registersHL = v3972 | v7469;
  parentObj$$262.FHalfCarry = parentObj$$262.FSubtract = false;
  parentObj$$262.FZero = (parentObj$$262.registersHL & 255) == 0;
  return
}
function v338(parentObj$$261) {
  parentObj$$261.FCarry = parentObj$$261.registersHL > 32767;
  var v7471 = parentObj$$261.registersHL << 1 & 65024;
  var v9252;
  if(parentObj$$261.FCarry) {
    v9252 = 256
  }else {
    v9252 = 0
  }
  parentObj$$261.registersHL = v7471 | v9252 | parentObj$$261.registersHL & 255;
  parentObj$$261.FHalfCarry = parentObj$$261.FSubtract = false;
  parentObj$$261.FZero = parentObj$$261.registersHL < 256;
  return
}
function v337(parentObj$$260) {
  parentObj$$260.FCarry = parentObj$$260.registerE > 127;
  var v3980 = parentObj$$260.registerE << 1 & 255;
  var v7475;
  if(parentObj$$260.FCarry) {
    v7475 = 1
  }else {
    v7475 = 0
  }
  parentObj$$260.registerE = v3980 | v7475;
  parentObj$$260.FHalfCarry = parentObj$$260.FSubtract = false;
  parentObj$$260.FZero = parentObj$$260.registerE == 0;
  return
}
function v336(parentObj$$259) {
  parentObj$$259.FCarry = parentObj$$259.registerD > 127;
  var v3984 = parentObj$$259.registerD << 1 & 255;
  var v7477;
  if(parentObj$$259.FCarry) {
    v7477 = 1
  }else {
    v7477 = 0
  }
  parentObj$$259.registerD = v3984 | v7477;
  parentObj$$259.FHalfCarry = parentObj$$259.FSubtract = false;
  parentObj$$259.FZero = parentObj$$259.registerD == 0;
  return
}
function v335(parentObj$$258) {
  parentObj$$258.FCarry = parentObj$$258.registerC > 127;
  var v3988 = parentObj$$258.registerC << 1 & 255;
  var v7479;
  if(parentObj$$258.FCarry) {
    v7479 = 1
  }else {
    v7479 = 0
  }
  parentObj$$258.registerC = v3988 | v7479;
  parentObj$$258.FHalfCarry = parentObj$$258.FSubtract = false;
  parentObj$$258.FZero = parentObj$$258.registerC == 0;
  return
}
function v334(parentObj$$257) {
  parentObj$$257.FCarry = parentObj$$257.registerB > 127;
  var v3992 = parentObj$$257.registerB << 1 & 255;
  var v7481;
  if(parentObj$$257.FCarry) {
    v7481 = 1
  }else {
    v7481 = 0
  }
  parentObj$$257.registerB = v3992 | v7481;
  parentObj$$257.FHalfCarry = parentObj$$257.FSubtract = false;
  parentObj$$257.FZero = parentObj$$257.registerB == 0;
  return
}
function v333(parentObj$$256) {
  parentObj$$256.stackPointer = parentObj$$256.stackPointer - 1 & 65535;
  var v3996 = parentObj$$256.memoryWriter;
  JAM.call(v3996[parentObj$$256.stackPointer], v3996, [parentObj$$256, parentObj$$256.stackPointer, parentObj$$256.programCounter >> 8]);
  parentObj$$256.stackPointer = parentObj$$256.stackPointer - 1 & 65535;
  var v4001 = parentObj$$256.memoryWriter;
  JAM.call(v4001[parentObj$$256.stackPointer], v4001, [parentObj$$256, parentObj$$256.stackPointer, parentObj$$256.programCounter & 255]);
  parentObj$$256.programCounter = 56;
  return
}
function v332(parentObj$$255) {
  var v4005 = parentObj$$255.registerA;
  var v7486 = parentObj$$255.memoryReader;
  var dirtySum$$43 = v4005 - JAM.call(JAM.get(v7486, parentObj$$255.programCounter, JAM.policy.p1), v7486, [parentObj$$255, parentObj$$255.programCounter]);
  parentObj$$255.programCounter = parentObj$$255.programCounter + 1 & 65535;
  parentObj$$255.FHalfCarry = (dirtySum$$43 & 15) > (parentObj$$255.registerA & 15);
  parentObj$$255.FCarry = dirtySum$$43 < 0;
  parentObj$$255.FZero = dirtySum$$43 == 0;
  parentObj$$255.FSubtract = true;
  return
}
function v331(parentObj$$254) {
  cout("Illegal op code 0xFD called, pausing emulation.", 2);
  pause();
  return
}
function v330(parentObj$$253) {
  cout("Illegal op code 0xFC called, pausing emulation.", 2);
  pause();
  return
}
function v329(parentObj$$252) {
  var v4010 = parentObj$$252;
  var v7491;
  var v10121 = parentObj$$252.IRQEnableDelay == 2;
  if(!v10121) {
    var v10670 = parentObj$$252.memoryReader;
    v10121 = JAM.call(JAM.get(v10670, parentObj$$252.programCounter, JAM.policy.p1), v10670, [parentObj$$252, parentObj$$252.programCounter]) == 118
  }
  if(v10121) {
    v7491 = 1
  }else {
    v7491 = 2
  }
  v4010.IRQEnableDelay = v7491;
  return
}
function v328(parentObj$$251) {
  var v4011 = parentObj$$251;
  var v9262 = JAM.call(parentObj$$251.memoryRead, parentObj$$251, [parentObj$$251.programCounter + 1 & 65535]) << 8;
  var v10123 = parentObj$$251.memoryReader;
  var v10921 = JAM.call(parentObj$$251.memoryRead, parentObj$$251, [v9262 | JAM.call(JAM.get(v10123, parentObj$$251.programCounter, JAM.policy.p1), v10123, [parentObj$$251, parentObj$$251.programCounter])]);
  v4011.registerA = v10921;
  parentObj$$251.programCounter = parentObj$$251.programCounter + 2 & 65535;
  return
}
function v327(parentObj$$250) {
  parentObj$$250.stackPointer = parentObj$$250.registersHL;
  return
}
function v326(parentObj$$249) {
  var v9264 = parentObj$$249.memoryReader;
  var temp_var$$11 = JAM.call(JAM.get(v9264, parentObj$$249.programCounter, JAM.policy.p1), v9264, [parentObj$$249, parentObj$$249.programCounter]) << 24 >> 24;
  parentObj$$249.programCounter = parentObj$$249.programCounter + 1 & 65535;
  parentObj$$249.registersHL = parentObj$$249.stackPointer + temp_var$$11 & 65535;
  temp_var$$11 = parentObj$$249.stackPointer ^ temp_var$$11 ^ parentObj$$249.registersHL;
  parentObj$$249.FCarry = (temp_var$$11 & 256) == 256;
  parentObj$$249.FHalfCarry = (temp_var$$11 & 16) == 16;
  parentObj$$249.FZero = parentObj$$249.FSubtract = false;
  return
}
function v325(parentObj$$248) {
  parentObj$$248.stackPointer = parentObj$$248.stackPointer - 1 & 65535;
  var v4021 = parentObj$$248.memoryWriter;
  JAM.call(v4021[parentObj$$248.stackPointer], v4021, [parentObj$$248, parentObj$$248.stackPointer, parentObj$$248.programCounter >> 8]);
  parentObj$$248.stackPointer = parentObj$$248.stackPointer - 1 & 65535;
  var v4026 = parentObj$$248.memoryWriter;
  JAM.call(v4026[parentObj$$248.stackPointer], v4026, [parentObj$$248, parentObj$$248.stackPointer, parentObj$$248.programCounter & 255]);
  parentObj$$248.programCounter = 48;
  return
}
function v324(parentObj$$247) {
  var v4030 = parentObj$$247;
  var v9267 = v4030.registerA;
  var v10126 = parentObj$$247.memoryReader;
  v4030.registerA = v9267 | JAM.call(JAM.get(v10126, parentObj$$247.programCounter, JAM.policy.p1), v10126, [parentObj$$247, parentObj$$247.programCounter]);
  parentObj$$247.FZero = parentObj$$247.registerA == 0;
  parentObj$$247.programCounter = parentObj$$247.programCounter + 1 & 65535;
  parentObj$$247.FSubtract = parentObj$$247.FCarry = parentObj$$247.FHalfCarry = false;
  return
}
function v323(parentObj$$246) {
  parentObj$$246.stackPointer = parentObj$$246.stackPointer - 1 & 65535;
  var v4034 = parentObj$$246.memoryWriter;
  JAM.call(v4034[parentObj$$246.stackPointer], v4034, [parentObj$$246, parentObj$$246.stackPointer, parentObj$$246.registerA]);
  parentObj$$246.stackPointer = parentObj$$246.stackPointer - 1 & 65535;
  var v4039 = parentObj$$246.memoryWriter;
  var v4040 = parentObj$$246.stackPointer;
  var v4041 = parentObj$$246.stackPointer;
  var v10494;
  if(parentObj$$246.FZero) {
    v10494 = 128
  }else {
    v10494 = 0
  }
  var v10129 = v10494;
  var v10495;
  if(parentObj$$246.FSubtract) {
    v10495 = 64
  }else {
    v10495 = 0
  }
  var v9269 = v10129 | v10495;
  var v10131;
  if(parentObj$$246.FHalfCarry) {
    v10131 = 32
  }else {
    v10131 = 0
  }
  var v7505 = v9269 | v10131;
  var v9271;
  if(parentObj$$246.FCarry) {
    v9271 = 16
  }else {
    v9271 = 0
  }
  JAM.call(v4039[v4040], v4039, [parentObj$$246, v4041, v7505 | v9271]);
  return
}
function v322(parentObj$$245) {
  cout("Illegal op code 0xF4 called, pausing emulation.", 2);
  pause();
  return
}
function v321(parentObj$$244) {
  parentObj$$244.IME = false;
  parentObj$$244.IRQEnableDelay = 0;
  return
}
function v320(parentObj$$243) {
  var v4043 = parentObj$$243;
  var v7507 = parentObj$$243.memoryHighReader;
  var v10922 = JAM.call(JAM.get(v7507, parentObj$$243.registerC, JAM.policy.p1), v7507, [parentObj$$243, parentObj$$243.registerC]);
  v4043.registerA = v10922;
  return
}
function v319(parentObj$$242) {
  var v4044 = parentObj$$242.memoryReader;
  var temp_var$$10 = JAM.call(JAM.get(v4044, parentObj$$242.stackPointer, JAM.policy.p1), v4044, [parentObj$$242, parentObj$$242.stackPointer]);
  parentObj$$242.FZero = temp_var$$10 > 127;
  parentObj$$242.FSubtract = (temp_var$$10 & 64) == 64;
  parentObj$$242.FHalfCarry = (temp_var$$10 & 32) == 32;
  parentObj$$242.FCarry = (temp_var$$10 & 16) == 16;
  var v4050 = parentObj$$242;
  var v10923 = JAM.call(parentObj$$242.memoryRead, parentObj$$242, [parentObj$$242.stackPointer + 1 & 65535]);
  v4050.registerA = v10923;
  parentObj$$242.stackPointer = parentObj$$242.stackPointer + 2 & 65535;
  return
}
function v318(parentObj$$241) {
  var v4052 = parentObj$$241;
  var v9273 = parentObj$$241.memoryReader;
  var v10924 = JAM.call(parentObj$$241.memoryHighRead, parentObj$$241, [JAM.call(JAM.get(v9273, parentObj$$241.programCounter, JAM.policy.p1), v9273, [parentObj$$241, parentObj$$241.programCounter])]);
  v4052.registerA = v10924;
  parentObj$$241.programCounter = parentObj$$241.programCounter + 1 & 65535;
  return
}
function v317(parentObj$$240) {
  parentObj$$240.stackPointer = parentObj$$240.stackPointer - 1 & 65535;
  var v4055 = parentObj$$240.memoryWriter;
  JAM.call(v4055[parentObj$$240.stackPointer], v4055, [parentObj$$240, parentObj$$240.stackPointer, parentObj$$240.programCounter >> 8]);
  parentObj$$240.stackPointer = parentObj$$240.stackPointer - 1 & 65535;
  var v4060 = parentObj$$240.memoryWriter;
  JAM.call(v4060[parentObj$$240.stackPointer], v4060, [parentObj$$240, parentObj$$240.stackPointer, parentObj$$240.programCounter & 255]);
  parentObj$$240.programCounter = 40;
  return
}
function v316(parentObj$$239) {
  var v4064 = parentObj$$239;
  var v9276 = v4064.registerA;
  var v10134 = parentObj$$239.memoryReader;
  v4064.registerA = v9276 ^ JAM.call(JAM.get(v10134, parentObj$$239.programCounter, JAM.policy.p1), v10134, [parentObj$$239, parentObj$$239.programCounter]);
  parentObj$$239.programCounter = parentObj$$239.programCounter + 1 & 65535;
  parentObj$$239.FZero = parentObj$$239.registerA == 0;
  parentObj$$239.FSubtract = parentObj$$239.FHalfCarry = parentObj$$239.FCarry = false;
  return
}
function v315(parentObj$$238) {
  cout("Illegal op code 0xED called, pausing emulation.", 2);
  pause();
  return
}
function v314(parentObj$$237) {
  cout("Illegal op code 0xEC called, pausing emulation.", 2);
  pause();
  return
}
function v313(parentObj$$236) {
  cout("Illegal op code 0xEB called, pausing emulation.", 2);
  pause();
  return
}
function v312(parentObj$$235) {
  var v7519 = JAM.call(parentObj$$235.memoryRead, parentObj$$235, [parentObj$$235.programCounter + 1 & 65535]) << 8;
  var v9279 = parentObj$$235.memoryReader;
  JAM.call(parentObj$$235.memoryWrite, parentObj$$235, [v7519 | JAM.call(JAM.get(v9279, parentObj$$235.programCounter, JAM.policy.p1), v9279, [parentObj$$235, parentObj$$235.programCounter]), parentObj$$235.registerA]);
  parentObj$$235.programCounter = parentObj$$235.programCounter + 2 & 65535;
  return
}
function v311(parentObj$$234) {
  parentObj$$234.programCounter = parentObj$$234.registersHL;
  return
}
function v310(parentObj$$233) {
  var v9282 = parentObj$$233.memoryReader;
  var temp_value2 = JAM.call(JAM.get(v9282, parentObj$$233.programCounter, JAM.policy.p1), v9282, [parentObj$$233, parentObj$$233.programCounter]) << 24 >> 24;
  parentObj$$233.programCounter = parentObj$$233.programCounter + 1 & 65535;
  var temp_value = parentObj$$233.stackPointer + temp_value2 & 65535;
  temp_value2 = parentObj$$233.stackPointer ^ temp_value2 ^ temp_value;
  parentObj$$233.stackPointer = temp_value;
  parentObj$$233.FCarry = (temp_value2 & 256) == 256;
  parentObj$$233.FHalfCarry = (temp_value2 & 16) == 16;
  parentObj$$233.FZero = parentObj$$233.FSubtract = false;
  return
}
function v309(parentObj$$232) {
  parentObj$$232.stackPointer = parentObj$$232.stackPointer - 1 & 65535;
  var v4077 = parentObj$$232.memoryWriter;
  JAM.call(v4077[parentObj$$232.stackPointer], v4077, [parentObj$$232, parentObj$$232.stackPointer, parentObj$$232.programCounter >> 8]);
  parentObj$$232.stackPointer = parentObj$$232.stackPointer - 1 & 65535;
  var v4082 = parentObj$$232.memoryWriter;
  JAM.call(v4082[parentObj$$232.stackPointer], v4082, [parentObj$$232, parentObj$$232.stackPointer, parentObj$$232.programCounter & 255]);
  parentObj$$232.programCounter = 32;
  return
}
function v308(parentObj$$231) {
  var v4086 = parentObj$$231;
  var v9285 = v4086.registerA;
  var v10138 = parentObj$$231.memoryReader;
  v4086.registerA = v9285 & JAM.call(JAM.get(v10138, parentObj$$231.programCounter, JAM.policy.p1), v10138, [parentObj$$231, parentObj$$231.programCounter]);
  parentObj$$231.programCounter = parentObj$$231.programCounter + 1 & 65535;
  parentObj$$231.FZero = parentObj$$231.registerA == 0;
  parentObj$$231.FHalfCarry = true;
  parentObj$$231.FSubtract = parentObj$$231.FCarry = false;
  return
}
function v307(parentObj$$230) {
  parentObj$$230.stackPointer = parentObj$$230.stackPointer - 1 & 65535;
  var v4090 = parentObj$$230.memoryWriter;
  JAM.call(v4090[parentObj$$230.stackPointer], v4090, [parentObj$$230, parentObj$$230.stackPointer, parentObj$$230.registersHL >> 8]);
  parentObj$$230.stackPointer = parentObj$$230.stackPointer - 1 & 65535;
  var v4095 = parentObj$$230.memoryWriter;
  JAM.call(v4095[parentObj$$230.stackPointer], v4095, [parentObj$$230, parentObj$$230.stackPointer, parentObj$$230.registersHL & 255]);
  return
}
function v306(parentObj$$229) {
  cout("Illegal op code 0xE4 called, pausing emulation.", 2);
  pause();
  return
}
function v305(parentObj$$228) {
  cout("Illegal op code 0xE3 called, pausing emulation.", 2);
  pause();
  return
}
function v304(parentObj$$227) {
  var v4099 = parentObj$$227.memoryHighWriter;
  JAM.call(JAM.get(v4099, parentObj$$227.registerC, JAM.policy.p1), v4099, [parentObj$$227, parentObj$$227.registerC, parentObj$$227.registerA]);
  return
}
function v303(parentObj$$226) {
  var v4103 = parentObj$$226;
  var v7535 = JAM.call(parentObj$$226.memoryRead, parentObj$$226, [parentObj$$226.stackPointer + 1 & 65535]) << 8;
  var v9288 = parentObj$$226.memoryReader;
  v4103.registersHL = v7535 | JAM.call(JAM.get(v9288, parentObj$$226.stackPointer, JAM.policy.p1), v9288, [parentObj$$226, parentObj$$226.stackPointer]);
  parentObj$$226.stackPointer = parentObj$$226.stackPointer + 2 & 65535;
  return
}
function v302(parentObj$$225) {
  var v7538 = parentObj$$225.memoryReader;
  JAM.call(parentObj$$225.memoryHighWrite, parentObj$$225, [JAM.call(JAM.get(v7538, parentObj$$225.programCounter, JAM.policy.p1), v7538, [parentObj$$225, parentObj$$225.programCounter]), parentObj$$225.registerA]);
  parentObj$$225.programCounter = parentObj$$225.programCounter + 1 & 65535;
  return
}
function v301(parentObj$$224) {
  parentObj$$224.stackPointer = parentObj$$224.stackPointer - 1 & 65535;
  var v4109 = parentObj$$224.memoryWriter;
  JAM.call(v4109[parentObj$$224.stackPointer], v4109, [parentObj$$224, parentObj$$224.stackPointer, parentObj$$224.programCounter >> 8]);
  parentObj$$224.stackPointer = parentObj$$224.stackPointer - 1 & 65535;
  var v4114 = parentObj$$224.memoryWriter;
  JAM.call(v4114[parentObj$$224.stackPointer], v4114, [parentObj$$224, parentObj$$224.stackPointer, parentObj$$224.programCounter & 255]);
  parentObj$$224.programCounter = 24;
  return
}
function v300(parentObj$$223) {
  var v4118 = parentObj$$223.memoryReader;
  var temp_var$$9 = JAM.call(JAM.get(v4118, parentObj$$223.programCounter, JAM.policy.p1), v4118, [parentObj$$223, parentObj$$223.programCounter]);
  parentObj$$223.programCounter = parentObj$$223.programCounter + 1 & 65535;
  var v4122 = parentObj$$223.registerA - temp_var$$9;
  var v7548;
  if(parentObj$$223.FCarry) {
    v7548 = 1
  }else {
    v7548 = 0
  }
  var dirtySum$$42 = v4122 - v7548;
  var v7549 = (parentObj$$223.registerA & 15) - (temp_var$$9 & 15);
  var v9294;
  if(parentObj$$223.FCarry) {
    v9294 = 1
  }else {
    v9294 = 0
  }
  parentObj$$223.FHalfCarry = v7549 - v9294 < 0;
  parentObj$$223.FCarry = dirtySum$$42 < 0;
  parentObj$$223.registerA = dirtySum$$42 & 255;
  parentObj$$223.FZero = parentObj$$223.registerA == 0;
  parentObj$$223.FSubtract = true;
  return
}
function v299(parentObj$$222) {
  cout("Illegal op code 0xDD called, pausing emulation.", 2);
  pause();
  return
}
function v298(parentObj$$221) {
  if(parentObj$$221.FCarry) {
    var v4126 = JAM.call(parentObj$$221.memoryRead, parentObj$$221, [parentObj$$221.programCounter + 1 & 65535]) << 8;
    var v7552 = parentObj$$221.memoryReader;
    var temp_pc$$4 = v4126 | JAM.call(JAM.get(v7552, parentObj$$221.programCounter, JAM.policy.p1), v7552, [parentObj$$221, parentObj$$221.programCounter]);
    parentObj$$221.programCounter = parentObj$$221.programCounter + 2 & 65535;
    parentObj$$221.stackPointer = parentObj$$221.stackPointer - 1 & 65535;
    var v4130 = parentObj$$221.memoryWriter;
    JAM.call(v4130[parentObj$$221.stackPointer], v4130, [parentObj$$221, parentObj$$221.stackPointer, parentObj$$221.programCounter >> 8]);
    parentObj$$221.stackPointer = parentObj$$221.stackPointer - 1 & 65535;
    var v4135 = parentObj$$221.memoryWriter;
    JAM.call(v4135[parentObj$$221.stackPointer], v4135, [parentObj$$221, parentObj$$221.stackPointer, parentObj$$221.programCounter & 255]);
    parentObj$$221.programCounter = temp_pc$$4;
    parentObj$$221.CPUTicks = parentObj$$221.CPUTicks + 12
  }else {
    parentObj$$221.programCounter = parentObj$$221.programCounter + 2 & 65535
  }
  return
}
function v297(parentObj$$220) {
  cout("Illegal op code 0xDB called, pausing emulation.", 2);
  pause();
  return
}
function v296(parentObj$$219) {
  if(parentObj$$219.FCarry) {
    var v4141 = parentObj$$219;
    var v7562 = JAM.call(parentObj$$219.memoryRead, parentObj$$219, [parentObj$$219.programCounter + 1 & 65535]) << 8;
    var v9297 = parentObj$$219.memoryReader;
    v4141.programCounter = v7562 | JAM.call(JAM.get(v9297, parentObj$$219.programCounter, JAM.policy.p1), v9297, [parentObj$$219, parentObj$$219.programCounter]);
    parentObj$$219.CPUTicks = parentObj$$219.CPUTicks + 4
  }else {
    parentObj$$219.programCounter = parentObj$$219.programCounter + 2 & 65535
  }
  return
}
function v295(parentObj$$218) {
  var v4144 = parentObj$$218;
  var v7566 = JAM.call(parentObj$$218.memoryRead, parentObj$$218, [parentObj$$218.stackPointer + 1 & 65535]) << 8;
  var v9301 = parentObj$$218.memoryReader;
  v4144.programCounter = v7566 | JAM.call(JAM.get(v9301, parentObj$$218.stackPointer, JAM.policy.p1), v9301, [parentObj$$218, parentObj$$218.stackPointer]);
  parentObj$$218.stackPointer = parentObj$$218.stackPointer + 2 & 65535;
  var v4146 = parentObj$$218;
  var v7569;
  var v10147 = parentObj$$218.IRQEnableDelay == 2;
  if(!v10147) {
    var v10680 = parentObj$$218.memoryReader;
    v10147 = JAM.call(JAM.get(v10680, parentObj$$218.programCounter, JAM.policy.p1), v10680, [parentObj$$218, parentObj$$218.programCounter]) == 118
  }
  if(v10147) {
    v7569 = 1
  }else {
    v7569 = 2
  }
  v4146.IRQEnableDelay = v7569;
  return
}
function v294(parentObj$$217) {
  if(parentObj$$217.FCarry) {
    var v4147 = parentObj$$217;
    var v7570 = JAM.call(parentObj$$217.memoryRead, parentObj$$217, [parentObj$$217.stackPointer + 1 & 65535]) << 8;
    var v9306 = parentObj$$217.memoryReader;
    v4147.programCounter = v7570 | JAM.call(JAM.get(v9306, parentObj$$217.stackPointer, JAM.policy.p1), v9306, [parentObj$$217, parentObj$$217.stackPointer]);
    parentObj$$217.stackPointer = parentObj$$217.stackPointer + 2 & 65535;
    parentObj$$217.CPUTicks = parentObj$$217.CPUTicks + 12
  }
  return
}
function v293(parentObj$$216) {
  parentObj$$216.stackPointer = parentObj$$216.stackPointer - 1 & 65535;
  var v4151 = parentObj$$216.memoryWriter;
  JAM.call(v4151[parentObj$$216.stackPointer], v4151, [parentObj$$216, parentObj$$216.stackPointer, parentObj$$216.programCounter >> 8]);
  parentObj$$216.stackPointer = parentObj$$216.stackPointer - 1 & 65535;
  var v4156 = parentObj$$216.memoryWriter;
  JAM.call(v4156[parentObj$$216.stackPointer], v4156, [parentObj$$216, parentObj$$216.stackPointer, parentObj$$216.programCounter & 255]);
  parentObj$$216.programCounter = 16;
  return
}
function v292(parentObj$$215) {
  var v4160 = parentObj$$215.registerA;
  var v7578 = parentObj$$215.memoryReader;
  var dirtySum$$41 = v4160 - JAM.call(JAM.get(v7578, parentObj$$215.programCounter, JAM.policy.p1), v7578, [parentObj$$215, parentObj$$215.programCounter]);
  parentObj$$215.programCounter = parentObj$$215.programCounter + 1 & 65535;
  parentObj$$215.FHalfCarry = (parentObj$$215.registerA & 15) < (dirtySum$$41 & 15);
  parentObj$$215.FCarry = dirtySum$$41 < 0;
  parentObj$$215.registerA = dirtySum$$41 & 255;
  parentObj$$215.FZero = dirtySum$$41 == 0;
  parentObj$$215.FSubtract = true;
  return
}
function v291(parentObj$$214) {
  parentObj$$214.stackPointer = parentObj$$214.stackPointer - 1 & 65535;
  var v4166 = parentObj$$214.memoryWriter;
  JAM.call(v4166[parentObj$$214.stackPointer], v4166, [parentObj$$214, parentObj$$214.stackPointer, parentObj$$214.registerD]);
  parentObj$$214.stackPointer = parentObj$$214.stackPointer - 1 & 65535;
  var v4171 = parentObj$$214.memoryWriter;
  JAM.call(v4171[parentObj$$214.stackPointer], v4171, [parentObj$$214, parentObj$$214.stackPointer, parentObj$$214.registerE]);
  return
}
function v290(parentObj$$213) {
  if(!parentObj$$213.FCarry) {
    var v4175 = JAM.call(parentObj$$213.memoryRead, parentObj$$213, [parentObj$$213.programCounter + 1 & 65535]) << 8;
    var v7587 = parentObj$$213.memoryReader;
    var temp_pc$$3 = v4175 | JAM.call(JAM.get(v7587, parentObj$$213.programCounter, JAM.policy.p1), v7587, [parentObj$$213, parentObj$$213.programCounter]);
    parentObj$$213.programCounter = parentObj$$213.programCounter + 2 & 65535;
    parentObj$$213.stackPointer = parentObj$$213.stackPointer - 1 & 65535;
    var v4179 = parentObj$$213.memoryWriter;
    JAM.call(v4179[parentObj$$213.stackPointer], v4179, [parentObj$$213, parentObj$$213.stackPointer, parentObj$$213.programCounter >> 8]);
    parentObj$$213.stackPointer = parentObj$$213.stackPointer - 1 & 65535;
    var v4184 = parentObj$$213.memoryWriter;
    JAM.call(v4184[parentObj$$213.stackPointer], v4184, [parentObj$$213, parentObj$$213.stackPointer, parentObj$$213.programCounter & 255]);
    parentObj$$213.programCounter = temp_pc$$3;
    parentObj$$213.CPUTicks = parentObj$$213.CPUTicks + 12
  }else {
    parentObj$$213.programCounter = parentObj$$213.programCounter + 2 & 65535
  }
  return
}
function v289(parentObj$$212) {
  cout("Illegal op code 0xD3 called, pausing emulation.", 2);
  pause();
  return
}
function v288(parentObj$$211) {
  if(!parentObj$$211.FCarry) {
    var v4190 = parentObj$$211;
    var v7598 = JAM.call(parentObj$$211.memoryRead, parentObj$$211, [parentObj$$211.programCounter + 1 & 65535]) << 8;
    var v9311 = parentObj$$211.memoryReader;
    v4190.programCounter = v7598 | JAM.call(JAM.get(v9311, parentObj$$211.programCounter, JAM.policy.p1), v9311, [parentObj$$211, parentObj$$211.programCounter]);
    parentObj$$211.CPUTicks = parentObj$$211.CPUTicks + 4
  }else {
    parentObj$$211.programCounter = parentObj$$211.programCounter + 2 & 65535
  }
  return
}
function v287(parentObj$$210) {
  var v4193 = parentObj$$210;
  var v7602 = parentObj$$210.memoryReader;
  var v10925 = JAM.call(JAM.get(v7602, parentObj$$210.stackPointer, JAM.policy.p1), v7602, [parentObj$$210, parentObj$$210.stackPointer]);
  v4193.registerE = v10925;
  var v4194 = parentObj$$210;
  var v10926 = JAM.call(parentObj$$210.memoryRead, parentObj$$210, [parentObj$$210.stackPointer + 1 & 65535]);
  v4194.registerD = v10926;
  parentObj$$210.stackPointer = parentObj$$210.stackPointer + 2 & 65535;
  return
}
function v286(parentObj$$209) {
  if(!parentObj$$209.FCarry) {
    var v4196 = parentObj$$209;
    var v7608 = JAM.call(parentObj$$209.memoryRead, parentObj$$209, [parentObj$$209.stackPointer + 1 & 65535]) << 8;
    var v9316 = parentObj$$209.memoryReader;
    v4196.programCounter = v7608 | JAM.call(JAM.get(v9316, parentObj$$209.stackPointer, JAM.policy.p1), v9316, [parentObj$$209, parentObj$$209.stackPointer]);
    parentObj$$209.stackPointer = parentObj$$209.stackPointer + 2 & 65535;
    parentObj$$209.CPUTicks = parentObj$$209.CPUTicks + 12
  }
  return
}
function v285(parentObj$$208) {
  parentObj$$208.stackPointer = parentObj$$208.stackPointer - 1 & 65535;
  var v4200 = parentObj$$208.memoryWriter;
  JAM.call(v4200[parentObj$$208.stackPointer], v4200, [parentObj$$208, parentObj$$208.stackPointer, parentObj$$208.programCounter >> 8]);
  parentObj$$208.stackPointer = parentObj$$208.stackPointer - 1 & 65535;
  var v4205 = parentObj$$208.memoryWriter;
  JAM.call(v4205[parentObj$$208.stackPointer], v4205, [parentObj$$208, parentObj$$208.stackPointer, parentObj$$208.programCounter & 255]);
  parentObj$$208.programCounter = 8;
  return
}
function v284(parentObj$$207) {
  var v4209 = parentObj$$207.memoryReader;
  var tempValue$$3 = JAM.call(JAM.get(v4209, parentObj$$207.programCounter, JAM.policy.p1), v4209, [parentObj$$207, parentObj$$207.programCounter]);
  parentObj$$207.programCounter = parentObj$$207.programCounter + 1 & 65535;
  var v4213 = parentObj$$207.registerA + tempValue$$3;
  var v7618;
  if(parentObj$$207.FCarry) {
    v7618 = 1
  }else {
    v7618 = 0
  }
  var dirtySum$$40 = v4213 + v7618;
  var v7619 = (parentObj$$207.registerA & 15) + (tempValue$$3 & 15);
  var v9322;
  if(parentObj$$207.FCarry) {
    v9322 = 1
  }else {
    v9322 = 0
  }
  parentObj$$207.FHalfCarry = v7619 + v9322 > 15;
  parentObj$$207.FCarry = dirtySum$$40 > 255;
  parentObj$$207.registerA = dirtySum$$40 & 255;
  parentObj$$207.FZero = parentObj$$207.registerA == 0;
  parentObj$$207.FSubtract = false;
  return
}
function v283(parentObj$$206) {
  var v4217 = JAM.call(parentObj$$206.memoryRead, parentObj$$206, [parentObj$$206.programCounter + 1 & 65535]) << 8;
  var v7622 = parentObj$$206.memoryReader;
  var temp_pc$$2 = v4217 | JAM.call(JAM.get(v7622, parentObj$$206.programCounter, JAM.policy.p1), v7622, [parentObj$$206, parentObj$$206.programCounter]);
  parentObj$$206.programCounter = parentObj$$206.programCounter + 2 & 65535;
  parentObj$$206.stackPointer = parentObj$$206.stackPointer - 1 & 65535;
  var v4221 = parentObj$$206.memoryWriter;
  JAM.call(v4221[parentObj$$206.stackPointer], v4221, [parentObj$$206, parentObj$$206.stackPointer, parentObj$$206.programCounter >> 8]);
  parentObj$$206.stackPointer = parentObj$$206.stackPointer - 1 & 65535;
  var v4226 = parentObj$$206.memoryWriter;
  JAM.call(v4226[parentObj$$206.stackPointer], v4226, [parentObj$$206, parentObj$$206.stackPointer, parentObj$$206.programCounter & 255]);
  parentObj$$206.programCounter = temp_pc$$2;
  return
}
function v282(parentObj$$205) {
  if(parentObj$$205.FZero) {
    var v4230 = JAM.call(parentObj$$205.memoryRead, parentObj$$205, [parentObj$$205.programCounter + 1 & 65535]) << 8;
    var v7631 = parentObj$$205.memoryReader;
    var temp_pc$$1 = v4230 | JAM.call(JAM.get(v7631, parentObj$$205.programCounter, JAM.policy.p1), v7631, [parentObj$$205, parentObj$$205.programCounter]);
    parentObj$$205.programCounter = parentObj$$205.programCounter + 2 & 65535;
    parentObj$$205.stackPointer = parentObj$$205.stackPointer - 1 & 65535;
    var v4234 = parentObj$$205.memoryWriter;
    JAM.call(v4234[parentObj$$205.stackPointer], v4234, [parentObj$$205, parentObj$$205.stackPointer, parentObj$$205.programCounter >> 8]);
    parentObj$$205.stackPointer = parentObj$$205.stackPointer - 1 & 65535;
    var v4239 = parentObj$$205.memoryWriter;
    JAM.call(v4239[parentObj$$205.stackPointer], v4239, [parentObj$$205, parentObj$$205.stackPointer, parentObj$$205.programCounter & 255]);
    parentObj$$205.programCounter = temp_pc$$1;
    parentObj$$205.CPUTicks = parentObj$$205.CPUTicks + 12
  }else {
    parentObj$$205.programCounter = parentObj$$205.programCounter + 2 & 65535
  }
  return
}
function v281(parentObj$$204) {
  var v4245 = parentObj$$204.memoryReader;
  var opcode = JAM.call(JAM.get(v4245, parentObj$$204.programCounter, JAM.policy.p1), v4245, [parentObj$$204, parentObj$$204.programCounter]);
  parentObj$$204.programCounter = parentObj$$204.programCounter + 1 & 65535;
  var v7642 = parentObj$$204.CPUTicks;
  var v9325 = parentObj$$204.SecondaryTICKTable;
  introspect(JAM.policy.p1) {
    var v7643 = v9325[opcode]
  }
  parentObj$$204.CPUTicks = v7642 + v7643;
  var v4249 = parentObj$$204.CBOPCODE;
  JAM.call(JAM.get(v4249, opcode, JAM.policy.p1), v4249, [parentObj$$204]);
  return
}
function v280(parentObj$$203) {
  if(parentObj$$203.FZero) {
    var v4250 = parentObj$$203;
    var v7644 = JAM.call(parentObj$$203.memoryRead, parentObj$$203, [parentObj$$203.programCounter + 1 & 65535]) << 8;
    var v9327 = parentObj$$203.memoryReader;
    v4250.programCounter = v7644 | JAM.call(JAM.get(v9327, parentObj$$203.programCounter, JAM.policy.p1), v9327, [parentObj$$203, parentObj$$203.programCounter]);
    parentObj$$203.CPUTicks = parentObj$$203.CPUTicks + 4
  }else {
    parentObj$$203.programCounter = parentObj$$203.programCounter + 2 & 65535
  }
  return
}
function v279(parentObj$$202) {
  var v4253 = parentObj$$202;
  var v7648 = JAM.call(parentObj$$202.memoryRead, parentObj$$202, [parentObj$$202.stackPointer + 1 & 65535]) << 8;
  var v9331 = parentObj$$202.memoryReader;
  v4253.programCounter = v7648 | JAM.call(JAM.get(v9331, parentObj$$202.stackPointer, JAM.policy.p1), v9331, [parentObj$$202, parentObj$$202.stackPointer]);
  parentObj$$202.stackPointer = parentObj$$202.stackPointer + 2 & 65535;
  return
}
function v278(parentObj$$201) {
  if(parentObj$$201.FZero) {
    var v4255 = parentObj$$201;
    var v7651 = JAM.call(parentObj$$201.memoryRead, parentObj$$201, [parentObj$$201.stackPointer + 1 & 65535]) << 8;
    var v9335 = parentObj$$201.memoryReader;
    v4255.programCounter = v7651 | JAM.call(JAM.get(v9335, parentObj$$201.stackPointer, JAM.policy.p1), v9335, [parentObj$$201, parentObj$$201.stackPointer]);
    parentObj$$201.stackPointer = parentObj$$201.stackPointer + 2 & 65535;
    parentObj$$201.CPUTicks = parentObj$$201.CPUTicks + 12
  }
  return
}
function v277(parentObj$$200) {
  parentObj$$200.stackPointer = parentObj$$200.stackPointer - 1 & 65535;
  var v4259 = parentObj$$200.memoryWriter;
  JAM.call(v4259[parentObj$$200.stackPointer], v4259, [parentObj$$200, parentObj$$200.stackPointer, parentObj$$200.programCounter >> 8]);
  parentObj$$200.stackPointer = parentObj$$200.stackPointer - 1 & 65535;
  var v4264 = parentObj$$200.memoryWriter;
  JAM.call(v4264[parentObj$$200.stackPointer], v4264, [parentObj$$200, parentObj$$200.stackPointer, parentObj$$200.programCounter & 255]);
  parentObj$$200.programCounter = 0;
  return
}
function v276(parentObj$$199) {
  var v4268 = parentObj$$199.registerA;
  var v7659 = parentObj$$199.memoryReader;
  var dirtySum$$39 = v4268 + JAM.call(JAM.get(v7659, parentObj$$199.programCounter, JAM.policy.p1), v7659, [parentObj$$199, parentObj$$199.programCounter]);
  parentObj$$199.programCounter = parentObj$$199.programCounter + 1 & 65535;
  parentObj$$199.FHalfCarry = (dirtySum$$39 & 15) < (parentObj$$199.registerA & 15);
  parentObj$$199.FCarry = dirtySum$$39 > 255;
  parentObj$$199.registerA = dirtySum$$39 & 255;
  parentObj$$199.FZero = parentObj$$199.registerA == 0;
  parentObj$$199.FSubtract = false;
  return
}
function v275(parentObj$$198) {
  parentObj$$198.stackPointer = parentObj$$198.stackPointer - 1 & 65535;
  var v4275 = parentObj$$198.memoryWriter;
  JAM.call(v4275[parentObj$$198.stackPointer], v4275, [parentObj$$198, parentObj$$198.stackPointer, parentObj$$198.registerB]);
  parentObj$$198.stackPointer = parentObj$$198.stackPointer - 1 & 65535;
  var v4280 = parentObj$$198.memoryWriter;
  JAM.call(v4280[parentObj$$198.stackPointer], v4280, [parentObj$$198, parentObj$$198.stackPointer, parentObj$$198.registerC]);
  return
}
function v274(parentObj$$197) {
  if(!parentObj$$197.FZero) {
    var v4284 = JAM.call(parentObj$$197.memoryRead, parentObj$$197, [parentObj$$197.programCounter + 1 & 65535]) << 8;
    var v7668 = parentObj$$197.memoryReader;
    var temp_pc = v4284 | JAM.call(JAM.get(v7668, parentObj$$197.programCounter, JAM.policy.p1), v7668, [parentObj$$197, parentObj$$197.programCounter]);
    parentObj$$197.programCounter = parentObj$$197.programCounter + 2 & 65535;
    parentObj$$197.stackPointer = parentObj$$197.stackPointer - 1 & 65535;
    var v4288 = parentObj$$197.memoryWriter;
    JAM.call(v4288[parentObj$$197.stackPointer], v4288, [parentObj$$197, parentObj$$197.stackPointer, parentObj$$197.programCounter >> 8]);
    parentObj$$197.stackPointer = parentObj$$197.stackPointer - 1 & 65535;
    var v4293 = parentObj$$197.memoryWriter;
    JAM.call(v4293[parentObj$$197.stackPointer], v4293, [parentObj$$197, parentObj$$197.stackPointer, parentObj$$197.programCounter & 255]);
    parentObj$$197.programCounter = temp_pc;
    parentObj$$197.CPUTicks = parentObj$$197.CPUTicks + 12
  }else {
    parentObj$$197.programCounter = parentObj$$197.programCounter + 2 & 65535
  }
  return
}
function v273(parentObj$$196) {
  var v4299 = parentObj$$196;
  var v7678 = JAM.call(parentObj$$196.memoryRead, parentObj$$196, [parentObj$$196.programCounter + 1 & 65535]) << 8;
  var v9340 = parentObj$$196.memoryReader;
  v4299.programCounter = v7678 | JAM.call(JAM.get(v9340, parentObj$$196.programCounter, JAM.policy.p1), v9340, [parentObj$$196, parentObj$$196.programCounter]);
  return
}
function v272(parentObj$$195) {
  if(!parentObj$$195.FZero) {
    var v4300 = parentObj$$195;
    var v7681 = JAM.call(parentObj$$195.memoryRead, parentObj$$195, [parentObj$$195.programCounter + 1 & 65535]) << 8;
    var v9344 = parentObj$$195.memoryReader;
    v4300.programCounter = v7681 | JAM.call(JAM.get(v9344, parentObj$$195.programCounter, JAM.policy.p1), v9344, [parentObj$$195, parentObj$$195.programCounter]);
    parentObj$$195.CPUTicks = parentObj$$195.CPUTicks + 4
  }else {
    parentObj$$195.programCounter = parentObj$$195.programCounter + 2 & 65535
  }
  return
}
function v271(parentObj$$194) {
  var v4303 = parentObj$$194;
  var v7685 = parentObj$$194.memoryReader;
  var v10927 = JAM.call(JAM.get(v7685, parentObj$$194.stackPointer, JAM.policy.p1), v7685, [parentObj$$194, parentObj$$194.stackPointer]);
  v4303.registerC = v10927;
  var v4304 = parentObj$$194;
  var v10928 = JAM.call(parentObj$$194.memoryRead, parentObj$$194, [parentObj$$194.stackPointer + 1 & 65535]);
  v4304.registerB = v10928;
  parentObj$$194.stackPointer = parentObj$$194.stackPointer + 2 & 65535;
  return
}
function v270(parentObj$$193) {
  if(!parentObj$$193.FZero) {
    var v4306 = parentObj$$193;
    var v7691 = JAM.call(parentObj$$193.memoryRead, parentObj$$193, [parentObj$$193.stackPointer + 1 & 65535]) << 8;
    var v9349 = parentObj$$193.memoryReader;
    v4306.programCounter = v7691 | JAM.call(JAM.get(v9349, parentObj$$193.stackPointer, JAM.policy.p1), v9349, [parentObj$$193, parentObj$$193.stackPointer]);
    parentObj$$193.stackPointer = parentObj$$193.stackPointer + 2 & 65535;
    parentObj$$193.CPUTicks = parentObj$$193.CPUTicks + 12
  }
  return
}
function v269(parentObj$$192) {
  parentObj$$192.FHalfCarry = parentObj$$192.FCarry = false;
  parentObj$$192.FZero = parentObj$$192.FSubtract = true;
  return
}
function v268(parentObj$$191) {
  var v4309 = parentObj$$191.registerA;
  var v7695 = parentObj$$191.memoryReader;
  var dirtySum$$38 = v4309 - JAM.call(JAM.get(v7695, parentObj$$191.registersHL, JAM.policy.p1), v7695, [parentObj$$191, parentObj$$191.registersHL]);
  parentObj$$191.FHalfCarry = (dirtySum$$38 & 15) > (parentObj$$191.registerA & 15);
  parentObj$$191.FCarry = dirtySum$$38 < 0;
  parentObj$$191.FZero = dirtySum$$38 == 0;
  parentObj$$191.FSubtract = true;
  return
}
function v267(parentObj$$190) {
  var dirtySum$$37 = parentObj$$190.registerA - (parentObj$$190.registersHL & 255);
  parentObj$$190.FHalfCarry = (dirtySum$$37 & 15) > (parentObj$$190.registerA & 15);
  parentObj$$190.FCarry = dirtySum$$37 < 0;
  parentObj$$190.FZero = dirtySum$$37 == 0;
  parentObj$$190.FSubtract = true;
  return
}
function v266(parentObj$$189) {
  var dirtySum$$36 = parentObj$$189.registerA - (parentObj$$189.registersHL >> 8);
  parentObj$$189.FHalfCarry = (dirtySum$$36 & 15) > (parentObj$$189.registerA & 15);
  parentObj$$189.FCarry = dirtySum$$36 < 0;
  parentObj$$189.FZero = dirtySum$$36 == 0;
  parentObj$$189.FSubtract = true;
  return
}
function v265(parentObj$$188) {
  var dirtySum$$35 = parentObj$$188.registerA - parentObj$$188.registerE;
  parentObj$$188.FHalfCarry = (dirtySum$$35 & 15) > (parentObj$$188.registerA & 15);
  parentObj$$188.FCarry = dirtySum$$35 < 0;
  parentObj$$188.FZero = dirtySum$$35 == 0;
  parentObj$$188.FSubtract = true;
  return
}
function v264(parentObj$$187) {
  var dirtySum$$34 = parentObj$$187.registerA - parentObj$$187.registerD;
  parentObj$$187.FHalfCarry = (dirtySum$$34 & 15) > (parentObj$$187.registerA & 15);
  parentObj$$187.FCarry = dirtySum$$34 < 0;
  parentObj$$187.FZero = dirtySum$$34 == 0;
  parentObj$$187.FSubtract = true;
  return
}
function v263(parentObj$$186) {
  var dirtySum$$33 = parentObj$$186.registerA - parentObj$$186.registerC;
  parentObj$$186.FHalfCarry = (dirtySum$$33 & 15) > (parentObj$$186.registerA & 15);
  parentObj$$186.FCarry = dirtySum$$33 < 0;
  parentObj$$186.FZero = dirtySum$$33 == 0;
  parentObj$$186.FSubtract = true;
  return
}
function v262(parentObj$$185) {
  var dirtySum$$32 = parentObj$$185.registerA - parentObj$$185.registerB;
  parentObj$$185.FHalfCarry = (dirtySum$$32 & 15) > (parentObj$$185.registerA & 15);
  parentObj$$185.FCarry = dirtySum$$32 < 0;
  parentObj$$185.FZero = dirtySum$$32 == 0;
  parentObj$$185.FSubtract = true;
  return
}
function v261(parentObj$$184) {
  parentObj$$184.FZero = parentObj$$184.registerA == 0;
  parentObj$$184.FSubtract = parentObj$$184.FCarry = parentObj$$184.FHalfCarry = false;
  return
}
function v260(parentObj$$183) {
  var v4338 = parentObj$$183;
  var v9352 = v4338.registerA;
  var v10165 = parentObj$$183.memoryReader;
  v4338.registerA = v9352 | JAM.call(JAM.get(v10165, parentObj$$183.registersHL, JAM.policy.p1), v10165, [parentObj$$183, parentObj$$183.registersHL]);
  parentObj$$183.FZero = parentObj$$183.registerA == 0;
  parentObj$$183.FSubtract = parentObj$$183.FCarry = parentObj$$183.FHalfCarry = false;
  return
}
function v259(parentObj$$182) {
  parentObj$$182.registerA = parentObj$$182.registerA | parentObj$$182.registersHL & 255;
  parentObj$$182.FZero = parentObj$$182.registerA == 0;
  parentObj$$182.FSubtract = parentObj$$182.FCarry = parentObj$$182.FHalfCarry = false;
  return
}
function v258(parentObj$$181) {
  parentObj$$181.registerA = parentObj$$181.registerA | parentObj$$181.registersHL >> 8;
  parentObj$$181.FZero = parentObj$$181.registerA == 0;
  parentObj$$181.FSubtract = parentObj$$181.FCarry = parentObj$$181.FHalfCarry = false;
  return
}
function v257(parentObj$$180) {
  parentObj$$180.registerA = parentObj$$180.registerA | parentObj$$180.registerE;
  parentObj$$180.FZero = parentObj$$180.registerA == 0;
  parentObj$$180.FSubtract = parentObj$$180.FCarry = parentObj$$180.FHalfCarry = false;
  return
}
function v256(parentObj$$179) {
  parentObj$$179.registerA = parentObj$$179.registerA | parentObj$$179.registerD;
  parentObj$$179.FZero = parentObj$$179.registerA == 0;
  parentObj$$179.FSubtract = parentObj$$179.FCarry = parentObj$$179.FHalfCarry = false;
  return
}
function v255(parentObj$$178) {
  parentObj$$178.registerA = parentObj$$178.registerA | parentObj$$178.registerC;
  parentObj$$178.FZero = parentObj$$178.registerA == 0;
  parentObj$$178.FSubtract = parentObj$$178.FCarry = parentObj$$178.FHalfCarry = false;
  return
}
function v254(parentObj$$177) {
  parentObj$$177.registerA = parentObj$$177.registerA | parentObj$$177.registerB;
  parentObj$$177.FZero = parentObj$$177.registerA == 0;
  parentObj$$177.FSubtract = parentObj$$177.FCarry = parentObj$$177.FHalfCarry = false;
  return
}
function v253(parentObj$$176) {
  parentObj$$176.registerA = 0;
  parentObj$$176.FZero = true;
  parentObj$$176.FSubtract = parentObj$$176.FHalfCarry = parentObj$$176.FCarry = false;
  return
}
function v252(parentObj$$175) {
  var v4346 = parentObj$$175;
  var v9356 = v4346.registerA;
  var v10168 = parentObj$$175.memoryReader;
  v4346.registerA = v9356 ^ JAM.call(JAM.get(v10168, parentObj$$175.registersHL, JAM.policy.p1), v10168, [parentObj$$175, parentObj$$175.registersHL]);
  parentObj$$175.FZero = parentObj$$175.registerA == 0;
  parentObj$$175.FSubtract = parentObj$$175.FHalfCarry = parentObj$$175.FCarry = false;
  return
}
function v251(parentObj$$174) {
  parentObj$$174.registerA = parentObj$$174.registerA ^ parentObj$$174.registersHL & 255;
  parentObj$$174.FZero = parentObj$$174.registerA == 0;
  parentObj$$174.FSubtract = parentObj$$174.FHalfCarry = parentObj$$174.FCarry = false;
  return
}
function v250(parentObj$$173) {
  parentObj$$173.registerA = parentObj$$173.registerA ^ parentObj$$173.registersHL >> 8;
  parentObj$$173.FZero = parentObj$$173.registerA == 0;
  parentObj$$173.FSubtract = parentObj$$173.FHalfCarry = parentObj$$173.FCarry = false;
  return
}
function v249(parentObj$$172) {
  parentObj$$172.registerA = parentObj$$172.registerA ^ parentObj$$172.registerE;
  parentObj$$172.FZero = parentObj$$172.registerA == 0;
  parentObj$$172.FSubtract = parentObj$$172.FHalfCarry = parentObj$$172.FCarry = false;
  return
}
function v248(parentObj$$171) {
  parentObj$$171.registerA = parentObj$$171.registerA ^ parentObj$$171.registerD;
  parentObj$$171.FZero = parentObj$$171.registerA == 0;
  parentObj$$171.FSubtract = parentObj$$171.FHalfCarry = parentObj$$171.FCarry = false;
  return
}
function v247(parentObj$$170) {
  parentObj$$170.registerA = parentObj$$170.registerA ^ parentObj$$170.registerC;
  parentObj$$170.FZero = parentObj$$170.registerA == 0;
  parentObj$$170.FSubtract = parentObj$$170.FHalfCarry = parentObj$$170.FCarry = false;
  return
}
function v246(parentObj$$169) {
  parentObj$$169.registerA = parentObj$$169.registerA ^ parentObj$$169.registerB;
  parentObj$$169.FZero = parentObj$$169.registerA == 0;
  parentObj$$169.FSubtract = parentObj$$169.FHalfCarry = parentObj$$169.FCarry = false;
  return
}
function v245(parentObj$$168) {
  parentObj$$168.FZero = parentObj$$168.registerA == 0;
  parentObj$$168.FHalfCarry = true;
  parentObj$$168.FSubtract = parentObj$$168.FCarry = false;
  return
}
function v244(parentObj$$167) {
  var v4355 = parentObj$$167;
  var v9360 = v4355.registerA;
  var v10171 = parentObj$$167.memoryReader;
  v4355.registerA = v9360 & JAM.call(JAM.get(v10171, parentObj$$167.registersHL, JAM.policy.p1), v10171, [parentObj$$167, parentObj$$167.registersHL]);
  parentObj$$167.FZero = parentObj$$167.registerA == 0;
  parentObj$$167.FHalfCarry = true;
  parentObj$$167.FSubtract = parentObj$$167.FCarry = false;
  return
}
function v243(parentObj$$166) {
  parentObj$$166.registerA = parentObj$$166.registerA & parentObj$$166.registersHL;
  parentObj$$166.FZero = parentObj$$166.registerA == 0;
  parentObj$$166.FHalfCarry = true;
  parentObj$$166.FSubtract = parentObj$$166.FCarry = false;
  return
}
function v242(parentObj$$165) {
  parentObj$$165.registerA = parentObj$$165.registerA & parentObj$$165.registersHL >> 8;
  parentObj$$165.FZero = parentObj$$165.registerA == 0;
  parentObj$$165.FHalfCarry = true;
  parentObj$$165.FSubtract = parentObj$$165.FCarry = false;
  return
}
function v241(parentObj$$164) {
  parentObj$$164.registerA = parentObj$$164.registerA & parentObj$$164.registerE;
  parentObj$$164.FZero = parentObj$$164.registerA == 0;
  parentObj$$164.FHalfCarry = true;
  parentObj$$164.FSubtract = parentObj$$164.FCarry = false;
  return
}
function v240(parentObj$$163) {
  parentObj$$163.registerA = parentObj$$163.registerA & parentObj$$163.registerD;
  parentObj$$163.FZero = parentObj$$163.registerA == 0;
  parentObj$$163.FHalfCarry = true;
  parentObj$$163.FSubtract = parentObj$$163.FCarry = false;
  return
}
function v239(parentObj$$162) {
  parentObj$$162.registerA = parentObj$$162.registerA & parentObj$$162.registerC;
  parentObj$$162.FZero = parentObj$$162.registerA == 0;
  parentObj$$162.FHalfCarry = true;
  parentObj$$162.FSubtract = parentObj$$162.FCarry = false;
  return
}
function v238(parentObj$$161) {
  parentObj$$161.registerA = parentObj$$161.registerA & parentObj$$161.registerB;
  parentObj$$161.FZero = parentObj$$161.registerA == 0;
  parentObj$$161.FHalfCarry = true;
  parentObj$$161.FSubtract = parentObj$$161.FCarry = false;
  return
}
function v237(parentObj$$160) {
  if(parentObj$$160.FCarry) {
    parentObj$$160.FZero = false;
    parentObj$$160.FSubtract = parentObj$$160.FHalfCarry = parentObj$$160.FCarry = true;
    parentObj$$160.registerA = 255
  }else {
    parentObj$$160.FHalfCarry = parentObj$$160.FCarry = false;
    parentObj$$160.FSubtract = parentObj$$160.FZero = true;
    parentObj$$160.registerA = 0
  }
  return
}
function v236(parentObj$$159) {
  var v4364 = parentObj$$159.memoryReader;
  var temp_var$$8 = JAM.call(JAM.get(v4364, parentObj$$159.registersHL, JAM.policy.p1), v4364, [parentObj$$159, parentObj$$159.registersHL]);
  var v4367 = parentObj$$159.registerA - temp_var$$8;
  var v7744;
  if(parentObj$$159.FCarry) {
    v7744 = 1
  }else {
    v7744 = 0
  }
  var dirtySum$$31 = v4367 - v7744;
  var v7745 = (parentObj$$159.registerA & 15) - (temp_var$$8 & 15);
  var v9366;
  if(parentObj$$159.FCarry) {
    v9366 = 1
  }else {
    v9366 = 0
  }
  parentObj$$159.FHalfCarry = v7745 - v9366 < 0;
  parentObj$$159.FCarry = dirtySum$$31 < 0;
  parentObj$$159.registerA = dirtySum$$31 & 255;
  parentObj$$159.FZero = parentObj$$159.registerA == 0;
  parentObj$$159.FSubtract = true;
  return
}
function v235(parentObj$$158) {
  var v4371 = parentObj$$158.registerA - (parentObj$$158.registersHL & 255);
  var v7749;
  if(parentObj$$158.FCarry) {
    v7749 = 1
  }else {
    v7749 = 0
  }
  var dirtySum$$30 = v4371 - v7749;
  var v7750 = (parentObj$$158.registerA & 15) - (parentObj$$158.registersHL & 15);
  var v9371;
  if(parentObj$$158.FCarry) {
    v9371 = 1
  }else {
    v9371 = 0
  }
  parentObj$$158.FHalfCarry = v7750 - v9371 < 0;
  parentObj$$158.FCarry = dirtySum$$30 < 0;
  parentObj$$158.registerA = dirtySum$$30 & 255;
  parentObj$$158.FZero = parentObj$$158.registerA == 0;
  parentObj$$158.FSubtract = true;
  return
}
function v234(parentObj$$157) {
  var temp_var$$7 = parentObj$$157.registersHL >> 8;
  var v4376 = parentObj$$157.registerA - temp_var$$7;
  var v7753;
  if(parentObj$$157.FCarry) {
    v7753 = 1
  }else {
    v7753 = 0
  }
  var dirtySum$$29 = v4376 - v7753;
  var v7754 = (parentObj$$157.registerA & 15) - (temp_var$$7 & 15);
  var v9375;
  if(parentObj$$157.FCarry) {
    v9375 = 1
  }else {
    v9375 = 0
  }
  parentObj$$157.FHalfCarry = v7754 - v9375 < 0;
  parentObj$$157.FCarry = dirtySum$$29 < 0;
  parentObj$$157.registerA = dirtySum$$29 & 255;
  parentObj$$157.FZero = parentObj$$157.registerA == 0;
  parentObj$$157.FSubtract = true;
  return
}
function v233(parentObj$$156) {
  var v4380 = parentObj$$156.registerA - parentObj$$156.registerE;
  var v7758;
  if(parentObj$$156.FCarry) {
    v7758 = 1
  }else {
    v7758 = 0
  }
  var dirtySum$$28 = v4380 - v7758;
  var v7759 = (parentObj$$156.registerA & 15) - (parentObj$$156.registerE & 15);
  var v9379;
  if(parentObj$$156.FCarry) {
    v9379 = 1
  }else {
    v9379 = 0
  }
  parentObj$$156.FHalfCarry = v7759 - v9379 < 0;
  parentObj$$156.FCarry = dirtySum$$28 < 0;
  parentObj$$156.registerA = dirtySum$$28 & 255;
  parentObj$$156.FZero = parentObj$$156.registerA == 0;
  parentObj$$156.FSubtract = true;
  return
}
function v232(parentObj$$155) {
  var v4384 = parentObj$$155.registerA - parentObj$$155.registerD;
  var v7763;
  if(parentObj$$155.FCarry) {
    v7763 = 1
  }else {
    v7763 = 0
  }
  var dirtySum$$27 = v4384 - v7763;
  var v7764 = (parentObj$$155.registerA & 15) - (parentObj$$155.registerD & 15);
  var v9383;
  if(parentObj$$155.FCarry) {
    v9383 = 1
  }else {
    v9383 = 0
  }
  parentObj$$155.FHalfCarry = v7764 - v9383 < 0;
  parentObj$$155.FCarry = dirtySum$$27 < 0;
  parentObj$$155.registerA = dirtySum$$27 & 255;
  parentObj$$155.FZero = parentObj$$155.registerA == 0;
  parentObj$$155.FSubtract = true;
  return
}
function v231(parentObj$$154) {
  var v4388 = parentObj$$154.registerA - parentObj$$154.registerC;
  var v7768;
  if(parentObj$$154.FCarry) {
    v7768 = 1
  }else {
    v7768 = 0
  }
  var dirtySum$$26 = v4388 - v7768;
  var v7769 = (parentObj$$154.registerA & 15) - (parentObj$$154.registerC & 15);
  var v9387;
  if(parentObj$$154.FCarry) {
    v9387 = 1
  }else {
    v9387 = 0
  }
  parentObj$$154.FHalfCarry = v7769 - v9387 < 0;
  parentObj$$154.FCarry = dirtySum$$26 < 0;
  parentObj$$154.registerA = dirtySum$$26 & 255;
  parentObj$$154.FZero = parentObj$$154.registerA == 0;
  parentObj$$154.FSubtract = true;
  return
}
function v230(parentObj$$153) {
  var v4392 = parentObj$$153.registerA - parentObj$$153.registerB;
  var v7773;
  if(parentObj$$153.FCarry) {
    v7773 = 1
  }else {
    v7773 = 0
  }
  var dirtySum$$25 = v4392 - v7773;
  var v7774 = (parentObj$$153.registerA & 15) - (parentObj$$153.registerB & 15);
  var v9391;
  if(parentObj$$153.FCarry) {
    v9391 = 1
  }else {
    v9391 = 0
  }
  parentObj$$153.FHalfCarry = v7774 - v9391 < 0;
  parentObj$$153.FCarry = dirtySum$$25 < 0;
  parentObj$$153.registerA = dirtySum$$25 & 255;
  parentObj$$153.FZero = parentObj$$153.registerA == 0;
  parentObj$$153.FSubtract = true;
  return
}
function v229(parentObj$$152) {
  parentObj$$152.registerA = 0;
  parentObj$$152.FHalfCarry = parentObj$$152.FCarry = false;
  parentObj$$152.FZero = parentObj$$152.FSubtract = true;
  return
}
function v228(parentObj$$151) {
  var v4396 = parentObj$$151.registerA;
  var v7776 = parentObj$$151.memoryReader;
  var dirtySum$$24 = v4396 - JAM.call(JAM.get(v7776, parentObj$$151.registersHL, JAM.policy.p1), v7776, [parentObj$$151, parentObj$$151.registersHL]);
  parentObj$$151.FHalfCarry = (parentObj$$151.registerA & 15) < (dirtySum$$24 & 15);
  parentObj$$151.FCarry = dirtySum$$24 < 0;
  parentObj$$151.registerA = dirtySum$$24 & 255;
  parentObj$$151.FZero = dirtySum$$24 == 0;
  parentObj$$151.FSubtract = true;
  return
}
function v227(parentObj$$150) {
  var dirtySum$$23 = parentObj$$150.registerA - (parentObj$$150.registersHL & 255);
  parentObj$$150.FHalfCarry = (parentObj$$150.registerA & 15) < (dirtySum$$23 & 15);
  parentObj$$150.FCarry = dirtySum$$23 < 0;
  parentObj$$150.registerA = dirtySum$$23 & 255;
  parentObj$$150.FZero = dirtySum$$23 == 0;
  parentObj$$150.FSubtract = true;
  return
}
function v226(parentObj$$149) {
  var dirtySum$$22 = parentObj$$149.registerA - (parentObj$$149.registersHL >> 8);
  parentObj$$149.FHalfCarry = (parentObj$$149.registerA & 15) < (dirtySum$$22 & 15);
  parentObj$$149.FCarry = dirtySum$$22 < 0;
  parentObj$$149.registerA = dirtySum$$22 & 255;
  parentObj$$149.FZero = dirtySum$$22 == 0;
  parentObj$$149.FSubtract = true;
  return
}
function v225(parentObj$$148) {
  var dirtySum$$21 = parentObj$$148.registerA - parentObj$$148.registerE;
  parentObj$$148.FHalfCarry = (parentObj$$148.registerA & 15) < (dirtySum$$21 & 15);
  parentObj$$148.FCarry = dirtySum$$21 < 0;
  parentObj$$148.registerA = dirtySum$$21 & 255;
  parentObj$$148.FZero = dirtySum$$21 == 0;
  parentObj$$148.FSubtract = true;
  return
}
function v224(parentObj$$147) {
  var dirtySum$$20 = parentObj$$147.registerA - parentObj$$147.registerD;
  parentObj$$147.FHalfCarry = (parentObj$$147.registerA & 15) < (dirtySum$$20 & 15);
  parentObj$$147.FCarry = dirtySum$$20 < 0;
  parentObj$$147.registerA = dirtySum$$20 & 255;
  parentObj$$147.FZero = dirtySum$$20 == 0;
  parentObj$$147.FSubtract = true;
  return
}
function v223(parentObj$$146) {
  var dirtySum$$19 = parentObj$$146.registerA - parentObj$$146.registerC;
  parentObj$$146.FHalfCarry = (parentObj$$146.registerA & 15) < (dirtySum$$19 & 15);
  parentObj$$146.FCarry = dirtySum$$19 < 0;
  parentObj$$146.registerA = dirtySum$$19 & 255;
  parentObj$$146.FZero = dirtySum$$19 == 0;
  parentObj$$146.FSubtract = true;
  return
}
function v222(parentObj$$145) {
  var dirtySum$$18 = parentObj$$145.registerA - parentObj$$145.registerB;
  parentObj$$145.FHalfCarry = (parentObj$$145.registerA & 15) < (dirtySum$$18 & 15);
  parentObj$$145.FCarry = dirtySum$$18 < 0;
  parentObj$$145.registerA = dirtySum$$18 & 255;
  parentObj$$145.FZero = dirtySum$$18 == 0;
  parentObj$$145.FSubtract = true;
  return
}
function v221(parentObj$$144) {
  var v4424 = parentObj$$144.registerA << 1;
  var v7789;
  if(parentObj$$144.FCarry) {
    v7789 = 1
  }else {
    v7789 = 0
  }
  var dirtySum$$17 = v4424 | v7789;
  var v7790 = parentObj$$144.registerA << 1 & 30;
  var v9394;
  if(parentObj$$144.FCarry) {
    v9394 = 1
  }else {
    v9394 = 0
  }
  parentObj$$144.FHalfCarry = (v7790 | v9394) > 15;
  parentObj$$144.FCarry = dirtySum$$17 > 255;
  parentObj$$144.registerA = dirtySum$$17 & 255;
  parentObj$$144.FZero = parentObj$$144.registerA == 0;
  parentObj$$144.FSubtract = false;
  return
}
function v220(parentObj$$143) {
  var v4428 = parentObj$$143.memoryReader;
  var tempValue$$2 = JAM.call(JAM.get(v4428, parentObj$$143.registersHL, JAM.policy.p1), v4428, [parentObj$$143, parentObj$$143.registersHL]);
  var v4431 = parentObj$$143.registerA + tempValue$$2;
  var v7793;
  if(parentObj$$143.FCarry) {
    v7793 = 1
  }else {
    v7793 = 0
  }
  var dirtySum$$16 = v4431 + v7793;
  var v7794 = (parentObj$$143.registerA & 15) + (tempValue$$2 & 15);
  var v9398;
  if(parentObj$$143.FCarry) {
    v9398 = 1
  }else {
    v9398 = 0
  }
  parentObj$$143.FHalfCarry = v7794 + v9398 > 15;
  parentObj$$143.FCarry = dirtySum$$16 > 255;
  parentObj$$143.registerA = dirtySum$$16 & 255;
  parentObj$$143.FZero = parentObj$$143.registerA == 0;
  parentObj$$143.FSubtract = false;
  return
}
function v219(parentObj$$142) {
  var tempValue$$1 = parentObj$$142.registersHL & 255;
  var v4436 = parentObj$$142.registerA + tempValue$$1;
  var v7797;
  if(parentObj$$142.FCarry) {
    v7797 = 1
  }else {
    v7797 = 0
  }
  var dirtySum$$15 = v4436 + v7797;
  var v7798 = (parentObj$$142.registerA & 15) + (tempValue$$1 & 15);
  var v9402;
  if(parentObj$$142.FCarry) {
    v9402 = 1
  }else {
    v9402 = 0
  }
  parentObj$$142.FHalfCarry = v7798 + v9402 > 15;
  parentObj$$142.FCarry = dirtySum$$15 > 255;
  parentObj$$142.registerA = dirtySum$$15 & 255;
  parentObj$$142.FZero = parentObj$$142.registerA == 0;
  parentObj$$142.FSubtract = false;
  return
}
function v218(parentObj$$141) {
  var tempValue = parentObj$$141.registersHL >> 8;
  var v4441 = parentObj$$141.registerA + tempValue;
  var v7801;
  if(parentObj$$141.FCarry) {
    v7801 = 1
  }else {
    v7801 = 0
  }
  var dirtySum$$14 = v4441 + v7801;
  var v7802 = (parentObj$$141.registerA & 15) + (tempValue & 15);
  var v9406;
  if(parentObj$$141.FCarry) {
    v9406 = 1
  }else {
    v9406 = 0
  }
  parentObj$$141.FHalfCarry = v7802 + v9406 > 15;
  parentObj$$141.FCarry = dirtySum$$14 > 255;
  parentObj$$141.registerA = dirtySum$$14 & 255;
  parentObj$$141.FZero = parentObj$$141.registerA == 0;
  parentObj$$141.FSubtract = false;
  return
}
function v217(parentObj$$140) {
  var v4445 = parentObj$$140.registerA + parentObj$$140.registerE;
  var v7806;
  if(parentObj$$140.FCarry) {
    v7806 = 1
  }else {
    v7806 = 0
  }
  var dirtySum$$13 = v4445 + v7806;
  var v7807 = (parentObj$$140.registerA & 15) + (parentObj$$140.registerE & 15);
  var v9410;
  if(parentObj$$140.FCarry) {
    v9410 = 1
  }else {
    v9410 = 0
  }
  parentObj$$140.FHalfCarry = v7807 + v9410 > 15;
  parentObj$$140.FCarry = dirtySum$$13 > 255;
  parentObj$$140.registerA = dirtySum$$13 & 255;
  parentObj$$140.FZero = parentObj$$140.registerA == 0;
  parentObj$$140.FSubtract = false;
  return
}
function v216(parentObj$$139) {
  var v4449 = parentObj$$139.registerA + parentObj$$139.registerD;
  var v7811;
  if(parentObj$$139.FCarry) {
    v7811 = 1
  }else {
    v7811 = 0
  }
  var dirtySum$$12 = v4449 + v7811;
  var v7812 = (parentObj$$139.registerA & 15) + (parentObj$$139.registerD & 15);
  var v9414;
  if(parentObj$$139.FCarry) {
    v9414 = 1
  }else {
    v9414 = 0
  }
  parentObj$$139.FHalfCarry = v7812 + v9414 > 15;
  parentObj$$139.FCarry = dirtySum$$12 > 255;
  parentObj$$139.registerA = dirtySum$$12 & 255;
  parentObj$$139.FZero = parentObj$$139.registerA == 0;
  parentObj$$139.FSubtract = false;
  return
}
function v215(parentObj$$138) {
  var v4453 = parentObj$$138.registerA + parentObj$$138.registerC;
  var v7816;
  if(parentObj$$138.FCarry) {
    v7816 = 1
  }else {
    v7816 = 0
  }
  var dirtySum$$11 = v4453 + v7816;
  var v7817 = (parentObj$$138.registerA & 15) + (parentObj$$138.registerC & 15);
  var v9418;
  if(parentObj$$138.FCarry) {
    v9418 = 1
  }else {
    v9418 = 0
  }
  parentObj$$138.FHalfCarry = v7817 + v9418 > 15;
  parentObj$$138.FCarry = dirtySum$$11 > 255;
  parentObj$$138.registerA = dirtySum$$11 & 255;
  parentObj$$138.FZero = parentObj$$138.registerA == 0;
  parentObj$$138.FSubtract = false;
  return
}
function v214(parentObj$$137) {
  var v4457 = parentObj$$137.registerA + parentObj$$137.registerB;
  var v7821;
  if(parentObj$$137.FCarry) {
    v7821 = 1
  }else {
    v7821 = 0
  }
  var dirtySum$$10 = v4457 + v7821;
  var v7822 = (parentObj$$137.registerA & 15) + (parentObj$$137.registerB & 15);
  var v9422;
  if(parentObj$$137.FCarry) {
    v9422 = 1
  }else {
    v9422 = 0
  }
  parentObj$$137.FHalfCarry = v7822 + v9422 > 15;
  parentObj$$137.FCarry = dirtySum$$10 > 255;
  parentObj$$137.registerA = dirtySum$$10 & 255;
  parentObj$$137.FZero = parentObj$$137.registerA == 0;
  parentObj$$137.FSubtract = false;
  return
}
function v213(parentObj$$136) {
  parentObj$$136.FHalfCarry = (parentObj$$136.registerA & 8) == 8;
  parentObj$$136.FCarry = parentObj$$136.registerA > 127;
  parentObj$$136.registerA = parentObj$$136.registerA << 1 & 255;
  parentObj$$136.FZero = parentObj$$136.registerA == 0;
  parentObj$$136.FSubtract = false;
  return
}
function v212(parentObj$$135) {
  var v4465 = parentObj$$135.registerA;
  var v7826 = parentObj$$135.memoryReader;
  var dirtySum$$9 = v4465 + JAM.call(JAM.get(v7826, parentObj$$135.registersHL, JAM.policy.p1), v7826, [parentObj$$135, parentObj$$135.registersHL]);
  parentObj$$135.FHalfCarry = (dirtySum$$9 & 15) < (parentObj$$135.registerA & 15);
  parentObj$$135.FCarry = dirtySum$$9 > 255;
  parentObj$$135.registerA = dirtySum$$9 & 255;
  parentObj$$135.FZero = parentObj$$135.registerA == 0;
  parentObj$$135.FSubtract = false;
  return
}
function v211(parentObj$$134) {
  var dirtySum$$8 = parentObj$$134.registerA + (parentObj$$134.registersHL & 255);
  parentObj$$134.FHalfCarry = (dirtySum$$8 & 15) < (parentObj$$134.registerA & 15);
  parentObj$$134.FCarry = dirtySum$$8 > 255;
  parentObj$$134.registerA = dirtySum$$8 & 255;
  parentObj$$134.FZero = parentObj$$134.registerA == 0;
  parentObj$$134.FSubtract = false;
  return
}
function v210(parentObj$$133) {
  var dirtySum$$7 = parentObj$$133.registerA + (parentObj$$133.registersHL >> 8);
  parentObj$$133.FHalfCarry = (dirtySum$$7 & 15) < (parentObj$$133.registerA & 15);
  parentObj$$133.FCarry = dirtySum$$7 > 255;
  parentObj$$133.registerA = dirtySum$$7 & 255;
  parentObj$$133.FZero = parentObj$$133.registerA == 0;
  parentObj$$133.FSubtract = false;
  return
}
function v209(parentObj$$132) {
  var dirtySum$$6 = parentObj$$132.registerA + parentObj$$132.registerE;
  parentObj$$132.FHalfCarry = (dirtySum$$6 & 15) < (parentObj$$132.registerA & 15);
  parentObj$$132.FCarry = dirtySum$$6 > 255;
  parentObj$$132.registerA = dirtySum$$6 & 255;
  parentObj$$132.FZero = parentObj$$132.registerA == 0;
  parentObj$$132.FSubtract = false;
  return
}
function v208(parentObj$$131) {
  var dirtySum$$5 = parentObj$$131.registerA + parentObj$$131.registerD;
  parentObj$$131.FHalfCarry = (dirtySum$$5 & 15) < (parentObj$$131.registerA & 15);
  parentObj$$131.FCarry = dirtySum$$5 > 255;
  parentObj$$131.registerA = dirtySum$$5 & 255;
  parentObj$$131.FZero = parentObj$$131.registerA == 0;
  parentObj$$131.FSubtract = false;
  return
}
function v207(parentObj$$130) {
  var dirtySum$$4 = parentObj$$130.registerA + parentObj$$130.registerC;
  parentObj$$130.FHalfCarry = (dirtySum$$4 & 15) < (parentObj$$130.registerA & 15);
  parentObj$$130.FCarry = dirtySum$$4 > 255;
  parentObj$$130.registerA = dirtySum$$4 & 255;
  parentObj$$130.FZero = parentObj$$130.registerA == 0;
  parentObj$$130.FSubtract = false;
  return
}
function v206(parentObj$$129) {
  var dirtySum$$3 = parentObj$$129.registerA + parentObj$$129.registerB;
  parentObj$$129.FHalfCarry = (dirtySum$$3 & 15) < (parentObj$$129.registerA & 15);
  parentObj$$129.FCarry = dirtySum$$3 > 255;
  parentObj$$129.registerA = dirtySum$$3 & 255;
  parentObj$$129.FZero = parentObj$$129.registerA == 0;
  parentObj$$129.FSubtract = false;
  return
}
function v205(parentObj$$128) {
  return
}
function v204(parentObj$$127) {
  var v4500 = parentObj$$127;
  var v7838 = parentObj$$127.memoryReader;
  var v10929 = JAM.call(JAM.get(v7838, parentObj$$127.registersHL, JAM.policy.p1), v7838, [parentObj$$127, parentObj$$127.registersHL]);
  v4500.registerA = v10929;
  return
}
function v203(parentObj$$126) {
  parentObj$$126.registerA = parentObj$$126.registersHL & 255;
  return
}
function v202(parentObj$$125) {
  parentObj$$125.registerA = parentObj$$125.registersHL >> 8;
  return
}
function v201(parentObj$$124) {
  parentObj$$124.registerA = parentObj$$124.registerE;
  return
}
function v200(parentObj$$123) {
  parentObj$$123.registerA = parentObj$$123.registerD;
  return
}
function v199(parentObj$$122) {
  parentObj$$122.registerA = parentObj$$122.registerC;
  return
}
function v198(parentObj$$121) {
  parentObj$$121.registerA = parentObj$$121.registerB;
  return
}
function v197(parentObj$$120) {
  var v4503 = parentObj$$120.memoryWriter;
  JAM.call(JAM.get(v4503, parentObj$$120.registersHL, JAM.policy.p1), v4503, [parentObj$$120, parentObj$$120.registersHL, parentObj$$120.registerA]);
  return
}
function v196(parentObj$$119) {
  if((parentObj$$119.interruptsEnabled & parentObj$$119.interruptsRequested & 31) > 0) {
    var v7842 = !parentObj$$119.cGBC;
    if(v7842) {
      v7842 = !parentObj$$119.usedBootROM
    }
    if(v7842) {
      parentObj$$119.skipPCIncrement = true
    }else {
      parentObj$$119.CPUTicks = parentObj$$119.CPUTicks + 4
    }
  }else {
    parentObj$$119.calculateHALTPeriod()
  }
  return
}
function v195(parentObj$$118) {
  var v4509 = parentObj$$118.memoryWriter;
  JAM.call(JAM.get(v4509, parentObj$$118.registersHL, JAM.policy.p1), v4509, [parentObj$$118, parentObj$$118.registersHL, parentObj$$118.registersHL & 255]);
  return
}
function v194(parentObj$$117) {
  var v4513 = parentObj$$117.memoryWriter;
  JAM.call(JAM.get(v4513, parentObj$$117.registersHL, JAM.policy.p1), v4513, [parentObj$$117, parentObj$$117.registersHL, parentObj$$117.registersHL >> 8]);
  return
}
function v193(parentObj$$116) {
  var v4517 = parentObj$$116.memoryWriter;
  JAM.call(JAM.get(v4517, parentObj$$116.registersHL, JAM.policy.p1), v4517, [parentObj$$116, parentObj$$116.registersHL, parentObj$$116.registerE]);
  return
}
function v192(parentObj$$115) {
  var v4521 = parentObj$$115.memoryWriter;
  JAM.call(JAM.get(v4521, parentObj$$115.registersHL, JAM.policy.p1), v4521, [parentObj$$115, parentObj$$115.registersHL, parentObj$$115.registerD]);
  return
}
function v191(parentObj$$114) {
  var v4525 = parentObj$$114.memoryWriter;
  JAM.call(JAM.get(v4525, parentObj$$114.registersHL, JAM.policy.p1), v4525, [parentObj$$114, parentObj$$114.registersHL, parentObj$$114.registerC]);
  return
}
function v190(parentObj$$113) {
  var v4529 = parentObj$$113.memoryWriter;
  JAM.call(JAM.get(v4529, parentObj$$113.registersHL, JAM.policy.p1), v4529, [parentObj$$113, parentObj$$113.registersHL, parentObj$$113.registerB]);
  return
}
function v189(parentObj$$112) {
  parentObj$$112.registersHL = parentObj$$112.registersHL & 65280 | parentObj$$112.registerA;
  return
}
function v188(parentObj$$111) {
  var v4535 = parentObj$$111;
  var v7847 = parentObj$$111.registersHL & 65280;
  var v9427 = parentObj$$111.memoryReader;
  v4535.registersHL = v7847 | JAM.call(JAM.get(v9427, parentObj$$111.registersHL, JAM.policy.p1), v9427, [parentObj$$111, parentObj$$111.registersHL]);
  return
}
function v187(parentObj$$110) {
  return
}
function v186(parentObj$$109) {
  parentObj$$109.registersHL = parentObj$$109.registersHL & 65280 | parentObj$$109.registersHL >> 8;
  return
}
function v185(parentObj$$108) {
  parentObj$$108.registersHL = parentObj$$108.registersHL & 65280 | parentObj$$108.registerE;
  return
}
function v184(parentObj$$107) {
  parentObj$$107.registersHL = parentObj$$107.registersHL & 65280 | parentObj$$107.registerD;
  return
}
function v183(parentObj$$106) {
  parentObj$$106.registersHL = parentObj$$106.registersHL & 65280 | parentObj$$106.registerC;
  return
}
function v182(parentObj$$105) {
  parentObj$$105.registersHL = parentObj$$105.registersHL & 65280 | parentObj$$105.registerB;
  return
}
function v181(parentObj$$104) {
  parentObj$$104.registersHL = parentObj$$104.registerA << 8 | parentObj$$104.registersHL & 255;
  return
}
function v180(parentObj$$103) {
  var v4548 = parentObj$$103;
  var v10215 = parentObj$$103.memoryReader;
  v4548.registersHL = JAM.call(JAM.get(v10215, parentObj$$103.registersHL, JAM.policy.p1), v10215, [parentObj$$103, parentObj$$103.registersHL]) << 8 | parentObj$$103.registersHL & 255;
  return
}
function v179(parentObj$$102) {
  parentObj$$102.registersHL = (parentObj$$102.registersHL & 255) * 257;
  return
}
function v178(parentObj$$101) {
  return
}
function v177(parentObj$$100) {
  parentObj$$100.registersHL = parentObj$$100.registerE << 8 | parentObj$$100.registersHL & 255;
  return
}
function v176(parentObj$$99) {
  parentObj$$99.registersHL = parentObj$$99.registerD << 8 | parentObj$$99.registersHL & 255;
  return
}
function v175(parentObj$$98) {
  parentObj$$98.registersHL = parentObj$$98.registerC << 8 | parentObj$$98.registersHL & 255;
  return
}
function v174(parentObj$$97) {
  parentObj$$97.registersHL = parentObj$$97.registerB << 8 | parentObj$$97.registersHL & 255;
  return
}
function v173(parentObj$$96) {
  parentObj$$96.registerE = parentObj$$96.registerA;
  return
}
function v172(parentObj$$95) {
  var v4558 = parentObj$$95;
  var v7868 = parentObj$$95.memoryReader;
  var v10930 = JAM.call(JAM.get(v7868, parentObj$$95.registersHL, JAM.policy.p1), v7868, [parentObj$$95, parentObj$$95.registersHL]);
  v4558.registerE = v10930;
  return
}
function v171(parentObj$$94) {
  parentObj$$94.registerE = parentObj$$94.registersHL & 255;
  return
}
function v170(parentObj$$93) {
  parentObj$$93.registerE = parentObj$$93.registersHL >> 8;
  return
}
function v169(parentObj$$92) {
  return
}
function v168(parentObj$$91) {
  parentObj$$91.registerE = parentObj$$91.registerD;
  return
}
function v167(parentObj$$90) {
  parentObj$$90.registerE = parentObj$$90.registerC;
  return
}
function v166(parentObj$$89) {
  parentObj$$89.registerE = parentObj$$89.registerB;
  return
}
function v165(parentObj$$88) {
  parentObj$$88.registerD = parentObj$$88.registerA;
  return
}
function v164(parentObj$$87) {
  var v4561 = parentObj$$87;
  var v7871 = parentObj$$87.memoryReader;
  var v10931 = JAM.call(JAM.get(v7871, parentObj$$87.registersHL, JAM.policy.p1), v7871, [parentObj$$87, parentObj$$87.registersHL]);
  v4561.registerD = v10931;
  return
}
function v163(parentObj$$86) {
  parentObj$$86.registerD = parentObj$$86.registersHL & 255;
  return
}
function v162(parentObj$$85) {
  parentObj$$85.registerD = parentObj$$85.registersHL >> 8;
  return
}
function v161(parentObj$$84) {
  parentObj$$84.registerD = parentObj$$84.registerE;
  return
}
function v160(parentObj$$83) {
  return
}
function v159(parentObj$$82) {
  parentObj$$82.registerD = parentObj$$82.registerC;
  return
}
function v158(parentObj$$81) {
  parentObj$$81.registerD = parentObj$$81.registerB;
  return
}
function v157(parentObj$$80) {
  parentObj$$80.registerC = parentObj$$80.registerA;
  return
}
function v156(parentObj$$79) {
  var v4564 = parentObj$$79;
  var v7874 = parentObj$$79.memoryReader;
  var v10932 = JAM.call(JAM.get(v7874, parentObj$$79.registersHL, JAM.policy.p1), v7874, [parentObj$$79, parentObj$$79.registersHL]);
  v4564.registerC = v10932;
  return
}
function v155(parentObj$$78) {
  parentObj$$78.registerC = parentObj$$78.registersHL & 255;
  return
}
function v154(parentObj$$77) {
  parentObj$$77.registerC = parentObj$$77.registersHL >> 8;
  return
}
function v153(parentObj$$76) {
  parentObj$$76.registerC = parentObj$$76.registerE;
  return
}
function v152(parentObj$$75) {
  parentObj$$75.registerC = parentObj$$75.registerD;
  return
}
function v151(parentObj$$74) {
  return
}
function v150(parentObj$$73) {
  parentObj$$73.registerC = parentObj$$73.registerB;
  return
}
function v149(parentObj$$72) {
  parentObj$$72.registerB = parentObj$$72.registerA;
  return
}
function v148(parentObj$$71) {
  var v4567 = parentObj$$71;
  var v7877 = parentObj$$71.memoryReader;
  var v10933 = JAM.call(JAM.get(v7877, parentObj$$71.registersHL, JAM.policy.p1), v7877, [parentObj$$71, parentObj$$71.registersHL]);
  v4567.registerB = v10933;
  return
}
function v147(parentObj$$70) {
  parentObj$$70.registerB = parentObj$$70.registersHL & 255;
  return
}
function v146(parentObj$$69) {
  parentObj$$69.registerB = parentObj$$69.registersHL >> 8;
  return
}
function v145(parentObj$$68) {
  parentObj$$68.registerB = parentObj$$68.registerE;
  return
}
function v144(parentObj$$67) {
  parentObj$$67.registerB = parentObj$$67.registerD;
  return
}
function v143(parentObj$$66) {
  parentObj$$66.registerB = parentObj$$66.registerC;
  return
}
function v142(parentObj$$65) {
  return
}
function v141(parentObj$$64) {
  parentObj$$64.FCarry = !parentObj$$64.FCarry;
  parentObj$$64.FSubtract = parentObj$$64.FHalfCarry = false;
  return
}
function v140(parentObj$$63) {
  var v4571 = parentObj$$63;
  var v7880 = parentObj$$63.memoryReader;
  var v10934 = JAM.call(JAM.get(v7880, parentObj$$63.programCounter, JAM.policy.p1), v7880, [parentObj$$63, parentObj$$63.programCounter]);
  v4571.registerA = v10934;
  parentObj$$63.programCounter = parentObj$$63.programCounter + 1 & 65535;
  return
}
function v139(parentObj$$62) {
  parentObj$$62.registerA = parentObj$$62.registerA - 1 & 255;
  parentObj$$62.FZero = parentObj$$62.registerA == 0;
  parentObj$$62.FHalfCarry = (parentObj$$62.registerA & 15) == 15;
  parentObj$$62.FSubtract = true;
  return
}
function v138(parentObj$$61) {
  parentObj$$61.registerA = parentObj$$61.registerA + 1 & 255;
  parentObj$$61.FZero = parentObj$$61.registerA == 0;
  parentObj$$61.FHalfCarry = (parentObj$$61.registerA & 15) == 0;
  parentObj$$61.FSubtract = false;
  return
}
function v137(parentObj$$60) {
  parentObj$$60.stackPointer = parentObj$$60.stackPointer - 1 & 65535;
  return
}
function v136(parentObj$$59) {
  var v4580 = parentObj$$59;
  var v7889 = parentObj$$59.memoryReader;
  var v10935 = JAM.call(JAM.get(v7889, parentObj$$59.registersHL, JAM.policy.p1), v7889, [parentObj$$59, parentObj$$59.registersHL]);
  v4580.registerA = v10935;
  parentObj$$59.registersHL = parentObj$$59.registersHL - 1 & 65535;
  return
}
function v135(parentObj$$58) {
  var dirtySum$$2 = parentObj$$58.registersHL + parentObj$$58.stackPointer;
  parentObj$$58.FHalfCarry = (parentObj$$58.registersHL & 4095) > (dirtySum$$2 & 4095);
  parentObj$$58.FCarry = dirtySum$$2 > 65535;
  parentObj$$58.registersHL = dirtySum$$2 & 65535;
  parentObj$$58.FSubtract = false;
  return
}
function v134(parentObj$$57) {
  if(parentObj$$57.FCarry) {
    var v4586 = parentObj$$57;
    var v10218 = parentObj$$57.programCounter;
    var v10728 = parentObj$$57.memoryReader;
    v4586.programCounter = v10218 + (JAM.call(JAM.get(v10728, parentObj$$57.programCounter, JAM.policy.p1), v10728, [parentObj$$57, parentObj$$57.programCounter]) << 24 >> 24) + 1 & 65535;
    parentObj$$57.CPUTicks = parentObj$$57.CPUTicks + 4
  }else {
    parentObj$$57.programCounter = parentObj$$57.programCounter + 1 & 65535
  }
  return
}
function v133(parentObj$$56) {
  parentObj$$56.FCarry = true;
  parentObj$$56.FSubtract = parentObj$$56.FHalfCarry = false;
  return
}
function v132(parentObj$$55) {
  var v4589 = parentObj$$55.memoryWriter;
  var v4590 = parentObj$$55.registersHL;
  var v4591 = parentObj$$55.registersHL;
  var v7897 = parentObj$$55.memoryReader;
  JAM.call(JAM.get(v4589, v4590, JAM.policy.p1), v4589, [parentObj$$55, v4591, JAM.call(JAM.get(v7897, parentObj$$55.programCounter, JAM.policy.p1), v7897, [parentObj$$55, parentObj$$55.programCounter])]);
  parentObj$$55.programCounter = parentObj$$55.programCounter + 1 & 65535;
  return
}
function v131(parentObj$$54) {
  var v9433 = parentObj$$54.memoryReader;
  var temp_var$$6 = JAM.call(JAM.get(v9433, parentObj$$54.registersHL, JAM.policy.p1), v9433, [parentObj$$54, parentObj$$54.registersHL]) - 1 & 255;
  parentObj$$54.FZero = temp_var$$6 == 0;
  parentObj$$54.FHalfCarry = (temp_var$$6 & 15) == 15;
  parentObj$$54.FSubtract = true;
  var v4596 = parentObj$$54.memoryWriter;
  JAM.call(JAM.get(v4596, parentObj$$54.registersHL, JAM.policy.p1), v4596, [parentObj$$54, parentObj$$54.registersHL, temp_var$$6]);
  return
}
function v130(parentObj$$53) {
  var v9436 = parentObj$$53.memoryReader;
  var temp_var$$5 = JAM.call(JAM.get(v9436, parentObj$$53.registersHL, JAM.policy.p1), v9436, [parentObj$$53, parentObj$$53.registersHL]) + 1 & 255;
  parentObj$$53.FZero = temp_var$$5 == 0;
  parentObj$$53.FHalfCarry = (temp_var$$5 & 15) == 0;
  parentObj$$53.FSubtract = false;
  var v4601 = parentObj$$53.memoryWriter;
  JAM.call(JAM.get(v4601, parentObj$$53.registersHL, JAM.policy.p1), v4601, [parentObj$$53, parentObj$$53.registersHL, temp_var$$5]);
  return
}
function v129(parentObj$$52) {
  parentObj$$52.stackPointer = parentObj$$52.stackPointer + 1 & 65535;
  return
}
function v128(parentObj$$51) {
  var v4605 = parentObj$$51.memoryWriter;
  JAM.call(JAM.get(v4605, parentObj$$51.registersHL, JAM.policy.p1), v4605, [parentObj$$51, parentObj$$51.registersHL, parentObj$$51.registerA]);
  parentObj$$51.registersHL = parentObj$$51.registersHL - 1 & 65535;
  return
}
function v127(parentObj$$50) {
  var v4610 = parentObj$$50;
  var v7905 = JAM.call(parentObj$$50.memoryRead, parentObj$$50, [parentObj$$50.programCounter + 1 & 65535]) << 8;
  var v9440 = parentObj$$50.memoryReader;
  v4610.stackPointer = v7905 | JAM.call(JAM.get(v9440, parentObj$$50.programCounter, JAM.policy.p1), v9440, [parentObj$$50, parentObj$$50.programCounter]);
  parentObj$$50.programCounter = parentObj$$50.programCounter + 2 & 65535;
  return
}
function v126(parentObj$$49) {
  if(!parentObj$$49.FCarry) {
    var v4612 = parentObj$$49;
    var v10221 = parentObj$$49.programCounter;
    var v10731 = parentObj$$49.memoryReader;
    v4612.programCounter = v10221 + (JAM.call(JAM.get(v10731, parentObj$$49.programCounter, JAM.policy.p1), v10731, [parentObj$$49, parentObj$$49.programCounter]) << 24 >> 24) + 1 & 65535;
    parentObj$$49.CPUTicks = parentObj$$49.CPUTicks + 4
  }else {
    parentObj$$49.programCounter = parentObj$$49.programCounter + 1 & 65535
  }
  return
}
function v125(parentObj$$48) {
  parentObj$$48.registerA = parentObj$$48.registerA ^ 255;
  parentObj$$48.FSubtract = parentObj$$48.FHalfCarry = true;
  return
}
function v124(parentObj$$47) {
  var v4615 = parentObj$$47;
  var v7913 = parentObj$$47.registersHL & 65280;
  var v9445 = parentObj$$47.memoryReader;
  v4615.registersHL = v7913 | JAM.call(JAM.get(v9445, parentObj$$47.programCounter, JAM.policy.p1), v9445, [parentObj$$47, parentObj$$47.programCounter]);
  parentObj$$47.programCounter = parentObj$$47.programCounter + 1 & 65535;
  return
}
function v123(parentObj$$46) {
  var L$$1 = parentObj$$46.registersHL - 1 & 255;
  parentObj$$46.FZero = L$$1 == 0;
  parentObj$$46.FHalfCarry = (L$$1 & 15) == 15;
  parentObj$$46.FSubtract = true;
  parentObj$$46.registersHL = parentObj$$46.registersHL & 65280 | L$$1;
  return
}
function v122(parentObj$$45) {
  var L = parentObj$$45.registersHL + 1 & 255;
  parentObj$$45.FZero = L == 0;
  parentObj$$45.FHalfCarry = (L & 15) == 0;
  parentObj$$45.FSubtract = false;
  parentObj$$45.registersHL = parentObj$$45.registersHL & 65280 | L;
  return
}
function v121(parentObj$$44) {
  parentObj$$44.registersHL = parentObj$$44.registersHL - 1 & 65535;
  return
}
function v120(parentObj$$43) {
  var v4624 = parentObj$$43;
  var v7921 = parentObj$$43.memoryReader;
  var v10936 = JAM.call(JAM.get(v7921, parentObj$$43.registersHL, JAM.policy.p1), v7921, [parentObj$$43, parentObj$$43.registersHL]);
  v4624.registerA = v10936;
  parentObj$$43.registersHL = parentObj$$43.registersHL + 1 & 65535;
  return
}
function v119(parentObj$$42) {
  parentObj$$42.FHalfCarry = (parentObj$$42.registersHL & 4095) > 2047;
  parentObj$$42.FCarry = parentObj$$42.registersHL > 32767;
  parentObj$$42.registersHL = parentObj$$42.registersHL << 1 & 65535;
  parentObj$$42.FSubtract = false;
  return
}
function v118(parentObj$$41) {
  if(parentObj$$41.FZero) {
    var v4629 = parentObj$$41;
    var v10223 = parentObj$$41.programCounter;
    var v10734 = parentObj$$41.memoryReader;
    v4629.programCounter = v10223 + (JAM.call(JAM.get(v10734, parentObj$$41.programCounter, JAM.policy.p1), v10734, [parentObj$$41, parentObj$$41.programCounter]) << 24 >> 24) + 1 & 65535;
    parentObj$$41.CPUTicks = parentObj$$41.CPUTicks + 4
  }else {
    parentObj$$41.programCounter = parentObj$$41.programCounter + 1 & 65535
  }
  return
}
function v117(parentObj$$40) {
  if(!parentObj$$40.FSubtract) {
    var v7931 = parentObj$$40.FCarry;
    if(!v7931) {
      v7931 = parentObj$$40.registerA > 153
    }
    if(v7931) {
      parentObj$$40.registerA = parentObj$$40.registerA + 96 & 255;
      parentObj$$40.FCarry = true
    }
    var v7933 = parentObj$$40.FHalfCarry;
    if(!v7933) {
      v7933 = (parentObj$$40.registerA & 15) > 9
    }
    if(v7933) {
      parentObj$$40.registerA = parentObj$$40.registerA + 6 & 255;
      parentObj$$40.FHalfCarry = false
    }
  }else {
    var v7935 = parentObj$$40.FCarry;
    if(v7935) {
      v7935 = parentObj$$40.FHalfCarry
    }
    if(v7935) {
      parentObj$$40.registerA = parentObj$$40.registerA + 154 & 255;
      parentObj$$40.FHalfCarry = false
    }else {
      if(parentObj$$40.FCarry) {
        parentObj$$40.registerA = parentObj$$40.registerA + 160 & 255
      }else {
        if(parentObj$$40.FHalfCarry) {
          parentObj$$40.registerA = parentObj$$40.registerA + 250 & 255;
          parentObj$$40.FHalfCarry = false
        }
      }
    }
  }
  parentObj$$40.FZero = parentObj$$40.registerA == 0;
  return
}
function v116(parentObj$$39) {
  var v4644 = parentObj$$39;
  var v10226 = parentObj$$39.memoryReader;
  v4644.registersHL = JAM.call(JAM.get(v10226, parentObj$$39.programCounter, JAM.policy.p1), v10226, [parentObj$$39, parentObj$$39.programCounter]) << 8 | parentObj$$39.registersHL & 255;
  parentObj$$39.programCounter = parentObj$$39.programCounter + 1 & 65535;
  return
}
function v115(parentObj$$38) {
  var H$$1 = (parentObj$$38.registersHL >> 8) - 1 & 255;
  parentObj$$38.FZero = H$$1 == 0;
  parentObj$$38.FHalfCarry = (H$$1 & 15) == 15;
  parentObj$$38.FSubtract = true;
  parentObj$$38.registersHL = H$$1 << 8 | parentObj$$38.registersHL & 255;
  return
}
function v114(parentObj$$37) {
  var H = (parentObj$$37.registersHL >> 8) + 1 & 255;
  parentObj$$37.FZero = H == 0;
  parentObj$$37.FHalfCarry = (H & 15) == 0;
  parentObj$$37.FSubtract = false;
  parentObj$$37.registersHL = H << 8 | parentObj$$37.registersHL & 255;
  return
}
function v113(parentObj$$36) {
  parentObj$$36.registersHL = parentObj$$36.registersHL + 1 & 65535;
  return
}
function v112(parentObj$$35) {
  var v4655 = parentObj$$35.memoryWriter;
  JAM.call(JAM.get(v4655, parentObj$$35.registersHL, JAM.policy.p1), v4655, [parentObj$$35, parentObj$$35.registersHL, parentObj$$35.registerA]);
  parentObj$$35.registersHL = parentObj$$35.registersHL + 1 & 65535;
  return
}
function v111(parentObj$$34) {
  var v4660 = parentObj$$34;
  var v7948 = JAM.call(parentObj$$34.memoryRead, parentObj$$34, [parentObj$$34.programCounter + 1 & 65535]) << 8;
  var v9458 = parentObj$$34.memoryReader;
  v4660.registersHL = v7948 | JAM.call(JAM.get(v9458, parentObj$$34.programCounter, JAM.policy.p1), v9458, [parentObj$$34, parentObj$$34.programCounter]);
  parentObj$$34.programCounter = parentObj$$34.programCounter + 2 & 65535;
  return
}
function v110(parentObj$$33) {
  if(!parentObj$$33.FZero) {
    var v4662 = parentObj$$33;
    var v10230 = parentObj$$33.programCounter;
    var v10737 = parentObj$$33.memoryReader;
    v4662.programCounter = v10230 + (JAM.call(JAM.get(v10737, parentObj$$33.programCounter, JAM.policy.p1), v10737, [parentObj$$33, parentObj$$33.programCounter]) << 24 >> 24) + 1 & 65535;
    parentObj$$33.CPUTicks = parentObj$$33.CPUTicks + 4
  }else {
    parentObj$$33.programCounter = parentObj$$33.programCounter + 1 & 65535
  }
  return
}
function v109(parentObj$$32) {
  var v4665;
  if(parentObj$$32.FCarry) {
    v4665 = 128
  }else {
    v4665 = 0
  }
  var carry_flag$$1 = v4665;
  parentObj$$32.FCarry = (parentObj$$32.registerA & 1) == 1;
  parentObj$$32.registerA = parentObj$$32.registerA >> 1 | carry_flag$$1;
  parentObj$$32.FZero = parentObj$$32.FSubtract = parentObj$$32.FHalfCarry = false;
  return
}
function v108(parentObj$$31) {
  var v4668 = parentObj$$31;
  var v7958 = parentObj$$31.memoryReader;
  var v10937 = JAM.call(JAM.get(v7958, parentObj$$31.programCounter, JAM.policy.p1), v7958, [parentObj$$31, parentObj$$31.programCounter]);
  v4668.registerE = v10937;
  parentObj$$31.programCounter = parentObj$$31.programCounter + 1 & 65535;
  return
}
function v107(parentObj$$30) {
  parentObj$$30.registerE = parentObj$$30.registerE - 1 & 255;
  parentObj$$30.FZero = parentObj$$30.registerE == 0;
  parentObj$$30.FHalfCarry = (parentObj$$30.registerE & 15) == 15;
  parentObj$$30.FSubtract = true;
  return
}
function v106(parentObj$$29) {
  parentObj$$29.registerE = parentObj$$29.registerE + 1 & 255;
  parentObj$$29.FZero = parentObj$$29.registerE == 0;
  parentObj$$29.FHalfCarry = (parentObj$$29.registerE & 15) == 0;
  parentObj$$29.FSubtract = false;
  return
}
function v105(parentObj$$28) {
  var temp_var$$4 = (parentObj$$28.registerD << 8 | parentObj$$28.registerE) - 1 & 65535;
  parentObj$$28.registerD = temp_var$$4 >> 8;
  parentObj$$28.registerE = temp_var$$4 & 255;
  return
}
function v104(parentObj$$27) {
  var v4677 = parentObj$$27;
  var v10938 = JAM.call(parentObj$$27.memoryRead, parentObj$$27, [parentObj$$27.registerD << 8 | parentObj$$27.registerE]);
  v4677.registerA = v10938;
  return
}
function v103(parentObj$$26) {
  var dirtySum$$1 = parentObj$$26.registersHL + (parentObj$$26.registerD << 8 | parentObj$$26.registerE);
  parentObj$$26.FHalfCarry = (parentObj$$26.registersHL & 4095) > (dirtySum$$1 & 4095);
  parentObj$$26.FCarry = dirtySum$$1 > 65535;
  parentObj$$26.registersHL = dirtySum$$1 & 65535;
  parentObj$$26.FSubtract = false;
  return
}
function v102(parentObj$$25) {
  var v4682 = parentObj$$25;
  var v10234 = parentObj$$25.programCounter;
  var v10740 = parentObj$$25.memoryReader;
  v4682.programCounter = v10234 + (JAM.call(JAM.get(v10740, parentObj$$25.programCounter, JAM.policy.p1), v10740, [parentObj$$25, parentObj$$25.programCounter]) << 24 >> 24) + 1 & 65535;
  return
}
function v101(parentObj$$24) {
  var v4683;
  if(parentObj$$24.FCarry) {
    v4683 = 1
  }else {
    v4683 = 0
  }
  var carry_flag = v4683;
  parentObj$$24.FCarry = parentObj$$24.registerA > 127;
  parentObj$$24.registerA = parentObj$$24.registerA << 1 & 255 | carry_flag;
  parentObj$$24.FZero = parentObj$$24.FSubtract = parentObj$$24.FHalfCarry = false;
  return
}
function v100(parentObj$$23) {
  var v4686 = parentObj$$23;
  var v7974 = parentObj$$23.memoryReader;
  var v10939 = JAM.call(JAM.get(v7974, parentObj$$23.programCounter, JAM.policy.p1), v7974, [parentObj$$23, parentObj$$23.programCounter]);
  v4686.registerD = v10939;
  parentObj$$23.programCounter = parentObj$$23.programCounter + 1 & 65535;
  return
}
function v99(parentObj$$22) {
  parentObj$$22.registerD = parentObj$$22.registerD - 1 & 255;
  parentObj$$22.FZero = parentObj$$22.registerD == 0;
  parentObj$$22.FHalfCarry = (parentObj$$22.registerD & 15) == 15;
  parentObj$$22.FSubtract = true;
  return
}
function v98(parentObj$$21) {
  parentObj$$21.registerD = parentObj$$21.registerD + 1 & 255;
  parentObj$$21.FZero = parentObj$$21.registerD == 0;
  parentObj$$21.FHalfCarry = (parentObj$$21.registerD & 15) == 0;
  parentObj$$21.FSubtract = false;
  return
}
function v97(parentObj$$20) {
  var temp_var$$3 = (parentObj$$20.registerD << 8 | parentObj$$20.registerE) + 1;
  parentObj$$20.registerD = temp_var$$3 >> 8 & 255;
  parentObj$$20.registerE = temp_var$$3 & 255;
  return
}
function v96(parentObj$$19) {
  JAM.call(parentObj$$19.memoryWrite, parentObj$$19, [parentObj$$19.registerD << 8 | parentObj$$19.registerE, parentObj$$19.registerA]);
  return
}
function v95(parentObj$$18) {
  var v4698 = parentObj$$18;
  var v7986 = parentObj$$18.memoryReader;
  var v10940 = JAM.call(JAM.get(v7986, parentObj$$18.programCounter, JAM.policy.p1), v7986, [parentObj$$18, parentObj$$18.programCounter]);
  v4698.registerE = v10940;
  var v4699 = parentObj$$18;
  var v10941 = JAM.call(parentObj$$18.memoryRead, parentObj$$18, [parentObj$$18.programCounter + 1 & 65535]);
  v4699.registerD = v10941;
  parentObj$$18.programCounter = parentObj$$18.programCounter + 2 & 65535;
  return
}
function v94(parentObj$$17) {
  if(parentObj$$17.cGBC) {
    if((parentObj$$17.memory[65357] & 1) == 1) {
      if(parentObj$$17.memory[65357] > 127) {
        cout("Going into single clock speed mode.", 0);
        parentObj$$17.doubleSpeedShifter = 0;
        var v4701 = parentObj$$17.memory;
        v4701[65357] = v4701[65357] & 127
      }else {
        cout("Going into double clock speed mode.", 0);
        parentObj$$17.doubleSpeedShifter = 1;
        var v4702 = parentObj$$17.memory;
        v4702[65357] = v4702[65357] | 128
      }
      var v4704 = parentObj$$17.memory;
      v4704[65357] = v4704[65357] & 254
    }else {
      parentObj$$17.handleSTOP()
    }
  }else {
    parentObj$$17.handleSTOP()
  }
  return
}
function v93(parentObj$$16) {
  parentObj$$16.registerA = parentObj$$16.registerA >> 1 | (parentObj$$16.registerA & 1) << 7;
  parentObj$$16.FCarry = parentObj$$16.registerA > 127;
  parentObj$$16.FZero = parentObj$$16.FSubtract = parentObj$$16.FHalfCarry = false;
  return
}
function v92(parentObj$$15) {
  var v4710 = parentObj$$15;
  var v7995 = parentObj$$15.memoryReader;
  var v10942 = JAM.call(JAM.get(v7995, parentObj$$15.programCounter, JAM.policy.p1), v7995, [parentObj$$15, parentObj$$15.programCounter]);
  v4710.registerC = v10942;
  parentObj$$15.programCounter = parentObj$$15.programCounter + 1 & 65535;
  return
}
function v91(parentObj$$14) {
  parentObj$$14.registerC = parentObj$$14.registerC - 1 & 255;
  parentObj$$14.FZero = parentObj$$14.registerC == 0;
  parentObj$$14.FHalfCarry = (parentObj$$14.registerC & 15) == 15;
  parentObj$$14.FSubtract = true;
  return
}
function v90(parentObj$$13) {
  parentObj$$13.registerC = parentObj$$13.registerC + 1 & 255;
  parentObj$$13.FZero = parentObj$$13.registerC == 0;
  parentObj$$13.FHalfCarry = (parentObj$$13.registerC & 15) == 0;
  parentObj$$13.FSubtract = false;
  return
}
function v89(parentObj$$12) {
  var temp_var$$2 = (parentObj$$12.registerB << 8 | parentObj$$12.registerC) - 1 & 65535;
  parentObj$$12.registerB = temp_var$$2 >> 8;
  parentObj$$12.registerC = temp_var$$2 & 255;
  return
}
function v88(parentObj$$11) {
  var v4719 = parentObj$$11;
  var v10943 = JAM.call(parentObj$$11.memoryRead, parentObj$$11, [parentObj$$11.registerB << 8 | parentObj$$11.registerC]);
  v4719.registerA = v10943;
  return
}
function v87(parentObj$$10) {
  var dirtySum = parentObj$$10.registersHL + (parentObj$$10.registerB << 8 | parentObj$$10.registerC);
  parentObj$$10.FHalfCarry = (parentObj$$10.registersHL & 4095) > (dirtySum & 4095);
  parentObj$$10.FCarry = dirtySum > 65535;
  parentObj$$10.registersHL = dirtySum & 65535;
  parentObj$$10.FSubtract = false;
  return
}
function v86(parentObj$$9) {
  var v4724 = JAM.call(parentObj$$9.memoryRead, parentObj$$9, [parentObj$$9.programCounter + 1 & 65535]) << 8;
  var v8009 = parentObj$$9.memoryReader;
  var temp_var$$1 = v4724 | JAM.call(JAM.get(v8009, parentObj$$9.programCounter, JAM.policy.p1), v8009, [parentObj$$9, parentObj$$9.programCounter]);
  parentObj$$9.programCounter = parentObj$$9.programCounter + 2 & 65535;
  JAM.call(parentObj$$9.memoryWrite, parentObj$$9, [temp_var$$1, parentObj$$9.stackPointer & 255]);
  JAM.call(parentObj$$9.memoryWrite, parentObj$$9, [temp_var$$1 + 1 & 65535, parentObj$$9.stackPointer >> 8]);
  return
}
function v85(parentObj$$8) {
  parentObj$$8.FCarry = parentObj$$8.registerA > 127;
  parentObj$$8.registerA = parentObj$$8.registerA << 1 & 255 | parentObj$$8.registerA >> 7;
  parentObj$$8.FZero = parentObj$$8.FSubtract = parentObj$$8.FHalfCarry = false;
  return
}
function v84(parentObj$$7) {
  var v4733 = parentObj$$7;
  var v8018 = parentObj$$7.memoryReader;
  var v10944 = JAM.call(JAM.get(v8018, parentObj$$7.programCounter, JAM.policy.p1), v8018, [parentObj$$7, parentObj$$7.programCounter]);
  v4733.registerB = v10944;
  parentObj$$7.programCounter = parentObj$$7.programCounter + 1 & 65535;
  return
}
function v83(parentObj$$6) {
  parentObj$$6.registerB = parentObj$$6.registerB - 1 & 255;
  parentObj$$6.FZero = parentObj$$6.registerB == 0;
  parentObj$$6.FHalfCarry = (parentObj$$6.registerB & 15) == 15;
  parentObj$$6.FSubtract = true;
  return
}
function v82(parentObj$$5) {
  parentObj$$5.registerB = parentObj$$5.registerB + 1 & 255;
  parentObj$$5.FZero = parentObj$$5.registerB == 0;
  parentObj$$5.FHalfCarry = (parentObj$$5.registerB & 15) == 0;
  parentObj$$5.FSubtract = false;
  return
}
function v81(parentObj$$4) {
  var temp_var = (parentObj$$4.registerB << 8 | parentObj$$4.registerC) + 1;
  parentObj$$4.registerB = temp_var >> 8 & 255;
  parentObj$$4.registerC = temp_var & 255;
  return
}
function v80(parentObj$$3) {
  JAM.call(parentObj$$3.memoryWrite, parentObj$$3, [parentObj$$3.registerB << 8 | parentObj$$3.registerC, parentObj$$3.registerA]);
  return
}
function v79(parentObj$$2) {
  var v4745 = parentObj$$2;
  var v8030 = parentObj$$2.memoryReader;
  var v10945 = JAM.call(JAM.get(v8030, parentObj$$2.programCounter, JAM.policy.p1), v8030, [parentObj$$2, parentObj$$2.programCounter]);
  v4745.registerC = v10945;
  var v4746 = parentObj$$2;
  var v10946 = JAM.call(parentObj$$2.memoryRead, parentObj$$2, [parentObj$$2.programCounter + 1 & 65535]);
  v4746.registerB = v10946;
  parentObj$$2.programCounter = parentObj$$2.programCounter + 2 & 65535;
  return
}
function v78(parentObj$$1) {
  return
}
function v77(typedArray) {
  typedArray[0] = -1;
  typedArray[0] = typedArray[0] >> 0;
  if(typedArray[0] != 255) {
    return[]
  }else {
    return typedArray
  }
  return
}
function v76(bufferLength$$1) {
  try {
    return JAM.call(this.checkForOperaMathBug, this, [new Uint8Array(bufferLength$$1)])
  }catch(error$$19) {
    return[]
  }
  return
}
function v75(bufferLength) {
  try {
    return new Float32Array(bufferLength)
  }catch(error$$18) {
    return[]
  }
  return
}
function v74(BILINEARAlgo$$1) {
  var v10947 = JAM.call(this.generateUint8Buffer, this, [this.finalResultSize]);
  this.heightBuffer = v10947;
  if(!BILINEARAlgo$$1) {
    var v10948 = JAM.call(this.generateFloatBuffer, this, [this.targetWidthMultipliedByChannels]);
    this.outputHeightWorkBench = v10948
  }
  return
}
function v73(BILINEARAlgo) {
  var v10949 = JAM.call(this.generateFloatBuffer, this, [this.widthPassResultSize]);
  this.widthBuffer = v10949;
  if(!BILINEARAlgo) {
    var v10950 = JAM.call(this.generateFloatBuffer, this, [this.originalHeightMultipliedByChannels]);
    this.outputWidthWorkBench = v10950
  }
  return
}
function v72(buffer$$26) {
  return buffer$$26
}
function v71(buffer$$25) {
  return JAM.call(this.resizeHeight, this, [JAM.call(this.resizeWidth, this, [buffer$$25])])
}
function v70(buffer$$24) {
  var ratioWeight$$7 = (this.heightOriginal - 1) / this.targetHeight;
  var weight$$7 = 0;
  var finalOffset$$3 = 0;
  var pixelOffset$$7 = 0;
  var outputBuffer$$7 = this.heightBuffer;
  var v4765 = pixelOffset$$7 < this.finalResultSize;
  for(;v4765;) {
    secondWeight = weight$$7 % 1;
    firstWeight = 1 - secondWeight;
    pixelOffset$$7 = Math.floor(weight$$7) * 4;
    var v4764 = pixelOffset$$7 < this.targetWidthMultipliedByChannels;
    for(;v4764;) {
      var v4760 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      introspect(JAM.policy.p1) {
        var v9488 = buffer$$24[pixelOffset$$7]
      }
      var v8040 = v9488 * firstWeight;
      var v10242 = pixelOffset$$7 + 4;
      introspect(JAM.policy.p1) {
        var v9489 = buffer$$24[v10242]
      }
      outputBuffer$$7[v4760] = v8040 + v9489 * secondWeight;
      var v4761 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      var v10243 = pixelOffset$$7 + 1;
      introspect(JAM.policy.p1) {
        var v9490 = buffer$$24[v10243]
      }
      var v8042 = v9490 * firstWeight;
      var v10244 = pixelOffset$$7 + 5;
      introspect(JAM.policy.p1) {
        var v9491 = buffer$$24[v10244]
      }
      outputBuffer$$7[v4761] = v8042 + v9491 * secondWeight;
      var v4762 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      var v10245 = pixelOffset$$7 + 2;
      introspect(JAM.policy.p1) {
        var v9492 = buffer$$24[v10245]
      }
      var v8044 = v9492 * firstWeight;
      var v10246 = pixelOffset$$7 + 6;
      introspect(JAM.policy.p1) {
        var v9493 = buffer$$24[v10246]
      }
      outputBuffer$$7[v4762] = v8044 + v9493 * secondWeight;
      var v4763 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      var v10247 = pixelOffset$$7 + 3;
      introspect(JAM.policy.p1) {
        var v9494 = buffer$$24[v10247]
      }
      var v8046 = v9494 * firstWeight;
      var v10248 = pixelOffset$$7 + 7;
      introspect(JAM.policy.p1) {
        var v9495 = buffer$$24[v10248]
      }
      outputBuffer$$7[v4763] = v8046 + v9495 * secondWeight;
      pixelOffset$$7 = pixelOffset$$7 + 4;
      v4764 = pixelOffset$$7 < this.targetWidthMultipliedByChannels
    }
    weight$$7 = weight$$7 + ratioWeight$$7;
    v4765 = pixelOffset$$7 < this.finalResultSize
  }
  return outputBuffer$$7
}
function v69(buffer$$23) {
  var ratioWeight$$6 = this.ratioWeightHeightPass;
  var weight$$6 = 0;
  var amountToNext$$3 = 0;
  var actualPosition$$3 = 0;
  var currentPosition$$3 = 0;
  var pixelOffset$$6 = 0;
  var outputOffset$$3 = 0;
  var output$$3 = this.outputHeightWorkBench;
  var outputBuffer$$6 = this.heightBuffer;
  var v4793 = outputOffset$$3 < this.finalResultSize;
  do {
    pixelOffset$$6 = 0;
    var v4770 = pixelOffset$$6 < this.targetWidthMultipliedByChannels;
    for(;v4770;) {
      var v4766 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      output$$3[v4766] = 0;
      var v4767 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      output$$3[v4767] = 0;
      var v4768 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      output$$3[v4768] = 0;
      var v4769 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      output$$3[v4769] = 0;
      v4770 = pixelOffset$$6 < this.targetWidthMultipliedByChannels
    }
    weight$$6 = ratioWeight$$6;
    var v8053 = weight$$6 > 0;
    if(v8053) {
      v8053 = actualPosition$$3 < this.widthPassResultSize
    }
    var v4783 = v8053;
    do {
      amountToNext$$3 = 1 + actualPosition$$3 - currentPosition$$3;
      if(weight$$6 >= amountToNext$$3) {
        pixelOffset$$6 = 0;
        var v4776 = pixelOffset$$6 < this.targetWidthMultipliedByChannels;
        for(;v4776;) {
          var v4772 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAM.policy.p1) {
            var v9497 = output$$3[v4772]
          }
          var v10526 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          introspect(JAM.policy.p1) {
            var v10249 = buffer$$23[v10526]
          }
          output$$3[v4772] = v9497 + v10249 * amountToNext$$3;
          var v4773 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAM.policy.p1) {
            var v9499 = output$$3[v4773]
          }
          var v10527 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          introspect(JAM.policy.p1) {
            var v10250 = buffer$$23[v10527]
          }
          output$$3[v4773] = v9499 + v10250 * amountToNext$$3;
          var v4774 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAM.policy.p1) {
            var v9501 = output$$3[v4774]
          }
          var v10528 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          introspect(JAM.policy.p1) {
            var v10251 = buffer$$23[v10528]
          }
          output$$3[v4774] = v9501 + v10251 * amountToNext$$3;
          var v4775 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAM.policy.p1) {
            var v9503 = output$$3[v4775]
          }
          var v10529 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          introspect(JAM.policy.p1) {
            var v10252 = buffer$$23[v10529]
          }
          output$$3[v4775] = v9503 + v10252 * amountToNext$$3;
          v4776 = pixelOffset$$6 < this.targetWidthMultipliedByChannels
        }
        currentPosition$$3 = actualPosition$$3;
        weight$$6 = weight$$6 - amountToNext$$3
      }else {
        pixelOffset$$6 = 0;
        amountToNext$$3 = actualPosition$$3;
        var v4781 = pixelOffset$$6 < this.targetWidthMultipliedByChannels;
        for(;v4781;) {
          var v4777 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAM.policy.p1) {
            var v9505 = output$$3[v4777]
          }
          var v10530 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          introspect(JAM.policy.p1) {
            var v10253 = buffer$$23[v10530]
          }
          output$$3[v4777] = v9505 + v10253 * weight$$6;
          var v4778 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAM.policy.p1) {
            var v9507 = output$$3[v4778]
          }
          var v10531 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          introspect(JAM.policy.p1) {
            var v10254 = buffer$$23[v10531]
          }
          output$$3[v4778] = v9507 + v10254 * weight$$6;
          var v4779 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAM.policy.p1) {
            var v9509 = output$$3[v4779]
          }
          var v10532 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          introspect(JAM.policy.p1) {
            var v10255 = buffer$$23[v10532]
          }
          output$$3[v4779] = v9509 + v10255 * weight$$6;
          var v4780 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAM.policy.p1) {
            var v9511 = output$$3[v4780]
          }
          var v10533 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          introspect(JAM.policy.p1) {
            var v10256 = buffer$$23[v10533]
          }
          output$$3[v4780] = v9511 + v10256 * weight$$6;
          v4781 = pixelOffset$$6 < this.targetWidthMultipliedByChannels
        }
        currentPosition$$3 = currentPosition$$3 + weight$$6;
        break
      }
      var v8058 = weight$$6 > 0;
      if(v8058) {
        v8058 = actualPosition$$3 < this.widthPassResultSize
      }
      v4783 = v8058
    }while(v4783);
    pixelOffset$$6 = 0;
    var v4792 = pixelOffset$$6 < this.targetWidthMultipliedByChannels;
    for(;v4792;) {
      var v4784 = outputBuffer$$6;
      var v4785 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10257 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      introspect(JAM.policy.p1) {
        var v9514 = output$$3[v10257]
      }
      var v10951 = Math.round(v9514 / ratioWeight$$6);
      v4784[v4785] = v10951;
      var v4786 = outputBuffer$$6;
      var v4787 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10258 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      introspect(JAM.policy.p1) {
        var v9515 = output$$3[v10258]
      }
      var v10952 = Math.round(v9515 / ratioWeight$$6);
      v4786[v4787] = v10952;
      var v4788 = outputBuffer$$6;
      var v4789 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10259 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      introspect(JAM.policy.p1) {
        var v9516 = output$$3[v10259]
      }
      var v10953 = Math.round(v9516 / ratioWeight$$6);
      v4788[v4789] = v10953;
      var v4790 = outputBuffer$$6;
      var v4791 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10260 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      introspect(JAM.policy.p1) {
        var v9517 = output$$3[v10260]
      }
      var v10954 = Math.round(v9517 / ratioWeight$$6);
      v4790[v4791] = v10954;
      v4792 = pixelOffset$$6 < this.targetWidthMultipliedByChannels
    }
    v4793 = outputOffset$$3 < this.finalResultSize
  }while(v4793);
  return outputBuffer$$6
}
function v68(buffer$$22) {
  var ratioWeight$$5 = (this.heightOriginal - 1) / this.targetHeight;
  var weight$$5 = 0;
  var finalOffset$$2 = 0;
  var pixelOffset$$5 = 0;
  var pixelOffsetAccumulated = 0;
  var pixelOffsetAccumulated2 = 0;
  var outputBuffer$$5 = this.heightBuffer;
  var v4801 = finalOffset$$2 < this.finalResultSize;
  do {
    secondWeight = weight$$5 % 1;
    firstWeight = 1 - secondWeight;
    pixelOffsetAccumulated = Math.floor(weight$$5) * this.targetWidthMultipliedByChannels;
    pixelOffsetAccumulated2 = pixelOffsetAccumulated + this.targetWidthMultipliedByChannels;
    pixelOffset$$5 = 0;
    var v4800 = pixelOffset$$5 < this.targetWidthMultipliedByChannels;
    for(;v4800;) {
      var v4799 = finalOffset$$2;
      finalOffset$$2 = finalOffset$$2 + 1;
      var v10261 = pixelOffsetAccumulated + pixelOffset$$5;
      introspect(JAM.policy.p1) {
        var v9518 = buffer$$22[v10261]
      }
      var v8069 = v9518 * firstWeight;
      var v10262 = pixelOffsetAccumulated2 + pixelOffset$$5;
      introspect(JAM.policy.p1) {
        var v9519 = buffer$$22[v10262]
      }
      outputBuffer$$5[v4799] = v8069 + v9519 * secondWeight;
      pixelOffset$$5 = pixelOffset$$5 + 1;
      v4800 = pixelOffset$$5 < this.targetWidthMultipliedByChannels
    }
    weight$$5 = weight$$5 + ratioWeight$$5;
    v4801 = finalOffset$$2 < this.finalResultSize
  }while(v4801);
  return outputBuffer$$5
}
function v67(buffer$$21) {
  var ratioWeight$$4 = this.ratioWeightHeightPass;
  var weight$$4 = 0;
  var amountToNext$$2 = 0;
  var actualPosition$$2 = 0;
  var currentPosition$$2 = 0;
  var pixelOffset$$4 = 0;
  var outputOffset$$2 = 0;
  var output$$2 = this.outputHeightWorkBench;
  var outputBuffer$$4 = this.heightBuffer;
  var v4824 = outputOffset$$2 < this.finalResultSize;
  do {
    pixelOffset$$4 = 0;
    var v4805 = pixelOffset$$4 < this.targetWidthMultipliedByChannels;
    for(;v4805;) {
      var v4802 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      output$$2[v4802] = 0;
      var v4803 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      output$$2[v4803] = 0;
      var v4804 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      output$$2[v4804] = 0;
      v4805 = pixelOffset$$4 < this.targetWidthMultipliedByChannels
    }
    weight$$4 = ratioWeight$$4;
    var v8076 = weight$$4 > 0;
    if(v8076) {
      v8076 = actualPosition$$2 < this.widthPassResultSize
    }
    var v4816 = v8076;
    do {
      amountToNext$$2 = 1 + actualPosition$$2 - currentPosition$$2;
      if(weight$$4 >= amountToNext$$2) {
        pixelOffset$$4 = 0;
        var v4810 = pixelOffset$$4 < this.targetWidthMultipliedByChannels;
        for(;v4810;) {
          var v4807 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          introspect(JAM.policy.p1) {
            var v9521 = output$$2[v4807]
          }
          var v10534 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          introspect(JAM.policy.p1) {
            var v10263 = buffer$$21[v10534]
          }
          output$$2[v4807] = v9521 + v10263 * amountToNext$$2;
          var v4808 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          introspect(JAM.policy.p1) {
            var v9523 = output$$2[v4808]
          }
          var v10535 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          introspect(JAM.policy.p1) {
            var v10264 = buffer$$21[v10535]
          }
          output$$2[v4808] = v9523 + v10264 * amountToNext$$2;
          var v4809 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          introspect(JAM.policy.p1) {
            var v9525 = output$$2[v4809]
          }
          var v10536 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          introspect(JAM.policy.p1) {
            var v10265 = buffer$$21[v10536]
          }
          output$$2[v4809] = v9525 + v10265 * amountToNext$$2;
          v4810 = pixelOffset$$4 < this.targetWidthMultipliedByChannels
        }
        currentPosition$$2 = actualPosition$$2;
        weight$$4 = weight$$4 - amountToNext$$2
      }else {
        pixelOffset$$4 = 0;
        amountToNext$$2 = actualPosition$$2;
        var v4814 = pixelOffset$$4 < this.targetWidthMultipliedByChannels;
        for(;v4814;) {
          var v4811 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          introspect(JAM.policy.p1) {
            var v9527 = output$$2[v4811]
          }
          var v10537 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          introspect(JAM.policy.p1) {
            var v10266 = buffer$$21[v10537]
          }
          output$$2[v4811] = v9527 + v10266 * weight$$4;
          var v4812 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          introspect(JAM.policy.p1) {
            var v9529 = output$$2[v4812]
          }
          var v10538 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          introspect(JAM.policy.p1) {
            var v10267 = buffer$$21[v10538]
          }
          output$$2[v4812] = v9529 + v10267 * weight$$4;
          var v4813 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          introspect(JAM.policy.p1) {
            var v9531 = output$$2[v4813]
          }
          var v10539 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          introspect(JAM.policy.p1) {
            var v10268 = buffer$$21[v10539]
          }
          output$$2[v4813] = v9531 + v10268 * weight$$4;
          v4814 = pixelOffset$$4 < this.targetWidthMultipliedByChannels
        }
        currentPosition$$2 = currentPosition$$2 + weight$$4;
        break
      }
      var v8081 = weight$$4 > 0;
      if(v8081) {
        v8081 = actualPosition$$2 < this.widthPassResultSize
      }
      v4816 = v8081
    }while(v4816);
    pixelOffset$$4 = 0;
    var v4823 = pixelOffset$$4 < this.targetWidthMultipliedByChannels;
    for(;v4823;) {
      var v4817 = outputBuffer$$4;
      var v4818 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v10269 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      introspect(JAM.policy.p1) {
        var v9534 = output$$2[v10269]
      }
      var v10955 = Math.round(v9534 / ratioWeight$$4);
      v4817[v4818] = v10955;
      var v4819 = outputBuffer$$4;
      var v4820 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v10270 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      introspect(JAM.policy.p1) {
        var v9535 = output$$2[v10270]
      }
      var v10956 = Math.round(v9535 / ratioWeight$$4);
      v4819[v4820] = v10956;
      var v4821 = outputBuffer$$4;
      var v4822 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v10271 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      introspect(JAM.policy.p1) {
        var v9536 = output$$2[v10271]
      }
      var v10957 = Math.round(v9536 / ratioWeight$$4);
      v4821[v4822] = v10957;
      v4823 = pixelOffset$$4 < this.targetWidthMultipliedByChannels
    }
    v4824 = outputOffset$$2 < this.finalResultSize
  }while(v4824);
  return outputBuffer$$4
}
function v66(buffer$$20) {
  var ratioWeight$$3 = (this.widthOriginal - 1) / this.targetWidth;
  var weight$$3 = 0;
  var finalOffset$$1 = 0;
  var pixelOffset$$3 = 0;
  var outputBuffer$$3 = this.widthBuffer;
  var targetPosition$$1 = 0;
  var v4833 = targetPosition$$1 < this.targetWidthMultipliedByChannels;
  for(;v4833;) {
    secondWeight = weight$$3 % 1;
    firstWeight = 1 - secondWeight;
    finalOffset$$1 = targetPosition$$1;
    pixelOffset$$3 = Math.floor(weight$$3) * 4;
    var v4832 = finalOffset$$1 < this.widthPassResultSize;
    for(;v4832;) {
      introspect(JAM.policy.p1) {
        var v8092 = buffer$$20[pixelOffset$$3]
      }
      var v4827 = v8092 * firstWeight;
      var v9537 = pixelOffset$$3 + 4;
      introspect(JAM.policy.p1) {
        var v8093 = buffer$$20[v9537]
      }
      JAM.set(outputBuffer$$3, finalOffset$$1, v4827 + v8093 * secondWeight);
      var v4829 = finalOffset$$1 + 1;
      var v10272 = pixelOffset$$3 + 1;
      introspect(JAM.policy.p1) {
        var v9538 = buffer$$20[v10272]
      }
      var v8094 = v9538 * firstWeight;
      var v10273 = pixelOffset$$3 + 5;
      introspect(JAM.policy.p1) {
        var v9539 = buffer$$20[v10273]
      }
      JAM.set(outputBuffer$$3, v4829, v8094 + v9539 * secondWeight);
      var v4830 = finalOffset$$1 + 2;
      var v10274 = pixelOffset$$3 + 2;
      introspect(JAM.policy.p1) {
        var v9540 = buffer$$20[v10274]
      }
      var v8096 = v9540 * firstWeight;
      var v10275 = pixelOffset$$3 + 6;
      introspect(JAM.policy.p1) {
        var v9541 = buffer$$20[v10275]
      }
      JAM.set(outputBuffer$$3, v4830, v8096 + v9541 * secondWeight);
      var v4831 = finalOffset$$1 + 3;
      var v10276 = pixelOffset$$3 + 3;
      introspect(JAM.policy.p1) {
        var v9542 = buffer$$20[v10276]
      }
      var v8098 = v9542 * firstWeight;
      var v10277 = pixelOffset$$3 + 7;
      introspect(JAM.policy.p1) {
        var v9543 = buffer$$20[v10277]
      }
      JAM.set(outputBuffer$$3, v4831, v8098 + v9543 * secondWeight);
      pixelOffset$$3 = pixelOffset$$3 + this.originalWidthMultipliedByChannels;
      finalOffset$$1 = finalOffset$$1 + this.targetWidthMultipliedByChannels;
      v4832 = finalOffset$$1 < this.widthPassResultSize
    }
    targetPosition$$1 = targetPosition$$1 + 4;
    weight$$3 = weight$$3 + ratioWeight$$3;
    v4833 = targetPosition$$1 < this.targetWidthMultipliedByChannels
  }
  return outputBuffer$$3
}
function v65(buffer$$19) {
  var ratioWeight$$2 = this.ratioWeightWidthPass;
  var weight$$2 = 0;
  var amountToNext$$1 = 0;
  var actualPosition$$1 = 0;
  var currentPosition$$1 = 0;
  var line$$1 = 0;
  var pixelOffset$$2 = 0;
  var outputOffset$$1 = 0;
  var nextLineOffsetOriginalWidth$$1 = this.originalWidthMultipliedByChannels - 3;
  var nextLineOffsetTargetWidth$$1 = this.targetWidthMultipliedByChannels - 3;
  var output$$1 = this.outputWidthWorkBench;
  var outputBuffer$$2 = this.widthBuffer;
  var v4859 = outputOffset$$1 < this.targetWidthMultipliedByChannels;
  do {
    line$$1 = 0;
    var v4840 = line$$1 < this.originalHeightMultipliedByChannels;
    for(;v4840;) {
      var v4836 = line$$1;
      line$$1 = line$$1 + 1;
      output$$1[v4836] = 0;
      var v4837 = line$$1;
      line$$1 = line$$1 + 1;
      output$$1[v4837] = 0;
      var v4838 = line$$1;
      line$$1 = line$$1 + 1;
      output$$1[v4838] = 0;
      var v4839 = line$$1;
      line$$1 = line$$1 + 1;
      output$$1[v4839] = 0;
      v4840 = line$$1 < this.originalHeightMultipliedByChannels
    }
    weight$$2 = ratioWeight$$2;
    var v8105 = weight$$2 > 0;
    if(v8105) {
      v8105 = actualPosition$$1 < this.originalWidthMultipliedByChannels
    }
    var v4853 = v8105;
    do {
      amountToNext$$1 = 1 + actualPosition$$1 - currentPosition$$1;
      if(weight$$2 >= amountToNext$$1) {
        line$$1 = 0;
        pixelOffset$$2 = actualPosition$$1;
        var v4846 = line$$1 < this.originalHeightMultipliedByChannels;
        for(;v4846;) {
          var v4842 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAM.policy.p1) {
            var v9545 = output$$1[v4842]
          }
          var v10540 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAM.policy.p1) {
            var v10280 = buffer$$19[v10540]
          }
          output$$1[v4842] = v9545 + v10280 * amountToNext$$1;
          var v4843 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAM.policy.p1) {
            var v9547 = output$$1[v4843]
          }
          var v10541 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAM.policy.p1) {
            var v10281 = buffer$$19[v10541]
          }
          output$$1[v4843] = v9547 + v10281 * amountToNext$$1;
          var v4844 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAM.policy.p1) {
            var v9549 = output$$1[v4844]
          }
          var v10542 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAM.policy.p1) {
            var v10282 = buffer$$19[v10542]
          }
          output$$1[v4844] = v9549 + v10282 * amountToNext$$1;
          var v4845 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAM.policy.p1) {
            var v9551 = output$$1[v4845]
          }
          introspect(JAM.policy.p1) {
            var v10283 = buffer$$19[pixelOffset$$2]
          }
          output$$1[v4845] = v9551 + v10283 * amountToNext$$1;
          pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetOriginalWidth$$1;
          v4846 = line$$1 < this.originalHeightMultipliedByChannels
        }
        currentPosition$$1 = actualPosition$$1 = actualPosition$$1 + 4;
        weight$$2 = weight$$2 - amountToNext$$1
      }else {
        line$$1 = 0;
        pixelOffset$$2 = actualPosition$$1;
        var v4851 = line$$1 < this.originalHeightMultipliedByChannels;
        for(;v4851;) {
          var v4847 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAM.policy.p1) {
            var v9553 = output$$1[v4847]
          }
          var v10543 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAM.policy.p1) {
            var v10284 = buffer$$19[v10543]
          }
          output$$1[v4847] = v9553 + v10284 * weight$$2;
          var v4848 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAM.policy.p1) {
            var v9555 = output$$1[v4848]
          }
          var v10544 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAM.policy.p1) {
            var v10285 = buffer$$19[v10544]
          }
          output$$1[v4848] = v9555 + v10285 * weight$$2;
          var v4849 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAM.policy.p1) {
            var v9557 = output$$1[v4849]
          }
          var v10545 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAM.policy.p1) {
            var v10286 = buffer$$19[v10545]
          }
          output$$1[v4849] = v9557 + v10286 * weight$$2;
          var v4850 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAM.policy.p1) {
            var v9559 = output$$1[v4850]
          }
          introspect(JAM.policy.p1) {
            var v10287 = buffer$$19[pixelOffset$$2]
          }
          output$$1[v4850] = v9559 + v10287 * weight$$2;
          pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetOriginalWidth$$1;
          v4851 = line$$1 < this.originalHeightMultipliedByChannels
        }
        currentPosition$$1 = currentPosition$$1 + weight$$2;
        break
      }
      var v8110 = weight$$2 > 0;
      if(v8110) {
        v8110 = actualPosition$$1 < this.originalWidthMultipliedByChannels
      }
      v4853 = v8110
    }while(v4853);
    line$$1 = 0;
    pixelOffset$$2 = outputOffset$$1;
    var v4858 = line$$1 < this.originalHeightMultipliedByChannels;
    for(;v4858;) {
      var v4854 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v9562 = line$$1;
      line$$1 = line$$1 + 1;
      introspect(JAM.policy.p1) {
        var v8112 = output$$1[v9562]
      }
      outputBuffer$$2[v4854] = v8112 / ratioWeight$$2;
      var v4855 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v9563 = line$$1;
      line$$1 = line$$1 + 1;
      introspect(JAM.policy.p1) {
        var v8113 = output$$1[v9563]
      }
      outputBuffer$$2[v4855] = v8113 / ratioWeight$$2;
      var v4856 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v9564 = line$$1;
      line$$1 = line$$1 + 1;
      introspect(JAM.policy.p1) {
        var v8114 = output$$1[v9564]
      }
      outputBuffer$$2[v4856] = v8114 / ratioWeight$$2;
      var v8115 = line$$1;
      line$$1 = line$$1 + 1;
      introspect(JAM.policy.p1) {
        var v4857 = output$$1[v8115]
      }
      outputBuffer$$2[pixelOffset$$2] = v4857 / ratioWeight$$2;
      pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetTargetWidth$$1;
      v4858 = line$$1 < this.originalHeightMultipliedByChannels
    }
    outputOffset$$1 = outputOffset$$1 + 4;
    v4859 = outputOffset$$1 < this.targetWidthMultipliedByChannels
  }while(v4859);
  return outputBuffer$$2
}
function v64(buffer$$18) {
  var ratioWeight$$1 = (this.widthOriginal - 1) / this.targetWidth;
  var weight$$1 = 0;
  var finalOffset = 0;
  var pixelOffset$$1 = 0;
  var outputBuffer$$1 = this.widthBuffer;
  var targetPosition = 0;
  var v4867 = targetPosition < this.targetWidthMultipliedByChannels;
  for(;v4867;) {
    secondWeight = weight$$1 % 1;
    firstWeight = 1 - secondWeight;
    finalOffset = targetPosition;
    pixelOffset$$1 = Math.floor(weight$$1) * 3;
    var v4866 = finalOffset < this.widthPassResultSize;
    for(;v4866;) {
      introspect(JAM.policy.p1) {
        var v8122 = buffer$$18[pixelOffset$$1]
      }
      var v4862 = v8122 * firstWeight;
      var v9565 = pixelOffset$$1 + 3;
      introspect(JAM.policy.p1) {
        var v8123 = buffer$$18[v9565]
      }
      JAM.set(outputBuffer$$1, finalOffset, v4862 + v8123 * secondWeight);
      var v4864 = finalOffset + 1;
      var v10288 = pixelOffset$$1 + 1;
      introspect(JAM.policy.p1) {
        var v9566 = buffer$$18[v10288]
      }
      var v8124 = v9566 * firstWeight;
      var v10289 = pixelOffset$$1 + 4;
      introspect(JAM.policy.p1) {
        var v9567 = buffer$$18[v10289]
      }
      JAM.set(outputBuffer$$1, v4864, v8124 + v9567 * secondWeight);
      var v4865 = finalOffset + 2;
      var v10290 = pixelOffset$$1 + 2;
      introspect(JAM.policy.p1) {
        var v9568 = buffer$$18[v10290]
      }
      var v8126 = v9568 * firstWeight;
      var v10291 = pixelOffset$$1 + 5;
      introspect(JAM.policy.p1) {
        var v9569 = buffer$$18[v10291]
      }
      JAM.set(outputBuffer$$1, v4865, v8126 + v9569 * secondWeight);
      pixelOffset$$1 = pixelOffset$$1 + this.originalWidthMultipliedByChannels;
      finalOffset = finalOffset + this.targetWidthMultipliedByChannels;
      v4866 = finalOffset < this.widthPassResultSize
    }
    targetPosition = targetPosition + 3;
    weight$$1 = weight$$1 + ratioWeight$$1;
    v4867 = targetPosition < this.targetWidthMultipliedByChannels
  }
  return outputBuffer$$1
}
function v63(buffer$$17) {
  var ratioWeight = this.ratioWeightWidthPass;
  var weight = 0;
  var amountToNext = 0;
  var actualPosition = 0;
  var currentPosition = 0;
  var line = 0;
  var pixelOffset = 0;
  var outputOffset = 0;
  var nextLineOffsetOriginalWidth = this.originalWidthMultipliedByChannels - 2;
  var nextLineOffsetTargetWidth = this.targetWidthMultipliedByChannels - 2;
  var output = this.outputWidthWorkBench;
  var outputBuffer = this.widthBuffer;
  var v4889 = outputOffset < this.targetWidthMultipliedByChannels;
  do {
    line = 0;
    var v4873 = line < this.originalHeightMultipliedByChannels;
    for(;v4873;) {
      var v4870 = line;
      line = line + 1;
      output[v4870] = 0;
      var v4871 = line;
      line = line + 1;
      output[v4871] = 0;
      var v4872 = line;
      line = line + 1;
      output[v4872] = 0;
      v4873 = line < this.originalHeightMultipliedByChannels
    }
    weight = ratioWeight;
    var v8133 = weight > 0;
    if(v8133) {
      v8133 = actualPosition < this.originalWidthMultipliedByChannels
    }
    var v4884 = v8133;
    do {
      amountToNext = 1 + actualPosition - currentPosition;
      if(weight >= amountToNext) {
        line = 0;
        pixelOffset = actualPosition;
        var v4878 = line < this.originalHeightMultipliedByChannels;
        for(;v4878;) {
          var v4875 = line;
          line = line + 1;
          introspect(JAM.policy.p1) {
            var v9571 = output[v4875]
          }
          var v10546 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          introspect(JAM.policy.p1) {
            var v10294 = buffer$$17[v10546]
          }
          output[v4875] = v9571 + v10294 * amountToNext;
          var v4876 = line;
          line = line + 1;
          introspect(JAM.policy.p1) {
            var v9573 = output[v4876]
          }
          var v10547 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          introspect(JAM.policy.p1) {
            var v10295 = buffer$$17[v10547]
          }
          output[v4876] = v9573 + v10295 * amountToNext;
          var v4877 = line;
          line = line + 1;
          introspect(JAM.policy.p1) {
            var v9575 = output[v4877]
          }
          introspect(JAM.policy.p1) {
            var v10296 = buffer$$17[pixelOffset]
          }
          output[v4877] = v9575 + v10296 * amountToNext;
          pixelOffset = pixelOffset + nextLineOffsetOriginalWidth;
          v4878 = line < this.originalHeightMultipliedByChannels
        }
        currentPosition = actualPosition = actualPosition + 3;
        weight = weight - amountToNext
      }else {
        line = 0;
        pixelOffset = actualPosition;
        var v4882 = line < this.originalHeightMultipliedByChannels;
        for(;v4882;) {
          var v4879 = line;
          line = line + 1;
          introspect(JAM.policy.p1) {
            var v9577 = output[v4879]
          }
          var v10548 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          introspect(JAM.policy.p1) {
            var v10297 = buffer$$17[v10548]
          }
          output[v4879] = v9577 + v10297 * weight;
          var v4880 = line;
          line = line + 1;
          introspect(JAM.policy.p1) {
            var v9579 = output[v4880]
          }
          var v10549 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          introspect(JAM.policy.p1) {
            var v10298 = buffer$$17[v10549]
          }
          output[v4880] = v9579 + v10298 * weight;
          var v4881 = line;
          line = line + 1;
          introspect(JAM.policy.p1) {
            var v9581 = output[v4881]
          }
          introspect(JAM.policy.p1) {
            var v10299 = buffer$$17[pixelOffset]
          }
          output[v4881] = v9581 + v10299 * weight;
          pixelOffset = pixelOffset + nextLineOffsetOriginalWidth;
          v4882 = line < this.originalHeightMultipliedByChannels
        }
        currentPosition = currentPosition + weight;
        break
      }
      var v8138 = weight > 0;
      if(v8138) {
        v8138 = actualPosition < this.originalWidthMultipliedByChannels
      }
      v4884 = v8138
    }while(v4884);
    line = 0;
    pixelOffset = outputOffset;
    var v4888 = line < this.originalHeightMultipliedByChannels;
    for(;v4888;) {
      var v4885 = pixelOffset;
      pixelOffset = pixelOffset + 1;
      var v9584 = line;
      line = line + 1;
      introspect(JAM.policy.p1) {
        var v8140 = output[v9584]
      }
      outputBuffer[v4885] = v8140 / ratioWeight;
      var v4886 = pixelOffset;
      pixelOffset = pixelOffset + 1;
      var v9585 = line;
      line = line + 1;
      introspect(JAM.policy.p1) {
        var v8141 = output[v9585]
      }
      outputBuffer[v4886] = v8141 / ratioWeight;
      var v8142 = line;
      line = line + 1;
      introspect(JAM.policy.p1) {
        var v4887 = output[v8142]
      }
      outputBuffer[pixelOffset] = v4887 / ratioWeight;
      pixelOffset = pixelOffset + nextLineOffsetTargetWidth;
      v4888 = line < this.originalHeightMultipliedByChannels
    }
    outputOffset = outputOffset + 3;
    v4889 = outputOffset < this.targetWidthMultipliedByChannels
  }while(v4889);
  return outputBuffer
}
function v62() {
  var v8145 = this.widthOriginal > 0;
  if(v8145) {
    var v9587 = this.heightOriginal > 0;
    if(v9587) {
      var v10301 = this.targetWidth > 0;
      if(v10301) {
        v10301 = this.targetHeight > 0
      }
      v9587 = v10301
    }
    v8145 = v9587
  }
  if(v8145) {
    if(this.widthOriginal == this.targetWidth) {
      this.resizeWidth = this.bypassResizer
    }else {
      this.ratioWeightWidthPass = this.widthOriginal / this.targetWidth;
      var v8148 = this.ratioWeightWidthPass < 1;
      if(v8148) {
        v8148 = this.interpolationPass
      }
      if(v8148) {
        JAM.call(this.initializeFirstPassBuffers, this, [true]);
        var v4892;
        if(this.colorChannels == 4) {
          v4892 = this.resizeWidthInterpolatedRGBA
        }else {
          v4892 = this.resizeWidthInterpolatedRGB
        }
        this.resizeWidth = v4892
      }else {
        JAM.call(this.initializeFirstPassBuffers, this, [false]);
        var v4893;
        if(this.colorChannels == 4) {
          v4893 = this.resizeWidthRGBA
        }else {
          v4893 = this.resizeWidthRGB
        }
        this.resizeWidth = v4893
      }
    }
    if(this.heightOriginal == this.targetHeight) {
      this.resizeHeight = this.bypassResizer
    }else {
      this.ratioWeightHeightPass = this.heightOriginal / this.targetHeight;
      var v8153 = this.ratioWeightHeightPass < 1;
      if(v8153) {
        v8153 = this.interpolationPass
      }
      if(v8153) {
        JAM.call(this.initializeSecondPassBuffers, this, [true]);
        this.resizeHeight = this.resizeHeightInterpolated
      }else {
        JAM.call(this.initializeSecondPassBuffers, this, [false]);
        var v4898;
        if(this.colorChannels == 4) {
          v4898 = this.resizeHeightRGBA
        }else {
          v4898 = this.resizeHeightRGB
        }
        this.resizeHeight = v4898
      }
    }
  }else {
    throw new Error("Invalid settings specified for the resizer.");
  }
  return
}
function v61() {
  if(!launchedContext) {
    try {
      audioContextHandle = new GameBoyAudioContext
    }catch(error$$15) {
      try {
        audioContextHandle = new AudioContext
      }catch(error$$16) {
        return
      }
    }
    try {
      audioSource = audioContextHandle.createBufferSource();
      audioSource.loop = false;
      XAudioJSSampleRate = webAudioActualSampleRate = audioContextHandle.sampleRate;
      var v4902 = audioSource;
      var v10958 = JAM.call(audioContextHandle.createBuffer, audioContextHandle, [1, 1, webAudioActualSampleRate]);
      v4902.buffer = v10958;
      audioNode = JAM.call(audioContextHandle.createJavaScriptNode, audioContextHandle, [samplesPerCallback, 1, 2]);
      audioNode.onaudioprocess = audioOutputEvent
    }catch(error$$17) {
      return
    }
    launchedContext = true
  }
  return
}
function v60() {
  var v8155 = !this.flashInitialized;
  if(v8155) {
    var v9594 = this.audioHandleFlash;
    if(v9594) {
      v9594 = this.audioHandleFlash.initialize
    }
    v8155 = v9594
  }
  if(v8155) {
    this.flashInitialized = true;
    var v4904 = this.audioHandleFlash;
    JAM.call(v4904.initialize, v4904, [this.audioChannels, XAudioJSVolume]);
    resetCallbackAPIAudioBuffer(44100, samplesPerCallback)
  }
  return this.flashInitialized
}
function v59(buffer$$16) {
  var length$$16 = this.mozAudioTail.length;
  if(length$$16 > 0) {
    var v4908 = this.audioHandleMoz;
    var samplesAccepted = JAM.call(v4908.mozWriteAudio, v4908, [this.mozAudioTail]);
    this.samplesAlreadyWritten = this.samplesAlreadyWritten + samplesAccepted;
    this.mozAudioTail.splice(0, samplesAccepted)
  }
  length$$16 = Math.min(buffer$$16.length, webAudioMaxBufferSize - this.samplesAlreadyWritten + this.audioHandleMoz.mozCurrentSampleOffset());
  var v4914 = this.audioHandleMoz;
  samplesAccepted = JAM.call(v4914.mozWriteAudio, v4914, [buffer$$16]);
  this.samplesAlreadyWritten = this.samplesAlreadyWritten + samplesAccepted;
  var index$$46 = 0;
  var v4917 = length$$16 > samplesAccepted;
  for(;v4917;) {
    var v4915 = this.mozAudioTail;
    var v8160 = index$$46;
    index$$46 = index$$46 + 1;
    introspect(JAM.policy.p1) {
      var v4916 = buffer$$16[v8160]
    }
    v4915.push(v4916);
    length$$16 = length$$16 - 1;
    v4917 = length$$16 > samplesAccepted
  }
  return
}
function v58(newVolume) {
  var v8161 = newVolume >= 0;
  if(v8161) {
    v8161 = newVolume <= 1
  }
  if(v8161) {
    XAudioJSVolume = newVolume;
    if(this.checkFlashInit()) {
      var v4918 = this.audioHandleFlash;
      JAM.call(v4918.changeVolume, v4918, [XAudioJSVolume])
    }
    if(this.mozAudioFound) {
      this.audioHandleMoz.volume = XAudioJSVolume
    }
  }
  return
}
function v57() {
  function v56(event$$2) {
    if(event$$2.success) {
      thisObj.audioHandleFlash = event$$2.ref
    }else {
      thisObj.audioType = 1
    }
    return
  }
  var existingFlashload = document.getElementById("XAudioJS");
  if(existingFlashload == null) {
    var thisObj = this;
    var mainContainerNode = document.createElement("div");
    JAM.call(mainContainerNode.setAttribute, mainContainerNode, ["style", "position: fixed; bottom: 0px; right: 0px; margin: 0px; padding: 0px; border: none; width: 8px; height: 8px; overflow: hidden; z-index: -1000; "]);
    var containerNode = document.createElement("div");
    JAM.call(containerNode.setAttribute, containerNode, ["style", "position: static; border: none; width: 0px; height: 0px; visibility: hidden; margin: 8px; padding: 0px;"]);
    JAM.call(containerNode.setAttribute, containerNode, ["id", "XAudioJS"]);
    JAM.call(mainContainerNode.appendChild, mainContainerNode, [containerNode]);
    var v4924 = document.getElementsByTagName("body")[0];
    JAM.call(v4924.appendChild, v4924, [mainContainerNode]);
    JAM.call(swfobject.embedSWF, swfobject, ["XAudioJS.swf", "XAudioJS", "8", "8", "9.0.0", "", {}, {"allowscriptaccess":"always"}, {"style":"position: static; visibility: hidden; margin: 8px; padding: 0px; border: none"}, v56])
  }else {
    this.audioHandleFlash = existingFlashload
  }
  this.audioType = 2;
  return
}
function v55() {
  if(launchedContext) {
    resetCallbackAPIAudioBuffer(webAudioActualSampleRate, samplesPerCallback);
    this.audioType = 1
  }else {
    throw new Error("");
  }
  return
}
function v54() {
  JAM.call(this.writeMozAudio, this, [getFloat32(webAudioMinBufferSize)]);
  this.audioType = 0;
  return
}
function v53() {
  var v10959 = new Audio;
  this.audioHandleMoz = v10959;
  var v4929 = this.audioHandleMoz;
  JAM.call(v4929.mozSetup, v4929, [this.audioChannels, XAudioJSSampleRate]);
  this.samplesAlreadyWritten = 0;
  var v4931;
  if(this.audioChannels == 2) {
    v4931 = [0, 0]
  }else {
    v4931 = [0]
  }
  var emptySampleFrame = v4931;
  var prebufferAmount = 0;
  var v8164 = navigator.platform != "MacIntel";
  if(v8164) {
    v8164 = navigator.platform != "MacPPC"
  }
  if(v8164) {
    var v4932 = this.audioHandleMoz.mozCurrentSampleOffset() == 0;
    for(;v4932;) {
      var v8166 = prebufferAmount;
      var v9601 = this.audioHandleMoz;
      prebufferAmount = v8166 + JAM.call(v9601.mozWriteAudio, v9601, [emptySampleFrame]);
      v4932 = this.audioHandleMoz.mozCurrentSampleOffset() == 0
    }
    var samplesToDoubleBuffer = prebufferAmount / this.audioChannels;
    var index$$45 = 0;
    var v4934 = index$$45 < samplesToDoubleBuffer;
    for(;v4934;) {
      var v8169 = this.samplesAlreadyWritten;
      var v9603 = this.audioHandleMoz;
      this.samplesAlreadyWritten = v8169 + JAM.call(v9603.mozWriteAudio, v9603, [emptySampleFrame]);
      index$$45 = index$$45 + 1;
      v4934 = index$$45 < samplesToDoubleBuffer
    }
  }
  this.samplesAlreadyWritten = this.samplesAlreadyWritten + prebufferAmount;
  webAudioMinBufferSize = webAudioMinBufferSize + this.samplesAlreadyWritten;
  this.mozAudioFound = true;
  return
}
function v52() {
  try {
    throw new Error("Select initializeWebAudio case");
  }catch(error$$8) {
    try {
      this.initializeWebAudio()
    }catch(error$$9) {
      try {
        this.initializeFlashAudio()
      }catch(error$$10) {
        throw new Error("Browser does not support real time audio output.");
      }
    }
  }
  return
}
function v51() {
  if(this.audioType == 0) {
    this.MOZExecuteCallback()
  }else {
    if(this.audioType == 1) {
      this.callbackBasedExecuteCallback()
    }else {
      if(this.audioType == 2) {
        var v8176 = this.checkFlashInit();
        if(!v8176) {
          v8176 = launchedContext
        }
        if(v8176) {
          this.callbackBasedExecuteCallback()
        }else {
          if(this.mozAudioFound) {
            this.MOZExecuteCallback()
          }
        }
      }
    }
  }
  return
}
function v50() {
  var samplesRequested$$1 = webAudioMinBufferSize - this.remainingBuffer();
  if(samplesRequested$$1 > 0) {
    JAM.call(this.callbackBasedWriteAudioNoCallback, this, [JAM.call(this.underRunCallback, this, [samplesRequested$$1])])
  }
  return
}
function v49() {
  var samplesRequested = webAudioMinBufferSize - this.remainingBuffer();
  if(samplesRequested > 0) {
    JAM.call(this.writeMozAudio, this, [JAM.call(this.underRunCallback, this, [samplesRequested])])
  }
  return
}
function v48() {
  if(this.audioType == 0) {
    return this.samplesAlreadyWritten - this.audioHandleMoz.mozCurrentSampleOffset()
  }else {
    if(this.audioType == 1) {
      return(resampledSamplesLeft() * resampleControl.ratioWeight >> this.audioChannels - 1 << this.audioChannels - 1) + audioBufferSize
    }else {
      if(this.audioType == 2) {
        var v8183 = this.checkFlashInit();
        if(!v8183) {
          v8183 = launchedContext
        }
        if(v8183) {
          return(resampledSamplesLeft() * resampleControl.ratioWeight >> this.audioChannels - 1 << this.audioChannels - 1) + audioBufferSize
        }else {
          if(this.mozAudioFound) {
            return this.samplesAlreadyWritten - this.audioHandleMoz.mozCurrentSampleOffset()
          }
        }
      }
    }
  }
  return 0
}
function v47(buffer$$15) {
  if(this.audioType == 0) {
    JAM.call(this.MOZWriteAudioNoCallback, this, [buffer$$15])
  }else {
    if(this.audioType == 1) {
      JAM.call(this.callbackBasedWriteAudioNoCallback, this, [buffer$$15])
    }else {
      if(this.audioType == 2) {
        var v8190 = this.checkFlashInit();
        if(!v8190) {
          v8190 = launchedContext
        }
        if(v8190) {
          JAM.call(this.callbackBasedWriteAudioNoCallback, this, [buffer$$15])
        }else {
          if(this.mozAudioFound) {
            JAM.call(this.MOZWriteAudioNoCallback, this, [buffer$$15])
          }
        }
      }
    }
  }
  return
}
function v46(buffer$$14) {
  if(this.audioType == 0) {
    JAM.call(this.MOZWriteAudio, this, [buffer$$14])
  }else {
    if(this.audioType == 1) {
      JAM.call(this.callbackBasedWriteAudio, this, [buffer$$14])
    }else {
      if(this.audioType == 2) {
        var v8194 = this.checkFlashInit();
        if(!v8194) {
          v8194 = launchedContext
        }
        if(v8194) {
          JAM.call(this.callbackBasedWriteAudio, this, [buffer$$14])
        }else {
          if(this.mozAudioFound) {
            JAM.call(this.MOZWriteAudio, this, [buffer$$14])
          }
        }
      }
    }
  }
  return
}
function v45(buffer$$13) {
  var length$$15 = buffer$$13.length;
  var bufferCounter = 0;
  var v8195 = bufferCounter < length$$15;
  if(v8195) {
    v8195 = audioBufferSize < webAudioMaxBufferSize
  }
  var v4971 = v8195;
  for(;v4971;) {
    var v4970 = audioBufferSize;
    audioBufferSize = audioBufferSize + 1;
    var v8196 = bufferCounter;
    bufferCounter = bufferCounter + 1;
    JAM.set(audioContextSampleBuffer, v4970, buffer$$13[v8196]);
    var v8197 = bufferCounter < length$$15;
    if(v8197) {
      v8197 = audioBufferSize < webAudioMaxBufferSize
    }
    v4971 = v8197
  }
  return
}
function v44(buffer$$12) {
  JAM.call(this.callbackBasedWriteAudioNoCallback, this, [buffer$$12]);
  this.callbackBasedExecuteCallback();
  return
}
function v43(buffer$$11) {
  JAM.call(this.writeMozAudio, this, [buffer$$11]);
  return
}
function v42(buffer$$10) {
  JAM.call(this.MOZWriteAudioNoCallback, this, [buffer$$10]);
  this.MOZExecuteCallback();
  return
}
function v41() {
  try {
    var v10960 = new Float32Array(this.outputBufferSize);
    this.outputBuffer = v10960;
    var v10961 = new Float32Array(this.channels);
    this.lastOutput = v10961
  }catch(error$$7) {
    this.outputBuffer = [];
    this.lastOutput = []
  }
  return
}
function v40(sliceAmount) {
  if(this.noReturn) {
    return sliceAmount
  }else {
    try {
      return this.outputBuffer.subarray(0, sliceAmount)
    }catch(error$$5) {
      try {
        this.outputBuffer.length = sliceAmount;
        return this.outputBuffer
      }catch(error$$6) {
        return this.outputBuffer.slice(0, sliceAmount)
      }
    }
  }
  return
}
function v39(buffer$$9) {
  if(this.noReturn) {
    this.outputBuffer = buffer$$9;
    return buffer$$9.length
  }else {
    return buffer$$9
  }
  return
}
function v38() {
  var toCompile = "var bufferLength = Math.min(buffer.length, this.outputBufferSize);  if ((bufferLength % " + this.channels + ") == 0) {    if (bufferLength > 0) {      var ratioWeight = this.ratioWeight;      var weight = 0;";
  var channel = 0;
  var v4980 = channel < this.channels;
  for(;v4980;) {
    toCompile = toCompile + ("var output" + channel + " = 0;");
    channel = channel + 1;
    v4980 = channel < this.channels
  }
  toCompile = toCompile + "var actualPosition = 0;      var amountToNext = 0;      var alreadyProcessedTail = !this.tailExists;      this.tailExists = false;      var outputBuffer = this.outputBuffer;      var outputOffset = 0;      var currentPosition = 0;      do {        if (alreadyProcessedTail) {          weight = ratioWeight;";
  channel = 0;
  var v4981 = channel < this.channels;
  for(;v4981;) {
    toCompile = toCompile + ("output" + channel + " = 0;");
    channel = channel + 1;
    v4981 = channel < this.channels
  }
  toCompile = toCompile + "}        else {          weight = this.lastWeight;";
  channel = 0;
  var v4982 = channel < this.channels;
  for(;v4982;) {
    toCompile = toCompile + ("output" + channel + " = this.lastOutput[" + channel + "];");
    channel = channel + 1;
    v4982 = channel < this.channels
  }
  toCompile = toCompile + "alreadyProcessedTail = true;        }        while (weight > 0 && actualPosition < bufferLength) {          amountToNext = 1 + actualPosition - currentPosition;          if (weight >= amountToNext) {";
  channel = 0;
  var v4983 = channel < this.channels;
  for(;v4983;) {
    toCompile = toCompile + ("output" + channel + " += buffer[actualPosition++] * amountToNext;");
    channel = channel + 1;
    v4983 = channel < this.channels
  }
  toCompile = toCompile + "currentPosition = actualPosition;            weight -= amountToNext;          }          else {";
  channel = 0;
  var v4984 = channel < this.channels;
  for(;v4984;) {
    var v10310 = "output" + channel + " += buffer[actualPosition";
    var v10554;
    if(channel > 0) {
      v10554 = " + " + channel
    }else {
      v10554 = ""
    }
    toCompile = toCompile + (v10310 + v10554 + "] * weight;");
    channel = channel + 1;
    v4984 = channel < this.channels
  }
  toCompile = toCompile + "currentPosition += weight;            weight = 0;            break;          }        }        if (weight == 0) {";
  channel = 0;
  var v4985 = channel < this.channels;
  for(;v4985;) {
    toCompile = toCompile + ("outputBuffer[outputOffset++] = output" + channel + " / ratioWeight;");
    channel = channel + 1;
    v4985 = channel < this.channels
  }
  toCompile = toCompile + "}        else {          this.lastWeight = weight;";
  channel = 0;
  var v4986 = channel < this.channels;
  for(;v4986;) {
    toCompile = toCompile + ("this.lastOutput[" + channel + "] = output" + channel + ";");
    channel = channel + 1;
    v4986 = channel < this.channels
  }
  toCompile = toCompile + 'this.tailExists = true;          break;        }      } while (actualPosition < bufferLength);      return this.bufferSlice(outputOffset);    }    else {      return (this.noReturn) ? 0 : [];    }  }  else {    throw(new Error("Buffer was of incorrect sample length."));  }';
  var v10962 = JAM.call(Function, null, ["buffer", toCompile]);
  this.interpolate = v10962;
  return
}
function v37() {
  var v8220 = this.fromSampleRate > 0;
  if(v8220) {
    var v9622 = this.toSampleRate > 0;
    if(v9622) {
      v9622 = this.channels > 0
    }
    v8220 = v9622
  }
  if(v8220) {
    if(this.fromSampleRate == this.toSampleRate) {
      this.resampler = this.bypassResampler;
      this.ratioWeight = 1
    }else {
      this.compileInterpolationFunction();
      this.resampler = this.interpolate;
      this.ratioWeight = this.fromSampleRate / this.toSampleRate;
      this.tailExists = false;
      this.lastWeight = 0;
      this.initializeBuffers()
    }
  }else {
    throw new Error("Invalid settings specified for the resampler.");
  }
  return
}
function v36() {
  var event$$1 = {outputBuffer:this.outputBuffer};
  JAM.call(this.onaudioprocess, this, [event$$1]);
  return
}
function v35() {
  return
}
function v34(runner$$2) {
  function RunNextSetup() {
    if(index$$40 < length$$12) {
      try {
        var v8223 = suite$$1.benchmarks;
        introspect(JAM.policy.p1) {
          var v4992 = v8223[index$$40]
        }
        v4992.Setup()
      }catch(e$$4) {
        JAM.call(suite$$1.NotifyError, suite$$1, [e$$4]);
        return null
      }
      return RunNextBenchmark
    }
    suite$$1.NotifyResult();
    return null
  }
  function RunNextBenchmark() {
    try {
      var v8224 = suite$$1.benchmarks;
      introspect(JAM.policy.p1) {
        var v4994 = v8224[index$$40]
      }
      data$$20 = JAM.call(suite$$1.RunSingleBenchmark, suite$$1, [v4994, data$$20])
    }catch(e$$5) {
      JAM.call(suite$$1.NotifyError, suite$$1, [e$$5]);
      return null
    }
    var v4995;
    if(data$$20 == null) {
      v4995 = RunNextTearDown
    }else {
      v4995 = RunNextBenchmark()
    }
    return v4995
  }
  function RunNextTearDown() {
    try {
      var v8226 = suite$$1.benchmarks;
      var v8227 = index$$40;
      index$$40 = index$$40 + 1;
      introspect(JAM.policy.p1) {
        var v4996 = v8226[v8227]
      }
      v4996.TearDown()
    }catch(e$$6) {
      JAM.call(suite$$1.NotifyError, suite$$1, [e$$6]);
      return null
    }
    return RunNextSetup
  }
  BenchmarkSuite.ResetRNG();
  this.results = [];
  this.runner = runner$$2;
  var length$$12 = this.benchmarks.length;
  var index$$40 = 0;
  var suite$$1 = this;
  var data$$20;
  return RunNextSetup()
}
function v33(benchmark$$1, data$$18) {
  function Measure(data$$19) {
    var elapsed = 0;
    var start$$5 = new Date;
    var i$$5 = 0;
    var v8228;
    if(doDeterministic$$1) {
      v8228 = i$$5 < benchmark$$1.deterministicIterations
    }else {
      v8228 = elapsed < 1E3
    }
    var v4999 = v8228;
    for(;v4999;) {
      benchmark$$1.run();
      elapsed = new Date - start$$5;
      i$$5 = i$$5 + 1;
      var v8229;
      if(doDeterministic$$1) {
        v8229 = i$$5 < benchmark$$1.deterministicIterations
      }else {
        v8229 = elapsed < 1E3
      }
      v4999 = v8229
    }
    if(data$$19 != null) {
      data$$19.runs = data$$19.runs + i$$5;
      data$$19.elapsed = data$$19.elapsed + elapsed
    }
    return
  }
  var config = BenchmarkSuite.config;
  var v5001;
  if(config.doWarmup !== undefined) {
    v5001 = config.doWarmup
  }else {
    v5001 = benchmark$$1.doWarmup
  }
  var doWarmup$$1 = v5001;
  var v5002;
  if(config.doDeterministic !== undefined) {
    v5002 = config.doDeterministic
  }else {
    v5002 = benchmark$$1.doDeterministic
  }
  var doDeterministic$$1 = v5002;
  var v8234 = !doWarmup$$1;
  if(v8234) {
    v8234 = data$$18 == null
  }
  if(v8234) {
    data$$18 = {runs:0, elapsed:0}
  }
  if(data$$18 == null) {
    Measure(null);
    return{runs:0, elapsed:0}
  }else {
    Measure(data$$18);
    if(data$$18.runs < benchmark$$1.minIterations) {
      return data$$18
    }
    var usec = data$$18.elapsed * 1E3 / data$$18.runs;
    var v5007;
    if(benchmark$$1.rmsResult != null) {
      v5007 = benchmark$$1.rmsResult()
    }else {
      v5007 = 0
    }
    var rms = v5007;
    JAM.call(this.NotifyStep, this, [new BenchmarkResult(benchmark$$1, usec, rms)]);
    return null
  }
  return
}
function v32(error$$2) {
  if(this.runner.NotifyError) {
    var v5010 = this.runner;
    JAM.call(v5010.NotifyError, v5010, [this.name, error$$2])
  }
  if(this.runner.NotifyStep) {
    var v5013 = this.runner;
    JAM.call(v5013.NotifyStep, v5013, [this.name])
  }
  return
}
function v31(runner$$1) {
  BenchmarkSuite.scores.push(1);
  if(runner$$1.NotifyResult) {
    JAM.call(runner$$1.NotifyResult, runner$$1, [this.name, "Skipped"])
  }
  return
}
function v30() {
  var mean = JAM.call(BenchmarkSuite.GeometricMeanTime, BenchmarkSuite, [this.results]);
  var score$$1 = this.reference[0] / mean;
  BenchmarkSuite.scores.push(score$$1);
  if(this.runner.NotifyResult) {
    var formatted$$1 = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * score$$1]);
    var v5023 = this.runner;
    JAM.call(v5023.NotifyResult, v5023, [this.name, formatted$$1])
  }
  if(this.reference.length == 2) {
    var meanLatency = JAM.call(BenchmarkSuite.GeometricMeanLatency, BenchmarkSuite, [this.results]);
    if(meanLatency != 0) {
      var scoreLatency = this.reference[1] / meanLatency;
      BenchmarkSuite.scores.push(scoreLatency);
      if(this.runner.NotifyResult) {
        var formattedLatency = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * scoreLatency]);
        var v5030 = this.runner;
        JAM.call(v5030.NotifyResult, v5030, [this.name + "Latency", formattedLatency])
      }
    }
  }
  return
}
function v29(result$$1) {
  this.results.push(result$$1);
  if(this.runner.NotifyStep) {
    var v5036 = this.runner;
    JAM.call(v5036.NotifyStep, v5036, [result$$1.benchmark.name])
  }
  return
}
function v28(value$$29) {
  if(value$$29 > 100) {
    return value$$29.toFixed(0)
  }else {
    return value$$29.toPrecision(3)
  }
  return
}
function v27(measurements$$1) {
  var log$$2 = 0;
  var hasLatencyResult = false;
  var i$$4 = 0;
  var v5041 = i$$4 < measurements$$1.length;
  for(;v5041;) {
    introspect(JAM.policy.p1) {
      var v9629 = measurements$$1[i$$4]
    }
    if(v9629.latency != 0) {
      var v8251 = log$$2;
      introspect(JAM.policy.p1) {
        var v10315 = measurements$$1[i$$4]
      }
      log$$2 = v8251 + Math.log(v10315.latency);
      hasLatencyResult = true
    }
    i$$4 = i$$4 + 1;
    v5041 = i$$4 < measurements$$1.length
  }
  if(hasLatencyResult) {
    return Math.pow(Math.E, log$$2 / measurements$$1.length)
  }else {
    return 0
  }
  return
}
function v26(measurements) {
  var log$$1 = 0;
  var i$$3 = 0;
  var v5044 = i$$3 < measurements.length;
  for(;v5044;) {
    var v8256 = log$$1;
    introspect(JAM.policy.p1) {
      var v10316 = measurements[i$$3]
    }
    log$$1 = v8256 + Math.log(v10316.time);
    i$$3 = i$$3 + 1;
    v5044 = i$$3 < measurements.length
  }
  return Math.pow(Math.E, log$$1 / measurements.length)
}
function v25(numbers) {
  var log = 0;
  var i$$2 = 0;
  var v5047 = i$$2 < numbers.length;
  for(;v5047;) {
    var v8261 = log;
    introspect(JAM.policy.p1) {
      var v9632 = numbers[i$$2]
    }
    log = v8261 + Math.log(v9632);
    i$$2 = i$$2 + 1;
    v5047 = i$$2 < numbers.length
  }
  return Math.pow(Math.E, log / numbers.length)
}
function v24() {
  var result = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$1 = 0;
  var v5050 = i$$1 < suites$$1.length;
  for(;v5050;) {
    introspect(JAM.policy.p1) {
      var v10317 = suites$$1[i$$1]
    }
    result = result + v10317.benchmarks.length;
    i$$1 = i$$1 + 1;
    v5050 = i$$1 < suites$$1.length
  }
  return result
}
function v23(runner, skipBenchmarks$$1) {
  function RunStep() {
    var v8268 = continuation;
    if(!v8268) {
      v8268 = index$$39 < length$$11
    }
    var v5056 = v8268;
    for(;v5056;) {
      if(continuation) {
        continuation = continuation()
      }else {
        var v5051 = index$$39;
        index$$39 = index$$39 + 1;
        introspect(JAM.policy.p1) {
          var suite = suites[v5051]
        }
        if(runner.NotifyStart) {
          JAM.call(runner.NotifyStart, runner, [suite.name])
        }
        if(skipBenchmarks$$1.indexOf(suite.name) > -1) {
          JAM.call(suite.NotifySkipped, suite, [runner])
        }else {
          continuation = JAM.call(suite.RunStep, suite, [runner])
        }
      }
      var v8270 = continuation;
      if(v8270) {
        var v9636 = typeof window != "undefined";
        if(v9636) {
          v9636 = window.setTimeout
        }
        v8270 = v9636
      }
      if(v8270) {
        window.setTimeout(RunStep, 25);
        return
      }
      var v8271 = continuation;
      if(!v8271) {
        v8271 = index$$39 < length$$11
      }
      v5056 = v8271
    }
    if(runner.NotifyScore) {
      var score = JAM.call(BenchmarkSuite.GeometricMean, BenchmarkSuite, [BenchmarkSuite.scores]);
      var formatted = JAM.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [100 * score]);
      JAM.call(runner.NotifyScore, runner, [formatted])
    }
    return
  }
  var v5060;
  if(typeof skipBenchmarks$$1 === "undefined") {
    v5060 = []
  }else {
    v5060 = skipBenchmarks$$1
  }
  skipBenchmarks$$1 = v5060;
  var continuation = null;
  var suites = BenchmarkSuite.suites;
  var length$$11 = suites.length;
  BenchmarkSuite.scores = [];
  var index$$39 = 0;
  RunStep();
  return
}
function v22() {
  function v21() {
    function v20() {
      seed = seed + 2127912214 + (seed << 12) & 4294967295;
      seed = (seed ^ 3345072700 ^ seed >>> 19) & 4294967295;
      seed = seed + 374761393 + (seed << 5) & 4294967295;
      seed = (seed + 3550635116 ^ seed << 9) & 4294967295;
      seed = seed + 4251993797 + (seed << 3) & 4294967295;
      seed = (seed ^ 3042594569 ^ seed >>> 16) & 4294967295;
      return(seed & 268435455) / 268435456
    }
    var seed = 49734321;
    return v20
  }
  var v5068 = Math;
  var v10963 = v21();
  v5068.random = v10963;
  return
}
function v19(s$$2) {
  throw"Alert called with argument: " + s$$2;
}
function v18() {
  return this.time
}
function v17() {
  var v5069 = performance.now;
  if(!v5069) {
    var v8285 = performance.mozNow;
    if(!v8285) {
      var v9639 = performance.msNow;
      if(!v9639) {
        var v10319 = performance.oNow;
        if(!v10319) {
          var v10556 = performance.webkitNow;
          if(!v10556) {
            v10556 = Date.now
          }
          v10319 = v10556
        }
        v9639 = v10319
      }
      v8285 = v9639
    }
    v5069 = v8285
  }
  return v5069
}
function Benchmark(name$$31, doWarmup, doDeterministic, deterministicIterations, run$$1, setup, tearDown, rmsResult, minIterations) {
  function v1() {
    return
  }
  function v0() {
    return
  }
  this.name = name$$31;
  this.doWarmup = doWarmup;
  this.doDeterministic = doDeterministic;
  this.deterministicIterations = deterministicIterations;
  this.run = run$$1;
  var v5070;
  if(setup) {
    v5070 = setup
  }else {
    v5070 = v0
  }
  this.Setup = v5070;
  var v5071;
  if(tearDown) {
    v5071 = tearDown
  }else {
    v5071 = v1
  }
  this.TearDown = v5071;
  var v5072;
  if(rmsResult) {
    v5072 = rmsResult
  }else {
    v5072 = null
  }
  this.rmsResult = v5072;
  var v5073;
  if(minIterations) {
    v5073 = minIterations
  }else {
    v5073 = 32
  }
  this.minIterations = v5073;
  return
}
function BenchmarkResult(benchmark, time, latency) {
  this.benchmark = benchmark;
  this.time = time;
  this.latency = latency;
  return
}
function BenchmarkSuite(name$$32, reference, benchmarks$$1) {
  this.name = name$$32;
  this.reference = reference;
  this.benchmarks = benchmarks$$1;
  BenchmarkSuite.suites.push(this);
  return
}
function setupGameboy() {
  var v9641 = typeof Uint8Array != "undefined";
  if(v9641) {
    var v10322 = typeof Int8Array != "undefined";
    if(v10322) {
      var v10559 = typeof Float32Array != "undefined";
      if(v10559) {
        v10559 = typeof Int32Array != "undefined"
      }
      v10322 = v10559
    }
    v9641 = v10322
  }
  if(!v9641) {
    throw"TypedArrayUnsupported";
  }
  decoded_gameboy_rom = base64_decode(gameboy_rom);
  rom = null;
  return
}
function runGameboy() {
  start(new GameBoyCanvas, decoded_gameboy_rom);
  gameboy.instructions = 0;
  gameboy.totalInstructions = 25E4;
  var v5077 = gameboy.instructions <= gameboy.totalInstructions;
  for(;v5077;) {
    gameboy.run();
    GameBoyAudioNode.run();
    v5077 = gameboy.instructions <= gameboy.totalInstructions
  }
  resetGlobalVariables();
  return
}
function tearDownGameboy() {
  decoded_gameboy_rom = null;
  expectedGameboyStateStr = null;
  return
}
function GameBoyContext() {
  function v5() {
    return
  }
  function v4(buffer$$8, x$$48, y$$31) {
    var sum = 0;
    var i$$6 = 0;
    var v5078 = i$$6 < buffer$$8.data.length;
    for(;v5078;) {
      var v10323 = buffer$$8.data;
      introspect(JAM.policy.p1) {
        var v9643 = v10323[i$$6]
      }
      sum = sum + i$$6 * v9643;
      sum = sum % 1E3;
      i$$6 = i$$6 + 1;
      v5078 = i$$6 < buffer$$8.data.length
    }
    return
  }
  function v3(w$$5, h$$4) {
    var result$$2 = {};
    var v5079 = result$$2;
    var v10964 = new Uint8Array(w$$5 * h$$4 * 4);
    v5079.data = v10964;
    return result$$2
  }
  function v2() {
    return new Buffer
  }
  this.createBuffer = v2;
  this.createImageData = v3;
  this.putImageData = v4;
  this.drawImage = v5;
  return
}
function GameBoyCanvas() {
  function v6() {
    return new GameBoyContext
  }
  this.getContext = v6;
  this.width = 160;
  this.height = 144;
  this.style = {visibility:"visibile"};
  return
}
function cout(message$$10, colorIndex) {
  return
}
function clear_terminal() {
  return
}
function GameBoyAudioContext() {
  function v12(bufferSize, inputChannels, outputChannels) {
    function v11(i$$8) {
      var v5080 = this.channelData;
      introspect(JAM.policy.p1) {
        return v5080[i$$8]
      }
    }
    GameBoyAudioNode.bufferSize = bufferSize;
    GameBoyAudioNode.outputBuffer = {getChannelData:v11, channelData:[]};
    var i$$7 = 0;
    var v5083 = i$$7 < outputChannels;
    for(;v5083;) {
      var v5081 = GameBoyAudioNode.outputBuffer.channelData;
      var v5082 = i$$7;
      var v10965 = new Float32Array(bufferSize);
      v5081[v5082] = v10965;
      i$$7 = i$$7 + 1;
      v5083 = i$$7 < outputChannels
    }
    return GameBoyAudioNode
  }
  function v10(channels, len, sampleRate) {
    return{gain:1, numberOfChannels:1, length:1, duration:2.0833333110203966E-5, sampleRate:48E3}
  }
  function v9() {
    function v8() {
      return
    }
    function v7() {
      return
    }
    return{noteOn:v7, connect:v8}
  }
  this.createBufferSource = v9;
  this.sampleRate = 48E3;
  this.destination = {};
  this.createBuffer = v10;
  this.createJavaScriptNode = v12;
  return
}
function new_Date() {
  function v13() {
    mock_date_time_counter = mock_date_time_counter + 16;
    return mock_date_time_counter
  }
  return{getTime:v13}
}
function checkFinalState() {
  function sum$$1(a) {
    var result$$3 = 0;
    var i$$9 = 0;
    var v5084 = i$$9 < a.length;
    for(;v5084;) {
      introspect(JAM.policy.p1) {
        var v8298 = a[i$$9]
      }
      result$$3 = result$$3 + v8298;
      i$$9 = i$$9 + 1;
      v5084 = i$$9 < a.length
    }
    return result$$3
  }
  var state = {registerA:gameboy.registerA, registerB:gameboy.registerB, registerC:gameboy.registerC, registerE:gameboy.registerE, registerF:gameboy.registerF, registersHL:gameboy.registersHL, programCounter:gameboy.programCounter, stackPointer:gameboy.stackPointer, sumROM:sum$$1(JAM.call(gameboy.fromTypedArray, gameboy, [gameboy.ROM])), sumMemory:sum$$1(JAM.call(gameboy.fromTypedArray, gameboy, [gameboy.memory])), sumMBCRam:sum$$1(JAM.call(gameboy.fromTypedArray, gameboy, [gameboy.MBCRam])), sumVRam:sum$$1(JAM.call(gameboy.fromTypedArray, 
  gameboy, [gameboy.VRam]))};
  var stateStr = JAM.call(JSON.stringify, JSON, [state]);
  if(typeof expectedGameboyStateStr != "undefined") {
    if(stateStr != expectedGameboyStateStr) {
      JAM.call(alert, null, ["Incorrect final state of processor:\n" + " actual   " + stateStr + "\n" + " expected " + expectedGameboyStateStr])
    }
  }else {
    JAM.call(alert, null, [stateStr])
  }
  return
}
function resetGlobalVariables() {
  audioContextHandle = null;
  audioNode = null;
  audioSource = null;
  launchedContext = false;
  audioContextSampleBuffer = [];
  resampled = [];
  webAudioMinBufferSize = 15E3;
  webAudioMaxBufferSize = 25E3;
  webAudioActualSampleRate = 44100;
  XAudioJSSampleRate = 0;
  webAudioMono = false;
  XAudioJSVolume = 1;
  resampleControl = null;
  audioBufferSize = 0;
  resampleBufferStart = 0;
  resampleBufferEnd = 0;
  resampleBufferSize = 2;
  gameboy = null;
  gbRunInterval = null;
  return
}
function base64(data$$21) {
  try {
    var base64$$1 = GameBoyWindow.btoa(data$$21)
  }catch(error$$3) {
    base64$$1 = "";
    var dataLength = data$$21.length;
    if(dataLength > 0) {
      var bytes = [0, 0, 0];
      var index$$41 = 0;
      var remainder = dataLength % 3;
      var v5101 = data$$21.length % 3 > 0;
      for(;v5101;) {
        JAM.set(data$$21, data$$21.length, " ");
        v5101 = data$$21.length % 3 > 0
      }
      var v5105 = index$$41 < dataLength;
      for(;v5105;) {
        var v9653 = index$$41;
        index$$41 = index$$41 + 1;
        var v5102 = data$$21.charCodeAt(v9653) & 255;
        var v9654 = index$$41;
        index$$41 = index$$41 + 1;
        var v5103 = data$$21.charCodeAt(v9654) & 255;
        var v9655 = index$$41;
        index$$41 = index$$41 + 1;
        bytes = [v5102, v5103, data$$21.charCodeAt(v9655) & 255];
        var v10703 = bytes[0] >> 2;
        introspect(JAM.policy.p1) {
          var v10561 = toBase64[v10703]
        }
        var v10704 = (bytes[0] & 3) << 4 | bytes[1] >> 4;
        introspect(JAM.policy.p1) {
          var v10562 = toBase64[v10704]
        }
        var v10325 = v10561 + v10562;
        var v10563 = (bytes[1] & 15) << 2 | bytes[2] >> 6;
        introspect(JAM.policy.p1) {
          var v10326 = toBase64[v10563]
        }
        var v9656 = v10325 + v10326;
        var v10327 = bytes[2] & 63;
        introspect(JAM.policy.p1) {
          var v9657 = toBase64[v10327]
        }
        base64$$1 = base64$$1 + (v9656 + v9657);
        v5105 = index$$41 < dataLength
      }
      if(remainder > 0) {
        base64$$1[base64$$1.length - 1] = "=";
        if(remainder == 2) {
          base64$$1[base64$$1.length - 2] = "=";
          base64$$1[base64$$1.length - 3] = toBase64[(bytes[0] & 3) << 4]
        }else {
          base64$$1[base64$$1.length - 2] = toBase64[(bytes[1] & 15) << 2]
        }
      }
    }
  }
  return base64$$1
}
function base64_decode(data$$22) {
  try {
    var decode64 = GameBoyWindow.atob(data$$22)
  }catch(error$$4) {
    decode64 = "";
    var dataLength$$1 = data$$22.length;
    var v8318 = dataLength$$1 > 3;
    if(v8318) {
      v8318 = dataLength$$1 % 4 == 0
    }
    if(v8318) {
      var sixbits = [0, 0, 0, 0];
      var index$$42 = 0;
      var v5117 = index$$42 < dataLength$$1;
      for(;v5117;) {
        var v9661 = index$$42;
        index$$42 = index$$42 + 1;
        var v5113 = fromBase64.indexOf(data$$22.charAt(v9661));
        var v9662 = index$$42;
        index$$42 = index$$42 + 1;
        var v5114 = fromBase64.indexOf(data$$22.charAt(v9662));
        var v9663 = index$$42;
        index$$42 = index$$42 + 1;
        var v5115 = fromBase64.indexOf(data$$22.charAt(v9663));
        var v9664 = index$$42;
        index$$42 = index$$42 + 1;
        sixbits = [v5113, v5114, v5115, fromBase64.indexOf(data$$22.charAt(v9664))];
        decode64 = decode64 + (String.fromCharCode(sixbits[0] << 2 | sixbits[1] >> 4) + String.fromCharCode((sixbits[1] & 15) << 4 | sixbits[2] >> 2) + String.fromCharCode((sixbits[2] & 3) << 6 | sixbits[3]));
        v5117 = index$$42 < dataLength$$1
      }
      if(sixbits[3] >= 64) {
        decode64.length = decode64.length - 1;
        if(sixbits[2] >= 64) {
          decode64.length = decode64.length - 1
        }
      }
    }
  }
  return decode64
}
function to_little_endian_dword(str$$6) {
  return to_little_endian_word(str$$6) + String.fromCharCode(str$$6 >> 16 & 255, str$$6 >> 24 & 255)
}
function to_little_endian_word(str$$7) {
  return to_byte(str$$7) + String.fromCharCode(str$$7 >> 8 & 255)
}
function to_byte(str$$8) {
  return String.fromCharCode(str$$8 & 255)
}
function arrayToBase64(arrayIn) {
  var binString = "";
  var length$$13 = arrayIn.length;
  var index$$43 = 0;
  var v5127 = index$$43 < length$$13;
  for(;v5127;) {
    introspect(JAM.policy.p1) {
      var v9670 = arrayIn[index$$43]
    }
    if(typeof v9670 == "number") {
      var v8333 = binString;
      introspect(JAM.policy.p1) {
        var v9671 = arrayIn[index$$43]
      }
      binString = v8333 + String.fromCharCode(v9671)
    }
    index$$43 = index$$43 + 1;
    v5127 = index$$43 < length$$13
  }
  return base64(binString)
}
function base64ToArray(b64String) {
  var binString$$1 = base64_decode(b64String);
  var outArray = [];
  var length$$14 = binString$$1.length;
  var index$$44 = 0;
  var v5129 = index$$44 < length$$14;
  for(;v5129;) {
    var v9672 = index$$44;
    index$$44 = index$$44 + 1;
    outArray.push(binString$$1.charCodeAt(v9672) & 255);
    v5129 = index$$44 < length$$14
  }
  return outArray
}
function Resampler(fromSampleRate, toSampleRate, channels$$1, outputBufferSize, noReturn) {
  this.fromSampleRate = fromSampleRate;
  this.toSampleRate = toSampleRate;
  this.channels = channels$$1 | 0;
  this.outputBufferSize = outputBufferSize;
  this.noReturn = !!noReturn;
  this.initialize();
  return
}
function XAudioServer(channels$$2, sampleRate$$1, minBufferSize, maxBufferSize, underRunCallback, volume) {
  function v14() {
    return
  }
  var v5131;
  if(channels$$2 == 2) {
    v5131 = 2
  }else {
    v5131 = 1
  }
  this.audioChannels = v5131;
  webAudioMono = this.audioChannels == 1;
  var v5133;
  var v9673 = sampleRate$$1 > 0;
  if(v9673) {
    v9673 = sampleRate$$1 <= 16777215
  }
  if(v9673) {
    v5133 = sampleRate$$1
  }else {
    v5133 = 44100
  }
  XAudioJSSampleRate = v5133;
  var v5134;
  var v9674 = minBufferSize >= samplesPerCallback << 1;
  if(v9674) {
    v9674 = minBufferSize < maxBufferSize
  }
  if(v9674) {
    var v9675;
    if(webAudioMono) {
      v9675 = 4294967295
    }else {
      v9675 = 4294967294
    }
    v5134 = minBufferSize & v9675
  }else {
    v5134 = samplesPerCallback << 1
  }
  webAudioMinBufferSize = v5134;
  var v5135;
  if(Math.floor(maxBufferSize) > webAudioMinBufferSize + this.audioChannels) {
    var v9678;
    if(webAudioMono) {
      v9678 = 4294967295
    }else {
      v9678 = 4294967294
    }
    v5135 = maxBufferSize & v9678
  }else {
    v5135 = minBufferSize << 1
  }
  webAudioMaxBufferSize = v5135;
  var v5136;
  if(typeof underRunCallback == "function") {
    v5136 = underRunCallback
  }else {
    v5136 = v14
  }
  this.underRunCallback = v5136;
  var v5137;
  var v9680 = volume >= 0;
  if(v9680) {
    v9680 = volume <= 1
  }
  if(v9680) {
    v5137 = volume
  }else {
    v5137 = 1
  }
  XAudioJSVolume = v5137;
  this.audioType = -1;
  this.mozAudioTail = [];
  this.audioHandleMoz = null;
  this.audioHandleFlash = null;
  this.flashInitialized = false;
  this.mozAudioFound = false;
  this.initializeAudio();
  return
}
function getFloat32(size$$4) {
  try {
    return new Float32Array(size$$4)
  }catch(error$$11) {
    return new Array(size$$4)
  }
  return
}
function getFloat32Flat(size$$5) {
  try {
    var newBuffer = new Float32Array(size$$5)
  }catch(error$$12) {
    newBuffer = new Array(size$$5);
    var audioSampleIndice = 0;
    var v5138 = (audioSampleIndice = audioSampleIndice + 1) < size$$5;
    do {
      newBuffer[audioSampleIndice] = 0;
      v5138 = (audioSampleIndice = audioSampleIndice + 1) < size$$5
    }while(v5138)
  }
  return newBuffer
}
function audioOutputFlashEvent() {
  resampleRefill();
  return outputConvert()
}
function generateFlashStereoString() {
  var copyBinaryStringLeft = "";
  var copyBinaryStringRight = "";
  var index$$47 = 0;
  var v8346 = index$$47 < samplesPerCallback;
  if(v8346) {
    v8346 = resampleBufferStart != resampleBufferEnd
  }
  var v5140 = v8346;
  for(;v5140;) {
    var v8347 = copyBinaryStringLeft;
    var v10769 = resampleBufferStart;
    resampleBufferStart = resampleBufferStart + 1;
    introspect(JAM.policy.p1) {
      var v10766 = resampled[v10769]
    }
    copyBinaryStringLeft = v8347 + String.fromCharCode((Math.min(Math.max(v10766 + 1, 0), 2) * 16383 | 0) + 12288);
    var v8349 = copyBinaryStringRight;
    var v10770 = resampleBufferStart;
    resampleBufferStart = resampleBufferStart + 1;
    introspect(JAM.policy.p1) {
      var v10767 = resampled[v10770]
    }
    copyBinaryStringRight = v8349 + String.fromCharCode((Math.min(Math.max(v10767 + 1, 0), 2) * 16383 | 0) + 12288);
    if(resampleBufferStart == resampleBufferSize) {
      resampleBufferStart = 0
    }
    index$$47 = index$$47 + 1;
    var v8351 = index$$47 < samplesPerCallback;
    if(v8351) {
      v8351 = resampleBufferStart != resampleBufferEnd
    }
    v5140 = v8351
  }
  return copyBinaryStringLeft + copyBinaryStringRight
}
function generateFlashMonoString() {
  var copyBinaryString = "";
  var index$$48 = 0;
  var v8352 = index$$48 < samplesPerCallback;
  if(v8352) {
    v8352 = resampleBufferStart != resampleBufferEnd
  }
  var v5142 = v8352;
  for(;v5142;) {
    var v8353 = copyBinaryString;
    var v10771 = resampleBufferStart;
    resampleBufferStart = resampleBufferStart + 1;
    introspect(JAM.policy.p1) {
      var v10768 = resampled[v10771]
    }
    copyBinaryString = v8353 + String.fromCharCode((Math.min(Math.max(v10768 + 1, 0), 2) * 16383 | 0) + 12288);
    if(resampleBufferStart == resampleBufferSize) {
      resampleBufferStart = 0
    }
    index$$48 = index$$48 + 1;
    var v8355 = index$$48 < samplesPerCallback;
    if(v8355) {
      v8355 = resampleBufferStart != resampleBufferEnd
    }
    v5142 = v8355
  }
  return copyBinaryString
}
function audioOutputEvent(event$$3) {
  var index$$49 = 0;
  var v5143 = event$$3.outputBuffer;
  var buffer1 = JAM.call(v5143.getChannelData, v5143, [0]);
  var v5144 = event$$3.outputBuffer;
  var buffer2 = JAM.call(v5144.getChannelData, v5144, [1]);
  resampleRefill();
  if(!webAudioMono) {
    var v8356 = index$$49 < samplesPerCallback;
    if(v8356) {
      v8356 = resampleBufferStart != resampleBufferEnd
    }
    var v5148 = v8356;
    for(;v5148;) {
      var v8357 = resampleBufferStart;
      resampleBufferStart = resampleBufferStart + 1;
      introspect(JAM.policy.p1) {
        var v5145 = resampled[v8357]
      }
      buffer1[index$$49] = v5145 * XAudioJSVolume;
      var v5146 = index$$49;
      index$$49 = index$$49 + 1;
      var v9684 = resampleBufferStart;
      resampleBufferStart = resampleBufferStart + 1;
      introspect(JAM.policy.p1) {
        var v8358 = resampled[v9684]
      }
      buffer2[v5146] = v8358 * XAudioJSVolume;
      if(resampleBufferStart == resampleBufferSize) {
        resampleBufferStart = 0
      }
      var v8359 = index$$49 < samplesPerCallback;
      if(v8359) {
        v8359 = resampleBufferStart != resampleBufferEnd
      }
      v5148 = v8359
    }
  }else {
    var v8360 = index$$49 < samplesPerCallback;
    if(v8360) {
      v8360 = resampleBufferStart != resampleBufferEnd
    }
    var v5151 = v8360;
    for(;v5151;) {
      var v8361 = resampleBufferStart;
      resampleBufferStart = resampleBufferStart + 1;
      introspect(JAM.policy.p1) {
        var v5149 = resampled[v8361]
      }
      buffer2[index$$49] = buffer1[index$$49] = v5149 * XAudioJSVolume;
      index$$49 = index$$49 + 1;
      if(resampleBufferStart == resampleBufferSize) {
        resampleBufferStart = 0
      }
      var v8362 = index$$49 < samplesPerCallback;
      if(v8362) {
        v8362 = resampleBufferStart != resampleBufferEnd
      }
      v5151 = v8362
    }
  }
  var v5153 = index$$49 < samplesPerCallback;
  for(;v5153;) {
    buffer2[index$$49] = buffer1[index$$49] = 0;
    index$$49 = index$$49 + 1;
    v5153 = index$$49 < samplesPerCallback
  }
  return
}
function resampleRefill() {
  if(audioBufferSize > 0) {
    var resampleLength = JAM.call(resampleControl.resampler, resampleControl, [getBufferSamples()]);
    var resampledResult = resampleControl.outputBuffer;
    var index2 = 0;
    var v5159 = index2 < resampleLength;
    for(;v5159;) {
      var v5155 = resampleBufferEnd;
      resampleBufferEnd = resampleBufferEnd + 1;
      JAM.set(resampled, v5155, resampledResult[index2]);
      if(resampleBufferEnd == resampleBufferSize) {
        resampleBufferEnd = 0
      }
      if(resampleBufferStart == resampleBufferEnd) {
        resampleBufferStart = resampleBufferStart + 1;
        if(resampleBufferStart == resampleBufferSize) {
          resampleBufferStart = 0
        }
      }
      index2 = index2 + 1;
      v5159 = index2 < resampleLength
    }
    audioBufferSize = 0
  }
  return
}
function resampledSamplesLeft() {
  var v9685;
  if(resampleBufferStart <= resampleBufferEnd) {
    v9685 = 0
  }else {
    v9685 = resampleBufferSize
  }
  return v9685 + resampleBufferEnd - resampleBufferStart
}
function getBufferSamples() {
  try {
    return audioContextSampleBuffer.subarray(0, audioBufferSize)
  }catch(error$$13) {
    try {
      audioContextSampleBuffer.length = audioBufferSize;
      return audioContextSampleBuffer
    }catch(error$$14) {
      return audioContextSampleBuffer.slice(0, audioBufferSize)
    }
  }
  return
}
function resetCallbackAPIAudioBuffer(APISampleRate, bufferAlloc) {
  audioContextSampleBuffer = getFloat32(webAudioMaxBufferSize);
  audioBufferSize = webAudioMaxBufferSize;
  resampleBufferStart = 0;
  resampleBufferEnd = 0;
  resampleBufferSize = Math.max(webAudioMaxBufferSize * Math.ceil(XAudioJSSampleRate / APISampleRate), samplesPerCallback) << 1;
  if(webAudioMono) {
    resampled = getFloat32Flat(resampleBufferSize);
    resampleControl = new Resampler(XAudioJSSampleRate, APISampleRate, 1, resampleBufferSize, true);
    outputConvert = generateFlashMonoString
  }else {
    resampleBufferSize = resampleBufferSize << 1;
    resampled = getFloat32Flat(resampleBufferSize);
    resampleControl = new Resampler(XAudioJSSampleRate, APISampleRate, 2, resampleBufferSize, true);
    outputConvert = generateFlashStereoString
  }
  return
}
function Resize(widthOriginal, heightOriginal, targetWidth, targetHeight, blendAlpha, interpolationPass) {
  var v8365 = parseInt(widthOriginal);
  if(!v8365) {
    v8365 = 0
  }
  var v10966 = Math.abs(v8365);
  this.widthOriginal = v10966;
  var v8366 = parseInt(heightOriginal);
  if(!v8366) {
    v8366 = 0
  }
  var v10967 = Math.abs(v8366);
  this.heightOriginal = v10967;
  var v8367 = parseInt(targetWidth);
  if(!v8367) {
    v8367 = 0
  }
  var v10968 = Math.abs(v8367);
  this.targetWidth = v10968;
  var v8368 = parseInt(targetHeight);
  if(!v8368) {
    v8368 = 0
  }
  var v10969 = Math.abs(v8368);
  this.targetHeight = v10969;
  var v5167;
  if(!!blendAlpha) {
    v5167 = 4
  }else {
    v5167 = 3
  }
  this.colorChannels = v5167;
  this.interpolationPass = !!interpolationPass;
  this.targetWidthMultipliedByChannels = this.targetWidth * this.colorChannels;
  this.originalWidthMultipliedByChannels = this.widthOriginal * this.colorChannels;
  this.originalHeightMultipliedByChannels = this.heightOriginal * this.colorChannels;
  this.widthPassResultSize = this.targetWidthMultipliedByChannels * this.heightOriginal;
  this.finalResultSize = this.targetWidthMultipliedByChannels * this.targetHeight;
  this.initialize();
  return
}
function GameBoyCore(canvas, ROMImage) {
  function v15(parentObj) {
    return
  }
  this.canvas = canvas;
  this.drawContext = null;
  this.ROMImage = ROMImage;
  this.registerA = 1;
  this.FZero = true;
  this.FSubtract = false;
  this.FHalfCarry = true;
  this.FCarry = true;
  this.registerB = 0;
  this.registerC = 19;
  this.registerD = 0;
  this.registerE = 216;
  this.registersHL = 333;
  this.stackPointer = 65534;
  this.programCounter = 256;
  this.CPUCyclesTotal = 0;
  this.CPUCyclesTotalBase = 0;
  this.CPUCyclesTotalCurrent = 0;
  this.CPUCyclesTotalRoundoff = 0;
  this.baseCPUCyclesPerIteration = 0;
  this.remainingClocks = 0;
  this.inBootstrap = true;
  this.usedBootROM = false;
  this.usedGBCBootROM = false;
  this.halt = false;
  this.skipPCIncrement = false;
  this.stopEmulator = 3;
  this.IME = true;
  this.IRQLineMatched = 0;
  this.interruptsRequested = 0;
  this.interruptsEnabled = 0;
  this.hdmaRunning = false;
  this.CPUTicks = 0;
  this.doubleSpeedShifter = 0;
  this.JoyPad = 255;
  this.CPUStopped = false;
  this.memoryReader = [];
  this.memoryWriter = [];
  this.memoryHighReader = [];
  this.memoryHighWriter = [];
  this.ROM = [];
  this.memory = [];
  this.MBCRam = [];
  this.VRAM = [];
  this.GBCMemory = [];
  this.MBC1Mode = false;
  this.MBCRAMBanksEnabled = false;
  this.currMBCRAMBank = 0;
  this.currMBCRAMBankPosition = -40960;
  this.cGBC = false;
  this.gbcRamBank = 1;
  this.gbcRamBankPosition = -53248;
  this.gbcRamBankPositionECHO = -61440;
  this.RAMBanks = [0, 1, 2, 4, 16];
  this.ROMBank1offs = 0;
  this.currentROMBank = 0;
  this.cartridgeType = 0;
  this.name = "";
  this.gameCode = "";
  this.fromSaveState = false;
  this.savedStateFileName = "";
  this.STATTracker = 0;
  this.modeSTAT = 0;
  this.spriteCount = 252;
  this.LYCMatchTriggerSTAT = false;
  this.mode2TriggerSTAT = false;
  this.mode1TriggerSTAT = false;
  this.mode0TriggerSTAT = false;
  this.LCDisOn = false;
  this.LINECONTROL = [];
  this.DISPLAYOFFCONTROL = [v15];
  this.LCDCONTROL = null;
  this.initializeLCDController();
  this.RTCisLatched = false;
  this.latchedSeconds = 0;
  this.latchedMinutes = 0;
  this.latchedHours = 0;
  this.latchedLDays = 0;
  this.latchedHDays = 0;
  this.RTCSeconds = 0;
  this.RTCMinutes = 0;
  this.RTCHours = 0;
  this.RTCDays = 0;
  this.RTCDayOverFlow = false;
  this.RTCHALT = false;
  this.highX = 127;
  this.lowX = 127;
  this.highY = 127;
  this.lowY = 127;
  this.audioHandle = null;
  this.numSamplesTotal = 0;
  this.sampleSize = 0;
  this.dutyLookup = [[false, false, false, false, false, false, false, true], [true, false, false, false, false, false, false, true], [true, false, false, false, false, true, true, true], [false, true, true, true, true, true, true, false]];
  this.currentBuffer = [];
  this.bufferContainAmount = 0;
  this.LSFR15Table = null;
  this.LSFR7Table = null;
  this.noiseSampleTable = null;
  this.initializeAudioStartState();
  this.soundMasterEnabled = false;
  this.channel3PCM = null;
  this.VinLeftChannelMasterVolume = 8;
  this.VinRightChannelMasterVolume = 8;
  this.leftChannel1 = false;
  this.leftChannel2 = false;
  this.leftChannel3 = false;
  this.leftChannel4 = false;
  this.rightChannel1 = false;
  this.rightChannel2 = false;
  this.rightChannel3 = false;
  this.rightChannel4 = false;
  this.channel1currentSampleLeft = 0;
  this.channel1currentSampleRight = 0;
  this.channel2currentSampleLeft = 0;
  this.channel2currentSampleRight = 0;
  this.channel3currentSampleLeft = 0;
  this.channel3currentSampleRight = 0;
  this.channel4currentSampleLeft = 0;
  this.channel4currentSampleRight = 0;
  this.channel1currentSampleLeftSecondary = 0;
  this.channel1currentSampleRightSecondary = 0;
  this.channel2currentSampleLeftSecondary = 0;
  this.channel2currentSampleRightSecondary = 0;
  this.channel3currentSampleLeftSecondary = 0;
  this.channel3currentSampleRightSecondary = 0;
  this.channel4currentSampleLeftSecondary = 0;
  this.channel4currentSampleRightSecondary = 0;
  this.channel1currentSampleLeftTrimary = 0;
  this.channel1currentSampleRightTrimary = 0;
  this.channel2currentSampleLeftTrimary = 0;
  this.channel2currentSampleRightTrimary = 0;
  this.mixerOutputCache = 0;
  this.initializeTiming();
  this.machineOut = 0;
  this.audioTicks = 0;
  this.audioIndex = 0;
  this.rollover = 0;
  this.emulatorTicks = 0;
  this.DIVTicks = 56;
  this.LCDTicks = 60;
  this.timerTicks = 0;
  this.TIMAEnabled = false;
  this.TACClocker = 1024;
  this.serialTimer = 0;
  this.serialShiftTimer = 0;
  this.serialShiftTimerAllocated = 0;
  this.IRQEnableDelay = 0;
  var dateVar = new_Date();
  var v10970 = dateVar.getTime();
  this.lastIteration = v10970;
  dateVar = new_Date();
  var v10971 = dateVar.getTime();
  this.firstIteration = v10971;
  this.iterations = 0;
  this.actualScanLine = 0;
  this.lastUnrenderedLine = 0;
  this.queuedScanLines = 0;
  this.totalLinesPassed = 0;
  this.haltPostClocks = 0;
  this.cMBC1 = false;
  this.cMBC2 = false;
  this.cMBC3 = false;
  this.cMBC5 = false;
  this.cMBC7 = false;
  this.cSRAM = false;
  this.cMMMO1 = false;
  this.cRUMBLE = false;
  this.cCamera = false;
  this.cTAMA5 = false;
  this.cHuC3 = false;
  this.cHuC1 = false;
  this.cTIMER = false;
  this.ROMBanks = [2, 4, 8, 16, 32, 64, 128, 256, 512];
  this.ROMBanks[82] = 72;
  this.ROMBanks[83] = 80;
  this.ROMBanks[84] = 96;
  this.numRAMBanks = 0;
  this.currVRAMBank = 0;
  this.backgroundX = 0;
  this.backgroundY = 0;
  this.gfxWindowDisplay = false;
  this.gfxSpriteShow = false;
  this.gfxSpriteNormalHeight = true;
  this.bgEnabled = true;
  this.BGPriorityEnabled = true;
  this.gfxWindowCHRBankPosition = 0;
  this.gfxBackgroundCHRBankPosition = 0;
  this.gfxBackgroundBankOffset = 128;
  this.windowY = 0;
  this.windowX = 0;
  this.drewBlank = 0;
  this.drewFrame = false;
  this.midScanlineOffset = -1;
  this.pixelEnd = 0;
  this.currentX = 0;
  this.BGCHRBank1 = null;
  this.BGCHRBank2 = null;
  this.BGCHRCurrentBank = null;
  this.tileCache = null;
  this.colors = [15728606, 11392916, 5411443, 1586242];
  this.OBJPalette = null;
  this.BGPalette = null;
  this.gbcOBJRawPalette = null;
  this.gbcBGRawPalette = null;
  this.gbOBJPalette = null;
  this.gbBGPalette = null;
  this.gbcOBJPalette = null;
  this.gbcBGPalette = null;
  this.gbBGColorizedPalette = null;
  this.gbOBJColorizedPalette = null;
  this.cachedBGPaletteConversion = null;
  this.cachedOBJPaletteConversion = null;
  this.updateGBBGPalette = this.updateGBRegularBGPalette;
  this.updateGBOBJPalette = this.updateGBRegularOBJPalette;
  this.colorizedGBPalettes = false;
  this.BGLayerRender = null;
  this.WindowLayerRender = null;
  this.SpriteLayerRender = null;
  this.frameBuffer = [];
  this.swizzledFrame = null;
  this.canvasBuffer = null;
  this.pixelStart = 0;
  this.onscreenWidth = this.offscreenWidth = 160;
  this.onscreenHeight = this.offScreenheight = 144;
  this.offscreenRGBCount = this.onscreenWidth * this.onscreenHeight * 4;
  this.intializeWhiteNoise();
  return
}
function start(canvas$$1, ROM) {
  clearLastEmulation();
  autoSave();
  gameboy = new GameBoyCore(canvas$$1, ROM);
  gameboy.openMBC = openSRAM;
  gameboy.openRTC = openRTC;
  gameboy.start();
  run();
  return
}
function run() {
  if(GameBoyEmulatorInitialized()) {
    if(!GameBoyEmulatorPlaying()) {
      gameboy.stopEmulator = gameboy.stopEmulator & 1;
      cout("Starting the iterator.", 0);
      var dateObj$$1 = new_Date();
      var v5187 = gameboy;
      var v10972 = dateObj$$1.getTime();
      v5187.firstIteration = v10972;
      gameboy.iterations = 0
    }else {
      cout("The GameBoy core is already running.", 1)
    }
  }else {
    cout("GameBoy core cannot run while it has not been initialized.", 1)
  }
  return
}
function pause() {
  if(GameBoyEmulatorInitialized()) {
    if(GameBoyEmulatorPlaying()) {
      clearLastEmulation()
    }else {
      cout("GameBoy core has already been paused.", 1)
    }
  }else {
    cout("GameBoy core cannot be paused while it has not been initialized.", 1)
  }
  return
}
function clearLastEmulation() {
  var v8374 = GameBoyEmulatorInitialized();
  if(v8374) {
    v8374 = GameBoyEmulatorPlaying()
  }
  if(v8374) {
    clearInterval(gbRunInterval);
    gameboy.stopEmulator = gameboy.stopEmulator | 2;
    cout("The previous emulation has been cleared.", 0)
  }else {
    cout("No previous emulation was found to be cleared.", 0)
  }
  return
}
function save() {
  if(GameBoyEmulatorInitialized()) {
    try {
      var state_suffix = 0;
      var v5193 = JAM.call(findValue, null, ["FREEZE_" + gameboy.name + "_" + state_suffix]) != null;
      for(;v5193;) {
        state_suffix = state_suffix + 1;
        v5193 = JAM.call(findValue, null, ["FREEZE_" + gameboy.name + "_" + state_suffix]) != null
      }
      JAM.call(setValue, null, ["FREEZE_" + gameboy.name + "_" + state_suffix, gameboy.saveState()]);
      cout("Saved the current state as: FREEZE_" + gameboy.name + "_" + state_suffix, 0)
    }catch(error$$28) {
      cout('Could not save the current emulation state("' + error$$28.message + '").', 2)
    }
  }else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1)
  }
  return
}
function saveSRAM() {
  if(GameBoyEmulatorInitialized()) {
    if(gameboy.cBATT) {
      try {
        var sram = gameboy.saveSRAMState();
        if(sram.length > 0) {
          cout("Saving the SRAM...", 0);
          if(JAM.call(findValue, null, ["SRAM_" + gameboy.name]) != null) {
            cout("Deleting the old SRAM save due to outdated format.", 0);
            JAM.call(deleteValue, null, ["SRAM_" + gameboy.name])
          }
          JAM.call(setValue, null, ["B64_SRAM_" + gameboy.name, arrayToBase64(sram)])
        }else {
          cout("SRAM could not be saved because it was empty.", 1)
        }
      }catch(error$$29) {
        cout('Could not save the current emulation state("' + error$$29.message + '").', 2)
      }
    }else {
      cout("Cannot save a game that does not have battery backed SRAM specified.", 1)
    }
    saveRTC()
  }else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1)
  }
  return
}
function saveRTC() {
  if(GameBoyEmulatorInitialized()) {
    if(gameboy.cTIMER) {
      try {
        cout("Saving the RTC...", 0);
        JAM.call(setValue, null, ["RTC_" + gameboy.name, gameboy.saveRTCState()])
      }catch(error$$30) {
        cout('Could not save the RTC of the current emulation state("' + error$$30.message + '").', 2)
      }
    }
  }else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1)
  }
  return
}
function autoSave() {
  if(GameBoyEmulatorInitialized()) {
    cout("Automatically saving the SRAM.", 0);
    saveSRAM();
    saveRTC()
  }
  return
}
function openSRAM(filename) {
  try {
    if(JAM.call(findValue, null, ["B64_SRAM_" + filename]) != null) {
      cout("Found a previous SRAM state (Will attempt to load).", 0);
      return base64ToArray(JAM.call(findValue, null, ["B64_SRAM_" + filename]))
    }else {
      if(JAM.call(findValue, null, ["SRAM_" + filename]) != null) {
        cout("Found a previous SRAM state (Will attempt to load).", 0);
        return JAM.call(findValue, null, ["SRAM_" + filename])
      }else {
        cout("Could not find any previous SRAM copy for the current ROM.", 0)
      }
    }
  }catch(error$$31) {
    cout("Could not open the  SRAM of the saved emulation state.", 2)
  }
  return[]
}
function openRTC(filename$$1) {
  try {
    if(JAM.call(findValue, null, ["RTC_" + filename$$1]) != null) {
      cout("Found a previous RTC state (Will attempt to load).", 0);
      return JAM.call(findValue, null, ["RTC_" + filename$$1])
    }else {
      cout("Could not find any previous RTC copy for the current ROM.", 0)
    }
  }catch(error$$32) {
    cout("Could not open the RTC data of the saved emulation state.", 2)
  }
  return[]
}
function openState(filename$$2, canvas$$2) {
  try {
    if(JAM.call(findValue, null, [filename$$2]) != null) {
      try {
        clearLastEmulation();
        cout("Attempting to run a saved emulation state.", 0);
        gameboy = new GameBoyCore(canvas$$2, "");
        gameboy.savedStateFileName = filename$$2;
        JAM.call(gameboy.returnFromState, gameboy, [JAM.call(findValue, null, [filename$$2])]);
        run()
      }catch(error$$33) {
        JAM.call(alert, null, [error$$33.message + " file: " + error$$33.fileName + " line: " + error$$33.lineNumber])
      }
    }else {
      cout("Could not find the save state " + filename$$2 + '".', 2)
    }
  }catch(error$$34) {
    cout("Could not open the saved emulation state.", 2)
  }
  return
}
function import_save(blobData) {
  blobData = decodeBlob(blobData);
  var v8396 = blobData;
  if(v8396) {
    v8396 = blobData.blobs
  }
  if(v8396) {
    if(blobData.blobs.length > 0) {
      var index$$68 = 0;
      var v5232 = index$$68 < blobData.blobs.length;
      for(;v5232;) {
        var v10575 = blobData.blobs;
        introspect(JAM.policy.p1) {
          var v10347 = v10575[index$$68]
        }
        cout('Importing blob "' + v10347.blobID + '"', 0);
        var v9708 = blobData.blobs;
        introspect(JAM.policy.p1) {
          var v8400 = v9708[index$$68]
        }
        if(v8400.blobContent) {
          var v10576 = blobData.blobs;
          introspect(JAM.policy.p1) {
            var v10348 = v10576[index$$68]
          }
          if(v10348.blobID.substring(0, 5) == "SRAM_") {
            var v10349 = blobData.blobs;
            introspect(JAM.policy.p1) {
              var v9710 = v10349[index$$68]
            }
            var v5224 = "B64_" + v9710.blobID;
            var v10350 = blobData.blobs;
            introspect(JAM.policy.p1) {
              var v9711 = v10350[index$$68]
            }
            JAM.call(setValue, null, [v5224, base64(v9711.blobContent)])
          }else {
            var v9712 = blobData.blobs;
            introspect(JAM.policy.p1) {
              var v8404 = v9712[index$$68]
            }
            var v5226 = v8404.blobID;
            var v10351 = blobData.blobs;
            introspect(JAM.policy.p1) {
              var v9713 = v10351[index$$68]
            }
            JAM.call(setValue, null, [v5226, JSON.parse(v9713.blobContent)])
          }
        }else {
          var v9714 = blobData.blobs;
          introspect(JAM.policy.p1) {
            var v8406 = v9714[index$$68]
          }
          if(v8406.blobID) {
            var v10577 = blobData.blobs;
            introspect(JAM.policy.p1) {
              var v10352 = v10577[index$$68]
            }
            cout('Save file imported had blob "' + v10352.blobID + '" with no blob data interpretable.', 2)
          }else {
            cout("Blob chunk information missing completely.", 2)
          }
        }
        index$$68 = index$$68 + 1;
        v5232 = index$$68 < blobData.blobs.length
      }
    }else {
      cout("Could not decode the imported file.", 2)
    }
  }else {
    cout("Could not decode the imported file.", 2)
  }
  return
}
function generateBlob(keyName, encodedData$$1) {
  var saveString = "EMULATOR_DATA";
  var consoleID = "GameBoy";
  var totalLength = saveString.length + 4 + (1 + consoleID.length) + (1 + keyName.length + (4 + encodedData$$1.length));
  saveString = saveString + to_little_endian_dword(totalLength);
  saveString = saveString + to_byte(consoleID.length);
  saveString = saveString + consoleID;
  saveString = saveString + to_byte(keyName.length);
  saveString = saveString + keyName;
  saveString = saveString + to_little_endian_dword(encodedData$$1.length);
  saveString = saveString + encodedData$$1;
  return saveString
}
function generateMultiBlob(blobPairs) {
  var consoleID$$1 = "GameBoy";
  var totalLength$$1 = 13 + 4 + 1 + consoleID$$1.length;
  var saveString$$1 = to_byte(consoleID$$1.length);
  saveString$$1 = saveString$$1 + consoleID$$1;
  var keyName$$1 = "";
  var encodedData$$2 = "";
  var index$$69 = 0;
  var v5242 = index$$69 < blobPairs.length;
  for(;v5242;) {
    introspect(JAM.policy.p1) {
      var v5240 = blobPairs[index$$69]
    }
    keyName$$1 = v5240[0];
    introspect(JAM.policy.p1) {
      var v5241 = blobPairs[index$$69]
    }
    encodedData$$2 = v5241[1];
    saveString$$1 = saveString$$1 + to_byte(keyName$$1.length);
    saveString$$1 = saveString$$1 + keyName$$1;
    saveString$$1 = saveString$$1 + to_little_endian_dword(encodedData$$2.length);
    saveString$$1 = saveString$$1 + encodedData$$2;
    totalLength$$1 = totalLength$$1 + (1 + keyName$$1.length + 4 + encodedData$$2.length);
    index$$69 = index$$69 + 1;
    v5242 = index$$69 < blobPairs.length
  }
  saveString$$1 = "EMULATOR_DATA" + to_little_endian_dword(totalLength$$1) + saveString$$1;
  return saveString$$1
}
function decodeBlob(blobData$$1) {
  var length$$21 = blobData$$1.length;
  var blobProperties = {};
  blobProperties.consoleID = null;
  var blobsCount = -1;
  blobProperties.blobs = [];
  if(length$$21 > 17) {
    if(blobData$$1.substring(0, 13) == "EMULATOR_DATA") {
      length$$21 = Math.min((blobData$$1.charCodeAt(16) & 255) << 24 | (blobData$$1.charCodeAt(15) & 255) << 16 | (blobData$$1.charCodeAt(14) & 255) << 8 | blobData$$1.charCodeAt(13) & 255, length$$21);
      var consoleIDLength = blobData$$1.charCodeAt(17) & 255;
      if(length$$21 > 17 + consoleIDLength) {
        var v5246 = blobProperties;
        var v10973 = blobData$$1.substring(18, 18 + consoleIDLength);
        v5246.consoleID = v10973;
        var blobIDLength = 0;
        var blobLength = 0;
        var index$$70 = 18 + consoleIDLength;
        var v5257 = index$$70 < length$$21;
        for(;v5257;) {
          var v8435 = index$$70;
          index$$70 = index$$70 + 1;
          blobIDLength = blobData$$1.charCodeAt(v8435) & 255;
          if(index$$70 + blobIDLength < length$$21) {
            blobProperties.blobs[blobsCount = blobsCount + 1] = {};
            var v8437 = blobProperties.blobs;
            introspect(JAM.policy.p1) {
              var v5250 = v8437[blobsCount]
            }
            var v10974 = blobData$$1.substring(index$$70, index$$70 + blobIDLength);
            v5250.blobID = v10974;
            index$$70 = index$$70 + blobIDLength;
            if(index$$70 + 4 < length$$21) {
              blobLength = (blobData$$1.charCodeAt(index$$70 + 3) & 255) << 24 | (blobData$$1.charCodeAt(index$$70 + 2) & 255) << 16 | (blobData$$1.charCodeAt(index$$70 + 1) & 255) << 8 | blobData$$1.charCodeAt(index$$70) & 255;
              index$$70 = index$$70 + 4;
              if(index$$70 + blobLength <= length$$21) {
                var v8444 = blobProperties.blobs;
                introspect(JAM.policy.p1) {
                  var v5253 = v8444[blobsCount]
                }
                var v10975 = blobData$$1.substring(index$$70, index$$70 + blobLength);
                v5253.blobContent = v10975;
                index$$70 = index$$70 + blobLength
              }else {
                cout("Blob length check failed, blob determined to be incomplete.", 2);
                break
              }
            }else {
              cout("Blob was incomplete, bailing out.", 2);
              break
            }
          }else {
            cout("Blob was incomplete, bailing out.", 2);
            break
          }
          v5257 = index$$70 < length$$21
        }
      }
    }
  }
  return blobProperties
}
function matchKey(key$$15) {
  var index$$71 = 0;
  var v5262 = index$$71 < settings[3].length;
  for(;v5262;) {
    var v9735 = settings[3];
    introspect(JAM.policy.p1) {
      var v8447 = v9735[index$$71]
    }
    if(v8447 == key$$15) {
      return index$$71
    }
    index$$71 = index$$71 + 1;
    v5262 = index$$71 < settings[3].length
  }
  return-1
}
function GameBoyEmulatorInitialized() {
  var v5263 = typeof gameboy == "object";
  if(v5263) {
    v5263 = gameboy != null
  }
  return v5263
}
function GameBoyEmulatorPlaying() {
  return(gameboy.stopEmulator & 2) == 0
}
function GameBoyKeyDown(e$$7) {
  var v8451 = GameBoyEmulatorInitialized();
  if(v8451) {
    v8451 = GameBoyEmulatorPlaying()
  }
  if(v8451) {
    var keycode = matchKey(e$$7.keyCode);
    var v8452 = keycode >= 0;
    if(v8452) {
      v8452 = keycode < 8
    }
    if(v8452) {
      JAM.call(gameboy.JoyPadEvent, gameboy, [keycode, true]);
      try {
        e$$7.preventDefault()
      }catch(error$$35) {
      }
    }
  }
  return
}
function GameBoyKeyUp(e$$8) {
  var v8453 = GameBoyEmulatorInitialized();
  if(v8453) {
    v8453 = GameBoyEmulatorPlaying()
  }
  if(v8453) {
    var keycode$$1 = matchKey(e$$8.keyCode);
    var v8454 = keycode$$1 >= 0;
    if(v8454) {
      v8454 = keycode$$1 < 8
    }
    if(v8454) {
      JAM.call(gameboy.JoyPadEvent, gameboy, [keycode$$1, false]);
      try {
        e$$8.preventDefault()
      }catch(error$$36) {
      }
    }
  }
  return
}
function GameBoyGyroSignalHandler(e$$9) {
  var v8455 = GameBoyEmulatorInitialized();
  if(v8455) {
    v8455 = GameBoyEmulatorPlaying()
  }
  if(v8455) {
    var v8456 = e$$9.gamma;
    if(!v8456) {
      v8456 = e$$9.beta
    }
    if(v8456) {
      JAM.call(gameboy.GyroEvent, gameboy, [e$$9.gamma * Math.PI / 180, e$$9.beta * Math.PI / 180])
    }else {
      JAM.call(gameboy.GyroEvent, gameboy, [e$$9.x, e$$9.y])
    }
    try {
      e$$9.preventDefault()
    }catch(error$$37) {
    }
  }
  return
}
function initNewCanvas() {
  if(GameBoyEmulatorInitialized()) {
    gameboy.canvas.width = gameboy.canvas.clientWidth;
    gameboy.canvas.height = gameboy.canvas.clientHeight
  }
  return
}
function initNewCanvasSize() {
  if(GameBoyEmulatorInitialized()) {
    if(!settings[12]) {
      var v8462 = gameboy.onscreenWidth != 160;
      if(!v8462) {
        v8462 = gameboy.onscreenHeight != 144
      }
      if(v8462) {
        gameboy.initLCD()
      }
    }else {
      var v8463 = gameboy.onscreenWidth != gameboy.canvas.clientWidth;
      if(!v8463) {
        v8463 = gameboy.onscreenHeight != gameboy.canvas.clientHeight
      }
      if(v8463) {
        gameboy.initLCD()
      }
    }
  }
  return
}
function ShowBox(name$$33) {
  function v16(entry) {
    if(name$$33.valueOf() === entry.valueOf()) {
      var box1 = document.getElementById("Box-" + name$$33 + "Latency");
      box1.style.visibility = "visible"
    }
    return
  }
  var box = document.getElementById("Box-" + name$$33);
  box.style.visibility = "visible";
  var bar = document.getElementById("progress-bar").style.width = "" + (completed = completed + 1) / benchmarks * 100 + "%";
  latencyBenchmarks.forEach(v16);
  return
}
function AddResult(name$$34, result$$4) {
  console.log(name$$34 + ": " + result$$4);
  var box$$1 = document.getElementById("Result-" + name$$34);
  JAM.set(box$$1, "innerHTML", result$$4);
  return
}
function AddError(name$$35, error$$38) {
  console.log(name$$35 + ": " + error$$38.message);
  if(error$$38 == "TypedArrayUnsupported") {
    AddResult(name$$35, "<b>Unsupported</b>")
  }else {
    if(error$$38 == "PerformanceNowUnsupported") {
      AddResult(name$$35, "<b>Timer error</b>")
    }else {
      AddResult(name$$35, "<b>Error</b>")
    }
  }
  success = false;
  return
}
function AddScore(score$$2) {
  var status = document.getElementById("main-banner");
  if(success) {
    JAM.set(status, "innerHTML", "Octane Score: " + score$$2)
  }else {
    JAM.set(status, "innerHTML", "Octane Score (incomplete): " + score$$2)
  }
  document.getElementById("progress-bar-container").style.visibility = "hidden";
  document.getElementById("bottom-text").style.visibility = "visible";
  document.getElementById("inside-anchor").removeChild(document.getElementById("bar-appendix"));
  document.getElementById("alertbox").style.visibility = "hidden";
  return
}
function Run() {
  JAM.set(document.getElementById("main-banner"), "innerHTML", "Running Octane...");
  JAM.set(document.getElementById("bar-appendix"), "innerHTML", '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>');
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  JAM.call(parent.appendChild, parent, [document.getElementById("inside-anchor")]);
  parent.removeChild(anchor);
  JAM.set(document.getElementById("startup-text"), "innerHTML", "");
  document.getElementById("progress-bar-container").style.visibility = "visible";
  JAM.call(BenchmarkSuite.RunSuites, BenchmarkSuite, [{NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore}, skipBenchmarks]);
  return
}
function CheckCompatibility() {
  var v5306 = typeof Uint8Array != "undefined";
  if(v5306) {
    var v8477 = typeof Float64Array != "undefined";
    if(v8477) {
      v8477 = typeof(new Uint8Array(0)).subarray != "undefined"
    }
    v5306 = v8477
  }
  var hasTypedArrays = v5306;
  if(!hasTypedArrays) {
    console.log("Typed Arrays not supported");
    document.getElementById("alertbox").style.display = "block"
  }
  if(window.document.URL.indexOf("skip_zlib=1") >= 0) {
    skipBenchmarks.push("zlib")
  }
  if(window.document.URL.indexOf("auto=1") >= 0) {
    Run()
  }
  return
}
function Load() {
  JAM.call(setTimeout, null, [CheckCompatibility, 200]);
  return
}
var performance = performance || {};
var v5311 = performance;
var v10976 = v17();
v5311.now = v10976;
BenchmarkResult.prototype.valueOf = v18;
BenchmarkSuite.suites = [];
BenchmarkSuite.version = "9";
BenchmarkSuite.config = {doWarmup:undefined, doDeterministic:undefined};
alert = v19;
BenchmarkSuite.ResetRNG = v22;
BenchmarkSuite.RunSuites = v23;
BenchmarkSuite.CountBenchmarks = v24;
BenchmarkSuite.GeometricMean = v25;
BenchmarkSuite.GeometricMeanTime = v26;
BenchmarkSuite.GeometricMeanLatency = v27;
BenchmarkSuite.FormatScore = v28;
BenchmarkSuite.prototype.NotifyStep = v29;
BenchmarkSuite.prototype.NotifyResult = v30;
BenchmarkSuite.prototype.NotifySkipped = v31;
BenchmarkSuite.prototype.NotifyError = v32;
BenchmarkSuite.prototype.RunSingleBenchmark = v33;
BenchmarkSuite.prototype.RunStep = v34;
var GameboyBenchmark = new BenchmarkSuite("Gameboy", [26288412], [new Benchmark("Gameboy", false, false, 20, runGameboy, setupGameboy, tearDownGameboy, null, 4)]);
var decoded_gameboy_rom = null;
var expectedGameboyStateStr = '{"registerA":160,"registerB":255,"registerC":255,"registerE":11,' + '"registersHL":51600,"programCounter":24309,"stackPointer":49706,' + '"sumROM":10171578,"sumMemory":3435856,"sumMBCRam":234598,"sumVRam":0}';
var GameBoyWindow = {};
var GameBoyAudioNode = {bufferSize:0, onaudioprocess:null, connect:v35, run:v36};
var mock_date_time_counter = 0;
var toBase64 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", "="];
var fromBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
Resampler.prototype.initialize = v37;
Resampler.prototype.compileInterpolationFunction = v38;
Resampler.prototype.bypassResampler = v39;
Resampler.prototype.bufferSlice = v40;
Resampler.prototype.initializeBuffers = v41;
XAudioServer.prototype.MOZWriteAudio = v42;
XAudioServer.prototype.MOZWriteAudioNoCallback = v43;
XAudioServer.prototype.callbackBasedWriteAudio = v44;
XAudioServer.prototype.callbackBasedWriteAudioNoCallback = v45;
XAudioServer.prototype.writeAudio = v46;
XAudioServer.prototype.writeAudioNoCallback = v47;
XAudioServer.prototype.remainingBuffer = v48;
XAudioServer.prototype.MOZExecuteCallback = v49;
XAudioServer.prototype.callbackBasedExecuteCallback = v50;
XAudioServer.prototype.executeCallback = v51;
XAudioServer.prototype.initializeAudio = v52;
XAudioServer.prototype.preInitializeMozAudio = v53;
XAudioServer.prototype.initializeMozAudio = v54;
XAudioServer.prototype.initializeWebAudio = v55;
XAudioServer.prototype.initializeFlashAudio = v57;
XAudioServer.prototype.changeVolume = v58;
XAudioServer.prototype.writeMozAudio = v59;
XAudioServer.prototype.checkFlashInit = v60;
var samplesPerCallback = 2048;
var outputConvert = null;
var audioContextHandle = null;
var audioNode = null;
var audioSource = null;
var launchedContext = false;
var audioContextSampleBuffer = [];
var resampled = [];
var webAudioMinBufferSize = 15E3;
var webAudioMaxBufferSize = 25E3;
var webAudioActualSampleRate = 44100;
var XAudioJSSampleRate = 0;
var webAudioMono = false;
var XAudioJSVolume = 1;
var resampleControl = null;
var audioBufferSize = 0;
var resampleBufferStart = 0;
var resampleBufferEnd = 0;
var resampleBufferSize = 2;
v61();
Resize.prototype.initialize = v62;
Resize.prototype.resizeWidthRGB = v63;
Resize.prototype.resizeWidthInterpolatedRGB = v64;
Resize.prototype.resizeWidthRGBA = v65;
Resize.prototype.resizeWidthInterpolatedRGBA = v66;
Resize.prototype.resizeHeightRGB = v67;
Resize.prototype.resizeHeightInterpolated = v68;
Resize.prototype.resizeHeightRGBA = v69;
Resize.prototype.resizeHeightInterpolatedRGBA = v70;
Resize.prototype.resize = v71;
Resize.prototype.bypassResizer = v72;
Resize.prototype.initializeFirstPassBuffers = v73;
Resize.prototype.initializeSecondPassBuffers = v74;
Resize.prototype.generateFloatBuffer = v75;
Resize.prototype.generateUint8Buffer = v76;
Resize.prototype.checkForOperaMathBug = v77;
GameBoyCore.prototype.GBBOOTROM = [];
GameBoyCore.prototype.GBCBOOTROM = [];
GameBoyCore.prototype.ffxxDump = [15, 0, 124, 255, 0, 0, 0, 248, 255, 255, 255, 255, 255, 255, 255, 1, 128, 191, 243, 255, 191, 255, 63, 0, 255, 191, 127, 255, 159, 255, 191, 255, 255, 0, 0, 191, 119, 243, 241, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 145, 128, 0, 0, 0, 0, 0, 252, 0, 0, 0, 0, 255, 126, 255, 254, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 
192, 255, 193, 0, 254, 255, 255, 255, 248, 255, 0, 0, 0, 143, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 206, 237, 102, 102, 204, 13, 0, 11, 3, 115, 0, 131, 0, 12, 0, 13, 0, 8, 17, 31, 136, 137, 0, 14, 220, 204, 110, 230, 221, 221, 217, 153, 187, 187, 103, 99, 110, 14, 236, 204, 221, 220, 153, 159, 187, 185, 51, 62, 69, 236, 82, 250, 8, 183, 7, 93, 1, 253, 192, 255, 8, 252, 0, 229, 11, 248, 194, 206, 244, 249, 15, 127, 69, 109, 61, 254, 70, 151, 51, 94, 8, 239, 241, 255, 134, 131, 36, 116, 18, 
252, 0, 159, 180, 183, 6, 213, 208, 122, 0, 158, 4, 95, 65, 47, 29, 119, 54, 117, 129, 170, 112, 58, 152, 209, 113, 2, 77, 1, 193, 255, 13, 0, 211, 5, 249, 0, 11, 0];
GameBoyCore.prototype.OPCODE = [v78, v79, v80, v81, v82, v83, v84, v85, v86, v87, v88, v89, v90, v91, v92, v93, v94, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131, v132, v133, v134, v135, v136, v137, v138, v139, v140, v141, v142, v143, v144, v145, v146, v147, v148, v149, v150, v151, v152, v153, v154, v155, v156, v157, v158, v159, 
v160, v161, v162, v163, v164, v165, v166, v167, v168, v169, v170, v171, v172, v173, v174, v175, v176, v177, v178, v179, v180, v181, v182, v183, v184, v185, v186, v187, v188, v189, v190, v191, v192, v193, v194, v195, v196, v197, v198, v199, v200, v201, v202, v203, v204, v205, v206, v207, v208, v209, v210, v211, v212, v213, v214, v215, v216, v217, v218, v219, v220, v221, v222, v223, v224, v225, v226, v227, v228, v229, v230, v231, v232, v233, v234, v235, v236, v237, v238, v239, v240, v241, v242, v243, 
v244, v245, v246, v247, v248, v249, v250, v251, v252, v253, v254, v255, v256, v257, v258, v259, v260, v261, v262, v263, v264, v265, v266, v267, v268, v269, v270, v271, v272, v273, v274, v275, v276, v277, v278, v279, v280, v281, v282, v283, v284, v285, v286, v287, v288, v289, v290, v291, v292, v293, v294, v295, v296, v297, v298, v299, v300, v301, v302, v303, v304, v305, v306, v307, v308, v309, v310, v311, v312, v313, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v326, v327, 
v328, v329, v330, v331, v332, v333];
GameBoyCore.prototype.CBOPCODE = [v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v346, v347, v348, v349, v350, v351, v352, v353, v354, v355, v356, v357, v358, v359, v360, v361, v362, v363, v364, v365, v366, v367, v368, v369, v370, v371, v372, v373, v374, v375, v376, v377, v378, v379, v380, v381, v382, v383, v384, v385, v386, v387, v388, v389, v390, v391, v392, v393, v394, v395, v396, v397, v398, v399, v400, v401, v402, v403, v404, v405, v406, v407, v408, v409, v410, v411, 
v412, v413, v414, v415, v416, v417, v418, v419, v420, v421, v422, v423, v424, v425, v426, v427, v428, v429, v430, v431, v432, v433, v434, v435, v436, v437, v438, v439, v440, v441, v442, v443, v444, v445, v446, v447, v448, v449, v450, v451, v452, v453, v454, v455, v456, v457, v458, v459, v460, v461, v462, v463, v464, v465, v466, v467, v468, v469, v470, v471, v472, v473, v474, v475, v476, v477, v478, v479, v480, v481, v482, v483, v484, v485, v486, v487, v488, v489, v490, v491, v492, v493, v494, v495, 
v496, v497, v498, v499, v500, v501, v502, v503, v504, v505, v506, v507, v508, v509, v510, v511, v512, v513, v514, v515, v516, v517, v518, v519, v520, v521, v522, v523, v524, v525, v526, v527, v528, v529, v530, v531, v532, v533, v534, v535, v536, v537, v538, v539, v540, v541, v542, v543, v544, v545, v546, v547, v548, v549, v550, v551, v552, v553, v554, v555, v556, v557, v558, v559, v560, v561, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v574, v575, v576, v577, v578, v579, 
v580, v581, v582, v583, v584, v585, v586, v587, v588, v589];
GameBoyCore.prototype.TICKTable = [4, 12, 8, 8, 4, 4, 8, 4, 20, 8, 8, 8, 4, 4, 8, 4, 4, 12, 8, 8, 4, 4, 8, 4, 12, 8, 8, 8, 4, 4, 8, 4, 8, 12, 8, 8, 4, 4, 8, 4, 8, 8, 8, 8, 4, 4, 8, 4, 8, 12, 8, 8, 12, 12, 12, 4, 8, 8, 8, 8, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 8, 8, 8, 8, 8, 8, 4, 8, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 
4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 8, 12, 12, 16, 12, 16, 8, 16, 8, 16, 12, 0, 12, 24, 8, 16, 8, 12, 12, 4, 12, 16, 8, 16, 8, 16, 12, 4, 12, 4, 8, 16, 12, 12, 8, 4, 4, 16, 8, 16, 16, 4, 16, 4, 4, 4, 8, 16, 12, 12, 8, 4, 4, 16, 8, 16, 12, 8, 16, 4, 0, 4, 8, 16];
GameBoyCore.prototype.SecondaryTICKTable = [8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 
8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8];
GameBoyCore.prototype.saveSRAMState = v590;
GameBoyCore.prototype.saveRTCState = v591;
GameBoyCore.prototype.saveState = v592;
GameBoyCore.prototype.returnFromState = v593;
GameBoyCore.prototype.returnFromRTCState = v594;
GameBoyCore.prototype.start = v595;
GameBoyCore.prototype.initMemory = v596;
GameBoyCore.prototype.generateCacheArray = v597;
GameBoyCore.prototype.initSkipBootstrap = v598;
GameBoyCore.prototype.initBootstrap = v599;
GameBoyCore.prototype.ROMLoad = v600;
GameBoyCore.prototype.getROMImage = v601;
GameBoyCore.prototype.interpretCartridge = v602;
GameBoyCore.prototype.disableBootROM = v603;
GameBoyCore.prototype.initializeTiming = v604;
GameBoyCore.prototype.setupRAM = v605;
GameBoyCore.prototype.MBCRAMUtilized = v606;
GameBoyCore.prototype.recomputeDimension = v607;
GameBoyCore.prototype.initLCD = v608;
GameBoyCore.prototype.graphicsBlit = v609;
GameBoyCore.prototype.JoyPadEvent = v610;
GameBoyCore.prototype.GyroEvent = v611;
GameBoyCore.prototype.initSound = v612;
GameBoyCore.prototype.changeVolume = v613;
GameBoyCore.prototype.initAudioBuffer = v614;
GameBoyCore.prototype.intializeWhiteNoise = v615;
GameBoyCore.prototype.audioUnderrunAdjustment = v616;
GameBoyCore.prototype.initializeAudioStartState = v617;
GameBoyCore.prototype.outputAudio = v618;
GameBoyCore.prototype.generateAudio = v619;
GameBoyCore.prototype.generateAudioFake = v620;
GameBoyCore.prototype.audioJIT = v621;
GameBoyCore.prototype.audioComputeSequencer = v622;
GameBoyCore.prototype.clockAudioLength = v623;
GameBoyCore.prototype.clockAudioSweep = v624;
GameBoyCore.prototype.runAudioSweep = v625;
GameBoyCore.prototype.clockAudioEnvelope = v626;
GameBoyCore.prototype.computeAudioChannels = v627;
GameBoyCore.prototype.channel1EnableCheck = v628;
GameBoyCore.prototype.channel1VolumeEnableCheck = v629;
GameBoyCore.prototype.channel1OutputLevelCache = v630;
GameBoyCore.prototype.channel1OutputLevelSecondaryCache = v631;
GameBoyCore.prototype.channel1OutputLevelTrimaryCache = v632;
GameBoyCore.prototype.channel2EnableCheck = v633;
GameBoyCore.prototype.channel2VolumeEnableCheck = v634;
GameBoyCore.prototype.channel2OutputLevelCache = v635;
GameBoyCore.prototype.channel2OutputLevelSecondaryCache = v636;
GameBoyCore.prototype.channel2OutputLevelTrimaryCache = v637;
GameBoyCore.prototype.channel3EnableCheck = v638;
GameBoyCore.prototype.channel3OutputLevelCache = v639;
GameBoyCore.prototype.channel3OutputLevelSecondaryCache = v640;
GameBoyCore.prototype.channel4EnableCheck = v641;
GameBoyCore.prototype.channel4VolumeEnableCheck = v642;
GameBoyCore.prototype.channel4OutputLevelCache = v643;
GameBoyCore.prototype.channel4OutputLevelSecondaryCache = v644;
GameBoyCore.prototype.mixerOutputLevelCache = v645;
GameBoyCore.prototype.channel3UpdateCache = v646;
GameBoyCore.prototype.channel3WriteRAM = v647;
GameBoyCore.prototype.channel4UpdateCache = v648;
GameBoyCore.prototype.run = v649;
GameBoyCore.prototype.executeIteration = v650;
GameBoyCore.prototype.iterationEndRoutine = v651;
GameBoyCore.prototype.handleSTOP = v652;
GameBoyCore.prototype.recalculateIterationClockLimit = v653;
GameBoyCore.prototype.scanLineMode2 = v654;
GameBoyCore.prototype.scanLineMode3 = v655;
GameBoyCore.prototype.scanLineMode0 = v656;
GameBoyCore.prototype.clocksUntilLYCMatch = v657;
GameBoyCore.prototype.clocksUntilMode0 = v658;
GameBoyCore.prototype.updateSpriteCount = v659;
GameBoyCore.prototype.matchLYC = v660;
GameBoyCore.prototype.updateCore = v661;
GameBoyCore.prototype.updateCoreFull = v662;
GameBoyCore.prototype.initializeLCDController = v667;
GameBoyCore.prototype.DisplayShowOff = v668;
GameBoyCore.prototype.executeHDMA = v669;
GameBoyCore.prototype.clockUpdate = v670;
GameBoyCore.prototype.prepareFrame = v671;
GameBoyCore.prototype.requestDraw = v672;
GameBoyCore.prototype.dispatchDraw = v673;
GameBoyCore.prototype.swizzleFrameBuffer = v674;
GameBoyCore.prototype.clearFrameBuffer = v675;
GameBoyCore.prototype.resizeFrameBuffer = v676;
GameBoyCore.prototype.compileResizeFrameBufferFunction = v677;
GameBoyCore.prototype.renderScanLine = v678;
GameBoyCore.prototype.renderMidScanLine = v679;
GameBoyCore.prototype.initializeModeSpecificArrays = v680;
GameBoyCore.prototype.GBCtoGBModeAdjust = v681;
GameBoyCore.prototype.renderPathBuild = v682;
GameBoyCore.prototype.priorityFlaggingPathRebuild = v683;
GameBoyCore.prototype.initializeReferencesFromSaveState = v684;
GameBoyCore.prototype.RGBTint = v685;
GameBoyCore.prototype.getGBCColor = v686;
GameBoyCore.prototype.updateGBRegularBGPalette = v687;
GameBoyCore.prototype.updateGBColorizedBGPalette = v688;
GameBoyCore.prototype.updateGBRegularOBJPalette = v689;
GameBoyCore.prototype.updateGBColorizedOBJPalette = v690;
GameBoyCore.prototype.updateGBCBGPalette = v691;
GameBoyCore.prototype.updateGBCOBJPalette = v692;
GameBoyCore.prototype.BGGBLayerRender = v693;
GameBoyCore.prototype.BGGBCLayerRender = v694;
GameBoyCore.prototype.BGGBCLayerRenderNoPriorityFlagging = v695;
GameBoyCore.prototype.WindowGBLayerRender = v696;
GameBoyCore.prototype.WindowGBCLayerRender = v697;
GameBoyCore.prototype.WindowGBCLayerRenderNoPriorityFlagging = v698;
GameBoyCore.prototype.SpriteGBLayerRender = v699;
GameBoyCore.prototype.findLowestSpriteDrawable = v700;
GameBoyCore.prototype.SpriteGBCLayerRender = v701;
GameBoyCore.prototype.generateGBTileLine = v702;
GameBoyCore.prototype.generateGBCTileLineBank1 = v703;
GameBoyCore.prototype.generateGBCTileBank1 = v704;
GameBoyCore.prototype.generateGBCTileLineBank2 = v705;
GameBoyCore.prototype.generateGBCTileBank2 = v706;
GameBoyCore.prototype.generateGBOAMTileLine = v707;
GameBoyCore.prototype.graphicsJIT = v708;
GameBoyCore.prototype.graphicsJITVBlank = v709;
GameBoyCore.prototype.graphicsJITScanlineGroup = v710;
GameBoyCore.prototype.incrementScanLineQueue = v711;
GameBoyCore.prototype.midScanLineJIT = v712;
GameBoyCore.prototype.launchIRQ = v713;
GameBoyCore.prototype.checkIRQMatching = v714;
GameBoyCore.prototype.calculateHALTPeriod = v715;
GameBoyCore.prototype.memoryRead = v716;
GameBoyCore.prototype.memoryHighRead = v717;
GameBoyCore.prototype.memoryReadJumpCompile = v751;
GameBoyCore.prototype.memoryReadNormal = v752;
GameBoyCore.prototype.memoryHighReadNormal = v753;
GameBoyCore.prototype.memoryReadROM = v754;
GameBoyCore.prototype.memoryReadMBC = v755;
GameBoyCore.prototype.memoryReadMBC7 = v756;
GameBoyCore.prototype.memoryReadMBC3 = v757;
GameBoyCore.prototype.memoryReadGBCMemory = v758;
GameBoyCore.prototype.memoryReadOAM = v759;
GameBoyCore.prototype.memoryReadECHOGBCMemory = v760;
GameBoyCore.prototype.memoryReadECHONormal = v761;
GameBoyCore.prototype.memoryReadBAD = v762;
GameBoyCore.prototype.VRAMDATAReadCGBCPU = v763;
GameBoyCore.prototype.VRAMDATAReadDMGCPU = v764;
GameBoyCore.prototype.VRAMCHRReadCGBCPU = v765;
GameBoyCore.prototype.VRAMCHRReadDMGCPU = v766;
GameBoyCore.prototype.setCurrentMBC1ROMBank = v767;
GameBoyCore.prototype.setCurrentMBC2AND3ROMBank = v768;
GameBoyCore.prototype.setCurrentMBC5ROMBank = v769;
GameBoyCore.prototype.memoryWrite = v770;
GameBoyCore.prototype.memoryHighWrite = v771;
GameBoyCore.prototype.memoryWriteJumpCompile = v772;
GameBoyCore.prototype.MBCWriteEnable = v773;
GameBoyCore.prototype.MBC1WriteROMBank = v774;
GameBoyCore.prototype.MBC1WriteRAMBank = v775;
GameBoyCore.prototype.MBC1WriteType = v776;
GameBoyCore.prototype.MBC2WriteROMBank = v777;
GameBoyCore.prototype.MBC3WriteROMBank = v778;
GameBoyCore.prototype.MBC3WriteRAMBank = v779;
GameBoyCore.prototype.MBC3WriteRTCLatch = v780;
GameBoyCore.prototype.MBC5WriteROMBankLow = v781;
GameBoyCore.prototype.MBC5WriteROMBankHigh = v782;
GameBoyCore.prototype.MBC5WriteRAMBank = v783;
GameBoyCore.prototype.RUMBLEWriteRAMBank = v784;
GameBoyCore.prototype.HuC3WriteRAMBank = v785;
GameBoyCore.prototype.cartIgnoreWrite = v786;
GameBoyCore.prototype.memoryWriteNormal = v787;
GameBoyCore.prototype.memoryHighWriteNormal = v788;
GameBoyCore.prototype.memoryWriteMBCRAM = v789;
GameBoyCore.prototype.memoryWriteMBC3RAM = v790;
GameBoyCore.prototype.memoryWriteGBCRAM = v791;
GameBoyCore.prototype.memoryWriteOAMRAM = v792;
GameBoyCore.prototype.memoryWriteECHOGBCRAM = v793;
GameBoyCore.prototype.memoryWriteECHONormal = v794;
GameBoyCore.prototype.VRAMGBDATAWrite = v795;
GameBoyCore.prototype.VRAMGBDATAUpperWrite = v796;
GameBoyCore.prototype.VRAMGBCDATAWrite = v797;
GameBoyCore.prototype.VRAMGBCHRMAPWrite = v798;
GameBoyCore.prototype.VRAMGBCCHRMAPWrite = v799;
GameBoyCore.prototype.DMAWrite = v800;
GameBoyCore.prototype.registerWriteJumpCompile = v855;
GameBoyCore.prototype.recompileModelSpecificIOWriteHandling = v881;
GameBoyCore.prototype.recompileBootIOWriteHandling = v884;
GameBoyCore.prototype.toTypedArray = v885;
GameBoyCore.prototype.fromTypedArray = v886;
GameBoyCore.prototype.getTypedArray = v887;
GameBoyCore.prototype.checkForOperaMathBug = v888;
var gameboy = null;
var gbRunInterval = null;
var settings = [true, false, false, [39, 37, 38, 40, 88, 90, 16, 13], true, false, 4, 15, 30, false, false, false, false, 16, 1];
var v10993 = "r+BPyZiEZwA+AeBPySAobeEq6gAgKlYj5WJv6SRmZjjhKuXqACDJ/////////////////////////////////xgHZwCYhGcA2fX6/3/1xdXlIRPKNgHN9f/h0cHx6gAg+hLKtyAC8cnwgLcoF/CC7hjgUT6Q4FOv4FLgVOCAPv/gVfHZ8IG3IALx2fBA7gjgQA8PD+YB7gHgT/CC4FHuEOCCPojgU6/gUuBU4IE+/uBV4ID6NMs86jTL8dkKCgoKbWFkZSBieSBhZ28uIGVtYWlsOmdvYnV6b3ZAeWFob28uY29tCnVybDogc3BlY2N5LmRhLnJ1CgoKCv///////wDDSgnO7WZmzA0ACwNzAIMADAANAAgRH4iJAA7czG7m3d3Zmbu7Z2NuDuzM3dyZn7u5Mz5BR08nUyBSRUFMVElNRSCAAAAAAgEDADMBSTQeIUD/y37I8P/1y4fg//BE/pEg+su+8eD/yT7A4EY+KD0g/cnF1eWvEQPK1RITEhMGAyEAyuXFTgYAIWAMCQkqEhMqEhPB4SMFIOrhrwYIzYsU4dHByf////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAgMFBggJCwwOEBETFBYXGBobHR4fISIjJSYnKSorLC0uLzAxMjM0NTY3ODg5Ojo7PDw9PT4+Pj8/Pz9AQEBAQEBAQEBAPz8/Pz4+PT08PDs7Ojk5ODc2NTU0MzIxMC8uLCsqKSgmJSQjISAfHRwaGRcWFRMSEA8NCwoIBwUEAgH//fz6+ff29PPx8O7t6+ro5+Xk4uHg3t3c2tnY19bU09LR0M/OzczLysnJyMfGxsXFxMPDw8LCwcHBwcDAwMDAwMDAwMDBwcHBwsLDw8PExcXGxsfIycnKy8zNzs/Q0dLT1NXX2Nna3N3e4OHi5OXn6Onr7O7v8fL09vf5+vz9AAEECRAZJDFAUWR5kKnE4QAhRGmQueQRQHGk2RBJhMEAQYTJEFmk8UCR5DmQ6UShAGHEKZD5ZNFAsSSZEIkEgQCBBIkQmSSxQNFk+ZApxGEAoUTpkDnkkUDxpFkQyYRBAMGESRDZpHFAEeS5kGlEIQDhxKmQeWRRQDEkGRAJBAEAAQQJEBkkMUBRZHmQqcThACFEaZC55BFAcaTZEEmEwQBBhMkQWaTxQJHkOZDpRKEAYcQpkPlk0UCxJJkQiQSBAIEEiRCZJLFA0WT5kCnEYQChROmQOeSRQPGkWRDJhEEAwYRJENmkcUAR5LmQaUQhAOHEqZB5ZFFAMSQZEAkEAQAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAgICAgIDAwMDBAQEBAUFBQUGBgYHBwcICAkJCQoKCgsLDAwNDQ4ODw8QEBEREhITExQUFRUWFxcYGRkaGhscHB0eHh8gISEiIyQkJSYnJygpKisrLC0uLzAxMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1FSU1RVVldZWltcXV9gYWJkZWZnaWprbG5vcHJzdHZ3eXp7fX5/gYKEhYeIiouNjpCRk5SWl5manJ2foKKkpaepqqytr7GytLa3ubu9vsDCxMXHycvMztDS1NXX2dvd3+Hi5Obo6uzu8PL09vj6/P4A//z38Ofcz8CvnIdwVzwfAN+8l3BHHO/Aj1wn8Ld8PwC/fDfwp1wPwG8cx3AXvF8AnzzXcAecL8BP3Gfwd/x/AH/8d/Bn3E/AL5wHcNc8nwBfvBdwxxxvwA9cp/A3fL8AP3y38Cdcj8DvHEdwl7zfAB88V3CHnK/Az9zn8Pf8/wD//Pfw59zPwK+ch3BXPB8A37yXcEcc78CPXCfwt3w/AL98N/CnXA/AbxzHcBe8XwCfPNdwB5wvwE/cZ/B3/H8Af/x38GfcT8AvnAdw1zyfAF+8F3DHHG/AD1yn8Dd8vwA/fLfwJ1yPwO8cR3CXvN8AHzxXcIecr8DP3Ofw9/z/AP/////////////////////+/v7+/v79/f39/fz8/Pz8+/v7+vr6+vn5+fj4+Pf39/b29fX19PTz8/Ly8fHw8PDv7u7t7ezs6+vq6uno6Ofn5uXl5OPj4uHh4N/e3t3c3Nva2djY19bV1NTT0tHQz8/OzczLysnIx8bFxMPCwcDAvr28u7q5uLe2tbSzsrGwr62sq6qpqKalpKOioJ+enZyamZiWlZSTkZCPjYyLiYiHhYSCgYB+fXt6eHd1dHJxcG5sa2loZmVjYmBfXVtaWFdVU1JQTk1LSUhGREJBPz08Ojg2NDMxLy0rKigmJCIgHx0bGRcVExEPDQsJ" + 
"BwUDAf9/Px8PBwMBgEAgEAgEAgEAAQEBAQEBAQEBAQEA//////////////+AEAcAAQABAAEBAAEBAAEA/wD//wD//wD/AP+AKwcBAAEAAQD/AP8A/wD/AP8A/wABAAEAAQCARgcBAQEBAQD//////////////wABAQEBAQGAYQf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+AwODw+Pz+/xEAwAGxwj4E9cU+BfUKbwMKZ37+gCALI34LAiN+AwILGOsahhIDHBwcHPE9IN7BIRAAGVRdPgX1Cm8DCmcalhIjfAILfQIDAx0dHR3xPSDnIRgAGVRd8T0grskRAcAB6cI+BPUKbwMKZ37+gCALI34LAiN+AwILGOs+CvUahhIcHBwc8T0g9CN8Agt9AgMD8T0g0MkgIEZJTExFRCAgIFBPTFlHT05TIEhFTElDT1BURVJJTiBBQ1RJT04gIQDADgpwLHQsGhPWICI2ACwNIPE+oOoQyngBCQDlYmsJVF3hDMYKR3AsdCwaG9YgIjYALA0g8a/qEcrJ+hDK/jDI1gTqEMpHPqCQ/lA4Aj5QDgAM1ggw+3ghAcARBAB3xggZDSD5+hHKg+oRykf+UDgCPlAOAAzWCDD7eC4td9YIGQ0g+ckh9grzMf/PzVABr+Am4P/gD+BD4EL2SOBFPkDgQT4E4AfN9RM+CuoAAA4HeeBwJqCvIstsKPsNIPIh/v8yy30g+wEKABH1/yFpAc3kE+cCAVYAEQDBIVt2zeQTrwYYIWsOzYsUIYsOzaQUxwGwAxEAgCGhF8XlzeQT4cERAIjN5BMhAJgRAwABYMDHcc9yIwUg+BQdIPHN9RMhuxUGAc2WE82JEz5E4EGv4EU+A+D/+z4B6hLK4E0QAAB4zccTBSD6zZATxwEACFkhAIhzIwt4sSD5IQDHPv9FdyRwJCJ3JXclcCwg8x5/IQCYx3PPNgDL1DYIx3PLlCPLVCjuPoABDxARIAAhIpjF5XfL1HfLlDwZDSD1POEswQUg7D486jPLr+o0yz3qL8s+oOCCPgLqG8vNiRM+ROBBr+BFPgPg/68+ACEXyyI+CiI+IHev6h7L4ITgluodyz4B6h/L6g/D6g3KBlARnAjNxAjNcwsBLAHFzTsLzQAJwQt4sSDzzZATxwEACFkhAIhzIwt4sSD5zfUTeQYQIYMOzYsUPv/qKcsGgBGwCM3ECM2JEwEsAcXNbAzNAAnBC3ixIPOv6hLKzZATPpDgU/PHAbADEQCIIaEXzeQTzfUTIQIWBgHNlhPNiRM+ROBBr+BFPgPg//sY/j4D6gAgzcRGBgMhF8t+gCJ+gDwifoB3zckP+jDLb/oxy2fNtgs+AeCB8IG3IPv6Dcq3KAPNcwHJ+h3LBgARTg2Hb2AZKmZvTgkq4ItfKjzgjD1PKuCNe4eHg0cRAMUqEhwFIPp5h4eBRxEAxCoSHAUg+n3qMMt86jHLyfCL4I7wjOCP8I3gkBEAw9XlzcoQ4dHwpeaAEhwBAwAJ8JA94JAg6CEAxQYPKk+gXxq3IB95yzegXxq3IBYqT6BfGrcgD3nLN6BfGrcgBiwsLBhHLOXNyhDwlrcoKwYB8KXGP0/LfygBBcXwpMY/Vx4AzZMOe8H18KPGP1ceAM2TDsHhJCJwGAzhJPCjxj8i8KTGPyIsJRbDBg/wjj3gjsLiCz4C6gAgw1JhfBjcHwAL7mpIYL9vBgMhF8t+gCJ+gDwifoB3zckPIcsNEQDGzf4MI+U+A+oAICEgy83+DPocy9YIb+ocy82vYAYDESDLIWIOxeXVzcoQ4fCjxhQi8KQiNg8jVF3hIyMjwQUg5M3ERsE+AeoAIAr+/ygiEQDGbyYAKRnlAwoDbyYAKRleI1bhKmZvxc0xHMwAQMEY2T4B4IHwgbcg+8l+PMjl1c3KEAYB8KVPy38oAQXF8KTLf/UoAi88Vx4AzZMO8XsgAi88xn/B9fCjy3/1KAIvPFceAM2TDvF7KAIvPMZ/wdESE3gSE+EjIyMYsFANAgAIDAYCRCgoFANEKAAUE0QAABQSRAAoFAJVKCjsA1UoAOwTVQAA7BJVACjsAAAEBQAAAAEFAAEBAwIGAQEDBwYCAgAHAwICAAcEAwMBAgYDAwEFBgQEAAECBAQAAwIFBQQFBgUFBAcGMgAAzgAAADIAAM4AAAAyAADOKAAAHhEAChEAAAAACu8AHu8AFAAKFAD2FAAPCgAF6AAC4gAQ3gAQ4gD+CgD74g4C3Q4C4QAC4vIC3fIC4AAM4PsM4PsQ4/sJ3fsJ/wABAQICAwMEBAUFAAAGAQYCBgMGBAYFBgAHAQcCBwMHBAcFBwYICQoKCwsMDA0NDgoPDxAQEQoSEhMTERQVFRYVFxUYCBkIGggb/yAAD/AbD/DlD/9//3+XEQAAAGD/f5cRAAAYAP9/lxEAAIB8lxH/f/9/QHz/f18IAADLI8sSeC9HeS9PAyEAAH2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEssoyxkJ0BPJ+hfLJgJvfuCcLzzgnn3GQG9+4Jvgn6/gmOCZ4JrgneChPkDgl/oYy29OfcZAb0bFeOCgeeCizdMQ8KPgpvCk4KnwpeCsr+Cg4KI+QOChzdMQ8KPgp/Ck4KrwpeCtwXkvPOCgr+CheOCizdMQ8KPgmfCk4JzwpeCf8Kbgl/Cp4JrwrOCd8KfgmPCq4JvwreCe+hnLJgJvTn3GQG9GxXjgoHkvPOChr+CizdMQ8KPgpvCk4KnwpeCswXngoHjgoa/gos3TEPCj4KfwpOCq8KXgra/goOChPkDgos3TEPCj4JnwpOCc8KXgn/Cm4JfwqeCa8KzgnfCn4JjwquCb8K3gnskq4KAq4KEq4KLwl1/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8Jhf8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CZX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KPwml/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8Jtf8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CcX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KTwnV/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8J5f8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CfX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KXJ9T6D4EDxyfWv4EDxyfXF1eXHKv7/KFD+FiAaTiMqh4eHVF1vJgApKXgGmAlHelRne11vGNzGYBLPeBIcGNN2ACETyjQ1KPc1yfvFBmR2AAUg+8HJ+3YABSD7yfXF1eUqEhMLeLEg+OHRwfHJxeUBAKAhAMDNAxThwcnF5XEjBSD74cHJxdXlAQCAIZXKzQMU4dHBycXV5a/qFcuwIAwaEyIaEzIEDXjqFcvlxRq+EyAPIxq+IAkTIw0gCMHhGBkrGyMjBSDmecFPBBoTIhoTIiEVyzThDSDS+hXL4dHBydVfzXIUuzD60cnF9cH6FMrLD6mAR/CLkR+AR/AFqOoUysHJ9cXltxcXF/aA4Ggq4GkFIPo+5OBH4cHxyfXF5bcXFxf2gOBqKuBrBSD6PuTgSOBJ4cHxyT4Q4ADwAC/LN+bwRz4g4ADwAC/mD7DqFsvJzyEAgK8GIE8+CCINIPwFIPnHIQCABiBPIg0g/AUg+cnFzQMVSs0eFcHJxc0RFUjNGRVLzSMVwcnFBgHNKxXBycUGABj2xQYDGPHFBgLNKxXByfXlh4eAJsBvceHxyfXlh4cmwG9GI04jXiNW4fHJ9cXV5eCDKjzK8BPWIF/wg835FF95xghPezwY6PXF1eXF1c13FdHBex4FIS3LGNUBKssR8NjNlRURGPzNlRURnP/NlRUR9v/NlRUR//8+LzwZOPwCA3ovV3sv";
var v10992 = v10993 + "XxMZyTAwRlBT/zAwUE5UU/8wMExJTkVT/xYFB1dFTENPTUUgVE8WBQgtUkVBTFRJTUUtFgAJREVNTyBNQURFIEVTUEVDSUFMTFkWAQpGT1IgTENQJzIwMDAgUEFSVFn/FgAAR1JFRVRJTlg6ICAgICAgICAgICAWAAFEU0MsUEFOLFNBQixGQVRBTElUWRYAAkpFRkYgRlJPSFdFSU4sSUNBUlVTFgADRE9YLFFVQU5HLEFCWVNTICAgICAWAAQgICAgICAgICAgICAgICAgICAgIBYABUNSRURJVFM6ICAgICAgICAgICAgFgAGQUxMIEdGWCZDT0RFIEJZIEFHTyAWAAdIRUxJQ09QVEVSIDNEIE1PREVMIBYACENSRUFURUQgQlkgQlVTWSAgICAgFgAJICAgICAgICAgICAgICAgICAgICAWAApVU0VEIFNPRlRXQVJFOiAgICAgIBYAC1JHQkRTLE5PJENBU0gsRkFSICAgFgAMICAgICAgICAgICAgICAgICAgICAWAA1DT05UQUNUOiAgICAgICAgICAgIBYADkdPQlVaT1ZAWUFIT08uQ09NICAgFgAPSFRUUDovL1NQRUNDWS5EQS5SVSAWABAgICAgICAgICAgICAgICAgICAgIBYAEVNFRSBZT1UgT04gR0JERVYyMDAw/wAAAAAAAAAAAAAAAAAAAAAICBwUHBQ4KDgoMDBwUCAgKCh8VHxUKCgAAAAAAAAAABQUPip/QT4qfFT+gnxUKCgICDw0fkL8rP6Cfmr8hHhYJCR+Wn5SPCR4SPyU/LRISBgYPCR+Wjwkflr8tH5KNDQQEDgocFAgIAAAAAAAAAAABAQOChwUOCg4KDgoHBQICBAQOCgcFBwUHBQ4KHBQICAAABQUPio8NH5CPCx8VCgoAAAICBwUPDR+QjwsOCgQEAAAAAAAAAAAEBA4KHBQcFAAAAAAAAB8fP6CfHwAAAAAAAAAAAAAAAAwMHhIeEgwMAQEDgoeEjwkeEjwkOCgQEAYGDwkflr+qv6q/LR4SDAwGBg8JHxUPDQ4KHxs/oJ8fBwcPiJ+Wjw0eEj8vP6CfHwcHD4iflo8NE5K/LR4SDAwJCR+Wn5afFT8tP6CfGwQEBwcPiJ8XPyEfnr8tHhIMDAYGDwkeFj8pP66/LR4SDAwPDx+Qv66XFQ4KHBQcFAgIBwcPiJ+Wjwkflr8tPiIcHAcHD4iflr+sn5KfHT4iHBwAAAAAAgIHBQICBAQOCgQEAAACAgcFAgIEBA4KDgocFAAAAAAHBQ4KHBQcFA4KAAAAAAAADw8fkJ8fPyEeHgAAAAAAAA4KBwUHBQ4KHBQAAAYGDwkflr8tHhoEBA4KBAQHBw+In5a/rL8pPi4+IhwcBwcPiJ+Wv66/oL+uvy0SEg4OHxEflr8pP6a/LT4iHBwHBw+In5a5qbgoP6y/IxwcDAweEh8VH5a7qr+uvyEeHgcHD4ifFx8RHhY/Lz+gnx8HBw+Inxc/IT4uOCg4KBAQBwcPiJ+Wvy8/qL+uvyEeHgkJH5a/rr+gv66/LT8tEhIPDx+QjwsOChwUHhY/IR4eDw8fkI+Og4KXFT8tHhIMDAkJH5afFR+Qv66/LT8tEhIICBwUHBQ4KDkpP66fEQ4OCgofFR+Qv6q/rr8tPy0SEgkJH5a/pr+qv6y7qr8tEhIHBw+In5a7qruqvy0+IhwcBwcPiJ+Wv66/IT4uOCgQEAcHD4iflr+uv6q/LT+inZ2HBw+In5a/LT4iPy0/LRISBwcPiJ8XP6Cfnr8tPiIcHB8fP6CfGw4KHBQcFBwUCAgJCR+Wn5a7qruqvy0eEgwMERE7qruqnxUfFR4SHBQICAkJH5aflr+uv6q/KR8VCgoJCR+WnxUOCg8JH5a/LRISCQkflr8tPy0eEhwUHBQICA8PH5C/LT46Dwsflr8hHh4HBw+IjwsOChwUHhYfEQ4OEBA4KDwkHhIPCQeEg4KBAQ4OHxEPDQcFDgoeGj4iHBwGBg8JH5a7qpERAAAAAAAAAAAAAAAAAAAAAB8fP6CfHx81rdPfJJne5X1MAIvPEevyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxnLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEeRcvT/F5MAIvPIVvJrcBAAA+t7zLEbrLED6/vcsRu8sQPj+8P8sRuj/LEL0/yxG7P8sQeLHIeKHAebcgB3xiV31rX3jLH9L/HD5AlU97lW96lPUwAi88R6/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYV5Fy9P8XkwAi88hGcuQMMxHMsf0pcdPkCUT3qUZ3uV9TACLzxHr8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhHkXL0/xeTACLzyFbyZAwzEcyx/SoRt91r9PfZNvepT1MAIvPEevyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxnLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFeRcvT/F5MAIvPIRnLr/DMRz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v10991 = v10992 + "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v10990 = v10991 + "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3q8MAVUZ3tdb3u90pdAfZNPepRfkTA+V3nLPy88g+CDPn+R5YdPbyYARCkpKQkBkVIJweV41kAXb3nWQB8fH+YPZ/CChGd55gcGB/YITwpP8INHLMl5S1+RV3nLPy88g+CDPneR5YdPbyYARCkpKQkBklsJweV41kAXb3nWQB8fH+YPZ/CChGd55gcGB/YITwpP8INHLMmVT3qUX5EwPld5yz8vPIPggz5/keWHT28mAEQpKSkJAR9BCcHleNZAF2951kAfHx/mD2fwgoRneeYHBgf2CE8KT/CDRyzJeUtfkVd5yz8vPIPggz53keWHT28mAEQpKSkJASBKCcHleNZAF2951kAfHx/mD2fwgoRneeYHBgf2CE8KT/CDRyzJfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6";
var v10989 = v10990 + "LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkyX6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEk";
var v10988 = v10989 + "gEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALMl+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASXJfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARyws";
var v10987 = v10988 + "frF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsyf//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v10986 = v10987 + "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v10985 = v10986 + "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wHRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLR";
var v10984 = v10985 + "e7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6Zf";
var v10983 = v10984 + "eqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyIxDsrh+eEWwxgNIf3Er+oLyuoMyiwsLPCPPcjgj14sGrcqKPDGeeCT+g3Ktygm+gvKPP4DIAI+AeoLyiAH+gzKPOoMyvoMyl8WyvCT1nkSe8bH4JMqTypHKuUmxl+Hh4M8PG8qX1Z5h4eBPDxveE4sh4eARjw8bypmb3y6OAViV31rX3y4OAVgR31pT3q4OAVQR3tZT3iU4JR8h+CV5dXFr+CSzUpifeCS0eHVzUpi0eE+AeCSzUpi8JRfPniTZy5Hr8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdxkBnCA7KMQDC5fCVb8l7vTBVfZNPepRfkTAkV3nLPy88Rz5/kU3Fh09vJgBEKSkJAfdiCcHlJsLwkm94BoDJeUtfkVd5yz8vPEc+d5FNxYdPbyYARCkpCQH4ZwnB5SbC8JJveAaAyZVPepRfkTAkV3nLPy88Rz5/kU3Fh09vJgBEKSkJAalsCcHlJsLwkm94BoDJeUtfkVd5yz8vPEc+d5FNxYdPbyYARCkpCQGqcQnB5SbC8JJveAaAyYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNyXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOT";
var v10982 = v10983 + "gg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDcmDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDMlxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggzJxg+Hh+oawXovpl96obMiei+mX3qgszIkeRgAInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQW/8n/////////////////////////";
var v10981 = v10982 + "//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+qqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINnMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBCqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlUC4XIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7LCwly2XIJGjJycnJydE+t5LI4IXmB8RSRPCFHx8focjlzTJE4XkicCwicCwicCwicCwicCwicCwicCwicCzJ+ABUXWhHeZAfyx1nATNZCfCCMQCv/qAoAzEAvwH/AOlHPgeQVF1HDjOvyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxlHIbRXCeViaz7/AQ8Ayfoay2/6G8uFZ/4UIAU+/y0YBtbsIAU8LOoby3zqGsvNr2AhlEbNyhDwpMagV/Cjxn9f1SGXRs3KEPCkxqBn8KPGf2/RzTEcKAsf2hhZH9oYWcPERny6OAViV31rX+XNmkbh1Xu90sxFe9ZA4Ih9k0884Il6lF/ghjzgij2RMGvgh3nLPy88g+CF8IIBDwBvVHzWQBfLN6GFZ3rmBxdvGAjwij3KAETgivCJX/CGV/CFGASCHSgLy38g+Ffwh4LghR3NYkUY2nvgifCIg1/l";
var v10980 = v10981 + "5gf2CG8mB1Z7aB8fHx/LHR/LHeYDxkBnrx7/6XnghpPgh3vLPy88geCF8IIBDwBvVHzWQBfLN6GFZ3rmBxdv8Ilf8IZX8IXLfyAHV/CHgh0YAYLghc1iRfCKPcoAROCKGN171kDgiHuVTzzgiXqUX+CGPOCKPZEwa+CHecs/LzyD4IXwggEPAG9UfNZAF8s3oYVneuYHF28YCPCKPcoAROCK8Ilf8IZX8IUYBIIdKAvLfyD4V/CHguCFHc0qRhjae+CJ8IiTX+XmB/YQbyYHVntoHx8fH8sdH8sd5gPGQGc+/1jpeeCGk+CHe8s/LzyB4IXwggEPAG9UfNZAF8s3oYVneuYHF2/wiV/whlfwhct/IAdX8IeCHRgBguCFzSpG8Io9ygBE4IoY3UYAALoAAHzWQMhPHx8f5h9HeeYHKAsE/gUwBvUhylblBT4PkCHJRoRn5fCCZ69vyfCCZ69vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi";
var v10979 = v10980 + "IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIsnxAQ8APcqEVz0odj0oOj0idwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkid8kicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAloyfgAVF3wgjEAr/6gKAMxAL8B/wDFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcVia/nJJgJ+4JovPOCYfcZAb37gl+Cbr+CZ4JzgneCePkDgn8n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v10978 = v10979 + "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v10977 = v10978 + "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Aw==";
var gameboy_rom = v10977;
var completed = 0;
var benchmarks = BenchmarkSuite.CountBenchmarks();
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var v5550;
if(typeof skipBenchmarks === "undefined") {
  v5550 = []
}else {
  v5550 = skipBenchmarks
}
var skipBenchmarks = v5550;

