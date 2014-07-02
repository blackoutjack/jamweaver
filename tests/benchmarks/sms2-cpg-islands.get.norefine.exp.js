function v4() {
  var v600 = document.forms;
  var v520 = v600[0];
  var v319 = v520.elements;
  var v5 = v319[0];
  v5.value = " ";
  var v601 = document.forms;
  var v521 = v601[0];
  var v320 = v521.elements;
  var v6 = v320[4];
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
  var v321 = document.main_form;
  var v8 = v321.main_submit;
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
  var v322 = arrayOfSequences.length;
  var v10 = v322 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v323 = arrayOfTitles.length;
  var v12 = i$$1 < v323;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v602 = arrayOfTitles[i$$1]
    }
    var v522 = v602.search(/\S/);
    var v324 = v522 == -1;
    var v524 = !v324;
    if(v524) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v651 = arrayOfSequences[i$$1]
      }
      var v603 = v651.search(/\S/);
      var v523 = v603 == -1;
      var v605 = !v523;
      if(v605) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v652 = arrayOfSequences[i$$1]
        }
        var v604 = v652.length;
        v523 = v604 != lengthOfAlign
      }
      v324 = v523
    }
    var v11 = v324;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v325 = arrayOfTitles.length;
    v12 = i$$1 < v325
  }
  return true
}
function checkCodonTable(codonTable) {
  var v525 = codonTable.search(/AmAcid/);
  var v326 = v525 == -1;
  var v527 = !v326;
  if(v527) {
    var v606 = codonTable.search(/Codon/);
    var v526 = v606 == -1;
    var v608 = !v526;
    if(v608) {
      var v653 = codonTable.search(/Number/);
      var v607 = v653 == -1;
      var v655 = !v607;
      if(v655) {
        var v684 = codonTable.search(/\/1000/);
        var v654 = v684 == -1;
        var v686 = !v654;
        if(v686) {
          var v685 = codonTable.search(/Fraction\s*\.\./);
          v654 = v685 == -1
        }
        v607 = v654
      }
      v526 = v607
    }
    v326 = v526
  }
  var v13 = v326;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v528 = formElement.value;
  var v327 = v528.search(/\S/);
  var v14 = v327 == -1;
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
  var v328 = arrayOfPatterns.length;
  var v17 = z$$2 < v328;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v529 = arrayOfPatterns[z$$2]
    }
    var v329 = v529.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v329 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v530 = arrayOfPatterns[z$$2]
    }
    var v330 = moreExpressionCheck(v530);
    var v16 = v330 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v331 = arrayOfPatterns.length;
    v17 = z$$2 < v331
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v332 = arrayOfPatterns.length;
  var v26 = j < v332;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v609 = arrayOfPatterns[j]
    }
    var v531 = v609.match(/\/.+\//);
    var v333 = v531 + "gi";
    if(JAMScript.isEval(eval)) {
      var v773 = eval("introspect(JAMScript.introspectors.processAll) { " + v333 + " }")
    }else {
      var v773 = JAMScript.call(eval, null, [v333])
    }
    v20[v21] = v773;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v532 = arrayOfPatterns[j]
    }
    var v334 = v532.match(/=[a-zA-Z\*]/);
    var v774 = v334.toString();
    v22[v23] = v774;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v335 = geneticCodeMatchResult[j]
    }
    var v775 = v335.replace(/=/g, "");
    v24[v25] = v775;
    j = j + 1;
    var v336 = arrayOfPatterns.length;
    v26 = j < v336
  }
  var i$$2 = 0;
  var v533 = testSequence.length;
  var v337 = v533 - 3;
  var v33 = i$$2 <= v337;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v338 = geneticCodeMatchExp.length;
    var v31 = j < v338;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v534 = geneticCodeMatchExp[j]
      }
      var v339 = codon.search(v534);
      var v30 = v339 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v340 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v340 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v341 = geneticCodeMatchExp.length;
      v31 = j < v341
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v535 = testSequence.length;
    var v342 = v535 - 3;
    v33 = i$$2 <= v342
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v343 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v343;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v536 = arrayOfPatterns$$1[z$$3]
    }
    var v344 = v536.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v344 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v345 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v345
  }
  var i$$3 = 0;
  var v346 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v346;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v537 = arrayOfPatterns$$1[i$$3]
    }
    var v347 = "[" + v537;
    var v36 = v347 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v348 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v348;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v538 = arrayOfPatterns$$1[j$$1]
      }
      var v349 = v538.search(re);
      var v37 = v349 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v350 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v350
    }
    i$$3 = i$$3 + 1;
    var v351 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v351
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v352 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v352;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v539 = arrayOfPatterns$$2[z$$4]
    }
    var v353 = v539.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v353 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v540 = arrayOfPatterns$$2[z$$4]
    }
    var v354 = moreExpressionCheck(v540);
    var v41 = v354 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v355 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v355
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v610 = getSequenceFromFasta(text$$7);
  var v541 = v610.replace(/[^A-Za-z]/g, "");
  var v356 = v541.length;
  var v44 = v356 > maxInput;
  if(v44) {
    var v357 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v357 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v358 = text$$8.length;
  var v46 = v358 > maxInput$$1;
  if(v46) {
    var v359 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v359 + " characters.";
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
  var v360 = alignArray.length;
  var v53 = v360 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v361 = alignArray.length;
  var v55 = i$$4 < v361;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v542 = alignArray[i$$4]
    }
    var v362 = v542.search(/[^\s]+\s/);
    var v54 = v362 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v363 = alignArray.length;
    v55 = i$$4 < v363
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
  var v364 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v364 != -1;
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
  var v365 = sequence$$2.length;
  var v59 = "&gt;results for " + v365;
  var stringToReturn = v59 + " residue sequence ";
  var v366 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v366 != -1;
  if(v61) {
    var v367 = stringToReturn + '"';
    var v60 = v367 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v368 = stringToReturn + ' starting "';
  var v369 = sequence$$2.substring(0, 10);
  var v62 = v368 + v369;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v370 = sequenceOne.length;
  var v63 = "Search results for " + v370;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v371 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v371 != -1;
  if(v65) {
    var v372 = stringToReturn$$1 + '"';
    var v64 = v372 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v373 = stringToReturn$$1 + ' starting "';
  var v374 = sequenceOne.substring(0, 10);
  var v66 = v373 + v374;
  stringToReturn$$1 = v66 + '"\n';
  var v375 = stringToReturn$$1 + "and ";
  var v376 = sequenceTwo.length;
  var v67 = v375 + v376;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v377 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v377 != -1;
  if(v69) {
    var v378 = stringToReturn$$1 + '"';
    var v68 = v378 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v379 = stringToReturn$$1 + ' starting "';
  var v380 = sequenceTwo.substring(0, 10);
  var v70 = v379 + v380;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v381 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v381;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v611 = arrayOfPatterns$$3[j$$2]
    }
    var v543 = v611.match(/\/.+\//);
    var v382 = v543 + "gi";
    if(JAMScript.isEval(eval)) {
      var v776 = eval("introspect(JAMScript.introspectors.processAll) { " + v382 + " }")
    }else {
      var v776 = JAMScript.call(eval, null, [v382])
    }
    v73[v74] = v776;
    j$$2 = j$$2 + 1;
    var v383 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v383
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v384 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v384;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v544 = arrayOfPatterns$$4[j$$3]
    }
    var v385 = v544.match(/=[a-zA-Z\*]/);
    var v777 = v385.toString();
    v77[v78] = v777;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v386 = geneticCodeMatchResult$$1[j$$3]
    }
    var v778 = v386.replace(/=/g, "");
    v79[v80] = v778;
    j$$3 = j$$3 + 1;
    var v387 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v387
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v388 = sequence$$3.length;
  var v82 = "Results for " + v388;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v389 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v389 != -1;
  if(v84) {
    var v390 = stringToReturn$$2 + '"';
    var v83 = v390 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v391 = stringToReturn$$2 + ' starting "';
  var v392 = sequence$$3.substring(0, 10);
  var v85 = v391 + v392;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v545 = "Results for " + topology;
  var v393 = v545 + " ";
  var v394 = sequence$$4.length;
  var v87 = v393 + v394;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v395 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v395 != -1;
  if(v89) {
    var v396 = stringToReturn$$3 + '"';
    var v88 = v396 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v397 = stringToReturn$$3 + ' starting "';
  var v398 = sequence$$4.substring(0, 10);
  var v90 = v397 + v398;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v399 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v399;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v400 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v400 != -1;
  if(v94) {
    var v401 = stringToReturn$$4 + '"';
    var v93 = v401 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v402 = stringToReturn$$4 + ' starting "';
  var v403 = sequenceOne$$1.substring(0, 10);
  var v95 = v402 + v403;
  stringToReturn$$4 = v95 + '"\n';
  var v404 = stringToReturn$$4 + "and ";
  var v405 = sequenceTwo$$1.length;
  var v96 = v404 + v405;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v406 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v406 != -1;
  if(v98) {
    var v407 = stringToReturn$$4 + '"';
    var v97 = v407 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v408 = stringToReturn$$4 + ' starting "';
  var v409 = sequenceTwo$$1.substring(0, 10);
  var v99 = v408 + v409;
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
    var v410 = Math.random();
    var v411 = components.length;
    var v101 = v410 * v411;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v412 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v412 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v413 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v413 != -1;
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
  var v546 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v414 = v546 != -1;
  var v548 = !v414;
  if(v548) {
    var v612 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v547 = v612 != -1;
    var v614 = !v547;
    if(v614) {
      var v656 = expressionToCheck.search(/\[\]/);
      var v613 = v656 != -1;
      var v658 = !v613;
      if(v658) {
        var v687 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v657 = v687 != -1;
        var v689 = !v657;
        if(v689) {
          var v701 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v688 = v701 != -1;
          var v703 = !v688;
          if(v703) {
            var v714 = expressionToCheck.search(/\|\|/);
            var v702 = v714 != -1;
            var v716 = !v702;
            if(v716) {
              var v726 = expressionToCheck.search(/\/\|/);
              var v715 = v726 != -1;
              var v728 = !v715;
              if(v728) {
                var v735 = expressionToCheck.search(/\|\//);
                var v727 = v735 != -1;
                var v737 = !v727;
                if(v737) {
                  var v744 = expressionToCheck.search(/\[.\]/);
                  var v736 = v744 != -1;
                  var v746 = !v736;
                  if(v746) {
                    var v751 = expressionToCheck.search(/\</);
                    var v745 = v751 != -1;
                    var v753 = !v745;
                    if(v753) {
                      var v752 = expressionToCheck.search(/\>/);
                      v745 = v752 != -1
                    }
                    v736 = v745
                  }
                  v727 = v736
                }
                v715 = v727
              }
              v702 = v715
            }
            v688 = v702
          }
          v657 = v688
        }
        v613 = v657
      }
      v547 = v613
    }
    v414 = v547
  }
  var v106 = v414;
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
    var v779 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v779[2], v779[1], v779[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v615 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v549 = v615 + "<head>\n";
  var v415 = v549 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v415 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v766 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v762 = v766 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v758 = v762 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v754 = v758 + "div.info {font-weight: bold}\n";
    var v747 = v754 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v738 = v747 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v729 = v738 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v717 = v729 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v704 = v717 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v690 = v704 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v659 = v690 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v616 = v659 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v550 = v616 + "td.many {color: #000000}\n";
    var v416 = v550 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v416 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v770 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v767 = v770 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v763 = v767 + "div.title {display: none}\n";
    var v759 = v763 + "div.info {font-weight: bold}\n";
    var v755 = v759 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v748 = v755 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v739 = v748 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v730 = v739 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v718 = v730 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v705 = v718 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v691 = v705 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v660 = v691 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v617 = v660 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v551 = v617 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v417 = v551 + "img {display: none}\n";
    var v116 = v417 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v618 = "</head>\n" + '<body class="main">\n';
  var v552 = v618 + '<div class="title">';
  var v418 = v552 + title$$6;
  var v118 = v418 + " results</div>\n";
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
    var v780 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v780[2], v780[1], v780[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v619 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v553 = v619 + "<head>\n";
  var v419 = v553 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v419 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v768 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v764 = v768 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v760 = v764 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v756 = v760 + "div.info {font-weight: bold}\n";
    var v749 = v756 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v740 = v749 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v731 = v740 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v719 = v731 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v706 = v719 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v692 = v706 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v661 = v692 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v620 = v661 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v554 = v620 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v420 = v554 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v420 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v772 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v771 = v772 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v769 = v771 + "div.title {display: none}\n";
    var v765 = v769 + "div.info {font-weight: bold}\n";
    var v761 = v765 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v757 = v761 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v750 = v757 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v741 = v750 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v732 = v741 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v720 = v732 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v707 = v720 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v693 = v707 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v662 = v693 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v621 = v662 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v555 = v621 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v421 = v555 + "img {display: none}\n";
    var v124 = v421 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v622 = "</head>\n" + '<body class="main">\n';
  var v556 = v622 + '<div class="title">';
  var v422 = v556 + title$$8;
  var v126 = v422 + " results</div>\n";
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
  var v423 = dnaSequence$$1.search(/./);
  var v127 = v423 != -1;
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
  var v424 = testArray[0];
  var v131 = v424 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v425 = testString.search(re$$2);
  var v132 = v425 == -1;
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
  var v426 = testNum.toFixed(3);
  var v135 = v426 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v427 = testNum.toPrecision(5);
  var v136 = v427 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v428 = theNumber$$1.search(/\d/);
  var v137 = v428 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v557 = emblFile.search(/ID/);
  var v429 = v557 == -1;
  var v559 = !v429;
  if(v559) {
    var v623 = emblFile.search(/AC/);
    var v558 = v623 == -1;
    var v625 = !v558;
    if(v625) {
      var v663 = emblFile.search(/DE/);
      var v624 = v663 == -1;
      var v665 = !v624;
      if(v665) {
        var v664 = emblFile.search(/SQ/);
        v624 = v664 == -1
      }
      v558 = v624
    }
    v429 = v558
  }
  var v138 = v429;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v430 = theNumber$$2.search(/\d/);
  var v139 = v430 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v431 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v431 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v432 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v432 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v433 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v433 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v560 = genBankFile.search(/LOCUS/);
  var v434 = v560 == -1;
  var v562 = !v434;
  if(v562) {
    var v626 = genBankFile.search(/DEFINITION/);
    var v561 = v626 == -1;
    var v628 = !v561;
    if(v628) {
      var v666 = genBankFile.search(/ACCESSION/);
      var v627 = v666 == -1;
      var v668 = !v627;
      if(v668) {
        var v667 = genBankFile.search(/ORIGIN/);
        v627 = v667 == -1
      }
      v561 = v627
    }
    v434 = v561
  }
  var v144 = v434;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v563 = genBankFile$$1.search(/LOCUS/);
  var v435 = v563 == -1;
  var v565 = !v435;
  if(v565) {
    var v629 = genBankFile$$1.search(/DEFINITION/);
    var v564 = v629 == -1;
    var v631 = !v564;
    if(v631) {
      var v669 = genBankFile$$1.search(/ACCESSION/);
      var v630 = v669 == -1;
      var v671 = !v630;
      if(v671) {
        var v670 = genBankFile$$1.search(/ORIGIN/);
        v630 = v670 == -1
      }
      v564 = v630
    }
    v435 = v564
  }
  var v145 = v435;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v436 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v436 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v566 = emblFile$$1.search(/ID/);
  var v437 = v566 == -1;
  var v568 = !v437;
  if(v568) {
    var v632 = emblFile$$1.search(/AC/);
    var v567 = v632 == -1;
    var v634 = !v567;
    if(v634) {
      var v672 = emblFile$$1.search(/DE/);
      var v633 = v672 == -1;
      var v674 = !v633;
      if(v674) {
        var v673 = emblFile$$1.search(/SQ/);
        v633 = v673 == -1
      }
      v567 = v633
    }
    v437 = v567
  }
  var v147 = v437;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v438 = emblFile$$1.search(/^FT/m);
  var v148 = v438 == -1;
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
    var v439 = basePerLine / groupSize;
    var v153 = j$$6 <= v439;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v440 = k + i$$5;
        var v151 = text$$10.charAt(v440);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v441 = basePerLine / groupSize;
      v153 = j$$6 <= v441
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
    var v442 = adjustment < 0;
    if(v442) {
      v442 = adjusted >= 0
    }
    var v157 = v442;
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
    var v443 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v443;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v444 = i$$6 + k$$1;
        var v158 = v444 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v445 = k$$1 + i$$6;
        var v160 = text$$12.charAt(v445);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v446 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v446, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v447 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v447
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v635 = adjustNumbering(lineNum, numberingAdjustment);
      var v569 = rightNum(v635, "", 8, tabIn$$3);
      var v448 = v569 + lineOfText$$1;
      var v168 = v448 + "\n";
      JAMScript.call(v167.write, v167, [v168]);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v636 = adjustNumbering(lineNum, numberingAdjustment);
        var v570 = rightNum(v636, "", 8, tabIn$$3);
        var v571 = complement(lineOfText$$1);
        var v449 = v570 + v571;
        var v170 = v449 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v171 = outputWindow.document;
        JAMScript.call(v171.write, v171, ["\n"])
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v572 = lineOfText$$1;
        var v573 = adjustNumbering(i$$6, numberingAdjustment);
        var v450 = v572 + v573;
        var v174 = v450 + "\n";
        JAMScript.call(v173.write, v173, [v174]);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v574 = complement(lineOfText$$1);
          var v575 = adjustNumbering(i$$6, numberingAdjustment);
          var v451 = v574 + v575;
          var v176 = v451 + "\n";
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
            var v452 = complement(lineOfText$$1);
            var v184 = v452 + "\n";
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
    var v453 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v453;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v454 = i$$7 + k$$2;
        var v191 = v454 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v455 = k$$2 + i$$7;
        var v193 = text$$13.charAt(v455);
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
      var v456 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v456
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v576 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v457 = v576 + lineOfText$$2;
      var v201 = v457 + "\n";
      JAMScript.call(v200.write, v200, [v201])
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v458 = lineOfText$$2 + i$$7;
        var v203 = v458 + "\n";
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
  var v577 = sequence$$13.length;
  var v459 = v577 <= firstIndexToMutate;
  var v579 = !v459;
  if(v579) {
    var v578 = lastIndexToMutate < 0;
    var v637 = !v578;
    if(v637) {
      v578 = lastIndexToMutate <= firstIndexToMutate
    }
    v459 = v578
  }
  var v212 = v459;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v460 = Math.random();
    var v213 = v460 * maxNum;
    randNum = Math.floor(v213);
    var v461 = randNum < firstIndexToMutate;
    var v580 = !v461;
    if(v580) {
      v461 = randNum > lastIndexToMutate
    }
    var v214 = v461;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v462 = Math.random();
      var v463 = components$$1.length;
      var v215 = v462 * v463;
      componentsIndex = Math.round(v215);
      var v464 = components$$1.length;
      var v216 = componentsIndex == v464;
      if(v216) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v465 = components$$1[componentsIndex]
      }
      var v217 = v465 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v466 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v467 = components$$1[componentsIndex]
    }
    var v218 = v466 + v467;
    var v468 = randNum + 1;
    var v469 = sequence$$13.length;
    var v219 = sequence$$13.substring(v468, v469);
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
    var v470 = Math.random();
    var v471 = components$$2.length;
    var v223 = v470 * v471;
    tempNum$$1 = Math.floor(v223);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v472 = sequence$$14.length;
    var v226 = v472 == 60;
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
    var v638 = sequence$$15.length;
    var v581 = v638 - lookAhead;
    var v582 = sequence$$15.length;
    var v473 = sequence$$15.substring(v581, v582);
    var v231 = v473 + sequence$$15;
    var v232 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAMScript.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v235 = outputWindow.document;
  var v639 = '<tr><td class="title" width="200px">' + "Site:";
  var v583 = v639 + '</td><td class="title">';
  var v474 = v583 + "Positions:";
  var v236 = v474 + "</td></tr>\n";
  JAMScript.call(v235.write, v235, [v236]);
  var i$$9 = 0;
  var v475 = arrayOfItems.length;
  var v252 = i$$9 < v475;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v476 = arrayOfItems[i$$9]
    }
    var v237 = v476.match(/\/.+\//);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v640 = arrayOfItems[i$$9]
    }
    var v584 = v640.match(/\)\D*\d+/);
    var v477 = v584.toString();
    var v238 = v477.replace(/\)\D*/, "");
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v478 = matchPosition >= lowerLimit;
      if(v478) {
        v478 = matchPosition < upperLimit
      }
      var v242 = v478;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v479 = matchPosition - shiftValue;
        var v241 = v479 + 1;
        tempString$$1 = v240 + v241
      }
      var v480 = matchExp.lastIndex;
      var v585 = RegExp.lastMatch;
      var v481 = v585.length;
      var v243 = v480 - v481;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v482 = tempString$$1.search(/\d/);
    var v245 = v482 != -1;
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
    var v721 = '<tr><td class="' + backGroundClass;
    var v708 = v721 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v742 = arrayOfItems[i$$9]
    }
    var v733 = v742.match(/\([^\(]+\)/);
    var v722 = v733.toString();
    var v709 = v722.replace(/\(|\)/g, "");
    var v694 = v708 + v709;
    var v675 = v694 + '</td><td class="';
    var v641 = v675 + backGroundClass;
    var v586 = v641 + '">';
    var v483 = v586 + tempString$$1;
    var v251 = v483 + "</td></tr>\n";
    JAMScript.call(v250.write, v250, [v251]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v484 = arrayOfItems.length;
    v252 = i$$9 < v484
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
  var v695 = '<tr><td class="title">' + "Pattern:";
  var v676 = v695 + '</td><td class="title">';
  var v642 = v676 + "Times found:";
  var v587 = v642 + '</td><td class="title">';
  var v485 = v587 + "Percentage:";
  var v256 = v485 + "</td></tr>\n";
  JAMScript.call(v255.write, v255, [v256]);
  var i$$10 = 0;
  var v486 = arrayOfItems$$1.length;
  var v265 = i$$10 < v486;
  for(;v265;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v487 = arrayOfItems$$1[i$$10]
    }
    var v257 = v487.match(/\/[^\/]+\//);
    var matchExp$$1 = v257 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v488 = sequence$$16.search(matchExp$$1);
    var v259 = v488 != -1;
    if(v259) {
      var v258 = sequence$$16.match(matchExp$$1);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v588 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v677 = arrayOfItems$$1[i$$10]
    }
    var v643 = v677.match(/\d+/);
    var v589 = parseFloat(v643);
    var v489 = v588 - v589;
    var v262 = v489 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v490 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v644 = arrayOfItems$$1[i$$10]
      }
      var v590 = v644.match(/\d+/);
      var v491 = parseFloat(v590);
      var v261 = v490 - v491;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v743 = arrayOfItems$$1[i$$10]
    }
    var v734 = v743.match(/\([^\(]+\)\b/);
    var v723 = v734.toString();
    var v710 = v723.replace(/\(|\)/g, "");
    var v696 = "<tr><td>" + v710;
    var v678 = v696 + "</td><td>";
    var v645 = v678 + tempNumber;
    var v591 = v645 + "</td><td>";
    var v592 = percentage.toFixed(2);
    var v492 = v591 + v592;
    var v264 = v492 + "</td></tr>\n";
    JAMScript.call(v263.write, v263, [v264]);
    i$$10 = i$$10 + 1;
    var v493 = arrayOfItems$$1.length;
    v265 = i$$10 < v493
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
  var v494 = sequence$$17.length;
  var v273 = v494 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v495 = Math.random();
    var v267 = v495 * maxNum$$1;
    randNum$$1 = Math.floor(v267);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v268, v269);
    sequence$$17 = tempString1 + tempString2;
    var v496 = tempSeq.length;
    var v272 = v496 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAMScript.call(v270.write, v270, [v271]);
      tempSeq = ""
    }
    var v497 = sequence$$17.length;
    v273 = v497 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAMScript.call(v274.write, v274, [v275]);
  return true
}
function cpgIslands(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v498 = testScript();
  var v276 = v498 == false;
  if(v276) {
    return false
  }
  var v711 = theDocument.forms;
  var v697 = v711[0];
  var v679 = v697.elements;
  var v646 = v679[0];
  var v593 = checkFormElement(v646);
  var v499 = v593 == false;
  var v595 = !v499;
  if(v595) {
    var v724 = theDocument.forms;
    var v712 = v724[0];
    var v698 = v712.elements;
    var v680 = v698[0];
    var v647 = v680.value;
    var v594 = checkSequenceLength(v647, maxInput$$3);
    v499 = v594 == false
  }
  var v277 = v499;
  if(v277) {
    return false
  }
  openWindow("CpG Islands");
  openPre();
  var v681 = theDocument.forms;
  var v648 = v681[0];
  var v596 = v648.elements;
  var v500 = v596[0];
  var v278 = v500.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v278);
  var i$$11 = 0;
  var v501 = arrayOfFasta$$1.length;
  var v283 = i$$11 < v501;
  for(;v283;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v279 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v279);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v280 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v280);
    newDna = removeNonDna(newDna);
    var v281 = outputWindow.document;
    var v282 = getInfoFromTitleAndSequence(title$$9, newDna);
    JAMScript.call(v281.write, v281, [v282]);
    cpgIslandRegions(newDna, 200, 0.6);
    i$$11 = i$$11 + 1;
    var v502 = arrayOfFasta$$1.length;
    v283 = i$$11 < v502
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
  var v503 = dnaSequence$$3.length;
  var v286 = windowSize > v503;
  if(v286) {
    var v284 = outputWindow.document;
    var v504 = "The input sequence must be longer than " + windowSize;
    var v285 = v504 + " bases.<br />\n";
    JAMScript.call(v284.write, v284, [v285]);
    return true
  }
  var i$$12 = 0;
  var v290 = i$$12 < windowSize;
  for(;v290;) {
    var v505 = dnaSequence$$3.charAt(i$$12);
    var v287 = v505 == "g";
    if(v287) {
      numG = numG + 1
    }
    var v506 = dnaSequence$$3.charAt(i$$12);
    var v289 = v506 == "c";
    if(v289) {
      numC = numC + 1;
      var v597 = i$$12 + 1;
      var v507 = dnaSequence$$3.charAt(v597);
      var v288 = v507 == "g";
      if(v288) {
        numCG = numCG + 1;
        numG = numG + 1;
        i$$12 = i$$12 + 1
      }
    }
    i$$12 = i$$12 + 1;
    v290 = i$$12 < windowSize
  }
  var v508 = numC != 0;
  if(v508) {
    v508 = numG != 0
  }
  var v292 = v508;
  if(v292) {
    var v509 = numC * numG;
    var v291 = v509 / windowSize;
    valueY = numCG / v291
  }else {
    valueY = 0
  }
  var v293 = numG + numC;
  gcContent = v293 / windowSize;
  var v510 = valueY >= cutOff;
  if(v510) {
    v510 = gcContent > 0.5
  }
  var v296 = v510;
  if(v296) {
    gcContent = gcContent * 100;
    valueY = valueY.toFixed(2);
    gcContent = gcContent.toFixed(2);
    var v294 = outputWindow.document;
    var v699 = "CpG island detected in region 1 to " + windowSize;
    var v682 = v699 + " (Obs/Exp = ";
    var v649 = v682 + valueY;
    var v598 = v649 + " and %GC = ";
    var v511 = v598 + gcContent;
    var v295 = v511 + ")<br />\n";
    JAMScript.call(v294.write, v294, [v295]);
    islandFound = true
  }
  start = windowSize;
  var j$$10 = start;
  var v512 = dnaSequence$$3.length;
  var v314 = j$$10 < v512;
  for(;v314;) {
    baseToAdd = dnaSequence$$3.charAt(j$$10);
    var v297 = j$$10 - windowSize;
    baseToLose = dnaSequence$$3.charAt(v297);
    var v298 = j$$10 - 1;
    recentBaseAdded = dnaSequence$$3.charAt(v298);
    var v513 = j$$10 - windowSize;
    var v299 = v513 + 1;
    nextToLose = dnaSequence$$3.charAt(v299);
    var v300 = baseToAdd == "c";
    if(v300) {
      numC = numC + 1
    }
    var v302 = baseToAdd == "g";
    if(v302) {
      numG = numG + 1;
      var v301 = recentBaseAdded == "c";
      if(v301) {
        numCG = numCG + 1
      }
    }
    var v304 = baseToLose == "c";
    if(v304) {
      numC = numC - 1;
      var v303 = nextToLose == "g";
      if(v303) {
        numCG = numCG - 1
      }
    }
    var v305 = baseToLose == "g";
    if(v305) {
      numG = numG - 1
    }
    var v514 = numC != 0;
    if(v514) {
      v514 = numG != 0
    }
    var v307 = v514;
    if(v307) {
      var v515 = numC * numG;
      var v306 = v515 / windowSize;
      valueY = numCG / v306
    }else {
      valueY = 0
    }
    var v308 = numG + numC;
    gcContent = v308 / windowSize;
    var v516 = valueY > cutOff;
    if(v516) {
      v516 = gcContent > 0.5
    }
    var v313 = v516;
    if(v313) {
      var v517 = j$$10 - windowSize;
      var v309 = v517 + 2;
      startRange = v309.toString();
      var v310 = j$$10 + 1;
      endRange = v310.toString();
      gcContent = gcContent * 100;
      valueY = valueY.toFixed(2);
      gcContent = gcContent.toFixed(2);
      var v311 = outputWindow.document;
      var v725 = "CpG island detected in region " + startRange;
      var v713 = v725 + " to ";
      var v700 = v713 + endRange;
      var v683 = v700 + " (Obs/Exp = ";
      var v650 = v683 + valueY;
      var v599 = v650 + " and %GC = ";
      var v518 = v599 + gcContent;
      var v312 = v518 + ") <br />\n";
      JAMScript.call(v311.write, v311, [v312]);
      islandFound = true
    }
    j$$10 = j$$10 + 1;
    var v519 = dnaSequence$$3.length;
    v314 = j$$10 < v519
  }
  var v316 = !islandFound;
  if(v316) {
    var v315 = outputWindow.document;
    JAMScript.call(v315.write, v315, ["No CpG island regions were identified.<br />\n"])
  }
  return true
}
JAMScript.set(document, "onload", v2);
var v317 = document.getElementById("submitbtn");
JAMScript.set(v317, "onclick", v3);
var v318 = document.getElementById("clearbtn");
JAMScript.set(v318, "onclick", v4);

