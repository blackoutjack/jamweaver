function v4() {
  var v629 = document.forms;
  var v535 = v629[0];
  var v328 = v535.elements;
  var v5 = v328[0];
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
  var v329 = document.main_form;
  var v7 = v329.main_submit;
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
  var v330 = arrayOfSequences.length;
  var v9 = v330 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v331 = arrayOfTitles.length;
  var v11 = i$$1 < v331;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v630 = arrayOfTitles[i$$1]
    }
    var v536 = v630.search(/\S/);
    var v332 = v536 == -1;
    var v538 = !v332;
    if(v538) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v687 = arrayOfSequences[i$$1]
      }
      var v631 = v687.search(/\S/);
      var v537 = v631 == -1;
      var v633 = !v537;
      if(v633) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v688 = arrayOfSequences[i$$1]
        }
        var v632 = v688.length;
        v537 = v632 != lengthOfAlign
      }
      v332 = v537
    }
    var v10 = v332;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v333 = arrayOfTitles.length;
    v11 = i$$1 < v333
  }
  return true
}
function checkCodonTable(codonTable) {
  var v539 = codonTable.search(/AmAcid/);
  var v334 = v539 == -1;
  var v541 = !v334;
  if(v541) {
    var v634 = codonTable.search(/Codon/);
    var v540 = v634 == -1;
    var v636 = !v540;
    if(v636) {
      var v689 = codonTable.search(/Number/);
      var v635 = v689 == -1;
      var v691 = !v635;
      if(v691) {
        var v722 = codonTable.search(/\/1000/);
        var v690 = v722 == -1;
        var v724 = !v690;
        if(v724) {
          var v723 = codonTable.search(/Fraction\s*\.\./);
          v690 = v723 == -1
        }
        v635 = v690
      }
      v540 = v635
    }
    v334 = v540
  }
  var v12 = v334;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v542 = formElement.value;
  var v335 = v542.search(/\S/);
  var v13 = v335 == -1;
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
  var v336 = arrayOfPatterns.length;
  var v16 = z$$2 < v336;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v543 = arrayOfPatterns[z$$2]
    }
    var v337 = v543.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v337 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v544 = arrayOfPatterns[z$$2]
    }
    var v338 = moreExpressionCheck(v544);
    var v15 = v338 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v339 = arrayOfPatterns.length;
    v16 = z$$2 < v339
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v340 = arrayOfPatterns.length;
  var v25 = j < v340;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v637 = arrayOfPatterns[j]
    }
    var v545 = v637.match(/\/.+\//);
    var v341 = v545 + "gi";
    if(JAMScript.isEval(eval)) {
      var v816 = eval("introspect(JAMScript.introspectors.processAll) { " + v341 + " }")
    }else {
      var v816 = JAMScript.call(eval, null, [v341])
    }
    v19[v20] = v816;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v546 = arrayOfPatterns[j]
    }
    var v342 = v546.match(/=[a-zA-Z\*]/);
    var v817 = v342.toString();
    v21[v22] = v817;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v343 = geneticCodeMatchResult[j]
    }
    var v818 = v343.replace(/=/g, "");
    v23[v24] = v818;
    j = j + 1;
    var v344 = arrayOfPatterns.length;
    v25 = j < v344
  }
  var i$$2 = 0;
  var v547 = testSequence.length;
  var v345 = v547 - 3;
  var v32 = i$$2 <= v345;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v346 = geneticCodeMatchExp.length;
    var v30 = j < v346;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v548 = geneticCodeMatchExp[j]
      }
      var v347 = codon.search(v548);
      var v29 = v347 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v348 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v348 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v349 = geneticCodeMatchExp.length;
      v30 = j < v349
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v549 = testSequence.length;
    var v350 = v549 - 3;
    v32 = i$$2 <= v350
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v351 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v351;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v550 = arrayOfPatterns$$1[z$$3]
    }
    var v352 = v550.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v352 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v353 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v353
  }
  var i$$3 = 0;
  var v354 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v354;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v551 = arrayOfPatterns$$1[i$$3]
    }
    var v355 = "[" + v551;
    var v35 = v355 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v356 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v356;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v552 = arrayOfPatterns$$1[j$$1]
      }
      var v357 = v552.search(re);
      var v36 = v357 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v358 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v358
    }
    i$$3 = i$$3 + 1;
    var v359 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v359
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v360 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v360;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v553 = arrayOfPatterns$$2[z$$4]
    }
    var v361 = v553.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v361 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v554 = arrayOfPatterns$$2[z$$4]
    }
    var v362 = moreExpressionCheck(v554);
    var v40 = v362 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v363 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v363
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v638 = getSequenceFromFasta(text$$7);
  var v555 = v638.replace(/[^A-Za-z]/g, "");
  var v364 = v555.length;
  var v43 = v364 > maxInput;
  if(v43) {
    var v365 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v365 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v366 = text$$8.length;
  var v45 = v366 > maxInput$$1;
  if(v45) {
    var v367 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v367 + " characters.";
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
  var v368 = alignArray.length;
  var v52 = v368 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v369 = alignArray.length;
  var v54 = i$$4 < v369;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v556 = alignArray[i$$4]
    }
    var v370 = v556.search(/[^\s]+\s/);
    var v53 = v370 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v371 = alignArray.length;
    v54 = i$$4 < v371
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
  var v372 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v372 != -1;
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
  var v373 = sequence$$2.length;
  var v58 = "&gt;results for " + v373;
  var stringToReturn = v58 + " residue sequence ";
  var v374 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v374 != -1;
  if(v60) {
    var v375 = stringToReturn + '"';
    var v59 = v375 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v376 = stringToReturn + ' starting "';
  var v377 = sequence$$2.substring(0, 10);
  var v61 = v376 + v377;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v378 = sequenceOne.length;
  var v62 = "Search results for " + v378;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v379 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v379 != -1;
  if(v64) {
    var v380 = stringToReturn$$1 + '"';
    var v63 = v380 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v381 = stringToReturn$$1 + ' starting "';
  var v382 = sequenceOne.substring(0, 10);
  var v65 = v381 + v382;
  stringToReturn$$1 = v65 + '"\n';
  var v383 = stringToReturn$$1 + "and ";
  var v384 = sequenceTwo.length;
  var v66 = v383 + v384;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v385 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v385 != -1;
  if(v68) {
    var v386 = stringToReturn$$1 + '"';
    var v67 = v386 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v387 = stringToReturn$$1 + ' starting "';
  var v388 = sequenceTwo.substring(0, 10);
  var v69 = v387 + v388;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v389 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v389;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v639 = arrayOfPatterns$$3[j$$2]
    }
    var v557 = v639.match(/\/.+\//);
    var v390 = v557 + "gi";
    if(JAMScript.isEval(eval)) {
      var v819 = eval("introspect(JAMScript.introspectors.processAll) { " + v390 + " }")
    }else {
      var v819 = JAMScript.call(eval, null, [v390])
    }
    v72[v73] = v819;
    j$$2 = j$$2 + 1;
    var v391 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v391
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v392 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v392;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v558 = arrayOfPatterns$$4[j$$3]
    }
    var v393 = v558.match(/=[a-zA-Z\*]/);
    var v820 = v393.toString();
    v76[v77] = v820;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v394 = geneticCodeMatchResult$$1[j$$3]
    }
    var v821 = v394.replace(/=/g, "");
    v78[v79] = v821;
    j$$3 = j$$3 + 1;
    var v395 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v395
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v396 = sequence$$3.length;
  var v81 = "Results for " + v396;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v397 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v397 != -1;
  if(v83) {
    var v398 = stringToReturn$$2 + '"';
    var v82 = v398 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v399 = stringToReturn$$2 + ' starting "';
  var v400 = sequence$$3.substring(0, 10);
  var v84 = v399 + v400;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v559 = "Results for " + topology;
  var v401 = v559 + " ";
  var v402 = sequence$$4.length;
  var v86 = v401 + v402;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v403 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v403 != -1;
  if(v88) {
    var v404 = stringToReturn$$3 + '"';
    var v87 = v404 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v405 = stringToReturn$$3 + ' starting "';
  var v406 = sequence$$4.substring(0, 10);
  var v89 = v405 + v406;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v407 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v407;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v408 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v408 != -1;
  if(v93) {
    var v409 = stringToReturn$$4 + '"';
    var v92 = v409 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v410 = stringToReturn$$4 + ' starting "';
  var v411 = sequenceOne$$1.substring(0, 10);
  var v94 = v410 + v411;
  stringToReturn$$4 = v94 + '"\n';
  var v412 = stringToReturn$$4 + "and ";
  var v413 = sequenceTwo$$1.length;
  var v95 = v412 + v413;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v414 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v414 != -1;
  if(v97) {
    var v415 = stringToReturn$$4 + '"';
    var v96 = v415 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v416 = stringToReturn$$4 + ' starting "';
  var v417 = sequenceTwo$$1.substring(0, 10);
  var v98 = v416 + v417;
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
    var v418 = Math.random();
    var v419 = components.length;
    var v100 = v418 * v419;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v420 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v420 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v421 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v421 != -1;
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
  var v560 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v422 = v560 != -1;
  var v562 = !v422;
  if(v562) {
    var v640 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v561 = v640 != -1;
    var v642 = !v561;
    if(v642) {
      var v692 = expressionToCheck.search(/\[\]/);
      var v641 = v692 != -1;
      var v694 = !v641;
      if(v694) {
        var v725 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v693 = v725 != -1;
        var v727 = !v693;
        if(v727) {
          var v740 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v726 = v740 != -1;
          var v742 = !v726;
          if(v742) {
            var v755 = expressionToCheck.search(/\|\|/);
            var v741 = v755 != -1;
            var v757 = !v741;
            if(v757) {
              var v767 = expressionToCheck.search(/\/\|/);
              var v756 = v767 != -1;
              var v769 = !v756;
              if(v769) {
                var v778 = expressionToCheck.search(/\|\//);
                var v768 = v778 != -1;
                var v780 = !v768;
                if(v780) {
                  var v787 = expressionToCheck.search(/\[.\]/);
                  var v779 = v787 != -1;
                  var v789 = !v779;
                  if(v789) {
                    var v794 = expressionToCheck.search(/\</);
                    var v788 = v794 != -1;
                    var v796 = !v788;
                    if(v796) {
                      var v795 = expressionToCheck.search(/\>/);
                      v788 = v795 != -1
                    }
                    v779 = v788
                  }
                  v768 = v779
                }
                v756 = v768
              }
              v741 = v756
            }
            v726 = v741
          }
          v693 = v726
        }
        v641 = v693
      }
      v561 = v641
    }
    v422 = v561
  }
  var v105 = v422;
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
    var v824 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v824[2], v824[1], v824[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v643 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v563 = v643 + "<head>\n";
  var v423 = v563 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v423 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v809 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v805 = v809 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v801 = v805 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v797 = v801 + "div.info {font-weight: bold}\n";
    var v790 = v797 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v781 = v790 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v770 = v781 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v758 = v770 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v743 = v758 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v728 = v743 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v695 = v728 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v644 = v695 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v564 = v644 + "td.many {color: #000000}\n";
    var v424 = v564 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v424 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v813 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v810 = v813 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v806 = v810 + "div.title {display: none}\n";
    var v802 = v806 + "div.info {font-weight: bold}\n";
    var v798 = v802 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v791 = v798 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v782 = v791 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v771 = v782 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v759 = v771 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v744 = v759 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v729 = v744 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v696 = v729 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v645 = v696 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v565 = v645 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v425 = v565 + "img {display: none}\n";
    var v115 = v425 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v646 = "</head>\n" + '<body class="main">\n';
  var v566 = v646 + '<div class="title">';
  var v426 = v566 + title$$6;
  var v117 = v426 + " results</div>\n";
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
    var v825 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v825[2], v825[1], v825[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v647 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v567 = v647 + "<head>\n";
  var v427 = v567 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v427 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v811 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v807 = v811 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v803 = v807 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v799 = v803 + "div.info {font-weight: bold}\n";
    var v792 = v799 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v783 = v792 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v772 = v783 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v760 = v772 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v745 = v760 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v730 = v745 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v697 = v730 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v648 = v697 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v568 = v648 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v428 = v568 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v428 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v815 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v814 = v815 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v812 = v814 + "div.title {display: none}\n";
    var v808 = v812 + "div.info {font-weight: bold}\n";
    var v804 = v808 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v800 = v804 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v793 = v800 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v784 = v793 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v773 = v784 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v761 = v773 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v746 = v761 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v731 = v746 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v698 = v731 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v649 = v698 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v569 = v649 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v429 = v569 + "img {display: none}\n";
    var v123 = v429 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v650 = "</head>\n" + '<body class="main">\n';
  var v570 = v650 + '<div class="title">';
  var v430 = v570 + title$$8;
  var v125 = v430 + " results</div>\n";
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
  var v431 = dnaSequence$$1.search(/./);
  var v126 = v431 != -1;
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
  var v432 = testArray[0];
  var v130 = v432 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v433 = testString.search(re$$2);
  var v131 = v433 == -1;
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
  var v434 = testNum.toFixed(3);
  var v134 = v434 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v435 = testNum.toPrecision(5);
  var v135 = v435 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v436 = theNumber$$1.search(/\d/);
  var v136 = v436 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v571 = emblFile.search(/ID/);
  var v437 = v571 == -1;
  var v573 = !v437;
  if(v573) {
    var v651 = emblFile.search(/AC/);
    var v572 = v651 == -1;
    var v653 = !v572;
    if(v653) {
      var v699 = emblFile.search(/DE/);
      var v652 = v699 == -1;
      var v701 = !v652;
      if(v701) {
        var v700 = emblFile.search(/SQ/);
        v652 = v700 == -1
      }
      v572 = v652
    }
    v437 = v572
  }
  var v137 = v437;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v438 = theNumber$$2.search(/\d/);
  var v138 = v438 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v439 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v439 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v440 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v440 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v441 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v441 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v574 = genBankFile.search(/LOCUS/);
  var v442 = v574 == -1;
  var v576 = !v442;
  if(v576) {
    var v654 = genBankFile.search(/DEFINITION/);
    var v575 = v654 == -1;
    var v656 = !v575;
    if(v656) {
      var v702 = genBankFile.search(/ACCESSION/);
      var v655 = v702 == -1;
      var v704 = !v655;
      if(v704) {
        var v703 = genBankFile.search(/ORIGIN/);
        v655 = v703 == -1
      }
      v575 = v655
    }
    v442 = v575
  }
  var v143 = v442;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v577 = genBankFile$$1.search(/LOCUS/);
  var v443 = v577 == -1;
  var v579 = !v443;
  if(v579) {
    var v657 = genBankFile$$1.search(/DEFINITION/);
    var v578 = v657 == -1;
    var v659 = !v578;
    if(v659) {
      var v705 = genBankFile$$1.search(/ACCESSION/);
      var v658 = v705 == -1;
      var v707 = !v658;
      if(v707) {
        var v706 = genBankFile$$1.search(/ORIGIN/);
        v658 = v706 == -1
      }
      v578 = v658
    }
    v443 = v578
  }
  var v144 = v443;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v444 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v444 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v580 = emblFile$$1.search(/ID/);
  var v445 = v580 == -1;
  var v582 = !v445;
  if(v582) {
    var v660 = emblFile$$1.search(/AC/);
    var v581 = v660 == -1;
    var v662 = !v581;
    if(v662) {
      var v708 = emblFile$$1.search(/DE/);
      var v661 = v708 == -1;
      var v710 = !v661;
      if(v710) {
        var v709 = emblFile$$1.search(/SQ/);
        v661 = v709 == -1
      }
      v581 = v661
    }
    v445 = v581
  }
  var v146 = v445;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v446 = emblFile$$1.search(/^FT/m);
  var v147 = v446 == -1;
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
    var v447 = basePerLine / groupSize;
    var v151 = j$$6 <= v447;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v448 = k + i$$5;
        var v149 = text$$10.charAt(v448);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v449 = basePerLine / groupSize;
      v151 = j$$6 <= v449
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
    var v450 = adjustment < 0;
    if(v450) {
      v450 = adjusted >= 0
    }
    var v155 = v450;
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
    var v451 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v451;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v452 = i$$6 + k$$1;
        var v156 = v452 >= stopBase$$2;
        if(v156) {
          break
        }
        var v453 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v453);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v454 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v454, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v455 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v455
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v663 = adjustNumbering(lineNum, numberingAdjustment);
      var v583 = rightNum(v663, "", 8, tabIn$$3);
      var v456 = v583 + lineOfText$$1;
      var v164 = v456 + "\n";
      JAMScript.call(v163.write, v163, [v164]);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v664 = adjustNumbering(lineNum, numberingAdjustment);
        var v584 = rightNum(v664, "", 8, tabIn$$3);
        var v585 = complement(lineOfText$$1);
        var v457 = v584 + v585;
        var v166 = v457 + "\n";
        JAMScript.call(v165.write, v165, [v166]);
        var v167 = outputWindow.document;
        JAMScript.call(v167.write, v167, ["\n"])
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v586 = adjustNumbering(i$$6, numberingAdjustment);
        var v458 = lineOfText$$1 + v586;
        var v170 = v458 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v587 = complement(lineOfText$$1);
          var v588 = adjustNumbering(i$$6, numberingAdjustment);
          var v459 = v587 + v588;
          var v172 = v459 + "\n";
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
            var v460 = complement(lineOfText$$1);
            var v180 = v460 + "\n";
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
    var v461 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v461;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v462 = i$$7 + k$$2;
        var v187 = v462 >= stopBase$$3;
        if(v187) {
          break
        }
        var v463 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v463);
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
      var v464 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v464
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v589 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v465 = v589 + lineOfText$$2;
      var v195 = v465 + "\n";
      JAMScript.call(v194.write, v194, [v195])
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v466 = lineOfText$$2 + i$$7;
        var v197 = v466 + "\n";
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
  var v590 = sequence$$13.length;
  var v467 = v590 <= firstIndexToMutate;
  var v592 = !v467;
  if(v592) {
    var v591 = lastIndexToMutate < 0;
    var v665 = !v591;
    if(v665) {
      v591 = lastIndexToMutate <= firstIndexToMutate
    }
    v467 = v591
  }
  var v206 = v467;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v468 = Math.random();
    var v207 = v468 * maxNum;
    randNum = Math.floor(v207);
    var v469 = randNum < firstIndexToMutate;
    var v593 = !v469;
    if(v593) {
      v469 = randNum > lastIndexToMutate
    }
    var v208 = v469;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v470 = Math.random();
      var v471 = components$$1.length;
      var v209 = v470 * v471;
      componentsIndex = Math.round(v209);
      var v472 = components$$1.length;
      var v210 = componentsIndex == v472;
      if(v210) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v473 = components$$1[componentsIndex]
      }
      var v211 = v473 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v474 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v475 = components$$1[componentsIndex]
    }
    var v212 = v474 + v475;
    var v476 = randNum + 1;
    var v477 = sequence$$13.length;
    var v213 = sequence$$13.substring(v476, v477);
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
    var v478 = Math.random();
    var v479 = components$$2.length;
    var v217 = v478 * v479;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v480 = sequence$$14.length;
    var v220 = v480 == 60;
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
    var v666 = sequence$$15.length;
    var v594 = v666 - lookAhead;
    var v595 = sequence$$15.length;
    var v481 = sequence$$15.substring(v594, v595);
    var v225 = v481 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  JAMScript.call(v228.write, v228, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v229 = outputWindow.document;
  var v667 = '<tr><td class="title" width="200px">' + "Site:";
  var v596 = v667 + '</td><td class="title">';
  var v482 = v596 + "Positions:";
  var v230 = v482 + "</td></tr>\n";
  JAMScript.call(v229.write, v229, [v230]);
  var i$$9 = 0;
  var v483 = arrayOfItems.length;
  var v246 = i$$9 < v483;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v484 = arrayOfItems[i$$9]
    }
    var v231 = v484.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v668 = arrayOfItems[i$$9]
    }
    var v597 = v668.match(/\)\D*\d+/);
    var v485 = v597.toString();
    var v232 = v485.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v486 = matchPosition >= lowerLimit;
      if(v486) {
        v486 = matchPosition < upperLimit
      }
      var v236 = v486;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v487 = matchPosition - shiftValue;
        var v235 = v487 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v598 = matchExp.lastIndex;
      var v669 = RegExp.lastMatch;
      var v599 = v669.length;
      var v488 = v598 - v599;
      v237.lastIndex = v488 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v489 = tempString$$1.search(/\d/);
    var v239 = v489 != -1;
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
    var v762 = '<tr><td class="' + backGroundClass;
    var v747 = v762 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v785 = arrayOfItems[i$$9]
    }
    var v774 = v785.match(/\([^\(]+\)/);
    var v763 = v774.toString();
    var v748 = v763.replace(/\(|\)/g, "");
    var v732 = v747 + v748;
    var v711 = v732 + '</td><td class="';
    var v670 = v711 + backGroundClass;
    var v600 = v670 + '">';
    var v490 = v600 + tempString$$1;
    var v245 = v490 + "</td></tr>\n";
    JAMScript.call(v244.write, v244, [v245]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v491 = arrayOfItems.length;
    v246 = i$$9 < v491
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
  var v733 = '<tr><td class="title">' + "Pattern:";
  var v712 = v733 + '</td><td class="title">';
  var v671 = v712 + "Times found:";
  var v601 = v671 + '</td><td class="title">';
  var v492 = v601 + "Percentage:";
  var v250 = v492 + "</td></tr>\n";
  JAMScript.call(v249.write, v249, [v250]);
  var i$$10 = 0;
  var v493 = arrayOfItems$$1.length;
  var v259 = i$$10 < v493;
  for(;v259;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v494 = arrayOfItems$$1[i$$10]
    }
    var v251 = v494.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v495 = sequence$$16.search(matchExp$$1);
    var v253 = v495 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v602 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v713 = arrayOfItems$$1[i$$10]
    }
    var v672 = v713.match(/\d+/);
    var v603 = parseFloat(v672);
    var v496 = v602 - v603;
    var v256 = v496 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v497 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v673 = arrayOfItems$$1[i$$10]
      }
      var v604 = v673.match(/\d+/);
      var v498 = parseFloat(v604);
      var v255 = v497 - v498;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v786 = arrayOfItems$$1[i$$10]
    }
    var v775 = v786.match(/\([^\(]+\)\b/);
    var v764 = v775.toString();
    var v749 = v764.replace(/\(|\)/g, "");
    var v734 = "<tr><td>" + v749;
    var v714 = v734 + "</td><td>";
    var v674 = v714 + tempNumber;
    var v605 = v674 + "</td><td>";
    var v606 = percentage.toFixed(2);
    var v499 = v605 + v606;
    var v258 = v499 + "</td></tr>\n";
    JAMScript.call(v257.write, v257, [v258]);
    i$$10 = i$$10 + 1;
    var v500 = arrayOfItems$$1.length;
    v259 = i$$10 < v500
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
  var v501 = sequence$$17.length;
  var v267 = v501 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v502 = Math.random();
    var v261 = v502 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v503 = tempSeq.length;
    var v266 = v503 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      JAMScript.call(v264.write, v264, [v265]);
      tempSeq = ""
    }
    var v504 = sequence$$17.length;
    v267 = v504 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  JAMScript.call(v268.write, v268, [v269]);
  return true
}
function emblFeat(theDocument) {
  var maxInput$$3 = 2E5;
  var v505 = testScript();
  var v270 = v505 == false;
  if(v270) {
    return false
  }
  var v750 = theDocument.forms;
  var v735 = v750[0];
  var v715 = v735.elements;
  var v675 = v715[0];
  var v607 = checkFormElement(v675);
  var v506 = v607 == false;
  var v609 = !v506;
  if(v609) {
    var v776 = theDocument.forms;
    var v765 = v776[0];
    var v751 = v765.elements;
    var v736 = v751[0];
    var v716 = v736.value;
    var v676 = verifyEmblFeat(v716);
    var v608 = v676 == false;
    var v678 = !v608;
    if(v678) {
      var v777 = theDocument.forms;
      var v766 = v777[0];
      var v752 = v766.elements;
      var v737 = v752[0];
      var v717 = v737.value;
      var v677 = checkTextLength(v717, maxInput$$3);
      v608 = v677 == false
    }
    v506 = v608
  }
  var v271 = v506;
  if(v271) {
    return false
  }
  openWindow("EMBL Feature Extractor");
  openPre();
  var v718 = theDocument.forms;
  var v679 = v718[0];
  var v610 = v679.elements;
  var v507 = v610[0];
  var v272 = v507.value;
  var v753 = theDocument.forms;
  var v738 = v753[0];
  var v719 = v738.elements;
  var v680 = v719[4];
  var v611 = v680.options;
  var v754 = theDocument.forms;
  var v739 = v754[0];
  var v720 = v739.elements;
  var v681 = v720[4];
  var v612 = v681.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v508 = v611[v612]
  }
  var v273 = v508.value;
  emblFeatExtract(v272, v273);
  closePre();
  closeWindow();
  return true
}
function emblFeatExtract(emblFile$$2, outputType) {
  var title$$9;
  var v274 = "_" + emblFile$$2;
  emblFile$$2 = v274 + "_";
  var recordArray = emblFile$$2.split(/ID\s\s\s[^\f\n\r]*/);
  var i$$11 = 1;
  var v509 = recordArray.length;
  var v285 = i$$11 < v509;
  for(;v285;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v275 = recordArray[i$$11]
    }
    var mainArray = v275.split(/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/);
    var v613 = mainArray[0];
    var v510 = v613.search(/[\f\n\r]\s*DE[^\f\n\r]+/);
    var v277 = v510 != -1;
    if(v277) {
      var v614 = mainArray[0];
      var v511 = v614.match(/[\f\n\r]\s*DE[^\f\n\r]+/);
      var v276 = v511.toString();
      title$$9 = v276.replace(/[\f\n\r]\s*DE\s*/, "")
    }else {
      title$$9 = "Untitled"
    }
    var v512 = title$$9.replace(/[\f\n\r\t]+$/g, "");
    var v278 = filterFastaTitle(v512);
    title$$9 = v278 + "\n";
    var v279 = mainArray[2];
    var dnaSequenceArray = v279.split(/\/{2}/);
    var v280 = outputWindow.document;
    var v281 = title$$9 + "\n";
    JAMScript.call(v280.write, v280, [v281]);
    var v513 = dnaSequenceArray.length;
    var v282 = v513 == 1;
    if(v282) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus()
    }
    var v283 = dnaSequenceArray[0];
    var dnaSequence$$3 = removeNonDna(v283);
    var v284 = mainArray[1];
    var featureArray = v284.split(/[\f\n\r]FT {3,12}\b/);
    prepareFeatures(featureArray, dnaSequence$$3, outputType);
    i$$11 = i$$11 + 1;
    var v514 = recordArray.length;
    v285 = i$$11 < v514
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
  var v515 = arrayOfFeatures.length;
  var v296 = i$$12 < v515;
  for(;v296;) {
    var v286 = arrayOfFeatures;
    var v287 = i$$12;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v516 = arrayOfFeatures[i$$12]
    }
    var v822 = v516.replace(/[\[\]\*]/g, "");
    v286[v287] = v822;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v517 = arrayOfFeatures[i$$12]
    }
    var v288 = v517.match(/[^ \f\n\r\t\v]+ /);
    featureTitle = v288.toString();
    theTitle = new RegExp(featureTitle);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v289 = arrayOfFeatures[i$$12]
    }
    removedTitle = v289.replace(theTitle, "");
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v615 = arrayOfFeatures[i$$12]
    }
    var v518 = v615.search(/\/[^\f\n\r]+/);
    var v291 = v518 != -1;
    if(v291) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v519 = arrayOfFeatures[i$$12]
      }
      var v290 = v519.match(/\/[^\f\n\r]+/);
      firstQualifier = v290.toString()
    }else {
      firstQualifier = "/no qualifier supplied"
    }
    position = removedTitle.split(/\//);
    var v292 = position[0];
    positionNoSpace = v292.replace(/\s{2,}/g, " ");
    var v293 = outputWindow.document;
    var v682 = filterFastaTitle(featureTitle);
    var v616 = "&gt;" + v682;
    var v617 = filterFastaTitle(firstQualifier);
    var v520 = v616 + v617;
    var v294 = v520 + "\n";
    JAMScript.call(v293.write, v293, [v294]);
    printFeature(positionNoSpace, dnaSequence$$4, outputType$$1);
    featureFound = true;
    var v295 = outputWindow.document;
    JAMScript.call(v295.write, v295, ["\n\n"]);
    i$$12 = i$$12 + 1;
    var v521 = arrayOfFeatures.length;
    v296 = i$$12 < v521
  }
  var v298 = featureFound == false;
  if(v298) {
    var v297 = outputWindow.document;
    JAMScript.call(v297.write, v297, ["There were no features found or there was a problem reading the feature information."])
  }
  return true
}
function printFeature(featurePos, dnaSequence$$5, outputType$$2) {
  var feature$$4;
  featurePos = featurePos.replace(/<|>/g, "");
  featurePos = featurePos.replace(/FT/gi, "");
  var v618 = featurePos.search(/[^a-z\d\.\(\)\,\s]/);
  var v522 = v618 != -1;
  var v620 = !v522;
  if(v620) {
    var v683 = featurePos.search(/one/);
    var v619 = v683 != -1;
    var v685 = !v619;
    if(v685) {
      var v684 = featurePos.search(/order/);
      v619 = v684 != -1
    }
    v522 = v619
  }
  var v317 = v522;
  if(v317) {
    var v299 = outputWindow.document;
    JAMScript.call(v299.write, v299, ["This feature specifies a sequence that cannot be represented:\n"]);
    var v300 = outputWindow.document;
    JAMScript.call(v300.write, v300, [featurePos])
  }else {
    var newFeaturePos = featurePos.replace(/\)/g, "");
    var v523 = newFeaturePos.search(/complement/);
    var v301 = v523 != -1;
    if(v301) {
      feature$$4 = new Feature("complement")
    }else {
      feature$$4 = new Feature("direct")
    }
    var pairString = newFeaturePos;
    var pairArray = pairString.split(/\,/);
    var v524 = newFeaturePos.search(/complement/);
    var v302 = v524 != -1;
    if(v302) {
      pairArray.reverse()
    }
    var digitArray = new Array;
    var realStart = 0;
    var realStop = 0;
    var dnaToAdd = "";
    var j$$10 = 0;
    var v525 = pairArray.length;
    var v316 = j$$10 < v525;
    for(;v316;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v303 = pairArray[j$$10]
      }
      digitArray = v303.split(/\.\./);
      var v526 = digitArray.length;
      var v304 = v526 == 1;
      if(v304) {
        digitArray[1] = digitArray[0]
      }
      realStart = digitArray[0];
      realStop = digitArray[1];
      realStop = realStop.replace(/\D/g, "");
      realStart = realStart.replace(/\D/g, "");
      var v621 = realStart.search(/\d/);
      var v527 = v621 == -1;
      var v623 = !v527;
      if(v623) {
        var v622 = realStop.search(/\d/);
        v527 = v622 == -1
      }
      var v306 = v527;
      if(v306) {
        var v305 = outputWindow.document;
        JAMScript.call(v305.write, v305, ["There was a problem with this feature (one of the range values was missing)."]);
        return true
      }
      var v307 = parseInt(realStart);
      realStart = v307 - 1;
      realStop = parseInt(realStop);
      var v309 = realStart > realStop;
      if(v309) {
        var v308 = outputWindow.document;
        JAMScript.call(v308.write, v308, ["There was a problem with this feature (the end position was before the start position)."]);
        return true
      }
      var v624 = dnaSequence$$5.length;
      var v528 = realStart > v624;
      var v626 = !v528;
      if(v626) {
        var v625 = dnaSequence$$5.length;
        v528 = realStop > v625
      }
      var v315 = v528;
      if(v315) {
        var v310 = outputWindow.document;
        JAMScript.call(v310.write, v310, ["The entire EMBL file was not processed, so this feature cannot be properly shown."]);
        return true
      }else {
        var v314 = outputType$$2 == "separated";
        if(v314) {
          var v311 = dnaSequence$$5.substring(realStart, realStop);
          JAMScript.call(feature$$4.addFragment, feature$$4, [v311])
        }else {
          var v529 = feature$$4.lastAdded;
          var v312 = dnaSequence$$5.substring(v529, realStart);
          JAMScript.call(feature$$4.addFragment, feature$$4, [v312]);
          var v530 = dnaSequence$$5.substring(realStart, realStop);
          var v313 = v530.toUpperCase();
          JAMScript.call(feature$$4.addFragment, feature$$4, [v313]);
          feature$$4.lastAdded = realStop
        }
      }
      j$$10 = j$$10 + 1;
      var v531 = pairArray.length;
      v316 = j$$10 < v531
    }
    JAMScript.call(feature$$4.writeFeature, feature$$4, [])
  }
  return true
}
function writeFeature() {
  var v532 = this.strand;
  var v322 = v532 == "complement";
  if(v322) {
    var v318 = outputWindow.document;
    var v721 = this.fragments;
    var v686 = v721.join("");
    var v627 = complement(v686);
    var v533 = reverse(v627);
    var v319 = addReturns(v533);
    JAMScript.call(v318.write, v318, [v319])
  }else {
    var v320 = outputWindow.document;
    var v628 = this.fragments;
    var v534 = v628.join("");
    var v321 = addReturns(v534);
    JAMScript.call(v320.write, v320, [v321])
  }
  return
}
function addFragment(sequence$$18) {
  var v323 = this.fragments;
  v323.push(sequence$$18);
  return
}
function Feature(strand) {
  this.strand = strand;
  var v823 = new Array;
  this.fragments = v823;
  this.lastAdded = 0;
  return
}
new Feature;
var v324 = Feature.prototype;
v324.writeFeature = writeFeature;
var v325 = Feature.prototype;
v325.addFragment = addFragment;
JAMScript.set(document, "onload", v2);
var v326 = document.getElementById("submitbtn");
JAMScript.set(v326, "onclick", v3);
var v327 = document.getElementById("clearbtn");
JAMScript.set(v327, "onclick", v4);

