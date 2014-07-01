function v4() {
  var v713 = document.forms;
  var v580 = v713[0];
  var v334 = v580.elements;
  var v5 = v334[0];
  v5.value = " ";
  var v714 = document.forms;
  var v581 = v714[0];
  var v335 = v581.elements;
  var v6 = v335[1];
  v6.value = " ";
  var v715 = document.forms;
  var v582 = v715[0];
  var v336 = v582.elements;
  var v7 = v336[2];
  v7.value = " ";
  var v716 = document.forms;
  var v583 = v716[0];
  var v337 = v583.elements;
  var v8 = v337[3];
  v8.value = " ";
  var v717 = document.forms;
  var v584 = v717[0];
  var v338 = v584.elements;
  var v9 = v338[4];
  v9.value = " ";
  return
}
function v3() {
  try {
    pcrProducts(document)
  }catch(e$$7) {
    var v10 = "The following error was encountered: " + e$$7;
    alert(v10)
  }
  return
}
function v2() {
  var v339 = document.main_form;
  var v11 = v339.main_submit;
  v11.focus();
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
  var v12 = arrayOfSequences[0];
  var lengthOfAlign = v12.length;
  var v340 = arrayOfSequences.length;
  var v13 = v340 < 2;
  if(v13) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v341 = arrayOfTitles.length;
  var v15 = i$$1 < v341;
  for(;v15;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v718 = arrayOfTitles[i$$1]
    }
    var v585 = v718.search(/\S/);
    var v342 = v585 == -1;
    var v587 = !v342;
    if(v587) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v808 = arrayOfSequences[i$$1]
      }
      var v719 = v808.search(/\S/);
      var v586 = v719 == -1;
      var v721 = !v586;
      if(v721) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v809 = arrayOfSequences[i$$1]
        }
        var v720 = v809.length;
        v586 = v720 != lengthOfAlign
      }
      v342 = v586
    }
    var v14 = v342;
    if(v14) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v343 = arrayOfTitles.length;
    v15 = i$$1 < v343
  }
  return true
}
function checkCodonTable(codonTable) {
  var v588 = codonTable.search(/AmAcid/);
  var v344 = v588 == -1;
  var v590 = !v344;
  if(v590) {
    var v722 = codonTable.search(/Codon/);
    var v589 = v722 == -1;
    var v724 = !v589;
    if(v724) {
      var v810 = codonTable.search(/Number/);
      var v723 = v810 == -1;
      var v812 = !v723;
      if(v812) {
        var v880 = codonTable.search(/\/1000/);
        var v811 = v880 == -1;
        var v882 = !v811;
        if(v882) {
          var v881 = codonTable.search(/Fraction\s*\.\./);
          v811 = v881 == -1
        }
        v723 = v811
      }
      v589 = v723
    }
    v344 = v589
  }
  var v16 = v344;
  if(v16) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v591 = formElement.value;
  var v345 = v591.search(/\S/);
  var v17 = v345 == -1;
  if(v17) {
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
  var v346 = arrayOfPatterns.length;
  var v20 = z$$2 < v346;
  for(;v20;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v592 = arrayOfPatterns[z$$2]
    }
    var v347 = v592.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v18 = v347 == -1;
    if(v18) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v593 = arrayOfPatterns[z$$2]
    }
    var v348 = moreExpressionCheck(v593);
    var v19 = v348 == false;
    if(v19) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v349 = arrayOfPatterns.length;
    v20 = z$$2 < v349
  }
  var v21 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v21);
  var v22 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v22);
  var j = 0;
  var v350 = arrayOfPatterns.length;
  var v29 = j < v350;
  for(;v29;) {
    var v23 = geneticCodeMatchExp;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v725 = arrayOfPatterns[j]
    }
    var v594 = v725.match(/\/.+\//);
    var v351 = v594 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1047 = eval("introspect(JAMScript.introspectors.processAll) { " + v351 + " }")
    }else {
      var v1047 = JAMScript.call(eval, null, [v351])
    }
    v23[v24] = v1047;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v595 = arrayOfPatterns[j]
    }
    var v352 = v595.match(/=[a-zA-Z\*]/);
    var v1048 = v352.toString();
    v25[v26] = v1048;
    var v27 = geneticCodeMatchResult;
    var v28 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v353 = geneticCodeMatchResult[j]
    }
    var v1049 = v353.replace(/=/g, "");
    v27[v28] = v1049;
    j = j + 1;
    var v354 = arrayOfPatterns.length;
    v29 = j < v354
  }
  var i$$2 = 0;
  var v596 = testSequence.length;
  var v355 = v596 - 3;
  var v36 = i$$2 <= v355;
  for(;v36;) {
    var v30 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v30);
    j = 0;
    var v356 = geneticCodeMatchExp.length;
    var v34 = j < v356;
    for(;v34;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v597 = geneticCodeMatchExp[j]
      }
      var v357 = codon.search(v597);
      var v33 = v357 != -1;
      if(v33) {
        var v32 = oneMatch == true;
        if(v32) {
          var v358 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v31 = v358 + ".";
          alert(v31);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v359 = geneticCodeMatchExp.length;
      v34 = j < v359
    }
    var v35 = oneMatch == false;
    if(v35) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v598 = testSequence.length;
    var v360 = v598 - 3;
    v36 = i$$2 <= v360
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v361 = arrayOfPatterns$$1.length;
  var v38 = z$$3 < v361;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v599 = arrayOfPatterns$$1[z$$3]
    }
    var v362 = v599.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v37 = v362 != -1;
    if(v37) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v363 = arrayOfPatterns$$1.length;
    v38 = z$$3 < v363
  }
  var i$$3 = 0;
  var v364 = arrayOfPatterns$$1.length;
  var v42 = i$$3 < v364;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v600 = arrayOfPatterns$$1[i$$3]
    }
    var v365 = "[" + v600;
    var v39 = v365 + "]";
    var re = new RegExp(v39, "gi");
    var j$$1 = i$$3 + 1;
    var v366 = arrayOfPatterns$$1.length;
    var v41 = j$$1 < v366;
    for(;v41;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v601 = arrayOfPatterns$$1[j$$1]
      }
      var v367 = v601.search(re);
      var v40 = v367 != -1;
      if(v40) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v368 = arrayOfPatterns$$1.length;
      v41 = j$$1 < v368
    }
    i$$3 = i$$3 + 1;
    var v369 = arrayOfPatterns$$1.length;
    v42 = i$$3 < v369
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v370 = arrayOfPatterns$$2.length;
  var v45 = z$$4 < v370;
  for(;v45;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v602 = arrayOfPatterns$$2[z$$4]
    }
    var v371 = v602.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v43 = v371 == -1;
    if(v43) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v603 = arrayOfPatterns$$2[z$$4]
    }
    var v372 = moreExpressionCheck(v603);
    var v44 = v372 == false;
    if(v44) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v373 = arrayOfPatterns$$2.length;
    v45 = z$$4 < v373
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v726 = getSequenceFromFasta(text$$7);
  var v604 = v726.replace(/[^A-Za-z]/g, "");
  var v374 = v604.length;
  var v47 = v374 > maxInput;
  if(v47) {
    var v375 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v46 = v375 + " characters.";
    alert(v46);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v376 = text$$8.length;
  var v49 = v376 > maxInput$$1;
  if(v49) {
    var v377 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v48 = v377 + " characters.";
    alert(v48);
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
  var v50 = outputWindow.document;
  JAMScript.call(v50.write, v50, ["</form>"]);
  return true
}
function closePre() {
  var v51 = outputWindow.document;
  JAMScript.call(v51.write, v51, ["</div>"]);
  var v52 = outputWindow.document;
  JAMScript.call(v52.write, v52, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v53 = outputWindow.document;
  JAMScript.call(v53.write, v53, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v54 = outputWindow.document;
  JAMScript.call(v54.write, v54, ["</body>\n</html>\n"]);
  outputWindow.status = "Done.";
  var v55 = outputWindow.document;
  v55.close();
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
  var v378 = alignArray.length;
  var v56 = v378 < 3;
  if(v56) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v379 = alignArray.length;
  var v58 = i$$4 < v379;
  for(;v58;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v605 = alignArray[i$$4]
    }
    var v380 = v605.search(/[^\s]+\s/);
    var v57 = v380 == -1;
    if(v57) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v381 = alignArray.length;
    v58 = i$$4 < v381
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
  var v382 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v61 = v382 != -1;
  if(v61) {
    var v60 = matchArray = re$$1.exec(sequenceData);
    for(;v60;) {
      var v59 = matchArray[0];
      arrayOfFasta.push(v59);
      v60 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v383 = sequence$$2.length;
  var v62 = "&gt;results for " + v383;
  var stringToReturn = v62 + " residue sequence ";
  var v384 = fastaSequenceTitle.search(/[^\s]/);
  var v64 = v384 != -1;
  if(v64) {
    var v385 = stringToReturn + '"';
    var v63 = v385 + fastaSequenceTitle;
    stringToReturn = v63 + '"'
  }
  var v386 = stringToReturn + ' starting "';
  var v387 = sequence$$2.substring(0, 10);
  var v65 = v386 + v387;
  stringToReturn = v65 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v388 = sequenceOne.length;
  var v66 = "Search results for " + v388;
  var stringToReturn$$1 = v66 + " residue sequence ";
  var v389 = fastaSequenceTitleOne.search(/[^\s]/);
  var v68 = v389 != -1;
  if(v68) {
    var v390 = stringToReturn$$1 + '"';
    var v67 = v390 + fastaSequenceTitleOne;
    stringToReturn$$1 = v67 + '"'
  }
  var v391 = stringToReturn$$1 + ' starting "';
  var v392 = sequenceOne.substring(0, 10);
  var v69 = v391 + v392;
  stringToReturn$$1 = v69 + '"\n';
  var v393 = stringToReturn$$1 + "and ";
  var v394 = sequenceTwo.length;
  var v70 = v393 + v394;
  stringToReturn$$1 = v70 + " residue sequence ";
  var v395 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v72 = v395 != -1;
  if(v72) {
    var v396 = stringToReturn$$1 + '"';
    var v71 = v396 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v71 + '"'
  }
  var v397 = stringToReturn$$1 + ' starting "';
  var v398 = sequenceTwo.substring(0, 10);
  var v73 = v397 + v398;
  stringToReturn$$1 = v73 + '"';
  var v74 = '<div class="info">' + stringToReturn$$1;
  return v74 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v75 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v75);
  var j$$2 = 0;
  var v399 = arrayOfPatterns$$3.length;
  var v78 = j$$2 < v399;
  for(;v78;) {
    var v76 = geneticCodeMatchExp$$1;
    var v77 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v727 = arrayOfPatterns$$3[j$$2]
    }
    var v606 = v727.match(/\/.+\//);
    var v400 = v606 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1050 = eval("introspect(JAMScript.introspectors.processAll) { " + v400 + " }")
    }else {
      var v1050 = JAMScript.call(eval, null, [v400])
    }
    v76[v77] = v1050;
    j$$2 = j$$2 + 1;
    var v401 = arrayOfPatterns$$3.length;
    v78 = j$$2 < v401
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v79 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v79);
  var j$$3 = 0;
  var v402 = arrayOfPatterns$$4.length;
  var v84 = j$$3 < v402;
  for(;v84;) {
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v607 = arrayOfPatterns$$4[j$$3]
    }
    var v403 = v607.match(/=[a-zA-Z\*]/);
    var v1051 = v403.toString();
    v80[v81] = v1051;
    var v82 = geneticCodeMatchResult$$1;
    var v83 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v404 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1052 = v404.replace(/=/g, "");
    v82[v83] = v1052;
    j$$3 = j$$3 + 1;
    var v405 = arrayOfPatterns$$4.length;
    v84 = j$$3 < v405
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v406 = sequence$$3.length;
  var v85 = "Results for " + v406;
  var stringToReturn$$2 = v85 + " residue sequence ";
  var v407 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v87 = v407 != -1;
  if(v87) {
    var v408 = stringToReturn$$2 + '"';
    var v86 = v408 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v86 + '"'
  }
  var v409 = stringToReturn$$2 + ' starting "';
  var v410 = sequence$$3.substring(0, 10);
  var v88 = v409 + v410;
  stringToReturn$$2 = v88 + '"';
  var v89 = '<div class="info">' + stringToReturn$$2;
  return v89 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v608 = "Results for " + topology;
  var v411 = v608 + " ";
  var v412 = sequence$$4.length;
  var v90 = v411 + v412;
  var stringToReturn$$3 = v90 + " residue sequence ";
  var v413 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v92 = v413 != -1;
  if(v92) {
    var v414 = stringToReturn$$3 + '"';
    var v91 = v414 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v91 + '"'
  }
  var v415 = stringToReturn$$3 + ' starting "';
  var v416 = sequence$$4.substring(0, 10);
  var v93 = v415 + v416;
  stringToReturn$$3 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$3;
  return v94 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v417 = sequenceOne$$1.length;
  var v95 = "Alignment results for " + v417;
  var stringToReturn$$4 = v95 + " residue sequence ";
  var v418 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v97 = v418 != -1;
  if(v97) {
    var v419 = stringToReturn$$4 + '"';
    var v96 = v419 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v420 = stringToReturn$$4 + ' starting "';
  var v421 = sequenceOne$$1.substring(0, 10);
  var v98 = v420 + v421;
  stringToReturn$$4 = v98 + '"\n';
  var v422 = stringToReturn$$4 + "and ";
  var v423 = sequenceTwo$$1.length;
  var v99 = v422 + v423;
  stringToReturn$$4 = v99 + " residue sequence ";
  var v424 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v101 = v424 != -1;
  if(v101) {
    var v425 = stringToReturn$$4 + '"';
    var v100 = v425 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v100 + '"'
  }
  var v426 = stringToReturn$$4 + ' starting "';
  var v427 = sequenceTwo$$1.substring(0, 10);
  var v102 = v426 + v427;
  stringToReturn$$4 = v102 + '"';
  var v103 = '<div class="info">' + stringToReturn$$4;
  return v103 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v105 = j$$4 < lengthOut;
  for(;v105;) {
    var v428 = Math.random();
    var v429 = components.length;
    var v104 = v428 * v429;
    tempNum = Math.floor(v104);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v105 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v430 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v106 = v430 != -1;
  if(v106) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v431 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v108 = v431 != -1;
  if(v108) {
    var v107 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v107.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v609 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v432 = v609 != -1;
  var v611 = !v432;
  if(v611) {
    var v728 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v610 = v728 != -1;
    var v730 = !v610;
    if(v730) {
      var v813 = expressionToCheck.search(/\[\]/);
      var v729 = v813 != -1;
      var v815 = !v729;
      if(v815) {
        var v883 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v814 = v883 != -1;
        var v885 = !v814;
        if(v885) {
          var v928 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v884 = v928 != -1;
          var v930 = !v884;
          if(v930) {
            var v962 = expressionToCheck.search(/\|\|/);
            var v929 = v962 != -1;
            var v964 = !v929;
            if(v964) {
              var v980 = expressionToCheck.search(/\/\|/);
              var v963 = v980 != -1;
              var v982 = !v963;
              if(v982) {
                var v996 = expressionToCheck.search(/\|\//);
                var v981 = v996 != -1;
                var v998 = !v981;
                if(v998) {
                  var v1009 = expressionToCheck.search(/\[.\]/);
                  var v997 = v1009 != -1;
                  var v1011 = !v997;
                  if(v1011) {
                    var v1020 = expressionToCheck.search(/\</);
                    var v1010 = v1020 != -1;
                    var v1022 = !v1010;
                    if(v1022) {
                      var v1021 = expressionToCheck.search(/\>/);
                      v1010 = v1021 != -1
                    }
                    v997 = v1010
                  }
                  v981 = v997
                }
                v963 = v981
              }
              v929 = v963
            }
            v884 = v929
          }
          v814 = v884
        }
        v729 = v814
      }
      v610 = v729
    }
    v432 = v610
  }
  var v109 = v432;
  if(v109) {
    return false
  }
  return true
}
function openForm() {
  var v110 = outputWindow.document;
  JAMScript.call(v110.write, v110, ['<form action="">\n']);
  return true
}
function openPre() {
  var v111 = outputWindow.document;
  JAMScript.call(v111.write, v111, ["<pre>"]);
  var v112 = outputWindow.document;
  JAMScript.call(v112.write, v112, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v113 = outputWindow.document;
  JAMScript.call(v113.write, v113, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1053 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1053[2], v1053[1], v1053[0]);
  outputWindow.focus();
  var v114 = outputWindow.document;
  var v731 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v612 = v731 + "<head>\n";
  var v433 = v612 + "<title>Sequence Manipulation Suite</title>\n";
  var v115 = v433 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v114.write, v114, [v115]);
  if(isColor) {
    var v116 = outputWindow.document;
    var v1038 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1033 = v1038 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1028 = v1033 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1023 = v1028 + "div.info {font-weight: bold}\n";
    var v1012 = v1023 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v999 = v1012 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v983 = v999 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v965 = v983 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v931 = v965 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v886 = v931 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v816 = v886 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v732 = v816 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v613 = v732 + "td.many {color: #000000}\n";
    var v434 = v613 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v117 = v434 + "</style>\n";
    JAMScript.call(v116.write, v116, [v117])
  }else {
    var v118 = outputWindow.document;
    var v1043 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1039 = v1043 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1034 = v1039 + "div.title {display: none}\n";
    var v1029 = v1034 + "div.info {font-weight: bold}\n";
    var v1024 = v1029 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1013 = v1024 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1000 = v1013 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v984 = v1000 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v966 = v984 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v932 = v966 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v887 = v932 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v817 = v887 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v733 = v817 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v614 = v733 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v435 = v614 + "img {display: none}\n";
    var v119 = v435 + "</style>\n";
    JAMScript.call(v118.write, v118, [v119])
  }
  var v120 = outputWindow.document;
  var v734 = "</head>\n" + '<body class="main">\n';
  var v615 = v734 + '<div class="title">';
  var v436 = v615 + title$$7;
  var v121 = v436 + " results</div>\n";
  JAMScript.call(v120.write, v120, [v121]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1054 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1054[2], v1054[1], v1054[0]);
  outputWindow.focus();
  var v122 = outputWindow.document;
  var v735 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v616 = v735 + "<head>\n";
  var v437 = v616 + "<title>Sequence Manipulation Suite</title>\n";
  var v123 = v437 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v122.write, v122, [v123]);
  if(isBackground) {
    var v124 = outputWindow.document;
    var v1040 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1035 = v1040 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1030 = v1035 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1025 = v1030 + "div.info {font-weight: bold}\n";
    var v1014 = v1025 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1001 = v1014 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v985 = v1001 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v967 = v985 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v933 = v967 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v888 = v933 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v818 = v888 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v736 = v818 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v617 = v736 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v438 = v617 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v125 = v438 + "</style>\n";
    JAMScript.call(v124.write, v124, [v125])
  }else {
    var v126 = outputWindow.document;
    var v1046 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1044 = v1046 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1041 = v1044 + "div.title {display: none}\n";
    var v1036 = v1041 + "div.info {font-weight: bold}\n";
    var v1031 = v1036 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1026 = v1031 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1015 = v1026 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1002 = v1015 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v986 = v1002 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v968 = v986 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v934 = v968 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v889 = v934 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v819 = v889 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v737 = v819 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v618 = v737 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v439 = v618 + "img {display: none}\n";
    var v127 = v439 + "</style>\n";
    JAMScript.call(v126.write, v126, [v127])
  }
  var v128 = outputWindow.document;
  var v738 = "</head>\n" + '<body class="main">\n';
  var v619 = v738 + '<div class="title">';
  var v440 = v619 + title$$9;
  var v129 = v440 + " results</div>\n";
  JAMScript.call(v128.write, v128, [v129]);
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
  var v441 = dnaSequence$$1.search(/./);
  var v130 = v441 != -1;
  if(v130) {
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
  var v131 = j$$5 < lengthOfColumn;
  for(;v131;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v131 = j$$5 < lengthOfColumn
  }
  var v132 = tempString + theNumber;
  theNumber = v132 + " ";
  var v133 = sequenceToAppend + theNumber;
  sequenceToAppend = v133 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v442 = testArray[0];
  var v134 = v442 != testString;
  if(v134) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v443 = testString.search(re$$2);
  var v135 = v443 == -1;
  if(v135) {
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
  var v136 = !caughtException;
  if(v136) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v137 = testString != "1X2X3X";
  if(v137) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v444 = testNum.toFixed(3);
  var v138 = v444 != 2489.824;
  if(v138) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v445 = testNum.toPrecision(5);
  var v139 = v445 != 2489.8;
  if(v139) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v446 = theNumber$$1.search(/\d/);
  var v140 = v446 == -1;
  if(v140) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v620 = emblFile.search(/ID/);
  var v447 = v620 == -1;
  var v622 = !v447;
  if(v622) {
    var v739 = emblFile.search(/AC/);
    var v621 = v739 == -1;
    var v741 = !v621;
    if(v741) {
      var v820 = emblFile.search(/DE/);
      var v740 = v820 == -1;
      var v822 = !v740;
      if(v822) {
        var v821 = emblFile.search(/SQ/);
        v740 = v821 == -1
      }
      v621 = v740
    }
    v447 = v621
  }
  var v141 = v447;
  if(v141) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v448 = theNumber$$2.search(/\d/);
  var v142 = v448 == -1;
  if(v142) {
    alert("Please enter a number.");
    return false
  }
  var v144 = theNumber$$2 > maxInput$$2;
  if(v144) {
    var v449 = "Please enter a number less than or equal to " + maxInput$$2;
    var v143 = v449 + ".";
    alert(v143);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v450 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v145 = v450 != -1;
  if(v145) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v451 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v146 = v451 != -1;
  if(v146) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v623 = genBankFile.search(/LOCUS/);
  var v452 = v623 == -1;
  var v625 = !v452;
  if(v625) {
    var v742 = genBankFile.search(/DEFINITION/);
    var v624 = v742 == -1;
    var v744 = !v624;
    if(v744) {
      var v823 = genBankFile.search(/ACCESSION/);
      var v743 = v823 == -1;
      var v825 = !v743;
      if(v825) {
        var v824 = genBankFile.search(/ORIGIN/);
        v743 = v824 == -1
      }
      v624 = v743
    }
    v452 = v624
  }
  var v147 = v452;
  if(v147) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v626 = genBankFile$$1.search(/LOCUS/);
  var v453 = v626 == -1;
  var v628 = !v453;
  if(v628) {
    var v745 = genBankFile$$1.search(/DEFINITION/);
    var v627 = v745 == -1;
    var v747 = !v627;
    if(v747) {
      var v826 = genBankFile$$1.search(/ACCESSION/);
      var v746 = v826 == -1;
      var v828 = !v746;
      if(v828) {
        var v827 = genBankFile$$1.search(/ORIGIN/);
        v746 = v827 == -1
      }
      v627 = v746
    }
    v453 = v627
  }
  var v148 = v453;
  if(v148) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v454 = genBankFile$$1.search(/FEATURES {13}/);
  var v149 = v454 == -1;
  if(v149) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v629 = emblFile$$1.search(/ID/);
  var v455 = v629 == -1;
  var v631 = !v455;
  if(v631) {
    var v748 = emblFile$$1.search(/AC/);
    var v630 = v748 == -1;
    var v750 = !v630;
    if(v750) {
      var v829 = emblFile$$1.search(/DE/);
      var v749 = v829 == -1;
      var v831 = !v749;
      if(v831) {
        var v830 = emblFile$$1.search(/SQ/);
        v749 = v830 == -1
      }
      v630 = v749
    }
    v455 = v630
  }
  var v150 = v455;
  if(v150) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v456 = emblFile$$1.search(/^FT/m);
  var v151 = v456 == -1;
  if(v151) {
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
  var v159 = i$$5 < stopBase;
  for(;v159;) {
    var v152 = i$$5 + 1;
    lineOfText = rightNum(v152, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v457 = basePerLine / groupSize;
    var v156 = j$$6 <= v457;
    for(;v156;) {
      var v155 = k < groupSize;
      for(;v155;) {
        var v153 = lineOfText;
        var v458 = k + i$$5;
        var v154 = text$$10.charAt(v458);
        lineOfText = v153 + v154;
        k = k + 1;
        v155 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v459 = basePerLine / groupSize;
      v156 = j$$6 <= v459
    }
    var v157 = outputWindow.document;
    var v158 = lineOfText + "\n";
    JAMScript.call(v157.write, v157, [v158]);
    lineOfText = "";
    v159 = i$$5 < stopBase
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
    var v460 = adjustment < 0;
    if(v460) {
      v460 = adjusted >= 0
    }
    var v160 = v460;
    if(v160) {
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
  var v193 = i$$6 < stopBase$$2;
  for(;v193;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v461 = basePerLine$$2 / groupSize$$2;
    var v169 = j$$7 <= v461;
    for(;v169;) {
      var v164 = k$$1 < groupSize$$2;
      for(;v164;) {
        var v462 = i$$6 + k$$1;
        var v161 = v462 >= stopBase$$2;
        if(v161) {
          break
        }
        var v162 = lineOfText$$1;
        var v463 = k$$1 + i$$6;
        var v163 = text$$12.charAt(v463);
        lineOfText$$1 = v162 + v163;
        k$$1 = k$$1 + 1;
        v164 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v167 = numberPosition$$1 == "above";
      if(v167) {
        var v165 = aboveNum;
        var v464 = adjustNumbering(i$$6, numberingAdjustment);
        var v166 = rightNum(v464, "", groupSize$$2, tabIn$$3);
        aboveNum = v165 + v166
      }
      var v168 = i$$6 >= stopBase$$2;
      if(v168) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v465 = basePerLine$$2 / groupSize$$2;
      v169 = j$$7 <= v465
    }
    var v192 = numberPosition$$1 == "left";
    if(v192) {
      var v170 = outputWindow.document;
      var v751 = adjustNumbering(lineNum, numberingAdjustment);
      var v632 = rightNum(v751, "", 8, tabIn$$3);
      var v466 = v632 + lineOfText$$1;
      var v171 = v466 + "\n";
      JAMScript.call(v170.write, v170, [v171]);
      var v175 = strands$$1 == "two";
      if(v175) {
        var v172 = outputWindow.document;
        var v752 = adjustNumbering(lineNum, numberingAdjustment);
        var v633 = rightNum(v752, "", 8, tabIn$$3);
        var v634 = complement(lineOfText$$1);
        var v467 = v633 + v634;
        var v173 = v467 + "\n";
        JAMScript.call(v172.write, v172, [v173]);
        var v174 = outputWindow.document;
        JAMScript.call(v174.write, v174, ["\n"])
      }
    }else {
      var v191 = numberPosition$$1 == "right";
      if(v191) {
        var v176 = outputWindow.document;
        var v635 = lineOfText$$1;
        var v636 = adjustNumbering(i$$6, numberingAdjustment);
        var v468 = v635 + v636;
        var v177 = v468 + "\n";
        JAMScript.call(v176.write, v176, [v177]);
        var v181 = strands$$1 == "two";
        if(v181) {
          var v178 = outputWindow.document;
          var v637 = complement(lineOfText$$1);
          var v638 = adjustNumbering(i$$6, numberingAdjustment);
          var v469 = v637 + v638;
          var v179 = v469 + "\n";
          JAMScript.call(v178.write, v178, [v179]);
          var v180 = outputWindow.document;
          JAMScript.call(v180.write, v180, ["\n"])
        }
      }else {
        var v190 = numberPosition$$1 == "above";
        if(v190) {
          var v182 = outputWindow.document;
          var v183 = aboveNum + "\n";
          JAMScript.call(v182.write, v182, [v183]);
          var v184 = outputWindow.document;
          var v185 = lineOfText$$1 + "\n";
          JAMScript.call(v184.write, v184, [v185]);
          var v189 = strands$$1 == "two";
          if(v189) {
            var v186 = outputWindow.document;
            var v470 = complement(lineOfText$$1);
            var v187 = v470 + "\n";
            JAMScript.call(v186.write, v186, [v187]);
            var v188 = outputWindow.document;
            JAMScript.call(v188.write, v188, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v193 = i$$6 < stopBase$$2
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
  var v214 = i$$7 < stopBase$$3;
  for(;v214;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v471 = basePerLine$$3 / groupSize$$3;
    var v202 = j$$8 <= v471;
    for(;v202;) {
      var v197 = k$$2 < groupSize$$3;
      for(;v197;) {
        var v472 = i$$7 + k$$2;
        var v194 = v472 >= stopBase$$3;
        if(v194) {
          break
        }
        var v195 = lineOfText$$2;
        var v473 = k$$2 + i$$7;
        var v196 = text$$13.charAt(v473);
        lineOfText$$2 = v195 + v196;
        k$$2 = k$$2 + 1;
        v197 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v200 = numberPosition$$2 == "above";
      if(v200) {
        var v198 = aboveNum$$1;
        var v199 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v198 + v199
      }
      var v201 = i$$7 >= stopBase$$3;
      if(v201) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v474 = basePerLine$$3 / groupSize$$3;
      v202 = j$$8 <= v474
    }
    var v213 = numberPosition$$2 == "left";
    if(v213) {
      var v203 = outputWindow.document;
      var v639 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v475 = v639 + lineOfText$$2;
      var v204 = v475 + "\n";
      JAMScript.call(v203.write, v203, [v204])
    }else {
      var v212 = numberPosition$$2 == "right";
      if(v212) {
        var v205 = outputWindow.document;
        var v476 = lineOfText$$2 + i$$7;
        var v206 = v476 + "\n";
        JAMScript.call(v205.write, v205, [v206])
      }else {
        var v211 = numberPosition$$2 == "above";
        if(v211) {
          var v207 = outputWindow.document;
          var v208 = aboveNum$$1 + "\n";
          JAMScript.call(v207.write, v207, [v208]);
          var v209 = outputWindow.document;
          var v210 = lineOfText$$2 + "\n";
          JAMScript.call(v209.write, v209, [v210])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v214 = i$$7 < stopBase$$3
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
  var v640 = sequence$$13.length;
  var v477 = v640 <= firstIndexToMutate;
  var v642 = !v477;
  if(v642) {
    var v641 = lastIndexToMutate < 0;
    var v753 = !v641;
    if(v753) {
      v641 = lastIndexToMutate <= firstIndexToMutate
    }
    v477 = v641
  }
  var v215 = v477;
  if(v215) {
    numMut = 0
  }
  var i$$8 = 0;
  var v223 = i$$8 < numMut;
  for(;v223;) {
    maxNum = sequence$$13.length;
    var v478 = Math.random();
    var v216 = v478 * maxNum;
    randNum = Math.floor(v216);
    var v479 = randNum < firstIndexToMutate;
    var v643 = !v479;
    if(v643) {
      v479 = randNum > lastIndexToMutate
    }
    var v217 = v479;
    if(v217) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v223 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v480 = Math.random();
      var v481 = components$$1.length;
      var v218 = v480 * v481;
      componentsIndex = Math.round(v218);
      var v482 = components$$1.length;
      var v219 = componentsIndex == v482;
      if(v219) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v483 = components$$1[componentsIndex]
      }
      var v220 = v483 != currentChar;
      if(v220) {
        needNewChar = false
      }
    }
    var v484 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v485 = components$$1[componentsIndex]
    }
    var v221 = v484 + v485;
    var v486 = randNum + 1;
    var v487 = sequence$$13.length;
    var v222 = sequence$$13.substring(v486, v487);
    sequence$$13 = v221 + v222;
    i$$8 = i$$8 + 1;
    v223 = i$$8 < numMut
  }
  var v224 = outputWindow.document;
  var v225 = addReturns(sequence$$13);
  JAMScript.call(v224.write, v224, [v225]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v230 = j$$9 < lengthOut$$1;
  for(;v230;) {
    var v488 = Math.random();
    var v489 = components$$2.length;
    var v226 = v488 * v489;
    tempNum$$1 = Math.floor(v226);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v490 = sequence$$14.length;
    var v229 = v490 == 60;
    if(v229) {
      var v227 = outputWindow.document;
      var v228 = sequence$$14 + "\n";
      JAMScript.call(v227.write, v227, [v228]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v230 = j$$9 < lengthOut$$1
  }
  var v231 = outputWindow.document;
  var v232 = sequence$$14 + "\n";
  JAMScript.call(v231.write, v231, [v232]);
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
  var v236 = dnaConformation == "circular";
  if(v236) {
    var v233 = sequence$$15.substring(0, lookAhead);
    shiftValue = v233.length;
    var v754 = sequence$$15.length;
    var v644 = v754 - lookAhead;
    var v645 = sequence$$15.length;
    var v491 = sequence$$15.substring(v644, v645);
    var v234 = v491 + sequence$$15;
    var v235 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v234 + v235;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v237 = outputWindow.document;
  JAMScript.call(v237.write, v237, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v238 = outputWindow.document;
  var v755 = '<tr><td class="title" width="200px">' + "Site:";
  var v646 = v755 + '</td><td class="title">';
  var v492 = v646 + "Positions:";
  var v239 = v492 + "</td></tr>\n";
  JAMScript.call(v238.write, v238, [v239]);
  var i$$9 = 0;
  var v493 = arrayOfItems.length;
  var v255 = i$$9 < v493;
  for(;v255;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v494 = arrayOfItems[i$$9]
    }
    var v240 = v494.match(/\/.+\//);
    matchExp = v240 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v756 = arrayOfItems[i$$9]
    }
    var v647 = v756.match(/\)\D*\d+/);
    var v495 = v647.toString();
    var v241 = v495.replace(/\)\D*/, "");
    cutDistance = parseFloat(v241);
    var v247 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v247;) {
      var v242 = matchExp.lastIndex;
      matchPosition = v242 - cutDistance;
      var v496 = matchPosition >= lowerLimit;
      if(v496) {
        v496 = matchPosition < upperLimit
      }
      var v245 = v496;
      if(v245) {
        timesFound = timesFound + 1;
        var v243 = tempString$$1 + ", ";
        var v497 = matchPosition - shiftValue;
        var v244 = v497 + 1;
        tempString$$1 = v243 + v244
      }
      var v498 = matchExp.lastIndex;
      var v648 = RegExp.lastMatch;
      var v499 = v648.length;
      var v246 = v498 - v499;
      matchExp.lastIndex = v246 + 1;
      v247 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v500 = tempString$$1.search(/\d/);
    var v248 = v500 != -1;
    if(v248) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v252 = timesFound == 0;
    if(v252) {
      backGroundClass = "none"
    }else {
      var v251 = timesFound == 1;
      if(v251) {
        backGroundClass = "one"
      }else {
        var v250 = timesFound == 2;
        if(v250) {
          backGroundClass = "two"
        }else {
          var v249 = timesFound == 3;
          if(v249) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v253 = outputWindow.document;
    var v969 = '<tr><td class="' + backGroundClass;
    var v935 = v969 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1003 = arrayOfItems[i$$9]
    }
    var v987 = v1003.match(/\([^\(]+\)/);
    var v970 = v987.toString();
    var v936 = v970.replace(/\(|\)/g, "");
    var v890 = v935 + v936;
    var v832 = v890 + '</td><td class="';
    var v757 = v832 + backGroundClass;
    var v649 = v757 + '">';
    var v501 = v649 + tempString$$1;
    var v254 = v501 + "</td></tr>\n";
    JAMScript.call(v253.write, v253, [v254]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v502 = arrayOfItems.length;
    v255 = i$$9 < v502
  }
  var v256 = outputWindow.document;
  JAMScript.call(v256.write, v256, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v257 = outputWindow.document;
  JAMScript.call(v257.write, v257, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v258 = outputWindow.document;
  var v891 = '<tr><td class="title">' + "Pattern:";
  var v833 = v891 + '</td><td class="title">';
  var v758 = v833 + "Times found:";
  var v650 = v758 + '</td><td class="title">';
  var v503 = v650 + "Percentage:";
  var v259 = v503 + "</td></tr>\n";
  JAMScript.call(v258.write, v258, [v259]);
  var i$$10 = 0;
  var v504 = arrayOfItems$$1.length;
  var v268 = i$$10 < v504;
  for(;v268;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v505 = arrayOfItems$$1[i$$10]
    }
    var v260 = v505.match(/\/[^\/]+\//);
    var matchExp$$1 = v260 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v506 = sequence$$16.search(matchExp$$1);
    var v262 = v506 != -1;
    if(v262) {
      var v261 = sequence$$16.match(matchExp$$1);
      tempNumber = v261.length
    }
    var percentage = 0;
    var v651 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v834 = arrayOfItems$$1[i$$10]
    }
    var v759 = v834.match(/\d+/);
    var v652 = parseFloat(v759);
    var v507 = v651 - v652;
    var v265 = v507 > 0;
    if(v265) {
      var v263 = 100 * tempNumber;
      var v508 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v760 = arrayOfItems$$1[i$$10]
      }
      var v653 = v760.match(/\d+/);
      var v509 = parseFloat(v653);
      var v264 = v508 - v509;
      percentage = v263 / v264
    }
    var v266 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1004 = arrayOfItems$$1[i$$10]
    }
    var v988 = v1004.match(/\([^\(]+\)\b/);
    var v971 = v988.toString();
    var v937 = v971.replace(/\(|\)/g, "");
    var v892 = "<tr><td>" + v937;
    var v835 = v892 + "</td><td>";
    var v761 = v835 + tempNumber;
    var v654 = v761 + "</td><td>";
    var v655 = percentage.toFixed(2);
    var v510 = v654 + v655;
    var v267 = v510 + "</td></tr>\n";
    JAMScript.call(v266.write, v266, [v267]);
    i$$10 = i$$10 + 1;
    var v511 = arrayOfItems$$1.length;
    v268 = i$$10 < v511
  }
  var v269 = outputWindow.document;
  JAMScript.call(v269.write, v269, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v512 = sequence$$17.length;
  var v276 = v512 > 0;
  for(;v276;) {
    maxNum$$1 = sequence$$17.length;
    var v513 = Math.random();
    var v270 = v513 * maxNum$$1;
    randNum$$1 = Math.floor(v270);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v271 = randNum$$1 + 1;
    var v272 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v271, v272);
    sequence$$17 = tempString1 + tempString2;
    var v514 = tempSeq.length;
    var v275 = v514 == 60;
    if(v275) {
      var v273 = outputWindow.document;
      var v274 = tempSeq + "\n";
      JAMScript.call(v273.write, v273, [v274]);
      tempSeq = ""
    }
    var v515 = sequence$$17.length;
    v276 = v515 > 0
  }
  var v277 = outputWindow.document;
  var v278 = tempSeq + "\n";
  JAMScript.call(v277.write, v277, [v278]);
  return true
}
function pcrProducts(theDocument) {
  var newDna = "";
  var maxInput$$3 = 2E5;
  var v516 = testScript();
  var v279 = v516 == false;
  if(v279) {
    return false
  }
  var re$$3;
  var primers = new Array;
  var forwardMatches = new Array;
  var reverseMatches = new Array;
  var pcrProducts$$1 = new Array;
  var v938 = theDocument.forms;
  var v893 = v938[0];
  var v836 = v893.elements;
  var v762 = v836[0];
  var v656 = checkFormElement(v762);
  var v517 = v656 == false;
  var v658 = !v517;
  if(v658) {
    var v989 = theDocument.forms;
    var v972 = v989[0];
    var v939 = v972.elements;
    var v894 = v939[0];
    var v837 = v894.value;
    var v763 = checkSequenceLength(v837, maxInput$$3);
    var v657 = v763 == false;
    var v765 = !v657;
    if(v765) {
      var v990 = theDocument.forms;
      var v973 = v990[0];
      var v940 = v973.elements;
      var v895 = v940[1];
      var v838 = checkFormElement(v895);
      var v764 = v838 == false;
      var v840 = !v764;
      if(v840) {
        var v1005 = theDocument.forms;
        var v991 = v1005[0];
        var v974 = v991.elements;
        var v941 = v974[2];
        var v896 = checkFormElement(v941);
        var v839 = v896 == false;
        var v898 = !v839;
        if(v898) {
          var v1016 = theDocument.forms;
          var v1006 = v1016[0];
          var v992 = v1006.elements;
          var v975 = v992[3];
          var v942 = checkFormElement(v975);
          var v897 = v942 == false;
          var v944 = !v897;
          if(v944) {
            var v1017 = theDocument.forms;
            var v1007 = v1017[0];
            var v993 = v1007.elements;
            var v976 = v993[4];
            var v943 = checkFormElement(v976);
            v897 = v943 == false
          }
          v839 = v897
        }
        v764 = v839
      }
      v657 = v764
    }
    v517 = v657
  }
  var v280 = v517;
  if(v280) {
    return false
  }
  var v977 = theDocument.forms;
  var v945 = v977[0];
  var v899 = v945.elements;
  var v841 = v899[2];
  var v766 = v841.value;
  var v659 = v766.replace(/[^A-Za-z]/g, "");
  var v518 = v659.length;
  var v281 = v518 < 10;
  if(v281) {
    alert("Please enter primer sequences that are at least 10 bases long.");
    return false
  }
  var v978 = theDocument.forms;
  var v946 = v978[0];
  var v900 = v946.elements;
  var v842 = v900[4];
  var v767 = v842.value;
  var v660 = v767.replace(/[^A-Za-z]/g, "");
  var v519 = v660.length;
  var v282 = v519 < 10;
  if(v282) {
    alert("Please enter primer sequences that are at least 10 bases long.");
    return false
  }
  var v901 = theDocument.forms;
  var v843 = v901[0];
  var v768 = v843.elements;
  var v661 = v768[2];
  var v520 = v661.value;
  var v283 = v520.replace(/[^A-Za-z]/g, "");
  var primerOne = convertDegenerates(v283);
  var v902 = theDocument.forms;
  var v844 = v902[0];
  var v769 = v844.elements;
  var v662 = v769[4];
  var v521 = v662.value;
  var v284 = v521.replace(/[^A-Za-z]/g, "");
  var primerTwo = convertDegenerates(v284);
  try {
    var v522 = "/" + primerOne;
    var v285 = v522 + "/gi";
    if(JAMScript.isEval(eval)) {
      re$$3 = eval("introspect(JAMScript.introspectors.processAll) { " + v285 + " }")
    }else {
      re$$3 = JAMScript.call(eval, null, [v285])
    }
    var testString$$1 = "teststring";
    testString$$1 = testString$$1.replace(re$$3, "")
  }catch(e$$5) {
    alert("The first primer sequence is not formatted correctly.");
    return false
  }
  try {
    var v523 = "/" + primerTwo;
    var v286 = v523 + "/gi";
    if(JAMScript.isEval(eval)) {
      re$$3 = eval("introspect(JAMScript.introspectors.processAll) { " + v286 + " }")
    }else {
      re$$3 = JAMScript.call(eval, null, [v286])
    }
    testString$$1 = "teststring";
    testString$$1 = testString$$1.replace(re$$3, "")
  }catch(e$$6) {
    alert("The second primer sequence is not formatted correctly.");
    return false
  }
  var v770 = "/" + primerOne;
  var v663 = v770 + "/gi";
  if(JAMScript.isEval(eval)) {
    var v524 = eval("introspect(JAMScript.introspectors.processAll) { " + v663 + " }")
  }else {
    var v524 = JAMScript.call(eval, null, [v663])
  }
  var v903 = theDocument.forms;
  var v845 = v903[0];
  var v771 = v845.elements;
  var v664 = v771[1];
  var v525 = v664.value;
  var v287 = new Primer(v524, v525);
  primers.push(v287);
  var v772 = "/" + primerTwo;
  var v665 = v772 + "/gi";
  if(JAMScript.isEval(eval)) {
    var v526 = eval("introspect(JAMScript.introspectors.processAll) { " + v665 + " }")
  }else {
    var v526 = JAMScript.call(eval, null, [v665])
  }
  var v904 = theDocument.forms;
  var v846 = v904[0];
  var v773 = v846.elements;
  var v666 = v773[3];
  var v527 = v666.value;
  var v288 = new Primer(v526, v527);
  primers.push(v288);
  var v847 = theDocument.forms;
  var v774 = v847[0];
  var v667 = v774.elements;
  var v528 = v667[0];
  var v289 = v528.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v289);
  var i$$11 = 0;
  var v529 = arrayOfFasta$$1.length;
  var v296 = i$$11 < v529;
  for(;v296;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v290 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v290);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v291 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v291);
    newDna = removeNonDna(newDna);
    var v947 = theDocument.forms;
    var v905 = v947[0];
    var v848 = v905.elements;
    var v775 = v848[8];
    var v668 = v775.options;
    var v948 = theDocument.forms;
    var v906 = v948[0];
    var v849 = v906.elements;
    var v776 = v849[8];
    var v669 = v776.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v530 = v668[v669]
    }
    var v292 = v530.value;
    forwardMatches = findMatches(primers, newDna, v292);
    var v531 = complement(newDna);
    var v293 = reverse(v531);
    var v949 = theDocument.forms;
    var v907 = v949[0];
    var v850 = v907.elements;
    var v777 = v850[8];
    var v670 = v777.options;
    var v950 = theDocument.forms;
    var v908 = v950[0];
    var v851 = v908.elements;
    var v778 = v851[8];
    var v671 = v778.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v532 = v670[v671]
    }
    var v294 = v532.value;
    reverseMatches = findMatches(primers, v293, v294);
    var v951 = theDocument.forms;
    var v909 = v951[0];
    var v852 = v909.elements;
    var v779 = v852[8];
    var v672 = v779.options;
    var v952 = theDocument.forms;
    var v910 = v952[0];
    var v853 = v910.elements;
    var v780 = v853[8];
    var v673 = v780.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v533 = v672[v673]
    }
    var v295 = v533.value;
    makePcrProducts(newDna, title, forwardMatches, reverseMatches, v295, pcrProducts$$1);
    i$$11 = i$$11 + 1;
    var v534 = arrayOfFasta$$1.length;
    v296 = i$$11 < v534
  }
  pcrProducts$$1.sort(pcrProductSorter);
  openWindow("PCR Products");
  openPre();
  i$$11 = 0;
  var v535 = pcrProducts$$1.length;
  var v299 = i$$11 < v535;
  for(;v299;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v297 = pcrProducts$$1[i$$11]
    }
    var v953 = theDocument.forms;
    var v911 = v953[0];
    var v854 = v911.elements;
    var v781 = v854[8];
    var v674 = v781.options;
    var v954 = theDocument.forms;
    var v912 = v954[0];
    var v855 = v912.elements;
    var v782 = v855[8];
    var v675 = v782.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v536 = v674[v675]
    }
    var v298 = v536.value;
    JAMScript.call(v297.writeProduct, v297, [v298]);
    i$$11 = i$$11 + 1;
    var v537 = pcrProducts$$1.length;
    v299 = i$$11 < v537
  }
  var v538 = pcrProducts$$1.length;
  var v301 = v538 == 0;
  if(v301) {
    var v300 = outputWindow.document;
    JAMScript.call(v300.write, v300, ["No PCR products were obtained.\n\n"])
  }
  closePre();
  closeWindow();
  return true
}
function findMatches(primers$$1, sequence$$18, topology$$1) {
  var matchArray$$2;
  var matchPosition$$1;
  var arrayOfMatches = new Array;
  var re$$4;
  var originalLength$$1 = sequence$$18.length;
  var v318 = topology$$1 == "circular";
  if(v318) {
    var lookAhead$$1 = 50;
    var v302 = sequence$$18.substring(0, lookAhead$$1);
    var shiftValue$$1 = v302.length;
    var v303 = sequence$$18.length;
    var upperLimit$$1 = v303 + shiftValue$$1;
    var v783 = sequence$$18.length;
    var v676 = v783 - lookAhead$$1;
    var v677 = sequence$$18.length;
    var v539 = sequence$$18.substring(v676, v677);
    var v304 = v539 + sequence$$18;
    var v305 = sequence$$18.substring(0, lookAhead$$1);
    sequence$$18 = v304 + v305;
    var lowerLimit$$1 = 0 + shiftValue$$1;
    var i$$12 = 0;
    var v540 = primers$$1.length;
    var v312 = i$$12 < v540;
    for(;v312;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v306 = primers$$1[i$$12]
      }
      re$$4 = v306.re;
      var v311 = matchArray$$2 = re$$4.exec(sequence$$18);
      for(;v311;) {
        matchPosition$$1 = re$$4.lastIndex;
        var v541 = matchPosition$$1 >= lowerLimit$$1;
        if(v541) {
          v541 = matchPosition$$1 < upperLimit$$1
        }
        var v309 = v541;
        if(v309) {
          matchPosition$$1 = matchPosition$$1 - shiftValue$$1;
          var v307 = matchPosition$$1 == 0;
          if(v307) {
            matchPosition$$1 = originalLength$$1
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v678 = primers$$1[i$$12]
          }
          var v542 = v678.name;
          var v543 = matchArray$$2[0];
          var v308 = new Match(v542, v543, matchPosition$$1);
          arrayOfMatches.push(v308)
        }
        var v544 = re$$4.lastIndex;
        var v679 = RegExp.lastMatch;
        var v545 = v679.length;
        var v310 = v544 - v545;
        re$$4.lastIndex = v310 + 1;
        v311 = matchArray$$2 = re$$4.exec(sequence$$18)
      }
      i$$12 = i$$12 + 1;
      var v546 = primers$$1.length;
      v312 = i$$12 < v546
    }
  }else {
    i$$12 = 0;
    var v547 = primers$$1.length;
    var v317 = i$$12 < v547;
    for(;v317;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v313 = primers$$1[i$$12]
      }
      re$$4 = v313.re;
      var v316 = matchArray$$2 = re$$4.exec(sequence$$18);
      for(;v316;) {
        matchPosition$$1 = re$$4.lastIndex;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v680 = primers$$1[i$$12]
        }
        var v548 = v680.name;
        var v549 = matchArray$$2[0];
        var v314 = new Match(v548, v549, matchPosition$$1);
        arrayOfMatches.push(v314);
        var v550 = re$$4.lastIndex;
        var v681 = RegExp.lastMatch;
        var v551 = v681.length;
        var v315 = v550 - v551;
        re$$4.lastIndex = v315 + 1;
        v316 = matchArray$$2 = re$$4.exec(sequence$$18)
      }
      i$$12 = i$$12 + 1;
      var v552 = primers$$1.length;
      v317 = i$$12 < v552
    }
  }
  return arrayOfMatches
}
function makePcrProducts(newDna$$1, title$$10, forwardMatches$$1, reverseMatches$$1, topology$$2, pcrProducts$$2) {
  var i$$13 = 0;
  var v553 = forwardMatches$$1.length;
  var v324 = i$$13 < v553;
  for(;v324;) {
    var j$$10 = 0;
    var v554 = reverseMatches$$1.length;
    var v323 = j$$10 < v554;
    for(;v323;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v784 = forwardMatches$$1[i$$13]
      }
      var v682 = v784.positionAfter;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v856 = forwardMatches$$1[i$$13]
      }
      var v785 = v856.matchingText;
      var v683 = v785.length;
      var v555 = v682 - v683;
      var v684 = newDna$$1.length;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v786 = reverseMatches$$1[j$$10]
      }
      var v685 = v786.positionAfter;
      var v556 = v684 - v685;
      var v322 = v555 <= v556;
      if(v322) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v857 = forwardMatches$$1[i$$13]
        }
        var v787 = v857.positionAfter;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v913 = forwardMatches$$1[i$$13]
        }
        var v858 = v913.matchingText;
        var v788 = v858.length;
        var v686 = v787 - v788;
        var v557 = v686 + 1;
        var v789 = newDna$$1.length;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v859 = reverseMatches$$1[j$$10]
        }
        var v790 = v859.positionAfter;
        var v687 = v789 - v790;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v860 = reverseMatches$$1[j$$10]
        }
        var v791 = v860.matchingText;
        var v688 = v791.length;
        var v558 = v687 + v688;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v689 = forwardMatches$$1[i$$13]
        }
        var v559 = v689.primerName;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v690 = reverseMatches$$1[j$$10]
        }
        var v560 = v690.primerName;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v691 = forwardMatches$$1[i$$13]
        }
        var v561 = v691.name;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v692 = reverseMatches$$1[j$$10]
        }
        var v562 = v692.name;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v861 = forwardMatches$$1[i$$13]
        }
        var v792 = v861.positionAfter;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v914 = forwardMatches$$1[i$$13]
        }
        var v862 = v914.matchingText;
        var v793 = v862.length;
        var v693 = v792 - v793;
        var v863 = newDna$$1.length;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v915 = reverseMatches$$1[j$$10]
        }
        var v864 = v915.positionAfter;
        var v794 = v863 - v864;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v916 = reverseMatches$$1[j$$10]
        }
        var v865 = v916.matchingText;
        var v795 = v865.length;
        var v694 = v794 + v795;
        var v563 = newDna$$1.substring(v693, v694);
        var v319 = new PcrProduct(title$$10, v557, v558, v559, v560, v561, v562, v563);
        pcrProducts$$2.push(v319)
      }else {
        var v564 = topology$$2 == "circular";
        if(v564) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v866 = forwardMatches$$1[i$$13]
          }
          var v796 = v866.positionAfter;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v917 = forwardMatches$$1[i$$13]
          }
          var v867 = v917.matchingText;
          var v797 = v867.length;
          var v695 = v796 - v797;
          var v918 = newDna$$1.length;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v955 = reverseMatches$$1[j$$10]
          }
          var v919 = v955.positionAfter;
          var v868 = v918 - v919;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v956 = reverseMatches$$1[j$$10]
          }
          var v920 = v956.matchingText;
          var v869 = v920.length;
          var v798 = v868 + v869;
          var v696 = v798 - 1;
          v564 = v695 > v696
        }
        var v321 = v564;
        if(v321) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v870 = forwardMatches$$1[i$$13]
          }
          var v799 = v870.positionAfter;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v921 = forwardMatches$$1[i$$13]
          }
          var v871 = v921.matchingText;
          var v800 = v871.length;
          var v697 = v799 - v800;
          var v565 = v697 + 1;
          var v801 = newDna$$1.length;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v872 = reverseMatches$$1[j$$10]
          }
          var v802 = v872.positionAfter;
          var v698 = v801 - v802;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v873 = reverseMatches$$1[j$$10]
          }
          var v803 = v873.matchingText;
          var v699 = v803.length;
          var v566 = v698 + v699;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v700 = forwardMatches$$1[i$$13]
          }
          var v567 = v700.primerName;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v701 = reverseMatches$$1[j$$10]
          }
          var v568 = v701.primerName;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v702 = forwardMatches$$1[i$$13]
          }
          var v569 = v702.name;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v703 = reverseMatches$$1[j$$10]
          }
          var v570 = v703.name;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v922 = forwardMatches$$1[i$$13]
          }
          var v874 = v922.positionAfter;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v957 = forwardMatches$$1[i$$13]
          }
          var v923 = v957.matchingText;
          var v875 = v923.length;
          var v804 = v874 - v875;
          var v805 = newDna$$1.length;
          var v704 = newDna$$1.substring(v804, v805);
          var v924 = newDna$$1.length;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v958 = reverseMatches$$1[j$$10]
          }
          var v925 = v958.positionAfter;
          var v876 = v924 - v925;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v959 = reverseMatches$$1[j$$10]
          }
          var v926 = v959.matchingText;
          var v877 = v926.length;
          var v806 = v876 + v877;
          var v705 = newDna$$1.substring(0, v806);
          var v571 = v704 + v705;
          var v320 = new PcrProduct(title$$10, v565, v566, v567, v568, v569, v570, v571);
          pcrProducts$$2.push(v320)
        }
      }
      j$$10 = j$$10 + 1;
      var v572 = reverseMatches$$1.length;
      v323 = j$$10 < v572
    }
    i$$13 = i$$13 + 1;
    var v573 = forwardMatches$$1.length;
    v324 = i$$13 < v573
  }
  return
}
function writeProduct(topology$$3) {
  var v325 = outputWindow.document;
  var v1045 = this.sequence;
  var v1042 = v1045.length;
  var v1037 = "&gt;" + v1042;
  var v1032 = v1037 + " bp product from ";
  var v1027 = v1032 + topology$$3;
  var v1018 = v1027 + " template ";
  var v1019 = this.template;
  var v1008 = v1018 + v1019;
  var v994 = v1008 + ", base ";
  var v995 = this.start;
  var v979 = v994 + v995;
  var v960 = v979 + " to base ";
  var v961 = this.stop;
  var v927 = v960 + v961;
  var v878 = v927 + " (";
  var v879 = this.forwardName;
  var v807 = v878 + v879;
  var v706 = v807 + " - ";
  var v707 = this.reverseName;
  var v574 = v706 + v707;
  var v326 = v574 + ").\n";
  JAMScript.call(v325.write, v325, [v326]);
  var v327 = outputWindow.document;
  var v708 = this.sequence;
  var v575 = addReturns(v708);
  var v328 = v575 + "\n\n";
  JAMScript.call(v327.write, v327, [v328]);
  return
}
function PcrProduct(template, start$$4, stop, forwardName, reverseName, forwardPrimer, reversePrimer, sequence$$19) {
  this.template = template;
  this.start = start$$4;
  this.stop = stop;
  this.forwardName = forwardName;
  this.reverseName = reverseName;
  this.forwardPrimer = forwardPrimer;
  this.reversePrimer = reversePrimer;
  this.sequence = sequence$$19;
  return
}
function Match(primerName, matchingText, positionAfter) {
  this.primerName = primerName;
  this.matchingText = matchingText;
  this.positionAfter = positionAfter;
  return
}
function Primer(re$$5, name$$31) {
  this.re = re$$5;
  this.name = name$$31;
  return
}
function pcrProductSorter(a, b) {
  var v709 = a.sequence;
  var v576 = v709.length;
  var v710 = b.sequence;
  var v577 = v710.length;
  var v329 = v576 < v577;
  if(v329) {
    return 1
  }
  var v711 = a.sequence;
  var v578 = v711.length;
  var v712 = b.sequence;
  var v579 = v712.length;
  var v330 = v578 > v579;
  if(v330) {
    return-1
  }else {
    return 0
  }
  return
}
new PcrProduct("", 0, 0, "", "", "", "", "");
var v331 = PcrProduct.prototype;
v331.writeProduct = writeProduct;
JAMScript.set(document, "onload", v2);
var v332 = document.getElementById("submitbtn");
JAMScript.set(v332, "onclick", v3);
var v333 = document.getElementById("clearbtn");
JAMScript.set(v333, "onclick", v4);

