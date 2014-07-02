function v4() {
  var v575 = document.forms;
  var v495 = v575[0];
  var v303 = v495.elements;
  var v5 = v303[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    genbankTrans(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v304 = document.main_form;
  var v7 = v304.main_submit;
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
  var v305 = arrayOfSequences.length;
  var v9 = v305 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v306 = arrayOfTitles.length;
  var v11 = i$$1 < v306;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v576 = arrayOfTitles[i$$1]
    }
    var v496 = v576.search(/\S/);
    var v307 = v496 == -1;
    var v498 = !v307;
    if(v498) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v626 = arrayOfSequences[i$$1]
      }
      var v577 = v626.search(/\S/);
      var v497 = v577 == -1;
      var v579 = !v497;
      if(v579) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v627 = arrayOfSequences[i$$1]
        }
        var v578 = v627.length;
        v497 = v578 != lengthOfAlign
      }
      v307 = v497
    }
    var v10 = v307;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v308 = arrayOfTitles.length;
    v11 = i$$1 < v308
  }
  return true
}
function checkCodonTable(codonTable) {
  var v499 = codonTable.search(/AmAcid/);
  var v309 = v499 == -1;
  var v501 = !v309;
  if(v501) {
    var v580 = codonTable.search(/Codon/);
    var v500 = v580 == -1;
    var v582 = !v500;
    if(v582) {
      var v628 = codonTable.search(/Number/);
      var v581 = v628 == -1;
      var v630 = !v581;
      if(v630) {
        var v658 = codonTable.search(/\/1000/);
        var v629 = v658 == -1;
        var v660 = !v629;
        if(v660) {
          var v659 = codonTable.search(/Fraction\s*\.\./);
          v629 = v659 == -1
        }
        v581 = v629
      }
      v500 = v581
    }
    v309 = v500
  }
  var v12 = v309;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v502 = formElement.value;
  var v310 = v502.search(/\S/);
  var v13 = v310 == -1;
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
  var v311 = arrayOfPatterns.length;
  var v16 = z$$2 < v311;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v503 = arrayOfPatterns[z$$2]
    }
    var v312 = v503.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v312 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v504 = arrayOfPatterns[z$$2]
    }
    var v313 = moreExpressionCheck(v504);
    var v15 = v313 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v314 = arrayOfPatterns.length;
    v16 = z$$2 < v314
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v315 = arrayOfPatterns.length;
  var v25 = j < v315;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v583 = arrayOfPatterns[j]
    }
    var v505 = v583.match(/\/.+\//);
    var v316 = v505 + "gi";
    if(JAMScript.isEval(eval)) {
      var v748 = eval("introspect(JAMScript.introspectors.processAll) { " + v316 + " }")
    }else {
      var v748 = JAMScript.call(eval, null, [v316])
    }
    v19[v20] = v748;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v506 = arrayOfPatterns[j]
    }
    var v317 = v506.match(/=[a-zA-Z\*]/);
    var v749 = v317.toString();
    v21[v22] = v749;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v318 = geneticCodeMatchResult[j]
    }
    var v750 = v318.replace(/=/g, "");
    v23[v24] = v750;
    j = j + 1;
    var v319 = arrayOfPatterns.length;
    v25 = j < v319
  }
  var i$$2 = 0;
  var v507 = testSequence.length;
  var v320 = v507 - 3;
  var v32 = i$$2 <= v320;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v321 = geneticCodeMatchExp.length;
    var v30 = j < v321;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v508 = geneticCodeMatchExp[j]
      }
      var v322 = codon.search(v508);
      var v29 = v322 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v323 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v323 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v324 = geneticCodeMatchExp.length;
      v30 = j < v324
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v509 = testSequence.length;
    var v325 = v509 - 3;
    v32 = i$$2 <= v325
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v326 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v326;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v510 = arrayOfPatterns$$1[z$$3]
    }
    var v327 = v510.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v327 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v328 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v328
  }
  var i$$3 = 0;
  var v329 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v329;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v511 = arrayOfPatterns$$1[i$$3]
    }
    var v330 = "[" + v511;
    var v35 = v330 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v331 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v331;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v512 = arrayOfPatterns$$1[j$$1]
      }
      var v332 = v512.search(re);
      var v36 = v332 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v333 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v333
    }
    i$$3 = i$$3 + 1;
    var v334 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v334
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v335 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v335;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v513 = arrayOfPatterns$$2[z$$4]
    }
    var v336 = v513.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v336 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v514 = arrayOfPatterns$$2[z$$4]
    }
    var v337 = moreExpressionCheck(v514);
    var v40 = v337 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v338 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v338
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v584 = getSequenceFromFasta(text$$7);
  var v515 = v584.replace(/[^A-Za-z]/g, "");
  var v339 = v515.length;
  var v43 = v339 > maxInput;
  if(v43) {
    var v340 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v340 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v341 = text$$8.length;
  var v45 = v341 > maxInput$$1;
  if(v45) {
    var v342 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v342 + " characters.";
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
  var v343 = alignArray.length;
  var v52 = v343 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v344 = alignArray.length;
  var v54 = i$$4 < v344;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v516 = alignArray[i$$4]
    }
    var v345 = v516.search(/[^\s]+\s/);
    var v53 = v345 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v346 = alignArray.length;
    v54 = i$$4 < v346
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
  var v347 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v347 != -1;
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
  var v348 = sequence$$2.length;
  var v58 = "&gt;results for " + v348;
  var stringToReturn = v58 + " residue sequence ";
  var v349 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v349 != -1;
  if(v60) {
    var v350 = stringToReturn + '"';
    var v59 = v350 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v351 = stringToReturn + ' starting "';
  var v352 = sequence$$2.substring(0, 10);
  var v61 = v351 + v352;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v353 = sequenceOne.length;
  var v62 = "Search results for " + v353;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v354 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v354 != -1;
  if(v64) {
    var v355 = stringToReturn$$1 + '"';
    var v63 = v355 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v356 = stringToReturn$$1 + ' starting "';
  var v357 = sequenceOne.substring(0, 10);
  var v65 = v356 + v357;
  stringToReturn$$1 = v65 + '"\n';
  var v358 = stringToReturn$$1 + "and ";
  var v359 = sequenceTwo.length;
  var v66 = v358 + v359;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v360 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v360 != -1;
  if(v68) {
    var v361 = stringToReturn$$1 + '"';
    var v67 = v361 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v362 = stringToReturn$$1 + ' starting "';
  var v363 = sequenceTwo.substring(0, 10);
  var v69 = v362 + v363;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v364 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v364;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v585 = arrayOfPatterns$$3[j$$2]
    }
    var v517 = v585.match(/\/.+\//);
    var v365 = v517 + "gi";
    if(JAMScript.isEval(eval)) {
      var v751 = eval("introspect(JAMScript.introspectors.processAll) { " + v365 + " }")
    }else {
      var v751 = JAMScript.call(eval, null, [v365])
    }
    v72[v73] = v751;
    j$$2 = j$$2 + 1;
    var v366 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v366
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v367 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v367;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v518 = arrayOfPatterns$$4[j$$3]
    }
    var v368 = v518.match(/=[a-zA-Z\*]/);
    var v752 = v368.toString();
    v76[v77] = v752;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v369 = geneticCodeMatchResult$$1[j$$3]
    }
    var v753 = v369.replace(/=/g, "");
    v78[v79] = v753;
    j$$3 = j$$3 + 1;
    var v370 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v370
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v371 = sequence$$3.length;
  var v81 = "Results for " + v371;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v372 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v372 != -1;
  if(v83) {
    var v373 = stringToReturn$$2 + '"';
    var v82 = v373 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v374 = stringToReturn$$2 + ' starting "';
  var v375 = sequence$$3.substring(0, 10);
  var v84 = v374 + v375;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v519 = "Results for " + topology;
  var v376 = v519 + " ";
  var v377 = sequence$$4.length;
  var v86 = v376 + v377;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v378 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v378 != -1;
  if(v88) {
    var v379 = stringToReturn$$3 + '"';
    var v87 = v379 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v380 = stringToReturn$$3 + ' starting "';
  var v381 = sequence$$4.substring(0, 10);
  var v89 = v380 + v381;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v382 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v382;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v383 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v383 != -1;
  if(v93) {
    var v384 = stringToReturn$$4 + '"';
    var v92 = v384 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v385 = stringToReturn$$4 + ' starting "';
  var v386 = sequenceOne$$1.substring(0, 10);
  var v94 = v385 + v386;
  stringToReturn$$4 = v94 + '"\n';
  var v387 = stringToReturn$$4 + "and ";
  var v388 = sequenceTwo$$1.length;
  var v95 = v387 + v388;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v389 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v389 != -1;
  if(v97) {
    var v390 = stringToReturn$$4 + '"';
    var v96 = v390 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v391 = stringToReturn$$4 + ' starting "';
  var v392 = sequenceTwo$$1.substring(0, 10);
  var v98 = v391 + v392;
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
    var v393 = Math.random();
    var v394 = components.length;
    var v100 = v393 * v394;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v395 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v395 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v396 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v396 != -1;
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
  var v520 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v397 = v520 != -1;
  var v522 = !v397;
  if(v522) {
    var v586 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v521 = v586 != -1;
    var v588 = !v521;
    if(v588) {
      var v631 = expressionToCheck.search(/\[\]/);
      var v587 = v631 != -1;
      var v633 = !v587;
      if(v633) {
        var v661 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v632 = v661 != -1;
        var v663 = !v632;
        if(v663) {
          var v674 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v662 = v674 != -1;
          var v676 = !v662;
          if(v676) {
            var v687 = expressionToCheck.search(/\|\|/);
            var v675 = v687 != -1;
            var v689 = !v675;
            if(v689) {
              var v699 = expressionToCheck.search(/\/\|/);
              var v688 = v699 != -1;
              var v701 = !v688;
              if(v701) {
                var v710 = expressionToCheck.search(/\|\//);
                var v700 = v710 != -1;
                var v712 = !v700;
                if(v712) {
                  var v719 = expressionToCheck.search(/\[.\]/);
                  var v711 = v719 != -1;
                  var v721 = !v711;
                  if(v721) {
                    var v726 = expressionToCheck.search(/\</);
                    var v720 = v726 != -1;
                    var v728 = !v720;
                    if(v728) {
                      var v727 = expressionToCheck.search(/\>/);
                      v720 = v727 != -1
                    }
                    v711 = v720
                  }
                  v700 = v711
                }
                v688 = v700
              }
              v675 = v688
            }
            v662 = v675
          }
          v632 = v662
        }
        v587 = v632
      }
      v521 = v587
    }
    v397 = v521
  }
  var v105 = v397;
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
    var v755 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v755[2], v755[1], v755[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v589 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v523 = v589 + "<head>\n";
  var v398 = v523 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v398 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v741 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v737 = v741 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v733 = v737 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v729 = v733 + "div.info {font-weight: bold}\n";
    var v722 = v729 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v713 = v722 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v702 = v713 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v690 = v702 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v690 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v664 = v677 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v634 = v664 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v590 = v634 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v524 = v590 + "td.many {color: #000000}\n";
    var v399 = v524 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v399 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v745 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v742 = v745 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v738 = v742 + "div.title {display: none}\n";
    var v734 = v738 + "div.info {font-weight: bold}\n";
    var v730 = v734 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v723 = v730 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v714 = v723 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v703 = v714 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v691 = v703 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v678 = v691 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v665 = v678 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v635 = v665 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v591 = v635 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v525 = v591 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v400 = v525 + "img {display: none}\n";
    var v115 = v400 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v592 = "</head>\n" + '<body class="main">\n';
  var v526 = v592 + '<div class="title">';
  var v401 = v526 + title$$6;
  var v117 = v401 + " results</div>\n";
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
    var v756 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v756[2], v756[1], v756[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v593 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v527 = v593 + "<head>\n";
  var v402 = v527 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v402 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v743 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v739 = v743 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v735 = v739 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v731 = v735 + "div.info {font-weight: bold}\n";
    var v724 = v731 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v715 = v724 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v704 = v715 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v692 = v704 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v679 = v692 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v666 = v679 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v636 = v666 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v594 = v636 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v528 = v594 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v403 = v528 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v403 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v747 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v746 = v747 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v744 = v746 + "div.title {display: none}\n";
    var v740 = v744 + "div.info {font-weight: bold}\n";
    var v736 = v740 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v732 = v736 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v725 = v732 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v716 = v725 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v705 = v716 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v693 = v705 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v680 = v693 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v667 = v680 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v637 = v667 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v595 = v637 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v529 = v595 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v404 = v529 + "img {display: none}\n";
    var v123 = v404 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v596 = "</head>\n" + '<body class="main">\n';
  var v530 = v596 + '<div class="title">';
  var v405 = v530 + title$$8;
  var v125 = v405 + " results</div>\n";
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
  var v406 = dnaSequence$$1.search(/./);
  var v126 = v406 != -1;
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
  var v407 = testArray[0];
  var v130 = v407 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v408 = testString.search(re$$2);
  var v131 = v408 == -1;
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
  var v409 = testNum.toFixed(3);
  var v134 = v409 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v410 = testNum.toPrecision(5);
  var v135 = v410 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v411 = theNumber$$1.search(/\d/);
  var v136 = v411 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v531 = emblFile.search(/ID/);
  var v412 = v531 == -1;
  var v533 = !v412;
  if(v533) {
    var v597 = emblFile.search(/AC/);
    var v532 = v597 == -1;
    var v599 = !v532;
    if(v599) {
      var v638 = emblFile.search(/DE/);
      var v598 = v638 == -1;
      var v640 = !v598;
      if(v640) {
        var v639 = emblFile.search(/SQ/);
        v598 = v639 == -1
      }
      v532 = v598
    }
    v412 = v532
  }
  var v137 = v412;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v413 = theNumber$$2.search(/\d/);
  var v138 = v413 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v414 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v414 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v415 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v415 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v416 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v416 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v534 = genBankFile.search(/LOCUS/);
  var v417 = v534 == -1;
  var v536 = !v417;
  if(v536) {
    var v600 = genBankFile.search(/DEFINITION/);
    var v535 = v600 == -1;
    var v602 = !v535;
    if(v602) {
      var v641 = genBankFile.search(/ACCESSION/);
      var v601 = v641 == -1;
      var v643 = !v601;
      if(v643) {
        var v642 = genBankFile.search(/ORIGIN/);
        v601 = v642 == -1
      }
      v535 = v601
    }
    v417 = v535
  }
  var v143 = v417;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v537 = genBankFile$$1.search(/LOCUS/);
  var v418 = v537 == -1;
  var v539 = !v418;
  if(v539) {
    var v603 = genBankFile$$1.search(/DEFINITION/);
    var v538 = v603 == -1;
    var v605 = !v538;
    if(v605) {
      var v644 = genBankFile$$1.search(/ACCESSION/);
      var v604 = v644 == -1;
      var v646 = !v604;
      if(v646) {
        var v645 = genBankFile$$1.search(/ORIGIN/);
        v604 = v645 == -1
      }
      v538 = v604
    }
    v418 = v538
  }
  var v144 = v418;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v419 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v419 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v540 = emblFile$$1.search(/ID/);
  var v420 = v540 == -1;
  var v542 = !v420;
  if(v542) {
    var v606 = emblFile$$1.search(/AC/);
    var v541 = v606 == -1;
    var v608 = !v541;
    if(v608) {
      var v647 = emblFile$$1.search(/DE/);
      var v607 = v647 == -1;
      var v649 = !v607;
      if(v649) {
        var v648 = emblFile$$1.search(/SQ/);
        v607 = v648 == -1
      }
      v541 = v607
    }
    v420 = v541
  }
  var v146 = v420;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v421 = emblFile$$1.search(/^FT/m);
  var v147 = v421 == -1;
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
    var v422 = basePerLine / groupSize;
    var v152 = j$$6 <= v422;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v423 = k + i$$5;
        var v150 = text$$10.charAt(v423);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v424 = basePerLine / groupSize;
      v152 = j$$6 <= v424
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
    var v425 = adjustment < 0;
    if(v425) {
      v425 = adjusted >= 0
    }
    var v156 = v425;
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
    var v426 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v426;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v427 = i$$6 + k$$1;
        var v157 = v427 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v428 = k$$1 + i$$6;
        var v159 = text$$12.charAt(v428);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v429 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v429, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v430 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v430
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v609 = adjustNumbering(lineNum, numberingAdjustment);
      var v543 = rightNum(v609, "", 8, tabIn$$3);
      var v431 = v543 + lineOfText$$1;
      var v167 = v431 + "\n";
      JAMScript.call(v166.write, v166, [v167]);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v610 = adjustNumbering(lineNum, numberingAdjustment);
        var v544 = rightNum(v610, "", 8, tabIn$$3);
        var v545 = complement(lineOfText$$1);
        var v432 = v544 + v545;
        var v169 = v432 + "\n";
        JAMScript.call(v168.write, v168, [v169]);
        var v170 = outputWindow.document;
        JAMScript.call(v170.write, v170, ["\n"])
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v546 = lineOfText$$1;
        var v547 = adjustNumbering(i$$6, numberingAdjustment);
        var v433 = v546 + v547;
        var v173 = v433 + "\n";
        JAMScript.call(v172.write, v172, [v173]);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v548 = complement(lineOfText$$1);
          var v549 = adjustNumbering(i$$6, numberingAdjustment);
          var v434 = v548 + v549;
          var v175 = v434 + "\n";
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
            var v435 = complement(lineOfText$$1);
            var v183 = v435 + "\n";
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
    var v436 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v436;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v437 = i$$7 + k$$2;
        var v190 = v437 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v438 = k$$2 + i$$7;
        var v192 = text$$13.charAt(v438);
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
      var v439 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v439
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v550 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v440 = v550 + lineOfText$$2;
      var v200 = v440 + "\n";
      JAMScript.call(v199.write, v199, [v200])
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v441 = lineOfText$$2 + i$$7;
        var v202 = v441 + "\n";
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
  var v551 = sequence$$13.length;
  var v442 = v551 <= firstIndexToMutate;
  var v553 = !v442;
  if(v553) {
    var v552 = lastIndexToMutate < 0;
    var v611 = !v552;
    if(v611) {
      v552 = lastIndexToMutate <= firstIndexToMutate
    }
    v442 = v552
  }
  var v211 = v442;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v443 = Math.random();
    var v212 = v443 * maxNum;
    randNum = Math.floor(v212);
    var v444 = randNum < firstIndexToMutate;
    var v554 = !v444;
    if(v554) {
      v444 = randNum > lastIndexToMutate
    }
    var v213 = v444;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v445 = Math.random();
      var v446 = components$$1.length;
      var v214 = v445 * v446;
      componentsIndex = Math.round(v214);
      var v447 = components$$1.length;
      var v215 = componentsIndex == v447;
      if(v215) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v448 = components$$1[componentsIndex]
      }
      var v216 = v448 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v449 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v450 = components$$1[componentsIndex]
    }
    var v217 = v449 + v450;
    var v451 = randNum + 1;
    var v452 = sequence$$13.length;
    var v218 = sequence$$13.substring(v451, v452);
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
    var v453 = Math.random();
    var v454 = components$$2.length;
    var v222 = v453 * v454;
    tempNum$$1 = Math.floor(v222);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v455 = sequence$$14.length;
    var v225 = v455 == 60;
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
    var v612 = sequence$$15.length;
    var v555 = v612 - lookAhead;
    var v556 = sequence$$15.length;
    var v456 = sequence$$15.substring(v555, v556);
    var v230 = v456 + sequence$$15;
    var v231 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAMScript.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v234 = outputWindow.document;
  var v613 = '<tr><td class="title" width="200px">' + "Site:";
  var v557 = v613 + '</td><td class="title">';
  var v457 = v557 + "Positions:";
  var v235 = v457 + "</td></tr>\n";
  JAMScript.call(v234.write, v234, [v235]);
  var i$$9 = 0;
  var v458 = arrayOfItems.length;
  var v251 = i$$9 < v458;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v459 = arrayOfItems[i$$9]
    }
    var v236 = v459.match(/\/.+\//);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v614 = arrayOfItems[i$$9]
    }
    var v558 = v614.match(/\)\D*\d+/);
    var v460 = v558.toString();
    var v237 = v460.replace(/\)\D*/, "");
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v461 = matchPosition >= lowerLimit;
      if(v461) {
        v461 = matchPosition < upperLimit
      }
      var v241 = v461;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v462 = matchPosition - shiftValue;
        var v240 = v462 + 1;
        tempString$$1 = v239 + v240
      }
      var v463 = matchExp.lastIndex;
      var v559 = RegExp.lastMatch;
      var v464 = v559.length;
      var v242 = v463 - v464;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v465 = tempString$$1.search(/\d/);
    var v244 = v465 != -1;
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
    var v694 = '<tr><td class="' + backGroundClass;
    var v681 = v694 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v717 = arrayOfItems[i$$9]
    }
    var v706 = v717.match(/\([^\(]+\)/);
    var v695 = v706.toString();
    var v682 = v695.replace(/\(|\)/g, "");
    var v668 = v681 + v682;
    var v650 = v668 + '</td><td class="';
    var v615 = v650 + backGroundClass;
    var v560 = v615 + '">';
    var v466 = v560 + tempString$$1;
    var v250 = v466 + "</td></tr>\n";
    JAMScript.call(v249.write, v249, [v250]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v467 = arrayOfItems.length;
    v251 = i$$9 < v467
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
  var v669 = '<tr><td class="title">' + "Pattern:";
  var v651 = v669 + '</td><td class="title">';
  var v616 = v651 + "Times found:";
  var v561 = v616 + '</td><td class="title">';
  var v468 = v561 + "Percentage:";
  var v255 = v468 + "</td></tr>\n";
  JAMScript.call(v254.write, v254, [v255]);
  var i$$10 = 0;
  var v469 = arrayOfItems$$1.length;
  var v264 = i$$10 < v469;
  for(;v264;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v470 = arrayOfItems$$1[i$$10]
    }
    var v256 = v470.match(/\/[^\/]+\//);
    var matchExp$$1 = v256 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v471 = sequence$$16.search(matchExp$$1);
    var v258 = v471 != -1;
    if(v258) {
      var v257 = sequence$$16.match(matchExp$$1);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v562 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v652 = arrayOfItems$$1[i$$10]
    }
    var v617 = v652.match(/\d+/);
    var v563 = parseFloat(v617);
    var v472 = v562 - v563;
    var v261 = v472 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v473 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v618 = arrayOfItems$$1[i$$10]
      }
      var v564 = v618.match(/\d+/);
      var v474 = parseFloat(v564);
      var v260 = v473 - v474;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v718 = arrayOfItems$$1[i$$10]
    }
    var v707 = v718.match(/\([^\(]+\)\b/);
    var v696 = v707.toString();
    var v683 = v696.replace(/\(|\)/g, "");
    var v670 = "<tr><td>" + v683;
    var v653 = v670 + "</td><td>";
    var v619 = v653 + tempNumber;
    var v565 = v619 + "</td><td>";
    var v566 = percentage.toFixed(2);
    var v475 = v565 + v566;
    var v263 = v475 + "</td></tr>\n";
    JAMScript.call(v262.write, v262, [v263]);
    i$$10 = i$$10 + 1;
    var v476 = arrayOfItems$$1.length;
    v264 = i$$10 < v476
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
  var v477 = sequence$$17.length;
  var v272 = v477 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v478 = Math.random();
    var v266 = v478 * maxNum$$1;
    randNum$$1 = Math.floor(v266);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v267, v268);
    sequence$$17 = tempString1 + tempString2;
    var v479 = tempSeq.length;
    var v271 = v479 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAMScript.call(v269.write, v269, [v270]);
      tempSeq = ""
    }
    var v480 = sequence$$17.length;
    v272 = v480 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAMScript.call(v273.write, v273, [v274]);
  return true
}
function genbankTrans(theDocument) {
  var maxInput$$3 = 2E5;
  var v481 = testScript();
  var v275 = v481 == false;
  if(v275) {
    return false
  }
  var v684 = theDocument.forms;
  var v671 = v684[0];
  var v654 = v671.elements;
  var v620 = v654[0];
  var v567 = checkFormElement(v620);
  var v482 = v567 == false;
  var v569 = !v482;
  if(v569) {
    var v708 = theDocument.forms;
    var v697 = v708[0];
    var v685 = v697.elements;
    var v672 = v685[0];
    var v655 = v672.value;
    var v621 = verifyGenBankFeat(v655);
    var v568 = v621 == false;
    var v623 = !v568;
    if(v623) {
      var v709 = theDocument.forms;
      var v698 = v709[0];
      var v686 = v698.elements;
      var v673 = v686[0];
      var v656 = v673.value;
      var v622 = checkTextLength(v656, maxInput$$3);
      v568 = v622 == false
    }
    v482 = v568
  }
  var v276 = v482;
  if(v276) {
    return false
  }
  openWindow("GenBank Trans Extractor");
  openPre();
  var v657 = theDocument.forms;
  var v624 = v657[0];
  var v570 = v624.elements;
  var v483 = v570[0];
  var v277 = v483.value;
  genBankTransExtract(v277);
  closePre();
  closeWindow();
  return true
}
function genBankTransExtract(genBankFile$$2) {
  var v278 = "_" + genBankFile$$2;
  genBankFile$$2 = v278 + "_";
  var recordArray = genBankFile$$2.split(/LOCUS\s\s\s[^\f\n\r]*/m);
  var i$$11 = 1;
  var v484 = recordArray.length;
  var v286 = i$$11 < v484;
  for(;v286;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v279 = recordArray[i$$11]
    }
    var mainArray = v279.split(/DEFINITION|ACCESSION|FEATURES|ORIGIN[^\f\n\r]*/);
    var v571 = mainArray[1];
    var v485 = v571.replace(/[\f\n\r\t]+$/g, "");
    var v280 = filterFastaTitle(v485);
    var title$$9 = v280 + "\n";
    var v281 = mainArray[4];
    var dnaSequenceArray = v281.split(/\/{2}/);
    var v282 = outputWindow.document;
    var v283 = title$$9 + "\n";
    JAMScript.call(v282.write, v282, [v283]);
    var v486 = dnaSequenceArray.length;
    var v284 = v486 == 1;
    if(v284) {
      alert("The entire GenBank file may not have been processed.");
      outputWindow.focus()
    }
    var v285 = mainArray[3];
    var featureArray = v285.split(/[\f\n\r] {5,12}\b/);
    showFeatureTrans(featureArray);
    i$$11 = i$$11 + 1;
    var v487 = recordArray.length;
    v286 = i$$11 < v487
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
  var v488 = arrayOfFeatures.length;
  var v298 = i$$12 < v488;
  for(;v298;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v572 = arrayOfFeatures[i$$12]
    }
    var v489 = v572.search(/\/translation/);
    var v297 = v489 != -1;
    if(v297) {
      var v287 = arrayOfFeatures;
      var v288 = i$$12;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v490 = arrayOfFeatures[i$$12]
      }
      var v754 = v490.replace(/[\[\]\*]/g, "");
      v287[v288] = v754;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v491 = arrayOfFeatures[i$$12]
      }
      var v289 = v491.match(/[^ \f\n\r\t\v]+ /);
      featureTitle = v289.toString();
      theTitle = new RegExp(featureTitle);
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v290 = arrayOfFeatures[i$$12]
      }
      removedTitle = v290.replace(theTitle, "");
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v492 = arrayOfFeatures[i$$12]
      }
      var v291 = v492.match(/\/[^\f\n\r]+/);
      firstQualifier = v291.toString();
      var v292 = outputWindow.document;
      var v625 = filterFastaTitle(featureTitle);
      var v573 = "&gt;" + v625;
      var v574 = filterFastaTitle(firstQualifier);
      var v493 = v573 + v574;
      var v293 = v493 + "\n";
      JAMScript.call(v292.write, v292, [v293]);
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v294 = arrayOfFeatures[i$$12]
      }
      translation = v294.match(/\/translation="[^"]+"/);
      translation = translation.toString();
      translation = translation.replace(/\/translation/, "");
      translation = removeNonProtein(translation);
      translation = addReturns(translation);
      var v295 = outputWindow.document;
      JAMScript.call(v295.write, v295, [translation]);
      translationFound = true;
      var v296 = outputWindow.document;
      JAMScript.call(v296.write, v296, ["\n\n"])
    }
    i$$12 = i$$12 + 1;
    var v494 = arrayOfFeatures.length;
    v298 = i$$12 < v494
  }
  var v300 = translationFound == false;
  if(v300) {
    var v299 = outputWindow.document;
    JAMScript.call(v299.write, v299, ["No translations were found.\n"])
  }
  return true
}
JAMScript.set(document, "onload", v2);
var v301 = document.getElementById("submitbtn");
JAMScript.set(v301, "onclick", v3);
var v302 = document.getElementById("clearbtn");
JAMScript.set(v302, "onclick", v4);

