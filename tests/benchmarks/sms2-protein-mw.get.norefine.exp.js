function v4() {
  var v572 = document.forms;
  var v491 = v572[0];
  var v300 = v491.elements;
  var v5 = v300[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    proteinMw(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v301 = document.main_form;
  var v7 = v301.main_submit;
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
  var v302 = arrayOfSequences.length;
  var v9 = v302 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v303 = arrayOfTitles.length;
  var v11 = i$$1 < v303;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v573 = arrayOfTitles[i$$1]
    }
    var v492 = v573.search(/\S/);
    var v304 = v492 == -1;
    var v494 = !v304;
    if(v494) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v625 = arrayOfSequences[i$$1]
      }
      var v574 = v625.search(/\S/);
      var v493 = v574 == -1;
      var v576 = !v493;
      if(v576) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v626 = arrayOfSequences[i$$1]
        }
        var v575 = v626.length;
        v493 = v575 != lengthOfAlign
      }
      v304 = v493
    }
    var v10 = v304;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v305 = arrayOfTitles.length;
    v11 = i$$1 < v305
  }
  return true
}
function checkCodonTable(codonTable) {
  var v495 = codonTable.search(/AmAcid/);
  var v306 = v495 == -1;
  var v497 = !v306;
  if(v497) {
    var v577 = codonTable.search(/Codon/);
    var v496 = v577 == -1;
    var v579 = !v496;
    if(v579) {
      var v627 = codonTable.search(/Number/);
      var v578 = v627 == -1;
      var v629 = !v578;
      if(v629) {
        var v661 = codonTable.search(/\/1000/);
        var v628 = v661 == -1;
        var v663 = !v628;
        if(v663) {
          var v662 = codonTable.search(/Fraction\s*\.\./);
          v628 = v662 == -1
        }
        v578 = v628
      }
      v496 = v578
    }
    v306 = v496
  }
  var v12 = v306;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v498 = formElement.value;
  var v307 = v498.search(/\S/);
  var v13 = v307 == -1;
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
  var v308 = arrayOfPatterns.length;
  var v16 = z$$2 < v308;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v499 = arrayOfPatterns[z$$2]
    }
    var v309 = v499.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v309 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v500 = arrayOfPatterns[z$$2]
    }
    var v310 = moreExpressionCheck(v500);
    var v15 = v310 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v311 = arrayOfPatterns.length;
    v16 = z$$2 < v311
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v312 = arrayOfPatterns.length;
  var v25 = j < v312;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v580 = arrayOfPatterns[j]
    }
    var v501 = v580.match(/\/.+\//);
    var v313 = v501 + "gi";
    if(JAMScript.isEval(eval)) {
      var v754 = eval("introspect(JAMScript.introspectors.processAll) { " + v313 + " }")
    }else {
      var v754 = JAMScript.call(eval, null, [v313])
    }
    v19[v20] = v754;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v502 = arrayOfPatterns[j]
    }
    var v314 = v502.match(/=[a-zA-Z\*]/);
    var v755 = v314.toString();
    v21[v22] = v755;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v315 = geneticCodeMatchResult[j]
    }
    var v756 = v315.replace(/=/g, "");
    v23[v24] = v756;
    j = j + 1;
    var v316 = arrayOfPatterns.length;
    v25 = j < v316
  }
  var i$$2 = 0;
  var v503 = testSequence.length;
  var v317 = v503 - 3;
  var v32 = i$$2 <= v317;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v318 = geneticCodeMatchExp.length;
    var v30 = j < v318;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v504 = geneticCodeMatchExp[j]
      }
      var v319 = codon.search(v504);
      var v29 = v319 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v320 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v320 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v321 = geneticCodeMatchExp.length;
      v30 = j < v321
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v505 = testSequence.length;
    var v322 = v505 - 3;
    v32 = i$$2 <= v322
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v323 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v323;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v506 = arrayOfPatterns$$1[z$$3]
    }
    var v324 = v506.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v324 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v325 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v325
  }
  var i$$3 = 0;
  var v326 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v326;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v507 = arrayOfPatterns$$1[i$$3]
    }
    var v327 = "[" + v507;
    var v35 = v327 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v328 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v328;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v508 = arrayOfPatterns$$1[j$$1]
      }
      var v329 = v508.search(re);
      var v36 = v329 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v330 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v330
    }
    i$$3 = i$$3 + 1;
    var v331 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v331
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v332 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v332;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v509 = arrayOfPatterns$$2[z$$4]
    }
    var v333 = v509.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v333 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v510 = arrayOfPatterns$$2[z$$4]
    }
    var v334 = moreExpressionCheck(v510);
    var v40 = v334 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v335 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v335
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v581 = getSequenceFromFasta(text$$7);
  var v511 = v581.replace(/[^A-Za-z]/g, "");
  var v336 = v511.length;
  var v43 = v336 > maxInput;
  if(v43) {
    var v337 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v337 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v338 = text$$8.length;
  var v45 = v338 > maxInput$$1;
  if(v45) {
    var v339 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v339 + " characters.";
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
  var v340 = alignArray.length;
  var v52 = v340 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v341 = alignArray.length;
  var v54 = i$$4 < v341;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v512 = alignArray[i$$4]
    }
    var v342 = v512.search(/[^\s]+\s/);
    var v53 = v342 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v343 = alignArray.length;
    v54 = i$$4 < v343
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
  var v344 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v344 != -1;
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
  var v345 = sequence$$2.length;
  var v58 = "&gt;results for " + v345;
  var stringToReturn = v58 + " residue sequence ";
  var v346 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v346 != -1;
  if(v60) {
    var v347 = stringToReturn + '"';
    var v59 = v347 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v348 = stringToReturn + ' starting "';
  var v349 = sequence$$2.substring(0, 10);
  var v61 = v348 + v349;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v350 = sequenceOne.length;
  var v62 = "Search results for " + v350;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v351 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v351 != -1;
  if(v64) {
    var v352 = stringToReturn$$1 + '"';
    var v63 = v352 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v353 = stringToReturn$$1 + ' starting "';
  var v354 = sequenceOne.substring(0, 10);
  var v65 = v353 + v354;
  stringToReturn$$1 = v65 + '"\n';
  var v355 = stringToReturn$$1 + "and ";
  var v356 = sequenceTwo.length;
  var v66 = v355 + v356;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v357 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v357 != -1;
  if(v68) {
    var v358 = stringToReturn$$1 + '"';
    var v67 = v358 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v359 = stringToReturn$$1 + ' starting "';
  var v360 = sequenceTwo.substring(0, 10);
  var v69 = v359 + v360;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v361 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v361;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v582 = arrayOfPatterns$$3[j$$2]
    }
    var v513 = v582.match(/\/.+\//);
    var v362 = v513 + "gi";
    if(JAMScript.isEval(eval)) {
      var v757 = eval("introspect(JAMScript.introspectors.processAll) { " + v362 + " }")
    }else {
      var v757 = JAMScript.call(eval, null, [v362])
    }
    v72[v73] = v757;
    j$$2 = j$$2 + 1;
    var v363 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v363
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v364 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v364;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v514 = arrayOfPatterns$$4[j$$3]
    }
    var v365 = v514.match(/=[a-zA-Z\*]/);
    var v758 = v365.toString();
    v76[v77] = v758;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v366 = geneticCodeMatchResult$$1[j$$3]
    }
    var v759 = v366.replace(/=/g, "");
    v78[v79] = v759;
    j$$3 = j$$3 + 1;
    var v367 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v367
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v368 = sequence$$3.length;
  var v81 = "Results for " + v368;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v369 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v369 != -1;
  if(v83) {
    var v370 = stringToReturn$$2 + '"';
    var v82 = v370 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v371 = stringToReturn$$2 + ' starting "';
  var v372 = sequence$$3.substring(0, 10);
  var v84 = v371 + v372;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v515 = "Results for " + topology;
  var v373 = v515 + " ";
  var v374 = sequence$$4.length;
  var v86 = v373 + v374;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v375 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v375 != -1;
  if(v88) {
    var v376 = stringToReturn$$3 + '"';
    var v87 = v376 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v377 = stringToReturn$$3 + ' starting "';
  var v378 = sequence$$4.substring(0, 10);
  var v89 = v377 + v378;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v379 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v379;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v380 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v380 != -1;
  if(v93) {
    var v381 = stringToReturn$$4 + '"';
    var v92 = v381 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v382 = stringToReturn$$4 + ' starting "';
  var v383 = sequenceOne$$1.substring(0, 10);
  var v94 = v382 + v383;
  stringToReturn$$4 = v94 + '"\n';
  var v384 = stringToReturn$$4 + "and ";
  var v385 = sequenceTwo$$1.length;
  var v95 = v384 + v385;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v386 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v386 != -1;
  if(v97) {
    var v387 = stringToReturn$$4 + '"';
    var v96 = v387 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v388 = stringToReturn$$4 + ' starting "';
  var v389 = sequenceTwo$$1.substring(0, 10);
  var v98 = v388 + v389;
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
    var v390 = Math.random();
    var v391 = components.length;
    var v100 = v390 * v391;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v392 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v392 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v393 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v393 != -1;
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
  var v516 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v394 = v516 != -1;
  var v518 = !v394;
  if(v518) {
    var v583 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v517 = v583 != -1;
    var v585 = !v517;
    if(v585) {
      var v630 = expressionToCheck.search(/\[\]/);
      var v584 = v630 != -1;
      var v632 = !v584;
      if(v632) {
        var v664 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v631 = v664 != -1;
        var v666 = !v631;
        if(v666) {
          var v680 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v665 = v680 != -1;
          var v682 = !v665;
          if(v682) {
            var v696 = expressionToCheck.search(/\|\|/);
            var v681 = v696 != -1;
            var v698 = !v681;
            if(v698) {
              var v707 = expressionToCheck.search(/\/\|/);
              var v697 = v707 != -1;
              var v709 = !v697;
              if(v709) {
                var v716 = expressionToCheck.search(/\|\//);
                var v708 = v716 != -1;
                var v718 = !v708;
                if(v718) {
                  var v725 = expressionToCheck.search(/\[.\]/);
                  var v717 = v725 != -1;
                  var v727 = !v717;
                  if(v727) {
                    var v732 = expressionToCheck.search(/\</);
                    var v726 = v732 != -1;
                    var v734 = !v726;
                    if(v734) {
                      var v733 = expressionToCheck.search(/\>/);
                      v726 = v733 != -1
                    }
                    v717 = v726
                  }
                  v708 = v717
                }
                v697 = v708
              }
              v681 = v697
            }
            v665 = v681
          }
          v631 = v665
        }
        v584 = v631
      }
      v517 = v584
    }
    v394 = v517
  }
  var v105 = v394;
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
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v760 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v760[2], v760[1], v760[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v586 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v519 = v586 + "<head>\n";
  var v395 = v519 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v395 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v747 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v743 = v747 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v739 = v743 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v735 = v739 + "div.info {font-weight: bold}\n";
    var v728 = v735 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v719 = v728 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v710 = v719 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v699 = v710 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v683 = v699 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v667 = v683 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v633 = v667 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v587 = v633 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v520 = v587 + "td.many {color: #000000}\n";
    var v396 = v520 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v396 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v751 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v748 = v751 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v744 = v748 + "div.title {display: none}\n";
    var v740 = v744 + "div.info {font-weight: bold}\n";
    var v736 = v740 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v729 = v736 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v720 = v729 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v711 = v720 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v700 = v711 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v684 = v700 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v668 = v684 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v634 = v668 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v588 = v634 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v521 = v588 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v397 = v521 + "img {display: none}\n";
    var v115 = v397 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v589 = "</head>\n" + '<body class="main">\n';
  var v522 = v589 + '<div class="title">';
  var v398 = v522 + title$$7;
  var v117 = v398 + " results</div>\n";
  JAMScript.call(v116.write, v116, [v117]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v761 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v761[2], v761[1], v761[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v590 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v523 = v590 + "<head>\n";
  var v399 = v523 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v399 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v749 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v745 = v749 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v741 = v745 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v737 = v741 + "div.info {font-weight: bold}\n";
    var v730 = v737 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v721 = v730 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v712 = v721 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v701 = v712 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v685 = v701 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v669 = v685 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v635 = v669 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v591 = v635 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v524 = v591 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v400 = v524 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v400 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v753 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v752 = v753 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v750 = v752 + "div.title {display: none}\n";
    var v746 = v750 + "div.info {font-weight: bold}\n";
    var v742 = v746 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v738 = v742 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v731 = v738 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v722 = v731 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v713 = v722 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v702 = v713 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v686 = v702 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v670 = v686 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v636 = v670 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v592 = v636 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v525 = v592 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v401 = v525 + "img {display: none}\n";
    var v123 = v401 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v593 = "</head>\n" + '<body class="main">\n';
  var v526 = v593 + '<div class="title">';
  var v402 = v526 + title$$9;
  var v125 = v402 + " results</div>\n";
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
  var v403 = dnaSequence$$1.search(/./);
  var v126 = v403 != -1;
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
  var v404 = testArray[0];
  var v130 = v404 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v405 = testString.search(re$$2);
  var v131 = v405 == -1;
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
  var v406 = testNum.toFixed(3);
  var v134 = v406 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v407 = testNum.toPrecision(5);
  var v135 = v407 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v408 = theNumber$$1.search(/\d/);
  var v136 = v408 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v527 = emblFile.search(/ID/);
  var v409 = v527 == -1;
  var v529 = !v409;
  if(v529) {
    var v594 = emblFile.search(/AC/);
    var v528 = v594 == -1;
    var v596 = !v528;
    if(v596) {
      var v637 = emblFile.search(/DE/);
      var v595 = v637 == -1;
      var v639 = !v595;
      if(v639) {
        var v638 = emblFile.search(/SQ/);
        v595 = v638 == -1
      }
      v528 = v595
    }
    v409 = v528
  }
  var v137 = v409;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v410 = theNumber$$2.search(/\d/);
  var v138 = v410 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v411 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v411 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v412 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v412 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v413 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v413 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v530 = genBankFile.search(/LOCUS/);
  var v414 = v530 == -1;
  var v532 = !v414;
  if(v532) {
    var v597 = genBankFile.search(/DEFINITION/);
    var v531 = v597 == -1;
    var v599 = !v531;
    if(v599) {
      var v640 = genBankFile.search(/ACCESSION/);
      var v598 = v640 == -1;
      var v642 = !v598;
      if(v642) {
        var v641 = genBankFile.search(/ORIGIN/);
        v598 = v641 == -1
      }
      v531 = v598
    }
    v414 = v531
  }
  var v143 = v414;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v533 = genBankFile$$1.search(/LOCUS/);
  var v415 = v533 == -1;
  var v535 = !v415;
  if(v535) {
    var v600 = genBankFile$$1.search(/DEFINITION/);
    var v534 = v600 == -1;
    var v602 = !v534;
    if(v602) {
      var v643 = genBankFile$$1.search(/ACCESSION/);
      var v601 = v643 == -1;
      var v645 = !v601;
      if(v645) {
        var v644 = genBankFile$$1.search(/ORIGIN/);
        v601 = v644 == -1
      }
      v534 = v601
    }
    v415 = v534
  }
  var v144 = v415;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v416 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v416 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v536 = emblFile$$1.search(/ID/);
  var v417 = v536 == -1;
  var v538 = !v417;
  if(v538) {
    var v603 = emblFile$$1.search(/AC/);
    var v537 = v603 == -1;
    var v605 = !v537;
    if(v605) {
      var v646 = emblFile$$1.search(/DE/);
      var v604 = v646 == -1;
      var v648 = !v604;
      if(v648) {
        var v647 = emblFile$$1.search(/SQ/);
        v604 = v647 == -1
      }
      v537 = v604
    }
    v417 = v537
  }
  var v146 = v417;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v418 = emblFile$$1.search(/^FT/m);
  var v147 = v418 == -1;
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
    var v419 = basePerLine / groupSize;
    var v152 = j$$6 <= v419;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v420 = k + i$$5;
        var v150 = text$$10.charAt(v420);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v421 = basePerLine / groupSize;
      v152 = j$$6 <= v421
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
    var v422 = adjustment < 0;
    if(v422) {
      v422 = adjusted >= 0
    }
    var v156 = v422;
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
    var v423 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v423;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v424 = i$$6 + k$$1;
        var v157 = v424 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v425 = k$$1 + i$$6;
        var v159 = text$$12.charAt(v425);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v426 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v426, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v427 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v427
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v606 = adjustNumbering(lineNum, numberingAdjustment);
      var v539 = rightNum(v606, "", 8, tabIn$$3);
      var v428 = v539 + lineOfText$$1;
      var v167 = v428 + "\n";
      JAMScript.call(v166.write, v166, [v167]);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v607 = adjustNumbering(lineNum, numberingAdjustment);
        var v540 = rightNum(v607, "", 8, tabIn$$3);
        var v541 = complement(lineOfText$$1);
        var v429 = v540 + v541;
        var v169 = v429 + "\n";
        JAMScript.call(v168.write, v168, [v169]);
        var v170 = outputWindow.document;
        JAMScript.call(v170.write, v170, ["\n"])
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v542 = lineOfText$$1;
        var v543 = adjustNumbering(i$$6, numberingAdjustment);
        var v430 = v542 + v543;
        var v173 = v430 + "\n";
        JAMScript.call(v172.write, v172, [v173]);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v544 = complement(lineOfText$$1);
          var v545 = adjustNumbering(i$$6, numberingAdjustment);
          var v431 = v544 + v545;
          var v175 = v431 + "\n";
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
            var v432 = complement(lineOfText$$1);
            var v183 = v432 + "\n";
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
    var v433 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v433;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v434 = i$$7 + k$$2;
        var v190 = v434 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v435 = k$$2 + i$$7;
        var v192 = text$$13.charAt(v435);
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
      var v436 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v436
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v546 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v437 = v546 + lineOfText$$2;
      var v200 = v437 + "\n";
      JAMScript.call(v199.write, v199, [v200])
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v438 = lineOfText$$2 + i$$7;
        var v202 = v438 + "\n";
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
  var v547 = sequence$$13.length;
  var v439 = v547 <= firstIndexToMutate;
  var v549 = !v439;
  if(v549) {
    var v548 = lastIndexToMutate < 0;
    var v608 = !v548;
    if(v608) {
      v548 = lastIndexToMutate <= firstIndexToMutate
    }
    v439 = v548
  }
  var v211 = v439;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v440 = Math.random();
    var v212 = v440 * maxNum;
    randNum = Math.floor(v212);
    var v441 = randNum < firstIndexToMutate;
    var v550 = !v441;
    if(v550) {
      v441 = randNum > lastIndexToMutate
    }
    var v213 = v441;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v442 = Math.random();
      var v443 = components$$1.length;
      var v214 = v442 * v443;
      componentsIndex = Math.round(v214);
      var v444 = components$$1.length;
      var v215 = componentsIndex == v444;
      if(v215) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v445 = components$$1[componentsIndex]
      }
      var v216 = v445 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v446 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v447 = components$$1[componentsIndex]
    }
    var v217 = v446 + v447;
    var v448 = randNum + 1;
    var v449 = sequence$$13.length;
    var v218 = sequence$$13.substring(v448, v449);
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
    var v450 = Math.random();
    var v451 = components$$2.length;
    var v222 = v450 * v451;
    tempNum$$1 = Math.floor(v222);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v452 = sequence$$14.length;
    var v225 = v452 == 60;
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
    var v609 = sequence$$15.length;
    var v551 = v609 - lookAhead;
    var v552 = sequence$$15.length;
    var v453 = sequence$$15.substring(v551, v552);
    var v230 = v453 + sequence$$15;
    var v231 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAMScript.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v234 = outputWindow.document;
  var v610 = '<tr><td class="title" width="200px">' + "Site:";
  var v553 = v610 + '</td><td class="title">';
  var v454 = v553 + "Positions:";
  var v235 = v454 + "</td></tr>\n";
  JAMScript.call(v234.write, v234, [v235]);
  var i$$9 = 0;
  var v455 = arrayOfItems.length;
  var v251 = i$$9 < v455;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v456 = arrayOfItems[i$$9]
    }
    var v236 = v456.match(/\/.+\//);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v611 = arrayOfItems[i$$9]
    }
    var v554 = v611.match(/\)\D*\d+/);
    var v457 = v554.toString();
    var v237 = v457.replace(/\)\D*/, "");
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v458 = matchPosition >= lowerLimit;
      if(v458) {
        v458 = matchPosition < upperLimit
      }
      var v241 = v458;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v459 = matchPosition - shiftValue;
        var v240 = v459 + 1;
        tempString$$1 = v239 + v240
      }
      var v460 = matchExp.lastIndex;
      var v555 = RegExp.lastMatch;
      var v461 = v555.length;
      var v242 = v460 - v461;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v462 = tempString$$1.search(/\d/);
    var v244 = v462 != -1;
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
    var v703 = '<tr><td class="' + backGroundClass;
    var v687 = v703 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v723 = arrayOfItems[i$$9]
    }
    var v714 = v723.match(/\([^\(]+\)/);
    var v704 = v714.toString();
    var v688 = v704.replace(/\(|\)/g, "");
    var v671 = v687 + v688;
    var v649 = v671 + '</td><td class="';
    var v612 = v649 + backGroundClass;
    var v556 = v612 + '">';
    var v463 = v556 + tempString$$1;
    var v250 = v463 + "</td></tr>\n";
    JAMScript.call(v249.write, v249, [v250]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v464 = arrayOfItems.length;
    v251 = i$$9 < v464
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
  var v672 = '<tr><td class="title">' + "Pattern:";
  var v650 = v672 + '</td><td class="title">';
  var v613 = v650 + "Times found:";
  var v557 = v613 + '</td><td class="title">';
  var v465 = v557 + "Percentage:";
  var v255 = v465 + "</td></tr>\n";
  JAMScript.call(v254.write, v254, [v255]);
  var i$$10 = 0;
  var v466 = arrayOfItems$$1.length;
  var v264 = i$$10 < v466;
  for(;v264;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v467 = arrayOfItems$$1[i$$10]
    }
    var v256 = v467.match(/\/[^\/]+\//);
    var matchExp$$1 = v256 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v468 = sequence$$16.search(matchExp$$1);
    var v258 = v468 != -1;
    if(v258) {
      var v257 = sequence$$16.match(matchExp$$1);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v558 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v651 = arrayOfItems$$1[i$$10]
    }
    var v614 = v651.match(/\d+/);
    var v559 = parseFloat(v614);
    var v469 = v558 - v559;
    var v261 = v469 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v470 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v615 = arrayOfItems$$1[i$$10]
      }
      var v560 = v615.match(/\d+/);
      var v471 = parseFloat(v560);
      var v260 = v470 - v471;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v724 = arrayOfItems$$1[i$$10]
    }
    var v715 = v724.match(/\([^\(]+\)\b/);
    var v705 = v715.toString();
    var v689 = v705.replace(/\(|\)/g, "");
    var v673 = "<tr><td>" + v689;
    var v652 = v673 + "</td><td>";
    var v616 = v652 + tempNumber;
    var v561 = v616 + "</td><td>";
    var v562 = percentage.toFixed(2);
    var v472 = v561 + v562;
    var v263 = v472 + "</td></tr>\n";
    JAMScript.call(v262.write, v262, [v263]);
    i$$10 = i$$10 + 1;
    var v473 = arrayOfItems$$1.length;
    v264 = i$$10 < v473
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
  var v474 = sequence$$17.length;
  var v272 = v474 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v475 = Math.random();
    var v266 = v475 * maxNum$$1;
    randNum$$1 = Math.floor(v266);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v267, v268);
    sequence$$17 = tempString1 + tempString2;
    var v476 = tempSeq.length;
    var v271 = v476 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAMScript.call(v269.write, v269, [v270]);
      tempSeq = ""
    }
    var v477 = sequence$$17.length;
    v272 = v477 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAMScript.call(v273.write, v273, [v274]);
  return true
}
function proteinMw(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 2E5;
  var v478 = testScript();
  var v275 = v478 == false;
  if(v275) {
    return false
  }
  var v690 = theDocument.forms;
  var v674 = v690[0];
  var v653 = v674.elements;
  var v617 = v653[0];
  var v563 = checkFormElement(v617);
  var v479 = v563 == false;
  var v565 = !v479;
  if(v565) {
    var v706 = theDocument.forms;
    var v691 = v706[0];
    var v675 = v691.elements;
    var v654 = v675[0];
    var v618 = v654.value;
    var v564 = checkSequenceLength(v618, maxInput$$3);
    v479 = v564 == false
  }
  var v276 = v479;
  if(v276) {
    return false
  }
  var arrayOfMw = ["/A/ (A)71.08", "/C/ (C)103.14", "/D/ (D)115.09", "/E/ (E)129.12", " /F/ (F)147.18", "/G/ (G)57.06", "/H/ (H)137.15", "/I/ (I)113.17", "/K/ (K)128.18", "/L/ (L)113.17", "/M/ (M)131.21", "/N/ (N)114.11", "/P/ (P)97.12", "/Q/ (Q)128.41", "/R/ (R)156.20", "/S/ (S)87.08", "/T/ (T)101.11", "/V/ (V)99.14", "/W/ (W)186.21", "/Y/ (Y)163.18"];
  openWindow("Protein Molecular Weight");
  var v655 = theDocument.forms;
  var v619 = v655[0];
  var v566 = v619.elements;
  var v480 = v566[0];
  var v277 = v480.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v277);
  var i$$11 = 0;
  var v481 = arrayOfFasta$$1.length;
  var v285 = i$$11 < v481;
  for(;v285;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v278 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v278);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v279 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v279);
    newProtein = removeNonProteinStrict(newProtein);
    var v280 = outputWindow.document;
    var v281 = getInfoFromTitleAndSequence(title, newProtein);
    JAMScript.call(v280.write, v280, [v281]);
    var v692 = theDocument.forms;
    var v676 = v692[0];
    var v656 = v676.elements;
    var v620 = v656[4];
    var v567 = v620.options;
    var v693 = theDocument.forms;
    var v677 = v693[0];
    var v657 = v677.elements;
    var v621 = v657[4];
    var v568 = v621.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v482 = v567[v568]
    }
    var v282 = v482.value;
    var v694 = theDocument.forms;
    var v678 = v694[0];
    var v658 = v678.elements;
    var v622 = v658[5];
    var v569 = v622.options;
    var v695 = theDocument.forms;
    var v679 = v695[0];
    var v659 = v679.elements;
    var v623 = v659[5];
    var v570 = v623.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v483 = v569[v570]
    }
    var v283 = v483.value;
    writeProtMw(newProtein, arrayOfMw, v282, v283);
    var v284 = outputWindow.document;
    JAMScript.call(v284.write, v284, ["<br />\n<br />\n"]);
    i$$11 = i$$11 + 1;
    var v484 = arrayOfFasta$$1.length;
    v285 = i$$11 < v484
  }
  closeWindow();
  return true
}
function writeProtMw(proteinSequence$$1, arrayOfMw$$1, copies, fusion) {
  var water = 18.015;
  var result = 0;
  copies = parseInt(copies);
  var j$$10 = 0;
  var v286 = j$$10 < copies;
  for(;v286;) {
    proteinSequence$$1 = proteinSequence$$1 + fusion;
    j$$10 = j$$10 + 1;
    v286 = j$$10 < copies
  }
  j$$10 = 0;
  var v485 = arrayOfMw$$1.length;
  var v292 = j$$10 < v485;
  for(;v292;) {
    var tempNumber$$1 = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v486 = arrayOfMw$$1[j$$10]
    }
    var v287 = v486.match(/\/[^\/]+\//);
    var matchExp$$2 = v287 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$2 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$2 + " }")
    }else {
      matchExp$$2 = JAMScript.call(eval, null, [matchExp$$2])
    }
    var v487 = proteinSequence$$1.search(matchExp$$2);
    var v289 = v487 != -1;
    if(v289) {
      var v288 = proteinSequence$$1.match(matchExp$$2);
      tempNumber$$1 = v288.length
    }
    var v290 = result;
    var v488 = tempNumber$$1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v660 = arrayOfMw$$1[j$$10]
    }
    var v624 = v660.match(/[\d\.]+/);
    var v571 = v624.toString();
    var v489 = parseFloat(v571);
    var v291 = v488 * v489;
    result = v290 + v291;
    j$$10 = j$$10 + 1;
    var v490 = arrayOfMw$$1.length;
    v292 = j$$10 < v490
  }
  var v297 = result == 0;
  if(v297) {
    var v293 = outputWindow.document;
    var v294 = result + " kDa";
    JAMScript.call(v293.write, v293, [v294])
  }else {
    result = result + water;
    result = result / 1E3;
    result = result.toFixed(2);
    var v295 = outputWindow.document;
    var v296 = result + " kDa";
    JAMScript.call(v295.write, v295, [v296])
  }
  return true
}
JAMScript.set(document, "onload", v2);
var v298 = document.getElementById("submitbtn");
JAMScript.set(v298, "onclick", v3);
var v299 = document.getElementById("clearbtn");
JAMScript.set(v299, "onclick", v4);

