function v5() {
  var v564 = document.forms;
  var v488 = v564[0];
  var v297 = v488.elements;
  var v6 = v297[0];
  v6.value = " ";
  return
}
function v4() {
  try {
    threeToOne(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v3() {
  var v298 = document.main_form;
  var v8 = v298.main_submit;
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
  var v299 = arrayOfSequences.length;
  var v10 = v299 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v300 = arrayOfTitles.length;
  var v12 = i$$1 < v300;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v565 = arrayOfTitles[i$$1]
    }
    var v489 = v565.search(/\S/);
    var v301 = v489 == -1;
    var v491 = !v301;
    if(v491) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v612 = arrayOfSequences[i$$1]
      }
      var v566 = v612.search(/\S/);
      var v490 = v566 == -1;
      var v568 = !v490;
      if(v568) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v613 = arrayOfSequences[i$$1]
        }
        var v567 = v613.length;
        v490 = v567 != lengthOfAlign
      }
      v301 = v490
    }
    var v11 = v301;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v302 = arrayOfTitles.length;
    v12 = i$$1 < v302
  }
  return true
}
function checkCodonTable(codonTable) {
  var v492 = codonTable.search(/AmAcid/);
  var v303 = v492 == -1;
  var v494 = !v303;
  if(v494) {
    var v569 = codonTable.search(/Codon/);
    var v493 = v569 == -1;
    var v571 = !v493;
    if(v571) {
      var v614 = codonTable.search(/Number/);
      var v570 = v614 == -1;
      var v616 = !v570;
      if(v616) {
        var v643 = codonTable.search(/\/1000/);
        var v615 = v643 == -1;
        var v645 = !v615;
        if(v645) {
          var v644 = codonTable.search(/Fraction\s*\.\./);
          v615 = v644 == -1
        }
        v570 = v615
      }
      v493 = v570
    }
    v303 = v493
  }
  var v13 = v303;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v495 = formElement.value;
  var v304 = v495.search(/\S/);
  var v14 = v304 == -1;
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
  var v305 = arrayOfPatterns.length;
  var v17 = z$$2 < v305;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v496 = arrayOfPatterns[z$$2]
    }
    var v306 = v496.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v306 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v497 = arrayOfPatterns[z$$2]
    }
    var v307 = moreExpressionCheck(v497);
    var v16 = v307 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v308 = arrayOfPatterns.length;
    v17 = z$$2 < v308
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v309 = arrayOfPatterns.length;
  var v26 = j < v309;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v572 = arrayOfPatterns[j]
    }
    var v498 = v572.match(/\/.+\//);
    var v310 = v498 + "gi";
    if(JAMScript.isEval(eval)) {
      var v728 = eval("introspect(JAMScript.introspectors.processAll) { " + v310 + " }")
    }else {
      var v728 = JAMScript.call(eval, null, [v310])
    }
    v20[v21] = v728;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v499 = arrayOfPatterns[j]
    }
    var v311 = v499.match(/=[a-zA-Z\*]/);
    var v729 = v311.toString();
    v22[v23] = v729;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v312 = geneticCodeMatchResult[j]
    }
    var v730 = v312.replace(/=/g, "");
    v24[v25] = v730;
    j = j + 1;
    var v313 = arrayOfPatterns.length;
    v26 = j < v313
  }
  var i$$2 = 0;
  var v500 = testSequence.length;
  var v314 = v500 - 3;
  var v33 = i$$2 <= v314;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v315 = geneticCodeMatchExp.length;
    var v31 = j < v315;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v501 = geneticCodeMatchExp[j]
      }
      var v316 = codon.search(v501);
      var v30 = v316 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v317 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v317 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v318 = geneticCodeMatchExp.length;
      v31 = j < v318
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v502 = testSequence.length;
    var v319 = v502 - 3;
    v33 = i$$2 <= v319
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v320 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v320;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v503 = arrayOfPatterns$$1[z$$3]
    }
    var v321 = v503.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v321 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v322 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v322
  }
  var i$$3 = 0;
  var v323 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v323;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v504 = arrayOfPatterns$$1[i$$3]
    }
    var v324 = "[" + v504;
    var v36 = v324 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v325 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v325;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v505 = arrayOfPatterns$$1[j$$1]
      }
      var v326 = v505.search(re);
      var v37 = v326 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v327 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v327
    }
    i$$3 = i$$3 + 1;
    var v328 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v328
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v329 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v329;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v506 = arrayOfPatterns$$2[z$$4]
    }
    var v330 = v506.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v330 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v507 = arrayOfPatterns$$2[z$$4]
    }
    var v331 = moreExpressionCheck(v507);
    var v41 = v331 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v332 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v332
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v573 = getSequenceFromFasta(text$$7);
  var v508 = v573.replace(/[^A-Za-z]/g, "");
  var v333 = v508.length;
  var v44 = v333 > maxInput;
  if(v44) {
    var v334 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v334 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v335 = text$$8.length;
  var v46 = v335 > maxInput$$1;
  if(v46) {
    var v336 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v336 + " characters.";
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
  var v337 = alignArray.length;
  var v53 = v337 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v338 = alignArray.length;
  var v55 = i$$4 < v338;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v509 = alignArray[i$$4]
    }
    var v339 = v509.search(/[^\s]+\s/);
    var v54 = v339 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v340 = alignArray.length;
    v55 = i$$4 < v340
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
  var v341 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v341 != -1;
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
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$2) {
  var v342 = sequence$$2.length;
  var v59 = "&gt;results for " + v342;
  var stringToReturn = v59 + " residue sequence ";
  var v343 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v61 = v343 != -1;
  if(v61) {
    var v344 = stringToReturn + '"';
    var v60 = v344 + fastaSequenceTitle$$1;
    stringToReturn = v60 + '"'
  }
  var v345 = stringToReturn + ' starting "';
  var v346 = sequence$$2.substring(0, 10);
  var v62 = v345 + v346;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v347 = sequenceOne.length;
  var v63 = "Search results for " + v347;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v348 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v348 != -1;
  if(v65) {
    var v349 = stringToReturn$$1 + '"';
    var v64 = v349 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v350 = stringToReturn$$1 + ' starting "';
  var v351 = sequenceOne.substring(0, 10);
  var v66 = v350 + v351;
  stringToReturn$$1 = v66 + '"\n';
  var v352 = stringToReturn$$1 + "and ";
  var v353 = sequenceTwo.length;
  var v67 = v352 + v353;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v354 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v354 != -1;
  if(v69) {
    var v355 = stringToReturn$$1 + '"';
    var v68 = v355 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v356 = stringToReturn$$1 + ' starting "';
  var v357 = sequenceTwo.substring(0, 10);
  var v70 = v356 + v357;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v358 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v358;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v574 = arrayOfPatterns$$3[j$$2]
    }
    var v510 = v574.match(/\/.+\//);
    var v359 = v510 + "gi";
    if(JAMScript.isEval(eval)) {
      var v731 = eval("introspect(JAMScript.introspectors.processAll) { " + v359 + " }")
    }else {
      var v731 = JAMScript.call(eval, null, [v359])
    }
    v73[v74] = v731;
    j$$2 = j$$2 + 1;
    var v360 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v360
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v361 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v361;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v511 = arrayOfPatterns$$4[j$$3]
    }
    var v362 = v511.match(/=[a-zA-Z\*]/);
    var v732 = v362.toString();
    v77[v78] = v732;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v363 = geneticCodeMatchResult$$1[j$$3]
    }
    var v733 = v363.replace(/=/g, "");
    v79[v80] = v733;
    j$$3 = j$$3 + 1;
    var v364 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v364
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$2, sequence$$3) {
  var v365 = sequence$$3.length;
  var v82 = "Results for " + v365;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v366 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v84 = v366 != -1;
  if(v84) {
    var v367 = stringToReturn$$2 + '"';
    var v83 = v367 + fastaSequenceTitle$$2;
    stringToReturn$$2 = v83 + '"'
  }
  var v368 = stringToReturn$$2 + ' starting "';
  var v369 = sequence$$3.substring(0, 10);
  var v85 = v368 + v369;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$3, sequence$$4, topology) {
  var v512 = "Results for " + topology;
  var v370 = v512 + " ";
  var v371 = sequence$$4.length;
  var v87 = v370 + v371;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v372 = fastaSequenceTitle$$3.search(/[^\s]/);
  var v89 = v372 != -1;
  if(v89) {
    var v373 = stringToReturn$$3 + '"';
    var v88 = v373 + fastaSequenceTitle$$3;
    stringToReturn$$3 = v88 + '"'
  }
  var v374 = stringToReturn$$3 + ' starting "';
  var v375 = sequence$$4.substring(0, 10);
  var v90 = v374 + v375;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v376 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v376;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v377 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v377 != -1;
  if(v94) {
    var v378 = stringToReturn$$4 + '"';
    var v93 = v378 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v379 = stringToReturn$$4 + ' starting "';
  var v380 = sequenceOne$$1.substring(0, 10);
  var v95 = v379 + v380;
  stringToReturn$$4 = v95 + '"\n';
  var v381 = stringToReturn$$4 + "and ";
  var v382 = sequenceTwo$$1.length;
  var v96 = v381 + v382;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v383 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v383 != -1;
  if(v98) {
    var v384 = stringToReturn$$4 + '"';
    var v97 = v384 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v385 = stringToReturn$$4 + ' starting "';
  var v386 = sequenceTwo$$1.substring(0, 10);
  var v99 = v385 + v386;
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
    var v387 = Math.random();
    var v388 = components.length;
    var v101 = v387 * v388;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v389 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v389 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v390 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v390 != -1;
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
  var v513 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v391 = v513 != -1;
  var v515 = !v391;
  if(v515) {
    var v575 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v514 = v575 != -1;
    var v577 = !v514;
    if(v577) {
      var v617 = expressionToCheck.search(/\[\]/);
      var v576 = v617 != -1;
      var v619 = !v576;
      if(v619) {
        var v646 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v618 = v646 != -1;
        var v648 = !v618;
        if(v648) {
          var v658 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v647 = v658 != -1;
          var v660 = !v647;
          if(v660) {
            var v670 = expressionToCheck.search(/\|\|/);
            var v659 = v670 != -1;
            var v672 = !v659;
            if(v672) {
              var v681 = expressionToCheck.search(/\/\|/);
              var v671 = v681 != -1;
              var v683 = !v671;
              if(v683) {
                var v690 = expressionToCheck.search(/\|\//);
                var v682 = v690 != -1;
                var v692 = !v682;
                if(v692) {
                  var v699 = expressionToCheck.search(/\[.\]/);
                  var v691 = v699 != -1;
                  var v701 = !v691;
                  if(v701) {
                    var v706 = expressionToCheck.search(/\</);
                    var v700 = v706 != -1;
                    var v708 = !v700;
                    if(v708) {
                      var v707 = expressionToCheck.search(/\>/);
                      v700 = v707 != -1
                    }
                    v691 = v700
                  }
                  v682 = v691
                }
                v671 = v682
              }
              v659 = v671
            }
            v647 = v659
          }
          v618 = v647
        }
        v576 = v618
      }
      v514 = v576
    }
    v391 = v514
  }
  var v106 = v391;
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
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v734 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v734[2], v734[1], v734[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v578 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v516 = v578 + "<head>\n";
  var v392 = v516 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v392 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v721 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v717 = v721 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v713 = v717 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v709 = v713 + "div.info {font-weight: bold}\n";
    var v702 = v709 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v693 = v702 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v684 = v693 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v673 = v684 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v661 = v673 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v649 = v661 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v620 = v649 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v579 = v620 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v517 = v579 + "td.many {color: #000000}\n";
    var v393 = v517 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v393 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v725 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v722 = v725 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v718 = v722 + "div.title {display: none}\n";
    var v714 = v718 + "div.info {font-weight: bold}\n";
    var v710 = v714 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v703 = v710 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v694 = v703 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v685 = v694 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v674 = v685 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v662 = v674 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v650 = v662 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v621 = v650 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v580 = v621 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v518 = v580 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v394 = v518 + "img {display: none}\n";
    var v116 = v394 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v581 = "</head>\n" + '<body class="main">\n';
  var v519 = v581 + '<div class="title">';
  var v395 = v519 + title$$7;
  var v118 = v395 + " results</div>\n";
  JAMScript.call(v117.write, v117, [v118]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v735 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v735[2], v735[1], v735[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v582 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v520 = v582 + "<head>\n";
  var v396 = v520 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v396 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v723 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v719 = v723 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v715 = v719 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v711 = v715 + "div.info {font-weight: bold}\n";
    var v704 = v711 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v695 = v704 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v686 = v695 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v675 = v686 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v663 = v675 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v651 = v663 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v622 = v651 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v583 = v622 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v521 = v583 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v397 = v521 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v397 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v727 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v726 = v727 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v724 = v726 + "div.title {display: none}\n";
    var v720 = v724 + "div.info {font-weight: bold}\n";
    var v716 = v720 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v712 = v716 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v705 = v712 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v696 = v705 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v687 = v696 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v676 = v687 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v664 = v676 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v652 = v664 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v623 = v652 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v584 = v623 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v522 = v584 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v398 = v522 + "img {display: none}\n";
    var v124 = v398 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v585 = "</head>\n" + '<body class="main">\n';
  var v523 = v585 + '<div class="title">';
  var v399 = v523 + title$$9;
  var v126 = v399 + " results</div>\n";
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
  var v400 = dnaSequence$$1.search(/./);
  var v127 = v400 != -1;
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
  var v401 = testArray[0];
  var v131 = v401 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v402 = testString.search(re$$2);
  var v132 = v402 == -1;
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
  var v403 = testNum.toFixed(3);
  var v135 = v403 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v404 = testNum.toPrecision(5);
  var v136 = v404 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v405 = theNumber$$1.search(/\d/);
  var v137 = v405 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v524 = emblFile.search(/ID/);
  var v406 = v524 == -1;
  var v526 = !v406;
  if(v526) {
    var v586 = emblFile.search(/AC/);
    var v525 = v586 == -1;
    var v588 = !v525;
    if(v588) {
      var v624 = emblFile.search(/DE/);
      var v587 = v624 == -1;
      var v626 = !v587;
      if(v626) {
        var v625 = emblFile.search(/SQ/);
        v587 = v625 == -1
      }
      v525 = v587
    }
    v406 = v525
  }
  var v138 = v406;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v407 = theNumber$$2.search(/\d/);
  var v139 = v407 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v408 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v408 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v409 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v409 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v410 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v410 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v527 = genBankFile.search(/LOCUS/);
  var v411 = v527 == -1;
  var v529 = !v411;
  if(v529) {
    var v589 = genBankFile.search(/DEFINITION/);
    var v528 = v589 == -1;
    var v591 = !v528;
    if(v591) {
      var v627 = genBankFile.search(/ACCESSION/);
      var v590 = v627 == -1;
      var v629 = !v590;
      if(v629) {
        var v628 = genBankFile.search(/ORIGIN/);
        v590 = v628 == -1
      }
      v528 = v590
    }
    v411 = v528
  }
  var v144 = v411;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v530 = genBankFile$$1.search(/LOCUS/);
  var v412 = v530 == -1;
  var v532 = !v412;
  if(v532) {
    var v592 = genBankFile$$1.search(/DEFINITION/);
    var v531 = v592 == -1;
    var v594 = !v531;
    if(v594) {
      var v630 = genBankFile$$1.search(/ACCESSION/);
      var v593 = v630 == -1;
      var v632 = !v593;
      if(v632) {
        var v631 = genBankFile$$1.search(/ORIGIN/);
        v593 = v631 == -1
      }
      v531 = v593
    }
    v412 = v531
  }
  var v145 = v412;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v413 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v413 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v533 = emblFile$$1.search(/ID/);
  var v414 = v533 == -1;
  var v535 = !v414;
  if(v535) {
    var v595 = emblFile$$1.search(/AC/);
    var v534 = v595 == -1;
    var v597 = !v534;
    if(v597) {
      var v633 = emblFile$$1.search(/DE/);
      var v596 = v633 == -1;
      var v635 = !v596;
      if(v635) {
        var v634 = emblFile$$1.search(/SQ/);
        v596 = v634 == -1
      }
      v534 = v596
    }
    v414 = v534
  }
  var v147 = v414;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v415 = emblFile$$1.search(/^FT/m);
  var v148 = v415 == -1;
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
    var v416 = basePerLine / groupSize;
    var v153 = j$$6 <= v416;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v417 = k + i$$5;
        var v151 = text$$10.charAt(v417);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v418 = basePerLine / groupSize;
      v153 = j$$6 <= v418
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
    var v419 = adjustment < 0;
    if(v419) {
      v419 = adjusted >= 0
    }
    var v157 = v419;
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
    var v420 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v420;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v421 = i$$6 + k$$1;
        var v158 = v421 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v422 = k$$1 + i$$6;
        var v160 = text$$12.charAt(v422);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v423 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v423, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v424 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v424
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v598 = adjustNumbering(lineNum, numberingAdjustment);
      var v536 = rightNum(v598, "", 8, tabIn$$3);
      var v425 = v536 + lineOfText$$1;
      var v168 = v425 + "\n";
      JAMScript.call(v167.write, v167, [v168]);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v599 = adjustNumbering(lineNum, numberingAdjustment);
        var v537 = rightNum(v599, "", 8, tabIn$$3);
        var v538 = complement(lineOfText$$1);
        var v426 = v537 + v538;
        var v170 = v426 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v171 = outputWindow.document;
        JAMScript.call(v171.write, v171, ["\n"])
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v539 = lineOfText$$1;
        var v540 = adjustNumbering(i$$6, numberingAdjustment);
        var v427 = v539 + v540;
        var v174 = v427 + "\n";
        JAMScript.call(v173.write, v173, [v174]);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v541 = complement(lineOfText$$1);
          var v542 = adjustNumbering(i$$6, numberingAdjustment);
          var v428 = v541 + v542;
          var v176 = v428 + "\n";
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
            var v429 = complement(lineOfText$$1);
            var v184 = v429 + "\n";
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
    var v430 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v430;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v431 = i$$7 + k$$2;
        var v191 = v431 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v432 = k$$2 + i$$7;
        var v193 = text$$13.charAt(v432);
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
      var v433 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v433
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v543 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v434 = v543 + lineOfText$$2;
      var v201 = v434 + "\n";
      JAMScript.call(v200.write, v200, [v201])
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v435 = lineOfText$$2 + i$$7;
        var v203 = v435 + "\n";
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
  var v544 = sequence$$13.length;
  var v436 = v544 <= firstIndexToMutate;
  var v546 = !v436;
  if(v546) {
    var v545 = lastIndexToMutate < 0;
    var v600 = !v545;
    if(v600) {
      v545 = lastIndexToMutate <= firstIndexToMutate
    }
    v436 = v545
  }
  var v212 = v436;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v437 = Math.random();
    var v213 = v437 * maxNum;
    randNum = Math.floor(v213);
    var v438 = randNum < firstIndexToMutate;
    var v547 = !v438;
    if(v547) {
      v438 = randNum > lastIndexToMutate
    }
    var v214 = v438;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v439 = Math.random();
      var v440 = components$$1.length;
      var v215 = v439 * v440;
      componentsIndex = Math.round(v215);
      var v441 = components$$1.length;
      var v216 = componentsIndex == v441;
      if(v216) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v442 = components$$1[componentsIndex]
      }
      var v217 = v442 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v443 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v444 = components$$1[componentsIndex]
    }
    var v218 = v443 + v444;
    var v445 = randNum + 1;
    var v446 = sequence$$13.length;
    var v219 = sequence$$13.substring(v445, v446);
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
    var v447 = Math.random();
    var v448 = components$$2.length;
    var v223 = v447 * v448;
    tempNum$$1 = Math.floor(v223);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v449 = sequence$$14.length;
    var v226 = v449 == 60;
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
    var v601 = sequence$$15.length;
    var v548 = v601 - lookAhead;
    var v549 = sequence$$15.length;
    var v450 = sequence$$15.substring(v548, v549);
    var v231 = v450 + sequence$$15;
    var v232 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAMScript.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v235 = outputWindow.document;
  var v602 = '<tr><td class="title" width="200px">' + "Site:";
  var v550 = v602 + '</td><td class="title">';
  var v451 = v550 + "Positions:";
  var v236 = v451 + "</td></tr>\n";
  JAMScript.call(v235.write, v235, [v236]);
  var i$$9 = 0;
  var v452 = arrayOfItems.length;
  var v252 = i$$9 < v452;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v453 = arrayOfItems[i$$9]
    }
    var v237 = v453.match(/\/.+\//);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v603 = arrayOfItems[i$$9]
    }
    var v551 = v603.match(/\)\D*\d+/);
    var v454 = v551.toString();
    var v238 = v454.replace(/\)\D*/, "");
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v455 = matchPosition >= lowerLimit;
      if(v455) {
        v455 = matchPosition < upperLimit
      }
      var v242 = v455;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v456 = matchPosition - shiftValue;
        var v241 = v456 + 1;
        tempString$$1 = v240 + v241
      }
      var v457 = matchExp.lastIndex;
      var v552 = RegExp.lastMatch;
      var v458 = v552.length;
      var v243 = v457 - v458;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v459 = tempString$$1.search(/\d/);
    var v245 = v459 != -1;
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
    var v677 = '<tr><td class="' + backGroundClass;
    var v665 = v677 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v697 = arrayOfItems[i$$9]
    }
    var v688 = v697.match(/\([^\(]+\)/);
    var v678 = v688.toString();
    var v666 = v678.replace(/\(|\)/g, "");
    var v653 = v665 + v666;
    var v636 = v653 + '</td><td class="';
    var v604 = v636 + backGroundClass;
    var v553 = v604 + '">';
    var v460 = v553 + tempString$$1;
    var v251 = v460 + "</td></tr>\n";
    JAMScript.call(v250.write, v250, [v251]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v461 = arrayOfItems.length;
    v252 = i$$9 < v461
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
  var v654 = '<tr><td class="title">' + "Pattern:";
  var v637 = v654 + '</td><td class="title">';
  var v605 = v637 + "Times found:";
  var v554 = v605 + '</td><td class="title">';
  var v462 = v554 + "Percentage:";
  var v256 = v462 + "</td></tr>\n";
  JAMScript.call(v255.write, v255, [v256]);
  var i$$10 = 0;
  var v463 = arrayOfItems$$1.length;
  var v265 = i$$10 < v463;
  for(;v265;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v464 = arrayOfItems$$1[i$$10]
    }
    var v257 = v464.match(/\/[^\/]+\//);
    var matchExp$$1 = v257 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v465 = sequence$$16.search(matchExp$$1);
    var v259 = v465 != -1;
    if(v259) {
      var v258 = sequence$$16.match(matchExp$$1);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v555 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v638 = arrayOfItems$$1[i$$10]
    }
    var v606 = v638.match(/\d+/);
    var v556 = parseFloat(v606);
    var v466 = v555 - v556;
    var v262 = v466 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v467 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v607 = arrayOfItems$$1[i$$10]
      }
      var v557 = v607.match(/\d+/);
      var v468 = parseFloat(v557);
      var v261 = v467 - v468;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v698 = arrayOfItems$$1[i$$10]
    }
    var v689 = v698.match(/\([^\(]+\)\b/);
    var v679 = v689.toString();
    var v667 = v679.replace(/\(|\)/g, "");
    var v655 = "<tr><td>" + v667;
    var v639 = v655 + "</td><td>";
    var v608 = v639 + tempNumber;
    var v558 = v608 + "</td><td>";
    var v559 = percentage.toFixed(2);
    var v469 = v558 + v559;
    var v264 = v469 + "</td></tr>\n";
    JAMScript.call(v263.write, v263, [v264]);
    i$$10 = i$$10 + 1;
    var v470 = arrayOfItems$$1.length;
    v265 = i$$10 < v470
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
  var v471 = sequence$$17.length;
  var v273 = v471 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v472 = Math.random();
    var v267 = v472 * maxNum$$1;
    randNum$$1 = Math.floor(v267);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v268, v269);
    sequence$$17 = tempString1 + tempString2;
    var v473 = tempSeq.length;
    var v272 = v473 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAMScript.call(v270.write, v270, [v271]);
      tempSeq = ""
    }
    var v474 = sequence$$17.length;
    v273 = v474 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAMScript.call(v274.write, v274, [v275]);
  return true
}
function threeToOne(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 1E5;
  var v475 = testScript();
  var v276 = v475 == false;
  if(v276) {
    return false
  }
  var v668 = theDocument.forms;
  var v656 = v668[0];
  var v640 = v656.elements;
  var v609 = v640[0];
  var v560 = checkFormElement(v609);
  var v476 = v560 == false;
  var v562 = !v476;
  if(v562) {
    var v680 = theDocument.forms;
    var v669 = v680[0];
    var v657 = v669.elements;
    var v641 = v657[0];
    var v610 = v641.value;
    var v561 = checkTextLength(v610, maxInput$$3);
    v476 = v561 == false
  }
  var v277 = v476;
  if(v277) {
    return false
  }
  openWindow("Three to One");
  openPre();
  var v642 = theDocument.forms;
  var v611 = v642[0];
  var v563 = v611.elements;
  var v477 = v563[0];
  var v278 = v477.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v278);
  var i$$11 = 0;
  var v478 = arrayOfFasta$$1.length;
  var v284 = i$$11 < v478;
  for(;v284;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v279 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getTripletSequenceFromFasta(v279);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v280 = arrayOfFasta$$1[i$$11]
    }
    title = getFastaTitleFromTriplets(v280);
    newProtein = filterTriplets(newProtein);
    var v281 = outputWindow.document;
    var v282 = getInfoFromTitleAndSequenceTriplets(title, newProtein);
    JAMScript.call(v281.write, v281, [v282]);
    writeThreeToOne(newProtein);
    var v283 = outputWindow.document;
    JAMScript.call(v283.write, v283, ["\n\n"]);
    i$$11 = i$$11 + 1;
    var v479 = arrayOfFasta$$1.length;
    v284 = i$$11 < v479
  }
  closePre();
  closeWindow();
  return true
}
function writeThreeToOne(proteinSequence$$1) {
  function v2(str$$8, p1$$2, p2, p3, offset$$14, s$$4) {
    var v480 = p1$$2.toUpperCase();
    var v481 = p2.toLowerCase();
    var v285 = v480 + v481;
    var v286 = p3.toLowerCase();
    return v285 + v286
  }
  proteinSequence$$1 = proteinSequence$$1.replace(/(.)(.)(.)/g, v2);
  proteinSequence$$1 = proteinSequence$$1.replace(/Ala/g, " A ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Asx/g, " B ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Cys/g, " C ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Asp/g, " D ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Glu/g, " E ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Phe/g, " F ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Gly/g, " G ");
  proteinSequence$$1 = proteinSequence$$1.replace(/His/g, " H ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Ile/g, " I ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Lys/g, " K ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Leu/g, " L ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Met/g, " M ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Asn/g, " N ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Pro/g, " P ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Gln/g, " Q ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Arg/g, " R ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Ser/g, " S ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Thr/g, " T ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Val/g, " V ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Trp/g, " W ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Xaa/g, " X ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Tyr/g, " Y ");
  proteinSequence$$1 = proteinSequence$$1.replace(/Glx/g, " Z ");
  proteinSequence$$1 = proteinSequence$$1.replace(/\*\*\*/g, " * ");
  proteinSequence$$1 = proteinSequence$$1.replace(/\s/g, "");
  var v287 = outputWindow.document;
  var v288 = addReturns(proteinSequence$$1);
  JAMScript.call(v287.write, v287, [v288]);
  return true
}
function filterTriplets(tripletSequence) {
  tripletSequence = tripletSequence.replace(/\s|\d/gi, "");
  return tripletSequence
}
function getFastaTitleFromTriplets(tripletSequence$$1) {
  fastaSequenceTitle = "Untitled";
  var v482 = tripletSequence$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v290 = v482 != -1;
  if(v290) {
    var v289 = tripletSequence$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaSequenceTitle = v289.toString();
    fastaSequenceTitle = fastaSequenceTitle.replace(/\>|[\f\n\r]/g, "");
    fastaSequenceTitle = filterFastaTitle(fastaSequenceTitle)
  }
  return fastaSequenceTitle
}
function getTripletSequenceFromFasta(tripletSequence$$2) {
  var v483 = tripletSequence$$2.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v291 = v483 != -1;
  if(v291) {
    tripletSequence$$2 = tripletSequence$$2.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return tripletSequence$$2
}
function getInfoFromTitleAndSequenceTriplets(fastaSequenceTitle$$4, sequence$$18) {
  var stringToReturn$$5 = "&gt;results for sequence ";
  var v484 = fastaSequenceTitle$$4.search(/[^\s]/);
  var v293 = v484 != -1;
  if(v293) {
    var v485 = stringToReturn$$5 + '"';
    var v292 = v485 + fastaSequenceTitle$$4;
    stringToReturn$$5 = v292 + '"'
  }
  var v486 = stringToReturn$$5 + ' starting "';
  var v487 = sequence$$18.substring(0, 12);
  var v294 = v486 + v487;
  stringToReturn$$5 = v294 + '"';
  return stringToReturn$$5 + "\n"
}
JAMScript.set(document, "onload", v3);
var v295 = document.getElementById("submitbtn");
JAMScript.set(v295, "onclick", v4);
var v296 = document.getElementById("clearbtn");
JAMScript.set(v296, "onclick", v5);
