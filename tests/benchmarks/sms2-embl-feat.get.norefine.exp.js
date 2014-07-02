function v4() {
  var v635 = document.forms;
  var v541 = v635[0];
  var v333 = v541.elements;
  var v5 = v333[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    emblFeat(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v334 = document.main_form;
  var v7 = v334.main_submit;
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
  var v335 = arrayOfSequences.length;
  var v9 = v335 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v336 = arrayOfTitles.length;
  var v11 = i$$1 < v336;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v636 = arrayOfTitles[i$$1]
    }
    var v542 = v636.search(/\S/);
    var v337 = v542 == -1;
    var v544 = !v337;
    if(v544) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v692 = arrayOfSequences[i$$1]
      }
      var v637 = v692.search(/\S/);
      var v543 = v637 == -1;
      var v639 = !v543;
      if(v639) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v693 = arrayOfSequences[i$$1]
        }
        var v638 = v693.length;
        v543 = v638 != lengthOfAlign
      }
      v337 = v543
    }
    var v10 = v337;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v338 = arrayOfTitles.length;
    v11 = i$$1 < v338
  }
  return true
}
function checkCodonTable(codonTable) {
  var v545 = codonTable.search(/AmAcid/);
  var v339 = v545 == -1;
  var v547 = !v339;
  if(v547) {
    var v640 = codonTable.search(/Codon/);
    var v546 = v640 == -1;
    var v642 = !v546;
    if(v642) {
      var v694 = codonTable.search(/Number/);
      var v641 = v694 == -1;
      var v696 = !v641;
      if(v696) {
        var v727 = codonTable.search(/\/1000/);
        var v695 = v727 == -1;
        var v729 = !v695;
        if(v729) {
          var v728 = codonTable.search(/Fraction\s*\.\./);
          v695 = v728 == -1
        }
        v641 = v695
      }
      v546 = v641
    }
    v339 = v546
  }
  var v12 = v339;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v548 = formElement.value;
  var v340 = v548.search(/\S/);
  var v13 = v340 == -1;
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
  var v341 = arrayOfPatterns.length;
  var v16 = z$$2 < v341;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v549 = arrayOfPatterns[z$$2]
    }
    var v342 = v549.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v342 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v550 = arrayOfPatterns[z$$2]
    }
    var v343 = moreExpressionCheck(v550);
    var v15 = v343 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v344 = arrayOfPatterns.length;
    v16 = z$$2 < v344
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v345 = arrayOfPatterns.length;
  var v25 = j < v345;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v643 = arrayOfPatterns[j]
    }
    var v551 = v643.match(/\/.+\//);
    var v346 = v551 + "gi";
    if(JAMScript.isEval(eval)) {
      var v821 = eval("introspect(JAMScript.introspectors.processAll) { " + v346 + " }")
    }else {
      var v821 = JAMScript.call(eval, null, [v346])
    }
    v19[v20] = v821;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v552 = arrayOfPatterns[j]
    }
    var v347 = v552.match(/=[a-zA-Z\*]/);
    var v822 = v347.toString();
    v21[v22] = v822;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v348 = geneticCodeMatchResult[j]
    }
    var v823 = v348.replace(/=/g, "");
    v23[v24] = v823;
    j = j + 1;
    var v349 = arrayOfPatterns.length;
    v25 = j < v349
  }
  var i$$2 = 0;
  var v553 = testSequence.length;
  var v350 = v553 - 3;
  var v32 = i$$2 <= v350;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v351 = geneticCodeMatchExp.length;
    var v30 = j < v351;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v554 = geneticCodeMatchExp[j]
      }
      var v352 = codon.search(v554);
      var v29 = v352 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v353 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v353 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v354 = geneticCodeMatchExp.length;
      v30 = j < v354
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v555 = testSequence.length;
    var v355 = v555 - 3;
    v32 = i$$2 <= v355
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v356 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v356;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v556 = arrayOfPatterns$$1[z$$3]
    }
    var v357 = v556.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v357 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v358 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v358
  }
  var i$$3 = 0;
  var v359 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v359;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v557 = arrayOfPatterns$$1[i$$3]
    }
    var v360 = "[" + v557;
    var v35 = v360 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v361 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v361;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v558 = arrayOfPatterns$$1[j$$1]
      }
      var v362 = v558.search(re);
      var v36 = v362 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v363 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v363
    }
    i$$3 = i$$3 + 1;
    var v364 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v364
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v365 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v365;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v559 = arrayOfPatterns$$2[z$$4]
    }
    var v366 = v559.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v366 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v560 = arrayOfPatterns$$2[z$$4]
    }
    var v367 = moreExpressionCheck(v560);
    var v40 = v367 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v368 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v368
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v644 = getSequenceFromFasta(text$$7);
  var v561 = v644.replace(/[^A-Za-z]/g, "");
  var v369 = v561.length;
  var v43 = v369 > maxInput;
  if(v43) {
    var v370 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v370 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v371 = text$$8.length;
  var v45 = v371 > maxInput$$1;
  if(v45) {
    var v372 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v372 + " characters.";
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
  var v373 = alignArray.length;
  var v52 = v373 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v374 = alignArray.length;
  var v54 = i$$4 < v374;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v562 = alignArray[i$$4]
    }
    var v375 = v562.search(/[^\s]+\s/);
    var v53 = v375 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v376 = alignArray.length;
    v54 = i$$4 < v376
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
  var v377 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v377 != -1;
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
  var v378 = sequence$$2.length;
  var v58 = "&gt;results for " + v378;
  var stringToReturn = v58 + " residue sequence ";
  var v379 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v379 != -1;
  if(v60) {
    var v380 = stringToReturn + '"';
    var v59 = v380 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v381 = stringToReturn + ' starting "';
  var v382 = sequence$$2.substring(0, 10);
  var v61 = v381 + v382;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v383 = sequenceOne.length;
  var v62 = "Search results for " + v383;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v384 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v384 != -1;
  if(v64) {
    var v385 = stringToReturn$$1 + '"';
    var v63 = v385 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v386 = stringToReturn$$1 + ' starting "';
  var v387 = sequenceOne.substring(0, 10);
  var v65 = v386 + v387;
  stringToReturn$$1 = v65 + '"\n';
  var v388 = stringToReturn$$1 + "and ";
  var v389 = sequenceTwo.length;
  var v66 = v388 + v389;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v390 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v390 != -1;
  if(v68) {
    var v391 = stringToReturn$$1 + '"';
    var v67 = v391 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v392 = stringToReturn$$1 + ' starting "';
  var v393 = sequenceTwo.substring(0, 10);
  var v69 = v392 + v393;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v394 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v394;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v645 = arrayOfPatterns$$3[j$$2]
    }
    var v563 = v645.match(/\/.+\//);
    var v395 = v563 + "gi";
    if(JAMScript.isEval(eval)) {
      var v824 = eval("introspect(JAMScript.introspectors.processAll) { " + v395 + " }")
    }else {
      var v824 = JAMScript.call(eval, null, [v395])
    }
    v72[v73] = v824;
    j$$2 = j$$2 + 1;
    var v396 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v396
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v397 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v397;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v564 = arrayOfPatterns$$4[j$$3]
    }
    var v398 = v564.match(/=[a-zA-Z\*]/);
    var v825 = v398.toString();
    v76[v77] = v825;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v399 = geneticCodeMatchResult$$1[j$$3]
    }
    var v826 = v399.replace(/=/g, "");
    v78[v79] = v826;
    j$$3 = j$$3 + 1;
    var v400 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v400
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v401 = sequence$$3.length;
  var v81 = "Results for " + v401;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v402 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v402 != -1;
  if(v83) {
    var v403 = stringToReturn$$2 + '"';
    var v82 = v403 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v404 = stringToReturn$$2 + ' starting "';
  var v405 = sequence$$3.substring(0, 10);
  var v84 = v404 + v405;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v565 = "Results for " + topology;
  var v406 = v565 + " ";
  var v407 = sequence$$4.length;
  var v86 = v406 + v407;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v408 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v408 != -1;
  if(v88) {
    var v409 = stringToReturn$$3 + '"';
    var v87 = v409 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v410 = stringToReturn$$3 + ' starting "';
  var v411 = sequence$$4.substring(0, 10);
  var v89 = v410 + v411;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v412 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v412;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v413 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v413 != -1;
  if(v93) {
    var v414 = stringToReturn$$4 + '"';
    var v92 = v414 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v415 = stringToReturn$$4 + ' starting "';
  var v416 = sequenceOne$$1.substring(0, 10);
  var v94 = v415 + v416;
  stringToReturn$$4 = v94 + '"\n';
  var v417 = stringToReturn$$4 + "and ";
  var v418 = sequenceTwo$$1.length;
  var v95 = v417 + v418;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v419 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v419 != -1;
  if(v97) {
    var v420 = stringToReturn$$4 + '"';
    var v96 = v420 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v421 = stringToReturn$$4 + ' starting "';
  var v422 = sequenceTwo$$1.substring(0, 10);
  var v98 = v421 + v422;
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
    var v423 = Math.random();
    var v424 = components.length;
    var v100 = v423 * v424;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v425 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v425 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v426 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v426 != -1;
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
  var v566 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v427 = v566 != -1;
  var v568 = !v427;
  if(v568) {
    var v646 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v567 = v646 != -1;
    var v648 = !v567;
    if(v648) {
      var v697 = expressionToCheck.search(/\[\]/);
      var v647 = v697 != -1;
      var v699 = !v647;
      if(v699) {
        var v730 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v698 = v730 != -1;
        var v732 = !v698;
        if(v732) {
          var v745 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v731 = v745 != -1;
          var v747 = !v731;
          if(v747) {
            var v760 = expressionToCheck.search(/\|\|/);
            var v746 = v760 != -1;
            var v762 = !v746;
            if(v762) {
              var v772 = expressionToCheck.search(/\/\|/);
              var v761 = v772 != -1;
              var v774 = !v761;
              if(v774) {
                var v783 = expressionToCheck.search(/\|\//);
                var v773 = v783 != -1;
                var v785 = !v773;
                if(v785) {
                  var v792 = expressionToCheck.search(/\[.\]/);
                  var v784 = v792 != -1;
                  var v794 = !v784;
                  if(v794) {
                    var v799 = expressionToCheck.search(/\</);
                    var v793 = v799 != -1;
                    var v801 = !v793;
                    if(v801) {
                      var v800 = expressionToCheck.search(/\>/);
                      v793 = v800 != -1
                    }
                    v784 = v793
                  }
                  v773 = v784
                }
                v761 = v773
              }
              v746 = v761
            }
            v731 = v746
          }
          v698 = v731
        }
        v647 = v698
      }
      v567 = v647
    }
    v427 = v567
  }
  var v105 = v427;
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
    var v829 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v829[2], v829[1], v829[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v649 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v569 = v649 + "<head>\n";
  var v428 = v569 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v428 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v814 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v810 = v814 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v806 = v810 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v802 = v806 + "div.info {font-weight: bold}\n";
    var v795 = v802 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v786 = v795 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v775 = v786 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v763 = v775 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v748 = v763 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v733 = v748 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v700 = v733 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v650 = v700 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v570 = v650 + "td.many {color: #000000}\n";
    var v429 = v570 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v429 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v818 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v815 = v818 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v811 = v815 + "div.title {display: none}\n";
    var v807 = v811 + "div.info {font-weight: bold}\n";
    var v803 = v807 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v796 = v803 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v787 = v796 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v776 = v787 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v764 = v776 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v749 = v764 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v734 = v749 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v701 = v734 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v651 = v701 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v571 = v651 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v430 = v571 + "img {display: none}\n";
    var v115 = v430 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v652 = "</head>\n" + '<body class="main">\n';
  var v572 = v652 + '<div class="title">';
  var v431 = v572 + title$$6;
  var v117 = v431 + " results</div>\n";
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
    var v830 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v830[2], v830[1], v830[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v653 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v573 = v653 + "<head>\n";
  var v432 = v573 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v432 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v816 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v812 = v816 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v808 = v812 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v804 = v808 + "div.info {font-weight: bold}\n";
    var v797 = v804 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v788 = v797 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v777 = v788 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v765 = v777 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v750 = v765 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v735 = v750 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v702 = v735 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v654 = v702 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v574 = v654 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v433 = v574 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v433 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v820 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v819 = v820 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v817 = v819 + "div.title {display: none}\n";
    var v813 = v817 + "div.info {font-weight: bold}\n";
    var v809 = v813 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v805 = v809 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v798 = v805 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v789 = v798 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v778 = v789 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v766 = v778 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v751 = v766 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v736 = v751 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v703 = v736 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v655 = v703 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v575 = v655 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v434 = v575 + "img {display: none}\n";
    var v123 = v434 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v656 = "</head>\n" + '<body class="main">\n';
  var v576 = v656 + '<div class="title">';
  var v435 = v576 + title$$8;
  var v125 = v435 + " results</div>\n";
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
  var v436 = dnaSequence$$1.search(/./);
  var v126 = v436 != -1;
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
  var v437 = testArray[0];
  var v130 = v437 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v438 = testString.search(re$$2);
  var v131 = v438 == -1;
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
  var v439 = testNum.toFixed(3);
  var v134 = v439 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v440 = testNum.toPrecision(5);
  var v135 = v440 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v441 = theNumber$$1.search(/\d/);
  var v136 = v441 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v577 = emblFile.search(/ID/);
  var v442 = v577 == -1;
  var v579 = !v442;
  if(v579) {
    var v657 = emblFile.search(/AC/);
    var v578 = v657 == -1;
    var v659 = !v578;
    if(v659) {
      var v704 = emblFile.search(/DE/);
      var v658 = v704 == -1;
      var v706 = !v658;
      if(v706) {
        var v705 = emblFile.search(/SQ/);
        v658 = v705 == -1
      }
      v578 = v658
    }
    v442 = v578
  }
  var v137 = v442;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v443 = theNumber$$2.search(/\d/);
  var v138 = v443 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v444 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v444 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v445 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v445 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v446 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v446 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v580 = genBankFile.search(/LOCUS/);
  var v447 = v580 == -1;
  var v582 = !v447;
  if(v582) {
    var v660 = genBankFile.search(/DEFINITION/);
    var v581 = v660 == -1;
    var v662 = !v581;
    if(v662) {
      var v707 = genBankFile.search(/ACCESSION/);
      var v661 = v707 == -1;
      var v709 = !v661;
      if(v709) {
        var v708 = genBankFile.search(/ORIGIN/);
        v661 = v708 == -1
      }
      v581 = v661
    }
    v447 = v581
  }
  var v143 = v447;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v583 = genBankFile$$1.search(/LOCUS/);
  var v448 = v583 == -1;
  var v585 = !v448;
  if(v585) {
    var v663 = genBankFile$$1.search(/DEFINITION/);
    var v584 = v663 == -1;
    var v665 = !v584;
    if(v665) {
      var v710 = genBankFile$$1.search(/ACCESSION/);
      var v664 = v710 == -1;
      var v712 = !v664;
      if(v712) {
        var v711 = genBankFile$$1.search(/ORIGIN/);
        v664 = v711 == -1
      }
      v584 = v664
    }
    v448 = v584
  }
  var v144 = v448;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v449 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v449 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v586 = emblFile$$1.search(/ID/);
  var v450 = v586 == -1;
  var v588 = !v450;
  if(v588) {
    var v666 = emblFile$$1.search(/AC/);
    var v587 = v666 == -1;
    var v668 = !v587;
    if(v668) {
      var v713 = emblFile$$1.search(/DE/);
      var v667 = v713 == -1;
      var v715 = !v667;
      if(v715) {
        var v714 = emblFile$$1.search(/SQ/);
        v667 = v714 == -1
      }
      v587 = v667
    }
    v450 = v587
  }
  var v146 = v450;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v451 = emblFile$$1.search(/^FT/m);
  var v147 = v451 == -1;
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
    var v452 = basePerLine / groupSize;
    var v152 = j$$6 <= v452;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v453 = k + i$$5;
        var v150 = text$$10.charAt(v453);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v454 = basePerLine / groupSize;
      v152 = j$$6 <= v454
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
    var v455 = adjustment < 0;
    if(v455) {
      v455 = adjusted >= 0
    }
    var v156 = v455;
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
    var v456 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v456;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v457 = i$$6 + k$$1;
        var v157 = v457 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v458 = k$$1 + i$$6;
        var v159 = text$$12.charAt(v458);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v459 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v459, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v460 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v460
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v669 = adjustNumbering(lineNum, numberingAdjustment);
      var v589 = rightNum(v669, "", 8, tabIn$$3);
      var v461 = v589 + lineOfText$$1;
      var v167 = v461 + "\n";
      JAMScript.call(v166.write, v166, [v167]);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v670 = adjustNumbering(lineNum, numberingAdjustment);
        var v590 = rightNum(v670, "", 8, tabIn$$3);
        var v591 = complement(lineOfText$$1);
        var v462 = v590 + v591;
        var v169 = v462 + "\n";
        JAMScript.call(v168.write, v168, [v169]);
        var v170 = outputWindow.document;
        JAMScript.call(v170.write, v170, ["\n"])
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v592 = lineOfText$$1;
        var v593 = adjustNumbering(i$$6, numberingAdjustment);
        var v463 = v592 + v593;
        var v173 = v463 + "\n";
        JAMScript.call(v172.write, v172, [v173]);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v594 = complement(lineOfText$$1);
          var v595 = adjustNumbering(i$$6, numberingAdjustment);
          var v464 = v594 + v595;
          var v175 = v464 + "\n";
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
            var v465 = complement(lineOfText$$1);
            var v183 = v465 + "\n";
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
    var v466 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v466;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v467 = i$$7 + k$$2;
        var v190 = v467 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v468 = k$$2 + i$$7;
        var v192 = text$$13.charAt(v468);
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
      var v469 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v469
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v596 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v470 = v596 + lineOfText$$2;
      var v200 = v470 + "\n";
      JAMScript.call(v199.write, v199, [v200])
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v471 = lineOfText$$2 + i$$7;
        var v202 = v471 + "\n";
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
  var v597 = sequence$$13.length;
  var v472 = v597 <= firstIndexToMutate;
  var v599 = !v472;
  if(v599) {
    var v598 = lastIndexToMutate < 0;
    var v671 = !v598;
    if(v671) {
      v598 = lastIndexToMutate <= firstIndexToMutate
    }
    v472 = v598
  }
  var v211 = v472;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v473 = Math.random();
    var v212 = v473 * maxNum;
    randNum = Math.floor(v212);
    var v474 = randNum < firstIndexToMutate;
    var v600 = !v474;
    if(v600) {
      v474 = randNum > lastIndexToMutate
    }
    var v213 = v474;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v475 = Math.random();
      var v476 = components$$1.length;
      var v214 = v475 * v476;
      componentsIndex = Math.round(v214);
      var v477 = components$$1.length;
      var v215 = componentsIndex == v477;
      if(v215) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v478 = components$$1[componentsIndex]
      }
      var v216 = v478 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v479 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v480 = components$$1[componentsIndex]
    }
    var v217 = v479 + v480;
    var v481 = randNum + 1;
    var v482 = sequence$$13.length;
    var v218 = sequence$$13.substring(v481, v482);
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
    var v483 = Math.random();
    var v484 = components$$2.length;
    var v222 = v483 * v484;
    tempNum$$1 = Math.floor(v222);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v485 = sequence$$14.length;
    var v225 = v485 == 60;
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
    var v672 = sequence$$15.length;
    var v601 = v672 - lookAhead;
    var v602 = sequence$$15.length;
    var v486 = sequence$$15.substring(v601, v602);
    var v230 = v486 + sequence$$15;
    var v231 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAMScript.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v234 = outputWindow.document;
  var v673 = '<tr><td class="title" width="200px">' + "Site:";
  var v603 = v673 + '</td><td class="title">';
  var v487 = v603 + "Positions:";
  var v235 = v487 + "</td></tr>\n";
  JAMScript.call(v234.write, v234, [v235]);
  var i$$9 = 0;
  var v488 = arrayOfItems.length;
  var v251 = i$$9 < v488;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v489 = arrayOfItems[i$$9]
    }
    var v236 = v489.match(/\/.+\//);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v674 = arrayOfItems[i$$9]
    }
    var v604 = v674.match(/\)\D*\d+/);
    var v490 = v604.toString();
    var v237 = v490.replace(/\)\D*/, "");
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v491 = matchPosition >= lowerLimit;
      if(v491) {
        v491 = matchPosition < upperLimit
      }
      var v241 = v491;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v492 = matchPosition - shiftValue;
        var v240 = v492 + 1;
        tempString$$1 = v239 + v240
      }
      var v493 = matchExp.lastIndex;
      var v605 = RegExp.lastMatch;
      var v494 = v605.length;
      var v242 = v493 - v494;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v495 = tempString$$1.search(/\d/);
    var v244 = v495 != -1;
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
    var v767 = '<tr><td class="' + backGroundClass;
    var v752 = v767 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v790 = arrayOfItems[i$$9]
    }
    var v779 = v790.match(/\([^\(]+\)/);
    var v768 = v779.toString();
    var v753 = v768.replace(/\(|\)/g, "");
    var v737 = v752 + v753;
    var v716 = v737 + '</td><td class="';
    var v675 = v716 + backGroundClass;
    var v606 = v675 + '">';
    var v496 = v606 + tempString$$1;
    var v250 = v496 + "</td></tr>\n";
    JAMScript.call(v249.write, v249, [v250]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v497 = arrayOfItems.length;
    v251 = i$$9 < v497
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
  var v738 = '<tr><td class="title">' + "Pattern:";
  var v717 = v738 + '</td><td class="title">';
  var v676 = v717 + "Times found:";
  var v607 = v676 + '</td><td class="title">';
  var v498 = v607 + "Percentage:";
  var v255 = v498 + "</td></tr>\n";
  JAMScript.call(v254.write, v254, [v255]);
  var i$$10 = 0;
  var v499 = arrayOfItems$$1.length;
  var v264 = i$$10 < v499;
  for(;v264;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v500 = arrayOfItems$$1[i$$10]
    }
    var v256 = v500.match(/\/[^\/]+\//);
    var matchExp$$1 = v256 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v501 = sequence$$16.search(matchExp$$1);
    var v258 = v501 != -1;
    if(v258) {
      var v257 = sequence$$16.match(matchExp$$1);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v608 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v718 = arrayOfItems$$1[i$$10]
    }
    var v677 = v718.match(/\d+/);
    var v609 = parseFloat(v677);
    var v502 = v608 - v609;
    var v261 = v502 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v503 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v678 = arrayOfItems$$1[i$$10]
      }
      var v610 = v678.match(/\d+/);
      var v504 = parseFloat(v610);
      var v260 = v503 - v504;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v791 = arrayOfItems$$1[i$$10]
    }
    var v780 = v791.match(/\([^\(]+\)\b/);
    var v769 = v780.toString();
    var v754 = v769.replace(/\(|\)/g, "");
    var v739 = "<tr><td>" + v754;
    var v719 = v739 + "</td><td>";
    var v679 = v719 + tempNumber;
    var v611 = v679 + "</td><td>";
    var v612 = percentage.toFixed(2);
    var v505 = v611 + v612;
    var v263 = v505 + "</td></tr>\n";
    JAMScript.call(v262.write, v262, [v263]);
    i$$10 = i$$10 + 1;
    var v506 = arrayOfItems$$1.length;
    v264 = i$$10 < v506
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
  var v507 = sequence$$17.length;
  var v272 = v507 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v508 = Math.random();
    var v266 = v508 * maxNum$$1;
    randNum$$1 = Math.floor(v266);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v267, v268);
    sequence$$17 = tempString1 + tempString2;
    var v509 = tempSeq.length;
    var v271 = v509 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAMScript.call(v269.write, v269, [v270]);
      tempSeq = ""
    }
    var v510 = sequence$$17.length;
    v272 = v510 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAMScript.call(v273.write, v273, [v274]);
  return true
}
function emblFeat(theDocument) {
  var maxInput$$3 = 2E5;
  var v511 = testScript();
  var v275 = v511 == false;
  if(v275) {
    return false
  }
  var v755 = theDocument.forms;
  var v740 = v755[0];
  var v720 = v740.elements;
  var v680 = v720[0];
  var v613 = checkFormElement(v680);
  var v512 = v613 == false;
  var v615 = !v512;
  if(v615) {
    var v781 = theDocument.forms;
    var v770 = v781[0];
    var v756 = v770.elements;
    var v741 = v756[0];
    var v721 = v741.value;
    var v681 = verifyEmblFeat(v721);
    var v614 = v681 == false;
    var v683 = !v614;
    if(v683) {
      var v782 = theDocument.forms;
      var v771 = v782[0];
      var v757 = v771.elements;
      var v742 = v757[0];
      var v722 = v742.value;
      var v682 = checkTextLength(v722, maxInput$$3);
      v614 = v682 == false
    }
    v512 = v614
  }
  var v276 = v512;
  if(v276) {
    return false
  }
  openWindow("EMBL Feature Extractor");
  openPre();
  var v723 = theDocument.forms;
  var v684 = v723[0];
  var v616 = v684.elements;
  var v513 = v616[0];
  var v277 = v513.value;
  var v758 = theDocument.forms;
  var v743 = v758[0];
  var v724 = v743.elements;
  var v685 = v724[4];
  var v617 = v685.options;
  var v759 = theDocument.forms;
  var v744 = v759[0];
  var v725 = v744.elements;
  var v686 = v725[4];
  var v618 = v686.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v514 = v617[v618]
  }
  var v278 = v514.value;
  emblFeatExtract(v277, v278);
  closePre();
  closeWindow();
  return true
}
function emblFeatExtract(emblFile$$2, outputType) {
  var title$$9;
  var v279 = "_" + emblFile$$2;
  emblFile$$2 = v279 + "_";
  var recordArray = emblFile$$2.split(/ID\s\s\s[^\f\n\r]*/);
  var i$$11 = 1;
  var v515 = recordArray.length;
  var v290 = i$$11 < v515;
  for(;v290;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v280 = recordArray[i$$11]
    }
    var mainArray = v280.split(/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/);
    var v619 = mainArray[0];
    var v516 = v619.search(/[\f\n\r]\s*DE[^\f\n\r]+/);
    var v282 = v516 != -1;
    if(v282) {
      var v620 = mainArray[0];
      var v517 = v620.match(/[\f\n\r]\s*DE[^\f\n\r]+/);
      var v281 = v517.toString();
      title$$9 = v281.replace(/[\f\n\r]\s*DE\s*/, "")
    }else {
      title$$9 = "Untitled"
    }
    var v518 = title$$9.replace(/[\f\n\r\t]+$/g, "");
    var v283 = filterFastaTitle(v518);
    title$$9 = v283 + "\n";
    var v284 = mainArray[2];
    var dnaSequenceArray = v284.split(/\/{2}/);
    var v285 = outputWindow.document;
    var v286 = title$$9 + "\n";
    JAMScript.call(v285.write, v285, [v286]);
    var v519 = dnaSequenceArray.length;
    var v287 = v519 == 1;
    if(v287) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus()
    }
    var v288 = dnaSequenceArray[0];
    var dnaSequence$$3 = removeNonDna(v288);
    var v289 = mainArray[1];
    var featureArray = v289.split(/[\f\n\r]FT {3,12}\b/);
    prepareFeatures(featureArray, dnaSequence$$3, outputType);
    i$$11 = i$$11 + 1;
    var v520 = recordArray.length;
    v290 = i$$11 < v520
  }
  return true
}
function prepareFeatures(arrayOfFeatures, dnaSequence$$4, outputType$$1) {
  var featureTitle = "";
  var theTitle = "";
  var removedTitle = "";
  var firstQualifier = "";
  var position = "";
  var positionNoSpace = "";
  var featureFound = false;
  var i$$12 = 1;
  var v521 = arrayOfFeatures.length;
  var v301 = i$$12 < v521;
  for(;v301;) {
    var v291 = arrayOfFeatures;
    var v292 = i$$12;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v522 = arrayOfFeatures[i$$12]
    }
    var v827 = v522.replace(/[\[\]\*]/g, "");
    v291[v292] = v827;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v523 = arrayOfFeatures[i$$12]
    }
    var v293 = v523.match(/[^ \f\n\r\t\v]+ /);
    featureTitle = v293.toString();
    theTitle = new RegExp(featureTitle);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v294 = arrayOfFeatures[i$$12]
    }
    removedTitle = v294.replace(theTitle, "");
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v621 = arrayOfFeatures[i$$12]
    }
    var v524 = v621.search(/\/[^\f\n\r]+/);
    var v296 = v524 != -1;
    if(v296) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v525 = arrayOfFeatures[i$$12]
      }
      var v295 = v525.match(/\/[^\f\n\r]+/);
      firstQualifier = v295.toString()
    }else {
      firstQualifier = "/no qualifier supplied"
    }
    position = removedTitle.split(/\//);
    var v297 = position[0];
    positionNoSpace = v297.replace(/\s{2,}/g, " ");
    var v298 = outputWindow.document;
    var v687 = filterFastaTitle(featureTitle);
    var v622 = "&gt;" + v687;
    var v623 = filterFastaTitle(firstQualifier);
    var v526 = v622 + v623;
    var v299 = v526 + "\n";
    JAMScript.call(v298.write, v298, [v299]);
    printFeature(positionNoSpace, dnaSequence$$4, outputType$$1);
    featureFound = true;
    var v300 = outputWindow.document;
    JAMScript.call(v300.write, v300, ["\n\n"]);
    i$$12 = i$$12 + 1;
    var v527 = arrayOfFeatures.length;
    v301 = i$$12 < v527
  }
  var v303 = featureFound == false;
  if(v303) {
    var v302 = outputWindow.document;
    JAMScript.call(v302.write, v302, ["There were no features found or there was a problem reading the feature information."])
  }
  return true
}
function printFeature(featurePos, dnaSequence$$5, outputType$$2) {
  var feature$$4;
  featurePos = featurePos.replace(/<|>/g, "");
  featurePos = featurePos.replace(/FT/gi, "");
  var v624 = featurePos.search(/[^a-z\d\.\(\)\,\s]/);
  var v528 = v624 != -1;
  var v626 = !v528;
  if(v626) {
    var v688 = featurePos.search(/one/);
    var v625 = v688 != -1;
    var v690 = !v625;
    if(v690) {
      var v689 = featurePos.search(/order/);
      v625 = v689 != -1
    }
    v528 = v625
  }
  var v322 = v528;
  if(v322) {
    var v304 = outputWindow.document;
    JAMScript.call(v304.write, v304, ["This feature specifies a sequence that cannot be represented:\n"]);
    var v305 = outputWindow.document;
    JAMScript.call(v305.write, v305, [featurePos])
  }else {
    var newFeaturePos = featurePos.replace(/\)/g, "");
    var v529 = newFeaturePos.search(/complement/);
    var v306 = v529 != -1;
    if(v306) {
      feature$$4 = new Feature("complement")
    }else {
      feature$$4 = new Feature("direct")
    }
    var pairString = newFeaturePos;
    var pairArray = pairString.split(/\,/);
    var v530 = newFeaturePos.search(/complement/);
    var v307 = v530 != -1;
    if(v307) {
      pairArray.reverse()
    }
    var digitArray = new Array;
    var realStart = 0;
    var realStop = 0;
    var dnaToAdd = "";
    var j$$10 = 0;
    var v531 = pairArray.length;
    var v321 = j$$10 < v531;
    for(;v321;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v308 = pairArray[j$$10]
      }
      digitArray = v308.split(/\.\./);
      var v532 = digitArray.length;
      var v309 = v532 == 1;
      if(v309) {
        digitArray[1] = digitArray[0]
      }
      realStart = digitArray[0];
      realStop = digitArray[1];
      realStop = realStop.replace(/\D/g, "");
      realStart = realStart.replace(/\D/g, "");
      var v627 = realStart.search(/\d/);
      var v533 = v627 == -1;
      var v629 = !v533;
      if(v629) {
        var v628 = realStop.search(/\d/);
        v533 = v628 == -1
      }
      var v311 = v533;
      if(v311) {
        var v310 = outputWindow.document;
        JAMScript.call(v310.write, v310, ["There was a problem with this feature (one of the range values was missing)."]);
        return true
      }
      var v312 = parseInt(realStart);
      realStart = v312 - 1;
      realStop = parseInt(realStop);
      var v314 = realStart > realStop;
      if(v314) {
        var v313 = outputWindow.document;
        JAMScript.call(v313.write, v313, ["There was a problem with this feature (the end position was before the start position)."]);
        return true
      }
      var v630 = dnaSequence$$5.length;
      var v534 = realStart > v630;
      var v632 = !v534;
      if(v632) {
        var v631 = dnaSequence$$5.length;
        v534 = realStop > v631
      }
      var v320 = v534;
      if(v320) {
        var v315 = outputWindow.document;
        JAMScript.call(v315.write, v315, ["The entire EMBL file was not processed, so this feature cannot be properly shown."]);
        return true
      }else {
        var v319 = outputType$$2 == "separated";
        if(v319) {
          var v316 = dnaSequence$$5.substring(realStart, realStop);
          JAMScript.call(feature$$4.addFragment, feature$$4, [v316])
        }else {
          var v535 = feature$$4.lastAdded;
          var v317 = dnaSequence$$5.substring(v535, realStart);
          JAMScript.call(feature$$4.addFragment, feature$$4, [v317]);
          var v536 = dnaSequence$$5.substring(realStart, realStop);
          var v318 = v536.toUpperCase();
          JAMScript.call(feature$$4.addFragment, feature$$4, [v318]);
          feature$$4.lastAdded = realStop
        }
      }
      j$$10 = j$$10 + 1;
      var v537 = pairArray.length;
      v321 = j$$10 < v537
    }
    JAMScript.call(feature$$4.writeFeature, feature$$4, [])
  }
  return true
}
function writeFeature() {
  var v538 = this.strand;
  var v327 = v538 == "complement";
  if(v327) {
    var v323 = outputWindow.document;
    var v726 = this.fragments;
    var v691 = v726.join("");
    var v633 = complement(v691);
    var v539 = reverse(v633);
    var v324 = addReturns(v539);
    JAMScript.call(v323.write, v323, [v324])
  }else {
    var v325 = outputWindow.document;
    var v634 = this.fragments;
    var v540 = v634.join("");
    var v326 = addReturns(v540);
    JAMScript.call(v325.write, v325, [v326])
  }
  return
}
function addFragment(sequence$$18) {
  var v328 = this.fragments;
  v328.push(sequence$$18);
  return
}
function Feature(strand) {
  this.strand = strand;
  var v828 = new Array;
  this.fragments = v828;
  this.lastAdded = 0;
  return
}
new Feature;
var v329 = Feature.prototype;
v329.writeFeature = writeFeature;
var v330 = Feature.prototype;
v330.addFragment = addFragment;
JAMScript.set(document, "onload", v2);
var v331 = document.getElementById("submitbtn");
JAMScript.set(v331, "onclick", v3);
var v332 = document.getElementById("clearbtn");
JAMScript.set(v332, "onclick", v4);

