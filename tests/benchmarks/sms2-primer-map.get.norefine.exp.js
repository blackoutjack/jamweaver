function v13() {
  var v1102 = document.forms;
  var v914 = v1102[0];
  var v540 = v914.elements;
  var v14 = v540[0];
  v14.value = " ";
  var v1103 = document.forms;
  var v915 = v1103[1];
  var v541 = v915.elements;
  var v15 = v541[0];
  v15.value = " ";
  return
}
function v12() {
  try {
    primerMap(document)
  }catch(e$$5) {
    var v16 = "The following error was encountered: " + e$$5;
    alert(v16)
  }
  return
}
function v11() {
  var v542 = document.main_form;
  var v17 = v542.main_submit;
  v17.focus();
  return
}
function v10(start$$10, stop$$6) {
  function v9(str$$11, p1$$5, offset$$17, s$$7) {
    return p1$$5.replace(/./g, " ")
  }
  function v8(str$$10, p1$$4, offset$$16, s$$6) {
    return p1$$4.replace(/./g, " ")
  }
  var v18 = outputWindow.document;
  var v543 = this.positionLabel;
  var v19 = rightNum(v543, "", 8, "");
  JAMScript.call(v18.write, v18, [v19]);
  var v544 = this.characters;
  var v20 = v544.slice(start$$10, stop$$6);
  var text$$15 = v20.join("");
  text$$15 = text$$15.replace(/^(\d+)/g, v8);
  text$$15 = text$$15.replace(/(\d+)$/g, v9);
  var v21 = outputWindow.document;
  var v22 = text$$15 + "\n";
  JAMScript.call(v21.write, v21, [v22]);
  var v23 = this.positionLabel;
  var v24 = stop$$6 - start$$10;
  this.positionLabel = v23 + v24;
  return
}
function v7(start$$9, stop$$5) {
  var v25 = outputWindow.document;
  var v545 = this.positionLabel;
  var v26 = rightNum(v545, "", 8, "");
  JAMScript.call(v25.write, v25, [v26]);
  var v27 = outputWindow.document;
  var v1104 = this.characters;
  var v916 = v1104.slice(start$$9, stop$$5);
  var v546 = v916.join("");
  var v28 = v546 + "\n";
  JAMScript.call(v27.write, v27, [v28]);
  var v29 = this.positionLabel;
  var v30 = stop$$5 - start$$9;
  this.positionLabel = v29 + v30;
  return
}
function v6(start$$8, stop$$4) {
  var v917 = this.characters;
  var v547 = v917.slice(start$$8, stop$$4);
  var v31 = v547.join("");
  var textToWrite = v31 + "\n";
  var v548 = textToWrite.search(/\w/);
  var v37 = v548 != -1;
  if(v37) {
    var v32 = outputWindow.document;
    var v549 = this.positionLabel;
    var v33 = rightNum(v549, "", 8, "");
    JAMScript.call(v32.write, v32, [v33]);
    var v34 = this.positionLabel;
    var v550 = textToWrite.match(/[A-Z]/g);
    var v35 = v550.length;
    this.positionLabel = v34 + v35;
    var v36 = outputWindow.document;
    JAMScript.call(v36.write, v36, [textToWrite])
  }
  return
}
function v5(start$$7, stop$$3) {
  var v38 = outputWindow.document;
  var v551 = this.positionLabel;
  var v39 = rightNum(v551, "", 8, "");
  JAMScript.call(v38.write, v38, [v39]);
  var v40 = outputWindow.document;
  var v1105 = this.characters;
  var v918 = v1105.slice(start$$7, stop$$3);
  var v552 = v918.join("");
  var v41 = v552 + "\n";
  JAMScript.call(v40.write, v40, [v41]);
  var v42 = this.positionLabel;
  var v553 = stop$$3 - start$$7;
  var v43 = v553 / 3;
  this.positionLabel = v42 + v43;
  return
}
function addReturns(sequence) {
  function v0(str$$6, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = sequence.replace(/(.{60})/g, v0);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v44 = arrayOfSequences[0];
  var lengthOfAlign = v44.length;
  var v554 = arrayOfSequences.length;
  var v45 = v554 < 2;
  if(v45) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v555 = arrayOfTitles.length;
  var v47 = i$$1 < v555;
  for(;v47;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1106 = arrayOfTitles[i$$1]
    }
    var v919 = v1106.search(/\S/);
    var v556 = v919 == -1;
    var v921 = !v556;
    if(v921) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1237 = arrayOfSequences[i$$1]
      }
      var v1107 = v1237.search(/\S/);
      var v920 = v1107 == -1;
      var v1109 = !v920;
      if(v1109) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1238 = arrayOfSequences[i$$1]
        }
        var v1108 = v1238.length;
        v920 = v1108 != lengthOfAlign
      }
      v556 = v920
    }
    var v46 = v556;
    if(v46) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v557 = arrayOfTitles.length;
    v47 = i$$1 < v557
  }
  return true
}
function checkCodonTable(codonTable) {
  var v922 = codonTable.search(/AmAcid/);
  var v558 = v922 == -1;
  var v924 = !v558;
  if(v924) {
    var v1110 = codonTable.search(/Codon/);
    var v923 = v1110 == -1;
    var v1112 = !v923;
    if(v1112) {
      var v1239 = codonTable.search(/Number/);
      var v1111 = v1239 == -1;
      var v1241 = !v1111;
      if(v1241) {
        var v1329 = codonTable.search(/\/1000/);
        var v1240 = v1329 == -1;
        var v1331 = !v1240;
        if(v1331) {
          var v1330 = codonTable.search(/Fraction\s*\.\./);
          v1240 = v1330 == -1
        }
        v1111 = v1240
      }
      v923 = v1111
    }
    v558 = v923
  }
  var v48 = v558;
  if(v48) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v925 = formElement.value;
  var v559 = v925.search(/\S/);
  var v49 = v559 == -1;
  if(v49) {
    alert("Please enter some text.");
    return false
  }
  return true
}
function checkGeneticCode(arrayOfPatterns) {
  var z$$2 = 0;
  var codon = "";
  var oneMatch = false;
  var testSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var v560 = arrayOfPatterns.length;
  var v52 = z$$2 < v560;
  for(;v52;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v926 = arrayOfPatterns[z$$2]
    }
    var v561 = v926.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v50 = v561 == -1;
    if(v50) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v927 = arrayOfPatterns[z$$2]
    }
    var v562 = moreExpressionCheck(v927);
    var v51 = v562 == false;
    if(v51) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v563 = arrayOfPatterns.length;
    v52 = z$$2 < v563
  }
  var v53 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v53);
  var v54 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v54);
  var j = 0;
  var v564 = arrayOfPatterns.length;
  var v61 = j < v564;
  for(;v61;) {
    var v55 = geneticCodeMatchExp;
    var v56 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1113 = arrayOfPatterns[j]
    }
    var v928 = v1113.match(/\/.+\//);
    var v565 = v928 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1861 = eval("introspect(JAMScript.introspectors.processAll) { " + v565 + " }")
    }else {
      var v1861 = JAMScript.call(eval, null, [v565])
    }
    v55[v56] = v1861;
    var v57 = geneticCodeMatchResult;
    var v58 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v929 = arrayOfPatterns[j]
    }
    var v566 = v929.match(/=[a-zA-Z\*]/);
    var v1862 = v566.toString();
    v57[v58] = v1862;
    var v59 = geneticCodeMatchResult;
    var v60 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v567 = geneticCodeMatchResult[j]
    }
    var v1863 = v567.replace(/=/g, "");
    v59[v60] = v1863;
    j = j + 1;
    var v568 = arrayOfPatterns.length;
    v61 = j < v568
  }
  var i$$2 = 0;
  var v930 = testSequence.length;
  var v569 = v930 - 3;
  var v68 = i$$2 <= v569;
  for(;v68;) {
    var v62 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v62);
    j = 0;
    var v570 = geneticCodeMatchExp.length;
    var v66 = j < v570;
    for(;v66;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v931 = geneticCodeMatchExp[j]
      }
      var v571 = codon.search(v931);
      var v65 = v571 != -1;
      if(v65) {
        var v64 = oneMatch == true;
        if(v64) {
          var v572 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v63 = v572 + ".";
          alert(v63);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v573 = geneticCodeMatchExp.length;
      v66 = j < v573
    }
    var v67 = oneMatch == false;
    if(v67) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v932 = testSequence.length;
    var v574 = v932 - 3;
    v68 = i$$2 <= v574
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v575 = arrayOfPatterns$$1.length;
  var v70 = z$$3 < v575;
  for(;v70;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v933 = arrayOfPatterns$$1[z$$3]
    }
    var v576 = v933.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v69 = v576 != -1;
    if(v69) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v577 = arrayOfPatterns$$1.length;
    v70 = z$$3 < v577
  }
  var i$$3 = 0;
  var v578 = arrayOfPatterns$$1.length;
  var v74 = i$$3 < v578;
  for(;v74;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v934 = arrayOfPatterns$$1[i$$3]
    }
    var v579 = "[" + v934;
    var v71 = v579 + "]";
    var re = new RegExp(v71, "gi");
    var j$$1 = i$$3 + 1;
    var v580 = arrayOfPatterns$$1.length;
    var v73 = j$$1 < v580;
    for(;v73;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v935 = arrayOfPatterns$$1[j$$1]
      }
      var v581 = v935.search(re);
      var v72 = v581 != -1;
      if(v72) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v582 = arrayOfPatterns$$1.length;
      v73 = j$$1 < v582
    }
    i$$3 = i$$3 + 1;
    var v583 = arrayOfPatterns$$1.length;
    v74 = i$$3 < v583
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v584 = arrayOfPatterns$$2.length;
  var v77 = z$$4 < v584;
  for(;v77;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v936 = arrayOfPatterns$$2[z$$4]
    }
    var v585 = v936.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v75 = v585 == -1;
    if(v75) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v937 = arrayOfPatterns$$2[z$$4]
    }
    var v586 = moreExpressionCheck(v937);
    var v76 = v586 == false;
    if(v76) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v587 = arrayOfPatterns$$2.length;
    v77 = z$$4 < v587
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v1114 = getSequenceFromFasta(text$$7);
  var v938 = v1114.replace(/[^A-Za-z]/g, "");
  var v588 = v938.length;
  var v79 = v588 > maxInput;
  if(v79) {
    var v589 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v78 = v589 + " characters.";
    alert(v78);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v590 = text$$8.length;
  var v81 = v590 > maxInput$$1;
  if(v81) {
    var v591 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v80 = v591 + " characters.";
    alert(v80);
    return false
  }else {
    return true
  }
  return
}
function complement(dnaSequence) {
  dnaSequence = dnaSequence.replace(/g/g, "1");
  dnaSequence = dnaSequence.replace(/c/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "c");
  dnaSequence = dnaSequence.replace(/2/g, "g");
  dnaSequence = dnaSequence.replace(/G/g, "1");
  dnaSequence = dnaSequence.replace(/C/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "C");
  dnaSequence = dnaSequence.replace(/2/g, "G");
  dnaSequence = dnaSequence.replace(/a/g, "1");
  dnaSequence = dnaSequence.replace(/t/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "t");
  dnaSequence = dnaSequence.replace(/2/g, "a");
  dnaSequence = dnaSequence.replace(/A/g, "1");
  dnaSequence = dnaSequence.replace(/T/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "T");
  dnaSequence = dnaSequence.replace(/2/g, "A");
  dnaSequence = dnaSequence.replace(/u/g, "a");
  dnaSequence = dnaSequence.replace(/U/g, "A");
  dnaSequence = dnaSequence.replace(/r/g, "1");
  dnaSequence = dnaSequence.replace(/y/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "y");
  dnaSequence = dnaSequence.replace(/2/g, "r");
  dnaSequence = dnaSequence.replace(/R/g, "1");
  dnaSequence = dnaSequence.replace(/Y/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "Y");
  dnaSequence = dnaSequence.replace(/2/g, "R");
  dnaSequence = dnaSequence.replace(/k/g, "1");
  dnaSequence = dnaSequence.replace(/m/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "m");
  dnaSequence = dnaSequence.replace(/2/g, "k");
  dnaSequence = dnaSequence.replace(/K/g, "1");
  dnaSequence = dnaSequence.replace(/M/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "M");
  dnaSequence = dnaSequence.replace(/2/g, "K");
  dnaSequence = dnaSequence.replace(/b/g, "1");
  dnaSequence = dnaSequence.replace(/v/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "v");
  dnaSequence = dnaSequence.replace(/2/g, "b");
  dnaSequence = dnaSequence.replace(/B/g, "1");
  dnaSequence = dnaSequence.replace(/V/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "V");
  dnaSequence = dnaSequence.replace(/2/g, "B");
  dnaSequence = dnaSequence.replace(/d/g, "1");
  dnaSequence = dnaSequence.replace(/h/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "h");
  dnaSequence = dnaSequence.replace(/2/g, "d");
  dnaSequence = dnaSequence.replace(/D/g, "1");
  dnaSequence = dnaSequence.replace(/H/g, "2");
  dnaSequence = dnaSequence.replace(/1/g, "H");
  dnaSequence = dnaSequence.replace(/2/g, "D");
  return dnaSequence
}
function closeForm() {
  var v82 = outputWindow.document;
  JAMScript.call(v82.write, v82, ["</form>"]);
  return true
}
function closePre() {
  var v83 = outputWindow.document;
  JAMScript.call(v83.write, v83, ["</div>"]);
  var v84 = outputWindow.document;
  JAMScript.call(v84.write, v84, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v85 = outputWindow.document;
  JAMScript.call(v85.write, v85, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v86 = outputWindow.document;
  JAMScript.call(v86.write, v86, ["</body>\n</html>\n"]);
  outputWindow.status = "Done.";
  var v87 = outputWindow.document;
  v87.close();
  return true
}
function convertDegenerates(sequence$$1) {
  sequence$$1 = sequence$$1.toLowerCase();
  sequence$$1 = sequence$$1.replace(/t/g, "[TU]");
  sequence$$1 = sequence$$1.replace(/r/g, "[AGR]");
  sequence$$1 = sequence$$1.replace(/y/g, "[CTUY]");
  sequence$$1 = sequence$$1.replace(/s/g, "[GCS]");
  sequence$$1 = sequence$$1.replace(/w/g, "[ATUW]");
  sequence$$1 = sequence$$1.replace(/k/g, "[GTUK]");
  sequence$$1 = sequence$$1.replace(/m/g, "[ACM]");
  sequence$$1 = sequence$$1.replace(/b/g, "[CGTUBSKY]");
  sequence$$1 = sequence$$1.replace(/d/g, "[AGTUDRKW]");
  sequence$$1 = sequence$$1.replace(/h/g, "[ACTUHMYW]");
  sequence$$1 = sequence$$1.replace(/v/g, "[ACGVSMR]");
  sequence$$1 = sequence$$1.replace(/n/g, "[ACGTURYSWKMBDHVN]");
  return sequence$$1
}
function earlyCheckAlign(alignArray) {
  var v592 = alignArray.length;
  var v88 = v592 < 3;
  if(v88) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v593 = alignArray.length;
  var v90 = i$$4 < v593;
  for(;v90;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v939 = alignArray[i$$4]
    }
    var v594 = v939.search(/[^\s]+\s/);
    var v89 = v594 == -1;
    if(v89) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v595 = alignArray.length;
    v90 = i$$4 < v595
  }
  return true
}
function filterAlignSeq(alignSeq) {
  alignSeq = alignSeq.replace(/[^abcdefghiklmnpqrstvwxyz\.\-]/gi, "");
  return alignSeq
}
function filterFastaTitle(sequenceTitle) {
  sequenceTitle = sequenceTitle.replace(/\s{2,}/g, " ");
  sequenceTitle = sequenceTitle.replace(/^\s*/g, "");
  sequenceTitle = sequenceTitle.replace(/[\f\n\r\t]+$/g, "\n");
  return sequenceTitle.replace(/[\<\>]\n/gi, "")
}
function getArrayOfFasta(sequenceData) {
  var arrayOfFasta = new Array;
  var matchArray;
  var re$$1 = /\>[^\>]+/g;
  var v596 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v93 = v596 != -1;
  if(v93) {
    var v92 = matchArray = re$$1.exec(sequenceData);
    for(;v92;) {
      var v91 = matchArray[0];
      arrayOfFasta.push(v91);
      v92 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v597 = sequence$$2.length;
  var v94 = "&gt;results for " + v597;
  var stringToReturn = v94 + " residue sequence ";
  var v598 = fastaSequenceTitle.search(/[^\s]/);
  var v96 = v598 != -1;
  if(v96) {
    var v599 = stringToReturn + '"';
    var v95 = v599 + fastaSequenceTitle;
    stringToReturn = v95 + '"'
  }
  var v600 = stringToReturn + ' starting "';
  var v601 = sequence$$2.substring(0, 10);
  var v97 = v600 + v601;
  stringToReturn = v97 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v602 = sequenceOne.length;
  var v98 = "Search results for " + v602;
  var stringToReturn$$1 = v98 + " residue sequence ";
  var v603 = fastaSequenceTitleOne.search(/[^\s]/);
  var v100 = v603 != -1;
  if(v100) {
    var v604 = stringToReturn$$1 + '"';
    var v99 = v604 + fastaSequenceTitleOne;
    stringToReturn$$1 = v99 + '"'
  }
  var v605 = stringToReturn$$1 + ' starting "';
  var v606 = sequenceOne.substring(0, 10);
  var v101 = v605 + v606;
  stringToReturn$$1 = v101 + '"\n';
  var v607 = stringToReturn$$1 + "and ";
  var v608 = sequenceTwo.length;
  var v102 = v607 + v608;
  stringToReturn$$1 = v102 + " residue sequence ";
  var v609 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v104 = v609 != -1;
  if(v104) {
    var v610 = stringToReturn$$1 + '"';
    var v103 = v610 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v103 + '"'
  }
  var v611 = stringToReturn$$1 + ' starting "';
  var v612 = sequenceTwo.substring(0, 10);
  var v105 = v611 + v612;
  stringToReturn$$1 = v105 + '"';
  var v106 = '<div class="info">' + stringToReturn$$1;
  return v106 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v107 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v107);
  var j$$2 = 0;
  var v613 = arrayOfPatterns$$3.length;
  var v110 = j$$2 < v613;
  for(;v110;) {
    var v108 = geneticCodeMatchExp$$1;
    var v109 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1115 = arrayOfPatterns$$3[j$$2]
    }
    var v940 = v1115.match(/\/.+\//);
    var v614 = v940 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1864 = eval("introspect(JAMScript.introspectors.processAll) { " + v614 + " }")
    }else {
      var v1864 = JAMScript.call(eval, null, [v614])
    }
    v108[v109] = v1864;
    j$$2 = j$$2 + 1;
    var v615 = arrayOfPatterns$$3.length;
    v110 = j$$2 < v615
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v111 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v111);
  var j$$3 = 0;
  var v616 = arrayOfPatterns$$4.length;
  var v116 = j$$3 < v616;
  for(;v116;) {
    var v112 = geneticCodeMatchResult$$1;
    var v113 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v941 = arrayOfPatterns$$4[j$$3]
    }
    var v617 = v941.match(/=[a-zA-Z\*]/);
    var v1865 = v617.toString();
    v112[v113] = v1865;
    var v114 = geneticCodeMatchResult$$1;
    var v115 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v618 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1866 = v618.replace(/=/g, "");
    v114[v115] = v1866;
    j$$3 = j$$3 + 1;
    var v619 = arrayOfPatterns$$4.length;
    v116 = j$$3 < v619
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v620 = sequence$$3.length;
  var v117 = "Results for " + v620;
  var stringToReturn$$2 = v117 + " residue sequence ";
  var v621 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v119 = v621 != -1;
  if(v119) {
    var v622 = stringToReturn$$2 + '"';
    var v118 = v622 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v118 + '"'
  }
  var v623 = stringToReturn$$2 + ' starting "';
  var v624 = sequence$$3.substring(0, 10);
  var v120 = v623 + v624;
  stringToReturn$$2 = v120 + '"';
  var v121 = '<div class="info">' + stringToReturn$$2;
  return v121 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v942 = "Results for " + topology;
  var v625 = v942 + " ";
  var v626 = sequence$$4.length;
  var v122 = v625 + v626;
  var stringToReturn$$3 = v122 + " residue sequence ";
  var v627 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v124 = v627 != -1;
  if(v124) {
    var v628 = stringToReturn$$3 + '"';
    var v123 = v628 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v123 + '"'
  }
  var v629 = stringToReturn$$3 + ' starting "';
  var v630 = sequence$$4.substring(0, 10);
  var v125 = v629 + v630;
  stringToReturn$$3 = v125 + '"';
  var v126 = '<div class="info">' + stringToReturn$$3;
  return v126 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v631 = sequenceOne$$1.length;
  var v127 = "Alignment results for " + v631;
  var stringToReturn$$4 = v127 + " residue sequence ";
  var v632 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v129 = v632 != -1;
  if(v129) {
    var v633 = stringToReturn$$4 + '"';
    var v128 = v633 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v128 + '"'
  }
  var v634 = stringToReturn$$4 + ' starting "';
  var v635 = sequenceOne$$1.substring(0, 10);
  var v130 = v634 + v635;
  stringToReturn$$4 = v130 + '"\n';
  var v636 = stringToReturn$$4 + "and ";
  var v637 = sequenceTwo$$1.length;
  var v131 = v636 + v637;
  stringToReturn$$4 = v131 + " residue sequence ";
  var v638 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v133 = v638 != -1;
  if(v133) {
    var v639 = stringToReturn$$4 + '"';
    var v132 = v639 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v132 + '"'
  }
  var v640 = stringToReturn$$4 + ' starting "';
  var v641 = sequenceTwo$$1.substring(0, 10);
  var v134 = v640 + v641;
  stringToReturn$$4 = v134 + '"';
  var v135 = '<div class="info">' + stringToReturn$$4;
  return v135 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v137 = j$$4 < lengthOut;
  for(;v137;) {
    var v642 = Math.random();
    var v643 = components.length;
    var v136 = v642 * v643;
    tempNum = Math.floor(v136);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v137 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v644 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v138 = v644 != -1;
  if(v138) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v645 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v140 = v645 != -1;
  if(v140) {
    var v139 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v139.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v943 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v646 = v943 != -1;
  var v945 = !v646;
  if(v945) {
    var v1116 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v944 = v1116 != -1;
    var v1118 = !v944;
    if(v1118) {
      var v1242 = expressionToCheck.search(/\[\]/);
      var v1117 = v1242 != -1;
      var v1244 = !v1117;
      if(v1244) {
        var v1332 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v1243 = v1332 != -1;
        var v1334 = !v1243;
        if(v1334) {
          var v1396 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1333 = v1396 != -1;
          var v1398 = !v1333;
          if(v1398) {
            var v1459 = expressionToCheck.search(/\|\|/);
            var v1397 = v1459 != -1;
            var v1461 = !v1397;
            if(v1461) {
              var v1506 = expressionToCheck.search(/\/\|/);
              var v1460 = v1506 != -1;
              var v1508 = !v1460;
              if(v1508) {
                var v1539 = expressionToCheck.search(/\|\//);
                var v1507 = v1539 != -1;
                var v1541 = !v1507;
                if(v1541) {
                  var v1570 = expressionToCheck.search(/\[.\]/);
                  var v1540 = v1570 != -1;
                  var v1572 = !v1540;
                  if(v1572) {
                    var v1597 = expressionToCheck.search(/\</);
                    var v1571 = v1597 != -1;
                    var v1599 = !v1571;
                    if(v1599) {
                      var v1598 = expressionToCheck.search(/\>/);
                      v1571 = v1598 != -1
                    }
                    v1540 = v1571
                  }
                  v1507 = v1540
                }
                v1460 = v1507
              }
              v1397 = v1460
            }
            v1333 = v1397
          }
          v1243 = v1333
        }
        v1117 = v1243
      }
      v944 = v1117
    }
    v646 = v944
  }
  var v141 = v646;
  if(v141) {
    return false
  }
  return true
}
function openForm() {
  var v142 = outputWindow.document;
  JAMScript.call(v142.write, v142, ['<form action="">\n']);
  return true
}
function openPre() {
  var v143 = outputWindow.document;
  JAMScript.call(v143.write, v143, ["<pre>"]);
  var v144 = outputWindow.document;
  JAMScript.call(v144.write, v144, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v145 = outputWindow.document;
  JAMScript.call(v145.write, v145, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1881 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1881[2], v1881[1], v1881[0]);
  outputWindow.focus();
  var v146 = outputWindow.document;
  var v1119 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v946 = v1119 + "<head>\n";
  var v647 = v946 + "<title>Sequence Manipulation Suite</title>\n";
  var v147 = v647 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v146.write, v146, [v147]);
  if(isColor) {
    var v148 = outputWindow.document;
    var v1672 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1648 = v1672 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1624 = v1648 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1600 = v1624 + "div.info {font-weight: bold}\n";
    var v1573 = v1600 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1542 = v1573 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1509 = v1542 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1462 = v1509 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1399 = v1462 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1335 = v1399 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1245 = v1335 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1120 = v1245 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v947 = v1120 + "td.many {color: #000000}\n";
    var v648 = v947 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v149 = v648 + "</style>\n";
    JAMScript.call(v148.write, v148, [v149])
  }else {
    var v150 = outputWindow.document;
    var v1694 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1673 = v1694 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1649 = v1673 + "div.title {display: none}\n";
    var v1625 = v1649 + "div.info {font-weight: bold}\n";
    var v1601 = v1625 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1574 = v1601 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1543 = v1574 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1510 = v1543 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1463 = v1510 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1400 = v1463 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1336 = v1400 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1246 = v1336 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1121 = v1246 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v948 = v1121 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v649 = v948 + "img {display: none}\n";
    var v151 = v649 + "</style>\n";
    JAMScript.call(v150.write, v150, [v151])
  }
  var v152 = outputWindow.document;
  var v1122 = "</head>\n" + '<body class="main">\n';
  var v949 = v1122 + '<div class="title">';
  var v650 = v949 + title$$6;
  var v153 = v650 + " results</div>\n";
  JAMScript.call(v152.write, v152, [v153]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1882 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1882[2], v1882[1], v1882[0]);
  outputWindow.focus();
  var v154 = outputWindow.document;
  var v1123 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v950 = v1123 + "<head>\n";
  var v651 = v950 + "<title>Sequence Manipulation Suite</title>\n";
  var v155 = v651 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v154.write, v154, [v155]);
  if(isBackground) {
    var v156 = outputWindow.document;
    var v1674 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1650 = v1674 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1626 = v1650 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1602 = v1626 + "div.info {font-weight: bold}\n";
    var v1575 = v1602 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1544 = v1575 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1511 = v1544 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1464 = v1511 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1401 = v1464 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1337 = v1401 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1247 = v1337 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1124 = v1247 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v951 = v1124 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v652 = v951 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v157 = v652 + "</style>\n";
    JAMScript.call(v156.write, v156, [v157])
  }else {
    var v158 = outputWindow.document;
    var v1714 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1695 = v1714 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1675 = v1695 + "div.title {display: none}\n";
    var v1651 = v1675 + "div.info {font-weight: bold}\n";
    var v1627 = v1651 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1603 = v1627 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1576 = v1603 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1545 = v1576 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1512 = v1545 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1465 = v1512 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1402 = v1465 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1338 = v1402 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1248 = v1338 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1125 = v1248 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v952 = v1125 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v653 = v952 + "img {display: none}\n";
    var v159 = v653 + "</style>\n";
    JAMScript.call(v158.write, v158, [v159])
  }
  var v160 = outputWindow.document;
  var v1126 = "</head>\n" + '<body class="main">\n';
  var v953 = v1126 + '<div class="title">';
  var v654 = v953 + title$$8;
  var v161 = v654 + " results</div>\n";
  JAMScript.call(v160.write, v160, [v161]);
  outputWindow.status = "Please Wait.";
  return true
}
function removeFormatting(sequence$$5) {
  return sequence$$5.replace(/[\d\s]/g, "")
}
function removeNonDna(sequence$$6) {
  return sequence$$6.replace(/[^gatucryswkmbdhvnxGATUCRYSWKMBDHVNX]/g, "")
}
function removeNonDnaStrict(sequence$$7) {
  return sequence$$7.replace(/[^gatucGATUC]/g, "")
}
function removeNonProtein(sequence$$8) {
  return sequence$$8.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "")
}
function removeNonProteinStrict(sequence$$9) {
  return sequence$$9.replace(/[^ACDEFGHIKLMNPQRSTVWYZacdefghiklmnpqrstvwyz\*]/g, "")
}
function removeNonProteinAllowDegen(sequence$$10) {
  return sequence$$10.replace(/[^ABCDEFGHIKLMNPQRSTVWYXZabcdefghiklmnpqrstvwyxz\*]/g, "")
}
function removeNonProteinAllowX(sequence$$11) {
  return sequence$$11.replace(/[^ACDEFGHIKLMNPQRSTVWYZXacdefghiklmnpqrstvwyzx\*]/g, "")
}
function removeWhiteSpace(text$$9) {
  return text$$9.replace(/\s/g, "")
}
function removeNonLetters(sequence$$12) {
  return sequence$$12.replace(/[^A-Z]/gi, "")
}
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v655 = dnaSequence$$1.search(/./);
  var v162 = v655 != -1;
  if(v162) {
    tempDnaArray = dnaSequence$$1.match(/./g);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$1 = tempDnaArray.join("")
  }
  return dnaSequence$$1
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v163 = j$$5 < lengthOfColumn;
  for(;v163;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v163 = j$$5 < lengthOfColumn
  }
  var v164 = tempString + theNumber;
  theNumber = v164 + " ";
  var v165 = sequenceToAppend + theNumber;
  sequenceToAppend = v165 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v656 = testArray[0];
  var v166 = v656 != testString;
  if(v166) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v657 = testString.search(re$$2);
  var v167 = v657 == -1;
  if(v167) {
    alert("Regular expression 'm' flag not supported. See browser compatibility page.");
    return false
  }
  var caughtException = false;
  try {
    if(JAMScript.isEval(eval)) {
      re$$2 = eval("introspect(JAMScript.introspectors.processAll) { " + "Exception handling not supported. Check browser compatibility page." + " }")
    }else {
      re$$2 = JAMScript.call(eval, null, ["Exception handling not supported. Check browser compatibility page."])
    }
  }catch(e$$4) {
    caughtException = true
  }
  var v168 = !caughtException;
  if(v168) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v169 = testString != "1X2X3X";
  if(v169) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v658 = testNum.toFixed(3);
  var v170 = v658 != 2489.824;
  if(v170) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v659 = testNum.toPrecision(5);
  var v171 = v659 != 2489.8;
  if(v171) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v660 = theNumber$$1.search(/\d/);
  var v172 = v660 == -1;
  if(v172) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v954 = emblFile.search(/ID/);
  var v661 = v954 == -1;
  var v956 = !v661;
  if(v956) {
    var v1127 = emblFile.search(/AC/);
    var v955 = v1127 == -1;
    var v1129 = !v955;
    if(v1129) {
      var v1249 = emblFile.search(/DE/);
      var v1128 = v1249 == -1;
      var v1251 = !v1128;
      if(v1251) {
        var v1250 = emblFile.search(/SQ/);
        v1128 = v1250 == -1
      }
      v955 = v1128
    }
    v661 = v955
  }
  var v173 = v661;
  if(v173) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v662 = theNumber$$2.search(/\d/);
  var v174 = v662 == -1;
  if(v174) {
    alert("Please enter a number.");
    return false
  }
  var v176 = theNumber$$2 > maxInput$$2;
  if(v176) {
    var v663 = "Please enter a number less than or equal to " + maxInput$$2;
    var v175 = v663 + ".";
    alert(v175);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v664 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v177 = v664 != -1;
  if(v177) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v665 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v178 = v665 != -1;
  if(v178) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v957 = genBankFile.search(/LOCUS/);
  var v666 = v957 == -1;
  var v959 = !v666;
  if(v959) {
    var v1130 = genBankFile.search(/DEFINITION/);
    var v958 = v1130 == -1;
    var v1132 = !v958;
    if(v1132) {
      var v1252 = genBankFile.search(/ACCESSION/);
      var v1131 = v1252 == -1;
      var v1254 = !v1131;
      if(v1254) {
        var v1253 = genBankFile.search(/ORIGIN/);
        v1131 = v1253 == -1
      }
      v958 = v1131
    }
    v666 = v958
  }
  var v179 = v666;
  if(v179) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v960 = genBankFile$$1.search(/LOCUS/);
  var v667 = v960 == -1;
  var v962 = !v667;
  if(v962) {
    var v1133 = genBankFile$$1.search(/DEFINITION/);
    var v961 = v1133 == -1;
    var v1135 = !v961;
    if(v1135) {
      var v1255 = genBankFile$$1.search(/ACCESSION/);
      var v1134 = v1255 == -1;
      var v1257 = !v1134;
      if(v1257) {
        var v1256 = genBankFile$$1.search(/ORIGIN/);
        v1134 = v1256 == -1
      }
      v961 = v1134
    }
    v667 = v961
  }
  var v180 = v667;
  if(v180) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v668 = genBankFile$$1.search(/FEATURES {13}/);
  var v181 = v668 == -1;
  if(v181) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v963 = emblFile$$1.search(/ID/);
  var v669 = v963 == -1;
  var v965 = !v669;
  if(v965) {
    var v1136 = emblFile$$1.search(/AC/);
    var v964 = v1136 == -1;
    var v1138 = !v964;
    if(v1138) {
      var v1258 = emblFile$$1.search(/DE/);
      var v1137 = v1258 == -1;
      var v1260 = !v1137;
      if(v1260) {
        var v1259 = emblFile$$1.search(/SQ/);
        v1137 = v1259 == -1
      }
      v964 = v1137
    }
    v669 = v964
  }
  var v182 = v669;
  if(v182) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v670 = emblFile$$1.search(/^FT/m);
  var v183 = v670 == -1;
  if(v183) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function writeGroupNum(text$$10, tabIn$$1, groupSize, basePerLine, startBase, stopBase) {
  var i$$5 = parseInt(startBase);
  var k = 0;
  var lineOfText = "";
  var sepChar = " ";
  groupSize = parseInt(groupSize);
  basePerLine = parseInt(basePerLine);
  var v191 = i$$5 < stopBase;
  for(;v191;) {
    var v184 = i$$5 + 1;
    lineOfText = rightNum(v184, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v671 = basePerLine / groupSize;
    var v188 = j$$6 <= v671;
    for(;v188;) {
      var v187 = k < groupSize;
      for(;v187;) {
        var v185 = lineOfText;
        var v672 = k + i$$5;
        var v186 = text$$10.charAt(v672);
        lineOfText = v185 + v186;
        k = k + 1;
        v187 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v673 = basePerLine / groupSize;
      v188 = j$$6 <= v673
    }
    var v189 = outputWindow.document;
    var v190 = lineOfText + "\n";
    JAMScript.call(v189.write, v189, [v190]);
    lineOfText = "";
    v191 = i$$5 < stopBase
  }
  return true
}
function writeGroupNumDna(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition) {
  writeGroupNumDnaSetStart(text$$11, tabIn$$2, groupSize$$1, basePerLine$$1, startBase$$1, stopBase$$1, strands, numberPosition, 0);
  return true
}
function writeGroupNumDnaSetStart(text$$12, tabIn$$3, groupSize$$2, basePerLine$$2, startBase$$2, stopBase$$2, strands$$1, numberPosition$$1, numberingAdjustment) {
  function adjustNumbering(original, adjustment) {
    var adjusted = original + adjustment;
    var v674 = adjustment < 0;
    if(v674) {
      v674 = adjusted >= 0
    }
    var v192 = v674;
    if(v192) {
      adjusted = adjusted + 1
    }
    return adjusted
  }
  var i$$6 = parseInt(startBase$$2);
  var k$$1 = 0;
  var lineOfText$$1 = "";
  var lineNum = "";
  var sepChar$$1 = " ";
  var aboveNum = "";
  groupSize$$2 = parseInt(groupSize$$2);
  basePerLine$$2 = parseInt(basePerLine$$2);
  numberingAdjustment = parseInt(numberingAdjustment);
  var v225 = i$$6 < stopBase$$2;
  for(;v225;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v675 = basePerLine$$2 / groupSize$$2;
    var v201 = j$$7 <= v675;
    for(;v201;) {
      var v196 = k$$1 < groupSize$$2;
      for(;v196;) {
        var v676 = i$$6 + k$$1;
        var v193 = v676 >= stopBase$$2;
        if(v193) {
          break
        }
        var v194 = lineOfText$$1;
        var v677 = k$$1 + i$$6;
        var v195 = text$$12.charAt(v677);
        lineOfText$$1 = v194 + v195;
        k$$1 = k$$1 + 1;
        v196 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v199 = numberPosition$$1 == "above";
      if(v199) {
        var v197 = aboveNum;
        var v678 = adjustNumbering(i$$6, numberingAdjustment);
        var v198 = rightNum(v678, "", groupSize$$2, tabIn$$3);
        aboveNum = v197 + v198
      }
      var v200 = i$$6 >= stopBase$$2;
      if(v200) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v679 = basePerLine$$2 / groupSize$$2;
      v201 = j$$7 <= v679
    }
    var v224 = numberPosition$$1 == "left";
    if(v224) {
      var v202 = outputWindow.document;
      var v1139 = adjustNumbering(lineNum, numberingAdjustment);
      var v966 = rightNum(v1139, "", 8, tabIn$$3);
      var v680 = v966 + lineOfText$$1;
      var v203 = v680 + "\n";
      JAMScript.call(v202.write, v202, [v203]);
      var v207 = strands$$1 == "two";
      if(v207) {
        var v204 = outputWindow.document;
        var v1140 = adjustNumbering(lineNum, numberingAdjustment);
        var v967 = rightNum(v1140, "", 8, tabIn$$3);
        var v968 = complement(lineOfText$$1);
        var v681 = v967 + v968;
        var v205 = v681 + "\n";
        JAMScript.call(v204.write, v204, [v205]);
        var v206 = outputWindow.document;
        JAMScript.call(v206.write, v206, ["\n"])
      }
    }else {
      var v223 = numberPosition$$1 == "right";
      if(v223) {
        var v208 = outputWindow.document;
        var v969 = lineOfText$$1;
        var v970 = adjustNumbering(i$$6, numberingAdjustment);
        var v682 = v969 + v970;
        var v209 = v682 + "\n";
        JAMScript.call(v208.write, v208, [v209]);
        var v213 = strands$$1 == "two";
        if(v213) {
          var v210 = outputWindow.document;
          var v971 = complement(lineOfText$$1);
          var v972 = adjustNumbering(i$$6, numberingAdjustment);
          var v683 = v971 + v972;
          var v211 = v683 + "\n";
          JAMScript.call(v210.write, v210, [v211]);
          var v212 = outputWindow.document;
          JAMScript.call(v212.write, v212, ["\n"])
        }
      }else {
        var v222 = numberPosition$$1 == "above";
        if(v222) {
          var v214 = outputWindow.document;
          var v215 = aboveNum + "\n";
          JAMScript.call(v214.write, v214, [v215]);
          var v216 = outputWindow.document;
          var v217 = lineOfText$$1 + "\n";
          JAMScript.call(v216.write, v216, [v217]);
          var v221 = strands$$1 == "two";
          if(v221) {
            var v218 = outputWindow.document;
            var v684 = complement(lineOfText$$1);
            var v219 = v684 + "\n";
            JAMScript.call(v218.write, v218, [v219]);
            var v220 = outputWindow.document;
            JAMScript.call(v220.write, v220, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v225 = i$$6 < stopBase$$2
  }
  return true
}
function writeGroupNumProtein(text$$13, tabIn$$4, groupSize$$3, basePerLine$$3, startBase$$3, stopBase$$3, numberPosition$$2) {
  var i$$7 = parseInt(startBase$$3);
  var k$$2 = 0;
  var lineOfText$$2 = "";
  var lineNum$$1 = "";
  var sepChar$$2 = " ";
  var aboveNum$$1 = "";
  groupSize$$3 = parseInt(groupSize$$3);
  basePerLine$$3 = parseInt(basePerLine$$3);
  var v246 = i$$7 < stopBase$$3;
  for(;v246;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v685 = basePerLine$$3 / groupSize$$3;
    var v234 = j$$8 <= v685;
    for(;v234;) {
      var v229 = k$$2 < groupSize$$3;
      for(;v229;) {
        var v686 = i$$7 + k$$2;
        var v226 = v686 >= stopBase$$3;
        if(v226) {
          break
        }
        var v227 = lineOfText$$2;
        var v687 = k$$2 + i$$7;
        var v228 = text$$13.charAt(v687);
        lineOfText$$2 = v227 + v228;
        k$$2 = k$$2 + 1;
        v229 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v232 = numberPosition$$2 == "above";
      if(v232) {
        var v230 = aboveNum$$1;
        var v231 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v230 + v231
      }
      var v233 = i$$7 >= stopBase$$3;
      if(v233) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v688 = basePerLine$$3 / groupSize$$3;
      v234 = j$$8 <= v688
    }
    var v245 = numberPosition$$2 == "left";
    if(v245) {
      var v235 = outputWindow.document;
      var v973 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v689 = v973 + lineOfText$$2;
      var v236 = v689 + "\n";
      JAMScript.call(v235.write, v235, [v236])
    }else {
      var v244 = numberPosition$$2 == "right";
      if(v244) {
        var v237 = outputWindow.document;
        var v690 = lineOfText$$2 + i$$7;
        var v238 = v690 + "\n";
        JAMScript.call(v237.write, v237, [v238])
      }else {
        var v243 = numberPosition$$2 == "above";
        if(v243) {
          var v239 = outputWindow.document;
          var v240 = aboveNum$$1 + "\n";
          JAMScript.call(v239.write, v239, [v240]);
          var v241 = outputWindow.document;
          var v242 = lineOfText$$2 + "\n";
          JAMScript.call(v241.write, v241, [v242])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v246 = i$$7 < stopBase$$3
  }
  return true
}
function writeMutatedSequence(sequence$$13, components$$1, numMut, firstIndexToMutate, lastIndexToMutate) {
  var currentChar = "";
  var randNum = 0;
  var maxNum = 0;
  var needNewChar = "";
  var componentsIndex = 0;
  numMut = parseInt(numMut);
  firstIndexToMutate = parseInt(firstIndexToMutate);
  lastIndexToMutate = parseInt(lastIndexToMutate);
  var v974 = sequence$$13.length;
  var v691 = v974 <= firstIndexToMutate;
  var v976 = !v691;
  if(v976) {
    var v975 = lastIndexToMutate < 0;
    var v1141 = !v975;
    if(v1141) {
      v975 = lastIndexToMutate <= firstIndexToMutate
    }
    v691 = v975
  }
  var v247 = v691;
  if(v247) {
    numMut = 0
  }
  var i$$8 = 0;
  var v255 = i$$8 < numMut;
  for(;v255;) {
    maxNum = sequence$$13.length;
    var v692 = Math.random();
    var v248 = v692 * maxNum;
    randNum = Math.floor(v248);
    var v693 = randNum < firstIndexToMutate;
    var v977 = !v693;
    if(v977) {
      v693 = randNum > lastIndexToMutate
    }
    var v249 = v693;
    if(v249) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v255 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v694 = Math.random();
      var v695 = components$$1.length;
      var v250 = v694 * v695;
      componentsIndex = Math.round(v250);
      var v696 = components$$1.length;
      var v251 = componentsIndex == v696;
      if(v251) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v697 = components$$1[componentsIndex]
      }
      var v252 = v697 != currentChar;
      if(v252) {
        needNewChar = false
      }
    }
    var v698 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v699 = components$$1[componentsIndex]
    }
    var v253 = v698 + v699;
    var v700 = randNum + 1;
    var v701 = sequence$$13.length;
    var v254 = sequence$$13.substring(v700, v701);
    sequence$$13 = v253 + v254;
    i$$8 = i$$8 + 1;
    v255 = i$$8 < numMut
  }
  var v256 = outputWindow.document;
  var v257 = addReturns(sequence$$13);
  JAMScript.call(v256.write, v256, [v257]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v262 = j$$9 < lengthOut$$1;
  for(;v262;) {
    var v702 = Math.random();
    var v703 = components$$2.length;
    var v258 = v702 * v703;
    tempNum$$1 = Math.floor(v258);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v704 = sequence$$14.length;
    var v261 = v704 == 60;
    if(v261) {
      var v259 = outputWindow.document;
      var v260 = sequence$$14 + "\n";
      JAMScript.call(v259.write, v259, [v260]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v262 = j$$9 < lengthOut$$1
  }
  var v263 = outputWindow.document;
  var v264 = sequence$$14 + "\n";
  JAMScript.call(v263.write, v263, [v264]);
  return true
}
function writeRestrictionSites(sequence$$15, arrayOfItems, dnaConformation) {
  var resultArray = new Array;
  var lookAhead = 50;
  var lowerLimit = 0;
  var upperLimit = sequence$$15.length;
  var shiftValue = 0;
  var cutDistance;
  var matchExp;
  var matchPosition;
  var tempString$$1;
  var backGroundClass;
  var matchArray$$1;
  var timesFound = 0;
  var v268 = dnaConformation == "circular";
  if(v268) {
    var v265 = sequence$$15.substring(0, lookAhead);
    shiftValue = v265.length;
    var v1142 = sequence$$15.length;
    var v978 = v1142 - lookAhead;
    var v979 = sequence$$15.length;
    var v705 = sequence$$15.substring(v978, v979);
    var v266 = v705 + sequence$$15;
    var v267 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v266 + v267;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v269 = outputWindow.document;
  JAMScript.call(v269.write, v269, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v270 = outputWindow.document;
  var v1143 = '<tr><td class="title" width="200px">' + "Site:";
  var v980 = v1143 + '</td><td class="title">';
  var v706 = v980 + "Positions:";
  var v271 = v706 + "</td></tr>\n";
  JAMScript.call(v270.write, v270, [v271]);
  var i$$9 = 0;
  var v707 = arrayOfItems.length;
  var v287 = i$$9 < v707;
  for(;v287;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v708 = arrayOfItems[i$$9]
    }
    var v272 = v708.match(/\/.+\//);
    matchExp = v272 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1144 = arrayOfItems[i$$9]
    }
    var v981 = v1144.match(/\)\D*\d+/);
    var v709 = v981.toString();
    var v273 = v709.replace(/\)\D*/, "");
    cutDistance = parseFloat(v273);
    var v279 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v279;) {
      var v274 = matchExp.lastIndex;
      matchPosition = v274 - cutDistance;
      var v710 = matchPosition >= lowerLimit;
      if(v710) {
        v710 = matchPosition < upperLimit
      }
      var v277 = v710;
      if(v277) {
        timesFound = timesFound + 1;
        var v275 = tempString$$1 + ", ";
        var v711 = matchPosition - shiftValue;
        var v276 = v711 + 1;
        tempString$$1 = v275 + v276
      }
      var v712 = matchExp.lastIndex;
      var v982 = RegExp.lastMatch;
      var v713 = v982.length;
      var v278 = v712 - v713;
      matchExp.lastIndex = v278 + 1;
      v279 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v714 = tempString$$1.search(/\d/);
    var v280 = v714 != -1;
    if(v280) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v284 = timesFound == 0;
    if(v284) {
      backGroundClass = "none"
    }else {
      var v283 = timesFound == 1;
      if(v283) {
        backGroundClass = "one"
      }else {
        var v282 = timesFound == 2;
        if(v282) {
          backGroundClass = "two"
        }else {
          var v281 = timesFound == 3;
          if(v281) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v285 = outputWindow.document;
    var v1466 = '<tr><td class="' + backGroundClass;
    var v1403 = v1466 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1546 = arrayOfItems[i$$9]
    }
    var v1513 = v1546.match(/\([^\(]+\)/);
    var v1467 = v1513.toString();
    var v1404 = v1467.replace(/\(|\)/g, "");
    var v1339 = v1403 + v1404;
    var v1261 = v1339 + '</td><td class="';
    var v1145 = v1261 + backGroundClass;
    var v983 = v1145 + '">';
    var v715 = v983 + tempString$$1;
    var v286 = v715 + "</td></tr>\n";
    JAMScript.call(v285.write, v285, [v286]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v716 = arrayOfItems.length;
    v287 = i$$9 < v716
  }
  var v288 = outputWindow.document;
  JAMScript.call(v288.write, v288, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v289 = outputWindow.document;
  JAMScript.call(v289.write, v289, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v290 = outputWindow.document;
  var v1340 = '<tr><td class="title">' + "Pattern:";
  var v1262 = v1340 + '</td><td class="title">';
  var v1146 = v1262 + "Times found:";
  var v984 = v1146 + '</td><td class="title">';
  var v717 = v984 + "Percentage:";
  var v291 = v717 + "</td></tr>\n";
  JAMScript.call(v290.write, v290, [v291]);
  var i$$10 = 0;
  var v718 = arrayOfItems$$1.length;
  var v300 = i$$10 < v718;
  for(;v300;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v719 = arrayOfItems$$1[i$$10]
    }
    var v292 = v719.match(/\/[^\/]+\//);
    var matchExp$$1 = v292 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v720 = sequence$$16.search(matchExp$$1);
    var v294 = v720 != -1;
    if(v294) {
      var v293 = sequence$$16.match(matchExp$$1);
      tempNumber = v293.length
    }
    var percentage = 0;
    var v985 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1263 = arrayOfItems$$1[i$$10]
    }
    var v1147 = v1263.match(/\d+/);
    var v986 = parseFloat(v1147);
    var v721 = v985 - v986;
    var v297 = v721 > 0;
    if(v297) {
      var v295 = 100 * tempNumber;
      var v722 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1148 = arrayOfItems$$1[i$$10]
      }
      var v987 = v1148.match(/\d+/);
      var v723 = parseFloat(v987);
      var v296 = v722 - v723;
      percentage = v295 / v296
    }
    var v298 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1547 = arrayOfItems$$1[i$$10]
    }
    var v1514 = v1547.match(/\([^\(]+\)\b/);
    var v1468 = v1514.toString();
    var v1405 = v1468.replace(/\(|\)/g, "");
    var v1341 = "<tr><td>" + v1405;
    var v1264 = v1341 + "</td><td>";
    var v1149 = v1264 + tempNumber;
    var v988 = v1149 + "</td><td>";
    var v989 = percentage.toFixed(2);
    var v724 = v988 + v989;
    var v299 = v724 + "</td></tr>\n";
    JAMScript.call(v298.write, v298, [v299]);
    i$$10 = i$$10 + 1;
    var v725 = arrayOfItems$$1.length;
    v300 = i$$10 < v725
  }
  var v301 = outputWindow.document;
  JAMScript.call(v301.write, v301, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v726 = sequence$$17.length;
  var v308 = v726 > 0;
  for(;v308;) {
    maxNum$$1 = sequence$$17.length;
    var v727 = Math.random();
    var v302 = v727 * maxNum$$1;
    randNum$$1 = Math.floor(v302);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v303 = randNum$$1 + 1;
    var v304 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v303, v304);
    sequence$$17 = tempString1 + tempString2;
    var v728 = tempSeq.length;
    var v307 = v728 == 60;
    if(v307) {
      var v305 = outputWindow.document;
      var v306 = tempSeq + "\n";
      JAMScript.call(v305.write, v305, [v306]);
      tempSeq = ""
    }
    var v729 = sequence$$17.length;
    v308 = v729 > 0
  }
  var v309 = outputWindow.document;
  var v310 = tempSeq + "\n";
  JAMScript.call(v309.write, v309, [v310]);
  return true
}
function getRestrictionSiteString(type$$25) {
  var v730 = type$$25.toLowerCase();
  var v312 = v730 == "standard";
  if(v312) {
    var v1860 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v1859 = v1860 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v1858 = v1859 + "/cgcg/ (AccII cg|cg)2,";
    var v1857 = v1858 + "/tccgga/ (AccIII t|ccgga)5,";
    var v1856 = v1857 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v1855 = v1856 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v1854 = v1855 + "/gtac/ (AfaI gt|ac)2,";
    var v1853 = v1854 + "/agcgct/ (AfeI agc|gct)3,";
    var v1852 = v1853 + "/cttaag/ (AflII c|ttaag)5,";
    var v1851 = v1852 + "/accggt/ (AgeI a|ccggt)5,";
    var v1850 = v1851 + "/actagt/ (AhlI a|ctagt)5,";
    var v1849 = v1850 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v1848 = v1849 + "/agct/ (AluI ag|ct)2,";
    var v1847 = v1848 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v1846 = v1847 + "/gggccc/ (ApaI gggcc|c)1,";
    var v1845 = v1846 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v1844 = v1845 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v1843 = v1844 + "/attaat/ (AseI at|taat)4,";
    var v1842 = v1843 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v1841 = v1842 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v1840 = v1841 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v1839 = v1840 + "/tgcgca/ (AviII tgc|gca)3,";
    var v1838 = v1839 + "/cctagg/ (AvrII c|ctagg)5,";
    var v1837 = v1838 + "/tggcca/ (BalI tgg|cca)3,";
    var v1836 = v1837 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v1835 = v1836 + "/atcgat/ (BanIII at|cgat)4,";
    var v1834 = v1835 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v1833 = v1834 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v1832 = v1833 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v1831 = v1832 + "/actagt/ (BcuI a|ctagt)5,";
    var v1830 = v1831 + "/tgatca/ (BclI t|gatca)5,";
    var v1829 = v1830 + "/ctag/ (BfaI c|tag)3,";
    var v1828 = v1829 + "/cttaag/ (BfrI c|ttaag)5,";
    var v1827 = v1828 + "/atgcat/ (BfrBI atg|cat)3,";
    var v1826 = v1827 + "/agatct/ (BglII a|gatct)5,";
    var v1825 = v1826 + "/cctagg/ (BlnI c|ctagg)5,";
    var v1824 = v1825 + "/atcgat/ (BseCI at|cgat)4,";
    var v1823 = v1824 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v1822 = v1823 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v1821 = v1822 + "/accggt/ (BshTI a|ccggt)5,";
    var v1820 = v1821 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v1819 = v1820 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v1818 = v1819 + "/atcgat/ (BspDI at|cgat)4,";
    var v1817 = v1818 + "/tccgga/ (BspEI t|ccgga)5,";
    var v1816 = v1817 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v1815 = v1816 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v1814 = v1815 + "/cgcg/ (BstUI cg|cg)2,";
    var v1813 = v1814 + "/atcgat/ (ClaI at|cgat)4,";
    var v1812 = v1813 + "/gatc/ (DpnII |gatc)4,";
    var v1811 = v1812 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v1810 = v1811 + "/cggccg/ (EagI c|ggccg)5,";
    var v1809 = v1810 + "/gaattc/ (EcoRI g|aattc)5,";
    var v1808 = v1809 + "/gatatc/ (EcoRV gat|atc)3,";
    var v1807 = v1808 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v1806 = v1807 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v1805 = v1806 + "/tgcgca/ (FspI tgc|gca)3,";
    var v1804 = v1805 + "/ggcc/ (HaeIII gg|cc)2,";
    var v1803 = v1804 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v1802 = v1803 + "/aagctt/ (HindIII a|agctt)5,";
    var v1801 = v1802 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v1800 = v1801 + "/gttaac/ (HpaI gtt|aac)3,";
    var v1799 = v1800 + "/ccgg/ (HpaII c|cgg)3,";
    var v1798 = v1799 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v1797 = v1798 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v1796 = v1797 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v1795 = v1796 + "/caattg/ (MfeI c|aattg)5,";
    var v1794 = v1795 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v1793 = v1794 + "/tggcca/ (MscI tgg|cca)3,";
    var v1792 = v1793 + "/ttaa/ (MseI t|taa)3,";
    var v1791 = v1792 + "/ccgg/ (MspI c|cgg)3,";
    var v1790 = v1791 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v1789 = v1790 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v1788 = v1789 + "/ccatgg/ (NcoI c|catgg)5,";
    var v1787 = v1788 + "/catatg/ (NdeI ca|tatg)4,";
    var v1786 = v1787 + "/gatc/ (NdeII |gatc)4,";
    var v1785 = v1786 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v1784 = v1785 + "/gctagc/ (NheI g|ctagc)5,";
    var v1783 = v1784 + "/catg/ (NlaIII catg|)0,";
    var v1782 = v1783 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v1781 = v1782 + "/tcgcga/ (NruI tcg|cga)3,";
    var v1780 = v1781 + "/atgcat/ (NsiI atgca|t)1,";
    var v1779 = v1780 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v1778 = v1779 + "/acatgt/ (PciI a|catgt)5,";
    var v1777 = v1778 + "/ggcc/ (PhoI gg|cc)2,";
    var v1776 = v1777 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v1775 = v1776 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v1774 = v1775 + "/ttataa/ (PsiI tta|taa)3,";
    var v1773 = v1774 + "/ctgcag/ (PstI ctgca|g)1,";
    var v1772 = v1773 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v1771 = v1772 + "/cagctg/ (PvuII cag|ctg)3,";
    var v1770 = v1771 + "/gtac/ (RsaI gt|ac)2,";
    var v1769 = v1770 + "/gagctc/ (SacI gagct|c)1,";
    var v1751 = v1769 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v1733 = v1751 + "/gtcgac/ (SalI g|tcgac)5,";
    var v1715 = v1733 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v1696 = v1715 + "/agtact/ (ScaI agt|act)3,";
    var v1676 = v1696 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v1652 = v1676 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v1628 = v1652 + "/tacgta/ (SnaBI tac|gta)3,";
    var v1604 = v1628 + "/actagt/ (SpeI a|ctagt)5,";
    var v1577 = v1604 + "/gcatgc/ (SphI gcatg|c)1,";
    var v1548 = v1577 + "/aatatt/ (SspI aat|att)3,";
    var v1515 = v1548 + "/gagctc/ (SstI gagct|c)1,";
    var v1469 = v1515 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v1406 = v1469 + "/aggcct/ (StuI agg|cct)3,";
    var v1342 = v1406 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v1265 = v1342 + "/tcga/ (TaqI t|cga)3,";
    var v1150 = v1265 + "/ctcgag/ (TliI c|tcgag)5,";
    var v990 = v1150 + "/attaat/ (VspI at|taat)4,";
    var v731 = v990 + "/tctaga/ (XbaI t|ctaga)5,";
    var v311 = v731 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v311 + "/cccggg/ (XmaI c|ccggg)5"
  }
  return true
}
function getGeneticCodeString(type$$26) {
  var v991 = type$$26.toLowerCase();
  var v732 = v991 == "standard";
  var v993 = !v732;
  if(v993) {
    var v992 = type$$26.toLowerCase();
    v732 = v992 == "transl_table=1"
  }
  var v314 = v732;
  if(v314) {
    var v1752 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1734 = v1752 + "/ga[tcuy]/=D,";
    var v1716 = v1734 + "/ga[agr]/=E,";
    var v1697 = v1716 + "/[tu][tu][tcuy]/=F,";
    var v1677 = v1697 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1653 = v1677 + "/ca[tcuy]/=H,";
    var v1629 = v1653 + "/a[tu][atcuwmhy]/=I,";
    var v1605 = v1629 + "/aa[agr]/=K,";
    var v1578 = v1605 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1549 = v1578 + "/a[tu]g/=M,";
    var v1516 = v1549 + "/aa[tucy]/=N,";
    var v1470 = v1516 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1407 = v1470 + "/ca[agr]/=Q,";
    var v1343 = v1407 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1266 = v1343 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1151 = v1266 + "/ac[acgturyswkmbdhvn]/=T,";
    var v994 = v1151 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v733 = v994 + "/[tu]gg/=W,";
    var v313 = v733 + "/[tu]a[ctuy]/=Y,";
    return v313 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v734 = type$$26.toLowerCase();
  var v316 = v734 == "transl_table=2";
  if(v316) {
    var v1753 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1735 = v1753 + "/ga[tcuy]/=D,";
    var v1717 = v1735 + "/ga[agr]/=E,";
    var v1698 = v1717 + "/[tu][tu][tcuy]/=F,";
    var v1678 = v1698 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1654 = v1678 + "/ca[tcuy]/=H,";
    var v1630 = v1654 + "/a[tu][tcuy]/=I,";
    var v1606 = v1630 + "/aa[agr]/=K,";
    var v1579 = v1606 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1550 = v1579 + "/a[tu][agr]/=M,";
    var v1517 = v1550 + "/aa[tucy]/=N,";
    var v1471 = v1517 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1408 = v1471 + "/ca[agr]/=Q,";
    var v1344 = v1408 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1267 = v1344 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1152 = v1267 + "/ac[acgturyswkmbdhvn]/=T,";
    var v995 = v1152 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v735 = v995 + "/[tu]g[agr]/=W,";
    var v315 = v735 + "/[tu]a[ctuy]/=Y,";
    return v315 + "/[tu]a[agr]|ag[agr]/=*"
  }
  var v736 = type$$26.toLowerCase();
  var v318 = v736 == "transl_table=3";
  if(v318) {
    var v1754 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1736 = v1754 + "/ga[tcuy]/=D,";
    var v1718 = v1736 + "/ga[agr]/=E,";
    var v1699 = v1718 + "/[tu][tu][tcuy]/=F,";
    var v1679 = v1699 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1655 = v1679 + "/ca[tcuy]/=H,";
    var v1631 = v1655 + "/a[tu][tcuy]/=I,";
    var v1607 = v1631 + "/aa[agr]/=K,";
    var v1580 = v1607 + "/[tu][tu][agr]/=L,";
    var v1551 = v1580 + "/a[tu][agr]/=M,";
    var v1518 = v1551 + "/aa[tucy]/=N,";
    var v1472 = v1518 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1409 = v1472 + "/ca[agr]/=Q,";
    var v1345 = v1409 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1268 = v1345 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1153 = v1268 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v996 = v1153 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v737 = v996 + "/[tu]g[agr]/=W,";
    var v317 = v737 + "/[tu]a[ctuy]/=Y,";
    return v317 + "/[tu]a[agr]/=*"
  }
  var v738 = type$$26.toLowerCase();
  var v320 = v738 == "transl_table=4";
  if(v320) {
    var v1755 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1737 = v1755 + "/ga[tcuy]/=D,";
    var v1719 = v1737 + "/ga[agr]/=E,";
    var v1700 = v1719 + "/[tu][tu][tcuy]/=F,";
    var v1680 = v1700 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1656 = v1680 + "/ca[tcuy]/=H,";
    var v1632 = v1656 + "/a[tu][atcuwmhy]/=I,";
    var v1608 = v1632 + "/aa[agr]/=K,";
    var v1581 = v1608 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1552 = v1581 + "/a[tu]g/=M,";
    var v1519 = v1552 + "/aa[tucy]/=N,";
    var v1473 = v1519 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1410 = v1473 + "/ca[agr]/=Q,";
    var v1346 = v1410 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1269 = v1346 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1154 = v1269 + "/ac[acgturyswkmbdhvn]/=T,";
    var v997 = v1154 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v739 = v997 + "/[tu]g[agr]/=W,";
    var v319 = v739 + "/[tu]a[ctuy]/=Y,";
    return v319 + "/[tu]a[agr]/=*"
  }
  var v740 = type$$26.toLowerCase();
  var v322 = v740 == "transl_table=5";
  if(v322) {
    var v1756 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1738 = v1756 + "/ga[tcuy]/=D,";
    var v1720 = v1738 + "/ga[agr]/=E,";
    var v1701 = v1720 + "/[tu][tu][tcuy]/=F,";
    var v1681 = v1701 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1657 = v1681 + "/ca[tcuy]/=H,";
    var v1633 = v1657 + "/a[tu][tcuy]/=I,";
    var v1609 = v1633 + "/aa[agr]/=K,";
    var v1582 = v1609 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1553 = v1582 + "/a[tu][agr]/=M,";
    var v1520 = v1553 + "/aa[tucy]/=N,";
    var v1474 = v1520 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1411 = v1474 + "/ca[agr]/=Q,";
    var v1347 = v1411 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1270 = v1347 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1155 = v1270 + "/ac[acgturyswkmbdhvn]/=T,";
    var v998 = v1155 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v741 = v998 + "/[tu]g[agr]/=W,";
    var v321 = v741 + "/[tu]a[ctuy]/=Y,";
    return v321 + "/[tu]a[agr]/=*"
  }
  var v742 = type$$26.toLowerCase();
  var v324 = v742 == "transl_table=6";
  if(v324) {
    var v1757 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1739 = v1757 + "/ga[tcuy]/=D,";
    var v1721 = v1739 + "/ga[agr]/=E,";
    var v1702 = v1721 + "/[tu][tu][tcuy]/=F,";
    var v1682 = v1702 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1658 = v1682 + "/ca[tcuy]/=H,";
    var v1634 = v1658 + "/a[tu][atcuwmhy]/=I,";
    var v1610 = v1634 + "/aa[agr]/=K,";
    var v1583 = v1610 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1554 = v1583 + "/a[tu]g/=M,";
    var v1521 = v1554 + "/aa[tucy]/=N,";
    var v1475 = v1521 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1412 = v1475 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v1348 = v1412 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1271 = v1348 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1156 = v1271 + "/ac[acgturyswkmbdhvn]/=T,";
    var v999 = v1156 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v743 = v999 + "/[tu]gg/=W,";
    var v323 = v743 + "/[tu]a[ctuy]/=Y,";
    return v323 + "/[tu]ga/=*"
  }
  var v744 = type$$26.toLowerCase();
  var v326 = v744 == "transl_table=9";
  if(v326) {
    var v1758 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1740 = v1758 + "/ga[tcuy]/=D,";
    var v1722 = v1740 + "/ga[agr]/=E,";
    var v1703 = v1722 + "/[tu][tu][tcuy]/=F,";
    var v1683 = v1703 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1659 = v1683 + "/ca[tcuy]/=H,";
    var v1635 = v1659 + "/a[tu][atcuwmhy]/=I,";
    var v1611 = v1635 + "/aag/=K,";
    var v1584 = v1611 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1555 = v1584 + "/a[tu]g/=M,";
    var v1522 = v1555 + "/aa[atcuwmhy]/=N,";
    var v1476 = v1522 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1413 = v1476 + "/ca[agr]/=Q,";
    var v1349 = v1413 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1272 = v1349 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1157 = v1272 + "/ac[acgturyswkmbdhvn]/=T,";
    var v1000 = v1157 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v745 = v1000 + "/[tu]g[agr]/=W,";
    var v325 = v745 + "/[tu]a[ctuy]/=Y,";
    return v325 + "/[tu]a[agr]/=*"
  }
  var v746 = type$$26.toLowerCase();
  var v328 = v746 == "transl_table=10";
  if(v328) {
    var v1759 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1741 = v1759 + "/ga[tcuy]/=D,";
    var v1723 = v1741 + "/ga[agr]/=E,";
    var v1704 = v1723 + "/[tu][tu][tcuy]/=F,";
    var v1684 = v1704 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1660 = v1684 + "/ca[tcuy]/=H,";
    var v1636 = v1660 + "/a[tu][atcuwmhy]/=I,";
    var v1612 = v1636 + "/aa[agr]/=K,";
    var v1585 = v1612 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1556 = v1585 + "/a[tu]g/=M,";
    var v1523 = v1556 + "/aa[tucy]/=N,";
    var v1477 = v1523 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1414 = v1477 + "/ca[agr]/=Q,";
    var v1350 = v1414 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1273 = v1350 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1158 = v1273 + "/ac[acgturyswkmbdhvn]/=T,";
    var v1001 = v1158 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v747 = v1001 + "/[tu]gg/=W,";
    var v327 = v747 + "/[tu]a[ctuy]/=Y,";
    return v327 + "/[tu]a[agr]/=*"
  }
  var v748 = type$$26.toLowerCase();
  var v330 = v748 == "transl_table=11";
  if(v330) {
    var v1760 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1742 = v1760 + "/ga[tcuy]/=D,";
    var v1724 = v1742 + "/ga[agr]/=E,";
    var v1705 = v1724 + "/[tu][tu][tcuy]/=F,";
    var v1685 = v1705 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1661 = v1685 + "/ca[tcuy]/=H,";
    var v1637 = v1661 + "/a[tu][atcuwmhy]/=I,";
    var v1613 = v1637 + "/aa[agr]/=K,";
    var v1586 = v1613 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1557 = v1586 + "/a[tu]g/=M,";
    var v1524 = v1557 + "/aa[tucy]/=N,";
    var v1478 = v1524 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1415 = v1478 + "/ca[agr]/=Q,";
    var v1351 = v1415 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1274 = v1351 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1159 = v1274 + "/ac[acgturyswkmbdhvn]/=T,";
    var v1002 = v1159 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v749 = v1002 + "/[tu]gg/=W,";
    var v329 = v749 + "/[tu]a[ctuy]/=Y,";
    return v329 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v750 = type$$26.toLowerCase();
  var v332 = v750 == "transl_table=12";
  if(v332) {
    var v1761 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1743 = v1761 + "/ga[tcuy]/=D,";
    var v1725 = v1743 + "/ga[agr]/=E,";
    var v1706 = v1725 + "/[tu][tu][tcuy]/=F,";
    var v1686 = v1706 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1662 = v1686 + "/ca[tcuy]/=H,";
    var v1638 = v1662 + "/a[tu][atcuwmhy]/=I,";
    var v1614 = v1638 + "/aa[agr]/=K,";
    var v1587 = v1614 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1558 = v1587 + "/a[tu]g/=M,";
    var v1525 = v1558 + "/aa[tucy]/=N,";
    var v1479 = v1525 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1416 = v1479 + "/ca[agr]/=Q,";
    var v1352 = v1416 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1275 = v1352 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v1160 = v1275 + "/ac[acgturyswkmbdhvn]/=T,";
    var v1003 = v1160 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v751 = v1003 + "/[tu]gg/=W,";
    var v331 = v751 + "/[tu]a[ctuy]/=Y,";
    return v331 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v752 = type$$26.toLowerCase();
  var v334 = v752 == "transl_table=13";
  if(v334) {
    var v1762 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1744 = v1762 + "/ga[tcuy]/=D,";
    var v1726 = v1744 + "/ga[agr]/=E,";
    var v1707 = v1726 + "/[tu][tu][tcuy]/=F,";
    var v1687 = v1707 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1663 = v1687 + "/ca[tcuy]/=H,";
    var v1639 = v1663 + "/a[tu][tcuy]/=I,";
    var v1615 = v1639 + "/aa[agr]/=K,";
    var v1588 = v1615 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1559 = v1588 + "/a[tu][agr]/=M,";
    var v1526 = v1559 + "/aa[tucy]/=N,";
    var v1480 = v1526 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1417 = v1480 + "/ca[agr]/=Q,";
    var v1353 = v1417 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1276 = v1353 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1161 = v1276 + "/ac[acgturyswkmbdhvn]/=T,";
    var v1004 = v1161 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v753 = v1004 + "/[tu]g[agr]/=W,";
    var v333 = v753 + "/[tu]a[ctuy]/=Y,";
    return v333 + "/[tu]a[agr]/=*"
  }
  var v754 = type$$26.toLowerCase();
  var v336 = v754 == "transl_table=14";
  if(v336) {
    var v1763 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1745 = v1763 + "/ga[tcuy]/=D,";
    var v1727 = v1745 + "/ga[agr]/=E,";
    var v1708 = v1727 + "/[tu][tu][tcuy]/=F,";
    var v1688 = v1708 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1664 = v1688 + "/ca[tcuy]/=H,";
    var v1640 = v1664 + "/a[tu][atcuwmhy]/=I,";
    var v1616 = v1640 + "/aag/=K,";
    var v1589 = v1616 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1560 = v1589 + "/a[tu]g/=M,";
    var v1527 = v1560 + "/aa[atcuwmhy]/=N,";
    var v1481 = v1527 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1418 = v1481 + "/ca[agr]/=Q,";
    var v1354 = v1418 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1277 = v1354 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1162 = v1277 + "/ac[acgturyswkmbdhvn]/=T,";
    var v1005 = v1162 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v755 = v1005 + "/[tu]g[agr]/=W,";
    var v335 = v755 + "/[tu]a[atcuwmhy]/=Y,";
    return v335 + "/[tu]ag/=*"
  }
  var v756 = type$$26.toLowerCase();
  var v338 = v756 == "transl_table=15";
  if(v338) {
    var v1764 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1746 = v1764 + "/ga[tcuy]/=D,";
    var v1728 = v1746 + "/ga[agr]/=E,";
    var v1709 = v1728 + "/[tu][tu][tcuy]/=F,";
    var v1689 = v1709 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1665 = v1689 + "/ca[tcuy]/=H,";
    var v1641 = v1665 + "/a[tu][atcuwmhy]/=I,";
    var v1617 = v1641 + "/aa[agr]/=K,";
    var v1590 = v1617 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1561 = v1590 + "/a[tu]g/=M,";
    var v1528 = v1561 + "/aa[tucy]/=N,";
    var v1482 = v1528 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1419 = v1482 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v1355 = v1419 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1278 = v1355 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1163 = v1278 + "/ac[acgturyswkmbdhvn]/=T,";
    var v1006 = v1163 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v757 = v1006 + "/[tu]gg/=W,";
    var v337 = v757 + "/[tu]a[ctuy]/=Y,";
    return v337 + "/[tu][agr]a/=*"
  }
  var v758 = type$$26.toLowerCase();
  var v340 = v758 == "transl_table=16";
  if(v340) {
    var v1765 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1747 = v1765 + "/ga[tcuy]/=D,";
    var v1729 = v1747 + "/ga[agr]/=E,";
    var v1710 = v1729 + "/[tu][tu][tcuy]/=F,";
    var v1690 = v1710 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1666 = v1690 + "/ca[tcuy]/=H,";
    var v1642 = v1666 + "/a[tu][atcuwmhy]/=I,";
    var v1618 = v1642 + "/aa[agr]/=K,";
    var v1591 = v1618 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1562 = v1591 + "/a[tu]g/=M,";
    var v1529 = v1562 + "/aa[tucy]/=N,";
    var v1483 = v1529 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1420 = v1483 + "/ca[agr]/=Q,";
    var v1356 = v1420 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1279 = v1356 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1164 = v1279 + "/ac[acgturyswkmbdhvn]/=T,";
    var v1007 = v1164 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v759 = v1007 + "/[tu]gg/=W,";
    var v339 = v759 + "/[tu]a[ctuy]/=Y,";
    return v339 + "/[tu][agr]a/=*"
  }
  var v760 = type$$26.toLowerCase();
  var v342 = v760 == "transl_table=21";
  if(v342) {
    var v1766 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1748 = v1766 + "/ga[tcuy]/=D,";
    var v1730 = v1748 + "/ga[agr]/=E,";
    var v1711 = v1730 + "/[tu][tu][tcuy]/=F,";
    var v1691 = v1711 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1667 = v1691 + "/ca[tcuy]/=H,";
    var v1643 = v1667 + "/a[tu][tcuy]/=I,";
    var v1619 = v1643 + "/aag/=K,";
    var v1592 = v1619 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1563 = v1592 + "/a[tu][agr]/=M,";
    var v1530 = v1563 + "/aa[atcuwmhy]/=N,";
    var v1484 = v1530 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1421 = v1484 + "/ca[agr]/=Q,";
    var v1357 = v1421 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1280 = v1357 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1165 = v1280 + "/ac[acgturyswkmbdhvn]/=T,";
    var v1008 = v1165 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v761 = v1008 + "/[tu]g[agr]/=W,";
    var v341 = v761 + "/[tu]a[ctuy]/=Y,";
    return v341 + "/[tu]a[agr]/=*"
  }
  var v762 = type$$26.toLowerCase();
  var v344 = v762 == "transl_table=22";
  if(v344) {
    var v1767 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1749 = v1767 + "/ga[tcuy]/=D,";
    var v1731 = v1749 + "/ga[agr]/=E,";
    var v1712 = v1731 + "/[tu][tu][tcuy]/=F,";
    var v1692 = v1712 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1668 = v1692 + "/ca[tcuy]/=H,";
    var v1644 = v1668 + "/a[tu][atcuwmhy]/=I,";
    var v1620 = v1644 + "/aa[agr]/=K,";
    var v1593 = v1620 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1564 = v1593 + "/a[tu]g/=M,";
    var v1531 = v1564 + "/aa[tucy]/=N,";
    var v1485 = v1531 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1422 = v1485 + "/ca[agr]/=Q,";
    var v1358 = v1422 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1281 = v1358 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v1166 = v1281 + "/ac[acgturyswkmbdhvn]/=T,";
    var v1009 = v1166 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v763 = v1009 + "/[tu]gg/=W,";
    var v343 = v763 + "/[tu]a[ctuy]/=Y,";
    return v343 + "/[tu][agcrsmv]a/=*"
  }
  var v764 = type$$26.toLowerCase();
  var v346 = v764 == "transl_table=23";
  if(v346) {
    var v1768 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1750 = v1768 + "/ga[tcuy]/=D,";
    var v1732 = v1750 + "/ga[agr]/=E,";
    var v1713 = v1732 + "/[tu][tu][tcuy]/=F,";
    var v1693 = v1713 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1669 = v1693 + "/ca[tcuy]/=H,";
    var v1645 = v1669 + "/a[tu][atcuwmhy]/=I,";
    var v1621 = v1645 + "/aa[agr]/=K,";
    var v1594 = v1621 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1565 = v1594 + "/a[tu]g/=M,";
    var v1532 = v1565 + "/aa[tucy]/=N,";
    var v1486 = v1532 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1423 = v1486 + "/ca[agr]/=Q,";
    var v1359 = v1423 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1282 = v1359 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1167 = v1282 + "/ac[acgturyswkmbdhvn]/=T,";
    var v1010 = v1167 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v765 = v1010 + "/[tu]gg/=W,";
    var v345 = v765 + "/[tu]a[ctuy]/=Y,";
    return v345 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function primerMap(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 2E5;
  var v766 = testScript();
  var v347 = v766 == false;
  if(v347) {
    return false
  }
  var restrictionSiteCollection;
  var forwardMatches;
  var reverseMatches;
  var v1424 = theDocument.forms;
  var v1360 = v1424[0];
  var v1283 = v1360.elements;
  var v1168 = v1283[7];
  var v1011 = v1168.options;
  var v1425 = theDocument.forms;
  var v1361 = v1425[0];
  var v1284 = v1361.elements;
  var v1169 = v1284[7];
  var v1012 = v1169.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v767 = v1011[v1012]
  }
  var v348 = v767.value;
  var geneticCode = getGeneticCodeString(v348);
  var restrictionSites = getRestrictionSiteString("standard");
  var v1426 = theDocument.forms;
  var v1362 = v1426[0];
  var v1285 = v1362.elements;
  var v1170 = v1285[0];
  var v1013 = checkFormElement(v1170);
  var v768 = v1013 == false;
  var v1015 = !v768;
  if(v1015) {
    var v1487 = theDocument.forms;
    var v1427 = v1487[0];
    var v1363 = v1427.elements;
    var v1286 = v1363[0];
    var v1171 = v1286.value;
    var v1014 = checkSequenceLength(v1171, maxInput$$3);
    v768 = v1014 == false
  }
  var v349 = v768;
  if(v349) {
    return false
  }
  geneticCode = geneticCode.split(/,/);
  var v769 = checkGeneticCode(geneticCode);
  var v350 = v769 == false;
  if(v350) {
    return false
  }
  restrictionSites = restrictionSites.split(/,/);
  var v770 = checkRestPatterns(restrictionSites);
  var v351 = v770 == false;
  if(v351) {
    return false
  }
  var isColor$$1;
  var v1488 = theDocument.forms;
  var v1428 = v1488[0];
  var v1364 = v1428.elements;
  var v1287 = v1364[10];
  var v1172 = v1287.options;
  var v1489 = theDocument.forms;
  var v1429 = v1489[0];
  var v1365 = v1429.elements;
  var v1288 = v1365[10];
  var v1173 = v1288.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v1016 = v1172[v1173]
  }
  var v771 = v1016.value;
  var v352 = v771 == "color";
  if(v352) {
    isColor$$1 = true
  }else {
    isColor$$1 = false
  }
  var v1289 = theDocument.forms;
  var v1174 = v1289[0];
  var v1017 = v1174.elements;
  var v772 = v1017[1];
  var v353 = v772.value;
  var primers = v353.split(/,/);
  var newPrimers = new Array;
  var primerSeq;
  var primerRe;
  var primerName;
  var matchArray$$2;
  var re$$3 = /\(([^\(]+)\)\s*([A-Za-z]+)/;
  var i$$11 = 0;
  var v773 = primers.length;
  var v358 = i$$11 < v773;
  for(;v358;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v774 = primers[i$$11]
    }
    var v357 = matchArray$$2 = re$$3.exec(v774);
    if(v357) {
      primerName = matchArray$$2[1];
      var v1018 = matchArray$$2[2];
      var v775 = v1018.length;
      var v354 = v775 < 10;
      if(v354) {
        alert("Please enter primer sequences that are at least 10 bases long.");
        return false
      }
      primerSeq = matchArray$$2[2];
      var v1019 = convertDegenerates(primerSeq);
      var v776 = "/" + v1019;
      var v355 = v776 + "/gi";
      if(JAMScript.isEval(eval)) {
        primerRe = eval("introspect(JAMScript.introspectors.processAll) { " + v355 + " }")
      }else {
        primerRe = JAMScript.call(eval, null, [v355])
      }
      var v356 = new Primer(primerSeq, primerRe, primerName);
      newPrimers.push(v356)
    }
    i$$11 = i$$11 + 1;
    var v777 = primers.length;
    v358 = i$$11 < v777
  }
  _openWindow("Primer Map", isColor$$1);
  var v1490 = theDocument.forms;
  var v1430 = v1490[0];
  var v1366 = v1430.elements;
  var v1290 = v1366[8];
  var v1175 = v1290.options;
  var v1491 = theDocument.forms;
  var v1431 = v1491[0];
  var v1367 = v1431.elements;
  var v1291 = v1367[8];
  var v1176 = v1291.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v1020 = v1175[v1176]
  }
  var v778 = v1020.value;
  var v369 = v778 == "shown";
  if(v369) {
    var v359 = outputWindow.document;
    var v779 = '<span class="one">' + "cuts once";
    var v360 = v779 + "</span><br />\n";
    JAMScript.call(v359.write, v359, [v360]);
    var v361 = outputWindow.document;
    var v780 = '<span class="two">' + "cuts twice";
    var v362 = v780 + "</span><br />\n";
    JAMScript.call(v361.write, v361, [v362]);
    var v363 = outputWindow.document;
    JAMScript.call(v363.write, v363, ["\n"]);
    var v364 = outputWindow.document;
    var v781 = '<span class="forward_primer">' + "&gt;&gt;&gt;forward primer";
    var v365 = v781 + "</span><br />\n";
    JAMScript.call(v364.write, v364, [v365]);
    var v366 = outputWindow.document;
    var v782 = '<span class="reverse_primer">' + "&lt;&lt;&lt;reverse primer";
    var v367 = v782 + "</span><br />\n";
    JAMScript.call(v366.write, v366, [v367]);
    var v368 = outputWindow.document;
    JAMScript.call(v368.write, v368, ["\n"])
  }
  var v1292 = theDocument.forms;
  var v1177 = v1292[0];
  var v1021 = v1177.elements;
  var v783 = v1021[0];
  var v370 = v783.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v370);
  i$$11 = 0;
  var v784 = arrayOfFasta$$1.length;
  var v404 = i$$11 < v784;
  for(;v404;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v371 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v371);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v372 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v372);
    newDna = removeNonDna(newDna);
    openPre();
    var v373 = outputWindow.document;
    var v1492 = theDocument.forms;
    var v1432 = v1492[0];
    var v1368 = v1432.elements;
    var v1293 = v1368[9];
    var v1178 = v1293.options;
    var v1493 = theDocument.forms;
    var v1433 = v1493[0];
    var v1369 = v1433.elements;
    var v1294 = v1369[9];
    var v1179 = v1294.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1022 = v1178[v1179]
    }
    var v785 = v1022.value;
    var v374 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, v785);
    JAMScript.call(v373.write, v373, [v374]);
    var v1494 = theDocument.forms;
    var v1434 = v1494[0];
    var v1370 = v1434.elements;
    var v1295 = v1370[8];
    var v1180 = v1295.options;
    var v1495 = theDocument.forms;
    var v1435 = v1495[0];
    var v1371 = v1435.elements;
    var v1296 = v1371[8];
    var v1181 = v1296.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1023 = v1180[v1181]
    }
    var v786 = v1023.value;
    var v376 = v786 == "shown";
    if(v376) {
      var v1436 = theDocument.forms;
      var v1372 = v1436[0];
      var v1297 = v1372.elements;
      var v1182 = v1297[9];
      var v1024 = v1182.options;
      var v1437 = theDocument.forms;
      var v1373 = v1437[0];
      var v1298 = v1373.elements;
      var v1183 = v1298[9];
      var v1025 = v1183.selectedIndex;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v787 = v1024[v1025]
      }
      var v375 = v787.value;
      restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, v375);
      JAMScript.call(restrictionSiteCollection.sortRestrictionSites, restrictionSiteCollection, [])
    }
    var v1438 = theDocument.forms;
    var v1374 = v1438[0];
    var v1299 = v1374.elements;
    var v1184 = v1299[9];
    var v1026 = v1184.options;
    var v1439 = theDocument.forms;
    var v1375 = v1439[0];
    var v1300 = v1375.elements;
    var v1185 = v1300[9];
    var v1027 = v1185.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v788 = v1026[v1027]
    }
    var v377 = v788.value;
    forwardMatches = findMatches(newPrimers, newDna, v377, false);
    var v789 = complement(newDna);
    var v378 = reverse(v789);
    var v1440 = theDocument.forms;
    var v1376 = v1440[0];
    var v1301 = v1376.elements;
    var v1186 = v1301[9];
    var v1028 = v1186.options;
    var v1441 = theDocument.forms;
    var v1377 = v1441[0];
    var v1302 = v1377.elements;
    var v1187 = v1302[9];
    var v1029 = v1187.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v790 = v1028[v1029]
    }
    var v379 = v790.value;
    reverseMatches = findMatches(newPrimers, v378, v379, true);
    var j$$10 = 0;
    var v1030 = forwardMatches.matches;
    var v791 = v1030.length;
    var v386 = j$$10 < v791;
    for(;v386;) {
      var v792 = forwardMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v380 = v792[j$$10]
      }
      var v1188 = forwardMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1031 = v1188[j$$10]
      }
      var v793 = v1031.position;
      var v1303 = forwardMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1189 = v1303[j$$10]
      }
      var v1032 = v1189.matchingText;
      var v794 = v1032.length;
      v380.position = v793 - v794;
      var v795 = forwardMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v381 = v795[j$$10]
      }
      var v1190 = forwardMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1033 = v1190[j$$10]
      }
      var v796 = v1033.position;
      var v1304 = forwardMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1191 = v1304[j$$10]
      }
      var v1034 = v1191.matchingText;
      var v797 = v1034.length;
      v381.end = v796 + v797;
      var v1192 = forwardMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1035 = v1192[j$$10]
      }
      var v798 = v1035.position;
      var v383 = v798 < 0;
      if(v383) {
        var v799 = forwardMatches.matches;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v382 = v799[j$$10]
        }
        var v1193 = forwardMatches.matches;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1036 = v1193[j$$10]
        }
        var v800 = v1036.position;
        var v801 = newDna.length;
        v382.position = v800 + v801
      }
      var v1194 = forwardMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1037 = v1194[j$$10]
      }
      var v802 = v1037.end;
      var v803 = newDna.length;
      var v385 = v802 > v803;
      if(v385) {
        var v804 = forwardMatches.matches;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v384 = v804[j$$10]
        }
        var v1195 = forwardMatches.matches;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1038 = v1195[j$$10]
        }
        var v805 = v1038.end;
        var v806 = newDna.length;
        v384.end = v805 - v806
      }
      j$$10 = j$$10 + 1;
      var v1039 = forwardMatches.matches;
      var v807 = v1039.length;
      v386 = j$$10 < v807
    }
    j$$10 = 0;
    var v1040 = reverseMatches.matches;
    var v808 = v1040.length;
    var v393 = j$$10 < v808;
    for(;v393;) {
      var v809 = reverseMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v387 = v809[j$$10]
      }
      var v810 = newDna.length;
      var v1196 = reverseMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1041 = v1196[j$$10]
      }
      var v811 = v1041.position;
      v387.position = v810 - v811;
      var v812 = reverseMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v388 = v812[j$$10]
      }
      var v1197 = reverseMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1042 = v1197[j$$10]
      }
      var v813 = v1042.position;
      var v1305 = reverseMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1198 = v1305[j$$10]
      }
      var v1043 = v1198.matchingText;
      var v814 = v1043.length;
      v388.end = v813 + v814;
      var v1199 = reverseMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1044 = v1199[j$$10]
      }
      var v815 = v1044.position;
      var v390 = v815 < 0;
      if(v390) {
        var v816 = reverseMatches.matches;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v389 = v816[j$$10]
        }
        var v1200 = reverseMatches.matches;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1045 = v1200[j$$10]
        }
        var v817 = v1045.position;
        var v818 = newDna.length;
        v389.position = v817 + v818
      }
      var v1201 = reverseMatches.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1046 = v1201[j$$10]
      }
      var v819 = v1046.end;
      var v820 = newDna.length;
      var v392 = v819 > v820;
      if(v392) {
        var v821 = reverseMatches.matches;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v391 = v821[j$$10]
        }
        var v1202 = reverseMatches.matches;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1047 = v1202[j$$10]
        }
        var v822 = v1047.end;
        var v823 = newDna.length;
        v391.end = v822 - v823
      }
      j$$10 = j$$10 + 1;
      var v1048 = reverseMatches.matches;
      var v824 = v1048.length;
      v393 = j$$10 < v824
    }
    JAMScript.call(forwardMatches.sortMatches, forwardMatches, []);
    JAMScript.call(reverseMatches.sortMatches, reverseMatches, []);
    var v1442 = theDocument.forms;
    var v1378 = v1442[0];
    var v1306 = v1378.elements;
    var v1203 = v1306[5];
    var v1049 = v1203.options;
    var v1443 = theDocument.forms;
    var v1379 = v1443[0];
    var v1307 = v1379.elements;
    var v1204 = v1307[5];
    var v1050 = v1204.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v825 = v1049[v1050]
    }
    var v394 = v825.value;
    var v1444 = theDocument.forms;
    var v1380 = v1444[0];
    var v1308 = v1380.elements;
    var v1205 = v1308[6];
    var v1051 = v1205.options;
    var v1445 = theDocument.forms;
    var v1381 = v1445[0];
    var v1309 = v1381.elements;
    var v1206 = v1309[6];
    var v1052 = v1206.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v826 = v1051[v1052]
    }
    var v395 = v826.value;
    layoutPrimerMap(newDna, geneticCode, restrictionSiteCollection, forwardMatches, reverseMatches, v394, v395);
    var v396 = outputWindow.document;
    JAMScript.call(v396.write, v396, ["\n"]);
    closePre();
    var v1496 = theDocument.forms;
    var v1446 = v1496[0];
    var v1382 = v1446.elements;
    var v1310 = v1382[8];
    var v1207 = v1310.options;
    var v1497 = theDocument.forms;
    var v1447 = v1497[0];
    var v1383 = v1447.elements;
    var v1311 = v1383[8];
    var v1208 = v1311.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1053 = v1207[v1208]
    }
    var v827 = v1053.value;
    var v399 = v827 == "shown";
    if(v399) {
      var v1448 = theDocument.forms;
      var v1384 = v1448[0];
      var v1312 = v1384.elements;
      var v1209 = v1312[9];
      var v1054 = v1209.options;
      var v1449 = theDocument.forms;
      var v1385 = v1449[0];
      var v1313 = v1385.elements;
      var v1210 = v1313[9];
      var v1055 = v1210.selectedIndex;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v828 = v1054[v1055]
      }
      var v397 = v828.value;
      writeRestrictionSites(newDna, restrictionSites, v397);
      var v398 = outputWindow.document;
      JAMScript.call(v398.write, v398, ["<br />\n"])
    }
    writePrimerSites(newPrimers);
    var v400 = outputWindow.document;
    JAMScript.call(v400.write, v400, ["<br />\n<br />\n"]);
    j$$10 = 0;
    var v829 = newPrimers.length;
    var v403 = j$$10 < v829;
    for(;v403;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v401 = newPrimers[j$$10]
      }
      v401.hasForwardMatch = false;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v402 = newPrimers[j$$10]
      }
      v402.hasReverseMatch = false;
      j$$10 = j$$10 + 1;
      var v830 = newPrimers.length;
      v403 = j$$10 < v830
    }
    i$$11 = i$$11 + 1;
    var v831 = arrayOfFasta$$1.length;
    v404 = i$$11 < v831
  }
  closeWindow();
  return true
}
function writePrimerSites(primers$$1) {
  var backGroundClass$$1;
  var v405 = outputWindow.document;
  JAMScript.call(v405.write, v405, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v406 = outputWindow.document;
  var v1211 = '<tr><td class="title" width="200px">' + "Primer:";
  var v1056 = v1211 + '</td><td class="title">';
  var v832 = v1056 + "Sequence:";
  var v407 = v832 + "</td></tr>\n";
  JAMScript.call(v406.write, v406, [v407]);
  var i$$12 = 0;
  var v833 = primers$$1.length;
  var v413 = i$$12 < v833;
  for(;v413;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1057 = primers$$1[i$$12]
    }
    var v834 = v1057.hasForwardMatch;
    if(v834) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1058 = primers$$1[i$$12]
      }
      v834 = v1058.hasReverseMatch
    }
    var v410 = v834;
    if(v410) {
      backGroundClass$$1 = "many"
    }else {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v835 = primers$$1[i$$12]
      }
      var v409 = v835.hasForwardMatch;
      if(v409) {
        backGroundClass$$1 = "forward_primer"
      }else {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v836 = primers$$1[i$$12]
        }
        var v408 = v836.hasReverseMatch;
        if(v408) {
          backGroundClass$$1 = "reverse_primer"
        }else {
          backGroundClass$$1 = "none"
        }
      }
    }
    var v411 = outputWindow.document;
    var v1566 = '<tr><td class="' + backGroundClass$$1;
    var v1533 = v1566 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1567 = primers$$1[i$$12]
    }
    var v1534 = v1567.name;
    var v1498 = v1533 + v1534;
    var v1450 = v1498 + '</td><td class="';
    var v1386 = v1450 + backGroundClass$$1;
    var v1314 = v1386 + '">';
    var v1212 = v1314 + "5'-";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1315 = primers$$1[i$$12]
    }
    var v1213 = v1315.sequence;
    var v1059 = v1212 + v1213;
    var v837 = v1059 + "-3'";
    var v412 = v837 + "</td></tr>\n";
    JAMScript.call(v411.write, v411, [v412]);
    i$$12 = i$$12 + 1;
    var v838 = primers$$1.length;
    v413 = i$$12 < v838
  }
  var v414 = outputWindow.document;
  JAMScript.call(v414.write, v414, ["</tbody></table>\n"]);
  return true
}
function layoutPrimerMap(dnaSequence$$3, geneticCode$$1, restrictionSiteCollection$$1, forwardMatches$$1, reverseMatches$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v839 = readingFrame == "3";
  var v1060 = !v839;
  if(v1060) {
    v839 = readingFrame == "all_three"
  }
  var v416 = v839;
  if(v416) {
    var translation = new TranslationComponent;
    var v1214 = dnaSequence$$3.length;
    var v1061 = dnaSequence$$3.substring(2, v1214);
    var v840 = translate(v1061, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v415 = "  " + v840;
    JAMScript.call(translation.setCharacters, translation, [v415]);
    JAMScript.call(textLayout.addComponent, textLayout, [translation])
  }
  var v841 = readingFrame == "2";
  var v1062 = !v841;
  if(v1062) {
    v841 = readingFrame == "all_three"
  }
  var v418 = v841;
  if(v418) {
    translation = new TranslationComponent;
    var v1215 = dnaSequence$$3.length;
    var v1063 = dnaSequence$$3.substring(1, v1215);
    var v842 = translate(v1063, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v417 = " " + v842;
    JAMScript.call(translation.setCharacters, translation, [v417]);
    JAMScript.call(textLayout.addComponent, textLayout, [translation])
  }
  var v843 = readingFrame == "1";
  var v1064 = !v843;
  if(v1064) {
    v843 = readingFrame == "all_three"
  }
  var v420 = v843;
  if(v420) {
    translation = new TranslationComponent;
    var v419 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAMScript.call(translation.setCharacters, translation, [v419]);
    JAMScript.call(textLayout.addComponent, textLayout, [translation])
  }
  var v422 = readingFrame == "uppercase";
  if(v422) {
    translation = new UppercaseTranslationComponent;
    var v421 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAMScript.call(translation.setCharacters, translation, [v421]);
    JAMScript.call(textLayout.addComponent, textLayout, [translation])
  }
  var dna = new DnaComponent;
  JAMScript.call(dna.setCharacters, dna, [dnaSequence$$3]);
  JAMScript.call(textLayout.addComponent, textLayout, [dna]);
  var ruler = new RulerComponent;
  JAMScript.call(ruler.setCharacters, ruler, [dnaSequence$$3]);
  JAMScript.call(ruler.buildRuler, ruler, []);
  JAMScript.call(textLayout.addComponent, textLayout, [ruler]);
  dna = new DnaComponent;
  var v423 = complement(dnaSequence$$3);
  JAMScript.call(dna.setCharacters, dna, [v423]);
  JAMScript.call(textLayout.addComponent, textLayout, [dna]);
  var sitesInRange = new Array;
  var i$$13 = 0;
  var v844 = dnaSequence$$3.length;
  var v447 = i$$13 < v844;
  for(;v447;) {
    var v437 = restrictionSiteCollection$$1 != null;
    if(v437) {
      var v424 = i$$13 + basesPerLine;
      sitesInRange = JAMScript.call(restrictionSiteCollection$$1.getSitesInRange, restrictionSiteCollection$$1, [i$$13, v424]);
      sitesInRange.reverse();
      var j$$11 = 0;
      var v845 = sitesInRange.length;
      var v436 = j$$11 < v845;
      for(;v436;) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1065 = sitesInRange[j$$11]
        }
        var v846 = v1065.numberOfCuts;
        var v435 = v846 == 1;
        if(v435) {
          var v425 = outputWindow.document;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1499 = sitesInRange[j$$11]
          }
          var v1451 = v1499.position;
          var v1387 = v1451 - i$$13;
          var v1316 = v1387 + 9;
          var v1216 = spaceString.substring(0, v1316);
          var v1066 = v1216 + '<span class="one">';
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1217 = sitesInRange[j$$11]
          }
          var v1067 = v1217.label;
          var v847 = v1066 + v1067;
          var v426 = v847 + "</span>\n";
          JAMScript.call(v425.write, v425, [v426])
        }else {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1068 = sitesInRange[j$$11]
          }
          var v848 = v1068.numberOfCuts;
          var v434 = v848 == 2;
          if(v434) {
            var v427 = outputWindow.document;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1500 = sitesInRange[j$$11]
            }
            var v1452 = v1500.position;
            var v1388 = v1452 - i$$13;
            var v1317 = v1388 + 9;
            var v1218 = spaceString.substring(0, v1317);
            var v1069 = v1218 + '<span class="two">';
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1219 = sitesInRange[j$$11]
            }
            var v1070 = v1219.label;
            var v849 = v1069 + v1070;
            var v428 = v849 + "</span>\n";
            JAMScript.call(v427.write, v427, [v428])
          }else {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1071 = sitesInRange[j$$11]
            }
            var v850 = v1071.numberOfCuts;
            var v433 = v850 == 3;
            if(v433) {
              var v429 = outputWindow.document;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1501 = sitesInRange[j$$11]
              }
              var v1453 = v1501.position;
              var v1389 = v1453 - i$$13;
              var v1318 = v1389 + 9;
              var v1220 = spaceString.substring(0, v1318);
              var v1072 = v1220 + '<span class="three">';
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1221 = sitesInRange[j$$11]
              }
              var v1073 = v1221.label;
              var v851 = v1072 + v1073;
              var v430 = v851 + "</span>\n";
              JAMScript.call(v429.write, v429, [v430])
            }else {
              var v431 = outputWindow.document;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1454 = sitesInRange[j$$11]
              }
              var v1390 = v1454.position;
              var v1319 = v1390 - i$$13;
              var v1222 = v1319 + 9;
              var v1074 = spaceString.substring(0, v1222);
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1223 = sitesInRange[j$$11]
              }
              var v1075 = v1223.label;
              var v852 = v1074 + v1075;
              var v432 = v852 + "\n";
              JAMScript.call(v431.write, v431, [v432])
            }
          }
        }
        j$$11 = j$$11 + 1;
        var v853 = sitesInRange.length;
        v436 = j$$11 < v853
      }
    }
    var v438 = i$$13 + basesPerLine;
    sitesInRange = JAMScript.call(forwardMatches$$1.getMatchesInRange, forwardMatches$$1, [i$$13, v438]);
    sitesInRange.reverse();
    j$$11 = 0;
    var v854 = sitesInRange.length;
    var v441 = j$$11 < v854;
    for(;v441;) {
      var v439 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1670 = sitesInRange[j$$11]
      }
      var v1646 = v1670.position;
      var v1622 = v1646 - i$$13;
      var v1595 = v1622 + 9;
      var v1568 = spaceString.substring(0, v1595);
      var v1535 = v1568 + '<span class="forward_primer">';
      var v1502 = v1535 + "&gt;&gt;&gt;";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1536 = sitesInRange[j$$11]
      }
      var v1503 = v1536.primerName;
      var v1455 = v1502 + v1503;
      var v1391 = v1455 + "&gt;&gt;&gt;";
      var v1320 = v1391 + " ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1456 = sitesInRange[j$$11]
      }
      var v1392 = v1456.position;
      var v1321 = v1392 + 1;
      var v1224 = v1320 + v1321;
      var v1076 = v1224 + " to ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1225 = sitesInRange[j$$11]
      }
      var v1077 = v1225.end;
      var v855 = v1076 + v1077;
      var v440 = v855 + "</span>\n";
      JAMScript.call(v439.write, v439, [v440]);
      j$$11 = j$$11 + 1;
      var v856 = sitesInRange.length;
      v441 = j$$11 < v856
    }
    var v442 = i$$13 + basesPerLine;
    sitesInRange = JAMScript.call(reverseMatches$$1.getMatchesInRange, reverseMatches$$1, [i$$13, v442]);
    sitesInRange.reverse();
    j$$11 = 0;
    var v857 = sitesInRange.length;
    var v445 = j$$11 < v857;
    for(;v445;) {
      var v443 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1671 = sitesInRange[j$$11]
      }
      var v1647 = v1671.position;
      var v1623 = v1647 - i$$13;
      var v1596 = v1623 + 9;
      var v1569 = spaceString.substring(0, v1596);
      var v1537 = v1569 + '<span class="reverse_primer">';
      var v1504 = v1537 + "&lt;&lt;&lt;";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1538 = sitesInRange[j$$11]
      }
      var v1505 = v1538.primerName;
      var v1457 = v1504 + v1505;
      var v1393 = v1457 + "&lt;&lt;&lt;";
      var v1322 = v1393 + " ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1458 = sitesInRange[j$$11]
      }
      var v1394 = v1458.position;
      var v1323 = v1394 + 1;
      var v1226 = v1322 + v1323;
      var v1078 = v1226 + " to ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1227 = sitesInRange[j$$11]
      }
      var v1079 = v1227.end;
      var v858 = v1078 + v1079;
      var v444 = v858 + "</span>\n";
      JAMScript.call(v443.write, v443, [v444]);
      j$$11 = j$$11 + 1;
      var v859 = sitesInRange.length;
      v445 = j$$11 < v859
    }
    var v446 = i$$13 + basesPerLine;
    JAMScript.call(textLayout.writeLayout, textLayout, [i$$13, v446]);
    i$$13 = i$$13 + basesPerLine;
    var v860 = dnaSequence$$3.length;
    v447 = i$$13 < v860
  }
  return true
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    var v448 = " " + p1$$2;
    return v448 + " "
  }
  var v1080 = dnaSequence$$4.replace(/[^A-Za-z]/g, "");
  var v861 = v1080.length;
  var v449 = v861 < 3;
  if(v449) {
    return""
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/(...)/g, v2);
  var i$$14 = 0;
  var v862 = geneticCodeMatchExp$$3.length;
  var v452 = i$$14 < v862;
  for(;v452;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v450 = geneticCodeMatchExp$$3[i$$14]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v451 = geneticCodeMatchResult$$3[i$$14]
    }
    dnaSequence$$4 = dnaSequence$$4.replace(v450, v451);
    i$$14 = i$$14 + 1;
    var v863 = geneticCodeMatchExp$$3.length;
    v452 = i$$14 < v863
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/\S{3}/g, "X");
  dnaSequence$$4 = dnaSequence$$4.replace(/\s\S{1,2}$/, "");
  dnaSequence$$4 = dnaSequence$$4.replace(/^\s/, "");
  return dnaSequence$$4
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$15, s$$5) {
    var v1395 = " " + p1$$3;
    var v1324 = v1395 + p3;
    var v1228 = v1324 + p5;
    var v1081 = v1228 + " ";
    var v864 = v1081 + p2;
    var v453 = v864 + p4;
    return v453 + p6
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/[a-z]/g, " ");
  var v1082 = dnaSequence$$5.replace(/[^A-Za-z]/g, "");
  var v865 = v1082.length;
  var v454 = v865 < 3;
  if(v454) {
    return""
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3);
  dnaSequence$$5 = dnaSequence$$5.replace(/\s\S{1,2}\s/g, "");
  var i$$15 = 0;
  var v866 = geneticCodeMatchExp$$4.length;
  var v457 = i$$15 < v866;
  for(;v457;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v455 = geneticCodeMatchExp$$4[i$$15]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v456 = geneticCodeMatchResult$$4[i$$15]
    }
    dnaSequence$$5 = dnaSequence$$5.replace(v455, v456);
    i$$15 = i$$15 + 1;
    var v867 = geneticCodeMatchExp$$4.length;
    v457 = i$$15 < v867
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/\S{3}/g, "X");
  dnaSequence$$5 = dnaSequence$$5.replace(/^\s/, "");
  return dnaSequence$$5
}
function findRestrictionSites(sequence$$18, arrayOfItems$$2, dnaConformation$$1) {
  var lookAhead$$1 = 50;
  var lowerLimit$$1 = 0;
  var upperLimit$$1 = sequence$$18.length;
  var shiftValue$$1 = 0;
  var cutDistance$$1;
  var matchExp$$2;
  var matchPosition$$1;
  var matchArray$$3;
  var label$$2;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$2 = new RestrictionSiteCollection;
  var v461 = dnaConformation$$1 == "circular";
  if(v461) {
    var v458 = sequence$$18.substring(0, lookAhead$$1);
    shiftValue$$1 = v458.length;
    var v1229 = sequence$$18.length;
    var v1083 = v1229 - lookAhead$$1;
    var v1084 = sequence$$18.length;
    var v868 = sequence$$18.substring(v1083, v1084);
    var v459 = v868 + sequence$$18;
    var v460 = sequence$$18.substring(0, lookAhead$$1);
    sequence$$18 = v459 + v460;
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1
  }
  var i$$16 = 0;
  var v869 = arrayOfItems$$2.length;
  var v472 = i$$16 < v869;
  for(;v472;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v870 = arrayOfItems$$2[i$$16]
    }
    var v462 = v870.match(/\/.+\//);
    matchExp$$2 = v462 + "gi";
    matchPosition$$1 = 0;
    if(JAMScript.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$2 + " }")
    }else {
      matchExp$$2 = JAMScript.call(eval, null, [matchExp$$2])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1230 = arrayOfItems$$2[i$$16]
    }
    var v1085 = v1230.match(/\)\D*\d+/);
    var v871 = v1085.toString();
    var v463 = v871.replace(/\)\D*/, "");
    cutDistance$$1 = parseFloat(v463);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1086 = arrayOfItems$$2[i$$16]
    }
    var v872 = v1086.match(/\([^\(]+\)/);
    var v464 = v872.toString();
    label$$2 = v464.replace(/\(|\)/g, "");
    var v468 = matchArray$$3 = matchExp$$2.exec(sequence$$18);
    for(;v468;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
      var v873 = matchPosition$$1 >= lowerLimit$$1;
      if(v873) {
        v873 = matchPosition$$1 < upperLimit$$1
      }
      var v466 = v873;
      if(v466) {
        timesFound$$1 = timesFound$$1 + 1;
        var v1087 = label$$2 + " ";
        var v1231 = matchPosition$$1 - shiftValue$$1;
        var v1088 = v1231 + 1;
        var v874 = v1087 + v1088;
        var v875 = matchPosition$$1 - shiftValue$$1;
        var v465 = new RestrictionSite(v874, v875);
        tempArray.push(v465)
      }
      var v876 = matchExp$$2.lastIndex;
      var v1089 = RegExp.lastMatch;
      var v877 = v1089.length;
      var v467 = v876 - v877;
      matchExp$$2.lastIndex = v467 + 1;
      v468 = matchArray$$3 = matchExp$$2.exec(sequence$$18)
    }
    var j$$12 = 0;
    var v878 = tempArray.length;
    var v471 = j$$12 < v878;
    for(;v471;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v469 = tempArray[j$$12]
      }
      v469.numberOfCuts = timesFound$$1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v470 = tempArray[j$$12]
      }
      JAMScript.call(restrictionSiteCollection$$2.addRestrictionSite, restrictionSiteCollection$$2, [v470]);
      j$$12 = j$$12 + 1;
      var v879 = tempArray.length;
      v471 = j$$12 < v879
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$16 = i$$16 + 1;
    var v880 = arrayOfItems$$2.length;
    v472 = i$$16 < v880
  }
  return restrictionSiteCollection$$2
}
function findMatches(primers$$2, sequence$$19, topology$$1, isReverseStrand) {
  var matchArray$$4;
  var matchPosition$$2;
  var matchCollection = new MatchCollection;
  var re$$4;
  var originalLength$$1 = sequence$$19.length;
  var v493 = topology$$1 == "circular";
  if(v493) {
    var lookAhead$$2 = 50;
    var v473 = sequence$$19.substring(0, lookAhead$$2);
    var shiftValue$$2 = v473.length;
    var v474 = sequence$$19.length;
    var upperLimit$$2 = v474 + shiftValue$$2;
    var v1232 = sequence$$19.length;
    var v1090 = v1232 - lookAhead$$2;
    var v1091 = sequence$$19.length;
    var v881 = sequence$$19.substring(v1090, v1091);
    var v475 = v881 + sequence$$19;
    var v476 = sequence$$19.substring(0, lookAhead$$2);
    sequence$$19 = v475 + v476;
    var lowerLimit$$2 = 0 + shiftValue$$2;
    var i$$17 = 0;
    var v882 = primers$$2.length;
    var v485 = i$$17 < v882;
    for(;v485;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v477 = primers$$2[i$$17]
      }
      re$$4 = v477.re;
      var v484 = matchArray$$4 = re$$4.exec(sequence$$19);
      for(;v484;) {
        matchPosition$$2 = re$$4.lastIndex;
        var v883 = matchPosition$$2 >= lowerLimit$$2;
        if(v883) {
          v883 = matchPosition$$2 < upperLimit$$2
        }
        var v482 = v883;
        if(v482) {
          matchPosition$$2 = matchPosition$$2 - shiftValue$$2;
          var v478 = matchPosition$$2 == 0;
          if(v478) {
            matchPosition$$2 = originalLength$$1
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1092 = primers$$2[i$$17]
          }
          var v884 = v1092.name;
          var v885 = matchArray$$4[0];
          var v479 = new Match(v884, v885, matchPosition$$2);
          JAMScript.call(matchCollection.addMatch, matchCollection, [v479]);
          if(isReverseStrand) {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v480 = primers$$2[i$$17]
            }
            v480.hasReverseMatch = true
          }else {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v481 = primers$$2[i$$17]
            }
            v481.hasForwardMatch = true
          }
        }
        var v886 = re$$4.lastIndex;
        var v1093 = RegExp.lastMatch;
        var v887 = v1093.length;
        var v483 = v886 - v887;
        re$$4.lastIndex = v483 + 1;
        v484 = matchArray$$4 = re$$4.exec(sequence$$19)
      }
      i$$17 = i$$17 + 1;
      var v888 = primers$$2.length;
      v485 = i$$17 < v888
    }
  }else {
    i$$17 = 0;
    var v889 = primers$$2.length;
    var v492 = i$$17 < v889;
    for(;v492;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v486 = primers$$2[i$$17]
      }
      re$$4 = v486.re;
      var v491 = matchArray$$4 = re$$4.exec(sequence$$19);
      for(;v491;) {
        matchPosition$$2 = re$$4.lastIndex;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1094 = primers$$2[i$$17]
        }
        var v890 = v1094.name;
        var v891 = matchArray$$4[0];
        var v487 = new Match(v890, v891, matchPosition$$2);
        JAMScript.call(matchCollection.addMatch, matchCollection, [v487]);
        if(isReverseStrand) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v488 = primers$$2[i$$17]
          }
          v488.hasReverseMatch = true
        }else {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v489 = primers$$2[i$$17]
          }
          v489.hasForwardMatch = true
        }
        var v892 = re$$4.lastIndex;
        var v1095 = RegExp.lastMatch;
        var v893 = v1095.length;
        var v490 = v892 - v893;
        re$$4.lastIndex = v490 + 1;
        v491 = matchArray$$4 = re$$4.exec(sequence$$19)
      }
      i$$17 = i$$17 + 1;
      var v894 = primers$$2.length;
      v492 = i$$17 < v894
    }
  }
  return matchCollection
}
function writeLayout(start$$4, stop) {
  var i$$18 = 0;
  var v1096 = this.components;
  var v895 = v1096.length;
  var v495 = i$$18 < v895;
  for(;v495;) {
    var v896 = this.components;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v494 = v896[i$$18]
    }
    JAMScript.call(v494.writeLayoutComponent, v494, [start$$4, stop]);
    i$$18 = i$$18 + 1;
    var v1097 = this.components;
    var v897 = v1097.length;
    v495 = i$$18 < v897
  }
  return
}
function addComponent(component) {
  var v496 = this.components;
  v496.push(component);
  return
}
function TextLayout() {
  var v1867 = new Array;
  this.components = v1867;
  return
}
function writeLayoutComponent(start$$5, stop$$1) {
  return
}
function setCharacters(text$$14) {
  var v898 = text$$14.search(/./);
  var v497 = v898 != -1;
  if(v497) {
    var v1868 = text$$14.match(/./g);
    this.characters = v1868
  }
  return
}
function isRoom(start$$6, stop$$2) {
  var v498 = this.characters;
  var rangeToCheck = v498.slice(start$$6, stop$$2);
  rangeToCheck = rangeToCheck.join("");
  var v899 = rangeToCheck.search(/\w/);
  var v499 = v899 == -1;
  if(v499) {
    return true
  }else {
    return false
  }
  return
}
function LayoutComponent() {
  var v1869 = new Array;
  this.characters = v1869;
  this.positionLabel = 1;
  return
}
function TranslationComponent() {
  var v1870 = new Array;
  this.characters = v1870;
  this.positionLabel = 1;
  return
}
function UppercaseTranslationComponent() {
  var v1871 = new Array;
  this.characters = v1871;
  this.positionLabel = 1;
  return
}
function DnaComponent() {
  var v1872 = new Array;
  this.characters = v1872;
  this.positionLabel = 1;
  return
}
function RulerComponent() {
  var v1873 = new Array;
  this.characters = v1873;
  this.positionLabel = 1;
  return
}
function buildRuler() {
  function v4(str$$12, p1$$6, offset$$18, s$$8) {
    var ruler$$1 = count$$6 + spacing;
    var v500 = count$$6 == 0;
    if(v500) {
      ruler$$1 = spacing
    }
    count$$6 = count$$6 + 10;
    return ruler$$1.substring(0, 10)
  }
  var v501 = this.characters;
  var sequence$$20 = v501.join("");
  var count$$6 = 0;
  var spacing = "         ";
  sequence$$20 = sequence$$20.replace(/(.{1,10})/g, v4);
  var v1874 = sequence$$20.match(/./g);
  this.characters = v1874;
  return
}
function RestrictionSite(label$$3, position) {
  this.label = label$$3;
  this.position = position;
  return
}
function addRestrictionSite(restrictionSite) {
  var v502 = this.restrictionSites;
  v502.push(restrictionSite);
  return
}
function sortRestrictionSites() {
  var v503 = this.restrictionSites;
  v503.sort(restrictionSiteSorter);
  return
}
function getSitesInRange(start$$11, stop$$7) {
  var arrayToReturn = new Array;
  var v900 = this.restrictionSites;
  var v504 = v900.length;
  var i$$19 = v504 - 1;
  var v507 = i$$19 >= 0;
  for(;v507;) {
    var v1325 = this.restrictionSites;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1233 = v1325[i$$19]
    }
    var v1098 = v1233.position;
    var v901 = v1098 >= start$$11;
    if(v901) {
      var v1326 = this.restrictionSites;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1234 = v1326[i$$19]
      }
      var v1099 = v1234.position;
      v901 = v1099 < stop$$7
    }
    var v506 = v901;
    if(v506) {
      var v902 = this.restrictionSites;
      var v505 = v902.pop();
      arrayToReturn.push(v505)
    }else {
      break
    }
    i$$19 = i$$19 - 1;
    v507 = i$$19 >= 0
  }
  return arrayToReturn
}
function RestrictionSiteCollection() {
  var v1875 = new Array;
  this.restrictionSites = v1875;
  return
}
function restrictionSiteSorter(a, b) {
  var v903 = a.position;
  var v904 = b.position;
  var v508 = v903 < v904;
  if(v508) {
    return 1
  }
  var v905 = a.position;
  var v906 = b.position;
  var v509 = v905 > v906;
  if(v509) {
    return-1
  }else {
    return 0
  }
  return
}
function Primer(sequence$$21, re$$5, name$$31) {
  this.sequence = sequence$$21;
  this.re = re$$5;
  this.name = name$$31;
  this.hasForwardMatch = false;
  this.hasReverseMatch = false;
  return
}
function Match(primerName$$1, matchingText, position$$1) {
  this.primerName = primerName$$1;
  this.matchingText = matchingText;
  this.position = position$$1;
  return
}
function addMatch(match) {
  var v510 = this.matches;
  v510.push(match);
  return
}
function sortMatches() {
  var v511 = this.matches;
  v511.sort(matchSorter);
  return
}
function getMatchesInRange(start$$12, stop$$8) {
  var arrayToReturn$$1 = new Array;
  var v907 = this.matches;
  var v512 = v907.length;
  var i$$20 = v512 - 1;
  var v515 = i$$20 >= 0;
  for(;v515;) {
    var v1327 = this.matches;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1235 = v1327[i$$20]
    }
    var v1100 = v1235.position;
    var v908 = v1100 >= start$$12;
    if(v908) {
      var v1328 = this.matches;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1236 = v1328[i$$20]
      }
      var v1101 = v1236.position;
      v908 = v1101 < stop$$8
    }
    var v514 = v908;
    if(v514) {
      var v909 = this.matches;
      var v513 = v909.pop();
      arrayToReturn$$1.push(v513)
    }else {
      break
    }
    i$$20 = i$$20 - 1;
    v515 = i$$20 >= 0
  }
  return arrayToReturn$$1
}
function MatchCollection() {
  var v1876 = new Array;
  this.matches = v1876;
  return
}
function matchSorter(a$$1, b$$1) {
  var v910 = a$$1.position;
  var v911 = b$$1.position;
  var v516 = v910 < v911;
  if(v516) {
    return 1
  }
  var v912 = a$$1.position;
  var v913 = b$$1.position;
  var v517 = v912 > v913;
  if(v517) {
    return-1
  }else {
    return 0
  }
  return
}
new TextLayout;
var v518 = TextLayout.prototype;
v518.writeLayout = writeLayout;
var v519 = TextLayout.prototype;
v519.addComponent = addComponent;
new LayoutComponent;
var v520 = LayoutComponent.prototype;
v520.writeLayoutComponent = writeLayoutComponent;
var v521 = LayoutComponent.prototype;
v521.setCharacters = setCharacters;
var v522 = LayoutComponent.prototype;
v522.isRoom = isRoom;
var v523 = TranslationComponent;
var v1877 = new LayoutComponent;
v523.prototype = v1877;
var v524 = TranslationComponent.prototype;
v524.writeLayoutComponent = v5;
var v525 = UppercaseTranslationComponent;
var v1878 = new LayoutComponent;
v525.prototype = v1878;
var v526 = UppercaseTranslationComponent.prototype;
v526.writeLayoutComponent = v6;
var v527 = DnaComponent;
var v1879 = new LayoutComponent;
v527.prototype = v1879;
var v528 = DnaComponent.prototype;
v528.writeLayoutComponent = v7;
var v529 = RulerComponent;
var v1880 = new LayoutComponent;
v529.prototype = v1880;
var v530 = RulerComponent.prototype;
v530.writeLayoutComponent = v10;
new RulerComponent;
var v531 = RulerComponent.prototype;
v531.buildRuler = buildRuler;
new RestrictionSiteCollection;
var v532 = RestrictionSiteCollection.prototype;
v532.addRestrictionSite = addRestrictionSite;
var v533 = RestrictionSiteCollection.prototype;
v533.sortRestrictionSites = sortRestrictionSites;
var v534 = RestrictionSiteCollection.prototype;
v534.getSitesInRange = getSitesInRange;
new MatchCollection;
var v535 = MatchCollection.prototype;
v535.addMatch = addMatch;
var v536 = MatchCollection.prototype;
v536.sortMatches = sortMatches;
var v537 = MatchCollection.prototype;
v537.getMatchesInRange = getMatchesInRange;
JAMScript.set(document, "onload", v11);
var v538 = document.getElementById("submitbtn");
JAMScript.set(v538, "onclick", v12);
var v539 = document.getElementById("clearbtn");
JAMScript.set(v539, "onclick", v13);

