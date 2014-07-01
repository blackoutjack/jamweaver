function v13() {
  var v773 = document.forms;
  var v657 = v773[0];
  var v404 = v657.elements;
  var v14 = v404[0];
  v14.value = " ";
  return
}
function v12() {
  try {
    transMap(document)
  }catch(e$$5) {
    var v15 = "The following error was encountered: " + e$$5;
    alert(v15)
  }
  return
}
function v11() {
  var v405 = document.main_form;
  var v16 = v405.main_submit;
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
  var v406 = this.positionLabel;
  var v18 = rightNum(v406, "", 8, "");
  JAMScript.call(v17.write, v17, [v18]);
  var v407 = this.characters;
  var v19 = v407.slice(start$$10, stop$$6);
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
  var v408 = this.positionLabel;
  var v25 = rightNum(v408, "", 8, "");
  JAMScript.call(v24.write, v24, [v25]);
  var v26 = outputWindow.document;
  var v774 = this.characters;
  var v658 = v774.slice(start$$9, stop$$5);
  var v409 = v658.join("");
  var v27 = v409 + "\n";
  JAMScript.call(v26.write, v26, [v27]);
  var v28 = this.positionLabel;
  var v29 = stop$$5 - start$$9;
  this.positionLabel = v28 + v29;
  return
}
function v6(start$$8, stop$$4) {
  var v659 = this.characters;
  var v410 = v659.slice(start$$8, stop$$4);
  var v30 = v410.join("");
  var textToWrite = v30 + "\n";
  var v411 = textToWrite.search(/\w/);
  var v36 = v411 != -1;
  if(v36) {
    var v31 = outputWindow.document;
    var v412 = this.positionLabel;
    var v32 = rightNum(v412, "", 8, "");
    JAMScript.call(v31.write, v31, [v32]);
    var v33 = this.positionLabel;
    var v413 = textToWrite.match(/[A-Z]/g);
    var v34 = v413.length;
    this.positionLabel = v33 + v34;
    var v35 = outputWindow.document;
    JAMScript.call(v35.write, v35, [textToWrite])
  }
  return
}
function v5(start$$7, stop$$3) {
  var v37 = outputWindow.document;
  var v414 = this.positionLabel;
  var v38 = rightNum(v414, "", 8, "");
  JAMScript.call(v37.write, v37, [v38]);
  var v39 = outputWindow.document;
  var v775 = this.characters;
  var v660 = v775.slice(start$$7, stop$$3);
  var v415 = v660.join("");
  var v40 = v415 + "\n";
  JAMScript.call(v39.write, v39, [v40]);
  var v41 = this.positionLabel;
  var v416 = stop$$3 - start$$7;
  var v42 = v416 / 3;
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
  var v417 = arrayOfSequences.length;
  var v44 = v417 < 2;
  if(v44) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v418 = arrayOfTitles.length;
  var v46 = i$$1 < v418;
  for(;v46;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v776 = arrayOfTitles[i$$1]
    }
    var v661 = v776.search(/\S/);
    var v419 = v661 == -1;
    var v663 = !v419;
    if(v663) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v850 = arrayOfSequences[i$$1]
      }
      var v777 = v850.search(/\S/);
      var v662 = v777 == -1;
      var v779 = !v662;
      if(v779) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v851 = arrayOfSequences[i$$1]
        }
        var v778 = v851.length;
        v662 = v778 != lengthOfAlign
      }
      v419 = v662
    }
    var v45 = v419;
    if(v45) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v420 = arrayOfTitles.length;
    v46 = i$$1 < v420
  }
  return true
}
function checkCodonTable(codonTable) {
  var v664 = codonTable.search(/AmAcid/);
  var v421 = v664 == -1;
  var v666 = !v421;
  if(v666) {
    var v780 = codonTable.search(/Codon/);
    var v665 = v780 == -1;
    var v782 = !v665;
    if(v782) {
      var v852 = codonTable.search(/Number/);
      var v781 = v852 == -1;
      var v854 = !v781;
      if(v854) {
        var v906 = codonTable.search(/\/1000/);
        var v853 = v906 == -1;
        var v908 = !v853;
        if(v908) {
          var v907 = codonTable.search(/Fraction\s*\.\./);
          v853 = v907 == -1
        }
        v781 = v853
      }
      v665 = v781
    }
    v421 = v665
  }
  var v47 = v421;
  if(v47) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v667 = formElement.value;
  var v422 = v667.search(/\S/);
  var v48 = v422 == -1;
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
  var v423 = arrayOfPatterns.length;
  var v51 = z$$2 < v423;
  for(;v51;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v668 = arrayOfPatterns[z$$2]
    }
    var v424 = v668.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v49 = v424 == -1;
    if(v49) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v669 = arrayOfPatterns[z$$2]
    }
    var v425 = moreExpressionCheck(v669);
    var v50 = v425 == false;
    if(v50) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v426 = arrayOfPatterns.length;
    v51 = z$$2 < v426
  }
  var v52 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v52);
  var v53 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v53);
  var j = 0;
  var v427 = arrayOfPatterns.length;
  var v60 = j < v427;
  for(;v60;) {
    var v54 = geneticCodeMatchExp;
    var v55 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v783 = arrayOfPatterns[j]
    }
    var v670 = v783.match(/\/.+\//);
    var v428 = v670 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1348 = eval("introspect(JAMScript.introspectors.processAll) { " + v428 + " }")
    }else {
      var v1348 = JAMScript.call(eval, null, [v428])
    }
    v54[v55] = v1348;
    var v56 = geneticCodeMatchResult;
    var v57 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v671 = arrayOfPatterns[j]
    }
    var v429 = v671.match(/=[a-zA-Z\*]/);
    var v1349 = v429.toString();
    v56[v57] = v1349;
    var v58 = geneticCodeMatchResult;
    var v59 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v430 = geneticCodeMatchResult[j]
    }
    var v1350 = v430.replace(/=/g, "");
    v58[v59] = v1350;
    j = j + 1;
    var v431 = arrayOfPatterns.length;
    v60 = j < v431
  }
  var i$$2 = 0;
  var v672 = testSequence.length;
  var v432 = v672 - 3;
  var v67 = i$$2 <= v432;
  for(;v67;) {
    var v61 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v61);
    j = 0;
    var v433 = geneticCodeMatchExp.length;
    var v65 = j < v433;
    for(;v65;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v673 = geneticCodeMatchExp[j]
      }
      var v434 = codon.search(v673);
      var v64 = v434 != -1;
      if(v64) {
        var v63 = oneMatch == true;
        if(v63) {
          var v435 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v62 = v435 + ".";
          alert(v62);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v436 = geneticCodeMatchExp.length;
      v65 = j < v436
    }
    var v66 = oneMatch == false;
    if(v66) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v674 = testSequence.length;
    var v437 = v674 - 3;
    v67 = i$$2 <= v437
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v438 = arrayOfPatterns$$1.length;
  var v69 = z$$3 < v438;
  for(;v69;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v675 = arrayOfPatterns$$1[z$$3]
    }
    var v439 = v675.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v68 = v439 != -1;
    if(v68) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v440 = arrayOfPatterns$$1.length;
    v69 = z$$3 < v440
  }
  var i$$3 = 0;
  var v441 = arrayOfPatterns$$1.length;
  var v73 = i$$3 < v441;
  for(;v73;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v676 = arrayOfPatterns$$1[i$$3]
    }
    var v442 = "[" + v676;
    var v70 = v442 + "]";
    var re = new RegExp(v70, "gi");
    var j$$1 = i$$3 + 1;
    var v443 = arrayOfPatterns$$1.length;
    var v72 = j$$1 < v443;
    for(;v72;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v677 = arrayOfPatterns$$1[j$$1]
      }
      var v444 = v677.search(re);
      var v71 = v444 != -1;
      if(v71) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v445 = arrayOfPatterns$$1.length;
      v72 = j$$1 < v445
    }
    i$$3 = i$$3 + 1;
    var v446 = arrayOfPatterns$$1.length;
    v73 = i$$3 < v446
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v447 = arrayOfPatterns$$2.length;
  var v76 = z$$4 < v447;
  for(;v76;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v678 = arrayOfPatterns$$2[z$$4]
    }
    var v448 = v678.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v74 = v448 == -1;
    if(v74) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v679 = arrayOfPatterns$$2[z$$4]
    }
    var v449 = moreExpressionCheck(v679);
    var v75 = v449 == false;
    if(v75) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v450 = arrayOfPatterns$$2.length;
    v76 = z$$4 < v450
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v784 = getSequenceFromFasta(text$$7);
  var v680 = v784.replace(/[^A-Za-z]/g, "");
  var v451 = v680.length;
  var v78 = v451 > maxInput;
  if(v78) {
    var v452 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v77 = v452 + " characters.";
    alert(v77);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v453 = text$$8.length;
  var v80 = v453 > maxInput$$1;
  if(v80) {
    var v454 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v79 = v454 + " characters.";
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
  var v455 = alignArray.length;
  var v87 = v455 < 3;
  if(v87) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v456 = alignArray.length;
  var v89 = i$$4 < v456;
  for(;v89;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v681 = alignArray[i$$4]
    }
    var v457 = v681.search(/[^\s]+\s/);
    var v88 = v457 == -1;
    if(v88) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v458 = alignArray.length;
    v89 = i$$4 < v458
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
  var v459 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v92 = v459 != -1;
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
  var v460 = sequence$$2.length;
  var v93 = "&gt;results for " + v460;
  var stringToReturn = v93 + " residue sequence ";
  var v461 = fastaSequenceTitle.search(/[^\s]/);
  var v95 = v461 != -1;
  if(v95) {
    var v462 = stringToReturn + '"';
    var v94 = v462 + fastaSequenceTitle;
    stringToReturn = v94 + '"'
  }
  var v463 = stringToReturn + ' starting "';
  var v464 = sequence$$2.substring(0, 10);
  var v96 = v463 + v464;
  stringToReturn = v96 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v465 = sequenceOne.length;
  var v97 = "Search results for " + v465;
  var stringToReturn$$1 = v97 + " residue sequence ";
  var v466 = fastaSequenceTitleOne.search(/[^\s]/);
  var v99 = v466 != -1;
  if(v99) {
    var v467 = stringToReturn$$1 + '"';
    var v98 = v467 + fastaSequenceTitleOne;
    stringToReturn$$1 = v98 + '"'
  }
  var v468 = stringToReturn$$1 + ' starting "';
  var v469 = sequenceOne.substring(0, 10);
  var v100 = v468 + v469;
  stringToReturn$$1 = v100 + '"\n';
  var v470 = stringToReturn$$1 + "and ";
  var v471 = sequenceTwo.length;
  var v101 = v470 + v471;
  stringToReturn$$1 = v101 + " residue sequence ";
  var v472 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v103 = v472 != -1;
  if(v103) {
    var v473 = stringToReturn$$1 + '"';
    var v102 = v473 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v102 + '"'
  }
  var v474 = stringToReturn$$1 + ' starting "';
  var v475 = sequenceTwo.substring(0, 10);
  var v104 = v474 + v475;
  stringToReturn$$1 = v104 + '"';
  var v105 = '<div class="info">' + stringToReturn$$1;
  return v105 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v106 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v106);
  var j$$2 = 0;
  var v476 = arrayOfPatterns$$3.length;
  var v109 = j$$2 < v476;
  for(;v109;) {
    var v107 = geneticCodeMatchExp$$1;
    var v108 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v785 = arrayOfPatterns$$3[j$$2]
    }
    var v682 = v785.match(/\/.+\//);
    var v477 = v682 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1351 = eval("introspect(JAMScript.introspectors.processAll) { " + v477 + " }")
    }else {
      var v1351 = JAMScript.call(eval, null, [v477])
    }
    v107[v108] = v1351;
    j$$2 = j$$2 + 1;
    var v478 = arrayOfPatterns$$3.length;
    v109 = j$$2 < v478
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v110 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v110);
  var j$$3 = 0;
  var v479 = arrayOfPatterns$$4.length;
  var v115 = j$$3 < v479;
  for(;v115;) {
    var v111 = geneticCodeMatchResult$$1;
    var v112 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v683 = arrayOfPatterns$$4[j$$3]
    }
    var v480 = v683.match(/=[a-zA-Z\*]/);
    var v1352 = v480.toString();
    v111[v112] = v1352;
    var v113 = geneticCodeMatchResult$$1;
    var v114 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v481 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1353 = v481.replace(/=/g, "");
    v113[v114] = v1353;
    j$$3 = j$$3 + 1;
    var v482 = arrayOfPatterns$$4.length;
    v115 = j$$3 < v482
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v483 = sequence$$3.length;
  var v116 = "Results for " + v483;
  var stringToReturn$$2 = v116 + " residue sequence ";
  var v484 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v118 = v484 != -1;
  if(v118) {
    var v485 = stringToReturn$$2 + '"';
    var v117 = v485 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v117 + '"'
  }
  var v486 = stringToReturn$$2 + ' starting "';
  var v487 = sequence$$3.substring(0, 10);
  var v119 = v486 + v487;
  stringToReturn$$2 = v119 + '"';
  var v120 = '<div class="info">' + stringToReturn$$2;
  return v120 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v684 = "Results for " + topology;
  var v488 = v684 + " ";
  var v489 = sequence$$4.length;
  var v121 = v488 + v489;
  var stringToReturn$$3 = v121 + " residue sequence ";
  var v490 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v123 = v490 != -1;
  if(v123) {
    var v491 = stringToReturn$$3 + '"';
    var v122 = v491 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v122 + '"'
  }
  var v492 = stringToReturn$$3 + ' starting "';
  var v493 = sequence$$4.substring(0, 10);
  var v124 = v492 + v493;
  stringToReturn$$3 = v124 + '"';
  var v125 = '<div class="info">' + stringToReturn$$3;
  return v125 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v494 = sequenceOne$$1.length;
  var v126 = "Alignment results for " + v494;
  var stringToReturn$$4 = v126 + " residue sequence ";
  var v495 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v128 = v495 != -1;
  if(v128) {
    var v496 = stringToReturn$$4 + '"';
    var v127 = v496 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v127 + '"'
  }
  var v497 = stringToReturn$$4 + ' starting "';
  var v498 = sequenceOne$$1.substring(0, 10);
  var v129 = v497 + v498;
  stringToReturn$$4 = v129 + '"\n';
  var v499 = stringToReturn$$4 + "and ";
  var v500 = sequenceTwo$$1.length;
  var v130 = v499 + v500;
  stringToReturn$$4 = v130 + " residue sequence ";
  var v501 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v132 = v501 != -1;
  if(v132) {
    var v502 = stringToReturn$$4 + '"';
    var v131 = v502 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v131 + '"'
  }
  var v503 = stringToReturn$$4 + ' starting "';
  var v504 = sequenceTwo$$1.substring(0, 10);
  var v133 = v503 + v504;
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
    var v505 = Math.random();
    var v506 = components.length;
    var v135 = v505 * v506;
    tempNum = Math.floor(v135);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v136 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v507 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v137 = v507 != -1;
  if(v137) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v508 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v139 = v508 != -1;
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
  var v685 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v509 = v685 != -1;
  var v687 = !v509;
  if(v687) {
    var v786 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v686 = v786 != -1;
    var v788 = !v686;
    if(v788) {
      var v855 = expressionToCheck.search(/\[\]/);
      var v787 = v855 != -1;
      var v857 = !v787;
      if(v857) {
        var v909 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v856 = v909 != -1;
        var v911 = !v856;
        if(v911) {
          var v946 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v910 = v946 != -1;
          var v948 = !v910;
          if(v948) {
            var v982 = expressionToCheck.search(/\|\|/);
            var v947 = v982 != -1;
            var v984 = !v947;
            if(v984) {
              var v1011 = expressionToCheck.search(/\/\|/);
              var v983 = v1011 != -1;
              var v1013 = !v983;
              if(v1013) {
                var v1038 = expressionToCheck.search(/\|\//);
                var v1012 = v1038 != -1;
                var v1040 = !v1012;
                if(v1040) {
                  var v1065 = expressionToCheck.search(/\[.\]/);
                  var v1039 = v1065 != -1;
                  var v1067 = !v1039;
                  if(v1067) {
                    var v1090 = expressionToCheck.search(/\</);
                    var v1066 = v1090 != -1;
                    var v1092 = !v1066;
                    if(v1092) {
                      var v1091 = expressionToCheck.search(/\>/);
                      v1066 = v1091 != -1
                    }
                    v1039 = v1066
                  }
                  v1012 = v1039
                }
                v983 = v1012
              }
              v947 = v983
            }
            v910 = v947
          }
          v856 = v910
        }
        v787 = v856
      }
      v686 = v787
    }
    v509 = v686
  }
  var v140 = v509;
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
    var v1366 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1366[2], v1366[1], v1366[0]);
  outputWindow.focus();
  var v145 = outputWindow.document;
  var v789 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v688 = v789 + "<head>\n";
  var v510 = v688 + "<title>Sequence Manipulation Suite</title>\n";
  var v146 = v510 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v145.write, v145, [v146]);
  if(isColor) {
    var v147 = outputWindow.document;
    var v1159 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1137 = v1159 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1115 = v1137 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1093 = v1115 + "div.info {font-weight: bold}\n";
    var v1068 = v1093 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1041 = v1068 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1014 = v1041 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v985 = v1014 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v949 = v985 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v912 = v949 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v858 = v912 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v790 = v858 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v689 = v790 + "td.many {color: #000000}\n";
    var v511 = v689 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v148 = v511 + "</style>\n";
    JAMScript.call(v147.write, v147, [v148])
  }else {
    var v149 = outputWindow.document;
    var v1181 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1160 = v1181 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1138 = v1160 + "div.title {display: none}\n";
    var v1116 = v1138 + "div.info {font-weight: bold}\n";
    var v1094 = v1116 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1069 = v1094 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1042 = v1069 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1015 = v1042 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v986 = v1015 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v950 = v986 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v913 = v950 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v859 = v913 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v791 = v859 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v690 = v791 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v512 = v690 + "img {display: none}\n";
    var v150 = v512 + "</style>\n";
    JAMScript.call(v149.write, v149, [v150])
  }
  var v151 = outputWindow.document;
  var v792 = "</head>\n" + '<body class="main">\n';
  var v691 = v792 + '<div class="title">';
  var v513 = v691 + title$$6;
  var v152 = v513 + " results</div>\n";
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
    var v1367 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1367[2], v1367[1], v1367[0]);
  outputWindow.focus();
  var v153 = outputWindow.document;
  var v793 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v692 = v793 + "<head>\n";
  var v514 = v692 + "<title>Sequence Manipulation Suite</title>\n";
  var v154 = v514 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v153.write, v153, [v154]);
  if(isBackground) {
    var v155 = outputWindow.document;
    var v1161 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1139 = v1161 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1117 = v1139 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1095 = v1117 + "div.info {font-weight: bold}\n";
    var v1070 = v1095 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1043 = v1070 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1016 = v1043 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v987 = v1016 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v951 = v987 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v914 = v951 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v860 = v914 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v794 = v860 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v693 = v794 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v515 = v693 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v156 = v515 + "</style>\n";
    JAMScript.call(v155.write, v155, [v156])
  }else {
    var v157 = outputWindow.document;
    var v1201 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1182 = v1201 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1162 = v1182 + "div.title {display: none}\n";
    var v1140 = v1162 + "div.info {font-weight: bold}\n";
    var v1118 = v1140 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1096 = v1118 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1071 = v1096 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1044 = v1071 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1017 = v1044 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v988 = v1017 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v952 = v988 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v915 = v952 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v861 = v915 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v795 = v861 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v694 = v795 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v516 = v694 + "img {display: none}\n";
    var v158 = v516 + "</style>\n";
    JAMScript.call(v157.write, v157, [v158])
  }
  var v159 = outputWindow.document;
  var v796 = "</head>\n" + '<body class="main">\n';
  var v695 = v796 + '<div class="title">';
  var v517 = v695 + title$$8;
  var v160 = v517 + " results</div>\n";
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
  var v518 = dnaSequence$$1.search(/./);
  var v161 = v518 != -1;
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
  var v519 = testArray[0];
  var v165 = v519 != testString;
  if(v165) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v520 = testString.search(re$$2);
  var v166 = v520 == -1;
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
  var v521 = testNum.toFixed(3);
  var v169 = v521 != 2489.824;
  if(v169) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v522 = testNum.toPrecision(5);
  var v170 = v522 != 2489.8;
  if(v170) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v523 = theNumber$$1.search(/\d/);
  var v171 = v523 == -1;
  if(v171) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v696 = emblFile.search(/ID/);
  var v524 = v696 == -1;
  var v698 = !v524;
  if(v698) {
    var v797 = emblFile.search(/AC/);
    var v697 = v797 == -1;
    var v799 = !v697;
    if(v799) {
      var v862 = emblFile.search(/DE/);
      var v798 = v862 == -1;
      var v864 = !v798;
      if(v864) {
        var v863 = emblFile.search(/SQ/);
        v798 = v863 == -1
      }
      v697 = v798
    }
    v524 = v697
  }
  var v172 = v524;
  if(v172) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v525 = theNumber$$2.search(/\d/);
  var v173 = v525 == -1;
  if(v173) {
    alert("Please enter a number.");
    return false
  }
  var v175 = theNumber$$2 > maxInput$$2;
  if(v175) {
    var v526 = "Please enter a number less than or equal to " + maxInput$$2;
    var v174 = v526 + ".";
    alert(v174);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v527 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v176 = v527 != -1;
  if(v176) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v528 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v177 = v528 != -1;
  if(v177) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v699 = genBankFile.search(/LOCUS/);
  var v529 = v699 == -1;
  var v701 = !v529;
  if(v701) {
    var v800 = genBankFile.search(/DEFINITION/);
    var v700 = v800 == -1;
    var v802 = !v700;
    if(v802) {
      var v865 = genBankFile.search(/ACCESSION/);
      var v801 = v865 == -1;
      var v867 = !v801;
      if(v867) {
        var v866 = genBankFile.search(/ORIGIN/);
        v801 = v866 == -1
      }
      v700 = v801
    }
    v529 = v700
  }
  var v178 = v529;
  if(v178) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v702 = genBankFile$$1.search(/LOCUS/);
  var v530 = v702 == -1;
  var v704 = !v530;
  if(v704) {
    var v803 = genBankFile$$1.search(/DEFINITION/);
    var v703 = v803 == -1;
    var v805 = !v703;
    if(v805) {
      var v868 = genBankFile$$1.search(/ACCESSION/);
      var v804 = v868 == -1;
      var v870 = !v804;
      if(v870) {
        var v869 = genBankFile$$1.search(/ORIGIN/);
        v804 = v869 == -1
      }
      v703 = v804
    }
    v530 = v703
  }
  var v179 = v530;
  if(v179) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v531 = genBankFile$$1.search(/FEATURES {13}/);
  var v180 = v531 == -1;
  if(v180) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v705 = emblFile$$1.search(/ID/);
  var v532 = v705 == -1;
  var v707 = !v532;
  if(v707) {
    var v806 = emblFile$$1.search(/AC/);
    var v706 = v806 == -1;
    var v808 = !v706;
    if(v808) {
      var v871 = emblFile$$1.search(/DE/);
      var v807 = v871 == -1;
      var v873 = !v807;
      if(v873) {
        var v872 = emblFile$$1.search(/SQ/);
        v807 = v872 == -1
      }
      v706 = v807
    }
    v532 = v706
  }
  var v181 = v532;
  if(v181) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v533 = emblFile$$1.search(/^FT/m);
  var v182 = v533 == -1;
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
    var v534 = basePerLine / groupSize;
    var v187 = j$$6 <= v534;
    for(;v187;) {
      var v186 = k < groupSize;
      for(;v186;) {
        var v184 = lineOfText;
        var v535 = k + i$$5;
        var v185 = text$$10.charAt(v535);
        lineOfText = v184 + v185;
        k = k + 1;
        v186 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v536 = basePerLine / groupSize;
      v187 = j$$6 <= v536
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
    var v537 = adjustment < 0;
    if(v537) {
      v537 = adjusted >= 0
    }
    var v191 = v537;
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
    var v538 = basePerLine$$2 / groupSize$$2;
    var v200 = j$$7 <= v538;
    for(;v200;) {
      var v195 = k$$1 < groupSize$$2;
      for(;v195;) {
        var v539 = i$$6 + k$$1;
        var v192 = v539 >= stopBase$$2;
        if(v192) {
          break
        }
        var v193 = lineOfText$$1;
        var v540 = k$$1 + i$$6;
        var v194 = text$$12.charAt(v540);
        lineOfText$$1 = v193 + v194;
        k$$1 = k$$1 + 1;
        v195 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v198 = numberPosition$$1 == "above";
      if(v198) {
        var v196 = aboveNum;
        var v541 = adjustNumbering(i$$6, numberingAdjustment);
        var v197 = rightNum(v541, "", groupSize$$2, tabIn$$3);
        aboveNum = v196 + v197
      }
      var v199 = i$$6 >= stopBase$$2;
      if(v199) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v542 = basePerLine$$2 / groupSize$$2;
      v200 = j$$7 <= v542
    }
    var v223 = numberPosition$$1 == "left";
    if(v223) {
      var v201 = outputWindow.document;
      var v809 = adjustNumbering(lineNum, numberingAdjustment);
      var v708 = rightNum(v809, "", 8, tabIn$$3);
      var v543 = v708 + lineOfText$$1;
      var v202 = v543 + "\n";
      JAMScript.call(v201.write, v201, [v202]);
      var v206 = strands$$1 == "two";
      if(v206) {
        var v203 = outputWindow.document;
        var v810 = adjustNumbering(lineNum, numberingAdjustment);
        var v709 = rightNum(v810, "", 8, tabIn$$3);
        var v710 = complement(lineOfText$$1);
        var v544 = v709 + v710;
        var v204 = v544 + "\n";
        JAMScript.call(v203.write, v203, [v204]);
        var v205 = outputWindow.document;
        JAMScript.call(v205.write, v205, ["\n"])
      }
    }else {
      var v222 = numberPosition$$1 == "right";
      if(v222) {
        var v207 = outputWindow.document;
        var v711 = lineOfText$$1;
        var v712 = adjustNumbering(i$$6, numberingAdjustment);
        var v545 = v711 + v712;
        var v208 = v545 + "\n";
        JAMScript.call(v207.write, v207, [v208]);
        var v212 = strands$$1 == "two";
        if(v212) {
          var v209 = outputWindow.document;
          var v713 = complement(lineOfText$$1);
          var v714 = adjustNumbering(i$$6, numberingAdjustment);
          var v546 = v713 + v714;
          var v210 = v546 + "\n";
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
            var v547 = complement(lineOfText$$1);
            var v218 = v547 + "\n";
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
    var v548 = basePerLine$$3 / groupSize$$3;
    var v233 = j$$8 <= v548;
    for(;v233;) {
      var v228 = k$$2 < groupSize$$3;
      for(;v228;) {
        var v549 = i$$7 + k$$2;
        var v225 = v549 >= stopBase$$3;
        if(v225) {
          break
        }
        var v226 = lineOfText$$2;
        var v550 = k$$2 + i$$7;
        var v227 = text$$13.charAt(v550);
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
      var v551 = basePerLine$$3 / groupSize$$3;
      v233 = j$$8 <= v551
    }
    var v244 = numberPosition$$2 == "left";
    if(v244) {
      var v234 = outputWindow.document;
      var v715 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v552 = v715 + lineOfText$$2;
      var v235 = v552 + "\n";
      JAMScript.call(v234.write, v234, [v235])
    }else {
      var v243 = numberPosition$$2 == "right";
      if(v243) {
        var v236 = outputWindow.document;
        var v553 = lineOfText$$2 + i$$7;
        var v237 = v553 + "\n";
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
  var v716 = sequence$$13.length;
  var v554 = v716 <= firstIndexToMutate;
  var v718 = !v554;
  if(v718) {
    var v717 = lastIndexToMutate < 0;
    var v811 = !v717;
    if(v811) {
      v717 = lastIndexToMutate <= firstIndexToMutate
    }
    v554 = v717
  }
  var v246 = v554;
  if(v246) {
    numMut = 0
  }
  var i$$8 = 0;
  var v254 = i$$8 < numMut;
  for(;v254;) {
    maxNum = sequence$$13.length;
    var v555 = Math.random();
    var v247 = v555 * maxNum;
    randNum = Math.floor(v247);
    var v556 = randNum < firstIndexToMutate;
    var v719 = !v556;
    if(v719) {
      v556 = randNum > lastIndexToMutate
    }
    var v248 = v556;
    if(v248) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v254 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v557 = Math.random();
      var v558 = components$$1.length;
      var v249 = v557 * v558;
      componentsIndex = Math.round(v249);
      var v559 = components$$1.length;
      var v250 = componentsIndex == v559;
      if(v250) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v560 = components$$1[componentsIndex]
      }
      var v251 = v560 != currentChar;
      if(v251) {
        needNewChar = false
      }
    }
    var v561 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v562 = components$$1[componentsIndex]
    }
    var v252 = v561 + v562;
    var v563 = randNum + 1;
    var v564 = sequence$$13.length;
    var v253 = sequence$$13.substring(v563, v564);
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
    var v565 = Math.random();
    var v566 = components$$2.length;
    var v257 = v565 * v566;
    tempNum$$1 = Math.floor(v257);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v567 = sequence$$14.length;
    var v260 = v567 == 60;
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
    var v812 = sequence$$15.length;
    var v720 = v812 - lookAhead;
    var v721 = sequence$$15.length;
    var v568 = sequence$$15.substring(v720, v721);
    var v265 = v568 + sequence$$15;
    var v266 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v265 + v266;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v268 = outputWindow.document;
  JAMScript.call(v268.write, v268, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v269 = outputWindow.document;
  var v813 = '<tr><td class="title" width="200px">' + "Site:";
  var v722 = v813 + '</td><td class="title">';
  var v569 = v722 + "Positions:";
  var v270 = v569 + "</td></tr>\n";
  JAMScript.call(v269.write, v269, [v270]);
  var i$$9 = 0;
  var v570 = arrayOfItems.length;
  var v286 = i$$9 < v570;
  for(;v286;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v571 = arrayOfItems[i$$9]
    }
    var v271 = v571.match(/\/.+\//);
    matchExp = v271 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v814 = arrayOfItems[i$$9]
    }
    var v723 = v814.match(/\)\D*\d+/);
    var v572 = v723.toString();
    var v272 = v572.replace(/\)\D*/, "");
    cutDistance = parseFloat(v272);
    var v278 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v278;) {
      var v273 = matchExp.lastIndex;
      matchPosition = v273 - cutDistance;
      var v573 = matchPosition >= lowerLimit;
      if(v573) {
        v573 = matchPosition < upperLimit
      }
      var v276 = v573;
      if(v276) {
        timesFound = timesFound + 1;
        var v274 = tempString$$1 + ", ";
        var v574 = matchPosition - shiftValue;
        var v275 = v574 + 1;
        tempString$$1 = v274 + v275
      }
      var v575 = matchExp.lastIndex;
      var v724 = RegExp.lastMatch;
      var v576 = v724.length;
      var v277 = v575 - v576;
      matchExp.lastIndex = v277 + 1;
      v278 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v577 = tempString$$1.search(/\d/);
    var v279 = v577 != -1;
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
    var v989 = '<tr><td class="' + backGroundClass;
    var v953 = v989 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1045 = arrayOfItems[i$$9]
    }
    var v1018 = v1045.match(/\([^\(]+\)/);
    var v990 = v1018.toString();
    var v954 = v990.replace(/\(|\)/g, "");
    var v916 = v953 + v954;
    var v874 = v916 + '</td><td class="';
    var v815 = v874 + backGroundClass;
    var v725 = v815 + '">';
    var v578 = v725 + tempString$$1;
    var v285 = v578 + "</td></tr>\n";
    JAMScript.call(v284.write, v284, [v285]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v579 = arrayOfItems.length;
    v286 = i$$9 < v579
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
  var v917 = '<tr><td class="title">' + "Pattern:";
  var v875 = v917 + '</td><td class="title">';
  var v816 = v875 + "Times found:";
  var v726 = v816 + '</td><td class="title">';
  var v580 = v726 + "Percentage:";
  var v290 = v580 + "</td></tr>\n";
  JAMScript.call(v289.write, v289, [v290]);
  var i$$10 = 0;
  var v581 = arrayOfItems$$1.length;
  var v299 = i$$10 < v581;
  for(;v299;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v582 = arrayOfItems$$1[i$$10]
    }
    var v291 = v582.match(/\/[^\/]+\//);
    var matchExp$$1 = v291 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v583 = sequence$$16.search(matchExp$$1);
    var v293 = v583 != -1;
    if(v293) {
      var v292 = sequence$$16.match(matchExp$$1);
      tempNumber = v292.length
    }
    var percentage = 0;
    var v727 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v876 = arrayOfItems$$1[i$$10]
    }
    var v817 = v876.match(/\d+/);
    var v728 = parseFloat(v817);
    var v584 = v727 - v728;
    var v296 = v584 > 0;
    if(v296) {
      var v294 = 100 * tempNumber;
      var v585 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v818 = arrayOfItems$$1[i$$10]
      }
      var v729 = v818.match(/\d+/);
      var v586 = parseFloat(v729);
      var v295 = v585 - v586;
      percentage = v294 / v295
    }
    var v297 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1046 = arrayOfItems$$1[i$$10]
    }
    var v1019 = v1046.match(/\([^\(]+\)\b/);
    var v991 = v1019.toString();
    var v955 = v991.replace(/\(|\)/g, "");
    var v918 = "<tr><td>" + v955;
    var v877 = v918 + "</td><td>";
    var v819 = v877 + tempNumber;
    var v730 = v819 + "</td><td>";
    var v731 = percentage.toFixed(2);
    var v587 = v730 + v731;
    var v298 = v587 + "</td></tr>\n";
    JAMScript.call(v297.write, v297, [v298]);
    i$$10 = i$$10 + 1;
    var v588 = arrayOfItems$$1.length;
    v299 = i$$10 < v588
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
  var v589 = sequence$$17.length;
  var v307 = v589 > 0;
  for(;v307;) {
    maxNum$$1 = sequence$$17.length;
    var v590 = Math.random();
    var v301 = v590 * maxNum$$1;
    randNum$$1 = Math.floor(v301);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v302 = randNum$$1 + 1;
    var v303 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v302, v303);
    sequence$$17 = tempString1 + tempString2;
    var v591 = tempSeq.length;
    var v306 = v591 == 60;
    if(v306) {
      var v304 = outputWindow.document;
      var v305 = tempSeq + "\n";
      JAMScript.call(v304.write, v304, [v305]);
      tempSeq = ""
    }
    var v592 = sequence$$17.length;
    v307 = v592 > 0
  }
  var v308 = outputWindow.document;
  var v309 = tempSeq + "\n";
  JAMScript.call(v308.write, v308, [v309]);
  return true
}
function getRestrictionSiteString(type$$25) {
  var v593 = type$$25.toLowerCase();
  var v311 = v593 == "standard";
  if(v311) {
    var v1347 = "/aggcct/ (AatI agg|cct)3," + "/gacgtc/ (AatII gacgt|c)1,";
    var v1346 = v1347 + "/tgcgca/ (Acc16I tgc|gca)3,";
    var v1345 = v1346 + "/cgcg/ (AccII cg|cg)2,";
    var v1344 = v1345 + "/tccgga/ (AccIII t|ccgga)5,";
    var v1343 = v1344 + "/aacgtt/ (AclI aa|cgtt)4,";
    var v1342 = v1343 + "/cacgtg/ (AcvI cac|gtg)3,";
    var v1341 = v1342 + "/gtac/ (AfaI gt|ac)2,";
    var v1340 = v1341 + "/agcgct/ (AfeI agc|gct)3,";
    var v1339 = v1340 + "/cttaag/ (AflII c|ttaag)5,";
    var v1338 = v1339 + "/accggt/ (AgeI a|ccggt)5,";
    var v1337 = v1338 + "/actagt/ (AhlI a|ctagt)5,";
    var v1336 = v1337 + "/gtgcac/ (Alw441 g|tgcac)5,";
    var v1335 = v1336 + "/agct/ (AluI ag|ct)2,";
    var v1334 = v1335 + "/agcgct/ (Aor51HI agc|gct)3,";
    var v1333 = v1334 + "/gggccc/ (ApaI gggcc|c)1,";
    var v1332 = v1333 + "/gtgcac/ (ApaLI g|tgcac)5,";
    var v1331 = v1332 + "/ggcgcgcc/ (AscI gg|cgcgcc)6,";
    var v1330 = v1331 + "/attaat/ (AseI at|taat)4,";
    var v1329 = v1330 + "/ggtacc/ (Asp718I g|gtacc)5,";
    var v1328 = v1329 + "/ttcgaa/ (AsuII tt|cgaa)4,";
    var v1327 = v1328 + "/c[cty]cg[agr]g/ (AvaI c|ycgrg)5,";
    var v1326 = v1327 + "/tgcgca/ (AviII tgc|gca)3,";
    var v1325 = v1326 + "/cctagg/ (AvrII c|ctagg)5,";
    var v1324 = v1325 + "/tggcca/ (BalI tgg|cca)3,";
    var v1323 = v1324 + "/ggatcc/ (BamHI g|gatcc)5,";
    var v1322 = v1323 + "/atcgat/ (BanIII at|cgat)4,";
    var v1321 = v1322 + "/ggcgcc/ (BbeI ggcgc|c)1,";
    var v1320 = v1321 + "/cacgtg/ (BbrPI cac|gtg)3,";
    var v1319 = v1320 + "/gcatgc/ (BbuI gcatg|c)1,";
    var v1318 = v1319 + "/actagt/ (BcuI a|ctagt)5,";
    var v1317 = v1318 + "/tgatca/ (BclI t|gatca)5,";
    var v1316 = v1317 + "/ctag/ (BfaI c|tag)3,";
    var v1315 = v1316 + "/cttaag/ (BfrI c|ttaag)5,";
    var v1314 = v1315 + "/atgcat/ (BfrBI atg|cat)3,";
    var v1313 = v1314 + "/agatct/ (BglII a|gatct)5,";
    var v1312 = v1313 + "/cctagg/ (BlnI c|ctagg)5,";
    var v1311 = v1312 + "/atcgat/ (BseCI at|cgat)4,";
    var v1310 = v1311 + "/gcgcgc/ (BsePI g|cgcgc)5,";
    var v1309 = v1310 + "/cggccg/ (BseX3I c|ggccg)5,";
    var v1308 = v1309 + "/accggt/ (BshTI a|ccggt)5,";
    var v1307 = v1308 + "/tgtaca/ (Bsp1407I t|gtaca)5,";
    var v1306 = v1307 + "/ccatgg/ (Bsp19I c|catgg)5,";
    var v1305 = v1306 + "/atcgat/ (BspDI at|cgat)4,";
    var v1304 = v1305 + "/tccgga/ (BspEI t|ccgga)5,";
    var v1303 = v1304 + "/tgtaca/ (BsrGI t|gtaca)5,";
    var v1302 = v1303 + "/gcgcgc/ (BssHII g|cgcgc)5,";
    var v1301 = v1302 + "/cgcg/ (BstUI cg|cg)2,";
    var v1300 = v1301 + "/atcgat/ (ClaI at|cgat)4,";
    var v1299 = v1300 + "/gatc/ (DpnII |gatc)4,";
    var v1298 = v1299 + "/tttaaa/ (DraI ttt|aaa)3,";
    var v1297 = v1298 + "/cggccg/ (EagI c|ggccg)5,";
    var v1296 = v1297 + "/gaattc/ (EcoRI g|aattc)5,";
    var v1295 = v1296 + "/gatatc/ (EcoRV gat|atc)3,";
    var v1294 = v1295 + "/ggcgcc/ (EgeI ggc|gcc)3,";
    var v1293 = v1294 + "/ggccggcc/ (FseI ggccgg|cc)2,";
    var v1292 = v1293 + "/tgcgca/ (FspI tgc|gca)3,";
    var v1291 = v1292 + "/ggcc/ (HaeIII gg|cc)2,";
    var v1290 = v1291 + "/gt[cty][agr]ac/ (HincII gty|rac)3,";
    var v1289 = v1290 + "/aagctt/ (HindIII a|agctt)5,";
    var v1288 = v1289 + "/ga[acgturyswkmbdhvn]tc/ (HinfI g|antc)4,";
    var v1287 = v1288 + "/gttaac/ (HpaI gtt|aac)3,";
    var v1286 = v1287 + "/ccgg/ (HpaII c|cgg)3,";
    var v1285 = v1286 + "/ggcgcc/ (KasI g|gcgcc)5,";
    var v1284 = v1285 + "/ggtacc/ (KpnI ggtac|c)1,";
    var v1283 = v1284 + "/[acgturyswkmbdhvn]gatc[acgturyswkmbdhvn]/ (MboI |gatc)5,";
    var v1282 = v1283 + "/caattg/ (MfeI c|aattg)5,";
    var v1281 = v1282 + "/acgcgt/ (MluI a|cgcgt)5,";
    var v1280 = v1281 + "/tggcca/ (MscI tgg|cca)3,";
    var v1279 = v1280 + "/ttaa/ (MseI t|taa)3,";
    var v1278 = v1279 + "/ccgg/ (MspI c|cgg)3,";
    var v1277 = v1278 + "/gccggc/ (NaeI gcc|ggc)3,";
    var v1276 = v1277 + "/ggcgcc/ (NarI gg|cgcc)4,";
    var v1275 = v1276 + "/ccatgg/ (NcoI c|catgg)5,";
    var v1274 = v1275 + "/catatg/ (NdeI ca|tatg)4,";
    var v1273 = v1274 + "/gatc/ (NdeII |gatc)4,";
    var v1272 = v1273 + "/gccggc/ (NgoMIV g|ccggc)5,";
    var v1271 = v1272 + "/gctagc/ (NheI g|ctagc)5,";
    var v1270 = v1271 + "/catg/ (NlaIII catg|)0,";
    var v1269 = v1270 + "/gcggccgc/ (NotI gc|ggccgc)6,";
    var v1268 = v1269 + "/tcgcga/ (NruI tcg|cga)3,";
    var v1267 = v1268 + "/atgcat/ (NsiI atgca|t)1,";
    var v1266 = v1267 + "/ttaattaa/ (PacI ttaat|taa)3,";
    var v1265 = v1266 + "/acatgt/ (PciI a|catgt)5,";
    var v1264 = v1265 + "/ggcc/ (PhoI gg|cc)2,";
    var v1263 = v1264 + "/gtttaaac/ (PmeI gttt|aaac)4,";
    var v1262 = v1263 + "/cacgtg/ (PmlI cac|gtg)3,";
    var v1261 = v1262 + "/ttataa/ (PsiI tta|taa)3,";
    var v1260 = v1261 + "/ctgcag/ (PstI ctgca|g)1,";
    var v1259 = v1260 + "/cgatcg/ (PvuI cgat|cg)2,";
    var v1258 = v1259 + "/cagctg/ (PvuII cag|ctg)3,";
    var v1257 = v1258 + "/gtac/ (RsaI gt|ac)2,";
    var v1256 = v1257 + "/gagctc/ (SacI gagct|c)1,";
    var v1238 = v1256 + "/ccgcgg/ (SacII ccgc|gg)2,";
    var v1220 = v1238 + "/gtcgac/ (SalI g|tcgac)5,";
    var v1202 = v1220 + "/cctgcagg/ (SbfI cctgca|gg)2,";
    var v1183 = v1202 + "/agtact/ (ScaI agt|act)3,";
    var v1163 = v1183 + "/ggcgcc/ (SfoI ggc|gcc)3,";
    var v1141 = v1163 + "/cccggg/ (SmaI ccc|ggg)3,";
    var v1119 = v1141 + "/tacgta/ (SnaBI tac|gta)3,";
    var v1097 = v1119 + "/actagt/ (SpeI a|ctagt)5,";
    var v1072 = v1097 + "/gcatgc/ (SphI gcatg|c)1,";
    var v1047 = v1072 + "/aatatt/ (SspI aat|att)3,";
    var v1020 = v1047 + "/gagctc/ (SstI gagct|c)1,";
    var v992 = v1020 + "/ccgcgg/ (SstII ccgc|gg)2,";
    var v956 = v992 + "/aggcct/ (StuI agg|cct)3,";
    var v919 = v956 + "/atttaaat/ (SwaI attt|aaat)4,";
    var v878 = v919 + "/tcga/ (TaqI t|cga)3,";
    var v820 = v878 + "/ctcgag/ (TliI c|tcgag)5,";
    var v732 = v820 + "/attaat/ (VspI at|taat)4,";
    var v594 = v732 + "/tctaga/ (XbaI t|ctaga)5,";
    var v310 = v594 + "/ctcgag/ (XhoI c|tcgag)5,";
    return v310 + "/cccggg/ (XmaI c|ccggg)5"
  }
  return true
}
function getGeneticCodeString(type$$26) {
  var v733 = type$$26.toLowerCase();
  var v595 = v733 == "standard";
  var v735 = !v595;
  if(v735) {
    var v734 = type$$26.toLowerCase();
    v595 = v734 == "transl_table=1"
  }
  var v313 = v595;
  if(v313) {
    var v1239 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1221 = v1239 + "/ga[tcuy]/=D,";
    var v1203 = v1221 + "/ga[agr]/=E,";
    var v1184 = v1203 + "/[tu][tu][tcuy]/=F,";
    var v1164 = v1184 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1142 = v1164 + "/ca[tcuy]/=H,";
    var v1120 = v1142 + "/a[tu][atcuwmhy]/=I,";
    var v1098 = v1120 + "/aa[agr]/=K,";
    var v1073 = v1098 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1048 = v1073 + "/a[tu]g/=M,";
    var v1021 = v1048 + "/aa[tucy]/=N,";
    var v993 = v1021 + "/cc[acgturyswkmbdhvn]/=P,";
    var v957 = v993 + "/ca[agr]/=Q,";
    var v920 = v957 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v879 = v920 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v821 = v879 + "/ac[acgturyswkmbdhvn]/=T,";
    var v736 = v821 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v596 = v736 + "/[tu]gg/=W,";
    var v312 = v596 + "/[tu]a[ctuy]/=Y,";
    return v312 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v597 = type$$26.toLowerCase();
  var v315 = v597 == "transl_table=2";
  if(v315) {
    var v1240 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1222 = v1240 + "/ga[tcuy]/=D,";
    var v1204 = v1222 + "/ga[agr]/=E,";
    var v1185 = v1204 + "/[tu][tu][tcuy]/=F,";
    var v1165 = v1185 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1143 = v1165 + "/ca[tcuy]/=H,";
    var v1121 = v1143 + "/a[tu][tcuy]/=I,";
    var v1099 = v1121 + "/aa[agr]/=K,";
    var v1074 = v1099 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1049 = v1074 + "/a[tu][agr]/=M,";
    var v1022 = v1049 + "/aa[tucy]/=N,";
    var v994 = v1022 + "/cc[acgturyswkmbdhvn]/=P,";
    var v958 = v994 + "/ca[agr]/=Q,";
    var v921 = v958 + "/cg[acgturyswkmbdhvn]/=R,";
    var v880 = v921 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v822 = v880 + "/ac[acgturyswkmbdhvn]/=T,";
    var v737 = v822 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v598 = v737 + "/[tu]g[agr]/=W,";
    var v314 = v598 + "/[tu]a[ctuy]/=Y,";
    return v314 + "/[tu]a[agr]|ag[agr]/=*"
  }
  var v599 = type$$26.toLowerCase();
  var v317 = v599 == "transl_table=3";
  if(v317) {
    var v1241 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1223 = v1241 + "/ga[tcuy]/=D,";
    var v1205 = v1223 + "/ga[agr]/=E,";
    var v1186 = v1205 + "/[tu][tu][tcuy]/=F,";
    var v1166 = v1186 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1144 = v1166 + "/ca[tcuy]/=H,";
    var v1122 = v1144 + "/a[tu][tcuy]/=I,";
    var v1100 = v1122 + "/aa[agr]/=K,";
    var v1075 = v1100 + "/[tu][tu][agr]/=L,";
    var v1050 = v1075 + "/a[tu][agr]/=M,";
    var v1023 = v1050 + "/aa[tucy]/=N,";
    var v995 = v1023 + "/cc[acgturyswkmbdhvn]/=P,";
    var v959 = v995 + "/ca[agr]/=Q,";
    var v922 = v959 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v881 = v922 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v823 = v881 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v738 = v823 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v600 = v738 + "/[tu]g[agr]/=W,";
    var v316 = v600 + "/[tu]a[ctuy]/=Y,";
    return v316 + "/[tu]a[agr]/=*"
  }
  var v601 = type$$26.toLowerCase();
  var v319 = v601 == "transl_table=4";
  if(v319) {
    var v1242 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1224 = v1242 + "/ga[tcuy]/=D,";
    var v1206 = v1224 + "/ga[agr]/=E,";
    var v1187 = v1206 + "/[tu][tu][tcuy]/=F,";
    var v1167 = v1187 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1145 = v1167 + "/ca[tcuy]/=H,";
    var v1123 = v1145 + "/a[tu][atcuwmhy]/=I,";
    var v1101 = v1123 + "/aa[agr]/=K,";
    var v1076 = v1101 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1051 = v1076 + "/a[tu]g/=M,";
    var v1024 = v1051 + "/aa[tucy]/=N,";
    var v996 = v1024 + "/cc[acgturyswkmbdhvn]/=P,";
    var v960 = v996 + "/ca[agr]/=Q,";
    var v923 = v960 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v882 = v923 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v824 = v882 + "/ac[acgturyswkmbdhvn]/=T,";
    var v739 = v824 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v602 = v739 + "/[tu]g[agr]/=W,";
    var v318 = v602 + "/[tu]a[ctuy]/=Y,";
    return v318 + "/[tu]a[agr]/=*"
  }
  var v603 = type$$26.toLowerCase();
  var v321 = v603 == "transl_table=5";
  if(v321) {
    var v1243 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1225 = v1243 + "/ga[tcuy]/=D,";
    var v1207 = v1225 + "/ga[agr]/=E,";
    var v1188 = v1207 + "/[tu][tu][tcuy]/=F,";
    var v1168 = v1188 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1146 = v1168 + "/ca[tcuy]/=H,";
    var v1124 = v1146 + "/a[tu][tcuy]/=I,";
    var v1102 = v1124 + "/aa[agr]/=K,";
    var v1077 = v1102 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1052 = v1077 + "/a[tu][agr]/=M,";
    var v1025 = v1052 + "/aa[tucy]/=N,";
    var v997 = v1025 + "/cc[acgturyswkmbdhvn]/=P,";
    var v961 = v997 + "/ca[agr]/=Q,";
    var v924 = v961 + "/cg[acgturyswkmbdhvn]/=R,";
    var v883 = v924 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v825 = v883 + "/ac[acgturyswkmbdhvn]/=T,";
    var v740 = v825 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v604 = v740 + "/[tu]g[agr]/=W,";
    var v320 = v604 + "/[tu]a[ctuy]/=Y,";
    return v320 + "/[tu]a[agr]/=*"
  }
  var v605 = type$$26.toLowerCase();
  var v323 = v605 == "transl_table=6";
  if(v323) {
    var v1244 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1226 = v1244 + "/ga[tcuy]/=D,";
    var v1208 = v1226 + "/ga[agr]/=E,";
    var v1189 = v1208 + "/[tu][tu][tcuy]/=F,";
    var v1169 = v1189 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1147 = v1169 + "/ca[tcuy]/=H,";
    var v1125 = v1147 + "/a[tu][atcuwmhy]/=I,";
    var v1103 = v1125 + "/aa[agr]/=K,";
    var v1078 = v1103 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1053 = v1078 + "/a[tu]g/=M,";
    var v1026 = v1053 + "/aa[tucy]/=N,";
    var v998 = v1026 + "/cc[acgturyswkmbdhvn]/=P,";
    var v962 = v998 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v925 = v962 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v884 = v925 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v826 = v884 + "/ac[acgturyswkmbdhvn]/=T,";
    var v741 = v826 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v606 = v741 + "/[tu]gg/=W,";
    var v322 = v606 + "/[tu]a[ctuy]/=Y,";
    return v322 + "/[tu]ga/=*"
  }
  var v607 = type$$26.toLowerCase();
  var v325 = v607 == "transl_table=9";
  if(v325) {
    var v1245 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1227 = v1245 + "/ga[tcuy]/=D,";
    var v1209 = v1227 + "/ga[agr]/=E,";
    var v1190 = v1209 + "/[tu][tu][tcuy]/=F,";
    var v1170 = v1190 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1148 = v1170 + "/ca[tcuy]/=H,";
    var v1126 = v1148 + "/a[tu][atcuwmhy]/=I,";
    var v1104 = v1126 + "/aag/=K,";
    var v1079 = v1104 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1054 = v1079 + "/a[tu]g/=M,";
    var v1027 = v1054 + "/aa[atcuwmhy]/=N,";
    var v999 = v1027 + "/cc[acgturyswkmbdhvn]/=P,";
    var v963 = v999 + "/ca[agr]/=Q,";
    var v926 = v963 + "/cg[acgturyswkmbdhvn]/=R,";
    var v885 = v926 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v827 = v885 + "/ac[acgturyswkmbdhvn]/=T,";
    var v742 = v827 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v608 = v742 + "/[tu]g[agr]/=W,";
    var v324 = v608 + "/[tu]a[ctuy]/=Y,";
    return v324 + "/[tu]a[agr]/=*"
  }
  var v609 = type$$26.toLowerCase();
  var v327 = v609 == "transl_table=10";
  if(v327) {
    var v1246 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1228 = v1246 + "/ga[tcuy]/=D,";
    var v1210 = v1228 + "/ga[agr]/=E,";
    var v1191 = v1210 + "/[tu][tu][tcuy]/=F,";
    var v1171 = v1191 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1149 = v1171 + "/ca[tcuy]/=H,";
    var v1127 = v1149 + "/a[tu][atcuwmhy]/=I,";
    var v1105 = v1127 + "/aa[agr]/=K,";
    var v1080 = v1105 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1055 = v1080 + "/a[tu]g/=M,";
    var v1028 = v1055 + "/aa[tucy]/=N,";
    var v1000 = v1028 + "/cc[acgturyswkmbdhvn]/=P,";
    var v964 = v1000 + "/ca[agr]/=Q,";
    var v927 = v964 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v886 = v927 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v828 = v886 + "/ac[acgturyswkmbdhvn]/=T,";
    var v743 = v828 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v610 = v743 + "/[tu]gg/=W,";
    var v326 = v610 + "/[tu]a[ctuy]/=Y,";
    return v326 + "/[tu]a[agr]/=*"
  }
  var v611 = type$$26.toLowerCase();
  var v329 = v611 == "transl_table=11";
  if(v329) {
    var v1247 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1229 = v1247 + "/ga[tcuy]/=D,";
    var v1211 = v1229 + "/ga[agr]/=E,";
    var v1192 = v1211 + "/[tu][tu][tcuy]/=F,";
    var v1172 = v1192 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1150 = v1172 + "/ca[tcuy]/=H,";
    var v1128 = v1150 + "/a[tu][atcuwmhy]/=I,";
    var v1106 = v1128 + "/aa[agr]/=K,";
    var v1081 = v1106 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1056 = v1081 + "/a[tu]g/=M,";
    var v1029 = v1056 + "/aa[tucy]/=N,";
    var v1001 = v1029 + "/cc[acgturyswkmbdhvn]/=P,";
    var v965 = v1001 + "/ca[agr]/=Q,";
    var v928 = v965 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v887 = v928 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v829 = v887 + "/ac[acgturyswkmbdhvn]/=T,";
    var v744 = v829 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v612 = v744 + "/[tu]gg/=W,";
    var v328 = v612 + "/[tu]a[ctuy]/=Y,";
    return v328 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v613 = type$$26.toLowerCase();
  var v331 = v613 == "transl_table=12";
  if(v331) {
    var v1248 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1230 = v1248 + "/ga[tcuy]/=D,";
    var v1212 = v1230 + "/ga[agr]/=E,";
    var v1193 = v1212 + "/[tu][tu][tcuy]/=F,";
    var v1173 = v1193 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1151 = v1173 + "/ca[tcuy]/=H,";
    var v1129 = v1151 + "/a[tu][atcuwmhy]/=I,";
    var v1107 = v1129 + "/aa[agr]/=K,";
    var v1082 = v1107 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1057 = v1082 + "/a[tu]g/=M,";
    var v1030 = v1057 + "/aa[tucy]/=N,";
    var v1002 = v1030 + "/cc[acgturyswkmbdhvn]/=P,";
    var v966 = v1002 + "/ca[agr]/=Q,";
    var v929 = v966 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v888 = v929 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v830 = v888 + "/ac[acgturyswkmbdhvn]/=T,";
    var v745 = v830 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v614 = v745 + "/[tu]gg/=W,";
    var v330 = v614 + "/[tu]a[ctuy]/=Y,";
    return v330 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v615 = type$$26.toLowerCase();
  var v333 = v615 == "transl_table=13";
  if(v333) {
    var v1249 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1231 = v1249 + "/ga[tcuy]/=D,";
    var v1213 = v1231 + "/ga[agr]/=E,";
    var v1194 = v1213 + "/[tu][tu][tcuy]/=F,";
    var v1174 = v1194 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1152 = v1174 + "/ca[tcuy]/=H,";
    var v1130 = v1152 + "/a[tu][tcuy]/=I,";
    var v1108 = v1130 + "/aa[agr]/=K,";
    var v1083 = v1108 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1058 = v1083 + "/a[tu][agr]/=M,";
    var v1031 = v1058 + "/aa[tucy]/=N,";
    var v1003 = v1031 + "/cc[acgturyswkmbdhvn]/=P,";
    var v967 = v1003 + "/ca[agr]/=Q,";
    var v930 = v967 + "/cg[acgturyswkmbdhvn]/=R,";
    var v889 = v930 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v831 = v889 + "/ac[acgturyswkmbdhvn]/=T,";
    var v746 = v831 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v616 = v746 + "/[tu]g[agr]/=W,";
    var v332 = v616 + "/[tu]a[ctuy]/=Y,";
    return v332 + "/[tu]a[agr]/=*"
  }
  var v617 = type$$26.toLowerCase();
  var v335 = v617 == "transl_table=14";
  if(v335) {
    var v1250 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1232 = v1250 + "/ga[tcuy]/=D,";
    var v1214 = v1232 + "/ga[agr]/=E,";
    var v1195 = v1214 + "/[tu][tu][tcuy]/=F,";
    var v1175 = v1195 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1153 = v1175 + "/ca[tcuy]/=H,";
    var v1131 = v1153 + "/a[tu][atcuwmhy]/=I,";
    var v1109 = v1131 + "/aag/=K,";
    var v1084 = v1109 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1059 = v1084 + "/a[tu]g/=M,";
    var v1032 = v1059 + "/aa[atcuwmhy]/=N,";
    var v1004 = v1032 + "/cc[acgturyswkmbdhvn]/=P,";
    var v968 = v1004 + "/ca[agr]/=Q,";
    var v931 = v968 + "/cg[acgturyswkmbdhvn]/=R,";
    var v890 = v931 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v832 = v890 + "/ac[acgturyswkmbdhvn]/=T,";
    var v747 = v832 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v618 = v747 + "/[tu]g[agr]/=W,";
    var v334 = v618 + "/[tu]a[atcuwmhy]/=Y,";
    return v334 + "/[tu]ag/=*"
  }
  var v619 = type$$26.toLowerCase();
  var v337 = v619 == "transl_table=15";
  if(v337) {
    var v1251 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1233 = v1251 + "/ga[tcuy]/=D,";
    var v1215 = v1233 + "/ga[agr]/=E,";
    var v1196 = v1215 + "/[tu][tu][tcuy]/=F,";
    var v1176 = v1196 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1154 = v1176 + "/ca[tcuy]/=H,";
    var v1132 = v1154 + "/a[tu][atcuwmhy]/=I,";
    var v1110 = v1132 + "/aa[agr]/=K,";
    var v1085 = v1110 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1060 = v1085 + "/a[tu]g/=M,";
    var v1033 = v1060 + "/aa[tucy]/=N,";
    var v1005 = v1033 + "/cc[acgturyswkmbdhvn]/=P,";
    var v969 = v1005 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v932 = v969 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v891 = v932 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v833 = v891 + "/ac[acgturyswkmbdhvn]/=T,";
    var v748 = v833 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v620 = v748 + "/[tu]gg/=W,";
    var v336 = v620 + "/[tu]a[ctuy]/=Y,";
    return v336 + "/[tu][agr]a/=*"
  }
  var v621 = type$$26.toLowerCase();
  var v339 = v621 == "transl_table=16";
  if(v339) {
    var v1252 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1234 = v1252 + "/ga[tcuy]/=D,";
    var v1216 = v1234 + "/ga[agr]/=E,";
    var v1197 = v1216 + "/[tu][tu][tcuy]/=F,";
    var v1177 = v1197 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1155 = v1177 + "/ca[tcuy]/=H,";
    var v1133 = v1155 + "/a[tu][atcuwmhy]/=I,";
    var v1111 = v1133 + "/aa[agr]/=K,";
    var v1086 = v1111 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1061 = v1086 + "/a[tu]g/=M,";
    var v1034 = v1061 + "/aa[tucy]/=N,";
    var v1006 = v1034 + "/cc[acgturyswkmbdhvn]/=P,";
    var v970 = v1006 + "/ca[agr]/=Q,";
    var v933 = v970 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v892 = v933 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v834 = v892 + "/ac[acgturyswkmbdhvn]/=T,";
    var v749 = v834 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v622 = v749 + "/[tu]gg/=W,";
    var v338 = v622 + "/[tu]a[ctuy]/=Y,";
    return v338 + "/[tu][agr]a/=*"
  }
  var v623 = type$$26.toLowerCase();
  var v341 = v623 == "transl_table=21";
  if(v341) {
    var v1253 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1235 = v1253 + "/ga[tcuy]/=D,";
    var v1217 = v1235 + "/ga[agr]/=E,";
    var v1198 = v1217 + "/[tu][tu][tcuy]/=F,";
    var v1178 = v1198 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1156 = v1178 + "/ca[tcuy]/=H,";
    var v1134 = v1156 + "/a[tu][tcuy]/=I,";
    var v1112 = v1134 + "/aag/=K,";
    var v1087 = v1112 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1062 = v1087 + "/a[tu][agr]/=M,";
    var v1035 = v1062 + "/aa[atcuwmhy]/=N,";
    var v1007 = v1035 + "/cc[acgturyswkmbdhvn]/=P,";
    var v971 = v1007 + "/ca[agr]/=Q,";
    var v934 = v971 + "/cg[acgturyswkmbdhvn]/=R,";
    var v893 = v934 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v835 = v893 + "/ac[acgturyswkmbdhvn]/=T,";
    var v750 = v835 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v624 = v750 + "/[tu]g[agr]/=W,";
    var v340 = v624 + "/[tu]a[ctuy]/=Y,";
    return v340 + "/[tu]a[agr]/=*"
  }
  var v625 = type$$26.toLowerCase();
  var v343 = v625 == "transl_table=22";
  if(v343) {
    var v1254 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1236 = v1254 + "/ga[tcuy]/=D,";
    var v1218 = v1236 + "/ga[agr]/=E,";
    var v1199 = v1218 + "/[tu][tu][tcuy]/=F,";
    var v1179 = v1199 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1157 = v1179 + "/ca[tcuy]/=H,";
    var v1135 = v1157 + "/a[tu][atcuwmhy]/=I,";
    var v1113 = v1135 + "/aa[agr]/=K,";
    var v1088 = v1113 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1063 = v1088 + "/a[tu]g/=M,";
    var v1036 = v1063 + "/aa[tucy]/=N,";
    var v1008 = v1036 + "/cc[acgturyswkmbdhvn]/=P,";
    var v972 = v1008 + "/ca[agr]/=Q,";
    var v935 = v972 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v894 = v935 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v836 = v894 + "/ac[acgturyswkmbdhvn]/=T,";
    var v751 = v836 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v626 = v751 + "/[tu]gg/=W,";
    var v342 = v626 + "/[tu]a[ctuy]/=Y,";
    return v342 + "/[tu][agcrsmv]a/=*"
  }
  var v627 = type$$26.toLowerCase();
  var v345 = v627 == "transl_table=23";
  if(v345) {
    var v1255 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1237 = v1255 + "/ga[tcuy]/=D,";
    var v1219 = v1237 + "/ga[agr]/=E,";
    var v1200 = v1219 + "/[tu][tu][tcuy]/=F,";
    var v1180 = v1200 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1158 = v1180 + "/ca[tcuy]/=H,";
    var v1136 = v1158 + "/a[tu][atcuwmhy]/=I,";
    var v1114 = v1136 + "/aa[agr]/=K,";
    var v1089 = v1114 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1064 = v1089 + "/a[tu]g/=M,";
    var v1037 = v1064 + "/aa[tucy]/=N,";
    var v1009 = v1037 + "/cc[acgturyswkmbdhvn]/=P,";
    var v973 = v1009 + "/ca[agr]/=Q,";
    var v936 = v973 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v895 = v936 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v837 = v895 + "/ac[acgturyswkmbdhvn]/=T,";
    var v752 = v837 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v628 = v752 + "/[tu]gg/=W,";
    var v344 = v628 + "/[tu]a[ctuy]/=Y,";
    return v344 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function transMap(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v629 = testScript();
  var v346 = v629 == false;
  if(v346) {
    return false
  }
  var v974 = theDocument.forms;
  var v937 = v974[0];
  var v896 = v937.elements;
  var v838 = v896[6];
  var v753 = v838.options;
  var v975 = theDocument.forms;
  var v938 = v975[0];
  var v897 = v938.elements;
  var v839 = v897[6];
  var v754 = v839.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v630 = v753[v754]
  }
  var v347 = v630.value;
  var geneticCode = getGeneticCodeString(v347);
  var v976 = theDocument.forms;
  var v939 = v976[0];
  var v898 = v939.elements;
  var v840 = v898[0];
  var v755 = checkFormElement(v840);
  var v631 = v755 == false;
  var v757 = !v631;
  if(v757) {
    var v1010 = theDocument.forms;
    var v977 = v1010[0];
    var v940 = v977.elements;
    var v899 = v940[0];
    var v841 = v899.value;
    var v756 = checkSequenceLength(v841, maxInput$$3);
    v631 = v756 == false
  }
  var v348 = v631;
  if(v348) {
    return false
  }
  geneticCode = geneticCode.split(/,/);
  var v632 = checkGeneticCode(geneticCode);
  var v349 = v632 == false;
  if(v349) {
    return false
  }
  openWindow("Translation Map");
  openPre();
  var v900 = theDocument.forms;
  var v842 = v900[0];
  var v758 = v842.elements;
  var v633 = v758[0];
  var v350 = v633.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v350);
  var i$$11 = 0;
  var v634 = arrayOfFasta$$1.length;
  var v358 = i$$11 < v634;
  for(;v358;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v351 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v351);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v352 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v352);
    newDna = removeNonDna(newDna);
    var v353 = outputWindow.document;
    var v354 = getInfoFromTitleAndSequence(title$$9, newDna);
    JAMScript.call(v353.write, v353, [v354]);
    var v978 = theDocument.forms;
    var v941 = v978[0];
    var v901 = v941.elements;
    var v843 = v901[4];
    var v759 = v843.options;
    var v979 = theDocument.forms;
    var v942 = v979[0];
    var v902 = v942.elements;
    var v844 = v902[4];
    var v760 = v844.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v635 = v759[v760]
    }
    var v355 = v635.value;
    var v980 = theDocument.forms;
    var v943 = v980[0];
    var v903 = v943.elements;
    var v845 = v903[5];
    var v761 = v845.options;
    var v981 = theDocument.forms;
    var v944 = v981[0];
    var v904 = v944.elements;
    var v846 = v904[5];
    var v762 = v846.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v636 = v761[v762]
    }
    var v356 = v636.value;
    layoutTranslation(newDna, geneticCode, v355, v356);
    var v357 = outputWindow.document;
    JAMScript.call(v357.write, v357, ["\n\n"]);
    i$$11 = i$$11 + 1;
    var v637 = arrayOfFasta$$1.length;
    v358 = i$$11 < v637
  }
  closePre();
  closeWindow();
  return true
}
function layoutTranslation(dnaSequence$$3, geneticCode$$1, basesPerLine, readingFrame) {
  basesPerLine = parseInt(basesPerLine);
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var textLayout = new TextLayout;
  var v638 = readingFrame == "3";
  var v763 = !v638;
  if(v763) {
    v638 = readingFrame == "all_three"
  }
  var v360 = v638;
  if(v360) {
    var translation = new TranslationComponent;
    var v847 = dnaSequence$$3.length;
    var v764 = dnaSequence$$3.substring(2, v847);
    var v639 = translate(v764, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v359 = "  " + v639;
    JAMScript.call(translation.setCharacters, translation, [v359]);
    JAMScript.call(textLayout.addComponent, textLayout, [translation])
  }
  var v640 = readingFrame == "2";
  var v765 = !v640;
  if(v765) {
    v640 = readingFrame == "all_three"
  }
  var v362 = v640;
  if(v362) {
    translation = new TranslationComponent;
    var v848 = dnaSequence$$3.length;
    var v766 = dnaSequence$$3.substring(1, v848);
    var v641 = translate(v766, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    var v361 = " " + v641;
    JAMScript.call(translation.setCharacters, translation, [v361]);
    JAMScript.call(textLayout.addComponent, textLayout, [translation])
  }
  var v642 = readingFrame == "1";
  var v767 = !v642;
  if(v767) {
    v642 = readingFrame == "all_three"
  }
  var v364 = v642;
  if(v364) {
    translation = new TranslationComponent;
    var v363 = translate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAMScript.call(translation.setCharacters, translation, [v363]);
    JAMScript.call(textLayout.addComponent, textLayout, [translation])
  }
  var v366 = readingFrame == "uppercase";
  if(v366) {
    translation = new UppercaseTranslationComponent;
    var v365 = uppercaseTranslate(dnaSequence$$3, geneticCodeMatchExp$$2, geneticCodeMatchResult$$2);
    JAMScript.call(translation.setCharacters, translation, [v365]);
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
  var v367 = complement(dnaSequence$$3);
  JAMScript.call(dna.setCharacters, dna, [v367]);
  JAMScript.call(textLayout.addComponent, textLayout, [dna]);
  var i$$12 = 0;
  var v643 = dnaSequence$$3.length;
  var v369 = i$$12 < v643;
  for(;v369;) {
    var v368 = i$$12 + basesPerLine;
    JAMScript.call(textLayout.writeLayout, textLayout, [i$$12, v368]);
    i$$12 = i$$12 + basesPerLine;
    var v644 = dnaSequence$$3.length;
    v369 = i$$12 < v644
  }
  return true
}
function translate(dnaSequence$$4, geneticCodeMatchExp$$3, geneticCodeMatchResult$$3) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    var v370 = " " + p1$$2;
    return v370 + " "
  }
  var v768 = dnaSequence$$4.replace(/[^A-Za-z]/g, "");
  var v645 = v768.length;
  var v371 = v645 < 3;
  if(v371) {
    return""
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/(...)/g, v2);
  var i$$13 = 0;
  var v646 = geneticCodeMatchExp$$3.length;
  var v374 = i$$13 < v646;
  for(;v374;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v372 = geneticCodeMatchExp$$3[i$$13]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v373 = geneticCodeMatchResult$$3[i$$13]
    }
    dnaSequence$$4 = dnaSequence$$4.replace(v372, v373);
    i$$13 = i$$13 + 1;
    var v647 = geneticCodeMatchExp$$3.length;
    v374 = i$$13 < v647
  }
  dnaSequence$$4 = dnaSequence$$4.replace(/\S{3}/g, "X");
  dnaSequence$$4 = dnaSequence$$4.replace(/\s\S{1,2}$/, "");
  dnaSequence$$4 = dnaSequence$$4.replace(/^\s/, "");
  return dnaSequence$$4
}
function uppercaseTranslate(dnaSequence$$5, geneticCodeMatchExp$$4, geneticCodeMatchResult$$4) {
  function v3(str$$9, p1$$3, p2, p3, p4, p5, p6, offset$$15, s$$5) {
    var v945 = " " + p1$$3;
    var v905 = v945 + p3;
    var v849 = v905 + p5;
    var v769 = v849 + " ";
    var v648 = v769 + p2;
    var v375 = v648 + p4;
    return v375 + p6
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/[a-z]/g, " ");
  var v770 = dnaSequence$$5.replace(/[^A-Za-z]/g, "");
  var v649 = v770.length;
  var v376 = v649 < 3;
  if(v376) {
    return""
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/([A-Z])(\s*)([A-Z])(\s*)([A-Z])(\s*)/g, v3);
  dnaSequence$$5 = dnaSequence$$5.replace(/\s\S{1,2}\s/g, "");
  var i$$14 = 0;
  var v650 = geneticCodeMatchExp$$4.length;
  var v379 = i$$14 < v650;
  for(;v379;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v377 = geneticCodeMatchExp$$4[i$$14]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v378 = geneticCodeMatchResult$$4[i$$14]
    }
    dnaSequence$$5 = dnaSequence$$5.replace(v377, v378);
    i$$14 = i$$14 + 1;
    var v651 = geneticCodeMatchExp$$4.length;
    v379 = i$$14 < v651
  }
  dnaSequence$$5 = dnaSequence$$5.replace(/\S{3}/g, "X");
  dnaSequence$$5 = dnaSequence$$5.replace(/^\s/, "");
  return dnaSequence$$5
}
function writeLayout(start$$4, stop) {
  var i$$15 = 0;
  var v771 = this.components;
  var v652 = v771.length;
  var v381 = i$$15 < v652;
  for(;v381;) {
    var v653 = this.components;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v380 = v653[i$$15]
    }
    JAMScript.call(v380.writeLayoutComponent, v380, [start$$4, stop]);
    i$$15 = i$$15 + 1;
    var v772 = this.components;
    var v654 = v772.length;
    v381 = i$$15 < v654
  }
  return
}
function addComponent(component) {
  var v382 = this.components;
  v382.push(component);
  return
}
function TextLayout() {
  var v1354 = new Array;
  this.components = v1354;
  return
}
function writeLayoutComponent(start$$5, stop$$1) {
  return
}
function setCharacters(text$$14) {
  var v655 = text$$14.search(/./);
  var v383 = v655 != -1;
  if(v383) {
    var v1355 = text$$14.match(/./g);
    this.characters = v1355
  }
  return
}
function isRoom(start$$6, stop$$2) {
  var v384 = this.characters;
  var rangeToCheck = v384.slice(start$$6, stop$$2);
  rangeToCheck = rangeToCheck.join("");
  var v656 = rangeToCheck.search(/\w/);
  var v385 = v656 == -1;
  if(v385) {
    return true
  }else {
    return false
  }
  return
}
function LayoutComponent() {
  var v1356 = new Array;
  this.characters = v1356;
  this.positionLabel = 1;
  return
}
function TranslationComponent() {
  var v1357 = new Array;
  this.characters = v1357;
  this.positionLabel = 1;
  return
}
function UppercaseTranslationComponent() {
  var v1358 = new Array;
  this.characters = v1358;
  this.positionLabel = 1;
  return
}
function DnaComponent() {
  var v1359 = new Array;
  this.characters = v1359;
  this.positionLabel = 1;
  return
}
function RulerComponent() {
  var v1360 = new Array;
  this.characters = v1360;
  this.positionLabel = 1;
  return
}
function buildRuler() {
  function v4(str$$12, p1$$6, offset$$18, s$$8) {
    var ruler$$1 = count$$6 + spacing;
    var v386 = count$$6 == 0;
    if(v386) {
      ruler$$1 = spacing
    }
    count$$6 = count$$6 + 10;
    return ruler$$1.substring(0, 10)
  }
  var v387 = this.characters;
  var sequence$$18 = v387.join("");
  var count$$6 = 0;
  var spacing = "         ";
  sequence$$18 = sequence$$18.replace(/(.{1,10})/g, v4);
  var v1361 = sequence$$18.match(/./g);
  this.characters = v1361;
  return
}
new TextLayout;
var v388 = TextLayout.prototype;
v388.writeLayout = writeLayout;
var v389 = TextLayout.prototype;
v389.addComponent = addComponent;
new LayoutComponent;
var v390 = LayoutComponent.prototype;
v390.writeLayoutComponent = writeLayoutComponent;
var v391 = LayoutComponent.prototype;
v391.setCharacters = setCharacters;
var v392 = LayoutComponent.prototype;
v392.isRoom = isRoom;
var v393 = TranslationComponent;
var v1362 = new LayoutComponent;
v393.prototype = v1362;
var v394 = TranslationComponent.prototype;
v394.writeLayoutComponent = v5;
var v395 = UppercaseTranslationComponent;
var v1363 = new LayoutComponent;
v395.prototype = v1363;
var v396 = UppercaseTranslationComponent.prototype;
v396.writeLayoutComponent = v6;
var v397 = DnaComponent;
var v1364 = new LayoutComponent;
v397.prototype = v1364;
var v398 = DnaComponent.prototype;
v398.writeLayoutComponent = v7;
var v399 = RulerComponent;
var v1365 = new LayoutComponent;
v399.prototype = v1365;
var v400 = RulerComponent.prototype;
v400.writeLayoutComponent = v10;
new RulerComponent;
var v401 = RulerComponent.prototype;
v401.buildRuler = buildRuler;
JAMScript.set(document, "onload", v11);
var v402 = document.getElementById("submitbtn");
JAMScript.set(v402, "onclick", v12);
var v403 = document.getElementById("clearbtn");
JAMScript.set(v403, "onclick", v13);

