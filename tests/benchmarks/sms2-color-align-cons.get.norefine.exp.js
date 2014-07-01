function v4() {
  var v698 = document.forms;
  var v582 = v698[0];
  var v338 = v582.elements;
  var v5 = v338[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    colorAlignCons(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v339 = document.main_form;
  var v7 = v339.main_submit;
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
  var v340 = arrayOfSequences.length;
  var v9 = v340 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v341 = arrayOfTitles.length;
  var v11 = i$$1 < v341;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v699 = arrayOfTitles[i$$1]
    }
    var v583 = v699.search(/\S/);
    var v342 = v583 == -1;
    var v585 = !v342;
    if(v585) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v767 = arrayOfSequences[i$$1]
      }
      var v700 = v767.search(/\S/);
      var v584 = v700 == -1;
      var v702 = !v584;
      if(v702) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v768 = arrayOfSequences[i$$1]
        }
        var v701 = v768.length;
        v584 = v701 != lengthOfAlign
      }
      v342 = v584
    }
    var v10 = v342;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v343 = arrayOfTitles.length;
    v11 = i$$1 < v343
  }
  return true
}
function checkCodonTable(codonTable) {
  var v586 = codonTable.search(/AmAcid/);
  var v344 = v586 == -1;
  var v588 = !v344;
  if(v588) {
    var v703 = codonTable.search(/Codon/);
    var v587 = v703 == -1;
    var v705 = !v587;
    if(v705) {
      var v769 = codonTable.search(/Number/);
      var v704 = v769 == -1;
      var v771 = !v704;
      if(v771) {
        var v809 = codonTable.search(/\/1000/);
        var v770 = v809 == -1;
        var v811 = !v770;
        if(v811) {
          var v810 = codonTable.search(/Fraction\s*\.\./);
          v770 = v810 == -1
        }
        v704 = v770
      }
      v587 = v704
    }
    v344 = v587
  }
  var v12 = v344;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v589 = formElement.value;
  var v345 = v589.search(/\S/);
  var v13 = v345 == -1;
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
  var v346 = arrayOfPatterns.length;
  var v16 = z$$2 < v346;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v590 = arrayOfPatterns[z$$2]
    }
    var v347 = v590.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v347 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v591 = arrayOfPatterns[z$$2]
    }
    var v348 = moreExpressionCheck(v591);
    var v15 = v348 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v349 = arrayOfPatterns.length;
    v16 = z$$2 < v349
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v350 = arrayOfPatterns.length;
  var v25 = j < v350;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v706 = arrayOfPatterns[j]
    }
    var v592 = v706.match(/\/.+\//);
    var v351 = v592 + "gi";
    if(JAMScript.isEval(eval)) {
      var v909 = eval("introspect(JAMScript.introspectors.processAll) { " + v351 + " }")
    }else {
      var v909 = JAMScript.call(eval, null, [v351])
    }
    v19[v20] = v909;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v593 = arrayOfPatterns[j]
    }
    var v352 = v593.match(/=[a-zA-Z\*]/);
    var v910 = v352.toString();
    v21[v22] = v910;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v353 = geneticCodeMatchResult[j]
    }
    var v911 = v353.replace(/=/g, "");
    v23[v24] = v911;
    j = j + 1;
    var v354 = arrayOfPatterns.length;
    v25 = j < v354
  }
  var i$$2 = 0;
  var v594 = testSequence.length;
  var v355 = v594 - 3;
  var v32 = i$$2 <= v355;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v356 = geneticCodeMatchExp.length;
    var v30 = j < v356;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v595 = geneticCodeMatchExp[j]
      }
      var v357 = codon.search(v595);
      var v29 = v357 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v358 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v358 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v359 = geneticCodeMatchExp.length;
      v30 = j < v359
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v596 = testSequence.length;
    var v360 = v596 - 3;
    v32 = i$$2 <= v360
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v361 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v361;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v597 = arrayOfPatterns$$1[z$$3]
    }
    var v362 = v597.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v362 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v363 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v363
  }
  var i$$3 = 0;
  var v364 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v364;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v598 = arrayOfPatterns$$1[i$$3]
    }
    var v365 = "[" + v598;
    var v35 = v365 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v366 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v366;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v599 = arrayOfPatterns$$1[j$$1]
      }
      var v367 = v599.search(re);
      var v36 = v367 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v368 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v368
    }
    i$$3 = i$$3 + 1;
    var v369 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v369
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v370 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v370;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v600 = arrayOfPatterns$$2[z$$4]
    }
    var v371 = v600.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v371 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v601 = arrayOfPatterns$$2[z$$4]
    }
    var v372 = moreExpressionCheck(v601);
    var v40 = v372 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v373 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v373
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v707 = getSequenceFromFasta(text$$7);
  var v602 = v707.replace(/[^A-Za-z]/g, "");
  var v374 = v602.length;
  var v43 = v374 > maxInput;
  if(v43) {
    var v375 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v375 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v376 = text$$8.length;
  var v45 = v376 > maxInput$$1;
  if(v45) {
    var v377 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v377 + " characters.";
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
  var v378 = alignArray.length;
  var v52 = v378 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v379 = alignArray.length;
  var v54 = i$$4 < v379;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v603 = alignArray[i$$4]
    }
    var v380 = v603.search(/[^\s]+\s/);
    var v53 = v380 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v381 = alignArray.length;
    v54 = i$$4 < v381
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
  var v382 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v382 != -1;
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
  var v383 = sequence$$2.length;
  var v58 = "&gt;results for " + v383;
  var stringToReturn = v58 + " residue sequence ";
  var v384 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v384 != -1;
  if(v60) {
    var v385 = stringToReturn + '"';
    var v59 = v385 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v386 = stringToReturn + ' starting "';
  var v387 = sequence$$2.substring(0, 10);
  var v61 = v386 + v387;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v388 = sequenceOne.length;
  var v62 = "Search results for " + v388;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v389 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v389 != -1;
  if(v64) {
    var v390 = stringToReturn$$1 + '"';
    var v63 = v390 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v391 = stringToReturn$$1 + ' starting "';
  var v392 = sequenceOne.substring(0, 10);
  var v65 = v391 + v392;
  stringToReturn$$1 = v65 + '"\n';
  var v393 = stringToReturn$$1 + "and ";
  var v394 = sequenceTwo.length;
  var v66 = v393 + v394;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v395 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v395 != -1;
  if(v68) {
    var v396 = stringToReturn$$1 + '"';
    var v67 = v396 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v397 = stringToReturn$$1 + ' starting "';
  var v398 = sequenceTwo.substring(0, 10);
  var v69 = v397 + v398;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v399 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v399;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v708 = arrayOfPatterns$$3[j$$2]
    }
    var v604 = v708.match(/\/.+\//);
    var v400 = v604 + "gi";
    if(JAMScript.isEval(eval)) {
      var v912 = eval("introspect(JAMScript.introspectors.processAll) { " + v400 + " }")
    }else {
      var v912 = JAMScript.call(eval, null, [v400])
    }
    v72[v73] = v912;
    j$$2 = j$$2 + 1;
    var v401 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v401
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v402 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v402;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v605 = arrayOfPatterns$$4[j$$3]
    }
    var v403 = v605.match(/=[a-zA-Z\*]/);
    var v913 = v403.toString();
    v76[v77] = v913;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v404 = geneticCodeMatchResult$$1[j$$3]
    }
    var v914 = v404.replace(/=/g, "");
    v78[v79] = v914;
    j$$3 = j$$3 + 1;
    var v405 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v405
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v406 = sequence$$3.length;
  var v81 = "Results for " + v406;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v407 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v407 != -1;
  if(v83) {
    var v408 = stringToReturn$$2 + '"';
    var v82 = v408 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v409 = stringToReturn$$2 + ' starting "';
  var v410 = sequence$$3.substring(0, 10);
  var v84 = v409 + v410;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v606 = "Results for " + topology;
  var v411 = v606 + " ";
  var v412 = sequence$$4.length;
  var v86 = v411 + v412;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v413 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v413 != -1;
  if(v88) {
    var v414 = stringToReturn$$3 + '"';
    var v87 = v414 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v415 = stringToReturn$$3 + ' starting "';
  var v416 = sequence$$4.substring(0, 10);
  var v89 = v415 + v416;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v417 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v417;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v418 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v418 != -1;
  if(v93) {
    var v419 = stringToReturn$$4 + '"';
    var v92 = v419 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v420 = stringToReturn$$4 + ' starting "';
  var v421 = sequenceOne$$1.substring(0, 10);
  var v94 = v420 + v421;
  stringToReturn$$4 = v94 + '"\n';
  var v422 = stringToReturn$$4 + "and ";
  var v423 = sequenceTwo$$1.length;
  var v95 = v422 + v423;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v424 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v424 != -1;
  if(v97) {
    var v425 = stringToReturn$$4 + '"';
    var v96 = v425 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v426 = stringToReturn$$4 + ' starting "';
  var v427 = sequenceTwo$$1.substring(0, 10);
  var v98 = v426 + v427;
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
    var v428 = Math.random();
    var v429 = components.length;
    var v100 = v428 * v429;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v430 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v430 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v431 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v431 != -1;
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
  var v607 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v432 = v607 != -1;
  var v609 = !v432;
  if(v609) {
    var v709 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v608 = v709 != -1;
    var v711 = !v608;
    if(v711) {
      var v772 = expressionToCheck.search(/\[\]/);
      var v710 = v772 != -1;
      var v774 = !v710;
      if(v774) {
        var v812 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v773 = v812 != -1;
        var v814 = !v773;
        if(v814) {
          var v831 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v813 = v831 != -1;
          var v833 = !v813;
          if(v833) {
            var v849 = expressionToCheck.search(/\|\|/);
            var v832 = v849 != -1;
            var v851 = !v832;
            if(v851) {
              var v862 = expressionToCheck.search(/\/\|/);
              var v850 = v862 != -1;
              var v864 = !v850;
              if(v864) {
                var v871 = expressionToCheck.search(/\|\//);
                var v863 = v871 != -1;
                var v873 = !v863;
                if(v873) {
                  var v880 = expressionToCheck.search(/\[.\]/);
                  var v872 = v880 != -1;
                  var v882 = !v872;
                  if(v882) {
                    var v887 = expressionToCheck.search(/\</);
                    var v881 = v887 != -1;
                    var v889 = !v881;
                    if(v889) {
                      var v888 = expressionToCheck.search(/\>/);
                      v881 = v888 != -1
                    }
                    v872 = v881
                  }
                  v863 = v872
                }
                v850 = v863
              }
              v832 = v850
            }
            v813 = v832
          }
          v773 = v813
        }
        v710 = v773
      }
      v608 = v710
    }
    v432 = v608
  }
  var v105 = v432;
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
    var v923 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v923[2], v923[1], v923[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v712 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v610 = v712 + "<head>\n";
  var v433 = v610 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v433 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v902 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v898 = v902 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v894 = v898 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v890 = v894 + "div.info {font-weight: bold}\n";
    var v883 = v890 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v874 = v883 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v865 = v874 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v852 = v865 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v834 = v852 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v815 = v834 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v775 = v815 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v713 = v775 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v611 = v713 + "td.many {color: #000000}\n";
    var v434 = v611 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v434 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v906 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v903 = v906 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v899 = v903 + "div.title {display: none}\n";
    var v895 = v899 + "div.info {font-weight: bold}\n";
    var v891 = v895 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v884 = v891 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v875 = v884 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v866 = v875 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v853 = v866 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v835 = v853 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v816 = v835 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v776 = v816 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v714 = v776 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v612 = v714 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v435 = v612 + "img {display: none}\n";
    var v115 = v435 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v715 = "</head>\n" + '<body class="main">\n';
  var v613 = v715 + '<div class="title">';
  var v436 = v613 + title$$6;
  var v117 = v436 + " results</div>\n";
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
    var v924 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v924[2], v924[1], v924[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v716 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v614 = v716 + "<head>\n";
  var v437 = v614 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v437 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v904 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v900 = v904 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v896 = v900 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v892 = v896 + "div.info {font-weight: bold}\n";
    var v885 = v892 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v876 = v885 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v867 = v876 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v854 = v867 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v836 = v854 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v817 = v836 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v777 = v817 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v717 = v777 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v615 = v717 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v438 = v615 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v438 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v908 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v907 = v908 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v905 = v907 + "div.title {display: none}\n";
    var v901 = v905 + "div.info {font-weight: bold}\n";
    var v897 = v901 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v893 = v897 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v886 = v893 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v877 = v886 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v868 = v877 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v855 = v868 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v837 = v855 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v818 = v837 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v778 = v818 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v718 = v778 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v616 = v718 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v439 = v616 + "img {display: none}\n";
    var v123 = v439 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v719 = "</head>\n" + '<body class="main">\n';
  var v617 = v719 + '<div class="title">';
  var v440 = v617 + title$$8;
  var v125 = v440 + " results</div>\n";
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
  var v441 = dnaSequence$$1.search(/./);
  var v126 = v441 != -1;
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
  var v442 = testArray[0];
  var v130 = v442 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v443 = testString.search(re$$2);
  var v131 = v443 == -1;
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
  var v444 = testNum.toFixed(3);
  var v134 = v444 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v445 = testNum.toPrecision(5);
  var v135 = v445 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v446 = theNumber$$1.search(/\d/);
  var v136 = v446 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v618 = emblFile.search(/ID/);
  var v447 = v618 == -1;
  var v620 = !v447;
  if(v620) {
    var v720 = emblFile.search(/AC/);
    var v619 = v720 == -1;
    var v722 = !v619;
    if(v722) {
      var v779 = emblFile.search(/DE/);
      var v721 = v779 == -1;
      var v781 = !v721;
      if(v781) {
        var v780 = emblFile.search(/SQ/);
        v721 = v780 == -1
      }
      v619 = v721
    }
    v447 = v619
  }
  var v137 = v447;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v448 = theNumber$$2.search(/\d/);
  var v138 = v448 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v449 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v449 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v450 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v450 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v451 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v451 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v621 = genBankFile.search(/LOCUS/);
  var v452 = v621 == -1;
  var v623 = !v452;
  if(v623) {
    var v723 = genBankFile.search(/DEFINITION/);
    var v622 = v723 == -1;
    var v725 = !v622;
    if(v725) {
      var v782 = genBankFile.search(/ACCESSION/);
      var v724 = v782 == -1;
      var v784 = !v724;
      if(v784) {
        var v783 = genBankFile.search(/ORIGIN/);
        v724 = v783 == -1
      }
      v622 = v724
    }
    v452 = v622
  }
  var v143 = v452;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v624 = genBankFile$$1.search(/LOCUS/);
  var v453 = v624 == -1;
  var v626 = !v453;
  if(v626) {
    var v726 = genBankFile$$1.search(/DEFINITION/);
    var v625 = v726 == -1;
    var v728 = !v625;
    if(v728) {
      var v785 = genBankFile$$1.search(/ACCESSION/);
      var v727 = v785 == -1;
      var v787 = !v727;
      if(v787) {
        var v786 = genBankFile$$1.search(/ORIGIN/);
        v727 = v786 == -1
      }
      v625 = v727
    }
    v453 = v625
  }
  var v144 = v453;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v454 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v454 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v627 = emblFile$$1.search(/ID/);
  var v455 = v627 == -1;
  var v629 = !v455;
  if(v629) {
    var v729 = emblFile$$1.search(/AC/);
    var v628 = v729 == -1;
    var v731 = !v628;
    if(v731) {
      var v788 = emblFile$$1.search(/DE/);
      var v730 = v788 == -1;
      var v790 = !v730;
      if(v790) {
        var v789 = emblFile$$1.search(/SQ/);
        v730 = v789 == -1
      }
      v628 = v730
    }
    v455 = v628
  }
  var v146 = v455;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v456 = emblFile$$1.search(/^FT/m);
  var v147 = v456 == -1;
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
    var v457 = basePerLine / groupSize;
    var v151 = j$$6 <= v457;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v458 = k + i$$5;
        var v149 = text$$10.charAt(v458);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v459 = basePerLine / groupSize;
      v151 = j$$6 <= v459
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
    var v460 = adjustment < 0;
    if(v460) {
      v460 = adjusted >= 0
    }
    var v155 = v460;
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
    var v461 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v461;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v462 = i$$6 + k$$1;
        var v156 = v462 >= stopBase$$2;
        if(v156) {
          break
        }
        var v463 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v463);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v464 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v464, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v465 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v465
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v732 = adjustNumbering(lineNum, numberingAdjustment);
      var v630 = rightNum(v732, "", 8, tabIn$$3);
      var v466 = v630 + lineOfText$$1;
      var v164 = v466 + "\n";
      JAMScript.call(v163.write, v163, [v164]);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v733 = adjustNumbering(lineNum, numberingAdjustment);
        var v631 = rightNum(v733, "", 8, tabIn$$3);
        var v632 = complement(lineOfText$$1);
        var v467 = v631 + v632;
        var v166 = v467 + "\n";
        JAMScript.call(v165.write, v165, [v166]);
        var v167 = outputWindow.document;
        JAMScript.call(v167.write, v167, ["\n"])
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v633 = adjustNumbering(i$$6, numberingAdjustment);
        var v468 = lineOfText$$1 + v633;
        var v170 = v468 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v634 = complement(lineOfText$$1);
          var v635 = adjustNumbering(i$$6, numberingAdjustment);
          var v469 = v634 + v635;
          var v172 = v469 + "\n";
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
            var v470 = complement(lineOfText$$1);
            var v180 = v470 + "\n";
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
    var v471 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v471;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v472 = i$$7 + k$$2;
        var v187 = v472 >= stopBase$$3;
        if(v187) {
          break
        }
        var v473 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v473);
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
      var v474 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v474
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v636 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v475 = v636 + lineOfText$$2;
      var v195 = v475 + "\n";
      JAMScript.call(v194.write, v194, [v195])
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v476 = lineOfText$$2 + i$$7;
        var v197 = v476 + "\n";
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
  var v637 = sequence$$13.length;
  var v477 = v637 <= firstIndexToMutate;
  var v639 = !v477;
  if(v639) {
    var v638 = lastIndexToMutate < 0;
    var v734 = !v638;
    if(v734) {
      v638 = lastIndexToMutate <= firstIndexToMutate
    }
    v477 = v638
  }
  var v206 = v477;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v478 = Math.random();
    var v207 = v478 * maxNum;
    randNum = Math.floor(v207);
    var v479 = randNum < firstIndexToMutate;
    var v640 = !v479;
    if(v640) {
      v479 = randNum > lastIndexToMutate
    }
    var v208 = v479;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v480 = Math.random();
      var v481 = components$$1.length;
      var v209 = v480 * v481;
      componentsIndex = Math.round(v209);
      var v482 = components$$1.length;
      var v210 = componentsIndex == v482;
      if(v210) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v483 = components$$1[componentsIndex]
      }
      var v211 = v483 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v484 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v485 = components$$1[componentsIndex]
    }
    var v212 = v484 + v485;
    var v486 = randNum + 1;
    var v487 = sequence$$13.length;
    var v213 = sequence$$13.substring(v486, v487);
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
    var v488 = Math.random();
    var v489 = components$$2.length;
    var v217 = v488 * v489;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v490 = sequence$$14.length;
    var v220 = v490 == 60;
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
    var v735 = sequence$$15.length;
    var v641 = v735 - lookAhead;
    var v642 = sequence$$15.length;
    var v491 = sequence$$15.substring(v641, v642);
    var v225 = v491 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  JAMScript.call(v228.write, v228, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v229 = outputWindow.document;
  var v736 = '<tr><td class="title" width="200px">' + "Site:";
  var v643 = v736 + '</td><td class="title">';
  var v492 = v643 + "Positions:";
  var v230 = v492 + "</td></tr>\n";
  JAMScript.call(v229.write, v229, [v230]);
  var i$$9 = 0;
  var v493 = arrayOfItems.length;
  var v246 = i$$9 < v493;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v494 = arrayOfItems[i$$9]
    }
    var v231 = v494.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v737 = arrayOfItems[i$$9]
    }
    var v644 = v737.match(/\)\D*\d+/);
    var v495 = v644.toString();
    var v232 = v495.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v496 = matchPosition >= lowerLimit;
      if(v496) {
        v496 = matchPosition < upperLimit
      }
      var v236 = v496;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v497 = matchPosition - shiftValue;
        var v235 = v497 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v645 = matchExp.lastIndex;
      var v738 = RegExp.lastMatch;
      var v646 = v738.length;
      var v498 = v645 - v646;
      v237.lastIndex = v498 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v499 = tempString$$1.search(/\d/);
    var v239 = v499 != -1;
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
    var v856 = '<tr><td class="' + backGroundClass;
    var v838 = v856 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v878 = arrayOfItems[i$$9]
    }
    var v869 = v878.match(/\([^\(]+\)/);
    var v857 = v869.toString();
    var v839 = v857.replace(/\(|\)/g, "");
    var v819 = v838 + v839;
    var v791 = v819 + '</td><td class="';
    var v739 = v791 + backGroundClass;
    var v647 = v739 + '">';
    var v500 = v647 + tempString$$1;
    var v245 = v500 + "</td></tr>\n";
    JAMScript.call(v244.write, v244, [v245]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v501 = arrayOfItems.length;
    v246 = i$$9 < v501
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
  var v820 = '<tr><td class="title">' + "Pattern:";
  var v792 = v820 + '</td><td class="title">';
  var v740 = v792 + "Times found:";
  var v648 = v740 + '</td><td class="title">';
  var v502 = v648 + "Percentage:";
  var v250 = v502 + "</td></tr>\n";
  JAMScript.call(v249.write, v249, [v250]);
  var i$$10 = 0;
  var v503 = arrayOfItems$$1.length;
  var v259 = i$$10 < v503;
  for(;v259;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v504 = arrayOfItems$$1[i$$10]
    }
    var v251 = v504.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v505 = sequence$$16.search(matchExp$$1);
    var v253 = v505 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v649 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v793 = arrayOfItems$$1[i$$10]
    }
    var v741 = v793.match(/\d+/);
    var v650 = parseFloat(v741);
    var v506 = v649 - v650;
    var v256 = v506 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v507 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v742 = arrayOfItems$$1[i$$10]
      }
      var v651 = v742.match(/\d+/);
      var v508 = parseFloat(v651);
      var v255 = v507 - v508;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v879 = arrayOfItems$$1[i$$10]
    }
    var v870 = v879.match(/\([^\(]+\)\b/);
    var v858 = v870.toString();
    var v840 = v858.replace(/\(|\)/g, "");
    var v821 = "<tr><td>" + v840;
    var v794 = v821 + "</td><td>";
    var v743 = v794 + tempNumber;
    var v652 = v743 + "</td><td>";
    var v653 = percentage.toFixed(2);
    var v509 = v652 + v653;
    var v258 = v509 + "</td></tr>\n";
    JAMScript.call(v257.write, v257, [v258]);
    i$$10 = i$$10 + 1;
    var v510 = arrayOfItems$$1.length;
    v259 = i$$10 < v510
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
  var v511 = sequence$$17.length;
  var v267 = v511 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v512 = Math.random();
    var v261 = v512 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v513 = tempSeq.length;
    var v266 = v513 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      JAMScript.call(v264.write, v264, [v265]);
      tempSeq = ""
    }
    var v514 = sequence$$17.length;
    v267 = v514 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  JAMScript.call(v268.write, v268, [v269]);
  return true
}
function colorAlignCons(theDocument) {
  var maxInput$$3 = 2E4;
  var v515 = testScript();
  var v270 = v515 == false;
  if(v270) {
    return false
  }
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  var v841 = theDocument.forms;
  var v822 = v841[0];
  var v795 = v822.elements;
  var v744 = v795[0];
  var v654 = checkFormElement(v744);
  var v516 = v654 == false;
  var v656 = !v516;
  if(v656) {
    var v859 = theDocument.forms;
    var v842 = v859[0];
    var v823 = v842.elements;
    var v796 = v823[0];
    var v745 = v796.value;
    var v655 = checkTextLength(v745, maxInput$$3);
    v516 = v655 == false
  }
  var v271 = v516;
  if(v271) {
    return false
  }
  var v797 = theDocument.forms;
  var v746 = v797[0];
  var v657 = v746.elements;
  var v517 = v657[0];
  var v272 = v517.value;
  theAlignment = "X" + v272;
  alignArray$$1 = theAlignment.split(/[>%#]/);
  var v518 = earlyCheckAlign(alignArray$$1);
  var v273 = v518 == false;
  if(v273) {
    return false
  }
  var i$$11 = 1;
  var v519 = alignArray$$1.length;
  var v288 = i$$11 < v519;
  for(;v288;) {
    var v274 = titleArray;
    var v275 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v520 = alignArray$$1[i$$11]
    }
    var v915 = v520.match(/[^\f\n\r]+[\f\n\r]/);
    v274[v275] = v915;
    var v276 = titleArray;
    var v277 = i$$11 - 1;
    var v798 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v747 = titleArray[v798]
    }
    var v658 = v747.toString();
    var v521 = filterFastaTitle(v658);
    var v916 = v521.replace(/[\f\n\r]/g, "");
    v276[v277] = v916;
    var v278 = titleArray;
    var v279 = i$$11 - 1;
    var v659 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v522 = titleArray[v659]
    }
    var v917 = v522.substring(0, 20);
    v278[v279] = v917;
    var v283 = i$$11 == 1;
    if(v283) {
      var v523 = i$$11 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v280 = titleArray[v523]
      }
      longestTitle = v280.length
    }else {
      var v748 = i$$11 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v660 = titleArray[v748]
      }
      var v524 = v660.length;
      var v282 = v524 > longestTitle;
      if(v282) {
        var v525 = i$$11 - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v281 = titleArray[v525]
        }
        longestTitle = v281.length
      }
    }
    var v284 = sequenceArray$$1;
    var v285 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v526 = alignArray$$1[i$$11]
    }
    var v918 = v526.replace(/[^\f\n\r]+[\f\n\r]/, "");
    v284[v285] = v918;
    var v286 = sequenceArray$$1;
    var v287 = i$$11 - 1;
    var v661 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v527 = sequenceArray$$1[v661]
    }
    var v919 = filterAlignSeq(v527);
    v286[v287] = v919;
    i$$11 = i$$11 + 1;
    var v528 = alignArray$$1.length;
    v288 = i$$11 < v528
  }
  var spaceString = "                    ";
  i$$11 = 0;
  var v529 = titleArray.length;
  var v292 = i$$11 < v529;
  for(;v292;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v662 = titleArray[i$$11]
    }
    var v530 = v662.length;
    var v291 = v530 < longestTitle;
    if(v291) {
      var v289 = titleArray;
      var v290 = i$$11;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v531 = titleArray[i$$11]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v799 = titleArray[i$$11]
      }
      var v749 = v799.length;
      var v663 = longestTitle - v749;
      var v532 = spaceString.substring(0, v663);
      v289[v290] = v531 + v532
    }
    i$$11 = i$$11 + 1;
    var v533 = titleArray.length;
    v292 = i$$11 < v533
  }
  var v534 = checkAlign(titleArray, sequenceArray$$1);
  var v293 = v534 == false;
  if(v293) {
    return false
  }
  var v824 = theDocument.forms;
  var v800 = v824[0];
  var v750 = v800.elements;
  var v664 = v750[7];
  var v535 = v664.value;
  var v294 = v535.replace(/\s/g, "");
  groupString = v294.toUpperCase();
  arrayOfGroups = groupString.split(/,/);
  var v536 = checkGroupInput(arrayOfGroups);
  var v295 = v536 == false;
  if(v295) {
    return false
  }
  var isBackground$$1;
  var v860 = theDocument.forms;
  var v843 = v860[0];
  var v825 = v843.elements;
  var v801 = v825[6];
  var v751 = v801.options;
  var v861 = theDocument.forms;
  var v844 = v861[0];
  var v826 = v844.elements;
  var v802 = v826[6];
  var v752 = v802.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v665 = v751[v752]
  }
  var v537 = v665.value;
  var v296 = v537 == "background";
  if(v296) {
    isBackground$$1 = true
  }else {
    isBackground$$1 = false
  }
  _openWindowAlign("Color Align Conservation", isBackground$$1);
  openPre();
  var v845 = theDocument.forms;
  var v827 = v845[0];
  var v803 = v827.elements;
  var v753 = v803[4];
  var v666 = v753.options;
  var v846 = theDocument.forms;
  var v828 = v846[0];
  var v804 = v828.elements;
  var v754 = v804[4];
  var v667 = v754.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v538 = v666[v667]
  }
  var v297 = v538.value;
  var v847 = theDocument.forms;
  var v829 = v847[0];
  var v805 = v829.elements;
  var v755 = v805[5];
  var v668 = v755.options;
  var v848 = theDocument.forms;
  var v830 = v848[0];
  var v806 = v830.elements;
  var v756 = v806[5];
  var v669 = v756.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v539 = v668[v669]
  }
  var v298 = v539.value;
  var v807 = theDocument.forms;
  var v757 = v807[0];
  var v670 = v757.elements;
  var v540 = v670[8];
  var v299 = v540.value;
  colorAlign(titleArray, sequenceArray$$1, v297, v298, arrayOfGroups, v299, longestTitle);
  closePre();
  closeWindow();
  return true
}
function colorAlign(arrayOfTitles$$1, arrayOfSequences$$1, basePerLine$$4, consensus, arrayOfGroups$$1, definedStarts, longestTitle$$1) {
  var v300 = arrayOfSequences$$1.length;
  var positions = new Array(v300);
  var v541 = definedStarts.search(/\S/);
  var v301 = v541 == -1;
  if(v301) {
    definedStarts = "0,0"
  }
  var definedStartsArray = definedStarts.split(/,/);
  var i$$12 = 0;
  var v542 = positions.length;
  var v306 = i$$12 < v542;
  for(;v306;) {
    var v543 = definedStartsArray.length;
    var v305 = i$$12 >= v543;
    if(v305) {
      positions[i$$12] = 0
    }else {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v671 = definedStartsArray[i$$12]
      }
      var v544 = v671.search(/\d/);
      var v304 = v544 != -1;
      if(v304) {
        var v302 = positions;
        var v303 = i$$12;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v672 = definedStartsArray[i$$12]
        }
        var v545 = v672.replace(/[^\d\-]/g, "");
        var v920 = parseInt(v545);
        v302[v303] = v920
      }else {
        alert("An incorrect starting position was encountered. It was set to 0.");
        outputWindow.focus();
        positions[i$$12] = 0
      }
    }
    i$$12 = i$$12 + 1;
    var v546 = positions.length;
    v306 = i$$12 < v546
  }
  var totalBasesShown = 0;
  var v307 = parseInt(consensus);
  consensus = v307 / 100;
  basePerLine$$4 = parseInt(basePerLine$$4);
  var columnCount = 0;
  var arrayOfColumns = new Array(basePerLine$$4);
  i$$12 = 0;
  var v547 = arrayOfColumns.length;
  var v309 = i$$12 < v547;
  for(;v309;) {
    var v308 = arrayOfSequences$$1.length;
    var v921 = new Array(v308);
    arrayOfColumns[i$$12] = v921;
    i$$12 = i$$12 + 1;
    var v548 = arrayOfColumns.length;
    v309 = i$$12 < v548
  }
  i$$12 = 0;
  var columnSeq;
  var re$$3;
  var result;
  var output = "";
  var v673 = arrayOfSequences$$1[0];
  var v549 = v673.length;
  var v335 = totalBasesShown < v549;
  for(;v335;) {
    var jj = 0;
    var v550 = arrayOfSequences$$1.length;
    var v333 = jj < v550;
    for(;v333;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v551 = arrayOfTitles$$1[jj]
      }
      var v310 = output + v551;
      output = v310 + " ";
      var v674 = totalBasesShown + basePerLine$$4;
      var v552 = i$$12 < v674;
      if(v552) {
        var v758 = arrayOfSequences$$1[0];
        var v675 = v758.length;
        v552 = i$$12 < v675
      }
      var v328 = v552;
      for(;v328;) {
        var v314 = jj == 0;
        if(v314) {
          var k$$3 = 0;
          var v553 = arrayOfSequences$$1.length;
          var v313 = k$$3 < v553;
          for(;v313;) {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v311 = arrayOfColumns[columnCount]
            }
            var v312 = k$$3;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v554 = arrayOfSequences$$1[k$$3]
            }
            var v922 = v554.charAt(i$$12);
            v311[v312] = v922;
            k$$3 = k$$3 + 1;
            var v555 = arrayOfSequences$$1.length;
            v313 = k$$3 < v555
          }
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v759 = arrayOfSequences$$1[jj]
        }
        var v676 = v759.charAt(i$$12);
        var v556 = v676 == ".";
        var v678 = !v556;
        if(v678) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v760 = arrayOfSequences$$1[jj]
          }
          var v677 = v760.charAt(i$$12);
          v556 = v677 == "-"
        }
        var v316 = v556;
        if(v316) {
          var v557 = output + '<span class="diff">';
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v679 = arrayOfSequences$$1[jj]
          }
          var v558 = v679.charAt(i$$12);
          var v315 = v557 + v558;
          output = v315 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount = columnCount + 1;
          var v680 = totalBasesShown + basePerLine$$4;
          var v559 = i$$12 < v680;
          if(v559) {
            var v761 = arrayOfSequences$$1[0];
            var v681 = v761.length;
            v559 = i$$12 < v681
          }
          v328 = v559;
          continue
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v317 = arrayOfColumns[columnCount]
        }
        columnSeq = v317.join(",");
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v560 = arrayOfSequences$$1[jj]
        }
        var v318 = v560.charAt(i$$12);
        re$$3 = new RegExp(v318, "gi");
        var v762 = columnSeq.match(re$$3);
        var v682 = v762.length;
        var v683 = arrayOfSequences$$1.length;
        var v561 = v682 / v683;
        var v320 = v561 >= consensus;
        if(v320) {
          var v562 = output + '<span class="ident">';
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v684 = arrayOfSequences$$1[jj]
          }
          var v563 = v684.charAt(i$$12);
          var v319 = v562 + v563;
          output = v319 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount = columnCount + 1;
          var v685 = totalBasesShown + basePerLine$$4;
          var v564 = i$$12 < v685;
          if(v564) {
            var v763 = arrayOfSequences$$1[0];
            var v686 = v763.length;
            v564 = i$$12 < v686
          }
          v328 = v564;
          continue
        }
        result = 1;
        var m = 0;
        var v565 = arrayOfGroups$$1.length;
        var v324 = m < v565;
        for(;v324;) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v687 = arrayOfGroups$$1[m]
          }
          var v566 = v687.search(re$$3);
          var v323 = v566 != -1;
          if(v323) {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v688 = arrayOfGroups$$1[m]
            }
            var v567 = "[" + v688;
            var v321 = v567 + "]";
            re$$3 = new RegExp(v321, "gi");
            var v322 = columnSeq.match(re$$3);
            result = v322.length;
            break
          }
          m = m + 1;
          var v568 = arrayOfGroups$$1.length;
          v324 = m < v568
        }
        var v689 = arrayOfSequences$$1.length;
        var v569 = result / v689;
        var v326 = v569 >= consensus;
        if(v326) {
          var v570 = output + '<span class="sim">';
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v690 = arrayOfSequences$$1[jj]
          }
          var v571 = v690.charAt(i$$12);
          var v325 = v570 + v571;
          output = v325 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount = columnCount + 1;
          var v691 = totalBasesShown + basePerLine$$4;
          var v572 = i$$12 < v691;
          if(v572) {
            var v764 = arrayOfSequences$$1[0];
            var v692 = v764.length;
            v572 = i$$12 < v692
          }
          v328 = v572;
          continue
        }
        var v573 = output + '<span class="diff">';
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v693 = arrayOfSequences$$1[jj]
        }
        var v574 = v693.charAt(i$$12);
        var v327 = v573 + v574;
        output = v327 + "</span>";
        i$$12 = i$$12 + 1;
        columnCount = columnCount + 1;
        var v694 = totalBasesShown + basePerLine$$4;
        var v575 = i$$12 < v694;
        if(v575) {
          var v765 = arrayOfSequences$$1[0];
          var v695 = v765.length;
          v575 = i$$12 < v695
        }
        v328 = v575
      }
      var v329 = positions;
      var v330 = jj;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v576 = positions[jj]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v808 = arrayOfSequences$$1[jj]
      }
      var v766 = v808.substring(totalBasesShown, i$$12);
      var v696 = v766.replace(/\.|\-/g, "");
      var v577 = v696.length;
      v329[v330] = v576 + v577;
      var v578 = output + " ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v579 = positions[jj]
      }
      var v331 = v578 + v579;
      output = v331 + "\n";
      var v332 = outputWindow.document;
      JAMScript.call(v332.write, v332, [output]);
      output = "";
      i$$12 = totalBasesShown;
      columnCount = 0;
      jj = jj + 1;
      var v580 = arrayOfSequences$$1.length;
      v333 = jj < v580
    }
    totalBasesShown = totalBasesShown + basePerLine$$4;
    i$$12 = totalBasesShown;
    var v334 = outputWindow.document;
    JAMScript.call(v334.write, v334, ["\n"]);
    var v697 = arrayOfSequences$$1[0];
    var v581 = v697.length;
    v335 = totalBasesShown < v581
  }
  return true
}
JAMScript.set(document, "onload", v2);
var v336 = document.getElementById("submitbtn");
JAMScript.set(v336, "onclick", v3);
var v337 = document.getElementById("clearbtn");
JAMScript.set(v337, "onclick", v4);

