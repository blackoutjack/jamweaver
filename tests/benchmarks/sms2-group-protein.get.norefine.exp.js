function v4() {
  var v552 = document.forms;
  var v470 = v552[0];
  var v285 = v470.elements;
  var v5 = v285[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    groupProtein(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v286 = document.main_form;
  var v7 = v286.main_submit;
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
  var v287 = arrayOfSequences.length;
  var v9 = v287 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v288 = arrayOfTitles.length;
  var v11 = i$$1 < v288;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v553 = arrayOfTitles[i$$1]
    }
    var v471 = v553.search(/\S/);
    var v289 = v471 == -1;
    var v473 = !v289;
    if(v473) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v607 = arrayOfSequences[i$$1]
      }
      var v554 = v607.search(/\S/);
      var v472 = v554 == -1;
      var v556 = !v472;
      if(v556) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v608 = arrayOfSequences[i$$1]
        }
        var v555 = v608.length;
        v472 = v555 != lengthOfAlign
      }
      v289 = v472
    }
    var v10 = v289;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v290 = arrayOfTitles.length;
    v11 = i$$1 < v290
  }
  return true
}
function checkCodonTable(codonTable) {
  var v474 = codonTable.search(/AmAcid/);
  var v291 = v474 == -1;
  var v476 = !v291;
  if(v476) {
    var v557 = codonTable.search(/Codon/);
    var v475 = v557 == -1;
    var v559 = !v475;
    if(v559) {
      var v609 = codonTable.search(/Number/);
      var v558 = v609 == -1;
      var v611 = !v558;
      if(v611) {
        var v644 = codonTable.search(/\/1000/);
        var v610 = v644 == -1;
        var v646 = !v610;
        if(v646) {
          var v645 = codonTable.search(/Fraction\s*\.\./);
          v610 = v645 == -1
        }
        v558 = v610
      }
      v475 = v558
    }
    v291 = v475
  }
  var v12 = v291;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v477 = formElement.value;
  var v292 = v477.search(/\S/);
  var v13 = v292 == -1;
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
  var v293 = arrayOfPatterns.length;
  var v16 = z$$2 < v293;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v478 = arrayOfPatterns[z$$2]
    }
    var v294 = v478.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v294 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v479 = arrayOfPatterns[z$$2]
    }
    var v295 = moreExpressionCheck(v479);
    var v15 = v295 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v296 = arrayOfPatterns.length;
    v16 = z$$2 < v296
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v297 = arrayOfPatterns.length;
  var v25 = j < v297;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v560 = arrayOfPatterns[j]
    }
    var v480 = v560.match(/\/.+\//);
    var v298 = v480 + "gi";
    if(JAMScript.isEval(eval)) {
      var v741 = eval("introspect(JAMScript.introspectors.processAll) { " + v298 + " }")
    }else {
      var v741 = JAMScript.call(eval, null, [v298])
    }
    v19[v20] = v741;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v481 = arrayOfPatterns[j]
    }
    var v299 = v481.match(/=[a-zA-Z\*]/);
    var v742 = v299.toString();
    v21[v22] = v742;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v300 = geneticCodeMatchResult[j]
    }
    var v743 = v300.replace(/=/g, "");
    v23[v24] = v743;
    j = j + 1;
    var v301 = arrayOfPatterns.length;
    v25 = j < v301
  }
  var i$$2 = 0;
  var v482 = testSequence.length;
  var v302 = v482 - 3;
  var v32 = i$$2 <= v302;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v303 = geneticCodeMatchExp.length;
    var v30 = j < v303;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v483 = geneticCodeMatchExp[j]
      }
      var v304 = codon.search(v483);
      var v29 = v304 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v305 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v305 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v306 = geneticCodeMatchExp.length;
      v30 = j < v306
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v484 = testSequence.length;
    var v307 = v484 - 3;
    v32 = i$$2 <= v307
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v308 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v308;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v485 = arrayOfPatterns$$1[z$$3]
    }
    var v309 = v485.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v309 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v310 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v310
  }
  var i$$3 = 0;
  var v311 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v311;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v486 = arrayOfPatterns$$1[i$$3]
    }
    var v312 = "[" + v486;
    var v35 = v312 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v313 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v313;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v487 = arrayOfPatterns$$1[j$$1]
      }
      var v314 = v487.search(re);
      var v36 = v314 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v315 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v315
    }
    i$$3 = i$$3 + 1;
    var v316 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v316
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v317 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v317;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v488 = arrayOfPatterns$$2[z$$4]
    }
    var v318 = v488.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v318 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v489 = arrayOfPatterns$$2[z$$4]
    }
    var v319 = moreExpressionCheck(v489);
    var v40 = v319 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v320 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v320
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v561 = getSequenceFromFasta(text$$7);
  var v490 = v561.replace(/[^A-Za-z]/g, "");
  var v321 = v490.length;
  var v43 = v321 > maxInput;
  if(v43) {
    var v322 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v322 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v323 = text$$8.length;
  var v45 = v323 > maxInput$$1;
  if(v45) {
    var v324 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v324 + " characters.";
    alert(v44);
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
  var v325 = alignArray.length;
  var v52 = v325 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v326 = alignArray.length;
  var v54 = i$$4 < v326;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v491 = alignArray[i$$4]
    }
    var v327 = v491.search(/[^\s]+\s/);
    var v53 = v327 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v328 = alignArray.length;
    v54 = i$$4 < v328
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
  var v329 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v329 != -1;
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
  var v330 = sequence$$2.length;
  var v58 = "&gt;results for " + v330;
  var stringToReturn = v58 + " residue sequence ";
  var v331 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v331 != -1;
  if(v60) {
    var v332 = stringToReturn + '"';
    var v59 = v332 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v333 = stringToReturn + ' starting "';
  var v334 = sequence$$2.substring(0, 10);
  var v61 = v333 + v334;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v335 = sequenceOne.length;
  var v62 = "Search results for " + v335;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v336 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v336 != -1;
  if(v64) {
    var v337 = stringToReturn$$1 + '"';
    var v63 = v337 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v338 = stringToReturn$$1 + ' starting "';
  var v339 = sequenceOne.substring(0, 10);
  var v65 = v338 + v339;
  stringToReturn$$1 = v65 + '"\n';
  var v340 = stringToReturn$$1 + "and ";
  var v341 = sequenceTwo.length;
  var v66 = v340 + v341;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v342 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v342 != -1;
  if(v68) {
    var v343 = stringToReturn$$1 + '"';
    var v67 = v343 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v344 = stringToReturn$$1 + ' starting "';
  var v345 = sequenceTwo.substring(0, 10);
  var v69 = v344 + v345;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v346 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v346;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v562 = arrayOfPatterns$$3[j$$2]
    }
    var v492 = v562.match(/\/.+\//);
    var v347 = v492 + "gi";
    if(JAMScript.isEval(eval)) {
      var v744 = eval("introspect(JAMScript.introspectors.processAll) { " + v347 + " }")
    }else {
      var v744 = JAMScript.call(eval, null, [v347])
    }
    v72[v73] = v744;
    j$$2 = j$$2 + 1;
    var v348 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v348
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v349 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v349;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v493 = arrayOfPatterns$$4[j$$3]
    }
    var v350 = v493.match(/=[a-zA-Z\*]/);
    var v745 = v350.toString();
    v76[v77] = v745;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v351 = geneticCodeMatchResult$$1[j$$3]
    }
    var v746 = v351.replace(/=/g, "");
    v78[v79] = v746;
    j$$3 = j$$3 + 1;
    var v352 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v352
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v353 = sequence$$3.length;
  var v81 = "Results for " + v353;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v354 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v354 != -1;
  if(v83) {
    var v355 = stringToReturn$$2 + '"';
    var v82 = v355 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v356 = stringToReturn$$2 + ' starting "';
  var v357 = sequence$$3.substring(0, 10);
  var v84 = v356 + v357;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v494 = "Results for " + topology;
  var v358 = v494 + " ";
  var v359 = sequence$$4.length;
  var v86 = v358 + v359;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v360 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v360 != -1;
  if(v88) {
    var v361 = stringToReturn$$3 + '"';
    var v87 = v361 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v362 = stringToReturn$$3 + ' starting "';
  var v363 = sequence$$4.substring(0, 10);
  var v89 = v362 + v363;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v364 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v364;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v365 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v365 != -1;
  if(v93) {
    var v366 = stringToReturn$$4 + '"';
    var v92 = v366 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v367 = stringToReturn$$4 + ' starting "';
  var v368 = sequenceOne$$1.substring(0, 10);
  var v94 = v367 + v368;
  stringToReturn$$4 = v94 + '"\n';
  var v369 = stringToReturn$$4 + "and ";
  var v370 = sequenceTwo$$1.length;
  var v95 = v369 + v370;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v371 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v371 != -1;
  if(v97) {
    var v372 = stringToReturn$$4 + '"';
    var v96 = v372 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v373 = stringToReturn$$4 + ' starting "';
  var v374 = sequenceTwo$$1.substring(0, 10);
  var v98 = v373 + v374;
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
    var v375 = Math.random();
    var v376 = components.length;
    var v100 = v375 * v376;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v377 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v377 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v378 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v378 != -1;
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
  var v495 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v379 = v495 != -1;
  var v497 = !v379;
  if(v497) {
    var v563 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v496 = v563 != -1;
    var v565 = !v496;
    if(v565) {
      var v612 = expressionToCheck.search(/\[\]/);
      var v564 = v612 != -1;
      var v614 = !v564;
      if(v614) {
        var v647 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v613 = v647 != -1;
        var v649 = !v613;
        if(v649) {
          var v665 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v648 = v665 != -1;
          var v667 = !v648;
          if(v667) {
            var v683 = expressionToCheck.search(/\|\|/);
            var v666 = v683 != -1;
            var v685 = !v666;
            if(v685) {
              var v694 = expressionToCheck.search(/\/\|/);
              var v684 = v694 != -1;
              var v696 = !v684;
              if(v696) {
                var v703 = expressionToCheck.search(/\|\//);
                var v695 = v703 != -1;
                var v705 = !v695;
                if(v705) {
                  var v712 = expressionToCheck.search(/\[.\]/);
                  var v704 = v712 != -1;
                  var v714 = !v704;
                  if(v714) {
                    var v719 = expressionToCheck.search(/\</);
                    var v713 = v719 != -1;
                    var v721 = !v713;
                    if(v721) {
                      var v720 = expressionToCheck.search(/\>/);
                      v713 = v720 != -1
                    }
                    v704 = v713
                  }
                  v695 = v704
                }
                v684 = v695
              }
              v666 = v684
            }
            v648 = v666
          }
          v613 = v648
        }
        v564 = v613
      }
      v496 = v564
    }
    v379 = v496
  }
  var v105 = v379;
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
    var v747 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v747[2], v747[1], v747[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v566 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v498 = v566 + "<head>\n";
  var v380 = v498 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v380 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v734 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v730 = v734 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v726 = v730 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v722 = v726 + "div.info {font-weight: bold}\n";
    var v715 = v722 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v706 = v715 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v697 = v706 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v686 = v697 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v668 = v686 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v650 = v668 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v615 = v650 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v567 = v615 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v499 = v567 + "td.many {color: #000000}\n";
    var v381 = v499 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v381 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v738 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v735 = v738 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v731 = v735 + "div.title {display: none}\n";
    var v727 = v731 + "div.info {font-weight: bold}\n";
    var v723 = v727 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v716 = v723 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v707 = v716 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v698 = v707 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v687 = v698 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v669 = v687 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v651 = v669 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v616 = v651 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v568 = v616 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v500 = v568 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v382 = v500 + "img {display: none}\n";
    var v115 = v382 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v569 = "</head>\n" + '<body class="main">\n';
  var v501 = v569 + '<div class="title">';
  var v383 = v501 + title$$6;
  var v117 = v383 + " results</div>\n";
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
    var v748 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v748[2], v748[1], v748[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v570 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v502 = v570 + "<head>\n";
  var v384 = v502 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v384 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v736 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v732 = v736 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v728 = v732 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v724 = v728 + "div.info {font-weight: bold}\n";
    var v717 = v724 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v708 = v717 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v699 = v708 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v688 = v699 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v670 = v688 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v652 = v670 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v617 = v652 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v571 = v617 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v503 = v571 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v385 = v503 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v385 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v740 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v739 = v740 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v737 = v739 + "div.title {display: none}\n";
    var v733 = v737 + "div.info {font-weight: bold}\n";
    var v729 = v733 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v725 = v729 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v718 = v725 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v709 = v718 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v700 = v709 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v689 = v700 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v671 = v689 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v653 = v671 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v618 = v653 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v572 = v618 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v504 = v572 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v386 = v504 + "img {display: none}\n";
    var v123 = v386 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v573 = "</head>\n" + '<body class="main">\n';
  var v505 = v573 + '<div class="title">';
  var v387 = v505 + title$$8;
  var v125 = v387 + " results</div>\n";
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
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v388 = dnaSequence$$1.search(/./);
  var v126 = v388 != -1;
  if(v126) {
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
  var v389 = testArray[0];
  var v130 = v389 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v390 = testString.search(re$$2);
  var v131 = v390 == -1;
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
  var v391 = testNum.toFixed(3);
  var v134 = v391 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v392 = testNum.toPrecision(5);
  var v135 = v392 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v393 = theNumber$$1.search(/\d/);
  var v136 = v393 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v506 = emblFile.search(/ID/);
  var v394 = v506 == -1;
  var v508 = !v394;
  if(v508) {
    var v574 = emblFile.search(/AC/);
    var v507 = v574 == -1;
    var v576 = !v507;
    if(v576) {
      var v619 = emblFile.search(/DE/);
      var v575 = v619 == -1;
      var v621 = !v575;
      if(v621) {
        var v620 = emblFile.search(/SQ/);
        v575 = v620 == -1
      }
      v507 = v575
    }
    v394 = v507
  }
  var v137 = v394;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v395 = theNumber$$2.search(/\d/);
  var v138 = v395 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v396 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v396 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v397 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v397 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v398 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v398 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v509 = genBankFile.search(/LOCUS/);
  var v399 = v509 == -1;
  var v511 = !v399;
  if(v511) {
    var v577 = genBankFile.search(/DEFINITION/);
    var v510 = v577 == -1;
    var v579 = !v510;
    if(v579) {
      var v622 = genBankFile.search(/ACCESSION/);
      var v578 = v622 == -1;
      var v624 = !v578;
      if(v624) {
        var v623 = genBankFile.search(/ORIGIN/);
        v578 = v623 == -1
      }
      v510 = v578
    }
    v399 = v510
  }
  var v143 = v399;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v512 = genBankFile$$1.search(/LOCUS/);
  var v400 = v512 == -1;
  var v514 = !v400;
  if(v514) {
    var v580 = genBankFile$$1.search(/DEFINITION/);
    var v513 = v580 == -1;
    var v582 = !v513;
    if(v582) {
      var v625 = genBankFile$$1.search(/ACCESSION/);
      var v581 = v625 == -1;
      var v627 = !v581;
      if(v627) {
        var v626 = genBankFile$$1.search(/ORIGIN/);
        v581 = v626 == -1
      }
      v513 = v581
    }
    v400 = v513
  }
  var v144 = v400;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v401 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v401 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v515 = emblFile$$1.search(/ID/);
  var v402 = v515 == -1;
  var v517 = !v402;
  if(v517) {
    var v583 = emblFile$$1.search(/AC/);
    var v516 = v583 == -1;
    var v585 = !v516;
    if(v585) {
      var v628 = emblFile$$1.search(/DE/);
      var v584 = v628 == -1;
      var v630 = !v584;
      if(v630) {
        var v629 = emblFile$$1.search(/SQ/);
        v584 = v629 == -1
      }
      v516 = v584
    }
    v402 = v516
  }
  var v146 = v402;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v403 = emblFile$$1.search(/^FT/m);
  var v147 = v403 == -1;
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
    var v404 = basePerLine / groupSize;
    var v151 = j$$6 <= v404;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v405 = k + i$$5;
        var v149 = text$$10.charAt(v405);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v406 = basePerLine / groupSize;
      v151 = j$$6 <= v406
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
    var v407 = adjustment < 0;
    if(v407) {
      v407 = adjusted >= 0
    }
    var v155 = v407;
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
    var v408 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v408;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v409 = i$$6 + k$$1;
        var v156 = v409 >= stopBase$$2;
        if(v156) {
          break
        }
        var v410 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v410);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v411 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v411, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v412 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v412
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v586 = adjustNumbering(lineNum, numberingAdjustment);
      var v518 = rightNum(v586, "", 8, tabIn$$3);
      var v413 = v518 + lineOfText$$1;
      var v164 = v413 + "\n";
      JAMScript.call(v163.write, v163, [v164]);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v587 = adjustNumbering(lineNum, numberingAdjustment);
        var v519 = rightNum(v587, "", 8, tabIn$$3);
        var v520 = complement(lineOfText$$1);
        var v414 = v519 + v520;
        var v166 = v414 + "\n";
        JAMScript.call(v165.write, v165, [v166]);
        var v167 = outputWindow.document;
        JAMScript.call(v167.write, v167, ["\n"])
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v521 = adjustNumbering(i$$6, numberingAdjustment);
        var v415 = lineOfText$$1 + v521;
        var v170 = v415 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v522 = complement(lineOfText$$1);
          var v523 = adjustNumbering(i$$6, numberingAdjustment);
          var v416 = v522 + v523;
          var v172 = v416 + "\n";
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
            var v417 = complement(lineOfText$$1);
            var v180 = v417 + "\n";
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
    var v418 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v418;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v419 = i$$7 + k$$2;
        var v187 = v419 >= stopBase$$3;
        if(v187) {
          break
        }
        var v420 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v420);
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
      var v421 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v421
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v524 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v422 = v524 + lineOfText$$2;
      var v195 = v422 + "\n";
      JAMScript.call(v194.write, v194, [v195])
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v423 = lineOfText$$2 + i$$7;
        var v197 = v423 + "\n";
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
  var v525 = sequence$$13.length;
  var v424 = v525 <= firstIndexToMutate;
  var v527 = !v424;
  if(v527) {
    var v526 = lastIndexToMutate < 0;
    var v588 = !v526;
    if(v588) {
      v526 = lastIndexToMutate <= firstIndexToMutate
    }
    v424 = v526
  }
  var v206 = v424;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v425 = Math.random();
    var v207 = v425 * maxNum;
    randNum = Math.floor(v207);
    var v426 = randNum < firstIndexToMutate;
    var v528 = !v426;
    if(v528) {
      v426 = randNum > lastIndexToMutate
    }
    var v208 = v426;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v427 = Math.random();
      var v428 = components$$1.length;
      var v209 = v427 * v428;
      componentsIndex = Math.round(v209);
      var v429 = components$$1.length;
      var v210 = componentsIndex == v429;
      if(v210) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v430 = components$$1[componentsIndex]
      }
      var v211 = v430 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v431 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v432 = components$$1[componentsIndex]
    }
    var v212 = v431 + v432;
    var v433 = randNum + 1;
    var v434 = sequence$$13.length;
    var v213 = sequence$$13.substring(v433, v434);
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
    var v435 = Math.random();
    var v436 = components$$2.length;
    var v217 = v435 * v436;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v437 = sequence$$14.length;
    var v220 = v437 == 60;
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
    var v589 = sequence$$15.length;
    var v529 = v589 - lookAhead;
    var v530 = sequence$$15.length;
    var v438 = sequence$$15.substring(v529, v530);
    var v225 = v438 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  JAMScript.call(v228.write, v228, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v229 = outputWindow.document;
  var v590 = '<tr><td class="title" width="200px">' + "Site:";
  var v531 = v590 + '</td><td class="title">';
  var v439 = v531 + "Positions:";
  var v230 = v439 + "</td></tr>\n";
  JAMScript.call(v229.write, v229, [v230]);
  var i$$9 = 0;
  var v440 = arrayOfItems.length;
  var v246 = i$$9 < v440;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v441 = arrayOfItems[i$$9]
    }
    var v231 = v441.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v591 = arrayOfItems[i$$9]
    }
    var v532 = v591.match(/\)\D*\d+/);
    var v442 = v532.toString();
    var v232 = v442.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v443 = matchPosition >= lowerLimit;
      if(v443) {
        v443 = matchPosition < upperLimit
      }
      var v236 = v443;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v444 = matchPosition - shiftValue;
        var v235 = v444 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v533 = matchExp.lastIndex;
      var v592 = RegExp.lastMatch;
      var v534 = v592.length;
      var v445 = v533 - v534;
      v237.lastIndex = v445 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v446 = tempString$$1.search(/\d/);
    var v239 = v446 != -1;
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
    var v690 = '<tr><td class="' + backGroundClass;
    var v672 = v690 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v710 = arrayOfItems[i$$9]
    }
    var v701 = v710.match(/\([^\(]+\)/);
    var v691 = v701.toString();
    var v673 = v691.replace(/\(|\)/g, "");
    var v654 = v672 + v673;
    var v631 = v654 + '</td><td class="';
    var v593 = v631 + backGroundClass;
    var v535 = v593 + '">';
    var v447 = v535 + tempString$$1;
    var v245 = v447 + "</td></tr>\n";
    JAMScript.call(v244.write, v244, [v245]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v448 = arrayOfItems.length;
    v246 = i$$9 < v448
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
  var v655 = '<tr><td class="title">' + "Pattern:";
  var v632 = v655 + '</td><td class="title">';
  var v594 = v632 + "Times found:";
  var v536 = v594 + '</td><td class="title">';
  var v449 = v536 + "Percentage:";
  var v250 = v449 + "</td></tr>\n";
  JAMScript.call(v249.write, v249, [v250]);
  var i$$10 = 0;
  var v450 = arrayOfItems$$1.length;
  var v259 = i$$10 < v450;
  for(;v259;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v451 = arrayOfItems$$1[i$$10]
    }
    var v251 = v451.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v452 = sequence$$16.search(matchExp$$1);
    var v253 = v452 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v537 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v633 = arrayOfItems$$1[i$$10]
    }
    var v595 = v633.match(/\d+/);
    var v538 = parseFloat(v595);
    var v453 = v537 - v538;
    var v256 = v453 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v454 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v596 = arrayOfItems$$1[i$$10]
      }
      var v539 = v596.match(/\d+/);
      var v455 = parseFloat(v539);
      var v255 = v454 - v455;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v711 = arrayOfItems$$1[i$$10]
    }
    var v702 = v711.match(/\([^\(]+\)\b/);
    var v692 = v702.toString();
    var v674 = v692.replace(/\(|\)/g, "");
    var v656 = "<tr><td>" + v674;
    var v634 = v656 + "</td><td>";
    var v597 = v634 + tempNumber;
    var v540 = v597 + "</td><td>";
    var v541 = percentage.toFixed(2);
    var v456 = v540 + v541;
    var v258 = v456 + "</td></tr>\n";
    JAMScript.call(v257.write, v257, [v258]);
    i$$10 = i$$10 + 1;
    var v457 = arrayOfItems$$1.length;
    v259 = i$$10 < v457
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
  var v458 = sequence$$17.length;
  var v267 = v458 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v459 = Math.random();
    var v261 = v459 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v460 = tempSeq.length;
    var v266 = v460 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      JAMScript.call(v264.write, v264, [v265]);
      tempSeq = ""
    }
    var v461 = sequence$$17.length;
    v267 = v461 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  JAMScript.call(v268.write, v268, [v269]);
  return true
}
function groupProtein(theDocument) {
  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v462 = testScript();
  var v270 = v462 == false;
  if(v270) {
    return false
  }
  var v675 = theDocument.forms;
  var v657 = v675[0];
  var v635 = v657.elements;
  var v598 = v635[0];
  var v542 = checkFormElement(v598);
  var v463 = v542 == false;
  var v544 = !v463;
  if(v544) {
    var v693 = theDocument.forms;
    var v676 = v693[0];
    var v658 = v676.elements;
    var v636 = v658[0];
    var v599 = v636.value;
    var v543 = checkSequenceLength(v599, maxInput$$3);
    v463 = v543 == false
  }
  var v271 = v463;
  if(v271) {
    return false
  }
  openWindow("Group Protein");
  openPre();
  var v637 = theDocument.forms;
  var v600 = v637[0];
  var v545 = v600.elements;
  var v464 = v545[0];
  var v272 = v464.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v272);
  var i$$11 = 0;
  var v465 = arrayOfFasta$$1.length;
  var v282 = i$$11 < v465;
  for(;v282;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v273 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v273);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v274 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v274);
    newProtein = removeNonProtein(newProtein);
    var v275 = outputWindow.document;
    var v276 = getInfoFromTitleAndSequence(title$$9, newProtein);
    JAMScript.call(v275.write, v275, [v276]);
    var v677 = theDocument.forms;
    var v659 = v677[0];
    var v638 = v659.elements;
    var v601 = v638[4];
    var v546 = v601.options;
    var v678 = theDocument.forms;
    var v660 = v678[0];
    var v639 = v660.elements;
    var v602 = v639[4];
    var v547 = v602.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v466 = v546[v547]
    }
    var v277 = v466.value;
    var v679 = theDocument.forms;
    var v661 = v679[0];
    var v640 = v661.elements;
    var v603 = v640[5];
    var v548 = v603.options;
    var v680 = theDocument.forms;
    var v662 = v680[0];
    var v641 = v662.elements;
    var v604 = v641[5];
    var v549 = v604.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v467 = v548[v549]
    }
    var v278 = v467.value;
    var v279 = newProtein.length;
    var v681 = theDocument.forms;
    var v663 = v681[0];
    var v642 = v663.elements;
    var v605 = v642[6];
    var v550 = v605.options;
    var v682 = theDocument.forms;
    var v664 = v682[0];
    var v643 = v664.elements;
    var v606 = v643[6];
    var v551 = v606.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v468 = v550[v551]
    }
    var v280 = v468.value;
    writeGroupNumProtein(newProtein, "", v277, v278, 0, v279, v280);
    var v281 = outputWindow.document;
    JAMScript.call(v281.write, v281, ["\n\n"]);
    i$$11 = i$$11 + 1;
    var v469 = arrayOfFasta$$1.length;
    v282 = i$$11 < v469
  }
  closePre();
  closeWindow();
  return true
}
JAMScript.set(document, "onload", v2);
var v283 = document.getElementById("submitbtn");
JAMScript.set(v283, "onclick", v3);
var v284 = document.getElementById("clearbtn");
JAMScript.set(v284, "onclick", v4);

