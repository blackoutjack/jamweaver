function v4() {
  var v577 = document.forms;
  var v489 = v577[0];
  var v297 = v489.elements;
  var v5 = v297[0];
  v5.value = " ";
  var v578 = document.forms;
  var v490 = v578[0];
  var v298 = v490.elements;
  var v6 = v298[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    dnaPattern(document)
  }catch(e$$6) {
    var v7 = "The following error was encountered: " + e$$6;
    alert(v7)
  }
  return
}
function v2() {
  var v299 = document.main_form;
  var v8 = v299.main_submit;
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
  var v300 = arrayOfSequences.length;
  var v10 = v300 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v301 = arrayOfTitles.length;
  var v12 = i$$1 < v301;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v579 = arrayOfTitles[i$$1]
    }
    var v491 = v579.search(/\S/);
    var v302 = v491 == -1;
    var v493 = !v302;
    if(v493) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v636 = arrayOfSequences[i$$1]
      }
      var v580 = v636.search(/\S/);
      var v492 = v580 == -1;
      var v582 = !v492;
      if(v582) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v637 = arrayOfSequences[i$$1]
        }
        var v581 = v637.length;
        v492 = v581 != lengthOfAlign
      }
      v302 = v492
    }
    var v11 = v302;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v303 = arrayOfTitles.length;
    v12 = i$$1 < v303
  }
  return true
}
function checkCodonTable(codonTable) {
  var v494 = codonTable.search(/AmAcid/);
  var v304 = v494 == -1;
  var v496 = !v304;
  if(v496) {
    var v583 = codonTable.search(/Codon/);
    var v495 = v583 == -1;
    var v585 = !v495;
    if(v585) {
      var v638 = codonTable.search(/Number/);
      var v584 = v638 == -1;
      var v640 = !v584;
      if(v640) {
        var v671 = codonTable.search(/\/1000/);
        var v639 = v671 == -1;
        var v673 = !v639;
        if(v673) {
          var v672 = codonTable.search(/Fraction\s*\.\./);
          v639 = v672 == -1
        }
        v584 = v639
      }
      v495 = v584
    }
    v304 = v495
  }
  var v13 = v304;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v497 = formElement.value;
  var v305 = v497.search(/\S/);
  var v14 = v305 == -1;
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
  var v306 = arrayOfPatterns.length;
  var v17 = z$$2 < v306;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v498 = arrayOfPatterns[z$$2]
    }
    var v307 = v498.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v307 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v499 = arrayOfPatterns[z$$2]
    }
    var v308 = moreExpressionCheck(v499);
    var v16 = v308 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v309 = arrayOfPatterns.length;
    v17 = z$$2 < v309
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v310 = arrayOfPatterns.length;
  var v26 = j < v310;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v586 = arrayOfPatterns[j]
    }
    var v500 = v586.match(/\/.+\//);
    var v311 = v500 + "gi";
    if(JAMScript.isEval(eval)) {
      var v772 = eval("introspect(JAMScript.introspectors.processAll) { " + v311 + " }")
    }else {
      var v772 = JAMScript.call(eval, null, [v311])
    }
    v20[v21] = v772;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v501 = arrayOfPatterns[j]
    }
    var v312 = v501.match(/=[a-zA-Z\*]/);
    var v773 = v312.toString();
    v22[v23] = v773;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v313 = geneticCodeMatchResult[j]
    }
    var v774 = v313.replace(/=/g, "");
    v24[v25] = v774;
    j = j + 1;
    var v314 = arrayOfPatterns.length;
    v26 = j < v314
  }
  var i$$2 = 0;
  var v502 = testSequence.length;
  var v315 = v502 - 3;
  var v33 = i$$2 <= v315;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v316 = geneticCodeMatchExp.length;
    var v31 = j < v316;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v503 = geneticCodeMatchExp[j]
      }
      var v317 = codon.search(v503);
      var v30 = v317 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v318 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v318 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v319 = geneticCodeMatchExp.length;
      v31 = j < v319
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v504 = testSequence.length;
    var v320 = v504 - 3;
    v33 = i$$2 <= v320
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v321 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v321;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v505 = arrayOfPatterns$$1[z$$3]
    }
    var v322 = v505.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v322 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v323 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v323
  }
  var i$$3 = 0;
  var v324 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v324;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v506 = arrayOfPatterns$$1[i$$3]
    }
    var v325 = "[" + v506;
    var v36 = v325 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v326 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v326;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v507 = arrayOfPatterns$$1[j$$1]
      }
      var v327 = v507.search(re);
      var v37 = v327 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v328 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v328
    }
    i$$3 = i$$3 + 1;
    var v329 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v329
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v330 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v330;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v508 = arrayOfPatterns$$2[z$$4]
    }
    var v331 = v508.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v331 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v509 = arrayOfPatterns$$2[z$$4]
    }
    var v332 = moreExpressionCheck(v509);
    var v41 = v332 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v333 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v333
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v587 = getSequenceFromFasta(text$$7);
  var v510 = v587.replace(/[^A-Za-z]/g, "");
  var v334 = v510.length;
  var v44 = v334 > maxInput;
  if(v44) {
    var v335 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v335 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v336 = text$$8.length;
  var v46 = v336 > maxInput$$1;
  if(v46) {
    var v337 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v337 + " characters.";
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
  var v338 = alignArray.length;
  var v53 = v338 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v339 = alignArray.length;
  var v55 = i$$4 < v339;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v511 = alignArray[i$$4]
    }
    var v340 = v511.search(/[^\s]+\s/);
    var v54 = v340 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v341 = alignArray.length;
    v55 = i$$4 < v341
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
  var v58 = v342 != -1;
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
  var v343 = sequence$$2.length;
  var v59 = "&gt;results for " + v343;
  var stringToReturn = v59 + " residue sequence ";
  var v344 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v344 != -1;
  if(v61) {
    var v345 = stringToReturn + '"';
    var v60 = v345 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v346 = stringToReturn + ' starting "';
  var v347 = sequence$$2.substring(0, 10);
  var v62 = v346 + v347;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v348 = sequenceOne.length;
  var v63 = "Search results for " + v348;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v349 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v349 != -1;
  if(v65) {
    var v350 = stringToReturn$$1 + '"';
    var v64 = v350 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v351 = stringToReturn$$1 + ' starting "';
  var v352 = sequenceOne.substring(0, 10);
  var v66 = v351 + v352;
  stringToReturn$$1 = v66 + '"\n';
  var v353 = stringToReturn$$1 + "and ";
  var v354 = sequenceTwo.length;
  var v67 = v353 + v354;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v355 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v355 != -1;
  if(v69) {
    var v356 = stringToReturn$$1 + '"';
    var v68 = v356 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v357 = stringToReturn$$1 + ' starting "';
  var v358 = sequenceTwo.substring(0, 10);
  var v70 = v357 + v358;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v359 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v359;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v588 = arrayOfPatterns$$3[j$$2]
    }
    var v512 = v588.match(/\/.+\//);
    var v360 = v512 + "gi";
    if(JAMScript.isEval(eval)) {
      var v775 = eval("introspect(JAMScript.introspectors.processAll) { " + v360 + " }")
    }else {
      var v775 = JAMScript.call(eval, null, [v360])
    }
    v73[v74] = v775;
    j$$2 = j$$2 + 1;
    var v361 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v361
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v362 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v362;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v513 = arrayOfPatterns$$4[j$$3]
    }
    var v363 = v513.match(/=[a-zA-Z\*]/);
    var v776 = v363.toString();
    v77[v78] = v776;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v364 = geneticCodeMatchResult$$1[j$$3]
    }
    var v777 = v364.replace(/=/g, "");
    v79[v80] = v777;
    j$$3 = j$$3 + 1;
    var v365 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v365
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v366 = sequence$$3.length;
  var v82 = "Results for " + v366;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v367 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v367 != -1;
  if(v84) {
    var v368 = stringToReturn$$2 + '"';
    var v83 = v368 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v369 = stringToReturn$$2 + ' starting "';
  var v370 = sequence$$3.substring(0, 10);
  var v85 = v369 + v370;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v514 = "Results for " + topology;
  var v371 = v514 + " ";
  var v372 = sequence$$4.length;
  var v87 = v371 + v372;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v373 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v373 != -1;
  if(v89) {
    var v374 = stringToReturn$$3 + '"';
    var v88 = v374 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v375 = stringToReturn$$3 + ' starting "';
  var v376 = sequence$$4.substring(0, 10);
  var v90 = v375 + v376;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v377 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v377;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v378 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v378 != -1;
  if(v94) {
    var v379 = stringToReturn$$4 + '"';
    var v93 = v379 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v380 = stringToReturn$$4 + ' starting "';
  var v381 = sequenceOne$$1.substring(0, 10);
  var v95 = v380 + v381;
  stringToReturn$$4 = v95 + '"\n';
  var v382 = stringToReturn$$4 + "and ";
  var v383 = sequenceTwo$$1.length;
  var v96 = v382 + v383;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v384 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v384 != -1;
  if(v98) {
    var v385 = stringToReturn$$4 + '"';
    var v97 = v385 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v386 = stringToReturn$$4 + ' starting "';
  var v387 = sequenceTwo$$1.substring(0, 10);
  var v99 = v386 + v387;
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
    var v388 = Math.random();
    var v389 = components.length;
    var v101 = v388 * v389;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v390 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v390 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v391 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v391 != -1;
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
  var v515 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v392 = v515 != -1;
  var v517 = !v392;
  if(v517) {
    var v589 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v516 = v589 != -1;
    var v591 = !v516;
    if(v591) {
      var v641 = expressionToCheck.search(/\[\]/);
      var v590 = v641 != -1;
      var v643 = !v590;
      if(v643) {
        var v674 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v642 = v674 != -1;
        var v676 = !v642;
        if(v676) {
          var v690 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v675 = v690 != -1;
          var v692 = !v675;
          if(v692) {
            var v706 = expressionToCheck.search(/\|\|/);
            var v691 = v706 != -1;
            var v708 = !v691;
            if(v708) {
              var v720 = expressionToCheck.search(/\/\|/);
              var v707 = v720 != -1;
              var v722 = !v707;
              if(v722) {
                var v732 = expressionToCheck.search(/\|\//);
                var v721 = v732 != -1;
                var v734 = !v721;
                if(v734) {
                  var v743 = expressionToCheck.search(/\[.\]/);
                  var v733 = v743 != -1;
                  var v745 = !v733;
                  if(v745) {
                    var v750 = expressionToCheck.search(/\</);
                    var v744 = v750 != -1;
                    var v752 = !v744;
                    if(v752) {
                      var v751 = expressionToCheck.search(/\>/);
                      v744 = v751 != -1
                    }
                    v733 = v744
                  }
                  v721 = v733
                }
                v707 = v721
              }
              v691 = v707
            }
            v675 = v691
          }
          v642 = v675
        }
        v590 = v642
      }
      v516 = v590
    }
    v392 = v516
  }
  var v106 = v392;
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
    var v778 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v778[2], v778[1], v778[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v592 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v518 = v592 + "<head>\n";
  var v393 = v518 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v393 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v765 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v761 = v765 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v757 = v761 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v753 = v757 + "div.info {font-weight: bold}\n";
    var v746 = v753 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v735 = v746 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v723 = v735 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v709 = v723 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v693 = v709 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v677 = v693 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v644 = v677 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v593 = v644 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v519 = v593 + "td.many {color: #000000}\n";
    var v394 = v519 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v394 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v769 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v766 = v769 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v762 = v766 + "div.title {display: none}\n";
    var v758 = v762 + "div.info {font-weight: bold}\n";
    var v754 = v758 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v747 = v754 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v736 = v747 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v724 = v736 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v710 = v724 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v694 = v710 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v678 = v694 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v645 = v678 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v594 = v645 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v520 = v594 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v395 = v520 + "img {display: none}\n";
    var v116 = v395 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v595 = "</head>\n" + '<body class="main">\n';
  var v521 = v595 + '<div class="title">';
  var v396 = v521 + title$$7;
  var v118 = v396 + " results</div>\n";
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
    var v779 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v779[2], v779[1], v779[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v596 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v522 = v596 + "<head>\n";
  var v397 = v522 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v397 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v767 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v763 = v767 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v759 = v763 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v755 = v759 + "div.info {font-weight: bold}\n";
    var v748 = v755 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v737 = v748 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v725 = v737 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v711 = v725 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v695 = v711 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v679 = v695 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v646 = v679 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v597 = v646 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v523 = v597 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v398 = v523 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v398 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v771 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v770 = v771 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v768 = v770 + "div.title {display: none}\n";
    var v764 = v768 + "div.info {font-weight: bold}\n";
    var v760 = v764 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v756 = v760 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v749 = v756 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v738 = v749 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v726 = v738 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v712 = v726 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v696 = v712 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v680 = v696 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v647 = v680 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v598 = v647 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v524 = v598 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v399 = v524 + "img {display: none}\n";
    var v124 = v399 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v599 = "</head>\n" + '<body class="main">\n';
  var v525 = v599 + '<div class="title">';
  var v400 = v525 + title$$9;
  var v126 = v400 + " results</div>\n";
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
  var v401 = dnaSequence$$1.search(/./);
  var v127 = v401 != -1;
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
  var v402 = testArray[0];
  var v131 = v402 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v403 = testString.search(re$$2);
  var v132 = v403 == -1;
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
  var v404 = testNum.toFixed(3);
  var v135 = v404 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v405 = testNum.toPrecision(5);
  var v136 = v405 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v406 = theNumber$$1.search(/\d/);
  var v137 = v406 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v526 = emblFile.search(/ID/);
  var v407 = v526 == -1;
  var v528 = !v407;
  if(v528) {
    var v600 = emblFile.search(/AC/);
    var v527 = v600 == -1;
    var v602 = !v527;
    if(v602) {
      var v648 = emblFile.search(/DE/);
      var v601 = v648 == -1;
      var v650 = !v601;
      if(v650) {
        var v649 = emblFile.search(/SQ/);
        v601 = v649 == -1
      }
      v527 = v601
    }
    v407 = v527
  }
  var v138 = v407;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v408 = theNumber$$2.search(/\d/);
  var v139 = v408 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v409 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v409 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v410 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v410 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v411 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v411 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v529 = genBankFile.search(/LOCUS/);
  var v412 = v529 == -1;
  var v531 = !v412;
  if(v531) {
    var v603 = genBankFile.search(/DEFINITION/);
    var v530 = v603 == -1;
    var v605 = !v530;
    if(v605) {
      var v651 = genBankFile.search(/ACCESSION/);
      var v604 = v651 == -1;
      var v653 = !v604;
      if(v653) {
        var v652 = genBankFile.search(/ORIGIN/);
        v604 = v652 == -1
      }
      v530 = v604
    }
    v412 = v530
  }
  var v144 = v412;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v532 = genBankFile$$1.search(/LOCUS/);
  var v413 = v532 == -1;
  var v534 = !v413;
  if(v534) {
    var v606 = genBankFile$$1.search(/DEFINITION/);
    var v533 = v606 == -1;
    var v608 = !v533;
    if(v608) {
      var v654 = genBankFile$$1.search(/ACCESSION/);
      var v607 = v654 == -1;
      var v656 = !v607;
      if(v656) {
        var v655 = genBankFile$$1.search(/ORIGIN/);
        v607 = v655 == -1
      }
      v533 = v607
    }
    v413 = v533
  }
  var v145 = v413;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v414 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v414 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v535 = emblFile$$1.search(/ID/);
  var v415 = v535 == -1;
  var v537 = !v415;
  if(v537) {
    var v609 = emblFile$$1.search(/AC/);
    var v536 = v609 == -1;
    var v611 = !v536;
    if(v611) {
      var v657 = emblFile$$1.search(/DE/);
      var v610 = v657 == -1;
      var v659 = !v610;
      if(v659) {
        var v658 = emblFile$$1.search(/SQ/);
        v610 = v658 == -1
      }
      v536 = v610
    }
    v415 = v536
  }
  var v147 = v415;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v416 = emblFile$$1.search(/^FT/m);
  var v148 = v416 == -1;
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
    var v417 = basePerLine / groupSize;
    var v152 = j$$6 <= v417;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v418 = k + i$$5;
        var v150 = text$$10.charAt(v418);
        lineOfText = lineOfText + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v419 = basePerLine / groupSize;
      v152 = j$$6 <= v419
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
    var v420 = adjustment < 0;
    if(v420) {
      v420 = adjusted >= 0
    }
    var v156 = v420;
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
    var v421 = basePerLine$$2 / groupSize$$2;
    var v163 = j$$7 <= v421;
    for(;v163;) {
      var v159 = k$$1 < groupSize$$2;
      for(;v159;) {
        var v422 = i$$6 + k$$1;
        var v157 = v422 >= stopBase$$2;
        if(v157) {
          break
        }
        var v423 = k$$1 + i$$6;
        var v158 = text$$12.charAt(v423);
        lineOfText$$1 = lineOfText$$1 + v158;
        k$$1 = k$$1 + 1;
        v159 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v161 = numberPosition$$1 == "above";
      if(v161) {
        var v424 = adjustNumbering(i$$6, numberingAdjustment);
        var v160 = rightNum(v424, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v160
      }
      var v162 = i$$6 >= stopBase$$2;
      if(v162) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v425 = basePerLine$$2 / groupSize$$2;
      v163 = j$$7 <= v425
    }
    var v186 = numberPosition$$1 == "left";
    if(v186) {
      var v164 = outputWindow.document;
      var v612 = adjustNumbering(lineNum, numberingAdjustment);
      var v538 = rightNum(v612, "", 8, tabIn$$3);
      var v426 = v538 + lineOfText$$1;
      var v165 = v426 + "\n";
      JAMScript.call(v164.write, v164, [v165]);
      var v169 = strands$$1 == "two";
      if(v169) {
        var v166 = outputWindow.document;
        var v613 = adjustNumbering(lineNum, numberingAdjustment);
        var v539 = rightNum(v613, "", 8, tabIn$$3);
        var v540 = complement(lineOfText$$1);
        var v427 = v539 + v540;
        var v167 = v427 + "\n";
        JAMScript.call(v166.write, v166, [v167]);
        var v168 = outputWindow.document;
        JAMScript.call(v168.write, v168, ["\n"])
      }
    }else {
      var v185 = numberPosition$$1 == "right";
      if(v185) {
        var v170 = outputWindow.document;
        var v541 = adjustNumbering(i$$6, numberingAdjustment);
        var v428 = lineOfText$$1 + v541;
        var v171 = v428 + "\n";
        JAMScript.call(v170.write, v170, [v171]);
        var v175 = strands$$1 == "two";
        if(v175) {
          var v172 = outputWindow.document;
          var v542 = complement(lineOfText$$1);
          var v543 = adjustNumbering(i$$6, numberingAdjustment);
          var v429 = v542 + v543;
          var v173 = v429 + "\n";
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
            var v430 = complement(lineOfText$$1);
            var v181 = v430 + "\n";
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
    var v431 = basePerLine$$3 / groupSize$$3;
    var v194 = j$$8 <= v431;
    for(;v194;) {
      var v190 = k$$2 < groupSize$$3;
      for(;v190;) {
        var v432 = i$$7 + k$$2;
        var v188 = v432 >= stopBase$$3;
        if(v188) {
          break
        }
        var v433 = k$$2 + i$$7;
        var v189 = text$$13.charAt(v433);
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
      var v434 = basePerLine$$3 / groupSize$$3;
      v194 = j$$8 <= v434
    }
    var v205 = numberPosition$$2 == "left";
    if(v205) {
      var v195 = outputWindow.document;
      var v544 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v435 = v544 + lineOfText$$2;
      var v196 = v435 + "\n";
      JAMScript.call(v195.write, v195, [v196])
    }else {
      var v204 = numberPosition$$2 == "right";
      if(v204) {
        var v197 = outputWindow.document;
        var v436 = lineOfText$$2 + i$$7;
        var v198 = v436 + "\n";
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
  var v545 = sequence$$13.length;
  var v437 = v545 <= firstIndexToMutate;
  var v547 = !v437;
  if(v547) {
    var v546 = lastIndexToMutate < 0;
    var v614 = !v546;
    if(v614) {
      v546 = lastIndexToMutate <= firstIndexToMutate
    }
    v437 = v546
  }
  var v207 = v437;
  if(v207) {
    numMut = 0
  }
  var i$$8 = 0;
  var v215 = i$$8 < numMut;
  for(;v215;) {
    maxNum = sequence$$13.length;
    var v438 = Math.random();
    var v208 = v438 * maxNum;
    randNum = Math.floor(v208);
    var v439 = randNum < firstIndexToMutate;
    var v548 = !v439;
    if(v548) {
      v439 = randNum > lastIndexToMutate
    }
    var v209 = v439;
    if(v209) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v215 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v440 = Math.random();
      var v441 = components$$1.length;
      var v210 = v440 * v441;
      componentsIndex = Math.round(v210);
      var v442 = components$$1.length;
      var v211 = componentsIndex == v442;
      if(v211) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v443 = components$$1[componentsIndex]
      }
      var v212 = v443 != currentChar;
      if(v212) {
        needNewChar = false
      }
    }
    var v444 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v445 = components$$1[componentsIndex]
    }
    var v213 = v444 + v445;
    var v446 = randNum + 1;
    var v447 = sequence$$13.length;
    var v214 = sequence$$13.substring(v446, v447);
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
    var v448 = Math.random();
    var v449 = components$$2.length;
    var v218 = v448 * v449;
    tempNum$$1 = Math.floor(v218);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v450 = sequence$$14.length;
    var v221 = v450 == 60;
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
    var v615 = sequence$$15.length;
    var v549 = v615 - lookAhead;
    var v550 = sequence$$15.length;
    var v451 = sequence$$15.substring(v549, v550);
    var v226 = v451 + sequence$$15;
    var v227 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v226 + v227;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v229 = outputWindow.document;
  JAMScript.call(v229.write, v229, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v230 = outputWindow.document;
  var v616 = '<tr><td class="title" width="200px">' + "Site:";
  var v551 = v616 + '</td><td class="title">';
  var v452 = v551 + "Positions:";
  var v231 = v452 + "</td></tr>\n";
  JAMScript.call(v230.write, v230, [v231]);
  var i$$9 = 0;
  var v453 = arrayOfItems.length;
  var v247 = i$$9 < v453;
  for(;v247;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v454 = arrayOfItems[i$$9]
    }
    var v232 = v454.match(/\/.+\//);
    matchExp = v232 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v617 = arrayOfItems[i$$9]
    }
    var v552 = v617.match(/\)\D*\d+/);
    var v455 = v552.toString();
    var v233 = v455.replace(/\)\D*/, "");
    cutDistance = parseFloat(v233);
    var v239 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v239;) {
      var v234 = matchExp.lastIndex;
      matchPosition = v234 - cutDistance;
      var v456 = matchPosition >= lowerLimit;
      if(v456) {
        v456 = matchPosition < upperLimit
      }
      var v237 = v456;
      if(v237) {
        timesFound = timesFound + 1;
        var v235 = tempString$$1 + ", ";
        var v457 = matchPosition - shiftValue;
        var v236 = v457 + 1;
        tempString$$1 = v235 + v236
      }
      var v238 = matchExp;
      var v553 = matchExp.lastIndex;
      var v618 = RegExp.lastMatch;
      var v554 = v618.length;
      var v458 = v553 - v554;
      v238.lastIndex = v458 + 1;
      v239 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v459 = tempString$$1.search(/\d/);
    var v240 = v459 != -1;
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
    var v713 = '<tr><td class="' + backGroundClass;
    var v697 = v713 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v739 = arrayOfItems[i$$9]
    }
    var v727 = v739.match(/\([^\(]+\)/);
    var v714 = v727.toString();
    var v698 = v714.replace(/\(|\)/g, "");
    var v681 = v697 + v698;
    var v660 = v681 + '</td><td class="';
    var v619 = v660 + backGroundClass;
    var v555 = v619 + '">';
    var v460 = v555 + tempString$$1;
    var v246 = v460 + "</td></tr>\n";
    JAMScript.call(v245.write, v245, [v246]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v461 = arrayOfItems.length;
    v247 = i$$9 < v461
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
  var v682 = '<tr><td class="title">' + "Pattern:";
  var v661 = v682 + '</td><td class="title">';
  var v620 = v661 + "Times found:";
  var v556 = v620 + '</td><td class="title">';
  var v462 = v556 + "Percentage:";
  var v251 = v462 + "</td></tr>\n";
  JAMScript.call(v250.write, v250, [v251]);
  var i$$10 = 0;
  var v463 = arrayOfItems$$1.length;
  var v260 = i$$10 < v463;
  for(;v260;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v464 = arrayOfItems$$1[i$$10]
    }
    var v252 = v464.match(/\/[^\/]+\//);
    var matchExp$$1 = v252 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v465 = sequence$$16.search(matchExp$$1);
    var v254 = v465 != -1;
    if(v254) {
      var v253 = sequence$$16.match(matchExp$$1);
      tempNumber = v253.length
    }
    var percentage = 0;
    var v557 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v662 = arrayOfItems$$1[i$$10]
    }
    var v621 = v662.match(/\d+/);
    var v558 = parseFloat(v621);
    var v466 = v557 - v558;
    var v257 = v466 > 0;
    if(v257) {
      var v255 = 100 * tempNumber;
      var v467 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v622 = arrayOfItems$$1[i$$10]
      }
      var v559 = v622.match(/\d+/);
      var v468 = parseFloat(v559);
      var v256 = v467 - v468;
      percentage = v255 / v256
    }
    var v258 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v740 = arrayOfItems$$1[i$$10]
    }
    var v728 = v740.match(/\([^\(]+\)\b/);
    var v715 = v728.toString();
    var v699 = v715.replace(/\(|\)/g, "");
    var v683 = "<tr><td>" + v699;
    var v663 = v683 + "</td><td>";
    var v623 = v663 + tempNumber;
    var v560 = v623 + "</td><td>";
    var v561 = percentage.toFixed(2);
    var v469 = v560 + v561;
    var v259 = v469 + "</td></tr>\n";
    JAMScript.call(v258.write, v258, [v259]);
    i$$10 = i$$10 + 1;
    var v470 = arrayOfItems$$1.length;
    v260 = i$$10 < v470
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
  var v471 = sequence$$17.length;
  var v268 = v471 > 0;
  for(;v268;) {
    maxNum$$1 = sequence$$17.length;
    var v472 = Math.random();
    var v262 = v472 * maxNum$$1;
    randNum$$1 = Math.floor(v262);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v263 = randNum$$1 + 1;
    var v264 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v263, v264);
    sequence$$17 = tempString1 + tempString2;
    var v473 = tempSeq.length;
    var v267 = v473 == 60;
    if(v267) {
      var v265 = outputWindow.document;
      var v266 = tempSeq + "\n";
      JAMScript.call(v265.write, v265, [v266]);
      tempSeq = ""
    }
    var v474 = sequence$$17.length;
    v268 = v474 > 0
  }
  var v269 = outputWindow.document;
  var v270 = tempSeq + "\n";
  JAMScript.call(v269.write, v269, [v270]);
  return true
}
function dnaPattern(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matches = new Array;
  var v475 = testScript();
  var v271 = v475 == false;
  if(v271) {
    return false
  }
  var v700 = theDocument.forms;
  var v684 = v700[0];
  var v664 = v684.elements;
  var v624 = v664[0];
  var v562 = checkFormElement(v624);
  var v476 = v562 == false;
  var v564 = !v476;
  if(v564) {
    var v729 = theDocument.forms;
    var v716 = v729[0];
    var v701 = v716.elements;
    var v685 = v701[0];
    var v665 = v685.value;
    var v625 = checkSequenceLength(v665, maxInput$$3);
    var v563 = v625 == false;
    var v627 = !v563;
    if(v627) {
      var v717 = theDocument.forms;
      var v702 = v717[0];
      var v686 = v702.elements;
      var v666 = v686[1];
      var v626 = checkFormElement(v666);
      v563 = v626 == false
    }
    v476 = v563
  }
  var v272 = v476;
  if(v272) {
    return false
  }
  var v703 = theDocument.forms;
  var v687 = v703[0];
  var v667 = v687.elements;
  var v628 = v667[1];
  var v565 = v628.value;
  var v477 = v565.replace(/\//g, "");
  var v273 = "/" + v477;
  var re$$3 = v273 + "/gi";
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
  openWindow("DNA Pattern Find");
  openPre();
  var v668 = theDocument.forms;
  var v629 = v668[0];
  var v566 = v629.elements;
  var v478 = v566[0];
  var v274 = v478.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v274);
  var i$$11 = 0;
  var v479 = arrayOfFasta$$1.length;
  var v280 = i$$11 < v479;
  for(;v280;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v275 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v275);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v276 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v276);
    newDna = removeNonDna(newDna);
    var v277 = outputWindow.document;
    var v278 = getInfoFromTitleAndSequence(title, newDna);
    JAMScript.call(v277.write, v277, [v278]);
    writeDnaPattern(newDna, re$$3);
    var v279 = outputWindow.document;
    JAMScript.call(v279.write, v279, ["\n\n"]);
    i$$11 = i$$11 + 1;
    var v480 = arrayOfFasta$$1.length;
    v280 = i$$11 < v480
  }
  closePre();
  closeWindow();
  return true
}
function writeDnaPattern(dnaSequence$$3, re$$4) {
  var matchArray$$2;
  var matchCount = 0;
  var length$$11 = dnaSequence$$3.length;
  var simplePattern = re$$4.toString();
  simplePattern = simplePattern.replace(/\/gi$|\/ig$|^\//gi, "");
  var v285 = matchArray$$2 = re$$4.exec(dnaSequence$$3);
  for(;v285;) {
    matchCount = matchCount + 1;
    var match_end = re$$4.lastIndex;
    var v567 = RegExp.lastMatch;
    var v481 = v567.length;
    var v281 = match_end - v481;
    var match_start = v281 + 1;
    var v282 = outputWindow.document;
    var v741 = "&gt;match number " + matchCount;
    var v730 = v741 + ' to "';
    var v718 = v730 + simplePattern;
    var v704 = v718 + '" start=';
    var v688 = v704 + match_start;
    var v669 = v688 + " end=";
    var v630 = v669 + match_end;
    var v568 = v630 + " on the direct strand\n";
    var v631 = matchArray$$2[0];
    var v569 = addReturns(v631);
    var v482 = v568 + v569;
    var v283 = v482 + "\n\n";
    JAMScript.call(v282.write, v282, [v283]);
    var v284 = re$$4;
    var v570 = re$$4.lastIndex;
    var v632 = RegExp.lastMatch;
    var v571 = v632.length;
    var v483 = v570 - v571;
    v284.lastIndex = v483 + 1;
    v285 = matchArray$$2 = re$$4.exec(dnaSequence$$3)
  }
  re$$4.lastIndex = 0;
  var v286 = complement(dnaSequence$$3);
  dnaSequence$$3 = reverse(v286);
  var v292 = matchArray$$2 = re$$4.exec(dnaSequence$$3);
  for(;v292;) {
    matchCount = matchCount + 1;
    var v484 = re$$4.lastIndex;
    var v287 = length$$11 - v484;
    match_start = v287 + 1;
    var v572 = RegExp.lastMatch;
    var v485 = v572.length;
    var v288 = match_start + v485;
    match_end = v288 - 1;
    var v289 = outputWindow.document;
    var v742 = "&gt;match number " + matchCount;
    var v731 = v742 + ' to "';
    var v719 = v731 + simplePattern;
    var v705 = v719 + '" start=';
    var v689 = v705 + match_start;
    var v670 = v689 + " end=";
    var v633 = v670 + match_end;
    var v573 = v633 + " on the reverse strand\n";
    var v634 = matchArray$$2[0];
    var v574 = addReturns(v634);
    var v486 = v573 + v574;
    var v290 = v486 + "\n\n";
    JAMScript.call(v289.write, v289, [v290]);
    var v291 = re$$4;
    var v575 = re$$4.lastIndex;
    var v635 = RegExp.lastMatch;
    var v576 = v635.length;
    var v487 = v575 - v576;
    v291.lastIndex = v487 + 1;
    v292 = matchArray$$2 = re$$4.exec(dnaSequence$$3)
  }
  var v488 = matchCount > 0;
  var v294 = !v488;
  if(v294) {
    var v293 = outputWindow.document;
    JAMScript.call(v293.write, v293, ["no matches found for this sequence.\n\n"])
  }
  return
}
JAMScript.set(document, "onload", v2);
var v295 = document.getElementById("submitbtn");
JAMScript.set(v295, "onclick", v3);
var v296 = document.getElementById("clearbtn");
JAMScript.set(v296, "onclick", v4);

