function v4() {
  var v594 = document.forms;
  var v514 = v594[0];
  var v314 = v514.elements;
  var v5 = v314[0];
  v5.value = " ";
  var v595 = document.forms;
  var v515 = v595[0];
  var v315 = v515.elements;
  var v6 = v315[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    cpgIslands(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v2() {
  var v316 = document.main_form;
  var v8 = v316.main_submit;
  v8.focus();
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v317 = arrayOfSequences.length;
  var v10 = v317 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v318 = arrayOfTitles.length;
  var v12 = i$$1 < v318;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v596 = arrayOfTitles[i$$1]
    }
    var v516 = v596.search(/\S/);
    var v319 = v516 == -1;
    var v518 = !v319;
    if(v518) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v646 = arrayOfSequences[i$$1]
      }
      var v597 = v646.search(/\S/);
      var v517 = v597 == -1;
      var v599 = !v517;
      if(v599) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v647 = arrayOfSequences[i$$1]
        }
        var v598 = v647.length;
        v517 = v598 != lengthOfAlign
      }
      v319 = v517
    }
    var v11 = v319;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v320 = arrayOfTitles.length;
    v12 = i$$1 < v320
  }
  return true
}
function checkCodonTable(codonTable) {
  var v519 = codonTable.search(/AmAcid/);
  var v321 = v519 == -1;
  var v521 = !v321;
  if(v521) {
    var v600 = codonTable.search(/Codon/);
    var v520 = v600 == -1;
    var v602 = !v520;
    if(v602) {
      var v648 = codonTable.search(/Number/);
      var v601 = v648 == -1;
      var v650 = !v601;
      if(v650) {
        var v679 = codonTable.search(/\/1000/);
        var v649 = v679 == -1;
        var v681 = !v649;
        if(v681) {
          var v680 = codonTable.search(/Fraction\s*\.\./);
          v649 = v680 == -1
        }
        v601 = v649
      }
      v520 = v601
    }
    v321 = v520
  }
  var v13 = v321;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v522 = formElement.value;
  var v322 = v522.search(/\S/);
  var v14 = v322 == -1;
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
  var v323 = arrayOfPatterns.length;
  var v17 = z$$2 < v323;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v523 = arrayOfPatterns[z$$2]
    }
    var v324 = v523.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v324 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v524 = arrayOfPatterns[z$$2]
    }
    var v325 = moreExpressionCheck(v524);
    var v16 = v325 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v326 = arrayOfPatterns.length;
    v17 = z$$2 < v326
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v327 = arrayOfPatterns.length;
  var v26 = j < v327;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v603 = arrayOfPatterns[j]
    }
    var v525 = v603.match(/\/.+\//);
    var v328 = v525 + "gi";
    if(JAMScript.isEval(eval)) {
      var v768 = eval("introspect(JAMScript.introspectors.processAll) { " + v328 + " }")
    }else {
      var v768 = JAMScript.call(eval, null, [v328])
    }
    v20[v21] = v768;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v526 = arrayOfPatterns[j]
    }
    var v329 = v526.match(/=[a-zA-Z\*]/);
    var v769 = v329.toString();
    v22[v23] = v769;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v330 = geneticCodeMatchResult[j]
    }
    var v770 = v330.replace(/=/g, "");
    v24[v25] = v770;
    j = j + 1;
    var v331 = arrayOfPatterns.length;
    v26 = j < v331
  }
  var i$$2 = 0;
  var v527 = testSequence.length;
  var v332 = v527 - 3;
  var v33 = i$$2 <= v332;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v333 = geneticCodeMatchExp.length;
    var v31 = j < v333;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v528 = geneticCodeMatchExp[j]
      }
      var v334 = codon.search(v528);
      var v30 = v334 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v335 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v335 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v336 = geneticCodeMatchExp.length;
      v31 = j < v336
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v529 = testSequence.length;
    var v337 = v529 - 3;
    v33 = i$$2 <= v337
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v338 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v338;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v530 = arrayOfPatterns$$1[z$$3]
    }
    var v339 = v530.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v339 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v340 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v340
  }
  var i$$3 = 0;
  var v341 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v341;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v531 = arrayOfPatterns$$1[i$$3]
    }
    var v342 = "[" + v531;
    var v36 = v342 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v343 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v343;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v532 = arrayOfPatterns$$1[j$$1]
      }
      var v344 = v532.search(re);
      var v37 = v344 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v345 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v345
    }
    i$$3 = i$$3 + 1;
    var v346 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v346
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v347 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v347;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v533 = arrayOfPatterns$$2[z$$4]
    }
    var v348 = v533.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v348 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v534 = arrayOfPatterns$$2[z$$4]
    }
    var v349 = moreExpressionCheck(v534);
    var v41 = v349 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v350 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v350
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v604 = getSequenceFromFasta(text$$7);
  var v535 = v604.replace(/[^A-Za-z]/g, "");
  var v351 = v535.length;
  var v44 = v351 > maxInput;
  if(v44) {
    var v352 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v352 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v353 = text$$8.length;
  var v46 = v353 > maxInput$$1;
  if(v46) {
    var v354 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v354 + " characters.";
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
  var v355 = alignArray.length;
  var v53 = v355 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v356 = alignArray.length;
  var v55 = i$$4 < v356;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v536 = alignArray[i$$4]
    }
    var v357 = v536.search(/[^\s]+\s/);
    var v54 = v357 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v358 = alignArray.length;
    v55 = i$$4 < v358
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
  var v359 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v359 != -1;
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
  var v360 = sequence$$2.length;
  var v59 = "&gt;results for " + v360;
  var stringToReturn = v59 + " residue sequence ";
  var v361 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v361 != -1;
  if(v61) {
    var v362 = stringToReturn + '"';
    var v60 = v362 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v363 = stringToReturn + ' starting "';
  var v364 = sequence$$2.substring(0, 10);
  var v62 = v363 + v364;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v365 = sequenceOne.length;
  var v63 = "Search results for " + v365;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v366 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v366 != -1;
  if(v65) {
    var v367 = stringToReturn$$1 + '"';
    var v64 = v367 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v368 = stringToReturn$$1 + ' starting "';
  var v369 = sequenceOne.substring(0, 10);
  var v66 = v368 + v369;
  stringToReturn$$1 = v66 + '"\n';
  var v370 = stringToReturn$$1 + "and ";
  var v371 = sequenceTwo.length;
  var v67 = v370 + v371;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v372 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v372 != -1;
  if(v69) {
    var v373 = stringToReturn$$1 + '"';
    var v68 = v373 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v374 = stringToReturn$$1 + ' starting "';
  var v375 = sequenceTwo.substring(0, 10);
  var v70 = v374 + v375;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v376 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v376;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v605 = arrayOfPatterns$$3[j$$2]
    }
    var v537 = v605.match(/\/.+\//);
    var v377 = v537 + "gi";
    if(JAMScript.isEval(eval)) {
      var v771 = eval("introspect(JAMScript.introspectors.processAll) { " + v377 + " }")
    }else {
      var v771 = JAMScript.call(eval, null, [v377])
    }
    v73[v74] = v771;
    j$$2 = j$$2 + 1;
    var v378 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v378
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v379 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v379;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v538 = arrayOfPatterns$$4[j$$3]
    }
    var v380 = v538.match(/=[a-zA-Z\*]/);
    var v772 = v380.toString();
    v77[v78] = v772;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v381 = geneticCodeMatchResult$$1[j$$3]
    }
    var v773 = v381.replace(/=/g, "");
    v79[v80] = v773;
    j$$3 = j$$3 + 1;
    var v382 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v382
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v383 = sequence$$3.length;
  var v82 = "Results for " + v383;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v384 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v384 != -1;
  if(v84) {
    var v385 = stringToReturn$$2 + '"';
    var v83 = v385 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v386 = stringToReturn$$2 + ' starting "';
  var v387 = sequence$$3.substring(0, 10);
  var v85 = v386 + v387;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v539 = "Results for " + topology;
  var v388 = v539 + " ";
  var v389 = sequence$$4.length;
  var v87 = v388 + v389;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v390 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v390 != -1;
  if(v89) {
    var v391 = stringToReturn$$3 + '"';
    var v88 = v391 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v392 = stringToReturn$$3 + ' starting "';
  var v393 = sequence$$4.substring(0, 10);
  var v90 = v392 + v393;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v394 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v394;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v395 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v395 != -1;
  if(v94) {
    var v396 = stringToReturn$$4 + '"';
    var v93 = v396 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v397 = stringToReturn$$4 + ' starting "';
  var v398 = sequenceOne$$1.substring(0, 10);
  var v95 = v397 + v398;
  stringToReturn$$4 = v95 + '"\n';
  var v399 = stringToReturn$$4 + "and ";
  var v400 = sequenceTwo$$1.length;
  var v96 = v399 + v400;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v401 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v401 != -1;
  if(v98) {
    var v402 = stringToReturn$$4 + '"';
    var v97 = v402 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v403 = stringToReturn$$4 + ' starting "';
  var v404 = sequenceTwo$$1.substring(0, 10);
  var v99 = v403 + v404;
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
    var v405 = Math.random();
    var v406 = components.length;
    var v101 = v405 * v406;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v407 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v407 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v408 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v408 != -1;
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
  var v540 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v409 = v540 != -1;
  var v542 = !v409;
  if(v542) {
    var v606 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v541 = v606 != -1;
    var v608 = !v541;
    if(v608) {
      var v651 = expressionToCheck.search(/\[\]/);
      var v607 = v651 != -1;
      var v653 = !v607;
      if(v653) {
        var v682 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v652 = v682 != -1;
        var v684 = !v652;
        if(v684) {
          var v696 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v683 = v696 != -1;
          var v698 = !v683;
          if(v698) {
            var v709 = expressionToCheck.search(/\|\|/);
            var v697 = v709 != -1;
            var v711 = !v697;
            if(v711) {
              var v721 = expressionToCheck.search(/\/\|/);
              var v710 = v721 != -1;
              var v723 = !v710;
              if(v723) {
                var v730 = expressionToCheck.search(/\|\//);
                var v722 = v730 != -1;
                var v732 = !v722;
                if(v732) {
                  var v739 = expressionToCheck.search(/\[.\]/);
                  var v731 = v739 != -1;
                  var v741 = !v731;
                  if(v741) {
                    var v746 = expressionToCheck.search(/\</);
                    var v740 = v746 != -1;
                    var v748 = !v740;
                    if(v748) {
                      var v747 = expressionToCheck.search(/\>/);
                      v740 = v747 != -1
                    }
                    v731 = v740
                  }
                  v722 = v731
                }
                v710 = v722
              }
              v697 = v710
            }
            v683 = v697
          }
          v652 = v683
        }
        v607 = v652
      }
      v541 = v607
    }
    v409 = v541
  }
  var v106 = v409;
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
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v774 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v774[2], v774[1], v774[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v609 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v543 = v609 + "<head>\n";
  var v410 = v543 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v410 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v761 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v757 = v761 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v753 = v757 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v749 = v753 + "div.info {font-weight: bold}\n";
    var v742 = v749 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v733 = v742 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v724 = v733 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v712 = v724 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v699 = v712 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v685 = v699 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v654 = v685 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v610 = v654 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v544 = v610 + "td.many {color: #000000}\n";
    var v411 = v544 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v411 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v765 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v762 = v765 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v758 = v762 + "div.title {display: none}\n";
    var v754 = v758 + "div.info {font-weight: bold}\n";
    var v750 = v754 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v743 = v750 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v734 = v743 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v725 = v734 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v713 = v725 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v700 = v713 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v686 = v700 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v655 = v686 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v611 = v655 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v545 = v611 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v412 = v545 + "img {display: none}\n";
    var v116 = v412 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v612 = "</head>\n" + '<body class="main">\n';
  var v546 = v612 + '<div class="title">';
  var v413 = v546 + title$$6;
  var v118 = v413 + " results</div>\n";
  JAMScript.call(v117.write, v117, [v118]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v775 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v775[2], v775[1], v775[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v613 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v547 = v613 + "<head>\n";
  var v414 = v547 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v414 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v763 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v759 = v763 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v755 = v759 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v751 = v755 + "div.info {font-weight: bold}\n";
    var v744 = v751 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v735 = v744 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v726 = v735 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v714 = v726 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v701 = v714 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v687 = v701 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v656 = v687 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v614 = v656 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v548 = v614 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v415 = v548 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v415 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v767 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v766 = v767 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v764 = v766 + "div.title {display: none}\n";
    var v760 = v764 + "div.info {font-weight: bold}\n";
    var v756 = v760 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v752 = v756 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v745 = v752 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v736 = v745 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v727 = v736 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v715 = v727 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v702 = v715 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v688 = v702 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v657 = v688 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v615 = v657 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v549 = v615 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v416 = v549 + "img {display: none}\n";
    var v124 = v416 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v616 = "</head>\n" + '<body class="main">\n';
  var v550 = v616 + '<div class="title">';
  var v417 = v550 + title$$8;
  var v126 = v417 + " results</div>\n";
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
  var v418 = dnaSequence$$1.search(/./);
  var v127 = v418 != -1;
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
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v419 = testArray[0];
  var v131 = v419 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v420 = testString.search(re$$2);
  var v132 = v420 == -1;
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
  var v421 = testNum.toFixed(3);
  var v135 = v421 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v422 = testNum.toPrecision(5);
  var v136 = v422 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v423 = theNumber$$1.search(/\d/);
  var v137 = v423 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v551 = emblFile.search(/ID/);
  var v424 = v551 == -1;
  var v553 = !v424;
  if(v553) {
    var v617 = emblFile.search(/AC/);
    var v552 = v617 == -1;
    var v619 = !v552;
    if(v619) {
      var v658 = emblFile.search(/DE/);
      var v618 = v658 == -1;
      var v660 = !v618;
      if(v660) {
        var v659 = emblFile.search(/SQ/);
        v618 = v659 == -1
      }
      v552 = v618
    }
    v424 = v552
  }
  var v138 = v424;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v425 = theNumber$$2.search(/\d/);
  var v139 = v425 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v426 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v426 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v427 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v427 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v428 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v428 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v554 = genBankFile.search(/LOCUS/);
  var v429 = v554 == -1;
  var v556 = !v429;
  if(v556) {
    var v620 = genBankFile.search(/DEFINITION/);
    var v555 = v620 == -1;
    var v622 = !v555;
    if(v622) {
      var v661 = genBankFile.search(/ACCESSION/);
      var v621 = v661 == -1;
      var v663 = !v621;
      if(v663) {
        var v662 = genBankFile.search(/ORIGIN/);
        v621 = v662 == -1
      }
      v555 = v621
    }
    v429 = v555
  }
  var v144 = v429;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v557 = genBankFile$$1.search(/LOCUS/);
  var v430 = v557 == -1;
  var v559 = !v430;
  if(v559) {
    var v623 = genBankFile$$1.search(/DEFINITION/);
    var v558 = v623 == -1;
    var v625 = !v558;
    if(v625) {
      var v664 = genBankFile$$1.search(/ACCESSION/);
      var v624 = v664 == -1;
      var v666 = !v624;
      if(v666) {
        var v665 = genBankFile$$1.search(/ORIGIN/);
        v624 = v665 == -1
      }
      v558 = v624
    }
    v430 = v558
  }
  var v145 = v430;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v431 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v431 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v560 = emblFile$$1.search(/ID/);
  var v432 = v560 == -1;
  var v562 = !v432;
  if(v562) {
    var v626 = emblFile$$1.search(/AC/);
    var v561 = v626 == -1;
    var v628 = !v561;
    if(v628) {
      var v667 = emblFile$$1.search(/DE/);
      var v627 = v667 == -1;
      var v669 = !v627;
      if(v669) {
        var v668 = emblFile$$1.search(/SQ/);
        v627 = v668 == -1
      }
      v561 = v627
    }
    v432 = v561
  }
  var v147 = v432;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v433 = emblFile$$1.search(/^FT/m);
  var v148 = v433 == -1;
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
  var v155 = i$$5 < stopBase;
  for(;v155;) {
    var v149 = i$$5 + 1;
    lineOfText = rightNum(v149, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v434 = basePerLine / groupSize;
    var v152 = j$$6 <= v434;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v435 = k + i$$5;
        var v150 = text$$10.charAt(v435);
        lineOfText = lineOfText + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v436 = basePerLine / groupSize;
      v152 = j$$6 <= v436
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
    var v437 = adjustment < 0;
    if(v437) {
      v437 = adjusted >= 0
    }
    var v156 = v437;
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
  var v187 = i$$6 < stopBase$$2;
  for(;v187;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v438 = basePerLine$$2 / groupSize$$2;
    var v163 = j$$7 <= v438;
    for(;v163;) {
      var v159 = k$$1 < groupSize$$2;
      for(;v159;) {
        var v439 = i$$6 + k$$1;
        var v157 = v439 >= stopBase$$2;
        if(v157) {
          break
        }
        var v440 = k$$1 + i$$6;
        var v158 = text$$12.charAt(v440);
        lineOfText$$1 = lineOfText$$1 + v158;
        k$$1 = k$$1 + 1;
        v159 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v161 = numberPosition$$1 == "above";
      if(v161) {
        var v441 = adjustNumbering(i$$6, numberingAdjustment);
        var v160 = rightNum(v441, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v160
      }
      var v162 = i$$6 >= stopBase$$2;
      if(v162) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v442 = basePerLine$$2 / groupSize$$2;
      v163 = j$$7 <= v442
    }
    var v186 = numberPosition$$1 == "left";
    if(v186) {
      var v164 = outputWindow.document;
      var v629 = adjustNumbering(lineNum, numberingAdjustment);
      var v563 = rightNum(v629, "", 8, tabIn$$3);
      var v443 = v563 + lineOfText$$1;
      var v165 = v443 + "\n";
      JAMScript.call(v164.write, v164, [v165]);
      var v169 = strands$$1 == "two";
      if(v169) {
        var v166 = outputWindow.document;
        var v630 = adjustNumbering(lineNum, numberingAdjustment);
        var v564 = rightNum(v630, "", 8, tabIn$$3);
        var v565 = complement(lineOfText$$1);
        var v444 = v564 + v565;
        var v167 = v444 + "\n";
        JAMScript.call(v166.write, v166, [v167]);
        var v168 = outputWindow.document;
        JAMScript.call(v168.write, v168, ["\n"])
      }
    }else {
      var v185 = numberPosition$$1 == "right";
      if(v185) {
        var v170 = outputWindow.document;
        var v566 = adjustNumbering(i$$6, numberingAdjustment);
        var v445 = lineOfText$$1 + v566;
        var v171 = v445 + "\n";
        JAMScript.call(v170.write, v170, [v171]);
        var v175 = strands$$1 == "two";
        if(v175) {
          var v172 = outputWindow.document;
          var v567 = complement(lineOfText$$1);
          var v568 = adjustNumbering(i$$6, numberingAdjustment);
          var v446 = v567 + v568;
          var v173 = v446 + "\n";
          JAMScript.call(v172.write, v172, [v173]);
          var v174 = outputWindow.document;
          JAMScript.call(v174.write, v174, ["\n"])
        }
      }else {
        var v184 = numberPosition$$1 == "above";
        if(v184) {
          var v176 = outputWindow.document;
          var v177 = aboveNum + "\n";
          JAMScript.call(v176.write, v176, [v177]);
          var v178 = outputWindow.document;
          var v179 = lineOfText$$1 + "\n";
          JAMScript.call(v178.write, v178, [v179]);
          var v183 = strands$$1 == "two";
          if(v183) {
            var v180 = outputWindow.document;
            var v447 = complement(lineOfText$$1);
            var v181 = v447 + "\n";
            JAMScript.call(v180.write, v180, [v181]);
            var v182 = outputWindow.document;
            JAMScript.call(v182.write, v182, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v187 = i$$6 < stopBase$$2
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
  var v206 = i$$7 < stopBase$$3;
  for(;v206;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v448 = basePerLine$$3 / groupSize$$3;
    var v194 = j$$8 <= v448;
    for(;v194;) {
      var v190 = k$$2 < groupSize$$3;
      for(;v190;) {
        var v449 = i$$7 + k$$2;
        var v188 = v449 >= stopBase$$3;
        if(v188) {
          break
        }
        var v450 = k$$2 + i$$7;
        var v189 = text$$13.charAt(v450);
        lineOfText$$2 = lineOfText$$2 + v189;
        k$$2 = k$$2 + 1;
        v190 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v192 = numberPosition$$2 == "above";
      if(v192) {
        var v191 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v191
      }
      var v193 = i$$7 >= stopBase$$3;
      if(v193) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v451 = basePerLine$$3 / groupSize$$3;
      v194 = j$$8 <= v451
    }
    var v205 = numberPosition$$2 == "left";
    if(v205) {
      var v195 = outputWindow.document;
      var v569 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v452 = v569 + lineOfText$$2;
      var v196 = v452 + "\n";
      JAMScript.call(v195.write, v195, [v196])
    }else {
      var v204 = numberPosition$$2 == "right";
      if(v204) {
        var v197 = outputWindow.document;
        var v453 = lineOfText$$2 + i$$7;
        var v198 = v453 + "\n";
        JAMScript.call(v197.write, v197, [v198])
      }else {
        var v203 = numberPosition$$2 == "above";
        if(v203) {
          var v199 = outputWindow.document;
          var v200 = aboveNum$$1 + "\n";
          JAMScript.call(v199.write, v199, [v200]);
          var v201 = outputWindow.document;
          var v202 = lineOfText$$2 + "\n";
          JAMScript.call(v201.write, v201, [v202])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v206 = i$$7 < stopBase$$3
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
  var v570 = sequence$$13.length;
  var v454 = v570 <= firstIndexToMutate;
  var v572 = !v454;
  if(v572) {
    var v571 = lastIndexToMutate < 0;
    var v631 = !v571;
    if(v631) {
      v571 = lastIndexToMutate <= firstIndexToMutate
    }
    v454 = v571
  }
  var v207 = v454;
  if(v207) {
    numMut = 0
  }
  var i$$8 = 0;
  var v215 = i$$8 < numMut;
  for(;v215;) {
    maxNum = sequence$$13.length;
    var v455 = Math.random();
    var v208 = v455 * maxNum;
    randNum = Math.floor(v208);
    var v456 = randNum < firstIndexToMutate;
    var v573 = !v456;
    if(v573) {
      v456 = randNum > lastIndexToMutate
    }
    var v209 = v456;
    if(v209) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v215 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v457 = Math.random();
      var v458 = components$$1.length;
      var v210 = v457 * v458;
      componentsIndex = Math.round(v210);
      var v459 = components$$1.length;
      var v211 = componentsIndex == v459;
      if(v211) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v460 = components$$1[componentsIndex]
      }
      var v212 = v460 != currentChar;
      if(v212) {
        needNewChar = false
      }
    }
    var v461 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v462 = components$$1[componentsIndex]
    }
    var v213 = v461 + v462;
    var v463 = randNum + 1;
    var v464 = sequence$$13.length;
    var v214 = sequence$$13.substring(v463, v464);
    sequence$$13 = v213 + v214;
    i$$8 = i$$8 + 1;
    v215 = i$$8 < numMut
  }
  var v216 = outputWindow.document;
  var v217 = addReturns(sequence$$13);
  JAMScript.call(v216.write, v216, [v217]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v222 = j$$9 < lengthOut$$1;
  for(;v222;) {
    var v465 = Math.random();
    var v466 = components$$2.length;
    var v218 = v465 * v466;
    tempNum$$1 = Math.floor(v218);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v467 = sequence$$14.length;
    var v221 = v467 == 60;
    if(v221) {
      var v219 = outputWindow.document;
      var v220 = sequence$$14 + "\n";
      JAMScript.call(v219.write, v219, [v220]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v222 = j$$9 < lengthOut$$1
  }
  var v223 = outputWindow.document;
  var v224 = sequence$$14 + "\n";
  JAMScript.call(v223.write, v223, [v224]);
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
  var v228 = dnaConformation == "circular";
  if(v228) {
    var v225 = sequence$$15.substring(0, lookAhead);
    shiftValue = v225.length;
    var v632 = sequence$$15.length;
    var v574 = v632 - lookAhead;
    var v575 = sequence$$15.length;
    var v468 = sequence$$15.substring(v574, v575);
    var v226 = v468 + sequence$$15;
    var v227 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v226 + v227;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v229 = outputWindow.document;
  JAMScript.call(v229.write, v229, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v230 = outputWindow.document;
  var v633 = '<tr><td class="title" width="200px">' + "Site:";
  var v576 = v633 + '</td><td class="title">';
  var v469 = v576 + "Positions:";
  var v231 = v469 + "</td></tr>\n";
  JAMScript.call(v230.write, v230, [v231]);
  var i$$9 = 0;
  var v470 = arrayOfItems.length;
  var v247 = i$$9 < v470;
  for(;v247;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v471 = arrayOfItems[i$$9]
    }
    var v232 = v471.match(/\/.+\//);
    matchExp = v232 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v634 = arrayOfItems[i$$9]
    }
    var v577 = v634.match(/\)\D*\d+/);
    var v472 = v577.toString();
    var v233 = v472.replace(/\)\D*/, "");
    cutDistance = parseFloat(v233);
    var v239 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v239;) {
      var v234 = matchExp.lastIndex;
      matchPosition = v234 - cutDistance;
      var v473 = matchPosition >= lowerLimit;
      if(v473) {
        v473 = matchPosition < upperLimit
      }
      var v237 = v473;
      if(v237) {
        timesFound = timesFound + 1;
        var v235 = tempString$$1 + ", ";
        var v474 = matchPosition - shiftValue;
        var v236 = v474 + 1;
        tempString$$1 = v235 + v236
      }
      var v238 = matchExp;
      var v578 = matchExp.lastIndex;
      var v635 = RegExp.lastMatch;
      var v579 = v635.length;
      var v475 = v578 - v579;
      v238.lastIndex = v475 + 1;
      v239 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v476 = tempString$$1.search(/\d/);
    var v240 = v476 != -1;
    if(v240) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v244 = timesFound == 0;
    if(v244) {
      backGroundClass = "none"
    }else {
      var v243 = timesFound == 1;
      if(v243) {
        backGroundClass = "one"
      }else {
        var v242 = timesFound == 2;
        if(v242) {
          backGroundClass = "two"
        }else {
          var v241 = timesFound == 3;
          if(v241) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v245 = outputWindow.document;
    var v716 = '<tr><td class="' + backGroundClass;
    var v703 = v716 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v737 = arrayOfItems[i$$9]
    }
    var v728 = v737.match(/\([^\(]+\)/);
    var v717 = v728.toString();
    var v704 = v717.replace(/\(|\)/g, "");
    var v689 = v703 + v704;
    var v670 = v689 + '</td><td class="';
    var v636 = v670 + backGroundClass;
    var v580 = v636 + '">';
    var v477 = v580 + tempString$$1;
    var v246 = v477 + "</td></tr>\n";
    JAMScript.call(v245.write, v245, [v246]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v478 = arrayOfItems.length;
    v247 = i$$9 < v478
  }
  var v248 = outputWindow.document;
  JAMScript.call(v248.write, v248, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v249 = outputWindow.document;
  JAMScript.call(v249.write, v249, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v250 = outputWindow.document;
  var v690 = '<tr><td class="title">' + "Pattern:";
  var v671 = v690 + '</td><td class="title">';
  var v637 = v671 + "Times found:";
  var v581 = v637 + '</td><td class="title">';
  var v479 = v581 + "Percentage:";
  var v251 = v479 + "</td></tr>\n";
  JAMScript.call(v250.write, v250, [v251]);
  var i$$10 = 0;
  var v480 = arrayOfItems$$1.length;
  var v260 = i$$10 < v480;
  for(;v260;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v481 = arrayOfItems$$1[i$$10]
    }
    var v252 = v481.match(/\/[^\/]+\//);
    var matchExp$$1 = v252 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v482 = sequence$$16.search(matchExp$$1);
    var v254 = v482 != -1;
    if(v254) {
      var v253 = sequence$$16.match(matchExp$$1);
      tempNumber = v253.length
    }
    var percentage = 0;
    var v582 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v672 = arrayOfItems$$1[i$$10]
    }
    var v638 = v672.match(/\d+/);
    var v583 = parseFloat(v638);
    var v483 = v582 - v583;
    var v257 = v483 > 0;
    if(v257) {
      var v255 = 100 * tempNumber;
      var v484 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v639 = arrayOfItems$$1[i$$10]
      }
      var v584 = v639.match(/\d+/);
      var v485 = parseFloat(v584);
      var v256 = v484 - v485;
      percentage = v255 / v256
    }
    var v258 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v738 = arrayOfItems$$1[i$$10]
    }
    var v729 = v738.match(/\([^\(]+\)\b/);
    var v718 = v729.toString();
    var v705 = v718.replace(/\(|\)/g, "");
    var v691 = "<tr><td>" + v705;
    var v673 = v691 + "</td><td>";
    var v640 = v673 + tempNumber;
    var v585 = v640 + "</td><td>";
    var v586 = percentage.toFixed(2);
    var v486 = v585 + v586;
    var v259 = v486 + "</td></tr>\n";
    JAMScript.call(v258.write, v258, [v259]);
    i$$10 = i$$10 + 1;
    var v487 = arrayOfItems$$1.length;
    v260 = i$$10 < v487
  }
  var v261 = outputWindow.document;
  JAMScript.call(v261.write, v261, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v488 = sequence$$17.length;
  var v268 = v488 > 0;
  for(;v268;) {
    maxNum$$1 = sequence$$17.length;
    var v489 = Math.random();
    var v262 = v489 * maxNum$$1;
    randNum$$1 = Math.floor(v262);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v263 = randNum$$1 + 1;
    var v264 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v263, v264);
    sequence$$17 = tempString1 + tempString2;
    var v490 = tempSeq.length;
    var v267 = v490 == 60;
    if(v267) {
      var v265 = outputWindow.document;
      var v266 = tempSeq + "\n";
      JAMScript.call(v265.write, v265, [v266]);
      tempSeq = ""
    }
    var v491 = sequence$$17.length;
    v268 = v491 > 0
  }
  var v269 = outputWindow.document;
  var v270 = tempSeq + "\n";
  JAMScript.call(v269.write, v269, [v270]);
  return true
}
function cpgIslands(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v492 = testScript();
  var v271 = v492 == false;
  if(v271) {
    return false
  }
  var v706 = theDocument.forms;
  var v692 = v706[0];
  var v674 = v692.elements;
  var v641 = v674[0];
  var v587 = checkFormElement(v641);
  var v493 = v587 == false;
  var v589 = !v493;
  if(v589) {
    var v719 = theDocument.forms;
    var v707 = v719[0];
    var v693 = v707.elements;
    var v675 = v693[0];
    var v642 = v675.value;
    var v588 = checkSequenceLength(v642, maxInput$$3);
    v493 = v588 == false
  }
  var v272 = v493;
  if(v272) {
    return false
  }
  openWindow("CpG Islands");
  openPre();
  var v676 = theDocument.forms;
  var v643 = v676[0];
  var v590 = v643.elements;
  var v494 = v590[0];
  var v273 = v494.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v273);
  var i$$11 = 0;
  var v495 = arrayOfFasta$$1.length;
  var v278 = i$$11 < v495;
  for(;v278;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v274 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v274);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v275 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v275);
    newDna = removeNonDna(newDna);
    var v276 = outputWindow.document;
    var v277 = getInfoFromTitleAndSequence(title$$9, newDna);
    JAMScript.call(v276.write, v276, [v277]);
    cpgIslandRegions(newDna, 200, 0.6);
    i$$11 = i$$11 + 1;
    var v496 = arrayOfFasta$$1.length;
    v278 = i$$11 < v496
  }
  closePre();
  closeWindow();
  return true
}
function cpgIslandRegions(dnaSequence$$3, windowSize, cutOff) {
  var islandFound = false;
  var numG = 0;
  var numC = 0;
  var numCG = 0;
  var valueY = 0;
  var gcContent = 0;
  dnaSequence$$3 = dnaSequence$$3.toLowerCase();
  windowSize = parseInt(windowSize);
  cutOff = parseFloat(cutOff);
  var v497 = dnaSequence$$3.length;
  var v281 = windowSize > v497;
  if(v281) {
    var v279 = outputWindow.document;
    var v498 = "The input sequence must be longer than " + windowSize;
    var v280 = v498 + " bases.<br />\n";
    JAMScript.call(v279.write, v279, [v280]);
    return true
  }
  var i$$12 = 0;
  var v285 = i$$12 < windowSize;
  for(;v285;) {
    var v499 = dnaSequence$$3.charAt(i$$12);
    var v282 = v499 == "g";
    if(v282) {
      numG = numG + 1
    }
    var v500 = dnaSequence$$3.charAt(i$$12);
    var v284 = v500 == "c";
    if(v284) {
      numC = numC + 1;
      var v591 = i$$12 + 1;
      var v501 = dnaSequence$$3.charAt(v591);
      var v283 = v501 == "g";
      if(v283) {
        numCG = numCG + 1;
        numG = numG + 1;
        i$$12 = i$$12 + 1
      }
    }
    i$$12 = i$$12 + 1;
    v285 = i$$12 < windowSize
  }
  var v502 = numC != 0;
  if(v502) {
    v502 = numG != 0
  }
  var v287 = v502;
  if(v287) {
    var v503 = numC * numG;
    var v286 = v503 / windowSize;
    valueY = numCG / v286
  }else {
    valueY = 0
  }
  var v288 = numG + numC;
  gcContent = v288 / windowSize;
  var v504 = valueY >= cutOff;
  if(v504) {
    v504 = gcContent > 0.5
  }
  var v291 = v504;
  if(v291) {
    gcContent = gcContent * 100;
    valueY = valueY.toFixed(2);
    gcContent = gcContent.toFixed(2);
    var v289 = outputWindow.document;
    var v694 = "CpG island detected in region 1 to " + windowSize;
    var v677 = v694 + " (Obs/Exp = ";
    var v644 = v677 + valueY;
    var v592 = v644 + " and %GC = ";
    var v505 = v592 + gcContent;
    var v290 = v505 + ")<br />\n";
    JAMScript.call(v289.write, v289, [v290]);
    islandFound = true
  }
  start = windowSize;
  var j$$10 = start;
  var v506 = dnaSequence$$3.length;
  var v309 = j$$10 < v506;
  for(;v309;) {
    baseToAdd = dnaSequence$$3.charAt(j$$10);
    var v292 = j$$10 - windowSize;
    baseToLose = dnaSequence$$3.charAt(v292);
    var v293 = j$$10 - 1;
    recentBaseAdded = dnaSequence$$3.charAt(v293);
    var v507 = j$$10 - windowSize;
    var v294 = v507 + 1;
    nextToLose = dnaSequence$$3.charAt(v294);
    var v295 = baseToAdd == "c";
    if(v295) {
      numC = numC + 1
    }
    var v297 = baseToAdd == "g";
    if(v297) {
      numG = numG + 1;
      var v296 = recentBaseAdded == "c";
      if(v296) {
        numCG = numCG + 1
      }
    }
    var v299 = baseToLose == "c";
    if(v299) {
      numC = numC - 1;
      var v298 = nextToLose == "g";
      if(v298) {
        numCG = numCG - 1
      }
    }
    var v300 = baseToLose == "g";
    if(v300) {
      numG = numG - 1
    }
    var v508 = numC != 0;
    if(v508) {
      v508 = numG != 0
    }
    var v302 = v508;
    if(v302) {
      var v509 = numC * numG;
      var v301 = v509 / windowSize;
      valueY = numCG / v301
    }else {
      valueY = 0
    }
    var v303 = numG + numC;
    gcContent = v303 / windowSize;
    var v510 = valueY > cutOff;
    if(v510) {
      v510 = gcContent > 0.5
    }
    var v308 = v510;
    if(v308) {
      var v511 = j$$10 - windowSize;
      var v304 = v511 + 2;
      startRange = v304.toString();
      var v305 = j$$10 + 1;
      endRange = v305.toString();
      gcContent = gcContent * 100;
      valueY = valueY.toFixed(2);
      gcContent = gcContent.toFixed(2);
      var v306 = outputWindow.document;
      var v720 = "CpG island detected in region " + startRange;
      var v708 = v720 + " to ";
      var v695 = v708 + endRange;
      var v678 = v695 + " (Obs/Exp = ";
      var v645 = v678 + valueY;
      var v593 = v645 + " and %GC = ";
      var v512 = v593 + gcContent;
      var v307 = v512 + ") <br />\n";
      JAMScript.call(v306.write, v306, [v307]);
      islandFound = true
    }
    j$$10 = j$$10 + 1;
    var v513 = dnaSequence$$3.length;
    v309 = j$$10 < v513
  }
  var v311 = !islandFound;
  if(v311) {
    var v310 = outputWindow.document;
    JAMScript.call(v310.write, v310, ["No CpG island regions were identified.<br />\n"])
  }
  return true
}
JAMScript.set(document, "onload", v2);
var v312 = document.getElementById("submitbtn");
JAMScript.set(v312, "onclick", v3);
var v313 = document.getElementById("clearbtn");
JAMScript.set(v313, "onclick", v4);

