function v4() {
  var v953 = document.forms;
  var v744 = v953[0];
  var v420 = v744.elements;
  var v5 = v420[0];
  v5.value = " ";
  var v954 = document.forms;
  var v745 = v954[0];
  var v421 = v745.elements;
  var v6 = v421[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    fuzzySearchProtein(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v2() {
  var v422 = document.main_form;
  var v8 = v422.main_submit;
  v8.focus();
  return
}
function addReturns(sequence) {
  function v0(str$$7, p1, offset$$12, s$$2) {
    return p1 + "\n"
  }
  sequence = sequence.replace(/(.{60})/g, v0);
  return sequence
}
function checkAlign(arrayOfTitles, arrayOfSequences) {
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v423 = arrayOfSequences.length;
  var v10 = v423 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v424 = arrayOfTitles.length;
  var v12 = i$$1 < v424;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v955 = arrayOfTitles[i$$1]
    }
    var v746 = JAMScript.call(v955.search, v955, [/\S/]);
    var v425 = v746 == -1;
    var v748 = !v425;
    if(v748) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1060 = arrayOfSequences[i$$1]
      }
      var v956 = JAMScript.call(v1060.search, v1060, [/\S/]);
      var v747 = v956 == -1;
      var v958 = !v747;
      if(v958) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1061 = arrayOfSequences[i$$1]
        }
        var v957 = v1061.length;
        v747 = v957 != lengthOfAlign
      }
      v425 = v747
    }
    var v11 = v425;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v426 = arrayOfTitles.length;
    v12 = i$$1 < v426
  }
  return true
}
function checkCodonTable(codonTable) {
  var v749 = JAMScript.call(codonTable.search, codonTable, [/AmAcid/]);
  var v427 = v749 == -1;
  var v751 = !v427;
  if(v751) {
    var v959 = JAMScript.call(codonTable.search, codonTable, [/Codon/]);
    var v750 = v959 == -1;
    var v961 = !v750;
    if(v961) {
      var v1062 = JAMScript.call(codonTable.search, codonTable, [/Number/]);
      var v960 = v1062 == -1;
      var v1064 = !v960;
      if(v1064) {
        var v1115 = JAMScript.call(codonTable.search, codonTable, [/\/1000/]);
        var v1063 = v1115 == -1;
        var v1117 = !v1063;
        if(v1117) {
          var v1116 = JAMScript.call(codonTable.search, codonTable, [/Fraction\s*\.\./]);
          v1063 = v1116 == -1
        }
        v960 = v1063
      }
      v750 = v960
    }
    v427 = v750
  }
  var v13 = v427;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v752 = formElement.value;
  var v428 = JAMScript.call(v752.search, v752, [/\S/]);
  var v14 = v428 == -1;
  if(v14) {
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
  var v429 = arrayOfPatterns.length;
  var v17 = z$$2 < v429;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v753 = arrayOfPatterns[z$$2]
    }
    var v430 = JAMScript.call(v753.search, v753, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/]);
    var v15 = v430 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v754 = arrayOfPatterns[z$$2]
    }
    var v431 = moreExpressionCheck(v754);
    var v16 = v431 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v432 = arrayOfPatterns.length;
    v17 = z$$2 < v432
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v433 = arrayOfPatterns.length;
  var v26 = j < v433;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v962 = arrayOfPatterns[j]
    }
    var v755 = v962.match(/\/.+\//);
    var v434 = v755 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1228 = eval("introspect(JAMScript.introspectors.processAll) { " + v434 + " }")
    }else {
      var v1228 = JAMScript.call(eval, null, [v434])
    }
    v20[v21] = v1228;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v756 = arrayOfPatterns[j]
    }
    var v435 = v756.match(/=[a-zA-Z\*]/);
    var v1229 = v435.toString();
    v22[v23] = v1229;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v436 = geneticCodeMatchResult[j]
    }
    var v1230 = v436.replace(/=/g, "");
    v24[v25] = v1230;
    j = j + 1;
    var v437 = arrayOfPatterns.length;
    v26 = j < v437
  }
  var i$$2 = 0;
  var v757 = testSequence.length;
  var v438 = v757 - 3;
  var v33 = i$$2 <= v438;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v439 = geneticCodeMatchExp.length;
    var v31 = j < v439;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v758 = geneticCodeMatchExp[j]
      }
      var v440 = JAMScript.call(codon.search, codon, [v758]);
      var v30 = v440 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v441 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v441 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v442 = geneticCodeMatchExp.length;
      v31 = j < v442
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v759 = testSequence.length;
    var v443 = v759 - 3;
    v33 = i$$2 <= v443
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v444 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v444;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v760 = arrayOfPatterns$$1[z$$3]
    }
    var v445 = JAMScript.call(v760.search, v760, [/[^acdefghiklmnpqrstvwyz]/i]);
    var v34 = v445 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v446 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v446
  }
  var i$$3 = 0;
  var v447 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v447;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v761 = arrayOfPatterns$$1[i$$3]
    }
    var v448 = "[" + v761;
    var v36 = v448 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v449 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v449;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v762 = arrayOfPatterns$$1[j$$1]
      }
      var v450 = JAMScript.call(v762.search, v762, [re]);
      var v37 = v450 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v451 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v451
    }
    i$$3 = i$$3 + 1;
    var v452 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v452
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v453 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v453;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v763 = arrayOfPatterns$$2[z$$4]
    }
    var v454 = JAMScript.call(v763.search, v763, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i]);
    var v40 = v454 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v764 = arrayOfPatterns$$2[z$$4]
    }
    var v455 = moreExpressionCheck(v764);
    var v41 = v455 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v456 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v456
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v963 = getSequenceFromFasta(text$$7);
  var v765 = v963.replace(/[^A-Za-z]/g, "");
  var v457 = v765.length;
  var v44 = v457 > maxInput;
  if(v44) {
    var v458 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v458 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v459 = text$$8.length;
  var v46 = v459 > maxInput$$1;
  if(v46) {
    var v460 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v460 + " characters.";
    alert(v45);
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
  var v47 = outputWindow.document;
  JAMScript.call(v47.write, v47, ["</form>"]);
  return true
}
function closePre() {
  var v48 = outputWindow.document;
  JAMScript.call(v48.write, v48, ["</div>"]);
  var v49 = outputWindow.document;
  JAMScript.call(v49.write, v49, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v50 = outputWindow.document;
  JAMScript.call(v50.write, v50, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v51 = outputWindow.document;
  JAMScript.call(v51.write, v51, ["</body>\n</html>\n"]);
  outputWindow.status = "Done.";
  var v52 = outputWindow.document;
  v52.close();
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
  var v461 = alignArray.length;
  var v53 = v461 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v462 = alignArray.length;
  var v55 = i$$4 < v462;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v766 = alignArray[i$$4]
    }
    var v463 = JAMScript.call(v766.search, v766, [/[^\s]+\s/]);
    var v54 = v463 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v464 = alignArray.length;
    v55 = i$$4 < v464
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
  var v465 = JAMScript.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/]);
  var v58 = v465 != -1;
  if(v58) {
    var v57 = matchArray = re$$1.exec(sequenceData);
    for(;v57;) {
      var v56 = matchArray[0];
      arrayOfFasta.push(v56);
      v57 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v466 = sequence$$2.length;
  var v59 = "&gt;results for " + v466;
  var stringToReturn = v59 + " residue sequence ";
  var v467 = JAMScript.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/]);
  var v61 = v467 != -1;
  if(v61) {
    var v468 = stringToReturn + '"';
    var v60 = v468 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v469 = stringToReturn + ' starting "';
  var v470 = sequence$$2.substring(0, 10);
  var v62 = v469 + v470;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v471 = sequenceOne.length;
  var v63 = "Search results for " + v471;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v472 = JAMScript.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/]);
  var v65 = v472 != -1;
  if(v65) {
    var v473 = stringToReturn$$1 + '"';
    var v64 = v473 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v474 = stringToReturn$$1 + ' starting "';
  var v475 = sequenceOne.substring(0, 10);
  var v66 = v474 + v475;
  stringToReturn$$1 = v66 + '"\n';
  var v476 = stringToReturn$$1 + "and ";
  var v477 = sequenceTwo.length;
  var v67 = v476 + v477;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v478 = JAMScript.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/]);
  var v69 = v478 != -1;
  if(v69) {
    var v479 = stringToReturn$$1 + '"';
    var v68 = v479 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v480 = stringToReturn$$1 + ' starting "';
  var v481 = sequenceTwo.substring(0, 10);
  var v70 = v480 + v481;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v482 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v482;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v964 = arrayOfPatterns$$3[j$$2]
    }
    var v767 = v964.match(/\/.+\//);
    var v483 = v767 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1231 = eval("introspect(JAMScript.introspectors.processAll) { " + v483 + " }")
    }else {
      var v1231 = JAMScript.call(eval, null, [v483])
    }
    v73[v74] = v1231;
    j$$2 = j$$2 + 1;
    var v484 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v484
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v485 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v485;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v768 = arrayOfPatterns$$4[j$$3]
    }
    var v486 = v768.match(/=[a-zA-Z\*]/);
    var v1232 = v486.toString();
    v77[v78] = v1232;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v487 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1233 = v487.replace(/=/g, "");
    v79[v80] = v1233;
    j$$3 = j$$3 + 1;
    var v488 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v488
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v489 = sequence$$3.length;
  var v82 = "Results for " + v489;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v490 = JAMScript.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/]);
  var v84 = v490 != -1;
  if(v84) {
    var v491 = stringToReturn$$2 + '"';
    var v83 = v491 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v492 = stringToReturn$$2 + ' starting "';
  var v493 = sequence$$3.substring(0, 10);
  var v85 = v492 + v493;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v769 = "Results for " + topology;
  var v494 = v769 + " ";
  var v495 = sequence$$4.length;
  var v87 = v494 + v495;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v496 = JAMScript.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/]);
  var v89 = v496 != -1;
  if(v89) {
    var v497 = stringToReturn$$3 + '"';
    var v88 = v497 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v498 = stringToReturn$$3 + ' starting "';
  var v499 = sequence$$4.substring(0, 10);
  var v90 = v498 + v499;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v500 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v500;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v501 = JAMScript.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/]);
  var v94 = v501 != -1;
  if(v94) {
    var v502 = stringToReturn$$4 + '"';
    var v93 = v502 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v503 = stringToReturn$$4 + ' starting "';
  var v504 = sequenceOne$$1.substring(0, 10);
  var v95 = v503 + v504;
  stringToReturn$$4 = v95 + '"\n';
  var v505 = stringToReturn$$4 + "and ";
  var v506 = sequenceTwo$$1.length;
  var v96 = v505 + v506;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v507 = JAMScript.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/]);
  var v98 = v507 != -1;
  if(v98) {
    var v508 = stringToReturn$$4 + '"';
    var v97 = v508 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v509 = stringToReturn$$4 + ' starting "';
  var v510 = sequenceTwo$$1.substring(0, 10);
  var v99 = v509 + v510;
  stringToReturn$$4 = v99 + '"';
  var v100 = '<div class="info">' + stringToReturn$$4;
  return v100 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v102 = j$$4 < lengthOut;
  for(;v102;) {
    var v511 = Math.random();
    var v512 = components.length;
    var v101 = v511 * v512;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v513 = JAMScript.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/]);
  var v103 = v513 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v514 = JAMScript.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/]);
  var v105 = v514 != -1;
  if(v105) {
    var v104 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v104.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v770 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/]);
  var v515 = v770 != -1;
  var v772 = !v515;
  if(v772) {
    var v965 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/]);
    var v771 = v965 != -1;
    var v967 = !v771;
    if(v967) {
      var v1065 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[\]/]);
      var v966 = v1065 != -1;
      var v1067 = !v966;
      if(v1067) {
        var v1118 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/]);
        var v1066 = v1118 != -1;
        var v1120 = !v1066;
        if(v1120) {
          var v1144 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//]);
          var v1119 = v1144 != -1;
          var v1146 = !v1119;
          if(v1146) {
            var v1163 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\|\|/]);
            var v1145 = v1163 != -1;
            var v1165 = !v1145;
            if(v1165) {
              var v1177 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\/\|/]);
              var v1164 = v1177 != -1;
              var v1179 = !v1164;
              if(v1179) {
                var v1189 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\|\//]);
                var v1178 = v1189 != -1;
                var v1191 = !v1178;
                if(v1191) {
                  var v1199 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[.\]/]);
                  var v1190 = v1199 != -1;
                  var v1201 = !v1190;
                  if(v1201) {
                    var v1206 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\</]);
                    var v1200 = v1206 != -1;
                    var v1208 = !v1200;
                    if(v1208) {
                      var v1207 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\>/]);
                      v1200 = v1207 != -1
                    }
                    v1190 = v1200
                  }
                  v1178 = v1190
                }
                v1164 = v1178
              }
              v1145 = v1164
            }
            v1119 = v1145
          }
          v1066 = v1119
        }
        v966 = v1066
      }
      v771 = v966
    }
    v515 = v771
  }
  var v106 = v515;
  if(v106) {
    return false
  }
  return true
}
function openForm() {
  var v107 = outputWindow.document;
  JAMScript.call(v107.write, v107, ['<form action="">\n']);
  return true
}
function openPre() {
  var v108 = outputWindow.document;
  JAMScript.call(v108.write, v108, ["<pre>"]);
  var v109 = outputWindow.document;
  JAMScript.call(v109.write, v109, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v110 = outputWindow.document;
  JAMScript.call(v110.write, v110, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1243 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1243[2], v1243[1], v1243[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v968 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v773 = v968 + "<head>\n";
  var v516 = v773 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v516 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v1221 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1217 = v1221 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1213 = v1217 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1209 = v1213 + "div.info {font-weight: bold}\n";
    var v1202 = v1209 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1192 = v1202 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1180 = v1192 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1166 = v1180 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1147 = v1166 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1121 = v1147 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1068 = v1121 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v969 = v1068 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v774 = v969 + "td.many {color: #000000}\n";
    var v517 = v774 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v517 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v1225 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1222 = v1225 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1218 = v1222 + "div.title {display: none}\n";
    var v1214 = v1218 + "div.info {font-weight: bold}\n";
    var v1210 = v1214 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1203 = v1210 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1193 = v1203 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1181 = v1193 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1167 = v1181 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1148 = v1167 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1122 = v1148 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1069 = v1122 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v970 = v1069 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v775 = v970 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v518 = v775 + "img {display: none}\n";
    var v116 = v518 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v971 = "</head>\n" + '<body class="main">\n';
  var v776 = v971 + '<div class="title">';
  var v519 = v776 + title$$6;
  var v118 = v519 + " results</div>\n";
  JAMScript.call(v117.write, v117, [v118]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1244 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1244[2], v1244[1], v1244[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v972 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v777 = v972 + "<head>\n";
  var v520 = v777 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v520 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v1223 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1219 = v1223 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1215 = v1219 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1211 = v1215 + "div.info {font-weight: bold}\n";
    var v1204 = v1211 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1194 = v1204 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1182 = v1194 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1168 = v1182 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1149 = v1168 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1123 = v1149 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1070 = v1123 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v973 = v1070 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v778 = v973 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v521 = v778 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v521 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v1227 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1226 = v1227 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1224 = v1226 + "div.title {display: none}\n";
    var v1220 = v1224 + "div.info {font-weight: bold}\n";
    var v1216 = v1220 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1212 = v1216 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1205 = v1212 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1195 = v1205 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1183 = v1195 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1169 = v1183 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1150 = v1169 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1124 = v1150 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1071 = v1124 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v974 = v1071 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v779 = v974 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v522 = v779 + "img {display: none}\n";
    var v124 = v522 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v975 = "</head>\n" + '<body class="main">\n';
  var v780 = v975 + '<div class="title">';
  var v523 = v780 + title$$8;
  var v126 = v523 + " results</div>\n";
  JAMScript.call(v125.write, v125, [v126]);
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
  var v524 = JAMScript.call(dnaSequence$$1.search, dnaSequence$$1, [/./]);
  var v127 = v524 != -1;
  if(v127) {
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
  var v128 = j$$5 < lengthOfColumn;
  for(;v128;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v128 = j$$5 < lengthOfColumn
  }
  var v129 = tempString + theNumber;
  theNumber = v129 + " ";
  var v130 = sequenceToAppend + theNumber;
  sequenceToAppend = v130 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v525 = testArray[0];
  var v131 = v525 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v526 = JAMScript.call(testString.search, testString, [re$$2]);
  var v132 = v526 == -1;
  if(v132) {
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
  var v133 = !caughtException;
  if(v133) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v134 = testString != "1X2X3X";
  if(v134) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v527 = testNum.toFixed(3);
  var v135 = v527 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v528 = testNum.toPrecision(5);
  var v136 = v528 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v529 = JAMScript.call(theNumber$$1.search, theNumber$$1, [/\d/]);
  var v137 = v529 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v781 = JAMScript.call(emblFile.search, emblFile, [/ID/]);
  var v530 = v781 == -1;
  var v783 = !v530;
  if(v783) {
    var v976 = JAMScript.call(emblFile.search, emblFile, [/AC/]);
    var v782 = v976 == -1;
    var v978 = !v782;
    if(v978) {
      var v1072 = JAMScript.call(emblFile.search, emblFile, [/DE/]);
      var v977 = v1072 == -1;
      var v1074 = !v977;
      if(v1074) {
        var v1073 = JAMScript.call(emblFile.search, emblFile, [/SQ/]);
        v977 = v1073 == -1
      }
      v782 = v977
    }
    v530 = v782
  }
  var v138 = v530;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v531 = JAMScript.call(theNumber$$2.search, theNumber$$2, [/\d/]);
  var v139 = v531 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v532 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v532 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v533 = JAMScript.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i]);
  var v142 = v533 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v534 = JAMScript.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i]);
  var v143 = v534 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v784 = JAMScript.call(genBankFile.search, genBankFile, [/LOCUS/]);
  var v535 = v784 == -1;
  var v786 = !v535;
  if(v786) {
    var v979 = JAMScript.call(genBankFile.search, genBankFile, [/DEFINITION/]);
    var v785 = v979 == -1;
    var v981 = !v785;
    if(v981) {
      var v1075 = JAMScript.call(genBankFile.search, genBankFile, [/ACCESSION/]);
      var v980 = v1075 == -1;
      var v1077 = !v980;
      if(v1077) {
        var v1076 = JAMScript.call(genBankFile.search, genBankFile, [/ORIGIN/]);
        v980 = v1076 == -1
      }
      v785 = v980
    }
    v535 = v785
  }
  var v144 = v535;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v787 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/]);
  var v536 = v787 == -1;
  var v789 = !v536;
  if(v789) {
    var v982 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/]);
    var v788 = v982 == -1;
    var v984 = !v788;
    if(v984) {
      var v1078 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/]);
      var v983 = v1078 == -1;
      var v1080 = !v983;
      if(v1080) {
        var v1079 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/]);
        v983 = v1079 == -1
      }
      v788 = v983
    }
    v536 = v788
  }
  var v145 = v536;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v537 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/]);
  var v146 = v537 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v790 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/ID/]);
  var v538 = v790 == -1;
  var v792 = !v538;
  if(v792) {
    var v985 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/AC/]);
    var v791 = v985 == -1;
    var v987 = !v791;
    if(v987) {
      var v1081 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/DE/]);
      var v986 = v1081 == -1;
      var v1083 = !v986;
      if(v1083) {
        var v1082 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/SQ/]);
        v986 = v1082 == -1
      }
      v791 = v986
    }
    v538 = v791
  }
  var v147 = v538;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v539 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/^FT/m]);
  var v148 = v539 == -1;
  if(v148) {
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
  var v155 = i$$5 < stopBase;
  for(;v155;) {
    var v149 = i$$5 + 1;
    lineOfText = rightNum(v149, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v540 = basePerLine / groupSize;
    var v152 = j$$6 <= v540;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v541 = k + i$$5;
        var v150 = text$$10.charAt(v541);
        lineOfText = lineOfText + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v542 = basePerLine / groupSize;
      v152 = j$$6 <= v542
    }
    var v153 = outputWindow.document;
    var v154 = lineOfText + "\n";
    JAMScript.call(v153.write, v153, [v154]);
    lineOfText = "";
    v155 = i$$5 < stopBase
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
    var v543 = adjustment < 0;
    if(v543) {
      v543 = adjusted >= 0
    }
    var v156 = v543;
    if(v156) {
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
  var v187 = i$$6 < stopBase$$2;
  for(;v187;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v544 = basePerLine$$2 / groupSize$$2;
    var v163 = j$$7 <= v544;
    for(;v163;) {
      var v159 = k$$1 < groupSize$$2;
      for(;v159;) {
        var v545 = i$$6 + k$$1;
        var v157 = v545 >= stopBase$$2;
        if(v157) {
          break
        }
        var v546 = k$$1 + i$$6;
        var v158 = text$$12.charAt(v546);
        lineOfText$$1 = lineOfText$$1 + v158;
        k$$1 = k$$1 + 1;
        v159 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v161 = numberPosition$$1 == "above";
      if(v161) {
        var v547 = adjustNumbering(i$$6, numberingAdjustment);
        var v160 = rightNum(v547, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v160
      }
      var v162 = i$$6 >= stopBase$$2;
      if(v162) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v548 = basePerLine$$2 / groupSize$$2;
      v163 = j$$7 <= v548
    }
    var v186 = numberPosition$$1 == "left";
    if(v186) {
      var v164 = outputWindow.document;
      var v988 = adjustNumbering(lineNum, numberingAdjustment);
      var v793 = rightNum(v988, "", 8, tabIn$$3);
      var v549 = v793 + lineOfText$$1;
      var v165 = v549 + "\n";
      JAMScript.call(v164.write, v164, [v165]);
      var v169 = strands$$1 == "two";
      if(v169) {
        var v166 = outputWindow.document;
        var v989 = adjustNumbering(lineNum, numberingAdjustment);
        var v794 = rightNum(v989, "", 8, tabIn$$3);
        var v795 = complement(lineOfText$$1);
        var v550 = v794 + v795;
        var v167 = v550 + "\n";
        JAMScript.call(v166.write, v166, [v167]);
        var v168 = outputWindow.document;
        JAMScript.call(v168.write, v168, ["\n"])
      }
    }else {
      var v185 = numberPosition$$1 == "right";
      if(v185) {
        var v170 = outputWindow.document;
        var v796 = adjustNumbering(i$$6, numberingAdjustment);
        var v551 = lineOfText$$1 + v796;
        var v171 = v551 + "\n";
        JAMScript.call(v170.write, v170, [v171]);
        var v175 = strands$$1 == "two";
        if(v175) {
          var v172 = outputWindow.document;
          var v797 = complement(lineOfText$$1);
          var v798 = adjustNumbering(i$$6, numberingAdjustment);
          var v552 = v797 + v798;
          var v173 = v552 + "\n";
          JAMScript.call(v172.write, v172, [v173]);
          var v174 = outputWindow.document;
          JAMScript.call(v174.write, v174, ["\n"])
        }
      }else {
        var v184 = numberPosition$$1 == "above";
        if(v184) {
          var v176 = outputWindow.document;
          var v177 = aboveNum + "\n";
          JAMScript.call(v176.write, v176, [v177]);
          var v178 = outputWindow.document;
          var v179 = lineOfText$$1 + "\n";
          JAMScript.call(v178.write, v178, [v179]);
          var v183 = strands$$1 == "two";
          if(v183) {
            var v180 = outputWindow.document;
            var v553 = complement(lineOfText$$1);
            var v181 = v553 + "\n";
            JAMScript.call(v180.write, v180, [v181]);
            var v182 = outputWindow.document;
            JAMScript.call(v182.write, v182, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v187 = i$$6 < stopBase$$2
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
  var v206 = i$$7 < stopBase$$3;
  for(;v206;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v554 = basePerLine$$3 / groupSize$$3;
    var v194 = j$$8 <= v554;
    for(;v194;) {
      var v190 = k$$2 < groupSize$$3;
      for(;v190;) {
        var v555 = i$$7 + k$$2;
        var v188 = v555 >= stopBase$$3;
        if(v188) {
          break
        }
        var v556 = k$$2 + i$$7;
        var v189 = text$$13.charAt(v556);
        lineOfText$$2 = lineOfText$$2 + v189;
        k$$2 = k$$2 + 1;
        v190 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v192 = numberPosition$$2 == "above";
      if(v192) {
        var v191 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v191
      }
      var v193 = i$$7 >= stopBase$$3;
      if(v193) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v557 = basePerLine$$3 / groupSize$$3;
      v194 = j$$8 <= v557
    }
    var v205 = numberPosition$$2 == "left";
    if(v205) {
      var v195 = outputWindow.document;
      var v799 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v558 = v799 + lineOfText$$2;
      var v196 = v558 + "\n";
      JAMScript.call(v195.write, v195, [v196])
    }else {
      var v204 = numberPosition$$2 == "right";
      if(v204) {
        var v197 = outputWindow.document;
        var v559 = lineOfText$$2 + i$$7;
        var v198 = v559 + "\n";
        JAMScript.call(v197.write, v197, [v198])
      }else {
        var v203 = numberPosition$$2 == "above";
        if(v203) {
          var v199 = outputWindow.document;
          var v200 = aboveNum$$1 + "\n";
          JAMScript.call(v199.write, v199, [v200]);
          var v201 = outputWindow.document;
          var v202 = lineOfText$$2 + "\n";
          JAMScript.call(v201.write, v201, [v202])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v206 = i$$7 < stopBase$$3
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
  var v800 = sequence$$13.length;
  var v560 = v800 <= firstIndexToMutate;
  var v802 = !v560;
  if(v802) {
    var v801 = lastIndexToMutate < 0;
    var v990 = !v801;
    if(v990) {
      v801 = lastIndexToMutate <= firstIndexToMutate
    }
    v560 = v801
  }
  var v207 = v560;
  if(v207) {
    numMut = 0
  }
  var i$$8 = 0;
  var v215 = i$$8 < numMut;
  for(;v215;) {
    maxNum = sequence$$13.length;
    var v561 = Math.random();
    var v208 = v561 * maxNum;
    randNum = Math.floor(v208);
    var v562 = randNum < firstIndexToMutate;
    var v803 = !v562;
    if(v803) {
      v562 = randNum > lastIndexToMutate
    }
    var v209 = v562;
    if(v209) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v215 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v563 = Math.random();
      var v564 = components$$1.length;
      var v210 = v563 * v564;
      componentsIndex = Math.round(v210);
      var v565 = components$$1.length;
      var v211 = componentsIndex == v565;
      if(v211) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v566 = components$$1[componentsIndex]
      }
      var v212 = v566 != currentChar;
      if(v212) {
        needNewChar = false
      }
    }
    var v567 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v568 = components$$1[componentsIndex]
    }
    var v213 = v567 + v568;
    var v569 = randNum + 1;
    var v570 = sequence$$13.length;
    var v214 = sequence$$13.substring(v569, v570);
    sequence$$13 = v213 + v214;
    i$$8 = i$$8 + 1;
    v215 = i$$8 < numMut
  }
  var v216 = outputWindow.document;
  var v217 = addReturns(sequence$$13);
  JAMScript.call(v216.write, v216, [v217]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v222 = j$$9 < lengthOut$$1;
  for(;v222;) {
    var v571 = Math.random();
    var v572 = components$$2.length;
    var v218 = v571 * v572;
    tempNum$$1 = Math.floor(v218);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v573 = sequence$$14.length;
    var v221 = v573 == 60;
    if(v221) {
      var v219 = outputWindow.document;
      var v220 = sequence$$14 + "\n";
      JAMScript.call(v219.write, v219, [v220]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v222 = j$$9 < lengthOut$$1
  }
  var v223 = outputWindow.document;
  var v224 = sequence$$14 + "\n";
  JAMScript.call(v223.write, v223, [v224]);
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
  var v228 = dnaConformation == "circular";
  if(v228) {
    var v225 = sequence$$15.substring(0, lookAhead);
    shiftValue = v225.length;
    var v991 = sequence$$15.length;
    var v804 = v991 - lookAhead;
    var v805 = sequence$$15.length;
    var v574 = sequence$$15.substring(v804, v805);
    var v226 = v574 + sequence$$15;
    var v227 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v226 + v227;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v229 = outputWindow.document;
  JAMScript.call(v229.write, v229, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v230 = outputWindow.document;
  var v992 = '<tr><td class="title" width="200px">' + "Site:";
  var v806 = v992 + '</td><td class="title">';
  var v575 = v806 + "Positions:";
  var v231 = v575 + "</td></tr>\n";
  JAMScript.call(v230.write, v230, [v231]);
  var i$$9 = 0;
  var v576 = arrayOfItems.length;
  var v247 = i$$9 < v576;
  for(;v247;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v577 = arrayOfItems[i$$9]
    }
    var v232 = v577.match(/\/.+\//);
    matchExp = v232 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v993 = arrayOfItems[i$$9]
    }
    var v807 = v993.match(/\)\D*\d+/);
    var v578 = v807.toString();
    var v233 = v578.replace(/\)\D*/, "");
    cutDistance = parseFloat(v233);
    var v239 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v239;) {
      var v234 = matchExp.lastIndex;
      matchPosition = v234 - cutDistance;
      var v579 = matchPosition >= lowerLimit;
      if(v579) {
        v579 = matchPosition < upperLimit
      }
      var v237 = v579;
      if(v237) {
        timesFound = timesFound + 1;
        var v235 = tempString$$1 + ", ";
        var v580 = matchPosition - shiftValue;
        var v236 = v580 + 1;
        tempString$$1 = v235 + v236
      }
      var v238 = matchExp;
      var v808 = matchExp.lastIndex;
      var v994 = RegExp.lastMatch;
      var v809 = v994.length;
      var v581 = v808 - v809;
      v238.lastIndex = v581 + 1;
      v239 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v582 = JAMScript.call(tempString$$1.search, tempString$$1, [/\d/]);
    var v240 = v582 != -1;
    if(v240) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v244 = timesFound == 0;
    if(v244) {
      backGroundClass = "none"
    }else {
      var v243 = timesFound == 1;
      if(v243) {
        backGroundClass = "one"
      }else {
        var v242 = timesFound == 2;
        if(v242) {
          backGroundClass = "two"
        }else {
          var v241 = timesFound == 3;
          if(v241) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v245 = outputWindow.document;
    var v1170 = '<tr><td class="' + backGroundClass;
    var v1151 = v1170 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1196 = arrayOfItems[i$$9]
    }
    var v1184 = v1196.match(/\([^\(]+\)/);
    var v1171 = v1184.toString();
    var v1152 = v1171.replace(/\(|\)/g, "");
    var v1125 = v1151 + v1152;
    var v1084 = v1125 + '</td><td class="';
    var v995 = v1084 + backGroundClass;
    var v810 = v995 + '">';
    var v583 = v810 + tempString$$1;
    var v246 = v583 + "</td></tr>\n";
    JAMScript.call(v245.write, v245, [v246]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v584 = arrayOfItems.length;
    v247 = i$$9 < v584
  }
  var v248 = outputWindow.document;
  JAMScript.call(v248.write, v248, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v249 = outputWindow.document;
  JAMScript.call(v249.write, v249, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v250 = outputWindow.document;
  var v1126 = '<tr><td class="title">' + "Pattern:";
  var v1085 = v1126 + '</td><td class="title">';
  var v996 = v1085 + "Times found:";
  var v811 = v996 + '</td><td class="title">';
  var v585 = v811 + "Percentage:";
  var v251 = v585 + "</td></tr>\n";
  JAMScript.call(v250.write, v250, [v251]);
  var i$$10 = 0;
  var v586 = arrayOfItems$$1.length;
  var v260 = i$$10 < v586;
  for(;v260;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v587 = arrayOfItems$$1[i$$10]
    }
    var v252 = v587.match(/\/[^\/]+\//);
    var matchExp$$1 = v252 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v588 = JAMScript.call(sequence$$16.search, sequence$$16, [matchExp$$1]);
    var v254 = v588 != -1;
    if(v254) {
      var v253 = sequence$$16.match(matchExp$$1);
      tempNumber = v253.length
    }
    var percentage = 0;
    var v812 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1086 = arrayOfItems$$1[i$$10]
    }
    var v997 = v1086.match(/\d+/);
    var v813 = parseFloat(v997);
    var v589 = v812 - v813;
    var v257 = v589 > 0;
    if(v257) {
      var v255 = 100 * tempNumber;
      var v590 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v998 = arrayOfItems$$1[i$$10]
      }
      var v814 = v998.match(/\d+/);
      var v591 = parseFloat(v814);
      var v256 = v590 - v591;
      percentage = v255 / v256
    }
    var v258 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1197 = arrayOfItems$$1[i$$10]
    }
    var v1185 = v1197.match(/\([^\(]+\)\b/);
    var v1172 = v1185.toString();
    var v1153 = v1172.replace(/\(|\)/g, "");
    var v1127 = "<tr><td>" + v1153;
    var v1087 = v1127 + "</td><td>";
    var v999 = v1087 + tempNumber;
    var v815 = v999 + "</td><td>";
    var v816 = percentage.toFixed(2);
    var v592 = v815 + v816;
    var v259 = v592 + "</td></tr>\n";
    JAMScript.call(v258.write, v258, [v259]);
    i$$10 = i$$10 + 1;
    var v593 = arrayOfItems$$1.length;
    v260 = i$$10 < v593
  }
  var v261 = outputWindow.document;
  JAMScript.call(v261.write, v261, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v594 = sequence$$17.length;
  var v268 = v594 > 0;
  for(;v268;) {
    maxNum$$1 = sequence$$17.length;
    var v595 = Math.random();
    var v262 = v595 * maxNum$$1;
    randNum$$1 = Math.floor(v262);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v263 = randNum$$1 + 1;
    var v264 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v263, v264);
    sequence$$17 = tempString1 + tempString2;
    var v596 = tempSeq.length;
    var v267 = v596 == 60;
    if(v267) {
      var v265 = outputWindow.document;
      var v266 = tempSeq + "\n";
      JAMScript.call(v265.write, v265, [v266]);
      tempSeq = ""
    }
    var v597 = sequence$$17.length;
    v268 = v597 > 0
  }
  var v269 = outputWindow.document;
  var v270 = tempSeq + "\n";
  JAMScript.call(v269.write, v269, [v270]);
  return true
}
function fuzzySearchProtein(theDocument) {
  var targetSequence = "";
  var targetTitle = "";
  var querySequence = "";
  var queryTitle = "";
  var maxTarget = 2E3;
  var maxQuery = 30;
  var v598 = testScript();
  var v271 = v598 == false;
  if(v271) {
    return false
  }
  var v1154 = theDocument.forms;
  var v1128 = v1154[0];
  var v1088 = v1128.elements;
  var v1000 = v1088[0];
  var v817 = checkFormElement(v1000);
  var v599 = v817 == false;
  var v819 = !v599;
  if(v819) {
    var v1186 = theDocument.forms;
    var v1173 = v1186[0];
    var v1155 = v1173.elements;
    var v1129 = v1155[0];
    var v1089 = v1129.value;
    var v1001 = checkSequenceLength(v1089, maxTarget);
    var v818 = v1001 == false;
    var v1003 = !v818;
    if(v1003) {
      var v1187 = theDocument.forms;
      var v1174 = v1187[0];
      var v1156 = v1174.elements;
      var v1130 = v1156[1];
      var v1090 = checkFormElement(v1130);
      var v1002 = v1090 == false;
      var v1092 = !v1002;
      if(v1092) {
        var v1198 = theDocument.forms;
        var v1188 = v1198[0];
        var v1175 = v1188.elements;
        var v1157 = v1175[1];
        var v1131 = v1157.value;
        var v1091 = checkSequenceLength(v1131, maxQuery);
        v1002 = v1091 == false
      }
      v818 = v1002
    }
    v599 = v818
  }
  var v272 = v599;
  if(v272) {
    return false
  }
  var v1132 = theDocument.forms;
  var v1093 = v1132[0];
  var v1004 = v1093.elements;
  var v820 = v1004[5];
  var v600 = v820.options;
  var v1133 = theDocument.forms;
  var v1094 = v1133[0];
  var v1005 = v1094.elements;
  var v821 = v1005[5];
  var v601 = v821.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v273 = v600[v601]
  }
  var MATRIX = v273.value;
  var v1158 = theDocument.forms;
  var v1134 = v1158[0];
  var v1095 = v1134.elements;
  var v1006 = v1095[6];
  var v822 = v1006.options;
  var v1159 = theDocument.forms;
  var v1135 = v1159[0];
  var v1096 = v1135.elements;
  var v1007 = v1096[6];
  var v823 = v1007.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v602 = v822[v823]
  }
  var v274 = v602.value;
  var GAP_PENALTY = parseInt(v274);
  var v1160 = theDocument.forms;
  var v1136 = v1160[0];
  var v1097 = v1136.elements;
  var v1008 = v1097[7];
  var v824 = v1008.options;
  var v1161 = theDocument.forms;
  var v1137 = v1161[0];
  var v1098 = v1137.elements;
  var v1009 = v1098[7];
  var v825 = v1009.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v603 = v824[v825]
  }
  var v275 = v603.value;
  var HITS = parseInt(v275);
  openWindow("Fuzzy Protein DNA");
  openPre();
  var v1099 = theDocument.forms;
  var v1010 = v1099[0];
  var v826 = v1010.elements;
  var v604 = v826[0];
  var v276 = v604.value;
  targetSequence = getSequenceFromFasta(v276);
  targetSequence = removeNonProtein(targetSequence);
  var v1100 = theDocument.forms;
  var v1011 = v1100[0];
  var v827 = v1011.elements;
  var v605 = v827[0];
  var v277 = v605.value;
  targetTitle = getTitleFromFasta(v277);
  var v1101 = theDocument.forms;
  var v1012 = v1101[0];
  var v828 = v1012.elements;
  var v606 = v828[1];
  var v278 = v606.value;
  querySequence = getSequenceFromFasta(v278);
  querySequence = removeNonProtein(querySequence);
  queryTitle = "query";
  var v279 = outputWindow.document;
  var v280 = getFuzzySearchTitle(targetTitle, targetSequence, queryTitle, querySequence);
  JAMScript.call(v279.write, v279, [v280]);
  var v607 = JAMScript.call(targetSequence.search, targetSequence, [/./]);
  var v281 = v607 != -1;
  if(v281) {
    targetSequence = targetSequence.match(/./g)
  }
  var v608 = JAMScript.call(querySequence.search, querySequence, [/./]);
  var v282 = v608 != -1;
  if(v282) {
    querySequence = querySequence.match(/./g)
  }
  var v609 = targetSequence.length;
  var v283 = v609 == 0;
  if(v283) {
    alert("The sequence contains no protein residues.");
    return false
  }
  var v610 = querySequence.length;
  var v284 = v610 == 0;
  if(v284) {
    alert("The query sequence contains no protein residues.");
    return false
  }
  _fuzzySearchProtein(queryTitle, querySequence, targetTitle, targetSequence, MATRIX, GAP_PENALTY, HITS);
  closePre();
  closeWindow();
  return true
}
function _fuzzySearchProtein(queryTitle$$1, querySequence$$1, targetTitle$$1, targetSequence$$1, matrix, gapPenalty, hits) {
  var scoringMatrix;
  var v289 = matrix == "pam30";
  if(v289) {
    scoringMatrix = new Pam30
  }else {
    var v288 = matrix == "pam70";
    if(v288) {
      scoringMatrix = new Pam70
    }else {
      var v287 = matrix == "blosum80";
      if(v287) {
        scoringMatrix = new Blosum80
      }else {
        var v286 = matrix == "blosum62";
        if(v286) {
          scoringMatrix = new Blosum62
        }else {
          var v285 = matrix == "blosum45";
          if(v285) {
            scoringMatrix = new Blosum45
          }
        }
      }
    }
  }
  var scoreSet = new ScoreSet;
  JAMScript.call(scoreSet.setScoreSetParam, scoreSet, [scoringMatrix, gapPenalty, hits]);
  var fuzzySearch = new FuzzySearch;
  JAMScript.call(fuzzySearch.initializeMatrix, fuzzySearch, [querySequence$$1, targetSequence$$1, scoreSet]);
  JAMScript.call(fuzzySearch.search, fuzzySearch, []);
  hits = JAMScript.call(fuzzySearch.getHits, fuzzySearch, []);
  var v611 = hits.length;
  var v302 = v611 > 0;
  if(v302) {
    var i$$11 = 0;
    var v612 = hits.length;
    var v300 = i$$11 < v612;
    for(;v300;) {
      var v290 = outputWindow.document;
      var v1138 = ">" + queryTitle$$1;
      var v1102 = v1138 + " from ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1139 = hits[i$$11]
      }
      var v1103 = v1139.startM;
      var v1013 = v1102 + v1103;
      var v829 = v1013 + " to ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1014 = hits[i$$11]
      }
      var v830 = v1014.endM;
      var v613 = v829 + v830;
      var v291 = v613 + "\n";
      JAMScript.call(v290.write, v290, [v291]);
      var v292 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v831 = hits[i$$11]
      }
      var v614 = v831.sequenceM;
      var v293 = v614 + "\n";
      JAMScript.call(v292.write, v292, [v293]);
      var v294 = outputWindow.document;
      var v1140 = ">" + targetTitle$$1;
      var v1104 = v1140 + " from ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1141 = hits[i$$11]
      }
      var v1105 = v1141.startN;
      var v1015 = v1104 + v1105;
      var v832 = v1015 + " to ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1016 = hits[i$$11]
      }
      var v833 = v1016.endN;
      var v615 = v832 + v833;
      var v295 = v615 + "\n";
      JAMScript.call(v294.write, v294, [v295]);
      var v296 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v834 = hits[i$$11]
      }
      var v616 = v834.sequenceN;
      var v297 = v616 + "\n";
      JAMScript.call(v296.write, v296, [v297]);
      var v298 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1017 = hits[i$$11]
      }
      var v835 = v1017.score;
      var v617 = "Score: " + v835;
      var v299 = v617 + "\n\n";
      JAMScript.call(v298.write, v298, [v299]);
      i$$11 = i$$11 + 1;
      var v618 = hits.length;
      v300 = i$$11 < v618
    }
  }else {
    var v301 = outputWindow.document;
    JAMScript.call(v301.write, v301, ["No hits were obtained.\n\n"])
  }
  return
}
function getScore(r1$$1, r2) {
  var v303 = this.scoringMatrix;
  return JAMScript.call(v303.scoringMatrix_getScore, v303, [r1$$1, r2])
}
function setScoreSetParam(scoringMatrix$$1, gapPenalty$$1, hits$$1) {
  this.scoringMatrix = scoringMatrix$$1;
  this.gap = gapPenalty$$1;
  this.hits = hits$$1;
  return
}
function ScoreSet() {
  return
}
function scoringMatrix_getScore(r1$$2, r2$$1) {
  r1$$2 = r1$$2.toLowerCase();
  r2$$1 = r2$$1.toLowerCase();
  var v836 = this.scoreHash;
  var v837 = r1$$2 + r2$$1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v619 = v836[v837]
  }
  var v307 = v619 == null;
  if(v307) {
    var v838 = "Unrecognized residue pair: " + r1$$2;
    var v620 = v838 + ", ";
    var v304 = v620 + r2$$1;
    throw v304 + ".";
  }else {
    var v305 = this.scoreHash;
    var v306 = r1$$2 + r2$$1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      return v305[v306]
    }
  }
  return
}
function scoringMatrix_fillHash(matrix$$1) {
  var v308 = matrix$$1[0];
  var cols = v308.split(/\s+/);
  var cells;
  var i$$12 = 1;
  var v621 = matrix$$1.length;
  var v313 = i$$12 < v621;
  for(;v313;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v309 = matrix$$1[i$$12]
    }
    cells = v309.split(/\s+/);
    var j$$10 = 1;
    var v839 = cols.length;
    var v622 = v839 + 1;
    var v312 = j$$10 < v622;
    for(;v312;) {
      var v310 = this.scoreHash;
      var v840 = cells[0];
      var v623 = v840.toLowerCase();
      var v1018 = j$$10 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v841 = cols[v1018]
      }
      var v624 = v841.toLowerCase();
      var v311 = v623 + v624;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v625 = cells[j$$10]
      }
      var v1234 = parseInt(v625);
      JAMScript.set(v310, v311, v1234, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
      j$$10 = j$$10 + 1;
      var v842 = cols.length;
      var v626 = v842 + 1;
      v312 = j$$10 < v626
    }
    i$$12 = i$$12 + 1;
    var v627 = matrix$$1.length;
    v313 = i$$12 < v627
  }
  return
}
function ScoringMatrix() {
  this.scoreHash = {};
  return
}
function Blosum62() {
  var matrix$$2 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  4 -1 -2 -2  0 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -3 -2  0", "R -1  5  0 -2 -3  1  0 -2  0 -3 -2  2 -1 -3 -2 -1 -1 -3 -2 -3", "N -2  0  6  1 -3  0  0  0  1 -3 -3  0 -2 -3 -2  1  0 -4 -2 -3", "D -2 -2  1  6 -3  0  2 -1 -1 -3 -4 -1 -3 -3 -1  0 -1 -4 -3 -3", "C  0 -3 -3 -3  9 -3 -4 -3 -3 -1 -1 -3 -1 -2 -3 -1 -1 -2 -2 -1", "Q -1  1  0  0 -3  5  2 -2  0 -3 -2  1  0 -3 -1  0 -1 -2 -1 -2", "E -1  0  0  2 -4  2  5 -2  0 -3 -3  1 -2 -3 -1  0 -1 -3 -2 -2", 
  "G  0 -2  0 -1 -3 -2 -2  6 -2 -4 -4 -2 -3 -3 -2  0 -2 -2 -3 -3", "H -2  0  1 -1 -3  0  0 -2  8 -3 -3 -1 -2 -1 -2 -1 -2 -2  2 -3", "I -1 -3 -3 -3 -1 -3 -3 -4 -3  4  2 -3  1  0 -3 -2 -1 -3 -1  3", "L -1 -2 -3 -4 -1 -2 -3 -4 -3  2  4 -2  2  0 -3 -2 -1 -2 -1  1", "K -1  2  0 -1 -3  1  1 -2 -1 -3 -2  5 -1 -3 -1  0 -1 -3 -2 -2", "M -1 -1 -2 -3 -1  0 -2 -3 -2  1  2 -1  5  0 -2 -1 -1 -1 -1  1", "F -2 -3 -3 -3 -2 -3 -3 -3 -1  0  0 -3  0  6 -4 -2 -2  1  3 -1", "P -1 -2 -2 -1 -3 -1 -1 -2 -2 -3 -3 -1 -2 -4  7 -1 -1 -4 -3 -2", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -2  0 -1 -2 -1  4  1 -3 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -2 -1  1  5 -2 -2  0", "W -3 -3 -4 -4 -2 -2 -3 -2 -2 -3 -2 -3 -1  1 -4 -3 -2 11  2 -3", "Y -2 -2 -2 -3 -2 -1 -2 -3  2 -1 -1 -2 -1  3 -3 -2 -2  2  7 -1", "V  0 -3 -3 -3 -1 -2 -2 -3 -3  3  1 -2  1 -1 -2 -2  0 -3 -1  4");
  JAMScript.call(this.scoringMatrix_fillHash, this, [matrix$$2]);
  return
}
function Blosum45() {
  var matrix$$3 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -1 -2 -1 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -2 -2  0", "R -2  7  0 -1 -3  1  0 -2  0 -3 -2  3 -1 -2 -2 -1 -1 -2 -1 -2", "N -1  0  6  2 -2  0  0  0  1 -2 -3  0 -2 -2 -2  1  0 -4 -2 -3", "D -2 -1  2  7 -3  0  2 -1  0 -4 -3  0 -3 -4 -1  0 -1 -4 -2 -3", "C -1 -3 -2 -3 12 -3 -3 -3 -3 -3 -2 -3 -2 -2 -4 -1 -1 -5 -3 -1", "Q -1  1  0  0 -3  6  2 -2  1 -2 -2  1  0 -4 -1  0 -1 -2 -1 -3", "E -1  0  0  2 -3  2  6 -2  0 -3 -2  1 -2 -3  0  0 -1 -3 -2 -3", 
  "G  0 -2  0 -1 -3 -2 -2  7 -2 -4 -3 -2 -2 -3 -2  0 -2 -2 -3 -3", "H -2  0  1  0 -3  1  0 -2 10 -3 -2 -1  0 -2 -2 -1 -2 -3  2 -3", "I -1 -3 -2 -4 -3 -2 -3 -4 -3  5  2 -3  2  0 -2 -2 -1 -2  0  3", "L -1 -2 -3 -3 -2 -2 -2 -3 -2  2  5 -3  2  1 -3 -3 -1 -2  0  1", "K -1  3  0  0 -3  1  1 -2 -1 -3 -3  5 -1 -3 -1 -1 -1 -2 -1 -2", "M -1 -1 -2 -3 -2  0 -2 -2  0  2  2 -1  6  0 -2 -2 -1 -2  0  1", "F -2 -2 -2 -4 -2 -4 -3 -3 -2  0  1 -3  0  8 -3 -2 -1  1  3  0", "P -1 -2 -2 -1 -4 -1  0 -2 -2 -2 -3 -1 -2 -3  9 -1 -1 -3 -3 -3", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -3 -1 -2 -2 -1  4  2 -4 -2 -1", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1  2  5 -3 -1  0", "W -2 -2 -4 -4 -5 -2 -3 -2 -3 -2 -2 -2 -2  1 -3 -4 -3 15  3 -3", "Y -2 -1 -2 -2 -3 -1 -2 -3  2  0  0 -1  0  3 -3 -2 -1  3  8 -1", "V  0 -2 -3 -3 -1 -3 -3 -3 -3  3  1 -2  1  0 -3 -1  0 -3 -1  5");
  JAMScript.call(this.scoringMatrix_fillHash, this, [matrix$$3]);
  return
}
function Blosum80() {
  var matrix$$4 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -2 -2 -1 -1 -1  0 -2 -2 -2 -1 -1 -3 -1  1  0 -3 -2  0", "R -2  6 -1 -2 -4  1 -1 -3  0 -3 -3  2 -2 -4 -2 -1 -1 -4 -3 -3", "N -2 -1  6  1 -3  0 -1 -1  0 -4 -4  0 -3 -4 -3  0  0 -4 -3 -4", "D -2 -2  1  6 -4 -1  1 -2 -2 -4 -5 -1 -4 -4 -2 -1 -1 -6 -4 -4", "C -1 -4 -3 -4  9 -4 -5 -4 -4 -2 -2 -4 -2 -3 -4 -2 -1 -3 -3 -1", "Q -1  1  0 -1 -4  6  2 -2  1 -3 -3  1  0 -4 -2  0 -1 -3 -2 -3", "E -1 -1 -1  1 -5  2  6 -3  0 -4 -4  1 -2 -4 -2  0 -1 -4 -3 -3", 
  "G  0 -3 -1 -2 -4 -2 -3  6 -3 -5 -4 -2 -4 -4 -3 -1 -2 -4 -4 -4", "H -2  0  0 -2 -4  1  0 -3  8 -4 -3 -1 -2 -2 -3 -1 -2 -3  2 -4", "I -2 -3 -4 -4 -2 -3 -4 -5 -4  5  1 -3  1 -1 -4 -3 -1 -3 -2  3", "L -2 -3 -4 -5 -2 -3 -4 -4 -3  1  4 -3  2  0 -3 -3 -2 -2 -2  1", "K -1  2  0 -1 -4  1  1 -2 -1 -3 -3  5 -2 -4 -1 -1 -1 -4 -3 -3", "M -1 -2 -3 -4 -2  0 -2 -4 -2  1  2 -2  6  0 -3 -2 -1 -2 -2  1", "F -3 -4 -4 -4 -3 -4 -4 -4 -2 -1  0 -4  0  6 -4 -3 -2  0  3 -1", "P -1 -2 -3 -2 -4 -2 -2 -3 -3 -4 -3 -1 -3 -4  8 -1 -2 -5 -4 -3", 
  "S  1 -1  0 -1 -2  0  0 -1 -1 -3 -3 -1 -2 -3 -1  5  1 -4 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -2 -1 -1 -2 -2  1  5 -4 -2  0", "W -3 -4 -4 -6 -3 -3 -4 -4 -3 -3 -2 -4 -2  0 -5 -4 -4 11  2 -3", "Y -2 -3 -3 -4 -3 -2 -3 -4  2 -2 -2 -3 -2  3 -4 -2 -2  2  7 -2", "V  0 -3 -4 -4 -1 -3 -3 -4 -4  3  1 -3  1 -1 -3 -2  0 -3 -2  4");
  JAMScript.call(this.scoringMatrix_fillHash, this, [matrix$$4]);
  return
}
function Pam70() {
  var matrix$$5 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   5  -4  -2  -1  -4  -2  -1   0  -4  -2  -4  -4  -3  -6   0   1   1  -9  -5  -1", "R  -4   8  -3  -6  -5   0  -5  -6   0  -3  -6   2  -2  -7  -2  -1  -4   0  -7  -5", "N  -2  -3   6   3  -7  -1   0  -1   1  -3  -5   0  -5  -6  -3   1   0  -6  -3  -5", "D  -1  -6   3   6  -9   0   3  -1  -1  -5  -8  -2  -7 -10  -4  -1  -2 -10  -7  -5", "C  -4  -5  -7  -9   9  -9  -9  -6  -5  -4 -10  -9  -9  -8  -5  -1  -5 -11  -2  -4", 
  "Q  -2   0  -1   0  -9   7   2  -4   2  -5  -3  -1  -2  -9  -1  -3  -3  -8  -8  -4", "E  -1  -5   0   3  -9   2   6  -2  -2  -4  -6  -2  -4  -9  -3  -2  -3 -11  -6  -4", "G   0  -6  -1  -1  -6  -4  -2   6  -6  -6  -7  -5  -6  -7  -3   0  -3 -10  -9  -3", "H  -4   0   1  -1  -5   2  -2  -6   8  -6  -4  -3  -6  -4  -2  -3  -4  -5  -1  -4", "I  -2  -3  -3  -5  -4  -5  -4  -6  -6   7   1  -4   1   0  -5  -4  -1  -9  -4   3", "L  -4  -6  -5  -8 -10  -3  -6  -7  -4   1   6  -5   2  -1  -5  -6  -4  -4  -4   0", 
  "K  -4   2   0  -2  -9  -1  -2  -5  -3  -4  -5   6   0  -9  -4  -2  -1  -7  -7  -6", "M  -3  -2  -5  -7  -9  -2  -4  -6  -6   1   2   0  10  -2  -5  -3  -2  -8  -7   0", "F  -6  -7  -6 -10  -8  -9  -9  -7  -4   0  -1  -9  -2   8  -7  -4  -6  -2   4  -5", "P   0  -2  -3  -4  -5  -1  -3  -3  -2  -5  -5  -4  -5  -7   7   0  -2  -9  -9  -3", "S   1  -1   1  -1  -1  -3  -2   0  -3  -4  -6  -2  -3  -4   0   5   2  -3  -5  -3", "T   1  -4   0  -2  -5  -3  -3  -3  -4  -1  -4  -1  -2  -6  -2   2   6  -8  -4  -1", 
  "W  -9   0  -6 -10 -11  -8 -11 -10  -5  -9  -4  -7  -8  -2  -9  -3  -8  13  -3 -10", "Y  -5  -7  -3  -7  -2  -8  -6  -9  -1  -4  -4  -7  -7   4  -9  -5  -4  -3   9  -5", "V  -1  -5  -5  -5  -4  -4  -4  -3  -4   3   0  -6   0  -5  -3  -3  -1 -10  -5   6");
  JAMScript.call(this.scoringMatrix_fillHash, this, [matrix$$5]);
  return
}
function Pam30() {
  var matrix$$6 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   6  -7  -4  -3  -6  -4  -2  -2  -7  -5  -6  -7  -5  -8  -2   0  -1 -13  -8  -2", "R  -7   8  -6 -10  -8  -2  -9  -9  -2  -5  -8   0  -4  -9  -4  -3  -6  -2 -10  -8", "N  -4  -6   8   2 -11  -3  -2  -3   0  -5  -7  -1  -9  -9  -6   0  -2  -8  -4  -8", "D  -3 -10   2   8 -14  -2   2  -3  -4  -7 -12  -4 -11 -15  -8  -4  -5 -15 -11  -8", "C  -6  -8 -11 -14  10 -14 -14  -9  -7  -6 -15 -14 -13 -13  -8  -3  -8 -15  -4  -6", 
  "Q  -4  -2  -3  -2 -14   8   1  -7   1  -8  -5  -3  -4 -13  -3  -5  -5 -13 -12  -7", "E  -2  -9  -2   2 -14   1   8  -4  -5  -5  -9  -4  -7 -14  -5  -4  -6 -17  -8  -6", "G  -2  -9  -3  -3  -9  -7  -4   6  -9 -11 -10  -7  -8  -9  -6  -2  -6 -15 -14  -5", "H  -7  -2   0  -4  -7   1  -5  -9   9  -9  -6  -6 -10  -6  -4  -6  -7  -7  -3  -6", "I  -5  -5  -5  -7  -6  -8  -5 -11  -9   8  -1  -6  -1  -2  -8  -7  -2 -14  -6   2", "L  -6  -8  -7 -12 -15  -5  -9 -10  -6  -1   7  -8   1  -3  -7  -8  -7  -6  -7  -2", 
  "K  -7   0  -1  -4 -14  -3  -4  -7  -6  -6  -8   7  -2 -14  -6  -4  -3 -12  -9  -9", "M  -5  -4  -9 -11 -13  -4  -7  -8 -10  -1   1  -2  11  -4  -8  -5  -4 -13 -11  -1", "F  -8  -9  -9 -15 -13 -13 -14  -9  -6  -2  -3 -14  -4   9 -10  -6  -9  -4   2  -8", "P  -2  -4  -6  -8  -8  -3  -5  -6  -4  -8  -7  -6  -8 -10   8  -2  -4 -14 -13  -6", "S   0  -3   0  -4  -3  -5  -4  -2  -6  -7  -8  -4  -5  -6  -2   6   0  -5  -7  -6", "T  -1  -6  -2  -5  -8  -5  -6  -6  -7  -2  -7  -3  -4  -9  -4   0   7 -13  -6  -3", 
  "W -13  -2  -8 -15 -15 -13 -17 -15  -7 -14  -6 -12 -13  -4 -14  -5 -13  13  -5 -15", "Y  -8 -10  -4 -11  -4 -12  -8 -14  -3  -6  -7  -9 -11   2 -13  -7  -6  -5  10  -7", "V  -2  -8  -8  -8  -6  -7  -6  -5  -6   2  -2  -9  -1  -8  -6  -6  -3 -15  -7   7");
  JAMScript.call(this.scoringMatrix_fillHash, this, [matrix$$6]);
  return
}
function Node() {
  this.alreadyMatched = false;
  return
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$1) {
  this.scoreSet = scoreSet$$1;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  var v843 = this.M;
  var v628 = v843.length;
  var v314 = v628 + 1;
  var v1235 = new Array(v314);
  this.nodes = v1235;
  var i$$13 = 0;
  var v844 = this.nodes;
  var v629 = v844.length;
  var v318 = i$$13 < v629;
  for(;v318;) {
    var v315 = this.nodes;
    var v1019 = this.N;
    var v845 = v1019.length;
    var v630 = v845 + 1;
    var v1236 = new Array(v630);
    v315[i$$13] = v1236;
    var j$$11 = 0;
    var v1020 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v846 = v1020[i$$13]
    }
    var v631 = v846.length;
    var v317 = j$$11 < v631;
    for(;v317;) {
      var v632 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v316 = v632[i$$13]
      }
      var v1237 = new Node;
      v316[j$$11] = v1237;
      j$$11 = j$$11 + 1;
      var v1021 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v847 = v1021[i$$13]
      }
      var v633 = v847.length;
      v317 = j$$11 < v633
    }
    i$$13 = i$$13 + 1;
    var v848 = this.nodes;
    var v634 = v848.length;
    v318 = i$$13 < v634
  }
  var v849 = this.nodes;
  var v635 = v849[0];
  var v319 = v635[0];
  v319.value = 0;
  i$$13 = 1;
  var v850 = this.nodes;
  var v636 = v850.length;
  var v323 = i$$13 < v636;
  for(;v323;) {
    var v851 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v637 = v851[i$$13]
    }
    var v320 = v637[0];
    var v1022 = this.nodes;
    var v1023 = i$$13 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v852 = v1022[v1023]
    }
    var v638 = v852[0];
    v320.value = v638.value;
    var v853 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v639 = v853[i$$13]
    }
    var v321 = v639[0];
    v321.tracebackI = i$$13 - 1;
    var v854 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v640 = v854[i$$13]
    }
    var v322 = v640[0];
    v322.tracebackJ = 0;
    i$$13 = i$$13 + 1;
    var v855 = this.nodes;
    var v641 = v855.length;
    v323 = i$$13 < v641
  }
  j$$11 = 1;
  var v1024 = this.nodes;
  var v856 = v1024[0];
  var v642 = v856.length;
  var v327 = j$$11 < v642;
  for(;v327;) {
    var v857 = this.nodes;
    var v643 = v857[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v324 = v643[j$$11]
    }
    var v1025 = this.nodes;
    var v858 = v1025[0];
    var v859 = j$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v644 = v858[v859]
    }
    v324.value = v644.value;
    var v860 = this.nodes;
    var v645 = v860[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v325 = v645[j$$11]
    }
    v325.tracebackI = 0;
    var v861 = this.nodes;
    var v646 = v861[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v326 = v646[j$$11]
    }
    v326.tracebackJ = j$$11 - 1;
    j$$11 = j$$11 + 1;
    var v1026 = this.nodes;
    var v862 = v1026[0];
    var v647 = v862.length;
    v327 = j$$11 < v647
  }
  return
}
function dumpMatrix() {
  var v328 = outputWindow.document;
  var v1106 = this.nodes;
  var v1027 = v1106.length;
  var v863 = "Dynamic programming matrix i=" + v1027;
  var v648 = v863 + " and j=";
  var v1028 = this.nodes;
  var v864 = v1028[0];
  var v649 = v864.length;
  var v329 = v648 + v649;
  JAMScript.call(v328.write, v328, [v329]);
  var v330 = outputWindow.document;
  JAMScript.call(v330.write, v330, ["\n"]);
  var i$$14 = 0;
  var v865 = this.nodes;
  var v650 = v865.length;
  var v341 = i$$14 < v650;
  for(;v341;) {
    var j$$12 = 0;
    var v1029 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v866 = v1029[i$$14]
    }
    var v651 = v866.length;
    var v339 = j$$12 < v651;
    for(;v339;) {
      var v867 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v652 = v867[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v331 = v652[j$$12]
      }
      var traceI = v331.tracebackI;
      var v868 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v653 = v868[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v332 = v653[j$$12]
      }
      var traceJ = v332.tracebackJ;
      var v333 = traceI == undefined;
      if(v333) {
        traceI = "u"
      }
      var v334 = traceJ == undefined;
      if(v334) {
        traceJ = "u"
      }
      var v1176 = "(" + i$$14;
      var v1162 = v1176 + ",";
      var v1142 = v1162 + j$$12;
      var v1107 = v1142 + ")[";
      var v1030 = v1107 + traceI;
      var v869 = v1030 + ",";
      var v654 = v869 + traceJ;
      var v335 = v654 + "]=";
      var v1031 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v870 = v1031[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v655 = v870[j$$12]
      }
      var v336 = v655.value;
      var output = v335 + v336;
      var v337 = outputWindow.document;
      var v338 = rightNum(output, "", 20, " ");
      JAMScript.call(v337.write, v337, [v338]);
      j$$12 = j$$12 + 1;
      var v1032 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v871 = v1032[i$$14]
      }
      var v656 = v871.length;
      v339 = j$$12 < v656
    }
    var v340 = outputWindow.document;
    JAMScript.call(v340.write, v340, ["\n"]);
    i$$14 = i$$14 + 1;
    var v872 = this.nodes;
    var v657 = v872.length;
    v341 = i$$14 < v657
  }
  var v342 = outputWindow.document;
  JAMScript.call(v342.write, v342, ["\n"]);
  return
}
function updateMatrix() {
  var i$$15 = 1;
  var v873 = this.nodes;
  var v658 = v873.length;
  var v383 = i$$15 < v658;
  for(;v383;) {
    var j$$13 = 1;
    var v1033 = this.nodes;
    var v874 = v1033[0];
    var v659 = v874.length;
    var v382 = j$$13 < v659;
    for(;v382;) {
      var a;
      var b;
      var c;
      var v1034 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v875 = v1034[i$$15]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v660 = v875[j$$13]
      }
      var v366 = v660.alreadyMatched;
      if(v366) {
        a = 0;
        b = 0;
        c = 0
      }else {
        var v1108 = this.nodes;
        var v1035 = v1108.length;
        var v876 = v1035 - 1;
        var v661 = i$$15 == v876;
        if(v661) {
          var v1143 = this.nodes;
          var v1109 = v1143[0];
          var v1036 = v1109.length;
          var v877 = v1036 - 1;
          v661 = j$$13 == v877
        }
        var v365 = v661;
        if(v365) {
          var v878 = this.nodes;
          var v879 = i$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v662 = v878[v879]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v343 = v662[j$$13]
          }
          a = v343.value;
          var v880 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v663 = v880[i$$15]
          }
          var v664 = j$$13 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v344 = v663[v664]
          }
          b = v344.value;
          var v1037 = this.nodes;
          var v1038 = i$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v881 = v1037[v1038]
          }
          var v882 = j$$13 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v665 = v881[v882]
          }
          var v345 = v665.value;
          var v666 = this.scoreSet;
          var v883 = this.M;
          var v884 = i$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v667 = v883[v884]
          }
          var v885 = this.N;
          var v886 = j$$13 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v668 = v885[v886]
          }
          var v346 = JAMScript.call(v666.getScore, v666, [v667, v668]);
          c = v345 + v346
        }else {
          var v1039 = this.nodes;
          var v887 = v1039.length;
          var v669 = v887 - 1;
          var v364 = i$$15 == v669;
          if(v364) {
            var v1040 = this.nodes;
            var v1041 = i$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v888 = v1040[v1041]
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v670 = v888[j$$13]
            }
            var v347 = v670.value;
            var v671 = this.scoreSet;
            var v348 = v671.gap;
            a = v347 - v348;
            var v889 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v672 = v889[i$$15]
            }
            var v673 = j$$13 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v349 = v672[v673]
            }
            b = v349.value;
            var v1042 = this.nodes;
            var v1043 = i$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v890 = v1042[v1043]
            }
            var v891 = j$$13 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v674 = v890[v891]
            }
            var v350 = v674.value;
            var v675 = this.scoreSet;
            var v892 = this.M;
            var v893 = i$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v676 = v892[v893]
            }
            var v894 = this.N;
            var v895 = j$$13 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v677 = v894[v895]
            }
            var v351 = JAMScript.call(v675.getScore, v675, [v676, v677]);
            c = v350 + v351
          }else {
            var v1110 = this.nodes;
            var v1044 = v1110[0];
            var v896 = v1044.length;
            var v678 = v896 - 1;
            var v363 = j$$13 == v678;
            if(v363) {
              var v897 = this.nodes;
              var v898 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v679 = v897[v898]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v352 = v679[j$$13]
              }
              a = v352.value;
              var v1045 = this.nodes;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v899 = v1045[i$$15]
              }
              var v900 = j$$13 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v680 = v899[v900]
              }
              var v353 = v680.value;
              var v681 = this.scoreSet;
              var v354 = v681.gap;
              b = v353 - v354;
              var v1046 = this.nodes;
              var v1047 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v901 = v1046[v1047]
              }
              var v902 = j$$13 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v682 = v901[v902]
              }
              var v355 = v682.value;
              var v683 = this.scoreSet;
              var v903 = this.M;
              var v904 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v684 = v903[v904]
              }
              var v905 = this.N;
              var v906 = j$$13 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v685 = v905[v906]
              }
              var v356 = JAMScript.call(v683.getScore, v683, [v684, v685]);
              c = v355 + v356
            }else {
              var v1048 = this.nodes;
              var v1049 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v907 = v1048[v1049]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v686 = v907[j$$13]
              }
              var v357 = v686.value;
              var v687 = this.scoreSet;
              var v358 = v687.gap;
              a = v357 - v358;
              var v1050 = this.nodes;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v908 = v1050[i$$15]
              }
              var v909 = j$$13 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v688 = v908[v909]
              }
              var v359 = v688.value;
              var v689 = this.scoreSet;
              var v360 = v689.gap;
              b = v359 - v360;
              var v1051 = this.nodes;
              var v1052 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v910 = v1051[v1052]
              }
              var v911 = j$$13 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v690 = v910[v911]
              }
              var v361 = v690.value;
              var v691 = this.scoreSet;
              var v912 = this.M;
              var v913 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v692 = v912[v913]
              }
              var v914 = this.N;
              var v915 = j$$13 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v693 = v914[v915]
              }
              var v362 = JAMScript.call(v691.getScore, v691, [v692, v693]);
              c = v361 + v362
            }
          }
        }
      }
      var v694 = a > b;
      if(v694) {
        v694 = a > c
      }
      var v377 = v694;
      if(v377) {
        var v916 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v695 = v916[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v367 = v695[j$$13]
        }
        v367.value = a;
        var v917 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v696 = v917[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v368 = v696[j$$13]
        }
        v368.tracebackI = i$$15 - 1;
        var v918 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v697 = v918[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v369 = v697[j$$13]
        }
        v369.tracebackJ = j$$13
      }else {
        var v698 = b > c;
        if(v698) {
          v698 = b > a
        }
        var v376 = v698;
        if(v376) {
          var v919 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v699 = v919[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v370 = v699[j$$13]
          }
          v370.value = b;
          var v920 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v700 = v920[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v371 = v700[j$$13]
          }
          v371.tracebackI = i$$15;
          var v921 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v701 = v921[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v372 = v701[j$$13]
          }
          v372.tracebackJ = j$$13 - 1
        }else {
          var v922 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v702 = v922[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v373 = v702[j$$13]
          }
          v373.value = c;
          var v923 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v703 = v923[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v374 = v703[j$$13]
          }
          v374.tracebackI = i$$15 - 1;
          var v924 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v704 = v924[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v375 = v704[j$$13]
          }
          v375.tracebackJ = j$$13 - 1
        }
      }
      var v1111 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1053 = v1111[i$$15]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v925 = v1053[j$$13]
      }
      var v705 = v925.value;
      var v381 = v705 < 0;
      if(v381) {
        var v926 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v706 = v926[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v378 = v706[j$$13]
        }
        v378.value = 0;
        var v927 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v707 = v927[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v379 = v707[j$$13]
        }
        v379.tracebackI = undefined;
        var v928 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v708 = v928[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v380 = v708[j$$13]
        }
        v380.tracebackJ = undefined
      }
      j$$13 = j$$13 + 1;
      var v1054 = this.nodes;
      var v929 = v1054[0];
      var v709 = v929.length;
      v382 = j$$13 < v709
    }
    i$$15 = i$$15 + 1;
    var v930 = this.nodes;
    var v710 = v930.length;
    v383 = i$$15 < v710
  }
  var v931 = this.nodes;
  var v1112 = this.nodes;
  var v1055 = v1112.length;
  var v932 = v1055 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v711 = v931[v932]
  }
  var v1113 = this.nodes;
  var v1056 = v1113[0];
  var v933 = v1056.length;
  var v712 = v933 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v384 = v711[v712]
  }
  this.score = v384.value;
  return
}
function search() {
  var v1238 = new Array;
  this.hits = v1238;
  var hitCount = 0;
  var v934 = this.scoreSet;
  var v713 = v934.hits;
  var v408 = hitCount < v713;
  for(;v408;) {
    JAMScript.call(this.updateMatrix, this, []);
    var maxNodeValue = 0;
    var maxNodeI = undefined;
    var maxNodeJ = undefined;
    var i$$16 = 1;
    var v935 = this.nodes;
    var v714 = v935.length;
    var v388 = i$$16 < v714;
    for(;v388;) {
      var j$$14 = 1;
      var v1057 = this.nodes;
      var v936 = v1057[0];
      var v715 = v936.length;
      var v387 = j$$14 < v715;
      for(;v387;) {
        var v1114 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1058 = v1114[i$$16]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v937 = v1058[j$$14]
        }
        var v716 = v937.value;
        var v386 = v716 > maxNodeValue;
        if(v386) {
          var v938 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v717 = v938[i$$16]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v385 = v717[j$$14]
          }
          maxNodeValue = v385.value;
          maxNodeI = i$$16;
          maxNodeJ = j$$14
        }
        j$$14 = j$$14 + 1;
        var v1059 = this.nodes;
        var v939 = v1059[0];
        var v718 = v939.length;
        v387 = j$$14 < v718
      }
      i$$16 = i$$16 + 1;
      var v940 = this.nodes;
      var v719 = v940.length;
      v388 = i$$16 < v719
    }
    var v389 = maxNodeValue == 0;
    if(v389) {
      break
    }
    var currentI = maxNodeI;
    var currentJ = maxNodeJ;
    var v720 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v390 = v720[maxNodeI]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var currentNode = v390[maxNodeJ]
    }
    var alignedM = new Array;
    var alignedN = new Array;
    var score = currentNode.value;
    var endM = undefined;
    var endN = undefined;
    var v941 = currentNode.tracebackI;
    var v721 = v941 != undefined;
    if(v721) {
      var v942 = currentNode.tracebackJ;
      v721 = v942 != undefined
    }
    var v405 = v721;
    for(;v405;) {
      var v722 = currentI == 0;
      var v943 = !v722;
      if(v943) {
        v722 = currentJ == 0
      }
      var v391 = v722;
      if(v391) {
        break
      }
      var v944 = currentNode.tracebackI;
      var v945 = currentI - 1;
      var v723 = v944 == v945;
      if(v723) {
        var v946 = currentNode.tracebackJ;
        var v947 = currentJ - 1;
        v723 = v946 == v947
      }
      var v400 = v723;
      if(v400) {
        var v392 = endM == undefined;
        if(v392) {
          endM = currentI;
          endN = currentJ
        }
        var v724 = this.M;
        var v725 = currentI - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v393 = v724[v725]
        }
        alignedM.push(v393);
        var v726 = this.N;
        var v727 = currentJ - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v394 = v726[v727]
        }
        alignedN.push(v394)
      }else {
        var v728 = currentNode.tracebackJ;
        var v729 = currentJ - 1;
        var v399 = v728 == v729;
        if(v399) {
          var v396 = endM != undefined;
          if(v396) {
            alignedM.push("-");
            var v730 = this.N;
            var v731 = currentJ - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v395 = v730[v731]
            }
            alignedN.push(v395)
          }
        }else {
          var v398 = endM != undefined;
          if(v398) {
            var v732 = this.M;
            var v733 = currentI - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v397 = v732[v733]
            }
            alignedM.push(v397);
            alignedN.push("-")
          }
        }
      }
      var v948 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v734 = v948[currentI]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v401 = v734[currentJ]
      }
      v401.value = 0;
      var v949 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v735 = v949[currentI]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v402 = v735[currentJ]
      }
      v402.alreadyMatched = true;
      currentI = currentNode.tracebackI;
      currentJ = currentNode.tracebackJ;
      var v736 = this.nodes;
      var v737 = currentNode.tracebackI;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v403 = v736[v737]
      }
      var v404 = currentNode.tracebackJ;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        currentNode = v403[v404]
      }
      var v950 = currentNode.tracebackI;
      var v738 = v950 != undefined;
      if(v738) {
        var v951 = currentNode.tracebackJ;
        v738 = v951 != undefined
      }
      v405 = v738
    }
    alignedM = alignedM.reverse();
    alignedN = alignedN.reverse();
    var v406 = this.hits;
    var v739 = alignedM.join("");
    var v740 = alignedN.join("");
    var v741 = currentI + 1;
    var v742 = currentJ + 1;
    var v407 = new Hit(v739, v740, score, v741, endM, v742, endN);
    v406.push(v407);
    hitCount = hitCount + 1;
    var v952 = this.scoreSet;
    var v743 = v952.hits;
    v408 = hitCount < v743
  }
  return
}
function getHits() {
  return this.hits
}
function FuzzySearch() {
  return
}
function Hit(sequenceM, sequenceN, score$$1, startM, endM$$1, startN, endN$$1) {
  this.sequenceM = sequenceM;
  this.sequenceN = sequenceN;
  this.score = score$$1;
  this.startM = startM;
  this.endM = endM$$1;
  this.startN = startN;
  this.endN = endN$$1;
  return
}
new ScoreSet;
var v409 = ScoreSet.prototype;
v409.getScore = getScore;
var v410 = ScoreSet.prototype;
v410.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v411 = ScoringMatrix.prototype;
v411.scoringMatrix_getScore = scoringMatrix_getScore;
var v412 = ScoringMatrix.prototype;
v412.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v1239 = new ScoringMatrix;
Blosum62.prototype = v1239;
var v1240 = new ScoringMatrix;
Blosum45.prototype = v1240;
var v1241 = new ScoringMatrix;
Blosum80.prototype = v1241;
var v1242 = new ScoringMatrix;
Pam30.prototype = v1242;
new FuzzySearch;
var v413 = FuzzySearch.prototype;
v413.initializeMatrix = initializeMatrix;
var v414 = FuzzySearch.prototype;
v414.updateMatrix = updateMatrix;
var v415 = FuzzySearch.prototype;
v415.search = search;
var v416 = FuzzySearch.prototype;
v416.getHits = getHits;
var v417 = FuzzySearch.prototype;
v417.dumpMatrix = dumpMatrix;
JAMScript.set(document, "onload", v2);
var v418 = document.getElementById("submitbtn");
JAMScript.set(v418, "onclick", v3);
var v419 = document.getElementById("clearbtn");
JAMScript.set(v419, "onclick", v4);

