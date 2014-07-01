function v4() {
  var v557 = document.forms;
  var v481 = v557[0];
  var v293 = v481.elements;
  var v5 = v293[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    proteinGravy(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v294 = document.main_form;
  var v7 = v294.main_submit;
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
  var v295 = arrayOfSequences.length;
  var v9 = v295 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v296 = arrayOfTitles.length;
  var v11 = i$$1 < v296;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v558 = arrayOfTitles[i$$1]
    }
    var v482 = v558.search(/\S/);
    var v297 = v482 == -1;
    var v484 = !v297;
    if(v484) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v605 = arrayOfSequences[i$$1]
      }
      var v559 = v605.search(/\S/);
      var v483 = v559 == -1;
      var v561 = !v483;
      if(v561) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v606 = arrayOfSequences[i$$1]
        }
        var v560 = v606.length;
        v483 = v560 != lengthOfAlign
      }
      v297 = v483
    }
    var v10 = v297;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v298 = arrayOfTitles.length;
    v11 = i$$1 < v298
  }
  return true
}
function checkCodonTable(codonTable) {
  var v485 = codonTable.search(/AmAcid/);
  var v299 = v485 == -1;
  var v487 = !v299;
  if(v487) {
    var v562 = codonTable.search(/Codon/);
    var v486 = v562 == -1;
    var v564 = !v486;
    if(v564) {
      var v607 = codonTable.search(/Number/);
      var v563 = v607 == -1;
      var v609 = !v563;
      if(v609) {
        var v636 = codonTable.search(/\/1000/);
        var v608 = v636 == -1;
        var v638 = !v608;
        if(v638) {
          var v637 = codonTable.search(/Fraction\s*\.\./);
          v608 = v637 == -1
        }
        v563 = v608
      }
      v486 = v563
    }
    v299 = v486
  }
  var v12 = v299;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v488 = formElement.value;
  var v300 = v488.search(/\S/);
  var v13 = v300 == -1;
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
  var v301 = arrayOfPatterns.length;
  var v16 = z$$2 < v301;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v489 = arrayOfPatterns[z$$2]
    }
    var v302 = v489.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v302 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v490 = arrayOfPatterns[z$$2]
    }
    var v303 = moreExpressionCheck(v490);
    var v15 = v303 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v304 = arrayOfPatterns.length;
    v16 = z$$2 < v304
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v305 = arrayOfPatterns.length;
  var v25 = j < v305;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v565 = arrayOfPatterns[j]
    }
    var v491 = v565.match(/\/.+\//);
    var v306 = v491 + "gi";
    if(JAMScript.isEval(eval)) {
      var v721 = eval("introspect(JAMScript.introspectors.processAll) { " + v306 + " }")
    }else {
      var v721 = JAMScript.call(eval, null, [v306])
    }
    v19[v20] = v721;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v492 = arrayOfPatterns[j]
    }
    var v307 = v492.match(/=[a-zA-Z\*]/);
    var v722 = v307.toString();
    v21[v22] = v722;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v308 = geneticCodeMatchResult[j]
    }
    var v723 = v308.replace(/=/g, "");
    v23[v24] = v723;
    j = j + 1;
    var v309 = arrayOfPatterns.length;
    v25 = j < v309
  }
  var i$$2 = 0;
  var v493 = testSequence.length;
  var v310 = v493 - 3;
  var v32 = i$$2 <= v310;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v311 = geneticCodeMatchExp.length;
    var v30 = j < v311;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v494 = geneticCodeMatchExp[j]
      }
      var v312 = codon.search(v494);
      var v29 = v312 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v313 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v313 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v314 = geneticCodeMatchExp.length;
      v30 = j < v314
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v495 = testSequence.length;
    var v315 = v495 - 3;
    v32 = i$$2 <= v315
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v316 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v316;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v496 = arrayOfPatterns$$1[z$$3]
    }
    var v317 = v496.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v317 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v318 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v318
  }
  var i$$3 = 0;
  var v319 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v319;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v497 = arrayOfPatterns$$1[i$$3]
    }
    var v320 = "[" + v497;
    var v35 = v320 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v321 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v321;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v498 = arrayOfPatterns$$1[j$$1]
      }
      var v322 = v498.search(re);
      var v36 = v322 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v323 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v323
    }
    i$$3 = i$$3 + 1;
    var v324 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v324
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v325 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v325;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v499 = arrayOfPatterns$$2[z$$4]
    }
    var v326 = v499.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v326 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v500 = arrayOfPatterns$$2[z$$4]
    }
    var v327 = moreExpressionCheck(v500);
    var v40 = v327 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v328 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v328
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v566 = getSequenceFromFasta(text$$7);
  var v501 = v566.replace(/[^A-Za-z]/g, "");
  var v329 = v501.length;
  var v43 = v329 > maxInput;
  if(v43) {
    var v330 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v330 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v331 = text$$8.length;
  var v45 = v331 > maxInput$$1;
  if(v45) {
    var v332 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v332 + " characters.";
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
  var v333 = alignArray.length;
  var v52 = v333 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v334 = alignArray.length;
  var v54 = i$$4 < v334;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v502 = alignArray[i$$4]
    }
    var v335 = v502.search(/[^\s]+\s/);
    var v53 = v335 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v336 = alignArray.length;
    v54 = i$$4 < v336
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
  var v337 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v337 != -1;
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
  var v338 = sequence$$2.length;
  var v58 = "&gt;results for " + v338;
  var stringToReturn = v58 + " residue sequence ";
  var v339 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v339 != -1;
  if(v60) {
    var v340 = stringToReturn + '"';
    var v59 = v340 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v341 = stringToReturn + ' starting "';
  var v342 = sequence$$2.substring(0, 10);
  var v61 = v341 + v342;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v343 = sequenceOne.length;
  var v62 = "Search results for " + v343;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v344 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v344 != -1;
  if(v64) {
    var v345 = stringToReturn$$1 + '"';
    var v63 = v345 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v346 = stringToReturn$$1 + ' starting "';
  var v347 = sequenceOne.substring(0, 10);
  var v65 = v346 + v347;
  stringToReturn$$1 = v65 + '"\n';
  var v348 = stringToReturn$$1 + "and ";
  var v349 = sequenceTwo.length;
  var v66 = v348 + v349;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v350 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v350 != -1;
  if(v68) {
    var v351 = stringToReturn$$1 + '"';
    var v67 = v351 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v352 = stringToReturn$$1 + ' starting "';
  var v353 = sequenceTwo.substring(0, 10);
  var v69 = v352 + v353;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v354 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v354;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v567 = arrayOfPatterns$$3[j$$2]
    }
    var v503 = v567.match(/\/.+\//);
    var v355 = v503 + "gi";
    if(JAMScript.isEval(eval)) {
      var v724 = eval("introspect(JAMScript.introspectors.processAll) { " + v355 + " }")
    }else {
      var v724 = JAMScript.call(eval, null, [v355])
    }
    v72[v73] = v724;
    j$$2 = j$$2 + 1;
    var v356 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v356
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v357 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v357;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v504 = arrayOfPatterns$$4[j$$3]
    }
    var v358 = v504.match(/=[a-zA-Z\*]/);
    var v725 = v358.toString();
    v76[v77] = v725;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v359 = geneticCodeMatchResult$$1[j$$3]
    }
    var v726 = v359.replace(/=/g, "");
    v78[v79] = v726;
    j$$3 = j$$3 + 1;
    var v360 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v360
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v361 = sequence$$3.length;
  var v81 = "Results for " + v361;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v362 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v362 != -1;
  if(v83) {
    var v363 = stringToReturn$$2 + '"';
    var v82 = v363 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v364 = stringToReturn$$2 + ' starting "';
  var v365 = sequence$$3.substring(0, 10);
  var v84 = v364 + v365;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v505 = "Results for " + topology;
  var v366 = v505 + " ";
  var v367 = sequence$$4.length;
  var v86 = v366 + v367;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v368 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v368 != -1;
  if(v88) {
    var v369 = stringToReturn$$3 + '"';
    var v87 = v369 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v370 = stringToReturn$$3 + ' starting "';
  var v371 = sequence$$4.substring(0, 10);
  var v89 = v370 + v371;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v372 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v372;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v373 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v373 != -1;
  if(v93) {
    var v374 = stringToReturn$$4 + '"';
    var v92 = v374 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v375 = stringToReturn$$4 + ' starting "';
  var v376 = sequenceOne$$1.substring(0, 10);
  var v94 = v375 + v376;
  stringToReturn$$4 = v94 + '"\n';
  var v377 = stringToReturn$$4 + "and ";
  var v378 = sequenceTwo$$1.length;
  var v95 = v377 + v378;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v379 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v379 != -1;
  if(v97) {
    var v380 = stringToReturn$$4 + '"';
    var v96 = v380 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v381 = stringToReturn$$4 + ' starting "';
  var v382 = sequenceTwo$$1.substring(0, 10);
  var v98 = v381 + v382;
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
    var v383 = Math.random();
    var v384 = components.length;
    var v100 = v383 * v384;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v385 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v385 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v386 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v386 != -1;
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
  var v506 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v387 = v506 != -1;
  var v508 = !v387;
  if(v508) {
    var v568 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v507 = v568 != -1;
    var v570 = !v507;
    if(v570) {
      var v610 = expressionToCheck.search(/\[\]/);
      var v569 = v610 != -1;
      var v612 = !v569;
      if(v612) {
        var v639 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v611 = v639 != -1;
        var v641 = !v611;
        if(v641) {
          var v651 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v640 = v651 != -1;
          var v653 = !v640;
          if(v653) {
            var v663 = expressionToCheck.search(/\|\|/);
            var v652 = v663 != -1;
            var v665 = !v652;
            if(v665) {
              var v674 = expressionToCheck.search(/\/\|/);
              var v664 = v674 != -1;
              var v676 = !v664;
              if(v676) {
                var v683 = expressionToCheck.search(/\|\//);
                var v675 = v683 != -1;
                var v685 = !v675;
                if(v685) {
                  var v692 = expressionToCheck.search(/\[.\]/);
                  var v684 = v692 != -1;
                  var v694 = !v684;
                  if(v694) {
                    var v699 = expressionToCheck.search(/\</);
                    var v693 = v699 != -1;
                    var v701 = !v693;
                    if(v701) {
                      var v700 = expressionToCheck.search(/\>/);
                      v693 = v700 != -1
                    }
                    v684 = v693
                  }
                  v675 = v684
                }
                v664 = v675
              }
              v652 = v664
            }
            v640 = v652
          }
          v611 = v640
        }
        v569 = v611
      }
      v507 = v569
    }
    v387 = v507
  }
  var v105 = v387;
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
    var v727 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v727[2], v727[1], v727[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v571 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v509 = v571 + "<head>\n";
  var v388 = v509 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v388 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v714 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v710 = v714 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v706 = v710 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v702 = v706 + "div.info {font-weight: bold}\n";
    var v695 = v702 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v686 = v695 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v677 = v686 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v666 = v677 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v654 = v666 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v642 = v654 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v613 = v642 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v572 = v613 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v510 = v572 + "td.many {color: #000000}\n";
    var v389 = v510 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v389 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v718 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v715 = v718 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v711 = v715 + "div.title {display: none}\n";
    var v707 = v711 + "div.info {font-weight: bold}\n";
    var v703 = v707 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v696 = v703 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v687 = v696 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v678 = v687 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v667 = v678 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v655 = v667 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v643 = v655 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v614 = v643 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v573 = v614 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v511 = v573 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v390 = v511 + "img {display: none}\n";
    var v115 = v390 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v574 = "</head>\n" + '<body class="main">\n';
  var v512 = v574 + '<div class="title">';
  var v391 = v512 + title$$6;
  var v117 = v391 + " results</div>\n";
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
    var v728 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v728[2], v728[1], v728[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v575 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v513 = v575 + "<head>\n";
  var v392 = v513 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v392 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v716 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v712 = v716 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v708 = v712 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v704 = v708 + "div.info {font-weight: bold}\n";
    var v697 = v704 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v688 = v697 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v679 = v688 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v668 = v679 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v656 = v668 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v644 = v656 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v615 = v644 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v576 = v615 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v514 = v576 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v393 = v514 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v393 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v720 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v719 = v720 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v717 = v719 + "div.title {display: none}\n";
    var v713 = v717 + "div.info {font-weight: bold}\n";
    var v709 = v713 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v705 = v709 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v698 = v705 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v689 = v698 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v680 = v689 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v669 = v680 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v657 = v669 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v645 = v657 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v616 = v645 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v577 = v616 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v515 = v577 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v394 = v515 + "img {display: none}\n";
    var v123 = v394 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v578 = "</head>\n" + '<body class="main">\n';
  var v516 = v578 + '<div class="title">';
  var v395 = v516 + title$$8;
  var v125 = v395 + " results</div>\n";
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
  var v396 = dnaSequence$$1.search(/./);
  var v126 = v396 != -1;
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
  var v397 = testArray[0];
  var v130 = v397 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v398 = testString.search(re$$2);
  var v131 = v398 == -1;
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
  var v399 = testNum.toFixed(3);
  var v134 = v399 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v400 = testNum.toPrecision(5);
  var v135 = v400 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v401 = theNumber$$1.search(/\d/);
  var v136 = v401 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v517 = emblFile.search(/ID/);
  var v402 = v517 == -1;
  var v519 = !v402;
  if(v519) {
    var v579 = emblFile.search(/AC/);
    var v518 = v579 == -1;
    var v581 = !v518;
    if(v581) {
      var v617 = emblFile.search(/DE/);
      var v580 = v617 == -1;
      var v619 = !v580;
      if(v619) {
        var v618 = emblFile.search(/SQ/);
        v580 = v618 == -1
      }
      v518 = v580
    }
    v402 = v518
  }
  var v137 = v402;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v403 = theNumber$$2.search(/\d/);
  var v138 = v403 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v404 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v404 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v405 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v405 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v406 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v406 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v520 = genBankFile.search(/LOCUS/);
  var v407 = v520 == -1;
  var v522 = !v407;
  if(v522) {
    var v582 = genBankFile.search(/DEFINITION/);
    var v521 = v582 == -1;
    var v584 = !v521;
    if(v584) {
      var v620 = genBankFile.search(/ACCESSION/);
      var v583 = v620 == -1;
      var v622 = !v583;
      if(v622) {
        var v621 = genBankFile.search(/ORIGIN/);
        v583 = v621 == -1
      }
      v521 = v583
    }
    v407 = v521
  }
  var v143 = v407;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v523 = genBankFile$$1.search(/LOCUS/);
  var v408 = v523 == -1;
  var v525 = !v408;
  if(v525) {
    var v585 = genBankFile$$1.search(/DEFINITION/);
    var v524 = v585 == -1;
    var v587 = !v524;
    if(v587) {
      var v623 = genBankFile$$1.search(/ACCESSION/);
      var v586 = v623 == -1;
      var v625 = !v586;
      if(v625) {
        var v624 = genBankFile$$1.search(/ORIGIN/);
        v586 = v624 == -1
      }
      v524 = v586
    }
    v408 = v524
  }
  var v144 = v408;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v409 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v409 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v526 = emblFile$$1.search(/ID/);
  var v410 = v526 == -1;
  var v528 = !v410;
  if(v528) {
    var v588 = emblFile$$1.search(/AC/);
    var v527 = v588 == -1;
    var v590 = !v527;
    if(v590) {
      var v626 = emblFile$$1.search(/DE/);
      var v589 = v626 == -1;
      var v628 = !v589;
      if(v628) {
        var v627 = emblFile$$1.search(/SQ/);
        v589 = v627 == -1
      }
      v527 = v589
    }
    v410 = v527
  }
  var v146 = v410;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v411 = emblFile$$1.search(/^FT/m);
  var v147 = v411 == -1;
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
    var v412 = basePerLine / groupSize;
    var v152 = j$$6 <= v412;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v413 = k + i$$5;
        var v150 = text$$10.charAt(v413);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v414 = basePerLine / groupSize;
      v152 = j$$6 <= v414
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
    var v415 = adjustment < 0;
    if(v415) {
      v415 = adjusted >= 0
    }
    var v156 = v415;
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
    var v416 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v416;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v417 = i$$6 + k$$1;
        var v157 = v417 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v418 = k$$1 + i$$6;
        var v159 = text$$12.charAt(v418);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v419 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v419, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v420 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v420
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v591 = adjustNumbering(lineNum, numberingAdjustment);
      var v529 = rightNum(v591, "", 8, tabIn$$3);
      var v421 = v529 + lineOfText$$1;
      var v167 = v421 + "\n";
      JAMScript.call(v166.write, v166, [v167]);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v592 = adjustNumbering(lineNum, numberingAdjustment);
        var v530 = rightNum(v592, "", 8, tabIn$$3);
        var v531 = complement(lineOfText$$1);
        var v422 = v530 + v531;
        var v169 = v422 + "\n";
        JAMScript.call(v168.write, v168, [v169]);
        var v170 = outputWindow.document;
        JAMScript.call(v170.write, v170, ["\n"])
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v532 = lineOfText$$1;
        var v533 = adjustNumbering(i$$6, numberingAdjustment);
        var v423 = v532 + v533;
        var v173 = v423 + "\n";
        JAMScript.call(v172.write, v172, [v173]);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v534 = complement(lineOfText$$1);
          var v535 = adjustNumbering(i$$6, numberingAdjustment);
          var v424 = v534 + v535;
          var v175 = v424 + "\n";
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
            var v425 = complement(lineOfText$$1);
            var v183 = v425 + "\n";
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
    var v426 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v426;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v427 = i$$7 + k$$2;
        var v190 = v427 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v428 = k$$2 + i$$7;
        var v192 = text$$13.charAt(v428);
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
      var v429 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v429
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v536 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v430 = v536 + lineOfText$$2;
      var v200 = v430 + "\n";
      JAMScript.call(v199.write, v199, [v200])
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v431 = lineOfText$$2 + i$$7;
        var v202 = v431 + "\n";
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
  var v537 = sequence$$13.length;
  var v432 = v537 <= firstIndexToMutate;
  var v539 = !v432;
  if(v539) {
    var v538 = lastIndexToMutate < 0;
    var v593 = !v538;
    if(v593) {
      v538 = lastIndexToMutate <= firstIndexToMutate
    }
    v432 = v538
  }
  var v211 = v432;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v433 = Math.random();
    var v212 = v433 * maxNum;
    randNum = Math.floor(v212);
    var v434 = randNum < firstIndexToMutate;
    var v540 = !v434;
    if(v540) {
      v434 = randNum > lastIndexToMutate
    }
    var v213 = v434;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v435 = Math.random();
      var v436 = components$$1.length;
      var v214 = v435 * v436;
      componentsIndex = Math.round(v214);
      var v437 = components$$1.length;
      var v215 = componentsIndex == v437;
      if(v215) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v438 = components$$1[componentsIndex]
      }
      var v216 = v438 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v439 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v440 = components$$1[componentsIndex]
    }
    var v217 = v439 + v440;
    var v441 = randNum + 1;
    var v442 = sequence$$13.length;
    var v218 = sequence$$13.substring(v441, v442);
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
    var v443 = Math.random();
    var v444 = components$$2.length;
    var v222 = v443 * v444;
    tempNum$$1 = Math.floor(v222);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v445 = sequence$$14.length;
    var v225 = v445 == 60;
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
    var v594 = sequence$$15.length;
    var v541 = v594 - lookAhead;
    var v542 = sequence$$15.length;
    var v446 = sequence$$15.substring(v541, v542);
    var v230 = v446 + sequence$$15;
    var v231 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAMScript.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v234 = outputWindow.document;
  var v595 = '<tr><td class="title" width="200px">' + "Site:";
  var v543 = v595 + '</td><td class="title">';
  var v447 = v543 + "Positions:";
  var v235 = v447 + "</td></tr>\n";
  JAMScript.call(v234.write, v234, [v235]);
  var i$$9 = 0;
  var v448 = arrayOfItems.length;
  var v251 = i$$9 < v448;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v449 = arrayOfItems[i$$9]
    }
    var v236 = v449.match(/\/.+\//);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v596 = arrayOfItems[i$$9]
    }
    var v544 = v596.match(/\)\D*\d+/);
    var v450 = v544.toString();
    var v237 = v450.replace(/\)\D*/, "");
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v451 = matchPosition >= lowerLimit;
      if(v451) {
        v451 = matchPosition < upperLimit
      }
      var v241 = v451;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v452 = matchPosition - shiftValue;
        var v240 = v452 + 1;
        tempString$$1 = v239 + v240
      }
      var v453 = matchExp.lastIndex;
      var v545 = RegExp.lastMatch;
      var v454 = v545.length;
      var v242 = v453 - v454;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v455 = tempString$$1.search(/\d/);
    var v244 = v455 != -1;
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
    var v670 = '<tr><td class="' + backGroundClass;
    var v658 = v670 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v690 = arrayOfItems[i$$9]
    }
    var v681 = v690.match(/\([^\(]+\)/);
    var v671 = v681.toString();
    var v659 = v671.replace(/\(|\)/g, "");
    var v646 = v658 + v659;
    var v629 = v646 + '</td><td class="';
    var v597 = v629 + backGroundClass;
    var v546 = v597 + '">';
    var v456 = v546 + tempString$$1;
    var v250 = v456 + "</td></tr>\n";
    JAMScript.call(v249.write, v249, [v250]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v457 = arrayOfItems.length;
    v251 = i$$9 < v457
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
  var v647 = '<tr><td class="title">' + "Pattern:";
  var v630 = v647 + '</td><td class="title">';
  var v598 = v630 + "Times found:";
  var v547 = v598 + '</td><td class="title">';
  var v458 = v547 + "Percentage:";
  var v255 = v458 + "</td></tr>\n";
  JAMScript.call(v254.write, v254, [v255]);
  var i$$10 = 0;
  var v459 = arrayOfItems$$1.length;
  var v264 = i$$10 < v459;
  for(;v264;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v460 = arrayOfItems$$1[i$$10]
    }
    var v256 = v460.match(/\/[^\/]+\//);
    var matchExp$$1 = v256 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v461 = sequence$$16.search(matchExp$$1);
    var v258 = v461 != -1;
    if(v258) {
      var v257 = sequence$$16.match(matchExp$$1);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v548 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v631 = arrayOfItems$$1[i$$10]
    }
    var v599 = v631.match(/\d+/);
    var v549 = parseFloat(v599);
    var v462 = v548 - v549;
    var v261 = v462 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v463 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v600 = arrayOfItems$$1[i$$10]
      }
      var v550 = v600.match(/\d+/);
      var v464 = parseFloat(v550);
      var v260 = v463 - v464;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v691 = arrayOfItems$$1[i$$10]
    }
    var v682 = v691.match(/\([^\(]+\)\b/);
    var v672 = v682.toString();
    var v660 = v672.replace(/\(|\)/g, "");
    var v648 = "<tr><td>" + v660;
    var v632 = v648 + "</td><td>";
    var v601 = v632 + tempNumber;
    var v551 = v601 + "</td><td>";
    var v552 = percentage.toFixed(2);
    var v465 = v551 + v552;
    var v263 = v465 + "</td></tr>\n";
    JAMScript.call(v262.write, v262, [v263]);
    i$$10 = i$$10 + 1;
    var v466 = arrayOfItems$$1.length;
    v264 = i$$10 < v466
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
  var v467 = sequence$$17.length;
  var v272 = v467 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v468 = Math.random();
    var v266 = v468 * maxNum$$1;
    randNum$$1 = Math.floor(v266);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v267, v268);
    sequence$$17 = tempString1 + tempString2;
    var v469 = tempSeq.length;
    var v271 = v469 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAMScript.call(v269.write, v269, [v270]);
      tempSeq = ""
    }
    var v470 = sequence$$17.length;
    v272 = v470 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAMScript.call(v273.write, v273, [v274]);
  return true
}
function proteinGravy(theDocument) {
  var newProtein = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v471 = testScript();
  var v275 = v471 == false;
  if(v275) {
    return false
  }
  var v661 = theDocument.forms;
  var v649 = v661[0];
  var v633 = v649.elements;
  var v602 = v633[0];
  var v553 = checkFormElement(v602);
  var v472 = v553 == false;
  var v555 = !v472;
  if(v555) {
    var v673 = theDocument.forms;
    var v662 = v673[0];
    var v650 = v662.elements;
    var v634 = v650[0];
    var v603 = v634.value;
    var v554 = checkSequenceLength(v603, maxInput$$3);
    v472 = v554 == false
  }
  var v276 = v472;
  if(v276) {
    return false
  }
  openWindow("Protein GRAVY");
  var v635 = theDocument.forms;
  var v604 = v635[0];
  var v556 = v604.elements;
  var v473 = v556[0];
  var v277 = v473.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v277);
  var i$$11 = 0;
  var v474 = arrayOfFasta$$1.length;
  var v285 = i$$11 < v474;
  for(;v285;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v278 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v278);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v279 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v279);
    newProtein = removeNonProtein(newProtein);
    var v280 = outputWindow.document;
    var v281 = getInfoFromTitleAndSequence(title$$9, newProtein);
    JAMScript.call(v280.write, v280, [v281]);
    var v282 = outputWindow.document;
    var v283 = getProteinGravy(newProtein);
    JAMScript.call(v282.write, v282, [v283]);
    var v284 = outputWindow.document;
    JAMScript.call(v284.write, v284, ["<br />\n<br />\n"]);
    i$$11 = i$$11 + 1;
    var v475 = arrayOfFasta$$1.length;
    v285 = i$$11 < v475
  }
  closeWindow();
  return true
}
function getProteinGravy(sequence$$18) {
  sequence$$18 = sequence$$18.toLowerCase();
  var gravyResult = 0;
  var gravyValues = _getGravyHash();
  var i$$12 = 0;
  var v476 = sequence$$18.length;
  var v288 = i$$12 < v476;
  for(;v288;) {
    var v286 = gravyResult;
    var v477 = gravyValues;
    var v478 = sequence$$18.charAt(i$$12);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v287 = v477[v478]
    }
    gravyResult = v286 + v287;
    i$$12 = i$$12 + 1;
    var v479 = sequence$$18.length;
    v288 = i$$12 < v479
  }
  var v480 = sequence$$18.length;
  var v290 = v480 > 0;
  if(v290) {
    var v289 = sequence$$18.length;
    gravyResult = gravyResult / v289
  }else {
    return"The sequence is too short"
  }
  return gravyResult.toFixed(3)
}
function _getGravyHash() {
  var hash = {};
  hash["a"] = 1.8;
  hash["r"] = -4.5;
  hash["n"] = -3.5;
  hash["d"] = -3.5;
  hash["c"] = 2.5;
  hash["q"] = -3.5;
  hash["e"] = -3.5;
  hash["g"] = -0.4;
  hash["h"] = -3.2;
  hash["i"] = 4.5;
  hash["l"] = 3.8;
  hash["k"] = -3.9;
  hash["m"] = 1.9;
  hash["f"] = 2.8;
  hash["p"] = -1.6;
  hash["s"] = -0.8;
  hash["t"] = -0.7;
  hash["w"] = -0.9;
  hash["y"] = -1.3;
  hash["v"] = 4.2;
  return hash
}
JAMScript.set(document, "onload", v2);
var v291 = document.getElementById("submitbtn");
JAMScript.set(v291, "onclick", v3);
var v292 = document.getElementById("clearbtn");
JAMScript.set(v292, "onclick", v4);

