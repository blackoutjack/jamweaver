function v4() {
  var v623 = document.forms;
  var v530 = v623[0];
  var v326 = v530.elements;
  var v5 = v326[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    genbankFeat(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v327 = document.main_form;
  var v7 = v327.main_submit;
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
  var v328 = arrayOfSequences.length;
  var v9 = v328 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v329 = arrayOfTitles.length;
  var v11 = i$$1 < v329;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v624 = arrayOfTitles[i$$1]
    }
    var v531 = v624.search(/\S/);
    var v330 = v531 == -1;
    var v533 = !v330;
    if(v533) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v681 = arrayOfSequences[i$$1]
      }
      var v625 = v681.search(/\S/);
      var v532 = v625 == -1;
      var v627 = !v532;
      if(v627) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v682 = arrayOfSequences[i$$1]
        }
        var v626 = v682.length;
        v532 = v626 != lengthOfAlign
      }
      v330 = v532
    }
    var v10 = v330;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v331 = arrayOfTitles.length;
    v11 = i$$1 < v331
  }
  return true
}
function checkCodonTable(codonTable) {
  var v534 = codonTable.search(/AmAcid/);
  var v332 = v534 == -1;
  var v536 = !v332;
  if(v536) {
    var v628 = codonTable.search(/Codon/);
    var v535 = v628 == -1;
    var v630 = !v535;
    if(v630) {
      var v683 = codonTable.search(/Number/);
      var v629 = v683 == -1;
      var v685 = !v629;
      if(v685) {
        var v716 = codonTable.search(/\/1000/);
        var v684 = v716 == -1;
        var v718 = !v684;
        if(v718) {
          var v717 = codonTable.search(/Fraction\s*\.\./);
          v684 = v717 == -1
        }
        v629 = v684
      }
      v535 = v629
    }
    v332 = v535
  }
  var v12 = v332;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v537 = formElement.value;
  var v333 = v537.search(/\S/);
  var v13 = v333 == -1;
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
  var v334 = arrayOfPatterns.length;
  var v16 = z$$2 < v334;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v538 = arrayOfPatterns[z$$2]
    }
    var v335 = v538.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v335 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v539 = arrayOfPatterns[z$$2]
    }
    var v336 = moreExpressionCheck(v539);
    var v15 = v336 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v337 = arrayOfPatterns.length;
    v16 = z$$2 < v337
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v338 = arrayOfPatterns.length;
  var v25 = j < v338;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v631 = arrayOfPatterns[j]
    }
    var v540 = v631.match(/\/.+\//);
    var v339 = v540 + "gi";
    if(JAMScript.isEval(eval)) {
      var v810 = eval("introspect(JAMScript.introspectors.processAll) { " + v339 + " }")
    }else {
      var v810 = JAMScript.call(eval, null, [v339])
    }
    v19[v20] = v810;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v541 = arrayOfPatterns[j]
    }
    var v340 = v541.match(/=[a-zA-Z\*]/);
    var v811 = v340.toString();
    v21[v22] = v811;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v341 = geneticCodeMatchResult[j]
    }
    var v812 = v341.replace(/=/g, "");
    v23[v24] = v812;
    j = j + 1;
    var v342 = arrayOfPatterns.length;
    v25 = j < v342
  }
  var i$$2 = 0;
  var v542 = testSequence.length;
  var v343 = v542 - 3;
  var v32 = i$$2 <= v343;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v344 = geneticCodeMatchExp.length;
    var v30 = j < v344;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v543 = geneticCodeMatchExp[j]
      }
      var v345 = codon.search(v543);
      var v29 = v345 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v346 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v346 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v347 = geneticCodeMatchExp.length;
      v30 = j < v347
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v544 = testSequence.length;
    var v348 = v544 - 3;
    v32 = i$$2 <= v348
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v349 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v349;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v545 = arrayOfPatterns$$1[z$$3]
    }
    var v350 = v545.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v350 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v351 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v351
  }
  var i$$3 = 0;
  var v352 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v352;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v546 = arrayOfPatterns$$1[i$$3]
    }
    var v353 = "[" + v546;
    var v35 = v353 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v354 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v354;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v547 = arrayOfPatterns$$1[j$$1]
      }
      var v355 = v547.search(re);
      var v36 = v355 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v356 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v356
    }
    i$$3 = i$$3 + 1;
    var v357 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v357
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v358 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v358;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v548 = arrayOfPatterns$$2[z$$4]
    }
    var v359 = v548.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v359 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v549 = arrayOfPatterns$$2[z$$4]
    }
    var v360 = moreExpressionCheck(v549);
    var v40 = v360 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v361 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v361
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v632 = getSequenceFromFasta(text$$7);
  var v550 = v632.replace(/[^A-Za-z]/g, "");
  var v362 = v550.length;
  var v43 = v362 > maxInput;
  if(v43) {
    var v363 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v363 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v364 = text$$8.length;
  var v45 = v364 > maxInput$$1;
  if(v45) {
    var v365 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v365 + " characters.";
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
  var v366 = alignArray.length;
  var v52 = v366 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v367 = alignArray.length;
  var v54 = i$$4 < v367;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v551 = alignArray[i$$4]
    }
    var v368 = v551.search(/[^\s]+\s/);
    var v53 = v368 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v369 = alignArray.length;
    v54 = i$$4 < v369
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
  var v370 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v370 != -1;
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
  var v371 = sequence$$2.length;
  var v58 = "&gt;results for " + v371;
  var stringToReturn = v58 + " residue sequence ";
  var v372 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v372 != -1;
  if(v60) {
    var v373 = stringToReturn + '"';
    var v59 = v373 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v374 = stringToReturn + ' starting "';
  var v375 = sequence$$2.substring(0, 10);
  var v61 = v374 + v375;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v376 = sequenceOne.length;
  var v62 = "Search results for " + v376;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v377 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v377 != -1;
  if(v64) {
    var v378 = stringToReturn$$1 + '"';
    var v63 = v378 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v379 = stringToReturn$$1 + ' starting "';
  var v380 = sequenceOne.substring(0, 10);
  var v65 = v379 + v380;
  stringToReturn$$1 = v65 + '"\n';
  var v381 = stringToReturn$$1 + "and ";
  var v382 = sequenceTwo.length;
  var v66 = v381 + v382;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v383 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v383 != -1;
  if(v68) {
    var v384 = stringToReturn$$1 + '"';
    var v67 = v384 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v385 = stringToReturn$$1 + ' starting "';
  var v386 = sequenceTwo.substring(0, 10);
  var v69 = v385 + v386;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v387 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v387;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v633 = arrayOfPatterns$$3[j$$2]
    }
    var v552 = v633.match(/\/.+\//);
    var v388 = v552 + "gi";
    if(JAMScript.isEval(eval)) {
      var v813 = eval("introspect(JAMScript.introspectors.processAll) { " + v388 + " }")
    }else {
      var v813 = JAMScript.call(eval, null, [v388])
    }
    v72[v73] = v813;
    j$$2 = j$$2 + 1;
    var v389 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v389
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v390 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v390;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v553 = arrayOfPatterns$$4[j$$3]
    }
    var v391 = v553.match(/=[a-zA-Z\*]/);
    var v814 = v391.toString();
    v76[v77] = v814;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v392 = geneticCodeMatchResult$$1[j$$3]
    }
    var v815 = v392.replace(/=/g, "");
    v78[v79] = v815;
    j$$3 = j$$3 + 1;
    var v393 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v393
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v394 = sequence$$3.length;
  var v81 = "Results for " + v394;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v395 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v395 != -1;
  if(v83) {
    var v396 = stringToReturn$$2 + '"';
    var v82 = v396 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v397 = stringToReturn$$2 + ' starting "';
  var v398 = sequence$$3.substring(0, 10);
  var v84 = v397 + v398;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v554 = "Results for " + topology;
  var v399 = v554 + " ";
  var v400 = sequence$$4.length;
  var v86 = v399 + v400;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v401 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v401 != -1;
  if(v88) {
    var v402 = stringToReturn$$3 + '"';
    var v87 = v402 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v403 = stringToReturn$$3 + ' starting "';
  var v404 = sequence$$4.substring(0, 10);
  var v89 = v403 + v404;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v405 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v405;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v406 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v406 != -1;
  if(v93) {
    var v407 = stringToReturn$$4 + '"';
    var v92 = v407 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v408 = stringToReturn$$4 + ' starting "';
  var v409 = sequenceOne$$1.substring(0, 10);
  var v94 = v408 + v409;
  stringToReturn$$4 = v94 + '"\n';
  var v410 = stringToReturn$$4 + "and ";
  var v411 = sequenceTwo$$1.length;
  var v95 = v410 + v411;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v412 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v412 != -1;
  if(v97) {
    var v413 = stringToReturn$$4 + '"';
    var v96 = v413 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v414 = stringToReturn$$4 + ' starting "';
  var v415 = sequenceTwo$$1.substring(0, 10);
  var v98 = v414 + v415;
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
    var v416 = Math.random();
    var v417 = components.length;
    var v100 = v416 * v417;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v418 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v418 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v419 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v419 != -1;
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
  var v555 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v420 = v555 != -1;
  var v557 = !v420;
  if(v557) {
    var v634 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v556 = v634 != -1;
    var v636 = !v556;
    if(v636) {
      var v686 = expressionToCheck.search(/\[\]/);
      var v635 = v686 != -1;
      var v688 = !v635;
      if(v688) {
        var v719 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v687 = v719 != -1;
        var v721 = !v687;
        if(v721) {
          var v734 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v720 = v734 != -1;
          var v736 = !v720;
          if(v736) {
            var v749 = expressionToCheck.search(/\|\|/);
            var v735 = v749 != -1;
            var v751 = !v735;
            if(v751) {
              var v761 = expressionToCheck.search(/\/\|/);
              var v750 = v761 != -1;
              var v763 = !v750;
              if(v763) {
                var v772 = expressionToCheck.search(/\|\//);
                var v762 = v772 != -1;
                var v774 = !v762;
                if(v774) {
                  var v781 = expressionToCheck.search(/\[.\]/);
                  var v773 = v781 != -1;
                  var v783 = !v773;
                  if(v783) {
                    var v788 = expressionToCheck.search(/\</);
                    var v782 = v788 != -1;
                    var v790 = !v782;
                    if(v790) {
                      var v789 = expressionToCheck.search(/\>/);
                      v782 = v789 != -1
                    }
                    v773 = v782
                  }
                  v762 = v773
                }
                v750 = v762
              }
              v735 = v750
            }
            v720 = v735
          }
          v687 = v720
        }
        v635 = v687
      }
      v556 = v635
    }
    v420 = v556
  }
  var v105 = v420;
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
    var v818 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v818[2], v818[1], v818[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v637 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v558 = v637 + "<head>\n";
  var v421 = v558 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v421 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v803 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v799 = v803 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v795 = v799 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v791 = v795 + "div.info {font-weight: bold}\n";
    var v784 = v791 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v775 = v784 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v764 = v775 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v752 = v764 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v737 = v752 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v722 = v737 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v689 = v722 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v638 = v689 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v559 = v638 + "td.many {color: #000000}\n";
    var v422 = v559 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v422 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v807 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v804 = v807 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v800 = v804 + "div.title {display: none}\n";
    var v796 = v800 + "div.info {font-weight: bold}\n";
    var v792 = v796 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v785 = v792 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v776 = v785 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v765 = v776 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v753 = v765 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v738 = v753 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v723 = v738 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v690 = v723 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v639 = v690 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v560 = v639 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v423 = v560 + "img {display: none}\n";
    var v115 = v423 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v640 = "</head>\n" + '<body class="main">\n';
  var v561 = v640 + '<div class="title">';
  var v424 = v561 + title$$6;
  var v117 = v424 + " results</div>\n";
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
    var v819 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v819[2], v819[1], v819[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v641 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v562 = v641 + "<head>\n";
  var v425 = v562 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v425 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v805 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v801 = v805 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v797 = v801 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v793 = v797 + "div.info {font-weight: bold}\n";
    var v786 = v793 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v777 = v786 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v766 = v777 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v754 = v766 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v739 = v754 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v724 = v739 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v691 = v724 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v642 = v691 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v563 = v642 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v426 = v563 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v426 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v809 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v808 = v809 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v806 = v808 + "div.title {display: none}\n";
    var v802 = v806 + "div.info {font-weight: bold}\n";
    var v798 = v802 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v794 = v798 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v787 = v794 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v778 = v787 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v767 = v778 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v755 = v767 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v740 = v755 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v725 = v740 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v692 = v725 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v643 = v692 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v564 = v643 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v427 = v564 + "img {display: none}\n";
    var v123 = v427 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v644 = "</head>\n" + '<body class="main">\n';
  var v565 = v644 + '<div class="title">';
  var v428 = v565 + title$$8;
  var v125 = v428 + " results</div>\n";
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
  var v429 = dnaSequence$$1.search(/./);
  var v126 = v429 != -1;
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
  var v430 = testArray[0];
  var v130 = v430 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v431 = testString.search(re$$2);
  var v131 = v431 == -1;
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
  var v432 = testNum.toFixed(3);
  var v134 = v432 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v433 = testNum.toPrecision(5);
  var v135 = v433 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v434 = theNumber$$1.search(/\d/);
  var v136 = v434 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v566 = emblFile.search(/ID/);
  var v435 = v566 == -1;
  var v568 = !v435;
  if(v568) {
    var v645 = emblFile.search(/AC/);
    var v567 = v645 == -1;
    var v647 = !v567;
    if(v647) {
      var v693 = emblFile.search(/DE/);
      var v646 = v693 == -1;
      var v695 = !v646;
      if(v695) {
        var v694 = emblFile.search(/SQ/);
        v646 = v694 == -1
      }
      v567 = v646
    }
    v435 = v567
  }
  var v137 = v435;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v436 = theNumber$$2.search(/\d/);
  var v138 = v436 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v437 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v437 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v438 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v438 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v439 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v439 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v569 = genBankFile.search(/LOCUS/);
  var v440 = v569 == -1;
  var v571 = !v440;
  if(v571) {
    var v648 = genBankFile.search(/DEFINITION/);
    var v570 = v648 == -1;
    var v650 = !v570;
    if(v650) {
      var v696 = genBankFile.search(/ACCESSION/);
      var v649 = v696 == -1;
      var v698 = !v649;
      if(v698) {
        var v697 = genBankFile.search(/ORIGIN/);
        v649 = v697 == -1
      }
      v570 = v649
    }
    v440 = v570
  }
  var v143 = v440;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v572 = genBankFile$$1.search(/LOCUS/);
  var v441 = v572 == -1;
  var v574 = !v441;
  if(v574) {
    var v651 = genBankFile$$1.search(/DEFINITION/);
    var v573 = v651 == -1;
    var v653 = !v573;
    if(v653) {
      var v699 = genBankFile$$1.search(/ACCESSION/);
      var v652 = v699 == -1;
      var v701 = !v652;
      if(v701) {
        var v700 = genBankFile$$1.search(/ORIGIN/);
        v652 = v700 == -1
      }
      v573 = v652
    }
    v441 = v573
  }
  var v144 = v441;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v442 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v442 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v575 = emblFile$$1.search(/ID/);
  var v443 = v575 == -1;
  var v577 = !v443;
  if(v577) {
    var v654 = emblFile$$1.search(/AC/);
    var v576 = v654 == -1;
    var v656 = !v576;
    if(v656) {
      var v702 = emblFile$$1.search(/DE/);
      var v655 = v702 == -1;
      var v704 = !v655;
      if(v704) {
        var v703 = emblFile$$1.search(/SQ/);
        v655 = v703 == -1
      }
      v576 = v655
    }
    v443 = v576
  }
  var v146 = v443;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v444 = emblFile$$1.search(/^FT/m);
  var v147 = v444 == -1;
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
    var v445 = basePerLine / groupSize;
    var v151 = j$$6 <= v445;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v446 = k + i$$5;
        var v149 = text$$10.charAt(v446);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v447 = basePerLine / groupSize;
      v151 = j$$6 <= v447
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
    var v448 = adjustment < 0;
    if(v448) {
      v448 = adjusted >= 0
    }
    var v155 = v448;
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
    var v449 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v449;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v450 = i$$6 + k$$1;
        var v156 = v450 >= stopBase$$2;
        if(v156) {
          break
        }
        var v451 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v451);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v452 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v452, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v453 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v453
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v657 = adjustNumbering(lineNum, numberingAdjustment);
      var v578 = rightNum(v657, "", 8, tabIn$$3);
      var v454 = v578 + lineOfText$$1;
      var v164 = v454 + "\n";
      JAMScript.call(v163.write, v163, [v164]);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v658 = adjustNumbering(lineNum, numberingAdjustment);
        var v579 = rightNum(v658, "", 8, tabIn$$3);
        var v580 = complement(lineOfText$$1);
        var v455 = v579 + v580;
        var v166 = v455 + "\n";
        JAMScript.call(v165.write, v165, [v166]);
        var v167 = outputWindow.document;
        JAMScript.call(v167.write, v167, ["\n"])
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v581 = adjustNumbering(i$$6, numberingAdjustment);
        var v456 = lineOfText$$1 + v581;
        var v170 = v456 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v582 = complement(lineOfText$$1);
          var v583 = adjustNumbering(i$$6, numberingAdjustment);
          var v457 = v582 + v583;
          var v172 = v457 + "\n";
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
            var v458 = complement(lineOfText$$1);
            var v180 = v458 + "\n";
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
    var v459 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v459;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v460 = i$$7 + k$$2;
        var v187 = v460 >= stopBase$$3;
        if(v187) {
          break
        }
        var v461 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v461);
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
      var v462 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v462
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v584 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v463 = v584 + lineOfText$$2;
      var v195 = v463 + "\n";
      JAMScript.call(v194.write, v194, [v195])
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v464 = lineOfText$$2 + i$$7;
        var v197 = v464 + "\n";
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
  var v585 = sequence$$13.length;
  var v465 = v585 <= firstIndexToMutate;
  var v587 = !v465;
  if(v587) {
    var v586 = lastIndexToMutate < 0;
    var v659 = !v586;
    if(v659) {
      v586 = lastIndexToMutate <= firstIndexToMutate
    }
    v465 = v586
  }
  var v206 = v465;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v466 = Math.random();
    var v207 = v466 * maxNum;
    randNum = Math.floor(v207);
    var v467 = randNum < firstIndexToMutate;
    var v588 = !v467;
    if(v588) {
      v467 = randNum > lastIndexToMutate
    }
    var v208 = v467;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v468 = Math.random();
      var v469 = components$$1.length;
      var v209 = v468 * v469;
      componentsIndex = Math.round(v209);
      var v470 = components$$1.length;
      var v210 = componentsIndex == v470;
      if(v210) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v471 = components$$1[componentsIndex]
      }
      var v211 = v471 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v472 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v473 = components$$1[componentsIndex]
    }
    var v212 = v472 + v473;
    var v474 = randNum + 1;
    var v475 = sequence$$13.length;
    var v213 = sequence$$13.substring(v474, v475);
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
    var v476 = Math.random();
    var v477 = components$$2.length;
    var v217 = v476 * v477;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v478 = sequence$$14.length;
    var v220 = v478 == 60;
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
    var v660 = sequence$$15.length;
    var v589 = v660 - lookAhead;
    var v590 = sequence$$15.length;
    var v479 = sequence$$15.substring(v589, v590);
    var v225 = v479 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  JAMScript.call(v228.write, v228, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v229 = outputWindow.document;
  var v661 = '<tr><td class="title" width="200px">' + "Site:";
  var v591 = v661 + '</td><td class="title">';
  var v480 = v591 + "Positions:";
  var v230 = v480 + "</td></tr>\n";
  JAMScript.call(v229.write, v229, [v230]);
  var i$$9 = 0;
  var v481 = arrayOfItems.length;
  var v246 = i$$9 < v481;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v482 = arrayOfItems[i$$9]
    }
    var v231 = v482.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v662 = arrayOfItems[i$$9]
    }
    var v592 = v662.match(/\)\D*\d+/);
    var v483 = v592.toString();
    var v232 = v483.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v484 = matchPosition >= lowerLimit;
      if(v484) {
        v484 = matchPosition < upperLimit
      }
      var v236 = v484;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v485 = matchPosition - shiftValue;
        var v235 = v485 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v593 = matchExp.lastIndex;
      var v663 = RegExp.lastMatch;
      var v594 = v663.length;
      var v486 = v593 - v594;
      v237.lastIndex = v486 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v487 = tempString$$1.search(/\d/);
    var v239 = v487 != -1;
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
    var v756 = '<tr><td class="' + backGroundClass;
    var v741 = v756 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v779 = arrayOfItems[i$$9]
    }
    var v768 = v779.match(/\([^\(]+\)/);
    var v757 = v768.toString();
    var v742 = v757.replace(/\(|\)/g, "");
    var v726 = v741 + v742;
    var v705 = v726 + '</td><td class="';
    var v664 = v705 + backGroundClass;
    var v595 = v664 + '">';
    var v488 = v595 + tempString$$1;
    var v245 = v488 + "</td></tr>\n";
    JAMScript.call(v244.write, v244, [v245]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v489 = arrayOfItems.length;
    v246 = i$$9 < v489
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
  var v727 = '<tr><td class="title">' + "Pattern:";
  var v706 = v727 + '</td><td class="title">';
  var v665 = v706 + "Times found:";
  var v596 = v665 + '</td><td class="title">';
  var v490 = v596 + "Percentage:";
  var v250 = v490 + "</td></tr>\n";
  JAMScript.call(v249.write, v249, [v250]);
  var i$$10 = 0;
  var v491 = arrayOfItems$$1.length;
  var v259 = i$$10 < v491;
  for(;v259;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v492 = arrayOfItems$$1[i$$10]
    }
    var v251 = v492.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v493 = sequence$$16.search(matchExp$$1);
    var v253 = v493 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v597 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v707 = arrayOfItems$$1[i$$10]
    }
    var v666 = v707.match(/\d+/);
    var v598 = parseFloat(v666);
    var v494 = v597 - v598;
    var v256 = v494 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v495 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v667 = arrayOfItems$$1[i$$10]
      }
      var v599 = v667.match(/\d+/);
      var v496 = parseFloat(v599);
      var v255 = v495 - v496;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v780 = arrayOfItems$$1[i$$10]
    }
    var v769 = v780.match(/\([^\(]+\)\b/);
    var v758 = v769.toString();
    var v743 = v758.replace(/\(|\)/g, "");
    var v728 = "<tr><td>" + v743;
    var v708 = v728 + "</td><td>";
    var v668 = v708 + tempNumber;
    var v600 = v668 + "</td><td>";
    var v601 = percentage.toFixed(2);
    var v497 = v600 + v601;
    var v258 = v497 + "</td></tr>\n";
    JAMScript.call(v257.write, v257, [v258]);
    i$$10 = i$$10 + 1;
    var v498 = arrayOfItems$$1.length;
    v259 = i$$10 < v498
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
  var v499 = sequence$$17.length;
  var v267 = v499 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v500 = Math.random();
    var v261 = v500 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v501 = tempSeq.length;
    var v266 = v501 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      JAMScript.call(v264.write, v264, [v265]);
      tempSeq = ""
    }
    var v502 = sequence$$17.length;
    v267 = v502 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  JAMScript.call(v268.write, v268, [v269]);
  return true
}
function genbankFeat(theDocument) {
  var maxInput$$3 = 1E6;
  var v503 = testScript();
  var v270 = v503 == false;
  if(v270) {
    return false
  }
  var v744 = theDocument.forms;
  var v729 = v744[0];
  var v709 = v729.elements;
  var v669 = v709[0];
  var v602 = checkFormElement(v669);
  var v504 = v602 == false;
  var v604 = !v504;
  if(v604) {
    var v770 = theDocument.forms;
    var v759 = v770[0];
    var v745 = v759.elements;
    var v730 = v745[0];
    var v710 = v730.value;
    var v670 = verifyGenBankFeat(v710);
    var v603 = v670 == false;
    var v672 = !v603;
    if(v672) {
      var v771 = theDocument.forms;
      var v760 = v771[0];
      var v746 = v760.elements;
      var v731 = v746[0];
      var v711 = v731.value;
      var v671 = checkTextLength(v711, maxInput$$3);
      v603 = v671 == false
    }
    v504 = v603
  }
  var v271 = v504;
  if(v271) {
    return false
  }
  openWindow("GenBank Feature Extractor");
  openPre();
  var v712 = theDocument.forms;
  var v673 = v712[0];
  var v605 = v673.elements;
  var v505 = v605[0];
  var v272 = v505.value;
  var v747 = theDocument.forms;
  var v732 = v747[0];
  var v713 = v732.elements;
  var v674 = v713[4];
  var v606 = v674.options;
  var v748 = theDocument.forms;
  var v733 = v748[0];
  var v714 = v733.elements;
  var v675 = v714[4];
  var v607 = v675.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v506 = v606[v607]
  }
  var v273 = v506.value;
  genBankFeatExtract(v272, v273);
  closePre();
  closeWindow();
  return true
}
function genBankFeatExtract(genBankFile$$2, outputType) {
  var v274 = "_" + genBankFile$$2;
  genBankFile$$2 = v274 + "_";
  var recordArray = genBankFile$$2.split(/LOCUS\s\s\s[^\f\n\r]*/m);
  var i$$11 = 1;
  var v507 = recordArray.length;
  var v283 = i$$11 < v507;
  for(;v283;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v275 = recordArray[i$$11]
    }
    var mainArray = v275.split(/DEFINITION|ACCESSION|FEATURES|ORIGIN[^\f\n\r]*/);
    var v608 = mainArray[1];
    var v508 = v608.replace(/[\f\n\r\t]+$/g, "");
    var v276 = filterFastaTitle(v508);
    var title$$9 = v276 + "\n";
    var v277 = mainArray[4];
    var dnaSequenceArray = v277.split(/\/{2}/);
    var v278 = outputWindow.document;
    var v279 = title$$9 + "\n";
    JAMScript.call(v278.write, v278, [v279]);
    var v509 = dnaSequenceArray.length;
    var v280 = v509 == 1;
    if(v280) {
      alert("The entire GenBank file may not have been processed.");
      outputWindow.focus()
    }
    var v281 = dnaSequenceArray[0];
    var dnaSequence$$3 = removeNonDna(v281);
    var v282 = mainArray[3];
    var featureArray = v282.split(/[\f\n\r] {5,12}\b/);
    prepareFeatures(featureArray, dnaSequence$$3, outputType);
    i$$11 = i$$11 + 1;
    var v510 = recordArray.length;
    v283 = i$$11 < v510
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
  var v511 = arrayOfFeatures.length;
  var v294 = i$$12 < v511;
  for(;v294;) {
    var v284 = arrayOfFeatures;
    var v285 = i$$12;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v512 = arrayOfFeatures[i$$12]
    }
    var v816 = v512.replace(/[\[\]\*]/g, "");
    v284[v285] = v816;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v513 = arrayOfFeatures[i$$12]
    }
    var v286 = v513.match(/[^ \f\n\r\t\v]+ /);
    featureTitle = v286.toString();
    theTitle = new RegExp(featureTitle);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v287 = arrayOfFeatures[i$$12]
    }
    removedTitle = v287.replace(theTitle, "");
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v609 = arrayOfFeatures[i$$12]
    }
    var v514 = v609.search(/\/[^\f\n\r]+/);
    var v289 = v514 != -1;
    if(v289) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v515 = arrayOfFeatures[i$$12]
      }
      var v288 = v515.match(/\/[^\f\n\r]+/);
      firstQualifier = v288.toString()
    }else {
      firstQualifier = "/no qualifier supplied"
    }
    position = removedTitle.split(/\//);
    var v290 = position[0];
    positionNoSpace = v290.replace(/\s{2,}/g, " ");
    var v291 = outputWindow.document;
    var v676 = filterFastaTitle(featureTitle);
    var v610 = "&gt;" + v676;
    var v611 = filterFastaTitle(firstQualifier);
    var v516 = v610 + v611;
    var v292 = v516 + "\n";
    JAMScript.call(v291.write, v291, [v292]);
    printFeature(positionNoSpace, dnaSequence$$4, outputType$$1);
    featureFound = true;
    var v293 = outputWindow.document;
    JAMScript.call(v293.write, v293, ["\n\n"]);
    i$$12 = i$$12 + 1;
    var v517 = arrayOfFeatures.length;
    v294 = i$$12 < v517
  }
  var v296 = featureFound == false;
  if(v296) {
    var v295 = outputWindow.document;
    JAMScript.call(v295.write, v295, ["There were no features found or there was a problem reading the feature information."])
  }
  return true
}
function printFeature(featurePos, dnaSequence$$5, outputType$$2) {
  var feature$$4;
  featurePos = featurePos.replace(/<|>/g, "");
  var v612 = featurePos.search(/[^a-z\d\.\(\)\,\s]/);
  var v518 = v612 != -1;
  var v614 = !v518;
  if(v614) {
    var v677 = featurePos.search(/one/);
    var v613 = v677 != -1;
    var v679 = !v613;
    if(v679) {
      var v678 = featurePos.search(/order/);
      v613 = v678 != -1
    }
    v518 = v613
  }
  var v315 = v518;
  if(v315) {
    var v297 = outputWindow.document;
    JAMScript.call(v297.write, v297, ["This feature specifies a sequence that cannot be represented:\n"]);
    var v298 = outputWindow.document;
    JAMScript.call(v298.write, v298, [featurePos])
  }else {
    var newFeaturePos = featurePos.replace(/\)/g, "");
    var v519 = newFeaturePos.search(/complement/);
    var v299 = v519 != -1;
    if(v299) {
      feature$$4 = new Feature("complement")
    }else {
      feature$$4 = new Feature("direct")
    }
    var posArray = newFeaturePos.split(/\(/);
    var v300 = posArray.length;
    var last = v300 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var pairString = posArray[last]
    }
    var pairArray = pairString.split(/\,/);
    var digitArray = new Array;
    var realStart = 0;
    var realStop = 0;
    var j$$10 = 0;
    var v520 = pairArray.length;
    var v314 = j$$10 < v520;
    for(;v314;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v301 = pairArray[j$$10]
      }
      digitArray = v301.split(/\.\./);
      var v521 = digitArray.length;
      var v302 = v521 == 1;
      if(v302) {
        digitArray[1] = digitArray[0]
      }
      realStart = digitArray[0];
      realStop = digitArray[1];
      realStop = realStop.replace(/\D/g, "");
      realStart = realStart.replace(/\D/g, "");
      var v615 = realStart.search(/\d/);
      var v522 = v615 == -1;
      var v617 = !v522;
      if(v617) {
        var v616 = realStop.search(/\d/);
        v522 = v616 == -1
      }
      var v304 = v522;
      if(v304) {
        var v303 = outputWindow.document;
        JAMScript.call(v303.write, v303, ["There was a problem with this feature (one of the range values was missing)."]);
        return true
      }
      var v305 = parseInt(realStart);
      realStart = v305 - 1;
      realStop = parseInt(realStop);
      var v307 = realStart > realStop;
      if(v307) {
        var v306 = outputWindow.document;
        JAMScript.call(v306.write, v306, ["There was a problem with this feature (the end position was before the start position)."]);
        return true
      }
      var v618 = dnaSequence$$5.length;
      var v523 = realStart > v618;
      var v620 = !v523;
      if(v620) {
        var v619 = dnaSequence$$5.length;
        v523 = realStop > v619
      }
      var v313 = v523;
      if(v313) {
        var v308 = outputWindow.document;
        JAMScript.call(v308.write, v308, ["The entire GenBank file was not processed, so this feature cannot be properly shown."]);
        return true
      }else {
        var v312 = outputType$$2 == "separated";
        if(v312) {
          var v309 = dnaSequence$$5.substring(realStart, realStop);
          JAMScript.call(feature$$4.addFragment, feature$$4, [v309])
        }else {
          var v524 = feature$$4.lastAdded;
          var v310 = dnaSequence$$5.substring(v524, realStart);
          JAMScript.call(feature$$4.addFragment, feature$$4, [v310]);
          var v525 = dnaSequence$$5.substring(realStart, realStop);
          var v311 = v525.toUpperCase();
          JAMScript.call(feature$$4.addFragment, feature$$4, [v311]);
          feature$$4.lastAdded = realStop
        }
      }
      j$$10 = j$$10 + 1;
      var v526 = pairArray.length;
      v314 = j$$10 < v526
    }
    JAMScript.call(feature$$4.writeFeature, feature$$4, [])
  }
  return true
}
function writeFeature() {
  var v527 = this.strand;
  var v320 = v527 == "complement";
  if(v320) {
    var v316 = outputWindow.document;
    var v715 = this.fragments;
    var v680 = v715.join("");
    var v621 = complement(v680);
    var v528 = reverse(v621);
    var v317 = addReturns(v528);
    JAMScript.call(v316.write, v316, [v317])
  }else {
    var v318 = outputWindow.document;
    var v622 = this.fragments;
    var v529 = v622.join("");
    var v319 = addReturns(v529);
    JAMScript.call(v318.write, v318, [v319])
  }
  return
}
function addFragment(sequence$$18) {
  var v321 = this.fragments;
  v321.push(sequence$$18);
  return
}
function Feature(strand) {
  this.strand = strand;
  var v817 = new Array;
  this.fragments = v817;
  this.lastAdded = 0;
  return
}
new Feature;
var v322 = Feature.prototype;
v322.writeFeature = writeFeature;
var v323 = Feature.prototype;
v323.addFragment = addFragment;
JAMScript.set(document, "onload", v2);
var v324 = document.getElementById("submitbtn");
JAMScript.set(v324, "onclick", v3);
var v325 = document.getElementById("clearbtn");
JAMScript.set(v325, "onclick", v4);

