function v888() {
  var testTypedArray = new Uint8Array(1);
  testTypedArray[0] = -1;
  var v5551 = testTypedArray[0];
  testTypedArray[0] = v5551 >> 0;
  var v5552 = testTypedArray[0];
  var v889 = v5552 != 255;
  if(v889) {
    cout("Detected faulty math by your browser.", 2);
    return true
  }else {
    return false
  }
  return
}
function v887(length$$20, defaultValue, numberType) {
  try {
    var v890 = settings[5];
    if(v890) {
      throw new Error("");
    }
    var v5553 = numberType != "float32";
    if(v5553) {
      var v8483 = GameBoyWindow.opera;
      if(v8483) {
        v8483 = JAMScript.call(this.checkForOperaMathBug, this, [])
      }
      v5553 = v8483
    }
    var v891 = v5553;
    if(v891) {
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
    var v894 = defaultValue != 0;
    if(v894) {
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
    var v5554 = error$$27.message;
    var v895 = "Could not convert an array to a typed array: " + v5554;
    cout(v895, 1);
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
    var v8485 = !v5555;
    if(v8485) {
      var v8484 = baseArray$$1.length;
      v5555 = !v8484
    }
    var v898 = v5555;
    if(v898) {
      return[]
    }
    var arrayTemp = [];
    var index$$66 = 0;
    var v5556 = baseArray$$1.length;
    var v899 = index$$66 < v5556;
    for(;v899;) {
      arrayTemp[index$$66] = baseArray$$1[index$$66];
      index$$66 = index$$66 + 1;
      var v5557 = baseArray$$1.length;
      v899 = index$$66 < v5557
    }
    return arrayTemp
  }catch(error$$26) {
    var v5558 = error$$26.message;
    var v900 = "Conversion from a typed array failed: " + v5558;
    cout(v900, 1);
    return baseArray$$1
  }
  return
}
function v885(baseArray, memtype) {
  try {
    var v5559 = settings[5];
    var v8487 = !v5559;
    if(v8487) {
      var v8486 = memtype != "float32";
      if(v8486) {
        var v9756 = GameBoyWindow.opera;
        if(v9756) {
          v9756 = JAMScript.call(this.checkForOperaMathBug, this, [])
        }
        v8486 = v9756
      }
      v5559 = v8486
    }
    var v901 = v5559;
    if(v901) {
      return baseArray
    }
    var v5560 = !baseArray;
    var v8489 = !v5560;
    if(v8489) {
      var v8488 = baseArray.length;
      v5560 = !v8488
    }
    var v902 = v5560;
    if(v902) {
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
    var v5561 = error$$25.message;
    var v904 = "Could not convert an array to a typed array: " + v5561;
    cout(v904, 1);
    return baseArray
  }
  return
}
function v884() {
  function v883(parentObj$$673, address$$167, data$$141) {
    var v908 = parentObj$$673.inBootstrap;
    if(v908) {
      var v905 = data$$141 & 1;
      parentObj$$673.cGBC = v905 == 0;
      var v9757 = parentObj$$673.name;
      var v9758 = parentObj$$673.gameCode;
      var v8490 = v9757 + v9758;
      var v9759 = parentObj$$673.ROM;
      var v8491 = v9759[323];
      var v5562 = v8490 + v8491;
      var v906 = v5562 == "Game and Watch 50";
      if(v906) {
        parentObj$$673.cGBC = true;
        cout("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1)
      }
      var v5563 = parentObj$$673.cGBC;
      var v907 = "Booted to GBC Mode: " + v5563;
      cout(v907, 0)
    }
    var v909 = parentObj$$673.memory;
    v909[65388] = data$$141;
    return
  }
  function v882(parentObj$$672, address$$166, data$$140) {
    cout("Boot ROM reads blocked: Bootstrap process has ended.", 0);
    parentObj$$672.inBootstrap = false;
    JAMScript.call(parentObj$$672.disableBootROM, parentObj$$672, []);
    var v910 = parentObj$$672.memory;
    v910[65360] = data$$140;
    return
  }
  var v915 = this.inBootstrap;
  if(v915) {
    var v911 = this.memoryHighWriter;
    var v5564 = this.memoryWriter;
    v911[80] = v5564[65360] = v882;
    var v913 = this.cGBC;
    if(v913) {
      var v912 = this.memoryHighWriter;
      var v5565 = this.memoryWriter;
      v912[108] = v5565[65388] = v883
    }
  }else {
    var v914 = this.memoryHighWriter;
    var v5566 = this.memoryWriter;
    v914[80] = v5566[65360] = this.cartIgnoreWrite
  }
  return
}
function v881() {
  function v880(parentObj$$671, address$$165, data$$139) {
    var v916 = parentObj$$671.memory;
    v916[65357] = data$$139;
    return
  }
  function v879(parentObj$$670, address$$164, data$$138) {
    var v8492 = parentObj$$670.memory;
    var v5567 = v8492[65353];
    var v918 = v5567 != data$$138;
    if(v918) {
      JAMScript.call(parentObj$$670.midScanLineJIT, parentObj$$670, []);
      JAMScript.call(parentObj$$670.updateGBOBJPalette, parentObj$$670, [4, data$$138]);
      var v917 = parentObj$$670.memory;
      v917[65353] = data$$138
    }
    return
  }
  function v878(parentObj$$669, address$$163, data$$137) {
    var v8493 = parentObj$$669.memory;
    var v5568 = v8493[65352];
    var v920 = v5568 != data$$137;
    if(v920) {
      JAMScript.call(parentObj$$669.midScanLineJIT, parentObj$$669, []);
      JAMScript.call(parentObj$$669.updateGBOBJPalette, parentObj$$669, [0, data$$137]);
      var v919 = parentObj$$669.memory;
      v919[65352] = data$$137
    }
    return
  }
  function v877(parentObj$$668, address$$162, data$$136) {
    var v8494 = parentObj$$668.memory;
    var v5569 = v8494[65351];
    var v922 = v5569 != data$$136;
    if(v922) {
      JAMScript.call(parentObj$$668.midScanLineJIT, parentObj$$668, []);
      JAMScript.call(parentObj$$668.updateGBBGPalette, parentObj$$668, [data$$136]);
      var v921 = parentObj$$668.memory;
      v921[65351] = data$$136
    }
    return
  }
  function v876(parentObj$$667, address$$161, data$$135) {
    var v923 = parentObj$$667.memory;
    v923[65350] = data$$135;
    var v5570 = data$$135 > 127;
    if(v5570) {
      v5570 = data$$135 < 224
    }
    var v940 = v5570;
    if(v940) {
      data$$135 = data$$135 << 8;
      address$$161 = 65024;
      var stat$$1 = parentObj$$667.modeSTAT;
      parentObj$$667.modeSTAT = 0;
      var newData$$1 = 0;
      var v5571 = address$$161 = address$$161 + 1;
      var v929 = v5571 < 65184;
      do {
        var v924 = parentObj$$667.memoryReader;
        var v925 = data$$135;
        data$$135 = data$$135 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v10994 = [[parentObj$$667, v925], v924, v924[data$$135]]
        }
        newData$$1 = JAMScript.call(v10994[2], v10994[1], v10994[0]);
        var v8495 = parentObj$$667.memory;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v5572 = v8495[address$$161]
        }
        var v928 = newData$$1 != v5572;
        if(v928) {
          parentObj$$667.modeSTAT = stat$$1;
          JAMScript.call(parentObj$$667.graphicsJIT, parentObj$$667, []);
          parentObj$$667.modeSTAT = 0;
          var v926 = parentObj$$667.memory;
          var v927 = address$$161;
          address$$161 = address$$161 + 1;
          v926[v927] = newData$$1;
          break
        }
        var v5573 = address$$161 = address$$161 + 1;
        v929 = v5573 < 65184
      }while(v929);
      var v939 = address$$161 < 65184;
      if(v939) {
        var v938 = address$$161 < 65184;
        do {
          var v930 = parentObj$$667.memory;
          var v931 = address$$161;
          address$$161 = address$$161 + 1;
          var v5574 = parentObj$$667.memoryReader;
          var v5575 = data$$135;
          data$$135 = data$$135 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10995 = [[parentObj$$667, v5575], v5574, v5574[data$$135]]
          }
          var v10772 = JAMScript.call(v10995[2], v10995[1], v10995[0]);
          v930[v931] = v10772;
          var v932 = parentObj$$667.memory;
          var v933 = address$$161;
          address$$161 = address$$161 + 1;
          var v5576 = parentObj$$667.memoryReader;
          var v5577 = data$$135;
          data$$135 = data$$135 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10996 = [[parentObj$$667, v5577], v5576, v5576[data$$135]]
          }
          var v10773 = JAMScript.call(v10996[2], v10996[1], v10996[0]);
          v932[v933] = v10773;
          var v934 = parentObj$$667.memory;
          var v935 = address$$161;
          address$$161 = address$$161 + 1;
          var v5578 = parentObj$$667.memoryReader;
          var v5579 = data$$135;
          data$$135 = data$$135 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10997 = [[parentObj$$667, v5579], v5578, v5578[data$$135]]
          }
          var v10774 = JAMScript.call(v10997[2], v10997[1], v10997[0]);
          v934[v935] = v10774;
          var v936 = parentObj$$667.memory;
          var v937 = address$$161;
          address$$161 = address$$161 + 1;
          var v5580 = parentObj$$667.memoryReader;
          var v5581 = data$$135;
          data$$135 = data$$135 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10998 = [[parentObj$$667, v5581], v5580, v5580[data$$135]]
          }
          var v10775 = JAMScript.call(v10998[2], v10998[1], v10998[0]);
          v936[v937] = v10775;
          v938 = address$$161 < 65184
        }while(v938)
      }
      parentObj$$667.modeSTAT = stat$$1
    }
    return
  }
  function v875(parentObj$$666, address$$160, data$$134) {
    var v941 = data$$134 & 64;
    parentObj$$666.LYCMatchTriggerSTAT = v941 == 64;
    var v942 = data$$134 & 32;
    parentObj$$666.mode2TriggerSTAT = v942 == 32;
    var v943 = data$$134 & 16;
    parentObj$$666.mode1TriggerSTAT = v943 == 16;
    var v944 = data$$134 & 8;
    parentObj$$666.mode0TriggerSTAT = v944 == 8;
    var v945 = parentObj$$666.memory;
    v945[65345] = data$$134 & 120;
    var v9760 = parentObj$$666.usedBootROM;
    var v8496 = !v9760;
    var v9762 = !v8496;
    if(v9762) {
      var v9761 = parentObj$$666.usedGBCBootROM;
      v8496 = !v9761
    }
    var v5582 = v8496;
    if(v5582) {
      var v8497 = parentObj$$666.LCDisOn;
      if(v8497) {
        var v9763 = parentObj$$666.modeSTAT;
        v8497 = v9763 < 2
      }
      v5582 = v8497
    }
    var v946 = v5582;
    if(v946) {
      var v5583 = parentObj$$666.interruptsRequested;
      parentObj$$666.interruptsRequested = v5583 | 2;
      JAMScript.call(parentObj$$666.checkIRQMatching, parentObj$$666, [])
    }
    return
  }
  function v874(parentObj$$665, address$$159, data$$133) {
    var v8498 = parentObj$$665.memory;
    var v5584 = v8498[65344];
    var v959 = v5584 != data$$133;
    if(v959) {
      JAMScript.call(parentObj$$665.midScanLineJIT, parentObj$$665, []);
      var temp_var$$22 = data$$133 > 127;
      var v5585 = parentObj$$665.LCDisOn;
      var v950 = temp_var$$22 != v5585;
      if(v950) {
        parentObj$$665.LCDisOn = temp_var$$22;
        var v947 = parentObj$$665.memory;
        var v8499 = v947[65345];
        v947[65345] = v8499 & 120;
        parentObj$$665.midScanlineOffset = -1;
        var v948 = parentObj$$665.memory;
        parentObj$$665.totalLinesPassed = parentObj$$665.currentX = parentObj$$665.queuedScanLines = parentObj$$665.lastUnrenderedLine = parentObj$$665.STATTracker = parentObj$$665.LCDTicks = parentObj$$665.actualScanLine = v948[65348] = 0;
        var v949 = parentObj$$665.LCDisOn;
        if(v949) {
          parentObj$$665.modeSTAT = 2;
          JAMScript.call(parentObj$$665.matchLYC, parentObj$$665, []);
          parentObj$$665.LCDCONTROL = parentObj$$665.LINECONTROL
        }else {
          parentObj$$665.modeSTAT = 0;
          parentObj$$665.LCDCONTROL = parentObj$$665.DISPLAYOFFCONTROL;
          JAMScript.call(parentObj$$665.DisplayShowOff, parentObj$$665, [])
        }
        var v5586 = parentObj$$665.interruptsRequested;
        parentObj$$665.interruptsRequested = v5586 & 253
      }
      var v951;
      var v8500 = data$$133 & 64;
      var v5587 = v8500 == 64;
      if(v5587) {
        v951 = 1024
      }else {
        v951 = 0
      }
      parentObj$$665.gfxWindowCHRBankPosition = v951;
      var v952 = data$$133 & 32;
      parentObj$$665.gfxWindowDisplay = v952 == 32;
      var v953;
      var v8501 = data$$133 & 16;
      var v5588 = v8501 == 16;
      if(v5588) {
        v953 = 0
      }else {
        v953 = 128
      }
      parentObj$$665.gfxBackgroundBankOffset = v953;
      var v954;
      var v8502 = data$$133 & 8;
      var v5589 = v8502 == 8;
      if(v5589) {
        v954 = 1024
      }else {
        v954 = 0
      }
      parentObj$$665.gfxBackgroundCHRBankPosition = v954;
      var v955 = data$$133 & 4;
      parentObj$$665.gfxSpriteNormalHeight = v955 == 0;
      var v956 = data$$133 & 2;
      parentObj$$665.gfxSpriteShow = v956 == 2;
      var v957 = data$$133 & 1;
      parentObj$$665.bgEnabled = v957 == 1;
      var v958 = parentObj$$665.memory;
      v958[65344] = data$$133
    }
    return
  }
  function v873(parentObj$$664, address$$158, data$$132) {
    var v5590 = data$$132 & 1;
    var v962 = v5590 == 1;
    if(v962) {
      var v960 = parentObj$$664.memory;
      v960[65282] = data$$132 & 127;
      parentObj$$664.serialTimer = 4096;
      parentObj$$664.serialShiftTimer = parentObj$$664.serialShiftTimerAllocated = 512
    }else {
      var v961 = parentObj$$664.memory;
      v961[65282] = data$$132;
      parentObj$$664.serialShiftTimer = parentObj$$664.serialShiftTimerAllocated = parentObj$$664.serialTimer = 0
    }
    return
  }
  function v872(parentObj$$663, address$$157, data$$131) {
    var v963 = parentObj$$663.memory;
    v963[65396] = data$$131;
    return
  }
  function v871(parentObj$$662, address$$156, data$$130) {
    var v8503 = parentObj$$662.memory;
    var v5591 = v8503[65361];
    var v964 = v5591 << 8;
    var v5592 = parentObj$$662.memory;
    var v965 = v5592[65362];
    var addressCheck = v964 | v965;
    var v8504 = parentObj$$662.hdmaRunning;
    var v5593 = !v8504;
    var v8506 = !v5593;
    if(v8506) {
      var v8505 = addressCheck < 53248;
      var v9764 = !v8505;
      if(v9764) {
        v8505 = addressCheck >= 57344
      }
      v5593 = v8505
    }
    var v969 = v5593;
    if(v969) {
      var v966 = parentObj$$662;
      var v5594 = data$$130 & 7;
      var v10776 = Math.max(v5594, 1);
      v966.gbcRamBank = v10776;
      var v8507 = parentObj$$662.gbcRamBank;
      var v5595 = v8507 - 1;
      var v967 = v5595 << 12;
      parentObj$$662.gbcRamBankPosition = v967 - 53248;
      var v968 = parentObj$$662.gbcRamBankPosition;
      parentObj$$662.gbcRamBankPositionECHO = v968 - 8192
    }
    var v970 = parentObj$$662.memory;
    v970[65392] = data$$130;
    return
  }
  function v870(parentObj$$661, address$$155, data$$129) {
    var v8508 = parentObj$$661.memory;
    var v5596 = v8508[65386];
    var v971 = v5596 & 63;
    JAMScript.call(parentObj$$661.updateGBCOBJPalette, parentObj$$661, [v971, data$$129]);
    var v8509 = parentObj$$661.memory;
    var v5597 = v8509[65386];
    var v976 = v5597 > 127;
    if(v976) {
      var v8510 = parentObj$$661.memory;
      var v5598 = v8510[65386];
      var v972 = v5598 + 1;
      var next$$1 = v972 & 63;
      var v973 = parentObj$$661.memory;
      v973[65386] = next$$1 | 128;
      var v974 = parentObj$$661.memory;
      var v5599 = parentObj$$661.gbcOBJRawPalette;
      v974[65387] = v5599[next$$1]
    }else {
      var v975 = parentObj$$661.memory;
      v975[65387] = data$$129
    }
    return
  }
  function v869(parentObj$$660, address$$154, data$$128) {
    var v977 = parentObj$$660.memory;
    var v5600 = parentObj$$660.gbcOBJRawPalette;
    var v5601 = data$$128 & 63;
    v977[65387] = v5600[v5601];
    var v978 = parentObj$$660.memory;
    v978[65386] = data$$128;
    return
  }
  function v868(parentObj$$659, address$$153, data$$127) {
    var v8511 = parentObj$$659.memory;
    var v5602 = v8511[65384];
    var v979 = v5602 & 63;
    JAMScript.call(parentObj$$659.updateGBCBGPalette, parentObj$$659, [v979, data$$127]);
    var v8512 = parentObj$$659.memory;
    var v5603 = v8512[65384];
    var v984 = v5603 > 127;
    if(v984) {
      var v8513 = parentObj$$659.memory;
      var v5604 = v8513[65384];
      var v980 = v5604 + 1;
      var next = v980 & 63;
      var v981 = parentObj$$659.memory;
      v981[65384] = next | 128;
      var v982 = parentObj$$659.memory;
      var v5605 = parentObj$$659.gbcBGRawPalette;
      v982[65385] = v5605[next]
    }else {
      var v983 = parentObj$$659.memory;
      v983[65385] = data$$127
    }
    return
  }
  function v867(parentObj$$658, address$$152, data$$126) {
    var v985 = parentObj$$658.memory;
    var v5606 = parentObj$$658.gbcBGRawPalette;
    var v5607 = data$$126 & 63;
    v985[65385] = v5606[v5607];
    var v986 = parentObj$$658.memory;
    v986[65384] = data$$126;
    return
  }
  function v866(parentObj$$657, address$$151, data$$125) {
    var v5608 = parentObj$$657.hdmaRunning;
    var v994 = !v5608;
    if(v994) {
      var v5609 = data$$125 & 128;
      var v990 = v5609 == 0;
      if(v990) {
        var v5610 = data$$125 & 127;
        var v987 = v5610 + 1;
        JAMScript.call(parentObj$$657.DMAWrite, parentObj$$657, [v987]);
        var v988 = parentObj$$657.memory;
        v988[65365] = 255
      }else {
        parentObj$$657.hdmaRunning = true;
        var v989 = parentObj$$657.memory;
        v989[65365] = data$$125 & 127
      }
    }else {
      var v5611 = data$$125 & 128;
      var v993 = v5611 == 0;
      if(v993) {
        parentObj$$657.hdmaRunning = false;
        var v991 = parentObj$$657.memory;
        var v8514 = v991[65365];
        v991[65365] = v8514 | 128
      }else {
        var v992 = parentObj$$657.memory;
        v992[65365] = data$$125 & 127
      }
    }
    return
  }
  function v865(parentObj$$656, address$$150, data$$124) {
    var v5612 = parentObj$$656.hdmaRunning;
    var v996 = !v5612;
    if(v996) {
      var v995 = parentObj$$656.memory;
      v995[65364] = data$$124 & 240
    }
    return
  }
  function v864(parentObj$$655, address$$149, data$$123) {
    var v5613 = parentObj$$655.hdmaRunning;
    var v998 = !v5613;
    if(v998) {
      var v997 = parentObj$$655.memory;
      v997[65363] = data$$123 & 31
    }
    return
  }
  function v863(parentObj$$654, address$$148, data$$122) {
    var v5614 = parentObj$$654.hdmaRunning;
    var v1000 = !v5614;
    if(v1000) {
      var v999 = parentObj$$654.memory;
      v999[65362] = data$$122 & 240
    }
    return
  }
  function v862(parentObj$$653, address$$147, data$$121) {
    var v5615 = parentObj$$653.hdmaRunning;
    var v1002 = !v5615;
    if(v1002) {
      var v1001 = parentObj$$653.memory;
      v1001[65361] = data$$121
    }
    return
  }
  function v861(parentObj$$652, address$$146, data$$120) {
    parentObj$$652.currVRAMBank = data$$120 & 1;
    var v5616 = parentObj$$652.currVRAMBank;
    var v1003 = v5616 > 0;
    if(v1003) {
      parentObj$$652.BGCHRCurrentBank = parentObj$$652.BGCHRBank2
    }else {
      parentObj$$652.BGCHRCurrentBank = parentObj$$652.BGCHRBank1
    }
    return
  }
  function v860(parentObj$$651, address$$145, data$$119) {
    var v1004 = parentObj$$651.memory;
    var v5617 = data$$119 & 127;
    var v9765 = parentObj$$651.memory;
    var v8515 = v9765[65357];
    var v5618 = v8515 & 128;
    v1004[65357] = v5617 | v5618;
    return
  }
  function v859(parentObj$$650, address$$144, data$$118) {
    var v1005 = parentObj$$650.memory;
    v1005[65350] = data$$118;
    var v1022 = data$$118 < 224;
    if(v1022) {
      data$$118 = data$$118 << 8;
      address$$144 = 65024;
      var stat = parentObj$$650.modeSTAT;
      parentObj$$650.modeSTAT = 0;
      var newData = 0;
      var v5619 = address$$144 = address$$144 + 1;
      var v1011 = v5619 < 65184;
      do {
        var v1006 = parentObj$$650.memoryReader;
        var v1007 = data$$118;
        data$$118 = data$$118 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v10999 = [[parentObj$$650, v1007], v1006, v1006[data$$118]]
        }
        newData = JAMScript.call(v10999[2], v10999[1], v10999[0]);
        var v8516 = parentObj$$650.memory;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v5620 = v8516[address$$144]
        }
        var v1010 = newData != v5620;
        if(v1010) {
          parentObj$$650.modeSTAT = stat;
          JAMScript.call(parentObj$$650.graphicsJIT, parentObj$$650, []);
          parentObj$$650.modeSTAT = 0;
          var v1008 = parentObj$$650.memory;
          var v1009 = address$$144;
          address$$144 = address$$144 + 1;
          v1008[v1009] = newData;
          break
        }
        var v5621 = address$$144 = address$$144 + 1;
        v1011 = v5621 < 65184
      }while(v1011);
      var v1021 = address$$144 < 65184;
      if(v1021) {
        var v1020 = address$$144 < 65184;
        do {
          var v1012 = parentObj$$650.memory;
          var v1013 = address$$144;
          address$$144 = address$$144 + 1;
          var v5622 = parentObj$$650.memoryReader;
          var v5623 = data$$118;
          data$$118 = data$$118 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11000 = [[parentObj$$650, v5623], v5622, v5622[data$$118]]
          }
          var v10777 = JAMScript.call(v11000[2], v11000[1], v11000[0]);
          v1012[v1013] = v10777;
          var v1014 = parentObj$$650.memory;
          var v1015 = address$$144;
          address$$144 = address$$144 + 1;
          var v5624 = parentObj$$650.memoryReader;
          var v5625 = data$$118;
          data$$118 = data$$118 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11001 = [[parentObj$$650, v5625], v5624, v5624[data$$118]]
          }
          var v10778 = JAMScript.call(v11001[2], v11001[1], v11001[0]);
          v1014[v1015] = v10778;
          var v1016 = parentObj$$650.memory;
          var v1017 = address$$144;
          address$$144 = address$$144 + 1;
          var v5626 = parentObj$$650.memoryReader;
          var v5627 = data$$118;
          data$$118 = data$$118 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11002 = [[parentObj$$650, v5627], v5626, v5626[data$$118]]
          }
          var v10779 = JAMScript.call(v11002[2], v11002[1], v11002[0]);
          v1016[v1017] = v10779;
          var v1018 = parentObj$$650.memory;
          var v1019 = address$$144;
          address$$144 = address$$144 + 1;
          var v5628 = parentObj$$650.memoryReader;
          var v5629 = data$$118;
          data$$118 = data$$118 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11003 = [[parentObj$$650, v5629], v5628, v5628[data$$118]]
          }
          var v10780 = JAMScript.call(v11003[2], v11003[1], v11003[0]);
          v1018[v1019] = v10780;
          v1020 = address$$144 < 65184
        }while(v1020)
      }
      parentObj$$650.modeSTAT = stat
    }
    return
  }
  function v858(parentObj$$649, address$$143, data$$117) {
    var v1023 = data$$117 & 64;
    parentObj$$649.LYCMatchTriggerSTAT = v1023 == 64;
    var v1024 = data$$117 & 32;
    parentObj$$649.mode2TriggerSTAT = v1024 == 32;
    var v1025 = data$$117 & 16;
    parentObj$$649.mode1TriggerSTAT = v1025 == 16;
    var v1026 = data$$117 & 8;
    parentObj$$649.mode0TriggerSTAT = v1026 == 8;
    var v1027 = parentObj$$649.memory;
    v1027[65345] = data$$117 & 120;
    return
  }
  function v857(parentObj$$648, address$$142, data$$116) {
    var v8517 = parentObj$$648.memory;
    var v5630 = v8517[65344];
    var v1040 = v5630 != data$$116;
    if(v1040) {
      JAMScript.call(parentObj$$648.midScanLineJIT, parentObj$$648, []);
      var temp_var$$21 = data$$116 > 127;
      var v5631 = parentObj$$648.LCDisOn;
      var v1031 = temp_var$$21 != v5631;
      if(v1031) {
        parentObj$$648.LCDisOn = temp_var$$21;
        var v1028 = parentObj$$648.memory;
        var v8518 = v1028[65345];
        v1028[65345] = v8518 & 120;
        parentObj$$648.midScanlineOffset = -1;
        var v1029 = parentObj$$648.memory;
        parentObj$$648.totalLinesPassed = parentObj$$648.currentX = parentObj$$648.queuedScanLines = parentObj$$648.lastUnrenderedLine = parentObj$$648.STATTracker = parentObj$$648.LCDTicks = parentObj$$648.actualScanLine = v1029[65348] = 0;
        var v1030 = parentObj$$648.LCDisOn;
        if(v1030) {
          parentObj$$648.modeSTAT = 2;
          JAMScript.call(parentObj$$648.matchLYC, parentObj$$648, []);
          parentObj$$648.LCDCONTROL = parentObj$$648.LINECONTROL
        }else {
          parentObj$$648.modeSTAT = 0;
          parentObj$$648.LCDCONTROL = parentObj$$648.DISPLAYOFFCONTROL;
          JAMScript.call(parentObj$$648.DisplayShowOff, parentObj$$648, [])
        }
        var v5632 = parentObj$$648.interruptsRequested;
        parentObj$$648.interruptsRequested = v5632 & 253
      }
      var v1032;
      var v8519 = data$$116 & 64;
      var v5633 = v8519 == 64;
      if(v5633) {
        v1032 = 1024
      }else {
        v1032 = 0
      }
      parentObj$$648.gfxWindowCHRBankPosition = v1032;
      var v1033 = data$$116 & 32;
      parentObj$$648.gfxWindowDisplay = v1033 == 32;
      var v1034;
      var v8520 = data$$116 & 16;
      var v5634 = v8520 == 16;
      if(v5634) {
        v1034 = 0
      }else {
        v1034 = 128
      }
      parentObj$$648.gfxBackgroundBankOffset = v1034;
      var v1035;
      var v8521 = data$$116 & 8;
      var v5635 = v8521 == 8;
      if(v5635) {
        v1035 = 1024
      }else {
        v1035 = 0
      }
      parentObj$$648.gfxBackgroundCHRBankPosition = v1035;
      var v1036 = data$$116 & 4;
      parentObj$$648.gfxSpriteNormalHeight = v1036 == 0;
      var v1037 = data$$116 & 2;
      parentObj$$648.gfxSpriteShow = v1037 == 2;
      var v1038 = data$$116 & 1;
      parentObj$$648.BGPriorityEnabled = v1038 == 1;
      JAMScript.call(parentObj$$648.priorityFlaggingPathRebuild, parentObj$$648, []);
      var v1039 = parentObj$$648.memory;
      v1039[65344] = data$$116
    }
    return
  }
  function v856(parentObj$$647, address$$141, data$$115) {
    var v5636 = data$$115 & 1;
    var v1045 = v5636 == 1;
    if(v1045) {
      var v1041 = parentObj$$647.memory;
      v1041[65282] = data$$115 & 127;
      var v1042;
      var v8522 = data$$115 & 2;
      var v5637 = v8522 == 0;
      if(v5637) {
        v1042 = 4096
      }else {
        v1042 = 128
      }
      parentObj$$647.serialTimer = v1042;
      var v1043;
      var v8523 = data$$115 & 2;
      var v5638 = v8523 == 0;
      if(v5638) {
        v1043 = 512
      }else {
        v1043 = 16
      }
      parentObj$$647.serialShiftTimer = parentObj$$647.serialShiftTimerAllocated = v1043
    }else {
      var v1044 = parentObj$$647.memory;
      v1044[65282] = data$$115;
      parentObj$$647.serialShiftTimer = parentObj$$647.serialShiftTimerAllocated = parentObj$$647.serialTimer = 0
    }
    return
  }
  var v1080 = this.cGBC;
  if(v1080) {
    var v1046 = this.memoryHighWriter;
    var v5639 = this.memoryWriter;
    v1046[2] = v5639[65282] = v856;
    var v1047 = this.memoryHighWriter;
    var v5640 = this.memoryWriter;
    v1047[64] = v5640[65344] = v857;
    var v1048 = this.memoryHighWriter;
    var v5641 = this.memoryWriter;
    v1048[65] = v5641[65345] = v858;
    var v1049 = this.memoryHighWriter;
    var v5642 = this.memoryWriter;
    v1049[70] = v5642[65350] = v859;
    var v1050 = this.memoryHighWriter;
    var v5643 = this.memoryWriter;
    v1050[77] = v5643[65357] = v860;
    var v1051 = this.memoryHighWriter;
    var v5644 = this.memoryWriter;
    v1051[79] = v5644[65359] = v861;
    var v1052 = this.memoryHighWriter;
    var v5645 = this.memoryWriter;
    v1052[81] = v5645[65361] = v862;
    var v1053 = this.memoryHighWriter;
    var v5646 = this.memoryWriter;
    v1053[82] = v5646[65362] = v863;
    var v1054 = this.memoryHighWriter;
    var v5647 = this.memoryWriter;
    v1054[83] = v5647[65363] = v864;
    var v1055 = this.memoryHighWriter;
    var v5648 = this.memoryWriter;
    v1055[84] = v5648[65364] = v865;
    var v1056 = this.memoryHighWriter;
    var v5649 = this.memoryWriter;
    v1056[85] = v5649[65365] = v866;
    var v1057 = this.memoryHighWriter;
    var v5650 = this.memoryWriter;
    v1057[104] = v5650[65384] = v867;
    var v1058 = this.memoryHighWriter;
    var v5651 = this.memoryWriter;
    v1058[105] = v5651[65385] = v868;
    var v1059 = this.memoryHighWriter;
    var v5652 = this.memoryWriter;
    v1059[106] = v5652[65386] = v869;
    var v1060 = this.memoryHighWriter;
    var v5653 = this.memoryWriter;
    v1060[107] = v5653[65387] = v870;
    var v1061 = this.memoryHighWriter;
    var v5654 = this.memoryWriter;
    v1061[112] = v5654[65392] = v871;
    var v1062 = this.memoryHighWriter;
    var v5655 = this.memoryWriter;
    v1062[116] = v5655[65396] = v872
  }else {
    var v1063 = this.memoryHighWriter;
    var v5656 = this.memoryWriter;
    v1063[2] = v5656[65282] = v873;
    var v1064 = this.memoryHighWriter;
    var v5657 = this.memoryWriter;
    v1064[64] = v5657[65344] = v874;
    var v1065 = this.memoryHighWriter;
    var v5658 = this.memoryWriter;
    v1065[65] = v5658[65345] = v875;
    var v1066 = this.memoryHighWriter;
    var v5659 = this.memoryWriter;
    v1066[70] = v5659[65350] = v876;
    var v1067 = this.memoryHighWriter;
    var v5660 = this.memoryWriter;
    v1067[71] = v5660[65351] = v877;
    var v1068 = this.memoryHighWriter;
    var v5661 = this.memoryWriter;
    v1068[72] = v5661[65352] = v878;
    var v1069 = this.memoryHighWriter;
    var v5662 = this.memoryWriter;
    v1069[73] = v5662[65353] = v879;
    var v1070 = this.memoryHighWriter;
    var v5663 = this.memoryWriter;
    v1070[77] = v5663[65357] = v880;
    var v1071 = this.memoryHighWriter;
    var v5664 = this.memoryWriter;
    v1071[79] = v5664[65359] = this.cartIgnoreWrite;
    var v1072 = this.memoryHighWriter;
    var v5665 = this.memoryWriter;
    v1072[85] = v5665[65365] = this.cartIgnoreWrite;
    var v1073 = this.memoryHighWriter;
    var v5666 = this.memoryWriter;
    v1073[104] = v5666[65384] = this.cartIgnoreWrite;
    var v1074 = this.memoryHighWriter;
    var v5667 = this.memoryWriter;
    v1074[105] = v5667[65385] = this.cartIgnoreWrite;
    var v1075 = this.memoryHighWriter;
    var v5668 = this.memoryWriter;
    v1075[106] = v5668[65386] = this.cartIgnoreWrite;
    var v1076 = this.memoryHighWriter;
    var v5669 = this.memoryWriter;
    v1076[107] = v5669[65387] = this.cartIgnoreWrite;
    var v1077 = this.memoryHighWriter;
    var v5670 = this.memoryWriter;
    v1077[108] = v5670[65388] = this.cartIgnoreWrite;
    var v1078 = this.memoryHighWriter;
    var v5671 = this.memoryWriter;
    v1078[112] = v5671[65392] = this.cartIgnoreWrite;
    var v1079 = this.memoryHighWriter;
    var v5672 = this.memoryWriter;
    v1079[116] = v5672[65396] = this.cartIgnoreWrite
  }
  return
}
function v855() {
  function v854(parentObj$$646, address$$140, data$$114) {
    parentObj$$646.interruptsEnabled = data$$114;
    JAMScript.call(parentObj$$646.checkIRQMatching, parentObj$$646, []);
    return
  }
  function v853(parentObj$$645, address$$139, data$$113) {
    var v1081 = parentObj$$645.memory;
    v1081[65397] = data$$113;
    return
  }
  function v852(parentObj$$644, address$$138, data$$112) {
    var v1082 = parentObj$$644.memory;
    v1082[65395] = data$$112;
    return
  }
  function v851(parentObj$$643, address$$137, data$$111) {
    var v1083 = parentObj$$643.memory;
    v1083[65394] = data$$111;
    return
  }
  function v850(parentObj$$642, address$$136, data$$110) {
    var v8524 = parentObj$$642.memory;
    var v5673 = v8524[65355];
    var v1085 = v5673 != data$$110;
    if(v1085) {
      JAMScript.call(parentObj$$642.midScanLineJIT, parentObj$$642, []);
      var v1084 = parentObj$$642.memory;
      v1084[65355] = data$$110;
      parentObj$$642.windowX = data$$110 - 7
    }
    return
  }
  function v849(parentObj$$641, address$$135, data$$109) {
    var v5674 = parentObj$$641.windowY;
    var v1086 = v5674 != data$$109;
    if(v1086) {
      JAMScript.call(parentObj$$641.midScanLineJIT, parentObj$$641, []);
      parentObj$$641.windowY = data$$109
    }
    return
  }
  function v848(parentObj$$640, address$$134, data$$108) {
    var v8525 = parentObj$$640.memory;
    var v5675 = v8525[65349];
    var v1089 = v5675 != data$$108;
    if(v1089) {
      var v1087 = parentObj$$640.memory;
      v1087[65349] = data$$108;
      var v1088 = parentObj$$640.LCDisOn;
      if(v1088) {
        JAMScript.call(parentObj$$640.matchLYC, parentObj$$640, [])
      }
    }
    return
  }
  function v847(parentObj$$639, address$$133, data$$107) {
    var v1091 = parentObj$$639.LCDisOn;
    if(v1091) {
      parentObj$$639.modeSTAT = 2;
      parentObj$$639.midScanlineOffset = -1;
      var v1090 = parentObj$$639.memory;
      parentObj$$639.totalLinesPassed = parentObj$$639.currentX = parentObj$$639.queuedScanLines = parentObj$$639.lastUnrenderedLine = parentObj$$639.LCDTicks = parentObj$$639.STATTracker = parentObj$$639.actualScanLine = v1090[65348] = 0
    }
    return
  }
  function v846(parentObj$$638, address$$132, data$$106) {
    var v5676 = parentObj$$638.backgroundX;
    var v1092 = v5676 != data$$106;
    if(v1092) {
      JAMScript.call(parentObj$$638.midScanLineJIT, parentObj$$638, []);
      parentObj$$638.backgroundX = data$$106
    }
    return
  }
  function v845(parentObj$$637, address$$131, data$$105) {
    var v5677 = parentObj$$637.backgroundY;
    var v1093 = v5677 != data$$105;
    if(v1093) {
      JAMScript.call(parentObj$$637.midScanLineJIT, parentObj$$637, []);
      parentObj$$637.backgroundY = data$$105
    }
    return
  }
  function v844(parentObj$$636, address$$130, data$$104) {
    JAMScript.call(parentObj$$636.channel3WriteRAM, parentObj$$636, [15, data$$104]);
    return
  }
  function v843(parentObj$$635, address$$129, data$$103) {
    JAMScript.call(parentObj$$635.channel3WriteRAM, parentObj$$635, [14, data$$103]);
    return
  }
  function v842(parentObj$$634, address$$128, data$$102) {
    JAMScript.call(parentObj$$634.channel3WriteRAM, parentObj$$634, [13, data$$102]);
    return
  }
  function v841(parentObj$$633, address$$127, data$$101) {
    JAMScript.call(parentObj$$633.channel3WriteRAM, parentObj$$633, [12, data$$101]);
    return
  }
  function v840(parentObj$$632, address$$126, data$$100) {
    JAMScript.call(parentObj$$632.channel3WriteRAM, parentObj$$632, [11, data$$100]);
    return
  }
  function v839(parentObj$$631, address$$125, data$$99) {
    JAMScript.call(parentObj$$631.channel3WriteRAM, parentObj$$631, [10, data$$99]);
    return
  }
  function v838(parentObj$$630, address$$124, data$$98) {
    JAMScript.call(parentObj$$630.channel3WriteRAM, parentObj$$630, [9, data$$98]);
    return
  }
  function v837(parentObj$$629, address$$123, data$$97) {
    JAMScript.call(parentObj$$629.channel3WriteRAM, parentObj$$629, [8, data$$97]);
    return
  }
  function v836(parentObj$$628, address$$122, data$$96) {
    JAMScript.call(parentObj$$628.channel3WriteRAM, parentObj$$628, [7, data$$96]);
    return
  }
  function v835(parentObj$$627, address$$121, data$$95) {
    JAMScript.call(parentObj$$627.channel3WriteRAM, parentObj$$627, [6, data$$95]);
    return
  }
  function v834(parentObj$$626, address$$120, data$$94) {
    JAMScript.call(parentObj$$626.channel3WriteRAM, parentObj$$626, [5, data$$94]);
    return
  }
  function v833(parentObj$$625, address$$119, data$$93) {
    JAMScript.call(parentObj$$625.channel3WriteRAM, parentObj$$625, [4, data$$93]);
    return
  }
  function v832(parentObj$$624, address$$118, data$$92) {
    JAMScript.call(parentObj$$624.channel3WriteRAM, parentObj$$624, [3, data$$92]);
    return
  }
  function v831(parentObj$$623, address$$117, data$$91) {
    JAMScript.call(parentObj$$623.channel3WriteRAM, parentObj$$623, [2, data$$91]);
    return
  }
  function v830(parentObj$$622, address$$116, data$$90) {
    JAMScript.call(parentObj$$622.channel3WriteRAM, parentObj$$622, [1, data$$90]);
    return
  }
  function v829(parentObj$$621, address$$115, data$$89) {
    JAMScript.call(parentObj$$621.channel3WriteRAM, parentObj$$621, [0, data$$89]);
    return
  }
  function v828(parentObj$$620, address$$114, data$$88) {
    JAMScript.call(parentObj$$620.audioJIT, parentObj$$620, []);
    var v8526 = parentObj$$620.soundMasterEnabled;
    var v5678 = !v8526;
    if(v5678) {
      v5678 = data$$88 > 127
    }
    var v1099 = v5678;
    if(v1099) {
      var v1094 = parentObj$$620.memory;
      v1094[65318] = 128;
      parentObj$$620.soundMasterEnabled = true;
      JAMScript.call(parentObj$$620.initializeAudioStartState, parentObj$$620, [])
    }else {
      var v5679 = parentObj$$620.soundMasterEnabled;
      if(v5679) {
        v5679 = data$$88 < 128
      }
      var v1098 = v5679;
      if(v1098) {
        var v1095 = parentObj$$620.memory;
        v1095[65318] = 0;
        parentObj$$620.soundMasterEnabled = false;
        var index$$64 = 65296;
        var v1097 = index$$64 < 65318;
        for(;v1097;) {
          var v1096 = parentObj$$620.memoryWriter;
          JAMScript.call(v1096[index$$64], v1096, [parentObj$$620, index$$64, 0]);
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
      var v9766 = parentObj$$619.memory;
      var v8527 = v9766[65317];
      v5680 = v8527 != data$$87
    }
    var v1108 = v5680;
    if(v1108) {
      JAMScript.call(parentObj$$619.audioJIT, parentObj$$619, []);
      var v1100 = parentObj$$619.memory;
      v1100[65317] = data$$87;
      var v1101 = data$$87 & 1;
      parentObj$$619.rightChannel1 = v1101 == 1;
      var v1102 = data$$87 & 2;
      parentObj$$619.rightChannel2 = v1102 == 2;
      var v1103 = data$$87 & 4;
      parentObj$$619.rightChannel3 = v1103 == 4;
      var v1104 = data$$87 & 8;
      parentObj$$619.rightChannel4 = v1104 == 8;
      var v1105 = data$$87 & 16;
      parentObj$$619.leftChannel1 = v1105 == 16;
      var v1106 = data$$87 & 32;
      parentObj$$619.leftChannel2 = v1106 == 32;
      var v1107 = data$$87 & 64;
      parentObj$$619.leftChannel3 = v1107 == 64;
      parentObj$$619.leftChannel4 = data$$87 > 127;
      JAMScript.call(parentObj$$619.channel1OutputLevelCache, parentObj$$619, []);
      JAMScript.call(parentObj$$619.channel2OutputLevelCache, parentObj$$619, []);
      JAMScript.call(parentObj$$619.channel3OutputLevelCache, parentObj$$619, []);
      JAMScript.call(parentObj$$619.channel4OutputLevelCache, parentObj$$619, [])
    }
    return
  }
  function v826(parentObj$$618, address$$112, data$$86) {
    var v5681 = parentObj$$618.soundMasterEnabled;
    if(v5681) {
      var v9767 = parentObj$$618.memory;
      var v8528 = v9767[65316];
      v5681 = v8528 != data$$86
    }
    var v1112 = v5681;
    if(v1112) {
      JAMScript.call(parentObj$$618.audioJIT, parentObj$$618, []);
      var v1109 = parentObj$$618.memory;
      v1109[65316] = data$$86;
      var v5682 = data$$86 >> 4;
      var v1110 = v5682 & 7;
      parentObj$$618.VinLeftChannelMasterVolume = v1110 + 1;
      var v1111 = data$$86 & 7;
      parentObj$$618.VinRightChannelMasterVolume = v1111 + 1;
      JAMScript.call(parentObj$$618.mixerOutputLevelCache, parentObj$$618, [])
    }
    return
  }
  function v825(parentObj$$617, address$$111, data$$85) {
    var v1123 = parentObj$$617.soundMasterEnabled;
    if(v1123) {
      JAMScript.call(parentObj$$617.audioJIT, parentObj$$617, []);
      var v1113 = parentObj$$617.memory;
      v1113[65315] = data$$85;
      var v1114 = data$$85 & 64;
      parentObj$$617.channel4consecutive = v1114 == 0;
      var v1122 = data$$85 > 127;
      if(v1122) {
        var v1115 = parentObj$$617.memory;
        var nr42 = v1115[65313];
        parentObj$$617.channel4envelopeVolume = nr42 >> 4;
        var v1116 = parentObj$$617.channel4envelopeVolume;
        var v1117 = parentObj$$617.channel4VolumeShifter;
        parentObj$$617.channel4currentVolume = v1116 << v1117;
        var v1118 = nr42 & 7;
        parentObj$$617.channel4envelopeSweepsLast = v1118 - 1;
        var v5683 = parentObj$$617.channel4totalLength;
        var v1119 = v5683 == 0;
        if(v1119) {
          parentObj$$617.channel4totalLength = 64
        }
        var v5684 = data$$85 & 64;
        var v1121 = v5684 == 64;
        if(v1121) {
          var v1120 = parentObj$$617.memory;
          var v8529 = v1120[65318];
          v1120[65318] = v8529 | 8
        }
      }
      JAMScript.call(parentObj$$617.channel4EnableCheck, parentObj$$617, [])
    }
    return
  }
  function v824(parentObj$$616, address$$110, data$$84) {
    var v1132 = parentObj$$616.soundMasterEnabled;
    if(v1132) {
      JAMScript.call(parentObj$$616.audioJIT, parentObj$$616, []);
      var v1124 = parentObj$$616;
      var v9768 = data$$84 & 7;
      var v8530 = v9768 << 4;
      var v5685 = Math.max(v8530, 8);
      var v5686 = data$$84 >> 4;
      v1124.channel4FrequencyPeriod = v5685 << v5686;
      var bitWidth = data$$84 & 8;
      var v8531 = bitWidth == 8;
      if(v8531) {
        var v9769 = parentObj$$616.channel4BitRange;
        v8531 = v9769 == 32767
      }
      var v5687 = v8531;
      var v8533 = !v5687;
      if(v8533) {
        var v8532 = bitWidth == 0;
        if(v8532) {
          var v9770 = parentObj$$616.channel4BitRange;
          v8532 = v9770 == 127
        }
        v5687 = v8532
      }
      var v1130 = v5687;
      if(v1130) {
        parentObj$$616.channel4lastSampleLookup = 0;
        var v1125;
        var v5688 = bitWidth == 8;
        if(v5688) {
          v1125 = 127
        }else {
          v1125 = 32767
        }
        parentObj$$616.channel4BitRange = v1125;
        var v1126;
        var v5689 = bitWidth == 8;
        if(v5689) {
          v1126 = 7
        }else {
          v1126 = 15
        }
        parentObj$$616.channel4VolumeShifter = v1126;
        var v1127 = parentObj$$616.channel4envelopeVolume;
        var v1128 = parentObj$$616.channel4VolumeShifter;
        parentObj$$616.channel4currentVolume = v1127 << v1128;
        var v1129;
        var v5690 = bitWidth == 8;
        if(v5690) {
          v1129 = parentObj$$616.LSFR7Table
        }else {
          v1129 = parentObj$$616.LSFR15Table
        }
        parentObj$$616.noiseSampleTable = v1129
      }
      var v1131 = parentObj$$616.memory;
      v1131[65314] = data$$84;
      JAMScript.call(parentObj$$616.channel4UpdateCache, parentObj$$616, [])
    }
    return
  }
  function v823(parentObj$$615, address$$109, data$$83) {
    var v1144 = parentObj$$615.soundMasterEnabled;
    if(v1144) {
      JAMScript.call(parentObj$$615.audioJIT, parentObj$$615, []);
      var v5691 = parentObj$$615.channel4Enabled;
      if(v5691) {
        var v8534 = parentObj$$615.channel4envelopeSweeps;
        v5691 = v8534 == 0
      }
      var v1141 = v5691;
      if(v1141) {
        var v10366 = parentObj$$615.memory;
        var v9771 = v10366[65313];
        var v8535 = v9771 ^ data$$83;
        var v5692 = v8535 & 8;
        var v1138 = v5692 == 8;
        if(v1138) {
          var v9772 = parentObj$$615.memory;
          var v8536 = v9772[65313];
          var v5693 = v8536 & 8;
          var v1134 = v5693 == 0;
          if(v1134) {
            var v9773 = parentObj$$615.memory;
            var v8537 = v9773[65313];
            var v5694 = v8537 & 7;
            var v1133 = v5694 == 7;
            if(v1133) {
              var v5695 = parentObj$$615.channel4envelopeVolume;
              parentObj$$615.channel4envelopeVolume = v5695 + 2
            }else {
              var v5696 = parentObj$$615.channel4envelopeVolume;
              parentObj$$615.channel4envelopeVolume = v5696 + 1
            }
          }
          var v5697 = parentObj$$615.channel4envelopeVolume;
          var v1135 = 16 - v5697;
          parentObj$$615.channel4envelopeVolume = v1135 & 15
        }else {
          var v9774 = parentObj$$615.memory;
          var v8538 = v9774[65313];
          var v5698 = v8538 & 15;
          var v1137 = v5698 == 8;
          if(v1137) {
            var v5699 = parentObj$$615.channel4envelopeVolume;
            var v1136 = 1 + v5699;
            parentObj$$615.channel4envelopeVolume = v1136 & 15
          }
        }
        var v1139 = parentObj$$615.channel4envelopeVolume;
        var v1140 = parentObj$$615.channel4VolumeShifter;
        parentObj$$615.channel4currentVolume = v1139 << v1140
      }
      var v1142 = data$$83 & 8;
      parentObj$$615.channel4envelopeType = v1142 == 8;
      var v1143 = parentObj$$615.memory;
      v1143[65313] = data$$83;
      JAMScript.call(parentObj$$615.channel4UpdateCache, parentObj$$615, []);
      JAMScript.call(parentObj$$615.channel4VolumeEnableCheck, parentObj$$615, [])
    }
    return
  }
  function v822(parentObj$$614, address$$108, data$$82) {
    var v5700 = parentObj$$614.soundMasterEnabled;
    var v8540 = !v5700;
    if(v8540) {
      var v8539 = parentObj$$614.cGBC;
      v5700 = !v8539
    }
    var v1148 = v5700;
    if(v1148) {
      var v1145 = parentObj$$614.soundMasterEnabled;
      if(v1145) {
        JAMScript.call(parentObj$$614.audioJIT, parentObj$$614, [])
      }
      var v1146 = data$$82 & 63;
      parentObj$$614.channel4totalLength = 64 - v1146;
      var v1147 = parentObj$$614.memory;
      v1147[65312] = data$$82 | 192;
      JAMScript.call(parentObj$$614.channel4EnableCheck, parentObj$$614, [])
    }
    return
  }
  function v821(parentObj$$613, address$$107, data$$81) {
    var v1158 = parentObj$$613.soundMasterEnabled;
    if(v1158) {
      JAMScript.call(parentObj$$613.audioJIT, parentObj$$613, []);
      var v1152 = data$$81 > 127;
      if(v1152) {
        var v5701 = parentObj$$613.channel3totalLength;
        var v1149 = v5701 == 0;
        if(v1149) {
          parentObj$$613.channel3totalLength = 256
        }
        parentObj$$613.channel3lastSampleLookup = 0;
        var v5702 = data$$81 & 64;
        var v1151 = v5702 == 64;
        if(v1151) {
          var v1150 = parentObj$$613.memory;
          var v8541 = v1150[65318];
          v1150[65318] = v8541 | 4
        }
      }
      var v1153 = data$$81 & 64;
      parentObj$$613.channel3consecutive = v1153 == 0;
      var v5703 = data$$81 & 7;
      var v1154 = v5703 << 8;
      var v5704 = parentObj$$613.channel3frequency;
      var v1155 = v5704 & 255;
      parentObj$$613.channel3frequency = v1154 | v1155;
      var v5705 = parentObj$$613.channel3frequency;
      var v1156 = 2048 - v5705;
      parentObj$$613.channel3FrequencyPeriod = v1156 << 1;
      var v1157 = parentObj$$613.memory;
      v1157[65310] = data$$81 & 64;
      JAMScript.call(parentObj$$613.channel3EnableCheck, parentObj$$613, [])
    }
    return
  }
  function v820(parentObj$$612, address$$106, data$$80) {
    var v1162 = parentObj$$612.soundMasterEnabled;
    if(v1162) {
      JAMScript.call(parentObj$$612.audioJIT, parentObj$$612, []);
      var v5706 = parentObj$$612.channel3frequency;
      var v1159 = v5706 & 1792;
      parentObj$$612.channel3frequency = v1159 | data$$80;
      var v5707 = parentObj$$612.channel3frequency;
      var v1160 = 2048 - v5707;
      parentObj$$612.channel3FrequencyPeriod = v1160 << 1;
      var v1161 = parentObj$$612.memory;
      v1161[65309] = data$$80
    }
    return
  }
  function v819(parentObj$$611, address$$105, data$$79) {
    var v1165 = parentObj$$611.soundMasterEnabled;
    if(v1165) {
      JAMScript.call(parentObj$$611.audioJIT, parentObj$$611, []);
      data$$79 = data$$79 & 96;
      var v1163 = parentObj$$611.memory;
      v1163[65308] = data$$79;
      var v1164;
      var v5709 = data$$79 == 0;
      if(v5709) {
        v1164 = 4
      }else {
        var v5708 = data$$79 >> 5;
        v1164 = v5708 - 1
      }
      parentObj$$611.channel3patternType = v1164
    }
    return
  }
  function v818(parentObj$$610, address$$104, data$$78) {
    var v5710 = parentObj$$610.soundMasterEnabled;
    var v8543 = !v5710;
    if(v8543) {
      var v8542 = parentObj$$610.cGBC;
      v5710 = !v8542
    }
    var v1168 = v5710;
    if(v1168) {
      var v1166 = parentObj$$610.soundMasterEnabled;
      if(v1166) {
        JAMScript.call(parentObj$$610.audioJIT, parentObj$$610, [])
      }
      parentObj$$610.channel3totalLength = 256 - data$$78;
      var v1167 = parentObj$$610.memory;
      v1167[65307] = data$$78;
      JAMScript.call(parentObj$$610.channel3EnableCheck, parentObj$$610, [])
    }
    return
  }
  function v817(parentObj$$609, address$$103, data$$77) {
    var v1173 = parentObj$$609.soundMasterEnabled;
    if(v1173) {
      JAMScript.call(parentObj$$609.audioJIT, parentObj$$609, []);
      var v8544 = parentObj$$609.channel3canPlay;
      var v5711 = !v8544;
      if(v5711) {
        v5711 = data$$77 >= 128
      }
      var v1169 = v5711;
      if(v1169) {
        parentObj$$609.channel3lastSampleLookup = 0;
        JAMScript.call(parentObj$$609.channel3UpdateCache, parentObj$$609, [])
      }
      parentObj$$609.channel3canPlay = data$$77 > 127;
      var v5712 = parentObj$$609.channel3canPlay;
      if(v5712) {
        var v10367 = parentObj$$609.memory;
        var v9775 = v10367[65306];
        var v8545 = v9775 > 127;
        if(v8545) {
          var v9776 = parentObj$$609.channel3consecutive;
          v8545 = !v9776
        }
        v5712 = v8545
      }
      var v1171 = v5712;
      if(v1171) {
        var v1170 = parentObj$$609.memory;
        var v8546 = v1170[65318];
        v1170[65318] = v8546 | 4
      }
      var v1172 = parentObj$$609.memory;
      v1172[65306] = data$$77 & 128
    }
    return
  }
  function v816(parentObj$$608, address$$102, data$$76) {
    var v1185 = parentObj$$608.soundMasterEnabled;
    if(v1185) {
      JAMScript.call(parentObj$$608.audioJIT, parentObj$$608, []);
      var v1179 = data$$76 > 127;
      if(v1179) {
        var v1174 = parentObj$$608.memory;
        var nr22 = v1174[65303];
        parentObj$$608.channel2envelopeVolume = nr22 >> 4;
        JAMScript.call(parentObj$$608.channel2OutputLevelCache, parentObj$$608, []);
        var v1175 = nr22 & 7;
        parentObj$$608.channel2envelopeSweepsLast = v1175 - 1;
        var v5713 = parentObj$$608.channel2totalLength;
        var v1176 = v5713 == 0;
        if(v1176) {
          parentObj$$608.channel2totalLength = 64
        }
        var v5714 = data$$76 & 64;
        var v1178 = v5714 == 64;
        if(v1178) {
          var v1177 = parentObj$$608.memory;
          var v8547 = v1177[65318];
          v1177[65318] = v8547 | 2
        }
      }
      var v1180 = data$$76 & 64;
      parentObj$$608.channel2consecutive = v1180 == 0;
      var v5715 = data$$76 & 7;
      var v1181 = v5715 << 8;
      var v5716 = parentObj$$608.channel2frequency;
      var v1182 = v5716 & 255;
      parentObj$$608.channel2frequency = v1181 | v1182;
      var v5717 = parentObj$$608.channel2frequency;
      var v1183 = 2048 - v5717;
      parentObj$$608.channel2FrequencyTracker = v1183 << 2;
      var v1184 = parentObj$$608.memory;
      v1184[65305] = data$$76 & 64;
      JAMScript.call(parentObj$$608.channel2EnableCheck, parentObj$$608, [])
    }
    return
  }
  function v815(parentObj$$607, address$$101, data$$75) {
    var v1189 = parentObj$$607.soundMasterEnabled;
    if(v1189) {
      JAMScript.call(parentObj$$607.audioJIT, parentObj$$607, []);
      var v5718 = parentObj$$607.channel2frequency;
      var v1186 = v5718 & 1792;
      parentObj$$607.channel2frequency = v1186 | data$$75;
      var v5719 = parentObj$$607.channel2frequency;
      var v1187 = 2048 - v5719;
      parentObj$$607.channel2FrequencyTracker = v1187 << 2;
      var v1188 = parentObj$$607.memory;
      v1188[65304] = data$$75
    }
    return
  }
  function v814(parentObj$$606, address$$100, data$$74) {
    var v1199 = parentObj$$606.soundMasterEnabled;
    if(v1199) {
      JAMScript.call(parentObj$$606.audioJIT, parentObj$$606, []);
      var v5720 = parentObj$$606.channel2Enabled;
      if(v5720) {
        var v8548 = parentObj$$606.channel2envelopeSweeps;
        v5720 = v8548 == 0
      }
      var v1196 = v5720;
      if(v1196) {
        var v10368 = parentObj$$606.memory;
        var v9777 = v10368[65303];
        var v8549 = v9777 ^ data$$74;
        var v5721 = v8549 & 8;
        var v1195 = v5721 == 8;
        if(v1195) {
          var v9778 = parentObj$$606.memory;
          var v8550 = v9778[65303];
          var v5722 = v8550 & 8;
          var v1191 = v5722 == 0;
          if(v1191) {
            var v9779 = parentObj$$606.memory;
            var v8551 = v9779[65303];
            var v5723 = v8551 & 7;
            var v1190 = v5723 == 7;
            if(v1190) {
              var v5724 = parentObj$$606.channel2envelopeVolume;
              parentObj$$606.channel2envelopeVolume = v5724 + 2
            }else {
              var v5725 = parentObj$$606.channel2envelopeVolume;
              parentObj$$606.channel2envelopeVolume = v5725 + 1
            }
          }
          var v5726 = parentObj$$606.channel2envelopeVolume;
          var v1192 = 16 - v5726;
          parentObj$$606.channel2envelopeVolume = v1192 & 15
        }else {
          var v9780 = parentObj$$606.memory;
          var v8552 = v9780[65303];
          var v5727 = v8552 & 15;
          var v1194 = v5727 == 8;
          if(v1194) {
            var v5728 = parentObj$$606.channel2envelopeVolume;
            var v1193 = 1 + v5728;
            parentObj$$606.channel2envelopeVolume = v1193 & 15
          }
        }
        JAMScript.call(parentObj$$606.channel2OutputLevelCache, parentObj$$606, [])
      }
      var v1197 = data$$74 & 8;
      parentObj$$606.channel2envelopeType = v1197 == 8;
      var v1198 = parentObj$$606.memory;
      v1198[65303] = data$$74;
      JAMScript.call(parentObj$$606.channel2VolumeEnableCheck, parentObj$$606, [])
    }
    return
  }
  function v813(parentObj$$605, address$$99, data$$73) {
    var v5729 = parentObj$$605.soundMasterEnabled;
    var v8554 = !v5729;
    if(v8554) {
      var v8553 = parentObj$$605.cGBC;
      v5729 = !v8553
    }
    var v1205 = v5729;
    if(v1205) {
      var v1200 = parentObj$$605.soundMasterEnabled;
      if(v1200) {
        JAMScript.call(parentObj$$605.audioJIT, parentObj$$605, [])
      }else {
        data$$73 = data$$73 & 63
      }
      var v1201 = parentObj$$605.dutyLookup;
      var v1202 = data$$73 >> 6;
      parentObj$$605.channel2CachedDuty = v1201[v1202];
      var v1203 = data$$73 & 63;
      parentObj$$605.channel2totalLength = 64 - v1203;
      var v1204 = parentObj$$605.memory;
      v1204[65302] = data$$73 & 192;
      JAMScript.call(parentObj$$605.channel2EnableCheck, parentObj$$605, [])
    }
    return
  }
  function v812(parentObj$$604, address$$98, data$$72) {
    var v1220 = parentObj$$604.soundMasterEnabled;
    if(v1220) {
      JAMScript.call(parentObj$$604.audioJIT, parentObj$$604, []);
      var v1206 = data$$72 & 64;
      parentObj$$604.channel1consecutive = v1206 == 0;
      var v5730 = data$$72 & 7;
      var v1207 = v5730 << 8;
      var v5731 = parentObj$$604.channel1frequency;
      var v1208 = v5731 & 255;
      parentObj$$604.channel1frequency = v1207 | v1208;
      var v5732 = parentObj$$604.channel1frequency;
      var v1209 = 2048 - v5732;
      parentObj$$604.channel1FrequencyTracker = v1209 << 2;
      var v1218 = data$$72 > 127;
      if(v1218) {
        parentObj$$604.channel1timeSweep = parentObj$$604.channel1lastTimeSweep;
        parentObj$$604.channel1numSweep = parentObj$$604.channel1frequencySweepDivider;
        var v1210 = parentObj$$604.memory;
        var nr12 = v1210[65298];
        parentObj$$604.channel1envelopeVolume = nr12 >> 4;
        JAMScript.call(parentObj$$604.channel1OutputLevelCache, parentObj$$604, []);
        var v1211 = nr12 & 7;
        parentObj$$604.channel1envelopeSweepsLast = v1211 - 1;
        var v5733 = parentObj$$604.channel1totalLength;
        var v1212 = v5733 == 0;
        if(v1212) {
          parentObj$$604.channel1totalLength = 64
        }
        var v8555 = parentObj$$604.channel1lastTimeSweep;
        var v5734 = v8555 > 0;
        var v8557 = !v5734;
        if(v8557) {
          var v8556 = parentObj$$604.channel1frequencySweepDivider;
          v5734 = v8556 > 0
        }
        var v1215 = v5734;
        if(v1215) {
          var v1213 = parentObj$$604.memory;
          var v8558 = v1213[65318];
          v1213[65318] = v8558 | 1
        }else {
          var v1214 = parentObj$$604.memory;
          var v8559 = v1214[65318];
          v1214[65318] = v8559 & 254
        }
        var v5735 = data$$72 & 64;
        var v1217 = v5735 == 64;
        if(v1217) {
          var v1216 = parentObj$$604.memory;
          var v8560 = v1216[65318];
          v1216[65318] = v8560 | 1
        }
        parentObj$$604.channel1ShadowFrequency = parentObj$$604.channel1frequency;
        parentObj$$604.channel1SweepFault = false;
        JAMScript.call(parentObj$$604.runAudioSweep, parentObj$$604, [])
      }
      JAMScript.call(parentObj$$604.channel1EnableCheck, parentObj$$604, []);
      var v1219 = parentObj$$604.memory;
      v1219[65300] = data$$72 & 64
    }
    return
  }
  function v811(parentObj$$603, address$$97, data$$71) {
    var v1224 = parentObj$$603.soundMasterEnabled;
    if(v1224) {
      JAMScript.call(parentObj$$603.audioJIT, parentObj$$603, []);
      var v5736 = parentObj$$603.channel1frequency;
      var v1221 = v5736 & 1792;
      parentObj$$603.channel1frequency = v1221 | data$$71;
      var v5737 = parentObj$$603.channel1frequency;
      var v1222 = 2048 - v5737;
      parentObj$$603.channel1FrequencyTracker = v1222 << 2;
      var v1223 = parentObj$$603.memory;
      v1223[65299] = data$$71
    }
    return
  }
  function v810(parentObj$$602, address$$96, data$$70) {
    var v1234 = parentObj$$602.soundMasterEnabled;
    if(v1234) {
      JAMScript.call(parentObj$$602.audioJIT, parentObj$$602, []);
      var v5738 = parentObj$$602.channel1Enabled;
      if(v5738) {
        var v8561 = parentObj$$602.channel1envelopeSweeps;
        v5738 = v8561 == 0
      }
      var v1231 = v5738;
      if(v1231) {
        var v10369 = parentObj$$602.memory;
        var v9781 = v10369[65298];
        var v8562 = v9781 ^ data$$70;
        var v5739 = v8562 & 8;
        var v1230 = v5739 == 8;
        if(v1230) {
          var v9782 = parentObj$$602.memory;
          var v8563 = v9782[65298];
          var v5740 = v8563 & 8;
          var v1226 = v5740 == 0;
          if(v1226) {
            var v9783 = parentObj$$602.memory;
            var v8564 = v9783[65298];
            var v5741 = v8564 & 7;
            var v1225 = v5741 == 7;
            if(v1225) {
              var v5742 = parentObj$$602.channel1envelopeVolume;
              parentObj$$602.channel1envelopeVolume = v5742 + 2
            }else {
              var v5743 = parentObj$$602.channel1envelopeVolume;
              parentObj$$602.channel1envelopeVolume = v5743 + 1
            }
          }
          var v5744 = parentObj$$602.channel1envelopeVolume;
          var v1227 = 16 - v5744;
          parentObj$$602.channel1envelopeVolume = v1227 & 15
        }else {
          var v9784 = parentObj$$602.memory;
          var v8565 = v9784[65298];
          var v5745 = v8565 & 15;
          var v1229 = v5745 == 8;
          if(v1229) {
            var v5746 = parentObj$$602.channel1envelopeVolume;
            var v1228 = 1 + v5746;
            parentObj$$602.channel1envelopeVolume = v1228 & 15
          }
        }
        JAMScript.call(parentObj$$602.channel1OutputLevelCache, parentObj$$602, [])
      }
      var v1232 = data$$70 & 8;
      parentObj$$602.channel1envelopeType = v1232 == 8;
      var v1233 = parentObj$$602.memory;
      v1233[65298] = data$$70;
      JAMScript.call(parentObj$$602.channel1VolumeEnableCheck, parentObj$$602, [])
    }
    return
  }
  function v809(parentObj$$601, address$$95, data$$69) {
    var v5747 = parentObj$$601.soundMasterEnabled;
    var v8567 = !v5747;
    if(v8567) {
      var v8566 = parentObj$$601.cGBC;
      v5747 = !v8566
    }
    var v1240 = v5747;
    if(v1240) {
      var v1235 = parentObj$$601.soundMasterEnabled;
      if(v1235) {
        JAMScript.call(parentObj$$601.audioJIT, parentObj$$601, [])
      }else {
        data$$69 = data$$69 & 63
      }
      var v1236 = parentObj$$601.dutyLookup;
      var v1237 = data$$69 >> 6;
      parentObj$$601.channel1CachedDuty = v1236[v1237];
      var v1238 = data$$69 & 63;
      parentObj$$601.channel1totalLength = 64 - v1238;
      var v1239 = parentObj$$601.memory;
      v1239[65297] = data$$69 & 192;
      JAMScript.call(parentObj$$601.channel1EnableCheck, parentObj$$601, [])
    }
    return
  }
  function v808(parentObj$$600, address$$94, data$$68) {
    var v1246 = parentObj$$600.soundMasterEnabled;
    if(v1246) {
      JAMScript.call(parentObj$$600.audioJIT, parentObj$$600, []);
      var v5748 = parentObj$$600.channel1decreaseSweep;
      if(v5748) {
        var v8568 = data$$68 & 8;
        v5748 = v8568 == 0
      }
      var v1242 = v5748;
      if(v1242) {
        var v5749 = parentObj$$600.channel1numSweep;
        var v5750 = parentObj$$600.channel1frequencySweepDivider;
        var v1241 = v5749 != v5750;
        if(v1241) {
          parentObj$$600.channel1SweepFault = true
        }
      }
      var v1243 = data$$68 & 112;
      parentObj$$600.channel1lastTimeSweep = v1243 >> 4;
      parentObj$$600.channel1frequencySweepDivider = data$$68 & 7;
      var v1244 = data$$68 & 8;
      parentObj$$600.channel1decreaseSweep = v1244 == 8;
      var v1245 = parentObj$$600.memory;
      v1245[65296] = data$$68;
      JAMScript.call(parentObj$$600.channel1EnableCheck, parentObj$$600, [])
    }
    return
  }
  function v807(parentObj$$599, address$$93, data$$67) {
    parentObj$$599.interruptsRequested = data$$67;
    JAMScript.call(parentObj$$599.checkIRQMatching, parentObj$$599, []);
    return
  }
  function v806(parentObj$$598, address$$92, data$$66) {
    var v1247 = parentObj$$598.memory;
    v1247[65287] = data$$66 & 7;
    var v1248 = data$$66 & 4;
    parentObj$$598.TIMAEnabled = v1248 == 4;
    var v1249 = parentObj$$598;
    var v9785;
    var v10587 = data$$66 & 3;
    var v10370 = v10587 != 0;
    if(v10370) {
      v9785 = data$$66 & 3
    }else {
      v9785 = 4
    }
    var v8569 = v9785;
    var v5751 = Math.pow(4, v8569);
    v1249.TACClocker = v5751 << 2;
    return
  }
  function v805(parentObj$$597, address$$91, data$$65) {
    var v1250 = parentObj$$597.memory;
    v1250[65286] = data$$65;
    return
  }
  function v804(parentObj$$596, address$$90, data$$64) {
    var v1251 = parentObj$$596.memory;
    v1251[65285] = data$$64;
    return
  }
  function v803(parentObj$$595, address$$89, data$$63) {
    var v5752 = parentObj$$595.DIVTicks;
    parentObj$$595.DIVTicks = v5752 & 255;
    var v1252 = parentObj$$595.memory;
    v1252[65284] = 0;
    return
  }
  function v802(parentObj$$594, address$$88, data$$62) {
    var v8570 = parentObj$$594.memory;
    var v5753 = v8570[65282];
    var v1254 = v5753 < 128;
    if(v1254) {
      var v1253 = parentObj$$594.memory;
      v1253[65281] = data$$62
    }
    return
  }
  function v801(parentObj$$593, address$$87, data$$61) {
    var v1255 = parentObj$$593.memory;
    var v5754 = data$$61 & 48;
    var v9786;
    var v10588 = data$$61 & 32;
    var v10372 = v10588 == 0;
    if(v10372) {
      var v10371 = parentObj$$593.JoyPad;
      v9786 = v10371 >> 4
    }else {
      v9786 = 15
    }
    var v8571 = v9786;
    var v9787;
    var v10589 = data$$61 & 16;
    var v10374 = v10589 == 0;
    if(v10374) {
      var v10373 = parentObj$$593.JoyPad;
      v9787 = v10373 & 15
    }else {
      v9787 = 15
    }
    var v8572 = v9787;
    var v5755 = v8571 & v8572;
    v1255[65280] = v5754 | v5755;
    return
  }
  var v1256 = this.memoryHighWriter;
  var v5756 = this.memoryWriter;
  v1256[0] = v5756[65280] = v801;
  var v1257 = this.memoryHighWriter;
  var v5757 = this.memoryWriter;
  v1257[1] = v5757[65281] = v802;
  var v1258 = this.memoryHighWriter;
  var v5758 = this.memoryWriter;
  v1258[4] = v5758[65284] = v803;
  var v1259 = this.memoryHighWriter;
  var v5759 = this.memoryWriter;
  v1259[5] = v5759[65285] = v804;
  var v1260 = this.memoryHighWriter;
  var v5760 = this.memoryWriter;
  v1260[6] = v5760[65286] = v805;
  var v1261 = this.memoryHighWriter;
  var v5761 = this.memoryWriter;
  v1261[7] = v5761[65287] = v806;
  var v1262 = this.memoryHighWriter;
  var v5762 = this.memoryWriter;
  v1262[15] = v5762[65295] = v807;
  var v1263 = this.memoryHighWriter;
  var v5763 = this.memoryWriter;
  v1263[16] = v5763[65296] = v808;
  var v1264 = this.memoryHighWriter;
  var v5764 = this.memoryWriter;
  v1264[17] = v5764[65297] = v809;
  var v1265 = this.memoryHighWriter;
  var v5765 = this.memoryWriter;
  v1265[18] = v5765[65298] = v810;
  var v1266 = this.memoryHighWriter;
  var v5766 = this.memoryWriter;
  v1266[19] = v5766[65299] = v811;
  var v1267 = this.memoryHighWriter;
  var v5767 = this.memoryWriter;
  v1267[20] = v5767[65300] = v812;
  var v1268 = this.memoryHighWriter;
  var v5768 = this.memoryWriter;
  v1268[22] = v5768[65302] = v813;
  var v1269 = this.memoryHighWriter;
  var v5769 = this.memoryWriter;
  v1269[23] = v5769[65303] = v814;
  var v1270 = this.memoryHighWriter;
  var v5770 = this.memoryWriter;
  v1270[24] = v5770[65304] = v815;
  var v1271 = this.memoryHighWriter;
  var v5771 = this.memoryWriter;
  v1271[25] = v5771[65305] = v816;
  var v1272 = this.memoryHighWriter;
  var v5772 = this.memoryWriter;
  v1272[26] = v5772[65306] = v817;
  var v1273 = this.memoryHighWriter;
  var v5773 = this.memoryWriter;
  v1273[27] = v5773[65307] = v818;
  var v1274 = this.memoryHighWriter;
  var v5774 = this.memoryWriter;
  v1274[28] = v5774[65308] = v819;
  var v1275 = this.memoryHighWriter;
  var v5775 = this.memoryWriter;
  v1275[29] = v5775[65309] = v820;
  var v1276 = this.memoryHighWriter;
  var v5776 = this.memoryWriter;
  v1276[30] = v5776[65310] = v821;
  var v1277 = this.memoryHighWriter;
  var v5777 = this.memoryWriter;
  v1277[32] = v5777[65312] = v822;
  var v1278 = this.memoryHighWriter;
  var v5778 = this.memoryWriter;
  v1278[33] = v5778[65313] = v823;
  var v1279 = this.memoryHighWriter;
  var v5779 = this.memoryWriter;
  v1279[34] = v5779[65314] = v824;
  var v1280 = this.memoryHighWriter;
  var v5780 = this.memoryWriter;
  v1280[35] = v5780[65315] = v825;
  var v1281 = this.memoryHighWriter;
  var v5781 = this.memoryWriter;
  v1281[36] = v5781[65316] = v826;
  var v1282 = this.memoryHighWriter;
  var v5782 = this.memoryWriter;
  v1282[37] = v5782[65317] = v827;
  var v1283 = this.memoryHighWriter;
  var v5783 = this.memoryWriter;
  v1283[38] = v5783[65318] = v828;
  var v1284 = this.memoryHighWriter;
  var v5784 = this.memoryWriter;
  v1284[39] = v5784[65319] = this.cartIgnoreWrite;
  var v1285 = this.memoryHighWriter;
  var v5785 = this.memoryWriter;
  v1285[40] = v5785[65320] = this.cartIgnoreWrite;
  var v1286 = this.memoryHighWriter;
  var v5786 = this.memoryWriter;
  v1286[41] = v5786[65321] = this.cartIgnoreWrite;
  var v1287 = this.memoryHighWriter;
  var v5787 = this.memoryWriter;
  v1287[42] = v5787[65322] = this.cartIgnoreWrite;
  var v1288 = this.memoryHighWriter;
  var v5788 = this.memoryWriter;
  v1288[43] = v5788[65323] = this.cartIgnoreWrite;
  var v1289 = this.memoryHighWriter;
  var v5789 = this.memoryWriter;
  v1289[44] = v5789[65324] = this.cartIgnoreWrite;
  var v1290 = this.memoryHighWriter;
  var v5790 = this.memoryWriter;
  v1290[45] = v5790[65325] = this.cartIgnoreWrite;
  var v1291 = this.memoryHighWriter;
  var v5791 = this.memoryWriter;
  v1291[46] = v5791[65326] = this.cartIgnoreWrite;
  var v1292 = this.memoryHighWriter;
  var v5792 = this.memoryWriter;
  v1292[47] = v5792[65327] = this.cartIgnoreWrite;
  var v1293 = this.memoryHighWriter;
  var v5793 = this.memoryWriter;
  v1293[48] = v5793[65328] = v829;
  var v1294 = this.memoryHighWriter;
  var v5794 = this.memoryWriter;
  v1294[49] = v5794[65329] = v830;
  var v1295 = this.memoryHighWriter;
  var v5795 = this.memoryWriter;
  v1295[50] = v5795[65330] = v831;
  var v1296 = this.memoryHighWriter;
  var v5796 = this.memoryWriter;
  v1296[51] = v5796[65331] = v832;
  var v1297 = this.memoryHighWriter;
  var v5797 = this.memoryWriter;
  v1297[52] = v5797[65332] = v833;
  var v1298 = this.memoryHighWriter;
  var v5798 = this.memoryWriter;
  v1298[53] = v5798[65333] = v834;
  var v1299 = this.memoryHighWriter;
  var v5799 = this.memoryWriter;
  v1299[54] = v5799[65334] = v835;
  var v1300 = this.memoryHighWriter;
  var v5800 = this.memoryWriter;
  v1300[55] = v5800[65335] = v836;
  var v1301 = this.memoryHighWriter;
  var v5801 = this.memoryWriter;
  v1301[56] = v5801[65336] = v837;
  var v1302 = this.memoryHighWriter;
  var v5802 = this.memoryWriter;
  v1302[57] = v5802[65337] = v838;
  var v1303 = this.memoryHighWriter;
  var v5803 = this.memoryWriter;
  v1303[58] = v5803[65338] = v839;
  var v1304 = this.memoryHighWriter;
  var v5804 = this.memoryWriter;
  v1304[59] = v5804[65339] = v840;
  var v1305 = this.memoryHighWriter;
  var v5805 = this.memoryWriter;
  v1305[60] = v5805[65340] = v841;
  var v1306 = this.memoryHighWriter;
  var v5806 = this.memoryWriter;
  v1306[61] = v5806[65341] = v842;
  var v1307 = this.memoryHighWriter;
  var v5807 = this.memoryWriter;
  v1307[62] = v5807[65342] = v843;
  var v1308 = this.memoryHighWriter;
  var v5808 = this.memoryWriter;
  v1308[63] = v5808[65343] = v844;
  var v1309 = this.memoryHighWriter;
  var v5809 = this.memoryWriter;
  v1309[66] = v5809[65346] = v845;
  var v1310 = this.memoryHighWriter;
  var v5810 = this.memoryWriter;
  v1310[67] = v5810[65347] = v846;
  var v1311 = this.memoryHighWriter;
  var v5811 = this.memoryWriter;
  v1311[68] = v5811[65348] = v847;
  var v1312 = this.memoryHighWriter;
  var v5812 = this.memoryWriter;
  v1312[69] = v5812[65349] = v848;
  var v1313 = this.memoryHighWriter;
  var v5813 = this.memoryWriter;
  v1313[74] = v5813[65354] = v849;
  var v1314 = this.memoryHighWriter;
  var v5814 = this.memoryWriter;
  v1314[75] = v5814[65355] = v850;
  var v1315 = this.memoryHighWriter;
  var v5815 = this.memoryWriter;
  v1315[114] = v5815[65394] = v851;
  var v1316 = this.memoryHighWriter;
  var v5816 = this.memoryWriter;
  v1316[115] = v5816[65395] = v852;
  var v1317 = this.memoryHighWriter;
  var v5817 = this.memoryWriter;
  v1317[117] = v5817[65397] = v853;
  var v1318 = this.memoryHighWriter;
  var v5818 = this.memoryWriter;
  v1318[118] = v5818[65398] = this.cartIgnoreWrite;
  var v1319 = this.memoryHighWriter;
  var v5819 = this.memoryWriter;
  v1319[119] = v5819[65399] = this.cartIgnoreWrite;
  var v1320 = this.memoryHighWriter;
  var v5820 = this.memoryWriter;
  v1320[255] = v5820[65535] = v854;
  JAMScript.call(this.recompileModelSpecificIOWriteHandling, this, []);
  JAMScript.call(this.recompileBootIOWriteHandling, this, []);
  return
}
function v800(tilesToTransfer) {
  var v5821 = this.halt;
  var v1321 = !v5821;
  if(v1321) {
    var v5822 = this.CPUTicks;
    var v9788 = tilesToTransfer << 5;
    var v9789 = this.doubleSpeedShifter;
    var v8573 = v9788 << v9789;
    var v5823 = 4 | v8573;
    this.CPUTicks = v5822 + v5823
  }
  var v8574 = this.memory;
  var v5824 = v8574[65361];
  var v1322 = v5824 << 8;
  var v5825 = this.memory;
  var v1323 = v5825[65362];
  var source$$1 = v1322 | v1323;
  var v8575 = this.memory;
  var v5826 = v8575[65363];
  var v1324 = v5826 << 8;
  var v5827 = this.memory;
  var v1325 = v5827[65364];
  var destination = v1324 | v1325;
  var memoryReader = this.memoryReader;
  JAMScript.call(this.graphicsJIT, this, []);
  var memory = this.memory;
  var v5828 = this.currVRAMBank;
  var v1460 = v5828 == 0;
  if(v1460) {
    var v1392 = tilesToTransfer > 0;
    do {
      var v1391 = destination < 6144;
      if(v1391) {
        var v1326 = memory;
        var v1327 = 32768 | destination;
        var v5829 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11004 = [[this, v5829], memoryReader, memoryReader[source$$1]]
        }
        var v10781 = JAMScript.call(v11004[2], v11004[1], v11004[0]);
        v1326[v1327] = v10781;
        var v1328 = memory;
        var v1329 = 32769 | destination;
        var v5830 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11005 = [[this, v5830], memoryReader, memoryReader[source$$1]]
        }
        var v10782 = JAMScript.call(v11005[2], v11005[1], v11005[0]);
        v1328[v1329] = v10782;
        var v1330 = memory;
        var v1331 = 32770 | destination;
        var v5831 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11006 = [[this, v5831], memoryReader, memoryReader[source$$1]]
        }
        var v10783 = JAMScript.call(v11006[2], v11006[1], v11006[0]);
        v1330[v1331] = v10783;
        var v1332 = memory;
        var v1333 = 32771 | destination;
        var v5832 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11007 = [[this, v5832], memoryReader, memoryReader[source$$1]]
        }
        var v10784 = JAMScript.call(v11007[2], v11007[1], v11007[0]);
        v1332[v1333] = v10784;
        var v1334 = memory;
        var v1335 = 32772 | destination;
        var v5833 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11008 = [[this, v5833], memoryReader, memoryReader[source$$1]]
        }
        var v10785 = JAMScript.call(v11008[2], v11008[1], v11008[0]);
        v1334[v1335] = v10785;
        var v1336 = memory;
        var v1337 = 32773 | destination;
        var v5834 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11009 = [[this, v5834], memoryReader, memoryReader[source$$1]]
        }
        var v10786 = JAMScript.call(v11009[2], v11009[1], v11009[0]);
        v1336[v1337] = v10786;
        var v1338 = memory;
        var v1339 = 32774 | destination;
        var v5835 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11010 = [[this, v5835], memoryReader, memoryReader[source$$1]]
        }
        var v10787 = JAMScript.call(v11010[2], v11010[1], v11010[0]);
        v1338[v1339] = v10787;
        var v1340 = memory;
        var v1341 = 32775 | destination;
        var v5836 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11011 = [[this, v5836], memoryReader, memoryReader[source$$1]]
        }
        var v10788 = JAMScript.call(v11011[2], v11011[1], v11011[0]);
        v1340[v1341] = v10788;
        var v1342 = memory;
        var v1343 = 32776 | destination;
        var v5837 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11012 = [[this, v5837], memoryReader, memoryReader[source$$1]]
        }
        var v10789 = JAMScript.call(v11012[2], v11012[1], v11012[0]);
        v1342[v1343] = v10789;
        var v1344 = memory;
        var v1345 = 32777 | destination;
        var v5838 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11013 = [[this, v5838], memoryReader, memoryReader[source$$1]]
        }
        var v10790 = JAMScript.call(v11013[2], v11013[1], v11013[0]);
        v1344[v1345] = v10790;
        var v1346 = memory;
        var v1347 = 32778 | destination;
        var v5839 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11014 = [[this, v5839], memoryReader, memoryReader[source$$1]]
        }
        var v10791 = JAMScript.call(v11014[2], v11014[1], v11014[0]);
        v1346[v1347] = v10791;
        var v1348 = memory;
        var v1349 = 32779 | destination;
        var v5840 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11015 = [[this, v5840], memoryReader, memoryReader[source$$1]]
        }
        var v10792 = JAMScript.call(v11015[2], v11015[1], v11015[0]);
        v1348[v1349] = v10792;
        var v1350 = memory;
        var v1351 = 32780 | destination;
        var v5841 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11016 = [[this, v5841], memoryReader, memoryReader[source$$1]]
        }
        var v10793 = JAMScript.call(v11016[2], v11016[1], v11016[0]);
        v1350[v1351] = v10793;
        var v1352 = memory;
        var v1353 = 32781 | destination;
        var v5842 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11017 = [[this, v5842], memoryReader, memoryReader[source$$1]]
        }
        var v10794 = JAMScript.call(v11017[2], v11017[1], v11017[0]);
        v1352[v1353] = v10794;
        var v1354 = memory;
        var v1355 = 32782 | destination;
        var v5843 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11018 = [[this, v5843], memoryReader, memoryReader[source$$1]]
        }
        var v10795 = JAMScript.call(v11018[2], v11018[1], v11018[0]);
        v1354[v1355] = v10795;
        var v1356 = memory;
        var v1357 = 32783 | destination;
        var v5844 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11019 = [[this, v5844], memoryReader, memoryReader[source$$1]]
        }
        var v10796 = JAMScript.call(v11019[2], v11019[1], v11019[0]);
        v1356[v1357] = v10796;
        JAMScript.call(this.generateGBCTileBank1, this, [destination]);
        destination = destination + 16
      }else {
        destination = destination & 2032;
        var v1358 = this.BGCHRBank1;
        var v1359 = destination;
        destination = destination + 1;
        var v5845 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11020 = [[this, v5845], memoryReader, memoryReader[source$$1]]
        }
        var v10797 = JAMScript.call(v11020[2], v11020[1], v11020[0]);
        v1358[v1359] = v10797;
        var v1360 = this.BGCHRBank1;
        var v1361 = destination;
        destination = destination + 1;
        var v5846 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11021 = [[this, v5846], memoryReader, memoryReader[source$$1]]
        }
        var v10798 = JAMScript.call(v11021[2], v11021[1], v11021[0]);
        v1360[v1361] = v10798;
        var v1362 = this.BGCHRBank1;
        var v1363 = destination;
        destination = destination + 1;
        var v5847 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11022 = [[this, v5847], memoryReader, memoryReader[source$$1]]
        }
        var v10799 = JAMScript.call(v11022[2], v11022[1], v11022[0]);
        v1362[v1363] = v10799;
        var v1364 = this.BGCHRBank1;
        var v1365 = destination;
        destination = destination + 1;
        var v5848 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11023 = [[this, v5848], memoryReader, memoryReader[source$$1]]
        }
        var v10800 = JAMScript.call(v11023[2], v11023[1], v11023[0]);
        v1364[v1365] = v10800;
        var v1366 = this.BGCHRBank1;
        var v1367 = destination;
        destination = destination + 1;
        var v5849 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11024 = [[this, v5849], memoryReader, memoryReader[source$$1]]
        }
        var v10801 = JAMScript.call(v11024[2], v11024[1], v11024[0]);
        v1366[v1367] = v10801;
        var v1368 = this.BGCHRBank1;
        var v1369 = destination;
        destination = destination + 1;
        var v5850 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11025 = [[this, v5850], memoryReader, memoryReader[source$$1]]
        }
        var v10802 = JAMScript.call(v11025[2], v11025[1], v11025[0]);
        v1368[v1369] = v10802;
        var v1370 = this.BGCHRBank1;
        var v1371 = destination;
        destination = destination + 1;
        var v5851 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11026 = [[this, v5851], memoryReader, memoryReader[source$$1]]
        }
        var v10803 = JAMScript.call(v11026[2], v11026[1], v11026[0]);
        v1370[v1371] = v10803;
        var v1372 = this.BGCHRBank1;
        var v1373 = destination;
        destination = destination + 1;
        var v5852 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11027 = [[this, v5852], memoryReader, memoryReader[source$$1]]
        }
        var v10804 = JAMScript.call(v11027[2], v11027[1], v11027[0]);
        v1372[v1373] = v10804;
        var v1374 = this.BGCHRBank1;
        var v1375 = destination;
        destination = destination + 1;
        var v5853 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11028 = [[this, v5853], memoryReader, memoryReader[source$$1]]
        }
        var v10805 = JAMScript.call(v11028[2], v11028[1], v11028[0]);
        v1374[v1375] = v10805;
        var v1376 = this.BGCHRBank1;
        var v1377 = destination;
        destination = destination + 1;
        var v5854 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11029 = [[this, v5854], memoryReader, memoryReader[source$$1]]
        }
        var v10806 = JAMScript.call(v11029[2], v11029[1], v11029[0]);
        v1376[v1377] = v10806;
        var v1378 = this.BGCHRBank1;
        var v1379 = destination;
        destination = destination + 1;
        var v5855 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11030 = [[this, v5855], memoryReader, memoryReader[source$$1]]
        }
        var v10807 = JAMScript.call(v11030[2], v11030[1], v11030[0]);
        v1378[v1379] = v10807;
        var v1380 = this.BGCHRBank1;
        var v1381 = destination;
        destination = destination + 1;
        var v5856 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11031 = [[this, v5856], memoryReader, memoryReader[source$$1]]
        }
        var v10808 = JAMScript.call(v11031[2], v11031[1], v11031[0]);
        v1380[v1381] = v10808;
        var v1382 = this.BGCHRBank1;
        var v1383 = destination;
        destination = destination + 1;
        var v5857 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11032 = [[this, v5857], memoryReader, memoryReader[source$$1]]
        }
        var v10809 = JAMScript.call(v11032[2], v11032[1], v11032[0]);
        v1382[v1383] = v10809;
        var v1384 = this.BGCHRBank1;
        var v1385 = destination;
        destination = destination + 1;
        var v5858 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11033 = [[this, v5858], memoryReader, memoryReader[source$$1]]
        }
        var v10810 = JAMScript.call(v11033[2], v11033[1], v11033[0]);
        v1384[v1385] = v10810;
        var v1386 = this.BGCHRBank1;
        var v1387 = destination;
        destination = destination + 1;
        var v5859 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11034 = [[this, v5859], memoryReader, memoryReader[source$$1]]
        }
        var v10811 = JAMScript.call(v11034[2], v11034[1], v11034[0]);
        v1386[v1387] = v10811;
        var v1388 = this.BGCHRBank1;
        var v1389 = destination;
        destination = destination + 1;
        var v5860 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11035 = [[this, v5860], memoryReader, memoryReader[source$$1]]
        }
        var v10812 = JAMScript.call(v11035[2], v11035[1], v11035[0]);
        v1388[v1389] = v10812;
        var v1390 = destination + 6144;
        destination = v1390 & 8176
      }
      source$$1 = source$$1 & 65520;
      tilesToTransfer = tilesToTransfer - 1;
      v1392 = tilesToTransfer > 0
    }while(v1392)
  }else {
    var VRAM = this.VRAM;
    var v1459 = tilesToTransfer > 0;
    do {
      var v1458 = destination < 6144;
      if(v1458) {
        var v1393 = VRAM;
        var v1394 = destination;
        var v5861 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11036 = [[this, v5861], memoryReader, memoryReader[source$$1]]
        }
        var v10813 = JAMScript.call(v11036[2], v11036[1], v11036[0]);
        v1393[v1394] = v10813;
        var v1395 = VRAM;
        var v1396 = destination | 1;
        var v5862 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11037 = [[this, v5862], memoryReader, memoryReader[source$$1]]
        }
        var v10814 = JAMScript.call(v11037[2], v11037[1], v11037[0]);
        v1395[v1396] = v10814;
        var v1397 = VRAM;
        var v1398 = destination | 2;
        var v5863 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11038 = [[this, v5863], memoryReader, memoryReader[source$$1]]
        }
        var v10815 = JAMScript.call(v11038[2], v11038[1], v11038[0]);
        v1397[v1398] = v10815;
        var v1399 = VRAM;
        var v1400 = destination | 3;
        var v5864 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11039 = [[this, v5864], memoryReader, memoryReader[source$$1]]
        }
        var v10816 = JAMScript.call(v11039[2], v11039[1], v11039[0]);
        v1399[v1400] = v10816;
        var v1401 = VRAM;
        var v1402 = destination | 4;
        var v5865 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11040 = [[this, v5865], memoryReader, memoryReader[source$$1]]
        }
        var v10817 = JAMScript.call(v11040[2], v11040[1], v11040[0]);
        v1401[v1402] = v10817;
        var v1403 = VRAM;
        var v1404 = destination | 5;
        var v5866 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11041 = [[this, v5866], memoryReader, memoryReader[source$$1]]
        }
        var v10818 = JAMScript.call(v11041[2], v11041[1], v11041[0]);
        v1403[v1404] = v10818;
        var v1405 = VRAM;
        var v1406 = destination | 6;
        var v5867 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11042 = [[this, v5867], memoryReader, memoryReader[source$$1]]
        }
        var v10819 = JAMScript.call(v11042[2], v11042[1], v11042[0]);
        v1405[v1406] = v10819;
        var v1407 = VRAM;
        var v1408 = destination | 7;
        var v5868 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11043 = [[this, v5868], memoryReader, memoryReader[source$$1]]
        }
        var v10820 = JAMScript.call(v11043[2], v11043[1], v11043[0]);
        v1407[v1408] = v10820;
        var v1409 = VRAM;
        var v1410 = destination | 8;
        var v5869 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11044 = [[this, v5869], memoryReader, memoryReader[source$$1]]
        }
        var v10821 = JAMScript.call(v11044[2], v11044[1], v11044[0]);
        v1409[v1410] = v10821;
        var v1411 = VRAM;
        var v1412 = destination | 9;
        var v5870 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11045 = [[this, v5870], memoryReader, memoryReader[source$$1]]
        }
        var v10822 = JAMScript.call(v11045[2], v11045[1], v11045[0]);
        v1411[v1412] = v10822;
        var v1413 = VRAM;
        var v1414 = destination | 10;
        var v5871 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11046 = [[this, v5871], memoryReader, memoryReader[source$$1]]
        }
        var v10823 = JAMScript.call(v11046[2], v11046[1], v11046[0]);
        v1413[v1414] = v10823;
        var v1415 = VRAM;
        var v1416 = destination | 11;
        var v5872 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11047 = [[this, v5872], memoryReader, memoryReader[source$$1]]
        }
        var v10824 = JAMScript.call(v11047[2], v11047[1], v11047[0]);
        v1415[v1416] = v10824;
        var v1417 = VRAM;
        var v1418 = destination | 12;
        var v5873 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11048 = [[this, v5873], memoryReader, memoryReader[source$$1]]
        }
        var v10825 = JAMScript.call(v11048[2], v11048[1], v11048[0]);
        v1417[v1418] = v10825;
        var v1419 = VRAM;
        var v1420 = destination | 13;
        var v5874 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11049 = [[this, v5874], memoryReader, memoryReader[source$$1]]
        }
        var v10826 = JAMScript.call(v11049[2], v11049[1], v11049[0]);
        v1419[v1420] = v10826;
        var v1421 = VRAM;
        var v1422 = destination | 14;
        var v5875 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11050 = [[this, v5875], memoryReader, memoryReader[source$$1]]
        }
        var v10827 = JAMScript.call(v11050[2], v11050[1], v11050[0]);
        v1421[v1422] = v10827;
        var v1423 = VRAM;
        var v1424 = destination | 15;
        var v5876 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11051 = [[this, v5876], memoryReader, memoryReader[source$$1]]
        }
        var v10828 = JAMScript.call(v11051[2], v11051[1], v11051[0]);
        v1423[v1424] = v10828;
        JAMScript.call(this.generateGBCTileBank2, this, [destination]);
        destination = destination + 16
      }else {
        destination = destination & 2032;
        var v1425 = this.BGCHRBank2;
        var v1426 = destination;
        destination = destination + 1;
        var v5877 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11052 = [[this, v5877], memoryReader, memoryReader[source$$1]]
        }
        var v10829 = JAMScript.call(v11052[2], v11052[1], v11052[0]);
        v1425[v1426] = v10829;
        var v1427 = this.BGCHRBank2;
        var v1428 = destination;
        destination = destination + 1;
        var v5878 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11053 = [[this, v5878], memoryReader, memoryReader[source$$1]]
        }
        var v10830 = JAMScript.call(v11053[2], v11053[1], v11053[0]);
        v1427[v1428] = v10830;
        var v1429 = this.BGCHRBank2;
        var v1430 = destination;
        destination = destination + 1;
        var v5879 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11054 = [[this, v5879], memoryReader, memoryReader[source$$1]]
        }
        var v10831 = JAMScript.call(v11054[2], v11054[1], v11054[0]);
        v1429[v1430] = v10831;
        var v1431 = this.BGCHRBank2;
        var v1432 = destination;
        destination = destination + 1;
        var v5880 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11055 = [[this, v5880], memoryReader, memoryReader[source$$1]]
        }
        var v10832 = JAMScript.call(v11055[2], v11055[1], v11055[0]);
        v1431[v1432] = v10832;
        var v1433 = this.BGCHRBank2;
        var v1434 = destination;
        destination = destination + 1;
        var v5881 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11056 = [[this, v5881], memoryReader, memoryReader[source$$1]]
        }
        var v10833 = JAMScript.call(v11056[2], v11056[1], v11056[0]);
        v1433[v1434] = v10833;
        var v1435 = this.BGCHRBank2;
        var v1436 = destination;
        destination = destination + 1;
        var v5882 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11057 = [[this, v5882], memoryReader, memoryReader[source$$1]]
        }
        var v10834 = JAMScript.call(v11057[2], v11057[1], v11057[0]);
        v1435[v1436] = v10834;
        var v1437 = this.BGCHRBank2;
        var v1438 = destination;
        destination = destination + 1;
        var v5883 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11058 = [[this, v5883], memoryReader, memoryReader[source$$1]]
        }
        var v10835 = JAMScript.call(v11058[2], v11058[1], v11058[0]);
        v1437[v1438] = v10835;
        var v1439 = this.BGCHRBank2;
        var v1440 = destination;
        destination = destination + 1;
        var v5884 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11059 = [[this, v5884], memoryReader, memoryReader[source$$1]]
        }
        var v10836 = JAMScript.call(v11059[2], v11059[1], v11059[0]);
        v1439[v1440] = v10836;
        var v1441 = this.BGCHRBank2;
        var v1442 = destination;
        destination = destination + 1;
        var v5885 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11060 = [[this, v5885], memoryReader, memoryReader[source$$1]]
        }
        var v10837 = JAMScript.call(v11060[2], v11060[1], v11060[0]);
        v1441[v1442] = v10837;
        var v1443 = this.BGCHRBank2;
        var v1444 = destination;
        destination = destination + 1;
        var v5886 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11061 = [[this, v5886], memoryReader, memoryReader[source$$1]]
        }
        var v10838 = JAMScript.call(v11061[2], v11061[1], v11061[0]);
        v1443[v1444] = v10838;
        var v1445 = this.BGCHRBank2;
        var v1446 = destination;
        destination = destination + 1;
        var v5887 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11062 = [[this, v5887], memoryReader, memoryReader[source$$1]]
        }
        var v10839 = JAMScript.call(v11062[2], v11062[1], v11062[0]);
        v1445[v1446] = v10839;
        var v1447 = this.BGCHRBank2;
        var v1448 = destination;
        destination = destination + 1;
        var v5888 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11063 = [[this, v5888], memoryReader, memoryReader[source$$1]]
        }
        var v10840 = JAMScript.call(v11063[2], v11063[1], v11063[0]);
        v1447[v1448] = v10840;
        var v1449 = this.BGCHRBank2;
        var v1450 = destination;
        destination = destination + 1;
        var v5889 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11064 = [[this, v5889], memoryReader, memoryReader[source$$1]]
        }
        var v10841 = JAMScript.call(v11064[2], v11064[1], v11064[0]);
        v1449[v1450] = v10841;
        var v1451 = this.BGCHRBank2;
        var v1452 = destination;
        destination = destination + 1;
        var v5890 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11065 = [[this, v5890], memoryReader, memoryReader[source$$1]]
        }
        var v10842 = JAMScript.call(v11065[2], v11065[1], v11065[0]);
        v1451[v1452] = v10842;
        var v1453 = this.BGCHRBank2;
        var v1454 = destination;
        destination = destination + 1;
        var v5891 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11066 = [[this, v5891], memoryReader, memoryReader[source$$1]]
        }
        var v10843 = JAMScript.call(v11066[2], v11066[1], v11066[0]);
        v1453[v1454] = v10843;
        var v1455 = this.BGCHRBank2;
        var v1456 = destination;
        destination = destination + 1;
        var v5892 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11067 = [[this, v5892], memoryReader, memoryReader[source$$1]]
        }
        var v10844 = JAMScript.call(v11067[2], v11067[1], v11067[0]);
        v1455[v1456] = v10844;
        var v1457 = destination + 6144;
        destination = v1457 & 8176
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
  var v5893 = parentObj$$592.modeSTAT;
  var v1463 = v5893 < 3;
  if(v1463) {
    address$$86 = address$$86 & 2047;
    var v8576 = parentObj$$592.BGCHRCurrentBank;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v5894 = v8576[address$$86]
    }
    var v1462 = v5894 != data$$60;
    if(v1462) {
      JAMScript.call(parentObj$$592.graphicsJIT, parentObj$$592, []);
      var v1461 = parentObj$$592.BGCHRCurrentBank;
      JAMScript.set(v1461, address$$86, data$$60)
    }
  }
  return
}
function v798(parentObj$$591, address$$85, data$$59) {
  var v5895 = parentObj$$591.modeSTAT;
  var v1466 = v5895 < 3;
  if(v1466) {
    address$$85 = address$$85 & 2047;
    var v8577 = parentObj$$591.BGCHRBank1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v5896 = v8577[address$$85]
    }
    var v1465 = v5896 != data$$59;
    if(v1465) {
      JAMScript.call(parentObj$$591.graphicsJIT, parentObj$$591, []);
      var v1464 = parentObj$$591.BGCHRBank1;
      JAMScript.set(v1464, address$$85, data$$59)
    }
  }
  return
}
function v797(parentObj$$590, address$$84, data$$58) {
  var v5897 = parentObj$$590.modeSTAT;
  var v1472 = v5897 < 3;
  if(v1472) {
    var v5898 = parentObj$$590.currVRAMBank;
    var v1471 = v5898 == 0;
    if(v1471) {
      var v8578 = parentObj$$590.memory;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v5899 = v8578[address$$84]
      }
      var v1468 = v5899 != data$$58;
      if(v1468) {
        JAMScript.call(parentObj$$590.graphicsJIT, parentObj$$590, []);
        var v1467 = parentObj$$590.memory;
        JAMScript.set(v1467, address$$84, data$$58);
        JAMScript.call(parentObj$$590.generateGBCTileLineBank1, parentObj$$590, [address$$84])
      }
    }else {
      address$$84 = address$$84 & 8191;
      var v8579 = parentObj$$590.VRAM;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v5900 = v8579[address$$84]
      }
      var v1470 = v5900 != data$$58;
      if(v1470) {
        JAMScript.call(parentObj$$590.graphicsJIT, parentObj$$590, []);
        var v1469 = parentObj$$590.VRAM;
        JAMScript.set(v1469, address$$84, data$$58);
        JAMScript.call(parentObj$$590.generateGBCTileLineBank2, parentObj$$590, [address$$84])
      }
    }
  }
  return
}
function v796(parentObj$$589, address$$83, data$$57) {
  var v5901 = parentObj$$589.modeSTAT;
  var v1475 = v5901 < 3;
  if(v1475) {
    var v8580 = parentObj$$589.memory;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v5902 = v8580[address$$83]
    }
    var v1474 = v5902 != data$$57;
    if(v1474) {
      JAMScript.call(parentObj$$589.graphicsJIT, parentObj$$589, []);
      var v1473 = parentObj$$589.memory;
      JAMScript.set(v1473, address$$83, data$$57);
      JAMScript.call(parentObj$$589.generateGBTileLine, parentObj$$589, [address$$83])
    }
  }
  return
}
function v795(parentObj$$588, address$$82, data$$56) {
  var v5903 = parentObj$$588.modeSTAT;
  var v1478 = v5903 < 3;
  if(v1478) {
    var v8581 = parentObj$$588.memory;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v5904 = v8581[address$$82]
    }
    var v1477 = v5904 != data$$56;
    if(v1477) {
      JAMScript.call(parentObj$$588.graphicsJIT, parentObj$$588, []);
      var v1476 = parentObj$$588.memory;
      JAMScript.set(v1476, address$$82, data$$56);
      JAMScript.call(parentObj$$588.generateGBOAMTileLine, parentObj$$588, [address$$82])
    }
  }
  return
}
function v794(parentObj$$587, address$$81, data$$55) {
  var v1479 = parentObj$$587.memory;
  var v1480 = address$$81 - 8192;
  v1479[v1480] = data$$55;
  return
}
function v793(parentObj$$586, address$$80, data$$54) {
  var v1481 = parentObj$$586.GBCMemory;
  var v5905 = parentObj$$586.gbcRamBankPositionECHO;
  var v1482 = address$$80 + v5905;
  JAMScript.set(v1481, v1482, data$$54);
  return
}
function v792(parentObj$$585, address$$79, data$$53) {
  var v5906 = parentObj$$585.modeSTAT;
  var v1485 = v5906 < 2;
  if(v1485) {
    var v8582 = parentObj$$585.memory;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v5907 = v8582[address$$79]
    }
    var v1484 = v5907 != data$$53;
    if(v1484) {
      JAMScript.call(parentObj$$585.graphicsJIT, parentObj$$585, []);
      var v1483 = parentObj$$585.memory;
      JAMScript.set(v1483, address$$79, data$$53)
    }
  }
  return
}
function v791(parentObj$$584, address$$78, data$$52) {
  var v1486 = parentObj$$584.GBCMemory;
  var v5908 = parentObj$$584.gbcRamBankPosition;
  var v1487 = address$$78 + v5908;
  JAMScript.set(v1486, v1487, data$$52);
  return
}
function v790(parentObj$$583, address$$77, data$$51) {
  var v5909 = parentObj$$583.MBCRAMBanksEnabled;
  var v8583 = !v5909;
  if(v8583) {
    v5909 = settings[10]
  }
  var v1503 = v5909;
  if(v1503) {
    var v1502 = parentObj$$583.currMBCRAMBank;
    switch(v1502) {
      case 0:
      ;
      case 1:
      ;
      case 2:
      ;
      case 3:
        var v1488 = parentObj$$583.MBCRam;
        var v5910 = parentObj$$583.currMBCRAMBankPosition;
        var v1489 = address$$77 + v5910;
        JAMScript.set(v1488, v1489, data$$51);
        break;
      case 8:
        var v1491 = data$$51 < 60;
        if(v1491) {
          parentObj$$583.RTCSeconds = data$$51
        }else {
          var v9790 = parentObj$$583.currMBCRAMBank;
          var v8584 = "(Bank #" + v9790;
          var v5911 = v8584 + ") RTC write out of range: ";
          var v1490 = v5911 + data$$51;
          cout(v1490, 1)
        }
        break;
      case 9:
        var v1493 = data$$51 < 60;
        if(v1493) {
          parentObj$$583.RTCMinutes = data$$51
        }else {
          var v9791 = parentObj$$583.currMBCRAMBank;
          var v8585 = "(Bank #" + v9791;
          var v5912 = v8585 + ") RTC write out of range: ";
          var v1492 = v5912 + data$$51;
          cout(v1492, 1)
        }
        break;
      case 10:
        var v1495 = data$$51 < 24;
        if(v1495) {
          parentObj$$583.RTCHours = data$$51
        }else {
          var v9792 = parentObj$$583.currMBCRAMBank;
          var v8586 = "(Bank #" + v9792;
          var v5913 = v8586 + ") RTC write out of range: ";
          var v1494 = v5913 + data$$51;
          cout(v1494, 1)
        }
        break;
      case 11:
        var v1496 = data$$51 & 255;
        var v5914 = parentObj$$583.RTCDays;
        var v1497 = v5914 & 256;
        parentObj$$583.RTCDays = v1496 | v1497;
        break;
      case 12:
        parentObj$$583.RTCDayOverFlow = data$$51 > 127;
        var v1498 = data$$51 & 64;
        parentObj$$583.RTCHalt = v1498 == 64;
        var v5915 = data$$51 & 1;
        var v1499 = v5915 << 8;
        var v5916 = parentObj$$583.RTCDays;
        var v1500 = v5916 & 255;
        parentObj$$583.RTCDays = v1499 | v1500;
        break;
      default:
        var v5917 = parentObj$$583.currMBCRAMBank;
        var v1501 = "Invalid MBC3 bank address selected: " + v5917;
        cout(v1501, 0)
    }
  }
  return
}
function v789(parentObj$$582, address$$76, data$$50) {
  var v5918 = parentObj$$582.MBCRAMBanksEnabled;
  var v8587 = !v5918;
  if(v8587) {
    v5918 = settings[10]
  }
  var v1506 = v5918;
  if(v1506) {
    var v1504 = parentObj$$582.MBCRam;
    var v5919 = parentObj$$582.currMBCRAMBankPosition;
    var v1505 = address$$76 + v5919;
    JAMScript.set(v1504, v1505, data$$50)
  }
  return
}
function v788(parentObj$$581, address$$75, data$$49) {
  var v1507 = parentObj$$581.memory;
  var v1508 = 65280 | address$$75;
  v1507[v1508] = data$$49;
  return
}
function v787(parentObj$$580, address$$74, data$$48) {
  var v1509 = parentObj$$580.memory;
  JAMScript.set(v1509, address$$74, data$$48);
  return
}
function v786(parentObj$$579, address$$73, data$$47) {
  return
}
function v785(parentObj$$578, address$$72, data$$46) {
  parentObj$$578.currMBCRAMBank = data$$46 & 3;
  var v5920 = parentObj$$578.currMBCRAMBank;
  var v1510 = v5920 << 13;
  parentObj$$578.currMBCRAMBankPosition = v1510 - 40960;
  return
}
function v784(parentObj$$577, address$$71, data$$45) {
  parentObj$$577.currMBCRAMBank = data$$45 & 3;
  var v5921 = parentObj$$577.currMBCRAMBank;
  var v1511 = v5921 << 13;
  parentObj$$577.currMBCRAMBankPosition = v1511 - 40960;
  return
}
function v783(parentObj$$576, address$$70, data$$44) {
  parentObj$$576.currMBCRAMBank = data$$44 & 15;
  var v5922 = parentObj$$576.currMBCRAMBank;
  var v1512 = v5922 << 13;
  parentObj$$576.currMBCRAMBankPosition = v1512 - 40960;
  return
}
function v782(parentObj$$575, address$$69, data$$43) {
  var v5923 = data$$43 & 1;
  var v1513 = v5923 << 8;
  var v5924 = parentObj$$575.ROMBank1offs;
  var v1514 = v5924 & 255;
  parentObj$$575.ROMBank1offs = v1513 | v1514;
  JAMScript.call(parentObj$$575.setCurrentMBC5ROMBank, parentObj$$575, []);
  return
}
function v781(parentObj$$574, address$$68, data$$42) {
  var v5925 = parentObj$$574.ROMBank1offs;
  var v1515 = v5925 & 256;
  parentObj$$574.ROMBank1offs = v1515 | data$$42;
  JAMScript.call(parentObj$$574.setCurrentMBC5ROMBank, parentObj$$574, []);
  return
}
function v780(parentObj$$573, address$$67, data$$41) {
  var v1520 = data$$41 == 0;
  if(v1520) {
    parentObj$$573.RTCisLatched = false
  }else {
    var v5926 = parentObj$$573.RTCisLatched;
    var v1519 = !v5926;
    if(v1519) {
      parentObj$$573.RTCisLatched = true;
      var v1516 = parentObj$$573.RTCSeconds;
      parentObj$$573.latchedSeconds = v1516 | 0;
      parentObj$$573.latchedMinutes = parentObj$$573.RTCMinutes;
      parentObj$$573.latchedHours = parentObj$$573.RTCHours;
      var v1517 = parentObj$$573.RTCDays;
      parentObj$$573.latchedLDays = v1517 & 255;
      var v1518 = parentObj$$573.RTCDays;
      parentObj$$573.latchedHDays = v1518 >> 8
    }
  }
  return
}
function v779(parentObj$$572, address$$66, data$$40) {
  parentObj$$572.currMBCRAMBank = data$$40;
  var v1522 = data$$40 < 4;
  if(v1522) {
    var v5927 = parentObj$$572.currMBCRAMBank;
    var v1521 = v5927 << 13;
    parentObj$$572.currMBCRAMBankPosition = v1521 - 40960
  }
  return
}
function v778(parentObj$$571, address$$65, data$$39) {
  parentObj$$571.ROMBank1offs = data$$39 & 127;
  JAMScript.call(parentObj$$571.setCurrentMBC2AND3ROMBank, parentObj$$571, []);
  return
}
function v777(parentObj$$570, address$$64, data$$38) {
  parentObj$$570.ROMBank1offs = data$$38 & 15;
  JAMScript.call(parentObj$$570.setCurrentMBC2AND3ROMBank, parentObj$$570, []);
  return
}
function v776(parentObj$$569, address$$63, data$$37) {
  var v1523 = data$$37 & 1;
  parentObj$$569.MBC1Mode = v1523 == 1;
  var v1524 = parentObj$$569.MBC1Mode;
  if(v1524) {
    var v5928 = parentObj$$569.ROMBank1offs;
    parentObj$$569.ROMBank1offs = v5928 & 31;
    JAMScript.call(parentObj$$569.setCurrentMBC1ROMBank, parentObj$$569, [])
  }else {
    parentObj$$569.currMBCRAMBank = 0;
    parentObj$$569.currMBCRAMBankPosition = -40960
  }
  return
}
function v775(parentObj$$568, address$$62, data$$36) {
  var v1528 = parentObj$$568.MBC1Mode;
  if(v1528) {
    parentObj$$568.currMBCRAMBank = data$$36 & 3;
    var v5929 = parentObj$$568.currMBCRAMBank;
    var v1525 = v5929 << 13;
    parentObj$$568.currMBCRAMBankPosition = v1525 - 40960
  }else {
    var v5930 = data$$36 & 3;
    var v1526 = v5930 << 5;
    var v5931 = parentObj$$568.ROMBank1offs;
    var v1527 = v5931 & 31;
    parentObj$$568.ROMBank1offs = v1526 | v1527;
    JAMScript.call(parentObj$$568.setCurrentMBC1ROMBank, parentObj$$568, [])
  }
  return
}
function v774(parentObj$$567, address$$61, data$$35) {
  var v5932 = parentObj$$567.ROMBank1offs;
  var v1529 = v5932 & 96;
  var v1530 = data$$35 & 31;
  parentObj$$567.ROMBank1offs = v1529 | v1530;
  JAMScript.call(parentObj$$567.setCurrentMBC1ROMBank, parentObj$$567, []);
  return
}
function v773(parentObj$$566, address$$60, data$$34) {
  var v1531 = data$$34 & 15;
  parentObj$$566.MBCRAMBanksEnabled = v1531 == 10;
  return
}
function v772() {
  var index$$63 = 0;
  var v1603 = index$$63 <= 65535;
  for(;v1603;) {
    var v1602 = index$$63 < 32768;
    if(v1602) {
      var v1572 = this.cMBC1;
      if(v1572) {
        var v1538 = index$$63 < 8192;
        if(v1538) {
          var v1532 = this.memoryWriter;
          v1532[index$$63] = this.MBCWriteEnable
        }else {
          var v1537 = index$$63 < 16384;
          if(v1537) {
            var v1533 = this.memoryWriter;
            v1533[index$$63] = this.MBC1WriteROMBank
          }else {
            var v1536 = index$$63 < 24576;
            if(v1536) {
              var v1534 = this.memoryWriter;
              v1534[index$$63] = this.MBC1WriteRAMBank
            }else {
              var v1535 = this.memoryWriter;
              v1535[index$$63] = this.MBC1WriteType
            }
          }
        }
      }else {
        var v1571 = this.cMBC2;
        if(v1571) {
          var v1543 = index$$63 < 4096;
          if(v1543) {
            var v1539 = this.memoryWriter;
            v1539[index$$63] = this.MBCWriteEnable
          }else {
            var v5933 = index$$63 >= 8448;
            if(v5933) {
              v5933 = index$$63 < 8704
            }
            var v1542 = v5933;
            if(v1542) {
              var v1540 = this.memoryWriter;
              v1540[index$$63] = this.MBC2WriteROMBank
            }else {
              var v1541 = this.memoryWriter;
              v1541[index$$63] = this.cartIgnoreWrite
            }
          }
        }else {
          var v1570 = this.cMBC3;
          if(v1570) {
            var v1550 = index$$63 < 8192;
            if(v1550) {
              var v1544 = this.memoryWriter;
              v1544[index$$63] = this.MBCWriteEnable
            }else {
              var v1549 = index$$63 < 16384;
              if(v1549) {
                var v1545 = this.memoryWriter;
                v1545[index$$63] = this.MBC3WriteROMBank
              }else {
                var v1548 = index$$63 < 24576;
                if(v1548) {
                  var v1546 = this.memoryWriter;
                  v1546[index$$63] = this.MBC3WriteRAMBank
                }else {
                  var v1547 = this.memoryWriter;
                  v1547[index$$63] = this.MBC3WriteRTCLatch
                }
              }
            }
          }else {
            var v5934 = this.cMBC5;
            var v8589 = !v5934;
            if(v8589) {
              var v8588 = this.cRUMBLE;
              var v9793 = !v8588;
              if(v9793) {
                v8588 = this.cMBC7
              }
              v5934 = v8588
            }
            var v1569 = v5934;
            if(v1569) {
              var v1559 = index$$63 < 8192;
              if(v1559) {
                var v1551 = this.memoryWriter;
                v1551[index$$63] = this.MBCWriteEnable
              }else {
                var v1558 = index$$63 < 12288;
                if(v1558) {
                  var v1552 = this.memoryWriter;
                  v1552[index$$63] = this.MBC5WriteROMBankLow
                }else {
                  var v1557 = index$$63 < 16384;
                  if(v1557) {
                    var v1553 = this.memoryWriter;
                    v1553[index$$63] = this.MBC5WriteROMBankHigh
                  }else {
                    var v1556 = index$$63 < 24576;
                    if(v1556) {
                      var v1554 = this.memoryWriter;
                      var v5935;
                      var v8590 = this.cRUMBLE;
                      if(v8590) {
                        v5935 = this.RUMBLEWriteRAMBank
                      }else {
                        v5935 = this.MBC5WriteRAMBank
                      }
                      v1554[index$$63] = v5935
                    }else {
                      var v1555 = this.memoryWriter;
                      v1555[index$$63] = this.cartIgnoreWrite
                    }
                  }
                }
              }
            }else {
              var v1568 = this.cHuC3;
              if(v1568) {
                var v1566 = index$$63 < 8192;
                if(v1566) {
                  var v1560 = this.memoryWriter;
                  v1560[index$$63] = this.MBCWriteEnable
                }else {
                  var v1565 = index$$63 < 16384;
                  if(v1565) {
                    var v1561 = this.memoryWriter;
                    v1561[index$$63] = this.MBC3WriteROMBank
                  }else {
                    var v1564 = index$$63 < 24576;
                    if(v1564) {
                      var v1562 = this.memoryWriter;
                      v1562[index$$63] = this.HuC3WriteRAMBank
                    }else {
                      var v1563 = this.memoryWriter;
                      v1563[index$$63] = this.cartIgnoreWrite
                    }
                  }
                }
              }else {
                var v1567 = this.memoryWriter;
                v1567[index$$63] = this.cartIgnoreWrite
              }
            }
          }
        }
      }
    }else {
      var v1601 = index$$63 < 36864;
      if(v1601) {
        var v1573 = this.memoryWriter;
        var v5936;
        var v8591 = this.cGBC;
        if(v8591) {
          v5936 = this.VRAMGBCDATAWrite
        }else {
          v5936 = this.VRAMGBDATAWrite
        }
        v1573[index$$63] = v5936
      }else {
        var v1600 = index$$63 < 38912;
        if(v1600) {
          var v1574 = this.memoryWriter;
          var v5937;
          var v8592 = this.cGBC;
          if(v8592) {
            v5937 = this.VRAMGBCDATAWrite
          }else {
            v5937 = this.VRAMGBDATAUpperWrite
          }
          v1574[index$$63] = v5937
        }else {
          var v1599 = index$$63 < 40960;
          if(v1599) {
            var v1575 = this.memoryWriter;
            var v5938;
            var v8593 = this.cGBC;
            if(v8593) {
              v5938 = this.VRAMGBCCHRMAPWrite
            }else {
              v5938 = this.VRAMGBCHRMAPWrite
            }
            v1575[index$$63] = v5938
          }else {
            var v1598 = index$$63 < 49152;
            if(v1598) {
              var v9794 = this.numRAMBanks;
              var v9795 = 1 / 16;
              var v8594 = v9794 == v9795;
              if(v8594) {
                v8594 = index$$63 < 41472
              }
              var v5939 = v8594;
              var v8596 = !v5939;
              if(v8596) {
                var v8595 = this.numRAMBanks;
                v5939 = v8595 >= 1
              }
              var v1580 = v5939;
              if(v1580) {
                var v5940 = this.cMBC3;
                var v1578 = !v5940;
                if(v1578) {
                  var v1576 = this.memoryWriter;
                  v1576[index$$63] = this.memoryWriteMBCRAM
                }else {
                  var v1577 = this.memoryWriter;
                  v1577[index$$63] = this.memoryWriteMBC3RAM
                }
              }else {
                var v1579 = this.memoryWriter;
                v1579[index$$63] = this.cartIgnoreWrite
              }
            }else {
              var v1597 = index$$63 < 57344;
              if(v1597) {
                var v5941 = this.cGBC;
                if(v5941) {
                  v5941 = index$$63 >= 53248
                }
                var v1583 = v5941;
                if(v1583) {
                  var v1581 = this.memoryWriter;
                  v1581[index$$63] = this.memoryWriteGBCRAM
                }else {
                  var v1582 = this.memoryWriter;
                  v1582[index$$63] = this.memoryWriteNormal
                }
              }else {
                var v1596 = index$$63 < 65024;
                if(v1596) {
                  var v5942 = this.cGBC;
                  if(v5942) {
                    v5942 = index$$63 >= 61440
                  }
                  var v1586 = v5942;
                  if(v1586) {
                    var v1584 = this.memoryWriter;
                    v1584[index$$63] = this.memoryWriteECHOGBCRAM
                  }else {
                    var v1585 = this.memoryWriter;
                    v1585[index$$63] = this.memoryWriteECHONormal
                  }
                }else {
                  var v1595 = index$$63 <= 65184;
                  if(v1595) {
                    var v1587 = this.memoryWriter;
                    v1587[index$$63] = this.memoryWriteOAMRAM
                  }else {
                    var v1594 = index$$63 < 65280;
                    if(v1594) {
                      var v1590 = this.cGBC;
                      if(v1590) {
                        var v1588 = this.memoryWriter;
                        v1588[index$$63] = this.memoryWriteNormal
                      }else {
                        var v1589 = this.memoryWriter;
                        v1589[index$$63] = this.cartIgnoreWrite
                      }
                    }else {
                      var v1591 = this.memoryWriter;
                      v1591[index$$63] = this.memoryWriteNormal;
                      var v1592 = this.memoryHighWriter;
                      var v1593 = index$$63 & 255;
                      v1592[v1593] = this.memoryHighWriteNormal
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
  JAMScript.call(this.registerWriteJumpCompile, this, []);
  return
}
function v771(address$$59, data$$33) {
  var v1604 = this.memoryHighWriter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11068 = [[this, address$$59, data$$33], v1604, v1604[address$$59]]
  }
  JAMScript.call(v11068[2], v11068[1], v11068[0]);
  return
}
function v770(address$$58, data$$32) {
  var v1605 = this.memoryWriter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11069 = [[this, address$$58, data$$32], v1605, v1605[address$$58]]
  }
  JAMScript.call(v11069[2], v11069[1], v11069[0]);
  return
}
function v769() {
  var v8597 = this.ROMBank1offs;
  var v8598 = this.ROMBankEdge;
  var v5943 = v8597 % v8598;
  var v1606 = v5943 - 1;
  this.currentROMBank = v1606 << 14;
  return
}
function v768() {
  var v9796 = this.ROMBank1offs;
  var v9797 = this.ROMBankEdge;
  var v8599 = v9796 % v9797;
  var v5944 = v8599 - 1;
  var v1607 = Math.max(v5944, 0);
  this.currentROMBank = v1607 << 14;
  return
}
function v767() {
  var v1610 = this.ROMBank1offs;
  switch(v1610) {
    case 0:
    ;
    case 32:
    ;
    case 64:
    ;
    case 96:
      var v5945 = this.ROMBank1offs;
      var v5946 = this.ROMBankEdge;
      var v1608 = v5945 % v5946;
      this.currentROMBank = v1608 << 14;
      break;
    default:
      var v8600 = this.ROMBank1offs;
      var v8601 = this.ROMBankEdge;
      var v5947 = v8600 % v8601;
      var v1609 = v5947 - 1;
      this.currentROMBank = v1609 << 14
  }
  return
}
function v766(parentObj$$565, address$$57) {
  var v1611;
  var v8602 = parentObj$$565.modeSTAT;
  var v5950 = v8602 > 2;
  if(v5950) {
    v1611 = 255
  }else {
    var v5948 = parentObj$$565.BGCHRBank1;
    var v5949 = address$$57 & 2047;
    v1611 = v5948[v5949]
  }
  return v1611
}
function v765(parentObj$$564, address$$56) {
  var v1612;
  var v8603 = parentObj$$564.modeSTAT;
  var v5953 = v8603 > 2;
  if(v5953) {
    v1612 = 255
  }else {
    var v5951 = parentObj$$564.BGCHRCurrentBank;
    var v5952 = address$$56 & 2047;
    v1612 = v5951[v5952]
  }
  return v1612
}
function v764(parentObj$$563, address$$55) {
  var v1613;
  var v8604 = parentObj$$563.modeSTAT;
  var v5955 = v8604 > 2;
  if(v5955) {
    v1613 = 255
  }else {
    var v5954 = parentObj$$563.memory;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      v1613 = v5954[address$$55]
    }
  }
  return v1613
}
function v763(parentObj$$562, address$$54) {
  var v1614;
  var v8605 = parentObj$$562.modeSTAT;
  var v5957 = v8605 > 2;
  if(v5957) {
    v1614 = 255
  }else {
    var v5956;
    var v9798 = parentObj$$562.currVRAMBank;
    var v8609 = v9798 == 0;
    if(v8609) {
      var v8606 = parentObj$$562.memory;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        v5956 = v8606[address$$54]
      }
    }else {
      var v8607 = parentObj$$562.VRAM;
      var v8608 = address$$54 & 8191;
      v5956 = v8607[v8608]
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
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return v1615[v1616]
  }
}
function v760(parentObj$$559, address$$51) {
  var v1617 = parentObj$$559.GBCMemory;
  var v5958 = parentObj$$559.gbcRamBankPositionECHO;
  var v1618 = address$$51 + v5958;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return v1617[v1618]
  }
}
function v759(parentObj$$558, address$$50) {
  var v1619;
  var v8610 = parentObj$$558.modeSTAT;
  var v5960 = v8610 > 1;
  if(v5960) {
    v1619 = 255
  }else {
    var v5959 = parentObj$$558.memory;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      v1619 = v5959[address$$50]
    }
  }
  return v1619
}
function v758(parentObj$$557, address$$49) {
  var v1620 = parentObj$$557.GBCMemory;
  var v5961 = parentObj$$557.gbcRamBankPosition;
  var v1621 = address$$49 + v5961;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return v1620[v1621]
  }
}
function v757(parentObj$$556, address$$48) {
  var v5962 = parentObj$$556.MBCRAMBanksEnabled;
  var v8611 = !v5962;
  if(v8611) {
    v5962 = settings[10]
  }
  var v1627 = v5962;
  if(v1627) {
    var v1626 = parentObj$$556.currMBCRAMBank;
    switch(v1626) {
      case 0:
      ;
      case 1:
      ;
      case 2:
      ;
      case 3:
        var v1622 = parentObj$$556.MBCRam;
        var v5963 = parentObj$$556.currMBCRAMBankPosition;
        var v1623 = address$$48 + v5963;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
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
        var v9799 = parentObj$$556.RTCDayOverFlow;
        if(v9799) {
          v8612 = 128
        }else {
          v8612 = 0
        }
        var v5964 = v8612;
        var v8613;
        var v9800 = parentObj$$556.RTCHALT;
        if(v9800) {
          v8613 = 64
        }else {
          v8613 = 0
        }
        var v5965 = v8613;
        var v1624 = v5964 + v5965;
        var v1625 = parentObj$$556.latchedHDays;
        return v1624 + v1625
    }
  }
  return 255
}
function v756(parentObj$$555, address$$47) {
  var v5966 = parentObj$$555.MBCRAMBanksEnabled;
  var v8614 = !v5966;
  if(v8614) {
    v5966 = settings[10]
  }
  var v1630 = v5966;
  if(v1630) {
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
        var v5967 = parentObj$$555.currMBCRAMBankPosition;
        var v1629 = address$$47 + v5967;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          return v1628[v1629]
        }
    }
  }
  return 255
}
function v755(parentObj$$554, address$$46) {
  var v5968 = parentObj$$554.MBCRAMBanksEnabled;
  var v8615 = !v5968;
  if(v8615) {
    v5968 = settings[10]
  }
  var v1633 = v5968;
  if(v1633) {
    var v1631 = parentObj$$554.MBCRam;
    var v5969 = parentObj$$554.currMBCRAMBankPosition;
    var v1632 = address$$46 + v5969;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      return v1631[v1632]
    }
  }
  return 255
}
function v754(parentObj$$553, address$$45) {
  var v1634 = parentObj$$553.ROM;
  var v5970 = parentObj$$553.currentROMBank;
  var v1635 = v5970 + address$$45;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return v1634[v1635]
  }
}
function v753(parentObj$$552, address$$44) {
  var v1636 = parentObj$$552.memory;
  var v1637 = 65280 | address$$44;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return v1636[v1637]
  }
}
function v752(parentObj$$551, address$$43) {
  var v1638 = parentObj$$551.memory;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
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
    var v5971 = parentObj$$548.memory;
    var v1639 = v5971[65397];
    return 143 | v1639
  }
  function v747(parentObj$$547, address$$39) {
    var v5972 = parentObj$$547.memory;
    var v1640 = v5972[65392];
    return 64 | v1640
  }
  function v746(parentObj$$546, address$$38) {
    var v5973 = parentObj$$546.memory;
    var v1641 = v5973[65388];
    return 254 | v1641
  }
  function v745(parentObj$$545, address$$37) {
    var v5974;
    var v10375 = parentObj$$545.memory;
    var v9801 = v10375[65366];
    var v8618 = v9801 >= 192;
    if(v8618) {
      var v10376 = parentObj$$545.memory;
      var v9802 = v10376[65366];
      var v8616 = v9802 & 193;
      v5974 = 2 | v8616
    }else {
      var v9803 = parentObj$$545.memory;
      var v8617 = v9803[65366];
      v5974 = v8617 & 195
    }
    var v1642 = v5974;
    return 60 | v1642
  }
  function v744(parentObj$$544, address$$36) {
    var v8619 = parentObj$$544.LCDisOn;
    var v5975 = !v8619;
    if(v5975) {
      v5975 = parentObj$$544.hdmaRunning
    }
    var v1645 = v5975;
    if(v1645) {
      var v9804 = parentObj$$544.memory;
      var v8620 = v9804[65365];
      var v5976 = v8620 & 127;
      var v1643 = v5976 + 1;
      JAMScript.call(parentObj$$544.DMAWrite, parentObj$$544, [v1643]);
      var v1644 = parentObj$$544.memory;
      v1644[65365] = 255;
      parentObj$$544.hdmaRunning = false
    }
    var v1646 = parentObj$$544.memory;
    return v1646[65365]
  }
  function v743(parentObj$$543, address$$35) {
    return parentObj$$543.currVRAMBank
  }
  function v742(parentObj$$542, address$$34) {
    return parentObj$$542.windowY
  }
  function v741(parentObj$$541, address$$33) {
    var v1647;
    var v5978 = parentObj$$541.LCDisOn;
    if(v5978) {
      var v5977 = parentObj$$541.memory;
      v1647 = v5977[65348]
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
    var v8621 = parentObj$$538.memory;
    var v5979 = v8621[65345];
    var v1648 = 128 | v5979;
    var v1649 = parentObj$$538.modeSTAT;
    return v1648 | v1649
  }
  function v737(parentObj$$537, address$$29) {
    var v1650;
    var v5984 = parentObj$$537.channel3canPlay;
    if(v5984) {
      var v5980 = parentObj$$537.memory;
      var v9805 = parentObj$$537.channel3lastSampleLookup;
      var v8622 = v9805 >> 1;
      var v5981 = 65280 | v8622;
      v1650 = v5980[v5981]
    }else {
      var v5982 = parentObj$$537.memory;
      var v5983 = 65280 | address$$29;
      v1650 = v5982[v5983]
    }
    return v1650
  }
  function v736(parentObj$$536, address$$28) {
    var v1651;
    var v5988 = parentObj$$536.channel3canPlay;
    if(v5988) {
      var v5985 = parentObj$$536.memory;
      var v9806 = parentObj$$536.channel3lastSampleLookup;
      var v8623 = v9806 >> 1;
      var v5986 = 65280 | v8623;
      v1651 = v5985[v5986]
    }else {
      var v5987 = parentObj$$536.memory;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        v1651 = v5987[address$$28]
      }
    }
    return v1651
  }
  function v735(parentObj$$535, address$$27) {
    JAMScript.call(parentObj$$535.audioJIT, parentObj$$535, []);
    var v5989 = parentObj$$535.memory;
    var v1652 = v5989[65318];
    return 112 | v1652
  }
  function v734(parentObj$$534, address$$26) {
    var v5990 = parentObj$$534.memory;
    var v1653 = v5990[65315];
    return 191 | v1653
  }
  function v733(parentObj$$533, address$$25) {
    var v5991 = parentObj$$533.memory;
    var v1654 = v5991[65310];
    return 191 | v1654
  }
  function v732(parentObj$$532, address$$24) {
    return 255
  }
  function v731(parentObj$$531, address$$23) {
    var v5992 = parentObj$$531.memory;
    var v1655 = v5992[65308];
    return 159 | v1655
  }
  function v730(parentObj$$530, address$$22) {
    var v5993 = parentObj$$530.memory;
    var v1656 = v5993[65306];
    return 127 | v1656
  }
  function v729(parentObj$$529, address$$21) {
    var v5994 = parentObj$$529.memory;
    var v1657 = v5994[65305];
    return 191 | v1657
  }
  function v728(parentObj$$528, address$$20) {
    var v5995 = parentObj$$528.memory;
    var v1658 = v5995[65302];
    return 63 | v1658
  }
  function v727(parentObj$$527, address$$19) {
    var v5996 = parentObj$$527.memory;
    var v1659 = v5996[65300];
    return 191 | v1659
  }
  function v726(parentObj$$526, address$$18) {
    var v5997 = parentObj$$526.memory;
    var v1660 = v5997[65297];
    return 63 | v1660
  }
  function v725(parentObj$$525, address$$17) {
    var v5998 = parentObj$$525.memory;
    var v1661 = v5998[65296];
    return 128 | v1661
  }
  function v724(parentObj$$524, address$$16) {
    var v1662 = parentObj$$524.interruptsRequested;
    return 224 | v1662
  }
  function v723(parentObj$$523, address$$15) {
    var v5999 = parentObj$$523.memory;
    var v1663 = v5999[65287];
    return 248 | v1663
  }
  function v722(parentObj$$522, address$$14) {
    var v1664 = parentObj$$522.memory;
    var v9807 = parentObj$$522.memory;
    var v8624 = v9807[65284];
    var v9808 = parentObj$$522.DIVTicks;
    var v8625 = v9808 >> 8;
    var v6000 = v8624 + v8625;
    v1664[65284] = v6000 & 255;
    var v6001 = parentObj$$522.DIVTicks;
    parentObj$$522.DIVTicks = v6001 & 255;
    var v1665 = parentObj$$522.memory;
    return v1665[65284]
  }
  function v721(parentObj$$521, address$$13) {
    var v6002;
    var v9809 = parentObj$$521.serialTimer;
    var v8626 = v9809 <= 0;
    if(v8626) {
      v6002 = 126
    }else {
      v6002 = 254
    }
    var v1666 = v6002;
    var v6003 = parentObj$$521.memory;
    var v1667 = v6003[65282];
    return v1666 | v1667
  }
  function v720(parentObj$$520, address$$12) {
    var v6004;
    var v9810 = parentObj$$520.serialTimer;
    var v8627 = v9810 <= 0;
    if(v8627) {
      v6004 = 124
    }else {
      v6004 = 252
    }
    var v1668 = v6004;
    var v6005 = parentObj$$520.memory;
    var v1669 = v6005[65282];
    return v1668 | v1669
  }
  function v719(parentObj$$519, address$$11) {
    var v1670;
    var v9811 = parentObj$$519.memory;
    var v8628 = v9811[65282];
    var v6007 = v8628 < 128;
    if(v6007) {
      var v6006 = parentObj$$519.memory;
      v1670 = v6006[65281]
    }else {
      v1670 = 255
    }
    return v1670
  }
  function v718(parentObj$$518, address$$10) {
    var v6008 = parentObj$$518.memory;
    var v1671 = v6008[65280];
    return 192 | v1671
  }
  var index$$62 = 0;
  var v1758 = index$$62 <= 65535;
  for(;v1758;) {
    var v1757 = index$$62 < 16384;
    if(v1757) {
      var v1672 = this.memoryReader;
      v1672[index$$62] = this.memoryReadNormal
    }else {
      var v1756 = index$$62 < 32768;
      if(v1756) {
        var v1673 = this.memoryReader;
        v1673[index$$62] = this.memoryReadROM
      }else {
        var v1755 = index$$62 < 38912;
        if(v1755) {
          var v1674 = this.memoryReader;
          var v6009;
          var v8629 = this.cGBC;
          if(v8629) {
            v6009 = this.VRAMDATAReadCGBCPU
          }else {
            v6009 = this.VRAMDATAReadDMGCPU
          }
          v1674[index$$62] = v6009
        }else {
          var v1754 = index$$62 < 40960;
          if(v1754) {
            var v1675 = this.memoryReader;
            var v6010;
            var v8630 = this.cGBC;
            if(v8630) {
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
            var v1753 = v6011;
            if(v1753) {
              var v9812 = this.numRAMBanks;
              var v9813 = 1 / 16;
              var v8631 = v9812 == v9813;
              if(v8631) {
                v8631 = index$$62 < 41472
              }
              var v6012 = v8631;
              var v8633 = !v6012;
              if(v8633) {
                var v8632 = this.numRAMBanks;
                v6012 = v8632 >= 1
              }
              var v1682 = v6012;
              if(v1682) {
                var v1680 = this.cMBC7;
                if(v1680) {
                  var v1676 = this.memoryReader;
                  v1676[index$$62] = this.memoryReadMBC7
                }else {
                  var v6013 = this.cMBC3;
                  var v1679 = !v6013;
                  if(v1679) {
                    var v1677 = this.memoryReader;
                    v1677[index$$62] = this.memoryReadMBC
                  }else {
                    var v1678 = this.memoryReader;
                    v1678[index$$62] = this.memoryReadMBC3
                  }
                }
              }else {
                var v1681 = this.memoryReader;
                v1681[index$$62] = this.memoryReadBAD
              }
            }else {
              var v6014 = index$$62 >= 49152;
              if(v6014) {
                v6014 = index$$62 < 57344
              }
              var v1752 = v6014;
              if(v1752) {
                var v8634 = this.cGBC;
                var v6015 = !v8634;
                var v8635 = !v6015;
                if(v8635) {
                  v6015 = index$$62 < 53248
                }
                var v1685 = v6015;
                if(v1685) {
                  var v1683 = this.memoryReader;
                  v1683[index$$62] = this.memoryReadNormal
                }else {
                  var v1684 = this.memoryReader;
                  v1684[index$$62] = this.memoryReadGBCMemory
                }
              }else {
                var v6016 = index$$62 >= 57344;
                if(v6016) {
                  v6016 = index$$62 < 65024
                }
                var v1751 = v6016;
                if(v1751) {
                  var v8636 = this.cGBC;
                  var v6017 = !v8636;
                  var v8637 = !v6017;
                  if(v8637) {
                    v6017 = index$$62 < 61440
                  }
                  var v1688 = v6017;
                  if(v1688) {
                    var v1686 = this.memoryReader;
                    v1686[index$$62] = this.memoryReadECHONormal
                  }else {
                    var v1687 = this.memoryReader;
                    v1687[index$$62] = this.memoryReadECHOGBCMemory
                  }
                }else {
                  var v1750 = index$$62 < 65184;
                  if(v1750) {
                    var v1689 = this.memoryReader;
                    v1689[index$$62] = this.memoryReadOAM
                  }else {
                    var v6018 = this.cGBC;
                    if(v6018) {
                      var v8638 = index$$62 >= 65184;
                      if(v8638) {
                        v8638 = index$$62 < 65280
                      }
                      v6018 = v8638
                    }
                    var v1749 = v6018;
                    if(v1749) {
                      var v1690 = this.memoryReader;
                      v1690[index$$62] = this.memoryReadNormal
                    }else {
                      var v1748 = index$$62 >= 65280;
                      if(v1748) {
                        switch(index$$62) {
                          case 65280:
                            var v1691 = this.memoryHighReader;
                            var v6019 = this.memoryReader;
                            v1691[0] = v6019[65280] = v718;
                            break;
                          case 65281:
                            var v1692 = this.memoryHighReader;
                            var v6020 = this.memoryReader;
                            v1692[1] = v6020[65281] = v719;
                            break;
                          case 65282:
                            var v1695 = this.cGBC;
                            if(v1695) {
                              var v1693 = this.memoryHighReader;
                              var v6021 = this.memoryReader;
                              v1693[2] = v6021[65282] = v720
                            }else {
                              var v1694 = this.memoryHighReader;
                              var v6022 = this.memoryReader;
                              v1694[2] = v6022[65282] = v721
                            }
                            break;
                          case 65284:
                            var v1696 = this.memoryHighReader;
                            var v6023 = this.memoryReader;
                            v1696[4] = v6023[65284] = v722;
                            break;
                          case 65287:
                            var v1697 = this.memoryHighReader;
                            var v6024 = this.memoryReader;
                            v1697[7] = v6024[65287] = v723;
                            break;
                          case 65295:
                            var v1698 = this.memoryHighReader;
                            var v6025 = this.memoryReader;
                            v1698[15] = v6025[65295] = v724;
                            break;
                          case 65296:
                            var v1699 = this.memoryHighReader;
                            var v6026 = this.memoryReader;
                            v1699[16] = v6026[65296] = v725;
                            break;
                          case 65297:
                            var v1700 = this.memoryHighReader;
                            var v6027 = this.memoryReader;
                            v1700[17] = v6027[65297] = v726;
                            break;
                          case 65299:
                            var v1701 = this.memoryHighReader;
                            var v6028 = this.memoryReader;
                            v1701[19] = v6028[65299] = this.memoryReadBAD;
                            break;
                          case 65300:
                            var v1702 = this.memoryHighReader;
                            var v6029 = this.memoryReader;
                            v1702[20] = v6029[65300] = v727;
                            break;
                          case 65302:
                            var v1703 = this.memoryHighReader;
                            var v6030 = this.memoryReader;
                            v1703[22] = v6030[65302] = v728;
                            break;
                          case 65304:
                            var v1704 = this.memoryHighReader;
                            var v6031 = this.memoryReader;
                            v1704[24] = v6031[65304] = this.memoryReadBAD;
                            break;
                          case 65305:
                            var v1705 = this.memoryHighReader;
                            var v6032 = this.memoryReader;
                            v1705[25] = v6032[65305] = v729;
                            break;
                          case 65306:
                            var v1706 = this.memoryHighReader;
                            var v6033 = this.memoryReader;
                            v1706[26] = v6033[65306] = v730;
                            break;
                          case 65307:
                            var v1707 = this.memoryHighReader;
                            var v6034 = this.memoryReader;
                            v1707[27] = v6034[65307] = this.memoryReadBAD;
                            break;
                          case 65308:
                            var v1708 = this.memoryHighReader;
                            var v6035 = this.memoryReader;
                            v1708[28] = v6035[65308] = v731;
                            break;
                          case 65309:
                            var v1709 = this.memoryHighReader;
                            var v6036 = this.memoryReader;
                            v1709[29] = v6036[65309] = v732;
                            break;
                          case 65310:
                            var v1710 = this.memoryHighReader;
                            var v6037 = this.memoryReader;
                            v1710[30] = v6037[65310] = v733;
                            break;
                          case 65311:
                          ;
                          case 65312:
                            var v1711 = this.memoryHighReader;
                            var v1712 = index$$62 & 255;
                            var v6038 = this.memoryReader;
                            v1711[v1712] = v6038[index$$62] = this.memoryReadBAD;
                            break;
                          case 65315:
                            var v1713 = this.memoryHighReader;
                            var v6039 = this.memoryReader;
                            v1713[35] = v6039[65315] = v734;
                            break;
                          case 65318:
                            var v1714 = this.memoryHighReader;
                            var v6040 = this.memoryReader;
                            v1714[38] = v6040[65318] = v735;
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
                            var v1715 = this.memoryHighReader;
                            var v1716 = index$$62 & 255;
                            var v6041 = this.memoryReader;
                            v1715[v1716] = v6041[index$$62] = this.memoryReadBAD;
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
                            var v1717 = this.memoryReader;
                            v1717[index$$62] = v736;
                            var v1718 = this.memoryHighReader;
                            var v1719 = index$$62 & 255;
                            v1718[v1719] = v737;
                            break;
                          case 65345:
                            var v1720 = this.memoryHighReader;
                            var v6042 = this.memoryReader;
                            v1720[65] = v6042[65345] = v738;
                            break;
                          case 65346:
                            var v1721 = this.memoryHighReader;
                            var v6043 = this.memoryReader;
                            v1721[66] = v6043[65346] = v739;
                            break;
                          case 65347:
                            var v1722 = this.memoryHighReader;
                            var v6044 = this.memoryReader;
                            v1722[67] = v6044[65347] = v740;
                            break;
                          case 65348:
                            var v1723 = this.memoryHighReader;
                            var v6045 = this.memoryReader;
                            v1723[68] = v6045[65348] = v741;
                            break;
                          case 65354:
                            var v1724 = this.memoryHighReader;
                            var v6046 = this.memoryReader;
                            v1724[74] = v6046[65354] = v742;
                            break;
                          case 65359:
                            var v1725 = this.memoryHighReader;
                            var v6047 = this.memoryReader;
                            v1725[79] = v6047[65359] = v743;
                            break;
                          case 65365:
                            var v1729 = this.cGBC;
                            if(v1729) {
                              var v1726 = this.memoryHighReader;
                              var v6048 = this.memoryReader;
                              v1726[85] = v6048[65365] = v744
                            }else {
                              var v1727 = this.memoryReader;
                              v1727[65365] = this.memoryReadNormal;
                              var v1728 = this.memoryHighReader;
                              v1728[85] = this.memoryHighReadNormal
                            }
                            break;
                          case 65366:
                            var v1733 = this.cGBC;
                            if(v1733) {
                              var v1730 = this.memoryHighReader;
                              var v6049 = this.memoryReader;
                              v1730[86] = v6049[65366] = v745
                            }else {
                              var v1731 = this.memoryReader;
                              v1731[65366] = this.memoryReadNormal;
                              var v1732 = this.memoryHighReader;
                              v1732[86] = this.memoryHighReadNormal
                            }
                            break;
                          case 65388:
                            var v1736 = this.cGBC;
                            if(v1736) {
                              var v1734 = this.memoryHighReader;
                              var v6050 = this.memoryReader;
                              v1734[108] = v6050[65388] = v746
                            }else {
                              var v1735 = this.memoryHighReader;
                              var v6051 = this.memoryReader;
                              v1735[108] = v6051[65388] = this.memoryReadBAD
                            }
                            break;
                          case 65392:
                            var v1739 = this.cGBC;
                            if(v1739) {
                              var v1737 = this.memoryHighReader;
                              var v6052 = this.memoryReader;
                              v1737[112] = v6052[65392] = v747
                            }else {
                              var v1738 = this.memoryHighReader;
                              var v6053 = this.memoryReader;
                              v1738[112] = v6053[65392] = this.memoryReadBAD
                            }
                            break;
                          case 65397:
                            var v1740 = this.memoryHighReader;
                            var v6054 = this.memoryReader;
                            v1740[117] = v6054[65397] = v748;
                            break;
                          case 65398:
                          ;
                          case 65399:
                            var v1741 = this.memoryHighReader;
                            var v1742 = index$$62 & 255;
                            var v6055 = this.memoryReader;
                            v1741[v1742] = v6055[index$$62] = v749;
                            break;
                          case 65535:
                            var v1743 = this.memoryHighReader;
                            var v6056 = this.memoryReader;
                            v1743[255] = v6056[65535] = v750;
                            break;
                          default:
                            var v1744 = this.memoryReader;
                            v1744[index$$62] = this.memoryReadNormal;
                            var v1745 = this.memoryHighReader;
                            var v1746 = index$$62 & 255;
                            v1745[v1746] = this.memoryHighReadNormal
                        }
                      }else {
                        var v1747 = this.memoryReader;
                        v1747[index$$62] = this.memoryReadBAD
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
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11070 = [[this, address$$9], v1759, v1759[address$$9]]
  }
  return JAMScript.call(v11070[2], v11070[1], v11070[0])
}
function v716(address$$8) {
  var v1760 = this.memoryReader;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11071 = [[this, address$$8], v1760, v1760[address$$8]]
  }
  return JAMScript.call(v11071[2], v11071[1], v11071[0])
}
function v715() {
  var v6057 = this.halt;
  var v1788 = !v6057;
  if(v1788) {
    this.halt = true;
    var currentClocks = -1;
    var temp_var$$20 = 0;
    var v1781 = this.LCDisOn;
    if(v1781) {
      var v8639 = this.interruptsEnabled;
      var v6058 = v8639 & 1;
      var v1763 = v6058 == 1;
      if(v1763) {
        var v10377;
        var v10721 = this.modeSTAT;
        var v10590 = v10721 == 1;
        if(v10590) {
          v10377 = 298
        }else {
          v10377 = 144
        }
        var v9814 = v10377;
        var v9815 = this.actualScanLine;
        var v8640 = v9814 - v9815;
        var v6059 = 456 * v8640;
        var v6060 = this.LCDTicks;
        var v1761 = v6059 - v6060;
        var v1762 = this.doubleSpeedShifter;
        currentClocks = v1761 << v1762
      }
      var v8641 = this.interruptsEnabled;
      var v6061 = v8641 & 2;
      var v1780 = v6061 == 2;
      if(v1780) {
        var v1767 = this.mode0TriggerSTAT;
        if(v1767) {
          var v6062 = JAMScript.call(this.clocksUntilMode0, this, []);
          var v6063 = this.LCDTicks;
          var v1764 = v6062 - v6063;
          var v1765 = this.doubleSpeedShifter;
          temp_var$$20 = v1764 << v1765;
          var v6064 = temp_var$$20 <= currentClocks;
          var v8642 = !v6064;
          if(v8642) {
            v6064 = currentClocks == -1
          }
          var v1766 = v6064;
          if(v1766) {
            currentClocks = temp_var$$20
          }
        }
        var v6065 = this.mode1TriggerSTAT;
        if(v6065) {
          var v9816 = this.interruptsEnabled;
          var v8643 = v9816 & 1;
          v6065 = v8643 == 0
        }
        var v1771 = v6065;
        if(v1771) {
          var v10378;
          var v10722 = this.modeSTAT;
          var v10591 = v10722 == 1;
          if(v10591) {
            v10378 = 298
          }else {
            v10378 = 144
          }
          var v9817 = v10378;
          var v9818 = this.actualScanLine;
          var v8644 = v9817 - v9818;
          var v6066 = 456 * v8644;
          var v6067 = this.LCDTicks;
          var v1768 = v6066 - v6067;
          var v1769 = this.doubleSpeedShifter;
          temp_var$$20 = v1768 << v1769;
          var v6068 = temp_var$$20 <= currentClocks;
          var v8645 = !v6068;
          if(v8645) {
            v6068 = currentClocks == -1
          }
          var v1770 = v6068;
          if(v1770) {
            currentClocks = temp_var$$20
          }
        }
        var v1775 = this.mode2TriggerSTAT;
        if(v1775) {
          var v8646;
          var v10379 = this.actualScanLine;
          var v9820 = v10379 >= 143;
          if(v9820) {
            var v10380 = this.actualScanLine;
            var v9819 = 154 - v10380;
            v8646 = 456 * v9819
          }else {
            v8646 = 456
          }
          var v6069 = v8646;
          var v6070 = this.LCDTicks;
          var v1772 = v6069 - v6070;
          var v1773 = this.doubleSpeedShifter;
          temp_var$$20 = v1772 << v1773;
          var v6071 = temp_var$$20 <= currentClocks;
          var v8647 = !v6071;
          if(v8647) {
            v6071 = currentClocks == -1
          }
          var v1774 = v6071;
          if(v1774) {
            currentClocks = temp_var$$20
          }
        }
        var v6072 = this.LYCMatchTriggerSTAT;
        if(v6072) {
          var v9821 = this.memory;
          var v8648 = v9821[65349];
          v6072 = v8648 <= 153
        }
        var v1779 = v6072;
        if(v1779) {
          var v6073 = JAMScript.call(this.clocksUntilLYCMatch, this, []);
          var v6074 = this.LCDTicks;
          var v1776 = v6073 - v6074;
          var v1777 = this.doubleSpeedShifter;
          temp_var$$20 = v1776 << v1777;
          var v6075 = temp_var$$20 <= currentClocks;
          var v8649 = !v6075;
          if(v8649) {
            v6075 = currentClocks == -1
          }
          var v1778 = v6075;
          if(v1778) {
            currentClocks = temp_var$$20
          }
        }
      }
    }
    var v6076 = this.TIMAEnabled;
    if(v6076) {
      var v9822 = this.interruptsEnabled;
      var v8650 = v9822 & 4;
      v6076 = v8650 == 4
    }
    var v1785 = v6076;
    if(v1785) {
      var v9823 = this.memory;
      var v8651 = v9823[65285];
      var v6077 = 256 - v8651;
      var v6078 = this.TACClocker;
      var v1782 = v6077 * v6078;
      var v1783 = this.timerTicks;
      temp_var$$20 = v1782 - v1783;
      var v6079 = temp_var$$20 <= currentClocks;
      var v8652 = !v6079;
      if(v8652) {
        v6079 = currentClocks == -1
      }
      var v1784 = v6079;
      if(v1784) {
        currentClocks = temp_var$$20
      }
    }
    var v8653 = this.serialTimer;
    var v6080 = v8653 > 0;
    if(v6080) {
      var v9824 = this.interruptsEnabled;
      var v8654 = v9824 & 8;
      v6080 = v8654 == 8
    }
    var v1787 = v6080;
    if(v1787) {
      var v8655 = this.serialTimer;
      var v6081 = v8655 <= currentClocks;
      var v8656 = !v6081;
      if(v8656) {
        v6081 = currentClocks == -1
      }
      var v1786 = v6081;
      if(v1786) {
        currentClocks = this.serialTimer
      }
    }
  }else {
    currentClocks = this.remainingClocks
  }
  var v6082 = this.CPUCyclesTotal;
  var v6083 = this.emulatorTicks;
  var v1789 = v6082 - v6083;
  var v1790 = this.doubleSpeedShifter;
  var maxClocks = v1789 << v1790;
  var v1795 = currentClocks >= 0;
  if(v1795) {
    var v1794 = currentClocks <= maxClocks;
    if(v1794) {
      var v1791 = this.CPUTicks;
      var v10845 = Math.max(currentClocks, v1791);
      this.CPUTicks = v10845;
      JAMScript.call(this.updateCoreFull, this, []);
      this.halt = false;
      this.CPUTicks = 0
    }else {
      var v1792 = this.CPUTicks;
      var v10846 = Math.max(maxClocks, v1792);
      this.CPUTicks = v10846;
      var v1793 = this.CPUTicks;
      this.remainingClocks = currentClocks - v1793
    }
  }else {
    var v6084 = this.CPUTicks;
    this.CPUTicks = v6084 + maxClocks
  }
  return
}
function v714() {
  var v1797 = this.IME;
  if(v1797) {
    var v6085 = this.interruptsEnabled;
    var v6086 = this.interruptsRequested;
    var v1796 = v6085 & v6086;
    this.IRQLineMatched = v1796 & 31
  }
  return
}
function v713() {
  var bitShift = 0;
  var testbit = 1;
  var v1811 = bitShift < 5;
  do {
    var v8657 = this.IRQLineMatched;
    var v6087 = testbit & v8657;
    var v1809 = v6087 == testbit;
    if(v1809) {
      this.IME = false;
      var v6088 = this.interruptsRequested;
      this.interruptsRequested = v6088 - testbit;
      this.IRQLineMatched = 0;
      this.CPUTicks = 20;
      var v6089 = this.stackPointer;
      var v1798 = v6089 - 1;
      this.stackPointer = v1798 & 65535;
      var v1799 = this.memoryWriter;
      var v1800 = this.stackPointer;
      var v1801 = this.stackPointer;
      var v6090 = this.programCounter;
      var v1802 = v6090 >> 8;
      JAMScript.call(v1799[v1800], v1799, [this, v1801, v1802]);
      var v6091 = this.stackPointer;
      var v1803 = v6091 - 1;
      this.stackPointer = v1803 & 65535;
      var v1804 = this.memoryWriter;
      var v1805 = this.stackPointer;
      var v1806 = this.stackPointer;
      var v6092 = this.programCounter;
      var v1807 = v6092 & 255;
      JAMScript.call(v1804[v1805], v1804, [this, v1806, v1807]);
      var v1808 = bitShift << 3;
      this.programCounter = 64 | v1808;
      JAMScript.call(this.updateCore, this, []);
      return
    }
    var v1810 = bitShift = bitShift + 1;
    testbit = 1 << v1810;
    v1811 = bitShift < 5
  }while(v1811);
  return
}
function v712() {
  JAMScript.call(this.graphicsJIT, this, []);
  JAMScript.call(this.renderMidScanLine, this, []);
  return
}
function v711() {
  var v6093 = this.queuedScanLines;
  var v1813 = v6093 < 144;
  if(v1813) {
    var v6094 = this.queuedScanLines;
    this.queuedScanLines = v6094 + 1
  }else {
    this.currentX = 0;
    this.midScanlineOffset = -1;
    var v6095 = this.lastUnrenderedLine;
    var v1812 = v6095 < 143;
    if(v1812) {
      var v6096 = this.lastUnrenderedLine;
      this.lastUnrenderedLine = v6096 + 1
    }else {
      this.lastUnrenderedLine = 0
    }
  }
  return
}
function v710() {
  var v6097 = this.queuedScanLines;
  var v1816 = v6097 > 0;
  for(;v1816;) {
    var v1814 = this.lastUnrenderedLine;
    JAMScript.call(this.renderScanLine, this, [v1814]);
    var v6098 = this.lastUnrenderedLine;
    var v1815 = v6098 < 143;
    if(v1815) {
      var v6099 = this.lastUnrenderedLine;
      this.lastUnrenderedLine = v6099 + 1
    }else {
      this.lastUnrenderedLine = 0
    }
    var v6100 = this.queuedScanLines;
    this.queuedScanLines = v6100 - 1;
    var v6101 = this.queuedScanLines;
    v1816 = v6101 > 0
  }
  return
}
function v709() {
  var v6102 = this.totalLinesPassed;
  var v6103 = this.queuedScanLines;
  this.totalLinesPassed = v6102 + v6103;
  JAMScript.call(this.graphicsJITScanlineGroup, this, []);
  return
}
function v708() {
  var v1817 = this.LCDisOn;
  if(v1817) {
    this.totalLinesPassed = 0;
    JAMScript.call(this.graphicsJITScanlineGroup, this, [])
  }
  return
}
function v707(address$$7) {
  var v8658 = this.memory;
  var v8659 = 1 | address$$7;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6104 = v8658[v8659]
  }
  var v1818 = v6104 << 8;
  var v6105 = this.memory;
  var v6106 = 40958 & address$$7;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1819 = v6105[v6106]
  }
  var lineCopy$$5 = v1818 | v1819;
  address$$7 = address$$7 & 8190;
  var v1820 = this.tileCache;
  var v1821 = address$$7 >> 4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock1$$4 = v1820[v1821]
  }
  var v1822 = this.tileCache;
  var v6107 = address$$7 >> 4;
  var v1823 = 512 | v6107;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock2$$4 = v1822[v1823]
  }
  var v1824 = this.tileCache;
  var v6108 = address$$7 >> 4;
  var v1825 = 1024 | v6108;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock3$$4 = v1824[v1825]
  }
  var v1826 = this.tileCache;
  var v6109 = address$$7 >> 4;
  var v1827 = 1536 | v6109;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock4$$4 = v1826[v1827]
  }
  var v1828 = address$$7 & 14;
  address$$7 = v1828 << 2;
  var addressFlipped$$4 = 56 - address$$7;
  var v1829 = addressFlipped$$4 | 7;
  var v6110 = address$$7 | 7;
  var v9825 = lineCopy$$5 & 256;
  var v8660 = v9825 >> 7;
  var v8661 = lineCopy$$5 & 1;
  tileBlock4$$4[addressFlipped$$4] = JAMScript.set(tileBlock2$$4, address$$7, tileBlock3$$4[v1829] = tileBlock1$$4[v6110] = v8660 | v8661);
  var v1830 = addressFlipped$$4 | 1;
  var v6111 = address$$7 | 1;
  var v8662 = addressFlipped$$4 | 6;
  var v9826 = address$$7 | 6;
  var v10592 = lineCopy$$5 & 512;
  var v10381 = v10592 >> 8;
  var v10593 = lineCopy$$5 & 2;
  var v10382 = v10593 >> 1;
  tileBlock4$$4[v1830] = tileBlock2$$4[v6111] = tileBlock3$$4[v8662] = tileBlock1$$4[v9826] = v10381 | v10382;
  var v1831 = addressFlipped$$4 | 2;
  var v6112 = address$$7 | 2;
  var v8663 = addressFlipped$$4 | 5;
  var v9827 = address$$7 | 5;
  var v10594 = lineCopy$$5 & 1024;
  var v10383 = v10594 >> 9;
  var v10595 = lineCopy$$5 & 4;
  var v10384 = v10595 >> 2;
  tileBlock4$$4[v1831] = tileBlock2$$4[v6112] = tileBlock3$$4[v8663] = tileBlock1$$4[v9827] = v10383 | v10384;
  var v1832 = addressFlipped$$4 | 3;
  var v6113 = address$$7 | 3;
  var v8664 = addressFlipped$$4 | 4;
  var v9828 = address$$7 | 4;
  var v10596 = lineCopy$$5 & 2048;
  var v10385 = v10596 >> 10;
  var v10597 = lineCopy$$5 & 8;
  var v10386 = v10597 >> 3;
  tileBlock4$$4[v1832] = tileBlock2$$4[v6113] = tileBlock3$$4[v8664] = tileBlock1$$4[v9828] = v10385 | v10386;
  var v1833 = addressFlipped$$4 | 4;
  var v6114 = address$$7 | 4;
  var v8665 = addressFlipped$$4 | 3;
  var v9829 = address$$7 | 3;
  var v10598 = lineCopy$$5 & 4096;
  var v10387 = v10598 >> 11;
  var v10599 = lineCopy$$5 & 16;
  var v10388 = v10599 >> 4;
  tileBlock4$$4[v1833] = tileBlock2$$4[v6114] = tileBlock3$$4[v8665] = tileBlock1$$4[v9829] = v10387 | v10388;
  var v1834 = addressFlipped$$4 | 5;
  var v6115 = address$$7 | 5;
  var v8666 = addressFlipped$$4 | 2;
  var v9830 = address$$7 | 2;
  var v10600 = lineCopy$$5 & 8192;
  var v10389 = v10600 >> 12;
  var v10601 = lineCopy$$5 & 32;
  var v10390 = v10601 >> 5;
  tileBlock4$$4[v1834] = tileBlock2$$4[v6115] = tileBlock3$$4[v8666] = tileBlock1$$4[v9830] = v10389 | v10390;
  var v1835 = addressFlipped$$4 | 6;
  var v6116 = address$$7 | 6;
  var v8667 = addressFlipped$$4 | 1;
  var v9831 = address$$7 | 1;
  var v10602 = lineCopy$$5 & 16384;
  var v10391 = v10602 >> 13;
  var v10603 = lineCopy$$5 & 64;
  var v10392 = v10603 >> 6;
  tileBlock4$$4[v1835] = tileBlock2$$4[v6116] = tileBlock3$$4[v8667] = tileBlock1$$4[v9831] = v10391 | v10392;
  var v1836 = addressFlipped$$4 | 7;
  var v6117 = address$$7 | 7;
  var v9832 = lineCopy$$5 & 32768;
  var v8668 = v9832 >> 14;
  var v9833 = lineCopy$$5 & 128;
  var v8669 = v9833 >> 7;
  tileBlock4$$4[v1836] = tileBlock2$$4[v6117] = tileBlock3$$4[addressFlipped$$4] = JAMScript.set(tileBlock1$$4, address$$7, v8668 | v8669);
  return
}
function v706(vramAddress$$1) {
  var address$$6 = vramAddress$$1 >> 4;
  var v1837 = this.tileCache;
  var v1838 = 2048 | address$$6;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock1$$3 = v1837[v1838]
  }
  var v1839 = this.tileCache;
  var v1840 = 2560 | address$$6;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock2$$3 = v1839[v1840]
  }
  var v1841 = this.tileCache;
  var v1842 = 3072 | address$$6;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock3$$3 = v1841[v1842]
  }
  var v1843 = this.tileCache;
  var v1844 = 3584 | address$$6;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock4$$3 = v1843[v1844]
  }
  var lineCopy$$4 = 0;
  address$$6 = 0;
  var addressFlipped$$3 = 56;
  var v1855 = addressFlipped$$3 > -1;
  do {
    var v8670 = this.VRAM;
    var v8671 = 1 | vramAddress$$1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6118 = v8670[v8671]
    }
    var v1845 = v6118 << 8;
    var v6119 = this.VRAM;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1846 = v6119[vramAddress$$1]
    }
    lineCopy$$4 = v1845 | v1846;
    var v1847 = addressFlipped$$3 | 7;
    var v6120 = address$$6 | 7;
    var v9834 = lineCopy$$4 & 256;
    var v8672 = v9834 >> 7;
    var v8673 = lineCopy$$4 & 1;
    tileBlock4$$3[addressFlipped$$3] = tileBlock2$$3[address$$6] = tileBlock3$$3[v1847] = tileBlock1$$3[v6120] = v8672 | v8673;
    var v1848 = addressFlipped$$3 | 1;
    var v6121 = address$$6 | 1;
    var v8674 = addressFlipped$$3 | 6;
    var v9835 = address$$6 | 6;
    var v10604 = lineCopy$$4 & 512;
    var v10393 = v10604 >> 8;
    var v10605 = lineCopy$$4 & 2;
    var v10394 = v10605 >> 1;
    tileBlock4$$3[v1848] = tileBlock2$$3[v6121] = tileBlock3$$3[v8674] = tileBlock1$$3[v9835] = v10393 | v10394;
    var v1849 = addressFlipped$$3 | 2;
    var v6122 = address$$6 | 2;
    var v8675 = addressFlipped$$3 | 5;
    var v9836 = address$$6 | 5;
    var v10606 = lineCopy$$4 & 1024;
    var v10395 = v10606 >> 9;
    var v10607 = lineCopy$$4 & 4;
    var v10396 = v10607 >> 2;
    tileBlock4$$3[v1849] = tileBlock2$$3[v6122] = tileBlock3$$3[v8675] = tileBlock1$$3[v9836] = v10395 | v10396;
    var v1850 = addressFlipped$$3 | 3;
    var v6123 = address$$6 | 3;
    var v8676 = addressFlipped$$3 | 4;
    var v9837 = address$$6 | 4;
    var v10608 = lineCopy$$4 & 2048;
    var v10397 = v10608 >> 10;
    var v10609 = lineCopy$$4 & 8;
    var v10398 = v10609 >> 3;
    tileBlock4$$3[v1850] = tileBlock2$$3[v6123] = tileBlock3$$3[v8676] = tileBlock1$$3[v9837] = v10397 | v10398;
    var v1851 = addressFlipped$$3 | 4;
    var v6124 = address$$6 | 4;
    var v8677 = addressFlipped$$3 | 3;
    var v9838 = address$$6 | 3;
    var v10610 = lineCopy$$4 & 4096;
    var v10399 = v10610 >> 11;
    var v10611 = lineCopy$$4 & 16;
    var v10400 = v10611 >> 4;
    tileBlock4$$3[v1851] = tileBlock2$$3[v6124] = tileBlock3$$3[v8677] = tileBlock1$$3[v9838] = v10399 | v10400;
    var v1852 = addressFlipped$$3 | 5;
    var v6125 = address$$6 | 5;
    var v8678 = addressFlipped$$3 | 2;
    var v9839 = address$$6 | 2;
    var v10612 = lineCopy$$4 & 8192;
    var v10401 = v10612 >> 12;
    var v10613 = lineCopy$$4 & 32;
    var v10402 = v10613 >> 5;
    tileBlock4$$3[v1852] = tileBlock2$$3[v6125] = tileBlock3$$3[v8678] = tileBlock1$$3[v9839] = v10401 | v10402;
    var v1853 = addressFlipped$$3 | 6;
    var v6126 = address$$6 | 6;
    var v8679 = addressFlipped$$3 | 1;
    var v9840 = address$$6 | 1;
    var v10614 = lineCopy$$4 & 16384;
    var v10403 = v10614 >> 13;
    var v10615 = lineCopy$$4 & 64;
    var v10404 = v10615 >> 6;
    tileBlock4$$3[v1853] = tileBlock2$$3[v6126] = tileBlock3$$3[v8679] = tileBlock1$$3[v9840] = v10403 | v10404;
    var v1854 = addressFlipped$$3 | 7;
    var v6127 = address$$6 | 7;
    var v9841 = lineCopy$$4 & 32768;
    var v8680 = v9841 >> 14;
    var v9842 = lineCopy$$4 & 128;
    var v8681 = v9842 >> 7;
    tileBlock4$$3[v1854] = tileBlock2$$3[v6127] = tileBlock3$$3[addressFlipped$$3] = tileBlock1$$3[address$$6] = v8680 | v8681;
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
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6128 = v8682[v8683]
  }
  var v1856 = v6128 << 8;
  var v6129 = this.VRAM;
  var v6130 = 8190 & address$$5;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1857 = v6129[v6130]
  }
  var lineCopy$$3 = v1856 | v1857;
  var v1858 = this.tileCache;
  var v6131 = address$$5 >> 4;
  var v1859 = 2048 | v6131;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock1$$2 = v1858[v1859]
  }
  var v1860 = this.tileCache;
  var v6132 = address$$5 >> 4;
  var v1861 = 2560 | v6132;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock2$$2 = v1860[v1861]
  }
  var v1862 = this.tileCache;
  var v6133 = address$$5 >> 4;
  var v1863 = 3072 | v6133;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock3$$2 = v1862[v1863]
  }
  var v1864 = this.tileCache;
  var v6134 = address$$5 >> 4;
  var v1865 = 3584 | v6134;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock4$$2 = v1864[v1865]
  }
  var v1866 = address$$5 & 14;
  address$$5 = v1866 << 2;
  var addressFlipped$$2 = 56 - address$$5;
  var v1867 = addressFlipped$$2 | 7;
  var v6135 = address$$5 | 7;
  var v9843 = lineCopy$$3 & 256;
  var v8684 = v9843 >> 7;
  var v8685 = lineCopy$$3 & 1;
  tileBlock4$$2[addressFlipped$$2] = JAMScript.set(tileBlock2$$2, address$$5, tileBlock3$$2[v1867] = tileBlock1$$2[v6135] = v8684 | v8685);
  var v1868 = addressFlipped$$2 | 1;
  var v6136 = address$$5 | 1;
  var v8686 = addressFlipped$$2 | 6;
  var v9844 = address$$5 | 6;
  var v10616 = lineCopy$$3 & 512;
  var v10405 = v10616 >> 8;
  var v10617 = lineCopy$$3 & 2;
  var v10406 = v10617 >> 1;
  tileBlock4$$2[v1868] = tileBlock2$$2[v6136] = tileBlock3$$2[v8686] = tileBlock1$$2[v9844] = v10405 | v10406;
  var v1869 = addressFlipped$$2 | 2;
  var v6137 = address$$5 | 2;
  var v8687 = addressFlipped$$2 | 5;
  var v9845 = address$$5 | 5;
  var v10618 = lineCopy$$3 & 1024;
  var v10407 = v10618 >> 9;
  var v10619 = lineCopy$$3 & 4;
  var v10408 = v10619 >> 2;
  tileBlock4$$2[v1869] = tileBlock2$$2[v6137] = tileBlock3$$2[v8687] = tileBlock1$$2[v9845] = v10407 | v10408;
  var v1870 = addressFlipped$$2 | 3;
  var v6138 = address$$5 | 3;
  var v8688 = addressFlipped$$2 | 4;
  var v9846 = address$$5 | 4;
  var v10620 = lineCopy$$3 & 2048;
  var v10409 = v10620 >> 10;
  var v10621 = lineCopy$$3 & 8;
  var v10410 = v10621 >> 3;
  tileBlock4$$2[v1870] = tileBlock2$$2[v6138] = tileBlock3$$2[v8688] = tileBlock1$$2[v9846] = v10409 | v10410;
  var v1871 = addressFlipped$$2 | 4;
  var v6139 = address$$5 | 4;
  var v8689 = addressFlipped$$2 | 3;
  var v9847 = address$$5 | 3;
  var v10622 = lineCopy$$3 & 4096;
  var v10411 = v10622 >> 11;
  var v10623 = lineCopy$$3 & 16;
  var v10412 = v10623 >> 4;
  tileBlock4$$2[v1871] = tileBlock2$$2[v6139] = tileBlock3$$2[v8689] = tileBlock1$$2[v9847] = v10411 | v10412;
  var v1872 = addressFlipped$$2 | 5;
  var v6140 = address$$5 | 5;
  var v8690 = addressFlipped$$2 | 2;
  var v9848 = address$$5 | 2;
  var v10624 = lineCopy$$3 & 8192;
  var v10413 = v10624 >> 12;
  var v10625 = lineCopy$$3 & 32;
  var v10414 = v10625 >> 5;
  tileBlock4$$2[v1872] = tileBlock2$$2[v6140] = tileBlock3$$2[v8690] = tileBlock1$$2[v9848] = v10413 | v10414;
  var v1873 = addressFlipped$$2 | 6;
  var v6141 = address$$5 | 6;
  var v8691 = addressFlipped$$2 | 1;
  var v9849 = address$$5 | 1;
  var v10626 = lineCopy$$3 & 16384;
  var v10415 = v10626 >> 13;
  var v10627 = lineCopy$$3 & 64;
  var v10416 = v10627 >> 6;
  tileBlock4$$2[v1873] = tileBlock2$$2[v6141] = tileBlock3$$2[v8691] = tileBlock1$$2[v9849] = v10415 | v10416;
  var v1874 = addressFlipped$$2 | 7;
  var v6142 = address$$5 | 7;
  var v9850 = lineCopy$$3 & 32768;
  var v8692 = v9850 >> 14;
  var v9851 = lineCopy$$3 & 128;
  var v8693 = v9851 >> 7;
  tileBlock4$$2[v1874] = tileBlock2$$2[v6142] = tileBlock3$$2[addressFlipped$$2] = JAMScript.set(tileBlock1$$2, address$$5, v8692 | v8693);
  return
}
function v704(vramAddress) {
  var address$$4 = vramAddress >> 4;
  var v1875 = this.tileCache;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock1$$1 = v1875[address$$4]
  }
  var v1876 = this.tileCache;
  var v1877 = 512 | address$$4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock2$$1 = v1876[v1877]
  }
  var v1878 = this.tileCache;
  var v1879 = 1024 | address$$4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock3$$1 = v1878[v1879]
  }
  var v1880 = this.tileCache;
  var v1881 = 1536 | address$$4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6143 = v8694[v8695]
    }
    var v1882 = v6143 << 8;
    var v6144 = this.memory;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1883 = v6144[vramAddress]
    }
    lineCopy$$2 = v1882 | v1883;
    var v1884 = addressFlipped$$1 | 7;
    var v6145 = address$$4 | 7;
    var v9852 = lineCopy$$2 & 256;
    var v8696 = v9852 >> 7;
    var v8697 = lineCopy$$2 & 1;
    tileBlock4$$1[addressFlipped$$1] = tileBlock2$$1[address$$4] = tileBlock3$$1[v1884] = tileBlock1$$1[v6145] = v8696 | v8697;
    var v1885 = addressFlipped$$1 | 1;
    var v6146 = address$$4 | 1;
    var v8698 = addressFlipped$$1 | 6;
    var v9853 = address$$4 | 6;
    var v10628 = lineCopy$$2 & 512;
    var v10417 = v10628 >> 8;
    var v10629 = lineCopy$$2 & 2;
    var v10418 = v10629 >> 1;
    tileBlock4$$1[v1885] = tileBlock2$$1[v6146] = tileBlock3$$1[v8698] = tileBlock1$$1[v9853] = v10417 | v10418;
    var v1886 = addressFlipped$$1 | 2;
    var v6147 = address$$4 | 2;
    var v8699 = addressFlipped$$1 | 5;
    var v9854 = address$$4 | 5;
    var v10630 = lineCopy$$2 & 1024;
    var v10419 = v10630 >> 9;
    var v10631 = lineCopy$$2 & 4;
    var v10420 = v10631 >> 2;
    tileBlock4$$1[v1886] = tileBlock2$$1[v6147] = tileBlock3$$1[v8699] = tileBlock1$$1[v9854] = v10419 | v10420;
    var v1887 = addressFlipped$$1 | 3;
    var v6148 = address$$4 | 3;
    var v8700 = addressFlipped$$1 | 4;
    var v9855 = address$$4 | 4;
    var v10632 = lineCopy$$2 & 2048;
    var v10421 = v10632 >> 10;
    var v10633 = lineCopy$$2 & 8;
    var v10422 = v10633 >> 3;
    tileBlock4$$1[v1887] = tileBlock2$$1[v6148] = tileBlock3$$1[v8700] = tileBlock1$$1[v9855] = v10421 | v10422;
    var v1888 = addressFlipped$$1 | 4;
    var v6149 = address$$4 | 4;
    var v8701 = addressFlipped$$1 | 3;
    var v9856 = address$$4 | 3;
    var v10634 = lineCopy$$2 & 4096;
    var v10423 = v10634 >> 11;
    var v10635 = lineCopy$$2 & 16;
    var v10424 = v10635 >> 4;
    tileBlock4$$1[v1888] = tileBlock2$$1[v6149] = tileBlock3$$1[v8701] = tileBlock1$$1[v9856] = v10423 | v10424;
    var v1889 = addressFlipped$$1 | 5;
    var v6150 = address$$4 | 5;
    var v8702 = addressFlipped$$1 | 2;
    var v9857 = address$$4 | 2;
    var v10636 = lineCopy$$2 & 8192;
    var v10425 = v10636 >> 12;
    var v10637 = lineCopy$$2 & 32;
    var v10426 = v10637 >> 5;
    tileBlock4$$1[v1889] = tileBlock2$$1[v6150] = tileBlock3$$1[v8702] = tileBlock1$$1[v9857] = v10425 | v10426;
    var v1890 = addressFlipped$$1 | 6;
    var v6151 = address$$4 | 6;
    var v8703 = addressFlipped$$1 | 1;
    var v9858 = address$$4 | 1;
    var v10638 = lineCopy$$2 & 16384;
    var v10427 = v10638 >> 13;
    var v10639 = lineCopy$$2 & 64;
    var v10428 = v10639 >> 6;
    tileBlock4$$1[v1890] = tileBlock2$$1[v6151] = tileBlock3$$1[v8703] = tileBlock1$$1[v9858] = v10427 | v10428;
    var v1891 = addressFlipped$$1 | 7;
    var v6152 = address$$4 | 7;
    var v9859 = lineCopy$$2 & 32768;
    var v8704 = v9859 >> 14;
    var v9860 = lineCopy$$2 & 128;
    var v8705 = v9860 >> 7;
    tileBlock4$$1[v1891] = tileBlock2$$1[v6152] = tileBlock3$$1[addressFlipped$$1] = tileBlock1$$1[address$$4] = v8704 | v8705;
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
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6153 = v8706[v8707]
  }
  var v1893 = v6153 << 8;
  var v6154 = this.memory;
  var v6155 = 40958 & address$$3;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1894 = v6154[v6155]
  }
  var lineCopy$$1 = v1893 | v1894;
  address$$3 = address$$3 & 8190;
  var v1895 = this.tileCache;
  var v1896 = address$$3 >> 4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock1 = v1895[v1896]
  }
  var v1897 = this.tileCache;
  var v6156 = address$$3 >> 4;
  var v1898 = 512 | v6156;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock2 = v1897[v1898]
  }
  var v1899 = this.tileCache;
  var v6157 = address$$3 >> 4;
  var v1900 = 1024 | v6157;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock3 = v1899[v1900]
  }
  var v1901 = this.tileCache;
  var v6158 = address$$3 >> 4;
  var v1902 = 1536 | v6158;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock4 = v1901[v1902]
  }
  var v1903 = address$$3 & 14;
  address$$3 = v1903 << 2;
  var addressFlipped = 56 - address$$3;
  var v1904 = addressFlipped | 7;
  var v6159 = address$$3 | 7;
  var v9861 = lineCopy$$1 & 256;
  var v8708 = v9861 >> 7;
  var v8709 = lineCopy$$1 & 1;
  tileBlock4[addressFlipped] = JAMScript.set(tileBlock2, address$$3, tileBlock3[v1904] = tileBlock1[v6159] = v8708 | v8709);
  var v1905 = addressFlipped | 1;
  var v6160 = address$$3 | 1;
  var v8710 = addressFlipped | 6;
  var v9862 = address$$3 | 6;
  var v10640 = lineCopy$$1 & 512;
  var v10429 = v10640 >> 8;
  var v10641 = lineCopy$$1 & 2;
  var v10430 = v10641 >> 1;
  tileBlock4[v1905] = tileBlock2[v6160] = tileBlock3[v8710] = tileBlock1[v9862] = v10429 | v10430;
  var v1906 = addressFlipped | 2;
  var v6161 = address$$3 | 2;
  var v8711 = addressFlipped | 5;
  var v9863 = address$$3 | 5;
  var v10642 = lineCopy$$1 & 1024;
  var v10431 = v10642 >> 9;
  var v10643 = lineCopy$$1 & 4;
  var v10432 = v10643 >> 2;
  tileBlock4[v1906] = tileBlock2[v6161] = tileBlock3[v8711] = tileBlock1[v9863] = v10431 | v10432;
  var v1907 = addressFlipped | 3;
  var v6162 = address$$3 | 3;
  var v8712 = addressFlipped | 4;
  var v9864 = address$$3 | 4;
  var v10644 = lineCopy$$1 & 2048;
  var v10433 = v10644 >> 10;
  var v10645 = lineCopy$$1 & 8;
  var v10434 = v10645 >> 3;
  tileBlock4[v1907] = tileBlock2[v6162] = tileBlock3[v8712] = tileBlock1[v9864] = v10433 | v10434;
  var v1908 = addressFlipped | 4;
  var v6163 = address$$3 | 4;
  var v8713 = addressFlipped | 3;
  var v9865 = address$$3 | 3;
  var v10646 = lineCopy$$1 & 4096;
  var v10435 = v10646 >> 11;
  var v10647 = lineCopy$$1 & 16;
  var v10436 = v10647 >> 4;
  tileBlock4[v1908] = tileBlock2[v6163] = tileBlock3[v8713] = tileBlock1[v9865] = v10435 | v10436;
  var v1909 = addressFlipped | 5;
  var v6164 = address$$3 | 5;
  var v8714 = addressFlipped | 2;
  var v9866 = address$$3 | 2;
  var v10648 = lineCopy$$1 & 8192;
  var v10437 = v10648 >> 12;
  var v10649 = lineCopy$$1 & 32;
  var v10438 = v10649 >> 5;
  tileBlock4[v1909] = tileBlock2[v6164] = tileBlock3[v8714] = tileBlock1[v9866] = v10437 | v10438;
  var v1910 = addressFlipped | 6;
  var v6165 = address$$3 | 6;
  var v8715 = addressFlipped | 1;
  var v9867 = address$$3 | 1;
  var v10650 = lineCopy$$1 & 16384;
  var v10439 = v10650 >> 13;
  var v10651 = lineCopy$$1 & 64;
  var v10440 = v10651 >> 6;
  tileBlock4[v1910] = tileBlock2[v6165] = tileBlock3[v8715] = tileBlock1[v9867] = v10439 | v10440;
  var v1911 = addressFlipped | 7;
  var v6166 = address$$3 | 7;
  var v9868 = lineCopy$$1 & 32768;
  var v8716 = v9868 >> 14;
  var v9869 = lineCopy$$1 & 128;
  var v8717 = v9869 >> 7;
  tileBlock4[v1911] = tileBlock2[v6166] = tileBlock3[addressFlipped] = JAMScript.set(tileBlock1, address$$3, v8716 | v8717);
  return
}
function v702(address$$2) {
  var v8718 = this.memory;
  var v8719 = 1 | address$$2;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6167 = v8718[v8719]
  }
  var v1912 = v6167 << 8;
  var v6168 = this.memory;
  var v6169 = 40958 & address$$2;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1913 = v6168[v6169]
  }
  var lineCopy = v1912 | v1913;
  var v1914 = this.tileCache;
  var v6170 = address$$2 & 8176;
  var v1915 = v6170 >> 4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock = v1914[v1915]
  }
  var v1916 = address$$2 & 14;
  address$$2 = v1916 << 2;
  var v1917 = address$$2 | 7;
  var v8720 = lineCopy & 256;
  var v6171 = v8720 >> 7;
  var v6172 = lineCopy & 1;
  tileBlock[v1917] = v6171 | v6172;
  var v1918 = address$$2 | 6;
  var v8721 = lineCopy & 512;
  var v6173 = v8721 >> 8;
  var v8722 = lineCopy & 2;
  var v6174 = v8722 >> 1;
  tileBlock[v1918] = v6173 | v6174;
  var v1919 = address$$2 | 5;
  var v8723 = lineCopy & 1024;
  var v6175 = v8723 >> 9;
  var v8724 = lineCopy & 4;
  var v6176 = v8724 >> 2;
  tileBlock[v1919] = v6175 | v6176;
  var v1920 = address$$2 | 4;
  var v8725 = lineCopy & 2048;
  var v6177 = v8725 >> 10;
  var v8726 = lineCopy & 8;
  var v6178 = v8726 >> 3;
  tileBlock[v1920] = v6177 | v6178;
  var v1921 = address$$2 | 3;
  var v8727 = lineCopy & 4096;
  var v6179 = v8727 >> 11;
  var v8728 = lineCopy & 16;
  var v6180 = v8728 >> 4;
  tileBlock[v1921] = v6179 | v6180;
  var v1922 = address$$2 | 2;
  var v8729 = lineCopy & 8192;
  var v6181 = v8729 >> 12;
  var v8730 = lineCopy & 32;
  var v6182 = v8730 >> 5;
  tileBlock[v1922] = v6181 | v6182;
  var v1923 = address$$2 | 1;
  var v8731 = lineCopy & 16384;
  var v6183 = v8731 >> 13;
  var v8732 = lineCopy & 64;
  var v6184 = v8732 >> 6;
  tileBlock[v1923] = v6183 | v6184;
  var v6185 = lineCopy & 32768;
  var v1924 = v6185 >> 14;
  var v6186 = lineCopy & 128;
  var v1925 = v6186 >> 7;
  JAMScript.set(tileBlock, address$$2, v1924 | v1925);
  return
}
function v701(scanlineToRender$$9) {
  var v1972 = this.gfxSpriteShow;
  if(v1972) {
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
    var v1971 = this.gfxSpriteNormalHeight;
    if(v1971) {
      var v6187 = OAMAddress$$2 < 65184;
      if(v6187) {
        v6187 = spriteCount$$2 < 10
      }
      var v1946 = v6187;
      for(;v1946;) {
        var v6188 = this.memory;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1926 = v6188[OAMAddress$$2]
        }
        yoffset$$5 = lineAdjusted$$2 - v1926;
        var v6189 = yoffset$$5 & 7;
        var v1945 = v6189 == yoffset$$5;
        if(v1945) {
          var v6190 = this.memory;
          var v6191 = OAMAddress$$2 | 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v1927 = v6190[v6191]
          }
          xcoord$$1 = v1927 - 8;
          var v1928 = xcoord$$1 + 8;
          endX = Math.min(160, v1928);
          var v1929 = this.memory;
          var v1930 = OAMAddress$$2 | 3;
          attrCode$$5 = v1929[v1930];
          var v1931 = attrCode$$5 & 7;
          palette$$5 = v1931 << 2;
          var v1932 = this.tileCache;
          var v9870 = attrCode$$5 & 8;
          var v8733 = v9870 << 8;
          var v9871 = attrCode$$5 & 96;
          var v8734 = v9871 << 4;
          var v6192 = v8733 | v8734;
          var v8735 = this.memory;
          var v8736 = OAMAddress$$2 | 2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6193 = v8735[v8736]
          }
          var v1933 = v6192 | v6193;
          tile$$7 = v1932[v1933];
          var v1934;
          var v6194 = xcoord$$1 > 0;
          if(v6194) {
            v1934 = xcoord$$1
          }else {
            v1934 = 0
          }
          xCounter = v1934;
          var v6195 = yoffset$$5 << 3;
          xcoord$$1 = xcoord$$1 - v6195;
          var v1935 = this.pixelStart;
          currentPixel$$1 = v1935 + xCounter;
          var v1944 = xCounter < endX;
          for(;v1944;) {
            var v8737 = this.frameBuffer;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v6196 = v8737[currentPixel$$1]
            }
            var v1943 = v6196 >= 33554432;
            if(v1943) {
              var v1936 = xCounter - xcoord$$1;
              data$$31 = tile$$7[v1936];
              var v1938 = data$$31 > 0;
              if(v1938) {
                var v1937 = this.frameBuffer;
                var v6197 = this.gbcOBJPalette;
                var v6198 = palette$$5 | data$$31;
                JAMScript.set(v1937, currentPixel$$1, v6197[v6198])
              }
            }else {
              var v8738 = this.frameBuffer;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6199 = v8738[currentPixel$$1]
              }
              var v1942 = v6199 < 16777216;
              if(v1942) {
                var v1939 = xCounter - xcoord$$1;
                data$$31 = tile$$7[v1939];
                var v6200 = data$$31 > 0;
                if(v6200) {
                  v6200 = attrCode$$5 < 128
                }
                var v1941 = v6200;
                if(v1941) {
                  var v1940 = this.frameBuffer;
                  var v6201 = this.gbcOBJPalette;
                  var v6202 = palette$$5 | data$$31;
                  JAMScript.set(v1940, currentPixel$$1, v6201[v6202])
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
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1947 = v6205[OAMAddress$$2]
        }
        yoffset$$5 = lineAdjusted$$2 - v1947;
        var v6206 = yoffset$$5 & 15;
        var v1969 = v6206 == yoffset$$5;
        if(v1969) {
          var v6207 = this.memory;
          var v6208 = OAMAddress$$2 | 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v1948 = v6207[v6208]
          }
          xcoord$$1 = v1948 - 8;
          var v1949 = xcoord$$1 + 8;
          endX = Math.min(160, v1949);
          var v1950 = this.memory;
          var v1951 = OAMAddress$$2 | 3;
          attrCode$$5 = v1950[v1951];
          var v1952 = attrCode$$5 & 7;
          palette$$5 = v1952 << 2;
          var v6209 = attrCode$$5 & 64;
          var v8739 = yoffset$$5 << 3;
          var v6210 = 64 & v8739;
          var v1957 = v6209 == v6210;
          if(v1957) {
            var v1953 = this.tileCache;
            var v9872 = attrCode$$5 & 8;
            var v8740 = v9872 << 8;
            var v9873 = attrCode$$5 & 96;
            var v8741 = v9873 << 4;
            var v6211 = v8740 | v8741;
            var v9874 = this.memory;
            var v9875 = OAMAddress$$2 | 2;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v8742 = v9874[v9875]
            }
            var v6212 = v8742 & 254;
            var v1954 = v6211 | v6212;
            tile$$7 = v1953[v1954]
          }else {
            var v1955 = this.tileCache;
            var v10441 = attrCode$$5 & 8;
            var v9876 = v10441 << 8;
            var v10442 = attrCode$$5 & 96;
            var v9877 = v10442 << 4;
            var v8743 = v9876 | v9877;
            var v9878 = this.memory;
            var v9879 = OAMAddress$$2 | 2;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v8744 = v9878[v9879]
            }
            var v6213 = v8743 | v8744;
            var v1956 = v6213 | 1;
            tile$$7 = v1955[v1956]
          }
          var v1958;
          var v6214 = xcoord$$1 > 0;
          if(v6214) {
            v1958 = xcoord$$1
          }else {
            v1958 = 0
          }
          xCounter = v1958;
          var v8745 = yoffset$$5 & 7;
          var v6215 = v8745 << 3;
          xcoord$$1 = xcoord$$1 - v6215;
          var v1959 = this.pixelStart;
          currentPixel$$1 = v1959 + xCounter;
          var v1968 = xCounter < endX;
          for(;v1968;) {
            var v8746 = this.frameBuffer;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v6216 = v8746[currentPixel$$1]
            }
            var v1967 = v6216 >= 33554432;
            if(v1967) {
              var v1960 = xCounter - xcoord$$1;
              data$$31 = tile$$7[v1960];
              var v1962 = data$$31 > 0;
              if(v1962) {
                var v1961 = this.frameBuffer;
                var v6217 = this.gbcOBJPalette;
                var v6218 = palette$$5 | data$$31;
                JAMScript.set(v1961, currentPixel$$1, v6217[v6218])
              }
            }else {
              var v8747 = this.frameBuffer;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6219 = v8747[currentPixel$$1]
              }
              var v1966 = v6219 < 16777216;
              if(v1966) {
                var v1963 = xCounter - xcoord$$1;
                data$$31 = tile$$7[v1963];
                var v6220 = data$$31 > 0;
                if(v6220) {
                  v6220 = attrCode$$5 < 128
                }
                var v1965 = v6220;
                if(v1965) {
                  var v1964 = this.frameBuffer;
                  var v6221 = this.gbcOBJPalette;
                  var v6222 = palette$$5 | data$$31;
                  JAMScript.set(v1964, currentPixel$$1, v6221[v6222])
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1973 = v6225[address$$1]
    }
    diff = scanlineToRender$$8 - v1973;
    var v6226 = diff & drawableRange;
    var v1976 = v6226 == diff;
    if(v1976) {
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
  var v2037 = this.gfxSpriteShow;
  if(v2037) {
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
    var v2036 = this.gfxSpriteNormalHeight;
    if(v2036) {
      length$$18 = JAMScript.call(this.findLowestSpriteDrawable, this, [lineAdjusted$$1, 7]);
      var v2006 = spriteCount < length$$18;
      for(;v2006;) {
        var v1981 = this.OAMAddressCache;
        OAMAddress$$1 = v1981[spriteCount];
        var v8748 = this.memory;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v6228 = v8748[OAMAddress$$1]
        }
        var v1982 = lineAdjusted$$1 - v6228;
        yoffset$$4 = v1982 << 3;
        var v1983 = this.memory;
        var v1984 = OAMAddress$$1 | 3;
        attrCode$$4 = v1983[v1984];
        var v1985 = attrCode$$4 & 16;
        palette$$4 = v1985 >> 2;
        var v1986 = this.tileCache;
        var v8749 = attrCode$$4 & 96;
        var v6229 = v8749 << 4;
        var v8750 = this.memory;
        var v8751 = OAMAddress$$1 | 2;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v6230 = v8750[v8751]
        }
        var v1987 = v6229 | v6230;
        tile$$6 = v1986[v1987];
        var v1988 = this.memory;
        var v1989 = OAMAddress$$1 | 1;
        linePixel = xCoordStart = v1988[v1989];
        var v1990 = 168 - linePixel;
        xCoordEnd = Math.min(v1990, 8);
        var v1991;
        var v6231 = linePixel > 7;
        if(v6231) {
          v1991 = 0
        }else {
          v1991 = 8 - linePixel
        }
        xcoord = v1991;
        var v1992 = this.pixelStart;
        var v6232;
        var v8752 = linePixel > 8;
        if(v8752) {
          v6232 = linePixel - 8
        }else {
          v6232 = 0
        }
        var v1993 = v6232;
        currentPixel = v1992 + v1993;
        var v2005 = xcoord < xCoordEnd;
        for(;v2005;) {
          var v8753 = this.sortBuffer;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6233 = v8753[linePixel]
          }
          var v2004 = v6233 > xCoordStart;
          if(v2004) {
            var v8754 = this.frameBuffer;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v6234 = v8754[currentPixel]
            }
            var v2003 = v6234 >= 33554432;
            if(v2003) {
              var v1994 = yoffset$$4 | xcoord;
              data$$30 = tile$$6[v1994];
              var v1997 = data$$30 > 0;
              if(v1997) {
                var v1995 = this.frameBuffer;
                var v6235 = this.OBJPalette;
                var v6236 = palette$$4 | data$$30;
                JAMScript.set(v1995, currentPixel, v6235[v6236]);
                var v1996 = this.sortBuffer;
                JAMScript.set(v1996, linePixel, xCoordStart)
              }
            }else {
              var v8755 = this.frameBuffer;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6237 = v8755[currentPixel]
              }
              var v2002 = v6237 < 16777216;
              if(v2002) {
                var v1998 = yoffset$$4 | xcoord;
                data$$30 = tile$$6[v1998];
                var v6238 = data$$30 > 0;
                if(v6238) {
                  v6238 = attrCode$$4 < 128
                }
                var v2001 = v6238;
                if(v2001) {
                  var v1999 = this.frameBuffer;
                  var v6239 = this.OBJPalette;
                  var v6240 = palette$$4 | data$$30;
                  JAMScript.set(v1999, currentPixel, v6239[v6240]);
                  var v2000 = this.sortBuffer;
                  JAMScript.set(v2000, linePixel, xCoordStart)
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
      length$$18 = JAMScript.call(this.findLowestSpriteDrawable, this, [lineAdjusted$$1, 15]);
      var v2035 = spriteCount < length$$18;
      for(;v2035;) {
        var v2007 = this.OAMAddressCache;
        OAMAddress$$1 = v2007[spriteCount];
        var v8756 = this.memory;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v6241 = v8756[OAMAddress$$1]
        }
        var v2008 = lineAdjusted$$1 - v6241;
        yoffset$$4 = v2008 << 3;
        var v2009 = this.memory;
        var v2010 = OAMAddress$$1 | 3;
        attrCode$$4 = v2009[v2010];
        var v2011 = attrCode$$4 & 16;
        palette$$4 = v2011 >> 2;
        var v6242 = attrCode$$4 & 64;
        var v6243 = 64 & yoffset$$4;
        var v2016 = v6242 == v6243;
        if(v2016) {
          var v2012 = this.tileCache;
          var v8757 = attrCode$$4 & 96;
          var v6244 = v8757 << 4;
          var v9880 = this.memory;
          var v9881 = OAMAddress$$1 | 2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8758 = v9880[v9881]
          }
          var v6245 = v8758 & 254;
          var v2013 = v6244 | v6245;
          tile$$6 = v2012[v2013]
        }else {
          var v2014 = this.tileCache;
          var v9882 = attrCode$$4 & 96;
          var v8759 = v9882 << 4;
          var v9883 = this.memory;
          var v9884 = OAMAddress$$1 | 2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8760 = v9883[v9884]
          }
          var v6246 = v8759 | v8760;
          var v2015 = v6246 | 1;
          tile$$6 = v2014[v2015]
        }
        yoffset$$4 = yoffset$$4 & 63;
        var v2017 = this.memory;
        var v2018 = OAMAddress$$1 | 1;
        linePixel = xCoordStart = v2017[v2018];
        var v2019 = 168 - linePixel;
        xCoordEnd = Math.min(v2019, 8);
        var v2020;
        var v6247 = linePixel > 7;
        if(v6247) {
          v2020 = 0
        }else {
          v2020 = 8 - linePixel
        }
        xcoord = v2020;
        var v2021 = this.pixelStart;
        var v6248;
        var v8761 = linePixel > 8;
        if(v8761) {
          v6248 = linePixel - 8
        }else {
          v6248 = 0
        }
        var v2022 = v6248;
        currentPixel = v2021 + v2022;
        var v2034 = xcoord < xCoordEnd;
        for(;v2034;) {
          var v8762 = this.sortBuffer;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6249 = v8762[linePixel]
          }
          var v2033 = v6249 > xCoordStart;
          if(v2033) {
            var v8763 = this.frameBuffer;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v6250 = v8763[currentPixel]
            }
            var v2032 = v6250 >= 33554432;
            if(v2032) {
              var v2023 = yoffset$$4 | xcoord;
              data$$30 = tile$$6[v2023];
              var v2026 = data$$30 > 0;
              if(v2026) {
                var v2024 = this.frameBuffer;
                var v6251 = this.OBJPalette;
                var v6252 = palette$$4 | data$$30;
                JAMScript.set(v2024, currentPixel, v6251[v6252]);
                var v2025 = this.sortBuffer;
                JAMScript.set(v2025, linePixel, xCoordStart)
              }
            }else {
              var v8764 = this.frameBuffer;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6253 = v8764[currentPixel]
              }
              var v2031 = v6253 < 16777216;
              if(v2031) {
                var v2027 = yoffset$$4 | xcoord;
                data$$30 = tile$$6[v2027];
                var v6254 = data$$30 > 0;
                if(v6254) {
                  v6254 = attrCode$$4 < 128
                }
                var v2030 = v6254;
                if(v2030) {
                  var v2028 = this.frameBuffer;
                  var v6255 = this.OBJPalette;
                  var v6256 = palette$$4 | data$$30;
                  JAMScript.set(v2028, currentPixel, v6255[v6256]);
                  var v2029 = this.sortBuffer;
                  JAMScript.set(v2029, linePixel, xCoordStart)
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
  var v2106 = this.gfxWindowDisplay;
  if(v2106) {
    var v2038 = this.windowY;
    var scrollYAdjusted$$5 = scanlineToRender$$6 - v2038;
    var v2105 = scrollYAdjusted$$5 >= 0;
    if(v2105) {
      var v2039;
      var v8765 = this.windowX;
      var v6259 = v8765 > 0;
      if(v6259) {
        var v6257 = this.windowX;
        var v6258 = this.currentX;
        v2039 = v6257 + v6258
      }else {
        v2039 = this.currentX
      }
      var scrollXRangeAdjusted$$2 = v2039;
      var v2040 = this.pixelStart;
      var pixelPosition$$7 = v2040 + scrollXRangeAdjusted$$2;
      var v2041 = this.pixelStart;
      var v2042 = this.pixelEnd;
      var pixelPositionEnd$$5 = v2041 + v2042;
      var v2104 = pixelPosition$$7 < pixelPositionEnd$$5;
      if(v2104) {
        var v2043 = scrollYAdjusted$$5 & 7;
        var tileYLine$$5 = v2043 << 3;
        var v6260 = this.gfxWindowCHRBankPosition;
        var v8766 = scrollYAdjusted$$5 & 248;
        var v6261 = v8766 << 2;
        var v2044 = v6260 | v6261;
        var v6262 = this.currentX;
        var v2045 = v6262 >> 3;
        var tileNumber$$6 = v2044 + v2045;
        var v2046 = this.BGCHRBank1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var chrCode$$5 = v2046[tileNumber$$6]
        }
        var v6263 = this.gfxBackgroundBankOffset;
        var v2047 = chrCode$$5 < v6263;
        if(v2047) {
          chrCode$$5 = chrCode$$5 | 256
        }
        var v2048 = this.BGCHRBank2;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var attrCode$$3 = v2048[tileNumber$$6]
        }
        var v2049 = this.tileCache;
        var v9885 = attrCode$$3 & 8;
        var v8767 = v9885 << 8;
        var v9886 = attrCode$$3 & 96;
        var v8768 = v9886 << 4;
        var v6264 = v8767 | v8768;
        var v2050 = v6264 | chrCode$$5;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var tile$$5 = v2049[v2050]
        }
        var v2051 = attrCode$$3 & 7;
        var palette$$3 = v2051 << 2;
        var v6265 = this.windowX;
        var v2052 = scrollXRangeAdjusted$$2 - v6265;
        var texel$$5 = v2052 & 7;
        var v6266 = texel$$5 + pixelPositionEnd$$5;
        var v2053 = v6266 - pixelPosition$$7;
        scrollXRangeAdjusted$$2 = Math.min(8, v2053);
        var v2056 = texel$$5 < scrollXRangeAdjusted$$2;
        for(;v2056;) {
          var v2054 = this.frameBuffer;
          var v2055 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6267 = this.gbcBGPalette;
          var v10443 = texel$$5;
          texel$$5 = texel$$5 + 1;
          var v9887 = tileYLine$$5 | v10443;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8769 = tile$$5[v9887]
          }
          var v6268 = palette$$3 | v8769;
          JAMScript.set(v2054, v2055, v6267[v6268]);
          v2056 = texel$$5 < scrollXRangeAdjusted$$2
        }
        var v6269 = pixelPositionEnd$$5 - pixelPosition$$7;
        var v2057 = v6269 >> 3;
        scrollXRangeAdjusted$$2 = tileNumber$$6 + v2057;
        var v2081 = tileNumber$$6 < scrollXRangeAdjusted$$2;
        for(;v2081;) {
          var v2058 = this.BGCHRBank1;
          var v2059 = tileNumber$$6 = tileNumber$$6 + 1;
          chrCode$$5 = v2058[v2059];
          var v6270 = this.gfxBackgroundBankOffset;
          var v2060 = chrCode$$5 < v6270;
          if(v2060) {
            chrCode$$5 = chrCode$$5 | 256
          }
          var v2061 = this.BGCHRBank2;
          attrCode$$3 = v2061[tileNumber$$6];
          var v2062 = this.tileCache;
          var v9888 = attrCode$$3 & 8;
          var v8770 = v9888 << 8;
          var v9889 = attrCode$$3 & 96;
          var v8771 = v9889 << 4;
          var v6271 = v8770 | v8771;
          var v2063 = v6271 | chrCode$$5;
          tile$$5 = v2062[v2063];
          var v2064 = attrCode$$3 & 7;
          palette$$3 = v2064 << 2;
          texel$$5 = tileYLine$$5;
          var v2065 = this.frameBuffer;
          var v2066 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6272 = this.gbcBGPalette;
          var v9890 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8772 = tile$$5[v9890]
          }
          var v6273 = palette$$3 | v8772;
          JAMScript.set(v2065, v2066, v6272[v6273]);
          var v2067 = this.frameBuffer;
          var v2068 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6274 = this.gbcBGPalette;
          var v9891 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8773 = tile$$5[v9891]
          }
          var v6275 = palette$$3 | v8773;
          JAMScript.set(v2067, v2068, v6274[v6275]);
          var v2069 = this.frameBuffer;
          var v2070 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6276 = this.gbcBGPalette;
          var v9892 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8774 = tile$$5[v9892]
          }
          var v6277 = palette$$3 | v8774;
          JAMScript.set(v2069, v2070, v6276[v6277]);
          var v2071 = this.frameBuffer;
          var v2072 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6278 = this.gbcBGPalette;
          var v9893 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8775 = tile$$5[v9893]
          }
          var v6279 = palette$$3 | v8775;
          JAMScript.set(v2071, v2072, v6278[v6279]);
          var v2073 = this.frameBuffer;
          var v2074 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6280 = this.gbcBGPalette;
          var v9894 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8776 = tile$$5[v9894]
          }
          var v6281 = palette$$3 | v8776;
          JAMScript.set(v2073, v2074, v6280[v6281]);
          var v2075 = this.frameBuffer;
          var v2076 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6282 = this.gbcBGPalette;
          var v9895 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8777 = tile$$5[v9895]
          }
          var v6283 = palette$$3 | v8777;
          JAMScript.set(v2075, v2076, v6282[v6283]);
          var v2077 = this.frameBuffer;
          var v2078 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6284 = this.gbcBGPalette;
          var v9896 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8778 = tile$$5[v9896]
          }
          var v6285 = palette$$3 | v8778;
          JAMScript.set(v2077, v2078, v6284[v6285]);
          var v2079 = this.frameBuffer;
          var v2080 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6286 = this.gbcBGPalette;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8779 = tile$$5[texel$$5]
          }
          var v6287 = palette$$3 | v8779;
          JAMScript.set(v2079, v2080, v6286[v6287]);
          v2081 = tileNumber$$6 < scrollXRangeAdjusted$$2
        }
        var v2103 = pixelPosition$$7 < pixelPositionEnd$$5;
        if(v2103) {
          var v2082 = this.BGCHRBank1;
          var v2083 = tileNumber$$6 = tileNumber$$6 + 1;
          chrCode$$5 = v2082[v2083];
          var v6288 = this.gfxBackgroundBankOffset;
          var v2084 = chrCode$$5 < v6288;
          if(v2084) {
            chrCode$$5 = chrCode$$5 | 256
          }
          var v2085 = this.BGCHRBank2;
          attrCode$$3 = v2085[tileNumber$$6];
          var v2086 = this.tileCache;
          var v9897 = attrCode$$3 & 8;
          var v8780 = v9897 << 8;
          var v9898 = attrCode$$3 & 96;
          var v8781 = v9898 << 4;
          var v6289 = v8780 | v8781;
          var v2087 = v6289 | chrCode$$5;
          tile$$5 = v2086[v2087];
          var v2088 = attrCode$$3 & 7;
          palette$$3 = v2088 << 2;
          var v2102 = pixelPositionEnd$$5 - pixelPosition$$7;
          switch(v2102) {
            case 7:
              var v2089 = this.frameBuffer;
              var v2090 = pixelPosition$$7 + 6;
              var v6290 = this.gbcBGPalette;
              var v9899 = tileYLine$$5 | 6;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v8782 = tile$$5[v9899]
              }
              var v6291 = palette$$3 | v8782;
              JAMScript.set(v2089, v2090, v6290[v6291]);
            case 6:
              var v2091 = this.frameBuffer;
              var v2092 = pixelPosition$$7 + 5;
              var v6292 = this.gbcBGPalette;
              var v9900 = tileYLine$$5 | 5;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v8783 = tile$$5[v9900]
              }
              var v6293 = palette$$3 | v8783;
              JAMScript.set(v2091, v2092, v6292[v6293]);
            case 5:
              var v2093 = this.frameBuffer;
              var v2094 = pixelPosition$$7 + 4;
              var v6294 = this.gbcBGPalette;
              var v9901 = tileYLine$$5 | 4;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v8784 = tile$$5[v9901]
              }
              var v6295 = palette$$3 | v8784;
              JAMScript.set(v2093, v2094, v6294[v6295]);
            case 4:
              var v2095 = this.frameBuffer;
              var v2096 = pixelPosition$$7 + 3;
              var v6296 = this.gbcBGPalette;
              var v9902 = tileYLine$$5 | 3;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v8785 = tile$$5[v9902]
              }
              var v6297 = palette$$3 | v8785;
              JAMScript.set(v2095, v2096, v6296[v6297]);
            case 3:
              var v2097 = this.frameBuffer;
              var v2098 = pixelPosition$$7 + 2;
              var v6298 = this.gbcBGPalette;
              var v9903 = tileYLine$$5 | 2;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v8786 = tile$$5[v9903]
              }
              var v6299 = palette$$3 | v8786;
              JAMScript.set(v2097, v2098, v6298[v6299]);
            case 2:
              var v2099 = this.frameBuffer;
              var v2100 = pixelPosition$$7 + 1;
              var v6300 = this.gbcBGPalette;
              var v9904 = tileYLine$$5 | 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v8787 = tile$$5[v9904]
              }
              var v6301 = palette$$3 | v8787;
              JAMScript.set(v2099, v2100, v6300[v6301]);
            case 1:
              var v2101 = this.frameBuffer;
              var v6302 = this.gbcBGPalette;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v8788 = tile$$5[tileYLine$$5]
              }
              var v6303 = palette$$3 | v8788;
              JAMScript.set(v2101, pixelPosition$$7, v6302[v6303])
          }
        }
      }
    }
  }
  return
}
function v697(scanlineToRender$$5) {
  var v2178 = this.gfxWindowDisplay;
  if(v2178) {
    var v2107 = this.windowY;
    var scrollYAdjusted$$4 = scanlineToRender$$5 - v2107;
    var v2177 = scrollYAdjusted$$4 >= 0;
    if(v2177) {
      var v2108;
      var v8789 = this.windowX;
      var v6306 = v8789 > 0;
      if(v6306) {
        var v6304 = this.windowX;
        var v6305 = this.currentX;
        v2108 = v6304 + v6305
      }else {
        v2108 = this.currentX
      }
      var scrollXRangeAdjusted$$1 = v2108;
      var v2109 = this.pixelStart;
      var pixelPosition$$6 = v2109 + scrollXRangeAdjusted$$1;
      var v2110 = this.pixelStart;
      var v2111 = this.pixelEnd;
      var pixelPositionEnd$$4 = v2110 + v2111;
      var v2176 = pixelPosition$$6 < pixelPositionEnd$$4;
      if(v2176) {
        var v2112 = scrollYAdjusted$$4 & 7;
        var tileYLine$$4 = v2112 << 3;
        var v6307 = this.gfxWindowCHRBankPosition;
        var v8790 = scrollYAdjusted$$4 & 248;
        var v6308 = v8790 << 2;
        var v2113 = v6307 | v6308;
        var v6309 = this.currentX;
        var v2114 = v6309 >> 3;
        var tileNumber$$5 = v2113 + v2114;
        var v2115 = this.BGCHRBank1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var chrCode$$4 = v2115[tileNumber$$5]
        }
        var v6310 = this.gfxBackgroundBankOffset;
        var v2116 = chrCode$$4 < v6310;
        if(v2116) {
          chrCode$$4 = chrCode$$4 | 256
        }
        var v2117 = this.BGCHRBank2;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var attrCode$$2 = v2117[tileNumber$$5]
        }
        var v2118 = this.tileCache;
        var v9905 = attrCode$$2 & 8;
        var v8791 = v9905 << 8;
        var v9906 = attrCode$$2 & 96;
        var v8792 = v9906 << 4;
        var v6311 = v8791 | v8792;
        var v2119 = v6311 | chrCode$$4;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var tile$$4 = v2118[v2119]
        }
        var v6312 = attrCode$$2 & 7;
        var v2120 = v6312 << 2;
        var v6313 = attrCode$$2 & 128;
        var v2121 = v6313 >> 2;
        var palette$$2 = v2120 | v2121;
        var v6314 = this.windowX;
        var v2122 = scrollXRangeAdjusted$$1 - v6314;
        var texel$$4 = v2122 & 7;
        var v6315 = texel$$4 + pixelPositionEnd$$4;
        var v2123 = v6315 - pixelPosition$$6;
        scrollXRangeAdjusted$$1 = Math.min(8, v2123);
        var v2126 = texel$$4 < scrollXRangeAdjusted$$1;
        for(;v2126;) {
          var v2124 = this.frameBuffer;
          var v2125 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6316 = this.gbcBGPalette;
          var v10444 = texel$$4;
          texel$$4 = texel$$4 + 1;
          var v9907 = tileYLine$$4 | v10444;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8793 = tile$$4[v9907]
          }
          var v6317 = palette$$2 | v8793;
          JAMScript.set(v2124, v2125, v6316[v6317]);
          v2126 = texel$$4 < scrollXRangeAdjusted$$1
        }
        var v6318 = pixelPositionEnd$$4 - pixelPosition$$6;
        var v2127 = v6318 >> 3;
        scrollXRangeAdjusted$$1 = tileNumber$$5 + v2127;
        var v2152 = tileNumber$$5 < scrollXRangeAdjusted$$1;
        for(;v2152;) {
          var v2128 = this.BGCHRBank1;
          var v2129 = tileNumber$$5 = tileNumber$$5 + 1;
          chrCode$$4 = v2128[v2129];
          var v6319 = this.gfxBackgroundBankOffset;
          var v2130 = chrCode$$4 < v6319;
          if(v2130) {
            chrCode$$4 = chrCode$$4 | 256
          }
          var v2131 = this.BGCHRBank2;
          attrCode$$2 = v2131[tileNumber$$5];
          var v2132 = this.tileCache;
          var v9908 = attrCode$$2 & 8;
          var v8794 = v9908 << 8;
          var v9909 = attrCode$$2 & 96;
          var v8795 = v9909 << 4;
          var v6320 = v8794 | v8795;
          var v2133 = v6320 | chrCode$$4;
          tile$$4 = v2132[v2133];
          var v6321 = attrCode$$2 & 7;
          var v2134 = v6321 << 2;
          var v6322 = attrCode$$2 & 128;
          var v2135 = v6322 >> 2;
          palette$$2 = v2134 | v2135;
          texel$$4 = tileYLine$$4;
          var v2136 = this.frameBuffer;
          var v2137 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6323 = this.gbcBGPalette;
          var v9910 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8796 = tile$$4[v9910]
          }
          var v6324 = palette$$2 | v8796;
          JAMScript.set(v2136, v2137, v6323[v6324]);
          var v2138 = this.frameBuffer;
          var v2139 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6325 = this.gbcBGPalette;
          var v9911 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8797 = tile$$4[v9911]
          }
          var v6326 = palette$$2 | v8797;
          JAMScript.set(v2138, v2139, v6325[v6326]);
          var v2140 = this.frameBuffer;
          var v2141 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6327 = this.gbcBGPalette;
          var v9912 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8798 = tile$$4[v9912]
          }
          var v6328 = palette$$2 | v8798;
          JAMScript.set(v2140, v2141, v6327[v6328]);
          var v2142 = this.frameBuffer;
          var v2143 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6329 = this.gbcBGPalette;
          var v9913 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8799 = tile$$4[v9913]
          }
          var v6330 = palette$$2 | v8799;
          JAMScript.set(v2142, v2143, v6329[v6330]);
          var v2144 = this.frameBuffer;
          var v2145 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6331 = this.gbcBGPalette;
          var v9914 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8800 = tile$$4[v9914]
          }
          var v6332 = palette$$2 | v8800;
          JAMScript.set(v2144, v2145, v6331[v6332]);
          var v2146 = this.frameBuffer;
          var v2147 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6333 = this.gbcBGPalette;
          var v9915 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8801 = tile$$4[v9915]
          }
          var v6334 = palette$$2 | v8801;
          JAMScript.set(v2146, v2147, v6333[v6334]);
          var v2148 = this.frameBuffer;
          var v2149 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6335 = this.gbcBGPalette;
          var v9916 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8802 = tile$$4[v9916]
          }
          var v6336 = palette$$2 | v8802;
          JAMScript.set(v2148, v2149, v6335[v6336]);
          var v2150 = this.frameBuffer;
          var v2151 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6337 = this.gbcBGPalette;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8803 = tile$$4[texel$$4]
          }
          var v6338 = palette$$2 | v8803;
          JAMScript.set(v2150, v2151, v6337[v6338]);
          v2152 = tileNumber$$5 < scrollXRangeAdjusted$$1
        }
        var v2175 = pixelPosition$$6 < pixelPositionEnd$$4;
        if(v2175) {
          var v2153 = this.BGCHRBank1;
          var v2154 = tileNumber$$5 = tileNumber$$5 + 1;
          chrCode$$4 = v2153[v2154];
          var v6339 = this.gfxBackgroundBankOffset;
          var v2155 = chrCode$$4 < v6339;
          if(v2155) {
            chrCode$$4 = chrCode$$4 | 256
          }
          var v2156 = this.BGCHRBank2;
          attrCode$$2 = v2156[tileNumber$$5];
          var v2157 = this.tileCache;
          var v9917 = attrCode$$2 & 8;
          var v8804 = v9917 << 8;
          var v9918 = attrCode$$2 & 96;
          var v8805 = v9918 << 4;
          var v6340 = v8804 | v8805;
          var v2158 = v6340 | chrCode$$4;
          tile$$4 = v2157[v2158];
          var v6341 = attrCode$$2 & 7;
          var v2159 = v6341 << 2;
          var v6342 = attrCode$$2 & 128;
          var v2160 = v6342 >> 2;
          palette$$2 = v2159 | v2160;
          var v2174 = pixelPositionEnd$$4 - pixelPosition$$6;
          switch(v2174) {
            case 7:
              var v2161 = this.frameBuffer;
              var v2162 = pixelPosition$$6 + 6;
              var v6343 = this.gbcBGPalette;
              var v9919 = tileYLine$$4 | 6;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v8806 = tile$$4[v9919]
              }
              var v6344 = palette$$2 | v8806;
              JAMScript.set(v2161, v2162, v6343[v6344]);
            case 6:
              var v2163 = this.frameBuffer;
              var v2164 = pixelPosition$$6 + 5;
              var v6345 = this.gbcBGPalette;
              var v9920 = tileYLine$$4 | 5;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v8807 = tile$$4[v9920]
              }
              var v6346 = palette$$2 | v8807;
              JAMScript.set(v2163, v2164, v6345[v6346]);
            case 5:
              var v2165 = this.frameBuffer;
              var v2166 = pixelPosition$$6 + 4;
              var v6347 = this.gbcBGPalette;
              var v9921 = tileYLine$$4 | 4;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v8808 = tile$$4[v9921]
              }
              var v6348 = palette$$2 | v8808;
              JAMScript.set(v2165, v2166, v6347[v6348]);
            case 4:
              var v2167 = this.frameBuffer;
              var v2168 = pixelPosition$$6 + 3;
              var v6349 = this.gbcBGPalette;
              var v9922 = tileYLine$$4 | 3;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v8809 = tile$$4[v9922]
              }
              var v6350 = palette$$2 | v8809;
              JAMScript.set(v2167, v2168, v6349[v6350]);
            case 3:
              var v2169 = this.frameBuffer;
              var v2170 = pixelPosition$$6 + 2;
              var v6351 = this.gbcBGPalette;
              var v9923 = tileYLine$$4 | 2;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v8810 = tile$$4[v9923]
              }
              var v6352 = palette$$2 | v8810;
              JAMScript.set(v2169, v2170, v6351[v6352]);
            case 2:
              var v2171 = this.frameBuffer;
              var v2172 = pixelPosition$$6 + 1;
              var v6353 = this.gbcBGPalette;
              var v9924 = tileYLine$$4 | 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v8811 = tile$$4[v9924]
              }
              var v6354 = palette$$2 | v8811;
              JAMScript.set(v2171, v2172, v6353[v6354]);
            case 1:
              var v2173 = this.frameBuffer;
              var v6355 = this.gbcBGPalette;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v8812 = tile$$4[tileYLine$$4]
              }
              var v6356 = palette$$2 | v8812;
              JAMScript.set(v2173, pixelPosition$$6, v6355[v6356])
          }
        }
      }
    }
  }
  return
}
function v696(scanlineToRender$$4) {
  var v2238 = this.gfxWindowDisplay;
  if(v2238) {
    var v2179 = this.windowY;
    var scrollYAdjusted$$3 = scanlineToRender$$4 - v2179;
    var v2237 = scrollYAdjusted$$3 >= 0;
    if(v2237) {
      var v2180;
      var v8813 = this.windowX;
      var v6359 = v8813 > 0;
      if(v6359) {
        var v6357 = this.windowX;
        var v6358 = this.currentX;
        v2180 = v6357 + v6358
      }else {
        v2180 = this.currentX
      }
      var scrollXRangeAdjusted = v2180;
      var v2181 = this.pixelStart;
      var pixelPosition$$5 = v2181 + scrollXRangeAdjusted;
      var v2182 = this.pixelStart;
      var v2183 = this.pixelEnd;
      var pixelPositionEnd$$3 = v2182 + v2183;
      var v2236 = pixelPosition$$5 < pixelPositionEnd$$3;
      if(v2236) {
        var v2184 = scrollYAdjusted$$3 & 7;
        var tileYLine$$3 = v2184 << 3;
        var v6360 = this.gfxWindowCHRBankPosition;
        var v8814 = scrollYAdjusted$$3 & 248;
        var v6361 = v8814 << 2;
        var v2185 = v6360 | v6361;
        var v6362 = this.currentX;
        var v2186 = v6362 >> 3;
        var tileNumber$$4 = v2185 + v2186;
        var v2187 = this.BGCHRBank1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var chrCode$$3 = v2187[tileNumber$$4]
        }
        var v6363 = this.gfxBackgroundBankOffset;
        var v2188 = chrCode$$3 < v6363;
        if(v2188) {
          chrCode$$3 = chrCode$$3 | 256
        }
        var v2189 = this.tileCache;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var tile$$3 = v2189[chrCode$$3]
        }
        var v6364 = this.windowX;
        var v2190 = scrollXRangeAdjusted - v6364;
        var texel$$3 = v2190 & 7;
        var v6365 = texel$$3 + pixelPositionEnd$$3;
        var v2191 = v6365 - pixelPosition$$5;
        scrollXRangeAdjusted = Math.min(8, v2191);
        var v2194 = texel$$3 < scrollXRangeAdjusted;
        for(;v2194;) {
          var v2192 = this.frameBuffer;
          var v2193 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6366 = this.BGPalette;
          var v9925 = texel$$3;
          texel$$3 = texel$$3 + 1;
          var v8815 = tileYLine$$3 | v9925;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6367 = tile$$3[v8815]
          }
          JAMScript.set(v2192, v2193, v6366[v6367], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          v2194 = texel$$3 < scrollXRangeAdjusted
        }
        var v6368 = pixelPositionEnd$$3 - pixelPosition$$5;
        var v2195 = v6368 >> 3;
        scrollXRangeAdjusted = tileNumber$$4 + v2195;
        var v2216 = tileNumber$$4 < scrollXRangeAdjusted;
        for(;v2216;) {
          var v2196 = this.BGCHRBank1;
          var v2197 = tileNumber$$4 = tileNumber$$4 + 1;
          chrCode$$3 = v2196[v2197];
          var v6369 = this.gfxBackgroundBankOffset;
          var v2198 = chrCode$$3 < v6369;
          if(v2198) {
            chrCode$$3 = chrCode$$3 | 256
          }
          var v2199 = this.tileCache;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            tile$$3 = v2199[chrCode$$3]
          }
          texel$$3 = tileYLine$$3;
          var v2200 = this.frameBuffer;
          var v2201 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6370 = this.BGPalette;
          var v8816 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6371 = tile$$3[v8816]
          }
          JAMScript.set(v2200, v2201, v6370[v6371], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          var v2202 = this.frameBuffer;
          var v2203 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6372 = this.BGPalette;
          var v8817 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6373 = tile$$3[v8817]
          }
          JAMScript.set(v2202, v2203, v6372[v6373], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          var v2204 = this.frameBuffer;
          var v2205 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6374 = this.BGPalette;
          var v8818 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6375 = tile$$3[v8818]
          }
          JAMScript.set(v2204, v2205, v6374[v6375], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          var v2206 = this.frameBuffer;
          var v2207 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6376 = this.BGPalette;
          var v8819 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6377 = tile$$3[v8819]
          }
          JAMScript.set(v2206, v2207, v6376[v6377], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          var v2208 = this.frameBuffer;
          var v2209 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6378 = this.BGPalette;
          var v8820 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6379 = tile$$3[v8820]
          }
          JAMScript.set(v2208, v2209, v6378[v6379], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          var v2210 = this.frameBuffer;
          var v2211 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6380 = this.BGPalette;
          var v8821 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6381 = tile$$3[v8821]
          }
          JAMScript.set(v2210, v2211, v6380[v6381], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          var v2212 = this.frameBuffer;
          var v2213 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6382 = this.BGPalette;
          var v8822 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6383 = tile$$3[v8822]
          }
          JAMScript.set(v2212, v2213, v6382[v6383], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          var v2214 = this.frameBuffer;
          var v2215 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6384 = this.BGPalette;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6385 = tile$$3[texel$$3]
          }
          JAMScript.set(v2214, v2215, v6384[v6385], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          v2216 = tileNumber$$4 < scrollXRangeAdjusted
        }
        var v2235 = pixelPosition$$5 < pixelPositionEnd$$3;
        if(v2235) {
          var v2217 = this.BGCHRBank1;
          var v2218 = tileNumber$$4 = tileNumber$$4 + 1;
          chrCode$$3 = v2217[v2218];
          var v6386 = this.gfxBackgroundBankOffset;
          var v2219 = chrCode$$3 < v6386;
          if(v2219) {
            chrCode$$3 = chrCode$$3 | 256
          }
          var v2220 = this.tileCache;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            tile$$3 = v2220[chrCode$$3]
          }
          var v2234 = pixelPositionEnd$$3 - pixelPosition$$5;
          switch(v2234) {
            case 7:
              var v2221 = this.frameBuffer;
              var v2222 = pixelPosition$$5 + 6;
              var v6387 = this.BGPalette;
              var v8823 = tileYLine$$3 | 6;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6388 = tile$$3[v8823]
              }
              JAMScript.set(v2221, v2222, v6387[v6388], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
            case 6:
              var v2223 = this.frameBuffer;
              var v2224 = pixelPosition$$5 + 5;
              var v6389 = this.BGPalette;
              var v8824 = tileYLine$$3 | 5;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6390 = tile$$3[v8824]
              }
              JAMScript.set(v2223, v2224, v6389[v6390], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
            case 5:
              var v2225 = this.frameBuffer;
              var v2226 = pixelPosition$$5 + 4;
              var v6391 = this.BGPalette;
              var v8825 = tileYLine$$3 | 4;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6392 = tile$$3[v8825]
              }
              JAMScript.set(v2225, v2226, v6391[v6392], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
            case 4:
              var v2227 = this.frameBuffer;
              var v2228 = pixelPosition$$5 + 3;
              var v6393 = this.BGPalette;
              var v8826 = tileYLine$$3 | 3;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6394 = tile$$3[v8826]
              }
              JAMScript.set(v2227, v2228, v6393[v6394], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
            case 3:
              var v2229 = this.frameBuffer;
              var v2230 = pixelPosition$$5 + 2;
              var v6395 = this.BGPalette;
              var v8827 = tileYLine$$3 | 2;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6396 = tile$$3[v8827]
              }
              JAMScript.set(v2229, v2230, v6395[v6396], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
            case 2:
              var v2231 = this.frameBuffer;
              var v2232 = pixelPosition$$5 + 1;
              var v6397 = this.BGPalette;
              var v8828 = tileYLine$$3 | 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6398 = tile$$3[v8828]
              }
              JAMScript.set(v2231, v2232, v6397[v6398], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
            case 1:
              var v2233 = this.frameBuffer;
              var v6399 = this.BGPalette;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6400 = tile$$3[tileYLine$$3]
              }
              JAMScript.set(v2233, pixelPosition$$5, v6399[v6400], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074)
          }
        }
      }
    }
  }
  return
}
function v695(scanlineToRender$$3) {
  var v6401 = this.backgroundY;
  var v2239 = v6401 + scanlineToRender$$3;
  var scrollYAdjusted$$2 = v2239 & 255;
  var v2240 = scrollYAdjusted$$2 & 7;
  var tileYLine$$2 = v2240 << 3;
  var v2241 = this.gfxBackgroundCHRBankPosition;
  var v6402 = scrollYAdjusted$$2 & 248;
  var v2242 = v6402 << 2;
  var tileYDown$$2 = v2241 | v2242;
  var v6403 = this.backgroundX;
  var v6404 = this.currentX;
  var v2243 = v6403 + v6404;
  var scrollXAdjusted$$2 = v2243 & 255;
  var v2244 = this.pixelStart;
  var v2245 = this.currentX;
  var pixelPosition$$4 = v2244 + v2245;
  var v2246 = this.pixelStart;
  var v6405;
  var v9926 = this.gfxWindowDisplay;
  if(v9926) {
    var v10652 = this.windowY;
    var v10445 = scanlineToRender$$3 - v10652;
    v9926 = v10445 >= 0
  }
  var v8831 = v9926;
  if(v8831) {
    var v10446 = this.windowX;
    var v9927 = Math.max(v10446, 0);
    var v9928 = this.currentX;
    var v8829 = v9927 + v9928;
    var v8830 = this.pixelEnd;
    v6405 = Math.min(v8829, v8830)
  }else {
    v6405 = this.pixelEnd
  }
  var v2247 = v6405;
  var pixelPositionEnd$$2 = v2246 + v2247;
  var v2248 = scrollXAdjusted$$2 >> 3;
  var tileNumber$$3 = tileYDown$$2 + v2248;
  var v2249 = this.BGCHRBank1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var chrCode$$2 = v2249[tileNumber$$3]
  }
  var v6406 = this.gfxBackgroundBankOffset;
  var v2250 = chrCode$$2 < v6406;
  if(v2250) {
    chrCode$$2 = chrCode$$2 | 256
  }
  var v2251 = this.BGCHRBank2;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var attrCode$$1 = v2251[tileNumber$$3]
  }
  var v2252 = this.tileCache;
  var v9929 = attrCode$$1 & 8;
  var v8832 = v9929 << 8;
  var v9930 = attrCode$$1 & 96;
  var v8833 = v9930 << 4;
  var v6407 = v8832 | v8833;
  var v2253 = v6407 | chrCode$$2;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tile$$2 = v2252[v2253]
  }
  var v2254 = attrCode$$1 & 7;
  var palette$$1 = v2254 << 2;
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8835 = tile$$2[v9931]
    }
    var v6410 = palette$$1 | v8835;
    JAMScript.set(v2255, v2256, v6409[v6410]);
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
  var v6412 = pixelPositionEnd$$2 - pixelPosition$$4;
  var v6413 = 256 - scrollXAdjusted$$2;
  var v2258 = Math.min(v6412, v6413);
  var scrollXAdjustedAligned$$2 = v2258 >> 3;
  var v6414 = scrollXAdjustedAligned$$2 << 3;
  scrollXAdjusted$$2 = scrollXAdjusted$$2 + v6414;
  scrollXAdjustedAligned$$2 = scrollXAdjustedAligned$$2 + tileNumber$$3;
  var v2282 = tileNumber$$3 < scrollXAdjustedAligned$$2;
  for(;v2282;) {
    var v2259 = this.BGCHRBank1;
    var v2260 = tileNumber$$3 = tileNumber$$3 + 1;
    chrCode$$2 = v2259[v2260];
    var v6415 = this.gfxBackgroundBankOffset;
    var v2261 = chrCode$$2 < v6415;
    if(v2261) {
      chrCode$$2 = chrCode$$2 | 256
    }
    var v2262 = this.BGCHRBank2;
    attrCode$$1 = v2262[tileNumber$$3];
    var v2263 = this.tileCache;
    var v9932 = attrCode$$1 & 8;
    var v8837 = v9932 << 8;
    var v9933 = attrCode$$1 & 96;
    var v8838 = v9933 << 4;
    var v6416 = v8837 | v8838;
    var v2264 = v6416 | chrCode$$2;
    tile$$2 = v2263[v2264];
    var v2265 = attrCode$$1 & 7;
    palette$$1 = v2265 << 2;
    texel$$2 = tileYLine$$2;
    var v2266 = this.frameBuffer;
    var v2267 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6417 = this.gbcBGPalette;
    var v9934 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8839 = tile$$2[v9934]
    }
    var v6418 = palette$$1 | v8839;
    JAMScript.set(v2266, v2267, v6417[v6418]);
    var v2268 = this.frameBuffer;
    var v2269 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6419 = this.gbcBGPalette;
    var v9935 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8840 = tile$$2[v9935]
    }
    var v6420 = palette$$1 | v8840;
    JAMScript.set(v2268, v2269, v6419[v6420]);
    var v2270 = this.frameBuffer;
    var v2271 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6421 = this.gbcBGPalette;
    var v9936 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8841 = tile$$2[v9936]
    }
    var v6422 = palette$$1 | v8841;
    JAMScript.set(v2270, v2271, v6421[v6422]);
    var v2272 = this.frameBuffer;
    var v2273 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6423 = this.gbcBGPalette;
    var v9937 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8842 = tile$$2[v9937]
    }
    var v6424 = palette$$1 | v8842;
    JAMScript.set(v2272, v2273, v6423[v6424]);
    var v2274 = this.frameBuffer;
    var v2275 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6425 = this.gbcBGPalette;
    var v9938 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8843 = tile$$2[v9938]
    }
    var v6426 = palette$$1 | v8843;
    JAMScript.set(v2274, v2275, v6425[v6426]);
    var v2276 = this.frameBuffer;
    var v2277 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6427 = this.gbcBGPalette;
    var v9939 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8844 = tile$$2[v9939]
    }
    var v6428 = palette$$1 | v8844;
    JAMScript.set(v2276, v2277, v6427[v6428]);
    var v2278 = this.frameBuffer;
    var v2279 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6429 = this.gbcBGPalette;
    var v9940 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8845 = tile$$2[v9940]
    }
    var v6430 = palette$$1 | v8845;
    JAMScript.set(v2278, v2279, v6429[v6430]);
    var v2280 = this.frameBuffer;
    var v2281 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6431 = this.gbcBGPalette;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8846 = tile$$2[texel$$2]
    }
    var v6432 = palette$$1 | v8846;
    JAMScript.set(v2280, v2281, v6431[v6432]);
    v2282 = tileNumber$$3 < scrollXAdjustedAligned$$2
  }
  var v2340 = pixelPosition$$4 < pixelPositionEnd$$2;
  if(v2340) {
    var v2293 = scrollXAdjusted$$2 < 256;
    if(v2293) {
      var v2283 = this.BGCHRBank1;
      var v2284 = tileNumber$$3 = tileNumber$$3 + 1;
      chrCode$$2 = v2283[v2284];
      var v6433 = this.gfxBackgroundBankOffset;
      var v2285 = chrCode$$2 < v6433;
      if(v2285) {
        chrCode$$2 = chrCode$$2 | 256
      }
      var v2286 = this.BGCHRBank2;
      attrCode$$1 = v2286[tileNumber$$3];
      var v2287 = this.tileCache;
      var v9941 = attrCode$$1 & 8;
      var v8847 = v9941 << 8;
      var v9942 = attrCode$$1 & 96;
      var v8848 = v9942 << 4;
      var v6434 = v8847 | v8848;
      var v2288 = v6434 | chrCode$$2;
      tile$$2 = v2287[v2288];
      var v2289 = attrCode$$1 & 7;
      palette$$1 = v2289 << 2;
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
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v8849 = tile$$2[v9943]
        }
        var v6437 = palette$$1 | v8849;
        JAMScript.set(v2290, v2291, v6436[v6437]);
        scrollXAdjusted$$2 = scrollXAdjusted$$2 + 1;
        var v6438 = pixelPosition$$4 < pixelPositionEnd$$2;
        if(v6438) {
          v6438 = scrollXAdjusted$$2 < 256
        }
        v2292 = v6438
      }
    }
    var v6439 = pixelPositionEnd$$2 - pixelPosition$$4;
    var v2294 = v6439 >> 3;
    scrollXAdjustedAligned$$2 = v2294 + tileYDown$$2;
    var v2318 = tileYDown$$2 < scrollXAdjustedAligned$$2;
    for(;v2318;) {
      var v2295 = this.BGCHRBank1;
      chrCode$$2 = v2295[tileYDown$$2];
      var v6440 = this.gfxBackgroundBankOffset;
      var v2296 = chrCode$$2 < v6440;
      if(v2296) {
        chrCode$$2 = chrCode$$2 | 256
      }
      var v2297 = this.BGCHRBank2;
      var v2298 = tileYDown$$2;
      tileYDown$$2 = tileYDown$$2 + 1;
      attrCode$$1 = v2297[v2298];
      var v2299 = this.tileCache;
      var v9944 = attrCode$$1 & 8;
      var v8850 = v9944 << 8;
      var v9945 = attrCode$$1 & 96;
      var v8851 = v9945 << 4;
      var v6441 = v8850 | v8851;
      var v2300 = v6441 | chrCode$$2;
      tile$$2 = v2299[v2300];
      var v2301 = attrCode$$1 & 7;
      palette$$1 = v2301 << 2;
      texel$$2 = tileYLine$$2;
      var v2302 = this.frameBuffer;
      var v2303 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6442 = this.gbcBGPalette;
      var v9946 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8852 = tile$$2[v9946]
      }
      var v6443 = palette$$1 | v8852;
      JAMScript.set(v2302, v2303, v6442[v6443]);
      var v2304 = this.frameBuffer;
      var v2305 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6444 = this.gbcBGPalette;
      var v9947 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8853 = tile$$2[v9947]
      }
      var v6445 = palette$$1 | v8853;
      JAMScript.set(v2304, v2305, v6444[v6445]);
      var v2306 = this.frameBuffer;
      var v2307 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6446 = this.gbcBGPalette;
      var v9948 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8854 = tile$$2[v9948]
      }
      var v6447 = palette$$1 | v8854;
      JAMScript.set(v2306, v2307, v6446[v6447]);
      var v2308 = this.frameBuffer;
      var v2309 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6448 = this.gbcBGPalette;
      var v9949 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8855 = tile$$2[v9949]
      }
      var v6449 = palette$$1 | v8855;
      JAMScript.set(v2308, v2309, v6448[v6449]);
      var v2310 = this.frameBuffer;
      var v2311 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6450 = this.gbcBGPalette;
      var v9950 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8856 = tile$$2[v9950]
      }
      var v6451 = palette$$1 | v8856;
      JAMScript.set(v2310, v2311, v6450[v6451]);
      var v2312 = this.frameBuffer;
      var v2313 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6452 = this.gbcBGPalette;
      var v9951 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8857 = tile$$2[v9951]
      }
      var v6453 = palette$$1 | v8857;
      JAMScript.set(v2312, v2313, v6452[v6453]);
      var v2314 = this.frameBuffer;
      var v2315 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6454 = this.gbcBGPalette;
      var v9952 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8858 = tile$$2[v9952]
      }
      var v6455 = palette$$1 | v8858;
      JAMScript.set(v2314, v2315, v6454[v6455]);
      var v2316 = this.frameBuffer;
      var v2317 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6456 = this.gbcBGPalette;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8859 = tile$$2[texel$$2]
      }
      var v6457 = palette$$1 | v8859;
      JAMScript.set(v2316, v2317, v6456[v6457]);
      v2318 = tileYDown$$2 < scrollXAdjustedAligned$$2
    }
    var v2339 = pixelPosition$$4 < pixelPositionEnd$$2;
    if(v2339) {
      var v2319 = this.BGCHRBank1;
      chrCode$$2 = v2319[tileYDown$$2];
      var v6458 = this.gfxBackgroundBankOffset;
      var v2320 = chrCode$$2 < v6458;
      if(v2320) {
        chrCode$$2 = chrCode$$2 | 256
      }
      var v2321 = this.BGCHRBank2;
      attrCode$$1 = v2321[tileYDown$$2];
      var v2322 = this.tileCache;
      var v9953 = attrCode$$1 & 8;
      var v8860 = v9953 << 8;
      var v9954 = attrCode$$1 & 96;
      var v8861 = v9954 << 4;
      var v6459 = v8860 | v8861;
      var v2323 = v6459 | chrCode$$2;
      tile$$2 = v2322[v2323];
      var v2324 = attrCode$$1 & 7;
      palette$$1 = v2324 << 2;
      var v2338 = pixelPositionEnd$$2 - pixelPosition$$4;
      switch(v2338) {
        case 7:
          var v2325 = this.frameBuffer;
          var v2326 = pixelPosition$$4 + 6;
          var v6460 = this.gbcBGPalette;
          var v9955 = tileYLine$$2 | 6;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8862 = tile$$2[v9955]
          }
          var v6461 = palette$$1 | v8862;
          JAMScript.set(v2325, v2326, v6460[v6461]);
        case 6:
          var v2327 = this.frameBuffer;
          var v2328 = pixelPosition$$4 + 5;
          var v6462 = this.gbcBGPalette;
          var v9956 = tileYLine$$2 | 5;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8863 = tile$$2[v9956]
          }
          var v6463 = palette$$1 | v8863;
          JAMScript.set(v2327, v2328, v6462[v6463]);
        case 5:
          var v2329 = this.frameBuffer;
          var v2330 = pixelPosition$$4 + 4;
          var v6464 = this.gbcBGPalette;
          var v9957 = tileYLine$$2 | 4;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8864 = tile$$2[v9957]
          }
          var v6465 = palette$$1 | v8864;
          JAMScript.set(v2329, v2330, v6464[v6465]);
        case 4:
          var v2331 = this.frameBuffer;
          var v2332 = pixelPosition$$4 + 3;
          var v6466 = this.gbcBGPalette;
          var v9958 = tileYLine$$2 | 3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8865 = tile$$2[v9958]
          }
          var v6467 = palette$$1 | v8865;
          JAMScript.set(v2331, v2332, v6466[v6467]);
        case 3:
          var v2333 = this.frameBuffer;
          var v2334 = pixelPosition$$4 + 2;
          var v6468 = this.gbcBGPalette;
          var v9959 = tileYLine$$2 | 2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8866 = tile$$2[v9959]
          }
          var v6469 = palette$$1 | v8866;
          JAMScript.set(v2333, v2334, v6468[v6469]);
        case 2:
          var v2335 = this.frameBuffer;
          var v2336 = pixelPosition$$4 + 1;
          var v6470 = this.gbcBGPalette;
          var v9960 = tileYLine$$2 | 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8867 = tile$$2[v9960]
          }
          var v6471 = palette$$1 | v8867;
          JAMScript.set(v2335, v2336, v6470[v6471]);
        case 1:
          var v2337 = this.frameBuffer;
          var v6472 = this.gbcBGPalette;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8868 = tile$$2[tileYLine$$2]
          }
          var v6473 = palette$$1 | v8868;
          JAMScript.set(v2337, pixelPosition$$4, v6472[v6473])
      }
    }
  }
  return
}
function v694(scanlineToRender$$2) {
  var v6474 = this.backgroundY;
  var v2341 = v6474 + scanlineToRender$$2;
  var scrollYAdjusted$$1 = v2341 & 255;
  var v2342 = scrollYAdjusted$$1 & 7;
  var tileYLine$$1 = v2342 << 3;
  var v2343 = this.gfxBackgroundCHRBankPosition;
  var v6475 = scrollYAdjusted$$1 & 248;
  var v2344 = v6475 << 2;
  var tileYDown$$1 = v2343 | v2344;
  var v6476 = this.backgroundX;
  var v6477 = this.currentX;
  var v2345 = v6476 + v6477;
  var scrollXAdjusted$$1 = v2345 & 255;
  var v2346 = this.pixelStart;
  var v2347 = this.currentX;
  var pixelPosition$$3 = v2346 + v2347;
  var v2348 = this.pixelStart;
  var v6478;
  var v9961 = this.gfxWindowDisplay;
  if(v9961) {
    var v10653 = this.windowY;
    var v10448 = scanlineToRender$$2 - v10653;
    v9961 = v10448 >= 0
  }
  var v8871 = v9961;
  if(v8871) {
    var v10449 = this.windowX;
    var v9962 = Math.max(v10449, 0);
    var v9963 = this.currentX;
    var v8869 = v9962 + v9963;
    var v8870 = this.pixelEnd;
    v6478 = Math.min(v8869, v8870)
  }else {
    v6478 = this.pixelEnd
  }
  var v2349 = v6478;
  var pixelPositionEnd$$1 = v2348 + v2349;
  var v2350 = scrollXAdjusted$$1 >> 3;
  var tileNumber$$2 = tileYDown$$1 + v2350;
  var v2351 = this.BGCHRBank1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var chrCode$$1 = v2351[tileNumber$$2]
  }
  var v6479 = this.gfxBackgroundBankOffset;
  var v2352 = chrCode$$1 < v6479;
  if(v2352) {
    chrCode$$1 = chrCode$$1 | 256
  }
  var v2353 = this.BGCHRBank2;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var attrCode = v2353[tileNumber$$2]
  }
  var v2354 = this.tileCache;
  var v9964 = attrCode & 8;
  var v8872 = v9964 << 8;
  var v9965 = attrCode & 96;
  var v8873 = v9965 << 4;
  var v6480 = v8872 | v8873;
  var v2355 = v6480 | chrCode$$1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tile$$1 = v2354[v2355]
  }
  var v6481 = attrCode & 7;
  var v2356 = v6481 << 2;
  var v6482 = attrCode & 128;
  var v2357 = v6482 >> 2;
  var palette = v2356 | v2357;
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8875 = tile$$1[v9966]
    }
    var v6485 = palette | v8875;
    JAMScript.set(v2358, v2359, v6484[v6485]);
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
  var v6487 = pixelPositionEnd$$1 - pixelPosition$$3;
  var v6488 = 256 - scrollXAdjusted$$1;
  var v2361 = Math.min(v6487, v6488);
  var scrollXAdjustedAligned$$1 = v2361 >> 3;
  var v6489 = scrollXAdjustedAligned$$1 << 3;
  scrollXAdjusted$$1 = scrollXAdjusted$$1 + v6489;
  scrollXAdjustedAligned$$1 = scrollXAdjustedAligned$$1 + tileNumber$$2;
  var v2386 = tileNumber$$2 < scrollXAdjustedAligned$$1;
  for(;v2386;) {
    var v2362 = this.BGCHRBank1;
    var v2363 = tileNumber$$2 = tileNumber$$2 + 1;
    chrCode$$1 = v2362[v2363];
    var v6490 = this.gfxBackgroundBankOffset;
    var v2364 = chrCode$$1 < v6490;
    if(v2364) {
      chrCode$$1 = chrCode$$1 | 256
    }
    var v2365 = this.BGCHRBank2;
    attrCode = v2365[tileNumber$$2];
    var v2366 = this.tileCache;
    var v9967 = attrCode & 8;
    var v8877 = v9967 << 8;
    var v9968 = attrCode & 96;
    var v8878 = v9968 << 4;
    var v6491 = v8877 | v8878;
    var v2367 = v6491 | chrCode$$1;
    tile$$1 = v2366[v2367];
    var v6492 = attrCode & 7;
    var v2368 = v6492 << 2;
    var v6493 = attrCode & 128;
    var v2369 = v6493 >> 2;
    palette = v2368 | v2369;
    texel$$1 = tileYLine$$1;
    var v2370 = this.frameBuffer;
    var v2371 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6494 = this.gbcBGPalette;
    var v9969 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8879 = tile$$1[v9969]
    }
    var v6495 = palette | v8879;
    JAMScript.set(v2370, v2371, v6494[v6495]);
    var v2372 = this.frameBuffer;
    var v2373 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6496 = this.gbcBGPalette;
    var v9970 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8880 = tile$$1[v9970]
    }
    var v6497 = palette | v8880;
    JAMScript.set(v2372, v2373, v6496[v6497]);
    var v2374 = this.frameBuffer;
    var v2375 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6498 = this.gbcBGPalette;
    var v9971 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8881 = tile$$1[v9971]
    }
    var v6499 = palette | v8881;
    JAMScript.set(v2374, v2375, v6498[v6499]);
    var v2376 = this.frameBuffer;
    var v2377 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6500 = this.gbcBGPalette;
    var v9972 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8882 = tile$$1[v9972]
    }
    var v6501 = palette | v8882;
    JAMScript.set(v2376, v2377, v6500[v6501]);
    var v2378 = this.frameBuffer;
    var v2379 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6502 = this.gbcBGPalette;
    var v9973 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8883 = tile$$1[v9973]
    }
    var v6503 = palette | v8883;
    JAMScript.set(v2378, v2379, v6502[v6503]);
    var v2380 = this.frameBuffer;
    var v2381 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6504 = this.gbcBGPalette;
    var v9974 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8884 = tile$$1[v9974]
    }
    var v6505 = palette | v8884;
    JAMScript.set(v2380, v2381, v6504[v6505]);
    var v2382 = this.frameBuffer;
    var v2383 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6506 = this.gbcBGPalette;
    var v9975 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8885 = tile$$1[v9975]
    }
    var v6507 = palette | v8885;
    JAMScript.set(v2382, v2383, v6506[v6507]);
    var v2384 = this.frameBuffer;
    var v2385 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6508 = this.gbcBGPalette;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8886 = tile$$1[texel$$1]
    }
    var v6509 = palette | v8886;
    JAMScript.set(v2384, v2385, v6508[v6509]);
    v2386 = tileNumber$$2 < scrollXAdjustedAligned$$1
  }
  var v2447 = pixelPosition$$3 < pixelPositionEnd$$1;
  if(v2447) {
    var v2398 = scrollXAdjusted$$1 < 256;
    if(v2398) {
      var v2387 = this.BGCHRBank1;
      var v2388 = tileNumber$$2 = tileNumber$$2 + 1;
      chrCode$$1 = v2387[v2388];
      var v6510 = this.gfxBackgroundBankOffset;
      var v2389 = chrCode$$1 < v6510;
      if(v2389) {
        chrCode$$1 = chrCode$$1 | 256
      }
      var v2390 = this.BGCHRBank2;
      attrCode = v2390[tileNumber$$2];
      var v2391 = this.tileCache;
      var v9976 = attrCode & 8;
      var v8887 = v9976 << 8;
      var v9977 = attrCode & 96;
      var v8888 = v9977 << 4;
      var v6511 = v8887 | v8888;
      var v2392 = v6511 | chrCode$$1;
      tile$$1 = v2391[v2392];
      var v6512 = attrCode & 7;
      var v2393 = v6512 << 2;
      var v6513 = attrCode & 128;
      var v2394 = v6513 >> 2;
      palette = v2393 | v2394;
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
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v8889 = tile$$1[v9978]
        }
        var v6516 = palette | v8889;
        JAMScript.set(v2395, v2396, v6515[v6516]);
        scrollXAdjusted$$1 = scrollXAdjusted$$1 + 1;
        var v6517 = pixelPosition$$3 < pixelPositionEnd$$1;
        if(v6517) {
          v6517 = scrollXAdjusted$$1 < 256
        }
        v2397 = v6517
      }
    }
    var v6518 = pixelPositionEnd$$1 - pixelPosition$$3;
    var v2399 = v6518 >> 3;
    scrollXAdjustedAligned$$1 = v2399 + tileYDown$$1;
    var v2424 = tileYDown$$1 < scrollXAdjustedAligned$$1;
    for(;v2424;) {
      var v2400 = this.BGCHRBank1;
      chrCode$$1 = v2400[tileYDown$$1];
      var v6519 = this.gfxBackgroundBankOffset;
      var v2401 = chrCode$$1 < v6519;
      if(v2401) {
        chrCode$$1 = chrCode$$1 | 256
      }
      var v2402 = this.BGCHRBank2;
      var v2403 = tileYDown$$1;
      tileYDown$$1 = tileYDown$$1 + 1;
      attrCode = v2402[v2403];
      var v2404 = this.tileCache;
      var v9979 = attrCode & 8;
      var v8890 = v9979 << 8;
      var v9980 = attrCode & 96;
      var v8891 = v9980 << 4;
      var v6520 = v8890 | v8891;
      var v2405 = v6520 | chrCode$$1;
      tile$$1 = v2404[v2405];
      var v6521 = attrCode & 7;
      var v2406 = v6521 << 2;
      var v6522 = attrCode & 128;
      var v2407 = v6522 >> 2;
      palette = v2406 | v2407;
      texel$$1 = tileYLine$$1;
      var v2408 = this.frameBuffer;
      var v2409 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6523 = this.gbcBGPalette;
      var v9981 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8892 = tile$$1[v9981]
      }
      var v6524 = palette | v8892;
      JAMScript.set(v2408, v2409, v6523[v6524]);
      var v2410 = this.frameBuffer;
      var v2411 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6525 = this.gbcBGPalette;
      var v9982 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8893 = tile$$1[v9982]
      }
      var v6526 = palette | v8893;
      JAMScript.set(v2410, v2411, v6525[v6526]);
      var v2412 = this.frameBuffer;
      var v2413 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6527 = this.gbcBGPalette;
      var v9983 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8894 = tile$$1[v9983]
      }
      var v6528 = palette | v8894;
      JAMScript.set(v2412, v2413, v6527[v6528]);
      var v2414 = this.frameBuffer;
      var v2415 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6529 = this.gbcBGPalette;
      var v9984 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8895 = tile$$1[v9984]
      }
      var v6530 = palette | v8895;
      JAMScript.set(v2414, v2415, v6529[v6530]);
      var v2416 = this.frameBuffer;
      var v2417 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6531 = this.gbcBGPalette;
      var v9985 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8896 = tile$$1[v9985]
      }
      var v6532 = palette | v8896;
      JAMScript.set(v2416, v2417, v6531[v6532]);
      var v2418 = this.frameBuffer;
      var v2419 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6533 = this.gbcBGPalette;
      var v9986 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8897 = tile$$1[v9986]
      }
      var v6534 = palette | v8897;
      JAMScript.set(v2418, v2419, v6533[v6534]);
      var v2420 = this.frameBuffer;
      var v2421 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6535 = this.gbcBGPalette;
      var v9987 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8898 = tile$$1[v9987]
      }
      var v6536 = palette | v8898;
      JAMScript.set(v2420, v2421, v6535[v6536]);
      var v2422 = this.frameBuffer;
      var v2423 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6537 = this.gbcBGPalette;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8899 = tile$$1[texel$$1]
      }
      var v6538 = palette | v8899;
      JAMScript.set(v2422, v2423, v6537[v6538]);
      v2424 = tileYDown$$1 < scrollXAdjustedAligned$$1
    }
    var v2446 = pixelPosition$$3 < pixelPositionEnd$$1;
    if(v2446) {
      var v2425 = this.BGCHRBank1;
      chrCode$$1 = v2425[tileYDown$$1];
      var v6539 = this.gfxBackgroundBankOffset;
      var v2426 = chrCode$$1 < v6539;
      if(v2426) {
        chrCode$$1 = chrCode$$1 | 256
      }
      var v2427 = this.BGCHRBank2;
      attrCode = v2427[tileYDown$$1];
      var v2428 = this.tileCache;
      var v9988 = attrCode & 8;
      var v8900 = v9988 << 8;
      var v9989 = attrCode & 96;
      var v8901 = v9989 << 4;
      var v6540 = v8900 | v8901;
      var v2429 = v6540 | chrCode$$1;
      tile$$1 = v2428[v2429];
      var v6541 = attrCode & 7;
      var v2430 = v6541 << 2;
      var v6542 = attrCode & 128;
      var v2431 = v6542 >> 2;
      palette = v2430 | v2431;
      var v2445 = pixelPositionEnd$$1 - pixelPosition$$3;
      switch(v2445) {
        case 7:
          var v2432 = this.frameBuffer;
          var v2433 = pixelPosition$$3 + 6;
          var v6543 = this.gbcBGPalette;
          var v9990 = tileYLine$$1 | 6;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8902 = tile$$1[v9990]
          }
          var v6544 = palette | v8902;
          JAMScript.set(v2432, v2433, v6543[v6544]);
        case 6:
          var v2434 = this.frameBuffer;
          var v2435 = pixelPosition$$3 + 5;
          var v6545 = this.gbcBGPalette;
          var v9991 = tileYLine$$1 | 5;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8903 = tile$$1[v9991]
          }
          var v6546 = palette | v8903;
          JAMScript.set(v2434, v2435, v6545[v6546]);
        case 5:
          var v2436 = this.frameBuffer;
          var v2437 = pixelPosition$$3 + 4;
          var v6547 = this.gbcBGPalette;
          var v9992 = tileYLine$$1 | 4;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8904 = tile$$1[v9992]
          }
          var v6548 = palette | v8904;
          JAMScript.set(v2436, v2437, v6547[v6548]);
        case 4:
          var v2438 = this.frameBuffer;
          var v2439 = pixelPosition$$3 + 3;
          var v6549 = this.gbcBGPalette;
          var v9993 = tileYLine$$1 | 3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8905 = tile$$1[v9993]
          }
          var v6550 = palette | v8905;
          JAMScript.set(v2438, v2439, v6549[v6550]);
        case 3:
          var v2440 = this.frameBuffer;
          var v2441 = pixelPosition$$3 + 2;
          var v6551 = this.gbcBGPalette;
          var v9994 = tileYLine$$1 | 2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8906 = tile$$1[v9994]
          }
          var v6552 = palette | v8906;
          JAMScript.set(v2440, v2441, v6551[v6552]);
        case 2:
          var v2442 = this.frameBuffer;
          var v2443 = pixelPosition$$3 + 1;
          var v6553 = this.gbcBGPalette;
          var v9995 = tileYLine$$1 | 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8907 = tile$$1[v9995]
          }
          var v6554 = palette | v8907;
          JAMScript.set(v2442, v2443, v6553[v6554]);
        case 1:
          var v2444 = this.frameBuffer;
          var v6555 = this.gbcBGPalette;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8908 = tile$$1[tileYLine$$1]
          }
          var v6556 = palette | v8908;
          JAMScript.set(v2444, pixelPosition$$3, v6555[v6556])
      }
    }
  }
  return
}
function v693(scanlineToRender$$1) {
  var v6557 = this.backgroundY;
  var v2448 = v6557 + scanlineToRender$$1;
  var scrollYAdjusted = v2448 & 255;
  var v2449 = scrollYAdjusted & 7;
  var tileYLine = v2449 << 3;
  var v2450 = this.gfxBackgroundCHRBankPosition;
  var v6558 = scrollYAdjusted & 248;
  var v2451 = v6558 << 2;
  var tileYDown = v2450 | v2451;
  var v6559 = this.backgroundX;
  var v6560 = this.currentX;
  var v2452 = v6559 + v6560;
  var scrollXAdjusted = v2452 & 255;
  var v2453 = this.pixelStart;
  var v2454 = this.currentX;
  var pixelPosition$$2 = v2453 + v2454;
  var v2455 = this.pixelStart;
  var v6561;
  var v9996 = this.gfxWindowDisplay;
  if(v9996) {
    var v10654 = this.windowY;
    var v10451 = scanlineToRender$$1 - v10654;
    v9996 = v10451 >= 0
  }
  var v8911 = v9996;
  if(v8911) {
    var v10452 = this.windowX;
    var v9997 = Math.max(v10452, 0);
    var v9998 = this.currentX;
    var v8909 = v9997 + v9998;
    var v8910 = this.pixelEnd;
    v6561 = Math.min(v8909, v8910)
  }else {
    v6561 = this.pixelEnd
  }
  var v2456 = v6561;
  var pixelPositionEnd = v2455 + v2456;
  var v2457 = scrollXAdjusted >> 3;
  var tileNumber$$1 = tileYDown + v2457;
  var v2458 = this.BGCHRBank1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var chrCode = v2458[tileNumber$$1]
  }
  var v6562 = this.gfxBackgroundBankOffset;
  var v2459 = chrCode < v6562;
  if(v2459) {
    chrCode = chrCode | 256
  }
  var v2460 = this.tileCache;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6565 = tile[v8913]
    }
    JAMScript.set(v2461, v2462, v6564[v6565], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
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
  var v6567 = pixelPositionEnd - pixelPosition$$2;
  var v6568 = 256 - scrollXAdjusted;
  var v2464 = Math.min(v6567, v6568);
  var scrollXAdjustedAligned = v2464 >> 3;
  var v6569 = scrollXAdjustedAligned << 3;
  scrollXAdjusted = scrollXAdjusted + v6569;
  scrollXAdjustedAligned = scrollXAdjustedAligned + tileNumber$$1;
  var v2485 = tileNumber$$1 < scrollXAdjustedAligned;
  for(;v2485;) {
    var v2465 = this.BGCHRBank1;
    var v2466 = tileNumber$$1 = tileNumber$$1 + 1;
    chrCode = v2465[v2466];
    var v6570 = this.gfxBackgroundBankOffset;
    var v2467 = chrCode < v6570;
    if(v2467) {
      chrCode = chrCode | 256
    }
    var v2468 = this.tileCache;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      tile = v2468[chrCode]
    }
    texel = tileYLine;
    var v2469 = this.frameBuffer;
    var v2470 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6571 = this.BGPalette;
    var v8915 = texel;
    texel = texel + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6572 = tile[v8915]
    }
    JAMScript.set(v2469, v2470, v6571[v6572], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    var v2471 = this.frameBuffer;
    var v2472 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6573 = this.BGPalette;
    var v8916 = texel;
    texel = texel + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6574 = tile[v8916]
    }
    JAMScript.set(v2471, v2472, v6573[v6574], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    var v2473 = this.frameBuffer;
    var v2474 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6575 = this.BGPalette;
    var v8917 = texel;
    texel = texel + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6576 = tile[v8917]
    }
    JAMScript.set(v2473, v2474, v6575[v6576], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    var v2475 = this.frameBuffer;
    var v2476 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6577 = this.BGPalette;
    var v8918 = texel;
    texel = texel + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6578 = tile[v8918]
    }
    JAMScript.set(v2475, v2476, v6577[v6578], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    var v2477 = this.frameBuffer;
    var v2478 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6579 = this.BGPalette;
    var v8919 = texel;
    texel = texel + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6580 = tile[v8919]
    }
    JAMScript.set(v2477, v2478, v6579[v6580], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    var v2479 = this.frameBuffer;
    var v2480 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6581 = this.BGPalette;
    var v8920 = texel;
    texel = texel + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6582 = tile[v8920]
    }
    JAMScript.set(v2479, v2480, v6581[v6582], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    var v2481 = this.frameBuffer;
    var v2482 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6583 = this.BGPalette;
    var v8921 = texel;
    texel = texel + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6584 = tile[v8921]
    }
    JAMScript.set(v2481, v2482, v6583[v6584], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    var v2483 = this.frameBuffer;
    var v2484 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6585 = this.BGPalette;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6586 = tile[texel]
    }
    JAMScript.set(v2483, v2484, v6585[v6586], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    v2485 = tileNumber$$1 < scrollXAdjustedAligned
  }
  var v2534 = pixelPosition$$2 < pixelPositionEnd;
  if(v2534) {
    var v2493 = scrollXAdjusted < 256;
    if(v2493) {
      var v2486 = this.BGCHRBank1;
      var v2487 = tileNumber$$1 = tileNumber$$1 + 1;
      chrCode = v2486[v2487];
      var v6587 = this.gfxBackgroundBankOffset;
      var v2488 = chrCode < v6587;
      if(v2488) {
        chrCode = chrCode | 256
      }
      var v2489 = this.tileCache;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
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
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v6590 = tile[v8922]
        }
        JAMScript.set(v2490, v2491, v6589[v6590], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
        scrollXAdjusted = scrollXAdjusted + 1;
        var v6591 = pixelPosition$$2 < pixelPositionEnd;
        if(v6591) {
          v6591 = scrollXAdjusted < 256
        }
        v2492 = v6591
      }
    }
    var v6592 = pixelPositionEnd - pixelPosition$$2;
    var v2494 = v6592 >> 3;
    scrollXAdjustedAligned = v2494 + tileYDown;
    var v2515 = tileYDown < scrollXAdjustedAligned;
    for(;v2515;) {
      var v2495 = this.BGCHRBank1;
      var v2496 = tileYDown;
      tileYDown = tileYDown + 1;
      chrCode = v2495[v2496];
      var v6593 = this.gfxBackgroundBankOffset;
      var v2497 = chrCode < v6593;
      if(v2497) {
        chrCode = chrCode | 256
      }
      var v2498 = this.tileCache;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        tile = v2498[chrCode]
      }
      texel = tileYLine;
      var v2499 = this.frameBuffer;
      var v2500 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6594 = this.BGPalette;
      var v8923 = texel;
      texel = texel + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6595 = tile[v8923]
      }
      JAMScript.set(v2499, v2500, v6594[v6595], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      var v2501 = this.frameBuffer;
      var v2502 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6596 = this.BGPalette;
      var v8924 = texel;
      texel = texel + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6597 = tile[v8924]
      }
      JAMScript.set(v2501, v2502, v6596[v6597], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      var v2503 = this.frameBuffer;
      var v2504 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6598 = this.BGPalette;
      var v8925 = texel;
      texel = texel + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6599 = tile[v8925]
      }
      JAMScript.set(v2503, v2504, v6598[v6599], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      var v2505 = this.frameBuffer;
      var v2506 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6600 = this.BGPalette;
      var v8926 = texel;
      texel = texel + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6601 = tile[v8926]
      }
      JAMScript.set(v2505, v2506, v6600[v6601], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      var v2507 = this.frameBuffer;
      var v2508 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6602 = this.BGPalette;
      var v8927 = texel;
      texel = texel + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6603 = tile[v8927]
      }
      JAMScript.set(v2507, v2508, v6602[v6603], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      var v2509 = this.frameBuffer;
      var v2510 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6604 = this.BGPalette;
      var v8928 = texel;
      texel = texel + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6605 = tile[v8928]
      }
      JAMScript.set(v2509, v2510, v6604[v6605], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      var v2511 = this.frameBuffer;
      var v2512 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6606 = this.BGPalette;
      var v8929 = texel;
      texel = texel + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6607 = tile[v8929]
      }
      JAMScript.set(v2511, v2512, v6606[v6607], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      var v2513 = this.frameBuffer;
      var v2514 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6608 = this.BGPalette;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6609 = tile[texel]
      }
      JAMScript.set(v2513, v2514, v6608[v6609], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      v2515 = tileYDown < scrollXAdjustedAligned
    }
    var v2533 = pixelPosition$$2 < pixelPositionEnd;
    if(v2533) {
      var v2516 = this.BGCHRBank1;
      chrCode = v2516[tileYDown];
      var v6610 = this.gfxBackgroundBankOffset;
      var v2517 = chrCode < v6610;
      if(v2517) {
        chrCode = chrCode | 256
      }
      var v2518 = this.tileCache;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        tile = v2518[chrCode]
      }
      var v2532 = pixelPositionEnd - pixelPosition$$2;
      switch(v2532) {
        case 7:
          var v2519 = this.frameBuffer;
          var v2520 = pixelPosition$$2 + 6;
          var v6611 = this.BGPalette;
          var v8930 = tileYLine | 6;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6612 = tile[v8930]
          }
          JAMScript.set(v2519, v2520, v6611[v6612], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
        case 6:
          var v2521 = this.frameBuffer;
          var v2522 = pixelPosition$$2 + 5;
          var v6613 = this.BGPalette;
          var v8931 = tileYLine | 5;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6614 = tile[v8931]
          }
          JAMScript.set(v2521, v2522, v6613[v6614], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
        case 5:
          var v2523 = this.frameBuffer;
          var v2524 = pixelPosition$$2 + 4;
          var v6615 = this.BGPalette;
          var v8932 = tileYLine | 4;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6616 = tile[v8932]
          }
          JAMScript.set(v2523, v2524, v6615[v6616], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
        case 4:
          var v2525 = this.frameBuffer;
          var v2526 = pixelPosition$$2 + 3;
          var v6617 = this.BGPalette;
          var v8933 = tileYLine | 3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6618 = tile[v8933]
          }
          JAMScript.set(v2525, v2526, v6617[v6618], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
        case 3:
          var v2527 = this.frameBuffer;
          var v2528 = pixelPosition$$2 + 2;
          var v6619 = this.BGPalette;
          var v8934 = tileYLine | 2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6620 = tile[v8934]
          }
          JAMScript.set(v2527, v2528, v6619[v6620], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
        case 2:
          var v2529 = this.frameBuffer;
          var v2530 = pixelPosition$$2 + 1;
          var v6621 = this.BGPalette;
          var v8935 = tileYLine | 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6622 = tile[v8935]
          }
          JAMScript.set(v2529, v2530, v6621[v6622], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
        case 1:
          var v2531 = this.frameBuffer;
          var v6623 = this.BGPalette;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6624 = tile[tileYLine]
          }
          JAMScript.set(v2531, pixelPosition$$2, v6623[v6624], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074)
      }
    }
  }
  return
}
function v692(index$$61, data$$29) {
  var v8936 = this.gbcOBJRawPalette;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6625 = v8936[index$$61]
  }
  var v2539 = v6625 != data$$29;
  if(v2539) {
    var v2535 = this.gbcOBJRawPalette;
    JAMScript.set(v2535, index$$61, data$$29);
    var v6626 = index$$61 & 6;
    var v2538 = v6626 > 0;
    if(v2538) {
      JAMScript.call(this.midScanLineJIT, this, []);
      var v2536 = this.gbcOBJPalette;
      var v2537 = index$$61 >> 1;
      var v10655 = this.gbcOBJRawPalette;
      var v10656 = index$$61 | 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10453 = v10655[v10656]
      }
      var v10000 = v10453 << 8;
      var v10454 = this.gbcOBJRawPalette;
      var v10455 = index$$61 & 62;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10001 = v10454[v10455]
      }
      var v8937 = v10000 | v10001;
      var v6627 = JAMScript.call(this.RGBTint, this, [v8937]);
      v2536[v2537] = 16777216 | v6627
    }
  }
  return
}
function v691(index$$60, data$$28) {
  var v8938 = this.gbcBGRawPalette;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6628 = v8938[index$$60]
  }
  var v2550 = v6628 != data$$28;
  if(v2550) {
    JAMScript.call(this.midScanLineJIT, this, []);
    var v2540 = this.gbcBGRawPalette;
    JAMScript.set(v2540, index$$60, data$$28);
    var v6629 = index$$60 & 6;
    var v2549 = v6629 == 0;
    if(v2549) {
      var v10456 = this.gbcBGRawPalette;
      var v10457 = index$$60 | 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10002 = v10456[v10457]
      }
      var v8939 = v10002 << 8;
      var v10003 = this.gbcBGRawPalette;
      var v10004 = index$$60 & 62;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8940 = v10003[v10004]
      }
      var v6630 = v8939 | v8940;
      var v2541 = JAMScript.call(this.RGBTint, this, [v6630]);
      data$$28 = 33554432 | v2541;
      index$$60 = index$$60 >> 1;
      var v2542 = this.gbcBGPalette;
      JAMScript.set(v2542, index$$60, data$$28);
      var v2543 = this.gbcBGPalette;
      var v2544 = 32 | index$$60;
      v2543[v2544] = 16777216 | data$$28
    }else {
      var v10005 = this.gbcBGRawPalette;
      var v10006 = index$$60 | 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8941 = v10005[v10006]
      }
      var v6631 = v8941 << 8;
      var v8942 = this.gbcBGRawPalette;
      var v8943 = index$$60 & 62;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6632 = v8942[v8943]
      }
      var v2545 = v6631 | v6632;
      data$$28 = JAMScript.call(this.RGBTint, this, [v2545]);
      index$$60 = index$$60 >> 1;
      var v2546 = this.gbcBGPalette;
      JAMScript.set(v2546, index$$60, data$$28);
      var v2547 = this.gbcBGPalette;
      var v2548 = 32 | index$$60;
      v2547[v2548] = 16777216 | data$$28
    }
  }
  return
}
function v690(index$$59, data$$27) {
  var v2551 = this.gbOBJColorizedPalette;
  var v2552 = index$$59 | 1;
  var v6633 = this.cachedOBJPaletteConversion;
  var v10007 = data$$27 >> 2;
  var v8944 = v10007 & 3;
  var v6634 = index$$59 | v8944;
  v2551[v2552] = v6633[v6634];
  var v2553 = this.gbOBJColorizedPalette;
  var v2554 = index$$59 | 2;
  var v6635 = this.cachedOBJPaletteConversion;
  var v10008 = data$$27 >> 4;
  var v8945 = v10008 & 3;
  var v6636 = index$$59 | v8945;
  v2553[v2554] = v6635[v6636];
  var v2555 = this.gbOBJColorizedPalette;
  var v2556 = index$$59 | 3;
  var v6637 = this.cachedOBJPaletteConversion;
  var v8946 = data$$27 >> 6;
  var v6638 = index$$59 | v8946;
  v2555[v2556] = v6637[v6638];
  return
}
function v689(index$$58, data$$26) {
  var v2557 = this.gbOBJPalette;
  var v2558 = index$$58 | 1;
  var v6639 = this.colors;
  var v8947 = data$$26 >> 2;
  var v6640 = v8947 & 3;
  v2557[v2558] = v6639[v6640];
  var v2559 = this.gbOBJPalette;
  var v2560 = index$$58 | 2;
  var v6641 = this.colors;
  var v8948 = data$$26 >> 4;
  var v6642 = v8948 & 3;
  v2559[v2560] = v6641[v6642];
  var v2561 = this.gbOBJPalette;
  var v2562 = index$$58 | 3;
  var v6643 = this.colors;
  var v6644 = data$$26 >> 6;
  v2561[v2562] = v6643[v6644];
  return
}
function v688(data$$25) {
  var v2563 = this.gbBGColorizedPalette;
  var v8949 = this.cachedBGPaletteConversion;
  var v8950 = data$$25 & 3;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6645 = v8949[v8950]
  }
  v2563[0] = v6645 | 33554432;
  var v2564 = this.gbBGColorizedPalette;
  var v6646 = this.cachedBGPaletteConversion;
  var v8951 = data$$25 >> 2;
  var v6647 = v8951 & 3;
  v2564[1] = v6646[v6647];
  var v2565 = this.gbBGColorizedPalette;
  var v6648 = this.cachedBGPaletteConversion;
  var v8952 = data$$25 >> 4;
  var v6649 = v8952 & 3;
  v2565[2] = v6648[v6649];
  var v2566 = this.gbBGColorizedPalette;
  var v6650 = this.cachedBGPaletteConversion;
  var v6651 = data$$25 >> 6;
  v2566[3] = v6650[v6651];
  return
}
function v687(data$$24) {
  var v2567 = this.gbBGPalette;
  var v8953 = this.colors;
  var v8954 = data$$24 & 3;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6652 = v8953[v8954]
  }
  v2567[0] = v6652 | 33554432;
  var v2568 = this.gbBGPalette;
  var v6653 = this.colors;
  var v8955 = data$$24 >> 2;
  var v6654 = v8955 & 3;
  v2568[1] = v6653[v6654];
  var v2569 = this.gbBGPalette;
  var v6655 = this.colors;
  var v8956 = data$$24 >> 4;
  var v6656 = v8956 & 3;
  v2569[2] = v6655[v6656];
  var v2570 = this.gbBGPalette;
  var v6657 = this.colors;
  var v6658 = data$$24 >> 6;
  v2570[3] = v6657[v6658];
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v10009 = v10458[v10459]
    }
    var v8957 = v10009 << 8;
    var v10010 = this.gbcBGRawPalette;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8958 = v10010[adjustedIndex]
    }
    var v6659 = v8957 | v8958;
    var v10847 = JAMScript.call(this.RGBTint, this, [v6659]);
    v2571[v2572] = v10847;
    var v2573 = this.cachedOBJPaletteConversion;
    var v2574 = counter;
    var v10460 = this.gbcOBJRawPalette;
    var v10461 = adjustedIndex | 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v10011 = v10460[v10461]
    }
    var v8959 = v10011 << 8;
    var v10012 = this.gbcOBJRawPalette;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8960 = v10012[adjustedIndex]
    }
    var v6660 = v8959 | v8960;
    var v10848 = JAMScript.call(this.RGBTint, this, [v6660]);
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v10013 = v10462[v10463]
    }
    var v8961 = v10013 << 8;
    var v10014 = this.gbcOBJRawPalette;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8962 = v10014[adjustedIndex]
    }
    var v6661 = v8961 | v8962;
    var v10849 = JAMScript.call(this.RGBTint, this, [v6661]);
    v2576[v2577] = v10849;
    counter = counter + 1;
    v2578 = counter < 8
  }
  this.updateGBBGPalette = this.updateGBColorizedBGPalette;
  this.updateGBOBJPalette = this.updateGBColorizedOBJPalette;
  var v6662 = this.memory;
  var v2579 = v6662[65351];
  JAMScript.call(this.updateGBBGPalette, this, [v2579]);
  var v6663 = this.memory;
  var v2580 = v6663[65352];
  JAMScript.call(this.updateGBOBJPalette, this, [0, v2580]);
  var v6664 = this.memory;
  var v2581 = v6664[65353];
  JAMScript.call(this.updateGBOBJPalette, this, [1, v2581]);
  this.colorizedGBPalettes = true;
  return
}
function v685(value$$30) {
  var r = value$$30 & 31;
  var v2582 = value$$30 >> 5;
  var g = v2582 & 31;
  var v2583 = value$$30 >> 10;
  var b = v2583 & 31;
  var v10657 = r * 13;
  var v10658 = g * 2;
  var v10464 = v10657 + v10658;
  var v10015 = v10464 + b;
  var v8963 = v10015 >> 1;
  var v6665 = v8963 << 16;
  var v10016 = g * 3;
  var v8964 = v10016 + b;
  var v6666 = v8964 << 9;
  var v2584 = v6665 | v6666;
  var v10017 = r * 3;
  var v10018 = g * 2;
  var v8965 = v10017 + v10018;
  var v8966 = b * 11;
  var v6667 = v8965 + v8966;
  var v2585 = v6667 >> 1;
  return v2584 | v2585
}
function v684() {
  var v2586;
  var v6668 = this.LCDisOn;
  if(v6668) {
    v2586 = this.LINECONTROL
  }else {
    v2586 = this.DISPLAYOFFCONTROL
  }
  this.LCDCONTROL = v2586;
  var tileIndex = 0;
  var v6669 = this.cGBC;
  var v2592 = !v6669;
  if(v2592) {
    var v2587 = this.colorizedGBPalettes;
    if(v2587) {
      this.BGPalette = this.gbBGColorizedPalette;
      this.OBJPalette = this.gbOBJColorizedPalette;
      this.updateGBBGPalette = this.updateGBColorizedBGPalette;
      this.updateGBOBJPalette = this.updateGBColorizedOBJPalette
    }else {
      this.BGPalette = this.gbBGPalette;
      this.OBJPalette = this.gbOBJPalette
    }
    var v10850 = JAMScript.call(this.generateCacheArray, this, [1792]);
    this.tileCache = v10850;
    tileIndex = 32768;
    var v2588 = tileIndex < 36864;
    for(;v2588;) {
      JAMScript.call(this.generateGBOAMTileLine, this, [tileIndex]);
      tileIndex = tileIndex + 2;
      v2588 = tileIndex < 36864
    }
    tileIndex = 36864;
    var v2589 = tileIndex < 38912;
    for(;v2589;) {
      JAMScript.call(this.generateGBTileLine, this, [tileIndex]);
      tileIndex = tileIndex + 2;
      v2589 = tileIndex < 38912
    }
    var v10851 = JAMScript.call(this.getTypedArray, this, [256, 0, "uint8"]);
    this.sortBuffer = v10851;
    var v10852 = JAMScript.call(this.getTypedArray, this, [10, 0, "int32"]);
    this.OAMAddressCache = v10852
  }else {
    var v2590;
    var v8967 = this.currVRAMBank;
    var v6670 = v8967 > 0;
    if(v6670) {
      v2590 = this.BGCHRBank2
    }else {
      v2590 = this.BGCHRBank1
    }
    this.BGCHRCurrentBank = v2590;
    var v10853 = JAMScript.call(this.generateCacheArray, this, [3968]);
    this.tileCache = v10853;
    var v2591 = tileIndex < 6144;
    for(;v2591;) {
      JAMScript.call(this.generateGBCTileBank1, this, [tileIndex]);
      JAMScript.call(this.generateGBCTileBank2, this, [tileIndex]);
      tileIndex = tileIndex + 16;
      v2591 = tileIndex < 6144
    }
  }
  JAMScript.call(this.renderPathBuild, this, []);
  return
}
function v683() {
  var v2593 = this.BGPriorityEnabled;
  if(v2593) {
    this.BGLayerRender = this.BGGBCLayerRender;
    this.WindowLayerRender = this.WindowGBCLayerRender
  }else {
    this.BGLayerRender = this.BGGBCLayerRenderNoPriorityFlagging;
    this.WindowLayerRender = this.WindowGBCLayerRenderNoPriorityFlagging
  }
  return
}
function v682() {
  var v6671 = this.cGBC;
  var v2594 = !v6671;
  if(v2594) {
    this.BGLayerRender = this.BGGBLayerRender;
    this.WindowLayerRender = this.WindowGBLayerRender;
    this.SpriteLayerRender = this.SpriteGBLayerRender
  }else {
    JAMScript.call(this.priorityFlaggingPathRebuild, this, []);
    this.SpriteLayerRender = this.SpriteGBCLayerRender
  }
  return
}
function v681() {
  cout("Stepping down from GBC mode.", 0);
  this.VRAM = this.GBCMemory = this.BGCHRCurrentBank = this.BGCHRBank2 = null;
  var v2595 = this.tileCache;
  v2595.length = 1792;
  var v2596 = settings[4];
  if(v2596) {
    var v10854 = JAMScript.call(this.getTypedArray, this, [4, 0, "int32"]);
    this.gbBGColorizedPalette = v10854;
    var v10855 = JAMScript.call(this.getTypedArray, this, [8, 0, "int32"]);
    this.gbOBJColorizedPalette = v10855;
    var v10856 = JAMScript.call(this.getTypedArray, this, [4, 0, "int32"]);
    this.cachedBGPaletteConversion = v10856;
    var v10857 = JAMScript.call(this.getTypedArray, this, [8, 0, "int32"]);
    this.cachedOBJPaletteConversion = v10857;
    this.BGPalette = this.gbBGColorizedPalette;
    this.OBJPalette = this.gbOBJColorizedPalette;
    this.gbOBJPalette = this.gbBGPalette = null;
    JAMScript.call(this.getGBCColor, this, [])
  }else {
    var v10858 = JAMScript.call(this.getTypedArray, this, [8, 0, "int32"]);
    this.gbOBJPalette = v10858;
    var v10859 = JAMScript.call(this.getTypedArray, this, [4, 0, "int32"]);
    this.gbBGPalette = v10859;
    this.BGPalette = this.gbBGPalette;
    this.OBJPalette = this.gbOBJPalette
  }
  var v10860 = JAMScript.call(this.getTypedArray, this, [256, 0, "uint8"]);
  this.sortBuffer = v10860;
  var v10861 = JAMScript.call(this.getTypedArray, this, [10, 0, "int32"]);
  this.OAMAddressCache = v10861;
  JAMScript.call(this.renderPathBuild, this, []);
  JAMScript.call(this.memoryReadJumpCompile, this, []);
  JAMScript.call(this.memoryWriteJumpCompile, this, []);
  return
}
function v680() {
  var v2597;
  var v6672 = this.LCDisOn;
  if(v6672) {
    v2597 = this.LINECONTROL
  }else {
    v2597 = this.DISPLAYOFFCONTROL
  }
  this.LCDCONTROL = v2597;
  var v2599 = this.cGBC;
  if(v2599) {
    var v10862 = JAMScript.call(this.getTypedArray, this, [64, 0, "uint8"]);
    this.gbcOBJRawPalette = v10862;
    var v10863 = JAMScript.call(this.getTypedArray, this, [64, 0, "uint8"]);
    this.gbcBGRawPalette = v10863;
    var v10864 = JAMScript.call(this.getTypedArray, this, [32, 16777216, "int32"]);
    this.gbcOBJPalette = v10864;
    var v10865 = JAMScript.call(this.getTypedArray, this, [64, 0, "int32"]);
    this.gbcBGPalette = v10865;
    var v10866 = JAMScript.call(this.getTypedArray, this, [2048, 0, "uint8"]);
    this.BGCHRBank2 = v10866;
    var v2598;
    var v8968 = this.currVRAMBank;
    var v6673 = v8968 > 0;
    if(v6673) {
      v2598 = this.BGCHRBank2
    }else {
      v2598 = this.BGCHRBank1
    }
    this.BGCHRCurrentBank = v2598;
    var v10867 = JAMScript.call(this.generateCacheArray, this, [3968]);
    this.tileCache = v10867
  }else {
    var v10868 = JAMScript.call(this.getTypedArray, this, [8, 0, "int32"]);
    this.gbOBJPalette = v10868;
    var v10869 = JAMScript.call(this.getTypedArray, this, [4, 0, "int32"]);
    this.gbBGPalette = v10869;
    this.BGPalette = this.gbBGPalette;
    this.OBJPalette = this.gbOBJPalette;
    var v10870 = JAMScript.call(this.generateCacheArray, this, [1792]);
    this.tileCache = v10870;
    var v10871 = JAMScript.call(this.getTypedArray, this, [256, 0, "uint8"]);
    this.sortBuffer = v10871;
    var v10872 = JAMScript.call(this.getTypedArray, this, [10, 0, "int32"]);
    this.OAMAddressCache = v10872
  }
  JAMScript.call(this.renderPathBuild, this, []);
  return
}
function v679() {
  var v8969 = this.actualScanLine;
  var v6674 = v8969 < 144;
  if(v6674) {
    var v8970 = this.modeSTAT;
    v6674 = v8970 == 3
  }
  var v2616 = v6674;
  if(v2616) {
    var v6675 = this.midScanlineOffset;
    var v2601 = v6675 == -1;
    if(v2601) {
      var v2600 = this.backgroundX;
      this.midScanlineOffset = v2600 & 7
    }
    var v6676 = this.LCDTicks;
    var v2615 = v6676 >= 82;
    if(v2615) {
      var v2602 = this.LCDTicks;
      this.pixelEnd = v2602 - 74;
      var v8971 = this.pixelEnd;
      var v8972 = this.midScanlineOffset;
      var v6677 = v8971 - v8972;
      var v8973 = this.pixelEnd;
      var v6678 = v8973 % 8;
      var v2603 = v6677 - v6678;
      var v10873 = Math.min(v2603, 160);
      this.pixelEnd = v10873;
      var v2614 = this.bgEnabled;
      if(v2614) {
        var v2604 = this.lastUnrenderedLine;
        this.pixelStart = v2604 * 160;
        var v2605 = this.lastUnrenderedLine;
        JAMScript.call(this.BGLayerRender, this, [v2605]);
        var v2606 = this.lastUnrenderedLine;
        JAMScript.call(this.WindowLayerRender, this, [v2606])
      }else {
        var v6679 = this.lastUnrenderedLine;
        var v2607 = v6679 * 160;
        var v2608 = this.pixelEnd;
        var pixelLine$$1 = v2607 + v2608;
        var v2609;
        var v8974 = this.cGBC;
        var v10019 = !v8974;
        if(v10019) {
          v8974 = this.colorizedGBPalettes
        }
        var v6680 = v8974;
        if(v6680) {
          v2609 = 16316664
        }else {
          v2609 = 15728606
        }
        var defaultColor$$1 = v2609;
        var v6681 = this.lastUnrenderedLine;
        var v2610 = v6681 * 160;
        var v2611 = this.currentX;
        var pixelPosition$$1 = v2610 + v2611;
        var v2613 = pixelPosition$$1 < pixelLine$$1;
        for(;v2613;) {
          var v2612 = this.frameBuffer;
          JAMScript.set(v2612, pixelPosition$$1, defaultColor$$1);
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
  var v2623 = this.bgEnabled;
  if(v2623) {
    this.pixelEnd = 160;
    JAMScript.call(this.BGLayerRender, this, [scanlineToRender]);
    JAMScript.call(this.WindowLayerRender, this, [scanlineToRender])
  }else {
    var v2617 = scanlineToRender + 1;
    var pixelLine = v2617 * 160;
    var v2618;
    var v8975 = this.cGBC;
    var v10020 = !v8975;
    if(v10020) {
      v8975 = this.colorizedGBPalettes
    }
    var v6682 = v8975;
    if(v6682) {
      v2618 = 16316664
    }else {
      v2618 = 15728606
    }
    var defaultColor = v2618;
    var v2619 = scanlineToRender * 160;
    var v2620 = this.currentX;
    var pixelPosition = v2619 + v2620;
    var v2622 = pixelPosition < pixelLine;
    for(;v2622;) {
      var v2621 = this.frameBuffer;
      JAMScript.set(v2621, pixelPosition, defaultColor);
      pixelPosition = pixelPosition + 1;
      v2622 = pixelPosition < pixelLine
    }
  }
  JAMScript.call(this.SpriteLayerRender, this, [scanlineToRender]);
  this.currentX = 0;
  this.midScanlineOffset = -1;
  return
}
function v677() {
  var v6683 = this.offscreenRGBCount;
  var v2626 = v6683 > 0;
  if(v2626) {
    var v2624 = this.offscreenWidth;
    var v2625 = this.offscreenHeight;
    var v10874 = new Resize(160, 144, v2624, v2625, false, true);
    this.resizer = v10874
  }
  return
}
function v676() {
  var v2627 = this.resizer;
  var v2628 = this.swizzledFrame;
  return JAMScript.call(v2627.resize, v2627, [v2628])
}
function v675() {
  var bufferIndex$$2 = 0;
  var frameBuffer$$2 = this.swizzledFrame;
  var v6684 = this.cGBC;
  var v8976 = !v6684;
  if(v8976) {
    v6684 = this.colorizedGBPalettes
  }
  var v2635 = v6684;
  if(v2635) {
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8977 = frameBuffer$$1[bufferIndex$$1]
    }
    var v6685 = v8977 >> 16;
    swizzledFrame[v2636] = v6685 & 255;
    var v2637 = canvasIndex$$1;
    canvasIndex$$1 = canvasIndex$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8978 = frameBuffer$$1[bufferIndex$$1]
    }
    var v6686 = v8978 >> 8;
    swizzledFrame[v2637] = v6686 & 255;
    var v2638 = canvasIndex$$1;
    canvasIndex$$1 = canvasIndex$$1 + 1;
    var v8979 = bufferIndex$$1;
    bufferIndex$$1 = bufferIndex$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6687 = frameBuffer$$1[v8979]
    }
    swizzledFrame[v2638] = v6687 & 255;
    v2639 = canvasIndex$$1 < 69120
  }
  return
}
function v673() {
  var canvasRGBALength = this.offscreenRGBCount;
  var v2646 = canvasRGBALength > 0;
  if(v2646) {
    var v2640;
    var v6688 = canvasRGBALength == 92160;
    if(v6688) {
      v2640 = this.swizzledFrame
    }else {
      v2640 = JAMScript.call(this.resizeFrameBuffer, this, [])
    }
    var frameBuffer = v2640;
    var v2641 = this.canvasBuffer;
    var canvasData = v2641.data;
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
    JAMScript.call(this.graphicsBlit, this, [])
  }
  return
}
function v672() {
  var v2647 = this.drewFrame;
  if(v2647) {
    JAMScript.call(this.dispatchDraw, this, [])
  }
  return
}
function v671() {
  JAMScript.call(this.swizzleFrameBuffer, this, []);
  this.drewFrame = true;
  return
}
function v670() {
  var v2654 = this.cTIMER;
  if(v2654) {
    var dateObj = new_Date();
    var newTime = JAMScript.call(dateObj.getTime, dateObj, []);
    var v2648 = this.lastIteration;
    var timeElapsed = newTime - v2648;
    this.lastIteration = newTime;
    var v6692 = this.cTIMER;
    if(v6692) {
      var v8980 = this.RTCHALT;
      v6692 = !v8980
    }
    var v2653 = v6692;
    if(v2653) {
      var v6693 = this.RTCSeconds;
      var v6694 = timeElapsed / 1E3;
      this.RTCSeconds = v6693 + v6694;
      var v6695 = this.RTCSeconds;
      var v2652 = v6695 >= 60;
      for(;v2652;) {
        var v6696 = this.RTCSeconds;
        this.RTCSeconds = v6696 - 60;
        var v6697 = this.RTCMinutes;
        this.RTCMinutes = v6697 + 1;
        var v6698 = this.RTCMinutes;
        var v2651 = v6698 >= 60;
        if(v2651) {
          var v6699 = this.RTCMinutes;
          this.RTCMinutes = v6699 - 60;
          var v6700 = this.RTCHours;
          this.RTCHours = v6700 + 1;
          var v6701 = this.RTCHours;
          var v2650 = v6701 >= 24;
          if(v2650) {
            var v6702 = this.RTCHours;
            this.RTCHours = v6702 - 24;
            var v6703 = this.RTCDays;
            this.RTCDays = v6703 + 1;
            var v6704 = this.RTCDays;
            var v2649 = v6704 >= 512;
            if(v2649) {
              var v6705 = this.RTCDays;
              this.RTCDays = v6705 - 512;
              this.RTCDayOverFlow = true
            }
          }
        }
        var v6706 = this.RTCSeconds;
        v2652 = v6706 >= 60
      }
    }
  }
  return
}
function v669() {
  JAMScript.call(this.DMAWrite, this, [1]);
  var v2659 = this.halt;
  if(v2659) {
    var v8981 = this.LCDTicks;
    var v8982 = this.spriteCount;
    var v6707 = v8981 - v8982;
    var v10021 = this.doubleSpeedShifter;
    var v8983 = 4 >> v10021;
    var v6708 = v8983 | 32;
    var v2658 = v6707 < v6708;
    if(v2658) {
      var v8984 = this.spriteCount;
      var v6709 = 32 + v8984;
      var v6710 = this.doubleSpeedShifter;
      var v2655 = v6709 << v6710;
      this.CPUTicks = 4 + v2655;
      var v2656 = this.spriteCount;
      var v8985 = this.doubleSpeedShifter;
      var v6711 = 4 >> v8985;
      var v2657 = v6711 | 32;
      this.LCDTicks = v2656 + v2657
    }
  }else {
    var v6712 = this.LCDTicks;
    var v10022 = this.doubleSpeedShifter;
    var v8986 = 4 >> v10022;
    var v6713 = v8986 | 32;
    this.LCDTicks = v6712 + v6713
  }
  var v8987 = this.memory;
  var v6714 = v8987[65365];
  var v2661 = v6714 == 0;
  if(v2661) {
    this.hdmaRunning = false;
    var v2660 = this.memory;
    v2660[65365] = 255
  }else {
    var v6715 = this.memory;
    var v10023 = this.memory;
    var v8988 = v10023[65365];
    v6715[65365] = v8988 - 1
  }
  return
}
function v668() {
  var v6716 = this.drewBlank;
  var v2662 = v6716 == 0;
  if(v2662) {
    JAMScript.call(this.clearFrameBuffer, this, []);
    this.drewFrame = true
  }
  this.drewBlank = 2;
  return
}
function v667() {
  function v666(parentObj$$517) {
    var v6717 = parentObj$$517.LCDTicks;
    var v2671 = v6717 >= 8;
    if(v2671) {
      var v8989 = parentObj$$517.STATTracker;
      var v6718 = v8989 != 4;
      if(v6718) {
        var v10024 = parentObj$$517.memory;
        var v8990 = v10024[65348];
        v6718 = v8990 == 153
      }
      var v2668 = v6718;
      if(v2668) {
        var v2663 = parentObj$$517.memory;
        v2663[65348] = 0;
        var v8991 = parentObj$$517.memory;
        var v6719 = v8991[65349];
        var v2667 = v6719 == 0;
        if(v2667) {
          var v2664 = parentObj$$517.memory;
          var v8992 = v2664[65345];
          v2664[65345] = v8992 | 4;
          var v2665 = parentObj$$517.LYCMatchTriggerSTAT;
          if(v2665) {
            var v6720 = parentObj$$517.interruptsRequested;
            parentObj$$517.interruptsRequested = v6720 | 2;
            JAMScript.call(parentObj$$517.checkIRQMatching, parentObj$$517, [])
          }
        }else {
          var v2666 = parentObj$$517.memory;
          var v8993 = v2666[65345];
          v2666[65345] = v8993 & 123
        }
        parentObj$$517.STATTracker = 4
      }
      var v6721 = parentObj$$517.LCDTicks;
      var v2670 = v6721 >= 456;
      if(v2670) {
        var v6722 = parentObj$$517.LCDTicks;
        parentObj$$517.LCDTicks = v6722 - 456;
        parentObj$$517.STATTracker = parentObj$$517.actualScanLine = 0;
        var v2669 = parentObj$$517.LINECONTROL;
        JAMScript.call(v2669[0], v2669, [parentObj$$517])
      }
    }
    return
  }
  function v665(parentObj$$516) {
    var v6723 = parentObj$$516.LCDTicks;
    var v2678 = v6723 >= 456;
    if(v2678) {
      var v6724 = parentObj$$516.LCDTicks;
      parentObj$$516.LCDTicks = v6724 - 456;
      var v6725 = parentObj$$516.memory;
      var v10025 = parentObj$$516.memory;
      var v8994 = v10025[65348];
      parentObj$$516.actualScanLine = v6725[65348] = v8994 + 1;
      var v6726 = parentObj$$516.actualScanLine;
      var v8995 = parentObj$$516.memory;
      var v6727 = v8995[65349];
      var v2675 = v6726 == v6727;
      if(v2675) {
        var v2672 = parentObj$$516.memory;
        var v8996 = v2672[65345];
        v2672[65345] = v8996 | 4;
        var v2673 = parentObj$$516.LYCMatchTriggerSTAT;
        if(v2673) {
          var v6728 = parentObj$$516.interruptsRequested;
          parentObj$$516.interruptsRequested = v6728 | 2;
          JAMScript.call(parentObj$$516.checkIRQMatching, parentObj$$516, [])
        }
      }else {
        var v2674 = parentObj$$516.memory;
        var v8997 = v2674[65345];
        v2674[65345] = v8997 & 123
      }
      var v2676 = parentObj$$516.LINECONTROL;
      var v2677 = parentObj$$516.actualScanLine;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v11072 = [[parentObj$$516], v2676, v2676[v2677]]
      }
      JAMScript.call(v11072[2], v11072[1], v11072[0])
    }
    return
  }
  function v664(parentObj$$515) {
    var v6729 = parentObj$$515.LCDTicks;
    var v2694 = v6729 < 80;
    if(v2694) {
      JAMScript.call(parentObj$$515.scanLineMode2, parentObj$$515, [])
    }else {
      var v6730 = parentObj$$515.LCDTicks;
      var v2693 = v6730 < 252;
      if(v2693) {
        JAMScript.call(parentObj$$515.scanLineMode3, parentObj$$515, [])
      }else {
        var v6731 = parentObj$$515.LCDTicks;
        var v2692 = v6731 < 456;
        if(v2692) {
          JAMScript.call(parentObj$$515.scanLineMode0, parentObj$$515, [])
        }else {
          var v6732 = parentObj$$515.LCDTicks;
          parentObj$$515.LCDTicks = v6732 - 456;
          var v6733 = parentObj$$515.STATTracker;
          var v2683 = v6733 != 3;
          if(v2683) {
            var v6734 = parentObj$$515.STATTracker;
            var v2680 = v6734 != 2;
            if(v2680) {
              var v8998 = parentObj$$515.STATTracker;
              var v6735 = v8998 == 0;
              if(v6735) {
                v6735 = parentObj$$515.mode2TriggerSTAT
              }
              var v2679 = v6735;
              if(v2679) {
                var v6736 = parentObj$$515.interruptsRequested;
                parentObj$$515.interruptsRequested = v6736 | 2
              }
              JAMScript.call(parentObj$$515.incrementScanLineQueue, parentObj$$515, [])
            }
            var v2681 = parentObj$$515.hdmaRunning;
            if(v2681) {
              JAMScript.call(parentObj$$515.executeHDMA, parentObj$$515, [])
            }
            var v2682 = parentObj$$515.mode0TriggerSTAT;
            if(v2682) {
              var v6737 = parentObj$$515.interruptsRequested;
              parentObj$$515.interruptsRequested = v6737 | 2
            }
          }
          var v2684 = parentObj$$515.memory;
          parentObj$$515.actualScanLine = v2684[65348] = 144;
          var v8999 = parentObj$$515.memory;
          var v6738 = v8999[65349];
          var v2688 = v6738 == 144;
          if(v2688) {
            var v2685 = parentObj$$515.memory;
            var v9000 = v2685[65345];
            v2685[65345] = v9000 | 4;
            var v2686 = parentObj$$515.LYCMatchTriggerSTAT;
            if(v2686) {
              var v6739 = parentObj$$515.interruptsRequested;
              parentObj$$515.interruptsRequested = v6739 | 2
            }
          }else {
            var v2687 = parentObj$$515.memory;
            var v9001 = v2687[65345];
            v2687[65345] = v9001 & 123
          }
          parentObj$$515.STATTracker = 0;
          parentObj$$515.modeSTAT = 1;
          var v6740 = parentObj$$515.interruptsRequested;
          var v9002;
          var v10026 = parentObj$$515.mode1TriggerSTAT;
          if(v10026) {
            v9002 = 3
          }else {
            v9002 = 1
          }
          var v6741 = v9002;
          parentObj$$515.interruptsRequested = v6740 | v6741;
          JAMScript.call(parentObj$$515.checkIRQMatching, parentObj$$515, []);
          var v6742 = parentObj$$515.drewBlank;
          var v2690 = v6742 == 0;
          if(v2690) {
            var v9003 = parentObj$$515.totalLinesPassed;
            var v6743 = v9003 < 144;
            var v9005 = !v6743;
            if(v9005) {
              var v10027 = parentObj$$515.totalLinesPassed;
              var v9004 = v10027 == 144;
              if(v9004) {
                var v10028 = parentObj$$515.midScanlineOffset;
                v9004 = v10028 > -1
              }
              v6743 = v9004
            }
            var v2689 = v6743;
            if(v2689) {
              JAMScript.call(parentObj$$515.graphicsJITVBlank, parentObj$$515, []);
              JAMScript.call(parentObj$$515.prepareFrame, parentObj$$515, [])
            }
          }else {
            var v6744 = parentObj$$515.drewBlank;
            parentObj$$515.drewBlank = v6744 - 1
          }
          var v2691 = parentObj$$515.LINECONTROL;
          JAMScript.call(v2691[144], v2691, [parentObj$$515])
        }
      }
    }
    return
  }
  function v663(parentObj$$514) {
    var v6745 = parentObj$$514.LCDTicks;
    var v2708 = v6745 < 80;
    if(v2708) {
      JAMScript.call(parentObj$$514.scanLineMode2, parentObj$$514, [])
    }else {
      var v6746 = parentObj$$514.LCDTicks;
      var v2707 = v6746 < 252;
      if(v2707) {
        JAMScript.call(parentObj$$514.scanLineMode3, parentObj$$514, [])
      }else {
        var v6747 = parentObj$$514.LCDTicks;
        var v2706 = v6747 < 456;
        if(v2706) {
          JAMScript.call(parentObj$$514.scanLineMode0, parentObj$$514, [])
        }else {
          var v6748 = parentObj$$514.LCDTicks;
          parentObj$$514.LCDTicks = v6748 - 456;
          var v6749 = parentObj$$514.STATTracker;
          var v2699 = v6749 != 3;
          if(v2699) {
            var v6750 = parentObj$$514.STATTracker;
            var v2696 = v6750 != 2;
            if(v2696) {
              var v9006 = parentObj$$514.STATTracker;
              var v6751 = v9006 == 0;
              if(v6751) {
                v6751 = parentObj$$514.mode2TriggerSTAT
              }
              var v2695 = v6751;
              if(v2695) {
                var v6752 = parentObj$$514.interruptsRequested;
                parentObj$$514.interruptsRequested = v6752 | 2
              }
              JAMScript.call(parentObj$$514.incrementScanLineQueue, parentObj$$514, [])
            }
            var v2697 = parentObj$$514.hdmaRunning;
            if(v2697) {
              JAMScript.call(parentObj$$514.executeHDMA, parentObj$$514, [])
            }
            var v2698 = parentObj$$514.mode0TriggerSTAT;
            if(v2698) {
              var v6753 = parentObj$$514.interruptsRequested;
              parentObj$$514.interruptsRequested = v6753 | 2
            }
          }
          var v6754 = parentObj$$514.memory;
          var v10029 = parentObj$$514.memory;
          var v9007 = v10029[65348];
          parentObj$$514.actualScanLine = v6754[65348] = v9007 + 1;
          var v6755 = parentObj$$514.actualScanLine;
          var v9008 = parentObj$$514.memory;
          var v6756 = v9008[65349];
          var v2703 = v6755 == v6756;
          if(v2703) {
            var v2700 = parentObj$$514.memory;
            var v9009 = v2700[65345];
            v2700[65345] = v9009 | 4;
            var v2701 = parentObj$$514.LYCMatchTriggerSTAT;
            if(v2701) {
              var v6757 = parentObj$$514.interruptsRequested;
              parentObj$$514.interruptsRequested = v6757 | 2
            }
          }else {
            var v2702 = parentObj$$514.memory;
            var v9010 = v2702[65345];
            v2702[65345] = v9010 & 123
          }
          JAMScript.call(parentObj$$514.checkIRQMatching, parentObj$$514, []);
          parentObj$$514.STATTracker = 0;
          parentObj$$514.modeSTAT = 2;
          var v2704 = parentObj$$514.LINECONTROL;
          var v2705 = parentObj$$514.actualScanLine;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11073 = [[parentObj$$514], v2704, v2704[v2705]]
          }
          JAMScript.call(v11073[2], v11073[1], v11073[0])
        }
      }
    }
    return
  }
  var line$$3 = 0;
  var v2716 = line$$3 < 154;
  for(;v2716;) {
    var v2715 = line$$3 < 143;
    if(v2715) {
      var v2709 = this.LINECONTROL;
      v2709[line$$3] = v663
    }else {
      var v2714 = line$$3 == 143;
      if(v2714) {
        var v2710 = this.LINECONTROL;
        v2710[143] = v664
      }else {
        var v2713 = line$$3 < 153;
        if(v2713) {
          var v2711 = this.LINECONTROL;
          v2711[line$$3] = v665
        }else {
          var v2712 = this.LINECONTROL;
          v2712[153] = v666
        }
      }
    }
    line$$3 = line$$3 + 1;
    v2716 = line$$3 < 154
  }
  return
}
function v662() {
  JAMScript.call(this.updateCore, this, []);
  var v6758 = this.emulatorTicks;
  var v6759 = this.CPUCyclesTotal;
  var v2717 = v6758 >= v6759;
  if(v2717) {
    JAMScript.call(this.iterationEndRoutine, this, [])
  }
  return
}
function v661() {
  var v6760 = this.LCDTicks;
  var v9011 = this.CPUTicks;
  var v9012 = this.doubleSpeedShifter;
  var v6761 = v9011 >> v9012;
  this.LCDTicks = v6760 + v6761;
  var v2718 = this.LCDCONTROL;
  var v2719 = this.actualScanLine;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11074 = [[this], v2718, v2718[v2719]]
  }
  JAMScript.call(v11074[2], v11074[1], v11074[0]);
  var v2720 = this.CPUTicks;
  var v2721 = this.doubleSpeedShifter;
  var timedTicks$$1 = v2720 >> v2721;
  var v6762 = this.audioTicks;
  this.audioTicks = v6762 + timedTicks$$1;
  var v6763 = this.emulatorTicks;
  this.emulatorTicks = v6763 + timedTicks$$1;
  var v6764 = this.DIVTicks;
  var v6765 = this.CPUTicks;
  this.DIVTicks = v6764 + v6765;
  var v2725 = this.TIMAEnabled;
  if(v2725) {
    var v6766 = this.timerTicks;
    var v6767 = this.CPUTicks;
    this.timerTicks = v6766 + v6767;
    var v6768 = this.timerTicks;
    var v6769 = this.TACClocker;
    var v2724 = v6768 >= v6769;
    for(;v2724;) {
      var v6770 = this.timerTicks;
      var v6771 = this.TACClocker;
      this.timerTicks = v6770 - v6771;
      var v10030 = this.memory;
      var v10659 = this.memory;
      var v10465 = v10659[65285];
      var v6772 = v10030[65285] = v10465 + 1;
      var v2723 = v6772 == 256;
      if(v2723) {
        var v2722 = this.memory;
        var v6773 = this.memory;
        v2722[65285] = v6773[65286];
        var v6774 = this.interruptsRequested;
        this.interruptsRequested = v6774 | 4;
        JAMScript.call(this.checkIRQMatching, this, [])
      }
      var v6775 = this.timerTicks;
      var v6776 = this.TACClocker;
      v2724 = v6775 >= v6776
    }
  }
  var v6777 = this.serialTimer;
  var v2729 = v6777 > 0;
  if(v2729) {
    var v6778 = this.serialTimer;
    var v6779 = this.CPUTicks;
    this.serialTimer = v6778 - v6779;
    var v6780 = this.serialTimer;
    var v2726 = v6780 <= 0;
    if(v2726) {
      var v6781 = this.interruptsRequested;
      this.interruptsRequested = v6781 | 8;
      JAMScript.call(this.checkIRQMatching, this, [])
    }
    var v6782 = this.serialShiftTimer;
    var v6783 = this.CPUTicks;
    this.serialShiftTimer = v6782 - v6783;
    var v6784 = this.serialShiftTimer;
    var v2728 = v6784 <= 0;
    if(v2728) {
      this.serialShiftTimer = this.serialShiftTimerAllocated;
      var v2727 = this.memory;
      var v10466 = this.memory;
      var v10031 = v10466[65281];
      var v9013 = v10031 << 1;
      var v6785 = v9013 & 254;
      v2727[65281] = v6785 | 1
    }
  }
  return
}
function v660() {
  var v9014 = this.memory;
  var v6786 = v9014[65348];
  var v9015 = this.memory;
  var v6787 = v9015[65349];
  var v2733 = v6786 == v6787;
  if(v2733) {
    var v2730 = this.memory;
    var v9016 = v2730[65345];
    v2730[65345] = v9016 | 4;
    var v2731 = this.LYCMatchTriggerSTAT;
    if(v2731) {
      var v6788 = this.interruptsRequested;
      this.interruptsRequested = v6788 | 2;
      JAMScript.call(this.checkIRQMatching, this, [])
    }
  }else {
    var v2732 = this.memory;
    var v9017 = v2732[65345];
    v2732[65345] = v9017 & 123
  }
  return
}
function v659(line$$2) {
  this.spriteCount = 252;
  var v6789 = this.cGBC;
  if(v6789) {
    v6789 = this.gfxSpriteShow
  }
  var v2738 = v6789;
  if(v2738) {
    var lineAdjusted = line$$2 + 16;
    var yoffset$$3 = 0;
    var v2734;
    var v6790 = this.gfxSpriteNormalHeight;
    if(v6790) {
      v2734 = 8
    }else {
      v2734 = 16
    }
    var yCap = v2734;
    var OAMAddress = 65024;
    var v6791 = OAMAddress < 65184;
    if(v6791) {
      var v9018 = this.spriteCount;
      v6791 = v9018 < 312
    }
    var v2737 = v6791;
    for(;v2737;) {
      var v6792 = this.memory;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v2735 = v6792[OAMAddress]
      }
      yoffset$$3 = lineAdjusted - v2735;
      var v6793 = yoffset$$3 > -1;
      if(v6793) {
        v6793 = yoffset$$3 < yCap
      }
      var v2736 = v6793;
      if(v2736) {
        var v6794 = this.spriteCount;
        this.spriteCount = v6794 + 6
      }
      OAMAddress = OAMAddress + 4;
      var v6795 = OAMAddress < 65184;
      if(v6795) {
        var v9019 = this.spriteCount;
        v6795 = v9019 < 312
      }
      v2737 = v6795
    }
  }
  return
}
function v658() {
  var v2746 = this.modeSTAT;
  switch(v2746) {
    case 0:
      var v6796 = this.actualScanLine;
      var v2740 = v6796 == 143;
      if(v2740) {
        JAMScript.call(this.updateSpriteCount, this, [0]);
        var v2739 = this.spriteCount;
        return v2739 + 5016
      }
      var v6797 = this.actualScanLine;
      var v2741 = v6797 + 1;
      JAMScript.call(this.updateSpriteCount, this, [v2741]);
      var v2742 = this.spriteCount;
      return v2742 + 456;
    case 2:
    ;
    case 3:
      var v2743 = this.actualScanLine;
      JAMScript.call(this.updateSpriteCount, this, [v2743]);
      return this.spriteCount;
    case 1:
      JAMScript.call(this.updateSpriteCount, this, [0]);
      var v2744 = this.spriteCount;
      var v9020 = this.actualScanLine;
      var v6798 = 154 - v9020;
      var v2745 = 456 * v6798;
      return v2744 + v2745
  }
  return
}
function v657() {
  var v9021 = this.memory;
  var v6799 = v9021[65349];
  var v2750 = v6799 != 0;
  if(v2750) {
    var v9022 = this.memory;
    var v6800 = v9022[65349];
    var v6801 = this.actualScanLine;
    var v2748 = v6800 > v6801;
    if(v2748) {
      var v9023 = this.memory;
      var v6802 = v9023[65349];
      var v6803 = this.actualScanLine;
      var v2747 = v6802 - v6803;
      return 456 * v2747
    }
    var v9024 = this.actualScanLine;
    var v6804 = 154 - v9024;
    var v9025 = this.memory;
    var v6805 = v9025[65349];
    var v2749 = v6804 + v6805;
    return 456 * v2749
  }
  var v9026;
  var v10660 = this.actualScanLine;
  var v10467 = v10660 == 153;
  if(v10467) {
    var v10723 = this.memory;
    var v10661 = v10723[65348];
    v10467 = v10661 == 0
  }
  var v10033 = v10467;
  if(v10033) {
    v9026 = 154
  }else {
    var v10032 = this.actualScanLine;
    v9026 = 153 - v10032
  }
  var v6806 = v9026;
  var v2751 = 456 * v6806;
  return v2751 + 8
}
function v656() {
  var v6807 = this.modeSTAT;
  var v2759 = v6807 != 0;
  if(v2759) {
    var v6808 = this.STATTracker;
    var v2755 = v6808 != 2;
    if(v2755) {
      var v6809 = this.STATTracker;
      var v2753 = v6809 == 0;
      if(v2753) {
        var v2752 = this.mode2TriggerSTAT;
        if(v2752) {
          var v6810 = this.interruptsRequested;
          this.interruptsRequested = v6810 | 2;
          JAMScript.call(this.checkIRQMatching, this, [])
        }
        this.modeSTAT = 3
      }
      JAMScript.call(this.incrementScanLineQueue, this, []);
      var v2754 = this.actualScanLine;
      JAMScript.call(this.updateSpriteCount, this, [v2754]);
      this.STATTracker = 2
    }
    var v6811 = this.LCDTicks;
    var v6812 = this.spriteCount;
    var v2758 = v6811 >= v6812;
    if(v2758) {
      var v2756 = this.hdmaRunning;
      if(v2756) {
        JAMScript.call(this.executeHDMA, this, [])
      }
      var v2757 = this.mode0TriggerSTAT;
      if(v2757) {
        var v6813 = this.interruptsRequested;
        this.interruptsRequested = v6813 | 2;
        JAMScript.call(this.checkIRQMatching, this, [])
      }
      this.STATTracker = 3;
      this.modeSTAT = 0
    }
  }
  return
}
function v655() {
  var v6814 = this.modeSTAT;
  var v2761 = v6814 != 3;
  if(v2761) {
    var v9027 = this.STATTracker;
    var v6815 = v9027 == 0;
    if(v6815) {
      v6815 = this.mode2TriggerSTAT
    }
    var v2760 = v6815;
    if(v2760) {
      var v6816 = this.interruptsRequested;
      this.interruptsRequested = v6816 | 2;
      JAMScript.call(this.checkIRQMatching, this, [])
    }
    this.STATTracker = 1;
    this.modeSTAT = 3
  }
  return
}
function v654() {
  var v6817 = this.STATTracker;
  var v2763 = v6817 != 1;
  if(v2763) {
    var v2762 = this.mode2TriggerSTAT;
    if(v2762) {
      var v6818 = this.interruptsRequested;
      this.interruptsRequested = v6818 | 2;
      JAMScript.call(this.checkIRQMatching, this, [])
    }
    this.STATTracker = 1;
    this.modeSTAT = 2
  }
  return
}
function v653() {
  var v2764 = this.CPUCyclesTotalCurrent;
  var endModulus = v2764 % 4;
  var v6819 = this.CPUCyclesTotalBase;
  var v6820 = this.CPUCyclesTotalCurrent;
  var v2765 = v6819 + v6820;
  this.CPUCyclesTotal = v2765 - endModulus;
  this.CPUCyclesTotalCurrent = endModulus;
  return
}
function v652() {
  this.CPUStopped = true;
  JAMScript.call(this.iterationEndRoutine, this, []);
  var v6821 = this.emulatorTicks;
  var v2766 = v6821 < 0;
  if(v2766) {
    var v6822 = this.audioTicks;
    var v6823 = this.emulatorTicks;
    this.audioTicks = v6822 - v6823;
    JAMScript.call(this.audioJIT, this, [])
  }
  return
}
function v651() {
  var v9028 = this.stopEmulator;
  var v6824 = v9028 & 1;
  var v2768 = v6824 == 0;
  if(v2768) {
    JAMScript.call(this.audioJIT, this, []);
    var v2767 = this.memory;
    var v10034 = this.memory;
    var v9029 = v10034[65284];
    var v10035 = this.DIVTicks;
    var v9030 = v10035 >> 8;
    var v6825 = v9029 + v9030;
    v2767[65284] = v6825 & 255;
    var v6826 = this.DIVTicks;
    this.DIVTicks = v6826 & 255;
    var v6827 = this.stopEmulator;
    this.stopEmulator = v6827 | 1;
    var v6828 = this.emulatorTicks;
    var v6829 = this.CPUCyclesTotal;
    this.emulatorTicks = v6828 - v6829;
    var v6830 = this.CPUCyclesTotalCurrent;
    var v6831 = this.CPUCyclesTotalRoundoff;
    this.CPUCyclesTotalCurrent = v6830 + v6831;
    JAMScript.call(this.recalculateIterationClockLimit, this, [])
  }
  return
}
function v650() {
  var opcodeToExecute = 0;
  var timedTicks = 0;
  var v6832 = this.stopEmulator;
  var v2793 = v6832 == 0;
  for(;v2793;) {
    var v2769 = this.IRQEnableDelay;
    switch(v2769) {
      case 1:
        this.IME = true;
        JAMScript.call(this.checkIRQMatching, this, []);
      case 2:
        var v6833 = this.IRQEnableDelay;
        this.IRQEnableDelay = v6833 - 1
    }
    var v6834 = this.IRQLineMatched;
    var v2770 = v6834 > 0;
    if(v2770) {
      JAMScript.call(this.launchIRQ, this, [])
    }
    var v2771 = this.memoryReader;
    var v2772 = this.programCounter;
    var v2773 = this.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11075 = [[this, v2773], v2771, v2771[v2772]]
    }
    opcodeToExecute = JAMScript.call(v11075[2], v11075[1], v11075[0]);
    var v6835 = this.programCounter;
    var v2774 = v6835 + 1;
    this.programCounter = v2774 & 65535;
    var v2776 = this.skipPCIncrement;
    if(v2776) {
      var v6836 = this.programCounter;
      var v2775 = v6836 - 1;
      this.programCounter = v2775 & 65535;
      this.skipPCIncrement = false
    }
    var v2777 = this.TICKTable;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      this.CPUTicks = v2777[opcodeToExecute]
    }
    var v2778 = this.OPCODE;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11076 = [[this], v2778, v2778[opcodeToExecute]]
    }
    JAMScript.call(v11076[2], v11076[1], v11076[0]);
    var v6837 = this.LCDTicks;
    var v9031 = this.CPUTicks;
    var v9032 = this.doubleSpeedShifter;
    var v6838 = v9031 >> v9032;
    this.LCDTicks = v6837 + v6838;
    var v2779 = this.LCDCONTROL;
    var v2780 = this.actualScanLine;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11077 = [[this], v2779, v2779[v2780]]
    }
    JAMScript.call(v11077[2], v11077[1], v11077[0]);
    var v2781 = this.CPUTicks;
    var v2782 = this.doubleSpeedShifter;
    timedTicks = v2781 >> v2782;
    var v6839 = this.audioTicks;
    this.audioTicks = v6839 + timedTicks;
    var v6840 = this.emulatorTicks;
    this.emulatorTicks = v6840 + timedTicks;
    var v6841 = this.DIVTicks;
    var v6842 = this.CPUTicks;
    this.DIVTicks = v6841 + v6842;
    var v2786 = this.TIMAEnabled;
    if(v2786) {
      var v6843 = this.timerTicks;
      var v6844 = this.CPUTicks;
      this.timerTicks = v6843 + v6844;
      var v6845 = this.timerTicks;
      var v6846 = this.TACClocker;
      var v2785 = v6845 >= v6846;
      for(;v2785;) {
        var v6847 = this.timerTicks;
        var v6848 = this.TACClocker;
        this.timerTicks = v6847 - v6848;
        var v10036 = this.memory;
        var v10662 = this.memory;
        var v10468 = v10662[65285];
        var v6849 = v10036[65285] = v10468 + 1;
        var v2784 = v6849 == 256;
        if(v2784) {
          var v2783 = this.memory;
          var v6850 = this.memory;
          v2783[65285] = v6850[65286];
          var v6851 = this.interruptsRequested;
          this.interruptsRequested = v6851 | 4;
          JAMScript.call(this.checkIRQMatching, this, [])
        }
        var v6852 = this.timerTicks;
        var v6853 = this.TACClocker;
        v2785 = v6852 >= v6853
      }
    }
    var v6854 = this.serialTimer;
    var v2790 = v6854 > 0;
    if(v2790) {
      var v6855 = this.serialTimer;
      var v6856 = this.CPUTicks;
      this.serialTimer = v6855 - v6856;
      var v6857 = this.serialTimer;
      var v2787 = v6857 <= 0;
      if(v2787) {
        var v6858 = this.interruptsRequested;
        this.interruptsRequested = v6858 | 8;
        JAMScript.call(this.checkIRQMatching, this, [])
      }
      var v6859 = this.serialShiftTimer;
      var v6860 = this.CPUTicks;
      this.serialShiftTimer = v6859 - v6860;
      var v6861 = this.serialShiftTimer;
      var v2789 = v6861 <= 0;
      if(v2789) {
        this.serialShiftTimer = this.serialShiftTimerAllocated;
        var v2788 = this.memory;
        var v10469 = this.memory;
        var v10037 = v10469[65281];
        var v9033 = v10037 << 1;
        var v6862 = v9033 & 254;
        v2788[65281] = v6862 | 1
      }
    }
    var v6863 = this.emulatorTicks;
    var v6864 = this.CPUCyclesTotal;
    var v2791 = v6863 >= v6864;
    if(v2791) {
      JAMScript.call(this.iterationEndRoutine, this, [])
    }
    var v6865 = this.instructions;
    this.instructions = v6865 + 1;
    var v6866 = this.instructions;
    var v6867 = this.totalInstructions;
    var v2792 = v6866 > v6867;
    if(v2792) {
      JAMScript.call(this.iterationEndRoutine, this, []);
      var v6868 = this.stopEmulator;
      this.stopEmulator = v6868 | 2;
      checkFinalState()
    }
    var v6869 = this.stopEmulator;
    v2793 = v6869 == 0
  }
  return
}
function v649() {
  var v9034 = this.stopEmulator;
  var v6870 = v9034 & 2;
  var v2798 = v6870 == 0;
  if(v2798) {
    var v9035 = this.stopEmulator;
    var v6871 = v9035 & 1;
    var v2797 = v6871 == 1;
    if(v2797) {
      var v6872 = this.CPUStopped;
      var v2796 = !v6872;
      if(v2796) {
        this.stopEmulator = 0;
        this.drewFrame = false;
        JAMScript.call(this.audioUnderrunAdjustment, this, []);
        JAMScript.call(this.clockUpdate, this, []);
        var v6873 = this.halt;
        var v2795 = !v6873;
        if(v2795) {
          JAMScript.call(this.executeIteration, this, [])
        }else {
          this.CPUTicks = 0;
          JAMScript.call(this.calculateHALTPeriod, this, []);
          var v2794 = this.halt;
          if(v2794) {
            JAMScript.call(this.updateCoreFull, this, [])
          }else {
            JAMScript.call(this.executeIteration, this, [])
          }
        }
        JAMScript.call(this.requestDraw, this, [])
      }else {
        JAMScript.call(this.audioUnderrunAdjustment, this, []);
        var v6874 = this.audioTicks;
        var v6875 = this.CPUCyclesTotal;
        this.audioTicks = v6874 + v6875;
        JAMScript.call(this.audioJIT, this, []);
        var v6876 = this.stopEmulator;
        this.stopEmulator = v6876 | 1
      }
    }else {
      cout("Iterator restarted a faulted core.", 2);
      pause()
    }
  }
  return
}
function v648() {
  var v2799 = this.noiseSampleTable;
  var v6877 = this.channel4currentVolume;
  var v6878 = this.channel4lastSampleLookup;
  var v2800 = v6877 | v6878;
  this.cachedChannel4Sample = v2799[v2800];
  JAMScript.call(this.channel4OutputLevelCache, this, []);
  return
}
function v647(address, data$$23) {
  var v2801 = this.channel3canPlay;
  if(v2801) {
    JAMScript.call(this.audioJIT, this, [])
  }
  var v2802 = this.memory;
  var v2803 = 65328 | address;
  v2802[v2803] = data$$23;
  address = address << 1;
  var v2804 = this.channel3PCM;
  JAMScript.set(v2804, address, data$$23 >> 4);
  var v2805 = this.channel3PCM;
  var v2806 = address | 1;
  v2805[v2806] = data$$23 & 15;
  return
}
function v646() {
  var v6879 = this.channel3PCM;
  var v6880 = this.channel3lastSampleLookup;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v2807 = v6879[v6880]
  }
  var v2808 = this.channel3patternType;
  this.cachedChannel3Sample = v2807 >> v2808;
  JAMScript.call(this.channel3OutputLevelCache, this, []);
  return
}
function v645() {
  var v10663 = this.channel1currentSampleLeftTrimary;
  var v10664 = this.channel2currentSampleLeftTrimary;
  var v10470 = v10663 + v10664;
  var v10471 = this.channel3currentSampleLeftSecondary;
  var v10038 = v10470 + v10471;
  var v10039 = this.channel4currentSampleLeftSecondary;
  var v9036 = v10038 + v10039;
  var v9037 = this.VinLeftChannelMasterVolume;
  var v6881 = v9036 * v9037;
  var v2809 = v6881 << 9;
  var v10472 = this.channel1currentSampleRightTrimary;
  var v10473 = this.channel2currentSampleRightTrimary;
  var v10040 = v10472 + v10473;
  var v10041 = this.channel3currentSampleRightSecondary;
  var v9038 = v10040 + v10041;
  var v9039 = this.channel4currentSampleRightSecondary;
  var v6882 = v9038 + v9039;
  var v6883 = this.VinRightChannelMasterVolume;
  var v2810 = v6882 * v6883;
  this.mixerOutputCache = v2809 + v2810;
  return
}
function v644() {
  var v2811 = this.channel4Enabled;
  if(v2811) {
    this.channel4currentSampleLeftSecondary = this.channel4currentSampleLeft;
    this.channel4currentSampleRightSecondary = this.channel4currentSampleRight
  }else {
    this.channel4currentSampleLeftSecondary = 0;
    this.channel4currentSampleRightSecondary = 0
  }
  JAMScript.call(this.mixerOutputLevelCache, this, []);
  return
}
function v643() {
  var v2812;
  var v6884 = this.leftChannel4;
  if(v6884) {
    v2812 = this.cachedChannel4Sample
  }else {
    v2812 = 0
  }
  this.channel4currentSampleLeft = v2812;
  var v2813;
  var v6885 = this.rightChannel4;
  if(v6885) {
    v2813 = this.cachedChannel4Sample
  }else {
    v2813 = 0
  }
  this.channel4currentSampleRight = v2813;
  JAMScript.call(this.channel4OutputLevelSecondaryCache, this, []);
  return
}
function v642() {
  var v6886 = this.memory;
  var v2814 = v6886[65313];
  this.channel4canPlay = v2814 > 7;
  JAMScript.call(this.channel4EnableCheck, this, []);
  JAMScript.call(this.channel4OutputLevelSecondaryCache, this, []);
  return
}
function v641() {
  var v6887 = this.channel4consecutive;
  var v9041 = !v6887;
  if(v9041) {
    var v9040 = this.channel4totalLength;
    v6887 = v9040 > 0
  }
  var v2815 = v6887;
  if(v2815) {
    v2815 = this.channel4canPlay
  }
  this.channel4Enabled = v2815;
  JAMScript.call(this.channel4OutputLevelSecondaryCache, this, []);
  return
}
function v640() {
  var v2816 = this.channel3Enabled;
  if(v2816) {
    this.channel3currentSampleLeftSecondary = this.channel3currentSampleLeft;
    this.channel3currentSampleRightSecondary = this.channel3currentSampleRight
  }else {
    this.channel3currentSampleLeftSecondary = 0;
    this.channel3currentSampleRightSecondary = 0
  }
  JAMScript.call(this.mixerOutputLevelCache, this, []);
  return
}
function v639() {
  var v2817;
  var v6888 = this.leftChannel3;
  if(v6888) {
    v2817 = this.cachedChannel3Sample
  }else {
    v2817 = 0
  }
  this.channel3currentSampleLeft = v2817;
  var v2818;
  var v6889 = this.rightChannel3;
  if(v6889) {
    v2818 = this.cachedChannel3Sample
  }else {
    v2818 = 0
  }
  this.channel3currentSampleRight = v2818;
  JAMScript.call(this.channel3OutputLevelSecondaryCache, this, []);
  return
}
function v638() {
  var v2819 = this.channel3consecutive;
  var v6891 = !v2819;
  if(v6891) {
    var v6890 = this.channel3totalLength;
    v2819 = v6890 > 0
  }
  this.channel3Enabled = v2819;
  JAMScript.call(this.channel3OutputLevelSecondaryCache, this, []);
  return
}
function v637() {
  var v6892 = this.channel2CachedDuty;
  var v6893 = this.channel2DutyTracker;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v2820 = v6892[v6893]
  }
  if(v2820) {
    this.channel2currentSampleLeftTrimary = this.channel2currentSampleLeftSecondary;
    this.channel2currentSampleRightTrimary = this.channel2currentSampleRightSecondary
  }else {
    this.channel2currentSampleLeftTrimary = 0;
    this.channel2currentSampleRightTrimary = 0
  }
  JAMScript.call(this.mixerOutputLevelCache, this, []);
  return
}
function v636() {
  var v2821 = this.channel2Enabled;
  if(v2821) {
    this.channel2currentSampleLeftSecondary = this.channel2currentSampleLeft;
    this.channel2currentSampleRightSecondary = this.channel2currentSampleRight
  }else {
    this.channel2currentSampleLeftSecondary = 0;
    this.channel2currentSampleRightSecondary = 0
  }
  JAMScript.call(this.channel2OutputLevelTrimaryCache, this, []);
  return
}
function v635() {
  var v2822;
  var v6894 = this.leftChannel2;
  if(v6894) {
    v2822 = this.channel2envelopeVolume
  }else {
    v2822 = 0
  }
  this.channel2currentSampleLeft = v2822;
  var v2823;
  var v6895 = this.rightChannel2;
  if(v6895) {
    v2823 = this.channel2envelopeVolume
  }else {
    v2823 = 0
  }
  this.channel2currentSampleRight = v2823;
  JAMScript.call(this.channel2OutputLevelSecondaryCache, this, []);
  return
}
function v634() {
  var v6896 = this.memory;
  var v2824 = v6896[65303];
  this.channel2canPlay = v2824 > 7;
  JAMScript.call(this.channel2EnableCheck, this, []);
  JAMScript.call(this.channel2OutputLevelSecondaryCache, this, []);
  return
}
function v633() {
  var v6897 = this.channel2consecutive;
  var v9043 = !v6897;
  if(v9043) {
    var v9042 = this.channel2totalLength;
    v6897 = v9042 > 0
  }
  var v2825 = v6897;
  if(v2825) {
    v2825 = this.channel2canPlay
  }
  this.channel2Enabled = v2825;
  JAMScript.call(this.channel2OutputLevelSecondaryCache, this, []);
  return
}
function v632() {
  var v6898 = this.channel1CachedDuty;
  var v6899 = this.channel1DutyTracker;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v2826 = v6898[v6899]
  }
  if(v2826) {
    this.channel1currentSampleLeftTrimary = this.channel1currentSampleLeftSecondary;
    this.channel1currentSampleRightTrimary = this.channel1currentSampleRightSecondary
  }else {
    this.channel1currentSampleLeftTrimary = 0;
    this.channel1currentSampleRightTrimary = 0
  }
  JAMScript.call(this.mixerOutputLevelCache, this, []);
  return
}
function v631() {
  var v2827 = this.channel1Enabled;
  if(v2827) {
    this.channel1currentSampleLeftSecondary = this.channel1currentSampleLeft;
    this.channel1currentSampleRightSecondary = this.channel1currentSampleRight
  }else {
    this.channel1currentSampleLeftSecondary = 0;
    this.channel1currentSampleRightSecondary = 0
  }
  JAMScript.call(this.channel1OutputLevelTrimaryCache, this, []);
  return
}
function v630() {
  var v2828;
  var v6900 = this.leftChannel1;
  if(v6900) {
    v2828 = this.channel1envelopeVolume
  }else {
    v2828 = 0
  }
  this.channel1currentSampleLeft = v2828;
  var v2829;
  var v6901 = this.rightChannel1;
  if(v6901) {
    v2829 = this.channel1envelopeVolume
  }else {
    v2829 = 0
  }
  this.channel1currentSampleRight = v2829;
  JAMScript.call(this.channel1OutputLevelSecondaryCache, this, []);
  return
}
function v629() {
  var v6902 = this.memory;
  var v2830 = v6902[65298];
  this.channel1canPlay = v2830 > 7;
  JAMScript.call(this.channel1EnableCheck, this, []);
  JAMScript.call(this.channel1OutputLevelSecondaryCache, this, []);
  return
}
function v628() {
  var v6903 = this.channel1consecutive;
  var v9045 = !v6903;
  if(v9045) {
    var v9044 = this.channel1totalLength;
    v6903 = v9044 > 0
  }
  var v2831 = v6903;
  if(v2831) {
    var v9046 = this.channel1SweepFault;
    var v6904 = !v9046;
    if(v6904) {
      v6904 = this.channel1canPlay
    }
    v2831 = v6904
  }
  this.channel1Enabled = v2831;
  JAMScript.call(this.channel1OutputLevelSecondaryCache, this, []);
  return
}
function v627() {
  var v10042 = this.channel1FrequencyCounter;
  var v6905 = this.channel1FrequencyCounter = v10042 - 1;
  var v2833 = v6905 == 0;
  if(v2833) {
    this.channel1FrequencyCounter = this.channel1FrequencyTracker;
    var v6906 = this.channel1DutyTracker;
    var v2832 = v6906 + 1;
    this.channel1DutyTracker = v2832 & 7;
    JAMScript.call(this.channel1OutputLevelTrimaryCache, this, [])
  }
  var v10043 = this.channel2FrequencyCounter;
  var v6907 = this.channel2FrequencyCounter = v10043 - 1;
  var v2835 = v6907 == 0;
  if(v2835) {
    this.channel2FrequencyCounter = this.channel2FrequencyTracker;
    var v6908 = this.channel2DutyTracker;
    var v2834 = v6908 + 1;
    this.channel2DutyTracker = v2834 & 7;
    JAMScript.call(this.channel2OutputLevelTrimaryCache, this, [])
  }
  var v10044 = this.channel3Counter;
  var v6909 = this.channel3Counter = v10044 - 1;
  var v2838 = v6909 == 0;
  if(v2838) {
    var v2837 = this.channel3canPlay;
    if(v2837) {
      var v6910 = this.channel3lastSampleLookup;
      var v2836 = v6910 + 1;
      this.channel3lastSampleLookup = v2836 & 31
    }
    this.channel3Counter = this.channel3FrequencyPeriod;
    JAMScript.call(this.channel3UpdateCache, this, [])
  }
  var v10045 = this.channel4Counter;
  var v6911 = this.channel4Counter = v10045 - 1;
  var v2841 = v6911 == 0;
  if(v2841) {
    var v6912 = this.channel4lastSampleLookup;
    var v2839 = v6912 + 1;
    var v2840 = this.channel4BitRange;
    this.channel4lastSampleLookup = v2839 & v2840;
    this.channel4Counter = this.channel4FrequencyPeriod;
    JAMScript.call(this.channel4UpdateCache, this, [])
  }
  return
}
function v626() {
  var v6913 = this.channel1envelopeSweepsLast;
  var v2846 = v6913 > -1;
  if(v2846) {
    var v6914 = this.channel1envelopeSweeps;
    var v2845 = v6914 > 0;
    if(v2845) {
      var v6915 = this.channel1envelopeSweeps;
      this.channel1envelopeSweeps = v6915 - 1
    }else {
      var v6916 = this.channel1envelopeType;
      var v2844 = !v6916;
      if(v2844) {
        var v6917 = this.channel1envelopeVolume;
        var v2842 = v6917 > 0;
        if(v2842) {
          var v6918 = this.channel1envelopeVolume;
          this.channel1envelopeVolume = v6918 - 1;
          this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
          JAMScript.call(this.channel1OutputLevelCache, this, [])
        }else {
          this.channel1envelopeSweepsLast = -1
        }
      }else {
        var v6919 = this.channel1envelopeVolume;
        var v2843 = v6919 < 15;
        if(v2843) {
          var v6920 = this.channel1envelopeVolume;
          this.channel1envelopeVolume = v6920 + 1;
          this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
          JAMScript.call(this.channel1OutputLevelCache, this, [])
        }else {
          this.channel1envelopeSweepsLast = -1
        }
      }
    }
  }
  var v6921 = this.channel2envelopeSweepsLast;
  var v2851 = v6921 > -1;
  if(v2851) {
    var v6922 = this.channel2envelopeSweeps;
    var v2850 = v6922 > 0;
    if(v2850) {
      var v6923 = this.channel2envelopeSweeps;
      this.channel2envelopeSweeps = v6923 - 1
    }else {
      var v6924 = this.channel2envelopeType;
      var v2849 = !v6924;
      if(v2849) {
        var v6925 = this.channel2envelopeVolume;
        var v2847 = v6925 > 0;
        if(v2847) {
          var v6926 = this.channel2envelopeVolume;
          this.channel2envelopeVolume = v6926 - 1;
          this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
          JAMScript.call(this.channel2OutputLevelCache, this, [])
        }else {
          this.channel2envelopeSweepsLast = -1
        }
      }else {
        var v6927 = this.channel2envelopeVolume;
        var v2848 = v6927 < 15;
        if(v2848) {
          var v6928 = this.channel2envelopeVolume;
          this.channel2envelopeVolume = v6928 + 1;
          this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
          JAMScript.call(this.channel2OutputLevelCache, this, [])
        }else {
          this.channel2envelopeSweepsLast = -1
        }
      }
    }
  }
  var v6929 = this.channel4envelopeSweepsLast;
  var v2860 = v6929 > -1;
  if(v2860) {
    var v6930 = this.channel4envelopeSweeps;
    var v2859 = v6930 > 0;
    if(v2859) {
      var v6931 = this.channel4envelopeSweeps;
      this.channel4envelopeSweeps = v6931 - 1
    }else {
      var v6932 = this.channel4envelopeType;
      var v2858 = !v6932;
      if(v2858) {
        var v6933 = this.channel4envelopeVolume;
        var v2854 = v6933 > 0;
        if(v2854) {
          var v9047 = this.channel4envelopeVolume;
          var v2852 = this.channel4envelopeVolume = v9047 - 1;
          var v2853 = this.channel4VolumeShifter;
          this.channel4currentVolume = v2852 << v2853;
          this.channel4envelopeSweeps = this.channel4envelopeSweepsLast;
          JAMScript.call(this.channel4UpdateCache, this, [])
        }else {
          this.channel4envelopeSweepsLast = -1
        }
      }else {
        var v6934 = this.channel4envelopeVolume;
        var v2857 = v6934 < 15;
        if(v2857) {
          var v9048 = this.channel4envelopeVolume;
          var v2855 = this.channel4envelopeVolume = v9048 + 1;
          var v2856 = this.channel4VolumeShifter;
          this.channel4currentVolume = v2855 << v2856;
          this.channel4envelopeSweeps = this.channel4envelopeSweepsLast;
          JAMScript.call(this.channel4UpdateCache, this, [])
        }else {
          this.channel4envelopeSweepsLast = -1
        }
      }
    }
  }
  return
}
function v625() {
  var v6935 = this.channel1lastTimeSweep;
  var v2871 = v6935 > 0;
  if(v2871) {
    var v6936 = this.channel1frequencySweepDivider;
    var v2870 = v6936 > 0;
    if(v2870) {
      var v6937 = this.channel1numSweep;
      var v2869 = v6937 > 0;
      if(v2869) {
        var v6938 = this.channel1numSweep;
        this.channel1numSweep = v6938 - 1;
        var v2868 = this.channel1decreaseSweep;
        if(v2868) {
          var v6939 = this.channel1ShadowFrequency;
          var v9049 = this.channel1ShadowFrequency;
          var v9050 = this.channel1frequencySweepDivider;
          var v6940 = v9049 >> v9050;
          this.channel1ShadowFrequency = v6939 - v6940;
          var v2861 = this.channel1ShadowFrequency;
          this.channel1frequency = v2861 & 2047;
          var v6941 = this.channel1frequency;
          var v2862 = 2048 - v6941;
          this.channel1FrequencyTracker = v2862 << 2
        }else {
          var v6942 = this.channel1ShadowFrequency;
          var v9051 = this.channel1ShadowFrequency;
          var v9052 = this.channel1frequencySweepDivider;
          var v6943 = v9051 >> v9052;
          this.channel1ShadowFrequency = v6942 + v6943;
          this.channel1frequency = this.channel1ShadowFrequency;
          var v6944 = this.channel1ShadowFrequency;
          var v2867 = v6944 <= 2047;
          if(v2867) {
            var v6945 = this.channel1frequency;
            var v2863 = 2048 - v6945;
            this.channel1FrequencyTracker = v2863 << 2;
            var v9053 = this.channel1ShadowFrequency;
            var v10046 = this.channel1ShadowFrequency;
            var v10047 = this.channel1frequencySweepDivider;
            var v9054 = v10046 >> v10047;
            var v6946 = v9053 + v9054;
            var v2865 = v6946 > 2047;
            if(v2865) {
              this.channel1SweepFault = true;
              JAMScript.call(this.channel1EnableCheck, this, []);
              var v2864 = this.memory;
              var v9055 = v2864[65318];
              v2864[65318] = v9055 & 254
            }
          }else {
            var v6947 = this.channel1frequency;
            this.channel1frequency = v6947 & 2047;
            this.channel1SweepFault = true;
            JAMScript.call(this.channel1EnableCheck, this, []);
            var v2866 = this.memory;
            var v9056 = v2866[65318];
            v2866[65318] = v9056 & 254
          }
        }
      }
      this.channel1timeSweep = this.channel1lastTimeSweep
    }else {
      this.channel1SweepFault = true;
      JAMScript.call(this.channel1EnableCheck, this, [])
    }
  }
  return
}
function v624() {
  var v9057 = this.channel1SweepFault;
  var v6948 = !v9057;
  if(v6948) {
    var v9058 = this.channel1timeSweep;
    v6948 = v9058 > 0
  }
  var v2873 = v6948;
  if(v2873) {
    var v10048 = this.channel1timeSweep;
    var v6949 = this.channel1timeSweep = v10048 - 1;
    var v2872 = v6949 == 0;
    if(v2872) {
      JAMScript.call(this.runAudioSweep, this, [])
    }
  }
  return
}
function v623() {
  var v6950 = this.channel1totalLength;
  var v2876 = v6950 > 1;
  if(v2876) {
    var v6951 = this.channel1totalLength;
    this.channel1totalLength = v6951 - 1
  }else {
    var v6952 = this.channel1totalLength;
    var v2875 = v6952 == 1;
    if(v2875) {
      this.channel1totalLength = 0;
      JAMScript.call(this.channel1EnableCheck, this, []);
      var v2874 = this.memory;
      var v9059 = v2874[65318];
      v2874[65318] = v9059 & 254
    }
  }
  var v6953 = this.channel2totalLength;
  var v2879 = v6953 > 1;
  if(v2879) {
    var v6954 = this.channel2totalLength;
    this.channel2totalLength = v6954 - 1
  }else {
    var v6955 = this.channel2totalLength;
    var v2878 = v6955 == 1;
    if(v2878) {
      this.channel2totalLength = 0;
      JAMScript.call(this.channel2EnableCheck, this, []);
      var v2877 = this.memory;
      var v9060 = v2877[65318];
      v2877[65318] = v9060 & 253
    }
  }
  var v6956 = this.channel3totalLength;
  var v2882 = v6956 > 1;
  if(v2882) {
    var v6957 = this.channel3totalLength;
    this.channel3totalLength = v6957 - 1
  }else {
    var v6958 = this.channel3totalLength;
    var v2881 = v6958 == 1;
    if(v2881) {
      this.channel3totalLength = 0;
      JAMScript.call(this.channel3EnableCheck, this, []);
      var v2880 = this.memory;
      var v9061 = v2880[65318];
      v2880[65318] = v9061 & 251
    }
  }
  var v6959 = this.channel4totalLength;
  var v2885 = v6959 > 1;
  if(v2885) {
    var v6960 = this.channel4totalLength;
    this.channel4totalLength = v6960 - 1
  }else {
    var v6961 = this.channel4totalLength;
    var v2884 = v6961 == 1;
    if(v2884) {
      this.channel4totalLength = 0;
      JAMScript.call(this.channel4EnableCheck, this, []);
      var v2883 = this.memory;
      var v9062 = v2883[65318];
      v2883[65318] = v9062 & 247
    }
  }
  return
}
function v622() {
  var v2886 = this.sequencePosition;
  var v9063 = this.sequencePosition;
  this.sequencePosition = v9063 + 1;
  switch(v2886) {
    case 0:
      JAMScript.call(this.clockAudioLength, this, []);
      break;
    case 2:
      JAMScript.call(this.clockAudioLength, this, []);
      JAMScript.call(this.clockAudioSweep, this, []);
      break;
    case 4:
      JAMScript.call(this.clockAudioLength, this, []);
      break;
    case 6:
      JAMScript.call(this.clockAudioLength, this, []);
      JAMScript.call(this.clockAudioSweep, this, []);
      break;
    case 7:
      JAMScript.call(this.clockAudioEnvelope, this, []);
      this.sequencePosition = 0
  }
  return
}
function v621() {
  var v2889 = settings[0];
  if(v2889) {
    var v2887 = this.audioTicks;
    JAMScript.call(this.generateAudio, this, [v2887])
  }else {
    var v2888 = this.audioTicks;
    JAMScript.call(this.generateAudioFake, this, [v2888])
  }
  this.audioTicks = 0;
  return
}
function v620(numSamples$$1) {
  var v6962 = this.soundMasterEnabled;
  if(v6962) {
    var v9064 = this.CPUStopped;
    v6962 = !v9064
  }
  var v2892 = v6962;
  if(v2892) {
    var v6963 = numSamples$$1 = numSamples$$1 - 1;
    var v2891 = v6963 > -1;
    for(;v2891;) {
      JAMScript.call(this.computeAudioChannels, this, []);
      var v10049 = this.sequencerClocks;
      var v6964 = this.sequencerClocks = v10049 - 1;
      var v2890 = v6964 == 0;
      if(v2890) {
        JAMScript.call(this.audioComputeSequencer, this, []);
        this.sequencerClocks = 8192
      }
      var v6965 = numSamples$$1 = numSamples$$1 - 1;
      v2891 = v6965 > -1
    }
  }
  return
}
function v619(numSamples) {
  var v6966 = this.soundMasterEnabled;
  if(v6966) {
    var v9065 = this.CPUStopped;
    v6966 = !v9065
  }
  var v2904 = v6966;
  if(v2904) {
    var samplesToGenerate = 0;
    var v2899 = numSamples > 0;
    for(;v2899;) {
      var v2893;
      var v9066 = this.sequencerClocks;
      var v6967 = numSamples < v9066;
      if(v6967) {
        v2893 = numSamples
      }else {
        v2893 = this.sequencerClocks
      }
      samplesToGenerate = v2893;
      var v6968 = this.sequencerClocks;
      this.sequencerClocks = v6968 - samplesToGenerate;
      numSamples = numSamples - samplesToGenerate;
      var v6969 = samplesToGenerate = samplesToGenerate - 1;
      var v2897 = v6969 > -1;
      for(;v2897;) {
        JAMScript.call(this.computeAudioChannels, this, []);
        var v2894 = this.currentBuffer;
        var v2895 = this.audioIndex;
        var v9067 = this.audioIndex;
        this.audioIndex = v9067 + 1;
        JAMScript.set(v2894, v2895, this.mixerOutputCache);
        var v6970 = this.audioIndex;
        var v6971 = this.numSamplesTotal;
        var v2896 = v6970 == v6971;
        if(v2896) {
          this.audioIndex = 0;
          JAMScript.call(this.outputAudio, this, [])
        }
        var v6972 = samplesToGenerate = samplesToGenerate - 1;
        v2897 = v6972 > -1
      }
      var v6973 = this.sequencerClocks;
      var v2898 = v6973 == 0;
      if(v2898) {
        JAMScript.call(this.audioComputeSequencer, this, []);
        this.sequencerClocks = 8192
      }
      v2899 = numSamples > 0
    }
  }else {
    var v6974 = numSamples = numSamples - 1;
    var v2903 = v6974 > -1;
    for(;v2903;) {
      var v2900 = this.currentBuffer;
      var v2901 = this.audioIndex;
      var v9068 = this.audioIndex;
      this.audioIndex = v9068 + 1;
      JAMScript.set(v2900, v2901, 61680);
      var v6975 = this.audioIndex;
      var v6976 = this.numSamplesTotal;
      var v2902 = v6975 == v6976;
      if(v2902) {
        this.audioIndex = 0;
        JAMScript.call(this.outputAudio, this, [])
      }
      var v6977 = numSamples = numSamples - 1;
      v2903 = v6977 > -1
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
  var v6978 = this.numSamplesTotal;
  var v2912 = sourcePosition < v6978;
  for(;v2912;) {
    sampleFactor = averageL = averageR = 0;
    var v2907 = sampleFactor < divisor1;
    for(;v2907;) {
      var v2905 = this.currentBuffer;
      var v2906 = sourcePosition;
      sourcePosition = sourcePosition + 1;
      dirtySample = v2905[v2906];
      var v6979 = dirtySample >> 9;
      averageL = averageL + v6979;
      var v6980 = dirtySample & 511;
      averageR = averageR + v6980;
      sampleFactor = sampleFactor + 1;
      v2907 = sampleFactor < divisor1
    }
    var v2908 = this.secondaryBuffer;
    var v2909 = destinationPosition;
    destinationPosition = destinationPosition + 1;
    var v6981 = averageL / divisor2;
    v2908[v2909] = v6981 - 1;
    var v2910 = this.secondaryBuffer;
    var v2911 = destinationPosition;
    destinationPosition = destinationPosition + 1;
    var v6982 = averageR / divisor2;
    v2910[v2911] = v6982 - 1;
    var v6983 = this.numSamplesTotal;
    v2912 = sourcePosition < v6983
  }
  var v2913 = this.audioHandle;
  var v2914 = this.secondaryBuffer;
  JAMScript.call(v2913.writeAudioNoCallback, v2913, [v2914]);
  return
}
function v617() {
  this.channel1FrequencyTracker = 8192;
  this.channel1DutyTracker = 0;
  var v2915 = this.dutyLookup;
  this.channel1CachedDuty = v2915[2];
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
  var v2916 = this.dutyLookup;
  this.channel2CachedDuty = v2916[2];
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
  JAMScript.call(this.channel1OutputLevelCache, this, []);
  JAMScript.call(this.channel2OutputLevelCache, this, []);
  JAMScript.call(this.channel3OutputLevelCache, this, []);
  JAMScript.call(this.channel4OutputLevelCache, this, []);
  return
}
function v616() {
  var v2920 = settings[0];
  if(v2920) {
    var v2917 = this.bufferContainAmount;
    var v6984 = this.audioHandle;
    var v2918 = JAMScript.call(v6984.remainingBuffer, v6984, []);
    var underrunAmount = v2917 - v2918;
    var v2919 = underrunAmount > 0;
    if(v2919) {
      var v6985 = this.CPUCyclesTotalCurrent;
      var v9069 = underrunAmount >> 1;
      var v9070 = this.machineOut;
      var v6986 = v9069 * v9070;
      this.CPUCyclesTotalCurrent = v6985 + v6986;
      JAMScript.call(this.recalculateIterationClockLimit, this, [])
    }
  }
  return
}
function v615() {
  var randomFactor = 1;
  var v10875 = JAMScript.call(this.getTypedArray, this, [524288, 0, "int8"]);
  this.LSFR15Table = v10875;
  var LSFR = 32767;
  var LSFRShifted = 16383;
  var index$$57 = 0;
  var v2953 = index$$57 < 32768;
  for(;v2953;) {
    var v2921 = LSFR & 1;
    randomFactor = 1 - v2921;
    var v2922 = this.LSFR15Table;
    var v2923 = 32768 | index$$57;
    v2922[v2923] = randomFactor;
    var v2924 = this.LSFR15Table;
    var v2925 = 65536 | index$$57;
    v2924[v2925] = randomFactor * 2;
    var v2926 = this.LSFR15Table;
    var v2927 = 98304 | index$$57;
    v2926[v2927] = randomFactor * 3;
    var v2928 = this.LSFR15Table;
    var v2929 = 131072 | index$$57;
    v2928[v2929] = randomFactor * 4;
    var v2930 = this.LSFR15Table;
    var v2931 = 163840 | index$$57;
    v2930[v2931] = randomFactor * 5;
    var v2932 = this.LSFR15Table;
    var v2933 = 196608 | index$$57;
    v2932[v2933] = randomFactor * 6;
    var v2934 = this.LSFR15Table;
    var v2935 = 229376 | index$$57;
    v2934[v2935] = randomFactor * 7;
    var v2936 = this.LSFR15Table;
    var v2937 = 262144 | index$$57;
    v2936[v2937] = randomFactor * 8;
    var v2938 = this.LSFR15Table;
    var v2939 = 294912 | index$$57;
    v2938[v2939] = randomFactor * 9;
    var v2940 = this.LSFR15Table;
    var v2941 = 327680 | index$$57;
    v2940[v2941] = randomFactor * 10;
    var v2942 = this.LSFR15Table;
    var v2943 = 360448 | index$$57;
    v2942[v2943] = randomFactor * 11;
    var v2944 = this.LSFR15Table;
    var v2945 = 393216 | index$$57;
    v2944[v2945] = randomFactor * 12;
    var v2946 = this.LSFR15Table;
    var v2947 = 425984 | index$$57;
    v2946[v2947] = randomFactor * 13;
    var v2948 = this.LSFR15Table;
    var v2949 = 458752 | index$$57;
    v2948[v2949] = randomFactor * 14;
    var v2950 = this.LSFR15Table;
    var v2951 = 491520 | index$$57;
    v2950[v2951] = randomFactor * 15;
    LSFRShifted = LSFR >> 1;
    var v9071 = LSFRShifted ^ LSFR;
    var v6987 = v9071 & 1;
    var v2952 = v6987 << 14;
    LSFR = LSFRShifted | v2952;
    index$$57 = index$$57 + 1;
    v2953 = index$$57 < 32768
  }
  var v10876 = JAMScript.call(this.getTypedArray, this, [2048, 0, "int8"]);
  this.LSFR7Table = v10876;
  LSFR = 127;
  index$$57 = 0;
  var v2986 = index$$57 < 128;
  for(;v2986;) {
    var v2954 = LSFR & 1;
    randomFactor = 1 - v2954;
    var v2955 = this.LSFR7Table;
    var v2956 = 128 | index$$57;
    v2955[v2956] = randomFactor;
    var v2957 = this.LSFR7Table;
    var v2958 = 256 | index$$57;
    v2957[v2958] = randomFactor * 2;
    var v2959 = this.LSFR7Table;
    var v2960 = 384 | index$$57;
    v2959[v2960] = randomFactor * 3;
    var v2961 = this.LSFR7Table;
    var v2962 = 512 | index$$57;
    v2961[v2962] = randomFactor * 4;
    var v2963 = this.LSFR7Table;
    var v2964 = 640 | index$$57;
    v2963[v2964] = randomFactor * 5;
    var v2965 = this.LSFR7Table;
    var v2966 = 768 | index$$57;
    v2965[v2966] = randomFactor * 6;
    var v2967 = this.LSFR7Table;
    var v2968 = 896 | index$$57;
    v2967[v2968] = randomFactor * 7;
    var v2969 = this.LSFR7Table;
    var v2970 = 1024 | index$$57;
    v2969[v2970] = randomFactor * 8;
    var v2971 = this.LSFR7Table;
    var v2972 = 1152 | index$$57;
    v2971[v2972] = randomFactor * 9;
    var v2973 = this.LSFR7Table;
    var v2974 = 1280 | index$$57;
    v2973[v2974] = randomFactor * 10;
    var v2975 = this.LSFR7Table;
    var v2976 = 1408 | index$$57;
    v2975[v2976] = randomFactor * 11;
    var v2977 = this.LSFR7Table;
    var v2978 = 1536 | index$$57;
    v2977[v2978] = randomFactor * 12;
    var v2979 = this.LSFR7Table;
    var v2980 = 1664 | index$$57;
    v2979[v2980] = randomFactor * 13;
    var v2981 = this.LSFR7Table;
    var v2982 = 1792 | index$$57;
    v2981[v2982] = randomFactor * 14;
    var v2983 = this.LSFR7Table;
    var v2984 = 1920 | index$$57;
    v2983[v2984] = randomFactor * 15;
    LSFRShifted = LSFR >> 1;
    var v9072 = LSFRShifted ^ LSFR;
    var v6988 = v9072 & 1;
    var v2985 = v6988 << 6;
    LSFR = LSFRShifted | v2985;
    index$$57 = index$$57 + 1;
    v2986 = index$$57 < 128
  }
  var v9073 = this.noiseSampleTable;
  var v6989 = !v9073;
  if(v6989) {
    var v10050 = this.memory;
    var v9074 = v10050.length;
    v6989 = v9074 == 65536
  }
  var v2988 = v6989;
  if(v2988) {
    var v2987;
    var v10474 = this.memory;
    var v10051 = v10474[65314];
    var v9075 = v10051 & 8;
    var v6990 = v9075 == 8;
    if(v6990) {
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
  var v10052 = this.sampleSize;
  var v10053 = settings[7];
  var v9076 = v10052 * v10053;
  var v9077 = settings[13];
  var v6991 = v9076 / v9077;
  var v2989 = Math.max(v6991, 4096);
  this.bufferContainAmount = v2989 << 1;
  var v6992 = this.sampleSize;
  var v9078 = this.sampleSize;
  var v9079 = settings[13];
  var v6993 = v9078 % v9079;
  var v2990 = v6992 - v6993;
  this.numSamplesTotal = v2990 | 0;
  var v2991 = this.numSamplesTotal;
  var v10877 = JAMScript.call(this.getTypedArray, this, [v2991, 61680, "int32"]);
  this.currentBuffer = v10877;
  var v9080 = this.numSamplesTotal;
  var v6994 = v9080 << 1;
  var v6995 = settings[13];
  var v2992 = v6994 / v6995;
  var v10878 = JAMScript.call(this.getTypedArray, this, [v2992, 0, "float32"]);
  this.secondaryBuffer = v10878;
  return
}
function v613() {
  var v6996 = settings[0];
  if(v6996) {
    v6996 = this.audioHandle
  }
  var v2995 = v6996;
  if(v2995) {
    try {
      var v2993 = this.audioHandle;
      var v2994 = settings[14];
      JAMScript.call(v2993.changeVolume, v2993, [v2994])
    }catch(error$$24) {
    }
  }
  return
}
function v612() {
  var v2996 = 4194304 / 1E3;
  var v2997 = settings[6];
  this.sampleSize = v2996 * v2997;
  this.machineOut = settings[13];
  var v3004 = settings[0];
  if(v3004) {
    try {
      var parentObj$$513 = this;
      var v6997 = settings[13];
      var v2998 = 4194304 / v6997;
      var v10475 = this.sampleSize;
      var v10476 = settings[8];
      var v10054 = v10475 * v10476;
      var v10055 = settings[13];
      var v9081 = v10054 / v10055;
      var v6998 = Math.max(v9081, 8192);
      var v2999 = v6998 << 1;
      var v3000 = settings[14];
      var v10879 = new XAudioServer(2, v2998, 0, v2999, null, v3000);
      this.audioHandle = v10879;
      JAMScript.call(this.initAudioBuffer, this, [])
    }catch(error$$22) {
      var v6999 = error$$22.message;
      var v3001 = "Audio system cannot run: " + v6999;
      cout(v3001, 2);
      settings[0] = false
    }
  }else {
    var v3003 = this.audioHandle;
    if(v3003) {
      try {
        var v3002 = this.audioHandle;
        JAMScript.call(v3002.changeVolume, v3002, [0])
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
    var v7000 = this.JoyPad;
    var v9082 = 1 << key$$14;
    var v7001 = 255 ^ v9082;
    this.JoyPad = v7000 & v7001;
    var v9083 = this.cGBC;
    var v7002 = !v9083;
    if(v7002) {
      var v10056 = this.usedBootROM;
      var v9084 = !v10056;
      var v10058 = !v9084;
      if(v10058) {
        var v10057 = this.usedGBCBootROM;
        v9084 = !v10057
      }
      v7002 = v9084
    }
    var v3005 = v7002;
    if(v3005) {
      var v7003 = this.interruptsRequested;
      this.interruptsRequested = v7003 | 16;
      this.remainingClocks = 0;
      JAMScript.call(this.checkIRQMatching, this, [])
    }
  }else {
    var v7004 = this.JoyPad;
    var v7005 = 1 << key$$14;
    this.JoyPad = v7004 | v7005
  }
  var v3006 = this.memory;
  var v10059 = this.memory;
  var v9085 = v10059[65280];
  var v7006 = v9085 & 48;
  var v10060;
  var v10756 = this.memory;
  var v10724 = v10756[65280];
  var v10665 = v10724 & 32;
  var v10478 = v10665 == 0;
  if(v10478) {
    var v10477 = this.JoyPad;
    v10060 = v10477 >> 4
  }else {
    v10060 = 15
  }
  var v9086 = v10060;
  var v10061;
  var v10757 = this.memory;
  var v10725 = v10757[65280];
  var v10666 = v10725 & 16;
  var v10480 = v10666 == 0;
  if(v10480) {
    var v10479 = this.JoyPad;
    v10061 = v10479 & 15
  }else {
    v10061 = 15
  }
  var v9087 = v10061;
  var v7007 = v9086 & v9087;
  v3006[65280] = v7006 + v7007;
  this.CPUStopped = false;
  return
}
function v609() {
  var v9088 = this.offscreenWidth;
  var v9089 = this.onscreenWidth;
  var v7008 = v9088 == v9089;
  if(v7008) {
    var v9090 = this.offscreenHeight;
    var v9091 = this.onscreenHeight;
    v7008 = v9090 == v9091
  }
  var v3015 = v7008;
  if(v3015) {
    var v3007 = this.drawContextOnscreen;
    var v3008 = this.canvasBuffer;
    JAMScript.call(v3007.putImageData, v3007, [v3008, 0, 0])
  }else {
    var v3009 = this.drawContextOffscreen;
    var v3010 = this.canvasBuffer;
    JAMScript.call(v3009.putImageData, v3009, [v3010, 0, 0]);
    var v3011 = this.drawContextOnscreen;
    var v3012 = this.canvasOffscreen;
    var v3013 = this.onscreenWidth;
    var v3014 = this.onscreenHeight;
    JAMScript.call(v3011.drawImage, v3011, [v3012, 0, 0, v3013, v3014])
  }
  return
}
function v608() {
  JAMScript.call(this.recomputeDimension, this, []);
  var v7009 = this.offscreenRGBCount;
  var v3016 = v7009 != 92160;
  if(v3016) {
    JAMScript.call(this.compileResizeFrameBufferFunction, this, [])
  }else {
    this.resizer = null
  }
  try {
    var v10880 = new GameBoyCanvas;
    this.canvasOffscreen = v10880;
    var v3017 = this.canvasOffscreen;
    v3017.width = this.offscreenWidth;
    var v3018 = this.canvasOffscreen;
    v3018.height = this.offscreenHeight;
    var v3019 = this.canvasOffscreen;
    var v10881 = JAMScript.call(v3019.getContext, v3019, ["2d"]);
    this.drawContextOffscreen = v10881;
    var v3020 = this.canvas;
    var v10882 = JAMScript.call(v3020.getContext, v3020, ["2d"]);
    this.drawContextOnscreen = v10882;
    try {
      var v3021 = this.drawContextOffscreen;
      var v3022 = this.offscreenWidth;
      var v3023 = this.offscreenHeight;
      var v10883 = JAMScript.call(v3021.createImageData, v3021, [v3022, v3023]);
      this.canvasBuffer = v10883
    }catch(error$$20) {
      var v9092 = error$$20.message;
      var v7010 = 'Falling back to the getImageData initialization (Error "' + v9092;
      var v3024 = v7010 + '").';
      cout(v3024, 1);
      var v3025 = this.drawContextOffscreen;
      var v3026 = this.offscreenWidth;
      var v3027 = this.offscreenHeight;
      var v10884 = v3025.getImageData(0, 0, v3026, v3027);
      this.canvasBuffer = v10884
    }
    var index$$56 = this.offscreenRGBCount;
    var v3036 = index$$56 > 0;
    for(;v3036;) {
      var v7011 = this.canvasBuffer;
      var v3028 = v7011.data;
      var v3029 = index$$56 = index$$56 - 4;
      v3028[v3029] = 248;
      var v7012 = this.canvasBuffer;
      var v3030 = v7012.data;
      var v3031 = index$$56 + 1;
      v3030[v3031] = 248;
      var v7013 = this.canvasBuffer;
      var v3032 = v7013.data;
      var v3033 = index$$56 + 2;
      v3032[v3033] = 248;
      var v7014 = this.canvasBuffer;
      var v3034 = v7014.data;
      var v3035 = index$$56 + 3;
      v3034[v3035] = 255;
      v3036 = index$$56 > 0
    }
    JAMScript.call(this.graphicsBlit, this, []);
    var v7015 = this.canvas;
    var v3037 = v7015.style;
    v3037.visibility = "visible";
    var v7016 = this.swizzledFrame;
    var v3038 = v7016 == null;
    if(v3038) {
      var v10885 = JAMScript.call(this.getTypedArray, this, [69120, 255, "uint8"]);
      this.swizzledFrame = v10885
    }
    this.drewFrame = true;
    JAMScript.call(this.requestDraw, this, [])
  }catch(error$$21) {
    var v10667 = error$$21.message;
    var v10481 = "HTML5 Canvas support required: " + v10667;
    var v10062 = v10481 + "file: ";
    var v10063 = error$$21.fileName;
    var v9093 = v10062 + v10063;
    var v7017 = v9093 + ", line: ";
    var v7018 = error$$21.lineNumber;
    var v3039 = v7017 + v7018;
    throw new Error(v3039);
  }
  return
}
function v607() {
  initNewCanvas();
  var v3040 = this.canvas;
  this.onscreenWidth = v3040.width;
  var v3041 = this.canvas;
  this.onscreenHeight = v3041.height;
  var v7019 = GameBoyWindow;
  if(v7019) {
    v7019 = GameBoyWindow.mozRequestAnimationFrame
  }
  var v3046 = v7019;
  if(v3046) {
    var v3042 = this.canvas;
    var v7020;
    var v10064 = settings[12];
    var v9095 = !v10064;
    if(v9095) {
      v7020 = 160
    }else {
      var v9094 = this.canvas;
      v7020 = v9094.width
    }
    v3042.width = this.onscreenWidth = v7020;
    var v3043 = this.canvas;
    var v7021;
    var v10065 = settings[12];
    var v9097 = !v10065;
    if(v9097) {
      v7021 = 144
    }else {
      var v9096 = this.canvas;
      v7021 = v9096.height
    }
    v3043.height = this.onscreenHeight = v7021
  }else {
    var v3044 = this.canvas;
    this.onscreenWidth = v3044.width;
    var v3045 = this.canvas;
    this.onscreenHeight = v3045.height
  }
  var v3047;
  var v9098 = settings[12];
  var v7023 = !v9098;
  if(v7023) {
    v3047 = 160
  }else {
    var v7022 = this.canvas;
    v3047 = v7022.width
  }
  this.offscreenWidth = v3047;
  var v3048;
  var v9099 = settings[12];
  var v7025 = !v9099;
  if(v7025) {
    v3048 = 144
  }else {
    var v7024 = this.canvas;
    v3048 = v7024.height
  }
  this.offscreenHeight = v3048;
  var v7026 = this.offscreenWidth;
  var v7027 = this.offscreenHeight;
  var v3049 = v7026 * v7027;
  this.offscreenRGBCount = v3049 * 4;
  return
}
function v606() {
  var v3050 = this.cMBC1;
  var v7029 = !v3050;
  if(v7029) {
    var v7028 = this.cMBC2;
    var v9101 = !v7028;
    if(v9101) {
      var v9100 = this.cMBC3;
      var v10067 = !v9100;
      if(v10067) {
        var v10066 = this.cMBC5;
        var v10483 = !v10066;
        if(v10483) {
          var v10482 = this.cMBC7;
          var v10668 = !v10482;
          if(v10668) {
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
  var v3054 = this.cMBC2;
  if(v3054) {
    this.numRAMBanks = 1 / 16
  }else {
    var v7030 = this.cMBC1;
    var v9103 = !v7030;
    if(v9103) {
      var v9102 = this.cRUMBLE;
      var v10069 = !v9102;
      if(v10069) {
        var v10068 = this.cMBC3;
        var v10484 = !v10068;
        if(v10484) {
          v10068 = this.cHuC3
        }
        v9102 = v10068
      }
      v7030 = v9102
    }
    var v3053 = v7030;
    if(v3053) {
      this.numRAMBanks = 4
    }else {
      var v3052 = this.cMBC5;
      if(v3052) {
        this.numRAMBanks = 16
      }else {
        var v3051 = this.cSRAM;
        if(v3051) {
          this.numRAMBanks = 1
        }
      }
    }
  }
  var v7031 = this.numRAMBanks;
  var v3059 = v7031 > 0;
  if(v3059) {
    var v7032 = JAMScript.call(this.MBCRAMUtilized, this, []);
    var v3055 = !v7032;
    if(v3055) {
      this.MBCRAMBanksEnabled = true
    }
    var v3056;
    var v10070 = this.openMBC;
    var v9104 = typeof v10070;
    var v7034 = v9104 == "function";
    if(v7034) {
      var v7033 = this.name;
      v3056 = JAMScript.call(this.openMBC, this, [v7033])
    }else {
      v3056 = []
    }
    var MBCRam = v3056;
    var v7035 = MBCRam.length;
    var v3058 = v7035 > 0;
    if(v3058) {
      var v10886 = JAMScript.call(this.toTypedArray, this, [MBCRam, "uint8"]);
      this.MBCRam = v10886
    }else {
      var v7036 = this.numRAMBanks;
      var v3057 = v7036 * 8192;
      var v10887 = JAMScript.call(this.getTypedArray, this, [v3057, 0, "uint8"]);
      this.MBCRam = v10887
    }
  }
  var v9105 = this.numRAMBanks;
  var v7037 = v9105 * 8192;
  var v3060 = "Actual bytes of MBC RAM allocated: " + v7037;
  cout(v3060, 0);
  JAMScript.call(this.returnFromRTCState, this, []);
  var v3061 = this.cGBC;
  if(v3061) {
    var v10888 = JAMScript.call(this.getTypedArray, this, [8192, 0, "uint8"]);
    this.VRAM = v10888;
    var v10889 = JAMScript.call(this.getTypedArray, this, [28672, 0, "uint8"]);
    this.GBCMemory = v10889
  }
  JAMScript.call(this.memoryReadJumpCompile, this, []);
  JAMScript.call(this.memoryWriteJumpCompile, this, []);
  return
}
function v604() {
  var v3062 = 524288 / 125;
  var v3063 = settings[6];
  this.baseCPUCyclesPerIteration = v3062 * v3063;
  var v3064 = this.baseCPUCyclesPerIteration;
  this.CPUCyclesTotalRoundoff = v3064 % 4;
  var v7038 = this.baseCPUCyclesPerIteration;
  var v7039 = this.CPUCyclesTotalRoundoff;
  var v3065 = v7038 - v7039;
  this.CPUCyclesTotalBase = this.CPUCyclesTotal = v3065 | 0;
  this.CPUCyclesTotalCurrent = 0;
  return
}
function v603() {
  var index$$55 = 0;
  var v3067 = index$$55 < 256;
  for(;v3067;) {
    var v3066 = this.memory;
    var v7040 = this.ROM;
    v3066[index$$55] = v7040[index$$55];
    index$$55 = index$$55 + 1;
    v3067 = index$$55 < 256
  }
  var v3071 = this.usedGBCBootROM;
  if(v3071) {
    index$$55 = 512;
    var v3069 = index$$55 < 2304;
    for(;v3069;) {
      var v3068 = this.memory;
      var v7041 = this.ROM;
      v3068[index$$55] = v7041[index$$55];
      index$$55 = index$$55 + 1;
      v3069 = index$$55 < 2304
    }
    var v7042 = this.cGBC;
    var v3070 = !v7042;
    if(v3070) {
      JAMScript.call(this.GBCtoGBModeAdjust, this, [])
    }else {
      JAMScript.call(this.recompileBootIOWriteHandling, this, [])
    }
  }else {
    JAMScript.call(this.recompileBootIOWriteHandling, this, [])
  }
  return
}
function v602() {
  var index$$54 = 308;
  var v3073 = index$$54 < 319;
  for(;v3073;) {
    var v9106 = this.ROMImage;
    var v7043 = v9106.charCodeAt(index$$54);
    var v3072 = v7043 > 0;
    if(v3072) {
      var v7044 = this.name;
      var v9107 = this.ROMImage;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
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
    var v9108 = this.ROMImage;
    var v7046 = v9108.charCodeAt(index$$54);
    var v3074 = v7046 > 0;
    if(v3074) {
      var v7047 = this.gameCode;
      var v9109 = this.ROMImage;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v7048 = v9109[index$$54]
      }
      this.gameCode = v7047 + v7048
    }
    index$$54 = index$$54 + 1;
    v3075 = index$$54 < 323
  }
  var v10726 = this.name;
  var v10669 = "Game Title: " + v10726;
  var v10485 = v10669 + "[";
  var v10486 = this.gameCode;
  var v10071 = v10485 + v10486;
  var v9110 = v10071 + "][";
  var v10072 = this.ROMImage;
  var v9111 = v10072[323];
  var v7049 = v9110 + v9111;
  var v3076 = v7049 + "]";
  cout(v3076, 0);
  var v7050 = this.gameCode;
  var v3077 = "Game Code: " + v7050;
  cout(v3077, 0);
  var v3078 = this.ROM;
  this.cartridgeType = v3078[327];
  var v7051 = this.cartridgeType;
  var v3079 = "Cartridge type #" + v7051;
  cout(v3079, 0);
  var MBCType = "";
  var v3081 = this.cartridgeType;
  switch(v3081) {
    case 0:
      var v7052 = settings[9];
      var v3080 = !v7052;
      if(v3080) {
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
  var v7053 = "Cartridge Type: " + MBCType;
  var v3082 = v7053 + ".";
  cout(v3082, 0);
  var v3083 = this.ROMBanks;
  var v7054 = this.ROM;
  var v3084 = v7054[328];
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    this.numROMBanks = v3083[v3084]
  }
  var v7055 = this.numROMBanks;
  var v3085 = v7055 + " ROM banks.";
  cout(v3085, 0);
  var v7056 = this.RAMBanks;
  var v9112 = this.ROM;
  var v7057 = v9112[329];
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
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
  var v7058 = this.usedBootROM;
  var v3091 = !v7058;
  if(v3091) {
    var v7059 = this.ROM;
    var v3090 = v7059[323];
    switch(v3090) {
      case 0:
        this.cGBC = false;
        cout("Only GB mode detected.", 0);
        break;
      case 50:
        var v9113 = settings[2];
        var v7060 = !v9113;
        if(v7060) {
          var v10487 = this.name;
          var v10488 = this.gameCode;
          var v10073 = v10487 + v10488;
          var v10489 = this.ROM;
          var v10074 = v10489[323];
          var v9114 = v10073 + v10074;
          v7060 = v9114 == "Game and Watch 50"
        }
        var v3087 = v7060;
        if(v3087) {
          this.cGBC = true;
          cout("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1)
        }else {
          this.cGBC = false
        }
        break;
      case 128:
        var v3088 = settings[2];
        this.cGBC = !v3088;
        cout("GB and GBC mode detected.", 0);
        break;
      case 192:
        this.cGBC = true;
        cout("Only GBC mode detected.", 0);
        break;
      default:
        this.cGBC = false;
        var v10075 = this.ROM;
        var v9115 = v10075[323];
        var v7061 = "Unknown GameBoy game type code #" + v9115;
        var v3089 = v7061 + ", defaulting to GB mode (Old games don't have a type code).";
        cout(v3089, 1)
    }
    this.inBootstrap = false;
    JAMScript.call(this.setupRAM, this, []);
    JAMScript.call(this.initSkipBootstrap, this, []);
    JAMScript.call(this.initializeAudioStartState, this, [])
  }else {
    this.cGBC = this.usedGBCBootROM;
    JAMScript.call(this.setupRAM, this, []);
    JAMScript.call(this.initBootstrap, this, [])
  }
  JAMScript.call(this.initializeModeSpecificArrays, this, []);
  var v3092 = this.ROM;
  var cOldLicense = v3092[331];
  var v9116 = this.ROM;
  var v7062 = v9116[324];
  var v3093 = v7062 & 65280;
  var v9117 = this.ROM;
  var v7063 = v9117[325];
  var v3094 = v7063 & 255;
  var cNewLicense = v3093 | v3094;
  var v3097 = cOldLicense != 51;
  if(v3097) {
    var v3095 = "Old style license code: " + cOldLicense;
    cout(v3095, 0)
  }else {
    var v3096 = "New style license code: " + cNewLicense;
    cout(v3096, 0)
  }
  this.ROMImage = "";
  return
}
function v601() {
  var v9118 = this.ROMImage;
  var v7064 = v9118.length;
  var v3099 = v7064 > 0;
  if(v3099) {
    var v3098 = this.ROMImage;
    return v3098.length
  }
  var v3100 = this.ROM;
  var length$$17 = v3100.length;
  var index$$53 = 0;
  var v3101 = index$$53 < length$$17;
  for(;v3101;) {
    var v7065 = this.ROMImage;
    var v10076 = this.ROM;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9119 = v10076[index$$53]
    }
    var v7066 = String.fromCharCode(v9119);
    this.ROMImage = v7065 + v7066;
    index$$53 = index$$53 + 1;
    v3101 = index$$53 < length$$17
  }
  return this.ROMImage
}
function v600() {
  this.ROM = [];
  this.usedBootROM = settings[1];
  var v3102 = this.ROMImage;
  var maxLength = v3102.length;
  var v3103 = maxLength < 16384;
  if(v3103) {
    throw new Error("ROM image size too small.");
  }
  var v10890 = JAMScript.call(this.getTypedArray, this, [maxLength, 0, "uint8"]);
  this.ROM = v10890;
  var romIndex = 0;
  var v3126 = this.usedBootROM;
  if(v3126) {
    var v7067 = settings[11];
    var v3119 = !v7067;
    if(v3119) {
      var v3107 = romIndex < 256;
      for(;v3107;) {
        var v3104 = this.memory;
        var v7068 = this.GBCBOOTROM;
        v3104[romIndex] = v7068[romIndex];
        var v3105 = this.ROM;
        var v3106 = romIndex;
        var v9120 = this.ROMImage;
        var v7069 = v9120.charCodeAt(romIndex);
        v3105[v3106] = v7069 & 255;
        romIndex = romIndex + 1;
        v3107 = romIndex < 256
      }
      var v3110 = romIndex < 512;
      for(;v3110;) {
        var v3108 = this.memory;
        var v3109 = romIndex;
        var v7070 = this.ROM;
        var v7071 = romIndex;
        var v10077 = this.ROMImage;
        var v9121 = v10077.charCodeAt(romIndex);
        v3108[v3109] = v7070[v7071] = v9121 & 255;
        romIndex = romIndex + 1;
        v3110 = romIndex < 512
      }
      var v3114 = romIndex < 2304;
      for(;v3114;) {
        var v3111 = this.memory;
        var v7072 = this.GBCBOOTROM;
        var v7073 = romIndex - 256;
        v3111[romIndex] = v7072[v7073];
        var v3112 = this.ROM;
        var v3113 = romIndex;
        var v9122 = this.ROMImage;
        var v7074 = v9122.charCodeAt(romIndex);
        v3112[v3113] = v7074 & 255;
        romIndex = romIndex + 1;
        v3114 = romIndex < 2304
      }
      this.usedGBCBootROM = true
    }else {
      var v3118 = romIndex < 256;
      for(;v3118;) {
        var v3115 = this.memory;
        var v7075 = this.GBBOOTROM;
        v3115[romIndex] = v7075[romIndex];
        var v3116 = this.ROM;
        var v3117 = romIndex;
        var v9123 = this.ROMImage;
        var v7076 = v9123.charCodeAt(romIndex);
        v3116[v3117] = v7076 & 255;
        romIndex = romIndex + 1;
        v3118 = romIndex < 256
      }
    }
    var v3122 = romIndex < 16384;
    for(;v3122;) {
      var v3120 = this.memory;
      var v3121 = romIndex;
      var v7077 = this.ROM;
      var v7078 = romIndex;
      var v10078 = this.ROMImage;
      var v9124 = v10078.charCodeAt(romIndex);
      v3120[v3121] = v7077[v7078] = v9124 & 255;
      romIndex = romIndex + 1;
      v3122 = romIndex < 16384
    }
  }else {
    var v3125 = romIndex < 16384;
    for(;v3125;) {
      var v3123 = this.memory;
      var v3124 = romIndex;
      var v7079 = this.ROM;
      var v7080 = romIndex;
      var v10079 = this.ROMImage;
      var v9125 = v10079.charCodeAt(romIndex);
      v3123[v3124] = v7079[v7080] = v9125 & 255;
      romIndex = romIndex + 1;
      v3125 = romIndex < 16384
    }
  }
  var v3129 = romIndex < maxLength;
  for(;v3129;) {
    var v3127 = this.ROM;
    var v3128 = romIndex;
    var v9126 = this.ROMImage;
    var v7081 = v9126.charCodeAt(romIndex);
    v3127[v3128] = v7081 & 255;
    romIndex = romIndex + 1;
    v3129 = romIndex < maxLength
  }
  var v9127 = this.ROM;
  var v7082 = v9127.length;
  var v3130 = v7082 / 16384;
  var v10891 = Math.floor(v3130);
  this.ROMBankEdge = v10891;
  JAMScript.call(this.interpretCartridge, this, []);
  JAMScript.call(this.checkIRQMatching, this, []);
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
  var v3131 = this.memory;
  v3131[65280] = 15;
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
    var v3138 = v7083;
    if(v3138) {
      var v3132 = 65280 | index$$52;
      var v7084 = this.ffxxDump;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v3133 = v7084[index$$52]
      }
      JAMScript.call(this.memoryWrite, this, [v3132, v3133])
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
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v3135 = v7085[index$$52]
          }
          JAMScript.call(this.memoryWrite, this, [v3134, v3135]);
          break;
        default:
          var v3136 = this.memory;
          var v3137 = 65280 | index$$52;
          var v7086 = this.ffxxDump;
          v3136[v3137] = v7086[index$$52]
      }
    }
    index$$52 = index$$52 - 1;
    v3139 = index$$52 >= 0
  }
  var v3146 = this.cGBC;
  if(v3146) {
    var v3140 = this.memory;
    v3140[65388] = 254;
    var v3141 = this.memory;
    v3141[65396] = 254
  }else {
    var v3142 = this.memory;
    v3142[65352] = 255;
    var v3143 = this.memory;
    v3143[65353] = 255;
    var v3144 = this.memory;
    v3144[65388] = 255;
    var v3145 = this.memory;
    v3145[65396] = 255
  }
  cout("Starting without the GBC boot ROM.", 0);
  var v3147;
  var v7087 = this.cGBC;
  if(v7087) {
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
  var v3148 = this.dutyLookup;
  this.channel1CachedDuty = v3148[2];
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
  var v3149 = this.dutyLookup;
  this.channel2CachedDuty = v3149[2];
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
    var v10892 = JAMScript.call(this.getTypedArray, this, [64, 0, "uint8"]);
    v3150[v3151] = v10892;
    v3152 = tileNumber < tileAmount
  }
  return tileArray
}
function v596() {
  var v10893 = JAMScript.call(this.getTypedArray, this, [65536, 0, "uint8"]);
  this.memory = v10893;
  var v10894 = JAMScript.call(this.getTypedArray, this, [23040, 16316664, "int32"]);
  this.frameBuffer = v10894;
  var v10895 = JAMScript.call(this.getTypedArray, this, [2048, 0, "uint8"]);
  this.BGCHRBank1 = v10895;
  var v3153 = this.TICKTable;
  var v10896 = JAMScript.call(this.toTypedArray, this, [v3153, "uint8"]);
  this.TICKTable = v10896;
  var v3154 = this.SecondaryTICKTable;
  var v10897 = JAMScript.call(this.toTypedArray, this, [v3154, "uint8"]);
  this.SecondaryTICKTable = v10897;
  var v10898 = JAMScript.call(this.getTypedArray, this, [32, 0, "int8"]);
  this.channel3PCM = v10898;
  return
}
function v595() {
  JAMScript.call(this.initMemory, this, []);
  JAMScript.call(this.ROMLoad, this, []);
  JAMScript.call(this.initLCD, this, []);
  JAMScript.call(this.initSound, this, []);
  JAMScript.call(this.run, this, []);
  return
}
function v594() {
  var v10080 = this.openRTC;
  var v9128 = typeof v10080;
  var v7088 = v9128 == "function";
  if(v7088) {
    v7088 = this.cTIMER
  }
  var v3168 = v7088;
  if(v3168) {
    var v3155 = this.name;
    var rtcData = JAMScript.call(this.openRTC, this, [v3155]);
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
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3169 = state$$1[v7089]
  }
  var v10899 = JAMScript.call(this.toTypedArray, this, [v3169, "uint8"]);
  this.ROM = v10899;
  var v9129 = this.ROM;
  var v7090 = v9129.length;
  var v3170 = v7090 / 16384;
  var v10900 = Math.floor(v3170);
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
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3189 = state$$1[v7091]
  }
  var v10901 = JAMScript.call(this.toTypedArray, this, [v3189, "uint8"]);
  this.memory = v10901;
  var v7092 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3190 = state$$1[v7092]
  }
  var v10902 = JAMScript.call(this.toTypedArray, this, [v3190, "uint8"]);
  this.MBCRam = v10902;
  var v7093 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3191 = state$$1[v7093]
  }
  var v10903 = JAMScript.call(this.toTypedArray, this, [v3191, "uint8"]);
  this.VRAM = v10903;
  var v3192 = index$$50;
  index$$50 = index$$50 + 1;
  this.currVRAMBank = state$$1[v3192];
  var v7094 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3193 = state$$1[v7094]
  }
  var v10904 = JAMScript.call(this.toTypedArray, this, [v3193, "uint8"]);
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
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3241 = state$$1[v7095]
  }
  var v10905 = JAMScript.call(this.toTypedArray, this, [v3241, "int32"]);
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
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3274 = state$$1[v7096]
  }
  var v10906 = JAMScript.call(this.toTypedArray, this, [v3274, "int8"]);
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
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3355 = state$$1[v7097]
  }
  var v10907 = JAMScript.call(this.toTypedArray, this, [v3355, "uint8"]);
  this.gbcOBJRawPalette = v10907;
  var v7098 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3356 = state$$1[v7098]
  }
  var v10908 = JAMScript.call(this.toTypedArray, this, [v3356, "uint8"]);
  this.gbcBGRawPalette = v10908;
  var v7099 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3357 = state$$1[v7099]
  }
  var v10909 = JAMScript.call(this.toTypedArray, this, [v3357, "int32"]);
  this.gbOBJPalette = v10909;
  var v7100 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3358 = state$$1[v7100]
  }
  var v10910 = JAMScript.call(this.toTypedArray, this, [v3358, "int32"]);
  this.gbBGPalette = v10910;
  var v7101 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3359 = state$$1[v7101]
  }
  var v10911 = JAMScript.call(this.toTypedArray, this, [v3359, "int32"]);
  this.gbcOBJPalette = v10911;
  var v7102 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3360 = state$$1[v7102]
  }
  var v10912 = JAMScript.call(this.toTypedArray, this, [v3360, "int32"]);
  this.gbcBGPalette = v10912;
  var v7103 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3361 = state$$1[v7103]
  }
  var v10913 = JAMScript.call(this.toTypedArray, this, [v3361, "int32"]);
  this.gbBGColorizedPalette = v10913;
  var v7104 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3362 = state$$1[v7104]
  }
  var v10914 = JAMScript.call(this.toTypedArray, this, [v3362, "int32"]);
  this.gbOBJColorizedPalette = v10914;
  var v7105 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3363 = state$$1[v7105]
  }
  var v10915 = JAMScript.call(this.toTypedArray, this, [v3363, "int32"]);
  this.cachedBGPaletteConversion = v10915;
  var v7106 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3364 = state$$1[v7106]
  }
  var v10916 = JAMScript.call(this.toTypedArray, this, [v3364, "int32"]);
  this.cachedOBJPaletteConversion = v10916;
  var v7107 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3365 = state$$1[v7107]
  }
  var v10917 = JAMScript.call(this.toTypedArray, this, [v3365, "uint8"]);
  this.BGCHRBank1 = v10917;
  var v7108 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3366 = state$$1[v7108]
  }
  var v10918 = JAMScript.call(this.toTypedArray, this, [v3366, "uint8"]);
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
  JAMScript.call(this.checkIRQMatching, this, []);
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
  var v3374 = this.TICKTable;
  var v10919 = JAMScript.call(this.toTypedArray, this, [v3374, "uint8"]);
  this.TICKTable = v10919;
  var v3375 = this.SecondaryTICKTable;
  var v10920 = JAMScript.call(this.toTypedArray, this, [v3375, "uint8"]);
  this.SecondaryTICKTable = v10920;
  JAMScript.call(this.initializeReferencesFromSaveState, this, []);
  JAMScript.call(this.memoryReadJumpCompile, this, []);
  JAMScript.call(this.memoryWriteJumpCompile, this, []);
  JAMScript.call(this.initLCD, this, []);
  JAMScript.call(this.initSound, this, []);
  var v3376;
  var v9130 = this.channel4BitRange;
  var v7109 = v9130 == 32767;
  if(v7109) {
    v3376 = this.LSFR15Table
  }else {
    v3376 = this.LSFR7Table
  }
  this.noiseSampleTable = v3376;
  var v3377;
  var v9131 = this.channel4BitRange;
  var v7110 = v9131 == 32767;
  if(v7110) {
    v3377 = 15
  }else {
    v3377 = 7
  }
  this.channel4VolumeShifter = v3377;
  return
}
function v592() {
  var v7111 = this.ROM;
  var v3378 = JAMScript.call(this.fromTypedArray, this, [v7111]);
  var v3379 = this.inBootstrap;
  var v3380 = this.registerA;
  var v3381 = this.FZero;
  var v3382 = this.FSubtract;
  var v3383 = this.FHalfCarry;
  var v3384 = this.FCarry;
  var v3385 = this.registerB;
  var v3386 = this.registerC;
  var v3387 = this.registerD;
  var v3388 = this.registerE;
  var v3389 = this.registersHL;
  var v3390 = this.stackPointer;
  var v3391 = this.programCounter;
  var v3392 = this.halt;
  var v3393 = this.IME;
  var v3394 = this.hdmaRunning;
  var v3395 = this.CPUTicks;
  var v3396 = this.doubleSpeedShifter;
  var v7112 = this.memory;
  var v3397 = JAMScript.call(this.fromTypedArray, this, [v7112]);
  var v7113 = this.MBCRam;
  var v3398 = JAMScript.call(this.fromTypedArray, this, [v7113]);
  var v7114 = this.VRAM;
  var v3399 = JAMScript.call(this.fromTypedArray, this, [v7114]);
  var v3400 = this.currVRAMBank;
  var v7115 = this.GBCMemory;
  var v3401 = JAMScript.call(this.fromTypedArray, this, [v7115]);
  var v3402 = this.MBC1Mode;
  var v3403 = this.MBCRAMBanksEnabled;
  var v3404 = this.currMBCRAMBank;
  var v3405 = this.currMBCRAMBankPosition;
  var v3406 = this.cGBC;
  var v3407 = this.gbcRamBank;
  var v3408 = this.gbcRamBankPosition;
  var v3409 = this.ROMBank1offs;
  var v3410 = this.currentROMBank;
  var v3411 = this.cartridgeType;
  var v3412 = this.name;
  var v3413 = this.gameCode;
  var v3414 = this.modeSTAT;
  var v3415 = this.LYCMatchTriggerSTAT;
  var v3416 = this.mode2TriggerSTAT;
  var v3417 = this.mode1TriggerSTAT;
  var v3418 = this.mode0TriggerSTAT;
  var v3419 = this.LCDisOn;
  var v3420 = this.gfxWindowCHRBankPosition;
  var v3421 = this.gfxWindowDisplay;
  var v3422 = this.gfxSpriteShow;
  var v3423 = this.gfxSpriteNormalHeight;
  var v3424 = this.gfxBackgroundCHRBankPosition;
  var v3425 = this.gfxBackgroundBankOffset;
  var v3426 = this.TIMAEnabled;
  var v3427 = this.DIVTicks;
  var v3428 = this.LCDTicks;
  var v3429 = this.timerTicks;
  var v3430 = this.TACClocker;
  var v3431 = this.serialTimer;
  var v3432 = this.serialShiftTimer;
  var v3433 = this.serialShiftTimerAllocated;
  var v3434 = this.IRQEnableDelay;
  var v3435 = this.lastIteration;
  var v3436 = this.cMBC1;
  var v3437 = this.cMBC2;
  var v3438 = this.cMBC3;
  var v3439 = this.cMBC5;
  var v3440 = this.cMBC7;
  var v3441 = this.cSRAM;
  var v3442 = this.cMMMO1;
  var v3443 = this.cRUMBLE;
  var v3444 = this.cCamera;
  var v3445 = this.cTAMA5;
  var v3446 = this.cHuC3;
  var v3447 = this.cHuC1;
  var v3448 = this.drewBlank;
  var v7116 = this.frameBuffer;
  var v3449 = JAMScript.call(this.fromTypedArray, this, [v7116]);
  var v3450 = this.bgEnabled;
  var v3451 = this.BGPriorityEnabled;
  var v3452 = this.channel1FrequencyTracker;
  var v3453 = this.channel1FrequencyCounter;
  var v3454 = this.channel1totalLength;
  var v3455 = this.channel1envelopeVolume;
  var v3456 = this.channel1envelopeType;
  var v3457 = this.channel1envelopeSweeps;
  var v3458 = this.channel1envelopeSweepsLast;
  var v3459 = this.channel1consecutive;
  var v3460 = this.channel1frequency;
  var v3461 = this.channel1SweepFault;
  var v3462 = this.channel1ShadowFrequency;
  var v3463 = this.channel1timeSweep;
  var v3464 = this.channel1lastTimeSweep;
  var v3465 = this.channel1numSweep;
  var v3466 = this.channel1frequencySweepDivider;
  var v3467 = this.channel1decreaseSweep;
  var v3468 = this.channel2FrequencyTracker;
  var v3469 = this.channel2FrequencyCounter;
  var v3470 = this.channel2totalLength;
  var v3471 = this.channel2envelopeVolume;
  var v3472 = this.channel2envelopeType;
  var v3473 = this.channel2envelopeSweeps;
  var v3474 = this.channel2envelopeSweepsLast;
  var v3475 = this.channel2consecutive;
  var v3476 = this.channel2frequency;
  var v3477 = this.channel3canPlay;
  var v3478 = this.channel3totalLength;
  var v3479 = this.channel3patternType;
  var v3480 = this.channel3frequency;
  var v3481 = this.channel3consecutive;
  var v7117 = this.channel3PCM;
  var v3482 = JAMScript.call(this.fromTypedArray, this, [v7117]);
  var v3483 = this.channel4FrequencyPeriod;
  var v3484 = this.channel4lastSampleLookup;
  var v3485 = this.channel4totalLength;
  var v3486 = this.channel4envelopeVolume;
  var v3487 = this.channel4currentVolume;
  var v3488 = this.channel4envelopeType;
  var v3489 = this.channel4envelopeSweeps;
  var v3490 = this.channel4envelopeSweepsLast;
  var v3491 = this.channel4consecutive;
  var v3492 = this.channel4BitRange;
  var v3493 = this.soundMasterEnabled;
  var v3494 = this.VinLeftChannelMasterVolume;
  var v3495 = this.VinRightChannelMasterVolume;
  var v3496 = this.leftChannel1;
  var v3497 = this.leftChannel2;
  var v3498 = this.leftChannel3;
  var v3499 = this.leftChannel4;
  var v3500 = this.rightChannel1;
  var v3501 = this.rightChannel2;
  var v3502 = this.rightChannel3;
  var v3503 = this.rightChannel4;
  var v3504 = this.channel1currentSampleLeft;
  var v3505 = this.channel1currentSampleRight;
  var v3506 = this.channel2currentSampleLeft;
  var v3507 = this.channel2currentSampleRight;
  var v3508 = this.channel3currentSampleLeft;
  var v3509 = this.channel3currentSampleRight;
  var v3510 = this.channel4currentSampleLeft;
  var v3511 = this.channel4currentSampleRight;
  var v3512 = this.channel1currentSampleLeftSecondary;
  var v3513 = this.channel1currentSampleRightSecondary;
  var v3514 = this.channel2currentSampleLeftSecondary;
  var v3515 = this.channel2currentSampleRightSecondary;
  var v3516 = this.channel3currentSampleLeftSecondary;
  var v3517 = this.channel3currentSampleRightSecondary;
  var v3518 = this.channel4currentSampleLeftSecondary;
  var v3519 = this.channel4currentSampleRightSecondary;
  var v3520 = this.channel1currentSampleLeftTrimary;
  var v3521 = this.channel1currentSampleRightTrimary;
  var v3522 = this.channel2currentSampleLeftTrimary;
  var v3523 = this.channel2currentSampleRightTrimary;
  var v3524 = this.mixerOutputCache;
  var v3525 = this.channel1DutyTracker;
  var v3526 = this.channel1CachedDuty;
  var v3527 = this.channel2DutyTracker;
  var v3528 = this.channel2CachedDuty;
  var v3529 = this.channel1Enabled;
  var v3530 = this.channel2Enabled;
  var v3531 = this.channel3Enabled;
  var v3532 = this.channel4Enabled;
  var v3533 = this.sequencerClocks;
  var v3534 = this.sequencePosition;
  var v3535 = this.channel3Counter;
  var v3536 = this.channel4Counter;
  var v3537 = this.cachedChannel3Sample;
  var v3538 = this.cachedChannel4Sample;
  var v3539 = this.channel3FrequencyPeriod;
  var v3540 = this.channel3lastSampleLookup;
  var v3541 = this.actualScanLine;
  var v3542 = this.lastUnrenderedLine;
  var v3543 = this.queuedScanLines;
  var v3544 = this.RTCisLatched;
  var v3545 = this.latchedSeconds;
  var v3546 = this.latchedMinutes;
  var v3547 = this.latchedHours;
  var v3548 = this.latchedLDays;
  var v3549 = this.latchedHDays;
  var v3550 = this.RTCSeconds;
  var v3551 = this.RTCMinutes;
  var v3552 = this.RTCHours;
  var v3553 = this.RTCDays;
  var v3554 = this.RTCDayOverFlow;
  var v3555 = this.RTCHALT;
  var v3556 = this.usedBootROM;
  var v3557 = this.skipPCIncrement;
  var v3558 = this.STATTracker;
  var v3559 = this.gbcRamBankPositionECHO;
  var v3560 = this.numRAMBanks;
  var v3561 = this.windowY;
  var v3562 = this.windowX;
  var v7118 = this.gbcOBJRawPalette;
  var v3563 = JAMScript.call(this.fromTypedArray, this, [v7118]);
  var v7119 = this.gbcBGRawPalette;
  var v3564 = JAMScript.call(this.fromTypedArray, this, [v7119]);
  var v7120 = this.gbOBJPalette;
  var v3565 = JAMScript.call(this.fromTypedArray, this, [v7120]);
  var v7121 = this.gbBGPalette;
  var v3566 = JAMScript.call(this.fromTypedArray, this, [v7121]);
  var v7122 = this.gbcOBJPalette;
  var v3567 = JAMScript.call(this.fromTypedArray, this, [v7122]);
  var v7123 = this.gbcBGPalette;
  var v3568 = JAMScript.call(this.fromTypedArray, this, [v7123]);
  var v7124 = this.gbBGColorizedPalette;
  var v3569 = JAMScript.call(this.fromTypedArray, this, [v7124]);
  var v7125 = this.gbOBJColorizedPalette;
  var v3570 = JAMScript.call(this.fromTypedArray, this, [v7125]);
  var v7126 = this.cachedBGPaletteConversion;
  var v3571 = JAMScript.call(this.fromTypedArray, this, [v7126]);
  var v7127 = this.cachedOBJPaletteConversion;
  var v3572 = JAMScript.call(this.fromTypedArray, this, [v7127]);
  var v7128 = this.BGCHRBank1;
  var v3573 = JAMScript.call(this.fromTypedArray, this, [v7128]);
  var v7129 = this.BGCHRBank2;
  var v3574 = JAMScript.call(this.fromTypedArray, this, [v7129]);
  var v3575 = this.haltPostClocks;
  var v3576 = this.interruptsRequested;
  var v3577 = this.interruptsEnabled;
  var v3578 = this.remainingClocks;
  var v3579 = this.colorizedGBPalettes;
  var v3580 = this.backgroundY;
  var v3581 = this.backgroundX;
  var v3582 = this.CPUStopped;
  return[v3378, v3379, v3380, v3381, v3382, v3383, v3384, v3385, v3386, v3387, v3388, v3389, v3390, v3391, v3392, v3393, v3394, v3395, v3396, v3397, v3398, v3399, v3400, v3401, v3402, v3403, v3404, v3405, v3406, v3407, v3408, v3409, v3410, v3411, v3412, v3413, v3414, v3415, v3416, v3417, v3418, v3419, v3420, v3421, v3422, v3423, v3424, v3425, v3426, v3427, v3428, v3429, v3430, v3431, v3432, v3433, v3434, v3435, v3436, v3437, v3438, v3439, v3440, v3441, v3442, v3443, v3444, v3445, v3446, v3447, v3448, 
  v3449, v3450, v3451, v3452, v3453, v3454, v3455, v3456, v3457, v3458, v3459, v3460, v3461, v3462, v3463, v3464, v3465, v3466, v3467, v3468, v3469, v3470, v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3482, v3483, v3484, v3485, v3486, v3487, v3488, v3489, v3490, v3491, v3492, v3493, v3494, v3495, v3496, v3497, v3498, v3499, v3500, v3501, v3502, v3503, v3504, v3505, v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3517, v3518, v3519, v3520, 
  v3521, v3522, v3523, v3524, v3525, v3526, v3527, v3528, v3529, v3530, v3531, v3532, v3533, v3534, v3535, v3536, v3537, v3538, v3539, v3540, v3541, v3542, v3543, v3544, v3545, v3546, v3547, v3548, v3549, v3550, v3551, v3552, v3553, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3565, v3566, v3567, v3568, v3569, v3570, v3571, v3572, v3573, v3574, v3575, v3576, v3577, v3578, v3579, v3580, v3581, v3582]
}
function v591() {
  var v7130 = this.cTIMER;
  var v3596 = !v7130;
  if(v3596) {
    return[]
  }else {
    var v3583 = this.lastIteration;
    var v3584 = this.RTCisLatched;
    var v3585 = this.latchedSeconds;
    var v3586 = this.latchedMinutes;
    var v3587 = this.latchedHours;
    var v3588 = this.latchedLDays;
    var v3589 = this.latchedHDays;
    var v3590 = this.RTCSeconds;
    var v3591 = this.RTCMinutes;
    var v3592 = this.RTCHours;
    var v3593 = this.RTCDays;
    var v3594 = this.RTCDayOverFlow;
    var v3595 = this.RTCHALT;
    return[v3583, v3584, v3585, v3586, v3587, v3588, v3589, v3590, v3591, v3592, v3593, v3594, v3595]
  }
  return
}
function v590() {
  var v9132 = this.cBATT;
  var v7131 = !v9132;
  var v9134 = !v7131;
  if(v9134) {
    var v10081 = this.MBCRam;
    var v9133 = v10081.length;
    v7131 = v9133 == 0
  }
  var v3598 = v7131;
  if(v3598) {
    return[]
  }else {
    var v3597 = this.MBCRam;
    return JAMScript.call(this.fromTypedArray, this, [v3597])
  }
  return
}
function v589(parentObj$$512) {
  var v7132 = parentObj$$512.registerA;
  parentObj$$512.registerA = v7132 | 128;
  return
}
function v588(parentObj$$511) {
  var v3599 = parentObj$$511.memoryWriter;
  var v3600 = parentObj$$511.registersHL;
  var v3601 = parentObj$$511.registersHL;
  var v9135 = parentObj$$511.memoryReader;
  var v9136 = parentObj$$511.registersHL;
  var v9137 = parentObj$$511.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11078 = [[parentObj$$511, v9137], v9135, v9135[v9136]]
  }
  var v7133 = JAMScript.call(v11078[2], v11078[1], v11078[0]);
  var v3602 = v7133 | 128;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11079 = [[parentObj$$511, v3601, v3602], v3599, v3599[v3600]]
  }
  JAMScript.call(v11079[2], v11079[1], v11079[0]);
  return
}
function v587(parentObj$$510) {
  var v7134 = parentObj$$510.registersHL;
  parentObj$$510.registersHL = v7134 | 128;
  return
}
function v586(parentObj$$509) {
  var v7135 = parentObj$$509.registersHL;
  parentObj$$509.registersHL = v7135 | 32768;
  return
}
function v585(parentObj$$508) {
  var v7136 = parentObj$$508.registerE;
  parentObj$$508.registerE = v7136 | 128;
  return
}
function v584(parentObj$$507) {
  var v7137 = parentObj$$507.registerD;
  parentObj$$507.registerD = v7137 | 128;
  return
}
function v583(parentObj$$506) {
  var v7138 = parentObj$$506.registerC;
  parentObj$$506.registerC = v7138 | 128;
  return
}
function v582(parentObj$$505) {
  var v7139 = parentObj$$505.registerB;
  parentObj$$505.registerB = v7139 | 128;
  return
}
function v581(parentObj$$504) {
  var v7140 = parentObj$$504.registerA;
  parentObj$$504.registerA = v7140 | 64;
  return
}
function v580(parentObj$$503) {
  var v3603 = parentObj$$503.memoryWriter;
  var v3604 = parentObj$$503.registersHL;
  var v3605 = parentObj$$503.registersHL;
  var v9138 = parentObj$$503.memoryReader;
  var v9139 = parentObj$$503.registersHL;
  var v9140 = parentObj$$503.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11080 = [[parentObj$$503, v9140], v9138, v9138[v9139]]
  }
  var v7141 = JAMScript.call(v11080[2], v11080[1], v11080[0]);
  var v3606 = v7141 | 64;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11081 = [[parentObj$$503, v3605, v3606], v3603, v3603[v3604]]
  }
  JAMScript.call(v11081[2], v11081[1], v11081[0]);
  return
}
function v579(parentObj$$502) {
  var v7142 = parentObj$$502.registersHL;
  parentObj$$502.registersHL = v7142 | 64;
  return
}
function v578(parentObj$$501) {
  var v7143 = parentObj$$501.registersHL;
  parentObj$$501.registersHL = v7143 | 16384;
  return
}
function v577(parentObj$$500) {
  var v7144 = parentObj$$500.registerE;
  parentObj$$500.registerE = v7144 | 64;
  return
}
function v576(parentObj$$499) {
  var v7145 = parentObj$$499.registerD;
  parentObj$$499.registerD = v7145 | 64;
  return
}
function v575(parentObj$$498) {
  var v7146 = parentObj$$498.registerC;
  parentObj$$498.registerC = v7146 | 64;
  return
}
function v574(parentObj$$497) {
  var v7147 = parentObj$$497.registerB;
  parentObj$$497.registerB = v7147 | 64;
  return
}
function v573(parentObj$$496) {
  var v7148 = parentObj$$496.registerA;
  parentObj$$496.registerA = v7148 | 32;
  return
}
function v572(parentObj$$495) {
  var v3607 = parentObj$$495.memoryWriter;
  var v3608 = parentObj$$495.registersHL;
  var v3609 = parentObj$$495.registersHL;
  var v9141 = parentObj$$495.memoryReader;
  var v9142 = parentObj$$495.registersHL;
  var v9143 = parentObj$$495.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11082 = [[parentObj$$495, v9143], v9141, v9141[v9142]]
  }
  var v7149 = JAMScript.call(v11082[2], v11082[1], v11082[0]);
  var v3610 = v7149 | 32;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11083 = [[parentObj$$495, v3609, v3610], v3607, v3607[v3608]]
  }
  JAMScript.call(v11083[2], v11083[1], v11083[0]);
  return
}
function v571(parentObj$$494) {
  var v7150 = parentObj$$494.registersHL;
  parentObj$$494.registersHL = v7150 | 32;
  return
}
function v570(parentObj$$493) {
  var v7151 = parentObj$$493.registersHL;
  parentObj$$493.registersHL = v7151 | 8192;
  return
}
function v569(parentObj$$492) {
  var v7152 = parentObj$$492.registerE;
  parentObj$$492.registerE = v7152 | 32;
  return
}
function v568(parentObj$$491) {
  var v7153 = parentObj$$491.registerD;
  parentObj$$491.registerD = v7153 | 32;
  return
}
function v567(parentObj$$490) {
  var v7154 = parentObj$$490.registerC;
  parentObj$$490.registerC = v7154 | 32;
  return
}
function v566(parentObj$$489) {
  var v7155 = parentObj$$489.registerB;
  parentObj$$489.registerB = v7155 | 32;
  return
}
function v565(parentObj$$488) {
  var v7156 = parentObj$$488.registerA;
  parentObj$$488.registerA = v7156 | 16;
  return
}
function v564(parentObj$$487) {
  var v3611 = parentObj$$487.memoryWriter;
  var v3612 = parentObj$$487.registersHL;
  var v3613 = parentObj$$487.registersHL;
  var v9144 = parentObj$$487.memoryReader;
  var v9145 = parentObj$$487.registersHL;
  var v9146 = parentObj$$487.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11084 = [[parentObj$$487, v9146], v9144, v9144[v9145]]
  }
  var v7157 = JAMScript.call(v11084[2], v11084[1], v11084[0]);
  var v3614 = v7157 | 16;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11085 = [[parentObj$$487, v3613, v3614], v3611, v3611[v3612]]
  }
  JAMScript.call(v11085[2], v11085[1], v11085[0]);
  return
}
function v563(parentObj$$486) {
  var v7158 = parentObj$$486.registersHL;
  parentObj$$486.registersHL = v7158 | 16;
  return
}
function v562(parentObj$$485) {
  var v7159 = parentObj$$485.registersHL;
  parentObj$$485.registersHL = v7159 | 4096;
  return
}
function v561(parentObj$$484) {
  var v7160 = parentObj$$484.registerE;
  parentObj$$484.registerE = v7160 | 16;
  return
}
function v560(parentObj$$483) {
  var v7161 = parentObj$$483.registerD;
  parentObj$$483.registerD = v7161 | 16;
  return
}
function v559(parentObj$$482) {
  var v7162 = parentObj$$482.registerC;
  parentObj$$482.registerC = v7162 | 16;
  return
}
function v558(parentObj$$481) {
  var v7163 = parentObj$$481.registerB;
  parentObj$$481.registerB = v7163 | 16;
  return
}
function v557(parentObj$$480) {
  var v7164 = parentObj$$480.registerA;
  parentObj$$480.registerA = v7164 | 8;
  return
}
function v556(parentObj$$479) {
  var v3615 = parentObj$$479.memoryWriter;
  var v3616 = parentObj$$479.registersHL;
  var v3617 = parentObj$$479.registersHL;
  var v9147 = parentObj$$479.memoryReader;
  var v9148 = parentObj$$479.registersHL;
  var v9149 = parentObj$$479.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11086 = [[parentObj$$479, v9149], v9147, v9147[v9148]]
  }
  var v7165 = JAMScript.call(v11086[2], v11086[1], v11086[0]);
  var v3618 = v7165 | 8;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11087 = [[parentObj$$479, v3617, v3618], v3615, v3615[v3616]]
  }
  JAMScript.call(v11087[2], v11087[1], v11087[0]);
  return
}
function v555(parentObj$$478) {
  var v7166 = parentObj$$478.registersHL;
  parentObj$$478.registersHL = v7166 | 8;
  return
}
function v554(parentObj$$477) {
  var v7167 = parentObj$$477.registersHL;
  parentObj$$477.registersHL = v7167 | 2048;
  return
}
function v553(parentObj$$476) {
  var v7168 = parentObj$$476.registerE;
  parentObj$$476.registerE = v7168 | 8;
  return
}
function v552(parentObj$$475) {
  var v7169 = parentObj$$475.registerD;
  parentObj$$475.registerD = v7169 | 8;
  return
}
function v551(parentObj$$474) {
  var v7170 = parentObj$$474.registerC;
  parentObj$$474.registerC = v7170 | 8;
  return
}
function v550(parentObj$$473) {
  var v7171 = parentObj$$473.registerB;
  parentObj$$473.registerB = v7171 | 8;
  return
}
function v549(parentObj$$472) {
  var v7172 = parentObj$$472.registerA;
  parentObj$$472.registerA = v7172 | 4;
  return
}
function v548(parentObj$$471) {
  var v3619 = parentObj$$471.memoryWriter;
  var v3620 = parentObj$$471.registersHL;
  var v3621 = parentObj$$471.registersHL;
  var v9150 = parentObj$$471.memoryReader;
  var v9151 = parentObj$$471.registersHL;
  var v9152 = parentObj$$471.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11088 = [[parentObj$$471, v9152], v9150, v9150[v9151]]
  }
  var v7173 = JAMScript.call(v11088[2], v11088[1], v11088[0]);
  var v3622 = v7173 | 4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11089 = [[parentObj$$471, v3621, v3622], v3619, v3619[v3620]]
  }
  JAMScript.call(v11089[2], v11089[1], v11089[0]);
  return
}
function v547(parentObj$$470) {
  var v7174 = parentObj$$470.registersHL;
  parentObj$$470.registersHL = v7174 | 4;
  return
}
function v546(parentObj$$469) {
  var v7175 = parentObj$$469.registersHL;
  parentObj$$469.registersHL = v7175 | 1024;
  return
}
function v545(parentObj$$468) {
  var v7176 = parentObj$$468.registerE;
  parentObj$$468.registerE = v7176 | 4;
  return
}
function v544(parentObj$$467) {
  var v7177 = parentObj$$467.registerD;
  parentObj$$467.registerD = v7177 | 4;
  return
}
function v543(parentObj$$466) {
  var v7178 = parentObj$$466.registerC;
  parentObj$$466.registerC = v7178 | 4;
  return
}
function v542(parentObj$$465) {
  var v7179 = parentObj$$465.registerB;
  parentObj$$465.registerB = v7179 | 4;
  return
}
function v541(parentObj$$464) {
  var v7180 = parentObj$$464.registerA;
  parentObj$$464.registerA = v7180 | 2;
  return
}
function v540(parentObj$$463) {
  var v3623 = parentObj$$463.memoryWriter;
  var v3624 = parentObj$$463.registersHL;
  var v3625 = parentObj$$463.registersHL;
  var v9153 = parentObj$$463.memoryReader;
  var v9154 = parentObj$$463.registersHL;
  var v9155 = parentObj$$463.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11090 = [[parentObj$$463, v9155], v9153, v9153[v9154]]
  }
  var v7181 = JAMScript.call(v11090[2], v11090[1], v11090[0]);
  var v3626 = v7181 | 2;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11091 = [[parentObj$$463, v3625, v3626], v3623, v3623[v3624]]
  }
  JAMScript.call(v11091[2], v11091[1], v11091[0]);
  return
}
function v539(parentObj$$462) {
  var v7182 = parentObj$$462.registersHL;
  parentObj$$462.registersHL = v7182 | 2;
  return
}
function v538(parentObj$$461) {
  var v7183 = parentObj$$461.registersHL;
  parentObj$$461.registersHL = v7183 | 512;
  return
}
function v537(parentObj$$460) {
  var v7184 = parentObj$$460.registerE;
  parentObj$$460.registerE = v7184 | 2;
  return
}
function v536(parentObj$$459) {
  var v7185 = parentObj$$459.registerD;
  parentObj$$459.registerD = v7185 | 2;
  return
}
function v535(parentObj$$458) {
  var v7186 = parentObj$$458.registerC;
  parentObj$$458.registerC = v7186 | 2;
  return
}
function v534(parentObj$$457) {
  var v7187 = parentObj$$457.registerB;
  parentObj$$457.registerB = v7187 | 2;
  return
}
function v533(parentObj$$456) {
  var v7188 = parentObj$$456.registerA;
  parentObj$$456.registerA = v7188 | 1;
  return
}
function v532(parentObj$$455) {
  var v3627 = parentObj$$455.memoryWriter;
  var v3628 = parentObj$$455.registersHL;
  var v3629 = parentObj$$455.registersHL;
  var v9156 = parentObj$$455.memoryReader;
  var v9157 = parentObj$$455.registersHL;
  var v9158 = parentObj$$455.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11092 = [[parentObj$$455, v9158], v9156, v9156[v9157]]
  }
  var v7189 = JAMScript.call(v11092[2], v11092[1], v11092[0]);
  var v3630 = v7189 | 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11093 = [[parentObj$$455, v3629, v3630], v3627, v3627[v3628]]
  }
  JAMScript.call(v11093[2], v11093[1], v11093[0]);
  return
}
function v531(parentObj$$454) {
  var v7190 = parentObj$$454.registersHL;
  parentObj$$454.registersHL = v7190 | 1;
  return
}
function v530(parentObj$$453) {
  var v7191 = parentObj$$453.registersHL;
  parentObj$$453.registersHL = v7191 | 256;
  return
}
function v529(parentObj$$452) {
  var v7192 = parentObj$$452.registerE;
  parentObj$$452.registerE = v7192 | 1;
  return
}
function v528(parentObj$$451) {
  var v7193 = parentObj$$451.registerD;
  parentObj$$451.registerD = v7193 | 1;
  return
}
function v527(parentObj$$450) {
  var v7194 = parentObj$$450.registerC;
  parentObj$$450.registerC = v7194 | 1;
  return
}
function v526(parentObj$$449) {
  var v7195 = parentObj$$449.registerB;
  parentObj$$449.registerB = v7195 | 1;
  return
}
function v525(parentObj$$448) {
  var v7196 = parentObj$$448.registerA;
  parentObj$$448.registerA = v7196 & 127;
  return
}
function v524(parentObj$$447) {
  var v3631 = parentObj$$447.memoryWriter;
  var v3632 = parentObj$$447.registersHL;
  var v3633 = parentObj$$447.registersHL;
  var v9159 = parentObj$$447.memoryReader;
  var v9160 = parentObj$$447.registersHL;
  var v9161 = parentObj$$447.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11094 = [[parentObj$$447, v9161], v9159, v9159[v9160]]
  }
  var v7197 = JAMScript.call(v11094[2], v11094[1], v11094[0]);
  var v3634 = v7197 & 127;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11095 = [[parentObj$$447, v3633, v3634], v3631, v3631[v3632]]
  }
  JAMScript.call(v11095[2], v11095[1], v11095[0]);
  return
}
function v523(parentObj$$446) {
  var v7198 = parentObj$$446.registersHL;
  parentObj$$446.registersHL = v7198 & 65407;
  return
}
function v522(parentObj$$445) {
  var v7199 = parentObj$$445.registersHL;
  parentObj$$445.registersHL = v7199 & 32767;
  return
}
function v521(parentObj$$444) {
  var v7200 = parentObj$$444.registerE;
  parentObj$$444.registerE = v7200 & 127;
  return
}
function v520(parentObj$$443) {
  var v7201 = parentObj$$443.registerD;
  parentObj$$443.registerD = v7201 & 127;
  return
}
function v519(parentObj$$442) {
  var v7202 = parentObj$$442.registerC;
  parentObj$$442.registerC = v7202 & 127;
  return
}
function v518(parentObj$$441) {
  var v7203 = parentObj$$441.registerB;
  parentObj$$441.registerB = v7203 & 127;
  return
}
function v517(parentObj$$440) {
  var v7204 = parentObj$$440.registerA;
  parentObj$$440.registerA = v7204 & 191;
  return
}
function v516(parentObj$$439) {
  var v3635 = parentObj$$439.memoryWriter;
  var v3636 = parentObj$$439.registersHL;
  var v3637 = parentObj$$439.registersHL;
  var v9162 = parentObj$$439.memoryReader;
  var v9163 = parentObj$$439.registersHL;
  var v9164 = parentObj$$439.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11096 = [[parentObj$$439, v9164], v9162, v9162[v9163]]
  }
  var v7205 = JAMScript.call(v11096[2], v11096[1], v11096[0]);
  var v3638 = v7205 & 191;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11097 = [[parentObj$$439, v3637, v3638], v3635, v3635[v3636]]
  }
  JAMScript.call(v11097[2], v11097[1], v11097[0]);
  return
}
function v515(parentObj$$438) {
  var v7206 = parentObj$$438.registersHL;
  parentObj$$438.registersHL = v7206 & 65471;
  return
}
function v514(parentObj$$437) {
  var v7207 = parentObj$$437.registersHL;
  parentObj$$437.registersHL = v7207 & 49151;
  return
}
function v513(parentObj$$436) {
  var v7208 = parentObj$$436.registerE;
  parentObj$$436.registerE = v7208 & 191;
  return
}
function v512(parentObj$$435) {
  var v7209 = parentObj$$435.registerD;
  parentObj$$435.registerD = v7209 & 191;
  return
}
function v511(parentObj$$434) {
  var v7210 = parentObj$$434.registerC;
  parentObj$$434.registerC = v7210 & 191;
  return
}
function v510(parentObj$$433) {
  var v7211 = parentObj$$433.registerB;
  parentObj$$433.registerB = v7211 & 191;
  return
}
function v509(parentObj$$432) {
  var v7212 = parentObj$$432.registerA;
  parentObj$$432.registerA = v7212 & 223;
  return
}
function v508(parentObj$$431) {
  var v3639 = parentObj$$431.memoryWriter;
  var v3640 = parentObj$$431.registersHL;
  var v3641 = parentObj$$431.registersHL;
  var v9165 = parentObj$$431.memoryReader;
  var v9166 = parentObj$$431.registersHL;
  var v9167 = parentObj$$431.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11098 = [[parentObj$$431, v9167], v9165, v9165[v9166]]
  }
  var v7213 = JAMScript.call(v11098[2], v11098[1], v11098[0]);
  var v3642 = v7213 & 223;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11099 = [[parentObj$$431, v3641, v3642], v3639, v3639[v3640]]
  }
  JAMScript.call(v11099[2], v11099[1], v11099[0]);
  return
}
function v507(parentObj$$430) {
  var v7214 = parentObj$$430.registersHL;
  parentObj$$430.registersHL = v7214 & 65503;
  return
}
function v506(parentObj$$429) {
  var v7215 = parentObj$$429.registersHL;
  parentObj$$429.registersHL = v7215 & 57343;
  return
}
function v505(parentObj$$428) {
  var v7216 = parentObj$$428.registerE;
  parentObj$$428.registerE = v7216 & 223;
  return
}
function v504(parentObj$$427) {
  var v7217 = parentObj$$427.registerD;
  parentObj$$427.registerD = v7217 & 223;
  return
}
function v503(parentObj$$426) {
  var v7218 = parentObj$$426.registerC;
  parentObj$$426.registerC = v7218 & 223;
  return
}
function v502(parentObj$$425) {
  var v7219 = parentObj$$425.registerB;
  parentObj$$425.registerB = v7219 & 223;
  return
}
function v501(parentObj$$424) {
  var v7220 = parentObj$$424.registerA;
  parentObj$$424.registerA = v7220 & 239;
  return
}
function v500(parentObj$$423) {
  var v3643 = parentObj$$423.memoryWriter;
  var v3644 = parentObj$$423.registersHL;
  var v3645 = parentObj$$423.registersHL;
  var v9168 = parentObj$$423.memoryReader;
  var v9169 = parentObj$$423.registersHL;
  var v9170 = parentObj$$423.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11100 = [[parentObj$$423, v9170], v9168, v9168[v9169]]
  }
  var v7221 = JAMScript.call(v11100[2], v11100[1], v11100[0]);
  var v3646 = v7221 & 239;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11101 = [[parentObj$$423, v3645, v3646], v3643, v3643[v3644]]
  }
  JAMScript.call(v11101[2], v11101[1], v11101[0]);
  return
}
function v499(parentObj$$422) {
  var v7222 = parentObj$$422.registersHL;
  parentObj$$422.registersHL = v7222 & 65519;
  return
}
function v498(parentObj$$421) {
  var v7223 = parentObj$$421.registersHL;
  parentObj$$421.registersHL = v7223 & 61439;
  return
}
function v497(parentObj$$420) {
  var v7224 = parentObj$$420.registerE;
  parentObj$$420.registerE = v7224 & 239;
  return
}
function v496(parentObj$$419) {
  var v7225 = parentObj$$419.registerD;
  parentObj$$419.registerD = v7225 & 239;
  return
}
function v495(parentObj$$418) {
  var v7226 = parentObj$$418.registerC;
  parentObj$$418.registerC = v7226 & 239;
  return
}
function v494(parentObj$$417) {
  var v7227 = parentObj$$417.registerB;
  parentObj$$417.registerB = v7227 & 239;
  return
}
function v493(parentObj$$416) {
  var v7228 = parentObj$$416.registerA;
  parentObj$$416.registerA = v7228 & 247;
  return
}
function v492(parentObj$$415) {
  var v3647 = parentObj$$415.memoryWriter;
  var v3648 = parentObj$$415.registersHL;
  var v3649 = parentObj$$415.registersHL;
  var v9171 = parentObj$$415.memoryReader;
  var v9172 = parentObj$$415.registersHL;
  var v9173 = parentObj$$415.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11102 = [[parentObj$$415, v9173], v9171, v9171[v9172]]
  }
  var v7229 = JAMScript.call(v11102[2], v11102[1], v11102[0]);
  var v3650 = v7229 & 247;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11103 = [[parentObj$$415, v3649, v3650], v3647, v3647[v3648]]
  }
  JAMScript.call(v11103[2], v11103[1], v11103[0]);
  return
}
function v491(parentObj$$414) {
  var v7230 = parentObj$$414.registersHL;
  parentObj$$414.registersHL = v7230 & 65527;
  return
}
function v490(parentObj$$413) {
  var v7231 = parentObj$$413.registersHL;
  parentObj$$413.registersHL = v7231 & 63487;
  return
}
function v489(parentObj$$412) {
  var v7232 = parentObj$$412.registerE;
  parentObj$$412.registerE = v7232 & 247;
  return
}
function v488(parentObj$$411) {
  var v7233 = parentObj$$411.registerD;
  parentObj$$411.registerD = v7233 & 247;
  return
}
function v487(parentObj$$410) {
  var v7234 = parentObj$$410.registerC;
  parentObj$$410.registerC = v7234 & 247;
  return
}
function v486(parentObj$$409) {
  var v7235 = parentObj$$409.registerB;
  parentObj$$409.registerB = v7235 & 247;
  return
}
function v485(parentObj$$408) {
  var v7236 = parentObj$$408.registerA;
  parentObj$$408.registerA = v7236 & 251;
  return
}
function v484(parentObj$$407) {
  var v3651 = parentObj$$407.memoryWriter;
  var v3652 = parentObj$$407.registersHL;
  var v3653 = parentObj$$407.registersHL;
  var v9174 = parentObj$$407.memoryReader;
  var v9175 = parentObj$$407.registersHL;
  var v9176 = parentObj$$407.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11104 = [[parentObj$$407, v9176], v9174, v9174[v9175]]
  }
  var v7237 = JAMScript.call(v11104[2], v11104[1], v11104[0]);
  var v3654 = v7237 & 251;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11105 = [[parentObj$$407, v3653, v3654], v3651, v3651[v3652]]
  }
  JAMScript.call(v11105[2], v11105[1], v11105[0]);
  return
}
function v483(parentObj$$406) {
  var v7238 = parentObj$$406.registersHL;
  parentObj$$406.registersHL = v7238 & 65531;
  return
}
function v482(parentObj$$405) {
  var v7239 = parentObj$$405.registersHL;
  parentObj$$405.registersHL = v7239 & 64511;
  return
}
function v481(parentObj$$404) {
  var v7240 = parentObj$$404.registerE;
  parentObj$$404.registerE = v7240 & 251;
  return
}
function v480(parentObj$$403) {
  var v7241 = parentObj$$403.registerD;
  parentObj$$403.registerD = v7241 & 251;
  return
}
function v479(parentObj$$402) {
  var v7242 = parentObj$$402.registerC;
  parentObj$$402.registerC = v7242 & 251;
  return
}
function v478(parentObj$$401) {
  var v7243 = parentObj$$401.registerB;
  parentObj$$401.registerB = v7243 & 251;
  return
}
function v477(parentObj$$400) {
  var v7244 = parentObj$$400.registerA;
  parentObj$$400.registerA = v7244 & 253;
  return
}
function v476(parentObj$$399) {
  var v3655 = parentObj$$399.memoryWriter;
  var v3656 = parentObj$$399.registersHL;
  var v3657 = parentObj$$399.registersHL;
  var v9177 = parentObj$$399.memoryReader;
  var v9178 = parentObj$$399.registersHL;
  var v9179 = parentObj$$399.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11106 = [[parentObj$$399, v9179], v9177, v9177[v9178]]
  }
  var v7245 = JAMScript.call(v11106[2], v11106[1], v11106[0]);
  var v3658 = v7245 & 253;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11107 = [[parentObj$$399, v3657, v3658], v3655, v3655[v3656]]
  }
  JAMScript.call(v11107[2], v11107[1], v11107[0]);
  return
}
function v475(parentObj$$398) {
  var v7246 = parentObj$$398.registersHL;
  parentObj$$398.registersHL = v7246 & 65533;
  return
}
function v474(parentObj$$397) {
  var v7247 = parentObj$$397.registersHL;
  parentObj$$397.registersHL = v7247 & 65023;
  return
}
function v473(parentObj$$396) {
  var v7248 = parentObj$$396.registerE;
  parentObj$$396.registerE = v7248 & 253;
  return
}
function v472(parentObj$$395) {
  var v7249 = parentObj$$395.registerD;
  parentObj$$395.registerD = v7249 & 253;
  return
}
function v471(parentObj$$394) {
  var v7250 = parentObj$$394.registerC;
  parentObj$$394.registerC = v7250 & 253;
  return
}
function v470(parentObj$$393) {
  var v7251 = parentObj$$393.registerB;
  parentObj$$393.registerB = v7251 & 253;
  return
}
function v469(parentObj$$392) {
  var v7252 = parentObj$$392.registerA;
  parentObj$$392.registerA = v7252 & 254;
  return
}
function v468(parentObj$$391) {
  var v3659 = parentObj$$391.memoryWriter;
  var v3660 = parentObj$$391.registersHL;
  var v3661 = parentObj$$391.registersHL;
  var v9180 = parentObj$$391.memoryReader;
  var v9181 = parentObj$$391.registersHL;
  var v9182 = parentObj$$391.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11108 = [[parentObj$$391, v9182], v9180, v9180[v9181]]
  }
  var v7253 = JAMScript.call(v11108[2], v11108[1], v11108[0]);
  var v3662 = v7253 & 254;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11109 = [[parentObj$$391, v3661, v3662], v3659, v3659[v3660]]
  }
  JAMScript.call(v11109[2], v11109[1], v11109[0]);
  return
}
function v467(parentObj$$390) {
  var v7254 = parentObj$$390.registersHL;
  parentObj$$390.registersHL = v7254 & 65534;
  return
}
function v466(parentObj$$389) {
  var v7255 = parentObj$$389.registersHL;
  parentObj$$389.registersHL = v7255 & 65279;
  return
}
function v465(parentObj$$388) {
  var v7256 = parentObj$$388.registerE;
  parentObj$$388.registerE = v7256 & 254;
  return
}
function v464(parentObj$$387) {
  var v7257 = parentObj$$387.registerD;
  parentObj$$387.registerD = v7257 & 254;
  return
}
function v463(parentObj$$386) {
  var v7258 = parentObj$$386.registerC;
  parentObj$$386.registerC = v7258 & 254;
  return
}
function v462(parentObj$$385) {
  var v7259 = parentObj$$385.registerB;
  parentObj$$385.registerB = v7259 & 254;
  return
}
function v461(parentObj$$384) {
  parentObj$$384.FHalfCarry = true;
  parentObj$$384.FSubtract = false;
  var v7260 = parentObj$$384.registerA;
  var v3663 = v7260 & 128;
  parentObj$$384.FZero = v3663 == 0;
  return
}
function v460(parentObj$$383) {
  parentObj$$383.FHalfCarry = true;
  parentObj$$383.FSubtract = false;
  var v3664 = parentObj$$383;
  var v10082 = parentObj$$383.memoryReader;
  var v10083 = parentObj$$383.registersHL;
  var v10084 = parentObj$$383.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11110 = [[parentObj$$383, v10084], v10082, v10082[v10083]]
  }
  var v9183 = JAMScript.call(v11110[2], v11110[1], v11110[0]);
  var v7261 = v9183 & 128;
  v3664.FZero = v7261 == 0;
  return
}
function v459(parentObj$$382) {
  parentObj$$382.FHalfCarry = true;
  parentObj$$382.FSubtract = false;
  var v7262 = parentObj$$382.registersHL;
  var v3665 = v7262 & 128;
  parentObj$$382.FZero = v3665 == 0;
  return
}
function v458(parentObj$$381) {
  parentObj$$381.FHalfCarry = true;
  parentObj$$381.FSubtract = false;
  var v7263 = parentObj$$381.registersHL;
  var v3666 = v7263 & 32768;
  parentObj$$381.FZero = v3666 == 0;
  return
}
function v457(parentObj$$380) {
  parentObj$$380.FHalfCarry = true;
  parentObj$$380.FSubtract = false;
  var v7264 = parentObj$$380.registerE;
  var v3667 = v7264 & 128;
  parentObj$$380.FZero = v3667 == 0;
  return
}
function v456(parentObj$$379) {
  parentObj$$379.FHalfCarry = true;
  parentObj$$379.FSubtract = false;
  var v7265 = parentObj$$379.registerD;
  var v3668 = v7265 & 128;
  parentObj$$379.FZero = v3668 == 0;
  return
}
function v455(parentObj$$378) {
  parentObj$$378.FHalfCarry = true;
  parentObj$$378.FSubtract = false;
  var v7266 = parentObj$$378.registerC;
  var v3669 = v7266 & 128;
  parentObj$$378.FZero = v3669 == 0;
  return
}
function v454(parentObj$$377) {
  parentObj$$377.FHalfCarry = true;
  parentObj$$377.FSubtract = false;
  var v7267 = parentObj$$377.registerB;
  var v3670 = v7267 & 128;
  parentObj$$377.FZero = v3670 == 0;
  return
}
function v453(parentObj$$376) {
  parentObj$$376.FHalfCarry = true;
  parentObj$$376.FSubtract = false;
  var v7268 = parentObj$$376.registerA;
  var v3671 = v7268 & 64;
  parentObj$$376.FZero = v3671 == 0;
  return
}
function v452(parentObj$$375) {
  parentObj$$375.FHalfCarry = true;
  parentObj$$375.FSubtract = false;
  var v3672 = parentObj$$375;
  var v10085 = parentObj$$375.memoryReader;
  var v10086 = parentObj$$375.registersHL;
  var v10087 = parentObj$$375.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11111 = [[parentObj$$375, v10087], v10085, v10085[v10086]]
  }
  var v9184 = JAMScript.call(v11111[2], v11111[1], v11111[0]);
  var v7269 = v9184 & 64;
  v3672.FZero = v7269 == 0;
  return
}
function v451(parentObj$$374) {
  parentObj$$374.FHalfCarry = true;
  parentObj$$374.FSubtract = false;
  var v7270 = parentObj$$374.registersHL;
  var v3673 = v7270 & 64;
  parentObj$$374.FZero = v3673 == 0;
  return
}
function v450(parentObj$$373) {
  parentObj$$373.FHalfCarry = true;
  parentObj$$373.FSubtract = false;
  var v7271 = parentObj$$373.registersHL;
  var v3674 = v7271 & 16384;
  parentObj$$373.FZero = v3674 == 0;
  return
}
function v449(parentObj$$372) {
  parentObj$$372.FHalfCarry = true;
  parentObj$$372.FSubtract = false;
  var v7272 = parentObj$$372.registerE;
  var v3675 = v7272 & 64;
  parentObj$$372.FZero = v3675 == 0;
  return
}
function v448(parentObj$$371) {
  parentObj$$371.FHalfCarry = true;
  parentObj$$371.FSubtract = false;
  var v7273 = parentObj$$371.registerD;
  var v3676 = v7273 & 64;
  parentObj$$371.FZero = v3676 == 0;
  return
}
function v447(parentObj$$370) {
  parentObj$$370.FHalfCarry = true;
  parentObj$$370.FSubtract = false;
  var v7274 = parentObj$$370.registerC;
  var v3677 = v7274 & 64;
  parentObj$$370.FZero = v3677 == 0;
  return
}
function v446(parentObj$$369) {
  parentObj$$369.FHalfCarry = true;
  parentObj$$369.FSubtract = false;
  var v7275 = parentObj$$369.registerB;
  var v3678 = v7275 & 64;
  parentObj$$369.FZero = v3678 == 0;
  return
}
function v445(parentObj$$368) {
  parentObj$$368.FHalfCarry = true;
  parentObj$$368.FSubtract = false;
  var v7276 = parentObj$$368.registerA;
  var v3679 = v7276 & 32;
  parentObj$$368.FZero = v3679 == 0;
  return
}
function v444(parentObj$$367) {
  parentObj$$367.FHalfCarry = true;
  parentObj$$367.FSubtract = false;
  var v3680 = parentObj$$367;
  var v10088 = parentObj$$367.memoryReader;
  var v10089 = parentObj$$367.registersHL;
  var v10090 = parentObj$$367.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11112 = [[parentObj$$367, v10090], v10088, v10088[v10089]]
  }
  var v9185 = JAMScript.call(v11112[2], v11112[1], v11112[0]);
  var v7277 = v9185 & 32;
  v3680.FZero = v7277 == 0;
  return
}
function v443(parentObj$$366) {
  parentObj$$366.FHalfCarry = true;
  parentObj$$366.FSubtract = false;
  var v7278 = parentObj$$366.registersHL;
  var v3681 = v7278 & 32;
  parentObj$$366.FZero = v3681 == 0;
  return
}
function v442(parentObj$$365) {
  parentObj$$365.FHalfCarry = true;
  parentObj$$365.FSubtract = false;
  var v7279 = parentObj$$365.registersHL;
  var v3682 = v7279 & 8192;
  parentObj$$365.FZero = v3682 == 0;
  return
}
function v441(parentObj$$364) {
  parentObj$$364.FHalfCarry = true;
  parentObj$$364.FSubtract = false;
  var v7280 = parentObj$$364.registerE;
  var v3683 = v7280 & 32;
  parentObj$$364.FZero = v3683 == 0;
  return
}
function v440(parentObj$$363) {
  parentObj$$363.FHalfCarry = true;
  parentObj$$363.FSubtract = false;
  var v7281 = parentObj$$363.registerD;
  var v3684 = v7281 & 32;
  parentObj$$363.FZero = v3684 == 0;
  return
}
function v439(parentObj$$362) {
  parentObj$$362.FHalfCarry = true;
  parentObj$$362.FSubtract = false;
  var v7282 = parentObj$$362.registerC;
  var v3685 = v7282 & 32;
  parentObj$$362.FZero = v3685 == 0;
  return
}
function v438(parentObj$$361) {
  parentObj$$361.FHalfCarry = true;
  parentObj$$361.FSubtract = false;
  var v7283 = parentObj$$361.registerB;
  var v3686 = v7283 & 32;
  parentObj$$361.FZero = v3686 == 0;
  return
}
function v437(parentObj$$360) {
  parentObj$$360.FHalfCarry = true;
  parentObj$$360.FSubtract = false;
  var v7284 = parentObj$$360.registerA;
  var v3687 = v7284 & 16;
  parentObj$$360.FZero = v3687 == 0;
  return
}
function v436(parentObj$$359) {
  parentObj$$359.FHalfCarry = true;
  parentObj$$359.FSubtract = false;
  var v3688 = parentObj$$359;
  var v10091 = parentObj$$359.memoryReader;
  var v10092 = parentObj$$359.registersHL;
  var v10093 = parentObj$$359.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11113 = [[parentObj$$359, v10093], v10091, v10091[v10092]]
  }
  var v9186 = JAMScript.call(v11113[2], v11113[1], v11113[0]);
  var v7285 = v9186 & 16;
  v3688.FZero = v7285 == 0;
  return
}
function v435(parentObj$$358) {
  parentObj$$358.FHalfCarry = true;
  parentObj$$358.FSubtract = false;
  var v7286 = parentObj$$358.registersHL;
  var v3689 = v7286 & 16;
  parentObj$$358.FZero = v3689 == 0;
  return
}
function v434(parentObj$$357) {
  parentObj$$357.FHalfCarry = true;
  parentObj$$357.FSubtract = false;
  var v7287 = parentObj$$357.registersHL;
  var v3690 = v7287 & 4096;
  parentObj$$357.FZero = v3690 == 0;
  return
}
function v433(parentObj$$356) {
  parentObj$$356.FHalfCarry = true;
  parentObj$$356.FSubtract = false;
  var v7288 = parentObj$$356.registerE;
  var v3691 = v7288 & 16;
  parentObj$$356.FZero = v3691 == 0;
  return
}
function v432(parentObj$$355) {
  parentObj$$355.FHalfCarry = true;
  parentObj$$355.FSubtract = false;
  var v7289 = parentObj$$355.registerD;
  var v3692 = v7289 & 16;
  parentObj$$355.FZero = v3692 == 0;
  return
}
function v431(parentObj$$354) {
  parentObj$$354.FHalfCarry = true;
  parentObj$$354.FSubtract = false;
  var v7290 = parentObj$$354.registerC;
  var v3693 = v7290 & 16;
  parentObj$$354.FZero = v3693 == 0;
  return
}
function v430(parentObj$$353) {
  parentObj$$353.FHalfCarry = true;
  parentObj$$353.FSubtract = false;
  var v7291 = parentObj$$353.registerB;
  var v3694 = v7291 & 16;
  parentObj$$353.FZero = v3694 == 0;
  return
}
function v429(parentObj$$352) {
  parentObj$$352.FHalfCarry = true;
  parentObj$$352.FSubtract = false;
  var v7292 = parentObj$$352.registerA;
  var v3695 = v7292 & 8;
  parentObj$$352.FZero = v3695 == 0;
  return
}
function v428(parentObj$$351) {
  parentObj$$351.FHalfCarry = true;
  parentObj$$351.FSubtract = false;
  var v3696 = parentObj$$351;
  var v10094 = parentObj$$351.memoryReader;
  var v10095 = parentObj$$351.registersHL;
  var v10096 = parentObj$$351.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11114 = [[parentObj$$351, v10096], v10094, v10094[v10095]]
  }
  var v9187 = JAMScript.call(v11114[2], v11114[1], v11114[0]);
  var v7293 = v9187 & 8;
  v3696.FZero = v7293 == 0;
  return
}
function v427(parentObj$$350) {
  parentObj$$350.FHalfCarry = true;
  parentObj$$350.FSubtract = false;
  var v7294 = parentObj$$350.registersHL;
  var v3697 = v7294 & 8;
  parentObj$$350.FZero = v3697 == 0;
  return
}
function v426(parentObj$$349) {
  parentObj$$349.FHalfCarry = true;
  parentObj$$349.FSubtract = false;
  var v7295 = parentObj$$349.registersHL;
  var v3698 = v7295 & 2048;
  parentObj$$349.FZero = v3698 == 0;
  return
}
function v425(parentObj$$348) {
  parentObj$$348.FHalfCarry = true;
  parentObj$$348.FSubtract = false;
  var v7296 = parentObj$$348.registerE;
  var v3699 = v7296 & 8;
  parentObj$$348.FZero = v3699 == 0;
  return
}
function v424(parentObj$$347) {
  parentObj$$347.FHalfCarry = true;
  parentObj$$347.FSubtract = false;
  var v7297 = parentObj$$347.registerD;
  var v3700 = v7297 & 8;
  parentObj$$347.FZero = v3700 == 0;
  return
}
function v423(parentObj$$346) {
  parentObj$$346.FHalfCarry = true;
  parentObj$$346.FSubtract = false;
  var v7298 = parentObj$$346.registerC;
  var v3701 = v7298 & 8;
  parentObj$$346.FZero = v3701 == 0;
  return
}
function v422(parentObj$$345) {
  parentObj$$345.FHalfCarry = true;
  parentObj$$345.FSubtract = false;
  var v7299 = parentObj$$345.registerB;
  var v3702 = v7299 & 8;
  parentObj$$345.FZero = v3702 == 0;
  return
}
function v421(parentObj$$344) {
  parentObj$$344.FHalfCarry = true;
  parentObj$$344.FSubtract = false;
  var v7300 = parentObj$$344.registerA;
  var v3703 = v7300 & 4;
  parentObj$$344.FZero = v3703 == 0;
  return
}
function v420(parentObj$$343) {
  parentObj$$343.FHalfCarry = true;
  parentObj$$343.FSubtract = false;
  var v3704 = parentObj$$343;
  var v10097 = parentObj$$343.memoryReader;
  var v10098 = parentObj$$343.registersHL;
  var v10099 = parentObj$$343.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11115 = [[parentObj$$343, v10099], v10097, v10097[v10098]]
  }
  var v9188 = JAMScript.call(v11115[2], v11115[1], v11115[0]);
  var v7301 = v9188 & 4;
  v3704.FZero = v7301 == 0;
  return
}
function v419(parentObj$$342) {
  parentObj$$342.FHalfCarry = true;
  parentObj$$342.FSubtract = false;
  var v7302 = parentObj$$342.registersHL;
  var v3705 = v7302 & 4;
  parentObj$$342.FZero = v3705 == 0;
  return
}
function v418(parentObj$$341) {
  parentObj$$341.FHalfCarry = true;
  parentObj$$341.FSubtract = false;
  var v7303 = parentObj$$341.registersHL;
  var v3706 = v7303 & 1024;
  parentObj$$341.FZero = v3706 == 0;
  return
}
function v417(parentObj$$340) {
  parentObj$$340.FHalfCarry = true;
  parentObj$$340.FSubtract = false;
  var v7304 = parentObj$$340.registerE;
  var v3707 = v7304 & 4;
  parentObj$$340.FZero = v3707 == 0;
  return
}
function v416(parentObj$$339) {
  parentObj$$339.FHalfCarry = true;
  parentObj$$339.FSubtract = false;
  var v7305 = parentObj$$339.registerD;
  var v3708 = v7305 & 4;
  parentObj$$339.FZero = v3708 == 0;
  return
}
function v415(parentObj$$338) {
  parentObj$$338.FHalfCarry = true;
  parentObj$$338.FSubtract = false;
  var v7306 = parentObj$$338.registerC;
  var v3709 = v7306 & 4;
  parentObj$$338.FZero = v3709 == 0;
  return
}
function v414(parentObj$$337) {
  parentObj$$337.FHalfCarry = true;
  parentObj$$337.FSubtract = false;
  var v7307 = parentObj$$337.registerB;
  var v3710 = v7307 & 4;
  parentObj$$337.FZero = v3710 == 0;
  return
}
function v413(parentObj$$336) {
  parentObj$$336.FHalfCarry = true;
  parentObj$$336.FSubtract = false;
  var v7308 = parentObj$$336.registerA;
  var v3711 = v7308 & 2;
  parentObj$$336.FZero = v3711 == 0;
  return
}
function v412(parentObj$$335) {
  parentObj$$335.FHalfCarry = true;
  parentObj$$335.FSubtract = false;
  var v3712 = parentObj$$335;
  var v10100 = parentObj$$335.memoryReader;
  var v10101 = parentObj$$335.registersHL;
  var v10102 = parentObj$$335.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11116 = [[parentObj$$335, v10102], v10100, v10100[v10101]]
  }
  var v9189 = JAMScript.call(v11116[2], v11116[1], v11116[0]);
  var v7309 = v9189 & 2;
  v3712.FZero = v7309 == 0;
  return
}
function v411(parentObj$$334) {
  parentObj$$334.FHalfCarry = true;
  parentObj$$334.FSubtract = false;
  var v7310 = parentObj$$334.registersHL;
  var v3713 = v7310 & 2;
  parentObj$$334.FZero = v3713 == 0;
  return
}
function v410(parentObj$$333) {
  parentObj$$333.FHalfCarry = true;
  parentObj$$333.FSubtract = false;
  var v7311 = parentObj$$333.registersHL;
  var v3714 = v7311 & 512;
  parentObj$$333.FZero = v3714 == 0;
  return
}
function v409(parentObj$$332) {
  parentObj$$332.FHalfCarry = true;
  parentObj$$332.FSubtract = false;
  var v7312 = parentObj$$332.registerE;
  var v3715 = v7312 & 2;
  parentObj$$332.FZero = v3715 == 0;
  return
}
function v408(parentObj$$331) {
  parentObj$$331.FHalfCarry = true;
  parentObj$$331.FSubtract = false;
  var v7313 = parentObj$$331.registerD;
  var v3716 = v7313 & 2;
  parentObj$$331.FZero = v3716 == 0;
  return
}
function v407(parentObj$$330) {
  parentObj$$330.FHalfCarry = true;
  parentObj$$330.FSubtract = false;
  var v7314 = parentObj$$330.registerC;
  var v3717 = v7314 & 2;
  parentObj$$330.FZero = v3717 == 0;
  return
}
function v406(parentObj$$329) {
  parentObj$$329.FHalfCarry = true;
  parentObj$$329.FSubtract = false;
  var v7315 = parentObj$$329.registerB;
  var v3718 = v7315 & 2;
  parentObj$$329.FZero = v3718 == 0;
  return
}
function v405(parentObj$$328) {
  parentObj$$328.FHalfCarry = true;
  parentObj$$328.FSubtract = false;
  var v7316 = parentObj$$328.registerA;
  var v3719 = v7316 & 1;
  parentObj$$328.FZero = v3719 == 0;
  return
}
function v404(parentObj$$327) {
  parentObj$$327.FHalfCarry = true;
  parentObj$$327.FSubtract = false;
  var v3720 = parentObj$$327;
  var v10103 = parentObj$$327.memoryReader;
  var v10104 = parentObj$$327.registersHL;
  var v10105 = parentObj$$327.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11117 = [[parentObj$$327, v10105], v10103, v10103[v10104]]
  }
  var v9190 = JAMScript.call(v11117[2], v11117[1], v11117[0]);
  var v7317 = v9190 & 1;
  v3720.FZero = v7317 == 0;
  return
}
function v403(parentObj$$326) {
  parentObj$$326.FHalfCarry = true;
  parentObj$$326.FSubtract = false;
  var v7318 = parentObj$$326.registersHL;
  var v3721 = v7318 & 1;
  parentObj$$326.FZero = v3721 == 0;
  return
}
function v402(parentObj$$325) {
  parentObj$$325.FHalfCarry = true;
  parentObj$$325.FSubtract = false;
  var v7319 = parentObj$$325.registersHL;
  var v3722 = v7319 & 256;
  parentObj$$325.FZero = v3722 == 0;
  return
}
function v401(parentObj$$324) {
  parentObj$$324.FHalfCarry = true;
  parentObj$$324.FSubtract = false;
  var v7320 = parentObj$$324.registerE;
  var v3723 = v7320 & 1;
  parentObj$$324.FZero = v3723 == 0;
  return
}
function v400(parentObj$$323) {
  parentObj$$323.FHalfCarry = true;
  parentObj$$323.FSubtract = false;
  var v7321 = parentObj$$323.registerD;
  var v3724 = v7321 & 1;
  parentObj$$323.FZero = v3724 == 0;
  return
}
function v399(parentObj$$322) {
  parentObj$$322.FHalfCarry = true;
  parentObj$$322.FSubtract = false;
  var v7322 = parentObj$$322.registerC;
  var v3725 = v7322 & 1;
  parentObj$$322.FZero = v3725 == 0;
  return
}
function v398(parentObj$$321) {
  parentObj$$321.FHalfCarry = true;
  parentObj$$321.FSubtract = false;
  var v7323 = parentObj$$321.registerB;
  var v3726 = v7323 & 1;
  parentObj$$321.FZero = v3726 == 0;
  return
}
function v397(parentObj$$320) {
  var v7324 = parentObj$$320.registerA;
  var v3727 = v7324 & 1;
  parentObj$$320.FCarry = v3727 == 1;
  var v7325 = parentObj$$320.registerA;
  parentObj$$320.registerA = v7325 >> 1;
  parentObj$$320.FHalfCarry = parentObj$$320.FSubtract = false;
  var v3728 = parentObj$$320.registerA;
  parentObj$$320.FZero = v3728 == 0;
  return
}
function v396(parentObj$$319) {
  var v3729 = parentObj$$319.memoryReader;
  var v3730 = parentObj$$319.registersHL;
  var v3731 = parentObj$$319.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11118 = [[parentObj$$319, v3731], v3729, v3729[v3730]]
  }
  var temp_var$$19 = JAMScript.call(v11118[2], v11118[1], v11118[0]);
  var v3732 = temp_var$$19 & 1;
  parentObj$$319.FCarry = v3732 == 1;
  var v3733 = parentObj$$319.memoryWriter;
  var v3734 = parentObj$$319.registersHL;
  var v3735 = parentObj$$319.registersHL;
  var v3736 = temp_var$$19 >> 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11119 = [[parentObj$$319, v3735, v3736], v3733, v3733[v3734]]
  }
  JAMScript.call(v11119[2], v11119[1], v11119[0]);
  parentObj$$319.FHalfCarry = parentObj$$319.FSubtract = false;
  parentObj$$319.FZero = temp_var$$19 < 2;
  return
}
function v395(parentObj$$318) {
  var v7326 = parentObj$$318.registersHL;
  var v3737 = v7326 & 1;
  parentObj$$318.FCarry = v3737 == 1;
  var v7327 = parentObj$$318.registersHL;
  var v3738 = v7327 & 65280;
  var v9191 = parentObj$$318.registersHL;
  var v7328 = v9191 & 255;
  var v3739 = v7328 >> 1;
  parentObj$$318.registersHL = v3738 | v3739;
  parentObj$$318.FHalfCarry = parentObj$$318.FSubtract = false;
  var v7329 = parentObj$$318.registersHL;
  var v3740 = v7329 & 255;
  parentObj$$318.FZero = v3740 == 0;
  return
}
function v394(parentObj$$317) {
  var v7330 = parentObj$$317.registersHL;
  var v3741 = v7330 & 256;
  parentObj$$317.FCarry = v3741 == 256;
  var v9192 = parentObj$$317.registersHL;
  var v7331 = v9192 >> 1;
  var v3742 = v7331 & 65280;
  var v7332 = parentObj$$317.registersHL;
  var v3743 = v7332 & 255;
  parentObj$$317.registersHL = v3742 | v3743;
  parentObj$$317.FHalfCarry = parentObj$$317.FSubtract = false;
  var v3744 = parentObj$$317.registersHL;
  parentObj$$317.FZero = v3744 < 256;
  return
}
function v393(parentObj$$316) {
  var v7333 = parentObj$$316.registerE;
  var v3745 = v7333 & 1;
  parentObj$$316.FCarry = v3745 == 1;
  var v7334 = parentObj$$316.registerE;
  parentObj$$316.registerE = v7334 >> 1;
  parentObj$$316.FHalfCarry = parentObj$$316.FSubtract = false;
  var v3746 = parentObj$$316.registerE;
  parentObj$$316.FZero = v3746 == 0;
  return
}
function v392(parentObj$$315) {
  var v7335 = parentObj$$315.registerD;
  var v3747 = v7335 & 1;
  parentObj$$315.FCarry = v3747 == 1;
  var v7336 = parentObj$$315.registerD;
  parentObj$$315.registerD = v7336 >> 1;
  parentObj$$315.FHalfCarry = parentObj$$315.FSubtract = false;
  var v3748 = parentObj$$315.registerD;
  parentObj$$315.FZero = v3748 == 0;
  return
}
function v391(parentObj$$314) {
  var v7337 = parentObj$$314.registerC;
  var v3749 = v7337 & 1;
  parentObj$$314.FCarry = v3749 == 1;
  var v7338 = parentObj$$314.registerC;
  parentObj$$314.registerC = v7338 >> 1;
  parentObj$$314.FHalfCarry = parentObj$$314.FSubtract = false;
  var v3750 = parentObj$$314.registerC;
  parentObj$$314.FZero = v3750 == 0;
  return
}
function v390(parentObj$$313) {
  var v7339 = parentObj$$313.registerB;
  var v3751 = v7339 & 1;
  parentObj$$313.FCarry = v3751 == 1;
  var v7340 = parentObj$$313.registerB;
  parentObj$$313.registerB = v7340 >> 1;
  parentObj$$313.FHalfCarry = parentObj$$313.FSubtract = false;
  var v3752 = parentObj$$313.registerB;
  parentObj$$313.FZero = v3752 == 0;
  return
}
function v389(parentObj$$312) {
  var v9193 = parentObj$$312.registerA;
  var v7341 = v9193 & 15;
  var v3753 = v7341 << 4;
  var v7342 = parentObj$$312.registerA;
  var v3754 = v7342 >> 4;
  parentObj$$312.registerA = v3753 | v3754;
  var v3755 = parentObj$$312.registerA;
  parentObj$$312.FZero = v3755 == 0;
  parentObj$$312.FCarry = parentObj$$312.FHalfCarry = parentObj$$312.FSubtract = false;
  return
}
function v388(parentObj$$311) {
  var v3756 = parentObj$$311.memoryReader;
  var v3757 = parentObj$$311.registersHL;
  var v3758 = parentObj$$311.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11120 = [[parentObj$$311, v3758], v3756, v3756[v3757]]
  }
  var temp_var$$18 = JAMScript.call(v11120[2], v11120[1], v11120[0]);
  var v7343 = temp_var$$18 & 15;
  var v3759 = v7343 << 4;
  var v3760 = temp_var$$18 >> 4;
  temp_var$$18 = v3759 | v3760;
  var v3761 = parentObj$$311.memoryWriter;
  var v3762 = parentObj$$311.registersHL;
  var v3763 = parentObj$$311.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11121 = [[parentObj$$311, v3763, temp_var$$18], v3761, v3761[v3762]]
  }
  JAMScript.call(v11121[2], v11121[1], v11121[0]);
  parentObj$$311.FZero = temp_var$$18 == 0;
  parentObj$$311.FCarry = parentObj$$311.FHalfCarry = parentObj$$311.FSubtract = false;
  return
}
function v387(parentObj$$310) {
  var v9194 = parentObj$$310.registersHL;
  var v7344 = v9194 & 65280;
  var v10106 = parentObj$$310.registersHL;
  var v9195 = v10106 & 15;
  var v7345 = v9195 << 4;
  var v3764 = v7344 | v7345;
  var v9196 = parentObj$$310.registersHL;
  var v7346 = v9196 & 240;
  var v3765 = v7346 >> 4;
  parentObj$$310.registersHL = v3764 | v3765;
  var v7347 = parentObj$$310.registersHL;
  var v3766 = v7347 & 255;
  parentObj$$310.FZero = v3766 == 0;
  parentObj$$310.FCarry = parentObj$$310.FHalfCarry = parentObj$$310.FSubtract = false;
  return
}
function v386(parentObj$$309) {
  var v10107 = parentObj$$309.registersHL;
  var v9197 = v10107 & 3840;
  var v7348 = v9197 << 4;
  var v10108 = parentObj$$309.registersHL;
  var v9198 = v10108 & 61440;
  var v7349 = v9198 >> 4;
  var v3767 = v7348 | v7349;
  var v7350 = parentObj$$309.registersHL;
  var v3768 = v7350 & 255;
  parentObj$$309.registersHL = v3767 | v3768;
  var v3769 = parentObj$$309.registersHL;
  parentObj$$309.FZero = v3769 < 256;
  parentObj$$309.FCarry = parentObj$$309.FHalfCarry = parentObj$$309.FSubtract = false;
  return
}
function v385(parentObj$$308) {
  var v9199 = parentObj$$308.registerE;
  var v7351 = v9199 & 15;
  var v3770 = v7351 << 4;
  var v7352 = parentObj$$308.registerE;
  var v3771 = v7352 >> 4;
  parentObj$$308.registerE = v3770 | v3771;
  var v3772 = parentObj$$308.registerE;
  parentObj$$308.FZero = v3772 == 0;
  parentObj$$308.FCarry = parentObj$$308.FHalfCarry = parentObj$$308.FSubtract = false;
  return
}
function v384(parentObj$$307) {
  var v9200 = parentObj$$307.registerD;
  var v7353 = v9200 & 15;
  var v3773 = v7353 << 4;
  var v7354 = parentObj$$307.registerD;
  var v3774 = v7354 >> 4;
  parentObj$$307.registerD = v3773 | v3774;
  var v3775 = parentObj$$307.registerD;
  parentObj$$307.FZero = v3775 == 0;
  parentObj$$307.FCarry = parentObj$$307.FHalfCarry = parentObj$$307.FSubtract = false;
  return
}
function v383(parentObj$$306) {
  var v9201 = parentObj$$306.registerC;
  var v7355 = v9201 & 15;
  var v3776 = v7355 << 4;
  var v7356 = parentObj$$306.registerC;
  var v3777 = v7356 >> 4;
  parentObj$$306.registerC = v3776 | v3777;
  var v3778 = parentObj$$306.registerC;
  parentObj$$306.FZero = v3778 == 0;
  parentObj$$306.FCarry = parentObj$$306.FHalfCarry = parentObj$$306.FSubtract = false;
  return
}
function v382(parentObj$$305) {
  var v9202 = parentObj$$305.registerB;
  var v7357 = v9202 & 15;
  var v3779 = v7357 << 4;
  var v7358 = parentObj$$305.registerB;
  var v3780 = v7358 >> 4;
  parentObj$$305.registerB = v3779 | v3780;
  var v3781 = parentObj$$305.registerB;
  parentObj$$305.FZero = v3781 == 0;
  parentObj$$305.FCarry = parentObj$$305.FHalfCarry = parentObj$$305.FSubtract = false;
  return
}
function v381(parentObj$$304) {
  var v7359 = parentObj$$304.registerA;
  var v3782 = v7359 & 1;
  parentObj$$304.FCarry = v3782 == 1;
  var v7360 = parentObj$$304.registerA;
  var v3783 = v7360 & 128;
  var v7361 = parentObj$$304.registerA;
  var v3784 = v7361 >> 1;
  parentObj$$304.registerA = v3783 | v3784;
  parentObj$$304.FHalfCarry = parentObj$$304.FSubtract = false;
  var v3785 = parentObj$$304.registerA;
  parentObj$$304.FZero = v3785 == 0;
  return
}
function v380(parentObj$$303) {
  var v3786 = parentObj$$303.memoryReader;
  var v3787 = parentObj$$303.registersHL;
  var v3788 = parentObj$$303.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11122 = [[parentObj$$303, v3788], v3786, v3786[v3787]]
  }
  var temp_var$$17 = JAMScript.call(v11122[2], v11122[1], v11122[0]);
  var v3789 = temp_var$$17 & 1;
  parentObj$$303.FCarry = v3789 == 1;
  var v3790 = temp_var$$17 & 128;
  var v3791 = temp_var$$17 >> 1;
  temp_var$$17 = v3790 | v3791;
  var v3792 = parentObj$$303.memoryWriter;
  var v3793 = parentObj$$303.registersHL;
  var v3794 = parentObj$$303.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11123 = [[parentObj$$303, v3794, temp_var$$17], v3792, v3792[v3793]]
  }
  JAMScript.call(v11123[2], v11123[1], v11123[0]);
  parentObj$$303.FHalfCarry = parentObj$$303.FSubtract = false;
  parentObj$$303.FZero = temp_var$$17 == 0;
  return
}
function v379(parentObj$$302) {
  var v7362 = parentObj$$302.registersHL;
  var v3795 = v7362 & 1;
  parentObj$$302.FCarry = v3795 == 1;
  var v7363 = parentObj$$302.registersHL;
  var v3796 = v7363 & 65408;
  var v9203 = parentObj$$302.registersHL;
  var v7364 = v9203 & 255;
  var v3797 = v7364 >> 1;
  parentObj$$302.registersHL = v3796 | v3797;
  parentObj$$302.FHalfCarry = parentObj$$302.FSubtract = false;
  var v7365 = parentObj$$302.registersHL;
  var v3798 = v7365 & 255;
  parentObj$$302.FZero = v3798 == 0;
  return
}
function v378(parentObj$$301) {
  var v7366 = parentObj$$301.registersHL;
  var v3799 = v7366 & 256;
  parentObj$$301.FCarry = v3799 == 256;
  var v9204 = parentObj$$301.registersHL;
  var v7367 = v9204 >> 1;
  var v3800 = v7367 & 65280;
  var v7368 = parentObj$$301.registersHL;
  var v3801 = v7368 & 33023;
  parentObj$$301.registersHL = v3800 | v3801;
  parentObj$$301.FHalfCarry = parentObj$$301.FSubtract = false;
  var v3802 = parentObj$$301.registersHL;
  parentObj$$301.FZero = v3802 < 256;
  return
}
function v377(parentObj$$300) {
  var v7369 = parentObj$$300.registerE;
  var v3803 = v7369 & 1;
  parentObj$$300.FCarry = v3803 == 1;
  var v7370 = parentObj$$300.registerE;
  var v3804 = v7370 & 128;
  var v7371 = parentObj$$300.registerE;
  var v3805 = v7371 >> 1;
  parentObj$$300.registerE = v3804 | v3805;
  parentObj$$300.FHalfCarry = parentObj$$300.FSubtract = false;
  var v3806 = parentObj$$300.registerE;
  parentObj$$300.FZero = v3806 == 0;
  return
}
function v376(parentObj$$299) {
  var v7372 = parentObj$$299.registerD;
  var v3807 = v7372 & 1;
  parentObj$$299.FCarry = v3807 == 1;
  var v7373 = parentObj$$299.registerD;
  var v3808 = v7373 & 128;
  var v7374 = parentObj$$299.registerD;
  var v3809 = v7374 >> 1;
  parentObj$$299.registerD = v3808 | v3809;
  parentObj$$299.FHalfCarry = parentObj$$299.FSubtract = false;
  var v3810 = parentObj$$299.registerD;
  parentObj$$299.FZero = v3810 == 0;
  return
}
function v375(parentObj$$298) {
  var v7375 = parentObj$$298.registerC;
  var v3811 = v7375 & 1;
  parentObj$$298.FCarry = v3811 == 1;
  var v7376 = parentObj$$298.registerC;
  var v3812 = v7376 & 128;
  var v7377 = parentObj$$298.registerC;
  var v3813 = v7377 >> 1;
  parentObj$$298.registerC = v3812 | v3813;
  parentObj$$298.FHalfCarry = parentObj$$298.FSubtract = false;
  var v3814 = parentObj$$298.registerC;
  parentObj$$298.FZero = v3814 == 0;
  return
}
function v374(parentObj$$297) {
  var v7378 = parentObj$$297.registerB;
  var v3815 = v7378 & 1;
  parentObj$$297.FCarry = v3815 == 1;
  var v7379 = parentObj$$297.registerB;
  var v3816 = v7379 & 128;
  var v7380 = parentObj$$297.registerB;
  var v3817 = v7380 >> 1;
  parentObj$$297.registerB = v3816 | v3817;
  parentObj$$297.FHalfCarry = parentObj$$297.FSubtract = false;
  var v3818 = parentObj$$297.registerB;
  parentObj$$297.FZero = v3818 == 0;
  return
}
function v373(parentObj$$296) {
  var v3819 = parentObj$$296.registerA;
  parentObj$$296.FCarry = v3819 > 127;
  var v7381 = parentObj$$296.registerA;
  var v3820 = v7381 << 1;
  parentObj$$296.registerA = v3820 & 255;
  parentObj$$296.FHalfCarry = parentObj$$296.FSubtract = false;
  var v3821 = parentObj$$296.registerA;
  parentObj$$296.FZero = v3821 == 0;
  return
}
function v372(parentObj$$295) {
  var v3822 = parentObj$$295.memoryReader;
  var v3823 = parentObj$$295.registersHL;
  var v3824 = parentObj$$295.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11124 = [[parentObj$$295, v3824], v3822, v3822[v3823]]
  }
  var temp_var$$16 = JAMScript.call(v11124[2], v11124[1], v11124[0]);
  parentObj$$295.FCarry = temp_var$$16 > 127;
  var v3825 = temp_var$$16 << 1;
  temp_var$$16 = v3825 & 255;
  var v3826 = parentObj$$295.memoryWriter;
  var v3827 = parentObj$$295.registersHL;
  var v3828 = parentObj$$295.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11125 = [[parentObj$$295, v3828, temp_var$$16], v3826, v3826[v3827]]
  }
  JAMScript.call(v11125[2], v11125[1], v11125[0]);
  parentObj$$295.FHalfCarry = parentObj$$295.FSubtract = false;
  parentObj$$295.FZero = temp_var$$16 == 0;
  return
}
function v371(parentObj$$294) {
  var v7382 = parentObj$$294.registersHL;
  var v3829 = v7382 & 128;
  parentObj$$294.FCarry = v3829 == 128;
  var v7383 = parentObj$$294.registersHL;
  var v3830 = v7383 & 65280;
  var v9205 = parentObj$$294.registersHL;
  var v7384 = v9205 << 1;
  var v3831 = v7384 & 255;
  parentObj$$294.registersHL = v3830 | v3831;
  parentObj$$294.FHalfCarry = parentObj$$294.FSubtract = false;
  var v7385 = parentObj$$294.registersHL;
  var v3832 = v7385 & 255;
  parentObj$$294.FZero = v3832 == 0;
  return
}
function v370(parentObj$$293) {
  var v3833 = parentObj$$293.registersHL;
  parentObj$$293.FCarry = v3833 > 32767;
  var v9206 = parentObj$$293.registersHL;
  var v7386 = v9206 << 1;
  var v3834 = v7386 & 65024;
  var v7387 = parentObj$$293.registersHL;
  var v3835 = v7387 & 255;
  parentObj$$293.registersHL = v3834 | v3835;
  parentObj$$293.FHalfCarry = parentObj$$293.FSubtract = false;
  var v3836 = parentObj$$293.registersHL;
  parentObj$$293.FZero = v3836 < 256;
  return
}
function v369(parentObj$$292) {
  var v3837 = parentObj$$292.registerE;
  parentObj$$292.FCarry = v3837 > 127;
  var v7388 = parentObj$$292.registerE;
  var v3838 = v7388 << 1;
  parentObj$$292.registerE = v3838 & 255;
  parentObj$$292.FHalfCarry = parentObj$$292.FSubtract = false;
  var v3839 = parentObj$$292.registerE;
  parentObj$$292.FZero = v3839 == 0;
  return
}
function v368(parentObj$$291) {
  var v3840 = parentObj$$291.registerD;
  parentObj$$291.FCarry = v3840 > 127;
  var v7389 = parentObj$$291.registerD;
  var v3841 = v7389 << 1;
  parentObj$$291.registerD = v3841 & 255;
  parentObj$$291.FHalfCarry = parentObj$$291.FSubtract = false;
  var v3842 = parentObj$$291.registerD;
  parentObj$$291.FZero = v3842 == 0;
  return
}
function v367(parentObj$$290) {
  var v3843 = parentObj$$290.registerC;
  parentObj$$290.FCarry = v3843 > 127;
  var v7390 = parentObj$$290.registerC;
  var v3844 = v7390 << 1;
  parentObj$$290.registerC = v3844 & 255;
  parentObj$$290.FHalfCarry = parentObj$$290.FSubtract = false;
  var v3845 = parentObj$$290.registerC;
  parentObj$$290.FZero = v3845 == 0;
  return
}
function v366(parentObj$$289) {
  var v3846 = parentObj$$289.registerB;
  parentObj$$289.FCarry = v3846 > 127;
  var v7391 = parentObj$$289.registerB;
  var v3847 = v7391 << 1;
  parentObj$$289.registerB = v3847 & 255;
  parentObj$$289.FHalfCarry = parentObj$$289.FSubtract = false;
  var v3848 = parentObj$$289.registerB;
  parentObj$$289.FZero = v3848 == 0;
  return
}
function v365(parentObj$$288) {
  var v7392 = parentObj$$288.registerA;
  var v3849 = v7392 & 1;
  var newFCarry$$15 = v3849 == 1;
  var v7393;
  var v9207 = parentObj$$288.FCarry;
  if(v9207) {
    v7393 = 128
  }else {
    v7393 = 0
  }
  var v3850 = v7393;
  var v7394 = parentObj$$288.registerA;
  var v3851 = v7394 >> 1;
  parentObj$$288.registerA = v3850 | v3851;
  parentObj$$288.FCarry = newFCarry$$15;
  parentObj$$288.FHalfCarry = parentObj$$288.FSubtract = false;
  var v3852 = parentObj$$288.registerA;
  parentObj$$288.FZero = v3852 == 0;
  return
}
function v364(parentObj$$287) {
  var v3853 = parentObj$$287.memoryReader;
  var v3854 = parentObj$$287.registersHL;
  var v3855 = parentObj$$287.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11126 = [[parentObj$$287, v3855], v3853, v3853[v3854]]
  }
  var temp_var$$15 = JAMScript.call(v11126[2], v11126[1], v11126[0]);
  var v3856 = temp_var$$15 & 1;
  var newFCarry$$14 = v3856 == 1;
  var v7395;
  var v9208 = parentObj$$287.FCarry;
  if(v9208) {
    v7395 = 128
  }else {
    v7395 = 0
  }
  var v3857 = v7395;
  var v3858 = temp_var$$15 >> 1;
  temp_var$$15 = v3857 | v3858;
  parentObj$$287.FCarry = newFCarry$$14;
  var v3859 = parentObj$$287.memoryWriter;
  var v3860 = parentObj$$287.registersHL;
  var v3861 = parentObj$$287.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11127 = [[parentObj$$287, v3861, temp_var$$15], v3859, v3859[v3860]]
  }
  JAMScript.call(v11127[2], v11127[1], v11127[0]);
  parentObj$$287.FHalfCarry = parentObj$$287.FSubtract = false;
  parentObj$$287.FZero = temp_var$$15 == 0;
  return
}
function v363(parentObj$$286) {
  var v7396 = parentObj$$286.registersHL;
  var v3862 = v7396 & 1;
  var newFCarry$$13 = v3862 == 1;
  var v9209 = parentObj$$286.registersHL;
  var v7397 = v9209 & 65280;
  var v9210;
  var v10109 = parentObj$$286.FCarry;
  if(v10109) {
    v9210 = 128
  }else {
    v9210 = 0
  }
  var v7398 = v9210;
  var v3863 = v7397 | v7398;
  var v9211 = parentObj$$286.registersHL;
  var v7399 = v9211 & 255;
  var v3864 = v7399 >> 1;
  parentObj$$286.registersHL = v3863 | v3864;
  parentObj$$286.FCarry = newFCarry$$13;
  parentObj$$286.FHalfCarry = parentObj$$286.FSubtract = false;
  var v7400 = parentObj$$286.registersHL;
  var v3865 = v7400 & 255;
  parentObj$$286.FZero = v3865 == 0;
  return
}
function v362(parentObj$$285) {
  var v7401 = parentObj$$285.registersHL;
  var v3866 = v7401 & 256;
  var newFCarry$$12 = v3866 == 256;
  var v9212;
  var v10110 = parentObj$$285.FCarry;
  if(v10110) {
    v9212 = 32768
  }else {
    v9212 = 0
  }
  var v7402 = v9212;
  var v10111 = parentObj$$285.registersHL;
  var v9213 = v10111 >> 1;
  var v7403 = v9213 & 65280;
  var v3867 = v7402 | v7403;
  var v7404 = parentObj$$285.registersHL;
  var v3868 = v7404 & 255;
  parentObj$$285.registersHL = v3867 | v3868;
  parentObj$$285.FCarry = newFCarry$$12;
  parentObj$$285.FHalfCarry = parentObj$$285.FSubtract = false;
  var v3869 = parentObj$$285.registersHL;
  parentObj$$285.FZero = v3869 < 256;
  return
}
function v361(parentObj$$284) {
  var v7405 = parentObj$$284.registerE;
  var v3870 = v7405 & 1;
  var newFCarry$$11 = v3870 == 1;
  var v7406;
  var v9214 = parentObj$$284.FCarry;
  if(v9214) {
    v7406 = 128
  }else {
    v7406 = 0
  }
  var v3871 = v7406;
  var v7407 = parentObj$$284.registerE;
  var v3872 = v7407 >> 1;
  parentObj$$284.registerE = v3871 | v3872;
  parentObj$$284.FCarry = newFCarry$$11;
  parentObj$$284.FHalfCarry = parentObj$$284.FSubtract = false;
  var v3873 = parentObj$$284.registerE;
  parentObj$$284.FZero = v3873 == 0;
  return
}
function v360(parentObj$$283) {
  var v7408 = parentObj$$283.registerD;
  var v3874 = v7408 & 1;
  var newFCarry$$10 = v3874 == 1;
  var v7409;
  var v9215 = parentObj$$283.FCarry;
  if(v9215) {
    v7409 = 128
  }else {
    v7409 = 0
  }
  var v3875 = v7409;
  var v7410 = parentObj$$283.registerD;
  var v3876 = v7410 >> 1;
  parentObj$$283.registerD = v3875 | v3876;
  parentObj$$283.FCarry = newFCarry$$10;
  parentObj$$283.FHalfCarry = parentObj$$283.FSubtract = false;
  var v3877 = parentObj$$283.registerD;
  parentObj$$283.FZero = v3877 == 0;
  return
}
function v359(parentObj$$282) {
  var v7411 = parentObj$$282.registerC;
  var v3878 = v7411 & 1;
  var newFCarry$$9 = v3878 == 1;
  var v7412;
  var v9216 = parentObj$$282.FCarry;
  if(v9216) {
    v7412 = 128
  }else {
    v7412 = 0
  }
  var v3879 = v7412;
  var v7413 = parentObj$$282.registerC;
  var v3880 = v7413 >> 1;
  parentObj$$282.registerC = v3879 | v3880;
  parentObj$$282.FCarry = newFCarry$$9;
  parentObj$$282.FHalfCarry = parentObj$$282.FSubtract = false;
  var v3881 = parentObj$$282.registerC;
  parentObj$$282.FZero = v3881 == 0;
  return
}
function v358(parentObj$$281) {
  var v7414 = parentObj$$281.registerB;
  var v3882 = v7414 & 1;
  var newFCarry$$8 = v3882 == 1;
  var v7415;
  var v9217 = parentObj$$281.FCarry;
  if(v9217) {
    v7415 = 128
  }else {
    v7415 = 0
  }
  var v3883 = v7415;
  var v7416 = parentObj$$281.registerB;
  var v3884 = v7416 >> 1;
  parentObj$$281.registerB = v3883 | v3884;
  parentObj$$281.FCarry = newFCarry$$8;
  parentObj$$281.FHalfCarry = parentObj$$281.FSubtract = false;
  var v3885 = parentObj$$281.registerB;
  parentObj$$281.FZero = v3885 == 0;
  return
}
function v357(parentObj$$280) {
  var v3886 = parentObj$$280.registerA;
  var newFCarry$$7 = v3886 > 127;
  var v9218 = parentObj$$280.registerA;
  var v7417 = v9218 << 1;
  var v3887 = v7417 & 255;
  var v7418;
  var v9219 = parentObj$$280.FCarry;
  if(v9219) {
    v7418 = 1
  }else {
    v7418 = 0
  }
  var v3888 = v7418;
  parentObj$$280.registerA = v3887 | v3888;
  parentObj$$280.FCarry = newFCarry$$7;
  parentObj$$280.FHalfCarry = parentObj$$280.FSubtract = false;
  var v3889 = parentObj$$280.registerA;
  parentObj$$280.FZero = v3889 == 0;
  return
}
function v356(parentObj$$279) {
  var v3890 = parentObj$$279.memoryReader;
  var v3891 = parentObj$$279.registersHL;
  var v3892 = parentObj$$279.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11128 = [[parentObj$$279, v3892], v3890, v3890[v3891]]
  }
  var temp_var$$14 = JAMScript.call(v11128[2], v11128[1], v11128[0]);
  var newFCarry$$6 = temp_var$$14 > 127;
  var v7419 = temp_var$$14 << 1;
  var v3893 = v7419 & 255;
  var v7420;
  var v9220 = parentObj$$279.FCarry;
  if(v9220) {
    v7420 = 1
  }else {
    v7420 = 0
  }
  var v3894 = v7420;
  temp_var$$14 = v3893 | v3894;
  parentObj$$279.FCarry = newFCarry$$6;
  var v3895 = parentObj$$279.memoryWriter;
  var v3896 = parentObj$$279.registersHL;
  var v3897 = parentObj$$279.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11129 = [[parentObj$$279, v3897, temp_var$$14], v3895, v3895[v3896]]
  }
  JAMScript.call(v11129[2], v11129[1], v11129[0]);
  parentObj$$279.FHalfCarry = parentObj$$279.FSubtract = false;
  parentObj$$279.FZero = temp_var$$14 == 0;
  return
}
function v355(parentObj$$278) {
  var v7421 = parentObj$$278.registersHL;
  var v3898 = v7421 & 128;
  var newFCarry$$5 = v3898 == 128;
  var v9221 = parentObj$$278.registersHL;
  var v7422 = v9221 & 65280;
  var v10112 = parentObj$$278.registersHL;
  var v9222 = v10112 << 1;
  var v7423 = v9222 & 255;
  var v3899 = v7422 | v7423;
  var v7424;
  var v9223 = parentObj$$278.FCarry;
  if(v9223) {
    v7424 = 1
  }else {
    v7424 = 0
  }
  var v3900 = v7424;
  parentObj$$278.registersHL = v3899 | v3900;
  parentObj$$278.FCarry = newFCarry$$5;
  parentObj$$278.FHalfCarry = parentObj$$278.FSubtract = false;
  var v7425 = parentObj$$278.registersHL;
  var v3901 = v7425 & 255;
  parentObj$$278.FZero = v3901 == 0;
  return
}
function v354(parentObj$$277) {
  var v3902 = parentObj$$277.registersHL;
  var newFCarry$$4 = v3902 > 32767;
  var v10113 = parentObj$$277.registersHL;
  var v9224 = v10113 << 1;
  var v7426 = v9224 & 65024;
  var v9225;
  var v10114 = parentObj$$277.FCarry;
  if(v10114) {
    v9225 = 256
  }else {
    v9225 = 0
  }
  var v7427 = v9225;
  var v3903 = v7426 | v7427;
  var v7428 = parentObj$$277.registersHL;
  var v3904 = v7428 & 255;
  parentObj$$277.registersHL = v3903 | v3904;
  parentObj$$277.FCarry = newFCarry$$4;
  parentObj$$277.FHalfCarry = parentObj$$277.FSubtract = false;
  var v3905 = parentObj$$277.registersHL;
  parentObj$$277.FZero = v3905 < 256;
  return
}
function v353(parentObj$$276) {
  var v3906 = parentObj$$276.registerE;
  var newFCarry$$3 = v3906 > 127;
  var v9226 = parentObj$$276.registerE;
  var v7429 = v9226 << 1;
  var v3907 = v7429 & 255;
  var v7430;
  var v9227 = parentObj$$276.FCarry;
  if(v9227) {
    v7430 = 1
  }else {
    v7430 = 0
  }
  var v3908 = v7430;
  parentObj$$276.registerE = v3907 | v3908;
  parentObj$$276.FCarry = newFCarry$$3;
  parentObj$$276.FHalfCarry = parentObj$$276.FSubtract = false;
  var v3909 = parentObj$$276.registerE;
  parentObj$$276.FZero = v3909 == 0;
  return
}
function v352(parentObj$$275) {
  var v3910 = parentObj$$275.registerD;
  var newFCarry$$2 = v3910 > 127;
  var v9228 = parentObj$$275.registerD;
  var v7431 = v9228 << 1;
  var v3911 = v7431 & 255;
  var v7432;
  var v9229 = parentObj$$275.FCarry;
  if(v9229) {
    v7432 = 1
  }else {
    v7432 = 0
  }
  var v3912 = v7432;
  parentObj$$275.registerD = v3911 | v3912;
  parentObj$$275.FCarry = newFCarry$$2;
  parentObj$$275.FHalfCarry = parentObj$$275.FSubtract = false;
  var v3913 = parentObj$$275.registerD;
  parentObj$$275.FZero = v3913 == 0;
  return
}
function v351(parentObj$$274) {
  var v3914 = parentObj$$274.registerC;
  var newFCarry$$1 = v3914 > 127;
  var v9230 = parentObj$$274.registerC;
  var v7433 = v9230 << 1;
  var v3915 = v7433 & 255;
  var v7434;
  var v9231 = parentObj$$274.FCarry;
  if(v9231) {
    v7434 = 1
  }else {
    v7434 = 0
  }
  var v3916 = v7434;
  parentObj$$274.registerC = v3915 | v3916;
  parentObj$$274.FCarry = newFCarry$$1;
  parentObj$$274.FHalfCarry = parentObj$$274.FSubtract = false;
  var v3917 = parentObj$$274.registerC;
  parentObj$$274.FZero = v3917 == 0;
  return
}
function v350(parentObj$$273) {
  var v3918 = parentObj$$273.registerB;
  var newFCarry = v3918 > 127;
  var v9232 = parentObj$$273.registerB;
  var v7435 = v9232 << 1;
  var v3919 = v7435 & 255;
  var v7436;
  var v9233 = parentObj$$273.FCarry;
  if(v9233) {
    v7436 = 1
  }else {
    v7436 = 0
  }
  var v3920 = v7436;
  parentObj$$273.registerB = v3919 | v3920;
  parentObj$$273.FCarry = newFCarry;
  parentObj$$273.FHalfCarry = parentObj$$273.FSubtract = false;
  var v3921 = parentObj$$273.registerB;
  parentObj$$273.FZero = v3921 == 0;
  return
}
function v349(parentObj$$272) {
  var v7437 = parentObj$$272.registerA;
  var v3922 = v7437 & 1;
  parentObj$$272.FCarry = v3922 == 1;
  var v7438;
  var v9234 = parentObj$$272.FCarry;
  if(v9234) {
    v7438 = 128
  }else {
    v7438 = 0
  }
  var v3923 = v7438;
  var v7439 = parentObj$$272.registerA;
  var v3924 = v7439 >> 1;
  parentObj$$272.registerA = v3923 | v3924;
  parentObj$$272.FHalfCarry = parentObj$$272.FSubtract = false;
  var v3925 = parentObj$$272.registerA;
  parentObj$$272.FZero = v3925 == 0;
  return
}
function v348(parentObj$$271) {
  var v3926 = parentObj$$271.memoryReader;
  var v3927 = parentObj$$271.registersHL;
  var v3928 = parentObj$$271.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11130 = [[parentObj$$271, v3928], v3926, v3926[v3927]]
  }
  var temp_var$$13 = JAMScript.call(v11130[2], v11130[1], v11130[0]);
  var v3929 = temp_var$$13 & 1;
  parentObj$$271.FCarry = v3929 == 1;
  var v7440;
  var v9235 = parentObj$$271.FCarry;
  if(v9235) {
    v7440 = 128
  }else {
    v7440 = 0
  }
  var v3930 = v7440;
  var v3931 = temp_var$$13 >> 1;
  temp_var$$13 = v3930 | v3931;
  var v3932 = parentObj$$271.memoryWriter;
  var v3933 = parentObj$$271.registersHL;
  var v3934 = parentObj$$271.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11131 = [[parentObj$$271, v3934, temp_var$$13], v3932, v3932[v3933]]
  }
  JAMScript.call(v11131[2], v11131[1], v11131[0]);
  parentObj$$271.FHalfCarry = parentObj$$271.FSubtract = false;
  parentObj$$271.FZero = temp_var$$13 == 0;
  return
}
function v347(parentObj$$270) {
  var v7441 = parentObj$$270.registersHL;
  var v3935 = v7441 & 1;
  parentObj$$270.FCarry = v3935 == 1;
  var v9236 = parentObj$$270.registersHL;
  var v7442 = v9236 & 65280;
  var v9237;
  var v10115 = parentObj$$270.FCarry;
  if(v10115) {
    v9237 = 128
  }else {
    v9237 = 0
  }
  var v7443 = v9237;
  var v3936 = v7442 | v7443;
  var v9238 = parentObj$$270.registersHL;
  var v7444 = v9238 & 255;
  var v3937 = v7444 >> 1;
  parentObj$$270.registersHL = v3936 | v3937;
  parentObj$$270.FHalfCarry = parentObj$$270.FSubtract = false;
  var v7445 = parentObj$$270.registersHL;
  var v3938 = v7445 & 255;
  parentObj$$270.FZero = v3938 == 0;
  return
}
function v346(parentObj$$269) {
  var v7446 = parentObj$$269.registersHL;
  var v3939 = v7446 & 256;
  parentObj$$269.FCarry = v3939 == 256;
  var v9239;
  var v10116 = parentObj$$269.FCarry;
  if(v10116) {
    v9239 = 32768
  }else {
    v9239 = 0
  }
  var v7447 = v9239;
  var v10117 = parentObj$$269.registersHL;
  var v9240 = v10117 >> 1;
  var v7448 = v9240 & 65280;
  var v3940 = v7447 | v7448;
  var v7449 = parentObj$$269.registersHL;
  var v3941 = v7449 & 255;
  parentObj$$269.registersHL = v3940 | v3941;
  parentObj$$269.FHalfCarry = parentObj$$269.FSubtract = false;
  var v3942 = parentObj$$269.registersHL;
  parentObj$$269.FZero = v3942 < 256;
  return
}
function v345(parentObj$$268) {
  var v7450 = parentObj$$268.registerE;
  var v3943 = v7450 & 1;
  parentObj$$268.FCarry = v3943 == 1;
  var v7451;
  var v9241 = parentObj$$268.FCarry;
  if(v9241) {
    v7451 = 128
  }else {
    v7451 = 0
  }
  var v3944 = v7451;
  var v7452 = parentObj$$268.registerE;
  var v3945 = v7452 >> 1;
  parentObj$$268.registerE = v3944 | v3945;
  parentObj$$268.FHalfCarry = parentObj$$268.FSubtract = false;
  var v3946 = parentObj$$268.registerE;
  parentObj$$268.FZero = v3946 == 0;
  return
}
function v344(parentObj$$267) {
  var v7453 = parentObj$$267.registerD;
  var v3947 = v7453 & 1;
  parentObj$$267.FCarry = v3947 == 1;
  var v7454;
  var v9242 = parentObj$$267.FCarry;
  if(v9242) {
    v7454 = 128
  }else {
    v7454 = 0
  }
  var v3948 = v7454;
  var v7455 = parentObj$$267.registerD;
  var v3949 = v7455 >> 1;
  parentObj$$267.registerD = v3948 | v3949;
  parentObj$$267.FHalfCarry = parentObj$$267.FSubtract = false;
  var v3950 = parentObj$$267.registerD;
  parentObj$$267.FZero = v3950 == 0;
  return
}
function v343(parentObj$$266) {
  var v7456 = parentObj$$266.registerC;
  var v3951 = v7456 & 1;
  parentObj$$266.FCarry = v3951 == 1;
  var v7457;
  var v9243 = parentObj$$266.FCarry;
  if(v9243) {
    v7457 = 128
  }else {
    v7457 = 0
  }
  var v3952 = v7457;
  var v7458 = parentObj$$266.registerC;
  var v3953 = v7458 >> 1;
  parentObj$$266.registerC = v3952 | v3953;
  parentObj$$266.FHalfCarry = parentObj$$266.FSubtract = false;
  var v3954 = parentObj$$266.registerC;
  parentObj$$266.FZero = v3954 == 0;
  return
}
function v342(parentObj$$265) {
  var v7459 = parentObj$$265.registerB;
  var v3955 = v7459 & 1;
  parentObj$$265.FCarry = v3955 == 1;
  var v7460;
  var v9244 = parentObj$$265.FCarry;
  if(v9244) {
    v7460 = 128
  }else {
    v7460 = 0
  }
  var v3956 = v7460;
  var v7461 = parentObj$$265.registerB;
  var v3957 = v7461 >> 1;
  parentObj$$265.registerB = v3956 | v3957;
  parentObj$$265.FHalfCarry = parentObj$$265.FSubtract = false;
  var v3958 = parentObj$$265.registerB;
  parentObj$$265.FZero = v3958 == 0;
  return
}
function v341(parentObj$$264) {
  var v3959 = parentObj$$264.registerA;
  parentObj$$264.FCarry = v3959 > 127;
  var v9245 = parentObj$$264.registerA;
  var v7462 = v9245 << 1;
  var v3960 = v7462 & 255;
  var v7463;
  var v9246 = parentObj$$264.FCarry;
  if(v9246) {
    v7463 = 1
  }else {
    v7463 = 0
  }
  var v3961 = v7463;
  parentObj$$264.registerA = v3960 | v3961;
  parentObj$$264.FHalfCarry = parentObj$$264.FSubtract = false;
  var v3962 = parentObj$$264.registerA;
  parentObj$$264.FZero = v3962 == 0;
  return
}
function v340(parentObj$$263) {
  var v3963 = parentObj$$263.memoryReader;
  var v3964 = parentObj$$263.registersHL;
  var v3965 = parentObj$$263.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11132 = [[parentObj$$263, v3965], v3963, v3963[v3964]]
  }
  var temp_var$$12 = JAMScript.call(v11132[2], v11132[1], v11132[0]);
  parentObj$$263.FCarry = temp_var$$12 > 127;
  var v7464 = temp_var$$12 << 1;
  var v3966 = v7464 & 255;
  var v7465;
  var v9247 = parentObj$$263.FCarry;
  if(v9247) {
    v7465 = 1
  }else {
    v7465 = 0
  }
  var v3967 = v7465;
  temp_var$$12 = v3966 | v3967;
  var v3968 = parentObj$$263.memoryWriter;
  var v3969 = parentObj$$263.registersHL;
  var v3970 = parentObj$$263.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11133 = [[parentObj$$263, v3970, temp_var$$12], v3968, v3968[v3969]]
  }
  JAMScript.call(v11133[2], v11133[1], v11133[0]);
  parentObj$$263.FHalfCarry = parentObj$$263.FSubtract = false;
  parentObj$$263.FZero = temp_var$$12 == 0;
  return
}
function v339(parentObj$$262) {
  var v7466 = parentObj$$262.registersHL;
  var v3971 = v7466 & 128;
  parentObj$$262.FCarry = v3971 == 128;
  var v9248 = parentObj$$262.registersHL;
  var v7467 = v9248 & 65280;
  var v10118 = parentObj$$262.registersHL;
  var v9249 = v10118 << 1;
  var v7468 = v9249 & 255;
  var v3972 = v7467 | v7468;
  var v7469;
  var v9250 = parentObj$$262.FCarry;
  if(v9250) {
    v7469 = 1
  }else {
    v7469 = 0
  }
  var v3973 = v7469;
  parentObj$$262.registersHL = v3972 | v3973;
  parentObj$$262.FHalfCarry = parentObj$$262.FSubtract = false;
  var v7470 = parentObj$$262.registersHL;
  var v3974 = v7470 & 255;
  parentObj$$262.FZero = v3974 == 0;
  return
}
function v338(parentObj$$261) {
  var v3975 = parentObj$$261.registersHL;
  parentObj$$261.FCarry = v3975 > 32767;
  var v10119 = parentObj$$261.registersHL;
  var v9251 = v10119 << 1;
  var v7471 = v9251 & 65024;
  var v9252;
  var v10120 = parentObj$$261.FCarry;
  if(v10120) {
    v9252 = 256
  }else {
    v9252 = 0
  }
  var v7472 = v9252;
  var v3976 = v7471 | v7472;
  var v7473 = parentObj$$261.registersHL;
  var v3977 = v7473 & 255;
  parentObj$$261.registersHL = v3976 | v3977;
  parentObj$$261.FHalfCarry = parentObj$$261.FSubtract = false;
  var v3978 = parentObj$$261.registersHL;
  parentObj$$261.FZero = v3978 < 256;
  return
}
function v337(parentObj$$260) {
  var v3979 = parentObj$$260.registerE;
  parentObj$$260.FCarry = v3979 > 127;
  var v9253 = parentObj$$260.registerE;
  var v7474 = v9253 << 1;
  var v3980 = v7474 & 255;
  var v7475;
  var v9254 = parentObj$$260.FCarry;
  if(v9254) {
    v7475 = 1
  }else {
    v7475 = 0
  }
  var v3981 = v7475;
  parentObj$$260.registerE = v3980 | v3981;
  parentObj$$260.FHalfCarry = parentObj$$260.FSubtract = false;
  var v3982 = parentObj$$260.registerE;
  parentObj$$260.FZero = v3982 == 0;
  return
}
function v336(parentObj$$259) {
  var v3983 = parentObj$$259.registerD;
  parentObj$$259.FCarry = v3983 > 127;
  var v9255 = parentObj$$259.registerD;
  var v7476 = v9255 << 1;
  var v3984 = v7476 & 255;
  var v7477;
  var v9256 = parentObj$$259.FCarry;
  if(v9256) {
    v7477 = 1
  }else {
    v7477 = 0
  }
  var v3985 = v7477;
  parentObj$$259.registerD = v3984 | v3985;
  parentObj$$259.FHalfCarry = parentObj$$259.FSubtract = false;
  var v3986 = parentObj$$259.registerD;
  parentObj$$259.FZero = v3986 == 0;
  return
}
function v335(parentObj$$258) {
  var v3987 = parentObj$$258.registerC;
  parentObj$$258.FCarry = v3987 > 127;
  var v9257 = parentObj$$258.registerC;
  var v7478 = v9257 << 1;
  var v3988 = v7478 & 255;
  var v7479;
  var v9258 = parentObj$$258.FCarry;
  if(v9258) {
    v7479 = 1
  }else {
    v7479 = 0
  }
  var v3989 = v7479;
  parentObj$$258.registerC = v3988 | v3989;
  parentObj$$258.FHalfCarry = parentObj$$258.FSubtract = false;
  var v3990 = parentObj$$258.registerC;
  parentObj$$258.FZero = v3990 == 0;
  return
}
function v334(parentObj$$257) {
  var v3991 = parentObj$$257.registerB;
  parentObj$$257.FCarry = v3991 > 127;
  var v9259 = parentObj$$257.registerB;
  var v7480 = v9259 << 1;
  var v3992 = v7480 & 255;
  var v7481;
  var v9260 = parentObj$$257.FCarry;
  if(v9260) {
    v7481 = 1
  }else {
    v7481 = 0
  }
  var v3993 = v7481;
  parentObj$$257.registerB = v3992 | v3993;
  parentObj$$257.FHalfCarry = parentObj$$257.FSubtract = false;
  var v3994 = parentObj$$257.registerB;
  parentObj$$257.FZero = v3994 == 0;
  return
}
function v333(parentObj$$256) {
  var v7482 = parentObj$$256.stackPointer;
  var v3995 = v7482 - 1;
  parentObj$$256.stackPointer = v3995 & 65535;
  var v3996 = parentObj$$256.memoryWriter;
  var v3997 = parentObj$$256.stackPointer;
  var v3998 = parentObj$$256.stackPointer;
  var v7483 = parentObj$$256.programCounter;
  var v3999 = v7483 >> 8;
  JAMScript.call(v3996[v3997], v3996, [parentObj$$256, v3998, v3999]);
  var v7484 = parentObj$$256.stackPointer;
  var v4000 = v7484 - 1;
  parentObj$$256.stackPointer = v4000 & 65535;
  var v4001 = parentObj$$256.memoryWriter;
  var v4002 = parentObj$$256.stackPointer;
  var v4003 = parentObj$$256.stackPointer;
  var v7485 = parentObj$$256.programCounter;
  var v4004 = v7485 & 255;
  JAMScript.call(v4001[v4002], v4001, [parentObj$$256, v4003, v4004]);
  parentObj$$256.programCounter = 56;
  return
}
function v332(parentObj$$255) {
  var v4005 = parentObj$$255.registerA;
  var v7486 = parentObj$$255.memoryReader;
  var v7487 = parentObj$$255.programCounter;
  var v7488 = parentObj$$255.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11134 = [[parentObj$$255, v7488], v7486, v7486[v7487]]
  }
  var v4006 = JAMScript.call(v11134[2], v11134[1], v11134[0]);
  var dirtySum$$43 = v4005 - v4006;
  var v7489 = parentObj$$255.programCounter;
  var v4007 = v7489 + 1;
  parentObj$$255.programCounter = v4007 & 65535;
  var v4008 = dirtySum$$43 & 15;
  var v7490 = parentObj$$255.registerA;
  var v4009 = v7490 & 15;
  parentObj$$255.FHalfCarry = v4008 > v4009;
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
  var v10490 = parentObj$$252.IRQEnableDelay;
  var v10121 = v10490 == 2;
  var v10492 = !v10121;
  if(v10492) {
    var v10670 = parentObj$$252.memoryReader;
    var v10671 = parentObj$$252.programCounter;
    var v10672 = parentObj$$252.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11135 = [[parentObj$$252, v10672], v10670, v10670[v10671]]
    }
    var v10491 = JAMScript.call(v11135[2], v11135[1], v11135[0]);
    v10121 = v10491 == 118
  }
  var v9261 = v10121;
  if(v9261) {
    v7491 = 1
  }else {
    v7491 = 2
  }
  v4010.IRQEnableDelay = v7491;
  return
}
function v328(parentObj$$251) {
  var v4011 = parentObj$$251;
  var v10727 = parentObj$$251.programCounter;
  var v10673 = v10727 + 1;
  var v10493 = v10673 & 65535;
  var v10122 = JAMScript.call(parentObj$$251.memoryRead, parentObj$$251, [v10493]);
  var v9262 = v10122 << 8;
  var v10123 = parentObj$$251.memoryReader;
  var v10124 = parentObj$$251.programCounter;
  var v10125 = parentObj$$251.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11136 = [[parentObj$$251, v10125], v10123, v10123[v10124]]
  }
  var v9263 = JAMScript.call(v11136[2], v11136[1], v11136[0]);
  var v7492 = v9262 | v9263;
  var v10921 = JAMScript.call(parentObj$$251.memoryRead, parentObj$$251, [v7492]);
  v4011.registerA = v10921;
  var v7493 = parentObj$$251.programCounter;
  var v4012 = v7493 + 2;
  parentObj$$251.programCounter = v4012 & 65535;
  return
}
function v327(parentObj$$250) {
  parentObj$$250.stackPointer = parentObj$$250.registersHL;
  return
}
function v326(parentObj$$249) {
  var v9264 = parentObj$$249.memoryReader;
  var v9265 = parentObj$$249.programCounter;
  var v9266 = parentObj$$249.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11137 = [[parentObj$$249, v9266], v9264, v9264[v9265]]
  }
  var v7494 = JAMScript.call(v11137[2], v11137[1], v11137[0]);
  var v4013 = v7494 << 24;
  var temp_var$$11 = v4013 >> 24;
  var v7495 = parentObj$$249.programCounter;
  var v4014 = v7495 + 1;
  parentObj$$249.programCounter = v4014 & 65535;
  var v7496 = parentObj$$249.stackPointer;
  var v4015 = v7496 + temp_var$$11;
  parentObj$$249.registersHL = v4015 & 65535;
  var v7497 = parentObj$$249.stackPointer;
  var v4016 = v7497 ^ temp_var$$11;
  var v4017 = parentObj$$249.registersHL;
  temp_var$$11 = v4016 ^ v4017;
  var v4018 = temp_var$$11 & 256;
  parentObj$$249.FCarry = v4018 == 256;
  var v4019 = temp_var$$11 & 16;
  parentObj$$249.FHalfCarry = v4019 == 16;
  parentObj$$249.FZero = parentObj$$249.FSubtract = false;
  return
}
function v325(parentObj$$248) {
  var v7498 = parentObj$$248.stackPointer;
  var v4020 = v7498 - 1;
  parentObj$$248.stackPointer = v4020 & 65535;
  var v4021 = parentObj$$248.memoryWriter;
  var v4022 = parentObj$$248.stackPointer;
  var v4023 = parentObj$$248.stackPointer;
  var v7499 = parentObj$$248.programCounter;
  var v4024 = v7499 >> 8;
  JAMScript.call(v4021[v4022], v4021, [parentObj$$248, v4023, v4024]);
  var v7500 = parentObj$$248.stackPointer;
  var v4025 = v7500 - 1;
  parentObj$$248.stackPointer = v4025 & 65535;
  var v4026 = parentObj$$248.memoryWriter;
  var v4027 = parentObj$$248.stackPointer;
  var v4028 = parentObj$$248.stackPointer;
  var v7501 = parentObj$$248.programCounter;
  var v4029 = v7501 & 255;
  JAMScript.call(v4026[v4027], v4026, [parentObj$$248, v4028, v4029]);
  parentObj$$248.programCounter = 48;
  return
}
function v324(parentObj$$247) {
  var v4030 = parentObj$$247;
  var v9267 = v4030.registerA;
  var v10126 = parentObj$$247.memoryReader;
  var v10127 = parentObj$$247.programCounter;
  var v10128 = parentObj$$247.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11138 = [[parentObj$$247, v10128], v10126, v10126[v10127]]
  }
  var v9268 = JAMScript.call(v11138[2], v11138[1], v11138[0]);
  v4030.registerA = v9267 | v9268;
  var v4031 = parentObj$$247.registerA;
  parentObj$$247.FZero = v4031 == 0;
  var v7502 = parentObj$$247.programCounter;
  var v4032 = v7502 + 1;
  parentObj$$247.programCounter = v4032 & 65535;
  parentObj$$247.FSubtract = parentObj$$247.FCarry = parentObj$$247.FHalfCarry = false;
  return
}
function v323(parentObj$$246) {
  var v7503 = parentObj$$246.stackPointer;
  var v4033 = v7503 - 1;
  parentObj$$246.stackPointer = v4033 & 65535;
  var v4034 = parentObj$$246.memoryWriter;
  var v4035 = parentObj$$246.stackPointer;
  var v4036 = parentObj$$246.stackPointer;
  var v4037 = parentObj$$246.registerA;
  JAMScript.call(v4034[v4035], v4034, [parentObj$$246, v4036, v4037]);
  var v7504 = parentObj$$246.stackPointer;
  var v4038 = v7504 - 1;
  parentObj$$246.stackPointer = v4038 & 65535;
  var v4039 = parentObj$$246.memoryWriter;
  var v4040 = parentObj$$246.stackPointer;
  var v4041 = parentObj$$246.stackPointer;
  var v10494;
  var v10674 = parentObj$$246.FZero;
  if(v10674) {
    v10494 = 128
  }else {
    v10494 = 0
  }
  var v10129 = v10494;
  var v10495;
  var v10675 = parentObj$$246.FSubtract;
  if(v10675) {
    v10495 = 64
  }else {
    v10495 = 0
  }
  var v10130 = v10495;
  var v9269 = v10129 | v10130;
  var v10131;
  var v10496 = parentObj$$246.FHalfCarry;
  if(v10496) {
    v10131 = 32
  }else {
    v10131 = 0
  }
  var v9270 = v10131;
  var v7505 = v9269 | v9270;
  var v9271;
  var v10132 = parentObj$$246.FCarry;
  if(v10132) {
    v9271 = 16
  }else {
    v9271 = 0
  }
  var v7506 = v9271;
  var v4042 = v7505 | v7506;
  JAMScript.call(v4039[v4040], v4039, [parentObj$$246, v4041, v4042]);
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
  var v7508 = parentObj$$243.registerC;
  var v7509 = parentObj$$243.registerC;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11139 = [[parentObj$$243, v7509], v7507, v7507[v7508]]
  }
  var v10922 = JAMScript.call(v11139[2], v11139[1], v11139[0]);
  v4043.registerA = v10922;
  return
}
function v319(parentObj$$242) {
  var v4044 = parentObj$$242.memoryReader;
  var v4045 = parentObj$$242.stackPointer;
  var v4046 = parentObj$$242.stackPointer;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11140 = [[parentObj$$242, v4046], v4044, v4044[v4045]]
  }
  var temp_var$$10 = JAMScript.call(v11140[2], v11140[1], v11140[0]);
  parentObj$$242.FZero = temp_var$$10 > 127;
  var v4047 = temp_var$$10 & 64;
  parentObj$$242.FSubtract = v4047 == 64;
  var v4048 = temp_var$$10 & 32;
  parentObj$$242.FHalfCarry = v4048 == 32;
  var v4049 = temp_var$$10 & 16;
  parentObj$$242.FCarry = v4049 == 16;
  var v4050 = parentObj$$242;
  var v10133 = parentObj$$242.stackPointer;
  var v9272 = v10133 + 1;
  var v7510 = v9272 & 65535;
  var v10923 = JAMScript.call(parentObj$$242.memoryRead, parentObj$$242, [v7510]);
  v4050.registerA = v10923;
  var v7511 = parentObj$$242.stackPointer;
  var v4051 = v7511 + 2;
  parentObj$$242.stackPointer = v4051 & 65535;
  return
}
function v318(parentObj$$241) {
  var v4052 = parentObj$$241;
  var v9273 = parentObj$$241.memoryReader;
  var v9274 = parentObj$$241.programCounter;
  var v9275 = parentObj$$241.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11141 = [[parentObj$$241, v9275], v9273, v9273[v9274]]
  }
  var v7512 = JAMScript.call(v11141[2], v11141[1], v11141[0]);
  var v10924 = JAMScript.call(parentObj$$241.memoryHighRead, parentObj$$241, [v7512]);
  v4052.registerA = v10924;
  var v7513 = parentObj$$241.programCounter;
  var v4053 = v7513 + 1;
  parentObj$$241.programCounter = v4053 & 65535;
  return
}
function v317(parentObj$$240) {
  var v7514 = parentObj$$240.stackPointer;
  var v4054 = v7514 - 1;
  parentObj$$240.stackPointer = v4054 & 65535;
  var v4055 = parentObj$$240.memoryWriter;
  var v4056 = parentObj$$240.stackPointer;
  var v4057 = parentObj$$240.stackPointer;
  var v7515 = parentObj$$240.programCounter;
  var v4058 = v7515 >> 8;
  JAMScript.call(v4055[v4056], v4055, [parentObj$$240, v4057, v4058]);
  var v7516 = parentObj$$240.stackPointer;
  var v4059 = v7516 - 1;
  parentObj$$240.stackPointer = v4059 & 65535;
  var v4060 = parentObj$$240.memoryWriter;
  var v4061 = parentObj$$240.stackPointer;
  var v4062 = parentObj$$240.stackPointer;
  var v7517 = parentObj$$240.programCounter;
  var v4063 = v7517 & 255;
  JAMScript.call(v4060[v4061], v4060, [parentObj$$240, v4062, v4063]);
  parentObj$$240.programCounter = 40;
  return
}
function v316(parentObj$$239) {
  var v4064 = parentObj$$239;
  var v9276 = v4064.registerA;
  var v10134 = parentObj$$239.memoryReader;
  var v10135 = parentObj$$239.programCounter;
  var v10136 = parentObj$$239.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11142 = [[parentObj$$239, v10136], v10134, v10134[v10135]]
  }
  var v9277 = JAMScript.call(v11142[2], v11142[1], v11142[0]);
  v4064.registerA = v9276 ^ v9277;
  var v7518 = parentObj$$239.programCounter;
  var v4065 = v7518 + 1;
  parentObj$$239.programCounter = v4065 & 65535;
  var v4066 = parentObj$$239.registerA;
  parentObj$$239.FZero = v4066 == 0;
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
  var v10676 = parentObj$$235.programCounter;
  var v10497 = v10676 + 1;
  var v10137 = v10497 & 65535;
  var v9278 = JAMScript.call(parentObj$$235.memoryRead, parentObj$$235, [v10137]);
  var v7519 = v9278 << 8;
  var v9279 = parentObj$$235.memoryReader;
  var v9280 = parentObj$$235.programCounter;
  var v9281 = parentObj$$235.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11143 = [[parentObj$$235, v9281], v9279, v9279[v9280]]
  }
  var v7520 = JAMScript.call(v11143[2], v11143[1], v11143[0]);
  var v4067 = v7519 | v7520;
  var v4068 = parentObj$$235.registerA;
  JAMScript.call(parentObj$$235.memoryWrite, parentObj$$235, [v4067, v4068]);
  var v7521 = parentObj$$235.programCounter;
  var v4069 = v7521 + 2;
  parentObj$$235.programCounter = v4069 & 65535;
  return
}
function v311(parentObj$$234) {
  parentObj$$234.programCounter = parentObj$$234.registersHL;
  return
}
function v310(parentObj$$233) {
  var v9282 = parentObj$$233.memoryReader;
  var v9283 = parentObj$$233.programCounter;
  var v9284 = parentObj$$233.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11144 = [[parentObj$$233, v9284], v9282, v9282[v9283]]
  }
  var v7522 = JAMScript.call(v11144[2], v11144[1], v11144[0]);
  var v4070 = v7522 << 24;
  var temp_value2 = v4070 >> 24;
  var v7523 = parentObj$$233.programCounter;
  var v4071 = v7523 + 1;
  parentObj$$233.programCounter = v4071 & 65535;
  var v7524 = parentObj$$233.stackPointer;
  var v4072 = v7524 + temp_value2;
  var temp_value = v4072 & 65535;
  var v7525 = parentObj$$233.stackPointer;
  var v4073 = v7525 ^ temp_value2;
  temp_value2 = v4073 ^ temp_value;
  parentObj$$233.stackPointer = temp_value;
  var v4074 = temp_value2 & 256;
  parentObj$$233.FCarry = v4074 == 256;
  var v4075 = temp_value2 & 16;
  parentObj$$233.FHalfCarry = v4075 == 16;
  parentObj$$233.FZero = parentObj$$233.FSubtract = false;
  return
}
function v309(parentObj$$232) {
  var v7526 = parentObj$$232.stackPointer;
  var v4076 = v7526 - 1;
  parentObj$$232.stackPointer = v4076 & 65535;
  var v4077 = parentObj$$232.memoryWriter;
  var v4078 = parentObj$$232.stackPointer;
  var v4079 = parentObj$$232.stackPointer;
  var v7527 = parentObj$$232.programCounter;
  var v4080 = v7527 >> 8;
  JAMScript.call(v4077[v4078], v4077, [parentObj$$232, v4079, v4080]);
  var v7528 = parentObj$$232.stackPointer;
  var v4081 = v7528 - 1;
  parentObj$$232.stackPointer = v4081 & 65535;
  var v4082 = parentObj$$232.memoryWriter;
  var v4083 = parentObj$$232.stackPointer;
  var v4084 = parentObj$$232.stackPointer;
  var v7529 = parentObj$$232.programCounter;
  var v4085 = v7529 & 255;
  JAMScript.call(v4082[v4083], v4082, [parentObj$$232, v4084, v4085]);
  parentObj$$232.programCounter = 32;
  return
}
function v308(parentObj$$231) {
  var v4086 = parentObj$$231;
  var v9285 = v4086.registerA;
  var v10138 = parentObj$$231.memoryReader;
  var v10139 = parentObj$$231.programCounter;
  var v10140 = parentObj$$231.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11145 = [[parentObj$$231, v10140], v10138, v10138[v10139]]
  }
  var v9286 = JAMScript.call(v11145[2], v11145[1], v11145[0]);
  v4086.registerA = v9285 & v9286;
  var v7530 = parentObj$$231.programCounter;
  var v4087 = v7530 + 1;
  parentObj$$231.programCounter = v4087 & 65535;
  var v4088 = parentObj$$231.registerA;
  parentObj$$231.FZero = v4088 == 0;
  parentObj$$231.FHalfCarry = true;
  parentObj$$231.FSubtract = parentObj$$231.FCarry = false;
  return
}
function v307(parentObj$$230) {
  var v7531 = parentObj$$230.stackPointer;
  var v4089 = v7531 - 1;
  parentObj$$230.stackPointer = v4089 & 65535;
  var v4090 = parentObj$$230.memoryWriter;
  var v4091 = parentObj$$230.stackPointer;
  var v4092 = parentObj$$230.stackPointer;
  var v7532 = parentObj$$230.registersHL;
  var v4093 = v7532 >> 8;
  JAMScript.call(v4090[v4091], v4090, [parentObj$$230, v4092, v4093]);
  var v7533 = parentObj$$230.stackPointer;
  var v4094 = v7533 - 1;
  parentObj$$230.stackPointer = v4094 & 65535;
  var v4095 = parentObj$$230.memoryWriter;
  var v4096 = parentObj$$230.stackPointer;
  var v4097 = parentObj$$230.stackPointer;
  var v7534 = parentObj$$230.registersHL;
  var v4098 = v7534 & 255;
  JAMScript.call(v4095[v4096], v4095, [parentObj$$230, v4097, v4098]);
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
  var v4100 = parentObj$$227.registerC;
  var v4101 = parentObj$$227.registerC;
  var v4102 = parentObj$$227.registerA;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11146 = [[parentObj$$227, v4101, v4102], v4099, v4099[v4100]]
  }
  JAMScript.call(v11146[2], v11146[1], v11146[0]);
  return
}
function v303(parentObj$$226) {
  var v4103 = parentObj$$226;
  var v10677 = parentObj$$226.stackPointer;
  var v10498 = v10677 + 1;
  var v10141 = v10498 & 65535;
  var v9287 = JAMScript.call(parentObj$$226.memoryRead, parentObj$$226, [v10141]);
  var v7535 = v9287 << 8;
  var v9288 = parentObj$$226.memoryReader;
  var v9289 = parentObj$$226.stackPointer;
  var v9290 = parentObj$$226.stackPointer;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11147 = [[parentObj$$226, v9290], v9288, v9288[v9289]]
  }
  var v7536 = JAMScript.call(v11147[2], v11147[1], v11147[0]);
  v4103.registersHL = v7535 | v7536;
  var v7537 = parentObj$$226.stackPointer;
  var v4104 = v7537 + 2;
  parentObj$$226.stackPointer = v4104 & 65535;
  return
}
function v302(parentObj$$225) {
  var v7538 = parentObj$$225.memoryReader;
  var v7539 = parentObj$$225.programCounter;
  var v7540 = parentObj$$225.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11148 = [[parentObj$$225, v7540], v7538, v7538[v7539]]
  }
  var v4105 = JAMScript.call(v11148[2], v11148[1], v11148[0]);
  var v4106 = parentObj$$225.registerA;
  JAMScript.call(parentObj$$225.memoryHighWrite, parentObj$$225, [v4105, v4106]);
  var v7541 = parentObj$$225.programCounter;
  var v4107 = v7541 + 1;
  parentObj$$225.programCounter = v4107 & 65535;
  return
}
function v301(parentObj$$224) {
  var v7542 = parentObj$$224.stackPointer;
  var v4108 = v7542 - 1;
  parentObj$$224.stackPointer = v4108 & 65535;
  var v4109 = parentObj$$224.memoryWriter;
  var v4110 = parentObj$$224.stackPointer;
  var v4111 = parentObj$$224.stackPointer;
  var v7543 = parentObj$$224.programCounter;
  var v4112 = v7543 >> 8;
  JAMScript.call(v4109[v4110], v4109, [parentObj$$224, v4111, v4112]);
  var v7544 = parentObj$$224.stackPointer;
  var v4113 = v7544 - 1;
  parentObj$$224.stackPointer = v4113 & 65535;
  var v4114 = parentObj$$224.memoryWriter;
  var v4115 = parentObj$$224.stackPointer;
  var v4116 = parentObj$$224.stackPointer;
  var v7545 = parentObj$$224.programCounter;
  var v4117 = v7545 & 255;
  JAMScript.call(v4114[v4115], v4114, [parentObj$$224, v4116, v4117]);
  parentObj$$224.programCounter = 24;
  return
}
function v300(parentObj$$223) {
  var v4118 = parentObj$$223.memoryReader;
  var v4119 = parentObj$$223.programCounter;
  var v4120 = parentObj$$223.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11149 = [[parentObj$$223, v4120], v4118, v4118[v4119]]
  }
  var temp_var$$9 = JAMScript.call(v11149[2], v11149[1], v11149[0]);
  var v7546 = parentObj$$223.programCounter;
  var v4121 = v7546 + 1;
  parentObj$$223.programCounter = v4121 & 65535;
  var v7547 = parentObj$$223.registerA;
  var v4122 = v7547 - temp_var$$9;
  var v7548;
  var v9291 = parentObj$$223.FCarry;
  if(v9291) {
    v7548 = 1
  }else {
    v7548 = 0
  }
  var v4123 = v7548;
  var dirtySum$$42 = v4122 - v4123;
  var v10142 = parentObj$$223.registerA;
  var v9292 = v10142 & 15;
  var v9293 = temp_var$$9 & 15;
  var v7549 = v9292 - v9293;
  var v9294;
  var v10143 = parentObj$$223.FCarry;
  if(v10143) {
    v9294 = 1
  }else {
    v9294 = 0
  }
  var v7550 = v9294;
  var v4124 = v7549 - v7550;
  parentObj$$223.FHalfCarry = v4124 < 0;
  parentObj$$223.FCarry = dirtySum$$42 < 0;
  parentObj$$223.registerA = dirtySum$$42 & 255;
  var v4125 = parentObj$$223.registerA;
  parentObj$$223.FZero = v4125 == 0;
  parentObj$$223.FSubtract = true;
  return
}
function v299(parentObj$$222) {
  cout("Illegal op code 0xDD called, pausing emulation.", 2);
  pause();
  return
}
function v298(parentObj$$221) {
  var v4140 = parentObj$$221.FCarry;
  if(v4140) {
    var v10499 = parentObj$$221.programCounter;
    var v10144 = v10499 + 1;
    var v9295 = v10144 & 65535;
    var v7551 = JAMScript.call(parentObj$$221.memoryRead, parentObj$$221, [v9295]);
    var v4126 = v7551 << 8;
    var v7552 = parentObj$$221.memoryReader;
    var v7553 = parentObj$$221.programCounter;
    var v7554 = parentObj$$221.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11150 = [[parentObj$$221, v7554], v7552, v7552[v7553]]
    }
    var v4127 = JAMScript.call(v11150[2], v11150[1], v11150[0]);
    var temp_pc$$4 = v4126 | v4127;
    var v7555 = parentObj$$221.programCounter;
    var v4128 = v7555 + 2;
    parentObj$$221.programCounter = v4128 & 65535;
    var v7556 = parentObj$$221.stackPointer;
    var v4129 = v7556 - 1;
    parentObj$$221.stackPointer = v4129 & 65535;
    var v4130 = parentObj$$221.memoryWriter;
    var v4131 = parentObj$$221.stackPointer;
    var v4132 = parentObj$$221.stackPointer;
    var v7557 = parentObj$$221.programCounter;
    var v4133 = v7557 >> 8;
    JAMScript.call(v4130[v4131], v4130, [parentObj$$221, v4132, v4133]);
    var v7558 = parentObj$$221.stackPointer;
    var v4134 = v7558 - 1;
    parentObj$$221.stackPointer = v4134 & 65535;
    var v4135 = parentObj$$221.memoryWriter;
    var v4136 = parentObj$$221.stackPointer;
    var v4137 = parentObj$$221.stackPointer;
    var v7559 = parentObj$$221.programCounter;
    var v4138 = v7559 & 255;
    JAMScript.call(v4135[v4136], v4135, [parentObj$$221, v4137, v4138]);
    parentObj$$221.programCounter = temp_pc$$4;
    var v7560 = parentObj$$221.CPUTicks;
    parentObj$$221.CPUTicks = v7560 + 12
  }else {
    var v7561 = parentObj$$221.programCounter;
    var v4139 = v7561 + 2;
    parentObj$$221.programCounter = v4139 & 65535
  }
  return
}
function v297(parentObj$$220) {
  cout("Illegal op code 0xDB called, pausing emulation.", 2);
  pause();
  return
}
function v296(parentObj$$219) {
  var v4143 = parentObj$$219.FCarry;
  if(v4143) {
    var v4141 = parentObj$$219;
    var v10678 = parentObj$$219.programCounter;
    var v10500 = v10678 + 1;
    var v10145 = v10500 & 65535;
    var v9296 = JAMScript.call(parentObj$$219.memoryRead, parentObj$$219, [v10145]);
    var v7562 = v9296 << 8;
    var v9297 = parentObj$$219.memoryReader;
    var v9298 = parentObj$$219.programCounter;
    var v9299 = parentObj$$219.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11151 = [[parentObj$$219, v9299], v9297, v9297[v9298]]
    }
    var v7563 = JAMScript.call(v11151[2], v11151[1], v11151[0]);
    v4141.programCounter = v7562 | v7563;
    var v7564 = parentObj$$219.CPUTicks;
    parentObj$$219.CPUTicks = v7564 + 4
  }else {
    var v7565 = parentObj$$219.programCounter;
    var v4142 = v7565 + 2;
    parentObj$$219.programCounter = v4142 & 65535
  }
  return
}
function v295(parentObj$$218) {
  var v4144 = parentObj$$218;
  var v10679 = parentObj$$218.stackPointer;
  var v10501 = v10679 + 1;
  var v10146 = v10501 & 65535;
  var v9300 = JAMScript.call(parentObj$$218.memoryRead, parentObj$$218, [v10146]);
  var v7566 = v9300 << 8;
  var v9301 = parentObj$$218.memoryReader;
  var v9302 = parentObj$$218.stackPointer;
  var v9303 = parentObj$$218.stackPointer;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11152 = [[parentObj$$218, v9303], v9301, v9301[v9302]]
  }
  var v7567 = JAMScript.call(v11152[2], v11152[1], v11152[0]);
  v4144.programCounter = v7566 | v7567;
  var v7568 = parentObj$$218.stackPointer;
  var v4145 = v7568 + 2;
  parentObj$$218.stackPointer = v4145 & 65535;
  var v4146 = parentObj$$218;
  var v7569;
  var v10502 = parentObj$$218.IRQEnableDelay;
  var v10147 = v10502 == 2;
  var v10504 = !v10147;
  if(v10504) {
    var v10680 = parentObj$$218.memoryReader;
    var v10681 = parentObj$$218.programCounter;
    var v10682 = parentObj$$218.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11153 = [[parentObj$$218, v10682], v10680, v10680[v10681]]
    }
    var v10503 = JAMScript.call(v11153[2], v11153[1], v11153[0]);
    v10147 = v10503 == 118
  }
  var v9304 = v10147;
  if(v9304) {
    v7569 = 1
  }else {
    v7569 = 2
  }
  v4146.IRQEnableDelay = v7569;
  return
}
function v294(parentObj$$217) {
  var v4149 = parentObj$$217.FCarry;
  if(v4149) {
    var v4147 = parentObj$$217;
    var v10683 = parentObj$$217.stackPointer;
    var v10505 = v10683 + 1;
    var v10148 = v10505 & 65535;
    var v9305 = JAMScript.call(parentObj$$217.memoryRead, parentObj$$217, [v10148]);
    var v7570 = v9305 << 8;
    var v9306 = parentObj$$217.memoryReader;
    var v9307 = parentObj$$217.stackPointer;
    var v9308 = parentObj$$217.stackPointer;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11154 = [[parentObj$$217, v9308], v9306, v9306[v9307]]
    }
    var v7571 = JAMScript.call(v11154[2], v11154[1], v11154[0]);
    v4147.programCounter = v7570 | v7571;
    var v7572 = parentObj$$217.stackPointer;
    var v4148 = v7572 + 2;
    parentObj$$217.stackPointer = v4148 & 65535;
    var v7573 = parentObj$$217.CPUTicks;
    parentObj$$217.CPUTicks = v7573 + 12
  }
  return
}
function v293(parentObj$$216) {
  var v7574 = parentObj$$216.stackPointer;
  var v4150 = v7574 - 1;
  parentObj$$216.stackPointer = v4150 & 65535;
  var v4151 = parentObj$$216.memoryWriter;
  var v4152 = parentObj$$216.stackPointer;
  var v4153 = parentObj$$216.stackPointer;
  var v7575 = parentObj$$216.programCounter;
  var v4154 = v7575 >> 8;
  JAMScript.call(v4151[v4152], v4151, [parentObj$$216, v4153, v4154]);
  var v7576 = parentObj$$216.stackPointer;
  var v4155 = v7576 - 1;
  parentObj$$216.stackPointer = v4155 & 65535;
  var v4156 = parentObj$$216.memoryWriter;
  var v4157 = parentObj$$216.stackPointer;
  var v4158 = parentObj$$216.stackPointer;
  var v7577 = parentObj$$216.programCounter;
  var v4159 = v7577 & 255;
  JAMScript.call(v4156[v4157], v4156, [parentObj$$216, v4158, v4159]);
  parentObj$$216.programCounter = 16;
  return
}
function v292(parentObj$$215) {
  var v4160 = parentObj$$215.registerA;
  var v7578 = parentObj$$215.memoryReader;
  var v7579 = parentObj$$215.programCounter;
  var v7580 = parentObj$$215.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11155 = [[parentObj$$215, v7580], v7578, v7578[v7579]]
  }
  var v4161 = JAMScript.call(v11155[2], v11155[1], v11155[0]);
  var dirtySum$$41 = v4160 - v4161;
  var v7581 = parentObj$$215.programCounter;
  var v4162 = v7581 + 1;
  parentObj$$215.programCounter = v4162 & 65535;
  var v7582 = parentObj$$215.registerA;
  var v4163 = v7582 & 15;
  var v4164 = dirtySum$$41 & 15;
  parentObj$$215.FHalfCarry = v4163 < v4164;
  parentObj$$215.FCarry = dirtySum$$41 < 0;
  parentObj$$215.registerA = dirtySum$$41 & 255;
  parentObj$$215.FZero = dirtySum$$41 == 0;
  parentObj$$215.FSubtract = true;
  return
}
function v291(parentObj$$214) {
  var v7583 = parentObj$$214.stackPointer;
  var v4165 = v7583 - 1;
  parentObj$$214.stackPointer = v4165 & 65535;
  var v4166 = parentObj$$214.memoryWriter;
  var v4167 = parentObj$$214.stackPointer;
  var v4168 = parentObj$$214.stackPointer;
  var v4169 = parentObj$$214.registerD;
  JAMScript.call(v4166[v4167], v4166, [parentObj$$214, v4168, v4169]);
  var v7584 = parentObj$$214.stackPointer;
  var v4170 = v7584 - 1;
  parentObj$$214.stackPointer = v4170 & 65535;
  var v4171 = parentObj$$214.memoryWriter;
  var v4172 = parentObj$$214.stackPointer;
  var v4173 = parentObj$$214.stackPointer;
  var v4174 = parentObj$$214.registerE;
  JAMScript.call(v4171[v4172], v4171, [parentObj$$214, v4173, v4174]);
  return
}
function v290(parentObj$$213) {
  var v7585 = parentObj$$213.FCarry;
  var v4189 = !v7585;
  if(v4189) {
    var v10506 = parentObj$$213.programCounter;
    var v10149 = v10506 + 1;
    var v9309 = v10149 & 65535;
    var v7586 = JAMScript.call(parentObj$$213.memoryRead, parentObj$$213, [v9309]);
    var v4175 = v7586 << 8;
    var v7587 = parentObj$$213.memoryReader;
    var v7588 = parentObj$$213.programCounter;
    var v7589 = parentObj$$213.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11156 = [[parentObj$$213, v7589], v7587, v7587[v7588]]
    }
    var v4176 = JAMScript.call(v11156[2], v11156[1], v11156[0]);
    var temp_pc$$3 = v4175 | v4176;
    var v7590 = parentObj$$213.programCounter;
    var v4177 = v7590 + 2;
    parentObj$$213.programCounter = v4177 & 65535;
    var v7591 = parentObj$$213.stackPointer;
    var v4178 = v7591 - 1;
    parentObj$$213.stackPointer = v4178 & 65535;
    var v4179 = parentObj$$213.memoryWriter;
    var v4180 = parentObj$$213.stackPointer;
    var v4181 = parentObj$$213.stackPointer;
    var v7592 = parentObj$$213.programCounter;
    var v4182 = v7592 >> 8;
    JAMScript.call(v4179[v4180], v4179, [parentObj$$213, v4181, v4182]);
    var v7593 = parentObj$$213.stackPointer;
    var v4183 = v7593 - 1;
    parentObj$$213.stackPointer = v4183 & 65535;
    var v4184 = parentObj$$213.memoryWriter;
    var v4185 = parentObj$$213.stackPointer;
    var v4186 = parentObj$$213.stackPointer;
    var v7594 = parentObj$$213.programCounter;
    var v4187 = v7594 & 255;
    JAMScript.call(v4184[v4185], v4184, [parentObj$$213, v4186, v4187]);
    parentObj$$213.programCounter = temp_pc$$3;
    var v7595 = parentObj$$213.CPUTicks;
    parentObj$$213.CPUTicks = v7595 + 12
  }else {
    var v7596 = parentObj$$213.programCounter;
    var v4188 = v7596 + 2;
    parentObj$$213.programCounter = v4188 & 65535
  }
  return
}
function v289(parentObj$$212) {
  cout("Illegal op code 0xD3 called, pausing emulation.", 2);
  pause();
  return
}
function v288(parentObj$$211) {
  var v7597 = parentObj$$211.FCarry;
  var v4192 = !v7597;
  if(v4192) {
    var v4190 = parentObj$$211;
    var v10684 = parentObj$$211.programCounter;
    var v10507 = v10684 + 1;
    var v10150 = v10507 & 65535;
    var v9310 = JAMScript.call(parentObj$$211.memoryRead, parentObj$$211, [v10150]);
    var v7598 = v9310 << 8;
    var v9311 = parentObj$$211.memoryReader;
    var v9312 = parentObj$$211.programCounter;
    var v9313 = parentObj$$211.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11157 = [[parentObj$$211, v9313], v9311, v9311[v9312]]
    }
    var v7599 = JAMScript.call(v11157[2], v11157[1], v11157[0]);
    v4190.programCounter = v7598 | v7599;
    var v7600 = parentObj$$211.CPUTicks;
    parentObj$$211.CPUTicks = v7600 + 4
  }else {
    var v7601 = parentObj$$211.programCounter;
    var v4191 = v7601 + 2;
    parentObj$$211.programCounter = v4191 & 65535
  }
  return
}
function v287(parentObj$$210) {
  var v4193 = parentObj$$210;
  var v7602 = parentObj$$210.memoryReader;
  var v7603 = parentObj$$210.stackPointer;
  var v7604 = parentObj$$210.stackPointer;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11158 = [[parentObj$$210, v7604], v7602, v7602[v7603]]
  }
  var v10925 = JAMScript.call(v11158[2], v11158[1], v11158[0]);
  v4193.registerE = v10925;
  var v4194 = parentObj$$210;
  var v10151 = parentObj$$210.stackPointer;
  var v9314 = v10151 + 1;
  var v7605 = v9314 & 65535;
  var v10926 = JAMScript.call(parentObj$$210.memoryRead, parentObj$$210, [v7605]);
  v4194.registerD = v10926;
  var v7606 = parentObj$$210.stackPointer;
  var v4195 = v7606 + 2;
  parentObj$$210.stackPointer = v4195 & 65535;
  return
}
function v286(parentObj$$209) {
  var v7607 = parentObj$$209.FCarry;
  var v4198 = !v7607;
  if(v4198) {
    var v4196 = parentObj$$209;
    var v10685 = parentObj$$209.stackPointer;
    var v10508 = v10685 + 1;
    var v10152 = v10508 & 65535;
    var v9315 = JAMScript.call(parentObj$$209.memoryRead, parentObj$$209, [v10152]);
    var v7608 = v9315 << 8;
    var v9316 = parentObj$$209.memoryReader;
    var v9317 = parentObj$$209.stackPointer;
    var v9318 = parentObj$$209.stackPointer;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11159 = [[parentObj$$209, v9318], v9316, v9316[v9317]]
    }
    var v7609 = JAMScript.call(v11159[2], v11159[1], v11159[0]);
    v4196.programCounter = v7608 | v7609;
    var v7610 = parentObj$$209.stackPointer;
    var v4197 = v7610 + 2;
    parentObj$$209.stackPointer = v4197 & 65535;
    var v7611 = parentObj$$209.CPUTicks;
    parentObj$$209.CPUTicks = v7611 + 12
  }
  return
}
function v285(parentObj$$208) {
  var v7612 = parentObj$$208.stackPointer;
  var v4199 = v7612 - 1;
  parentObj$$208.stackPointer = v4199 & 65535;
  var v4200 = parentObj$$208.memoryWriter;
  var v4201 = parentObj$$208.stackPointer;
  var v4202 = parentObj$$208.stackPointer;
  var v7613 = parentObj$$208.programCounter;
  var v4203 = v7613 >> 8;
  JAMScript.call(v4200[v4201], v4200, [parentObj$$208, v4202, v4203]);
  var v7614 = parentObj$$208.stackPointer;
  var v4204 = v7614 - 1;
  parentObj$$208.stackPointer = v4204 & 65535;
  var v4205 = parentObj$$208.memoryWriter;
  var v4206 = parentObj$$208.stackPointer;
  var v4207 = parentObj$$208.stackPointer;
  var v7615 = parentObj$$208.programCounter;
  var v4208 = v7615 & 255;
  JAMScript.call(v4205[v4206], v4205, [parentObj$$208, v4207, v4208]);
  parentObj$$208.programCounter = 8;
  return
}
function v284(parentObj$$207) {
  var v4209 = parentObj$$207.memoryReader;
  var v4210 = parentObj$$207.programCounter;
  var v4211 = parentObj$$207.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11160 = [[parentObj$$207, v4211], v4209, v4209[v4210]]
  }
  var tempValue$$3 = JAMScript.call(v11160[2], v11160[1], v11160[0]);
  var v7616 = parentObj$$207.programCounter;
  var v4212 = v7616 + 1;
  parentObj$$207.programCounter = v4212 & 65535;
  var v7617 = parentObj$$207.registerA;
  var v4213 = v7617 + tempValue$$3;
  var v7618;
  var v9319 = parentObj$$207.FCarry;
  if(v9319) {
    v7618 = 1
  }else {
    v7618 = 0
  }
  var v4214 = v7618;
  var dirtySum$$40 = v4213 + v4214;
  var v10153 = parentObj$$207.registerA;
  var v9320 = v10153 & 15;
  var v9321 = tempValue$$3 & 15;
  var v7619 = v9320 + v9321;
  var v9322;
  var v10154 = parentObj$$207.FCarry;
  if(v10154) {
    v9322 = 1
  }else {
    v9322 = 0
  }
  var v7620 = v9322;
  var v4215 = v7619 + v7620;
  parentObj$$207.FHalfCarry = v4215 > 15;
  parentObj$$207.FCarry = dirtySum$$40 > 255;
  parentObj$$207.registerA = dirtySum$$40 & 255;
  var v4216 = parentObj$$207.registerA;
  parentObj$$207.FZero = v4216 == 0;
  parentObj$$207.FSubtract = false;
  return
}
function v283(parentObj$$206) {
  var v10509 = parentObj$$206.programCounter;
  var v10155 = v10509 + 1;
  var v9323 = v10155 & 65535;
  var v7621 = JAMScript.call(parentObj$$206.memoryRead, parentObj$$206, [v9323]);
  var v4217 = v7621 << 8;
  var v7622 = parentObj$$206.memoryReader;
  var v7623 = parentObj$$206.programCounter;
  var v7624 = parentObj$$206.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11161 = [[parentObj$$206, v7624], v7622, v7622[v7623]]
  }
  var v4218 = JAMScript.call(v11161[2], v11161[1], v11161[0]);
  var temp_pc$$2 = v4217 | v4218;
  var v7625 = parentObj$$206.programCounter;
  var v4219 = v7625 + 2;
  parentObj$$206.programCounter = v4219 & 65535;
  var v7626 = parentObj$$206.stackPointer;
  var v4220 = v7626 - 1;
  parentObj$$206.stackPointer = v4220 & 65535;
  var v4221 = parentObj$$206.memoryWriter;
  var v4222 = parentObj$$206.stackPointer;
  var v4223 = parentObj$$206.stackPointer;
  var v7627 = parentObj$$206.programCounter;
  var v4224 = v7627 >> 8;
  JAMScript.call(v4221[v4222], v4221, [parentObj$$206, v4223, v4224]);
  var v7628 = parentObj$$206.stackPointer;
  var v4225 = v7628 - 1;
  parentObj$$206.stackPointer = v4225 & 65535;
  var v4226 = parentObj$$206.memoryWriter;
  var v4227 = parentObj$$206.stackPointer;
  var v4228 = parentObj$$206.stackPointer;
  var v7629 = parentObj$$206.programCounter;
  var v4229 = v7629 & 255;
  JAMScript.call(v4226[v4227], v4226, [parentObj$$206, v4228, v4229]);
  parentObj$$206.programCounter = temp_pc$$2;
  return
}
function v282(parentObj$$205) {
  var v4244 = parentObj$$205.FZero;
  if(v4244) {
    var v10510 = parentObj$$205.programCounter;
    var v10156 = v10510 + 1;
    var v9324 = v10156 & 65535;
    var v7630 = JAMScript.call(parentObj$$205.memoryRead, parentObj$$205, [v9324]);
    var v4230 = v7630 << 8;
    var v7631 = parentObj$$205.memoryReader;
    var v7632 = parentObj$$205.programCounter;
    var v7633 = parentObj$$205.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11162 = [[parentObj$$205, v7633], v7631, v7631[v7632]]
    }
    var v4231 = JAMScript.call(v11162[2], v11162[1], v11162[0]);
    var temp_pc$$1 = v4230 | v4231;
    var v7634 = parentObj$$205.programCounter;
    var v4232 = v7634 + 2;
    parentObj$$205.programCounter = v4232 & 65535;
    var v7635 = parentObj$$205.stackPointer;
    var v4233 = v7635 - 1;
    parentObj$$205.stackPointer = v4233 & 65535;
    var v4234 = parentObj$$205.memoryWriter;
    var v4235 = parentObj$$205.stackPointer;
    var v4236 = parentObj$$205.stackPointer;
    var v7636 = parentObj$$205.programCounter;
    var v4237 = v7636 >> 8;
    JAMScript.call(v4234[v4235], v4234, [parentObj$$205, v4236, v4237]);
    var v7637 = parentObj$$205.stackPointer;
    var v4238 = v7637 - 1;
    parentObj$$205.stackPointer = v4238 & 65535;
    var v4239 = parentObj$$205.memoryWriter;
    var v4240 = parentObj$$205.stackPointer;
    var v4241 = parentObj$$205.stackPointer;
    var v7638 = parentObj$$205.programCounter;
    var v4242 = v7638 & 255;
    JAMScript.call(v4239[v4240], v4239, [parentObj$$205, v4241, v4242]);
    parentObj$$205.programCounter = temp_pc$$1;
    var v7639 = parentObj$$205.CPUTicks;
    parentObj$$205.CPUTicks = v7639 + 12
  }else {
    var v7640 = parentObj$$205.programCounter;
    var v4243 = v7640 + 2;
    parentObj$$205.programCounter = v4243 & 65535
  }
  return
}
function v281(parentObj$$204) {
  var v4245 = parentObj$$204.memoryReader;
  var v4246 = parentObj$$204.programCounter;
  var v4247 = parentObj$$204.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11163 = [[parentObj$$204, v4247], v4245, v4245[v4246]]
  }
  var opcode = JAMScript.call(v11163[2], v11163[1], v11163[0]);
  var v7641 = parentObj$$204.programCounter;
  var v4248 = v7641 + 1;
  parentObj$$204.programCounter = v4248 & 65535;
  var v7642 = parentObj$$204.CPUTicks;
  var v9325 = parentObj$$204.SecondaryTICKTable;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v7643 = v9325[opcode]
  }
  parentObj$$204.CPUTicks = v7642 + v7643;
  var v4249 = parentObj$$204.CBOPCODE;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11164 = [[parentObj$$204], v4249, v4249[opcode]]
  }
  JAMScript.call(v11164[2], v11164[1], v11164[0]);
  return
}
function v280(parentObj$$203) {
  var v4252 = parentObj$$203.FZero;
  if(v4252) {
    var v4250 = parentObj$$203;
    var v10686 = parentObj$$203.programCounter;
    var v10511 = v10686 + 1;
    var v10157 = v10511 & 65535;
    var v9326 = JAMScript.call(parentObj$$203.memoryRead, parentObj$$203, [v10157]);
    var v7644 = v9326 << 8;
    var v9327 = parentObj$$203.memoryReader;
    var v9328 = parentObj$$203.programCounter;
    var v9329 = parentObj$$203.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11165 = [[parentObj$$203, v9329], v9327, v9327[v9328]]
    }
    var v7645 = JAMScript.call(v11165[2], v11165[1], v11165[0]);
    v4250.programCounter = v7644 | v7645;
    var v7646 = parentObj$$203.CPUTicks;
    parentObj$$203.CPUTicks = v7646 + 4
  }else {
    var v7647 = parentObj$$203.programCounter;
    var v4251 = v7647 + 2;
    parentObj$$203.programCounter = v4251 & 65535
  }
  return
}
function v279(parentObj$$202) {
  var v4253 = parentObj$$202;
  var v10687 = parentObj$$202.stackPointer;
  var v10512 = v10687 + 1;
  var v10158 = v10512 & 65535;
  var v9330 = JAMScript.call(parentObj$$202.memoryRead, parentObj$$202, [v10158]);
  var v7648 = v9330 << 8;
  var v9331 = parentObj$$202.memoryReader;
  var v9332 = parentObj$$202.stackPointer;
  var v9333 = parentObj$$202.stackPointer;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11166 = [[parentObj$$202, v9333], v9331, v9331[v9332]]
  }
  var v7649 = JAMScript.call(v11166[2], v11166[1], v11166[0]);
  v4253.programCounter = v7648 | v7649;
  var v7650 = parentObj$$202.stackPointer;
  var v4254 = v7650 + 2;
  parentObj$$202.stackPointer = v4254 & 65535;
  return
}
function v278(parentObj$$201) {
  var v4257 = parentObj$$201.FZero;
  if(v4257) {
    var v4255 = parentObj$$201;
    var v10688 = parentObj$$201.stackPointer;
    var v10513 = v10688 + 1;
    var v10159 = v10513 & 65535;
    var v9334 = JAMScript.call(parentObj$$201.memoryRead, parentObj$$201, [v10159]);
    var v7651 = v9334 << 8;
    var v9335 = parentObj$$201.memoryReader;
    var v9336 = parentObj$$201.stackPointer;
    var v9337 = parentObj$$201.stackPointer;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11167 = [[parentObj$$201, v9337], v9335, v9335[v9336]]
    }
    var v7652 = JAMScript.call(v11167[2], v11167[1], v11167[0]);
    v4255.programCounter = v7651 | v7652;
    var v7653 = parentObj$$201.stackPointer;
    var v4256 = v7653 + 2;
    parentObj$$201.stackPointer = v4256 & 65535;
    var v7654 = parentObj$$201.CPUTicks;
    parentObj$$201.CPUTicks = v7654 + 12
  }
  return
}
function v277(parentObj$$200) {
  var v7655 = parentObj$$200.stackPointer;
  var v4258 = v7655 - 1;
  parentObj$$200.stackPointer = v4258 & 65535;
  var v4259 = parentObj$$200.memoryWriter;
  var v4260 = parentObj$$200.stackPointer;
  var v4261 = parentObj$$200.stackPointer;
  var v7656 = parentObj$$200.programCounter;
  var v4262 = v7656 >> 8;
  JAMScript.call(v4259[v4260], v4259, [parentObj$$200, v4261, v4262]);
  var v7657 = parentObj$$200.stackPointer;
  var v4263 = v7657 - 1;
  parentObj$$200.stackPointer = v4263 & 65535;
  var v4264 = parentObj$$200.memoryWriter;
  var v4265 = parentObj$$200.stackPointer;
  var v4266 = parentObj$$200.stackPointer;
  var v7658 = parentObj$$200.programCounter;
  var v4267 = v7658 & 255;
  JAMScript.call(v4264[v4265], v4264, [parentObj$$200, v4266, v4267]);
  parentObj$$200.programCounter = 0;
  return
}
function v276(parentObj$$199) {
  var v4268 = parentObj$$199.registerA;
  var v7659 = parentObj$$199.memoryReader;
  var v7660 = parentObj$$199.programCounter;
  var v7661 = parentObj$$199.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11168 = [[parentObj$$199, v7661], v7659, v7659[v7660]]
  }
  var v4269 = JAMScript.call(v11168[2], v11168[1], v11168[0]);
  var dirtySum$$39 = v4268 + v4269;
  var v7662 = parentObj$$199.programCounter;
  var v4270 = v7662 + 1;
  parentObj$$199.programCounter = v4270 & 65535;
  var v4271 = dirtySum$$39 & 15;
  var v7663 = parentObj$$199.registerA;
  var v4272 = v7663 & 15;
  parentObj$$199.FHalfCarry = v4271 < v4272;
  parentObj$$199.FCarry = dirtySum$$39 > 255;
  parentObj$$199.registerA = dirtySum$$39 & 255;
  var v4273 = parentObj$$199.registerA;
  parentObj$$199.FZero = v4273 == 0;
  parentObj$$199.FSubtract = false;
  return
}
function v275(parentObj$$198) {
  var v7664 = parentObj$$198.stackPointer;
  var v4274 = v7664 - 1;
  parentObj$$198.stackPointer = v4274 & 65535;
  var v4275 = parentObj$$198.memoryWriter;
  var v4276 = parentObj$$198.stackPointer;
  var v4277 = parentObj$$198.stackPointer;
  var v4278 = parentObj$$198.registerB;
  JAMScript.call(v4275[v4276], v4275, [parentObj$$198, v4277, v4278]);
  var v7665 = parentObj$$198.stackPointer;
  var v4279 = v7665 - 1;
  parentObj$$198.stackPointer = v4279 & 65535;
  var v4280 = parentObj$$198.memoryWriter;
  var v4281 = parentObj$$198.stackPointer;
  var v4282 = parentObj$$198.stackPointer;
  var v4283 = parentObj$$198.registerC;
  JAMScript.call(v4280[v4281], v4280, [parentObj$$198, v4282, v4283]);
  return
}
function v274(parentObj$$197) {
  var v7666 = parentObj$$197.FZero;
  var v4298 = !v7666;
  if(v4298) {
    var v10514 = parentObj$$197.programCounter;
    var v10160 = v10514 + 1;
    var v9338 = v10160 & 65535;
    var v7667 = JAMScript.call(parentObj$$197.memoryRead, parentObj$$197, [v9338]);
    var v4284 = v7667 << 8;
    var v7668 = parentObj$$197.memoryReader;
    var v7669 = parentObj$$197.programCounter;
    var v7670 = parentObj$$197.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11169 = [[parentObj$$197, v7670], v7668, v7668[v7669]]
    }
    var v4285 = JAMScript.call(v11169[2], v11169[1], v11169[0]);
    var temp_pc = v4284 | v4285;
    var v7671 = parentObj$$197.programCounter;
    var v4286 = v7671 + 2;
    parentObj$$197.programCounter = v4286 & 65535;
    var v7672 = parentObj$$197.stackPointer;
    var v4287 = v7672 - 1;
    parentObj$$197.stackPointer = v4287 & 65535;
    var v4288 = parentObj$$197.memoryWriter;
    var v4289 = parentObj$$197.stackPointer;
    var v4290 = parentObj$$197.stackPointer;
    var v7673 = parentObj$$197.programCounter;
    var v4291 = v7673 >> 8;
    JAMScript.call(v4288[v4289], v4288, [parentObj$$197, v4290, v4291]);
    var v7674 = parentObj$$197.stackPointer;
    var v4292 = v7674 - 1;
    parentObj$$197.stackPointer = v4292 & 65535;
    var v4293 = parentObj$$197.memoryWriter;
    var v4294 = parentObj$$197.stackPointer;
    var v4295 = parentObj$$197.stackPointer;
    var v7675 = parentObj$$197.programCounter;
    var v4296 = v7675 & 255;
    JAMScript.call(v4293[v4294], v4293, [parentObj$$197, v4295, v4296]);
    parentObj$$197.programCounter = temp_pc;
    var v7676 = parentObj$$197.CPUTicks;
    parentObj$$197.CPUTicks = v7676 + 12
  }else {
    var v7677 = parentObj$$197.programCounter;
    var v4297 = v7677 + 2;
    parentObj$$197.programCounter = v4297 & 65535
  }
  return
}
function v273(parentObj$$196) {
  var v4299 = parentObj$$196;
  var v10689 = parentObj$$196.programCounter;
  var v10515 = v10689 + 1;
  var v10161 = v10515 & 65535;
  var v9339 = JAMScript.call(parentObj$$196.memoryRead, parentObj$$196, [v10161]);
  var v7678 = v9339 << 8;
  var v9340 = parentObj$$196.memoryReader;
  var v9341 = parentObj$$196.programCounter;
  var v9342 = parentObj$$196.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11170 = [[parentObj$$196, v9342], v9340, v9340[v9341]]
  }
  var v7679 = JAMScript.call(v11170[2], v11170[1], v11170[0]);
  v4299.programCounter = v7678 | v7679;
  return
}
function v272(parentObj$$195) {
  var v7680 = parentObj$$195.FZero;
  var v4302 = !v7680;
  if(v4302) {
    var v4300 = parentObj$$195;
    var v10690 = parentObj$$195.programCounter;
    var v10516 = v10690 + 1;
    var v10162 = v10516 & 65535;
    var v9343 = JAMScript.call(parentObj$$195.memoryRead, parentObj$$195, [v10162]);
    var v7681 = v9343 << 8;
    var v9344 = parentObj$$195.memoryReader;
    var v9345 = parentObj$$195.programCounter;
    var v9346 = parentObj$$195.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11171 = [[parentObj$$195, v9346], v9344, v9344[v9345]]
    }
    var v7682 = JAMScript.call(v11171[2], v11171[1], v11171[0]);
    v4300.programCounter = v7681 | v7682;
    var v7683 = parentObj$$195.CPUTicks;
    parentObj$$195.CPUTicks = v7683 + 4
  }else {
    var v7684 = parentObj$$195.programCounter;
    var v4301 = v7684 + 2;
    parentObj$$195.programCounter = v4301 & 65535
  }
  return
}
function v271(parentObj$$194) {
  var v4303 = parentObj$$194;
  var v7685 = parentObj$$194.memoryReader;
  var v7686 = parentObj$$194.stackPointer;
  var v7687 = parentObj$$194.stackPointer;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11172 = [[parentObj$$194, v7687], v7685, v7685[v7686]]
  }
  var v10927 = JAMScript.call(v11172[2], v11172[1], v11172[0]);
  v4303.registerC = v10927;
  var v4304 = parentObj$$194;
  var v10163 = parentObj$$194.stackPointer;
  var v9347 = v10163 + 1;
  var v7688 = v9347 & 65535;
  var v10928 = JAMScript.call(parentObj$$194.memoryRead, parentObj$$194, [v7688]);
  v4304.registerB = v10928;
  var v7689 = parentObj$$194.stackPointer;
  var v4305 = v7689 + 2;
  parentObj$$194.stackPointer = v4305 & 65535;
  return
}
function v270(parentObj$$193) {
  var v7690 = parentObj$$193.FZero;
  var v4308 = !v7690;
  if(v4308) {
    var v4306 = parentObj$$193;
    var v10691 = parentObj$$193.stackPointer;
    var v10517 = v10691 + 1;
    var v10164 = v10517 & 65535;
    var v9348 = JAMScript.call(parentObj$$193.memoryRead, parentObj$$193, [v10164]);
    var v7691 = v9348 << 8;
    var v9349 = parentObj$$193.memoryReader;
    var v9350 = parentObj$$193.stackPointer;
    var v9351 = parentObj$$193.stackPointer;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11173 = [[parentObj$$193, v9351], v9349, v9349[v9350]]
    }
    var v7692 = JAMScript.call(v11173[2], v11173[1], v11173[0]);
    v4306.programCounter = v7691 | v7692;
    var v7693 = parentObj$$193.stackPointer;
    var v4307 = v7693 + 2;
    parentObj$$193.stackPointer = v4307 & 65535;
    var v7694 = parentObj$$193.CPUTicks;
    parentObj$$193.CPUTicks = v7694 + 12
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
  var v7696 = parentObj$$191.registersHL;
  var v7697 = parentObj$$191.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11174 = [[parentObj$$191, v7697], v7695, v7695[v7696]]
  }
  var v4310 = JAMScript.call(v11174[2], v11174[1], v11174[0]);
  var dirtySum$$38 = v4309 - v4310;
  var v4311 = dirtySum$$38 & 15;
  var v7698 = parentObj$$191.registerA;
  var v4312 = v7698 & 15;
  parentObj$$191.FHalfCarry = v4311 > v4312;
  parentObj$$191.FCarry = dirtySum$$38 < 0;
  parentObj$$191.FZero = dirtySum$$38 == 0;
  parentObj$$191.FSubtract = true;
  return
}
function v267(parentObj$$190) {
  var v4313 = parentObj$$190.registerA;
  var v7699 = parentObj$$190.registersHL;
  var v4314 = v7699 & 255;
  var dirtySum$$37 = v4313 - v4314;
  var v4315 = dirtySum$$37 & 15;
  var v7700 = parentObj$$190.registerA;
  var v4316 = v7700 & 15;
  parentObj$$190.FHalfCarry = v4315 > v4316;
  parentObj$$190.FCarry = dirtySum$$37 < 0;
  parentObj$$190.FZero = dirtySum$$37 == 0;
  parentObj$$190.FSubtract = true;
  return
}
function v266(parentObj$$189) {
  var v4317 = parentObj$$189.registerA;
  var v7701 = parentObj$$189.registersHL;
  var v4318 = v7701 >> 8;
  var dirtySum$$36 = v4317 - v4318;
  var v4319 = dirtySum$$36 & 15;
  var v7702 = parentObj$$189.registerA;
  var v4320 = v7702 & 15;
  parentObj$$189.FHalfCarry = v4319 > v4320;
  parentObj$$189.FCarry = dirtySum$$36 < 0;
  parentObj$$189.FZero = dirtySum$$36 == 0;
  parentObj$$189.FSubtract = true;
  return
}
function v265(parentObj$$188) {
  var v4321 = parentObj$$188.registerA;
  var v4322 = parentObj$$188.registerE;
  var dirtySum$$35 = v4321 - v4322;
  var v4323 = dirtySum$$35 & 15;
  var v7703 = parentObj$$188.registerA;
  var v4324 = v7703 & 15;
  parentObj$$188.FHalfCarry = v4323 > v4324;
  parentObj$$188.FCarry = dirtySum$$35 < 0;
  parentObj$$188.FZero = dirtySum$$35 == 0;
  parentObj$$188.FSubtract = true;
  return
}
function v264(parentObj$$187) {
  var v4325 = parentObj$$187.registerA;
  var v4326 = parentObj$$187.registerD;
  var dirtySum$$34 = v4325 - v4326;
  var v4327 = dirtySum$$34 & 15;
  var v7704 = parentObj$$187.registerA;
  var v4328 = v7704 & 15;
  parentObj$$187.FHalfCarry = v4327 > v4328;
  parentObj$$187.FCarry = dirtySum$$34 < 0;
  parentObj$$187.FZero = dirtySum$$34 == 0;
  parentObj$$187.FSubtract = true;
  return
}
function v263(parentObj$$186) {
  var v4329 = parentObj$$186.registerA;
  var v4330 = parentObj$$186.registerC;
  var dirtySum$$33 = v4329 - v4330;
  var v4331 = dirtySum$$33 & 15;
  var v7705 = parentObj$$186.registerA;
  var v4332 = v7705 & 15;
  parentObj$$186.FHalfCarry = v4331 > v4332;
  parentObj$$186.FCarry = dirtySum$$33 < 0;
  parentObj$$186.FZero = dirtySum$$33 == 0;
  parentObj$$186.FSubtract = true;
  return
}
function v262(parentObj$$185) {
  var v4333 = parentObj$$185.registerA;
  var v4334 = parentObj$$185.registerB;
  var dirtySum$$32 = v4333 - v4334;
  var v4335 = dirtySum$$32 & 15;
  var v7706 = parentObj$$185.registerA;
  var v4336 = v7706 & 15;
  parentObj$$185.FHalfCarry = v4335 > v4336;
  parentObj$$185.FCarry = dirtySum$$32 < 0;
  parentObj$$185.FZero = dirtySum$$32 == 0;
  parentObj$$185.FSubtract = true;
  return
}
function v261(parentObj$$184) {
  var v4337 = parentObj$$184.registerA;
  parentObj$$184.FZero = v4337 == 0;
  parentObj$$184.FSubtract = parentObj$$184.FCarry = parentObj$$184.FHalfCarry = false;
  return
}
function v260(parentObj$$183) {
  var v4338 = parentObj$$183;
  var v9352 = v4338.registerA;
  var v10165 = parentObj$$183.memoryReader;
  var v10166 = parentObj$$183.registersHL;
  var v10167 = parentObj$$183.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11175 = [[parentObj$$183, v10167], v10165, v10165[v10166]]
  }
  var v9353 = JAMScript.call(v11175[2], v11175[1], v11175[0]);
  v4338.registerA = v9352 | v9353;
  var v4339 = parentObj$$183.registerA;
  parentObj$$183.FZero = v4339 == 0;
  parentObj$$183.FSubtract = parentObj$$183.FCarry = parentObj$$183.FHalfCarry = false;
  return
}
function v259(parentObj$$182) {
  var v7707 = parentObj$$182.registerA;
  var v9354 = parentObj$$182.registersHL;
  var v7708 = v9354 & 255;
  parentObj$$182.registerA = v7707 | v7708;
  var v4340 = parentObj$$182.registerA;
  parentObj$$182.FZero = v4340 == 0;
  parentObj$$182.FSubtract = parentObj$$182.FCarry = parentObj$$182.FHalfCarry = false;
  return
}
function v258(parentObj$$181) {
  var v7709 = parentObj$$181.registerA;
  var v9355 = parentObj$$181.registersHL;
  var v7710 = v9355 >> 8;
  parentObj$$181.registerA = v7709 | v7710;
  var v4341 = parentObj$$181.registerA;
  parentObj$$181.FZero = v4341 == 0;
  parentObj$$181.FSubtract = parentObj$$181.FCarry = parentObj$$181.FHalfCarry = false;
  return
}
function v257(parentObj$$180) {
  var v7711 = parentObj$$180.registerA;
  var v7712 = parentObj$$180.registerE;
  parentObj$$180.registerA = v7711 | v7712;
  var v4342 = parentObj$$180.registerA;
  parentObj$$180.FZero = v4342 == 0;
  parentObj$$180.FSubtract = parentObj$$180.FCarry = parentObj$$180.FHalfCarry = false;
  return
}
function v256(parentObj$$179) {
  var v7713 = parentObj$$179.registerA;
  var v7714 = parentObj$$179.registerD;
  parentObj$$179.registerA = v7713 | v7714;
  var v4343 = parentObj$$179.registerA;
  parentObj$$179.FZero = v4343 == 0;
  parentObj$$179.FSubtract = parentObj$$179.FCarry = parentObj$$179.FHalfCarry = false;
  return
}
function v255(parentObj$$178) {
  var v7715 = parentObj$$178.registerA;
  var v7716 = parentObj$$178.registerC;
  parentObj$$178.registerA = v7715 | v7716;
  var v4344 = parentObj$$178.registerA;
  parentObj$$178.FZero = v4344 == 0;
  parentObj$$178.FSubtract = parentObj$$178.FCarry = parentObj$$178.FHalfCarry = false;
  return
}
function v254(parentObj$$177) {
  var v7717 = parentObj$$177.registerA;
  var v7718 = parentObj$$177.registerB;
  parentObj$$177.registerA = v7717 | v7718;
  var v4345 = parentObj$$177.registerA;
  parentObj$$177.FZero = v4345 == 0;
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
  var v10169 = parentObj$$175.registersHL;
  var v10170 = parentObj$$175.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11176 = [[parentObj$$175, v10170], v10168, v10168[v10169]]
  }
  var v9357 = JAMScript.call(v11176[2], v11176[1], v11176[0]);
  v4346.registerA = v9356 ^ v9357;
  var v4347 = parentObj$$175.registerA;
  parentObj$$175.FZero = v4347 == 0;
  parentObj$$175.FSubtract = parentObj$$175.FHalfCarry = parentObj$$175.FCarry = false;
  return
}
function v251(parentObj$$174) {
  var v7719 = parentObj$$174.registerA;
  var v9358 = parentObj$$174.registersHL;
  var v7720 = v9358 & 255;
  parentObj$$174.registerA = v7719 ^ v7720;
  var v4348 = parentObj$$174.registerA;
  parentObj$$174.FZero = v4348 == 0;
  parentObj$$174.FSubtract = parentObj$$174.FHalfCarry = parentObj$$174.FCarry = false;
  return
}
function v250(parentObj$$173) {
  var v7721 = parentObj$$173.registerA;
  var v9359 = parentObj$$173.registersHL;
  var v7722 = v9359 >> 8;
  parentObj$$173.registerA = v7721 ^ v7722;
  var v4349 = parentObj$$173.registerA;
  parentObj$$173.FZero = v4349 == 0;
  parentObj$$173.FSubtract = parentObj$$173.FHalfCarry = parentObj$$173.FCarry = false;
  return
}
function v249(parentObj$$172) {
  var v7723 = parentObj$$172.registerA;
  var v7724 = parentObj$$172.registerE;
  parentObj$$172.registerA = v7723 ^ v7724;
  var v4350 = parentObj$$172.registerA;
  parentObj$$172.FZero = v4350 == 0;
  parentObj$$172.FSubtract = parentObj$$172.FHalfCarry = parentObj$$172.FCarry = false;
  return
}
function v248(parentObj$$171) {
  var v7725 = parentObj$$171.registerA;
  var v7726 = parentObj$$171.registerD;
  parentObj$$171.registerA = v7725 ^ v7726;
  var v4351 = parentObj$$171.registerA;
  parentObj$$171.FZero = v4351 == 0;
  parentObj$$171.FSubtract = parentObj$$171.FHalfCarry = parentObj$$171.FCarry = false;
  return
}
function v247(parentObj$$170) {
  var v7727 = parentObj$$170.registerA;
  var v7728 = parentObj$$170.registerC;
  parentObj$$170.registerA = v7727 ^ v7728;
  var v4352 = parentObj$$170.registerA;
  parentObj$$170.FZero = v4352 == 0;
  parentObj$$170.FSubtract = parentObj$$170.FHalfCarry = parentObj$$170.FCarry = false;
  return
}
function v246(parentObj$$169) {
  var v7729 = parentObj$$169.registerA;
  var v7730 = parentObj$$169.registerB;
  parentObj$$169.registerA = v7729 ^ v7730;
  var v4353 = parentObj$$169.registerA;
  parentObj$$169.FZero = v4353 == 0;
  parentObj$$169.FSubtract = parentObj$$169.FHalfCarry = parentObj$$169.FCarry = false;
  return
}
function v245(parentObj$$168) {
  var v4354 = parentObj$$168.registerA;
  parentObj$$168.FZero = v4354 == 0;
  parentObj$$168.FHalfCarry = true;
  parentObj$$168.FSubtract = parentObj$$168.FCarry = false;
  return
}
function v244(parentObj$$167) {
  var v4355 = parentObj$$167;
  var v9360 = v4355.registerA;
  var v10171 = parentObj$$167.memoryReader;
  var v10172 = parentObj$$167.registersHL;
  var v10173 = parentObj$$167.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11177 = [[parentObj$$167, v10173], v10171, v10171[v10172]]
  }
  var v9361 = JAMScript.call(v11177[2], v11177[1], v11177[0]);
  v4355.registerA = v9360 & v9361;
  var v4356 = parentObj$$167.registerA;
  parentObj$$167.FZero = v4356 == 0;
  parentObj$$167.FHalfCarry = true;
  parentObj$$167.FSubtract = parentObj$$167.FCarry = false;
  return
}
function v243(parentObj$$166) {
  var v7731 = parentObj$$166.registerA;
  var v7732 = parentObj$$166.registersHL;
  parentObj$$166.registerA = v7731 & v7732;
  var v4357 = parentObj$$166.registerA;
  parentObj$$166.FZero = v4357 == 0;
  parentObj$$166.FHalfCarry = true;
  parentObj$$166.FSubtract = parentObj$$166.FCarry = false;
  return
}
function v242(parentObj$$165) {
  var v7733 = parentObj$$165.registerA;
  var v9362 = parentObj$$165.registersHL;
  var v7734 = v9362 >> 8;
  parentObj$$165.registerA = v7733 & v7734;
  var v4358 = parentObj$$165.registerA;
  parentObj$$165.FZero = v4358 == 0;
  parentObj$$165.FHalfCarry = true;
  parentObj$$165.FSubtract = parentObj$$165.FCarry = false;
  return
}
function v241(parentObj$$164) {
  var v7735 = parentObj$$164.registerA;
  var v7736 = parentObj$$164.registerE;
  parentObj$$164.registerA = v7735 & v7736;
  var v4359 = parentObj$$164.registerA;
  parentObj$$164.FZero = v4359 == 0;
  parentObj$$164.FHalfCarry = true;
  parentObj$$164.FSubtract = parentObj$$164.FCarry = false;
  return
}
function v240(parentObj$$163) {
  var v7737 = parentObj$$163.registerA;
  var v7738 = parentObj$$163.registerD;
  parentObj$$163.registerA = v7737 & v7738;
  var v4360 = parentObj$$163.registerA;
  parentObj$$163.FZero = v4360 == 0;
  parentObj$$163.FHalfCarry = true;
  parentObj$$163.FSubtract = parentObj$$163.FCarry = false;
  return
}
function v239(parentObj$$162) {
  var v7739 = parentObj$$162.registerA;
  var v7740 = parentObj$$162.registerC;
  parentObj$$162.registerA = v7739 & v7740;
  var v4361 = parentObj$$162.registerA;
  parentObj$$162.FZero = v4361 == 0;
  parentObj$$162.FHalfCarry = true;
  parentObj$$162.FSubtract = parentObj$$162.FCarry = false;
  return
}
function v238(parentObj$$161) {
  var v7741 = parentObj$$161.registerA;
  var v7742 = parentObj$$161.registerB;
  parentObj$$161.registerA = v7741 & v7742;
  var v4362 = parentObj$$161.registerA;
  parentObj$$161.FZero = v4362 == 0;
  parentObj$$161.FHalfCarry = true;
  parentObj$$161.FSubtract = parentObj$$161.FCarry = false;
  return
}
function v237(parentObj$$160) {
  var v4363 = parentObj$$160.FCarry;
  if(v4363) {
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
  var v4365 = parentObj$$159.registersHL;
  var v4366 = parentObj$$159.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11178 = [[parentObj$$159, v4366], v4364, v4364[v4365]]
  }
  var temp_var$$8 = JAMScript.call(v11178[2], v11178[1], v11178[0]);
  var v7743 = parentObj$$159.registerA;
  var v4367 = v7743 - temp_var$$8;
  var v7744;
  var v9363 = parentObj$$159.FCarry;
  if(v9363) {
    v7744 = 1
  }else {
    v7744 = 0
  }
  var v4368 = v7744;
  var dirtySum$$31 = v4367 - v4368;
  var v10174 = parentObj$$159.registerA;
  var v9364 = v10174 & 15;
  var v9365 = temp_var$$8 & 15;
  var v7745 = v9364 - v9365;
  var v9366;
  var v10175 = parentObj$$159.FCarry;
  if(v10175) {
    v9366 = 1
  }else {
    v9366 = 0
  }
  var v7746 = v9366;
  var v4369 = v7745 - v7746;
  parentObj$$159.FHalfCarry = v4369 < 0;
  parentObj$$159.FCarry = dirtySum$$31 < 0;
  parentObj$$159.registerA = dirtySum$$31 & 255;
  var v4370 = parentObj$$159.registerA;
  parentObj$$159.FZero = v4370 == 0;
  parentObj$$159.FSubtract = true;
  return
}
function v235(parentObj$$158) {
  var v7747 = parentObj$$158.registerA;
  var v9367 = parentObj$$158.registersHL;
  var v7748 = v9367 & 255;
  var v4371 = v7747 - v7748;
  var v7749;
  var v9368 = parentObj$$158.FCarry;
  if(v9368) {
    v7749 = 1
  }else {
    v7749 = 0
  }
  var v4372 = v7749;
  var dirtySum$$30 = v4371 - v4372;
  var v10176 = parentObj$$158.registerA;
  var v9369 = v10176 & 15;
  var v10177 = parentObj$$158.registersHL;
  var v9370 = v10177 & 15;
  var v7750 = v9369 - v9370;
  var v9371;
  var v10178 = parentObj$$158.FCarry;
  if(v10178) {
    v9371 = 1
  }else {
    v9371 = 0
  }
  var v7751 = v9371;
  var v4373 = v7750 - v7751;
  parentObj$$158.FHalfCarry = v4373 < 0;
  parentObj$$158.FCarry = dirtySum$$30 < 0;
  parentObj$$158.registerA = dirtySum$$30 & 255;
  var v4374 = parentObj$$158.registerA;
  parentObj$$158.FZero = v4374 == 0;
  parentObj$$158.FSubtract = true;
  return
}
function v234(parentObj$$157) {
  var v4375 = parentObj$$157.registersHL;
  var temp_var$$7 = v4375 >> 8;
  var v7752 = parentObj$$157.registerA;
  var v4376 = v7752 - temp_var$$7;
  var v7753;
  var v9372 = parentObj$$157.FCarry;
  if(v9372) {
    v7753 = 1
  }else {
    v7753 = 0
  }
  var v4377 = v7753;
  var dirtySum$$29 = v4376 - v4377;
  var v10179 = parentObj$$157.registerA;
  var v9373 = v10179 & 15;
  var v9374 = temp_var$$7 & 15;
  var v7754 = v9373 - v9374;
  var v9375;
  var v10180 = parentObj$$157.FCarry;
  if(v10180) {
    v9375 = 1
  }else {
    v9375 = 0
  }
  var v7755 = v9375;
  var v4378 = v7754 - v7755;
  parentObj$$157.FHalfCarry = v4378 < 0;
  parentObj$$157.FCarry = dirtySum$$29 < 0;
  parentObj$$157.registerA = dirtySum$$29 & 255;
  var v4379 = parentObj$$157.registerA;
  parentObj$$157.FZero = v4379 == 0;
  parentObj$$157.FSubtract = true;
  return
}
function v233(parentObj$$156) {
  var v7756 = parentObj$$156.registerA;
  var v7757 = parentObj$$156.registerE;
  var v4380 = v7756 - v7757;
  var v7758;
  var v9376 = parentObj$$156.FCarry;
  if(v9376) {
    v7758 = 1
  }else {
    v7758 = 0
  }
  var v4381 = v7758;
  var dirtySum$$28 = v4380 - v4381;
  var v10181 = parentObj$$156.registerA;
  var v9377 = v10181 & 15;
  var v10182 = parentObj$$156.registerE;
  var v9378 = v10182 & 15;
  var v7759 = v9377 - v9378;
  var v9379;
  var v10183 = parentObj$$156.FCarry;
  if(v10183) {
    v9379 = 1
  }else {
    v9379 = 0
  }
  var v7760 = v9379;
  var v4382 = v7759 - v7760;
  parentObj$$156.FHalfCarry = v4382 < 0;
  parentObj$$156.FCarry = dirtySum$$28 < 0;
  parentObj$$156.registerA = dirtySum$$28 & 255;
  var v4383 = parentObj$$156.registerA;
  parentObj$$156.FZero = v4383 == 0;
  parentObj$$156.FSubtract = true;
  return
}
function v232(parentObj$$155) {
  var v7761 = parentObj$$155.registerA;
  var v7762 = parentObj$$155.registerD;
  var v4384 = v7761 - v7762;
  var v7763;
  var v9380 = parentObj$$155.FCarry;
  if(v9380) {
    v7763 = 1
  }else {
    v7763 = 0
  }
  var v4385 = v7763;
  var dirtySum$$27 = v4384 - v4385;
  var v10184 = parentObj$$155.registerA;
  var v9381 = v10184 & 15;
  var v10185 = parentObj$$155.registerD;
  var v9382 = v10185 & 15;
  var v7764 = v9381 - v9382;
  var v9383;
  var v10186 = parentObj$$155.FCarry;
  if(v10186) {
    v9383 = 1
  }else {
    v9383 = 0
  }
  var v7765 = v9383;
  var v4386 = v7764 - v7765;
  parentObj$$155.FHalfCarry = v4386 < 0;
  parentObj$$155.FCarry = dirtySum$$27 < 0;
  parentObj$$155.registerA = dirtySum$$27 & 255;
  var v4387 = parentObj$$155.registerA;
  parentObj$$155.FZero = v4387 == 0;
  parentObj$$155.FSubtract = true;
  return
}
function v231(parentObj$$154) {
  var v7766 = parentObj$$154.registerA;
  var v7767 = parentObj$$154.registerC;
  var v4388 = v7766 - v7767;
  var v7768;
  var v9384 = parentObj$$154.FCarry;
  if(v9384) {
    v7768 = 1
  }else {
    v7768 = 0
  }
  var v4389 = v7768;
  var dirtySum$$26 = v4388 - v4389;
  var v10187 = parentObj$$154.registerA;
  var v9385 = v10187 & 15;
  var v10188 = parentObj$$154.registerC;
  var v9386 = v10188 & 15;
  var v7769 = v9385 - v9386;
  var v9387;
  var v10189 = parentObj$$154.FCarry;
  if(v10189) {
    v9387 = 1
  }else {
    v9387 = 0
  }
  var v7770 = v9387;
  var v4390 = v7769 - v7770;
  parentObj$$154.FHalfCarry = v4390 < 0;
  parentObj$$154.FCarry = dirtySum$$26 < 0;
  parentObj$$154.registerA = dirtySum$$26 & 255;
  var v4391 = parentObj$$154.registerA;
  parentObj$$154.FZero = v4391 == 0;
  parentObj$$154.FSubtract = true;
  return
}
function v230(parentObj$$153) {
  var v7771 = parentObj$$153.registerA;
  var v7772 = parentObj$$153.registerB;
  var v4392 = v7771 - v7772;
  var v7773;
  var v9388 = parentObj$$153.FCarry;
  if(v9388) {
    v7773 = 1
  }else {
    v7773 = 0
  }
  var v4393 = v7773;
  var dirtySum$$25 = v4392 - v4393;
  var v10190 = parentObj$$153.registerA;
  var v9389 = v10190 & 15;
  var v10191 = parentObj$$153.registerB;
  var v9390 = v10191 & 15;
  var v7774 = v9389 - v9390;
  var v9391;
  var v10192 = parentObj$$153.FCarry;
  if(v10192) {
    v9391 = 1
  }else {
    v9391 = 0
  }
  var v7775 = v9391;
  var v4394 = v7774 - v7775;
  parentObj$$153.FHalfCarry = v4394 < 0;
  parentObj$$153.FCarry = dirtySum$$25 < 0;
  parentObj$$153.registerA = dirtySum$$25 & 255;
  var v4395 = parentObj$$153.registerA;
  parentObj$$153.FZero = v4395 == 0;
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
  var v7777 = parentObj$$151.registersHL;
  var v7778 = parentObj$$151.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11179 = [[parentObj$$151, v7778], v7776, v7776[v7777]]
  }
  var v4397 = JAMScript.call(v11179[2], v11179[1], v11179[0]);
  var dirtySum$$24 = v4396 - v4397;
  var v7779 = parentObj$$151.registerA;
  var v4398 = v7779 & 15;
  var v4399 = dirtySum$$24 & 15;
  parentObj$$151.FHalfCarry = v4398 < v4399;
  parentObj$$151.FCarry = dirtySum$$24 < 0;
  parentObj$$151.registerA = dirtySum$$24 & 255;
  parentObj$$151.FZero = dirtySum$$24 == 0;
  parentObj$$151.FSubtract = true;
  return
}
function v227(parentObj$$150) {
  var v4400 = parentObj$$150.registerA;
  var v7780 = parentObj$$150.registersHL;
  var v4401 = v7780 & 255;
  var dirtySum$$23 = v4400 - v4401;
  var v7781 = parentObj$$150.registerA;
  var v4402 = v7781 & 15;
  var v4403 = dirtySum$$23 & 15;
  parentObj$$150.FHalfCarry = v4402 < v4403;
  parentObj$$150.FCarry = dirtySum$$23 < 0;
  parentObj$$150.registerA = dirtySum$$23 & 255;
  parentObj$$150.FZero = dirtySum$$23 == 0;
  parentObj$$150.FSubtract = true;
  return
}
function v226(parentObj$$149) {
  var v4404 = parentObj$$149.registerA;
  var v7782 = parentObj$$149.registersHL;
  var v4405 = v7782 >> 8;
  var dirtySum$$22 = v4404 - v4405;
  var v7783 = parentObj$$149.registerA;
  var v4406 = v7783 & 15;
  var v4407 = dirtySum$$22 & 15;
  parentObj$$149.FHalfCarry = v4406 < v4407;
  parentObj$$149.FCarry = dirtySum$$22 < 0;
  parentObj$$149.registerA = dirtySum$$22 & 255;
  parentObj$$149.FZero = dirtySum$$22 == 0;
  parentObj$$149.FSubtract = true;
  return
}
function v225(parentObj$$148) {
  var v4408 = parentObj$$148.registerA;
  var v4409 = parentObj$$148.registerE;
  var dirtySum$$21 = v4408 - v4409;
  var v7784 = parentObj$$148.registerA;
  var v4410 = v7784 & 15;
  var v4411 = dirtySum$$21 & 15;
  parentObj$$148.FHalfCarry = v4410 < v4411;
  parentObj$$148.FCarry = dirtySum$$21 < 0;
  parentObj$$148.registerA = dirtySum$$21 & 255;
  parentObj$$148.FZero = dirtySum$$21 == 0;
  parentObj$$148.FSubtract = true;
  return
}
function v224(parentObj$$147) {
  var v4412 = parentObj$$147.registerA;
  var v4413 = parentObj$$147.registerD;
  var dirtySum$$20 = v4412 - v4413;
  var v7785 = parentObj$$147.registerA;
  var v4414 = v7785 & 15;
  var v4415 = dirtySum$$20 & 15;
  parentObj$$147.FHalfCarry = v4414 < v4415;
  parentObj$$147.FCarry = dirtySum$$20 < 0;
  parentObj$$147.registerA = dirtySum$$20 & 255;
  parentObj$$147.FZero = dirtySum$$20 == 0;
  parentObj$$147.FSubtract = true;
  return
}
function v223(parentObj$$146) {
  var v4416 = parentObj$$146.registerA;
  var v4417 = parentObj$$146.registerC;
  var dirtySum$$19 = v4416 - v4417;
  var v7786 = parentObj$$146.registerA;
  var v4418 = v7786 & 15;
  var v4419 = dirtySum$$19 & 15;
  parentObj$$146.FHalfCarry = v4418 < v4419;
  parentObj$$146.FCarry = dirtySum$$19 < 0;
  parentObj$$146.registerA = dirtySum$$19 & 255;
  parentObj$$146.FZero = dirtySum$$19 == 0;
  parentObj$$146.FSubtract = true;
  return
}
function v222(parentObj$$145) {
  var v4420 = parentObj$$145.registerA;
  var v4421 = parentObj$$145.registerB;
  var dirtySum$$18 = v4420 - v4421;
  var v7787 = parentObj$$145.registerA;
  var v4422 = v7787 & 15;
  var v4423 = dirtySum$$18 & 15;
  parentObj$$145.FHalfCarry = v4422 < v4423;
  parentObj$$145.FCarry = dirtySum$$18 < 0;
  parentObj$$145.registerA = dirtySum$$18 & 255;
  parentObj$$145.FZero = dirtySum$$18 == 0;
  parentObj$$145.FSubtract = true;
  return
}
function v221(parentObj$$144) {
  var v7788 = parentObj$$144.registerA;
  var v4424 = v7788 << 1;
  var v7789;
  var v9392 = parentObj$$144.FCarry;
  if(v9392) {
    v7789 = 1
  }else {
    v7789 = 0
  }
  var v4425 = v7789;
  var dirtySum$$17 = v4424 | v4425;
  var v10193 = parentObj$$144.registerA;
  var v9393 = v10193 << 1;
  var v7790 = v9393 & 30;
  var v9394;
  var v10194 = parentObj$$144.FCarry;
  if(v10194) {
    v9394 = 1
  }else {
    v9394 = 0
  }
  var v7791 = v9394;
  var v4426 = v7790 | v7791;
  parentObj$$144.FHalfCarry = v4426 > 15;
  parentObj$$144.FCarry = dirtySum$$17 > 255;
  parentObj$$144.registerA = dirtySum$$17 & 255;
  var v4427 = parentObj$$144.registerA;
  parentObj$$144.FZero = v4427 == 0;
  parentObj$$144.FSubtract = false;
  return
}
function v220(parentObj$$143) {
  var v4428 = parentObj$$143.memoryReader;
  var v4429 = parentObj$$143.registersHL;
  var v4430 = parentObj$$143.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11180 = [[parentObj$$143, v4430], v4428, v4428[v4429]]
  }
  var tempValue$$2 = JAMScript.call(v11180[2], v11180[1], v11180[0]);
  var v7792 = parentObj$$143.registerA;
  var v4431 = v7792 + tempValue$$2;
  var v7793;
  var v9395 = parentObj$$143.FCarry;
  if(v9395) {
    v7793 = 1
  }else {
    v7793 = 0
  }
  var v4432 = v7793;
  var dirtySum$$16 = v4431 + v4432;
  var v10195 = parentObj$$143.registerA;
  var v9396 = v10195 & 15;
  var v9397 = tempValue$$2 & 15;
  var v7794 = v9396 + v9397;
  var v9398;
  var v10196 = parentObj$$143.FCarry;
  if(v10196) {
    v9398 = 1
  }else {
    v9398 = 0
  }
  var v7795 = v9398;
  var v4433 = v7794 + v7795;
  parentObj$$143.FHalfCarry = v4433 > 15;
  parentObj$$143.FCarry = dirtySum$$16 > 255;
  parentObj$$143.registerA = dirtySum$$16 & 255;
  var v4434 = parentObj$$143.registerA;
  parentObj$$143.FZero = v4434 == 0;
  parentObj$$143.FSubtract = false;
  return
}
function v219(parentObj$$142) {
  var v4435 = parentObj$$142.registersHL;
  var tempValue$$1 = v4435 & 255;
  var v7796 = parentObj$$142.registerA;
  var v4436 = v7796 + tempValue$$1;
  var v7797;
  var v9399 = parentObj$$142.FCarry;
  if(v9399) {
    v7797 = 1
  }else {
    v7797 = 0
  }
  var v4437 = v7797;
  var dirtySum$$15 = v4436 + v4437;
  var v10197 = parentObj$$142.registerA;
  var v9400 = v10197 & 15;
  var v9401 = tempValue$$1 & 15;
  var v7798 = v9400 + v9401;
  var v9402;
  var v10198 = parentObj$$142.FCarry;
  if(v10198) {
    v9402 = 1
  }else {
    v9402 = 0
  }
  var v7799 = v9402;
  var v4438 = v7798 + v7799;
  parentObj$$142.FHalfCarry = v4438 > 15;
  parentObj$$142.FCarry = dirtySum$$15 > 255;
  parentObj$$142.registerA = dirtySum$$15 & 255;
  var v4439 = parentObj$$142.registerA;
  parentObj$$142.FZero = v4439 == 0;
  parentObj$$142.FSubtract = false;
  return
}
function v218(parentObj$$141) {
  var v4440 = parentObj$$141.registersHL;
  var tempValue = v4440 >> 8;
  var v7800 = parentObj$$141.registerA;
  var v4441 = v7800 + tempValue;
  var v7801;
  var v9403 = parentObj$$141.FCarry;
  if(v9403) {
    v7801 = 1
  }else {
    v7801 = 0
  }
  var v4442 = v7801;
  var dirtySum$$14 = v4441 + v4442;
  var v10199 = parentObj$$141.registerA;
  var v9404 = v10199 & 15;
  var v9405 = tempValue & 15;
  var v7802 = v9404 + v9405;
  var v9406;
  var v10200 = parentObj$$141.FCarry;
  if(v10200) {
    v9406 = 1
  }else {
    v9406 = 0
  }
  var v7803 = v9406;
  var v4443 = v7802 + v7803;
  parentObj$$141.FHalfCarry = v4443 > 15;
  parentObj$$141.FCarry = dirtySum$$14 > 255;
  parentObj$$141.registerA = dirtySum$$14 & 255;
  var v4444 = parentObj$$141.registerA;
  parentObj$$141.FZero = v4444 == 0;
  parentObj$$141.FSubtract = false;
  return
}
function v217(parentObj$$140) {
  var v7804 = parentObj$$140.registerA;
  var v7805 = parentObj$$140.registerE;
  var v4445 = v7804 + v7805;
  var v7806;
  var v9407 = parentObj$$140.FCarry;
  if(v9407) {
    v7806 = 1
  }else {
    v7806 = 0
  }
  var v4446 = v7806;
  var dirtySum$$13 = v4445 + v4446;
  var v10201 = parentObj$$140.registerA;
  var v9408 = v10201 & 15;
  var v10202 = parentObj$$140.registerE;
  var v9409 = v10202 & 15;
  var v7807 = v9408 + v9409;
  var v9410;
  var v10203 = parentObj$$140.FCarry;
  if(v10203) {
    v9410 = 1
  }else {
    v9410 = 0
  }
  var v7808 = v9410;
  var v4447 = v7807 + v7808;
  parentObj$$140.FHalfCarry = v4447 > 15;
  parentObj$$140.FCarry = dirtySum$$13 > 255;
  parentObj$$140.registerA = dirtySum$$13 & 255;
  var v4448 = parentObj$$140.registerA;
  parentObj$$140.FZero = v4448 == 0;
  parentObj$$140.FSubtract = false;
  return
}
function v216(parentObj$$139) {
  var v7809 = parentObj$$139.registerA;
  var v7810 = parentObj$$139.registerD;
  var v4449 = v7809 + v7810;
  var v7811;
  var v9411 = parentObj$$139.FCarry;
  if(v9411) {
    v7811 = 1
  }else {
    v7811 = 0
  }
  var v4450 = v7811;
  var dirtySum$$12 = v4449 + v4450;
  var v10204 = parentObj$$139.registerA;
  var v9412 = v10204 & 15;
  var v10205 = parentObj$$139.registerD;
  var v9413 = v10205 & 15;
  var v7812 = v9412 + v9413;
  var v9414;
  var v10206 = parentObj$$139.FCarry;
  if(v10206) {
    v9414 = 1
  }else {
    v9414 = 0
  }
  var v7813 = v9414;
  var v4451 = v7812 + v7813;
  parentObj$$139.FHalfCarry = v4451 > 15;
  parentObj$$139.FCarry = dirtySum$$12 > 255;
  parentObj$$139.registerA = dirtySum$$12 & 255;
  var v4452 = parentObj$$139.registerA;
  parentObj$$139.FZero = v4452 == 0;
  parentObj$$139.FSubtract = false;
  return
}
function v215(parentObj$$138) {
  var v7814 = parentObj$$138.registerA;
  var v7815 = parentObj$$138.registerC;
  var v4453 = v7814 + v7815;
  var v7816;
  var v9415 = parentObj$$138.FCarry;
  if(v9415) {
    v7816 = 1
  }else {
    v7816 = 0
  }
  var v4454 = v7816;
  var dirtySum$$11 = v4453 + v4454;
  var v10207 = parentObj$$138.registerA;
  var v9416 = v10207 & 15;
  var v10208 = parentObj$$138.registerC;
  var v9417 = v10208 & 15;
  var v7817 = v9416 + v9417;
  var v9418;
  var v10209 = parentObj$$138.FCarry;
  if(v10209) {
    v9418 = 1
  }else {
    v9418 = 0
  }
  var v7818 = v9418;
  var v4455 = v7817 + v7818;
  parentObj$$138.FHalfCarry = v4455 > 15;
  parentObj$$138.FCarry = dirtySum$$11 > 255;
  parentObj$$138.registerA = dirtySum$$11 & 255;
  var v4456 = parentObj$$138.registerA;
  parentObj$$138.FZero = v4456 == 0;
  parentObj$$138.FSubtract = false;
  return
}
function v214(parentObj$$137) {
  var v7819 = parentObj$$137.registerA;
  var v7820 = parentObj$$137.registerB;
  var v4457 = v7819 + v7820;
  var v7821;
  var v9419 = parentObj$$137.FCarry;
  if(v9419) {
    v7821 = 1
  }else {
    v7821 = 0
  }
  var v4458 = v7821;
  var dirtySum$$10 = v4457 + v4458;
  var v10210 = parentObj$$137.registerA;
  var v9420 = v10210 & 15;
  var v10211 = parentObj$$137.registerB;
  var v9421 = v10211 & 15;
  var v7822 = v9420 + v9421;
  var v9422;
  var v10212 = parentObj$$137.FCarry;
  if(v10212) {
    v9422 = 1
  }else {
    v9422 = 0
  }
  var v7823 = v9422;
  var v4459 = v7822 + v7823;
  parentObj$$137.FHalfCarry = v4459 > 15;
  parentObj$$137.FCarry = dirtySum$$10 > 255;
  parentObj$$137.registerA = dirtySum$$10 & 255;
  var v4460 = parentObj$$137.registerA;
  parentObj$$137.FZero = v4460 == 0;
  parentObj$$137.FSubtract = false;
  return
}
function v213(parentObj$$136) {
  var v7824 = parentObj$$136.registerA;
  var v4461 = v7824 & 8;
  parentObj$$136.FHalfCarry = v4461 == 8;
  var v4462 = parentObj$$136.registerA;
  parentObj$$136.FCarry = v4462 > 127;
  var v7825 = parentObj$$136.registerA;
  var v4463 = v7825 << 1;
  parentObj$$136.registerA = v4463 & 255;
  var v4464 = parentObj$$136.registerA;
  parentObj$$136.FZero = v4464 == 0;
  parentObj$$136.FSubtract = false;
  return
}
function v212(parentObj$$135) {
  var v4465 = parentObj$$135.registerA;
  var v7826 = parentObj$$135.memoryReader;
  var v7827 = parentObj$$135.registersHL;
  var v7828 = parentObj$$135.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11181 = [[parentObj$$135, v7828], v7826, v7826[v7827]]
  }
  var v4466 = JAMScript.call(v11181[2], v11181[1], v11181[0]);
  var dirtySum$$9 = v4465 + v4466;
  var v4467 = dirtySum$$9 & 15;
  var v7829 = parentObj$$135.registerA;
  var v4468 = v7829 & 15;
  parentObj$$135.FHalfCarry = v4467 < v4468;
  parentObj$$135.FCarry = dirtySum$$9 > 255;
  parentObj$$135.registerA = dirtySum$$9 & 255;
  var v4469 = parentObj$$135.registerA;
  parentObj$$135.FZero = v4469 == 0;
  parentObj$$135.FSubtract = false;
  return
}
function v211(parentObj$$134) {
  var v4470 = parentObj$$134.registerA;
  var v7830 = parentObj$$134.registersHL;
  var v4471 = v7830 & 255;
  var dirtySum$$8 = v4470 + v4471;
  var v4472 = dirtySum$$8 & 15;
  var v7831 = parentObj$$134.registerA;
  var v4473 = v7831 & 15;
  parentObj$$134.FHalfCarry = v4472 < v4473;
  parentObj$$134.FCarry = dirtySum$$8 > 255;
  parentObj$$134.registerA = dirtySum$$8 & 255;
  var v4474 = parentObj$$134.registerA;
  parentObj$$134.FZero = v4474 == 0;
  parentObj$$134.FSubtract = false;
  return
}
function v210(parentObj$$133) {
  var v4475 = parentObj$$133.registerA;
  var v7832 = parentObj$$133.registersHL;
  var v4476 = v7832 >> 8;
  var dirtySum$$7 = v4475 + v4476;
  var v4477 = dirtySum$$7 & 15;
  var v7833 = parentObj$$133.registerA;
  var v4478 = v7833 & 15;
  parentObj$$133.FHalfCarry = v4477 < v4478;
  parentObj$$133.FCarry = dirtySum$$7 > 255;
  parentObj$$133.registerA = dirtySum$$7 & 255;
  var v4479 = parentObj$$133.registerA;
  parentObj$$133.FZero = v4479 == 0;
  parentObj$$133.FSubtract = false;
  return
}
function v209(parentObj$$132) {
  var v4480 = parentObj$$132.registerA;
  var v4481 = parentObj$$132.registerE;
  var dirtySum$$6 = v4480 + v4481;
  var v4482 = dirtySum$$6 & 15;
  var v7834 = parentObj$$132.registerA;
  var v4483 = v7834 & 15;
  parentObj$$132.FHalfCarry = v4482 < v4483;
  parentObj$$132.FCarry = dirtySum$$6 > 255;
  parentObj$$132.registerA = dirtySum$$6 & 255;
  var v4484 = parentObj$$132.registerA;
  parentObj$$132.FZero = v4484 == 0;
  parentObj$$132.FSubtract = false;
  return
}
function v208(parentObj$$131) {
  var v4485 = parentObj$$131.registerA;
  var v4486 = parentObj$$131.registerD;
  var dirtySum$$5 = v4485 + v4486;
  var v4487 = dirtySum$$5 & 15;
  var v7835 = parentObj$$131.registerA;
  var v4488 = v7835 & 15;
  parentObj$$131.FHalfCarry = v4487 < v4488;
  parentObj$$131.FCarry = dirtySum$$5 > 255;
  parentObj$$131.registerA = dirtySum$$5 & 255;
  var v4489 = parentObj$$131.registerA;
  parentObj$$131.FZero = v4489 == 0;
  parentObj$$131.FSubtract = false;
  return
}
function v207(parentObj$$130) {
  var v4490 = parentObj$$130.registerA;
  var v4491 = parentObj$$130.registerC;
  var dirtySum$$4 = v4490 + v4491;
  var v4492 = dirtySum$$4 & 15;
  var v7836 = parentObj$$130.registerA;
  var v4493 = v7836 & 15;
  parentObj$$130.FHalfCarry = v4492 < v4493;
  parentObj$$130.FCarry = dirtySum$$4 > 255;
  parentObj$$130.registerA = dirtySum$$4 & 255;
  var v4494 = parentObj$$130.registerA;
  parentObj$$130.FZero = v4494 == 0;
  parentObj$$130.FSubtract = false;
  return
}
function v206(parentObj$$129) {
  var v4495 = parentObj$$129.registerA;
  var v4496 = parentObj$$129.registerB;
  var dirtySum$$3 = v4495 + v4496;
  var v4497 = dirtySum$$3 & 15;
  var v7837 = parentObj$$129.registerA;
  var v4498 = v7837 & 15;
  parentObj$$129.FHalfCarry = v4497 < v4498;
  parentObj$$129.FCarry = dirtySum$$3 > 255;
  parentObj$$129.registerA = dirtySum$$3 & 255;
  var v4499 = parentObj$$129.registerA;
  parentObj$$129.FZero = v4499 == 0;
  parentObj$$129.FSubtract = false;
  return
}
function v205(parentObj$$128) {
  return
}
function v204(parentObj$$127) {
  var v4500 = parentObj$$127;
  var v7838 = parentObj$$127.memoryReader;
  var v7839 = parentObj$$127.registersHL;
  var v7840 = parentObj$$127.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11182 = [[parentObj$$127, v7840], v7838, v7838[v7839]]
  }
  var v10929 = JAMScript.call(v11182[2], v11182[1], v11182[0]);
  v4500.registerA = v10929;
  return
}
function v203(parentObj$$126) {
  var v4501 = parentObj$$126.registersHL;
  parentObj$$126.registerA = v4501 & 255;
  return
}
function v202(parentObj$$125) {
  var v4502 = parentObj$$125.registersHL;
  parentObj$$125.registerA = v4502 >> 8;
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
  var v4504 = parentObj$$120.registersHL;
  var v4505 = parentObj$$120.registersHL;
  var v4506 = parentObj$$120.registerA;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11183 = [[parentObj$$120, v4505, v4506], v4503, v4503[v4504]]
  }
  JAMScript.call(v11183[2], v11183[1], v11183[0]);
  return
}
function v196(parentObj$$119) {
  var v10213 = parentObj$$119.interruptsEnabled;
  var v10214 = parentObj$$119.interruptsRequested;
  var v9423 = v10213 & v10214;
  var v7841 = v9423 & 31;
  var v4508 = v7841 > 0;
  if(v4508) {
    var v9424 = parentObj$$119.cGBC;
    var v7842 = !v9424;
    if(v7842) {
      var v9425 = parentObj$$119.usedBootROM;
      v7842 = !v9425
    }
    var v4507 = v7842;
    if(v4507) {
      parentObj$$119.skipPCIncrement = true
    }else {
      var v7843 = parentObj$$119.CPUTicks;
      parentObj$$119.CPUTicks = v7843 + 4
    }
  }else {
    JAMScript.call(parentObj$$119.calculateHALTPeriod, parentObj$$119, [])
  }
  return
}
function v195(parentObj$$118) {
  var v4509 = parentObj$$118.memoryWriter;
  var v4510 = parentObj$$118.registersHL;
  var v4511 = parentObj$$118.registersHL;
  var v7844 = parentObj$$118.registersHL;
  var v4512 = v7844 & 255;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11184 = [[parentObj$$118, v4511, v4512], v4509, v4509[v4510]]
  }
  JAMScript.call(v11184[2], v11184[1], v11184[0]);
  return
}
function v194(parentObj$$117) {
  var v4513 = parentObj$$117.memoryWriter;
  var v4514 = parentObj$$117.registersHL;
  var v4515 = parentObj$$117.registersHL;
  var v7845 = parentObj$$117.registersHL;
  var v4516 = v7845 >> 8;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11185 = [[parentObj$$117, v4515, v4516], v4513, v4513[v4514]]
  }
  JAMScript.call(v11185[2], v11185[1], v11185[0]);
  return
}
function v193(parentObj$$116) {
  var v4517 = parentObj$$116.memoryWriter;
  var v4518 = parentObj$$116.registersHL;
  var v4519 = parentObj$$116.registersHL;
  var v4520 = parentObj$$116.registerE;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11186 = [[parentObj$$116, v4519, v4520], v4517, v4517[v4518]]
  }
  JAMScript.call(v11186[2], v11186[1], v11186[0]);
  return
}
function v192(parentObj$$115) {
  var v4521 = parentObj$$115.memoryWriter;
  var v4522 = parentObj$$115.registersHL;
  var v4523 = parentObj$$115.registersHL;
  var v4524 = parentObj$$115.registerD;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11187 = [[parentObj$$115, v4523, v4524], v4521, v4521[v4522]]
  }
  JAMScript.call(v11187[2], v11187[1], v11187[0]);
  return
}
function v191(parentObj$$114) {
  var v4525 = parentObj$$114.memoryWriter;
  var v4526 = parentObj$$114.registersHL;
  var v4527 = parentObj$$114.registersHL;
  var v4528 = parentObj$$114.registerC;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11188 = [[parentObj$$114, v4527, v4528], v4525, v4525[v4526]]
  }
  JAMScript.call(v11188[2], v11188[1], v11188[0]);
  return
}
function v190(parentObj$$113) {
  var v4529 = parentObj$$113.memoryWriter;
  var v4530 = parentObj$$113.registersHL;
  var v4531 = parentObj$$113.registersHL;
  var v4532 = parentObj$$113.registerB;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11189 = [[parentObj$$113, v4531, v4532], v4529, v4529[v4530]]
  }
  JAMScript.call(v11189[2], v11189[1], v11189[0]);
  return
}
function v189(parentObj$$112) {
  var v7846 = parentObj$$112.registersHL;
  var v4533 = v7846 & 65280;
  var v4534 = parentObj$$112.registerA;
  parentObj$$112.registersHL = v4533 | v4534;
  return
}
function v188(parentObj$$111) {
  var v4535 = parentObj$$111;
  var v9426 = parentObj$$111.registersHL;
  var v7847 = v9426 & 65280;
  var v9427 = parentObj$$111.memoryReader;
  var v9428 = parentObj$$111.registersHL;
  var v9429 = parentObj$$111.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11190 = [[parentObj$$111, v9429], v9427, v9427[v9428]]
  }
  var v7848 = JAMScript.call(v11190[2], v11190[1], v11190[0]);
  v4535.registersHL = v7847 | v7848;
  return
}
function v187(parentObj$$110) {
  return
}
function v186(parentObj$$109) {
  var v7849 = parentObj$$109.registersHL;
  var v4536 = v7849 & 65280;
  var v7850 = parentObj$$109.registersHL;
  var v4537 = v7850 >> 8;
  parentObj$$109.registersHL = v4536 | v4537;
  return
}
function v185(parentObj$$108) {
  var v7851 = parentObj$$108.registersHL;
  var v4538 = v7851 & 65280;
  var v4539 = parentObj$$108.registerE;
  parentObj$$108.registersHL = v4538 | v4539;
  return
}
function v184(parentObj$$107) {
  var v7852 = parentObj$$107.registersHL;
  var v4540 = v7852 & 65280;
  var v4541 = parentObj$$107.registerD;
  parentObj$$107.registersHL = v4540 | v4541;
  return
}
function v183(parentObj$$106) {
  var v7853 = parentObj$$106.registersHL;
  var v4542 = v7853 & 65280;
  var v4543 = parentObj$$106.registerC;
  parentObj$$106.registersHL = v4542 | v4543;
  return
}
function v182(parentObj$$105) {
  var v7854 = parentObj$$105.registersHL;
  var v4544 = v7854 & 65280;
  var v4545 = parentObj$$105.registerB;
  parentObj$$105.registersHL = v4544 | v4545;
  return
}
function v181(parentObj$$104) {
  var v7855 = parentObj$$104.registerA;
  var v4546 = v7855 << 8;
  var v7856 = parentObj$$104.registersHL;
  var v4547 = v7856 & 255;
  parentObj$$104.registersHL = v4546 | v4547;
  return
}
function v180(parentObj$$103) {
  var v4548 = parentObj$$103;
  var v10215 = parentObj$$103.memoryReader;
  var v10216 = parentObj$$103.registersHL;
  var v10217 = parentObj$$103.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11191 = [[parentObj$$103, v10217], v10215, v10215[v10216]]
  }
  var v9430 = JAMScript.call(v11191[2], v11191[1], v11191[0]);
  var v7857 = v9430 << 8;
  var v9431 = parentObj$$103.registersHL;
  var v7858 = v9431 & 255;
  v4548.registersHL = v7857 | v7858;
  return
}
function v179(parentObj$$102) {
  var v7859 = parentObj$$102.registersHL;
  var v4549 = v7859 & 255;
  parentObj$$102.registersHL = v4549 * 257;
  return
}
function v178(parentObj$$101) {
  return
}
function v177(parentObj$$100) {
  var v7860 = parentObj$$100.registerE;
  var v4550 = v7860 << 8;
  var v7861 = parentObj$$100.registersHL;
  var v4551 = v7861 & 255;
  parentObj$$100.registersHL = v4550 | v4551;
  return
}
function v176(parentObj$$99) {
  var v7862 = parentObj$$99.registerD;
  var v4552 = v7862 << 8;
  var v7863 = parentObj$$99.registersHL;
  var v4553 = v7863 & 255;
  parentObj$$99.registersHL = v4552 | v4553;
  return
}
function v175(parentObj$$98) {
  var v7864 = parentObj$$98.registerC;
  var v4554 = v7864 << 8;
  var v7865 = parentObj$$98.registersHL;
  var v4555 = v7865 & 255;
  parentObj$$98.registersHL = v4554 | v4555;
  return
}
function v174(parentObj$$97) {
  var v7866 = parentObj$$97.registerB;
  var v4556 = v7866 << 8;
  var v7867 = parentObj$$97.registersHL;
  var v4557 = v7867 & 255;
  parentObj$$97.registersHL = v4556 | v4557;
  return
}
function v173(parentObj$$96) {
  parentObj$$96.registerE = parentObj$$96.registerA;
  return
}
function v172(parentObj$$95) {
  var v4558 = parentObj$$95;
  var v7868 = parentObj$$95.memoryReader;
  var v7869 = parentObj$$95.registersHL;
  var v7870 = parentObj$$95.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11192 = [[parentObj$$95, v7870], v7868, v7868[v7869]]
  }
  var v10930 = JAMScript.call(v11192[2], v11192[1], v11192[0]);
  v4558.registerE = v10930;
  return
}
function v171(parentObj$$94) {
  var v4559 = parentObj$$94.registersHL;
  parentObj$$94.registerE = v4559 & 255;
  return
}
function v170(parentObj$$93) {
  var v4560 = parentObj$$93.registersHL;
  parentObj$$93.registerE = v4560 >> 8;
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
  var v7872 = parentObj$$87.registersHL;
  var v7873 = parentObj$$87.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11193 = [[parentObj$$87, v7873], v7871, v7871[v7872]]
  }
  var v10931 = JAMScript.call(v11193[2], v11193[1], v11193[0]);
  v4561.registerD = v10931;
  return
}
function v163(parentObj$$86) {
  var v4562 = parentObj$$86.registersHL;
  parentObj$$86.registerD = v4562 & 255;
  return
}
function v162(parentObj$$85) {
  var v4563 = parentObj$$85.registersHL;
  parentObj$$85.registerD = v4563 >> 8;
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
  var v7875 = parentObj$$79.registersHL;
  var v7876 = parentObj$$79.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11194 = [[parentObj$$79, v7876], v7874, v7874[v7875]]
  }
  var v10932 = JAMScript.call(v11194[2], v11194[1], v11194[0]);
  v4564.registerC = v10932;
  return
}
function v155(parentObj$$78) {
  var v4565 = parentObj$$78.registersHL;
  parentObj$$78.registerC = v4565 & 255;
  return
}
function v154(parentObj$$77) {
  var v4566 = parentObj$$77.registersHL;
  parentObj$$77.registerC = v4566 >> 8;
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
  var v7878 = parentObj$$71.registersHL;
  var v7879 = parentObj$$71.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11195 = [[parentObj$$71, v7879], v7877, v7877[v7878]]
  }
  var v10933 = JAMScript.call(v11195[2], v11195[1], v11195[0]);
  v4567.registerB = v10933;
  return
}
function v147(parentObj$$70) {
  var v4568 = parentObj$$70.registersHL;
  parentObj$$70.registerB = v4568 & 255;
  return
}
function v146(parentObj$$69) {
  var v4569 = parentObj$$69.registersHL;
  parentObj$$69.registerB = v4569 >> 8;
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
  var v4570 = parentObj$$64.FCarry;
  parentObj$$64.FCarry = !v4570;
  parentObj$$64.FSubtract = parentObj$$64.FHalfCarry = false;
  return
}
function v140(parentObj$$63) {
  var v4571 = parentObj$$63;
  var v7880 = parentObj$$63.memoryReader;
  var v7881 = parentObj$$63.programCounter;
  var v7882 = parentObj$$63.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11196 = [[parentObj$$63, v7882], v7880, v7880[v7881]]
  }
  var v10934 = JAMScript.call(v11196[2], v11196[1], v11196[0]);
  v4571.registerA = v10934;
  var v7883 = parentObj$$63.programCounter;
  var v4572 = v7883 + 1;
  parentObj$$63.programCounter = v4572 & 65535;
  return
}
function v139(parentObj$$62) {
  var v7884 = parentObj$$62.registerA;
  var v4573 = v7884 - 1;
  parentObj$$62.registerA = v4573 & 255;
  var v4574 = parentObj$$62.registerA;
  parentObj$$62.FZero = v4574 == 0;
  var v7885 = parentObj$$62.registerA;
  var v4575 = v7885 & 15;
  parentObj$$62.FHalfCarry = v4575 == 15;
  parentObj$$62.FSubtract = true;
  return
}
function v138(parentObj$$61) {
  var v7886 = parentObj$$61.registerA;
  var v4576 = v7886 + 1;
  parentObj$$61.registerA = v4576 & 255;
  var v4577 = parentObj$$61.registerA;
  parentObj$$61.FZero = v4577 == 0;
  var v7887 = parentObj$$61.registerA;
  var v4578 = v7887 & 15;
  parentObj$$61.FHalfCarry = v4578 == 0;
  parentObj$$61.FSubtract = false;
  return
}
function v137(parentObj$$60) {
  var v7888 = parentObj$$60.stackPointer;
  var v4579 = v7888 - 1;
  parentObj$$60.stackPointer = v4579 & 65535;
  return
}
function v136(parentObj$$59) {
  var v4580 = parentObj$$59;
  var v7889 = parentObj$$59.memoryReader;
  var v7890 = parentObj$$59.registersHL;
  var v7891 = parentObj$$59.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11197 = [[parentObj$$59, v7891], v7889, v7889[v7890]]
  }
  var v10935 = JAMScript.call(v11197[2], v11197[1], v11197[0]);
  v4580.registerA = v10935;
  var v7892 = parentObj$$59.registersHL;
  var v4581 = v7892 - 1;
  parentObj$$59.registersHL = v4581 & 65535;
  return
}
function v135(parentObj$$58) {
  var v4582 = parentObj$$58.registersHL;
  var v4583 = parentObj$$58.stackPointer;
  var dirtySum$$2 = v4582 + v4583;
  var v7893 = parentObj$$58.registersHL;
  var v4584 = v7893 & 4095;
  var v4585 = dirtySum$$2 & 4095;
  parentObj$$58.FHalfCarry = v4584 > v4585;
  parentObj$$58.FCarry = dirtySum$$2 > 65535;
  parentObj$$58.registersHL = dirtySum$$2 & 65535;
  parentObj$$58.FSubtract = false;
  return
}
function v134(parentObj$$57) {
  var v4588 = parentObj$$57.FCarry;
  if(v4588) {
    var v4586 = parentObj$$57;
    var v10218 = parentObj$$57.programCounter;
    var v10728 = parentObj$$57.memoryReader;
    var v10729 = parentObj$$57.programCounter;
    var v10730 = parentObj$$57.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11198 = [[parentObj$$57, v10730], v10728, v10728[v10729]]
    }
    var v10692 = JAMScript.call(v11198[2], v11198[1], v11198[0]);
    var v10518 = v10692 << 24;
    var v10219 = v10518 >> 24;
    var v9432 = v10218 + v10219;
    var v7894 = v9432 + 1;
    v4586.programCounter = v7894 & 65535;
    var v7895 = parentObj$$57.CPUTicks;
    parentObj$$57.CPUTicks = v7895 + 4
  }else {
    var v7896 = parentObj$$57.programCounter;
    var v4587 = v7896 + 1;
    parentObj$$57.programCounter = v4587 & 65535
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
  var v7898 = parentObj$$55.programCounter;
  var v7899 = parentObj$$55.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11199 = [[parentObj$$55, v7899], v7897, v7897[v7898]]
  }
  var v4592 = JAMScript.call(v11199[2], v11199[1], v11199[0]);
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11200 = [[parentObj$$55, v4591, v4592], v4589, v4589[v4590]]
  }
  JAMScript.call(v11200[2], v11200[1], v11200[0]);
  var v7900 = parentObj$$55.programCounter;
  var v4593 = v7900 + 1;
  parentObj$$55.programCounter = v4593 & 65535;
  return
}
function v131(parentObj$$54) {
  var v9433 = parentObj$$54.memoryReader;
  var v9434 = parentObj$$54.registersHL;
  var v9435 = parentObj$$54.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11201 = [[parentObj$$54, v9435], v9433, v9433[v9434]]
  }
  var v7901 = JAMScript.call(v11201[2], v11201[1], v11201[0]);
  var v4594 = v7901 - 1;
  var temp_var$$6 = v4594 & 255;
  parentObj$$54.FZero = temp_var$$6 == 0;
  var v4595 = temp_var$$6 & 15;
  parentObj$$54.FHalfCarry = v4595 == 15;
  parentObj$$54.FSubtract = true;
  var v4596 = parentObj$$54.memoryWriter;
  var v4597 = parentObj$$54.registersHL;
  var v4598 = parentObj$$54.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11202 = [[parentObj$$54, v4598, temp_var$$6], v4596, v4596[v4597]]
  }
  JAMScript.call(v11202[2], v11202[1], v11202[0]);
  return
}
function v130(parentObj$$53) {
  var v9436 = parentObj$$53.memoryReader;
  var v9437 = parentObj$$53.registersHL;
  var v9438 = parentObj$$53.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11203 = [[parentObj$$53, v9438], v9436, v9436[v9437]]
  }
  var v7902 = JAMScript.call(v11203[2], v11203[1], v11203[0]);
  var v4599 = v7902 + 1;
  var temp_var$$5 = v4599 & 255;
  parentObj$$53.FZero = temp_var$$5 == 0;
  var v4600 = temp_var$$5 & 15;
  parentObj$$53.FHalfCarry = v4600 == 0;
  parentObj$$53.FSubtract = false;
  var v4601 = parentObj$$53.memoryWriter;
  var v4602 = parentObj$$53.registersHL;
  var v4603 = parentObj$$53.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11204 = [[parentObj$$53, v4603, temp_var$$5], v4601, v4601[v4602]]
  }
  JAMScript.call(v11204[2], v11204[1], v11204[0]);
  return
}
function v129(parentObj$$52) {
  var v7903 = parentObj$$52.stackPointer;
  var v4604 = v7903 + 1;
  parentObj$$52.stackPointer = v4604 & 65535;
  return
}
function v128(parentObj$$51) {
  var v4605 = parentObj$$51.memoryWriter;
  var v4606 = parentObj$$51.registersHL;
  var v4607 = parentObj$$51.registersHL;
  var v4608 = parentObj$$51.registerA;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11205 = [[parentObj$$51, v4607, v4608], v4605, v4605[v4606]]
  }
  JAMScript.call(v11205[2], v11205[1], v11205[0]);
  var v7904 = parentObj$$51.registersHL;
  var v4609 = v7904 - 1;
  parentObj$$51.registersHL = v4609 & 65535;
  return
}
function v127(parentObj$$50) {
  var v4610 = parentObj$$50;
  var v10693 = parentObj$$50.programCounter;
  var v10519 = v10693 + 1;
  var v10220 = v10519 & 65535;
  var v9439 = JAMScript.call(parentObj$$50.memoryRead, parentObj$$50, [v10220]);
  var v7905 = v9439 << 8;
  var v9440 = parentObj$$50.memoryReader;
  var v9441 = parentObj$$50.programCounter;
  var v9442 = parentObj$$50.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11206 = [[parentObj$$50, v9442], v9440, v9440[v9441]]
  }
  var v7906 = JAMScript.call(v11206[2], v11206[1], v11206[0]);
  v4610.stackPointer = v7905 | v7906;
  var v7907 = parentObj$$50.programCounter;
  var v4611 = v7907 + 2;
  parentObj$$50.programCounter = v4611 & 65535;
  return
}
function v126(parentObj$$49) {
  var v7908 = parentObj$$49.FCarry;
  var v4614 = !v7908;
  if(v4614) {
    var v4612 = parentObj$$49;
    var v10221 = parentObj$$49.programCounter;
    var v10731 = parentObj$$49.memoryReader;
    var v10732 = parentObj$$49.programCounter;
    var v10733 = parentObj$$49.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11207 = [[parentObj$$49, v10733], v10731, v10731[v10732]]
    }
    var v10694 = JAMScript.call(v11207[2], v11207[1], v11207[0]);
    var v10520 = v10694 << 24;
    var v10222 = v10520 >> 24;
    var v9443 = v10221 + v10222;
    var v7909 = v9443 + 1;
    v4612.programCounter = v7909 & 65535;
    var v7910 = parentObj$$49.CPUTicks;
    parentObj$$49.CPUTicks = v7910 + 4
  }else {
    var v7911 = parentObj$$49.programCounter;
    var v4613 = v7911 + 1;
    parentObj$$49.programCounter = v4613 & 65535
  }
  return
}
function v125(parentObj$$48) {
  var v7912 = parentObj$$48.registerA;
  parentObj$$48.registerA = v7912 ^ 255;
  parentObj$$48.FSubtract = parentObj$$48.FHalfCarry = true;
  return
}
function v124(parentObj$$47) {
  var v4615 = parentObj$$47;
  var v9444 = parentObj$$47.registersHL;
  var v7913 = v9444 & 65280;
  var v9445 = parentObj$$47.memoryReader;
  var v9446 = parentObj$$47.programCounter;
  var v9447 = parentObj$$47.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11208 = [[parentObj$$47, v9447], v9445, v9445[v9446]]
  }
  var v7914 = JAMScript.call(v11208[2], v11208[1], v11208[0]);
  v4615.registersHL = v7913 | v7914;
  var v7915 = parentObj$$47.programCounter;
  var v4616 = v7915 + 1;
  parentObj$$47.programCounter = v4616 & 65535;
  return
}
function v123(parentObj$$46) {
  var v7916 = parentObj$$46.registersHL;
  var v4617 = v7916 - 1;
  var L$$1 = v4617 & 255;
  parentObj$$46.FZero = L$$1 == 0;
  var v4618 = L$$1 & 15;
  parentObj$$46.FHalfCarry = v4618 == 15;
  parentObj$$46.FSubtract = true;
  var v7917 = parentObj$$46.registersHL;
  var v4619 = v7917 & 65280;
  parentObj$$46.registersHL = v4619 | L$$1;
  return
}
function v122(parentObj$$45) {
  var v7918 = parentObj$$45.registersHL;
  var v4620 = v7918 + 1;
  var L = v4620 & 255;
  parentObj$$45.FZero = L == 0;
  var v4621 = L & 15;
  parentObj$$45.FHalfCarry = v4621 == 0;
  parentObj$$45.FSubtract = false;
  var v7919 = parentObj$$45.registersHL;
  var v4622 = v7919 & 65280;
  parentObj$$45.registersHL = v4622 | L;
  return
}
function v121(parentObj$$44) {
  var v7920 = parentObj$$44.registersHL;
  var v4623 = v7920 - 1;
  parentObj$$44.registersHL = v4623 & 65535;
  return
}
function v120(parentObj$$43) {
  var v4624 = parentObj$$43;
  var v7921 = parentObj$$43.memoryReader;
  var v7922 = parentObj$$43.registersHL;
  var v7923 = parentObj$$43.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11209 = [[parentObj$$43, v7923], v7921, v7921[v7922]]
  }
  var v10936 = JAMScript.call(v11209[2], v11209[1], v11209[0]);
  v4624.registerA = v10936;
  var v7924 = parentObj$$43.registersHL;
  var v4625 = v7924 + 1;
  parentObj$$43.registersHL = v4625 & 65535;
  return
}
function v119(parentObj$$42) {
  var v7925 = parentObj$$42.registersHL;
  var v4626 = v7925 & 4095;
  parentObj$$42.FHalfCarry = v4626 > 2047;
  var v4627 = parentObj$$42.registersHL;
  parentObj$$42.FCarry = v4627 > 32767;
  var v7926 = parentObj$$42.registersHL;
  var v4628 = v7926 << 1;
  parentObj$$42.registersHL = v4628 & 65535;
  parentObj$$42.FSubtract = false;
  return
}
function v118(parentObj$$41) {
  var v4631 = parentObj$$41.FZero;
  if(v4631) {
    var v4629 = parentObj$$41;
    var v10223 = parentObj$$41.programCounter;
    var v10734 = parentObj$$41.memoryReader;
    var v10735 = parentObj$$41.programCounter;
    var v10736 = parentObj$$41.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11210 = [[parentObj$$41, v10736], v10734, v10734[v10735]]
    }
    var v10695 = JAMScript.call(v11210[2], v11210[1], v11210[0]);
    var v10521 = v10695 << 24;
    var v10224 = v10521 >> 24;
    var v9448 = v10223 + v10224;
    var v7927 = v9448 + 1;
    v4629.programCounter = v7927 & 65535;
    var v7928 = parentObj$$41.CPUTicks;
    parentObj$$41.CPUTicks = v7928 + 4
  }else {
    var v7929 = parentObj$$41.programCounter;
    var v4630 = v7929 + 1;
    parentObj$$41.programCounter = v4630 & 65535
  }
  return
}
function v117(parentObj$$40) {
  var v7930 = parentObj$$40.FSubtract;
  var v4642 = !v7930;
  if(v4642) {
    var v7931 = parentObj$$40.FCarry;
    var v9450 = !v7931;
    if(v9450) {
      var v9449 = parentObj$$40.registerA;
      v7931 = v9449 > 153
    }
    var v4633 = v7931;
    if(v4633) {
      var v7932 = parentObj$$40.registerA;
      var v4632 = v7932 + 96;
      parentObj$$40.registerA = v4632 & 255;
      parentObj$$40.FCarry = true
    }
    var v7933 = parentObj$$40.FHalfCarry;
    var v9452 = !v7933;
    if(v9452) {
      var v10225 = parentObj$$40.registerA;
      var v9451 = v10225 & 15;
      v7933 = v9451 > 9
    }
    var v4635 = v7933;
    if(v4635) {
      var v7934 = parentObj$$40.registerA;
      var v4634 = v7934 + 6;
      parentObj$$40.registerA = v4634 & 255;
      parentObj$$40.FHalfCarry = false
    }
  }else {
    var v7935 = parentObj$$40.FCarry;
    if(v7935) {
      v7935 = parentObj$$40.FHalfCarry
    }
    var v4641 = v7935;
    if(v4641) {
      var v7936 = parentObj$$40.registerA;
      var v4636 = v7936 + 154;
      parentObj$$40.registerA = v4636 & 255;
      parentObj$$40.FHalfCarry = false
    }else {
      var v4640 = parentObj$$40.FCarry;
      if(v4640) {
        var v7937 = parentObj$$40.registerA;
        var v4637 = v7937 + 160;
        parentObj$$40.registerA = v4637 & 255
      }else {
        var v4639 = parentObj$$40.FHalfCarry;
        if(v4639) {
          var v7938 = parentObj$$40.registerA;
          var v4638 = v7938 + 250;
          parentObj$$40.registerA = v4638 & 255;
          parentObj$$40.FHalfCarry = false
        }
      }
    }
  }
  var v4643 = parentObj$$40.registerA;
  parentObj$$40.FZero = v4643 == 0;
  return
}
function v116(parentObj$$39) {
  var v4644 = parentObj$$39;
  var v10226 = parentObj$$39.memoryReader;
  var v10227 = parentObj$$39.programCounter;
  var v10228 = parentObj$$39.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11211 = [[parentObj$$39, v10228], v10226, v10226[v10227]]
  }
  var v9453 = JAMScript.call(v11211[2], v11211[1], v11211[0]);
  var v7939 = v9453 << 8;
  var v9454 = parentObj$$39.registersHL;
  var v7940 = v9454 & 255;
  v4644.registersHL = v7939 | v7940;
  var v7941 = parentObj$$39.programCounter;
  var v4645 = v7941 + 1;
  parentObj$$39.programCounter = v4645 & 65535;
  return
}
function v115(parentObj$$38) {
  var v9455 = parentObj$$38.registersHL;
  var v7942 = v9455 >> 8;
  var v4646 = v7942 - 1;
  var H$$1 = v4646 & 255;
  parentObj$$38.FZero = H$$1 == 0;
  var v4647 = H$$1 & 15;
  parentObj$$38.FHalfCarry = v4647 == 15;
  parentObj$$38.FSubtract = true;
  var v4648 = H$$1 << 8;
  var v7943 = parentObj$$38.registersHL;
  var v4649 = v7943 & 255;
  parentObj$$38.registersHL = v4648 | v4649;
  return
}
function v114(parentObj$$37) {
  var v9456 = parentObj$$37.registersHL;
  var v7944 = v9456 >> 8;
  var v4650 = v7944 + 1;
  var H = v4650 & 255;
  parentObj$$37.FZero = H == 0;
  var v4651 = H & 15;
  parentObj$$37.FHalfCarry = v4651 == 0;
  parentObj$$37.FSubtract = false;
  var v4652 = H << 8;
  var v7945 = parentObj$$37.registersHL;
  var v4653 = v7945 & 255;
  parentObj$$37.registersHL = v4652 | v4653;
  return
}
function v113(parentObj$$36) {
  var v7946 = parentObj$$36.registersHL;
  var v4654 = v7946 + 1;
  parentObj$$36.registersHL = v4654 & 65535;
  return
}
function v112(parentObj$$35) {
  var v4655 = parentObj$$35.memoryWriter;
  var v4656 = parentObj$$35.registersHL;
  var v4657 = parentObj$$35.registersHL;
  var v4658 = parentObj$$35.registerA;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11212 = [[parentObj$$35, v4657, v4658], v4655, v4655[v4656]]
  }
  JAMScript.call(v11212[2], v11212[1], v11212[0]);
  var v7947 = parentObj$$35.registersHL;
  var v4659 = v7947 + 1;
  parentObj$$35.registersHL = v4659 & 65535;
  return
}
function v111(parentObj$$34) {
  var v4660 = parentObj$$34;
  var v10696 = parentObj$$34.programCounter;
  var v10522 = v10696 + 1;
  var v10229 = v10522 & 65535;
  var v9457 = JAMScript.call(parentObj$$34.memoryRead, parentObj$$34, [v10229]);
  var v7948 = v9457 << 8;
  var v9458 = parentObj$$34.memoryReader;
  var v9459 = parentObj$$34.programCounter;
  var v9460 = parentObj$$34.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11213 = [[parentObj$$34, v9460], v9458, v9458[v9459]]
  }
  var v7949 = JAMScript.call(v11213[2], v11213[1], v11213[0]);
  v4660.registersHL = v7948 | v7949;
  var v7950 = parentObj$$34.programCounter;
  var v4661 = v7950 + 2;
  parentObj$$34.programCounter = v4661 & 65535;
  return
}
function v110(parentObj$$33) {
  var v7951 = parentObj$$33.FZero;
  var v4664 = !v7951;
  if(v4664) {
    var v4662 = parentObj$$33;
    var v10230 = parentObj$$33.programCounter;
    var v10737 = parentObj$$33.memoryReader;
    var v10738 = parentObj$$33.programCounter;
    var v10739 = parentObj$$33.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11214 = [[parentObj$$33, v10739], v10737, v10737[v10738]]
    }
    var v10697 = JAMScript.call(v11214[2], v11214[1], v11214[0]);
    var v10523 = v10697 << 24;
    var v10231 = v10523 >> 24;
    var v9461 = v10230 + v10231;
    var v7952 = v9461 + 1;
    v4662.programCounter = v7952 & 65535;
    var v7953 = parentObj$$33.CPUTicks;
    parentObj$$33.CPUTicks = v7953 + 4
  }else {
    var v7954 = parentObj$$33.programCounter;
    var v4663 = v7954 + 1;
    parentObj$$33.programCounter = v4663 & 65535
  }
  return
}
function v109(parentObj$$32) {
  var v4665;
  var v7955 = parentObj$$32.FCarry;
  if(v7955) {
    v4665 = 128
  }else {
    v4665 = 0
  }
  var carry_flag$$1 = v4665;
  var v7956 = parentObj$$32.registerA;
  var v4666 = v7956 & 1;
  parentObj$$32.FCarry = v4666 == 1;
  var v7957 = parentObj$$32.registerA;
  var v4667 = v7957 >> 1;
  parentObj$$32.registerA = v4667 | carry_flag$$1;
  parentObj$$32.FZero = parentObj$$32.FSubtract = parentObj$$32.FHalfCarry = false;
  return
}
function v108(parentObj$$31) {
  var v4668 = parentObj$$31;
  var v7958 = parentObj$$31.memoryReader;
  var v7959 = parentObj$$31.programCounter;
  var v7960 = parentObj$$31.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11215 = [[parentObj$$31, v7960], v7958, v7958[v7959]]
  }
  var v10937 = JAMScript.call(v11215[2], v11215[1], v11215[0]);
  v4668.registerE = v10937;
  var v7961 = parentObj$$31.programCounter;
  var v4669 = v7961 + 1;
  parentObj$$31.programCounter = v4669 & 65535;
  return
}
function v107(parentObj$$30) {
  var v7962 = parentObj$$30.registerE;
  var v4670 = v7962 - 1;
  parentObj$$30.registerE = v4670 & 255;
  var v4671 = parentObj$$30.registerE;
  parentObj$$30.FZero = v4671 == 0;
  var v7963 = parentObj$$30.registerE;
  var v4672 = v7963 & 15;
  parentObj$$30.FHalfCarry = v4672 == 15;
  parentObj$$30.FSubtract = true;
  return
}
function v106(parentObj$$29) {
  var v7964 = parentObj$$29.registerE;
  var v4673 = v7964 + 1;
  parentObj$$29.registerE = v4673 & 255;
  var v4674 = parentObj$$29.registerE;
  parentObj$$29.FZero = v4674 == 0;
  var v7965 = parentObj$$29.registerE;
  var v4675 = v7965 & 15;
  parentObj$$29.FHalfCarry = v4675 == 0;
  parentObj$$29.FSubtract = false;
  return
}
function v105(parentObj$$28) {
  var v10232 = parentObj$$28.registerD;
  var v9462 = v10232 << 8;
  var v9463 = parentObj$$28.registerE;
  var v7966 = v9462 | v9463;
  var v4676 = v7966 - 1;
  var temp_var$$4 = v4676 & 65535;
  parentObj$$28.registerD = temp_var$$4 >> 8;
  parentObj$$28.registerE = temp_var$$4 & 255;
  return
}
function v104(parentObj$$27) {
  var v4677 = parentObj$$27;
  var v10233 = parentObj$$27.registerD;
  var v9464 = v10233 << 8;
  var v9465 = parentObj$$27.registerE;
  var v7967 = v9464 | v9465;
  var v10938 = JAMScript.call(parentObj$$27.memoryRead, parentObj$$27, [v7967]);
  v4677.registerA = v10938;
  return
}
function v103(parentObj$$26) {
  var v4678 = parentObj$$26.registersHL;
  var v9466 = parentObj$$26.registerD;
  var v7968 = v9466 << 8;
  var v7969 = parentObj$$26.registerE;
  var v4679 = v7968 | v7969;
  var dirtySum$$1 = v4678 + v4679;
  var v7970 = parentObj$$26.registersHL;
  var v4680 = v7970 & 4095;
  var v4681 = dirtySum$$1 & 4095;
  parentObj$$26.FHalfCarry = v4680 > v4681;
  parentObj$$26.FCarry = dirtySum$$1 > 65535;
  parentObj$$26.registersHL = dirtySum$$1 & 65535;
  parentObj$$26.FSubtract = false;
  return
}
function v102(parentObj$$25) {
  var v4682 = parentObj$$25;
  var v10234 = parentObj$$25.programCounter;
  var v10740 = parentObj$$25.memoryReader;
  var v10741 = parentObj$$25.programCounter;
  var v10742 = parentObj$$25.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11216 = [[parentObj$$25, v10742], v10740, v10740[v10741]]
  }
  var v10698 = JAMScript.call(v11216[2], v11216[1], v11216[0]);
  var v10524 = v10698 << 24;
  var v10235 = v10524 >> 24;
  var v9467 = v10234 + v10235;
  var v7971 = v9467 + 1;
  v4682.programCounter = v7971 & 65535;
  return
}
function v101(parentObj$$24) {
  var v4683;
  var v7972 = parentObj$$24.FCarry;
  if(v7972) {
    v4683 = 1
  }else {
    v4683 = 0
  }
  var carry_flag = v4683;
  var v4684 = parentObj$$24.registerA;
  parentObj$$24.FCarry = v4684 > 127;
  var v9468 = parentObj$$24.registerA;
  var v7973 = v9468 << 1;
  var v4685 = v7973 & 255;
  parentObj$$24.registerA = v4685 | carry_flag;
  parentObj$$24.FZero = parentObj$$24.FSubtract = parentObj$$24.FHalfCarry = false;
  return
}
function v100(parentObj$$23) {
  var v4686 = parentObj$$23;
  var v7974 = parentObj$$23.memoryReader;
  var v7975 = parentObj$$23.programCounter;
  var v7976 = parentObj$$23.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11217 = [[parentObj$$23, v7976], v7974, v7974[v7975]]
  }
  var v10939 = JAMScript.call(v11217[2], v11217[1], v11217[0]);
  v4686.registerD = v10939;
  var v7977 = parentObj$$23.programCounter;
  var v4687 = v7977 + 1;
  parentObj$$23.programCounter = v4687 & 65535;
  return
}
function v99(parentObj$$22) {
  var v7978 = parentObj$$22.registerD;
  var v4688 = v7978 - 1;
  parentObj$$22.registerD = v4688 & 255;
  var v4689 = parentObj$$22.registerD;
  parentObj$$22.FZero = v4689 == 0;
  var v7979 = parentObj$$22.registerD;
  var v4690 = v7979 & 15;
  parentObj$$22.FHalfCarry = v4690 == 15;
  parentObj$$22.FSubtract = true;
  return
}
function v98(parentObj$$21) {
  var v7980 = parentObj$$21.registerD;
  var v4691 = v7980 + 1;
  parentObj$$21.registerD = v4691 & 255;
  var v4692 = parentObj$$21.registerD;
  parentObj$$21.FZero = v4692 == 0;
  var v7981 = parentObj$$21.registerD;
  var v4693 = v7981 & 15;
  parentObj$$21.FHalfCarry = v4693 == 0;
  parentObj$$21.FSubtract = false;
  return
}
function v97(parentObj$$20) {
  var v9469 = parentObj$$20.registerD;
  var v7982 = v9469 << 8;
  var v7983 = parentObj$$20.registerE;
  var v4694 = v7982 | v7983;
  var temp_var$$3 = v4694 + 1;
  var v4695 = temp_var$$3 >> 8;
  parentObj$$20.registerD = v4695 & 255;
  parentObj$$20.registerE = temp_var$$3 & 255;
  return
}
function v96(parentObj$$19) {
  var v9470 = parentObj$$19.registerD;
  var v7984 = v9470 << 8;
  var v7985 = parentObj$$19.registerE;
  var v4696 = v7984 | v7985;
  var v4697 = parentObj$$19.registerA;
  JAMScript.call(parentObj$$19.memoryWrite, parentObj$$19, [v4696, v4697]);
  return
}
function v95(parentObj$$18) {
  var v4698 = parentObj$$18;
  var v7986 = parentObj$$18.memoryReader;
  var v7987 = parentObj$$18.programCounter;
  var v7988 = parentObj$$18.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11218 = [[parentObj$$18, v7988], v7986, v7986[v7987]]
  }
  var v10940 = JAMScript.call(v11218[2], v11218[1], v11218[0]);
  v4698.registerE = v10940;
  var v4699 = parentObj$$18;
  var v10236 = parentObj$$18.programCounter;
  var v9471 = v10236 + 1;
  var v7989 = v9471 & 65535;
  var v10941 = JAMScript.call(parentObj$$18.memoryRead, parentObj$$18, [v7989]);
  v4699.registerD = v10941;
  var v7990 = parentObj$$18.programCounter;
  var v4700 = v7990 + 2;
  parentObj$$18.programCounter = v4700 & 65535;
  return
}
function v94(parentObj$$17) {
  var v4706 = parentObj$$17.cGBC;
  if(v4706) {
    var v10237 = parentObj$$17.memory;
    var v9472 = v10237[65357];
    var v7991 = v9472 & 1;
    var v4705 = v7991 == 1;
    if(v4705) {
      var v9473 = parentObj$$17.memory;
      var v7992 = v9473[65357];
      var v4703 = v7992 > 127;
      if(v4703) {
        cout("Going into single clock speed mode.", 0);
        parentObj$$17.doubleSpeedShifter = 0;
        var v4701 = parentObj$$17.memory;
        var v9474 = v4701[65357];
        v4701[65357] = v9474 & 127
      }else {
        cout("Going into double clock speed mode.", 0);
        parentObj$$17.doubleSpeedShifter = 1;
        var v4702 = parentObj$$17.memory;
        var v9475 = v4702[65357];
        v4702[65357] = v9475 | 128
      }
      var v4704 = parentObj$$17.memory;
      var v9476 = v4704[65357];
      v4704[65357] = v9476 & 254
    }else {
      JAMScript.call(parentObj$$17.handleSTOP, parentObj$$17, [])
    }
  }else {
    JAMScript.call(parentObj$$17.handleSTOP, parentObj$$17, [])
  }
  return
}
function v93(parentObj$$16) {
  var v7993 = parentObj$$16.registerA;
  var v4707 = v7993 >> 1;
  var v9477 = parentObj$$16.registerA;
  var v7994 = v9477 & 1;
  var v4708 = v7994 << 7;
  parentObj$$16.registerA = v4707 | v4708;
  var v4709 = parentObj$$16.registerA;
  parentObj$$16.FCarry = v4709 > 127;
  parentObj$$16.FZero = parentObj$$16.FSubtract = parentObj$$16.FHalfCarry = false;
  return
}
function v92(parentObj$$15) {
  var v4710 = parentObj$$15;
  var v7995 = parentObj$$15.memoryReader;
  var v7996 = parentObj$$15.programCounter;
  var v7997 = parentObj$$15.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11219 = [[parentObj$$15, v7997], v7995, v7995[v7996]]
  }
  var v10942 = JAMScript.call(v11219[2], v11219[1], v11219[0]);
  v4710.registerC = v10942;
  var v7998 = parentObj$$15.programCounter;
  var v4711 = v7998 + 1;
  parentObj$$15.programCounter = v4711 & 65535;
  return
}
function v91(parentObj$$14) {
  var v7999 = parentObj$$14.registerC;
  var v4712 = v7999 - 1;
  parentObj$$14.registerC = v4712 & 255;
  var v4713 = parentObj$$14.registerC;
  parentObj$$14.FZero = v4713 == 0;
  var v8000 = parentObj$$14.registerC;
  var v4714 = v8000 & 15;
  parentObj$$14.FHalfCarry = v4714 == 15;
  parentObj$$14.FSubtract = true;
  return
}
function v90(parentObj$$13) {
  var v8001 = parentObj$$13.registerC;
  var v4715 = v8001 + 1;
  parentObj$$13.registerC = v4715 & 255;
  var v4716 = parentObj$$13.registerC;
  parentObj$$13.FZero = v4716 == 0;
  var v8002 = parentObj$$13.registerC;
  var v4717 = v8002 & 15;
  parentObj$$13.FHalfCarry = v4717 == 0;
  parentObj$$13.FSubtract = false;
  return
}
function v89(parentObj$$12) {
  var v10238 = parentObj$$12.registerB;
  var v9478 = v10238 << 8;
  var v9479 = parentObj$$12.registerC;
  var v8003 = v9478 | v9479;
  var v4718 = v8003 - 1;
  var temp_var$$2 = v4718 & 65535;
  parentObj$$12.registerB = temp_var$$2 >> 8;
  parentObj$$12.registerC = temp_var$$2 & 255;
  return
}
function v88(parentObj$$11) {
  var v4719 = parentObj$$11;
  var v10239 = parentObj$$11.registerB;
  var v9480 = v10239 << 8;
  var v9481 = parentObj$$11.registerC;
  var v8004 = v9480 | v9481;
  var v10943 = JAMScript.call(parentObj$$11.memoryRead, parentObj$$11, [v8004]);
  v4719.registerA = v10943;
  return
}
function v87(parentObj$$10) {
  var v4720 = parentObj$$10.registersHL;
  var v9482 = parentObj$$10.registerB;
  var v8005 = v9482 << 8;
  var v8006 = parentObj$$10.registerC;
  var v4721 = v8005 | v8006;
  var dirtySum = v4720 + v4721;
  var v8007 = parentObj$$10.registersHL;
  var v4722 = v8007 & 4095;
  var v4723 = dirtySum & 4095;
  parentObj$$10.FHalfCarry = v4722 > v4723;
  parentObj$$10.FCarry = dirtySum > 65535;
  parentObj$$10.registersHL = dirtySum & 65535;
  parentObj$$10.FSubtract = false;
  return
}
function v86(parentObj$$9) {
  var v10525 = parentObj$$9.programCounter;
  var v10240 = v10525 + 1;
  var v9483 = v10240 & 65535;
  var v8008 = JAMScript.call(parentObj$$9.memoryRead, parentObj$$9, [v9483]);
  var v4724 = v8008 << 8;
  var v8009 = parentObj$$9.memoryReader;
  var v8010 = parentObj$$9.programCounter;
  var v8011 = parentObj$$9.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11220 = [[parentObj$$9, v8011], v8009, v8009[v8010]]
  }
  var v4725 = JAMScript.call(v11220[2], v11220[1], v11220[0]);
  var temp_var$$1 = v4724 | v4725;
  var v8012 = parentObj$$9.programCounter;
  var v4726 = v8012 + 2;
  parentObj$$9.programCounter = v4726 & 65535;
  var v8013 = parentObj$$9.stackPointer;
  var v4727 = v8013 & 255;
  JAMScript.call(parentObj$$9.memoryWrite, parentObj$$9, [temp_var$$1, v4727]);
  var v8014 = temp_var$$1 + 1;
  var v4728 = v8014 & 65535;
  var v8015 = parentObj$$9.stackPointer;
  var v4729 = v8015 >> 8;
  JAMScript.call(parentObj$$9.memoryWrite, parentObj$$9, [v4728, v4729]);
  return
}
function v85(parentObj$$8) {
  var v4730 = parentObj$$8.registerA;
  parentObj$$8.FCarry = v4730 > 127;
  var v9484 = parentObj$$8.registerA;
  var v8016 = v9484 << 1;
  var v4731 = v8016 & 255;
  var v8017 = parentObj$$8.registerA;
  var v4732 = v8017 >> 7;
  parentObj$$8.registerA = v4731 | v4732;
  parentObj$$8.FZero = parentObj$$8.FSubtract = parentObj$$8.FHalfCarry = false;
  return
}
function v84(parentObj$$7) {
  var v4733 = parentObj$$7;
  var v8018 = parentObj$$7.memoryReader;
  var v8019 = parentObj$$7.programCounter;
  var v8020 = parentObj$$7.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11221 = [[parentObj$$7, v8020], v8018, v8018[v8019]]
  }
  var v10944 = JAMScript.call(v11221[2], v11221[1], v11221[0]);
  v4733.registerB = v10944;
  var v8021 = parentObj$$7.programCounter;
  var v4734 = v8021 + 1;
  parentObj$$7.programCounter = v4734 & 65535;
  return
}
function v83(parentObj$$6) {
  var v8022 = parentObj$$6.registerB;
  var v4735 = v8022 - 1;
  parentObj$$6.registerB = v4735 & 255;
  var v4736 = parentObj$$6.registerB;
  parentObj$$6.FZero = v4736 == 0;
  var v8023 = parentObj$$6.registerB;
  var v4737 = v8023 & 15;
  parentObj$$6.FHalfCarry = v4737 == 15;
  parentObj$$6.FSubtract = true;
  return
}
function v82(parentObj$$5) {
  var v8024 = parentObj$$5.registerB;
  var v4738 = v8024 + 1;
  parentObj$$5.registerB = v4738 & 255;
  var v4739 = parentObj$$5.registerB;
  parentObj$$5.FZero = v4739 == 0;
  var v8025 = parentObj$$5.registerB;
  var v4740 = v8025 & 15;
  parentObj$$5.FHalfCarry = v4740 == 0;
  parentObj$$5.FSubtract = false;
  return
}
function v81(parentObj$$4) {
  var v9485 = parentObj$$4.registerB;
  var v8026 = v9485 << 8;
  var v8027 = parentObj$$4.registerC;
  var v4741 = v8026 | v8027;
  var temp_var = v4741 + 1;
  var v4742 = temp_var >> 8;
  parentObj$$4.registerB = v4742 & 255;
  parentObj$$4.registerC = temp_var & 255;
  return
}
function v80(parentObj$$3) {
  var v9486 = parentObj$$3.registerB;
  var v8028 = v9486 << 8;
  var v8029 = parentObj$$3.registerC;
  var v4743 = v8028 | v8029;
  var v4744 = parentObj$$3.registerA;
  JAMScript.call(parentObj$$3.memoryWrite, parentObj$$3, [v4743, v4744]);
  return
}
function v79(parentObj$$2) {
  var v4745 = parentObj$$2;
  var v8030 = parentObj$$2.memoryReader;
  var v8031 = parentObj$$2.programCounter;
  var v8032 = parentObj$$2.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11222 = [[parentObj$$2, v8032], v8030, v8030[v8031]]
  }
  var v10945 = JAMScript.call(v11222[2], v11222[1], v11222[0]);
  v4745.registerC = v10945;
  var v4746 = parentObj$$2;
  var v10241 = parentObj$$2.programCounter;
  var v9487 = v10241 + 1;
  var v8033 = v9487 & 65535;
  var v10946 = JAMScript.call(parentObj$$2.memoryRead, parentObj$$2, [v8033]);
  v4746.registerB = v10946;
  var v8034 = parentObj$$2.programCounter;
  var v4747 = v8034 + 2;
  parentObj$$2.programCounter = v4747 & 65535;
  return
}
function v78(parentObj$$1) {
  return
}
function v77(typedArray) {
  typedArray[0] = -1;
  var v8035 = typedArray[0];
  typedArray[0] = v8035 >> 0;
  var v8036 = typedArray[0];
  var v4748 = v8036 != 255;
  if(v4748) {
    return[]
  }else {
    return typedArray
  }
  return
}
function v76(bufferLength$$1) {
  try {
    var v4749 = new Uint8Array(bufferLength$$1);
    return JAMScript.call(this.checkForOperaMathBug, this, [v4749])
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
  var v4750 = this.finalResultSize;
  var v10947 = JAMScript.call(this.generateUint8Buffer, this, [v4750]);
  this.heightBuffer = v10947;
  var v4752 = !BILINEARAlgo$$1;
  if(v4752) {
    var v4751 = this.targetWidthMultipliedByChannels;
    var v10948 = JAMScript.call(this.generateFloatBuffer, this, [v4751]);
    this.outputHeightWorkBench = v10948
  }
  return
}
function v73(BILINEARAlgo) {
  var v4753 = this.widthPassResultSize;
  var v10949 = JAMScript.call(this.generateFloatBuffer, this, [v4753]);
  this.widthBuffer = v10949;
  var v4755 = !BILINEARAlgo;
  if(v4755) {
    var v4754 = this.originalHeightMultipliedByChannels;
    var v10950 = JAMScript.call(this.generateFloatBuffer, this, [v4754]);
    this.outputWidthWorkBench = v10950
  }
  return
}
function v72(buffer$$26) {
  return buffer$$26
}
function v71(buffer$$25) {
  var v4756 = JAMScript.call(this.resizeWidth, this, [buffer$$25]);
  return JAMScript.call(this.resizeHeight, this, [v4756])
}
function v70(buffer$$24) {
  var v8037 = this.heightOriginal;
  var v4757 = v8037 - 1;
  var v4758 = this.targetHeight;
  var ratioWeight$$7 = v4757 / v4758;
  var weight$$7 = 0;
  var finalOffset$$3 = 0;
  var pixelOffset$$7 = 0;
  var outputBuffer$$7 = this.heightBuffer;
  var v8038 = this.finalResultSize;
  var v4765 = pixelOffset$$7 < v8038;
  for(;v4765;) {
    secondWeight = weight$$7 % 1;
    firstWeight = 1 - secondWeight;
    var v4759 = Math.floor(weight$$7);
    pixelOffset$$7 = v4759 * 4;
    var v8039 = this.targetWidthMultipliedByChannels;
    var v4764 = pixelOffset$$7 < v8039;
    for(;v4764;) {
      var v4760 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9488 = buffer$$24[pixelOffset$$7]
      }
      var v8040 = v9488 * firstWeight;
      var v10242 = pixelOffset$$7 + 4;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9489 = buffer$$24[v10242]
      }
      var v8041 = v9489 * secondWeight;
      outputBuffer$$7[v4760] = v8040 + v8041;
      var v4761 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      var v10243 = pixelOffset$$7 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9490 = buffer$$24[v10243]
      }
      var v8042 = v9490 * firstWeight;
      var v10244 = pixelOffset$$7 + 5;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9491 = buffer$$24[v10244]
      }
      var v8043 = v9491 * secondWeight;
      outputBuffer$$7[v4761] = v8042 + v8043;
      var v4762 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      var v10245 = pixelOffset$$7 + 2;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9492 = buffer$$24[v10245]
      }
      var v8044 = v9492 * firstWeight;
      var v10246 = pixelOffset$$7 + 6;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9493 = buffer$$24[v10246]
      }
      var v8045 = v9493 * secondWeight;
      outputBuffer$$7[v4762] = v8044 + v8045;
      var v4763 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      var v10247 = pixelOffset$$7 + 3;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9494 = buffer$$24[v10247]
      }
      var v8046 = v9494 * firstWeight;
      var v10248 = pixelOffset$$7 + 7;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9495 = buffer$$24[v10248]
      }
      var v8047 = v9495 * secondWeight;
      outputBuffer$$7[v4763] = v8046 + v8047;
      pixelOffset$$7 = pixelOffset$$7 + 4;
      var v8048 = this.targetWidthMultipliedByChannels;
      v4764 = pixelOffset$$7 < v8048
    }
    weight$$7 = weight$$7 + ratioWeight$$7;
    var v8049 = this.finalResultSize;
    v4765 = pixelOffset$$7 < v8049
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
  var v8050 = this.finalResultSize;
  var v4793 = outputOffset$$3 < v8050;
  do {
    pixelOffset$$6 = 0;
    var v8051 = this.targetWidthMultipliedByChannels;
    var v4770 = pixelOffset$$6 < v8051;
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
      var v8052 = this.targetWidthMultipliedByChannels;
      v4770 = pixelOffset$$6 < v8052
    }
    weight$$6 = ratioWeight$$6;
    var v8053 = weight$$6 > 0;
    if(v8053) {
      var v9496 = this.widthPassResultSize;
      v8053 = actualPosition$$3 < v9496
    }
    var v4783 = v8053;
    do {
      var v4771 = 1 + actualPosition$$3;
      amountToNext$$3 = v4771 - currentPosition$$3;
      var v4782 = weight$$6 >= amountToNext$$3;
      if(v4782) {
        pixelOffset$$6 = 0;
        var v8054 = this.targetWidthMultipliedByChannels;
        var v4776 = pixelOffset$$6 < v8054;
        for(;v4776;) {
          var v4772 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9497 = output$$3[v4772]
          }
          var v10526 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10249 = buffer$$23[v10526]
          }
          var v9498 = v10249 * amountToNext$$3;
          output$$3[v4772] = v9497 + v9498;
          var v4773 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9499 = output$$3[v4773]
          }
          var v10527 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10250 = buffer$$23[v10527]
          }
          var v9500 = v10250 * amountToNext$$3;
          output$$3[v4773] = v9499 + v9500;
          var v4774 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9501 = output$$3[v4774]
          }
          var v10528 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10251 = buffer$$23[v10528]
          }
          var v9502 = v10251 * amountToNext$$3;
          output$$3[v4774] = v9501 + v9502;
          var v4775 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9503 = output$$3[v4775]
          }
          var v10529 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10252 = buffer$$23[v10529]
          }
          var v9504 = v10252 * amountToNext$$3;
          output$$3[v4775] = v9503 + v9504;
          var v8055 = this.targetWidthMultipliedByChannels;
          v4776 = pixelOffset$$6 < v8055
        }
        currentPosition$$3 = actualPosition$$3;
        weight$$6 = weight$$6 - amountToNext$$3
      }else {
        pixelOffset$$6 = 0;
        amountToNext$$3 = actualPosition$$3;
        var v8056 = this.targetWidthMultipliedByChannels;
        var v4781 = pixelOffset$$6 < v8056;
        for(;v4781;) {
          var v4777 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9505 = output$$3[v4777]
          }
          var v10530 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10253 = buffer$$23[v10530]
          }
          var v9506 = v10253 * weight$$6;
          output$$3[v4777] = v9505 + v9506;
          var v4778 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9507 = output$$3[v4778]
          }
          var v10531 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10254 = buffer$$23[v10531]
          }
          var v9508 = v10254 * weight$$6;
          output$$3[v4778] = v9507 + v9508;
          var v4779 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9509 = output$$3[v4779]
          }
          var v10532 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10255 = buffer$$23[v10532]
          }
          var v9510 = v10255 * weight$$6;
          output$$3[v4779] = v9509 + v9510;
          var v4780 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9511 = output$$3[v4780]
          }
          var v10533 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10256 = buffer$$23[v10533]
          }
          var v9512 = v10256 * weight$$6;
          output$$3[v4780] = v9511 + v9512;
          var v8057 = this.targetWidthMultipliedByChannels;
          v4781 = pixelOffset$$6 < v8057
        }
        currentPosition$$3 = currentPosition$$3 + weight$$6;
        break
      }
      var v8058 = weight$$6 > 0;
      if(v8058) {
        var v9513 = this.widthPassResultSize;
        v8058 = actualPosition$$3 < v9513
      }
      v4783 = v8058
    }while(v4783);
    pixelOffset$$6 = 0;
    var v8059 = this.targetWidthMultipliedByChannels;
    var v4792 = pixelOffset$$6 < v8059;
    for(;v4792;) {
      var v4784 = outputBuffer$$6;
      var v4785 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10257 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9514 = output$$3[v10257]
      }
      var v8060 = v9514 / ratioWeight$$6;
      var v10951 = Math.round(v8060);
      v4784[v4785] = v10951;
      var v4786 = outputBuffer$$6;
      var v4787 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10258 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9515 = output$$3[v10258]
      }
      var v8061 = v9515 / ratioWeight$$6;
      var v10952 = Math.round(v8061);
      v4786[v4787] = v10952;
      var v4788 = outputBuffer$$6;
      var v4789 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10259 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9516 = output$$3[v10259]
      }
      var v8062 = v9516 / ratioWeight$$6;
      var v10953 = Math.round(v8062);
      v4788[v4789] = v10953;
      var v4790 = outputBuffer$$6;
      var v4791 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v10260 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9517 = output$$3[v10260]
      }
      var v8063 = v9517 / ratioWeight$$6;
      var v10954 = Math.round(v8063);
      v4790[v4791] = v10954;
      var v8064 = this.targetWidthMultipliedByChannels;
      v4792 = pixelOffset$$6 < v8064
    }
    var v8065 = this.finalResultSize;
    v4793 = outputOffset$$3 < v8065
  }while(v4793);
  return outputBuffer$$6
}
function v68(buffer$$22) {
  var v8066 = this.heightOriginal;
  var v4794 = v8066 - 1;
  var v4795 = this.targetHeight;
  var ratioWeight$$5 = v4794 / v4795;
  var weight$$5 = 0;
  var finalOffset$$2 = 0;
  var pixelOffset$$5 = 0;
  var pixelOffsetAccumulated = 0;
  var pixelOffsetAccumulated2 = 0;
  var outputBuffer$$5 = this.heightBuffer;
  var v8067 = this.finalResultSize;
  var v4801 = finalOffset$$2 < v8067;
  do {
    secondWeight = weight$$5 % 1;
    firstWeight = 1 - secondWeight;
    var v4796 = Math.floor(weight$$5);
    var v4797 = this.targetWidthMultipliedByChannels;
    pixelOffsetAccumulated = v4796 * v4797;
    var v4798 = this.targetWidthMultipliedByChannels;
    pixelOffsetAccumulated2 = pixelOffsetAccumulated + v4798;
    pixelOffset$$5 = 0;
    var v8068 = this.targetWidthMultipliedByChannels;
    var v4800 = pixelOffset$$5 < v8068;
    for(;v4800;) {
      var v4799 = finalOffset$$2;
      finalOffset$$2 = finalOffset$$2 + 1;
      var v10261 = pixelOffsetAccumulated + pixelOffset$$5;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9518 = buffer$$22[v10261]
      }
      var v8069 = v9518 * firstWeight;
      var v10262 = pixelOffsetAccumulated2 + pixelOffset$$5;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9519 = buffer$$22[v10262]
      }
      var v8070 = v9519 * secondWeight;
      outputBuffer$$5[v4799] = v8069 + v8070;
      pixelOffset$$5 = pixelOffset$$5 + 1;
      var v8071 = this.targetWidthMultipliedByChannels;
      v4800 = pixelOffset$$5 < v8071
    }
    weight$$5 = weight$$5 + ratioWeight$$5;
    var v8072 = this.finalResultSize;
    v4801 = finalOffset$$2 < v8072
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
  var v8073 = this.finalResultSize;
  var v4824 = outputOffset$$2 < v8073;
  do {
    pixelOffset$$4 = 0;
    var v8074 = this.targetWidthMultipliedByChannels;
    var v4805 = pixelOffset$$4 < v8074;
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
      var v8075 = this.targetWidthMultipliedByChannels;
      v4805 = pixelOffset$$4 < v8075
    }
    weight$$4 = ratioWeight$$4;
    var v8076 = weight$$4 > 0;
    if(v8076) {
      var v9520 = this.widthPassResultSize;
      v8076 = actualPosition$$2 < v9520
    }
    var v4816 = v8076;
    do {
      var v4806 = 1 + actualPosition$$2;
      amountToNext$$2 = v4806 - currentPosition$$2;
      var v4815 = weight$$4 >= amountToNext$$2;
      if(v4815) {
        pixelOffset$$4 = 0;
        var v8077 = this.targetWidthMultipliedByChannels;
        var v4810 = pixelOffset$$4 < v8077;
        for(;v4810;) {
          var v4807 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9521 = output$$2[v4807]
          }
          var v10534 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10263 = buffer$$21[v10534]
          }
          var v9522 = v10263 * amountToNext$$2;
          output$$2[v4807] = v9521 + v9522;
          var v4808 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9523 = output$$2[v4808]
          }
          var v10535 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10264 = buffer$$21[v10535]
          }
          var v9524 = v10264 * amountToNext$$2;
          output$$2[v4808] = v9523 + v9524;
          var v4809 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9525 = output$$2[v4809]
          }
          var v10536 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10265 = buffer$$21[v10536]
          }
          var v9526 = v10265 * amountToNext$$2;
          output$$2[v4809] = v9525 + v9526;
          var v8078 = this.targetWidthMultipliedByChannels;
          v4810 = pixelOffset$$4 < v8078
        }
        currentPosition$$2 = actualPosition$$2;
        weight$$4 = weight$$4 - amountToNext$$2
      }else {
        pixelOffset$$4 = 0;
        amountToNext$$2 = actualPosition$$2;
        var v8079 = this.targetWidthMultipliedByChannels;
        var v4814 = pixelOffset$$4 < v8079;
        for(;v4814;) {
          var v4811 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9527 = output$$2[v4811]
          }
          var v10537 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10266 = buffer$$21[v10537]
          }
          var v9528 = v10266 * weight$$4;
          output$$2[v4811] = v9527 + v9528;
          var v4812 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9529 = output$$2[v4812]
          }
          var v10538 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10267 = buffer$$21[v10538]
          }
          var v9530 = v10267 * weight$$4;
          output$$2[v4812] = v9529 + v9530;
          var v4813 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9531 = output$$2[v4813]
          }
          var v10539 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10268 = buffer$$21[v10539]
          }
          var v9532 = v10268 * weight$$4;
          output$$2[v4813] = v9531 + v9532;
          var v8080 = this.targetWidthMultipliedByChannels;
          v4814 = pixelOffset$$4 < v8080
        }
        currentPosition$$2 = currentPosition$$2 + weight$$4;
        break
      }
      var v8081 = weight$$4 > 0;
      if(v8081) {
        var v9533 = this.widthPassResultSize;
        v8081 = actualPosition$$2 < v9533
      }
      v4816 = v8081
    }while(v4816);
    pixelOffset$$4 = 0;
    var v8082 = this.targetWidthMultipliedByChannels;
    var v4823 = pixelOffset$$4 < v8082;
    for(;v4823;) {
      var v4817 = outputBuffer$$4;
      var v4818 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v10269 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9534 = output$$2[v10269]
      }
      var v8083 = v9534 / ratioWeight$$4;
      var v10955 = Math.round(v8083);
      v4817[v4818] = v10955;
      var v4819 = outputBuffer$$4;
      var v4820 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v10270 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9535 = output$$2[v10270]
      }
      var v8084 = v9535 / ratioWeight$$4;
      var v10956 = Math.round(v8084);
      v4819[v4820] = v10956;
      var v4821 = outputBuffer$$4;
      var v4822 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v10271 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9536 = output$$2[v10271]
      }
      var v8085 = v9536 / ratioWeight$$4;
      var v10957 = Math.round(v8085);
      v4821[v4822] = v10957;
      var v8086 = this.targetWidthMultipliedByChannels;
      v4823 = pixelOffset$$4 < v8086
    }
    var v8087 = this.finalResultSize;
    v4824 = outputOffset$$2 < v8087
  }while(v4824);
  return outputBuffer$$4
}
function v66(buffer$$20) {
  var v8088 = this.widthOriginal;
  var v4825 = v8088 - 1;
  var v4826 = this.targetWidth;
  var ratioWeight$$3 = v4825 / v4826;
  var weight$$3 = 0;
  var finalOffset$$1 = 0;
  var pixelOffset$$3 = 0;
  var outputBuffer$$3 = this.widthBuffer;
  var targetPosition$$1 = 0;
  var v8089 = this.targetWidthMultipliedByChannels;
  var v4833 = targetPosition$$1 < v8089;
  for(;v4833;) {
    secondWeight = weight$$3 % 1;
    firstWeight = 1 - secondWeight;
    finalOffset$$1 = targetPosition$$1;
    var v8090 = Math.floor(weight$$3);
    pixelOffset$$3 = v8090 * 4;
    var v8091 = this.widthPassResultSize;
    var v4832 = finalOffset$$1 < v8091;
    for(;v4832;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8092 = buffer$$20[pixelOffset$$3]
      }
      var v4827 = v8092 * firstWeight;
      var v9537 = pixelOffset$$3 + 4;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8093 = buffer$$20[v9537]
      }
      var v4828 = v8093 * secondWeight;
      JAMScript.set(outputBuffer$$3, finalOffset$$1, v4827 + v4828);
      var v4829 = finalOffset$$1 + 1;
      var v10272 = pixelOffset$$3 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9538 = buffer$$20[v10272]
      }
      var v8094 = v9538 * firstWeight;
      var v10273 = pixelOffset$$3 + 5;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9539 = buffer$$20[v10273]
      }
      var v8095 = v9539 * secondWeight;
      JAMScript.set(outputBuffer$$3, v4829, v8094 + v8095);
      var v4830 = finalOffset$$1 + 2;
      var v10274 = pixelOffset$$3 + 2;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9540 = buffer$$20[v10274]
      }
      var v8096 = v9540 * firstWeight;
      var v10275 = pixelOffset$$3 + 6;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9541 = buffer$$20[v10275]
      }
      var v8097 = v9541 * secondWeight;
      JAMScript.set(outputBuffer$$3, v4830, v8096 + v8097);
      var v4831 = finalOffset$$1 + 3;
      var v10276 = pixelOffset$$3 + 3;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9542 = buffer$$20[v10276]
      }
      var v8098 = v9542 * firstWeight;
      var v10277 = pixelOffset$$3 + 7;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9543 = buffer$$20[v10277]
      }
      var v8099 = v9543 * secondWeight;
      JAMScript.set(outputBuffer$$3, v4831, v8098 + v8099);
      var v10278 = this.originalWidthMultipliedByChannels;
      pixelOffset$$3 = pixelOffset$$3 + v10278;
      var v10279 = this.targetWidthMultipliedByChannels;
      finalOffset$$1 = finalOffset$$1 + v10279;
      var v8100 = this.widthPassResultSize;
      v4832 = finalOffset$$1 < v8100
    }
    targetPosition$$1 = targetPosition$$1 + 4;
    weight$$3 = weight$$3 + ratioWeight$$3;
    var v8101 = this.targetWidthMultipliedByChannels;
    v4833 = targetPosition$$1 < v8101
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
  var v4834 = this.originalWidthMultipliedByChannels;
  var nextLineOffsetOriginalWidth$$1 = v4834 - 3;
  var v4835 = this.targetWidthMultipliedByChannels;
  var nextLineOffsetTargetWidth$$1 = v4835 - 3;
  var output$$1 = this.outputWidthWorkBench;
  var outputBuffer$$2 = this.widthBuffer;
  var v8102 = this.targetWidthMultipliedByChannels;
  var v4859 = outputOffset$$1 < v8102;
  do {
    line$$1 = 0;
    var v8103 = this.originalHeightMultipliedByChannels;
    var v4840 = line$$1 < v8103;
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
      var v8104 = this.originalHeightMultipliedByChannels;
      v4840 = line$$1 < v8104
    }
    weight$$2 = ratioWeight$$2;
    var v8105 = weight$$2 > 0;
    if(v8105) {
      var v9544 = this.originalWidthMultipliedByChannels;
      v8105 = actualPosition$$1 < v9544
    }
    var v4853 = v8105;
    do {
      var v4841 = 1 + actualPosition$$1;
      amountToNext$$1 = v4841 - currentPosition$$1;
      var v4852 = weight$$2 >= amountToNext$$1;
      if(v4852) {
        line$$1 = 0;
        pixelOffset$$2 = actualPosition$$1;
        var v8106 = this.originalHeightMultipliedByChannels;
        var v4846 = line$$1 < v8106;
        for(;v4846;) {
          var v4842 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9545 = output$$1[v4842]
          }
          var v10540 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10280 = buffer$$19[v10540]
          }
          var v9546 = v10280 * amountToNext$$1;
          output$$1[v4842] = v9545 + v9546;
          var v4843 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9547 = output$$1[v4843]
          }
          var v10541 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10281 = buffer$$19[v10541]
          }
          var v9548 = v10281 * amountToNext$$1;
          output$$1[v4843] = v9547 + v9548;
          var v4844 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9549 = output$$1[v4844]
          }
          var v10542 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10282 = buffer$$19[v10542]
          }
          var v9550 = v10282 * amountToNext$$1;
          output$$1[v4844] = v9549 + v9550;
          var v4845 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9551 = output$$1[v4845]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10283 = buffer$$19[pixelOffset$$2]
          }
          var v9552 = v10283 * amountToNext$$1;
          output$$1[v4845] = v9551 + v9552;
          pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetOriginalWidth$$1;
          var v8107 = this.originalHeightMultipliedByChannels;
          v4846 = line$$1 < v8107
        }
        currentPosition$$1 = actualPosition$$1 = actualPosition$$1 + 4;
        weight$$2 = weight$$2 - amountToNext$$1
      }else {
        line$$1 = 0;
        pixelOffset$$2 = actualPosition$$1;
        var v8108 = this.originalHeightMultipliedByChannels;
        var v4851 = line$$1 < v8108;
        for(;v4851;) {
          var v4847 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9553 = output$$1[v4847]
          }
          var v10543 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10284 = buffer$$19[v10543]
          }
          var v9554 = v10284 * weight$$2;
          output$$1[v4847] = v9553 + v9554;
          var v4848 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9555 = output$$1[v4848]
          }
          var v10544 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10285 = buffer$$19[v10544]
          }
          var v9556 = v10285 * weight$$2;
          output$$1[v4848] = v9555 + v9556;
          var v4849 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9557 = output$$1[v4849]
          }
          var v10545 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10286 = buffer$$19[v10545]
          }
          var v9558 = v10286 * weight$$2;
          output$$1[v4849] = v9557 + v9558;
          var v4850 = line$$1;
          line$$1 = line$$1 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9559 = output$$1[v4850]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10287 = buffer$$19[pixelOffset$$2]
          }
          var v9560 = v10287 * weight$$2;
          output$$1[v4850] = v9559 + v9560;
          pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetOriginalWidth$$1;
          var v8109 = this.originalHeightMultipliedByChannels;
          v4851 = line$$1 < v8109
        }
        currentPosition$$1 = currentPosition$$1 + weight$$2;
        break
      }
      var v8110 = weight$$2 > 0;
      if(v8110) {
        var v9561 = this.originalWidthMultipliedByChannels;
        v8110 = actualPosition$$1 < v9561
      }
      v4853 = v8110
    }while(v4853);
    line$$1 = 0;
    pixelOffset$$2 = outputOffset$$1;
    var v8111 = this.originalHeightMultipliedByChannels;
    var v4858 = line$$1 < v8111;
    for(;v4858;) {
      var v4854 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v9562 = line$$1;
      line$$1 = line$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8112 = output$$1[v9562]
      }
      outputBuffer$$2[v4854] = v8112 / ratioWeight$$2;
      var v4855 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v9563 = line$$1;
      line$$1 = line$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8113 = output$$1[v9563]
      }
      outputBuffer$$2[v4855] = v8113 / ratioWeight$$2;
      var v4856 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v9564 = line$$1;
      line$$1 = line$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8114 = output$$1[v9564]
      }
      outputBuffer$$2[v4856] = v8114 / ratioWeight$$2;
      var v8115 = line$$1;
      line$$1 = line$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v4857 = output$$1[v8115]
      }
      outputBuffer$$2[pixelOffset$$2] = v4857 / ratioWeight$$2;
      pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetTargetWidth$$1;
      var v8116 = this.originalHeightMultipliedByChannels;
      v4858 = line$$1 < v8116
    }
    outputOffset$$1 = outputOffset$$1 + 4;
    var v8117 = this.targetWidthMultipliedByChannels;
    v4859 = outputOffset$$1 < v8117
  }while(v4859);
  return outputBuffer$$2
}
function v64(buffer$$18) {
  var v8118 = this.widthOriginal;
  var v4860 = v8118 - 1;
  var v4861 = this.targetWidth;
  var ratioWeight$$1 = v4860 / v4861;
  var weight$$1 = 0;
  var finalOffset = 0;
  var pixelOffset$$1 = 0;
  var outputBuffer$$1 = this.widthBuffer;
  var targetPosition = 0;
  var v8119 = this.targetWidthMultipliedByChannels;
  var v4867 = targetPosition < v8119;
  for(;v4867;) {
    secondWeight = weight$$1 % 1;
    firstWeight = 1 - secondWeight;
    finalOffset = targetPosition;
    var v8120 = Math.floor(weight$$1);
    pixelOffset$$1 = v8120 * 3;
    var v8121 = this.widthPassResultSize;
    var v4866 = finalOffset < v8121;
    for(;v4866;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8122 = buffer$$18[pixelOffset$$1]
      }
      var v4862 = v8122 * firstWeight;
      var v9565 = pixelOffset$$1 + 3;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8123 = buffer$$18[v9565]
      }
      var v4863 = v8123 * secondWeight;
      JAMScript.set(outputBuffer$$1, finalOffset, v4862 + v4863);
      var v4864 = finalOffset + 1;
      var v10288 = pixelOffset$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9566 = buffer$$18[v10288]
      }
      var v8124 = v9566 * firstWeight;
      var v10289 = pixelOffset$$1 + 4;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9567 = buffer$$18[v10289]
      }
      var v8125 = v9567 * secondWeight;
      JAMScript.set(outputBuffer$$1, v4864, v8124 + v8125);
      var v4865 = finalOffset + 2;
      var v10290 = pixelOffset$$1 + 2;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9568 = buffer$$18[v10290]
      }
      var v8126 = v9568 * firstWeight;
      var v10291 = pixelOffset$$1 + 5;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9569 = buffer$$18[v10291]
      }
      var v8127 = v9569 * secondWeight;
      JAMScript.set(outputBuffer$$1, v4865, v8126 + v8127);
      var v10292 = this.originalWidthMultipliedByChannels;
      pixelOffset$$1 = pixelOffset$$1 + v10292;
      var v10293 = this.targetWidthMultipliedByChannels;
      finalOffset = finalOffset + v10293;
      var v8128 = this.widthPassResultSize;
      v4866 = finalOffset < v8128
    }
    targetPosition = targetPosition + 3;
    weight$$1 = weight$$1 + ratioWeight$$1;
    var v8129 = this.targetWidthMultipliedByChannels;
    v4867 = targetPosition < v8129
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
  var v4868 = this.originalWidthMultipliedByChannels;
  var nextLineOffsetOriginalWidth = v4868 - 2;
  var v4869 = this.targetWidthMultipliedByChannels;
  var nextLineOffsetTargetWidth = v4869 - 2;
  var output = this.outputWidthWorkBench;
  var outputBuffer = this.widthBuffer;
  var v8130 = this.targetWidthMultipliedByChannels;
  var v4889 = outputOffset < v8130;
  do {
    line = 0;
    var v8131 = this.originalHeightMultipliedByChannels;
    var v4873 = line < v8131;
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
      var v8132 = this.originalHeightMultipliedByChannels;
      v4873 = line < v8132
    }
    weight = ratioWeight;
    var v8133 = weight > 0;
    if(v8133) {
      var v9570 = this.originalWidthMultipliedByChannels;
      v8133 = actualPosition < v9570
    }
    var v4884 = v8133;
    do {
      var v4874 = 1 + actualPosition;
      amountToNext = v4874 - currentPosition;
      var v4883 = weight >= amountToNext;
      if(v4883) {
        line = 0;
        pixelOffset = actualPosition;
        var v8134 = this.originalHeightMultipliedByChannels;
        var v4878 = line < v8134;
        for(;v4878;) {
          var v4875 = line;
          line = line + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9571 = output[v4875]
          }
          var v10546 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10294 = buffer$$17[v10546]
          }
          var v9572 = v10294 * amountToNext;
          output[v4875] = v9571 + v9572;
          var v4876 = line;
          line = line + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9573 = output[v4876]
          }
          var v10547 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10295 = buffer$$17[v10547]
          }
          var v9574 = v10295 * amountToNext;
          output[v4876] = v9573 + v9574;
          var v4877 = line;
          line = line + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9575 = output[v4877]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10296 = buffer$$17[pixelOffset]
          }
          var v9576 = v10296 * amountToNext;
          output[v4877] = v9575 + v9576;
          pixelOffset = pixelOffset + nextLineOffsetOriginalWidth;
          var v8135 = this.originalHeightMultipliedByChannels;
          v4878 = line < v8135
        }
        currentPosition = actualPosition = actualPosition + 3;
        weight = weight - amountToNext
      }else {
        line = 0;
        pixelOffset = actualPosition;
        var v8136 = this.originalHeightMultipliedByChannels;
        var v4882 = line < v8136;
        for(;v4882;) {
          var v4879 = line;
          line = line + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9577 = output[v4879]
          }
          var v10548 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10297 = buffer$$17[v10548]
          }
          var v9578 = v10297 * weight;
          output[v4879] = v9577 + v9578;
          var v4880 = line;
          line = line + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9579 = output[v4880]
          }
          var v10549 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10298 = buffer$$17[v10549]
          }
          var v9580 = v10298 * weight;
          output[v4880] = v9579 + v9580;
          var v4881 = line;
          line = line + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9581 = output[v4881]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10299 = buffer$$17[pixelOffset]
          }
          var v9582 = v10299 * weight;
          output[v4881] = v9581 + v9582;
          pixelOffset = pixelOffset + nextLineOffsetOriginalWidth;
          var v8137 = this.originalHeightMultipliedByChannels;
          v4882 = line < v8137
        }
        currentPosition = currentPosition + weight;
        break
      }
      var v8138 = weight > 0;
      if(v8138) {
        var v9583 = this.originalWidthMultipliedByChannels;
        v8138 = actualPosition < v9583
      }
      v4884 = v8138
    }while(v4884);
    line = 0;
    pixelOffset = outputOffset;
    var v8139 = this.originalHeightMultipliedByChannels;
    var v4888 = line < v8139;
    for(;v4888;) {
      var v4885 = pixelOffset;
      pixelOffset = pixelOffset + 1;
      var v9584 = line;
      line = line + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8140 = output[v9584]
      }
      outputBuffer[v4885] = v8140 / ratioWeight;
      var v4886 = pixelOffset;
      pixelOffset = pixelOffset + 1;
      var v9585 = line;
      line = line + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8141 = output[v9585]
      }
      outputBuffer[v4886] = v8141 / ratioWeight;
      var v8142 = line;
      line = line + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v4887 = output[v8142]
      }
      outputBuffer[pixelOffset] = v4887 / ratioWeight;
      pixelOffset = pixelOffset + nextLineOffsetTargetWidth;
      var v8143 = this.originalHeightMultipliedByChannels;
      v4888 = line < v8143
    }
    outputOffset = outputOffset + 3;
    var v8144 = this.targetWidthMultipliedByChannels;
    v4889 = outputOffset < v8144
  }while(v4889);
  return outputBuffer
}
function v62() {
  var v9586 = this.widthOriginal;
  var v8145 = v9586 > 0;
  if(v8145) {
    var v10300 = this.heightOriginal;
    var v9587 = v10300 > 0;
    if(v9587) {
      var v10550 = this.targetWidth;
      var v10301 = v10550 > 0;
      if(v10301) {
        var v10551 = this.targetHeight;
        v10301 = v10551 > 0
      }
      v9587 = v10301
    }
    v8145 = v9587
  }
  var v4901 = v8145;
  if(v4901) {
    var v8146 = this.widthOriginal;
    var v8147 = this.targetWidth;
    var v4895 = v8146 == v8147;
    if(v4895) {
      this.resizeWidth = this.bypassResizer
    }else {
      var v4890 = this.widthOriginal;
      var v4891 = this.targetWidth;
      this.ratioWeightWidthPass = v4890 / v4891;
      var v9588 = this.ratioWeightWidthPass;
      var v8148 = v9588 < 1;
      if(v8148) {
        v8148 = this.interpolationPass
      }
      var v4894 = v8148;
      if(v4894) {
        JAMScript.call(this.initializeFirstPassBuffers, this, [true]);
        var v4892;
        var v9589 = this.colorChannels;
        var v8149 = v9589 == 4;
        if(v8149) {
          v4892 = this.resizeWidthInterpolatedRGBA
        }else {
          v4892 = this.resizeWidthInterpolatedRGB
        }
        this.resizeWidth = v4892
      }else {
        JAMScript.call(this.initializeFirstPassBuffers, this, [false]);
        var v4893;
        var v9590 = this.colorChannels;
        var v8150 = v9590 == 4;
        if(v8150) {
          v4893 = this.resizeWidthRGBA
        }else {
          v4893 = this.resizeWidthRGB
        }
        this.resizeWidth = v4893
      }
    }
    var v8151 = this.heightOriginal;
    var v8152 = this.targetHeight;
    var v4900 = v8151 == v8152;
    if(v4900) {
      this.resizeHeight = this.bypassResizer
    }else {
      var v4896 = this.heightOriginal;
      var v4897 = this.targetHeight;
      this.ratioWeightHeightPass = v4896 / v4897;
      var v9591 = this.ratioWeightHeightPass;
      var v8153 = v9591 < 1;
      if(v8153) {
        v8153 = this.interpolationPass
      }
      var v4899 = v8153;
      if(v4899) {
        JAMScript.call(this.initializeSecondPassBuffers, this, [true]);
        this.resizeHeight = this.resizeHeightInterpolated
      }else {
        JAMScript.call(this.initializeSecondPassBuffers, this, [false]);
        var v4898;
        var v9592 = this.colorChannels;
        var v8154 = v9592 == 4;
        if(v8154) {
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
  var v4903 = !launchedContext;
  if(v4903) {
    try {
      audioContextHandle = new GameBoyAudioContext
    }catch(error$$15) {
      try {
        audioContextHandle = JAMScript.new(AudioContext, [])
      }catch(error$$16) {
        return
      }
    }
    try {
      audioSource = JAMScript.call(audioContextHandle.createBufferSource, audioContextHandle, []);
      audioSource.loop = false;
      XAudioJSSampleRate = webAudioActualSampleRate = audioContextHandle.sampleRate;
      var v4902 = audioSource;
      var v10958 = JAMScript.call(audioContextHandle.createBuffer, audioContextHandle, [1, 1, webAudioActualSampleRate]);
      v4902.buffer = v10958;
      audioNode = JAMScript.call(audioContextHandle.createJavaScriptNode, audioContextHandle, [samplesPerCallback, 1, 2]);
      audioNode.onaudioprocess = audioOutputEvent
    }catch(error$$17) {
      return
    }
    launchedContext = true
  }
  return
}
function v60() {
  var v9593 = this.flashInitialized;
  var v8155 = !v9593;
  if(v8155) {
    var v9594 = this.audioHandleFlash;
    if(v9594) {
      var v10302 = this.audioHandleFlash;
      v9594 = v10302.initialize
    }
    v8155 = v9594
  }
  var v4906 = v8155;
  if(v4906) {
    this.flashInitialized = true;
    var v4904 = this.audioHandleFlash;
    var v4905 = this.audioChannels;
    JAMScript.call(v4904.initialize, v4904, [v4905, XAudioJSVolume]);
    resetCallbackAPIAudioBuffer(44100, samplesPerCallback)
  }
  return this.flashInitialized
}
function v59(buffer$$16) {
  var v4907 = this.mozAudioTail;
  var length$$16 = v4907.length;
  var v4911 = length$$16 > 0;
  if(v4911) {
    var v4908 = this.audioHandleMoz;
    var v4909 = this.mozAudioTail;
    var samplesAccepted = JAMScript.call(v4908.mozWriteAudio, v4908, [v4909]);
    var v8156 = this.samplesAlreadyWritten;
    this.samplesAlreadyWritten = v8156 + samplesAccepted;
    var v4910 = this.mozAudioTail;
    v4910.splice(0, samplesAccepted)
  }
  var v4912 = buffer$$16.length;
  var v9595 = this.samplesAlreadyWritten;
  var v8157 = webAudioMaxBufferSize - v9595;
  var v9596 = this.audioHandleMoz;
  var v8158 = JAMScript.call(v9596.mozCurrentSampleOffset, v9596, []);
  var v4913 = v8157 + v8158;
  length$$16 = Math.min(v4912, v4913);
  var v4914 = this.audioHandleMoz;
  samplesAccepted = JAMScript.call(v4914.mozWriteAudio, v4914, [buffer$$16]);
  var v8159 = this.samplesAlreadyWritten;
  this.samplesAlreadyWritten = v8159 + samplesAccepted;
  var index$$46 = 0;
  var v4917 = length$$16 > samplesAccepted;
  for(;v4917;) {
    var v4915 = this.mozAudioTail;
    var v8160 = index$$46;
    index$$46 = index$$46 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
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
  var v4922 = v8161;
  if(v4922) {
    XAudioJSVolume = newVolume;
    var v4919 = JAMScript.call(this.checkFlashInit, this, []);
    if(v4919) {
      var v4918 = this.audioHandleFlash;
      JAMScript.call(v4918.changeVolume, v4918, [XAudioJSVolume])
    }
    var v4921 = this.mozAudioFound;
    if(v4921) {
      var v4920 = this.audioHandleMoz;
      v4920.volume = XAudioJSVolume
    }
  }
  return
}
function v57() {
  function v56(event$$2) {
    var v4923 = event$$2.success;
    if(v4923) {
      thisObj.audioHandleFlash = event$$2.ref
    }else {
      thisObj.audioType = 1
    }
    return
  }
  var existingFlashload = document.getElementById("XAudioJS");
  var v4927 = existingFlashload == null;
  if(v4927) {
    var thisObj = this;
    var mainContainerNode = document.createElement("div");
    JAMScript.call(mainContainerNode.setAttribute, mainContainerNode, ["style", "position: fixed; bottom: 0px; right: 0px; margin: 0px; padding: 0px; border: none; width: 8px; height: 8px; overflow: hidden; z-index: -1000; "]);
    var containerNode = document.createElement("div");
    JAMScript.call(containerNode.setAttribute, containerNode, ["style", "position: static; border: none; width: 0px; height: 0px; visibility: hidden; margin: 8px; padding: 0px;"]);
    JAMScript.call(containerNode.setAttribute, containerNode, ["id", "XAudioJS"]);
    JAMScript.call(mainContainerNode.appendChild, mainContainerNode, [containerNode]);
    var v8162 = document.getElementsByTagName("body");
    var v4924 = v8162[0];
    JAMScript.call(v4924.appendChild, v4924, [mainContainerNode]);
    var v4925 = {"allowscriptaccess":"always"};
    var v4926 = {"style":"position: static; visibility: hidden; margin: 8px; padding: 0px; border: none"};
    JAMScript.call(swfobject.embedSWF, swfobject, ["XAudioJS.swf", "XAudioJS", "8", "8", "9.0.0", "", {}, v4925, v4926, v56])
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
  var v4928 = getFloat32(webAudioMinBufferSize);
  JAMScript.call(this.writeMozAudio, this, [v4928]);
  this.audioType = 0;
  return
}
function v53() {
  var v10959 = JAMScript.new(Audio, []);
  this.audioHandleMoz = v10959;
  var v4929 = this.audioHandleMoz;
  var v4930 = this.audioChannels;
  JAMScript.call(v4929.mozSetup, v4929, [v4930, XAudioJSSampleRate]);
  this.samplesAlreadyWritten = 0;
  var v4931;
  var v9597 = this.audioChannels;
  var v8163 = v9597 == 2;
  if(v8163) {
    v4931 = [0, 0]
  }else {
    v4931 = [0]
  }
  var emptySampleFrame = v4931;
  var prebufferAmount = 0;
  var v9598 = navigator.platform;
  var v8164 = v9598 != "MacIntel";
  if(v8164) {
    var v9599 = navigator.platform;
    v8164 = v9599 != "MacPPC"
  }
  var v4935 = v8164;
  if(v4935) {
    var v9600 = this.audioHandleMoz;
    var v8165 = JAMScript.call(v9600.mozCurrentSampleOffset, v9600, []);
    var v4932 = v8165 == 0;
    for(;v4932;) {
      var v8166 = prebufferAmount;
      var v9601 = this.audioHandleMoz;
      var v8167 = JAMScript.call(v9601.mozWriteAudio, v9601, [emptySampleFrame]);
      prebufferAmount = v8166 + v8167;
      var v9602 = this.audioHandleMoz;
      var v8168 = JAMScript.call(v9602.mozCurrentSampleOffset, v9602, []);
      v4932 = v8168 == 0
    }
    var v4933 = this.audioChannels;
    var samplesToDoubleBuffer = prebufferAmount / v4933;
    var index$$45 = 0;
    var v4934 = index$$45 < samplesToDoubleBuffer;
    for(;v4934;) {
      var v8169 = this.samplesAlreadyWritten;
      var v9603 = this.audioHandleMoz;
      var v8170 = JAMScript.call(v9603.mozWriteAudio, v9603, [emptySampleFrame]);
      this.samplesAlreadyWritten = v8169 + v8170;
      index$$45 = index$$45 + 1;
      v4934 = index$$45 < samplesToDoubleBuffer
    }
  }
  var v8171 = this.samplesAlreadyWritten;
  this.samplesAlreadyWritten = v8171 + prebufferAmount;
  var v8172 = this.samplesAlreadyWritten;
  webAudioMinBufferSize = webAudioMinBufferSize + v8172;
  this.mozAudioFound = true;
  return
}
function v52() {
  try {
    throw new Error("Select initializeWebAudio case");
  }catch(error$$8) {
    try {
      JAMScript.call(this.initializeWebAudio, this, [])
    }catch(error$$9) {
      try {
        JAMScript.call(this.initializeFlashAudio, this, [])
      }catch(error$$10) {
        throw new Error("Browser does not support real time audio output.");
      }
    }
  }
  return
}
function v51() {
  var v8173 = this.audioType;
  var v4940 = v8173 == 0;
  if(v4940) {
    JAMScript.call(this.MOZExecuteCallback, this, [])
  }else {
    var v8174 = this.audioType;
    var v4939 = v8174 == 1;
    if(v4939) {
      JAMScript.call(this.callbackBasedExecuteCallback, this, [])
    }else {
      var v8175 = this.audioType;
      var v4938 = v8175 == 2;
      if(v4938) {
        var v8176 = JAMScript.call(this.checkFlashInit, this, []);
        var v9604 = !v8176;
        if(v9604) {
          v8176 = launchedContext
        }
        var v4937 = v8176;
        if(v4937) {
          JAMScript.call(this.callbackBasedExecuteCallback, this, [])
        }else {
          var v4936 = this.mozAudioFound;
          if(v4936) {
            JAMScript.call(this.MOZExecuteCallback, this, [])
          }
        }
      }
    }
  }
  return
}
function v50() {
  var v4941 = webAudioMinBufferSize;
  var v4942 = JAMScript.call(this.remainingBuffer, this, []);
  var samplesRequested$$1 = v4941 - v4942;
  var v4944 = samplesRequested$$1 > 0;
  if(v4944) {
    var v4943 = JAMScript.call(this.underRunCallback, this, [samplesRequested$$1]);
    JAMScript.call(this.callbackBasedWriteAudioNoCallback, this, [v4943])
  }
  return
}
function v49() {
  var v4945 = webAudioMinBufferSize;
  var v4946 = JAMScript.call(this.remainingBuffer, this, []);
  var samplesRequested = v4945 - v4946;
  var v4948 = samplesRequested > 0;
  if(v4948) {
    var v4947 = JAMScript.call(this.underRunCallback, this, [samplesRequested]);
    JAMScript.call(this.writeMozAudio, this, [v4947])
  }
  return
}
function v48() {
  var v8177 = this.audioType;
  var v4959 = v8177 == 0;
  if(v4959) {
    var v4949 = this.samplesAlreadyWritten;
    var v8178 = this.audioHandleMoz;
    var v4950 = JAMScript.call(v8178.mozCurrentSampleOffset, v8178, []);
    return v4949 - v4950
  }else {
    var v8179 = this.audioType;
    var v4958 = v8179 == 1;
    if(v4958) {
      var v10303 = resampledSamplesLeft();
      var v10304 = resampleControl.ratioWeight;
      var v9605 = v10303 * v10304;
      var v10305 = this.audioChannels;
      var v9606 = v10305 - 1;
      var v8180 = v9605 >> v9606;
      var v9607 = this.audioChannels;
      var v8181 = v9607 - 1;
      var v4951 = v8180 << v8181;
      return v4951 + audioBufferSize
    }else {
      var v8182 = this.audioType;
      var v4957 = v8182 == 2;
      if(v4957) {
        var v8183 = JAMScript.call(this.checkFlashInit, this, []);
        var v9608 = !v8183;
        if(v9608) {
          v8183 = launchedContext
        }
        var v4956 = v8183;
        if(v4956) {
          var v10306 = resampledSamplesLeft();
          var v10307 = resampleControl.ratioWeight;
          var v9609 = v10306 * v10307;
          var v10308 = this.audioChannels;
          var v9610 = v10308 - 1;
          var v8184 = v9609 >> v9610;
          var v9611 = this.audioChannels;
          var v8185 = v9611 - 1;
          var v4952 = v8184 << v8185;
          return v4952 + audioBufferSize
        }else {
          var v4955 = this.mozAudioFound;
          if(v4955) {
            var v4953 = this.samplesAlreadyWritten;
            var v8186 = this.audioHandleMoz;
            var v4954 = JAMScript.call(v8186.mozCurrentSampleOffset, v8186, []);
            return v4953 - v4954
          }
        }
      }
    }
  }
  return 0
}
function v47(buffer$$15) {
  var v8187 = this.audioType;
  var v4964 = v8187 == 0;
  if(v4964) {
    JAMScript.call(this.MOZWriteAudioNoCallback, this, [buffer$$15])
  }else {
    var v8188 = this.audioType;
    var v4963 = v8188 == 1;
    if(v4963) {
      JAMScript.call(this.callbackBasedWriteAudioNoCallback, this, [buffer$$15])
    }else {
      var v8189 = this.audioType;
      var v4962 = v8189 == 2;
      if(v4962) {
        var v8190 = JAMScript.call(this.checkFlashInit, this, []);
        var v9612 = !v8190;
        if(v9612) {
          v8190 = launchedContext
        }
        var v4961 = v8190;
        if(v4961) {
          JAMScript.call(this.callbackBasedWriteAudioNoCallback, this, [buffer$$15])
        }else {
          var v4960 = this.mozAudioFound;
          if(v4960) {
            JAMScript.call(this.MOZWriteAudioNoCallback, this, [buffer$$15])
          }
        }
      }
    }
  }
  return
}
function v46(buffer$$14) {
  var v8191 = this.audioType;
  var v4969 = v8191 == 0;
  if(v4969) {
    JAMScript.call(this.MOZWriteAudio, this, [buffer$$14])
  }else {
    var v8192 = this.audioType;
    var v4968 = v8192 == 1;
    if(v4968) {
      JAMScript.call(this.callbackBasedWriteAudio, this, [buffer$$14])
    }else {
      var v8193 = this.audioType;
      var v4967 = v8193 == 2;
      if(v4967) {
        var v8194 = JAMScript.call(this.checkFlashInit, this, []);
        var v9613 = !v8194;
        if(v9613) {
          v8194 = launchedContext
        }
        var v4966 = v8194;
        if(v4966) {
          JAMScript.call(this.callbackBasedWriteAudio, this, [buffer$$14])
        }else {
          var v4965 = this.mozAudioFound;
          if(v4965) {
            JAMScript.call(this.MOZWriteAudio, this, [buffer$$14])
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
    JAMScript.set(audioContextSampleBuffer, v4970, buffer$$13[v8196]);
    var v8197 = bufferCounter < length$$15;
    if(v8197) {
      v8197 = audioBufferSize < webAudioMaxBufferSize
    }
    v4971 = v8197
  }
  return
}
function v44(buffer$$12) {
  JAMScript.call(this.callbackBasedWriteAudioNoCallback, this, [buffer$$12]);
  JAMScript.call(this.callbackBasedExecuteCallback, this, []);
  return
}
function v43(buffer$$11) {
  JAMScript.call(this.writeMozAudio, this, [buffer$$11]);
  return
}
function v42(buffer$$10) {
  JAMScript.call(this.MOZWriteAudioNoCallback, this, [buffer$$10]);
  JAMScript.call(this.MOZExecuteCallback, this, []);
  return
}
function v41() {
  try {
    var v4972 = this.outputBufferSize;
    var v10960 = new Float32Array(v4972);
    this.outputBuffer = v10960;
    var v4973 = this.channels;
    var v10961 = new Float32Array(v4973);
    this.lastOutput = v10961
  }catch(error$$7) {
    this.outputBuffer = [];
    this.lastOutput = []
  }
  return
}
function v40(sliceAmount) {
  var v4977 = this.noReturn;
  if(v4977) {
    return sliceAmount
  }else {
    try {
      var v4974 = this.outputBuffer;
      return v4974.subarray(0, sliceAmount)
    }catch(error$$5) {
      try {
        var v4975 = this.outputBuffer;
        v4975.length = sliceAmount;
        return this.outputBuffer
      }catch(error$$6) {
        var v4976 = this.outputBuffer;
        return v4976.slice(0, sliceAmount)
      }
    }
  }
  return
}
function v39(buffer$$9) {
  var v4978 = this.noReturn;
  if(v4978) {
    this.outputBuffer = buffer$$9;
    return buffer$$9.length
  }else {
    return buffer$$9
  }
  return
}
function v38() {
  var v8198 = this.channels;
  var v4979 = "var bufferLength = Math.min(buffer.length, this.outputBufferSize);  if ((bufferLength % " + v8198;
  var toCompile = v4979 + ") == 0) {    if (bufferLength > 0) {      var ratioWeight = this.ratioWeight;      var weight = 0;";
  var channel = 0;
  var v8199 = this.channels;
  var v4980 = channel < v8199;
  for(;v4980;) {
    var v9614 = "var output" + channel;
    var v8200 = v9614 + " = 0;";
    toCompile = toCompile + v8200;
    channel = channel + 1;
    var v8201 = this.channels;
    v4980 = channel < v8201
  }
  toCompile = toCompile + "var actualPosition = 0;      var amountToNext = 0;      var alreadyProcessedTail = !this.tailExists;      this.tailExists = false;      var outputBuffer = this.outputBuffer;      var outputOffset = 0;      var currentPosition = 0;      do {        if (alreadyProcessedTail) {          weight = ratioWeight;";
  channel = 0;
  var v8202 = this.channels;
  var v4981 = channel < v8202;
  for(;v4981;) {
    var v9615 = "output" + channel;
    var v8203 = v9615 + " = 0;";
    toCompile = toCompile + v8203;
    channel = channel + 1;
    var v8204 = this.channels;
    v4981 = channel < v8204
  }
  toCompile = toCompile + "}        else {          weight = this.lastWeight;";
  channel = 0;
  var v8205 = this.channels;
  var v4982 = channel < v8205;
  for(;v4982;) {
    var v10552 = "output" + channel;
    var v10309 = v10552 + " = this.lastOutput[";
    var v9616 = v10309 + channel;
    var v8206 = v9616 + "];";
    toCompile = toCompile + v8206;
    channel = channel + 1;
    var v8207 = this.channels;
    v4982 = channel < v8207
  }
  toCompile = toCompile + "alreadyProcessedTail = true;        }        while (weight > 0 && actualPosition < bufferLength) {          amountToNext = 1 + actualPosition - currentPosition;          if (weight >= amountToNext) {";
  channel = 0;
  var v8208 = this.channels;
  var v4983 = channel < v8208;
  for(;v4983;) {
    var v9617 = "output" + channel;
    var v8209 = v9617 + " += buffer[actualPosition++] * amountToNext;";
    toCompile = toCompile + v8209;
    channel = channel + 1;
    var v8210 = this.channels;
    v4983 = channel < v8210
  }
  toCompile = toCompile + "currentPosition = actualPosition;            weight -= amountToNext;          }          else {";
  channel = 0;
  var v8211 = this.channels;
  var v4984 = channel < v8211;
  for(;v4984;) {
    var v10553 = "output" + channel;
    var v10310 = v10553 + " += buffer[actualPosition";
    var v10554;
    var v10699 = channel > 0;
    if(v10699) {
      v10554 = " + " + channel
    }else {
      v10554 = ""
    }
    var v10311 = v10554;
    var v9618 = v10310 + v10311;
    var v8212 = v9618 + "] * weight;";
    toCompile = toCompile + v8212;
    channel = channel + 1;
    var v8213 = this.channels;
    v4984 = channel < v8213
  }
  toCompile = toCompile + "currentPosition += weight;            weight = 0;            break;          }        }        if (weight == 0) {";
  channel = 0;
  var v8214 = this.channels;
  var v4985 = channel < v8214;
  for(;v4985;) {
    var v9619 = "outputBuffer[outputOffset++] = output" + channel;
    var v8215 = v9619 + " / ratioWeight;";
    toCompile = toCompile + v8215;
    channel = channel + 1;
    var v8216 = this.channels;
    v4985 = channel < v8216
  }
  toCompile = toCompile + "}        else {          this.lastWeight = weight;";
  channel = 0;
  var v8217 = this.channels;
  var v4986 = channel < v8217;
  for(;v4986;) {
    var v10555 = "this.lastOutput[" + channel;
    var v10312 = v10555 + "] = output";
    var v9620 = v10312 + channel;
    var v8218 = v9620 + ";";
    toCompile = toCompile + v8218;
    channel = channel + 1;
    var v8219 = this.channels;
    v4986 = channel < v8219
  }
  toCompile = toCompile + 'this.tailExists = true;          break;        }      } while (actualPosition < bufferLength);      return this.bufferSlice(outputOffset);    }    else {      return (this.noReturn) ? 0 : [];    }  }  else {    throw(new Error("Buffer was of incorrect sample length."));  }';
  var v10962 = JAMScript.call(Function, null, ["buffer", toCompile]);
  this.interpolate = v10962;
  return
}
function v37() {
  var v9621 = this.fromSampleRate;
  var v8220 = v9621 > 0;
  if(v8220) {
    var v10313 = this.toSampleRate;
    var v9622 = v10313 > 0;
    if(v9622) {
      var v10314 = this.channels;
      v9622 = v10314 > 0
    }
    v8220 = v9622
  }
  var v4990 = v8220;
  if(v4990) {
    var v8221 = this.fromSampleRate;
    var v8222 = this.toSampleRate;
    var v4989 = v8221 == v8222;
    if(v4989) {
      this.resampler = this.bypassResampler;
      this.ratioWeight = 1
    }else {
      JAMScript.call(this.compileInterpolationFunction, this, []);
      this.resampler = this.interpolate;
      var v4987 = this.fromSampleRate;
      var v4988 = this.toSampleRate;
      this.ratioWeight = v4987 / v4988;
      this.tailExists = false;
      this.lastWeight = 0;
      JAMScript.call(this.initializeBuffers, this, [])
    }
  }else {
    throw new Error("Invalid settings specified for the resampler.");
  }
  return
}
function v36() {
  var v4991 = this.outputBuffer;
  var event$$1 = {outputBuffer:v4991};
  JAMScript.call(this.onaudioprocess, this, [event$$1]);
  return
}
function v35() {
  return
}
function v34(runner$$2) {
  function RunNextSetup() {
    var v4993 = index$$40 < length$$12;
    if(v4993) {
      try {
        var v8223 = suite$$1.benchmarks;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v4992 = v8223[index$$40]
        }
        JAMScript.call(v4992.Setup, v4992, [])
      }catch(e$$4) {
        JAMScript.call(suite$$1.NotifyError, suite$$1, [e$$4]);
        return null
      }
      return RunNextBenchmark
    }
    JAMScript.call(suite$$1.NotifyResult, suite$$1, []);
    return null
  }
  function RunNextBenchmark() {
    try {
      var v8224 = suite$$1.benchmarks;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v4994 = v8224[index$$40]
      }
      data$$20 = JAMScript.call(suite$$1.RunSingleBenchmark, suite$$1, [v4994, data$$20])
    }catch(e$$5) {
      JAMScript.call(suite$$1.NotifyError, suite$$1, [e$$5]);
      return null
    }
    var v4995;
    var v8225 = data$$20 == null;
    if(v8225) {
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
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v4996 = v8226[v8227]
      }
      JAMScript.call(v4996.TearDown, v4996, [])
    }catch(e$$6) {
      JAMScript.call(suite$$1.NotifyError, suite$$1, [e$$6]);
      return null
    }
    return RunNextSetup
  }
  JAMScript.call(BenchmarkSuite.ResetRNG, BenchmarkSuite, []);
  this.results = [];
  this.runner = runner$$2;
  var v4997 = this.benchmarks;
  var length$$12 = v4997.length;
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
      var v9623 = benchmark$$1.deterministicIterations;
      v8228 = i$$5 < v9623
    }else {
      v8228 = elapsed < 1E3
    }
    var v4999 = v8228;
    for(;v4999;) {
      JAMScript.call(benchmark$$1.run, benchmark$$1, []);
      var v4998 = new Date;
      elapsed = v4998 - start$$5;
      i$$5 = i$$5 + 1;
      var v8229;
      if(doDeterministic$$1) {
        var v9624 = benchmark$$1.deterministicIterations;
        v8229 = i$$5 < v9624
      }else {
        v8229 = elapsed < 1E3
      }
      v4999 = v8229
    }
    var v5000 = data$$19 != null;
    if(v5000) {
      var v8230 = data$$19.runs;
      data$$19.runs = v8230 + i$$5;
      var v8231 = data$$19.elapsed;
      data$$19.elapsed = v8231 + elapsed
    }
    return
  }
  var config = BenchmarkSuite.config;
  var v5001;
  var v9625 = config.doWarmup;
  var v8232 = v9625 !== undefined;
  if(v8232) {
    v5001 = config.doWarmup
  }else {
    v5001 = benchmark$$1.doWarmup
  }
  var doWarmup$$1 = v5001;
  var v5002;
  var v9626 = config.doDeterministic;
  var v8233 = v9626 !== undefined;
  if(v8233) {
    v5002 = config.doDeterministic
  }else {
    v5002 = benchmark$$1.doDeterministic
  }
  var doDeterministic$$1 = v5002;
  var v8234 = !doWarmup$$1;
  if(v8234) {
    v8234 = data$$18 == null
  }
  var v5003 = v8234;
  if(v5003) {
    data$$18 = {runs:0, elapsed:0}
  }
  var v5009 = data$$18 == null;
  if(v5009) {
    Measure(null);
    return{runs:0, elapsed:0}
  }else {
    Measure(data$$18);
    var v8235 = data$$18.runs;
    var v8236 = benchmark$$1.minIterations;
    var v5004 = v8235 < v8236;
    if(v5004) {
      return data$$18
    }
    var v8237 = data$$18.elapsed;
    var v5005 = v8237 * 1E3;
    var v5006 = data$$18.runs;
    var usec = v5005 / v5006;
    var v5007;
    var v9627 = benchmark$$1.rmsResult;
    var v8238 = v9627 != null;
    if(v8238) {
      v5007 = JAMScript.call(benchmark$$1.rmsResult, benchmark$$1, [])
    }else {
      v5007 = 0
    }
    var rms = v5007;
    var v5008 = new BenchmarkResult(benchmark$$1, usec, rms);
    JAMScript.call(this.NotifyStep, this, [v5008]);
    return null
  }
  return
}
function v32(error$$2) {
  var v8239 = this.runner;
  var v5012 = v8239.NotifyError;
  if(v5012) {
    var v5010 = this.runner;
    var v5011 = this.name;
    JAMScript.call(v5010.NotifyError, v5010, [v5011, error$$2])
  }
  var v8240 = this.runner;
  var v5015 = v8240.NotifyStep;
  if(v5015) {
    var v5013 = this.runner;
    var v5014 = this.name;
    JAMScript.call(v5013.NotifyStep, v5013, [v5014])
  }
  return
}
function v31(runner$$1) {
  var v5016 = BenchmarkSuite.scores;
  v5016.push(1);
  var v5018 = runner$$1.NotifyResult;
  if(v5018) {
    var v5017 = this.name;
    JAMScript.call(runner$$1.NotifyResult, runner$$1, [v5017, "Skipped"])
  }
  return
}
function v30() {
  var v5019 = this.results;
  var mean = JAMScript.call(BenchmarkSuite.GeometricMeanTime, BenchmarkSuite, [v5019]);
  var v8241 = this.reference;
  var v5020 = v8241[0];
  var score$$1 = v5020 / mean;
  var v5021 = BenchmarkSuite.scores;
  v5021.push(score$$1);
  var v8242 = this.runner;
  var v5025 = v8242.NotifyResult;
  if(v5025) {
    var v5022 = 100 * score$$1;
    var formatted$$1 = JAMScript.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v5022]);
    var v5023 = this.runner;
    var v5024 = this.name;
    JAMScript.call(v5023.NotifyResult, v5023, [v5024, formatted$$1])
  }
  var v9628 = this.reference;
  var v8243 = v9628.length;
  var v5034 = v8243 == 2;
  if(v5034) {
    var v5026 = this.results;
    var meanLatency = JAMScript.call(BenchmarkSuite.GeometricMeanLatency, BenchmarkSuite, [v5026]);
    var v5033 = meanLatency != 0;
    if(v5033) {
      var v8244 = this.reference;
      var v5027 = v8244[1];
      var scoreLatency = v5027 / meanLatency;
      var v5028 = BenchmarkSuite.scores;
      v5028.push(scoreLatency);
      var v8245 = this.runner;
      var v5032 = v8245.NotifyResult;
      if(v5032) {
        var v5029 = 100 * scoreLatency;
        var formattedLatency = JAMScript.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v5029]);
        var v5030 = this.runner;
        var v8246 = this.name;
        var v5031 = v8246 + "Latency";
        JAMScript.call(v5030.NotifyResult, v5030, [v5031, formattedLatency])
      }
    }
  }
  return
}
function v29(result$$1) {
  var v5035 = this.results;
  v5035.push(result$$1);
  var v8247 = this.runner;
  var v5038 = v8247.NotifyStep;
  if(v5038) {
    var v5036 = this.runner;
    var v8248 = result$$1.benchmark;
    var v5037 = v8248.name;
    JAMScript.call(v5036.NotifyStep, v5036, [v5037])
  }
  return
}
function v28(value$$29) {
  var v5039 = value$$29 > 100;
  if(v5039) {
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
  var v8249 = measurements$$1.length;
  var v5041 = i$$4 < v8249;
  for(;v5041;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9629 = measurements$$1[i$$4]
    }
    var v8250 = v9629.latency;
    var v5040 = v8250 != 0;
    if(v5040) {
      var v8251 = log$$2;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10315 = measurements$$1[i$$4]
      }
      var v9630 = v10315.latency;
      var v8252 = Math.log(v9630);
      log$$2 = v8251 + v8252;
      hasLatencyResult = true
    }
    i$$4 = i$$4 + 1;
    var v8253 = measurements$$1.length;
    v5041 = i$$4 < v8253
  }
  if(hasLatencyResult) {
    var v5042 = Math.E;
    var v8254 = measurements$$1.length;
    var v5043 = log$$2 / v8254;
    return Math.pow(v5042, v5043)
  }else {
    return 0
  }
  return
}
function v26(measurements) {
  var log$$1 = 0;
  var i$$3 = 0;
  var v8255 = measurements.length;
  var v5044 = i$$3 < v8255;
  for(;v5044;) {
    var v8256 = log$$1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v10316 = measurements[i$$3]
    }
    var v9631 = v10316.time;
    var v8257 = Math.log(v9631);
    log$$1 = v8256 + v8257;
    i$$3 = i$$3 + 1;
    var v8258 = measurements.length;
    v5044 = i$$3 < v8258
  }
  var v5045 = Math.E;
  var v8259 = measurements.length;
  var v5046 = log$$1 / v8259;
  return Math.pow(v5045, v5046)
}
function v25(numbers) {
  var log = 0;
  var i$$2 = 0;
  var v8260 = numbers.length;
  var v5047 = i$$2 < v8260;
  for(;v5047;) {
    var v8261 = log;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9632 = numbers[i$$2]
    }
    var v8262 = Math.log(v9632);
    log = v8261 + v8262;
    i$$2 = i$$2 + 1;
    var v8263 = numbers.length;
    v5047 = i$$2 < v8263
  }
  var v5048 = Math.E;
  var v8264 = numbers.length;
  var v5049 = log / v8264;
  return Math.pow(v5048, v5049)
}
function v24() {
  var result = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$1 = 0;
  var v8265 = suites$$1.length;
  var v5050 = i$$1 < v8265;
  for(;v5050;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v10317 = suites$$1[i$$1]
    }
    var v9633 = v10317.benchmarks;
    var v8266 = v9633.length;
    result = result + v8266;
    i$$1 = i$$1 + 1;
    var v8267 = suites$$1.length;
    v5050 = i$$1 < v8267
  }
  return result
}
function v23(runner, skipBenchmarks$$1) {
  function RunStep() {
    var v8268 = continuation;
    var v9634 = !v8268;
    if(v9634) {
      v8268 = index$$39 < length$$11
    }
    var v5056 = v8268;
    for(;v5056;) {
      if(continuation) {
        continuation = JAMScript.call(continuation, null, [])
      }else {
        var v5051 = index$$39;
        index$$39 = index$$39 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var suite = suites[v5051]
        }
        var v5053 = runner.NotifyStart;
        if(v5053) {
          var v5052 = suite.name;
          JAMScript.call(runner.NotifyStart, runner, [v5052])
        }
        var v9635 = suite.name;
        var v8269 = skipBenchmarks$$1.indexOf(v9635);
        var v5054 = v8269 > -1;
        if(v5054) {
          JAMScript.call(suite.NotifySkipped, suite, [runner])
        }else {
          continuation = JAMScript.call(suite.RunStep, suite, [runner])
        }
      }
      var v8270 = continuation;
      if(v8270) {
        var v10318 = typeof window;
        var v9636 = v10318 != "undefined";
        if(v9636) {
          v9636 = window.setTimeout
        }
        v8270 = v9636
      }
      var v5055 = v8270;
      if(v5055) {
        window.setTimeout(RunStep, 25);
        return
      }
      var v8271 = continuation;
      var v9637 = !v8271;
      if(v9637) {
        v8271 = index$$39 < length$$11
      }
      v5056 = v8271
    }
    var v5059 = runner.NotifyScore;
    if(v5059) {
      var v5057 = BenchmarkSuite.scores;
      var score = JAMScript.call(BenchmarkSuite.GeometricMean, BenchmarkSuite, [v5057]);
      var v5058 = 100 * score;
      var formatted = JAMScript.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v5058]);
      JAMScript.call(runner.NotifyScore, runner, [formatted])
    }
    return
  }
  var v5060;
  var v9638 = typeof skipBenchmarks$$1;
  var v8272 = v9638 === "undefined";
  if(v8272) {
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
      var v8273 = seed + 2127912214;
      var v8274 = seed << 12;
      var v5061 = v8273 + v8274;
      seed = v5061 & 4294967295;
      var v8275 = seed ^ 3345072700;
      var v8276 = seed >>> 19;
      var v5062 = v8275 ^ v8276;
      seed = v5062 & 4294967295;
      var v8277 = seed + 374761393;
      var v8278 = seed << 5;
      var v5063 = v8277 + v8278;
      seed = v5063 & 4294967295;
      var v8279 = seed + 3550635116;
      var v8280 = seed << 9;
      var v5064 = v8279 ^ v8280;
      seed = v5064 & 4294967295;
      var v8281 = seed + 4251993797;
      var v8282 = seed << 3;
      var v5065 = v8281 + v8282;
      seed = v5065 & 4294967295;
      var v8283 = seed ^ 3042594569;
      var v8284 = seed >>> 16;
      var v5066 = v8283 ^ v8284;
      seed = v5066 & 4294967295;
      var v5067 = seed & 268435455;
      return v5067 / 268435456
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
  var v8286 = !v5069;
  if(v8286) {
    var v8285 = performance.mozNow;
    var v9640 = !v8285;
    if(v9640) {
      var v9639 = performance.msNow;
      var v10320 = !v9639;
      if(v10320) {
        var v10319 = performance.oNow;
        var v10557 = !v10319;
        if(v10557) {
          var v10556 = performance.webkitNow;
          var v10700 = !v10556;
          if(v10700) {
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
  var v5074 = BenchmarkSuite.suites;
  v5074.push(this);
  return
}
function setupGameboy() {
  var v10321 = typeof Uint8Array;
  var v9641 = v10321 != "undefined";
  if(v9641) {
    var v10558 = typeof Int8Array;
    var v10322 = v10558 != "undefined";
    if(v10322) {
      var v10701 = typeof Float32Array;
      var v10559 = v10701 != "undefined";
      if(v10559) {
        var v10702 = typeof Int32Array;
        v10559 = v10702 != "undefined"
      }
      v10322 = v10559
    }
    v9641 = v10322
  }
  var v8287 = v9641;
  var v5075 = !v8287;
  if(v5075) {
    throw"TypedArrayUnsupported";
  }
  decoded_gameboy_rom = base64_decode(gameboy_rom);
  rom = null;
  return
}
function runGameboy() {
  var v5076 = new GameBoyCanvas;
  start(v5076, decoded_gameboy_rom);
  gameboy.instructions = 0;
  gameboy.totalInstructions = 25E4;
  var v8288 = gameboy.instructions;
  var v8289 = gameboy.totalInstructions;
  var v5077 = v8288 <= v8289;
  for(;v5077;) {
    JAMScript.call(gameboy.run, gameboy, []);
    JAMScript.call(GameBoyAudioNode.run, GameBoyAudioNode, []);
    var v8290 = gameboy.instructions;
    var v8291 = gameboy.totalInstructions;
    v5077 = v8290 <= v8291
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
    var v9642 = buffer$$8.data;
    var v8292 = v9642.length;
    var v5078 = i$$6 < v8292;
    for(;v5078;) {
      var v10323 = buffer$$8.data;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9643 = v10323[i$$6]
      }
      var v8293 = i$$6 * v9643;
      sum = sum + v8293;
      sum = sum % 1E3;
      i$$6 = i$$6 + 1;
      var v9644 = buffer$$8.data;
      var v8294 = v9644.length;
      v5078 = i$$6 < v8294
    }
    return
  }
  function v3(w$$5, h$$4) {
    var result$$2 = {};
    var v5079 = result$$2;
    var v9645 = w$$5 * h$$4;
    var v8295 = v9645 * 4;
    var v10964 = new Uint8Array(v8295);
    v5079.data = v10964;
    return result$$2
  }
  function v2() {
    return JAMScript.new(Buffer, [])
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
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        return v5080[i$$8]
      }
    }
    GameBoyAudioNode.bufferSize = bufferSize;
    GameBoyAudioNode.outputBuffer = {getChannelData:v11, channelData:[]};
    var i$$7 = 0;
    var v5083 = i$$7 < outputChannels;
    for(;v5083;) {
      var v8296 = GameBoyAudioNode.outputBuffer;
      var v5081 = v8296.channelData;
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
    var v8297 = a.length;
    var v5084 = i$$9 < v8297;
    for(;v5084;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8298 = a[i$$9]
      }
      result$$3 = result$$3 + v8298;
      i$$9 = i$$9 + 1;
      var v8299 = a.length;
      v5084 = i$$9 < v8299
    }
    return result$$3
  }
  var v5085 = gameboy.registerA;
  var v5086 = gameboy.registerB;
  var v5087 = gameboy.registerC;
  var v5088 = gameboy.registerE;
  var v5089 = gameboy.registerF;
  var v5090 = gameboy.registersHL;
  var v5091 = gameboy.programCounter;
  var v5092 = gameboy.stackPointer;
  var v9646 = gameboy.ROM;
  var v8300 = JAMScript.call(gameboy.fromTypedArray, gameboy, [v9646]);
  var v5093 = sum$$1(v8300);
  var v9647 = gameboy.memory;
  var v8301 = JAMScript.call(gameboy.fromTypedArray, gameboy, [v9647]);
  var v5094 = sum$$1(v8301);
  var v9648 = gameboy.MBCRam;
  var v8302 = JAMScript.call(gameboy.fromTypedArray, gameboy, [v9648]);
  var v5095 = sum$$1(v8302);
  var v9649 = gameboy.VRam;
  var v8303 = JAMScript.call(gameboy.fromTypedArray, gameboy, [v9649]);
  var v5096 = sum$$1(v8303);
  var state = {registerA:v5085, registerB:v5086, registerC:v5087, registerE:v5088, registerF:v5089, registersHL:v5090, programCounter:v5091, stackPointer:v5092, sumROM:v5093, sumMemory:v5094, sumMBCRam:v5095, sumVRam:v5096};
  var stateStr = JAMScript.call(JSON.stringify, JSON, [state]);
  var v8304 = typeof expectedGameboyStateStr;
  var v5099 = v8304 != "undefined";
  if(v5099) {
    var v5098 = stateStr != expectedGameboyStateStr;
    if(v5098) {
      var v10560 = "Incorrect final state of processor:\n" + " actual   ";
      var v10324 = v10560 + stateStr;
      var v9650 = v10324 + "\n";
      var v8305 = v9650 + " expected ";
      var v5097 = v8305 + expectedGameboyStateStr;
      JAMScript.call(alert, null, [v5097])
    }
  }else {
    JAMScript.call(alert, null, [stateStr])
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
    var v5112 = dataLength > 0;
    if(v5112) {
      var bytes = [0, 0, 0];
      var index$$41 = 0;
      var remainder = dataLength % 3;
      var v9651 = data$$21.length;
      var v8306 = v9651 % 3;
      var v5101 = v8306 > 0;
      for(;v5101;) {
        var v5100 = data$$21.length;
        JAMScript.set(data$$21, v5100, " ");
        var v9652 = data$$21.length;
        var v8307 = v9652 % 3;
        v5101 = v8307 > 0
      }
      var v5105 = index$$41 < dataLength;
      for(;v5105;) {
        var v9653 = index$$41;
        index$$41 = index$$41 + 1;
        var v8308 = data$$21.charCodeAt(v9653);
        var v5102 = v8308 & 255;
        var v9654 = index$$41;
        index$$41 = index$$41 + 1;
        var v8309 = data$$21.charCodeAt(v9654);
        var v5103 = v8309 & 255;
        var v9655 = index$$41;
        index$$41 = index$$41 + 1;
        var v8310 = data$$21.charCodeAt(v9655);
        var v5104 = v8310 & 255;
        bytes = [v5102, v5103, v5104];
        var v10743 = bytes[0];
        var v10703 = v10743 >> 2;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v10561 = toBase64[v10703]
        }
        var v10765 = bytes[0];
        var v10758 = v10765 & 3;
        var v10744 = v10758 << 4;
        var v10759 = bytes[1];
        var v10745 = v10759 >> 4;
        var v10704 = v10744 | v10745;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v10562 = toBase64[v10704]
        }
        var v10325 = v10561 + v10562;
        var v10760 = bytes[1];
        var v10746 = v10760 & 15;
        var v10705 = v10746 << 2;
        var v10747 = bytes[2];
        var v10706 = v10747 >> 6;
        var v10563 = v10705 | v10706;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v10326 = toBase64[v10563]
        }
        var v9656 = v10325 + v10326;
        var v10564 = bytes[2];
        var v10327 = v10564 & 63;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v9657 = toBase64[v10327]
        }
        var v8311 = v9656 + v9657;
        base64$$1 = base64$$1 + v8311;
        v5105 = index$$41 < dataLength
      }
      var v5111 = remainder > 0;
      if(v5111) {
        var v8312 = base64$$1.length;
        var v5106 = v8312 - 1;
        base64$$1[v5106] = "=";
        var v5110 = remainder == 2;
        if(v5110) {
          var v8313 = base64$$1.length;
          var v5107 = v8313 - 2;
          base64$$1[v5107] = "=";
          var v8314 = base64$$1.length;
          var v5108 = v8314 - 3;
          var v10328 = bytes[0];
          var v9658 = v10328 & 3;
          var v8315 = v9658 << 4;
          base64$$1[v5108] = toBase64[v8315]
        }else {
          var v8316 = base64$$1.length;
          var v5109 = v8316 - 2;
          var v10329 = bytes[1];
          var v9659 = v10329 & 15;
          var v8317 = v9659 << 2;
          base64$$1[v5109] = toBase64[v8317]
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
      var v9660 = dataLength$$1 % 4;
      v8318 = v9660 == 0
    }
    var v5120 = v8318;
    if(v5120) {
      var sixbits = [0, 0, 0, 0];
      var index$$42 = 0;
      var v5117 = index$$42 < dataLength$$1;
      for(;v5117;) {
        var v9661 = index$$42;
        index$$42 = index$$42 + 1;
        var v8319 = data$$22.charAt(v9661);
        var v5113 = fromBase64.indexOf(v8319);
        var v9662 = index$$42;
        index$$42 = index$$42 + 1;
        var v8320 = data$$22.charAt(v9662);
        var v5114 = fromBase64.indexOf(v8320);
        var v9663 = index$$42;
        index$$42 = index$$42 + 1;
        var v8321 = data$$22.charAt(v9663);
        var v5115 = fromBase64.indexOf(v8321);
        var v9664 = index$$42;
        index$$42 = index$$42 + 1;
        var v8322 = data$$22.charAt(v9664);
        var v5116 = fromBase64.indexOf(v8322);
        sixbits = [v5113, v5114, v5115, v5116];
        var v8323 = decode64;
        var v10748 = sixbits[0];
        var v10707 = v10748 << 2;
        var v10749 = sixbits[1];
        var v10708 = v10749 >> 4;
        var v10565 = v10707 | v10708;
        var v10330 = String.fromCharCode(v10565);
        var v10761 = sixbits[1];
        var v10750 = v10761 & 15;
        var v10709 = v10750 << 4;
        var v10751 = sixbits[2];
        var v10710 = v10751 >> 2;
        var v10566 = v10709 | v10710;
        var v10331 = String.fromCharCode(v10566);
        var v9665 = v10330 + v10331;
        var v10752 = sixbits[2];
        var v10711 = v10752 & 3;
        var v10567 = v10711 << 6;
        var v10568 = sixbits[3];
        var v10332 = v10567 | v10568;
        var v9666 = String.fromCharCode(v10332);
        var v8324 = v9665 + v9666;
        decode64 = v8323 + v8324;
        v5117 = index$$42 < dataLength$$1
      }
      var v8325 = sixbits[3];
      var v5119 = v8325 >= 64;
      if(v5119) {
        var v8326 = decode64.length;
        decode64.length = v8326 - 1;
        var v8327 = sixbits[2];
        var v5118 = v8327 >= 64;
        if(v5118) {
          var v8328 = decode64.length;
          decode64.length = v8328 - 1
        }
      }
    }
  }
  return decode64
}
function to_little_endian_dword(str$$6) {
  var v5121 = to_little_endian_word(str$$6);
  var v9667 = str$$6 >> 16;
  var v8329 = v9667 & 255;
  var v9668 = str$$6 >> 24;
  var v8330 = v9668 & 255;
  var v5122 = String.fromCharCode(v8329, v8330);
  return v5121 + v5122
}
function to_little_endian_word(str$$7) {
  var v5123 = to_byte(str$$7);
  var v9669 = str$$7 >> 8;
  var v8331 = v9669 & 255;
  var v5124 = String.fromCharCode(v8331);
  return v5123 + v5124
}
function to_byte(str$$8) {
  var v5125 = str$$8 & 255;
  return String.fromCharCode(v5125)
}
function arrayToBase64(arrayIn) {
  var binString = "";
  var length$$13 = arrayIn.length;
  var index$$43 = 0;
  var v5127 = index$$43 < length$$13;
  for(;v5127;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9670 = arrayIn[index$$43]
    }
    var v8332 = typeof v9670;
    var v5126 = v8332 == "number";
    if(v5126) {
      var v8333 = binString;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9671 = arrayIn[index$$43]
      }
      var v8334 = String.fromCharCode(v9671);
      binString = v8333 + v8334
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
    var v8335 = binString$$1.charCodeAt(v9672);
    var v5128 = v8335 & 255;
    outArray.push(v5128);
    v5129 = index$$44 < length$$14
  }
  return outArray
}
function Resampler(fromSampleRate, toSampleRate, channels$$1, outputBufferSize, noReturn) {
  this.fromSampleRate = fromSampleRate;
  this.toSampleRate = toSampleRate;
  this.channels = channels$$1 | 0;
  this.outputBufferSize = outputBufferSize;
  var v5130 = !noReturn;
  this.noReturn = !v5130;
  JAMScript.call(this.initialize, this, []);
  return
}
function XAudioServer(channels$$2, sampleRate$$1, minBufferSize, maxBufferSize, underRunCallback, volume) {
  function v14() {
    return
  }
  var v5131;
  var v8336 = channels$$2 == 2;
  if(v8336) {
    v5131 = 2
  }else {
    v5131 = 1
  }
  this.audioChannels = v5131;
  var v5132 = this.audioChannels;
  webAudioMono = v5132 == 1;
  var v5133;
  var v9673 = sampleRate$$1 > 0;
  if(v9673) {
    v9673 = sampleRate$$1 <= 16777215
  }
  var v8337 = v9673;
  if(v8337) {
    v5133 = sampleRate$$1
  }else {
    v5133 = 44100
  }
  XAudioJSSampleRate = v5133;
  var v5134;
  var v10333 = samplesPerCallback << 1;
  var v9674 = minBufferSize >= v10333;
  if(v9674) {
    v9674 = minBufferSize < maxBufferSize
  }
  var v8339 = v9674;
  if(v8339) {
    var v9675;
    if(webAudioMono) {
      v9675 = 4294967295
    }else {
      v9675 = 4294967294
    }
    var v8338 = v9675;
    v5134 = minBufferSize & v8338
  }else {
    v5134 = samplesPerCallback << 1
  }
  webAudioMinBufferSize = v5134;
  var v5135;
  var v9676 = Math.floor(maxBufferSize);
  var v10334 = this.audioChannels;
  var v9677 = webAudioMinBufferSize + v10334;
  var v8341 = v9676 > v9677;
  if(v8341) {
    var v9678;
    if(webAudioMono) {
      v9678 = 4294967295
    }else {
      v9678 = 4294967294
    }
    var v8340 = v9678;
    v5135 = maxBufferSize & v8340
  }else {
    v5135 = minBufferSize << 1
  }
  webAudioMaxBufferSize = v5135;
  var v5136;
  var v9679 = typeof underRunCallback;
  var v8342 = v9679 == "function";
  if(v8342) {
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
  var v8343 = v9680;
  if(v8343) {
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
  JAMScript.call(this.initializeAudio, this, []);
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
    var v8344 = audioSampleIndice = audioSampleIndice + 1;
    var v5138 = v8344 < size$$5;
    do {
      newBuffer[audioSampleIndice] = 0;
      var v8345 = audioSampleIndice = audioSampleIndice + 1;
      v5138 = v8345 < size$$5
    }while(v5138)
  }
  return newBuffer
}
function audioOutputFlashEvent() {
  resampleRefill();
  return JAMScript.call(outputConvert, null, [])
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v10766 = resampled[v10769]
    }
    var v10762 = v10766 + 1;
    var v10753 = Math.max(v10762, 0);
    var v10712 = Math.min(v10753, 2);
    var v10569 = v10712 * 16383;
    var v10335 = v10569 | 0;
    var v9681 = v10335 + 12288;
    var v8348 = String.fromCharCode(v9681);
    copyBinaryStringLeft = v8347 + v8348;
    var v8349 = copyBinaryStringRight;
    var v10770 = resampleBufferStart;
    resampleBufferStart = resampleBufferStart + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v10767 = resampled[v10770]
    }
    var v10763 = v10767 + 1;
    var v10754 = Math.max(v10763, 0);
    var v10713 = Math.min(v10754, 2);
    var v10570 = v10713 * 16383;
    var v10336 = v10570 | 0;
    var v9682 = v10336 + 12288;
    var v8350 = String.fromCharCode(v9682);
    copyBinaryStringRight = v8349 + v8350;
    var v5139 = resampleBufferStart == resampleBufferSize;
    if(v5139) {
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
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v10768 = resampled[v10771]
    }
    var v10764 = v10768 + 1;
    var v10755 = Math.max(v10764, 0);
    var v10714 = Math.min(v10755, 2);
    var v10571 = v10714 * 16383;
    var v10337 = v10571 | 0;
    var v9683 = v10337 + 12288;
    var v8354 = String.fromCharCode(v9683);
    copyBinaryString = v8353 + v8354;
    var v5141 = resampleBufferStart == resampleBufferSize;
    if(v5141) {
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
  var buffer1 = JAMScript.call(v5143.getChannelData, v5143, [0]);
  var v5144 = event$$3.outputBuffer;
  var buffer2 = JAMScript.call(v5144.getChannelData, v5144, [1]);
  resampleRefill();
  var v5152 = !webAudioMono;
  if(v5152) {
    var v8356 = index$$49 < samplesPerCallback;
    if(v8356) {
      v8356 = resampleBufferStart != resampleBufferEnd
    }
    var v5148 = v8356;
    for(;v5148;) {
      var v8357 = resampleBufferStart;
      resampleBufferStart = resampleBufferStart + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v5145 = resampled[v8357]
      }
      buffer1[index$$49] = v5145 * XAudioJSVolume;
      var v5146 = index$$49;
      index$$49 = index$$49 + 1;
      var v9684 = resampleBufferStart;
      resampleBufferStart = resampleBufferStart + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8358 = resampled[v9684]
      }
      buffer2[v5146] = v8358 * XAudioJSVolume;
      var v5147 = resampleBufferStart == resampleBufferSize;
      if(v5147) {
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
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v5149 = resampled[v8361]
      }
      buffer2[index$$49] = buffer1[index$$49] = v5149 * XAudioJSVolume;
      index$$49 = index$$49 + 1;
      var v5150 = resampleBufferStart == resampleBufferSize;
      if(v5150) {
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
  var v5160 = audioBufferSize > 0;
  if(v5160) {
    var v5154 = getBufferSamples();
    var resampleLength = JAMScript.call(resampleControl.resampler, resampleControl, [v5154]);
    var resampledResult = resampleControl.outputBuffer;
    var index2 = 0;
    var v5159 = index2 < resampleLength;
    for(;v5159;) {
      var v5155 = resampleBufferEnd;
      resampleBufferEnd = resampleBufferEnd + 1;
      JAMScript.set(resampled, v5155, resampledResult[index2]);
      var v5156 = resampleBufferEnd == resampleBufferSize;
      if(v5156) {
        resampleBufferEnd = 0
      }
      var v5158 = resampleBufferStart == resampleBufferEnd;
      if(v5158) {
        resampleBufferStart = resampleBufferStart + 1;
        var v5157 = resampleBufferStart == resampleBufferSize;
        if(v5157) {
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
  var v10338 = resampleBufferStart <= resampleBufferEnd;
  if(v10338) {
    v9685 = 0
  }else {
    v9685 = resampleBufferSize
  }
  var v8363 = v9685;
  var v5161 = v8363 + resampleBufferEnd;
  return v5161 - resampleBufferStart
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
  var v9686 = webAudioMaxBufferSize;
  var v10339 = XAudioJSSampleRate / APISampleRate;
  var v9687 = Math.ceil(v10339);
  var v8364 = v9686 * v9687;
  var v5162 = Math.max(v8364, samplesPerCallback);
  resampleBufferSize = v5162 << 1;
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
  var v9688 = !v8365;
  if(v9688) {
    v8365 = 0
  }
  var v5163 = v8365;
  var v10966 = Math.abs(v5163);
  this.widthOriginal = v10966;
  var v8366 = parseInt(heightOriginal);
  var v9689 = !v8366;
  if(v9689) {
    v8366 = 0
  }
  var v5164 = v8366;
  var v10967 = Math.abs(v5164);
  this.heightOriginal = v10967;
  var v8367 = parseInt(targetWidth);
  var v9690 = !v8367;
  if(v9690) {
    v8367 = 0
  }
  var v5165 = v8367;
  var v10968 = Math.abs(v5165);
  this.targetWidth = v10968;
  var v8368 = parseInt(targetHeight);
  var v9691 = !v8368;
  if(v9691) {
    v8368 = 0
  }
  var v5166 = v8368;
  var v10969 = Math.abs(v5166);
  this.targetHeight = v10969;
  var v5167;
  var v9692 = !blendAlpha;
  var v8369 = !v9692;
  if(v8369) {
    v5167 = 4
  }else {
    v5167 = 3
  }
  this.colorChannels = v5167;
  var v5168 = !interpolationPass;
  this.interpolationPass = !v5168;
  var v5169 = this.targetWidth;
  var v5170 = this.colorChannels;
  this.targetWidthMultipliedByChannels = v5169 * v5170;
  var v5171 = this.widthOriginal;
  var v5172 = this.colorChannels;
  this.originalWidthMultipliedByChannels = v5171 * v5172;
  var v5173 = this.heightOriginal;
  var v5174 = this.colorChannels;
  this.originalHeightMultipliedByChannels = v5173 * v5174;
  var v5175 = this.targetWidthMultipliedByChannels;
  var v5176 = this.heightOriginal;
  this.widthPassResultSize = v5175 * v5176;
  var v5177 = this.targetWidthMultipliedByChannels;
  var v5178 = this.targetHeight;
  this.finalResultSize = v5177 * v5178;
  JAMScript.call(this.initialize, this, []);
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
  JAMScript.call(this.initializeLCDController, this, []);
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
  var v5179 = [false, false, false, false, false, false, false, true];
  var v5180 = [true, false, false, false, false, false, false, true];
  var v5181 = [true, false, false, false, false, true, true, true];
  var v5182 = [false, true, true, true, true, true, true, false];
  this.dutyLookup = [v5179, v5180, v5181, v5182];
  this.currentBuffer = [];
  this.bufferContainAmount = 0;
  this.LSFR15Table = null;
  this.LSFR7Table = null;
  this.noiseSampleTable = null;
  JAMScript.call(this.initializeAudioStartState, this, []);
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
  JAMScript.call(this.initializeTiming, this, []);
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
  var v10970 = JAMScript.call(dateVar.getTime, dateVar, []);
  this.lastIteration = v10970;
  dateVar = new_Date();
  var v10971 = JAMScript.call(dateVar.getTime, dateVar, []);
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
  var v5183 = this.ROMBanks;
  v5183[82] = 72;
  var v5184 = this.ROMBanks;
  v5184[83] = 80;
  var v5185 = this.ROMBanks;
  v5185[84] = 96;
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
  var v8370 = this.onscreenWidth;
  var v8371 = this.onscreenHeight;
  var v5186 = v8370 * v8371;
  this.offscreenRGBCount = v5186 * 4;
  JAMScript.call(this.intializeWhiteNoise, this, []);
  return
}
function start(canvas$$1, ROM) {
  clearLastEmulation();
  autoSave();
  gameboy = new GameBoyCore(canvas$$1, ROM);
  gameboy.openMBC = openSRAM;
  gameboy.openRTC = openRTC;
  JAMScript.call(gameboy.start, gameboy, []);
  run();
  return
}
function run() {
  var v5189 = GameBoyEmulatorInitialized();
  if(v5189) {
    var v8372 = GameBoyEmulatorPlaying();
    var v5188 = !v8372;
    if(v5188) {
      var v8373 = gameboy.stopEmulator;
      gameboy.stopEmulator = v8373 & 1;
      cout("Starting the iterator.", 0);
      var dateObj$$1 = new_Date();
      var v5187 = gameboy;
      var v10972 = JAMScript.call(dateObj$$1.getTime, dateObj$$1, []);
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
  var v5191 = GameBoyEmulatorInitialized();
  if(v5191) {
    var v5190 = GameBoyEmulatorPlaying();
    if(v5190) {
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
  var v5192 = v8374;
  if(v5192) {
    clearInterval(gbRunInterval);
    var v8375 = gameboy.stopEmulator;
    gameboy.stopEmulator = v8375 | 2;
    cout("The previous emulation has been cleared.", 0)
  }else {
    cout("No previous emulation was found to be cleared.", 0)
  }
  return
}
function save() {
  var v5198 = GameBoyEmulatorInitialized();
  if(v5198) {
    try {
      var state_suffix = 0;
      var v10715 = gameboy.name;
      var v10572 = "FREEZE_" + v10715;
      var v10340 = v10572 + "_";
      var v9693 = v10340 + state_suffix;
      var v8376 = JAMScript.call(findValue, null, [v9693]);
      var v5193 = v8376 != null;
      for(;v5193;) {
        state_suffix = state_suffix + 1;
        var v10716 = gameboy.name;
        var v10573 = "FREEZE_" + v10716;
        var v10341 = v10573 + "_";
        var v9694 = v10341 + state_suffix;
        var v8377 = JAMScript.call(findValue, null, [v9694]);
        v5193 = v8377 != null
      }
      var v10342 = gameboy.name;
      var v9695 = "FREEZE_" + v10342;
      var v8378 = v9695 + "_";
      var v5194 = v8378 + state_suffix;
      var v5195 = JAMScript.call(gameboy.saveState, gameboy, []);
      JAMScript.call(setValue, null, [v5194, v5195]);
      var v10343 = gameboy.name;
      var v9696 = "Saved the current state as: FREEZE_" + v10343;
      var v8379 = v9696 + "_";
      var v5196 = v8379 + state_suffix;
      cout(v5196, 0)
    }catch(error$$28) {
      var v9697 = error$$28.message;
      var v8380 = 'Could not save the current emulation state("' + v9697;
      var v5197 = v8380 + '").';
      cout(v5197, 2)
    }
  }else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1)
  }
  return
}
function saveSRAM() {
  var v5206 = GameBoyEmulatorInitialized();
  if(v5206) {
    var v5205 = gameboy.cBATT;
    if(v5205) {
      try {
        var sram = JAMScript.call(gameboy.saveSRAMState, gameboy, []);
        var v8381 = sram.length;
        var v5203 = v8381 > 0;
        if(v5203) {
          cout("Saving the SRAM...", 0);
          var v10344 = gameboy.name;
          var v9698 = "SRAM_" + v10344;
          var v8382 = JAMScript.call(findValue, null, [v9698]);
          var v5200 = v8382 != null;
          if(v5200) {
            cout("Deleting the old SRAM save due to outdated format.", 0);
            var v8383 = gameboy.name;
            var v5199 = "SRAM_" + v8383;
            JAMScript.call(deleteValue, null, [v5199])
          }
          var v8384 = gameboy.name;
          var v5201 = "B64_SRAM_" + v8384;
          var v5202 = arrayToBase64(sram);
          JAMScript.call(setValue, null, [v5201, v5202])
        }else {
          cout("SRAM could not be saved because it was empty.", 1)
        }
      }catch(error$$29) {
        var v9699 = error$$29.message;
        var v8385 = 'Could not save the current emulation state("' + v9699;
        var v5204 = v8385 + '").';
        cout(v5204, 2)
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
  var v5211 = GameBoyEmulatorInitialized();
  if(v5211) {
    var v5210 = gameboy.cTIMER;
    if(v5210) {
      try {
        cout("Saving the RTC...", 0);
        var v8386 = gameboy.name;
        var v5207 = "RTC_" + v8386;
        var v5208 = JAMScript.call(gameboy.saveRTCState, gameboy, []);
        JAMScript.call(setValue, null, [v5207, v5208])
      }catch(error$$30) {
        var v9700 = error$$30.message;
        var v8387 = 'Could not save the RTC of the current emulation state("' + v9700;
        var v5209 = v8387 + '").';
        cout(v5209, 2)
      }
    }
  }else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1)
  }
  return
}
function autoSave() {
  var v5212 = GameBoyEmulatorInitialized();
  if(v5212) {
    cout("Automatically saving the SRAM.", 0);
    saveSRAM();
    saveRTC()
  }
  return
}
function openSRAM(filename) {
  try {
    var v9701 = "B64_SRAM_" + filename;
    var v8388 = JAMScript.call(findValue, null, [v9701]);
    var v5216 = v8388 != null;
    if(v5216) {
      cout("Found a previous SRAM state (Will attempt to load).", 0);
      var v8389 = "B64_SRAM_" + filename;
      var v5213 = JAMScript.call(findValue, null, [v8389]);
      return base64ToArray(v5213)
    }else {
      var v9702 = "SRAM_" + filename;
      var v8390 = JAMScript.call(findValue, null, [v9702]);
      var v5215 = v8390 != null;
      if(v5215) {
        cout("Found a previous SRAM state (Will attempt to load).", 0);
        var v5214 = "SRAM_" + filename;
        return JAMScript.call(findValue, null, [v5214])
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
    var v9703 = "RTC_" + filename$$1;
    var v8391 = JAMScript.call(findValue, null, [v9703]);
    var v5218 = v8391 != null;
    if(v5218) {
      cout("Found a previous RTC state (Will attempt to load).", 0);
      var v5217 = "RTC_" + filename$$1;
      return JAMScript.call(findValue, null, [v5217])
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
    var v8392 = JAMScript.call(findValue, null, [filename$$2]);
    var v5222 = v8392 != null;
    if(v5222) {
      try {
        clearLastEmulation();
        cout("Attempting to run a saved emulation state.", 0);
        gameboy = new GameBoyCore(canvas$$2, "");
        gameboy.savedStateFileName = filename$$2;
        var v5219 = JAMScript.call(findValue, null, [filename$$2]);
        JAMScript.call(gameboy.returnFromState, gameboy, [v5219]);
        run()
      }catch(error$$33) {
        var v10574 = error$$33.message;
        var v10345 = v10574 + " file: ";
        var v10346 = error$$33.fileName;
        var v9704 = v10345 + v10346;
        var v8393 = v9704 + " line: ";
        var v8394 = error$$33.lineNumber;
        var v5220 = v8393 + v8394;
        JAMScript.call(alert, null, [v5220])
      }
    }else {
      var v8395 = "Could not find the save state " + filename$$2;
      var v5221 = v8395 + '".';
      cout(v5221, 2)
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
  var v5234 = v8396;
  if(v5234) {
    var v9705 = blobData.blobs;
    var v8397 = v9705.length;
    var v5233 = v8397 > 0;
    if(v5233) {
      var index$$68 = 0;
      var v9706 = blobData.blobs;
      var v8398 = v9706.length;
      var v5232 = index$$68 < v8398;
      for(;v5232;) {
        var v10575 = blobData.blobs;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v10347 = v10575[index$$68]
        }
        var v9707 = v10347.blobID;
        var v8399 = 'Importing blob "' + v9707;
        var v5223 = v8399 + '"';
        cout(v5223, 0);
        var v9708 = blobData.blobs;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v8400 = v9708[index$$68]
        }
        var v5231 = v8400.blobContent;
        if(v5231) {
          var v10576 = blobData.blobs;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v10348 = v10576[index$$68]
          }
          var v9709 = v10348.blobID;
          var v8401 = v9709.substring(0, 5);
          var v5228 = v8401 == "SRAM_";
          if(v5228) {
            var v10349 = blobData.blobs;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v9710 = v10349[index$$68]
            }
            var v8402 = v9710.blobID;
            var v5224 = "B64_" + v8402;
            var v10350 = blobData.blobs;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v9711 = v10350[index$$68]
            }
            var v8403 = v9711.blobContent;
            var v5225 = base64(v8403);
            JAMScript.call(setValue, null, [v5224, v5225])
          }else {
            var v9712 = blobData.blobs;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v8404 = v9712[index$$68]
            }
            var v5226 = v8404.blobID;
            var v10351 = blobData.blobs;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v9713 = v10351[index$$68]
            }
            var v8405 = v9713.blobContent;
            var v5227 = JSON.parse(v8405);
            JAMScript.call(setValue, null, [v5226, v5227])
          }
        }else {
          var v9714 = blobData.blobs;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8406 = v9714[index$$68]
          }
          var v5230 = v8406.blobID;
          if(v5230) {
            var v10577 = blobData.blobs;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v10352 = v10577[index$$68]
            }
            var v9715 = v10352.blobID;
            var v8407 = 'Save file imported had blob "' + v9715;
            var v5229 = v8407 + '" with no blob data interpretable.';
            cout(v5229, 2)
          }else {
            cout("Blob chunk information missing completely.", 2)
          }
        }
        index$$68 = index$$68 + 1;
        var v9716 = blobData.blobs;
        var v8408 = v9716.length;
        v5232 = index$$68 < v8408
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
  var v9717 = saveString.length;
  var v8409 = v9717 + 4;
  var v9718 = consoleID.length;
  var v8410 = 1 + v9718;
  var v5235 = v8409 + v8410;
  var v9719 = keyName.length;
  var v8411 = 1 + v9719;
  var v9720 = encodedData$$1.length;
  var v8412 = 4 + v9720;
  var v5236 = v8411 + v8412;
  var totalLength = v5235 + v5236;
  var v8413 = saveString;
  var v8414 = to_little_endian_dword(totalLength);
  saveString = v8413 + v8414;
  var v8415 = saveString;
  var v9721 = consoleID.length;
  var v8416 = to_byte(v9721);
  saveString = v8415 + v8416;
  saveString = saveString + consoleID;
  var v8417 = saveString;
  var v9722 = keyName.length;
  var v8418 = to_byte(v9722);
  saveString = v8417 + v8418;
  saveString = saveString + keyName;
  var v8419 = saveString;
  var v9723 = encodedData$$1.length;
  var v8420 = to_little_endian_dword(v9723);
  saveString = v8419 + v8420;
  saveString = saveString + encodedData$$1;
  return saveString
}
function generateMultiBlob(blobPairs) {
  var consoleID$$1 = "GameBoy";
  var v8421 = 13 + 4;
  var v5237 = v8421 + 1;
  var v5238 = consoleID$$1.length;
  var totalLength$$1 = v5237 + v5238;
  var v5239 = consoleID$$1.length;
  var saveString$$1 = to_byte(v5239);
  saveString$$1 = saveString$$1 + consoleID$$1;
  var keyName$$1 = "";
  var encodedData$$2 = "";
  var index$$69 = 0;
  var v8422 = blobPairs.length;
  var v5242 = index$$69 < v8422;
  for(;v5242;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v5240 = blobPairs[index$$69]
    }
    keyName$$1 = v5240[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v5241 = blobPairs[index$$69]
    }
    encodedData$$2 = v5241[1];
    var v8423 = saveString$$1;
    var v9724 = keyName$$1.length;
    var v8424 = to_byte(v9724);
    saveString$$1 = v8423 + v8424;
    saveString$$1 = saveString$$1 + keyName$$1;
    var v8425 = saveString$$1;
    var v9725 = encodedData$$2.length;
    var v8426 = to_little_endian_dword(v9725);
    saveString$$1 = v8425 + v8426;
    saveString$$1 = saveString$$1 + encodedData$$2;
    var v10578 = keyName$$1.length;
    var v10353 = 1 + v10578;
    var v9726 = v10353 + 4;
    var v9727 = encodedData$$2.length;
    var v8427 = v9726 + v9727;
    totalLength$$1 = totalLength$$1 + v8427;
    index$$69 = index$$69 + 1;
    var v8428 = blobPairs.length;
    v5242 = index$$69 < v8428
  }
  var v8429 = to_little_endian_dword(totalLength$$1);
  var v5243 = "EMULATOR_DATA" + v8429;
  saveString$$1 = v5243 + saveString$$1;
  return saveString$$1
}
function decodeBlob(blobData$$1) {
  var length$$21 = blobData$$1.length;
  var blobProperties = {};
  blobProperties.consoleID = null;
  var blobsCount = -1;
  blobProperties.blobs = [];
  var v5260 = length$$21 > 17;
  if(v5260) {
    var v8430 = blobData$$1.substring(0, 13);
    var v5259 = v8430 == "EMULATOR_DATA";
    if(v5259) {
      var v10717 = blobData$$1.charCodeAt(16);
      var v10579 = v10717 & 255;
      var v10354 = v10579 << 24;
      var v10718 = blobData$$1.charCodeAt(15);
      var v10580 = v10718 & 255;
      var v10355 = v10580 << 16;
      var v9728 = v10354 | v10355;
      var v10581 = blobData$$1.charCodeAt(14);
      var v10356 = v10581 & 255;
      var v9729 = v10356 << 8;
      var v8431 = v9728 | v9729;
      var v9730 = blobData$$1.charCodeAt(13);
      var v8432 = v9730 & 255;
      var v5244 = v8431 | v8432;
      length$$21 = Math.min(v5244, length$$21);
      var v5245 = blobData$$1.charCodeAt(17);
      var consoleIDLength = v5245 & 255;
      var v8433 = 17 + consoleIDLength;
      var v5258 = length$$21 > v8433;
      if(v5258) {
        var v5246 = blobProperties;
        var v8434 = 18 + consoleIDLength;
        var v10973 = blobData$$1.substring(18, v8434);
        v5246.consoleID = v10973;
        var blobIDLength = 0;
        var blobLength = 0;
        var index$$70 = 18 + consoleIDLength;
        var v5257 = index$$70 < length$$21;
        for(;v5257;) {
          var v8435 = index$$70;
          index$$70 = index$$70 + 1;
          var v5247 = blobData$$1.charCodeAt(v8435);
          blobIDLength = v5247 & 255;
          var v8436 = index$$70 + blobIDLength;
          var v5256 = v8436 < length$$21;
          if(v5256) {
            var v5248 = blobProperties.blobs;
            var v5249 = blobsCount = blobsCount + 1;
            v5248[v5249] = {};
            var v8437 = blobProperties.blobs;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v5250 = v8437[blobsCount]
            }
            var v8438 = index$$70 + blobIDLength;
            var v10974 = blobData$$1.substring(index$$70, v8438);
            v5250.blobID = v10974;
            index$$70 = index$$70 + blobIDLength;
            var v8439 = index$$70 + 4;
            var v5255 = v8439 < length$$21;
            if(v5255) {
              var v10719 = index$$70 + 3;
              var v10582 = blobData$$1.charCodeAt(v10719);
              var v10357 = v10582 & 255;
              var v9731 = v10357 << 24;
              var v10720 = index$$70 + 2;
              var v10583 = blobData$$1.charCodeAt(v10720);
              var v10358 = v10583 & 255;
              var v9732 = v10358 << 16;
              var v8440 = v9731 | v9732;
              var v10584 = index$$70 + 1;
              var v10359 = blobData$$1.charCodeAt(v10584);
              var v9733 = v10359 & 255;
              var v8441 = v9733 << 8;
              var v5251 = v8440 | v8441;
              var v8442 = blobData$$1.charCodeAt(index$$70);
              var v5252 = v8442 & 255;
              blobLength = v5251 | v5252;
              index$$70 = index$$70 + 4;
              var v8443 = index$$70 + blobLength;
              var v5254 = v8443 <= length$$21;
              if(v5254) {
                var v8444 = blobProperties.blobs;
                introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                  var v5253 = v8444[blobsCount]
                }
                var v8445 = index$$70 + blobLength;
                var v10975 = blobData$$1.substring(index$$70, v8445);
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
  var v9734 = settings[3];
  var v8446 = v9734.length;
  var v5262 = index$$71 < v8446;
  for(;v5262;) {
    var v9735 = settings[3];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8447 = v9735[index$$71]
    }
    var v5261 = v8447 == key$$15;
    if(v5261) {
      return index$$71
    }
    index$$71 = index$$71 + 1;
    var v9736 = settings[3];
    var v8448 = v9736.length;
    v5262 = index$$71 < v8448
  }
  return-1
}
function GameBoyEmulatorInitialized() {
  var v8449 = typeof gameboy;
  var v5263 = v8449 == "object";
  if(v5263) {
    v5263 = gameboy != null
  }
  return v5263
}
function GameBoyEmulatorPlaying() {
  var v8450 = gameboy.stopEmulator;
  var v5264 = v8450 & 2;
  return v5264 == 0
}
function GameBoyKeyDown(e$$7) {
  var v8451 = GameBoyEmulatorInitialized();
  if(v8451) {
    v8451 = GameBoyEmulatorPlaying()
  }
  var v5267 = v8451;
  if(v5267) {
    var v5265 = e$$7.keyCode;
    var keycode = matchKey(v5265);
    var v8452 = keycode >= 0;
    if(v8452) {
      v8452 = keycode < 8
    }
    var v5266 = v8452;
    if(v5266) {
      JAMScript.call(gameboy.JoyPadEvent, gameboy, [keycode, true]);
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
  var v5270 = v8453;
  if(v5270) {
    var v5268 = e$$8.keyCode;
    var keycode$$1 = matchKey(v5268);
    var v8454 = keycode$$1 >= 0;
    if(v8454) {
      v8454 = keycode$$1 < 8
    }
    var v5269 = v8454;
    if(v5269) {
      JAMScript.call(gameboy.JoyPadEvent, gameboy, [keycode$$1, false]);
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
  var v5276 = v8455;
  if(v5276) {
    var v8456 = e$$9.gamma;
    var v9737 = !v8456;
    if(v9737) {
      v8456 = e$$9.beta
    }
    var v5275 = v8456;
    if(v5275) {
      var v9738 = e$$9.gamma;
      var v9739 = Math.PI;
      var v8457 = v9738 * v9739;
      var v5271 = v8457 / 180;
      var v9740 = e$$9.beta;
      var v9741 = Math.PI;
      var v8458 = v9740 * v9741;
      var v5272 = v8458 / 180;
      JAMScript.call(gameboy.GyroEvent, gameboy, [v5271, v5272])
    }else {
      var v5273 = e$$9.x;
      var v5274 = e$$9.y;
      JAMScript.call(gameboy.GyroEvent, gameboy, [v5273, v5274])
    }
    try {
      e$$9.preventDefault()
    }catch(error$$37) {
    }
  }
  return
}
function initNewCanvas() {
  var v5279 = GameBoyEmulatorInitialized();
  if(v5279) {
    var v5277 = gameboy.canvas;
    var v8459 = gameboy.canvas;
    v5277.width = v8459.clientWidth;
    var v5278 = gameboy.canvas;
    var v8460 = gameboy.canvas;
    v5278.height = v8460.clientHeight
  }
  return
}
function initNewCanvasSize() {
  var v5283 = GameBoyEmulatorInitialized();
  if(v5283) {
    var v8461 = settings[12];
    var v5282 = !v8461;
    if(v5282) {
      var v9742 = gameboy.onscreenWidth;
      var v8462 = v9742 != 160;
      var v9744 = !v8462;
      if(v9744) {
        var v9743 = gameboy.onscreenHeight;
        v8462 = v9743 != 144
      }
      var v5280 = v8462;
      if(v5280) {
        JAMScript.call(gameboy.initLCD, gameboy, [])
      }
    }else {
      var v9745 = gameboy.onscreenWidth;
      var v10360 = gameboy.canvas;
      var v9746 = v10360.clientWidth;
      var v8463 = v9745 != v9746;
      var v9749 = !v8463;
      if(v9749) {
        var v9747 = gameboy.onscreenHeight;
        var v10361 = gameboy.canvas;
        var v9748 = v10361.clientHeight;
        v8463 = v9747 != v9748
      }
      var v5281 = v8463;
      if(v5281) {
        JAMScript.call(gameboy.initLCD, gameboy, [])
      }
    }
  }
  return
}
function ShowBox(name$$33) {
  function v16(entry) {
    var v8464 = JAMScript.call(name$$33.valueOf, name$$33, []);
    var v8465 = JAMScript.call(entry.valueOf, entry, []);
    var v5286 = v8464 === v8465;
    if(v5286) {
      var v8466 = "Box-" + name$$33;
      var v5284 = v8466 + "Latency";
      var box1 = document.getElementById(v5284);
      var v5285 = box1.style;
      v5285.visibility = "visible"
    }
    return
  }
  var v5287 = "Box-" + name$$33;
  var box = document.getElementById(v5287);
  var v5288 = box.style;
  v5288.visibility = "visible";
  var v8467 = document.getElementById("progress-bar");
  var v5289 = v8467.style;
  var v10585 = completed = completed + 1;
  var v10362 = v10585 / benchmarks;
  var v9750 = v10362 * 100;
  var v8468 = "" + v9750;
  var bar = v5289.width = v8468 + "%";
  latencyBenchmarks.forEach(v16);
  return
}
function AddResult(name$$34, result$$4) {
  var v8469 = name$$34 + ": ";
  var v5290 = v8469 + result$$4;
  console.log(v5290);
  var v5291 = "Result-" + name$$34;
  var box$$1 = document.getElementById(v5291);
  JAMScript.set(box$$1, "innerHTML", result$$4);
  return
}
function AddError(name$$35, error$$38) {
  var v8470 = name$$35 + ": ";
  var v8471 = error$$38.message;
  var v5292 = v8470 + v8471;
  console.log(v5292);
  var v5294 = error$$38 == "TypedArrayUnsupported";
  if(v5294) {
    AddResult(name$$35, "<b>Unsupported</b>")
  }else {
    var v5293 = error$$38 == "PerformanceNowUnsupported";
    if(v5293) {
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
    JAMScript.set(status, "innerHTML", "Octane Score: " + score$$2)
  }else {
    JAMScript.set(status, "innerHTML", "Octane Score (incomplete): " + score$$2)
  }
  var v8472 = document.getElementById("progress-bar-container");
  var v5295 = v8472.style;
  v5295.visibility = "hidden";
  var v8473 = document.getElementById("bottom-text");
  var v5296 = v8473.style;
  v5296.visibility = "visible";
  var v5297 = document.getElementById("inside-anchor");
  var v5298 = document.getElementById("bar-appendix");
  v5297.removeChild(v5298);
  var v8474 = document.getElementById("alertbox");
  var v5299 = v8474.style;
  v5299.visibility = "hidden";
  return
}
function Run() {
  var v5300 = document.getElementById("main-banner");
  JAMScript.set(v5300, "innerHTML", "Running Octane...");
  var v5301 = document.getElementById("bar-appendix");
  JAMScript.set(v5301, "innerHTML", '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>');
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  var v5302 = document.getElementById("inside-anchor");
  JAMScript.call(parent.appendChild, parent, [v5302]);
  parent.removeChild(anchor);
  var v5303 = document.getElementById("startup-text");
  JAMScript.set(v5303, "innerHTML", "");
  var v8475 = document.getElementById("progress-bar-container");
  var v5304 = v8475.style;
  v5304.visibility = "visible";
  var v5305 = {NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore};
  JAMScript.call(BenchmarkSuite.RunSuites, BenchmarkSuite, [v5305, skipBenchmarks]);
  return
}
function CheckCompatibility() {
  var v8476 = typeof Uint8Array;
  var v5306 = v8476 != "undefined";
  if(v5306) {
    var v9751 = typeof Float64Array;
    var v8477 = v9751 != "undefined";
    if(v8477) {
      var v10586 = new Uint8Array(0);
      var v10363 = v10586.subarray;
      var v9752 = typeof v10363;
      v8477 = v9752 != "undefined"
    }
    v5306 = v8477
  }
  var hasTypedArrays = v5306;
  var v5308 = !hasTypedArrays;
  if(v5308) {
    console.log("Typed Arrays not supported");
    var v8478 = document.getElementById("alertbox");
    var v5307 = v8478.style;
    v5307.display = "block"
  }
  var v10364 = window.document;
  var v9753 = v10364.URL;
  var v8479 = v9753.indexOf("skip_zlib=1");
  var v5309 = v8479 >= 0;
  if(v5309) {
    skipBenchmarks.push("zlib")
  }
  var v10365 = window.document;
  var v9754 = v10365.URL;
  var v8480 = v9754.indexOf("auto=1");
  var v5310 = v8480 >= 0;
  if(v5310) {
    Run()
  }
  return
}
function Load() {
  JAMScript.call(setTimeout, null, [CheckCompatibility, 200]);
  return
}
var performance = performance || {};
var v5311 = performance;
var v10976 = v17();
v5311.now = v10976;
var v5312 = BenchmarkResult.prototype;
v5312.valueOf = v18;
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
var v5313 = BenchmarkSuite.prototype;
v5313.NotifyStep = v29;
var v5314 = BenchmarkSuite.prototype;
v5314.NotifyResult = v30;
var v5315 = BenchmarkSuite.prototype;
v5315.NotifySkipped = v31;
var v5316 = BenchmarkSuite.prototype;
v5316.NotifyError = v32;
var v5317 = BenchmarkSuite.prototype;
v5317.RunSingleBenchmark = v33;
var v5318 = BenchmarkSuite.prototype;
v5318.RunStep = v34;
var v5319 = [26288412];
var v8481 = new Benchmark("Gameboy", false, false, 20, runGameboy, setupGameboy, tearDownGameboy, null, 4);
var v5320 = [v8481];
var GameboyBenchmark = new BenchmarkSuite("Gameboy", v5319, v5320);
var decoded_gameboy_rom = null;
var v5321 = '{"registerA":160,"registerB":255,"registerC":255,"registerE":11,' + '"registersHL":51600,"programCounter":24309,"stackPointer":49706,';
var expectedGameboyStateStr = v5321 + '"sumROM":10171578,"sumMemory":3435856,"sumMBCRam":234598,"sumVRam":0}';
var GameBoyWindow = {};
var GameBoyAudioNode = {bufferSize:0, onaudioprocess:null, connect:v35, run:v36};
var mock_date_time_counter = 0;
var toBase64 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", "="];
var fromBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var v5322 = Resampler.prototype;
v5322.initialize = v37;
var v5323 = Resampler.prototype;
v5323.compileInterpolationFunction = v38;
var v5324 = Resampler.prototype;
v5324.bypassResampler = v39;
var v5325 = Resampler.prototype;
v5325.bufferSlice = v40;
var v5326 = Resampler.prototype;
v5326.initializeBuffers = v41;
var v5327 = XAudioServer.prototype;
v5327.MOZWriteAudio = v42;
var v5328 = XAudioServer.prototype;
v5328.MOZWriteAudioNoCallback = v43;
var v5329 = XAudioServer.prototype;
v5329.callbackBasedWriteAudio = v44;
var v5330 = XAudioServer.prototype;
v5330.callbackBasedWriteAudioNoCallback = v45;
var v5331 = XAudioServer.prototype;
v5331.writeAudio = v46;
var v5332 = XAudioServer.prototype;
v5332.writeAudioNoCallback = v47;
var v5333 = XAudioServer.prototype;
v5333.remainingBuffer = v48;
var v5334 = XAudioServer.prototype;
v5334.MOZExecuteCallback = v49;
var v5335 = XAudioServer.prototype;
v5335.callbackBasedExecuteCallback = v50;
var v5336 = XAudioServer.prototype;
v5336.executeCallback = v51;
var v5337 = XAudioServer.prototype;
v5337.initializeAudio = v52;
var v5338 = XAudioServer.prototype;
v5338.preInitializeMozAudio = v53;
var v5339 = XAudioServer.prototype;
v5339.initializeMozAudio = v54;
var v5340 = XAudioServer.prototype;
v5340.initializeWebAudio = v55;
var v5341 = XAudioServer.prototype;
v5341.initializeFlashAudio = v57;
var v5342 = XAudioServer.prototype;
v5342.changeVolume = v58;
var v5343 = XAudioServer.prototype;
v5343.writeMozAudio = v59;
var v5344 = XAudioServer.prototype;
v5344.checkFlashInit = v60;
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
var v5345 = Resize.prototype;
v5345.initialize = v62;
var v5346 = Resize.prototype;
v5346.resizeWidthRGB = v63;
var v5347 = Resize.prototype;
v5347.resizeWidthInterpolatedRGB = v64;
var v5348 = Resize.prototype;
v5348.resizeWidthRGBA = v65;
var v5349 = Resize.prototype;
v5349.resizeWidthInterpolatedRGBA = v66;
var v5350 = Resize.prototype;
v5350.resizeHeightRGB = v67;
var v5351 = Resize.prototype;
v5351.resizeHeightInterpolated = v68;
var v5352 = Resize.prototype;
v5352.resizeHeightRGBA = v69;
var v5353 = Resize.prototype;
v5353.resizeHeightInterpolatedRGBA = v70;
var v5354 = Resize.prototype;
v5354.resize = v71;
var v5355 = Resize.prototype;
v5355.bypassResizer = v72;
var v5356 = Resize.prototype;
v5356.initializeFirstPassBuffers = v73;
var v5357 = Resize.prototype;
v5357.initializeSecondPassBuffers = v74;
var v5358 = Resize.prototype;
v5358.generateFloatBuffer = v75;
var v5359 = Resize.prototype;
v5359.generateUint8Buffer = v76;
var v5360 = Resize.prototype;
v5360.checkForOperaMathBug = v77;
var v5361 = GameBoyCore.prototype;
v5361.GBBOOTROM = [];
var v5362 = GameBoyCore.prototype;
v5362.GBCBOOTROM = [];
var v5363 = GameBoyCore.prototype;
v5363.ffxxDump = [15, 0, 124, 255, 0, 0, 0, 248, 255, 255, 255, 255, 255, 255, 255, 1, 128, 191, 243, 255, 191, 255, 63, 0, 255, 191, 127, 255, 159, 255, 191, 255, 255, 0, 0, 191, 119, 243, 241, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 145, 128, 0, 0, 0, 0, 0, 252, 0, 0, 0, 0, 255, 126, 255, 254, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 192, 255, 193, 0, 
254, 255, 255, 255, 248, 255, 0, 0, 0, 143, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 206, 237, 102, 102, 204, 13, 0, 11, 3, 115, 0, 131, 0, 12, 0, 13, 0, 8, 17, 31, 136, 137, 0, 14, 220, 204, 110, 230, 221, 221, 217, 153, 187, 187, 103, 99, 110, 14, 236, 204, 221, 220, 153, 159, 187, 185, 51, 62, 69, 236, 82, 250, 8, 183, 7, 93, 1, 253, 192, 255, 8, 252, 0, 229, 11, 248, 194, 206, 244, 249, 15, 127, 69, 109, 61, 254, 70, 151, 51, 94, 8, 239, 241, 255, 134, 131, 36, 116, 18, 252, 0, 159, 180, 
183, 6, 213, 208, 122, 0, 158, 4, 95, 65, 47, 29, 119, 54, 117, 129, 170, 112, 58, 152, 209, 113, 2, 77, 1, 193, 255, 13, 0, 211, 5, 249, 0, 11, 0];
var v5364 = GameBoyCore.prototype;
v5364.OPCODE = [v78, v79, v80, v81, v82, v83, v84, v85, v86, v87, v88, v89, v90, v91, v92, v93, v94, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131, v132, v133, v134, v135, v136, v137, v138, v139, v140, v141, v142, v143, v144, v145, v146, v147, v148, v149, v150, v151, v152, v153, v154, v155, v156, v157, v158, v159, v160, v161, v162, 
v163, v164, v165, v166, v167, v168, v169, v170, v171, v172, v173, v174, v175, v176, v177, v178, v179, v180, v181, v182, v183, v184, v185, v186, v187, v188, v189, v190, v191, v192, v193, v194, v195, v196, v197, v198, v199, v200, v201, v202, v203, v204, v205, v206, v207, v208, v209, v210, v211, v212, v213, v214, v215, v216, v217, v218, v219, v220, v221, v222, v223, v224, v225, v226, v227, v228, v229, v230, v231, v232, v233, v234, v235, v236, v237, v238, v239, v240, v241, v242, v243, v244, v245, v246, 
v247, v248, v249, v250, v251, v252, v253, v254, v255, v256, v257, v258, v259, v260, v261, v262, v263, v264, v265, v266, v267, v268, v269, v270, v271, v272, v273, v274, v275, v276, v277, v278, v279, v280, v281, v282, v283, v284, v285, v286, v287, v288, v289, v290, v291, v292, v293, v294, v295, v296, v297, v298, v299, v300, v301, v302, v303, v304, v305, v306, v307, v308, v309, v310, v311, v312, v313, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, 
v331, v332, v333];
var v5365 = GameBoyCore.prototype;
v5365.CBOPCODE = [v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v346, v347, v348, v349, v350, v351, v352, v353, v354, v355, v356, v357, v358, v359, v360, v361, v362, v363, v364, v365, v366, v367, v368, v369, v370, v371, v372, v373, v374, v375, v376, v377, v378, v379, v380, v381, v382, v383, v384, v385, v386, v387, v388, v389, v390, v391, v392, v393, v394, v395, v396, v397, v398, v399, v400, v401, v402, v403, v404, v405, v406, v407, v408, v409, v410, v411, v412, v413, v414, 
v415, v416, v417, v418, v419, v420, v421, v422, v423, v424, v425, v426, v427, v428, v429, v430, v431, v432, v433, v434, v435, v436, v437, v438, v439, v440, v441, v442, v443, v444, v445, v446, v447, v448, v449, v450, v451, v452, v453, v454, v455, v456, v457, v458, v459, v460, v461, v462, v463, v464, v465, v466, v467, v468, v469, v470, v471, v472, v473, v474, v475, v476, v477, v478, v479, v480, v481, v482, v483, v484, v485, v486, v487, v488, v489, v490, v491, v492, v493, v494, v495, v496, v497, v498, 
v499, v500, v501, v502, v503, v504, v505, v506, v507, v508, v509, v510, v511, v512, v513, v514, v515, v516, v517, v518, v519, v520, v521, v522, v523, v524, v525, v526, v527, v528, v529, v530, v531, v532, v533, v534, v535, v536, v537, v538, v539, v540, v541, v542, v543, v544, v545, v546, v547, v548, v549, v550, v551, v552, v553, v554, v555, v556, v557, v558, v559, v560, v561, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v574, v575, v576, v577, v578, v579, v580, v581, v582, 
v583, v584, v585, v586, v587, v588, v589];
var v5366 = GameBoyCore.prototype;
v5366.TICKTable = [4, 12, 8, 8, 4, 4, 8, 4, 20, 8, 8, 8, 4, 4, 8, 4, 4, 12, 8, 8, 4, 4, 8, 4, 12, 8, 8, 8, 4, 4, 8, 4, 8, 12, 8, 8, 4, 4, 8, 4, 8, 8, 8, 8, 4, 4, 8, 4, 8, 12, 8, 8, 12, 12, 12, 4, 8, 8, 8, 8, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 8, 8, 8, 8, 8, 8, 4, 8, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 
8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 8, 12, 12, 16, 12, 16, 8, 16, 8, 16, 12, 0, 12, 24, 8, 16, 8, 12, 12, 4, 12, 16, 8, 16, 8, 16, 12, 4, 12, 4, 8, 16, 12, 12, 8, 4, 4, 16, 8, 16, 16, 4, 16, 4, 4, 4, 8, 16, 12, 12, 8, 4, 4, 16, 8, 16, 12, 8, 16, 4, 0, 4, 8, 16];
var v5367 = GameBoyCore.prototype;
v5367.SecondaryTICKTable = [8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 
8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8];
var v5368 = GameBoyCore.prototype;
v5368.saveSRAMState = v590;
var v5369 = GameBoyCore.prototype;
v5369.saveRTCState = v591;
var v5370 = GameBoyCore.prototype;
v5370.saveState = v592;
var v5371 = GameBoyCore.prototype;
v5371.returnFromState = v593;
var v5372 = GameBoyCore.prototype;
v5372.returnFromRTCState = v594;
var v5373 = GameBoyCore.prototype;
v5373.start = v595;
var v5374 = GameBoyCore.prototype;
v5374.initMemory = v596;
var v5375 = GameBoyCore.prototype;
v5375.generateCacheArray = v597;
var v5376 = GameBoyCore.prototype;
v5376.initSkipBootstrap = v598;
var v5377 = GameBoyCore.prototype;
v5377.initBootstrap = v599;
var v5378 = GameBoyCore.prototype;
v5378.ROMLoad = v600;
var v5379 = GameBoyCore.prototype;
v5379.getROMImage = v601;
var v5380 = GameBoyCore.prototype;
v5380.interpretCartridge = v602;
var v5381 = GameBoyCore.prototype;
v5381.disableBootROM = v603;
var v5382 = GameBoyCore.prototype;
v5382.initializeTiming = v604;
var v5383 = GameBoyCore.prototype;
v5383.setupRAM = v605;
var v5384 = GameBoyCore.prototype;
v5384.MBCRAMUtilized = v606;
var v5385 = GameBoyCore.prototype;
v5385.recomputeDimension = v607;
var v5386 = GameBoyCore.prototype;
v5386.initLCD = v608;
var v5387 = GameBoyCore.prototype;
v5387.graphicsBlit = v609;
var v5388 = GameBoyCore.prototype;
v5388.JoyPadEvent = v610;
var v5389 = GameBoyCore.prototype;
v5389.GyroEvent = v611;
var v5390 = GameBoyCore.prototype;
v5390.initSound = v612;
var v5391 = GameBoyCore.prototype;
v5391.changeVolume = v613;
var v5392 = GameBoyCore.prototype;
v5392.initAudioBuffer = v614;
var v5393 = GameBoyCore.prototype;
v5393.intializeWhiteNoise = v615;
var v5394 = GameBoyCore.prototype;
v5394.audioUnderrunAdjustment = v616;
var v5395 = GameBoyCore.prototype;
v5395.initializeAudioStartState = v617;
var v5396 = GameBoyCore.prototype;
v5396.outputAudio = v618;
var v5397 = GameBoyCore.prototype;
v5397.generateAudio = v619;
var v5398 = GameBoyCore.prototype;
v5398.generateAudioFake = v620;
var v5399 = GameBoyCore.prototype;
v5399.audioJIT = v621;
var v5400 = GameBoyCore.prototype;
v5400.audioComputeSequencer = v622;
var v5401 = GameBoyCore.prototype;
v5401.clockAudioLength = v623;
var v5402 = GameBoyCore.prototype;
v5402.clockAudioSweep = v624;
var v5403 = GameBoyCore.prototype;
v5403.runAudioSweep = v625;
var v5404 = GameBoyCore.prototype;
v5404.clockAudioEnvelope = v626;
var v5405 = GameBoyCore.prototype;
v5405.computeAudioChannels = v627;
var v5406 = GameBoyCore.prototype;
v5406.channel1EnableCheck = v628;
var v5407 = GameBoyCore.prototype;
v5407.channel1VolumeEnableCheck = v629;
var v5408 = GameBoyCore.prototype;
v5408.channel1OutputLevelCache = v630;
var v5409 = GameBoyCore.prototype;
v5409.channel1OutputLevelSecondaryCache = v631;
var v5410 = GameBoyCore.prototype;
v5410.channel1OutputLevelTrimaryCache = v632;
var v5411 = GameBoyCore.prototype;
v5411.channel2EnableCheck = v633;
var v5412 = GameBoyCore.prototype;
v5412.channel2VolumeEnableCheck = v634;
var v5413 = GameBoyCore.prototype;
v5413.channel2OutputLevelCache = v635;
var v5414 = GameBoyCore.prototype;
v5414.channel2OutputLevelSecondaryCache = v636;
var v5415 = GameBoyCore.prototype;
v5415.channel2OutputLevelTrimaryCache = v637;
var v5416 = GameBoyCore.prototype;
v5416.channel3EnableCheck = v638;
var v5417 = GameBoyCore.prototype;
v5417.channel3OutputLevelCache = v639;
var v5418 = GameBoyCore.prototype;
v5418.channel3OutputLevelSecondaryCache = v640;
var v5419 = GameBoyCore.prototype;
v5419.channel4EnableCheck = v641;
var v5420 = GameBoyCore.prototype;
v5420.channel4VolumeEnableCheck = v642;
var v5421 = GameBoyCore.prototype;
v5421.channel4OutputLevelCache = v643;
var v5422 = GameBoyCore.prototype;
v5422.channel4OutputLevelSecondaryCache = v644;
var v5423 = GameBoyCore.prototype;
v5423.mixerOutputLevelCache = v645;
var v5424 = GameBoyCore.prototype;
v5424.channel3UpdateCache = v646;
var v5425 = GameBoyCore.prototype;
v5425.channel3WriteRAM = v647;
var v5426 = GameBoyCore.prototype;
v5426.channel4UpdateCache = v648;
var v5427 = GameBoyCore.prototype;
v5427.run = v649;
var v5428 = GameBoyCore.prototype;
v5428.executeIteration = v650;
var v5429 = GameBoyCore.prototype;
v5429.iterationEndRoutine = v651;
var v5430 = GameBoyCore.prototype;
v5430.handleSTOP = v652;
var v5431 = GameBoyCore.prototype;
v5431.recalculateIterationClockLimit = v653;
var v5432 = GameBoyCore.prototype;
v5432.scanLineMode2 = v654;
var v5433 = GameBoyCore.prototype;
v5433.scanLineMode3 = v655;
var v5434 = GameBoyCore.prototype;
v5434.scanLineMode0 = v656;
var v5435 = GameBoyCore.prototype;
v5435.clocksUntilLYCMatch = v657;
var v5436 = GameBoyCore.prototype;
v5436.clocksUntilMode0 = v658;
var v5437 = GameBoyCore.prototype;
v5437.updateSpriteCount = v659;
var v5438 = GameBoyCore.prototype;
v5438.matchLYC = v660;
var v5439 = GameBoyCore.prototype;
v5439.updateCore = v661;
var v5440 = GameBoyCore.prototype;
v5440.updateCoreFull = v662;
var v5441 = GameBoyCore.prototype;
v5441.initializeLCDController = v667;
var v5442 = GameBoyCore.prototype;
v5442.DisplayShowOff = v668;
var v5443 = GameBoyCore.prototype;
v5443.executeHDMA = v669;
var v5444 = GameBoyCore.prototype;
v5444.clockUpdate = v670;
var v5445 = GameBoyCore.prototype;
v5445.prepareFrame = v671;
var v5446 = GameBoyCore.prototype;
v5446.requestDraw = v672;
var v5447 = GameBoyCore.prototype;
v5447.dispatchDraw = v673;
var v5448 = GameBoyCore.prototype;
v5448.swizzleFrameBuffer = v674;
var v5449 = GameBoyCore.prototype;
v5449.clearFrameBuffer = v675;
var v5450 = GameBoyCore.prototype;
v5450.resizeFrameBuffer = v676;
var v5451 = GameBoyCore.prototype;
v5451.compileResizeFrameBufferFunction = v677;
var v5452 = GameBoyCore.prototype;
v5452.renderScanLine = v678;
var v5453 = GameBoyCore.prototype;
v5453.renderMidScanLine = v679;
var v5454 = GameBoyCore.prototype;
v5454.initializeModeSpecificArrays = v680;
var v5455 = GameBoyCore.prototype;
v5455.GBCtoGBModeAdjust = v681;
var v5456 = GameBoyCore.prototype;
v5456.renderPathBuild = v682;
var v5457 = GameBoyCore.prototype;
v5457.priorityFlaggingPathRebuild = v683;
var v5458 = GameBoyCore.prototype;
v5458.initializeReferencesFromSaveState = v684;
var v5459 = GameBoyCore.prototype;
v5459.RGBTint = v685;
var v5460 = GameBoyCore.prototype;
v5460.getGBCColor = v686;
var v5461 = GameBoyCore.prototype;
v5461.updateGBRegularBGPalette = v687;
var v5462 = GameBoyCore.prototype;
v5462.updateGBColorizedBGPalette = v688;
var v5463 = GameBoyCore.prototype;
v5463.updateGBRegularOBJPalette = v689;
var v5464 = GameBoyCore.prototype;
v5464.updateGBColorizedOBJPalette = v690;
var v5465 = GameBoyCore.prototype;
v5465.updateGBCBGPalette = v691;
var v5466 = GameBoyCore.prototype;
v5466.updateGBCOBJPalette = v692;
var v5467 = GameBoyCore.prototype;
v5467.BGGBLayerRender = v693;
var v5468 = GameBoyCore.prototype;
v5468.BGGBCLayerRender = v694;
var v5469 = GameBoyCore.prototype;
v5469.BGGBCLayerRenderNoPriorityFlagging = v695;
var v5470 = GameBoyCore.prototype;
v5470.WindowGBLayerRender = v696;
var v5471 = GameBoyCore.prototype;
v5471.WindowGBCLayerRender = v697;
var v5472 = GameBoyCore.prototype;
v5472.WindowGBCLayerRenderNoPriorityFlagging = v698;
var v5473 = GameBoyCore.prototype;
v5473.SpriteGBLayerRender = v699;
var v5474 = GameBoyCore.prototype;
v5474.findLowestSpriteDrawable = v700;
var v5475 = GameBoyCore.prototype;
v5475.SpriteGBCLayerRender = v701;
var v5476 = GameBoyCore.prototype;
v5476.generateGBTileLine = v702;
var v5477 = GameBoyCore.prototype;
v5477.generateGBCTileLineBank1 = v703;
var v5478 = GameBoyCore.prototype;
v5478.generateGBCTileBank1 = v704;
var v5479 = GameBoyCore.prototype;
v5479.generateGBCTileLineBank2 = v705;
var v5480 = GameBoyCore.prototype;
v5480.generateGBCTileBank2 = v706;
var v5481 = GameBoyCore.prototype;
v5481.generateGBOAMTileLine = v707;
var v5482 = GameBoyCore.prototype;
v5482.graphicsJIT = v708;
var v5483 = GameBoyCore.prototype;
v5483.graphicsJITVBlank = v709;
var v5484 = GameBoyCore.prototype;
v5484.graphicsJITScanlineGroup = v710;
var v5485 = GameBoyCore.prototype;
v5485.incrementScanLineQueue = v711;
var v5486 = GameBoyCore.prototype;
v5486.midScanLineJIT = v712;
var v5487 = GameBoyCore.prototype;
v5487.launchIRQ = v713;
var v5488 = GameBoyCore.prototype;
v5488.checkIRQMatching = v714;
var v5489 = GameBoyCore.prototype;
v5489.calculateHALTPeriod = v715;
var v5490 = GameBoyCore.prototype;
v5490.memoryRead = v716;
var v5491 = GameBoyCore.prototype;
v5491.memoryHighRead = v717;
var v5492 = GameBoyCore.prototype;
v5492.memoryReadJumpCompile = v751;
var v5493 = GameBoyCore.prototype;
v5493.memoryReadNormal = v752;
var v5494 = GameBoyCore.prototype;
v5494.memoryHighReadNormal = v753;
var v5495 = GameBoyCore.prototype;
v5495.memoryReadROM = v754;
var v5496 = GameBoyCore.prototype;
v5496.memoryReadMBC = v755;
var v5497 = GameBoyCore.prototype;
v5497.memoryReadMBC7 = v756;
var v5498 = GameBoyCore.prototype;
v5498.memoryReadMBC3 = v757;
var v5499 = GameBoyCore.prototype;
v5499.memoryReadGBCMemory = v758;
var v5500 = GameBoyCore.prototype;
v5500.memoryReadOAM = v759;
var v5501 = GameBoyCore.prototype;
v5501.memoryReadECHOGBCMemory = v760;
var v5502 = GameBoyCore.prototype;
v5502.memoryReadECHONormal = v761;
var v5503 = GameBoyCore.prototype;
v5503.memoryReadBAD = v762;
var v5504 = GameBoyCore.prototype;
v5504.VRAMDATAReadCGBCPU = v763;
var v5505 = GameBoyCore.prototype;
v5505.VRAMDATAReadDMGCPU = v764;
var v5506 = GameBoyCore.prototype;
v5506.VRAMCHRReadCGBCPU = v765;
var v5507 = GameBoyCore.prototype;
v5507.VRAMCHRReadDMGCPU = v766;
var v5508 = GameBoyCore.prototype;
v5508.setCurrentMBC1ROMBank = v767;
var v5509 = GameBoyCore.prototype;
v5509.setCurrentMBC2AND3ROMBank = v768;
var v5510 = GameBoyCore.prototype;
v5510.setCurrentMBC5ROMBank = v769;
var v5511 = GameBoyCore.prototype;
v5511.memoryWrite = v770;
var v5512 = GameBoyCore.prototype;
v5512.memoryHighWrite = v771;
var v5513 = GameBoyCore.prototype;
v5513.memoryWriteJumpCompile = v772;
var v5514 = GameBoyCore.prototype;
v5514.MBCWriteEnable = v773;
var v5515 = GameBoyCore.prototype;
v5515.MBC1WriteROMBank = v774;
var v5516 = GameBoyCore.prototype;
v5516.MBC1WriteRAMBank = v775;
var v5517 = GameBoyCore.prototype;
v5517.MBC1WriteType = v776;
var v5518 = GameBoyCore.prototype;
v5518.MBC2WriteROMBank = v777;
var v5519 = GameBoyCore.prototype;
v5519.MBC3WriteROMBank = v778;
var v5520 = GameBoyCore.prototype;
v5520.MBC3WriteRAMBank = v779;
var v5521 = GameBoyCore.prototype;
v5521.MBC3WriteRTCLatch = v780;
var v5522 = GameBoyCore.prototype;
v5522.MBC5WriteROMBankLow = v781;
var v5523 = GameBoyCore.prototype;
v5523.MBC5WriteROMBankHigh = v782;
var v5524 = GameBoyCore.prototype;
v5524.MBC5WriteRAMBank = v783;
var v5525 = GameBoyCore.prototype;
v5525.RUMBLEWriteRAMBank = v784;
var v5526 = GameBoyCore.prototype;
v5526.HuC3WriteRAMBank = v785;
var v5527 = GameBoyCore.prototype;
v5527.cartIgnoreWrite = v786;
var v5528 = GameBoyCore.prototype;
v5528.memoryWriteNormal = v787;
var v5529 = GameBoyCore.prototype;
v5529.memoryHighWriteNormal = v788;
var v5530 = GameBoyCore.prototype;
v5530.memoryWriteMBCRAM = v789;
var v5531 = GameBoyCore.prototype;
v5531.memoryWriteMBC3RAM = v790;
var v5532 = GameBoyCore.prototype;
v5532.memoryWriteGBCRAM = v791;
var v5533 = GameBoyCore.prototype;
v5533.memoryWriteOAMRAM = v792;
var v5534 = GameBoyCore.prototype;
v5534.memoryWriteECHOGBCRAM = v793;
var v5535 = GameBoyCore.prototype;
v5535.memoryWriteECHONormal = v794;
var v5536 = GameBoyCore.prototype;
v5536.VRAMGBDATAWrite = v795;
var v5537 = GameBoyCore.prototype;
v5537.VRAMGBDATAUpperWrite = v796;
var v5538 = GameBoyCore.prototype;
v5538.VRAMGBCDATAWrite = v797;
var v5539 = GameBoyCore.prototype;
v5539.VRAMGBCHRMAPWrite = v798;
var v5540 = GameBoyCore.prototype;
v5540.VRAMGBCCHRMAPWrite = v799;
var v5541 = GameBoyCore.prototype;
v5541.DMAWrite = v800;
var v5542 = GameBoyCore.prototype;
v5542.registerWriteJumpCompile = v855;
var v5543 = GameBoyCore.prototype;
v5543.recompileModelSpecificIOWriteHandling = v881;
var v5544 = GameBoyCore.prototype;
v5544.recompileBootIOWriteHandling = v884;
var v5545 = GameBoyCore.prototype;
v5545.toTypedArray = v885;
var v5546 = GameBoyCore.prototype;
v5546.fromTypedArray = v886;
var v5547 = GameBoyCore.prototype;
v5547.getTypedArray = v887;
var v5548 = GameBoyCore.prototype;
v5548.checkForOperaMathBug = v888;
var gameboy = null;
var gbRunInterval = null;
var v5549 = [39, 37, 38, 40, 88, 90, 16, 13];
var settings = [true, false, false, v5549, true, false, 4, 15, 30, false, false, false, false, 16, 1];
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
var benchmarks = JAMScript.call(BenchmarkSuite.CountBenchmarks, BenchmarkSuite, []);
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var v5550;
var v9755 = typeof skipBenchmarks;
var v8482 = v9755 === "undefined";
if(v8482) {
  v5550 = []
}else {
  v5550 = skipBenchmarks
}
var skipBenchmarks = v5550;

