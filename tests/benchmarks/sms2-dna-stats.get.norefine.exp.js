function v4() {
  var v542 = document.forms;
  var v465 = v542[0];
  var v282 = v465.elements;
  var v5 = v282[0];
  v5.value = " ";
  var v543 = document.forms;
  var v466 = v543[0];
  var v283 = v466.elements;
  var v6 = v283[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    dnaStats(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v2() {
  var v284 = document.main_form;
  var v8 = v284.main_submit;
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
  var v285 = arrayOfSequences.length;
  var v10 = v285 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v286 = arrayOfTitles.length;
  var v12 = i$$1 < v286;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v544 = arrayOfTitles[i$$1]
    }
    var v467 = v544.search(/\S/);
    var v287 = v467 == -1;
    var v469 = !v287;
    if(v469) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v592 = arrayOfSequences[i$$1]
      }
      var v545 = v592.search(/\S/);
      var v468 = v545 == -1;
      var v547 = !v468;
      if(v547) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v593 = arrayOfSequences[i$$1]
        }
        var v546 = v593.length;
        v468 = v546 != lengthOfAlign
      }
      v287 = v468
    }
    var v11 = v287;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v288 = arrayOfTitles.length;
    v12 = i$$1 < v288
  }
  return true
}
function checkCodonTable(codonTable) {
  var v470 = codonTable.search(/AmAcid/);
  var v289 = v470 == -1;
  var v472 = !v289;
  if(v472) {
    var v548 = codonTable.search(/Codon/);
    var v471 = v548 == -1;
    var v550 = !v471;
    if(v550) {
      var v594 = codonTable.search(/Number/);
      var v549 = v594 == -1;
      var v596 = !v549;
      if(v596) {
        var v623 = codonTable.search(/\/1000/);
        var v595 = v623 == -1;
        var v625 = !v595;
        if(v625) {
          var v624 = codonTable.search(/Fraction\s*\.\./);
          v595 = v624 == -1
        }
        v549 = v595
      }
      v471 = v549
    }
    v289 = v471
  }
  var v13 = v289;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v473 = formElement.value;
  var v290 = v473.search(/\S/);
  var v14 = v290 == -1;
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
  var v291 = arrayOfPatterns.length;
  var v17 = z$$2 < v291;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v474 = arrayOfPatterns[z$$2]
    }
    var v292 = v474.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v292 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v475 = arrayOfPatterns[z$$2]
    }
    var v293 = moreExpressionCheck(v475);
    var v16 = v293 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v294 = arrayOfPatterns.length;
    v17 = z$$2 < v294
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v295 = arrayOfPatterns.length;
  var v26 = j < v295;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v551 = arrayOfPatterns[j]
    }
    var v476 = v551.match(/\/.+\//);
    var v296 = v476 + "gi";
    if(JAMScript.isEval(eval)) {
      var v708 = eval("introspect(JAMScript.introspectors.processAll) { " + v296 + " }")
    }else {
      var v708 = JAMScript.call(eval, null, [v296])
    }
    v20[v21] = v708;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v477 = arrayOfPatterns[j]
    }
    var v297 = v477.match(/=[a-zA-Z\*]/);
    var v709 = v297.toString();
    v22[v23] = v709;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v298 = geneticCodeMatchResult[j]
    }
    var v710 = v298.replace(/=/g, "");
    v24[v25] = v710;
    j = j + 1;
    var v299 = arrayOfPatterns.length;
    v26 = j < v299
  }
  var i$$2 = 0;
  var v478 = testSequence.length;
  var v300 = v478 - 3;
  var v33 = i$$2 <= v300;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v301 = geneticCodeMatchExp.length;
    var v31 = j < v301;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v479 = geneticCodeMatchExp[j]
      }
      var v302 = codon.search(v479);
      var v30 = v302 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v303 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v303 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v304 = geneticCodeMatchExp.length;
      v31 = j < v304
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v480 = testSequence.length;
    var v305 = v480 - 3;
    v33 = i$$2 <= v305
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v306 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v306;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v481 = arrayOfPatterns$$1[z$$3]
    }
    var v307 = v481.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v307 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v308 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v308
  }
  var i$$3 = 0;
  var v309 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v309;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v482 = arrayOfPatterns$$1[i$$3]
    }
    var v310 = "[" + v482;
    var v36 = v310 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v311 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v311;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v483 = arrayOfPatterns$$1[j$$1]
      }
      var v312 = v483.search(re);
      var v37 = v312 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v313 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v313
    }
    i$$3 = i$$3 + 1;
    var v314 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v314
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v315 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v315;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v484 = arrayOfPatterns$$2[z$$4]
    }
    var v316 = v484.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v316 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v485 = arrayOfPatterns$$2[z$$4]
    }
    var v317 = moreExpressionCheck(v485);
    var v41 = v317 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v318 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v318
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v552 = getSequenceFromFasta(text$$7);
  var v486 = v552.replace(/[^A-Za-z]/g, "");
  var v319 = v486.length;
  var v44 = v319 > maxInput;
  if(v44) {
    var v320 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v320 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v321 = text$$8.length;
  var v46 = v321 > maxInput$$1;
  if(v46) {
    var v322 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v322 + " characters.";
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
  var v323 = alignArray.length;
  var v53 = v323 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v324 = alignArray.length;
  var v55 = i$$4 < v324;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v487 = alignArray[i$$4]
    }
    var v325 = v487.search(/[^\s]+\s/);
    var v54 = v325 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v326 = alignArray.length;
    v55 = i$$4 < v326
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
  var v327 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v327 != -1;
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
  var v328 = sequence$$2.length;
  var v59 = "&gt;results for " + v328;
  var stringToReturn = v59 + " residue sequence ";
  var v329 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v329 != -1;
  if(v61) {
    var v330 = stringToReturn + '"';
    var v60 = v330 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v331 = stringToReturn + ' starting "';
  var v332 = sequence$$2.substring(0, 10);
  var v62 = v331 + v332;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v333 = sequenceOne.length;
  var v63 = "Search results for " + v333;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v334 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v334 != -1;
  if(v65) {
    var v335 = stringToReturn$$1 + '"';
    var v64 = v335 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v336 = stringToReturn$$1 + ' starting "';
  var v337 = sequenceOne.substring(0, 10);
  var v66 = v336 + v337;
  stringToReturn$$1 = v66 + '"\n';
  var v338 = stringToReturn$$1 + "and ";
  var v339 = sequenceTwo.length;
  var v67 = v338 + v339;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v340 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v340 != -1;
  if(v69) {
    var v341 = stringToReturn$$1 + '"';
    var v68 = v341 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v342 = stringToReturn$$1 + ' starting "';
  var v343 = sequenceTwo.substring(0, 10);
  var v70 = v342 + v343;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v344 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v344;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v553 = arrayOfPatterns$$3[j$$2]
    }
    var v488 = v553.match(/\/.+\//);
    var v345 = v488 + "gi";
    if(JAMScript.isEval(eval)) {
      var v711 = eval("introspect(JAMScript.introspectors.processAll) { " + v345 + " }")
    }else {
      var v711 = JAMScript.call(eval, null, [v345])
    }
    v73[v74] = v711;
    j$$2 = j$$2 + 1;
    var v346 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v346
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v347 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v347;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v489 = arrayOfPatterns$$4[j$$3]
    }
    var v348 = v489.match(/=[a-zA-Z\*]/);
    var v712 = v348.toString();
    v77[v78] = v712;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v349 = geneticCodeMatchResult$$1[j$$3]
    }
    var v713 = v349.replace(/=/g, "");
    v79[v80] = v713;
    j$$3 = j$$3 + 1;
    var v350 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v350
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v351 = sequence$$3.length;
  var v82 = "Results for " + v351;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v352 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v352 != -1;
  if(v84) {
    var v353 = stringToReturn$$2 + '"';
    var v83 = v353 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v354 = stringToReturn$$2 + ' starting "';
  var v355 = sequence$$3.substring(0, 10);
  var v85 = v354 + v355;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v490 = "Results for " + topology;
  var v356 = v490 + " ";
  var v357 = sequence$$4.length;
  var v87 = v356 + v357;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v358 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v358 != -1;
  if(v89) {
    var v359 = stringToReturn$$3 + '"';
    var v88 = v359 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v360 = stringToReturn$$3 + ' starting "';
  var v361 = sequence$$4.substring(0, 10);
  var v90 = v360 + v361;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v362 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v362;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v363 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v363 != -1;
  if(v94) {
    var v364 = stringToReturn$$4 + '"';
    var v93 = v364 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v365 = stringToReturn$$4 + ' starting "';
  var v366 = sequenceOne$$1.substring(0, 10);
  var v95 = v365 + v366;
  stringToReturn$$4 = v95 + '"\n';
  var v367 = stringToReturn$$4 + "and ";
  var v368 = sequenceTwo$$1.length;
  var v96 = v367 + v368;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v369 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v369 != -1;
  if(v98) {
    var v370 = stringToReturn$$4 + '"';
    var v97 = v370 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v371 = stringToReturn$$4 + ' starting "';
  var v372 = sequenceTwo$$1.substring(0, 10);
  var v99 = v371 + v372;
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
    var v373 = Math.random();
    var v374 = components.length;
    var v101 = v373 * v374;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v375 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v375 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v376 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v376 != -1;
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
  var v491 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v377 = v491 != -1;
  var v493 = !v377;
  if(v493) {
    var v554 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v492 = v554 != -1;
    var v556 = !v492;
    if(v556) {
      var v597 = expressionToCheck.search(/\[\]/);
      var v555 = v597 != -1;
      var v599 = !v555;
      if(v599) {
        var v626 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v598 = v626 != -1;
        var v628 = !v598;
        if(v628) {
          var v638 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v627 = v638 != -1;
          var v640 = !v627;
          if(v640) {
            var v650 = expressionToCheck.search(/\|\|/);
            var v639 = v650 != -1;
            var v652 = !v639;
            if(v652) {
              var v661 = expressionToCheck.search(/\/\|/);
              var v651 = v661 != -1;
              var v663 = !v651;
              if(v663) {
                var v670 = expressionToCheck.search(/\|\//);
                var v662 = v670 != -1;
                var v672 = !v662;
                if(v672) {
                  var v679 = expressionToCheck.search(/\[.\]/);
                  var v671 = v679 != -1;
                  var v681 = !v671;
                  if(v681) {
                    var v686 = expressionToCheck.search(/\</);
                    var v680 = v686 != -1;
                    var v688 = !v680;
                    if(v688) {
                      var v687 = expressionToCheck.search(/\>/);
                      v680 = v687 != -1
                    }
                    v671 = v680
                  }
                  v662 = v671
                }
                v651 = v662
              }
              v639 = v651
            }
            v627 = v639
          }
          v598 = v627
        }
        v555 = v598
      }
      v492 = v555
    }
    v377 = v492
  }
  var v106 = v377;
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
    var v714 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v714[2], v714[1], v714[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v557 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v494 = v557 + "<head>\n";
  var v378 = v494 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v378 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v701 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v697 = v701 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v693 = v697 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v689 = v693 + "div.info {font-weight: bold}\n";
    var v682 = v689 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v673 = v682 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v664 = v673 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v653 = v664 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v641 = v653 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v629 = v641 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v600 = v629 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v558 = v600 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v495 = v558 + "td.many {color: #000000}\n";
    var v379 = v495 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v379 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v705 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v702 = v705 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v698 = v702 + "div.title {display: none}\n";
    var v694 = v698 + "div.info {font-weight: bold}\n";
    var v690 = v694 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v683 = v690 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v674 = v683 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v665 = v674 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v654 = v665 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v642 = v654 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v630 = v642 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v601 = v630 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v559 = v601 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v496 = v559 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v380 = v496 + "img {display: none}\n";
    var v116 = v380 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v560 = "</head>\n" + '<body class="main">\n';
  var v497 = v560 + '<div class="title">';
  var v381 = v497 + title$$6;
  var v118 = v381 + " results</div>\n";
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
    var v715 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v715[2], v715[1], v715[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v561 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v498 = v561 + "<head>\n";
  var v382 = v498 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v382 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v703 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v699 = v703 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v695 = v699 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v691 = v695 + "div.info {font-weight: bold}\n";
    var v684 = v691 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v675 = v684 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v666 = v675 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v655 = v666 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v643 = v655 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v631 = v643 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v602 = v631 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v562 = v602 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v499 = v562 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v383 = v499 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v383 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v707 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v706 = v707 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v704 = v706 + "div.title {display: none}\n";
    var v700 = v704 + "div.info {font-weight: bold}\n";
    var v696 = v700 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v692 = v696 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v685 = v692 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v676 = v685 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v667 = v676 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v656 = v667 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v644 = v656 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v632 = v644 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v603 = v632 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v563 = v603 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v500 = v563 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v384 = v500 + "img {display: none}\n";
    var v124 = v384 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v564 = "</head>\n" + '<body class="main">\n';
  var v501 = v564 + '<div class="title">';
  var v385 = v501 + title$$8;
  var v126 = v385 + " results</div>\n";
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
  var v386 = dnaSequence$$1.search(/./);
  var v127 = v386 != -1;
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
  var v387 = testArray[0];
  var v131 = v387 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v388 = testString.search(re$$2);
  var v132 = v388 == -1;
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
  var v389 = testNum.toFixed(3);
  var v135 = v389 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v390 = testNum.toPrecision(5);
  var v136 = v390 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v391 = theNumber$$1.search(/\d/);
  var v137 = v391 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v502 = emblFile.search(/ID/);
  var v392 = v502 == -1;
  var v504 = !v392;
  if(v504) {
    var v565 = emblFile.search(/AC/);
    var v503 = v565 == -1;
    var v567 = !v503;
    if(v567) {
      var v604 = emblFile.search(/DE/);
      var v566 = v604 == -1;
      var v606 = !v566;
      if(v606) {
        var v605 = emblFile.search(/SQ/);
        v566 = v605 == -1
      }
      v503 = v566
    }
    v392 = v503
  }
  var v138 = v392;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v393 = theNumber$$2.search(/\d/);
  var v139 = v393 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v394 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v394 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v395 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v395 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v396 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v396 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v505 = genBankFile.search(/LOCUS/);
  var v397 = v505 == -1;
  var v507 = !v397;
  if(v507) {
    var v568 = genBankFile.search(/DEFINITION/);
    var v506 = v568 == -1;
    var v570 = !v506;
    if(v570) {
      var v607 = genBankFile.search(/ACCESSION/);
      var v569 = v607 == -1;
      var v609 = !v569;
      if(v609) {
        var v608 = genBankFile.search(/ORIGIN/);
        v569 = v608 == -1
      }
      v506 = v569
    }
    v397 = v506
  }
  var v144 = v397;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v508 = genBankFile$$1.search(/LOCUS/);
  var v398 = v508 == -1;
  var v510 = !v398;
  if(v510) {
    var v571 = genBankFile$$1.search(/DEFINITION/);
    var v509 = v571 == -1;
    var v573 = !v509;
    if(v573) {
      var v610 = genBankFile$$1.search(/ACCESSION/);
      var v572 = v610 == -1;
      var v612 = !v572;
      if(v612) {
        var v611 = genBankFile$$1.search(/ORIGIN/);
        v572 = v611 == -1
      }
      v509 = v572
    }
    v398 = v509
  }
  var v145 = v398;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v399 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v399 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v511 = emblFile$$1.search(/ID/);
  var v400 = v511 == -1;
  var v513 = !v400;
  if(v513) {
    var v574 = emblFile$$1.search(/AC/);
    var v512 = v574 == -1;
    var v576 = !v512;
    if(v576) {
      var v613 = emblFile$$1.search(/DE/);
      var v575 = v613 == -1;
      var v615 = !v575;
      if(v615) {
        var v614 = emblFile$$1.search(/SQ/);
        v575 = v614 == -1
      }
      v512 = v575
    }
    v400 = v512
  }
  var v147 = v400;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v401 = emblFile$$1.search(/^FT/m);
  var v148 = v401 == -1;
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
    var v402 = basePerLine / groupSize;
    var v152 = j$$6 <= v402;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v403 = k + i$$5;
        var v150 = text$$10.charAt(v403);
        lineOfText = lineOfText + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v404 = basePerLine / groupSize;
      v152 = j$$6 <= v404
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
    var v405 = adjustment < 0;
    if(v405) {
      v405 = adjusted >= 0
    }
    var v156 = v405;
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
    var v406 = basePerLine$$2 / groupSize$$2;
    var v163 = j$$7 <= v406;
    for(;v163;) {
      var v159 = k$$1 < groupSize$$2;
      for(;v159;) {
        var v407 = i$$6 + k$$1;
        var v157 = v407 >= stopBase$$2;
        if(v157) {
          break
        }
        var v408 = k$$1 + i$$6;
        var v158 = text$$12.charAt(v408);
        lineOfText$$1 = lineOfText$$1 + v158;
        k$$1 = k$$1 + 1;
        v159 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v161 = numberPosition$$1 == "above";
      if(v161) {
        var v409 = adjustNumbering(i$$6, numberingAdjustment);
        var v160 = rightNum(v409, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v160
      }
      var v162 = i$$6 >= stopBase$$2;
      if(v162) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v410 = basePerLine$$2 / groupSize$$2;
      v163 = j$$7 <= v410
    }
    var v186 = numberPosition$$1 == "left";
    if(v186) {
      var v164 = outputWindow.document;
      var v577 = adjustNumbering(lineNum, numberingAdjustment);
      var v514 = rightNum(v577, "", 8, tabIn$$3);
      var v411 = v514 + lineOfText$$1;
      var v165 = v411 + "\n";
      JAMScript.call(v164.write, v164, [v165]);
      var v169 = strands$$1 == "two";
      if(v169) {
        var v166 = outputWindow.document;
        var v578 = adjustNumbering(lineNum, numberingAdjustment);
        var v515 = rightNum(v578, "", 8, tabIn$$3);
        var v516 = complement(lineOfText$$1);
        var v412 = v515 + v516;
        var v167 = v412 + "\n";
        JAMScript.call(v166.write, v166, [v167]);
        var v168 = outputWindow.document;
        JAMScript.call(v168.write, v168, ["\n"])
      }
    }else {
      var v185 = numberPosition$$1 == "right";
      if(v185) {
        var v170 = outputWindow.document;
        var v517 = adjustNumbering(i$$6, numberingAdjustment);
        var v413 = lineOfText$$1 + v517;
        var v171 = v413 + "\n";
        JAMScript.call(v170.write, v170, [v171]);
        var v175 = strands$$1 == "two";
        if(v175) {
          var v172 = outputWindow.document;
          var v518 = complement(lineOfText$$1);
          var v519 = adjustNumbering(i$$6, numberingAdjustment);
          var v414 = v518 + v519;
          var v173 = v414 + "\n";
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
            var v415 = complement(lineOfText$$1);
            var v181 = v415 + "\n";
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
    var v416 = basePerLine$$3 / groupSize$$3;
    var v194 = j$$8 <= v416;
    for(;v194;) {
      var v190 = k$$2 < groupSize$$3;
      for(;v190;) {
        var v417 = i$$7 + k$$2;
        var v188 = v417 >= stopBase$$3;
        if(v188) {
          break
        }
        var v418 = k$$2 + i$$7;
        var v189 = text$$13.charAt(v418);
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
      var v419 = basePerLine$$3 / groupSize$$3;
      v194 = j$$8 <= v419
    }
    var v205 = numberPosition$$2 == "left";
    if(v205) {
      var v195 = outputWindow.document;
      var v520 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v420 = v520 + lineOfText$$2;
      var v196 = v420 + "\n";
      JAMScript.call(v195.write, v195, [v196])
    }else {
      var v204 = numberPosition$$2 == "right";
      if(v204) {
        var v197 = outputWindow.document;
        var v421 = lineOfText$$2 + i$$7;
        var v198 = v421 + "\n";
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
  var v521 = sequence$$13.length;
  var v422 = v521 <= firstIndexToMutate;
  var v523 = !v422;
  if(v523) {
    var v522 = lastIndexToMutate < 0;
    var v579 = !v522;
    if(v579) {
      v522 = lastIndexToMutate <= firstIndexToMutate
    }
    v422 = v522
  }
  var v207 = v422;
  if(v207) {
    numMut = 0
  }
  var i$$8 = 0;
  var v215 = i$$8 < numMut;
  for(;v215;) {
    maxNum = sequence$$13.length;
    var v423 = Math.random();
    var v208 = v423 * maxNum;
    randNum = Math.floor(v208);
    var v424 = randNum < firstIndexToMutate;
    var v524 = !v424;
    if(v524) {
      v424 = randNum > lastIndexToMutate
    }
    var v209 = v424;
    if(v209) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v215 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v425 = Math.random();
      var v426 = components$$1.length;
      var v210 = v425 * v426;
      componentsIndex = Math.round(v210);
      var v427 = components$$1.length;
      var v211 = componentsIndex == v427;
      if(v211) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v428 = components$$1[componentsIndex]
      }
      var v212 = v428 != currentChar;
      if(v212) {
        needNewChar = false
      }
    }
    var v429 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v430 = components$$1[componentsIndex]
    }
    var v213 = v429 + v430;
    var v431 = randNum + 1;
    var v432 = sequence$$13.length;
    var v214 = sequence$$13.substring(v431, v432);
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
    var v433 = Math.random();
    var v434 = components$$2.length;
    var v218 = v433 * v434;
    tempNum$$1 = Math.floor(v218);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v435 = sequence$$14.length;
    var v221 = v435 == 60;
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
    var v580 = sequence$$15.length;
    var v525 = v580 - lookAhead;
    var v526 = sequence$$15.length;
    var v436 = sequence$$15.substring(v525, v526);
    var v226 = v436 + sequence$$15;
    var v227 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v226 + v227;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v229 = outputWindow.document;
  JAMScript.call(v229.write, v229, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v230 = outputWindow.document;
  var v581 = '<tr><td class="title" width="200px">' + "Site:";
  var v527 = v581 + '</td><td class="title">';
  var v437 = v527 + "Positions:";
  var v231 = v437 + "</td></tr>\n";
  JAMScript.call(v230.write, v230, [v231]);
  var i$$9 = 0;
  var v438 = arrayOfItems.length;
  var v247 = i$$9 < v438;
  for(;v247;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v439 = arrayOfItems[i$$9]
    }
    var v232 = v439.match(/\/.+\//);
    matchExp = v232 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v582 = arrayOfItems[i$$9]
    }
    var v528 = v582.match(/\)\D*\d+/);
    var v440 = v528.toString();
    var v233 = v440.replace(/\)\D*/, "");
    cutDistance = parseFloat(v233);
    var v239 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v239;) {
      var v234 = matchExp.lastIndex;
      matchPosition = v234 - cutDistance;
      var v441 = matchPosition >= lowerLimit;
      if(v441) {
        v441 = matchPosition < upperLimit
      }
      var v237 = v441;
      if(v237) {
        timesFound = timesFound + 1;
        var v235 = tempString$$1 + ", ";
        var v442 = matchPosition - shiftValue;
        var v236 = v442 + 1;
        tempString$$1 = v235 + v236
      }
      var v238 = matchExp;
      var v529 = matchExp.lastIndex;
      var v583 = RegExp.lastMatch;
      var v530 = v583.length;
      var v443 = v529 - v530;
      v238.lastIndex = v443 + 1;
      v239 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v444 = tempString$$1.search(/\d/);
    var v240 = v444 != -1;
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
    var v657 = '<tr><td class="' + backGroundClass;
    var v645 = v657 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v677 = arrayOfItems[i$$9]
    }
    var v668 = v677.match(/\([^\(]+\)/);
    var v658 = v668.toString();
    var v646 = v658.replace(/\(|\)/g, "");
    var v633 = v645 + v646;
    var v616 = v633 + '</td><td class="';
    var v584 = v616 + backGroundClass;
    var v531 = v584 + '">';
    var v445 = v531 + tempString$$1;
    var v246 = v445 + "</td></tr>\n";
    JAMScript.call(v245.write, v245, [v246]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v446 = arrayOfItems.length;
    v247 = i$$9 < v446
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
  var v634 = '<tr><td class="title">' + "Pattern:";
  var v617 = v634 + '</td><td class="title">';
  var v585 = v617 + "Times found:";
  var v532 = v585 + '</td><td class="title">';
  var v447 = v532 + "Percentage:";
  var v251 = v447 + "</td></tr>\n";
  JAMScript.call(v250.write, v250, [v251]);
  var i$$10 = 0;
  var v448 = arrayOfItems$$1.length;
  var v260 = i$$10 < v448;
  for(;v260;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v449 = arrayOfItems$$1[i$$10]
    }
    var v252 = v449.match(/\/[^\/]+\//);
    var matchExp$$1 = v252 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v450 = sequence$$16.search(matchExp$$1);
    var v254 = v450 != -1;
    if(v254) {
      var v253 = sequence$$16.match(matchExp$$1);
      tempNumber = v253.length
    }
    var percentage = 0;
    var v533 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v618 = arrayOfItems$$1[i$$10]
    }
    var v586 = v618.match(/\d+/);
    var v534 = parseFloat(v586);
    var v451 = v533 - v534;
    var v257 = v451 > 0;
    if(v257) {
      var v255 = 100 * tempNumber;
      var v452 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v587 = arrayOfItems$$1[i$$10]
      }
      var v535 = v587.match(/\d+/);
      var v453 = parseFloat(v535);
      var v256 = v452 - v453;
      percentage = v255 / v256
    }
    var v258 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v678 = arrayOfItems$$1[i$$10]
    }
    var v669 = v678.match(/\([^\(]+\)\b/);
    var v659 = v669.toString();
    var v647 = v659.replace(/\(|\)/g, "");
    var v635 = "<tr><td>" + v647;
    var v619 = v635 + "</td><td>";
    var v588 = v619 + tempNumber;
    var v536 = v588 + "</td><td>";
    var v537 = percentage.toFixed(2);
    var v454 = v536 + v537;
    var v259 = v454 + "</td></tr>\n";
    JAMScript.call(v258.write, v258, [v259]);
    i$$10 = i$$10 + 1;
    var v455 = arrayOfItems$$1.length;
    v260 = i$$10 < v455
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
  var v456 = sequence$$17.length;
  var v268 = v456 > 0;
  for(;v268;) {
    maxNum$$1 = sequence$$17.length;
    var v457 = Math.random();
    var v262 = v457 * maxNum$$1;
    randNum$$1 = Math.floor(v262);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v263 = randNum$$1 + 1;
    var v264 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v263, v264);
    sequence$$17 = tempString1 + tempString2;
    var v458 = tempSeq.length;
    var v267 = v458 == 60;
    if(v267) {
      var v265 = outputWindow.document;
      var v266 = tempSeq + "\n";
      JAMScript.call(v265.write, v265, [v266]);
      tempSeq = ""
    }
    var v459 = sequence$$17.length;
    v268 = v459 > 0
  }
  var v269 = outputWindow.document;
  var v270 = tempSeq + "\n";
  JAMScript.call(v269.write, v269, [v270]);
  return true
}
function dnaStats(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E5;
  var v460 = testScript();
  var v271 = v460 == false;
  if(v271) {
    return false
  }
  var v648 = theDocument.forms;
  var v636 = v648[0];
  var v620 = v636.elements;
  var v589 = v620[0];
  var v538 = checkFormElement(v589);
  var v461 = v538 == false;
  var v540 = !v461;
  if(v540) {
    var v660 = theDocument.forms;
    var v649 = v660[0];
    var v637 = v649.elements;
    var v621 = v637[0];
    var v590 = v621.value;
    var v539 = checkSequenceLength(v590, maxInput$$3);
    v461 = v539 == false
  }
  var v272 = v461;
  if(v272) {
    return false
  }
  var itemsToCheck = ["/g/ (g)1", "/a/ (a)1", "/t/ (t)1", "/c/ (c)1", "/n/ (n)1", "/u/ (u)1", "/r/ (r)1", "/y/ (y)1", "/s/ (s)1", "/w/ (w)1", "/k/ (k)1", "/m/ (m)1", "/b/ (b)1", "/d/ (d)1", "/h/ (h)1", "/v/ (v)1", "/g(?=g)/ (gg)2", "/g(?=a)/ (ga)2", "/g(?=t)/ (gt)2", "/g(?=c)/ (gc)2", "/g(?=n)/ (gn)2", "/a(?=g)/ (ag)2", "/a(?=a)/ (aa)2", "/a(?=t)/ (at)2", "/a(?=c)/ (ac)2", "/a(?=n)/ (an)2", "/t(?=g)/ (tg)2", "/t(?=a)/ (ta)2", "/t(?=t)/ (tt)2", "/t(?=c)/ (tc)2", "/t(?=n)/ (tn)2", "/c(?=g)/ (cg)2", 
  "/c(?=a)/ (ca)2", "/c(?=t)/ (ct)2", "/c(?=c)/ (cc)2", "/c(?=n)/ (cn)2", "/n(?=g)/ (ng)2", "/n(?=a)/ (na)2", "/n(?=t)/ (nt)2", "/n(?=c)/ (nc)2", "/n(?=n)/ (nn)2", "/g|c/ (g,c)1", "/a|t/ (a,t)1", "/r|y|s|w|k/ (r,y,s,w,k)1", "/b|h|d|v|n/ (b,h,d,v,n)1", "/r|y|s|w|k|m|b|d|h|v|n/ (r,y,s,w,k,m,b,d,h,v,n)1"];
  openWindow("DNA Stats");
  var v622 = theDocument.forms;
  var v591 = v622[0];
  var v541 = v591.elements;
  var v462 = v541[0];
  var v273 = v462.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v273);
  var i$$11 = 0;
  var v463 = arrayOfFasta$$1.length;
  var v279 = i$$11 < v463;
  for(;v279;) {
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
    writeSequenceStats(newDna, itemsToCheck);
    var v278 = outputWindow.document;
    JAMScript.call(v278.write, v278, ["<br />\n<br />\n"]);
    i$$11 = i$$11 + 1;
    var v464 = arrayOfFasta$$1.length;
    v279 = i$$11 < v464
  }
  closeWindow();
  return true
}
JAMScript.set(document, "onload", v2);
var v280 = document.getElementById("submitbtn");
JAMScript.set(v280, "onclick", v3);
var v281 = document.getElementById("clearbtn");
JAMScript.set(v281, "onclick", v4);

