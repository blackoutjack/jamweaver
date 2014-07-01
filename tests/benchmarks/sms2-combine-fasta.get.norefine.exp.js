function v4() {
  var v555 = document.forms;
  var v474 = v555[0];
  var v286 = v474.elements;
  var v5 = v286[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    combineFasta(document)
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
      var v556 = arrayOfTitles[i$$1]
    }
    var v475 = v556.search(/\S/);
    var v290 = v475 == -1;
    var v477 = !v290;
    if(v477) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v606 = arrayOfSequences[i$$1]
      }
      var v557 = v606.search(/\S/);
      var v476 = v557 == -1;
      var v559 = !v476;
      if(v559) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v607 = arrayOfSequences[i$$1]
        }
        var v558 = v607.length;
        v476 = v558 != lengthOfAlign
      }
      v290 = v476
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
  var v478 = codonTable.search(/AmAcid/);
  var v292 = v478 == -1;
  var v480 = !v292;
  if(v480) {
    var v560 = codonTable.search(/Codon/);
    var v479 = v560 == -1;
    var v562 = !v479;
    if(v562) {
      var v608 = codonTable.search(/Number/);
      var v561 = v608 == -1;
      var v610 = !v561;
      if(v610) {
        var v641 = codonTable.search(/\/1000/);
        var v609 = v641 == -1;
        var v643 = !v609;
        if(v643) {
          var v642 = codonTable.search(/Fraction\s*\.\./);
          v609 = v642 == -1
        }
        v561 = v609
      }
      v479 = v561
    }
    v292 = v479
  }
  var v12 = v292;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v481 = formElement.value;
  var v293 = v481.search(/\S/);
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
      var v482 = arrayOfPatterns[z$$2]
    }
    var v295 = v482.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v295 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v483 = arrayOfPatterns[z$$2]
    }
    var v296 = moreExpressionCheck(v483);
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
      var v563 = arrayOfPatterns[j]
    }
    var v484 = v563.match(/\/.+\//);
    var v299 = v484 + "gi";
    if(JAMScript.isEval(eval)) {
      var v730 = eval("introspect(JAMScript.introspectors.processAll) { " + v299 + " }")
    }else {
      var v730 = JAMScript.call(eval, null, [v299])
    }
    v19[v20] = v730;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v485 = arrayOfPatterns[j]
    }
    var v300 = v485.match(/=[a-zA-Z\*]/);
    var v731 = v300.toString();
    v21[v22] = v731;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v301 = geneticCodeMatchResult[j]
    }
    var v732 = v301.replace(/=/g, "");
    v23[v24] = v732;
    j = j + 1;
    var v302 = arrayOfPatterns.length;
    v25 = j < v302
  }
  var i$$2 = 0;
  var v486 = testSequence.length;
  var v303 = v486 - 3;
  var v32 = i$$2 <= v303;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v304 = geneticCodeMatchExp.length;
    var v30 = j < v304;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v487 = geneticCodeMatchExp[j]
      }
      var v305 = codon.search(v487);
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
    var v488 = testSequence.length;
    var v308 = v488 - 3;
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
      var v489 = arrayOfPatterns$$1[z$$3]
    }
    var v310 = v489.search(/[^acdefghiklmnpqrstvwyz]/i);
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
      var v490 = arrayOfPatterns$$1[i$$3]
    }
    var v313 = "[" + v490;
    var v35 = v313 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v314 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v314;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v491 = arrayOfPatterns$$1[j$$1]
      }
      var v315 = v491.search(re);
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
      var v492 = arrayOfPatterns$$2[z$$4]
    }
    var v319 = v492.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v319 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v493 = arrayOfPatterns$$2[z$$4]
    }
    var v320 = moreExpressionCheck(v493);
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
  var v564 = getSequenceFromFasta(text$$7);
  var v494 = v564.replace(/[^A-Za-z]/g, "");
  var v322 = v494.length;
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
      var v495 = alignArray[i$$4]
    }
    var v328 = v495.search(/[^\s]+\s/);
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
      var v565 = arrayOfPatterns$$3[j$$2]
    }
    var v496 = v565.match(/\/.+\//);
    var v348 = v496 + "gi";
    if(JAMScript.isEval(eval)) {
      var v733 = eval("introspect(JAMScript.introspectors.processAll) { " + v348 + " }")
    }else {
      var v733 = JAMScript.call(eval, null, [v348])
    }
    v72[v73] = v733;
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
      var v497 = arrayOfPatterns$$4[j$$3]
    }
    var v351 = v497.match(/=[a-zA-Z\*]/);
    var v734 = v351.toString();
    v76[v77] = v734;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v352 = geneticCodeMatchResult$$1[j$$3]
    }
    var v735 = v352.replace(/=/g, "");
    v78[v79] = v735;
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
  var v498 = "Results for " + topology;
  var v359 = v498 + " ";
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
  var v499 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v380 = v499 != -1;
  var v501 = !v380;
  if(v501) {
    var v566 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v500 = v566 != -1;
    var v568 = !v500;
    if(v568) {
      var v611 = expressionToCheck.search(/\[\]/);
      var v567 = v611 != -1;
      var v613 = !v567;
      if(v613) {
        var v644 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v612 = v644 != -1;
        var v646 = !v612;
        if(v646) {
          var v658 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v645 = v658 != -1;
          var v660 = !v645;
          if(v660) {
            var v672 = expressionToCheck.search(/\|\|/);
            var v659 = v672 != -1;
            var v674 = !v659;
            if(v674) {
              var v683 = expressionToCheck.search(/\/\|/);
              var v673 = v683 != -1;
              var v685 = !v673;
              if(v685) {
                var v692 = expressionToCheck.search(/\|\//);
                var v684 = v692 != -1;
                var v694 = !v684;
                if(v694) {
                  var v701 = expressionToCheck.search(/\[.\]/);
                  var v693 = v701 != -1;
                  var v703 = !v693;
                  if(v703) {
                    var v708 = expressionToCheck.search(/\</);
                    var v702 = v708 != -1;
                    var v710 = !v702;
                    if(v710) {
                      var v709 = expressionToCheck.search(/\>/);
                      v702 = v709 != -1
                    }
                    v693 = v702
                  }
                  v684 = v693
                }
                v673 = v684
              }
              v659 = v673
            }
            v645 = v659
          }
          v612 = v645
        }
        v567 = v612
      }
      v500 = v567
    }
    v380 = v500
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
    var v736 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v736[2], v736[1], v736[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v569 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v502 = v569 + "<head>\n";
  var v381 = v502 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v381 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v723 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v719 = v723 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v715 = v719 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v711 = v715 + "div.info {font-weight: bold}\n";
    var v704 = v711 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v695 = v704 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v686 = v695 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v675 = v686 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v661 = v675 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v647 = v661 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v614 = v647 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v570 = v614 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v503 = v570 + "td.many {color: #000000}\n";
    var v382 = v503 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v382 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v727 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v724 = v727 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v720 = v724 + "div.title {display: none}\n";
    var v716 = v720 + "div.info {font-weight: bold}\n";
    var v712 = v716 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v705 = v712 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v696 = v705 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v687 = v696 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v676 = v687 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v662 = v676 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v648 = v662 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v615 = v648 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v571 = v615 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v504 = v571 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v383 = v504 + "img {display: none}\n";
    var v115 = v383 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v572 = "</head>\n" + '<body class="main">\n';
  var v505 = v572 + '<div class="title">';
  var v384 = v505 + title$$6;
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
    var v737 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v737[2], v737[1], v737[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v573 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v506 = v573 + "<head>\n";
  var v385 = v506 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v385 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v725 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v721 = v725 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v717 = v721 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v713 = v717 + "div.info {font-weight: bold}\n";
    var v706 = v713 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v697 = v706 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v688 = v697 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v677 = v688 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v663 = v677 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v649 = v663 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v616 = v649 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v574 = v616 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v507 = v574 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v386 = v507 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v386 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v729 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v728 = v729 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v726 = v728 + "div.title {display: none}\n";
    var v722 = v726 + "div.info {font-weight: bold}\n";
    var v718 = v722 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v714 = v718 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v707 = v714 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v698 = v707 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v689 = v698 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v678 = v689 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v664 = v678 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v650 = v664 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v617 = v650 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v575 = v617 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v508 = v575 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v387 = v508 + "img {display: none}\n";
    var v123 = v387 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v576 = "</head>\n" + '<body class="main">\n';
  var v509 = v576 + '<div class="title">';
  var v388 = v509 + title$$8;
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
function reverse(dnaSequence$$1) {
  var tempDnaArray = new Array;
  var v389 = dnaSequence$$1.search(/./);
  var v126 = v389 != -1;
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
  var v510 = emblFile.search(/ID/);
  var v395 = v510 == -1;
  var v512 = !v395;
  if(v512) {
    var v577 = emblFile.search(/AC/);
    var v511 = v577 == -1;
    var v579 = !v511;
    if(v579) {
      var v618 = emblFile.search(/DE/);
      var v578 = v618 == -1;
      var v620 = !v578;
      if(v620) {
        var v619 = emblFile.search(/SQ/);
        v578 = v619 == -1
      }
      v511 = v578
    }
    v395 = v511
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
function verifyDna(dnaSequence$$2) {
  var v398 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
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
  var v513 = genBankFile.search(/LOCUS/);
  var v400 = v513 == -1;
  var v515 = !v400;
  if(v515) {
    var v580 = genBankFile.search(/DEFINITION/);
    var v514 = v580 == -1;
    var v582 = !v514;
    if(v582) {
      var v621 = genBankFile.search(/ACCESSION/);
      var v581 = v621 == -1;
      var v623 = !v581;
      if(v623) {
        var v622 = genBankFile.search(/ORIGIN/);
        v581 = v622 == -1
      }
      v514 = v581
    }
    v400 = v514
  }
  var v143 = v400;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v516 = genBankFile$$1.search(/LOCUS/);
  var v401 = v516 == -1;
  var v518 = !v401;
  if(v518) {
    var v583 = genBankFile$$1.search(/DEFINITION/);
    var v517 = v583 == -1;
    var v585 = !v517;
    if(v585) {
      var v624 = genBankFile$$1.search(/ACCESSION/);
      var v584 = v624 == -1;
      var v626 = !v584;
      if(v626) {
        var v625 = genBankFile$$1.search(/ORIGIN/);
        v584 = v625 == -1
      }
      v517 = v584
    }
    v401 = v517
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
  var v519 = emblFile$$1.search(/ID/);
  var v403 = v519 == -1;
  var v521 = !v403;
  if(v521) {
    var v586 = emblFile$$1.search(/AC/);
    var v520 = v586 == -1;
    var v588 = !v520;
    if(v588) {
      var v627 = emblFile$$1.search(/DE/);
      var v587 = v627 == -1;
      var v629 = !v587;
      if(v629) {
        var v628 = emblFile$$1.search(/SQ/);
        v587 = v628 == -1
      }
      v520 = v587
    }
    v403 = v520
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
      var v589 = adjustNumbering(lineNum, numberingAdjustment);
      var v522 = rightNum(v589, "", 8, tabIn$$3);
      var v414 = v522 + lineOfText$$1;
      var v164 = v414 + "\n";
      JAMScript.call(v163.write, v163, [v164]);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v590 = adjustNumbering(lineNum, numberingAdjustment);
        var v523 = rightNum(v590, "", 8, tabIn$$3);
        var v524 = complement(lineOfText$$1);
        var v415 = v523 + v524;
        var v166 = v415 + "\n";
        JAMScript.call(v165.write, v165, [v166]);
        var v167 = outputWindow.document;
        JAMScript.call(v167.write, v167, ["\n"])
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v525 = adjustNumbering(i$$6, numberingAdjustment);
        var v416 = lineOfText$$1 + v525;
        var v170 = v416 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v526 = complement(lineOfText$$1);
          var v527 = adjustNumbering(i$$6, numberingAdjustment);
          var v417 = v526 + v527;
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
      var v528 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v423 = v528 + lineOfText$$2;
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
  var v529 = sequence$$13.length;
  var v425 = v529 <= firstIndexToMutate;
  var v531 = !v425;
  if(v531) {
    var v530 = lastIndexToMutate < 0;
    var v591 = !v530;
    if(v591) {
      v530 = lastIndexToMutate <= firstIndexToMutate
    }
    v425 = v530
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
    var v532 = !v427;
    if(v532) {
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
    var v592 = sequence$$15.length;
    var v533 = v592 - lookAhead;
    var v534 = sequence$$15.length;
    var v439 = sequence$$15.substring(v533, v534);
    var v225 = v439 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  JAMScript.call(v228.write, v228, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v229 = outputWindow.document;
  var v593 = '<tr><td class="title" width="200px">' + "Site:";
  var v535 = v593 + '</td><td class="title">';
  var v440 = v535 + "Positions:";
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
      var v594 = arrayOfItems[i$$9]
    }
    var v536 = v594.match(/\)\D*\d+/);
    var v443 = v536.toString();
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
      var v537 = matchExp.lastIndex;
      var v595 = RegExp.lastMatch;
      var v538 = v595.length;
      var v446 = v537 - v538;
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
    var v679 = '<tr><td class="' + backGroundClass;
    var v665 = v679 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v699 = arrayOfItems[i$$9]
    }
    var v690 = v699.match(/\([^\(]+\)/);
    var v680 = v690.toString();
    var v666 = v680.replace(/\(|\)/g, "");
    var v651 = v665 + v666;
    var v630 = v651 + '</td><td class="';
    var v596 = v630 + backGroundClass;
    var v539 = v596 + '">';
    var v448 = v539 + tempString$$1;
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
  var v652 = '<tr><td class="title">' + "Pattern:";
  var v631 = v652 + '</td><td class="title">';
  var v597 = v631 + "Times found:";
  var v540 = v597 + '</td><td class="title">';
  var v450 = v540 + "Percentage:";
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
    var v541 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v632 = arrayOfItems$$1[i$$10]
    }
    var v598 = v632.match(/\d+/);
    var v542 = parseFloat(v598);
    var v454 = v541 - v542;
    var v256 = v454 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v455 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v599 = arrayOfItems$$1[i$$10]
      }
      var v543 = v599.match(/\d+/);
      var v456 = parseFloat(v543);
      var v255 = v455 - v456;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v700 = arrayOfItems$$1[i$$10]
    }
    var v691 = v700.match(/\([^\(]+\)\b/);
    var v681 = v691.toString();
    var v667 = v681.replace(/\(|\)/g, "");
    var v653 = "<tr><td>" + v667;
    var v633 = v653 + "</td><td>";
    var v600 = v633 + tempNumber;
    var v544 = v600 + "</td><td>";
    var v545 = percentage.toFixed(2);
    var v457 = v544 + v545;
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
function combineFasta(theDocument) {
  var maxInput$$3 = 5E5;
  var sequenceCount = 0;
  var sequences = new Array;
  var v463 = testScript();
  var v270 = v463 == false;
  if(v270) {
    return false
  }
  var v668 = theDocument.forms;
  var v654 = v668[0];
  var v634 = v654.elements;
  var v601 = v634[0];
  var v546 = checkFormElement(v601);
  var v464 = v546 == false;
  var v548 = !v464;
  if(v548) {
    var v682 = theDocument.forms;
    var v669 = v682[0];
    var v655 = v669.elements;
    var v635 = v655[0];
    var v602 = v635.value;
    var v547 = checkTextLength(v602, maxInput$$3);
    v464 = v547 == false
  }
  var v271 = v464;
  if(v271) {
    return false
  }
  var v636 = theDocument.forms;
  var v603 = v636[0];
  var v549 = v603.elements;
  var v465 = v549[0];
  var v272 = v465.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v272);
  var i$$11 = 0;
  var v466 = arrayOfFasta$$1.length;
  var v274 = i$$11 < v466;
  for(;v274;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v550 = arrayOfFasta$$1[i$$11]
    }
    var v467 = getSequenceFromFasta(v550);
    var v273 = removeNonLetters(v467);
    sequences.push(v273);
    i$$11 = i$$11 + 1;
    var v468 = arrayOfFasta$$1.length;
    v274 = i$$11 < v468
  }
  var sequence$$18 = sequences.join("");
  openWindow("Combine FASTA");
  openPre();
  var v469 = sequences.length;
  var v281 = v469 == 1;
  if(v281) {
    var v275 = outputWindow.document;
    var v670 = sequence$$18.length;
    var v656 = "&gt;results for " + v670;
    var v637 = v656 + " residue sequence made from ";
    var v638 = sequences.length;
    var v604 = v637 + v638;
    var v551 = v604 + ' records, starting "';
    var v552 = sequence$$18.substring(0, 10);
    var v470 = v551 + v552;
    var v276 = v470 + '"\n';
    JAMScript.call(v275.write, v275, [v276])
  }else {
    var v471 = sequences.length;
    var v280 = v471 > 1;
    if(v280) {
      var v277 = outputWindow.document;
      var v671 = sequence$$18.length;
      var v657 = "&gt;results for " + v671;
      var v639 = v657 + " residue sequence made from ";
      var v640 = sequences.length;
      var v605 = v639 + v640;
      var v553 = v605 + ' records, starting "';
      var v554 = sequence$$18.substring(0, 10);
      var v472 = v553 + v554;
      var v278 = v472 + '"\n';
      JAMScript.call(v277.write, v277, [v278])
    }else {
      var v279 = outputWindow.document;
      JAMScript.call(v279.write, v279, ['<div class="info">No sequence records were read</div>\n'])
    }
  }
  var v282 = outputWindow.document;
  var v473 = addReturns(sequence$$18);
  var v283 = v473 + "\n";
  JAMScript.call(v282.write, v282, [v283]);
  closePre();
  closeWindow();
  return true
}
JAMScript.set(document, "onload", v2);
var v284 = document.getElementById("submitbtn");
JAMScript.set(v284, "onclick", v3);
var v285 = document.getElementById("clearbtn");
JAMScript.set(v285, "onclick", v4);

