function v4() {
  var v567 = document.forms;
  var v485 = v567[0];
  var v295 = v485.elements;
  var v5 = v295[0];
  v5.value = " ";
  var v568 = document.forms;
  var v486 = v568[0];
  var v296 = v486.elements;
  var v6 = v296[1];
  v6.value = " ";
  return
}
function v3() {
  try {
    proteinPattern(document)
  }catch(e$$6) {
    var v7 = "The following error was encountered: " + e$$6;
    alert(v7)
  }
  return
}
function v2() {
  var v297 = document.main_form;
  var v8 = v297.main_submit;
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
  var v298 = arrayOfSequences.length;
  var v10 = v298 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v299 = arrayOfTitles.length;
  var v12 = i$$1 < v299;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v569 = arrayOfTitles[i$$1]
    }
    var v487 = v569.search(/\S/);
    var v300 = v487 == -1;
    var v489 = !v300;
    if(v489) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v621 = arrayOfSequences[i$$1]
      }
      var v570 = v621.search(/\S/);
      var v488 = v570 == -1;
      var v572 = !v488;
      if(v572) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v622 = arrayOfSequences[i$$1]
        }
        var v571 = v622.length;
        v488 = v571 != lengthOfAlign
      }
      v300 = v488
    }
    var v11 = v300;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v301 = arrayOfTitles.length;
    v12 = i$$1 < v301
  }
  return true
}
function checkCodonTable(codonTable) {
  var v490 = codonTable.search(/AmAcid/);
  var v302 = v490 == -1;
  var v492 = !v302;
  if(v492) {
    var v573 = codonTable.search(/Codon/);
    var v491 = v573 == -1;
    var v575 = !v491;
    if(v575) {
      var v623 = codonTable.search(/Number/);
      var v574 = v623 == -1;
      var v625 = !v574;
      if(v625) {
        var v655 = codonTable.search(/\/1000/);
        var v624 = v655 == -1;
        var v657 = !v624;
        if(v657) {
          var v656 = codonTable.search(/Fraction\s*\.\./);
          v624 = v656 == -1
        }
        v574 = v624
      }
      v491 = v574
    }
    v302 = v491
  }
  var v13 = v302;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v493 = formElement.value;
  var v303 = v493.search(/\S/);
  var v14 = v303 == -1;
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
  var v304 = arrayOfPatterns.length;
  var v17 = z$$2 < v304;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v494 = arrayOfPatterns[z$$2]
    }
    var v305 = v494.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v305 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v495 = arrayOfPatterns[z$$2]
    }
    var v306 = moreExpressionCheck(v495);
    var v16 = v306 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v307 = arrayOfPatterns.length;
    v17 = z$$2 < v307
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v308 = arrayOfPatterns.length;
  var v26 = j < v308;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v576 = arrayOfPatterns[j]
    }
    var v496 = v576.match(/\/.+\//);
    var v309 = v496 + "gi";
    if(JAMScript.isEval(eval)) {
      var v751 = eval("introspect(JAMScript.introspectors.processAll) { " + v309 + " }")
    }else {
      var v751 = JAMScript.call(eval, null, [v309])
    }
    v20[v21] = v751;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v497 = arrayOfPatterns[j]
    }
    var v310 = v497.match(/=[a-zA-Z\*]/);
    var v752 = v310.toString();
    v22[v23] = v752;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v311 = geneticCodeMatchResult[j]
    }
    var v753 = v311.replace(/=/g, "");
    v24[v25] = v753;
    j = j + 1;
    var v312 = arrayOfPatterns.length;
    v26 = j < v312
  }
  var i$$2 = 0;
  var v498 = testSequence.length;
  var v313 = v498 - 3;
  var v33 = i$$2 <= v313;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v314 = geneticCodeMatchExp.length;
    var v31 = j < v314;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v499 = geneticCodeMatchExp[j]
      }
      var v315 = codon.search(v499);
      var v30 = v315 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v316 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v316 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v317 = geneticCodeMatchExp.length;
      v31 = j < v317
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v500 = testSequence.length;
    var v318 = v500 - 3;
    v33 = i$$2 <= v318
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v319 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v319;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v501 = arrayOfPatterns$$1[z$$3]
    }
    var v320 = v501.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v320 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v321 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v321
  }
  var i$$3 = 0;
  var v322 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v322;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v502 = arrayOfPatterns$$1[i$$3]
    }
    var v323 = "[" + v502;
    var v36 = v323 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v324 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v324;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v503 = arrayOfPatterns$$1[j$$1]
      }
      var v325 = v503.search(re);
      var v37 = v325 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v326 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v326
    }
    i$$3 = i$$3 + 1;
    var v327 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v327
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v328 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v328;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v504 = arrayOfPatterns$$2[z$$4]
    }
    var v329 = v504.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v329 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v505 = arrayOfPatterns$$2[z$$4]
    }
    var v330 = moreExpressionCheck(v505);
    var v41 = v330 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v331 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v331
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v577 = getSequenceFromFasta(text$$7);
  var v506 = v577.replace(/[^A-Za-z]/g, "");
  var v332 = v506.length;
  var v44 = v332 > maxInput;
  if(v44) {
    var v333 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v333 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v334 = text$$8.length;
  var v46 = v334 > maxInput$$1;
  if(v46) {
    var v335 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v335 + " characters.";
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
  var v336 = alignArray.length;
  var v53 = v336 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v337 = alignArray.length;
  var v55 = i$$4 < v337;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v507 = alignArray[i$$4]
    }
    var v338 = v507.search(/[^\s]+\s/);
    var v54 = v338 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v339 = alignArray.length;
    v55 = i$$4 < v339
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
  var v340 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v340 != -1;
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
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v341 = sequence$$2.length;
  var v59 = "&gt;results for " + v341;
  var stringToReturn = v59 + " residue sequence ";
  var v342 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v342 != -1;
  if(v61) {
    var v343 = stringToReturn + '"';
    var v60 = v343 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v344 = stringToReturn + ' starting "';
  var v345 = sequence$$2.substring(0, 10);
  var v62 = v344 + v345;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v346 = sequenceOne.length;
  var v63 = "Search results for " + v346;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v347 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v347 != -1;
  if(v65) {
    var v348 = stringToReturn$$1 + '"';
    var v64 = v348 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v349 = stringToReturn$$1 + ' starting "';
  var v350 = sequenceOne.substring(0, 10);
  var v66 = v349 + v350;
  stringToReturn$$1 = v66 + '"\n';
  var v351 = stringToReturn$$1 + "and ";
  var v352 = sequenceTwo.length;
  var v67 = v351 + v352;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v353 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v353 != -1;
  if(v69) {
    var v354 = stringToReturn$$1 + '"';
    var v68 = v354 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v355 = stringToReturn$$1 + ' starting "';
  var v356 = sequenceTwo.substring(0, 10);
  var v70 = v355 + v356;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v357 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v357;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v578 = arrayOfPatterns$$3[j$$2]
    }
    var v508 = v578.match(/\/.+\//);
    var v358 = v508 + "gi";
    if(JAMScript.isEval(eval)) {
      var v754 = eval("introspect(JAMScript.introspectors.processAll) { " + v358 + " }")
    }else {
      var v754 = JAMScript.call(eval, null, [v358])
    }
    v73[v74] = v754;
    j$$2 = j$$2 + 1;
    var v359 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v359
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v360 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v360;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v509 = arrayOfPatterns$$4[j$$3]
    }
    var v361 = v509.match(/=[a-zA-Z\*]/);
    var v755 = v361.toString();
    v77[v78] = v755;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v362 = geneticCodeMatchResult$$1[j$$3]
    }
    var v756 = v362.replace(/=/g, "");
    v79[v80] = v756;
    j$$3 = j$$3 + 1;
    var v363 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v363
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v364 = sequence$$3.length;
  var v82 = "Results for " + v364;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v365 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v365 != -1;
  if(v84) {
    var v366 = stringToReturn$$2 + '"';
    var v83 = v366 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v367 = stringToReturn$$2 + ' starting "';
  var v368 = sequence$$3.substring(0, 10);
  var v85 = v367 + v368;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v510 = "Results for " + topology;
  var v369 = v510 + " ";
  var v370 = sequence$$4.length;
  var v87 = v369 + v370;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v371 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v371 != -1;
  if(v89) {
    var v372 = stringToReturn$$3 + '"';
    var v88 = v372 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v373 = stringToReturn$$3 + ' starting "';
  var v374 = sequence$$4.substring(0, 10);
  var v90 = v373 + v374;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v375 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v375;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v376 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v376 != -1;
  if(v94) {
    var v377 = stringToReturn$$4 + '"';
    var v93 = v377 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v378 = stringToReturn$$4 + ' starting "';
  var v379 = sequenceOne$$1.substring(0, 10);
  var v95 = v378 + v379;
  stringToReturn$$4 = v95 + '"\n';
  var v380 = stringToReturn$$4 + "and ";
  var v381 = sequenceTwo$$1.length;
  var v96 = v380 + v381;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v382 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v382 != -1;
  if(v98) {
    var v383 = stringToReturn$$4 + '"';
    var v97 = v383 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v384 = stringToReturn$$4 + ' starting "';
  var v385 = sequenceTwo$$1.substring(0, 10);
  var v99 = v384 + v385;
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
    var v386 = Math.random();
    var v387 = components.length;
    var v101 = v386 * v387;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v388 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v388 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v389 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v389 != -1;
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
  var v511 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v390 = v511 != -1;
  var v513 = !v390;
  if(v513) {
    var v579 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v512 = v579 != -1;
    var v581 = !v512;
    if(v581) {
      var v626 = expressionToCheck.search(/\[\]/);
      var v580 = v626 != -1;
      var v628 = !v580;
      if(v628) {
        var v658 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v627 = v658 != -1;
        var v660 = !v627;
        if(v660) {
          var v673 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v659 = v673 != -1;
          var v675 = !v659;
          if(v675) {
            var v688 = expressionToCheck.search(/\|\|/);
            var v674 = v688 != -1;
            var v690 = !v674;
            if(v690) {
              var v701 = expressionToCheck.search(/\/\|/);
              var v689 = v701 != -1;
              var v703 = !v689;
              if(v703) {
                var v712 = expressionToCheck.search(/\|\//);
                var v702 = v712 != -1;
                var v714 = !v702;
                if(v714) {
                  var v722 = expressionToCheck.search(/\[.\]/);
                  var v713 = v722 != -1;
                  var v724 = !v713;
                  if(v724) {
                    var v729 = expressionToCheck.search(/\</);
                    var v723 = v729 != -1;
                    var v731 = !v723;
                    if(v731) {
                      var v730 = expressionToCheck.search(/\>/);
                      v723 = v730 != -1
                    }
                    v713 = v723
                  }
                  v702 = v713
                }
                v689 = v702
              }
              v674 = v689
            }
            v659 = v674
          }
          v627 = v659
        }
        v580 = v627
      }
      v512 = v580
    }
    v390 = v512
  }
  var v106 = v390;
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
    var v757 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v757[2], v757[1], v757[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v582 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v514 = v582 + "<head>\n";
  var v391 = v514 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v391 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v744 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v740 = v744 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v736 = v740 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v732 = v736 + "div.info {font-weight: bold}\n";
    var v725 = v732 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v715 = v725 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v704 = v715 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v691 = v704 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v676 = v691 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v661 = v676 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v629 = v661 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v583 = v629 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v515 = v583 + "td.many {color: #000000}\n";
    var v392 = v515 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v392 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v748 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v745 = v748 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v741 = v745 + "div.title {display: none}\n";
    var v737 = v741 + "div.info {font-weight: bold}\n";
    var v733 = v737 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v726 = v733 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v716 = v726 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v705 = v716 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v692 = v705 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v677 = v692 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v662 = v677 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v630 = v662 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v584 = v630 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v516 = v584 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v393 = v516 + "img {display: none}\n";
    var v116 = v393 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v585 = "</head>\n" + '<body class="main">\n';
  var v517 = v585 + '<div class="title">';
  var v394 = v517 + title$$7;
  var v118 = v394 + " results</div>\n";
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
    var v758 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v758[2], v758[1], v758[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v586 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v518 = v586 + "<head>\n";
  var v395 = v518 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v395 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v746 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v742 = v746 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v738 = v742 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v734 = v738 + "div.info {font-weight: bold}\n";
    var v727 = v734 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v717 = v727 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v706 = v717 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v693 = v706 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v678 = v693 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v663 = v678 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v631 = v663 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v587 = v631 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v519 = v587 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v396 = v519 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v396 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v750 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v749 = v750 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v747 = v749 + "div.title {display: none}\n";
    var v743 = v747 + "div.info {font-weight: bold}\n";
    var v739 = v743 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v735 = v739 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v728 = v735 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v718 = v728 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v707 = v718 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v694 = v707 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v679 = v694 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v664 = v679 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v632 = v664 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v588 = v632 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v520 = v588 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v397 = v520 + "img {display: none}\n";
    var v124 = v397 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v589 = "</head>\n" + '<body class="main">\n';
  var v521 = v589 + '<div class="title">';
  var v398 = v521 + title$$9;
  var v126 = v398 + " results</div>\n";
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
  var v399 = dnaSequence$$1.search(/./);
  var v127 = v399 != -1;
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
  var v400 = testArray[0];
  var v131 = v400 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v401 = testString.search(re$$2);
  var v132 = v401 == -1;
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
  var v402 = testNum.toFixed(3);
  var v135 = v402 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v403 = testNum.toPrecision(5);
  var v136 = v403 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v404 = theNumber$$1.search(/\d/);
  var v137 = v404 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v522 = emblFile.search(/ID/);
  var v405 = v522 == -1;
  var v524 = !v405;
  if(v524) {
    var v590 = emblFile.search(/AC/);
    var v523 = v590 == -1;
    var v592 = !v523;
    if(v592) {
      var v633 = emblFile.search(/DE/);
      var v591 = v633 == -1;
      var v635 = !v591;
      if(v635) {
        var v634 = emblFile.search(/SQ/);
        v591 = v634 == -1
      }
      v523 = v591
    }
    v405 = v523
  }
  var v138 = v405;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v406 = theNumber$$2.search(/\d/);
  var v139 = v406 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v407 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v407 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v408 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v408 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v409 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v409 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v525 = genBankFile.search(/LOCUS/);
  var v410 = v525 == -1;
  var v527 = !v410;
  if(v527) {
    var v593 = genBankFile.search(/DEFINITION/);
    var v526 = v593 == -1;
    var v595 = !v526;
    if(v595) {
      var v636 = genBankFile.search(/ACCESSION/);
      var v594 = v636 == -1;
      var v638 = !v594;
      if(v638) {
        var v637 = genBankFile.search(/ORIGIN/);
        v594 = v637 == -1
      }
      v526 = v594
    }
    v410 = v526
  }
  var v144 = v410;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v528 = genBankFile$$1.search(/LOCUS/);
  var v411 = v528 == -1;
  var v530 = !v411;
  if(v530) {
    var v596 = genBankFile$$1.search(/DEFINITION/);
    var v529 = v596 == -1;
    var v598 = !v529;
    if(v598) {
      var v639 = genBankFile$$1.search(/ACCESSION/);
      var v597 = v639 == -1;
      var v641 = !v597;
      if(v641) {
        var v640 = genBankFile$$1.search(/ORIGIN/);
        v597 = v640 == -1
      }
      v529 = v597
    }
    v411 = v529
  }
  var v145 = v411;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v412 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v412 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v531 = emblFile$$1.search(/ID/);
  var v413 = v531 == -1;
  var v533 = !v413;
  if(v533) {
    var v599 = emblFile$$1.search(/AC/);
    var v532 = v599 == -1;
    var v601 = !v532;
    if(v601) {
      var v642 = emblFile$$1.search(/DE/);
      var v600 = v642 == -1;
      var v644 = !v600;
      if(v644) {
        var v643 = emblFile$$1.search(/SQ/);
        v600 = v643 == -1
      }
      v532 = v600
    }
    v413 = v532
  }
  var v147 = v413;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v414 = emblFile$$1.search(/^FT/m);
  var v148 = v414 == -1;
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
    var v415 = basePerLine / groupSize;
    var v153 = j$$6 <= v415;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v416 = k + i$$5;
        var v151 = text$$10.charAt(v416);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v417 = basePerLine / groupSize;
      v153 = j$$6 <= v417
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
    var v418 = adjustment < 0;
    if(v418) {
      v418 = adjusted >= 0
    }
    var v157 = v418;
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
    var v419 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v419;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v420 = i$$6 + k$$1;
        var v158 = v420 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v421 = k$$1 + i$$6;
        var v160 = text$$12.charAt(v421);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v422 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v422, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v423 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v423
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v602 = adjustNumbering(lineNum, numberingAdjustment);
      var v534 = rightNum(v602, "", 8, tabIn$$3);
      var v424 = v534 + lineOfText$$1;
      var v168 = v424 + "\n";
      JAMScript.call(v167.write, v167, [v168]);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v603 = adjustNumbering(lineNum, numberingAdjustment);
        var v535 = rightNum(v603, "", 8, tabIn$$3);
        var v536 = complement(lineOfText$$1);
        var v425 = v535 + v536;
        var v170 = v425 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v171 = outputWindow.document;
        JAMScript.call(v171.write, v171, ["\n"])
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v537 = lineOfText$$1;
        var v538 = adjustNumbering(i$$6, numberingAdjustment);
        var v426 = v537 + v538;
        var v174 = v426 + "\n";
        JAMScript.call(v173.write, v173, [v174]);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v539 = complement(lineOfText$$1);
          var v540 = adjustNumbering(i$$6, numberingAdjustment);
          var v427 = v539 + v540;
          var v176 = v427 + "\n";
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
            var v428 = complement(lineOfText$$1);
            var v184 = v428 + "\n";
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
    var v429 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v429;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v430 = i$$7 + k$$2;
        var v191 = v430 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v431 = k$$2 + i$$7;
        var v193 = text$$13.charAt(v431);
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
      var v432 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v432
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v541 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v433 = v541 + lineOfText$$2;
      var v201 = v433 + "\n";
      JAMScript.call(v200.write, v200, [v201])
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v434 = lineOfText$$2 + i$$7;
        var v203 = v434 + "\n";
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
  var v542 = sequence$$13.length;
  var v435 = v542 <= firstIndexToMutate;
  var v544 = !v435;
  if(v544) {
    var v543 = lastIndexToMutate < 0;
    var v604 = !v543;
    if(v604) {
      v543 = lastIndexToMutate <= firstIndexToMutate
    }
    v435 = v543
  }
  var v212 = v435;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v436 = Math.random();
    var v213 = v436 * maxNum;
    randNum = Math.floor(v213);
    var v437 = randNum < firstIndexToMutate;
    var v545 = !v437;
    if(v545) {
      v437 = randNum > lastIndexToMutate
    }
    var v214 = v437;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v438 = Math.random();
      var v439 = components$$1.length;
      var v215 = v438 * v439;
      componentsIndex = Math.round(v215);
      var v440 = components$$1.length;
      var v216 = componentsIndex == v440;
      if(v216) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v441 = components$$1[componentsIndex]
      }
      var v217 = v441 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v442 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v443 = components$$1[componentsIndex]
    }
    var v218 = v442 + v443;
    var v444 = randNum + 1;
    var v445 = sequence$$13.length;
    var v219 = sequence$$13.substring(v444, v445);
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
    var v446 = Math.random();
    var v447 = components$$2.length;
    var v223 = v446 * v447;
    tempNum$$1 = Math.floor(v223);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v448 = sequence$$14.length;
    var v226 = v448 == 60;
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
    var v605 = sequence$$15.length;
    var v546 = v605 - lookAhead;
    var v547 = sequence$$15.length;
    var v449 = sequence$$15.substring(v546, v547);
    var v231 = v449 + sequence$$15;
    var v232 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAMScript.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v235 = outputWindow.document;
  var v606 = '<tr><td class="title" width="200px">' + "Site:";
  var v548 = v606 + '</td><td class="title">';
  var v450 = v548 + "Positions:";
  var v236 = v450 + "</td></tr>\n";
  JAMScript.call(v235.write, v235, [v236]);
  var i$$9 = 0;
  var v451 = arrayOfItems.length;
  var v252 = i$$9 < v451;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v452 = arrayOfItems[i$$9]
    }
    var v237 = v452.match(/\/.+\//);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v607 = arrayOfItems[i$$9]
    }
    var v549 = v607.match(/\)\D*\d+/);
    var v453 = v549.toString();
    var v238 = v453.replace(/\)\D*/, "");
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v454 = matchPosition >= lowerLimit;
      if(v454) {
        v454 = matchPosition < upperLimit
      }
      var v242 = v454;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v455 = matchPosition - shiftValue;
        var v241 = v455 + 1;
        tempString$$1 = v240 + v241
      }
      var v456 = matchExp.lastIndex;
      var v550 = RegExp.lastMatch;
      var v457 = v550.length;
      var v243 = v456 - v457;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v458 = tempString$$1.search(/\d/);
    var v245 = v458 != -1;
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
    var v695 = '<tr><td class="' + backGroundClass;
    var v680 = v695 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v719 = arrayOfItems[i$$9]
    }
    var v708 = v719.match(/\([^\(]+\)/);
    var v696 = v708.toString();
    var v681 = v696.replace(/\(|\)/g, "");
    var v665 = v680 + v681;
    var v645 = v665 + '</td><td class="';
    var v608 = v645 + backGroundClass;
    var v551 = v608 + '">';
    var v459 = v551 + tempString$$1;
    var v251 = v459 + "</td></tr>\n";
    JAMScript.call(v250.write, v250, [v251]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v460 = arrayOfItems.length;
    v252 = i$$9 < v460
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
  var v666 = '<tr><td class="title">' + "Pattern:";
  var v646 = v666 + '</td><td class="title">';
  var v609 = v646 + "Times found:";
  var v552 = v609 + '</td><td class="title">';
  var v461 = v552 + "Percentage:";
  var v256 = v461 + "</td></tr>\n";
  JAMScript.call(v255.write, v255, [v256]);
  var i$$10 = 0;
  var v462 = arrayOfItems$$1.length;
  var v265 = i$$10 < v462;
  for(;v265;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v463 = arrayOfItems$$1[i$$10]
    }
    var v257 = v463.match(/\/[^\/]+\//);
    var matchExp$$1 = v257 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v464 = sequence$$16.search(matchExp$$1);
    var v259 = v464 != -1;
    if(v259) {
      var v258 = sequence$$16.match(matchExp$$1);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v553 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v647 = arrayOfItems$$1[i$$10]
    }
    var v610 = v647.match(/\d+/);
    var v554 = parseFloat(v610);
    var v465 = v553 - v554;
    var v262 = v465 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v466 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v611 = arrayOfItems$$1[i$$10]
      }
      var v555 = v611.match(/\d+/);
      var v467 = parseFloat(v555);
      var v261 = v466 - v467;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v720 = arrayOfItems$$1[i$$10]
    }
    var v709 = v720.match(/\([^\(]+\)\b/);
    var v697 = v709.toString();
    var v682 = v697.replace(/\(|\)/g, "");
    var v667 = "<tr><td>" + v682;
    var v648 = v667 + "</td><td>";
    var v612 = v648 + tempNumber;
    var v556 = v612 + "</td><td>";
    var v557 = percentage.toFixed(2);
    var v468 = v556 + v557;
    var v264 = v468 + "</td></tr>\n";
    JAMScript.call(v263.write, v263, [v264]);
    i$$10 = i$$10 + 1;
    var v469 = arrayOfItems$$1.length;
    v265 = i$$10 < v469
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
  var v470 = sequence$$17.length;
  var v273 = v470 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v471 = Math.random();
    var v267 = v471 * maxNum$$1;
    randNum$$1 = Math.floor(v267);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v268, v269);
    sequence$$17 = tempString1 + tempString2;
    var v472 = tempSeq.length;
    var v272 = v472 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAMScript.call(v270.write, v270, [v271]);
      tempSeq = ""
    }
    var v473 = sequence$$17.length;
    v273 = v473 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAMScript.call(v274.write, v274, [v275]);
  return true
}
function proteinPattern(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 5E5;
  var v474 = testScript();
  var v276 = v474 == false;
  if(v276) {
    return false
  }
  var re$$3;
  var matches = new Array;
  var v683 = theDocument.forms;
  var v668 = v683[0];
  var v649 = v668.elements;
  var v613 = v649[0];
  var v558 = checkFormElement(v613);
  var v475 = v558 == false;
  var v560 = !v475;
  if(v560) {
    var v710 = theDocument.forms;
    var v698 = v710[0];
    var v684 = v698.elements;
    var v669 = v684[0];
    var v650 = v669.value;
    var v614 = checkSequenceLength(v650, maxInput$$3);
    var v559 = v614 == false;
    var v616 = !v559;
    if(v616) {
      var v699 = theDocument.forms;
      var v685 = v699[0];
      var v670 = v685.elements;
      var v651 = v670[1];
      var v615 = checkFormElement(v651);
      v559 = v615 == false
    }
    v475 = v559
  }
  var v277 = v475;
  if(v277) {
    return false
  }
  var v686 = theDocument.forms;
  var v671 = v686[0];
  var v652 = v671.elements;
  var v617 = v652[1];
  var v561 = v617.value;
  var v476 = v561.replace(/\//g, "");
  var v278 = "/" + v476;
  re$$3 = v278 + "/gi";
  re$$3 = removeWhiteSpace(re$$3);
  try {
    if(JAMScript.isEval(eval)) {
      re$$3 = eval("introspect(JAMScript.introspectors.processAll) { " + re$$3 + " }")
    }else {
      re$$3 = JAMScript.call(eval, null, [re$$3])
    }
    var testString$$1 = "teststring";
    testString$$1 = testString$$1.replace(re$$3, "")
  }catch(e$$5) {
    alert("The regular expression is not formatted correctly.");
    return false
  }
  openWindow("Protein Pattern Find");
  openPre();
  var v653 = theDocument.forms;
  var v618 = v653[0];
  var v562 = v618.elements;
  var v477 = v562[0];
  var v279 = v477.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v279);
  var i$$11 = 0;
  var v478 = arrayOfFasta$$1.length;
  var v285 = i$$11 < v478;
  for(;v285;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v280 = arrayOfFasta$$1[i$$11]
    }
    newProtein = getSequenceFromFasta(v280);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v281 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v281);
    newProtein = removeNonProteinStrict(newProtein);
    var v282 = outputWindow.document;
    var v283 = getInfoFromTitleAndSequence(title, newProtein);
    JAMScript.call(v282.write, v282, [v283]);
    writeProteinPattern(newProtein, re$$3);
    var v284 = outputWindow.document;
    JAMScript.call(v284.write, v284, ["\n\n"]);
    i$$11 = i$$11 + 1;
    var v479 = arrayOfFasta$$1.length;
    v285 = i$$11 < v479
  }
  closePre();
  closeWindow();
  return true
}
function writeProteinPattern(proteinSequence$$1, re$$4) {
  var matchArray$$2;
  var matchPosition$$1;
  var matchCount = 0;
  var simplePattern = re$$4.toString();
  simplePattern = simplePattern.replace(/\/gi$|\/ig$|^\//gi, "");
  var v290 = matchArray$$2 = re$$4.exec(proteinSequence$$1);
  for(;v290;) {
    matchCount = matchCount + 1;
    var match_end = re$$4.lastIndex;
    var v563 = RegExp.lastMatch;
    var v480 = v563.length;
    var v286 = match_end - v480;
    var match_start = v286 + 1;
    var v287 = outputWindow.document;
    var v721 = "&gt;match number " + matchCount;
    var v711 = v721 + ' to "';
    var v700 = v711 + simplePattern;
    var v687 = v700 + '" start=';
    var v672 = v687 + match_start;
    var v654 = v672 + " end=";
    var v619 = v654 + match_end;
    var v564 = v619 + "\n";
    var v620 = matchArray$$2[0];
    var v565 = addReturns(v620);
    var v481 = v564 + v565;
    var v288 = v481 + "\n\n";
    JAMScript.call(v287.write, v287, [v288]);
    var v482 = re$$4.lastIndex;
    var v566 = RegExp.lastMatch;
    var v483 = v566.length;
    var v289 = v482 - v483;
    re$$4.lastIndex = v289 + 1;
    v290 = matchArray$$2 = re$$4.exec(proteinSequence$$1)
  }
  var v484 = matchCount > 0;
  var v292 = !v484;
  if(v292) {
    var v291 = outputWindow.document;
    JAMScript.call(v291.write, v291, ["no matches found for this sequence.\n\n"])
  }
  return
}
JAMScript.set(document, "onload", v2);
var v293 = document.getElementById("submitbtn");
JAMScript.set(v293, "onclick", v3);
var v294 = document.getElementById("clearbtn");
JAMScript.set(v294, "onclick", v4);

