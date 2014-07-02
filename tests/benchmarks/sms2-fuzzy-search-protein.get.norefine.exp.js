function v4() {
  var v965 = document.forms;
  var v756 = v965[0];
  var v431 = v756.elements;
  var v5 = v431[0];
  v5.value = " ";
  var v966 = document.forms;
  var v757 = v966[0];
  var v432 = v757.elements;
  var v6 = v432[4];
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
  var v433 = document.main_form;
  var v8 = v433.main_submit;
  v8.focus();
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v434 = arrayOfSequences.length;
  var v10 = v434 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v435 = arrayOfTitles.length;
  var v12 = i$$1 < v435;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v967 = arrayOfTitles[i$$1]
    }
    var v758 = JAMScript.call(v967.search, v967, [/\S/]);
    var v436 = v758 == -1;
    var v760 = !v436;
    if(v760) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1071 = arrayOfSequences[i$$1]
      }
      var v968 = JAMScript.call(v1071.search, v1071, [/\S/]);
      var v759 = v968 == -1;
      var v970 = !v759;
      if(v970) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1072 = arrayOfSequences[i$$1]
        }
        var v969 = v1072.length;
        v759 = v969 != lengthOfAlign
      }
      v436 = v759
    }
    var v11 = v436;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v437 = arrayOfTitles.length;
    v12 = i$$1 < v437
  }
  return true
}
function checkCodonTable(codonTable) {
  var v761 = JAMScript.call(codonTable.search, codonTable, [/AmAcid/]);
  var v438 = v761 == -1;
  var v763 = !v438;
  if(v763) {
    var v971 = JAMScript.call(codonTable.search, codonTable, [/Codon/]);
    var v762 = v971 == -1;
    var v973 = !v762;
    if(v973) {
      var v1073 = JAMScript.call(codonTable.search, codonTable, [/Number/]);
      var v972 = v1073 == -1;
      var v1075 = !v972;
      if(v1075) {
        var v1126 = JAMScript.call(codonTable.search, codonTable, [/\/1000/]);
        var v1074 = v1126 == -1;
        var v1128 = !v1074;
        if(v1128) {
          var v1127 = JAMScript.call(codonTable.search, codonTable, [/Fraction\s*\.\./]);
          v1074 = v1127 == -1
        }
        v972 = v1074
      }
      v762 = v972
    }
    v438 = v762
  }
  var v13 = v438;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v764 = formElement.value;
  var v439 = JAMScript.call(v764.search, v764, [/\S/]);
  var v14 = v439 == -1;
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
  var v440 = arrayOfPatterns.length;
  var v17 = z$$2 < v440;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v765 = arrayOfPatterns[z$$2]
    }
    var v441 = JAMScript.call(v765.search, v765, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/]);
    var v15 = v441 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v766 = arrayOfPatterns[z$$2]
    }
    var v442 = moreExpressionCheck(v766);
    var v16 = v442 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v443 = arrayOfPatterns.length;
    v17 = z$$2 < v443
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v444 = arrayOfPatterns.length;
  var v26 = j < v444;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v974 = arrayOfPatterns[j]
    }
    var v767 = v974.match(/\/.+\//);
    var v445 = v767 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1239 = eval("introspect(JAMScript.introspectors.processAll) { " + v445 + " }")
    }else {
      var v1239 = JAMScript.call(eval, null, [v445])
    }
    v20[v21] = v1239;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v768 = arrayOfPatterns[j]
    }
    var v446 = v768.match(/=[a-zA-Z\*]/);
    var v1240 = v446.toString();
    v22[v23] = v1240;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v447 = geneticCodeMatchResult[j]
    }
    var v1241 = v447.replace(/=/g, "");
    v24[v25] = v1241;
    j = j + 1;
    var v448 = arrayOfPatterns.length;
    v26 = j < v448
  }
  var i$$2 = 0;
  var v769 = testSequence.length;
  var v449 = v769 - 3;
  var v33 = i$$2 <= v449;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v450 = geneticCodeMatchExp.length;
    var v31 = j < v450;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v770 = geneticCodeMatchExp[j]
      }
      var v451 = JAMScript.call(codon.search, codon, [v770]);
      var v30 = v451 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v452 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v452 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v453 = geneticCodeMatchExp.length;
      v31 = j < v453
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v771 = testSequence.length;
    var v454 = v771 - 3;
    v33 = i$$2 <= v454
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v455 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v455;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v772 = arrayOfPatterns$$1[z$$3]
    }
    var v456 = JAMScript.call(v772.search, v772, [/[^acdefghiklmnpqrstvwyz]/i]);
    var v34 = v456 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v457 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v457
  }
  var i$$3 = 0;
  var v458 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v458;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v773 = arrayOfPatterns$$1[i$$3]
    }
    var v459 = "[" + v773;
    var v36 = v459 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v460 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v460;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v774 = arrayOfPatterns$$1[j$$1]
      }
      var v461 = JAMScript.call(v774.search, v774, [re]);
      var v37 = v461 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v462 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v462
    }
    i$$3 = i$$3 + 1;
    var v463 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v463
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v464 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v464;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v775 = arrayOfPatterns$$2[z$$4]
    }
    var v465 = JAMScript.call(v775.search, v775, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i]);
    var v40 = v465 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v776 = arrayOfPatterns$$2[z$$4]
    }
    var v466 = moreExpressionCheck(v776);
    var v41 = v466 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v467 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v467
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v975 = getSequenceFromFasta(text$$7);
  var v777 = v975.replace(/[^A-Za-z]/g, "");
  var v468 = v777.length;
  var v44 = v468 > maxInput;
  if(v44) {
    var v469 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v469 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v470 = text$$8.length;
  var v46 = v470 > maxInput$$1;
  if(v46) {
    var v471 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v471 + " characters.";
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
  var v472 = alignArray.length;
  var v53 = v472 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v473 = alignArray.length;
  var v55 = i$$4 < v473;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v778 = alignArray[i$$4]
    }
    var v474 = JAMScript.call(v778.search, v778, [/[^\s]+\s/]);
    var v54 = v474 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v475 = alignArray.length;
    v55 = i$$4 < v475
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
  var v476 = JAMScript.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/]);
  var v58 = v476 != -1;
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
  var v477 = sequence$$2.length;
  var v59 = "&gt;results for " + v477;
  var stringToReturn = v59 + " residue sequence ";
  var v478 = JAMScript.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/]);
  var v61 = v478 != -1;
  if(v61) {
    var v479 = stringToReturn + '"';
    var v60 = v479 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v480 = stringToReturn + ' starting "';
  var v481 = sequence$$2.substring(0, 10);
  var v62 = v480 + v481;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v482 = sequenceOne.length;
  var v63 = "Search results for " + v482;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v483 = JAMScript.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/]);
  var v65 = v483 != -1;
  if(v65) {
    var v484 = stringToReturn$$1 + '"';
    var v64 = v484 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v485 = stringToReturn$$1 + ' starting "';
  var v486 = sequenceOne.substring(0, 10);
  var v66 = v485 + v486;
  stringToReturn$$1 = v66 + '"\n';
  var v487 = stringToReturn$$1 + "and ";
  var v488 = sequenceTwo.length;
  var v67 = v487 + v488;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v489 = JAMScript.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/]);
  var v69 = v489 != -1;
  if(v69) {
    var v490 = stringToReturn$$1 + '"';
    var v68 = v490 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v491 = stringToReturn$$1 + ' starting "';
  var v492 = sequenceTwo.substring(0, 10);
  var v70 = v491 + v492;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v493 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v493;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v976 = arrayOfPatterns$$3[j$$2]
    }
    var v779 = v976.match(/\/.+\//);
    var v494 = v779 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1242 = eval("introspect(JAMScript.introspectors.processAll) { " + v494 + " }")
    }else {
      var v1242 = JAMScript.call(eval, null, [v494])
    }
    v73[v74] = v1242;
    j$$2 = j$$2 + 1;
    var v495 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v495
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v496 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v496;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v780 = arrayOfPatterns$$4[j$$3]
    }
    var v497 = v780.match(/=[a-zA-Z\*]/);
    var v1243 = v497.toString();
    v77[v78] = v1243;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v498 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1244 = v498.replace(/=/g, "");
    v79[v80] = v1244;
    j$$3 = j$$3 + 1;
    var v499 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v499
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v500 = sequence$$3.length;
  var v82 = "Results for " + v500;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v501 = JAMScript.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/]);
  var v84 = v501 != -1;
  if(v84) {
    var v502 = stringToReturn$$2 + '"';
    var v83 = v502 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v503 = stringToReturn$$2 + ' starting "';
  var v504 = sequence$$3.substring(0, 10);
  var v85 = v503 + v504;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v781 = "Results for " + topology;
  var v505 = v781 + " ";
  var v506 = sequence$$4.length;
  var v87 = v505 + v506;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v507 = JAMScript.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/]);
  var v89 = v507 != -1;
  if(v89) {
    var v508 = stringToReturn$$3 + '"';
    var v88 = v508 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v509 = stringToReturn$$3 + ' starting "';
  var v510 = sequence$$4.substring(0, 10);
  var v90 = v509 + v510;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v511 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v511;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v512 = JAMScript.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/]);
  var v94 = v512 != -1;
  if(v94) {
    var v513 = stringToReturn$$4 + '"';
    var v93 = v513 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v514 = stringToReturn$$4 + ' starting "';
  var v515 = sequenceOne$$1.substring(0, 10);
  var v95 = v514 + v515;
  stringToReturn$$4 = v95 + '"\n';
  var v516 = stringToReturn$$4 + "and ";
  var v517 = sequenceTwo$$1.length;
  var v96 = v516 + v517;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v518 = JAMScript.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/]);
  var v98 = v518 != -1;
  if(v98) {
    var v519 = stringToReturn$$4 + '"';
    var v97 = v519 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v520 = stringToReturn$$4 + ' starting "';
  var v521 = sequenceTwo$$1.substring(0, 10);
  var v99 = v520 + v521;
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
    var v522 = Math.random();
    var v523 = components.length;
    var v101 = v522 * v523;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v524 = JAMScript.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/]);
  var v103 = v524 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v525 = JAMScript.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/]);
  var v105 = v525 != -1;
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
  var v782 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/]);
  var v526 = v782 != -1;
  var v784 = !v526;
  if(v784) {
    var v977 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/]);
    var v783 = v977 != -1;
    var v979 = !v783;
    if(v979) {
      var v1076 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[\]/]);
      var v978 = v1076 != -1;
      var v1078 = !v978;
      if(v1078) {
        var v1129 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/]);
        var v1077 = v1129 != -1;
        var v1131 = !v1077;
        if(v1131) {
          var v1155 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//]);
          var v1130 = v1155 != -1;
          var v1157 = !v1130;
          if(v1157) {
            var v1174 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\|\|/]);
            var v1156 = v1174 != -1;
            var v1176 = !v1156;
            if(v1176) {
              var v1188 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\/\|/]);
              var v1175 = v1188 != -1;
              var v1190 = !v1175;
              if(v1190) {
                var v1200 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\|\//]);
                var v1189 = v1200 != -1;
                var v1202 = !v1189;
                if(v1202) {
                  var v1210 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[.\]/]);
                  var v1201 = v1210 != -1;
                  var v1212 = !v1201;
                  if(v1212) {
                    var v1217 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\</]);
                    var v1211 = v1217 != -1;
                    var v1219 = !v1211;
                    if(v1219) {
                      var v1218 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\>/]);
                      v1211 = v1218 != -1
                    }
                    v1201 = v1211
                  }
                  v1189 = v1201
                }
                v1175 = v1189
              }
              v1156 = v1175
            }
            v1130 = v1156
          }
          v1077 = v1130
        }
        v978 = v1077
      }
      v783 = v978
    }
    v526 = v783
  }
  var v106 = v526;
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
    var v1254 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1254[2], v1254[1], v1254[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v980 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v785 = v980 + "<head>\n";
  var v527 = v785 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v527 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v1232 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1228 = v1232 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1224 = v1228 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1220 = v1224 + "div.info {font-weight: bold}\n";
    var v1213 = v1220 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1203 = v1213 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1191 = v1203 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1177 = v1191 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1158 = v1177 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1132 = v1158 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1079 = v1132 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v981 = v1079 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v786 = v981 + "td.many {color: #000000}\n";
    var v528 = v786 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v528 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v1236 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1233 = v1236 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1229 = v1233 + "div.title {display: none}\n";
    var v1225 = v1229 + "div.info {font-weight: bold}\n";
    var v1221 = v1225 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1214 = v1221 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1204 = v1214 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1192 = v1204 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1178 = v1192 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1159 = v1178 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1133 = v1159 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1080 = v1133 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v982 = v1080 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v787 = v982 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v529 = v787 + "img {display: none}\n";
    var v116 = v529 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v983 = "</head>\n" + '<body class="main">\n';
  var v788 = v983 + '<div class="title">';
  var v530 = v788 + title$$6;
  var v118 = v530 + " results</div>\n";
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
    var v1255 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1255[2], v1255[1], v1255[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v984 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v789 = v984 + "<head>\n";
  var v531 = v789 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v531 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v1234 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1230 = v1234 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1226 = v1230 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1222 = v1226 + "div.info {font-weight: bold}\n";
    var v1215 = v1222 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1205 = v1215 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1193 = v1205 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1179 = v1193 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1160 = v1179 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1134 = v1160 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1081 = v1134 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v985 = v1081 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v790 = v985 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v532 = v790 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v532 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v1238 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1237 = v1238 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1235 = v1237 + "div.title {display: none}\n";
    var v1231 = v1235 + "div.info {font-weight: bold}\n";
    var v1227 = v1231 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1223 = v1227 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1216 = v1223 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1206 = v1216 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1194 = v1206 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1180 = v1194 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1161 = v1180 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1135 = v1161 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1082 = v1135 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v986 = v1082 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v791 = v986 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v533 = v791 + "img {display: none}\n";
    var v124 = v533 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v987 = "</head>\n" + '<body class="main">\n';
  var v792 = v987 + '<div class="title">';
  var v534 = v792 + title$$8;
  var v126 = v534 + " results</div>\n";
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
  var v535 = JAMScript.call(dnaSequence$$1.search, dnaSequence$$1, [/./]);
  var v127 = v535 != -1;
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
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v536 = testArray[0];
  var v131 = v536 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v537 = JAMScript.call(testString.search, testString, [re$$2]);
  var v132 = v537 == -1;
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
  var v538 = testNum.toFixed(3);
  var v135 = v538 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v539 = testNum.toPrecision(5);
  var v136 = v539 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v540 = JAMScript.call(theNumber$$1.search, theNumber$$1, [/\d/]);
  var v137 = v540 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v793 = JAMScript.call(emblFile.search, emblFile, [/ID/]);
  var v541 = v793 == -1;
  var v795 = !v541;
  if(v795) {
    var v988 = JAMScript.call(emblFile.search, emblFile, [/AC/]);
    var v794 = v988 == -1;
    var v990 = !v794;
    if(v990) {
      var v1083 = JAMScript.call(emblFile.search, emblFile, [/DE/]);
      var v989 = v1083 == -1;
      var v1085 = !v989;
      if(v1085) {
        var v1084 = JAMScript.call(emblFile.search, emblFile, [/SQ/]);
        v989 = v1084 == -1
      }
      v794 = v989
    }
    v541 = v794
  }
  var v138 = v541;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v542 = JAMScript.call(theNumber$$2.search, theNumber$$2, [/\d/]);
  var v139 = v542 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v543 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v543 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v544 = JAMScript.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i]);
  var v142 = v544 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v545 = JAMScript.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i]);
  var v143 = v545 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v796 = JAMScript.call(genBankFile.search, genBankFile, [/LOCUS/]);
  var v546 = v796 == -1;
  var v798 = !v546;
  if(v798) {
    var v991 = JAMScript.call(genBankFile.search, genBankFile, [/DEFINITION/]);
    var v797 = v991 == -1;
    var v993 = !v797;
    if(v993) {
      var v1086 = JAMScript.call(genBankFile.search, genBankFile, [/ACCESSION/]);
      var v992 = v1086 == -1;
      var v1088 = !v992;
      if(v1088) {
        var v1087 = JAMScript.call(genBankFile.search, genBankFile, [/ORIGIN/]);
        v992 = v1087 == -1
      }
      v797 = v992
    }
    v546 = v797
  }
  var v144 = v546;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v799 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/]);
  var v547 = v799 == -1;
  var v801 = !v547;
  if(v801) {
    var v994 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/]);
    var v800 = v994 == -1;
    var v996 = !v800;
    if(v996) {
      var v1089 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/]);
      var v995 = v1089 == -1;
      var v1091 = !v995;
      if(v1091) {
        var v1090 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/]);
        v995 = v1090 == -1
      }
      v800 = v995
    }
    v547 = v800
  }
  var v145 = v547;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v548 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/]);
  var v146 = v548 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v802 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/ID/]);
  var v549 = v802 == -1;
  var v804 = !v549;
  if(v804) {
    var v997 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/AC/]);
    var v803 = v997 == -1;
    var v999 = !v803;
    if(v999) {
      var v1092 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/DE/]);
      var v998 = v1092 == -1;
      var v1094 = !v998;
      if(v1094) {
        var v1093 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/SQ/]);
        v998 = v1093 == -1
      }
      v803 = v998
    }
    v549 = v803
  }
  var v147 = v549;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v550 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/^FT/m]);
  var v148 = v550 == -1;
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
  var v156 = i$$5 < stopBase;
  for(;v156;) {
    var v149 = i$$5 + 1;
    lineOfText = rightNum(v149, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v551 = basePerLine / groupSize;
    var v153 = j$$6 <= v551;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v552 = k + i$$5;
        var v151 = text$$10.charAt(v552);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v553 = basePerLine / groupSize;
      v153 = j$$6 <= v553
    }
    var v154 = outputWindow.document;
    var v155 = lineOfText + "\n";
    JAMScript.call(v154.write, v154, [v155]);
    lineOfText = "";
    v156 = i$$5 < stopBase
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
    var v554 = adjustment < 0;
    if(v554) {
      v554 = adjusted >= 0
    }
    var v157 = v554;
    if(v157) {
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
  var v190 = i$$6 < stopBase$$2;
  for(;v190;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v555 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v555;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v556 = i$$6 + k$$1;
        var v158 = v556 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v557 = k$$1 + i$$6;
        var v160 = text$$12.charAt(v557);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v558 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v558, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v559 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v559
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v1000 = adjustNumbering(lineNum, numberingAdjustment);
      var v805 = rightNum(v1000, "", 8, tabIn$$3);
      var v560 = v805 + lineOfText$$1;
      var v168 = v560 + "\n";
      JAMScript.call(v167.write, v167, [v168]);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v1001 = adjustNumbering(lineNum, numberingAdjustment);
        var v806 = rightNum(v1001, "", 8, tabIn$$3);
        var v807 = complement(lineOfText$$1);
        var v561 = v806 + v807;
        var v170 = v561 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v171 = outputWindow.document;
        JAMScript.call(v171.write, v171, ["\n"])
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v808 = lineOfText$$1;
        var v809 = adjustNumbering(i$$6, numberingAdjustment);
        var v562 = v808 + v809;
        var v174 = v562 + "\n";
        JAMScript.call(v173.write, v173, [v174]);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v810 = complement(lineOfText$$1);
          var v811 = adjustNumbering(i$$6, numberingAdjustment);
          var v563 = v810 + v811;
          var v176 = v563 + "\n";
          JAMScript.call(v175.write, v175, [v176]);
          var v177 = outputWindow.document;
          JAMScript.call(v177.write, v177, ["\n"])
        }
      }else {
        var v187 = numberPosition$$1 == "above";
        if(v187) {
          var v179 = outputWindow.document;
          var v180 = aboveNum + "\n";
          JAMScript.call(v179.write, v179, [v180]);
          var v181 = outputWindow.document;
          var v182 = lineOfText$$1 + "\n";
          JAMScript.call(v181.write, v181, [v182]);
          var v186 = strands$$1 == "two";
          if(v186) {
            var v183 = outputWindow.document;
            var v564 = complement(lineOfText$$1);
            var v184 = v564 + "\n";
            JAMScript.call(v183.write, v183, [v184]);
            var v185 = outputWindow.document;
            JAMScript.call(v185.write, v185, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v190 = i$$6 < stopBase$$2
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
  var v211 = i$$7 < stopBase$$3;
  for(;v211;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v565 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v565;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v566 = i$$7 + k$$2;
        var v191 = v566 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v567 = k$$2 + i$$7;
        var v193 = text$$13.charAt(v567);
        lineOfText$$2 = v192 + v193;
        k$$2 = k$$2 + 1;
        v194 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v197 = numberPosition$$2 == "above";
      if(v197) {
        var v195 = aboveNum$$1;
        var v196 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v195 + v196
      }
      var v198 = i$$7 >= stopBase$$3;
      if(v198) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v568 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v568
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v812 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v569 = v812 + lineOfText$$2;
      var v201 = v569 + "\n";
      JAMScript.call(v200.write, v200, [v201])
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v570 = lineOfText$$2 + i$$7;
        var v203 = v570 + "\n";
        JAMScript.call(v202.write, v202, [v203])
      }else {
        var v208 = numberPosition$$2 == "above";
        if(v208) {
          var v204 = outputWindow.document;
          var v205 = aboveNum$$1 + "\n";
          JAMScript.call(v204.write, v204, [v205]);
          var v206 = outputWindow.document;
          var v207 = lineOfText$$2 + "\n";
          JAMScript.call(v206.write, v206, [v207])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v211 = i$$7 < stopBase$$3
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
  var v813 = sequence$$13.length;
  var v571 = v813 <= firstIndexToMutate;
  var v815 = !v571;
  if(v815) {
    var v814 = lastIndexToMutate < 0;
    var v1002 = !v814;
    if(v1002) {
      v814 = lastIndexToMutate <= firstIndexToMutate
    }
    v571 = v814
  }
  var v212 = v571;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v572 = Math.random();
    var v213 = v572 * maxNum;
    randNum = Math.floor(v213);
    var v573 = randNum < firstIndexToMutate;
    var v816 = !v573;
    if(v816) {
      v573 = randNum > lastIndexToMutate
    }
    var v214 = v573;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v574 = Math.random();
      var v575 = components$$1.length;
      var v215 = v574 * v575;
      componentsIndex = Math.round(v215);
      var v576 = components$$1.length;
      var v216 = componentsIndex == v576;
      if(v216) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v577 = components$$1[componentsIndex]
      }
      var v217 = v577 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v578 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v579 = components$$1[componentsIndex]
    }
    var v218 = v578 + v579;
    var v580 = randNum + 1;
    var v581 = sequence$$13.length;
    var v219 = sequence$$13.substring(v580, v581);
    sequence$$13 = v218 + v219;
    i$$8 = i$$8 + 1;
    v220 = i$$8 < numMut
  }
  var v221 = outputWindow.document;
  var v222 = addReturns(sequence$$13);
  JAMScript.call(v221.write, v221, [v222]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v227 = j$$9 < lengthOut$$1;
  for(;v227;) {
    var v582 = Math.random();
    var v583 = components$$2.length;
    var v223 = v582 * v583;
    tempNum$$1 = Math.floor(v223);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v584 = sequence$$14.length;
    var v226 = v584 == 60;
    if(v226) {
      var v224 = outputWindow.document;
      var v225 = sequence$$14 + "\n";
      JAMScript.call(v224.write, v224, [v225]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v227 = j$$9 < lengthOut$$1
  }
  var v228 = outputWindow.document;
  var v229 = sequence$$14 + "\n";
  JAMScript.call(v228.write, v228, [v229]);
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
  var v233 = dnaConformation == "circular";
  if(v233) {
    var v230 = sequence$$15.substring(0, lookAhead);
    shiftValue = v230.length;
    var v1003 = sequence$$15.length;
    var v817 = v1003 - lookAhead;
    var v818 = sequence$$15.length;
    var v585 = sequence$$15.substring(v817, v818);
    var v231 = v585 + sequence$$15;
    var v232 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAMScript.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v235 = outputWindow.document;
  var v1004 = '<tr><td class="title" width="200px">' + "Site:";
  var v819 = v1004 + '</td><td class="title">';
  var v586 = v819 + "Positions:";
  var v236 = v586 + "</td></tr>\n";
  JAMScript.call(v235.write, v235, [v236]);
  var i$$9 = 0;
  var v587 = arrayOfItems.length;
  var v252 = i$$9 < v587;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v588 = arrayOfItems[i$$9]
    }
    var v237 = v588.match(/\/.+\//);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1005 = arrayOfItems[i$$9]
    }
    var v820 = v1005.match(/\)\D*\d+/);
    var v589 = v820.toString();
    var v238 = v589.replace(/\)\D*/, "");
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v590 = matchPosition >= lowerLimit;
      if(v590) {
        v590 = matchPosition < upperLimit
      }
      var v242 = v590;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v591 = matchPosition - shiftValue;
        var v241 = v591 + 1;
        tempString$$1 = v240 + v241
      }
      var v592 = matchExp.lastIndex;
      var v821 = RegExp.lastMatch;
      var v593 = v821.length;
      var v243 = v592 - v593;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v594 = JAMScript.call(tempString$$1.search, tempString$$1, [/\d/]);
    var v245 = v594 != -1;
    if(v245) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v249 = timesFound == 0;
    if(v249) {
      backGroundClass = "none"
    }else {
      var v248 = timesFound == 1;
      if(v248) {
        backGroundClass = "one"
      }else {
        var v247 = timesFound == 2;
        if(v247) {
          backGroundClass = "two"
        }else {
          var v246 = timesFound == 3;
          if(v246) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v250 = outputWindow.document;
    var v1181 = '<tr><td class="' + backGroundClass;
    var v1162 = v1181 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1207 = arrayOfItems[i$$9]
    }
    var v1195 = v1207.match(/\([^\(]+\)/);
    var v1182 = v1195.toString();
    var v1163 = v1182.replace(/\(|\)/g, "");
    var v1136 = v1162 + v1163;
    var v1095 = v1136 + '</td><td class="';
    var v1006 = v1095 + backGroundClass;
    var v822 = v1006 + '">';
    var v595 = v822 + tempString$$1;
    var v251 = v595 + "</td></tr>\n";
    JAMScript.call(v250.write, v250, [v251]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v596 = arrayOfItems.length;
    v252 = i$$9 < v596
  }
  var v253 = outputWindow.document;
  JAMScript.call(v253.write, v253, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v254 = outputWindow.document;
  JAMScript.call(v254.write, v254, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v255 = outputWindow.document;
  var v1137 = '<tr><td class="title">' + "Pattern:";
  var v1096 = v1137 + '</td><td class="title">';
  var v1007 = v1096 + "Times found:";
  var v823 = v1007 + '</td><td class="title">';
  var v597 = v823 + "Percentage:";
  var v256 = v597 + "</td></tr>\n";
  JAMScript.call(v255.write, v255, [v256]);
  var i$$10 = 0;
  var v598 = arrayOfItems$$1.length;
  var v265 = i$$10 < v598;
  for(;v265;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v599 = arrayOfItems$$1[i$$10]
    }
    var v257 = v599.match(/\/[^\/]+\//);
    var matchExp$$1 = v257 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v600 = JAMScript.call(sequence$$16.search, sequence$$16, [matchExp$$1]);
    var v259 = v600 != -1;
    if(v259) {
      var v258 = sequence$$16.match(matchExp$$1);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v824 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1097 = arrayOfItems$$1[i$$10]
    }
    var v1008 = v1097.match(/\d+/);
    var v825 = parseFloat(v1008);
    var v601 = v824 - v825;
    var v262 = v601 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v602 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1009 = arrayOfItems$$1[i$$10]
      }
      var v826 = v1009.match(/\d+/);
      var v603 = parseFloat(v826);
      var v261 = v602 - v603;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1208 = arrayOfItems$$1[i$$10]
    }
    var v1196 = v1208.match(/\([^\(]+\)\b/);
    var v1183 = v1196.toString();
    var v1164 = v1183.replace(/\(|\)/g, "");
    var v1138 = "<tr><td>" + v1164;
    var v1098 = v1138 + "</td><td>";
    var v1010 = v1098 + tempNumber;
    var v827 = v1010 + "</td><td>";
    var v828 = percentage.toFixed(2);
    var v604 = v827 + v828;
    var v264 = v604 + "</td></tr>\n";
    JAMScript.call(v263.write, v263, [v264]);
    i$$10 = i$$10 + 1;
    var v605 = arrayOfItems$$1.length;
    v265 = i$$10 < v605
  }
  var v266 = outputWindow.document;
  JAMScript.call(v266.write, v266, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v606 = sequence$$17.length;
  var v273 = v606 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v607 = Math.random();
    var v267 = v607 * maxNum$$1;
    randNum$$1 = Math.floor(v267);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v268, v269);
    sequence$$17 = tempString1 + tempString2;
    var v608 = tempSeq.length;
    var v272 = v608 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAMScript.call(v270.write, v270, [v271]);
      tempSeq = ""
    }
    var v609 = sequence$$17.length;
    v273 = v609 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAMScript.call(v274.write, v274, [v275]);
  return true
}
function fuzzySearchProtein(theDocument) {
  var targetSequence = "";
  var targetTitle = "";
  var querySequence = "";
  var queryTitle = "";
  var maxTarget = 2E3;
  var maxQuery = 30;
  var v610 = testScript();
  var v276 = v610 == false;
  if(v276) {
    return false
  }
  var v1165 = theDocument.forms;
  var v1139 = v1165[0];
  var v1099 = v1139.elements;
  var v1011 = v1099[0];
  var v829 = checkFormElement(v1011);
  var v611 = v829 == false;
  var v831 = !v611;
  if(v831) {
    var v1197 = theDocument.forms;
    var v1184 = v1197[0];
    var v1166 = v1184.elements;
    var v1140 = v1166[0];
    var v1100 = v1140.value;
    var v1012 = checkSequenceLength(v1100, maxTarget);
    var v830 = v1012 == false;
    var v1014 = !v830;
    if(v1014) {
      var v1198 = theDocument.forms;
      var v1185 = v1198[0];
      var v1167 = v1185.elements;
      var v1141 = v1167[1];
      var v1101 = checkFormElement(v1141);
      var v1013 = v1101 == false;
      var v1103 = !v1013;
      if(v1103) {
        var v1209 = theDocument.forms;
        var v1199 = v1209[0];
        var v1186 = v1199.elements;
        var v1168 = v1186[1];
        var v1142 = v1168.value;
        var v1102 = checkSequenceLength(v1142, maxQuery);
        v1013 = v1102 == false
      }
      v830 = v1013
    }
    v611 = v830
  }
  var v277 = v611;
  if(v277) {
    return false
  }
  var v1143 = theDocument.forms;
  var v1104 = v1143[0];
  var v1015 = v1104.elements;
  var v832 = v1015[5];
  var v612 = v832.options;
  var v1144 = theDocument.forms;
  var v1105 = v1144[0];
  var v1016 = v1105.elements;
  var v833 = v1016[5];
  var v613 = v833.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v278 = v612[v613]
  }
  var MATRIX = v278.value;
  var v1169 = theDocument.forms;
  var v1145 = v1169[0];
  var v1106 = v1145.elements;
  var v1017 = v1106[6];
  var v834 = v1017.options;
  var v1170 = theDocument.forms;
  var v1146 = v1170[0];
  var v1107 = v1146.elements;
  var v1018 = v1107[6];
  var v835 = v1018.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v614 = v834[v835]
  }
  var v279 = v614.value;
  var GAP_PENALTY = parseInt(v279);
  var v1171 = theDocument.forms;
  var v1147 = v1171[0];
  var v1108 = v1147.elements;
  var v1019 = v1108[7];
  var v836 = v1019.options;
  var v1172 = theDocument.forms;
  var v1148 = v1172[0];
  var v1109 = v1148.elements;
  var v1020 = v1109[7];
  var v837 = v1020.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v615 = v836[v837]
  }
  var v280 = v615.value;
  var HITS = parseInt(v280);
  openWindow("Fuzzy Protein DNA");
  openPre();
  var v1110 = theDocument.forms;
  var v1021 = v1110[0];
  var v838 = v1021.elements;
  var v616 = v838[0];
  var v281 = v616.value;
  targetSequence = getSequenceFromFasta(v281);
  targetSequence = removeNonProtein(targetSequence);
  var v1111 = theDocument.forms;
  var v1022 = v1111[0];
  var v839 = v1022.elements;
  var v617 = v839[0];
  var v282 = v617.value;
  targetTitle = getTitleFromFasta(v282);
  var v1112 = theDocument.forms;
  var v1023 = v1112[0];
  var v840 = v1023.elements;
  var v618 = v840[1];
  var v283 = v618.value;
  querySequence = getSequenceFromFasta(v283);
  querySequence = removeNonProtein(querySequence);
  queryTitle = "query";
  var v284 = outputWindow.document;
  var v285 = getFuzzySearchTitle(targetTitle, targetSequence, queryTitle, querySequence);
  JAMScript.call(v284.write, v284, [v285]);
  var v619 = JAMScript.call(targetSequence.search, targetSequence, [/./]);
  var v286 = v619 != -1;
  if(v286) {
    targetSequence = targetSequence.match(/./g)
  }
  var v620 = JAMScript.call(querySequence.search, querySequence, [/./]);
  var v287 = v620 != -1;
  if(v287) {
    querySequence = querySequence.match(/./g)
  }
  var v621 = targetSequence.length;
  var v288 = v621 == 0;
  if(v288) {
    alert("The sequence contains no protein residues.");
    return false
  }
  var v622 = querySequence.length;
  var v289 = v622 == 0;
  if(v289) {
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
  var v294 = matrix == "pam30";
  if(v294) {
    scoringMatrix = new Pam30
  }else {
    var v293 = matrix == "pam70";
    if(v293) {
      scoringMatrix = new Pam70
    }else {
      var v292 = matrix == "blosum80";
      if(v292) {
        scoringMatrix = new Blosum80
      }else {
        var v291 = matrix == "blosum62";
        if(v291) {
          scoringMatrix = new Blosum62
        }else {
          var v290 = matrix == "blosum45";
          if(v290) {
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
  var v623 = hits.length;
  var v307 = v623 > 0;
  if(v307) {
    var i$$11 = 0;
    var v624 = hits.length;
    var v305 = i$$11 < v624;
    for(;v305;) {
      var v295 = outputWindow.document;
      var v1149 = ">" + queryTitle$$1;
      var v1113 = v1149 + " from ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1150 = hits[i$$11]
      }
      var v1114 = v1150.startM;
      var v1024 = v1113 + v1114;
      var v841 = v1024 + " to ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1025 = hits[i$$11]
      }
      var v842 = v1025.endM;
      var v625 = v841 + v842;
      var v296 = v625 + "\n";
      JAMScript.call(v295.write, v295, [v296]);
      var v297 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v843 = hits[i$$11]
      }
      var v626 = v843.sequenceM;
      var v298 = v626 + "\n";
      JAMScript.call(v297.write, v297, [v298]);
      var v299 = outputWindow.document;
      var v1151 = ">" + targetTitle$$1;
      var v1115 = v1151 + " from ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1152 = hits[i$$11]
      }
      var v1116 = v1152.startN;
      var v1026 = v1115 + v1116;
      var v844 = v1026 + " to ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1027 = hits[i$$11]
      }
      var v845 = v1027.endN;
      var v627 = v844 + v845;
      var v300 = v627 + "\n";
      JAMScript.call(v299.write, v299, [v300]);
      var v301 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v846 = hits[i$$11]
      }
      var v628 = v846.sequenceN;
      var v302 = v628 + "\n";
      JAMScript.call(v301.write, v301, [v302]);
      var v303 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1028 = hits[i$$11]
      }
      var v847 = v1028.score;
      var v629 = "Score: " + v847;
      var v304 = v629 + "\n\n";
      JAMScript.call(v303.write, v303, [v304]);
      i$$11 = i$$11 + 1;
      var v630 = hits.length;
      v305 = i$$11 < v630
    }
  }else {
    var v306 = outputWindow.document;
    JAMScript.call(v306.write, v306, ["No hits were obtained.\n\n"])
  }
  return
}
function getScore(r1$$1, r2) {
  var v308 = this.scoringMatrix;
  return JAMScript.call(v308.scoringMatrix_getScore, v308, [r1$$1, r2])
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
  var v848 = this.scoreHash;
  var v849 = r1$$2 + r2$$1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v631 = v848[v849]
  }
  var v312 = v631 == null;
  if(v312) {
    var v850 = "Unrecognized residue pair: " + r1$$2;
    var v632 = v850 + ", ";
    var v309 = v632 + r2$$1;
    throw v309 + ".";
  }else {
    var v310 = this.scoreHash;
    var v311 = r1$$2 + r2$$1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      return v310[v311]
    }
  }
  return
}
function scoringMatrix_fillHash(matrix$$1) {
  var v313 = matrix$$1[0];
  var cols = v313.split(/\s+/);
  var cells;
  var i$$12 = 1;
  var v633 = matrix$$1.length;
  var v318 = i$$12 < v633;
  for(;v318;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v314 = matrix$$1[i$$12]
    }
    cells = v314.split(/\s+/);
    var j$$10 = 1;
    var v851 = cols.length;
    var v634 = v851 + 1;
    var v317 = j$$10 < v634;
    for(;v317;) {
      var v315 = this.scoreHash;
      var v852 = cells[0];
      var v635 = v852.toLowerCase();
      var v1029 = j$$10 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v853 = cols[v1029]
      }
      var v636 = v853.toLowerCase();
      var v316 = v635 + v636;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v637 = cells[j$$10]
      }
      var v1245 = parseInt(v637);
      JAMScript.set(v315, v316, v1245, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
      j$$10 = j$$10 + 1;
      var v854 = cols.length;
      var v638 = v854 + 1;
      v317 = j$$10 < v638
    }
    i$$12 = i$$12 + 1;
    var v639 = matrix$$1.length;
    v318 = i$$12 < v639
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
  var v855 = this.M;
  var v640 = v855.length;
  var v319 = v640 + 1;
  var v1246 = new Array(v319);
  this.nodes = v1246;
  var i$$13 = 0;
  var v856 = this.nodes;
  var v641 = v856.length;
  var v325 = i$$13 < v641;
  for(;v325;) {
    var v320 = this.nodes;
    var v321 = i$$13;
    var v1030 = this.N;
    var v857 = v1030.length;
    var v642 = v857 + 1;
    var v1247 = new Array(v642);
    v320[v321] = v1247;
    var j$$11 = 0;
    var v1031 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v858 = v1031[i$$13]
    }
    var v643 = v858.length;
    var v324 = j$$11 < v643;
    for(;v324;) {
      var v644 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v322 = v644[i$$13]
      }
      var v323 = j$$11;
      var v1248 = new Node;
      v322[v323] = v1248;
      j$$11 = j$$11 + 1;
      var v1032 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v859 = v1032[i$$13]
      }
      var v645 = v859.length;
      v324 = j$$11 < v645
    }
    i$$13 = i$$13 + 1;
    var v860 = this.nodes;
    var v646 = v860.length;
    v325 = i$$13 < v646
  }
  var v861 = this.nodes;
  var v647 = v861[0];
  var v326 = v647[0];
  v326.value = 0;
  i$$13 = 1;
  var v862 = this.nodes;
  var v648 = v862.length;
  var v330 = i$$13 < v648;
  for(;v330;) {
    var v863 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v649 = v863[i$$13]
    }
    var v327 = v649[0];
    var v1033 = this.nodes;
    var v1034 = i$$13 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v864 = v1033[v1034]
    }
    var v650 = v864[0];
    v327.value = v650.value;
    var v865 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v651 = v865[i$$13]
    }
    var v328 = v651[0];
    v328.tracebackI = i$$13 - 1;
    var v866 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v652 = v866[i$$13]
    }
    var v329 = v652[0];
    v329.tracebackJ = 0;
    i$$13 = i$$13 + 1;
    var v867 = this.nodes;
    var v653 = v867.length;
    v330 = i$$13 < v653
  }
  j$$11 = 1;
  var v1035 = this.nodes;
  var v868 = v1035[0];
  var v654 = v868.length;
  var v334 = j$$11 < v654;
  for(;v334;) {
    var v869 = this.nodes;
    var v655 = v869[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v331 = v655[j$$11]
    }
    var v1036 = this.nodes;
    var v870 = v1036[0];
    var v871 = j$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v656 = v870[v871]
    }
    v331.value = v656.value;
    var v872 = this.nodes;
    var v657 = v872[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v332 = v657[j$$11]
    }
    v332.tracebackI = 0;
    var v873 = this.nodes;
    var v658 = v873[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v333 = v658[j$$11]
    }
    v333.tracebackJ = j$$11 - 1;
    j$$11 = j$$11 + 1;
    var v1037 = this.nodes;
    var v874 = v1037[0];
    var v659 = v874.length;
    v334 = j$$11 < v659
  }
  return
}
function dumpMatrix() {
  var v335 = outputWindow.document;
  var v1117 = this.nodes;
  var v1038 = v1117.length;
  var v875 = "Dynamic programming matrix i=" + v1038;
  var v660 = v875 + " and j=";
  var v1039 = this.nodes;
  var v876 = v1039[0];
  var v661 = v876.length;
  var v336 = v660 + v661;
  JAMScript.call(v335.write, v335, [v336]);
  var v337 = outputWindow.document;
  JAMScript.call(v337.write, v337, ["\n"]);
  var i$$14 = 0;
  var v877 = this.nodes;
  var v662 = v877.length;
  var v348 = i$$14 < v662;
  for(;v348;) {
    var j$$12 = 0;
    var v1040 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v878 = v1040[i$$14]
    }
    var v663 = v878.length;
    var v346 = j$$12 < v663;
    for(;v346;) {
      var v879 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v664 = v879[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v338 = v664[j$$12]
      }
      var traceI = v338.tracebackI;
      var v880 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v665 = v880[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v339 = v665[j$$12]
      }
      var traceJ = v339.tracebackJ;
      var v340 = traceI == undefined;
      if(v340) {
        traceI = "u"
      }
      var v341 = traceJ == undefined;
      if(v341) {
        traceJ = "u"
      }
      var v1187 = "(" + i$$14;
      var v1173 = v1187 + ",";
      var v1153 = v1173 + j$$12;
      var v1118 = v1153 + ")[";
      var v1041 = v1118 + traceI;
      var v881 = v1041 + ",";
      var v666 = v881 + traceJ;
      var v342 = v666 + "]=";
      var v1042 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v882 = v1042[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v667 = v882[j$$12]
      }
      var v343 = v667.value;
      var output = v342 + v343;
      var v344 = outputWindow.document;
      var v345 = rightNum(output, "", 20, " ");
      JAMScript.call(v344.write, v344, [v345]);
      j$$12 = j$$12 + 1;
      var v1043 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v883 = v1043[i$$14]
      }
      var v668 = v883.length;
      v346 = j$$12 < v668
    }
    var v347 = outputWindow.document;
    JAMScript.call(v347.write, v347, ["\n"]);
    i$$14 = i$$14 + 1;
    var v884 = this.nodes;
    var v669 = v884.length;
    v348 = i$$14 < v669
  }
  var v349 = outputWindow.document;
  JAMScript.call(v349.write, v349, ["\n"]);
  return
}
function updateMatrix() {
  var i$$15 = 1;
  var v885 = this.nodes;
  var v670 = v885.length;
  var v390 = i$$15 < v670;
  for(;v390;) {
    var j$$13 = 1;
    var v1044 = this.nodes;
    var v886 = v1044[0];
    var v671 = v886.length;
    var v389 = j$$13 < v671;
    for(;v389;) {
      var a;
      var b;
      var c;
      var v1045 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v887 = v1045[i$$15]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v672 = v887[j$$13]
      }
      var v373 = v672.alreadyMatched;
      if(v373) {
        a = 0;
        b = 0;
        c = 0
      }else {
        var v1119 = this.nodes;
        var v1046 = v1119.length;
        var v888 = v1046 - 1;
        var v673 = i$$15 == v888;
        if(v673) {
          var v1154 = this.nodes;
          var v1120 = v1154[0];
          var v1047 = v1120.length;
          var v889 = v1047 - 1;
          v673 = j$$13 == v889
        }
        var v372 = v673;
        if(v372) {
          var v890 = this.nodes;
          var v891 = i$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v674 = v890[v891]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v350 = v674[j$$13]
          }
          a = v350.value;
          var v892 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v675 = v892[i$$15]
          }
          var v676 = j$$13 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v351 = v675[v676]
          }
          b = v351.value;
          var v1048 = this.nodes;
          var v1049 = i$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v893 = v1048[v1049]
          }
          var v894 = j$$13 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v677 = v893[v894]
          }
          var v352 = v677.value;
          var v678 = this.scoreSet;
          var v895 = this.M;
          var v896 = i$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v679 = v895[v896]
          }
          var v897 = this.N;
          var v898 = j$$13 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v680 = v897[v898]
          }
          var v353 = JAMScript.call(v678.getScore, v678, [v679, v680]);
          c = v352 + v353
        }else {
          var v1050 = this.nodes;
          var v899 = v1050.length;
          var v681 = v899 - 1;
          var v371 = i$$15 == v681;
          if(v371) {
            var v1051 = this.nodes;
            var v1052 = i$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v900 = v1051[v1052]
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v682 = v900[j$$13]
            }
            var v354 = v682.value;
            var v683 = this.scoreSet;
            var v355 = v683.gap;
            a = v354 - v355;
            var v901 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v684 = v901[i$$15]
            }
            var v685 = j$$13 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v356 = v684[v685]
            }
            b = v356.value;
            var v1053 = this.nodes;
            var v1054 = i$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v902 = v1053[v1054]
            }
            var v903 = j$$13 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v686 = v902[v903]
            }
            var v357 = v686.value;
            var v687 = this.scoreSet;
            var v904 = this.M;
            var v905 = i$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v688 = v904[v905]
            }
            var v906 = this.N;
            var v907 = j$$13 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v689 = v906[v907]
            }
            var v358 = JAMScript.call(v687.getScore, v687, [v688, v689]);
            c = v357 + v358
          }else {
            var v1121 = this.nodes;
            var v1055 = v1121[0];
            var v908 = v1055.length;
            var v690 = v908 - 1;
            var v370 = j$$13 == v690;
            if(v370) {
              var v909 = this.nodes;
              var v910 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v691 = v909[v910]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v359 = v691[j$$13]
              }
              a = v359.value;
              var v1056 = this.nodes;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v911 = v1056[i$$15]
              }
              var v912 = j$$13 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v692 = v911[v912]
              }
              var v360 = v692.value;
              var v693 = this.scoreSet;
              var v361 = v693.gap;
              b = v360 - v361;
              var v1057 = this.nodes;
              var v1058 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v913 = v1057[v1058]
              }
              var v914 = j$$13 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v694 = v913[v914]
              }
              var v362 = v694.value;
              var v695 = this.scoreSet;
              var v915 = this.M;
              var v916 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v696 = v915[v916]
              }
              var v917 = this.N;
              var v918 = j$$13 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v697 = v917[v918]
              }
              var v363 = JAMScript.call(v695.getScore, v695, [v696, v697]);
              c = v362 + v363
            }else {
              var v1059 = this.nodes;
              var v1060 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v919 = v1059[v1060]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v698 = v919[j$$13]
              }
              var v364 = v698.value;
              var v699 = this.scoreSet;
              var v365 = v699.gap;
              a = v364 - v365;
              var v1061 = this.nodes;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v920 = v1061[i$$15]
              }
              var v921 = j$$13 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v700 = v920[v921]
              }
              var v366 = v700.value;
              var v701 = this.scoreSet;
              var v367 = v701.gap;
              b = v366 - v367;
              var v1062 = this.nodes;
              var v1063 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v922 = v1062[v1063]
              }
              var v923 = j$$13 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v702 = v922[v923]
              }
              var v368 = v702.value;
              var v703 = this.scoreSet;
              var v924 = this.M;
              var v925 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v704 = v924[v925]
              }
              var v926 = this.N;
              var v927 = j$$13 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v705 = v926[v927]
              }
              var v369 = JAMScript.call(v703.getScore, v703, [v704, v705]);
              c = v368 + v369
            }
          }
        }
      }
      var v706 = a > b;
      if(v706) {
        v706 = a > c
      }
      var v384 = v706;
      if(v384) {
        var v928 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v707 = v928[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v374 = v707[j$$13]
        }
        v374.value = a;
        var v929 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v708 = v929[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v375 = v708[j$$13]
        }
        v375.tracebackI = i$$15 - 1;
        var v930 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v709 = v930[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v376 = v709[j$$13]
        }
        v376.tracebackJ = j$$13
      }else {
        var v710 = b > c;
        if(v710) {
          v710 = b > a
        }
        var v383 = v710;
        if(v383) {
          var v931 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v711 = v931[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v377 = v711[j$$13]
          }
          v377.value = b;
          var v932 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v712 = v932[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v378 = v712[j$$13]
          }
          v378.tracebackI = i$$15;
          var v933 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v713 = v933[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v379 = v713[j$$13]
          }
          v379.tracebackJ = j$$13 - 1
        }else {
          var v934 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v714 = v934[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v380 = v714[j$$13]
          }
          v380.value = c;
          var v935 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v715 = v935[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v381 = v715[j$$13]
          }
          v381.tracebackI = i$$15 - 1;
          var v936 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v716 = v936[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v382 = v716[j$$13]
          }
          v382.tracebackJ = j$$13 - 1
        }
      }
      var v1122 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1064 = v1122[i$$15]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v937 = v1064[j$$13]
      }
      var v717 = v937.value;
      var v388 = v717 < 0;
      if(v388) {
        var v938 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v718 = v938[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v385 = v718[j$$13]
        }
        v385.value = 0;
        var v939 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v719 = v939[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v386 = v719[j$$13]
        }
        v386.tracebackI = undefined;
        var v940 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v720 = v940[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v387 = v720[j$$13]
        }
        v387.tracebackJ = undefined
      }
      j$$13 = j$$13 + 1;
      var v1065 = this.nodes;
      var v941 = v1065[0];
      var v721 = v941.length;
      v389 = j$$13 < v721
    }
    i$$15 = i$$15 + 1;
    var v942 = this.nodes;
    var v722 = v942.length;
    v390 = i$$15 < v722
  }
  var v943 = this.nodes;
  var v1123 = this.nodes;
  var v1066 = v1123.length;
  var v944 = v1066 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v723 = v943[v944]
  }
  var v1124 = this.nodes;
  var v1067 = v1124[0];
  var v945 = v1067.length;
  var v724 = v945 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v391 = v723[v724]
  }
  this.score = v391.value;
  return
}
function search() {
  var v1249 = new Array;
  this.hits = v1249;
  var hitCount = 0;
  var v946 = this.scoreSet;
  var v725 = v946.hits;
  var v415 = hitCount < v725;
  for(;v415;) {
    JAMScript.call(this.updateMatrix, this, []);
    var maxNodeValue = 0;
    var maxNodeI = undefined;
    var maxNodeJ = undefined;
    var i$$16 = 1;
    var v947 = this.nodes;
    var v726 = v947.length;
    var v395 = i$$16 < v726;
    for(;v395;) {
      var j$$14 = 1;
      var v1068 = this.nodes;
      var v948 = v1068[0];
      var v727 = v948.length;
      var v394 = j$$14 < v727;
      for(;v394;) {
        var v1125 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1069 = v1125[i$$16]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v949 = v1069[j$$14]
        }
        var v728 = v949.value;
        var v393 = v728 > maxNodeValue;
        if(v393) {
          var v950 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v729 = v950[i$$16]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v392 = v729[j$$14]
          }
          maxNodeValue = v392.value;
          maxNodeI = i$$16;
          maxNodeJ = j$$14
        }
        j$$14 = j$$14 + 1;
        var v1070 = this.nodes;
        var v951 = v1070[0];
        var v730 = v951.length;
        v394 = j$$14 < v730
      }
      i$$16 = i$$16 + 1;
      var v952 = this.nodes;
      var v731 = v952.length;
      v395 = i$$16 < v731
    }
    var v396 = maxNodeValue == 0;
    if(v396) {
      break
    }
    var currentI = maxNodeI;
    var currentJ = maxNodeJ;
    var v732 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v397 = v732[maxNodeI]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var currentNode = v397[maxNodeJ]
    }
    var alignedM = new Array;
    var alignedN = new Array;
    var score = currentNode.value;
    var endM = undefined;
    var endN = undefined;
    var v953 = currentNode.tracebackI;
    var v733 = v953 != undefined;
    if(v733) {
      var v954 = currentNode.tracebackJ;
      v733 = v954 != undefined
    }
    var v412 = v733;
    for(;v412;) {
      var v734 = currentI == 0;
      var v955 = !v734;
      if(v955) {
        v734 = currentJ == 0
      }
      var v398 = v734;
      if(v398) {
        break
      }
      var v956 = currentNode.tracebackI;
      var v957 = currentI - 1;
      var v735 = v956 == v957;
      if(v735) {
        var v958 = currentNode.tracebackJ;
        var v959 = currentJ - 1;
        v735 = v958 == v959
      }
      var v407 = v735;
      if(v407) {
        var v399 = endM == undefined;
        if(v399) {
          endM = currentI;
          endN = currentJ
        }
        var v736 = this.M;
        var v737 = currentI - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v400 = v736[v737]
        }
        alignedM.push(v400);
        var v738 = this.N;
        var v739 = currentJ - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v401 = v738[v739]
        }
        alignedN.push(v401)
      }else {
        var v740 = currentNode.tracebackJ;
        var v741 = currentJ - 1;
        var v406 = v740 == v741;
        if(v406) {
          var v403 = endM != undefined;
          if(v403) {
            alignedM.push("-");
            var v742 = this.N;
            var v743 = currentJ - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v402 = v742[v743]
            }
            alignedN.push(v402)
          }
        }else {
          var v405 = endM != undefined;
          if(v405) {
            var v744 = this.M;
            var v745 = currentI - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v404 = v744[v745]
            }
            alignedM.push(v404);
            alignedN.push("-")
          }
        }
      }
      var v960 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v746 = v960[currentI]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v408 = v746[currentJ]
      }
      v408.value = 0;
      var v961 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v747 = v961[currentI]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v409 = v747[currentJ]
      }
      v409.alreadyMatched = true;
      currentI = currentNode.tracebackI;
      currentJ = currentNode.tracebackJ;
      var v748 = this.nodes;
      var v749 = currentNode.tracebackI;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v410 = v748[v749]
      }
      var v411 = currentNode.tracebackJ;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        currentNode = v410[v411]
      }
      var v962 = currentNode.tracebackI;
      var v750 = v962 != undefined;
      if(v750) {
        var v963 = currentNode.tracebackJ;
        v750 = v963 != undefined
      }
      v412 = v750
    }
    alignedM = alignedM.reverse();
    alignedN = alignedN.reverse();
    var v413 = this.hits;
    var v751 = alignedM.join("");
    var v752 = alignedN.join("");
    var v753 = currentI + 1;
    var v754 = currentJ + 1;
    var v414 = new Hit(v751, v752, score, v753, endM, v754, endN);
    v413.push(v414);
    hitCount = hitCount + 1;
    var v964 = this.scoreSet;
    var v755 = v964.hits;
    v415 = hitCount < v755
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
var v416 = ScoreSet.prototype;
v416.getScore = getScore;
var v417 = ScoreSet.prototype;
v417.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v418 = ScoringMatrix.prototype;
v418.scoringMatrix_getScore = scoringMatrix_getScore;
var v419 = ScoringMatrix.prototype;
v419.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v420 = Blosum62;
var v1250 = new ScoringMatrix;
v420.prototype = v1250;
var v421 = Blosum45;
var v1251 = new ScoringMatrix;
v421.prototype = v1251;
var v422 = Blosum80;
var v1252 = new ScoringMatrix;
v422.prototype = v1252;
var v423 = Pam30;
var v1253 = new ScoringMatrix;
v423.prototype = v1253;
new FuzzySearch;
var v424 = FuzzySearch.prototype;
v424.initializeMatrix = initializeMatrix;
var v425 = FuzzySearch.prototype;
v425.updateMatrix = updateMatrix;
var v426 = FuzzySearch.prototype;
v426.search = search;
var v427 = FuzzySearch.prototype;
v427.getHits = getHits;
var v428 = FuzzySearch.prototype;
v428.dumpMatrix = dumpMatrix;
JAMScript.set(document, "onload", v2);
var v429 = document.getElementById("submitbtn");
JAMScript.set(v429, "onclick", v3);
var v430 = document.getElementById("clearbtn");
JAMScript.set(v430, "onclick", v4);

