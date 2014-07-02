function v4() {
  var v548 = document.forms;
  var v471 = v548[0];
  var v287 = v471.elements;
  var v5 = v287[0];
  v5.value = " ";
  var v549 = document.forms;
  var v472 = v549[0];
  var v288 = v472.elements;
  var v6 = v288[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    dnaStats(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v2() {
  var v289 = document.main_form;
  var v8 = v289.main_submit;
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
  var v290 = arrayOfSequences.length;
  var v10 = v290 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v291 = arrayOfTitles.length;
  var v12 = i$$1 < v291;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v550 = arrayOfTitles[i$$1]
    }
    var v473 = v550.search(/\S/);
    var v292 = v473 == -1;
    var v475 = !v292;
    if(v475) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v597 = arrayOfSequences[i$$1]
      }
      var v551 = v597.search(/\S/);
      var v474 = v551 == -1;
      var v553 = !v474;
      if(v553) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v598 = arrayOfSequences[i$$1]
        }
        var v552 = v598.length;
        v474 = v552 != lengthOfAlign
      }
      v292 = v474
    }
    var v11 = v292;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v293 = arrayOfTitles.length;
    v12 = i$$1 < v293
  }
  return true
}
function checkCodonTable(codonTable) {
  var v476 = codonTable.search(/AmAcid/);
  var v294 = v476 == -1;
  var v478 = !v294;
  if(v478) {
    var v554 = codonTable.search(/Codon/);
    var v477 = v554 == -1;
    var v556 = !v477;
    if(v556) {
      var v599 = codonTable.search(/Number/);
      var v555 = v599 == -1;
      var v601 = !v555;
      if(v601) {
        var v628 = codonTable.search(/\/1000/);
        var v600 = v628 == -1;
        var v630 = !v600;
        if(v630) {
          var v629 = codonTable.search(/Fraction\s*\.\./);
          v600 = v629 == -1
        }
        v555 = v600
      }
      v477 = v555
    }
    v294 = v477
  }
  var v13 = v294;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v479 = formElement.value;
  var v295 = v479.search(/\S/);
  var v14 = v295 == -1;
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
  var v296 = arrayOfPatterns.length;
  var v17 = z$$2 < v296;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v480 = arrayOfPatterns[z$$2]
    }
    var v297 = v480.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v297 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v481 = arrayOfPatterns[z$$2]
    }
    var v298 = moreExpressionCheck(v481);
    var v16 = v298 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v299 = arrayOfPatterns.length;
    v17 = z$$2 < v299
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v300 = arrayOfPatterns.length;
  var v26 = j < v300;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v557 = arrayOfPatterns[j]
    }
    var v482 = v557.match(/\/.+\//);
    var v301 = v482 + "gi";
    if(JAMScript.isEval(eval)) {
      var v713 = eval("introspect(JAMScript.introspectors.processAll) { " + v301 + " }")
    }else {
      var v713 = JAMScript.call(eval, null, [v301])
    }
    v20[v21] = v713;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v483 = arrayOfPatterns[j]
    }
    var v302 = v483.match(/=[a-zA-Z\*]/);
    var v714 = v302.toString();
    v22[v23] = v714;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v303 = geneticCodeMatchResult[j]
    }
    var v715 = v303.replace(/=/g, "");
    v24[v25] = v715;
    j = j + 1;
    var v304 = arrayOfPatterns.length;
    v26 = j < v304
  }
  var i$$2 = 0;
  var v484 = testSequence.length;
  var v305 = v484 - 3;
  var v33 = i$$2 <= v305;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v306 = geneticCodeMatchExp.length;
    var v31 = j < v306;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v485 = geneticCodeMatchExp[j]
      }
      var v307 = codon.search(v485);
      var v30 = v307 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v308 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v308 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v309 = geneticCodeMatchExp.length;
      v31 = j < v309
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v486 = testSequence.length;
    var v310 = v486 - 3;
    v33 = i$$2 <= v310
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v311 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v311;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v487 = arrayOfPatterns$$1[z$$3]
    }
    var v312 = v487.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v312 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v313 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v313
  }
  var i$$3 = 0;
  var v314 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v314;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v488 = arrayOfPatterns$$1[i$$3]
    }
    var v315 = "[" + v488;
    var v36 = v315 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v316 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v316;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v489 = arrayOfPatterns$$1[j$$1]
      }
      var v317 = v489.search(re);
      var v37 = v317 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v318 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v318
    }
    i$$3 = i$$3 + 1;
    var v319 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v319
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v320 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v320;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v490 = arrayOfPatterns$$2[z$$4]
    }
    var v321 = v490.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v321 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v491 = arrayOfPatterns$$2[z$$4]
    }
    var v322 = moreExpressionCheck(v491);
    var v41 = v322 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v323 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v323
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v558 = getSequenceFromFasta(text$$7);
  var v492 = v558.replace(/[^A-Za-z]/g, "");
  var v324 = v492.length;
  var v44 = v324 > maxInput;
  if(v44) {
    var v325 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v325 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v326 = text$$8.length;
  var v46 = v326 > maxInput$$1;
  if(v46) {
    var v327 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v327 + " characters.";
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
  var v328 = alignArray.length;
  var v53 = v328 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v329 = alignArray.length;
  var v55 = i$$4 < v329;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v493 = alignArray[i$$4]
    }
    var v330 = v493.search(/[^\s]+\s/);
    var v54 = v330 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v331 = alignArray.length;
    v55 = i$$4 < v331
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
  var v332 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v332 != -1;
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
  var v333 = sequence$$2.length;
  var v59 = "&gt;results for " + v333;
  var stringToReturn = v59 + " residue sequence ";
  var v334 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v334 != -1;
  if(v61) {
    var v335 = stringToReturn + '"';
    var v60 = v335 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v336 = stringToReturn + ' starting "';
  var v337 = sequence$$2.substring(0, 10);
  var v62 = v336 + v337;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v338 = sequenceOne.length;
  var v63 = "Search results for " + v338;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v339 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v339 != -1;
  if(v65) {
    var v340 = stringToReturn$$1 + '"';
    var v64 = v340 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v341 = stringToReturn$$1 + ' starting "';
  var v342 = sequenceOne.substring(0, 10);
  var v66 = v341 + v342;
  stringToReturn$$1 = v66 + '"\n';
  var v343 = stringToReturn$$1 + "and ";
  var v344 = sequenceTwo.length;
  var v67 = v343 + v344;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v345 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v345 != -1;
  if(v69) {
    var v346 = stringToReturn$$1 + '"';
    var v68 = v346 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v347 = stringToReturn$$1 + ' starting "';
  var v348 = sequenceTwo.substring(0, 10);
  var v70 = v347 + v348;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v349 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v349;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v559 = arrayOfPatterns$$3[j$$2]
    }
    var v494 = v559.match(/\/.+\//);
    var v350 = v494 + "gi";
    if(JAMScript.isEval(eval)) {
      var v716 = eval("introspect(JAMScript.introspectors.processAll) { " + v350 + " }")
    }else {
      var v716 = JAMScript.call(eval, null, [v350])
    }
    v73[v74] = v716;
    j$$2 = j$$2 + 1;
    var v351 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v351
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v352 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v352;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v495 = arrayOfPatterns$$4[j$$3]
    }
    var v353 = v495.match(/=[a-zA-Z\*]/);
    var v717 = v353.toString();
    v77[v78] = v717;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v354 = geneticCodeMatchResult$$1[j$$3]
    }
    var v718 = v354.replace(/=/g, "");
    v79[v80] = v718;
    j$$3 = j$$3 + 1;
    var v355 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v355
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v356 = sequence$$3.length;
  var v82 = "Results for " + v356;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v357 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v357 != -1;
  if(v84) {
    var v358 = stringToReturn$$2 + '"';
    var v83 = v358 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v359 = stringToReturn$$2 + ' starting "';
  var v360 = sequence$$3.substring(0, 10);
  var v85 = v359 + v360;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v496 = "Results for " + topology;
  var v361 = v496 + " ";
  var v362 = sequence$$4.length;
  var v87 = v361 + v362;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v363 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v363 != -1;
  if(v89) {
    var v364 = stringToReturn$$3 + '"';
    var v88 = v364 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v365 = stringToReturn$$3 + ' starting "';
  var v366 = sequence$$4.substring(0, 10);
  var v90 = v365 + v366;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v367 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v367;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v368 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v368 != -1;
  if(v94) {
    var v369 = stringToReturn$$4 + '"';
    var v93 = v369 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v370 = stringToReturn$$4 + ' starting "';
  var v371 = sequenceOne$$1.substring(0, 10);
  var v95 = v370 + v371;
  stringToReturn$$4 = v95 + '"\n';
  var v372 = stringToReturn$$4 + "and ";
  var v373 = sequenceTwo$$1.length;
  var v96 = v372 + v373;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v374 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v374 != -1;
  if(v98) {
    var v375 = stringToReturn$$4 + '"';
    var v97 = v375 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v376 = stringToReturn$$4 + ' starting "';
  var v377 = sequenceTwo$$1.substring(0, 10);
  var v99 = v376 + v377;
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
    var v378 = Math.random();
    var v379 = components.length;
    var v101 = v378 * v379;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v380 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v380 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v381 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v381 != -1;
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
  var v497 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v382 = v497 != -1;
  var v499 = !v382;
  if(v499) {
    var v560 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v498 = v560 != -1;
    var v562 = !v498;
    if(v562) {
      var v602 = expressionToCheck.search(/\[\]/);
      var v561 = v602 != -1;
      var v604 = !v561;
      if(v604) {
        var v631 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v603 = v631 != -1;
        var v633 = !v603;
        if(v633) {
          var v643 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v632 = v643 != -1;
          var v645 = !v632;
          if(v645) {
            var v655 = expressionToCheck.search(/\|\|/);
            var v644 = v655 != -1;
            var v657 = !v644;
            if(v657) {
              var v666 = expressionToCheck.search(/\/\|/);
              var v656 = v666 != -1;
              var v668 = !v656;
              if(v668) {
                var v675 = expressionToCheck.search(/\|\//);
                var v667 = v675 != -1;
                var v677 = !v667;
                if(v677) {
                  var v684 = expressionToCheck.search(/\[.\]/);
                  var v676 = v684 != -1;
                  var v686 = !v676;
                  if(v686) {
                    var v691 = expressionToCheck.search(/\</);
                    var v685 = v691 != -1;
                    var v693 = !v685;
                    if(v693) {
                      var v692 = expressionToCheck.search(/\>/);
                      v685 = v692 != -1
                    }
                    v676 = v685
                  }
                  v667 = v676
                }
                v656 = v667
              }
              v644 = v656
            }
            v632 = v644
          }
          v603 = v632
        }
        v561 = v603
      }
      v498 = v561
    }
    v382 = v498
  }
  var v106 = v382;
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
    var v719 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v719[2], v719[1], v719[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v563 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v500 = v563 + "<head>\n";
  var v383 = v500 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v383 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v706 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v702 = v706 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v698 = v702 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v694 = v698 + "div.info {font-weight: bold}\n";
    var v687 = v694 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v678 = v687 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v669 = v678 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v658 = v669 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v646 = v658 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v634 = v646 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v605 = v634 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v564 = v605 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v501 = v564 + "td.many {color: #000000}\n";
    var v384 = v501 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v384 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v710 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v707 = v710 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v703 = v707 + "div.title {display: none}\n";
    var v699 = v703 + "div.info {font-weight: bold}\n";
    var v695 = v699 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v688 = v695 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v679 = v688 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v670 = v679 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v659 = v670 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v647 = v659 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v635 = v647 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v606 = v635 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v565 = v606 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v502 = v565 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v385 = v502 + "img {display: none}\n";
    var v116 = v385 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v566 = "</head>\n" + '<body class="main">\n';
  var v503 = v566 + '<div class="title">';
  var v386 = v503 + title$$6;
  var v118 = v386 + " results</div>\n";
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
    var v720 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v720[2], v720[1], v720[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v567 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v504 = v567 + "<head>\n";
  var v387 = v504 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v387 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v708 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v704 = v708 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v700 = v704 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v696 = v700 + "div.info {font-weight: bold}\n";
    var v689 = v696 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v680 = v689 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v671 = v680 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v660 = v671 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v648 = v660 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v636 = v648 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v607 = v636 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v568 = v607 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v505 = v568 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v388 = v505 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v388 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v712 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v711 = v712 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v709 = v711 + "div.title {display: none}\n";
    var v705 = v709 + "div.info {font-weight: bold}\n";
    var v701 = v705 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v697 = v701 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v690 = v697 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v681 = v690 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v672 = v681 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v661 = v672 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v649 = v661 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v637 = v649 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v608 = v637 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v569 = v608 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v506 = v569 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v389 = v506 + "img {display: none}\n";
    var v124 = v389 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v570 = "</head>\n" + '<body class="main">\n';
  var v507 = v570 + '<div class="title">';
  var v390 = v507 + title$$8;
  var v126 = v390 + " results</div>\n";
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
  var v391 = dnaSequence$$1.search(/./);
  var v127 = v391 != -1;
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
  var v392 = testArray[0];
  var v131 = v392 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v393 = testString.search(re$$2);
  var v132 = v393 == -1;
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
  var v394 = testNum.toFixed(3);
  var v135 = v394 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v395 = testNum.toPrecision(5);
  var v136 = v395 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v396 = theNumber$$1.search(/\d/);
  var v137 = v396 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v508 = emblFile.search(/ID/);
  var v397 = v508 == -1;
  var v510 = !v397;
  if(v510) {
    var v571 = emblFile.search(/AC/);
    var v509 = v571 == -1;
    var v573 = !v509;
    if(v573) {
      var v609 = emblFile.search(/DE/);
      var v572 = v609 == -1;
      var v611 = !v572;
      if(v611) {
        var v610 = emblFile.search(/SQ/);
        v572 = v610 == -1
      }
      v509 = v572
    }
    v397 = v509
  }
  var v138 = v397;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v398 = theNumber$$2.search(/\d/);
  var v139 = v398 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v399 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v399 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v400 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v400 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v401 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v401 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v511 = genBankFile.search(/LOCUS/);
  var v402 = v511 == -1;
  var v513 = !v402;
  if(v513) {
    var v574 = genBankFile.search(/DEFINITION/);
    var v512 = v574 == -1;
    var v576 = !v512;
    if(v576) {
      var v612 = genBankFile.search(/ACCESSION/);
      var v575 = v612 == -1;
      var v614 = !v575;
      if(v614) {
        var v613 = genBankFile.search(/ORIGIN/);
        v575 = v613 == -1
      }
      v512 = v575
    }
    v402 = v512
  }
  var v144 = v402;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v514 = genBankFile$$1.search(/LOCUS/);
  var v403 = v514 == -1;
  var v516 = !v403;
  if(v516) {
    var v577 = genBankFile$$1.search(/DEFINITION/);
    var v515 = v577 == -1;
    var v579 = !v515;
    if(v579) {
      var v615 = genBankFile$$1.search(/ACCESSION/);
      var v578 = v615 == -1;
      var v617 = !v578;
      if(v617) {
        var v616 = genBankFile$$1.search(/ORIGIN/);
        v578 = v616 == -1
      }
      v515 = v578
    }
    v403 = v515
  }
  var v145 = v403;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v404 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v404 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v517 = emblFile$$1.search(/ID/);
  var v405 = v517 == -1;
  var v519 = !v405;
  if(v519) {
    var v580 = emblFile$$1.search(/AC/);
    var v518 = v580 == -1;
    var v582 = !v518;
    if(v582) {
      var v618 = emblFile$$1.search(/DE/);
      var v581 = v618 == -1;
      var v620 = !v581;
      if(v620) {
        var v619 = emblFile$$1.search(/SQ/);
        v581 = v619 == -1
      }
      v518 = v581
    }
    v405 = v518
  }
  var v147 = v405;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v406 = emblFile$$1.search(/^FT/m);
  var v148 = v406 == -1;
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
    var v407 = basePerLine / groupSize;
    var v153 = j$$6 <= v407;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v408 = k + i$$5;
        var v151 = text$$10.charAt(v408);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v409 = basePerLine / groupSize;
      v153 = j$$6 <= v409
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
    var v410 = adjustment < 0;
    if(v410) {
      v410 = adjusted >= 0
    }
    var v157 = v410;
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
    var v411 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v411;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v412 = i$$6 + k$$1;
        var v158 = v412 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v413 = k$$1 + i$$6;
        var v160 = text$$12.charAt(v413);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v414 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v414, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v415 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v415
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v583 = adjustNumbering(lineNum, numberingAdjustment);
      var v520 = rightNum(v583, "", 8, tabIn$$3);
      var v416 = v520 + lineOfText$$1;
      var v168 = v416 + "\n";
      JAMScript.call(v167.write, v167, [v168]);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v584 = adjustNumbering(lineNum, numberingAdjustment);
        var v521 = rightNum(v584, "", 8, tabIn$$3);
        var v522 = complement(lineOfText$$1);
        var v417 = v521 + v522;
        var v170 = v417 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v171 = outputWindow.document;
        JAMScript.call(v171.write, v171, ["\n"])
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v523 = lineOfText$$1;
        var v524 = adjustNumbering(i$$6, numberingAdjustment);
        var v418 = v523 + v524;
        var v174 = v418 + "\n";
        JAMScript.call(v173.write, v173, [v174]);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v525 = complement(lineOfText$$1);
          var v526 = adjustNumbering(i$$6, numberingAdjustment);
          var v419 = v525 + v526;
          var v176 = v419 + "\n";
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
            var v420 = complement(lineOfText$$1);
            var v184 = v420 + "\n";
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
    var v421 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v421;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v422 = i$$7 + k$$2;
        var v191 = v422 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v423 = k$$2 + i$$7;
        var v193 = text$$13.charAt(v423);
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
      var v424 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v424
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v527 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v425 = v527 + lineOfText$$2;
      var v201 = v425 + "\n";
      JAMScript.call(v200.write, v200, [v201])
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v426 = lineOfText$$2 + i$$7;
        var v203 = v426 + "\n";
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
  var v528 = sequence$$13.length;
  var v427 = v528 <= firstIndexToMutate;
  var v530 = !v427;
  if(v530) {
    var v529 = lastIndexToMutate < 0;
    var v585 = !v529;
    if(v585) {
      v529 = lastIndexToMutate <= firstIndexToMutate
    }
    v427 = v529
  }
  var v212 = v427;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v428 = Math.random();
    var v213 = v428 * maxNum;
    randNum = Math.floor(v213);
    var v429 = randNum < firstIndexToMutate;
    var v531 = !v429;
    if(v531) {
      v429 = randNum > lastIndexToMutate
    }
    var v214 = v429;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v430 = Math.random();
      var v431 = components$$1.length;
      var v215 = v430 * v431;
      componentsIndex = Math.round(v215);
      var v432 = components$$1.length;
      var v216 = componentsIndex == v432;
      if(v216) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v433 = components$$1[componentsIndex]
      }
      var v217 = v433 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v434 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v435 = components$$1[componentsIndex]
    }
    var v218 = v434 + v435;
    var v436 = randNum + 1;
    var v437 = sequence$$13.length;
    var v219 = sequence$$13.substring(v436, v437);
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
    var v438 = Math.random();
    var v439 = components$$2.length;
    var v223 = v438 * v439;
    tempNum$$1 = Math.floor(v223);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v440 = sequence$$14.length;
    var v226 = v440 == 60;
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
    var v586 = sequence$$15.length;
    var v532 = v586 - lookAhead;
    var v533 = sequence$$15.length;
    var v441 = sequence$$15.substring(v532, v533);
    var v231 = v441 + sequence$$15;
    var v232 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAMScript.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v235 = outputWindow.document;
  var v587 = '<tr><td class="title" width="200px">' + "Site:";
  var v534 = v587 + '</td><td class="title">';
  var v442 = v534 + "Positions:";
  var v236 = v442 + "</td></tr>\n";
  JAMScript.call(v235.write, v235, [v236]);
  var i$$9 = 0;
  var v443 = arrayOfItems.length;
  var v252 = i$$9 < v443;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v444 = arrayOfItems[i$$9]
    }
    var v237 = v444.match(/\/.+\//);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v588 = arrayOfItems[i$$9]
    }
    var v535 = v588.match(/\)\D*\d+/);
    var v445 = v535.toString();
    var v238 = v445.replace(/\)\D*/, "");
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v446 = matchPosition >= lowerLimit;
      if(v446) {
        v446 = matchPosition < upperLimit
      }
      var v242 = v446;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v447 = matchPosition - shiftValue;
        var v241 = v447 + 1;
        tempString$$1 = v240 + v241
      }
      var v448 = matchExp.lastIndex;
      var v536 = RegExp.lastMatch;
      var v449 = v536.length;
      var v243 = v448 - v449;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v450 = tempString$$1.search(/\d/);
    var v245 = v450 != -1;
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
    var v662 = '<tr><td class="' + backGroundClass;
    var v650 = v662 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v682 = arrayOfItems[i$$9]
    }
    var v673 = v682.match(/\([^\(]+\)/);
    var v663 = v673.toString();
    var v651 = v663.replace(/\(|\)/g, "");
    var v638 = v650 + v651;
    var v621 = v638 + '</td><td class="';
    var v589 = v621 + backGroundClass;
    var v537 = v589 + '">';
    var v451 = v537 + tempString$$1;
    var v251 = v451 + "</td></tr>\n";
    JAMScript.call(v250.write, v250, [v251]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v452 = arrayOfItems.length;
    v252 = i$$9 < v452
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
  var v639 = '<tr><td class="title">' + "Pattern:";
  var v622 = v639 + '</td><td class="title">';
  var v590 = v622 + "Times found:";
  var v538 = v590 + '</td><td class="title">';
  var v453 = v538 + "Percentage:";
  var v256 = v453 + "</td></tr>\n";
  JAMScript.call(v255.write, v255, [v256]);
  var i$$10 = 0;
  var v454 = arrayOfItems$$1.length;
  var v265 = i$$10 < v454;
  for(;v265;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v455 = arrayOfItems$$1[i$$10]
    }
    var v257 = v455.match(/\/[^\/]+\//);
    var matchExp$$1 = v257 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v456 = sequence$$16.search(matchExp$$1);
    var v259 = v456 != -1;
    if(v259) {
      var v258 = sequence$$16.match(matchExp$$1);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v539 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v623 = arrayOfItems$$1[i$$10]
    }
    var v591 = v623.match(/\d+/);
    var v540 = parseFloat(v591);
    var v457 = v539 - v540;
    var v262 = v457 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v458 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v592 = arrayOfItems$$1[i$$10]
      }
      var v541 = v592.match(/\d+/);
      var v459 = parseFloat(v541);
      var v261 = v458 - v459;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v683 = arrayOfItems$$1[i$$10]
    }
    var v674 = v683.match(/\([^\(]+\)\b/);
    var v664 = v674.toString();
    var v652 = v664.replace(/\(|\)/g, "");
    var v640 = "<tr><td>" + v652;
    var v624 = v640 + "</td><td>";
    var v593 = v624 + tempNumber;
    var v542 = v593 + "</td><td>";
    var v543 = percentage.toFixed(2);
    var v460 = v542 + v543;
    var v264 = v460 + "</td></tr>\n";
    JAMScript.call(v263.write, v263, [v264]);
    i$$10 = i$$10 + 1;
    var v461 = arrayOfItems$$1.length;
    v265 = i$$10 < v461
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
  var v462 = sequence$$17.length;
  var v273 = v462 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v463 = Math.random();
    var v267 = v463 * maxNum$$1;
    randNum$$1 = Math.floor(v267);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v268, v269);
    sequence$$17 = tempString1 + tempString2;
    var v464 = tempSeq.length;
    var v272 = v464 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAMScript.call(v270.write, v270, [v271]);
      tempSeq = ""
    }
    var v465 = sequence$$17.length;
    v273 = v465 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAMScript.call(v274.write, v274, [v275]);
  return true
}
function dnaStats(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v466 = testScript();
  var v276 = v466 == false;
  if(v276) {
    return false
  }
  var v653 = theDocument.forms;
  var v641 = v653[0];
  var v625 = v641.elements;
  var v594 = v625[0];
  var v544 = checkFormElement(v594);
  var v467 = v544 == false;
  var v546 = !v467;
  if(v546) {
    var v665 = theDocument.forms;
    var v654 = v665[0];
    var v642 = v654.elements;
    var v626 = v642[0];
    var v595 = v626.value;
    var v545 = checkSequenceLength(v595, maxInput$$3);
    v467 = v545 == false
  }
  var v277 = v467;
  if(v277) {
    return false
  }
  var itemsToCheck = ["/g/ (g)1", "/a/ (a)1", "/t/ (t)1", "/c/ (c)1", "/n/ (n)1", "/u/ (u)1", "/r/ (r)1", "/y/ (y)1", "/s/ (s)1", "/w/ (w)1", "/k/ (k)1", "/m/ (m)1", "/b/ (b)1", "/d/ (d)1", "/h/ (h)1", "/v/ (v)1", "/g(?=g)/ (gg)2", "/g(?=a)/ (ga)2", "/g(?=t)/ (gt)2", "/g(?=c)/ (gc)2", "/g(?=n)/ (gn)2", "/a(?=g)/ (ag)2", "/a(?=a)/ (aa)2", "/a(?=t)/ (at)2", "/a(?=c)/ (ac)2", "/a(?=n)/ (an)2", "/t(?=g)/ (tg)2", "/t(?=a)/ (ta)2", "/t(?=t)/ (tt)2", "/t(?=c)/ (tc)2", "/t(?=n)/ (tn)2", "/c(?=g)/ (cg)2", 
  "/c(?=a)/ (ca)2", "/c(?=t)/ (ct)2", "/c(?=c)/ (cc)2", "/c(?=n)/ (cn)2", "/n(?=g)/ (ng)2", "/n(?=a)/ (na)2", "/n(?=t)/ (nt)2", "/n(?=c)/ (nc)2", "/n(?=n)/ (nn)2", "/g|c/ (g,c)1", "/a|t/ (a,t)1", "/r|y|s|w|k/ (r,y,s,w,k)1", "/b|h|d|v|n/ (b,h,d,v,n)1", "/r|y|s|w|k|m|b|d|h|v|n/ (r,y,s,w,k,m,b,d,h,v,n)1"];
  openWindow("DNA Stats");
  var v627 = theDocument.forms;
  var v596 = v627[0];
  var v547 = v596.elements;
  var v468 = v547[0];
  var v278 = v468.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v278);
  var i$$11 = 0;
  var v469 = arrayOfFasta$$1.length;
  var v284 = i$$11 < v469;
  for(;v284;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v279 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v279);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v280 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v280);
    newDna = removeNonDna(newDna);
    var v281 = outputWindow.document;
    var v282 = getInfoFromTitleAndSequence(title$$9, newDna);
    JAMScript.call(v281.write, v281, [v282]);
    writeSequenceStats(newDna, itemsToCheck);
    var v283 = outputWindow.document;
    JAMScript.call(v283.write, v283, ["<br />\n<br />\n"]);
    i$$11 = i$$11 + 1;
    var v470 = arrayOfFasta$$1.length;
    v284 = i$$11 < v470
  }
  closeWindow();
  return true
}
JAMScript.set(document, "onload", v2);
var v285 = document.getElementById("submitbtn");
JAMScript.set(v285, "onclick", v3);
var v286 = document.getElementById("clearbtn");
JAMScript.set(v286, "onclick", v4);

