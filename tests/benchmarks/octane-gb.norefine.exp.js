function v888() {
  var testTypedArray = new Uint8Array(1);
  testTypedArray[0] = -1;
  var v5619 = testTypedArray;
  var v8693 = testTypedArray[0];
  v5619[0] = v8693 >> 0;
  var v5620 = testTypedArray[0];
  var v889 = v5620 != 255;
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
    var v5621 = numberType != "float32";
    if(v5621) {
      var v8694 = GameBoyWindow.opera;
      if(v8694) {
        v8694 = JAMScript.call(this.checkForOperaMathBug, this, [])
      }
      v5621 = v8694
    }
    var v891 = v5621;
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
    var v5622 = error$$27.message;
    var v895 = "Could not convert an array to a typed array: " + v5622;
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
    var v5623 = !baseArray$$1;
    var v8696 = !v5623;
    if(v8696) {
      var v8695 = baseArray$$1.length;
      v5623 = !v8695
    }
    var v898 = v5623;
    if(v898) {
      return[]
    }
    var arrayTemp = [];
    var index$$66 = 0;
    var v5624 = baseArray$$1.length;
    var v899 = index$$66 < v5624;
    for(;v899;) {
      arrayTemp[index$$66] = baseArray$$1[index$$66];
      index$$66 = index$$66 + 1;
      var v5625 = baseArray$$1.length;
      v899 = index$$66 < v5625
    }
    return arrayTemp
  }catch(error$$26) {
    var v5626 = error$$26.message;
    var v900 = "Conversion from a typed array failed: " + v5626;
    cout(v900, 1);
    return baseArray$$1
  }
  return
}
function v885(baseArray, memtype) {
  try {
    var v5627 = settings[5];
    var v8698 = !v5627;
    if(v8698) {
      var v8697 = memtype != "float32";
      if(v8697) {
        var v10464 = GameBoyWindow.opera;
        if(v10464) {
          v10464 = JAMScript.call(this.checkForOperaMathBug, this, [])
        }
        v8697 = v10464
      }
      v5627 = v8697
    }
    var v901 = v5627;
    if(v901) {
      return baseArray
    }
    var v5628 = !baseArray;
    var v8700 = !v5628;
    if(v8700) {
      var v8699 = baseArray.length;
      v5628 = !v8699
    }
    var v902 = v5628;
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
    var v5629 = error$$25.message;
    var v904 = "Could not convert an array to a typed array: " + v5629;
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
      var v10465 = parentObj$$673.name;
      var v10466 = parentObj$$673.gameCode;
      var v8701 = v10465 + v10466;
      var v10467 = parentObj$$673.ROM;
      var v8702 = v10467[323];
      var v5630 = v8701 + v8702;
      var v906 = v5630 == "Game and Watch 50";
      if(v906) {
        parentObj$$673.cGBC = true;
        cout("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1)
      }
      var v5631 = parentObj$$673.cGBC;
      var v907 = "Booted to GBC Mode: " + v5631;
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
    var v5632 = this.memoryWriter;
    v911[80] = v5632[65360] = v882;
    var v913 = this.cGBC;
    if(v913) {
      var v912 = this.memoryHighWriter;
      var v5633 = this.memoryWriter;
      v912[108] = v5633[65388] = v883
    }
  }else {
    var v914 = this.memoryHighWriter;
    var v5634 = this.memoryWriter;
    v914[80] = v5634[65360] = this.cartIgnoreWrite
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
    var v8703 = parentObj$$670.memory;
    var v5635 = v8703[65353];
    var v918 = v5635 != data$$138;
    if(v918) {
      JAMScript.call(parentObj$$670.midScanLineJIT, parentObj$$670, []);
      JAMScript.call(parentObj$$670.updateGBOBJPalette, parentObj$$670, [4, data$$138]);
      var v917 = parentObj$$670.memory;
      v917[65353] = data$$138
    }
    return
  }
  function v878(parentObj$$669, address$$163, data$$137) {
    var v8704 = parentObj$$669.memory;
    var v5636 = v8704[65352];
    var v920 = v5636 != data$$137;
    if(v920) {
      JAMScript.call(parentObj$$669.midScanLineJIT, parentObj$$669, []);
      JAMScript.call(parentObj$$669.updateGBOBJPalette, parentObj$$669, [0, data$$137]);
      var v919 = parentObj$$669.memory;
      v919[65352] = data$$137
    }
    return
  }
  function v877(parentObj$$668, address$$162, data$$136) {
    var v8705 = parentObj$$668.memory;
    var v5637 = v8705[65351];
    var v922 = v5637 != data$$136;
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
    var v5638 = data$$135 > 127;
    if(v5638) {
      v5638 = data$$135 < 224
    }
    var v940 = v5638;
    if(v940) {
      data$$135 = data$$135 << 8;
      address$$161 = 65024;
      var stat$$1 = parentObj$$667.modeSTAT;
      parentObj$$667.modeSTAT = 0;
      var newData$$1 = 0;
      var v5639 = address$$161 = address$$161 + 1;
      var v929 = v5639 < 65184;
      do {
        var v924 = parentObj$$667.memoryReader;
        var v925 = data$$135;
        data$$135 = data$$135 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11918 = [[parentObj$$667, v925], v924, v924[data$$135]]
        }
        newData$$1 = JAMScript.call(v11918[2], v11918[1], v11918[0]);
        var v8706 = parentObj$$667.memory;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v5640 = v8706[address$$161]
        }
        var v928 = newData$$1 != v5640;
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
        var v5641 = address$$161 = address$$161 + 1;
        v929 = v5641 < 65184
      }while(v929);
      var v939 = address$$161 < 65184;
      if(v939) {
        var v938 = address$$161 < 65184;
        do {
          var v930 = parentObj$$667.memory;
          var v931 = address$$161;
          address$$161 = address$$161 + 1;
          var v5642 = parentObj$$667.memoryReader;
          var v5643 = data$$135;
          data$$135 = data$$135 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11919 = [[parentObj$$667, v5643], v5642, v5642[data$$135]]
          }
          var v11696 = JAMScript.call(v11919[2], v11919[1], v11919[0]);
          v930[v931] = v11696;
          var v932 = parentObj$$667.memory;
          var v933 = address$$161;
          address$$161 = address$$161 + 1;
          var v5644 = parentObj$$667.memoryReader;
          var v5645 = data$$135;
          data$$135 = data$$135 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11920 = [[parentObj$$667, v5645], v5644, v5644[data$$135]]
          }
          var v11697 = JAMScript.call(v11920[2], v11920[1], v11920[0]);
          v932[v933] = v11697;
          var v934 = parentObj$$667.memory;
          var v935 = address$$161;
          address$$161 = address$$161 + 1;
          var v5646 = parentObj$$667.memoryReader;
          var v5647 = data$$135;
          data$$135 = data$$135 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11921 = [[parentObj$$667, v5647], v5646, v5646[data$$135]]
          }
          var v11698 = JAMScript.call(v11921[2], v11921[1], v11921[0]);
          v934[v935] = v11698;
          var v936 = parentObj$$667.memory;
          var v937 = address$$161;
          address$$161 = address$$161 + 1;
          var v5648 = parentObj$$667.memoryReader;
          var v5649 = data$$135;
          data$$135 = data$$135 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11922 = [[parentObj$$667, v5649], v5648, v5648[data$$135]]
          }
          var v11699 = JAMScript.call(v11922[2], v11922[1], v11922[0]);
          v936[v937] = v11699;
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
    var v10468 = parentObj$$666.usedBootROM;
    var v8707 = !v10468;
    var v10470 = !v8707;
    if(v10470) {
      var v10469 = parentObj$$666.usedGBCBootROM;
      v8707 = !v10469
    }
    var v5650 = v8707;
    if(v5650) {
      var v8708 = parentObj$$666.LCDisOn;
      if(v8708) {
        var v10471 = parentObj$$666.modeSTAT;
        v8708 = v10471 < 2
      }
      v5650 = v8708
    }
    var v946 = v5650;
    if(v946) {
      var v5651 = parentObj$$666;
      var v8709 = parentObj$$666.interruptsRequested;
      v5651.interruptsRequested = v8709 | 2;
      JAMScript.call(parentObj$$666.checkIRQMatching, parentObj$$666, [])
    }
    return
  }
  function v874(parentObj$$665, address$$159, data$$133) {
    var v8710 = parentObj$$665.memory;
    var v5652 = v8710[65344];
    var v961 = v5652 != data$$133;
    if(v961) {
      JAMScript.call(parentObj$$665.midScanLineJIT, parentObj$$665, []);
      var temp_var$$22 = data$$133 > 127;
      var v5653 = parentObj$$665.LCDisOn;
      var v952 = temp_var$$22 != v5653;
      if(v952) {
        parentObj$$665.LCDisOn = temp_var$$22;
        var v947 = parentObj$$665.memory;
        var v8711 = v947[65345];
        v947[65345] = v8711 & 120;
        parentObj$$665.midScanlineOffset = -1;
        var v948 = parentObj$$665;
        var v5654 = parentObj$$665;
        var v8712 = parentObj$$665;
        var v10472 = parentObj$$665;
        var v11174 = parentObj$$665;
        var v11473 = parentObj$$665;
        var v11639 = parentObj$$665;
        var v11677 = parentObj$$665.memory;
        v948.totalLinesPassed = v5654.currentX = v8712.queuedScanLines = v10472.lastUnrenderedLine = v11174.STATTracker = v11473.LCDTicks = v11639.actualScanLine = v11677[65348] = 0;
        var v951 = parentObj$$665.LCDisOn;
        if(v951) {
          parentObj$$665.modeSTAT = 2;
          JAMScript.call(parentObj$$665.matchLYC, parentObj$$665, []);
          var v949 = parentObj$$665;
          v949.LCDCONTROL = parentObj$$665.LINECONTROL
        }else {
          parentObj$$665.modeSTAT = 0;
          var v950 = parentObj$$665;
          v950.LCDCONTROL = parentObj$$665.DISPLAYOFFCONTROL;
          JAMScript.call(parentObj$$665.DisplayShowOff, parentObj$$665, [])
        }
        var v5655 = parentObj$$665;
        var v8713 = parentObj$$665.interruptsRequested;
        v5655.interruptsRequested = v8713 & 253
      }
      var v953;
      var v8714 = data$$133 & 64;
      var v5656 = v8714 == 64;
      if(v5656) {
        v953 = 1024
      }else {
        v953 = 0
      }
      parentObj$$665.gfxWindowCHRBankPosition = v953;
      var v954 = data$$133 & 32;
      parentObj$$665.gfxWindowDisplay = v954 == 32;
      var v955;
      var v8715 = data$$133 & 16;
      var v5657 = v8715 == 16;
      if(v5657) {
        v955 = 0
      }else {
        v955 = 128
      }
      parentObj$$665.gfxBackgroundBankOffset = v955;
      var v956;
      var v8716 = data$$133 & 8;
      var v5658 = v8716 == 8;
      if(v5658) {
        v956 = 1024
      }else {
        v956 = 0
      }
      parentObj$$665.gfxBackgroundCHRBankPosition = v956;
      var v957 = data$$133 & 4;
      parentObj$$665.gfxSpriteNormalHeight = v957 == 0;
      var v958 = data$$133 & 2;
      parentObj$$665.gfxSpriteShow = v958 == 2;
      var v959 = data$$133 & 1;
      parentObj$$665.bgEnabled = v959 == 1;
      var v960 = parentObj$$665.memory;
      v960[65344] = data$$133
    }
    return
  }
  function v873(parentObj$$664, address$$158, data$$132) {
    var v5659 = data$$132 & 1;
    var v966 = v5659 == 1;
    if(v966) {
      var v962 = parentObj$$664.memory;
      v962[65282] = data$$132 & 127;
      parentObj$$664.serialTimer = 4096;
      var v963 = parentObj$$664;
      v963.serialShiftTimer = parentObj$$664.serialShiftTimerAllocated = 512
    }else {
      var v964 = parentObj$$664.memory;
      v964[65282] = data$$132;
      var v965 = parentObj$$664;
      var v5660 = parentObj$$664;
      v965.serialShiftTimer = v5660.serialShiftTimerAllocated = parentObj$$664.serialTimer = 0
    }
    return
  }
  function v872(parentObj$$663, address$$157, data$$131) {
    var v967 = parentObj$$663.memory;
    v967[65396] = data$$131;
    return
  }
  function v871(parentObj$$662, address$$156, data$$130) {
    var v8717 = parentObj$$662.memory;
    var v5661 = v8717[65361];
    var v968 = v5661 << 8;
    var v5662 = parentObj$$662.memory;
    var v969 = v5662[65362];
    var addressCheck = v968 | v969;
    var v8718 = parentObj$$662.hdmaRunning;
    var v5663 = !v8718;
    var v8720 = !v5663;
    if(v8720) {
      var v8719 = addressCheck < 53248;
      var v10473 = !v8719;
      if(v10473) {
        v8719 = addressCheck >= 57344
      }
      v5663 = v8719
    }
    var v973 = v5663;
    if(v973) {
      var v970 = parentObj$$662;
      var v5664 = data$$130 & 7;
      var v11700 = Math.max(v5664, 1);
      v970.gbcRamBank = v11700;
      var v971 = parentObj$$662;
      var v10474 = parentObj$$662.gbcRamBank;
      var v8721 = v10474 - 1;
      var v5665 = v8721 << 12;
      v971.gbcRamBankPosition = v5665 - 53248;
      var v972 = parentObj$$662;
      var v5666 = parentObj$$662.gbcRamBankPosition;
      v972.gbcRamBankPositionECHO = v5666 - 8192
    }
    var v974 = parentObj$$662.memory;
    v974[65392] = data$$130;
    return
  }
  function v870(parentObj$$661, address$$155, data$$129) {
    var v8722 = parentObj$$661.memory;
    var v5667 = v8722[65386];
    var v975 = v5667 & 63;
    JAMScript.call(parentObj$$661.updateGBCOBJPalette, parentObj$$661, [v975, data$$129]);
    var v8723 = parentObj$$661.memory;
    var v5668 = v8723[65386];
    var v980 = v5668 > 127;
    if(v980) {
      var v8724 = parentObj$$661.memory;
      var v5669 = v8724[65386];
      var v976 = v5669 + 1;
      var next$$1 = v976 & 63;
      var v977 = parentObj$$661.memory;
      v977[65386] = next$$1 | 128;
      var v978 = parentObj$$661.memory;
      var v5670 = parentObj$$661.gbcOBJRawPalette;
      v978[65387] = v5670[next$$1]
    }else {
      var v979 = parentObj$$661.memory;
      v979[65387] = data$$129
    }
    return
  }
  function v869(parentObj$$660, address$$154, data$$128) {
    var v981 = parentObj$$660.memory;
    var v5671 = parentObj$$660.gbcOBJRawPalette;
    var v5672 = data$$128 & 63;
    v981[65387] = v5671[v5672];
    var v982 = parentObj$$660.memory;
    v982[65386] = data$$128;
    return
  }
  function v868(parentObj$$659, address$$153, data$$127) {
    var v8725 = parentObj$$659.memory;
    var v5673 = v8725[65384];
    var v983 = v5673 & 63;
    JAMScript.call(parentObj$$659.updateGBCBGPalette, parentObj$$659, [v983, data$$127]);
    var v8726 = parentObj$$659.memory;
    var v5674 = v8726[65384];
    var v988 = v5674 > 127;
    if(v988) {
      var v8727 = parentObj$$659.memory;
      var v5675 = v8727[65384];
      var v984 = v5675 + 1;
      var next = v984 & 63;
      var v985 = parentObj$$659.memory;
      v985[65384] = next | 128;
      var v986 = parentObj$$659.memory;
      var v5676 = parentObj$$659.gbcBGRawPalette;
      v986[65385] = v5676[next]
    }else {
      var v987 = parentObj$$659.memory;
      v987[65385] = data$$127
    }
    return
  }
  function v867(parentObj$$658, address$$152, data$$126) {
    var v989 = parentObj$$658.memory;
    var v5677 = parentObj$$658.gbcBGRawPalette;
    var v5678 = data$$126 & 63;
    v989[65385] = v5677[v5678];
    var v990 = parentObj$$658.memory;
    v990[65384] = data$$126;
    return
  }
  function v866(parentObj$$657, address$$151, data$$125) {
    var v5679 = parentObj$$657.hdmaRunning;
    var v998 = !v5679;
    if(v998) {
      var v5680 = data$$125 & 128;
      var v994 = v5680 == 0;
      if(v994) {
        var v5681 = data$$125 & 127;
        var v991 = v5681 + 1;
        JAMScript.call(parentObj$$657.DMAWrite, parentObj$$657, [v991]);
        var v992 = parentObj$$657.memory;
        v992[65365] = 255
      }else {
        parentObj$$657.hdmaRunning = true;
        var v993 = parentObj$$657.memory;
        v993[65365] = data$$125 & 127
      }
    }else {
      var v5682 = data$$125 & 128;
      var v997 = v5682 == 0;
      if(v997) {
        parentObj$$657.hdmaRunning = false;
        var v995 = parentObj$$657.memory;
        var v8728 = v995[65365];
        v995[65365] = v8728 | 128
      }else {
        var v996 = parentObj$$657.memory;
        v996[65365] = data$$125 & 127
      }
    }
    return
  }
  function v865(parentObj$$656, address$$150, data$$124) {
    var v5683 = parentObj$$656.hdmaRunning;
    var v1000 = !v5683;
    if(v1000) {
      var v999 = parentObj$$656.memory;
      v999[65364] = data$$124 & 240
    }
    return
  }
  function v864(parentObj$$655, address$$149, data$$123) {
    var v5684 = parentObj$$655.hdmaRunning;
    var v1002 = !v5684;
    if(v1002) {
      var v1001 = parentObj$$655.memory;
      v1001[65363] = data$$123 & 31
    }
    return
  }
  function v863(parentObj$$654, address$$148, data$$122) {
    var v5685 = parentObj$$654.hdmaRunning;
    var v1004 = !v5685;
    if(v1004) {
      var v1003 = parentObj$$654.memory;
      v1003[65362] = data$$122 & 240
    }
    return
  }
  function v862(parentObj$$653, address$$147, data$$121) {
    var v5686 = parentObj$$653.hdmaRunning;
    var v1006 = !v5686;
    if(v1006) {
      var v1005 = parentObj$$653.memory;
      v1005[65361] = data$$121
    }
    return
  }
  function v861(parentObj$$652, address$$146, data$$120) {
    parentObj$$652.currVRAMBank = data$$120 & 1;
    var v5687 = parentObj$$652.currVRAMBank;
    var v1009 = v5687 > 0;
    if(v1009) {
      var v1007 = parentObj$$652;
      v1007.BGCHRCurrentBank = parentObj$$652.BGCHRBank2
    }else {
      var v1008 = parentObj$$652;
      v1008.BGCHRCurrentBank = parentObj$$652.BGCHRBank1
    }
    return
  }
  function v860(parentObj$$651, address$$145, data$$119) {
    var v1010 = parentObj$$651.memory;
    var v5688 = data$$119 & 127;
    var v10475 = parentObj$$651.memory;
    var v8729 = v10475[65357];
    var v5689 = v8729 & 128;
    v1010[65357] = v5688 | v5689;
    return
  }
  function v859(parentObj$$650, address$$144, data$$118) {
    var v1011 = parentObj$$650.memory;
    v1011[65350] = data$$118;
    var v1028 = data$$118 < 224;
    if(v1028) {
      data$$118 = data$$118 << 8;
      address$$144 = 65024;
      var stat = parentObj$$650.modeSTAT;
      parentObj$$650.modeSTAT = 0;
      var newData = 0;
      var v5690 = address$$144 = address$$144 + 1;
      var v1017 = v5690 < 65184;
      do {
        var v1012 = parentObj$$650.memoryReader;
        var v1013 = data$$118;
        data$$118 = data$$118 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11923 = [[parentObj$$650, v1013], v1012, v1012[data$$118]]
        }
        newData = JAMScript.call(v11923[2], v11923[1], v11923[0]);
        var v8730 = parentObj$$650.memory;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v5691 = v8730[address$$144]
        }
        var v1016 = newData != v5691;
        if(v1016) {
          parentObj$$650.modeSTAT = stat;
          JAMScript.call(parentObj$$650.graphicsJIT, parentObj$$650, []);
          parentObj$$650.modeSTAT = 0;
          var v1014 = parentObj$$650.memory;
          var v1015 = address$$144;
          address$$144 = address$$144 + 1;
          v1014[v1015] = newData;
          break
        }
        var v5692 = address$$144 = address$$144 + 1;
        v1017 = v5692 < 65184
      }while(v1017);
      var v1027 = address$$144 < 65184;
      if(v1027) {
        var v1026 = address$$144 < 65184;
        do {
          var v1018 = parentObj$$650.memory;
          var v1019 = address$$144;
          address$$144 = address$$144 + 1;
          var v5693 = parentObj$$650.memoryReader;
          var v5694 = data$$118;
          data$$118 = data$$118 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11924 = [[parentObj$$650, v5694], v5693, v5693[data$$118]]
          }
          var v11701 = JAMScript.call(v11924[2], v11924[1], v11924[0]);
          v1018[v1019] = v11701;
          var v1020 = parentObj$$650.memory;
          var v1021 = address$$144;
          address$$144 = address$$144 + 1;
          var v5695 = parentObj$$650.memoryReader;
          var v5696 = data$$118;
          data$$118 = data$$118 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11925 = [[parentObj$$650, v5696], v5695, v5695[data$$118]]
          }
          var v11702 = JAMScript.call(v11925[2], v11925[1], v11925[0]);
          v1020[v1021] = v11702;
          var v1022 = parentObj$$650.memory;
          var v1023 = address$$144;
          address$$144 = address$$144 + 1;
          var v5697 = parentObj$$650.memoryReader;
          var v5698 = data$$118;
          data$$118 = data$$118 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11926 = [[parentObj$$650, v5698], v5697, v5697[data$$118]]
          }
          var v11703 = JAMScript.call(v11926[2], v11926[1], v11926[0]);
          v1022[v1023] = v11703;
          var v1024 = parentObj$$650.memory;
          var v1025 = address$$144;
          address$$144 = address$$144 + 1;
          var v5699 = parentObj$$650.memoryReader;
          var v5700 = data$$118;
          data$$118 = data$$118 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11927 = [[parentObj$$650, v5700], v5699, v5699[data$$118]]
          }
          var v11704 = JAMScript.call(v11927[2], v11927[1], v11927[0]);
          v1024[v1025] = v11704;
          v1026 = address$$144 < 65184
        }while(v1026)
      }
      parentObj$$650.modeSTAT = stat
    }
    return
  }
  function v858(parentObj$$649, address$$143, data$$117) {
    var v1029 = data$$117 & 64;
    parentObj$$649.LYCMatchTriggerSTAT = v1029 == 64;
    var v1030 = data$$117 & 32;
    parentObj$$649.mode2TriggerSTAT = v1030 == 32;
    var v1031 = data$$117 & 16;
    parentObj$$649.mode1TriggerSTAT = v1031 == 16;
    var v1032 = data$$117 & 8;
    parentObj$$649.mode0TriggerSTAT = v1032 == 8;
    var v1033 = parentObj$$649.memory;
    v1033[65345] = data$$117 & 120;
    return
  }
  function v857(parentObj$$648, address$$142, data$$116) {
    var v8731 = parentObj$$648.memory;
    var v5701 = v8731[65344];
    var v1048 = v5701 != data$$116;
    if(v1048) {
      JAMScript.call(parentObj$$648.midScanLineJIT, parentObj$$648, []);
      var temp_var$$21 = data$$116 > 127;
      var v5702 = parentObj$$648.LCDisOn;
      var v1039 = temp_var$$21 != v5702;
      if(v1039) {
        parentObj$$648.LCDisOn = temp_var$$21;
        var v1034 = parentObj$$648.memory;
        var v8732 = v1034[65345];
        v1034[65345] = v8732 & 120;
        parentObj$$648.midScanlineOffset = -1;
        var v1035 = parentObj$$648;
        var v5703 = parentObj$$648;
        var v8733 = parentObj$$648;
        var v10476 = parentObj$$648;
        var v11175 = parentObj$$648;
        var v11474 = parentObj$$648;
        var v11640 = parentObj$$648;
        var v11678 = parentObj$$648.memory;
        v1035.totalLinesPassed = v5703.currentX = v8733.queuedScanLines = v10476.lastUnrenderedLine = v11175.STATTracker = v11474.LCDTicks = v11640.actualScanLine = v11678[65348] = 0;
        var v1038 = parentObj$$648.LCDisOn;
        if(v1038) {
          parentObj$$648.modeSTAT = 2;
          JAMScript.call(parentObj$$648.matchLYC, parentObj$$648, []);
          var v1036 = parentObj$$648;
          v1036.LCDCONTROL = parentObj$$648.LINECONTROL
        }else {
          parentObj$$648.modeSTAT = 0;
          var v1037 = parentObj$$648;
          v1037.LCDCONTROL = parentObj$$648.DISPLAYOFFCONTROL;
          JAMScript.call(parentObj$$648.DisplayShowOff, parentObj$$648, [])
        }
        var v5704 = parentObj$$648;
        var v8734 = parentObj$$648.interruptsRequested;
        v5704.interruptsRequested = v8734 & 253
      }
      var v1040;
      var v8735 = data$$116 & 64;
      var v5705 = v8735 == 64;
      if(v5705) {
        v1040 = 1024
      }else {
        v1040 = 0
      }
      parentObj$$648.gfxWindowCHRBankPosition = v1040;
      var v1041 = data$$116 & 32;
      parentObj$$648.gfxWindowDisplay = v1041 == 32;
      var v1042;
      var v8736 = data$$116 & 16;
      var v5706 = v8736 == 16;
      if(v5706) {
        v1042 = 0
      }else {
        v1042 = 128
      }
      parentObj$$648.gfxBackgroundBankOffset = v1042;
      var v1043;
      var v8737 = data$$116 & 8;
      var v5707 = v8737 == 8;
      if(v5707) {
        v1043 = 1024
      }else {
        v1043 = 0
      }
      parentObj$$648.gfxBackgroundCHRBankPosition = v1043;
      var v1044 = data$$116 & 4;
      parentObj$$648.gfxSpriteNormalHeight = v1044 == 0;
      var v1045 = data$$116 & 2;
      parentObj$$648.gfxSpriteShow = v1045 == 2;
      var v1046 = data$$116 & 1;
      parentObj$$648.BGPriorityEnabled = v1046 == 1;
      JAMScript.call(parentObj$$648.priorityFlaggingPathRebuild, parentObj$$648, []);
      var v1047 = parentObj$$648.memory;
      v1047[65344] = data$$116
    }
    return
  }
  function v856(parentObj$$647, address$$141, data$$115) {
    var v5708 = data$$115 & 1;
    var v1054 = v5708 == 1;
    if(v1054) {
      var v1049 = parentObj$$647.memory;
      v1049[65282] = data$$115 & 127;
      var v1050;
      var v8738 = data$$115 & 2;
      var v5709 = v8738 == 0;
      if(v5709) {
        v1050 = 4096
      }else {
        v1050 = 128
      }
      parentObj$$647.serialTimer = v1050;
      var v1051 = parentObj$$647;
      var v5710;
      var v10477 = data$$115 & 2;
      var v8739 = v10477 == 0;
      if(v8739) {
        v5710 = 512
      }else {
        v5710 = 16
      }
      v1051.serialShiftTimer = parentObj$$647.serialShiftTimerAllocated = v5710
    }else {
      var v1052 = parentObj$$647.memory;
      v1052[65282] = data$$115;
      var v1053 = parentObj$$647;
      var v5711 = parentObj$$647;
      v1053.serialShiftTimer = v5711.serialShiftTimerAllocated = parentObj$$647.serialTimer = 0
    }
    return
  }
  var v1089 = this.cGBC;
  if(v1089) {
    var v1055 = this.memoryHighWriter;
    var v5712 = this.memoryWriter;
    v1055[2] = v5712[65282] = v856;
    var v1056 = this.memoryHighWriter;
    var v5713 = this.memoryWriter;
    v1056[64] = v5713[65344] = v857;
    var v1057 = this.memoryHighWriter;
    var v5714 = this.memoryWriter;
    v1057[65] = v5714[65345] = v858;
    var v1058 = this.memoryHighWriter;
    var v5715 = this.memoryWriter;
    v1058[70] = v5715[65350] = v859;
    var v1059 = this.memoryHighWriter;
    var v5716 = this.memoryWriter;
    v1059[77] = v5716[65357] = v860;
    var v1060 = this.memoryHighWriter;
    var v5717 = this.memoryWriter;
    v1060[79] = v5717[65359] = v861;
    var v1061 = this.memoryHighWriter;
    var v5718 = this.memoryWriter;
    v1061[81] = v5718[65361] = v862;
    var v1062 = this.memoryHighWriter;
    var v5719 = this.memoryWriter;
    v1062[82] = v5719[65362] = v863;
    var v1063 = this.memoryHighWriter;
    var v5720 = this.memoryWriter;
    v1063[83] = v5720[65363] = v864;
    var v1064 = this.memoryHighWriter;
    var v5721 = this.memoryWriter;
    v1064[84] = v5721[65364] = v865;
    var v1065 = this.memoryHighWriter;
    var v5722 = this.memoryWriter;
    v1065[85] = v5722[65365] = v866;
    var v1066 = this.memoryHighWriter;
    var v5723 = this.memoryWriter;
    v1066[104] = v5723[65384] = v867;
    var v1067 = this.memoryHighWriter;
    var v5724 = this.memoryWriter;
    v1067[105] = v5724[65385] = v868;
    var v1068 = this.memoryHighWriter;
    var v5725 = this.memoryWriter;
    v1068[106] = v5725[65386] = v869;
    var v1069 = this.memoryHighWriter;
    var v5726 = this.memoryWriter;
    v1069[107] = v5726[65387] = v870;
    var v1070 = this.memoryHighWriter;
    var v5727 = this.memoryWriter;
    v1070[112] = v5727[65392] = v871;
    var v1071 = this.memoryHighWriter;
    var v5728 = this.memoryWriter;
    v1071[116] = v5728[65396] = v872
  }else {
    var v1072 = this.memoryHighWriter;
    var v5729 = this.memoryWriter;
    v1072[2] = v5729[65282] = v873;
    var v1073 = this.memoryHighWriter;
    var v5730 = this.memoryWriter;
    v1073[64] = v5730[65344] = v874;
    var v1074 = this.memoryHighWriter;
    var v5731 = this.memoryWriter;
    v1074[65] = v5731[65345] = v875;
    var v1075 = this.memoryHighWriter;
    var v5732 = this.memoryWriter;
    v1075[70] = v5732[65350] = v876;
    var v1076 = this.memoryHighWriter;
    var v5733 = this.memoryWriter;
    v1076[71] = v5733[65351] = v877;
    var v1077 = this.memoryHighWriter;
    var v5734 = this.memoryWriter;
    v1077[72] = v5734[65352] = v878;
    var v1078 = this.memoryHighWriter;
    var v5735 = this.memoryWriter;
    v1078[73] = v5735[65353] = v879;
    var v1079 = this.memoryHighWriter;
    var v5736 = this.memoryWriter;
    v1079[77] = v5736[65357] = v880;
    var v1080 = this.memoryHighWriter;
    var v5737 = this.memoryWriter;
    v1080[79] = v5737[65359] = this.cartIgnoreWrite;
    var v1081 = this.memoryHighWriter;
    var v5738 = this.memoryWriter;
    v1081[85] = v5738[65365] = this.cartIgnoreWrite;
    var v1082 = this.memoryHighWriter;
    var v5739 = this.memoryWriter;
    v1082[104] = v5739[65384] = this.cartIgnoreWrite;
    var v1083 = this.memoryHighWriter;
    var v5740 = this.memoryWriter;
    v1083[105] = v5740[65385] = this.cartIgnoreWrite;
    var v1084 = this.memoryHighWriter;
    var v5741 = this.memoryWriter;
    v1084[106] = v5741[65386] = this.cartIgnoreWrite;
    var v1085 = this.memoryHighWriter;
    var v5742 = this.memoryWriter;
    v1085[107] = v5742[65387] = this.cartIgnoreWrite;
    var v1086 = this.memoryHighWriter;
    var v5743 = this.memoryWriter;
    v1086[108] = v5743[65388] = this.cartIgnoreWrite;
    var v1087 = this.memoryHighWriter;
    var v5744 = this.memoryWriter;
    v1087[112] = v5744[65392] = this.cartIgnoreWrite;
    var v1088 = this.memoryHighWriter;
    var v5745 = this.memoryWriter;
    v1088[116] = v5745[65396] = this.cartIgnoreWrite
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
    var v1090 = parentObj$$645.memory;
    v1090[65397] = data$$113;
    return
  }
  function v852(parentObj$$644, address$$138, data$$112) {
    var v1091 = parentObj$$644.memory;
    v1091[65395] = data$$112;
    return
  }
  function v851(parentObj$$643, address$$137, data$$111) {
    var v1092 = parentObj$$643.memory;
    v1092[65394] = data$$111;
    return
  }
  function v850(parentObj$$642, address$$136, data$$110) {
    var v8740 = parentObj$$642.memory;
    var v5746 = v8740[65355];
    var v1094 = v5746 != data$$110;
    if(v1094) {
      JAMScript.call(parentObj$$642.midScanLineJIT, parentObj$$642, []);
      var v1093 = parentObj$$642.memory;
      v1093[65355] = data$$110;
      parentObj$$642.windowX = data$$110 - 7
    }
    return
  }
  function v849(parentObj$$641, address$$135, data$$109) {
    var v5747 = parentObj$$641.windowY;
    var v1095 = v5747 != data$$109;
    if(v1095) {
      JAMScript.call(parentObj$$641.midScanLineJIT, parentObj$$641, []);
      parentObj$$641.windowY = data$$109
    }
    return
  }
  function v848(parentObj$$640, address$$134, data$$108) {
    var v8741 = parentObj$$640.memory;
    var v5748 = v8741[65349];
    var v1098 = v5748 != data$$108;
    if(v1098) {
      var v1096 = parentObj$$640.memory;
      v1096[65349] = data$$108;
      var v1097 = parentObj$$640.LCDisOn;
      if(v1097) {
        JAMScript.call(parentObj$$640.matchLYC, parentObj$$640, [])
      }
    }
    return
  }
  function v847(parentObj$$639, address$$133, data$$107) {
    var v1100 = parentObj$$639.LCDisOn;
    if(v1100) {
      parentObj$$639.modeSTAT = 2;
      parentObj$$639.midScanlineOffset = -1;
      var v1099 = parentObj$$639;
      var v5749 = parentObj$$639;
      var v8742 = parentObj$$639;
      var v10478 = parentObj$$639;
      var v11176 = parentObj$$639;
      var v11475 = parentObj$$639;
      var v11641 = parentObj$$639;
      var v11679 = parentObj$$639.memory;
      v1099.totalLinesPassed = v5749.currentX = v8742.queuedScanLines = v10478.lastUnrenderedLine = v11176.LCDTicks = v11475.STATTracker = v11641.actualScanLine = v11679[65348] = 0
    }
    return
  }
  function v846(parentObj$$638, address$$132, data$$106) {
    var v5750 = parentObj$$638.backgroundX;
    var v1101 = v5750 != data$$106;
    if(v1101) {
      JAMScript.call(parentObj$$638.midScanLineJIT, parentObj$$638, []);
      parentObj$$638.backgroundX = data$$106
    }
    return
  }
  function v845(parentObj$$637, address$$131, data$$105) {
    var v5751 = parentObj$$637.backgroundY;
    var v1102 = v5751 != data$$105;
    if(v1102) {
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
    var v8743 = parentObj$$620.soundMasterEnabled;
    var v5752 = !v8743;
    if(v5752) {
      v5752 = data$$88 > 127
    }
    var v1108 = v5752;
    if(v1108) {
      var v1103 = parentObj$$620.memory;
      v1103[65318] = 128;
      parentObj$$620.soundMasterEnabled = true;
      JAMScript.call(parentObj$$620.initializeAudioStartState, parentObj$$620, [])
    }else {
      var v5753 = parentObj$$620.soundMasterEnabled;
      if(v5753) {
        v5753 = data$$88 < 128
      }
      var v1107 = v5753;
      if(v1107) {
        var v1104 = parentObj$$620.memory;
        v1104[65318] = 0;
        parentObj$$620.soundMasterEnabled = false;
        var index$$64 = 65296;
        var v1106 = index$$64 < 65318;
        for(;v1106;) {
          var v1105 = parentObj$$620.memoryWriter;
          JAMScript.call(v1105[index$$64], v1105, [parentObj$$620, index$$64, 0]);
          index$$64 = index$$64 + 1;
          v1106 = index$$64 < 65318
        }
      }
    }
    return
  }
  function v827(parentObj$$619, address$$113, data$$87) {
    var v5754 = parentObj$$619.soundMasterEnabled;
    if(v5754) {
      var v10479 = parentObj$$619.memory;
      var v8744 = v10479[65317];
      v5754 = v8744 != data$$87
    }
    var v1117 = v5754;
    if(v1117) {
      JAMScript.call(parentObj$$619.audioJIT, parentObj$$619, []);
      var v1109 = parentObj$$619.memory;
      v1109[65317] = data$$87;
      var v1110 = data$$87 & 1;
      parentObj$$619.rightChannel1 = v1110 == 1;
      var v1111 = data$$87 & 2;
      parentObj$$619.rightChannel2 = v1111 == 2;
      var v1112 = data$$87 & 4;
      parentObj$$619.rightChannel3 = v1112 == 4;
      var v1113 = data$$87 & 8;
      parentObj$$619.rightChannel4 = v1113 == 8;
      var v1114 = data$$87 & 16;
      parentObj$$619.leftChannel1 = v1114 == 16;
      var v1115 = data$$87 & 32;
      parentObj$$619.leftChannel2 = v1115 == 32;
      var v1116 = data$$87 & 64;
      parentObj$$619.leftChannel3 = v1116 == 64;
      parentObj$$619.leftChannel4 = data$$87 > 127;
      JAMScript.call(parentObj$$619.channel1OutputLevelCache, parentObj$$619, []);
      JAMScript.call(parentObj$$619.channel2OutputLevelCache, parentObj$$619, []);
      JAMScript.call(parentObj$$619.channel3OutputLevelCache, parentObj$$619, []);
      JAMScript.call(parentObj$$619.channel4OutputLevelCache, parentObj$$619, [])
    }
    return
  }
  function v826(parentObj$$618, address$$112, data$$86) {
    var v5755 = parentObj$$618.soundMasterEnabled;
    if(v5755) {
      var v10480 = parentObj$$618.memory;
      var v8745 = v10480[65316];
      v5755 = v8745 != data$$86
    }
    var v1121 = v5755;
    if(v1121) {
      JAMScript.call(parentObj$$618.audioJIT, parentObj$$618, []);
      var v1118 = parentObj$$618.memory;
      v1118[65316] = data$$86;
      var v5756 = data$$86 >> 4;
      var v1119 = v5756 & 7;
      parentObj$$618.VinLeftChannelMasterVolume = v1119 + 1;
      var v1120 = data$$86 & 7;
      parentObj$$618.VinRightChannelMasterVolume = v1120 + 1;
      JAMScript.call(parentObj$$618.mixerOutputLevelCache, parentObj$$618, [])
    }
    return
  }
  function v825(parentObj$$617, address$$111, data$$85) {
    var v1131 = parentObj$$617.soundMasterEnabled;
    if(v1131) {
      JAMScript.call(parentObj$$617.audioJIT, parentObj$$617, []);
      var v1122 = parentObj$$617.memory;
      v1122[65315] = data$$85;
      var v1123 = data$$85 & 64;
      parentObj$$617.channel4consecutive = v1123 == 0;
      var v1130 = data$$85 > 127;
      if(v1130) {
        var v1124 = parentObj$$617.memory;
        var nr42 = v1124[65313];
        parentObj$$617.channel4envelopeVolume = nr42 >> 4;
        var v1125 = parentObj$$617;
        var v5757 = parentObj$$617.channel4envelopeVolume;
        var v5758 = parentObj$$617.channel4VolumeShifter;
        v1125.channel4currentVolume = v5757 << v5758;
        var v1126 = nr42 & 7;
        parentObj$$617.channel4envelopeSweepsLast = v1126 - 1;
        var v5759 = parentObj$$617.channel4totalLength;
        var v1127 = v5759 == 0;
        if(v1127) {
          parentObj$$617.channel4totalLength = 64
        }
        var v5760 = data$$85 & 64;
        var v1129 = v5760 == 64;
        if(v1129) {
          var v1128 = parentObj$$617.memory;
          var v8746 = v1128[65318];
          v1128[65318] = v8746 | 8
        }
      }
      JAMScript.call(parentObj$$617.channel4EnableCheck, parentObj$$617, [])
    }
    return
  }
  function v824(parentObj$$616, address$$110, data$$84) {
    var v1139 = parentObj$$616.soundMasterEnabled;
    if(v1139) {
      JAMScript.call(parentObj$$616.audioJIT, parentObj$$616, []);
      var v1132 = parentObj$$616;
      var v10481 = data$$84 & 7;
      var v8747 = v10481 << 4;
      var v5761 = Math.max(v8747, 8);
      var v5762 = data$$84 >> 4;
      v1132.channel4FrequencyPeriod = v5761 << v5762;
      var bitWidth = data$$84 & 8;
      var v8748 = bitWidth == 8;
      if(v8748) {
        var v10482 = parentObj$$616.channel4BitRange;
        v8748 = v10482 == 32767
      }
      var v5763 = v8748;
      var v8750 = !v5763;
      if(v8750) {
        var v8749 = bitWidth == 0;
        if(v8749) {
          var v10483 = parentObj$$616.channel4BitRange;
          v8749 = v10483 == 127
        }
        v5763 = v8749
      }
      var v1137 = v5763;
      if(v1137) {
        parentObj$$616.channel4lastSampleLookup = 0;
        var v1133;
        var v5764 = bitWidth == 8;
        if(v5764) {
          v1133 = 127
        }else {
          v1133 = 32767
        }
        parentObj$$616.channel4BitRange = v1133;
        var v1134;
        var v5765 = bitWidth == 8;
        if(v5765) {
          v1134 = 7
        }else {
          v1134 = 15
        }
        parentObj$$616.channel4VolumeShifter = v1134;
        var v1135 = parentObj$$616;
        var v5766 = parentObj$$616.channel4envelopeVolume;
        var v5767 = parentObj$$616.channel4VolumeShifter;
        v1135.channel4currentVolume = v5766 << v5767;
        var v1136 = parentObj$$616;
        var v5768;
        var v8751 = bitWidth == 8;
        if(v8751) {
          v5768 = parentObj$$616.LSFR7Table
        }else {
          v5768 = parentObj$$616.LSFR15Table
        }
        v1136.noiseSampleTable = v5768
      }
      var v1138 = parentObj$$616.memory;
      v1138[65314] = data$$84;
      JAMScript.call(parentObj$$616.channel4UpdateCache, parentObj$$616, [])
    }
    return
  }
  function v823(parentObj$$615, address$$109, data$$83) {
    var v1150 = parentObj$$615.soundMasterEnabled;
    if(v1150) {
      JAMScript.call(parentObj$$615.audioJIT, parentObj$$615, []);
      var v5769 = parentObj$$615.channel4Enabled;
      if(v5769) {
        var v8752 = parentObj$$615.channel4envelopeSweeps;
        v5769 = v8752 == 0
      }
      var v1147 = v5769;
      if(v1147) {
        var v11177 = parentObj$$615.memory;
        var v10484 = v11177[65313];
        var v8753 = v10484 ^ data$$83;
        var v5770 = v8753 & 8;
        var v1145 = v5770 == 8;
        if(v1145) {
          var v10485 = parentObj$$615.memory;
          var v8754 = v10485[65313];
          var v5771 = v8754 & 8;
          var v1141 = v5771 == 0;
          if(v1141) {
            var v10486 = parentObj$$615.memory;
            var v8755 = v10486[65313];
            var v5772 = v8755 & 7;
            var v1140 = v5772 == 7;
            if(v1140) {
              var v5773 = parentObj$$615;
              var v8756 = parentObj$$615.channel4envelopeVolume;
              v5773.channel4envelopeVolume = v8756 + 2
            }else {
              var v5774 = parentObj$$615;
              var v8757 = parentObj$$615.channel4envelopeVolume;
              v5774.channel4envelopeVolume = v8757 + 1
            }
          }
          var v1142 = parentObj$$615;
          var v8758 = parentObj$$615.channel4envelopeVolume;
          var v5775 = 16 - v8758;
          v1142.channel4envelopeVolume = v5775 & 15
        }else {
          var v10487 = parentObj$$615.memory;
          var v8759 = v10487[65313];
          var v5776 = v8759 & 15;
          var v1144 = v5776 == 8;
          if(v1144) {
            var v1143 = parentObj$$615;
            var v8760 = parentObj$$615.channel4envelopeVolume;
            var v5777 = 1 + v8760;
            v1143.channel4envelopeVolume = v5777 & 15
          }
        }
        var v1146 = parentObj$$615;
        var v5778 = parentObj$$615.channel4envelopeVolume;
        var v5779 = parentObj$$615.channel4VolumeShifter;
        v1146.channel4currentVolume = v5778 << v5779
      }
      var v1148 = data$$83 & 8;
      parentObj$$615.channel4envelopeType = v1148 == 8;
      var v1149 = parentObj$$615.memory;
      v1149[65313] = data$$83;
      JAMScript.call(parentObj$$615.channel4UpdateCache, parentObj$$615, []);
      JAMScript.call(parentObj$$615.channel4VolumeEnableCheck, parentObj$$615, [])
    }
    return
  }
  function v822(parentObj$$614, address$$108, data$$82) {
    var v5780 = parentObj$$614.soundMasterEnabled;
    var v8762 = !v5780;
    if(v8762) {
      var v8761 = parentObj$$614.cGBC;
      v5780 = !v8761
    }
    var v1154 = v5780;
    if(v1154) {
      var v1151 = parentObj$$614.soundMasterEnabled;
      if(v1151) {
        JAMScript.call(parentObj$$614.audioJIT, parentObj$$614, [])
      }
      var v1152 = data$$82 & 63;
      parentObj$$614.channel4totalLength = 64 - v1152;
      var v1153 = parentObj$$614.memory;
      v1153[65312] = data$$82 | 192;
      JAMScript.call(parentObj$$614.channel4EnableCheck, parentObj$$614, [])
    }
    return
  }
  function v821(parentObj$$613, address$$107, data$$81) {
    var v1163 = parentObj$$613.soundMasterEnabled;
    if(v1163) {
      JAMScript.call(parentObj$$613.audioJIT, parentObj$$613, []);
      var v1158 = data$$81 > 127;
      if(v1158) {
        var v5781 = parentObj$$613.channel3totalLength;
        var v1155 = v5781 == 0;
        if(v1155) {
          parentObj$$613.channel3totalLength = 256
        }
        parentObj$$613.channel3lastSampleLookup = 0;
        var v5782 = data$$81 & 64;
        var v1157 = v5782 == 64;
        if(v1157) {
          var v1156 = parentObj$$613.memory;
          var v8763 = v1156[65318];
          v1156[65318] = v8763 | 4
        }
      }
      var v1159 = data$$81 & 64;
      parentObj$$613.channel3consecutive = v1159 == 0;
      var v1160 = parentObj$$613;
      var v8764 = data$$81 & 7;
      var v5783 = v8764 << 8;
      var v8765 = parentObj$$613.channel3frequency;
      var v5784 = v8765 & 255;
      v1160.channel3frequency = v5783 | v5784;
      var v1161 = parentObj$$613;
      var v8766 = parentObj$$613.channel3frequency;
      var v5785 = 2048 - v8766;
      v1161.channel3FrequencyPeriod = v5785 << 1;
      var v1162 = parentObj$$613.memory;
      v1162[65310] = data$$81 & 64;
      JAMScript.call(parentObj$$613.channel3EnableCheck, parentObj$$613, [])
    }
    return
  }
  function v820(parentObj$$612, address$$106, data$$80) {
    var v1167 = parentObj$$612.soundMasterEnabled;
    if(v1167) {
      JAMScript.call(parentObj$$612.audioJIT, parentObj$$612, []);
      var v1164 = parentObj$$612;
      var v8767 = parentObj$$612.channel3frequency;
      var v5786 = v8767 & 1792;
      v1164.channel3frequency = v5786 | data$$80;
      var v1165 = parentObj$$612;
      var v8768 = parentObj$$612.channel3frequency;
      var v5787 = 2048 - v8768;
      v1165.channel3FrequencyPeriod = v5787 << 1;
      var v1166 = parentObj$$612.memory;
      v1166[65309] = data$$80
    }
    return
  }
  function v819(parentObj$$611, address$$105, data$$79) {
    var v1170 = parentObj$$611.soundMasterEnabled;
    if(v1170) {
      JAMScript.call(parentObj$$611.audioJIT, parentObj$$611, []);
      data$$79 = data$$79 & 96;
      var v1168 = parentObj$$611.memory;
      v1168[65308] = data$$79;
      var v1169;
      var v5789 = data$$79 == 0;
      if(v5789) {
        v1169 = 4
      }else {
        var v5788 = data$$79 >> 5;
        v1169 = v5788 - 1
      }
      parentObj$$611.channel3patternType = v1169
    }
    return
  }
  function v818(parentObj$$610, address$$104, data$$78) {
    var v5790 = parentObj$$610.soundMasterEnabled;
    var v8770 = !v5790;
    if(v8770) {
      var v8769 = parentObj$$610.cGBC;
      v5790 = !v8769
    }
    var v1173 = v5790;
    if(v1173) {
      var v1171 = parentObj$$610.soundMasterEnabled;
      if(v1171) {
        JAMScript.call(parentObj$$610.audioJIT, parentObj$$610, [])
      }
      parentObj$$610.channel3totalLength = 256 - data$$78;
      var v1172 = parentObj$$610.memory;
      v1172[65307] = data$$78;
      JAMScript.call(parentObj$$610.channel3EnableCheck, parentObj$$610, [])
    }
    return
  }
  function v817(parentObj$$609, address$$103, data$$77) {
    var v1178 = parentObj$$609.soundMasterEnabled;
    if(v1178) {
      JAMScript.call(parentObj$$609.audioJIT, parentObj$$609, []);
      var v8771 = parentObj$$609.channel3canPlay;
      var v5791 = !v8771;
      if(v5791) {
        v5791 = data$$77 >= 128
      }
      var v1174 = v5791;
      if(v1174) {
        parentObj$$609.channel3lastSampleLookup = 0;
        JAMScript.call(parentObj$$609.channel3UpdateCache, parentObj$$609, [])
      }
      parentObj$$609.channel3canPlay = data$$77 > 127;
      var v5792 = parentObj$$609.channel3canPlay;
      if(v5792) {
        var v11178 = parentObj$$609.memory;
        var v10488 = v11178[65306];
        var v8772 = v10488 > 127;
        if(v8772) {
          var v10489 = parentObj$$609.channel3consecutive;
          v8772 = !v10489
        }
        v5792 = v8772
      }
      var v1176 = v5792;
      if(v1176) {
        var v1175 = parentObj$$609.memory;
        var v8773 = v1175[65318];
        v1175[65318] = v8773 | 4
      }
      var v1177 = parentObj$$609.memory;
      v1177[65306] = data$$77 & 128
    }
    return
  }
  function v816(parentObj$$608, address$$102, data$$76) {
    var v1189 = parentObj$$608.soundMasterEnabled;
    if(v1189) {
      JAMScript.call(parentObj$$608.audioJIT, parentObj$$608, []);
      var v1184 = data$$76 > 127;
      if(v1184) {
        var v1179 = parentObj$$608.memory;
        var nr22 = v1179[65303];
        parentObj$$608.channel2envelopeVolume = nr22 >> 4;
        JAMScript.call(parentObj$$608.channel2OutputLevelCache, parentObj$$608, []);
        var v1180 = nr22 & 7;
        parentObj$$608.channel2envelopeSweepsLast = v1180 - 1;
        var v5793 = parentObj$$608.channel2totalLength;
        var v1181 = v5793 == 0;
        if(v1181) {
          parentObj$$608.channel2totalLength = 64
        }
        var v5794 = data$$76 & 64;
        var v1183 = v5794 == 64;
        if(v1183) {
          var v1182 = parentObj$$608.memory;
          var v8774 = v1182[65318];
          v1182[65318] = v8774 | 2
        }
      }
      var v1185 = data$$76 & 64;
      parentObj$$608.channel2consecutive = v1185 == 0;
      var v1186 = parentObj$$608;
      var v8775 = data$$76 & 7;
      var v5795 = v8775 << 8;
      var v8776 = parentObj$$608.channel2frequency;
      var v5796 = v8776 & 255;
      v1186.channel2frequency = v5795 | v5796;
      var v1187 = parentObj$$608;
      var v8777 = parentObj$$608.channel2frequency;
      var v5797 = 2048 - v8777;
      v1187.channel2FrequencyTracker = v5797 << 2;
      var v1188 = parentObj$$608.memory;
      v1188[65305] = data$$76 & 64;
      JAMScript.call(parentObj$$608.channel2EnableCheck, parentObj$$608, [])
    }
    return
  }
  function v815(parentObj$$607, address$$101, data$$75) {
    var v1193 = parentObj$$607.soundMasterEnabled;
    if(v1193) {
      JAMScript.call(parentObj$$607.audioJIT, parentObj$$607, []);
      var v1190 = parentObj$$607;
      var v8778 = parentObj$$607.channel2frequency;
      var v5798 = v8778 & 1792;
      v1190.channel2frequency = v5798 | data$$75;
      var v1191 = parentObj$$607;
      var v8779 = parentObj$$607.channel2frequency;
      var v5799 = 2048 - v8779;
      v1191.channel2FrequencyTracker = v5799 << 2;
      var v1192 = parentObj$$607.memory;
      v1192[65304] = data$$75
    }
    return
  }
  function v814(parentObj$$606, address$$100, data$$74) {
    var v1203 = parentObj$$606.soundMasterEnabled;
    if(v1203) {
      JAMScript.call(parentObj$$606.audioJIT, parentObj$$606, []);
      var v5800 = parentObj$$606.channel2Enabled;
      if(v5800) {
        var v8780 = parentObj$$606.channel2envelopeSweeps;
        v5800 = v8780 == 0
      }
      var v1200 = v5800;
      if(v1200) {
        var v11179 = parentObj$$606.memory;
        var v10490 = v11179[65303];
        var v8781 = v10490 ^ data$$74;
        var v5801 = v8781 & 8;
        var v1199 = v5801 == 8;
        if(v1199) {
          var v10491 = parentObj$$606.memory;
          var v8782 = v10491[65303];
          var v5802 = v8782 & 8;
          var v1195 = v5802 == 0;
          if(v1195) {
            var v10492 = parentObj$$606.memory;
            var v8783 = v10492[65303];
            var v5803 = v8783 & 7;
            var v1194 = v5803 == 7;
            if(v1194) {
              var v5804 = parentObj$$606;
              var v8784 = parentObj$$606.channel2envelopeVolume;
              v5804.channel2envelopeVolume = v8784 + 2
            }else {
              var v5805 = parentObj$$606;
              var v8785 = parentObj$$606.channel2envelopeVolume;
              v5805.channel2envelopeVolume = v8785 + 1
            }
          }
          var v1196 = parentObj$$606;
          var v8786 = parentObj$$606.channel2envelopeVolume;
          var v5806 = 16 - v8786;
          v1196.channel2envelopeVolume = v5806 & 15
        }else {
          var v10493 = parentObj$$606.memory;
          var v8787 = v10493[65303];
          var v5807 = v8787 & 15;
          var v1198 = v5807 == 8;
          if(v1198) {
            var v1197 = parentObj$$606;
            var v8788 = parentObj$$606.channel2envelopeVolume;
            var v5808 = 1 + v8788;
            v1197.channel2envelopeVolume = v5808 & 15
          }
        }
        JAMScript.call(parentObj$$606.channel2OutputLevelCache, parentObj$$606, [])
      }
      var v1201 = data$$74 & 8;
      parentObj$$606.channel2envelopeType = v1201 == 8;
      var v1202 = parentObj$$606.memory;
      v1202[65303] = data$$74;
      JAMScript.call(parentObj$$606.channel2VolumeEnableCheck, parentObj$$606, [])
    }
    return
  }
  function v813(parentObj$$605, address$$99, data$$73) {
    var v5809 = parentObj$$605.soundMasterEnabled;
    var v8790 = !v5809;
    if(v8790) {
      var v8789 = parentObj$$605.cGBC;
      v5809 = !v8789
    }
    var v1208 = v5809;
    if(v1208) {
      var v1204 = parentObj$$605.soundMasterEnabled;
      if(v1204) {
        JAMScript.call(parentObj$$605.audioJIT, parentObj$$605, [])
      }else {
        data$$73 = data$$73 & 63
      }
      var v1205 = parentObj$$605;
      var v5810 = parentObj$$605.dutyLookup;
      var v5811 = data$$73 >> 6;
      v1205.channel2CachedDuty = v5810[v5811];
      var v1206 = data$$73 & 63;
      parentObj$$605.channel2totalLength = 64 - v1206;
      var v1207 = parentObj$$605.memory;
      v1207[65302] = data$$73 & 192;
      JAMScript.call(parentObj$$605.channel2EnableCheck, parentObj$$605, [])
    }
    return
  }
  function v812(parentObj$$604, address$$98, data$$72) {
    var v1225 = parentObj$$604.soundMasterEnabled;
    if(v1225) {
      JAMScript.call(parentObj$$604.audioJIT, parentObj$$604, []);
      var v1209 = data$$72 & 64;
      parentObj$$604.channel1consecutive = v1209 == 0;
      var v1210 = parentObj$$604;
      var v8791 = data$$72 & 7;
      var v5812 = v8791 << 8;
      var v8792 = parentObj$$604.channel1frequency;
      var v5813 = v8792 & 255;
      v1210.channel1frequency = v5812 | v5813;
      var v1211 = parentObj$$604;
      var v8793 = parentObj$$604.channel1frequency;
      var v5814 = 2048 - v8793;
      v1211.channel1FrequencyTracker = v5814 << 2;
      var v1223 = data$$72 > 127;
      if(v1223) {
        var v1212 = parentObj$$604;
        v1212.channel1timeSweep = parentObj$$604.channel1lastTimeSweep;
        var v1213 = parentObj$$604;
        v1213.channel1numSweep = parentObj$$604.channel1frequencySweepDivider;
        var v1214 = parentObj$$604.memory;
        var nr12 = v1214[65298];
        parentObj$$604.channel1envelopeVolume = nr12 >> 4;
        JAMScript.call(parentObj$$604.channel1OutputLevelCache, parentObj$$604, []);
        var v1215 = nr12 & 7;
        parentObj$$604.channel1envelopeSweepsLast = v1215 - 1;
        var v5815 = parentObj$$604.channel1totalLength;
        var v1216 = v5815 == 0;
        if(v1216) {
          parentObj$$604.channel1totalLength = 64
        }
        var v8794 = parentObj$$604.channel1lastTimeSweep;
        var v5816 = v8794 > 0;
        var v8796 = !v5816;
        if(v8796) {
          var v8795 = parentObj$$604.channel1frequencySweepDivider;
          v5816 = v8795 > 0
        }
        var v1219 = v5816;
        if(v1219) {
          var v1217 = parentObj$$604.memory;
          var v8797 = v1217[65318];
          v1217[65318] = v8797 | 1
        }else {
          var v1218 = parentObj$$604.memory;
          var v8798 = v1218[65318];
          v1218[65318] = v8798 & 254
        }
        var v5817 = data$$72 & 64;
        var v1221 = v5817 == 64;
        if(v1221) {
          var v1220 = parentObj$$604.memory;
          var v8799 = v1220[65318];
          v1220[65318] = v8799 | 1
        }
        var v1222 = parentObj$$604;
        v1222.channel1ShadowFrequency = parentObj$$604.channel1frequency;
        parentObj$$604.channel1SweepFault = false;
        JAMScript.call(parentObj$$604.runAudioSweep, parentObj$$604, [])
      }
      JAMScript.call(parentObj$$604.channel1EnableCheck, parentObj$$604, []);
      var v1224 = parentObj$$604.memory;
      v1224[65300] = data$$72 & 64
    }
    return
  }
  function v811(parentObj$$603, address$$97, data$$71) {
    var v1229 = parentObj$$603.soundMasterEnabled;
    if(v1229) {
      JAMScript.call(parentObj$$603.audioJIT, parentObj$$603, []);
      var v1226 = parentObj$$603;
      var v8800 = parentObj$$603.channel1frequency;
      var v5818 = v8800 & 1792;
      v1226.channel1frequency = v5818 | data$$71;
      var v1227 = parentObj$$603;
      var v8801 = parentObj$$603.channel1frequency;
      var v5819 = 2048 - v8801;
      v1227.channel1FrequencyTracker = v5819 << 2;
      var v1228 = parentObj$$603.memory;
      v1228[65299] = data$$71
    }
    return
  }
  function v810(parentObj$$602, address$$96, data$$70) {
    var v1239 = parentObj$$602.soundMasterEnabled;
    if(v1239) {
      JAMScript.call(parentObj$$602.audioJIT, parentObj$$602, []);
      var v5820 = parentObj$$602.channel1Enabled;
      if(v5820) {
        var v8802 = parentObj$$602.channel1envelopeSweeps;
        v5820 = v8802 == 0
      }
      var v1236 = v5820;
      if(v1236) {
        var v11180 = parentObj$$602.memory;
        var v10494 = v11180[65298];
        var v8803 = v10494 ^ data$$70;
        var v5821 = v8803 & 8;
        var v1235 = v5821 == 8;
        if(v1235) {
          var v10495 = parentObj$$602.memory;
          var v8804 = v10495[65298];
          var v5822 = v8804 & 8;
          var v1231 = v5822 == 0;
          if(v1231) {
            var v10496 = parentObj$$602.memory;
            var v8805 = v10496[65298];
            var v5823 = v8805 & 7;
            var v1230 = v5823 == 7;
            if(v1230) {
              var v5824 = parentObj$$602;
              var v8806 = parentObj$$602.channel1envelopeVolume;
              v5824.channel1envelopeVolume = v8806 + 2
            }else {
              var v5825 = parentObj$$602;
              var v8807 = parentObj$$602.channel1envelopeVolume;
              v5825.channel1envelopeVolume = v8807 + 1
            }
          }
          var v1232 = parentObj$$602;
          var v8808 = parentObj$$602.channel1envelopeVolume;
          var v5826 = 16 - v8808;
          v1232.channel1envelopeVolume = v5826 & 15
        }else {
          var v10497 = parentObj$$602.memory;
          var v8809 = v10497[65298];
          var v5827 = v8809 & 15;
          var v1234 = v5827 == 8;
          if(v1234) {
            var v1233 = parentObj$$602;
            var v8810 = parentObj$$602.channel1envelopeVolume;
            var v5828 = 1 + v8810;
            v1233.channel1envelopeVolume = v5828 & 15
          }
        }
        JAMScript.call(parentObj$$602.channel1OutputLevelCache, parentObj$$602, [])
      }
      var v1237 = data$$70 & 8;
      parentObj$$602.channel1envelopeType = v1237 == 8;
      var v1238 = parentObj$$602.memory;
      v1238[65298] = data$$70;
      JAMScript.call(parentObj$$602.channel1VolumeEnableCheck, parentObj$$602, [])
    }
    return
  }
  function v809(parentObj$$601, address$$95, data$$69) {
    var v5829 = parentObj$$601.soundMasterEnabled;
    var v8812 = !v5829;
    if(v8812) {
      var v8811 = parentObj$$601.cGBC;
      v5829 = !v8811
    }
    var v1244 = v5829;
    if(v1244) {
      var v1240 = parentObj$$601.soundMasterEnabled;
      if(v1240) {
        JAMScript.call(parentObj$$601.audioJIT, parentObj$$601, [])
      }else {
        data$$69 = data$$69 & 63
      }
      var v1241 = parentObj$$601;
      var v5830 = parentObj$$601.dutyLookup;
      var v5831 = data$$69 >> 6;
      v1241.channel1CachedDuty = v5830[v5831];
      var v1242 = data$$69 & 63;
      parentObj$$601.channel1totalLength = 64 - v1242;
      var v1243 = parentObj$$601.memory;
      v1243[65297] = data$$69 & 192;
      JAMScript.call(parentObj$$601.channel1EnableCheck, parentObj$$601, [])
    }
    return
  }
  function v808(parentObj$$600, address$$94, data$$68) {
    var v1250 = parentObj$$600.soundMasterEnabled;
    if(v1250) {
      JAMScript.call(parentObj$$600.audioJIT, parentObj$$600, []);
      var v5832 = parentObj$$600.channel1decreaseSweep;
      if(v5832) {
        var v8813 = data$$68 & 8;
        v5832 = v8813 == 0
      }
      var v1246 = v5832;
      if(v1246) {
        var v5833 = parentObj$$600.channel1numSweep;
        var v5834 = parentObj$$600.channel1frequencySweepDivider;
        var v1245 = v5833 != v5834;
        if(v1245) {
          parentObj$$600.channel1SweepFault = true
        }
      }
      var v1247 = data$$68 & 112;
      parentObj$$600.channel1lastTimeSweep = v1247 >> 4;
      parentObj$$600.channel1frequencySweepDivider = data$$68 & 7;
      var v1248 = data$$68 & 8;
      parentObj$$600.channel1decreaseSweep = v1248 == 8;
      var v1249 = parentObj$$600.memory;
      v1249[65296] = data$$68;
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
    var v1251 = parentObj$$598.memory;
    v1251[65287] = data$$66 & 7;
    var v1252 = data$$66 & 4;
    parentObj$$598.TIMAEnabled = v1252 == 4;
    var v1253 = parentObj$$598;
    var v10498;
    var v11476 = data$$66 & 3;
    var v11181 = v11476 != 0;
    if(v11181) {
      v10498 = data$$66 & 3
    }else {
      v10498 = 4
    }
    var v8814 = v10498;
    var v5835 = Math.pow(4, v8814);
    v1253.TACClocker = v5835 << 2;
    return
  }
  function v805(parentObj$$597, address$$91, data$$65) {
    var v1254 = parentObj$$597.memory;
    v1254[65286] = data$$65;
    return
  }
  function v804(parentObj$$596, address$$90, data$$64) {
    var v1255 = parentObj$$596.memory;
    v1255[65285] = data$$64;
    return
  }
  function v803(parentObj$$595, address$$89, data$$63) {
    var v5836 = parentObj$$595;
    var v8815 = parentObj$$595.DIVTicks;
    v5836.DIVTicks = v8815 & 255;
    var v1256 = parentObj$$595.memory;
    v1256[65284] = 0;
    return
  }
  function v802(parentObj$$594, address$$88, data$$62) {
    var v8816 = parentObj$$594.memory;
    var v5837 = v8816[65282];
    var v1258 = v5837 < 128;
    if(v1258) {
      var v1257 = parentObj$$594.memory;
      v1257[65281] = data$$62
    }
    return
  }
  function v801(parentObj$$593, address$$87, data$$61) {
    var v1259 = parentObj$$593.memory;
    var v5838 = data$$61 & 48;
    var v10499;
    var v11477 = data$$61 & 32;
    var v11183 = v11477 == 0;
    if(v11183) {
      var v11182 = parentObj$$593.JoyPad;
      v10499 = v11182 >> 4
    }else {
      v10499 = 15
    }
    var v8817 = v10499;
    var v10500;
    var v11478 = data$$61 & 16;
    var v11185 = v11478 == 0;
    if(v11185) {
      var v11184 = parentObj$$593.JoyPad;
      v10500 = v11184 & 15
    }else {
      v10500 = 15
    }
    var v8818 = v10500;
    var v5839 = v8817 & v8818;
    v1259[65280] = v5838 | v5839;
    return
  }
  var v1260 = this.memoryHighWriter;
  var v5840 = this.memoryWriter;
  v1260[0] = v5840[65280] = v801;
  var v1261 = this.memoryHighWriter;
  var v5841 = this.memoryWriter;
  v1261[1] = v5841[65281] = v802;
  var v1262 = this.memoryHighWriter;
  var v5842 = this.memoryWriter;
  v1262[4] = v5842[65284] = v803;
  var v1263 = this.memoryHighWriter;
  var v5843 = this.memoryWriter;
  v1263[5] = v5843[65285] = v804;
  var v1264 = this.memoryHighWriter;
  var v5844 = this.memoryWriter;
  v1264[6] = v5844[65286] = v805;
  var v1265 = this.memoryHighWriter;
  var v5845 = this.memoryWriter;
  v1265[7] = v5845[65287] = v806;
  var v1266 = this.memoryHighWriter;
  var v5846 = this.memoryWriter;
  v1266[15] = v5846[65295] = v807;
  var v1267 = this.memoryHighWriter;
  var v5847 = this.memoryWriter;
  v1267[16] = v5847[65296] = v808;
  var v1268 = this.memoryHighWriter;
  var v5848 = this.memoryWriter;
  v1268[17] = v5848[65297] = v809;
  var v1269 = this.memoryHighWriter;
  var v5849 = this.memoryWriter;
  v1269[18] = v5849[65298] = v810;
  var v1270 = this.memoryHighWriter;
  var v5850 = this.memoryWriter;
  v1270[19] = v5850[65299] = v811;
  var v1271 = this.memoryHighWriter;
  var v5851 = this.memoryWriter;
  v1271[20] = v5851[65300] = v812;
  var v1272 = this.memoryHighWriter;
  var v5852 = this.memoryWriter;
  v1272[22] = v5852[65302] = v813;
  var v1273 = this.memoryHighWriter;
  var v5853 = this.memoryWriter;
  v1273[23] = v5853[65303] = v814;
  var v1274 = this.memoryHighWriter;
  var v5854 = this.memoryWriter;
  v1274[24] = v5854[65304] = v815;
  var v1275 = this.memoryHighWriter;
  var v5855 = this.memoryWriter;
  v1275[25] = v5855[65305] = v816;
  var v1276 = this.memoryHighWriter;
  var v5856 = this.memoryWriter;
  v1276[26] = v5856[65306] = v817;
  var v1277 = this.memoryHighWriter;
  var v5857 = this.memoryWriter;
  v1277[27] = v5857[65307] = v818;
  var v1278 = this.memoryHighWriter;
  var v5858 = this.memoryWriter;
  v1278[28] = v5858[65308] = v819;
  var v1279 = this.memoryHighWriter;
  var v5859 = this.memoryWriter;
  v1279[29] = v5859[65309] = v820;
  var v1280 = this.memoryHighWriter;
  var v5860 = this.memoryWriter;
  v1280[30] = v5860[65310] = v821;
  var v1281 = this.memoryHighWriter;
  var v5861 = this.memoryWriter;
  v1281[32] = v5861[65312] = v822;
  var v1282 = this.memoryHighWriter;
  var v5862 = this.memoryWriter;
  v1282[33] = v5862[65313] = v823;
  var v1283 = this.memoryHighWriter;
  var v5863 = this.memoryWriter;
  v1283[34] = v5863[65314] = v824;
  var v1284 = this.memoryHighWriter;
  var v5864 = this.memoryWriter;
  v1284[35] = v5864[65315] = v825;
  var v1285 = this.memoryHighWriter;
  var v5865 = this.memoryWriter;
  v1285[36] = v5865[65316] = v826;
  var v1286 = this.memoryHighWriter;
  var v5866 = this.memoryWriter;
  v1286[37] = v5866[65317] = v827;
  var v1287 = this.memoryHighWriter;
  var v5867 = this.memoryWriter;
  v1287[38] = v5867[65318] = v828;
  var v1288 = this.memoryHighWriter;
  var v5868 = this.memoryWriter;
  v1288[39] = v5868[65319] = this.cartIgnoreWrite;
  var v1289 = this.memoryHighWriter;
  var v5869 = this.memoryWriter;
  v1289[40] = v5869[65320] = this.cartIgnoreWrite;
  var v1290 = this.memoryHighWriter;
  var v5870 = this.memoryWriter;
  v1290[41] = v5870[65321] = this.cartIgnoreWrite;
  var v1291 = this.memoryHighWriter;
  var v5871 = this.memoryWriter;
  v1291[42] = v5871[65322] = this.cartIgnoreWrite;
  var v1292 = this.memoryHighWriter;
  var v5872 = this.memoryWriter;
  v1292[43] = v5872[65323] = this.cartIgnoreWrite;
  var v1293 = this.memoryHighWriter;
  var v5873 = this.memoryWriter;
  v1293[44] = v5873[65324] = this.cartIgnoreWrite;
  var v1294 = this.memoryHighWriter;
  var v5874 = this.memoryWriter;
  v1294[45] = v5874[65325] = this.cartIgnoreWrite;
  var v1295 = this.memoryHighWriter;
  var v5875 = this.memoryWriter;
  v1295[46] = v5875[65326] = this.cartIgnoreWrite;
  var v1296 = this.memoryHighWriter;
  var v5876 = this.memoryWriter;
  v1296[47] = v5876[65327] = this.cartIgnoreWrite;
  var v1297 = this.memoryHighWriter;
  var v5877 = this.memoryWriter;
  v1297[48] = v5877[65328] = v829;
  var v1298 = this.memoryHighWriter;
  var v5878 = this.memoryWriter;
  v1298[49] = v5878[65329] = v830;
  var v1299 = this.memoryHighWriter;
  var v5879 = this.memoryWriter;
  v1299[50] = v5879[65330] = v831;
  var v1300 = this.memoryHighWriter;
  var v5880 = this.memoryWriter;
  v1300[51] = v5880[65331] = v832;
  var v1301 = this.memoryHighWriter;
  var v5881 = this.memoryWriter;
  v1301[52] = v5881[65332] = v833;
  var v1302 = this.memoryHighWriter;
  var v5882 = this.memoryWriter;
  v1302[53] = v5882[65333] = v834;
  var v1303 = this.memoryHighWriter;
  var v5883 = this.memoryWriter;
  v1303[54] = v5883[65334] = v835;
  var v1304 = this.memoryHighWriter;
  var v5884 = this.memoryWriter;
  v1304[55] = v5884[65335] = v836;
  var v1305 = this.memoryHighWriter;
  var v5885 = this.memoryWriter;
  v1305[56] = v5885[65336] = v837;
  var v1306 = this.memoryHighWriter;
  var v5886 = this.memoryWriter;
  v1306[57] = v5886[65337] = v838;
  var v1307 = this.memoryHighWriter;
  var v5887 = this.memoryWriter;
  v1307[58] = v5887[65338] = v839;
  var v1308 = this.memoryHighWriter;
  var v5888 = this.memoryWriter;
  v1308[59] = v5888[65339] = v840;
  var v1309 = this.memoryHighWriter;
  var v5889 = this.memoryWriter;
  v1309[60] = v5889[65340] = v841;
  var v1310 = this.memoryHighWriter;
  var v5890 = this.memoryWriter;
  v1310[61] = v5890[65341] = v842;
  var v1311 = this.memoryHighWriter;
  var v5891 = this.memoryWriter;
  v1311[62] = v5891[65342] = v843;
  var v1312 = this.memoryHighWriter;
  var v5892 = this.memoryWriter;
  v1312[63] = v5892[65343] = v844;
  var v1313 = this.memoryHighWriter;
  var v5893 = this.memoryWriter;
  v1313[66] = v5893[65346] = v845;
  var v1314 = this.memoryHighWriter;
  var v5894 = this.memoryWriter;
  v1314[67] = v5894[65347] = v846;
  var v1315 = this.memoryHighWriter;
  var v5895 = this.memoryWriter;
  v1315[68] = v5895[65348] = v847;
  var v1316 = this.memoryHighWriter;
  var v5896 = this.memoryWriter;
  v1316[69] = v5896[65349] = v848;
  var v1317 = this.memoryHighWriter;
  var v5897 = this.memoryWriter;
  v1317[74] = v5897[65354] = v849;
  var v1318 = this.memoryHighWriter;
  var v5898 = this.memoryWriter;
  v1318[75] = v5898[65355] = v850;
  var v1319 = this.memoryHighWriter;
  var v5899 = this.memoryWriter;
  v1319[114] = v5899[65394] = v851;
  var v1320 = this.memoryHighWriter;
  var v5900 = this.memoryWriter;
  v1320[115] = v5900[65395] = v852;
  var v1321 = this.memoryHighWriter;
  var v5901 = this.memoryWriter;
  v1321[117] = v5901[65397] = v853;
  var v1322 = this.memoryHighWriter;
  var v5902 = this.memoryWriter;
  v1322[118] = v5902[65398] = this.cartIgnoreWrite;
  var v1323 = this.memoryHighWriter;
  var v5903 = this.memoryWriter;
  v1323[119] = v5903[65399] = this.cartIgnoreWrite;
  var v1324 = this.memoryHighWriter;
  var v5904 = this.memoryWriter;
  v1324[255] = v5904[65535] = v854;
  JAMScript.call(this.recompileModelSpecificIOWriteHandling, this, []);
  JAMScript.call(this.recompileBootIOWriteHandling, this, []);
  return
}
function v800(tilesToTransfer) {
  var v5905 = this.halt;
  var v1325 = !v5905;
  if(v1325) {
    var v5906 = this.CPUTicks;
    var v10501 = tilesToTransfer << 5;
    var v10502 = this.doubleSpeedShifter;
    var v8819 = v10501 << v10502;
    var v5907 = 4 | v8819;
    this.CPUTicks = v5906 + v5907
  }
  var v8820 = this.memory;
  var v5908 = v8820[65361];
  var v1326 = v5908 << 8;
  var v5909 = this.memory;
  var v1327 = v5909[65362];
  var source$$1 = v1326 | v1327;
  var v8821 = this.memory;
  var v5910 = v8821[65363];
  var v1328 = v5910 << 8;
  var v5911 = this.memory;
  var v1329 = v5911[65364];
  var destination = v1328 | v1329;
  var memoryReader = this.memoryReader;
  JAMScript.call(this.graphicsJIT, this, []);
  var memory = this.memory;
  var v5912 = this.currVRAMBank;
  var v1464 = v5912 == 0;
  if(v1464) {
    var v1396 = tilesToTransfer > 0;
    do {
      var v1395 = destination < 6144;
      if(v1395) {
        var v1330 = memory;
        var v1331 = 32768 | destination;
        var v5913 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11928 = [[this, v5913], memoryReader, memoryReader[source$$1]]
        }
        var v11705 = JAMScript.call(v11928[2], v11928[1], v11928[0]);
        v1330[v1331] = v11705;
        var v1332 = memory;
        var v1333 = 32769 | destination;
        var v5914 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11929 = [[this, v5914], memoryReader, memoryReader[source$$1]]
        }
        var v11706 = JAMScript.call(v11929[2], v11929[1], v11929[0]);
        v1332[v1333] = v11706;
        var v1334 = memory;
        var v1335 = 32770 | destination;
        var v5915 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11930 = [[this, v5915], memoryReader, memoryReader[source$$1]]
        }
        var v11707 = JAMScript.call(v11930[2], v11930[1], v11930[0]);
        v1334[v1335] = v11707;
        var v1336 = memory;
        var v1337 = 32771 | destination;
        var v5916 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11931 = [[this, v5916], memoryReader, memoryReader[source$$1]]
        }
        var v11708 = JAMScript.call(v11931[2], v11931[1], v11931[0]);
        v1336[v1337] = v11708;
        var v1338 = memory;
        var v1339 = 32772 | destination;
        var v5917 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11932 = [[this, v5917], memoryReader, memoryReader[source$$1]]
        }
        var v11709 = JAMScript.call(v11932[2], v11932[1], v11932[0]);
        v1338[v1339] = v11709;
        var v1340 = memory;
        var v1341 = 32773 | destination;
        var v5918 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11933 = [[this, v5918], memoryReader, memoryReader[source$$1]]
        }
        var v11710 = JAMScript.call(v11933[2], v11933[1], v11933[0]);
        v1340[v1341] = v11710;
        var v1342 = memory;
        var v1343 = 32774 | destination;
        var v5919 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11934 = [[this, v5919], memoryReader, memoryReader[source$$1]]
        }
        var v11711 = JAMScript.call(v11934[2], v11934[1], v11934[0]);
        v1342[v1343] = v11711;
        var v1344 = memory;
        var v1345 = 32775 | destination;
        var v5920 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11935 = [[this, v5920], memoryReader, memoryReader[source$$1]]
        }
        var v11712 = JAMScript.call(v11935[2], v11935[1], v11935[0]);
        v1344[v1345] = v11712;
        var v1346 = memory;
        var v1347 = 32776 | destination;
        var v5921 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11936 = [[this, v5921], memoryReader, memoryReader[source$$1]]
        }
        var v11713 = JAMScript.call(v11936[2], v11936[1], v11936[0]);
        v1346[v1347] = v11713;
        var v1348 = memory;
        var v1349 = 32777 | destination;
        var v5922 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11937 = [[this, v5922], memoryReader, memoryReader[source$$1]]
        }
        var v11714 = JAMScript.call(v11937[2], v11937[1], v11937[0]);
        v1348[v1349] = v11714;
        var v1350 = memory;
        var v1351 = 32778 | destination;
        var v5923 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11938 = [[this, v5923], memoryReader, memoryReader[source$$1]]
        }
        var v11715 = JAMScript.call(v11938[2], v11938[1], v11938[0]);
        v1350[v1351] = v11715;
        var v1352 = memory;
        var v1353 = 32779 | destination;
        var v5924 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11939 = [[this, v5924], memoryReader, memoryReader[source$$1]]
        }
        var v11716 = JAMScript.call(v11939[2], v11939[1], v11939[0]);
        v1352[v1353] = v11716;
        var v1354 = memory;
        var v1355 = 32780 | destination;
        var v5925 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11940 = [[this, v5925], memoryReader, memoryReader[source$$1]]
        }
        var v11717 = JAMScript.call(v11940[2], v11940[1], v11940[0]);
        v1354[v1355] = v11717;
        var v1356 = memory;
        var v1357 = 32781 | destination;
        var v5926 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11941 = [[this, v5926], memoryReader, memoryReader[source$$1]]
        }
        var v11718 = JAMScript.call(v11941[2], v11941[1], v11941[0]);
        v1356[v1357] = v11718;
        var v1358 = memory;
        var v1359 = 32782 | destination;
        var v5927 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11942 = [[this, v5927], memoryReader, memoryReader[source$$1]]
        }
        var v11719 = JAMScript.call(v11942[2], v11942[1], v11942[0]);
        v1358[v1359] = v11719;
        var v1360 = memory;
        var v1361 = 32783 | destination;
        var v5928 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11943 = [[this, v5928], memoryReader, memoryReader[source$$1]]
        }
        var v11720 = JAMScript.call(v11943[2], v11943[1], v11943[0]);
        v1360[v1361] = v11720;
        JAMScript.call(this.generateGBCTileBank1, this, [destination]);
        destination = destination + 16
      }else {
        destination = destination & 2032;
        var v1362 = this.BGCHRBank1;
        var v1363 = destination;
        destination = destination + 1;
        var v5929 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11944 = [[this, v5929], memoryReader, memoryReader[source$$1]]
        }
        var v11721 = JAMScript.call(v11944[2], v11944[1], v11944[0]);
        v1362[v1363] = v11721;
        var v1364 = this.BGCHRBank1;
        var v1365 = destination;
        destination = destination + 1;
        var v5930 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11945 = [[this, v5930], memoryReader, memoryReader[source$$1]]
        }
        var v11722 = JAMScript.call(v11945[2], v11945[1], v11945[0]);
        v1364[v1365] = v11722;
        var v1366 = this.BGCHRBank1;
        var v1367 = destination;
        destination = destination + 1;
        var v5931 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11946 = [[this, v5931], memoryReader, memoryReader[source$$1]]
        }
        var v11723 = JAMScript.call(v11946[2], v11946[1], v11946[0]);
        v1366[v1367] = v11723;
        var v1368 = this.BGCHRBank1;
        var v1369 = destination;
        destination = destination + 1;
        var v5932 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11947 = [[this, v5932], memoryReader, memoryReader[source$$1]]
        }
        var v11724 = JAMScript.call(v11947[2], v11947[1], v11947[0]);
        v1368[v1369] = v11724;
        var v1370 = this.BGCHRBank1;
        var v1371 = destination;
        destination = destination + 1;
        var v5933 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11948 = [[this, v5933], memoryReader, memoryReader[source$$1]]
        }
        var v11725 = JAMScript.call(v11948[2], v11948[1], v11948[0]);
        v1370[v1371] = v11725;
        var v1372 = this.BGCHRBank1;
        var v1373 = destination;
        destination = destination + 1;
        var v5934 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11949 = [[this, v5934], memoryReader, memoryReader[source$$1]]
        }
        var v11726 = JAMScript.call(v11949[2], v11949[1], v11949[0]);
        v1372[v1373] = v11726;
        var v1374 = this.BGCHRBank1;
        var v1375 = destination;
        destination = destination + 1;
        var v5935 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11950 = [[this, v5935], memoryReader, memoryReader[source$$1]]
        }
        var v11727 = JAMScript.call(v11950[2], v11950[1], v11950[0]);
        v1374[v1375] = v11727;
        var v1376 = this.BGCHRBank1;
        var v1377 = destination;
        destination = destination + 1;
        var v5936 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11951 = [[this, v5936], memoryReader, memoryReader[source$$1]]
        }
        var v11728 = JAMScript.call(v11951[2], v11951[1], v11951[0]);
        v1376[v1377] = v11728;
        var v1378 = this.BGCHRBank1;
        var v1379 = destination;
        destination = destination + 1;
        var v5937 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11952 = [[this, v5937], memoryReader, memoryReader[source$$1]]
        }
        var v11729 = JAMScript.call(v11952[2], v11952[1], v11952[0]);
        v1378[v1379] = v11729;
        var v1380 = this.BGCHRBank1;
        var v1381 = destination;
        destination = destination + 1;
        var v5938 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11953 = [[this, v5938], memoryReader, memoryReader[source$$1]]
        }
        var v11730 = JAMScript.call(v11953[2], v11953[1], v11953[0]);
        v1380[v1381] = v11730;
        var v1382 = this.BGCHRBank1;
        var v1383 = destination;
        destination = destination + 1;
        var v5939 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11954 = [[this, v5939], memoryReader, memoryReader[source$$1]]
        }
        var v11731 = JAMScript.call(v11954[2], v11954[1], v11954[0]);
        v1382[v1383] = v11731;
        var v1384 = this.BGCHRBank1;
        var v1385 = destination;
        destination = destination + 1;
        var v5940 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11955 = [[this, v5940], memoryReader, memoryReader[source$$1]]
        }
        var v11732 = JAMScript.call(v11955[2], v11955[1], v11955[0]);
        v1384[v1385] = v11732;
        var v1386 = this.BGCHRBank1;
        var v1387 = destination;
        destination = destination + 1;
        var v5941 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11956 = [[this, v5941], memoryReader, memoryReader[source$$1]]
        }
        var v11733 = JAMScript.call(v11956[2], v11956[1], v11956[0]);
        v1386[v1387] = v11733;
        var v1388 = this.BGCHRBank1;
        var v1389 = destination;
        destination = destination + 1;
        var v5942 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11957 = [[this, v5942], memoryReader, memoryReader[source$$1]]
        }
        var v11734 = JAMScript.call(v11957[2], v11957[1], v11957[0]);
        v1388[v1389] = v11734;
        var v1390 = this.BGCHRBank1;
        var v1391 = destination;
        destination = destination + 1;
        var v5943 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11958 = [[this, v5943], memoryReader, memoryReader[source$$1]]
        }
        var v11735 = JAMScript.call(v11958[2], v11958[1], v11958[0]);
        v1390[v1391] = v11735;
        var v1392 = this.BGCHRBank1;
        var v1393 = destination;
        destination = destination + 1;
        var v5944 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11959 = [[this, v5944], memoryReader, memoryReader[source$$1]]
        }
        var v11736 = JAMScript.call(v11959[2], v11959[1], v11959[0]);
        v1392[v1393] = v11736;
        var v1394 = destination + 6144;
        destination = v1394 & 8176
      }
      source$$1 = source$$1 & 65520;
      tilesToTransfer = tilesToTransfer - 1;
      v1396 = tilesToTransfer > 0
    }while(v1396)
  }else {
    var VRAM = this.VRAM;
    var v1463 = tilesToTransfer > 0;
    do {
      var v1462 = destination < 6144;
      if(v1462) {
        var v1397 = VRAM;
        var v1398 = destination;
        var v5945 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11960 = [[this, v5945], memoryReader, memoryReader[source$$1]]
        }
        var v11737 = JAMScript.call(v11960[2], v11960[1], v11960[0]);
        v1397[v1398] = v11737;
        var v1399 = VRAM;
        var v1400 = destination | 1;
        var v5946 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11961 = [[this, v5946], memoryReader, memoryReader[source$$1]]
        }
        var v11738 = JAMScript.call(v11961[2], v11961[1], v11961[0]);
        v1399[v1400] = v11738;
        var v1401 = VRAM;
        var v1402 = destination | 2;
        var v5947 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11962 = [[this, v5947], memoryReader, memoryReader[source$$1]]
        }
        var v11739 = JAMScript.call(v11962[2], v11962[1], v11962[0]);
        v1401[v1402] = v11739;
        var v1403 = VRAM;
        var v1404 = destination | 3;
        var v5948 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11963 = [[this, v5948], memoryReader, memoryReader[source$$1]]
        }
        var v11740 = JAMScript.call(v11963[2], v11963[1], v11963[0]);
        v1403[v1404] = v11740;
        var v1405 = VRAM;
        var v1406 = destination | 4;
        var v5949 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11964 = [[this, v5949], memoryReader, memoryReader[source$$1]]
        }
        var v11741 = JAMScript.call(v11964[2], v11964[1], v11964[0]);
        v1405[v1406] = v11741;
        var v1407 = VRAM;
        var v1408 = destination | 5;
        var v5950 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11965 = [[this, v5950], memoryReader, memoryReader[source$$1]]
        }
        var v11742 = JAMScript.call(v11965[2], v11965[1], v11965[0]);
        v1407[v1408] = v11742;
        var v1409 = VRAM;
        var v1410 = destination | 6;
        var v5951 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11966 = [[this, v5951], memoryReader, memoryReader[source$$1]]
        }
        var v11743 = JAMScript.call(v11966[2], v11966[1], v11966[0]);
        v1409[v1410] = v11743;
        var v1411 = VRAM;
        var v1412 = destination | 7;
        var v5952 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11967 = [[this, v5952], memoryReader, memoryReader[source$$1]]
        }
        var v11744 = JAMScript.call(v11967[2], v11967[1], v11967[0]);
        v1411[v1412] = v11744;
        var v1413 = VRAM;
        var v1414 = destination | 8;
        var v5953 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11968 = [[this, v5953], memoryReader, memoryReader[source$$1]]
        }
        var v11745 = JAMScript.call(v11968[2], v11968[1], v11968[0]);
        v1413[v1414] = v11745;
        var v1415 = VRAM;
        var v1416 = destination | 9;
        var v5954 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11969 = [[this, v5954], memoryReader, memoryReader[source$$1]]
        }
        var v11746 = JAMScript.call(v11969[2], v11969[1], v11969[0]);
        v1415[v1416] = v11746;
        var v1417 = VRAM;
        var v1418 = destination | 10;
        var v5955 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11970 = [[this, v5955], memoryReader, memoryReader[source$$1]]
        }
        var v11747 = JAMScript.call(v11970[2], v11970[1], v11970[0]);
        v1417[v1418] = v11747;
        var v1419 = VRAM;
        var v1420 = destination | 11;
        var v5956 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11971 = [[this, v5956], memoryReader, memoryReader[source$$1]]
        }
        var v11748 = JAMScript.call(v11971[2], v11971[1], v11971[0]);
        v1419[v1420] = v11748;
        var v1421 = VRAM;
        var v1422 = destination | 12;
        var v5957 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11972 = [[this, v5957], memoryReader, memoryReader[source$$1]]
        }
        var v11749 = JAMScript.call(v11972[2], v11972[1], v11972[0]);
        v1421[v1422] = v11749;
        var v1423 = VRAM;
        var v1424 = destination | 13;
        var v5958 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11973 = [[this, v5958], memoryReader, memoryReader[source$$1]]
        }
        var v11750 = JAMScript.call(v11973[2], v11973[1], v11973[0]);
        v1423[v1424] = v11750;
        var v1425 = VRAM;
        var v1426 = destination | 14;
        var v5959 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11974 = [[this, v5959], memoryReader, memoryReader[source$$1]]
        }
        var v11751 = JAMScript.call(v11974[2], v11974[1], v11974[0]);
        v1425[v1426] = v11751;
        var v1427 = VRAM;
        var v1428 = destination | 15;
        var v5960 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11975 = [[this, v5960], memoryReader, memoryReader[source$$1]]
        }
        var v11752 = JAMScript.call(v11975[2], v11975[1], v11975[0]);
        v1427[v1428] = v11752;
        JAMScript.call(this.generateGBCTileBank2, this, [destination]);
        destination = destination + 16
      }else {
        destination = destination & 2032;
        var v1429 = this.BGCHRBank2;
        var v1430 = destination;
        destination = destination + 1;
        var v5961 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11976 = [[this, v5961], memoryReader, memoryReader[source$$1]]
        }
        var v11753 = JAMScript.call(v11976[2], v11976[1], v11976[0]);
        v1429[v1430] = v11753;
        var v1431 = this.BGCHRBank2;
        var v1432 = destination;
        destination = destination + 1;
        var v5962 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11977 = [[this, v5962], memoryReader, memoryReader[source$$1]]
        }
        var v11754 = JAMScript.call(v11977[2], v11977[1], v11977[0]);
        v1431[v1432] = v11754;
        var v1433 = this.BGCHRBank2;
        var v1434 = destination;
        destination = destination + 1;
        var v5963 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11978 = [[this, v5963], memoryReader, memoryReader[source$$1]]
        }
        var v11755 = JAMScript.call(v11978[2], v11978[1], v11978[0]);
        v1433[v1434] = v11755;
        var v1435 = this.BGCHRBank2;
        var v1436 = destination;
        destination = destination + 1;
        var v5964 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11979 = [[this, v5964], memoryReader, memoryReader[source$$1]]
        }
        var v11756 = JAMScript.call(v11979[2], v11979[1], v11979[0]);
        v1435[v1436] = v11756;
        var v1437 = this.BGCHRBank2;
        var v1438 = destination;
        destination = destination + 1;
        var v5965 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11980 = [[this, v5965], memoryReader, memoryReader[source$$1]]
        }
        var v11757 = JAMScript.call(v11980[2], v11980[1], v11980[0]);
        v1437[v1438] = v11757;
        var v1439 = this.BGCHRBank2;
        var v1440 = destination;
        destination = destination + 1;
        var v5966 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11981 = [[this, v5966], memoryReader, memoryReader[source$$1]]
        }
        var v11758 = JAMScript.call(v11981[2], v11981[1], v11981[0]);
        v1439[v1440] = v11758;
        var v1441 = this.BGCHRBank2;
        var v1442 = destination;
        destination = destination + 1;
        var v5967 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11982 = [[this, v5967], memoryReader, memoryReader[source$$1]]
        }
        var v11759 = JAMScript.call(v11982[2], v11982[1], v11982[0]);
        v1441[v1442] = v11759;
        var v1443 = this.BGCHRBank2;
        var v1444 = destination;
        destination = destination + 1;
        var v5968 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11983 = [[this, v5968], memoryReader, memoryReader[source$$1]]
        }
        var v11760 = JAMScript.call(v11983[2], v11983[1], v11983[0]);
        v1443[v1444] = v11760;
        var v1445 = this.BGCHRBank2;
        var v1446 = destination;
        destination = destination + 1;
        var v5969 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11984 = [[this, v5969], memoryReader, memoryReader[source$$1]]
        }
        var v11761 = JAMScript.call(v11984[2], v11984[1], v11984[0]);
        v1445[v1446] = v11761;
        var v1447 = this.BGCHRBank2;
        var v1448 = destination;
        destination = destination + 1;
        var v5970 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11985 = [[this, v5970], memoryReader, memoryReader[source$$1]]
        }
        var v11762 = JAMScript.call(v11985[2], v11985[1], v11985[0]);
        v1447[v1448] = v11762;
        var v1449 = this.BGCHRBank2;
        var v1450 = destination;
        destination = destination + 1;
        var v5971 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11986 = [[this, v5971], memoryReader, memoryReader[source$$1]]
        }
        var v11763 = JAMScript.call(v11986[2], v11986[1], v11986[0]);
        v1449[v1450] = v11763;
        var v1451 = this.BGCHRBank2;
        var v1452 = destination;
        destination = destination + 1;
        var v5972 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11987 = [[this, v5972], memoryReader, memoryReader[source$$1]]
        }
        var v11764 = JAMScript.call(v11987[2], v11987[1], v11987[0]);
        v1451[v1452] = v11764;
        var v1453 = this.BGCHRBank2;
        var v1454 = destination;
        destination = destination + 1;
        var v5973 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11988 = [[this, v5973], memoryReader, memoryReader[source$$1]]
        }
        var v11765 = JAMScript.call(v11988[2], v11988[1], v11988[0]);
        v1453[v1454] = v11765;
        var v1455 = this.BGCHRBank2;
        var v1456 = destination;
        destination = destination + 1;
        var v5974 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11989 = [[this, v5974], memoryReader, memoryReader[source$$1]]
        }
        var v11766 = JAMScript.call(v11989[2], v11989[1], v11989[0]);
        v1455[v1456] = v11766;
        var v1457 = this.BGCHRBank2;
        var v1458 = destination;
        destination = destination + 1;
        var v5975 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11990 = [[this, v5975], memoryReader, memoryReader[source$$1]]
        }
        var v11767 = JAMScript.call(v11990[2], v11990[1], v11990[0]);
        v1457[v1458] = v11767;
        var v1459 = this.BGCHRBank2;
        var v1460 = destination;
        destination = destination + 1;
        var v5976 = source$$1;
        source$$1 = source$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11991 = [[this, v5976], memoryReader, memoryReader[source$$1]]
        }
        var v11768 = JAMScript.call(v11991[2], v11991[1], v11991[0]);
        v1459[v1460] = v11768;
        var v1461 = destination + 6144;
        destination = v1461 & 8176
      }
      source$$1 = source$$1 & 65520;
      tilesToTransfer = tilesToTransfer - 1;
      v1463 = tilesToTransfer > 0
    }while(v1463)
  }
  memory[65361] = source$$1 >> 8;
  memory[65362] = source$$1 & 240;
  memory[65363] = destination >> 8;
  memory[65364] = destination & 240;
  return
}
function v799(parentObj$$592, address$$86, data$$60) {
  var v5977 = parentObj$$592.modeSTAT;
  var v1467 = v5977 < 3;
  if(v1467) {
    address$$86 = address$$86 & 2047;
    var v8822 = parentObj$$592.BGCHRCurrentBank;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v5978 = v8822[address$$86]
    }
    var v1466 = v5978 != data$$60;
    if(v1466) {
      JAMScript.call(parentObj$$592.graphicsJIT, parentObj$$592, []);
      var v1465 = parentObj$$592.BGCHRCurrentBank;
      JAMScript.set(v1465, address$$86, data$$60)
    }
  }
  return
}
function v798(parentObj$$591, address$$85, data$$59) {
  var v5979 = parentObj$$591.modeSTAT;
  var v1470 = v5979 < 3;
  if(v1470) {
    address$$85 = address$$85 & 2047;
    var v8823 = parentObj$$591.BGCHRBank1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v5980 = v8823[address$$85]
    }
    var v1469 = v5980 != data$$59;
    if(v1469) {
      JAMScript.call(parentObj$$591.graphicsJIT, parentObj$$591, []);
      var v1468 = parentObj$$591.BGCHRBank1;
      JAMScript.set(v1468, address$$85, data$$59)
    }
  }
  return
}
function v797(parentObj$$590, address$$84, data$$58) {
  var v5981 = parentObj$$590.modeSTAT;
  var v1476 = v5981 < 3;
  if(v1476) {
    var v5982 = parentObj$$590.currVRAMBank;
    var v1475 = v5982 == 0;
    if(v1475) {
      var v8824 = parentObj$$590.memory;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v5983 = v8824[address$$84]
      }
      var v1472 = v5983 != data$$58;
      if(v1472) {
        JAMScript.call(parentObj$$590.graphicsJIT, parentObj$$590, []);
        var v1471 = parentObj$$590.memory;
        JAMScript.set(v1471, address$$84, data$$58);
        JAMScript.call(parentObj$$590.generateGBCTileLineBank1, parentObj$$590, [address$$84])
      }
    }else {
      address$$84 = address$$84 & 8191;
      var v8825 = parentObj$$590.VRAM;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v5984 = v8825[address$$84]
      }
      var v1474 = v5984 != data$$58;
      if(v1474) {
        JAMScript.call(parentObj$$590.graphicsJIT, parentObj$$590, []);
        var v1473 = parentObj$$590.VRAM;
        JAMScript.set(v1473, address$$84, data$$58);
        JAMScript.call(parentObj$$590.generateGBCTileLineBank2, parentObj$$590, [address$$84])
      }
    }
  }
  return
}
function v796(parentObj$$589, address$$83, data$$57) {
  var v5985 = parentObj$$589.modeSTAT;
  var v1479 = v5985 < 3;
  if(v1479) {
    var v8826 = parentObj$$589.memory;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v5986 = v8826[address$$83]
    }
    var v1478 = v5986 != data$$57;
    if(v1478) {
      JAMScript.call(parentObj$$589.graphicsJIT, parentObj$$589, []);
      var v1477 = parentObj$$589.memory;
      JAMScript.set(v1477, address$$83, data$$57);
      JAMScript.call(parentObj$$589.generateGBTileLine, parentObj$$589, [address$$83])
    }
  }
  return
}
function v795(parentObj$$588, address$$82, data$$56) {
  var v5987 = parentObj$$588.modeSTAT;
  var v1482 = v5987 < 3;
  if(v1482) {
    var v8827 = parentObj$$588.memory;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v5988 = v8827[address$$82]
    }
    var v1481 = v5988 != data$$56;
    if(v1481) {
      JAMScript.call(parentObj$$588.graphicsJIT, parentObj$$588, []);
      var v1480 = parentObj$$588.memory;
      JAMScript.set(v1480, address$$82, data$$56);
      JAMScript.call(parentObj$$588.generateGBOAMTileLine, parentObj$$588, [address$$82])
    }
  }
  return
}
function v794(parentObj$$587, address$$81, data$$55) {
  var v1483 = parentObj$$587.memory;
  var v1484 = address$$81 - 8192;
  v1483[v1484] = data$$55;
  return
}
function v793(parentObj$$586, address$$80, data$$54) {
  var v1485 = parentObj$$586.GBCMemory;
  var v5989 = parentObj$$586.gbcRamBankPositionECHO;
  var v1486 = address$$80 + v5989;
  JAMScript.set(v1485, v1486, data$$54);
  return
}
function v792(parentObj$$585, address$$79, data$$53) {
  var v5990 = parentObj$$585.modeSTAT;
  var v1489 = v5990 < 2;
  if(v1489) {
    var v8828 = parentObj$$585.memory;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v5991 = v8828[address$$79]
    }
    var v1488 = v5991 != data$$53;
    if(v1488) {
      JAMScript.call(parentObj$$585.graphicsJIT, parentObj$$585, []);
      var v1487 = parentObj$$585.memory;
      JAMScript.set(v1487, address$$79, data$$53)
    }
  }
  return
}
function v791(parentObj$$584, address$$78, data$$52) {
  var v1490 = parentObj$$584.GBCMemory;
  var v5992 = parentObj$$584.gbcRamBankPosition;
  var v1491 = address$$78 + v5992;
  JAMScript.set(v1490, v1491, data$$52);
  return
}
function v790(parentObj$$583, address$$77, data$$51) {
  var v5993 = parentObj$$583.MBCRAMBanksEnabled;
  var v8829 = !v5993;
  if(v8829) {
    v5993 = settings[10]
  }
  var v1505 = v5993;
  if(v1505) {
    var v1504 = parentObj$$583.currMBCRAMBank;
    switch(v1504) {
      case 0:
      ;
      case 1:
      ;
      case 2:
      ;
      case 3:
        var v1492 = parentObj$$583.MBCRam;
        var v5994 = parentObj$$583.currMBCRAMBankPosition;
        var v1493 = address$$77 + v5994;
        JAMScript.set(v1492, v1493, data$$51);
        break;
      case 8:
        var v1495 = data$$51 < 60;
        if(v1495) {
          parentObj$$583.RTCSeconds = data$$51
        }else {
          var v10503 = parentObj$$583.currMBCRAMBank;
          var v8830 = "(Bank #" + v10503;
          var v5995 = v8830 + ") RTC write out of range: ";
          var v1494 = v5995 + data$$51;
          cout(v1494, 1)
        }
        break;
      case 9:
        var v1497 = data$$51 < 60;
        if(v1497) {
          parentObj$$583.RTCMinutes = data$$51
        }else {
          var v10504 = parentObj$$583.currMBCRAMBank;
          var v8831 = "(Bank #" + v10504;
          var v5996 = v8831 + ") RTC write out of range: ";
          var v1496 = v5996 + data$$51;
          cout(v1496, 1)
        }
        break;
      case 10:
        var v1499 = data$$51 < 24;
        if(v1499) {
          parentObj$$583.RTCHours = data$$51
        }else {
          var v10505 = parentObj$$583.currMBCRAMBank;
          var v8832 = "(Bank #" + v10505;
          var v5997 = v8832 + ") RTC write out of range: ";
          var v1498 = v5997 + data$$51;
          cout(v1498, 1)
        }
        break;
      case 11:
        var v1500 = parentObj$$583;
        var v5998 = data$$51 & 255;
        var v8833 = parentObj$$583.RTCDays;
        var v5999 = v8833 & 256;
        v1500.RTCDays = v5998 | v5999;
        break;
      case 12:
        parentObj$$583.RTCDayOverFlow = data$$51 > 127;
        var v1501 = data$$51 & 64;
        parentObj$$583.RTCHalt = v1501 == 64;
        var v1502 = parentObj$$583;
        var v8834 = data$$51 & 1;
        var v6000 = v8834 << 8;
        var v8835 = parentObj$$583.RTCDays;
        var v6001 = v8835 & 255;
        v1502.RTCDays = v6000 | v6001;
        break;
      default:
        var v6002 = parentObj$$583.currMBCRAMBank;
        var v1503 = "Invalid MBC3 bank address selected: " + v6002;
        cout(v1503, 0)
    }
  }
  return
}
function v789(parentObj$$582, address$$76, data$$50) {
  var v6003 = parentObj$$582.MBCRAMBanksEnabled;
  var v8836 = !v6003;
  if(v8836) {
    v6003 = settings[10]
  }
  var v1508 = v6003;
  if(v1508) {
    var v1506 = parentObj$$582.MBCRam;
    var v6004 = parentObj$$582.currMBCRAMBankPosition;
    var v1507 = address$$76 + v6004;
    JAMScript.set(v1506, v1507, data$$50)
  }
  return
}
function v788(parentObj$$581, address$$75, data$$49) {
  var v1509 = parentObj$$581.memory;
  var v1510 = 65280 | address$$75;
  v1509[v1510] = data$$49;
  return
}
function v787(parentObj$$580, address$$74, data$$48) {
  var v1511 = parentObj$$580.memory;
  JAMScript.set(v1511, address$$74, data$$48);
  return
}
function v786(parentObj$$579, address$$73, data$$47) {
  return
}
function v785(parentObj$$578, address$$72, data$$46) {
  parentObj$$578.currMBCRAMBank = data$$46 & 3;
  var v1512 = parentObj$$578;
  var v8837 = parentObj$$578.currMBCRAMBank;
  var v6005 = v8837 << 13;
  v1512.currMBCRAMBankPosition = v6005 - 40960;
  return
}
function v784(parentObj$$577, address$$71, data$$45) {
  parentObj$$577.currMBCRAMBank = data$$45 & 3;
  var v1513 = parentObj$$577;
  var v8838 = parentObj$$577.currMBCRAMBank;
  var v6006 = v8838 << 13;
  v1513.currMBCRAMBankPosition = v6006 - 40960;
  return
}
function v783(parentObj$$576, address$$70, data$$44) {
  parentObj$$576.currMBCRAMBank = data$$44 & 15;
  var v1514 = parentObj$$576;
  var v8839 = parentObj$$576.currMBCRAMBank;
  var v6007 = v8839 << 13;
  v1514.currMBCRAMBankPosition = v6007 - 40960;
  return
}
function v782(parentObj$$575, address$$69, data$$43) {
  var v1515 = parentObj$$575;
  var v8840 = data$$43 & 1;
  var v6008 = v8840 << 8;
  var v8841 = parentObj$$575.ROMBank1offs;
  var v6009 = v8841 & 255;
  v1515.ROMBank1offs = v6008 | v6009;
  JAMScript.call(parentObj$$575.setCurrentMBC5ROMBank, parentObj$$575, []);
  return
}
function v781(parentObj$$574, address$$68, data$$42) {
  var v1516 = parentObj$$574;
  var v8842 = parentObj$$574.ROMBank1offs;
  var v6010 = v8842 & 256;
  v1516.ROMBank1offs = v6010 | data$$42;
  JAMScript.call(parentObj$$574.setCurrentMBC5ROMBank, parentObj$$574, []);
  return
}
function v780(parentObj$$573, address$$67, data$$41) {
  var v1523 = data$$41 == 0;
  if(v1523) {
    parentObj$$573.RTCisLatched = false
  }else {
    var v6011 = parentObj$$573.RTCisLatched;
    var v1522 = !v6011;
    if(v1522) {
      parentObj$$573.RTCisLatched = true;
      var v1517 = parentObj$$573;
      var v6012 = parentObj$$573.RTCSeconds;
      v1517.latchedSeconds = v6012 | 0;
      var v1518 = parentObj$$573;
      v1518.latchedMinutes = parentObj$$573.RTCMinutes;
      var v1519 = parentObj$$573;
      v1519.latchedHours = parentObj$$573.RTCHours;
      var v1520 = parentObj$$573;
      var v6013 = parentObj$$573.RTCDays;
      v1520.latchedLDays = v6013 & 255;
      var v1521 = parentObj$$573;
      var v6014 = parentObj$$573.RTCDays;
      v1521.latchedHDays = v6014 >> 8
    }
  }
  return
}
function v779(parentObj$$572, address$$66, data$$40) {
  parentObj$$572.currMBCRAMBank = data$$40;
  var v1525 = data$$40 < 4;
  if(v1525) {
    var v1524 = parentObj$$572;
    var v8843 = parentObj$$572.currMBCRAMBank;
    var v6015 = v8843 << 13;
    v1524.currMBCRAMBankPosition = v6015 - 40960
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
  var v1526 = data$$37 & 1;
  parentObj$$569.MBC1Mode = v1526 == 1;
  var v1527 = parentObj$$569.MBC1Mode;
  if(v1527) {
    var v6016 = parentObj$$569;
    var v8844 = parentObj$$569.ROMBank1offs;
    v6016.ROMBank1offs = v8844 & 31;
    JAMScript.call(parentObj$$569.setCurrentMBC1ROMBank, parentObj$$569, [])
  }else {
    parentObj$$569.currMBCRAMBank = 0;
    parentObj$$569.currMBCRAMBankPosition = -40960
  }
  return
}
function v775(parentObj$$568, address$$62, data$$36) {
  var v1530 = parentObj$$568.MBC1Mode;
  if(v1530) {
    parentObj$$568.currMBCRAMBank = data$$36 & 3;
    var v1528 = parentObj$$568;
    var v8845 = parentObj$$568.currMBCRAMBank;
    var v6017 = v8845 << 13;
    v1528.currMBCRAMBankPosition = v6017 - 40960
  }else {
    var v1529 = parentObj$$568;
    var v8846 = data$$36 & 3;
    var v6018 = v8846 << 5;
    var v8847 = parentObj$$568.ROMBank1offs;
    var v6019 = v8847 & 31;
    v1529.ROMBank1offs = v6018 | v6019;
    JAMScript.call(parentObj$$568.setCurrentMBC1ROMBank, parentObj$$568, [])
  }
  return
}
function v774(parentObj$$567, address$$61, data$$35) {
  var v1531 = parentObj$$567;
  var v8848 = parentObj$$567.ROMBank1offs;
  var v6020 = v8848 & 96;
  var v6021 = data$$35 & 31;
  v1531.ROMBank1offs = v6020 | v6021;
  JAMScript.call(parentObj$$567.setCurrentMBC1ROMBank, parentObj$$567, []);
  return
}
function v773(parentObj$$566, address$$60, data$$34) {
  var v1532 = data$$34 & 15;
  parentObj$$566.MBCRAMBanksEnabled = v1532 == 10;
  return
}
function v772() {
  var index$$63 = 0;
  var v1604 = index$$63 <= 65535;
  for(;v1604;) {
    var v1603 = index$$63 < 32768;
    if(v1603) {
      var v1573 = this.cMBC1;
      if(v1573) {
        var v1539 = index$$63 < 8192;
        if(v1539) {
          var v1533 = this.memoryWriter;
          v1533[index$$63] = this.MBCWriteEnable
        }else {
          var v1538 = index$$63 < 16384;
          if(v1538) {
            var v1534 = this.memoryWriter;
            v1534[index$$63] = this.MBC1WriteROMBank
          }else {
            var v1537 = index$$63 < 24576;
            if(v1537) {
              var v1535 = this.memoryWriter;
              v1535[index$$63] = this.MBC1WriteRAMBank
            }else {
              var v1536 = this.memoryWriter;
              v1536[index$$63] = this.MBC1WriteType
            }
          }
        }
      }else {
        var v1572 = this.cMBC2;
        if(v1572) {
          var v1544 = index$$63 < 4096;
          if(v1544) {
            var v1540 = this.memoryWriter;
            v1540[index$$63] = this.MBCWriteEnable
          }else {
            var v6022 = index$$63 >= 8448;
            if(v6022) {
              v6022 = index$$63 < 8704
            }
            var v1543 = v6022;
            if(v1543) {
              var v1541 = this.memoryWriter;
              v1541[index$$63] = this.MBC2WriteROMBank
            }else {
              var v1542 = this.memoryWriter;
              v1542[index$$63] = this.cartIgnoreWrite
            }
          }
        }else {
          var v1571 = this.cMBC3;
          if(v1571) {
            var v1551 = index$$63 < 8192;
            if(v1551) {
              var v1545 = this.memoryWriter;
              v1545[index$$63] = this.MBCWriteEnable
            }else {
              var v1550 = index$$63 < 16384;
              if(v1550) {
                var v1546 = this.memoryWriter;
                v1546[index$$63] = this.MBC3WriteROMBank
              }else {
                var v1549 = index$$63 < 24576;
                if(v1549) {
                  var v1547 = this.memoryWriter;
                  v1547[index$$63] = this.MBC3WriteRAMBank
                }else {
                  var v1548 = this.memoryWriter;
                  v1548[index$$63] = this.MBC3WriteRTCLatch
                }
              }
            }
          }else {
            var v6023 = this.cMBC5;
            var v8850 = !v6023;
            if(v8850) {
              var v8849 = this.cRUMBLE;
              var v10506 = !v8849;
              if(v10506) {
                v8849 = this.cMBC7
              }
              v6023 = v8849
            }
            var v1570 = v6023;
            if(v1570) {
              var v1560 = index$$63 < 8192;
              if(v1560) {
                var v1552 = this.memoryWriter;
                v1552[index$$63] = this.MBCWriteEnable
              }else {
                var v1559 = index$$63 < 12288;
                if(v1559) {
                  var v1553 = this.memoryWriter;
                  v1553[index$$63] = this.MBC5WriteROMBankLow
                }else {
                  var v1558 = index$$63 < 16384;
                  if(v1558) {
                    var v1554 = this.memoryWriter;
                    v1554[index$$63] = this.MBC5WriteROMBankHigh
                  }else {
                    var v1557 = index$$63 < 24576;
                    if(v1557) {
                      var v1555 = this.memoryWriter;
                      var v6024;
                      var v8851 = this.cRUMBLE;
                      if(v8851) {
                        v6024 = this.RUMBLEWriteRAMBank
                      }else {
                        v6024 = this.MBC5WriteRAMBank
                      }
                      v1555[index$$63] = v6024
                    }else {
                      var v1556 = this.memoryWriter;
                      v1556[index$$63] = this.cartIgnoreWrite
                    }
                  }
                }
              }
            }else {
              var v1569 = this.cHuC3;
              if(v1569) {
                var v1567 = index$$63 < 8192;
                if(v1567) {
                  var v1561 = this.memoryWriter;
                  v1561[index$$63] = this.MBCWriteEnable
                }else {
                  var v1566 = index$$63 < 16384;
                  if(v1566) {
                    var v1562 = this.memoryWriter;
                    v1562[index$$63] = this.MBC3WriteROMBank
                  }else {
                    var v1565 = index$$63 < 24576;
                    if(v1565) {
                      var v1563 = this.memoryWriter;
                      v1563[index$$63] = this.HuC3WriteRAMBank
                    }else {
                      var v1564 = this.memoryWriter;
                      v1564[index$$63] = this.cartIgnoreWrite
                    }
                  }
                }
              }else {
                var v1568 = this.memoryWriter;
                v1568[index$$63] = this.cartIgnoreWrite
              }
            }
          }
        }
      }
    }else {
      var v1602 = index$$63 < 36864;
      if(v1602) {
        var v1574 = this.memoryWriter;
        var v6025;
        var v8852 = this.cGBC;
        if(v8852) {
          v6025 = this.VRAMGBCDATAWrite
        }else {
          v6025 = this.VRAMGBDATAWrite
        }
        v1574[index$$63] = v6025
      }else {
        var v1601 = index$$63 < 38912;
        if(v1601) {
          var v1575 = this.memoryWriter;
          var v6026;
          var v8853 = this.cGBC;
          if(v8853) {
            v6026 = this.VRAMGBCDATAWrite
          }else {
            v6026 = this.VRAMGBDATAUpperWrite
          }
          v1575[index$$63] = v6026
        }else {
          var v1600 = index$$63 < 40960;
          if(v1600) {
            var v1576 = this.memoryWriter;
            var v6027;
            var v8854 = this.cGBC;
            if(v8854) {
              v6027 = this.VRAMGBCCHRMAPWrite
            }else {
              v6027 = this.VRAMGBCHRMAPWrite
            }
            v1576[index$$63] = v6027
          }else {
            var v1599 = index$$63 < 49152;
            if(v1599) {
              var v10507 = this.numRAMBanks;
              var v10508 = 1 / 16;
              var v8855 = v10507 == v10508;
              if(v8855) {
                v8855 = index$$63 < 41472
              }
              var v6028 = v8855;
              var v8857 = !v6028;
              if(v8857) {
                var v8856 = this.numRAMBanks;
                v6028 = v8856 >= 1
              }
              var v1581 = v6028;
              if(v1581) {
                var v6029 = this.cMBC3;
                var v1579 = !v6029;
                if(v1579) {
                  var v1577 = this.memoryWriter;
                  v1577[index$$63] = this.memoryWriteMBCRAM
                }else {
                  var v1578 = this.memoryWriter;
                  v1578[index$$63] = this.memoryWriteMBC3RAM
                }
              }else {
                var v1580 = this.memoryWriter;
                v1580[index$$63] = this.cartIgnoreWrite
              }
            }else {
              var v1598 = index$$63 < 57344;
              if(v1598) {
                var v6030 = this.cGBC;
                if(v6030) {
                  v6030 = index$$63 >= 53248
                }
                var v1584 = v6030;
                if(v1584) {
                  var v1582 = this.memoryWriter;
                  v1582[index$$63] = this.memoryWriteGBCRAM
                }else {
                  var v1583 = this.memoryWriter;
                  v1583[index$$63] = this.memoryWriteNormal
                }
              }else {
                var v1597 = index$$63 < 65024;
                if(v1597) {
                  var v6031 = this.cGBC;
                  if(v6031) {
                    v6031 = index$$63 >= 61440
                  }
                  var v1587 = v6031;
                  if(v1587) {
                    var v1585 = this.memoryWriter;
                    v1585[index$$63] = this.memoryWriteECHOGBCRAM
                  }else {
                    var v1586 = this.memoryWriter;
                    v1586[index$$63] = this.memoryWriteECHONormal
                  }
                }else {
                  var v1596 = index$$63 <= 65184;
                  if(v1596) {
                    var v1588 = this.memoryWriter;
                    v1588[index$$63] = this.memoryWriteOAMRAM
                  }else {
                    var v1595 = index$$63 < 65280;
                    if(v1595) {
                      var v1591 = this.cGBC;
                      if(v1591) {
                        var v1589 = this.memoryWriter;
                        v1589[index$$63] = this.memoryWriteNormal
                      }else {
                        var v1590 = this.memoryWriter;
                        v1590[index$$63] = this.cartIgnoreWrite
                      }
                    }else {
                      var v1592 = this.memoryWriter;
                      v1592[index$$63] = this.memoryWriteNormal;
                      var v1593 = this.memoryHighWriter;
                      var v1594 = index$$63 & 255;
                      v1593[v1594] = this.memoryHighWriteNormal
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
    v1604 = index$$63 <= 65535
  }
  JAMScript.call(this.registerWriteJumpCompile, this, []);
  return
}
function v771(address$$59, data$$33) {
  var v1605 = this.memoryHighWriter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11992 = [[this, address$$59, data$$33], v1605, v1605[address$$59]]
  }
  JAMScript.call(v11992[2], v11992[1], v11992[0]);
  return
}
function v770(address$$58, data$$32) {
  var v1606 = this.memoryWriter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11993 = [[this, address$$58, data$$32], v1606, v1606[address$$58]]
  }
  JAMScript.call(v11993[2], v11993[1], v11993[0]);
  return
}
function v769() {
  var v8858 = this.ROMBank1offs;
  var v8859 = this.ROMBankEdge;
  var v6032 = v8858 % v8859;
  var v1607 = v6032 - 1;
  this.currentROMBank = v1607 << 14;
  return
}
function v768() {
  var v10509 = this.ROMBank1offs;
  var v10510 = this.ROMBankEdge;
  var v8860 = v10509 % v10510;
  var v6033 = v8860 - 1;
  var v1608 = Math.max(v6033, 0);
  this.currentROMBank = v1608 << 14;
  return
}
function v767() {
  var v1611 = this.ROMBank1offs;
  switch(v1611) {
    case 0:
    ;
    case 32:
    ;
    case 64:
    ;
    case 96:
      var v6034 = this.ROMBank1offs;
      var v6035 = this.ROMBankEdge;
      var v1609 = v6034 % v6035;
      this.currentROMBank = v1609 << 14;
      break;
    default:
      var v8861 = this.ROMBank1offs;
      var v8862 = this.ROMBankEdge;
      var v6036 = v8861 % v8862;
      var v1610 = v6036 - 1;
      this.currentROMBank = v1610 << 14
  }
  return
}
function v766(parentObj$$565, address$$57) {
  var v1612;
  var v8863 = parentObj$$565.modeSTAT;
  var v6039 = v8863 > 2;
  if(v6039) {
    v1612 = 255
  }else {
    var v6037 = parentObj$$565.BGCHRBank1;
    var v6038 = address$$57 & 2047;
    v1612 = v6037[v6038]
  }
  return v1612
}
function v765(parentObj$$564, address$$56) {
  var v1613;
  var v8864 = parentObj$$564.modeSTAT;
  var v6042 = v8864 > 2;
  if(v6042) {
    v1613 = 255
  }else {
    var v6040 = parentObj$$564.BGCHRCurrentBank;
    var v6041 = address$$56 & 2047;
    v1613 = v6040[v6041]
  }
  return v1613
}
function v764(parentObj$$563, address$$55) {
  var v1614;
  var v8865 = parentObj$$563.modeSTAT;
  var v6044 = v8865 > 2;
  if(v6044) {
    v1614 = 255
  }else {
    var v6043 = parentObj$$563.memory;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      v1614 = v6043[address$$55]
    }
  }
  return v1614
}
function v763(parentObj$$562, address$$54) {
  var v1615;
  var v8866 = parentObj$$562.modeSTAT;
  var v6046 = v8866 > 2;
  if(v6046) {
    v1615 = 255
  }else {
    var v6045;
    var v10511 = parentObj$$562.currVRAMBank;
    var v8870 = v10511 == 0;
    if(v8870) {
      var v8867 = parentObj$$562.memory;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        v6045 = v8867[address$$54]
      }
    }else {
      var v8868 = parentObj$$562.VRAM;
      var v8869 = address$$54 & 8191;
      v6045 = v8868[v8869]
    }
    v1615 = v6045
  }
  return v1615
}
function v762(parentObj$$561, address$$53) {
  return 255
}
function v761(parentObj$$560, address$$52) {
  var v1616 = parentObj$$560.memory;
  var v1617 = address$$52 - 8192;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return v1616[v1617]
  }
}
function v760(parentObj$$559, address$$51) {
  var v1618 = parentObj$$559.GBCMemory;
  var v6047 = parentObj$$559.gbcRamBankPositionECHO;
  var v1619 = address$$51 + v6047;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return v1618[v1619]
  }
}
function v759(parentObj$$558, address$$50) {
  var v1620;
  var v8871 = parentObj$$558.modeSTAT;
  var v6049 = v8871 > 1;
  if(v6049) {
    v1620 = 255
  }else {
    var v6048 = parentObj$$558.memory;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      v1620 = v6048[address$$50]
    }
  }
  return v1620
}
function v758(parentObj$$557, address$$49) {
  var v1621 = parentObj$$557.GBCMemory;
  var v6050 = parentObj$$557.gbcRamBankPosition;
  var v1622 = address$$49 + v6050;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return v1621[v1622]
  }
}
function v757(parentObj$$556, address$$48) {
  var v6051 = parentObj$$556.MBCRAMBanksEnabled;
  var v8872 = !v6051;
  if(v8872) {
    v6051 = settings[10]
  }
  var v1628 = v6051;
  if(v1628) {
    var v1627 = parentObj$$556.currMBCRAMBank;
    switch(v1627) {
      case 0:
      ;
      case 1:
      ;
      case 2:
      ;
      case 3:
        var v1623 = parentObj$$556.MBCRam;
        var v6052 = parentObj$$556.currMBCRAMBankPosition;
        var v1624 = address$$48 + v6052;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          return v1623[v1624]
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
        var v8873;
        var v10512 = parentObj$$556.RTCDayOverFlow;
        if(v10512) {
          v8873 = 128
        }else {
          v8873 = 0
        }
        var v6053 = v8873;
        var v8874;
        var v10513 = parentObj$$556.RTCHALT;
        if(v10513) {
          v8874 = 64
        }else {
          v8874 = 0
        }
        var v6054 = v8874;
        var v1625 = v6053 + v6054;
        var v1626 = parentObj$$556.latchedHDays;
        return v1625 + v1626
    }
  }
  return 255
}
function v756(parentObj$$555, address$$47) {
  var v6055 = parentObj$$555.MBCRAMBanksEnabled;
  var v8875 = !v6055;
  if(v8875) {
    v6055 = settings[10]
  }
  var v1631 = v6055;
  if(v1631) {
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
        var v1629 = parentObj$$555.MBCRam;
        var v6056 = parentObj$$555.currMBCRAMBankPosition;
        var v1630 = address$$47 + v6056;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          return v1629[v1630]
        }
    }
  }
  return 255
}
function v755(parentObj$$554, address$$46) {
  var v6057 = parentObj$$554.MBCRAMBanksEnabled;
  var v8876 = !v6057;
  if(v8876) {
    v6057 = settings[10]
  }
  var v1634 = v6057;
  if(v1634) {
    var v1632 = parentObj$$554.MBCRam;
    var v6058 = parentObj$$554.currMBCRAMBankPosition;
    var v1633 = address$$46 + v6058;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      return v1632[v1633]
    }
  }
  return 255
}
function v754(parentObj$$553, address$$45) {
  var v1635 = parentObj$$553.ROM;
  var v6059 = parentObj$$553.currentROMBank;
  var v1636 = v6059 + address$$45;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return v1635[v1636]
  }
}
function v753(parentObj$$552, address$$44) {
  var v1637 = parentObj$$552.memory;
  var v1638 = 65280 | address$$44;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return v1637[v1638]
  }
}
function v752(parentObj$$551, address$$43) {
  var v1639 = parentObj$$551.memory;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    return v1639[address$$43]
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
    var v6060 = parentObj$$548.memory;
    var v1640 = v6060[65397];
    return 143 | v1640
  }
  function v747(parentObj$$547, address$$39) {
    var v6061 = parentObj$$547.memory;
    var v1641 = v6061[65392];
    return 64 | v1641
  }
  function v746(parentObj$$546, address$$38) {
    var v6062 = parentObj$$546.memory;
    var v1642 = v6062[65388];
    return 254 | v1642
  }
  function v745(parentObj$$545, address$$37) {
    var v6063;
    var v11186 = parentObj$$545.memory;
    var v10514 = v11186[65366];
    var v8879 = v10514 >= 192;
    if(v8879) {
      var v11187 = parentObj$$545.memory;
      var v10515 = v11187[65366];
      var v8877 = v10515 & 193;
      v6063 = 2 | v8877
    }else {
      var v10516 = parentObj$$545.memory;
      var v8878 = v10516[65366];
      v6063 = v8878 & 195
    }
    var v1643 = v6063;
    return 60 | v1643
  }
  function v744(parentObj$$544, address$$36) {
    var v8880 = parentObj$$544.LCDisOn;
    var v6064 = !v8880;
    if(v6064) {
      v6064 = parentObj$$544.hdmaRunning
    }
    var v1646 = v6064;
    if(v1646) {
      var v10517 = parentObj$$544.memory;
      var v8881 = v10517[65365];
      var v6065 = v8881 & 127;
      var v1644 = v6065 + 1;
      JAMScript.call(parentObj$$544.DMAWrite, parentObj$$544, [v1644]);
      var v1645 = parentObj$$544.memory;
      v1645[65365] = 255;
      parentObj$$544.hdmaRunning = false
    }
    var v1647 = parentObj$$544.memory;
    return v1647[65365]
  }
  function v743(parentObj$$543, address$$35) {
    return parentObj$$543.currVRAMBank
  }
  function v742(parentObj$$542, address$$34) {
    return parentObj$$542.windowY
  }
  function v741(parentObj$$541, address$$33) {
    var v1648;
    var v6067 = parentObj$$541.LCDisOn;
    if(v6067) {
      var v6066 = parentObj$$541.memory;
      v1648 = v6066[65348]
    }else {
      v1648 = 0
    }
    return v1648
  }
  function v740(parentObj$$540, address$$32) {
    return parentObj$$540.backgroundX
  }
  function v739(parentObj$$539, address$$31) {
    return parentObj$$539.backgroundY
  }
  function v738(parentObj$$538, address$$30) {
    var v8882 = parentObj$$538.memory;
    var v6068 = v8882[65345];
    var v1649 = 128 | v6068;
    var v1650 = parentObj$$538.modeSTAT;
    return v1649 | v1650
  }
  function v737(parentObj$$537, address$$29) {
    var v1651;
    var v6073 = parentObj$$537.channel3canPlay;
    if(v6073) {
      var v6069 = parentObj$$537.memory;
      var v10518 = parentObj$$537.channel3lastSampleLookup;
      var v8883 = v10518 >> 1;
      var v6070 = 65280 | v8883;
      v1651 = v6069[v6070]
    }else {
      var v6071 = parentObj$$537.memory;
      var v6072 = 65280 | address$$29;
      v1651 = v6071[v6072]
    }
    return v1651
  }
  function v736(parentObj$$536, address$$28) {
    var v1652;
    var v6077 = parentObj$$536.channel3canPlay;
    if(v6077) {
      var v6074 = parentObj$$536.memory;
      var v10519 = parentObj$$536.channel3lastSampleLookup;
      var v8884 = v10519 >> 1;
      var v6075 = 65280 | v8884;
      v1652 = v6074[v6075]
    }else {
      var v6076 = parentObj$$536.memory;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        v1652 = v6076[address$$28]
      }
    }
    return v1652
  }
  function v735(parentObj$$535, address$$27) {
    JAMScript.call(parentObj$$535.audioJIT, parentObj$$535, []);
    var v6078 = parentObj$$535.memory;
    var v1653 = v6078[65318];
    return 112 | v1653
  }
  function v734(parentObj$$534, address$$26) {
    var v6079 = parentObj$$534.memory;
    var v1654 = v6079[65315];
    return 191 | v1654
  }
  function v733(parentObj$$533, address$$25) {
    var v6080 = parentObj$$533.memory;
    var v1655 = v6080[65310];
    return 191 | v1655
  }
  function v732(parentObj$$532, address$$24) {
    return 255
  }
  function v731(parentObj$$531, address$$23) {
    var v6081 = parentObj$$531.memory;
    var v1656 = v6081[65308];
    return 159 | v1656
  }
  function v730(parentObj$$530, address$$22) {
    var v6082 = parentObj$$530.memory;
    var v1657 = v6082[65306];
    return 127 | v1657
  }
  function v729(parentObj$$529, address$$21) {
    var v6083 = parentObj$$529.memory;
    var v1658 = v6083[65305];
    return 191 | v1658
  }
  function v728(parentObj$$528, address$$20) {
    var v6084 = parentObj$$528.memory;
    var v1659 = v6084[65302];
    return 63 | v1659
  }
  function v727(parentObj$$527, address$$19) {
    var v6085 = parentObj$$527.memory;
    var v1660 = v6085[65300];
    return 191 | v1660
  }
  function v726(parentObj$$526, address$$18) {
    var v6086 = parentObj$$526.memory;
    var v1661 = v6086[65297];
    return 63 | v1661
  }
  function v725(parentObj$$525, address$$17) {
    var v6087 = parentObj$$525.memory;
    var v1662 = v6087[65296];
    return 128 | v1662
  }
  function v724(parentObj$$524, address$$16) {
    var v1663 = parentObj$$524.interruptsRequested;
    return 224 | v1663
  }
  function v723(parentObj$$523, address$$15) {
    var v6088 = parentObj$$523.memory;
    var v1664 = v6088[65287];
    return 248 | v1664
  }
  function v722(parentObj$$522, address$$14) {
    var v1665 = parentObj$$522.memory;
    var v10520 = parentObj$$522.memory;
    var v8885 = v10520[65284];
    var v10521 = parentObj$$522.DIVTicks;
    var v8886 = v10521 >> 8;
    var v6089 = v8885 + v8886;
    v1665[65284] = v6089 & 255;
    var v6090 = parentObj$$522;
    var v8887 = parentObj$$522.DIVTicks;
    v6090.DIVTicks = v8887 & 255;
    var v1666 = parentObj$$522.memory;
    return v1666[65284]
  }
  function v721(parentObj$$521, address$$13) {
    var v6091;
    var v10522 = parentObj$$521.serialTimer;
    var v8888 = v10522 <= 0;
    if(v8888) {
      v6091 = 126
    }else {
      v6091 = 254
    }
    var v1667 = v6091;
    var v6092 = parentObj$$521.memory;
    var v1668 = v6092[65282];
    return v1667 | v1668
  }
  function v720(parentObj$$520, address$$12) {
    var v6093;
    var v10523 = parentObj$$520.serialTimer;
    var v8889 = v10523 <= 0;
    if(v8889) {
      v6093 = 124
    }else {
      v6093 = 252
    }
    var v1669 = v6093;
    var v6094 = parentObj$$520.memory;
    var v1670 = v6094[65282];
    return v1669 | v1670
  }
  function v719(parentObj$$519, address$$11) {
    var v1671;
    var v10524 = parentObj$$519.memory;
    var v8890 = v10524[65282];
    var v6096 = v8890 < 128;
    if(v6096) {
      var v6095 = parentObj$$519.memory;
      v1671 = v6095[65281]
    }else {
      v1671 = 255
    }
    return v1671
  }
  function v718(parentObj$$518, address$$10) {
    var v6097 = parentObj$$518.memory;
    var v1672 = v6097[65280];
    return 192 | v1672
  }
  var index$$62 = 0;
  var v1759 = index$$62 <= 65535;
  for(;v1759;) {
    var v1758 = index$$62 < 16384;
    if(v1758) {
      var v1673 = this.memoryReader;
      v1673[index$$62] = this.memoryReadNormal
    }else {
      var v1757 = index$$62 < 32768;
      if(v1757) {
        var v1674 = this.memoryReader;
        v1674[index$$62] = this.memoryReadROM
      }else {
        var v1756 = index$$62 < 38912;
        if(v1756) {
          var v1675 = this.memoryReader;
          var v6098;
          var v8891 = this.cGBC;
          if(v8891) {
            v6098 = this.VRAMDATAReadCGBCPU
          }else {
            v6098 = this.VRAMDATAReadDMGCPU
          }
          v1675[index$$62] = v6098
        }else {
          var v1755 = index$$62 < 40960;
          if(v1755) {
            var v1676 = this.memoryReader;
            var v6099;
            var v8892 = this.cGBC;
            if(v8892) {
              v6099 = this.VRAMCHRReadCGBCPU
            }else {
              v6099 = this.VRAMCHRReadDMGCPU
            }
            v1676[index$$62] = v6099
          }else {
            var v6100 = index$$62 >= 40960;
            if(v6100) {
              v6100 = index$$62 < 49152
            }
            var v1754 = v6100;
            if(v1754) {
              var v10525 = this.numRAMBanks;
              var v10526 = 1 / 16;
              var v8893 = v10525 == v10526;
              if(v8893) {
                v8893 = index$$62 < 41472
              }
              var v6101 = v8893;
              var v8895 = !v6101;
              if(v8895) {
                var v8894 = this.numRAMBanks;
                v6101 = v8894 >= 1
              }
              var v1683 = v6101;
              if(v1683) {
                var v1681 = this.cMBC7;
                if(v1681) {
                  var v1677 = this.memoryReader;
                  v1677[index$$62] = this.memoryReadMBC7
                }else {
                  var v6102 = this.cMBC3;
                  var v1680 = !v6102;
                  if(v1680) {
                    var v1678 = this.memoryReader;
                    v1678[index$$62] = this.memoryReadMBC
                  }else {
                    var v1679 = this.memoryReader;
                    v1679[index$$62] = this.memoryReadMBC3
                  }
                }
              }else {
                var v1682 = this.memoryReader;
                v1682[index$$62] = this.memoryReadBAD
              }
            }else {
              var v6103 = index$$62 >= 49152;
              if(v6103) {
                v6103 = index$$62 < 57344
              }
              var v1753 = v6103;
              if(v1753) {
                var v8896 = this.cGBC;
                var v6104 = !v8896;
                var v8897 = !v6104;
                if(v8897) {
                  v6104 = index$$62 < 53248
                }
                var v1686 = v6104;
                if(v1686) {
                  var v1684 = this.memoryReader;
                  v1684[index$$62] = this.memoryReadNormal
                }else {
                  var v1685 = this.memoryReader;
                  v1685[index$$62] = this.memoryReadGBCMemory
                }
              }else {
                var v6105 = index$$62 >= 57344;
                if(v6105) {
                  v6105 = index$$62 < 65024
                }
                var v1752 = v6105;
                if(v1752) {
                  var v8898 = this.cGBC;
                  var v6106 = !v8898;
                  var v8899 = !v6106;
                  if(v8899) {
                    v6106 = index$$62 < 61440
                  }
                  var v1689 = v6106;
                  if(v1689) {
                    var v1687 = this.memoryReader;
                    v1687[index$$62] = this.memoryReadECHONormal
                  }else {
                    var v1688 = this.memoryReader;
                    v1688[index$$62] = this.memoryReadECHOGBCMemory
                  }
                }else {
                  var v1751 = index$$62 < 65184;
                  if(v1751) {
                    var v1690 = this.memoryReader;
                    v1690[index$$62] = this.memoryReadOAM
                  }else {
                    var v6107 = this.cGBC;
                    if(v6107) {
                      var v8900 = index$$62 >= 65184;
                      if(v8900) {
                        v8900 = index$$62 < 65280
                      }
                      v6107 = v8900
                    }
                    var v1750 = v6107;
                    if(v1750) {
                      var v1691 = this.memoryReader;
                      v1691[index$$62] = this.memoryReadNormal
                    }else {
                      var v1749 = index$$62 >= 65280;
                      if(v1749) {
                        switch(index$$62) {
                          case 65280:
                            var v1692 = this.memoryHighReader;
                            var v6108 = this.memoryReader;
                            v1692[0] = v6108[65280] = v718;
                            break;
                          case 65281:
                            var v1693 = this.memoryHighReader;
                            var v6109 = this.memoryReader;
                            v1693[1] = v6109[65281] = v719;
                            break;
                          case 65282:
                            var v1696 = this.cGBC;
                            if(v1696) {
                              var v1694 = this.memoryHighReader;
                              var v6110 = this.memoryReader;
                              v1694[2] = v6110[65282] = v720
                            }else {
                              var v1695 = this.memoryHighReader;
                              var v6111 = this.memoryReader;
                              v1695[2] = v6111[65282] = v721
                            }
                            break;
                          case 65284:
                            var v1697 = this.memoryHighReader;
                            var v6112 = this.memoryReader;
                            v1697[4] = v6112[65284] = v722;
                            break;
                          case 65287:
                            var v1698 = this.memoryHighReader;
                            var v6113 = this.memoryReader;
                            v1698[7] = v6113[65287] = v723;
                            break;
                          case 65295:
                            var v1699 = this.memoryHighReader;
                            var v6114 = this.memoryReader;
                            v1699[15] = v6114[65295] = v724;
                            break;
                          case 65296:
                            var v1700 = this.memoryHighReader;
                            var v6115 = this.memoryReader;
                            v1700[16] = v6115[65296] = v725;
                            break;
                          case 65297:
                            var v1701 = this.memoryHighReader;
                            var v6116 = this.memoryReader;
                            v1701[17] = v6116[65297] = v726;
                            break;
                          case 65299:
                            var v1702 = this.memoryHighReader;
                            var v6117 = this.memoryReader;
                            v1702[19] = v6117[65299] = this.memoryReadBAD;
                            break;
                          case 65300:
                            var v1703 = this.memoryHighReader;
                            var v6118 = this.memoryReader;
                            v1703[20] = v6118[65300] = v727;
                            break;
                          case 65302:
                            var v1704 = this.memoryHighReader;
                            var v6119 = this.memoryReader;
                            v1704[22] = v6119[65302] = v728;
                            break;
                          case 65304:
                            var v1705 = this.memoryHighReader;
                            var v6120 = this.memoryReader;
                            v1705[24] = v6120[65304] = this.memoryReadBAD;
                            break;
                          case 65305:
                            var v1706 = this.memoryHighReader;
                            var v6121 = this.memoryReader;
                            v1706[25] = v6121[65305] = v729;
                            break;
                          case 65306:
                            var v1707 = this.memoryHighReader;
                            var v6122 = this.memoryReader;
                            v1707[26] = v6122[65306] = v730;
                            break;
                          case 65307:
                            var v1708 = this.memoryHighReader;
                            var v6123 = this.memoryReader;
                            v1708[27] = v6123[65307] = this.memoryReadBAD;
                            break;
                          case 65308:
                            var v1709 = this.memoryHighReader;
                            var v6124 = this.memoryReader;
                            v1709[28] = v6124[65308] = v731;
                            break;
                          case 65309:
                            var v1710 = this.memoryHighReader;
                            var v6125 = this.memoryReader;
                            v1710[29] = v6125[65309] = v732;
                            break;
                          case 65310:
                            var v1711 = this.memoryHighReader;
                            var v6126 = this.memoryReader;
                            v1711[30] = v6126[65310] = v733;
                            break;
                          case 65311:
                          ;
                          case 65312:
                            var v1712 = this.memoryHighReader;
                            var v1713 = index$$62 & 255;
                            var v6127 = this.memoryReader;
                            v1712[v1713] = v6127[index$$62] = this.memoryReadBAD;
                            break;
                          case 65315:
                            var v1714 = this.memoryHighReader;
                            var v6128 = this.memoryReader;
                            v1714[35] = v6128[65315] = v734;
                            break;
                          case 65318:
                            var v1715 = this.memoryHighReader;
                            var v6129 = this.memoryReader;
                            v1715[38] = v6129[65318] = v735;
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
                            var v1716 = this.memoryHighReader;
                            var v1717 = index$$62 & 255;
                            var v6130 = this.memoryReader;
                            v1716[v1717] = v6130[index$$62] = this.memoryReadBAD;
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
                            var v1718 = this.memoryReader;
                            v1718[index$$62] = v736;
                            var v1719 = this.memoryHighReader;
                            var v1720 = index$$62 & 255;
                            v1719[v1720] = v737;
                            break;
                          case 65345:
                            var v1721 = this.memoryHighReader;
                            var v6131 = this.memoryReader;
                            v1721[65] = v6131[65345] = v738;
                            break;
                          case 65346:
                            var v1722 = this.memoryHighReader;
                            var v6132 = this.memoryReader;
                            v1722[66] = v6132[65346] = v739;
                            break;
                          case 65347:
                            var v1723 = this.memoryHighReader;
                            var v6133 = this.memoryReader;
                            v1723[67] = v6133[65347] = v740;
                            break;
                          case 65348:
                            var v1724 = this.memoryHighReader;
                            var v6134 = this.memoryReader;
                            v1724[68] = v6134[65348] = v741;
                            break;
                          case 65354:
                            var v1725 = this.memoryHighReader;
                            var v6135 = this.memoryReader;
                            v1725[74] = v6135[65354] = v742;
                            break;
                          case 65359:
                            var v1726 = this.memoryHighReader;
                            var v6136 = this.memoryReader;
                            v1726[79] = v6136[65359] = v743;
                            break;
                          case 65365:
                            var v1730 = this.cGBC;
                            if(v1730) {
                              var v1727 = this.memoryHighReader;
                              var v6137 = this.memoryReader;
                              v1727[85] = v6137[65365] = v744
                            }else {
                              var v1728 = this.memoryReader;
                              v1728[65365] = this.memoryReadNormal;
                              var v1729 = this.memoryHighReader;
                              v1729[85] = this.memoryHighReadNormal
                            }
                            break;
                          case 65366:
                            var v1734 = this.cGBC;
                            if(v1734) {
                              var v1731 = this.memoryHighReader;
                              var v6138 = this.memoryReader;
                              v1731[86] = v6138[65366] = v745
                            }else {
                              var v1732 = this.memoryReader;
                              v1732[65366] = this.memoryReadNormal;
                              var v1733 = this.memoryHighReader;
                              v1733[86] = this.memoryHighReadNormal
                            }
                            break;
                          case 65388:
                            var v1737 = this.cGBC;
                            if(v1737) {
                              var v1735 = this.memoryHighReader;
                              var v6139 = this.memoryReader;
                              v1735[108] = v6139[65388] = v746
                            }else {
                              var v1736 = this.memoryHighReader;
                              var v6140 = this.memoryReader;
                              v1736[108] = v6140[65388] = this.memoryReadBAD
                            }
                            break;
                          case 65392:
                            var v1740 = this.cGBC;
                            if(v1740) {
                              var v1738 = this.memoryHighReader;
                              var v6141 = this.memoryReader;
                              v1738[112] = v6141[65392] = v747
                            }else {
                              var v1739 = this.memoryHighReader;
                              var v6142 = this.memoryReader;
                              v1739[112] = v6142[65392] = this.memoryReadBAD
                            }
                            break;
                          case 65397:
                            var v1741 = this.memoryHighReader;
                            var v6143 = this.memoryReader;
                            v1741[117] = v6143[65397] = v748;
                            break;
                          case 65398:
                          ;
                          case 65399:
                            var v1742 = this.memoryHighReader;
                            var v1743 = index$$62 & 255;
                            var v6144 = this.memoryReader;
                            v1742[v1743] = v6144[index$$62] = v749;
                            break;
                          case 65535:
                            var v1744 = this.memoryHighReader;
                            var v6145 = this.memoryReader;
                            v1744[255] = v6145[65535] = v750;
                            break;
                          default:
                            var v1745 = this.memoryReader;
                            v1745[index$$62] = this.memoryReadNormal;
                            var v1746 = this.memoryHighReader;
                            var v1747 = index$$62 & 255;
                            v1746[v1747] = this.memoryHighReadNormal
                        }
                      }else {
                        var v1748 = this.memoryReader;
                        v1748[index$$62] = this.memoryReadBAD
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
    v1759 = index$$62 <= 65535
  }
  return
}
function v717(address$$9) {
  var v1760 = this.memoryHighReader;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11994 = [[this, address$$9], v1760, v1760[address$$9]]
  }
  return JAMScript.call(v11994[2], v11994[1], v11994[0])
}
function v716(address$$8) {
  var v1761 = this.memoryReader;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11995 = [[this, address$$8], v1761, v1761[address$$8]]
  }
  return JAMScript.call(v11995[2], v11995[1], v11995[0])
}
function v715() {
  var v6146 = this.halt;
  var v1789 = !v6146;
  if(v1789) {
    this.halt = true;
    var currentClocks = -1;
    var temp_var$$20 = 0;
    var v1782 = this.LCDisOn;
    if(v1782) {
      var v8901 = this.interruptsEnabled;
      var v6147 = v8901 & 1;
      var v1764 = v6147 == 1;
      if(v1764) {
        var v11188;
        var v11642 = this.modeSTAT;
        var v11479 = v11642 == 1;
        if(v11479) {
          v11188 = 298
        }else {
          v11188 = 144
        }
        var v10527 = v11188;
        var v10528 = this.actualScanLine;
        var v8902 = v10527 - v10528;
        var v6148 = 456 * v8902;
        var v6149 = this.LCDTicks;
        var v1762 = v6148 - v6149;
        var v1763 = this.doubleSpeedShifter;
        currentClocks = v1762 << v1763
      }
      var v8903 = this.interruptsEnabled;
      var v6150 = v8903 & 2;
      var v1781 = v6150 == 2;
      if(v1781) {
        var v1768 = this.mode0TriggerSTAT;
        if(v1768) {
          var v6151 = JAMScript.call(this.clocksUntilMode0, this, []);
          var v6152 = this.LCDTicks;
          var v1765 = v6151 - v6152;
          var v1766 = this.doubleSpeedShifter;
          temp_var$$20 = v1765 << v1766;
          var v6153 = temp_var$$20 <= currentClocks;
          var v8904 = !v6153;
          if(v8904) {
            v6153 = currentClocks == -1
          }
          var v1767 = v6153;
          if(v1767) {
            currentClocks = temp_var$$20
          }
        }
        var v6154 = this.mode1TriggerSTAT;
        if(v6154) {
          var v10529 = this.interruptsEnabled;
          var v8905 = v10529 & 1;
          v6154 = v8905 == 0
        }
        var v1772 = v6154;
        if(v1772) {
          var v11189;
          var v11643 = this.modeSTAT;
          var v11480 = v11643 == 1;
          if(v11480) {
            v11189 = 298
          }else {
            v11189 = 144
          }
          var v10530 = v11189;
          var v10531 = this.actualScanLine;
          var v8906 = v10530 - v10531;
          var v6155 = 456 * v8906;
          var v6156 = this.LCDTicks;
          var v1769 = v6155 - v6156;
          var v1770 = this.doubleSpeedShifter;
          temp_var$$20 = v1769 << v1770;
          var v6157 = temp_var$$20 <= currentClocks;
          var v8907 = !v6157;
          if(v8907) {
            v6157 = currentClocks == -1
          }
          var v1771 = v6157;
          if(v1771) {
            currentClocks = temp_var$$20
          }
        }
        var v1776 = this.mode2TriggerSTAT;
        if(v1776) {
          var v8908;
          var v11190 = this.actualScanLine;
          var v10533 = v11190 >= 143;
          if(v10533) {
            var v11191 = this.actualScanLine;
            var v10532 = 154 - v11191;
            v8908 = 456 * v10532
          }else {
            v8908 = 456
          }
          var v6158 = v8908;
          var v6159 = this.LCDTicks;
          var v1773 = v6158 - v6159;
          var v1774 = this.doubleSpeedShifter;
          temp_var$$20 = v1773 << v1774;
          var v6160 = temp_var$$20 <= currentClocks;
          var v8909 = !v6160;
          if(v8909) {
            v6160 = currentClocks == -1
          }
          var v1775 = v6160;
          if(v1775) {
            currentClocks = temp_var$$20
          }
        }
        var v6161 = this.LYCMatchTriggerSTAT;
        if(v6161) {
          var v10534 = this.memory;
          var v8910 = v10534[65349];
          v6161 = v8910 <= 153
        }
        var v1780 = v6161;
        if(v1780) {
          var v6162 = JAMScript.call(this.clocksUntilLYCMatch, this, []);
          var v6163 = this.LCDTicks;
          var v1777 = v6162 - v6163;
          var v1778 = this.doubleSpeedShifter;
          temp_var$$20 = v1777 << v1778;
          var v6164 = temp_var$$20 <= currentClocks;
          var v8911 = !v6164;
          if(v8911) {
            v6164 = currentClocks == -1
          }
          var v1779 = v6164;
          if(v1779) {
            currentClocks = temp_var$$20
          }
        }
      }
    }
    var v6165 = this.TIMAEnabled;
    if(v6165) {
      var v10535 = this.interruptsEnabled;
      var v8912 = v10535 & 4;
      v6165 = v8912 == 4
    }
    var v1786 = v6165;
    if(v1786) {
      var v10536 = this.memory;
      var v8913 = v10536[65285];
      var v6166 = 256 - v8913;
      var v6167 = this.TACClocker;
      var v1783 = v6166 * v6167;
      var v1784 = this.timerTicks;
      temp_var$$20 = v1783 - v1784;
      var v6168 = temp_var$$20 <= currentClocks;
      var v8914 = !v6168;
      if(v8914) {
        v6168 = currentClocks == -1
      }
      var v1785 = v6168;
      if(v1785) {
        currentClocks = temp_var$$20
      }
    }
    var v8915 = this.serialTimer;
    var v6169 = v8915 > 0;
    if(v6169) {
      var v10537 = this.interruptsEnabled;
      var v8916 = v10537 & 8;
      v6169 = v8916 == 8
    }
    var v1788 = v6169;
    if(v1788) {
      var v8917 = this.serialTimer;
      var v6170 = v8917 <= currentClocks;
      var v8918 = !v6170;
      if(v8918) {
        v6170 = currentClocks == -1
      }
      var v1787 = v6170;
      if(v1787) {
        currentClocks = this.serialTimer
      }
    }
  }else {
    currentClocks = this.remainingClocks
  }
  var v6171 = this.CPUCyclesTotal;
  var v6172 = this.emulatorTicks;
  var v1790 = v6171 - v6172;
  var v1791 = this.doubleSpeedShifter;
  var maxClocks = v1790 << v1791;
  var v1796 = currentClocks >= 0;
  if(v1796) {
    var v1795 = currentClocks <= maxClocks;
    if(v1795) {
      var v1792 = this.CPUTicks;
      var v11769 = Math.max(currentClocks, v1792);
      this.CPUTicks = v11769;
      JAMScript.call(this.updateCoreFull, this, []);
      this.halt = false;
      this.CPUTicks = 0
    }else {
      var v1793 = this.CPUTicks;
      var v11770 = Math.max(maxClocks, v1793);
      this.CPUTicks = v11770;
      var v1794 = this.CPUTicks;
      this.remainingClocks = currentClocks - v1794
    }
  }else {
    var v6173 = this.CPUTicks;
    this.CPUTicks = v6173 + maxClocks
  }
  return
}
function v714() {
  var v1798 = this.IME;
  if(v1798) {
    var v6174 = this.interruptsEnabled;
    var v6175 = this.interruptsRequested;
    var v1797 = v6174 & v6175;
    this.IRQLineMatched = v1797 & 31
  }
  return
}
function v713() {
  var bitShift = 0;
  var testbit = 1;
  var v1812 = bitShift < 5;
  do {
    var v8919 = this.IRQLineMatched;
    var v6176 = testbit & v8919;
    var v1810 = v6176 == testbit;
    if(v1810) {
      this.IME = false;
      var v6177 = this.interruptsRequested;
      this.interruptsRequested = v6177 - testbit;
      this.IRQLineMatched = 0;
      this.CPUTicks = 20;
      var v6178 = this.stackPointer;
      var v1799 = v6178 - 1;
      this.stackPointer = v1799 & 65535;
      var v1800 = this.memoryWriter;
      var v1801 = this.stackPointer;
      var v1802 = this.stackPointer;
      var v6179 = this.programCounter;
      var v1803 = v6179 >> 8;
      JAMScript.call(v1800[v1801], v1800, [this, v1802, v1803]);
      var v6180 = this.stackPointer;
      var v1804 = v6180 - 1;
      this.stackPointer = v1804 & 65535;
      var v1805 = this.memoryWriter;
      var v1806 = this.stackPointer;
      var v1807 = this.stackPointer;
      var v6181 = this.programCounter;
      var v1808 = v6181 & 255;
      JAMScript.call(v1805[v1806], v1805, [this, v1807, v1808]);
      var v1809 = bitShift << 3;
      this.programCounter = 64 | v1809;
      JAMScript.call(this.updateCore, this, []);
      return
    }
    var v1811 = bitShift = bitShift + 1;
    testbit = 1 << v1811;
    v1812 = bitShift < 5
  }while(v1812);
  return
}
function v712() {
  JAMScript.call(this.graphicsJIT, this, []);
  JAMScript.call(this.renderMidScanLine, this, []);
  return
}
function v711() {
  var v6182 = this.queuedScanLines;
  var v1814 = v6182 < 144;
  if(v1814) {
    var v6183 = this.queuedScanLines;
    this.queuedScanLines = v6183 + 1
  }else {
    this.currentX = 0;
    this.midScanlineOffset = -1;
    var v6184 = this.lastUnrenderedLine;
    var v1813 = v6184 < 143;
    if(v1813) {
      var v6185 = this.lastUnrenderedLine;
      this.lastUnrenderedLine = v6185 + 1
    }else {
      this.lastUnrenderedLine = 0
    }
  }
  return
}
function v710() {
  var v6186 = this.queuedScanLines;
  var v1817 = v6186 > 0;
  for(;v1817;) {
    var v1815 = this.lastUnrenderedLine;
    JAMScript.call(this.renderScanLine, this, [v1815]);
    var v6187 = this.lastUnrenderedLine;
    var v1816 = v6187 < 143;
    if(v1816) {
      var v6188 = this.lastUnrenderedLine;
      this.lastUnrenderedLine = v6188 + 1
    }else {
      this.lastUnrenderedLine = 0
    }
    var v6189 = this.queuedScanLines;
    this.queuedScanLines = v6189 - 1;
    var v6190 = this.queuedScanLines;
    v1817 = v6190 > 0
  }
  return
}
function v709() {
  var v6191 = this.totalLinesPassed;
  var v6192 = this.queuedScanLines;
  this.totalLinesPassed = v6191 + v6192;
  JAMScript.call(this.graphicsJITScanlineGroup, this, []);
  return
}
function v708() {
  var v1818 = this.LCDisOn;
  if(v1818) {
    this.totalLinesPassed = 0;
    JAMScript.call(this.graphicsJITScanlineGroup, this, [])
  }
  return
}
function v707(address$$7) {
  var v8920 = this.memory;
  var v8921 = 1 | address$$7;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6193 = v8920[v8921]
  }
  var v1819 = v6193 << 8;
  var v6194 = this.memory;
  var v6195 = 40958 & address$$7;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1820 = v6194[v6195]
  }
  var lineCopy$$5 = v1819 | v1820;
  address$$7 = address$$7 & 8190;
  var v1821 = this.tileCache;
  var v1822 = address$$7 >> 4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock1$$4 = v1821[v1822]
  }
  var v1823 = this.tileCache;
  var v6196 = address$$7 >> 4;
  var v1824 = 512 | v6196;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock2$$4 = v1823[v1824]
  }
  var v1825 = this.tileCache;
  var v6197 = address$$7 >> 4;
  var v1826 = 1024 | v6197;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock3$$4 = v1825[v1826]
  }
  var v1827 = this.tileCache;
  var v6198 = address$$7 >> 4;
  var v1828 = 1536 | v6198;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock4$$4 = v1827[v1828]
  }
  var v1829 = address$$7 & 14;
  address$$7 = v1829 << 2;
  var addressFlipped$$4 = 56 - address$$7;
  var v1830 = addressFlipped$$4;
  var v6199 = address$$7;
  var v8922 = addressFlipped$$4 | 7;
  var v10538 = address$$7 | 7;
  var v11481 = lineCopy$$5 & 256;
  var v11192 = v11481 >> 7;
  var v11193 = lineCopy$$5 & 1;
  tileBlock4$$4[v1830] = tileBlock2$$4[v6199] = tileBlock3$$4[v8922] = tileBlock1$$4[v10538] = v11192 | v11193;
  var v1831 = addressFlipped$$4 | 1;
  var v6200 = address$$7 | 1;
  var v8923 = addressFlipped$$4 | 6;
  var v10539 = address$$7 | 6;
  var v11482 = lineCopy$$5 & 512;
  var v11194 = v11482 >> 8;
  var v11483 = lineCopy$$5 & 2;
  var v11195 = v11483 >> 1;
  tileBlock4$$4[v1831] = tileBlock2$$4[v6200] = tileBlock3$$4[v8923] = tileBlock1$$4[v10539] = v11194 | v11195;
  var v1832 = addressFlipped$$4 | 2;
  var v6201 = address$$7 | 2;
  var v8924 = addressFlipped$$4 | 5;
  var v10540 = address$$7 | 5;
  var v11484 = lineCopy$$5 & 1024;
  var v11196 = v11484 >> 9;
  var v11485 = lineCopy$$5 & 4;
  var v11197 = v11485 >> 2;
  tileBlock4$$4[v1832] = tileBlock2$$4[v6201] = tileBlock3$$4[v8924] = tileBlock1$$4[v10540] = v11196 | v11197;
  var v1833 = addressFlipped$$4 | 3;
  var v6202 = address$$7 | 3;
  var v8925 = addressFlipped$$4 | 4;
  var v10541 = address$$7 | 4;
  var v11486 = lineCopy$$5 & 2048;
  var v11198 = v11486 >> 10;
  var v11487 = lineCopy$$5 & 8;
  var v11199 = v11487 >> 3;
  tileBlock4$$4[v1833] = tileBlock2$$4[v6202] = tileBlock3$$4[v8925] = tileBlock1$$4[v10541] = v11198 | v11199;
  var v1834 = addressFlipped$$4 | 4;
  var v6203 = address$$7 | 4;
  var v8926 = addressFlipped$$4 | 3;
  var v10542 = address$$7 | 3;
  var v11488 = lineCopy$$5 & 4096;
  var v11200 = v11488 >> 11;
  var v11489 = lineCopy$$5 & 16;
  var v11201 = v11489 >> 4;
  tileBlock4$$4[v1834] = tileBlock2$$4[v6203] = tileBlock3$$4[v8926] = tileBlock1$$4[v10542] = v11200 | v11201;
  var v1835 = addressFlipped$$4 | 5;
  var v6204 = address$$7 | 5;
  var v8927 = addressFlipped$$4 | 2;
  var v10543 = address$$7 | 2;
  var v11490 = lineCopy$$5 & 8192;
  var v11202 = v11490 >> 12;
  var v11491 = lineCopy$$5 & 32;
  var v11203 = v11491 >> 5;
  tileBlock4$$4[v1835] = tileBlock2$$4[v6204] = tileBlock3$$4[v8927] = tileBlock1$$4[v10543] = v11202 | v11203;
  var v1836 = addressFlipped$$4 | 6;
  var v6205 = address$$7 | 6;
  var v8928 = addressFlipped$$4 | 1;
  var v10544 = address$$7 | 1;
  var v11492 = lineCopy$$5 & 16384;
  var v11204 = v11492 >> 13;
  var v11493 = lineCopy$$5 & 64;
  var v11205 = v11493 >> 6;
  tileBlock4$$4[v1836] = tileBlock2$$4[v6205] = tileBlock3$$4[v8928] = tileBlock1$$4[v10544] = v11204 | v11205;
  var v1837 = addressFlipped$$4 | 7;
  var v6206 = address$$7 | 7;
  var v10545 = lineCopy$$5 & 32768;
  var v8929 = v10545 >> 14;
  var v10546 = lineCopy$$5 & 128;
  var v8930 = v10546 >> 7;
  tileBlock4$$4[v1837] = tileBlock2$$4[v6206] = tileBlock3$$4[addressFlipped$$4] = JAMScript.set(tileBlock1$$4, address$$7, v8929 | v8930);
  return
}
function v706(vramAddress$$1) {
  var address$$6 = vramAddress$$1 >> 4;
  var v1838 = this.tileCache;
  var v1839 = 2048 | address$$6;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock1$$3 = v1838[v1839]
  }
  var v1840 = this.tileCache;
  var v1841 = 2560 | address$$6;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock2$$3 = v1840[v1841]
  }
  var v1842 = this.tileCache;
  var v1843 = 3072 | address$$6;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock3$$3 = v1842[v1843]
  }
  var v1844 = this.tileCache;
  var v1845 = 3584 | address$$6;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock4$$3 = v1844[v1845]
  }
  var lineCopy$$4 = 0;
  address$$6 = 0;
  var addressFlipped$$3 = 56;
  var v1856 = addressFlipped$$3 > -1;
  do {
    var v8931 = this.VRAM;
    var v8932 = 1 | vramAddress$$1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6207 = v8931[v8932]
    }
    var v1846 = v6207 << 8;
    var v6208 = this.VRAM;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1847 = v6208[vramAddress$$1]
    }
    lineCopy$$4 = v1846 | v1847;
    var v1848 = addressFlipped$$3;
    var v6209 = address$$6;
    var v8933 = addressFlipped$$3 | 7;
    var v10547 = address$$6 | 7;
    var v11494 = lineCopy$$4 & 256;
    var v11206 = v11494 >> 7;
    var v11207 = lineCopy$$4 & 1;
    tileBlock4$$3[v1848] = tileBlock2$$3[v6209] = tileBlock3$$3[v8933] = tileBlock1$$3[v10547] = v11206 | v11207;
    var v1849 = addressFlipped$$3 | 1;
    var v6210 = address$$6 | 1;
    var v8934 = addressFlipped$$3 | 6;
    var v10548 = address$$6 | 6;
    var v11495 = lineCopy$$4 & 512;
    var v11208 = v11495 >> 8;
    var v11496 = lineCopy$$4 & 2;
    var v11209 = v11496 >> 1;
    tileBlock4$$3[v1849] = tileBlock2$$3[v6210] = tileBlock3$$3[v8934] = tileBlock1$$3[v10548] = v11208 | v11209;
    var v1850 = addressFlipped$$3 | 2;
    var v6211 = address$$6 | 2;
    var v8935 = addressFlipped$$3 | 5;
    var v10549 = address$$6 | 5;
    var v11497 = lineCopy$$4 & 1024;
    var v11210 = v11497 >> 9;
    var v11498 = lineCopy$$4 & 4;
    var v11211 = v11498 >> 2;
    tileBlock4$$3[v1850] = tileBlock2$$3[v6211] = tileBlock3$$3[v8935] = tileBlock1$$3[v10549] = v11210 | v11211;
    var v1851 = addressFlipped$$3 | 3;
    var v6212 = address$$6 | 3;
    var v8936 = addressFlipped$$3 | 4;
    var v10550 = address$$6 | 4;
    var v11499 = lineCopy$$4 & 2048;
    var v11212 = v11499 >> 10;
    var v11500 = lineCopy$$4 & 8;
    var v11213 = v11500 >> 3;
    tileBlock4$$3[v1851] = tileBlock2$$3[v6212] = tileBlock3$$3[v8936] = tileBlock1$$3[v10550] = v11212 | v11213;
    var v1852 = addressFlipped$$3 | 4;
    var v6213 = address$$6 | 4;
    var v8937 = addressFlipped$$3 | 3;
    var v10551 = address$$6 | 3;
    var v11501 = lineCopy$$4 & 4096;
    var v11214 = v11501 >> 11;
    var v11502 = lineCopy$$4 & 16;
    var v11215 = v11502 >> 4;
    tileBlock4$$3[v1852] = tileBlock2$$3[v6213] = tileBlock3$$3[v8937] = tileBlock1$$3[v10551] = v11214 | v11215;
    var v1853 = addressFlipped$$3 | 5;
    var v6214 = address$$6 | 5;
    var v8938 = addressFlipped$$3 | 2;
    var v10552 = address$$6 | 2;
    var v11503 = lineCopy$$4 & 8192;
    var v11216 = v11503 >> 12;
    var v11504 = lineCopy$$4 & 32;
    var v11217 = v11504 >> 5;
    tileBlock4$$3[v1853] = tileBlock2$$3[v6214] = tileBlock3$$3[v8938] = tileBlock1$$3[v10552] = v11216 | v11217;
    var v1854 = addressFlipped$$3 | 6;
    var v6215 = address$$6 | 6;
    var v8939 = addressFlipped$$3 | 1;
    var v10553 = address$$6 | 1;
    var v11505 = lineCopy$$4 & 16384;
    var v11218 = v11505 >> 13;
    var v11506 = lineCopy$$4 & 64;
    var v11219 = v11506 >> 6;
    tileBlock4$$3[v1854] = tileBlock2$$3[v6215] = tileBlock3$$3[v8939] = tileBlock1$$3[v10553] = v11218 | v11219;
    var v1855 = addressFlipped$$3 | 7;
    var v6216 = address$$6 | 7;
    var v10554 = lineCopy$$4 & 32768;
    var v8940 = v10554 >> 14;
    var v10555 = lineCopy$$4 & 128;
    var v8941 = v10555 >> 7;
    tileBlock4$$3[v1855] = tileBlock2$$3[v6216] = tileBlock3$$3[addressFlipped$$3] = tileBlock1$$3[address$$6] = v8940 | v8941;
    address$$6 = address$$6 + 8;
    addressFlipped$$3 = addressFlipped$$3 - 8;
    vramAddress$$1 = vramAddress$$1 + 2;
    v1856 = addressFlipped$$3 > -1
  }while(v1856);
  return
}
function v705(address$$5) {
  var v8942 = this.VRAM;
  var v8943 = 1 | address$$5;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6217 = v8942[v8943]
  }
  var v1857 = v6217 << 8;
  var v6218 = this.VRAM;
  var v6219 = 8190 & address$$5;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1858 = v6218[v6219]
  }
  var lineCopy$$3 = v1857 | v1858;
  var v1859 = this.tileCache;
  var v6220 = address$$5 >> 4;
  var v1860 = 2048 | v6220;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock1$$2 = v1859[v1860]
  }
  var v1861 = this.tileCache;
  var v6221 = address$$5 >> 4;
  var v1862 = 2560 | v6221;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock2$$2 = v1861[v1862]
  }
  var v1863 = this.tileCache;
  var v6222 = address$$5 >> 4;
  var v1864 = 3072 | v6222;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock3$$2 = v1863[v1864]
  }
  var v1865 = this.tileCache;
  var v6223 = address$$5 >> 4;
  var v1866 = 3584 | v6223;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock4$$2 = v1865[v1866]
  }
  var v1867 = address$$5 & 14;
  address$$5 = v1867 << 2;
  var addressFlipped$$2 = 56 - address$$5;
  var v1868 = addressFlipped$$2;
  var v6224 = address$$5;
  var v8944 = addressFlipped$$2 | 7;
  var v10556 = address$$5 | 7;
  var v11507 = lineCopy$$3 & 256;
  var v11220 = v11507 >> 7;
  var v11221 = lineCopy$$3 & 1;
  tileBlock4$$2[v1868] = tileBlock2$$2[v6224] = tileBlock3$$2[v8944] = tileBlock1$$2[v10556] = v11220 | v11221;
  var v1869 = addressFlipped$$2 | 1;
  var v6225 = address$$5 | 1;
  var v8945 = addressFlipped$$2 | 6;
  var v10557 = address$$5 | 6;
  var v11508 = lineCopy$$3 & 512;
  var v11222 = v11508 >> 8;
  var v11509 = lineCopy$$3 & 2;
  var v11223 = v11509 >> 1;
  tileBlock4$$2[v1869] = tileBlock2$$2[v6225] = tileBlock3$$2[v8945] = tileBlock1$$2[v10557] = v11222 | v11223;
  var v1870 = addressFlipped$$2 | 2;
  var v6226 = address$$5 | 2;
  var v8946 = addressFlipped$$2 | 5;
  var v10558 = address$$5 | 5;
  var v11510 = lineCopy$$3 & 1024;
  var v11224 = v11510 >> 9;
  var v11511 = lineCopy$$3 & 4;
  var v11225 = v11511 >> 2;
  tileBlock4$$2[v1870] = tileBlock2$$2[v6226] = tileBlock3$$2[v8946] = tileBlock1$$2[v10558] = v11224 | v11225;
  var v1871 = addressFlipped$$2 | 3;
  var v6227 = address$$5 | 3;
  var v8947 = addressFlipped$$2 | 4;
  var v10559 = address$$5 | 4;
  var v11512 = lineCopy$$3 & 2048;
  var v11226 = v11512 >> 10;
  var v11513 = lineCopy$$3 & 8;
  var v11227 = v11513 >> 3;
  tileBlock4$$2[v1871] = tileBlock2$$2[v6227] = tileBlock3$$2[v8947] = tileBlock1$$2[v10559] = v11226 | v11227;
  var v1872 = addressFlipped$$2 | 4;
  var v6228 = address$$5 | 4;
  var v8948 = addressFlipped$$2 | 3;
  var v10560 = address$$5 | 3;
  var v11514 = lineCopy$$3 & 4096;
  var v11228 = v11514 >> 11;
  var v11515 = lineCopy$$3 & 16;
  var v11229 = v11515 >> 4;
  tileBlock4$$2[v1872] = tileBlock2$$2[v6228] = tileBlock3$$2[v8948] = tileBlock1$$2[v10560] = v11228 | v11229;
  var v1873 = addressFlipped$$2 | 5;
  var v6229 = address$$5 | 5;
  var v8949 = addressFlipped$$2 | 2;
  var v10561 = address$$5 | 2;
  var v11516 = lineCopy$$3 & 8192;
  var v11230 = v11516 >> 12;
  var v11517 = lineCopy$$3 & 32;
  var v11231 = v11517 >> 5;
  tileBlock4$$2[v1873] = tileBlock2$$2[v6229] = tileBlock3$$2[v8949] = tileBlock1$$2[v10561] = v11230 | v11231;
  var v1874 = addressFlipped$$2 | 6;
  var v6230 = address$$5 | 6;
  var v8950 = addressFlipped$$2 | 1;
  var v10562 = address$$5 | 1;
  var v11518 = lineCopy$$3 & 16384;
  var v11232 = v11518 >> 13;
  var v11519 = lineCopy$$3 & 64;
  var v11233 = v11519 >> 6;
  tileBlock4$$2[v1874] = tileBlock2$$2[v6230] = tileBlock3$$2[v8950] = tileBlock1$$2[v10562] = v11232 | v11233;
  var v1875 = addressFlipped$$2 | 7;
  var v6231 = address$$5 | 7;
  var v10563 = lineCopy$$3 & 32768;
  var v8951 = v10563 >> 14;
  var v10564 = lineCopy$$3 & 128;
  var v8952 = v10564 >> 7;
  tileBlock4$$2[v1875] = tileBlock2$$2[v6231] = tileBlock3$$2[addressFlipped$$2] = JAMScript.set(tileBlock1$$2, address$$5, v8951 | v8952);
  return
}
function v704(vramAddress) {
  var address$$4 = vramAddress >> 4;
  var v1876 = this.tileCache;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock1$$1 = v1876[address$$4]
  }
  var v1877 = this.tileCache;
  var v1878 = 512 | address$$4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock2$$1 = v1877[v1878]
  }
  var v1879 = this.tileCache;
  var v1880 = 1024 | address$$4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock3$$1 = v1879[v1880]
  }
  var v1881 = this.tileCache;
  var v1882 = 1536 | address$$4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock4$$1 = v1881[v1882]
  }
  var lineCopy$$2 = 0;
  vramAddress = vramAddress | 32768;
  address$$4 = 0;
  var addressFlipped$$1 = 56;
  var v1893 = addressFlipped$$1 > -1;
  do {
    var v8953 = this.memory;
    var v8954 = 1 | vramAddress;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6232 = v8953[v8954]
    }
    var v1883 = v6232 << 8;
    var v6233 = this.memory;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1884 = v6233[vramAddress]
    }
    lineCopy$$2 = v1883 | v1884;
    var v1885 = addressFlipped$$1;
    var v6234 = address$$4;
    var v8955 = addressFlipped$$1 | 7;
    var v10565 = address$$4 | 7;
    var v11520 = lineCopy$$2 & 256;
    var v11234 = v11520 >> 7;
    var v11235 = lineCopy$$2 & 1;
    tileBlock4$$1[v1885] = tileBlock2$$1[v6234] = tileBlock3$$1[v8955] = tileBlock1$$1[v10565] = v11234 | v11235;
    var v1886 = addressFlipped$$1 | 1;
    var v6235 = address$$4 | 1;
    var v8956 = addressFlipped$$1 | 6;
    var v10566 = address$$4 | 6;
    var v11521 = lineCopy$$2 & 512;
    var v11236 = v11521 >> 8;
    var v11522 = lineCopy$$2 & 2;
    var v11237 = v11522 >> 1;
    tileBlock4$$1[v1886] = tileBlock2$$1[v6235] = tileBlock3$$1[v8956] = tileBlock1$$1[v10566] = v11236 | v11237;
    var v1887 = addressFlipped$$1 | 2;
    var v6236 = address$$4 | 2;
    var v8957 = addressFlipped$$1 | 5;
    var v10567 = address$$4 | 5;
    var v11523 = lineCopy$$2 & 1024;
    var v11238 = v11523 >> 9;
    var v11524 = lineCopy$$2 & 4;
    var v11239 = v11524 >> 2;
    tileBlock4$$1[v1887] = tileBlock2$$1[v6236] = tileBlock3$$1[v8957] = tileBlock1$$1[v10567] = v11238 | v11239;
    var v1888 = addressFlipped$$1 | 3;
    var v6237 = address$$4 | 3;
    var v8958 = addressFlipped$$1 | 4;
    var v10568 = address$$4 | 4;
    var v11525 = lineCopy$$2 & 2048;
    var v11240 = v11525 >> 10;
    var v11526 = lineCopy$$2 & 8;
    var v11241 = v11526 >> 3;
    tileBlock4$$1[v1888] = tileBlock2$$1[v6237] = tileBlock3$$1[v8958] = tileBlock1$$1[v10568] = v11240 | v11241;
    var v1889 = addressFlipped$$1 | 4;
    var v6238 = address$$4 | 4;
    var v8959 = addressFlipped$$1 | 3;
    var v10569 = address$$4 | 3;
    var v11527 = lineCopy$$2 & 4096;
    var v11242 = v11527 >> 11;
    var v11528 = lineCopy$$2 & 16;
    var v11243 = v11528 >> 4;
    tileBlock4$$1[v1889] = tileBlock2$$1[v6238] = tileBlock3$$1[v8959] = tileBlock1$$1[v10569] = v11242 | v11243;
    var v1890 = addressFlipped$$1 | 5;
    var v6239 = address$$4 | 5;
    var v8960 = addressFlipped$$1 | 2;
    var v10570 = address$$4 | 2;
    var v11529 = lineCopy$$2 & 8192;
    var v11244 = v11529 >> 12;
    var v11530 = lineCopy$$2 & 32;
    var v11245 = v11530 >> 5;
    tileBlock4$$1[v1890] = tileBlock2$$1[v6239] = tileBlock3$$1[v8960] = tileBlock1$$1[v10570] = v11244 | v11245;
    var v1891 = addressFlipped$$1 | 6;
    var v6240 = address$$4 | 6;
    var v8961 = addressFlipped$$1 | 1;
    var v10571 = address$$4 | 1;
    var v11531 = lineCopy$$2 & 16384;
    var v11246 = v11531 >> 13;
    var v11532 = lineCopy$$2 & 64;
    var v11247 = v11532 >> 6;
    tileBlock4$$1[v1891] = tileBlock2$$1[v6240] = tileBlock3$$1[v8961] = tileBlock1$$1[v10571] = v11246 | v11247;
    var v1892 = addressFlipped$$1 | 7;
    var v6241 = address$$4 | 7;
    var v10572 = lineCopy$$2 & 32768;
    var v8962 = v10572 >> 14;
    var v10573 = lineCopy$$2 & 128;
    var v8963 = v10573 >> 7;
    tileBlock4$$1[v1892] = tileBlock2$$1[v6241] = tileBlock3$$1[addressFlipped$$1] = tileBlock1$$1[address$$4] = v8962 | v8963;
    address$$4 = address$$4 + 8;
    addressFlipped$$1 = addressFlipped$$1 - 8;
    vramAddress = vramAddress + 2;
    v1893 = addressFlipped$$1 > -1
  }while(v1893);
  return
}
function v703(address$$3) {
  var v8964 = this.memory;
  var v8965 = 1 | address$$3;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6242 = v8964[v8965]
  }
  var v1894 = v6242 << 8;
  var v6243 = this.memory;
  var v6244 = 40958 & address$$3;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1895 = v6243[v6244]
  }
  var lineCopy$$1 = v1894 | v1895;
  address$$3 = address$$3 & 8190;
  var v1896 = this.tileCache;
  var v1897 = address$$3 >> 4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock1 = v1896[v1897]
  }
  var v1898 = this.tileCache;
  var v6245 = address$$3 >> 4;
  var v1899 = 512 | v6245;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock2 = v1898[v1899]
  }
  var v1900 = this.tileCache;
  var v6246 = address$$3 >> 4;
  var v1901 = 1024 | v6246;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock3 = v1900[v1901]
  }
  var v1902 = this.tileCache;
  var v6247 = address$$3 >> 4;
  var v1903 = 1536 | v6247;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock4 = v1902[v1903]
  }
  var v1904 = address$$3 & 14;
  address$$3 = v1904 << 2;
  var addressFlipped = 56 - address$$3;
  var v1905 = addressFlipped;
  var v6248 = address$$3;
  var v8966 = addressFlipped | 7;
  var v10574 = address$$3 | 7;
  var v11533 = lineCopy$$1 & 256;
  var v11248 = v11533 >> 7;
  var v11249 = lineCopy$$1 & 1;
  tileBlock4[v1905] = tileBlock2[v6248] = tileBlock3[v8966] = tileBlock1[v10574] = v11248 | v11249;
  var v1906 = addressFlipped | 1;
  var v6249 = address$$3 | 1;
  var v8967 = addressFlipped | 6;
  var v10575 = address$$3 | 6;
  var v11534 = lineCopy$$1 & 512;
  var v11250 = v11534 >> 8;
  var v11535 = lineCopy$$1 & 2;
  var v11251 = v11535 >> 1;
  tileBlock4[v1906] = tileBlock2[v6249] = tileBlock3[v8967] = tileBlock1[v10575] = v11250 | v11251;
  var v1907 = addressFlipped | 2;
  var v6250 = address$$3 | 2;
  var v8968 = addressFlipped | 5;
  var v10576 = address$$3 | 5;
  var v11536 = lineCopy$$1 & 1024;
  var v11252 = v11536 >> 9;
  var v11537 = lineCopy$$1 & 4;
  var v11253 = v11537 >> 2;
  tileBlock4[v1907] = tileBlock2[v6250] = tileBlock3[v8968] = tileBlock1[v10576] = v11252 | v11253;
  var v1908 = addressFlipped | 3;
  var v6251 = address$$3 | 3;
  var v8969 = addressFlipped | 4;
  var v10577 = address$$3 | 4;
  var v11538 = lineCopy$$1 & 2048;
  var v11254 = v11538 >> 10;
  var v11539 = lineCopy$$1 & 8;
  var v11255 = v11539 >> 3;
  tileBlock4[v1908] = tileBlock2[v6251] = tileBlock3[v8969] = tileBlock1[v10577] = v11254 | v11255;
  var v1909 = addressFlipped | 4;
  var v6252 = address$$3 | 4;
  var v8970 = addressFlipped | 3;
  var v10578 = address$$3 | 3;
  var v11540 = lineCopy$$1 & 4096;
  var v11256 = v11540 >> 11;
  var v11541 = lineCopy$$1 & 16;
  var v11257 = v11541 >> 4;
  tileBlock4[v1909] = tileBlock2[v6252] = tileBlock3[v8970] = tileBlock1[v10578] = v11256 | v11257;
  var v1910 = addressFlipped | 5;
  var v6253 = address$$3 | 5;
  var v8971 = addressFlipped | 2;
  var v10579 = address$$3 | 2;
  var v11542 = lineCopy$$1 & 8192;
  var v11258 = v11542 >> 12;
  var v11543 = lineCopy$$1 & 32;
  var v11259 = v11543 >> 5;
  tileBlock4[v1910] = tileBlock2[v6253] = tileBlock3[v8971] = tileBlock1[v10579] = v11258 | v11259;
  var v1911 = addressFlipped | 6;
  var v6254 = address$$3 | 6;
  var v8972 = addressFlipped | 1;
  var v10580 = address$$3 | 1;
  var v11544 = lineCopy$$1 & 16384;
  var v11260 = v11544 >> 13;
  var v11545 = lineCopy$$1 & 64;
  var v11261 = v11545 >> 6;
  tileBlock4[v1911] = tileBlock2[v6254] = tileBlock3[v8972] = tileBlock1[v10580] = v11260 | v11261;
  var v1912 = addressFlipped | 7;
  var v6255 = address$$3 | 7;
  var v10581 = lineCopy$$1 & 32768;
  var v8973 = v10581 >> 14;
  var v10582 = lineCopy$$1 & 128;
  var v8974 = v10582 >> 7;
  tileBlock4[v1912] = tileBlock2[v6255] = tileBlock3[addressFlipped] = JAMScript.set(tileBlock1, address$$3, v8973 | v8974);
  return
}
function v702(address$$2) {
  var v8975 = this.memory;
  var v8976 = 1 | address$$2;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6256 = v8975[v8976]
  }
  var v1913 = v6256 << 8;
  var v6257 = this.memory;
  var v6258 = 40958 & address$$2;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1914 = v6257[v6258]
  }
  var lineCopy = v1913 | v1914;
  var v1915 = this.tileCache;
  var v6259 = address$$2 & 8176;
  var v1916 = v6259 >> 4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tileBlock = v1915[v1916]
  }
  var v1917 = address$$2 & 14;
  address$$2 = v1917 << 2;
  var v1918 = address$$2 | 7;
  var v8977 = lineCopy & 256;
  var v6260 = v8977 >> 7;
  var v6261 = lineCopy & 1;
  tileBlock[v1918] = v6260 | v6261;
  var v1919 = address$$2 | 6;
  var v8978 = lineCopy & 512;
  var v6262 = v8978 >> 8;
  var v8979 = lineCopy & 2;
  var v6263 = v8979 >> 1;
  tileBlock[v1919] = v6262 | v6263;
  var v1920 = address$$2 | 5;
  var v8980 = lineCopy & 1024;
  var v6264 = v8980 >> 9;
  var v8981 = lineCopy & 4;
  var v6265 = v8981 >> 2;
  tileBlock[v1920] = v6264 | v6265;
  var v1921 = address$$2 | 4;
  var v8982 = lineCopy & 2048;
  var v6266 = v8982 >> 10;
  var v8983 = lineCopy & 8;
  var v6267 = v8983 >> 3;
  tileBlock[v1921] = v6266 | v6267;
  var v1922 = address$$2 | 3;
  var v8984 = lineCopy & 4096;
  var v6268 = v8984 >> 11;
  var v8985 = lineCopy & 16;
  var v6269 = v8985 >> 4;
  tileBlock[v1922] = v6268 | v6269;
  var v1923 = address$$2 | 2;
  var v8986 = lineCopy & 8192;
  var v6270 = v8986 >> 12;
  var v8987 = lineCopy & 32;
  var v6271 = v8987 >> 5;
  tileBlock[v1923] = v6270 | v6271;
  var v1924 = address$$2 | 1;
  var v8988 = lineCopy & 16384;
  var v6272 = v8988 >> 13;
  var v8989 = lineCopy & 64;
  var v6273 = v8989 >> 6;
  tileBlock[v1924] = v6272 | v6273;
  var v6274 = lineCopy & 32768;
  var v1925 = v6274 >> 14;
  var v6275 = lineCopy & 128;
  var v1926 = v6275 >> 7;
  JAMScript.set(tileBlock, address$$2, v1925 | v1926);
  return
}
function v701(scanlineToRender$$9) {
  var v1973 = this.gfxSpriteShow;
  if(v1973) {
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
    var v1972 = this.gfxSpriteNormalHeight;
    if(v1972) {
      var v6276 = OAMAddress$$2 < 65184;
      if(v6276) {
        v6276 = spriteCount$$2 < 10
      }
      var v1947 = v6276;
      for(;v1947;) {
        var v6277 = this.memory;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1927 = v6277[OAMAddress$$2]
        }
        yoffset$$5 = lineAdjusted$$2 - v1927;
        var v6278 = yoffset$$5 & 7;
        var v1946 = v6278 == yoffset$$5;
        if(v1946) {
          var v6279 = this.memory;
          var v6280 = OAMAddress$$2 | 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v1928 = v6279[v6280]
          }
          xcoord$$1 = v1928 - 8;
          var v1929 = xcoord$$1 + 8;
          endX = Math.min(160, v1929);
          var v1930 = this.memory;
          var v1931 = OAMAddress$$2 | 3;
          attrCode$$5 = v1930[v1931];
          var v1932 = attrCode$$5 & 7;
          palette$$5 = v1932 << 2;
          var v1933 = this.tileCache;
          var v10583 = attrCode$$5 & 8;
          var v8990 = v10583 << 8;
          var v10584 = attrCode$$5 & 96;
          var v8991 = v10584 << 4;
          var v6281 = v8990 | v8991;
          var v8992 = this.memory;
          var v8993 = OAMAddress$$2 | 2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6282 = v8992[v8993]
          }
          var v1934 = v6281 | v6282;
          tile$$7 = v1933[v1934];
          var v1935;
          var v6283 = xcoord$$1 > 0;
          if(v6283) {
            v1935 = xcoord$$1
          }else {
            v1935 = 0
          }
          xCounter = v1935;
          var v6284 = yoffset$$5 << 3;
          xcoord$$1 = xcoord$$1 - v6284;
          var v1936 = this.pixelStart;
          currentPixel$$1 = v1936 + xCounter;
          var v1945 = xCounter < endX;
          for(;v1945;) {
            var v8994 = this.frameBuffer;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v6285 = v8994[currentPixel$$1]
            }
            var v1944 = v6285 >= 33554432;
            if(v1944) {
              var v1937 = xCounter - xcoord$$1;
              data$$31 = tile$$7[v1937];
              var v1939 = data$$31 > 0;
              if(v1939) {
                var v1938 = this.frameBuffer;
                var v6286 = this.gbcOBJPalette;
                var v6287 = palette$$5 | data$$31;
                JAMScript.set(v1938, currentPixel$$1, v6286[v6287])
              }
            }else {
              var v8995 = this.frameBuffer;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6288 = v8995[currentPixel$$1]
              }
              var v1943 = v6288 < 16777216;
              if(v1943) {
                var v1940 = xCounter - xcoord$$1;
                data$$31 = tile$$7[v1940];
                var v6289 = data$$31 > 0;
                if(v6289) {
                  v6289 = attrCode$$5 < 128
                }
                var v1942 = v6289;
                if(v1942) {
                  var v1941 = this.frameBuffer;
                  var v6290 = this.gbcOBJPalette;
                  var v6291 = palette$$5 | data$$31;
                  JAMScript.set(v1941, currentPixel$$1, v6290[v6291])
                }
              }
            }
            xCounter = xCounter + 1;
            currentPixel$$1 = currentPixel$$1 + 1;
            v1945 = xCounter < endX
          }
          spriteCount$$2 = spriteCount$$2 + 1
        }
        OAMAddress$$2 = OAMAddress$$2 + 4;
        var v6292 = OAMAddress$$2 < 65184;
        if(v6292) {
          v6292 = spriteCount$$2 < 10
        }
        v1947 = v6292
      }
    }else {
      var v6293 = OAMAddress$$2 < 65184;
      if(v6293) {
        v6293 = spriteCount$$2 < 10
      }
      var v1971 = v6293;
      for(;v1971;) {
        var v6294 = this.memory;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v1948 = v6294[OAMAddress$$2]
        }
        yoffset$$5 = lineAdjusted$$2 - v1948;
        var v6295 = yoffset$$5 & 15;
        var v1970 = v6295 == yoffset$$5;
        if(v1970) {
          var v6296 = this.memory;
          var v6297 = OAMAddress$$2 | 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v1949 = v6296[v6297]
          }
          xcoord$$1 = v1949 - 8;
          var v1950 = xcoord$$1 + 8;
          endX = Math.min(160, v1950);
          var v1951 = this.memory;
          var v1952 = OAMAddress$$2 | 3;
          attrCode$$5 = v1951[v1952];
          var v1953 = attrCode$$5 & 7;
          palette$$5 = v1953 << 2;
          var v6298 = attrCode$$5 & 64;
          var v8996 = yoffset$$5 << 3;
          var v6299 = 64 & v8996;
          var v1958 = v6298 == v6299;
          if(v1958) {
            var v1954 = this.tileCache;
            var v10585 = attrCode$$5 & 8;
            var v8997 = v10585 << 8;
            var v10586 = attrCode$$5 & 96;
            var v8998 = v10586 << 4;
            var v6300 = v8997 | v8998;
            var v10587 = this.memory;
            var v10588 = OAMAddress$$2 | 2;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v8999 = v10587[v10588]
            }
            var v6301 = v8999 & 254;
            var v1955 = v6300 | v6301;
            tile$$7 = v1954[v1955]
          }else {
            var v1956 = this.tileCache;
            var v11262 = attrCode$$5 & 8;
            var v10589 = v11262 << 8;
            var v11263 = attrCode$$5 & 96;
            var v10590 = v11263 << 4;
            var v9000 = v10589 | v10590;
            var v10591 = this.memory;
            var v10592 = OAMAddress$$2 | 2;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v9001 = v10591[v10592]
            }
            var v6302 = v9000 | v9001;
            var v1957 = v6302 | 1;
            tile$$7 = v1956[v1957]
          }
          var v1959;
          var v6303 = xcoord$$1 > 0;
          if(v6303) {
            v1959 = xcoord$$1
          }else {
            v1959 = 0
          }
          xCounter = v1959;
          var v9002 = yoffset$$5 & 7;
          var v6304 = v9002 << 3;
          xcoord$$1 = xcoord$$1 - v6304;
          var v1960 = this.pixelStart;
          currentPixel$$1 = v1960 + xCounter;
          var v1969 = xCounter < endX;
          for(;v1969;) {
            var v9003 = this.frameBuffer;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v6305 = v9003[currentPixel$$1]
            }
            var v1968 = v6305 >= 33554432;
            if(v1968) {
              var v1961 = xCounter - xcoord$$1;
              data$$31 = tile$$7[v1961];
              var v1963 = data$$31 > 0;
              if(v1963) {
                var v1962 = this.frameBuffer;
                var v6306 = this.gbcOBJPalette;
                var v6307 = palette$$5 | data$$31;
                JAMScript.set(v1962, currentPixel$$1, v6306[v6307])
              }
            }else {
              var v9004 = this.frameBuffer;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6308 = v9004[currentPixel$$1]
              }
              var v1967 = v6308 < 16777216;
              if(v1967) {
                var v1964 = xCounter - xcoord$$1;
                data$$31 = tile$$7[v1964];
                var v6309 = data$$31 > 0;
                if(v6309) {
                  v6309 = attrCode$$5 < 128
                }
                var v1966 = v6309;
                if(v1966) {
                  var v1965 = this.frameBuffer;
                  var v6310 = this.gbcOBJPalette;
                  var v6311 = palette$$5 | data$$31;
                  JAMScript.set(v1965, currentPixel$$1, v6310[v6311])
                }
              }
            }
            xCounter = xCounter + 1;
            currentPixel$$1 = currentPixel$$1 + 1;
            v1969 = xCounter < endX
          }
          spriteCount$$2 = spriteCount$$2 + 1
        }
        OAMAddress$$2 = OAMAddress$$2 + 4;
        var v6312 = OAMAddress$$2 < 65184;
        if(v6312) {
          v6312 = spriteCount$$2 < 10
        }
        v1971 = v6312
      }
    }
  }
  return
}
function v700(scanlineToRender$$8, drawableRange) {
  var address$$1 = 65024;
  var spriteCount$$1 = 0;
  var diff = 0;
  var v6313 = address$$1 < 65184;
  if(v6313) {
    v6313 = spriteCount$$1 < 10
  }
  var v1978 = v6313;
  for(;v1978;) {
    var v6314 = this.memory;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v1974 = v6314[address$$1]
    }
    diff = scanlineToRender$$8 - v1974;
    var v6315 = diff & drawableRange;
    var v1977 = v6315 == diff;
    if(v1977) {
      var v1975 = this.OAMAddressCache;
      var v1976 = spriteCount$$1;
      spriteCount$$1 = spriteCount$$1 + 1;
      v1975[v1976] = address$$1
    }
    address$$1 = address$$1 + 4;
    var v6316 = address$$1 < 65184;
    if(v6316) {
      v6316 = spriteCount$$1 < 10
    }
    v1978 = v6316
  }
  return spriteCount$$1
}
function v699(scanlineToRender$$7) {
  var v2038 = this.gfxSpriteShow;
  if(v2038) {
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
    var v1981 = xcoord < 168;
    for(;v1981;) {
      var v1979 = this.sortBuffer;
      var v1980 = xcoord;
      xcoord = xcoord + 1;
      v1979[v1980] = 255;
      v1981 = xcoord < 168
    }
    var v2037 = this.gfxSpriteNormalHeight;
    if(v2037) {
      length$$18 = JAMScript.call(this.findLowestSpriteDrawable, this, [lineAdjusted$$1, 7]);
      var v2007 = spriteCount < length$$18;
      for(;v2007;) {
        var v1982 = this.OAMAddressCache;
        OAMAddress$$1 = v1982[spriteCount];
        var v9005 = this.memory;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v6317 = v9005[OAMAddress$$1]
        }
        var v1983 = lineAdjusted$$1 - v6317;
        yoffset$$4 = v1983 << 3;
        var v1984 = this.memory;
        var v1985 = OAMAddress$$1 | 3;
        attrCode$$4 = v1984[v1985];
        var v1986 = attrCode$$4 & 16;
        palette$$4 = v1986 >> 2;
        var v1987 = this.tileCache;
        var v9006 = attrCode$$4 & 96;
        var v6318 = v9006 << 4;
        var v9007 = this.memory;
        var v9008 = OAMAddress$$1 | 2;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v6319 = v9007[v9008]
        }
        var v1988 = v6318 | v6319;
        tile$$6 = v1987[v1988];
        var v1989 = this.memory;
        var v1990 = OAMAddress$$1 | 1;
        linePixel = xCoordStart = v1989[v1990];
        var v1991 = 168 - linePixel;
        xCoordEnd = Math.min(v1991, 8);
        var v1992;
        var v6320 = linePixel > 7;
        if(v6320) {
          v1992 = 0
        }else {
          v1992 = 8 - linePixel
        }
        xcoord = v1992;
        var v1993 = this.pixelStart;
        var v6321;
        var v9009 = linePixel > 8;
        if(v9009) {
          v6321 = linePixel - 8
        }else {
          v6321 = 0
        }
        var v1994 = v6321;
        currentPixel = v1993 + v1994;
        var v2006 = xcoord < xCoordEnd;
        for(;v2006;) {
          var v9010 = this.sortBuffer;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6322 = v9010[linePixel]
          }
          var v2005 = v6322 > xCoordStart;
          if(v2005) {
            var v9011 = this.frameBuffer;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v6323 = v9011[currentPixel]
            }
            var v2004 = v6323 >= 33554432;
            if(v2004) {
              var v1995 = yoffset$$4 | xcoord;
              data$$30 = tile$$6[v1995];
              var v1998 = data$$30 > 0;
              if(v1998) {
                var v1996 = this.frameBuffer;
                var v6324 = this.OBJPalette;
                var v6325 = palette$$4 | data$$30;
                JAMScript.set(v1996, currentPixel, v6324[v6325]);
                var v1997 = this.sortBuffer;
                JAMScript.set(v1997, linePixel, xCoordStart)
              }
            }else {
              var v9012 = this.frameBuffer;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6326 = v9012[currentPixel]
              }
              var v2003 = v6326 < 16777216;
              if(v2003) {
                var v1999 = yoffset$$4 | xcoord;
                data$$30 = tile$$6[v1999];
                var v6327 = data$$30 > 0;
                if(v6327) {
                  v6327 = attrCode$$4 < 128
                }
                var v2002 = v6327;
                if(v2002) {
                  var v2000 = this.frameBuffer;
                  var v6328 = this.OBJPalette;
                  var v6329 = palette$$4 | data$$30;
                  JAMScript.set(v2000, currentPixel, v6328[v6329]);
                  var v2001 = this.sortBuffer;
                  JAMScript.set(v2001, linePixel, xCoordStart)
                }
              }
            }
          }
          xcoord = xcoord + 1;
          currentPixel = currentPixel + 1;
          linePixel = linePixel + 1;
          v2006 = xcoord < xCoordEnd
        }
        spriteCount = spriteCount + 1;
        v2007 = spriteCount < length$$18
      }
    }else {
      length$$18 = JAMScript.call(this.findLowestSpriteDrawable, this, [lineAdjusted$$1, 15]);
      var v2036 = spriteCount < length$$18;
      for(;v2036;) {
        var v2008 = this.OAMAddressCache;
        OAMAddress$$1 = v2008[spriteCount];
        var v9013 = this.memory;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v6330 = v9013[OAMAddress$$1]
        }
        var v2009 = lineAdjusted$$1 - v6330;
        yoffset$$4 = v2009 << 3;
        var v2010 = this.memory;
        var v2011 = OAMAddress$$1 | 3;
        attrCode$$4 = v2010[v2011];
        var v2012 = attrCode$$4 & 16;
        palette$$4 = v2012 >> 2;
        var v6331 = attrCode$$4 & 64;
        var v6332 = 64 & yoffset$$4;
        var v2017 = v6331 == v6332;
        if(v2017) {
          var v2013 = this.tileCache;
          var v9014 = attrCode$$4 & 96;
          var v6333 = v9014 << 4;
          var v10593 = this.memory;
          var v10594 = OAMAddress$$1 | 2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9015 = v10593[v10594]
          }
          var v6334 = v9015 & 254;
          var v2014 = v6333 | v6334;
          tile$$6 = v2013[v2014]
        }else {
          var v2015 = this.tileCache;
          var v10595 = attrCode$$4 & 96;
          var v9016 = v10595 << 4;
          var v10596 = this.memory;
          var v10597 = OAMAddress$$1 | 2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9017 = v10596[v10597]
          }
          var v6335 = v9016 | v9017;
          var v2016 = v6335 | 1;
          tile$$6 = v2015[v2016]
        }
        yoffset$$4 = yoffset$$4 & 63;
        var v2018 = this.memory;
        var v2019 = OAMAddress$$1 | 1;
        linePixel = xCoordStart = v2018[v2019];
        var v2020 = 168 - linePixel;
        xCoordEnd = Math.min(v2020, 8);
        var v2021;
        var v6336 = linePixel > 7;
        if(v6336) {
          v2021 = 0
        }else {
          v2021 = 8 - linePixel
        }
        xcoord = v2021;
        var v2022 = this.pixelStart;
        var v6337;
        var v9018 = linePixel > 8;
        if(v9018) {
          v6337 = linePixel - 8
        }else {
          v6337 = 0
        }
        var v2023 = v6337;
        currentPixel = v2022 + v2023;
        var v2035 = xcoord < xCoordEnd;
        for(;v2035;) {
          var v9019 = this.sortBuffer;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6338 = v9019[linePixel]
          }
          var v2034 = v6338 > xCoordStart;
          if(v2034) {
            var v9020 = this.frameBuffer;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v6339 = v9020[currentPixel]
            }
            var v2033 = v6339 >= 33554432;
            if(v2033) {
              var v2024 = yoffset$$4 | xcoord;
              data$$30 = tile$$6[v2024];
              var v2027 = data$$30 > 0;
              if(v2027) {
                var v2025 = this.frameBuffer;
                var v6340 = this.OBJPalette;
                var v6341 = palette$$4 | data$$30;
                JAMScript.set(v2025, currentPixel, v6340[v6341]);
                var v2026 = this.sortBuffer;
                JAMScript.set(v2026, linePixel, xCoordStart)
              }
            }else {
              var v9021 = this.frameBuffer;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6342 = v9021[currentPixel]
              }
              var v2032 = v6342 < 16777216;
              if(v2032) {
                var v2028 = yoffset$$4 | xcoord;
                data$$30 = tile$$6[v2028];
                var v6343 = data$$30 > 0;
                if(v6343) {
                  v6343 = attrCode$$4 < 128
                }
                var v2031 = v6343;
                if(v2031) {
                  var v2029 = this.frameBuffer;
                  var v6344 = this.OBJPalette;
                  var v6345 = palette$$4 | data$$30;
                  JAMScript.set(v2029, currentPixel, v6344[v6345]);
                  var v2030 = this.sortBuffer;
                  JAMScript.set(v2030, linePixel, xCoordStart)
                }
              }
            }
          }
          xcoord = xcoord + 1;
          currentPixel = currentPixel + 1;
          linePixel = linePixel + 1;
          v2035 = xcoord < xCoordEnd
        }
        spriteCount = spriteCount + 1;
        v2036 = spriteCount < length$$18
      }
    }
  }
  return
}
function v698(scanlineToRender$$6) {
  var v2107 = this.gfxWindowDisplay;
  if(v2107) {
    var v2039 = this.windowY;
    var scrollYAdjusted$$5 = scanlineToRender$$6 - v2039;
    var v2106 = scrollYAdjusted$$5 >= 0;
    if(v2106) {
      var v2040;
      var v9022 = this.windowX;
      var v6348 = v9022 > 0;
      if(v6348) {
        var v6346 = this.windowX;
        var v6347 = this.currentX;
        v2040 = v6346 + v6347
      }else {
        v2040 = this.currentX
      }
      var scrollXRangeAdjusted$$2 = v2040;
      var v2041 = this.pixelStart;
      var pixelPosition$$7 = v2041 + scrollXRangeAdjusted$$2;
      var v2042 = this.pixelStart;
      var v2043 = this.pixelEnd;
      var pixelPositionEnd$$5 = v2042 + v2043;
      var v2105 = pixelPosition$$7 < pixelPositionEnd$$5;
      if(v2105) {
        var v2044 = scrollYAdjusted$$5 & 7;
        var tileYLine$$5 = v2044 << 3;
        var v6349 = this.gfxWindowCHRBankPosition;
        var v9023 = scrollYAdjusted$$5 & 248;
        var v6350 = v9023 << 2;
        var v2045 = v6349 | v6350;
        var v6351 = this.currentX;
        var v2046 = v6351 >> 3;
        var tileNumber$$6 = v2045 + v2046;
        var v2047 = this.BGCHRBank1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var chrCode$$5 = v2047[tileNumber$$6]
        }
        var v6352 = this.gfxBackgroundBankOffset;
        var v2048 = chrCode$$5 < v6352;
        if(v2048) {
          chrCode$$5 = chrCode$$5 | 256
        }
        var v2049 = this.BGCHRBank2;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var attrCode$$3 = v2049[tileNumber$$6]
        }
        var v2050 = this.tileCache;
        var v10598 = attrCode$$3 & 8;
        var v9024 = v10598 << 8;
        var v10599 = attrCode$$3 & 96;
        var v9025 = v10599 << 4;
        var v6353 = v9024 | v9025;
        var v2051 = v6353 | chrCode$$5;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var tile$$5 = v2050[v2051]
        }
        var v2052 = attrCode$$3 & 7;
        var palette$$3 = v2052 << 2;
        var v6354 = this.windowX;
        var v2053 = scrollXRangeAdjusted$$2 - v6354;
        var texel$$5 = v2053 & 7;
        var v6355 = texel$$5 + pixelPositionEnd$$5;
        var v2054 = v6355 - pixelPosition$$7;
        scrollXRangeAdjusted$$2 = Math.min(8, v2054);
        var v2057 = texel$$5 < scrollXRangeAdjusted$$2;
        for(;v2057;) {
          var v2055 = this.frameBuffer;
          var v2056 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6356 = this.gbcBGPalette;
          var v11264 = texel$$5;
          texel$$5 = texel$$5 + 1;
          var v10600 = tileYLine$$5 | v11264;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9026 = tile$$5[v10600]
          }
          var v6357 = palette$$3 | v9026;
          JAMScript.set(v2055, v2056, v6356[v6357]);
          v2057 = texel$$5 < scrollXRangeAdjusted$$2
        }
        var v6358 = pixelPositionEnd$$5 - pixelPosition$$7;
        var v2058 = v6358 >> 3;
        scrollXRangeAdjusted$$2 = tileNumber$$6 + v2058;
        var v2082 = tileNumber$$6 < scrollXRangeAdjusted$$2;
        for(;v2082;) {
          var v2059 = this.BGCHRBank1;
          var v2060 = tileNumber$$6 = tileNumber$$6 + 1;
          chrCode$$5 = v2059[v2060];
          var v6359 = this.gfxBackgroundBankOffset;
          var v2061 = chrCode$$5 < v6359;
          if(v2061) {
            chrCode$$5 = chrCode$$5 | 256
          }
          var v2062 = this.BGCHRBank2;
          attrCode$$3 = v2062[tileNumber$$6];
          var v2063 = this.tileCache;
          var v10601 = attrCode$$3 & 8;
          var v9027 = v10601 << 8;
          var v10602 = attrCode$$3 & 96;
          var v9028 = v10602 << 4;
          var v6360 = v9027 | v9028;
          var v2064 = v6360 | chrCode$$5;
          tile$$5 = v2063[v2064];
          var v2065 = attrCode$$3 & 7;
          palette$$3 = v2065 << 2;
          texel$$5 = tileYLine$$5;
          var v2066 = this.frameBuffer;
          var v2067 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6361 = this.gbcBGPalette;
          var v10603 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9029 = tile$$5[v10603]
          }
          var v6362 = palette$$3 | v9029;
          JAMScript.set(v2066, v2067, v6361[v6362]);
          var v2068 = this.frameBuffer;
          var v2069 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6363 = this.gbcBGPalette;
          var v10604 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9030 = tile$$5[v10604]
          }
          var v6364 = palette$$3 | v9030;
          JAMScript.set(v2068, v2069, v6363[v6364]);
          var v2070 = this.frameBuffer;
          var v2071 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6365 = this.gbcBGPalette;
          var v10605 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9031 = tile$$5[v10605]
          }
          var v6366 = palette$$3 | v9031;
          JAMScript.set(v2070, v2071, v6365[v6366]);
          var v2072 = this.frameBuffer;
          var v2073 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6367 = this.gbcBGPalette;
          var v10606 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9032 = tile$$5[v10606]
          }
          var v6368 = palette$$3 | v9032;
          JAMScript.set(v2072, v2073, v6367[v6368]);
          var v2074 = this.frameBuffer;
          var v2075 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6369 = this.gbcBGPalette;
          var v10607 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9033 = tile$$5[v10607]
          }
          var v6370 = palette$$3 | v9033;
          JAMScript.set(v2074, v2075, v6369[v6370]);
          var v2076 = this.frameBuffer;
          var v2077 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6371 = this.gbcBGPalette;
          var v10608 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9034 = tile$$5[v10608]
          }
          var v6372 = palette$$3 | v9034;
          JAMScript.set(v2076, v2077, v6371[v6372]);
          var v2078 = this.frameBuffer;
          var v2079 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6373 = this.gbcBGPalette;
          var v10609 = texel$$5;
          texel$$5 = texel$$5 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9035 = tile$$5[v10609]
          }
          var v6374 = palette$$3 | v9035;
          JAMScript.set(v2078, v2079, v6373[v6374]);
          var v2080 = this.frameBuffer;
          var v2081 = pixelPosition$$7;
          pixelPosition$$7 = pixelPosition$$7 + 1;
          var v6375 = this.gbcBGPalette;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9036 = tile$$5[texel$$5]
          }
          var v6376 = palette$$3 | v9036;
          JAMScript.set(v2080, v2081, v6375[v6376]);
          v2082 = tileNumber$$6 < scrollXRangeAdjusted$$2
        }
        var v2104 = pixelPosition$$7 < pixelPositionEnd$$5;
        if(v2104) {
          var v2083 = this.BGCHRBank1;
          var v2084 = tileNumber$$6 = tileNumber$$6 + 1;
          chrCode$$5 = v2083[v2084];
          var v6377 = this.gfxBackgroundBankOffset;
          var v2085 = chrCode$$5 < v6377;
          if(v2085) {
            chrCode$$5 = chrCode$$5 | 256
          }
          var v2086 = this.BGCHRBank2;
          attrCode$$3 = v2086[tileNumber$$6];
          var v2087 = this.tileCache;
          var v10610 = attrCode$$3 & 8;
          var v9037 = v10610 << 8;
          var v10611 = attrCode$$3 & 96;
          var v9038 = v10611 << 4;
          var v6378 = v9037 | v9038;
          var v2088 = v6378 | chrCode$$5;
          tile$$5 = v2087[v2088];
          var v2089 = attrCode$$3 & 7;
          palette$$3 = v2089 << 2;
          var v2103 = pixelPositionEnd$$5 - pixelPosition$$7;
          switch(v2103) {
            case 7:
              var v2090 = this.frameBuffer;
              var v2091 = pixelPosition$$7 + 6;
              var v6379 = this.gbcBGPalette;
              var v10612 = tileYLine$$5 | 6;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v9039 = tile$$5[v10612]
              }
              var v6380 = palette$$3 | v9039;
              JAMScript.set(v2090, v2091, v6379[v6380]);
            case 6:
              var v2092 = this.frameBuffer;
              var v2093 = pixelPosition$$7 + 5;
              var v6381 = this.gbcBGPalette;
              var v10613 = tileYLine$$5 | 5;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v9040 = tile$$5[v10613]
              }
              var v6382 = palette$$3 | v9040;
              JAMScript.set(v2092, v2093, v6381[v6382]);
            case 5:
              var v2094 = this.frameBuffer;
              var v2095 = pixelPosition$$7 + 4;
              var v6383 = this.gbcBGPalette;
              var v10614 = tileYLine$$5 | 4;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v9041 = tile$$5[v10614]
              }
              var v6384 = palette$$3 | v9041;
              JAMScript.set(v2094, v2095, v6383[v6384]);
            case 4:
              var v2096 = this.frameBuffer;
              var v2097 = pixelPosition$$7 + 3;
              var v6385 = this.gbcBGPalette;
              var v10615 = tileYLine$$5 | 3;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v9042 = tile$$5[v10615]
              }
              var v6386 = palette$$3 | v9042;
              JAMScript.set(v2096, v2097, v6385[v6386]);
            case 3:
              var v2098 = this.frameBuffer;
              var v2099 = pixelPosition$$7 + 2;
              var v6387 = this.gbcBGPalette;
              var v10616 = tileYLine$$5 | 2;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v9043 = tile$$5[v10616]
              }
              var v6388 = palette$$3 | v9043;
              JAMScript.set(v2098, v2099, v6387[v6388]);
            case 2:
              var v2100 = this.frameBuffer;
              var v2101 = pixelPosition$$7 + 1;
              var v6389 = this.gbcBGPalette;
              var v10617 = tileYLine$$5 | 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v9044 = tile$$5[v10617]
              }
              var v6390 = palette$$3 | v9044;
              JAMScript.set(v2100, v2101, v6389[v6390]);
            case 1:
              var v2102 = this.frameBuffer;
              var v6391 = this.gbcBGPalette;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v9045 = tile$$5[tileYLine$$5]
              }
              var v6392 = palette$$3 | v9045;
              JAMScript.set(v2102, pixelPosition$$7, v6391[v6392])
          }
        }
      }
    }
  }
  return
}
function v697(scanlineToRender$$5) {
  var v2179 = this.gfxWindowDisplay;
  if(v2179) {
    var v2108 = this.windowY;
    var scrollYAdjusted$$4 = scanlineToRender$$5 - v2108;
    var v2178 = scrollYAdjusted$$4 >= 0;
    if(v2178) {
      var v2109;
      var v9046 = this.windowX;
      var v6395 = v9046 > 0;
      if(v6395) {
        var v6393 = this.windowX;
        var v6394 = this.currentX;
        v2109 = v6393 + v6394
      }else {
        v2109 = this.currentX
      }
      var scrollXRangeAdjusted$$1 = v2109;
      var v2110 = this.pixelStart;
      var pixelPosition$$6 = v2110 + scrollXRangeAdjusted$$1;
      var v2111 = this.pixelStart;
      var v2112 = this.pixelEnd;
      var pixelPositionEnd$$4 = v2111 + v2112;
      var v2177 = pixelPosition$$6 < pixelPositionEnd$$4;
      if(v2177) {
        var v2113 = scrollYAdjusted$$4 & 7;
        var tileYLine$$4 = v2113 << 3;
        var v6396 = this.gfxWindowCHRBankPosition;
        var v9047 = scrollYAdjusted$$4 & 248;
        var v6397 = v9047 << 2;
        var v2114 = v6396 | v6397;
        var v6398 = this.currentX;
        var v2115 = v6398 >> 3;
        var tileNumber$$5 = v2114 + v2115;
        var v2116 = this.BGCHRBank1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var chrCode$$4 = v2116[tileNumber$$5]
        }
        var v6399 = this.gfxBackgroundBankOffset;
        var v2117 = chrCode$$4 < v6399;
        if(v2117) {
          chrCode$$4 = chrCode$$4 | 256
        }
        var v2118 = this.BGCHRBank2;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var attrCode$$2 = v2118[tileNumber$$5]
        }
        var v2119 = this.tileCache;
        var v10618 = attrCode$$2 & 8;
        var v9048 = v10618 << 8;
        var v10619 = attrCode$$2 & 96;
        var v9049 = v10619 << 4;
        var v6400 = v9048 | v9049;
        var v2120 = v6400 | chrCode$$4;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var tile$$4 = v2119[v2120]
        }
        var v6401 = attrCode$$2 & 7;
        var v2121 = v6401 << 2;
        var v6402 = attrCode$$2 & 128;
        var v2122 = v6402 >> 2;
        var palette$$2 = v2121 | v2122;
        var v6403 = this.windowX;
        var v2123 = scrollXRangeAdjusted$$1 - v6403;
        var texel$$4 = v2123 & 7;
        var v6404 = texel$$4 + pixelPositionEnd$$4;
        var v2124 = v6404 - pixelPosition$$6;
        scrollXRangeAdjusted$$1 = Math.min(8, v2124);
        var v2127 = texel$$4 < scrollXRangeAdjusted$$1;
        for(;v2127;) {
          var v2125 = this.frameBuffer;
          var v2126 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6405 = this.gbcBGPalette;
          var v11265 = texel$$4;
          texel$$4 = texel$$4 + 1;
          var v10620 = tileYLine$$4 | v11265;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9050 = tile$$4[v10620]
          }
          var v6406 = palette$$2 | v9050;
          JAMScript.set(v2125, v2126, v6405[v6406]);
          v2127 = texel$$4 < scrollXRangeAdjusted$$1
        }
        var v6407 = pixelPositionEnd$$4 - pixelPosition$$6;
        var v2128 = v6407 >> 3;
        scrollXRangeAdjusted$$1 = tileNumber$$5 + v2128;
        var v2153 = tileNumber$$5 < scrollXRangeAdjusted$$1;
        for(;v2153;) {
          var v2129 = this.BGCHRBank1;
          var v2130 = tileNumber$$5 = tileNumber$$5 + 1;
          chrCode$$4 = v2129[v2130];
          var v6408 = this.gfxBackgroundBankOffset;
          var v2131 = chrCode$$4 < v6408;
          if(v2131) {
            chrCode$$4 = chrCode$$4 | 256
          }
          var v2132 = this.BGCHRBank2;
          attrCode$$2 = v2132[tileNumber$$5];
          var v2133 = this.tileCache;
          var v10621 = attrCode$$2 & 8;
          var v9051 = v10621 << 8;
          var v10622 = attrCode$$2 & 96;
          var v9052 = v10622 << 4;
          var v6409 = v9051 | v9052;
          var v2134 = v6409 | chrCode$$4;
          tile$$4 = v2133[v2134];
          var v6410 = attrCode$$2 & 7;
          var v2135 = v6410 << 2;
          var v6411 = attrCode$$2 & 128;
          var v2136 = v6411 >> 2;
          palette$$2 = v2135 | v2136;
          texel$$4 = tileYLine$$4;
          var v2137 = this.frameBuffer;
          var v2138 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6412 = this.gbcBGPalette;
          var v10623 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9053 = tile$$4[v10623]
          }
          var v6413 = palette$$2 | v9053;
          JAMScript.set(v2137, v2138, v6412[v6413]);
          var v2139 = this.frameBuffer;
          var v2140 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6414 = this.gbcBGPalette;
          var v10624 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9054 = tile$$4[v10624]
          }
          var v6415 = palette$$2 | v9054;
          JAMScript.set(v2139, v2140, v6414[v6415]);
          var v2141 = this.frameBuffer;
          var v2142 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6416 = this.gbcBGPalette;
          var v10625 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9055 = tile$$4[v10625]
          }
          var v6417 = palette$$2 | v9055;
          JAMScript.set(v2141, v2142, v6416[v6417]);
          var v2143 = this.frameBuffer;
          var v2144 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6418 = this.gbcBGPalette;
          var v10626 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9056 = tile$$4[v10626]
          }
          var v6419 = palette$$2 | v9056;
          JAMScript.set(v2143, v2144, v6418[v6419]);
          var v2145 = this.frameBuffer;
          var v2146 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6420 = this.gbcBGPalette;
          var v10627 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9057 = tile$$4[v10627]
          }
          var v6421 = palette$$2 | v9057;
          JAMScript.set(v2145, v2146, v6420[v6421]);
          var v2147 = this.frameBuffer;
          var v2148 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6422 = this.gbcBGPalette;
          var v10628 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9058 = tile$$4[v10628]
          }
          var v6423 = palette$$2 | v9058;
          JAMScript.set(v2147, v2148, v6422[v6423]);
          var v2149 = this.frameBuffer;
          var v2150 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6424 = this.gbcBGPalette;
          var v10629 = texel$$4;
          texel$$4 = texel$$4 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9059 = tile$$4[v10629]
          }
          var v6425 = palette$$2 | v9059;
          JAMScript.set(v2149, v2150, v6424[v6425]);
          var v2151 = this.frameBuffer;
          var v2152 = pixelPosition$$6;
          pixelPosition$$6 = pixelPosition$$6 + 1;
          var v6426 = this.gbcBGPalette;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9060 = tile$$4[texel$$4]
          }
          var v6427 = palette$$2 | v9060;
          JAMScript.set(v2151, v2152, v6426[v6427]);
          v2153 = tileNumber$$5 < scrollXRangeAdjusted$$1
        }
        var v2176 = pixelPosition$$6 < pixelPositionEnd$$4;
        if(v2176) {
          var v2154 = this.BGCHRBank1;
          var v2155 = tileNumber$$5 = tileNumber$$5 + 1;
          chrCode$$4 = v2154[v2155];
          var v6428 = this.gfxBackgroundBankOffset;
          var v2156 = chrCode$$4 < v6428;
          if(v2156) {
            chrCode$$4 = chrCode$$4 | 256
          }
          var v2157 = this.BGCHRBank2;
          attrCode$$2 = v2157[tileNumber$$5];
          var v2158 = this.tileCache;
          var v10630 = attrCode$$2 & 8;
          var v9061 = v10630 << 8;
          var v10631 = attrCode$$2 & 96;
          var v9062 = v10631 << 4;
          var v6429 = v9061 | v9062;
          var v2159 = v6429 | chrCode$$4;
          tile$$4 = v2158[v2159];
          var v6430 = attrCode$$2 & 7;
          var v2160 = v6430 << 2;
          var v6431 = attrCode$$2 & 128;
          var v2161 = v6431 >> 2;
          palette$$2 = v2160 | v2161;
          var v2175 = pixelPositionEnd$$4 - pixelPosition$$6;
          switch(v2175) {
            case 7:
              var v2162 = this.frameBuffer;
              var v2163 = pixelPosition$$6 + 6;
              var v6432 = this.gbcBGPalette;
              var v10632 = tileYLine$$4 | 6;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v9063 = tile$$4[v10632]
              }
              var v6433 = palette$$2 | v9063;
              JAMScript.set(v2162, v2163, v6432[v6433]);
            case 6:
              var v2164 = this.frameBuffer;
              var v2165 = pixelPosition$$6 + 5;
              var v6434 = this.gbcBGPalette;
              var v10633 = tileYLine$$4 | 5;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v9064 = tile$$4[v10633]
              }
              var v6435 = palette$$2 | v9064;
              JAMScript.set(v2164, v2165, v6434[v6435]);
            case 5:
              var v2166 = this.frameBuffer;
              var v2167 = pixelPosition$$6 + 4;
              var v6436 = this.gbcBGPalette;
              var v10634 = tileYLine$$4 | 4;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v9065 = tile$$4[v10634]
              }
              var v6437 = palette$$2 | v9065;
              JAMScript.set(v2166, v2167, v6436[v6437]);
            case 4:
              var v2168 = this.frameBuffer;
              var v2169 = pixelPosition$$6 + 3;
              var v6438 = this.gbcBGPalette;
              var v10635 = tileYLine$$4 | 3;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v9066 = tile$$4[v10635]
              }
              var v6439 = palette$$2 | v9066;
              JAMScript.set(v2168, v2169, v6438[v6439]);
            case 3:
              var v2170 = this.frameBuffer;
              var v2171 = pixelPosition$$6 + 2;
              var v6440 = this.gbcBGPalette;
              var v10636 = tileYLine$$4 | 2;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v9067 = tile$$4[v10636]
              }
              var v6441 = palette$$2 | v9067;
              JAMScript.set(v2170, v2171, v6440[v6441]);
            case 2:
              var v2172 = this.frameBuffer;
              var v2173 = pixelPosition$$6 + 1;
              var v6442 = this.gbcBGPalette;
              var v10637 = tileYLine$$4 | 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v9068 = tile$$4[v10637]
              }
              var v6443 = palette$$2 | v9068;
              JAMScript.set(v2172, v2173, v6442[v6443]);
            case 1:
              var v2174 = this.frameBuffer;
              var v6444 = this.gbcBGPalette;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v9069 = tile$$4[tileYLine$$4]
              }
              var v6445 = palette$$2 | v9069;
              JAMScript.set(v2174, pixelPosition$$6, v6444[v6445])
          }
        }
      }
    }
  }
  return
}
function v696(scanlineToRender$$4) {
  var v2239 = this.gfxWindowDisplay;
  if(v2239) {
    var v2180 = this.windowY;
    var scrollYAdjusted$$3 = scanlineToRender$$4 - v2180;
    var v2238 = scrollYAdjusted$$3 >= 0;
    if(v2238) {
      var v2181;
      var v9070 = this.windowX;
      var v6448 = v9070 > 0;
      if(v6448) {
        var v6446 = this.windowX;
        var v6447 = this.currentX;
        v2181 = v6446 + v6447
      }else {
        v2181 = this.currentX
      }
      var scrollXRangeAdjusted = v2181;
      var v2182 = this.pixelStart;
      var pixelPosition$$5 = v2182 + scrollXRangeAdjusted;
      var v2183 = this.pixelStart;
      var v2184 = this.pixelEnd;
      var pixelPositionEnd$$3 = v2183 + v2184;
      var v2237 = pixelPosition$$5 < pixelPositionEnd$$3;
      if(v2237) {
        var v2185 = scrollYAdjusted$$3 & 7;
        var tileYLine$$3 = v2185 << 3;
        var v6449 = this.gfxWindowCHRBankPosition;
        var v9071 = scrollYAdjusted$$3 & 248;
        var v6450 = v9071 << 2;
        var v2186 = v6449 | v6450;
        var v6451 = this.currentX;
        var v2187 = v6451 >> 3;
        var tileNumber$$4 = v2186 + v2187;
        var v2188 = this.BGCHRBank1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var chrCode$$3 = v2188[tileNumber$$4]
        }
        var v6452 = this.gfxBackgroundBankOffset;
        var v2189 = chrCode$$3 < v6452;
        if(v2189) {
          chrCode$$3 = chrCode$$3 | 256
        }
        var v2190 = this.tileCache;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var tile$$3 = v2190[chrCode$$3]
        }
        var v6453 = this.windowX;
        var v2191 = scrollXRangeAdjusted - v6453;
        var texel$$3 = v2191 & 7;
        var v6454 = texel$$3 + pixelPositionEnd$$3;
        var v2192 = v6454 - pixelPosition$$5;
        scrollXRangeAdjusted = Math.min(8, v2192);
        var v2195 = texel$$3 < scrollXRangeAdjusted;
        for(;v2195;) {
          var v2193 = this.frameBuffer;
          var v2194 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6455 = this.BGPalette;
          var v10638 = texel$$3;
          texel$$3 = texel$$3 + 1;
          var v9072 = tileYLine$$3 | v10638;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6456 = tile$$3[v9072]
          }
          JAMScript.set(v2193, v2194, v6455[v6456], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          v2195 = texel$$3 < scrollXRangeAdjusted
        }
        var v6457 = pixelPositionEnd$$3 - pixelPosition$$5;
        var v2196 = v6457 >> 3;
        scrollXRangeAdjusted = tileNumber$$4 + v2196;
        var v2217 = tileNumber$$4 < scrollXRangeAdjusted;
        for(;v2217;) {
          var v2197 = this.BGCHRBank1;
          var v2198 = tileNumber$$4 = tileNumber$$4 + 1;
          chrCode$$3 = v2197[v2198];
          var v6458 = this.gfxBackgroundBankOffset;
          var v2199 = chrCode$$3 < v6458;
          if(v2199) {
            chrCode$$3 = chrCode$$3 | 256
          }
          var v2200 = this.tileCache;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            tile$$3 = v2200[chrCode$$3]
          }
          texel$$3 = tileYLine$$3;
          var v2201 = this.frameBuffer;
          var v2202 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6459 = this.BGPalette;
          var v9073 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6460 = tile$$3[v9073]
          }
          JAMScript.set(v2201, v2202, v6459[v6460], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          var v2203 = this.frameBuffer;
          var v2204 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6461 = this.BGPalette;
          var v9074 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6462 = tile$$3[v9074]
          }
          JAMScript.set(v2203, v2204, v6461[v6462], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          var v2205 = this.frameBuffer;
          var v2206 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6463 = this.BGPalette;
          var v9075 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6464 = tile$$3[v9075]
          }
          JAMScript.set(v2205, v2206, v6463[v6464], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          var v2207 = this.frameBuffer;
          var v2208 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6465 = this.BGPalette;
          var v9076 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6466 = tile$$3[v9076]
          }
          JAMScript.set(v2207, v2208, v6465[v6466], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          var v2209 = this.frameBuffer;
          var v2210 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6467 = this.BGPalette;
          var v9077 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6468 = tile$$3[v9077]
          }
          JAMScript.set(v2209, v2210, v6467[v6468], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          var v2211 = this.frameBuffer;
          var v2212 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6469 = this.BGPalette;
          var v9078 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6470 = tile$$3[v9078]
          }
          JAMScript.set(v2211, v2212, v6469[v6470], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          var v2213 = this.frameBuffer;
          var v2214 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6471 = this.BGPalette;
          var v9079 = texel$$3;
          texel$$3 = texel$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6472 = tile$$3[v9079]
          }
          JAMScript.set(v2213, v2214, v6471[v6472], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          var v2215 = this.frameBuffer;
          var v2216 = pixelPosition$$5;
          pixelPosition$$5 = pixelPosition$$5 + 1;
          var v6473 = this.BGPalette;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6474 = tile$$3[texel$$3]
          }
          JAMScript.set(v2215, v2216, v6473[v6474], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
          v2217 = tileNumber$$4 < scrollXRangeAdjusted
        }
        var v2236 = pixelPosition$$5 < pixelPositionEnd$$3;
        if(v2236) {
          var v2218 = this.BGCHRBank1;
          var v2219 = tileNumber$$4 = tileNumber$$4 + 1;
          chrCode$$3 = v2218[v2219];
          var v6475 = this.gfxBackgroundBankOffset;
          var v2220 = chrCode$$3 < v6475;
          if(v2220) {
            chrCode$$3 = chrCode$$3 | 256
          }
          var v2221 = this.tileCache;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            tile$$3 = v2221[chrCode$$3]
          }
          var v2235 = pixelPositionEnd$$3 - pixelPosition$$5;
          switch(v2235) {
            case 7:
              var v2222 = this.frameBuffer;
              var v2223 = pixelPosition$$5 + 6;
              var v6476 = this.BGPalette;
              var v9080 = tileYLine$$3 | 6;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6477 = tile$$3[v9080]
              }
              JAMScript.set(v2222, v2223, v6476[v6477], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
            case 6:
              var v2224 = this.frameBuffer;
              var v2225 = pixelPosition$$5 + 5;
              var v6478 = this.BGPalette;
              var v9081 = tileYLine$$3 | 5;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6479 = tile$$3[v9081]
              }
              JAMScript.set(v2224, v2225, v6478[v6479], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
            case 5:
              var v2226 = this.frameBuffer;
              var v2227 = pixelPosition$$5 + 4;
              var v6480 = this.BGPalette;
              var v9082 = tileYLine$$3 | 4;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6481 = tile$$3[v9082]
              }
              JAMScript.set(v2226, v2227, v6480[v6481], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
            case 4:
              var v2228 = this.frameBuffer;
              var v2229 = pixelPosition$$5 + 3;
              var v6482 = this.BGPalette;
              var v9083 = tileYLine$$3 | 3;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6483 = tile$$3[v9083]
              }
              JAMScript.set(v2228, v2229, v6482[v6483], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
            case 3:
              var v2230 = this.frameBuffer;
              var v2231 = pixelPosition$$5 + 2;
              var v6484 = this.BGPalette;
              var v9084 = tileYLine$$3 | 2;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6485 = tile$$3[v9084]
              }
              JAMScript.set(v2230, v2231, v6484[v6485], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
            case 2:
              var v2232 = this.frameBuffer;
              var v2233 = pixelPosition$$5 + 1;
              var v6486 = this.BGPalette;
              var v9085 = tileYLine$$3 | 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6487 = tile$$3[v9085]
              }
              JAMScript.set(v2232, v2233, v6486[v6487], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
            case 1:
              var v2234 = this.frameBuffer;
              var v6488 = this.BGPalette;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                var v6489 = tile$$3[tileYLine$$3]
              }
              JAMScript.set(v2234, pixelPosition$$5, v6488[v6489], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074)
          }
        }
      }
    }
  }
  return
}
function v695(scanlineToRender$$3) {
  var v6490 = this.backgroundY;
  var v2240 = v6490 + scanlineToRender$$3;
  var scrollYAdjusted$$2 = v2240 & 255;
  var v2241 = scrollYAdjusted$$2 & 7;
  var tileYLine$$2 = v2241 << 3;
  var v2242 = this.gfxBackgroundCHRBankPosition;
  var v6491 = scrollYAdjusted$$2 & 248;
  var v2243 = v6491 << 2;
  var tileYDown$$2 = v2242 | v2243;
  var v6492 = this.backgroundX;
  var v6493 = this.currentX;
  var v2244 = v6492 + v6493;
  var scrollXAdjusted$$2 = v2244 & 255;
  var v2245 = this.pixelStart;
  var v2246 = this.currentX;
  var pixelPosition$$4 = v2245 + v2246;
  var v2247 = this.pixelStart;
  var v6494;
  var v10639 = this.gfxWindowDisplay;
  if(v10639) {
    var v11546 = this.windowY;
    var v11266 = scanlineToRender$$3 - v11546;
    v10639 = v11266 >= 0
  }
  var v9088 = v10639;
  if(v9088) {
    var v11267 = this.windowX;
    var v10640 = Math.max(v11267, 0);
    var v10641 = this.currentX;
    var v9086 = v10640 + v10641;
    var v9087 = this.pixelEnd;
    v6494 = Math.min(v9086, v9087)
  }else {
    v6494 = this.pixelEnd
  }
  var v2248 = v6494;
  var pixelPositionEnd$$2 = v2247 + v2248;
  var v2249 = scrollXAdjusted$$2 >> 3;
  var tileNumber$$3 = tileYDown$$2 + v2249;
  var v2250 = this.BGCHRBank1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var chrCode$$2 = v2250[tileNumber$$3]
  }
  var v6495 = this.gfxBackgroundBankOffset;
  var v2251 = chrCode$$2 < v6495;
  if(v2251) {
    chrCode$$2 = chrCode$$2 | 256
  }
  var v2252 = this.BGCHRBank2;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var attrCode$$1 = v2252[tileNumber$$3]
  }
  var v2253 = this.tileCache;
  var v10642 = attrCode$$1 & 8;
  var v9089 = v10642 << 8;
  var v10643 = attrCode$$1 & 96;
  var v9090 = v10643 << 4;
  var v6496 = v9089 | v9090;
  var v2254 = v6496 | chrCode$$2;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tile$$2 = v2253[v2254]
  }
  var v2255 = attrCode$$1 & 7;
  var palette$$1 = v2255 << 2;
  var texel$$2 = scrollXAdjusted$$2 & 7;
  var v6497 = texel$$2 < 8;
  if(v6497) {
    var v9091 = pixelPosition$$4 < pixelPositionEnd$$2;
    if(v9091) {
      v9091 = scrollXAdjusted$$2 < 256
    }
    v6497 = v9091
  }
  var v2258 = v6497;
  for(;v2258;) {
    var v2256 = this.frameBuffer;
    var v2257 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6498 = this.gbcBGPalette;
    var v11268 = texel$$2;
    texel$$2 = texel$$2 + 1;
    var v10644 = tileYLine$$2 | v11268;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9092 = tile$$2[v10644]
    }
    var v6499 = palette$$1 | v9092;
    JAMScript.set(v2256, v2257, v6498[v6499]);
    scrollXAdjusted$$2 = scrollXAdjusted$$2 + 1;
    var v6500 = texel$$2 < 8;
    if(v6500) {
      var v9093 = pixelPosition$$4 < pixelPositionEnd$$2;
      if(v9093) {
        v9093 = scrollXAdjusted$$2 < 256
      }
      v6500 = v9093
    }
    v2258 = v6500
  }
  var v6501 = pixelPositionEnd$$2 - pixelPosition$$4;
  var v6502 = 256 - scrollXAdjusted$$2;
  var v2259 = Math.min(v6501, v6502);
  var scrollXAdjustedAligned$$2 = v2259 >> 3;
  var v6503 = scrollXAdjustedAligned$$2 << 3;
  scrollXAdjusted$$2 = scrollXAdjusted$$2 + v6503;
  scrollXAdjustedAligned$$2 = scrollXAdjustedAligned$$2 + tileNumber$$3;
  var v2283 = tileNumber$$3 < scrollXAdjustedAligned$$2;
  for(;v2283;) {
    var v2260 = this.BGCHRBank1;
    var v2261 = tileNumber$$3 = tileNumber$$3 + 1;
    chrCode$$2 = v2260[v2261];
    var v6504 = this.gfxBackgroundBankOffset;
    var v2262 = chrCode$$2 < v6504;
    if(v2262) {
      chrCode$$2 = chrCode$$2 | 256
    }
    var v2263 = this.BGCHRBank2;
    attrCode$$1 = v2263[tileNumber$$3];
    var v2264 = this.tileCache;
    var v10645 = attrCode$$1 & 8;
    var v9094 = v10645 << 8;
    var v10646 = attrCode$$1 & 96;
    var v9095 = v10646 << 4;
    var v6505 = v9094 | v9095;
    var v2265 = v6505 | chrCode$$2;
    tile$$2 = v2264[v2265];
    var v2266 = attrCode$$1 & 7;
    palette$$1 = v2266 << 2;
    texel$$2 = tileYLine$$2;
    var v2267 = this.frameBuffer;
    var v2268 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6506 = this.gbcBGPalette;
    var v10647 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9096 = tile$$2[v10647]
    }
    var v6507 = palette$$1 | v9096;
    JAMScript.set(v2267, v2268, v6506[v6507]);
    var v2269 = this.frameBuffer;
    var v2270 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6508 = this.gbcBGPalette;
    var v10648 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9097 = tile$$2[v10648]
    }
    var v6509 = palette$$1 | v9097;
    JAMScript.set(v2269, v2270, v6508[v6509]);
    var v2271 = this.frameBuffer;
    var v2272 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6510 = this.gbcBGPalette;
    var v10649 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9098 = tile$$2[v10649]
    }
    var v6511 = palette$$1 | v9098;
    JAMScript.set(v2271, v2272, v6510[v6511]);
    var v2273 = this.frameBuffer;
    var v2274 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6512 = this.gbcBGPalette;
    var v10650 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9099 = tile$$2[v10650]
    }
    var v6513 = palette$$1 | v9099;
    JAMScript.set(v2273, v2274, v6512[v6513]);
    var v2275 = this.frameBuffer;
    var v2276 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6514 = this.gbcBGPalette;
    var v10651 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9100 = tile$$2[v10651]
    }
    var v6515 = palette$$1 | v9100;
    JAMScript.set(v2275, v2276, v6514[v6515]);
    var v2277 = this.frameBuffer;
    var v2278 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6516 = this.gbcBGPalette;
    var v10652 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9101 = tile$$2[v10652]
    }
    var v6517 = palette$$1 | v9101;
    JAMScript.set(v2277, v2278, v6516[v6517]);
    var v2279 = this.frameBuffer;
    var v2280 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6518 = this.gbcBGPalette;
    var v10653 = texel$$2;
    texel$$2 = texel$$2 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9102 = tile$$2[v10653]
    }
    var v6519 = palette$$1 | v9102;
    JAMScript.set(v2279, v2280, v6518[v6519]);
    var v2281 = this.frameBuffer;
    var v2282 = pixelPosition$$4;
    pixelPosition$$4 = pixelPosition$$4 + 1;
    var v6520 = this.gbcBGPalette;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9103 = tile$$2[texel$$2]
    }
    var v6521 = palette$$1 | v9103;
    JAMScript.set(v2281, v2282, v6520[v6521]);
    v2283 = tileNumber$$3 < scrollXAdjustedAligned$$2
  }
  var v2341 = pixelPosition$$4 < pixelPositionEnd$$2;
  if(v2341) {
    var v2294 = scrollXAdjusted$$2 < 256;
    if(v2294) {
      var v2284 = this.BGCHRBank1;
      var v2285 = tileNumber$$3 = tileNumber$$3 + 1;
      chrCode$$2 = v2284[v2285];
      var v6522 = this.gfxBackgroundBankOffset;
      var v2286 = chrCode$$2 < v6522;
      if(v2286) {
        chrCode$$2 = chrCode$$2 | 256
      }
      var v2287 = this.BGCHRBank2;
      attrCode$$1 = v2287[tileNumber$$3];
      var v2288 = this.tileCache;
      var v10654 = attrCode$$1 & 8;
      var v9104 = v10654 << 8;
      var v10655 = attrCode$$1 & 96;
      var v9105 = v10655 << 4;
      var v6523 = v9104 | v9105;
      var v2289 = v6523 | chrCode$$2;
      tile$$2 = v2288[v2289];
      var v2290 = attrCode$$1 & 7;
      palette$$1 = v2290 << 2;
      texel$$2 = tileYLine$$2 - 1;
      var v6524 = pixelPosition$$4 < pixelPositionEnd$$2;
      if(v6524) {
        v6524 = scrollXAdjusted$$2 < 256
      }
      var v2293 = v6524;
      for(;v2293;) {
        var v2291 = this.frameBuffer;
        var v2292 = pixelPosition$$4;
        pixelPosition$$4 = pixelPosition$$4 + 1;
        var v6525 = this.gbcBGPalette;
        var v10656 = texel$$2 = texel$$2 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v9106 = tile$$2[v10656]
        }
        var v6526 = palette$$1 | v9106;
        JAMScript.set(v2291, v2292, v6525[v6526]);
        scrollXAdjusted$$2 = scrollXAdjusted$$2 + 1;
        var v6527 = pixelPosition$$4 < pixelPositionEnd$$2;
        if(v6527) {
          v6527 = scrollXAdjusted$$2 < 256
        }
        v2293 = v6527
      }
    }
    var v6528 = pixelPositionEnd$$2 - pixelPosition$$4;
    var v2295 = v6528 >> 3;
    scrollXAdjustedAligned$$2 = v2295 + tileYDown$$2;
    var v2319 = tileYDown$$2 < scrollXAdjustedAligned$$2;
    for(;v2319;) {
      var v2296 = this.BGCHRBank1;
      chrCode$$2 = v2296[tileYDown$$2];
      var v6529 = this.gfxBackgroundBankOffset;
      var v2297 = chrCode$$2 < v6529;
      if(v2297) {
        chrCode$$2 = chrCode$$2 | 256
      }
      var v2298 = this.BGCHRBank2;
      var v2299 = tileYDown$$2;
      tileYDown$$2 = tileYDown$$2 + 1;
      attrCode$$1 = v2298[v2299];
      var v2300 = this.tileCache;
      var v10657 = attrCode$$1 & 8;
      var v9107 = v10657 << 8;
      var v10658 = attrCode$$1 & 96;
      var v9108 = v10658 << 4;
      var v6530 = v9107 | v9108;
      var v2301 = v6530 | chrCode$$2;
      tile$$2 = v2300[v2301];
      var v2302 = attrCode$$1 & 7;
      palette$$1 = v2302 << 2;
      texel$$2 = tileYLine$$2;
      var v2303 = this.frameBuffer;
      var v2304 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6531 = this.gbcBGPalette;
      var v10659 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9109 = tile$$2[v10659]
      }
      var v6532 = palette$$1 | v9109;
      JAMScript.set(v2303, v2304, v6531[v6532]);
      var v2305 = this.frameBuffer;
      var v2306 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6533 = this.gbcBGPalette;
      var v10660 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9110 = tile$$2[v10660]
      }
      var v6534 = palette$$1 | v9110;
      JAMScript.set(v2305, v2306, v6533[v6534]);
      var v2307 = this.frameBuffer;
      var v2308 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6535 = this.gbcBGPalette;
      var v10661 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9111 = tile$$2[v10661]
      }
      var v6536 = palette$$1 | v9111;
      JAMScript.set(v2307, v2308, v6535[v6536]);
      var v2309 = this.frameBuffer;
      var v2310 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6537 = this.gbcBGPalette;
      var v10662 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9112 = tile$$2[v10662]
      }
      var v6538 = palette$$1 | v9112;
      JAMScript.set(v2309, v2310, v6537[v6538]);
      var v2311 = this.frameBuffer;
      var v2312 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6539 = this.gbcBGPalette;
      var v10663 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9113 = tile$$2[v10663]
      }
      var v6540 = palette$$1 | v9113;
      JAMScript.set(v2311, v2312, v6539[v6540]);
      var v2313 = this.frameBuffer;
      var v2314 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6541 = this.gbcBGPalette;
      var v10664 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9114 = tile$$2[v10664]
      }
      var v6542 = palette$$1 | v9114;
      JAMScript.set(v2313, v2314, v6541[v6542]);
      var v2315 = this.frameBuffer;
      var v2316 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6543 = this.gbcBGPalette;
      var v10665 = texel$$2;
      texel$$2 = texel$$2 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9115 = tile$$2[v10665]
      }
      var v6544 = palette$$1 | v9115;
      JAMScript.set(v2315, v2316, v6543[v6544]);
      var v2317 = this.frameBuffer;
      var v2318 = pixelPosition$$4;
      pixelPosition$$4 = pixelPosition$$4 + 1;
      var v6545 = this.gbcBGPalette;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9116 = tile$$2[texel$$2]
      }
      var v6546 = palette$$1 | v9116;
      JAMScript.set(v2317, v2318, v6545[v6546]);
      v2319 = tileYDown$$2 < scrollXAdjustedAligned$$2
    }
    var v2340 = pixelPosition$$4 < pixelPositionEnd$$2;
    if(v2340) {
      var v2320 = this.BGCHRBank1;
      chrCode$$2 = v2320[tileYDown$$2];
      var v6547 = this.gfxBackgroundBankOffset;
      var v2321 = chrCode$$2 < v6547;
      if(v2321) {
        chrCode$$2 = chrCode$$2 | 256
      }
      var v2322 = this.BGCHRBank2;
      attrCode$$1 = v2322[tileYDown$$2];
      var v2323 = this.tileCache;
      var v10666 = attrCode$$1 & 8;
      var v9117 = v10666 << 8;
      var v10667 = attrCode$$1 & 96;
      var v9118 = v10667 << 4;
      var v6548 = v9117 | v9118;
      var v2324 = v6548 | chrCode$$2;
      tile$$2 = v2323[v2324];
      var v2325 = attrCode$$1 & 7;
      palette$$1 = v2325 << 2;
      var v2339 = pixelPositionEnd$$2 - pixelPosition$$4;
      switch(v2339) {
        case 7:
          var v2326 = this.frameBuffer;
          var v2327 = pixelPosition$$4 + 6;
          var v6549 = this.gbcBGPalette;
          var v10668 = tileYLine$$2 | 6;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9119 = tile$$2[v10668]
          }
          var v6550 = palette$$1 | v9119;
          JAMScript.set(v2326, v2327, v6549[v6550]);
        case 6:
          var v2328 = this.frameBuffer;
          var v2329 = pixelPosition$$4 + 5;
          var v6551 = this.gbcBGPalette;
          var v10669 = tileYLine$$2 | 5;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9120 = tile$$2[v10669]
          }
          var v6552 = palette$$1 | v9120;
          JAMScript.set(v2328, v2329, v6551[v6552]);
        case 5:
          var v2330 = this.frameBuffer;
          var v2331 = pixelPosition$$4 + 4;
          var v6553 = this.gbcBGPalette;
          var v10670 = tileYLine$$2 | 4;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9121 = tile$$2[v10670]
          }
          var v6554 = palette$$1 | v9121;
          JAMScript.set(v2330, v2331, v6553[v6554]);
        case 4:
          var v2332 = this.frameBuffer;
          var v2333 = pixelPosition$$4 + 3;
          var v6555 = this.gbcBGPalette;
          var v10671 = tileYLine$$2 | 3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9122 = tile$$2[v10671]
          }
          var v6556 = palette$$1 | v9122;
          JAMScript.set(v2332, v2333, v6555[v6556]);
        case 3:
          var v2334 = this.frameBuffer;
          var v2335 = pixelPosition$$4 + 2;
          var v6557 = this.gbcBGPalette;
          var v10672 = tileYLine$$2 | 2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9123 = tile$$2[v10672]
          }
          var v6558 = palette$$1 | v9123;
          JAMScript.set(v2334, v2335, v6557[v6558]);
        case 2:
          var v2336 = this.frameBuffer;
          var v2337 = pixelPosition$$4 + 1;
          var v6559 = this.gbcBGPalette;
          var v10673 = tileYLine$$2 | 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9124 = tile$$2[v10673]
          }
          var v6560 = palette$$1 | v9124;
          JAMScript.set(v2336, v2337, v6559[v6560]);
        case 1:
          var v2338 = this.frameBuffer;
          var v6561 = this.gbcBGPalette;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9125 = tile$$2[tileYLine$$2]
          }
          var v6562 = palette$$1 | v9125;
          JAMScript.set(v2338, pixelPosition$$4, v6561[v6562])
      }
    }
  }
  return
}
function v694(scanlineToRender$$2) {
  var v6563 = this.backgroundY;
  var v2342 = v6563 + scanlineToRender$$2;
  var scrollYAdjusted$$1 = v2342 & 255;
  var v2343 = scrollYAdjusted$$1 & 7;
  var tileYLine$$1 = v2343 << 3;
  var v2344 = this.gfxBackgroundCHRBankPosition;
  var v6564 = scrollYAdjusted$$1 & 248;
  var v2345 = v6564 << 2;
  var tileYDown$$1 = v2344 | v2345;
  var v6565 = this.backgroundX;
  var v6566 = this.currentX;
  var v2346 = v6565 + v6566;
  var scrollXAdjusted$$1 = v2346 & 255;
  var v2347 = this.pixelStart;
  var v2348 = this.currentX;
  var pixelPosition$$3 = v2347 + v2348;
  var v2349 = this.pixelStart;
  var v6567;
  var v10674 = this.gfxWindowDisplay;
  if(v10674) {
    var v11547 = this.windowY;
    var v11269 = scanlineToRender$$2 - v11547;
    v10674 = v11269 >= 0
  }
  var v9128 = v10674;
  if(v9128) {
    var v11270 = this.windowX;
    var v10675 = Math.max(v11270, 0);
    var v10676 = this.currentX;
    var v9126 = v10675 + v10676;
    var v9127 = this.pixelEnd;
    v6567 = Math.min(v9126, v9127)
  }else {
    v6567 = this.pixelEnd
  }
  var v2350 = v6567;
  var pixelPositionEnd$$1 = v2349 + v2350;
  var v2351 = scrollXAdjusted$$1 >> 3;
  var tileNumber$$2 = tileYDown$$1 + v2351;
  var v2352 = this.BGCHRBank1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var chrCode$$1 = v2352[tileNumber$$2]
  }
  var v6568 = this.gfxBackgroundBankOffset;
  var v2353 = chrCode$$1 < v6568;
  if(v2353) {
    chrCode$$1 = chrCode$$1 | 256
  }
  var v2354 = this.BGCHRBank2;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var attrCode = v2354[tileNumber$$2]
  }
  var v2355 = this.tileCache;
  var v10677 = attrCode & 8;
  var v9129 = v10677 << 8;
  var v10678 = attrCode & 96;
  var v9130 = v10678 << 4;
  var v6569 = v9129 | v9130;
  var v2356 = v6569 | chrCode$$1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tile$$1 = v2355[v2356]
  }
  var v6570 = attrCode & 7;
  var v2357 = v6570 << 2;
  var v6571 = attrCode & 128;
  var v2358 = v6571 >> 2;
  var palette = v2357 | v2358;
  var texel$$1 = scrollXAdjusted$$1 & 7;
  var v6572 = texel$$1 < 8;
  if(v6572) {
    var v9131 = pixelPosition$$3 < pixelPositionEnd$$1;
    if(v9131) {
      v9131 = scrollXAdjusted$$1 < 256
    }
    v6572 = v9131
  }
  var v2361 = v6572;
  for(;v2361;) {
    var v2359 = this.frameBuffer;
    var v2360 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6573 = this.gbcBGPalette;
    var v11271 = texel$$1;
    texel$$1 = texel$$1 + 1;
    var v10679 = tileYLine$$1 | v11271;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9132 = tile$$1[v10679]
    }
    var v6574 = palette | v9132;
    JAMScript.set(v2359, v2360, v6573[v6574]);
    scrollXAdjusted$$1 = scrollXAdjusted$$1 + 1;
    var v6575 = texel$$1 < 8;
    if(v6575) {
      var v9133 = pixelPosition$$3 < pixelPositionEnd$$1;
      if(v9133) {
        v9133 = scrollXAdjusted$$1 < 256
      }
      v6575 = v9133
    }
    v2361 = v6575
  }
  var v6576 = pixelPositionEnd$$1 - pixelPosition$$3;
  var v6577 = 256 - scrollXAdjusted$$1;
  var v2362 = Math.min(v6576, v6577);
  var scrollXAdjustedAligned$$1 = v2362 >> 3;
  var v6578 = scrollXAdjustedAligned$$1 << 3;
  scrollXAdjusted$$1 = scrollXAdjusted$$1 + v6578;
  scrollXAdjustedAligned$$1 = scrollXAdjustedAligned$$1 + tileNumber$$2;
  var v2387 = tileNumber$$2 < scrollXAdjustedAligned$$1;
  for(;v2387;) {
    var v2363 = this.BGCHRBank1;
    var v2364 = tileNumber$$2 = tileNumber$$2 + 1;
    chrCode$$1 = v2363[v2364];
    var v6579 = this.gfxBackgroundBankOffset;
    var v2365 = chrCode$$1 < v6579;
    if(v2365) {
      chrCode$$1 = chrCode$$1 | 256
    }
    var v2366 = this.BGCHRBank2;
    attrCode = v2366[tileNumber$$2];
    var v2367 = this.tileCache;
    var v10680 = attrCode & 8;
    var v9134 = v10680 << 8;
    var v10681 = attrCode & 96;
    var v9135 = v10681 << 4;
    var v6580 = v9134 | v9135;
    var v2368 = v6580 | chrCode$$1;
    tile$$1 = v2367[v2368];
    var v6581 = attrCode & 7;
    var v2369 = v6581 << 2;
    var v6582 = attrCode & 128;
    var v2370 = v6582 >> 2;
    palette = v2369 | v2370;
    texel$$1 = tileYLine$$1;
    var v2371 = this.frameBuffer;
    var v2372 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6583 = this.gbcBGPalette;
    var v10682 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9136 = tile$$1[v10682]
    }
    var v6584 = palette | v9136;
    JAMScript.set(v2371, v2372, v6583[v6584]);
    var v2373 = this.frameBuffer;
    var v2374 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6585 = this.gbcBGPalette;
    var v10683 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9137 = tile$$1[v10683]
    }
    var v6586 = palette | v9137;
    JAMScript.set(v2373, v2374, v6585[v6586]);
    var v2375 = this.frameBuffer;
    var v2376 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6587 = this.gbcBGPalette;
    var v10684 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9138 = tile$$1[v10684]
    }
    var v6588 = palette | v9138;
    JAMScript.set(v2375, v2376, v6587[v6588]);
    var v2377 = this.frameBuffer;
    var v2378 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6589 = this.gbcBGPalette;
    var v10685 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9139 = tile$$1[v10685]
    }
    var v6590 = palette | v9139;
    JAMScript.set(v2377, v2378, v6589[v6590]);
    var v2379 = this.frameBuffer;
    var v2380 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6591 = this.gbcBGPalette;
    var v10686 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9140 = tile$$1[v10686]
    }
    var v6592 = palette | v9140;
    JAMScript.set(v2379, v2380, v6591[v6592]);
    var v2381 = this.frameBuffer;
    var v2382 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6593 = this.gbcBGPalette;
    var v10687 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9141 = tile$$1[v10687]
    }
    var v6594 = palette | v9141;
    JAMScript.set(v2381, v2382, v6593[v6594]);
    var v2383 = this.frameBuffer;
    var v2384 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6595 = this.gbcBGPalette;
    var v10688 = texel$$1;
    texel$$1 = texel$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9142 = tile$$1[v10688]
    }
    var v6596 = palette | v9142;
    JAMScript.set(v2383, v2384, v6595[v6596]);
    var v2385 = this.frameBuffer;
    var v2386 = pixelPosition$$3;
    pixelPosition$$3 = pixelPosition$$3 + 1;
    var v6597 = this.gbcBGPalette;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9143 = tile$$1[texel$$1]
    }
    var v6598 = palette | v9143;
    JAMScript.set(v2385, v2386, v6597[v6598]);
    v2387 = tileNumber$$2 < scrollXAdjustedAligned$$1
  }
  var v2448 = pixelPosition$$3 < pixelPositionEnd$$1;
  if(v2448) {
    var v2399 = scrollXAdjusted$$1 < 256;
    if(v2399) {
      var v2388 = this.BGCHRBank1;
      var v2389 = tileNumber$$2 = tileNumber$$2 + 1;
      chrCode$$1 = v2388[v2389];
      var v6599 = this.gfxBackgroundBankOffset;
      var v2390 = chrCode$$1 < v6599;
      if(v2390) {
        chrCode$$1 = chrCode$$1 | 256
      }
      var v2391 = this.BGCHRBank2;
      attrCode = v2391[tileNumber$$2];
      var v2392 = this.tileCache;
      var v10689 = attrCode & 8;
      var v9144 = v10689 << 8;
      var v10690 = attrCode & 96;
      var v9145 = v10690 << 4;
      var v6600 = v9144 | v9145;
      var v2393 = v6600 | chrCode$$1;
      tile$$1 = v2392[v2393];
      var v6601 = attrCode & 7;
      var v2394 = v6601 << 2;
      var v6602 = attrCode & 128;
      var v2395 = v6602 >> 2;
      palette = v2394 | v2395;
      texel$$1 = tileYLine$$1 - 1;
      var v6603 = pixelPosition$$3 < pixelPositionEnd$$1;
      if(v6603) {
        v6603 = scrollXAdjusted$$1 < 256
      }
      var v2398 = v6603;
      for(;v2398;) {
        var v2396 = this.frameBuffer;
        var v2397 = pixelPosition$$3;
        pixelPosition$$3 = pixelPosition$$3 + 1;
        var v6604 = this.gbcBGPalette;
        var v10691 = texel$$1 = texel$$1 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v9146 = tile$$1[v10691]
        }
        var v6605 = palette | v9146;
        JAMScript.set(v2396, v2397, v6604[v6605]);
        scrollXAdjusted$$1 = scrollXAdjusted$$1 + 1;
        var v6606 = pixelPosition$$3 < pixelPositionEnd$$1;
        if(v6606) {
          v6606 = scrollXAdjusted$$1 < 256
        }
        v2398 = v6606
      }
    }
    var v6607 = pixelPositionEnd$$1 - pixelPosition$$3;
    var v2400 = v6607 >> 3;
    scrollXAdjustedAligned$$1 = v2400 + tileYDown$$1;
    var v2425 = tileYDown$$1 < scrollXAdjustedAligned$$1;
    for(;v2425;) {
      var v2401 = this.BGCHRBank1;
      chrCode$$1 = v2401[tileYDown$$1];
      var v6608 = this.gfxBackgroundBankOffset;
      var v2402 = chrCode$$1 < v6608;
      if(v2402) {
        chrCode$$1 = chrCode$$1 | 256
      }
      var v2403 = this.BGCHRBank2;
      var v2404 = tileYDown$$1;
      tileYDown$$1 = tileYDown$$1 + 1;
      attrCode = v2403[v2404];
      var v2405 = this.tileCache;
      var v10692 = attrCode & 8;
      var v9147 = v10692 << 8;
      var v10693 = attrCode & 96;
      var v9148 = v10693 << 4;
      var v6609 = v9147 | v9148;
      var v2406 = v6609 | chrCode$$1;
      tile$$1 = v2405[v2406];
      var v6610 = attrCode & 7;
      var v2407 = v6610 << 2;
      var v6611 = attrCode & 128;
      var v2408 = v6611 >> 2;
      palette = v2407 | v2408;
      texel$$1 = tileYLine$$1;
      var v2409 = this.frameBuffer;
      var v2410 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6612 = this.gbcBGPalette;
      var v10694 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9149 = tile$$1[v10694]
      }
      var v6613 = palette | v9149;
      JAMScript.set(v2409, v2410, v6612[v6613]);
      var v2411 = this.frameBuffer;
      var v2412 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6614 = this.gbcBGPalette;
      var v10695 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9150 = tile$$1[v10695]
      }
      var v6615 = palette | v9150;
      JAMScript.set(v2411, v2412, v6614[v6615]);
      var v2413 = this.frameBuffer;
      var v2414 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6616 = this.gbcBGPalette;
      var v10696 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9151 = tile$$1[v10696]
      }
      var v6617 = palette | v9151;
      JAMScript.set(v2413, v2414, v6616[v6617]);
      var v2415 = this.frameBuffer;
      var v2416 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6618 = this.gbcBGPalette;
      var v10697 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9152 = tile$$1[v10697]
      }
      var v6619 = palette | v9152;
      JAMScript.set(v2415, v2416, v6618[v6619]);
      var v2417 = this.frameBuffer;
      var v2418 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6620 = this.gbcBGPalette;
      var v10698 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9153 = tile$$1[v10698]
      }
      var v6621 = palette | v9153;
      JAMScript.set(v2417, v2418, v6620[v6621]);
      var v2419 = this.frameBuffer;
      var v2420 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6622 = this.gbcBGPalette;
      var v10699 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9154 = tile$$1[v10699]
      }
      var v6623 = palette | v9154;
      JAMScript.set(v2419, v2420, v6622[v6623]);
      var v2421 = this.frameBuffer;
      var v2422 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6624 = this.gbcBGPalette;
      var v10700 = texel$$1;
      texel$$1 = texel$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9155 = tile$$1[v10700]
      }
      var v6625 = palette | v9155;
      JAMScript.set(v2421, v2422, v6624[v6625]);
      var v2423 = this.frameBuffer;
      var v2424 = pixelPosition$$3;
      pixelPosition$$3 = pixelPosition$$3 + 1;
      var v6626 = this.gbcBGPalette;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9156 = tile$$1[texel$$1]
      }
      var v6627 = palette | v9156;
      JAMScript.set(v2423, v2424, v6626[v6627]);
      v2425 = tileYDown$$1 < scrollXAdjustedAligned$$1
    }
    var v2447 = pixelPosition$$3 < pixelPositionEnd$$1;
    if(v2447) {
      var v2426 = this.BGCHRBank1;
      chrCode$$1 = v2426[tileYDown$$1];
      var v6628 = this.gfxBackgroundBankOffset;
      var v2427 = chrCode$$1 < v6628;
      if(v2427) {
        chrCode$$1 = chrCode$$1 | 256
      }
      var v2428 = this.BGCHRBank2;
      attrCode = v2428[tileYDown$$1];
      var v2429 = this.tileCache;
      var v10701 = attrCode & 8;
      var v9157 = v10701 << 8;
      var v10702 = attrCode & 96;
      var v9158 = v10702 << 4;
      var v6629 = v9157 | v9158;
      var v2430 = v6629 | chrCode$$1;
      tile$$1 = v2429[v2430];
      var v6630 = attrCode & 7;
      var v2431 = v6630 << 2;
      var v6631 = attrCode & 128;
      var v2432 = v6631 >> 2;
      palette = v2431 | v2432;
      var v2446 = pixelPositionEnd$$1 - pixelPosition$$3;
      switch(v2446) {
        case 7:
          var v2433 = this.frameBuffer;
          var v2434 = pixelPosition$$3 + 6;
          var v6632 = this.gbcBGPalette;
          var v10703 = tileYLine$$1 | 6;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9159 = tile$$1[v10703]
          }
          var v6633 = palette | v9159;
          JAMScript.set(v2433, v2434, v6632[v6633]);
        case 6:
          var v2435 = this.frameBuffer;
          var v2436 = pixelPosition$$3 + 5;
          var v6634 = this.gbcBGPalette;
          var v10704 = tileYLine$$1 | 5;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9160 = tile$$1[v10704]
          }
          var v6635 = palette | v9160;
          JAMScript.set(v2435, v2436, v6634[v6635]);
        case 5:
          var v2437 = this.frameBuffer;
          var v2438 = pixelPosition$$3 + 4;
          var v6636 = this.gbcBGPalette;
          var v10705 = tileYLine$$1 | 4;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9161 = tile$$1[v10705]
          }
          var v6637 = palette | v9161;
          JAMScript.set(v2437, v2438, v6636[v6637]);
        case 4:
          var v2439 = this.frameBuffer;
          var v2440 = pixelPosition$$3 + 3;
          var v6638 = this.gbcBGPalette;
          var v10706 = tileYLine$$1 | 3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9162 = tile$$1[v10706]
          }
          var v6639 = palette | v9162;
          JAMScript.set(v2439, v2440, v6638[v6639]);
        case 3:
          var v2441 = this.frameBuffer;
          var v2442 = pixelPosition$$3 + 2;
          var v6640 = this.gbcBGPalette;
          var v10707 = tileYLine$$1 | 2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9163 = tile$$1[v10707]
          }
          var v6641 = palette | v9163;
          JAMScript.set(v2441, v2442, v6640[v6641]);
        case 2:
          var v2443 = this.frameBuffer;
          var v2444 = pixelPosition$$3 + 1;
          var v6642 = this.gbcBGPalette;
          var v10708 = tileYLine$$1 | 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9164 = tile$$1[v10708]
          }
          var v6643 = palette | v9164;
          JAMScript.set(v2443, v2444, v6642[v6643]);
        case 1:
          var v2445 = this.frameBuffer;
          var v6644 = this.gbcBGPalette;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v9165 = tile$$1[tileYLine$$1]
          }
          var v6645 = palette | v9165;
          JAMScript.set(v2445, pixelPosition$$3, v6644[v6645])
      }
    }
  }
  return
}
function v693(scanlineToRender$$1) {
  var v6646 = this.backgroundY;
  var v2449 = v6646 + scanlineToRender$$1;
  var scrollYAdjusted = v2449 & 255;
  var v2450 = scrollYAdjusted & 7;
  var tileYLine = v2450 << 3;
  var v2451 = this.gfxBackgroundCHRBankPosition;
  var v6647 = scrollYAdjusted & 248;
  var v2452 = v6647 << 2;
  var tileYDown = v2451 | v2452;
  var v6648 = this.backgroundX;
  var v6649 = this.currentX;
  var v2453 = v6648 + v6649;
  var scrollXAdjusted = v2453 & 255;
  var v2454 = this.pixelStart;
  var v2455 = this.currentX;
  var pixelPosition$$2 = v2454 + v2455;
  var v2456 = this.pixelStart;
  var v6650;
  var v10709 = this.gfxWindowDisplay;
  if(v10709) {
    var v11548 = this.windowY;
    var v11272 = scanlineToRender$$1 - v11548;
    v10709 = v11272 >= 0
  }
  var v9168 = v10709;
  if(v9168) {
    var v11273 = this.windowX;
    var v10710 = Math.max(v11273, 0);
    var v10711 = this.currentX;
    var v9166 = v10710 + v10711;
    var v9167 = this.pixelEnd;
    v6650 = Math.min(v9166, v9167)
  }else {
    v6650 = this.pixelEnd
  }
  var v2457 = v6650;
  var pixelPositionEnd = v2456 + v2457;
  var v2458 = scrollXAdjusted >> 3;
  var tileNumber$$1 = tileYDown + v2458;
  var v2459 = this.BGCHRBank1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var chrCode = v2459[tileNumber$$1]
  }
  var v6651 = this.gfxBackgroundBankOffset;
  var v2460 = chrCode < v6651;
  if(v2460) {
    chrCode = chrCode | 256
  }
  var v2461 = this.tileCache;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var tile = v2461[chrCode]
  }
  var texel = scrollXAdjusted & 7;
  var v6652 = texel < 8;
  if(v6652) {
    var v9169 = pixelPosition$$2 < pixelPositionEnd;
    if(v9169) {
      v9169 = scrollXAdjusted < 256
    }
    v6652 = v9169
  }
  var v2464 = v6652;
  for(;v2464;) {
    var v2462 = this.frameBuffer;
    var v2463 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6653 = this.BGPalette;
    var v10712 = texel;
    texel = texel + 1;
    var v9170 = tileYLine | v10712;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6654 = tile[v9170]
    }
    JAMScript.set(v2462, v2463, v6653[v6654], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    scrollXAdjusted = scrollXAdjusted + 1;
    var v6655 = texel < 8;
    if(v6655) {
      var v9171 = pixelPosition$$2 < pixelPositionEnd;
      if(v9171) {
        v9171 = scrollXAdjusted < 256
      }
      v6655 = v9171
    }
    v2464 = v6655
  }
  var v6656 = pixelPositionEnd - pixelPosition$$2;
  var v6657 = 256 - scrollXAdjusted;
  var v2465 = Math.min(v6656, v6657);
  var scrollXAdjustedAligned = v2465 >> 3;
  var v6658 = scrollXAdjustedAligned << 3;
  scrollXAdjusted = scrollXAdjusted + v6658;
  scrollXAdjustedAligned = scrollXAdjustedAligned + tileNumber$$1;
  var v2486 = tileNumber$$1 < scrollXAdjustedAligned;
  for(;v2486;) {
    var v2466 = this.BGCHRBank1;
    var v2467 = tileNumber$$1 = tileNumber$$1 + 1;
    chrCode = v2466[v2467];
    var v6659 = this.gfxBackgroundBankOffset;
    var v2468 = chrCode < v6659;
    if(v2468) {
      chrCode = chrCode | 256
    }
    var v2469 = this.tileCache;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      tile = v2469[chrCode]
    }
    texel = tileYLine;
    var v2470 = this.frameBuffer;
    var v2471 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6660 = this.BGPalette;
    var v9172 = texel;
    texel = texel + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6661 = tile[v9172]
    }
    JAMScript.set(v2470, v2471, v6660[v6661], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    var v2472 = this.frameBuffer;
    var v2473 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6662 = this.BGPalette;
    var v9173 = texel;
    texel = texel + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6663 = tile[v9173]
    }
    JAMScript.set(v2472, v2473, v6662[v6663], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    var v2474 = this.frameBuffer;
    var v2475 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6664 = this.BGPalette;
    var v9174 = texel;
    texel = texel + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6665 = tile[v9174]
    }
    JAMScript.set(v2474, v2475, v6664[v6665], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    var v2476 = this.frameBuffer;
    var v2477 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6666 = this.BGPalette;
    var v9175 = texel;
    texel = texel + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6667 = tile[v9175]
    }
    JAMScript.set(v2476, v2477, v6666[v6667], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    var v2478 = this.frameBuffer;
    var v2479 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6668 = this.BGPalette;
    var v9176 = texel;
    texel = texel + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6669 = tile[v9176]
    }
    JAMScript.set(v2478, v2479, v6668[v6669], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    var v2480 = this.frameBuffer;
    var v2481 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6670 = this.BGPalette;
    var v9177 = texel;
    texel = texel + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6671 = tile[v9177]
    }
    JAMScript.set(v2480, v2481, v6670[v6671], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    var v2482 = this.frameBuffer;
    var v2483 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6672 = this.BGPalette;
    var v9178 = texel;
    texel = texel + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6673 = tile[v9178]
    }
    JAMScript.set(v2482, v2483, v6672[v6673], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    var v2484 = this.frameBuffer;
    var v2485 = pixelPosition$$2;
    pixelPosition$$2 = pixelPosition$$2 + 1;
    var v6674 = this.BGPalette;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6675 = tile[texel]
    }
    JAMScript.set(v2484, v2485, v6674[v6675], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
    v2486 = tileNumber$$1 < scrollXAdjustedAligned
  }
  var v2535 = pixelPosition$$2 < pixelPositionEnd;
  if(v2535) {
    var v2494 = scrollXAdjusted < 256;
    if(v2494) {
      var v2487 = this.BGCHRBank1;
      var v2488 = tileNumber$$1 = tileNumber$$1 + 1;
      chrCode = v2487[v2488];
      var v6676 = this.gfxBackgroundBankOffset;
      var v2489 = chrCode < v6676;
      if(v2489) {
        chrCode = chrCode | 256
      }
      var v2490 = this.tileCache;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        tile = v2490[chrCode]
      }
      texel = tileYLine - 1;
      var v6677 = pixelPosition$$2 < pixelPositionEnd;
      if(v6677) {
        v6677 = scrollXAdjusted < 256
      }
      var v2493 = v6677;
      for(;v2493;) {
        var v2491 = this.frameBuffer;
        var v2492 = pixelPosition$$2;
        pixelPosition$$2 = pixelPosition$$2 + 1;
        var v6678 = this.BGPalette;
        var v9179 = texel = texel + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v6679 = tile[v9179]
        }
        JAMScript.set(v2491, v2492, v6678[v6679], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
        scrollXAdjusted = scrollXAdjusted + 1;
        var v6680 = pixelPosition$$2 < pixelPositionEnd;
        if(v6680) {
          v6680 = scrollXAdjusted < 256
        }
        v2493 = v6680
      }
    }
    var v6681 = pixelPositionEnd - pixelPosition$$2;
    var v2495 = v6681 >> 3;
    scrollXAdjustedAligned = v2495 + tileYDown;
    var v2516 = tileYDown < scrollXAdjustedAligned;
    for(;v2516;) {
      var v2496 = this.BGCHRBank1;
      var v2497 = tileYDown;
      tileYDown = tileYDown + 1;
      chrCode = v2496[v2497];
      var v6682 = this.gfxBackgroundBankOffset;
      var v2498 = chrCode < v6682;
      if(v2498) {
        chrCode = chrCode | 256
      }
      var v2499 = this.tileCache;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        tile = v2499[chrCode]
      }
      texel = tileYLine;
      var v2500 = this.frameBuffer;
      var v2501 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6683 = this.BGPalette;
      var v9180 = texel;
      texel = texel + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6684 = tile[v9180]
      }
      JAMScript.set(v2500, v2501, v6683[v6684], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      var v2502 = this.frameBuffer;
      var v2503 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6685 = this.BGPalette;
      var v9181 = texel;
      texel = texel + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6686 = tile[v9181]
      }
      JAMScript.set(v2502, v2503, v6685[v6686], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      var v2504 = this.frameBuffer;
      var v2505 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6687 = this.BGPalette;
      var v9182 = texel;
      texel = texel + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6688 = tile[v9182]
      }
      JAMScript.set(v2504, v2505, v6687[v6688], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      var v2506 = this.frameBuffer;
      var v2507 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6689 = this.BGPalette;
      var v9183 = texel;
      texel = texel + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6690 = tile[v9183]
      }
      JAMScript.set(v2506, v2507, v6689[v6690], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      var v2508 = this.frameBuffer;
      var v2509 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6691 = this.BGPalette;
      var v9184 = texel;
      texel = texel + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6692 = tile[v9184]
      }
      JAMScript.set(v2508, v2509, v6691[v6692], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      var v2510 = this.frameBuffer;
      var v2511 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6693 = this.BGPalette;
      var v9185 = texel;
      texel = texel + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6694 = tile[v9185]
      }
      JAMScript.set(v2510, v2511, v6693[v6694], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      var v2512 = this.frameBuffer;
      var v2513 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6695 = this.BGPalette;
      var v9186 = texel;
      texel = texel + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6696 = tile[v9186]
      }
      JAMScript.set(v2512, v2513, v6695[v6696], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      var v2514 = this.frameBuffer;
      var v2515 = pixelPosition$$2;
      pixelPosition$$2 = pixelPosition$$2 + 1;
      var v6697 = this.BGPalette;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6698 = tile[texel]
      }
      JAMScript.set(v2514, v2515, v6697[v6698], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
      v2516 = tileYDown < scrollXAdjustedAligned
    }
    var v2534 = pixelPosition$$2 < pixelPositionEnd;
    if(v2534) {
      var v2517 = this.BGCHRBank1;
      chrCode = v2517[tileYDown];
      var v6699 = this.gfxBackgroundBankOffset;
      var v2518 = chrCode < v6699;
      if(v2518) {
        chrCode = chrCode | 256
      }
      var v2519 = this.tileCache;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        tile = v2519[chrCode]
      }
      var v2533 = pixelPositionEnd - pixelPosition$$2;
      switch(v2533) {
        case 7:
          var v2520 = this.frameBuffer;
          var v2521 = pixelPosition$$2 + 6;
          var v6700 = this.BGPalette;
          var v9187 = tileYLine | 6;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6701 = tile[v9187]
          }
          JAMScript.set(v2520, v2521, v6700[v6701], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
        case 6:
          var v2522 = this.frameBuffer;
          var v2523 = pixelPosition$$2 + 5;
          var v6702 = this.BGPalette;
          var v9188 = tileYLine | 5;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6703 = tile[v9188]
          }
          JAMScript.set(v2522, v2523, v6702[v6703], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
        case 5:
          var v2524 = this.frameBuffer;
          var v2525 = pixelPosition$$2 + 4;
          var v6704 = this.BGPalette;
          var v9189 = tileYLine | 4;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6705 = tile[v9189]
          }
          JAMScript.set(v2524, v2525, v6704[v6705], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
        case 4:
          var v2526 = this.frameBuffer;
          var v2527 = pixelPosition$$2 + 3;
          var v6706 = this.BGPalette;
          var v9190 = tileYLine | 3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6707 = tile[v9190]
          }
          JAMScript.set(v2526, v2527, v6706[v6707], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
        case 3:
          var v2528 = this.frameBuffer;
          var v2529 = pixelPosition$$2 + 2;
          var v6708 = this.BGPalette;
          var v9191 = tileYLine | 2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6709 = tile[v9191]
          }
          JAMScript.set(v2528, v2529, v6708[v6709], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
        case 2:
          var v2530 = this.frameBuffer;
          var v2531 = pixelPosition$$2 + 1;
          var v6710 = this.BGPalette;
          var v9192 = tileYLine | 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6711 = tile[v9192]
          }
          JAMScript.set(v2530, v2531, v6710[v6711], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074);
        case 1:
          var v2532 = this.frameBuffer;
          var v6712 = this.BGPalette;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v6713 = tile[tileYLine]
          }
          JAMScript.set(v2532, pixelPosition$$2, v6712[v6713], JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074)
      }
    }
  }
  return
}
function v692(index$$61, data$$29) {
  var v9193 = this.gbcOBJRawPalette;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6714 = v9193[index$$61]
  }
  var v2540 = v6714 != data$$29;
  if(v2540) {
    var v2536 = this.gbcOBJRawPalette;
    JAMScript.set(v2536, index$$61, data$$29);
    var v6715 = index$$61 & 6;
    var v2539 = v6715 > 0;
    if(v2539) {
      JAMScript.call(this.midScanLineJIT, this, []);
      var v2537 = this.gbcOBJPalette;
      var v2538 = index$$61 >> 1;
      var v11549 = this.gbcOBJRawPalette;
      var v11550 = index$$61 | 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v11274 = v11549[v11550]
      }
      var v10713 = v11274 << 8;
      var v11275 = this.gbcOBJRawPalette;
      var v11276 = index$$61 & 62;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10714 = v11275[v11276]
      }
      var v9194 = v10713 | v10714;
      var v6716 = JAMScript.call(this.RGBTint, this, [v9194]);
      v2537[v2538] = 16777216 | v6716
    }
  }
  return
}
function v691(index$$60, data$$28) {
  var v9195 = this.gbcBGRawPalette;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6717 = v9195[index$$60]
  }
  var v2551 = v6717 != data$$28;
  if(v2551) {
    JAMScript.call(this.midScanLineJIT, this, []);
    var v2541 = this.gbcBGRawPalette;
    JAMScript.set(v2541, index$$60, data$$28);
    var v6718 = index$$60 & 6;
    var v2550 = v6718 == 0;
    if(v2550) {
      var v11277 = this.gbcBGRawPalette;
      var v11278 = index$$60 | 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10715 = v11277[v11278]
      }
      var v9196 = v10715 << 8;
      var v10716 = this.gbcBGRawPalette;
      var v10717 = index$$60 & 62;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9197 = v10716[v10717]
      }
      var v6719 = v9196 | v9197;
      var v2542 = JAMScript.call(this.RGBTint, this, [v6719]);
      data$$28 = 33554432 | v2542;
      index$$60 = index$$60 >> 1;
      var v2543 = this.gbcBGPalette;
      JAMScript.set(v2543, index$$60, data$$28);
      var v2544 = this.gbcBGPalette;
      var v2545 = 32 | index$$60;
      v2544[v2545] = 16777216 | data$$28
    }else {
      var v10718 = this.gbcBGRawPalette;
      var v10719 = index$$60 | 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v9198 = v10718[v10719]
      }
      var v6720 = v9198 << 8;
      var v9199 = this.gbcBGRawPalette;
      var v9200 = index$$60 & 62;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v6721 = v9199[v9200]
      }
      var v2546 = v6720 | v6721;
      data$$28 = JAMScript.call(this.RGBTint, this, [v2546]);
      index$$60 = index$$60 >> 1;
      var v2547 = this.gbcBGPalette;
      JAMScript.set(v2547, index$$60, data$$28);
      var v2548 = this.gbcBGPalette;
      var v2549 = 32 | index$$60;
      v2548[v2549] = 16777216 | data$$28
    }
  }
  return
}
function v690(index$$59, data$$27) {
  var v2552 = this.gbOBJColorizedPalette;
  var v2553 = index$$59 | 1;
  var v6722 = this.cachedOBJPaletteConversion;
  var v10720 = data$$27 >> 2;
  var v9201 = v10720 & 3;
  var v6723 = index$$59 | v9201;
  v2552[v2553] = v6722[v6723];
  var v2554 = this.gbOBJColorizedPalette;
  var v2555 = index$$59 | 2;
  var v6724 = this.cachedOBJPaletteConversion;
  var v10721 = data$$27 >> 4;
  var v9202 = v10721 & 3;
  var v6725 = index$$59 | v9202;
  v2554[v2555] = v6724[v6725];
  var v2556 = this.gbOBJColorizedPalette;
  var v2557 = index$$59 | 3;
  var v6726 = this.cachedOBJPaletteConversion;
  var v9203 = data$$27 >> 6;
  var v6727 = index$$59 | v9203;
  v2556[v2557] = v6726[v6727];
  return
}
function v689(index$$58, data$$26) {
  var v2558 = this.gbOBJPalette;
  var v2559 = index$$58 | 1;
  var v6728 = this.colors;
  var v9204 = data$$26 >> 2;
  var v6729 = v9204 & 3;
  v2558[v2559] = v6728[v6729];
  var v2560 = this.gbOBJPalette;
  var v2561 = index$$58 | 2;
  var v6730 = this.colors;
  var v9205 = data$$26 >> 4;
  var v6731 = v9205 & 3;
  v2560[v2561] = v6730[v6731];
  var v2562 = this.gbOBJPalette;
  var v2563 = index$$58 | 3;
  var v6732 = this.colors;
  var v6733 = data$$26 >> 6;
  v2562[v2563] = v6732[v6733];
  return
}
function v688(data$$25) {
  var v2564 = this.gbBGColorizedPalette;
  var v9206 = this.cachedBGPaletteConversion;
  var v9207 = data$$25 & 3;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6734 = v9206[v9207]
  }
  v2564[0] = v6734 | 33554432;
  var v2565 = this.gbBGColorizedPalette;
  var v6735 = this.cachedBGPaletteConversion;
  var v9208 = data$$25 >> 2;
  var v6736 = v9208 & 3;
  v2565[1] = v6735[v6736];
  var v2566 = this.gbBGColorizedPalette;
  var v6737 = this.cachedBGPaletteConversion;
  var v9209 = data$$25 >> 4;
  var v6738 = v9209 & 3;
  v2566[2] = v6737[v6738];
  var v2567 = this.gbBGColorizedPalette;
  var v6739 = this.cachedBGPaletteConversion;
  var v6740 = data$$25 >> 6;
  v2567[3] = v6739[v6740];
  return
}
function v687(data$$24) {
  var v2568 = this.gbBGPalette;
  var v9210 = this.colors;
  var v9211 = data$$24 & 3;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v6741 = v9210[v9211]
  }
  v2568[0] = v6741 | 33554432;
  var v2569 = this.gbBGPalette;
  var v6742 = this.colors;
  var v9212 = data$$24 >> 2;
  var v6743 = v9212 & 3;
  v2569[1] = v6742[v6743];
  var v2570 = this.gbBGPalette;
  var v6744 = this.colors;
  var v9213 = data$$24 >> 4;
  var v6745 = v9213 & 3;
  v2570[2] = v6744[v6745];
  var v2571 = this.gbBGPalette;
  var v6746 = this.colors;
  var v6747 = data$$24 >> 6;
  v2571[3] = v6746[v6747];
  return
}
function v686() {
  var counter = 0;
  var v2576 = counter < 4;
  for(;v2576;) {
    var adjustedIndex = counter << 1;
    var v2572 = this.cachedBGPaletteConversion;
    var v2573 = counter;
    var v11279 = this.gbcBGRawPalette;
    var v11280 = adjustedIndex | 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v10722 = v11279[v11280]
    }
    var v9214 = v10722 << 8;
    var v10723 = this.gbcBGRawPalette;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9215 = v10723[adjustedIndex]
    }
    var v6748 = v9214 | v9215;
    var v11771 = JAMScript.call(this.RGBTint, this, [v6748]);
    v2572[v2573] = v11771;
    var v2574 = this.cachedOBJPaletteConversion;
    var v2575 = counter;
    var v11281 = this.gbcOBJRawPalette;
    var v11282 = adjustedIndex | 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v10724 = v11281[v11282]
    }
    var v9216 = v10724 << 8;
    var v10725 = this.gbcOBJRawPalette;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9217 = v10725[adjustedIndex]
    }
    var v6749 = v9216 | v9217;
    var v11772 = JAMScript.call(this.RGBTint, this, [v6749]);
    v2574[v2575] = v11772;
    counter = counter + 1;
    v2576 = counter < 4
  }
  counter = 4;
  var v2579 = counter < 8;
  for(;v2579;) {
    adjustedIndex = counter << 1;
    var v2577 = this.cachedOBJPaletteConversion;
    var v2578 = counter;
    var v11283 = this.gbcOBJRawPalette;
    var v11284 = adjustedIndex | 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v10726 = v11283[v11284]
    }
    var v9218 = v10726 << 8;
    var v10727 = this.gbcOBJRawPalette;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9219 = v10727[adjustedIndex]
    }
    var v6750 = v9218 | v9219;
    var v11773 = JAMScript.call(this.RGBTint, this, [v6750]);
    v2577[v2578] = v11773;
    counter = counter + 1;
    v2579 = counter < 8
  }
  this.updateGBBGPalette = this.updateGBColorizedBGPalette;
  this.updateGBOBJPalette = this.updateGBColorizedOBJPalette;
  var v6751 = this.memory;
  var v2580 = v6751[65351];
  JAMScript.call(this.updateGBBGPalette, this, [v2580]);
  var v6752 = this.memory;
  var v2581 = v6752[65352];
  JAMScript.call(this.updateGBOBJPalette, this, [0, v2581]);
  var v6753 = this.memory;
  var v2582 = v6753[65353];
  JAMScript.call(this.updateGBOBJPalette, this, [1, v2582]);
  this.colorizedGBPalettes = true;
  return
}
function v685(value$$30) {
  var r = value$$30 & 31;
  var v2583 = value$$30 >> 5;
  var g = v2583 & 31;
  var v2584 = value$$30 >> 10;
  var b = v2584 & 31;
  var v11551 = r * 13;
  var v11552 = g * 2;
  var v11285 = v11551 + v11552;
  var v10728 = v11285 + b;
  var v9220 = v10728 >> 1;
  var v6754 = v9220 << 16;
  var v10729 = g * 3;
  var v9221 = v10729 + b;
  var v6755 = v9221 << 9;
  var v2585 = v6754 | v6755;
  var v10730 = r * 3;
  var v10731 = g * 2;
  var v9222 = v10730 + v10731;
  var v9223 = b * 11;
  var v6756 = v9222 + v9223;
  var v2586 = v6756 >> 1;
  return v2585 | v2586
}
function v684() {
  var v2587;
  var v6757 = this.LCDisOn;
  if(v6757) {
    v2587 = this.LINECONTROL
  }else {
    v2587 = this.DISPLAYOFFCONTROL
  }
  this.LCDCONTROL = v2587;
  var tileIndex = 0;
  var v6758 = this.cGBC;
  var v2593 = !v6758;
  if(v2593) {
    var v2588 = this.colorizedGBPalettes;
    if(v2588) {
      this.BGPalette = this.gbBGColorizedPalette;
      this.OBJPalette = this.gbOBJColorizedPalette;
      this.updateGBBGPalette = this.updateGBColorizedBGPalette;
      this.updateGBOBJPalette = this.updateGBColorizedOBJPalette
    }else {
      this.BGPalette = this.gbBGPalette;
      this.OBJPalette = this.gbOBJPalette
    }
    var v11774 = JAMScript.call(this.generateCacheArray, this, [1792]);
    this.tileCache = v11774;
    tileIndex = 32768;
    var v2589 = tileIndex < 36864;
    for(;v2589;) {
      JAMScript.call(this.generateGBOAMTileLine, this, [tileIndex]);
      tileIndex = tileIndex + 2;
      v2589 = tileIndex < 36864
    }
    tileIndex = 36864;
    var v2590 = tileIndex < 38912;
    for(;v2590;) {
      JAMScript.call(this.generateGBTileLine, this, [tileIndex]);
      tileIndex = tileIndex + 2;
      v2590 = tileIndex < 38912
    }
    var v11775 = JAMScript.call(this.getTypedArray, this, [256, 0, "uint8"]);
    this.sortBuffer = v11775;
    var v11776 = JAMScript.call(this.getTypedArray, this, [10, 0, "int32"]);
    this.OAMAddressCache = v11776
  }else {
    var v2591;
    var v9224 = this.currVRAMBank;
    var v6759 = v9224 > 0;
    if(v6759) {
      v2591 = this.BGCHRBank2
    }else {
      v2591 = this.BGCHRBank1
    }
    this.BGCHRCurrentBank = v2591;
    var v11777 = JAMScript.call(this.generateCacheArray, this, [3968]);
    this.tileCache = v11777;
    var v2592 = tileIndex < 6144;
    for(;v2592;) {
      JAMScript.call(this.generateGBCTileBank1, this, [tileIndex]);
      JAMScript.call(this.generateGBCTileBank2, this, [tileIndex]);
      tileIndex = tileIndex + 16;
      v2592 = tileIndex < 6144
    }
  }
  JAMScript.call(this.renderPathBuild, this, []);
  return
}
function v683() {
  var v2594 = this.BGPriorityEnabled;
  if(v2594) {
    this.BGLayerRender = this.BGGBCLayerRender;
    this.WindowLayerRender = this.WindowGBCLayerRender
  }else {
    this.BGLayerRender = this.BGGBCLayerRenderNoPriorityFlagging;
    this.WindowLayerRender = this.WindowGBCLayerRenderNoPriorityFlagging
  }
  return
}
function v682() {
  var v6760 = this.cGBC;
  var v2595 = !v6760;
  if(v2595) {
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
  var v2596 = this.tileCache;
  v2596.length = 1792;
  var v2597 = settings[4];
  if(v2597) {
    var v11778 = JAMScript.call(this.getTypedArray, this, [4, 0, "int32"]);
    this.gbBGColorizedPalette = v11778;
    var v11779 = JAMScript.call(this.getTypedArray, this, [8, 0, "int32"]);
    this.gbOBJColorizedPalette = v11779;
    var v11780 = JAMScript.call(this.getTypedArray, this, [4, 0, "int32"]);
    this.cachedBGPaletteConversion = v11780;
    var v11781 = JAMScript.call(this.getTypedArray, this, [8, 0, "int32"]);
    this.cachedOBJPaletteConversion = v11781;
    this.BGPalette = this.gbBGColorizedPalette;
    this.OBJPalette = this.gbOBJColorizedPalette;
    this.gbOBJPalette = this.gbBGPalette = null;
    JAMScript.call(this.getGBCColor, this, [])
  }else {
    var v11782 = JAMScript.call(this.getTypedArray, this, [8, 0, "int32"]);
    this.gbOBJPalette = v11782;
    var v11783 = JAMScript.call(this.getTypedArray, this, [4, 0, "int32"]);
    this.gbBGPalette = v11783;
    this.BGPalette = this.gbBGPalette;
    this.OBJPalette = this.gbOBJPalette
  }
  var v11784 = JAMScript.call(this.getTypedArray, this, [256, 0, "uint8"]);
  this.sortBuffer = v11784;
  var v11785 = JAMScript.call(this.getTypedArray, this, [10, 0, "int32"]);
  this.OAMAddressCache = v11785;
  JAMScript.call(this.renderPathBuild, this, []);
  JAMScript.call(this.memoryReadJumpCompile, this, []);
  JAMScript.call(this.memoryWriteJumpCompile, this, []);
  return
}
function v680() {
  var v2598;
  var v6761 = this.LCDisOn;
  if(v6761) {
    v2598 = this.LINECONTROL
  }else {
    v2598 = this.DISPLAYOFFCONTROL
  }
  this.LCDCONTROL = v2598;
  var v2600 = this.cGBC;
  if(v2600) {
    var v11786 = JAMScript.call(this.getTypedArray, this, [64, 0, "uint8"]);
    this.gbcOBJRawPalette = v11786;
    var v11787 = JAMScript.call(this.getTypedArray, this, [64, 0, "uint8"]);
    this.gbcBGRawPalette = v11787;
    var v11788 = JAMScript.call(this.getTypedArray, this, [32, 16777216, "int32"]);
    this.gbcOBJPalette = v11788;
    var v11789 = JAMScript.call(this.getTypedArray, this, [64, 0, "int32"]);
    this.gbcBGPalette = v11789;
    var v11790 = JAMScript.call(this.getTypedArray, this, [2048, 0, "uint8"]);
    this.BGCHRBank2 = v11790;
    var v2599;
    var v9225 = this.currVRAMBank;
    var v6762 = v9225 > 0;
    if(v6762) {
      v2599 = this.BGCHRBank2
    }else {
      v2599 = this.BGCHRBank1
    }
    this.BGCHRCurrentBank = v2599;
    var v11791 = JAMScript.call(this.generateCacheArray, this, [3968]);
    this.tileCache = v11791
  }else {
    var v11792 = JAMScript.call(this.getTypedArray, this, [8, 0, "int32"]);
    this.gbOBJPalette = v11792;
    var v11793 = JAMScript.call(this.getTypedArray, this, [4, 0, "int32"]);
    this.gbBGPalette = v11793;
    this.BGPalette = this.gbBGPalette;
    this.OBJPalette = this.gbOBJPalette;
    var v11794 = JAMScript.call(this.generateCacheArray, this, [1792]);
    this.tileCache = v11794;
    var v11795 = JAMScript.call(this.getTypedArray, this, [256, 0, "uint8"]);
    this.sortBuffer = v11795;
    var v11796 = JAMScript.call(this.getTypedArray, this, [10, 0, "int32"]);
    this.OAMAddressCache = v11796
  }
  JAMScript.call(this.renderPathBuild, this, []);
  return
}
function v679() {
  var v9226 = this.actualScanLine;
  var v6763 = v9226 < 144;
  if(v6763) {
    var v9227 = this.modeSTAT;
    v6763 = v9227 == 3
  }
  var v2617 = v6763;
  if(v2617) {
    var v6764 = this.midScanlineOffset;
    var v2602 = v6764 == -1;
    if(v2602) {
      var v2601 = this.backgroundX;
      this.midScanlineOffset = v2601 & 7
    }
    var v6765 = this.LCDTicks;
    var v2616 = v6765 >= 82;
    if(v2616) {
      var v2603 = this.LCDTicks;
      this.pixelEnd = v2603 - 74;
      var v9228 = this.pixelEnd;
      var v9229 = this.midScanlineOffset;
      var v6766 = v9228 - v9229;
      var v9230 = this.pixelEnd;
      var v6767 = v9230 % 8;
      var v2604 = v6766 - v6767;
      var v11797 = Math.min(v2604, 160);
      this.pixelEnd = v11797;
      var v2615 = this.bgEnabled;
      if(v2615) {
        var v2605 = this.lastUnrenderedLine;
        this.pixelStart = v2605 * 160;
        var v2606 = this.lastUnrenderedLine;
        JAMScript.call(this.BGLayerRender, this, [v2606]);
        var v2607 = this.lastUnrenderedLine;
        JAMScript.call(this.WindowLayerRender, this, [v2607])
      }else {
        var v6768 = this.lastUnrenderedLine;
        var v2608 = v6768 * 160;
        var v2609 = this.pixelEnd;
        var pixelLine$$1 = v2608 + v2609;
        var v2610;
        var v9231 = this.cGBC;
        var v10732 = !v9231;
        if(v10732) {
          v9231 = this.colorizedGBPalettes
        }
        var v6769 = v9231;
        if(v6769) {
          v2610 = 16316664
        }else {
          v2610 = 15728606
        }
        var defaultColor$$1 = v2610;
        var v6770 = this.lastUnrenderedLine;
        var v2611 = v6770 * 160;
        var v2612 = this.currentX;
        var pixelPosition$$1 = v2611 + v2612;
        var v2614 = pixelPosition$$1 < pixelLine$$1;
        for(;v2614;) {
          var v2613 = this.frameBuffer;
          JAMScript.set(v2613, pixelPosition$$1, defaultColor$$1);
          pixelPosition$$1 = pixelPosition$$1 + 1;
          v2614 = pixelPosition$$1 < pixelLine$$1
        }
      }
      this.currentX = this.pixelEnd
    }
  }
  return
}
function v678(scanlineToRender) {
  this.pixelStart = scanlineToRender * 160;
  var v2624 = this.bgEnabled;
  if(v2624) {
    this.pixelEnd = 160;
    JAMScript.call(this.BGLayerRender, this, [scanlineToRender]);
    JAMScript.call(this.WindowLayerRender, this, [scanlineToRender])
  }else {
    var v2618 = scanlineToRender + 1;
    var pixelLine = v2618 * 160;
    var v2619;
    var v9232 = this.cGBC;
    var v10733 = !v9232;
    if(v10733) {
      v9232 = this.colorizedGBPalettes
    }
    var v6771 = v9232;
    if(v6771) {
      v2619 = 16316664
    }else {
      v2619 = 15728606
    }
    var defaultColor = v2619;
    var v2620 = scanlineToRender * 160;
    var v2621 = this.currentX;
    var pixelPosition = v2620 + v2621;
    var v2623 = pixelPosition < pixelLine;
    for(;v2623;) {
      var v2622 = this.frameBuffer;
      JAMScript.set(v2622, pixelPosition, defaultColor);
      pixelPosition = pixelPosition + 1;
      v2623 = pixelPosition < pixelLine
    }
  }
  JAMScript.call(this.SpriteLayerRender, this, [scanlineToRender]);
  this.currentX = 0;
  this.midScanlineOffset = -1;
  return
}
function v677() {
  var v6772 = this.offscreenRGBCount;
  var v2627 = v6772 > 0;
  if(v2627) {
    var v2625 = this.offscreenWidth;
    var v2626 = this.offscreenHeight;
    var v11798 = new Resize(160, 144, v2625, v2626, false, true);
    this.resizer = v11798
  }
  return
}
function v676() {
  var v2628 = this.resizer;
  var v2629 = this.swizzledFrame;
  return JAMScript.call(v2628.resize, v2628, [v2629])
}
function v675() {
  var bufferIndex$$2 = 0;
  var frameBuffer$$2 = this.swizzledFrame;
  var v6773 = this.cGBC;
  var v9233 = !v6773;
  if(v9233) {
    v6773 = this.colorizedGBPalettes
  }
  var v2636 = v6773;
  if(v2636) {
    var v2631 = bufferIndex$$2 < 69120;
    for(;v2631;) {
      var v2630 = bufferIndex$$2;
      bufferIndex$$2 = bufferIndex$$2 + 1;
      frameBuffer$$2[v2630] = 248;
      v2631 = bufferIndex$$2 < 69120
    }
  }else {
    var v2635 = bufferIndex$$2 < 69120;
    for(;v2635;) {
      var v2632 = bufferIndex$$2;
      bufferIndex$$2 = bufferIndex$$2 + 1;
      frameBuffer$$2[v2632] = 239;
      var v2633 = bufferIndex$$2;
      bufferIndex$$2 = bufferIndex$$2 + 1;
      frameBuffer$$2[v2633] = 255;
      var v2634 = bufferIndex$$2;
      bufferIndex$$2 = bufferIndex$$2 + 1;
      frameBuffer$$2[v2634] = 222;
      v2635 = bufferIndex$$2 < 69120
    }
  }
  return
}
function v674() {
  var frameBuffer$$1 = this.frameBuffer;
  var swizzledFrame = this.swizzledFrame;
  var bufferIndex$$1 = 0;
  var canvasIndex$$1 = 0;
  var v2640 = canvasIndex$$1 < 69120;
  for(;v2640;) {
    var v2637 = canvasIndex$$1;
    canvasIndex$$1 = canvasIndex$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9234 = frameBuffer$$1[bufferIndex$$1]
    }
    var v6774 = v9234 >> 16;
    swizzledFrame[v2637] = v6774 & 255;
    var v2638 = canvasIndex$$1;
    canvasIndex$$1 = canvasIndex$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9235 = frameBuffer$$1[bufferIndex$$1]
    }
    var v6775 = v9235 >> 8;
    swizzledFrame[v2638] = v6775 & 255;
    var v2639 = canvasIndex$$1;
    canvasIndex$$1 = canvasIndex$$1 + 1;
    var v9236 = bufferIndex$$1;
    bufferIndex$$1 = bufferIndex$$1 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v6776 = frameBuffer$$1[v9236]
    }
    swizzledFrame[v2639] = v6776 & 255;
    v2640 = canvasIndex$$1 < 69120
  }
  return
}
function v673() {
  var canvasRGBALength = this.offscreenRGBCount;
  var v2647 = canvasRGBALength > 0;
  if(v2647) {
    var v2641;
    var v6777 = canvasRGBALength == 92160;
    if(v6777) {
      v2641 = this.swizzledFrame
    }else {
      v2641 = JAMScript.call(this.resizeFrameBuffer, this, [])
    }
    var frameBuffer = v2641;
    var v2642 = this.canvasBuffer;
    var canvasData = v2642.data;
    var bufferIndex = 0;
    var canvasIndex = 0;
    var v2646 = canvasIndex < canvasRGBALength;
    for(;v2646;) {
      var v2643 = canvasIndex;
      canvasIndex = canvasIndex + 1;
      var v6778 = bufferIndex;
      bufferIndex = bufferIndex + 1;
      canvasData[v2643] = frameBuffer[v6778];
      var v2644 = canvasIndex;
      canvasIndex = canvasIndex + 1;
      var v6779 = bufferIndex;
      bufferIndex = bufferIndex + 1;
      canvasData[v2644] = frameBuffer[v6779];
      var v2645 = canvasIndex;
      canvasIndex = canvasIndex + 1;
      var v6780 = bufferIndex;
      bufferIndex = bufferIndex + 1;
      canvasData[v2645] = frameBuffer[v6780];
      canvasIndex = canvasIndex + 1;
      v2646 = canvasIndex < canvasRGBALength
    }
    JAMScript.call(this.graphicsBlit, this, [])
  }
  return
}
function v672() {
  var v2648 = this.drewFrame;
  if(v2648) {
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
  var v2655 = this.cTIMER;
  if(v2655) {
    var dateObj = new_Date();
    var newTime = JAMScript.call(dateObj.getTime, dateObj, []);
    var v2649 = this.lastIteration;
    var timeElapsed = newTime - v2649;
    this.lastIteration = newTime;
    var v6781 = this.cTIMER;
    if(v6781) {
      var v9237 = this.RTCHALT;
      v6781 = !v9237
    }
    var v2654 = v6781;
    if(v2654) {
      var v6782 = this.RTCSeconds;
      var v6783 = timeElapsed / 1E3;
      this.RTCSeconds = v6782 + v6783;
      var v6784 = this.RTCSeconds;
      var v2653 = v6784 >= 60;
      for(;v2653;) {
        var v6785 = this.RTCSeconds;
        this.RTCSeconds = v6785 - 60;
        var v6786 = this.RTCMinutes;
        this.RTCMinutes = v6786 + 1;
        var v6787 = this.RTCMinutes;
        var v2652 = v6787 >= 60;
        if(v2652) {
          var v6788 = this.RTCMinutes;
          this.RTCMinutes = v6788 - 60;
          var v6789 = this.RTCHours;
          this.RTCHours = v6789 + 1;
          var v6790 = this.RTCHours;
          var v2651 = v6790 >= 24;
          if(v2651) {
            var v6791 = this.RTCHours;
            this.RTCHours = v6791 - 24;
            var v6792 = this.RTCDays;
            this.RTCDays = v6792 + 1;
            var v6793 = this.RTCDays;
            var v2650 = v6793 >= 512;
            if(v2650) {
              var v6794 = this.RTCDays;
              this.RTCDays = v6794 - 512;
              this.RTCDayOverFlow = true
            }
          }
        }
        var v6795 = this.RTCSeconds;
        v2653 = v6795 >= 60
      }
    }
  }
  return
}
function v669() {
  JAMScript.call(this.DMAWrite, this, [1]);
  var v2660 = this.halt;
  if(v2660) {
    var v9238 = this.LCDTicks;
    var v9239 = this.spriteCount;
    var v6796 = v9238 - v9239;
    var v10734 = this.doubleSpeedShifter;
    var v9240 = 4 >> v10734;
    var v6797 = v9240 | 32;
    var v2659 = v6796 < v6797;
    if(v2659) {
      var v9241 = this.spriteCount;
      var v6798 = 32 + v9241;
      var v6799 = this.doubleSpeedShifter;
      var v2656 = v6798 << v6799;
      this.CPUTicks = 4 + v2656;
      var v2657 = this.spriteCount;
      var v9242 = this.doubleSpeedShifter;
      var v6800 = 4 >> v9242;
      var v2658 = v6800 | 32;
      this.LCDTicks = v2657 + v2658
    }
  }else {
    var v6801 = this.LCDTicks;
    var v10735 = this.doubleSpeedShifter;
    var v9243 = 4 >> v10735;
    var v6802 = v9243 | 32;
    this.LCDTicks = v6801 + v6802
  }
  var v9244 = this.memory;
  var v6803 = v9244[65365];
  var v2662 = v6803 == 0;
  if(v2662) {
    this.hdmaRunning = false;
    var v2661 = this.memory;
    v2661[65365] = 255
  }else {
    var v6804 = this.memory;
    var v10736 = this.memory;
    var v9245 = v10736[65365];
    v6804[65365] = v9245 - 1
  }
  return
}
function v668() {
  var v6805 = this.drewBlank;
  var v2663 = v6805 == 0;
  if(v2663) {
    JAMScript.call(this.clearFrameBuffer, this, []);
    this.drewFrame = true
  }
  this.drewBlank = 2;
  return
}
function v667() {
  function v666(parentObj$$517) {
    var v6806 = parentObj$$517.LCDTicks;
    var v2673 = v6806 >= 8;
    if(v2673) {
      var v9246 = parentObj$$517.STATTracker;
      var v6807 = v9246 != 4;
      if(v6807) {
        var v10737 = parentObj$$517.memory;
        var v9247 = v10737[65348];
        v6807 = v9247 == 153
      }
      var v2669 = v6807;
      if(v2669) {
        var v2664 = parentObj$$517.memory;
        v2664[65348] = 0;
        var v9248 = parentObj$$517.memory;
        var v6808 = v9248[65349];
        var v2668 = v6808 == 0;
        if(v2668) {
          var v2665 = parentObj$$517.memory;
          var v9249 = v2665[65345];
          v2665[65345] = v9249 | 4;
          var v2666 = parentObj$$517.LYCMatchTriggerSTAT;
          if(v2666) {
            var v6809 = parentObj$$517;
            var v9250 = parentObj$$517.interruptsRequested;
            v6809.interruptsRequested = v9250 | 2;
            JAMScript.call(parentObj$$517.checkIRQMatching, parentObj$$517, [])
          }
        }else {
          var v2667 = parentObj$$517.memory;
          var v9251 = v2667[65345];
          v2667[65345] = v9251 & 123
        }
        parentObj$$517.STATTracker = 4
      }
      var v6810 = parentObj$$517.LCDTicks;
      var v2672 = v6810 >= 456;
      if(v2672) {
        var v6811 = parentObj$$517;
        var v9252 = parentObj$$517.LCDTicks;
        v6811.LCDTicks = v9252 - 456;
        var v2670 = parentObj$$517;
        v2670.STATTracker = parentObj$$517.actualScanLine = 0;
        var v2671 = parentObj$$517.LINECONTROL;
        JAMScript.call(v2671[0], v2671, [parentObj$$517])
      }
    }
    return
  }
  function v665(parentObj$$516) {
    var v6812 = parentObj$$516.LCDTicks;
    var v2681 = v6812 >= 456;
    if(v2681) {
      var v6813 = parentObj$$516;
      var v9253 = parentObj$$516.LCDTicks;
      v6813.LCDTicks = v9253 - 456;
      var v2674 = parentObj$$516;
      var v9254 = parentObj$$516.memory;
      var v11286 = parentObj$$516.memory;
      var v10738 = v11286[65348];
      v2674.actualScanLine = v9254[65348] = v10738 + 1;
      var v6814 = parentObj$$516.actualScanLine;
      var v9255 = parentObj$$516.memory;
      var v6815 = v9255[65349];
      var v2678 = v6814 == v6815;
      if(v2678) {
        var v2675 = parentObj$$516.memory;
        var v9256 = v2675[65345];
        v2675[65345] = v9256 | 4;
        var v2676 = parentObj$$516.LYCMatchTriggerSTAT;
        if(v2676) {
          var v6816 = parentObj$$516;
          var v9257 = parentObj$$516.interruptsRequested;
          v6816.interruptsRequested = v9257 | 2;
          JAMScript.call(parentObj$$516.checkIRQMatching, parentObj$$516, [])
        }
      }else {
        var v2677 = parentObj$$516.memory;
        var v9258 = v2677[65345];
        v2677[65345] = v9258 & 123
      }
      var v2679 = parentObj$$516.LINECONTROL;
      var v2680 = parentObj$$516.actualScanLine;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v11996 = [[parentObj$$516], v2679, v2679[v2680]]
      }
      JAMScript.call(v11996[2], v11996[1], v11996[0])
    }
    return
  }
  function v664(parentObj$$515) {
    var v6817 = parentObj$$515.LCDTicks;
    var v2698 = v6817 < 80;
    if(v2698) {
      JAMScript.call(parentObj$$515.scanLineMode2, parentObj$$515, [])
    }else {
      var v6818 = parentObj$$515.LCDTicks;
      var v2697 = v6818 < 252;
      if(v2697) {
        JAMScript.call(parentObj$$515.scanLineMode3, parentObj$$515, [])
      }else {
        var v6819 = parentObj$$515.LCDTicks;
        var v2696 = v6819 < 456;
        if(v2696) {
          JAMScript.call(parentObj$$515.scanLineMode0, parentObj$$515, [])
        }else {
          var v6820 = parentObj$$515;
          var v9259 = parentObj$$515.LCDTicks;
          v6820.LCDTicks = v9259 - 456;
          var v6821 = parentObj$$515.STATTracker;
          var v2686 = v6821 != 3;
          if(v2686) {
            var v6822 = parentObj$$515.STATTracker;
            var v2683 = v6822 != 2;
            if(v2683) {
              var v9260 = parentObj$$515.STATTracker;
              var v6823 = v9260 == 0;
              if(v6823) {
                v6823 = parentObj$$515.mode2TriggerSTAT
              }
              var v2682 = v6823;
              if(v2682) {
                var v6824 = parentObj$$515;
                var v9261 = parentObj$$515.interruptsRequested;
                v6824.interruptsRequested = v9261 | 2
              }
              JAMScript.call(parentObj$$515.incrementScanLineQueue, parentObj$$515, [])
            }
            var v2684 = parentObj$$515.hdmaRunning;
            if(v2684) {
              JAMScript.call(parentObj$$515.executeHDMA, parentObj$$515, [])
            }
            var v2685 = parentObj$$515.mode0TriggerSTAT;
            if(v2685) {
              var v6825 = parentObj$$515;
              var v9262 = parentObj$$515.interruptsRequested;
              v6825.interruptsRequested = v9262 | 2
            }
          }
          var v2687 = parentObj$$515;
          var v6826 = parentObj$$515.memory;
          v2687.actualScanLine = v6826[65348] = 144;
          var v9263 = parentObj$$515.memory;
          var v6827 = v9263[65349];
          var v2691 = v6827 == 144;
          if(v2691) {
            var v2688 = parentObj$$515.memory;
            var v9264 = v2688[65345];
            v2688[65345] = v9264 | 4;
            var v2689 = parentObj$$515.LYCMatchTriggerSTAT;
            if(v2689) {
              var v6828 = parentObj$$515;
              var v9265 = parentObj$$515.interruptsRequested;
              v6828.interruptsRequested = v9265 | 2
            }
          }else {
            var v2690 = parentObj$$515.memory;
            var v9266 = v2690[65345];
            v2690[65345] = v9266 & 123
          }
          parentObj$$515.STATTracker = 0;
          parentObj$$515.modeSTAT = 1;
          var v2692 = parentObj$$515;
          var v9267 = v2692.interruptsRequested;
          var v10739;
          var v11287 = parentObj$$515.mode1TriggerSTAT;
          if(v11287) {
            v10739 = 3
          }else {
            v10739 = 1
          }
          var v9268 = v10739;
          v2692.interruptsRequested = v9267 | v9268;
          JAMScript.call(parentObj$$515.checkIRQMatching, parentObj$$515, []);
          var v6829 = parentObj$$515.drewBlank;
          var v2694 = v6829 == 0;
          if(v2694) {
            var v9269 = parentObj$$515.totalLinesPassed;
            var v6830 = v9269 < 144;
            var v9271 = !v6830;
            if(v9271) {
              var v10740 = parentObj$$515.totalLinesPassed;
              var v9270 = v10740 == 144;
              if(v9270) {
                var v10741 = parentObj$$515.midScanlineOffset;
                v9270 = v10741 > -1
              }
              v6830 = v9270
            }
            var v2693 = v6830;
            if(v2693) {
              JAMScript.call(parentObj$$515.graphicsJITVBlank, parentObj$$515, []);
              JAMScript.call(parentObj$$515.prepareFrame, parentObj$$515, [])
            }
          }else {
            var v6831 = parentObj$$515;
            var v9272 = parentObj$$515.drewBlank;
            v6831.drewBlank = v9272 - 1
          }
          var v2695 = parentObj$$515.LINECONTROL;
          JAMScript.call(v2695[144], v2695, [parentObj$$515])
        }
      }
    }
    return
  }
  function v663(parentObj$$514) {
    var v6832 = parentObj$$514.LCDTicks;
    var v2713 = v6832 < 80;
    if(v2713) {
      JAMScript.call(parentObj$$514.scanLineMode2, parentObj$$514, [])
    }else {
      var v6833 = parentObj$$514.LCDTicks;
      var v2712 = v6833 < 252;
      if(v2712) {
        JAMScript.call(parentObj$$514.scanLineMode3, parentObj$$514, [])
      }else {
        var v6834 = parentObj$$514.LCDTicks;
        var v2711 = v6834 < 456;
        if(v2711) {
          JAMScript.call(parentObj$$514.scanLineMode0, parentObj$$514, [])
        }else {
          var v6835 = parentObj$$514;
          var v9273 = parentObj$$514.LCDTicks;
          v6835.LCDTicks = v9273 - 456;
          var v6836 = parentObj$$514.STATTracker;
          var v2703 = v6836 != 3;
          if(v2703) {
            var v6837 = parentObj$$514.STATTracker;
            var v2700 = v6837 != 2;
            if(v2700) {
              var v9274 = parentObj$$514.STATTracker;
              var v6838 = v9274 == 0;
              if(v6838) {
                v6838 = parentObj$$514.mode2TriggerSTAT
              }
              var v2699 = v6838;
              if(v2699) {
                var v6839 = parentObj$$514;
                var v9275 = parentObj$$514.interruptsRequested;
                v6839.interruptsRequested = v9275 | 2
              }
              JAMScript.call(parentObj$$514.incrementScanLineQueue, parentObj$$514, [])
            }
            var v2701 = parentObj$$514.hdmaRunning;
            if(v2701) {
              JAMScript.call(parentObj$$514.executeHDMA, parentObj$$514, [])
            }
            var v2702 = parentObj$$514.mode0TriggerSTAT;
            if(v2702) {
              var v6840 = parentObj$$514;
              var v9276 = parentObj$$514.interruptsRequested;
              v6840.interruptsRequested = v9276 | 2
            }
          }
          var v2704 = parentObj$$514;
          var v9277 = parentObj$$514.memory;
          var v11288 = parentObj$$514.memory;
          var v10742 = v11288[65348];
          v2704.actualScanLine = v9277[65348] = v10742 + 1;
          var v6841 = parentObj$$514.actualScanLine;
          var v9278 = parentObj$$514.memory;
          var v6842 = v9278[65349];
          var v2708 = v6841 == v6842;
          if(v2708) {
            var v2705 = parentObj$$514.memory;
            var v9279 = v2705[65345];
            v2705[65345] = v9279 | 4;
            var v2706 = parentObj$$514.LYCMatchTriggerSTAT;
            if(v2706) {
              var v6843 = parentObj$$514;
              var v9280 = parentObj$$514.interruptsRequested;
              v6843.interruptsRequested = v9280 | 2
            }
          }else {
            var v2707 = parentObj$$514.memory;
            var v9281 = v2707[65345];
            v2707[65345] = v9281 & 123
          }
          JAMScript.call(parentObj$$514.checkIRQMatching, parentObj$$514, []);
          parentObj$$514.STATTracker = 0;
          parentObj$$514.modeSTAT = 2;
          var v2709 = parentObj$$514.LINECONTROL;
          var v2710 = parentObj$$514.actualScanLine;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11997 = [[parentObj$$514], v2709, v2709[v2710]]
          }
          JAMScript.call(v11997[2], v11997[1], v11997[0])
        }
      }
    }
    return
  }
  var line$$3 = 0;
  var v2721 = line$$3 < 154;
  for(;v2721;) {
    var v2720 = line$$3 < 143;
    if(v2720) {
      var v2714 = this.LINECONTROL;
      v2714[line$$3] = v663
    }else {
      var v2719 = line$$3 == 143;
      if(v2719) {
        var v2715 = this.LINECONTROL;
        v2715[143] = v664
      }else {
        var v2718 = line$$3 < 153;
        if(v2718) {
          var v2716 = this.LINECONTROL;
          v2716[line$$3] = v665
        }else {
          var v2717 = this.LINECONTROL;
          v2717[153] = v666
        }
      }
    }
    line$$3 = line$$3 + 1;
    v2721 = line$$3 < 154
  }
  return
}
function v662() {
  JAMScript.call(this.updateCore, this, []);
  var v6844 = this.emulatorTicks;
  var v6845 = this.CPUCyclesTotal;
  var v2722 = v6844 >= v6845;
  if(v2722) {
    JAMScript.call(this.iterationEndRoutine, this, [])
  }
  return
}
function v661() {
  var v6846 = this.LCDTicks;
  var v9282 = this.CPUTicks;
  var v9283 = this.doubleSpeedShifter;
  var v6847 = v9282 >> v9283;
  this.LCDTicks = v6846 + v6847;
  var v2723 = this.LCDCONTROL;
  var v2724 = this.actualScanLine;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v11998 = [[this], v2723, v2723[v2724]]
  }
  JAMScript.call(v11998[2], v11998[1], v11998[0]);
  var v2725 = this.CPUTicks;
  var v2726 = this.doubleSpeedShifter;
  var timedTicks$$1 = v2725 >> v2726;
  var v6848 = this.audioTicks;
  this.audioTicks = v6848 + timedTicks$$1;
  var v6849 = this.emulatorTicks;
  this.emulatorTicks = v6849 + timedTicks$$1;
  var v6850 = this.DIVTicks;
  var v6851 = this.CPUTicks;
  this.DIVTicks = v6850 + v6851;
  var v2730 = this.TIMAEnabled;
  if(v2730) {
    var v6852 = this.timerTicks;
    var v6853 = this.CPUTicks;
    this.timerTicks = v6852 + v6853;
    var v6854 = this.timerTicks;
    var v6855 = this.TACClocker;
    var v2729 = v6854 >= v6855;
    for(;v2729;) {
      var v6856 = this.timerTicks;
      var v6857 = this.TACClocker;
      this.timerTicks = v6856 - v6857;
      var v10743 = this.memory;
      var v11553 = this.memory;
      var v11289 = v11553[65285];
      var v6858 = v10743[65285] = v11289 + 1;
      var v2728 = v6858 == 256;
      if(v2728) {
        var v2727 = this.memory;
        var v6859 = this.memory;
        v2727[65285] = v6859[65286];
        var v6860 = this.interruptsRequested;
        this.interruptsRequested = v6860 | 4;
        JAMScript.call(this.checkIRQMatching, this, [])
      }
      var v6861 = this.timerTicks;
      var v6862 = this.TACClocker;
      v2729 = v6861 >= v6862
    }
  }
  var v6863 = this.serialTimer;
  var v2734 = v6863 > 0;
  if(v2734) {
    var v6864 = this.serialTimer;
    var v6865 = this.CPUTicks;
    this.serialTimer = v6864 - v6865;
    var v6866 = this.serialTimer;
    var v2731 = v6866 <= 0;
    if(v2731) {
      var v6867 = this.interruptsRequested;
      this.interruptsRequested = v6867 | 8;
      JAMScript.call(this.checkIRQMatching, this, [])
    }
    var v6868 = this.serialShiftTimer;
    var v6869 = this.CPUTicks;
    this.serialShiftTimer = v6868 - v6869;
    var v6870 = this.serialShiftTimer;
    var v2733 = v6870 <= 0;
    if(v2733) {
      this.serialShiftTimer = this.serialShiftTimerAllocated;
      var v2732 = this.memory;
      var v11290 = this.memory;
      var v10744 = v11290[65281];
      var v9284 = v10744 << 1;
      var v6871 = v9284 & 254;
      v2732[65281] = v6871 | 1
    }
  }
  return
}
function v660() {
  var v9285 = this.memory;
  var v6872 = v9285[65348];
  var v9286 = this.memory;
  var v6873 = v9286[65349];
  var v2738 = v6872 == v6873;
  if(v2738) {
    var v2735 = this.memory;
    var v9287 = v2735[65345];
    v2735[65345] = v9287 | 4;
    var v2736 = this.LYCMatchTriggerSTAT;
    if(v2736) {
      var v6874 = this.interruptsRequested;
      this.interruptsRequested = v6874 | 2;
      JAMScript.call(this.checkIRQMatching, this, [])
    }
  }else {
    var v2737 = this.memory;
    var v9288 = v2737[65345];
    v2737[65345] = v9288 & 123
  }
  return
}
function v659(line$$2) {
  this.spriteCount = 252;
  var v6875 = this.cGBC;
  if(v6875) {
    v6875 = this.gfxSpriteShow
  }
  var v2743 = v6875;
  if(v2743) {
    var lineAdjusted = line$$2 + 16;
    var yoffset$$3 = 0;
    var v2739;
    var v6876 = this.gfxSpriteNormalHeight;
    if(v6876) {
      v2739 = 8
    }else {
      v2739 = 16
    }
    var yCap = v2739;
    var OAMAddress = 65024;
    var v6877 = OAMAddress < 65184;
    if(v6877) {
      var v9289 = this.spriteCount;
      v6877 = v9289 < 312
    }
    var v2742 = v6877;
    for(;v2742;) {
      var v6878 = this.memory;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v2740 = v6878[OAMAddress]
      }
      yoffset$$3 = lineAdjusted - v2740;
      var v6879 = yoffset$$3 > -1;
      if(v6879) {
        v6879 = yoffset$$3 < yCap
      }
      var v2741 = v6879;
      if(v2741) {
        var v6880 = this.spriteCount;
        this.spriteCount = v6880 + 6
      }
      OAMAddress = OAMAddress + 4;
      var v6881 = OAMAddress < 65184;
      if(v6881) {
        var v9290 = this.spriteCount;
        v6881 = v9290 < 312
      }
      v2742 = v6881
    }
  }
  return
}
function v658() {
  var v2751 = this.modeSTAT;
  switch(v2751) {
    case 0:
      var v6882 = this.actualScanLine;
      var v2745 = v6882 == 143;
      if(v2745) {
        JAMScript.call(this.updateSpriteCount, this, [0]);
        var v2744 = this.spriteCount;
        return v2744 + 5016
      }
      var v6883 = this.actualScanLine;
      var v2746 = v6883 + 1;
      JAMScript.call(this.updateSpriteCount, this, [v2746]);
      var v2747 = this.spriteCount;
      return v2747 + 456;
    case 2:
    ;
    case 3:
      var v2748 = this.actualScanLine;
      JAMScript.call(this.updateSpriteCount, this, [v2748]);
      return this.spriteCount;
    case 1:
      JAMScript.call(this.updateSpriteCount, this, [0]);
      var v2749 = this.spriteCount;
      var v9291 = this.actualScanLine;
      var v6884 = 154 - v9291;
      var v2750 = 456 * v6884;
      return v2749 + v2750
  }
  return
}
function v657() {
  var v9292 = this.memory;
  var v6885 = v9292[65349];
  var v2755 = v6885 != 0;
  if(v2755) {
    var v9293 = this.memory;
    var v6886 = v9293[65349];
    var v6887 = this.actualScanLine;
    var v2753 = v6886 > v6887;
    if(v2753) {
      var v9294 = this.memory;
      var v6888 = v9294[65349];
      var v6889 = this.actualScanLine;
      var v2752 = v6888 - v6889;
      return 456 * v2752
    }
    var v9295 = this.actualScanLine;
    var v6890 = 154 - v9295;
    var v9296 = this.memory;
    var v6891 = v9296[65349];
    var v2754 = v6890 + v6891;
    return 456 * v2754
  }
  var v9297;
  var v11554 = this.actualScanLine;
  var v11291 = v11554 == 153;
  if(v11291) {
    var v11644 = this.memory;
    var v11555 = v11644[65348];
    v11291 = v11555 == 0
  }
  var v10746 = v11291;
  if(v10746) {
    v9297 = 154
  }else {
    var v10745 = this.actualScanLine;
    v9297 = 153 - v10745
  }
  var v6892 = v9297;
  var v2756 = 456 * v6892;
  return v2756 + 8
}
function v656() {
  var v6893 = this.modeSTAT;
  var v2764 = v6893 != 0;
  if(v2764) {
    var v6894 = this.STATTracker;
    var v2760 = v6894 != 2;
    if(v2760) {
      var v6895 = this.STATTracker;
      var v2758 = v6895 == 0;
      if(v2758) {
        var v2757 = this.mode2TriggerSTAT;
        if(v2757) {
          var v6896 = this.interruptsRequested;
          this.interruptsRequested = v6896 | 2;
          JAMScript.call(this.checkIRQMatching, this, [])
        }
        this.modeSTAT = 3
      }
      JAMScript.call(this.incrementScanLineQueue, this, []);
      var v2759 = this.actualScanLine;
      JAMScript.call(this.updateSpriteCount, this, [v2759]);
      this.STATTracker = 2
    }
    var v6897 = this.LCDTicks;
    var v6898 = this.spriteCount;
    var v2763 = v6897 >= v6898;
    if(v2763) {
      var v2761 = this.hdmaRunning;
      if(v2761) {
        JAMScript.call(this.executeHDMA, this, [])
      }
      var v2762 = this.mode0TriggerSTAT;
      if(v2762) {
        var v6899 = this.interruptsRequested;
        this.interruptsRequested = v6899 | 2;
        JAMScript.call(this.checkIRQMatching, this, [])
      }
      this.STATTracker = 3;
      this.modeSTAT = 0
    }
  }
  return
}
function v655() {
  var v6900 = this.modeSTAT;
  var v2766 = v6900 != 3;
  if(v2766) {
    var v9298 = this.STATTracker;
    var v6901 = v9298 == 0;
    if(v6901) {
      v6901 = this.mode2TriggerSTAT
    }
    var v2765 = v6901;
    if(v2765) {
      var v6902 = this.interruptsRequested;
      this.interruptsRequested = v6902 | 2;
      JAMScript.call(this.checkIRQMatching, this, [])
    }
    this.STATTracker = 1;
    this.modeSTAT = 3
  }
  return
}
function v654() {
  var v6903 = this.STATTracker;
  var v2768 = v6903 != 1;
  if(v2768) {
    var v2767 = this.mode2TriggerSTAT;
    if(v2767) {
      var v6904 = this.interruptsRequested;
      this.interruptsRequested = v6904 | 2;
      JAMScript.call(this.checkIRQMatching, this, [])
    }
    this.STATTracker = 1;
    this.modeSTAT = 2
  }
  return
}
function v653() {
  var v2769 = this.CPUCyclesTotalCurrent;
  var endModulus = v2769 % 4;
  var v6905 = this.CPUCyclesTotalBase;
  var v6906 = this.CPUCyclesTotalCurrent;
  var v2770 = v6905 + v6906;
  this.CPUCyclesTotal = v2770 - endModulus;
  this.CPUCyclesTotalCurrent = endModulus;
  return
}
function v652() {
  this.CPUStopped = true;
  JAMScript.call(this.iterationEndRoutine, this, []);
  var v6907 = this.emulatorTicks;
  var v2771 = v6907 < 0;
  if(v2771) {
    var v6908 = this.audioTicks;
    var v6909 = this.emulatorTicks;
    this.audioTicks = v6908 - v6909;
    JAMScript.call(this.audioJIT, this, [])
  }
  return
}
function v651() {
  var v9299 = this.stopEmulator;
  var v6910 = v9299 & 1;
  var v2773 = v6910 == 0;
  if(v2773) {
    JAMScript.call(this.audioJIT, this, []);
    var v2772 = this.memory;
    var v10747 = this.memory;
    var v9300 = v10747[65284];
    var v10748 = this.DIVTicks;
    var v9301 = v10748 >> 8;
    var v6911 = v9300 + v9301;
    v2772[65284] = v6911 & 255;
    var v6912 = this.DIVTicks;
    this.DIVTicks = v6912 & 255;
    var v6913 = this.stopEmulator;
    this.stopEmulator = v6913 | 1;
    var v6914 = this.emulatorTicks;
    var v6915 = this.CPUCyclesTotal;
    this.emulatorTicks = v6914 - v6915;
    var v6916 = this.CPUCyclesTotalCurrent;
    var v6917 = this.CPUCyclesTotalRoundoff;
    this.CPUCyclesTotalCurrent = v6916 + v6917;
    JAMScript.call(this.recalculateIterationClockLimit, this, [])
  }
  return
}
function v650() {
  var opcodeToExecute = 0;
  var timedTicks = 0;
  var v6918 = this.stopEmulator;
  var v2798 = v6918 == 0;
  for(;v2798;) {
    var v2774 = this.IRQEnableDelay;
    switch(v2774) {
      case 1:
        this.IME = true;
        JAMScript.call(this.checkIRQMatching, this, []);
      case 2:
        var v6919 = this.IRQEnableDelay;
        this.IRQEnableDelay = v6919 - 1
    }
    var v6920 = this.IRQLineMatched;
    var v2775 = v6920 > 0;
    if(v2775) {
      JAMScript.call(this.launchIRQ, this, [])
    }
    var v2776 = this.memoryReader;
    var v2777 = this.programCounter;
    var v2778 = this.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11999 = [[this, v2778], v2776, v2776[v2777]]
    }
    opcodeToExecute = JAMScript.call(v11999[2], v11999[1], v11999[0]);
    var v6921 = this.programCounter;
    var v2779 = v6921 + 1;
    this.programCounter = v2779 & 65535;
    var v2781 = this.skipPCIncrement;
    if(v2781) {
      var v6922 = this.programCounter;
      var v2780 = v6922 - 1;
      this.programCounter = v2780 & 65535;
      this.skipPCIncrement = false
    }
    var v2782 = this.TICKTable;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      this.CPUTicks = v2782[opcodeToExecute]
    }
    var v2783 = this.OPCODE;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12000 = [[this], v2783, v2783[opcodeToExecute]]
    }
    JAMScript.call(v12000[2], v12000[1], v12000[0]);
    var v6923 = this.LCDTicks;
    var v9302 = this.CPUTicks;
    var v9303 = this.doubleSpeedShifter;
    var v6924 = v9302 >> v9303;
    this.LCDTicks = v6923 + v6924;
    var v2784 = this.LCDCONTROL;
    var v2785 = this.actualScanLine;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12001 = [[this], v2784, v2784[v2785]]
    }
    JAMScript.call(v12001[2], v12001[1], v12001[0]);
    var v2786 = this.CPUTicks;
    var v2787 = this.doubleSpeedShifter;
    timedTicks = v2786 >> v2787;
    var v6925 = this.audioTicks;
    this.audioTicks = v6925 + timedTicks;
    var v6926 = this.emulatorTicks;
    this.emulatorTicks = v6926 + timedTicks;
    var v6927 = this.DIVTicks;
    var v6928 = this.CPUTicks;
    this.DIVTicks = v6927 + v6928;
    var v2791 = this.TIMAEnabled;
    if(v2791) {
      var v6929 = this.timerTicks;
      var v6930 = this.CPUTicks;
      this.timerTicks = v6929 + v6930;
      var v6931 = this.timerTicks;
      var v6932 = this.TACClocker;
      var v2790 = v6931 >= v6932;
      for(;v2790;) {
        var v6933 = this.timerTicks;
        var v6934 = this.TACClocker;
        this.timerTicks = v6933 - v6934;
        var v10749 = this.memory;
        var v11556 = this.memory;
        var v11292 = v11556[65285];
        var v6935 = v10749[65285] = v11292 + 1;
        var v2789 = v6935 == 256;
        if(v2789) {
          var v2788 = this.memory;
          var v6936 = this.memory;
          v2788[65285] = v6936[65286];
          var v6937 = this.interruptsRequested;
          this.interruptsRequested = v6937 | 4;
          JAMScript.call(this.checkIRQMatching, this, [])
        }
        var v6938 = this.timerTicks;
        var v6939 = this.TACClocker;
        v2790 = v6938 >= v6939
      }
    }
    var v6940 = this.serialTimer;
    var v2795 = v6940 > 0;
    if(v2795) {
      var v6941 = this.serialTimer;
      var v6942 = this.CPUTicks;
      this.serialTimer = v6941 - v6942;
      var v6943 = this.serialTimer;
      var v2792 = v6943 <= 0;
      if(v2792) {
        var v6944 = this.interruptsRequested;
        this.interruptsRequested = v6944 | 8;
        JAMScript.call(this.checkIRQMatching, this, [])
      }
      var v6945 = this.serialShiftTimer;
      var v6946 = this.CPUTicks;
      this.serialShiftTimer = v6945 - v6946;
      var v6947 = this.serialShiftTimer;
      var v2794 = v6947 <= 0;
      if(v2794) {
        this.serialShiftTimer = this.serialShiftTimerAllocated;
        var v2793 = this.memory;
        var v11293 = this.memory;
        var v10750 = v11293[65281];
        var v9304 = v10750 << 1;
        var v6948 = v9304 & 254;
        v2793[65281] = v6948 | 1
      }
    }
    var v6949 = this.emulatorTicks;
    var v6950 = this.CPUCyclesTotal;
    var v2796 = v6949 >= v6950;
    if(v2796) {
      JAMScript.call(this.iterationEndRoutine, this, [])
    }
    var v6951 = this.instructions;
    this.instructions = v6951 + 1;
    var v6952 = this.instructions;
    var v6953 = this.totalInstructions;
    var v2797 = v6952 > v6953;
    if(v2797) {
      JAMScript.call(this.iterationEndRoutine, this, []);
      var v6954 = this.stopEmulator;
      this.stopEmulator = v6954 | 2;
      checkFinalState()
    }
    var v6955 = this.stopEmulator;
    v2798 = v6955 == 0
  }
  return
}
function v649() {
  var v9305 = this.stopEmulator;
  var v6956 = v9305 & 2;
  var v2803 = v6956 == 0;
  if(v2803) {
    var v9306 = this.stopEmulator;
    var v6957 = v9306 & 1;
    var v2802 = v6957 == 1;
    if(v2802) {
      var v6958 = this.CPUStopped;
      var v2801 = !v6958;
      if(v2801) {
        this.stopEmulator = 0;
        this.drewFrame = false;
        JAMScript.call(this.audioUnderrunAdjustment, this, []);
        JAMScript.call(this.clockUpdate, this, []);
        var v6959 = this.halt;
        var v2800 = !v6959;
        if(v2800) {
          JAMScript.call(this.executeIteration, this, [])
        }else {
          this.CPUTicks = 0;
          JAMScript.call(this.calculateHALTPeriod, this, []);
          var v2799 = this.halt;
          if(v2799) {
            JAMScript.call(this.updateCoreFull, this, [])
          }else {
            JAMScript.call(this.executeIteration, this, [])
          }
        }
        JAMScript.call(this.requestDraw, this, [])
      }else {
        JAMScript.call(this.audioUnderrunAdjustment, this, []);
        var v6960 = this.audioTicks;
        var v6961 = this.CPUCyclesTotal;
        this.audioTicks = v6960 + v6961;
        JAMScript.call(this.audioJIT, this, []);
        var v6962 = this.stopEmulator;
        this.stopEmulator = v6962 | 1
      }
    }else {
      cout("Iterator restarted a faulted core.", 2);
      pause()
    }
  }
  return
}
function v648() {
  var v2804 = this.noiseSampleTable;
  var v6963 = this.channel4currentVolume;
  var v6964 = this.channel4lastSampleLookup;
  var v2805 = v6963 | v6964;
  this.cachedChannel4Sample = v2804[v2805];
  JAMScript.call(this.channel4OutputLevelCache, this, []);
  return
}
function v647(address, data$$23) {
  var v2806 = this.channel3canPlay;
  if(v2806) {
    JAMScript.call(this.audioJIT, this, [])
  }
  var v2807 = this.memory;
  var v2808 = 65328 | address;
  v2807[v2808] = data$$23;
  address = address << 1;
  var v2809 = this.channel3PCM;
  JAMScript.set(v2809, address, data$$23 >> 4);
  var v2810 = this.channel3PCM;
  var v2811 = address | 1;
  v2810[v2811] = data$$23 & 15;
  return
}
function v646() {
  var v6965 = this.channel3PCM;
  var v6966 = this.channel3lastSampleLookup;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v2812 = v6965[v6966]
  }
  var v2813 = this.channel3patternType;
  this.cachedChannel3Sample = v2812 >> v2813;
  JAMScript.call(this.channel3OutputLevelCache, this, []);
  return
}
function v645() {
  var v11557 = this.channel1currentSampleLeftTrimary;
  var v11558 = this.channel2currentSampleLeftTrimary;
  var v11294 = v11557 + v11558;
  var v11295 = this.channel3currentSampleLeftSecondary;
  var v10751 = v11294 + v11295;
  var v10752 = this.channel4currentSampleLeftSecondary;
  var v9307 = v10751 + v10752;
  var v9308 = this.VinLeftChannelMasterVolume;
  var v6967 = v9307 * v9308;
  var v2814 = v6967 << 9;
  var v11296 = this.channel1currentSampleRightTrimary;
  var v11297 = this.channel2currentSampleRightTrimary;
  var v10753 = v11296 + v11297;
  var v10754 = this.channel3currentSampleRightSecondary;
  var v9309 = v10753 + v10754;
  var v9310 = this.channel4currentSampleRightSecondary;
  var v6968 = v9309 + v9310;
  var v6969 = this.VinRightChannelMasterVolume;
  var v2815 = v6968 * v6969;
  this.mixerOutputCache = v2814 + v2815;
  return
}
function v644() {
  var v2816 = this.channel4Enabled;
  if(v2816) {
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
  var v2817;
  var v6970 = this.leftChannel4;
  if(v6970) {
    v2817 = this.cachedChannel4Sample
  }else {
    v2817 = 0
  }
  this.channel4currentSampleLeft = v2817;
  var v2818;
  var v6971 = this.rightChannel4;
  if(v6971) {
    v2818 = this.cachedChannel4Sample
  }else {
    v2818 = 0
  }
  this.channel4currentSampleRight = v2818;
  JAMScript.call(this.channel4OutputLevelSecondaryCache, this, []);
  return
}
function v642() {
  var v6972 = this.memory;
  var v2819 = v6972[65313];
  this.channel4canPlay = v2819 > 7;
  JAMScript.call(this.channel4EnableCheck, this, []);
  JAMScript.call(this.channel4OutputLevelSecondaryCache, this, []);
  return
}
function v641() {
  var v6973 = this.channel4consecutive;
  var v9312 = !v6973;
  if(v9312) {
    var v9311 = this.channel4totalLength;
    v6973 = v9311 > 0
  }
  var v2820 = v6973;
  if(v2820) {
    v2820 = this.channel4canPlay
  }
  this.channel4Enabled = v2820;
  JAMScript.call(this.channel4OutputLevelSecondaryCache, this, []);
  return
}
function v640() {
  var v2821 = this.channel3Enabled;
  if(v2821) {
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
  var v2822;
  var v6974 = this.leftChannel3;
  if(v6974) {
    v2822 = this.cachedChannel3Sample
  }else {
    v2822 = 0
  }
  this.channel3currentSampleLeft = v2822;
  var v2823;
  var v6975 = this.rightChannel3;
  if(v6975) {
    v2823 = this.cachedChannel3Sample
  }else {
    v2823 = 0
  }
  this.channel3currentSampleRight = v2823;
  JAMScript.call(this.channel3OutputLevelSecondaryCache, this, []);
  return
}
function v638() {
  var v2824 = this.channel3consecutive;
  var v6977 = !v2824;
  if(v6977) {
    var v6976 = this.channel3totalLength;
    v2824 = v6976 > 0
  }
  this.channel3Enabled = v2824;
  JAMScript.call(this.channel3OutputLevelSecondaryCache, this, []);
  return
}
function v637() {
  var v6978 = this.channel2CachedDuty;
  var v6979 = this.channel2DutyTracker;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v2825 = v6978[v6979]
  }
  if(v2825) {
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
  var v2826 = this.channel2Enabled;
  if(v2826) {
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
  var v2827;
  var v6980 = this.leftChannel2;
  if(v6980) {
    v2827 = this.channel2envelopeVolume
  }else {
    v2827 = 0
  }
  this.channel2currentSampleLeft = v2827;
  var v2828;
  var v6981 = this.rightChannel2;
  if(v6981) {
    v2828 = this.channel2envelopeVolume
  }else {
    v2828 = 0
  }
  this.channel2currentSampleRight = v2828;
  JAMScript.call(this.channel2OutputLevelSecondaryCache, this, []);
  return
}
function v634() {
  var v6982 = this.memory;
  var v2829 = v6982[65303];
  this.channel2canPlay = v2829 > 7;
  JAMScript.call(this.channel2EnableCheck, this, []);
  JAMScript.call(this.channel2OutputLevelSecondaryCache, this, []);
  return
}
function v633() {
  var v6983 = this.channel2consecutive;
  var v9314 = !v6983;
  if(v9314) {
    var v9313 = this.channel2totalLength;
    v6983 = v9313 > 0
  }
  var v2830 = v6983;
  if(v2830) {
    v2830 = this.channel2canPlay
  }
  this.channel2Enabled = v2830;
  JAMScript.call(this.channel2OutputLevelSecondaryCache, this, []);
  return
}
function v632() {
  var v6984 = this.channel1CachedDuty;
  var v6985 = this.channel1DutyTracker;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v2831 = v6984[v6985]
  }
  if(v2831) {
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
  var v2832 = this.channel1Enabled;
  if(v2832) {
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
  var v2833;
  var v6986 = this.leftChannel1;
  if(v6986) {
    v2833 = this.channel1envelopeVolume
  }else {
    v2833 = 0
  }
  this.channel1currentSampleLeft = v2833;
  var v2834;
  var v6987 = this.rightChannel1;
  if(v6987) {
    v2834 = this.channel1envelopeVolume
  }else {
    v2834 = 0
  }
  this.channel1currentSampleRight = v2834;
  JAMScript.call(this.channel1OutputLevelSecondaryCache, this, []);
  return
}
function v629() {
  var v6988 = this.memory;
  var v2835 = v6988[65298];
  this.channel1canPlay = v2835 > 7;
  JAMScript.call(this.channel1EnableCheck, this, []);
  JAMScript.call(this.channel1OutputLevelSecondaryCache, this, []);
  return
}
function v628() {
  var v6989 = this.channel1consecutive;
  var v9316 = !v6989;
  if(v9316) {
    var v9315 = this.channel1totalLength;
    v6989 = v9315 > 0
  }
  var v2836 = v6989;
  if(v2836) {
    var v9317 = this.channel1SweepFault;
    var v6990 = !v9317;
    if(v6990) {
      v6990 = this.channel1canPlay
    }
    v2836 = v6990
  }
  this.channel1Enabled = v2836;
  JAMScript.call(this.channel1OutputLevelSecondaryCache, this, []);
  return
}
function v627() {
  var v10755 = this.channel1FrequencyCounter;
  var v6991 = this.channel1FrequencyCounter = v10755 - 1;
  var v2838 = v6991 == 0;
  if(v2838) {
    this.channel1FrequencyCounter = this.channel1FrequencyTracker;
    var v6992 = this.channel1DutyTracker;
    var v2837 = v6992 + 1;
    this.channel1DutyTracker = v2837 & 7;
    JAMScript.call(this.channel1OutputLevelTrimaryCache, this, [])
  }
  var v10756 = this.channel2FrequencyCounter;
  var v6993 = this.channel2FrequencyCounter = v10756 - 1;
  var v2840 = v6993 == 0;
  if(v2840) {
    this.channel2FrequencyCounter = this.channel2FrequencyTracker;
    var v6994 = this.channel2DutyTracker;
    var v2839 = v6994 + 1;
    this.channel2DutyTracker = v2839 & 7;
    JAMScript.call(this.channel2OutputLevelTrimaryCache, this, [])
  }
  var v10757 = this.channel3Counter;
  var v6995 = this.channel3Counter = v10757 - 1;
  var v2843 = v6995 == 0;
  if(v2843) {
    var v2842 = this.channel3canPlay;
    if(v2842) {
      var v6996 = this.channel3lastSampleLookup;
      var v2841 = v6996 + 1;
      this.channel3lastSampleLookup = v2841 & 31
    }
    this.channel3Counter = this.channel3FrequencyPeriod;
    JAMScript.call(this.channel3UpdateCache, this, [])
  }
  var v10758 = this.channel4Counter;
  var v6997 = this.channel4Counter = v10758 - 1;
  var v2846 = v6997 == 0;
  if(v2846) {
    var v6998 = this.channel4lastSampleLookup;
    var v2844 = v6998 + 1;
    var v2845 = this.channel4BitRange;
    this.channel4lastSampleLookup = v2844 & v2845;
    this.channel4Counter = this.channel4FrequencyPeriod;
    JAMScript.call(this.channel4UpdateCache, this, [])
  }
  return
}
function v626() {
  var v6999 = this.channel1envelopeSweepsLast;
  var v2851 = v6999 > -1;
  if(v2851) {
    var v7000 = this.channel1envelopeSweeps;
    var v2850 = v7000 > 0;
    if(v2850) {
      var v7001 = this.channel1envelopeSweeps;
      this.channel1envelopeSweeps = v7001 - 1
    }else {
      var v7002 = this.channel1envelopeType;
      var v2849 = !v7002;
      if(v2849) {
        var v7003 = this.channel1envelopeVolume;
        var v2847 = v7003 > 0;
        if(v2847) {
          var v7004 = this.channel1envelopeVolume;
          this.channel1envelopeVolume = v7004 - 1;
          this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
          JAMScript.call(this.channel1OutputLevelCache, this, [])
        }else {
          this.channel1envelopeSweepsLast = -1
        }
      }else {
        var v7005 = this.channel1envelopeVolume;
        var v2848 = v7005 < 15;
        if(v2848) {
          var v7006 = this.channel1envelopeVolume;
          this.channel1envelopeVolume = v7006 + 1;
          this.channel1envelopeSweeps = this.channel1envelopeSweepsLast;
          JAMScript.call(this.channel1OutputLevelCache, this, [])
        }else {
          this.channel1envelopeSweepsLast = -1
        }
      }
    }
  }
  var v7007 = this.channel2envelopeSweepsLast;
  var v2856 = v7007 > -1;
  if(v2856) {
    var v7008 = this.channel2envelopeSweeps;
    var v2855 = v7008 > 0;
    if(v2855) {
      var v7009 = this.channel2envelopeSweeps;
      this.channel2envelopeSweeps = v7009 - 1
    }else {
      var v7010 = this.channel2envelopeType;
      var v2854 = !v7010;
      if(v2854) {
        var v7011 = this.channel2envelopeVolume;
        var v2852 = v7011 > 0;
        if(v2852) {
          var v7012 = this.channel2envelopeVolume;
          this.channel2envelopeVolume = v7012 - 1;
          this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
          JAMScript.call(this.channel2OutputLevelCache, this, [])
        }else {
          this.channel2envelopeSweepsLast = -1
        }
      }else {
        var v7013 = this.channel2envelopeVolume;
        var v2853 = v7013 < 15;
        if(v2853) {
          var v7014 = this.channel2envelopeVolume;
          this.channel2envelopeVolume = v7014 + 1;
          this.channel2envelopeSweeps = this.channel2envelopeSweepsLast;
          JAMScript.call(this.channel2OutputLevelCache, this, [])
        }else {
          this.channel2envelopeSweepsLast = -1
        }
      }
    }
  }
  var v7015 = this.channel4envelopeSweepsLast;
  var v2865 = v7015 > -1;
  if(v2865) {
    var v7016 = this.channel4envelopeSweeps;
    var v2864 = v7016 > 0;
    if(v2864) {
      var v7017 = this.channel4envelopeSweeps;
      this.channel4envelopeSweeps = v7017 - 1
    }else {
      var v7018 = this.channel4envelopeType;
      var v2863 = !v7018;
      if(v2863) {
        var v7019 = this.channel4envelopeVolume;
        var v2859 = v7019 > 0;
        if(v2859) {
          var v9318 = this.channel4envelopeVolume;
          var v2857 = this.channel4envelopeVolume = v9318 - 1;
          var v2858 = this.channel4VolumeShifter;
          this.channel4currentVolume = v2857 << v2858;
          this.channel4envelopeSweeps = this.channel4envelopeSweepsLast;
          JAMScript.call(this.channel4UpdateCache, this, [])
        }else {
          this.channel4envelopeSweepsLast = -1
        }
      }else {
        var v7020 = this.channel4envelopeVolume;
        var v2862 = v7020 < 15;
        if(v2862) {
          var v9319 = this.channel4envelopeVolume;
          var v2860 = this.channel4envelopeVolume = v9319 + 1;
          var v2861 = this.channel4VolumeShifter;
          this.channel4currentVolume = v2860 << v2861;
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
  var v7021 = this.channel1lastTimeSweep;
  var v2876 = v7021 > 0;
  if(v2876) {
    var v7022 = this.channel1frequencySweepDivider;
    var v2875 = v7022 > 0;
    if(v2875) {
      var v7023 = this.channel1numSweep;
      var v2874 = v7023 > 0;
      if(v2874) {
        var v7024 = this.channel1numSweep;
        this.channel1numSweep = v7024 - 1;
        var v2873 = this.channel1decreaseSweep;
        if(v2873) {
          var v7025 = this.channel1ShadowFrequency;
          var v9320 = this.channel1ShadowFrequency;
          var v9321 = this.channel1frequencySweepDivider;
          var v7026 = v9320 >> v9321;
          this.channel1ShadowFrequency = v7025 - v7026;
          var v2866 = this.channel1ShadowFrequency;
          this.channel1frequency = v2866 & 2047;
          var v7027 = this.channel1frequency;
          var v2867 = 2048 - v7027;
          this.channel1FrequencyTracker = v2867 << 2
        }else {
          var v7028 = this.channel1ShadowFrequency;
          var v9322 = this.channel1ShadowFrequency;
          var v9323 = this.channel1frequencySweepDivider;
          var v7029 = v9322 >> v9323;
          this.channel1ShadowFrequency = v7028 + v7029;
          this.channel1frequency = this.channel1ShadowFrequency;
          var v7030 = this.channel1ShadowFrequency;
          var v2872 = v7030 <= 2047;
          if(v2872) {
            var v7031 = this.channel1frequency;
            var v2868 = 2048 - v7031;
            this.channel1FrequencyTracker = v2868 << 2;
            var v9324 = this.channel1ShadowFrequency;
            var v10759 = this.channel1ShadowFrequency;
            var v10760 = this.channel1frequencySweepDivider;
            var v9325 = v10759 >> v10760;
            var v7032 = v9324 + v9325;
            var v2870 = v7032 > 2047;
            if(v2870) {
              this.channel1SweepFault = true;
              JAMScript.call(this.channel1EnableCheck, this, []);
              var v2869 = this.memory;
              var v9326 = v2869[65318];
              v2869[65318] = v9326 & 254
            }
          }else {
            var v7033 = this.channel1frequency;
            this.channel1frequency = v7033 & 2047;
            this.channel1SweepFault = true;
            JAMScript.call(this.channel1EnableCheck, this, []);
            var v2871 = this.memory;
            var v9327 = v2871[65318];
            v2871[65318] = v9327 & 254
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
  var v9328 = this.channel1SweepFault;
  var v7034 = !v9328;
  if(v7034) {
    var v9329 = this.channel1timeSweep;
    v7034 = v9329 > 0
  }
  var v2878 = v7034;
  if(v2878) {
    var v10761 = this.channel1timeSweep;
    var v7035 = this.channel1timeSweep = v10761 - 1;
    var v2877 = v7035 == 0;
    if(v2877) {
      JAMScript.call(this.runAudioSweep, this, [])
    }
  }
  return
}
function v623() {
  var v7036 = this.channel1totalLength;
  var v2881 = v7036 > 1;
  if(v2881) {
    var v7037 = this.channel1totalLength;
    this.channel1totalLength = v7037 - 1
  }else {
    var v7038 = this.channel1totalLength;
    var v2880 = v7038 == 1;
    if(v2880) {
      this.channel1totalLength = 0;
      JAMScript.call(this.channel1EnableCheck, this, []);
      var v2879 = this.memory;
      var v9330 = v2879[65318];
      v2879[65318] = v9330 & 254
    }
  }
  var v7039 = this.channel2totalLength;
  var v2884 = v7039 > 1;
  if(v2884) {
    var v7040 = this.channel2totalLength;
    this.channel2totalLength = v7040 - 1
  }else {
    var v7041 = this.channel2totalLength;
    var v2883 = v7041 == 1;
    if(v2883) {
      this.channel2totalLength = 0;
      JAMScript.call(this.channel2EnableCheck, this, []);
      var v2882 = this.memory;
      var v9331 = v2882[65318];
      v2882[65318] = v9331 & 253
    }
  }
  var v7042 = this.channel3totalLength;
  var v2887 = v7042 > 1;
  if(v2887) {
    var v7043 = this.channel3totalLength;
    this.channel3totalLength = v7043 - 1
  }else {
    var v7044 = this.channel3totalLength;
    var v2886 = v7044 == 1;
    if(v2886) {
      this.channel3totalLength = 0;
      JAMScript.call(this.channel3EnableCheck, this, []);
      var v2885 = this.memory;
      var v9332 = v2885[65318];
      v2885[65318] = v9332 & 251
    }
  }
  var v7045 = this.channel4totalLength;
  var v2890 = v7045 > 1;
  if(v2890) {
    var v7046 = this.channel4totalLength;
    this.channel4totalLength = v7046 - 1
  }else {
    var v7047 = this.channel4totalLength;
    var v2889 = v7047 == 1;
    if(v2889) {
      this.channel4totalLength = 0;
      JAMScript.call(this.channel4EnableCheck, this, []);
      var v2888 = this.memory;
      var v9333 = v2888[65318];
      v2888[65318] = v9333 & 247
    }
  }
  return
}
function v622() {
  var v2891 = this.sequencePosition;
  var v9334 = this.sequencePosition;
  this.sequencePosition = v9334 + 1;
  switch(v2891) {
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
  var v2894 = settings[0];
  if(v2894) {
    var v2892 = this.audioTicks;
    JAMScript.call(this.generateAudio, this, [v2892])
  }else {
    var v2893 = this.audioTicks;
    JAMScript.call(this.generateAudioFake, this, [v2893])
  }
  this.audioTicks = 0;
  return
}
function v620(numSamples$$1) {
  var v7048 = this.soundMasterEnabled;
  if(v7048) {
    var v9335 = this.CPUStopped;
    v7048 = !v9335
  }
  var v2897 = v7048;
  if(v2897) {
    var v7049 = numSamples$$1 = numSamples$$1 - 1;
    var v2896 = v7049 > -1;
    for(;v2896;) {
      JAMScript.call(this.computeAudioChannels, this, []);
      var v10762 = this.sequencerClocks;
      var v7050 = this.sequencerClocks = v10762 - 1;
      var v2895 = v7050 == 0;
      if(v2895) {
        JAMScript.call(this.audioComputeSequencer, this, []);
        this.sequencerClocks = 8192
      }
      var v7051 = numSamples$$1 = numSamples$$1 - 1;
      v2896 = v7051 > -1
    }
  }
  return
}
function v619(numSamples) {
  var v7052 = this.soundMasterEnabled;
  if(v7052) {
    var v9336 = this.CPUStopped;
    v7052 = !v9336
  }
  var v2909 = v7052;
  if(v2909) {
    var samplesToGenerate = 0;
    var v2904 = numSamples > 0;
    for(;v2904;) {
      var v2898;
      var v9337 = this.sequencerClocks;
      var v7053 = numSamples < v9337;
      if(v7053) {
        v2898 = numSamples
      }else {
        v2898 = this.sequencerClocks
      }
      samplesToGenerate = v2898;
      var v7054 = this.sequencerClocks;
      this.sequencerClocks = v7054 - samplesToGenerate;
      numSamples = numSamples - samplesToGenerate;
      var v7055 = samplesToGenerate = samplesToGenerate - 1;
      var v2902 = v7055 > -1;
      for(;v2902;) {
        JAMScript.call(this.computeAudioChannels, this, []);
        var v2899 = this.currentBuffer;
        var v2900 = this.audioIndex;
        var v9338 = this.audioIndex;
        this.audioIndex = v9338 + 1;
        JAMScript.set(v2899, v2900, this.mixerOutputCache);
        var v7056 = this.audioIndex;
        var v7057 = this.numSamplesTotal;
        var v2901 = v7056 == v7057;
        if(v2901) {
          this.audioIndex = 0;
          JAMScript.call(this.outputAudio, this, [])
        }
        var v7058 = samplesToGenerate = samplesToGenerate - 1;
        v2902 = v7058 > -1
      }
      var v7059 = this.sequencerClocks;
      var v2903 = v7059 == 0;
      if(v2903) {
        JAMScript.call(this.audioComputeSequencer, this, []);
        this.sequencerClocks = 8192
      }
      v2904 = numSamples > 0
    }
  }else {
    var v7060 = numSamples = numSamples - 1;
    var v2908 = v7060 > -1;
    for(;v2908;) {
      var v2905 = this.currentBuffer;
      var v2906 = this.audioIndex;
      var v9339 = this.audioIndex;
      this.audioIndex = v9339 + 1;
      JAMScript.set(v2905, v2906, 61680);
      var v7061 = this.audioIndex;
      var v7062 = this.numSamplesTotal;
      var v2907 = v7061 == v7062;
      if(v2907) {
        this.audioIndex = 0;
        JAMScript.call(this.outputAudio, this, [])
      }
      var v7063 = numSamples = numSamples - 1;
      v2908 = v7063 > -1
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
  var v7064 = this.numSamplesTotal;
  var v2917 = sourcePosition < v7064;
  for(;v2917;) {
    sampleFactor = averageL = averageR = 0;
    var v2912 = sampleFactor < divisor1;
    for(;v2912;) {
      var v2910 = this.currentBuffer;
      var v2911 = sourcePosition;
      sourcePosition = sourcePosition + 1;
      dirtySample = v2910[v2911];
      var v7065 = dirtySample >> 9;
      averageL = averageL + v7065;
      var v7066 = dirtySample & 511;
      averageR = averageR + v7066;
      sampleFactor = sampleFactor + 1;
      v2912 = sampleFactor < divisor1
    }
    var v2913 = this.secondaryBuffer;
    var v2914 = destinationPosition;
    destinationPosition = destinationPosition + 1;
    var v7067 = averageL / divisor2;
    v2913[v2914] = v7067 - 1;
    var v2915 = this.secondaryBuffer;
    var v2916 = destinationPosition;
    destinationPosition = destinationPosition + 1;
    var v7068 = averageR / divisor2;
    v2915[v2916] = v7068 - 1;
    var v7069 = this.numSamplesTotal;
    v2917 = sourcePosition < v7069
  }
  var v2918 = this.audioHandle;
  var v2919 = this.secondaryBuffer;
  JAMScript.call(v2918.writeAudioNoCallback, v2918, [v2919]);
  return
}
function v617() {
  this.channel1FrequencyTracker = 8192;
  this.channel1DutyTracker = 0;
  var v2920 = this.dutyLookup;
  this.channel1CachedDuty = v2920[2];
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
  var v2921 = this.dutyLookup;
  this.channel2CachedDuty = v2921[2];
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
  var v2925 = settings[0];
  if(v2925) {
    var v2922 = this.bufferContainAmount;
    var v7070 = this.audioHandle;
    var v2923 = JAMScript.call(v7070.remainingBuffer, v7070, []);
    var underrunAmount = v2922 - v2923;
    var v2924 = underrunAmount > 0;
    if(v2924) {
      var v7071 = this.CPUCyclesTotalCurrent;
      var v9340 = underrunAmount >> 1;
      var v9341 = this.machineOut;
      var v7072 = v9340 * v9341;
      this.CPUCyclesTotalCurrent = v7071 + v7072;
      JAMScript.call(this.recalculateIterationClockLimit, this, [])
    }
  }
  return
}
function v615() {
  var randomFactor = 1;
  var v11799 = JAMScript.call(this.getTypedArray, this, [524288, 0, "int8"]);
  this.LSFR15Table = v11799;
  var LSFR = 32767;
  var LSFRShifted = 16383;
  var index$$57 = 0;
  var v2958 = index$$57 < 32768;
  for(;v2958;) {
    var v2926 = LSFR & 1;
    randomFactor = 1 - v2926;
    var v2927 = this.LSFR15Table;
    var v2928 = 32768 | index$$57;
    v2927[v2928] = randomFactor;
    var v2929 = this.LSFR15Table;
    var v2930 = 65536 | index$$57;
    v2929[v2930] = randomFactor * 2;
    var v2931 = this.LSFR15Table;
    var v2932 = 98304 | index$$57;
    v2931[v2932] = randomFactor * 3;
    var v2933 = this.LSFR15Table;
    var v2934 = 131072 | index$$57;
    v2933[v2934] = randomFactor * 4;
    var v2935 = this.LSFR15Table;
    var v2936 = 163840 | index$$57;
    v2935[v2936] = randomFactor * 5;
    var v2937 = this.LSFR15Table;
    var v2938 = 196608 | index$$57;
    v2937[v2938] = randomFactor * 6;
    var v2939 = this.LSFR15Table;
    var v2940 = 229376 | index$$57;
    v2939[v2940] = randomFactor * 7;
    var v2941 = this.LSFR15Table;
    var v2942 = 262144 | index$$57;
    v2941[v2942] = randomFactor * 8;
    var v2943 = this.LSFR15Table;
    var v2944 = 294912 | index$$57;
    v2943[v2944] = randomFactor * 9;
    var v2945 = this.LSFR15Table;
    var v2946 = 327680 | index$$57;
    v2945[v2946] = randomFactor * 10;
    var v2947 = this.LSFR15Table;
    var v2948 = 360448 | index$$57;
    v2947[v2948] = randomFactor * 11;
    var v2949 = this.LSFR15Table;
    var v2950 = 393216 | index$$57;
    v2949[v2950] = randomFactor * 12;
    var v2951 = this.LSFR15Table;
    var v2952 = 425984 | index$$57;
    v2951[v2952] = randomFactor * 13;
    var v2953 = this.LSFR15Table;
    var v2954 = 458752 | index$$57;
    v2953[v2954] = randomFactor * 14;
    var v2955 = this.LSFR15Table;
    var v2956 = 491520 | index$$57;
    v2955[v2956] = randomFactor * 15;
    LSFRShifted = LSFR >> 1;
    var v9342 = LSFRShifted ^ LSFR;
    var v7073 = v9342 & 1;
    var v2957 = v7073 << 14;
    LSFR = LSFRShifted | v2957;
    index$$57 = index$$57 + 1;
    v2958 = index$$57 < 32768
  }
  var v11800 = JAMScript.call(this.getTypedArray, this, [2048, 0, "int8"]);
  this.LSFR7Table = v11800;
  LSFR = 127;
  index$$57 = 0;
  var v2991 = index$$57 < 128;
  for(;v2991;) {
    var v2959 = LSFR & 1;
    randomFactor = 1 - v2959;
    var v2960 = this.LSFR7Table;
    var v2961 = 128 | index$$57;
    v2960[v2961] = randomFactor;
    var v2962 = this.LSFR7Table;
    var v2963 = 256 | index$$57;
    v2962[v2963] = randomFactor * 2;
    var v2964 = this.LSFR7Table;
    var v2965 = 384 | index$$57;
    v2964[v2965] = randomFactor * 3;
    var v2966 = this.LSFR7Table;
    var v2967 = 512 | index$$57;
    v2966[v2967] = randomFactor * 4;
    var v2968 = this.LSFR7Table;
    var v2969 = 640 | index$$57;
    v2968[v2969] = randomFactor * 5;
    var v2970 = this.LSFR7Table;
    var v2971 = 768 | index$$57;
    v2970[v2971] = randomFactor * 6;
    var v2972 = this.LSFR7Table;
    var v2973 = 896 | index$$57;
    v2972[v2973] = randomFactor * 7;
    var v2974 = this.LSFR7Table;
    var v2975 = 1024 | index$$57;
    v2974[v2975] = randomFactor * 8;
    var v2976 = this.LSFR7Table;
    var v2977 = 1152 | index$$57;
    v2976[v2977] = randomFactor * 9;
    var v2978 = this.LSFR7Table;
    var v2979 = 1280 | index$$57;
    v2978[v2979] = randomFactor * 10;
    var v2980 = this.LSFR7Table;
    var v2981 = 1408 | index$$57;
    v2980[v2981] = randomFactor * 11;
    var v2982 = this.LSFR7Table;
    var v2983 = 1536 | index$$57;
    v2982[v2983] = randomFactor * 12;
    var v2984 = this.LSFR7Table;
    var v2985 = 1664 | index$$57;
    v2984[v2985] = randomFactor * 13;
    var v2986 = this.LSFR7Table;
    var v2987 = 1792 | index$$57;
    v2986[v2987] = randomFactor * 14;
    var v2988 = this.LSFR7Table;
    var v2989 = 1920 | index$$57;
    v2988[v2989] = randomFactor * 15;
    LSFRShifted = LSFR >> 1;
    var v9343 = LSFRShifted ^ LSFR;
    var v7074 = v9343 & 1;
    var v2990 = v7074 << 6;
    LSFR = LSFRShifted | v2990;
    index$$57 = index$$57 + 1;
    v2991 = index$$57 < 128
  }
  var v9344 = this.noiseSampleTable;
  var v7075 = !v9344;
  if(v7075) {
    var v10763 = this.memory;
    var v9345 = v10763.length;
    v7075 = v9345 == 65536
  }
  var v2993 = v7075;
  if(v2993) {
    var v2992;
    var v11298 = this.memory;
    var v10764 = v11298[65314];
    var v9346 = v10764 & 8;
    var v7076 = v9346 == 8;
    if(v7076) {
      v2992 = this.LSFR7Table
    }else {
      v2992 = this.LSFR15Table
    }
    this.noiseSampleTable = v2992
  }
  return
}
function v614() {
  this.audioIndex = 0;
  var v10765 = this.sampleSize;
  var v10766 = settings[7];
  var v9347 = v10765 * v10766;
  var v9348 = settings[13];
  var v7077 = v9347 / v9348;
  var v2994 = Math.max(v7077, 4096);
  this.bufferContainAmount = v2994 << 1;
  var v7078 = this.sampleSize;
  var v9349 = this.sampleSize;
  var v9350 = settings[13];
  var v7079 = v9349 % v9350;
  var v2995 = v7078 - v7079;
  this.numSamplesTotal = v2995 | 0;
  var v2996 = this.numSamplesTotal;
  var v11801 = JAMScript.call(this.getTypedArray, this, [v2996, 61680, "int32"]);
  this.currentBuffer = v11801;
  var v9351 = this.numSamplesTotal;
  var v7080 = v9351 << 1;
  var v7081 = settings[13];
  var v2997 = v7080 / v7081;
  var v11802 = JAMScript.call(this.getTypedArray, this, [v2997, 0, "float32"]);
  this.secondaryBuffer = v11802;
  return
}
function v613() {
  var v7082 = settings[0];
  if(v7082) {
    v7082 = this.audioHandle
  }
  var v3000 = v7082;
  if(v3000) {
    try {
      var v2998 = this.audioHandle;
      var v2999 = settings[14];
      JAMScript.call(v2998.changeVolume, v2998, [v2999])
    }catch(error$$24) {
    }
  }
  return
}
function v612() {
  var v3001 = 4194304 / 1E3;
  var v3002 = settings[6];
  this.sampleSize = v3001 * v3002;
  this.machineOut = settings[13];
  var v3009 = settings[0];
  if(v3009) {
    try {
      var parentObj$$513 = this;
      var v7083 = settings[13];
      var v3003 = 4194304 / v7083;
      var v11299 = this.sampleSize;
      var v11300 = settings[8];
      var v10767 = v11299 * v11300;
      var v10768 = settings[13];
      var v9352 = v10767 / v10768;
      var v7084 = Math.max(v9352, 8192);
      var v3004 = v7084 << 1;
      var v3005 = settings[14];
      var v11803 = new XAudioServer(2, v3003, 0, v3004, null, v3005);
      this.audioHandle = v11803;
      JAMScript.call(this.initAudioBuffer, this, [])
    }catch(error$$22) {
      var v7085 = error$$22.message;
      var v3006 = "Audio system cannot run: " + v7085;
      cout(v3006, 2);
      settings[0] = false
    }
  }else {
    var v3008 = this.audioHandle;
    if(v3008) {
      try {
        var v3007 = this.audioHandle;
        JAMScript.call(v3007.changeVolume, v3007, [0])
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
    var v7086 = this.JoyPad;
    var v9353 = 1 << key$$14;
    var v7087 = 255 ^ v9353;
    this.JoyPad = v7086 & v7087;
    var v9354 = this.cGBC;
    var v7088 = !v9354;
    if(v7088) {
      var v10769 = this.usedBootROM;
      var v9355 = !v10769;
      var v10771 = !v9355;
      if(v10771) {
        var v10770 = this.usedGBCBootROM;
        v9355 = !v10770
      }
      v7088 = v9355
    }
    var v3010 = v7088;
    if(v3010) {
      var v7089 = this.interruptsRequested;
      this.interruptsRequested = v7089 | 16;
      this.remainingClocks = 0;
      JAMScript.call(this.checkIRQMatching, this, [])
    }
  }else {
    var v7090 = this.JoyPad;
    var v7091 = 1 << key$$14;
    this.JoyPad = v7090 | v7091
  }
  var v3011 = this.memory;
  var v10772 = this.memory;
  var v9356 = v10772[65280];
  var v7092 = v9356 & 48;
  var v10773;
  var v11680 = this.memory;
  var v11645 = v11680[65280];
  var v11559 = v11645 & 32;
  var v11302 = v11559 == 0;
  if(v11302) {
    var v11301 = this.JoyPad;
    v10773 = v11301 >> 4
  }else {
    v10773 = 15
  }
  var v9357 = v10773;
  var v10774;
  var v11681 = this.memory;
  var v11646 = v11681[65280];
  var v11560 = v11646 & 16;
  var v11304 = v11560 == 0;
  if(v11304) {
    var v11303 = this.JoyPad;
    v10774 = v11303 & 15
  }else {
    v10774 = 15
  }
  var v9358 = v10774;
  var v7093 = v9357 & v9358;
  v3011[65280] = v7092 + v7093;
  this.CPUStopped = false;
  return
}
function v609() {
  var v9359 = this.offscreenWidth;
  var v9360 = this.onscreenWidth;
  var v7094 = v9359 == v9360;
  if(v7094) {
    var v9361 = this.offscreenHeight;
    var v9362 = this.onscreenHeight;
    v7094 = v9361 == v9362
  }
  var v3020 = v7094;
  if(v3020) {
    var v3012 = this.drawContextOnscreen;
    var v3013 = this.canvasBuffer;
    JAMScript.call(v3012.putImageData, v3012, [v3013, 0, 0])
  }else {
    var v3014 = this.drawContextOffscreen;
    var v3015 = this.canvasBuffer;
    JAMScript.call(v3014.putImageData, v3014, [v3015, 0, 0]);
    var v3016 = this.drawContextOnscreen;
    var v3017 = this.canvasOffscreen;
    var v3018 = this.onscreenWidth;
    var v3019 = this.onscreenHeight;
    JAMScript.call(v3016.drawImage, v3016, [v3017, 0, 0, v3018, v3019])
  }
  return
}
function v608() {
  JAMScript.call(this.recomputeDimension, this, []);
  var v7095 = this.offscreenRGBCount;
  var v3021 = v7095 != 92160;
  if(v3021) {
    JAMScript.call(this.compileResizeFrameBufferFunction, this, [])
  }else {
    this.resizer = null
  }
  try {
    var v11804 = new GameBoyCanvas;
    this.canvasOffscreen = v11804;
    var v3022 = this.canvasOffscreen;
    v3022.width = this.offscreenWidth;
    var v3023 = this.canvasOffscreen;
    v3023.height = this.offscreenHeight;
    var v3024 = this.canvasOffscreen;
    var v11805 = JAMScript.call(v3024.getContext, v3024, ["2d"]);
    this.drawContextOffscreen = v11805;
    var v3025 = this.canvas;
    var v11806 = JAMScript.call(v3025.getContext, v3025, ["2d"]);
    this.drawContextOnscreen = v11806;
    try {
      var v3026 = this.drawContextOffscreen;
      var v3027 = this.offscreenWidth;
      var v3028 = this.offscreenHeight;
      var v11807 = JAMScript.call(v3026.createImageData, v3026, [v3027, v3028]);
      this.canvasBuffer = v11807
    }catch(error$$20) {
      var v9363 = error$$20.message;
      var v7096 = 'Falling back to the getImageData initialization (Error "' + v9363;
      var v3029 = v7096 + '").';
      cout(v3029, 1);
      var v3030 = this.drawContextOffscreen;
      var v3031 = this.offscreenWidth;
      var v3032 = this.offscreenHeight;
      var v11808 = v3030.getImageData(0, 0, v3031, v3032);
      this.canvasBuffer = v11808
    }
    var index$$56 = this.offscreenRGBCount;
    var v3041 = index$$56 > 0;
    for(;v3041;) {
      var v7097 = this.canvasBuffer;
      var v3033 = v7097.data;
      var v3034 = index$$56 = index$$56 - 4;
      v3033[v3034] = 248;
      var v7098 = this.canvasBuffer;
      var v3035 = v7098.data;
      var v3036 = index$$56 + 1;
      v3035[v3036] = 248;
      var v7099 = this.canvasBuffer;
      var v3037 = v7099.data;
      var v3038 = index$$56 + 2;
      v3037[v3038] = 248;
      var v7100 = this.canvasBuffer;
      var v3039 = v7100.data;
      var v3040 = index$$56 + 3;
      v3039[v3040] = 255;
      v3041 = index$$56 > 0
    }
    JAMScript.call(this.graphicsBlit, this, []);
    var v7101 = this.canvas;
    var v3042 = v7101.style;
    v3042.visibility = "visible";
    var v7102 = this.swizzledFrame;
    var v3043 = v7102 == null;
    if(v3043) {
      var v11809 = JAMScript.call(this.getTypedArray, this, [69120, 255, "uint8"]);
      this.swizzledFrame = v11809
    }
    this.drewFrame = true;
    JAMScript.call(this.requestDraw, this, [])
  }catch(error$$21) {
    var v11561 = error$$21.message;
    var v11305 = "HTML5 Canvas support required: " + v11561;
    var v10775 = v11305 + "file: ";
    var v10776 = error$$21.fileName;
    var v9364 = v10775 + v10776;
    var v7103 = v9364 + ", line: ";
    var v7104 = error$$21.lineNumber;
    var v3044 = v7103 + v7104;
    throw new Error(v3044);
  }
  return
}
function v607() {
  initNewCanvas();
  var v3045 = this.canvas;
  this.onscreenWidth = v3045.width;
  var v3046 = this.canvas;
  this.onscreenHeight = v3046.height;
  var v7105 = GameBoyWindow;
  if(v7105) {
    v7105 = GameBoyWindow.mozRequestAnimationFrame
  }
  var v3051 = v7105;
  if(v3051) {
    var v3047 = this.canvas;
    var v7106;
    var v10777 = settings[12];
    var v9366 = !v10777;
    if(v9366) {
      v7106 = 160
    }else {
      var v9365 = this.canvas;
      v7106 = v9365.width
    }
    v3047.width = this.onscreenWidth = v7106;
    var v3048 = this.canvas;
    var v7107;
    var v10778 = settings[12];
    var v9368 = !v10778;
    if(v9368) {
      v7107 = 144
    }else {
      var v9367 = this.canvas;
      v7107 = v9367.height
    }
    v3048.height = this.onscreenHeight = v7107
  }else {
    var v3049 = this.canvas;
    this.onscreenWidth = v3049.width;
    var v3050 = this.canvas;
    this.onscreenHeight = v3050.height
  }
  var v3052;
  var v9369 = settings[12];
  var v7109 = !v9369;
  if(v7109) {
    v3052 = 160
  }else {
    var v7108 = this.canvas;
    v3052 = v7108.width
  }
  this.offscreenWidth = v3052;
  var v3053;
  var v9370 = settings[12];
  var v7111 = !v9370;
  if(v7111) {
    v3053 = 144
  }else {
    var v7110 = this.canvas;
    v3053 = v7110.height
  }
  this.offscreenHeight = v3053;
  var v7112 = this.offscreenWidth;
  var v7113 = this.offscreenHeight;
  var v3054 = v7112 * v7113;
  this.offscreenRGBCount = v3054 * 4;
  return
}
function v606() {
  var v3055 = this.cMBC1;
  var v7115 = !v3055;
  if(v7115) {
    var v7114 = this.cMBC2;
    var v9372 = !v7114;
    if(v9372) {
      var v9371 = this.cMBC3;
      var v10780 = !v9371;
      if(v10780) {
        var v10779 = this.cMBC5;
        var v11307 = !v10779;
        if(v11307) {
          var v11306 = this.cMBC7;
          var v11562 = !v11306;
          if(v11562) {
            v11306 = this.cRUMBLE
          }
          v10779 = v11306
        }
        v9371 = v10779
      }
      v7114 = v9371
    }
    v3055 = v7114
  }
  return v3055
}
function v605() {
  var v3059 = this.cMBC2;
  if(v3059) {
    this.numRAMBanks = 1 / 16
  }else {
    var v7116 = this.cMBC1;
    var v9374 = !v7116;
    if(v9374) {
      var v9373 = this.cRUMBLE;
      var v10782 = !v9373;
      if(v10782) {
        var v10781 = this.cMBC3;
        var v11308 = !v10781;
        if(v11308) {
          v10781 = this.cHuC3
        }
        v9373 = v10781
      }
      v7116 = v9373
    }
    var v3058 = v7116;
    if(v3058) {
      this.numRAMBanks = 4
    }else {
      var v3057 = this.cMBC5;
      if(v3057) {
        this.numRAMBanks = 16
      }else {
        var v3056 = this.cSRAM;
        if(v3056) {
          this.numRAMBanks = 1
        }
      }
    }
  }
  var v7117 = this.numRAMBanks;
  var v3064 = v7117 > 0;
  if(v3064) {
    var v7118 = JAMScript.call(this.MBCRAMUtilized, this, []);
    var v3060 = !v7118;
    if(v3060) {
      this.MBCRAMBanksEnabled = true
    }
    var v3061;
    var v10783 = this.openMBC;
    var v9375 = typeof v10783;
    var v7120 = v9375 == "function";
    if(v7120) {
      var v7119 = this.name;
      v3061 = JAMScript.call(this.openMBC, this, [v7119])
    }else {
      v3061 = []
    }
    var MBCRam = v3061;
    var v7121 = MBCRam.length;
    var v3063 = v7121 > 0;
    if(v3063) {
      var v11810 = JAMScript.call(this.toTypedArray, this, [MBCRam, "uint8"]);
      this.MBCRam = v11810
    }else {
      var v7122 = this.numRAMBanks;
      var v3062 = v7122 * 8192;
      var v11811 = JAMScript.call(this.getTypedArray, this, [v3062, 0, "uint8"]);
      this.MBCRam = v11811
    }
  }
  var v9376 = this.numRAMBanks;
  var v7123 = v9376 * 8192;
  var v3065 = "Actual bytes of MBC RAM allocated: " + v7123;
  cout(v3065, 0);
  JAMScript.call(this.returnFromRTCState, this, []);
  var v3066 = this.cGBC;
  if(v3066) {
    var v11812 = JAMScript.call(this.getTypedArray, this, [8192, 0, "uint8"]);
    this.VRAM = v11812;
    var v11813 = JAMScript.call(this.getTypedArray, this, [28672, 0, "uint8"]);
    this.GBCMemory = v11813
  }
  JAMScript.call(this.memoryReadJumpCompile, this, []);
  JAMScript.call(this.memoryWriteJumpCompile, this, []);
  return
}
function v604() {
  var v3067 = 524288 / 125;
  var v3068 = settings[6];
  this.baseCPUCyclesPerIteration = v3067 * v3068;
  var v3069 = this.baseCPUCyclesPerIteration;
  this.CPUCyclesTotalRoundoff = v3069 % 4;
  var v7124 = this.baseCPUCyclesPerIteration;
  var v7125 = this.CPUCyclesTotalRoundoff;
  var v3070 = v7124 - v7125;
  this.CPUCyclesTotalBase = this.CPUCyclesTotal = v3070 | 0;
  this.CPUCyclesTotalCurrent = 0;
  return
}
function v603() {
  var index$$55 = 0;
  var v3073 = index$$55 < 256;
  for(;v3073;) {
    var v3071 = this.memory;
    var v3072 = index$$55;
    var v7126 = this.ROM;
    v3071[v3072] = v7126[index$$55];
    index$$55 = index$$55 + 1;
    v3073 = index$$55 < 256
  }
  var v3078 = this.usedGBCBootROM;
  if(v3078) {
    index$$55 = 512;
    var v3076 = index$$55 < 2304;
    for(;v3076;) {
      var v3074 = this.memory;
      var v3075 = index$$55;
      var v7127 = this.ROM;
      v3074[v3075] = v7127[index$$55];
      index$$55 = index$$55 + 1;
      v3076 = index$$55 < 2304
    }
    var v7128 = this.cGBC;
    var v3077 = !v7128;
    if(v3077) {
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
  var v3080 = index$$54 < 319;
  for(;v3080;) {
    var v9377 = this.ROMImage;
    var v7129 = v9377.charCodeAt(index$$54);
    var v3079 = v7129 > 0;
    if(v3079) {
      var v7130 = this.name;
      var v9378 = this.ROMImage;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v7131 = v9378[index$$54]
      }
      this.name = v7130 + v7131
    }
    index$$54 = index$$54 + 1;
    v3080 = index$$54 < 319
  }
  index$$54 = 319;
  var v3082 = index$$54 < 323;
  for(;v3082;) {
    var v9379 = this.ROMImage;
    var v7132 = v9379.charCodeAt(index$$54);
    var v3081 = v7132 > 0;
    if(v3081) {
      var v7133 = this.gameCode;
      var v9380 = this.ROMImage;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v7134 = v9380[index$$54]
      }
      this.gameCode = v7133 + v7134
    }
    index$$54 = index$$54 + 1;
    v3082 = index$$54 < 323
  }
  var v11647 = this.name;
  var v11563 = "Game Title: " + v11647;
  var v11309 = v11563 + "[";
  var v11310 = this.gameCode;
  var v10784 = v11309 + v11310;
  var v9381 = v10784 + "][";
  var v10785 = this.ROMImage;
  var v9382 = v10785[323];
  var v7135 = v9381 + v9382;
  var v3083 = v7135 + "]";
  cout(v3083, 0);
  var v7136 = this.gameCode;
  var v3084 = "Game Code: " + v7136;
  cout(v3084, 0);
  var v3085 = this.ROM;
  this.cartridgeType = v3085[327];
  var v7137 = this.cartridgeType;
  var v3086 = "Cartridge type #" + v7137;
  cout(v3086, 0);
  var MBCType = "";
  var v3088 = this.cartridgeType;
  switch(v3088) {
    case 0:
      var v7138 = settings[9];
      var v3087 = !v7138;
      if(v3087) {
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
  var v7139 = "Cartridge Type: " + MBCType;
  var v3089 = v7139 + ".";
  cout(v3089, 0);
  var v3090 = this.ROMBanks;
  var v7140 = this.ROM;
  var v3091 = v7140[328];
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    this.numROMBanks = v3090[v3091]
  }
  var v7141 = this.numROMBanks;
  var v3092 = v7141 + " ROM banks.";
  cout(v3092, 0);
  var v7142 = this.RAMBanks;
  var v9383 = this.ROM;
  var v7143 = v9383[329];
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3093 = v7142[v7143]
  }
  switch(v3093) {
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
  var v7144 = this.usedBootROM;
  var v3098 = !v7144;
  if(v3098) {
    var v7145 = this.ROM;
    var v3097 = v7145[323];
    switch(v3097) {
      case 0:
        this.cGBC = false;
        cout("Only GB mode detected.", 0);
        break;
      case 50:
        var v9384 = settings[2];
        var v7146 = !v9384;
        if(v7146) {
          var v11311 = this.name;
          var v11312 = this.gameCode;
          var v10786 = v11311 + v11312;
          var v11313 = this.ROM;
          var v10787 = v11313[323];
          var v9385 = v10786 + v10787;
          v7146 = v9385 == "Game and Watch 50"
        }
        var v3094 = v7146;
        if(v3094) {
          this.cGBC = true;
          cout("Created a boot exception for Game and Watch Gallery 2 (GBC ID byte is wrong on the cartridge).", 1)
        }else {
          this.cGBC = false
        }
        break;
      case 128:
        var v3095 = settings[2];
        this.cGBC = !v3095;
        cout("GB and GBC mode detected.", 0);
        break;
      case 192:
        this.cGBC = true;
        cout("Only GBC mode detected.", 0);
        break;
      default:
        this.cGBC = false;
        var v10788 = this.ROM;
        var v9386 = v10788[323];
        var v7147 = "Unknown GameBoy game type code #" + v9386;
        var v3096 = v7147 + ", defaulting to GB mode (Old games don't have a type code).";
        cout(v3096, 1)
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
  var v3099 = this.ROM;
  var cOldLicense = v3099[331];
  var v9387 = this.ROM;
  var v7148 = v9387[324];
  var v3100 = v7148 & 65280;
  var v9388 = this.ROM;
  var v7149 = v9388[325];
  var v3101 = v7149 & 255;
  var cNewLicense = v3100 | v3101;
  var v3104 = cOldLicense != 51;
  if(v3104) {
    var v3102 = "Old style license code: " + cOldLicense;
    cout(v3102, 0)
  }else {
    var v3103 = "New style license code: " + cNewLicense;
    cout(v3103, 0)
  }
  this.ROMImage = "";
  return
}
function v601() {
  var v9389 = this.ROMImage;
  var v7150 = v9389.length;
  var v3106 = v7150 > 0;
  if(v3106) {
    var v3105 = this.ROMImage;
    return v3105.length
  }
  var v3107 = this.ROM;
  var length$$17 = v3107.length;
  var index$$53 = 0;
  var v3108 = index$$53 < length$$17;
  for(;v3108;) {
    var v7151 = this.ROMImage;
    var v10789 = this.ROM;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v9390 = v10789[index$$53]
    }
    var v7152 = String.fromCharCode(v9390);
    this.ROMImage = v7151 + v7152;
    index$$53 = index$$53 + 1;
    v3108 = index$$53 < length$$17
  }
  return this.ROMImage
}
function v600() {
  this.ROM = [];
  this.usedBootROM = settings[1];
  var v3109 = this.ROMImage;
  var maxLength = v3109.length;
  var v3110 = maxLength < 16384;
  if(v3110) {
    throw new Error("ROM image size too small.");
  }
  var v11814 = JAMScript.call(this.getTypedArray, this, [maxLength, 0, "uint8"]);
  this.ROM = v11814;
  var romIndex = 0;
  var v3136 = this.usedBootROM;
  if(v3136) {
    var v7153 = settings[11];
    var v3129 = !v7153;
    if(v3129) {
      var v3115 = romIndex < 256;
      for(;v3115;) {
        var v3111 = this.memory;
        var v3112 = romIndex;
        var v7154 = this.GBCBOOTROM;
        v3111[v3112] = v7154[romIndex];
        var v3113 = this.ROM;
        var v3114 = romIndex;
        var v9391 = this.ROMImage;
        var v7155 = v9391.charCodeAt(romIndex);
        v3113[v3114] = v7155 & 255;
        romIndex = romIndex + 1;
        v3115 = romIndex < 256
      }
      var v3118 = romIndex < 512;
      for(;v3118;) {
        var v3116 = this.memory;
        var v3117 = romIndex;
        var v7156 = this.ROM;
        var v7157 = romIndex;
        var v10790 = this.ROMImage;
        var v9392 = v10790.charCodeAt(romIndex);
        v3116[v3117] = v7156[v7157] = v9392 & 255;
        romIndex = romIndex + 1;
        v3118 = romIndex < 512
      }
      var v3123 = romIndex < 2304;
      for(;v3123;) {
        var v3119 = this.memory;
        var v3120 = romIndex;
        var v7158 = this.GBCBOOTROM;
        var v7159 = romIndex - 256;
        v3119[v3120] = v7158[v7159];
        var v3121 = this.ROM;
        var v3122 = romIndex;
        var v9393 = this.ROMImage;
        var v7160 = v9393.charCodeAt(romIndex);
        v3121[v3122] = v7160 & 255;
        romIndex = romIndex + 1;
        v3123 = romIndex < 2304
      }
      this.usedGBCBootROM = true
    }else {
      var v3128 = romIndex < 256;
      for(;v3128;) {
        var v3124 = this.memory;
        var v3125 = romIndex;
        var v7161 = this.GBBOOTROM;
        v3124[v3125] = v7161[romIndex];
        var v3126 = this.ROM;
        var v3127 = romIndex;
        var v9394 = this.ROMImage;
        var v7162 = v9394.charCodeAt(romIndex);
        v3126[v3127] = v7162 & 255;
        romIndex = romIndex + 1;
        v3128 = romIndex < 256
      }
    }
    var v3132 = romIndex < 16384;
    for(;v3132;) {
      var v3130 = this.memory;
      var v3131 = romIndex;
      var v7163 = this.ROM;
      var v7164 = romIndex;
      var v10791 = this.ROMImage;
      var v9395 = v10791.charCodeAt(romIndex);
      v3130[v3131] = v7163[v7164] = v9395 & 255;
      romIndex = romIndex + 1;
      v3132 = romIndex < 16384
    }
  }else {
    var v3135 = romIndex < 16384;
    for(;v3135;) {
      var v3133 = this.memory;
      var v3134 = romIndex;
      var v7165 = this.ROM;
      var v7166 = romIndex;
      var v10792 = this.ROMImage;
      var v9396 = v10792.charCodeAt(romIndex);
      v3133[v3134] = v7165[v7166] = v9396 & 255;
      romIndex = romIndex + 1;
      v3135 = romIndex < 16384
    }
  }
  var v3139 = romIndex < maxLength;
  for(;v3139;) {
    var v3137 = this.ROM;
    var v3138 = romIndex;
    var v9397 = this.ROMImage;
    var v7167 = v9397.charCodeAt(romIndex);
    v3137[v3138] = v7167 & 255;
    romIndex = romIndex + 1;
    v3139 = romIndex < maxLength
  }
  var v9398 = this.ROM;
  var v7168 = v9398.length;
  var v3140 = v7168 / 16384;
  var v11815 = Math.floor(v3140);
  this.ROMBankEdge = v11815;
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
  var v3141 = this.memory;
  v3141[65280] = 15;
  return
}
function v598() {
  var index$$52 = 255;
  var v3149 = index$$52 >= 0;
  for(;v3149;) {
    var v7169 = index$$52 >= 48;
    if(v7169) {
      v7169 = index$$52 < 64
    }
    var v3148 = v7169;
    if(v3148) {
      var v3142 = 65280 | index$$52;
      var v7170 = this.ffxxDump;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v3143 = v7170[index$$52]
      }
      JAMScript.call(this.memoryWrite, this, [v3142, v3143])
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
          var v3144 = 65280 | index$$52;
          var v7171 = this.ffxxDump;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v3145 = v7171[index$$52]
          }
          JAMScript.call(this.memoryWrite, this, [v3144, v3145]);
          break;
        default:
          var v3146 = this.memory;
          var v3147 = 65280 | index$$52;
          var v7172 = this.ffxxDump;
          v3146[v3147] = v7172[index$$52]
      }
    }
    index$$52 = index$$52 - 1;
    v3149 = index$$52 >= 0
  }
  var v3156 = this.cGBC;
  if(v3156) {
    var v3150 = this.memory;
    v3150[65388] = 254;
    var v3151 = this.memory;
    v3151[65396] = 254
  }else {
    var v3152 = this.memory;
    v3152[65352] = 255;
    var v3153 = this.memory;
    v3153[65353] = 255;
    var v3154 = this.memory;
    v3154[65388] = 255;
    var v3155 = this.memory;
    v3155[65396] = 255
  }
  cout("Starting without the GBC boot ROM.", 0);
  var v3157;
  var v7173 = this.cGBC;
  if(v7173) {
    v3157 = 17
  }else {
    v3157 = 1
  }
  this.registerA = v3157;
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
  var v3158 = this.dutyLookup;
  this.channel1CachedDuty = v3158[2];
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
  var v3159 = this.dutyLookup;
  this.channel2CachedDuty = v3159[2];
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
  var v3162 = tileNumber < tileAmount;
  for(;v3162;) {
    var v3160 = tileArray;
    var v3161 = tileNumber;
    tileNumber = tileNumber + 1;
    var v11816 = JAMScript.call(this.getTypedArray, this, [64, 0, "uint8"]);
    v3160[v3161] = v11816;
    v3162 = tileNumber < tileAmount
  }
  return tileArray
}
function v596() {
  var v11817 = JAMScript.call(this.getTypedArray, this, [65536, 0, "uint8"]);
  this.memory = v11817;
  var v11818 = JAMScript.call(this.getTypedArray, this, [23040, 16316664, "int32"]);
  this.frameBuffer = v11818;
  var v11819 = JAMScript.call(this.getTypedArray, this, [2048, 0, "uint8"]);
  this.BGCHRBank1 = v11819;
  var v3163 = this.TICKTable;
  var v11820 = JAMScript.call(this.toTypedArray, this, [v3163, "uint8"]);
  this.TICKTable = v11820;
  var v3164 = this.SecondaryTICKTable;
  var v11821 = JAMScript.call(this.toTypedArray, this, [v3164, "uint8"]);
  this.SecondaryTICKTable = v11821;
  var v11822 = JAMScript.call(this.getTypedArray, this, [32, 0, "int8"]);
  this.channel3PCM = v11822;
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
  var v10793 = this.openRTC;
  var v9399 = typeof v10793;
  var v7174 = v9399 == "function";
  if(v7174) {
    v7174 = this.cTIMER
  }
  var v3178 = v7174;
  if(v3178) {
    var v3165 = this.name;
    var rtcData = JAMScript.call(this.openRTC, this, [v3165]);
    var index$$51 = 0;
    var v3166 = index$$51;
    index$$51 = index$$51 + 1;
    this.lastIteration = rtcData[v3166];
    var v3167 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCisLatched = rtcData[v3167];
    var v3168 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedSeconds = rtcData[v3168];
    var v3169 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedMinutes = rtcData[v3169];
    var v3170 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedHours = rtcData[v3170];
    var v3171 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedLDays = rtcData[v3171];
    var v3172 = index$$51;
    index$$51 = index$$51 + 1;
    this.latchedHDays = rtcData[v3172];
    var v3173 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCSeconds = rtcData[v3173];
    var v3174 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCMinutes = rtcData[v3174];
    var v3175 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCHours = rtcData[v3175];
    var v3176 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCDays = rtcData[v3176];
    var v3177 = index$$51;
    index$$51 = index$$51 + 1;
    this.RTCDayOverFlow = rtcData[v3177];
    this.RTCHALT = rtcData[index$$51]
  }
  return
}
function v593(returnedFrom) {
  var index$$50 = 0;
  var state$$1 = returnedFrom.slice(0);
  var v7175 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3179 = state$$1[v7175]
  }
  var v11823 = JAMScript.call(this.toTypedArray, this, [v3179, "uint8"]);
  this.ROM = v11823;
  var v9400 = this.ROM;
  var v7176 = v9400.length;
  var v3180 = v7176 / 16384;
  var v11824 = Math.floor(v3180);
  this.ROMBankEdge = v11824;
  var v3181 = index$$50;
  index$$50 = index$$50 + 1;
  this.inBootstrap = state$$1[v3181];
  var v3182 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerA = state$$1[v3182];
  var v3183 = index$$50;
  index$$50 = index$$50 + 1;
  this.FZero = state$$1[v3183];
  var v3184 = index$$50;
  index$$50 = index$$50 + 1;
  this.FSubtract = state$$1[v3184];
  var v3185 = index$$50;
  index$$50 = index$$50 + 1;
  this.FHalfCarry = state$$1[v3185];
  var v3186 = index$$50;
  index$$50 = index$$50 + 1;
  this.FCarry = state$$1[v3186];
  var v3187 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerB = state$$1[v3187];
  var v3188 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerC = state$$1[v3188];
  var v3189 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerD = state$$1[v3189];
  var v3190 = index$$50;
  index$$50 = index$$50 + 1;
  this.registerE = state$$1[v3190];
  var v3191 = index$$50;
  index$$50 = index$$50 + 1;
  this.registersHL = state$$1[v3191];
  var v3192 = index$$50;
  index$$50 = index$$50 + 1;
  this.stackPointer = state$$1[v3192];
  var v3193 = index$$50;
  index$$50 = index$$50 + 1;
  this.programCounter = state$$1[v3193];
  var v3194 = index$$50;
  index$$50 = index$$50 + 1;
  this.halt = state$$1[v3194];
  var v3195 = index$$50;
  index$$50 = index$$50 + 1;
  this.IME = state$$1[v3195];
  var v3196 = index$$50;
  index$$50 = index$$50 + 1;
  this.hdmaRunning = state$$1[v3196];
  var v3197 = index$$50;
  index$$50 = index$$50 + 1;
  this.CPUTicks = state$$1[v3197];
  var v3198 = index$$50;
  index$$50 = index$$50 + 1;
  this.doubleSpeedShifter = state$$1[v3198];
  var v7177 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3199 = state$$1[v7177]
  }
  var v11825 = JAMScript.call(this.toTypedArray, this, [v3199, "uint8"]);
  this.memory = v11825;
  var v7178 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3200 = state$$1[v7178]
  }
  var v11826 = JAMScript.call(this.toTypedArray, this, [v3200, "uint8"]);
  this.MBCRam = v11826;
  var v7179 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3201 = state$$1[v7179]
  }
  var v11827 = JAMScript.call(this.toTypedArray, this, [v3201, "uint8"]);
  this.VRAM = v11827;
  var v3202 = index$$50;
  index$$50 = index$$50 + 1;
  this.currVRAMBank = state$$1[v3202];
  var v7180 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3203 = state$$1[v7180]
  }
  var v11828 = JAMScript.call(this.toTypedArray, this, [v3203, "uint8"]);
  this.GBCMemory = v11828;
  var v3204 = index$$50;
  index$$50 = index$$50 + 1;
  this.MBC1Mode = state$$1[v3204];
  var v3205 = index$$50;
  index$$50 = index$$50 + 1;
  this.MBCRAMBanksEnabled = state$$1[v3205];
  var v3206 = index$$50;
  index$$50 = index$$50 + 1;
  this.currMBCRAMBank = state$$1[v3206];
  var v3207 = index$$50;
  index$$50 = index$$50 + 1;
  this.currMBCRAMBankPosition = state$$1[v3207];
  var v3208 = index$$50;
  index$$50 = index$$50 + 1;
  this.cGBC = state$$1[v3208];
  var v3209 = index$$50;
  index$$50 = index$$50 + 1;
  this.gbcRamBank = state$$1[v3209];
  var v3210 = index$$50;
  index$$50 = index$$50 + 1;
  this.gbcRamBankPosition = state$$1[v3210];
  var v3211 = index$$50;
  index$$50 = index$$50 + 1;
  this.ROMBank1offs = state$$1[v3211];
  var v3212 = index$$50;
  index$$50 = index$$50 + 1;
  this.currentROMBank = state$$1[v3212];
  var v3213 = index$$50;
  index$$50 = index$$50 + 1;
  this.cartridgeType = state$$1[v3213];
  var v3214 = index$$50;
  index$$50 = index$$50 + 1;
  this.name = state$$1[v3214];
  var v3215 = index$$50;
  index$$50 = index$$50 + 1;
  this.gameCode = state$$1[v3215];
  var v3216 = index$$50;
  index$$50 = index$$50 + 1;
  this.modeSTAT = state$$1[v3216];
  var v3217 = index$$50;
  index$$50 = index$$50 + 1;
  this.LYCMatchTriggerSTAT = state$$1[v3217];
  var v3218 = index$$50;
  index$$50 = index$$50 + 1;
  this.mode2TriggerSTAT = state$$1[v3218];
  var v3219 = index$$50;
  index$$50 = index$$50 + 1;
  this.mode1TriggerSTAT = state$$1[v3219];
  var v3220 = index$$50;
  index$$50 = index$$50 + 1;
  this.mode0TriggerSTAT = state$$1[v3220];
  var v3221 = index$$50;
  index$$50 = index$$50 + 1;
  this.LCDisOn = state$$1[v3221];
  var v3222 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxWindowCHRBankPosition = state$$1[v3222];
  var v3223 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxWindowDisplay = state$$1[v3223];
  var v3224 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxSpriteShow = state$$1[v3224];
  var v3225 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxSpriteNormalHeight = state$$1[v3225];
  var v3226 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxBackgroundCHRBankPosition = state$$1[v3226];
  var v3227 = index$$50;
  index$$50 = index$$50 + 1;
  this.gfxBackgroundBankOffset = state$$1[v3227];
  var v3228 = index$$50;
  index$$50 = index$$50 + 1;
  this.TIMAEnabled = state$$1[v3228];
  var v3229 = index$$50;
  index$$50 = index$$50 + 1;
  this.DIVTicks = state$$1[v3229];
  var v3230 = index$$50;
  index$$50 = index$$50 + 1;
  this.LCDTicks = state$$1[v3230];
  var v3231 = index$$50;
  index$$50 = index$$50 + 1;
  this.timerTicks = state$$1[v3231];
  var v3232 = index$$50;
  index$$50 = index$$50 + 1;
  this.TACClocker = state$$1[v3232];
  var v3233 = index$$50;
  index$$50 = index$$50 + 1;
  this.serialTimer = state$$1[v3233];
  var v3234 = index$$50;
  index$$50 = index$$50 + 1;
  this.serialShiftTimer = state$$1[v3234];
  var v3235 = index$$50;
  index$$50 = index$$50 + 1;
  this.serialShiftTimerAllocated = state$$1[v3235];
  var v3236 = index$$50;
  index$$50 = index$$50 + 1;
  this.IRQEnableDelay = state$$1[v3236];
  var v3237 = index$$50;
  index$$50 = index$$50 + 1;
  this.lastIteration = state$$1[v3237];
  var v3238 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC1 = state$$1[v3238];
  var v3239 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC2 = state$$1[v3239];
  var v3240 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC3 = state$$1[v3240];
  var v3241 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC5 = state$$1[v3241];
  var v3242 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMBC7 = state$$1[v3242];
  var v3243 = index$$50;
  index$$50 = index$$50 + 1;
  this.cSRAM = state$$1[v3243];
  var v3244 = index$$50;
  index$$50 = index$$50 + 1;
  this.cMMMO1 = state$$1[v3244];
  var v3245 = index$$50;
  index$$50 = index$$50 + 1;
  this.cRUMBLE = state$$1[v3245];
  var v3246 = index$$50;
  index$$50 = index$$50 + 1;
  this.cCamera = state$$1[v3246];
  var v3247 = index$$50;
  index$$50 = index$$50 + 1;
  this.cTAMA5 = state$$1[v3247];
  var v3248 = index$$50;
  index$$50 = index$$50 + 1;
  this.cHuC3 = state$$1[v3248];
  var v3249 = index$$50;
  index$$50 = index$$50 + 1;
  this.cHuC1 = state$$1[v3249];
  var v3250 = index$$50;
  index$$50 = index$$50 + 1;
  this.drewBlank = state$$1[v3250];
  var v7181 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3251 = state$$1[v7181]
  }
  var v11829 = JAMScript.call(this.toTypedArray, this, [v3251, "int32"]);
  this.frameBuffer = v11829;
  var v3252 = index$$50;
  index$$50 = index$$50 + 1;
  this.bgEnabled = state$$1[v3252];
  var v3253 = index$$50;
  index$$50 = index$$50 + 1;
  this.BGPriorityEnabled = state$$1[v3253];
  var v3254 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1FrequencyTracker = state$$1[v3254];
  var v3255 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1FrequencyCounter = state$$1[v3255];
  var v3256 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1totalLength = state$$1[v3256];
  var v3257 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1envelopeVolume = state$$1[v3257];
  var v3258 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1envelopeType = state$$1[v3258];
  var v3259 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1envelopeSweeps = state$$1[v3259];
  var v3260 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1envelopeSweepsLast = state$$1[v3260];
  var v3261 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1consecutive = state$$1[v3261];
  var v3262 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1frequency = state$$1[v3262];
  var v3263 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1SweepFault = state$$1[v3263];
  var v3264 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1ShadowFrequency = state$$1[v3264];
  var v3265 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1timeSweep = state$$1[v3265];
  var v3266 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1lastTimeSweep = state$$1[v3266];
  var v3267 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1numSweep = state$$1[v3267];
  var v3268 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1frequencySweepDivider = state$$1[v3268];
  var v3269 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1decreaseSweep = state$$1[v3269];
  var v3270 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2FrequencyTracker = state$$1[v3270];
  var v3271 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2FrequencyCounter = state$$1[v3271];
  var v3272 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2totalLength = state$$1[v3272];
  var v3273 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2envelopeVolume = state$$1[v3273];
  var v3274 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2envelopeType = state$$1[v3274];
  var v3275 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2envelopeSweeps = state$$1[v3275];
  var v3276 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2envelopeSweepsLast = state$$1[v3276];
  var v3277 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2consecutive = state$$1[v3277];
  var v3278 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2frequency = state$$1[v3278];
  var v3279 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3canPlay = state$$1[v3279];
  var v3280 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3totalLength = state$$1[v3280];
  var v3281 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3patternType = state$$1[v3281];
  var v3282 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3frequency = state$$1[v3282];
  var v3283 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3consecutive = state$$1[v3283];
  var v7182 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3284 = state$$1[v7182]
  }
  var v11830 = JAMScript.call(this.toTypedArray, this, [v3284, "int8"]);
  this.channel3PCM = v11830;
  var v3285 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4FrequencyPeriod = state$$1[v3285];
  var v3286 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4lastSampleLookup = state$$1[v3286];
  var v3287 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4totalLength = state$$1[v3287];
  var v3288 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4envelopeVolume = state$$1[v3288];
  var v3289 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentVolume = state$$1[v3289];
  var v3290 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4envelopeType = state$$1[v3290];
  var v3291 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4envelopeSweeps = state$$1[v3291];
  var v3292 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4envelopeSweepsLast = state$$1[v3292];
  var v3293 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4consecutive = state$$1[v3293];
  var v3294 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4BitRange = state$$1[v3294];
  var v3295 = index$$50;
  index$$50 = index$$50 + 1;
  this.soundMasterEnabled = state$$1[v3295];
  var v3296 = index$$50;
  index$$50 = index$$50 + 1;
  this.VinLeftChannelMasterVolume = state$$1[v3296];
  var v3297 = index$$50;
  index$$50 = index$$50 + 1;
  this.VinRightChannelMasterVolume = state$$1[v3297];
  var v3298 = index$$50;
  index$$50 = index$$50 + 1;
  this.leftChannel1 = state$$1[v3298];
  var v3299 = index$$50;
  index$$50 = index$$50 + 1;
  this.leftChannel2 = state$$1[v3299];
  var v3300 = index$$50;
  index$$50 = index$$50 + 1;
  this.leftChannel3 = state$$1[v3300];
  var v3301 = index$$50;
  index$$50 = index$$50 + 1;
  this.leftChannel4 = state$$1[v3301];
  var v3302 = index$$50;
  index$$50 = index$$50 + 1;
  this.rightChannel1 = state$$1[v3302];
  var v3303 = index$$50;
  index$$50 = index$$50 + 1;
  this.rightChannel2 = state$$1[v3303];
  var v3304 = index$$50;
  index$$50 = index$$50 + 1;
  this.rightChannel3 = state$$1[v3304];
  var v3305 = index$$50;
  index$$50 = index$$50 + 1;
  this.rightChannel4 = state$$1[v3305];
  var v3306 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleLeft = state$$1[v3306];
  var v3307 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleRight = state$$1[v3307];
  var v3308 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleLeft = state$$1[v3308];
  var v3309 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleRight = state$$1[v3309];
  var v3310 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3currentSampleLeft = state$$1[v3310];
  var v3311 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3currentSampleRight = state$$1[v3311];
  var v3312 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentSampleLeft = state$$1[v3312];
  var v3313 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentSampleRight = state$$1[v3313];
  var v3314 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleLeftSecondary = state$$1[v3314];
  var v3315 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleRightSecondary = state$$1[v3315];
  var v3316 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleLeftSecondary = state$$1[v3316];
  var v3317 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleRightSecondary = state$$1[v3317];
  var v3318 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3currentSampleLeftSecondary = state$$1[v3318];
  var v3319 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3currentSampleRightSecondary = state$$1[v3319];
  var v3320 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentSampleLeftSecondary = state$$1[v3320];
  var v3321 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4currentSampleRightSecondary = state$$1[v3321];
  var v3322 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleLeftTrimary = state$$1[v3322];
  var v3323 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1currentSampleRightTrimary = state$$1[v3323];
  var v3324 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleLeftTrimary = state$$1[v3324];
  var v3325 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2currentSampleRightTrimary = state$$1[v3325];
  var v3326 = index$$50;
  index$$50 = index$$50 + 1;
  this.mixerOutputCache = state$$1[v3326];
  var v3327 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1DutyTracker = state$$1[v3327];
  var v3328 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1CachedDuty = state$$1[v3328];
  var v3329 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2DutyTracker = state$$1[v3329];
  var v3330 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2CachedDuty = state$$1[v3330];
  var v3331 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel1Enabled = state$$1[v3331];
  var v3332 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel2Enabled = state$$1[v3332];
  var v3333 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3Enabled = state$$1[v3333];
  var v3334 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4Enabled = state$$1[v3334];
  var v3335 = index$$50;
  index$$50 = index$$50 + 1;
  this.sequencerClocks = state$$1[v3335];
  var v3336 = index$$50;
  index$$50 = index$$50 + 1;
  this.sequencePosition = state$$1[v3336];
  var v3337 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3Counter = state$$1[v3337];
  var v3338 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel4Counter = state$$1[v3338];
  var v3339 = index$$50;
  index$$50 = index$$50 + 1;
  this.cachedChannel3Sample = state$$1[v3339];
  var v3340 = index$$50;
  index$$50 = index$$50 + 1;
  this.cachedChannel4Sample = state$$1[v3340];
  var v3341 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3FrequencyPeriod = state$$1[v3341];
  var v3342 = index$$50;
  index$$50 = index$$50 + 1;
  this.channel3lastSampleLookup = state$$1[v3342];
  var v3343 = index$$50;
  index$$50 = index$$50 + 1;
  this.actualScanLine = state$$1[v3343];
  var v3344 = index$$50;
  index$$50 = index$$50 + 1;
  this.lastUnrenderedLine = state$$1[v3344];
  var v3345 = index$$50;
  index$$50 = index$$50 + 1;
  this.queuedScanLines = state$$1[v3345];
  var v3346 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCisLatched = state$$1[v3346];
  var v3347 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedSeconds = state$$1[v3347];
  var v3348 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedMinutes = state$$1[v3348];
  var v3349 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedHours = state$$1[v3349];
  var v3350 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedLDays = state$$1[v3350];
  var v3351 = index$$50;
  index$$50 = index$$50 + 1;
  this.latchedHDays = state$$1[v3351];
  var v3352 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCSeconds = state$$1[v3352];
  var v3353 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCMinutes = state$$1[v3353];
  var v3354 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCHours = state$$1[v3354];
  var v3355 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCDays = state$$1[v3355];
  var v3356 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCDayOverFlow = state$$1[v3356];
  var v3357 = index$$50;
  index$$50 = index$$50 + 1;
  this.RTCHALT = state$$1[v3357];
  var v3358 = index$$50;
  index$$50 = index$$50 + 1;
  this.usedBootROM = state$$1[v3358];
  var v3359 = index$$50;
  index$$50 = index$$50 + 1;
  this.skipPCIncrement = state$$1[v3359];
  var v3360 = index$$50;
  index$$50 = index$$50 + 1;
  this.STATTracker = state$$1[v3360];
  var v3361 = index$$50;
  index$$50 = index$$50 + 1;
  this.gbcRamBankPositionECHO = state$$1[v3361];
  var v3362 = index$$50;
  index$$50 = index$$50 + 1;
  this.numRAMBanks = state$$1[v3362];
  var v3363 = index$$50;
  index$$50 = index$$50 + 1;
  this.windowY = state$$1[v3363];
  var v3364 = index$$50;
  index$$50 = index$$50 + 1;
  this.windowX = state$$1[v3364];
  var v7183 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3365 = state$$1[v7183]
  }
  var v11831 = JAMScript.call(this.toTypedArray, this, [v3365, "uint8"]);
  this.gbcOBJRawPalette = v11831;
  var v7184 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3366 = state$$1[v7184]
  }
  var v11832 = JAMScript.call(this.toTypedArray, this, [v3366, "uint8"]);
  this.gbcBGRawPalette = v11832;
  var v7185 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3367 = state$$1[v7185]
  }
  var v11833 = JAMScript.call(this.toTypedArray, this, [v3367, "int32"]);
  this.gbOBJPalette = v11833;
  var v7186 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3368 = state$$1[v7186]
  }
  var v11834 = JAMScript.call(this.toTypedArray, this, [v3368, "int32"]);
  this.gbBGPalette = v11834;
  var v7187 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3369 = state$$1[v7187]
  }
  var v11835 = JAMScript.call(this.toTypedArray, this, [v3369, "int32"]);
  this.gbcOBJPalette = v11835;
  var v7188 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3370 = state$$1[v7188]
  }
  var v11836 = JAMScript.call(this.toTypedArray, this, [v3370, "int32"]);
  this.gbcBGPalette = v11836;
  var v7189 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3371 = state$$1[v7189]
  }
  var v11837 = JAMScript.call(this.toTypedArray, this, [v3371, "int32"]);
  this.gbBGColorizedPalette = v11837;
  var v7190 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3372 = state$$1[v7190]
  }
  var v11838 = JAMScript.call(this.toTypedArray, this, [v3372, "int32"]);
  this.gbOBJColorizedPalette = v11838;
  var v7191 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3373 = state$$1[v7191]
  }
  var v11839 = JAMScript.call(this.toTypedArray, this, [v3373, "int32"]);
  this.cachedBGPaletteConversion = v11839;
  var v7192 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3374 = state$$1[v7192]
  }
  var v11840 = JAMScript.call(this.toTypedArray, this, [v3374, "int32"]);
  this.cachedOBJPaletteConversion = v11840;
  var v7193 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3375 = state$$1[v7193]
  }
  var v11841 = JAMScript.call(this.toTypedArray, this, [v3375, "uint8"]);
  this.BGCHRBank1 = v11841;
  var v7194 = index$$50;
  index$$50 = index$$50 + 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v3376 = state$$1[v7194]
  }
  var v11842 = JAMScript.call(this.toTypedArray, this, [v3376, "uint8"]);
  this.BGCHRBank2 = v11842;
  var v3377 = index$$50;
  index$$50 = index$$50 + 1;
  this.haltPostClocks = state$$1[v3377];
  var v3378 = index$$50;
  index$$50 = index$$50 + 1;
  this.interruptsRequested = state$$1[v3378];
  var v3379 = index$$50;
  index$$50 = index$$50 + 1;
  this.interruptsEnabled = state$$1[v3379];
  JAMScript.call(this.checkIRQMatching, this, []);
  var v3380 = index$$50;
  index$$50 = index$$50 + 1;
  this.remainingClocks = state$$1[v3380];
  var v3381 = index$$50;
  index$$50 = index$$50 + 1;
  this.colorizedGBPalettes = state$$1[v3381];
  var v3382 = index$$50;
  index$$50 = index$$50 + 1;
  this.backgroundY = state$$1[v3382];
  var v3383 = index$$50;
  index$$50 = index$$50 + 1;
  this.backgroundX = state$$1[v3383];
  this.CPUStopped = state$$1[index$$50];
  this.fromSaveState = true;
  var v3384 = this.TICKTable;
  var v11843 = JAMScript.call(this.toTypedArray, this, [v3384, "uint8"]);
  this.TICKTable = v11843;
  var v3385 = this.SecondaryTICKTable;
  var v11844 = JAMScript.call(this.toTypedArray, this, [v3385, "uint8"]);
  this.SecondaryTICKTable = v11844;
  JAMScript.call(this.initializeReferencesFromSaveState, this, []);
  JAMScript.call(this.memoryReadJumpCompile, this, []);
  JAMScript.call(this.memoryWriteJumpCompile, this, []);
  JAMScript.call(this.initLCD, this, []);
  JAMScript.call(this.initSound, this, []);
  var v3386;
  var v9401 = this.channel4BitRange;
  var v7195 = v9401 == 32767;
  if(v7195) {
    v3386 = this.LSFR15Table
  }else {
    v3386 = this.LSFR7Table
  }
  this.noiseSampleTable = v3386;
  var v3387;
  var v9402 = this.channel4BitRange;
  var v7196 = v9402 == 32767;
  if(v7196) {
    v3387 = 15
  }else {
    v3387 = 7
  }
  this.channel4VolumeShifter = v3387;
  return
}
function v592() {
  var v7197 = this.ROM;
  var v3388 = JAMScript.call(this.fromTypedArray, this, [v7197]);
  var v3389 = this.inBootstrap;
  var v3390 = this.registerA;
  var v3391 = this.FZero;
  var v3392 = this.FSubtract;
  var v3393 = this.FHalfCarry;
  var v3394 = this.FCarry;
  var v3395 = this.registerB;
  var v3396 = this.registerC;
  var v3397 = this.registerD;
  var v3398 = this.registerE;
  var v3399 = this.registersHL;
  var v3400 = this.stackPointer;
  var v3401 = this.programCounter;
  var v3402 = this.halt;
  var v3403 = this.IME;
  var v3404 = this.hdmaRunning;
  var v3405 = this.CPUTicks;
  var v3406 = this.doubleSpeedShifter;
  var v7198 = this.memory;
  var v3407 = JAMScript.call(this.fromTypedArray, this, [v7198]);
  var v7199 = this.MBCRam;
  var v3408 = JAMScript.call(this.fromTypedArray, this, [v7199]);
  var v7200 = this.VRAM;
  var v3409 = JAMScript.call(this.fromTypedArray, this, [v7200]);
  var v3410 = this.currVRAMBank;
  var v7201 = this.GBCMemory;
  var v3411 = JAMScript.call(this.fromTypedArray, this, [v7201]);
  var v3412 = this.MBC1Mode;
  var v3413 = this.MBCRAMBanksEnabled;
  var v3414 = this.currMBCRAMBank;
  var v3415 = this.currMBCRAMBankPosition;
  var v3416 = this.cGBC;
  var v3417 = this.gbcRamBank;
  var v3418 = this.gbcRamBankPosition;
  var v3419 = this.ROMBank1offs;
  var v3420 = this.currentROMBank;
  var v3421 = this.cartridgeType;
  var v3422 = this.name;
  var v3423 = this.gameCode;
  var v3424 = this.modeSTAT;
  var v3425 = this.LYCMatchTriggerSTAT;
  var v3426 = this.mode2TriggerSTAT;
  var v3427 = this.mode1TriggerSTAT;
  var v3428 = this.mode0TriggerSTAT;
  var v3429 = this.LCDisOn;
  var v3430 = this.gfxWindowCHRBankPosition;
  var v3431 = this.gfxWindowDisplay;
  var v3432 = this.gfxSpriteShow;
  var v3433 = this.gfxSpriteNormalHeight;
  var v3434 = this.gfxBackgroundCHRBankPosition;
  var v3435 = this.gfxBackgroundBankOffset;
  var v3436 = this.TIMAEnabled;
  var v3437 = this.DIVTicks;
  var v3438 = this.LCDTicks;
  var v3439 = this.timerTicks;
  var v3440 = this.TACClocker;
  var v3441 = this.serialTimer;
  var v3442 = this.serialShiftTimer;
  var v3443 = this.serialShiftTimerAllocated;
  var v3444 = this.IRQEnableDelay;
  var v3445 = this.lastIteration;
  var v3446 = this.cMBC1;
  var v3447 = this.cMBC2;
  var v3448 = this.cMBC3;
  var v3449 = this.cMBC5;
  var v3450 = this.cMBC7;
  var v3451 = this.cSRAM;
  var v3452 = this.cMMMO1;
  var v3453 = this.cRUMBLE;
  var v3454 = this.cCamera;
  var v3455 = this.cTAMA5;
  var v3456 = this.cHuC3;
  var v3457 = this.cHuC1;
  var v3458 = this.drewBlank;
  var v7202 = this.frameBuffer;
  var v3459 = JAMScript.call(this.fromTypedArray, this, [v7202]);
  var v3460 = this.bgEnabled;
  var v3461 = this.BGPriorityEnabled;
  var v3462 = this.channel1FrequencyTracker;
  var v3463 = this.channel1FrequencyCounter;
  var v3464 = this.channel1totalLength;
  var v3465 = this.channel1envelopeVolume;
  var v3466 = this.channel1envelopeType;
  var v3467 = this.channel1envelopeSweeps;
  var v3468 = this.channel1envelopeSweepsLast;
  var v3469 = this.channel1consecutive;
  var v3470 = this.channel1frequency;
  var v3471 = this.channel1SweepFault;
  var v3472 = this.channel1ShadowFrequency;
  var v3473 = this.channel1timeSweep;
  var v3474 = this.channel1lastTimeSweep;
  var v3475 = this.channel1numSweep;
  var v3476 = this.channel1frequencySweepDivider;
  var v3477 = this.channel1decreaseSweep;
  var v3478 = this.channel2FrequencyTracker;
  var v3479 = this.channel2FrequencyCounter;
  var v3480 = this.channel2totalLength;
  var v3481 = this.channel2envelopeVolume;
  var v3482 = this.channel2envelopeType;
  var v3483 = this.channel2envelopeSweeps;
  var v3484 = this.channel2envelopeSweepsLast;
  var v3485 = this.channel2consecutive;
  var v3486 = this.channel2frequency;
  var v3487 = this.channel3canPlay;
  var v3488 = this.channel3totalLength;
  var v3489 = this.channel3patternType;
  var v3490 = this.channel3frequency;
  var v3491 = this.channel3consecutive;
  var v7203 = this.channel3PCM;
  var v3492 = JAMScript.call(this.fromTypedArray, this, [v7203]);
  var v3493 = this.channel4FrequencyPeriod;
  var v3494 = this.channel4lastSampleLookup;
  var v3495 = this.channel4totalLength;
  var v3496 = this.channel4envelopeVolume;
  var v3497 = this.channel4currentVolume;
  var v3498 = this.channel4envelopeType;
  var v3499 = this.channel4envelopeSweeps;
  var v3500 = this.channel4envelopeSweepsLast;
  var v3501 = this.channel4consecutive;
  var v3502 = this.channel4BitRange;
  var v3503 = this.soundMasterEnabled;
  var v3504 = this.VinLeftChannelMasterVolume;
  var v3505 = this.VinRightChannelMasterVolume;
  var v3506 = this.leftChannel1;
  var v3507 = this.leftChannel2;
  var v3508 = this.leftChannel3;
  var v3509 = this.leftChannel4;
  var v3510 = this.rightChannel1;
  var v3511 = this.rightChannel2;
  var v3512 = this.rightChannel3;
  var v3513 = this.rightChannel4;
  var v3514 = this.channel1currentSampleLeft;
  var v3515 = this.channel1currentSampleRight;
  var v3516 = this.channel2currentSampleLeft;
  var v3517 = this.channel2currentSampleRight;
  var v3518 = this.channel3currentSampleLeft;
  var v3519 = this.channel3currentSampleRight;
  var v3520 = this.channel4currentSampleLeft;
  var v3521 = this.channel4currentSampleRight;
  var v3522 = this.channel1currentSampleLeftSecondary;
  var v3523 = this.channel1currentSampleRightSecondary;
  var v3524 = this.channel2currentSampleLeftSecondary;
  var v3525 = this.channel2currentSampleRightSecondary;
  var v3526 = this.channel3currentSampleLeftSecondary;
  var v3527 = this.channel3currentSampleRightSecondary;
  var v3528 = this.channel4currentSampleLeftSecondary;
  var v3529 = this.channel4currentSampleRightSecondary;
  var v3530 = this.channel1currentSampleLeftTrimary;
  var v3531 = this.channel1currentSampleRightTrimary;
  var v3532 = this.channel2currentSampleLeftTrimary;
  var v3533 = this.channel2currentSampleRightTrimary;
  var v3534 = this.mixerOutputCache;
  var v3535 = this.channel1DutyTracker;
  var v3536 = this.channel1CachedDuty;
  var v3537 = this.channel2DutyTracker;
  var v3538 = this.channel2CachedDuty;
  var v3539 = this.channel1Enabled;
  var v3540 = this.channel2Enabled;
  var v3541 = this.channel3Enabled;
  var v3542 = this.channel4Enabled;
  var v3543 = this.sequencerClocks;
  var v3544 = this.sequencePosition;
  var v3545 = this.channel3Counter;
  var v3546 = this.channel4Counter;
  var v3547 = this.cachedChannel3Sample;
  var v3548 = this.cachedChannel4Sample;
  var v3549 = this.channel3FrequencyPeriod;
  var v3550 = this.channel3lastSampleLookup;
  var v3551 = this.actualScanLine;
  var v3552 = this.lastUnrenderedLine;
  var v3553 = this.queuedScanLines;
  var v3554 = this.RTCisLatched;
  var v3555 = this.latchedSeconds;
  var v3556 = this.latchedMinutes;
  var v3557 = this.latchedHours;
  var v3558 = this.latchedLDays;
  var v3559 = this.latchedHDays;
  var v3560 = this.RTCSeconds;
  var v3561 = this.RTCMinutes;
  var v3562 = this.RTCHours;
  var v3563 = this.RTCDays;
  var v3564 = this.RTCDayOverFlow;
  var v3565 = this.RTCHALT;
  var v3566 = this.usedBootROM;
  var v3567 = this.skipPCIncrement;
  var v3568 = this.STATTracker;
  var v3569 = this.gbcRamBankPositionECHO;
  var v3570 = this.numRAMBanks;
  var v3571 = this.windowY;
  var v3572 = this.windowX;
  var v7204 = this.gbcOBJRawPalette;
  var v3573 = JAMScript.call(this.fromTypedArray, this, [v7204]);
  var v7205 = this.gbcBGRawPalette;
  var v3574 = JAMScript.call(this.fromTypedArray, this, [v7205]);
  var v7206 = this.gbOBJPalette;
  var v3575 = JAMScript.call(this.fromTypedArray, this, [v7206]);
  var v7207 = this.gbBGPalette;
  var v3576 = JAMScript.call(this.fromTypedArray, this, [v7207]);
  var v7208 = this.gbcOBJPalette;
  var v3577 = JAMScript.call(this.fromTypedArray, this, [v7208]);
  var v7209 = this.gbcBGPalette;
  var v3578 = JAMScript.call(this.fromTypedArray, this, [v7209]);
  var v7210 = this.gbBGColorizedPalette;
  var v3579 = JAMScript.call(this.fromTypedArray, this, [v7210]);
  var v7211 = this.gbOBJColorizedPalette;
  var v3580 = JAMScript.call(this.fromTypedArray, this, [v7211]);
  var v7212 = this.cachedBGPaletteConversion;
  var v3581 = JAMScript.call(this.fromTypedArray, this, [v7212]);
  var v7213 = this.cachedOBJPaletteConversion;
  var v3582 = JAMScript.call(this.fromTypedArray, this, [v7213]);
  var v7214 = this.BGCHRBank1;
  var v3583 = JAMScript.call(this.fromTypedArray, this, [v7214]);
  var v7215 = this.BGCHRBank2;
  var v3584 = JAMScript.call(this.fromTypedArray, this, [v7215]);
  var v3585 = this.haltPostClocks;
  var v3586 = this.interruptsRequested;
  var v3587 = this.interruptsEnabled;
  var v3588 = this.remainingClocks;
  var v3589 = this.colorizedGBPalettes;
  var v3590 = this.backgroundY;
  var v3591 = this.backgroundX;
  var v3592 = this.CPUStopped;
  return[v3388, v3389, v3390, v3391, v3392, v3393, v3394, v3395, v3396, v3397, v3398, v3399, v3400, v3401, v3402, v3403, v3404, v3405, v3406, v3407, v3408, v3409, v3410, v3411, v3412, v3413, v3414, v3415, v3416, v3417, v3418, v3419, v3420, v3421, v3422, v3423, v3424, v3425, v3426, v3427, v3428, v3429, v3430, v3431, v3432, v3433, v3434, v3435, v3436, v3437, v3438, v3439, v3440, v3441, v3442, v3443, v3444, v3445, v3446, v3447, v3448, v3449, v3450, v3451, v3452, v3453, v3454, v3455, v3456, v3457, v3458, 
  v3459, v3460, v3461, v3462, v3463, v3464, v3465, v3466, v3467, v3468, v3469, v3470, v3471, v3472, v3473, v3474, v3475, v3476, v3477, v3478, v3479, v3480, v3481, v3482, v3483, v3484, v3485, v3486, v3487, v3488, v3489, v3490, v3491, v3492, v3493, v3494, v3495, v3496, v3497, v3498, v3499, v3500, v3501, v3502, v3503, v3504, v3505, v3506, v3507, v3508, v3509, v3510, v3511, v3512, v3513, v3514, v3515, v3516, v3517, v3518, v3519, v3520, v3521, v3522, v3523, v3524, v3525, v3526, v3527, v3528, v3529, v3530, 
  v3531, v3532, v3533, v3534, v3535, v3536, v3537, v3538, v3539, v3540, v3541, v3542, v3543, v3544, v3545, v3546, v3547, v3548, v3549, v3550, v3551, v3552, v3553, v3554, v3555, v3556, v3557, v3558, v3559, v3560, v3561, v3562, v3563, v3564, v3565, v3566, v3567, v3568, v3569, v3570, v3571, v3572, v3573, v3574, v3575, v3576, v3577, v3578, v3579, v3580, v3581, v3582, v3583, v3584, v3585, v3586, v3587, v3588, v3589, v3590, v3591, v3592]
}
function v591() {
  var v7216 = this.cTIMER;
  var v3606 = !v7216;
  if(v3606) {
    return[]
  }else {
    var v3593 = this.lastIteration;
    var v3594 = this.RTCisLatched;
    var v3595 = this.latchedSeconds;
    var v3596 = this.latchedMinutes;
    var v3597 = this.latchedHours;
    var v3598 = this.latchedLDays;
    var v3599 = this.latchedHDays;
    var v3600 = this.RTCSeconds;
    var v3601 = this.RTCMinutes;
    var v3602 = this.RTCHours;
    var v3603 = this.RTCDays;
    var v3604 = this.RTCDayOverFlow;
    var v3605 = this.RTCHALT;
    return[v3593, v3594, v3595, v3596, v3597, v3598, v3599, v3600, v3601, v3602, v3603, v3604, v3605]
  }
  return
}
function v590() {
  var v9403 = this.cBATT;
  var v7217 = !v9403;
  var v9405 = !v7217;
  if(v9405) {
    var v10794 = this.MBCRam;
    var v9404 = v10794.length;
    v7217 = v9404 == 0
  }
  var v3608 = v7217;
  if(v3608) {
    return[]
  }else {
    var v3607 = this.MBCRam;
    return JAMScript.call(this.fromTypedArray, this, [v3607])
  }
  return
}
function v589(parentObj$$512) {
  var v7218 = parentObj$$512;
  var v9406 = parentObj$$512.registerA;
  v7218.registerA = v9406 | 128;
  return
}
function v588(parentObj$$511) {
  var v3609 = parentObj$$511.memoryWriter;
  var v3610 = parentObj$$511.registersHL;
  var v3611 = parentObj$$511.registersHL;
  var v9407 = parentObj$$511.memoryReader;
  var v9408 = parentObj$$511.registersHL;
  var v9409 = parentObj$$511.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12002 = [[parentObj$$511, v9409], v9407, v9407[v9408]]
  }
  var v7219 = JAMScript.call(v12002[2], v12002[1], v12002[0]);
  var v3612 = v7219 | 128;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12003 = [[parentObj$$511, v3611, v3612], v3609, v3609[v3610]]
  }
  JAMScript.call(v12003[2], v12003[1], v12003[0]);
  return
}
function v587(parentObj$$510) {
  var v7220 = parentObj$$510;
  var v9410 = parentObj$$510.registersHL;
  v7220.registersHL = v9410 | 128;
  return
}
function v586(parentObj$$509) {
  var v7221 = parentObj$$509;
  var v9411 = parentObj$$509.registersHL;
  v7221.registersHL = v9411 | 32768;
  return
}
function v585(parentObj$$508) {
  var v7222 = parentObj$$508;
  var v9412 = parentObj$$508.registerE;
  v7222.registerE = v9412 | 128;
  return
}
function v584(parentObj$$507) {
  var v7223 = parentObj$$507;
  var v9413 = parentObj$$507.registerD;
  v7223.registerD = v9413 | 128;
  return
}
function v583(parentObj$$506) {
  var v7224 = parentObj$$506;
  var v9414 = parentObj$$506.registerC;
  v7224.registerC = v9414 | 128;
  return
}
function v582(parentObj$$505) {
  var v7225 = parentObj$$505;
  var v9415 = parentObj$$505.registerB;
  v7225.registerB = v9415 | 128;
  return
}
function v581(parentObj$$504) {
  var v7226 = parentObj$$504;
  var v9416 = parentObj$$504.registerA;
  v7226.registerA = v9416 | 64;
  return
}
function v580(parentObj$$503) {
  var v3613 = parentObj$$503.memoryWriter;
  var v3614 = parentObj$$503.registersHL;
  var v3615 = parentObj$$503.registersHL;
  var v9417 = parentObj$$503.memoryReader;
  var v9418 = parentObj$$503.registersHL;
  var v9419 = parentObj$$503.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12004 = [[parentObj$$503, v9419], v9417, v9417[v9418]]
  }
  var v7227 = JAMScript.call(v12004[2], v12004[1], v12004[0]);
  var v3616 = v7227 | 64;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12005 = [[parentObj$$503, v3615, v3616], v3613, v3613[v3614]]
  }
  JAMScript.call(v12005[2], v12005[1], v12005[0]);
  return
}
function v579(parentObj$$502) {
  var v7228 = parentObj$$502;
  var v9420 = parentObj$$502.registersHL;
  v7228.registersHL = v9420 | 64;
  return
}
function v578(parentObj$$501) {
  var v7229 = parentObj$$501;
  var v9421 = parentObj$$501.registersHL;
  v7229.registersHL = v9421 | 16384;
  return
}
function v577(parentObj$$500) {
  var v7230 = parentObj$$500;
  var v9422 = parentObj$$500.registerE;
  v7230.registerE = v9422 | 64;
  return
}
function v576(parentObj$$499) {
  var v7231 = parentObj$$499;
  var v9423 = parentObj$$499.registerD;
  v7231.registerD = v9423 | 64;
  return
}
function v575(parentObj$$498) {
  var v7232 = parentObj$$498;
  var v9424 = parentObj$$498.registerC;
  v7232.registerC = v9424 | 64;
  return
}
function v574(parentObj$$497) {
  var v7233 = parentObj$$497;
  var v9425 = parentObj$$497.registerB;
  v7233.registerB = v9425 | 64;
  return
}
function v573(parentObj$$496) {
  var v7234 = parentObj$$496;
  var v9426 = parentObj$$496.registerA;
  v7234.registerA = v9426 | 32;
  return
}
function v572(parentObj$$495) {
  var v3617 = parentObj$$495.memoryWriter;
  var v3618 = parentObj$$495.registersHL;
  var v3619 = parentObj$$495.registersHL;
  var v9427 = parentObj$$495.memoryReader;
  var v9428 = parentObj$$495.registersHL;
  var v9429 = parentObj$$495.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12006 = [[parentObj$$495, v9429], v9427, v9427[v9428]]
  }
  var v7235 = JAMScript.call(v12006[2], v12006[1], v12006[0]);
  var v3620 = v7235 | 32;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12007 = [[parentObj$$495, v3619, v3620], v3617, v3617[v3618]]
  }
  JAMScript.call(v12007[2], v12007[1], v12007[0]);
  return
}
function v571(parentObj$$494) {
  var v7236 = parentObj$$494;
  var v9430 = parentObj$$494.registersHL;
  v7236.registersHL = v9430 | 32;
  return
}
function v570(parentObj$$493) {
  var v7237 = parentObj$$493;
  var v9431 = parentObj$$493.registersHL;
  v7237.registersHL = v9431 | 8192;
  return
}
function v569(parentObj$$492) {
  var v7238 = parentObj$$492;
  var v9432 = parentObj$$492.registerE;
  v7238.registerE = v9432 | 32;
  return
}
function v568(parentObj$$491) {
  var v7239 = parentObj$$491;
  var v9433 = parentObj$$491.registerD;
  v7239.registerD = v9433 | 32;
  return
}
function v567(parentObj$$490) {
  var v7240 = parentObj$$490;
  var v9434 = parentObj$$490.registerC;
  v7240.registerC = v9434 | 32;
  return
}
function v566(parentObj$$489) {
  var v7241 = parentObj$$489;
  var v9435 = parentObj$$489.registerB;
  v7241.registerB = v9435 | 32;
  return
}
function v565(parentObj$$488) {
  var v7242 = parentObj$$488;
  var v9436 = parentObj$$488.registerA;
  v7242.registerA = v9436 | 16;
  return
}
function v564(parentObj$$487) {
  var v3621 = parentObj$$487.memoryWriter;
  var v3622 = parentObj$$487.registersHL;
  var v3623 = parentObj$$487.registersHL;
  var v9437 = parentObj$$487.memoryReader;
  var v9438 = parentObj$$487.registersHL;
  var v9439 = parentObj$$487.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12008 = [[parentObj$$487, v9439], v9437, v9437[v9438]]
  }
  var v7243 = JAMScript.call(v12008[2], v12008[1], v12008[0]);
  var v3624 = v7243 | 16;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12009 = [[parentObj$$487, v3623, v3624], v3621, v3621[v3622]]
  }
  JAMScript.call(v12009[2], v12009[1], v12009[0]);
  return
}
function v563(parentObj$$486) {
  var v7244 = parentObj$$486;
  var v9440 = parentObj$$486.registersHL;
  v7244.registersHL = v9440 | 16;
  return
}
function v562(parentObj$$485) {
  var v7245 = parentObj$$485;
  var v9441 = parentObj$$485.registersHL;
  v7245.registersHL = v9441 | 4096;
  return
}
function v561(parentObj$$484) {
  var v7246 = parentObj$$484;
  var v9442 = parentObj$$484.registerE;
  v7246.registerE = v9442 | 16;
  return
}
function v560(parentObj$$483) {
  var v7247 = parentObj$$483;
  var v9443 = parentObj$$483.registerD;
  v7247.registerD = v9443 | 16;
  return
}
function v559(parentObj$$482) {
  var v7248 = parentObj$$482;
  var v9444 = parentObj$$482.registerC;
  v7248.registerC = v9444 | 16;
  return
}
function v558(parentObj$$481) {
  var v7249 = parentObj$$481;
  var v9445 = parentObj$$481.registerB;
  v7249.registerB = v9445 | 16;
  return
}
function v557(parentObj$$480) {
  var v7250 = parentObj$$480;
  var v9446 = parentObj$$480.registerA;
  v7250.registerA = v9446 | 8;
  return
}
function v556(parentObj$$479) {
  var v3625 = parentObj$$479.memoryWriter;
  var v3626 = parentObj$$479.registersHL;
  var v3627 = parentObj$$479.registersHL;
  var v9447 = parentObj$$479.memoryReader;
  var v9448 = parentObj$$479.registersHL;
  var v9449 = parentObj$$479.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12010 = [[parentObj$$479, v9449], v9447, v9447[v9448]]
  }
  var v7251 = JAMScript.call(v12010[2], v12010[1], v12010[0]);
  var v3628 = v7251 | 8;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12011 = [[parentObj$$479, v3627, v3628], v3625, v3625[v3626]]
  }
  JAMScript.call(v12011[2], v12011[1], v12011[0]);
  return
}
function v555(parentObj$$478) {
  var v7252 = parentObj$$478;
  var v9450 = parentObj$$478.registersHL;
  v7252.registersHL = v9450 | 8;
  return
}
function v554(parentObj$$477) {
  var v7253 = parentObj$$477;
  var v9451 = parentObj$$477.registersHL;
  v7253.registersHL = v9451 | 2048;
  return
}
function v553(parentObj$$476) {
  var v7254 = parentObj$$476;
  var v9452 = parentObj$$476.registerE;
  v7254.registerE = v9452 | 8;
  return
}
function v552(parentObj$$475) {
  var v7255 = parentObj$$475;
  var v9453 = parentObj$$475.registerD;
  v7255.registerD = v9453 | 8;
  return
}
function v551(parentObj$$474) {
  var v7256 = parentObj$$474;
  var v9454 = parentObj$$474.registerC;
  v7256.registerC = v9454 | 8;
  return
}
function v550(parentObj$$473) {
  var v7257 = parentObj$$473;
  var v9455 = parentObj$$473.registerB;
  v7257.registerB = v9455 | 8;
  return
}
function v549(parentObj$$472) {
  var v7258 = parentObj$$472;
  var v9456 = parentObj$$472.registerA;
  v7258.registerA = v9456 | 4;
  return
}
function v548(parentObj$$471) {
  var v3629 = parentObj$$471.memoryWriter;
  var v3630 = parentObj$$471.registersHL;
  var v3631 = parentObj$$471.registersHL;
  var v9457 = parentObj$$471.memoryReader;
  var v9458 = parentObj$$471.registersHL;
  var v9459 = parentObj$$471.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12012 = [[parentObj$$471, v9459], v9457, v9457[v9458]]
  }
  var v7259 = JAMScript.call(v12012[2], v12012[1], v12012[0]);
  var v3632 = v7259 | 4;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12013 = [[parentObj$$471, v3631, v3632], v3629, v3629[v3630]]
  }
  JAMScript.call(v12013[2], v12013[1], v12013[0]);
  return
}
function v547(parentObj$$470) {
  var v7260 = parentObj$$470;
  var v9460 = parentObj$$470.registersHL;
  v7260.registersHL = v9460 | 4;
  return
}
function v546(parentObj$$469) {
  var v7261 = parentObj$$469;
  var v9461 = parentObj$$469.registersHL;
  v7261.registersHL = v9461 | 1024;
  return
}
function v545(parentObj$$468) {
  var v7262 = parentObj$$468;
  var v9462 = parentObj$$468.registerE;
  v7262.registerE = v9462 | 4;
  return
}
function v544(parentObj$$467) {
  var v7263 = parentObj$$467;
  var v9463 = parentObj$$467.registerD;
  v7263.registerD = v9463 | 4;
  return
}
function v543(parentObj$$466) {
  var v7264 = parentObj$$466;
  var v9464 = parentObj$$466.registerC;
  v7264.registerC = v9464 | 4;
  return
}
function v542(parentObj$$465) {
  var v7265 = parentObj$$465;
  var v9465 = parentObj$$465.registerB;
  v7265.registerB = v9465 | 4;
  return
}
function v541(parentObj$$464) {
  var v7266 = parentObj$$464;
  var v9466 = parentObj$$464.registerA;
  v7266.registerA = v9466 | 2;
  return
}
function v540(parentObj$$463) {
  var v3633 = parentObj$$463.memoryWriter;
  var v3634 = parentObj$$463.registersHL;
  var v3635 = parentObj$$463.registersHL;
  var v9467 = parentObj$$463.memoryReader;
  var v9468 = parentObj$$463.registersHL;
  var v9469 = parentObj$$463.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12014 = [[parentObj$$463, v9469], v9467, v9467[v9468]]
  }
  var v7267 = JAMScript.call(v12014[2], v12014[1], v12014[0]);
  var v3636 = v7267 | 2;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12015 = [[parentObj$$463, v3635, v3636], v3633, v3633[v3634]]
  }
  JAMScript.call(v12015[2], v12015[1], v12015[0]);
  return
}
function v539(parentObj$$462) {
  var v7268 = parentObj$$462;
  var v9470 = parentObj$$462.registersHL;
  v7268.registersHL = v9470 | 2;
  return
}
function v538(parentObj$$461) {
  var v7269 = parentObj$$461;
  var v9471 = parentObj$$461.registersHL;
  v7269.registersHL = v9471 | 512;
  return
}
function v537(parentObj$$460) {
  var v7270 = parentObj$$460;
  var v9472 = parentObj$$460.registerE;
  v7270.registerE = v9472 | 2;
  return
}
function v536(parentObj$$459) {
  var v7271 = parentObj$$459;
  var v9473 = parentObj$$459.registerD;
  v7271.registerD = v9473 | 2;
  return
}
function v535(parentObj$$458) {
  var v7272 = parentObj$$458;
  var v9474 = parentObj$$458.registerC;
  v7272.registerC = v9474 | 2;
  return
}
function v534(parentObj$$457) {
  var v7273 = parentObj$$457;
  var v9475 = parentObj$$457.registerB;
  v7273.registerB = v9475 | 2;
  return
}
function v533(parentObj$$456) {
  var v7274 = parentObj$$456;
  var v9476 = parentObj$$456.registerA;
  v7274.registerA = v9476 | 1;
  return
}
function v532(parentObj$$455) {
  var v3637 = parentObj$$455.memoryWriter;
  var v3638 = parentObj$$455.registersHL;
  var v3639 = parentObj$$455.registersHL;
  var v9477 = parentObj$$455.memoryReader;
  var v9478 = parentObj$$455.registersHL;
  var v9479 = parentObj$$455.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12016 = [[parentObj$$455, v9479], v9477, v9477[v9478]]
  }
  var v7275 = JAMScript.call(v12016[2], v12016[1], v12016[0]);
  var v3640 = v7275 | 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12017 = [[parentObj$$455, v3639, v3640], v3637, v3637[v3638]]
  }
  JAMScript.call(v12017[2], v12017[1], v12017[0]);
  return
}
function v531(parentObj$$454) {
  var v7276 = parentObj$$454;
  var v9480 = parentObj$$454.registersHL;
  v7276.registersHL = v9480 | 1;
  return
}
function v530(parentObj$$453) {
  var v7277 = parentObj$$453;
  var v9481 = parentObj$$453.registersHL;
  v7277.registersHL = v9481 | 256;
  return
}
function v529(parentObj$$452) {
  var v7278 = parentObj$$452;
  var v9482 = parentObj$$452.registerE;
  v7278.registerE = v9482 | 1;
  return
}
function v528(parentObj$$451) {
  var v7279 = parentObj$$451;
  var v9483 = parentObj$$451.registerD;
  v7279.registerD = v9483 | 1;
  return
}
function v527(parentObj$$450) {
  var v7280 = parentObj$$450;
  var v9484 = parentObj$$450.registerC;
  v7280.registerC = v9484 | 1;
  return
}
function v526(parentObj$$449) {
  var v7281 = parentObj$$449;
  var v9485 = parentObj$$449.registerB;
  v7281.registerB = v9485 | 1;
  return
}
function v525(parentObj$$448) {
  var v7282 = parentObj$$448;
  var v9486 = parentObj$$448.registerA;
  v7282.registerA = v9486 & 127;
  return
}
function v524(parentObj$$447) {
  var v3641 = parentObj$$447.memoryWriter;
  var v3642 = parentObj$$447.registersHL;
  var v3643 = parentObj$$447.registersHL;
  var v9487 = parentObj$$447.memoryReader;
  var v9488 = parentObj$$447.registersHL;
  var v9489 = parentObj$$447.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12018 = [[parentObj$$447, v9489], v9487, v9487[v9488]]
  }
  var v7283 = JAMScript.call(v12018[2], v12018[1], v12018[0]);
  var v3644 = v7283 & 127;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12019 = [[parentObj$$447, v3643, v3644], v3641, v3641[v3642]]
  }
  JAMScript.call(v12019[2], v12019[1], v12019[0]);
  return
}
function v523(parentObj$$446) {
  var v7284 = parentObj$$446;
  var v9490 = parentObj$$446.registersHL;
  v7284.registersHL = v9490 & 65407;
  return
}
function v522(parentObj$$445) {
  var v7285 = parentObj$$445;
  var v9491 = parentObj$$445.registersHL;
  v7285.registersHL = v9491 & 32767;
  return
}
function v521(parentObj$$444) {
  var v7286 = parentObj$$444;
  var v9492 = parentObj$$444.registerE;
  v7286.registerE = v9492 & 127;
  return
}
function v520(parentObj$$443) {
  var v7287 = parentObj$$443;
  var v9493 = parentObj$$443.registerD;
  v7287.registerD = v9493 & 127;
  return
}
function v519(parentObj$$442) {
  var v7288 = parentObj$$442;
  var v9494 = parentObj$$442.registerC;
  v7288.registerC = v9494 & 127;
  return
}
function v518(parentObj$$441) {
  var v7289 = parentObj$$441;
  var v9495 = parentObj$$441.registerB;
  v7289.registerB = v9495 & 127;
  return
}
function v517(parentObj$$440) {
  var v7290 = parentObj$$440;
  var v9496 = parentObj$$440.registerA;
  v7290.registerA = v9496 & 191;
  return
}
function v516(parentObj$$439) {
  var v3645 = parentObj$$439.memoryWriter;
  var v3646 = parentObj$$439.registersHL;
  var v3647 = parentObj$$439.registersHL;
  var v9497 = parentObj$$439.memoryReader;
  var v9498 = parentObj$$439.registersHL;
  var v9499 = parentObj$$439.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12020 = [[parentObj$$439, v9499], v9497, v9497[v9498]]
  }
  var v7291 = JAMScript.call(v12020[2], v12020[1], v12020[0]);
  var v3648 = v7291 & 191;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12021 = [[parentObj$$439, v3647, v3648], v3645, v3645[v3646]]
  }
  JAMScript.call(v12021[2], v12021[1], v12021[0]);
  return
}
function v515(parentObj$$438) {
  var v7292 = parentObj$$438;
  var v9500 = parentObj$$438.registersHL;
  v7292.registersHL = v9500 & 65471;
  return
}
function v514(parentObj$$437) {
  var v7293 = parentObj$$437;
  var v9501 = parentObj$$437.registersHL;
  v7293.registersHL = v9501 & 49151;
  return
}
function v513(parentObj$$436) {
  var v7294 = parentObj$$436;
  var v9502 = parentObj$$436.registerE;
  v7294.registerE = v9502 & 191;
  return
}
function v512(parentObj$$435) {
  var v7295 = parentObj$$435;
  var v9503 = parentObj$$435.registerD;
  v7295.registerD = v9503 & 191;
  return
}
function v511(parentObj$$434) {
  var v7296 = parentObj$$434;
  var v9504 = parentObj$$434.registerC;
  v7296.registerC = v9504 & 191;
  return
}
function v510(parentObj$$433) {
  var v7297 = parentObj$$433;
  var v9505 = parentObj$$433.registerB;
  v7297.registerB = v9505 & 191;
  return
}
function v509(parentObj$$432) {
  var v7298 = parentObj$$432;
  var v9506 = parentObj$$432.registerA;
  v7298.registerA = v9506 & 223;
  return
}
function v508(parentObj$$431) {
  var v3649 = parentObj$$431.memoryWriter;
  var v3650 = parentObj$$431.registersHL;
  var v3651 = parentObj$$431.registersHL;
  var v9507 = parentObj$$431.memoryReader;
  var v9508 = parentObj$$431.registersHL;
  var v9509 = parentObj$$431.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12022 = [[parentObj$$431, v9509], v9507, v9507[v9508]]
  }
  var v7299 = JAMScript.call(v12022[2], v12022[1], v12022[0]);
  var v3652 = v7299 & 223;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12023 = [[parentObj$$431, v3651, v3652], v3649, v3649[v3650]]
  }
  JAMScript.call(v12023[2], v12023[1], v12023[0]);
  return
}
function v507(parentObj$$430) {
  var v7300 = parentObj$$430;
  var v9510 = parentObj$$430.registersHL;
  v7300.registersHL = v9510 & 65503;
  return
}
function v506(parentObj$$429) {
  var v7301 = parentObj$$429;
  var v9511 = parentObj$$429.registersHL;
  v7301.registersHL = v9511 & 57343;
  return
}
function v505(parentObj$$428) {
  var v7302 = parentObj$$428;
  var v9512 = parentObj$$428.registerE;
  v7302.registerE = v9512 & 223;
  return
}
function v504(parentObj$$427) {
  var v7303 = parentObj$$427;
  var v9513 = parentObj$$427.registerD;
  v7303.registerD = v9513 & 223;
  return
}
function v503(parentObj$$426) {
  var v7304 = parentObj$$426;
  var v9514 = parentObj$$426.registerC;
  v7304.registerC = v9514 & 223;
  return
}
function v502(parentObj$$425) {
  var v7305 = parentObj$$425;
  var v9515 = parentObj$$425.registerB;
  v7305.registerB = v9515 & 223;
  return
}
function v501(parentObj$$424) {
  var v7306 = parentObj$$424;
  var v9516 = parentObj$$424.registerA;
  v7306.registerA = v9516 & 239;
  return
}
function v500(parentObj$$423) {
  var v3653 = parentObj$$423.memoryWriter;
  var v3654 = parentObj$$423.registersHL;
  var v3655 = parentObj$$423.registersHL;
  var v9517 = parentObj$$423.memoryReader;
  var v9518 = parentObj$$423.registersHL;
  var v9519 = parentObj$$423.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12024 = [[parentObj$$423, v9519], v9517, v9517[v9518]]
  }
  var v7307 = JAMScript.call(v12024[2], v12024[1], v12024[0]);
  var v3656 = v7307 & 239;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12025 = [[parentObj$$423, v3655, v3656], v3653, v3653[v3654]]
  }
  JAMScript.call(v12025[2], v12025[1], v12025[0]);
  return
}
function v499(parentObj$$422) {
  var v7308 = parentObj$$422;
  var v9520 = parentObj$$422.registersHL;
  v7308.registersHL = v9520 & 65519;
  return
}
function v498(parentObj$$421) {
  var v7309 = parentObj$$421;
  var v9521 = parentObj$$421.registersHL;
  v7309.registersHL = v9521 & 61439;
  return
}
function v497(parentObj$$420) {
  var v7310 = parentObj$$420;
  var v9522 = parentObj$$420.registerE;
  v7310.registerE = v9522 & 239;
  return
}
function v496(parentObj$$419) {
  var v7311 = parentObj$$419;
  var v9523 = parentObj$$419.registerD;
  v7311.registerD = v9523 & 239;
  return
}
function v495(parentObj$$418) {
  var v7312 = parentObj$$418;
  var v9524 = parentObj$$418.registerC;
  v7312.registerC = v9524 & 239;
  return
}
function v494(parentObj$$417) {
  var v7313 = parentObj$$417;
  var v9525 = parentObj$$417.registerB;
  v7313.registerB = v9525 & 239;
  return
}
function v493(parentObj$$416) {
  var v7314 = parentObj$$416;
  var v9526 = parentObj$$416.registerA;
  v7314.registerA = v9526 & 247;
  return
}
function v492(parentObj$$415) {
  var v3657 = parentObj$$415.memoryWriter;
  var v3658 = parentObj$$415.registersHL;
  var v3659 = parentObj$$415.registersHL;
  var v9527 = parentObj$$415.memoryReader;
  var v9528 = parentObj$$415.registersHL;
  var v9529 = parentObj$$415.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12026 = [[parentObj$$415, v9529], v9527, v9527[v9528]]
  }
  var v7315 = JAMScript.call(v12026[2], v12026[1], v12026[0]);
  var v3660 = v7315 & 247;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12027 = [[parentObj$$415, v3659, v3660], v3657, v3657[v3658]]
  }
  JAMScript.call(v12027[2], v12027[1], v12027[0]);
  return
}
function v491(parentObj$$414) {
  var v7316 = parentObj$$414;
  var v9530 = parentObj$$414.registersHL;
  v7316.registersHL = v9530 & 65527;
  return
}
function v490(parentObj$$413) {
  var v7317 = parentObj$$413;
  var v9531 = parentObj$$413.registersHL;
  v7317.registersHL = v9531 & 63487;
  return
}
function v489(parentObj$$412) {
  var v7318 = parentObj$$412;
  var v9532 = parentObj$$412.registerE;
  v7318.registerE = v9532 & 247;
  return
}
function v488(parentObj$$411) {
  var v7319 = parentObj$$411;
  var v9533 = parentObj$$411.registerD;
  v7319.registerD = v9533 & 247;
  return
}
function v487(parentObj$$410) {
  var v7320 = parentObj$$410;
  var v9534 = parentObj$$410.registerC;
  v7320.registerC = v9534 & 247;
  return
}
function v486(parentObj$$409) {
  var v7321 = parentObj$$409;
  var v9535 = parentObj$$409.registerB;
  v7321.registerB = v9535 & 247;
  return
}
function v485(parentObj$$408) {
  var v7322 = parentObj$$408;
  var v9536 = parentObj$$408.registerA;
  v7322.registerA = v9536 & 251;
  return
}
function v484(parentObj$$407) {
  var v3661 = parentObj$$407.memoryWriter;
  var v3662 = parentObj$$407.registersHL;
  var v3663 = parentObj$$407.registersHL;
  var v9537 = parentObj$$407.memoryReader;
  var v9538 = parentObj$$407.registersHL;
  var v9539 = parentObj$$407.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12028 = [[parentObj$$407, v9539], v9537, v9537[v9538]]
  }
  var v7323 = JAMScript.call(v12028[2], v12028[1], v12028[0]);
  var v3664 = v7323 & 251;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12029 = [[parentObj$$407, v3663, v3664], v3661, v3661[v3662]]
  }
  JAMScript.call(v12029[2], v12029[1], v12029[0]);
  return
}
function v483(parentObj$$406) {
  var v7324 = parentObj$$406;
  var v9540 = parentObj$$406.registersHL;
  v7324.registersHL = v9540 & 65531;
  return
}
function v482(parentObj$$405) {
  var v7325 = parentObj$$405;
  var v9541 = parentObj$$405.registersHL;
  v7325.registersHL = v9541 & 64511;
  return
}
function v481(parentObj$$404) {
  var v7326 = parentObj$$404;
  var v9542 = parentObj$$404.registerE;
  v7326.registerE = v9542 & 251;
  return
}
function v480(parentObj$$403) {
  var v7327 = parentObj$$403;
  var v9543 = parentObj$$403.registerD;
  v7327.registerD = v9543 & 251;
  return
}
function v479(parentObj$$402) {
  var v7328 = parentObj$$402;
  var v9544 = parentObj$$402.registerC;
  v7328.registerC = v9544 & 251;
  return
}
function v478(parentObj$$401) {
  var v7329 = parentObj$$401;
  var v9545 = parentObj$$401.registerB;
  v7329.registerB = v9545 & 251;
  return
}
function v477(parentObj$$400) {
  var v7330 = parentObj$$400;
  var v9546 = parentObj$$400.registerA;
  v7330.registerA = v9546 & 253;
  return
}
function v476(parentObj$$399) {
  var v3665 = parentObj$$399.memoryWriter;
  var v3666 = parentObj$$399.registersHL;
  var v3667 = parentObj$$399.registersHL;
  var v9547 = parentObj$$399.memoryReader;
  var v9548 = parentObj$$399.registersHL;
  var v9549 = parentObj$$399.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12030 = [[parentObj$$399, v9549], v9547, v9547[v9548]]
  }
  var v7331 = JAMScript.call(v12030[2], v12030[1], v12030[0]);
  var v3668 = v7331 & 253;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12031 = [[parentObj$$399, v3667, v3668], v3665, v3665[v3666]]
  }
  JAMScript.call(v12031[2], v12031[1], v12031[0]);
  return
}
function v475(parentObj$$398) {
  var v7332 = parentObj$$398;
  var v9550 = parentObj$$398.registersHL;
  v7332.registersHL = v9550 & 65533;
  return
}
function v474(parentObj$$397) {
  var v7333 = parentObj$$397;
  var v9551 = parentObj$$397.registersHL;
  v7333.registersHL = v9551 & 65023;
  return
}
function v473(parentObj$$396) {
  var v7334 = parentObj$$396;
  var v9552 = parentObj$$396.registerE;
  v7334.registerE = v9552 & 253;
  return
}
function v472(parentObj$$395) {
  var v7335 = parentObj$$395;
  var v9553 = parentObj$$395.registerD;
  v7335.registerD = v9553 & 253;
  return
}
function v471(parentObj$$394) {
  var v7336 = parentObj$$394;
  var v9554 = parentObj$$394.registerC;
  v7336.registerC = v9554 & 253;
  return
}
function v470(parentObj$$393) {
  var v7337 = parentObj$$393;
  var v9555 = parentObj$$393.registerB;
  v7337.registerB = v9555 & 253;
  return
}
function v469(parentObj$$392) {
  var v7338 = parentObj$$392;
  var v9556 = parentObj$$392.registerA;
  v7338.registerA = v9556 & 254;
  return
}
function v468(parentObj$$391) {
  var v3669 = parentObj$$391.memoryWriter;
  var v3670 = parentObj$$391.registersHL;
  var v3671 = parentObj$$391.registersHL;
  var v9557 = parentObj$$391.memoryReader;
  var v9558 = parentObj$$391.registersHL;
  var v9559 = parentObj$$391.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12032 = [[parentObj$$391, v9559], v9557, v9557[v9558]]
  }
  var v7339 = JAMScript.call(v12032[2], v12032[1], v12032[0]);
  var v3672 = v7339 & 254;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12033 = [[parentObj$$391, v3671, v3672], v3669, v3669[v3670]]
  }
  JAMScript.call(v12033[2], v12033[1], v12033[0]);
  return
}
function v467(parentObj$$390) {
  var v7340 = parentObj$$390;
  var v9560 = parentObj$$390.registersHL;
  v7340.registersHL = v9560 & 65534;
  return
}
function v466(parentObj$$389) {
  var v7341 = parentObj$$389;
  var v9561 = parentObj$$389.registersHL;
  v7341.registersHL = v9561 & 65279;
  return
}
function v465(parentObj$$388) {
  var v7342 = parentObj$$388;
  var v9562 = parentObj$$388.registerE;
  v7342.registerE = v9562 & 254;
  return
}
function v464(parentObj$$387) {
  var v7343 = parentObj$$387;
  var v9563 = parentObj$$387.registerD;
  v7343.registerD = v9563 & 254;
  return
}
function v463(parentObj$$386) {
  var v7344 = parentObj$$386;
  var v9564 = parentObj$$386.registerC;
  v7344.registerC = v9564 & 254;
  return
}
function v462(parentObj$$385) {
  var v7345 = parentObj$$385;
  var v9565 = parentObj$$385.registerB;
  v7345.registerB = v9565 & 254;
  return
}
function v461(parentObj$$384) {
  parentObj$$384.FHalfCarry = true;
  parentObj$$384.FSubtract = false;
  var v3673 = parentObj$$384;
  var v9566 = parentObj$$384.registerA;
  var v7346 = v9566 & 128;
  v3673.FZero = v7346 == 0;
  return
}
function v460(parentObj$$383) {
  parentObj$$383.FHalfCarry = true;
  parentObj$$383.FSubtract = false;
  var v3674 = parentObj$$383;
  var v10795 = parentObj$$383.memoryReader;
  var v10796 = parentObj$$383.registersHL;
  var v10797 = parentObj$$383.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12034 = [[parentObj$$383, v10797], v10795, v10795[v10796]]
  }
  var v9567 = JAMScript.call(v12034[2], v12034[1], v12034[0]);
  var v7347 = v9567 & 128;
  v3674.FZero = v7347 == 0;
  return
}
function v459(parentObj$$382) {
  parentObj$$382.FHalfCarry = true;
  parentObj$$382.FSubtract = false;
  var v3675 = parentObj$$382;
  var v9568 = parentObj$$382.registersHL;
  var v7348 = v9568 & 128;
  v3675.FZero = v7348 == 0;
  return
}
function v458(parentObj$$381) {
  parentObj$$381.FHalfCarry = true;
  parentObj$$381.FSubtract = false;
  var v3676 = parentObj$$381;
  var v9569 = parentObj$$381.registersHL;
  var v7349 = v9569 & 32768;
  v3676.FZero = v7349 == 0;
  return
}
function v457(parentObj$$380) {
  parentObj$$380.FHalfCarry = true;
  parentObj$$380.FSubtract = false;
  var v3677 = parentObj$$380;
  var v9570 = parentObj$$380.registerE;
  var v7350 = v9570 & 128;
  v3677.FZero = v7350 == 0;
  return
}
function v456(parentObj$$379) {
  parentObj$$379.FHalfCarry = true;
  parentObj$$379.FSubtract = false;
  var v3678 = parentObj$$379;
  var v9571 = parentObj$$379.registerD;
  var v7351 = v9571 & 128;
  v3678.FZero = v7351 == 0;
  return
}
function v455(parentObj$$378) {
  parentObj$$378.FHalfCarry = true;
  parentObj$$378.FSubtract = false;
  var v3679 = parentObj$$378;
  var v9572 = parentObj$$378.registerC;
  var v7352 = v9572 & 128;
  v3679.FZero = v7352 == 0;
  return
}
function v454(parentObj$$377) {
  parentObj$$377.FHalfCarry = true;
  parentObj$$377.FSubtract = false;
  var v3680 = parentObj$$377;
  var v9573 = parentObj$$377.registerB;
  var v7353 = v9573 & 128;
  v3680.FZero = v7353 == 0;
  return
}
function v453(parentObj$$376) {
  parentObj$$376.FHalfCarry = true;
  parentObj$$376.FSubtract = false;
  var v3681 = parentObj$$376;
  var v9574 = parentObj$$376.registerA;
  var v7354 = v9574 & 64;
  v3681.FZero = v7354 == 0;
  return
}
function v452(parentObj$$375) {
  parentObj$$375.FHalfCarry = true;
  parentObj$$375.FSubtract = false;
  var v3682 = parentObj$$375;
  var v10798 = parentObj$$375.memoryReader;
  var v10799 = parentObj$$375.registersHL;
  var v10800 = parentObj$$375.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12035 = [[parentObj$$375, v10800], v10798, v10798[v10799]]
  }
  var v9575 = JAMScript.call(v12035[2], v12035[1], v12035[0]);
  var v7355 = v9575 & 64;
  v3682.FZero = v7355 == 0;
  return
}
function v451(parentObj$$374) {
  parentObj$$374.FHalfCarry = true;
  parentObj$$374.FSubtract = false;
  var v3683 = parentObj$$374;
  var v9576 = parentObj$$374.registersHL;
  var v7356 = v9576 & 64;
  v3683.FZero = v7356 == 0;
  return
}
function v450(parentObj$$373) {
  parentObj$$373.FHalfCarry = true;
  parentObj$$373.FSubtract = false;
  var v3684 = parentObj$$373;
  var v9577 = parentObj$$373.registersHL;
  var v7357 = v9577 & 16384;
  v3684.FZero = v7357 == 0;
  return
}
function v449(parentObj$$372) {
  parentObj$$372.FHalfCarry = true;
  parentObj$$372.FSubtract = false;
  var v3685 = parentObj$$372;
  var v9578 = parentObj$$372.registerE;
  var v7358 = v9578 & 64;
  v3685.FZero = v7358 == 0;
  return
}
function v448(parentObj$$371) {
  parentObj$$371.FHalfCarry = true;
  parentObj$$371.FSubtract = false;
  var v3686 = parentObj$$371;
  var v9579 = parentObj$$371.registerD;
  var v7359 = v9579 & 64;
  v3686.FZero = v7359 == 0;
  return
}
function v447(parentObj$$370) {
  parentObj$$370.FHalfCarry = true;
  parentObj$$370.FSubtract = false;
  var v3687 = parentObj$$370;
  var v9580 = parentObj$$370.registerC;
  var v7360 = v9580 & 64;
  v3687.FZero = v7360 == 0;
  return
}
function v446(parentObj$$369) {
  parentObj$$369.FHalfCarry = true;
  parentObj$$369.FSubtract = false;
  var v3688 = parentObj$$369;
  var v9581 = parentObj$$369.registerB;
  var v7361 = v9581 & 64;
  v3688.FZero = v7361 == 0;
  return
}
function v445(parentObj$$368) {
  parentObj$$368.FHalfCarry = true;
  parentObj$$368.FSubtract = false;
  var v3689 = parentObj$$368;
  var v9582 = parentObj$$368.registerA;
  var v7362 = v9582 & 32;
  v3689.FZero = v7362 == 0;
  return
}
function v444(parentObj$$367) {
  parentObj$$367.FHalfCarry = true;
  parentObj$$367.FSubtract = false;
  var v3690 = parentObj$$367;
  var v10801 = parentObj$$367.memoryReader;
  var v10802 = parentObj$$367.registersHL;
  var v10803 = parentObj$$367.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12036 = [[parentObj$$367, v10803], v10801, v10801[v10802]]
  }
  var v9583 = JAMScript.call(v12036[2], v12036[1], v12036[0]);
  var v7363 = v9583 & 32;
  v3690.FZero = v7363 == 0;
  return
}
function v443(parentObj$$366) {
  parentObj$$366.FHalfCarry = true;
  parentObj$$366.FSubtract = false;
  var v3691 = parentObj$$366;
  var v9584 = parentObj$$366.registersHL;
  var v7364 = v9584 & 32;
  v3691.FZero = v7364 == 0;
  return
}
function v442(parentObj$$365) {
  parentObj$$365.FHalfCarry = true;
  parentObj$$365.FSubtract = false;
  var v3692 = parentObj$$365;
  var v9585 = parentObj$$365.registersHL;
  var v7365 = v9585 & 8192;
  v3692.FZero = v7365 == 0;
  return
}
function v441(parentObj$$364) {
  parentObj$$364.FHalfCarry = true;
  parentObj$$364.FSubtract = false;
  var v3693 = parentObj$$364;
  var v9586 = parentObj$$364.registerE;
  var v7366 = v9586 & 32;
  v3693.FZero = v7366 == 0;
  return
}
function v440(parentObj$$363) {
  parentObj$$363.FHalfCarry = true;
  parentObj$$363.FSubtract = false;
  var v3694 = parentObj$$363;
  var v9587 = parentObj$$363.registerD;
  var v7367 = v9587 & 32;
  v3694.FZero = v7367 == 0;
  return
}
function v439(parentObj$$362) {
  parentObj$$362.FHalfCarry = true;
  parentObj$$362.FSubtract = false;
  var v3695 = parentObj$$362;
  var v9588 = parentObj$$362.registerC;
  var v7368 = v9588 & 32;
  v3695.FZero = v7368 == 0;
  return
}
function v438(parentObj$$361) {
  parentObj$$361.FHalfCarry = true;
  parentObj$$361.FSubtract = false;
  var v3696 = parentObj$$361;
  var v9589 = parentObj$$361.registerB;
  var v7369 = v9589 & 32;
  v3696.FZero = v7369 == 0;
  return
}
function v437(parentObj$$360) {
  parentObj$$360.FHalfCarry = true;
  parentObj$$360.FSubtract = false;
  var v3697 = parentObj$$360;
  var v9590 = parentObj$$360.registerA;
  var v7370 = v9590 & 16;
  v3697.FZero = v7370 == 0;
  return
}
function v436(parentObj$$359) {
  parentObj$$359.FHalfCarry = true;
  parentObj$$359.FSubtract = false;
  var v3698 = parentObj$$359;
  var v10804 = parentObj$$359.memoryReader;
  var v10805 = parentObj$$359.registersHL;
  var v10806 = parentObj$$359.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12037 = [[parentObj$$359, v10806], v10804, v10804[v10805]]
  }
  var v9591 = JAMScript.call(v12037[2], v12037[1], v12037[0]);
  var v7371 = v9591 & 16;
  v3698.FZero = v7371 == 0;
  return
}
function v435(parentObj$$358) {
  parentObj$$358.FHalfCarry = true;
  parentObj$$358.FSubtract = false;
  var v3699 = parentObj$$358;
  var v9592 = parentObj$$358.registersHL;
  var v7372 = v9592 & 16;
  v3699.FZero = v7372 == 0;
  return
}
function v434(parentObj$$357) {
  parentObj$$357.FHalfCarry = true;
  parentObj$$357.FSubtract = false;
  var v3700 = parentObj$$357;
  var v9593 = parentObj$$357.registersHL;
  var v7373 = v9593 & 4096;
  v3700.FZero = v7373 == 0;
  return
}
function v433(parentObj$$356) {
  parentObj$$356.FHalfCarry = true;
  parentObj$$356.FSubtract = false;
  var v3701 = parentObj$$356;
  var v9594 = parentObj$$356.registerE;
  var v7374 = v9594 & 16;
  v3701.FZero = v7374 == 0;
  return
}
function v432(parentObj$$355) {
  parentObj$$355.FHalfCarry = true;
  parentObj$$355.FSubtract = false;
  var v3702 = parentObj$$355;
  var v9595 = parentObj$$355.registerD;
  var v7375 = v9595 & 16;
  v3702.FZero = v7375 == 0;
  return
}
function v431(parentObj$$354) {
  parentObj$$354.FHalfCarry = true;
  parentObj$$354.FSubtract = false;
  var v3703 = parentObj$$354;
  var v9596 = parentObj$$354.registerC;
  var v7376 = v9596 & 16;
  v3703.FZero = v7376 == 0;
  return
}
function v430(parentObj$$353) {
  parentObj$$353.FHalfCarry = true;
  parentObj$$353.FSubtract = false;
  var v3704 = parentObj$$353;
  var v9597 = parentObj$$353.registerB;
  var v7377 = v9597 & 16;
  v3704.FZero = v7377 == 0;
  return
}
function v429(parentObj$$352) {
  parentObj$$352.FHalfCarry = true;
  parentObj$$352.FSubtract = false;
  var v3705 = parentObj$$352;
  var v9598 = parentObj$$352.registerA;
  var v7378 = v9598 & 8;
  v3705.FZero = v7378 == 0;
  return
}
function v428(parentObj$$351) {
  parentObj$$351.FHalfCarry = true;
  parentObj$$351.FSubtract = false;
  var v3706 = parentObj$$351;
  var v10807 = parentObj$$351.memoryReader;
  var v10808 = parentObj$$351.registersHL;
  var v10809 = parentObj$$351.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12038 = [[parentObj$$351, v10809], v10807, v10807[v10808]]
  }
  var v9599 = JAMScript.call(v12038[2], v12038[1], v12038[0]);
  var v7379 = v9599 & 8;
  v3706.FZero = v7379 == 0;
  return
}
function v427(parentObj$$350) {
  parentObj$$350.FHalfCarry = true;
  parentObj$$350.FSubtract = false;
  var v3707 = parentObj$$350;
  var v9600 = parentObj$$350.registersHL;
  var v7380 = v9600 & 8;
  v3707.FZero = v7380 == 0;
  return
}
function v426(parentObj$$349) {
  parentObj$$349.FHalfCarry = true;
  parentObj$$349.FSubtract = false;
  var v3708 = parentObj$$349;
  var v9601 = parentObj$$349.registersHL;
  var v7381 = v9601 & 2048;
  v3708.FZero = v7381 == 0;
  return
}
function v425(parentObj$$348) {
  parentObj$$348.FHalfCarry = true;
  parentObj$$348.FSubtract = false;
  var v3709 = parentObj$$348;
  var v9602 = parentObj$$348.registerE;
  var v7382 = v9602 & 8;
  v3709.FZero = v7382 == 0;
  return
}
function v424(parentObj$$347) {
  parentObj$$347.FHalfCarry = true;
  parentObj$$347.FSubtract = false;
  var v3710 = parentObj$$347;
  var v9603 = parentObj$$347.registerD;
  var v7383 = v9603 & 8;
  v3710.FZero = v7383 == 0;
  return
}
function v423(parentObj$$346) {
  parentObj$$346.FHalfCarry = true;
  parentObj$$346.FSubtract = false;
  var v3711 = parentObj$$346;
  var v9604 = parentObj$$346.registerC;
  var v7384 = v9604 & 8;
  v3711.FZero = v7384 == 0;
  return
}
function v422(parentObj$$345) {
  parentObj$$345.FHalfCarry = true;
  parentObj$$345.FSubtract = false;
  var v3712 = parentObj$$345;
  var v9605 = parentObj$$345.registerB;
  var v7385 = v9605 & 8;
  v3712.FZero = v7385 == 0;
  return
}
function v421(parentObj$$344) {
  parentObj$$344.FHalfCarry = true;
  parentObj$$344.FSubtract = false;
  var v3713 = parentObj$$344;
  var v9606 = parentObj$$344.registerA;
  var v7386 = v9606 & 4;
  v3713.FZero = v7386 == 0;
  return
}
function v420(parentObj$$343) {
  parentObj$$343.FHalfCarry = true;
  parentObj$$343.FSubtract = false;
  var v3714 = parentObj$$343;
  var v10810 = parentObj$$343.memoryReader;
  var v10811 = parentObj$$343.registersHL;
  var v10812 = parentObj$$343.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12039 = [[parentObj$$343, v10812], v10810, v10810[v10811]]
  }
  var v9607 = JAMScript.call(v12039[2], v12039[1], v12039[0]);
  var v7387 = v9607 & 4;
  v3714.FZero = v7387 == 0;
  return
}
function v419(parentObj$$342) {
  parentObj$$342.FHalfCarry = true;
  parentObj$$342.FSubtract = false;
  var v3715 = parentObj$$342;
  var v9608 = parentObj$$342.registersHL;
  var v7388 = v9608 & 4;
  v3715.FZero = v7388 == 0;
  return
}
function v418(parentObj$$341) {
  parentObj$$341.FHalfCarry = true;
  parentObj$$341.FSubtract = false;
  var v3716 = parentObj$$341;
  var v9609 = parentObj$$341.registersHL;
  var v7389 = v9609 & 1024;
  v3716.FZero = v7389 == 0;
  return
}
function v417(parentObj$$340) {
  parentObj$$340.FHalfCarry = true;
  parentObj$$340.FSubtract = false;
  var v3717 = parentObj$$340;
  var v9610 = parentObj$$340.registerE;
  var v7390 = v9610 & 4;
  v3717.FZero = v7390 == 0;
  return
}
function v416(parentObj$$339) {
  parentObj$$339.FHalfCarry = true;
  parentObj$$339.FSubtract = false;
  var v3718 = parentObj$$339;
  var v9611 = parentObj$$339.registerD;
  var v7391 = v9611 & 4;
  v3718.FZero = v7391 == 0;
  return
}
function v415(parentObj$$338) {
  parentObj$$338.FHalfCarry = true;
  parentObj$$338.FSubtract = false;
  var v3719 = parentObj$$338;
  var v9612 = parentObj$$338.registerC;
  var v7392 = v9612 & 4;
  v3719.FZero = v7392 == 0;
  return
}
function v414(parentObj$$337) {
  parentObj$$337.FHalfCarry = true;
  parentObj$$337.FSubtract = false;
  var v3720 = parentObj$$337;
  var v9613 = parentObj$$337.registerB;
  var v7393 = v9613 & 4;
  v3720.FZero = v7393 == 0;
  return
}
function v413(parentObj$$336) {
  parentObj$$336.FHalfCarry = true;
  parentObj$$336.FSubtract = false;
  var v3721 = parentObj$$336;
  var v9614 = parentObj$$336.registerA;
  var v7394 = v9614 & 2;
  v3721.FZero = v7394 == 0;
  return
}
function v412(parentObj$$335) {
  parentObj$$335.FHalfCarry = true;
  parentObj$$335.FSubtract = false;
  var v3722 = parentObj$$335;
  var v10813 = parentObj$$335.memoryReader;
  var v10814 = parentObj$$335.registersHL;
  var v10815 = parentObj$$335.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12040 = [[parentObj$$335, v10815], v10813, v10813[v10814]]
  }
  var v9615 = JAMScript.call(v12040[2], v12040[1], v12040[0]);
  var v7395 = v9615 & 2;
  v3722.FZero = v7395 == 0;
  return
}
function v411(parentObj$$334) {
  parentObj$$334.FHalfCarry = true;
  parentObj$$334.FSubtract = false;
  var v3723 = parentObj$$334;
  var v9616 = parentObj$$334.registersHL;
  var v7396 = v9616 & 2;
  v3723.FZero = v7396 == 0;
  return
}
function v410(parentObj$$333) {
  parentObj$$333.FHalfCarry = true;
  parentObj$$333.FSubtract = false;
  var v3724 = parentObj$$333;
  var v9617 = parentObj$$333.registersHL;
  var v7397 = v9617 & 512;
  v3724.FZero = v7397 == 0;
  return
}
function v409(parentObj$$332) {
  parentObj$$332.FHalfCarry = true;
  parentObj$$332.FSubtract = false;
  var v3725 = parentObj$$332;
  var v9618 = parentObj$$332.registerE;
  var v7398 = v9618 & 2;
  v3725.FZero = v7398 == 0;
  return
}
function v408(parentObj$$331) {
  parentObj$$331.FHalfCarry = true;
  parentObj$$331.FSubtract = false;
  var v3726 = parentObj$$331;
  var v9619 = parentObj$$331.registerD;
  var v7399 = v9619 & 2;
  v3726.FZero = v7399 == 0;
  return
}
function v407(parentObj$$330) {
  parentObj$$330.FHalfCarry = true;
  parentObj$$330.FSubtract = false;
  var v3727 = parentObj$$330;
  var v9620 = parentObj$$330.registerC;
  var v7400 = v9620 & 2;
  v3727.FZero = v7400 == 0;
  return
}
function v406(parentObj$$329) {
  parentObj$$329.FHalfCarry = true;
  parentObj$$329.FSubtract = false;
  var v3728 = parentObj$$329;
  var v9621 = parentObj$$329.registerB;
  var v7401 = v9621 & 2;
  v3728.FZero = v7401 == 0;
  return
}
function v405(parentObj$$328) {
  parentObj$$328.FHalfCarry = true;
  parentObj$$328.FSubtract = false;
  var v3729 = parentObj$$328;
  var v9622 = parentObj$$328.registerA;
  var v7402 = v9622 & 1;
  v3729.FZero = v7402 == 0;
  return
}
function v404(parentObj$$327) {
  parentObj$$327.FHalfCarry = true;
  parentObj$$327.FSubtract = false;
  var v3730 = parentObj$$327;
  var v10816 = parentObj$$327.memoryReader;
  var v10817 = parentObj$$327.registersHL;
  var v10818 = parentObj$$327.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12041 = [[parentObj$$327, v10818], v10816, v10816[v10817]]
  }
  var v9623 = JAMScript.call(v12041[2], v12041[1], v12041[0]);
  var v7403 = v9623 & 1;
  v3730.FZero = v7403 == 0;
  return
}
function v403(parentObj$$326) {
  parentObj$$326.FHalfCarry = true;
  parentObj$$326.FSubtract = false;
  var v3731 = parentObj$$326;
  var v9624 = parentObj$$326.registersHL;
  var v7404 = v9624 & 1;
  v3731.FZero = v7404 == 0;
  return
}
function v402(parentObj$$325) {
  parentObj$$325.FHalfCarry = true;
  parentObj$$325.FSubtract = false;
  var v3732 = parentObj$$325;
  var v9625 = parentObj$$325.registersHL;
  var v7405 = v9625 & 256;
  v3732.FZero = v7405 == 0;
  return
}
function v401(parentObj$$324) {
  parentObj$$324.FHalfCarry = true;
  parentObj$$324.FSubtract = false;
  var v3733 = parentObj$$324;
  var v9626 = parentObj$$324.registerE;
  var v7406 = v9626 & 1;
  v3733.FZero = v7406 == 0;
  return
}
function v400(parentObj$$323) {
  parentObj$$323.FHalfCarry = true;
  parentObj$$323.FSubtract = false;
  var v3734 = parentObj$$323;
  var v9627 = parentObj$$323.registerD;
  var v7407 = v9627 & 1;
  v3734.FZero = v7407 == 0;
  return
}
function v399(parentObj$$322) {
  parentObj$$322.FHalfCarry = true;
  parentObj$$322.FSubtract = false;
  var v3735 = parentObj$$322;
  var v9628 = parentObj$$322.registerC;
  var v7408 = v9628 & 1;
  v3735.FZero = v7408 == 0;
  return
}
function v398(parentObj$$321) {
  parentObj$$321.FHalfCarry = true;
  parentObj$$321.FSubtract = false;
  var v3736 = parentObj$$321;
  var v9629 = parentObj$$321.registerB;
  var v7409 = v9629 & 1;
  v3736.FZero = v7409 == 0;
  return
}
function v397(parentObj$$320) {
  var v3737 = parentObj$$320;
  var v9630 = parentObj$$320.registerA;
  var v7410 = v9630 & 1;
  v3737.FCarry = v7410 == 1;
  var v7411 = parentObj$$320;
  var v9631 = parentObj$$320.registerA;
  v7411.registerA = v9631 >> 1;
  var v3738 = parentObj$$320;
  v3738.FHalfCarry = parentObj$$320.FSubtract = false;
  var v3739 = parentObj$$320;
  var v7412 = parentObj$$320.registerA;
  v3739.FZero = v7412 == 0;
  return
}
function v396(parentObj$$319) {
  var v3740 = parentObj$$319.memoryReader;
  var v3741 = parentObj$$319.registersHL;
  var v3742 = parentObj$$319.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12042 = [[parentObj$$319, v3742], v3740, v3740[v3741]]
  }
  var temp_var$$19 = JAMScript.call(v12042[2], v12042[1], v12042[0]);
  var v3743 = temp_var$$19 & 1;
  parentObj$$319.FCarry = v3743 == 1;
  var v3744 = parentObj$$319.memoryWriter;
  var v3745 = parentObj$$319.registersHL;
  var v3746 = parentObj$$319.registersHL;
  var v3747 = temp_var$$19 >> 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12043 = [[parentObj$$319, v3746, v3747], v3744, v3744[v3745]]
  }
  JAMScript.call(v12043[2], v12043[1], v12043[0]);
  var v3748 = parentObj$$319;
  v3748.FHalfCarry = parentObj$$319.FSubtract = false;
  parentObj$$319.FZero = temp_var$$19 < 2;
  return
}
function v395(parentObj$$318) {
  var v3749 = parentObj$$318;
  var v9632 = parentObj$$318.registersHL;
  var v7413 = v9632 & 1;
  v3749.FCarry = v7413 == 1;
  var v3750 = parentObj$$318;
  var v9633 = parentObj$$318.registersHL;
  var v7414 = v9633 & 65280;
  var v10819 = parentObj$$318.registersHL;
  var v9634 = v10819 & 255;
  var v7415 = v9634 >> 1;
  v3750.registersHL = v7414 | v7415;
  var v3751 = parentObj$$318;
  v3751.FHalfCarry = parentObj$$318.FSubtract = false;
  var v3752 = parentObj$$318;
  var v9635 = parentObj$$318.registersHL;
  var v7416 = v9635 & 255;
  v3752.FZero = v7416 == 0;
  return
}
function v394(parentObj$$317) {
  var v3753 = parentObj$$317;
  var v9636 = parentObj$$317.registersHL;
  var v7417 = v9636 & 256;
  v3753.FCarry = v7417 == 256;
  var v3754 = parentObj$$317;
  var v10820 = parentObj$$317.registersHL;
  var v9637 = v10820 >> 1;
  var v7418 = v9637 & 65280;
  var v9638 = parentObj$$317.registersHL;
  var v7419 = v9638 & 255;
  v3754.registersHL = v7418 | v7419;
  var v3755 = parentObj$$317;
  v3755.FHalfCarry = parentObj$$317.FSubtract = false;
  var v3756 = parentObj$$317;
  var v7420 = parentObj$$317.registersHL;
  v3756.FZero = v7420 < 256;
  return
}
function v393(parentObj$$316) {
  var v3757 = parentObj$$316;
  var v9639 = parentObj$$316.registerE;
  var v7421 = v9639 & 1;
  v3757.FCarry = v7421 == 1;
  var v7422 = parentObj$$316;
  var v9640 = parentObj$$316.registerE;
  v7422.registerE = v9640 >> 1;
  var v3758 = parentObj$$316;
  v3758.FHalfCarry = parentObj$$316.FSubtract = false;
  var v3759 = parentObj$$316;
  var v7423 = parentObj$$316.registerE;
  v3759.FZero = v7423 == 0;
  return
}
function v392(parentObj$$315) {
  var v3760 = parentObj$$315;
  var v9641 = parentObj$$315.registerD;
  var v7424 = v9641 & 1;
  v3760.FCarry = v7424 == 1;
  var v7425 = parentObj$$315;
  var v9642 = parentObj$$315.registerD;
  v7425.registerD = v9642 >> 1;
  var v3761 = parentObj$$315;
  v3761.FHalfCarry = parentObj$$315.FSubtract = false;
  var v3762 = parentObj$$315;
  var v7426 = parentObj$$315.registerD;
  v3762.FZero = v7426 == 0;
  return
}
function v391(parentObj$$314) {
  var v3763 = parentObj$$314;
  var v9643 = parentObj$$314.registerC;
  var v7427 = v9643 & 1;
  v3763.FCarry = v7427 == 1;
  var v7428 = parentObj$$314;
  var v9644 = parentObj$$314.registerC;
  v7428.registerC = v9644 >> 1;
  var v3764 = parentObj$$314;
  v3764.FHalfCarry = parentObj$$314.FSubtract = false;
  var v3765 = parentObj$$314;
  var v7429 = parentObj$$314.registerC;
  v3765.FZero = v7429 == 0;
  return
}
function v390(parentObj$$313) {
  var v3766 = parentObj$$313;
  var v9645 = parentObj$$313.registerB;
  var v7430 = v9645 & 1;
  v3766.FCarry = v7430 == 1;
  var v7431 = parentObj$$313;
  var v9646 = parentObj$$313.registerB;
  v7431.registerB = v9646 >> 1;
  var v3767 = parentObj$$313;
  v3767.FHalfCarry = parentObj$$313.FSubtract = false;
  var v3768 = parentObj$$313;
  var v7432 = parentObj$$313.registerB;
  v3768.FZero = v7432 == 0;
  return
}
function v389(parentObj$$312) {
  var v3769 = parentObj$$312;
  var v10821 = parentObj$$312.registerA;
  var v9647 = v10821 & 15;
  var v7433 = v9647 << 4;
  var v9648 = parentObj$$312.registerA;
  var v7434 = v9648 >> 4;
  v3769.registerA = v7433 | v7434;
  var v3770 = parentObj$$312;
  var v7435 = parentObj$$312.registerA;
  v3770.FZero = v7435 == 0;
  var v3771 = parentObj$$312;
  var v7436 = parentObj$$312;
  v3771.FCarry = v7436.FHalfCarry = parentObj$$312.FSubtract = false;
  return
}
function v388(parentObj$$311) {
  var v3772 = parentObj$$311.memoryReader;
  var v3773 = parentObj$$311.registersHL;
  var v3774 = parentObj$$311.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12044 = [[parentObj$$311, v3774], v3772, v3772[v3773]]
  }
  var temp_var$$18 = JAMScript.call(v12044[2], v12044[1], v12044[0]);
  var v7437 = temp_var$$18 & 15;
  var v3775 = v7437 << 4;
  var v3776 = temp_var$$18 >> 4;
  temp_var$$18 = v3775 | v3776;
  var v3777 = parentObj$$311.memoryWriter;
  var v3778 = parentObj$$311.registersHL;
  var v3779 = parentObj$$311.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12045 = [[parentObj$$311, v3779, temp_var$$18], v3777, v3777[v3778]]
  }
  JAMScript.call(v12045[2], v12045[1], v12045[0]);
  parentObj$$311.FZero = temp_var$$18 == 0;
  var v3780 = parentObj$$311;
  var v7438 = parentObj$$311;
  v3780.FCarry = v7438.FHalfCarry = parentObj$$311.FSubtract = false;
  return
}
function v387(parentObj$$310) {
  var v3781 = parentObj$$310;
  var v10822 = parentObj$$310.registersHL;
  var v9649 = v10822 & 65280;
  var v11314 = parentObj$$310.registersHL;
  var v10823 = v11314 & 15;
  var v9650 = v10823 << 4;
  var v7439 = v9649 | v9650;
  var v10824 = parentObj$$310.registersHL;
  var v9651 = v10824 & 240;
  var v7440 = v9651 >> 4;
  v3781.registersHL = v7439 | v7440;
  var v3782 = parentObj$$310;
  var v9652 = parentObj$$310.registersHL;
  var v7441 = v9652 & 255;
  v3782.FZero = v7441 == 0;
  var v3783 = parentObj$$310;
  var v7442 = parentObj$$310;
  v3783.FCarry = v7442.FHalfCarry = parentObj$$310.FSubtract = false;
  return
}
function v386(parentObj$$309) {
  var v3784 = parentObj$$309;
  var v11315 = parentObj$$309.registersHL;
  var v10825 = v11315 & 3840;
  var v9653 = v10825 << 4;
  var v11316 = parentObj$$309.registersHL;
  var v10826 = v11316 & 61440;
  var v9654 = v10826 >> 4;
  var v7443 = v9653 | v9654;
  var v9655 = parentObj$$309.registersHL;
  var v7444 = v9655 & 255;
  v3784.registersHL = v7443 | v7444;
  var v3785 = parentObj$$309;
  var v7445 = parentObj$$309.registersHL;
  v3785.FZero = v7445 < 256;
  var v3786 = parentObj$$309;
  var v7446 = parentObj$$309;
  v3786.FCarry = v7446.FHalfCarry = parentObj$$309.FSubtract = false;
  return
}
function v385(parentObj$$308) {
  var v3787 = parentObj$$308;
  var v10827 = parentObj$$308.registerE;
  var v9656 = v10827 & 15;
  var v7447 = v9656 << 4;
  var v9657 = parentObj$$308.registerE;
  var v7448 = v9657 >> 4;
  v3787.registerE = v7447 | v7448;
  var v3788 = parentObj$$308;
  var v7449 = parentObj$$308.registerE;
  v3788.FZero = v7449 == 0;
  var v3789 = parentObj$$308;
  var v7450 = parentObj$$308;
  v3789.FCarry = v7450.FHalfCarry = parentObj$$308.FSubtract = false;
  return
}
function v384(parentObj$$307) {
  var v3790 = parentObj$$307;
  var v10828 = parentObj$$307.registerD;
  var v9658 = v10828 & 15;
  var v7451 = v9658 << 4;
  var v9659 = parentObj$$307.registerD;
  var v7452 = v9659 >> 4;
  v3790.registerD = v7451 | v7452;
  var v3791 = parentObj$$307;
  var v7453 = parentObj$$307.registerD;
  v3791.FZero = v7453 == 0;
  var v3792 = parentObj$$307;
  var v7454 = parentObj$$307;
  v3792.FCarry = v7454.FHalfCarry = parentObj$$307.FSubtract = false;
  return
}
function v383(parentObj$$306) {
  var v3793 = parentObj$$306;
  var v10829 = parentObj$$306.registerC;
  var v9660 = v10829 & 15;
  var v7455 = v9660 << 4;
  var v9661 = parentObj$$306.registerC;
  var v7456 = v9661 >> 4;
  v3793.registerC = v7455 | v7456;
  var v3794 = parentObj$$306;
  var v7457 = parentObj$$306.registerC;
  v3794.FZero = v7457 == 0;
  var v3795 = parentObj$$306;
  var v7458 = parentObj$$306;
  v3795.FCarry = v7458.FHalfCarry = parentObj$$306.FSubtract = false;
  return
}
function v382(parentObj$$305) {
  var v3796 = parentObj$$305;
  var v10830 = parentObj$$305.registerB;
  var v9662 = v10830 & 15;
  var v7459 = v9662 << 4;
  var v9663 = parentObj$$305.registerB;
  var v7460 = v9663 >> 4;
  v3796.registerB = v7459 | v7460;
  var v3797 = parentObj$$305;
  var v7461 = parentObj$$305.registerB;
  v3797.FZero = v7461 == 0;
  var v3798 = parentObj$$305;
  var v7462 = parentObj$$305;
  v3798.FCarry = v7462.FHalfCarry = parentObj$$305.FSubtract = false;
  return
}
function v381(parentObj$$304) {
  var v3799 = parentObj$$304;
  var v9664 = parentObj$$304.registerA;
  var v7463 = v9664 & 1;
  v3799.FCarry = v7463 == 1;
  var v3800 = parentObj$$304;
  var v9665 = parentObj$$304.registerA;
  var v7464 = v9665 & 128;
  var v9666 = parentObj$$304.registerA;
  var v7465 = v9666 >> 1;
  v3800.registerA = v7464 | v7465;
  var v3801 = parentObj$$304;
  v3801.FHalfCarry = parentObj$$304.FSubtract = false;
  var v3802 = parentObj$$304;
  var v7466 = parentObj$$304.registerA;
  v3802.FZero = v7466 == 0;
  return
}
function v380(parentObj$$303) {
  var v3803 = parentObj$$303.memoryReader;
  var v3804 = parentObj$$303.registersHL;
  var v3805 = parentObj$$303.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12046 = [[parentObj$$303, v3805], v3803, v3803[v3804]]
  }
  var temp_var$$17 = JAMScript.call(v12046[2], v12046[1], v12046[0]);
  var v3806 = temp_var$$17 & 1;
  parentObj$$303.FCarry = v3806 == 1;
  var v3807 = temp_var$$17 & 128;
  var v3808 = temp_var$$17 >> 1;
  temp_var$$17 = v3807 | v3808;
  var v3809 = parentObj$$303.memoryWriter;
  var v3810 = parentObj$$303.registersHL;
  var v3811 = parentObj$$303.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12047 = [[parentObj$$303, v3811, temp_var$$17], v3809, v3809[v3810]]
  }
  JAMScript.call(v12047[2], v12047[1], v12047[0]);
  var v3812 = parentObj$$303;
  v3812.FHalfCarry = parentObj$$303.FSubtract = false;
  parentObj$$303.FZero = temp_var$$17 == 0;
  return
}
function v379(parentObj$$302) {
  var v3813 = parentObj$$302;
  var v9667 = parentObj$$302.registersHL;
  var v7467 = v9667 & 1;
  v3813.FCarry = v7467 == 1;
  var v3814 = parentObj$$302;
  var v9668 = parentObj$$302.registersHL;
  var v7468 = v9668 & 65408;
  var v10831 = parentObj$$302.registersHL;
  var v9669 = v10831 & 255;
  var v7469 = v9669 >> 1;
  v3814.registersHL = v7468 | v7469;
  var v3815 = parentObj$$302;
  v3815.FHalfCarry = parentObj$$302.FSubtract = false;
  var v3816 = parentObj$$302;
  var v9670 = parentObj$$302.registersHL;
  var v7470 = v9670 & 255;
  v3816.FZero = v7470 == 0;
  return
}
function v378(parentObj$$301) {
  var v3817 = parentObj$$301;
  var v9671 = parentObj$$301.registersHL;
  var v7471 = v9671 & 256;
  v3817.FCarry = v7471 == 256;
  var v3818 = parentObj$$301;
  var v10832 = parentObj$$301.registersHL;
  var v9672 = v10832 >> 1;
  var v7472 = v9672 & 65280;
  var v9673 = parentObj$$301.registersHL;
  var v7473 = v9673 & 33023;
  v3818.registersHL = v7472 | v7473;
  var v3819 = parentObj$$301;
  v3819.FHalfCarry = parentObj$$301.FSubtract = false;
  var v3820 = parentObj$$301;
  var v7474 = parentObj$$301.registersHL;
  v3820.FZero = v7474 < 256;
  return
}
function v377(parentObj$$300) {
  var v3821 = parentObj$$300;
  var v9674 = parentObj$$300.registerE;
  var v7475 = v9674 & 1;
  v3821.FCarry = v7475 == 1;
  var v3822 = parentObj$$300;
  var v9675 = parentObj$$300.registerE;
  var v7476 = v9675 & 128;
  var v9676 = parentObj$$300.registerE;
  var v7477 = v9676 >> 1;
  v3822.registerE = v7476 | v7477;
  var v3823 = parentObj$$300;
  v3823.FHalfCarry = parentObj$$300.FSubtract = false;
  var v3824 = parentObj$$300;
  var v7478 = parentObj$$300.registerE;
  v3824.FZero = v7478 == 0;
  return
}
function v376(parentObj$$299) {
  var v3825 = parentObj$$299;
  var v9677 = parentObj$$299.registerD;
  var v7479 = v9677 & 1;
  v3825.FCarry = v7479 == 1;
  var v3826 = parentObj$$299;
  var v9678 = parentObj$$299.registerD;
  var v7480 = v9678 & 128;
  var v9679 = parentObj$$299.registerD;
  var v7481 = v9679 >> 1;
  v3826.registerD = v7480 | v7481;
  var v3827 = parentObj$$299;
  v3827.FHalfCarry = parentObj$$299.FSubtract = false;
  var v3828 = parentObj$$299;
  var v7482 = parentObj$$299.registerD;
  v3828.FZero = v7482 == 0;
  return
}
function v375(parentObj$$298) {
  var v3829 = parentObj$$298;
  var v9680 = parentObj$$298.registerC;
  var v7483 = v9680 & 1;
  v3829.FCarry = v7483 == 1;
  var v3830 = parentObj$$298;
  var v9681 = parentObj$$298.registerC;
  var v7484 = v9681 & 128;
  var v9682 = parentObj$$298.registerC;
  var v7485 = v9682 >> 1;
  v3830.registerC = v7484 | v7485;
  var v3831 = parentObj$$298;
  v3831.FHalfCarry = parentObj$$298.FSubtract = false;
  var v3832 = parentObj$$298;
  var v7486 = parentObj$$298.registerC;
  v3832.FZero = v7486 == 0;
  return
}
function v374(parentObj$$297) {
  var v3833 = parentObj$$297;
  var v9683 = parentObj$$297.registerB;
  var v7487 = v9683 & 1;
  v3833.FCarry = v7487 == 1;
  var v3834 = parentObj$$297;
  var v9684 = parentObj$$297.registerB;
  var v7488 = v9684 & 128;
  var v9685 = parentObj$$297.registerB;
  var v7489 = v9685 >> 1;
  v3834.registerB = v7488 | v7489;
  var v3835 = parentObj$$297;
  v3835.FHalfCarry = parentObj$$297.FSubtract = false;
  var v3836 = parentObj$$297;
  var v7490 = parentObj$$297.registerB;
  v3836.FZero = v7490 == 0;
  return
}
function v373(parentObj$$296) {
  var v3837 = parentObj$$296;
  var v7491 = parentObj$$296.registerA;
  v3837.FCarry = v7491 > 127;
  var v3838 = parentObj$$296;
  var v9686 = parentObj$$296.registerA;
  var v7492 = v9686 << 1;
  v3838.registerA = v7492 & 255;
  var v3839 = parentObj$$296;
  v3839.FHalfCarry = parentObj$$296.FSubtract = false;
  var v3840 = parentObj$$296;
  var v7493 = parentObj$$296.registerA;
  v3840.FZero = v7493 == 0;
  return
}
function v372(parentObj$$295) {
  var v3841 = parentObj$$295.memoryReader;
  var v3842 = parentObj$$295.registersHL;
  var v3843 = parentObj$$295.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12048 = [[parentObj$$295, v3843], v3841, v3841[v3842]]
  }
  var temp_var$$16 = JAMScript.call(v12048[2], v12048[1], v12048[0]);
  parentObj$$295.FCarry = temp_var$$16 > 127;
  var v3844 = temp_var$$16 << 1;
  temp_var$$16 = v3844 & 255;
  var v3845 = parentObj$$295.memoryWriter;
  var v3846 = parentObj$$295.registersHL;
  var v3847 = parentObj$$295.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12049 = [[parentObj$$295, v3847, temp_var$$16], v3845, v3845[v3846]]
  }
  JAMScript.call(v12049[2], v12049[1], v12049[0]);
  var v3848 = parentObj$$295;
  v3848.FHalfCarry = parentObj$$295.FSubtract = false;
  parentObj$$295.FZero = temp_var$$16 == 0;
  return
}
function v371(parentObj$$294) {
  var v3849 = parentObj$$294;
  var v9687 = parentObj$$294.registersHL;
  var v7494 = v9687 & 128;
  v3849.FCarry = v7494 == 128;
  var v3850 = parentObj$$294;
  var v9688 = parentObj$$294.registersHL;
  var v7495 = v9688 & 65280;
  var v10833 = parentObj$$294.registersHL;
  var v9689 = v10833 << 1;
  var v7496 = v9689 & 255;
  v3850.registersHL = v7495 | v7496;
  var v3851 = parentObj$$294;
  v3851.FHalfCarry = parentObj$$294.FSubtract = false;
  var v3852 = parentObj$$294;
  var v9690 = parentObj$$294.registersHL;
  var v7497 = v9690 & 255;
  v3852.FZero = v7497 == 0;
  return
}
function v370(parentObj$$293) {
  var v3853 = parentObj$$293;
  var v7498 = parentObj$$293.registersHL;
  v3853.FCarry = v7498 > 32767;
  var v3854 = parentObj$$293;
  var v10834 = parentObj$$293.registersHL;
  var v9691 = v10834 << 1;
  var v7499 = v9691 & 65024;
  var v9692 = parentObj$$293.registersHL;
  var v7500 = v9692 & 255;
  v3854.registersHL = v7499 | v7500;
  var v3855 = parentObj$$293;
  v3855.FHalfCarry = parentObj$$293.FSubtract = false;
  var v3856 = parentObj$$293;
  var v7501 = parentObj$$293.registersHL;
  v3856.FZero = v7501 < 256;
  return
}
function v369(parentObj$$292) {
  var v3857 = parentObj$$292;
  var v7502 = parentObj$$292.registerE;
  v3857.FCarry = v7502 > 127;
  var v3858 = parentObj$$292;
  var v9693 = parentObj$$292.registerE;
  var v7503 = v9693 << 1;
  v3858.registerE = v7503 & 255;
  var v3859 = parentObj$$292;
  v3859.FHalfCarry = parentObj$$292.FSubtract = false;
  var v3860 = parentObj$$292;
  var v7504 = parentObj$$292.registerE;
  v3860.FZero = v7504 == 0;
  return
}
function v368(parentObj$$291) {
  var v3861 = parentObj$$291;
  var v7505 = parentObj$$291.registerD;
  v3861.FCarry = v7505 > 127;
  var v3862 = parentObj$$291;
  var v9694 = parentObj$$291.registerD;
  var v7506 = v9694 << 1;
  v3862.registerD = v7506 & 255;
  var v3863 = parentObj$$291;
  v3863.FHalfCarry = parentObj$$291.FSubtract = false;
  var v3864 = parentObj$$291;
  var v7507 = parentObj$$291.registerD;
  v3864.FZero = v7507 == 0;
  return
}
function v367(parentObj$$290) {
  var v3865 = parentObj$$290;
  var v7508 = parentObj$$290.registerC;
  v3865.FCarry = v7508 > 127;
  var v3866 = parentObj$$290;
  var v9695 = parentObj$$290.registerC;
  var v7509 = v9695 << 1;
  v3866.registerC = v7509 & 255;
  var v3867 = parentObj$$290;
  v3867.FHalfCarry = parentObj$$290.FSubtract = false;
  var v3868 = parentObj$$290;
  var v7510 = parentObj$$290.registerC;
  v3868.FZero = v7510 == 0;
  return
}
function v366(parentObj$$289) {
  var v3869 = parentObj$$289;
  var v7511 = parentObj$$289.registerB;
  v3869.FCarry = v7511 > 127;
  var v3870 = parentObj$$289;
  var v9696 = parentObj$$289.registerB;
  var v7512 = v9696 << 1;
  v3870.registerB = v7512 & 255;
  var v3871 = parentObj$$289;
  v3871.FHalfCarry = parentObj$$289.FSubtract = false;
  var v3872 = parentObj$$289;
  var v7513 = parentObj$$289.registerB;
  v3872.FZero = v7513 == 0;
  return
}
function v365(parentObj$$288) {
  var v7514 = parentObj$$288.registerA;
  var v3873 = v7514 & 1;
  var newFCarry$$15 = v3873 == 1;
  var v3874 = parentObj$$288;
  var v9697;
  var v10835 = parentObj$$288.FCarry;
  if(v10835) {
    v9697 = 128
  }else {
    v9697 = 0
  }
  var v7515 = v9697;
  var v9698 = parentObj$$288.registerA;
  var v7516 = v9698 >> 1;
  v3874.registerA = v7515 | v7516;
  parentObj$$288.FCarry = newFCarry$$15;
  var v3875 = parentObj$$288;
  v3875.FHalfCarry = parentObj$$288.FSubtract = false;
  var v3876 = parentObj$$288;
  var v7517 = parentObj$$288.registerA;
  v3876.FZero = v7517 == 0;
  return
}
function v364(parentObj$$287) {
  var v3877 = parentObj$$287.memoryReader;
  var v3878 = parentObj$$287.registersHL;
  var v3879 = parentObj$$287.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12050 = [[parentObj$$287, v3879], v3877, v3877[v3878]]
  }
  var temp_var$$15 = JAMScript.call(v12050[2], v12050[1], v12050[0]);
  var v3880 = temp_var$$15 & 1;
  var newFCarry$$14 = v3880 == 1;
  var v7518;
  var v9699 = parentObj$$287.FCarry;
  if(v9699) {
    v7518 = 128
  }else {
    v7518 = 0
  }
  var v3881 = v7518;
  var v3882 = temp_var$$15 >> 1;
  temp_var$$15 = v3881 | v3882;
  parentObj$$287.FCarry = newFCarry$$14;
  var v3883 = parentObj$$287.memoryWriter;
  var v3884 = parentObj$$287.registersHL;
  var v3885 = parentObj$$287.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12051 = [[parentObj$$287, v3885, temp_var$$15], v3883, v3883[v3884]]
  }
  JAMScript.call(v12051[2], v12051[1], v12051[0]);
  var v3886 = parentObj$$287;
  v3886.FHalfCarry = parentObj$$287.FSubtract = false;
  parentObj$$287.FZero = temp_var$$15 == 0;
  return
}
function v363(parentObj$$286) {
  var v7519 = parentObj$$286.registersHL;
  var v3887 = v7519 & 1;
  var newFCarry$$13 = v3887 == 1;
  var v3888 = parentObj$$286;
  var v10836 = parentObj$$286.registersHL;
  var v9700 = v10836 & 65280;
  var v10837;
  var v11317 = parentObj$$286.FCarry;
  if(v11317) {
    v10837 = 128
  }else {
    v10837 = 0
  }
  var v9701 = v10837;
  var v7520 = v9700 | v9701;
  var v10838 = parentObj$$286.registersHL;
  var v9702 = v10838 & 255;
  var v7521 = v9702 >> 1;
  v3888.registersHL = v7520 | v7521;
  parentObj$$286.FCarry = newFCarry$$13;
  var v3889 = parentObj$$286;
  v3889.FHalfCarry = parentObj$$286.FSubtract = false;
  var v3890 = parentObj$$286;
  var v9703 = parentObj$$286.registersHL;
  var v7522 = v9703 & 255;
  v3890.FZero = v7522 == 0;
  return
}
function v362(parentObj$$285) {
  var v7523 = parentObj$$285.registersHL;
  var v3891 = v7523 & 256;
  var newFCarry$$12 = v3891 == 256;
  var v3892 = parentObj$$285;
  var v10839;
  var v11318 = parentObj$$285.FCarry;
  if(v11318) {
    v10839 = 32768
  }else {
    v10839 = 0
  }
  var v9704 = v10839;
  var v11319 = parentObj$$285.registersHL;
  var v10840 = v11319 >> 1;
  var v9705 = v10840 & 65280;
  var v7524 = v9704 | v9705;
  var v9706 = parentObj$$285.registersHL;
  var v7525 = v9706 & 255;
  v3892.registersHL = v7524 | v7525;
  parentObj$$285.FCarry = newFCarry$$12;
  var v3893 = parentObj$$285;
  v3893.FHalfCarry = parentObj$$285.FSubtract = false;
  var v3894 = parentObj$$285;
  var v7526 = parentObj$$285.registersHL;
  v3894.FZero = v7526 < 256;
  return
}
function v361(parentObj$$284) {
  var v7527 = parentObj$$284.registerE;
  var v3895 = v7527 & 1;
  var newFCarry$$11 = v3895 == 1;
  var v3896 = parentObj$$284;
  var v9707;
  var v10841 = parentObj$$284.FCarry;
  if(v10841) {
    v9707 = 128
  }else {
    v9707 = 0
  }
  var v7528 = v9707;
  var v9708 = parentObj$$284.registerE;
  var v7529 = v9708 >> 1;
  v3896.registerE = v7528 | v7529;
  parentObj$$284.FCarry = newFCarry$$11;
  var v3897 = parentObj$$284;
  v3897.FHalfCarry = parentObj$$284.FSubtract = false;
  var v3898 = parentObj$$284;
  var v7530 = parentObj$$284.registerE;
  v3898.FZero = v7530 == 0;
  return
}
function v360(parentObj$$283) {
  var v7531 = parentObj$$283.registerD;
  var v3899 = v7531 & 1;
  var newFCarry$$10 = v3899 == 1;
  var v3900 = parentObj$$283;
  var v9709;
  var v10842 = parentObj$$283.FCarry;
  if(v10842) {
    v9709 = 128
  }else {
    v9709 = 0
  }
  var v7532 = v9709;
  var v9710 = parentObj$$283.registerD;
  var v7533 = v9710 >> 1;
  v3900.registerD = v7532 | v7533;
  parentObj$$283.FCarry = newFCarry$$10;
  var v3901 = parentObj$$283;
  v3901.FHalfCarry = parentObj$$283.FSubtract = false;
  var v3902 = parentObj$$283;
  var v7534 = parentObj$$283.registerD;
  v3902.FZero = v7534 == 0;
  return
}
function v359(parentObj$$282) {
  var v7535 = parentObj$$282.registerC;
  var v3903 = v7535 & 1;
  var newFCarry$$9 = v3903 == 1;
  var v3904 = parentObj$$282;
  var v9711;
  var v10843 = parentObj$$282.FCarry;
  if(v10843) {
    v9711 = 128
  }else {
    v9711 = 0
  }
  var v7536 = v9711;
  var v9712 = parentObj$$282.registerC;
  var v7537 = v9712 >> 1;
  v3904.registerC = v7536 | v7537;
  parentObj$$282.FCarry = newFCarry$$9;
  var v3905 = parentObj$$282;
  v3905.FHalfCarry = parentObj$$282.FSubtract = false;
  var v3906 = parentObj$$282;
  var v7538 = parentObj$$282.registerC;
  v3906.FZero = v7538 == 0;
  return
}
function v358(parentObj$$281) {
  var v7539 = parentObj$$281.registerB;
  var v3907 = v7539 & 1;
  var newFCarry$$8 = v3907 == 1;
  var v3908 = parentObj$$281;
  var v9713;
  var v10844 = parentObj$$281.FCarry;
  if(v10844) {
    v9713 = 128
  }else {
    v9713 = 0
  }
  var v7540 = v9713;
  var v9714 = parentObj$$281.registerB;
  var v7541 = v9714 >> 1;
  v3908.registerB = v7540 | v7541;
  parentObj$$281.FCarry = newFCarry$$8;
  var v3909 = parentObj$$281;
  v3909.FHalfCarry = parentObj$$281.FSubtract = false;
  var v3910 = parentObj$$281;
  var v7542 = parentObj$$281.registerB;
  v3910.FZero = v7542 == 0;
  return
}
function v357(parentObj$$280) {
  var v3911 = parentObj$$280.registerA;
  var newFCarry$$7 = v3911 > 127;
  var v3912 = parentObj$$280;
  var v10845 = parentObj$$280.registerA;
  var v9715 = v10845 << 1;
  var v7543 = v9715 & 255;
  var v9716;
  var v10846 = parentObj$$280.FCarry;
  if(v10846) {
    v9716 = 1
  }else {
    v9716 = 0
  }
  var v7544 = v9716;
  v3912.registerA = v7543 | v7544;
  parentObj$$280.FCarry = newFCarry$$7;
  var v3913 = parentObj$$280;
  v3913.FHalfCarry = parentObj$$280.FSubtract = false;
  var v3914 = parentObj$$280;
  var v7545 = parentObj$$280.registerA;
  v3914.FZero = v7545 == 0;
  return
}
function v356(parentObj$$279) {
  var v3915 = parentObj$$279.memoryReader;
  var v3916 = parentObj$$279.registersHL;
  var v3917 = parentObj$$279.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12052 = [[parentObj$$279, v3917], v3915, v3915[v3916]]
  }
  var temp_var$$14 = JAMScript.call(v12052[2], v12052[1], v12052[0]);
  var newFCarry$$6 = temp_var$$14 > 127;
  var v7546 = temp_var$$14 << 1;
  var v3918 = v7546 & 255;
  var v7547;
  var v9717 = parentObj$$279.FCarry;
  if(v9717) {
    v7547 = 1
  }else {
    v7547 = 0
  }
  var v3919 = v7547;
  temp_var$$14 = v3918 | v3919;
  parentObj$$279.FCarry = newFCarry$$6;
  var v3920 = parentObj$$279.memoryWriter;
  var v3921 = parentObj$$279.registersHL;
  var v3922 = parentObj$$279.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12053 = [[parentObj$$279, v3922, temp_var$$14], v3920, v3920[v3921]]
  }
  JAMScript.call(v12053[2], v12053[1], v12053[0]);
  var v3923 = parentObj$$279;
  v3923.FHalfCarry = parentObj$$279.FSubtract = false;
  parentObj$$279.FZero = temp_var$$14 == 0;
  return
}
function v355(parentObj$$278) {
  var v7548 = parentObj$$278.registersHL;
  var v3924 = v7548 & 128;
  var newFCarry$$5 = v3924 == 128;
  var v3925 = parentObj$$278;
  var v10847 = parentObj$$278.registersHL;
  var v9718 = v10847 & 65280;
  var v11320 = parentObj$$278.registersHL;
  var v10848 = v11320 << 1;
  var v9719 = v10848 & 255;
  var v7549 = v9718 | v9719;
  var v9720;
  var v10849 = parentObj$$278.FCarry;
  if(v10849) {
    v9720 = 1
  }else {
    v9720 = 0
  }
  var v7550 = v9720;
  v3925.registersHL = v7549 | v7550;
  parentObj$$278.FCarry = newFCarry$$5;
  var v3926 = parentObj$$278;
  v3926.FHalfCarry = parentObj$$278.FSubtract = false;
  var v3927 = parentObj$$278;
  var v9721 = parentObj$$278.registersHL;
  var v7551 = v9721 & 255;
  v3927.FZero = v7551 == 0;
  return
}
function v354(parentObj$$277) {
  var v3928 = parentObj$$277.registersHL;
  var newFCarry$$4 = v3928 > 32767;
  var v3929 = parentObj$$277;
  var v11321 = parentObj$$277.registersHL;
  var v10850 = v11321 << 1;
  var v9722 = v10850 & 65024;
  var v10851;
  var v11322 = parentObj$$277.FCarry;
  if(v11322) {
    v10851 = 256
  }else {
    v10851 = 0
  }
  var v9723 = v10851;
  var v7552 = v9722 | v9723;
  var v9724 = parentObj$$277.registersHL;
  var v7553 = v9724 & 255;
  v3929.registersHL = v7552 | v7553;
  parentObj$$277.FCarry = newFCarry$$4;
  var v3930 = parentObj$$277;
  v3930.FHalfCarry = parentObj$$277.FSubtract = false;
  var v3931 = parentObj$$277;
  var v7554 = parentObj$$277.registersHL;
  v3931.FZero = v7554 < 256;
  return
}
function v353(parentObj$$276) {
  var v3932 = parentObj$$276.registerE;
  var newFCarry$$3 = v3932 > 127;
  var v3933 = parentObj$$276;
  var v10852 = parentObj$$276.registerE;
  var v9725 = v10852 << 1;
  var v7555 = v9725 & 255;
  var v9726;
  var v10853 = parentObj$$276.FCarry;
  if(v10853) {
    v9726 = 1
  }else {
    v9726 = 0
  }
  var v7556 = v9726;
  v3933.registerE = v7555 | v7556;
  parentObj$$276.FCarry = newFCarry$$3;
  var v3934 = parentObj$$276;
  v3934.FHalfCarry = parentObj$$276.FSubtract = false;
  var v3935 = parentObj$$276;
  var v7557 = parentObj$$276.registerE;
  v3935.FZero = v7557 == 0;
  return
}
function v352(parentObj$$275) {
  var v3936 = parentObj$$275.registerD;
  var newFCarry$$2 = v3936 > 127;
  var v3937 = parentObj$$275;
  var v10854 = parentObj$$275.registerD;
  var v9727 = v10854 << 1;
  var v7558 = v9727 & 255;
  var v9728;
  var v10855 = parentObj$$275.FCarry;
  if(v10855) {
    v9728 = 1
  }else {
    v9728 = 0
  }
  var v7559 = v9728;
  v3937.registerD = v7558 | v7559;
  parentObj$$275.FCarry = newFCarry$$2;
  var v3938 = parentObj$$275;
  v3938.FHalfCarry = parentObj$$275.FSubtract = false;
  var v3939 = parentObj$$275;
  var v7560 = parentObj$$275.registerD;
  v3939.FZero = v7560 == 0;
  return
}
function v351(parentObj$$274) {
  var v3940 = parentObj$$274.registerC;
  var newFCarry$$1 = v3940 > 127;
  var v3941 = parentObj$$274;
  var v10856 = parentObj$$274.registerC;
  var v9729 = v10856 << 1;
  var v7561 = v9729 & 255;
  var v9730;
  var v10857 = parentObj$$274.FCarry;
  if(v10857) {
    v9730 = 1
  }else {
    v9730 = 0
  }
  var v7562 = v9730;
  v3941.registerC = v7561 | v7562;
  parentObj$$274.FCarry = newFCarry$$1;
  var v3942 = parentObj$$274;
  v3942.FHalfCarry = parentObj$$274.FSubtract = false;
  var v3943 = parentObj$$274;
  var v7563 = parentObj$$274.registerC;
  v3943.FZero = v7563 == 0;
  return
}
function v350(parentObj$$273) {
  var v3944 = parentObj$$273.registerB;
  var newFCarry = v3944 > 127;
  var v3945 = parentObj$$273;
  var v10858 = parentObj$$273.registerB;
  var v9731 = v10858 << 1;
  var v7564 = v9731 & 255;
  var v9732;
  var v10859 = parentObj$$273.FCarry;
  if(v10859) {
    v9732 = 1
  }else {
    v9732 = 0
  }
  var v7565 = v9732;
  v3945.registerB = v7564 | v7565;
  parentObj$$273.FCarry = newFCarry;
  var v3946 = parentObj$$273;
  v3946.FHalfCarry = parentObj$$273.FSubtract = false;
  var v3947 = parentObj$$273;
  var v7566 = parentObj$$273.registerB;
  v3947.FZero = v7566 == 0;
  return
}
function v349(parentObj$$272) {
  var v3948 = parentObj$$272;
  var v9733 = parentObj$$272.registerA;
  var v7567 = v9733 & 1;
  v3948.FCarry = v7567 == 1;
  var v3949 = parentObj$$272;
  var v9734;
  var v10860 = parentObj$$272.FCarry;
  if(v10860) {
    v9734 = 128
  }else {
    v9734 = 0
  }
  var v7568 = v9734;
  var v9735 = parentObj$$272.registerA;
  var v7569 = v9735 >> 1;
  v3949.registerA = v7568 | v7569;
  var v3950 = parentObj$$272;
  v3950.FHalfCarry = parentObj$$272.FSubtract = false;
  var v3951 = parentObj$$272;
  var v7570 = parentObj$$272.registerA;
  v3951.FZero = v7570 == 0;
  return
}
function v348(parentObj$$271) {
  var v3952 = parentObj$$271.memoryReader;
  var v3953 = parentObj$$271.registersHL;
  var v3954 = parentObj$$271.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12054 = [[parentObj$$271, v3954], v3952, v3952[v3953]]
  }
  var temp_var$$13 = JAMScript.call(v12054[2], v12054[1], v12054[0]);
  var v3955 = temp_var$$13 & 1;
  parentObj$$271.FCarry = v3955 == 1;
  var v7571;
  var v9736 = parentObj$$271.FCarry;
  if(v9736) {
    v7571 = 128
  }else {
    v7571 = 0
  }
  var v3956 = v7571;
  var v3957 = temp_var$$13 >> 1;
  temp_var$$13 = v3956 | v3957;
  var v3958 = parentObj$$271.memoryWriter;
  var v3959 = parentObj$$271.registersHL;
  var v3960 = parentObj$$271.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12055 = [[parentObj$$271, v3960, temp_var$$13], v3958, v3958[v3959]]
  }
  JAMScript.call(v12055[2], v12055[1], v12055[0]);
  var v3961 = parentObj$$271;
  v3961.FHalfCarry = parentObj$$271.FSubtract = false;
  parentObj$$271.FZero = temp_var$$13 == 0;
  return
}
function v347(parentObj$$270) {
  var v3962 = parentObj$$270;
  var v9737 = parentObj$$270.registersHL;
  var v7572 = v9737 & 1;
  v3962.FCarry = v7572 == 1;
  var v3963 = parentObj$$270;
  var v10861 = parentObj$$270.registersHL;
  var v9738 = v10861 & 65280;
  var v10862;
  var v11323 = parentObj$$270.FCarry;
  if(v11323) {
    v10862 = 128
  }else {
    v10862 = 0
  }
  var v9739 = v10862;
  var v7573 = v9738 | v9739;
  var v10863 = parentObj$$270.registersHL;
  var v9740 = v10863 & 255;
  var v7574 = v9740 >> 1;
  v3963.registersHL = v7573 | v7574;
  var v3964 = parentObj$$270;
  v3964.FHalfCarry = parentObj$$270.FSubtract = false;
  var v3965 = parentObj$$270;
  var v9741 = parentObj$$270.registersHL;
  var v7575 = v9741 & 255;
  v3965.FZero = v7575 == 0;
  return
}
function v346(parentObj$$269) {
  var v3966 = parentObj$$269;
  var v9742 = parentObj$$269.registersHL;
  var v7576 = v9742 & 256;
  v3966.FCarry = v7576 == 256;
  var v3967 = parentObj$$269;
  var v10864;
  var v11324 = parentObj$$269.FCarry;
  if(v11324) {
    v10864 = 32768
  }else {
    v10864 = 0
  }
  var v9743 = v10864;
  var v11325 = parentObj$$269.registersHL;
  var v10865 = v11325 >> 1;
  var v9744 = v10865 & 65280;
  var v7577 = v9743 | v9744;
  var v9745 = parentObj$$269.registersHL;
  var v7578 = v9745 & 255;
  v3967.registersHL = v7577 | v7578;
  var v3968 = parentObj$$269;
  v3968.FHalfCarry = parentObj$$269.FSubtract = false;
  var v3969 = parentObj$$269;
  var v7579 = parentObj$$269.registersHL;
  v3969.FZero = v7579 < 256;
  return
}
function v345(parentObj$$268) {
  var v3970 = parentObj$$268;
  var v9746 = parentObj$$268.registerE;
  var v7580 = v9746 & 1;
  v3970.FCarry = v7580 == 1;
  var v3971 = parentObj$$268;
  var v9747;
  var v10866 = parentObj$$268.FCarry;
  if(v10866) {
    v9747 = 128
  }else {
    v9747 = 0
  }
  var v7581 = v9747;
  var v9748 = parentObj$$268.registerE;
  var v7582 = v9748 >> 1;
  v3971.registerE = v7581 | v7582;
  var v3972 = parentObj$$268;
  v3972.FHalfCarry = parentObj$$268.FSubtract = false;
  var v3973 = parentObj$$268;
  var v7583 = parentObj$$268.registerE;
  v3973.FZero = v7583 == 0;
  return
}
function v344(parentObj$$267) {
  var v3974 = parentObj$$267;
  var v9749 = parentObj$$267.registerD;
  var v7584 = v9749 & 1;
  v3974.FCarry = v7584 == 1;
  var v3975 = parentObj$$267;
  var v9750;
  var v10867 = parentObj$$267.FCarry;
  if(v10867) {
    v9750 = 128
  }else {
    v9750 = 0
  }
  var v7585 = v9750;
  var v9751 = parentObj$$267.registerD;
  var v7586 = v9751 >> 1;
  v3975.registerD = v7585 | v7586;
  var v3976 = parentObj$$267;
  v3976.FHalfCarry = parentObj$$267.FSubtract = false;
  var v3977 = parentObj$$267;
  var v7587 = parentObj$$267.registerD;
  v3977.FZero = v7587 == 0;
  return
}
function v343(parentObj$$266) {
  var v3978 = parentObj$$266;
  var v9752 = parentObj$$266.registerC;
  var v7588 = v9752 & 1;
  v3978.FCarry = v7588 == 1;
  var v3979 = parentObj$$266;
  var v9753;
  var v10868 = parentObj$$266.FCarry;
  if(v10868) {
    v9753 = 128
  }else {
    v9753 = 0
  }
  var v7589 = v9753;
  var v9754 = parentObj$$266.registerC;
  var v7590 = v9754 >> 1;
  v3979.registerC = v7589 | v7590;
  var v3980 = parentObj$$266;
  v3980.FHalfCarry = parentObj$$266.FSubtract = false;
  var v3981 = parentObj$$266;
  var v7591 = parentObj$$266.registerC;
  v3981.FZero = v7591 == 0;
  return
}
function v342(parentObj$$265) {
  var v3982 = parentObj$$265;
  var v9755 = parentObj$$265.registerB;
  var v7592 = v9755 & 1;
  v3982.FCarry = v7592 == 1;
  var v3983 = parentObj$$265;
  var v9756;
  var v10869 = parentObj$$265.FCarry;
  if(v10869) {
    v9756 = 128
  }else {
    v9756 = 0
  }
  var v7593 = v9756;
  var v9757 = parentObj$$265.registerB;
  var v7594 = v9757 >> 1;
  v3983.registerB = v7593 | v7594;
  var v3984 = parentObj$$265;
  v3984.FHalfCarry = parentObj$$265.FSubtract = false;
  var v3985 = parentObj$$265;
  var v7595 = parentObj$$265.registerB;
  v3985.FZero = v7595 == 0;
  return
}
function v341(parentObj$$264) {
  var v3986 = parentObj$$264;
  var v7596 = parentObj$$264.registerA;
  v3986.FCarry = v7596 > 127;
  var v3987 = parentObj$$264;
  var v10870 = parentObj$$264.registerA;
  var v9758 = v10870 << 1;
  var v7597 = v9758 & 255;
  var v9759;
  var v10871 = parentObj$$264.FCarry;
  if(v10871) {
    v9759 = 1
  }else {
    v9759 = 0
  }
  var v7598 = v9759;
  v3987.registerA = v7597 | v7598;
  var v3988 = parentObj$$264;
  v3988.FHalfCarry = parentObj$$264.FSubtract = false;
  var v3989 = parentObj$$264;
  var v7599 = parentObj$$264.registerA;
  v3989.FZero = v7599 == 0;
  return
}
function v340(parentObj$$263) {
  var v3990 = parentObj$$263.memoryReader;
  var v3991 = parentObj$$263.registersHL;
  var v3992 = parentObj$$263.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12056 = [[parentObj$$263, v3992], v3990, v3990[v3991]]
  }
  var temp_var$$12 = JAMScript.call(v12056[2], v12056[1], v12056[0]);
  parentObj$$263.FCarry = temp_var$$12 > 127;
  var v7600 = temp_var$$12 << 1;
  var v3993 = v7600 & 255;
  var v7601;
  var v9760 = parentObj$$263.FCarry;
  if(v9760) {
    v7601 = 1
  }else {
    v7601 = 0
  }
  var v3994 = v7601;
  temp_var$$12 = v3993 | v3994;
  var v3995 = parentObj$$263.memoryWriter;
  var v3996 = parentObj$$263.registersHL;
  var v3997 = parentObj$$263.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12057 = [[parentObj$$263, v3997, temp_var$$12], v3995, v3995[v3996]]
  }
  JAMScript.call(v12057[2], v12057[1], v12057[0]);
  var v3998 = parentObj$$263;
  v3998.FHalfCarry = parentObj$$263.FSubtract = false;
  parentObj$$263.FZero = temp_var$$12 == 0;
  return
}
function v339(parentObj$$262) {
  var v3999 = parentObj$$262;
  var v9761 = parentObj$$262.registersHL;
  var v7602 = v9761 & 128;
  v3999.FCarry = v7602 == 128;
  var v4000 = parentObj$$262;
  var v10872 = parentObj$$262.registersHL;
  var v9762 = v10872 & 65280;
  var v11326 = parentObj$$262.registersHL;
  var v10873 = v11326 << 1;
  var v9763 = v10873 & 255;
  var v7603 = v9762 | v9763;
  var v9764;
  var v10874 = parentObj$$262.FCarry;
  if(v10874) {
    v9764 = 1
  }else {
    v9764 = 0
  }
  var v7604 = v9764;
  v4000.registersHL = v7603 | v7604;
  var v4001 = parentObj$$262;
  v4001.FHalfCarry = parentObj$$262.FSubtract = false;
  var v4002 = parentObj$$262;
  var v9765 = parentObj$$262.registersHL;
  var v7605 = v9765 & 255;
  v4002.FZero = v7605 == 0;
  return
}
function v338(parentObj$$261) {
  var v4003 = parentObj$$261;
  var v7606 = parentObj$$261.registersHL;
  v4003.FCarry = v7606 > 32767;
  var v4004 = parentObj$$261;
  var v11327 = parentObj$$261.registersHL;
  var v10875 = v11327 << 1;
  var v9766 = v10875 & 65024;
  var v10876;
  var v11328 = parentObj$$261.FCarry;
  if(v11328) {
    v10876 = 256
  }else {
    v10876 = 0
  }
  var v9767 = v10876;
  var v7607 = v9766 | v9767;
  var v9768 = parentObj$$261.registersHL;
  var v7608 = v9768 & 255;
  v4004.registersHL = v7607 | v7608;
  var v4005 = parentObj$$261;
  v4005.FHalfCarry = parentObj$$261.FSubtract = false;
  var v4006 = parentObj$$261;
  var v7609 = parentObj$$261.registersHL;
  v4006.FZero = v7609 < 256;
  return
}
function v337(parentObj$$260) {
  var v4007 = parentObj$$260;
  var v7610 = parentObj$$260.registerE;
  v4007.FCarry = v7610 > 127;
  var v4008 = parentObj$$260;
  var v10877 = parentObj$$260.registerE;
  var v9769 = v10877 << 1;
  var v7611 = v9769 & 255;
  var v9770;
  var v10878 = parentObj$$260.FCarry;
  if(v10878) {
    v9770 = 1
  }else {
    v9770 = 0
  }
  var v7612 = v9770;
  v4008.registerE = v7611 | v7612;
  var v4009 = parentObj$$260;
  v4009.FHalfCarry = parentObj$$260.FSubtract = false;
  var v4010 = parentObj$$260;
  var v7613 = parentObj$$260.registerE;
  v4010.FZero = v7613 == 0;
  return
}
function v336(parentObj$$259) {
  var v4011 = parentObj$$259;
  var v7614 = parentObj$$259.registerD;
  v4011.FCarry = v7614 > 127;
  var v4012 = parentObj$$259;
  var v10879 = parentObj$$259.registerD;
  var v9771 = v10879 << 1;
  var v7615 = v9771 & 255;
  var v9772;
  var v10880 = parentObj$$259.FCarry;
  if(v10880) {
    v9772 = 1
  }else {
    v9772 = 0
  }
  var v7616 = v9772;
  v4012.registerD = v7615 | v7616;
  var v4013 = parentObj$$259;
  v4013.FHalfCarry = parentObj$$259.FSubtract = false;
  var v4014 = parentObj$$259;
  var v7617 = parentObj$$259.registerD;
  v4014.FZero = v7617 == 0;
  return
}
function v335(parentObj$$258) {
  var v4015 = parentObj$$258;
  var v7618 = parentObj$$258.registerC;
  v4015.FCarry = v7618 > 127;
  var v4016 = parentObj$$258;
  var v10881 = parentObj$$258.registerC;
  var v9773 = v10881 << 1;
  var v7619 = v9773 & 255;
  var v9774;
  var v10882 = parentObj$$258.FCarry;
  if(v10882) {
    v9774 = 1
  }else {
    v9774 = 0
  }
  var v7620 = v9774;
  v4016.registerC = v7619 | v7620;
  var v4017 = parentObj$$258;
  v4017.FHalfCarry = parentObj$$258.FSubtract = false;
  var v4018 = parentObj$$258;
  var v7621 = parentObj$$258.registerC;
  v4018.FZero = v7621 == 0;
  return
}
function v334(parentObj$$257) {
  var v4019 = parentObj$$257;
  var v7622 = parentObj$$257.registerB;
  v4019.FCarry = v7622 > 127;
  var v4020 = parentObj$$257;
  var v10883 = parentObj$$257.registerB;
  var v9775 = v10883 << 1;
  var v7623 = v9775 & 255;
  var v9776;
  var v10884 = parentObj$$257.FCarry;
  if(v10884) {
    v9776 = 1
  }else {
    v9776 = 0
  }
  var v7624 = v9776;
  v4020.registerB = v7623 | v7624;
  var v4021 = parentObj$$257;
  v4021.FHalfCarry = parentObj$$257.FSubtract = false;
  var v4022 = parentObj$$257;
  var v7625 = parentObj$$257.registerB;
  v4022.FZero = v7625 == 0;
  return
}
function v333(parentObj$$256) {
  var v4023 = parentObj$$256;
  var v9777 = parentObj$$256.stackPointer;
  var v7626 = v9777 - 1;
  v4023.stackPointer = v7626 & 65535;
  var v4024 = parentObj$$256.memoryWriter;
  var v4025 = parentObj$$256.stackPointer;
  var v4026 = parentObj$$256.stackPointer;
  var v7627 = parentObj$$256.programCounter;
  var v4027 = v7627 >> 8;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12058 = [[parentObj$$256, v4026, v4027], v4024, v4024[v4025]]
  }
  JAMScript.call(v12058[2], v12058[1], v12058[0]);
  var v4028 = parentObj$$256;
  var v9778 = parentObj$$256.stackPointer;
  var v7628 = v9778 - 1;
  v4028.stackPointer = v7628 & 65535;
  var v4029 = parentObj$$256.memoryWriter;
  var v4030 = parentObj$$256.stackPointer;
  var v4031 = parentObj$$256.stackPointer;
  var v7629 = parentObj$$256.programCounter;
  var v4032 = v7629 & 255;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12059 = [[parentObj$$256, v4031, v4032], v4029, v4029[v4030]]
  }
  JAMScript.call(v12059[2], v12059[1], v12059[0]);
  parentObj$$256.programCounter = 56;
  return
}
function v332(parentObj$$255) {
  var v4033 = parentObj$$255.registerA;
  var v7630 = parentObj$$255.memoryReader;
  var v7631 = parentObj$$255.programCounter;
  var v7632 = parentObj$$255.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12060 = [[parentObj$$255, v7632], v7630, v7630[v7631]]
  }
  var v4034 = JAMScript.call(v12060[2], v12060[1], v12060[0]);
  var dirtySum$$43 = v4033 - v4034;
  var v4035 = parentObj$$255;
  var v9779 = parentObj$$255.programCounter;
  var v7633 = v9779 + 1;
  v4035.programCounter = v7633 & 65535;
  var v4036 = parentObj$$255;
  var v7634 = dirtySum$$43 & 15;
  var v9780 = parentObj$$255.registerA;
  var v7635 = v9780 & 15;
  v4036.FHalfCarry = v7634 > v7635;
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
  var v4037 = parentObj$$252;
  var v7636;
  var v11329 = parentObj$$252.IRQEnableDelay;
  var v10885 = v11329 == 2;
  var v11331 = !v10885;
  if(v11331) {
    var v11564 = parentObj$$252.memoryReader;
    var v11565 = parentObj$$252.programCounter;
    var v11566 = parentObj$$252.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12061 = [[parentObj$$252, v11566], v11564, v11564[v11565]]
    }
    var v11330 = JAMScript.call(v12061[2], v12061[1], v12061[0]);
    v10885 = v11330 == 118
  }
  var v9781 = v10885;
  if(v9781) {
    v7636 = 1
  }else {
    v7636 = 2
  }
  v4037.IRQEnableDelay = v7636;
  return
}
function v328(parentObj$$251) {
  var v4038 = parentObj$$251;
  var v11648 = parentObj$$251.programCounter;
  var v11567 = v11648 + 1;
  var v11332 = v11567 & 65535;
  var v10886 = JAMScript.call(parentObj$$251.memoryRead, parentObj$$251, [v11332]);
  var v9782 = v10886 << 8;
  var v10887 = parentObj$$251.memoryReader;
  var v10888 = parentObj$$251.programCounter;
  var v10889 = parentObj$$251.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12062 = [[parentObj$$251, v10889], v10887, v10887[v10888]]
  }
  var v9783 = JAMScript.call(v12062[2], v12062[1], v12062[0]);
  var v7637 = v9782 | v9783;
  var v11845 = JAMScript.call(parentObj$$251.memoryRead, parentObj$$251, [v7637]);
  v4038.registerA = v11845;
  var v4039 = parentObj$$251;
  var v9784 = parentObj$$251.programCounter;
  var v7638 = v9784 + 2;
  v4039.programCounter = v7638 & 65535;
  return
}
function v327(parentObj$$250) {
  var v4040 = parentObj$$250;
  v4040.stackPointer = parentObj$$250.registersHL;
  return
}
function v326(parentObj$$249) {
  var v9785 = parentObj$$249.memoryReader;
  var v9786 = parentObj$$249.programCounter;
  var v9787 = parentObj$$249.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12063 = [[parentObj$$249, v9787], v9785, v9785[v9786]]
  }
  var v7639 = JAMScript.call(v12063[2], v12063[1], v12063[0]);
  var v4041 = v7639 << 24;
  var temp_var$$11 = v4041 >> 24;
  var v4042 = parentObj$$249;
  var v9788 = parentObj$$249.programCounter;
  var v7640 = v9788 + 1;
  v4042.programCounter = v7640 & 65535;
  var v4043 = parentObj$$249;
  var v9789 = parentObj$$249.stackPointer;
  var v7641 = v9789 + temp_var$$11;
  v4043.registersHL = v7641 & 65535;
  var v7642 = parentObj$$249.stackPointer;
  var v4044 = v7642 ^ temp_var$$11;
  var v4045 = parentObj$$249.registersHL;
  temp_var$$11 = v4044 ^ v4045;
  var v4046 = temp_var$$11 & 256;
  parentObj$$249.FCarry = v4046 == 256;
  var v4047 = temp_var$$11 & 16;
  parentObj$$249.FHalfCarry = v4047 == 16;
  var v4048 = parentObj$$249;
  v4048.FZero = parentObj$$249.FSubtract = false;
  return
}
function v325(parentObj$$248) {
  var v4049 = parentObj$$248;
  var v9790 = parentObj$$248.stackPointer;
  var v7643 = v9790 - 1;
  v4049.stackPointer = v7643 & 65535;
  var v4050 = parentObj$$248.memoryWriter;
  var v4051 = parentObj$$248.stackPointer;
  var v4052 = parentObj$$248.stackPointer;
  var v7644 = parentObj$$248.programCounter;
  var v4053 = v7644 >> 8;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12064 = [[parentObj$$248, v4052, v4053], v4050, v4050[v4051]]
  }
  JAMScript.call(v12064[2], v12064[1], v12064[0]);
  var v4054 = parentObj$$248;
  var v9791 = parentObj$$248.stackPointer;
  var v7645 = v9791 - 1;
  v4054.stackPointer = v7645 & 65535;
  var v4055 = parentObj$$248.memoryWriter;
  var v4056 = parentObj$$248.stackPointer;
  var v4057 = parentObj$$248.stackPointer;
  var v7646 = parentObj$$248.programCounter;
  var v4058 = v7646 & 255;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12065 = [[parentObj$$248, v4057, v4058], v4055, v4055[v4056]]
  }
  JAMScript.call(v12065[2], v12065[1], v12065[0]);
  parentObj$$248.programCounter = 48;
  return
}
function v324(parentObj$$247) {
  var v4059 = parentObj$$247;
  var v9792 = v4059.registerA;
  var v10890 = parentObj$$247.memoryReader;
  var v10891 = parentObj$$247.programCounter;
  var v10892 = parentObj$$247.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12066 = [[parentObj$$247, v10892], v10890, v10890[v10891]]
  }
  var v9793 = JAMScript.call(v12066[2], v12066[1], v12066[0]);
  v4059.registerA = v9792 | v9793;
  var v4060 = parentObj$$247;
  var v7647 = parentObj$$247.registerA;
  v4060.FZero = v7647 == 0;
  var v4061 = parentObj$$247;
  var v9794 = parentObj$$247.programCounter;
  var v7648 = v9794 + 1;
  v4061.programCounter = v7648 & 65535;
  var v4062 = parentObj$$247;
  var v7649 = parentObj$$247;
  v4062.FSubtract = v7649.FCarry = parentObj$$247.FHalfCarry = false;
  return
}
function v323(parentObj$$246) {
  var v4063 = parentObj$$246;
  var v9795 = parentObj$$246.stackPointer;
  var v7650 = v9795 - 1;
  v4063.stackPointer = v7650 & 65535;
  var v4064 = parentObj$$246.memoryWriter;
  var v4065 = parentObj$$246.stackPointer;
  var v4066 = parentObj$$246.stackPointer;
  var v4067 = parentObj$$246.registerA;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12067 = [[parentObj$$246, v4066, v4067], v4064, v4064[v4065]]
  }
  JAMScript.call(v12067[2], v12067[1], v12067[0]);
  var v4068 = parentObj$$246;
  var v9796 = parentObj$$246.stackPointer;
  var v7651 = v9796 - 1;
  v4068.stackPointer = v7651 & 65535;
  var v4069 = parentObj$$246.memoryWriter;
  var v4070 = parentObj$$246.stackPointer;
  var v4071 = parentObj$$246.stackPointer;
  var v11333;
  var v11568 = parentObj$$246.FZero;
  if(v11568) {
    v11333 = 128
  }else {
    v11333 = 0
  }
  var v10893 = v11333;
  var v11334;
  var v11569 = parentObj$$246.FSubtract;
  if(v11569) {
    v11334 = 64
  }else {
    v11334 = 0
  }
  var v10894 = v11334;
  var v9797 = v10893 | v10894;
  var v10895;
  var v11335 = parentObj$$246.FHalfCarry;
  if(v11335) {
    v10895 = 32
  }else {
    v10895 = 0
  }
  var v9798 = v10895;
  var v7652 = v9797 | v9798;
  var v9799;
  var v10896 = parentObj$$246.FCarry;
  if(v10896) {
    v9799 = 16
  }else {
    v9799 = 0
  }
  var v7653 = v9799;
  var v4072 = v7652 | v7653;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12068 = [[parentObj$$246, v4071, v4072], v4069, v4069[v4070]]
  }
  JAMScript.call(v12068[2], v12068[1], v12068[0]);
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
  var v4073 = parentObj$$243;
  var v7654 = parentObj$$243.memoryHighReader;
  var v7655 = parentObj$$243.registerC;
  var v7656 = parentObj$$243.registerC;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12069 = [[parentObj$$243, v7656], v7654, v7654[v7655]]
  }
  var v11846 = JAMScript.call(v12069[2], v12069[1], v12069[0]);
  v4073.registerA = v11846;
  return
}
function v319(parentObj$$242) {
  var v4074 = parentObj$$242.memoryReader;
  var v4075 = parentObj$$242.stackPointer;
  var v4076 = parentObj$$242.stackPointer;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12070 = [[parentObj$$242, v4076], v4074, v4074[v4075]]
  }
  var temp_var$$10 = JAMScript.call(v12070[2], v12070[1], v12070[0]);
  parentObj$$242.FZero = temp_var$$10 > 127;
  var v4077 = temp_var$$10 & 64;
  parentObj$$242.FSubtract = v4077 == 64;
  var v4078 = temp_var$$10 & 32;
  parentObj$$242.FHalfCarry = v4078 == 32;
  var v4079 = temp_var$$10 & 16;
  parentObj$$242.FCarry = v4079 == 16;
  var v4080 = parentObj$$242;
  var v10897 = parentObj$$242.stackPointer;
  var v9800 = v10897 + 1;
  var v7657 = v9800 & 65535;
  var v11847 = JAMScript.call(parentObj$$242.memoryRead, parentObj$$242, [v7657]);
  v4080.registerA = v11847;
  var v4081 = parentObj$$242;
  var v9801 = parentObj$$242.stackPointer;
  var v7658 = v9801 + 2;
  v4081.stackPointer = v7658 & 65535;
  return
}
function v318(parentObj$$241) {
  var v4082 = parentObj$$241;
  var v9802 = parentObj$$241.memoryReader;
  var v9803 = parentObj$$241.programCounter;
  var v9804 = parentObj$$241.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12071 = [[parentObj$$241, v9804], v9802, v9802[v9803]]
  }
  var v7659 = JAMScript.call(v12071[2], v12071[1], v12071[0]);
  var v11848 = JAMScript.call(parentObj$$241.memoryHighRead, parentObj$$241, [v7659]);
  v4082.registerA = v11848;
  var v4083 = parentObj$$241;
  var v9805 = parentObj$$241.programCounter;
  var v7660 = v9805 + 1;
  v4083.programCounter = v7660 & 65535;
  return
}
function v317(parentObj$$240) {
  var v4084 = parentObj$$240;
  var v9806 = parentObj$$240.stackPointer;
  var v7661 = v9806 - 1;
  v4084.stackPointer = v7661 & 65535;
  var v4085 = parentObj$$240.memoryWriter;
  var v4086 = parentObj$$240.stackPointer;
  var v4087 = parentObj$$240.stackPointer;
  var v7662 = parentObj$$240.programCounter;
  var v4088 = v7662 >> 8;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12072 = [[parentObj$$240, v4087, v4088], v4085, v4085[v4086]]
  }
  JAMScript.call(v12072[2], v12072[1], v12072[0]);
  var v4089 = parentObj$$240;
  var v9807 = parentObj$$240.stackPointer;
  var v7663 = v9807 - 1;
  v4089.stackPointer = v7663 & 65535;
  var v4090 = parentObj$$240.memoryWriter;
  var v4091 = parentObj$$240.stackPointer;
  var v4092 = parentObj$$240.stackPointer;
  var v7664 = parentObj$$240.programCounter;
  var v4093 = v7664 & 255;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12073 = [[parentObj$$240, v4092, v4093], v4090, v4090[v4091]]
  }
  JAMScript.call(v12073[2], v12073[1], v12073[0]);
  parentObj$$240.programCounter = 40;
  return
}
function v316(parentObj$$239) {
  var v4094 = parentObj$$239;
  var v9808 = v4094.registerA;
  var v10898 = parentObj$$239.memoryReader;
  var v10899 = parentObj$$239.programCounter;
  var v10900 = parentObj$$239.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12074 = [[parentObj$$239, v10900], v10898, v10898[v10899]]
  }
  var v9809 = JAMScript.call(v12074[2], v12074[1], v12074[0]);
  v4094.registerA = v9808 ^ v9809;
  var v4095 = parentObj$$239;
  var v9810 = parentObj$$239.programCounter;
  var v7665 = v9810 + 1;
  v4095.programCounter = v7665 & 65535;
  var v4096 = parentObj$$239;
  var v7666 = parentObj$$239.registerA;
  v4096.FZero = v7666 == 0;
  var v4097 = parentObj$$239;
  var v7667 = parentObj$$239;
  v4097.FSubtract = v7667.FHalfCarry = parentObj$$239.FCarry = false;
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
  var v11570 = parentObj$$235.programCounter;
  var v11336 = v11570 + 1;
  var v10901 = v11336 & 65535;
  var v9811 = JAMScript.call(parentObj$$235.memoryRead, parentObj$$235, [v10901]);
  var v7668 = v9811 << 8;
  var v9812 = parentObj$$235.memoryReader;
  var v9813 = parentObj$$235.programCounter;
  var v9814 = parentObj$$235.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12075 = [[parentObj$$235, v9814], v9812, v9812[v9813]]
  }
  var v7669 = JAMScript.call(v12075[2], v12075[1], v12075[0]);
  var v4098 = v7668 | v7669;
  var v4099 = parentObj$$235.registerA;
  JAMScript.call(parentObj$$235.memoryWrite, parentObj$$235, [v4098, v4099]);
  var v4100 = parentObj$$235;
  var v9815 = parentObj$$235.programCounter;
  var v7670 = v9815 + 2;
  v4100.programCounter = v7670 & 65535;
  return
}
function v311(parentObj$$234) {
  var v4101 = parentObj$$234;
  v4101.programCounter = parentObj$$234.registersHL;
  return
}
function v310(parentObj$$233) {
  var v9816 = parentObj$$233.memoryReader;
  var v9817 = parentObj$$233.programCounter;
  var v9818 = parentObj$$233.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12076 = [[parentObj$$233, v9818], v9816, v9816[v9817]]
  }
  var v7671 = JAMScript.call(v12076[2], v12076[1], v12076[0]);
  var v4102 = v7671 << 24;
  var temp_value2 = v4102 >> 24;
  var v4103 = parentObj$$233;
  var v9819 = parentObj$$233.programCounter;
  var v7672 = v9819 + 1;
  v4103.programCounter = v7672 & 65535;
  var v7673 = parentObj$$233.stackPointer;
  var v4104 = v7673 + temp_value2;
  var temp_value = v4104 & 65535;
  var v7674 = parentObj$$233.stackPointer;
  var v4105 = v7674 ^ temp_value2;
  temp_value2 = v4105 ^ temp_value;
  parentObj$$233.stackPointer = temp_value;
  var v4106 = temp_value2 & 256;
  parentObj$$233.FCarry = v4106 == 256;
  var v4107 = temp_value2 & 16;
  parentObj$$233.FHalfCarry = v4107 == 16;
  var v4108 = parentObj$$233;
  v4108.FZero = parentObj$$233.FSubtract = false;
  return
}
function v309(parentObj$$232) {
  var v4109 = parentObj$$232;
  var v9820 = parentObj$$232.stackPointer;
  var v7675 = v9820 - 1;
  v4109.stackPointer = v7675 & 65535;
  var v4110 = parentObj$$232.memoryWriter;
  var v4111 = parentObj$$232.stackPointer;
  var v4112 = parentObj$$232.stackPointer;
  var v7676 = parentObj$$232.programCounter;
  var v4113 = v7676 >> 8;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12077 = [[parentObj$$232, v4112, v4113], v4110, v4110[v4111]]
  }
  JAMScript.call(v12077[2], v12077[1], v12077[0]);
  var v4114 = parentObj$$232;
  var v9821 = parentObj$$232.stackPointer;
  var v7677 = v9821 - 1;
  v4114.stackPointer = v7677 & 65535;
  var v4115 = parentObj$$232.memoryWriter;
  var v4116 = parentObj$$232.stackPointer;
  var v4117 = parentObj$$232.stackPointer;
  var v7678 = parentObj$$232.programCounter;
  var v4118 = v7678 & 255;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12078 = [[parentObj$$232, v4117, v4118], v4115, v4115[v4116]]
  }
  JAMScript.call(v12078[2], v12078[1], v12078[0]);
  parentObj$$232.programCounter = 32;
  return
}
function v308(parentObj$$231) {
  var v4119 = parentObj$$231;
  var v9822 = v4119.registerA;
  var v10902 = parentObj$$231.memoryReader;
  var v10903 = parentObj$$231.programCounter;
  var v10904 = parentObj$$231.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12079 = [[parentObj$$231, v10904], v10902, v10902[v10903]]
  }
  var v9823 = JAMScript.call(v12079[2], v12079[1], v12079[0]);
  v4119.registerA = v9822 & v9823;
  var v4120 = parentObj$$231;
  var v9824 = parentObj$$231.programCounter;
  var v7679 = v9824 + 1;
  v4120.programCounter = v7679 & 65535;
  var v4121 = parentObj$$231;
  var v7680 = parentObj$$231.registerA;
  v4121.FZero = v7680 == 0;
  parentObj$$231.FHalfCarry = true;
  var v4122 = parentObj$$231;
  v4122.FSubtract = parentObj$$231.FCarry = false;
  return
}
function v307(parentObj$$230) {
  var v4123 = parentObj$$230;
  var v9825 = parentObj$$230.stackPointer;
  var v7681 = v9825 - 1;
  v4123.stackPointer = v7681 & 65535;
  var v4124 = parentObj$$230.memoryWriter;
  var v4125 = parentObj$$230.stackPointer;
  var v4126 = parentObj$$230.stackPointer;
  var v7682 = parentObj$$230.registersHL;
  var v4127 = v7682 >> 8;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12080 = [[parentObj$$230, v4126, v4127], v4124, v4124[v4125]]
  }
  JAMScript.call(v12080[2], v12080[1], v12080[0]);
  var v4128 = parentObj$$230;
  var v9826 = parentObj$$230.stackPointer;
  var v7683 = v9826 - 1;
  v4128.stackPointer = v7683 & 65535;
  var v4129 = parentObj$$230.memoryWriter;
  var v4130 = parentObj$$230.stackPointer;
  var v4131 = parentObj$$230.stackPointer;
  var v7684 = parentObj$$230.registersHL;
  var v4132 = v7684 & 255;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12081 = [[parentObj$$230, v4131, v4132], v4129, v4129[v4130]]
  }
  JAMScript.call(v12081[2], v12081[1], v12081[0]);
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
  var v4133 = parentObj$$227.memoryHighWriter;
  var v4134 = parentObj$$227.registerC;
  var v4135 = parentObj$$227.registerC;
  var v4136 = parentObj$$227.registerA;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12082 = [[parentObj$$227, v4135, v4136], v4133, v4133[v4134]]
  }
  JAMScript.call(v12082[2], v12082[1], v12082[0]);
  return
}
function v303(parentObj$$226) {
  var v4137 = parentObj$$226;
  var v11571 = parentObj$$226.stackPointer;
  var v11337 = v11571 + 1;
  var v10905 = v11337 & 65535;
  var v9827 = JAMScript.call(parentObj$$226.memoryRead, parentObj$$226, [v10905]);
  var v7685 = v9827 << 8;
  var v9828 = parentObj$$226.memoryReader;
  var v9829 = parentObj$$226.stackPointer;
  var v9830 = parentObj$$226.stackPointer;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12083 = [[parentObj$$226, v9830], v9828, v9828[v9829]]
  }
  var v7686 = JAMScript.call(v12083[2], v12083[1], v12083[0]);
  v4137.registersHL = v7685 | v7686;
  var v4138 = parentObj$$226;
  var v9831 = parentObj$$226.stackPointer;
  var v7687 = v9831 + 2;
  v4138.stackPointer = v7687 & 65535;
  return
}
function v302(parentObj$$225) {
  var v7688 = parentObj$$225.memoryReader;
  var v7689 = parentObj$$225.programCounter;
  var v7690 = parentObj$$225.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12084 = [[parentObj$$225, v7690], v7688, v7688[v7689]]
  }
  var v4139 = JAMScript.call(v12084[2], v12084[1], v12084[0]);
  var v4140 = parentObj$$225.registerA;
  JAMScript.call(parentObj$$225.memoryHighWrite, parentObj$$225, [v4139, v4140]);
  var v4141 = parentObj$$225;
  var v9832 = parentObj$$225.programCounter;
  var v7691 = v9832 + 1;
  v4141.programCounter = v7691 & 65535;
  return
}
function v301(parentObj$$224) {
  var v4142 = parentObj$$224;
  var v9833 = parentObj$$224.stackPointer;
  var v7692 = v9833 - 1;
  v4142.stackPointer = v7692 & 65535;
  var v4143 = parentObj$$224.memoryWriter;
  var v4144 = parentObj$$224.stackPointer;
  var v4145 = parentObj$$224.stackPointer;
  var v7693 = parentObj$$224.programCounter;
  var v4146 = v7693 >> 8;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12085 = [[parentObj$$224, v4145, v4146], v4143, v4143[v4144]]
  }
  JAMScript.call(v12085[2], v12085[1], v12085[0]);
  var v4147 = parentObj$$224;
  var v9834 = parentObj$$224.stackPointer;
  var v7694 = v9834 - 1;
  v4147.stackPointer = v7694 & 65535;
  var v4148 = parentObj$$224.memoryWriter;
  var v4149 = parentObj$$224.stackPointer;
  var v4150 = parentObj$$224.stackPointer;
  var v7695 = parentObj$$224.programCounter;
  var v4151 = v7695 & 255;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12086 = [[parentObj$$224, v4150, v4151], v4148, v4148[v4149]]
  }
  JAMScript.call(v12086[2], v12086[1], v12086[0]);
  parentObj$$224.programCounter = 24;
  return
}
function v300(parentObj$$223) {
  var v4152 = parentObj$$223.memoryReader;
  var v4153 = parentObj$$223.programCounter;
  var v4154 = parentObj$$223.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12087 = [[parentObj$$223, v4154], v4152, v4152[v4153]]
  }
  var temp_var$$9 = JAMScript.call(v12087[2], v12087[1], v12087[0]);
  var v4155 = parentObj$$223;
  var v9835 = parentObj$$223.programCounter;
  var v7696 = v9835 + 1;
  v4155.programCounter = v7696 & 65535;
  var v7697 = parentObj$$223.registerA;
  var v4156 = v7697 - temp_var$$9;
  var v7698;
  var v9836 = parentObj$$223.FCarry;
  if(v9836) {
    v7698 = 1
  }else {
    v7698 = 0
  }
  var v4157 = v7698;
  var dirtySum$$42 = v4156 - v4157;
  var v4158 = parentObj$$223;
  var v11338 = parentObj$$223.registerA;
  var v10906 = v11338 & 15;
  var v10907 = temp_var$$9 & 15;
  var v9837 = v10906 - v10907;
  var v10908;
  var v11339 = parentObj$$223.FCarry;
  if(v11339) {
    v10908 = 1
  }else {
    v10908 = 0
  }
  var v9838 = v10908;
  var v7699 = v9837 - v9838;
  v4158.FHalfCarry = v7699 < 0;
  parentObj$$223.FCarry = dirtySum$$42 < 0;
  parentObj$$223.registerA = dirtySum$$42 & 255;
  var v4159 = parentObj$$223;
  var v7700 = parentObj$$223.registerA;
  v4159.FZero = v7700 == 0;
  parentObj$$223.FSubtract = true;
  return
}
function v299(parentObj$$222) {
  cout("Illegal op code 0xDD called, pausing emulation.", 2);
  pause();
  return
}
function v298(parentObj$$221) {
  var v4174 = parentObj$$221.FCarry;
  if(v4174) {
    var v11340 = parentObj$$221.programCounter;
    var v10909 = v11340 + 1;
    var v9839 = v10909 & 65535;
    var v7701 = JAMScript.call(parentObj$$221.memoryRead, parentObj$$221, [v9839]);
    var v4160 = v7701 << 8;
    var v7702 = parentObj$$221.memoryReader;
    var v7703 = parentObj$$221.programCounter;
    var v7704 = parentObj$$221.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12088 = [[parentObj$$221, v7704], v7702, v7702[v7703]]
    }
    var v4161 = JAMScript.call(v12088[2], v12088[1], v12088[0]);
    var temp_pc$$4 = v4160 | v4161;
    var v4162 = parentObj$$221;
    var v9840 = parentObj$$221.programCounter;
    var v7705 = v9840 + 2;
    v4162.programCounter = v7705 & 65535;
    var v4163 = parentObj$$221;
    var v9841 = parentObj$$221.stackPointer;
    var v7706 = v9841 - 1;
    v4163.stackPointer = v7706 & 65535;
    var v4164 = parentObj$$221.memoryWriter;
    var v4165 = parentObj$$221.stackPointer;
    var v4166 = parentObj$$221.stackPointer;
    var v7707 = parentObj$$221.programCounter;
    var v4167 = v7707 >> 8;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12089 = [[parentObj$$221, v4166, v4167], v4164, v4164[v4165]]
    }
    JAMScript.call(v12089[2], v12089[1], v12089[0]);
    var v4168 = parentObj$$221;
    var v9842 = parentObj$$221.stackPointer;
    var v7708 = v9842 - 1;
    v4168.stackPointer = v7708 & 65535;
    var v4169 = parentObj$$221.memoryWriter;
    var v4170 = parentObj$$221.stackPointer;
    var v4171 = parentObj$$221.stackPointer;
    var v7709 = parentObj$$221.programCounter;
    var v4172 = v7709 & 255;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12090 = [[parentObj$$221, v4171, v4172], v4169, v4169[v4170]]
    }
    JAMScript.call(v12090[2], v12090[1], v12090[0]);
    parentObj$$221.programCounter = temp_pc$$4;
    var v7710 = parentObj$$221;
    var v9843 = parentObj$$221.CPUTicks;
    v7710.CPUTicks = v9843 + 12
  }else {
    var v4173 = parentObj$$221;
    var v9844 = parentObj$$221.programCounter;
    var v7711 = v9844 + 2;
    v4173.programCounter = v7711 & 65535
  }
  return
}
function v297(parentObj$$220) {
  cout("Illegal op code 0xDB called, pausing emulation.", 2);
  pause();
  return
}
function v296(parentObj$$219) {
  var v4177 = parentObj$$219.FCarry;
  if(v4177) {
    var v4175 = parentObj$$219;
    var v11572 = parentObj$$219.programCounter;
    var v11341 = v11572 + 1;
    var v10910 = v11341 & 65535;
    var v9845 = JAMScript.call(parentObj$$219.memoryRead, parentObj$$219, [v10910]);
    var v7712 = v9845 << 8;
    var v9846 = parentObj$$219.memoryReader;
    var v9847 = parentObj$$219.programCounter;
    var v9848 = parentObj$$219.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12091 = [[parentObj$$219, v9848], v9846, v9846[v9847]]
    }
    var v7713 = JAMScript.call(v12091[2], v12091[1], v12091[0]);
    v4175.programCounter = v7712 | v7713;
    var v7714 = parentObj$$219;
    var v9849 = parentObj$$219.CPUTicks;
    v7714.CPUTicks = v9849 + 4
  }else {
    var v4176 = parentObj$$219;
    var v9850 = parentObj$$219.programCounter;
    var v7715 = v9850 + 2;
    v4176.programCounter = v7715 & 65535
  }
  return
}
function v295(parentObj$$218) {
  var v4178 = parentObj$$218;
  var v11573 = parentObj$$218.stackPointer;
  var v11342 = v11573 + 1;
  var v10911 = v11342 & 65535;
  var v9851 = JAMScript.call(parentObj$$218.memoryRead, parentObj$$218, [v10911]);
  var v7716 = v9851 << 8;
  var v9852 = parentObj$$218.memoryReader;
  var v9853 = parentObj$$218.stackPointer;
  var v9854 = parentObj$$218.stackPointer;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12092 = [[parentObj$$218, v9854], v9852, v9852[v9853]]
  }
  var v7717 = JAMScript.call(v12092[2], v12092[1], v12092[0]);
  v4178.programCounter = v7716 | v7717;
  var v4179 = parentObj$$218;
  var v9855 = parentObj$$218.stackPointer;
  var v7718 = v9855 + 2;
  v4179.stackPointer = v7718 & 65535;
  var v4180 = parentObj$$218;
  var v7719;
  var v11343 = parentObj$$218.IRQEnableDelay;
  var v10912 = v11343 == 2;
  var v11345 = !v10912;
  if(v11345) {
    var v11574 = parentObj$$218.memoryReader;
    var v11575 = parentObj$$218.programCounter;
    var v11576 = parentObj$$218.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12093 = [[parentObj$$218, v11576], v11574, v11574[v11575]]
    }
    var v11344 = JAMScript.call(v12093[2], v12093[1], v12093[0]);
    v10912 = v11344 == 118
  }
  var v9856 = v10912;
  if(v9856) {
    v7719 = 1
  }else {
    v7719 = 2
  }
  v4180.IRQEnableDelay = v7719;
  return
}
function v294(parentObj$$217) {
  var v4183 = parentObj$$217.FCarry;
  if(v4183) {
    var v4181 = parentObj$$217;
    var v11577 = parentObj$$217.stackPointer;
    var v11346 = v11577 + 1;
    var v10913 = v11346 & 65535;
    var v9857 = JAMScript.call(parentObj$$217.memoryRead, parentObj$$217, [v10913]);
    var v7720 = v9857 << 8;
    var v9858 = parentObj$$217.memoryReader;
    var v9859 = parentObj$$217.stackPointer;
    var v9860 = parentObj$$217.stackPointer;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12094 = [[parentObj$$217, v9860], v9858, v9858[v9859]]
    }
    var v7721 = JAMScript.call(v12094[2], v12094[1], v12094[0]);
    v4181.programCounter = v7720 | v7721;
    var v4182 = parentObj$$217;
    var v9861 = parentObj$$217.stackPointer;
    var v7722 = v9861 + 2;
    v4182.stackPointer = v7722 & 65535;
    var v7723 = parentObj$$217;
    var v9862 = parentObj$$217.CPUTicks;
    v7723.CPUTicks = v9862 + 12
  }
  return
}
function v293(parentObj$$216) {
  var v4184 = parentObj$$216;
  var v9863 = parentObj$$216.stackPointer;
  var v7724 = v9863 - 1;
  v4184.stackPointer = v7724 & 65535;
  var v4185 = parentObj$$216.memoryWriter;
  var v4186 = parentObj$$216.stackPointer;
  var v4187 = parentObj$$216.stackPointer;
  var v7725 = parentObj$$216.programCounter;
  var v4188 = v7725 >> 8;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12095 = [[parentObj$$216, v4187, v4188], v4185, v4185[v4186]]
  }
  JAMScript.call(v12095[2], v12095[1], v12095[0]);
  var v4189 = parentObj$$216;
  var v9864 = parentObj$$216.stackPointer;
  var v7726 = v9864 - 1;
  v4189.stackPointer = v7726 & 65535;
  var v4190 = parentObj$$216.memoryWriter;
  var v4191 = parentObj$$216.stackPointer;
  var v4192 = parentObj$$216.stackPointer;
  var v7727 = parentObj$$216.programCounter;
  var v4193 = v7727 & 255;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12096 = [[parentObj$$216, v4192, v4193], v4190, v4190[v4191]]
  }
  JAMScript.call(v12096[2], v12096[1], v12096[0]);
  parentObj$$216.programCounter = 16;
  return
}
function v292(parentObj$$215) {
  var v4194 = parentObj$$215.registerA;
  var v7728 = parentObj$$215.memoryReader;
  var v7729 = parentObj$$215.programCounter;
  var v7730 = parentObj$$215.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12097 = [[parentObj$$215, v7730], v7728, v7728[v7729]]
  }
  var v4195 = JAMScript.call(v12097[2], v12097[1], v12097[0]);
  var dirtySum$$41 = v4194 - v4195;
  var v4196 = parentObj$$215;
  var v9865 = parentObj$$215.programCounter;
  var v7731 = v9865 + 1;
  v4196.programCounter = v7731 & 65535;
  var v4197 = parentObj$$215;
  var v9866 = parentObj$$215.registerA;
  var v7732 = v9866 & 15;
  var v7733 = dirtySum$$41 & 15;
  v4197.FHalfCarry = v7732 < v7733;
  parentObj$$215.FCarry = dirtySum$$41 < 0;
  parentObj$$215.registerA = dirtySum$$41 & 255;
  parentObj$$215.FZero = dirtySum$$41 == 0;
  parentObj$$215.FSubtract = true;
  return
}
function v291(parentObj$$214) {
  var v4198 = parentObj$$214;
  var v9867 = parentObj$$214.stackPointer;
  var v7734 = v9867 - 1;
  v4198.stackPointer = v7734 & 65535;
  var v4199 = parentObj$$214.memoryWriter;
  var v4200 = parentObj$$214.stackPointer;
  var v4201 = parentObj$$214.stackPointer;
  var v4202 = parentObj$$214.registerD;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12098 = [[parentObj$$214, v4201, v4202], v4199, v4199[v4200]]
  }
  JAMScript.call(v12098[2], v12098[1], v12098[0]);
  var v4203 = parentObj$$214;
  var v9868 = parentObj$$214.stackPointer;
  var v7735 = v9868 - 1;
  v4203.stackPointer = v7735 & 65535;
  var v4204 = parentObj$$214.memoryWriter;
  var v4205 = parentObj$$214.stackPointer;
  var v4206 = parentObj$$214.stackPointer;
  var v4207 = parentObj$$214.registerE;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12099 = [[parentObj$$214, v4206, v4207], v4204, v4204[v4205]]
  }
  JAMScript.call(v12099[2], v12099[1], v12099[0]);
  return
}
function v290(parentObj$$213) {
  var v7736 = parentObj$$213.FCarry;
  var v4222 = !v7736;
  if(v4222) {
    var v11347 = parentObj$$213.programCounter;
    var v10914 = v11347 + 1;
    var v9869 = v10914 & 65535;
    var v7737 = JAMScript.call(parentObj$$213.memoryRead, parentObj$$213, [v9869]);
    var v4208 = v7737 << 8;
    var v7738 = parentObj$$213.memoryReader;
    var v7739 = parentObj$$213.programCounter;
    var v7740 = parentObj$$213.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12100 = [[parentObj$$213, v7740], v7738, v7738[v7739]]
    }
    var v4209 = JAMScript.call(v12100[2], v12100[1], v12100[0]);
    var temp_pc$$3 = v4208 | v4209;
    var v4210 = parentObj$$213;
    var v9870 = parentObj$$213.programCounter;
    var v7741 = v9870 + 2;
    v4210.programCounter = v7741 & 65535;
    var v4211 = parentObj$$213;
    var v9871 = parentObj$$213.stackPointer;
    var v7742 = v9871 - 1;
    v4211.stackPointer = v7742 & 65535;
    var v4212 = parentObj$$213.memoryWriter;
    var v4213 = parentObj$$213.stackPointer;
    var v4214 = parentObj$$213.stackPointer;
    var v7743 = parentObj$$213.programCounter;
    var v4215 = v7743 >> 8;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12101 = [[parentObj$$213, v4214, v4215], v4212, v4212[v4213]]
    }
    JAMScript.call(v12101[2], v12101[1], v12101[0]);
    var v4216 = parentObj$$213;
    var v9872 = parentObj$$213.stackPointer;
    var v7744 = v9872 - 1;
    v4216.stackPointer = v7744 & 65535;
    var v4217 = parentObj$$213.memoryWriter;
    var v4218 = parentObj$$213.stackPointer;
    var v4219 = parentObj$$213.stackPointer;
    var v7745 = parentObj$$213.programCounter;
    var v4220 = v7745 & 255;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12102 = [[parentObj$$213, v4219, v4220], v4217, v4217[v4218]]
    }
    JAMScript.call(v12102[2], v12102[1], v12102[0]);
    parentObj$$213.programCounter = temp_pc$$3;
    var v7746 = parentObj$$213;
    var v9873 = parentObj$$213.CPUTicks;
    v7746.CPUTicks = v9873 + 12
  }else {
    var v4221 = parentObj$$213;
    var v9874 = parentObj$$213.programCounter;
    var v7747 = v9874 + 2;
    v4221.programCounter = v7747 & 65535
  }
  return
}
function v289(parentObj$$212) {
  cout("Illegal op code 0xD3 called, pausing emulation.", 2);
  pause();
  return
}
function v288(parentObj$$211) {
  var v7748 = parentObj$$211.FCarry;
  var v4225 = !v7748;
  if(v4225) {
    var v4223 = parentObj$$211;
    var v11578 = parentObj$$211.programCounter;
    var v11348 = v11578 + 1;
    var v10915 = v11348 & 65535;
    var v9875 = JAMScript.call(parentObj$$211.memoryRead, parentObj$$211, [v10915]);
    var v7749 = v9875 << 8;
    var v9876 = parentObj$$211.memoryReader;
    var v9877 = parentObj$$211.programCounter;
    var v9878 = parentObj$$211.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12103 = [[parentObj$$211, v9878], v9876, v9876[v9877]]
    }
    var v7750 = JAMScript.call(v12103[2], v12103[1], v12103[0]);
    v4223.programCounter = v7749 | v7750;
    var v7751 = parentObj$$211;
    var v9879 = parentObj$$211.CPUTicks;
    v7751.CPUTicks = v9879 + 4
  }else {
    var v4224 = parentObj$$211;
    var v9880 = parentObj$$211.programCounter;
    var v7752 = v9880 + 2;
    v4224.programCounter = v7752 & 65535
  }
  return
}
function v287(parentObj$$210) {
  var v4226 = parentObj$$210;
  var v7753 = parentObj$$210.memoryReader;
  var v7754 = parentObj$$210.stackPointer;
  var v7755 = parentObj$$210.stackPointer;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12104 = [[parentObj$$210, v7755], v7753, v7753[v7754]]
  }
  var v11849 = JAMScript.call(v12104[2], v12104[1], v12104[0]);
  v4226.registerE = v11849;
  var v4227 = parentObj$$210;
  var v10916 = parentObj$$210.stackPointer;
  var v9881 = v10916 + 1;
  var v7756 = v9881 & 65535;
  var v11850 = JAMScript.call(parentObj$$210.memoryRead, parentObj$$210, [v7756]);
  v4227.registerD = v11850;
  var v4228 = parentObj$$210;
  var v9882 = parentObj$$210.stackPointer;
  var v7757 = v9882 + 2;
  v4228.stackPointer = v7757 & 65535;
  return
}
function v286(parentObj$$209) {
  var v7758 = parentObj$$209.FCarry;
  var v4231 = !v7758;
  if(v4231) {
    var v4229 = parentObj$$209;
    var v11579 = parentObj$$209.stackPointer;
    var v11349 = v11579 + 1;
    var v10917 = v11349 & 65535;
    var v9883 = JAMScript.call(parentObj$$209.memoryRead, parentObj$$209, [v10917]);
    var v7759 = v9883 << 8;
    var v9884 = parentObj$$209.memoryReader;
    var v9885 = parentObj$$209.stackPointer;
    var v9886 = parentObj$$209.stackPointer;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12105 = [[parentObj$$209, v9886], v9884, v9884[v9885]]
    }
    var v7760 = JAMScript.call(v12105[2], v12105[1], v12105[0]);
    v4229.programCounter = v7759 | v7760;
    var v4230 = parentObj$$209;
    var v9887 = parentObj$$209.stackPointer;
    var v7761 = v9887 + 2;
    v4230.stackPointer = v7761 & 65535;
    var v7762 = parentObj$$209;
    var v9888 = parentObj$$209.CPUTicks;
    v7762.CPUTicks = v9888 + 12
  }
  return
}
function v285(parentObj$$208) {
  var v4232 = parentObj$$208;
  var v9889 = parentObj$$208.stackPointer;
  var v7763 = v9889 - 1;
  v4232.stackPointer = v7763 & 65535;
  var v4233 = parentObj$$208.memoryWriter;
  var v4234 = parentObj$$208.stackPointer;
  var v4235 = parentObj$$208.stackPointer;
  var v7764 = parentObj$$208.programCounter;
  var v4236 = v7764 >> 8;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12106 = [[parentObj$$208, v4235, v4236], v4233, v4233[v4234]]
  }
  JAMScript.call(v12106[2], v12106[1], v12106[0]);
  var v4237 = parentObj$$208;
  var v9890 = parentObj$$208.stackPointer;
  var v7765 = v9890 - 1;
  v4237.stackPointer = v7765 & 65535;
  var v4238 = parentObj$$208.memoryWriter;
  var v4239 = parentObj$$208.stackPointer;
  var v4240 = parentObj$$208.stackPointer;
  var v7766 = parentObj$$208.programCounter;
  var v4241 = v7766 & 255;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12107 = [[parentObj$$208, v4240, v4241], v4238, v4238[v4239]]
  }
  JAMScript.call(v12107[2], v12107[1], v12107[0]);
  parentObj$$208.programCounter = 8;
  return
}
function v284(parentObj$$207) {
  var v4242 = parentObj$$207.memoryReader;
  var v4243 = parentObj$$207.programCounter;
  var v4244 = parentObj$$207.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12108 = [[parentObj$$207, v4244], v4242, v4242[v4243]]
  }
  var tempValue$$3 = JAMScript.call(v12108[2], v12108[1], v12108[0]);
  var v4245 = parentObj$$207;
  var v9891 = parentObj$$207.programCounter;
  var v7767 = v9891 + 1;
  v4245.programCounter = v7767 & 65535;
  var v7768 = parentObj$$207.registerA;
  var v4246 = v7768 + tempValue$$3;
  var v7769;
  var v9892 = parentObj$$207.FCarry;
  if(v9892) {
    v7769 = 1
  }else {
    v7769 = 0
  }
  var v4247 = v7769;
  var dirtySum$$40 = v4246 + v4247;
  var v4248 = parentObj$$207;
  var v11350 = parentObj$$207.registerA;
  var v10918 = v11350 & 15;
  var v10919 = tempValue$$3 & 15;
  var v9893 = v10918 + v10919;
  var v10920;
  var v11351 = parentObj$$207.FCarry;
  if(v11351) {
    v10920 = 1
  }else {
    v10920 = 0
  }
  var v9894 = v10920;
  var v7770 = v9893 + v9894;
  v4248.FHalfCarry = v7770 > 15;
  parentObj$$207.FCarry = dirtySum$$40 > 255;
  parentObj$$207.registerA = dirtySum$$40 & 255;
  var v4249 = parentObj$$207;
  var v7771 = parentObj$$207.registerA;
  v4249.FZero = v7771 == 0;
  parentObj$$207.FSubtract = false;
  return
}
function v283(parentObj$$206) {
  var v11352 = parentObj$$206.programCounter;
  var v10921 = v11352 + 1;
  var v9895 = v10921 & 65535;
  var v7772 = JAMScript.call(parentObj$$206.memoryRead, parentObj$$206, [v9895]);
  var v4250 = v7772 << 8;
  var v7773 = parentObj$$206.memoryReader;
  var v7774 = parentObj$$206.programCounter;
  var v7775 = parentObj$$206.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12109 = [[parentObj$$206, v7775], v7773, v7773[v7774]]
  }
  var v4251 = JAMScript.call(v12109[2], v12109[1], v12109[0]);
  var temp_pc$$2 = v4250 | v4251;
  var v4252 = parentObj$$206;
  var v9896 = parentObj$$206.programCounter;
  var v7776 = v9896 + 2;
  v4252.programCounter = v7776 & 65535;
  var v4253 = parentObj$$206;
  var v9897 = parentObj$$206.stackPointer;
  var v7777 = v9897 - 1;
  v4253.stackPointer = v7777 & 65535;
  var v4254 = parentObj$$206.memoryWriter;
  var v4255 = parentObj$$206.stackPointer;
  var v4256 = parentObj$$206.stackPointer;
  var v7778 = parentObj$$206.programCounter;
  var v4257 = v7778 >> 8;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12110 = [[parentObj$$206, v4256, v4257], v4254, v4254[v4255]]
  }
  JAMScript.call(v12110[2], v12110[1], v12110[0]);
  var v4258 = parentObj$$206;
  var v9898 = parentObj$$206.stackPointer;
  var v7779 = v9898 - 1;
  v4258.stackPointer = v7779 & 65535;
  var v4259 = parentObj$$206.memoryWriter;
  var v4260 = parentObj$$206.stackPointer;
  var v4261 = parentObj$$206.stackPointer;
  var v7780 = parentObj$$206.programCounter;
  var v4262 = v7780 & 255;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12111 = [[parentObj$$206, v4261, v4262], v4259, v4259[v4260]]
  }
  JAMScript.call(v12111[2], v12111[1], v12111[0]);
  parentObj$$206.programCounter = temp_pc$$2;
  return
}
function v282(parentObj$$205) {
  var v4277 = parentObj$$205.FZero;
  if(v4277) {
    var v11353 = parentObj$$205.programCounter;
    var v10922 = v11353 + 1;
    var v9899 = v10922 & 65535;
    var v7781 = JAMScript.call(parentObj$$205.memoryRead, parentObj$$205, [v9899]);
    var v4263 = v7781 << 8;
    var v7782 = parentObj$$205.memoryReader;
    var v7783 = parentObj$$205.programCounter;
    var v7784 = parentObj$$205.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12112 = [[parentObj$$205, v7784], v7782, v7782[v7783]]
    }
    var v4264 = JAMScript.call(v12112[2], v12112[1], v12112[0]);
    var temp_pc$$1 = v4263 | v4264;
    var v4265 = parentObj$$205;
    var v9900 = parentObj$$205.programCounter;
    var v7785 = v9900 + 2;
    v4265.programCounter = v7785 & 65535;
    var v4266 = parentObj$$205;
    var v9901 = parentObj$$205.stackPointer;
    var v7786 = v9901 - 1;
    v4266.stackPointer = v7786 & 65535;
    var v4267 = parentObj$$205.memoryWriter;
    var v4268 = parentObj$$205.stackPointer;
    var v4269 = parentObj$$205.stackPointer;
    var v7787 = parentObj$$205.programCounter;
    var v4270 = v7787 >> 8;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12113 = [[parentObj$$205, v4269, v4270], v4267, v4267[v4268]]
    }
    JAMScript.call(v12113[2], v12113[1], v12113[0]);
    var v4271 = parentObj$$205;
    var v9902 = parentObj$$205.stackPointer;
    var v7788 = v9902 - 1;
    v4271.stackPointer = v7788 & 65535;
    var v4272 = parentObj$$205.memoryWriter;
    var v4273 = parentObj$$205.stackPointer;
    var v4274 = parentObj$$205.stackPointer;
    var v7789 = parentObj$$205.programCounter;
    var v4275 = v7789 & 255;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12114 = [[parentObj$$205, v4274, v4275], v4272, v4272[v4273]]
    }
    JAMScript.call(v12114[2], v12114[1], v12114[0]);
    parentObj$$205.programCounter = temp_pc$$1;
    var v7790 = parentObj$$205;
    var v9903 = parentObj$$205.CPUTicks;
    v7790.CPUTicks = v9903 + 12
  }else {
    var v4276 = parentObj$$205;
    var v9904 = parentObj$$205.programCounter;
    var v7791 = v9904 + 2;
    v4276.programCounter = v7791 & 65535
  }
  return
}
function v281(parentObj$$204) {
  var v4278 = parentObj$$204.memoryReader;
  var v4279 = parentObj$$204.programCounter;
  var v4280 = parentObj$$204.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12115 = [[parentObj$$204, v4280], v4278, v4278[v4279]]
  }
  var opcode = JAMScript.call(v12115[2], v12115[1], v12115[0]);
  var v4281 = parentObj$$204;
  var v9905 = parentObj$$204.programCounter;
  var v7792 = v9905 + 1;
  v4281.programCounter = v7792 & 65535;
  var v4282 = parentObj$$204;
  var v9906 = v4282.CPUTicks;
  var v10923 = parentObj$$204.SecondaryTICKTable;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v9907 = v10923[opcode]
  }
  v4282.CPUTicks = v9906 + v9907;
  var v4283 = parentObj$$204.CBOPCODE;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12116 = [[parentObj$$204], v4283, v4283[opcode]]
  }
  JAMScript.call(v12116[2], v12116[1], v12116[0]);
  return
}
function v280(parentObj$$203) {
  var v4286 = parentObj$$203.FZero;
  if(v4286) {
    var v4284 = parentObj$$203;
    var v11580 = parentObj$$203.programCounter;
    var v11354 = v11580 + 1;
    var v10924 = v11354 & 65535;
    var v9908 = JAMScript.call(parentObj$$203.memoryRead, parentObj$$203, [v10924]);
    var v7793 = v9908 << 8;
    var v9909 = parentObj$$203.memoryReader;
    var v9910 = parentObj$$203.programCounter;
    var v9911 = parentObj$$203.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12117 = [[parentObj$$203, v9911], v9909, v9909[v9910]]
    }
    var v7794 = JAMScript.call(v12117[2], v12117[1], v12117[0]);
    v4284.programCounter = v7793 | v7794;
    var v7795 = parentObj$$203;
    var v9912 = parentObj$$203.CPUTicks;
    v7795.CPUTicks = v9912 + 4
  }else {
    var v4285 = parentObj$$203;
    var v9913 = parentObj$$203.programCounter;
    var v7796 = v9913 + 2;
    v4285.programCounter = v7796 & 65535
  }
  return
}
function v279(parentObj$$202) {
  var v4287 = parentObj$$202;
  var v11581 = parentObj$$202.stackPointer;
  var v11355 = v11581 + 1;
  var v10925 = v11355 & 65535;
  var v9914 = JAMScript.call(parentObj$$202.memoryRead, parentObj$$202, [v10925]);
  var v7797 = v9914 << 8;
  var v9915 = parentObj$$202.memoryReader;
  var v9916 = parentObj$$202.stackPointer;
  var v9917 = parentObj$$202.stackPointer;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12118 = [[parentObj$$202, v9917], v9915, v9915[v9916]]
  }
  var v7798 = JAMScript.call(v12118[2], v12118[1], v12118[0]);
  v4287.programCounter = v7797 | v7798;
  var v4288 = parentObj$$202;
  var v9918 = parentObj$$202.stackPointer;
  var v7799 = v9918 + 2;
  v4288.stackPointer = v7799 & 65535;
  return
}
function v278(parentObj$$201) {
  var v4291 = parentObj$$201.FZero;
  if(v4291) {
    var v4289 = parentObj$$201;
    var v11582 = parentObj$$201.stackPointer;
    var v11356 = v11582 + 1;
    var v10926 = v11356 & 65535;
    var v9919 = JAMScript.call(parentObj$$201.memoryRead, parentObj$$201, [v10926]);
    var v7800 = v9919 << 8;
    var v9920 = parentObj$$201.memoryReader;
    var v9921 = parentObj$$201.stackPointer;
    var v9922 = parentObj$$201.stackPointer;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12119 = [[parentObj$$201, v9922], v9920, v9920[v9921]]
    }
    var v7801 = JAMScript.call(v12119[2], v12119[1], v12119[0]);
    v4289.programCounter = v7800 | v7801;
    var v4290 = parentObj$$201;
    var v9923 = parentObj$$201.stackPointer;
    var v7802 = v9923 + 2;
    v4290.stackPointer = v7802 & 65535;
    var v7803 = parentObj$$201;
    var v9924 = parentObj$$201.CPUTicks;
    v7803.CPUTicks = v9924 + 12
  }
  return
}
function v277(parentObj$$200) {
  var v4292 = parentObj$$200;
  var v9925 = parentObj$$200.stackPointer;
  var v7804 = v9925 - 1;
  v4292.stackPointer = v7804 & 65535;
  var v4293 = parentObj$$200.memoryWriter;
  var v4294 = parentObj$$200.stackPointer;
  var v4295 = parentObj$$200.stackPointer;
  var v7805 = parentObj$$200.programCounter;
  var v4296 = v7805 >> 8;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12120 = [[parentObj$$200, v4295, v4296], v4293, v4293[v4294]]
  }
  JAMScript.call(v12120[2], v12120[1], v12120[0]);
  var v4297 = parentObj$$200;
  var v9926 = parentObj$$200.stackPointer;
  var v7806 = v9926 - 1;
  v4297.stackPointer = v7806 & 65535;
  var v4298 = parentObj$$200.memoryWriter;
  var v4299 = parentObj$$200.stackPointer;
  var v4300 = parentObj$$200.stackPointer;
  var v7807 = parentObj$$200.programCounter;
  var v4301 = v7807 & 255;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12121 = [[parentObj$$200, v4300, v4301], v4298, v4298[v4299]]
  }
  JAMScript.call(v12121[2], v12121[1], v12121[0]);
  parentObj$$200.programCounter = 0;
  return
}
function v276(parentObj$$199) {
  var v4302 = parentObj$$199.registerA;
  var v7808 = parentObj$$199.memoryReader;
  var v7809 = parentObj$$199.programCounter;
  var v7810 = parentObj$$199.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12122 = [[parentObj$$199, v7810], v7808, v7808[v7809]]
  }
  var v4303 = JAMScript.call(v12122[2], v12122[1], v12122[0]);
  var dirtySum$$39 = v4302 + v4303;
  var v4304 = parentObj$$199;
  var v9927 = parentObj$$199.programCounter;
  var v7811 = v9927 + 1;
  v4304.programCounter = v7811 & 65535;
  var v4305 = parentObj$$199;
  var v7812 = dirtySum$$39 & 15;
  var v9928 = parentObj$$199.registerA;
  var v7813 = v9928 & 15;
  v4305.FHalfCarry = v7812 < v7813;
  parentObj$$199.FCarry = dirtySum$$39 > 255;
  parentObj$$199.registerA = dirtySum$$39 & 255;
  var v4306 = parentObj$$199;
  var v7814 = parentObj$$199.registerA;
  v4306.FZero = v7814 == 0;
  parentObj$$199.FSubtract = false;
  return
}
function v275(parentObj$$198) {
  var v4307 = parentObj$$198;
  var v9929 = parentObj$$198.stackPointer;
  var v7815 = v9929 - 1;
  v4307.stackPointer = v7815 & 65535;
  var v4308 = parentObj$$198.memoryWriter;
  var v4309 = parentObj$$198.stackPointer;
  var v4310 = parentObj$$198.stackPointer;
  var v4311 = parentObj$$198.registerB;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12123 = [[parentObj$$198, v4310, v4311], v4308, v4308[v4309]]
  }
  JAMScript.call(v12123[2], v12123[1], v12123[0]);
  var v4312 = parentObj$$198;
  var v9930 = parentObj$$198.stackPointer;
  var v7816 = v9930 - 1;
  v4312.stackPointer = v7816 & 65535;
  var v4313 = parentObj$$198.memoryWriter;
  var v4314 = parentObj$$198.stackPointer;
  var v4315 = parentObj$$198.stackPointer;
  var v4316 = parentObj$$198.registerC;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12124 = [[parentObj$$198, v4315, v4316], v4313, v4313[v4314]]
  }
  JAMScript.call(v12124[2], v12124[1], v12124[0]);
  return
}
function v274(parentObj$$197) {
  var v7817 = parentObj$$197.FZero;
  var v4331 = !v7817;
  if(v4331) {
    var v11357 = parentObj$$197.programCounter;
    var v10927 = v11357 + 1;
    var v9931 = v10927 & 65535;
    var v7818 = JAMScript.call(parentObj$$197.memoryRead, parentObj$$197, [v9931]);
    var v4317 = v7818 << 8;
    var v7819 = parentObj$$197.memoryReader;
    var v7820 = parentObj$$197.programCounter;
    var v7821 = parentObj$$197.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12125 = [[parentObj$$197, v7821], v7819, v7819[v7820]]
    }
    var v4318 = JAMScript.call(v12125[2], v12125[1], v12125[0]);
    var temp_pc = v4317 | v4318;
    var v4319 = parentObj$$197;
    var v9932 = parentObj$$197.programCounter;
    var v7822 = v9932 + 2;
    v4319.programCounter = v7822 & 65535;
    var v4320 = parentObj$$197;
    var v9933 = parentObj$$197.stackPointer;
    var v7823 = v9933 - 1;
    v4320.stackPointer = v7823 & 65535;
    var v4321 = parentObj$$197.memoryWriter;
    var v4322 = parentObj$$197.stackPointer;
    var v4323 = parentObj$$197.stackPointer;
    var v7824 = parentObj$$197.programCounter;
    var v4324 = v7824 >> 8;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12126 = [[parentObj$$197, v4323, v4324], v4321, v4321[v4322]]
    }
    JAMScript.call(v12126[2], v12126[1], v12126[0]);
    var v4325 = parentObj$$197;
    var v9934 = parentObj$$197.stackPointer;
    var v7825 = v9934 - 1;
    v4325.stackPointer = v7825 & 65535;
    var v4326 = parentObj$$197.memoryWriter;
    var v4327 = parentObj$$197.stackPointer;
    var v4328 = parentObj$$197.stackPointer;
    var v7826 = parentObj$$197.programCounter;
    var v4329 = v7826 & 255;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12127 = [[parentObj$$197, v4328, v4329], v4326, v4326[v4327]]
    }
    JAMScript.call(v12127[2], v12127[1], v12127[0]);
    parentObj$$197.programCounter = temp_pc;
    var v7827 = parentObj$$197;
    var v9935 = parentObj$$197.CPUTicks;
    v7827.CPUTicks = v9935 + 12
  }else {
    var v4330 = parentObj$$197;
    var v9936 = parentObj$$197.programCounter;
    var v7828 = v9936 + 2;
    v4330.programCounter = v7828 & 65535
  }
  return
}
function v273(parentObj$$196) {
  var v4332 = parentObj$$196;
  var v11583 = parentObj$$196.programCounter;
  var v11358 = v11583 + 1;
  var v10928 = v11358 & 65535;
  var v9937 = JAMScript.call(parentObj$$196.memoryRead, parentObj$$196, [v10928]);
  var v7829 = v9937 << 8;
  var v9938 = parentObj$$196.memoryReader;
  var v9939 = parentObj$$196.programCounter;
  var v9940 = parentObj$$196.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12128 = [[parentObj$$196, v9940], v9938, v9938[v9939]]
  }
  var v7830 = JAMScript.call(v12128[2], v12128[1], v12128[0]);
  v4332.programCounter = v7829 | v7830;
  return
}
function v272(parentObj$$195) {
  var v7831 = parentObj$$195.FZero;
  var v4335 = !v7831;
  if(v4335) {
    var v4333 = parentObj$$195;
    var v11584 = parentObj$$195.programCounter;
    var v11359 = v11584 + 1;
    var v10929 = v11359 & 65535;
    var v9941 = JAMScript.call(parentObj$$195.memoryRead, parentObj$$195, [v10929]);
    var v7832 = v9941 << 8;
    var v9942 = parentObj$$195.memoryReader;
    var v9943 = parentObj$$195.programCounter;
    var v9944 = parentObj$$195.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12129 = [[parentObj$$195, v9944], v9942, v9942[v9943]]
    }
    var v7833 = JAMScript.call(v12129[2], v12129[1], v12129[0]);
    v4333.programCounter = v7832 | v7833;
    var v7834 = parentObj$$195;
    var v9945 = parentObj$$195.CPUTicks;
    v7834.CPUTicks = v9945 + 4
  }else {
    var v4334 = parentObj$$195;
    var v9946 = parentObj$$195.programCounter;
    var v7835 = v9946 + 2;
    v4334.programCounter = v7835 & 65535
  }
  return
}
function v271(parentObj$$194) {
  var v4336 = parentObj$$194;
  var v7836 = parentObj$$194.memoryReader;
  var v7837 = parentObj$$194.stackPointer;
  var v7838 = parentObj$$194.stackPointer;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12130 = [[parentObj$$194, v7838], v7836, v7836[v7837]]
  }
  var v11851 = JAMScript.call(v12130[2], v12130[1], v12130[0]);
  v4336.registerC = v11851;
  var v4337 = parentObj$$194;
  var v10930 = parentObj$$194.stackPointer;
  var v9947 = v10930 + 1;
  var v7839 = v9947 & 65535;
  var v11852 = JAMScript.call(parentObj$$194.memoryRead, parentObj$$194, [v7839]);
  v4337.registerB = v11852;
  var v4338 = parentObj$$194;
  var v9948 = parentObj$$194.stackPointer;
  var v7840 = v9948 + 2;
  v4338.stackPointer = v7840 & 65535;
  return
}
function v270(parentObj$$193) {
  var v7841 = parentObj$$193.FZero;
  var v4341 = !v7841;
  if(v4341) {
    var v4339 = parentObj$$193;
    var v11585 = parentObj$$193.stackPointer;
    var v11360 = v11585 + 1;
    var v10931 = v11360 & 65535;
    var v9949 = JAMScript.call(parentObj$$193.memoryRead, parentObj$$193, [v10931]);
    var v7842 = v9949 << 8;
    var v9950 = parentObj$$193.memoryReader;
    var v9951 = parentObj$$193.stackPointer;
    var v9952 = parentObj$$193.stackPointer;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12131 = [[parentObj$$193, v9952], v9950, v9950[v9951]]
    }
    var v7843 = JAMScript.call(v12131[2], v12131[1], v12131[0]);
    v4339.programCounter = v7842 | v7843;
    var v4340 = parentObj$$193;
    var v9953 = parentObj$$193.stackPointer;
    var v7844 = v9953 + 2;
    v4340.stackPointer = v7844 & 65535;
    var v7845 = parentObj$$193;
    var v9954 = parentObj$$193.CPUTicks;
    v7845.CPUTicks = v9954 + 12
  }
  return
}
function v269(parentObj$$192) {
  var v4342 = parentObj$$192;
  v4342.FHalfCarry = parentObj$$192.FCarry = false;
  var v4343 = parentObj$$192;
  v4343.FZero = parentObj$$192.FSubtract = true;
  return
}
function v268(parentObj$$191) {
  var v4344 = parentObj$$191.registerA;
  var v7846 = parentObj$$191.memoryReader;
  var v7847 = parentObj$$191.registersHL;
  var v7848 = parentObj$$191.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12132 = [[parentObj$$191, v7848], v7846, v7846[v7847]]
  }
  var v4345 = JAMScript.call(v12132[2], v12132[1], v12132[0]);
  var dirtySum$$38 = v4344 - v4345;
  var v4346 = parentObj$$191;
  var v7849 = dirtySum$$38 & 15;
  var v9955 = parentObj$$191.registerA;
  var v7850 = v9955 & 15;
  v4346.FHalfCarry = v7849 > v7850;
  parentObj$$191.FCarry = dirtySum$$38 < 0;
  parentObj$$191.FZero = dirtySum$$38 == 0;
  parentObj$$191.FSubtract = true;
  return
}
function v267(parentObj$$190) {
  var v4347 = parentObj$$190.registerA;
  var v7851 = parentObj$$190.registersHL;
  var v4348 = v7851 & 255;
  var dirtySum$$37 = v4347 - v4348;
  var v4349 = parentObj$$190;
  var v7852 = dirtySum$$37 & 15;
  var v9956 = parentObj$$190.registerA;
  var v7853 = v9956 & 15;
  v4349.FHalfCarry = v7852 > v7853;
  parentObj$$190.FCarry = dirtySum$$37 < 0;
  parentObj$$190.FZero = dirtySum$$37 == 0;
  parentObj$$190.FSubtract = true;
  return
}
function v266(parentObj$$189) {
  var v4350 = parentObj$$189.registerA;
  var v7854 = parentObj$$189.registersHL;
  var v4351 = v7854 >> 8;
  var dirtySum$$36 = v4350 - v4351;
  var v4352 = parentObj$$189;
  var v7855 = dirtySum$$36 & 15;
  var v9957 = parentObj$$189.registerA;
  var v7856 = v9957 & 15;
  v4352.FHalfCarry = v7855 > v7856;
  parentObj$$189.FCarry = dirtySum$$36 < 0;
  parentObj$$189.FZero = dirtySum$$36 == 0;
  parentObj$$189.FSubtract = true;
  return
}
function v265(parentObj$$188) {
  var v4353 = parentObj$$188.registerA;
  var v4354 = parentObj$$188.registerE;
  var dirtySum$$35 = v4353 - v4354;
  var v4355 = parentObj$$188;
  var v7857 = dirtySum$$35 & 15;
  var v9958 = parentObj$$188.registerA;
  var v7858 = v9958 & 15;
  v4355.FHalfCarry = v7857 > v7858;
  parentObj$$188.FCarry = dirtySum$$35 < 0;
  parentObj$$188.FZero = dirtySum$$35 == 0;
  parentObj$$188.FSubtract = true;
  return
}
function v264(parentObj$$187) {
  var v4356 = parentObj$$187.registerA;
  var v4357 = parentObj$$187.registerD;
  var dirtySum$$34 = v4356 - v4357;
  var v4358 = parentObj$$187;
  var v7859 = dirtySum$$34 & 15;
  var v9959 = parentObj$$187.registerA;
  var v7860 = v9959 & 15;
  v4358.FHalfCarry = v7859 > v7860;
  parentObj$$187.FCarry = dirtySum$$34 < 0;
  parentObj$$187.FZero = dirtySum$$34 == 0;
  parentObj$$187.FSubtract = true;
  return
}
function v263(parentObj$$186) {
  var v4359 = parentObj$$186.registerA;
  var v4360 = parentObj$$186.registerC;
  var dirtySum$$33 = v4359 - v4360;
  var v4361 = parentObj$$186;
  var v7861 = dirtySum$$33 & 15;
  var v9960 = parentObj$$186.registerA;
  var v7862 = v9960 & 15;
  v4361.FHalfCarry = v7861 > v7862;
  parentObj$$186.FCarry = dirtySum$$33 < 0;
  parentObj$$186.FZero = dirtySum$$33 == 0;
  parentObj$$186.FSubtract = true;
  return
}
function v262(parentObj$$185) {
  var v4362 = parentObj$$185.registerA;
  var v4363 = parentObj$$185.registerB;
  var dirtySum$$32 = v4362 - v4363;
  var v4364 = parentObj$$185;
  var v7863 = dirtySum$$32 & 15;
  var v9961 = parentObj$$185.registerA;
  var v7864 = v9961 & 15;
  v4364.FHalfCarry = v7863 > v7864;
  parentObj$$185.FCarry = dirtySum$$32 < 0;
  parentObj$$185.FZero = dirtySum$$32 == 0;
  parentObj$$185.FSubtract = true;
  return
}
function v261(parentObj$$184) {
  var v4365 = parentObj$$184;
  var v7865 = parentObj$$184.registerA;
  v4365.FZero = v7865 == 0;
  var v4366 = parentObj$$184;
  var v7866 = parentObj$$184;
  v4366.FSubtract = v7866.FCarry = parentObj$$184.FHalfCarry = false;
  return
}
function v260(parentObj$$183) {
  var v4367 = parentObj$$183;
  var v9962 = v4367.registerA;
  var v10932 = parentObj$$183.memoryReader;
  var v10933 = parentObj$$183.registersHL;
  var v10934 = parentObj$$183.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12133 = [[parentObj$$183, v10934], v10932, v10932[v10933]]
  }
  var v9963 = JAMScript.call(v12133[2], v12133[1], v12133[0]);
  v4367.registerA = v9962 | v9963;
  var v4368 = parentObj$$183;
  var v7867 = parentObj$$183.registerA;
  v4368.FZero = v7867 == 0;
  var v4369 = parentObj$$183;
  var v7868 = parentObj$$183;
  v4369.FSubtract = v7868.FCarry = parentObj$$183.FHalfCarry = false;
  return
}
function v259(parentObj$$182) {
  var v4370 = parentObj$$182;
  var v9964 = v4370.registerA;
  var v10935 = parentObj$$182.registersHL;
  var v9965 = v10935 & 255;
  v4370.registerA = v9964 | v9965;
  var v4371 = parentObj$$182;
  var v7869 = parentObj$$182.registerA;
  v4371.FZero = v7869 == 0;
  var v4372 = parentObj$$182;
  var v7870 = parentObj$$182;
  v4372.FSubtract = v7870.FCarry = parentObj$$182.FHalfCarry = false;
  return
}
function v258(parentObj$$181) {
  var v4373 = parentObj$$181;
  var v9966 = v4373.registerA;
  var v10936 = parentObj$$181.registersHL;
  var v9967 = v10936 >> 8;
  v4373.registerA = v9966 | v9967;
  var v4374 = parentObj$$181;
  var v7871 = parentObj$$181.registerA;
  v4374.FZero = v7871 == 0;
  var v4375 = parentObj$$181;
  var v7872 = parentObj$$181;
  v4375.FSubtract = v7872.FCarry = parentObj$$181.FHalfCarry = false;
  return
}
function v257(parentObj$$180) {
  var v4376 = parentObj$$180;
  var v9968 = v4376.registerA;
  var v9969 = parentObj$$180.registerE;
  v4376.registerA = v9968 | v9969;
  var v4377 = parentObj$$180;
  var v7873 = parentObj$$180.registerA;
  v4377.FZero = v7873 == 0;
  var v4378 = parentObj$$180;
  var v7874 = parentObj$$180;
  v4378.FSubtract = v7874.FCarry = parentObj$$180.FHalfCarry = false;
  return
}
function v256(parentObj$$179) {
  var v4379 = parentObj$$179;
  var v9970 = v4379.registerA;
  var v9971 = parentObj$$179.registerD;
  v4379.registerA = v9970 | v9971;
  var v4380 = parentObj$$179;
  var v7875 = parentObj$$179.registerA;
  v4380.FZero = v7875 == 0;
  var v4381 = parentObj$$179;
  var v7876 = parentObj$$179;
  v4381.FSubtract = v7876.FCarry = parentObj$$179.FHalfCarry = false;
  return
}
function v255(parentObj$$178) {
  var v4382 = parentObj$$178;
  var v9972 = v4382.registerA;
  var v9973 = parentObj$$178.registerC;
  v4382.registerA = v9972 | v9973;
  var v4383 = parentObj$$178;
  var v7877 = parentObj$$178.registerA;
  v4383.FZero = v7877 == 0;
  var v4384 = parentObj$$178;
  var v7878 = parentObj$$178;
  v4384.FSubtract = v7878.FCarry = parentObj$$178.FHalfCarry = false;
  return
}
function v254(parentObj$$177) {
  var v4385 = parentObj$$177;
  var v9974 = v4385.registerA;
  var v9975 = parentObj$$177.registerB;
  v4385.registerA = v9974 | v9975;
  var v4386 = parentObj$$177;
  var v7879 = parentObj$$177.registerA;
  v4386.FZero = v7879 == 0;
  var v4387 = parentObj$$177;
  var v7880 = parentObj$$177;
  v4387.FSubtract = v7880.FCarry = parentObj$$177.FHalfCarry = false;
  return
}
function v253(parentObj$$176) {
  parentObj$$176.registerA = 0;
  parentObj$$176.FZero = true;
  var v4388 = parentObj$$176;
  var v7881 = parentObj$$176;
  v4388.FSubtract = v7881.FHalfCarry = parentObj$$176.FCarry = false;
  return
}
function v252(parentObj$$175) {
  var v4389 = parentObj$$175;
  var v9976 = v4389.registerA;
  var v10937 = parentObj$$175.memoryReader;
  var v10938 = parentObj$$175.registersHL;
  var v10939 = parentObj$$175.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12134 = [[parentObj$$175, v10939], v10937, v10937[v10938]]
  }
  var v9977 = JAMScript.call(v12134[2], v12134[1], v12134[0]);
  v4389.registerA = v9976 ^ v9977;
  var v4390 = parentObj$$175;
  var v7882 = parentObj$$175.registerA;
  v4390.FZero = v7882 == 0;
  var v4391 = parentObj$$175;
  var v7883 = parentObj$$175;
  v4391.FSubtract = v7883.FHalfCarry = parentObj$$175.FCarry = false;
  return
}
function v251(parentObj$$174) {
  var v4392 = parentObj$$174;
  var v9978 = v4392.registerA;
  var v10940 = parentObj$$174.registersHL;
  var v9979 = v10940 & 255;
  v4392.registerA = v9978 ^ v9979;
  var v4393 = parentObj$$174;
  var v7884 = parentObj$$174.registerA;
  v4393.FZero = v7884 == 0;
  var v4394 = parentObj$$174;
  var v7885 = parentObj$$174;
  v4394.FSubtract = v7885.FHalfCarry = parentObj$$174.FCarry = false;
  return
}
function v250(parentObj$$173) {
  var v4395 = parentObj$$173;
  var v9980 = v4395.registerA;
  var v10941 = parentObj$$173.registersHL;
  var v9981 = v10941 >> 8;
  v4395.registerA = v9980 ^ v9981;
  var v4396 = parentObj$$173;
  var v7886 = parentObj$$173.registerA;
  v4396.FZero = v7886 == 0;
  var v4397 = parentObj$$173;
  var v7887 = parentObj$$173;
  v4397.FSubtract = v7887.FHalfCarry = parentObj$$173.FCarry = false;
  return
}
function v249(parentObj$$172) {
  var v4398 = parentObj$$172;
  var v9982 = v4398.registerA;
  var v9983 = parentObj$$172.registerE;
  v4398.registerA = v9982 ^ v9983;
  var v4399 = parentObj$$172;
  var v7888 = parentObj$$172.registerA;
  v4399.FZero = v7888 == 0;
  var v4400 = parentObj$$172;
  var v7889 = parentObj$$172;
  v4400.FSubtract = v7889.FHalfCarry = parentObj$$172.FCarry = false;
  return
}
function v248(parentObj$$171) {
  var v4401 = parentObj$$171;
  var v9984 = v4401.registerA;
  var v9985 = parentObj$$171.registerD;
  v4401.registerA = v9984 ^ v9985;
  var v4402 = parentObj$$171;
  var v7890 = parentObj$$171.registerA;
  v4402.FZero = v7890 == 0;
  var v4403 = parentObj$$171;
  var v7891 = parentObj$$171;
  v4403.FSubtract = v7891.FHalfCarry = parentObj$$171.FCarry = false;
  return
}
function v247(parentObj$$170) {
  var v4404 = parentObj$$170;
  var v9986 = v4404.registerA;
  var v9987 = parentObj$$170.registerC;
  v4404.registerA = v9986 ^ v9987;
  var v4405 = parentObj$$170;
  var v7892 = parentObj$$170.registerA;
  v4405.FZero = v7892 == 0;
  var v4406 = parentObj$$170;
  var v7893 = parentObj$$170;
  v4406.FSubtract = v7893.FHalfCarry = parentObj$$170.FCarry = false;
  return
}
function v246(parentObj$$169) {
  var v4407 = parentObj$$169;
  var v9988 = v4407.registerA;
  var v9989 = parentObj$$169.registerB;
  v4407.registerA = v9988 ^ v9989;
  var v4408 = parentObj$$169;
  var v7894 = parentObj$$169.registerA;
  v4408.FZero = v7894 == 0;
  var v4409 = parentObj$$169;
  var v7895 = parentObj$$169;
  v4409.FSubtract = v7895.FHalfCarry = parentObj$$169.FCarry = false;
  return
}
function v245(parentObj$$168) {
  var v4410 = parentObj$$168;
  var v7896 = parentObj$$168.registerA;
  v4410.FZero = v7896 == 0;
  parentObj$$168.FHalfCarry = true;
  var v4411 = parentObj$$168;
  v4411.FSubtract = parentObj$$168.FCarry = false;
  return
}
function v244(parentObj$$167) {
  var v4412 = parentObj$$167;
  var v9990 = v4412.registerA;
  var v10942 = parentObj$$167.memoryReader;
  var v10943 = parentObj$$167.registersHL;
  var v10944 = parentObj$$167.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12135 = [[parentObj$$167, v10944], v10942, v10942[v10943]]
  }
  var v9991 = JAMScript.call(v12135[2], v12135[1], v12135[0]);
  v4412.registerA = v9990 & v9991;
  var v4413 = parentObj$$167;
  var v7897 = parentObj$$167.registerA;
  v4413.FZero = v7897 == 0;
  parentObj$$167.FHalfCarry = true;
  var v4414 = parentObj$$167;
  v4414.FSubtract = parentObj$$167.FCarry = false;
  return
}
function v243(parentObj$$166) {
  var v4415 = parentObj$$166;
  var v9992 = v4415.registerA;
  var v9993 = parentObj$$166.registersHL;
  v4415.registerA = v9992 & v9993;
  var v4416 = parentObj$$166;
  var v7898 = parentObj$$166.registerA;
  v4416.FZero = v7898 == 0;
  parentObj$$166.FHalfCarry = true;
  var v4417 = parentObj$$166;
  v4417.FSubtract = parentObj$$166.FCarry = false;
  return
}
function v242(parentObj$$165) {
  var v4418 = parentObj$$165;
  var v9994 = v4418.registerA;
  var v10945 = parentObj$$165.registersHL;
  var v9995 = v10945 >> 8;
  v4418.registerA = v9994 & v9995;
  var v4419 = parentObj$$165;
  var v7899 = parentObj$$165.registerA;
  v4419.FZero = v7899 == 0;
  parentObj$$165.FHalfCarry = true;
  var v4420 = parentObj$$165;
  v4420.FSubtract = parentObj$$165.FCarry = false;
  return
}
function v241(parentObj$$164) {
  var v4421 = parentObj$$164;
  var v9996 = v4421.registerA;
  var v9997 = parentObj$$164.registerE;
  v4421.registerA = v9996 & v9997;
  var v4422 = parentObj$$164;
  var v7900 = parentObj$$164.registerA;
  v4422.FZero = v7900 == 0;
  parentObj$$164.FHalfCarry = true;
  var v4423 = parentObj$$164;
  v4423.FSubtract = parentObj$$164.FCarry = false;
  return
}
function v240(parentObj$$163) {
  var v4424 = parentObj$$163;
  var v9998 = v4424.registerA;
  var v9999 = parentObj$$163.registerD;
  v4424.registerA = v9998 & v9999;
  var v4425 = parentObj$$163;
  var v7901 = parentObj$$163.registerA;
  v4425.FZero = v7901 == 0;
  parentObj$$163.FHalfCarry = true;
  var v4426 = parentObj$$163;
  v4426.FSubtract = parentObj$$163.FCarry = false;
  return
}
function v239(parentObj$$162) {
  var v4427 = parentObj$$162;
  var v10000 = v4427.registerA;
  var v10001 = parentObj$$162.registerC;
  v4427.registerA = v10000 & v10001;
  var v4428 = parentObj$$162;
  var v7902 = parentObj$$162.registerA;
  v4428.FZero = v7902 == 0;
  parentObj$$162.FHalfCarry = true;
  var v4429 = parentObj$$162;
  v4429.FSubtract = parentObj$$162.FCarry = false;
  return
}
function v238(parentObj$$161) {
  var v4430 = parentObj$$161;
  var v10002 = v4430.registerA;
  var v10003 = parentObj$$161.registerB;
  v4430.registerA = v10002 & v10003;
  var v4431 = parentObj$$161;
  var v7903 = parentObj$$161.registerA;
  v4431.FZero = v7903 == 0;
  parentObj$$161.FHalfCarry = true;
  var v4432 = parentObj$$161;
  v4432.FSubtract = parentObj$$161.FCarry = false;
  return
}
function v237(parentObj$$160) {
  var v4436 = parentObj$$160.FCarry;
  if(v4436) {
    parentObj$$160.FZero = false;
    var v4433 = parentObj$$160;
    var v7904 = parentObj$$160;
    v4433.FSubtract = v7904.FHalfCarry = parentObj$$160.FCarry = true;
    parentObj$$160.registerA = 255
  }else {
    var v4434 = parentObj$$160;
    v4434.FHalfCarry = parentObj$$160.FCarry = false;
    var v4435 = parentObj$$160;
    v4435.FSubtract = parentObj$$160.FZero = true;
    parentObj$$160.registerA = 0
  }
  return
}
function v236(parentObj$$159) {
  var v4437 = parentObj$$159.memoryReader;
  var v4438 = parentObj$$159.registersHL;
  var v4439 = parentObj$$159.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12136 = [[parentObj$$159, v4439], v4437, v4437[v4438]]
  }
  var temp_var$$8 = JAMScript.call(v12136[2], v12136[1], v12136[0]);
  var v7905 = parentObj$$159.registerA;
  var v4440 = v7905 - temp_var$$8;
  var v7906;
  var v10004 = parentObj$$159.FCarry;
  if(v10004) {
    v7906 = 1
  }else {
    v7906 = 0
  }
  var v4441 = v7906;
  var dirtySum$$31 = v4440 - v4441;
  var v4442 = parentObj$$159;
  var v11361 = parentObj$$159.registerA;
  var v10946 = v11361 & 15;
  var v10947 = temp_var$$8 & 15;
  var v10005 = v10946 - v10947;
  var v10948;
  var v11362 = parentObj$$159.FCarry;
  if(v11362) {
    v10948 = 1
  }else {
    v10948 = 0
  }
  var v10006 = v10948;
  var v7907 = v10005 - v10006;
  v4442.FHalfCarry = v7907 < 0;
  parentObj$$159.FCarry = dirtySum$$31 < 0;
  parentObj$$159.registerA = dirtySum$$31 & 255;
  var v4443 = parentObj$$159;
  var v7908 = parentObj$$159.registerA;
  v4443.FZero = v7908 == 0;
  parentObj$$159.FSubtract = true;
  return
}
function v235(parentObj$$158) {
  var v7909 = parentObj$$158.registerA;
  var v10007 = parentObj$$158.registersHL;
  var v7910 = v10007 & 255;
  var v4444 = v7909 - v7910;
  var v7911;
  var v10008 = parentObj$$158.FCarry;
  if(v10008) {
    v7911 = 1
  }else {
    v7911 = 0
  }
  var v4445 = v7911;
  var dirtySum$$30 = v4444 - v4445;
  var v4446 = parentObj$$158;
  var v11363 = parentObj$$158.registerA;
  var v10949 = v11363 & 15;
  var v11364 = parentObj$$158.registersHL;
  var v10950 = v11364 & 15;
  var v10009 = v10949 - v10950;
  var v10951;
  var v11365 = parentObj$$158.FCarry;
  if(v11365) {
    v10951 = 1
  }else {
    v10951 = 0
  }
  var v10010 = v10951;
  var v7912 = v10009 - v10010;
  v4446.FHalfCarry = v7912 < 0;
  parentObj$$158.FCarry = dirtySum$$30 < 0;
  parentObj$$158.registerA = dirtySum$$30 & 255;
  var v4447 = parentObj$$158;
  var v7913 = parentObj$$158.registerA;
  v4447.FZero = v7913 == 0;
  parentObj$$158.FSubtract = true;
  return
}
function v234(parentObj$$157) {
  var v4448 = parentObj$$157.registersHL;
  var temp_var$$7 = v4448 >> 8;
  var v7914 = parentObj$$157.registerA;
  var v4449 = v7914 - temp_var$$7;
  var v7915;
  var v10011 = parentObj$$157.FCarry;
  if(v10011) {
    v7915 = 1
  }else {
    v7915 = 0
  }
  var v4450 = v7915;
  var dirtySum$$29 = v4449 - v4450;
  var v4451 = parentObj$$157;
  var v11366 = parentObj$$157.registerA;
  var v10952 = v11366 & 15;
  var v10953 = temp_var$$7 & 15;
  var v10012 = v10952 - v10953;
  var v10954;
  var v11367 = parentObj$$157.FCarry;
  if(v11367) {
    v10954 = 1
  }else {
    v10954 = 0
  }
  var v10013 = v10954;
  var v7916 = v10012 - v10013;
  v4451.FHalfCarry = v7916 < 0;
  parentObj$$157.FCarry = dirtySum$$29 < 0;
  parentObj$$157.registerA = dirtySum$$29 & 255;
  var v4452 = parentObj$$157;
  var v7917 = parentObj$$157.registerA;
  v4452.FZero = v7917 == 0;
  parentObj$$157.FSubtract = true;
  return
}
function v233(parentObj$$156) {
  var v7918 = parentObj$$156.registerA;
  var v7919 = parentObj$$156.registerE;
  var v4453 = v7918 - v7919;
  var v7920;
  var v10014 = parentObj$$156.FCarry;
  if(v10014) {
    v7920 = 1
  }else {
    v7920 = 0
  }
  var v4454 = v7920;
  var dirtySum$$28 = v4453 - v4454;
  var v4455 = parentObj$$156;
  var v11368 = parentObj$$156.registerA;
  var v10955 = v11368 & 15;
  var v11369 = parentObj$$156.registerE;
  var v10956 = v11369 & 15;
  var v10015 = v10955 - v10956;
  var v10957;
  var v11370 = parentObj$$156.FCarry;
  if(v11370) {
    v10957 = 1
  }else {
    v10957 = 0
  }
  var v10016 = v10957;
  var v7921 = v10015 - v10016;
  v4455.FHalfCarry = v7921 < 0;
  parentObj$$156.FCarry = dirtySum$$28 < 0;
  parentObj$$156.registerA = dirtySum$$28 & 255;
  var v4456 = parentObj$$156;
  var v7922 = parentObj$$156.registerA;
  v4456.FZero = v7922 == 0;
  parentObj$$156.FSubtract = true;
  return
}
function v232(parentObj$$155) {
  var v7923 = parentObj$$155.registerA;
  var v7924 = parentObj$$155.registerD;
  var v4457 = v7923 - v7924;
  var v7925;
  var v10017 = parentObj$$155.FCarry;
  if(v10017) {
    v7925 = 1
  }else {
    v7925 = 0
  }
  var v4458 = v7925;
  var dirtySum$$27 = v4457 - v4458;
  var v4459 = parentObj$$155;
  var v11371 = parentObj$$155.registerA;
  var v10958 = v11371 & 15;
  var v11372 = parentObj$$155.registerD;
  var v10959 = v11372 & 15;
  var v10018 = v10958 - v10959;
  var v10960;
  var v11373 = parentObj$$155.FCarry;
  if(v11373) {
    v10960 = 1
  }else {
    v10960 = 0
  }
  var v10019 = v10960;
  var v7926 = v10018 - v10019;
  v4459.FHalfCarry = v7926 < 0;
  parentObj$$155.FCarry = dirtySum$$27 < 0;
  parentObj$$155.registerA = dirtySum$$27 & 255;
  var v4460 = parentObj$$155;
  var v7927 = parentObj$$155.registerA;
  v4460.FZero = v7927 == 0;
  parentObj$$155.FSubtract = true;
  return
}
function v231(parentObj$$154) {
  var v7928 = parentObj$$154.registerA;
  var v7929 = parentObj$$154.registerC;
  var v4461 = v7928 - v7929;
  var v7930;
  var v10020 = parentObj$$154.FCarry;
  if(v10020) {
    v7930 = 1
  }else {
    v7930 = 0
  }
  var v4462 = v7930;
  var dirtySum$$26 = v4461 - v4462;
  var v4463 = parentObj$$154;
  var v11374 = parentObj$$154.registerA;
  var v10961 = v11374 & 15;
  var v11375 = parentObj$$154.registerC;
  var v10962 = v11375 & 15;
  var v10021 = v10961 - v10962;
  var v10963;
  var v11376 = parentObj$$154.FCarry;
  if(v11376) {
    v10963 = 1
  }else {
    v10963 = 0
  }
  var v10022 = v10963;
  var v7931 = v10021 - v10022;
  v4463.FHalfCarry = v7931 < 0;
  parentObj$$154.FCarry = dirtySum$$26 < 0;
  parentObj$$154.registerA = dirtySum$$26 & 255;
  var v4464 = parentObj$$154;
  var v7932 = parentObj$$154.registerA;
  v4464.FZero = v7932 == 0;
  parentObj$$154.FSubtract = true;
  return
}
function v230(parentObj$$153) {
  var v7933 = parentObj$$153.registerA;
  var v7934 = parentObj$$153.registerB;
  var v4465 = v7933 - v7934;
  var v7935;
  var v10023 = parentObj$$153.FCarry;
  if(v10023) {
    v7935 = 1
  }else {
    v7935 = 0
  }
  var v4466 = v7935;
  var dirtySum$$25 = v4465 - v4466;
  var v4467 = parentObj$$153;
  var v11377 = parentObj$$153.registerA;
  var v10964 = v11377 & 15;
  var v11378 = parentObj$$153.registerB;
  var v10965 = v11378 & 15;
  var v10024 = v10964 - v10965;
  var v10966;
  var v11379 = parentObj$$153.FCarry;
  if(v11379) {
    v10966 = 1
  }else {
    v10966 = 0
  }
  var v10025 = v10966;
  var v7936 = v10024 - v10025;
  v4467.FHalfCarry = v7936 < 0;
  parentObj$$153.FCarry = dirtySum$$25 < 0;
  parentObj$$153.registerA = dirtySum$$25 & 255;
  var v4468 = parentObj$$153;
  var v7937 = parentObj$$153.registerA;
  v4468.FZero = v7937 == 0;
  parentObj$$153.FSubtract = true;
  return
}
function v229(parentObj$$152) {
  parentObj$$152.registerA = 0;
  var v4469 = parentObj$$152;
  v4469.FHalfCarry = parentObj$$152.FCarry = false;
  var v4470 = parentObj$$152;
  v4470.FZero = parentObj$$152.FSubtract = true;
  return
}
function v228(parentObj$$151) {
  var v4471 = parentObj$$151.registerA;
  var v7938 = parentObj$$151.memoryReader;
  var v7939 = parentObj$$151.registersHL;
  var v7940 = parentObj$$151.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12137 = [[parentObj$$151, v7940], v7938, v7938[v7939]]
  }
  var v4472 = JAMScript.call(v12137[2], v12137[1], v12137[0]);
  var dirtySum$$24 = v4471 - v4472;
  var v4473 = parentObj$$151;
  var v10026 = parentObj$$151.registerA;
  var v7941 = v10026 & 15;
  var v7942 = dirtySum$$24 & 15;
  v4473.FHalfCarry = v7941 < v7942;
  parentObj$$151.FCarry = dirtySum$$24 < 0;
  parentObj$$151.registerA = dirtySum$$24 & 255;
  parentObj$$151.FZero = dirtySum$$24 == 0;
  parentObj$$151.FSubtract = true;
  return
}
function v227(parentObj$$150) {
  var v4474 = parentObj$$150.registerA;
  var v7943 = parentObj$$150.registersHL;
  var v4475 = v7943 & 255;
  var dirtySum$$23 = v4474 - v4475;
  var v4476 = parentObj$$150;
  var v10027 = parentObj$$150.registerA;
  var v7944 = v10027 & 15;
  var v7945 = dirtySum$$23 & 15;
  v4476.FHalfCarry = v7944 < v7945;
  parentObj$$150.FCarry = dirtySum$$23 < 0;
  parentObj$$150.registerA = dirtySum$$23 & 255;
  parentObj$$150.FZero = dirtySum$$23 == 0;
  parentObj$$150.FSubtract = true;
  return
}
function v226(parentObj$$149) {
  var v4477 = parentObj$$149.registerA;
  var v7946 = parentObj$$149.registersHL;
  var v4478 = v7946 >> 8;
  var dirtySum$$22 = v4477 - v4478;
  var v4479 = parentObj$$149;
  var v10028 = parentObj$$149.registerA;
  var v7947 = v10028 & 15;
  var v7948 = dirtySum$$22 & 15;
  v4479.FHalfCarry = v7947 < v7948;
  parentObj$$149.FCarry = dirtySum$$22 < 0;
  parentObj$$149.registerA = dirtySum$$22 & 255;
  parentObj$$149.FZero = dirtySum$$22 == 0;
  parentObj$$149.FSubtract = true;
  return
}
function v225(parentObj$$148) {
  var v4480 = parentObj$$148.registerA;
  var v4481 = parentObj$$148.registerE;
  var dirtySum$$21 = v4480 - v4481;
  var v4482 = parentObj$$148;
  var v10029 = parentObj$$148.registerA;
  var v7949 = v10029 & 15;
  var v7950 = dirtySum$$21 & 15;
  v4482.FHalfCarry = v7949 < v7950;
  parentObj$$148.FCarry = dirtySum$$21 < 0;
  parentObj$$148.registerA = dirtySum$$21 & 255;
  parentObj$$148.FZero = dirtySum$$21 == 0;
  parentObj$$148.FSubtract = true;
  return
}
function v224(parentObj$$147) {
  var v4483 = parentObj$$147.registerA;
  var v4484 = parentObj$$147.registerD;
  var dirtySum$$20 = v4483 - v4484;
  var v4485 = parentObj$$147;
  var v10030 = parentObj$$147.registerA;
  var v7951 = v10030 & 15;
  var v7952 = dirtySum$$20 & 15;
  v4485.FHalfCarry = v7951 < v7952;
  parentObj$$147.FCarry = dirtySum$$20 < 0;
  parentObj$$147.registerA = dirtySum$$20 & 255;
  parentObj$$147.FZero = dirtySum$$20 == 0;
  parentObj$$147.FSubtract = true;
  return
}
function v223(parentObj$$146) {
  var v4486 = parentObj$$146.registerA;
  var v4487 = parentObj$$146.registerC;
  var dirtySum$$19 = v4486 - v4487;
  var v4488 = parentObj$$146;
  var v10031 = parentObj$$146.registerA;
  var v7953 = v10031 & 15;
  var v7954 = dirtySum$$19 & 15;
  v4488.FHalfCarry = v7953 < v7954;
  parentObj$$146.FCarry = dirtySum$$19 < 0;
  parentObj$$146.registerA = dirtySum$$19 & 255;
  parentObj$$146.FZero = dirtySum$$19 == 0;
  parentObj$$146.FSubtract = true;
  return
}
function v222(parentObj$$145) {
  var v4489 = parentObj$$145.registerA;
  var v4490 = parentObj$$145.registerB;
  var dirtySum$$18 = v4489 - v4490;
  var v4491 = parentObj$$145;
  var v10032 = parentObj$$145.registerA;
  var v7955 = v10032 & 15;
  var v7956 = dirtySum$$18 & 15;
  v4491.FHalfCarry = v7955 < v7956;
  parentObj$$145.FCarry = dirtySum$$18 < 0;
  parentObj$$145.registerA = dirtySum$$18 & 255;
  parentObj$$145.FZero = dirtySum$$18 == 0;
  parentObj$$145.FSubtract = true;
  return
}
function v221(parentObj$$144) {
  var v7957 = parentObj$$144.registerA;
  var v4492 = v7957 << 1;
  var v7958;
  var v10033 = parentObj$$144.FCarry;
  if(v10033) {
    v7958 = 1
  }else {
    v7958 = 0
  }
  var v4493 = v7958;
  var dirtySum$$17 = v4492 | v4493;
  var v4494 = parentObj$$144;
  var v11380 = parentObj$$144.registerA;
  var v10967 = v11380 << 1;
  var v10034 = v10967 & 30;
  var v10968;
  var v11381 = parentObj$$144.FCarry;
  if(v11381) {
    v10968 = 1
  }else {
    v10968 = 0
  }
  var v10035 = v10968;
  var v7959 = v10034 | v10035;
  v4494.FHalfCarry = v7959 > 15;
  parentObj$$144.FCarry = dirtySum$$17 > 255;
  parentObj$$144.registerA = dirtySum$$17 & 255;
  var v4495 = parentObj$$144;
  var v7960 = parentObj$$144.registerA;
  v4495.FZero = v7960 == 0;
  parentObj$$144.FSubtract = false;
  return
}
function v220(parentObj$$143) {
  var v4496 = parentObj$$143.memoryReader;
  var v4497 = parentObj$$143.registersHL;
  var v4498 = parentObj$$143.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12138 = [[parentObj$$143, v4498], v4496, v4496[v4497]]
  }
  var tempValue$$2 = JAMScript.call(v12138[2], v12138[1], v12138[0]);
  var v7961 = parentObj$$143.registerA;
  var v4499 = v7961 + tempValue$$2;
  var v7962;
  var v10036 = parentObj$$143.FCarry;
  if(v10036) {
    v7962 = 1
  }else {
    v7962 = 0
  }
  var v4500 = v7962;
  var dirtySum$$16 = v4499 + v4500;
  var v4501 = parentObj$$143;
  var v11382 = parentObj$$143.registerA;
  var v10969 = v11382 & 15;
  var v10970 = tempValue$$2 & 15;
  var v10037 = v10969 + v10970;
  var v10971;
  var v11383 = parentObj$$143.FCarry;
  if(v11383) {
    v10971 = 1
  }else {
    v10971 = 0
  }
  var v10038 = v10971;
  var v7963 = v10037 + v10038;
  v4501.FHalfCarry = v7963 > 15;
  parentObj$$143.FCarry = dirtySum$$16 > 255;
  parentObj$$143.registerA = dirtySum$$16 & 255;
  var v4502 = parentObj$$143;
  var v7964 = parentObj$$143.registerA;
  v4502.FZero = v7964 == 0;
  parentObj$$143.FSubtract = false;
  return
}
function v219(parentObj$$142) {
  var v4503 = parentObj$$142.registersHL;
  var tempValue$$1 = v4503 & 255;
  var v7965 = parentObj$$142.registerA;
  var v4504 = v7965 + tempValue$$1;
  var v7966;
  var v10039 = parentObj$$142.FCarry;
  if(v10039) {
    v7966 = 1
  }else {
    v7966 = 0
  }
  var v4505 = v7966;
  var dirtySum$$15 = v4504 + v4505;
  var v4506 = parentObj$$142;
  var v11384 = parentObj$$142.registerA;
  var v10972 = v11384 & 15;
  var v10973 = tempValue$$1 & 15;
  var v10040 = v10972 + v10973;
  var v10974;
  var v11385 = parentObj$$142.FCarry;
  if(v11385) {
    v10974 = 1
  }else {
    v10974 = 0
  }
  var v10041 = v10974;
  var v7967 = v10040 + v10041;
  v4506.FHalfCarry = v7967 > 15;
  parentObj$$142.FCarry = dirtySum$$15 > 255;
  parentObj$$142.registerA = dirtySum$$15 & 255;
  var v4507 = parentObj$$142;
  var v7968 = parentObj$$142.registerA;
  v4507.FZero = v7968 == 0;
  parentObj$$142.FSubtract = false;
  return
}
function v218(parentObj$$141) {
  var v4508 = parentObj$$141.registersHL;
  var tempValue = v4508 >> 8;
  var v7969 = parentObj$$141.registerA;
  var v4509 = v7969 + tempValue;
  var v7970;
  var v10042 = parentObj$$141.FCarry;
  if(v10042) {
    v7970 = 1
  }else {
    v7970 = 0
  }
  var v4510 = v7970;
  var dirtySum$$14 = v4509 + v4510;
  var v4511 = parentObj$$141;
  var v11386 = parentObj$$141.registerA;
  var v10975 = v11386 & 15;
  var v10976 = tempValue & 15;
  var v10043 = v10975 + v10976;
  var v10977;
  var v11387 = parentObj$$141.FCarry;
  if(v11387) {
    v10977 = 1
  }else {
    v10977 = 0
  }
  var v10044 = v10977;
  var v7971 = v10043 + v10044;
  v4511.FHalfCarry = v7971 > 15;
  parentObj$$141.FCarry = dirtySum$$14 > 255;
  parentObj$$141.registerA = dirtySum$$14 & 255;
  var v4512 = parentObj$$141;
  var v7972 = parentObj$$141.registerA;
  v4512.FZero = v7972 == 0;
  parentObj$$141.FSubtract = false;
  return
}
function v217(parentObj$$140) {
  var v7973 = parentObj$$140.registerA;
  var v7974 = parentObj$$140.registerE;
  var v4513 = v7973 + v7974;
  var v7975;
  var v10045 = parentObj$$140.FCarry;
  if(v10045) {
    v7975 = 1
  }else {
    v7975 = 0
  }
  var v4514 = v7975;
  var dirtySum$$13 = v4513 + v4514;
  var v4515 = parentObj$$140;
  var v11388 = parentObj$$140.registerA;
  var v10978 = v11388 & 15;
  var v11389 = parentObj$$140.registerE;
  var v10979 = v11389 & 15;
  var v10046 = v10978 + v10979;
  var v10980;
  var v11390 = parentObj$$140.FCarry;
  if(v11390) {
    v10980 = 1
  }else {
    v10980 = 0
  }
  var v10047 = v10980;
  var v7976 = v10046 + v10047;
  v4515.FHalfCarry = v7976 > 15;
  parentObj$$140.FCarry = dirtySum$$13 > 255;
  parentObj$$140.registerA = dirtySum$$13 & 255;
  var v4516 = parentObj$$140;
  var v7977 = parentObj$$140.registerA;
  v4516.FZero = v7977 == 0;
  parentObj$$140.FSubtract = false;
  return
}
function v216(parentObj$$139) {
  var v7978 = parentObj$$139.registerA;
  var v7979 = parentObj$$139.registerD;
  var v4517 = v7978 + v7979;
  var v7980;
  var v10048 = parentObj$$139.FCarry;
  if(v10048) {
    v7980 = 1
  }else {
    v7980 = 0
  }
  var v4518 = v7980;
  var dirtySum$$12 = v4517 + v4518;
  var v4519 = parentObj$$139;
  var v11391 = parentObj$$139.registerA;
  var v10981 = v11391 & 15;
  var v11392 = parentObj$$139.registerD;
  var v10982 = v11392 & 15;
  var v10049 = v10981 + v10982;
  var v10983;
  var v11393 = parentObj$$139.FCarry;
  if(v11393) {
    v10983 = 1
  }else {
    v10983 = 0
  }
  var v10050 = v10983;
  var v7981 = v10049 + v10050;
  v4519.FHalfCarry = v7981 > 15;
  parentObj$$139.FCarry = dirtySum$$12 > 255;
  parentObj$$139.registerA = dirtySum$$12 & 255;
  var v4520 = parentObj$$139;
  var v7982 = parentObj$$139.registerA;
  v4520.FZero = v7982 == 0;
  parentObj$$139.FSubtract = false;
  return
}
function v215(parentObj$$138) {
  var v7983 = parentObj$$138.registerA;
  var v7984 = parentObj$$138.registerC;
  var v4521 = v7983 + v7984;
  var v7985;
  var v10051 = parentObj$$138.FCarry;
  if(v10051) {
    v7985 = 1
  }else {
    v7985 = 0
  }
  var v4522 = v7985;
  var dirtySum$$11 = v4521 + v4522;
  var v4523 = parentObj$$138;
  var v11394 = parentObj$$138.registerA;
  var v10984 = v11394 & 15;
  var v11395 = parentObj$$138.registerC;
  var v10985 = v11395 & 15;
  var v10052 = v10984 + v10985;
  var v10986;
  var v11396 = parentObj$$138.FCarry;
  if(v11396) {
    v10986 = 1
  }else {
    v10986 = 0
  }
  var v10053 = v10986;
  var v7986 = v10052 + v10053;
  v4523.FHalfCarry = v7986 > 15;
  parentObj$$138.FCarry = dirtySum$$11 > 255;
  parentObj$$138.registerA = dirtySum$$11 & 255;
  var v4524 = parentObj$$138;
  var v7987 = parentObj$$138.registerA;
  v4524.FZero = v7987 == 0;
  parentObj$$138.FSubtract = false;
  return
}
function v214(parentObj$$137) {
  var v7988 = parentObj$$137.registerA;
  var v7989 = parentObj$$137.registerB;
  var v4525 = v7988 + v7989;
  var v7990;
  var v10054 = parentObj$$137.FCarry;
  if(v10054) {
    v7990 = 1
  }else {
    v7990 = 0
  }
  var v4526 = v7990;
  var dirtySum$$10 = v4525 + v4526;
  var v4527 = parentObj$$137;
  var v11397 = parentObj$$137.registerA;
  var v10987 = v11397 & 15;
  var v11398 = parentObj$$137.registerB;
  var v10988 = v11398 & 15;
  var v10055 = v10987 + v10988;
  var v10989;
  var v11399 = parentObj$$137.FCarry;
  if(v11399) {
    v10989 = 1
  }else {
    v10989 = 0
  }
  var v10056 = v10989;
  var v7991 = v10055 + v10056;
  v4527.FHalfCarry = v7991 > 15;
  parentObj$$137.FCarry = dirtySum$$10 > 255;
  parentObj$$137.registerA = dirtySum$$10 & 255;
  var v4528 = parentObj$$137;
  var v7992 = parentObj$$137.registerA;
  v4528.FZero = v7992 == 0;
  parentObj$$137.FSubtract = false;
  return
}
function v213(parentObj$$136) {
  var v4529 = parentObj$$136;
  var v10057 = parentObj$$136.registerA;
  var v7993 = v10057 & 8;
  v4529.FHalfCarry = v7993 == 8;
  var v4530 = parentObj$$136;
  var v7994 = parentObj$$136.registerA;
  v4530.FCarry = v7994 > 127;
  var v4531 = parentObj$$136;
  var v10058 = parentObj$$136.registerA;
  var v7995 = v10058 << 1;
  v4531.registerA = v7995 & 255;
  var v4532 = parentObj$$136;
  var v7996 = parentObj$$136.registerA;
  v4532.FZero = v7996 == 0;
  parentObj$$136.FSubtract = false;
  return
}
function v212(parentObj$$135) {
  var v4533 = parentObj$$135.registerA;
  var v7997 = parentObj$$135.memoryReader;
  var v7998 = parentObj$$135.registersHL;
  var v7999 = parentObj$$135.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12139 = [[parentObj$$135, v7999], v7997, v7997[v7998]]
  }
  var v4534 = JAMScript.call(v12139[2], v12139[1], v12139[0]);
  var dirtySum$$9 = v4533 + v4534;
  var v4535 = parentObj$$135;
  var v8000 = dirtySum$$9 & 15;
  var v10059 = parentObj$$135.registerA;
  var v8001 = v10059 & 15;
  v4535.FHalfCarry = v8000 < v8001;
  parentObj$$135.FCarry = dirtySum$$9 > 255;
  parentObj$$135.registerA = dirtySum$$9 & 255;
  var v4536 = parentObj$$135;
  var v8002 = parentObj$$135.registerA;
  v4536.FZero = v8002 == 0;
  parentObj$$135.FSubtract = false;
  return
}
function v211(parentObj$$134) {
  var v4537 = parentObj$$134.registerA;
  var v8003 = parentObj$$134.registersHL;
  var v4538 = v8003 & 255;
  var dirtySum$$8 = v4537 + v4538;
  var v4539 = parentObj$$134;
  var v8004 = dirtySum$$8 & 15;
  var v10060 = parentObj$$134.registerA;
  var v8005 = v10060 & 15;
  v4539.FHalfCarry = v8004 < v8005;
  parentObj$$134.FCarry = dirtySum$$8 > 255;
  parentObj$$134.registerA = dirtySum$$8 & 255;
  var v4540 = parentObj$$134;
  var v8006 = parentObj$$134.registerA;
  v4540.FZero = v8006 == 0;
  parentObj$$134.FSubtract = false;
  return
}
function v210(parentObj$$133) {
  var v4541 = parentObj$$133.registerA;
  var v8007 = parentObj$$133.registersHL;
  var v4542 = v8007 >> 8;
  var dirtySum$$7 = v4541 + v4542;
  var v4543 = parentObj$$133;
  var v8008 = dirtySum$$7 & 15;
  var v10061 = parentObj$$133.registerA;
  var v8009 = v10061 & 15;
  v4543.FHalfCarry = v8008 < v8009;
  parentObj$$133.FCarry = dirtySum$$7 > 255;
  parentObj$$133.registerA = dirtySum$$7 & 255;
  var v4544 = parentObj$$133;
  var v8010 = parentObj$$133.registerA;
  v4544.FZero = v8010 == 0;
  parentObj$$133.FSubtract = false;
  return
}
function v209(parentObj$$132) {
  var v4545 = parentObj$$132.registerA;
  var v4546 = parentObj$$132.registerE;
  var dirtySum$$6 = v4545 + v4546;
  var v4547 = parentObj$$132;
  var v8011 = dirtySum$$6 & 15;
  var v10062 = parentObj$$132.registerA;
  var v8012 = v10062 & 15;
  v4547.FHalfCarry = v8011 < v8012;
  parentObj$$132.FCarry = dirtySum$$6 > 255;
  parentObj$$132.registerA = dirtySum$$6 & 255;
  var v4548 = parentObj$$132;
  var v8013 = parentObj$$132.registerA;
  v4548.FZero = v8013 == 0;
  parentObj$$132.FSubtract = false;
  return
}
function v208(parentObj$$131) {
  var v4549 = parentObj$$131.registerA;
  var v4550 = parentObj$$131.registerD;
  var dirtySum$$5 = v4549 + v4550;
  var v4551 = parentObj$$131;
  var v8014 = dirtySum$$5 & 15;
  var v10063 = parentObj$$131.registerA;
  var v8015 = v10063 & 15;
  v4551.FHalfCarry = v8014 < v8015;
  parentObj$$131.FCarry = dirtySum$$5 > 255;
  parentObj$$131.registerA = dirtySum$$5 & 255;
  var v4552 = parentObj$$131;
  var v8016 = parentObj$$131.registerA;
  v4552.FZero = v8016 == 0;
  parentObj$$131.FSubtract = false;
  return
}
function v207(parentObj$$130) {
  var v4553 = parentObj$$130.registerA;
  var v4554 = parentObj$$130.registerC;
  var dirtySum$$4 = v4553 + v4554;
  var v4555 = parentObj$$130;
  var v8017 = dirtySum$$4 & 15;
  var v10064 = parentObj$$130.registerA;
  var v8018 = v10064 & 15;
  v4555.FHalfCarry = v8017 < v8018;
  parentObj$$130.FCarry = dirtySum$$4 > 255;
  parentObj$$130.registerA = dirtySum$$4 & 255;
  var v4556 = parentObj$$130;
  var v8019 = parentObj$$130.registerA;
  v4556.FZero = v8019 == 0;
  parentObj$$130.FSubtract = false;
  return
}
function v206(parentObj$$129) {
  var v4557 = parentObj$$129.registerA;
  var v4558 = parentObj$$129.registerB;
  var dirtySum$$3 = v4557 + v4558;
  var v4559 = parentObj$$129;
  var v8020 = dirtySum$$3 & 15;
  var v10065 = parentObj$$129.registerA;
  var v8021 = v10065 & 15;
  v4559.FHalfCarry = v8020 < v8021;
  parentObj$$129.FCarry = dirtySum$$3 > 255;
  parentObj$$129.registerA = dirtySum$$3 & 255;
  var v4560 = parentObj$$129;
  var v8022 = parentObj$$129.registerA;
  v4560.FZero = v8022 == 0;
  parentObj$$129.FSubtract = false;
  return
}
function v205(parentObj$$128) {
  return
}
function v204(parentObj$$127) {
  var v4561 = parentObj$$127;
  var v8023 = parentObj$$127.memoryReader;
  var v8024 = parentObj$$127.registersHL;
  var v8025 = parentObj$$127.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12140 = [[parentObj$$127, v8025], v8023, v8023[v8024]]
  }
  var v11853 = JAMScript.call(v12140[2], v12140[1], v12140[0]);
  v4561.registerA = v11853;
  return
}
function v203(parentObj$$126) {
  var v4562 = parentObj$$126;
  var v8026 = parentObj$$126.registersHL;
  v4562.registerA = v8026 & 255;
  return
}
function v202(parentObj$$125) {
  var v4563 = parentObj$$125;
  var v8027 = parentObj$$125.registersHL;
  v4563.registerA = v8027 >> 8;
  return
}
function v201(parentObj$$124) {
  var v4564 = parentObj$$124;
  v4564.registerA = parentObj$$124.registerE;
  return
}
function v200(parentObj$$123) {
  var v4565 = parentObj$$123;
  v4565.registerA = parentObj$$123.registerD;
  return
}
function v199(parentObj$$122) {
  var v4566 = parentObj$$122;
  v4566.registerA = parentObj$$122.registerC;
  return
}
function v198(parentObj$$121) {
  var v4567 = parentObj$$121;
  v4567.registerA = parentObj$$121.registerB;
  return
}
function v197(parentObj$$120) {
  var v4568 = parentObj$$120.memoryWriter;
  var v4569 = parentObj$$120.registersHL;
  var v4570 = parentObj$$120.registersHL;
  var v4571 = parentObj$$120.registerA;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12141 = [[parentObj$$120, v4570, v4571], v4568, v4568[v4569]]
  }
  JAMScript.call(v12141[2], v12141[1], v12141[0]);
  return
}
function v196(parentObj$$119) {
  var v10990 = parentObj$$119.interruptsEnabled;
  var v10991 = parentObj$$119.interruptsRequested;
  var v10066 = v10990 & v10991;
  var v8028 = v10066 & 31;
  var v4573 = v8028 > 0;
  if(v4573) {
    var v10067 = parentObj$$119.cGBC;
    var v8029 = !v10067;
    if(v8029) {
      var v10068 = parentObj$$119.usedBootROM;
      v8029 = !v10068
    }
    var v4572 = v8029;
    if(v4572) {
      parentObj$$119.skipPCIncrement = true
    }else {
      var v8030 = parentObj$$119;
      var v10069 = parentObj$$119.CPUTicks;
      v8030.CPUTicks = v10069 + 4
    }
  }else {
    JAMScript.call(parentObj$$119.calculateHALTPeriod, parentObj$$119, [])
  }
  return
}
function v195(parentObj$$118) {
  var v4574 = parentObj$$118.memoryWriter;
  var v4575 = parentObj$$118.registersHL;
  var v4576 = parentObj$$118.registersHL;
  var v8031 = parentObj$$118.registersHL;
  var v4577 = v8031 & 255;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12142 = [[parentObj$$118, v4576, v4577], v4574, v4574[v4575]]
  }
  JAMScript.call(v12142[2], v12142[1], v12142[0]);
  return
}
function v194(parentObj$$117) {
  var v4578 = parentObj$$117.memoryWriter;
  var v4579 = parentObj$$117.registersHL;
  var v4580 = parentObj$$117.registersHL;
  var v8032 = parentObj$$117.registersHL;
  var v4581 = v8032 >> 8;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12143 = [[parentObj$$117, v4580, v4581], v4578, v4578[v4579]]
  }
  JAMScript.call(v12143[2], v12143[1], v12143[0]);
  return
}
function v193(parentObj$$116) {
  var v4582 = parentObj$$116.memoryWriter;
  var v4583 = parentObj$$116.registersHL;
  var v4584 = parentObj$$116.registersHL;
  var v4585 = parentObj$$116.registerE;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12144 = [[parentObj$$116, v4584, v4585], v4582, v4582[v4583]]
  }
  JAMScript.call(v12144[2], v12144[1], v12144[0]);
  return
}
function v192(parentObj$$115) {
  var v4586 = parentObj$$115.memoryWriter;
  var v4587 = parentObj$$115.registersHL;
  var v4588 = parentObj$$115.registersHL;
  var v4589 = parentObj$$115.registerD;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12145 = [[parentObj$$115, v4588, v4589], v4586, v4586[v4587]]
  }
  JAMScript.call(v12145[2], v12145[1], v12145[0]);
  return
}
function v191(parentObj$$114) {
  var v4590 = parentObj$$114.memoryWriter;
  var v4591 = parentObj$$114.registersHL;
  var v4592 = parentObj$$114.registersHL;
  var v4593 = parentObj$$114.registerC;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12146 = [[parentObj$$114, v4592, v4593], v4590, v4590[v4591]]
  }
  JAMScript.call(v12146[2], v12146[1], v12146[0]);
  return
}
function v190(parentObj$$113) {
  var v4594 = parentObj$$113.memoryWriter;
  var v4595 = parentObj$$113.registersHL;
  var v4596 = parentObj$$113.registersHL;
  var v4597 = parentObj$$113.registerB;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12147 = [[parentObj$$113, v4596, v4597], v4594, v4594[v4595]]
  }
  JAMScript.call(v12147[2], v12147[1], v12147[0]);
  return
}
function v189(parentObj$$112) {
  var v4598 = parentObj$$112;
  var v10070 = parentObj$$112.registersHL;
  var v8033 = v10070 & 65280;
  var v8034 = parentObj$$112.registerA;
  v4598.registersHL = v8033 | v8034;
  return
}
function v188(parentObj$$111) {
  var v4599 = parentObj$$111;
  var v10071 = parentObj$$111.registersHL;
  var v8035 = v10071 & 65280;
  var v10072 = parentObj$$111.memoryReader;
  var v10073 = parentObj$$111.registersHL;
  var v10074 = parentObj$$111.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12148 = [[parentObj$$111, v10074], v10072, v10072[v10073]]
  }
  var v8036 = JAMScript.call(v12148[2], v12148[1], v12148[0]);
  v4599.registersHL = v8035 | v8036;
  return
}
function v187(parentObj$$110) {
  return
}
function v186(parentObj$$109) {
  var v4600 = parentObj$$109;
  var v10075 = parentObj$$109.registersHL;
  var v8037 = v10075 & 65280;
  var v10076 = parentObj$$109.registersHL;
  var v8038 = v10076 >> 8;
  v4600.registersHL = v8037 | v8038;
  return
}
function v185(parentObj$$108) {
  var v4601 = parentObj$$108;
  var v10077 = parentObj$$108.registersHL;
  var v8039 = v10077 & 65280;
  var v8040 = parentObj$$108.registerE;
  v4601.registersHL = v8039 | v8040;
  return
}
function v184(parentObj$$107) {
  var v4602 = parentObj$$107;
  var v10078 = parentObj$$107.registersHL;
  var v8041 = v10078 & 65280;
  var v8042 = parentObj$$107.registerD;
  v4602.registersHL = v8041 | v8042;
  return
}
function v183(parentObj$$106) {
  var v4603 = parentObj$$106;
  var v10079 = parentObj$$106.registersHL;
  var v8043 = v10079 & 65280;
  var v8044 = parentObj$$106.registerC;
  v4603.registersHL = v8043 | v8044;
  return
}
function v182(parentObj$$105) {
  var v4604 = parentObj$$105;
  var v10080 = parentObj$$105.registersHL;
  var v8045 = v10080 & 65280;
  var v8046 = parentObj$$105.registerB;
  v4604.registersHL = v8045 | v8046;
  return
}
function v181(parentObj$$104) {
  var v4605 = parentObj$$104;
  var v10081 = parentObj$$104.registerA;
  var v8047 = v10081 << 8;
  var v10082 = parentObj$$104.registersHL;
  var v8048 = v10082 & 255;
  v4605.registersHL = v8047 | v8048;
  return
}
function v180(parentObj$$103) {
  var v4606 = parentObj$$103;
  var v10992 = parentObj$$103.memoryReader;
  var v10993 = parentObj$$103.registersHL;
  var v10994 = parentObj$$103.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12149 = [[parentObj$$103, v10994], v10992, v10992[v10993]]
  }
  var v10083 = JAMScript.call(v12149[2], v12149[1], v12149[0]);
  var v8049 = v10083 << 8;
  var v10084 = parentObj$$103.registersHL;
  var v8050 = v10084 & 255;
  v4606.registersHL = v8049 | v8050;
  return
}
function v179(parentObj$$102) {
  var v4607 = parentObj$$102;
  var v10085 = parentObj$$102.registersHL;
  var v8051 = v10085 & 255;
  v4607.registersHL = v8051 * 257;
  return
}
function v178(parentObj$$101) {
  return
}
function v177(parentObj$$100) {
  var v4608 = parentObj$$100;
  var v10086 = parentObj$$100.registerE;
  var v8052 = v10086 << 8;
  var v10087 = parentObj$$100.registersHL;
  var v8053 = v10087 & 255;
  v4608.registersHL = v8052 | v8053;
  return
}
function v176(parentObj$$99) {
  var v4609 = parentObj$$99;
  var v10088 = parentObj$$99.registerD;
  var v8054 = v10088 << 8;
  var v10089 = parentObj$$99.registersHL;
  var v8055 = v10089 & 255;
  v4609.registersHL = v8054 | v8055;
  return
}
function v175(parentObj$$98) {
  var v4610 = parentObj$$98;
  var v10090 = parentObj$$98.registerC;
  var v8056 = v10090 << 8;
  var v10091 = parentObj$$98.registersHL;
  var v8057 = v10091 & 255;
  v4610.registersHL = v8056 | v8057;
  return
}
function v174(parentObj$$97) {
  var v4611 = parentObj$$97;
  var v10092 = parentObj$$97.registerB;
  var v8058 = v10092 << 8;
  var v10093 = parentObj$$97.registersHL;
  var v8059 = v10093 & 255;
  v4611.registersHL = v8058 | v8059;
  return
}
function v173(parentObj$$96) {
  var v4612 = parentObj$$96;
  v4612.registerE = parentObj$$96.registerA;
  return
}
function v172(parentObj$$95) {
  var v4613 = parentObj$$95;
  var v8060 = parentObj$$95.memoryReader;
  var v8061 = parentObj$$95.registersHL;
  var v8062 = parentObj$$95.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12150 = [[parentObj$$95, v8062], v8060, v8060[v8061]]
  }
  var v11854 = JAMScript.call(v12150[2], v12150[1], v12150[0]);
  v4613.registerE = v11854;
  return
}
function v171(parentObj$$94) {
  var v4614 = parentObj$$94;
  var v8063 = parentObj$$94.registersHL;
  v4614.registerE = v8063 & 255;
  return
}
function v170(parentObj$$93) {
  var v4615 = parentObj$$93;
  var v8064 = parentObj$$93.registersHL;
  v4615.registerE = v8064 >> 8;
  return
}
function v169(parentObj$$92) {
  return
}
function v168(parentObj$$91) {
  var v4616 = parentObj$$91;
  v4616.registerE = parentObj$$91.registerD;
  return
}
function v167(parentObj$$90) {
  var v4617 = parentObj$$90;
  v4617.registerE = parentObj$$90.registerC;
  return
}
function v166(parentObj$$89) {
  var v4618 = parentObj$$89;
  v4618.registerE = parentObj$$89.registerB;
  return
}
function v165(parentObj$$88) {
  var v4619 = parentObj$$88;
  v4619.registerD = parentObj$$88.registerA;
  return
}
function v164(parentObj$$87) {
  var v4620 = parentObj$$87;
  var v8065 = parentObj$$87.memoryReader;
  var v8066 = parentObj$$87.registersHL;
  var v8067 = parentObj$$87.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12151 = [[parentObj$$87, v8067], v8065, v8065[v8066]]
  }
  var v11855 = JAMScript.call(v12151[2], v12151[1], v12151[0]);
  v4620.registerD = v11855;
  return
}
function v163(parentObj$$86) {
  var v4621 = parentObj$$86;
  var v8068 = parentObj$$86.registersHL;
  v4621.registerD = v8068 & 255;
  return
}
function v162(parentObj$$85) {
  var v4622 = parentObj$$85;
  var v8069 = parentObj$$85.registersHL;
  v4622.registerD = v8069 >> 8;
  return
}
function v161(parentObj$$84) {
  var v4623 = parentObj$$84;
  v4623.registerD = parentObj$$84.registerE;
  return
}
function v160(parentObj$$83) {
  return
}
function v159(parentObj$$82) {
  var v4624 = parentObj$$82;
  v4624.registerD = parentObj$$82.registerC;
  return
}
function v158(parentObj$$81) {
  var v4625 = parentObj$$81;
  v4625.registerD = parentObj$$81.registerB;
  return
}
function v157(parentObj$$80) {
  var v4626 = parentObj$$80;
  v4626.registerC = parentObj$$80.registerA;
  return
}
function v156(parentObj$$79) {
  var v4627 = parentObj$$79;
  var v8070 = parentObj$$79.memoryReader;
  var v8071 = parentObj$$79.registersHL;
  var v8072 = parentObj$$79.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12152 = [[parentObj$$79, v8072], v8070, v8070[v8071]]
  }
  var v11856 = JAMScript.call(v12152[2], v12152[1], v12152[0]);
  v4627.registerC = v11856;
  return
}
function v155(parentObj$$78) {
  var v4628 = parentObj$$78;
  var v8073 = parentObj$$78.registersHL;
  v4628.registerC = v8073 & 255;
  return
}
function v154(parentObj$$77) {
  var v4629 = parentObj$$77;
  var v8074 = parentObj$$77.registersHL;
  v4629.registerC = v8074 >> 8;
  return
}
function v153(parentObj$$76) {
  var v4630 = parentObj$$76;
  v4630.registerC = parentObj$$76.registerE;
  return
}
function v152(parentObj$$75) {
  var v4631 = parentObj$$75;
  v4631.registerC = parentObj$$75.registerD;
  return
}
function v151(parentObj$$74) {
  return
}
function v150(parentObj$$73) {
  var v4632 = parentObj$$73;
  v4632.registerC = parentObj$$73.registerB;
  return
}
function v149(parentObj$$72) {
  var v4633 = parentObj$$72;
  v4633.registerB = parentObj$$72.registerA;
  return
}
function v148(parentObj$$71) {
  var v4634 = parentObj$$71;
  var v8075 = parentObj$$71.memoryReader;
  var v8076 = parentObj$$71.registersHL;
  var v8077 = parentObj$$71.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12153 = [[parentObj$$71, v8077], v8075, v8075[v8076]]
  }
  var v11857 = JAMScript.call(v12153[2], v12153[1], v12153[0]);
  v4634.registerB = v11857;
  return
}
function v147(parentObj$$70) {
  var v4635 = parentObj$$70;
  var v8078 = parentObj$$70.registersHL;
  v4635.registerB = v8078 & 255;
  return
}
function v146(parentObj$$69) {
  var v4636 = parentObj$$69;
  var v8079 = parentObj$$69.registersHL;
  v4636.registerB = v8079 >> 8;
  return
}
function v145(parentObj$$68) {
  var v4637 = parentObj$$68;
  v4637.registerB = parentObj$$68.registerE;
  return
}
function v144(parentObj$$67) {
  var v4638 = parentObj$$67;
  v4638.registerB = parentObj$$67.registerD;
  return
}
function v143(parentObj$$66) {
  var v4639 = parentObj$$66;
  v4639.registerB = parentObj$$66.registerC;
  return
}
function v142(parentObj$$65) {
  return
}
function v141(parentObj$$64) {
  var v4640 = parentObj$$64;
  var v8080 = parentObj$$64.FCarry;
  v4640.FCarry = !v8080;
  var v4641 = parentObj$$64;
  v4641.FSubtract = parentObj$$64.FHalfCarry = false;
  return
}
function v140(parentObj$$63) {
  var v4642 = parentObj$$63;
  var v8081 = parentObj$$63.memoryReader;
  var v8082 = parentObj$$63.programCounter;
  var v8083 = parentObj$$63.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12154 = [[parentObj$$63, v8083], v8081, v8081[v8082]]
  }
  var v11858 = JAMScript.call(v12154[2], v12154[1], v12154[0]);
  v4642.registerA = v11858;
  var v4643 = parentObj$$63;
  var v10094 = parentObj$$63.programCounter;
  var v8084 = v10094 + 1;
  v4643.programCounter = v8084 & 65535;
  return
}
function v139(parentObj$$62) {
  var v4644 = parentObj$$62;
  var v10095 = parentObj$$62.registerA;
  var v8085 = v10095 - 1;
  v4644.registerA = v8085 & 255;
  var v4645 = parentObj$$62;
  var v8086 = parentObj$$62.registerA;
  v4645.FZero = v8086 == 0;
  var v4646 = parentObj$$62;
  var v10096 = parentObj$$62.registerA;
  var v8087 = v10096 & 15;
  v4646.FHalfCarry = v8087 == 15;
  parentObj$$62.FSubtract = true;
  return
}
function v138(parentObj$$61) {
  var v4647 = parentObj$$61;
  var v10097 = parentObj$$61.registerA;
  var v8088 = v10097 + 1;
  v4647.registerA = v8088 & 255;
  var v4648 = parentObj$$61;
  var v8089 = parentObj$$61.registerA;
  v4648.FZero = v8089 == 0;
  var v4649 = parentObj$$61;
  var v10098 = parentObj$$61.registerA;
  var v8090 = v10098 & 15;
  v4649.FHalfCarry = v8090 == 0;
  parentObj$$61.FSubtract = false;
  return
}
function v137(parentObj$$60) {
  var v4650 = parentObj$$60;
  var v10099 = parentObj$$60.stackPointer;
  var v8091 = v10099 - 1;
  v4650.stackPointer = v8091 & 65535;
  return
}
function v136(parentObj$$59) {
  var v4651 = parentObj$$59;
  var v8092 = parentObj$$59.memoryReader;
  var v8093 = parentObj$$59.registersHL;
  var v8094 = parentObj$$59.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12155 = [[parentObj$$59, v8094], v8092, v8092[v8093]]
  }
  var v11859 = JAMScript.call(v12155[2], v12155[1], v12155[0]);
  v4651.registerA = v11859;
  var v4652 = parentObj$$59;
  var v10100 = parentObj$$59.registersHL;
  var v8095 = v10100 - 1;
  v4652.registersHL = v8095 & 65535;
  return
}
function v135(parentObj$$58) {
  var v4653 = parentObj$$58.registersHL;
  var v4654 = parentObj$$58.stackPointer;
  var dirtySum$$2 = v4653 + v4654;
  var v4655 = parentObj$$58;
  var v10101 = parentObj$$58.registersHL;
  var v8096 = v10101 & 4095;
  var v8097 = dirtySum$$2 & 4095;
  v4655.FHalfCarry = v8096 > v8097;
  parentObj$$58.FCarry = dirtySum$$2 > 65535;
  parentObj$$58.registersHL = dirtySum$$2 & 65535;
  parentObj$$58.FSubtract = false;
  return
}
function v134(parentObj$$57) {
  var v4658 = parentObj$$57.FCarry;
  if(v4658) {
    var v4656 = parentObj$$57;
    var v10995 = parentObj$$57.programCounter;
    var v11649 = parentObj$$57.memoryReader;
    var v11650 = parentObj$$57.programCounter;
    var v11651 = parentObj$$57.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12156 = [[parentObj$$57, v11651], v11649, v11649[v11650]]
    }
    var v11586 = JAMScript.call(v12156[2], v12156[1], v12156[0]);
    var v11400 = v11586 << 24;
    var v10996 = v11400 >> 24;
    var v10102 = v10995 + v10996;
    var v8098 = v10102 + 1;
    v4656.programCounter = v8098 & 65535;
    var v8099 = parentObj$$57;
    var v10103 = parentObj$$57.CPUTicks;
    v8099.CPUTicks = v10103 + 4
  }else {
    var v4657 = parentObj$$57;
    var v10104 = parentObj$$57.programCounter;
    var v8100 = v10104 + 1;
    v4657.programCounter = v8100 & 65535
  }
  return
}
function v133(parentObj$$56) {
  parentObj$$56.FCarry = true;
  var v4659 = parentObj$$56;
  v4659.FSubtract = parentObj$$56.FHalfCarry = false;
  return
}
function v132(parentObj$$55) {
  var v4660 = parentObj$$55.memoryWriter;
  var v4661 = parentObj$$55.registersHL;
  var v4662 = parentObj$$55.registersHL;
  var v8101 = parentObj$$55.memoryReader;
  var v8102 = parentObj$$55.programCounter;
  var v8103 = parentObj$$55.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12157 = [[parentObj$$55, v8103], v8101, v8101[v8102]]
  }
  var v4663 = JAMScript.call(v12157[2], v12157[1], v12157[0]);
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12158 = [[parentObj$$55, v4662, v4663], v4660, v4660[v4661]]
  }
  JAMScript.call(v12158[2], v12158[1], v12158[0]);
  var v4664 = parentObj$$55;
  var v10105 = parentObj$$55.programCounter;
  var v8104 = v10105 + 1;
  v4664.programCounter = v8104 & 65535;
  return
}
function v131(parentObj$$54) {
  var v10106 = parentObj$$54.memoryReader;
  var v10107 = parentObj$$54.registersHL;
  var v10108 = parentObj$$54.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12159 = [[parentObj$$54, v10108], v10106, v10106[v10107]]
  }
  var v8105 = JAMScript.call(v12159[2], v12159[1], v12159[0]);
  var v4665 = v8105 - 1;
  var temp_var$$6 = v4665 & 255;
  parentObj$$54.FZero = temp_var$$6 == 0;
  var v4666 = temp_var$$6 & 15;
  parentObj$$54.FHalfCarry = v4666 == 15;
  parentObj$$54.FSubtract = true;
  var v4667 = parentObj$$54.memoryWriter;
  var v4668 = parentObj$$54.registersHL;
  var v4669 = parentObj$$54.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12160 = [[parentObj$$54, v4669, temp_var$$6], v4667, v4667[v4668]]
  }
  JAMScript.call(v12160[2], v12160[1], v12160[0]);
  return
}
function v130(parentObj$$53) {
  var v10109 = parentObj$$53.memoryReader;
  var v10110 = parentObj$$53.registersHL;
  var v10111 = parentObj$$53.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12161 = [[parentObj$$53, v10111], v10109, v10109[v10110]]
  }
  var v8106 = JAMScript.call(v12161[2], v12161[1], v12161[0]);
  var v4670 = v8106 + 1;
  var temp_var$$5 = v4670 & 255;
  parentObj$$53.FZero = temp_var$$5 == 0;
  var v4671 = temp_var$$5 & 15;
  parentObj$$53.FHalfCarry = v4671 == 0;
  parentObj$$53.FSubtract = false;
  var v4672 = parentObj$$53.memoryWriter;
  var v4673 = parentObj$$53.registersHL;
  var v4674 = parentObj$$53.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12162 = [[parentObj$$53, v4674, temp_var$$5], v4672, v4672[v4673]]
  }
  JAMScript.call(v12162[2], v12162[1], v12162[0]);
  return
}
function v129(parentObj$$52) {
  var v4675 = parentObj$$52;
  var v10112 = parentObj$$52.stackPointer;
  var v8107 = v10112 + 1;
  v4675.stackPointer = v8107 & 65535;
  return
}
function v128(parentObj$$51) {
  var v4676 = parentObj$$51.memoryWriter;
  var v4677 = parentObj$$51.registersHL;
  var v4678 = parentObj$$51.registersHL;
  var v4679 = parentObj$$51.registerA;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12163 = [[parentObj$$51, v4678, v4679], v4676, v4676[v4677]]
  }
  JAMScript.call(v12163[2], v12163[1], v12163[0]);
  var v4680 = parentObj$$51;
  var v10113 = parentObj$$51.registersHL;
  var v8108 = v10113 - 1;
  v4680.registersHL = v8108 & 65535;
  return
}
function v127(parentObj$$50) {
  var v4681 = parentObj$$50;
  var v11587 = parentObj$$50.programCounter;
  var v11401 = v11587 + 1;
  var v10997 = v11401 & 65535;
  var v10114 = JAMScript.call(parentObj$$50.memoryRead, parentObj$$50, [v10997]);
  var v8109 = v10114 << 8;
  var v10115 = parentObj$$50.memoryReader;
  var v10116 = parentObj$$50.programCounter;
  var v10117 = parentObj$$50.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12164 = [[parentObj$$50, v10117], v10115, v10115[v10116]]
  }
  var v8110 = JAMScript.call(v12164[2], v12164[1], v12164[0]);
  v4681.stackPointer = v8109 | v8110;
  var v4682 = parentObj$$50;
  var v10118 = parentObj$$50.programCounter;
  var v8111 = v10118 + 2;
  v4682.programCounter = v8111 & 65535;
  return
}
function v126(parentObj$$49) {
  var v8112 = parentObj$$49.FCarry;
  var v4685 = !v8112;
  if(v4685) {
    var v4683 = parentObj$$49;
    var v10998 = parentObj$$49.programCounter;
    var v11652 = parentObj$$49.memoryReader;
    var v11653 = parentObj$$49.programCounter;
    var v11654 = parentObj$$49.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12165 = [[parentObj$$49, v11654], v11652, v11652[v11653]]
    }
    var v11588 = JAMScript.call(v12165[2], v12165[1], v12165[0]);
    var v11402 = v11588 << 24;
    var v10999 = v11402 >> 24;
    var v10119 = v10998 + v10999;
    var v8113 = v10119 + 1;
    v4683.programCounter = v8113 & 65535;
    var v8114 = parentObj$$49;
    var v10120 = parentObj$$49.CPUTicks;
    v8114.CPUTicks = v10120 + 4
  }else {
    var v4684 = parentObj$$49;
    var v10121 = parentObj$$49.programCounter;
    var v8115 = v10121 + 1;
    v4684.programCounter = v8115 & 65535
  }
  return
}
function v125(parentObj$$48) {
  var v8116 = parentObj$$48;
  var v10122 = parentObj$$48.registerA;
  v8116.registerA = v10122 ^ 255;
  var v4686 = parentObj$$48;
  v4686.FSubtract = parentObj$$48.FHalfCarry = true;
  return
}
function v124(parentObj$$47) {
  var v4687 = parentObj$$47;
  var v10123 = parentObj$$47.registersHL;
  var v8117 = v10123 & 65280;
  var v10124 = parentObj$$47.memoryReader;
  var v10125 = parentObj$$47.programCounter;
  var v10126 = parentObj$$47.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12166 = [[parentObj$$47, v10126], v10124, v10124[v10125]]
  }
  var v8118 = JAMScript.call(v12166[2], v12166[1], v12166[0]);
  v4687.registersHL = v8117 | v8118;
  var v4688 = parentObj$$47;
  var v10127 = parentObj$$47.programCounter;
  var v8119 = v10127 + 1;
  v4688.programCounter = v8119 & 65535;
  return
}
function v123(parentObj$$46) {
  var v8120 = parentObj$$46.registersHL;
  var v4689 = v8120 - 1;
  var L$$1 = v4689 & 255;
  parentObj$$46.FZero = L$$1 == 0;
  var v4690 = L$$1 & 15;
  parentObj$$46.FHalfCarry = v4690 == 15;
  parentObj$$46.FSubtract = true;
  var v4691 = parentObj$$46;
  var v10128 = parentObj$$46.registersHL;
  var v8121 = v10128 & 65280;
  v4691.registersHL = v8121 | L$$1;
  return
}
function v122(parentObj$$45) {
  var v8122 = parentObj$$45.registersHL;
  var v4692 = v8122 + 1;
  var L = v4692 & 255;
  parentObj$$45.FZero = L == 0;
  var v4693 = L & 15;
  parentObj$$45.FHalfCarry = v4693 == 0;
  parentObj$$45.FSubtract = false;
  var v4694 = parentObj$$45;
  var v10129 = parentObj$$45.registersHL;
  var v8123 = v10129 & 65280;
  v4694.registersHL = v8123 | L;
  return
}
function v121(parentObj$$44) {
  var v4695 = parentObj$$44;
  var v10130 = parentObj$$44.registersHL;
  var v8124 = v10130 - 1;
  v4695.registersHL = v8124 & 65535;
  return
}
function v120(parentObj$$43) {
  var v4696 = parentObj$$43;
  var v8125 = parentObj$$43.memoryReader;
  var v8126 = parentObj$$43.registersHL;
  var v8127 = parentObj$$43.registersHL;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12167 = [[parentObj$$43, v8127], v8125, v8125[v8126]]
  }
  var v11860 = JAMScript.call(v12167[2], v12167[1], v12167[0]);
  v4696.registerA = v11860;
  var v4697 = parentObj$$43;
  var v10131 = parentObj$$43.registersHL;
  var v8128 = v10131 + 1;
  v4697.registersHL = v8128 & 65535;
  return
}
function v119(parentObj$$42) {
  var v4698 = parentObj$$42;
  var v10132 = parentObj$$42.registersHL;
  var v8129 = v10132 & 4095;
  v4698.FHalfCarry = v8129 > 2047;
  var v4699 = parentObj$$42;
  var v8130 = parentObj$$42.registersHL;
  v4699.FCarry = v8130 > 32767;
  var v4700 = parentObj$$42;
  var v10133 = parentObj$$42.registersHL;
  var v8131 = v10133 << 1;
  v4700.registersHL = v8131 & 65535;
  parentObj$$42.FSubtract = false;
  return
}
function v118(parentObj$$41) {
  var v4703 = parentObj$$41.FZero;
  if(v4703) {
    var v4701 = parentObj$$41;
    var v11000 = parentObj$$41.programCounter;
    var v11655 = parentObj$$41.memoryReader;
    var v11656 = parentObj$$41.programCounter;
    var v11657 = parentObj$$41.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12168 = [[parentObj$$41, v11657], v11655, v11655[v11656]]
    }
    var v11589 = JAMScript.call(v12168[2], v12168[1], v12168[0]);
    var v11403 = v11589 << 24;
    var v11001 = v11403 >> 24;
    var v10134 = v11000 + v11001;
    var v8132 = v10134 + 1;
    v4701.programCounter = v8132 & 65535;
    var v8133 = parentObj$$41;
    var v10135 = parentObj$$41.CPUTicks;
    v8133.CPUTicks = v10135 + 4
  }else {
    var v4702 = parentObj$$41;
    var v10136 = parentObj$$41.programCounter;
    var v8134 = v10136 + 1;
    v4702.programCounter = v8134 & 65535
  }
  return
}
function v117(parentObj$$40) {
  var v8135 = parentObj$$40.FSubtract;
  var v4714 = !v8135;
  if(v4714) {
    var v8136 = parentObj$$40.FCarry;
    var v10138 = !v8136;
    if(v10138) {
      var v10137 = parentObj$$40.registerA;
      v8136 = v10137 > 153
    }
    var v4705 = v8136;
    if(v4705) {
      var v4704 = parentObj$$40;
      var v10139 = parentObj$$40.registerA;
      var v8137 = v10139 + 96;
      v4704.registerA = v8137 & 255;
      parentObj$$40.FCarry = true
    }
    var v8138 = parentObj$$40.FHalfCarry;
    var v10141 = !v8138;
    if(v10141) {
      var v11002 = parentObj$$40.registerA;
      var v10140 = v11002 & 15;
      v8138 = v10140 > 9
    }
    var v4707 = v8138;
    if(v4707) {
      var v4706 = parentObj$$40;
      var v10142 = parentObj$$40.registerA;
      var v8139 = v10142 + 6;
      v4706.registerA = v8139 & 255;
      parentObj$$40.FHalfCarry = false
    }
  }else {
    var v8140 = parentObj$$40.FCarry;
    if(v8140) {
      v8140 = parentObj$$40.FHalfCarry
    }
    var v4713 = v8140;
    if(v4713) {
      var v4708 = parentObj$$40;
      var v10143 = parentObj$$40.registerA;
      var v8141 = v10143 + 154;
      v4708.registerA = v8141 & 255;
      parentObj$$40.FHalfCarry = false
    }else {
      var v4712 = parentObj$$40.FCarry;
      if(v4712) {
        var v4709 = parentObj$$40;
        var v10144 = parentObj$$40.registerA;
        var v8142 = v10144 + 160;
        v4709.registerA = v8142 & 255
      }else {
        var v4711 = parentObj$$40.FHalfCarry;
        if(v4711) {
          var v4710 = parentObj$$40;
          var v10145 = parentObj$$40.registerA;
          var v8143 = v10145 + 250;
          v4710.registerA = v8143 & 255;
          parentObj$$40.FHalfCarry = false
        }
      }
    }
  }
  var v4715 = parentObj$$40;
  var v8144 = parentObj$$40.registerA;
  v4715.FZero = v8144 == 0;
  return
}
function v116(parentObj$$39) {
  var v4716 = parentObj$$39;
  var v11003 = parentObj$$39.memoryReader;
  var v11004 = parentObj$$39.programCounter;
  var v11005 = parentObj$$39.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12169 = [[parentObj$$39, v11005], v11003, v11003[v11004]]
  }
  var v10146 = JAMScript.call(v12169[2], v12169[1], v12169[0]);
  var v8145 = v10146 << 8;
  var v10147 = parentObj$$39.registersHL;
  var v8146 = v10147 & 255;
  v4716.registersHL = v8145 | v8146;
  var v4717 = parentObj$$39;
  var v10148 = parentObj$$39.programCounter;
  var v8147 = v10148 + 1;
  v4717.programCounter = v8147 & 65535;
  return
}
function v115(parentObj$$38) {
  var v10149 = parentObj$$38.registersHL;
  var v8148 = v10149 >> 8;
  var v4718 = v8148 - 1;
  var H$$1 = v4718 & 255;
  parentObj$$38.FZero = H$$1 == 0;
  var v4719 = H$$1 & 15;
  parentObj$$38.FHalfCarry = v4719 == 15;
  parentObj$$38.FSubtract = true;
  var v4720 = parentObj$$38;
  var v8149 = H$$1 << 8;
  var v10150 = parentObj$$38.registersHL;
  var v8150 = v10150 & 255;
  v4720.registersHL = v8149 | v8150;
  return
}
function v114(parentObj$$37) {
  var v10151 = parentObj$$37.registersHL;
  var v8151 = v10151 >> 8;
  var v4721 = v8151 + 1;
  var H = v4721 & 255;
  parentObj$$37.FZero = H == 0;
  var v4722 = H & 15;
  parentObj$$37.FHalfCarry = v4722 == 0;
  parentObj$$37.FSubtract = false;
  var v4723 = parentObj$$37;
  var v8152 = H << 8;
  var v10152 = parentObj$$37.registersHL;
  var v8153 = v10152 & 255;
  v4723.registersHL = v8152 | v8153;
  return
}
function v113(parentObj$$36) {
  var v4724 = parentObj$$36;
  var v10153 = parentObj$$36.registersHL;
  var v8154 = v10153 + 1;
  v4724.registersHL = v8154 & 65535;
  return
}
function v112(parentObj$$35) {
  var v4725 = parentObj$$35.memoryWriter;
  var v4726 = parentObj$$35.registersHL;
  var v4727 = parentObj$$35.registersHL;
  var v4728 = parentObj$$35.registerA;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12170 = [[parentObj$$35, v4727, v4728], v4725, v4725[v4726]]
  }
  JAMScript.call(v12170[2], v12170[1], v12170[0]);
  var v4729 = parentObj$$35;
  var v10154 = parentObj$$35.registersHL;
  var v8155 = v10154 + 1;
  v4729.registersHL = v8155 & 65535;
  return
}
function v111(parentObj$$34) {
  var v4730 = parentObj$$34;
  var v11590 = parentObj$$34.programCounter;
  var v11404 = v11590 + 1;
  var v11006 = v11404 & 65535;
  var v10155 = JAMScript.call(parentObj$$34.memoryRead, parentObj$$34, [v11006]);
  var v8156 = v10155 << 8;
  var v10156 = parentObj$$34.memoryReader;
  var v10157 = parentObj$$34.programCounter;
  var v10158 = parentObj$$34.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12171 = [[parentObj$$34, v10158], v10156, v10156[v10157]]
  }
  var v8157 = JAMScript.call(v12171[2], v12171[1], v12171[0]);
  v4730.registersHL = v8156 | v8157;
  var v4731 = parentObj$$34;
  var v10159 = parentObj$$34.programCounter;
  var v8158 = v10159 + 2;
  v4731.programCounter = v8158 & 65535;
  return
}
function v110(parentObj$$33) {
  var v8159 = parentObj$$33.FZero;
  var v4734 = !v8159;
  if(v4734) {
    var v4732 = parentObj$$33;
    var v11007 = parentObj$$33.programCounter;
    var v11658 = parentObj$$33.memoryReader;
    var v11659 = parentObj$$33.programCounter;
    var v11660 = parentObj$$33.programCounter;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v12172 = [[parentObj$$33, v11660], v11658, v11658[v11659]]
    }
    var v11591 = JAMScript.call(v12172[2], v12172[1], v12172[0]);
    var v11405 = v11591 << 24;
    var v11008 = v11405 >> 24;
    var v10160 = v11007 + v11008;
    var v8160 = v10160 + 1;
    v4732.programCounter = v8160 & 65535;
    var v8161 = parentObj$$33;
    var v10161 = parentObj$$33.CPUTicks;
    v8161.CPUTicks = v10161 + 4
  }else {
    var v4733 = parentObj$$33;
    var v10162 = parentObj$$33.programCounter;
    var v8162 = v10162 + 1;
    v4733.programCounter = v8162 & 65535
  }
  return
}
function v109(parentObj$$32) {
  var v4735;
  var v8163 = parentObj$$32.FCarry;
  if(v8163) {
    v4735 = 128
  }else {
    v4735 = 0
  }
  var carry_flag$$1 = v4735;
  var v4736 = parentObj$$32;
  var v10163 = parentObj$$32.registerA;
  var v8164 = v10163 & 1;
  v4736.FCarry = v8164 == 1;
  var v4737 = parentObj$$32;
  var v10164 = parentObj$$32.registerA;
  var v8165 = v10164 >> 1;
  v4737.registerA = v8165 | carry_flag$$1;
  var v4738 = parentObj$$32;
  var v8166 = parentObj$$32;
  v4738.FZero = v8166.FSubtract = parentObj$$32.FHalfCarry = false;
  return
}
function v108(parentObj$$31) {
  var v4739 = parentObj$$31;
  var v8167 = parentObj$$31.memoryReader;
  var v8168 = parentObj$$31.programCounter;
  var v8169 = parentObj$$31.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12173 = [[parentObj$$31, v8169], v8167, v8167[v8168]]
  }
  var v11861 = JAMScript.call(v12173[2], v12173[1], v12173[0]);
  v4739.registerE = v11861;
  var v4740 = parentObj$$31;
  var v10165 = parentObj$$31.programCounter;
  var v8170 = v10165 + 1;
  v4740.programCounter = v8170 & 65535;
  return
}
function v107(parentObj$$30) {
  var v4741 = parentObj$$30;
  var v10166 = parentObj$$30.registerE;
  var v8171 = v10166 - 1;
  v4741.registerE = v8171 & 255;
  var v4742 = parentObj$$30;
  var v8172 = parentObj$$30.registerE;
  v4742.FZero = v8172 == 0;
  var v4743 = parentObj$$30;
  var v10167 = parentObj$$30.registerE;
  var v8173 = v10167 & 15;
  v4743.FHalfCarry = v8173 == 15;
  parentObj$$30.FSubtract = true;
  return
}
function v106(parentObj$$29) {
  var v4744 = parentObj$$29;
  var v10168 = parentObj$$29.registerE;
  var v8174 = v10168 + 1;
  v4744.registerE = v8174 & 255;
  var v4745 = parentObj$$29;
  var v8175 = parentObj$$29.registerE;
  v4745.FZero = v8175 == 0;
  var v4746 = parentObj$$29;
  var v10169 = parentObj$$29.registerE;
  var v8176 = v10169 & 15;
  v4746.FHalfCarry = v8176 == 0;
  parentObj$$29.FSubtract = false;
  return
}
function v105(parentObj$$28) {
  var v11009 = parentObj$$28.registerD;
  var v10170 = v11009 << 8;
  var v10171 = parentObj$$28.registerE;
  var v8177 = v10170 | v10171;
  var v4747 = v8177 - 1;
  var temp_var$$4 = v4747 & 65535;
  parentObj$$28.registerD = temp_var$$4 >> 8;
  parentObj$$28.registerE = temp_var$$4 & 255;
  return
}
function v104(parentObj$$27) {
  var v4748 = parentObj$$27;
  var v11010 = parentObj$$27.registerD;
  var v10172 = v11010 << 8;
  var v10173 = parentObj$$27.registerE;
  var v8178 = v10172 | v10173;
  var v11862 = JAMScript.call(parentObj$$27.memoryRead, parentObj$$27, [v8178]);
  v4748.registerA = v11862;
  return
}
function v103(parentObj$$26) {
  var v4749 = parentObj$$26.registersHL;
  var v10174 = parentObj$$26.registerD;
  var v8179 = v10174 << 8;
  var v8180 = parentObj$$26.registerE;
  var v4750 = v8179 | v8180;
  var dirtySum$$1 = v4749 + v4750;
  var v4751 = parentObj$$26;
  var v10175 = parentObj$$26.registersHL;
  var v8181 = v10175 & 4095;
  var v8182 = dirtySum$$1 & 4095;
  v4751.FHalfCarry = v8181 > v8182;
  parentObj$$26.FCarry = dirtySum$$1 > 65535;
  parentObj$$26.registersHL = dirtySum$$1 & 65535;
  parentObj$$26.FSubtract = false;
  return
}
function v102(parentObj$$25) {
  var v4752 = parentObj$$25;
  var v11011 = parentObj$$25.programCounter;
  var v11661 = parentObj$$25.memoryReader;
  var v11662 = parentObj$$25.programCounter;
  var v11663 = parentObj$$25.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12174 = [[parentObj$$25, v11663], v11661, v11661[v11662]]
  }
  var v11592 = JAMScript.call(v12174[2], v12174[1], v12174[0]);
  var v11406 = v11592 << 24;
  var v11012 = v11406 >> 24;
  var v10176 = v11011 + v11012;
  var v8183 = v10176 + 1;
  v4752.programCounter = v8183 & 65535;
  return
}
function v101(parentObj$$24) {
  var v4753;
  var v8184 = parentObj$$24.FCarry;
  if(v8184) {
    v4753 = 1
  }else {
    v4753 = 0
  }
  var carry_flag = v4753;
  var v4754 = parentObj$$24;
  var v8185 = parentObj$$24.registerA;
  v4754.FCarry = v8185 > 127;
  var v4755 = parentObj$$24;
  var v11013 = parentObj$$24.registerA;
  var v10177 = v11013 << 1;
  var v8186 = v10177 & 255;
  v4755.registerA = v8186 | carry_flag;
  var v4756 = parentObj$$24;
  var v8187 = parentObj$$24;
  v4756.FZero = v8187.FSubtract = parentObj$$24.FHalfCarry = false;
  return
}
function v100(parentObj$$23) {
  var v4757 = parentObj$$23;
  var v8188 = parentObj$$23.memoryReader;
  var v8189 = parentObj$$23.programCounter;
  var v8190 = parentObj$$23.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12175 = [[parentObj$$23, v8190], v8188, v8188[v8189]]
  }
  var v11863 = JAMScript.call(v12175[2], v12175[1], v12175[0]);
  v4757.registerD = v11863;
  var v4758 = parentObj$$23;
  var v10178 = parentObj$$23.programCounter;
  var v8191 = v10178 + 1;
  v4758.programCounter = v8191 & 65535;
  return
}
function v99(parentObj$$22) {
  var v4759 = parentObj$$22;
  var v10179 = parentObj$$22.registerD;
  var v8192 = v10179 - 1;
  v4759.registerD = v8192 & 255;
  var v4760 = parentObj$$22;
  var v8193 = parentObj$$22.registerD;
  v4760.FZero = v8193 == 0;
  var v4761 = parentObj$$22;
  var v10180 = parentObj$$22.registerD;
  var v8194 = v10180 & 15;
  v4761.FHalfCarry = v8194 == 15;
  parentObj$$22.FSubtract = true;
  return
}
function v98(parentObj$$21) {
  var v4762 = parentObj$$21;
  var v10181 = parentObj$$21.registerD;
  var v8195 = v10181 + 1;
  v4762.registerD = v8195 & 255;
  var v4763 = parentObj$$21;
  var v8196 = parentObj$$21.registerD;
  v4763.FZero = v8196 == 0;
  var v4764 = parentObj$$21;
  var v10182 = parentObj$$21.registerD;
  var v8197 = v10182 & 15;
  v4764.FHalfCarry = v8197 == 0;
  parentObj$$21.FSubtract = false;
  return
}
function v97(parentObj$$20) {
  var v10183 = parentObj$$20.registerD;
  var v8198 = v10183 << 8;
  var v8199 = parentObj$$20.registerE;
  var v4765 = v8198 | v8199;
  var temp_var$$3 = v4765 + 1;
  var v4766 = temp_var$$3 >> 8;
  parentObj$$20.registerD = v4766 & 255;
  parentObj$$20.registerE = temp_var$$3 & 255;
  return
}
function v96(parentObj$$19) {
  var v10184 = parentObj$$19.registerD;
  var v8200 = v10184 << 8;
  var v8201 = parentObj$$19.registerE;
  var v4767 = v8200 | v8201;
  var v4768 = parentObj$$19.registerA;
  JAMScript.call(parentObj$$19.memoryWrite, parentObj$$19, [v4767, v4768]);
  return
}
function v95(parentObj$$18) {
  var v4769 = parentObj$$18;
  var v8202 = parentObj$$18.memoryReader;
  var v8203 = parentObj$$18.programCounter;
  var v8204 = parentObj$$18.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12176 = [[parentObj$$18, v8204], v8202, v8202[v8203]]
  }
  var v11864 = JAMScript.call(v12176[2], v12176[1], v12176[0]);
  v4769.registerE = v11864;
  var v4770 = parentObj$$18;
  var v11014 = parentObj$$18.programCounter;
  var v10185 = v11014 + 1;
  var v8205 = v10185 & 65535;
  var v11865 = JAMScript.call(parentObj$$18.memoryRead, parentObj$$18, [v8205]);
  v4770.registerD = v11865;
  var v4771 = parentObj$$18;
  var v10186 = parentObj$$18.programCounter;
  var v8206 = v10186 + 2;
  v4771.programCounter = v8206 & 65535;
  return
}
function v94(parentObj$$17) {
  var v4777 = parentObj$$17.cGBC;
  if(v4777) {
    var v11015 = parentObj$$17.memory;
    var v10187 = v11015[65357];
    var v8207 = v10187 & 1;
    var v4776 = v8207 == 1;
    if(v4776) {
      var v10188 = parentObj$$17.memory;
      var v8208 = v10188[65357];
      var v4774 = v8208 > 127;
      if(v4774) {
        cout("Going into single clock speed mode.", 0);
        parentObj$$17.doubleSpeedShifter = 0;
        var v4772 = parentObj$$17.memory;
        var v10189 = v4772[65357];
        v4772[65357] = v10189 & 127
      }else {
        cout("Going into double clock speed mode.", 0);
        parentObj$$17.doubleSpeedShifter = 1;
        var v4773 = parentObj$$17.memory;
        var v10190 = v4773[65357];
        v4773[65357] = v10190 | 128
      }
      var v4775 = parentObj$$17.memory;
      var v10191 = v4775[65357];
      v4775[65357] = v10191 & 254
    }else {
      JAMScript.call(parentObj$$17.handleSTOP, parentObj$$17, [])
    }
  }else {
    JAMScript.call(parentObj$$17.handleSTOP, parentObj$$17, [])
  }
  return
}
function v93(parentObj$$16) {
  var v4778 = parentObj$$16;
  var v10192 = parentObj$$16.registerA;
  var v8209 = v10192 >> 1;
  var v11016 = parentObj$$16.registerA;
  var v10193 = v11016 & 1;
  var v8210 = v10193 << 7;
  v4778.registerA = v8209 | v8210;
  var v4779 = parentObj$$16;
  var v8211 = parentObj$$16.registerA;
  v4779.FCarry = v8211 > 127;
  var v4780 = parentObj$$16;
  var v8212 = parentObj$$16;
  v4780.FZero = v8212.FSubtract = parentObj$$16.FHalfCarry = false;
  return
}
function v92(parentObj$$15) {
  var v4781 = parentObj$$15;
  var v8213 = parentObj$$15.memoryReader;
  var v8214 = parentObj$$15.programCounter;
  var v8215 = parentObj$$15.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12177 = [[parentObj$$15, v8215], v8213, v8213[v8214]]
  }
  var v11866 = JAMScript.call(v12177[2], v12177[1], v12177[0]);
  v4781.registerC = v11866;
  var v4782 = parentObj$$15;
  var v10194 = parentObj$$15.programCounter;
  var v8216 = v10194 + 1;
  v4782.programCounter = v8216 & 65535;
  return
}
function v91(parentObj$$14) {
  var v4783 = parentObj$$14;
  var v10195 = parentObj$$14.registerC;
  var v8217 = v10195 - 1;
  v4783.registerC = v8217 & 255;
  var v4784 = parentObj$$14;
  var v8218 = parentObj$$14.registerC;
  v4784.FZero = v8218 == 0;
  var v4785 = parentObj$$14;
  var v10196 = parentObj$$14.registerC;
  var v8219 = v10196 & 15;
  v4785.FHalfCarry = v8219 == 15;
  parentObj$$14.FSubtract = true;
  return
}
function v90(parentObj$$13) {
  var v4786 = parentObj$$13;
  var v10197 = parentObj$$13.registerC;
  var v8220 = v10197 + 1;
  v4786.registerC = v8220 & 255;
  var v4787 = parentObj$$13;
  var v8221 = parentObj$$13.registerC;
  v4787.FZero = v8221 == 0;
  var v4788 = parentObj$$13;
  var v10198 = parentObj$$13.registerC;
  var v8222 = v10198 & 15;
  v4788.FHalfCarry = v8222 == 0;
  parentObj$$13.FSubtract = false;
  return
}
function v89(parentObj$$12) {
  var v11017 = parentObj$$12.registerB;
  var v10199 = v11017 << 8;
  var v10200 = parentObj$$12.registerC;
  var v8223 = v10199 | v10200;
  var v4789 = v8223 - 1;
  var temp_var$$2 = v4789 & 65535;
  parentObj$$12.registerB = temp_var$$2 >> 8;
  parentObj$$12.registerC = temp_var$$2 & 255;
  return
}
function v88(parentObj$$11) {
  var v4790 = parentObj$$11;
  var v11018 = parentObj$$11.registerB;
  var v10201 = v11018 << 8;
  var v10202 = parentObj$$11.registerC;
  var v8224 = v10201 | v10202;
  var v11867 = JAMScript.call(parentObj$$11.memoryRead, parentObj$$11, [v8224]);
  v4790.registerA = v11867;
  return
}
function v87(parentObj$$10) {
  var v4791 = parentObj$$10.registersHL;
  var v10203 = parentObj$$10.registerB;
  var v8225 = v10203 << 8;
  var v8226 = parentObj$$10.registerC;
  var v4792 = v8225 | v8226;
  var dirtySum = v4791 + v4792;
  var v4793 = parentObj$$10;
  var v10204 = parentObj$$10.registersHL;
  var v8227 = v10204 & 4095;
  var v8228 = dirtySum & 4095;
  v4793.FHalfCarry = v8227 > v8228;
  parentObj$$10.FCarry = dirtySum > 65535;
  parentObj$$10.registersHL = dirtySum & 65535;
  parentObj$$10.FSubtract = false;
  return
}
function v86(parentObj$$9) {
  var v11407 = parentObj$$9.programCounter;
  var v11019 = v11407 + 1;
  var v10205 = v11019 & 65535;
  var v8229 = JAMScript.call(parentObj$$9.memoryRead, parentObj$$9, [v10205]);
  var v4794 = v8229 << 8;
  var v8230 = parentObj$$9.memoryReader;
  var v8231 = parentObj$$9.programCounter;
  var v8232 = parentObj$$9.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12178 = [[parentObj$$9, v8232], v8230, v8230[v8231]]
  }
  var v4795 = JAMScript.call(v12178[2], v12178[1], v12178[0]);
  var temp_var$$1 = v4794 | v4795;
  var v4796 = parentObj$$9;
  var v10206 = parentObj$$9.programCounter;
  var v8233 = v10206 + 2;
  v4796.programCounter = v8233 & 65535;
  var v8234 = parentObj$$9.stackPointer;
  var v4797 = v8234 & 255;
  JAMScript.call(parentObj$$9.memoryWrite, parentObj$$9, [temp_var$$1, v4797]);
  var v8235 = temp_var$$1 + 1;
  var v4798 = v8235 & 65535;
  var v8236 = parentObj$$9.stackPointer;
  var v4799 = v8236 >> 8;
  JAMScript.call(parentObj$$9.memoryWrite, parentObj$$9, [v4798, v4799]);
  return
}
function v85(parentObj$$8) {
  var v4800 = parentObj$$8;
  var v8237 = parentObj$$8.registerA;
  v4800.FCarry = v8237 > 127;
  var v4801 = parentObj$$8;
  var v11020 = parentObj$$8.registerA;
  var v10207 = v11020 << 1;
  var v8238 = v10207 & 255;
  var v10208 = parentObj$$8.registerA;
  var v8239 = v10208 >> 7;
  v4801.registerA = v8238 | v8239;
  var v4802 = parentObj$$8;
  var v8240 = parentObj$$8;
  v4802.FZero = v8240.FSubtract = parentObj$$8.FHalfCarry = false;
  return
}
function v84(parentObj$$7) {
  var v4803 = parentObj$$7;
  var v8241 = parentObj$$7.memoryReader;
  var v8242 = parentObj$$7.programCounter;
  var v8243 = parentObj$$7.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12179 = [[parentObj$$7, v8243], v8241, v8241[v8242]]
  }
  var v11868 = JAMScript.call(v12179[2], v12179[1], v12179[0]);
  v4803.registerB = v11868;
  var v4804 = parentObj$$7;
  var v10209 = parentObj$$7.programCounter;
  var v8244 = v10209 + 1;
  v4804.programCounter = v8244 & 65535;
  return
}
function v83(parentObj$$6) {
  var v4805 = parentObj$$6;
  var v10210 = parentObj$$6.registerB;
  var v8245 = v10210 - 1;
  v4805.registerB = v8245 & 255;
  var v4806 = parentObj$$6;
  var v8246 = parentObj$$6.registerB;
  v4806.FZero = v8246 == 0;
  var v4807 = parentObj$$6;
  var v10211 = parentObj$$6.registerB;
  var v8247 = v10211 & 15;
  v4807.FHalfCarry = v8247 == 15;
  parentObj$$6.FSubtract = true;
  return
}
function v82(parentObj$$5) {
  var v4808 = parentObj$$5;
  var v10212 = parentObj$$5.registerB;
  var v8248 = v10212 + 1;
  v4808.registerB = v8248 & 255;
  var v4809 = parentObj$$5;
  var v8249 = parentObj$$5.registerB;
  v4809.FZero = v8249 == 0;
  var v4810 = parentObj$$5;
  var v10213 = parentObj$$5.registerB;
  var v8250 = v10213 & 15;
  v4810.FHalfCarry = v8250 == 0;
  parentObj$$5.FSubtract = false;
  return
}
function v81(parentObj$$4) {
  var v10214 = parentObj$$4.registerB;
  var v8251 = v10214 << 8;
  var v8252 = parentObj$$4.registerC;
  var v4811 = v8251 | v8252;
  var temp_var = v4811 + 1;
  var v4812 = temp_var >> 8;
  parentObj$$4.registerB = v4812 & 255;
  parentObj$$4.registerC = temp_var & 255;
  return
}
function v80(parentObj$$3) {
  var v10215 = parentObj$$3.registerB;
  var v8253 = v10215 << 8;
  var v8254 = parentObj$$3.registerC;
  var v4813 = v8253 | v8254;
  var v4814 = parentObj$$3.registerA;
  JAMScript.call(parentObj$$3.memoryWrite, parentObj$$3, [v4813, v4814]);
  return
}
function v79(parentObj$$2) {
  var v4815 = parentObj$$2;
  var v8255 = parentObj$$2.memoryReader;
  var v8256 = parentObj$$2.programCounter;
  var v8257 = parentObj$$2.programCounter;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v12180 = [[parentObj$$2, v8257], v8255, v8255[v8256]]
  }
  var v11869 = JAMScript.call(v12180[2], v12180[1], v12180[0]);
  v4815.registerC = v11869;
  var v4816 = parentObj$$2;
  var v11021 = parentObj$$2.programCounter;
  var v10216 = v11021 + 1;
  var v8258 = v10216 & 65535;
  var v11870 = JAMScript.call(parentObj$$2.memoryRead, parentObj$$2, [v8258]);
  v4816.registerB = v11870;
  var v4817 = parentObj$$2;
  var v10217 = parentObj$$2.programCounter;
  var v8259 = v10217 + 2;
  v4817.programCounter = v8259 & 65535;
  return
}
function v78(parentObj$$1) {
  return
}
function v77(typedArray) {
  typedArray[0] = -1;
  var v8260 = typedArray;
  var v10218 = typedArray[0];
  v8260[0] = v10218 >> 0;
  var v8261 = typedArray[0];
  var v4818 = v8261 != 255;
  if(v4818) {
    return[]
  }else {
    return typedArray
  }
  return
}
function v76(bufferLength$$1) {
  try {
    var v4819 = new Uint8Array(bufferLength$$1);
    return JAMScript.call(this.checkForOperaMathBug, this, [v4819])
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
  var v4820 = this.finalResultSize;
  var v11871 = JAMScript.call(this.generateUint8Buffer, this, [v4820]);
  this.heightBuffer = v11871;
  var v4822 = !BILINEARAlgo$$1;
  if(v4822) {
    var v4821 = this.targetWidthMultipliedByChannels;
    var v11872 = JAMScript.call(this.generateFloatBuffer, this, [v4821]);
    this.outputHeightWorkBench = v11872
  }
  return
}
function v73(BILINEARAlgo) {
  var v4823 = this.widthPassResultSize;
  var v11873 = JAMScript.call(this.generateFloatBuffer, this, [v4823]);
  this.widthBuffer = v11873;
  var v4825 = !BILINEARAlgo;
  if(v4825) {
    var v4824 = this.originalHeightMultipliedByChannels;
    var v11874 = JAMScript.call(this.generateFloatBuffer, this, [v4824]);
    this.outputWidthWorkBench = v11874
  }
  return
}
function v72(buffer$$26) {
  return buffer$$26
}
function v71(buffer$$25) {
  var v4826 = JAMScript.call(this.resizeWidth, this, [buffer$$25]);
  return JAMScript.call(this.resizeHeight, this, [v4826])
}
function v70(buffer$$24) {
  var v8262 = this.heightOriginal;
  var v4827 = v8262 - 1;
  var v4828 = this.targetHeight;
  var ratioWeight$$7 = v4827 / v4828;
  var weight$$7 = 0;
  var finalOffset$$3 = 0;
  var pixelOffset$$7 = 0;
  var outputBuffer$$7 = this.heightBuffer;
  var v8263 = this.finalResultSize;
  var v4835 = pixelOffset$$7 < v8263;
  for(;v4835;) {
    secondWeight = weight$$7 % 1;
    firstWeight = 1 - secondWeight;
    var v4829 = Math.floor(weight$$7);
    pixelOffset$$7 = v4829 * 4;
    var v8264 = this.targetWidthMultipliedByChannels;
    var v4834 = pixelOffset$$7 < v8264;
    for(;v4834;) {
      var v4830 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10219 = buffer$$24[pixelOffset$$7]
      }
      var v8265 = v10219 * firstWeight;
      var v11022 = pixelOffset$$7 + 4;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10220 = buffer$$24[v11022]
      }
      var v8266 = v10220 * secondWeight;
      outputBuffer$$7[v4830] = v8265 + v8266;
      var v4831 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      var v11023 = pixelOffset$$7 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10221 = buffer$$24[v11023]
      }
      var v8267 = v10221 * firstWeight;
      var v11024 = pixelOffset$$7 + 5;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10222 = buffer$$24[v11024]
      }
      var v8268 = v10222 * secondWeight;
      outputBuffer$$7[v4831] = v8267 + v8268;
      var v4832 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      var v11025 = pixelOffset$$7 + 2;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10223 = buffer$$24[v11025]
      }
      var v8269 = v10223 * firstWeight;
      var v11026 = pixelOffset$$7 + 6;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10224 = buffer$$24[v11026]
      }
      var v8270 = v10224 * secondWeight;
      outputBuffer$$7[v4832] = v8269 + v8270;
      var v4833 = finalOffset$$3;
      finalOffset$$3 = finalOffset$$3 + 1;
      var v11027 = pixelOffset$$7 + 3;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10225 = buffer$$24[v11027]
      }
      var v8271 = v10225 * firstWeight;
      var v11028 = pixelOffset$$7 + 7;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10226 = buffer$$24[v11028]
      }
      var v8272 = v10226 * secondWeight;
      outputBuffer$$7[v4833] = v8271 + v8272;
      pixelOffset$$7 = pixelOffset$$7 + 4;
      var v8273 = this.targetWidthMultipliedByChannels;
      v4834 = pixelOffset$$7 < v8273
    }
    weight$$7 = weight$$7 + ratioWeight$$7;
    var v8274 = this.finalResultSize;
    v4835 = pixelOffset$$7 < v8274
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
  var v8275 = this.finalResultSize;
  var v4863 = outputOffset$$3 < v8275;
  do {
    pixelOffset$$6 = 0;
    var v8276 = this.targetWidthMultipliedByChannels;
    var v4840 = pixelOffset$$6 < v8276;
    for(;v4840;) {
      var v4836 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      output$$3[v4836] = 0;
      var v4837 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      output$$3[v4837] = 0;
      var v4838 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      output$$3[v4838] = 0;
      var v4839 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      output$$3[v4839] = 0;
      var v8277 = this.targetWidthMultipliedByChannels;
      v4840 = pixelOffset$$6 < v8277
    }
    weight$$6 = ratioWeight$$6;
    var v8278 = weight$$6 > 0;
    if(v8278) {
      var v10227 = this.widthPassResultSize;
      v8278 = actualPosition$$3 < v10227
    }
    var v4853 = v8278;
    do {
      var v4841 = 1 + actualPosition$$3;
      amountToNext$$3 = v4841 - currentPosition$$3;
      var v4852 = weight$$6 >= amountToNext$$3;
      if(v4852) {
        pixelOffset$$6 = 0;
        var v8279 = this.targetWidthMultipliedByChannels;
        var v4846 = pixelOffset$$6 < v8279;
        for(;v4846;) {
          var v4842 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v10228 = output$$3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11029 = output$$3[v4842]
          }
          var v11593 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11408 = buffer$$23[v11593]
          }
          var v11030 = v11408 * amountToNext$$3;
          v10228[v4842] = v11029 + v11030;
          var v4843 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v10229 = output$$3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11031 = output$$3[v4843]
          }
          var v11594 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11409 = buffer$$23[v11594]
          }
          var v11032 = v11409 * amountToNext$$3;
          v10229[v4843] = v11031 + v11032;
          var v4844 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v10230 = output$$3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11033 = output$$3[v4844]
          }
          var v11595 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11410 = buffer$$23[v11595]
          }
          var v11034 = v11410 * amountToNext$$3;
          v10230[v4844] = v11033 + v11034;
          var v4845 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v10231 = output$$3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11035 = output$$3[v4845]
          }
          var v11596 = actualPosition$$3;
          actualPosition$$3 = actualPosition$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11411 = buffer$$23[v11596]
          }
          var v11036 = v11411 * amountToNext$$3;
          v10231[v4845] = v11035 + v11036;
          var v8280 = this.targetWidthMultipliedByChannels;
          v4846 = pixelOffset$$6 < v8280
        }
        currentPosition$$3 = actualPosition$$3;
        weight$$6 = weight$$6 - amountToNext$$3
      }else {
        pixelOffset$$6 = 0;
        amountToNext$$3 = actualPosition$$3;
        var v8281 = this.targetWidthMultipliedByChannels;
        var v4851 = pixelOffset$$6 < v8281;
        for(;v4851;) {
          var v4847 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v10232 = output$$3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11037 = output$$3[v4847]
          }
          var v11597 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11412 = buffer$$23[v11597]
          }
          var v11038 = v11412 * weight$$6;
          v10232[v4847] = v11037 + v11038;
          var v4848 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v10233 = output$$3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11039 = output$$3[v4848]
          }
          var v11598 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11413 = buffer$$23[v11598]
          }
          var v11040 = v11413 * weight$$6;
          v10233[v4848] = v11039 + v11040;
          var v4849 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v10234 = output$$3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11041 = output$$3[v4849]
          }
          var v11599 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11414 = buffer$$23[v11599]
          }
          var v11042 = v11414 * weight$$6;
          v10234[v4849] = v11041 + v11042;
          var v4850 = pixelOffset$$6;
          pixelOffset$$6 = pixelOffset$$6 + 1;
          var v10235 = output$$3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11043 = output$$3[v4850]
          }
          var v11600 = amountToNext$$3;
          amountToNext$$3 = amountToNext$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11415 = buffer$$23[v11600]
          }
          var v11044 = v11415 * weight$$6;
          v10235[v4850] = v11043 + v11044;
          var v8282 = this.targetWidthMultipliedByChannels;
          v4851 = pixelOffset$$6 < v8282
        }
        currentPosition$$3 = currentPosition$$3 + weight$$6;
        break
      }
      var v8283 = weight$$6 > 0;
      if(v8283) {
        var v10236 = this.widthPassResultSize;
        v8283 = actualPosition$$3 < v10236
      }
      v4853 = v8283
    }while(v4853);
    pixelOffset$$6 = 0;
    var v8284 = this.targetWidthMultipliedByChannels;
    var v4862 = pixelOffset$$6 < v8284;
    for(;v4862;) {
      var v4854 = outputBuffer$$6;
      var v4855 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v11045 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10237 = output$$3[v11045]
      }
      var v8285 = v10237 / ratioWeight$$6;
      var v11875 = Math.round(v8285);
      v4854[v4855] = v11875;
      var v4856 = outputBuffer$$6;
      var v4857 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v11046 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10238 = output$$3[v11046]
      }
      var v8286 = v10238 / ratioWeight$$6;
      var v11876 = Math.round(v8286);
      v4856[v4857] = v11876;
      var v4858 = outputBuffer$$6;
      var v4859 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v11047 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10239 = output$$3[v11047]
      }
      var v8287 = v10239 / ratioWeight$$6;
      var v11877 = Math.round(v8287);
      v4858[v4859] = v11877;
      var v4860 = outputBuffer$$6;
      var v4861 = outputOffset$$3;
      outputOffset$$3 = outputOffset$$3 + 1;
      var v11048 = pixelOffset$$6;
      pixelOffset$$6 = pixelOffset$$6 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10240 = output$$3[v11048]
      }
      var v8288 = v10240 / ratioWeight$$6;
      var v11878 = Math.round(v8288);
      v4860[v4861] = v11878;
      var v8289 = this.targetWidthMultipliedByChannels;
      v4862 = pixelOffset$$6 < v8289
    }
    var v8290 = this.finalResultSize;
    v4863 = outputOffset$$3 < v8290
  }while(v4863);
  return outputBuffer$$6
}
function v68(buffer$$22) {
  var v8291 = this.heightOriginal;
  var v4864 = v8291 - 1;
  var v4865 = this.targetHeight;
  var ratioWeight$$5 = v4864 / v4865;
  var weight$$5 = 0;
  var finalOffset$$2 = 0;
  var pixelOffset$$5 = 0;
  var pixelOffsetAccumulated = 0;
  var pixelOffsetAccumulated2 = 0;
  var outputBuffer$$5 = this.heightBuffer;
  var v8292 = this.finalResultSize;
  var v4871 = finalOffset$$2 < v8292;
  do {
    secondWeight = weight$$5 % 1;
    firstWeight = 1 - secondWeight;
    var v4866 = Math.floor(weight$$5);
    var v4867 = this.targetWidthMultipliedByChannels;
    pixelOffsetAccumulated = v4866 * v4867;
    var v4868 = this.targetWidthMultipliedByChannels;
    pixelOffsetAccumulated2 = pixelOffsetAccumulated + v4868;
    pixelOffset$$5 = 0;
    var v8293 = this.targetWidthMultipliedByChannels;
    var v4870 = pixelOffset$$5 < v8293;
    for(;v4870;) {
      var v4869 = finalOffset$$2;
      finalOffset$$2 = finalOffset$$2 + 1;
      var v11049 = pixelOffsetAccumulated + pixelOffset$$5;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10241 = buffer$$22[v11049]
      }
      var v8294 = v10241 * firstWeight;
      var v11050 = pixelOffsetAccumulated2 + pixelOffset$$5;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10242 = buffer$$22[v11050]
      }
      var v8295 = v10242 * secondWeight;
      outputBuffer$$5[v4869] = v8294 + v8295;
      pixelOffset$$5 = pixelOffset$$5 + 1;
      var v8296 = this.targetWidthMultipliedByChannels;
      v4870 = pixelOffset$$5 < v8296
    }
    weight$$5 = weight$$5 + ratioWeight$$5;
    var v8297 = this.finalResultSize;
    v4871 = finalOffset$$2 < v8297
  }while(v4871);
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
  var v8298 = this.finalResultSize;
  var v4894 = outputOffset$$2 < v8298;
  do {
    pixelOffset$$4 = 0;
    var v8299 = this.targetWidthMultipliedByChannels;
    var v4875 = pixelOffset$$4 < v8299;
    for(;v4875;) {
      var v4872 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      output$$2[v4872] = 0;
      var v4873 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      output$$2[v4873] = 0;
      var v4874 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      output$$2[v4874] = 0;
      var v8300 = this.targetWidthMultipliedByChannels;
      v4875 = pixelOffset$$4 < v8300
    }
    weight$$4 = ratioWeight$$4;
    var v8301 = weight$$4 > 0;
    if(v8301) {
      var v10243 = this.widthPassResultSize;
      v8301 = actualPosition$$2 < v10243
    }
    var v4886 = v8301;
    do {
      var v4876 = 1 + actualPosition$$2;
      amountToNext$$2 = v4876 - currentPosition$$2;
      var v4885 = weight$$4 >= amountToNext$$2;
      if(v4885) {
        pixelOffset$$4 = 0;
        var v8302 = this.targetWidthMultipliedByChannels;
        var v4880 = pixelOffset$$4 < v8302;
        for(;v4880;) {
          var v4877 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v10244 = output$$2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11051 = output$$2[v4877]
          }
          var v11601 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11416 = buffer$$21[v11601]
          }
          var v11052 = v11416 * amountToNext$$2;
          v10244[v4877] = v11051 + v11052;
          var v4878 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v10245 = output$$2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11053 = output$$2[v4878]
          }
          var v11602 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11417 = buffer$$21[v11602]
          }
          var v11054 = v11417 * amountToNext$$2;
          v10245[v4878] = v11053 + v11054;
          var v4879 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v10246 = output$$2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11055 = output$$2[v4879]
          }
          var v11603 = actualPosition$$2;
          actualPosition$$2 = actualPosition$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11418 = buffer$$21[v11603]
          }
          var v11056 = v11418 * amountToNext$$2;
          v10246[v4879] = v11055 + v11056;
          var v8303 = this.targetWidthMultipliedByChannels;
          v4880 = pixelOffset$$4 < v8303
        }
        currentPosition$$2 = actualPosition$$2;
        weight$$4 = weight$$4 - amountToNext$$2
      }else {
        pixelOffset$$4 = 0;
        amountToNext$$2 = actualPosition$$2;
        var v8304 = this.targetWidthMultipliedByChannels;
        var v4884 = pixelOffset$$4 < v8304;
        for(;v4884;) {
          var v4881 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v10247 = output$$2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11057 = output$$2[v4881]
          }
          var v11604 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11419 = buffer$$21[v11604]
          }
          var v11058 = v11419 * weight$$4;
          v10247[v4881] = v11057 + v11058;
          var v4882 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v10248 = output$$2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11059 = output$$2[v4882]
          }
          var v11605 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11420 = buffer$$21[v11605]
          }
          var v11060 = v11420 * weight$$4;
          v10248[v4882] = v11059 + v11060;
          var v4883 = pixelOffset$$4;
          pixelOffset$$4 = pixelOffset$$4 + 1;
          var v10249 = output$$2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11061 = output$$2[v4883]
          }
          var v11606 = amountToNext$$2;
          amountToNext$$2 = amountToNext$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11421 = buffer$$21[v11606]
          }
          var v11062 = v11421 * weight$$4;
          v10249[v4883] = v11061 + v11062;
          var v8305 = this.targetWidthMultipliedByChannels;
          v4884 = pixelOffset$$4 < v8305
        }
        currentPosition$$2 = currentPosition$$2 + weight$$4;
        break
      }
      var v8306 = weight$$4 > 0;
      if(v8306) {
        var v10250 = this.widthPassResultSize;
        v8306 = actualPosition$$2 < v10250
      }
      v4886 = v8306
    }while(v4886);
    pixelOffset$$4 = 0;
    var v8307 = this.targetWidthMultipliedByChannels;
    var v4893 = pixelOffset$$4 < v8307;
    for(;v4893;) {
      var v4887 = outputBuffer$$4;
      var v4888 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v11063 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10251 = output$$2[v11063]
      }
      var v8308 = v10251 / ratioWeight$$4;
      var v11879 = Math.round(v8308);
      v4887[v4888] = v11879;
      var v4889 = outputBuffer$$4;
      var v4890 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v11064 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10252 = output$$2[v11064]
      }
      var v8309 = v10252 / ratioWeight$$4;
      var v11880 = Math.round(v8309);
      v4889[v4890] = v11880;
      var v4891 = outputBuffer$$4;
      var v4892 = outputOffset$$2;
      outputOffset$$2 = outputOffset$$2 + 1;
      var v11065 = pixelOffset$$4;
      pixelOffset$$4 = pixelOffset$$4 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10253 = output$$2[v11065]
      }
      var v8310 = v10253 / ratioWeight$$4;
      var v11881 = Math.round(v8310);
      v4891[v4892] = v11881;
      var v8311 = this.targetWidthMultipliedByChannels;
      v4893 = pixelOffset$$4 < v8311
    }
    var v8312 = this.finalResultSize;
    v4894 = outputOffset$$2 < v8312
  }while(v4894);
  return outputBuffer$$4
}
function v66(buffer$$20) {
  var v8313 = this.widthOriginal;
  var v4895 = v8313 - 1;
  var v4896 = this.targetWidth;
  var ratioWeight$$3 = v4895 / v4896;
  var weight$$3 = 0;
  var finalOffset$$1 = 0;
  var pixelOffset$$3 = 0;
  var outputBuffer$$3 = this.widthBuffer;
  var targetPosition$$1 = 0;
  var v8314 = this.targetWidthMultipliedByChannels;
  var v4903 = targetPosition$$1 < v8314;
  for(;v4903;) {
    secondWeight = weight$$3 % 1;
    firstWeight = 1 - secondWeight;
    finalOffset$$1 = targetPosition$$1;
    var v8315 = Math.floor(weight$$3);
    pixelOffset$$3 = v8315 * 4;
    var v8316 = this.widthPassResultSize;
    var v4902 = finalOffset$$1 < v8316;
    for(;v4902;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8317 = buffer$$20[pixelOffset$$3]
      }
      var v4897 = v8317 * firstWeight;
      var v10254 = pixelOffset$$3 + 4;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8318 = buffer$$20[v10254]
      }
      var v4898 = v8318 * secondWeight;
      JAMScript.set(outputBuffer$$3, finalOffset$$1, v4897 + v4898);
      var v4899 = finalOffset$$1 + 1;
      var v11066 = pixelOffset$$3 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10255 = buffer$$20[v11066]
      }
      var v8319 = v10255 * firstWeight;
      var v11067 = pixelOffset$$3 + 5;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10256 = buffer$$20[v11067]
      }
      var v8320 = v10256 * secondWeight;
      JAMScript.set(outputBuffer$$3, v4899, v8319 + v8320);
      var v4900 = finalOffset$$1 + 2;
      var v11068 = pixelOffset$$3 + 2;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10257 = buffer$$20[v11068]
      }
      var v8321 = v10257 * firstWeight;
      var v11069 = pixelOffset$$3 + 6;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10258 = buffer$$20[v11069]
      }
      var v8322 = v10258 * secondWeight;
      JAMScript.set(outputBuffer$$3, v4900, v8321 + v8322);
      var v4901 = finalOffset$$1 + 3;
      var v11070 = pixelOffset$$3 + 3;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10259 = buffer$$20[v11070]
      }
      var v8323 = v10259 * firstWeight;
      var v11071 = pixelOffset$$3 + 7;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10260 = buffer$$20[v11071]
      }
      var v8324 = v10260 * secondWeight;
      JAMScript.set(outputBuffer$$3, v4901, v8323 + v8324);
      var v11072 = this.originalWidthMultipliedByChannels;
      pixelOffset$$3 = pixelOffset$$3 + v11072;
      var v11073 = this.targetWidthMultipliedByChannels;
      finalOffset$$1 = finalOffset$$1 + v11073;
      var v8325 = this.widthPassResultSize;
      v4902 = finalOffset$$1 < v8325
    }
    targetPosition$$1 = targetPosition$$1 + 4;
    weight$$3 = weight$$3 + ratioWeight$$3;
    var v8326 = this.targetWidthMultipliedByChannels;
    v4903 = targetPosition$$1 < v8326
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
  var v4904 = this.originalWidthMultipliedByChannels;
  var nextLineOffsetOriginalWidth$$1 = v4904 - 3;
  var v4905 = this.targetWidthMultipliedByChannels;
  var nextLineOffsetTargetWidth$$1 = v4905 - 3;
  var output$$1 = this.outputWidthWorkBench;
  var outputBuffer$$2 = this.widthBuffer;
  var v8327 = this.targetWidthMultipliedByChannels;
  var v4929 = outputOffset$$1 < v8327;
  do {
    line$$1 = 0;
    var v8328 = this.originalHeightMultipliedByChannels;
    var v4910 = line$$1 < v8328;
    for(;v4910;) {
      var v4906 = line$$1;
      line$$1 = line$$1 + 1;
      output$$1[v4906] = 0;
      var v4907 = line$$1;
      line$$1 = line$$1 + 1;
      output$$1[v4907] = 0;
      var v4908 = line$$1;
      line$$1 = line$$1 + 1;
      output$$1[v4908] = 0;
      var v4909 = line$$1;
      line$$1 = line$$1 + 1;
      output$$1[v4909] = 0;
      var v8329 = this.originalHeightMultipliedByChannels;
      v4910 = line$$1 < v8329
    }
    weight$$2 = ratioWeight$$2;
    var v8330 = weight$$2 > 0;
    if(v8330) {
      var v10261 = this.originalWidthMultipliedByChannels;
      v8330 = actualPosition$$1 < v10261
    }
    var v4923 = v8330;
    do {
      var v4911 = 1 + actualPosition$$1;
      amountToNext$$1 = v4911 - currentPosition$$1;
      var v4922 = weight$$2 >= amountToNext$$1;
      if(v4922) {
        line$$1 = 0;
        pixelOffset$$2 = actualPosition$$1;
        var v8331 = this.originalHeightMultipliedByChannels;
        var v4916 = line$$1 < v8331;
        for(;v4916;) {
          var v4912 = line$$1;
          line$$1 = line$$1 + 1;
          var v10262 = output$$1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11074 = output$$1[v4912]
          }
          var v11607 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11422 = buffer$$19[v11607]
          }
          var v11075 = v11422 * amountToNext$$1;
          v10262[v4912] = v11074 + v11075;
          var v4913 = line$$1;
          line$$1 = line$$1 + 1;
          var v10263 = output$$1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11076 = output$$1[v4913]
          }
          var v11608 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11423 = buffer$$19[v11608]
          }
          var v11077 = v11423 * amountToNext$$1;
          v10263[v4913] = v11076 + v11077;
          var v4914 = line$$1;
          line$$1 = line$$1 + 1;
          var v10264 = output$$1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11078 = output$$1[v4914]
          }
          var v11609 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11424 = buffer$$19[v11609]
          }
          var v11079 = v11424 * amountToNext$$1;
          v10264[v4914] = v11078 + v11079;
          var v4915 = line$$1;
          line$$1 = line$$1 + 1;
          var v10265 = output$$1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11080 = output$$1[v4915]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11425 = buffer$$19[pixelOffset$$2]
          }
          var v11081 = v11425 * amountToNext$$1;
          v10265[v4915] = v11080 + v11081;
          pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetOriginalWidth$$1;
          var v8332 = this.originalHeightMultipliedByChannels;
          v4916 = line$$1 < v8332
        }
        currentPosition$$1 = actualPosition$$1 = actualPosition$$1 + 4;
        weight$$2 = weight$$2 - amountToNext$$1
      }else {
        line$$1 = 0;
        pixelOffset$$2 = actualPosition$$1;
        var v8333 = this.originalHeightMultipliedByChannels;
        var v4921 = line$$1 < v8333;
        for(;v4921;) {
          var v4917 = line$$1;
          line$$1 = line$$1 + 1;
          var v10266 = output$$1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11082 = output$$1[v4917]
          }
          var v11610 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11426 = buffer$$19[v11610]
          }
          var v11083 = v11426 * weight$$2;
          v10266[v4917] = v11082 + v11083;
          var v4918 = line$$1;
          line$$1 = line$$1 + 1;
          var v10267 = output$$1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11084 = output$$1[v4918]
          }
          var v11611 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11427 = buffer$$19[v11611]
          }
          var v11085 = v11427 * weight$$2;
          v10267[v4918] = v11084 + v11085;
          var v4919 = line$$1;
          line$$1 = line$$1 + 1;
          var v10268 = output$$1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11086 = output$$1[v4919]
          }
          var v11612 = pixelOffset$$2;
          pixelOffset$$2 = pixelOffset$$2 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11428 = buffer$$19[v11612]
          }
          var v11087 = v11428 * weight$$2;
          v10268[v4919] = v11086 + v11087;
          var v4920 = line$$1;
          line$$1 = line$$1 + 1;
          var v10269 = output$$1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11088 = output$$1[v4920]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11429 = buffer$$19[pixelOffset$$2]
          }
          var v11089 = v11429 * weight$$2;
          v10269[v4920] = v11088 + v11089;
          pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetOriginalWidth$$1;
          var v8334 = this.originalHeightMultipliedByChannels;
          v4921 = line$$1 < v8334
        }
        currentPosition$$1 = currentPosition$$1 + weight$$2;
        break
      }
      var v8335 = weight$$2 > 0;
      if(v8335) {
        var v10270 = this.originalWidthMultipliedByChannels;
        v8335 = actualPosition$$1 < v10270
      }
      v4923 = v8335
    }while(v4923);
    line$$1 = 0;
    pixelOffset$$2 = outputOffset$$1;
    var v8336 = this.originalHeightMultipliedByChannels;
    var v4928 = line$$1 < v8336;
    for(;v4928;) {
      var v4924 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v10271 = line$$1;
      line$$1 = line$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8337 = output$$1[v10271]
      }
      outputBuffer$$2[v4924] = v8337 / ratioWeight$$2;
      var v4925 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v10272 = line$$1;
      line$$1 = line$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8338 = output$$1[v10272]
      }
      outputBuffer$$2[v4925] = v8338 / ratioWeight$$2;
      var v4926 = pixelOffset$$2;
      pixelOffset$$2 = pixelOffset$$2 + 1;
      var v10273 = line$$1;
      line$$1 = line$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8339 = output$$1[v10273]
      }
      outputBuffer$$2[v4926] = v8339 / ratioWeight$$2;
      var v8340 = line$$1;
      line$$1 = line$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v4927 = output$$1[v8340]
      }
      outputBuffer$$2[pixelOffset$$2] = v4927 / ratioWeight$$2;
      pixelOffset$$2 = pixelOffset$$2 + nextLineOffsetTargetWidth$$1;
      var v8341 = this.originalHeightMultipliedByChannels;
      v4928 = line$$1 < v8341
    }
    outputOffset$$1 = outputOffset$$1 + 4;
    var v8342 = this.targetWidthMultipliedByChannels;
    v4929 = outputOffset$$1 < v8342
  }while(v4929);
  return outputBuffer$$2
}
function v64(buffer$$18) {
  var v8343 = this.widthOriginal;
  var v4930 = v8343 - 1;
  var v4931 = this.targetWidth;
  var ratioWeight$$1 = v4930 / v4931;
  var weight$$1 = 0;
  var finalOffset = 0;
  var pixelOffset$$1 = 0;
  var outputBuffer$$1 = this.widthBuffer;
  var targetPosition = 0;
  var v8344 = this.targetWidthMultipliedByChannels;
  var v4937 = targetPosition < v8344;
  for(;v4937;) {
    secondWeight = weight$$1 % 1;
    firstWeight = 1 - secondWeight;
    finalOffset = targetPosition;
    var v8345 = Math.floor(weight$$1);
    pixelOffset$$1 = v8345 * 3;
    var v8346 = this.widthPassResultSize;
    var v4936 = finalOffset < v8346;
    for(;v4936;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8347 = buffer$$18[pixelOffset$$1]
      }
      var v4932 = v8347 * firstWeight;
      var v10274 = pixelOffset$$1 + 3;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8348 = buffer$$18[v10274]
      }
      var v4933 = v8348 * secondWeight;
      JAMScript.set(outputBuffer$$1, finalOffset, v4932 + v4933);
      var v4934 = finalOffset + 1;
      var v11090 = pixelOffset$$1 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10275 = buffer$$18[v11090]
      }
      var v8349 = v10275 * firstWeight;
      var v11091 = pixelOffset$$1 + 4;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10276 = buffer$$18[v11091]
      }
      var v8350 = v10276 * secondWeight;
      JAMScript.set(outputBuffer$$1, v4934, v8349 + v8350);
      var v4935 = finalOffset + 2;
      var v11092 = pixelOffset$$1 + 2;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10277 = buffer$$18[v11092]
      }
      var v8351 = v10277 * firstWeight;
      var v11093 = pixelOffset$$1 + 5;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10278 = buffer$$18[v11093]
      }
      var v8352 = v10278 * secondWeight;
      JAMScript.set(outputBuffer$$1, v4935, v8351 + v8352);
      var v11094 = this.originalWidthMultipliedByChannels;
      pixelOffset$$1 = pixelOffset$$1 + v11094;
      var v11095 = this.targetWidthMultipliedByChannels;
      finalOffset = finalOffset + v11095;
      var v8353 = this.widthPassResultSize;
      v4936 = finalOffset < v8353
    }
    targetPosition = targetPosition + 3;
    weight$$1 = weight$$1 + ratioWeight$$1;
    var v8354 = this.targetWidthMultipliedByChannels;
    v4937 = targetPosition < v8354
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
  var v4938 = this.originalWidthMultipliedByChannels;
  var nextLineOffsetOriginalWidth = v4938 - 2;
  var v4939 = this.targetWidthMultipliedByChannels;
  var nextLineOffsetTargetWidth = v4939 - 2;
  var output = this.outputWidthWorkBench;
  var outputBuffer = this.widthBuffer;
  var v8355 = this.targetWidthMultipliedByChannels;
  var v4959 = outputOffset < v8355;
  do {
    line = 0;
    var v8356 = this.originalHeightMultipliedByChannels;
    var v4943 = line < v8356;
    for(;v4943;) {
      var v4940 = line;
      line = line + 1;
      output[v4940] = 0;
      var v4941 = line;
      line = line + 1;
      output[v4941] = 0;
      var v4942 = line;
      line = line + 1;
      output[v4942] = 0;
      var v8357 = this.originalHeightMultipliedByChannels;
      v4943 = line < v8357
    }
    weight = ratioWeight;
    var v8358 = weight > 0;
    if(v8358) {
      var v10279 = this.originalWidthMultipliedByChannels;
      v8358 = actualPosition < v10279
    }
    var v4954 = v8358;
    do {
      var v4944 = 1 + actualPosition;
      amountToNext = v4944 - currentPosition;
      var v4953 = weight >= amountToNext;
      if(v4953) {
        line = 0;
        pixelOffset = actualPosition;
        var v8359 = this.originalHeightMultipliedByChannels;
        var v4948 = line < v8359;
        for(;v4948;) {
          var v4945 = line;
          line = line + 1;
          var v10280 = output;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11096 = output[v4945]
          }
          var v11613 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11430 = buffer$$17[v11613]
          }
          var v11097 = v11430 * amountToNext;
          v10280[v4945] = v11096 + v11097;
          var v4946 = line;
          line = line + 1;
          var v10281 = output;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11098 = output[v4946]
          }
          var v11614 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11431 = buffer$$17[v11614]
          }
          var v11099 = v11431 * amountToNext;
          v10281[v4946] = v11098 + v11099;
          var v4947 = line;
          line = line + 1;
          var v10282 = output;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11100 = output[v4947]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11432 = buffer$$17[pixelOffset]
          }
          var v11101 = v11432 * amountToNext;
          v10282[v4947] = v11100 + v11101;
          pixelOffset = pixelOffset + nextLineOffsetOriginalWidth;
          var v8360 = this.originalHeightMultipliedByChannels;
          v4948 = line < v8360
        }
        currentPosition = actualPosition = actualPosition + 3;
        weight = weight - amountToNext
      }else {
        line = 0;
        pixelOffset = actualPosition;
        var v8361 = this.originalHeightMultipliedByChannels;
        var v4952 = line < v8361;
        for(;v4952;) {
          var v4949 = line;
          line = line + 1;
          var v10283 = output;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11102 = output[v4949]
          }
          var v11615 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11433 = buffer$$17[v11615]
          }
          var v11103 = v11433 * weight;
          v10283[v4949] = v11102 + v11103;
          var v4950 = line;
          line = line + 1;
          var v10284 = output;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11104 = output[v4950]
          }
          var v11616 = pixelOffset;
          pixelOffset = pixelOffset + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11434 = buffer$$17[v11616]
          }
          var v11105 = v11434 * weight;
          v10284[v4950] = v11104 + v11105;
          var v4951 = line;
          line = line + 1;
          var v10285 = output;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11106 = output[v4951]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11435 = buffer$$17[pixelOffset]
          }
          var v11107 = v11435 * weight;
          v10285[v4951] = v11106 + v11107;
          pixelOffset = pixelOffset + nextLineOffsetOriginalWidth;
          var v8362 = this.originalHeightMultipliedByChannels;
          v4952 = line < v8362
        }
        currentPosition = currentPosition + weight;
        break
      }
      var v8363 = weight > 0;
      if(v8363) {
        var v10286 = this.originalWidthMultipliedByChannels;
        v8363 = actualPosition < v10286
      }
      v4954 = v8363
    }while(v4954);
    line = 0;
    pixelOffset = outputOffset;
    var v8364 = this.originalHeightMultipliedByChannels;
    var v4958 = line < v8364;
    for(;v4958;) {
      var v4955 = pixelOffset;
      pixelOffset = pixelOffset + 1;
      var v10287 = line;
      line = line + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8365 = output[v10287]
      }
      outputBuffer[v4955] = v8365 / ratioWeight;
      var v4956 = pixelOffset;
      pixelOffset = pixelOffset + 1;
      var v10288 = line;
      line = line + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8366 = output[v10288]
      }
      outputBuffer[v4956] = v8366 / ratioWeight;
      var v8367 = line;
      line = line + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v4957 = output[v8367]
      }
      outputBuffer[pixelOffset] = v4957 / ratioWeight;
      pixelOffset = pixelOffset + nextLineOffsetTargetWidth;
      var v8368 = this.originalHeightMultipliedByChannels;
      v4958 = line < v8368
    }
    outputOffset = outputOffset + 3;
    var v8369 = this.targetWidthMultipliedByChannels;
    v4959 = outputOffset < v8369
  }while(v4959);
  return outputBuffer
}
function v62() {
  var v10289 = this.widthOriginal;
  var v8370 = v10289 > 0;
  if(v8370) {
    var v11108 = this.heightOriginal;
    var v10290 = v11108 > 0;
    if(v10290) {
      var v11436 = this.targetWidth;
      var v11109 = v11436 > 0;
      if(v11109) {
        var v11437 = this.targetHeight;
        v11109 = v11437 > 0
      }
      v10290 = v11109
    }
    v8370 = v10290
  }
  var v4971 = v8370;
  if(v4971) {
    var v8371 = this.widthOriginal;
    var v8372 = this.targetWidth;
    var v4965 = v8371 == v8372;
    if(v4965) {
      this.resizeWidth = this.bypassResizer
    }else {
      var v4960 = this.widthOriginal;
      var v4961 = this.targetWidth;
      this.ratioWeightWidthPass = v4960 / v4961;
      var v10291 = this.ratioWeightWidthPass;
      var v8373 = v10291 < 1;
      if(v8373) {
        v8373 = this.interpolationPass
      }
      var v4964 = v8373;
      if(v4964) {
        JAMScript.call(this.initializeFirstPassBuffers, this, [true]);
        var v4962;
        var v10292 = this.colorChannels;
        var v8374 = v10292 == 4;
        if(v8374) {
          v4962 = this.resizeWidthInterpolatedRGBA
        }else {
          v4962 = this.resizeWidthInterpolatedRGB
        }
        this.resizeWidth = v4962
      }else {
        JAMScript.call(this.initializeFirstPassBuffers, this, [false]);
        var v4963;
        var v10293 = this.colorChannels;
        var v8375 = v10293 == 4;
        if(v8375) {
          v4963 = this.resizeWidthRGBA
        }else {
          v4963 = this.resizeWidthRGB
        }
        this.resizeWidth = v4963
      }
    }
    var v8376 = this.heightOriginal;
    var v8377 = this.targetHeight;
    var v4970 = v8376 == v8377;
    if(v4970) {
      this.resizeHeight = this.bypassResizer
    }else {
      var v4966 = this.heightOriginal;
      var v4967 = this.targetHeight;
      this.ratioWeightHeightPass = v4966 / v4967;
      var v10294 = this.ratioWeightHeightPass;
      var v8378 = v10294 < 1;
      if(v8378) {
        v8378 = this.interpolationPass
      }
      var v4969 = v8378;
      if(v4969) {
        JAMScript.call(this.initializeSecondPassBuffers, this, [true]);
        this.resizeHeight = this.resizeHeightInterpolated
      }else {
        JAMScript.call(this.initializeSecondPassBuffers, this, [false]);
        var v4968;
        var v10295 = this.colorChannels;
        var v8379 = v10295 == 4;
        if(v8379) {
          v4968 = this.resizeHeightRGBA
        }else {
          v4968 = this.resizeHeightRGB
        }
        this.resizeHeight = v4968
      }
    }
  }else {
    throw new Error("Invalid settings specified for the resizer.");
  }
  return
}
function v61() {
  var v4973 = !launchedContext;
  if(v4973) {
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
      var v4972 = audioSource;
      var v11882 = JAMScript.call(audioContextHandle.createBuffer, audioContextHandle, [1, 1, webAudioActualSampleRate]);
      v4972.buffer = v11882;
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
  var v10296 = this.flashInitialized;
  var v8380 = !v10296;
  if(v8380) {
    var v10297 = this.audioHandleFlash;
    if(v10297) {
      var v11110 = this.audioHandleFlash;
      v10297 = v11110.initialize
    }
    v8380 = v10297
  }
  var v4976 = v8380;
  if(v4976) {
    this.flashInitialized = true;
    var v4974 = this.audioHandleFlash;
    var v4975 = this.audioChannels;
    JAMScript.call(v4974.initialize, v4974, [v4975, XAudioJSVolume]);
    resetCallbackAPIAudioBuffer(44100, samplesPerCallback)
  }
  return this.flashInitialized
}
function v59(buffer$$16) {
  var v4977 = this.mozAudioTail;
  var length$$16 = v4977.length;
  var v4981 = length$$16 > 0;
  if(v4981) {
    var v4978 = this.audioHandleMoz;
    var v4979 = this.mozAudioTail;
    var samplesAccepted = JAMScript.call(v4978.mozWriteAudio, v4978, [v4979]);
    var v8381 = this.samplesAlreadyWritten;
    this.samplesAlreadyWritten = v8381 + samplesAccepted;
    var v4980 = this.mozAudioTail;
    v4980.splice(0, samplesAccepted)
  }
  var v4982 = buffer$$16.length;
  var v10298 = this.samplesAlreadyWritten;
  var v8382 = webAudioMaxBufferSize - v10298;
  var v10299 = this.audioHandleMoz;
  var v8383 = JAMScript.call(v10299.mozCurrentSampleOffset, v10299, []);
  var v4983 = v8382 + v8383;
  length$$16 = Math.min(v4982, v4983);
  var v4984 = this.audioHandleMoz;
  samplesAccepted = JAMScript.call(v4984.mozWriteAudio, v4984, [buffer$$16]);
  var v8384 = this.samplesAlreadyWritten;
  this.samplesAlreadyWritten = v8384 + samplesAccepted;
  var index$$46 = 0;
  var v4987 = length$$16 > samplesAccepted;
  for(;v4987;) {
    var v4985 = this.mozAudioTail;
    var v8385 = index$$46;
    index$$46 = index$$46 + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v4986 = buffer$$16[v8385]
    }
    v4985.push(v4986);
    length$$16 = length$$16 - 1;
    v4987 = length$$16 > samplesAccepted
  }
  return
}
function v58(newVolume) {
  var v8386 = newVolume >= 0;
  if(v8386) {
    v8386 = newVolume <= 1
  }
  var v4992 = v8386;
  if(v4992) {
    XAudioJSVolume = newVolume;
    var v4989 = JAMScript.call(this.checkFlashInit, this, []);
    if(v4989) {
      var v4988 = this.audioHandleFlash;
      JAMScript.call(v4988.changeVolume, v4988, [XAudioJSVolume])
    }
    var v4991 = this.mozAudioFound;
    if(v4991) {
      var v4990 = this.audioHandleMoz;
      v4990.volume = XAudioJSVolume
    }
  }
  return
}
function v57() {
  function v56(event$$2) {
    var v4993 = event$$2.success;
    if(v4993) {
      thisObj.audioHandleFlash = event$$2.ref
    }else {
      thisObj.audioType = 1
    }
    return
  }
  var existingFlashload = document.getElementById("XAudioJS");
  var v4997 = existingFlashload == null;
  if(v4997) {
    var thisObj = this;
    var mainContainerNode = document.createElement("div");
    JAMScript.call(mainContainerNode.setAttribute, mainContainerNode, ["style", "position: fixed; bottom: 0px; right: 0px; margin: 0px; padding: 0px; border: none; width: 8px; height: 8px; overflow: hidden; z-index: -1000; "]);
    var containerNode = document.createElement("div");
    JAMScript.call(containerNode.setAttribute, containerNode, ["style", "position: static; border: none; width: 0px; height: 0px; visibility: hidden; margin: 8px; padding: 0px;"]);
    JAMScript.call(containerNode.setAttribute, containerNode, ["id", "XAudioJS"]);
    JAMScript.call(mainContainerNode.appendChild, mainContainerNode, [containerNode]);
    var v8387 = document.getElementsByTagName("body");
    var v4994 = v8387[0];
    JAMScript.call(v4994.appendChild, v4994, [mainContainerNode]);
    var v4995 = {"allowscriptaccess":"always"};
    var v4996 = {"style":"position: static; visibility: hidden; margin: 8px; padding: 0px; border: none"};
    JAMScript.call(swfobject.embedSWF, swfobject, ["XAudioJS.swf", "XAudioJS", "8", "8", "9.0.0", "", {}, v4995, v4996, v56])
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
  var v4998 = getFloat32(webAudioMinBufferSize);
  JAMScript.call(this.writeMozAudio, this, [v4998]);
  this.audioType = 0;
  return
}
function v53() {
  var v11883 = JAMScript.new(Audio, []);
  this.audioHandleMoz = v11883;
  var v4999 = this.audioHandleMoz;
  var v5000 = this.audioChannels;
  JAMScript.call(v4999.mozSetup, v4999, [v5000, XAudioJSSampleRate]);
  this.samplesAlreadyWritten = 0;
  var v5001;
  var v10300 = this.audioChannels;
  var v8388 = v10300 == 2;
  if(v8388) {
    v5001 = [0, 0]
  }else {
    v5001 = [0]
  }
  var emptySampleFrame = v5001;
  var prebufferAmount = 0;
  var v10301 = navigator.platform;
  var v8389 = v10301 != "MacIntel";
  if(v8389) {
    var v10302 = navigator.platform;
    v8389 = v10302 != "MacPPC"
  }
  var v5005 = v8389;
  if(v5005) {
    var v10303 = this.audioHandleMoz;
    var v8390 = JAMScript.call(v10303.mozCurrentSampleOffset, v10303, []);
    var v5002 = v8390 == 0;
    for(;v5002;) {
      var v10304 = this.audioHandleMoz;
      var v8391 = JAMScript.call(v10304.mozWriteAudio, v10304, [emptySampleFrame]);
      prebufferAmount = prebufferAmount + v8391;
      var v10305 = this.audioHandleMoz;
      var v8392 = JAMScript.call(v10305.mozCurrentSampleOffset, v10305, []);
      v5002 = v8392 == 0
    }
    var v5003 = this.audioChannels;
    var samplesToDoubleBuffer = prebufferAmount / v5003;
    var index$$45 = 0;
    var v5004 = index$$45 < samplesToDoubleBuffer;
    for(;v5004;) {
      var v8393 = this.samplesAlreadyWritten;
      var v10306 = this.audioHandleMoz;
      var v8394 = JAMScript.call(v10306.mozWriteAudio, v10306, [emptySampleFrame]);
      this.samplesAlreadyWritten = v8393 + v8394;
      index$$45 = index$$45 + 1;
      v5004 = index$$45 < samplesToDoubleBuffer
    }
  }
  var v8395 = this.samplesAlreadyWritten;
  this.samplesAlreadyWritten = v8395 + prebufferAmount;
  var v8396 = this.samplesAlreadyWritten;
  webAudioMinBufferSize = webAudioMinBufferSize + v8396;
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
  var v8397 = this.audioType;
  var v5010 = v8397 == 0;
  if(v5010) {
    JAMScript.call(this.MOZExecuteCallback, this, [])
  }else {
    var v8398 = this.audioType;
    var v5009 = v8398 == 1;
    if(v5009) {
      JAMScript.call(this.callbackBasedExecuteCallback, this, [])
    }else {
      var v8399 = this.audioType;
      var v5008 = v8399 == 2;
      if(v5008) {
        var v8400 = JAMScript.call(this.checkFlashInit, this, []);
        var v10307 = !v8400;
        if(v10307) {
          v8400 = launchedContext
        }
        var v5007 = v8400;
        if(v5007) {
          JAMScript.call(this.callbackBasedExecuteCallback, this, [])
        }else {
          var v5006 = this.mozAudioFound;
          if(v5006) {
            JAMScript.call(this.MOZExecuteCallback, this, [])
          }
        }
      }
    }
  }
  return
}
function v50() {
  var v5011 = JAMScript.call(this.remainingBuffer, this, []);
  var samplesRequested$$1 = webAudioMinBufferSize - v5011;
  var v5013 = samplesRequested$$1 > 0;
  if(v5013) {
    var v5012 = JAMScript.call(this.underRunCallback, this, [samplesRequested$$1]);
    JAMScript.call(this.callbackBasedWriteAudioNoCallback, this, [v5012])
  }
  return
}
function v49() {
  var v5014 = JAMScript.call(this.remainingBuffer, this, []);
  var samplesRequested = webAudioMinBufferSize - v5014;
  var v5016 = samplesRequested > 0;
  if(v5016) {
    var v5015 = JAMScript.call(this.underRunCallback, this, [samplesRequested]);
    JAMScript.call(this.writeMozAudio, this, [v5015])
  }
  return
}
function v48() {
  var v8401 = this.audioType;
  var v5027 = v8401 == 0;
  if(v5027) {
    var v5017 = this.samplesAlreadyWritten;
    var v8402 = this.audioHandleMoz;
    var v5018 = JAMScript.call(v8402.mozCurrentSampleOffset, v8402, []);
    return v5017 - v5018
  }else {
    var v8403 = this.audioType;
    var v5026 = v8403 == 1;
    if(v5026) {
      var v11111 = resampledSamplesLeft();
      var v11112 = resampleControl.ratioWeight;
      var v10308 = v11111 * v11112;
      var v11113 = this.audioChannels;
      var v10309 = v11113 - 1;
      var v8404 = v10308 >> v10309;
      var v10310 = this.audioChannels;
      var v8405 = v10310 - 1;
      var v5019 = v8404 << v8405;
      return v5019 + audioBufferSize
    }else {
      var v8406 = this.audioType;
      var v5025 = v8406 == 2;
      if(v5025) {
        var v8407 = JAMScript.call(this.checkFlashInit, this, []);
        var v10311 = !v8407;
        if(v10311) {
          v8407 = launchedContext
        }
        var v5024 = v8407;
        if(v5024) {
          var v11114 = resampledSamplesLeft();
          var v11115 = resampleControl.ratioWeight;
          var v10312 = v11114 * v11115;
          var v11116 = this.audioChannels;
          var v10313 = v11116 - 1;
          var v8408 = v10312 >> v10313;
          var v10314 = this.audioChannels;
          var v8409 = v10314 - 1;
          var v5020 = v8408 << v8409;
          return v5020 + audioBufferSize
        }else {
          var v5023 = this.mozAudioFound;
          if(v5023) {
            var v5021 = this.samplesAlreadyWritten;
            var v8410 = this.audioHandleMoz;
            var v5022 = JAMScript.call(v8410.mozCurrentSampleOffset, v8410, []);
            return v5021 - v5022
          }
        }
      }
    }
  }
  return 0
}
function v47(buffer$$15) {
  var v8411 = this.audioType;
  var v5032 = v8411 == 0;
  if(v5032) {
    JAMScript.call(this.MOZWriteAudioNoCallback, this, [buffer$$15])
  }else {
    var v8412 = this.audioType;
    var v5031 = v8412 == 1;
    if(v5031) {
      JAMScript.call(this.callbackBasedWriteAudioNoCallback, this, [buffer$$15])
    }else {
      var v8413 = this.audioType;
      var v5030 = v8413 == 2;
      if(v5030) {
        var v8414 = JAMScript.call(this.checkFlashInit, this, []);
        var v10315 = !v8414;
        if(v10315) {
          v8414 = launchedContext
        }
        var v5029 = v8414;
        if(v5029) {
          JAMScript.call(this.callbackBasedWriteAudioNoCallback, this, [buffer$$15])
        }else {
          var v5028 = this.mozAudioFound;
          if(v5028) {
            JAMScript.call(this.MOZWriteAudioNoCallback, this, [buffer$$15])
          }
        }
      }
    }
  }
  return
}
function v46(buffer$$14) {
  var v8415 = this.audioType;
  var v5037 = v8415 == 0;
  if(v5037) {
    JAMScript.call(this.MOZWriteAudio, this, [buffer$$14])
  }else {
    var v8416 = this.audioType;
    var v5036 = v8416 == 1;
    if(v5036) {
      JAMScript.call(this.callbackBasedWriteAudio, this, [buffer$$14])
    }else {
      var v8417 = this.audioType;
      var v5035 = v8417 == 2;
      if(v5035) {
        var v8418 = JAMScript.call(this.checkFlashInit, this, []);
        var v10316 = !v8418;
        if(v10316) {
          v8418 = launchedContext
        }
        var v5034 = v8418;
        if(v5034) {
          JAMScript.call(this.callbackBasedWriteAudio, this, [buffer$$14])
        }else {
          var v5033 = this.mozAudioFound;
          if(v5033) {
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
  var v8419 = bufferCounter < length$$15;
  if(v8419) {
    v8419 = audioBufferSize < webAudioMaxBufferSize
  }
  var v5039 = v8419;
  for(;v5039;) {
    var v5038 = audioBufferSize;
    audioBufferSize = audioBufferSize + 1;
    var v8420 = bufferCounter;
    bufferCounter = bufferCounter + 1;
    JAMScript.set(audioContextSampleBuffer, v5038, buffer$$13[v8420]);
    var v8421 = bufferCounter < length$$15;
    if(v8421) {
      v8421 = audioBufferSize < webAudioMaxBufferSize
    }
    v5039 = v8421
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
    var v5040 = this.outputBufferSize;
    var v11884 = new Float32Array(v5040);
    this.outputBuffer = v11884;
    var v5041 = this.channels;
    var v11885 = new Float32Array(v5041);
    this.lastOutput = v11885
  }catch(error$$7) {
    this.outputBuffer = [];
    this.lastOutput = []
  }
  return
}
function v40(sliceAmount) {
  var v5045 = this.noReturn;
  if(v5045) {
    return sliceAmount
  }else {
    try {
      var v5042 = this.outputBuffer;
      return v5042.subarray(0, sliceAmount)
    }catch(error$$5) {
      try {
        var v5043 = this.outputBuffer;
        v5043.length = sliceAmount;
        return this.outputBuffer
      }catch(error$$6) {
        var v5044 = this.outputBuffer;
        return v5044.slice(0, sliceAmount)
      }
    }
  }
  return
}
function v39(buffer$$9) {
  var v5046 = this.noReturn;
  if(v5046) {
    this.outputBuffer = buffer$$9;
    return buffer$$9.length
  }else {
    return buffer$$9
  }
  return
}
function v38() {
  var v8422 = this.channels;
  var v5047 = "var bufferLength = Math.min(buffer.length, this.outputBufferSize);  if ((bufferLength % " + v8422;
  var toCompile = v5047 + ") == 0) {    if (bufferLength > 0) {      var ratioWeight = this.ratioWeight;      var weight = 0;";
  var channel = 0;
  var v8423 = this.channels;
  var v5048 = channel < v8423;
  for(;v5048;) {
    var v10317 = "var output" + channel;
    var v8424 = v10317 + " = 0;";
    toCompile = toCompile + v8424;
    channel = channel + 1;
    var v8425 = this.channels;
    v5048 = channel < v8425
  }
  toCompile = toCompile + "var actualPosition = 0;      var amountToNext = 0;      var alreadyProcessedTail = !this.tailExists;      this.tailExists = false;      var outputBuffer = this.outputBuffer;      var outputOffset = 0;      var currentPosition = 0;      do {        if (alreadyProcessedTail) {          weight = ratioWeight;";
  channel = 0;
  var v8426 = this.channels;
  var v5049 = channel < v8426;
  for(;v5049;) {
    var v10318 = "output" + channel;
    var v8427 = v10318 + " = 0;";
    toCompile = toCompile + v8427;
    channel = channel + 1;
    var v8428 = this.channels;
    v5049 = channel < v8428
  }
  toCompile = toCompile + "}        else {          weight = this.lastWeight;";
  channel = 0;
  var v8429 = this.channels;
  var v5050 = channel < v8429;
  for(;v5050;) {
    var v11438 = "output" + channel;
    var v11117 = v11438 + " = this.lastOutput[";
    var v10319 = v11117 + channel;
    var v8430 = v10319 + "];";
    toCompile = toCompile + v8430;
    channel = channel + 1;
    var v8431 = this.channels;
    v5050 = channel < v8431
  }
  toCompile = toCompile + "alreadyProcessedTail = true;        }        while (weight > 0 && actualPosition < bufferLength) {          amountToNext = 1 + actualPosition - currentPosition;          if (weight >= amountToNext) {";
  channel = 0;
  var v8432 = this.channels;
  var v5051 = channel < v8432;
  for(;v5051;) {
    var v10320 = "output" + channel;
    var v8433 = v10320 + " += buffer[actualPosition++] * amountToNext;";
    toCompile = toCompile + v8433;
    channel = channel + 1;
    var v8434 = this.channels;
    v5051 = channel < v8434
  }
  toCompile = toCompile + "currentPosition = actualPosition;            weight -= amountToNext;          }          else {";
  channel = 0;
  var v8435 = this.channels;
  var v5052 = channel < v8435;
  for(;v5052;) {
    var v11439 = "output" + channel;
    var v11118 = v11439 + " += buffer[actualPosition";
    var v11440;
    var v11617 = channel > 0;
    if(v11617) {
      v11440 = " + " + channel
    }else {
      v11440 = ""
    }
    var v11119 = v11440;
    var v10321 = v11118 + v11119;
    var v8436 = v10321 + "] * weight;";
    toCompile = toCompile + v8436;
    channel = channel + 1;
    var v8437 = this.channels;
    v5052 = channel < v8437
  }
  toCompile = toCompile + "currentPosition += weight;            weight = 0;            break;          }        }        if (weight == 0) {";
  channel = 0;
  var v8438 = this.channels;
  var v5053 = channel < v8438;
  for(;v5053;) {
    var v10322 = "outputBuffer[outputOffset++] = output" + channel;
    var v8439 = v10322 + " / ratioWeight;";
    toCompile = toCompile + v8439;
    channel = channel + 1;
    var v8440 = this.channels;
    v5053 = channel < v8440
  }
  toCompile = toCompile + "}        else {          this.lastWeight = weight;";
  channel = 0;
  var v8441 = this.channels;
  var v5054 = channel < v8441;
  for(;v5054;) {
    var v11441 = "this.lastOutput[" + channel;
    var v11120 = v11441 + "] = output";
    var v10323 = v11120 + channel;
    var v8442 = v10323 + ";";
    toCompile = toCompile + v8442;
    channel = channel + 1;
    var v8443 = this.channels;
    v5054 = channel < v8443
  }
  toCompile = toCompile + 'this.tailExists = true;          break;        }      } while (actualPosition < bufferLength);      return this.bufferSlice(outputOffset);    }    else {      return (this.noReturn) ? 0 : [];    }  }  else {    throw(new Error("Buffer was of incorrect sample length."));  }';
  var v11886 = JAMScript.call(Function, null, ["buffer", toCompile]);
  this.interpolate = v11886;
  return
}
function v37() {
  var v10324 = this.fromSampleRate;
  var v8444 = v10324 > 0;
  if(v8444) {
    var v11121 = this.toSampleRate;
    var v10325 = v11121 > 0;
    if(v10325) {
      var v11122 = this.channels;
      v10325 = v11122 > 0
    }
    v8444 = v10325
  }
  var v5058 = v8444;
  if(v5058) {
    var v8445 = this.fromSampleRate;
    var v8446 = this.toSampleRate;
    var v5057 = v8445 == v8446;
    if(v5057) {
      this.resampler = this.bypassResampler;
      this.ratioWeight = 1
    }else {
      JAMScript.call(this.compileInterpolationFunction, this, []);
      this.resampler = this.interpolate;
      var v5055 = this.fromSampleRate;
      var v5056 = this.toSampleRate;
      this.ratioWeight = v5055 / v5056;
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
  var v5059 = this.outputBuffer;
  var event$$1 = {outputBuffer:v5059};
  JAMScript.call(this.onaudioprocess, this, [event$$1]);
  return
}
function v35() {
  return
}
function v34(runner$$2) {
  function RunNextSetup() {
    var v5061 = index$$40 < length$$12;
    if(v5061) {
      try {
        var v8447 = suite$$1.benchmarks;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v5060 = v8447[index$$40]
        }
        JAMScript.call(v5060.Setup, v5060, [])
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
      var v8448 = suite$$1.benchmarks;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v5062 = v8448[index$$40]
      }
      data$$20 = JAMScript.call(suite$$1.RunSingleBenchmark, suite$$1, [v5062, data$$20])
    }catch(e$$5) {
      JAMScript.call(suite$$1.NotifyError, suite$$1, [e$$5]);
      return null
    }
    var v5063;
    var v8449 = data$$20 == null;
    if(v8449) {
      v5063 = RunNextTearDown
    }else {
      v5063 = RunNextBenchmark()
    }
    return v5063
  }
  function RunNextTearDown() {
    try {
      var v8450 = suite$$1.benchmarks;
      var v8451 = index$$40;
      index$$40 = index$$40 + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v5064 = v8450[v8451]
      }
      JAMScript.call(v5064.TearDown, v5064, [])
    }catch(e$$6) {
      JAMScript.call(suite$$1.NotifyError, suite$$1, [e$$6]);
      return null
    }
    return RunNextSetup
  }
  JAMScript.call(BenchmarkSuite.ResetRNG, BenchmarkSuite, []);
  this.results = [];
  this.runner = runner$$2;
  var v5065 = this.benchmarks;
  var length$$12 = v5065.length;
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
    var v8452;
    if(doDeterministic$$1) {
      var v10326 = benchmark$$1.deterministicIterations;
      v8452 = i$$5 < v10326
    }else {
      v8452 = elapsed < 1E3
    }
    var v5067 = v8452;
    for(;v5067;) {
      JAMScript.call(benchmark$$1.run, benchmark$$1, []);
      var v5066 = new Date;
      elapsed = v5066 - start$$5;
      i$$5 = i$$5 + 1;
      var v8453;
      if(doDeterministic$$1) {
        var v10327 = benchmark$$1.deterministicIterations;
        v8453 = i$$5 < v10327
      }else {
        v8453 = elapsed < 1E3
      }
      v5067 = v8453
    }
    var v5068 = data$$19 != null;
    if(v5068) {
      var v8454 = data$$19;
      var v10328 = data$$19.runs;
      v8454.runs = v10328 + i$$5;
      var v8455 = data$$19;
      var v10329 = data$$19.elapsed;
      v8455.elapsed = v10329 + elapsed
    }
    return
  }
  var config = BenchmarkSuite.config;
  var v5069;
  var v10330 = config.doWarmup;
  var v8456 = v10330 !== undefined;
  if(v8456) {
    v5069 = config.doWarmup
  }else {
    v5069 = benchmark$$1.doWarmup
  }
  var doWarmup$$1 = v5069;
  var v5070;
  var v10331 = config.doDeterministic;
  var v8457 = v10331 !== undefined;
  if(v8457) {
    v5070 = config.doDeterministic
  }else {
    v5070 = benchmark$$1.doDeterministic
  }
  var doDeterministic$$1 = v5070;
  var v8458 = !doWarmup$$1;
  if(v8458) {
    v8458 = data$$18 == null
  }
  var v5071 = v8458;
  if(v5071) {
    data$$18 = {runs:0, elapsed:0}
  }
  var v5077 = data$$18 == null;
  if(v5077) {
    Measure(null);
    return{runs:0, elapsed:0}
  }else {
    Measure(data$$18);
    var v8459 = data$$18.runs;
    var v8460 = benchmark$$1.minIterations;
    var v5072 = v8459 < v8460;
    if(v5072) {
      return data$$18
    }
    var v8461 = data$$18.elapsed;
    var v5073 = v8461 * 1E3;
    var v5074 = data$$18.runs;
    var usec = v5073 / v5074;
    var v5075;
    var v10332 = benchmark$$1.rmsResult;
    var v8462 = v10332 != null;
    if(v8462) {
      v5075 = JAMScript.call(benchmark$$1.rmsResult, benchmark$$1, [])
    }else {
      v5075 = 0
    }
    var rms = v5075;
    var v5076 = new BenchmarkResult(benchmark$$1, usec, rms);
    JAMScript.call(this.NotifyStep, this, [v5076]);
    return null
  }
  return
}
function v32(error$$2) {
  var v8463 = this.runner;
  var v5080 = v8463.NotifyError;
  if(v5080) {
    var v5078 = this.runner;
    var v5079 = this.name;
    JAMScript.call(v5078.NotifyError, v5078, [v5079, error$$2])
  }
  var v8464 = this.runner;
  var v5083 = v8464.NotifyStep;
  if(v5083) {
    var v5081 = this.runner;
    var v5082 = this.name;
    JAMScript.call(v5081.NotifyStep, v5081, [v5082])
  }
  return
}
function v31(runner$$1) {
  var v5084 = BenchmarkSuite.scores;
  v5084.push(1);
  var v5086 = runner$$1.NotifyResult;
  if(v5086) {
    var v5085 = this.name;
    JAMScript.call(runner$$1.NotifyResult, runner$$1, [v5085, "Skipped"])
  }
  return
}
function v30() {
  var v5087 = this.results;
  var mean = JAMScript.call(BenchmarkSuite.GeometricMeanTime, BenchmarkSuite, [v5087]);
  var v8465 = this.reference;
  var v5088 = v8465[0];
  var score$$1 = v5088 / mean;
  var v5089 = BenchmarkSuite.scores;
  v5089.push(score$$1);
  var v8466 = this.runner;
  var v5093 = v8466.NotifyResult;
  if(v5093) {
    var v5090 = 100 * score$$1;
    var formatted$$1 = JAMScript.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v5090]);
    var v5091 = this.runner;
    var v5092 = this.name;
    JAMScript.call(v5091.NotifyResult, v5091, [v5092, formatted$$1])
  }
  var v10333 = this.reference;
  var v8467 = v10333.length;
  var v5102 = v8467 == 2;
  if(v5102) {
    var v5094 = this.results;
    var meanLatency = JAMScript.call(BenchmarkSuite.GeometricMeanLatency, BenchmarkSuite, [v5094]);
    var v5101 = meanLatency != 0;
    if(v5101) {
      var v8468 = this.reference;
      var v5095 = v8468[1];
      var scoreLatency = v5095 / meanLatency;
      var v5096 = BenchmarkSuite.scores;
      v5096.push(scoreLatency);
      var v8469 = this.runner;
      var v5100 = v8469.NotifyResult;
      if(v5100) {
        var v5097 = 100 * scoreLatency;
        var formattedLatency = JAMScript.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v5097]);
        var v5098 = this.runner;
        var v8470 = this.name;
        var v5099 = v8470 + "Latency";
        JAMScript.call(v5098.NotifyResult, v5098, [v5099, formattedLatency])
      }
    }
  }
  return
}
function v29(result$$1) {
  var v5103 = this.results;
  v5103.push(result$$1);
  var v8471 = this.runner;
  var v5106 = v8471.NotifyStep;
  if(v5106) {
    var v5104 = this.runner;
    var v8472 = result$$1.benchmark;
    var v5105 = v8472.name;
    JAMScript.call(v5104.NotifyStep, v5104, [v5105])
  }
  return
}
function v28(value$$29) {
  var v5107 = value$$29 > 100;
  if(v5107) {
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
  var v8473 = measurements$$1.length;
  var v5109 = i$$4 < v8473;
  for(;v5109;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v10334 = measurements$$1[i$$4]
    }
    var v8474 = v10334.latency;
    var v5108 = v8474 != 0;
    if(v5108) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v11123 = measurements$$1[i$$4]
      }
      var v10335 = v11123.latency;
      var v8475 = Math.log(v10335);
      log$$2 = log$$2 + v8475;
      hasLatencyResult = true
    }
    i$$4 = i$$4 + 1;
    var v8476 = measurements$$1.length;
    v5109 = i$$4 < v8476
  }
  if(hasLatencyResult) {
    var v5110 = Math.E;
    var v8477 = measurements$$1.length;
    var v5111 = log$$2 / v8477;
    return Math.pow(v5110, v5111)
  }else {
    return 0
  }
  return
}
function v26(measurements) {
  var log$$1 = 0;
  var i$$3 = 0;
  var v8478 = measurements.length;
  var v5112 = i$$3 < v8478;
  for(;v5112;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11124 = measurements[i$$3]
    }
    var v10336 = v11124.time;
    var v8479 = Math.log(v10336);
    log$$1 = log$$1 + v8479;
    i$$3 = i$$3 + 1;
    var v8480 = measurements.length;
    v5112 = i$$3 < v8480
  }
  var v5113 = Math.E;
  var v8481 = measurements.length;
  var v5114 = log$$1 / v8481;
  return Math.pow(v5113, v5114)
}
function v25(numbers) {
  var log = 0;
  var i$$2 = 0;
  var v8482 = numbers.length;
  var v5115 = i$$2 < v8482;
  for(;v5115;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v10337 = numbers[i$$2]
    }
    var v8483 = Math.log(v10337);
    log = log + v8483;
    i$$2 = i$$2 + 1;
    var v8484 = numbers.length;
    v5115 = i$$2 < v8484
  }
  var v5116 = Math.E;
  var v8485 = numbers.length;
  var v5117 = log / v8485;
  return Math.pow(v5116, v5117)
}
function v24() {
  var result = 0;
  var suites$$1 = BenchmarkSuite.suites;
  var i$$1 = 0;
  var v8486 = suites$$1.length;
  var v5118 = i$$1 < v8486;
  for(;v5118;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11125 = suites$$1[i$$1]
    }
    var v10338 = v11125.benchmarks;
    var v8487 = v10338.length;
    result = result + v8487;
    i$$1 = i$$1 + 1;
    var v8488 = suites$$1.length;
    v5118 = i$$1 < v8488
  }
  return result
}
function v23(runner, skipBenchmarks$$1) {
  function RunStep() {
    var v8489 = continuation;
    var v10339 = !v8489;
    if(v10339) {
      v8489 = index$$39 < length$$11
    }
    var v5124 = v8489;
    for(;v5124;) {
      if(continuation) {
        continuation = JAMScript.call(continuation, null, [])
      }else {
        var v5119 = index$$39;
        index$$39 = index$$39 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var suite = suites[v5119]
        }
        var v5121 = runner.NotifyStart;
        if(v5121) {
          var v5120 = suite.name;
          JAMScript.call(runner.NotifyStart, runner, [v5120])
        }
        var v10340 = suite.name;
        var v8490 = skipBenchmarks$$1.indexOf(v10340);
        var v5122 = v8490 > -1;
        if(v5122) {
          JAMScript.call(suite.NotifySkipped, suite, [runner])
        }else {
          continuation = JAMScript.call(suite.RunStep, suite, [runner])
        }
      }
      var v8491 = continuation;
      if(v8491) {
        var v11126 = typeof window;
        var v10341 = v11126 != "undefined";
        if(v10341) {
          v10341 = window.setTimeout
        }
        v8491 = v10341
      }
      var v5123 = v8491;
      if(v5123) {
        window.setTimeout(RunStep, 25);
        return
      }
      var v8492 = continuation;
      var v10342 = !v8492;
      if(v10342) {
        v8492 = index$$39 < length$$11
      }
      v5124 = v8492
    }
    var v5127 = runner.NotifyScore;
    if(v5127) {
      var v5125 = BenchmarkSuite.scores;
      var score = JAMScript.call(BenchmarkSuite.GeometricMean, BenchmarkSuite, [v5125]);
      var v5126 = 100 * score;
      var formatted = JAMScript.call(BenchmarkSuite.FormatScore, BenchmarkSuite, [v5126]);
      JAMScript.call(runner.NotifyScore, runner, [formatted])
    }
    return
  }
  var v5128;
  var v10343 = typeof skipBenchmarks$$1;
  var v8493 = v10343 === "undefined";
  if(v8493) {
    v5128 = []
  }else {
    v5128 = skipBenchmarks$$1
  }
  skipBenchmarks$$1 = v5128;
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
      var v8494 = seed + 2127912214;
      var v8495 = seed << 12;
      var v5129 = v8494 + v8495;
      seed = v5129 & 4294967295;
      var v8496 = seed ^ 3345072700;
      var v8497 = seed >>> 19;
      var v5130 = v8496 ^ v8497;
      seed = v5130 & 4294967295;
      var v8498 = seed + 374761393;
      var v8499 = seed << 5;
      var v5131 = v8498 + v8499;
      seed = v5131 & 4294967295;
      var v8500 = seed + 3550635116;
      var v8501 = seed << 9;
      var v5132 = v8500 ^ v8501;
      seed = v5132 & 4294967295;
      var v8502 = seed + 4251993797;
      var v8503 = seed << 3;
      var v5133 = v8502 + v8503;
      seed = v5133 & 4294967295;
      var v8504 = seed ^ 3042594569;
      var v8505 = seed >>> 16;
      var v5134 = v8504 ^ v8505;
      seed = v5134 & 4294967295;
      var v5135 = seed & 268435455;
      return v5135 / 268435456
    }
    var seed = 49734321;
    return v20
  }
  var v5136 = Math;
  var v11887 = v21();
  v5136.random = v11887;
  return
}
function v19(s$$2) {
  throw"Alert called with argument: " + s$$2;
}
function v18() {
  return this.time
}
function v17() {
  var v5137 = performance.now;
  var v8507 = !v5137;
  if(v8507) {
    var v8506 = performance.mozNow;
    var v10345 = !v8506;
    if(v10345) {
      var v10344 = performance.msNow;
      var v11128 = !v10344;
      if(v11128) {
        var v11127 = performance.oNow;
        var v11443 = !v11127;
        if(v11443) {
          var v11442 = performance.webkitNow;
          var v11618 = !v11442;
          if(v11618) {
            v11442 = Date.now
          }
          v11127 = v11442
        }
        v10344 = v11127
      }
      v8506 = v10344
    }
    v5137 = v8506
  }
  return v5137
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
  var v5138;
  if(setup) {
    v5138 = setup
  }else {
    v5138 = v0
  }
  this.Setup = v5138;
  var v5139;
  if(tearDown) {
    v5139 = tearDown
  }else {
    v5139 = v1
  }
  this.TearDown = v5139;
  var v5140;
  if(rmsResult) {
    v5140 = rmsResult
  }else {
    v5140 = null
  }
  this.rmsResult = v5140;
  var v5141;
  if(minIterations) {
    v5141 = minIterations
  }else {
    v5141 = 32
  }
  this.minIterations = v5141;
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
  var v5142 = BenchmarkSuite.suites;
  v5142.push(this);
  return
}
function setupGameboy() {
  var v11129 = typeof Uint8Array;
  var v10346 = v11129 != "undefined";
  if(v10346) {
    var v11444 = typeof Int8Array;
    var v11130 = v11444 != "undefined";
    if(v11130) {
      var v11619 = typeof Float32Array;
      var v11445 = v11619 != "undefined";
      if(v11445) {
        var v11620 = typeof Int32Array;
        v11445 = v11620 != "undefined"
      }
      v11130 = v11445
    }
    v10346 = v11130
  }
  var v8508 = v10346;
  var v5143 = !v8508;
  if(v5143) {
    throw"TypedArrayUnsupported";
  }
  decoded_gameboy_rom = base64_decode(gameboy_rom);
  rom = null;
  return
}
function runGameboy() {
  var v5144 = new GameBoyCanvas;
  start(v5144, decoded_gameboy_rom);
  gameboy.instructions = 0;
  gameboy.totalInstructions = 25E4;
  var v8509 = gameboy.instructions;
  var v8510 = gameboy.totalInstructions;
  var v5145 = v8509 <= v8510;
  for(;v5145;) {
    JAMScript.call(gameboy.run, gameboy, []);
    JAMScript.call(GameBoyAudioNode.run, GameBoyAudioNode, []);
    var v8511 = gameboy.instructions;
    var v8512 = gameboy.totalInstructions;
    v5145 = v8511 <= v8512
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
    var v10347 = buffer$$8.data;
    var v8513 = v10347.length;
    var v5146 = i$$6 < v8513;
    for(;v5146;) {
      var v11131 = buffer$$8.data;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10348 = v11131[i$$6]
      }
      var v8514 = i$$6 * v10348;
      sum = sum + v8514;
      sum = sum % 1E3;
      i$$6 = i$$6 + 1;
      var v10349 = buffer$$8.data;
      var v8515 = v10349.length;
      v5146 = i$$6 < v8515
    }
    return
  }
  function v3(w$$5, h$$4) {
    var result$$2 = {};
    var v8516 = w$$5 * h$$4;
    var v5147 = v8516 * 4;
    var v11888 = new Uint8Array(v5147);
    result$$2.data = v11888;
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
      var v5148 = this.channelData;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        return v5148[i$$8]
      }
    }
    GameBoyAudioNode.bufferSize = bufferSize;
    GameBoyAudioNode.outputBuffer = {getChannelData:v11, channelData:[]};
    var i$$7 = 0;
    var v5150 = i$$7 < outputChannels;
    for(;v5150;) {
      var v8517 = GameBoyAudioNode.outputBuffer;
      var v5149 = v8517.channelData;
      var v11889 = new Float32Array(bufferSize);
      v5149[i$$7] = v11889;
      i$$7 = i$$7 + 1;
      v5150 = i$$7 < outputChannels
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
    var v8518 = a.length;
    var v5151 = i$$9 < v8518;
    for(;v5151;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8519 = a[i$$9]
      }
      result$$3 = result$$3 + v8519;
      i$$9 = i$$9 + 1;
      var v8520 = a.length;
      v5151 = i$$9 < v8520
    }
    return result$$3
  }
  var v5152 = gameboy.registerA;
  var v5153 = gameboy.registerB;
  var v5154 = gameboy.registerC;
  var v5155 = gameboy.registerE;
  var v5156 = gameboy.registerF;
  var v5157 = gameboy.registersHL;
  var v5158 = gameboy.programCounter;
  var v5159 = gameboy.stackPointer;
  var v10350 = gameboy.ROM;
  var v8521 = JAMScript.call(gameboy.fromTypedArray, gameboy, [v10350]);
  var v5160 = sum$$1(v8521);
  var v10351 = gameboy.memory;
  var v8522 = JAMScript.call(gameboy.fromTypedArray, gameboy, [v10351]);
  var v5161 = sum$$1(v8522);
  var v10352 = gameboy.MBCRam;
  var v8523 = JAMScript.call(gameboy.fromTypedArray, gameboy, [v10352]);
  var v5162 = sum$$1(v8523);
  var v10353 = gameboy.VRam;
  var v8524 = JAMScript.call(gameboy.fromTypedArray, gameboy, [v10353]);
  var v5163 = sum$$1(v8524);
  var state = {registerA:v5152, registerB:v5153, registerC:v5154, registerE:v5155, registerF:v5156, registersHL:v5157, programCounter:v5158, stackPointer:v5159, sumROM:v5160, sumMemory:v5161, sumMBCRam:v5162, sumVRam:v5163};
  var stateStr = JAMScript.call(JSON.stringify, JSON, [state]);
  var v8525 = typeof expectedGameboyStateStr;
  var v5166 = v8525 != "undefined";
  if(v5166) {
    var v5165 = stateStr != expectedGameboyStateStr;
    if(v5165) {
      var v11446 = "Incorrect final state of processor:\n" + " actual   ";
      var v11132 = v11446 + stateStr;
      var v10354 = v11132 + "\n";
      var v8526 = v10354 + " expected ";
      var v5164 = v8526 + expectedGameboyStateStr;
      JAMScript.call(alert, null, [v5164])
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
    var v5179 = dataLength > 0;
    if(v5179) {
      var bytes = [0, 0, 0];
      var index$$41 = 0;
      var remainder = dataLength % 3;
      var v10355 = data$$21.length;
      var v8527 = v10355 % 3;
      var v5168 = v8527 > 0;
      for(;v5168;) {
        var v5167 = data$$21.length;
        JAMScript.set(data$$21, v5167, " ");
        var v10356 = data$$21.length;
        var v8528 = v10356 % 3;
        v5168 = v8528 > 0
      }
      var v5172 = index$$41 < dataLength;
      for(;v5172;) {
        var v10357 = index$$41;
        index$$41 = index$$41 + 1;
        var v8529 = data$$21.charCodeAt(v10357);
        var v5169 = v8529 & 255;
        var v10358 = index$$41;
        index$$41 = index$$41 + 1;
        var v8530 = data$$21.charCodeAt(v10358);
        var v5170 = v8530 & 255;
        var v10359 = index$$41;
        index$$41 = index$$41 + 1;
        var v8531 = data$$21.charCodeAt(v10359);
        var v5171 = v8531 & 255;
        bytes = [v5169, v5170, v5171];
        var v11664 = bytes[0];
        var v11621 = v11664 >> 2;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11447 = toBase64[v11621]
        }
        var v11689 = bytes[0];
        var v11682 = v11689 & 3;
        var v11665 = v11682 << 4;
        var v11683 = bytes[1];
        var v11666 = v11683 >> 4;
        var v11622 = v11665 | v11666;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11448 = toBase64[v11622]
        }
        var v11133 = v11447 + v11448;
        var v11684 = bytes[1];
        var v11667 = v11684 & 15;
        var v11623 = v11667 << 2;
        var v11668 = bytes[2];
        var v11624 = v11668 >> 6;
        var v11449 = v11623 | v11624;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11134 = toBase64[v11449]
        }
        var v10360 = v11133 + v11134;
        var v11450 = bytes[2];
        var v11135 = v11450 & 63;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v10361 = toBase64[v11135]
        }
        var v8532 = v10360 + v10361;
        base64$$1 = base64$$1 + v8532;
        v5172 = index$$41 < dataLength
      }
      var v5178 = remainder > 0;
      if(v5178) {
        var v8533 = base64$$1.length;
        var v5173 = v8533 - 1;
        base64$$1[v5173] = "=";
        var v5177 = remainder == 2;
        if(v5177) {
          var v8534 = base64$$1.length;
          var v5174 = v8534 - 2;
          base64$$1[v5174] = "=";
          var v8535 = base64$$1.length;
          var v5175 = v8535 - 3;
          var v11136 = bytes[0];
          var v10362 = v11136 & 3;
          var v8536 = v10362 << 4;
          base64$$1[v5175] = toBase64[v8536]
        }else {
          var v8537 = base64$$1.length;
          var v5176 = v8537 - 2;
          var v11137 = bytes[1];
          var v10363 = v11137 & 15;
          var v8538 = v10363 << 2;
          base64$$1[v5176] = toBase64[v8538]
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
    var v8539 = dataLength$$1 > 3;
    if(v8539) {
      var v10364 = dataLength$$1 % 4;
      v8539 = v10364 == 0
    }
    var v5187 = v8539;
    if(v5187) {
      var sixbits = [0, 0, 0, 0];
      var index$$42 = 0;
      var v5184 = index$$42 < dataLength$$1;
      for(;v5184;) {
        var v10365 = index$$42;
        index$$42 = index$$42 + 1;
        var v8540 = data$$22.charAt(v10365);
        var v5180 = fromBase64.indexOf(v8540);
        var v10366 = index$$42;
        index$$42 = index$$42 + 1;
        var v8541 = data$$22.charAt(v10366);
        var v5181 = fromBase64.indexOf(v8541);
        var v10367 = index$$42;
        index$$42 = index$$42 + 1;
        var v8542 = data$$22.charAt(v10367);
        var v5182 = fromBase64.indexOf(v8542);
        var v10368 = index$$42;
        index$$42 = index$$42 + 1;
        var v8543 = data$$22.charAt(v10368);
        var v5183 = fromBase64.indexOf(v8543);
        sixbits = [v5180, v5181, v5182, v5183];
        var v11669 = sixbits[0];
        var v11625 = v11669 << 2;
        var v11670 = sixbits[1];
        var v11626 = v11670 >> 4;
        var v11451 = v11625 | v11626;
        var v11138 = String.fromCharCode(v11451);
        var v11685 = sixbits[1];
        var v11671 = v11685 & 15;
        var v11627 = v11671 << 4;
        var v11672 = sixbits[2];
        var v11628 = v11672 >> 2;
        var v11452 = v11627 | v11628;
        var v11139 = String.fromCharCode(v11452);
        var v10369 = v11138 + v11139;
        var v11673 = sixbits[2];
        var v11629 = v11673 & 3;
        var v11453 = v11629 << 6;
        var v11454 = sixbits[3];
        var v11140 = v11453 | v11454;
        var v10370 = String.fromCharCode(v11140);
        var v8544 = v10369 + v10370;
        decode64 = decode64 + v8544;
        v5184 = index$$42 < dataLength$$1
      }
      var v8545 = sixbits[3];
      var v5186 = v8545 >= 64;
      if(v5186) {
        var v8546 = decode64;
        var v10371 = decode64.length;
        v8546.length = v10371 - 1;
        var v8547 = sixbits[2];
        var v5185 = v8547 >= 64;
        if(v5185) {
          var v8548 = decode64;
          var v10372 = decode64.length;
          v8548.length = v10372 - 1
        }
      }
    }
  }
  return decode64
}
function to_little_endian_dword(str$$6) {
  var v5188 = to_little_endian_word(str$$6);
  var v10373 = str$$6 >> 16;
  var v8549 = v10373 & 255;
  var v10374 = str$$6 >> 24;
  var v8550 = v10374 & 255;
  var v5189 = String.fromCharCode(v8549, v8550);
  return v5188 + v5189
}
function to_little_endian_word(str$$7) {
  var v5190 = to_byte(str$$7);
  var v10375 = str$$7 >> 8;
  var v8551 = v10375 & 255;
  var v5191 = String.fromCharCode(v8551);
  return v5190 + v5191
}
function to_byte(str$$8) {
  var v5192 = str$$8 & 255;
  return String.fromCharCode(v5192)
}
function arrayToBase64(arrayIn) {
  var binString = "";
  var length$$13 = arrayIn.length;
  var index$$43 = 0;
  var v5194 = index$$43 < length$$13;
  for(;v5194;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v10376 = arrayIn[index$$43]
    }
    var v8552 = typeof v10376;
    var v5193 = v8552 == "number";
    if(v5193) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v10377 = arrayIn[index$$43]
      }
      var v8553 = String.fromCharCode(v10377);
      binString = binString + v8553
    }
    index$$43 = index$$43 + 1;
    v5194 = index$$43 < length$$13
  }
  return base64(binString)
}
function base64ToArray(b64String) {
  var binString$$1 = base64_decode(b64String);
  var outArray = [];
  var length$$14 = binString$$1.length;
  var index$$44 = 0;
  var v5196 = index$$44 < length$$14;
  for(;v5196;) {
    var v10378 = index$$44;
    index$$44 = index$$44 + 1;
    var v8554 = binString$$1.charCodeAt(v10378);
    var v5195 = v8554 & 255;
    outArray.push(v5195);
    v5196 = index$$44 < length$$14
  }
  return outArray
}
function Resampler(fromSampleRate, toSampleRate, channels$$1, outputBufferSize, noReturn) {
  this.fromSampleRate = fromSampleRate;
  this.toSampleRate = toSampleRate;
  this.channels = channels$$1 | 0;
  this.outputBufferSize = outputBufferSize;
  var v5197 = !noReturn;
  this.noReturn = !v5197;
  JAMScript.call(this.initialize, this, []);
  return
}
function XAudioServer(channels$$2, sampleRate$$1, minBufferSize, maxBufferSize, underRunCallback, volume) {
  function v14() {
    return
  }
  var v5198;
  var v8555 = channels$$2 == 2;
  if(v8555) {
    v5198 = 2
  }else {
    v5198 = 1
  }
  this.audioChannels = v5198;
  var v5199 = this.audioChannels;
  webAudioMono = v5199 == 1;
  var v5200;
  var v10379 = sampleRate$$1 > 0;
  if(v10379) {
    v10379 = sampleRate$$1 <= 16777215
  }
  var v8556 = v10379;
  if(v8556) {
    v5200 = sampleRate$$1
  }else {
    v5200 = 44100
  }
  XAudioJSSampleRate = v5200;
  var v5201;
  var v11141 = samplesPerCallback << 1;
  var v10380 = minBufferSize >= v11141;
  if(v10380) {
    v10380 = minBufferSize < maxBufferSize
  }
  var v8558 = v10380;
  if(v8558) {
    var v10381;
    if(webAudioMono) {
      v10381 = 4294967295
    }else {
      v10381 = 4294967294
    }
    var v8557 = v10381;
    v5201 = minBufferSize & v8557
  }else {
    v5201 = samplesPerCallback << 1
  }
  webAudioMinBufferSize = v5201;
  var v5202;
  var v10382 = Math.floor(maxBufferSize);
  var v11142 = this.audioChannels;
  var v10383 = webAudioMinBufferSize + v11142;
  var v8560 = v10382 > v10383;
  if(v8560) {
    var v10384;
    if(webAudioMono) {
      v10384 = 4294967295
    }else {
      v10384 = 4294967294
    }
    var v8559 = v10384;
    v5202 = maxBufferSize & v8559
  }else {
    v5202 = minBufferSize << 1
  }
  webAudioMaxBufferSize = v5202;
  var v5203;
  var v10385 = typeof underRunCallback;
  var v8561 = v10385 == "function";
  if(v8561) {
    v5203 = underRunCallback
  }else {
    v5203 = v14
  }
  this.underRunCallback = v5203;
  var v5204;
  var v10386 = volume >= 0;
  if(v10386) {
    v10386 = volume <= 1
  }
  var v8562 = v10386;
  if(v8562) {
    v5204 = volume
  }else {
    v5204 = 1
  }
  XAudioJSVolume = v5204;
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
    var v8563 = audioSampleIndice = audioSampleIndice + 1;
    var v5205 = v8563 < size$$5;
    do {
      newBuffer[audioSampleIndice] = 0;
      var v8564 = audioSampleIndice = audioSampleIndice + 1;
      v5205 = v8564 < size$$5
    }while(v5205)
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
  var v8565 = index$$47 < samplesPerCallback;
  if(v8565) {
    v8565 = resampleBufferStart != resampleBufferEnd
  }
  var v5207 = v8565;
  for(;v5207;) {
    var v11693 = resampleBufferStart;
    resampleBufferStart = resampleBufferStart + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11690 = resampled[v11693]
    }
    var v11686 = v11690 + 1;
    var v11674 = Math.max(v11686, 0);
    var v11630 = Math.min(v11674, 2);
    var v11455 = v11630 * 16383;
    var v11143 = v11455 | 0;
    var v10387 = v11143 + 12288;
    var v8566 = String.fromCharCode(v10387);
    copyBinaryStringLeft = copyBinaryStringLeft + v8566;
    var v11694 = resampleBufferStart;
    resampleBufferStart = resampleBufferStart + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11691 = resampled[v11694]
    }
    var v11687 = v11691 + 1;
    var v11675 = Math.max(v11687, 0);
    var v11631 = Math.min(v11675, 2);
    var v11456 = v11631 * 16383;
    var v11144 = v11456 | 0;
    var v10388 = v11144 + 12288;
    var v8567 = String.fromCharCode(v10388);
    copyBinaryStringRight = copyBinaryStringRight + v8567;
    var v5206 = resampleBufferStart == resampleBufferSize;
    if(v5206) {
      resampleBufferStart = 0
    }
    index$$47 = index$$47 + 1;
    var v8568 = index$$47 < samplesPerCallback;
    if(v8568) {
      v8568 = resampleBufferStart != resampleBufferEnd
    }
    v5207 = v8568
  }
  return copyBinaryStringLeft + copyBinaryStringRight
}
function generateFlashMonoString() {
  var copyBinaryString = "";
  var index$$48 = 0;
  var v8569 = index$$48 < samplesPerCallback;
  if(v8569) {
    v8569 = resampleBufferStart != resampleBufferEnd
  }
  var v5209 = v8569;
  for(;v5209;) {
    var v11695 = resampleBufferStart;
    resampleBufferStart = resampleBufferStart + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v11692 = resampled[v11695]
    }
    var v11688 = v11692 + 1;
    var v11676 = Math.max(v11688, 0);
    var v11632 = Math.min(v11676, 2);
    var v11457 = v11632 * 16383;
    var v11145 = v11457 | 0;
    var v10389 = v11145 + 12288;
    var v8570 = String.fromCharCode(v10389);
    copyBinaryString = copyBinaryString + v8570;
    var v5208 = resampleBufferStart == resampleBufferSize;
    if(v5208) {
      resampleBufferStart = 0
    }
    index$$48 = index$$48 + 1;
    var v8571 = index$$48 < samplesPerCallback;
    if(v8571) {
      v8571 = resampleBufferStart != resampleBufferEnd
    }
    v5209 = v8571
  }
  return copyBinaryString
}
function audioOutputEvent(event$$3) {
  var index$$49 = 0;
  var v5210 = event$$3.outputBuffer;
  var buffer1 = JAMScript.call(v5210.getChannelData, v5210, [0]);
  var v5211 = event$$3.outputBuffer;
  var buffer2 = JAMScript.call(v5211.getChannelData, v5211, [1]);
  resampleRefill();
  var v5219 = !webAudioMono;
  if(v5219) {
    var v8572 = index$$49 < samplesPerCallback;
    if(v8572) {
      v8572 = resampleBufferStart != resampleBufferEnd
    }
    var v5215 = v8572;
    for(;v5215;) {
      var v8573 = resampleBufferStart;
      resampleBufferStart = resampleBufferStart + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v5212 = resampled[v8573]
      }
      buffer1[index$$49] = v5212 * XAudioJSVolume;
      var v5213 = index$$49;
      index$$49 = index$$49 + 1;
      var v10390 = resampleBufferStart;
      resampleBufferStart = resampleBufferStart + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8574 = resampled[v10390]
      }
      buffer2[v5213] = v8574 * XAudioJSVolume;
      var v5214 = resampleBufferStart == resampleBufferSize;
      if(v5214) {
        resampleBufferStart = 0
      }
      var v8575 = index$$49 < samplesPerCallback;
      if(v8575) {
        v8575 = resampleBufferStart != resampleBufferEnd
      }
      v5215 = v8575
    }
  }else {
    var v8576 = index$$49 < samplesPerCallback;
    if(v8576) {
      v8576 = resampleBufferStart != resampleBufferEnd
    }
    var v5218 = v8576;
    for(;v5218;) {
      var v5216 = index$$49;
      var v10391 = resampleBufferStart;
      resampleBufferStart = resampleBufferStart + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
        var v8577 = resampled[v10391]
      }
      buffer2[v5216] = buffer1[index$$49] = v8577 * XAudioJSVolume;
      index$$49 = index$$49 + 1;
      var v5217 = resampleBufferStart == resampleBufferSize;
      if(v5217) {
        resampleBufferStart = 0
      }
      var v8578 = index$$49 < samplesPerCallback;
      if(v8578) {
        v8578 = resampleBufferStart != resampleBufferEnd
      }
      v5218 = v8578
    }
  }
  var v5221 = index$$49 < samplesPerCallback;
  for(;v5221;) {
    var v5220 = index$$49;
    buffer2[v5220] = buffer1[index$$49] = 0;
    index$$49 = index$$49 + 1;
    v5221 = index$$49 < samplesPerCallback
  }
  return
}
function resampleRefill() {
  var v5228 = audioBufferSize > 0;
  if(v5228) {
    var v5222 = getBufferSamples();
    var resampleLength = JAMScript.call(resampleControl.resampler, resampleControl, [v5222]);
    var resampledResult = resampleControl.outputBuffer;
    var index2 = 0;
    var v5227 = index2 < resampleLength;
    for(;v5227;) {
      var v5223 = resampleBufferEnd;
      resampleBufferEnd = resampleBufferEnd + 1;
      JAMScript.set(resampled, v5223, resampledResult[index2]);
      var v5224 = resampleBufferEnd == resampleBufferSize;
      if(v5224) {
        resampleBufferEnd = 0
      }
      var v5226 = resampleBufferStart == resampleBufferEnd;
      if(v5226) {
        resampleBufferStart = resampleBufferStart + 1;
        var v5225 = resampleBufferStart == resampleBufferSize;
        if(v5225) {
          resampleBufferStart = 0
        }
      }
      index2 = index2 + 1;
      v5227 = index2 < resampleLength
    }
    audioBufferSize = 0
  }
  return
}
function resampledSamplesLeft() {
  var v10392;
  var v11146 = resampleBufferStart <= resampleBufferEnd;
  if(v11146) {
    v10392 = 0
  }else {
    v10392 = resampleBufferSize
  }
  var v8579 = v10392;
  var v5229 = v8579 + resampleBufferEnd;
  return v5229 - resampleBufferStart
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
  var v11147 = XAudioJSSampleRate / APISampleRate;
  var v10393 = Math.ceil(v11147);
  var v8580 = webAudioMaxBufferSize * v10393;
  var v5230 = Math.max(v8580, samplesPerCallback);
  resampleBufferSize = v5230 << 1;
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
  var v8581 = parseInt(widthOriginal);
  var v10394 = !v8581;
  if(v10394) {
    v8581 = 0
  }
  var v5231 = v8581;
  var v11890 = Math.abs(v5231);
  this.widthOriginal = v11890;
  var v8582 = parseInt(heightOriginal);
  var v10395 = !v8582;
  if(v10395) {
    v8582 = 0
  }
  var v5232 = v8582;
  var v11891 = Math.abs(v5232);
  this.heightOriginal = v11891;
  var v8583 = parseInt(targetWidth);
  var v10396 = !v8583;
  if(v10396) {
    v8583 = 0
  }
  var v5233 = v8583;
  var v11892 = Math.abs(v5233);
  this.targetWidth = v11892;
  var v8584 = parseInt(targetHeight);
  var v10397 = !v8584;
  if(v10397) {
    v8584 = 0
  }
  var v5234 = v8584;
  var v11893 = Math.abs(v5234);
  this.targetHeight = v11893;
  var v5235;
  var v10398 = !blendAlpha;
  var v8585 = !v10398;
  if(v8585) {
    v5235 = 4
  }else {
    v5235 = 3
  }
  this.colorChannels = v5235;
  var v5236 = !interpolationPass;
  this.interpolationPass = !v5236;
  var v5237 = this.targetWidth;
  var v5238 = this.colorChannels;
  this.targetWidthMultipliedByChannels = v5237 * v5238;
  var v5239 = this.widthOriginal;
  var v5240 = this.colorChannels;
  this.originalWidthMultipliedByChannels = v5239 * v5240;
  var v5241 = this.heightOriginal;
  var v5242 = this.colorChannels;
  this.originalHeightMultipliedByChannels = v5241 * v5242;
  var v5243 = this.targetWidthMultipliedByChannels;
  var v5244 = this.heightOriginal;
  this.widthPassResultSize = v5243 * v5244;
  var v5245 = this.targetWidthMultipliedByChannels;
  var v5246 = this.targetHeight;
  this.finalResultSize = v5245 * v5246;
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
  var v5247 = [false, false, false, false, false, false, false, true];
  var v5248 = [true, false, false, false, false, false, false, true];
  var v5249 = [true, false, false, false, false, true, true, true];
  var v5250 = [false, true, true, true, true, true, true, false];
  this.dutyLookup = [v5247, v5248, v5249, v5250];
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
  var v11894 = JAMScript.call(dateVar.getTime, dateVar, []);
  this.lastIteration = v11894;
  dateVar = new_Date();
  var v11895 = JAMScript.call(dateVar.getTime, dateVar, []);
  this.firstIteration = v11895;
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
  var v5251 = this.ROMBanks;
  v5251[82] = 72;
  var v5252 = this.ROMBanks;
  v5252[83] = 80;
  var v5253 = this.ROMBanks;
  v5253[84] = 96;
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
  var v8586 = this.onscreenWidth;
  var v8587 = this.onscreenHeight;
  var v5254 = v8586 * v8587;
  this.offscreenRGBCount = v5254 * 4;
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
  var v5257 = GameBoyEmulatorInitialized();
  if(v5257) {
    var v8588 = GameBoyEmulatorPlaying();
    var v5256 = !v8588;
    if(v5256) {
      var v8589 = gameboy;
      var v10399 = gameboy.stopEmulator;
      v8589.stopEmulator = v10399 & 1;
      cout("Starting the iterator.", 0);
      var dateObj$$1 = new_Date();
      var v5255 = gameboy;
      var v11896 = JAMScript.call(dateObj$$1.getTime, dateObj$$1, []);
      v5255.firstIteration = v11896;
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
  var v5259 = GameBoyEmulatorInitialized();
  if(v5259) {
    var v5258 = GameBoyEmulatorPlaying();
    if(v5258) {
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
  var v8590 = GameBoyEmulatorInitialized();
  if(v8590) {
    v8590 = GameBoyEmulatorPlaying()
  }
  var v5260 = v8590;
  if(v5260) {
    clearInterval(gbRunInterval);
    var v8591 = gameboy;
    var v10400 = gameboy.stopEmulator;
    v8591.stopEmulator = v10400 | 2;
    cout("The previous emulation has been cleared.", 0)
  }else {
    cout("No previous emulation was found to be cleared.", 0)
  }
  return
}
function save() {
  var v5266 = GameBoyEmulatorInitialized();
  if(v5266) {
    try {
      var state_suffix = 0;
      var v11633 = gameboy.name;
      var v11458 = "FREEZE_" + v11633;
      var v11148 = v11458 + "_";
      var v10401 = v11148 + state_suffix;
      var v8592 = JAMScript.call(findValue, null, [v10401]);
      var v5261 = v8592 != null;
      for(;v5261;) {
        state_suffix = state_suffix + 1;
        var v11634 = gameboy.name;
        var v11459 = "FREEZE_" + v11634;
        var v11149 = v11459 + "_";
        var v10402 = v11149 + state_suffix;
        var v8593 = JAMScript.call(findValue, null, [v10402]);
        v5261 = v8593 != null
      }
      var v11150 = gameboy.name;
      var v10403 = "FREEZE_" + v11150;
      var v8594 = v10403 + "_";
      var v5262 = v8594 + state_suffix;
      var v5263 = JAMScript.call(gameboy.saveState, gameboy, []);
      JAMScript.call(setValue, null, [v5262, v5263]);
      var v11151 = gameboy.name;
      var v10404 = "Saved the current state as: FREEZE_" + v11151;
      var v8595 = v10404 + "_";
      var v5264 = v8595 + state_suffix;
      cout(v5264, 0)
    }catch(error$$28) {
      var v10405 = error$$28.message;
      var v8596 = 'Could not save the current emulation state("' + v10405;
      var v5265 = v8596 + '").';
      cout(v5265, 2)
    }
  }else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1)
  }
  return
}
function saveSRAM() {
  var v5274 = GameBoyEmulatorInitialized();
  if(v5274) {
    var v5273 = gameboy.cBATT;
    if(v5273) {
      try {
        var sram = JAMScript.call(gameboy.saveSRAMState, gameboy, []);
        var v8597 = sram.length;
        var v5271 = v8597 > 0;
        if(v5271) {
          cout("Saving the SRAM...", 0);
          var v11152 = gameboy.name;
          var v10406 = "SRAM_" + v11152;
          var v8598 = JAMScript.call(findValue, null, [v10406]);
          var v5268 = v8598 != null;
          if(v5268) {
            cout("Deleting the old SRAM save due to outdated format.", 0);
            var v8599 = gameboy.name;
            var v5267 = "SRAM_" + v8599;
            JAMScript.call(deleteValue, null, [v5267])
          }
          var v8600 = gameboy.name;
          var v5269 = "B64_SRAM_" + v8600;
          var v5270 = arrayToBase64(sram);
          JAMScript.call(setValue, null, [v5269, v5270])
        }else {
          cout("SRAM could not be saved because it was empty.", 1)
        }
      }catch(error$$29) {
        var v10407 = error$$29.message;
        var v8601 = 'Could not save the current emulation state("' + v10407;
        var v5272 = v8601 + '").';
        cout(v5272, 2)
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
  var v5279 = GameBoyEmulatorInitialized();
  if(v5279) {
    var v5278 = gameboy.cTIMER;
    if(v5278) {
      try {
        cout("Saving the RTC...", 0);
        var v8602 = gameboy.name;
        var v5275 = "RTC_" + v8602;
        var v5276 = JAMScript.call(gameboy.saveRTCState, gameboy, []);
        JAMScript.call(setValue, null, [v5275, v5276])
      }catch(error$$30) {
        var v10408 = error$$30.message;
        var v8603 = 'Could not save the RTC of the current emulation state("' + v10408;
        var v5277 = v8603 + '").';
        cout(v5277, 2)
      }
    }
  }else {
    cout("GameBoy core cannot be saved while it has not been initialized.", 1)
  }
  return
}
function autoSave() {
  var v5280 = GameBoyEmulatorInitialized();
  if(v5280) {
    cout("Automatically saving the SRAM.", 0);
    saveSRAM();
    saveRTC()
  }
  return
}
function openSRAM(filename) {
  try {
    var v10409 = "B64_SRAM_" + filename;
    var v8604 = JAMScript.call(findValue, null, [v10409]);
    var v5284 = v8604 != null;
    if(v5284) {
      cout("Found a previous SRAM state (Will attempt to load).", 0);
      var v8605 = "B64_SRAM_" + filename;
      var v5281 = JAMScript.call(findValue, null, [v8605]);
      return base64ToArray(v5281)
    }else {
      var v10410 = "SRAM_" + filename;
      var v8606 = JAMScript.call(findValue, null, [v10410]);
      var v5283 = v8606 != null;
      if(v5283) {
        cout("Found a previous SRAM state (Will attempt to load).", 0);
        var v5282 = "SRAM_" + filename;
        return JAMScript.call(findValue, null, [v5282])
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
    var v10411 = "RTC_" + filename$$1;
    var v8607 = JAMScript.call(findValue, null, [v10411]);
    var v5286 = v8607 != null;
    if(v5286) {
      cout("Found a previous RTC state (Will attempt to load).", 0);
      var v5285 = "RTC_" + filename$$1;
      return JAMScript.call(findValue, null, [v5285])
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
    var v8608 = JAMScript.call(findValue, null, [filename$$2]);
    var v5290 = v8608 != null;
    if(v5290) {
      try {
        clearLastEmulation();
        cout("Attempting to run a saved emulation state.", 0);
        gameboy = new GameBoyCore(canvas$$2, "");
        gameboy.savedStateFileName = filename$$2;
        var v5287 = JAMScript.call(findValue, null, [filename$$2]);
        JAMScript.call(gameboy.returnFromState, gameboy, [v5287]);
        run()
      }catch(error$$33) {
        var v11460 = error$$33.message;
        var v11153 = v11460 + " file: ";
        var v11154 = error$$33.fileName;
        var v10412 = v11153 + v11154;
        var v8609 = v10412 + " line: ";
        var v8610 = error$$33.lineNumber;
        var v5288 = v8609 + v8610;
        JAMScript.call(alert, null, [v5288])
      }
    }else {
      var v8611 = "Could not find the save state " + filename$$2;
      var v5289 = v8611 + '".';
      cout(v5289, 2)
    }
  }catch(error$$34) {
    cout("Could not open the saved emulation state.", 2)
  }
  return
}
function import_save(blobData) {
  blobData = decodeBlob(blobData);
  var v8612 = blobData;
  if(v8612) {
    v8612 = blobData.blobs
  }
  var v5302 = v8612;
  if(v5302) {
    var v10413 = blobData.blobs;
    var v8613 = v10413.length;
    var v5301 = v8613 > 0;
    if(v5301) {
      var index$$68 = 0;
      var v10414 = blobData.blobs;
      var v8614 = v10414.length;
      var v5300 = index$$68 < v8614;
      for(;v5300;) {
        var v11461 = blobData.blobs;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v11155 = v11461[index$$68]
        }
        var v10415 = v11155.blobID;
        var v8615 = 'Importing blob "' + v10415;
        var v5291 = v8615 + '"';
        cout(v5291, 0);
        var v10416 = blobData.blobs;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
          var v8616 = v10416[index$$68]
        }
        var v5299 = v8616.blobContent;
        if(v5299) {
          var v11462 = blobData.blobs;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v11156 = v11462[index$$68]
          }
          var v10417 = v11156.blobID;
          var v8617 = v10417.substring(0, 5);
          var v5296 = v8617 == "SRAM_";
          if(v5296) {
            var v11157 = blobData.blobs;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v10418 = v11157[index$$68]
            }
            var v8618 = v10418.blobID;
            var v5292 = "B64_" + v8618;
            var v11158 = blobData.blobs;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v10419 = v11158[index$$68]
            }
            var v8619 = v10419.blobContent;
            var v5293 = base64(v8619);
            JAMScript.call(setValue, null, [v5292, v5293])
          }else {
            var v10420 = blobData.blobs;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v8620 = v10420[index$$68]
            }
            var v5294 = v8620.blobID;
            var v11159 = blobData.blobs;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v10421 = v11159[index$$68]
            }
            var v8621 = v10421.blobContent;
            var v5295 = JSON.parse(v8621);
            JAMScript.call(setValue, null, [v5294, v5295])
          }
        }else {
          var v10422 = blobData.blobs;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
            var v8622 = v10422[index$$68]
          }
          var v5298 = v8622.blobID;
          if(v5298) {
            var v11463 = blobData.blobs;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v11160 = v11463[index$$68]
            }
            var v10423 = v11160.blobID;
            var v8623 = 'Save file imported had blob "' + v10423;
            var v5297 = v8623 + '" with no blob data interpretable.';
            cout(v5297, 2)
          }else {
            cout("Blob chunk information missing completely.", 2)
          }
        }
        index$$68 = index$$68 + 1;
        var v10424 = blobData.blobs;
        var v8624 = v10424.length;
        v5300 = index$$68 < v8624
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
  var v10425 = saveString.length;
  var v8625 = v10425 + 4;
  var v10426 = consoleID.length;
  var v8626 = 1 + v10426;
  var v5303 = v8625 + v8626;
  var v10427 = keyName.length;
  var v8627 = 1 + v10427;
  var v10428 = encodedData$$1.length;
  var v8628 = 4 + v10428;
  var v5304 = v8627 + v8628;
  var totalLength = v5303 + v5304;
  var v8629 = to_little_endian_dword(totalLength);
  saveString = saveString + v8629;
  var v10429 = consoleID.length;
  var v8630 = to_byte(v10429);
  saveString = saveString + v8630;
  saveString = saveString + consoleID;
  var v10430 = keyName.length;
  var v8631 = to_byte(v10430);
  saveString = saveString + v8631;
  saveString = saveString + keyName;
  var v10431 = encodedData$$1.length;
  var v8632 = to_little_endian_dword(v10431);
  saveString = saveString + v8632;
  saveString = saveString + encodedData$$1;
  return saveString
}
function generateMultiBlob(blobPairs) {
  var consoleID$$1 = "GameBoy";
  var v8633 = 13 + 4;
  var v5305 = v8633 + 1;
  var v5306 = consoleID$$1.length;
  var totalLength$$1 = v5305 + v5306;
  var v5307 = consoleID$$1.length;
  var saveString$$1 = to_byte(v5307);
  saveString$$1 = saveString$$1 + consoleID$$1;
  var keyName$$1 = "";
  var encodedData$$2 = "";
  var index$$69 = 0;
  var v8634 = blobPairs.length;
  var v5310 = index$$69 < v8634;
  for(;v5310;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v5308 = blobPairs[index$$69]
    }
    keyName$$1 = v5308[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v5309 = blobPairs[index$$69]
    }
    encodedData$$2 = v5309[1];
    var v10432 = keyName$$1.length;
    var v8635 = to_byte(v10432);
    saveString$$1 = saveString$$1 + v8635;
    saveString$$1 = saveString$$1 + keyName$$1;
    var v10433 = encodedData$$2.length;
    var v8636 = to_little_endian_dword(v10433);
    saveString$$1 = saveString$$1 + v8636;
    saveString$$1 = saveString$$1 + encodedData$$2;
    var v11464 = keyName$$1.length;
    var v11161 = 1 + v11464;
    var v10434 = v11161 + 4;
    var v10435 = encodedData$$2.length;
    var v8637 = v10434 + v10435;
    totalLength$$1 = totalLength$$1 + v8637;
    index$$69 = index$$69 + 1;
    var v8638 = blobPairs.length;
    v5310 = index$$69 < v8638
  }
  var v8639 = to_little_endian_dword(totalLength$$1);
  var v5311 = "EMULATOR_DATA" + v8639;
  saveString$$1 = v5311 + saveString$$1;
  return saveString$$1
}
function decodeBlob(blobData$$1) {
  var length$$21 = blobData$$1.length;
  var blobProperties = {};
  blobProperties.consoleID = null;
  var blobsCount = -1;
  blobProperties.blobs = [];
  var v5328 = length$$21 > 17;
  if(v5328) {
    var v8640 = blobData$$1.substring(0, 13);
    var v5327 = v8640 == "EMULATOR_DATA";
    if(v5327) {
      var v11635 = blobData$$1.charCodeAt(16);
      var v11465 = v11635 & 255;
      var v11162 = v11465 << 24;
      var v11636 = blobData$$1.charCodeAt(15);
      var v11466 = v11636 & 255;
      var v11163 = v11466 << 16;
      var v10436 = v11162 | v11163;
      var v11467 = blobData$$1.charCodeAt(14);
      var v11164 = v11467 & 255;
      var v10437 = v11164 << 8;
      var v8641 = v10436 | v10437;
      var v10438 = blobData$$1.charCodeAt(13);
      var v8642 = v10438 & 255;
      var v5312 = v8641 | v8642;
      length$$21 = Math.min(v5312, length$$21);
      var v5313 = blobData$$1.charCodeAt(17);
      var consoleIDLength = v5313 & 255;
      var v8643 = 17 + consoleIDLength;
      var v5326 = length$$21 > v8643;
      if(v5326) {
        var v5314 = blobProperties;
        var v8644 = 18 + consoleIDLength;
        var v11897 = blobData$$1.substring(18, v8644);
        v5314.consoleID = v11897;
        var blobIDLength = 0;
        var blobLength = 0;
        var index$$70 = 18 + consoleIDLength;
        var v5325 = index$$70 < length$$21;
        for(;v5325;) {
          var v8645 = index$$70;
          index$$70 = index$$70 + 1;
          var v5315 = blobData$$1.charCodeAt(v8645);
          blobIDLength = v5315 & 255;
          var v8646 = index$$70 + blobIDLength;
          var v5324 = v8646 < length$$21;
          if(v5324) {
            var v5316 = blobProperties.blobs;
            var v5317 = blobsCount = blobsCount + 1;
            v5316[v5317] = {};
            var v8647 = blobProperties.blobs;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
              var v5318 = v8647[blobsCount]
            }
            var v8648 = index$$70 + blobIDLength;
            var v11898 = blobData$$1.substring(index$$70, v8648);
            v5318.blobID = v11898;
            index$$70 = index$$70 + blobIDLength;
            var v8649 = index$$70 + 4;
            var v5323 = v8649 < length$$21;
            if(v5323) {
              var v11637 = index$$70 + 3;
              var v11468 = blobData$$1.charCodeAt(v11637);
              var v11165 = v11468 & 255;
              var v10439 = v11165 << 24;
              var v11638 = index$$70 + 2;
              var v11469 = blobData$$1.charCodeAt(v11638);
              var v11166 = v11469 & 255;
              var v10440 = v11166 << 16;
              var v8650 = v10439 | v10440;
              var v11470 = index$$70 + 1;
              var v11167 = blobData$$1.charCodeAt(v11470);
              var v10441 = v11167 & 255;
              var v8651 = v10441 << 8;
              var v5319 = v8650 | v8651;
              var v8652 = blobData$$1.charCodeAt(index$$70);
              var v5320 = v8652 & 255;
              blobLength = v5319 | v5320;
              index$$70 = index$$70 + 4;
              var v8653 = index$$70 + blobLength;
              var v5322 = v8653 <= length$$21;
              if(v5322) {
                var v8654 = blobProperties.blobs;
                introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
                  var v5321 = v8654[blobsCount]
                }
                var v8655 = index$$70 + blobLength;
                var v11899 = blobData$$1.substring(index$$70, v8655);
                v5321.blobContent = v11899;
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
          v5325 = index$$70 < length$$21
        }
      }
    }
  }
  return blobProperties
}
function matchKey(key$$15) {
  var index$$71 = 0;
  var v10442 = settings[3];
  var v8656 = v10442.length;
  var v5330 = index$$71 < v8656;
  for(;v5330;) {
    var v10443 = settings[3];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
      var v8657 = v10443[index$$71]
    }
    var v5329 = v8657 == key$$15;
    if(v5329) {
      return index$$71
    }
    index$$71 = index$$71 + 1;
    var v10444 = settings[3];
    var v8658 = v10444.length;
    v5330 = index$$71 < v8658
  }
  return-1
}
function GameBoyEmulatorInitialized() {
  var v8659 = typeof gameboy;
  var v5331 = v8659 == "object";
  if(v5331) {
    v5331 = gameboy != null
  }
  return v5331
}
function GameBoyEmulatorPlaying() {
  var v8660 = gameboy.stopEmulator;
  var v5332 = v8660 & 2;
  return v5332 == 0
}
function GameBoyKeyDown(e$$7) {
  var v8661 = GameBoyEmulatorInitialized();
  if(v8661) {
    v8661 = GameBoyEmulatorPlaying()
  }
  var v5335 = v8661;
  if(v5335) {
    var v5333 = e$$7.keyCode;
    var keycode = matchKey(v5333);
    var v8662 = keycode >= 0;
    if(v8662) {
      v8662 = keycode < 8
    }
    var v5334 = v8662;
    if(v5334) {
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
  var v8663 = GameBoyEmulatorInitialized();
  if(v8663) {
    v8663 = GameBoyEmulatorPlaying()
  }
  var v5338 = v8663;
  if(v5338) {
    var v5336 = e$$8.keyCode;
    var keycode$$1 = matchKey(v5336);
    var v8664 = keycode$$1 >= 0;
    if(v8664) {
      v8664 = keycode$$1 < 8
    }
    var v5337 = v8664;
    if(v5337) {
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
  var v8665 = GameBoyEmulatorInitialized();
  if(v8665) {
    v8665 = GameBoyEmulatorPlaying()
  }
  var v5344 = v8665;
  if(v5344) {
    var v8666 = e$$9.gamma;
    var v10445 = !v8666;
    if(v10445) {
      v8666 = e$$9.beta
    }
    var v5343 = v8666;
    if(v5343) {
      var v10446 = e$$9.gamma;
      var v10447 = Math.PI;
      var v8667 = v10446 * v10447;
      var v5339 = v8667 / 180;
      var v10448 = e$$9.beta;
      var v10449 = Math.PI;
      var v8668 = v10448 * v10449;
      var v5340 = v8668 / 180;
      JAMScript.call(gameboy.GyroEvent, gameboy, [v5339, v5340])
    }else {
      var v5341 = e$$9.x;
      var v5342 = e$$9.y;
      JAMScript.call(gameboy.GyroEvent, gameboy, [v5341, v5342])
    }
    try {
      e$$9.preventDefault()
    }catch(error$$37) {
    }
  }
  return
}
function initNewCanvas() {
  var v5347 = GameBoyEmulatorInitialized();
  if(v5347) {
    var v5345 = gameboy.canvas;
    var v8669 = gameboy.canvas;
    v5345.width = v8669.clientWidth;
    var v5346 = gameboy.canvas;
    var v8670 = gameboy.canvas;
    v5346.height = v8670.clientHeight
  }
  return
}
function initNewCanvasSize() {
  var v5351 = GameBoyEmulatorInitialized();
  if(v5351) {
    var v8671 = settings[12];
    var v5350 = !v8671;
    if(v5350) {
      var v10450 = gameboy.onscreenWidth;
      var v8672 = v10450 != 160;
      var v10452 = !v8672;
      if(v10452) {
        var v10451 = gameboy.onscreenHeight;
        v8672 = v10451 != 144
      }
      var v5348 = v8672;
      if(v5348) {
        JAMScript.call(gameboy.initLCD, gameboy, [])
      }
    }else {
      var v10453 = gameboy.onscreenWidth;
      var v11168 = gameboy.canvas;
      var v10454 = v11168.clientWidth;
      var v8673 = v10453 != v10454;
      var v10457 = !v8673;
      if(v10457) {
        var v10455 = gameboy.onscreenHeight;
        var v11169 = gameboy.canvas;
        var v10456 = v11169.clientHeight;
        v8673 = v10455 != v10456
      }
      var v5349 = v8673;
      if(v5349) {
        JAMScript.call(gameboy.initLCD, gameboy, [])
      }
    }
  }
  return
}
function ShowBox(name$$33) {
  function v16(entry) {
    var v8674 = JAMScript.call(name$$33.valueOf, name$$33, []);
    var v8675 = JAMScript.call(entry.valueOf, entry, []);
    var v5354 = v8674 === v8675;
    if(v5354) {
      var v8676 = "Box-" + name$$33;
      var v5352 = v8676 + "Latency";
      var box1 = document.getElementById(v5352);
      var v5353 = box1.style;
      v5353.visibility = "visible"
    }
    return
  }
  var v5355 = "Box-" + name$$33;
  var box = document.getElementById(v5355);
  var v5356 = box.style;
  v5356.visibility = "visible";
  var v8677 = document.getElementById("progress-bar");
  var v5357 = v8677.style;
  var v11471 = completed = completed + 1;
  var v11170 = v11471 / benchmarks;
  var v10458 = v11170 * 100;
  var v8678 = "" + v10458;
  var bar = v5357.width = v8678 + "%";
  latencyBenchmarks.forEach(v16);
  return
}
function AddResult(name$$34, result$$4) {
  var v8679 = name$$34 + ": ";
  var v5358 = v8679 + result$$4;
  console.log(v5358);
  var v5359 = "Result-" + name$$34;
  var box$$1 = document.getElementById(v5359);
  JAMScript.set(box$$1, "innerHTML", result$$4);
  return
}
function AddError(name$$35, error$$38) {
  var v8680 = name$$35 + ": ";
  var v8681 = error$$38.message;
  var v5360 = v8680 + v8681;
  console.log(v5360);
  var v5362 = error$$38 == "TypedArrayUnsupported";
  if(v5362) {
    AddResult(name$$35, "<b>Unsupported</b>")
  }else {
    var v5361 = error$$38 == "PerformanceNowUnsupported";
    if(v5361) {
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
  var v8682 = document.getElementById("progress-bar-container");
  var v5363 = v8682.style;
  v5363.visibility = "hidden";
  var v8683 = document.getElementById("bottom-text");
  var v5364 = v8683.style;
  v5364.visibility = "visible";
  var v5365 = document.getElementById("inside-anchor");
  var v5366 = document.getElementById("bar-appendix");
  v5365.removeChild(v5366);
  var v8684 = document.getElementById("alertbox");
  var v5367 = v8684.style;
  v5367.visibility = "hidden";
  return
}
function Run() {
  var v5368 = document.getElementById("main-banner");
  JAMScript.set(v5368, "innerHTML", "Running Octane...");
  var v5369 = document.getElementById("bar-appendix");
  JAMScript.set(v5369, "innerHTML", '<br/><div class="progress progress-striped" id="progress-bar-container" style="visibility:hidden"><div class="bar"style="width: 0%;" id="progress-bar"></div></div>');
  var anchor = document.getElementById("run-octane");
  var parent = document.getElementById("main-container");
  var v5370 = document.getElementById("inside-anchor");
  JAMScript.call(parent.appendChild, parent, [v5370]);
  parent.removeChild(anchor);
  var v5371 = document.getElementById("startup-text");
  JAMScript.set(v5371, "innerHTML", "");
  var v8685 = document.getElementById("progress-bar-container");
  var v5372 = v8685.style;
  v5372.visibility = "visible";
  var v5373 = {NotifyStart:ShowBox, NotifyError:AddError, NotifyResult:AddResult, NotifyScore:AddScore};
  JAMScript.call(BenchmarkSuite.RunSuites, BenchmarkSuite, [v5373, skipBenchmarks]);
  return
}
function CheckCompatibility() {
  var v8686 = typeof Uint8Array;
  var v5374 = v8686 != "undefined";
  if(v5374) {
    var v10459 = typeof Float64Array;
    var v8687 = v10459 != "undefined";
    if(v8687) {
      var v11472 = new Uint8Array(0);
      var v11171 = v11472.subarray;
      var v10460 = typeof v11171;
      v8687 = v10460 != "undefined"
    }
    v5374 = v8687
  }
  var hasTypedArrays = v5374;
  var v5376 = !hasTypedArrays;
  if(v5376) {
    console.log("Typed Arrays not supported");
    var v8688 = document.getElementById("alertbox");
    var v5375 = v8688.style;
    v5375.display = "block"
  }
  var v11172 = window.document;
  var v10461 = v11172.URL;
  var v8689 = v10461.indexOf("skip_zlib=1");
  var v5377 = v8689 >= 0;
  if(v5377) {
    skipBenchmarks.push("zlib")
  }
  var v11173 = window.document;
  var v10462 = v11173.URL;
  var v8690 = v10462.indexOf("auto=1");
  var v5378 = v8690 >= 0;
  if(v5378) {
    Run()
  }
  return
}
function Load() {
  JAMScript.call(setTimeout, null, [CheckCompatibility, 200]);
  return
}
var performance = performance || {};
var v5379 = performance;
var v11900 = v17();
v5379.now = v11900;
var v5380 = BenchmarkResult.prototype;
v5380.valueOf = v18;
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
var v5381 = BenchmarkSuite.prototype;
v5381.NotifyStep = v29;
var v5382 = BenchmarkSuite.prototype;
v5382.NotifyResult = v30;
var v5383 = BenchmarkSuite.prototype;
v5383.NotifySkipped = v31;
var v5384 = BenchmarkSuite.prototype;
v5384.NotifyError = v32;
var v5385 = BenchmarkSuite.prototype;
v5385.RunSingleBenchmark = v33;
var v5386 = BenchmarkSuite.prototype;
v5386.RunStep = v34;
var v5387 = [26288412];
var v8691 = new Benchmark("Gameboy", false, false, 20, runGameboy, setupGameboy, tearDownGameboy, null, 4);
var v5388 = [v8691];
var GameboyBenchmark = new BenchmarkSuite("Gameboy", v5387, v5388);
var decoded_gameboy_rom = null;
var v5389 = '{"registerA":160,"registerB":255,"registerC":255,"registerE":11,' + '"registersHL":51600,"programCounter":24309,"stackPointer":49706,';
var expectedGameboyStateStr = v5389 + '"sumROM":10171578,"sumMemory":3435856,"sumMBCRam":234598,"sumVRam":0}';
var GameBoyWindow = {};
var GameBoyAudioNode = {bufferSize:0, onaudioprocess:null, connect:v35, run:v36};
var mock_date_time_counter = 0;
var toBase64 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/", "="];
var fromBase64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var v5390 = Resampler.prototype;
v5390.initialize = v37;
var v5391 = Resampler.prototype;
v5391.compileInterpolationFunction = v38;
var v5392 = Resampler.prototype;
v5392.bypassResampler = v39;
var v5393 = Resampler.prototype;
v5393.bufferSlice = v40;
var v5394 = Resampler.prototype;
v5394.initializeBuffers = v41;
var v5395 = XAudioServer.prototype;
v5395.MOZWriteAudio = v42;
var v5396 = XAudioServer.prototype;
v5396.MOZWriteAudioNoCallback = v43;
var v5397 = XAudioServer.prototype;
v5397.callbackBasedWriteAudio = v44;
var v5398 = XAudioServer.prototype;
v5398.callbackBasedWriteAudioNoCallback = v45;
var v5399 = XAudioServer.prototype;
v5399.writeAudio = v46;
var v5400 = XAudioServer.prototype;
v5400.writeAudioNoCallback = v47;
var v5401 = XAudioServer.prototype;
v5401.remainingBuffer = v48;
var v5402 = XAudioServer.prototype;
v5402.MOZExecuteCallback = v49;
var v5403 = XAudioServer.prototype;
v5403.callbackBasedExecuteCallback = v50;
var v5404 = XAudioServer.prototype;
v5404.executeCallback = v51;
var v5405 = XAudioServer.prototype;
v5405.initializeAudio = v52;
var v5406 = XAudioServer.prototype;
v5406.preInitializeMozAudio = v53;
var v5407 = XAudioServer.prototype;
v5407.initializeMozAudio = v54;
var v5408 = XAudioServer.prototype;
v5408.initializeWebAudio = v55;
var v5409 = XAudioServer.prototype;
v5409.initializeFlashAudio = v57;
var v5410 = XAudioServer.prototype;
v5410.changeVolume = v58;
var v5411 = XAudioServer.prototype;
v5411.writeMozAudio = v59;
var v5412 = XAudioServer.prototype;
v5412.checkFlashInit = v60;
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
var v5413 = Resize.prototype;
v5413.initialize = v62;
var v5414 = Resize.prototype;
v5414.resizeWidthRGB = v63;
var v5415 = Resize.prototype;
v5415.resizeWidthInterpolatedRGB = v64;
var v5416 = Resize.prototype;
v5416.resizeWidthRGBA = v65;
var v5417 = Resize.prototype;
v5417.resizeWidthInterpolatedRGBA = v66;
var v5418 = Resize.prototype;
v5418.resizeHeightRGB = v67;
var v5419 = Resize.prototype;
v5419.resizeHeightInterpolated = v68;
var v5420 = Resize.prototype;
v5420.resizeHeightRGBA = v69;
var v5421 = Resize.prototype;
v5421.resizeHeightInterpolatedRGBA = v70;
var v5422 = Resize.prototype;
v5422.resize = v71;
var v5423 = Resize.prototype;
v5423.bypassResizer = v72;
var v5424 = Resize.prototype;
v5424.initializeFirstPassBuffers = v73;
var v5425 = Resize.prototype;
v5425.initializeSecondPassBuffers = v74;
var v5426 = Resize.prototype;
v5426.generateFloatBuffer = v75;
var v5427 = Resize.prototype;
v5427.generateUint8Buffer = v76;
var v5428 = Resize.prototype;
v5428.checkForOperaMathBug = v77;
var v5429 = GameBoyCore.prototype;
v5429.GBBOOTROM = [];
var v5430 = GameBoyCore.prototype;
v5430.GBCBOOTROM = [];
var v5431 = GameBoyCore.prototype;
v5431.ffxxDump = [15, 0, 124, 255, 0, 0, 0, 248, 255, 255, 255, 255, 255, 255, 255, 1, 128, 191, 243, 255, 191, 255, 63, 0, 255, 191, 127, 255, 159, 255, 191, 255, 255, 0, 0, 191, 119, 243, 241, 255, 255, 255, 255, 255, 255, 255, 255, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 0, 255, 145, 128, 0, 0, 0, 0, 0, 252, 0, 0, 0, 0, 255, 126, 255, 254, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 192, 255, 193, 0, 
254, 255, 255, 255, 248, 255, 0, 0, 0, 143, 0, 0, 255, 255, 255, 255, 255, 255, 255, 255, 206, 237, 102, 102, 204, 13, 0, 11, 3, 115, 0, 131, 0, 12, 0, 13, 0, 8, 17, 31, 136, 137, 0, 14, 220, 204, 110, 230, 221, 221, 217, 153, 187, 187, 103, 99, 110, 14, 236, 204, 221, 220, 153, 159, 187, 185, 51, 62, 69, 236, 82, 250, 8, 183, 7, 93, 1, 253, 192, 255, 8, 252, 0, 229, 11, 248, 194, 206, 244, 249, 15, 127, 69, 109, 61, 254, 70, 151, 51, 94, 8, 239, 241, 255, 134, 131, 36, 116, 18, 252, 0, 159, 180, 
183, 6, 213, 208, 122, 0, 158, 4, 95, 65, 47, 29, 119, 54, 117, 129, 170, 112, 58, 152, 209, 113, 2, 77, 1, 193, 255, 13, 0, 211, 5, 249, 0, 11, 0];
var v5432 = GameBoyCore.prototype;
v5432.OPCODE = [v78, v79, v80, v81, v82, v83, v84, v85, v86, v87, v88, v89, v90, v91, v92, v93, v94, v95, v96, v97, v98, v99, v100, v101, v102, v103, v104, v105, v106, v107, v108, v109, v110, v111, v112, v113, v114, v115, v116, v117, v118, v119, v120, v121, v122, v123, v124, v125, v126, v127, v128, v129, v130, v131, v132, v133, v134, v135, v136, v137, v138, v139, v140, v141, v142, v143, v144, v145, v146, v147, v148, v149, v150, v151, v152, v153, v154, v155, v156, v157, v158, v159, v160, v161, v162, 
v163, v164, v165, v166, v167, v168, v169, v170, v171, v172, v173, v174, v175, v176, v177, v178, v179, v180, v181, v182, v183, v184, v185, v186, v187, v188, v189, v190, v191, v192, v193, v194, v195, v196, v197, v198, v199, v200, v201, v202, v203, v204, v205, v206, v207, v208, v209, v210, v211, v212, v213, v214, v215, v216, v217, v218, v219, v220, v221, v222, v223, v224, v225, v226, v227, v228, v229, v230, v231, v232, v233, v234, v235, v236, v237, v238, v239, v240, v241, v242, v243, v244, v245, v246, 
v247, v248, v249, v250, v251, v252, v253, v254, v255, v256, v257, v258, v259, v260, v261, v262, v263, v264, v265, v266, v267, v268, v269, v270, v271, v272, v273, v274, v275, v276, v277, v278, v279, v280, v281, v282, v283, v284, v285, v286, v287, v288, v289, v290, v291, v292, v293, v294, v295, v296, v297, v298, v299, v300, v301, v302, v303, v304, v305, v306, v307, v308, v309, v310, v311, v312, v313, v314, v315, v316, v317, v318, v319, v320, v321, v322, v323, v324, v325, v326, v327, v328, v329, v330, 
v331, v332, v333];
var v5433 = GameBoyCore.prototype;
v5433.CBOPCODE = [v334, v335, v336, v337, v338, v339, v340, v341, v342, v343, v344, v345, v346, v347, v348, v349, v350, v351, v352, v353, v354, v355, v356, v357, v358, v359, v360, v361, v362, v363, v364, v365, v366, v367, v368, v369, v370, v371, v372, v373, v374, v375, v376, v377, v378, v379, v380, v381, v382, v383, v384, v385, v386, v387, v388, v389, v390, v391, v392, v393, v394, v395, v396, v397, v398, v399, v400, v401, v402, v403, v404, v405, v406, v407, v408, v409, v410, v411, v412, v413, v414, 
v415, v416, v417, v418, v419, v420, v421, v422, v423, v424, v425, v426, v427, v428, v429, v430, v431, v432, v433, v434, v435, v436, v437, v438, v439, v440, v441, v442, v443, v444, v445, v446, v447, v448, v449, v450, v451, v452, v453, v454, v455, v456, v457, v458, v459, v460, v461, v462, v463, v464, v465, v466, v467, v468, v469, v470, v471, v472, v473, v474, v475, v476, v477, v478, v479, v480, v481, v482, v483, v484, v485, v486, v487, v488, v489, v490, v491, v492, v493, v494, v495, v496, v497, v498, 
v499, v500, v501, v502, v503, v504, v505, v506, v507, v508, v509, v510, v511, v512, v513, v514, v515, v516, v517, v518, v519, v520, v521, v522, v523, v524, v525, v526, v527, v528, v529, v530, v531, v532, v533, v534, v535, v536, v537, v538, v539, v540, v541, v542, v543, v544, v545, v546, v547, v548, v549, v550, v551, v552, v553, v554, v555, v556, v557, v558, v559, v560, v561, v562, v563, v564, v565, v566, v567, v568, v569, v570, v571, v572, v573, v574, v575, v576, v577, v578, v579, v580, v581, v582, 
v583, v584, v585, v586, v587, v588, v589];
var v5434 = GameBoyCore.prototype;
v5434.TICKTable = [4, 12, 8, 8, 4, 4, 8, 4, 20, 8, 8, 8, 4, 4, 8, 4, 4, 12, 8, 8, 4, 4, 8, 4, 12, 8, 8, 8, 4, 4, 8, 4, 8, 12, 8, 8, 4, 4, 8, 4, 8, 8, 8, 8, 4, 4, 8, 4, 8, 12, 8, 8, 12, 12, 12, 4, 8, 8, 8, 8, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 8, 8, 8, 8, 8, 8, 4, 8, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 
8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 8, 12, 12, 16, 12, 16, 8, 16, 8, 16, 12, 0, 12, 24, 8, 16, 8, 12, 12, 4, 12, 16, 8, 16, 8, 16, 12, 4, 12, 4, 8, 16, 12, 12, 8, 4, 4, 16, 8, 16, 16, 4, 16, 4, 4, 4, 8, 16, 12, 12, 8, 4, 4, 16, 8, 16, 12, 8, 16, 4, 0, 4, 8, 16];
var v5435 = GameBoyCore.prototype;
v5435.SecondaryTICKTable = [8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 12, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 
8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8, 8, 8, 8, 8, 8, 8, 16, 8];
var v5436 = GameBoyCore.prototype;
v5436.saveSRAMState = v590;
var v5437 = GameBoyCore.prototype;
v5437.saveRTCState = v591;
var v5438 = GameBoyCore.prototype;
v5438.saveState = v592;
var v5439 = GameBoyCore.prototype;
v5439.returnFromState = v593;
var v5440 = GameBoyCore.prototype;
v5440.returnFromRTCState = v594;
var v5441 = GameBoyCore.prototype;
v5441.start = v595;
var v5442 = GameBoyCore.prototype;
v5442.initMemory = v596;
var v5443 = GameBoyCore.prototype;
v5443.generateCacheArray = v597;
var v5444 = GameBoyCore.prototype;
v5444.initSkipBootstrap = v598;
var v5445 = GameBoyCore.prototype;
v5445.initBootstrap = v599;
var v5446 = GameBoyCore.prototype;
v5446.ROMLoad = v600;
var v5447 = GameBoyCore.prototype;
v5447.getROMImage = v601;
var v5448 = GameBoyCore.prototype;
v5448.interpretCartridge = v602;
var v5449 = GameBoyCore.prototype;
v5449.disableBootROM = v603;
var v5450 = GameBoyCore.prototype;
v5450.initializeTiming = v604;
var v5451 = GameBoyCore.prototype;
v5451.setupRAM = v605;
var v5452 = GameBoyCore.prototype;
v5452.MBCRAMUtilized = v606;
var v5453 = GameBoyCore.prototype;
v5453.recomputeDimension = v607;
var v5454 = GameBoyCore.prototype;
v5454.initLCD = v608;
var v5455 = GameBoyCore.prototype;
v5455.graphicsBlit = v609;
var v5456 = GameBoyCore.prototype;
v5456.JoyPadEvent = v610;
var v5457 = GameBoyCore.prototype;
v5457.GyroEvent = v611;
var v5458 = GameBoyCore.prototype;
v5458.initSound = v612;
var v5459 = GameBoyCore.prototype;
v5459.changeVolume = v613;
var v5460 = GameBoyCore.prototype;
v5460.initAudioBuffer = v614;
var v5461 = GameBoyCore.prototype;
v5461.intializeWhiteNoise = v615;
var v5462 = GameBoyCore.prototype;
v5462.audioUnderrunAdjustment = v616;
var v5463 = GameBoyCore.prototype;
v5463.initializeAudioStartState = v617;
var v5464 = GameBoyCore.prototype;
v5464.outputAudio = v618;
var v5465 = GameBoyCore.prototype;
v5465.generateAudio = v619;
var v5466 = GameBoyCore.prototype;
v5466.generateAudioFake = v620;
var v5467 = GameBoyCore.prototype;
v5467.audioJIT = v621;
var v5468 = GameBoyCore.prototype;
v5468.audioComputeSequencer = v622;
var v5469 = GameBoyCore.prototype;
v5469.clockAudioLength = v623;
var v5470 = GameBoyCore.prototype;
v5470.clockAudioSweep = v624;
var v5471 = GameBoyCore.prototype;
v5471.runAudioSweep = v625;
var v5472 = GameBoyCore.prototype;
v5472.clockAudioEnvelope = v626;
var v5473 = GameBoyCore.prototype;
v5473.computeAudioChannels = v627;
var v5474 = GameBoyCore.prototype;
v5474.channel1EnableCheck = v628;
var v5475 = GameBoyCore.prototype;
v5475.channel1VolumeEnableCheck = v629;
var v5476 = GameBoyCore.prototype;
v5476.channel1OutputLevelCache = v630;
var v5477 = GameBoyCore.prototype;
v5477.channel1OutputLevelSecondaryCache = v631;
var v5478 = GameBoyCore.prototype;
v5478.channel1OutputLevelTrimaryCache = v632;
var v5479 = GameBoyCore.prototype;
v5479.channel2EnableCheck = v633;
var v5480 = GameBoyCore.prototype;
v5480.channel2VolumeEnableCheck = v634;
var v5481 = GameBoyCore.prototype;
v5481.channel2OutputLevelCache = v635;
var v5482 = GameBoyCore.prototype;
v5482.channel2OutputLevelSecondaryCache = v636;
var v5483 = GameBoyCore.prototype;
v5483.channel2OutputLevelTrimaryCache = v637;
var v5484 = GameBoyCore.prototype;
v5484.channel3EnableCheck = v638;
var v5485 = GameBoyCore.prototype;
v5485.channel3OutputLevelCache = v639;
var v5486 = GameBoyCore.prototype;
v5486.channel3OutputLevelSecondaryCache = v640;
var v5487 = GameBoyCore.prototype;
v5487.channel4EnableCheck = v641;
var v5488 = GameBoyCore.prototype;
v5488.channel4VolumeEnableCheck = v642;
var v5489 = GameBoyCore.prototype;
v5489.channel4OutputLevelCache = v643;
var v5490 = GameBoyCore.prototype;
v5490.channel4OutputLevelSecondaryCache = v644;
var v5491 = GameBoyCore.prototype;
v5491.mixerOutputLevelCache = v645;
var v5492 = GameBoyCore.prototype;
v5492.channel3UpdateCache = v646;
var v5493 = GameBoyCore.prototype;
v5493.channel3WriteRAM = v647;
var v5494 = GameBoyCore.prototype;
v5494.channel4UpdateCache = v648;
var v5495 = GameBoyCore.prototype;
v5495.run = v649;
var v5496 = GameBoyCore.prototype;
v5496.executeIteration = v650;
var v5497 = GameBoyCore.prototype;
v5497.iterationEndRoutine = v651;
var v5498 = GameBoyCore.prototype;
v5498.handleSTOP = v652;
var v5499 = GameBoyCore.prototype;
v5499.recalculateIterationClockLimit = v653;
var v5500 = GameBoyCore.prototype;
v5500.scanLineMode2 = v654;
var v5501 = GameBoyCore.prototype;
v5501.scanLineMode3 = v655;
var v5502 = GameBoyCore.prototype;
v5502.scanLineMode0 = v656;
var v5503 = GameBoyCore.prototype;
v5503.clocksUntilLYCMatch = v657;
var v5504 = GameBoyCore.prototype;
v5504.clocksUntilMode0 = v658;
var v5505 = GameBoyCore.prototype;
v5505.updateSpriteCount = v659;
var v5506 = GameBoyCore.prototype;
v5506.matchLYC = v660;
var v5507 = GameBoyCore.prototype;
v5507.updateCore = v661;
var v5508 = GameBoyCore.prototype;
v5508.updateCoreFull = v662;
var v5509 = GameBoyCore.prototype;
v5509.initializeLCDController = v667;
var v5510 = GameBoyCore.prototype;
v5510.DisplayShowOff = v668;
var v5511 = GameBoyCore.prototype;
v5511.executeHDMA = v669;
var v5512 = GameBoyCore.prototype;
v5512.clockUpdate = v670;
var v5513 = GameBoyCore.prototype;
v5513.prepareFrame = v671;
var v5514 = GameBoyCore.prototype;
v5514.requestDraw = v672;
var v5515 = GameBoyCore.prototype;
v5515.dispatchDraw = v673;
var v5516 = GameBoyCore.prototype;
v5516.swizzleFrameBuffer = v674;
var v5517 = GameBoyCore.prototype;
v5517.clearFrameBuffer = v675;
var v5518 = GameBoyCore.prototype;
v5518.resizeFrameBuffer = v676;
var v5519 = GameBoyCore.prototype;
v5519.compileResizeFrameBufferFunction = v677;
var v5520 = GameBoyCore.prototype;
v5520.renderScanLine = v678;
var v5521 = GameBoyCore.prototype;
v5521.renderMidScanLine = v679;
var v5522 = GameBoyCore.prototype;
v5522.initializeModeSpecificArrays = v680;
var v5523 = GameBoyCore.prototype;
v5523.GBCtoGBModeAdjust = v681;
var v5524 = GameBoyCore.prototype;
v5524.renderPathBuild = v682;
var v5525 = GameBoyCore.prototype;
v5525.priorityFlaggingPathRebuild = v683;
var v5526 = GameBoyCore.prototype;
v5526.initializeReferencesFromSaveState = v684;
var v5527 = GameBoyCore.prototype;
v5527.RGBTint = v685;
var v5528 = GameBoyCore.prototype;
v5528.getGBCColor = v686;
var v5529 = GameBoyCore.prototype;
v5529.updateGBRegularBGPalette = v687;
var v5530 = GameBoyCore.prototype;
v5530.updateGBColorizedBGPalette = v688;
var v5531 = GameBoyCore.prototype;
v5531.updateGBRegularOBJPalette = v689;
var v5532 = GameBoyCore.prototype;
v5532.updateGBColorizedOBJPalette = v690;
var v5533 = GameBoyCore.prototype;
v5533.updateGBCBGPalette = v691;
var v5534 = GameBoyCore.prototype;
v5534.updateGBCOBJPalette = v692;
var v5535 = GameBoyCore.prototype;
v5535.BGGBLayerRender = v693;
var v5536 = GameBoyCore.prototype;
v5536.BGGBCLayerRender = v694;
var v5537 = GameBoyCore.prototype;
v5537.BGGBCLayerRenderNoPriorityFlagging = v695;
var v5538 = GameBoyCore.prototype;
v5538.WindowGBLayerRender = v696;
var v5539 = GameBoyCore.prototype;
v5539.WindowGBCLayerRender = v697;
var v5540 = GameBoyCore.prototype;
v5540.WindowGBCLayerRenderNoPriorityFlagging = v698;
var v5541 = GameBoyCore.prototype;
v5541.SpriteGBLayerRender = v699;
var v5542 = GameBoyCore.prototype;
v5542.findLowestSpriteDrawable = v700;
var v5543 = GameBoyCore.prototype;
v5543.SpriteGBCLayerRender = v701;
var v5544 = GameBoyCore.prototype;
v5544.generateGBTileLine = v702;
var v5545 = GameBoyCore.prototype;
v5545.generateGBCTileLineBank1 = v703;
var v5546 = GameBoyCore.prototype;
v5546.generateGBCTileBank1 = v704;
var v5547 = GameBoyCore.prototype;
v5547.generateGBCTileLineBank2 = v705;
var v5548 = GameBoyCore.prototype;
v5548.generateGBCTileBank2 = v706;
var v5549 = GameBoyCore.prototype;
v5549.generateGBOAMTileLine = v707;
var v5550 = GameBoyCore.prototype;
v5550.graphicsJIT = v708;
var v5551 = GameBoyCore.prototype;
v5551.graphicsJITVBlank = v709;
var v5552 = GameBoyCore.prototype;
v5552.graphicsJITScanlineGroup = v710;
var v5553 = GameBoyCore.prototype;
v5553.incrementScanLineQueue = v711;
var v5554 = GameBoyCore.prototype;
v5554.midScanLineJIT = v712;
var v5555 = GameBoyCore.prototype;
v5555.launchIRQ = v713;
var v5556 = GameBoyCore.prototype;
v5556.checkIRQMatching = v714;
var v5557 = GameBoyCore.prototype;
v5557.calculateHALTPeriod = v715;
var v5558 = GameBoyCore.prototype;
v5558.memoryRead = v716;
var v5559 = GameBoyCore.prototype;
v5559.memoryHighRead = v717;
var v5560 = GameBoyCore.prototype;
v5560.memoryReadJumpCompile = v751;
var v5561 = GameBoyCore.prototype;
v5561.memoryReadNormal = v752;
var v5562 = GameBoyCore.prototype;
v5562.memoryHighReadNormal = v753;
var v5563 = GameBoyCore.prototype;
v5563.memoryReadROM = v754;
var v5564 = GameBoyCore.prototype;
v5564.memoryReadMBC = v755;
var v5565 = GameBoyCore.prototype;
v5565.memoryReadMBC7 = v756;
var v5566 = GameBoyCore.prototype;
v5566.memoryReadMBC3 = v757;
var v5567 = GameBoyCore.prototype;
v5567.memoryReadGBCMemory = v758;
var v5568 = GameBoyCore.prototype;
v5568.memoryReadOAM = v759;
var v5569 = GameBoyCore.prototype;
v5569.memoryReadECHOGBCMemory = v760;
var v5570 = GameBoyCore.prototype;
v5570.memoryReadECHONormal = v761;
var v5571 = GameBoyCore.prototype;
v5571.memoryReadBAD = v762;
var v5572 = GameBoyCore.prototype;
v5572.VRAMDATAReadCGBCPU = v763;
var v5573 = GameBoyCore.prototype;
v5573.VRAMDATAReadDMGCPU = v764;
var v5574 = GameBoyCore.prototype;
v5574.VRAMCHRReadCGBCPU = v765;
var v5575 = GameBoyCore.prototype;
v5575.VRAMCHRReadDMGCPU = v766;
var v5576 = GameBoyCore.prototype;
v5576.setCurrentMBC1ROMBank = v767;
var v5577 = GameBoyCore.prototype;
v5577.setCurrentMBC2AND3ROMBank = v768;
var v5578 = GameBoyCore.prototype;
v5578.setCurrentMBC5ROMBank = v769;
var v5579 = GameBoyCore.prototype;
v5579.memoryWrite = v770;
var v5580 = GameBoyCore.prototype;
v5580.memoryHighWrite = v771;
var v5581 = GameBoyCore.prototype;
v5581.memoryWriteJumpCompile = v772;
var v5582 = GameBoyCore.prototype;
v5582.MBCWriteEnable = v773;
var v5583 = GameBoyCore.prototype;
v5583.MBC1WriteROMBank = v774;
var v5584 = GameBoyCore.prototype;
v5584.MBC1WriteRAMBank = v775;
var v5585 = GameBoyCore.prototype;
v5585.MBC1WriteType = v776;
var v5586 = GameBoyCore.prototype;
v5586.MBC2WriteROMBank = v777;
var v5587 = GameBoyCore.prototype;
v5587.MBC3WriteROMBank = v778;
var v5588 = GameBoyCore.prototype;
v5588.MBC3WriteRAMBank = v779;
var v5589 = GameBoyCore.prototype;
v5589.MBC3WriteRTCLatch = v780;
var v5590 = GameBoyCore.prototype;
v5590.MBC5WriteROMBankLow = v781;
var v5591 = GameBoyCore.prototype;
v5591.MBC5WriteROMBankHigh = v782;
var v5592 = GameBoyCore.prototype;
v5592.MBC5WriteRAMBank = v783;
var v5593 = GameBoyCore.prototype;
v5593.RUMBLEWriteRAMBank = v784;
var v5594 = GameBoyCore.prototype;
v5594.HuC3WriteRAMBank = v785;
var v5595 = GameBoyCore.prototype;
v5595.cartIgnoreWrite = v786;
var v5596 = GameBoyCore.prototype;
v5596.memoryWriteNormal = v787;
var v5597 = GameBoyCore.prototype;
v5597.memoryHighWriteNormal = v788;
var v5598 = GameBoyCore.prototype;
v5598.memoryWriteMBCRAM = v789;
var v5599 = GameBoyCore.prototype;
v5599.memoryWriteMBC3RAM = v790;
var v5600 = GameBoyCore.prototype;
v5600.memoryWriteGBCRAM = v791;
var v5601 = GameBoyCore.prototype;
v5601.memoryWriteOAMRAM = v792;
var v5602 = GameBoyCore.prototype;
v5602.memoryWriteECHOGBCRAM = v793;
var v5603 = GameBoyCore.prototype;
v5603.memoryWriteECHONormal = v794;
var v5604 = GameBoyCore.prototype;
v5604.VRAMGBDATAWrite = v795;
var v5605 = GameBoyCore.prototype;
v5605.VRAMGBDATAUpperWrite = v796;
var v5606 = GameBoyCore.prototype;
v5606.VRAMGBCDATAWrite = v797;
var v5607 = GameBoyCore.prototype;
v5607.VRAMGBCHRMAPWrite = v798;
var v5608 = GameBoyCore.prototype;
v5608.VRAMGBCCHRMAPWrite = v799;
var v5609 = GameBoyCore.prototype;
v5609.DMAWrite = v800;
var v5610 = GameBoyCore.prototype;
v5610.registerWriteJumpCompile = v855;
var v5611 = GameBoyCore.prototype;
v5611.recompileModelSpecificIOWriteHandling = v881;
var v5612 = GameBoyCore.prototype;
v5612.recompileBootIOWriteHandling = v884;
var v5613 = GameBoyCore.prototype;
v5613.toTypedArray = v885;
var v5614 = GameBoyCore.prototype;
v5614.fromTypedArray = v886;
var v5615 = GameBoyCore.prototype;
v5615.getTypedArray = v887;
var v5616 = GameBoyCore.prototype;
v5616.checkForOperaMathBug = v888;
var gameboy = null;
var gbRunInterval = null;
var v5617 = [39, 37, 38, 40, 88, 90, 16, 13];
var settings = [true, false, false, v5617, true, false, 4, 15, 30, false, false, false, false, 16, 1];
var v11917 = "r+BPyZiEZwA+AeBPySAobeEq6gAgKlYj5WJv6SRmZjjhKuXqACDJ/////////////////////////////////xgHZwCYhGcA2fX6/3/1xdXlIRPKNgHN9f/h0cHx6gAg+hLKtyAC8cnwgLcoF/CC7hjgUT6Q4FOv4FLgVOCAPv/gVfHZ8IG3IALx2fBA7gjgQA8PD+YB7gHgT/CC4FHuEOCCPojgU6/gUuBU4IE+/uBV4ID6NMs86jTL8dkKCgoKbWFkZSBieSBhZ28uIGVtYWlsOmdvYnV6b3ZAeWFob28uY29tCnVybDogc3BlY2N5LmRhLnJ1CgoKCv///////wDDSgnO7WZmzA0ACwNzAIMADAANAAgRH4iJAA7czG7m3d3Zmbu7Z2NuDuzM3dyZn7u5Mz5BR08nUyBSRUFMVElNRSCAAAAAAgEDADMBSTQeIUD/y37I8P/1y4fg//BE/pEg+su+8eD/yT7A4EY+KD0g/cnF1eWvEQPK1RITEhMGAyEAyuXFTgYAIWAMCQkqEhMqEhPB4SMFIOrhrwYIzYsU4dHByf////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8AAgMFBggJCwwOEBETFBYXGBobHR4fISIjJSYnKSorLC0uLzAxMjM0NTY3ODg5Ojo7PDw9PT4+Pj8/Pz9AQEBAQEBAQEBAPz8/Pz4+PT08PDs7Ojk5ODc2NTU0MzIxMC8uLCsqKSgmJSQjISAfHRwaGRcWFRMSEA8NCwoIBwUEAgH//fz6+ff29PPx8O7t6+ro5+Xk4uHg3t3c2tnY19bU09LR0M/OzczLysnJyMfGxsXFxMPDw8LCwcHBwcDAwMDAwMDAwMDBwcHBwsLDw8PExcXGxsfIycnKy8zNzs/Q0dLT1NXX2Nna3N3e4OHi5OXn6Onr7O7v8fL09vf5+vz9AAEECRAZJDFAUWR5kKnE4QAhRGmQueQRQHGk2RBJhMEAQYTJEFmk8UCR5DmQ6UShAGHEKZD5ZNFAsSSZEIkEgQCBBIkQmSSxQNFk+ZApxGEAoUTpkDnkkUDxpFkQyYRBAMGESRDZpHFAEeS5kGlEIQDhxKmQeWRRQDEkGRAJBAEAAQQJEBkkMUBRZHmQqcThACFEaZC55BFAcaTZEEmEwQBBhMkQWaTxQJHkOZDpRKEAYcQpkPlk0UCxJJkQiQSBAIEEiRCZJLFA0WT5kCnEYQChROmQOeSRQPGkWRDJhEEAwYRJENmkcUAR5LmQaUQhAOHEqZB5ZFFAMSQZEAkEAQAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAgICAgIDAwMDBAQEBAUFBQUGBgYHBwcICAkJCQoKCgsLDAwNDQ4ODw8QEBEREhITExQUFRUWFxcYGRkaGhscHB0eHh8gISEiIyQkJSYnJygpKisrLC0uLzAxMTIzNDU2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1FSU1RVVldZWltcXV9gYWJkZWZnaWprbG5vcHJzdHZ3eXp7fX5/gYKEhYeIiouNjpCRk5SWl5manJ2foKKkpaepqqytr7GytLa3ubu9vsDCxMXHycvMztDS1NXX2dvd3+Hi5Obo6uzu8PL09vj6/P4A//z38Ofcz8CvnIdwVzwfAN+8l3BHHO/Aj1wn8Ld8PwC/fDfwp1wPwG8cx3AXvF8AnzzXcAecL8BP3Gfwd/x/AH/8d/Bn3E/AL5wHcNc8nwBfvBdwxxxvwA9cp/A3fL8AP3y38Cdcj8DvHEdwl7zfAB88V3CHnK/Az9zn8Pf8/wD//Pfw59zPwK+ch3BXPB8A37yXcEcc78CPXCfwt3w/AL98N/CnXA/AbxzHcBe8XwCfPNdwB5wvwE/cZ/B3/H8Af/x38GfcT8AvnAdw1zyfAF+8F3DHHG/AD1yn8Dd8vwA/fLfwJ1yPwO8cR3CXvN8AHzxXcIecr8DP3Ofw9/z/AP/////////////////////+/v7+/v79/f39/fz8/Pz8+/v7+vr6+vn5+fj4+Pf39/b29fX19PTz8/Ly8fHw8PDv7u7t7ezs6+vq6uno6Ofn5uXl5OPj4uHh4N/e3t3c3Nva2djY19bV1NTT0tHQz8/OzczLysnIx8bFxMPCwcDAvr28u7q5uLe2tbSzsrGwr62sq6qpqKalpKOioJ+enZyamZiWlZSTkZCPjYyLiYiHhYSCgYB+fXt6eHd1dHJxcG5sa2loZmVjYmBfXVtaWFdVU1JQTk1LSUhGREJBPz08Ojg2NDMxLy0rKigmJCIgHx0bGRcVExEPDQsJ" + 
"BwUDAf9/Px8PBwMBgEAgEAgEAgEAAQEBAQEBAQEBAQEA//////////////+AEAcAAQABAAEBAAEBAAEA/wD//wD//wD/AP+AKwcBAAEAAQD/AP8A/wD/AP8A/wABAAEAAQCARgcBAQEBAQD//////////////wABAQEBAQGAYQf///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+AwODw+Pz+/xEAwAGxwj4E9cU+BfUKbwMKZ37+gCALI34LAiN+AwILGOsahhIDHBwcHPE9IN7BIRAAGVRdPgX1Cm8DCmcalhIjfAILfQIDAx0dHR3xPSDnIRgAGVRd8T0grskRAcAB6cI+BPUKbwMKZ37+gCALI34LAiN+AwILGOs+CvUahhIcHBwc8T0g9CN8Agt9AgMD8T0g0MkgIEZJTExFRCAgIFBPTFlHT05TIEhFTElDT1BURVJJTiBBQ1RJT04gIQDADgpwLHQsGhPWICI2ACwNIPE+oOoQyngBCQDlYmsJVF3hDMYKR3AsdCwaG9YgIjYALA0g8a/qEcrJ+hDK/jDI1gTqEMpHPqCQ/lA4Aj5QDgAM1ggw+3ghAcARBAB3xggZDSD5+hHKg+oRykf+UDgCPlAOAAzWCDD7eC4td9YIGQ0g+ckh9grzMf/PzVABr+Am4P/gD+BD4EL2SOBFPkDgQT4E4AfN9RM+CuoAAA4HeeBwJqCvIstsKPsNIPIh/v8yy30g+wEKABH1/yFpAc3kE+cCAVYAEQDBIVt2zeQTrwYYIWsOzYsUIYsOzaQUxwGwAxEAgCGhF8XlzeQT4cERAIjN5BMhAJgRAwABYMDHcc9yIwUg+BQdIPHN9RMhuxUGAc2WE82JEz5E4EGv4EU+A+D/+z4B6hLK4E0QAAB4zccTBSD6zZATxwEACFkhAIhzIwt4sSD5IQDHPv9FdyRwJCJ3JXclcCwg8x5/IQCYx3PPNgDL1DYIx3PLlCPLVCjuPoABDxARIAAhIpjF5XfL1HfLlDwZDSD1POEswQUg7D486jPLr+o0yz3qL8s+oOCCPgLqG8vNiRM+ROBBr+BFPgPg/68+ACEXyyI+CiI+IHev6h7L4ITgluodyz4B6h/L6g/D6g3KBlARnAjNxAjNcwsBLAHFzTsLzQAJwQt4sSDzzZATxwEACFkhAIhzIwt4sSD5zfUTeQYQIYMOzYsUPv/qKcsGgBGwCM3ECM2JEwEsAcXNbAzNAAnBC3ixIPOv6hLKzZATPpDgU/PHAbADEQCIIaEXzeQTzfUTIQIWBgHNlhPNiRM+ROBBr+BFPgPg//sY/j4D6gAgzcRGBgMhF8t+gCJ+gDwifoB3zckP+jDLb/oxy2fNtgs+AeCB8IG3IPv6Dcq3KAPNcwHJ+h3LBgARTg2Hb2AZKmZvTgkq4ItfKjzgjD1PKuCNe4eHg0cRAMUqEhwFIPp5h4eBRxEAxCoSHAUg+n3qMMt86jHLyfCL4I7wjOCP8I3gkBEAw9XlzcoQ4dHwpeaAEhwBAwAJ8JA94JAg6CEAxQYPKk+gXxq3IB95yzegXxq3IBYqT6BfGrcgD3nLN6BfGrcgBiwsLBhHLOXNyhDwlrcoKwYB8KXGP0/LfygBBcXwpMY/Vx4AzZMOe8H18KPGP1ceAM2TDsHhJCJwGAzhJPCjxj8i8KTGPyIsJRbDBg/wjj3gjsLiCz4C6gAgw1JhfBjcHwAL7mpIYL9vBgMhF8t+gCJ+gDwifoB3zckPIcsNEQDGzf4MI+U+A+oAICEgy83+DPocy9YIb+ocy82vYAYDESDLIWIOxeXVzcoQ4fCjxhQi8KQiNg8jVF3hIyMjwQUg5M3ERsE+AeoAIAr+/ygiEQDGbyYAKRnlAwoDbyYAKRleI1bhKmZvxc0xHMwAQMEY2T4B4IHwgbcg+8l+PMjl1c3KEAYB8KVPy38oAQXF8KTLf/UoAi88Vx4AzZMO8XsgAi88xn/B9fCjy3/1KAIvPFceAM2TDvF7KAIvPMZ/wdESE3gSE+EjIyMYsFANAgAIDAYCRCgoFANEKAAUE0QAABQSRAAoFAJVKCjsA1UoAOwTVQAA7BJVACjsAAAEBQAAAAEFAAEBAwIGAQEDBwYCAgAHAwICAAcEAwMBAgYDAwEFBgQEAAECBAQAAwIFBQQFBgUFBAcGMgAAzgAAADIAAM4AAAAyAADOKAAAHhEAChEAAAAACu8AHu8AFAAKFAD2FAAPCgAF6AAC4gAQ3gAQ4gD+CgD74g4C3Q4C4QAC4vIC3fIC4AAM4PsM4PsQ4/sJ3fsJ/wABAQICAwMEBAUFAAAGAQYCBgMGBAYFBgAHAQcCBwMHBAcFBwYICQoKCwsMDA0NDgoPDxAQEQoSEhMTERQVFRYVFxUYCBkIGggb/yAAD/AbD/DlD/9//3+XEQAAAGD/f5cRAAAYAP9/lxEAAIB8lxH/f/9/QHz/f18IAADLI8sSeC9HeS9PAyEAAH2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEn2Pb3yPZwk4BWd9kW+3yxPLEssoyxkJ0BPJ+hfLJgJvfuCcLzzgnn3GQG9+4Jvgn6/gmOCZ4JrgneChPkDgl/oYy29OfcZAb0bFeOCgeeCizdMQ8KPgpvCk4KnwpeCsr+Cg4KI+QOChzdMQ8KPgp/Ck4KrwpeCtwXkvPOCgr+CheOCizdMQ8KPgmfCk4JzwpeCf8Kbgl/Cp4JrwrOCd8KfgmPCq4JvwreCe+hnLJgJvTn3GQG9GxXjgoHkvPOChr+CizdMQ8KPgpvCk4KnwpeCswXngoHjgoa/gos3TEPCj4KfwpOCq8KXgra/goOChPkDgos3TEPCj4JnwpOCc8KXgn/Cm4JfwqeCa8KzgnfCn4JjwquCb8K3gnskq4KAq4KEq4KLwl1/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8Jhf8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CZX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KPwml/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8Jtf8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CcX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KTwnV/woCYGV8t6ICDLe3soJy88X3qTMAIvPG96g1YlXiVvfiVuZxl8LzwYH3ovPFfLeyjhey88X5IwAi88b3qDViVeJW9+JW5nGXxH8J5f8KEmBlfLeiAgy3t7KCcvPF96kzACLzxveoNWJV4lb34lbmcZfC88GB96LzxXy3so4XsvPF+SMAIvPG96g1YlXiVvfiVuZxl8T/CfX/CiJgZXy3ogIMt7eygnLzxfepMwAi88b3qDViVeJW9+JW5nGXwvPBgfei88V8t7KOF7LzxfkjACLzxveoNWJV4lb34lbmcZfICB4KXJ9T6D4EDxyfWv4EDxyfXF1eXHKv7/KFD+FiAaTiMqh4eHVF1vJgApKXgGmAlHelRne11vGNzGYBLPeBIcGNN2ACETyjQ1KPc1yfvFBmR2AAUg+8HJ+3YABSD7yfXF1eUqEhMLeLEg+OHRwfHJxeUBAKAhAMDNAxThwcnF5XEjBSD74cHJxdXlAQCAIZXKzQMU4dHBycXV5a/qFcuwIAwaEyIaEzIEDXjqFcvlxRq+EyAPIxq+IAkTIw0gCMHhGBkrGyMjBSDmecFPBBoTIhoTIiEVyzThDSDS+hXL4dHBydVfzXIUuzD60cnF9cH6FMrLD6mAR/CLkR+AR/AFqOoUysHJ9cXltxcXF/aA4Ggq4GkFIPo+5OBH4cHxyfXF5bcXFxf2gOBqKuBrBSD6PuTgSOBJ4cHxyT4Q4ADwAC/LN+bwRz4g4ADwAC/mD7DqFsvJzyEAgK8GIE8+CCINIPwFIPnHIQCABiBPIg0g/AUg+cnFzQMVSs0eFcHJxc0RFUjNGRVLzSMVwcnFBgHNKxXBycUGABj2xQYDGPHFBgLNKxXByfXlh4eAJsBvceHxyfXlh4cmwG9GI04jXiNW4fHJ9cXV5eCDKjzK8BPWIF/wg835FF95xghPezwY6PXF1eXF1c13FdHBex4FIS3LGNUBKssR8NjNlRURGPzNlRURnP/NlRUR9v/NlRUR//8+LzwZOPwCA3ovV3sv";
var v11916 = v11917 + "XxMZyTAwRlBT/zAwUE5UU/8wMExJTkVT/xYFB1dFTENPTUUgVE8WBQgtUkVBTFRJTUUtFgAJREVNTyBNQURFIEVTUEVDSUFMTFkWAQpGT1IgTENQJzIwMDAgUEFSVFn/FgAAR1JFRVRJTlg6ICAgICAgICAgICAWAAFEU0MsUEFOLFNBQixGQVRBTElUWRYAAkpFRkYgRlJPSFdFSU4sSUNBUlVTFgADRE9YLFFVQU5HLEFCWVNTICAgICAWAAQgICAgICAgICAgICAgICAgICAgIBYABUNSRURJVFM6ICAgICAgICAgICAgFgAGQUxMIEdGWCZDT0RFIEJZIEFHTyAWAAdIRUxJQ09QVEVSIDNEIE1PREVMIBYACENSRUFURUQgQlkgQlVTWSAgICAgFgAJICAgICAgICAgICAgICAgICAgICAWAApVU0VEIFNPRlRXQVJFOiAgICAgIBYAC1JHQkRTLE5PJENBU0gsRkFSICAgFgAMICAgICAgICAgICAgICAgICAgICAWAA1DT05UQUNUOiAgICAgICAgICAgIBYADkdPQlVaT1ZAWUFIT08uQ09NICAgFgAPSFRUUDovL1NQRUNDWS5EQS5SVSAWABAgICAgICAgICAgICAgICAgICAgIBYAEVNFRSBZT1UgT04gR0JERVYyMDAw/wAAAAAAAAAAAAAAAAAAAAAICBwUHBQ4KDgoMDBwUCAgKCh8VHxUKCgAAAAAAAAAABQUPip/QT4qfFT+gnxUKCgICDw0fkL8rP6Cfmr8hHhYJCR+Wn5SPCR4SPyU/LRISBgYPCR+Wjwkflr8tH5KNDQQEDgocFAgIAAAAAAAAAAABAQOChwUOCg4KDgoHBQICBAQOCgcFBwUHBQ4KHBQICAAABQUPio8NH5CPCx8VCgoAAAICBwUPDR+QjwsOCgQEAAAAAAAAAAAEBA4KHBQcFAAAAAAAAB8fP6CfHwAAAAAAAAAAAAAAAAwMHhIeEgwMAQEDgoeEjwkeEjwkOCgQEAYGDwkflr+qv6q/LR4SDAwGBg8JHxUPDQ4KHxs/oJ8fBwcPiJ+Wjw0eEj8vP6CfHwcHD4iflo8NE5K/LR4SDAwJCR+Wn5afFT8tP6CfGwQEBwcPiJ8XPyEfnr8tHhIMDAYGDwkeFj8pP66/LR4SDAwPDx+Qv66XFQ4KHBQcFAgIBwcPiJ+Wjwkflr8tPiIcHAcHD4iflr+sn5KfHT4iHBwAAAAAAgIHBQICBAQOCgQEAAACAgcFAgIEBA4KDgocFAAAAAAHBQ4KHBQcFA4KAAAAAAAADw8fkJ8fPyEeHgAAAAAAAA4KBwUHBQ4KHBQAAAYGDwkflr8tHhoEBA4KBAQHBw+In5a/rL8pPi4+IhwcBwcPiJ+Wv66/oL+uvy0SEg4OHxEflr8pP6a/LT4iHBwHBw+In5a5qbgoP6y/IxwcDAweEh8VH5a7qr+uvyEeHgcHD4ifFx8RHhY/Lz+gnx8HBw+Inxc/IT4uOCg4KBAQBwcPiJ+Wvy8/qL+uvyEeHgkJH5a/rr+gv66/LT8tEhIPDx+QjwsOChwUHhY/IR4eDw8fkI+Og4KXFT8tHhIMDAkJH5afFR+Qv66/LT8tEhIICBwUHBQ4KDkpP66fEQ4OCgofFR+Qv6q/rr8tPy0SEgkJH5a/pr+qv6y7qr8tEhIHBw+In5a7qruqvy0+IhwcBwcPiJ+Wv66/IT4uOCgQEAcHD4iflr+uv6q/LT+inZ2HBw+In5a/LT4iPy0/LRISBwcPiJ8XP6Cfnr8tPiIcHB8fP6CfGw4KHBQcFBwUCAgJCR+Wn5a7qruqvy0eEgwMERE7qruqnxUfFR4SHBQICAkJH5aflr+uv6q/KR8VCgoJCR+WnxUOCg8JH5a/LRISCQkflr8tPy0eEhwUHBQICA8PH5C/LT46Dwsflr8hHh4HBw+IjwsOChwUHhYfEQ4OEBA4KDwkHhIPCQeEg4KBAQ4OHxEPDQcFDgoeGj4iHBwGBg8JH5a7qpERAAAAAAAAAAAAAAAAAAAAAB8fP6CfHx81rdPfJJne5X1MAIvPEevyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxnLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEeRcvT/F5MAIvPIVvJrcBAAA+t7zLEbrLED6/vcsRu8sQPj+8P8sRuj/LEL0/yxG7P8sQeLHIeKHAebcgB3xiV31rX3jLH9L/HD5AlU97lW96lPUwAi88R6/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGTABgB/LGcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYV5Fy9P8XkwAi88hGcuQMMxHMsf0pcdPkCUT3qUZ3uV9TACLzxHr8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZMAGAH8sZyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhMsRyxeUMAGEyxHLF5QwAYTLEcsXlDABhHkXL0/xeTACLzyFbyZAwzEcyx/SoRt91r9PfZNvepT1MAIvPEevyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxnLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFyxHLF5UwAYXLEcsXlTABhcsRyxeVMAGFeRcvT/F5MAIvPIRnLr/DMRz/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v11915 = v11916 + "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v11914 = v11915 + "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3q8MAVUZ3tdb3u90pdAfZNPepRfkTA+V3nLPy88g+CDPn+R5YdPbyYARCkpKQkBkVIJweV41kAXb3nWQB8fH+YPZ/CChGd55gcGB/YITwpP8INHLMl5S1+RV3nLPy88g+CDPneR5YdPbyYARCkpKQkBklsJweV41kAXb3nWQB8fH+YPZ/CChGd55gcGB/YITwpP8INHLMmVT3qUX5EwPld5yz8vPIPggz5/keWHT28mAEQpKSkJAR9BCcHleNZAF2951kAfHx/mD2fwgoRneeYHBgf2CE8KT/CDRyzJeUtfkVd5yz8vPIPggz53keWHT28mAEQpKSkJASBKCcHleNZAF2951kAfHx/mD2fwgoRneeYHBgf2CE8KT/CDRyzJfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6";
var v11913 = v11914 + "LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkfrF3e8t4IAN6LCyAR8sJMAEkyX6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEk";
var v11912 = v11913 + "gEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALH6xInvLeCAGessJMAEkgEcALMl+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASV+sXd7y3ggA3osLIBHywEwASXJfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARyws";
var v11911 = v11912 + "frF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsfrF3e8t4IAZ6ywEwASWARywsyf//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v11910 = v11911 + "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v11909 = v11910 + "/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wHRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLR";
var v11908 = v11909 + "e7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6Zf";
var v11907 = v11908 + "eqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyLRe7o4A1pXewYHoE8K9XqgTwQK4JF6Hx8f5g9X8JNnTixGLXsfHx/mD1/wgoNne5LRxADB8JGiVy+mX3qhsyJ6L6ZfeqCzItF7ujgDWld7BgegTwr1eqBPBArgkXofHx/mD1fwk2dOLEYtex8fH+YPX/CCg2d7ktHEAMHwkaJXL6ZfeqGzInovpl96oLMi0Xu6OANaV3sGB6BPCvV6oE8ECuCReh8fH+YPV/CTZ04sRi17Hx8f5g9f8IKDZ3uS0cQAwfCRolcvpl96obMiei+mX3qgsyIxDsrh+eEWwxgNIf3Er+oLyuoMyiwsLPCPPcjgj14sGrcqKPDGeeCT+g3Ktygm+gvKPP4DIAI+AeoLyiAH+gzKPOoMyvoMyl8WyvCT1nkSe8bH4JMqTypHKuUmxl+Hh4M8PG8qX1Z5h4eBPDxveE4sh4eARjw8bypmb3y6OAViV31rX3y4OAVgR31pT3q4OAVQR3tZT3iU4JR8h+CV5dXFr+CSzUpifeCS0eHVzUpi0eE+AeCSzUpi8JRfPniTZy5Hr8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdMAGEH8sdxkBnCA7KMQDC5fCVb8l7vTBVfZNPepRfkTAkV3nLPy88Rz5/kU3Fh09vJgBEKSkJAfdiCcHlJsLwkm94BoDJeUtfkVd5yz8vPEc+d5FNxYdPbyYARCkpCQH4ZwnB5SbC8JJveAaAyZVPepRfkTAkV3nLPy88Rz5/kU3Fh09vJgBEKSkJAalsCcHlJsLwkm94BoDJeUtfkVd5yz8vPEc+d5FNxYdPbyYARCkpCQGqcQnB5SbC8JJveAaAyYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNg7gwBZOCcSwsDYO4MAWTgnEsLA2DuDAFk4JxLCwNyXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOT";
var v11906 = v11907 + "gg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDXEsLIO4MAOTgg1xLCyDuDADk4INcSwsg7gwA5OCDcmDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDIO4MAWTgnEsLAyDuDAFk4JxLCwMg7gwBZOCcSwsDMlxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggxxLCyDuDADk4IMcSwsg7gwA5OCDHEsLIO4MAOTggzJxg+Hh+oawXovpl96obMiei+mX3qgszIkeRgAInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQicC0kInAtJCJwLSQW/8n/////////////////////////";
var v11905 = v11906 + "//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+qqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQAhMwwzwAASABIzwDMMACEAITMMM8AAEgASM8AzDAAhACEzDDPAABIAEjPAMwwAIQj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINkI/Bh+Mv1k+8DvgedAsyDZCPwYfjL9ZPvA74HnQLMg2Qj8GH4y/WT7wO+B50CzINnMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzzMzMzDMzMzPMzMzMMzMzM8zMzMwzMzMzwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDMDAwMAMDAwMwMDAwAwMDAzAwMDADAwMDPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBDx8QEBAQEBAR8fEBAQEBAQ8fEBAQEBAQEfHxAQEBAQEPHxAQEBAQEBHx8QEBAQEBCqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlVVqqpVVaqqVVWqqlUC4XIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJInAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSJwCSJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAkicAkicAkicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7InAJInAJInAJLCwly2XIJGjJycnJyeEicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAlyLHAJeyJwCSJwCSwsJctlyCRoycnJycnhInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJInAJcixwCXsicAksLCXLZcgkaMnJycnJ4SJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCSJwCXIscAl7LCwly2XIJGjJycnJydE+t5LI4IXmB8RSRPCFHx8focjlzTJE4XkicCwicCwicCwicCwicCwicCwicCwicCzJ+ABUXWhHeZAfyx1nATNZCfCCMQCv/qAoAzEAvwH/AOlHPgeQVF1HDjOvyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxkwAYAfyxlHIbRXCeViaz7/AQ8Ayfoay2/6G8uFZ/4UIAU+/y0YBtbsIAU8LOoby3zqGsvNr2AhlEbNyhDwpMagV/Cjxn9f1SGXRs3KEPCkxqBn8KPGf2/RzTEcKAsf2hhZH9oYWcPERny6OAViV31rX+XNmkbh1Xu90sxFe9ZA4Ih9k0884Il6lF/ghjzgij2RMGvgh3nLPy88g+CF8IIBDwBvVHzWQBfLN6GFZ3rmBxdvGAjwij3KAETgivCJX/CGV/CFGASCHSgLy38g+Ffwh4LghR3NYkUY2nvgifCIg1/l";
var v11904 = v11905 + "5gf2CG8mB1Z7aB8fHx/LHR/LHeYDxkBnrx7/6XnghpPgh3vLPy88geCF8IIBDwBvVHzWQBfLN6GFZ3rmBxdv8Ilf8IZX8IXLfyAHV/CHgh0YAYLghc1iRfCKPcoAROCKGN171kDgiHuVTzzgiXqUX+CGPOCKPZEwa+CHecs/LzyD4IXwggEPAG9UfNZAF8s3oYVneuYHF28YCPCKPcoAROCK8Ilf8IZX8IUYBIIdKAvLfyD4V/CHguCFHc0qRhjae+CJ8IiTX+XmB/YQbyYHVntoHx8fH8sdH8sd5gPGQGc+/1jpeeCGk+CHe8s/LzyB4IXwggEPAG9UfNZAF8s3oYVneuYHF2/wiV/whlfwhct/IAdX8IeCHRgBguCFzSpG8Io9ygBE4IoY3UYAALoAAHzWQMhPHx8f5h9HeeYHKAsE/gUwBvUhylblBT4PkCHJRoRn5fCCZ69vyfCCZ69vIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIi";
var v11903 = v11904 + "IiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIsnxAQ8APcqEVz0odj0oOj0idwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwksLCXLZSgCJGgidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkidwkid8kicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAksLCUicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAkicAloyfgAVF3wgjEAr/6gKAMxAL8B/wDFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcXFxcVia/nJJgJ+4JovPOCYfcZAb37gl+Cbr+CZ4JzgneCePkDgn8n/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v11902 = v11903 + "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////";
var v11901 = v11902 + "////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////Aw==";
var gameboy_rom = v11901;
var completed = 0;
var benchmarks = JAMScript.call(BenchmarkSuite.CountBenchmarks, BenchmarkSuite, []);
var success = true;
var latencyBenchmarks = ["Splay", "Mandreel"];
var v5618;
var v10463 = typeof skipBenchmarks;
var v8692 = v10463 === "undefined";
if(v8692) {
  v5618 = []
}else {
  v5618 = skipBenchmarks
}
var skipBenchmarks = v5618;

