function v4() {
  var v579 = document.forms;
  var v498 = v579[0];
  var v304 = v498.elements;
  var v5 = v304[0];
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
  var v305 = document.main_form;
  var v7 = v305.main_submit;
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
  var v306 = arrayOfSequences.length;
  var v9 = v306 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v307 = arrayOfTitles.length;
  var v11 = i$$1 < v307;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v580 = arrayOfTitles[i$$1]
    }
    var v499 = v580.search(/\S/);
    var v308 = v499 == -1;
    var v501 = !v308;
    if(v501) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v630 = arrayOfSequences[i$$1]
      }
      var v581 = v630.search(/\S/);
      var v500 = v581 == -1;
      var v583 = !v500;
      if(v583) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v631 = arrayOfSequences[i$$1]
        }
        var v582 = v631.length;
        v500 = v582 != lengthOfAlign
      }
      v308 = v500
    }
    var v10 = v308;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v309 = arrayOfTitles.length;
    v11 = i$$1 < v309
  }
  return true
}
function checkCodonTable(codonTable) {
  var v502 = codonTable.search(/AmAcid/);
  var v310 = v502 == -1;
  var v504 = !v310;
  if(v504) {
    var v584 = codonTable.search(/Codon/);
    var v503 = v584 == -1;
    var v586 = !v503;
    if(v586) {
      var v632 = codonTable.search(/Number/);
      var v585 = v632 == -1;
      var v634 = !v585;
      if(v634) {
        var v662 = codonTable.search(/\/1000/);
        var v633 = v662 == -1;
        var v664 = !v633;
        if(v664) {
          var v663 = codonTable.search(/Fraction\s*\.\./);
          v633 = v663 == -1
        }
        v585 = v633
      }
      v503 = v585
    }
    v310 = v503
  }
  var v12 = v310;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v505 = formElement.value;
  var v311 = v505.search(/\S/);
  var v13 = v311 == -1;
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
  var v312 = arrayOfPatterns.length;
  var v16 = z$$2 < v312;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v506 = arrayOfPatterns[z$$2]
    }
    var v313 = v506.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v313 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v507 = arrayOfPatterns[z$$2]
    }
    var v314 = moreExpressionCheck(v507);
    var v15 = v314 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v315 = arrayOfPatterns.length;
    v16 = z$$2 < v315
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v316 = arrayOfPatterns.length;
  var v25 = j < v316;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v587 = arrayOfPatterns[j]
    }
    var v508 = v587.match(/\/.+\//);
    var v317 = v508 + "gi";
    if(JAMScript.isEval(eval)) {
      var v752 = eval("introspect(JAMScript.introspectors.processAll) { " + v317 + " }")
    }else {
      var v752 = JAMScript.call(eval, null, [v317])
    }
    v19[v20] = v752;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v509 = arrayOfPatterns[j]
    }
    var v318 = v509.match(/=[a-zA-Z\*]/);
    var v753 = v318.toString();
    v21[v22] = v753;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v319 = geneticCodeMatchResult[j]
    }
    var v754 = v319.replace(/=/g, "");
    v23[v24] = v754;
    j = j + 1;
    var v320 = arrayOfPatterns.length;
    v25 = j < v320
  }
  var i$$2 = 0;
  var v510 = testSequence.length;
  var v321 = v510 - 3;
  var v32 = i$$2 <= v321;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v322 = geneticCodeMatchExp.length;
    var v30 = j < v322;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v511 = geneticCodeMatchExp[j]
      }
      var v323 = codon.search(v511);
      var v29 = v323 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v324 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v324 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v325 = geneticCodeMatchExp.length;
      v30 = j < v325
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v512 = testSequence.length;
    var v326 = v512 - 3;
    v32 = i$$2 <= v326
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v327 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v327;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v513 = arrayOfPatterns$$1[z$$3]
    }
    var v328 = v513.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v328 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v329 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v329
  }
  var i$$3 = 0;
  var v330 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v330;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v514 = arrayOfPatterns$$1[i$$3]
    }
    var v331 = "[" + v514;
    var v35 = v331 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v332 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v332;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v515 = arrayOfPatterns$$1[j$$1]
      }
      var v333 = v515.search(re);
      var v36 = v333 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v334 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v334
    }
    i$$3 = i$$3 + 1;
    var v335 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v335
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v336 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v336;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v516 = arrayOfPatterns$$2[z$$4]
    }
    var v337 = v516.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v337 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v517 = arrayOfPatterns$$2[z$$4]
    }
    var v338 = moreExpressionCheck(v517);
    var v40 = v338 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v339 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v339
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v588 = getSequenceFromFasta(text$$7);
  var v518 = v588.replace(/[^A-Za-z]/g, "");
  var v340 = v518.length;
  var v43 = v340 > maxInput;
  if(v43) {
    var v341 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v341 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v342 = text$$8.length;
  var v45 = v342 > maxInput$$1;
  if(v45) {
    var v343 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v343 + " characters.";
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
  var v344 = alignArray.length;
  var v52 = v344 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v345 = alignArray.length;
  var v54 = i$$4 < v345;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v519 = alignArray[i$$4]
    }
    var v346 = v519.search(/[^\s]+\s/);
    var v53 = v346 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v347 = alignArray.length;
    v54 = i$$4 < v347
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
  var v348 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v348 != -1;
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
  var v349 = sequence$$2.length;
  var v58 = "&gt;results for " + v349;
  var stringToReturn = v58 + " residue sequence ";
  var v350 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v350 != -1;
  if(v60) {
    var v351 = stringToReturn + '"';
    var v59 = v351 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v352 = stringToReturn + ' starting "';
  var v353 = sequence$$2.substring(0, 10);
  var v61 = v352 + v353;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v354 = sequenceOne.length;
  var v62 = "Search results for " + v354;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v355 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v355 != -1;
  if(v64) {
    var v356 = stringToReturn$$1 + '"';
    var v63 = v356 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v357 = stringToReturn$$1 + ' starting "';
  var v358 = sequenceOne.substring(0, 10);
  var v65 = v357 + v358;
  stringToReturn$$1 = v65 + '"\n';
  var v359 = stringToReturn$$1 + "and ";
  var v360 = sequenceTwo.length;
  var v66 = v359 + v360;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v361 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v361 != -1;
  if(v68) {
    var v362 = stringToReturn$$1 + '"';
    var v67 = v362 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v363 = stringToReturn$$1 + ' starting "';
  var v364 = sequenceTwo.substring(0, 10);
  var v69 = v363 + v364;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v365 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v365;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v589 = arrayOfPatterns$$3[j$$2]
    }
    var v520 = v589.match(/\/.+\//);
    var v366 = v520 + "gi";
    if(JAMScript.isEval(eval)) {
      var v755 = eval("introspect(JAMScript.introspectors.processAll) { " + v366 + " }")
    }else {
      var v755 = JAMScript.call(eval, null, [v366])
    }
    v72[v73] = v755;
    j$$2 = j$$2 + 1;
    var v367 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v367
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v368 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v368;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v521 = arrayOfPatterns$$4[j$$3]
    }
    var v369 = v521.match(/=[a-zA-Z\*]/);
    var v756 = v369.toString();
    v76[v77] = v756;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v370 = geneticCodeMatchResult$$1[j$$3]
    }
    var v757 = v370.replace(/=/g, "");
    v78[v79] = v757;
    j$$3 = j$$3 + 1;
    var v371 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v371
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v372 = sequence$$3.length;
  var v81 = "Results for " + v372;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v373 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v373 != -1;
  if(v83) {
    var v374 = stringToReturn$$2 + '"';
    var v82 = v374 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v375 = stringToReturn$$2 + ' starting "';
  var v376 = sequence$$3.substring(0, 10);
  var v84 = v375 + v376;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v522 = "Results for " + topology;
  var v377 = v522 + " ";
  var v378 = sequence$$4.length;
  var v86 = v377 + v378;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v379 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v379 != -1;
  if(v88) {
    var v380 = stringToReturn$$3 + '"';
    var v87 = v380 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v381 = stringToReturn$$3 + ' starting "';
  var v382 = sequence$$4.substring(0, 10);
  var v89 = v381 + v382;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v383 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v383;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v384 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v384 != -1;
  if(v93) {
    var v385 = stringToReturn$$4 + '"';
    var v92 = v385 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v386 = stringToReturn$$4 + ' starting "';
  var v387 = sequenceOne$$1.substring(0, 10);
  var v94 = v386 + v387;
  stringToReturn$$4 = v94 + '"\n';
  var v388 = stringToReturn$$4 + "and ";
  var v389 = sequenceTwo$$1.length;
  var v95 = v388 + v389;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v390 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v390 != -1;
  if(v97) {
    var v391 = stringToReturn$$4 + '"';
    var v96 = v391 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v392 = stringToReturn$$4 + ' starting "';
  var v393 = sequenceTwo$$1.substring(0, 10);
  var v98 = v392 + v393;
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
    var v394 = Math.random();
    var v395 = components.length;
    var v100 = v394 * v395;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v396 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v396 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v397 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v397 != -1;
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
  var v523 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v398 = v523 != -1;
  var v525 = !v398;
  if(v525) {
    var v590 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v524 = v590 != -1;
    var v592 = !v524;
    if(v592) {
      var v635 = expressionToCheck.search(/\[\]/);
      var v591 = v635 != -1;
      var v637 = !v591;
      if(v637) {
        var v665 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v636 = v665 != -1;
        var v667 = !v636;
        if(v667) {
          var v678 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v666 = v678 != -1;
          var v680 = !v666;
          if(v680) {
            var v691 = expressionToCheck.search(/\|\|/);
            var v679 = v691 != -1;
            var v693 = !v679;
            if(v693) {
              var v703 = expressionToCheck.search(/\/\|/);
              var v692 = v703 != -1;
              var v705 = !v692;
              if(v705) {
                var v714 = expressionToCheck.search(/\|\//);
                var v704 = v714 != -1;
                var v716 = !v704;
                if(v716) {
                  var v723 = expressionToCheck.search(/\[.\]/);
                  var v715 = v723 != -1;
                  var v725 = !v715;
                  if(v725) {
                    var v730 = expressionToCheck.search(/\</);
                    var v724 = v730 != -1;
                    var v732 = !v724;
                    if(v732) {
                      var v731 = expressionToCheck.search(/\>/);
                      v724 = v731 != -1
                    }
                    v715 = v724
                  }
                  v704 = v715
                }
                v692 = v704
              }
              v679 = v692
            }
            v666 = v679
          }
          v636 = v666
        }
        v591 = v636
      }
      v524 = v591
    }
    v398 = v524
  }
  var v105 = v398;
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
  var v593 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v526 = v593 + "<head>\n";
  var v399 = v526 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v399 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v745 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v741 = v745 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v737 = v741 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v733 = v737 + "div.info {font-weight: bold}\n";
    var v726 = v733 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v717 = v726 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v706 = v717 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v694 = v706 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v681 = v694 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v668 = v681 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v638 = v668 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v594 = v638 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v527 = v594 + "td.many {color: #000000}\n";
    var v400 = v527 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v400 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v749 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v746 = v749 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v742 = v746 + "div.title {display: none}\n";
    var v738 = v742 + "div.info {font-weight: bold}\n";
    var v734 = v738 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v727 = v734 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v718 = v727 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v707 = v718 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v695 = v707 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v682 = v695 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v669 = v682 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v639 = v669 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v595 = v639 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v528 = v595 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v401 = v528 + "img {display: none}\n";
    var v115 = v401 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v596 = "</head>\n" + '<body class="main">\n';
  var v529 = v596 + '<div class="title">';
  var v402 = v529 + title$$6;
  var v117 = v402 + " results</div>\n";
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
  var v597 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v530 = v597 + "<head>\n";
  var v403 = v530 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v403 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v747 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v743 = v747 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v739 = v743 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v735 = v739 + "div.info {font-weight: bold}\n";
    var v728 = v735 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v719 = v728 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v708 = v719 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v696 = v708 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v683 = v696 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v670 = v683 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v640 = v670 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v598 = v640 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v531 = v598 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v404 = v531 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v404 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v751 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v750 = v751 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v748 = v750 + "div.title {display: none}\n";
    var v744 = v748 + "div.info {font-weight: bold}\n";
    var v740 = v744 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v736 = v740 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v729 = v736 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v720 = v729 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v709 = v720 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v697 = v709 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v684 = v697 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v671 = v684 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v641 = v671 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v599 = v641 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v532 = v599 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v405 = v532 + "img {display: none}\n";
    var v123 = v405 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v600 = "</head>\n" + '<body class="main">\n';
  var v533 = v600 + '<div class="title">';
  var v406 = v533 + title$$8;
  var v125 = v406 + " results</div>\n";
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
  var v407 = dnaSequence$$1.search(/./);
  var v126 = v407 != -1;
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
  var v408 = testArray[0];
  var v130 = v408 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v409 = testString.search(re$$2);
  var v131 = v409 == -1;
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
  var v410 = testNum.toFixed(3);
  var v134 = v410 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v411 = testNum.toPrecision(5);
  var v135 = v411 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v412 = theNumber$$1.search(/\d/);
  var v136 = v412 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v534 = emblFile.search(/ID/);
  var v413 = v534 == -1;
  var v536 = !v413;
  if(v536) {
    var v601 = emblFile.search(/AC/);
    var v535 = v601 == -1;
    var v603 = !v535;
    if(v603) {
      var v642 = emblFile.search(/DE/);
      var v602 = v642 == -1;
      var v644 = !v602;
      if(v644) {
        var v643 = emblFile.search(/SQ/);
        v602 = v643 == -1
      }
      v535 = v602
    }
    v413 = v535
  }
  var v137 = v413;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v414 = theNumber$$2.search(/\d/);
  var v138 = v414 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v415 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v415 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v416 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v416 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v417 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v417 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v537 = genBankFile.search(/LOCUS/);
  var v418 = v537 == -1;
  var v539 = !v418;
  if(v539) {
    var v604 = genBankFile.search(/DEFINITION/);
    var v538 = v604 == -1;
    var v606 = !v538;
    if(v606) {
      var v645 = genBankFile.search(/ACCESSION/);
      var v605 = v645 == -1;
      var v647 = !v605;
      if(v647) {
        var v646 = genBankFile.search(/ORIGIN/);
        v605 = v646 == -1
      }
      v538 = v605
    }
    v418 = v538
  }
  var v143 = v418;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v540 = genBankFile$$1.search(/LOCUS/);
  var v419 = v540 == -1;
  var v542 = !v419;
  if(v542) {
    var v607 = genBankFile$$1.search(/DEFINITION/);
    var v541 = v607 == -1;
    var v609 = !v541;
    if(v609) {
      var v648 = genBankFile$$1.search(/ACCESSION/);
      var v608 = v648 == -1;
      var v650 = !v608;
      if(v650) {
        var v649 = genBankFile$$1.search(/ORIGIN/);
        v608 = v649 == -1
      }
      v541 = v608
    }
    v419 = v541
  }
  var v144 = v419;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v420 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v420 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v543 = emblFile$$1.search(/ID/);
  var v421 = v543 == -1;
  var v545 = !v421;
  if(v545) {
    var v610 = emblFile$$1.search(/AC/);
    var v544 = v610 == -1;
    var v612 = !v544;
    if(v612) {
      var v651 = emblFile$$1.search(/DE/);
      var v611 = v651 == -1;
      var v653 = !v611;
      if(v653) {
        var v652 = emblFile$$1.search(/SQ/);
        v611 = v652 == -1
      }
      v544 = v611
    }
    v421 = v544
  }
  var v146 = v421;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v422 = emblFile$$1.search(/^FT/m);
  var v147 = v422 == -1;
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
    var v423 = basePerLine / groupSize;
    var v152 = j$$6 <= v423;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v424 = k + i$$5;
        var v150 = text$$10.charAt(v424);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v425 = basePerLine / groupSize;
      v152 = j$$6 <= v425
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
    var v426 = adjustment < 0;
    if(v426) {
      v426 = adjusted >= 0
    }
    var v156 = v426;
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
    var v427 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v427;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v428 = i$$6 + k$$1;
        var v157 = v428 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v429 = k$$1 + i$$6;
        var v159 = text$$12.charAt(v429);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v430 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v430, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v431 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v431
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v613 = adjustNumbering(lineNum, numberingAdjustment);
      var v546 = rightNum(v613, "", 8, tabIn$$3);
      var v432 = v546 + lineOfText$$1;
      var v167 = v432 + "\n";
      JAMScript.call(v166.write, v166, [v167]);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v614 = adjustNumbering(lineNum, numberingAdjustment);
        var v547 = rightNum(v614, "", 8, tabIn$$3);
        var v548 = complement(lineOfText$$1);
        var v433 = v547 + v548;
        var v169 = v433 + "\n";
        JAMScript.call(v168.write, v168, [v169]);
        var v170 = outputWindow.document;
        JAMScript.call(v170.write, v170, ["\n"])
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v549 = lineOfText$$1;
        var v550 = adjustNumbering(i$$6, numberingAdjustment);
        var v434 = v549 + v550;
        var v173 = v434 + "\n";
        JAMScript.call(v172.write, v172, [v173]);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v551 = complement(lineOfText$$1);
          var v552 = adjustNumbering(i$$6, numberingAdjustment);
          var v435 = v551 + v552;
          var v175 = v435 + "\n";
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
            var v436 = complement(lineOfText$$1);
            var v183 = v436 + "\n";
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
    var v437 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v437;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v438 = i$$7 + k$$2;
        var v190 = v438 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v439 = k$$2 + i$$7;
        var v192 = text$$13.charAt(v439);
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
      var v440 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v440
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v553 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v441 = v553 + lineOfText$$2;
      var v200 = v441 + "\n";
      JAMScript.call(v199.write, v199, [v200])
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v442 = lineOfText$$2 + i$$7;
        var v202 = v442 + "\n";
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
  var v554 = sequence$$13.length;
  var v443 = v554 <= firstIndexToMutate;
  var v556 = !v443;
  if(v556) {
    var v555 = lastIndexToMutate < 0;
    var v615 = !v555;
    if(v615) {
      v555 = lastIndexToMutate <= firstIndexToMutate
    }
    v443 = v555
  }
  var v211 = v443;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v444 = Math.random();
    var v212 = v444 * maxNum;
    randNum = Math.floor(v212);
    var v445 = randNum < firstIndexToMutate;
    var v557 = !v445;
    if(v557) {
      v445 = randNum > lastIndexToMutate
    }
    var v213 = v445;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v446 = Math.random();
      var v447 = components$$1.length;
      var v214 = v446 * v447;
      componentsIndex = Math.round(v214);
      var v448 = components$$1.length;
      var v215 = componentsIndex == v448;
      if(v215) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v449 = components$$1[componentsIndex]
      }
      var v216 = v449 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v450 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v451 = components$$1[componentsIndex]
    }
    var v217 = v450 + v451;
    var v452 = randNum + 1;
    var v453 = sequence$$13.length;
    var v218 = sequence$$13.substring(v452, v453);
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
    var v454 = Math.random();
    var v455 = components$$2.length;
    var v222 = v454 * v455;
    tempNum$$1 = Math.floor(v222);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v456 = sequence$$14.length;
    var v225 = v456 == 60;
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
    var v616 = sequence$$15.length;
    var v558 = v616 - lookAhead;
    var v559 = sequence$$15.length;
    var v457 = sequence$$15.substring(v558, v559);
    var v230 = v457 + sequence$$15;
    var v231 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAMScript.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v234 = outputWindow.document;
  var v617 = '<tr><td class="title" width="200px">' + "Site:";
  var v560 = v617 + '</td><td class="title">';
  var v458 = v560 + "Positions:";
  var v235 = v458 + "</td></tr>\n";
  JAMScript.call(v234.write, v234, [v235]);
  var i$$9 = 0;
  var v459 = arrayOfItems.length;
  var v251 = i$$9 < v459;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v460 = arrayOfItems[i$$9]
    }
    var v236 = v460.match(/\/.+\//);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v618 = arrayOfItems[i$$9]
    }
    var v561 = v618.match(/\)\D*\d+/);
    var v461 = v561.toString();
    var v237 = v461.replace(/\)\D*/, "");
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v462 = matchPosition >= lowerLimit;
      if(v462) {
        v462 = matchPosition < upperLimit
      }
      var v241 = v462;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v463 = matchPosition - shiftValue;
        var v240 = v463 + 1;
        tempString$$1 = v239 + v240
      }
      var v464 = matchExp.lastIndex;
      var v562 = RegExp.lastMatch;
      var v465 = v562.length;
      var v242 = v464 - v465;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v466 = tempString$$1.search(/\d/);
    var v244 = v466 != -1;
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
    var v698 = '<tr><td class="' + backGroundClass;
    var v685 = v698 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v721 = arrayOfItems[i$$9]
    }
    var v710 = v721.match(/\([^\(]+\)/);
    var v699 = v710.toString();
    var v686 = v699.replace(/\(|\)/g, "");
    var v672 = v685 + v686;
    var v654 = v672 + '</td><td class="';
    var v619 = v654 + backGroundClass;
    var v563 = v619 + '">';
    var v467 = v563 + tempString$$1;
    var v250 = v467 + "</td></tr>\n";
    JAMScript.call(v249.write, v249, [v250]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v468 = arrayOfItems.length;
    v251 = i$$9 < v468
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
  var v673 = '<tr><td class="title">' + "Pattern:";
  var v655 = v673 + '</td><td class="title">';
  var v620 = v655 + "Times found:";
  var v564 = v620 + '</td><td class="title">';
  var v469 = v564 + "Percentage:";
  var v255 = v469 + "</td></tr>\n";
  JAMScript.call(v254.write, v254, [v255]);
  var i$$10 = 0;
  var v470 = arrayOfItems$$1.length;
  var v264 = i$$10 < v470;
  for(;v264;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v471 = arrayOfItems$$1[i$$10]
    }
    var v256 = v471.match(/\/[^\/]+\//);
    var matchExp$$1 = v256 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v472 = sequence$$16.search(matchExp$$1);
    var v258 = v472 != -1;
    if(v258) {
      var v257 = sequence$$16.match(matchExp$$1);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v565 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v656 = arrayOfItems$$1[i$$10]
    }
    var v621 = v656.match(/\d+/);
    var v566 = parseFloat(v621);
    var v473 = v565 - v566;
    var v261 = v473 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v474 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v622 = arrayOfItems$$1[i$$10]
      }
      var v567 = v622.match(/\d+/);
      var v475 = parseFloat(v567);
      var v260 = v474 - v475;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v722 = arrayOfItems$$1[i$$10]
    }
    var v711 = v722.match(/\([^\(]+\)\b/);
    var v700 = v711.toString();
    var v687 = v700.replace(/\(|\)/g, "");
    var v674 = "<tr><td>" + v687;
    var v657 = v674 + "</td><td>";
    var v623 = v657 + tempNumber;
    var v568 = v623 + "</td><td>";
    var v569 = percentage.toFixed(2);
    var v476 = v568 + v569;
    var v263 = v476 + "</td></tr>\n";
    JAMScript.call(v262.write, v262, [v263]);
    i$$10 = i$$10 + 1;
    var v477 = arrayOfItems$$1.length;
    v264 = i$$10 < v477
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
  var v478 = sequence$$17.length;
  var v272 = v478 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v479 = Math.random();
    var v266 = v479 * maxNum$$1;
    randNum$$1 = Math.floor(v266);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v267, v268);
    sequence$$17 = tempString1 + tempString2;
    var v480 = tempSeq.length;
    var v271 = v480 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAMScript.call(v269.write, v269, [v270]);
      tempSeq = ""
    }
    var v481 = sequence$$17.length;
    v272 = v481 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAMScript.call(v273.write, v273, [v274]);
  return true
}
function emblTrans(theDocument) {
  var maxInput$$3 = 2E5;
  var v482 = testScript();
  var v275 = v482 == false;
  if(v275) {
    return false
  }
  var v688 = theDocument.forms;
  var v675 = v688[0];
  var v658 = v675.elements;
  var v624 = v658[0];
  var v570 = checkFormElement(v624);
  var v483 = v570 == false;
  var v572 = !v483;
  if(v572) {
    var v712 = theDocument.forms;
    var v701 = v712[0];
    var v689 = v701.elements;
    var v676 = v689[0];
    var v659 = v676.value;
    var v625 = verifyEmblFeat(v659);
    var v571 = v625 == false;
    var v627 = !v571;
    if(v627) {
      var v713 = theDocument.forms;
      var v702 = v713[0];
      var v690 = v702.elements;
      var v677 = v690[0];
      var v660 = v677.value;
      var v626 = checkTextLength(v660, maxInput$$3);
      v571 = v626 == false
    }
    v483 = v571
  }
  var v276 = v483;
  if(v276) {
    return false
  }
  openWindow("EMBL Trans Extractor");
  openPre();
  var v661 = theDocument.forms;
  var v628 = v661[0];
  var v573 = v628.elements;
  var v484 = v573[0];
  var v277 = v484.value;
  emblTransExtract(v277);
  closePre();
  closeWindow();
  return true
}
function emblTransExtract(emblFile$$2) {
  var title$$9;
  var v278 = "_" + emblFile$$2;
  emblFile$$2 = v278 + "_";
  var recordArray = emblFile$$2.split(/ID\s\s\s[^\f\n\r]*/);
  var i$$11 = 1;
  var v485 = recordArray.length;
  var v287 = i$$11 < v485;
  for(;v287;) {
    var mainArray = emblFile$$2.split(/[\f\n\r]\s*FH   Key             Location\/Qualifiers[\f\n\r]+\s*FH|[\f\n\r]\s*XX[\s]*[\f\n\r]\s*SQ[^\f\n\r]*/);
    var v574 = mainArray[0];
    var v486 = v574.search(/[\f\n\r]\s*DE[^\f\n\r]+/);
    var v280 = v486 != -1;
    if(v280) {
      var v575 = mainArray[0];
      var v487 = v575.match(/[\f\n\r]\s*DE[^\f\n\r]+/);
      var v279 = v487.toString();
      title$$9 = v279.replace(/[\f\n\r]\s*DE\s*/, "")
    }else {
      title$$9 = "Untitled"
    }
    var v488 = title$$9.replace(/[\f\n\r\t]+$/g, "");
    var v281 = filterFastaTitle(v488);
    title$$9 = v281 + "\n";
    var v282 = mainArray[2];
    var dnaSequenceArray = v282.split(/\/{2}/);
    var v283 = outputWindow.document;
    var v284 = title$$9 + "\n";
    JAMScript.call(v283.write, v283, [v284]);
    var v489 = dnaSequenceArray.length;
    var v285 = v489 == 1;
    if(v285) {
      alert("The entire EMBL file may not have been processed.");
      outputWindow.focus()
    }
    var v286 = mainArray[1];
    var featureArray = v286.split(/[\f\n\r]FT {3,12}\b/);
    showFeatureTrans(featureArray);
    i$$11 = i$$11 + 1;
    var v490 = recordArray.length;
    v287 = i$$11 < v490
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
  var v491 = arrayOfFeatures.length;
  var v299 = i$$12 < v491;
  for(;v299;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v576 = arrayOfFeatures[i$$12]
    }
    var v492 = v576.search(/\/translation/);
    var v298 = v492 != -1;
    if(v298) {
      var v288 = arrayOfFeatures;
      var v289 = i$$12;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v493 = arrayOfFeatures[i$$12]
      }
      var v758 = v493.replace(/[\[\]\*]/g, "");
      v288[v289] = v758;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v494 = arrayOfFeatures[i$$12]
      }
      var v290 = v494.match(/[^ \f\n\r\t\v]+ /);
      featureTitle = v290.toString();
      theTitle = new RegExp(featureTitle);
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v291 = arrayOfFeatures[i$$12]
      }
      removedTitle = v291.replace(theTitle, "");
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v495 = arrayOfFeatures[i$$12]
      }
      var v292 = v495.match(/\/[^\f\n\r]+/);
      firstQualifier = v292.toString();
      var v293 = outputWindow.document;
      var v629 = filterFastaTitle(featureTitle);
      var v577 = "&gt;" + v629;
      var v578 = filterFastaTitle(firstQualifier);
      var v496 = v577 + v578;
      var v294 = v496 + "\n";
      JAMScript.call(v293.write, v293, [v294]);
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v295 = arrayOfFeatures[i$$12]
      }
      translation = v295.match(/\/translation="[^"]+"/);
      translation = translation.toString();
      translation = translation.replace(/\/translation/, "");
      translation = translation.replace(/^FT\s+/gm, "");
      translation = removeNonProtein(translation);
      translation = addReturns(translation);
      var v296 = outputWindow.document;
      JAMScript.call(v296.write, v296, [translation]);
      translationFound = true;
      var v297 = outputWindow.document;
      JAMScript.call(v297.write, v297, ["\n\n"])
    }
    i$$12 = i$$12 + 1;
    var v497 = arrayOfFeatures.length;
    v299 = i$$12 < v497
  }
  var v301 = translationFound == false;
  if(v301) {
    var v300 = outputWindow.document;
    JAMScript.call(v300.write, v300, ["No translations were found.\n"])
  }
  return true
}
JAMScript.set(document, "onload", v2);
var v302 = document.getElementById("submitbtn");
JAMScript.set(v302, "onclick", v3);
var v303 = document.getElementById("clearbtn");
JAMScript.set(v303, "onclick", v4);

