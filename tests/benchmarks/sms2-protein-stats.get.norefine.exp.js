function v4() {
  var v545 = document.forms;
  var v469 = v545[0];
  var v286 = v469.elements;
  var v5 = v286[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    proteinStats(document)
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
  function v0(str$$6, p1, offset$$12, s$$2) {
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
      var v546 = arrayOfTitles[i$$1]
    }
    var v470 = v546.search(/\S/);
    var v290 = v470 == -1;
    var v472 = !v290;
    if(v472) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v593 = arrayOfSequences[i$$1]
      }
      var v547 = v593.search(/\S/);
      var v471 = v547 == -1;
      var v549 = !v471;
      if(v549) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v594 = arrayOfSequences[i$$1]
        }
        var v548 = v594.length;
        v471 = v548 != lengthOfAlign
      }
      v290 = v471
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
  var v473 = codonTable.search(/AmAcid/);
  var v292 = v473 == -1;
  var v475 = !v292;
  if(v475) {
    var v550 = codonTable.search(/Codon/);
    var v474 = v550 == -1;
    var v552 = !v474;
    if(v552) {
      var v595 = codonTable.search(/Number/);
      var v551 = v595 == -1;
      var v597 = !v551;
      if(v597) {
        var v624 = codonTable.search(/\/1000/);
        var v596 = v624 == -1;
        var v626 = !v596;
        if(v626) {
          var v625 = codonTable.search(/Fraction\s*\.\./);
          v596 = v625 == -1
        }
        v551 = v596
      }
      v474 = v551
    }
    v292 = v474
  }
  var v12 = v292;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v476 = formElement.value;
  var v293 = v476.search(/\S/);
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
      var v477 = arrayOfPatterns[z$$2]
    }
    var v295 = v477.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v295 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v478 = arrayOfPatterns[z$$2]
    }
    var v296 = moreExpressionCheck(v478);
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
      var v553 = arrayOfPatterns[j]
    }
    var v479 = v553.match(/\/.+\//);
    var v299 = v479 + "gi";
    if(JAMScript.isEval(eval)) {
      var v709 = eval("introspect(JAMScript.introspectors.processAll) { " + v299 + " }")
    }else {
      var v709 = JAMScript.call(eval, null, [v299])
    }
    v19[v20] = v709;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v480 = arrayOfPatterns[j]
    }
    var v300 = v480.match(/=[a-zA-Z\*]/);
    var v710 = v300.toString();
    v21[v22] = v710;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v301 = geneticCodeMatchResult[j]
    }
    var v711 = v301.replace(/=/g, "");
    v23[v24] = v711;
    j = j + 1;
    var v302 = arrayOfPatterns.length;
    v25 = j < v302
  }
  var i$$2 = 0;
  var v481 = testSequence.length;
  var v303 = v481 - 3;
  var v32 = i$$2 <= v303;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v304 = geneticCodeMatchExp.length;
    var v30 = j < v304;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v482 = geneticCodeMatchExp[j]
      }
      var v305 = codon.search(v482);
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
    var v483 = testSequence.length;
    var v308 = v483 - 3;
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
      var v484 = arrayOfPatterns$$1[z$$3]
    }
    var v310 = v484.search(/[^acdefghiklmnpqrstvwyz]/i);
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
      var v485 = arrayOfPatterns$$1[i$$3]
    }
    var v313 = "[" + v485;
    var v35 = v313 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v314 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v314;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v486 = arrayOfPatterns$$1[j$$1]
      }
      var v315 = v486.search(re);
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
      var v487 = arrayOfPatterns$$2[z$$4]
    }
    var v319 = v487.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v319 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v488 = arrayOfPatterns$$2[z$$4]
    }
    var v320 = moreExpressionCheck(v488);
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
  var v554 = getSequenceFromFasta(text$$7);
  var v489 = v554.replace(/[^A-Za-z]/g, "");
  var v322 = v489.length;
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
      var v490 = alignArray[i$$4]
    }
    var v328 = v490.search(/[^\s]+\s/);
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
      var v555 = arrayOfPatterns$$3[j$$2]
    }
    var v491 = v555.match(/\/.+\//);
    var v348 = v491 + "gi";
    if(JAMScript.isEval(eval)) {
      var v712 = eval("introspect(JAMScript.introspectors.processAll) { " + v348 + " }")
    }else {
      var v712 = JAMScript.call(eval, null, [v348])
    }
    v72[v73] = v712;
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
      var v492 = arrayOfPatterns$$4[j$$3]
    }
    var v351 = v492.match(/=[a-zA-Z\*]/);
    var v713 = v351.toString();
    v76[v77] = v713;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v352 = geneticCodeMatchResult$$1[j$$3]
    }
    var v714 = v352.replace(/=/g, "");
    v78[v79] = v714;
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
  var v493 = "Results for " + topology;
  var v359 = v493 + " ";
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
  var v494 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v380 = v494 != -1;
  var v496 = !v380;
  if(v496) {
    var v556 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v495 = v556 != -1;
    var v558 = !v495;
    if(v558) {
      var v598 = expressionToCheck.search(/\[\]/);
      var v557 = v598 != -1;
      var v600 = !v557;
      if(v600) {
        var v627 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v599 = v627 != -1;
        var v629 = !v599;
        if(v629) {
          var v639 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v628 = v639 != -1;
          var v641 = !v628;
          if(v641) {
            var v651 = expressionToCheck.search(/\|\|/);
            var v640 = v651 != -1;
            var v653 = !v640;
            if(v653) {
              var v662 = expressionToCheck.search(/\/\|/);
              var v652 = v662 != -1;
              var v664 = !v652;
              if(v664) {
                var v671 = expressionToCheck.search(/\|\//);
                var v663 = v671 != -1;
                var v673 = !v663;
                if(v673) {
                  var v680 = expressionToCheck.search(/\[.\]/);
                  var v672 = v680 != -1;
                  var v682 = !v672;
                  if(v682) {
                    var v687 = expressionToCheck.search(/\</);
                    var v681 = v687 != -1;
                    var v689 = !v681;
                    if(v689) {
                      var v688 = expressionToCheck.search(/\>/);
                      v681 = v688 != -1
                    }
                    v672 = v681
                  }
                  v663 = v672
                }
                v652 = v663
              }
              v640 = v652
            }
            v628 = v640
          }
          v599 = v628
        }
        v557 = v599
      }
      v495 = v557
    }
    v380 = v495
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
    var v715 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v715[2], v715[1], v715[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v559 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v497 = v559 + "<head>\n";
  var v381 = v497 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v381 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v702 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v698 = v702 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v694 = v698 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v690 = v694 + "div.info {font-weight: bold}\n";
    var v683 = v690 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v674 = v683 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v665 = v674 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v654 = v665 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v642 = v654 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v630 = v642 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v601 = v630 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v560 = v601 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v498 = v560 + "td.many {color: #000000}\n";
    var v382 = v498 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v382 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v706 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v703 = v706 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v699 = v703 + "div.title {display: none}\n";
    var v695 = v699 + "div.info {font-weight: bold}\n";
    var v691 = v695 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v684 = v691 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v675 = v684 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v666 = v675 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v655 = v666 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v643 = v655 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v631 = v643 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v602 = v631 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v561 = v602 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v499 = v561 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v383 = v499 + "img {display: none}\n";
    var v115 = v383 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v562 = "</head>\n" + '<body class="main">\n';
  var v500 = v562 + '<div class="title">';
  var v384 = v500 + title$$6;
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
    var v716 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v716[2], v716[1], v716[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v563 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v501 = v563 + "<head>\n";
  var v385 = v501 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v385 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v704 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v700 = v704 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v696 = v700 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v692 = v696 + "div.info {font-weight: bold}\n";
    var v685 = v692 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v676 = v685 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v667 = v676 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v656 = v667 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v644 = v656 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v632 = v644 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v603 = v632 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v564 = v603 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v502 = v564 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v386 = v502 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v386 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v708 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v707 = v708 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v705 = v707 + "div.title {display: none}\n";
    var v701 = v705 + "div.info {font-weight: bold}\n";
    var v697 = v701 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v693 = v697 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v686 = v693 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v677 = v686 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v668 = v677 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v657 = v668 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v645 = v657 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v633 = v645 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v604 = v633 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v565 = v604 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v503 = v565 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v387 = v503 + "img {display: none}\n";
    var v123 = v387 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v566 = "</head>\n" + '<body class="main">\n';
  var v504 = v566 + '<div class="title">';
  var v388 = v504 + title$$8;
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
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
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
  var v505 = emblFile.search(/ID/);
  var v395 = v505 == -1;
  var v507 = !v395;
  if(v507) {
    var v567 = emblFile.search(/AC/);
    var v506 = v567 == -1;
    var v569 = !v506;
    if(v569) {
      var v605 = emblFile.search(/DE/);
      var v568 = v605 == -1;
      var v607 = !v568;
      if(v607) {
        var v606 = emblFile.search(/SQ/);
        v568 = v606 == -1
      }
      v506 = v568
    }
    v395 = v506
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
  var v508 = genBankFile.search(/LOCUS/);
  var v400 = v508 == -1;
  var v510 = !v400;
  if(v510) {
    var v570 = genBankFile.search(/DEFINITION/);
    var v509 = v570 == -1;
    var v572 = !v509;
    if(v572) {
      var v608 = genBankFile.search(/ACCESSION/);
      var v571 = v608 == -1;
      var v610 = !v571;
      if(v610) {
        var v609 = genBankFile.search(/ORIGIN/);
        v571 = v609 == -1
      }
      v509 = v571
    }
    v400 = v509
  }
  var v143 = v400;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v511 = genBankFile$$1.search(/LOCUS/);
  var v401 = v511 == -1;
  var v513 = !v401;
  if(v513) {
    var v573 = genBankFile$$1.search(/DEFINITION/);
    var v512 = v573 == -1;
    var v575 = !v512;
    if(v575) {
      var v611 = genBankFile$$1.search(/ACCESSION/);
      var v574 = v611 == -1;
      var v613 = !v574;
      if(v613) {
        var v612 = genBankFile$$1.search(/ORIGIN/);
        v574 = v612 == -1
      }
      v512 = v574
    }
    v401 = v512
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
  var v514 = emblFile$$1.search(/ID/);
  var v403 = v514 == -1;
  var v516 = !v403;
  if(v516) {
    var v576 = emblFile$$1.search(/AC/);
    var v515 = v576 == -1;
    var v578 = !v515;
    if(v578) {
      var v614 = emblFile$$1.search(/DE/);
      var v577 = v614 == -1;
      var v616 = !v577;
      if(v616) {
        var v615 = emblFile$$1.search(/SQ/);
        v577 = v615 == -1
      }
      v515 = v577
    }
    v403 = v515
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
  var v155 = i$$5 < stopBase;
  for(;v155;) {
    var v148 = i$$5 + 1;
    lineOfText = rightNum(v148, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v405 = basePerLine / groupSize;
    var v152 = j$$6 <= v405;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v406 = k + i$$5;
        var v150 = text$$10.charAt(v406);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v407 = basePerLine / groupSize;
      v152 = j$$6 <= v407
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
    var v408 = adjustment < 0;
    if(v408) {
      v408 = adjusted >= 0
    }
    var v156 = v408;
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
  var v189 = i$$6 < stopBase$$2;
  for(;v189;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v409 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v409;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v410 = i$$6 + k$$1;
        var v157 = v410 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v411 = k$$1 + i$$6;
        var v159 = text$$12.charAt(v411);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v412 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v412, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v413 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v413
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v579 = adjustNumbering(lineNum, numberingAdjustment);
      var v517 = rightNum(v579, "", 8, tabIn$$3);
      var v414 = v517 + lineOfText$$1;
      var v167 = v414 + "\n";
      JAMScript.call(v166.write, v166, [v167]);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v580 = adjustNumbering(lineNum, numberingAdjustment);
        var v518 = rightNum(v580, "", 8, tabIn$$3);
        var v519 = complement(lineOfText$$1);
        var v415 = v518 + v519;
        var v169 = v415 + "\n";
        JAMScript.call(v168.write, v168, [v169]);
        var v170 = outputWindow.document;
        JAMScript.call(v170.write, v170, ["\n"])
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v520 = lineOfText$$1;
        var v521 = adjustNumbering(i$$6, numberingAdjustment);
        var v416 = v520 + v521;
        var v173 = v416 + "\n";
        JAMScript.call(v172.write, v172, [v173]);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v522 = complement(lineOfText$$1);
          var v523 = adjustNumbering(i$$6, numberingAdjustment);
          var v417 = v522 + v523;
          var v175 = v417 + "\n";
          JAMScript.call(v174.write, v174, [v175]);
          var v176 = outputWindow.document;
          JAMScript.call(v176.write, v176, ["\n"])
        }
      }else {
        var v186 = numberPosition$$1 == "above";
        if(v186) {
          var v178 = outputWindow.document;
          var v179 = aboveNum + "\n";
          JAMScript.call(v178.write, v178, [v179]);
          var v180 = outputWindow.document;
          var v181 = lineOfText$$1 + "\n";
          JAMScript.call(v180.write, v180, [v181]);
          var v185 = strands$$1 == "two";
          if(v185) {
            var v182 = outputWindow.document;
            var v418 = complement(lineOfText$$1);
            var v183 = v418 + "\n";
            JAMScript.call(v182.write, v182, [v183]);
            var v184 = outputWindow.document;
            JAMScript.call(v184.write, v184, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v189 = i$$6 < stopBase$$2
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
  var v210 = i$$7 < stopBase$$3;
  for(;v210;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v419 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v419;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v420 = i$$7 + k$$2;
        var v190 = v420 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v421 = k$$2 + i$$7;
        var v192 = text$$13.charAt(v421);
        lineOfText$$2 = v191 + v192;
        k$$2 = k$$2 + 1;
        v193 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v196 = numberPosition$$2 == "above";
      if(v196) {
        var v194 = aboveNum$$1;
        var v195 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v194 + v195
      }
      var v197 = i$$7 >= stopBase$$3;
      if(v197) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v422 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v422
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v524 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v423 = v524 + lineOfText$$2;
      var v200 = v423 + "\n";
      JAMScript.call(v199.write, v199, [v200])
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v424 = lineOfText$$2 + i$$7;
        var v202 = v424 + "\n";
        JAMScript.call(v201.write, v201, [v202])
      }else {
        var v207 = numberPosition$$2 == "above";
        if(v207) {
          var v203 = outputWindow.document;
          var v204 = aboveNum$$1 + "\n";
          JAMScript.call(v203.write, v203, [v204]);
          var v205 = outputWindow.document;
          var v206 = lineOfText$$2 + "\n";
          JAMScript.call(v205.write, v205, [v206])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v210 = i$$7 < stopBase$$3
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
  var v425 = v525 <= firstIndexToMutate;
  var v527 = !v425;
  if(v527) {
    var v526 = lastIndexToMutate < 0;
    var v581 = !v526;
    if(v581) {
      v526 = lastIndexToMutate <= firstIndexToMutate
    }
    v425 = v526
  }
  var v211 = v425;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v426 = Math.random();
    var v212 = v426 * maxNum;
    randNum = Math.floor(v212);
    var v427 = randNum < firstIndexToMutate;
    var v528 = !v427;
    if(v528) {
      v427 = randNum > lastIndexToMutate
    }
    var v213 = v427;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v428 = Math.random();
      var v429 = components$$1.length;
      var v214 = v428 * v429;
      componentsIndex = Math.round(v214);
      var v430 = components$$1.length;
      var v215 = componentsIndex == v430;
      if(v215) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v431 = components$$1[componentsIndex]
      }
      var v216 = v431 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v432 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v433 = components$$1[componentsIndex]
    }
    var v217 = v432 + v433;
    var v434 = randNum + 1;
    var v435 = sequence$$13.length;
    var v218 = sequence$$13.substring(v434, v435);
    sequence$$13 = v217 + v218;
    i$$8 = i$$8 + 1;
    v219 = i$$8 < numMut
  }
  var v220 = outputWindow.document;
  var v221 = addReturns(sequence$$13);
  JAMScript.call(v220.write, v220, [v221]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v226 = j$$9 < lengthOut$$1;
  for(;v226;) {
    var v436 = Math.random();
    var v437 = components$$2.length;
    var v222 = v436 * v437;
    tempNum$$1 = Math.floor(v222);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v438 = sequence$$14.length;
    var v225 = v438 == 60;
    if(v225) {
      var v223 = outputWindow.document;
      var v224 = sequence$$14 + "\n";
      JAMScript.call(v223.write, v223, [v224]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v226 = j$$9 < lengthOut$$1
  }
  var v227 = outputWindow.document;
  var v228 = sequence$$14 + "\n";
  JAMScript.call(v227.write, v227, [v228]);
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
  var v232 = dnaConformation == "circular";
  if(v232) {
    var v229 = sequence$$15.substring(0, lookAhead);
    shiftValue = v229.length;
    var v582 = sequence$$15.length;
    var v529 = v582 - lookAhead;
    var v530 = sequence$$15.length;
    var v439 = sequence$$15.substring(v529, v530);
    var v230 = v439 + sequence$$15;
    var v231 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAMScript.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v234 = outputWindow.document;
  var v583 = '<tr><td class="title" width="200px">' + "Site:";
  var v531 = v583 + '</td><td class="title">';
  var v440 = v531 + "Positions:";
  var v235 = v440 + "</td></tr>\n";
  JAMScript.call(v234.write, v234, [v235]);
  var i$$9 = 0;
  var v441 = arrayOfItems.length;
  var v251 = i$$9 < v441;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v442 = arrayOfItems[i$$9]
    }
    var v236 = v442.match(/\/.+\//);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v584 = arrayOfItems[i$$9]
    }
    var v532 = v584.match(/\)\D*\d+/);
    var v443 = v532.toString();
    var v237 = v443.replace(/\)\D*/, "");
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v444 = matchPosition >= lowerLimit;
      if(v444) {
        v444 = matchPosition < upperLimit
      }
      var v241 = v444;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v445 = matchPosition - shiftValue;
        var v240 = v445 + 1;
        tempString$$1 = v239 + v240
      }
      var v446 = matchExp.lastIndex;
      var v533 = RegExp.lastMatch;
      var v447 = v533.length;
      var v242 = v446 - v447;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v448 = tempString$$1.search(/\d/);
    var v244 = v448 != -1;
    if(v244) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v248 = timesFound == 0;
    if(v248) {
      backGroundClass = "none"
    }else {
      var v247 = timesFound == 1;
      if(v247) {
        backGroundClass = "one"
      }else {
        var v246 = timesFound == 2;
        if(v246) {
          backGroundClass = "two"
        }else {
          var v245 = timesFound == 3;
          if(v245) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v249 = outputWindow.document;
    var v658 = '<tr><td class="' + backGroundClass;
    var v646 = v658 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v678 = arrayOfItems[i$$9]
    }
    var v669 = v678.match(/\([^\(]+\)/);
    var v659 = v669.toString();
    var v647 = v659.replace(/\(|\)/g, "");
    var v634 = v646 + v647;
    var v617 = v634 + '</td><td class="';
    var v585 = v617 + backGroundClass;
    var v534 = v585 + '">';
    var v449 = v534 + tempString$$1;
    var v250 = v449 + "</td></tr>\n";
    JAMScript.call(v249.write, v249, [v250]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v450 = arrayOfItems.length;
    v251 = i$$9 < v450
  }
  var v252 = outputWindow.document;
  JAMScript.call(v252.write, v252, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v253 = outputWindow.document;
  JAMScript.call(v253.write, v253, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v254 = outputWindow.document;
  var v635 = '<tr><td class="title">' + "Pattern:";
  var v618 = v635 + '</td><td class="title">';
  var v586 = v618 + "Times found:";
  var v535 = v586 + '</td><td class="title">';
  var v451 = v535 + "Percentage:";
  var v255 = v451 + "</td></tr>\n";
  JAMScript.call(v254.write, v254, [v255]);
  var i$$10 = 0;
  var v452 = arrayOfItems$$1.length;
  var v264 = i$$10 < v452;
  for(;v264;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v453 = arrayOfItems$$1[i$$10]
    }
    var v256 = v453.match(/\/[^\/]+\//);
    var matchExp$$1 = v256 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v454 = sequence$$16.search(matchExp$$1);
    var v258 = v454 != -1;
    if(v258) {
      var v257 = sequence$$16.match(matchExp$$1);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v536 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v619 = arrayOfItems$$1[i$$10]
    }
    var v587 = v619.match(/\d+/);
    var v537 = parseFloat(v587);
    var v455 = v536 - v537;
    var v261 = v455 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v456 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v588 = arrayOfItems$$1[i$$10]
      }
      var v538 = v588.match(/\d+/);
      var v457 = parseFloat(v538);
      var v260 = v456 - v457;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v679 = arrayOfItems$$1[i$$10]
    }
    var v670 = v679.match(/\([^\(]+\)\b/);
    var v660 = v670.toString();
    var v648 = v660.replace(/\(|\)/g, "");
    var v636 = "<tr><td>" + v648;
    var v620 = v636 + "</td><td>";
    var v589 = v620 + tempNumber;
    var v539 = v589 + "</td><td>";
    var v540 = percentage.toFixed(2);
    var v458 = v539 + v540;
    var v263 = v458 + "</td></tr>\n";
    JAMScript.call(v262.write, v262, [v263]);
    i$$10 = i$$10 + 1;
    var v459 = arrayOfItems$$1.length;
    v264 = i$$10 < v459
  }
  var v265 = outputWindow.document;
  JAMScript.call(v265.write, v265, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v460 = sequence$$17.length;
  var v272 = v460 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v461 = Math.random();
    var v266 = v461 * maxNum$$1;
    randNum$$1 = Math.floor(v266);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v267, v268);
    sequence$$17 = tempString1 + tempString2;
    var v462 = tempSeq.length;
    var v271 = v462 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAMScript.call(v269.write, v269, [v270]);
      tempSeq = ""
    }
    var v463 = sequence$$17.length;
    v272 = v463 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAMScript.call(v273.write, v273, [v274]);
  return true
}
function proteinStats(theDocument) {
  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v464 = testScript();
  var v275 = v464 == false;
  if(v275) {
    return false
  }
  var v649 = theDocument.forms;
  var v637 = v649[0];
  var v621 = v637.elements;
  var v590 = v621[0];
  var v541 = checkFormElement(v590);
  var v465 = v541 == false;
  var v543 = !v465;
  if(v543) {
    var v661 = theDocument.forms;
    var v650 = v661[0];
    var v638 = v650.elements;
    var v622 = v638[0];
    var v591 = v622.value;
    var v542 = checkSequenceLength(v591, maxInput$$3);
    v465 = v542 == false
  }
  var v276 = v465;
  if(v276) {
    return false
  }
  var itemsToCheck = ["/A/ (A)1", "/B/ (B)1", "/C/ (C)1", "/D/ (D)1", "/E/ (E)1", "/F/ (F)1", "/G/ (G)1", "/H/ (H)1", "/I/ (I)1", "/K/ (K)1", "/L/ (L)1", "/M/ (M)1", "/N/ (N)1", "/P/ (P)1", "/Q/ (Q)1", "/R/ (R)1", "/S/ (S)1", "/T/ (T)1", "/V/ (V)1", "/W/ (W)1", "/X/ (X)1", "/Y/ (Y)1", "/Z/ (Z)1", "/[GAVLI]/ (Aliphatic G,A,V,L,I)1", "/[FWY]/ (Aromatic F,W,Y)1", "/[CM]/ (Sulphur C,M)1", "/[KRH]/ (Basic K,R,H)1", "/[BDENQZ]/ (Acidic B,D,E,N,Q,Z)1", "/[ST]/ (Aliphatic hydroxyl S,T)1", "/[ZEQRCMVILYW]/ (tRNA synthetase class I Z,E,Q,R,C,M,V,I,L,Y,W)1", 
  "/[BGAPSTHDNKF]/ (tRNA synthetase class II B,G,A,P,S,T,H,D,N,K,F)1"];
  openWindow("Protein Stats");
  var v623 = theDocument.forms;
  var v592 = v623[0];
  var v544 = v592.elements;
  var v466 = v544[0];
  var v277 = v466.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v277);
  var i$$11 = 0;
  var v467 = arrayOfFasta$$1.length;
  var v283 = i$$11 < v467;
  for(;v283;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v278 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v278);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v279 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v279);
    newProtein = removeNonProteinAllowDegen(newProtein);
    var v280 = outputWindow.document;
    var v281 = getInfoFromTitleAndSequence(title$$9, newProtein);
    JAMScript.call(v280.write, v280, [v281]);
    writeSequenceStats(newProtein, itemsToCheck);
    var v282 = outputWindow.document;
    JAMScript.call(v282.write, v282, ["<br />\n<br />\n"]);
    i$$11 = i$$11 + 1;
    var v468 = arrayOfFasta$$1.length;
    v283 = i$$11 < v468
  }
  closeWindow();
  return true
}
JAMScript.set(document, "onload", v2);
var v284 = document.getElementById("submitbtn");
JAMScript.set(v284, "onclick", v3);
var v285 = document.getElementById("clearbtn");
JAMScript.set(v285, "onclick", v4);

