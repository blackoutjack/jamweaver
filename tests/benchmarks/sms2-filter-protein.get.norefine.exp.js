function v4() {
  var v552 = document.forms;
  var v469 = v552[0];
  var v284 = v469.elements;
  var v5 = v284[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    filterProtein(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v285 = document.main_form;
  var v7 = v285.main_submit;
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
  var v286 = arrayOfSequences.length;
  var v9 = v286 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v287 = arrayOfTitles.length;
  var v11 = i$$1 < v287;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v553 = arrayOfTitles[i$$1]
    }
    var v470 = v553.search(/\S/);
    var v288 = v470 == -1;
    var v472 = !v288;
    if(v472) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v609 = arrayOfSequences[i$$1]
      }
      var v554 = v609.search(/\S/);
      var v471 = v554 == -1;
      var v556 = !v471;
      if(v556) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v610 = arrayOfSequences[i$$1]
        }
        var v555 = v610.length;
        v471 = v555 != lengthOfAlign
      }
      v288 = v471
    }
    var v10 = v288;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v289 = arrayOfTitles.length;
    v11 = i$$1 < v289
  }
  return true
}
function checkCodonTable(codonTable) {
  var v473 = codonTable.search(/AmAcid/);
  var v290 = v473 == -1;
  var v475 = !v290;
  if(v475) {
    var v557 = codonTable.search(/Codon/);
    var v474 = v557 == -1;
    var v559 = !v474;
    if(v559) {
      var v611 = codonTable.search(/Number/);
      var v558 = v611 == -1;
      var v613 = !v558;
      if(v613) {
        var v648 = codonTable.search(/\/1000/);
        var v612 = v648 == -1;
        var v650 = !v612;
        if(v650) {
          var v649 = codonTable.search(/Fraction\s*\.\./);
          v612 = v649 == -1
        }
        v558 = v612
      }
      v474 = v558
    }
    v290 = v474
  }
  var v12 = v290;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v476 = formElement.value;
  var v291 = v476.search(/\S/);
  var v13 = v291 == -1;
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
  var v292 = arrayOfPatterns.length;
  var v16 = z$$2 < v292;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v477 = arrayOfPatterns[z$$2]
    }
    var v293 = v477.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v293 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v478 = arrayOfPatterns[z$$2]
    }
    var v294 = moreExpressionCheck(v478);
    var v15 = v294 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v295 = arrayOfPatterns.length;
    v16 = z$$2 < v295
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v296 = arrayOfPatterns.length;
  var v25 = j < v296;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v560 = arrayOfPatterns[j]
    }
    var v479 = v560.match(/\/.+\//);
    var v297 = v479 + "gi";
    if(JAMScript.isEval(eval)) {
      var v753 = eval("introspect(JAMScript.introspectors.processAll) { " + v297 + " }")
    }else {
      var v753 = JAMScript.call(eval, null, [v297])
    }
    v19[v20] = v753;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v480 = arrayOfPatterns[j]
    }
    var v298 = v480.match(/=[a-zA-Z\*]/);
    var v754 = v298.toString();
    v21[v22] = v754;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v299 = geneticCodeMatchResult[j]
    }
    var v755 = v299.replace(/=/g, "");
    v23[v24] = v755;
    j = j + 1;
    var v300 = arrayOfPatterns.length;
    v25 = j < v300
  }
  var i$$2 = 0;
  var v481 = testSequence.length;
  var v301 = v481 - 3;
  var v32 = i$$2 <= v301;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v302 = geneticCodeMatchExp.length;
    var v30 = j < v302;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v482 = geneticCodeMatchExp[j]
      }
      var v303 = codon.search(v482);
      var v29 = v303 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v304 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v304 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v305 = geneticCodeMatchExp.length;
      v30 = j < v305
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v483 = testSequence.length;
    var v306 = v483 - 3;
    v32 = i$$2 <= v306
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v307 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v307;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v484 = arrayOfPatterns$$1[z$$3]
    }
    var v308 = v484.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v308 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v309 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v309
  }
  var i$$3 = 0;
  var v310 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v310;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v485 = arrayOfPatterns$$1[i$$3]
    }
    var v311 = "[" + v485;
    var v35 = v311 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v312 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v312;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v486 = arrayOfPatterns$$1[j$$1]
      }
      var v313 = v486.search(re);
      var v36 = v313 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v314 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v314
    }
    i$$3 = i$$3 + 1;
    var v315 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v315
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v316 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v316;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v487 = arrayOfPatterns$$2[z$$4]
    }
    var v317 = v487.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v317 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v488 = arrayOfPatterns$$2[z$$4]
    }
    var v318 = moreExpressionCheck(v488);
    var v40 = v318 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v319 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v319
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v561 = getSequenceFromFasta(text$$7);
  var v489 = v561.replace(/[^A-Za-z]/g, "");
  var v320 = v489.length;
  var v43 = v320 > maxInput;
  if(v43) {
    var v321 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v321 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v322 = text$$8.length;
  var v45 = v322 > maxInput$$1;
  if(v45) {
    var v323 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v323 + " characters.";
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
  var v324 = alignArray.length;
  var v52 = v324 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v325 = alignArray.length;
  var v54 = i$$4 < v325;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v490 = alignArray[i$$4]
    }
    var v326 = v490.search(/[^\s]+\s/);
    var v53 = v326 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v327 = alignArray.length;
    v54 = i$$4 < v327
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
  var v328 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v328 != -1;
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
  var v329 = sequence$$2.length;
  var v58 = "&gt;results for " + v329;
  var stringToReturn = v58 + " residue sequence ";
  var v330 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v330 != -1;
  if(v60) {
    var v331 = stringToReturn + '"';
    var v59 = v331 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v332 = stringToReturn + ' starting "';
  var v333 = sequence$$2.substring(0, 10);
  var v61 = v332 + v333;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v334 = sequenceOne.length;
  var v62 = "Search results for " + v334;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v335 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v335 != -1;
  if(v64) {
    var v336 = stringToReturn$$1 + '"';
    var v63 = v336 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v337 = stringToReturn$$1 + ' starting "';
  var v338 = sequenceOne.substring(0, 10);
  var v65 = v337 + v338;
  stringToReturn$$1 = v65 + '"\n';
  var v339 = stringToReturn$$1 + "and ";
  var v340 = sequenceTwo.length;
  var v66 = v339 + v340;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v341 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v341 != -1;
  if(v68) {
    var v342 = stringToReturn$$1 + '"';
    var v67 = v342 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v343 = stringToReturn$$1 + ' starting "';
  var v344 = sequenceTwo.substring(0, 10);
  var v69 = v343 + v344;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v345 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v345;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v562 = arrayOfPatterns$$3[j$$2]
    }
    var v491 = v562.match(/\/.+\//);
    var v346 = v491 + "gi";
    if(JAMScript.isEval(eval)) {
      var v756 = eval("introspect(JAMScript.introspectors.processAll) { " + v346 + " }")
    }else {
      var v756 = JAMScript.call(eval, null, [v346])
    }
    v72[v73] = v756;
    j$$2 = j$$2 + 1;
    var v347 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v347
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v348 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v348;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v492 = arrayOfPatterns$$4[j$$3]
    }
    var v349 = v492.match(/=[a-zA-Z\*]/);
    var v757 = v349.toString();
    v76[v77] = v757;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v350 = geneticCodeMatchResult$$1[j$$3]
    }
    var v758 = v350.replace(/=/g, "");
    v78[v79] = v758;
    j$$3 = j$$3 + 1;
    var v351 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v351
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v352 = sequence$$3.length;
  var v81 = "Results for " + v352;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v353 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v353 != -1;
  if(v83) {
    var v354 = stringToReturn$$2 + '"';
    var v82 = v354 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v355 = stringToReturn$$2 + ' starting "';
  var v356 = sequence$$3.substring(0, 10);
  var v84 = v355 + v356;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v493 = "Results for " + topology;
  var v357 = v493 + " ";
  var v358 = sequence$$4.length;
  var v86 = v357 + v358;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v359 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v359 != -1;
  if(v88) {
    var v360 = stringToReturn$$3 + '"';
    var v87 = v360 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v361 = stringToReturn$$3 + ' starting "';
  var v362 = sequence$$4.substring(0, 10);
  var v89 = v361 + v362;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v363 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v363;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v364 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v364 != -1;
  if(v93) {
    var v365 = stringToReturn$$4 + '"';
    var v92 = v365 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v366 = stringToReturn$$4 + ' starting "';
  var v367 = sequenceOne$$1.substring(0, 10);
  var v94 = v366 + v367;
  stringToReturn$$4 = v94 + '"\n';
  var v368 = stringToReturn$$4 + "and ";
  var v369 = sequenceTwo$$1.length;
  var v95 = v368 + v369;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v370 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v370 != -1;
  if(v97) {
    var v371 = stringToReturn$$4 + '"';
    var v96 = v371 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v372 = stringToReturn$$4 + ' starting "';
  var v373 = sequenceTwo$$1.substring(0, 10);
  var v98 = v372 + v373;
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
    var v374 = Math.random();
    var v375 = components.length;
    var v100 = v374 * v375;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v376 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v376 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v377 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v377 != -1;
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
  var v494 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v378 = v494 != -1;
  var v496 = !v378;
  if(v496) {
    var v563 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v495 = v563 != -1;
    var v565 = !v495;
    if(v565) {
      var v614 = expressionToCheck.search(/\[\]/);
      var v564 = v614 != -1;
      var v616 = !v564;
      if(v616) {
        var v651 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v615 = v651 != -1;
        var v653 = !v615;
        if(v653) {
          var v671 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v652 = v671 != -1;
          var v673 = !v652;
          if(v673) {
            var v691 = expressionToCheck.search(/\|\|/);
            var v672 = v691 != -1;
            var v693 = !v672;
            if(v693) {
              var v706 = expressionToCheck.search(/\/\|/);
              var v692 = v706 != -1;
              var v708 = !v692;
              if(v708) {
                var v715 = expressionToCheck.search(/\|\//);
                var v707 = v715 != -1;
                var v717 = !v707;
                if(v717) {
                  var v724 = expressionToCheck.search(/\[.\]/);
                  var v716 = v724 != -1;
                  var v726 = !v716;
                  if(v726) {
                    var v731 = expressionToCheck.search(/\</);
                    var v725 = v731 != -1;
                    var v733 = !v725;
                    if(v733) {
                      var v732 = expressionToCheck.search(/\>/);
                      v725 = v732 != -1
                    }
                    v716 = v725
                  }
                  v707 = v716
                }
                v692 = v707
              }
              v672 = v692
            }
            v652 = v672
          }
          v615 = v652
        }
        v564 = v615
      }
      v495 = v564
    }
    v378 = v495
  }
  var v105 = v378;
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
    var v759 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v759[2], v759[1], v759[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v566 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v497 = v566 + "<head>\n";
  var v379 = v497 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v379 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v746 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v742 = v746 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v738 = v742 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v734 = v738 + "div.info {font-weight: bold}\n";
    var v727 = v734 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v718 = v727 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v709 = v718 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v694 = v709 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v674 = v694 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v654 = v674 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v617 = v654 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v567 = v617 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v498 = v567 + "td.many {color: #000000}\n";
    var v380 = v498 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v380 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v750 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v747 = v750 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v743 = v747 + "div.title {display: none}\n";
    var v739 = v743 + "div.info {font-weight: bold}\n";
    var v735 = v739 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v728 = v735 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v719 = v728 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v710 = v719 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v695 = v710 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v675 = v695 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v655 = v675 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v618 = v655 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v568 = v618 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v499 = v568 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v381 = v499 + "img {display: none}\n";
    var v115 = v381 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v569 = "</head>\n" + '<body class="main">\n';
  var v500 = v569 + '<div class="title">';
  var v382 = v500 + title$$6;
  var v117 = v382 + " results</div>\n";
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
    var v760 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v760[2], v760[1], v760[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v570 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v501 = v570 + "<head>\n";
  var v383 = v501 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v383 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v748 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v744 = v748 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v740 = v744 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v736 = v740 + "div.info {font-weight: bold}\n";
    var v729 = v736 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v720 = v729 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v711 = v720 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v696 = v711 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v676 = v696 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v656 = v676 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v619 = v656 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v571 = v619 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v502 = v571 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v384 = v502 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v384 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v752 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v751 = v752 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v749 = v751 + "div.title {display: none}\n";
    var v745 = v749 + "div.info {font-weight: bold}\n";
    var v741 = v745 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v737 = v741 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v730 = v737 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v721 = v730 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v712 = v721 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v697 = v712 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v677 = v697 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v657 = v677 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v620 = v657 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v572 = v620 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v503 = v572 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v385 = v503 + "img {display: none}\n";
    var v123 = v385 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v573 = "</head>\n" + '<body class="main">\n';
  var v504 = v573 + '<div class="title">';
  var v386 = v504 + title$$8;
  var v125 = v386 + " results</div>\n";
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
  var v387 = dnaSequence$$1.search(/./);
  var v126 = v387 != -1;
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
  var v388 = testArray[0];
  var v130 = v388 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v389 = testString.search(re$$2);
  var v131 = v389 == -1;
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
  var v390 = testNum.toFixed(3);
  var v134 = v390 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v391 = testNum.toPrecision(5);
  var v135 = v391 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v392 = theNumber$$1.search(/\d/);
  var v136 = v392 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v505 = emblFile.search(/ID/);
  var v393 = v505 == -1;
  var v507 = !v393;
  if(v507) {
    var v574 = emblFile.search(/AC/);
    var v506 = v574 == -1;
    var v576 = !v506;
    if(v576) {
      var v621 = emblFile.search(/DE/);
      var v575 = v621 == -1;
      var v623 = !v575;
      if(v623) {
        var v622 = emblFile.search(/SQ/);
        v575 = v622 == -1
      }
      v506 = v575
    }
    v393 = v506
  }
  var v137 = v393;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v394 = theNumber$$2.search(/\d/);
  var v138 = v394 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v395 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v395 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v396 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v396 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v397 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v397 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v508 = genBankFile.search(/LOCUS/);
  var v398 = v508 == -1;
  var v510 = !v398;
  if(v510) {
    var v577 = genBankFile.search(/DEFINITION/);
    var v509 = v577 == -1;
    var v579 = !v509;
    if(v579) {
      var v624 = genBankFile.search(/ACCESSION/);
      var v578 = v624 == -1;
      var v626 = !v578;
      if(v626) {
        var v625 = genBankFile.search(/ORIGIN/);
        v578 = v625 == -1
      }
      v509 = v578
    }
    v398 = v509
  }
  var v143 = v398;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v511 = genBankFile$$1.search(/LOCUS/);
  var v399 = v511 == -1;
  var v513 = !v399;
  if(v513) {
    var v580 = genBankFile$$1.search(/DEFINITION/);
    var v512 = v580 == -1;
    var v582 = !v512;
    if(v582) {
      var v627 = genBankFile$$1.search(/ACCESSION/);
      var v581 = v627 == -1;
      var v629 = !v581;
      if(v629) {
        var v628 = genBankFile$$1.search(/ORIGIN/);
        v581 = v628 == -1
      }
      v512 = v581
    }
    v399 = v512
  }
  var v144 = v399;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v400 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v400 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v514 = emblFile$$1.search(/ID/);
  var v401 = v514 == -1;
  var v516 = !v401;
  if(v516) {
    var v583 = emblFile$$1.search(/AC/);
    var v515 = v583 == -1;
    var v585 = !v515;
    if(v585) {
      var v630 = emblFile$$1.search(/DE/);
      var v584 = v630 == -1;
      var v632 = !v584;
      if(v632) {
        var v631 = emblFile$$1.search(/SQ/);
        v584 = v631 == -1
      }
      v515 = v584
    }
    v401 = v515
  }
  var v146 = v401;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v402 = emblFile$$1.search(/^FT/m);
  var v147 = v402 == -1;
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
    var v403 = basePerLine / groupSize;
    var v151 = j$$6 <= v403;
    for(;v151;) {
      var v150 = k < groupSize;
      for(;v150;) {
        var v404 = k + i$$5;
        var v149 = text$$10.charAt(v404);
        lineOfText = lineOfText + v149;
        k = k + 1;
        v150 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v405 = basePerLine / groupSize;
      v151 = j$$6 <= v405
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
    var v406 = adjustment < 0;
    if(v406) {
      v406 = adjusted >= 0
    }
    var v155 = v406;
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
    var v407 = basePerLine$$2 / groupSize$$2;
    var v162 = j$$7 <= v407;
    for(;v162;) {
      var v158 = k$$1 < groupSize$$2;
      for(;v158;) {
        var v408 = i$$6 + k$$1;
        var v156 = v408 >= stopBase$$2;
        if(v156) {
          break
        }
        var v409 = k$$1 + i$$6;
        var v157 = text$$12.charAt(v409);
        lineOfText$$1 = lineOfText$$1 + v157;
        k$$1 = k$$1 + 1;
        v158 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v160 = numberPosition$$1 == "above";
      if(v160) {
        var v410 = adjustNumbering(i$$6, numberingAdjustment);
        var v159 = rightNum(v410, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v159
      }
      var v161 = i$$6 >= stopBase$$2;
      if(v161) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v411 = basePerLine$$2 / groupSize$$2;
      v162 = j$$7 <= v411
    }
    var v185 = numberPosition$$1 == "left";
    if(v185) {
      var v163 = outputWindow.document;
      var v586 = adjustNumbering(lineNum, numberingAdjustment);
      var v517 = rightNum(v586, "", 8, tabIn$$3);
      var v412 = v517 + lineOfText$$1;
      var v164 = v412 + "\n";
      JAMScript.call(v163.write, v163, [v164]);
      var v168 = strands$$1 == "two";
      if(v168) {
        var v165 = outputWindow.document;
        var v587 = adjustNumbering(lineNum, numberingAdjustment);
        var v518 = rightNum(v587, "", 8, tabIn$$3);
        var v519 = complement(lineOfText$$1);
        var v413 = v518 + v519;
        var v166 = v413 + "\n";
        JAMScript.call(v165.write, v165, [v166]);
        var v167 = outputWindow.document;
        JAMScript.call(v167.write, v167, ["\n"])
      }
    }else {
      var v184 = numberPosition$$1 == "right";
      if(v184) {
        var v169 = outputWindow.document;
        var v520 = adjustNumbering(i$$6, numberingAdjustment);
        var v414 = lineOfText$$1 + v520;
        var v170 = v414 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v174 = strands$$1 == "two";
        if(v174) {
          var v171 = outputWindow.document;
          var v521 = complement(lineOfText$$1);
          var v522 = adjustNumbering(i$$6, numberingAdjustment);
          var v415 = v521 + v522;
          var v172 = v415 + "\n";
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
            var v416 = complement(lineOfText$$1);
            var v180 = v416 + "\n";
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
    var v417 = basePerLine$$3 / groupSize$$3;
    var v193 = j$$8 <= v417;
    for(;v193;) {
      var v189 = k$$2 < groupSize$$3;
      for(;v189;) {
        var v418 = i$$7 + k$$2;
        var v187 = v418 >= stopBase$$3;
        if(v187) {
          break
        }
        var v419 = k$$2 + i$$7;
        var v188 = text$$13.charAt(v419);
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
      var v420 = basePerLine$$3 / groupSize$$3;
      v193 = j$$8 <= v420
    }
    var v204 = numberPosition$$2 == "left";
    if(v204) {
      var v194 = outputWindow.document;
      var v523 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v421 = v523 + lineOfText$$2;
      var v195 = v421 + "\n";
      JAMScript.call(v194.write, v194, [v195])
    }else {
      var v203 = numberPosition$$2 == "right";
      if(v203) {
        var v196 = outputWindow.document;
        var v422 = lineOfText$$2 + i$$7;
        var v197 = v422 + "\n";
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
  var v524 = sequence$$13.length;
  var v423 = v524 <= firstIndexToMutate;
  var v526 = !v423;
  if(v526) {
    var v525 = lastIndexToMutate < 0;
    var v588 = !v525;
    if(v588) {
      v525 = lastIndexToMutate <= firstIndexToMutate
    }
    v423 = v525
  }
  var v206 = v423;
  if(v206) {
    numMut = 0
  }
  var i$$8 = 0;
  var v214 = i$$8 < numMut;
  for(;v214;) {
    maxNum = sequence$$13.length;
    var v424 = Math.random();
    var v207 = v424 * maxNum;
    randNum = Math.floor(v207);
    var v425 = randNum < firstIndexToMutate;
    var v527 = !v425;
    if(v527) {
      v425 = randNum > lastIndexToMutate
    }
    var v208 = v425;
    if(v208) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v214 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v426 = Math.random();
      var v427 = components$$1.length;
      var v209 = v426 * v427;
      componentsIndex = Math.round(v209);
      var v428 = components$$1.length;
      var v210 = componentsIndex == v428;
      if(v210) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v429 = components$$1[componentsIndex]
      }
      var v211 = v429 != currentChar;
      if(v211) {
        needNewChar = false
      }
    }
    var v430 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v431 = components$$1[componentsIndex]
    }
    var v212 = v430 + v431;
    var v432 = randNum + 1;
    var v433 = sequence$$13.length;
    var v213 = sequence$$13.substring(v432, v433);
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
    var v434 = Math.random();
    var v435 = components$$2.length;
    var v217 = v434 * v435;
    tempNum$$1 = Math.floor(v217);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v436 = sequence$$14.length;
    var v220 = v436 == 60;
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
    var v589 = sequence$$15.length;
    var v528 = v589 - lookAhead;
    var v529 = sequence$$15.length;
    var v437 = sequence$$15.substring(v528, v529);
    var v225 = v437 + sequence$$15;
    var v226 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v225 + v226;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v228 = outputWindow.document;
  JAMScript.call(v228.write, v228, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v229 = outputWindow.document;
  var v590 = '<tr><td class="title" width="200px">' + "Site:";
  var v530 = v590 + '</td><td class="title">';
  var v438 = v530 + "Positions:";
  var v230 = v438 + "</td></tr>\n";
  JAMScript.call(v229.write, v229, [v230]);
  var i$$9 = 0;
  var v439 = arrayOfItems.length;
  var v246 = i$$9 < v439;
  for(;v246;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v440 = arrayOfItems[i$$9]
    }
    var v231 = v440.match(/\/.+\//);
    matchExp = v231 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v591 = arrayOfItems[i$$9]
    }
    var v531 = v591.match(/\)\D*\d+/);
    var v441 = v531.toString();
    var v232 = v441.replace(/\)\D*/, "");
    cutDistance = parseFloat(v232);
    var v238 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v238;) {
      var v233 = matchExp.lastIndex;
      matchPosition = v233 - cutDistance;
      var v442 = matchPosition >= lowerLimit;
      if(v442) {
        v442 = matchPosition < upperLimit
      }
      var v236 = v442;
      if(v236) {
        timesFound = timesFound + 1;
        var v234 = tempString$$1 + ", ";
        var v443 = matchPosition - shiftValue;
        var v235 = v443 + 1;
        tempString$$1 = v234 + v235
      }
      var v237 = matchExp;
      var v532 = matchExp.lastIndex;
      var v592 = RegExp.lastMatch;
      var v533 = v592.length;
      var v444 = v532 - v533;
      v237.lastIndex = v444 + 1;
      v238 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v445 = tempString$$1.search(/\d/);
    var v239 = v445 != -1;
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
    var v698 = '<tr><td class="' + backGroundClass;
    var v678 = v698 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v722 = arrayOfItems[i$$9]
    }
    var v713 = v722.match(/\([^\(]+\)/);
    var v699 = v713.toString();
    var v679 = v699.replace(/\(|\)/g, "");
    var v658 = v678 + v679;
    var v633 = v658 + '</td><td class="';
    var v593 = v633 + backGroundClass;
    var v534 = v593 + '">';
    var v446 = v534 + tempString$$1;
    var v245 = v446 + "</td></tr>\n";
    JAMScript.call(v244.write, v244, [v245]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v447 = arrayOfItems.length;
    v246 = i$$9 < v447
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
  var v659 = '<tr><td class="title">' + "Pattern:";
  var v634 = v659 + '</td><td class="title">';
  var v594 = v634 + "Times found:";
  var v535 = v594 + '</td><td class="title">';
  var v448 = v535 + "Percentage:";
  var v250 = v448 + "</td></tr>\n";
  JAMScript.call(v249.write, v249, [v250]);
  var i$$10 = 0;
  var v449 = arrayOfItems$$1.length;
  var v259 = i$$10 < v449;
  for(;v259;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v450 = arrayOfItems$$1[i$$10]
    }
    var v251 = v450.match(/\/[^\/]+\//);
    var matchExp$$1 = v251 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v451 = sequence$$16.search(matchExp$$1);
    var v253 = v451 != -1;
    if(v253) {
      var v252 = sequence$$16.match(matchExp$$1);
      tempNumber = v252.length
    }
    var percentage = 0;
    var v536 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v635 = arrayOfItems$$1[i$$10]
    }
    var v595 = v635.match(/\d+/);
    var v537 = parseFloat(v595);
    var v452 = v536 - v537;
    var v256 = v452 > 0;
    if(v256) {
      var v254 = 100 * tempNumber;
      var v453 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v596 = arrayOfItems$$1[i$$10]
      }
      var v538 = v596.match(/\d+/);
      var v454 = parseFloat(v538);
      var v255 = v453 - v454;
      percentage = v254 / v255
    }
    var v257 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v723 = arrayOfItems$$1[i$$10]
    }
    var v714 = v723.match(/\([^\(]+\)\b/);
    var v700 = v714.toString();
    var v680 = v700.replace(/\(|\)/g, "");
    var v660 = "<tr><td>" + v680;
    var v636 = v660 + "</td><td>";
    var v597 = v636 + tempNumber;
    var v539 = v597 + "</td><td>";
    var v540 = percentage.toFixed(2);
    var v455 = v539 + v540;
    var v258 = v455 + "</td></tr>\n";
    JAMScript.call(v257.write, v257, [v258]);
    i$$10 = i$$10 + 1;
    var v456 = arrayOfItems$$1.length;
    v259 = i$$10 < v456
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
  var v457 = sequence$$17.length;
  var v267 = v457 > 0;
  for(;v267;) {
    maxNum$$1 = sequence$$17.length;
    var v458 = Math.random();
    var v261 = v458 * maxNum$$1;
    randNum$$1 = Math.floor(v261);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v262 = randNum$$1 + 1;
    var v263 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v262, v263);
    sequence$$17 = tempString1 + tempString2;
    var v459 = tempSeq.length;
    var v266 = v459 == 60;
    if(v266) {
      var v264 = outputWindow.document;
      var v265 = tempSeq + "\n";
      JAMScript.call(v264.write, v264, [v265]);
      tempSeq = ""
    }
    var v460 = sequence$$17.length;
    v267 = v460 > 0
  }
  var v268 = outputWindow.document;
  var v269 = tempSeq + "\n";
  JAMScript.call(v268.write, v268, [v269]);
  return true
}
function filterProtein(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 5E5;
  var v461 = testScript();
  var v270 = v461 == false;
  if(v270) {
    return false
  }
  var v681 = theDocument.forms;
  var v661 = v681[0];
  var v637 = v661.elements;
  var v598 = v637[0];
  var v541 = checkFormElement(v598);
  var v462 = v541 == false;
  var v543 = !v462;
  if(v543) {
    var v701 = theDocument.forms;
    var v682 = v701[0];
    var v662 = v682.elements;
    var v638 = v662[0];
    var v599 = v638.value;
    var v542 = checkTextLength(v599, maxInput$$3);
    v462 = v542 == false
  }
  var v271 = v462;
  if(v271) {
    return false
  }
  var v683 = theDocument.forms;
  var v663 = v683[0];
  var v639 = v663.elements;
  var v600 = v639[4];
  var v544 = v600.options;
  var v684 = theDocument.forms;
  var v664 = v684[0];
  var v640 = v664.elements;
  var v601 = v640[4];
  var v545 = v601.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v463 = v544[v545]
  }
  var v272 = v463.value;
  var re$$3 = new RegExp(v272, "g");
  var v641 = theDocument.forms;
  var v602 = v641[0];
  var v546 = v602.elements;
  var v464 = v546[0];
  var v273 = v464.value;
  var v685 = theDocument.forms;
  var v665 = v685[0];
  var v642 = v665.elements;
  var v603 = v642[5];
  var v547 = v603.options;
  var v686 = theDocument.forms;
  var v666 = v686[0];
  var v643 = v666.elements;
  var v604 = v643[5];
  var v548 = v604.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v465 = v547[v548]
  }
  var v274 = v465.value;
  newProtein = v273.replace(re$$3, v274);
  var v702 = theDocument.forms;
  var v687 = v702[0];
  var v667 = v687.elements;
  var v644 = v667[6];
  var v605 = v644.options;
  var v703 = theDocument.forms;
  var v688 = v703[0];
  var v668 = v688.elements;
  var v645 = v668[6];
  var v606 = v645.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v549 = v605[v606]
  }
  var v466 = v549.value;
  var v276 = v466 == "uppercase";
  if(v276) {
    newProtein = newProtein.toUpperCase()
  }else {
    var v704 = theDocument.forms;
    var v689 = v704[0];
    var v669 = v689.elements;
    var v646 = v669[6];
    var v607 = v646.options;
    var v705 = theDocument.forms;
    var v690 = v705[0];
    var v670 = v690.elements;
    var v647 = v670[6];
    var v608 = v647.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v550 = v607[v608]
    }
    var v467 = v550.value;
    var v275 = v467 == "lowercase";
    if(v275) {
      newProtein = newProtein.toLowerCase()
    }
  }
  openWindow("Filter Protein");
  openPre();
  var v277 = outputWindow.document;
  var v551 = newProtein.length;
  var v468 = "&gt;filtered protein sequence consisting of " + v551;
  var v278 = v468 + " residues.\n";
  JAMScript.call(v277.write, v277, [v278]);
  var v279 = outputWindow.document;
  var v280 = addReturns(newProtein);
  JAMScript.call(v279.write, v279, [v280]);
  var v281 = outputWindow.document;
  JAMScript.call(v281.write, v281, ["\n"]);
  closePre();
  closeWindow();
  return true
}
JAMScript.set(document, "onload", v2);
var v282 = document.getElementById("submitbtn");
JAMScript.set(v282, "onclick", v3);
var v283 = document.getElementById("clearbtn");
JAMScript.set(v283, "onclick", v4);

