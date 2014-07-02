function v4() {
  var v936 = document.forms;
  var v732 = v936[0];
  var v416 = v732.elements;
  var v5 = v416[0];
  v5.value = " ";
  var v937 = document.forms;
  var v733 = v937[0];
  var v417 = v733.elements;
  var v6 = v417[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    fuzzySearchDna(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v2() {
  var v418 = document.main_form;
  var v8 = v418.main_submit;
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
  var v419 = arrayOfSequences.length;
  var v10 = v419 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v420 = arrayOfTitles.length;
  var v12 = i$$1 < v420;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v938 = arrayOfTitles[i$$1]
    }
    var v734 = JAMScript.call(v938.search, v938, [/\S/]);
    var v421 = v734 == -1;
    var v736 = !v421;
    if(v736) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1043 = arrayOfSequences[i$$1]
      }
      var v939 = JAMScript.call(v1043.search, v1043, [/\S/]);
      var v735 = v939 == -1;
      var v941 = !v735;
      if(v941) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1044 = arrayOfSequences[i$$1]
        }
        var v940 = v1044.length;
        v735 = v940 != lengthOfAlign
      }
      v421 = v735
    }
    var v11 = v421;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v422 = arrayOfTitles.length;
    v12 = i$$1 < v422
  }
  return true
}
function checkCodonTable(codonTable) {
  var v737 = JAMScript.call(codonTable.search, codonTable, [/AmAcid/]);
  var v423 = v737 == -1;
  var v739 = !v423;
  if(v739) {
    var v942 = JAMScript.call(codonTable.search, codonTable, [/Codon/]);
    var v738 = v942 == -1;
    var v944 = !v738;
    if(v944) {
      var v1045 = JAMScript.call(codonTable.search, codonTable, [/Number/]);
      var v943 = v1045 == -1;
      var v1047 = !v943;
      if(v1047) {
        var v1100 = JAMScript.call(codonTable.search, codonTable, [/\/1000/]);
        var v1046 = v1100 == -1;
        var v1102 = !v1046;
        if(v1102) {
          var v1101 = JAMScript.call(codonTable.search, codonTable, [/Fraction\s*\.\./]);
          v1046 = v1101 == -1
        }
        v943 = v1046
      }
      v738 = v943
    }
    v423 = v738
  }
  var v13 = v423;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v740 = formElement.value;
  var v424 = JAMScript.call(v740.search, v740, [/\S/]);
  var v14 = v424 == -1;
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
  var v425 = arrayOfPatterns.length;
  var v17 = z$$2 < v425;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v741 = arrayOfPatterns[z$$2]
    }
    var v426 = JAMScript.call(v741.search, v741, [/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/]);
    var v15 = v426 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v742 = arrayOfPatterns[z$$2]
    }
    var v427 = moreExpressionCheck(v742);
    var v16 = v427 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v428 = arrayOfPatterns.length;
    v17 = z$$2 < v428
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v429 = arrayOfPatterns.length;
  var v26 = j < v429;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v945 = arrayOfPatterns[j]
    }
    var v743 = JAMScript.call(v945.match, v945, [/\/.+\//]);
    var v430 = v743 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1219 = eval("introspect(JAMScript.introspectors.processAll) { " + v430 + " }")
    }else {
      var v1219 = JAMScript.call(eval, null, [v430])
    }
    v20[v21] = v1219;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v744 = arrayOfPatterns[j]
    }
    var v431 = JAMScript.call(v744.match, v744, [/=[a-zA-Z\*]/]);
    var v1220 = v431.toString();
    v22[v23] = v1220;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v432 = geneticCodeMatchResult[j]
    }
    var v1221 = v432.replace(/=/g, "");
    v24[v25] = v1221;
    j = j + 1;
    var v433 = arrayOfPatterns.length;
    v26 = j < v433
  }
  var i$$2 = 0;
  var v745 = testSequence.length;
  var v434 = v745 - 3;
  var v33 = i$$2 <= v434;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v435 = geneticCodeMatchExp.length;
    var v31 = j < v435;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v746 = geneticCodeMatchExp[j]
      }
      var v436 = JAMScript.call(codon.search, codon, [v746]);
      var v30 = v436 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v437 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v437 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v438 = geneticCodeMatchExp.length;
      v31 = j < v438
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v747 = testSequence.length;
    var v439 = v747 - 3;
    v33 = i$$2 <= v439
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v440 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v440;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v748 = arrayOfPatterns$$1[z$$3]
    }
    var v441 = JAMScript.call(v748.search, v748, [/[^acdefghiklmnpqrstvwyz]/i]);
    var v34 = v441 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v442 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v442
  }
  var i$$3 = 0;
  var v443 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v443;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v749 = arrayOfPatterns$$1[i$$3]
    }
    var v444 = "[" + v749;
    var v36 = v444 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v445 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v445;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v750 = arrayOfPatterns$$1[j$$1]
      }
      var v446 = JAMScript.call(v750.search, v750, [re]);
      var v37 = v446 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v447 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v447
    }
    i$$3 = i$$3 + 1;
    var v448 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v448
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v449 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v449;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v751 = arrayOfPatterns$$2[z$$4]
    }
    var v450 = JAMScript.call(v751.search, v751, [/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i]);
    var v40 = v450 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v752 = arrayOfPatterns$$2[z$$4]
    }
    var v451 = moreExpressionCheck(v752);
    var v41 = v451 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v452 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v452
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v946 = getSequenceFromFasta(text$$7);
  var v753 = v946.replace(/[^A-Za-z]/g, "");
  var v453 = v753.length;
  var v44 = v453 > maxInput;
  if(v44) {
    var v454 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v454 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v455 = text$$8.length;
  var v46 = v455 > maxInput$$1;
  if(v46) {
    var v456 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v456 + " characters.";
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
  var v457 = alignArray.length;
  var v53 = v457 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v458 = alignArray.length;
  var v55 = i$$4 < v458;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v754 = alignArray[i$$4]
    }
    var v459 = JAMScript.call(v754.search, v754, [/[^\s]+\s/]);
    var v54 = v459 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v460 = alignArray.length;
    v55 = i$$4 < v460
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
  var v461 = JAMScript.call(sequenceData.search, sequenceData, [/\>[^\f\n\r]+[\f\n\r]/]);
  var v58 = v461 != -1;
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
  var v462 = sequence$$2.length;
  var v59 = "&gt;results for " + v462;
  var stringToReturn = v59 + " residue sequence ";
  var v463 = JAMScript.call(fastaSequenceTitle.search, fastaSequenceTitle, [/[^\s]/]);
  var v61 = v463 != -1;
  if(v61) {
    var v464 = stringToReturn + '"';
    var v60 = v464 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v465 = stringToReturn + ' starting "';
  var v466 = sequence$$2.substring(0, 10);
  var v62 = v465 + v466;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v467 = sequenceOne.length;
  var v63 = "Search results for " + v467;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v468 = JAMScript.call(fastaSequenceTitleOne.search, fastaSequenceTitleOne, [/[^\s]/]);
  var v65 = v468 != -1;
  if(v65) {
    var v469 = stringToReturn$$1 + '"';
    var v64 = v469 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v470 = stringToReturn$$1 + ' starting "';
  var v471 = sequenceOne.substring(0, 10);
  var v66 = v470 + v471;
  stringToReturn$$1 = v66 + '"\n';
  var v472 = stringToReturn$$1 + "and ";
  var v473 = sequenceTwo.length;
  var v67 = v472 + v473;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v474 = JAMScript.call(fastaSequenceTitleTwo.search, fastaSequenceTitleTwo, [/[^\s]/]);
  var v69 = v474 != -1;
  if(v69) {
    var v475 = stringToReturn$$1 + '"';
    var v68 = v475 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v476 = stringToReturn$$1 + ' starting "';
  var v477 = sequenceTwo.substring(0, 10);
  var v70 = v476 + v477;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v478 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v478;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v947 = arrayOfPatterns$$3[j$$2]
    }
    var v755 = JAMScript.call(v947.match, v947, [/\/.+\//]);
    var v479 = v755 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1222 = eval("introspect(JAMScript.introspectors.processAll) { " + v479 + " }")
    }else {
      var v1222 = JAMScript.call(eval, null, [v479])
    }
    v73[v74] = v1222;
    j$$2 = j$$2 + 1;
    var v480 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v480
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v481 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v481;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v756 = arrayOfPatterns$$4[j$$3]
    }
    var v482 = JAMScript.call(v756.match, v756, [/=[a-zA-Z\*]/]);
    var v1223 = v482.toString();
    v77[v78] = v1223;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v483 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1224 = v483.replace(/=/g, "");
    v79[v80] = v1224;
    j$$3 = j$$3 + 1;
    var v484 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v484
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v485 = sequence$$3.length;
  var v82 = "Results for " + v485;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v486 = JAMScript.call(fastaSequenceTitle$$1.search, fastaSequenceTitle$$1, [/[^\s]/]);
  var v84 = v486 != -1;
  if(v84) {
    var v487 = stringToReturn$$2 + '"';
    var v83 = v487 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v488 = stringToReturn$$2 + ' starting "';
  var v489 = sequence$$3.substring(0, 10);
  var v85 = v488 + v489;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v757 = "Results for " + topology;
  var v490 = v757 + " ";
  var v491 = sequence$$4.length;
  var v87 = v490 + v491;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v492 = JAMScript.call(fastaSequenceTitle$$2.search, fastaSequenceTitle$$2, [/[^\s]/]);
  var v89 = v492 != -1;
  if(v89) {
    var v493 = stringToReturn$$3 + '"';
    var v88 = v493 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v494 = stringToReturn$$3 + ' starting "';
  var v495 = sequence$$4.substring(0, 10);
  var v90 = v494 + v495;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v496 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v496;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v497 = JAMScript.call(fastaSequenceTitleOne$$1.search, fastaSequenceTitleOne$$1, [/[^\s]/]);
  var v94 = v497 != -1;
  if(v94) {
    var v498 = stringToReturn$$4 + '"';
    var v93 = v498 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v499 = stringToReturn$$4 + ' starting "';
  var v500 = sequenceOne$$1.substring(0, 10);
  var v95 = v499 + v500;
  stringToReturn$$4 = v95 + '"\n';
  var v501 = stringToReturn$$4 + "and ";
  var v502 = sequenceTwo$$1.length;
  var v96 = v501 + v502;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v503 = JAMScript.call(fastaSequenceTitleTwo$$1.search, fastaSequenceTitleTwo$$1, [/[^\s]/]);
  var v98 = v503 != -1;
  if(v98) {
    var v504 = stringToReturn$$4 + '"';
    var v97 = v504 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v505 = stringToReturn$$4 + ' starting "';
  var v506 = sequenceTwo$$1.substring(0, 10);
  var v99 = v505 + v506;
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
    var v507 = Math.random();
    var v508 = components.length;
    var v101 = v507 * v508;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v509 = JAMScript.call(sequenceRecord.search, sequenceRecord, [/\>[^\f\n\r]+[\f\n\r]/]);
  var v103 = v509 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v510 = JAMScript.call(sequenceRecord$$1.search, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/]);
  var v105 = v510 != -1;
  if(v105) {
    var v104 = JAMScript.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""]);
    fastaTitle = v104.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v758 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\[/]);
  var v511 = v758 != -1;
  var v760 = !v511;
  if(v760) {
    var v948 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\][A-Za-z\|]*\]/]);
    var v759 = v948 != -1;
    var v950 = !v759;
    if(v950) {
      var v1048 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[\]/]);
      var v949 = v1048 != -1;
      var v1050 = !v949;
      if(v1050) {
        var v1103 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\/[A-Za-z\|]*\]/]);
        var v1049 = v1103 != -1;
        var v1105 = !v1049;
        if(v1105) {
          var v1131 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[[A-Za-z\|]*\//]);
          var v1104 = v1131 != -1;
          var v1133 = !v1104;
          if(v1133) {
            var v1154 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\|\|/]);
            var v1132 = v1154 != -1;
            var v1156 = !v1132;
            if(v1156) {
              var v1168 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\/\|/]);
              var v1155 = v1168 != -1;
              var v1170 = !v1155;
              if(v1170) {
                var v1180 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\|\//]);
                var v1169 = v1180 != -1;
                var v1182 = !v1169;
                if(v1182) {
                  var v1190 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\[.\]/]);
                  var v1181 = v1190 != -1;
                  var v1192 = !v1181;
                  if(v1192) {
                    var v1197 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\</]);
                    var v1191 = v1197 != -1;
                    var v1199 = !v1191;
                    if(v1199) {
                      var v1198 = JAMScript.call(expressionToCheck.search, expressionToCheck, [/\>/]);
                      v1191 = v1198 != -1
                    }
                    v1181 = v1191
                  }
                  v1169 = v1181
                }
                v1155 = v1169
              }
              v1132 = v1155
            }
            v1104 = v1132
          }
          v1049 = v1104
        }
        v949 = v1049
      }
      v759 = v949
    }
    v511 = v759
  }
  var v106 = v511;
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
    var v1230 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1230[2], v1230[1], v1230[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v951 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v761 = v951 + "<head>\n";
  var v512 = v761 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v512 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v1212 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1208 = v1212 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1204 = v1208 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1200 = v1204 + "div.info {font-weight: bold}\n";
    var v1193 = v1200 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1183 = v1193 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1171 = v1183 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1157 = v1171 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1134 = v1157 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1106 = v1134 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1051 = v1106 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v952 = v1051 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v762 = v952 + "td.many {color: #000000}\n";
    var v513 = v762 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v513 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v1216 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1213 = v1216 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1209 = v1213 + "div.title {display: none}\n";
    var v1205 = v1209 + "div.info {font-weight: bold}\n";
    var v1201 = v1205 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1194 = v1201 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1184 = v1194 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1172 = v1184 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1158 = v1172 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1135 = v1158 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1107 = v1135 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1052 = v1107 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v953 = v1052 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v763 = v953 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v514 = v763 + "img {display: none}\n";
    var v116 = v514 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v954 = "</head>\n" + '<body class="main">\n';
  var v764 = v954 + '<div class="title">';
  var v515 = v764 + title$$6;
  var v118 = v515 + " results</div>\n";
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
    var v1231 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1231[2], v1231[1], v1231[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v955 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v765 = v955 + "<head>\n";
  var v516 = v765 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v516 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v1214 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1210 = v1214 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1206 = v1210 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1202 = v1206 + "div.info {font-weight: bold}\n";
    var v1195 = v1202 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1185 = v1195 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1173 = v1185 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1159 = v1173 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1136 = v1159 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1108 = v1136 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1053 = v1108 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v956 = v1053 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v766 = v956 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v517 = v766 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v517 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v1218 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1217 = v1218 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1215 = v1217 + "div.title {display: none}\n";
    var v1211 = v1215 + "div.info {font-weight: bold}\n";
    var v1207 = v1211 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1203 = v1207 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1196 = v1203 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1186 = v1196 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1174 = v1186 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1160 = v1174 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1137 = v1160 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1109 = v1137 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1054 = v1109 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v957 = v1054 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v767 = v957 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v518 = v767 + "img {display: none}\n";
    var v124 = v518 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v958 = "</head>\n" + '<body class="main">\n';
  var v768 = v958 + '<div class="title">';
  var v519 = v768 + title$$8;
  var v126 = v519 + " results</div>\n";
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
  var v520 = JAMScript.call(dnaSequence$$1.search, dnaSequence$$1, [/./]);
  var v127 = v520 != -1;
  if(v127) {
    tempDnaArray = JAMScript.call(dnaSequence$$1.match, dnaSequence$$1, [/./g]);
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
  var v521 = testArray[0];
  var v131 = v521 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v522 = JAMScript.call(testString.search, testString, [re$$2]);
  var v132 = v522 == -1;
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
  var v523 = testNum.toFixed(3);
  var v135 = v523 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v524 = testNum.toPrecision(5);
  var v136 = v524 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v525 = JAMScript.call(theNumber$$1.search, theNumber$$1, [/\d/]);
  var v137 = v525 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v769 = JAMScript.call(emblFile.search, emblFile, [/ID/]);
  var v526 = v769 == -1;
  var v771 = !v526;
  if(v771) {
    var v959 = JAMScript.call(emblFile.search, emblFile, [/AC/]);
    var v770 = v959 == -1;
    var v961 = !v770;
    if(v961) {
      var v1055 = JAMScript.call(emblFile.search, emblFile, [/DE/]);
      var v960 = v1055 == -1;
      var v1057 = !v960;
      if(v1057) {
        var v1056 = JAMScript.call(emblFile.search, emblFile, [/SQ/]);
        v960 = v1056 == -1
      }
      v770 = v960
    }
    v526 = v770
  }
  var v138 = v526;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v527 = JAMScript.call(theNumber$$2.search, theNumber$$2, [/\d/]);
  var v139 = v527 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v528 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v528 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v529 = JAMScript.call(dnaSequence$$2.search, dnaSequence$$2, [/[^gatucryswkmbdhvnx\s]/i]);
  var v142 = v529 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v530 = JAMScript.call(proteinSequence.search, proteinSequence, [/[^acdefghiklmnpqrstvwyz\*\s]/i]);
  var v143 = v530 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v772 = JAMScript.call(genBankFile.search, genBankFile, [/LOCUS/]);
  var v531 = v772 == -1;
  var v774 = !v531;
  if(v774) {
    var v962 = JAMScript.call(genBankFile.search, genBankFile, [/DEFINITION/]);
    var v773 = v962 == -1;
    var v964 = !v773;
    if(v964) {
      var v1058 = JAMScript.call(genBankFile.search, genBankFile, [/ACCESSION/]);
      var v963 = v1058 == -1;
      var v1060 = !v963;
      if(v1060) {
        var v1059 = JAMScript.call(genBankFile.search, genBankFile, [/ORIGIN/]);
        v963 = v1059 == -1
      }
      v773 = v963
    }
    v531 = v773
  }
  var v144 = v531;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v775 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/LOCUS/]);
  var v532 = v775 == -1;
  var v777 = !v532;
  if(v777) {
    var v965 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/DEFINITION/]);
    var v776 = v965 == -1;
    var v967 = !v776;
    if(v967) {
      var v1061 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/ACCESSION/]);
      var v966 = v1061 == -1;
      var v1063 = !v966;
      if(v1063) {
        var v1062 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/ORIGIN/]);
        v966 = v1062 == -1
      }
      v776 = v966
    }
    v532 = v776
  }
  var v145 = v532;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v533 = JAMScript.call(genBankFile$$1.search, genBankFile$$1, [/FEATURES {13}/]);
  var v146 = v533 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v778 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/ID/]);
  var v534 = v778 == -1;
  var v780 = !v534;
  if(v780) {
    var v968 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/AC/]);
    var v779 = v968 == -1;
    var v970 = !v779;
    if(v970) {
      var v1064 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/DE/]);
      var v969 = v1064 == -1;
      var v1066 = !v969;
      if(v1066) {
        var v1065 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/SQ/]);
        v969 = v1065 == -1
      }
      v779 = v969
    }
    v534 = v779
  }
  var v147 = v534;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v535 = JAMScript.call(emblFile$$1.search, emblFile$$1, [/^FT/m]);
  var v148 = v535 == -1;
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
    var v536 = basePerLine / groupSize;
    var v153 = j$$6 <= v536;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v537 = k + i$$5;
        var v151 = text$$10.charAt(v537);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v538 = basePerLine / groupSize;
      v153 = j$$6 <= v538
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
    var v539 = adjustment < 0;
    if(v539) {
      v539 = adjusted >= 0
    }
    var v157 = v539;
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
    var v540 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v540;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v541 = i$$6 + k$$1;
        var v158 = v541 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v542 = k$$1 + i$$6;
        var v160 = text$$12.charAt(v542);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v543 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v543, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v544 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v544
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v971 = adjustNumbering(lineNum, numberingAdjustment);
      var v781 = rightNum(v971, "", 8, tabIn$$3);
      var v545 = v781 + lineOfText$$1;
      var v168 = v545 + "\n";
      JAMScript.call(v167.write, v167, [v168]);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v972 = adjustNumbering(lineNum, numberingAdjustment);
        var v782 = rightNum(v972, "", 8, tabIn$$3);
        var v783 = complement(lineOfText$$1);
        var v546 = v782 + v783;
        var v170 = v546 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v171 = outputWindow.document;
        JAMScript.call(v171.write, v171, ["\n"])
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v784 = lineOfText$$1;
        var v785 = adjustNumbering(i$$6, numberingAdjustment);
        var v547 = v784 + v785;
        var v174 = v547 + "\n";
        JAMScript.call(v173.write, v173, [v174]);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v786 = complement(lineOfText$$1);
          var v787 = adjustNumbering(i$$6, numberingAdjustment);
          var v548 = v786 + v787;
          var v176 = v548 + "\n";
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
            var v549 = complement(lineOfText$$1);
            var v184 = v549 + "\n";
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
    var v550 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v550;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v551 = i$$7 + k$$2;
        var v191 = v551 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v552 = k$$2 + i$$7;
        var v193 = text$$13.charAt(v552);
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
      var v553 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v553
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v788 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v554 = v788 + lineOfText$$2;
      var v201 = v554 + "\n";
      JAMScript.call(v200.write, v200, [v201])
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v555 = lineOfText$$2 + i$$7;
        var v203 = v555 + "\n";
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
  var v789 = sequence$$13.length;
  var v556 = v789 <= firstIndexToMutate;
  var v791 = !v556;
  if(v791) {
    var v790 = lastIndexToMutate < 0;
    var v973 = !v790;
    if(v973) {
      v790 = lastIndexToMutate <= firstIndexToMutate
    }
    v556 = v790
  }
  var v212 = v556;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v557 = Math.random();
    var v213 = v557 * maxNum;
    randNum = Math.floor(v213);
    var v558 = randNum < firstIndexToMutate;
    var v792 = !v558;
    if(v792) {
      v558 = randNum > lastIndexToMutate
    }
    var v214 = v558;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v559 = Math.random();
      var v560 = components$$1.length;
      var v215 = v559 * v560;
      componentsIndex = Math.round(v215);
      var v561 = components$$1.length;
      var v216 = componentsIndex == v561;
      if(v216) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v562 = components$$1[componentsIndex]
      }
      var v217 = v562 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v563 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v564 = components$$1[componentsIndex]
    }
    var v218 = v563 + v564;
    var v565 = randNum + 1;
    var v566 = sequence$$13.length;
    var v219 = sequence$$13.substring(v565, v566);
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
    var v567 = Math.random();
    var v568 = components$$2.length;
    var v223 = v567 * v568;
    tempNum$$1 = Math.floor(v223);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v569 = sequence$$14.length;
    var v226 = v569 == 60;
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
    var v974 = sequence$$15.length;
    var v793 = v974 - lookAhead;
    var v794 = sequence$$15.length;
    var v570 = sequence$$15.substring(v793, v794);
    var v231 = v570 + sequence$$15;
    var v232 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAMScript.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v235 = outputWindow.document;
  var v975 = '<tr><td class="title" width="200px">' + "Site:";
  var v795 = v975 + '</td><td class="title">';
  var v571 = v795 + "Positions:";
  var v236 = v571 + "</td></tr>\n";
  JAMScript.call(v235.write, v235, [v236]);
  var i$$9 = 0;
  var v572 = arrayOfItems.length;
  var v252 = i$$9 < v572;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v573 = arrayOfItems[i$$9]
    }
    var v237 = JAMScript.call(v573.match, v573, [/\/.+\//]);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v976 = arrayOfItems[i$$9]
    }
    var v796 = JAMScript.call(v976.match, v976, [/\)\D*\d+/]);
    var v574 = v796.toString();
    var v238 = v574.replace(/\)\D*/, "");
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v575 = matchPosition >= lowerLimit;
      if(v575) {
        v575 = matchPosition < upperLimit
      }
      var v242 = v575;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v576 = matchPosition - shiftValue;
        var v241 = v576 + 1;
        tempString$$1 = v240 + v241
      }
      var v577 = matchExp.lastIndex;
      var v797 = RegExp.lastMatch;
      var v578 = v797.length;
      var v243 = v577 - v578;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v579 = JAMScript.call(tempString$$1.search, tempString$$1, [/\d/]);
    var v245 = v579 != -1;
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
    var v1161 = '<tr><td class="' + backGroundClass;
    var v1138 = v1161 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1187 = arrayOfItems[i$$9]
    }
    var v1175 = JAMScript.call(v1187.match, v1187, [/\([^\(]+\)/]);
    var v1162 = v1175.toString();
    var v1139 = v1162.replace(/\(|\)/g, "");
    var v1110 = v1138 + v1139;
    var v1067 = v1110 + '</td><td class="';
    var v977 = v1067 + backGroundClass;
    var v798 = v977 + '">';
    var v580 = v798 + tempString$$1;
    var v251 = v580 + "</td></tr>\n";
    JAMScript.call(v250.write, v250, [v251]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v581 = arrayOfItems.length;
    v252 = i$$9 < v581
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
  var v1111 = '<tr><td class="title">' + "Pattern:";
  var v1068 = v1111 + '</td><td class="title">';
  var v978 = v1068 + "Times found:";
  var v799 = v978 + '</td><td class="title">';
  var v582 = v799 + "Percentage:";
  var v256 = v582 + "</td></tr>\n";
  JAMScript.call(v255.write, v255, [v256]);
  var i$$10 = 0;
  var v583 = arrayOfItems$$1.length;
  var v265 = i$$10 < v583;
  for(;v265;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v584 = arrayOfItems$$1[i$$10]
    }
    var v257 = JAMScript.call(v584.match, v584, [/\/[^\/]+\//]);
    var matchExp$$1 = v257 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v585 = JAMScript.call(sequence$$16.search, sequence$$16, [matchExp$$1]);
    var v259 = v585 != -1;
    if(v259) {
      var v258 = JAMScript.call(sequence$$16.match, sequence$$16, [matchExp$$1]);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v800 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1069 = arrayOfItems$$1[i$$10]
    }
    var v979 = JAMScript.call(v1069.match, v1069, [/\d+/]);
    var v801 = parseFloat(v979);
    var v586 = v800 - v801;
    var v262 = v586 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v587 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v980 = arrayOfItems$$1[i$$10]
      }
      var v802 = JAMScript.call(v980.match, v980, [/\d+/]);
      var v588 = parseFloat(v802);
      var v261 = v587 - v588;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1188 = arrayOfItems$$1[i$$10]
    }
    var v1176 = JAMScript.call(v1188.match, v1188, [/\([^\(]+\)\b/]);
    var v1163 = v1176.toString();
    var v1140 = v1163.replace(/\(|\)/g, "");
    var v1112 = "<tr><td>" + v1140;
    var v1070 = v1112 + "</td><td>";
    var v981 = v1070 + tempNumber;
    var v803 = v981 + "</td><td>";
    var v804 = percentage.toFixed(2);
    var v589 = v803 + v804;
    var v264 = v589 + "</td></tr>\n";
    JAMScript.call(v263.write, v263, [v264]);
    i$$10 = i$$10 + 1;
    var v590 = arrayOfItems$$1.length;
    v265 = i$$10 < v590
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
  var v591 = sequence$$17.length;
  var v273 = v591 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v592 = Math.random();
    var v267 = v592 * maxNum$$1;
    randNum$$1 = Math.floor(v267);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v268, v269);
    sequence$$17 = tempString1 + tempString2;
    var v593 = tempSeq.length;
    var v272 = v593 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAMScript.call(v270.write, v270, [v271]);
      tempSeq = ""
    }
    var v594 = sequence$$17.length;
    v273 = v594 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAMScript.call(v274.write, v274, [v275]);
  return true
}
function fuzzySearchDna(theDocument) {
  var targetSequence = "";
  var targetTitle = "";
  var querySequence = "";
  var queryTitle = "";
  var maxTarget = 2E3;
  var maxQuery = 30;
  var v595 = testScript();
  var v276 = v595 == false;
  if(v276) {
    return false
  }
  var v1141 = theDocument.forms;
  var v1113 = v1141[0];
  var v1071 = v1113.elements;
  var v982 = v1071[0];
  var v805 = checkFormElement(v982);
  var v596 = v805 == false;
  var v807 = !v596;
  if(v807) {
    var v1177 = theDocument.forms;
    var v1164 = v1177[0];
    var v1142 = v1164.elements;
    var v1114 = v1142[0];
    var v1072 = v1114.value;
    var v983 = checkSequenceLength(v1072, maxTarget);
    var v806 = v983 == false;
    var v985 = !v806;
    if(v985) {
      var v1178 = theDocument.forms;
      var v1165 = v1178[0];
      var v1143 = v1165.elements;
      var v1115 = v1143[1];
      var v1073 = checkFormElement(v1115);
      var v984 = v1073 == false;
      var v1075 = !v984;
      if(v1075) {
        var v1189 = theDocument.forms;
        var v1179 = v1189[0];
        var v1166 = v1179.elements;
        var v1144 = v1166[1];
        var v1116 = v1144.value;
        var v1074 = checkSequenceLength(v1116, maxQuery);
        v984 = v1074 == false
      }
      v806 = v984
    }
    v596 = v806
  }
  var v277 = v596;
  if(v277) {
    return false
  }
  var v1145 = theDocument.forms;
  var v1117 = v1145[0];
  var v1076 = v1117.elements;
  var v986 = v1076[5];
  var v808 = v986.options;
  var v1146 = theDocument.forms;
  var v1118 = v1146[0];
  var v1077 = v1118.elements;
  var v987 = v1077[5];
  var v809 = v987.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v597 = v808[v809]
  }
  var v278 = v597.value;
  var MATCH_SCORE = parseInt(v278);
  var v1147 = theDocument.forms;
  var v1119 = v1147[0];
  var v1078 = v1119.elements;
  var v988 = v1078[6];
  var v810 = v988.options;
  var v1148 = theDocument.forms;
  var v1120 = v1148[0];
  var v1079 = v1120.elements;
  var v989 = v1079[6];
  var v811 = v989.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v598 = v810[v811]
  }
  var v279 = v598.value;
  var MISMATCH_SCORE = parseInt(v279);
  var v1149 = theDocument.forms;
  var v1121 = v1149[0];
  var v1080 = v1121.elements;
  var v990 = v1080[7];
  var v812 = v990.options;
  var v1150 = theDocument.forms;
  var v1122 = v1150[0];
  var v1081 = v1122.elements;
  var v991 = v1081[7];
  var v813 = v991.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v599 = v812[v813]
  }
  var v280 = v599.value;
  var GAP_PENALTY = parseInt(v280);
  var v1151 = theDocument.forms;
  var v1123 = v1151[0];
  var v1082 = v1123.elements;
  var v992 = v1082[8];
  var v814 = v992.options;
  var v1152 = theDocument.forms;
  var v1124 = v1152[0];
  var v1083 = v1124.elements;
  var v993 = v1083[8];
  var v815 = v993.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v600 = v814[v815]
  }
  var v281 = v600.value;
  var HITS = parseInt(v281);
  openWindow("Fuzzy Search DNA");
  openPre();
  var v1084 = theDocument.forms;
  var v994 = v1084[0];
  var v816 = v994.elements;
  var v601 = v816[0];
  var v282 = v601.value;
  targetSequence = getSequenceFromFasta(v282);
  targetSequence = removeNonDna(targetSequence);
  var v1085 = theDocument.forms;
  var v995 = v1085[0];
  var v817 = v995.elements;
  var v602 = v817[0];
  var v283 = v602.value;
  targetTitle = getTitleFromFasta(v283);
  var v1086 = theDocument.forms;
  var v996 = v1086[0];
  var v818 = v996.elements;
  var v603 = v818[1];
  var v284 = v603.value;
  querySequence = getSequenceFromFasta(v284);
  querySequence = removeNonDna(querySequence);
  queryTitle = "query";
  var v285 = outputWindow.document;
  var v286 = getFuzzySearchTitle(targetTitle, targetSequence, queryTitle, querySequence);
  JAMScript.call(v285.write, v285, [v286]);
  var v604 = JAMScript.call(targetSequence.search, targetSequence, [/./]);
  var v287 = v604 != -1;
  if(v287) {
    targetSequence = JAMScript.call(targetSequence.match, targetSequence, [/./g])
  }
  var v605 = JAMScript.call(querySequence.search, querySequence, [/./]);
  var v288 = v605 != -1;
  if(v288) {
    querySequence = JAMScript.call(querySequence.match, querySequence, [/./g])
  }
  var v606 = targetSequence.length;
  var v289 = v606 == 0;
  if(v289) {
    alert("The sequence contains no DNA bases.");
    return false
  }
  var v607 = querySequence.length;
  var v290 = v607 == 0;
  if(v290) {
    alert("The query sequence contains no DNA bases.");
    return false
  }
  _fuzzySearchDna(queryTitle, querySequence, targetTitle, targetSequence, MATCH_SCORE, MISMATCH_SCORE, GAP_PENALTY, HITS);
  closePre();
  closeWindow();
  return true
}
function _fuzzySearchDna(queryTitle$$1, querySequence$$1, targetTitle$$1, targetSequence$$1, matchScore, mismatchScore, gapPenalty, hits) {
  var matrix = new Identity;
  JAMScript.call(matrix.setMatch, matrix, [matchScore]);
  JAMScript.call(matrix.setMismatch, matrix, [mismatchScore]);
  var scoreSet = new ScoreSet;
  JAMScript.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, hits]);
  var fuzzySearch = new FuzzySearch;
  JAMScript.call(fuzzySearch.initializeMatrix, fuzzySearch, [querySequence$$1, targetSequence$$1, scoreSet]);
  JAMScript.call(fuzzySearch.search, fuzzySearch, []);
  hits = JAMScript.call(fuzzySearch.getHits, fuzzySearch, []);
  var v608 = hits.length;
  var v303 = v608 > 0;
  if(v303) {
    var i$$11 = 0;
    var v609 = hits.length;
    var v301 = i$$11 < v609;
    for(;v301;) {
      var v291 = outputWindow.document;
      var v1125 = ">" + queryTitle$$1;
      var v1087 = v1125 + " from ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1126 = hits[i$$11]
      }
      var v1088 = v1126.startM;
      var v997 = v1087 + v1088;
      var v819 = v997 + " to ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v998 = hits[i$$11]
      }
      var v820 = v998.endM;
      var v610 = v819 + v820;
      var v292 = v610 + "\n";
      JAMScript.call(v291.write, v291, [v292]);
      var v293 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v821 = hits[i$$11]
      }
      var v611 = v821.sequenceM;
      var v294 = v611 + "\n";
      JAMScript.call(v293.write, v293, [v294]);
      var v295 = outputWindow.document;
      var v1127 = ">" + targetTitle$$1;
      var v1089 = v1127 + " from ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1128 = hits[i$$11]
      }
      var v1090 = v1128.startN;
      var v999 = v1089 + v1090;
      var v822 = v999 + " to ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1000 = hits[i$$11]
      }
      var v823 = v1000.endN;
      var v612 = v822 + v823;
      var v296 = v612 + "\n";
      JAMScript.call(v295.write, v295, [v296]);
      var v297 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v824 = hits[i$$11]
      }
      var v613 = v824.sequenceN;
      var v298 = v613 + "\n";
      JAMScript.call(v297.write, v297, [v298]);
      var v299 = outputWindow.document;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1001 = hits[i$$11]
      }
      var v825 = v1001.score;
      var v614 = "Score: " + v825;
      var v300 = v614 + "\n\n";
      JAMScript.call(v299.write, v299, [v300]);
      i$$11 = i$$11 + 1;
      var v615 = hits.length;
      v301 = i$$11 < v615
    }
  }else {
    var v302 = outputWindow.document;
    JAMScript.call(v302.write, v302, ["No hits were obtained.\n\n"])
  }
  return
}
function getScore(r1$$1, r2) {
  var v304 = this.scoringMatrix;
  return JAMScript.call(v304.scoringMatrix_getScore, v304, [r1$$1, r2])
}
function setScoreSetParam(scoringMatrix, gapPenalty$$1, hits$$1) {
  this.scoringMatrix = scoringMatrix;
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
  var v305 = r1$$2 == r2$$1;
  if(v305) {
    return this.match
  }else {
    return this.mismatch
  }
  return
}
function ScoringMatrix() {
  return
}
function setMismatch(mismatchScore$$1) {
  this.mismatch = mismatchScore$$1;
  return
}
function setMatch(matchScore$$1) {
  this.match = matchScore$$1;
  return
}
function Identity() {
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
  var v826 = this.M;
  var v616 = v826.length;
  var v306 = v616 + 1;
  var v1225 = new Array(v306);
  this.nodes = v1225;
  var i$$12 = 0;
  var v827 = this.nodes;
  var v617 = v827.length;
  var v312 = i$$12 < v617;
  for(;v312;) {
    var v307 = this.nodes;
    var v308 = i$$12;
    var v1002 = this.N;
    var v828 = v1002.length;
    var v618 = v828 + 1;
    var v1226 = new Array(v618);
    v307[v308] = v1226;
    var j$$10 = 0;
    var v1003 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v829 = v1003[i$$12]
    }
    var v619 = v829.length;
    var v311 = j$$10 < v619;
    for(;v311;) {
      var v620 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v309 = v620[i$$12]
      }
      var v310 = j$$10;
      var v1227 = new Node;
      v309[v310] = v1227;
      j$$10 = j$$10 + 1;
      var v1004 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v830 = v1004[i$$12]
      }
      var v621 = v830.length;
      v311 = j$$10 < v621
    }
    i$$12 = i$$12 + 1;
    var v831 = this.nodes;
    var v622 = v831.length;
    v312 = i$$12 < v622
  }
  var v832 = this.nodes;
  var v623 = v832[0];
  var v313 = v623[0];
  v313.value = 0;
  i$$12 = 1;
  var v833 = this.nodes;
  var v624 = v833.length;
  var v317 = i$$12 < v624;
  for(;v317;) {
    var v834 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v625 = v834[i$$12]
    }
    var v314 = v625[0];
    var v1005 = this.nodes;
    var v1006 = i$$12 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v835 = v1005[v1006]
    }
    var v626 = v835[0];
    v314.value = v626.value;
    var v836 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v627 = v836[i$$12]
    }
    var v315 = v627[0];
    v315.tracebackI = i$$12 - 1;
    var v837 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v628 = v837[i$$12]
    }
    var v316 = v628[0];
    v316.tracebackJ = 0;
    i$$12 = i$$12 + 1;
    var v838 = this.nodes;
    var v629 = v838.length;
    v317 = i$$12 < v629
  }
  j$$10 = 1;
  var v1007 = this.nodes;
  var v839 = v1007[0];
  var v630 = v839.length;
  var v321 = j$$10 < v630;
  for(;v321;) {
    var v840 = this.nodes;
    var v631 = v840[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v318 = v631[j$$10]
    }
    var v1008 = this.nodes;
    var v841 = v1008[0];
    var v842 = j$$10 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v632 = v841[v842]
    }
    v318.value = v632.value;
    var v843 = this.nodes;
    var v633 = v843[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v319 = v633[j$$10]
    }
    v319.tracebackI = 0;
    var v844 = this.nodes;
    var v634 = v844[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v320 = v634[j$$10]
    }
    v320.tracebackJ = j$$10 - 1;
    j$$10 = j$$10 + 1;
    var v1009 = this.nodes;
    var v845 = v1009[0];
    var v635 = v845.length;
    v321 = j$$10 < v635
  }
  return
}
function dumpMatrix() {
  var v322 = outputWindow.document;
  var v1091 = this.nodes;
  var v1010 = v1091.length;
  var v846 = "Dynamic programming matrix i=" + v1010;
  var v636 = v846 + " and j=";
  var v1011 = this.nodes;
  var v847 = v1011[0];
  var v637 = v847.length;
  var v323 = v636 + v637;
  JAMScript.call(v322.write, v322, [v323]);
  var v324 = outputWindow.document;
  JAMScript.call(v324.write, v324, ["\n"]);
  var i$$13 = 0;
  var v848 = this.nodes;
  var v638 = v848.length;
  var v335 = i$$13 < v638;
  for(;v335;) {
    var j$$11 = 0;
    var v1012 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v849 = v1012[i$$13]
    }
    var v639 = v849.length;
    var v333 = j$$11 < v639;
    for(;v333;) {
      var v850 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v640 = v850[i$$13]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v325 = v640[j$$11]
      }
      var traceI = v325.tracebackI;
      var v851 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v641 = v851[i$$13]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v326 = v641[j$$11]
      }
      var traceJ = v326.tracebackJ;
      var v327 = traceI == undefined;
      if(v327) {
        traceI = "u"
      }
      var v328 = traceJ == undefined;
      if(v328) {
        traceJ = "u"
      }
      var v1167 = "(" + i$$13;
      var v1153 = v1167 + ",";
      var v1129 = v1153 + j$$11;
      var v1092 = v1129 + ")[";
      var v1013 = v1092 + traceI;
      var v852 = v1013 + ",";
      var v642 = v852 + traceJ;
      var v329 = v642 + "]=";
      var v1014 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v853 = v1014[i$$13]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v643 = v853[j$$11]
      }
      var v330 = v643.value;
      var output = v329 + v330;
      var v331 = outputWindow.document;
      var v332 = rightNum(output, "", 20, " ");
      JAMScript.call(v331.write, v331, [v332]);
      j$$11 = j$$11 + 1;
      var v1015 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v854 = v1015[i$$13]
      }
      var v644 = v854.length;
      v333 = j$$11 < v644
    }
    var v334 = outputWindow.document;
    JAMScript.call(v334.write, v334, ["\n"]);
    i$$13 = i$$13 + 1;
    var v855 = this.nodes;
    var v645 = v855.length;
    v335 = i$$13 < v645
  }
  var v336 = outputWindow.document;
  JAMScript.call(v336.write, v336, ["\n"]);
  return
}
function updateMatrix() {
  var i$$14 = 1;
  var v856 = this.nodes;
  var v646 = v856.length;
  var v377 = i$$14 < v646;
  for(;v377;) {
    var j$$12 = 1;
    var v1016 = this.nodes;
    var v857 = v1016[0];
    var v647 = v857.length;
    var v376 = j$$12 < v647;
    for(;v376;) {
      var a;
      var b;
      var c;
      var v1017 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v858 = v1017[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v648 = v858[j$$12]
      }
      var v360 = v648.alreadyMatched;
      if(v360) {
        a = 0;
        b = 0;
        c = 0
      }else {
        var v1093 = this.nodes;
        var v1018 = v1093.length;
        var v859 = v1018 - 1;
        var v649 = i$$14 == v859;
        if(v649) {
          var v1130 = this.nodes;
          var v1094 = v1130[0];
          var v1019 = v1094.length;
          var v860 = v1019 - 1;
          v649 = j$$12 == v860
        }
        var v359 = v649;
        if(v359) {
          var v861 = this.nodes;
          var v862 = i$$14 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v650 = v861[v862]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v337 = v650[j$$12]
          }
          a = v337.value;
          var v863 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v651 = v863[i$$14]
          }
          var v652 = j$$12 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v338 = v651[v652]
          }
          b = v338.value;
          var v1020 = this.nodes;
          var v1021 = i$$14 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v864 = v1020[v1021]
          }
          var v865 = j$$12 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v653 = v864[v865]
          }
          var v339 = v653.value;
          var v654 = this.scoreSet;
          var v866 = this.M;
          var v867 = i$$14 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v655 = v866[v867]
          }
          var v868 = this.N;
          var v869 = j$$12 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v656 = v868[v869]
          }
          var v340 = JAMScript.call(v654.getScore, v654, [v655, v656]);
          c = v339 + v340
        }else {
          var v1022 = this.nodes;
          var v870 = v1022.length;
          var v657 = v870 - 1;
          var v358 = i$$14 == v657;
          if(v358) {
            var v1023 = this.nodes;
            var v1024 = i$$14 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v871 = v1023[v1024]
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v658 = v871[j$$12]
            }
            var v341 = v658.value;
            var v659 = this.scoreSet;
            var v342 = v659.gap;
            a = v341 - v342;
            var v872 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v660 = v872[i$$14]
            }
            var v661 = j$$12 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v343 = v660[v661]
            }
            b = v343.value;
            var v1025 = this.nodes;
            var v1026 = i$$14 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v873 = v1025[v1026]
            }
            var v874 = j$$12 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v662 = v873[v874]
            }
            var v344 = v662.value;
            var v663 = this.scoreSet;
            var v875 = this.M;
            var v876 = i$$14 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v664 = v875[v876]
            }
            var v877 = this.N;
            var v878 = j$$12 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v665 = v877[v878]
            }
            var v345 = JAMScript.call(v663.getScore, v663, [v664, v665]);
            c = v344 + v345
          }else {
            var v1095 = this.nodes;
            var v1027 = v1095[0];
            var v879 = v1027.length;
            var v666 = v879 - 1;
            var v357 = j$$12 == v666;
            if(v357) {
              var v880 = this.nodes;
              var v881 = i$$14 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v667 = v880[v881]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v346 = v667[j$$12]
              }
              a = v346.value;
              var v1028 = this.nodes;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v882 = v1028[i$$14]
              }
              var v883 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v668 = v882[v883]
              }
              var v347 = v668.value;
              var v669 = this.scoreSet;
              var v348 = v669.gap;
              b = v347 - v348;
              var v1029 = this.nodes;
              var v1030 = i$$14 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v884 = v1029[v1030]
              }
              var v885 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v670 = v884[v885]
              }
              var v349 = v670.value;
              var v671 = this.scoreSet;
              var v886 = this.M;
              var v887 = i$$14 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v672 = v886[v887]
              }
              var v888 = this.N;
              var v889 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v673 = v888[v889]
              }
              var v350 = JAMScript.call(v671.getScore, v671, [v672, v673]);
              c = v349 + v350
            }else {
              var v1031 = this.nodes;
              var v1032 = i$$14 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v890 = v1031[v1032]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v674 = v890[j$$12]
              }
              var v351 = v674.value;
              var v675 = this.scoreSet;
              var v352 = v675.gap;
              a = v351 - v352;
              var v1033 = this.nodes;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v891 = v1033[i$$14]
              }
              var v892 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v676 = v891[v892]
              }
              var v353 = v676.value;
              var v677 = this.scoreSet;
              var v354 = v677.gap;
              b = v353 - v354;
              var v1034 = this.nodes;
              var v1035 = i$$14 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v893 = v1034[v1035]
              }
              var v894 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v678 = v893[v894]
              }
              var v355 = v678.value;
              var v679 = this.scoreSet;
              var v895 = this.M;
              var v896 = i$$14 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v680 = v895[v896]
              }
              var v897 = this.N;
              var v898 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v681 = v897[v898]
              }
              var v356 = JAMScript.call(v679.getScore, v679, [v680, v681]);
              c = v355 + v356
            }
          }
        }
      }
      var v682 = a > b;
      if(v682) {
        v682 = a > c
      }
      var v371 = v682;
      if(v371) {
        var v899 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v683 = v899[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v361 = v683[j$$12]
        }
        v361.value = a;
        var v900 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v684 = v900[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v362 = v684[j$$12]
        }
        v362.tracebackI = i$$14 - 1;
        var v901 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v685 = v901[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v363 = v685[j$$12]
        }
        v363.tracebackJ = j$$12
      }else {
        var v686 = b > c;
        if(v686) {
          v686 = b > a
        }
        var v370 = v686;
        if(v370) {
          var v902 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v687 = v902[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v364 = v687[j$$12]
          }
          v364.value = b;
          var v903 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v688 = v903[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v365 = v688[j$$12]
          }
          v365.tracebackI = i$$14;
          var v904 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v689 = v904[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v366 = v689[j$$12]
          }
          v366.tracebackJ = j$$12 - 1
        }else {
          var v905 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v690 = v905[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v367 = v690[j$$12]
          }
          v367.value = c;
          var v906 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v691 = v906[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v368 = v691[j$$12]
          }
          v368.tracebackI = i$$14 - 1;
          var v907 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v692 = v907[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v369 = v692[j$$12]
          }
          v369.tracebackJ = j$$12 - 1
        }
      }
      var v1096 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1036 = v1096[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v908 = v1036[j$$12]
      }
      var v693 = v908.value;
      var v375 = v693 < 0;
      if(v375) {
        var v909 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v694 = v909[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v372 = v694[j$$12]
        }
        v372.value = 0;
        var v910 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v695 = v910[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v373 = v695[j$$12]
        }
        v373.tracebackI = undefined;
        var v911 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v696 = v911[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v374 = v696[j$$12]
        }
        v374.tracebackJ = undefined
      }
      j$$12 = j$$12 + 1;
      var v1037 = this.nodes;
      var v912 = v1037[0];
      var v697 = v912.length;
      v376 = j$$12 < v697
    }
    i$$14 = i$$14 + 1;
    var v913 = this.nodes;
    var v698 = v913.length;
    v377 = i$$14 < v698
  }
  var v914 = this.nodes;
  var v1097 = this.nodes;
  var v1038 = v1097.length;
  var v915 = v1038 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v699 = v914[v915]
  }
  var v1098 = this.nodes;
  var v1039 = v1098[0];
  var v916 = v1039.length;
  var v700 = v916 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v378 = v699[v700]
  }
  this.score = v378.value;
  return
}
function search() {
  var v1228 = new Array;
  this.hits = v1228;
  var hitCount = 0;
  var v917 = this.scoreSet;
  var v701 = v917.hits;
  var v402 = hitCount < v701;
  for(;v402;) {
    JAMScript.call(this.updateMatrix, this, []);
    var maxNodeValue = 0;
    var maxNodeI = undefined;
    var maxNodeJ = undefined;
    var i$$15 = 1;
    var v918 = this.nodes;
    var v702 = v918.length;
    var v382 = i$$15 < v702;
    for(;v382;) {
      var j$$13 = 1;
      var v1040 = this.nodes;
      var v919 = v1040[0];
      var v703 = v919.length;
      var v381 = j$$13 < v703;
      for(;v381;) {
        var v1099 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1041 = v1099[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v920 = v1041[j$$13]
        }
        var v704 = v920.value;
        var v380 = v704 > maxNodeValue;
        if(v380) {
          var v921 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v705 = v921[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v379 = v705[j$$13]
          }
          maxNodeValue = v379.value;
          maxNodeI = i$$15;
          maxNodeJ = j$$13
        }
        j$$13 = j$$13 + 1;
        var v1042 = this.nodes;
        var v922 = v1042[0];
        var v706 = v922.length;
        v381 = j$$13 < v706
      }
      i$$15 = i$$15 + 1;
      var v923 = this.nodes;
      var v707 = v923.length;
      v382 = i$$15 < v707
    }
    var v383 = maxNodeValue == 0;
    if(v383) {
      break
    }
    var currentI = maxNodeI;
    var currentJ = maxNodeJ;
    var v708 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v384 = v708[maxNodeI]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var currentNode = v384[maxNodeJ]
    }
    var alignedM = new Array;
    var alignedN = new Array;
    var score = currentNode.value;
    var endM = undefined;
    var endN = undefined;
    var v924 = currentNode.tracebackI;
    var v709 = v924 != undefined;
    if(v709) {
      var v925 = currentNode.tracebackJ;
      v709 = v925 != undefined
    }
    var v399 = v709;
    for(;v399;) {
      var v710 = currentI == 0;
      var v926 = !v710;
      if(v926) {
        v710 = currentJ == 0
      }
      var v385 = v710;
      if(v385) {
        break
      }
      var v927 = currentNode.tracebackI;
      var v928 = currentI - 1;
      var v711 = v927 == v928;
      if(v711) {
        var v929 = currentNode.tracebackJ;
        var v930 = currentJ - 1;
        v711 = v929 == v930
      }
      var v394 = v711;
      if(v394) {
        var v386 = endM == undefined;
        if(v386) {
          endM = currentI;
          endN = currentJ
        }
        var v712 = this.M;
        var v713 = currentI - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v387 = v712[v713]
        }
        alignedM.push(v387);
        var v714 = this.N;
        var v715 = currentJ - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v388 = v714[v715]
        }
        alignedN.push(v388)
      }else {
        var v716 = currentNode.tracebackJ;
        var v717 = currentJ - 1;
        var v393 = v716 == v717;
        if(v393) {
          var v390 = endM != undefined;
          if(v390) {
            alignedM.push("-");
            var v718 = this.N;
            var v719 = currentJ - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v389 = v718[v719]
            }
            alignedN.push(v389)
          }
        }else {
          var v392 = endM != undefined;
          if(v392) {
            var v720 = this.M;
            var v721 = currentI - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v391 = v720[v721]
            }
            alignedM.push(v391);
            alignedN.push("-")
          }
        }
      }
      var v931 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v722 = v931[currentI]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v395 = v722[currentJ]
      }
      v395.value = 0;
      var v932 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v723 = v932[currentI]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v396 = v723[currentJ]
      }
      v396.alreadyMatched = true;
      currentI = currentNode.tracebackI;
      currentJ = currentNode.tracebackJ;
      var v724 = this.nodes;
      var v725 = currentNode.tracebackI;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v397 = v724[v725]
      }
      var v398 = currentNode.tracebackJ;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        currentNode = v397[v398]
      }
      var v933 = currentNode.tracebackI;
      var v726 = v933 != undefined;
      if(v726) {
        var v934 = currentNode.tracebackJ;
        v726 = v934 != undefined
      }
      v399 = v726
    }
    alignedM = alignedM.reverse();
    alignedN = alignedN.reverse();
    var v400 = this.hits;
    var v727 = alignedM.join("");
    var v728 = alignedN.join("");
    var v729 = currentI + 1;
    var v730 = currentJ + 1;
    var v401 = new Hit(v727, v728, score, v729, endM, v730, endN);
    v400.push(v401);
    hitCount = hitCount + 1;
    var v935 = this.scoreSet;
    var v731 = v935.hits;
    v402 = hitCount < v731
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
var v403 = ScoreSet.prototype;
v403.getScore = getScore;
var v404 = ScoreSet.prototype;
v404.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v405 = ScoringMatrix.prototype;
v405.scoringMatrix_getScore = scoringMatrix_getScore;
var v406 = Identity;
var v1229 = new ScoringMatrix;
v406.prototype = v1229;
var v407 = Identity.prototype;
v407.setMismatch = setMismatch;
var v408 = Identity.prototype;
v408.setMatch = setMatch;
new FuzzySearch;
var v409 = FuzzySearch.prototype;
v409.initializeMatrix = initializeMatrix;
var v410 = FuzzySearch.prototype;
v410.updateMatrix = updateMatrix;
var v411 = FuzzySearch.prototype;
v411.search = search;
var v412 = FuzzySearch.prototype;
v412.getHits = getHits;
var v413 = FuzzySearch.prototype;
v413.dumpMatrix = dumpMatrix;
JAMScript.set(document, "onload", v2);
var v414 = document.getElementById("submitbtn");
JAMScript.set(v414, "onclick", v3);
var v415 = document.getElementById("clearbtn");
JAMScript.set(v415, "onclick", v4);

