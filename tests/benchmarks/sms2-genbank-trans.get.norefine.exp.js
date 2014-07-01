function v4() {
  var v569 = document.forms;
  var v489 = v569[0];
  var v298 = v489.elements;
  var v5 = v298[0];
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
  var v299 = document.main_form;
  var v7 = v299.main_submit;
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
  var v300 = arrayOfSequences.length;
  var v9 = v300 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v301 = arrayOfTitles.length;
  var v11 = i$$1 < v301;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v570 = arrayOfTitles[i$$1]
    }
    var v490 = v570.search(/\S/);
    var v302 = v490 == -1;
    var v492 = !v302;
    if(v492) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v621 = arrayOfSequences[i$$1]
      }
      var v571 = v621.search(/\S/);
      var v491 = v571 == -1;
      var v573 = !v491;
      if(v573) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v622 = arrayOfSequences[i$$1]
        }
        var v572 = v622.length;
        v491 = v572 != lengthOfAlign
      }
      v302 = v491
    }
    var v10 = v302;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v303 = arrayOfTitles.length;
    v11 = i$$1 < v303
  }
  return true
}
function checkCodonTable(codonTable) {
  var v493 = codonTable.search(/AmAcid/);
  var v304 = v493 == -1;
  var v495 = !v304;
  if(v495) {
    var v574 = codonTable.search(/Codon/);
    var v494 = v574 == -1;
    var v576 = !v494;
    if(v576) {
      var v623 = codonTable.search(/Number/);
      var v575 = v623 == -1;
      var v625 = !v575;
      if(v625) {
        var v653 = codonTable.search(/\/1000/);
        var v624 = v653 == -1;
        var v655 = !v624;
        if(v655) {
          var v654 = codonTable.search(/Fraction\s*\.\./);
          v624 = v654 == -1
        }
        v575 = v624
      }
      v494 = v575
    }
    v304 = v494
  }
  var v12 = v304;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v496 = formElement.value;
  var v305 = v496.search(/\S/);
  var v13 = v305 == -1;
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
  var v306 = arrayOfPatterns.length;
  var v16 = z$$2 < v306;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v497 = arrayOfPatterns[z$$2]
    }
    var v307 = v497.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v307 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v498 = arrayOfPatterns[z$$2]
    }
    var v308 = moreExpressionCheck(v498);
    var v15 = v308 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v309 = arrayOfPatterns.length;
    v16 = z$$2 < v309
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v310 = arrayOfPatterns.length;
  var v25 = j < v310;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v577 = arrayOfPatterns[j]
    }
    var v499 = v577.match(/\/.+\//);
    var v311 = v499 + "gi";
    if(JAMScript.isEval(eval)) {
      var v743 = eval("introspect(JAMScript.introspectors.processAll) { " + v311 + " }")
    }else {
      var v743 = JAMScript.call(eval, null, [v311])
    }
    v19[v20] = v743;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v500 = arrayOfPatterns[j]
    }
    var v312 = v500.match(/=[a-zA-Z\*]/);
    var v744 = v312.toString();
    v21[v22] = v744;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v313 = geneticCodeMatchResult[j]
    }
    var v745 = v313.replace(/=/g, "");
    v23[v24] = v745;
    j = j + 1;
    var v314 = arrayOfPatterns.length;
    v25 = j < v314
  }
  var i$$2 = 0;
  var v501 = testSequence.length;
  var v315 = v501 - 3;
  var v32 = i$$2 <= v315;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v316 = geneticCodeMatchExp.length;
    var v30 = j < v316;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v502 = geneticCodeMatchExp[j]
      }
      var v317 = codon.search(v502);
      var v29 = v317 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v318 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v318 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v319 = geneticCodeMatchExp.length;
      v30 = j < v319
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v503 = testSequence.length;
    var v320 = v503 - 3;
    v32 = i$$2 <= v320
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v321 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v321;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v504 = arrayOfPatterns$$1[z$$3]
    }
    var v322 = v504.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v322 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v323 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v323
  }
  var i$$3 = 0;
  var v324 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v324;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v505 = arrayOfPatterns$$1[i$$3]
    }
    var v325 = "[" + v505;
    var v35 = v325 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v326 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v326;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v506 = arrayOfPatterns$$1[j$$1]
      }
      var v327 = v506.search(re);
      var v36 = v327 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v328 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v328
    }
    i$$3 = i$$3 + 1;
    var v329 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v329
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v330 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v330;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v507 = arrayOfPatterns$$2[z$$4]
    }
    var v331 = v507.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v331 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v508 = arrayOfPatterns$$2[z$$4]
    }
    var v332 = moreExpressionCheck(v508);
    var v40 = v332 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v333 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v333
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v578 = getSequenceFromFasta(text$$7);
  var v509 = v578.replace(/[^A-Za-z]/g, "");
  var v334 = v509.length;
  var v43 = v334 > maxInput;
  if(v43) {
    var v335 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v335 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v336 = text$$8.length;
  var v45 = v336 > maxInput$$1;
  if(v45) {
    var v337 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v337 + " characters.";
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
  var v338 = alignArray.length;
  var v52 = v338 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v339 = alignArray.length;
  var v54 = i$$4 < v339;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v510 = alignArray[i$$4]
    }
    var v340 = v510.search(/[^\s]+\s/);
    var v53 = v340 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v341 = alignArray.length;
    v54 = i$$4 < v341
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
  var v342 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v342 != -1;
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
  var v343 = sequence$$2.length;
  var v58 = "&gt;results for " + v343;
  var stringToReturn = v58 + " residue sequence ";
  var v344 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v344 != -1;
  if(v60) {
    var v345 = stringToReturn + '"';
    var v59 = v345 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v346 = stringToReturn + ' starting "';
  var v347 = sequence$$2.substring(0, 10);
  var v61 = v346 + v347;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v348 = sequenceOne.length;
  var v62 = "Search results for " + v348;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v349 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v349 != -1;
  if(v64) {
    var v350 = stringToReturn$$1 + '"';
    var v63 = v350 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v351 = stringToReturn$$1 + ' starting "';
  var v352 = sequenceOne.substring(0, 10);
  var v65 = v351 + v352;
  stringToReturn$$1 = v65 + '"\n';
  var v353 = stringToReturn$$1 + "and ";
  var v354 = sequenceTwo.length;
  var v66 = v353 + v354;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v355 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v355 != -1;
  if(v68) {
    var v356 = stringToReturn$$1 + '"';
    var v67 = v356 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v357 = stringToReturn$$1 + ' starting "';
  var v358 = sequenceTwo.substring(0, 10);
  var v69 = v357 + v358;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v359 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v359;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v579 = arrayOfPatterns$$3[j$$2]
    }
    var v511 = v579.match(/\/.+\//);
    var v360 = v511 + "gi";
    if(JAMScript.isEval(eval)) {
      var v746 = eval("introspect(JAMScript.introspectors.processAll) { " + v360 + " }")
    }else {
      var v746 = JAMScript.call(eval, null, [v360])
    }
    v72[v73] = v746;
    j$$2 = j$$2 + 1;
    var v361 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v361
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v362 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v362;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v512 = arrayOfPatterns$$4[j$$3]
    }
    var v363 = v512.match(/=[a-zA-Z\*]/);
    var v747 = v363.toString();
    v76[v77] = v747;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v364 = geneticCodeMatchResult$$1[j$$3]
    }
    var v748 = v364.replace(/=/g, "");
    v78[v79] = v748;
    j$$3 = j$$3 + 1;
    var v365 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v365
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v366 = sequence$$3.length;
  var v81 = "Results for " + v366;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v367 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v367 != -1;
  if(v83) {
    var v368 = stringToReturn$$2 + '"';
    var v82 = v368 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v369 = stringToReturn$$2 + ' starting "';
  var v370 = sequence$$3.substring(0, 10);
  var v84 = v369 + v370;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v513 = "Results for " + topology;
  var v371 = v513 + " ";
  var v372 = sequence$$4.length;
  var v86 = v371 + v372;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v373 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v373 != -1;
  if(v88) {
    var v374 = stringToReturn$$3 + '"';
    var v87 = v374 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v375 = stringToReturn$$3 + ' starting "';
  var v376 = sequence$$4.substring(0, 10);
  var v89 = v375 + v376;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v377 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v377;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v378 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v378 != -1;
  if(v93) {
    var v379 = stringToReturn$$4 + '"';
    var v92 = v379 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v380 = stringToReturn$$4 + ' starting "';
  var v381 = sequenceOne$$1.substring(0, 10);
  var v94 = v380 + v381;
  stringToReturn$$4 = v94 + '"\n';
  var v382 = stringToReturn$$4 + "and ";
  var v383 = sequenceTwo$$1.length;
  var v95 = v382 + v383;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v384 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v384 != -1;
  if(v97) {
    var v385 = stringToReturn$$4 + '"';
    var v96 = v385 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v386 = stringToReturn$$4 + ' starting "';
  var v387 = sequenceTwo$$1.substring(0, 10);
  var v98 = v386 + v387;
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
    var v388 = Math.random();
    var v389 = components.length;
    var v100 = v388 * v389;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v390 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v390 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v391 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v391 != -1;
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
  var v514 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v392 = v514 != -1;
  var v516 = !v392;
  if(v516) {
    var v580 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v515 = v580 != -1;
    var v582 = !v515;
    if(v582) {
      var v626 = expressionToCheck.search(/\[\]/);
      var v581 = v626 != -1;
      var v628 = !v581;
      if(v628) {
        var v656 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v627 = v656 != -1;
        var v658 = !v627;
        if(v658) {
          var v669 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v657 = v669 != -1;
          var v671 = !v657;
          if(v671) {
            var v682 = expressionToCheck.search(/\|\|/);
            var v670 = v682 != -1;
            var v684 = !v670;
            if(v684) {
              var v694 = expressionToCheck.search(/\/\|/);
              var v683 = v694 != -1;
              var v696 = !v683;
              if(v696) {
                var v705 = expressionToCheck.search(/\|\//);
                var v695 = v705 != -1;
                var v707 = !v695;
                if(v707) {
                  var v714 = expressionToCheck.search(/\[.\]/);
                  var v706 = v714 != -1;
                  var v716 = !v706;
                  if(v716) {
                    var v721 = expressionToCheck.search(/\</);
                    var v715 = v721 != -1;
                    var v723 = !v715;
                    if(v723) {
                      var v722 = expressionToCheck.search(/\>/);
                      v715 = v722 != -1
                    }
                    v706 = v715
                  }
                  v695 = v706
                }
                v683 = v695
              }
              v670 = v683
            }
            v657 = v670
          }
          v627 = v657
        }
        v581 = v627
      }
      v515 = v581
    }
    v392 = v515
  }
  var v105 = v392;
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
    var v750 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v750[2], v750[1], v750[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v583 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v517 = v583 + "<head>\n";
  var v393 = v517 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v393 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v736 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v732 = v736 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v728 = v732 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v724 = v728 + "div.info {font-weight: bold}\n";
    var v717 = v724 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v708 = v717 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v697 = v708 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v685 = v697 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v672 = v685 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v659 = v672 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v629 = v659 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v584 = v629 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v518 = v584 + "td.many {color: #000000}\n";
    var v394 = v518 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v394 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v740 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v737 = v740 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v733 = v737 + "div.title {display: none}\n";
    var v729 = v733 + "div.info {font-weight: bold}\n";
    var v725 = v729 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v718 = v725 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v709 = v718 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v698 = v709 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v686 = v698 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v673 = v686 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v660 = v673 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v630 = v660 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v585 = v630 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v519 = v585 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v395 = v519 + "img {display: none}\n";
    var v115 = v395 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v586 = "</head>\n" + '<body class="main">\n';
  var v520 = v586 + '<div class="title">';
  var v396 = v520 + title$$6;
  var v117 = v396 + " results</div>\n";
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
    var v751 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v751[2], v751[1], v751[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v587 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v521 = v587 + "<head>\n";
  var v397 = v521 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v397 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v738 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v734 = v738 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v730 = v734 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v726 = v730 + "div.info {font-weight: bold}\n";
    var v719 = v726 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v710 = v719 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v699 = v710 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v687 = v699 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v674 = v687 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v661 = v674 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v631 = v661 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v588 = v631 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v522 = v588 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v398 = v522 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v398 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v742 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v741 = v742 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v739 = v741 + "div.title {display: none}\n";
    var v735 = v739 + "div.info {font-weight: bold}\n";
    var v731 = v735 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v727 = v731 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v720 = v727 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v711 = v720 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v700 = v711 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v688 = v700 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v675 = v688 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v662 = v675 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v632 = v662 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v589 = v632 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v523 = v589 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v399 = v523 + "img {display: none}\n";
    var v123 = v399 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v590 = "</head>\n" + '<body class="main">\n';
  var v524 = v590 + '<div class="title">';
  var v400 = v524 + title$$8;
  var v125 = v400 + " results</div>\n";
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
  var v401 = dnaSequence$$1.search(/./);
  var v126 = v401 != -1;
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
  var v402 = testArray[0];
  var v130 = v402 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v403 = testString.search(re$$2);
  var v131 = v403 == -1;
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
  var v404 = testNum.toFixed(3);
  var v134 = v404 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v405 = testNum.toPrecision(5);
  var v135 = v405 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v406 = theNumber$$1.search(/\d/);
  var v136 = v406 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v525 = emblFile.search(/ID/);
  var v407 = v525 == -1;
  var v527 = !v407;
  if(v527) {
    var v591 = emblFile.search(/AC/);
    var v526 = v591 == -1;
    var v593 = !v526;
    if(v593) {
      var v633 = emblFile.search(/DE/);
      var v592 = v633 == -1;
      var v635 = !v592;
      if(v635) {
        var v634 = emblFile.search(/SQ/);
        v592 = v634 == -1
      }
      v526 = v592
    }
    v407 = v526
  }
  var v137 = v407;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v408 = theNumber$$2.search(/\d/);
  var v138 = v408 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v409 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v409 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v410 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v410 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v411 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v411 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v528 = genBankFile.search(/LOCUS/);
  var v412 = v528 == -1;
  var v530 = !v412;
  if(v530) {
    var v594 = genBankFile.search(/DEFINITION/);
    var v529 = v594 == -1;
    var v596 = !v529;
    if(v596) {
      var v636 = genBankFile.search(/ACCESSION/);
      var v595 = v636 == -1;
      var v638 = !v595;
      if(v638) {
        var v637 = genBankFile.search(/ORIGIN/);
        v595 = v637 == -1
      }
      v529 = v595
    }
    v412 = v529
  }
  var v143 = v412;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v531 = genBankFile$$1.search(/LOCUS/);
  var v413 = v531 == -1;
  var v533 = !v413;
  if(v533) {
    var v597 = genBankFile$$1.search(/DEFINITION/);
    var v532 = v597 == -1;
    var v599 = !v532;
    if(v599) {
      var v639 = genBankFile$$1.search(/ACCESSION/);
      var v598 = v639 == -1;
      var v641 = !v598;
      if(v641) {
        var v640 = genBankFile$$1.search(/ORIGIN/);
        v598 = v640 == -1
      }
      v532 = v598
    }
    v413 = v532
  }
  var v144 = v413;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v414 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v414 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v534 = emblFile$$1.search(/ID/);
  var v415 = v534 == -1;
  var v536 = !v415;
  if(v536) {
    var v600 = emblFile$$1.search(/AC/);
    var v535 = v600 == -1;
    var v602 = !v535;
    if(v602) {
      var v642 = emblFile$$1.search(/DE/);
      var v601 = v642 == -1;
      var v644 = !v601;
      if(v644) {
        var v643 = emblFile$$1.search(/SQ/);
        v601 = v643 == -1
      }
      v535 = v601
    }
    v415 = v535
  }
  var v146 = v415;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v416 = emblFile$$1.search(/^FT/m);
  var v147 = v416 == -1;
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
    var v417 = basePerLine / groupSize;
    var v151 = j$$6 <= v417;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v418 = k + i$$5;
        var v149 = text$$10.charAt(v418);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v419 = basePerLine / groupSize;
      v151 = j$$6 <= v419
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
    var v420 = adjustment < 0;
    if(v420) {
      v420 = adjusted >= 0
    }
    var v155 = v420;
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
    var v421 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v421;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v422 = i$$6 + k$$1;
        var v156 = v422 >= stopBase$$2;
        if(v156) {
          break
        }
        var v423 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v423);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v424 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v424, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v425 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v425
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v603 = adjustNumbering(lineNum, numberingAdjustment);
      var v537 = rightNum(v603, "", 8, tabIn$$3);
      var v426 = v537 + lineOfText$$1;
      var v164 = v426 + "\n";
      JAMScript.call(v163.write, v163, [v164]);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v604 = adjustNumbering(lineNum, numberingAdjustment);
        var v538 = rightNum(v604, "", 8, tabIn$$3);
        var v539 = complement(lineOfText$$1);
        var v427 = v538 + v539;
        var v166 = v427 + "\n";
        JAMScript.call(v165.write, v165, [v166]);
        var v167 = outputWindow.document;
        JAMScript.call(v167.write, v167, ["\n"])
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v540 = adjustNumbering(i$$6, numberingAdjustment);
        var v428 = lineOfText$$1 + v540;
        var v170 = v428 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v541 = complement(lineOfText$$1);
          var v542 = adjustNumbering(i$$6, numberingAdjustment);
          var v429 = v541 + v542;
          var v172 = v429 + "\n";
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
            var v430 = complement(lineOfText$$1);
            var v180 = v430 + "\n";
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
    var v431 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v431;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v432 = i$$7 + k$$2;
        var v187 = v432 >= stopBase$$3;
        if(v187) {
          break
        }
        var v433 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v433);
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
      var v434 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v434
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v543 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v435 = v543 + lineOfText$$2;
      var v195 = v435 + "\n";
      JAMScript.call(v194.write, v194, [v195])
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v436 = lineOfText$$2 + i$$7;
        var v197 = v436 + "\n";
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
  var v544 = sequence$$13.length;
  var v437 = v544 <= firstIndexToMutate;
  var v546 = !v437;
  if(v546) {
    var v545 = lastIndexToMutate < 0;
    var v605 = !v545;
    if(v605) {
      v545 = lastIndexToMutate <= firstIndexToMutate
    }
    v437 = v545
  }
  var v206 = v437;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v438 = Math.random();
    var v207 = v438 * maxNum;
    randNum = Math.floor(v207);
    var v439 = randNum < firstIndexToMutate;
    var v547 = !v439;
    if(v547) {
      v439 = randNum > lastIndexToMutate
    }
    var v208 = v439;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v440 = Math.random();
      var v441 = components$$1.length;
      var v209 = v440 * v441;
      componentsIndex = Math.round(v209);
      var v442 = components$$1.length;
      var v210 = componentsIndex == v442;
      if(v210) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v443 = components$$1[componentsIndex]
      }
      var v211 = v443 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v444 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v445 = components$$1[componentsIndex]
    }
    var v212 = v444 + v445;
    var v446 = randNum + 1;
    var v447 = sequence$$13.length;
    var v213 = sequence$$13.substring(v446, v447);
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
    var v448 = Math.random();
    var v449 = components$$2.length;
    var v217 = v448 * v449;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v450 = sequence$$14.length;
    var v220 = v450 == 60;
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
    var v606 = sequence$$15.length;
    var v548 = v606 - lookAhead;
    var v549 = sequence$$15.length;
    var v451 = sequence$$15.substring(v548, v549);
    var v225 = v451 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  JAMScript.call(v228.write, v228, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v229 = outputWindow.document;
  var v607 = '<tr><td class="title" width="200px">' + "Site:";
  var v550 = v607 + '</td><td class="title">';
  var v452 = v550 + "Positions:";
  var v230 = v452 + "</td></tr>\n";
  JAMScript.call(v229.write, v229, [v230]);
  var i$$9 = 0;
  var v453 = arrayOfItems.length;
  var v246 = i$$9 < v453;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v454 = arrayOfItems[i$$9]
    }
    var v231 = v454.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v608 = arrayOfItems[i$$9]
    }
    var v551 = v608.match(/\)\D*\d+/);
    var v455 = v551.toString();
    var v232 = v455.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v456 = matchPosition >= lowerLimit;
      if(v456) {
        v456 = matchPosition < upperLimit
      }
      var v236 = v456;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v457 = matchPosition - shiftValue;
        var v235 = v457 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v552 = matchExp.lastIndex;
      var v609 = RegExp.lastMatch;
      var v553 = v609.length;
      var v458 = v552 - v553;
      v237.lastIndex = v458 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v459 = tempString$$1.search(/\d/);
    var v239 = v459 != -1;
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
    var v689 = '<tr><td class="' + backGroundClass;
    var v676 = v689 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v712 = arrayOfItems[i$$9]
    }
    var v701 = v712.match(/\([^\(]+\)/);
    var v690 = v701.toString();
    var v677 = v690.replace(/\(|\)/g, "");
    var v663 = v676 + v677;
    var v645 = v663 + '</td><td class="';
    var v610 = v645 + backGroundClass;
    var v554 = v610 + '">';
    var v460 = v554 + tempString$$1;
    var v245 = v460 + "</td></tr>\n";
    JAMScript.call(v244.write, v244, [v245]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v461 = arrayOfItems.length;
    v246 = i$$9 < v461
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
  var v664 = '<tr><td class="title">' + "Pattern:";
  var v646 = v664 + '</td><td class="title">';
  var v611 = v646 + "Times found:";
  var v555 = v611 + '</td><td class="title">';
  var v462 = v555 + "Percentage:";
  var v250 = v462 + "</td></tr>\n";
  JAMScript.call(v249.write, v249, [v250]);
  var i$$10 = 0;
  var v463 = arrayOfItems$$1.length;
  var v259 = i$$10 < v463;
  for(;v259;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v464 = arrayOfItems$$1[i$$10]
    }
    var v251 = v464.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v465 = sequence$$16.search(matchExp$$1);
    var v253 = v465 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v556 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v647 = arrayOfItems$$1[i$$10]
    }
    var v612 = v647.match(/\d+/);
    var v557 = parseFloat(v612);
    var v466 = v556 - v557;
    var v256 = v466 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v467 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v613 = arrayOfItems$$1[i$$10]
      }
      var v558 = v613.match(/\d+/);
      var v468 = parseFloat(v558);
      var v255 = v467 - v468;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v713 = arrayOfItems$$1[i$$10]
    }
    var v702 = v713.match(/\([^\(]+\)\b/);
    var v691 = v702.toString();
    var v678 = v691.replace(/\(|\)/g, "");
    var v665 = "<tr><td>" + v678;
    var v648 = v665 + "</td><td>";
    var v614 = v648 + tempNumber;
    var v559 = v614 + "</td><td>";
    var v560 = percentage.toFixed(2);
    var v469 = v559 + v560;
    var v258 = v469 + "</td></tr>\n";
    JAMScript.call(v257.write, v257, [v258]);
    i$$10 = i$$10 + 1;
    var v470 = arrayOfItems$$1.length;
    v259 = i$$10 < v470
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
  var v471 = sequence$$17.length;
  var v267 = v471 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v472 = Math.random();
    var v261 = v472 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v473 = tempSeq.length;
    var v266 = v473 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      JAMScript.call(v264.write, v264, [v265]);
      tempSeq = ""
    }
    var v474 = sequence$$17.length;
    v267 = v474 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  JAMScript.call(v268.write, v268, [v269]);
  return true
}
function genbankTrans(theDocument) {
  var maxInput$$3 = 2E5;
  var v475 = testScript();
  var v270 = v475 == false;
  if(v270) {
    return false
  }
  var v679 = theDocument.forms;
  var v666 = v679[0];
  var v649 = v666.elements;
  var v615 = v649[0];
  var v561 = checkFormElement(v615);
  var v476 = v561 == false;
  var v563 = !v476;
  if(v563) {
    var v703 = theDocument.forms;
    var v692 = v703[0];
    var v680 = v692.elements;
    var v667 = v680[0];
    var v650 = v667.value;
    var v616 = verifyGenBankFeat(v650);
    var v562 = v616 == false;
    var v618 = !v562;
    if(v618) {
      var v704 = theDocument.forms;
      var v693 = v704[0];
      var v681 = v693.elements;
      var v668 = v681[0];
      var v651 = v668.value;
      var v617 = checkTextLength(v651, maxInput$$3);
      v562 = v617 == false
    }
    v476 = v562
  }
  var v271 = v476;
  if(v271) {
    return false
  }
  openWindow("GenBank Trans Extractor");
  openPre();
  var v652 = theDocument.forms;
  var v619 = v652[0];
  var v564 = v619.elements;
  var v477 = v564[0];
  var v272 = v477.value;
  genBankTransExtract(v272);
  closePre();
  closeWindow();
  return true
}
function genBankTransExtract(genBankFile$$2) {
  var v273 = "_" + genBankFile$$2;
  genBankFile$$2 = v273 + "_";
  var recordArray = genBankFile$$2.split(/LOCUS\s\s\s[^\f\n\r]*/m);
  var i$$11 = 1;
  var v478 = recordArray.length;
  var v281 = i$$11 < v478;
  for(;v281;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v274 = recordArray[i$$11]
    }
    var mainArray = v274.split(/DEFINITION|ACCESSION|FEATURES|ORIGIN[^\f\n\r]*/);
    var v565 = mainArray[1];
    var v479 = v565.replace(/[\f\n\r\t]+$/g, "");
    var v275 = filterFastaTitle(v479);
    var title$$9 = v275 + "\n";
    var v276 = mainArray[4];
    var dnaSequenceArray = v276.split(/\/{2}/);
    var v277 = outputWindow.document;
    var v278 = title$$9 + "\n";
    JAMScript.call(v277.write, v277, [v278]);
    var v480 = dnaSequenceArray.length;
    var v279 = v480 == 1;
    if(v279) {
      alert("The entire GenBank file may not have been processed.");
      outputWindow.focus()
    }
    var v280 = mainArray[3];
    var featureArray = v280.split(/[\f\n\r] {5,12}\b/);
    showFeatureTrans(featureArray);
    i$$11 = i$$11 + 1;
    var v481 = recordArray.length;
    v281 = i$$11 < v481
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
  var v482 = arrayOfFeatures.length;
  var v293 = i$$12 < v482;
  for(;v293;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v566 = arrayOfFeatures[i$$12]
    }
    var v483 = v566.search(/\/translation/);
    var v292 = v483 != -1;
    if(v292) {
      var v282 = arrayOfFeatures;
      var v283 = i$$12;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v484 = arrayOfFeatures[i$$12]
      }
      var v749 = v484.replace(/[\[\]\*]/g, "");
      v282[v283] = v749;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v485 = arrayOfFeatures[i$$12]
      }
      var v284 = v485.match(/[^ \f\n\r\t\v]+ /);
      featureTitle = v284.toString();
      theTitle = new RegExp(featureTitle);
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v285 = arrayOfFeatures[i$$12]
      }
      removedTitle = v285.replace(theTitle, "");
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v486 = arrayOfFeatures[i$$12]
      }
      var v286 = v486.match(/\/[^\f\n\r]+/);
      firstQualifier = v286.toString();
      var v287 = outputWindow.document;
      var v620 = filterFastaTitle(featureTitle);
      var v567 = "&gt;" + v620;
      var v568 = filterFastaTitle(firstQualifier);
      var v487 = v567 + v568;
      var v288 = v487 + "\n";
      JAMScript.call(v287.write, v287, [v288]);
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v289 = arrayOfFeatures[i$$12]
      }
      translation = v289.match(/\/translation="[^"]+"/);
      translation = translation.toString();
      translation = translation.replace(/\/translation/, "");
      translation = removeNonProtein(translation);
      translation = addReturns(translation);
      var v290 = outputWindow.document;
      JAMScript.call(v290.write, v290, [translation]);
      translationFound = true;
      var v291 = outputWindow.document;
      JAMScript.call(v291.write, v291, ["\n\n"])
    }
    i$$12 = i$$12 + 1;
    var v488 = arrayOfFeatures.length;
    v293 = i$$12 < v488
  }
  var v295 = translationFound == false;
  if(v295) {
    var v294 = outputWindow.document;
    JAMScript.call(v294.write, v294, ["No translations were found.\n"])
  }
  return true
}
JAMScript.set(document, "onload", v2);
var v296 = document.getElementById("submitbtn");
JAMScript.set(v296, "onclick", v3);
var v297 = document.getElementById("clearbtn");
JAMScript.set(v297, "onclick", v4);

