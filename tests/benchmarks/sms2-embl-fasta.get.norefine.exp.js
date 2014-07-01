function v4() {
  var v553 = document.forms;
  var v473 = v553[0];
  var v286 = v473.elements;
  var v5 = v286[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    emblFasta(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v287 = document.main_form;
  var v7 = v287.main_submit;
  v7.focus();
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
  var v8 = arrayOfSequences[0];
  var lengthOfAlign = v8.length;
  var v288 = arrayOfSequences.length;
  var v9 = v288 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v289 = arrayOfTitles.length;
  var v11 = i$$1 < v289;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v554 = arrayOfTitles[i$$1]
    }
    var v474 = v554.search(/\S/);
    var v290 = v474 == -1;
    var v476 = !v290;
    if(v476) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v604 = arrayOfSequences[i$$1]
      }
      var v555 = v604.search(/\S/);
      var v475 = v555 == -1;
      var v557 = !v475;
      if(v557) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v605 = arrayOfSequences[i$$1]
        }
        var v556 = v605.length;
        v475 = v556 != lengthOfAlign
      }
      v290 = v475
    }
    var v10 = v290;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v291 = arrayOfTitles.length;
    v11 = i$$1 < v291
  }
  return true
}
function checkCodonTable(codonTable) {
  var v477 = codonTable.search(/AmAcid/);
  var v292 = v477 == -1;
  var v479 = !v292;
  if(v479) {
    var v558 = codonTable.search(/Codon/);
    var v478 = v558 == -1;
    var v560 = !v478;
    if(v560) {
      var v606 = codonTable.search(/Number/);
      var v559 = v606 == -1;
      var v608 = !v559;
      if(v608) {
        var v636 = codonTable.search(/\/1000/);
        var v607 = v636 == -1;
        var v638 = !v607;
        if(v638) {
          var v637 = codonTable.search(/Fraction\s*\.\./);
          v607 = v637 == -1
        }
        v559 = v607
      }
      v478 = v559
    }
    v292 = v478
  }
  var v12 = v292;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v480 = formElement.value;
  var v293 = v480.search(/\S/);
  var v13 = v293 == -1;
  if(v13) {
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
  var v294 = arrayOfPatterns.length;
  var v16 = z$$2 < v294;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v481 = arrayOfPatterns[z$$2]
    }
    var v295 = v481.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v295 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v482 = arrayOfPatterns[z$$2]
    }
    var v296 = moreExpressionCheck(v482);
    var v15 = v296 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v297 = arrayOfPatterns.length;
    v16 = z$$2 < v297
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v298 = arrayOfPatterns.length;
  var v25 = j < v298;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v561 = arrayOfPatterns[j]
    }
    var v483 = v561.match(/\/.+\//);
    var v299 = v483 + "gi";
    if(JAMScript.isEval(eval)) {
      var v726 = eval("introspect(JAMScript.introspectors.processAll) { " + v299 + " }")
    }else {
      var v726 = JAMScript.call(eval, null, [v299])
    }
    v19[v20] = v726;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v484 = arrayOfPatterns[j]
    }
    var v300 = v484.match(/=[a-zA-Z\*]/);
    var v727 = v300.toString();
    v21[v22] = v727;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v301 = geneticCodeMatchResult[j]
    }
    var v728 = v301.replace(/=/g, "");
    v23[v24] = v728;
    j = j + 1;
    var v302 = arrayOfPatterns.length;
    v25 = j < v302
  }
  var i$$2 = 0;
  var v485 = testSequence.length;
  var v303 = v485 - 3;
  var v32 = i$$2 <= v303;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v304 = geneticCodeMatchExp.length;
    var v30 = j < v304;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v486 = geneticCodeMatchExp[j]
      }
      var v305 = codon.search(v486);
      var v29 = v305 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v306 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v306 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v307 = geneticCodeMatchExp.length;
      v30 = j < v307
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v487 = testSequence.length;
    var v308 = v487 - 3;
    v32 = i$$2 <= v308
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v309 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v309;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v488 = arrayOfPatterns$$1[z$$3]
    }
    var v310 = v488.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v310 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v311 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v311
  }
  var i$$3 = 0;
  var v312 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v312;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v489 = arrayOfPatterns$$1[i$$3]
    }
    var v313 = "[" + v489;
    var v35 = v313 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v314 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v314;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v490 = arrayOfPatterns$$1[j$$1]
      }
      var v315 = v490.search(re);
      var v36 = v315 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v316 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v316
    }
    i$$3 = i$$3 + 1;
    var v317 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v317
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v318 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v318;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v491 = arrayOfPatterns$$2[z$$4]
    }
    var v319 = v491.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v319 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v492 = arrayOfPatterns$$2[z$$4]
    }
    var v320 = moreExpressionCheck(v492);
    var v40 = v320 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v321 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v321
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v562 = getSequenceFromFasta(text$$7);
  var v493 = v562.replace(/[^A-Za-z]/g, "");
  var v322 = v493.length;
  var v43 = v322 > maxInput;
  if(v43) {
    var v323 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v323 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v324 = text$$8.length;
  var v45 = v324 > maxInput$$1;
  if(v45) {
    var v325 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v325 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
}
function complement(dnaSequence$$1) {
  dnaSequence$$1 = dnaSequence$$1.replace(/g/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/c/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "c");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "g");
  dnaSequence$$1 = dnaSequence$$1.replace(/G/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/C/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "C");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "G");
  dnaSequence$$1 = dnaSequence$$1.replace(/a/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/t/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "t");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "a");
  dnaSequence$$1 = dnaSequence$$1.replace(/A/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/T/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "T");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "A");
  dnaSequence$$1 = dnaSequence$$1.replace(/u/g, "a");
  dnaSequence$$1 = dnaSequence$$1.replace(/U/g, "A");
  dnaSequence$$1 = dnaSequence$$1.replace(/r/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/y/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "y");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "r");
  dnaSequence$$1 = dnaSequence$$1.replace(/R/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/Y/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "Y");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "R");
  dnaSequence$$1 = dnaSequence$$1.replace(/k/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/m/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "m");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "k");
  dnaSequence$$1 = dnaSequence$$1.replace(/K/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/M/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "M");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "K");
  dnaSequence$$1 = dnaSequence$$1.replace(/b/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/v/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "v");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "b");
  dnaSequence$$1 = dnaSequence$$1.replace(/B/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/V/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "V");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "B");
  dnaSequence$$1 = dnaSequence$$1.replace(/d/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/h/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "h");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "d");
  dnaSequence$$1 = dnaSequence$$1.replace(/D/g, "1");
  dnaSequence$$1 = dnaSequence$$1.replace(/H/g, "2");
  dnaSequence$$1 = dnaSequence$$1.replace(/1/g, "H");
  dnaSequence$$1 = dnaSequence$$1.replace(/2/g, "D");
  return dnaSequence$$1
}
function closeForm() {
  var v46 = outputWindow.document;
  JAMScript.call(v46.write, v46, ["</form>"]);
  return true
}
function closePre() {
  var v47 = outputWindow.document;
  JAMScript.call(v47.write, v47, ["</div>"]);
  var v48 = outputWindow.document;
  JAMScript.call(v48.write, v48, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v49 = outputWindow.document;
  JAMScript.call(v49.write, v49, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v50 = outputWindow.document;
  JAMScript.call(v50.write, v50, ["</body>\n</html>\n"]);
  outputWindow.status = "Done.";
  var v51 = outputWindow.document;
  v51.close();
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
  var v326 = alignArray.length;
  var v52 = v326 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v327 = alignArray.length;
  var v54 = i$$4 < v327;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v494 = alignArray[i$$4]
    }
    var v328 = v494.search(/[^\s]+\s/);
    var v53 = v328 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v329 = alignArray.length;
    v54 = i$$4 < v329
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
  var v330 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v330 != -1;
  if(v57) {
    var v56 = matchArray = re$$1.exec(sequenceData);
    for(;v56;) {
      var v55 = matchArray[0];
      arrayOfFasta.push(v55);
      v56 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v331 = sequence$$2.length;
  var v58 = "&gt;results for " + v331;
  var stringToReturn = v58 + " residue sequence ";
  var v332 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v332 != -1;
  if(v60) {
    var v333 = stringToReturn + '"';
    var v59 = v333 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v334 = stringToReturn + ' starting "';
  var v335 = sequence$$2.substring(0, 10);
  var v61 = v334 + v335;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v336 = sequenceOne.length;
  var v62 = "Search results for " + v336;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v337 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v337 != -1;
  if(v64) {
    var v338 = stringToReturn$$1 + '"';
    var v63 = v338 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v339 = stringToReturn$$1 + ' starting "';
  var v340 = sequenceOne.substring(0, 10);
  var v65 = v339 + v340;
  stringToReturn$$1 = v65 + '"\n';
  var v341 = stringToReturn$$1 + "and ";
  var v342 = sequenceTwo.length;
  var v66 = v341 + v342;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v343 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v343 != -1;
  if(v68) {
    var v344 = stringToReturn$$1 + '"';
    var v67 = v344 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v345 = stringToReturn$$1 + ' starting "';
  var v346 = sequenceTwo.substring(0, 10);
  var v69 = v345 + v346;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v347 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v347;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v563 = arrayOfPatterns$$3[j$$2]
    }
    var v495 = v563.match(/\/.+\//);
    var v348 = v495 + "gi";
    if(JAMScript.isEval(eval)) {
      var v729 = eval("introspect(JAMScript.introspectors.processAll) { " + v348 + " }")
    }else {
      var v729 = JAMScript.call(eval, null, [v348])
    }
    v72[v73] = v729;
    j$$2 = j$$2 + 1;
    var v349 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v349
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v350 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v350;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v496 = arrayOfPatterns$$4[j$$3]
    }
    var v351 = v496.match(/=[a-zA-Z\*]/);
    var v730 = v351.toString();
    v76[v77] = v730;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v352 = geneticCodeMatchResult$$1[j$$3]
    }
    var v731 = v352.replace(/=/g, "");
    v78[v79] = v731;
    j$$3 = j$$3 + 1;
    var v353 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v353
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v354 = sequence$$3.length;
  var v81 = "Results for " + v354;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v355 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v355 != -1;
  if(v83) {
    var v356 = stringToReturn$$2 + '"';
    var v82 = v356 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v357 = stringToReturn$$2 + ' starting "';
  var v358 = sequence$$3.substring(0, 10);
  var v84 = v357 + v358;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v497 = "Results for " + topology;
  var v359 = v497 + " ";
  var v360 = sequence$$4.length;
  var v86 = v359 + v360;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v361 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v361 != -1;
  if(v88) {
    var v362 = stringToReturn$$3 + '"';
    var v87 = v362 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v363 = stringToReturn$$3 + ' starting "';
  var v364 = sequence$$4.substring(0, 10);
  var v89 = v363 + v364;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v365 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v365;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v366 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v366 != -1;
  if(v93) {
    var v367 = stringToReturn$$4 + '"';
    var v92 = v367 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v368 = stringToReturn$$4 + ' starting "';
  var v369 = sequenceOne$$1.substring(0, 10);
  var v94 = v368 + v369;
  stringToReturn$$4 = v94 + '"\n';
  var v370 = stringToReturn$$4 + "and ";
  var v371 = sequenceTwo$$1.length;
  var v95 = v370 + v371;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v372 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v372 != -1;
  if(v97) {
    var v373 = stringToReturn$$4 + '"';
    var v96 = v373 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v374 = stringToReturn$$4 + ' starting "';
  var v375 = sequenceTwo$$1.substring(0, 10);
  var v98 = v374 + v375;
  stringToReturn$$4 = v98 + '"';
  var v99 = '<div class="info">' + stringToReturn$$4;
  return v99 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v101 = j$$4 < lengthOut;
  for(;v101;) {
    var v376 = Math.random();
    var v377 = components.length;
    var v100 = v376 * v377;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v378 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v378 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v379 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v379 != -1;
  if(v104) {
    var v103 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v103.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v498 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v380 = v498 != -1;
  var v500 = !v380;
  if(v500) {
    var v564 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v499 = v564 != -1;
    var v566 = !v499;
    if(v566) {
      var v609 = expressionToCheck.search(/\[\]/);
      var v565 = v609 != -1;
      var v611 = !v565;
      if(v611) {
        var v639 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v610 = v639 != -1;
        var v641 = !v610;
        if(v641) {
          var v652 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v640 = v652 != -1;
          var v654 = !v640;
          if(v654) {
            var v665 = expressionToCheck.search(/\|\|/);
            var v653 = v665 != -1;
            var v667 = !v653;
            if(v667) {
              var v677 = expressionToCheck.search(/\/\|/);
              var v666 = v677 != -1;
              var v679 = !v666;
              if(v679) {
                var v688 = expressionToCheck.search(/\|\//);
                var v678 = v688 != -1;
                var v690 = !v678;
                if(v690) {
                  var v697 = expressionToCheck.search(/\[.\]/);
                  var v689 = v697 != -1;
                  var v699 = !v689;
                  if(v699) {
                    var v704 = expressionToCheck.search(/\</);
                    var v698 = v704 != -1;
                    var v706 = !v698;
                    if(v706) {
                      var v705 = expressionToCheck.search(/\>/);
                      v698 = v705 != -1
                    }
                    v689 = v698
                  }
                  v678 = v689
                }
                v666 = v678
              }
              v653 = v666
            }
            v640 = v653
          }
          v610 = v640
        }
        v565 = v610
      }
      v499 = v565
    }
    v380 = v499
  }
  var v105 = v380;
  if(v105) {
    return false
  }
  return true
}
function openForm() {
  var v106 = outputWindow.document;
  JAMScript.call(v106.write, v106, ['<form action="">\n']);
  return true
}
function openPre() {
  var v107 = outputWindow.document;
  JAMScript.call(v107.write, v107, ["<pre>"]);
  var v108 = outputWindow.document;
  JAMScript.call(v108.write, v108, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v109 = outputWindow.document;
  JAMScript.call(v109.write, v109, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v732 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v732[2], v732[1], v732[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v567 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v501 = v567 + "<head>\n";
  var v381 = v501 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v381 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v719 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v715 = v719 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v711 = v715 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v707 = v711 + "div.info {font-weight: bold}\n";
    var v700 = v707 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v691 = v700 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v680 = v691 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v668 = v680 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v655 = v668 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v642 = v655 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v612 = v642 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v568 = v612 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v502 = v568 + "td.many {color: #000000}\n";
    var v382 = v502 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v382 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v723 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v720 = v723 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v716 = v720 + "div.title {display: none}\n";
    var v712 = v716 + "div.info {font-weight: bold}\n";
    var v708 = v712 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v701 = v708 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v692 = v701 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v681 = v692 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v669 = v681 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v656 = v669 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v643 = v656 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v613 = v643 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v569 = v613 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v503 = v569 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v383 = v503 + "img {display: none}\n";
    var v115 = v383 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v570 = "</head>\n" + '<body class="main">\n';
  var v504 = v570 + '<div class="title">';
  var v384 = v504 + title$$6;
  var v117 = v384 + " results</div>\n";
  JAMScript.call(v116.write, v116, [v117]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v733 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v733[2], v733[1], v733[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v571 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v505 = v571 + "<head>\n";
  var v385 = v505 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v385 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v721 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v717 = v721 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v713 = v717 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v709 = v713 + "div.info {font-weight: bold}\n";
    var v702 = v709 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v693 = v702 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v682 = v693 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v670 = v682 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v657 = v670 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v644 = v657 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v614 = v644 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v572 = v614 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v506 = v572 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v386 = v506 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v386 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v725 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v724 = v725 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v722 = v724 + "div.title {display: none}\n";
    var v718 = v722 + "div.info {font-weight: bold}\n";
    var v714 = v718 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v710 = v714 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v703 = v710 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v694 = v703 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v683 = v694 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v671 = v683 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v658 = v671 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v645 = v658 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v615 = v645 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v573 = v615 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v507 = v573 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v387 = v507 + "img {display: none}\n";
    var v123 = v387 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v574 = "</head>\n" + '<body class="main">\n';
  var v508 = v574 + '<div class="title">';
  var v388 = v508 + title$$8;
  var v125 = v388 + " results</div>\n";
  JAMScript.call(v124.write, v124, [v125]);
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
function reverse(dnaSequence$$2) {
  var tempDnaArray = new Array;
  var v389 = dnaSequence$$2.search(/./);
  var v126 = v389 != -1;
  if(v126) {
    tempDnaArray = dnaSequence$$2.match(/./g);
    tempDnaArray = tempDnaArray.reverse();
    dnaSequence$$2 = tempDnaArray.join("")
  }
  return dnaSequence$$2
}
function rightNum(theNumber, sequenceToAppend, lengthOfColumn, tabIn) {
  var j$$5 = 0;
  var tempString = "";
  theNumber = theNumber.toString();
  j$$5 = theNumber.length;
  var v127 = j$$5 < lengthOfColumn;
  for(;v127;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v127 = j$$5 < lengthOfColumn
  }
  var v128 = tempString + theNumber;
  theNumber = v128 + " ";
  var v129 = sequenceToAppend + theNumber;
  sequenceToAppend = v129 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v390 = testArray[0];
  var v130 = v390 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v391 = testString.search(re$$2);
  var v131 = v391 == -1;
  if(v131) {
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
  var v132 = !caughtException;
  if(v132) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v133 = testString != "1X2X3X";
  if(v133) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v392 = testNum.toFixed(3);
  var v134 = v392 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v393 = testNum.toPrecision(5);
  var v135 = v393 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v394 = theNumber$$1.search(/\d/);
  var v136 = v394 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v509 = emblFile.search(/ID/);
  var v395 = v509 == -1;
  var v511 = !v395;
  if(v511) {
    var v575 = emblFile.search(/AC/);
    var v510 = v575 == -1;
    var v577 = !v510;
    if(v577) {
      var v616 = emblFile.search(/DE/);
      var v576 = v616 == -1;
      var v618 = !v576;
      if(v618) {
        var v617 = emblFile.search(/SQ/);
        v576 = v617 == -1
      }
      v510 = v576
    }
    v395 = v510
  }
  var v137 = v395;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v396 = theNumber$$2.search(/\d/);
  var v138 = v396 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v397 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v397 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$3) {
  var v398 = dnaSequence$$3.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v398 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v399 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v399 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v512 = genBankFile.search(/LOCUS/);
  var v400 = v512 == -1;
  var v514 = !v400;
  if(v514) {
    var v578 = genBankFile.search(/DEFINITION/);
    var v513 = v578 == -1;
    var v580 = !v513;
    if(v580) {
      var v619 = genBankFile.search(/ACCESSION/);
      var v579 = v619 == -1;
      var v621 = !v579;
      if(v621) {
        var v620 = genBankFile.search(/ORIGIN/);
        v579 = v620 == -1
      }
      v513 = v579
    }
    v400 = v513
  }
  var v143 = v400;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v515 = genBankFile$$1.search(/LOCUS/);
  var v401 = v515 == -1;
  var v517 = !v401;
  if(v517) {
    var v581 = genBankFile$$1.search(/DEFINITION/);
    var v516 = v581 == -1;
    var v583 = !v516;
    if(v583) {
      var v622 = genBankFile$$1.search(/ACCESSION/);
      var v582 = v622 == -1;
      var v624 = !v582;
      if(v624) {
        var v623 = genBankFile$$1.search(/ORIGIN/);
        v582 = v623 == -1
      }
      v516 = v582
    }
    v401 = v516
  }
  var v144 = v401;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v402 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v402 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v518 = emblFile$$1.search(/ID/);
  var v403 = v518 == -1;
  var v520 = !v403;
  if(v520) {
    var v584 = emblFile$$1.search(/AC/);
    var v519 = v584 == -1;
    var v586 = !v519;
    if(v586) {
      var v625 = emblFile$$1.search(/DE/);
      var v585 = v625 == -1;
      var v627 = !v585;
      if(v627) {
        var v626 = emblFile$$1.search(/SQ/);
        v585 = v626 == -1
      }
      v519 = v585
    }
    v403 = v519
  }
  var v146 = v403;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v404 = emblFile$$1.search(/^FT/m);
  var v147 = v404 == -1;
  if(v147) {
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
  var v154 = i$$5 < stopBase;
  for(;v154;) {
    var v148 = i$$5 + 1;
    lineOfText = rightNum(v148, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v405 = basePerLine / groupSize;
    var v151 = j$$6 <= v405;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v406 = k + i$$5;
        var v149 = text$$10.charAt(v406);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v407 = basePerLine / groupSize;
      v151 = j$$6 <= v407
    }
    var v152 = outputWindow.document;
    var v153 = lineOfText + "\n";
    JAMScript.call(v152.write, v152, [v153]);
    lineOfText = "";
    v154 = i$$5 < stopBase
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
    var v408 = adjustment < 0;
    if(v408) {
      v408 = adjusted >= 0
    }
    var v155 = v408;
    if(v155) {
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
  var v186 = i$$6 < stopBase$$2;
  for(;v186;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v409 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v409;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v410 = i$$6 + k$$1;
        var v156 = v410 >= stopBase$$2;
        if(v156) {
          break
        }
        var v411 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v411);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v412 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v412, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v413 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v413
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v587 = adjustNumbering(lineNum, numberingAdjustment);
      var v521 = rightNum(v587, "", 8, tabIn$$3);
      var v414 = v521 + lineOfText$$1;
      var v164 = v414 + "\n";
      JAMScript.call(v163.write, v163, [v164]);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v588 = adjustNumbering(lineNum, numberingAdjustment);
        var v522 = rightNum(v588, "", 8, tabIn$$3);
        var v523 = complement(lineOfText$$1);
        var v415 = v522 + v523;
        var v166 = v415 + "\n";
        JAMScript.call(v165.write, v165, [v166]);
        var v167 = outputWindow.document;
        JAMScript.call(v167.write, v167, ["\n"])
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v524 = adjustNumbering(i$$6, numberingAdjustment);
        var v416 = lineOfText$$1 + v524;
        var v170 = v416 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v525 = complement(lineOfText$$1);
          var v526 = adjustNumbering(i$$6, numberingAdjustment);
          var v417 = v525 + v526;
          var v172 = v417 + "\n";
          JAMScript.call(v171.write, v171, [v172]);
          var v173 = outputWindow.document;
          JAMScript.call(v173.write, v173, ["\n"])
        }
      }else {
        var v183 = numberPosition$$1 == "above";
        if(v183) {
          var v175 = outputWindow.document;
          var v176 = aboveNum + "\n";
          JAMScript.call(v175.write, v175, [v176]);
          var v177 = outputWindow.document;
          var v178 = lineOfText$$1 + "\n";
          JAMScript.call(v177.write, v177, [v178]);
          var v182 = strands$$1 == "two";
          if(v182) {
            var v179 = outputWindow.document;
            var v418 = complement(lineOfText$$1);
            var v180 = v418 + "\n";
            JAMScript.call(v179.write, v179, [v180]);
            var v181 = outputWindow.document;
            JAMScript.call(v181.write, v181, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v186 = i$$6 < stopBase$$2
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
  var v205 = i$$7 < stopBase$$3;
  for(;v205;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v419 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v419;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v420 = i$$7 + k$$2;
        var v187 = v420 >= stopBase$$3;
        if(v187) {
          break
        }
        var v421 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v421);
        lineOfText$$2 = lineOfText$$2 + v188;
        k$$2 = k$$2 + 1;
        v189 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v191 = numberPosition$$2 == "above";
      if(v191) {
        var v190 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v190
      }
      var v192 = i$$7 >= stopBase$$3;
      if(v192) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v422 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v422
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v527 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v423 = v527 + lineOfText$$2;
      var v195 = v423 + "\n";
      JAMScript.call(v194.write, v194, [v195])
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v424 = lineOfText$$2 + i$$7;
        var v197 = v424 + "\n";
        JAMScript.call(v196.write, v196, [v197])
      }else {
        var v202 = numberPosition$$2 == "above";
        if(v202) {
          var v198 = outputWindow.document;
          var v199 = aboveNum$$1 + "\n";
          JAMScript.call(v198.write, v198, [v199]);
          var v200 = outputWindow.document;
          var v201 = lineOfText$$2 + "\n";
          JAMScript.call(v200.write, v200, [v201])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v205 = i$$7 < stopBase$$3
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
  var v528 = sequence$$13.length;
  var v425 = v528 <= firstIndexToMutate;
  var v530 = !v425;
  if(v530) {
    var v529 = lastIndexToMutate < 0;
    var v589 = !v529;
    if(v589) {
      v529 = lastIndexToMutate <= firstIndexToMutate
    }
    v425 = v529
  }
  var v206 = v425;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v426 = Math.random();
    var v207 = v426 * maxNum;
    randNum = Math.floor(v207);
    var v427 = randNum < firstIndexToMutate;
    var v531 = !v427;
    if(v531) {
      v427 = randNum > lastIndexToMutate
    }
    var v208 = v427;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v428 = Math.random();
      var v429 = components$$1.length;
      var v209 = v428 * v429;
      componentsIndex = Math.round(v209);
      var v430 = components$$1.length;
      var v210 = componentsIndex == v430;
      if(v210) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v431 = components$$1[componentsIndex]
      }
      var v211 = v431 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v432 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v433 = components$$1[componentsIndex]
    }
    var v212 = v432 + v433;
    var v434 = randNum + 1;
    var v435 = sequence$$13.length;
    var v213 = sequence$$13.substring(v434, v435);
    sequence$$13 = v212 + v213;
    i$$8 = i$$8 + 1;
    v214 = i$$8 < numMut
  }
  var v215 = outputWindow.document;
  var v216 = addReturns(sequence$$13);
  JAMScript.call(v215.write, v215, [v216]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v221 = j$$9 < lengthOut$$1;
  for(;v221;) {
    var v436 = Math.random();
    var v437 = components$$2.length;
    var v217 = v436 * v437;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v438 = sequence$$14.length;
    var v220 = v438 == 60;
    if(v220) {
      var v218 = outputWindow.document;
      var v219 = sequence$$14 + "\n";
      JAMScript.call(v218.write, v218, [v219]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v221 = j$$9 < lengthOut$$1
  }
  var v222 = outputWindow.document;
  var v223 = sequence$$14 + "\n";
  JAMScript.call(v222.write, v222, [v223]);
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
  var v227 = dnaConformation == "circular";
  if(v227) {
    var v224 = sequence$$15.substring(0, lookAhead);
    shiftValue = v224.length;
    var v590 = sequence$$15.length;
    var v532 = v590 - lookAhead;
    var v533 = sequence$$15.length;
    var v439 = sequence$$15.substring(v532, v533);
    var v225 = v439 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  JAMScript.call(v228.write, v228, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v229 = outputWindow.document;
  var v591 = '<tr><td class="title" width="200px">' + "Site:";
  var v534 = v591 + '</td><td class="title">';
  var v440 = v534 + "Positions:";
  var v230 = v440 + "</td></tr>\n";
  JAMScript.call(v229.write, v229, [v230]);
  var i$$9 = 0;
  var v441 = arrayOfItems.length;
  var v246 = i$$9 < v441;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v442 = arrayOfItems[i$$9]
    }
    var v231 = v442.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v592 = arrayOfItems[i$$9]
    }
    var v535 = v592.match(/\)\D*\d+/);
    var v443 = v535.toString();
    var v232 = v443.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v444 = matchPosition >= lowerLimit;
      if(v444) {
        v444 = matchPosition < upperLimit
      }
      var v236 = v444;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v445 = matchPosition - shiftValue;
        var v235 = v445 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v536 = matchExp.lastIndex;
      var v593 = RegExp.lastMatch;
      var v537 = v593.length;
      var v446 = v536 - v537;
      v237.lastIndex = v446 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v447 = tempString$$1.search(/\d/);
    var v239 = v447 != -1;
    if(v239) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v243 = timesFound == 0;
    if(v243) {
      backGroundClass = "none"
    }else {
      var v242 = timesFound == 1;
      if(v242) {
        backGroundClass = "one"
      }else {
        var v241 = timesFound == 2;
        if(v241) {
          backGroundClass = "two"
        }else {
          var v240 = timesFound == 3;
          if(v240) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v244 = outputWindow.document;
    var v672 = '<tr><td class="' + backGroundClass;
    var v659 = v672 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v695 = arrayOfItems[i$$9]
    }
    var v684 = v695.match(/\([^\(]+\)/);
    var v673 = v684.toString();
    var v660 = v673.replace(/\(|\)/g, "");
    var v646 = v659 + v660;
    var v628 = v646 + '</td><td class="';
    var v594 = v628 + backGroundClass;
    var v538 = v594 + '">';
    var v448 = v538 + tempString$$1;
    var v245 = v448 + "</td></tr>\n";
    JAMScript.call(v244.write, v244, [v245]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v449 = arrayOfItems.length;
    v246 = i$$9 < v449
  }
  var v247 = outputWindow.document;
  JAMScript.call(v247.write, v247, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v248 = outputWindow.document;
  JAMScript.call(v248.write, v248, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v249 = outputWindow.document;
  var v647 = '<tr><td class="title">' + "Pattern:";
  var v629 = v647 + '</td><td class="title">';
  var v595 = v629 + "Times found:";
  var v539 = v595 + '</td><td class="title">';
  var v450 = v539 + "Percentage:";
  var v250 = v450 + "</td></tr>\n";
  JAMScript.call(v249.write, v249, [v250]);
  var i$$10 = 0;
  var v451 = arrayOfItems$$1.length;
  var v259 = i$$10 < v451;
  for(;v259;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v452 = arrayOfItems$$1[i$$10]
    }
    var v251 = v452.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v453 = sequence$$16.search(matchExp$$1);
    var v253 = v453 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v540 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v630 = arrayOfItems$$1[i$$10]
    }
    var v596 = v630.match(/\d+/);
    var v541 = parseFloat(v596);
    var v454 = v540 - v541;
    var v256 = v454 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v455 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v597 = arrayOfItems$$1[i$$10]
      }
      var v542 = v597.match(/\d+/);
      var v456 = parseFloat(v542);
      var v255 = v455 - v456;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v696 = arrayOfItems$$1[i$$10]
    }
    var v685 = v696.match(/\([^\(]+\)\b/);
    var v674 = v685.toString();
    var v661 = v674.replace(/\(|\)/g, "");
    var v648 = "<tr><td>" + v661;
    var v631 = v648 + "</td><td>";
    var v598 = v631 + tempNumber;
    var v543 = v598 + "</td><td>";
    var v544 = percentage.toFixed(2);
    var v457 = v543 + v544;
    var v258 = v457 + "</td></tr>\n";
    JAMScript.call(v257.write, v257, [v258]);
    i$$10 = i$$10 + 1;
    var v458 = arrayOfItems$$1.length;
    v259 = i$$10 < v458
  }
  var v260 = outputWindow.document;
  JAMScript.call(v260.write, v260, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v459 = sequence$$17.length;
  var v267 = v459 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v460 = Math.random();
    var v261 = v460 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v461 = tempSeq.length;
    var v266 = v461 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      JAMScript.call(v264.write, v264, [v265]);
      tempSeq = ""
    }
    var v462 = sequence$$17.length;
    v267 = v462 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  JAMScript.call(v268.write, v268, [v269]);
  return true
}
function emblFasta(theDocument) {
  var newDna = "";
  var maxInput$$3 = 2E5;
  var v463 = testScript();
  var v270 = v463 == false;
  if(v270) {
    return false
  }
  var v662 = theDocument.forms;
  var v649 = v662[0];
  var v632 = v649.elements;
  var v599 = v632[0];
  var v545 = checkFormElement(v599);
  var v464 = v545 == false;
  var v547 = !v464;
  if(v547) {
    var v686 = theDocument.forms;
    var v675 = v686[0];
    var v663 = v675.elements;
    var v650 = v663[0];
    var v633 = v650.value;
    var v600 = verifyEmbl(v633);
    var v546 = v600 == false;
    var v602 = !v546;
    if(v602) {
      var v687 = theDocument.forms;
      var v676 = v687[0];
      var v664 = v676.elements;
      var v651 = v664[0];
      var v634 = v651.value;
      var v601 = checkTextLength(v634, maxInput$$3);
      v546 = v601 == false
    }
    v464 = v546
  }
  var v271 = v464;
  if(v271) {
    return false
  }
  openWindow("EMBL to FASTA");
  openPre();
  var v635 = theDocument.forms;
  var v603 = v635[0];
  var v548 = v603.elements;
  var v465 = v548[0];
  var v272 = v465.value;
  emblToFasta(v272);
  closePre();
  closeWindow();
  return true
}
function emblToFasta(emblFile$$2) {
  var title$$9;
  var v273 = "_" + emblFile$$2;
  emblFile$$2 = v273 + "_";
  var recordArray = emblFile$$2.split(/ID\s\s\s[^\f\n\r]*/);
  var i$$11 = 1;
  var v466 = recordArray.length;
  var v283 = i$$11 < v466;
  for(;v283;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v274 = recordArray[i$$11]
    }
    var mainArray = v274.split(/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/);
    var v549 = mainArray[0];
    var v467 = v549.search(/[\f\n\r]\s*DE[^\f\n\r]+/);
    var v276 = v467 != -1;
    if(v276) {
      var v550 = mainArray[0];
      var v468 = v550.match(/[\f\n\r]\s*DE[^\f\n\r]+/);
      var v275 = v468.toString();
      title$$9 = v275.replace(/[\f\n\r]\s*DE\s*/, "")
    }else {
      title$$9 = "Untitled"
    }
    var v469 = title$$9.replace(/[\f\n\r\t]+$/g, "");
    var v277 = filterFastaTitle(v469);
    title$$9 = v277 + "\n";
    var v278 = mainArray[2];
    dnaArray = v278.split(/\/{2}/);
    var v470 = dnaArray.length;
    var v279 = v470 == 1;
    if(v279) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus()
    }
    var v280 = dnaArray[0];
    dnaSequence = removeNonDna(v280);
    var v281 = outputWindow.document;
    var v551 = "&gt;" + title$$9;
    var v552 = addReturns(dnaSequence);
    var v471 = v551 + v552;
    var v282 = v471 + "\n\n";
    JAMScript.call(v281.write, v281, [v282]);
    i$$11 = i$$11 + 1;
    var v472 = recordArray.length;
    v283 = i$$11 < v472
  }
  return true
}
JAMScript.set(document, "onload", v2);
var v284 = document.getElementById("submitbtn");
JAMScript.set(v284, "onclick", v3);
var v285 = document.getElementById("clearbtn");
JAMScript.set(v285, "onclick", v4);

