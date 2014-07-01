function v13() {
  var v884 = document.forms;
  var v742 = v884[0];
  var v453 = v742.elements;
  var v14 = v453[0];
  v14.value = " ";
  return
}
function v12() {
  try {
    restMap(document)
  }catch(e$$5) {
    var v15 = "The following error was encountered: " + e$$5;
    alert(v15)
  }
  return
}
function v11() {
  var v454 = document.main_form;
  var v16 = v454.main_submit;
  v16.focus();
  return
}
function v10(start$$10, stop$$6) {
  function v9(str$$11, p1$$5, offset$$17, s$$7) {
    return p1$$5.replace(/./g, " ")
  }
  function v8(str$$10, p1$$4, offset$$16, s$$6) {
    return p1$$4.replace(/./g, " ")
  }
  var v17 = outputWindow.document;
  var v455 = this.positionLabel;
  var v18 = rightNum(v455, "", 8, "");
  JAMScript.call(v17.write, v17, [v18]);
  var v456 = this.characters;
  var v19 = v456.slice(start$$10, stop$$6);
  var text$$15 = v19.join("");
  text$$15 = text$$15.replace(/^(\d+)/g, v8);
  text$$15 = text$$15.replace(/(\d+)$/g, v9);
  var v20 = outputWindow.document;
  var v21 = text$$15 + "\n";
  JAMScript.call(v20.write, v20, [v21]);
  var v22 = this.positionLabel;
  var v23 = stop$$6 - start$$10;
  this.positionLabel = v22 + v23;
  return
}
function v7(start$$9, stop$$5) {
  var v24 = outputWindow.document;
  var v457 = this.positionLabel;
  var v25 = rightNum(v457, "", 8, "");
  JAMScript.call(v24.write, v24, [v25]);
  var v26 = outputWindow.document;
  var v885 = this.characters;
  var v743 = v885.slice(start$$9, stop$$5);
  var v458 = v743.join("");
  var v27 = v458 + "\n";
  JAMScript.call(v26.write, v26, [v27]);
  var v28 = this.positionLabel;
  var v29 = stop$$5 - start$$9;
  this.positionLabel = v28 + v29;
  return
}
function v6(start$$8, stop$$4) {
  var v744 = this.characters;
  var v459 = v744.slice(start$$8, stop$$4);
  var v30 = v459.join("");
  var textToWrite = v30 + "\n";
  var v460 = textToWrite.search(/\w/);
  var v36 = v460 != -1;
  if(v36) {
    var v31 = outputWindow.document;
    var v461 = this.positionLabel;
    var v32 = rightNum(v461, "", 8, "");
    JAMScript.call(v31.write, v31, [v32]);
    var v33 = this.positionLabel;
    var v462 = textToWrite.match(/[A-Z]/g);
    var v34 = v462.length;
    this.positionLabel = v33 + v34;
    var v35 = outputWindow.document;
    JAMScript.call(v35.write, v35, [textToWrite])
  }
  return
}
function v5(start$$7, stop$$3) {
  var v37 = outputWindow.document;
  var v463 = this.positionLabel;
  var v38 = rightNum(v463, "", 8, "");
  JAMScript.call(v37.write, v37, [v38]);
  var v39 = outputWindow.document;
  var v886 = this.characters;
  var v745 = v886.slice(start$$7, stop$$3);
  var v464 = v745.join("");
  var v40 = v464 + "\n";
  JAMScript.call(v39.write, v39, [v40]);
  var v41 = this.positionLabel;
  var v465 = stop$$3 - start$$7;
  var v42 = v465 / 3;
  this.positionLabel = v41 + v42;
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
  var v43 = arrayOfSequences[0];
  var lengthOfAlign = v43.length;
  var v466 = arrayOfSequences.length;
  var v44 = v466 < 2;
  if(v44) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v467 = arrayOfTitles.length;
  var v46 = i$$1 < v467;
  for(;v46;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v887 = arrayOfTitles[i$$1]
    }
    var v746 = v887.search(/\S/);
    var v468 = v746 == -1;
    var v748 = !v468;
    if(v748) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v982 = arrayOfSequences[i$$1]
      }
      var v888 = v982.search(/\S/);
      var v747 = v888 == -1;
      var v890 = !v747;
      if(v890) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v983 = arrayOfSequences[i$$1]
        }
        var v889 = v983.length;
        v747 = v889 != lengthOfAlign
      }
      v468 = v747
    }
    var v45 = v468;
    if(v45) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v469 = arrayOfTitles.length;
    v46 = i$$1 < v469
  }
  return true
}
function checkCodonTable(codonTable) {
  var v749 = codonTable.search(/AmAcid/);
  var v470 = v749 == -1;
  var v751 = !v470;
  if(v751) {
    var v891 = codonTable.search(/Codon/);
    var v750 = v891 == -1;
    var v893 = !v750;
    if(v893) {
      var v984 = codonTable.search(/Number/);
      var v892 = v984 == -1;
      var v986 = !v892;
      if(v986) {
        var v1052 = codonTable.search(/\/1000/);
        var v985 = v1052 == -1;
        var v1054 = !v985;
        if(v1054) {
          var v1053 = codonTable.search(/Fraction\s*\.\./);
          v985 = v1053 == -1
        }
        v892 = v985
      }
      v750 = v892
    }
    v470 = v750
  }
  var v47 = v470;
  if(v47) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v752 = formElement.value;
  var v471 = v752.search(/\S/);
  var v48 = v471 == -1;
  if(v48) {
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
  var v472 = arrayOfPatterns.length;
  var v51 = z$$2 < v472;
  for(;v51;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v753 = arrayOfPatterns[z$$2]
    }
    var v473 = v753.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v49 = v473 == -1;
    if(v49) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v754 = arrayOfPatterns[z$$2]
    }
    var v474 = moreExpressionCheck(v754);
    var v50 = v474 == false;
    if(v50) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v475 = arrayOfPatterns.length;
    v51 = z$$2 < v475
  }
  var v52 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v52);
  var v53 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v53);
  var j = 0;
  var v476 = arrayOfPatterns.length;
  var v60 = j < v476;
  for(;v60;) {
    var v54 = geneticCodeMatchExp;
    var v55 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v894 = arrayOfPatterns[j]
    }
    var v755 = v894.match(/\/.+\//);
    var v477 = v755 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1525 = eval("introspect(JAMScript.introspectors.processAll) { " + v477 + " }")
    }else {
      var v1525 = JAMScript.call(eval, null, [v477])
    }
    v54[v55] = v1525;
    var v56 = geneticCodeMatchResult;
    var v57 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v756 = arrayOfPatterns[j]
    }
    var v478 = v756.match(/=[a-zA-Z\*]/);
    var v1526 = v478.toString();
    v56[v57] = v1526;
    var v58 = geneticCodeMatchResult;
    var v59 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v479 = geneticCodeMatchResult[j]
    }
    var v1527 = v479.replace(/=/g, "");
    v58[v59] = v1527;
    j = j + 1;
    var v480 = arrayOfPatterns.length;
    v60 = j < v480
  }
  var i$$2 = 0;
  var v757 = testSequence.length;
  var v481 = v757 - 3;
  var v67 = i$$2 <= v481;
  for(;v67;) {
    var v61 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v61);
    j = 0;
    var v482 = geneticCodeMatchExp.length;
    var v65 = j < v482;
    for(;v65;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v758 = geneticCodeMatchExp[j]
      }
      var v483 = codon.search(v758);
      var v64 = v483 != -1;
      if(v64) {
        var v63 = oneMatch == true;
        if(v63) {
          var v484 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v62 = v484 + ".";
          alert(v62);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v485 = geneticCodeMatchExp.length;
      v65 = j < v485
    }
    var v66 = oneMatch == false;
    if(v66) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v759 = testSequence.length;
    var v486 = v759 - 3;
    v67 = i$$2 <= v486
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v487 = arrayOfPatterns$$1.length;
  var v69 = z$$3 < v487;
  for(;v69;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v760 = arrayOfPatterns$$1[z$$3]
    }
    var v488 = v760.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v68 = v488 != -1;
    if(v68) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v489 = arrayOfPatterns$$1.length;
    v69 = z$$3 < v489
  }
  var i$$3 = 0;
  var v490 = arrayOfPatterns$$1.length;
  var v73 = i$$3 < v490;
  for(;v73;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v761 = arrayOfPatterns$$1[i$$3]
    }
    var v491 = "[" + v761;
    var v70 = v491 + "]";
    var re = new RegExp(v70, "gi");
    var j$$1 = i$$3 + 1;
    var v492 = arrayOfPatterns$$1.length;
    var v72 = j$$1 < v492;
    for(;v72;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v762 = arrayOfPatterns$$1[j$$1]
      }
      var v493 = v762.search(re);
      var v71 = v493 != -1;
      if(v71) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v494 = arrayOfPatterns$$1.length;
      v72 = j$$1 < v494
    }
    i$$3 = i$$3 + 1;
    var v495 = arrayOfPatterns$$1.length;
    v73 = i$$3 < v495
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v496 = arrayOfPatterns$$2.length;
  var v76 = z$$4 < v496;
  for(;v76;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v763 = arrayOfPatterns$$2[z$$4]
    }
    var v497 = v763.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v74 = v497 == -1;
    if(v74) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v764 = arrayOfPatterns$$2[z$$4]
    }
    var v498 = moreExpressionCheck(v764);
    var v75 = v498 == false;
    if(v75) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v499 = arrayOfPatterns$$2.length;
    v76 = z$$4 < v499
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v895 = getSequenceFromFasta(text$$7);
  var v765 = v895.replace(/[^A-Za-z]/g, "");
  var v500 = v765.length;
  var v78 = v500 > maxInput;
  if(v78) {
    var v501 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v77 = v501 + " characters.";
    alert(v77);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v502 = text$$8.length;
  var v80 = v502 > maxInput$$1;
  if(v80) {
    var v503 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v79 = v503 + " characters.";
    alert(v79);
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
  var v81 = outputWindow.document;
  JAMScript.call(v81.write, v81, ["</form>"]);
  return true
}
function closePre() {
  var v82 = outputWindow.document;
  JAMScript.call(v82.write, v82, ["</div>"]);
  var v83 = outputWindow.document;
  JAMScript.call(v83.write, v83, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v84 = outputWindow.document;
  JAMScript.call(v84.write, v84, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v85 = outputWindow.document;
  JAMScript.call(v85.write, v85, ["</body>\n</html>\n"]);
  outputWindow.status = "Done.";
  var v86 = outputWindow.document;
  v86.close();
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
  var v504 = alignArray.length;
  var v87 = v504 < 3;
  if(v87) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v505 = alignArray.length;
  var v89 = i$$4 < v505;
  for(;v89;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v766 = alignArray[i$$4]
    }
    var v506 = v766.search(/[^\s]+\s/);
    var v88 = v506 == -1;
    if(v88) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v507 = alignArray.length;
    v89 = i$$4 < v507
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
  var v508 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v92 = v508 != -1;
  if(v92) {
    var v91 = matchArray = re$$1.exec(sequenceData);
    for(;v91;) {
      var v90 = matchArray[0];
      arrayOfFasta.push(v90);
      v91 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v509 = sequence$$2.length;
  var v93 = "&gt;results for " + v509;
  var stringToReturn = v93 + " residue sequence ";
  var v510 = fastaSequenceTitle.search(/[^\s]/);
  var v95 = v510 != -1;
  if(v95) {
    var v511 = stringToReturn + '"';
    var v94 = v511 + fastaSequenceTitle;
    stringToReturn = v94 + '"'
  }
  var v512 = stringToReturn + ' starting "';
  var v513 = sequence$$2.substring(0, 10);
  var v96 = v512 + v513;
  stringToReturn = v96 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v514 = sequenceOne.length;
  var v97 = "Search results for " + v514;
  var stringToReturn$$1 = v97 + " residue sequence ";
  var v515 = fastaSequenceTitleOne.search(/[^\s]/);
  var v99 = v515 != -1;
  if(v99) {
    var v516 = stringToReturn$$1 + '"';
    var v98 = v516 + fastaSequenceTitleOne;
    stringToReturn$$1 = v98 + '"'
  }
  var v517 = stringToReturn$$1 + ' starting "';
  var v518 = sequenceOne.substring(0, 10);
  var v100 = v517 + v518;
  stringToReturn$$1 = v100 + '"\n';
  var v519 = stringToReturn$$1 + "and ";
  var v520 = sequenceTwo.length;
  var v101 = v519 + v520;
  stringToReturn$$1 = v101 + " residue sequence ";
  var v521 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v103 = v521 != -1;
  if(v103) {
    var v522 = stringToReturn$$1 + '"';
    var v102 = v522 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v102 + '"'
  }
  var v523 = stringToReturn$$1 + ' starting "';
  var v524 = sequenceTwo.substring(0, 10);
  var v104 = v523 + v524;
  stringToReturn$$1 = v104 + '"';
  var v105 = '<div class="info">' + stringToReturn$$1;
  return v105 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v106 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v106);
  var j$$2 = 0;
  var v525 = arrayOfPatterns$$3.length;
  var v109 = j$$2 < v525;
  for(;v109;) {
    var v107 = geneticCodeMatchExp$$1;
    var v108 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v896 = arrayOfPatterns$$3[j$$2]
    }
    var v767 = v896.match(/\/.+\//);
    var v526 = v767 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1528 = eval("introspect(JAMScript.introspectors.processAll) { " + v526 + " }")
    }else {
      var v1528 = JAMScript.call(eval, null, [v526])
    }
    v107[v108] = v1528;
    j$$2 = j$$2 + 1;
    var v527 = arrayOfPatterns$$3.length;
    v109 = j$$2 < v527
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v110 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v110);
  var j$$3 = 0;
  var v528 = arrayOfPatterns$$4.length;
  var v115 = j$$3 < v528;
  for(;v115;) {
    var v111 = geneticCodeMatchResult$$1;
    var v112 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v768 = arrayOfPatterns$$4[j$$3]
    }
    var v529 = v768.match(/=[a-zA-Z\*]/);
    var v1529 = v529.toString();
    v111[v112] = v1529;
    var v113 = geneticCodeMatchResult$$1;
    var v114 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v530 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1530 = v530.replace(/=/g, "");
    v113[v114] = v1530;
    j$$3 = j$$3 + 1;
    var v531 = arrayOfPatterns$$4.length;
    v115 = j$$3 < v531
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v532 = sequence$$3.length;
  var v116 = "Results for " + v532;
  var stringToReturn$$2 = v116 + " residue sequence ";
  var v533 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v118 = v533 != -1;
  if(v118) {
    var v534 = stringToReturn$$2 + '"';
    var v117 = v534 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v117 + '"'
  }
  var v535 = stringToReturn$$2 + ' starting "';
  var v536 = sequence$$3.substring(0, 10);
  var v119 = v535 + v536;
  stringToReturn$$2 = v119 + '"';
  var v120 = '<div class="info">' + stringToReturn$$2;
  return v120 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v769 = "Results for " + topology;
  var v537 = v769 + " ";
  var v538 = sequence$$4.length;
  var v121 = v537 + v538;
  var stringToReturn$$3 = v121 + " residue sequence ";
  var v539 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v123 = v539 != -1;
  if(v123) {
    var v540 = stringToReturn$$3 + '"';
    var v122 = v540 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v122 + '"'
  }
  var v541 = stringToReturn$$3 + ' starting "';
  var v542 = sequence$$4.substring(0, 10);
  var v124 = v541 + v542;
  stringToReturn$$3 = v124 + '"';
  var v125 = '<div class="info">' + stringToReturn$$3;
  return v125 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v543 = sequenceOne$$1.length;
  var v126 = "Alignment results for " + v543;
  var stringToReturn$$4 = v126 + " residue sequence ";
  var v544 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v128 = v544 != -1;
  if(v128) {
    var v545 = stringToReturn$$4 + '"';
    var v127 = v545 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v127 + '"'
  }
  var v546 = stringToReturn$$4 + ' starting "';
  var v547 = sequenceOne$$1.substring(0, 10);
  var v129 = v546 + v547;
  stringToReturn$$4 = v129 + '"\n';
  var v548 = stringToReturn$$4 + "and ";
  var v549 = sequenceTwo$$1.length;
  var v130 = v548 + v549;
  stringToReturn$$4 = v130 + " residue sequence ";
  var v550 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v132 = v550 != -1;
  if(v132) {
    var v551 = stringToReturn$$4 + '"';
    var v131 = v551 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v131 + '"'
  }
  var v552 = stringToReturn$$4 + ' starting "';
  var v553 = sequenceTwo$$1.substring(0, 10);
  var v133 = v552 + v553;
  stringToReturn$$4 = v133 + '"';
  var v134 = '<div class="info">' + stringToReturn$$4;
  return v134 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v136 = j$$4 < lengthOut;
  for(;v136;) {
    var v554 = Math.random();
    var v555 = components.length;
    var v135 = v554 * v555;
    tempNum = Math.floor(v135);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v136 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v556 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v137 = v556 != -1;
  if(v137) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v557 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v139 = v557 != -1;
  if(v139) {
    var v138 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v138.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v770 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v558 = v770 != -1;
  var v772 = !v558;
  if(v772) {
    var v897 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v771 = v897 != -1;
    var v899 = !v771;
    if(v899) {
      var v987 = expressionToCheck.search(/\[\]/);
      var v898 = v987 != -1;
      var v989 = !v898;
      if(v989) {
        var v1055 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v988 = v1055 != -1;
        var v1057 = !v988;
        if(v1057) {
          var v1104 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1056 = v1104 != -1;
          var v1106 = !v1056;
          if(v1106) {
            var v1152 = expressionToCheck.search(/\|\|/);
            var v1105 = v1152 != -1;
            var v1154 = !v1105;
            if(v1154) {
              var v1188 = expressionToCheck.search(/\/\|/);
              var v1153 = v1188 != -1;
              var v1190 = !v1153;
              if(v1190) {
                var v1215 = expressionToCheck.search(/\|\//);
                var v1189 = v1215 != -1;
                var v1217 = !v1189;
                if(v1217) {
                  var v1242 = expressionToCheck.search(/\[.\]/);
                  var v1216 = v1242 != -1;
                  var v1244 = !v1216;
                  if(v1244) {
                    var v1267 = expressionToCheck.search(/\</);
                    var v1243 = v1267 != -1;
                    var v1269 = !v1243;
                    if(v1269) {
                      var v1268 = expressionToCheck.search(/\>/);
                      v1243 = v1268 != -1
                    }
                    v1216 = v1243
                  }
                  v1189 = v1216
                }
                v1153 = v1189
              }
              v1105 = v1153
            }
            v1056 = v1105
          }
          v988 = v1056
        }
        v898 = v988
      }
      v771 = v898
    }
    v558 = v771
  }
  var v140 = v558;
  if(v140) {
    return false
  }
  return true
}
function openForm() {
  var v141 = outputWindow.document;
  JAMScript.call(v141.write, v141, ['<form action="">\n']);
  return true
}
function openPre() {
  var v142 = outputWindow.document;
  JAMScript.call(v142.write, v142, ["<pre>"]);
  var v143 = outputWindow.document;
  JAMScript.call(v143.write, v143, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v144 = outputWindow.document;
  JAMScript.call(v144.write, v144, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1544 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1544[2], v1544[1], v1544[0]);
  outputWindow.focus();
  var v145 = outputWindow.document;
  var v900 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v773 = v900 + "<head>\n";
  var v559 = v773 + "<title>Sequence Manipulation Suite</title>\n";
  var v146 = v559 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v145.write, v145, [v146]);
  if(isColor) {
    var v147 = outputWindow.document;
    var v1336 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1314 = v1336 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1292 = v1314 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1270 = v1292 + "div.info {font-weight: bold}\n";
    var v1245 = v1270 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1218 = v1245 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1191 = v1218 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1155 = v1191 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1107 = v1155 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1058 = v1107 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v990 = v1058 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v901 = v990 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v774 = v901 + "td.many {color: #000000}\n";
    var v560 = v774 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v148 = v560 + "</style>\n";
    JAMScript.call(v147.write, v147, [v148])
  }else {
    var v149 = outputWindow.document;
    var v1358 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1337 = v1358 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1315 = v1337 + "div.title {display: none}\n";
    var v1293 = v1315 + "div.info {font-weight: bold}\n";
    var v1271 = v1293 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1246 = v1271 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1219 = v1246 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1192 = v1219 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1156 = v1192 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1108 = v1156 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1059 = v1108 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v991 = v1059 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v902 = v991 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v775 = v902 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v561 = v775 + "img {display: none}\n";
    var v150 = v561 + "</style>\n";
    JAMScript.call(v149.write, v149, [v150])
  }
  var v151 = outputWindow.document;
  var v903 = "</head>\n" + '<body class="main">\n';
  var v776 = v903 + '<div class="title">';
  var v562 = v776 + title$$6;
  var v152 = v562 + " results</div>\n";
  JAMScript.call(v151.write, v151, [v152]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1545 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1545[2], v1545[1], v1545[0]);
  outputWindow.focus();
  var v153 = outputWindow.document;
  var v904 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v777 = v904 + "<head>\n";
  var v563 = v777 + "<title>Sequence Manipulation Suite</title>\n";
  var v154 = v563 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v153.write, v153, [v154]);
  if(isBackground) {
    var v155 = outputWindow.document;
    var v1338 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1316 = v1338 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1294 = v1316 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1272 = v1294 + "div.info {font-weight: bold}\n";
    var v1247 = v1272 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1220 = v1247 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1193 = v1220 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1157 = v1193 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1109 = v1157 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1060 = v1109 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v992 = v1060 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v905 = v992 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v778 = v905 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v564 = v778 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v156 = v564 + "</style>\n";
    JAMScript.call(v155.write, v155, [v156])
  }else {
    var v157 = outputWindow.document;
    var v1378 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1359 = v1378 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1339 = v1359 + "div.title {display: none}\n";
    var v1317 = v1339 + "div.info {font-weight: bold}\n";
    var v1295 = v1317 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1273 = v1295 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1248 = v1273 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1221 = v1248 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1194 = v1221 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1158 = v1194 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1110 = v1158 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1061 = v1110 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v993 = v1061 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v906 = v993 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v779 = v906 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v565 = v779 + "img {display: none}\n";
    var v158 = v565 + "</style>\n";
    JAMScript.call(v157.write, v157, [v158])
  }
  var v159 = outputWindow.document;
  var v907 = "</head>\n" + '<body class="main">\n';
  var v780 = v907 + '<div class="title">';
  var v566 = v780 + title$$8;
  var v160 = v566 + " results</div>\n";
  JAMScript.call(v159.write, v159, [v160]);
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
  var v567 = dnaSequence$$1.search(/./);
  var v161 = v567 != -1;
  if(v161) {
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
  var v162 = j$$5 < lengthOfColumn;
  for(;v162;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v162 = j$$5 < lengthOfColumn
  }
  var v163 = tempString + theNumber;
  theNumber = v163 + " ";
  var v164 = sequenceToAppend + theNumber;
  sequenceToAppend = v164 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v568 = testArray[0];
  var v165 = v568 != testString;
  if(v165) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v569 = testString.search(re$$2);
  var v166 = v569 == -1;
  if(v166) {
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
  var v167 = !caughtException;
  if(v167) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v168 = testString != "1X2X3X";
  if(v168) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v570 = testNum.toFixed(3);
  var v169 = v570 != 2489.824;
  if(v169) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v571 = testNum.toPrecision(5);
  var v170 = v571 != 2489.8;
  if(v170) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v572 = theNumber$$1.search(/\d/);
  var v171 = v572 == -1;
  if(v171) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v781 = emblFile.search(/ID/);
  var v573 = v781 == -1;
  var v783 = !v573;
  if(v783) {
    var v908 = emblFile.search(/AC/);
    var v782 = v908 == -1;
    var v910 = !v782;
    if(v910) {
      var v994 = emblFile.search(/DE/);
      var v909 = v994 == -1;
      var v996 = !v909;
      if(v996) {
        var v995 = emblFile.search(/SQ/);
        v909 = v995 == -1
      }
      v782 = v909
    }
    v573 = v782
  }
  var v172 = v573;
  if(v172) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v574 = theNumber$$2.search(/\d/);
  var v173 = v574 == -1;
  if(v173) {
    alert("Please enter a number.");
    return false
  }
  var v175 = theNumber$$2 > maxInput$$2;
  if(v175) {
    var v575 = "Please enter a number less than or equal to " + maxInput$$2;
    var v174 = v575 + ".";
    alert(v174);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v576 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v176 = v576 != -1;
  if(v176) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v577 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v177 = v577 != -1;
  if(v177) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v784 = genBankFile.search(/LOCUS/);
  var v578 = v784 == -1;
  var v786 = !v578;
  if(v786) {
    var v911 = genBankFile.search(/DEFINITION/);
    var v785 = v911 == -1;
    var v913 = !v785;
    if(v913) {
      var v997 = genBankFile.search(/ACCESSION/);
      var v912 = v997 == -1;
      var v999 = !v912;
      if(v999) {
        var v998 = genBankFile.search(/ORIGIN/);
        v912 = v998 == -1
      }
      v785 = v912
    }
    v578 = v785
  }
  var v178 = v578;
  if(v178) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v787 = genBankFile$$1.search(/LOCUS/);
  var v579 = v787 == -1;
  var v789 = !v579;
  if(v789) {
    var v914 = genBankFile$$1.search(/DEFINITION/);
    var v788 = v914 == -1;
    var v916 = !v788;
    if(v916) {
      var v1000 = genBankFile$$1.search(/ACCESSION/);
      var v915 = v1000 == -1;
      var v1002 = !v915;
      if(v1002) {
        var v1001 = genBankFile$$1.search(/ORIGIN/);
        v915 = v1001 == -1
      }
      v788 = v915
    }
    v579 = v788
  }
  var v179 = v579;
  if(v179) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v580 = genBankFile$$1.search(/FEATURES {13}/);
  var v180 = v580 == -1;
  if(v180) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v790 = emblFile$$1.search(/ID/);
  var v581 = v790 == -1;
  var v792 = !v581;
  if(v792) {
    var v917 = emblFile$$1.search(/AC/);
    var v791 = v917 == -1;
    var v919 = !v791;
    if(v919) {
      var v1003 = emblFile$$1.search(/DE/);
      var v918 = v1003 == -1;
      var v1005 = !v918;
      if(v1005) {
        var v1004 = emblFile$$1.search(/SQ/);
        v918 = v1004 == -1
      }
      v791 = v918
    }
    v581 = v791
  }
  var v181 = v581;
  if(v181) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v582 = emblFile$$1.search(/^FT/m);
  var v182 = v582 == -1;
  if(v182) {
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
  var v190 = i$$5 < stopBase;
  for(;v190;) {
    var v183 = i$$5 + 1;
    lineOfText = rightNum(v183, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v583 = basePerLine / groupSize;
    var v187 = j$$6 <= v583;
    for(;v187;) {
      var v186 = k < groupSize;
      for(;v186;) {
        var v184 = lineOfText;
        var v584 = k + i$$5;
        var v185 = text$$10.charAt(v584);
        lineOfText = v184 + v185;
        k = k + 1;
        v186 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v585 = basePerLine / groupSize;
      v187 = j$$6 <= v585
    }
    var v188 = outputWindow.document;
    var v189 = lineOfText + "\n";
    JAMScript.call(v188.write, v188, [v189]);
    lineOfText = "";
    v190 = i$$5 < stopBase
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
    var v586 = adjustment < 0;
    if(v586) {
      v586 = adjusted >= 0
    }
    var v191 = v586;
    if(v191) {
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
  var v224 = i$$6 < stopBase$$2;
  for(;v224;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v587 = basePerLine$$2 / groupSize$$2;
    var v200 = j$$7 <= v587;
    for(;v200;) {
      var v195 = k$$1 < groupSize$$2;
      for(;v195;) {
        var v588 = i$$6 + k$$1;
        var v192 = v588 >= stopBase$$2;
        if(v192) {
          break
        }
        var v193 = lineOfText$$1;
        var v589 = k$$1 + i$$6;
        var v194 = text$$12.charAt(v589);
        lineOfText$$1 = v193 + v194;
        k$$1 = k$$1 + 1;
        v195 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v198 = numberPosition$$1 == "above";
      if(v198) {
        var v196 = aboveNum;
        var v590 = adjustNumbering(i$$6, numberingAdjustment);
        var v197 = rightNum(v590, "", groupSize$$2, tabIn$$3);
        aboveNum = v196 + v197
      }
      var v199 = i$$6 >= stopBase$$2;
      if(v199) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v591 = basePerLine$$2 / groupSize$$2;
      v200 = j$$7 <= v591
    }
    var v223 = numberPosition$$1 == "left";
    if(v223) {
      var v201 = outputWindow.document;
      var v920 = adjustNumbering(lineNum, numberingAdjustment);
      var v793 = rightNum(v920, "", 8, tabIn$$3);
      var v592 = v793 + lineOfText$$1;
      var v202 = v592 + "\n";
      JAMScript.call(v201.write, v201, [v202]);
      var v206 = strands$$1 == "two";
      if(v206) {
        var v203 = outputWindow.document;
        var v921 = adjustNumbering(lineNum, numberingAdjustment);
        var v794 = rightNum(v921, "", 8, tabIn$$3);
        var v795 = complement(lineOfText$$1);
        var v593 = v794 + v795;
        var v204 = v593 + "\n";
        JAMScript.call(v203.write, v203, [v204]);
        var v205 = outputWindow.document;
        JAMScript.call(v205.write, v205, ["\n"])
      }
    }else {
      var v222 = numberPosition$$1 == "right";
      if(v222) {
        var v207 = outputWindow.document;
        var v796 = lineOfText$$1;
        var v797 = adjustNumbering(i$$6, numberingAdjustment);
        var v594 = v796 + v797;
        var v208 = v594 + "\n";
        JAMScript.call(v207.write, v207, [v208]);
        var v212 = strands$$1 == "two";
        if(v212) {
          var v209 = outputWindow.document;
          var v798 = complement(lineOfText$$1);
          var v799 = adjustNumbering(i$$6, numberingAdjustment);
          var v595 = v798 + v799;
          var v210 = v595 + "\n";
          JAMScript.call(v209.write, v209, [v210]);
          var v211 = outputWindow.document;
          JAMScript.call(v211.write, v211, ["\n"])
        }
      }else {
        var v221 = numberPosition$$1 == "above";
        if(v221) {
          var v213 = outputWindow.document;
          var v214 = aboveNum + "\n";
          JAMScript.call(v213.write, v213, [v214]);
          var v215 = outputWindow.document;
          var v216 = lineOfText$$1 + "\n";
          JAMScript.call(v215.write, v215, [v216]);
          var v220 = strands$$1 == "two";
          if(v220) {
            var v217 = outputWindow.document;
            var v596 = complement(lineOfText$$1);
            var v218 = v596 + "\n";
            JAMScript.call(v217.write, v217, [v218]);
            var v219 = outputWindow.document;
            JAMScript.call(v219.write, v219, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v224 = i$$6 < stopBase$$2
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
  var v245 = i$$7 < stopBase$$3;
  for(;v245;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v597 = basePerLine$$3 / groupSize$$3;
    var v233 = j$$8 <= v597;
    for(;v233;) {
      var v228 = k$$2 < groupSize$$3;
      for(;v228;) {
        var v598 = i$$7 + k$$2;
        var v225 = v598 >= stopBase$$3;
        if(v225) {
          break
        }
        var v226 = lineOfText$$2;
        var v599 = k$$2 + i$$7;
        var v227 = text$$13.charAt(v599);
        lineOfText$$2 = v226 + v227;
        k$$2 = k$$2 + 1;
        v228 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v231 = numberPosition$$2 == "above";
      if(v231) {
        var v229 = aboveNum$$1;
        var v230 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v229 + v230
      }
      var v232 = i$$7 >= stopBase$$3;
      if(v232) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v600 = basePerLine$$3 / groupSize$$3;
      v233 = j$$8 <= v600
    }
    var v244 = numberPosition$$2 == "left";
    if(v244) {
      var v234 = outputWindow.document;
      var v800 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v601 = v800 + lineOfText$$2;
      var v235 = v601 + "\n";
      JAMScript.call(v234.write, v234, [v235])
    }else {
      var v243 = numberPosition$$2 == "right";
      if(v243) {
        var v236 = outputWindow.document;
        var v602 = lineOfText$$2 + i$$7;
        var v237 = v602 + "\n";
        JAMScript.call(v236.write, v236, [v237])
      }else {
        var v242 = numberPosition$$2 == "above";
        if(v242) {
          var v238 = outputWindow.document;
          var v239 = aboveNum$$1 + "\n";
          JAMScript.call(v238.write, v238, [v239]);
          var v240 = outputWindow.document;
          var v241 = lineOfText$$2 + "\n";
          JAMScript.call(v240.write, v240, [v241])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v245 = i$$7 < stopBase$$3
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
  var v801 = sequence$$13.length;
  var v603 = v801 <= firstIndexToMutate;
  var v803 = !v603;
  if(v803) {
    var v802 = lastIndexToMutate < 0;
    var v922 = !v802;
    if(v922) {
      v802 = lastIndexToMutate <= firstIndexToMutate
    }
    v603 = v802
  }
  var v246 = v603;
  if(v246) {
    numMut = 0
  }
  var i$$8 = 0;
  var v254 = i$$8 < numMut;
  for(;v254;) {
    maxNum = sequence$$13.length;
    var v604 = Math.random();
    var v247 = v604 * maxNum;
    randNum = Math.floor(v247);
    var v605 = randNum < firstIndexToMutate;
    var v804 = !v605;
    if(v804) {
      v605 = randNum > lastIndexToMutate
    }
    var v248 = v605;
    if(v248) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v254 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v606 = Math.random();
      var v607 = components$$1.length;
      var v249 = v606 * v607;
      componentsIndex = Math.round(v249);
      var v608 = components$$1.length;
      var v250 = componentsIndex == v608;
      if(v250) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v609 = components$$1[componentsIndex]
      }
      var v251 = v609 != currentChar;
      if(v251) {
        needNewChar = false
      }
    }
    var v610 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v611 = components$$1[componentsIndex]
    }
    var v252 = v610 + v611;
    var v612 = randNum + 1;
    var v613 = sequence$$13.length;
    var v253 = sequence$$13.substring(v612, v613);
    sequence$$13 = v252 + v253;
    i$$8 = i$$8 + 1;
    v254 = i$$8 < numMut
  }
  var v255 = outputWindow.document;
  var v256 = addReturns(sequence$$13);
  JAMScript.call(v255.write, v255, [v256]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v261 = j$$9 < lengthOut$$1;
  for(;v261;) {
    var v614 = Math.random();
    var v615 = components$$2.length;
    var v257 = v614 * v615;
    tempNum$$1 = Math.floor(v257);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v616 = sequence$$14.length;
    var v260 = v616 == 60;
    if(v260) {
      var v258 = outputWindow.document;
      var v259 = sequence$$14 + "\n";
      JAMScript.call(v258.write, v258, [v259]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v261 = j$$9 < lengthOut$$1
  }
  var v262 = outputWindow.document;
  var v263 = sequence$$14 + "\n";
  JAMScript.call(v262.write, v262, [v263]);
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
  var v267 = dnaConformation == "circular";
  if(v267) {
    var v264 = sequence$$15.substring(0, lookAhead);
    shiftValue = v264.length;
    var v923 = sequence$$15.length;
    var v805 = v923 - lookAhead;
    var v806 = sequence$$15.length;
    var v617 = sequence$$15.substring(v805, v806);
    var v265 = v617 + sequence$$15;
    var v266 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v265 + v266;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v268 = outputWindow.document;
  JAMScript.call(v268.write, v268, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v269 = outputWindow.document;
  var v924 = '<tr><td class="title" width="200px">' + "Site:";
  var v807 = v924 + '</td><td class="title">';
  var v618 = v807 + "Positions:";
  var v270 = v618 + "</td></tr>\n";
  JAMScript.call(v269.write, v269, [v270]);
  var i$$9 = 0;
  var v619 = arrayOfItems.length;
  var v286 = i$$9 < v619;
  for(;v286;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v620 = arrayOfItems[i$$9]
    }
    var v271 = v620.match(/\/.+\//);
    matchExp = v271 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v925 = arrayOfItems[i$$9]
    }
    var v808 = v925.match(/\)\D*\d+/);
    var v621 = v808.toString();
    var v272 = v621.replace(/\)\D*/, "");
    cutDistance = parseFloat(v272);
    var v278 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v278;) {
      var v273 = matchExp.lastIndex;
      matchPosition = v273 - cutDistance;
      var v622 = matchPosition >= lowerLimit;
      if(v622) {
        v622 = matchPosition < upperLimit
      }
      var v276 = v622;
      if(v276) {
        timesFound = timesFound + 1;
        var v274 = tempString$$1 + ", ";
        var v623 = matchPosition - shiftValue;
        var v275 = v623 + 1;
        tempString$$1 = v274 + v275
      }
      var v624 = matchExp.lastIndex;
      var v809 = RegExp.lastMatch;
      var v625 = v809.length;
      var v277 = v624 - v625;
      matchExp.lastIndex = v277 + 1;
      v278 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v626 = tempString$$1.search(/\d/);
    var v279 = v626 != -1;
    if(v279) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v283 = timesFound == 0;
    if(v283) {
      backGroundClass = "none"
    }else {
      var v282 = timesFound == 1;
      if(v282) {
        backGroundClass = "one"
      }else {
        var v281 = timesFound == 2;
        if(v281) {
          backGroundClass = "two"
        }else {
          var v280 = timesFound == 3;
          if(v280) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v284 = outputWindow.document;
    var v1159 = '<tr><td class="' + backGroundClass;
    var v1111 = v1159 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1222 = arrayOfItems[i$$9]
    }
    var v1195 = v1222.match(/\([^\(]+\)/);
    var v1160 = v1195.toString();
    var v1112 = v1160.replace(/\(|\)/g, "");
    var v1062 = v1111 + v1112;
    var v1006 = v1062 + '</td><td class="';
    var v926 = v1006 + backGroundClass;
    var v810 = v926 + '">';
    var v627 = v810 + tempString$$1;
    var v285 = v627 + "</td></tr>\n";
    JAMScript.call(v284.write, v284, [v285]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v628 = arrayOfItems.length;
    v286 = i$$9 < v628
  }
  var v287 = outputWindow.document;
  JAMScript.call(v287.write, v287, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v288 = outputWindow.document;
  JAMScript.call(v288.write, v288, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v289 = outputWindow.document;
  var v1063 = '<tr><td class="title">' + "Pattern:";
  var v1007 = v1063 + '</td><td class="title">';
  var v927 = v1007 + "Times found:";
  var v811 = v927 + '</td><td class="title">';
  var v629 = v811 + "Percentage:";
  var v290 = v629 + "</td></tr>\n";
  JAMScript.call(v289.write, v289, [v290]);
  var i$$10 = 0;
  var v630 = arrayOfItems$$1.length;
  var v299 = i$$10 < v630;
  for(;v299;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v631 = arrayOfItems$$1[i$$10]
    }
    var v291 = v631.match(/\/[^\/]+\//);
    var matchExp$$1 = v291 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v632 = sequence$$16.search(matchExp$$1);
    var v293 = v632 != -1;
    if(v293) {
      var v292 = sequence$$16.match(matchExp$$1);
      tempNumber = v292.length
    }
    var percentage = 0;
    var v812 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1008 = arrayOfItems$$1[i$$10]
    }
    var v928 = v1008.match(/\d+/);
    var v813 = parseFloat(v928);
    var v633 = v812 - v813;
    var v296 = v633 > 0;
    if(v296) {
      var v294 = 100 * tempNumber;
      var v634 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v929 = arrayOfItems$$1[i$$10]
      }
      var v814 = v929.match(/\d+/);
      var v635 = parseFloat(v814);
      var v295 = v634 - v635;
      percentage = v294 / v295
    }
    var v297 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1223 = arrayOfItems$$1[i$$10]
    }
    var v1196 = v1223.match(/\([^\(]+\)\b/);
    var v1161 = v1196.toString();
    var v1113 = v1161.replace(/\(|\)/g, "");
    var v1064 = "<tr><td>" + v1113;
    var v1009 = v1064 + "</td><td>";
    var v930 = v1009 + tempNumber;
    var v815 = v930 + "</td><td>";
    var v816 = percentage.toFixed(2);
    var v636 = v815 + v816;
    var v298 = v636 + "</td></tr>\n";
    JAMScript.call(v297.write, v297, [v298]);
    i$$10 = i$$10 + 1;
    var v637 = arrayOfItems$$1.length;
    v299 = i$$10 < v637
  }
  var v300 = outputWindow.document;
  JAMScript.call(v300.write, v300, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v638 = sequence$$17.length;
  var v307 = v638 > 0;
  for(;v307;) {
    maxNum$$1 = sequence$$17.length;
    var v639 = Math.random();
    var v301 = v639 * maxNum$$1;
    randNum$$1 = Math.floor(v301);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v302 = randNum$$1 + 1;
    var v303 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v302, v303);
    sequence$$17 = tempString1 + tempString2;
    var v640 = tempSeq.length;
    var v306 = v640 == 60;
    if(v306) {
      var v304 = outputWindow.document;
      var v305 = tempSeq + "\n";
      JAMScript.call(v304.write, v304, [v305]);
      tempSeq = ""
    }
    var v641 = sequence$$17.length;
    v307 = v641 > 0
  }
  var v308 = outputWindow.document;
  var v309 = tempSeq + "\n";
  JAMScript.call(v308.write, v308, [v309]);
  return true
}
function getRestrictionSiteString(type$$25) {
  var v642 = type$$25.toLowerCase();
  var v311 = v642 == "standard";
  if(v311) {
    var v1524 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v1523 = v1524 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v1522 = v1523 + "/cgcg/ (AccII cg|cg)2,";
    var v1521 = v1522 + "/tccgga/ (AccIII t|ccgga)5,";
    var v1520 = v1521 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v1519 = v1520 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v1518 = v1519 + "/gtac/ (AfaI gt|ac)2,";
    var v1517 = v1518 + "/agcgct/ (AfeI agc|gct)3,";
    var v1516 = v1517 + "/cttaag/ (AflII c|ttaag)5,";
    var v1515 = v1516 + "/accggt/ (AgeI a|ccggt)5,";
    var v1514 = v1515 + "/actagt/ (AhlI a|ctagt)5,";
    var v1513 = v1514 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v1512 = v1513 + "/agct/ (AluI ag|ct)2,";
    var v1511 = v1512 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v1510 = v1511 + "/gggccc/ (ApaI gggcc|c)1,";
    var v1509 = v1510 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v1508 = v1509 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v1507 = v1508 + "/attaat/ (AseI at|taat)4,";
    var v1506 = v1507 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v1505 = v1506 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v1504 = v1505 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v1503 = v1504 + "/tgcgca/ (AviII tgc|gca)3,";
    var v1502 = v1503 + "/cctagg/ (AvrII c|ctagg)5,";
    var v1501 = v1502 + "/tggcca/ (BalI tgg|cca)3,";
    var v1500 = v1501 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v1499 = v1500 + "/atcgat/ (BanIII at|cgat)4,";
    var v1498 = v1499 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v1497 = v1498 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v1496 = v1497 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v1495 = v1496 + "/actagt/ (BcuI a|ctagt)5,";
    var v1494 = v1495 + "/tgatca/ (BclI t|gatca)5,";
    var v1493 = v1494 + "/ctag/ (BfaI c|tag)3,";
    var v1492 = v1493 + "/cttaag/ (BfrI c|ttaag)5,";
    var v1491 = v1492 + "/atgcat/ (BfrBI atg|cat)3,";
    var v1490 = v1491 + "/agatct/ (BglII a|gatct)5,";
    var v1489 = v1490 + "/cctagg/ (BlnI c|ctagg)5,";
    var v1488 = v1489 + "/atcgat/ (BseCI at|cgat)4,";
    var v1487 = v1488 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v1486 = v1487 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v1485 = v1486 + "/accggt/ (BshTI a|ccggt)5,";
    var v1484 = v1485 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v1483 = v1484 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v1482 = v1483 + "/atcgat/ (BspDI at|cgat)4,";
    var v1481 = v1482 + "/tccgga/ (BspEI t|ccgga)5,";
    var v1480 = v1481 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v1479 = v1480 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v1478 = v1479 + "/cgcg/ (BstUI cg|cg)2,";
    var v1477 = v1478 + "/atcgat/ (ClaI at|cgat)4,";
    var v1476 = v1477 + "/gatc/ (DpnII |gatc)4,";
    var v1475 = v1476 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v1474 = v1475 + "/cggccg/ (EagI c|ggccg)5,";
    var v1473 = v1474 + "/gaattc/ (EcoRI g|aattc)5,";
    var v1472 = v1473 + "/gatatc/ (EcoRV gat|atc)3,";
    var v1471 = v1472 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v1470 = v1471 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v1469 = v1470 + "/tgcgca/ (FspI tgc|gca)3,";
    var v1468 = v1469 + "/ggcc/ (HaeIII gg|cc)2,";
    var v1467 = v1468 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v1466 = v1467 + "/aagctt/ (HindIII a|agctt)5,";
    var v1465 = v1466 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v1464 = v1465 + "/gttaac/ (HpaI gtt|aac)3,";
    var v1463 = v1464 + "/ccgg/ (HpaII c|cgg)3,";
    var v1462 = v1463 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v1461 = v1462 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v1460 = v1461 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v1459 = v1460 + "/caattg/ (MfeI c|aattg)5,";
    var v1458 = v1459 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v1457 = v1458 + "/tggcca/ (MscI tgg|cca)3,";
    var v1456 = v1457 + "/ttaa/ (MseI t|taa)3,";
    var v1455 = v1456 + "/ccgg/ (MspI c|cgg)3,";
    var v1454 = v1455 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v1453 = v1454 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v1452 = v1453 + "/ccatgg/ (NcoI c|catgg)5,";
    var v1451 = v1452 + "/catatg/ (NdeI ca|tatg)4,";
    var v1450 = v1451 + "/gatc/ (NdeII |gatc)4,";
    var v1449 = v1450 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v1448 = v1449 + "/gctagc/ (NheI g|ctagc)5,";
    var v1447 = v1448 + "/catg/ (NlaIII catg|)0,";
    var v1446 = v1447 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v1445 = v1446 + "/tcgcga/ (NruI tcg|cga)3,";
    var v1444 = v1445 + "/atgcat/ (NsiI atgca|t)1,";
    var v1443 = v1444 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v1442 = v1443 + "/acatgt/ (PciI a|catgt)5,";
    var v1441 = v1442 + "/ggcc/ (PhoI gg|cc)2,";
    var v1440 = v1441 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v1439 = v1440 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v1438 = v1439 + "/ttataa/ (PsiI tta|taa)3,";
    var v1437 = v1438 + "/ctgcag/ (PstI ctgca|g)1,";
    var v1436 = v1437 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v1435 = v1436 + "/cagctg/ (PvuII cag|ctg)3,";
    var v1434 = v1435 + "/gtac/ (RsaI gt|ac)2,";
    var v1433 = v1434 + "/gagctc/ (SacI gagct|c)1,";
    var v1415 = v1433 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v1397 = v1415 + "/gtcgac/ (SalI g|tcgac)5,";
    var v1379 = v1397 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v1360 = v1379 + "/agtact/ (ScaI agt|act)3,";
    var v1340 = v1360 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v1318 = v1340 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v1296 = v1318 + "/tacgta/ (SnaBI tac|gta)3,";
    var v1274 = v1296 + "/actagt/ (SpeI a|ctagt)5,";
    var v1249 = v1274 + "/gcatgc/ (SphI gcatg|c)1,";
    var v1224 = v1249 + "/aatatt/ (SspI aat|att)3,";
    var v1197 = v1224 + "/gagctc/ (SstI gagct|c)1,";
    var v1162 = v1197 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v1114 = v1162 + "/aggcct/ (StuI agg|cct)3,";
    var v1065 = v1114 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v1010 = v1065 + "/tcga/ (TaqI t|cga)3,";
    var v931 = v1010 + "/ctcgag/ (TliI c|tcgag)5,";
    var v817 = v931 + "/attaat/ (VspI at|taat)4,";
    var v643 = v817 + "/tctaga/ (XbaI t|ctaga)5,";
    var v310 = v643 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v310 + "/cccggg/ (XmaI c|ccggg)5"
  }
  return true
}
function getGeneticCodeString(type$$26) {
  var v818 = type$$26.toLowerCase();
  var v644 = v818 == "standard";
  var v820 = !v644;
  if(v820) {
    var v819 = type$$26.toLowerCase();
    v644 = v819 == "transl_table=1"
  }
  var v313 = v644;
  if(v313) {
    var v1416 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1398 = v1416 + "/ga[tcuy]/=D,";
    var v1380 = v1398 + "/ga[agr]/=E,";
    var v1361 = v1380 + "/[tu][tu][tcuy]/=F,";
    var v1341 = v1361 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1319 = v1341 + "/ca[tcuy]/=H,";
    var v1297 = v1319 + "/a[tu][atcuwmhy]/=I,";
    var v1275 = v1297 + "/aa[agr]/=K,";
    var v1250 = v1275 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1225 = v1250 + "/a[tu]g/=M,";
    var v1198 = v1225 + "/aa[tucy]/=N,";
    var v1163 = v1198 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1115 = v1163 + "/ca[agr]/=Q,";
    var v1066 = v1115 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1011 = v1066 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v932 = v1011 + "/ac[acgturyswkmbdhvn]/=T,";
    var v821 = v932 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v645 = v821 + "/[tu]gg/=W,";
    var v312 = v645 + "/[tu]a[ctuy]/=Y,";
    return v312 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v646 = type$$26.toLowerCase();
  var v315 = v646 == "transl_table=2";
  if(v315) {
    var v1417 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1399 = v1417 + "/ga[tcuy]/=D,";
    var v1381 = v1399 + "/ga[agr]/=E,";
    var v1362 = v1381 + "/[tu][tu][tcuy]/=F,";
    var v1342 = v1362 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1320 = v1342 + "/ca[tcuy]/=H,";
    var v1298 = v1320 + "/a[tu][tcuy]/=I,";
    var v1276 = v1298 + "/aa[agr]/=K,";
    var v1251 = v1276 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1226 = v1251 + "/a[tu][agr]/=M,";
    var v1199 = v1226 + "/aa[tucy]/=N,";
    var v1164 = v1199 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1116 = v1164 + "/ca[agr]/=Q,";
    var v1067 = v1116 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1012 = v1067 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v933 = v1012 + "/ac[acgturyswkmbdhvn]/=T,";
    var v822 = v933 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v647 = v822 + "/[tu]g[agr]/=W,";
    var v314 = v647 + "/[tu]a[ctuy]/=Y,";
    return v314 + "/[tu]a[agr]|ag[agr]/=*"
  }
  var v648 = type$$26.toLowerCase();
  var v317 = v648 == "transl_table=3";
  if(v317) {
    var v1418 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1400 = v1418 + "/ga[tcuy]/=D,";
    var v1382 = v1400 + "/ga[agr]/=E,";
    var v1363 = v1382 + "/[tu][tu][tcuy]/=F,";
    var v1343 = v1363 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1321 = v1343 + "/ca[tcuy]/=H,";
    var v1299 = v1321 + "/a[tu][tcuy]/=I,";
    var v1277 = v1299 + "/aa[agr]/=K,";
    var v1252 = v1277 + "/[tu][tu][agr]/=L,";
    var v1227 = v1252 + "/a[tu][agr]/=M,";
    var v1200 = v1227 + "/aa[tucy]/=N,";
    var v1165 = v1200 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1117 = v1165 + "/ca[agr]/=Q,";
    var v1068 = v1117 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1013 = v1068 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v934 = v1013 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v823 = v934 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v649 = v823 + "/[tu]g[agr]/=W,";
    var v316 = v649 + "/[tu]a[ctuy]/=Y,";
    return v316 + "/[tu]a[agr]/=*"
  }
  var v650 = type$$26.toLowerCase();
  var v319 = v650 == "transl_table=4";
  if(v319) {
    var v1419 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1401 = v1419 + "/ga[tcuy]/=D,";
    var v1383 = v1401 + "/ga[agr]/=E,";
    var v1364 = v1383 + "/[tu][tu][tcuy]/=F,";
    var v1344 = v1364 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1322 = v1344 + "/ca[tcuy]/=H,";
    var v1300 = v1322 + "/a[tu][atcuwmhy]/=I,";
    var v1278 = v1300 + "/aa[agr]/=K,";
    var v1253 = v1278 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1228 = v1253 + "/a[tu]g/=M,";
    var v1201 = v1228 + "/aa[tucy]/=N,";
    var v1166 = v1201 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1118 = v1166 + "/ca[agr]/=Q,";
    var v1069 = v1118 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1014 = v1069 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v935 = v1014 + "/ac[acgturyswkmbdhvn]/=T,";
    var v824 = v935 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v651 = v824 + "/[tu]g[agr]/=W,";
    var v318 = v651 + "/[tu]a[ctuy]/=Y,";
    return v318 + "/[tu]a[agr]/=*"
  }
  var v652 = type$$26.toLowerCase();
  var v321 = v652 == "transl_table=5";
  if(v321) {
    var v1420 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1402 = v1420 + "/ga[tcuy]/=D,";
    var v1384 = v1402 + "/ga[agr]/=E,";
    var v1365 = v1384 + "/[tu][tu][tcuy]/=F,";
    var v1345 = v1365 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1323 = v1345 + "/ca[tcuy]/=H,";
    var v1301 = v1323 + "/a[tu][tcuy]/=I,";
    var v1279 = v1301 + "/aa[agr]/=K,";
    var v1254 = v1279 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1229 = v1254 + "/a[tu][agr]/=M,";
    var v1202 = v1229 + "/aa[tucy]/=N,";
    var v1167 = v1202 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1119 = v1167 + "/ca[agr]/=Q,";
    var v1070 = v1119 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1015 = v1070 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v936 = v1015 + "/ac[acgturyswkmbdhvn]/=T,";
    var v825 = v936 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v653 = v825 + "/[tu]g[agr]/=W,";
    var v320 = v653 + "/[tu]a[ctuy]/=Y,";
    return v320 + "/[tu]a[agr]/=*"
  }
  var v654 = type$$26.toLowerCase();
  var v323 = v654 == "transl_table=6";
  if(v323) {
    var v1421 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1403 = v1421 + "/ga[tcuy]/=D,";
    var v1385 = v1403 + "/ga[agr]/=E,";
    var v1366 = v1385 + "/[tu][tu][tcuy]/=F,";
    var v1346 = v1366 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1324 = v1346 + "/ca[tcuy]/=H,";
    var v1302 = v1324 + "/a[tu][atcuwmhy]/=I,";
    var v1280 = v1302 + "/aa[agr]/=K,";
    var v1255 = v1280 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1230 = v1255 + "/a[tu]g/=M,";
    var v1203 = v1230 + "/aa[tucy]/=N,";
    var v1168 = v1203 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1120 = v1168 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v1071 = v1120 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1016 = v1071 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v937 = v1016 + "/ac[acgturyswkmbdhvn]/=T,";
    var v826 = v937 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v655 = v826 + "/[tu]gg/=W,";
    var v322 = v655 + "/[tu]a[ctuy]/=Y,";
    return v322 + "/[tu]ga/=*"
  }
  var v656 = type$$26.toLowerCase();
  var v325 = v656 == "transl_table=9";
  if(v325) {
    var v1422 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1404 = v1422 + "/ga[tcuy]/=D,";
    var v1386 = v1404 + "/ga[agr]/=E,";
    var v1367 = v1386 + "/[tu][tu][tcuy]/=F,";
    var v1347 = v1367 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1325 = v1347 + "/ca[tcuy]/=H,";
    var v1303 = v1325 + "/a[tu][atcuwmhy]/=I,";
    var v1281 = v1303 + "/aag/=K,";
    var v1256 = v1281 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1231 = v1256 + "/a[tu]g/=M,";
    var v1204 = v1231 + "/aa[atcuwmhy]/=N,";
    var v1169 = v1204 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1121 = v1169 + "/ca[agr]/=Q,";
    var v1072 = v1121 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1017 = v1072 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v938 = v1017 + "/ac[acgturyswkmbdhvn]/=T,";
    var v827 = v938 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v657 = v827 + "/[tu]g[agr]/=W,";
    var v324 = v657 + "/[tu]a[ctuy]/=Y,";
    return v324 + "/[tu]a[agr]/=*"
  }
  var v658 = type$$26.toLowerCase();
  var v327 = v658 == "transl_table=10";
  if(v327) {
    var v1423 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1405 = v1423 + "/ga[tcuy]/=D,";
    var v1387 = v1405 + "/ga[agr]/=E,";
    var v1368 = v1387 + "/[tu][tu][tcuy]/=F,";
    var v1348 = v1368 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1326 = v1348 + "/ca[tcuy]/=H,";
    var v1304 = v1326 + "/a[tu][atcuwmhy]/=I,";
    var v1282 = v1304 + "/aa[agr]/=K,";
    var v1257 = v1282 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1232 = v1257 + "/a[tu]g/=M,";
    var v1205 = v1232 + "/aa[tucy]/=N,";
    var v1170 = v1205 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1122 = v1170 + "/ca[agr]/=Q,";
    var v1073 = v1122 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1018 = v1073 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v939 = v1018 + "/ac[acgturyswkmbdhvn]/=T,";
    var v828 = v939 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v659 = v828 + "/[tu]gg/=W,";
    var v326 = v659 + "/[tu]a[ctuy]/=Y,";
    return v326 + "/[tu]a[agr]/=*"
  }
  var v660 = type$$26.toLowerCase();
  var v329 = v660 == "transl_table=11";
  if(v329) {
    var v1424 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1406 = v1424 + "/ga[tcuy]/=D,";
    var v1388 = v1406 + "/ga[agr]/=E,";
    var v1369 = v1388 + "/[tu][tu][tcuy]/=F,";
    var v1349 = v1369 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1327 = v1349 + "/ca[tcuy]/=H,";
    var v1305 = v1327 + "/a[tu][atcuwmhy]/=I,";
    var v1283 = v1305 + "/aa[agr]/=K,";
    var v1258 = v1283 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1233 = v1258 + "/a[tu]g/=M,";
    var v1206 = v1233 + "/aa[tucy]/=N,";
    var v1171 = v1206 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1123 = v1171 + "/ca[agr]/=Q,";
    var v1074 = v1123 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1019 = v1074 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v940 = v1019 + "/ac[acgturyswkmbdhvn]/=T,";
    var v829 = v940 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v661 = v829 + "/[tu]gg/=W,";
    var v328 = v661 + "/[tu]a[ctuy]/=Y,";
    return v328 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v662 = type$$26.toLowerCase();
  var v331 = v662 == "transl_table=12";
  if(v331) {
    var v1425 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1407 = v1425 + "/ga[tcuy]/=D,";
    var v1389 = v1407 + "/ga[agr]/=E,";
    var v1370 = v1389 + "/[tu][tu][tcuy]/=F,";
    var v1350 = v1370 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1328 = v1350 + "/ca[tcuy]/=H,";
    var v1306 = v1328 + "/a[tu][atcuwmhy]/=I,";
    var v1284 = v1306 + "/aa[agr]/=K,";
    var v1259 = v1284 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1234 = v1259 + "/a[tu]g/=M,";
    var v1207 = v1234 + "/aa[tucy]/=N,";
    var v1172 = v1207 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1124 = v1172 + "/ca[agr]/=Q,";
    var v1075 = v1124 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1020 = v1075 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v941 = v1020 + "/ac[acgturyswkmbdhvn]/=T,";
    var v830 = v941 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v663 = v830 + "/[tu]gg/=W,";
    var v330 = v663 + "/[tu]a[ctuy]/=Y,";
    return v330 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v664 = type$$26.toLowerCase();
  var v333 = v664 == "transl_table=13";
  if(v333) {
    var v1426 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1408 = v1426 + "/ga[tcuy]/=D,";
    var v1390 = v1408 + "/ga[agr]/=E,";
    var v1371 = v1390 + "/[tu][tu][tcuy]/=F,";
    var v1351 = v1371 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1329 = v1351 + "/ca[tcuy]/=H,";
    var v1307 = v1329 + "/a[tu][tcuy]/=I,";
    var v1285 = v1307 + "/aa[agr]/=K,";
    var v1260 = v1285 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1235 = v1260 + "/a[tu][agr]/=M,";
    var v1208 = v1235 + "/aa[tucy]/=N,";
    var v1173 = v1208 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1125 = v1173 + "/ca[agr]/=Q,";
    var v1076 = v1125 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1021 = v1076 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v942 = v1021 + "/ac[acgturyswkmbdhvn]/=T,";
    var v831 = v942 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v665 = v831 + "/[tu]g[agr]/=W,";
    var v332 = v665 + "/[tu]a[ctuy]/=Y,";
    return v332 + "/[tu]a[agr]/=*"
  }
  var v666 = type$$26.toLowerCase();
  var v335 = v666 == "transl_table=14";
  if(v335) {
    var v1427 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1409 = v1427 + "/ga[tcuy]/=D,";
    var v1391 = v1409 + "/ga[agr]/=E,";
    var v1372 = v1391 + "/[tu][tu][tcuy]/=F,";
    var v1352 = v1372 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1330 = v1352 + "/ca[tcuy]/=H,";
    var v1308 = v1330 + "/a[tu][atcuwmhy]/=I,";
    var v1286 = v1308 + "/aag/=K,";
    var v1261 = v1286 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1236 = v1261 + "/a[tu]g/=M,";
    var v1209 = v1236 + "/aa[atcuwmhy]/=N,";
    var v1174 = v1209 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1126 = v1174 + "/ca[agr]/=Q,";
    var v1077 = v1126 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1022 = v1077 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v943 = v1022 + "/ac[acgturyswkmbdhvn]/=T,";
    var v832 = v943 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v667 = v832 + "/[tu]g[agr]/=W,";
    var v334 = v667 + "/[tu]a[atcuwmhy]/=Y,";
    return v334 + "/[tu]ag/=*"
  }
  var v668 = type$$26.toLowerCase();
  var v337 = v668 == "transl_table=15";
  if(v337) {
    var v1428 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1410 = v1428 + "/ga[tcuy]/=D,";
    var v1392 = v1410 + "/ga[agr]/=E,";
    var v1373 = v1392 + "/[tu][tu][tcuy]/=F,";
    var v1353 = v1373 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1331 = v1353 + "/ca[tcuy]/=H,";
    var v1309 = v1331 + "/a[tu][atcuwmhy]/=I,";
    var v1287 = v1309 + "/aa[agr]/=K,";
    var v1262 = v1287 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1237 = v1262 + "/a[tu]g/=M,";
    var v1210 = v1237 + "/aa[tucy]/=N,";
    var v1175 = v1210 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1127 = v1175 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v1078 = v1127 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1023 = v1078 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v944 = v1023 + "/ac[acgturyswkmbdhvn]/=T,";
    var v833 = v944 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v669 = v833 + "/[tu]gg/=W,";
    var v336 = v669 + "/[tu]a[ctuy]/=Y,";
    return v336 + "/[tu][agr]a/=*"
  }
  var v670 = type$$26.toLowerCase();
  var v339 = v670 == "transl_table=16";
  if(v339) {
    var v1429 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1411 = v1429 + "/ga[tcuy]/=D,";
    var v1393 = v1411 + "/ga[agr]/=E,";
    var v1374 = v1393 + "/[tu][tu][tcuy]/=F,";
    var v1354 = v1374 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1332 = v1354 + "/ca[tcuy]/=H,";
    var v1310 = v1332 + "/a[tu][atcuwmhy]/=I,";
    var v1288 = v1310 + "/aa[agr]/=K,";
    var v1263 = v1288 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1238 = v1263 + "/a[tu]g/=M,";
    var v1211 = v1238 + "/aa[tucy]/=N,";
    var v1176 = v1211 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1128 = v1176 + "/ca[agr]/=Q,";
    var v1079 = v1128 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1024 = v1079 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v945 = v1024 + "/ac[acgturyswkmbdhvn]/=T,";
    var v834 = v945 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v671 = v834 + "/[tu]gg/=W,";
    var v338 = v671 + "/[tu]a[ctuy]/=Y,";
    return v338 + "/[tu][agr]a/=*"
  }
  var v672 = type$$26.toLowerCase();
  var v341 = v672 == "transl_table=21";
  if(v341) {
    var v1430 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1412 = v1430 + "/ga[tcuy]/=D,";
    var v1394 = v1412 + "/ga[agr]/=E,";
    var v1375 = v1394 + "/[tu][tu][tcuy]/=F,";
    var v1355 = v1375 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1333 = v1355 + "/ca[tcuy]/=H,";
    var v1311 = v1333 + "/a[tu][tcuy]/=I,";
    var v1289 = v1311 + "/aag/=K,";
    var v1264 = v1289 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1239 = v1264 + "/a[tu][agr]/=M,";
    var v1212 = v1239 + "/aa[atcuwmhy]/=N,";
    var v1177 = v1212 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1129 = v1177 + "/ca[agr]/=Q,";
    var v1080 = v1129 + "/cg[acgturyswkmbdhvn]/=R,";
    var v1025 = v1080 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v946 = v1025 + "/ac[acgturyswkmbdhvn]/=T,";
    var v835 = v946 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v673 = v835 + "/[tu]g[agr]/=W,";
    var v340 = v673 + "/[tu]a[ctuy]/=Y,";
    return v340 + "/[tu]a[agr]/=*"
  }
  var v674 = type$$26.toLowerCase();
  var v343 = v674 == "transl_table=22";
  if(v343) {
    var v1431 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1413 = v1431 + "/ga[tcuy]/=D,";
    var v1395 = v1413 + "/ga[agr]/=E,";
    var v1376 = v1395 + "/[tu][tu][tcuy]/=F,";
    var v1356 = v1376 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1334 = v1356 + "/ca[tcuy]/=H,";
    var v1312 = v1334 + "/a[tu][atcuwmhy]/=I,";
    var v1290 = v1312 + "/aa[agr]/=K,";
    var v1265 = v1290 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1240 = v1265 + "/a[tu]g/=M,";
    var v1213 = v1240 + "/aa[tucy]/=N,";
    var v1178 = v1213 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1130 = v1178 + "/ca[agr]/=Q,";
    var v1081 = v1130 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1026 = v1081 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v947 = v1026 + "/ac[acgturyswkmbdhvn]/=T,";
    var v836 = v947 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v675 = v836 + "/[tu]gg/=W,";
    var v342 = v675 + "/[tu]a[ctuy]/=Y,";
    return v342 + "/[tu][agcrsmv]a/=*"
  }
  var v676 = type$$26.toLowerCase();
  var v345 = v676 == "transl_table=23";
  if(v345) {
    var v1432 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1414 = v1432 + "/ga[tcuy]/=D,";
    var v1396 = v1414 + "/ga[agr]/=E,";
    var v1377 = v1396 + "/[tu][tu][tcuy]/=F,";
    var v1357 = v1377 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1335 = v1357 + "/ca[tcuy]/=H,";
    var v1313 = v1335 + "/a[tu][atcuwmhy]/=I,";
    var v1291 = v1313 + "/aa[agr]/=K,";
    var v1266 = v1291 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1241 = v1266 + "/a[tu]g/=M,";
    var v1214 = v1241 + "/aa[tucy]/=N,";
    var v1179 = v1214 + "/cc[acgturyswkmbdhvn]/=P,";
    var v1131 = v1179 + "/ca[agr]/=Q,";
    var v1082 = v1131 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v1027 = v1082 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v948 = v1027 + "/ac[acgturyswkmbdhvn]/=T,";
    var v837 = v948 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v677 = v837 + "/[tu]gg/=W,";
    var v344 = v677 + "/[tu]a[ctuy]/=Y,";
    return v344 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function restMap(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v678 = testScript();
  var v346 = v678 == false;
  if(v346) {
    return false
  }
  var restrictionSiteCollection;
  var v1132 = theDocument.forms;
  var v1083 = v1132[0];
  var v1028 = v1083.elements;
  var v949 = v1028[6];
  var v838 = v949.options;
  var v1133 = theDocument.forms;
  var v1084 = v1133[0];
  var v1029 = v1084.elements;
  var v950 = v1029[6];
  var v839 = v950.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v679 = v838[v839]
  }
  var v347 = v679.value;
  var geneticCode = getGeneticCodeString(v347);
  var restrictionSites = getRestrictionSiteString("standard");
  var v1134 = theDocument.forms;
  var v1085 = v1134[0];
  var v1030 = v1085.elements;
  var v951 = v1030[0];
  var v840 = checkFormElement(v951);
  var v680 = v840 == false;
  var v842 = !v680;
  if(v842) {
    var v1180 = theDocument.forms;
    var v1135 = v1180[0];
    var v1086 = v1135.elements;
    var v1031 = v1086[0];
    var v952 = v1031.value;
    var v841 = checkSequenceLength(v952, maxInput$$3);
    v680 = v841 == false
  }
  var v348 = v680;
  if(v348) {
    return false
  }
  geneticCode = geneticCode.split(/,/);
  var v681 = checkGeneticCode(geneticCode);
  var v349 = v681 == false;
  if(v349) {
    return false
  }
  restrictionSites = restrictionSites.split(/,/);
  var v682 = checkRestPatterns(restrictionSites);
  var v350 = v682 == false;
  if(v350) {
    return false
  }
  var isColor$$1;
  var v1181 = theDocument.forms;
  var v1136 = v1181[0];
  var v1087 = v1136.elements;
  var v1032 = v1087[8];
  var v953 = v1032.options;
  var v1182 = theDocument.forms;
  var v1137 = v1182[0];
  var v1088 = v1137.elements;
  var v1033 = v1088[8];
  var v954 = v1033.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v843 = v953[v954]
  }
  var v683 = v843.value;
  var v351 = v683 == "color";
  if(v351) {
    isColor$$1 = true
  }else {
    isColor$$1 = false
  }
  _openWindow("Restriction Map", isColor$$1);
  var v352 = outputWindow.document;
  var v684 = '<span class="one">' + "cuts once";
  var v353 = v684 + "</span><br />\n";
  JAMScript.call(v352.write, v352, [v353]);
  var v354 = outputWindow.document;
  var v685 = '<span class="two">' + "cuts twice";
  var v355 = v685 + "</span><br />\n";
  JAMScript.call(v354.write, v354, [v355]);
  var v356 = outputWindow.document;
  JAMScript.call(v356.write, v356, ["\n"]);
  var v1034 = theDocument.forms;
  var v955 = v1034[0];
  var v844 = v955.elements;
  var v686 = v844[0];
  var v357 = v686.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v357);
  var i$$11 = 0;
  var v687 = arrayOfFasta$$1.length;
  var v368 = i$$11 < v687;
  for(;v368;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v358 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v358);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v359 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v359);
    newDna = removeNonDna(newDna);
    openPre();
    var v360 = outputWindow.document;
    var v1183 = theDocument.forms;
    var v1138 = v1183[0];
    var v1089 = v1138.elements;
    var v1035 = v1089[7];
    var v956 = v1035.options;
    var v1184 = theDocument.forms;
    var v1139 = v1184[0];
    var v1090 = v1139.elements;
    var v1036 = v1090[7];
    var v957 = v1036.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v845 = v956[v957]
    }
    var v688 = v845.value;
    var v361 = getInfoFromTitleAndSequenceAndTopology(title$$9, newDna, v688);
    JAMScript.call(v360.write, v360, [v361]);
    var v1140 = theDocument.forms;
    var v1091 = v1140[0];
    var v1037 = v1091.elements;
    var v958 = v1037[7];
    var v846 = v958.options;
    var v1141 = theDocument.forms;
    var v1092 = v1141[0];
    var v1038 = v1092.elements;
    var v959 = v1038[7];
    var v847 = v959.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v689 = v846[v847]
    }
    var v362 = v689.value;
    restrictionSiteCollection = findRestrictionSites(newDna, restrictionSites, v362);
    JAMScript.call(restrictionSiteCollection.sortRestrictionSites, restrictionSiteCollection, []);
    var v1142 = theDocument.forms;
    var v1093 = v1142[0];
    var v1039 = v1093.elements;
    var v960 = v1039[4];
    var v848 = v960.options;
    var v1143 = theDocument.forms;
    var v1094 = v1143[0];
    var v1040 = v1094.elements;
    var v961 = v1040[4];
    var v849 = v961.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v690 = v848[v849]
    }
    var v363 = v690.value;
    var v1144 = theDocument.forms;
    var v1095 = v1144[0];
    var v1041 = v1095.elements;
    var v962 = v1041[5];
    var v850 = v962.options;
    var v1145 = theDocument.forms;
    var v1096 = v1145[0];
    var v1042 = v1096.elements;
    var v963 = v1042[5];
    var v851 = v963.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v691 = v850[v851]
    }
    var v364 = v691.value;
    layoutRestTrans(newDna, geneticCode, restrictionSiteCollection, v363, v364);
    var v365 = outputWindow.document;
    JAMScript.call(v365.write, v365, ["\n"]);
    closePre();
    var v1146 = theDocument.forms;
    var v1097 = v1146[0];
    var v1043 = v1097.elements;
    var v964 = v1043[7];
    var v852 = v964.options;
    var v1147 = theDocument.forms;
    var v1098 = v1147[0];
    var v1044 = v1098.elements;
    var v965 = v1044[7];
    var v853 = v965.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v692 = v852[v853]
    }
    var v366 = v692.value;
    writeRestrictionSites(newDna, restrictionSites, v366);
    var v367 = outputWindow.document;
    JAMScript.call(v367.write, v367, ["<br />\n<br />\n"]);
    i$$11 = i$$11 + 1;
    var v693 = arrayOfFasta$$1.length;
    v368 = i$$11 < v693
  }
  closeWindow();
  return true
}
function layoutRestTrans(dnaSequence$$3, geneticCode$$1, restrictionSiteCollection$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var spaceString = "                                                                                                                                  ";
  var textLayout = new TextLayout;
  var v694 = readingFrame == "3";
  var v854 = !v694;
  if(v854) {
    v694 = readingFrame == "all_three"
  }
  var v370 = v694;
  if(v370) {
    var translation = new TranslationComponent;
    var v966 = dnaSequence$$3.length;
    var v855 = dnaSequence$$3.substring(2, v966);
    var v695 = translate(v855, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v369 = "  " + v695;
    JAMScript.call(translation.setCharacters, translation, [v369]);
    JAMScript.call(textLayout.addComponent, textLayout, [translation])
  }
  var v696 = readingFrame == "2";
  var v856 = !v696;
  if(v856) {
    v696 = readingFrame == "all_three"
  }
  var v372 = v696;
  if(v372) {
    translation = new TranslationComponent;
    var v967 = dnaSequence$$3.length;
    var v857 = dnaSequence$$3.substring(1, v967);
    var v697 = translate(v857, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v371 = " " + v697;
    JAMScript.call(translation.setCharacters, translation, [v371]);
    JAMScript.call(textLayout.addComponent, textLayout, [translation])
  }
  var v698 = readingFrame == "1";
  var v858 = !v698;
  if(v858) {
    v698 = readingFrame == "all_three"
  }
  var v374 = v698;
  if(v374) {
    translation = new TranslationComponent;
    var v373 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAMScript.call(translation.setCharacters, translation, [v373]);
    JAMScript.call(textLayout.addComponent, textLayout, [translation])
  }
  var v376 = readingFrame == "uppercase";
  if(v376) {
    translation = new UppercaseTranslationComponent;
    var v375 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAMScript.call(translation.setCharacters, translation, [v375]);
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
  var v377 = complement(dnaSequence$$3);
  JAMScript.call(dna.setCharacters, dna, [v377]);
  JAMScript.call(textLayout.addComponent, textLayout, [dna]);
  var sitesInRange = new Array;
  var i$$12 = 0;
  var v699 = dnaSequence$$3.length;
  var v392 = i$$12 < v699;
  for(;v392;) {
    var v378 = i$$12 + basesPerLine;
    sitesInRange = JAMScript.call(restrictionSiteCollection$$1.getSitesInRange, restrictionSiteCollection$$1, [i$$12, v378]);
    sitesInRange.reverse();
    var j$$10 = 0;
    var v700 = sitesInRange.length;
    var v390 = j$$10 < v700;
    for(;v390;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v859 = sitesInRange[j$$10]
      }
      var v701 = v859.numberOfCuts;
      var v389 = v701 == 1;
      if(v389) {
        var v379 = outputWindow.document;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1185 = sitesInRange[j$$10]
        }
        var v1148 = v1185.position;
        var v1099 = v1148 - i$$12;
        var v1045 = v1099 + 9;
        var v968 = spaceString.substring(0, v1045);
        var v860 = v968 + '<span class="one">';
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v969 = sitesInRange[j$$10]
        }
        var v861 = v969.label;
        var v702 = v860 + v861;
        var v380 = v702 + "</span>\n";
        JAMScript.call(v379.write, v379, [v380])
      }else {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v862 = sitesInRange[j$$10]
        }
        var v703 = v862.numberOfCuts;
        var v388 = v703 == 2;
        if(v388) {
          var v381 = outputWindow.document;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1186 = sitesInRange[j$$10]
          }
          var v1149 = v1186.position;
          var v1100 = v1149 - i$$12;
          var v1046 = v1100 + 9;
          var v970 = spaceString.substring(0, v1046);
          var v863 = v970 + '<span class="two">';
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v971 = sitesInRange[j$$10]
          }
          var v864 = v971.label;
          var v704 = v863 + v864;
          var v382 = v704 + "</span>\n";
          JAMScript.call(v381.write, v381, [v382])
        }else {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v865 = sitesInRange[j$$10]
          }
          var v705 = v865.numberOfCuts;
          var v387 = v705 == 3;
          if(v387) {
            var v383 = outputWindow.document;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1187 = sitesInRange[j$$10]
            }
            var v1150 = v1187.position;
            var v1101 = v1150 - i$$12;
            var v1047 = v1101 + 9;
            var v972 = spaceString.substring(0, v1047);
            var v866 = v972 + '<span class="three">';
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v973 = sitesInRange[j$$10]
            }
            var v867 = v973.label;
            var v706 = v866 + v867;
            var v384 = v706 + "</span>\n";
            JAMScript.call(v383.write, v383, [v384])
          }else {
            var v385 = outputWindow.document;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1151 = sitesInRange[j$$10]
            }
            var v1102 = v1151.position;
            var v1048 = v1102 - i$$12;
            var v974 = v1048 + 9;
            var v868 = spaceString.substring(0, v974);
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v975 = sitesInRange[j$$10]
            }
            var v869 = v975.label;
            var v707 = v868 + v869;
            var v386 = v707 + "\n";
            JAMScript.call(v385.write, v385, [v386])
          }
        }
      }
      j$$10 = j$$10 + 1;
      var v708 = sitesInRange.length;
      v390 = j$$10 < v708
    }
    var v391 = i$$12 + basesPerLine;
    JAMScript.call(textLayout.writeLayout, textLayout, [i$$12, v391]);
    i$$12 = i$$12 + basesPerLine;
    var v709 = dnaSequence$$3.length;
    v392 = i$$12 < v709
  }
  return true
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    var v393 = " " + p1$$2;
    return v393 + " "
  }
  var v870 = dnaSequence$$4.replace(/[^A-Za-z]/g, "");
  var v710 = v870.length;
  var v394 = v710 < 3;
  if(v394) {
    return""
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/(...)/g, v2);
  var i$$13 = 0;
  var v711 = geneticCodeMatchExp$$3.length;
  var v397 = i$$13 < v711;
  for(;v397;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v395 = geneticCodeMatchExp$$3[i$$13]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v396 = geneticCodeMatchResult$$3[i$$13]
    }
    dnaSequence$$4 = dnaSequence$$4.replace(v395, v396);
    i$$13 = i$$13 + 1;
    var v712 = geneticCodeMatchExp$$3.length;
    v397 = i$$13 < v712
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/\S{3}/g, "X");
  dnaSequence$$4 = dnaSequence$$4.replace(/\s\S{1,2}$/, "");
  dnaSequence$$4 = dnaSequence$$4.replace(/^\s/, "");
  return dnaSequence$$4
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$15, s$$5) {
    var v1103 = " " + p1$$3;
    var v1049 = v1103 + p3;
    var v976 = v1049 + p5;
    var v871 = v976 + " ";
    var v713 = v871 + p2;
    var v398 = v713 + p4;
    return v398 + p6
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/[a-z]/g, " ");
  var v872 = dnaSequence$$5.replace(/[^A-Za-z]/g, "");
  var v714 = v872.length;
  var v399 = v714 < 3;
  if(v399) {
    return""
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3);
  dnaSequence$$5 = dnaSequence$$5.replace(/\s\S{1,2}\s/g, "");
  var i$$14 = 0;
  var v715 = geneticCodeMatchExp$$4.length;
  var v402 = i$$14 < v715;
  for(;v402;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v400 = geneticCodeMatchExp$$4[i$$14]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v401 = geneticCodeMatchResult$$4[i$$14]
    }
    dnaSequence$$5 = dnaSequence$$5.replace(v400, v401);
    i$$14 = i$$14 + 1;
    var v716 = geneticCodeMatchExp$$4.length;
    v402 = i$$14 < v716
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
  var matchArray$$2;
  var label$$2;
  var timesFound$$1 = 0;
  var tempArray = new Array;
  var restrictionSiteCollection$$2 = new RestrictionSiteCollection;
  var v406 = dnaConformation$$1 == "circular";
  if(v406) {
    var v403 = sequence$$18.substring(0, lookAhead$$1);
    shiftValue$$1 = v403.length;
    var v977 = sequence$$18.length;
    var v873 = v977 - lookAhead$$1;
    var v874 = sequence$$18.length;
    var v717 = sequence$$18.substring(v873, v874);
    var v404 = v717 + sequence$$18;
    var v405 = sequence$$18.substring(0, lookAhead$$1);
    sequence$$18 = v404 + v405;
    lowerLimit$$1 = 0 + shiftValue$$1;
    upperLimit$$1 = upperLimit$$1 + shiftValue$$1
  }
  var i$$15 = 0;
  var v718 = arrayOfItems$$2.length;
  var v417 = i$$15 < v718;
  for(;v417;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v719 = arrayOfItems$$2[i$$15]
    }
    var v407 = v719.match(/\/.+\//);
    matchExp$$2 = v407 + "gi";
    matchPosition$$1 = 0;
    if(JAMScript.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$2 + " }")
    }else {
      matchExp$$2 = JAMScript.call(eval, null, [matchExp$$2])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v978 = arrayOfItems$$2[i$$15]
    }
    var v875 = v978.match(/\)\D*\d+/);
    var v720 = v875.toString();
    var v408 = v720.replace(/\)\D*/, "");
    cutDistance$$1 = parseFloat(v408);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v876 = arrayOfItems$$2[i$$15]
    }
    var v721 = v876.match(/\([^\(]+\)/);
    var v409 = v721.toString();
    label$$2 = v409.replace(/\(|\)/g, "");
    var v413 = matchArray$$2 = matchExp$$2.exec(sequence$$18);
    for(;v413;) {
      matchPosition$$1 = matchExp$$2.lastIndex;
      matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
      var v722 = matchPosition$$1 >= lowerLimit$$1;
      if(v722) {
        v722 = matchPosition$$1 < upperLimit$$1
      }
      var v411 = v722;
      if(v411) {
        var v877 = label$$2 + " ";
        var v979 = matchPosition$$1 - shiftValue$$1;
        var v878 = v979 + 1;
        var v723 = v877 + v878;
        var v724 = matchPosition$$1 - shiftValue$$1;
        var v410 = new RestrictionSite(v723, v724);
        tempArray.push(v410);
        timesFound$$1 = timesFound$$1 + 1
      }
      var v725 = matchExp$$2.lastIndex;
      var v879 = RegExp.lastMatch;
      var v726 = v879.length;
      var v412 = v725 - v726;
      matchExp$$2.lastIndex = v412 + 1;
      v413 = matchArray$$2 = matchExp$$2.exec(sequence$$18)
    }
    var j$$11 = 0;
    var v727 = tempArray.length;
    var v416 = j$$11 < v727;
    for(;v416;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v414 = tempArray[j$$11]
      }
      v414.numberOfCuts = timesFound$$1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v415 = tempArray[j$$11]
      }
      JAMScript.call(restrictionSiteCollection$$2.addRestrictionSite, restrictionSiteCollection$$2, [v415]);
      j$$11 = j$$11 + 1;
      var v728 = tempArray.length;
      v416 = j$$11 < v728
    }
    timesFound$$1 = 0;
    tempArray = new Array;
    i$$15 = i$$15 + 1;
    var v729 = arrayOfItems$$2.length;
    v417 = i$$15 < v729
  }
  return restrictionSiteCollection$$2
}
function writeLayout(start$$4, stop) {
  var i$$16 = 0;
  var v880 = this.components;
  var v730 = v880.length;
  var v419 = i$$16 < v730;
  for(;v419;) {
    var v731 = this.components;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v418 = v731[i$$16]
    }
    JAMScript.call(v418.writeLayoutComponent, v418, [start$$4, stop]);
    i$$16 = i$$16 + 1;
    var v881 = this.components;
    var v732 = v881.length;
    v419 = i$$16 < v732
  }
  return
}
function addComponent(component) {
  var v420 = this.components;
  v420.push(component);
  return
}
function TextLayout() {
  var v1531 = new Array;
  this.components = v1531;
  return
}
function writeLayoutComponent(start$$5, stop$$1) {
  return
}
function setCharacters(text$$14) {
  var v733 = text$$14.search(/./);
  var v421 = v733 != -1;
  if(v421) {
    var v1532 = text$$14.match(/./g);
    this.characters = v1532
  }
  return
}
function isRoom(start$$6, stop$$2) {
  var v422 = this.characters;
  var rangeToCheck = v422.slice(start$$6, stop$$2);
  rangeToCheck = rangeToCheck.join("");
  var v734 = rangeToCheck.search(/\w/);
  var v423 = v734 == -1;
  if(v423) {
    return true
  }else {
    return false
  }
  return
}
function LayoutComponent() {
  var v1533 = new Array;
  this.characters = v1533;
  this.positionLabel = 1;
  return
}
function TranslationComponent() {
  var v1534 = new Array;
  this.characters = v1534;
  this.positionLabel = 1;
  return
}
function UppercaseTranslationComponent() {
  var v1535 = new Array;
  this.characters = v1535;
  this.positionLabel = 1;
  return
}
function DnaComponent() {
  var v1536 = new Array;
  this.characters = v1536;
  this.positionLabel = 1;
  return
}
function RulerComponent() {
  var v1537 = new Array;
  this.characters = v1537;
  this.positionLabel = 1;
  return
}
function buildRuler() {
  function v4(str$$12, p1$$6, offset$$18, s$$8) {
    var ruler$$1 = count$$6 + spacing;
    var v424 = count$$6 == 0;
    if(v424) {
      ruler$$1 = spacing
    }
    count$$6 = count$$6 + 10;
    return ruler$$1.substring(0, 10)
  }
  var v425 = this.characters;
  var sequence$$19 = v425.join("");
  var count$$6 = 0;
  var spacing = "         ";
  sequence$$19 = sequence$$19.replace(/(.{1,10})/g, v4);
  var v1538 = sequence$$19.match(/./g);
  this.characters = v1538;
  return
}
function RestrictionSite(label$$3, position) {
  this.label = label$$3;
  this.position = position;
  return
}
function addRestrictionSite(restrictionSite) {
  var v426 = this.restrictionSites;
  v426.push(restrictionSite);
  return
}
function sortRestrictionSites() {
  var v427 = this.restrictionSites;
  v427.sort(restrictionSiteSorter);
  return
}
function getSitesInRange(start$$11, stop$$7) {
  var arrayToReturn = new Array;
  var v735 = this.restrictionSites;
  var v428 = v735.length;
  var i$$17 = v428 - 1;
  var v431 = i$$17 >= 0;
  for(;v431;) {
    var v1050 = this.restrictionSites;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v980 = v1050[i$$17]
    }
    var v882 = v980.position;
    var v736 = v882 >= start$$11;
    if(v736) {
      var v1051 = this.restrictionSites;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v981 = v1051[i$$17]
      }
      var v883 = v981.position;
      v736 = v883 < stop$$7
    }
    var v430 = v736;
    if(v430) {
      var v737 = this.restrictionSites;
      var v429 = v737.pop();
      arrayToReturn.push(v429)
    }else {
      break
    }
    i$$17 = i$$17 - 1;
    v431 = i$$17 >= 0
  }
  return arrayToReturn
}
function RestrictionSiteCollection() {
  var v1539 = new Array;
  this.restrictionSites = v1539;
  return
}
function restrictionSiteSorter(a, b) {
  var v738 = a.position;
  var v739 = b.position;
  var v432 = v738 < v739;
  if(v432) {
    return 1
  }
  var v740 = a.position;
  var v741 = b.position;
  var v433 = v740 > v741;
  if(v433) {
    return-1
  }else {
    return 0
  }
  return
}
new TextLayout;
var v434 = TextLayout.prototype;
v434.writeLayout = writeLayout;
var v435 = TextLayout.prototype;
v435.addComponent = addComponent;
new LayoutComponent;
var v436 = LayoutComponent.prototype;
v436.writeLayoutComponent = writeLayoutComponent;
var v437 = LayoutComponent.prototype;
v437.setCharacters = setCharacters;
var v438 = LayoutComponent.prototype;
v438.isRoom = isRoom;
var v439 = TranslationComponent;
var v1540 = new LayoutComponent;
v439.prototype = v1540;
var v440 = TranslationComponent.prototype;
v440.writeLayoutComponent = v5;
var v441 = UppercaseTranslationComponent;
var v1541 = new LayoutComponent;
v441.prototype = v1541;
var v442 = UppercaseTranslationComponent.prototype;
v442.writeLayoutComponent = v6;
var v443 = DnaComponent;
var v1542 = new LayoutComponent;
v443.prototype = v1542;
var v444 = DnaComponent.prototype;
v444.writeLayoutComponent = v7;
var v445 = RulerComponent;
var v1543 = new LayoutComponent;
v445.prototype = v1543;
var v446 = RulerComponent.prototype;
v446.writeLayoutComponent = v10;
new RulerComponent;
var v447 = RulerComponent.prototype;
v447.buildRuler = buildRuler;
new RestrictionSiteCollection;
var v448 = RestrictionSiteCollection.prototype;
v448.addRestrictionSite = addRestrictionSite;
var v449 = RestrictionSiteCollection.prototype;
v449.sortRestrictionSites = sortRestrictionSites;
var v450 = RestrictionSiteCollection.prototype;
v450.getSitesInRange = getSitesInRange;
JAMScript.set(document, "onload", v11);
var v451 = document.getElementById("submitbtn");
JAMScript.set(v451, "onclick", v12);
var v452 = document.getElementById("clearbtn");
JAMScript.set(v452, "onclick", v13);

