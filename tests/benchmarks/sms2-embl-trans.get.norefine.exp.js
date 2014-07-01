function v4() {
  var v573 = document.forms;
  var v492 = v573[0];
  var v299 = v492.elements;
  var v5 = v299[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    emblTrans(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v300 = document.main_form;
  var v7 = v300.main_submit;
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
  var v301 = arrayOfSequences.length;
  var v9 = v301 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v302 = arrayOfTitles.length;
  var v11 = i$$1 < v302;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v574 = arrayOfTitles[i$$1]
    }
    var v493 = v574.search(/\S/);
    var v303 = v493 == -1;
    var v495 = !v303;
    if(v495) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v625 = arrayOfSequences[i$$1]
      }
      var v575 = v625.search(/\S/);
      var v494 = v575 == -1;
      var v577 = !v494;
      if(v577) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v626 = arrayOfSequences[i$$1]
        }
        var v576 = v626.length;
        v494 = v576 != lengthOfAlign
      }
      v303 = v494
    }
    var v10 = v303;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v304 = arrayOfTitles.length;
    v11 = i$$1 < v304
  }
  return true
}
function checkCodonTable(codonTable) {
  var v496 = codonTable.search(/AmAcid/);
  var v305 = v496 == -1;
  var v498 = !v305;
  if(v498) {
    var v578 = codonTable.search(/Codon/);
    var v497 = v578 == -1;
    var v580 = !v497;
    if(v580) {
      var v627 = codonTable.search(/Number/);
      var v579 = v627 == -1;
      var v629 = !v579;
      if(v629) {
        var v657 = codonTable.search(/\/1000/);
        var v628 = v657 == -1;
        var v659 = !v628;
        if(v659) {
          var v658 = codonTable.search(/Fraction\s*\.\./);
          v628 = v658 == -1
        }
        v579 = v628
      }
      v497 = v579
    }
    v305 = v497
  }
  var v12 = v305;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v499 = formElement.value;
  var v306 = v499.search(/\S/);
  var v13 = v306 == -1;
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
  var v307 = arrayOfPatterns.length;
  var v16 = z$$2 < v307;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v500 = arrayOfPatterns[z$$2]
    }
    var v308 = v500.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v308 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v501 = arrayOfPatterns[z$$2]
    }
    var v309 = moreExpressionCheck(v501);
    var v15 = v309 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v310 = arrayOfPatterns.length;
    v16 = z$$2 < v310
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v311 = arrayOfPatterns.length;
  var v25 = j < v311;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v581 = arrayOfPatterns[j]
    }
    var v502 = v581.match(/\/.+\//);
    var v312 = v502 + "gi";
    if(JAMScript.isEval(eval)) {
      var v747 = eval("introspect(JAMScript.introspectors.processAll) { " + v312 + " }")
    }else {
      var v747 = JAMScript.call(eval, null, [v312])
    }
    v19[v20] = v747;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v503 = arrayOfPatterns[j]
    }
    var v313 = v503.match(/=[a-zA-Z\*]/);
    var v748 = v313.toString();
    v21[v22] = v748;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v314 = geneticCodeMatchResult[j]
    }
    var v749 = v314.replace(/=/g, "");
    v23[v24] = v749;
    j = j + 1;
    var v315 = arrayOfPatterns.length;
    v25 = j < v315
  }
  var i$$2 = 0;
  var v504 = testSequence.length;
  var v316 = v504 - 3;
  var v32 = i$$2 <= v316;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v317 = geneticCodeMatchExp.length;
    var v30 = j < v317;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v505 = geneticCodeMatchExp[j]
      }
      var v318 = codon.search(v505);
      var v29 = v318 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v319 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v319 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v320 = geneticCodeMatchExp.length;
      v30 = j < v320
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v506 = testSequence.length;
    var v321 = v506 - 3;
    v32 = i$$2 <= v321
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v322 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v322;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v507 = arrayOfPatterns$$1[z$$3]
    }
    var v323 = v507.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v323 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v324 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v324
  }
  var i$$3 = 0;
  var v325 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v325;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v508 = arrayOfPatterns$$1[i$$3]
    }
    var v326 = "[" + v508;
    var v35 = v326 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v327 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v327;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v509 = arrayOfPatterns$$1[j$$1]
      }
      var v328 = v509.search(re);
      var v36 = v328 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v329 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v329
    }
    i$$3 = i$$3 + 1;
    var v330 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v330
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v331 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v331;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v510 = arrayOfPatterns$$2[z$$4]
    }
    var v332 = v510.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v332 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v511 = arrayOfPatterns$$2[z$$4]
    }
    var v333 = moreExpressionCheck(v511);
    var v40 = v333 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v334 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v334
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v582 = getSequenceFromFasta(text$$7);
  var v512 = v582.replace(/[^A-Za-z]/g, "");
  var v335 = v512.length;
  var v43 = v335 > maxInput;
  if(v43) {
    var v336 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v336 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v337 = text$$8.length;
  var v45 = v337 > maxInput$$1;
  if(v45) {
    var v338 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v338 + " characters.";
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
  var v339 = alignArray.length;
  var v52 = v339 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v340 = alignArray.length;
  var v54 = i$$4 < v340;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v513 = alignArray[i$$4]
    }
    var v341 = v513.search(/[^\s]+\s/);
    var v53 = v341 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v342 = alignArray.length;
    v54 = i$$4 < v342
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
  var v343 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v343 != -1;
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
  var v344 = sequence$$2.length;
  var v58 = "&gt;results for " + v344;
  var stringToReturn = v58 + " residue sequence ";
  var v345 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v345 != -1;
  if(v60) {
    var v346 = stringToReturn + '"';
    var v59 = v346 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v347 = stringToReturn + ' starting "';
  var v348 = sequence$$2.substring(0, 10);
  var v61 = v347 + v348;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v349 = sequenceOne.length;
  var v62 = "Search results for " + v349;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v350 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v350 != -1;
  if(v64) {
    var v351 = stringToReturn$$1 + '"';
    var v63 = v351 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v352 = stringToReturn$$1 + ' starting "';
  var v353 = sequenceOne.substring(0, 10);
  var v65 = v352 + v353;
  stringToReturn$$1 = v65 + '"\n';
  var v354 = stringToReturn$$1 + "and ";
  var v355 = sequenceTwo.length;
  var v66 = v354 + v355;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v356 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v356 != -1;
  if(v68) {
    var v357 = stringToReturn$$1 + '"';
    var v67 = v357 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v358 = stringToReturn$$1 + ' starting "';
  var v359 = sequenceTwo.substring(0, 10);
  var v69 = v358 + v359;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v360 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v360;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v583 = arrayOfPatterns$$3[j$$2]
    }
    var v514 = v583.match(/\/.+\//);
    var v361 = v514 + "gi";
    if(JAMScript.isEval(eval)) {
      var v750 = eval("introspect(JAMScript.introspectors.processAll) { " + v361 + " }")
    }else {
      var v750 = JAMScript.call(eval, null, [v361])
    }
    v72[v73] = v750;
    j$$2 = j$$2 + 1;
    var v362 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v362
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v363 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v363;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v515 = arrayOfPatterns$$4[j$$3]
    }
    var v364 = v515.match(/=[a-zA-Z\*]/);
    var v751 = v364.toString();
    v76[v77] = v751;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v365 = geneticCodeMatchResult$$1[j$$3]
    }
    var v752 = v365.replace(/=/g, "");
    v78[v79] = v752;
    j$$3 = j$$3 + 1;
    var v366 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v366
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v367 = sequence$$3.length;
  var v81 = "Results for " + v367;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v368 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v368 != -1;
  if(v83) {
    var v369 = stringToReturn$$2 + '"';
    var v82 = v369 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v370 = stringToReturn$$2 + ' starting "';
  var v371 = sequence$$3.substring(0, 10);
  var v84 = v370 + v371;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v516 = "Results for " + topology;
  var v372 = v516 + " ";
  var v373 = sequence$$4.length;
  var v86 = v372 + v373;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v374 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v374 != -1;
  if(v88) {
    var v375 = stringToReturn$$3 + '"';
    var v87 = v375 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v376 = stringToReturn$$3 + ' starting "';
  var v377 = sequence$$4.substring(0, 10);
  var v89 = v376 + v377;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v378 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v378;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v379 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v379 != -1;
  if(v93) {
    var v380 = stringToReturn$$4 + '"';
    var v92 = v380 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v381 = stringToReturn$$4 + ' starting "';
  var v382 = sequenceOne$$1.substring(0, 10);
  var v94 = v381 + v382;
  stringToReturn$$4 = v94 + '"\n';
  var v383 = stringToReturn$$4 + "and ";
  var v384 = sequenceTwo$$1.length;
  var v95 = v383 + v384;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v385 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v385 != -1;
  if(v97) {
    var v386 = stringToReturn$$4 + '"';
    var v96 = v386 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v387 = stringToReturn$$4 + ' starting "';
  var v388 = sequenceTwo$$1.substring(0, 10);
  var v98 = v387 + v388;
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
    var v389 = Math.random();
    var v390 = components.length;
    var v100 = v389 * v390;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v391 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v391 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v392 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v392 != -1;
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
  var v517 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v393 = v517 != -1;
  var v519 = !v393;
  if(v519) {
    var v584 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v518 = v584 != -1;
    var v586 = !v518;
    if(v586) {
      var v630 = expressionToCheck.search(/\[\]/);
      var v585 = v630 != -1;
      var v632 = !v585;
      if(v632) {
        var v660 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v631 = v660 != -1;
        var v662 = !v631;
        if(v662) {
          var v673 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v661 = v673 != -1;
          var v675 = !v661;
          if(v675) {
            var v686 = expressionToCheck.search(/\|\|/);
            var v674 = v686 != -1;
            var v688 = !v674;
            if(v688) {
              var v698 = expressionToCheck.search(/\/\|/);
              var v687 = v698 != -1;
              var v700 = !v687;
              if(v700) {
                var v709 = expressionToCheck.search(/\|\//);
                var v699 = v709 != -1;
                var v711 = !v699;
                if(v711) {
                  var v718 = expressionToCheck.search(/\[.\]/);
                  var v710 = v718 != -1;
                  var v720 = !v710;
                  if(v720) {
                    var v725 = expressionToCheck.search(/\</);
                    var v719 = v725 != -1;
                    var v727 = !v719;
                    if(v727) {
                      var v726 = expressionToCheck.search(/\>/);
                      v719 = v726 != -1
                    }
                    v710 = v719
                  }
                  v699 = v710
                }
                v687 = v699
              }
              v674 = v687
            }
            v661 = v674
          }
          v631 = v661
        }
        v585 = v631
      }
      v518 = v585
    }
    v393 = v518
  }
  var v105 = v393;
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
    var v754 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v754[2], v754[1], v754[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v587 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v520 = v587 + "<head>\n";
  var v394 = v520 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v394 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v740 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v736 = v740 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v732 = v736 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v728 = v732 + "div.info {font-weight: bold}\n";
    var v721 = v728 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v712 = v721 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v701 = v712 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v689 = v701 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v676 = v689 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v663 = v676 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v633 = v663 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v588 = v633 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v521 = v588 + "td.many {color: #000000}\n";
    var v395 = v521 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v395 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v744 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v741 = v744 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v737 = v741 + "div.title {display: none}\n";
    var v733 = v737 + "div.info {font-weight: bold}\n";
    var v729 = v733 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v722 = v729 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v713 = v722 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v702 = v713 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v690 = v702 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v690 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v664 = v677 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v634 = v664 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v589 = v634 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v522 = v589 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v396 = v522 + "img {display: none}\n";
    var v115 = v396 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v590 = "</head>\n" + '<body class="main">\n';
  var v523 = v590 + '<div class="title">';
  var v397 = v523 + title$$6;
  var v117 = v397 + " results</div>\n";
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
    var v755 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v755[2], v755[1], v755[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v591 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v524 = v591 + "<head>\n";
  var v398 = v524 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v398 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v742 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v738 = v742 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v734 = v738 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v730 = v734 + "div.info {font-weight: bold}\n";
    var v723 = v730 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v714 = v723 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v703 = v714 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v691 = v703 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v678 = v691 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v665 = v678 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v635 = v665 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v592 = v635 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v525 = v592 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v399 = v525 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v399 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v746 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v745 = v746 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v743 = v745 + "div.title {display: none}\n";
    var v739 = v743 + "div.info {font-weight: bold}\n";
    var v735 = v739 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v731 = v735 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v724 = v731 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v715 = v724 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v704 = v715 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v692 = v704 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v679 = v692 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v666 = v679 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v636 = v666 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v593 = v636 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v526 = v593 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v400 = v526 + "img {display: none}\n";
    var v123 = v400 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v594 = "</head>\n" + '<body class="main">\n';
  var v527 = v594 + '<div class="title">';
  var v401 = v527 + title$$8;
  var v125 = v401 + " results</div>\n";
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
  var v402 = dnaSequence$$1.search(/./);
  var v126 = v402 != -1;
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
  var v403 = testArray[0];
  var v130 = v403 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v404 = testString.search(re$$2);
  var v131 = v404 == -1;
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
  var v405 = testNum.toFixed(3);
  var v134 = v405 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v406 = testNum.toPrecision(5);
  var v135 = v406 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v407 = theNumber$$1.search(/\d/);
  var v136 = v407 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v528 = emblFile.search(/ID/);
  var v408 = v528 == -1;
  var v530 = !v408;
  if(v530) {
    var v595 = emblFile.search(/AC/);
    var v529 = v595 == -1;
    var v597 = !v529;
    if(v597) {
      var v637 = emblFile.search(/DE/);
      var v596 = v637 == -1;
      var v639 = !v596;
      if(v639) {
        var v638 = emblFile.search(/SQ/);
        v596 = v638 == -1
      }
      v529 = v596
    }
    v408 = v529
  }
  var v137 = v408;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v409 = theNumber$$2.search(/\d/);
  var v138 = v409 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v410 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v410 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v411 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v411 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v412 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v412 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v531 = genBankFile.search(/LOCUS/);
  var v413 = v531 == -1;
  var v533 = !v413;
  if(v533) {
    var v598 = genBankFile.search(/DEFINITION/);
    var v532 = v598 == -1;
    var v600 = !v532;
    if(v600) {
      var v640 = genBankFile.search(/ACCESSION/);
      var v599 = v640 == -1;
      var v642 = !v599;
      if(v642) {
        var v641 = genBankFile.search(/ORIGIN/);
        v599 = v641 == -1
      }
      v532 = v599
    }
    v413 = v532
  }
  var v143 = v413;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v534 = genBankFile$$1.search(/LOCUS/);
  var v414 = v534 == -1;
  var v536 = !v414;
  if(v536) {
    var v601 = genBankFile$$1.search(/DEFINITION/);
    var v535 = v601 == -1;
    var v603 = !v535;
    if(v603) {
      var v643 = genBankFile$$1.search(/ACCESSION/);
      var v602 = v643 == -1;
      var v645 = !v602;
      if(v645) {
        var v644 = genBankFile$$1.search(/ORIGIN/);
        v602 = v644 == -1
      }
      v535 = v602
    }
    v414 = v535
  }
  var v144 = v414;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v415 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v415 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v537 = emblFile$$1.search(/ID/);
  var v416 = v537 == -1;
  var v539 = !v416;
  if(v539) {
    var v604 = emblFile$$1.search(/AC/);
    var v538 = v604 == -1;
    var v606 = !v538;
    if(v606) {
      var v646 = emblFile$$1.search(/DE/);
      var v605 = v646 == -1;
      var v648 = !v605;
      if(v648) {
        var v647 = emblFile$$1.search(/SQ/);
        v605 = v647 == -1
      }
      v538 = v605
    }
    v416 = v538
  }
  var v146 = v416;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v417 = emblFile$$1.search(/^FT/m);
  var v147 = v417 == -1;
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
    var v418 = basePerLine / groupSize;
    var v151 = j$$6 <= v418;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v419 = k + i$$5;
        var v149 = text$$10.charAt(v419);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v420 = basePerLine / groupSize;
      v151 = j$$6 <= v420
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
    var v421 = adjustment < 0;
    if(v421) {
      v421 = adjusted >= 0
    }
    var v155 = v421;
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
    var v422 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v422;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v423 = i$$6 + k$$1;
        var v156 = v423 >= stopBase$$2;
        if(v156) {
          break
        }
        var v424 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v424);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v425 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v425, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v426 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v426
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v607 = adjustNumbering(lineNum, numberingAdjustment);
      var v540 = rightNum(v607, "", 8, tabIn$$3);
      var v427 = v540 + lineOfText$$1;
      var v164 = v427 + "\n";
      JAMScript.call(v163.write, v163, [v164]);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v608 = adjustNumbering(lineNum, numberingAdjustment);
        var v541 = rightNum(v608, "", 8, tabIn$$3);
        var v542 = complement(lineOfText$$1);
        var v428 = v541 + v542;
        var v166 = v428 + "\n";
        JAMScript.call(v165.write, v165, [v166]);
        var v167 = outputWindow.document;
        JAMScript.call(v167.write, v167, ["\n"])
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v543 = adjustNumbering(i$$6, numberingAdjustment);
        var v429 = lineOfText$$1 + v543;
        var v170 = v429 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v544 = complement(lineOfText$$1);
          var v545 = adjustNumbering(i$$6, numberingAdjustment);
          var v430 = v544 + v545;
          var v172 = v430 + "\n";
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
            var v431 = complement(lineOfText$$1);
            var v180 = v431 + "\n";
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
    var v432 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v432;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v433 = i$$7 + k$$2;
        var v187 = v433 >= stopBase$$3;
        if(v187) {
          break
        }
        var v434 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v434);
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
      var v435 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v435
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v546 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v436 = v546 + lineOfText$$2;
      var v195 = v436 + "\n";
      JAMScript.call(v194.write, v194, [v195])
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v437 = lineOfText$$2 + i$$7;
        var v197 = v437 + "\n";
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
  var v547 = sequence$$13.length;
  var v438 = v547 <= firstIndexToMutate;
  var v549 = !v438;
  if(v549) {
    var v548 = lastIndexToMutate < 0;
    var v609 = !v548;
    if(v609) {
      v548 = lastIndexToMutate <= firstIndexToMutate
    }
    v438 = v548
  }
  var v206 = v438;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v439 = Math.random();
    var v207 = v439 * maxNum;
    randNum = Math.floor(v207);
    var v440 = randNum < firstIndexToMutate;
    var v550 = !v440;
    if(v550) {
      v440 = randNum > lastIndexToMutate
    }
    var v208 = v440;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v441 = Math.random();
      var v442 = components$$1.length;
      var v209 = v441 * v442;
      componentsIndex = Math.round(v209);
      var v443 = components$$1.length;
      var v210 = componentsIndex == v443;
      if(v210) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v444 = components$$1[componentsIndex]
      }
      var v211 = v444 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v445 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v446 = components$$1[componentsIndex]
    }
    var v212 = v445 + v446;
    var v447 = randNum + 1;
    var v448 = sequence$$13.length;
    var v213 = sequence$$13.substring(v447, v448);
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
    var v449 = Math.random();
    var v450 = components$$2.length;
    var v217 = v449 * v450;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v451 = sequence$$14.length;
    var v220 = v451 == 60;
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
    var v610 = sequence$$15.length;
    var v551 = v610 - lookAhead;
    var v552 = sequence$$15.length;
    var v452 = sequence$$15.substring(v551, v552);
    var v225 = v452 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  JAMScript.call(v228.write, v228, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v229 = outputWindow.document;
  var v611 = '<tr><td class="title" width="200px">' + "Site:";
  var v553 = v611 + '</td><td class="title">';
  var v453 = v553 + "Positions:";
  var v230 = v453 + "</td></tr>\n";
  JAMScript.call(v229.write, v229, [v230]);
  var i$$9 = 0;
  var v454 = arrayOfItems.length;
  var v246 = i$$9 < v454;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v455 = arrayOfItems[i$$9]
    }
    var v231 = v455.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v612 = arrayOfItems[i$$9]
    }
    var v554 = v612.match(/\)\D*\d+/);
    var v456 = v554.toString();
    var v232 = v456.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v457 = matchPosition >= lowerLimit;
      if(v457) {
        v457 = matchPosition < upperLimit
      }
      var v236 = v457;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v458 = matchPosition - shiftValue;
        var v235 = v458 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v555 = matchExp.lastIndex;
      var v613 = RegExp.lastMatch;
      var v556 = v613.length;
      var v459 = v555 - v556;
      v237.lastIndex = v459 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v460 = tempString$$1.search(/\d/);
    var v239 = v460 != -1;
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
    var v693 = '<tr><td class="' + backGroundClass;
    var v680 = v693 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v716 = arrayOfItems[i$$9]
    }
    var v705 = v716.match(/\([^\(]+\)/);
    var v694 = v705.toString();
    var v681 = v694.replace(/\(|\)/g, "");
    var v667 = v680 + v681;
    var v649 = v667 + '</td><td class="';
    var v614 = v649 + backGroundClass;
    var v557 = v614 + '">';
    var v461 = v557 + tempString$$1;
    var v245 = v461 + "</td></tr>\n";
    JAMScript.call(v244.write, v244, [v245]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v462 = arrayOfItems.length;
    v246 = i$$9 < v462
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
  var v668 = '<tr><td class="title">' + "Pattern:";
  var v650 = v668 + '</td><td class="title">';
  var v615 = v650 + "Times found:";
  var v558 = v615 + '</td><td class="title">';
  var v463 = v558 + "Percentage:";
  var v250 = v463 + "</td></tr>\n";
  JAMScript.call(v249.write, v249, [v250]);
  var i$$10 = 0;
  var v464 = arrayOfItems$$1.length;
  var v259 = i$$10 < v464;
  for(;v259;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v465 = arrayOfItems$$1[i$$10]
    }
    var v251 = v465.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v466 = sequence$$16.search(matchExp$$1);
    var v253 = v466 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v559 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v651 = arrayOfItems$$1[i$$10]
    }
    var v616 = v651.match(/\d+/);
    var v560 = parseFloat(v616);
    var v467 = v559 - v560;
    var v256 = v467 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v468 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v617 = arrayOfItems$$1[i$$10]
      }
      var v561 = v617.match(/\d+/);
      var v469 = parseFloat(v561);
      var v255 = v468 - v469;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v717 = arrayOfItems$$1[i$$10]
    }
    var v706 = v717.match(/\([^\(]+\)\b/);
    var v695 = v706.toString();
    var v682 = v695.replace(/\(|\)/g, "");
    var v669 = "<tr><td>" + v682;
    var v652 = v669 + "</td><td>";
    var v618 = v652 + tempNumber;
    var v562 = v618 + "</td><td>";
    var v563 = percentage.toFixed(2);
    var v470 = v562 + v563;
    var v258 = v470 + "</td></tr>\n";
    JAMScript.call(v257.write, v257, [v258]);
    i$$10 = i$$10 + 1;
    var v471 = arrayOfItems$$1.length;
    v259 = i$$10 < v471
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
  var v472 = sequence$$17.length;
  var v267 = v472 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v473 = Math.random();
    var v261 = v473 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v474 = tempSeq.length;
    var v266 = v474 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      JAMScript.call(v264.write, v264, [v265]);
      tempSeq = ""
    }
    var v475 = sequence$$17.length;
    v267 = v475 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  JAMScript.call(v268.write, v268, [v269]);
  return true
}
function emblTrans(theDocument) {
  var maxInput$$3 = 2E5;
  var v476 = testScript();
  var v270 = v476 == false;
  if(v270) {
    return false
  }
  var v683 = theDocument.forms;
  var v670 = v683[0];
  var v653 = v670.elements;
  var v619 = v653[0];
  var v564 = checkFormElement(v619);
  var v477 = v564 == false;
  var v566 = !v477;
  if(v566) {
    var v707 = theDocument.forms;
    var v696 = v707[0];
    var v684 = v696.elements;
    var v671 = v684[0];
    var v654 = v671.value;
    var v620 = verifyEmblFeat(v654);
    var v565 = v620 == false;
    var v622 = !v565;
    if(v622) {
      var v708 = theDocument.forms;
      var v697 = v708[0];
      var v685 = v697.elements;
      var v672 = v685[0];
      var v655 = v672.value;
      var v621 = checkTextLength(v655, maxInput$$3);
      v565 = v621 == false
    }
    v477 = v565
  }
  var v271 = v477;
  if(v271) {
    return false
  }
  openWindow("EMBL Trans Extractor");
  openPre();
  var v656 = theDocument.forms;
  var v623 = v656[0];
  var v567 = v623.elements;
  var v478 = v567[0];
  var v272 = v478.value;
  emblTransExtract(v272);
  closePre();
  closeWindow();
  return true
}
function emblTransExtract(emblFile$$2) {
  var title$$9;
  var v273 = "_" + emblFile$$2;
  emblFile$$2 = v273 + "_";
  var recordArray = emblFile$$2.split(/ID\s\s\s[^\f\n\r]*/);
  var i$$11 = 1;
  var v479 = recordArray.length;
  var v282 = i$$11 < v479;
  for(;v282;) {
    var mainArray = emblFile$$2.split(/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/);
    var v568 = mainArray[0];
    var v480 = v568.search(/[\f\n\r]\s*DE[^\f\n\r]+/);
    var v275 = v480 != -1;
    if(v275) {
      var v569 = mainArray[0];
      var v481 = v569.match(/[\f\n\r]\s*DE[^\f\n\r]+/);
      var v274 = v481.toString();
      title$$9 = v274.replace(/[\f\n\r]\s*DE\s*/, "")
    }else {
      title$$9 = "Untitled"
    }
    var v482 = title$$9.replace(/[\f\n\r\t]+$/g, "");
    var v276 = filterFastaTitle(v482);
    title$$9 = v276 + "\n";
    var v277 = mainArray[2];
    var dnaSequenceArray = v277.split(/\/{2}/);
    var v278 = outputWindow.document;
    var v279 = title$$9 + "\n";
    JAMScript.call(v278.write, v278, [v279]);
    var v483 = dnaSequenceArray.length;
    var v280 = v483 == 1;
    if(v280) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus()
    }
    var v281 = mainArray[1];
    var featureArray = v281.split(/[\f\n\r]FT {3,12}\b/);
    showFeatureTrans(featureArray);
    i$$11 = i$$11 + 1;
    var v484 = recordArray.length;
    v282 = i$$11 < v484
  }
  return true
}
function showFeatureTrans(arrayOfFeatures) {
  var featureTitle = "";
  var theTitle = "";
  var removedTitle = "";
  var firstQualifier = "";
  var translation = "";
  var translationFound = false;
  var i$$12 = 1;
  var v485 = arrayOfFeatures.length;
  var v294 = i$$12 < v485;
  for(;v294;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v570 = arrayOfFeatures[i$$12]
    }
    var v486 = v570.search(/\/translation/);
    var v293 = v486 != -1;
    if(v293) {
      var v283 = arrayOfFeatures;
      var v284 = i$$12;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v487 = arrayOfFeatures[i$$12]
      }
      var v753 = v487.replace(/[\[\]\*]/g, "");
      v283[v284] = v753;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v488 = arrayOfFeatures[i$$12]
      }
      var v285 = v488.match(/[^ \f\n\r\t\v]+ /);
      featureTitle = v285.toString();
      theTitle = new RegExp(featureTitle);
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v286 = arrayOfFeatures[i$$12]
      }
      removedTitle = v286.replace(theTitle, "");
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v489 = arrayOfFeatures[i$$12]
      }
      var v287 = v489.match(/\/[^\f\n\r]+/);
      firstQualifier = v287.toString();
      var v288 = outputWindow.document;
      var v624 = filterFastaTitle(featureTitle);
      var v571 = "&gt;" + v624;
      var v572 = filterFastaTitle(firstQualifier);
      var v490 = v571 + v572;
      var v289 = v490 + "\n";
      JAMScript.call(v288.write, v288, [v289]);
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v290 = arrayOfFeatures[i$$12]
      }
      translation = v290.match(/\/translation="[^"]+"/);
      translation = translation.toString();
      translation = translation.replace(/\/translation/, "");
      translation = translation.replace(/^FT\s+/gm, "");
      translation = removeNonProtein(translation);
      translation = addReturns(translation);
      var v291 = outputWindow.document;
      JAMScript.call(v291.write, v291, [translation]);
      translationFound = true;
      var v292 = outputWindow.document;
      JAMScript.call(v292.write, v292, ["\n\n"])
    }
    i$$12 = i$$12 + 1;
    var v491 = arrayOfFeatures.length;
    v294 = i$$12 < v491
  }
  var v296 = translationFound == false;
  if(v296) {
    var v295 = outputWindow.document;
    JAMScript.call(v295.write, v295, ["No translations were found.\n"])
  }
  return true
}
JAMScript.set(document, "onload", v2);
var v297 = document.getElementById("submitbtn");
JAMScript.set(v297, "onclick", v3);
var v298 = document.getElementById("clearbtn");
JAMScript.set(v298, "onclick", v4);

