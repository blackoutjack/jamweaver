function v9() {
  var v1012 = document.forms;
  var v851 = v1012[0];
  var v501 = v851.elements;
  var v10 = v501[0];
  v10.value = " ";
  var v1013 = document.forms;
  var v852 = v1013[0];
  var v502 = v852.elements;
  var v11 = v502[4];
  v11.value = " ";
  return
}
function v8() {
  try {
    mutateForDigest(document)
  }catch(e$$5) {
    var v12 = "The following error was encountered: " + e$$5;
    alert(v12)
  }
  return
}
function v7() {
  var v503 = document.main_form;
  var v13 = v503.main_submit;
  v13.focus();
  return
}
function v6(start$$9, stop$$5) {
  var v14 = outputWindow.document;
  var v504 = this.positionLabel;
  var v15 = rightNum(v504, "", 8, "");
  JAMScript.call(v14.write, v14, [v15]);
  var v16 = outputWindow.document;
  var v17 = this.spanStart;
  JAMScript.call(v16.write, v16, [v17]);
  var v18 = outputWindow.document;
  var v853 = this.characters;
  var v505 = v853.slice(start$$9, stop$$5);
  var v19 = v505.join("");
  JAMScript.call(v18.write, v18, [v19]);
  var v20 = outputWindow.document;
  var v506 = this.spanEnd;
  var v21 = v506 + "\n";
  JAMScript.call(v20.write, v20, [v21]);
  var v22 = this.positionLabel;
  var v23 = stop$$5 - start$$9;
  this.positionLabel = v22 + v23;
  return
}
function v5(start$$8, stop$$4) {
  var v507 = this.characters;
  var v24 = v507.slice(start$$8, stop$$4);
  var textToWrite = v24.join("");
  var v508 = textToWrite.search(/\w/);
  var v34 = v508 != -1;
  if(v34) {
    var v25 = outputWindow.document;
    var v509 = this.positionLabel;
    var v26 = rightNum(v509, "", 8, "");
    JAMScript.call(v25.write, v25, [v26]);
    var v27 = outputWindow.document;
    var v28 = this.spanStart;
    JAMScript.call(v27.write, v27, [v28]);
    var v29 = this.positionLabel;
    var v510 = textToWrite.match(/[A-Z]/g);
    var v30 = v510.length;
    this.positionLabel = v29 + v30;
    var v31 = outputWindow.document;
    JAMScript.call(v31.write, v31, [textToWrite]);
    var v32 = outputWindow.document;
    var v511 = this.spanEnd;
    var v33 = v511 + "\n";
    JAMScript.call(v32.write, v32, [v33])
  }
  return
}
function v4(start$$7, stop$$3) {
  var v35 = outputWindow.document;
  var v512 = this.positionLabel;
  var v36 = rightNum(v512, "", 8, "");
  JAMScript.call(v35.write, v35, [v36]);
  var v37 = outputWindow.document;
  var v38 = this.spanStart;
  JAMScript.call(v37.write, v37, [v38]);
  var v39 = outputWindow.document;
  var v854 = this.characters;
  var v513 = v854.slice(start$$7, stop$$3);
  var v40 = v513.join("");
  JAMScript.call(v39.write, v39, [v40]);
  var v41 = outputWindow.document;
  var v514 = this.spanEnd;
  var v42 = v514 + "\n";
  JAMScript.call(v41.write, v41, [v42]);
  var v43 = this.positionLabel;
  var v515 = stop$$3 - start$$7;
  var v44 = v515 / 3;
  this.positionLabel = v43 + v44;
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
  var v45 = arrayOfSequences[0];
  var lengthOfAlign = v45.length;
  var v516 = arrayOfSequences.length;
  var v46 = v516 < 2;
  if(v46) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v517 = arrayOfTitles.length;
  var v48 = i$$1 < v517;
  for(;v48;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1014 = arrayOfTitles[i$$1]
    }
    var v855 = v1014.search(/\S/);
    var v518 = v855 == -1;
    var v857 = !v518;
    if(v857) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1108 = arrayOfSequences[i$$1]
      }
      var v1015 = v1108.search(/\S/);
      var v856 = v1015 == -1;
      var v1017 = !v856;
      if(v1017) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1109 = arrayOfSequences[i$$1]
        }
        var v1016 = v1109.length;
        v856 = v1016 != lengthOfAlign
      }
      v518 = v856
    }
    var v47 = v518;
    if(v47) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v519 = arrayOfTitles.length;
    v48 = i$$1 < v519
  }
  return true
}
function checkCodonTable(codonTable) {
  var v858 = codonTable.search(/AmAcid/);
  var v520 = v858 == -1;
  var v860 = !v520;
  if(v860) {
    var v1018 = codonTable.search(/Codon/);
    var v859 = v1018 == -1;
    var v1020 = !v859;
    if(v1020) {
      var v1110 = codonTable.search(/Number/);
      var v1019 = v1110 == -1;
      var v1112 = !v1019;
      if(v1112) {
        var v1171 = codonTable.search(/\/1000/);
        var v1111 = v1171 == -1;
        var v1173 = !v1111;
        if(v1173) {
          var v1172 = codonTable.search(/Fraction\s*\.\./);
          v1111 = v1172 == -1
        }
        v1019 = v1111
      }
      v859 = v1019
    }
    v520 = v859
  }
  var v49 = v520;
  if(v49) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v861 = formElement.value;
  var v521 = v861.search(/\S/);
  var v50 = v521 == -1;
  if(v50) {
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
  var v522 = arrayOfPatterns.length;
  var v53 = z$$2 < v522;
  for(;v53;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v862 = arrayOfPatterns[z$$2]
    }
    var v523 = v862.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v51 = v523 == -1;
    if(v51) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v863 = arrayOfPatterns[z$$2]
    }
    var v524 = moreExpressionCheck(v863);
    var v52 = v524 == false;
    if(v52) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v525 = arrayOfPatterns.length;
    v53 = z$$2 < v525
  }
  var v54 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v54);
  var v55 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v55);
  var j = 0;
  var v526 = arrayOfPatterns.length;
  var v62 = j < v526;
  for(;v62;) {
    var v56 = geneticCodeMatchExp;
    var v57 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1021 = arrayOfPatterns[j]
    }
    var v864 = v1021.match(/\/.+\//);
    var v527 = v864 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1517 = eval("introspect(JAMScript.introspectors.processAll) { " + v527 + " }")
    }else {
      var v1517 = JAMScript.call(eval, null, [v527])
    }
    v56[v57] = v1517;
    var v58 = geneticCodeMatchResult;
    var v59 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v865 = arrayOfPatterns[j]
    }
    var v528 = v865.match(/=[a-zA-Z\*]/);
    var v1518 = v528.toString();
    v58[v59] = v1518;
    var v60 = geneticCodeMatchResult;
    var v61 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v529 = geneticCodeMatchResult[j]
    }
    var v1519 = v529.replace(/=/g, "");
    v60[v61] = v1519;
    j = j + 1;
    var v530 = arrayOfPatterns.length;
    v62 = j < v530
  }
  var i$$2 = 0;
  var v866 = testSequence.length;
  var v531 = v866 - 3;
  var v69 = i$$2 <= v531;
  for(;v69;) {
    var v63 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v63);
    j = 0;
    var v532 = geneticCodeMatchExp.length;
    var v67 = j < v532;
    for(;v67;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v867 = geneticCodeMatchExp[j]
      }
      var v533 = codon.search(v867);
      var v66 = v533 != -1;
      if(v66) {
        var v65 = oneMatch == true;
        if(v65) {
          var v534 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v64 = v534 + ".";
          alert(v64);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v535 = geneticCodeMatchExp.length;
      v67 = j < v535
    }
    var v68 = oneMatch == false;
    if(v68) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v868 = testSequence.length;
    var v536 = v868 - 3;
    v69 = i$$2 <= v536
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v537 = arrayOfPatterns$$1.length;
  var v71 = z$$3 < v537;
  for(;v71;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v869 = arrayOfPatterns$$1[z$$3]
    }
    var v538 = v869.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v70 = v538 != -1;
    if(v70) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v539 = arrayOfPatterns$$1.length;
    v71 = z$$3 < v539
  }
  var i$$3 = 0;
  var v540 = arrayOfPatterns$$1.length;
  var v75 = i$$3 < v540;
  for(;v75;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v870 = arrayOfPatterns$$1[i$$3]
    }
    var v541 = "[" + v870;
    var v72 = v541 + "]";
    var re = new RegExp(v72, "gi");
    var j$$1 = i$$3 + 1;
    var v542 = arrayOfPatterns$$1.length;
    var v74 = j$$1 < v542;
    for(;v74;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v871 = arrayOfPatterns$$1[j$$1]
      }
      var v543 = v871.search(re);
      var v73 = v543 != -1;
      if(v73) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v544 = arrayOfPatterns$$1.length;
      v74 = j$$1 < v544
    }
    i$$3 = i$$3 + 1;
    var v545 = arrayOfPatterns$$1.length;
    v75 = i$$3 < v545
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v546 = arrayOfPatterns$$2.length;
  var v78 = z$$4 < v546;
  for(;v78;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v872 = arrayOfPatterns$$2[z$$4]
    }
    var v547 = v872.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v76 = v547 == -1;
    if(v76) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v873 = arrayOfPatterns$$2[z$$4]
    }
    var v548 = moreExpressionCheck(v873);
    var v77 = v548 == false;
    if(v77) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v549 = arrayOfPatterns$$2.length;
    v78 = z$$4 < v549
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v1022 = getSequenceFromFasta(text$$7);
  var v874 = v1022.replace(/[^A-Za-z]/g, "");
  var v550 = v874.length;
  var v80 = v550 > maxInput;
  if(v80) {
    var v551 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v79 = v551 + " characters.";
    alert(v79);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v552 = text$$8.length;
  var v82 = v552 > maxInput$$1;
  if(v82) {
    var v553 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v81 = v553 + " characters.";
    alert(v81);
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
  var v83 = outputWindow.document;
  JAMScript.call(v83.write, v83, ["</form>"]);
  return true
}
function closePre() {
  var v84 = outputWindow.document;
  JAMScript.call(v84.write, v84, ["</div>"]);
  var v85 = outputWindow.document;
  JAMScript.call(v85.write, v85, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v86 = outputWindow.document;
  JAMScript.call(v86.write, v86, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v87 = outputWindow.document;
  JAMScript.call(v87.write, v87, ["</body>\n</html>\n"]);
  outputWindow.status = "Done.";
  var v88 = outputWindow.document;
  v88.close();
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
  var v554 = alignArray.length;
  var v89 = v554 < 3;
  if(v89) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v555 = alignArray.length;
  var v91 = i$$4 < v555;
  for(;v91;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v875 = alignArray[i$$4]
    }
    var v556 = v875.search(/[^\s]+\s/);
    var v90 = v556 == -1;
    if(v90) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v557 = alignArray.length;
    v91 = i$$4 < v557
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
  var v558 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v94 = v558 != -1;
  if(v94) {
    var v93 = matchArray = re$$1.exec(sequenceData);
    for(;v93;) {
      var v92 = matchArray[0];
      arrayOfFasta.push(v92);
      v93 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v559 = sequence$$2.length;
  var v95 = "&gt;results for " + v559;
  var stringToReturn = v95 + " residue sequence ";
  var v560 = fastaSequenceTitle.search(/[^\s]/);
  var v97 = v560 != -1;
  if(v97) {
    var v561 = stringToReturn + '"';
    var v96 = v561 + fastaSequenceTitle;
    stringToReturn = v96 + '"'
  }
  var v562 = stringToReturn + ' starting "';
  var v563 = sequence$$2.substring(0, 10);
  var v98 = v562 + v563;
  stringToReturn = v98 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v564 = sequenceOne.length;
  var v99 = "Search results for " + v564;
  var stringToReturn$$1 = v99 + " residue sequence ";
  var v565 = fastaSequenceTitleOne.search(/[^\s]/);
  var v101 = v565 != -1;
  if(v101) {
    var v566 = stringToReturn$$1 + '"';
    var v100 = v566 + fastaSequenceTitleOne;
    stringToReturn$$1 = v100 + '"'
  }
  var v567 = stringToReturn$$1 + ' starting "';
  var v568 = sequenceOne.substring(0, 10);
  var v102 = v567 + v568;
  stringToReturn$$1 = v102 + '"\n';
  var v569 = stringToReturn$$1 + "and ";
  var v570 = sequenceTwo.length;
  var v103 = v569 + v570;
  stringToReturn$$1 = v103 + " residue sequence ";
  var v571 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v105 = v571 != -1;
  if(v105) {
    var v572 = stringToReturn$$1 + '"';
    var v104 = v572 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v104 + '"'
  }
  var v573 = stringToReturn$$1 + ' starting "';
  var v574 = sequenceTwo.substring(0, 10);
  var v106 = v573 + v574;
  stringToReturn$$1 = v106 + '"';
  var v107 = '<div class="info">' + stringToReturn$$1;
  return v107 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v108 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v108);
  var j$$2 = 0;
  var v575 = arrayOfPatterns$$3.length;
  var v111 = j$$2 < v575;
  for(;v111;) {
    var v109 = geneticCodeMatchExp$$1;
    var v110 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1023 = arrayOfPatterns$$3[j$$2]
    }
    var v876 = v1023.match(/\/.+\//);
    var v576 = v876 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1520 = eval("introspect(JAMScript.introspectors.processAll) { " + v576 + " }")
    }else {
      var v1520 = JAMScript.call(eval, null, [v576])
    }
    v109[v110] = v1520;
    j$$2 = j$$2 + 1;
    var v577 = arrayOfPatterns$$3.length;
    v111 = j$$2 < v577
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v112 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v112);
  var j$$3 = 0;
  var v578 = arrayOfPatterns$$4.length;
  var v117 = j$$3 < v578;
  for(;v117;) {
    var v113 = geneticCodeMatchResult$$1;
    var v114 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v877 = arrayOfPatterns$$4[j$$3]
    }
    var v579 = v877.match(/=[a-zA-Z\*]/);
    var v1521 = v579.toString();
    v113[v114] = v1521;
    var v115 = geneticCodeMatchResult$$1;
    var v116 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v580 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1522 = v580.replace(/=/g, "");
    v115[v116] = v1522;
    j$$3 = j$$3 + 1;
    var v581 = arrayOfPatterns$$4.length;
    v117 = j$$3 < v581
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v582 = sequence$$3.length;
  var v118 = "Results for " + v582;
  var stringToReturn$$2 = v118 + " residue sequence ";
  var v583 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v120 = v583 != -1;
  if(v120) {
    var v584 = stringToReturn$$2 + '"';
    var v119 = v584 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v119 + '"'
  }
  var v585 = stringToReturn$$2 + ' starting "';
  var v586 = sequence$$3.substring(0, 10);
  var v121 = v585 + v586;
  stringToReturn$$2 = v121 + '"';
  var v122 = '<div class="info">' + stringToReturn$$2;
  return v122 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v878 = "Results for " + topology;
  var v587 = v878 + " ";
  var v588 = sequence$$4.length;
  var v123 = v587 + v588;
  var stringToReturn$$3 = v123 + " residue sequence ";
  var v589 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v125 = v589 != -1;
  if(v125) {
    var v590 = stringToReturn$$3 + '"';
    var v124 = v590 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v124 + '"'
  }
  var v591 = stringToReturn$$3 + ' starting "';
  var v592 = sequence$$4.substring(0, 10);
  var v126 = v591 + v592;
  stringToReturn$$3 = v126 + '"';
  var v127 = '<div class="info">' + stringToReturn$$3;
  return v127 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v593 = sequenceOne$$1.length;
  var v128 = "Alignment results for " + v593;
  var stringToReturn$$4 = v128 + " residue sequence ";
  var v594 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v130 = v594 != -1;
  if(v130) {
    var v595 = stringToReturn$$4 + '"';
    var v129 = v595 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v129 + '"'
  }
  var v596 = stringToReturn$$4 + ' starting "';
  var v597 = sequenceOne$$1.substring(0, 10);
  var v131 = v596 + v597;
  stringToReturn$$4 = v131 + '"\n';
  var v598 = stringToReturn$$4 + "and ";
  var v599 = sequenceTwo$$1.length;
  var v132 = v598 + v599;
  stringToReturn$$4 = v132 + " residue sequence ";
  var v600 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v134 = v600 != -1;
  if(v134) {
    var v601 = stringToReturn$$4 + '"';
    var v133 = v601 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v133 + '"'
  }
  var v602 = stringToReturn$$4 + ' starting "';
  var v603 = sequenceTwo$$1.substring(0, 10);
  var v135 = v602 + v603;
  stringToReturn$$4 = v135 + '"';
  var v136 = '<div class="info">' + stringToReturn$$4;
  return v136 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v138 = j$$4 < lengthOut;
  for(;v138;) {
    var v604 = Math.random();
    var v605 = components.length;
    var v137 = v604 * v605;
    tempNum = Math.floor(v137);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v138 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v606 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v139 = v606 != -1;
  if(v139) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v607 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v141 = v607 != -1;
  if(v141) {
    var v140 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v140.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v879 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v608 = v879 != -1;
  var v881 = !v608;
  if(v881) {
    var v1024 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v880 = v1024 != -1;
    var v1026 = !v880;
    if(v1026) {
      var v1113 = expressionToCheck.search(/\[\]/);
      var v1025 = v1113 != -1;
      var v1115 = !v1025;
      if(v1115) {
        var v1174 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v1114 = v1174 != -1;
        var v1176 = !v1114;
        if(v1176) {
          var v1216 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1175 = v1216 != -1;
          var v1218 = !v1175;
          if(v1218) {
            var v1253 = expressionToCheck.search(/\|\|/);
            var v1217 = v1253 != -1;
            var v1255 = !v1217;
            if(v1255) {
              var v1283 = expressionToCheck.search(/\/\|/);
              var v1254 = v1283 != -1;
              var v1285 = !v1254;
              if(v1285) {
                var v1309 = expressionToCheck.search(/\|\//);
                var v1284 = v1309 != -1;
                var v1311 = !v1284;
                if(v1311) {
                  var v1335 = expressionToCheck.search(/\[.\]/);
                  var v1310 = v1335 != -1;
                  var v1337 = !v1310;
                  if(v1337) {
                    var v1359 = expressionToCheck.search(/\</);
                    var v1336 = v1359 != -1;
                    var v1361 = !v1336;
                    if(v1361) {
                      var v1360 = expressionToCheck.search(/\>/);
                      v1336 = v1360 != -1
                    }
                    v1310 = v1336
                  }
                  v1284 = v1310
                }
                v1254 = v1284
              }
              v1217 = v1254
            }
            v1175 = v1217
          }
          v1114 = v1175
        }
        v1025 = v1114
      }
      v880 = v1025
    }
    v608 = v880
  }
  var v142 = v608;
  if(v142) {
    return false
  }
  return true
}
function openForm() {
  var v143 = outputWindow.document;
  JAMScript.call(v143.write, v143, ['<form action="">\n']);
  return true
}
function openPre() {
  var v144 = outputWindow.document;
  JAMScript.call(v144.write, v144, ["<pre>"]);
  var v145 = outputWindow.document;
  JAMScript.call(v145.write, v145, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v146 = outputWindow.document;
  JAMScript.call(v146.write, v146, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1533 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1533[2], v1533[1], v1533[0]);
  outputWindow.focus();
  var v147 = outputWindow.document;
  var v1027 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v882 = v1027 + "<head>\n";
  var v609 = v882 + "<title>Sequence Manipulation Suite</title>\n";
  var v148 = v609 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v147.write, v147, [v148]);
  if(isColor) {
    var v149 = outputWindow.document;
    var v1425 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1404 = v1425 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1383 = v1404 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1362 = v1383 + "div.info {font-weight: bold}\n";
    var v1338 = v1362 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1312 = v1338 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1286 = v1312 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1256 = v1286 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1219 = v1256 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1177 = v1219 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1116 = v1177 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1028 = v1116 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v883 = v1028 + "td.many {color: #000000}\n";
    var v610 = v883 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v150 = v610 + "</style>\n";
    JAMScript.call(v149.write, v149, [v150])
  }else {
    var v151 = outputWindow.document;
    var v1446 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1426 = v1446 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1405 = v1426 + "div.title {display: none}\n";
    var v1384 = v1405 + "div.info {font-weight: bold}\n";
    var v1363 = v1384 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1339 = v1363 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1313 = v1339 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1287 = v1313 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1257 = v1287 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1220 = v1257 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1178 = v1220 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1117 = v1178 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1029 = v1117 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v884 = v1029 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v611 = v884 + "img {display: none}\n";
    var v152 = v611 + "</style>\n";
    JAMScript.call(v151.write, v151, [v152])
  }
  var v153 = outputWindow.document;
  var v1030 = "</head>\n" + '<body class="main">\n';
  var v885 = v1030 + '<div class="title">';
  var v612 = v885 + title$$6;
  var v154 = v612 + " results</div>\n";
  JAMScript.call(v153.write, v153, [v154]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1534 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1534[2], v1534[1], v1534[0]);
  outputWindow.focus();
  var v155 = outputWindow.document;
  var v1031 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v886 = v1031 + "<head>\n";
  var v613 = v886 + "<title>Sequence Manipulation Suite</title>\n";
  var v156 = v613 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v155.write, v155, [v156]);
  if(isBackground) {
    var v157 = outputWindow.document;
    var v1427 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1406 = v1427 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1385 = v1406 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1364 = v1385 + "div.info {font-weight: bold}\n";
    var v1340 = v1364 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1314 = v1340 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1288 = v1314 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1258 = v1288 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1221 = v1258 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1179 = v1221 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1118 = v1179 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1032 = v1118 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v887 = v1032 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v614 = v887 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v158 = v614 + "</style>\n";
    JAMScript.call(v157.write, v157, [v158])
  }else {
    var v159 = outputWindow.document;
    var v1465 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1447 = v1465 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1428 = v1447 + "div.title {display: none}\n";
    var v1407 = v1428 + "div.info {font-weight: bold}\n";
    var v1386 = v1407 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1365 = v1386 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1341 = v1365 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1315 = v1341 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1289 = v1315 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1259 = v1289 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1222 = v1259 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1180 = v1222 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1119 = v1180 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1033 = v1119 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v888 = v1033 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v615 = v888 + "img {display: none}\n";
    var v160 = v615 + "</style>\n";
    JAMScript.call(v159.write, v159, [v160])
  }
  var v161 = outputWindow.document;
  var v1034 = "</head>\n" + '<body class="main">\n';
  var v889 = v1034 + '<div class="title">';
  var v616 = v889 + title$$8;
  var v162 = v616 + " results</div>\n";
  JAMScript.call(v161.write, v161, [v162]);
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
  var v617 = dnaSequence$$1.search(/./);
  var v163 = v617 != -1;
  if(v163) {
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
  var v164 = j$$5 < lengthOfColumn;
  for(;v164;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v164 = j$$5 < lengthOfColumn
  }
  var v165 = tempString + theNumber;
  theNumber = v165 + " ";
  var v166 = sequenceToAppend + theNumber;
  sequenceToAppend = v166 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v618 = testArray[0];
  var v167 = v618 != testString;
  if(v167) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v619 = testString.search(re$$2);
  var v168 = v619 == -1;
  if(v168) {
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
  var v169 = !caughtException;
  if(v169) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v170 = testString != "1X2X3X";
  if(v170) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v620 = testNum.toFixed(3);
  var v171 = v620 != 2489.824;
  if(v171) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v621 = testNum.toPrecision(5);
  var v172 = v621 != 2489.8;
  if(v172) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v622 = theNumber$$1.search(/\d/);
  var v173 = v622 == -1;
  if(v173) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v890 = emblFile.search(/ID/);
  var v623 = v890 == -1;
  var v892 = !v623;
  if(v892) {
    var v1035 = emblFile.search(/AC/);
    var v891 = v1035 == -1;
    var v1037 = !v891;
    if(v1037) {
      var v1120 = emblFile.search(/DE/);
      var v1036 = v1120 == -1;
      var v1122 = !v1036;
      if(v1122) {
        var v1121 = emblFile.search(/SQ/);
        v1036 = v1121 == -1
      }
      v891 = v1036
    }
    v623 = v891
  }
  var v174 = v623;
  if(v174) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v624 = theNumber$$2.search(/\d/);
  var v175 = v624 == -1;
  if(v175) {
    alert("Please enter a number.");
    return false
  }
  var v177 = theNumber$$2 > maxInput$$2;
  if(v177) {
    var v625 = "Please enter a number less than or equal to " + maxInput$$2;
    var v176 = v625 + ".";
    alert(v176);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v626 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v178 = v626 != -1;
  if(v178) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v627 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v179 = v627 != -1;
  if(v179) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v893 = genBankFile.search(/LOCUS/);
  var v628 = v893 == -1;
  var v895 = !v628;
  if(v895) {
    var v1038 = genBankFile.search(/DEFINITION/);
    var v894 = v1038 == -1;
    var v1040 = !v894;
    if(v1040) {
      var v1123 = genBankFile.search(/ACCESSION/);
      var v1039 = v1123 == -1;
      var v1125 = !v1039;
      if(v1125) {
        var v1124 = genBankFile.search(/ORIGIN/);
        v1039 = v1124 == -1
      }
      v894 = v1039
    }
    v628 = v894
  }
  var v180 = v628;
  if(v180) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v896 = genBankFile$$1.search(/LOCUS/);
  var v629 = v896 == -1;
  var v898 = !v629;
  if(v898) {
    var v1041 = genBankFile$$1.search(/DEFINITION/);
    var v897 = v1041 == -1;
    var v1043 = !v897;
    if(v1043) {
      var v1126 = genBankFile$$1.search(/ACCESSION/);
      var v1042 = v1126 == -1;
      var v1128 = !v1042;
      if(v1128) {
        var v1127 = genBankFile$$1.search(/ORIGIN/);
        v1042 = v1127 == -1
      }
      v897 = v1042
    }
    v629 = v897
  }
  var v181 = v629;
  if(v181) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v630 = genBankFile$$1.search(/FEATURES {13}/);
  var v182 = v630 == -1;
  if(v182) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v899 = emblFile$$1.search(/ID/);
  var v631 = v899 == -1;
  var v901 = !v631;
  if(v901) {
    var v1044 = emblFile$$1.search(/AC/);
    var v900 = v1044 == -1;
    var v1046 = !v900;
    if(v1046) {
      var v1129 = emblFile$$1.search(/DE/);
      var v1045 = v1129 == -1;
      var v1131 = !v1045;
      if(v1131) {
        var v1130 = emblFile$$1.search(/SQ/);
        v1045 = v1130 == -1
      }
      v900 = v1045
    }
    v631 = v900
  }
  var v183 = v631;
  if(v183) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v632 = emblFile$$1.search(/^FT/m);
  var v184 = v632 == -1;
  if(v184) {
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
  var v192 = i$$5 < stopBase;
  for(;v192;) {
    var v185 = i$$5 + 1;
    lineOfText = rightNum(v185, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v633 = basePerLine / groupSize;
    var v189 = j$$6 <= v633;
    for(;v189;) {
      var v188 = k < groupSize;
      for(;v188;) {
        var v186 = lineOfText;
        var v634 = k + i$$5;
        var v187 = text$$10.charAt(v634);
        lineOfText = v186 + v187;
        k = k + 1;
        v188 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v635 = basePerLine / groupSize;
      v189 = j$$6 <= v635
    }
    var v190 = outputWindow.document;
    var v191 = lineOfText + "\n";
    JAMScript.call(v190.write, v190, [v191]);
    lineOfText = "";
    v192 = i$$5 < stopBase
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
    var v636 = adjustment < 0;
    if(v636) {
      v636 = adjusted >= 0
    }
    var v193 = v636;
    if(v193) {
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
  var v226 = i$$6 < stopBase$$2;
  for(;v226;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v637 = basePerLine$$2 / groupSize$$2;
    var v202 = j$$7 <= v637;
    for(;v202;) {
      var v197 = k$$1 < groupSize$$2;
      for(;v197;) {
        var v638 = i$$6 + k$$1;
        var v194 = v638 >= stopBase$$2;
        if(v194) {
          break
        }
        var v195 = lineOfText$$1;
        var v639 = k$$1 + i$$6;
        var v196 = text$$12.charAt(v639);
        lineOfText$$1 = v195 + v196;
        k$$1 = k$$1 + 1;
        v197 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v200 = numberPosition$$1 == "above";
      if(v200) {
        var v198 = aboveNum;
        var v640 = adjustNumbering(i$$6, numberingAdjustment);
        var v199 = rightNum(v640, "", groupSize$$2, tabIn$$3);
        aboveNum = v198 + v199
      }
      var v201 = i$$6 >= stopBase$$2;
      if(v201) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v641 = basePerLine$$2 / groupSize$$2;
      v202 = j$$7 <= v641
    }
    var v225 = numberPosition$$1 == "left";
    if(v225) {
      var v203 = outputWindow.document;
      var v1047 = adjustNumbering(lineNum, numberingAdjustment);
      var v902 = rightNum(v1047, "", 8, tabIn$$3);
      var v642 = v902 + lineOfText$$1;
      var v204 = v642 + "\n";
      JAMScript.call(v203.write, v203, [v204]);
      var v208 = strands$$1 == "two";
      if(v208) {
        var v205 = outputWindow.document;
        var v1048 = adjustNumbering(lineNum, numberingAdjustment);
        var v903 = rightNum(v1048, "", 8, tabIn$$3);
        var v904 = complement(lineOfText$$1);
        var v643 = v903 + v904;
        var v206 = v643 + "\n";
        JAMScript.call(v205.write, v205, [v206]);
        var v207 = outputWindow.document;
        JAMScript.call(v207.write, v207, ["\n"])
      }
    }else {
      var v224 = numberPosition$$1 == "right";
      if(v224) {
        var v209 = outputWindow.document;
        var v905 = lineOfText$$1;
        var v906 = adjustNumbering(i$$6, numberingAdjustment);
        var v644 = v905 + v906;
        var v210 = v644 + "\n";
        JAMScript.call(v209.write, v209, [v210]);
        var v214 = strands$$1 == "two";
        if(v214) {
          var v211 = outputWindow.document;
          var v907 = complement(lineOfText$$1);
          var v908 = adjustNumbering(i$$6, numberingAdjustment);
          var v645 = v907 + v908;
          var v212 = v645 + "\n";
          JAMScript.call(v211.write, v211, [v212]);
          var v213 = outputWindow.document;
          JAMScript.call(v213.write, v213, ["\n"])
        }
      }else {
        var v223 = numberPosition$$1 == "above";
        if(v223) {
          var v215 = outputWindow.document;
          var v216 = aboveNum + "\n";
          JAMScript.call(v215.write, v215, [v216]);
          var v217 = outputWindow.document;
          var v218 = lineOfText$$1 + "\n";
          JAMScript.call(v217.write, v217, [v218]);
          var v222 = strands$$1 == "two";
          if(v222) {
            var v219 = outputWindow.document;
            var v646 = complement(lineOfText$$1);
            var v220 = v646 + "\n";
            JAMScript.call(v219.write, v219, [v220]);
            var v221 = outputWindow.document;
            JAMScript.call(v221.write, v221, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v226 = i$$6 < stopBase$$2
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
  var v247 = i$$7 < stopBase$$3;
  for(;v247;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v647 = basePerLine$$3 / groupSize$$3;
    var v235 = j$$8 <= v647;
    for(;v235;) {
      var v230 = k$$2 < groupSize$$3;
      for(;v230;) {
        var v648 = i$$7 + k$$2;
        var v227 = v648 >= stopBase$$3;
        if(v227) {
          break
        }
        var v228 = lineOfText$$2;
        var v649 = k$$2 + i$$7;
        var v229 = text$$13.charAt(v649);
        lineOfText$$2 = v228 + v229;
        k$$2 = k$$2 + 1;
        v230 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v233 = numberPosition$$2 == "above";
      if(v233) {
        var v231 = aboveNum$$1;
        var v232 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v231 + v232
      }
      var v234 = i$$7 >= stopBase$$3;
      if(v234) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v650 = basePerLine$$3 / groupSize$$3;
      v235 = j$$8 <= v650
    }
    var v246 = numberPosition$$2 == "left";
    if(v246) {
      var v236 = outputWindow.document;
      var v909 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v651 = v909 + lineOfText$$2;
      var v237 = v651 + "\n";
      JAMScript.call(v236.write, v236, [v237])
    }else {
      var v245 = numberPosition$$2 == "right";
      if(v245) {
        var v238 = outputWindow.document;
        var v652 = lineOfText$$2 + i$$7;
        var v239 = v652 + "\n";
        JAMScript.call(v238.write, v238, [v239])
      }else {
        var v244 = numberPosition$$2 == "above";
        if(v244) {
          var v240 = outputWindow.document;
          var v241 = aboveNum$$1 + "\n";
          JAMScript.call(v240.write, v240, [v241]);
          var v242 = outputWindow.document;
          var v243 = lineOfText$$2 + "\n";
          JAMScript.call(v242.write, v242, [v243])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v247 = i$$7 < stopBase$$3
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
  var v910 = sequence$$13.length;
  var v653 = v910 <= firstIndexToMutate;
  var v912 = !v653;
  if(v912) {
    var v911 = lastIndexToMutate < 0;
    var v1049 = !v911;
    if(v1049) {
      v911 = lastIndexToMutate <= firstIndexToMutate
    }
    v653 = v911
  }
  var v248 = v653;
  if(v248) {
    numMut = 0
  }
  var i$$8 = 0;
  var v256 = i$$8 < numMut;
  for(;v256;) {
    maxNum = sequence$$13.length;
    var v654 = Math.random();
    var v249 = v654 * maxNum;
    randNum = Math.floor(v249);
    var v655 = randNum < firstIndexToMutate;
    var v913 = !v655;
    if(v913) {
      v655 = randNum > lastIndexToMutate
    }
    var v250 = v655;
    if(v250) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v256 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v656 = Math.random();
      var v657 = components$$1.length;
      var v251 = v656 * v657;
      componentsIndex = Math.round(v251);
      var v658 = components$$1.length;
      var v252 = componentsIndex == v658;
      if(v252) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v659 = components$$1[componentsIndex]
      }
      var v253 = v659 != currentChar;
      if(v253) {
        needNewChar = false
      }
    }
    var v660 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v661 = components$$1[componentsIndex]
    }
    var v254 = v660 + v661;
    var v662 = randNum + 1;
    var v663 = sequence$$13.length;
    var v255 = sequence$$13.substring(v662, v663);
    sequence$$13 = v254 + v255;
    i$$8 = i$$8 + 1;
    v256 = i$$8 < numMut
  }
  var v257 = outputWindow.document;
  var v258 = addReturns(sequence$$13);
  JAMScript.call(v257.write, v257, [v258]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v263 = j$$9 < lengthOut$$1;
  for(;v263;) {
    var v664 = Math.random();
    var v665 = components$$2.length;
    var v259 = v664 * v665;
    tempNum$$1 = Math.floor(v259);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v666 = sequence$$14.length;
    var v262 = v666 == 60;
    if(v262) {
      var v260 = outputWindow.document;
      var v261 = sequence$$14 + "\n";
      JAMScript.call(v260.write, v260, [v261]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v263 = j$$9 < lengthOut$$1
  }
  var v264 = outputWindow.document;
  var v265 = sequence$$14 + "\n";
  JAMScript.call(v264.write, v264, [v265]);
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
  var v269 = dnaConformation == "circular";
  if(v269) {
    var v266 = sequence$$15.substring(0, lookAhead);
    shiftValue = v266.length;
    var v1050 = sequence$$15.length;
    var v914 = v1050 - lookAhead;
    var v915 = sequence$$15.length;
    var v667 = sequence$$15.substring(v914, v915);
    var v267 = v667 + sequence$$15;
    var v268 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v267 + v268;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v270 = outputWindow.document;
  JAMScript.call(v270.write, v270, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v271 = outputWindow.document;
  var v1051 = '<tr><td class="title" width="200px">' + "Site:";
  var v916 = v1051 + '</td><td class="title">';
  var v668 = v916 + "Positions:";
  var v272 = v668 + "</td></tr>\n";
  JAMScript.call(v271.write, v271, [v272]);
  var i$$9 = 0;
  var v669 = arrayOfItems.length;
  var v288 = i$$9 < v669;
  for(;v288;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v670 = arrayOfItems[i$$9]
    }
    var v273 = v670.match(/\/.+\//);
    matchExp = v273 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1052 = arrayOfItems[i$$9]
    }
    var v917 = v1052.match(/\)\D*\d+/);
    var v671 = v917.toString();
    var v274 = v671.replace(/\)\D*/, "");
    cutDistance = parseFloat(v274);
    var v280 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v280;) {
      var v275 = matchExp.lastIndex;
      matchPosition = v275 - cutDistance;
      var v672 = matchPosition >= lowerLimit;
      if(v672) {
        v672 = matchPosition < upperLimit
      }
      var v278 = v672;
      if(v278) {
        timesFound = timesFound + 1;
        var v276 = tempString$$1 + ", ";
        var v673 = matchPosition - shiftValue;
        var v277 = v673 + 1;
        tempString$$1 = v276 + v277
      }
      var v674 = matchExp.lastIndex;
      var v918 = RegExp.lastMatch;
      var v675 = v918.length;
      var v279 = v674 - v675;
      matchExp.lastIndex = v279 + 1;
      v280 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v676 = tempString$$1.search(/\d/);
    var v281 = v676 != -1;
    if(v281) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v285 = timesFound == 0;
    if(v285) {
      backGroundClass = "none"
    }else {
      var v284 = timesFound == 1;
      if(v284) {
        backGroundClass = "one"
      }else {
        var v283 = timesFound == 2;
        if(v283) {
          backGroundClass = "two"
        }else {
          var v282 = timesFound == 3;
          if(v282) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v286 = outputWindow.document;
    var v1260 = '<tr><td class="' + backGroundClass;
    var v1223 = v1260 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1316 = arrayOfItems[i$$9]
    }
    var v1290 = v1316.match(/\([^\(]+\)/);
    var v1261 = v1290.toString();
    var v1224 = v1261.replace(/\(|\)/g, "");
    var v1181 = v1223 + v1224;
    var v1132 = v1181 + '</td><td class="';
    var v1053 = v1132 + backGroundClass;
    var v919 = v1053 + '">';
    var v677 = v919 + tempString$$1;
    var v287 = v677 + "</td></tr>\n";
    JAMScript.call(v286.write, v286, [v287]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v678 = arrayOfItems.length;
    v288 = i$$9 < v678
  }
  var v289 = outputWindow.document;
  JAMScript.call(v289.write, v289, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v290 = outputWindow.document;
  JAMScript.call(v290.write, v290, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v291 = outputWindow.document;
  var v1182 = '<tr><td class="title">' + "Pattern:";
  var v1133 = v1182 + '</td><td class="title">';
  var v1054 = v1133 + "Times found:";
  var v920 = v1054 + '</td><td class="title">';
  var v679 = v920 + "Percentage:";
  var v292 = v679 + "</td></tr>\n";
  JAMScript.call(v291.write, v291, [v292]);
  var i$$10 = 0;
  var v680 = arrayOfItems$$1.length;
  var v301 = i$$10 < v680;
  for(;v301;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v681 = arrayOfItems$$1[i$$10]
    }
    var v293 = v681.match(/\/[^\/]+\//);
    var matchExp$$1 = v293 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v682 = sequence$$16.search(matchExp$$1);
    var v295 = v682 != -1;
    if(v295) {
      var v294 = sequence$$16.match(matchExp$$1);
      tempNumber = v294.length
    }
    var percentage = 0;
    var v921 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1134 = arrayOfItems$$1[i$$10]
    }
    var v1055 = v1134.match(/\d+/);
    var v922 = parseFloat(v1055);
    var v683 = v921 - v922;
    var v298 = v683 > 0;
    if(v298) {
      var v296 = 100 * tempNumber;
      var v684 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1056 = arrayOfItems$$1[i$$10]
      }
      var v923 = v1056.match(/\d+/);
      var v685 = parseFloat(v923);
      var v297 = v684 - v685;
      percentage = v296 / v297
    }
    var v299 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1317 = arrayOfItems$$1[i$$10]
    }
    var v1291 = v1317.match(/\([^\(]+\)\b/);
    var v1262 = v1291.toString();
    var v1225 = v1262.replace(/\(|\)/g, "");
    var v1183 = "<tr><td>" + v1225;
    var v1135 = v1183 + "</td><td>";
    var v1057 = v1135 + tempNumber;
    var v924 = v1057 + "</td><td>";
    var v925 = percentage.toFixed(2);
    var v686 = v924 + v925;
    var v300 = v686 + "</td></tr>\n";
    JAMScript.call(v299.write, v299, [v300]);
    i$$10 = i$$10 + 1;
    var v687 = arrayOfItems$$1.length;
    v301 = i$$10 < v687
  }
  var v302 = outputWindow.document;
  JAMScript.call(v302.write, v302, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v688 = sequence$$17.length;
  var v309 = v688 > 0;
  for(;v309;) {
    maxNum$$1 = sequence$$17.length;
    var v689 = Math.random();
    var v303 = v689 * maxNum$$1;
    randNum$$1 = Math.floor(v303);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v304 = randNum$$1 + 1;
    var v305 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v304, v305);
    sequence$$17 = tempString1 + tempString2;
    var v690 = tempSeq.length;
    var v308 = v690 == 60;
    if(v308) {
      var v306 = outputWindow.document;
      var v307 = tempSeq + "\n";
      JAMScript.call(v306.write, v306, [v307]);
      tempSeq = ""
    }
    var v691 = sequence$$17.length;
    v309 = v691 > 0
  }
  var v310 = outputWindow.document;
  var v311 = tempSeq + "\n";
  JAMScript.call(v310.write, v310, [v311]);
  return true
}
function getGeneticCodeString(type$$25) {
  var v926 = type$$25.toLowerCase();
  var v692 = v926 == "standard";
  var v928 = !v692;
  if(v928) {
    var v927 = type$$25.toLowerCase();
    v692 = v927 == "transl_table=1"
  }
  var v313 = v692;
  if(v313) {
    var v1500 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1483 = v1500 + "/ga[tcuy]/=D,";
    var v1466 = v1483 + "/ga[agr]/=E,";
    var v1448 = v1466 + "/[tu][tu][tcuy]/=F,";
    var v1429 = v1448 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1408 = v1429 + "/ca[tcuy]/=H,";
    var v1387 = v1408 + "/a[tu][atcuwmhy]/=I,";
    var v1366 = v1387 + "/aa[agr]/=K,";
    var v1342 = v1366 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1318 = v1342 + "/a[tu]g/=M,";
    var v1292 = v1318 + "/aa[tucy]/=N,";
    var v1263 = v1292 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1226 = v1263 + "/ca[agr]/=Q,";
    var v1184 = v1226 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1136 = v1184 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1058 = v1136 + "/ac[acgturyswkmbdhvn]/=T,";
    var v929 = v1058 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v693 = v929 + "/[tu]gg/=W,";
    var v312 = v693 + "/[tu]a[ctuy]/=Y,";
    return v312 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v694 = type$$25.toLowerCase();
  var v315 = v694 == "transl_table=2";
  if(v315) {
    var v1501 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1484 = v1501 + "/ga[tcuy]/=D,";
    var v1467 = v1484 + "/ga[agr]/=E,";
    var v1449 = v1467 + "/[tu][tu][tcuy]/=F,";
    var v1430 = v1449 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1409 = v1430 + "/ca[tcuy]/=H,";
    var v1388 = v1409 + "/a[tu][tcuy]/=I,";
    var v1367 = v1388 + "/aa[agr]/=K,";
    var v1343 = v1367 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1319 = v1343 + "/a[tu][agr]/=M,";
    var v1293 = v1319 + "/aa[tucy]/=N,";
    var v1264 = v1293 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1227 = v1264 + "/ca[agr]/=Q,";
    var v1185 = v1227 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1137 = v1185 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1059 = v1137 + "/ac[acgturyswkmbdhvn]/=T,";
    var v930 = v1059 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v695 = v930 + "/[tu]g[agr]/=W,";
    var v314 = v695 + "/[tu]a[ctuy]/=Y,";
    return v314 + "/[tu]a[agr]|ag[agr]/=*"
  }
  var v696 = type$$25.toLowerCase();
  var v317 = v696 == "transl_table=3";
  if(v317) {
    var v1502 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1485 = v1502 + "/ga[tcuy]/=D,";
    var v1468 = v1485 + "/ga[agr]/=E,";
    var v1450 = v1468 + "/[tu][tu][tcuy]/=F,";
    var v1431 = v1450 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1410 = v1431 + "/ca[tcuy]/=H,";
    var v1389 = v1410 + "/a[tu][tcuy]/=I,";
    var v1368 = v1389 + "/aa[agr]/=K,";
    var v1344 = v1368 + "/[tu][tu][agr]/=L,";
    var v1320 = v1344 + "/a[tu][agr]/=M,";
    var v1294 = v1320 + "/aa[tucy]/=N,";
    var v1265 = v1294 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1228 = v1265 + "/ca[agr]/=Q,";
    var v1186 = v1228 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1138 = v1186 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1060 = v1138 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v931 = v1060 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v697 = v931 + "/[tu]g[agr]/=W,";
    var v316 = v697 + "/[tu]a[ctuy]/=Y,";
    return v316 + "/[tu]a[agr]/=*"
  }
  var v698 = type$$25.toLowerCase();
  var v319 = v698 == "transl_table=4";
  if(v319) {
    var v1503 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1486 = v1503 + "/ga[tcuy]/=D,";
    var v1469 = v1486 + "/ga[agr]/=E,";
    var v1451 = v1469 + "/[tu][tu][tcuy]/=F,";
    var v1432 = v1451 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1411 = v1432 + "/ca[tcuy]/=H,";
    var v1390 = v1411 + "/a[tu][atcuwmhy]/=I,";
    var v1369 = v1390 + "/aa[agr]/=K,";
    var v1345 = v1369 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1321 = v1345 + "/a[tu]g/=M,";
    var v1295 = v1321 + "/aa[tucy]/=N,";
    var v1266 = v1295 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1229 = v1266 + "/ca[agr]/=Q,";
    var v1187 = v1229 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1139 = v1187 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1061 = v1139 + "/ac[acgturyswkmbdhvn]/=T,";
    var v932 = v1061 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v699 = v932 + "/[tu]g[agr]/=W,";
    var v318 = v699 + "/[tu]a[ctuy]/=Y,";
    return v318 + "/[tu]a[agr]/=*"
  }
  var v700 = type$$25.toLowerCase();
  var v321 = v700 == "transl_table=5";
  if(v321) {
    var v1504 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1487 = v1504 + "/ga[tcuy]/=D,";
    var v1470 = v1487 + "/ga[agr]/=E,";
    var v1452 = v1470 + "/[tu][tu][tcuy]/=F,";
    var v1433 = v1452 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1412 = v1433 + "/ca[tcuy]/=H,";
    var v1391 = v1412 + "/a[tu][tcuy]/=I,";
    var v1370 = v1391 + "/aa[agr]/=K,";
    var v1346 = v1370 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1322 = v1346 + "/a[tu][agr]/=M,";
    var v1296 = v1322 + "/aa[tucy]/=N,";
    var v1267 = v1296 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1230 = v1267 + "/ca[agr]/=Q,";
    var v1188 = v1230 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1140 = v1188 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1062 = v1140 + "/ac[acgturyswkmbdhvn]/=T,";
    var v933 = v1062 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v701 = v933 + "/[tu]g[agr]/=W,";
    var v320 = v701 + "/[tu]a[ctuy]/=Y,";
    return v320 + "/[tu]a[agr]/=*"
  }
  var v702 = type$$25.toLowerCase();
  var v323 = v702 == "transl_table=6";
  if(v323) {
    var v1505 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1488 = v1505 + "/ga[tcuy]/=D,";
    var v1471 = v1488 + "/ga[agr]/=E,";
    var v1453 = v1471 + "/[tu][tu][tcuy]/=F,";
    var v1434 = v1453 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1413 = v1434 + "/ca[tcuy]/=H,";
    var v1392 = v1413 + "/a[tu][atcuwmhy]/=I,";
    var v1371 = v1392 + "/aa[agr]/=K,";
    var v1347 = v1371 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1323 = v1347 + "/a[tu]g/=M,";
    var v1297 = v1323 + "/aa[tucy]/=N,";
    var v1268 = v1297 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1231 = v1268 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v1189 = v1231 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1141 = v1189 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1063 = v1141 + "/ac[acgturyswkmbdhvn]/=T,";
    var v934 = v1063 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v703 = v934 + "/[tu]gg/=W,";
    var v322 = v703 + "/[tu]a[ctuy]/=Y,";
    return v322 + "/[tu]ga/=*"
  }
  var v704 = type$$25.toLowerCase();
  var v325 = v704 == "transl_table=9";
  if(v325) {
    var v1506 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1489 = v1506 + "/ga[tcuy]/=D,";
    var v1472 = v1489 + "/ga[agr]/=E,";
    var v1454 = v1472 + "/[tu][tu][tcuy]/=F,";
    var v1435 = v1454 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1414 = v1435 + "/ca[tcuy]/=H,";
    var v1393 = v1414 + "/a[tu][atcuwmhy]/=I,";
    var v1372 = v1393 + "/aag/=K,";
    var v1348 = v1372 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1324 = v1348 + "/a[tu]g/=M,";
    var v1298 = v1324 + "/aa[atcuwmhy]/=N,";
    var v1269 = v1298 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1232 = v1269 + "/ca[agr]/=Q,";
    var v1190 = v1232 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1142 = v1190 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1064 = v1142 + "/ac[acgturyswkmbdhvn]/=T,";
    var v935 = v1064 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v705 = v935 + "/[tu]g[agr]/=W,";
    var v324 = v705 + "/[tu]a[ctuy]/=Y,";
    return v324 + "/[tu]a[agr]/=*"
  }
  var v706 = type$$25.toLowerCase();
  var v327 = v706 == "transl_table=10";
  if(v327) {
    var v1507 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1490 = v1507 + "/ga[tcuy]/=D,";
    var v1473 = v1490 + "/ga[agr]/=E,";
    var v1455 = v1473 + "/[tu][tu][tcuy]/=F,";
    var v1436 = v1455 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1415 = v1436 + "/ca[tcuy]/=H,";
    var v1394 = v1415 + "/a[tu][atcuwmhy]/=I,";
    var v1373 = v1394 + "/aa[agr]/=K,";
    var v1349 = v1373 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1325 = v1349 + "/a[tu]g/=M,";
    var v1299 = v1325 + "/aa[tucy]/=N,";
    var v1270 = v1299 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1233 = v1270 + "/ca[agr]/=Q,";
    var v1191 = v1233 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1143 = v1191 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1065 = v1143 + "/ac[acgturyswkmbdhvn]/=T,";
    var v936 = v1065 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v707 = v936 + "/[tu]gg/=W,";
    var v326 = v707 + "/[tu]a[ctuy]/=Y,";
    return v326 + "/[tu]a[agr]/=*"
  }
  var v708 = type$$25.toLowerCase();
  var v329 = v708 == "transl_table=11";
  if(v329) {
    var v1508 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1491 = v1508 + "/ga[tcuy]/=D,";
    var v1474 = v1491 + "/ga[agr]/=E,";
    var v1456 = v1474 + "/[tu][tu][tcuy]/=F,";
    var v1437 = v1456 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1416 = v1437 + "/ca[tcuy]/=H,";
    var v1395 = v1416 + "/a[tu][atcuwmhy]/=I,";
    var v1374 = v1395 + "/aa[agr]/=K,";
    var v1350 = v1374 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1326 = v1350 + "/a[tu]g/=M,";
    var v1300 = v1326 + "/aa[tucy]/=N,";
    var v1271 = v1300 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1234 = v1271 + "/ca[agr]/=Q,";
    var v1192 = v1234 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1144 = v1192 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1066 = v1144 + "/ac[acgturyswkmbdhvn]/=T,";
    var v937 = v1066 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v709 = v937 + "/[tu]gg/=W,";
    var v328 = v709 + "/[tu]a[ctuy]/=Y,";
    return v328 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v710 = type$$25.toLowerCase();
  var v331 = v710 == "transl_table=12";
  if(v331) {
    var v1509 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1492 = v1509 + "/ga[tcuy]/=D,";
    var v1475 = v1492 + "/ga[agr]/=E,";
    var v1457 = v1475 + "/[tu][tu][tcuy]/=F,";
    var v1438 = v1457 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1417 = v1438 + "/ca[tcuy]/=H,";
    var v1396 = v1417 + "/a[tu][atcuwmhy]/=I,";
    var v1375 = v1396 + "/aa[agr]/=K,";
    var v1351 = v1375 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1327 = v1351 + "/a[tu]g/=M,";
    var v1301 = v1327 + "/aa[tucy]/=N,";
    var v1272 = v1301 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1235 = v1272 + "/ca[agr]/=Q,";
    var v1193 = v1235 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1145 = v1193 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v1067 = v1145 + "/ac[acgturyswkmbdhvn]/=T,";
    var v938 = v1067 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v711 = v938 + "/[tu]gg/=W,";
    var v330 = v711 + "/[tu]a[ctuy]/=Y,";
    return v330 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v712 = type$$25.toLowerCase();
  var v333 = v712 == "transl_table=13";
  if(v333) {
    var v1510 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1493 = v1510 + "/ga[tcuy]/=D,";
    var v1476 = v1493 + "/ga[agr]/=E,";
    var v1458 = v1476 + "/[tu][tu][tcuy]/=F,";
    var v1439 = v1458 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1418 = v1439 + "/ca[tcuy]/=H,";
    var v1397 = v1418 + "/a[tu][tcuy]/=I,";
    var v1376 = v1397 + "/aa[agr]/=K,";
    var v1352 = v1376 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1328 = v1352 + "/a[tu][agr]/=M,";
    var v1302 = v1328 + "/aa[tucy]/=N,";
    var v1273 = v1302 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1236 = v1273 + "/ca[agr]/=Q,";
    var v1194 = v1236 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1146 = v1194 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1068 = v1146 + "/ac[acgturyswkmbdhvn]/=T,";
    var v939 = v1068 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v713 = v939 + "/[tu]g[agr]/=W,";
    var v332 = v713 + "/[tu]a[ctuy]/=Y,";
    return v332 + "/[tu]a[agr]/=*"
  }
  var v714 = type$$25.toLowerCase();
  var v335 = v714 == "transl_table=14";
  if(v335) {
    var v1511 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1494 = v1511 + "/ga[tcuy]/=D,";
    var v1477 = v1494 + "/ga[agr]/=E,";
    var v1459 = v1477 + "/[tu][tu][tcuy]/=F,";
    var v1440 = v1459 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1419 = v1440 + "/ca[tcuy]/=H,";
    var v1398 = v1419 + "/a[tu][atcuwmhy]/=I,";
    var v1377 = v1398 + "/aag/=K,";
    var v1353 = v1377 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1329 = v1353 + "/a[tu]g/=M,";
    var v1303 = v1329 + "/aa[atcuwmhy]/=N,";
    var v1274 = v1303 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1237 = v1274 + "/ca[agr]/=Q,";
    var v1195 = v1237 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1147 = v1195 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1069 = v1147 + "/ac[acgturyswkmbdhvn]/=T,";
    var v940 = v1069 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v715 = v940 + "/[tu]g[agr]/=W,";
    var v334 = v715 + "/[tu]a[atcuwmhy]/=Y,";
    return v334 + "/[tu]ag/=*"
  }
  var v716 = type$$25.toLowerCase();
  var v337 = v716 == "transl_table=15";
  if(v337) {
    var v1512 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1495 = v1512 + "/ga[tcuy]/=D,";
    var v1478 = v1495 + "/ga[agr]/=E,";
    var v1460 = v1478 + "/[tu][tu][tcuy]/=F,";
    var v1441 = v1460 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1420 = v1441 + "/ca[tcuy]/=H,";
    var v1399 = v1420 + "/a[tu][atcuwmhy]/=I,";
    var v1378 = v1399 + "/aa[agr]/=K,";
    var v1354 = v1378 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1330 = v1354 + "/a[tu]g/=M,";
    var v1304 = v1330 + "/aa[tucy]/=N,";
    var v1275 = v1304 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1238 = v1275 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v1196 = v1238 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1148 = v1196 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1070 = v1148 + "/ac[acgturyswkmbdhvn]/=T,";
    var v941 = v1070 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v717 = v941 + "/[tu]gg/=W,";
    var v336 = v717 + "/[tu]a[ctuy]/=Y,";
    return v336 + "/[tu][agr]a/=*"
  }
  var v718 = type$$25.toLowerCase();
  var v339 = v718 == "transl_table=16";
  if(v339) {
    var v1513 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1496 = v1513 + "/ga[tcuy]/=D,";
    var v1479 = v1496 + "/ga[agr]/=E,";
    var v1461 = v1479 + "/[tu][tu][tcuy]/=F,";
    var v1442 = v1461 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1421 = v1442 + "/ca[tcuy]/=H,";
    var v1400 = v1421 + "/a[tu][atcuwmhy]/=I,";
    var v1379 = v1400 + "/aa[agr]/=K,";
    var v1355 = v1379 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1331 = v1355 + "/a[tu]g/=M,";
    var v1305 = v1331 + "/aa[tucy]/=N,";
    var v1276 = v1305 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1239 = v1276 + "/ca[agr]/=Q,";
    var v1197 = v1239 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1149 = v1197 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1071 = v1149 + "/ac[acgturyswkmbdhvn]/=T,";
    var v942 = v1071 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v719 = v942 + "/[tu]gg/=W,";
    var v338 = v719 + "/[tu]a[ctuy]/=Y,";
    return v338 + "/[tu][agr]a/=*"
  }
  var v720 = type$$25.toLowerCase();
  var v341 = v720 == "transl_table=21";
  if(v341) {
    var v1514 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1497 = v1514 + "/ga[tcuy]/=D,";
    var v1480 = v1497 + "/ga[agr]/=E,";
    var v1462 = v1480 + "/[tu][tu][tcuy]/=F,";
    var v1443 = v1462 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1422 = v1443 + "/ca[tcuy]/=H,";
    var v1401 = v1422 + "/a[tu][tcuy]/=I,";
    var v1380 = v1401 + "/aag/=K,";
    var v1356 = v1380 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1332 = v1356 + "/a[tu][agr]/=M,";
    var v1306 = v1332 + "/aa[atcuwmhy]/=N,";
    var v1277 = v1306 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1240 = v1277 + "/ca[agr]/=Q,";
    var v1198 = v1240 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1150 = v1198 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v1072 = v1150 + "/ac[acgturyswkmbdhvn]/=T,";
    var v943 = v1072 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v721 = v943 + "/[tu]g[agr]/=W,";
    var v340 = v721 + "/[tu]a[ctuy]/=Y,";
    return v340 + "/[tu]a[agr]/=*"
  }
  var v722 = type$$25.toLowerCase();
  var v343 = v722 == "transl_table=22";
  if(v343) {
    var v1515 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1498 = v1515 + "/ga[tcuy]/=D,";
    var v1481 = v1498 + "/ga[agr]/=E,";
    var v1463 = v1481 + "/[tu][tu][tcuy]/=F,";
    var v1444 = v1463 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1423 = v1444 + "/ca[tcuy]/=H,";
    var v1402 = v1423 + "/a[tu][atcuwmhy]/=I,";
    var v1381 = v1402 + "/aa[agr]/=K,";
    var v1357 = v1381 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1333 = v1357 + "/a[tu]g/=M,";
    var v1307 = v1333 + "/aa[tucy]/=N,";
    var v1278 = v1307 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1241 = v1278 + "/ca[agr]/=Q,";
    var v1199 = v1241 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1151 = v1199 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v1073 = v1151 + "/ac[acgturyswkmbdhvn]/=T,";
    var v944 = v1073 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v723 = v944 + "/[tu]gg/=W,";
    var v342 = v723 + "/[tu]a[ctuy]/=Y,";
    return v342 + "/[tu][agcrsmv]a/=*"
  }
  var v724 = type$$25.toLowerCase();
  var v345 = v724 == "transl_table=23";
  if(v345) {
    var v1516 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1499 = v1516 + "/ga[tcuy]/=D,";
    var v1482 = v1499 + "/ga[agr]/=E,";
    var v1464 = v1482 + "/[tu][tu][tcuy]/=F,";
    var v1445 = v1464 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1424 = v1445 + "/ca[tcuy]/=H,";
    var v1403 = v1424 + "/a[tu][atcuwmhy]/=I,";
    var v1382 = v1403 + "/aa[agr]/=K,";
    var v1358 = v1382 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1334 = v1358 + "/a[tu]g/=M,";
    var v1308 = v1334 + "/aa[tucy]/=N,";
    var v1279 = v1308 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1242 = v1279 + "/ca[agr]/=Q,";
    var v1200 = v1242 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1152 = v1200 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v1074 = v1152 + "/ac[acgturyswkmbdhvn]/=T,";
    var v945 = v1074 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v725 = v945 + "/[tu]gg/=W,";
    var v344 = v725 + "/[tu]a[ctuy]/=Y,";
    return v344 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function mutateForDigest(theDocument) {
  var newDna = "";
  var mutatedDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E4;
  var TOPOLOGY = "linear";
  var v726 = testScript();
  var v346 = v726 == false;
  if(v346) {
    return false
  }
  var restrictionSiteCollection;
  var mutatedRestrictionSitesCollection;
  var v1243 = theDocument.forms;
  var v1201 = v1243[0];
  var v1153 = v1201.elements;
  var v1075 = v1153[7];
  var v946 = v1075.options;
  var v1244 = theDocument.forms;
  var v1202 = v1244[0];
  var v1154 = v1202.elements;
  var v1076 = v1154[7];
  var v947 = v1076.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v727 = v946[v947]
  }
  var v347 = v727.value;
  var geneticCode = getGeneticCodeString(v347);
  var v1203 = theDocument.forms;
  var v1155 = v1203[0];
  var v1077 = v1155.elements;
  var v948 = v1077[4];
  var v728 = v948.options;
  var v1204 = theDocument.forms;
  var v1156 = v1204[0];
  var v1078 = v1156.elements;
  var v949 = v1078[4];
  var v729 = v949.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v348 = v728[v729]
  }
  var restrictionSites = v348.value;
  var v1245 = theDocument.forms;
  var v1205 = v1245[0];
  var v1157 = v1205.elements;
  var v1079 = v1157[0];
  var v950 = checkFormElement(v1079);
  var v730 = v950 == false;
  var v952 = !v730;
  if(v952) {
    var v1280 = theDocument.forms;
    var v1246 = v1280[0];
    var v1206 = v1246.elements;
    var v1158 = v1206[0];
    var v1080 = v1158.value;
    var v951 = checkSequenceLength(v1080, maxInput$$3);
    v730 = v951 == false
  }
  var v349 = v730;
  if(v349) {
    return false
  }
  geneticCode = geneticCode.split(/,/);
  var v731 = checkGeneticCode(geneticCode);
  var v350 = v731 == false;
  if(v350) {
    return false
  }
  restrictionSites = restrictionSites.split(/,/);
  var v732 = checkRestPatterns(restrictionSites);
  var v351 = v732 == false;
  if(v351) {
    return false
  }
  var mutatedRestrictionSites = buildMutatedRestrictionSites(restrictionSites);
  openWindow("Mutate for Digest");
  openPre();
  var v352 = outputWindow.document;
  var v733 = '<span class="mutated_sequence">' + "sequence and translations for mutated version";
  var v353 = v733 + "</span>\n";
  JAMScript.call(v352.write, v352, [v353]);
  var v354 = outputWindow.document;
  var v734 = '<span class="current_sequence">' + "sequence and translations for non-mutated version";
  var v355 = v734 + "</span>\n";
  JAMScript.call(v354.write, v354, [v355]);
  var v356 = outputWindow.document;
  JAMScript.call(v356.write, v356, ["\n"]);
  var v1159 = theDocument.forms;
  var v1081 = v1159[0];
  var v953 = v1081.elements;
  var v735 = v953[0];
  var v357 = v735.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v357);
  var i$$11 = 0;
  var v736 = arrayOfFasta$$1.length;
  var v365 = i$$11 < v736;
  for(;v365;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v358 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v358);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v359 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v359);
    newDna = removeNonDna(newDna);
    var v360 = outputWindow.document;
    var v361 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, TOPOLOGY);
    JAMScript.call(v360.write, v360, [v361]);
    restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, TOPOLOGY);
    JAMScript.call(restrictionSiteCollection.sortRestrictionSites, restrictionSiteCollection, []);
    mutatedRestrictionSiteCollection = findRestrictionSites(newDna, mutatedRestrictionSites, TOPOLOGY);
    mutatedRestrictionSiteCollection = removeNormalMatchesFromMutantSites(mutatedRestrictionSiteCollection, restrictionSiteCollection);
    mutatedRestrictionSiteCollection = removeOverlappingMatchesFromMutantSites(mutatedRestrictionSiteCollection);
    mutatedDna = buildMutatedDna(newDna, mutatedRestrictionSiteCollection);
    var v1247 = theDocument.forms;
    var v1207 = v1247[0];
    var v1160 = v1207.elements;
    var v1082 = v1160[5];
    var v954 = v1082.options;
    var v1248 = theDocument.forms;
    var v1208 = v1248[0];
    var v1161 = v1208.elements;
    var v1083 = v1161[5];
    var v955 = v1083.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v737 = v954[v955]
    }
    var v362 = v737.value;
    var v1249 = theDocument.forms;
    var v1209 = v1249[0];
    var v1162 = v1209.elements;
    var v1084 = v1162[6];
    var v956 = v1084.options;
    var v1250 = theDocument.forms;
    var v1210 = v1250[0];
    var v1163 = v1210.elements;
    var v1085 = v1163[6];
    var v957 = v1085.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v738 = v956[v957]
    }
    var v363 = v738.value;
    layoutRestTrans(newDna, mutatedDna, geneticCode, restrictionSiteCollection, mutatedRestrictionSiteCollection, v362, v363);
    var v364 = outputWindow.document;
    JAMScript.call(v364.write, v364, ["\n\n"]);
    i$$11 = i$$11 + 1;
    var v739 = arrayOfFasta$$1.length;
    v365 = i$$11 < v739
  }
  closePre();
  closeWindow();
  return true
}
function layoutRestTrans(dnaSequence$$3, mutatedDnaSequence, geneticCode$$1, restrictionSiteCollection$$1, mutatedRestrictionSiteCollection$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v740 = readingFrame == "3";
  var v958 = !v740;
  if(v958) {
    v740 = readingFrame == "all_three"
  }
  var v368 = v740;
  if(v368) {
    var translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v1086 = dnaSequence$$3.length;
    var v959 = mutatedDnaSequence.substring(2, v1086);
    var v741 = translate(v959, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v366 = "  " + v741;
    JAMScript.call(translationMut.setCharacters, translationMut, [v366]);
    JAMScript.call(textLayout.addComponent, textLayout, [translationMut]);
    var translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v1087 = dnaSequence$$3.length;
    var v960 = dnaSequence$$3.substring(2, v1087);
    var v742 = translate(v960, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v367 = "  " + v742;
    JAMScript.call(translation.setCharacters, translation, [v367]);
    JAMScript.call(textLayout.addComponent, textLayout, [translation])
  }
  var v743 = readingFrame == "2";
  var v961 = !v743;
  if(v961) {
    v743 = readingFrame == "all_three"
  }
  var v371 = v743;
  if(v371) {
    translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v1088 = dnaSequence$$3.length;
    var v962 = mutatedDnaSequence.substring(1, v1088);
    var v744 = translate(v962, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v369 = " " + v744;
    JAMScript.call(translationMut.setCharacters, translationMut, [v369]);
    JAMScript.call(textLayout.addComponent, textLayout, [translationMut]);
    translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v1089 = dnaSequence$$3.length;
    var v963 = dnaSequence$$3.substring(1, v1089);
    var v745 = translate(v963, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v370 = " " + v745;
    JAMScript.call(translation.setCharacters, translation, [v370]);
    JAMScript.call(textLayout.addComponent, textLayout, [translation])
  }
  var v746 = readingFrame == "1";
  var v964 = !v746;
  if(v964) {
    v746 = readingFrame == "all_three"
  }
  var v374 = v746;
  if(v374) {
    translationMut = new TranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v372 = translate(mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAMScript.call(translationMut.setCharacters, translationMut, [v372]);
    JAMScript.call(textLayout.addComponent, textLayout, [translationMut]);
    translation = new TranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v373 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAMScript.call(translation.setCharacters, translation, [v373]);
    JAMScript.call(textLayout.addComponent, textLayout, [translation])
  }
  var v377 = readingFrame == "uppercase";
  if(v377) {
    translationMut = new UppercaseTranslationComponent;
    translationMut.spanStart = '<span class="mutated_sequence">';
    translationMut.spanEnd = "</span>";
    var v375 = uppercaseTranslate(mutatedDnaSequence, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAMScript.call(translationMut.setCharacters, translationMut, [v375]);
    JAMScript.call(textLayout.addComponent, textLayout, [translationMut]);
    translation = new UppercaseTranslationComponent;
    translation.spanStart = '<span class="current_sequence">';
    translation.spanEnd = "</span>";
    var v376 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAMScript.call(translation.setCharacters, translation, [v376]);
    JAMScript.call(textLayout.addComponent, textLayout, [translation])
  }
  var dnaMut = new DnaComponent;
  dnaMut.spanStart = '<span class="mutated_sequence">';
  dnaMut.spanEnd = "</span>";
  JAMScript.call(dnaMut.setCharacters, dnaMut, [mutatedDnaSequence]);
  JAMScript.call(textLayout.addComponent, textLayout, [dnaMut]);
  var dna = new DnaComponent;
  dna.spanStart = '<span class="current_sequence">';
  dna.spanEnd = "</span>";
  JAMScript.call(dna.setCharacters, dna, [dnaSequence$$3]);
  JAMScript.call(textLayout.addComponent, textLayout, [dna]);
  var sitesInRange = new Array;
  var sitesInRangeMut = new Array;
  var i$$12 = 0;
  var v747 = dnaSequence$$3.length;
  var v387 = i$$12 < v747;
  for(;v387;) {
    var v378 = i$$12 + basesPerLine;
    sitesInRange = JAMScript.call(restrictionSiteCollection$$1.getSitesInRange, restrictionSiteCollection$$1, [i$$12, v378]);
    var v379 = i$$12 + basesPerLine;
    sitesInRangeMut = JAMScript.call(mutatedRestrictionSiteCollection$$1.getSitesInRange, mutatedRestrictionSiteCollection$$1, [i$$12, v379]);
    sitesInRange.reverse();
    sitesInRangeMut.reverse();
    var j$$10 = 0;
    var v748 = sitesInRangeMut.length;
    var v382 = j$$10 < v748;
    for(;v382;) {
      var v380 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1281 = sitesInRangeMut[j$$10]
      }
      var v1251 = v1281.position;
      var v1211 = v1251 - i$$12;
      var v1164 = v1211 + 9;
      var v1090 = spaceString.substring(0, v1164);
      var v965 = v1090 + '<span class="mutated_sequence">';
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1091 = sitesInRangeMut[j$$10]
      }
      var v966 = v1091.label;
      var v749 = v965 + v966;
      var v381 = v749 + "</span>\n";
      JAMScript.call(v380.write, v380, [v381]);
      j$$10 = j$$10 + 1;
      var v750 = sitesInRangeMut.length;
      v382 = j$$10 < v750
    }
    j$$10 = 0;
    var v751 = sitesInRange.length;
    var v385 = j$$10 < v751;
    for(;v385;) {
      var v383 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1282 = sitesInRange[j$$10]
      }
      var v1252 = v1282.position;
      var v1212 = v1252 - i$$12;
      var v1165 = v1212 + 9;
      var v1092 = spaceString.substring(0, v1165);
      var v967 = v1092 + '<span class="current_sequence">';
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1093 = sitesInRange[j$$10]
      }
      var v968 = v1093.label;
      var v752 = v967 + v968;
      var v384 = v752 + "</span>\n";
      JAMScript.call(v383.write, v383, [v384]);
      j$$10 = j$$10 + 1;
      var v753 = sitesInRange.length;
      v385 = j$$10 < v753
    }
    var v386 = i$$12 + basesPerLine;
    JAMScript.call(textLayout.writeLayout, textLayout, [i$$12, v386]);
    i$$12 = i$$12 + basesPerLine;
    var v754 = dnaSequence$$3.length;
    v387 = i$$12 < v754
  }
  return true
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    var v388 = " " + p1$$2;
    return v388 + " "
  }
  var v969 = dnaSequence$$4.replace(/[^A-Za-z]/g, "");
  var v755 = v969.length;
  var v389 = v755 < 3;
  if(v389) {
    return""
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/(...)/g, v2);
  var i$$13 = 0;
  var v756 = geneticCodeMatchExp$$3.length;
  var v392 = i$$13 < v756;
  for(;v392;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v390 = geneticCodeMatchExp$$3[i$$13]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v391 = geneticCodeMatchResult$$3[i$$13]
    }
    dnaSequence$$4 = dnaSequence$$4.replace(v390, v391);
    i$$13 = i$$13 + 1;
    var v757 = geneticCodeMatchExp$$3.length;
    v392 = i$$13 < v757
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/\S{3}/g, "X");
  dnaSequence$$4 = dnaSequence$$4.replace(/\s\S{1,2}$/, "");
  dnaSequence$$4 = dnaSequence$$4.replace(/^\s/, "");
  return dnaSequence$$4
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$15, s$$5) {
    var v1213 = " " + p1$$3;
    var v1166 = v1213 + p3;
    var v1094 = v1166 + p5;
    var v970 = v1094 + " ";
    var v758 = v970 + p2;
    var v393 = v758 + p4;
    return v393 + p6
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/[a-z]/g, " ");
  var v971 = dnaSequence$$5.replace(/[^A-Za-z]/g, "");
  var v759 = v971.length;
  var v394 = v759 < 3;
  if(v394) {
    return""
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3);
  dnaSequence$$5 = dnaSequence$$5.replace(/\s\S{1,2}\s/g, "");
  var i$$14 = 0;
  var v760 = geneticCodeMatchExp$$4.length;
  var v397 = i$$14 < v760;
  for(;v397;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v395 = geneticCodeMatchExp$$4[i$$14]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v396 = geneticCodeMatchResult$$4[i$$14]
    }
    dnaSequence$$5 = dnaSequence$$5.replace(v395, v396);
    i$$14 = i$$14 + 1;
    var v761 = geneticCodeMatchExp$$4.length;
    v397 = i$$14 < v761
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/\S{3}/g, "X");
  dnaSequence$$5 = dnaSequence$$5.replace(/^\s/, "");
  return dnaSequence$$5
}
function buildMutatedRestrictionSites(restrictionSites$$1) {
  var mutatedRestrictionSites$$1 = new Array;
  var i$$15 = 0;
  var v762 = restrictionSites$$1.length;
  var v419 = i$$15 < v762;
  for(;v419;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1095 = restrictionSites$$1[i$$15]
    }
    var v972 = v1095.match(/\/.+\//);
    var v763 = v972.toString();
    var v398 = v763.replace(/[\/\\]/g, "");
    var site = v398.toLowerCase();
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v764 = restrictionSites$$1[i$$15]
    }
    var v399 = v764.match(/\([^\(]+\)/);
    var label$$2 = v399.toString();
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1096 = restrictionSites$$1[i$$15]
    }
    var v973 = v1096.match(/\)\D*\d+/);
    var v765 = v973.toString();
    var v400 = v765.replace(/\)\D*/, "");
    var cutDistance$$1 = parseFloat(v400);
    var singleDegenSites = new Array;
    var doubleDegenSites = new Array;
    var j$$11 = 0;
    var v766 = site.length;
    var v405 = j$$11 < v766;
    for(;v405;) {
      var v974 = site.charAt(j$$11);
      var v767 = v974 != "n";
      if(v767) {
        var v975 = site.charAt(j$$11);
        v767 = v975 != "N"
      }
      var v404 = v767;
      if(v404) {
        var pre = site.substring(0, j$$11);
        var v401 = j$$11 + 1;
        var v402 = site.length;
        var post = site.substring(v401, v402);
        var v403 = pre + "N";
        var newSite = v403 + post;
        singleDegenSites.push(newSite)
      }
      j$$11 = j$$11 + 1;
      var v768 = site.length;
      v405 = j$$11 < v768
    }
    var v769 = site.length;
    var v414 = v769 > 6;
    if(v414) {
      j$$11 = 0;
      var v770 = singleDegenSites.length;
      var v413 = j$$11 < v770;
      for(;v413;) {
        var k$$3 = 0;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v976 = singleDegenSites[j$$11]
        }
        var v771 = v976.length;
        var v412 = k$$3 < v771;
        for(;v412;) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1097 = singleDegenSites[j$$11]
          }
          var v977 = v1097.charAt(k$$3);
          var v772 = v977 != "n";
          if(v772) {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1098 = singleDegenSites[j$$11]
            }
            var v978 = v1098.charAt(k$$3);
            v772 = v978 != "N"
          }
          var v411 = v772;
          if(v411) {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v406 = singleDegenSites[j$$11]
            }
            pre = v406.substring(0, k$$3);
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v407 = singleDegenSites[j$$11]
            }
            var v408 = k$$3 + 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v773 = singleDegenSites[j$$11]
            }
            var v409 = v773.length;
            post = v407.substring(v408, v409);
            var v410 = pre + "N";
            newSite = v410 + post;
            doubleDegenSites.push(newSite)
          }
          k$$3 = k$$3 + 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v979 = singleDegenSites[j$$11]
          }
          var v774 = v979.length;
          v412 = k$$3 < v774
        }
        j$$11 = j$$11 + 1;
        var v775 = singleDegenSites.length;
        v413 = j$$11 < v775
      }
    }
    j$$11 = 0;
    var v776 = singleDegenSites.length;
    var v416 = j$$11 < v776;
    for(;v416;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1214 = singleDegenSites[j$$11]
      }
      var v1167 = "/" + v1214;
      var v1099 = v1167 + "/";
      var v980 = v1099 + " ";
      var v777 = v980 + label$$2;
      var v415 = v777 + cutDistance$$1;
      mutatedRestrictionSites$$1.push(v415);
      j$$11 = j$$11 + 1;
      var v778 = singleDegenSites.length;
      v416 = j$$11 < v778
    }
    j$$11 = 0;
    var v779 = doubleDegenSites.length;
    var v418 = j$$11 < v779;
    for(;v418;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1215 = doubleDegenSites[j$$11]
      }
      var v1168 = "/" + v1215;
      var v1100 = v1168 + "/";
      var v981 = v1100 + " ";
      var v780 = v981 + label$$2;
      var v417 = v780 + cutDistance$$1;
      mutatedRestrictionSites$$1.push(v417);
      j$$11 = j$$11 + 1;
      var v781 = doubleDegenSites.length;
      v418 = j$$11 < v781
    }
    i$$15 = i$$15 + 1;
    var v782 = restrictionSites$$1.length;
    v419 = i$$15 < v782
  }
  return mutatedRestrictionSites$$1
}
function removeNormalMatchesFromMutantSites(mutatedRestrictionSiteCollection$$2, restrictionSiteCollection$$2) {
  var originalMutatedRestrictionSites = new Array;
  var i$$16 = 0;
  var v982 = mutatedRestrictionSiteCollection$$2.restrictionSites;
  var v783 = v982.length;
  var v424 = i$$16 < v783;
  for(;v424;) {
    var v420 = mutatedRestrictionSiteCollection$$2.restrictionSites;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var mutatedSite = v420[i$$16]
    }
    var isOriginal = true;
    var j$$12 = 0;
    var v983 = restrictionSiteCollection$$2.restrictionSites;
    var v784 = v983.length;
    var v423 = j$$12 < v784;
    for(;v423;) {
      var v421 = restrictionSiteCollection$$2.restrictionSites;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var normalSite = v421[j$$12]
      }
      var v785 = normalSite.position;
      var v786 = mutatedSite.position;
      var v422 = v785 == v786;
      if(v422) {
        isOriginal = false;
        break
      }
      j$$12 = j$$12 + 1;
      var v984 = restrictionSiteCollection$$2.restrictionSites;
      var v787 = v984.length;
      v423 = j$$12 < v787
    }
    if(isOriginal) {
      originalMutatedRestrictionSites.push(mutatedSite)
    }
    i$$16 = i$$16 + 1;
    var v985 = mutatedRestrictionSiteCollection$$2.restrictionSites;
    var v788 = v985.length;
    v424 = i$$16 < v788
  }
  mutatedRestrictionSiteCollection$$2.restrictionSites = originalMutatedRestrictionSites;
  return mutatedRestrictionSiteCollection$$2
}
function removeOverlappingMatchesFromMutantSites(mutatedRestrictionSiteCollection$$3) {
  var originalMutatedRestrictionSites$$1 = new Array;
  var i$$17 = 0;
  var v986 = mutatedRestrictionSiteCollection$$3.restrictionSites;
  var v789 = v986.length;
  var v436 = i$$17 < v789;
  for(;v436;) {
    var v425 = mutatedRestrictionSiteCollection$$3.restrictionSites;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var mutatedSite$$1 = v425[i$$17]
    }
    var isOriginal$$1 = true;
    var j$$13 = 0;
    var v790 = originalMutatedRestrictionSites$$1.length;
    var v435 = j$$13 < v790;
    for(;v435;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var mutatedSiteJ = originalMutatedRestrictionSites$$1[j$$13]
      }
      var v987 = mutatedSiteJ.position;
      var v988 = mutatedSiteJ.cutDistance;
      var v791 = v987 + v988;
      var v989 = mutatedSiteJ.iupacPattern;
      var v792 = v989.length;
      var v426 = v791 - v792;
      var startRangeJ = v426 - 2;
      var v990 = mutatedSiteJ.position;
      var v991 = mutatedSiteJ.cutDistance;
      var v793 = v990 + v991;
      var v427 = v793 - 1;
      var endRangeJ = v427 + 2;
      var v794 = mutatedSite$$1.position;
      var v795 = mutatedSite$$1.cutDistance;
      var v428 = v794 + v795;
      var v796 = mutatedSite$$1.iupacPattern;
      var v429 = v796.length;
      var startRange = v428 - v429;
      var v797 = mutatedSite$$1.position;
      var v798 = mutatedSite$$1.cutDistance;
      var v430 = v797 + v798;
      var endRange = v430 - 1;
      var v799 = startRange <= startRangeJ;
      if(v799) {
        v799 = endRange >= startRangeJ
      }
      var v431 = v799;
      if(v431) {
        isOriginal$$1 = false;
        break
      }
      var v800 = startRange <= endRangeJ;
      if(v800) {
        v800 = endRange >= endRangeJ
      }
      var v432 = v800;
      if(v432) {
        isOriginal$$1 = false;
        break
      }
      var v801 = startRange <= startRangeJ;
      if(v801) {
        v801 = endRange >= endRangeJ
      }
      var v433 = v801;
      if(v433) {
        isOriginal$$1 = false;
        break
      }
      var v802 = startRange >= startRangeJ;
      if(v802) {
        v802 = endRange <= endRangeJ
      }
      var v434 = v802;
      if(v434) {
        isOriginal$$1 = false;
        break
      }
      j$$13 = j$$13 + 1;
      var v803 = originalMutatedRestrictionSites$$1.length;
      v435 = j$$13 < v803
    }
    if(isOriginal$$1) {
      originalMutatedRestrictionSites$$1.push(mutatedSite$$1)
    }
    i$$17 = i$$17 + 1;
    var v992 = mutatedRestrictionSiteCollection$$3.restrictionSites;
    var v804 = v992.length;
    v436 = i$$17 < v804
  }
  mutatedRestrictionSiteCollection$$3.restrictionSites = originalMutatedRestrictionSites$$1;
  return mutatedRestrictionSiteCollection$$3
}
function buildMutatedDna(originalDna, mutatedRestrictionSiteCollection$$4) {
  var mutatedDna$$1 = originalDna;
  var mutatedDnaArray = new Array;
  JAMScript.call(mutatedRestrictionSiteCollection$$4.sortRestrictionSites, mutatedRestrictionSiteCollection$$4, []);
  var v437 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  v437.reverse();
  var i$$18 = 0;
  var v993 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  var v805 = v993.length;
  var v444 = i$$18 < v805;
  for(;v444;) {
    var v438 = mutatedRestrictionSiteCollection$$4.restrictionSites;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var mutatedSite$$2 = v438[i$$18]
    }
    var v806 = mutatedSite$$2.position;
    var v807 = mutatedSite$$2.cutDistance;
    var v439 = v806 + v807;
    var v808 = mutatedSite$$2.iupacPattern;
    var v440 = v808.length;
    var siteStart = v439 - v440;
    var v809 = mutatedSite$$2.position;
    var v810 = mutatedSite$$2.cutDistance;
    var v441 = v809 + v810;
    var siteEnd = v441 - 1;
    var siteLength = siteEnd - siteStart;
    var v811 = mutatedDna$$1.substring(0, siteStart);
    var v1101 = siteEnd + 1;
    var v994 = mutatedDna$$1.substring(siteStart, v1101);
    var v995 = mutatedSite$$2.iupacPattern;
    var v996 = mutatedSite$$2.label;
    var v812 = replaceMutatedDnaSegment(v994, v995, v996);
    var v442 = v811 + v812;
    mutatedDnaArray.push(v442);
    var v813 = siteEnd + 1;
    var v814 = mutatedDna$$1.length;
    var v443 = mutatedDna$$1.substring(v813, v814);
    mutatedDnaArray.push(v443);
    mutatedDna$$1 = mutatedDnaArray.join("");
    mutatedDnaArray = new Array;
    i$$18 = i$$18 + 1;
    var v997 = mutatedRestrictionSiteCollection$$4.restrictionSites;
    var v815 = v997.length;
    v444 = i$$18 < v815
  }
  var v445 = mutatedRestrictionSiteCollection$$4.restrictionSites;
  v445.reverse();
  return mutatedDna$$1
}
function replaceMutatedDnaSegment(originalSegment, iupacPattern, label$$3) {
  var newSegment = "";
  var genericSite;
  var v816 = label$$3.match(/[a-z\|]+\s\d+/);
  var v446 = v816.toString();
  genericSite = v446.replace(/\||\s\d+/g, "");
  var isUpperCase;
  var charToAdd;
  var i$$19 = 0;
  var v817 = originalSegment.length;
  var v454 = i$$19 < v817;
  for(;v454;) {
    var v1102 = originalSegment.charAt(i$$19);
    var v998 = v1102.toString();
    var v818 = v998.search(/[A-Z]/);
    var v447 = v818 == -1;
    if(v447) {
      isUpperCase = false
    }else {
      isUpperCase = true
    }
    var v819 = originalSegment.charAt(i$$19);
    var v820 = genericSite.charAt(i$$19);
    var v449 = v819 == v820;
    if(v449) {
      charToAdd = originalSegment.charAt(i$$19)
    }else {
      var v821 = iupacPattern.charAt(i$$19);
      var v448 = v821 == "N";
      if(v448) {
        charToAdd = genericSite.charAt(i$$19)
      }else {
        charToAdd = originalSegment.charAt(i$$19)
      }
    }
    if(isUpperCase) {
      var v450 = newSegment;
      var v822 = charToAdd.toString();
      var v451 = v822.toUpperCase();
      newSegment = v450 + v451
    }else {
      var v452 = newSegment;
      var v823 = charToAdd.toString();
      var v453 = v823.toLowerCase();
      newSegment = v452 + v453
    }
    i$$19 = i$$19 + 1;
    var v824 = originalSegment.length;
    v454 = i$$19 < v824
  }
  return newSegment
}
function findRestrictionSites(sequence$$18, arrayOfItems$$2, dnaConformation$$1) {
  var lookAhead$$1 = 50;
  var lowerLimit$$1 = 0;
  var upperLimit$$1 = sequence$$18.length;
  var shiftValue$$1 = 0;
  var cutDistance$$2;
  var matchExp$$2;
  var matchPosition$$1;
  var matchArray$$2;
  var label$$4;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$3 = new RestrictionSiteCollection;
  var v458 = dnaConformation$$1 == "circular";
  if(v458) {
    var v455 = sequence$$18.substring(0, lookAhead$$1);
    shiftValue$$1 = v455.length;
    var v1103 = sequence$$18.length;
    var v999 = v1103 - lookAhead$$1;
    var v1000 = sequence$$18.length;
    var v825 = sequence$$18.substring(v999, v1000);
    var v456 = v825 + sequence$$18;
    var v457 = sequence$$18.substring(0, lookAhead$$1);
    sequence$$18 = v456 + v457;
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1
  }
  var i$$20 = 0;
  var v826 = arrayOfItems$$2.length;
  var v470 = i$$20 < v826;
  for(;v470;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1001 = arrayOfItems$$2[i$$20]
    }
    var v827 = v1001.match(/\/.+\//);
    var v459 = v827.toString();
    var iupacPattern$$1 = v459.replace(/[\/\\]/g, "");
    var v1002 = convertDegenerates(iupacPattern$$1);
    var v828 = "/" + v1002;
    var v460 = v828 + "/";
    matchExp$$2 = v460 + "gi";
    matchPosition$$1 = 0;
    if(JAMScript.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$2 + " }")
    }else {
      matchExp$$2 = JAMScript.call(eval, null, [matchExp$$2])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1104 = arrayOfItems$$2[i$$20]
    }
    var v1003 = v1104.match(/\)\D*\d+/);
    var v829 = v1003.toString();
    var v461 = v829.replace(/\)\D*/, "");
    cutDistance$$2 = parseFloat(v461);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1004 = arrayOfItems$$2[i$$20]
    }
    var v830 = v1004.match(/\([^\(]+\)/);
    var v462 = v830.toString();
    label$$4 = v462.replace(/\(|\)/g, "");
    var v466 = matchArray$$2 = matchExp$$2.exec(sequence$$18);
    for(;v466;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$2;
      var v831 = matchPosition$$1 >= lowerLimit$$1;
      if(v831) {
        v831 = matchPosition$$1 < upperLimit$$1
      }
      var v464 = v831;
      if(v464) {
        timesFound$$1 = timesFound$$1 + 1;
        var v1005 = label$$4 + " ";
        var v1105 = matchPosition$$1 - shiftValue$$1;
        var v1006 = v1105 + 1;
        var v832 = v1005 + v1006;
        var v833 = matchPosition$$1 - shiftValue$$1;
        var v463 = new RestrictionSite(v832, v833, cutDistance$$2, iupacPattern$$1);
        tempArray.push(v463)
      }
      var v834 = matchExp$$2.lastIndex;
      var v1007 = RegExp.lastMatch;
      var v835 = v1007.length;
      var v465 = v834 - v835;
      matchExp$$2.lastIndex = v465 + 1;
      v466 = matchArray$$2 = matchExp$$2.exec(sequence$$18)
    }
    var j$$14 = 0;
    var v836 = tempArray.length;
    var v469 = j$$14 < v836;
    for(;v469;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v467 = tempArray[j$$14]
      }
      v467.numberOfCuts = timesFound$$1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v468 = tempArray[j$$14]
      }
      JAMScript.call(restrictionSiteCollection$$3.addRestrictionSite, restrictionSiteCollection$$3, [v468]);
      j$$14 = j$$14 + 1;
      var v837 = tempArray.length;
      v469 = j$$14 < v837
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$20 = i$$20 + 1;
    var v838 = arrayOfItems$$2.length;
    v470 = i$$20 < v838
  }
  return restrictionSiteCollection$$3
}
function writeLayout(start$$4, stop) {
  var i$$21 = 0;
  var v1008 = this.components;
  var v839 = v1008.length;
  var v472 = i$$21 < v839;
  for(;v472;) {
    var v840 = this.components;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v471 = v840[i$$21]
    }
    JAMScript.call(v471.writeLayoutComponent, v471, [start$$4, stop]);
    i$$21 = i$$21 + 1;
    var v1009 = this.components;
    var v841 = v1009.length;
    v472 = i$$21 < v841
  }
  return
}
function addComponent(component) {
  var v473 = this.components;
  v473.push(component);
  return
}
function TextLayout() {
  var v1523 = new Array;
  this.components = v1523;
  return
}
function writeLayoutComponent(start$$5, stop$$1) {
  return
}
function setCharacters(text$$14) {
  var v842 = text$$14.search(/./);
  var v474 = v842 != -1;
  if(v474) {
    var v1524 = text$$14.match(/./g);
    this.characters = v1524
  }
  return
}
function isRoom(start$$6, stop$$2) {
  var v475 = this.characters;
  var rangeToCheck = v475.slice(start$$6, stop$$2);
  rangeToCheck = rangeToCheck.join("");
  var v843 = rangeToCheck.search(/\w/);
  var v476 = v843 == -1;
  if(v476) {
    return true
  }else {
    return false
  }
  return
}
function LayoutComponent() {
  var v1525 = new Array;
  this.characters = v1525;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return
}
function TranslationComponent() {
  var v1526 = new Array;
  this.characters = v1526;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return
}
function UppercaseTranslationComponent() {
  var v1527 = new Array;
  this.characters = v1527;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return
}
function DnaComponent() {
  var v1528 = new Array;
  this.characters = v1528;
  this.positionLabel = 1;
  this.spanStart = "";
  this.spanEnd = "";
  return
}
function RestrictionSite(label$$5, position, cutDistance$$3, iupacPattern$$2) {
  this.label = label$$5;
  this.position = position;
  this.cutDistance = cutDistance$$3;
  this.iupacPattern = iupacPattern$$2;
  return
}
function addRestrictionSite(restrictionSite) {
  var v477 = this.restrictionSites;
  v477.push(restrictionSite);
  return
}
function sortRestrictionSites() {
  var v478 = this.restrictionSites;
  v478.sort(restrictionSiteSorter);
  return
}
function getSitesInRange(start$$10, stop$$6) {
  var arrayToReturn = new Array;
  var v844 = this.restrictionSites;
  var v479 = v844.length;
  var i$$22 = v479 - 1;
  var v482 = i$$22 >= 0;
  for(;v482;) {
    var v1169 = this.restrictionSites;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1106 = v1169[i$$22]
    }
    var v1010 = v1106.position;
    var v845 = v1010 >= start$$10;
    if(v845) {
      var v1170 = this.restrictionSites;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1107 = v1170[i$$22]
      }
      var v1011 = v1107.position;
      v845 = v1011 < stop$$6
    }
    var v481 = v845;
    if(v481) {
      var v846 = this.restrictionSites;
      var v480 = v846.pop();
      arrayToReturn.push(v480)
    }else {
      break
    }
    i$$22 = i$$22 - 1;
    v482 = i$$22 >= 0
  }
  return arrayToReturn
}
function RestrictionSiteCollection() {
  var v1529 = new Array;
  this.restrictionSites = v1529;
  return
}
function restrictionSiteSorter(a, b) {
  var v847 = a.position;
  var v848 = b.position;
  var v483 = v847 < v848;
  if(v483) {
    return 1
  }
  var v849 = a.position;
  var v850 = b.position;
  var v484 = v849 > v850;
  if(v484) {
    return-1
  }else {
    return 0
  }
  return
}
new TextLayout;
var v485 = TextLayout.prototype;
v485.writeLayout = writeLayout;
var v486 = TextLayout.prototype;
v486.addComponent = addComponent;
new LayoutComponent;
var v487 = LayoutComponent.prototype;
v487.writeLayoutComponent = writeLayoutComponent;
var v488 = LayoutComponent.prototype;
v488.setCharacters = setCharacters;
var v489 = LayoutComponent.prototype;
v489.isRoom = isRoom;
var v490 = TranslationComponent;
var v1530 = new LayoutComponent;
v490.prototype = v1530;
var v491 = TranslationComponent.prototype;
v491.writeLayoutComponent = v4;
var v492 = UppercaseTranslationComponent;
var v1531 = new LayoutComponent;
v492.prototype = v1531;
var v493 = UppercaseTranslationComponent.prototype;
v493.writeLayoutComponent = v5;
var v494 = DnaComponent;
var v1532 = new LayoutComponent;
v494.prototype = v1532;
var v495 = DnaComponent.prototype;
v495.writeLayoutComponent = v6;
new RestrictionSiteCollection;
var v496 = RestrictionSiteCollection.prototype;
v496.addRestrictionSite = addRestrictionSite;
var v497 = RestrictionSiteCollection.prototype;
v497.sortRestrictionSites = sortRestrictionSites;
var v498 = RestrictionSiteCollection.prototype;
v498.getSitesInRange = getSitesInRange;
JAMScript.set(document, "onload", v7);
var v499 = document.getElementById("submitbtn");
JAMScript.set(v499, "onclick", v8);
var v500 = document.getElementById("clearbtn");
JAMScript.set(v500, "onclick", v9);

