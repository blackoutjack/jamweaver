function v4() {
  var v706 = document.forms;
  var v590 = v706[0];
  var v344 = v590.elements;
  var v5 = v344[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    colorAlignCons(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v345 = document.main_form;
  var v7 = v345.main_submit;
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
  var v346 = arrayOfSequences.length;
  var v9 = v346 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v347 = arrayOfTitles.length;
  var v11 = i$$1 < v347;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v707 = arrayOfTitles[i$$1]
    }
    var v591 = v707.search(/\S/);
    var v348 = v591 == -1;
    var v593 = !v348;
    if(v593) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v774 = arrayOfSequences[i$$1]
      }
      var v708 = v774.search(/\S/);
      var v592 = v708 == -1;
      var v710 = !v592;
      if(v710) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v775 = arrayOfSequences[i$$1]
        }
        var v709 = v775.length;
        v592 = v709 != lengthOfAlign
      }
      v348 = v592
    }
    var v10 = v348;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v349 = arrayOfTitles.length;
    v11 = i$$1 < v349
  }
  return true
}
function checkCodonTable(codonTable) {
  var v594 = codonTable.search(/AmAcid/);
  var v350 = v594 == -1;
  var v596 = !v350;
  if(v596) {
    var v711 = codonTable.search(/Codon/);
    var v595 = v711 == -1;
    var v713 = !v595;
    if(v713) {
      var v776 = codonTable.search(/Number/);
      var v712 = v776 == -1;
      var v778 = !v712;
      if(v778) {
        var v816 = codonTable.search(/\/1000/);
        var v777 = v816 == -1;
        var v818 = !v777;
        if(v818) {
          var v817 = codonTable.search(/Fraction\s*\.\./);
          v777 = v817 == -1
        }
        v712 = v777
      }
      v595 = v712
    }
    v350 = v595
  }
  var v12 = v350;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v597 = formElement.value;
  var v351 = v597.search(/\S/);
  var v13 = v351 == -1;
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
  var v352 = arrayOfPatterns.length;
  var v16 = z$$2 < v352;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v598 = arrayOfPatterns[z$$2]
    }
    var v353 = v598.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v353 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v599 = arrayOfPatterns[z$$2]
    }
    var v354 = moreExpressionCheck(v599);
    var v15 = v354 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v355 = arrayOfPatterns.length;
    v16 = z$$2 < v355
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v356 = arrayOfPatterns.length;
  var v25 = j < v356;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v714 = arrayOfPatterns[j]
    }
    var v600 = v714.match(/\/.+\//);
    var v357 = v600 + "gi";
    if(JAMScript.isEval(eval)) {
      var v916 = eval("introspect(JAMScript.introspectors.processAll) { " + v357 + " }")
    }else {
      var v916 = JAMScript.call(eval, null, [v357])
    }
    v19[v20] = v916;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v601 = arrayOfPatterns[j]
    }
    var v358 = v601.match(/=[a-zA-Z\*]/);
    var v917 = v358.toString();
    v21[v22] = v917;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v359 = geneticCodeMatchResult[j]
    }
    var v918 = v359.replace(/=/g, "");
    v23[v24] = v918;
    j = j + 1;
    var v360 = arrayOfPatterns.length;
    v25 = j < v360
  }
  var i$$2 = 0;
  var v602 = testSequence.length;
  var v361 = v602 - 3;
  var v32 = i$$2 <= v361;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v362 = geneticCodeMatchExp.length;
    var v30 = j < v362;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v603 = geneticCodeMatchExp[j]
      }
      var v363 = codon.search(v603);
      var v29 = v363 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v364 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v364 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v365 = geneticCodeMatchExp.length;
      v30 = j < v365
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v604 = testSequence.length;
    var v366 = v604 - 3;
    v32 = i$$2 <= v366
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v367 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v367;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v605 = arrayOfPatterns$$1[z$$3]
    }
    var v368 = v605.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v368 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v369 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v369
  }
  var i$$3 = 0;
  var v370 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v370;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v606 = arrayOfPatterns$$1[i$$3]
    }
    var v371 = "[" + v606;
    var v35 = v371 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v372 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v372;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v607 = arrayOfPatterns$$1[j$$1]
      }
      var v373 = v607.search(re);
      var v36 = v373 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v374 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v374
    }
    i$$3 = i$$3 + 1;
    var v375 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v375
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v376 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v376;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v608 = arrayOfPatterns$$2[z$$4]
    }
    var v377 = v608.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v377 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v609 = arrayOfPatterns$$2[z$$4]
    }
    var v378 = moreExpressionCheck(v609);
    var v40 = v378 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v379 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v379
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v715 = getSequenceFromFasta(text$$7);
  var v610 = v715.replace(/[^A-Za-z]/g, "");
  var v380 = v610.length;
  var v43 = v380 > maxInput;
  if(v43) {
    var v381 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v381 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v382 = text$$8.length;
  var v45 = v382 > maxInput$$1;
  if(v45) {
    var v383 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v383 + " characters.";
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
  var v384 = alignArray.length;
  var v52 = v384 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v385 = alignArray.length;
  var v54 = i$$4 < v385;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v611 = alignArray[i$$4]
    }
    var v386 = v611.search(/[^\s]+\s/);
    var v53 = v386 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v387 = alignArray.length;
    v54 = i$$4 < v387
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
  var v388 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v388 != -1;
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
  var v389 = sequence$$2.length;
  var v58 = "&gt;results for " + v389;
  var stringToReturn = v58 + " residue sequence ";
  var v390 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v390 != -1;
  if(v60) {
    var v391 = stringToReturn + '"';
    var v59 = v391 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v392 = stringToReturn + ' starting "';
  var v393 = sequence$$2.substring(0, 10);
  var v61 = v392 + v393;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v394 = sequenceOne.length;
  var v62 = "Search results for " + v394;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v395 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v395 != -1;
  if(v64) {
    var v396 = stringToReturn$$1 + '"';
    var v63 = v396 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v397 = stringToReturn$$1 + ' starting "';
  var v398 = sequenceOne.substring(0, 10);
  var v65 = v397 + v398;
  stringToReturn$$1 = v65 + '"\n';
  var v399 = stringToReturn$$1 + "and ";
  var v400 = sequenceTwo.length;
  var v66 = v399 + v400;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v401 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v401 != -1;
  if(v68) {
    var v402 = stringToReturn$$1 + '"';
    var v67 = v402 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v403 = stringToReturn$$1 + ' starting "';
  var v404 = sequenceTwo.substring(0, 10);
  var v69 = v403 + v404;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v405 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v405;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v716 = arrayOfPatterns$$3[j$$2]
    }
    var v612 = v716.match(/\/.+\//);
    var v406 = v612 + "gi";
    if(JAMScript.isEval(eval)) {
      var v919 = eval("introspect(JAMScript.introspectors.processAll) { " + v406 + " }")
    }else {
      var v919 = JAMScript.call(eval, null, [v406])
    }
    v72[v73] = v919;
    j$$2 = j$$2 + 1;
    var v407 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v407
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v408 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v408;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v613 = arrayOfPatterns$$4[j$$3]
    }
    var v409 = v613.match(/=[a-zA-Z\*]/);
    var v920 = v409.toString();
    v76[v77] = v920;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v410 = geneticCodeMatchResult$$1[j$$3]
    }
    var v921 = v410.replace(/=/g, "");
    v78[v79] = v921;
    j$$3 = j$$3 + 1;
    var v411 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v411
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v412 = sequence$$3.length;
  var v81 = "Results for " + v412;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v413 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v413 != -1;
  if(v83) {
    var v414 = stringToReturn$$2 + '"';
    var v82 = v414 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v415 = stringToReturn$$2 + ' starting "';
  var v416 = sequence$$3.substring(0, 10);
  var v84 = v415 + v416;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v614 = "Results for " + topology;
  var v417 = v614 + " ";
  var v418 = sequence$$4.length;
  var v86 = v417 + v418;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v419 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v419 != -1;
  if(v88) {
    var v420 = stringToReturn$$3 + '"';
    var v87 = v420 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v421 = stringToReturn$$3 + ' starting "';
  var v422 = sequence$$4.substring(0, 10);
  var v89 = v421 + v422;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v423 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v423;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v424 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v424 != -1;
  if(v93) {
    var v425 = stringToReturn$$4 + '"';
    var v92 = v425 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v426 = stringToReturn$$4 + ' starting "';
  var v427 = sequenceOne$$1.substring(0, 10);
  var v94 = v426 + v427;
  stringToReturn$$4 = v94 + '"\n';
  var v428 = stringToReturn$$4 + "and ";
  var v429 = sequenceTwo$$1.length;
  var v95 = v428 + v429;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v430 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v430 != -1;
  if(v97) {
    var v431 = stringToReturn$$4 + '"';
    var v96 = v431 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v432 = stringToReturn$$4 + ' starting "';
  var v433 = sequenceTwo$$1.substring(0, 10);
  var v98 = v432 + v433;
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
    var v434 = Math.random();
    var v435 = components.length;
    var v100 = v434 * v435;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v436 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v436 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v437 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v437 != -1;
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
  var v615 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v438 = v615 != -1;
  var v617 = !v438;
  if(v617) {
    var v717 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v616 = v717 != -1;
    var v719 = !v616;
    if(v719) {
      var v779 = expressionToCheck.search(/\[\]/);
      var v718 = v779 != -1;
      var v781 = !v718;
      if(v781) {
        var v819 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v780 = v819 != -1;
        var v821 = !v780;
        if(v821) {
          var v838 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v820 = v838 != -1;
          var v840 = !v820;
          if(v840) {
            var v856 = expressionToCheck.search(/\|\|/);
            var v839 = v856 != -1;
            var v858 = !v839;
            if(v858) {
              var v869 = expressionToCheck.search(/\/\|/);
              var v857 = v869 != -1;
              var v871 = !v857;
              if(v871) {
                var v878 = expressionToCheck.search(/\|\//);
                var v870 = v878 != -1;
                var v880 = !v870;
                if(v880) {
                  var v887 = expressionToCheck.search(/\[.\]/);
                  var v879 = v887 != -1;
                  var v889 = !v879;
                  if(v889) {
                    var v894 = expressionToCheck.search(/\</);
                    var v888 = v894 != -1;
                    var v896 = !v888;
                    if(v896) {
                      var v895 = expressionToCheck.search(/\>/);
                      v888 = v895 != -1
                    }
                    v879 = v888
                  }
                  v870 = v879
                }
                v857 = v870
              }
              v839 = v857
            }
            v820 = v839
          }
          v780 = v820
        }
        v718 = v780
      }
      v616 = v718
    }
    v438 = v616
  }
  var v105 = v438;
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
    var v930 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v930[2], v930[1], v930[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v720 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v618 = v720 + "<head>\n";
  var v439 = v618 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v439 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v909 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v905 = v909 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v901 = v905 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v897 = v901 + "div.info {font-weight: bold}\n";
    var v890 = v897 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v881 = v890 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v872 = v881 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v859 = v872 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v841 = v859 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v822 = v841 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v782 = v822 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v721 = v782 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v619 = v721 + "td.many {color: #000000}\n";
    var v440 = v619 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v440 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v913 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v910 = v913 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v906 = v910 + "div.title {display: none}\n";
    var v902 = v906 + "div.info {font-weight: bold}\n";
    var v898 = v902 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v891 = v898 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v882 = v891 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v873 = v882 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v860 = v873 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v842 = v860 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v823 = v842 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v783 = v823 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v722 = v783 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v620 = v722 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v441 = v620 + "img {display: none}\n";
    var v115 = v441 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v723 = "</head>\n" + '<body class="main">\n';
  var v621 = v723 + '<div class="title">';
  var v442 = v621 + title$$6;
  var v117 = v442 + " results</div>\n";
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
    var v931 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v931[2], v931[1], v931[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v724 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v622 = v724 + "<head>\n";
  var v443 = v622 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v443 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v911 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v907 = v911 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v903 = v907 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v899 = v903 + "div.info {font-weight: bold}\n";
    var v892 = v899 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v883 = v892 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v874 = v883 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v861 = v874 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v843 = v861 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v824 = v843 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v784 = v824 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v725 = v784 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v623 = v725 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v444 = v623 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v444 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v915 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v914 = v915 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v912 = v914 + "div.title {display: none}\n";
    var v908 = v912 + "div.info {font-weight: bold}\n";
    var v904 = v908 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v900 = v904 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v893 = v900 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v884 = v893 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v875 = v884 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v862 = v875 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v844 = v862 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v825 = v844 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v785 = v825 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v726 = v785 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v624 = v726 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v445 = v624 + "img {display: none}\n";
    var v123 = v445 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v727 = "</head>\n" + '<body class="main">\n';
  var v625 = v727 + '<div class="title">';
  var v446 = v625 + title$$8;
  var v125 = v446 + " results</div>\n";
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
  var v447 = dnaSequence$$1.search(/./);
  var v126 = v447 != -1;
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
  var v448 = testArray[0];
  var v130 = v448 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v449 = testString.search(re$$2);
  var v131 = v449 == -1;
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
  var v450 = testNum.toFixed(3);
  var v134 = v450 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v451 = testNum.toPrecision(5);
  var v135 = v451 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v452 = theNumber$$1.search(/\d/);
  var v136 = v452 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v626 = emblFile.search(/ID/);
  var v453 = v626 == -1;
  var v628 = !v453;
  if(v628) {
    var v728 = emblFile.search(/AC/);
    var v627 = v728 == -1;
    var v730 = !v627;
    if(v730) {
      var v786 = emblFile.search(/DE/);
      var v729 = v786 == -1;
      var v788 = !v729;
      if(v788) {
        var v787 = emblFile.search(/SQ/);
        v729 = v787 == -1
      }
      v627 = v729
    }
    v453 = v627
  }
  var v137 = v453;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v454 = theNumber$$2.search(/\d/);
  var v138 = v454 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v455 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v455 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v456 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v456 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v457 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v457 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v629 = genBankFile.search(/LOCUS/);
  var v458 = v629 == -1;
  var v631 = !v458;
  if(v631) {
    var v731 = genBankFile.search(/DEFINITION/);
    var v630 = v731 == -1;
    var v733 = !v630;
    if(v733) {
      var v789 = genBankFile.search(/ACCESSION/);
      var v732 = v789 == -1;
      var v791 = !v732;
      if(v791) {
        var v790 = genBankFile.search(/ORIGIN/);
        v732 = v790 == -1
      }
      v630 = v732
    }
    v458 = v630
  }
  var v143 = v458;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v632 = genBankFile$$1.search(/LOCUS/);
  var v459 = v632 == -1;
  var v634 = !v459;
  if(v634) {
    var v734 = genBankFile$$1.search(/DEFINITION/);
    var v633 = v734 == -1;
    var v736 = !v633;
    if(v736) {
      var v792 = genBankFile$$1.search(/ACCESSION/);
      var v735 = v792 == -1;
      var v794 = !v735;
      if(v794) {
        var v793 = genBankFile$$1.search(/ORIGIN/);
        v735 = v793 == -1
      }
      v633 = v735
    }
    v459 = v633
  }
  var v144 = v459;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v460 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v460 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v635 = emblFile$$1.search(/ID/);
  var v461 = v635 == -1;
  var v637 = !v461;
  if(v637) {
    var v737 = emblFile$$1.search(/AC/);
    var v636 = v737 == -1;
    var v739 = !v636;
    if(v739) {
      var v795 = emblFile$$1.search(/DE/);
      var v738 = v795 == -1;
      var v797 = !v738;
      if(v797) {
        var v796 = emblFile$$1.search(/SQ/);
        v738 = v796 == -1
      }
      v636 = v738
    }
    v461 = v636
  }
  var v146 = v461;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v462 = emblFile$$1.search(/^FT/m);
  var v147 = v462 == -1;
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
    var v463 = basePerLine / groupSize;
    var v152 = j$$6 <= v463;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v464 = k + i$$5;
        var v150 = text$$10.charAt(v464);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v465 = basePerLine / groupSize;
      v152 = j$$6 <= v465
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
    var v466 = adjustment < 0;
    if(v466) {
      v466 = adjusted >= 0
    }
    var v156 = v466;
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
    var v467 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v467;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v468 = i$$6 + k$$1;
        var v157 = v468 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v469 = k$$1 + i$$6;
        var v159 = text$$12.charAt(v469);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v470 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v470, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v471 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v471
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v740 = adjustNumbering(lineNum, numberingAdjustment);
      var v638 = rightNum(v740, "", 8, tabIn$$3);
      var v472 = v638 + lineOfText$$1;
      var v167 = v472 + "\n";
      JAMScript.call(v166.write, v166, [v167]);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v741 = adjustNumbering(lineNum, numberingAdjustment);
        var v639 = rightNum(v741, "", 8, tabIn$$3);
        var v640 = complement(lineOfText$$1);
        var v473 = v639 + v640;
        var v169 = v473 + "\n";
        JAMScript.call(v168.write, v168, [v169]);
        var v170 = outputWindow.document;
        JAMScript.call(v170.write, v170, ["\n"])
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v641 = lineOfText$$1;
        var v642 = adjustNumbering(i$$6, numberingAdjustment);
        var v474 = v641 + v642;
        var v173 = v474 + "\n";
        JAMScript.call(v172.write, v172, [v173]);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v643 = complement(lineOfText$$1);
          var v644 = adjustNumbering(i$$6, numberingAdjustment);
          var v475 = v643 + v644;
          var v175 = v475 + "\n";
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
            var v476 = complement(lineOfText$$1);
            var v183 = v476 + "\n";
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
    var v477 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v477;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v478 = i$$7 + k$$2;
        var v190 = v478 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v479 = k$$2 + i$$7;
        var v192 = text$$13.charAt(v479);
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
      var v480 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v480
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v645 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v481 = v645 + lineOfText$$2;
      var v200 = v481 + "\n";
      JAMScript.call(v199.write, v199, [v200])
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v482 = lineOfText$$2 + i$$7;
        var v202 = v482 + "\n";
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
  var v646 = sequence$$13.length;
  var v483 = v646 <= firstIndexToMutate;
  var v648 = !v483;
  if(v648) {
    var v647 = lastIndexToMutate < 0;
    var v742 = !v647;
    if(v742) {
      v647 = lastIndexToMutate <= firstIndexToMutate
    }
    v483 = v647
  }
  var v211 = v483;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v484 = Math.random();
    var v212 = v484 * maxNum;
    randNum = Math.floor(v212);
    var v485 = randNum < firstIndexToMutate;
    var v649 = !v485;
    if(v649) {
      v485 = randNum > lastIndexToMutate
    }
    var v213 = v485;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v486 = Math.random();
      var v487 = components$$1.length;
      var v214 = v486 * v487;
      componentsIndex = Math.round(v214);
      var v488 = components$$1.length;
      var v215 = componentsIndex == v488;
      if(v215) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v489 = components$$1[componentsIndex]
      }
      var v216 = v489 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v490 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v491 = components$$1[componentsIndex]
    }
    var v217 = v490 + v491;
    var v492 = randNum + 1;
    var v493 = sequence$$13.length;
    var v218 = sequence$$13.substring(v492, v493);
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
    var v494 = Math.random();
    var v495 = components$$2.length;
    var v222 = v494 * v495;
    tempNum$$1 = Math.floor(v222);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v496 = sequence$$14.length;
    var v225 = v496 == 60;
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
    var v743 = sequence$$15.length;
    var v650 = v743 - lookAhead;
    var v651 = sequence$$15.length;
    var v497 = sequence$$15.substring(v650, v651);
    var v230 = v497 + sequence$$15;
    var v231 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAMScript.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v234 = outputWindow.document;
  var v744 = '<tr><td class="title" width="200px">' + "Site:";
  var v652 = v744 + '</td><td class="title">';
  var v498 = v652 + "Positions:";
  var v235 = v498 + "</td></tr>\n";
  JAMScript.call(v234.write, v234, [v235]);
  var i$$9 = 0;
  var v499 = arrayOfItems.length;
  var v251 = i$$9 < v499;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v500 = arrayOfItems[i$$9]
    }
    var v236 = v500.match(/\/.+\//);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v745 = arrayOfItems[i$$9]
    }
    var v653 = v745.match(/\)\D*\d+/);
    var v501 = v653.toString();
    var v237 = v501.replace(/\)\D*/, "");
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v502 = matchPosition >= lowerLimit;
      if(v502) {
        v502 = matchPosition < upperLimit
      }
      var v241 = v502;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v503 = matchPosition - shiftValue;
        var v240 = v503 + 1;
        tempString$$1 = v239 + v240
      }
      var v504 = matchExp.lastIndex;
      var v654 = RegExp.lastMatch;
      var v505 = v654.length;
      var v242 = v504 - v505;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v506 = tempString$$1.search(/\d/);
    var v244 = v506 != -1;
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
    var v863 = '<tr><td class="' + backGroundClass;
    var v845 = v863 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v885 = arrayOfItems[i$$9]
    }
    var v876 = v885.match(/\([^\(]+\)/);
    var v864 = v876.toString();
    var v846 = v864.replace(/\(|\)/g, "");
    var v826 = v845 + v846;
    var v798 = v826 + '</td><td class="';
    var v746 = v798 + backGroundClass;
    var v655 = v746 + '">';
    var v507 = v655 + tempString$$1;
    var v250 = v507 + "</td></tr>\n";
    JAMScript.call(v249.write, v249, [v250]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v508 = arrayOfItems.length;
    v251 = i$$9 < v508
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
  var v827 = '<tr><td class="title">' + "Pattern:";
  var v799 = v827 + '</td><td class="title">';
  var v747 = v799 + "Times found:";
  var v656 = v747 + '</td><td class="title">';
  var v509 = v656 + "Percentage:";
  var v255 = v509 + "</td></tr>\n";
  JAMScript.call(v254.write, v254, [v255]);
  var i$$10 = 0;
  var v510 = arrayOfItems$$1.length;
  var v264 = i$$10 < v510;
  for(;v264;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v511 = arrayOfItems$$1[i$$10]
    }
    var v256 = v511.match(/\/[^\/]+\//);
    var matchExp$$1 = v256 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v512 = sequence$$16.search(matchExp$$1);
    var v258 = v512 != -1;
    if(v258) {
      var v257 = sequence$$16.match(matchExp$$1);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v657 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v800 = arrayOfItems$$1[i$$10]
    }
    var v748 = v800.match(/\d+/);
    var v658 = parseFloat(v748);
    var v513 = v657 - v658;
    var v261 = v513 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v514 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v749 = arrayOfItems$$1[i$$10]
      }
      var v659 = v749.match(/\d+/);
      var v515 = parseFloat(v659);
      var v260 = v514 - v515;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v886 = arrayOfItems$$1[i$$10]
    }
    var v877 = v886.match(/\([^\(]+\)\b/);
    var v865 = v877.toString();
    var v847 = v865.replace(/\(|\)/g, "");
    var v828 = "<tr><td>" + v847;
    var v801 = v828 + "</td><td>";
    var v750 = v801 + tempNumber;
    var v660 = v750 + "</td><td>";
    var v661 = percentage.toFixed(2);
    var v516 = v660 + v661;
    var v263 = v516 + "</td></tr>\n";
    JAMScript.call(v262.write, v262, [v263]);
    i$$10 = i$$10 + 1;
    var v517 = arrayOfItems$$1.length;
    v264 = i$$10 < v517
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
  var v518 = sequence$$17.length;
  var v272 = v518 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v519 = Math.random();
    var v266 = v519 * maxNum$$1;
    randNum$$1 = Math.floor(v266);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v267, v268);
    sequence$$17 = tempString1 + tempString2;
    var v520 = tempSeq.length;
    var v271 = v520 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAMScript.call(v269.write, v269, [v270]);
      tempSeq = ""
    }
    var v521 = sequence$$17.length;
    v272 = v521 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAMScript.call(v273.write, v273, [v274]);
  return true
}
function colorAlignCons(theDocument) {
  var maxInput$$3 = 2E4;
  var v522 = testScript();
  var v275 = v522 == false;
  if(v275) {
    return false
  }
  var theAlignment = "";
  var alignArray$$1 = new Array;
  var groupString = "";
  var arrayOfGroups = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var longestTitle;
  var v848 = theDocument.forms;
  var v829 = v848[0];
  var v802 = v829.elements;
  var v751 = v802[0];
  var v662 = checkFormElement(v751);
  var v523 = v662 == false;
  var v664 = !v523;
  if(v664) {
    var v866 = theDocument.forms;
    var v849 = v866[0];
    var v830 = v849.elements;
    var v803 = v830[0];
    var v752 = v803.value;
    var v663 = checkTextLength(v752, maxInput$$3);
    v523 = v663 == false
  }
  var v276 = v523;
  if(v276) {
    return false
  }
  var v804 = theDocument.forms;
  var v753 = v804[0];
  var v665 = v753.elements;
  var v524 = v665[0];
  var v277 = v524.value;
  theAlignment = "X" + v277;
  alignArray$$1 = theAlignment.split(/[>%#]/);
  var v525 = earlyCheckAlign(alignArray$$1);
  var v278 = v525 == false;
  if(v278) {
    return false
  }
  var i$$11 = 1;
  var v526 = alignArray$$1.length;
  var v293 = i$$11 < v526;
  for(;v293;) {
    var v279 = titleArray;
    var v280 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v527 = alignArray$$1[i$$11]
    }
    var v922 = v527.match(/[^\f\n\r]+[\f\n\r]/);
    v279[v280] = v922;
    var v281 = titleArray;
    var v282 = i$$11 - 1;
    var v805 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v754 = titleArray[v805]
    }
    var v666 = v754.toString();
    var v528 = filterFastaTitle(v666);
    var v923 = v528.replace(/[\f\n\r]/g, "");
    v281[v282] = v923;
    var v283 = titleArray;
    var v284 = i$$11 - 1;
    var v667 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v529 = titleArray[v667]
    }
    var v924 = v529.substring(0, 20);
    v283[v284] = v924;
    var v288 = i$$11 == 1;
    if(v288) {
      var v530 = i$$11 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v285 = titleArray[v530]
      }
      longestTitle = v285.length
    }else {
      var v755 = i$$11 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v668 = titleArray[v755]
      }
      var v531 = v668.length;
      var v287 = v531 > longestTitle;
      if(v287) {
        var v532 = i$$11 - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v286 = titleArray[v532]
        }
        longestTitle = v286.length
      }
    }
    var v289 = sequenceArray$$1;
    var v290 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v533 = alignArray$$1[i$$11]
    }
    var v925 = v533.replace(/[^\f\n\r]+[\f\n\r]/, "");
    v289[v290] = v925;
    var v291 = sequenceArray$$1;
    var v292 = i$$11 - 1;
    var v669 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v534 = sequenceArray$$1[v669]
    }
    var v926 = filterAlignSeq(v534);
    v291[v292] = v926;
    i$$11 = i$$11 + 1;
    var v535 = alignArray$$1.length;
    v293 = i$$11 < v535
  }
  var spaceString = "                    ";
  i$$11 = 0;
  var v536 = titleArray.length;
  var v297 = i$$11 < v536;
  for(;v297;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v670 = titleArray[i$$11]
    }
    var v537 = v670.length;
    var v296 = v537 < longestTitle;
    if(v296) {
      var v294 = titleArray;
      var v295 = i$$11;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v538 = titleArray[i$$11]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v806 = titleArray[i$$11]
      }
      var v756 = v806.length;
      var v671 = longestTitle - v756;
      var v539 = spaceString.substring(0, v671);
      v294[v295] = v538 + v539
    }
    i$$11 = i$$11 + 1;
    var v540 = titleArray.length;
    v297 = i$$11 < v540
  }
  var v541 = checkAlign(titleArray, sequenceArray$$1);
  var v298 = v541 == false;
  if(v298) {
    return false
  }
  var v831 = theDocument.forms;
  var v807 = v831[0];
  var v757 = v807.elements;
  var v672 = v757[7];
  var v542 = v672.value;
  var v299 = v542.replace(/\s/g, "");
  groupString = v299.toUpperCase();
  arrayOfGroups = groupString.split(/,/);
  var v543 = checkGroupInput(arrayOfGroups);
  var v300 = v543 == false;
  if(v300) {
    return false
  }
  var isBackground$$1;
  var v867 = theDocument.forms;
  var v850 = v867[0];
  var v832 = v850.elements;
  var v808 = v832[6];
  var v758 = v808.options;
  var v868 = theDocument.forms;
  var v851 = v868[0];
  var v833 = v851.elements;
  var v809 = v833[6];
  var v759 = v809.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v673 = v758[v759]
  }
  var v544 = v673.value;
  var v301 = v544 == "background";
  if(v301) {
    isBackground$$1 = true
  }else {
    isBackground$$1 = false
  }
  _openWindowAlign("Color Align Conservation", isBackground$$1);
  openPre();
  var v852 = theDocument.forms;
  var v834 = v852[0];
  var v810 = v834.elements;
  var v760 = v810[4];
  var v674 = v760.options;
  var v853 = theDocument.forms;
  var v835 = v853[0];
  var v811 = v835.elements;
  var v761 = v811[4];
  var v675 = v761.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v545 = v674[v675]
  }
  var v302 = v545.value;
  var v854 = theDocument.forms;
  var v836 = v854[0];
  var v812 = v836.elements;
  var v762 = v812[5];
  var v676 = v762.options;
  var v855 = theDocument.forms;
  var v837 = v855[0];
  var v813 = v837.elements;
  var v763 = v813[5];
  var v677 = v763.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v546 = v676[v677]
  }
  var v303 = v546.value;
  var v814 = theDocument.forms;
  var v764 = v814[0];
  var v678 = v764.elements;
  var v547 = v678[8];
  var v304 = v547.value;
  colorAlign(titleArray, sequenceArray$$1, v302, v303, arrayOfGroups, v304, longestTitle);
  closePre();
  closeWindow();
  return true
}
function colorAlign(arrayOfTitles$$1, arrayOfSequences$$1, basePerLine$$4, consensus, arrayOfGroups$$1, definedStarts, longestTitle$$1) {
  var v305 = arrayOfSequences$$1.length;
  var positions = new Array(v305);
  var v548 = definedStarts.search(/\S/);
  var v306 = v548 == -1;
  if(v306) {
    definedStarts = "0,0"
  }
  var definedStartsArray = definedStarts.split(/,/);
  var i$$12 = 0;
  var v549 = positions.length;
  var v311 = i$$12 < v549;
  for(;v311;) {
    var v550 = definedStartsArray.length;
    var v310 = i$$12 >= v550;
    if(v310) {
      positions[i$$12] = 0
    }else {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v679 = definedStartsArray[i$$12]
      }
      var v551 = v679.search(/\d/);
      var v309 = v551 != -1;
      if(v309) {
        var v307 = positions;
        var v308 = i$$12;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v680 = definedStartsArray[i$$12]
        }
        var v552 = v680.replace(/[^\d\-]/g, "");
        var v927 = parseInt(v552);
        v307[v308] = v927
      }else {
        alert("An incorrect starting position was encountered. It was set to 0.");
        outputWindow.focus();
        positions[i$$12] = 0
      }
    }
    i$$12 = i$$12 + 1;
    var v553 = positions.length;
    v311 = i$$12 < v553
  }
  var totalBasesShown = 0;
  var v312 = parseInt(consensus);
  consensus = v312 / 100;
  basePerLine$$4 = parseInt(basePerLine$$4);
  var columnCount = 0;
  var arrayOfColumns = new Array(basePerLine$$4);
  i$$12 = 0;
  var v554 = arrayOfColumns.length;
  var v315 = i$$12 < v554;
  for(;v315;) {
    var v313 = arrayOfColumns;
    var v314 = i$$12;
    var v555 = arrayOfSequences$$1.length;
    var v928 = new Array(v555);
    v313[v314] = v928;
    i$$12 = i$$12 + 1;
    var v556 = arrayOfColumns.length;
    v315 = i$$12 < v556
  }
  i$$12 = 0;
  var columnSeq;
  var re$$3;
  var result;
  var output = "";
  var v681 = arrayOfSequences$$1[0];
  var v557 = v681.length;
  var v341 = totalBasesShown < v557;
  for(;v341;) {
    var jj = 0;
    var v558 = arrayOfSequences$$1.length;
    var v339 = jj < v558;
    for(;v339;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v559 = arrayOfTitles$$1[jj]
      }
      var v316 = output + v559;
      output = v316 + " ";
      var v682 = totalBasesShown + basePerLine$$4;
      var v560 = i$$12 < v682;
      if(v560) {
        var v765 = arrayOfSequences$$1[0];
        var v683 = v765.length;
        v560 = i$$12 < v683
      }
      var v334 = v560;
      for(;v334;) {
        var v320 = jj == 0;
        if(v320) {
          var k$$3 = 0;
          var v561 = arrayOfSequences$$1.length;
          var v319 = k$$3 < v561;
          for(;v319;) {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v317 = arrayOfColumns[columnCount]
            }
            var v318 = k$$3;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v562 = arrayOfSequences$$1[k$$3]
            }
            var v929 = v562.charAt(i$$12);
            v317[v318] = v929;
            k$$3 = k$$3 + 1;
            var v563 = arrayOfSequences$$1.length;
            v319 = k$$3 < v563
          }
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v766 = arrayOfSequences$$1[jj]
        }
        var v684 = v766.charAt(i$$12);
        var v564 = v684 == ".";
        var v686 = !v564;
        if(v686) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v767 = arrayOfSequences$$1[jj]
          }
          var v685 = v767.charAt(i$$12);
          v564 = v685 == "-"
        }
        var v322 = v564;
        if(v322) {
          var v565 = output + '<span class="diff">';
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v687 = arrayOfSequences$$1[jj]
          }
          var v566 = v687.charAt(i$$12);
          var v321 = v565 + v566;
          output = v321 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount = columnCount + 1;
          var v688 = totalBasesShown + basePerLine$$4;
          var v567 = i$$12 < v688;
          if(v567) {
            var v768 = arrayOfSequences$$1[0];
            var v689 = v768.length;
            v567 = i$$12 < v689
          }
          v334 = v567;
          continue
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v323 = arrayOfColumns[columnCount]
        }
        columnSeq = v323.join(",");
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v568 = arrayOfSequences$$1[jj]
        }
        var v324 = v568.charAt(i$$12);
        re$$3 = new RegExp(v324, "gi");
        var v769 = columnSeq.match(re$$3);
        var v690 = v769.length;
        var v691 = arrayOfSequences$$1.length;
        var v569 = v690 / v691;
        var v326 = v569 >= consensus;
        if(v326) {
          var v570 = output + '<span class="ident">';
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v692 = arrayOfSequences$$1[jj]
          }
          var v571 = v692.charAt(i$$12);
          var v325 = v570 + v571;
          output = v325 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount = columnCount + 1;
          var v693 = totalBasesShown + basePerLine$$4;
          var v572 = i$$12 < v693;
          if(v572) {
            var v770 = arrayOfSequences$$1[0];
            var v694 = v770.length;
            v572 = i$$12 < v694
          }
          v334 = v572;
          continue
        }
        result = 1;
        var m = 0;
        var v573 = arrayOfGroups$$1.length;
        var v330 = m < v573;
        for(;v330;) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v695 = arrayOfGroups$$1[m]
          }
          var v574 = v695.search(re$$3);
          var v329 = v574 != -1;
          if(v329) {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v696 = arrayOfGroups$$1[m]
            }
            var v575 = "[" + v696;
            var v327 = v575 + "]";
            re$$3 = new RegExp(v327, "gi");
            var v328 = columnSeq.match(re$$3);
            result = v328.length;
            break
          }
          m = m + 1;
          var v576 = arrayOfGroups$$1.length;
          v330 = m < v576
        }
        var v697 = arrayOfSequences$$1.length;
        var v577 = result / v697;
        var v332 = v577 >= consensus;
        if(v332) {
          var v578 = output + '<span class="sim">';
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v698 = arrayOfSequences$$1[jj]
          }
          var v579 = v698.charAt(i$$12);
          var v331 = v578 + v579;
          output = v331 + "</span>";
          i$$12 = i$$12 + 1;
          columnCount = columnCount + 1;
          var v699 = totalBasesShown + basePerLine$$4;
          var v580 = i$$12 < v699;
          if(v580) {
            var v771 = arrayOfSequences$$1[0];
            var v700 = v771.length;
            v580 = i$$12 < v700
          }
          v334 = v580;
          continue
        }
        var v581 = output + '<span class="diff">';
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v701 = arrayOfSequences$$1[jj]
        }
        var v582 = v701.charAt(i$$12);
        var v333 = v581 + v582;
        output = v333 + "</span>";
        i$$12 = i$$12 + 1;
        columnCount = columnCount + 1;
        var v702 = totalBasesShown + basePerLine$$4;
        var v583 = i$$12 < v702;
        if(v583) {
          var v772 = arrayOfSequences$$1[0];
          var v703 = v772.length;
          v583 = i$$12 < v703
        }
        v334 = v583
      }
      var v335 = positions;
      var v336 = jj;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v584 = positions[jj]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v815 = arrayOfSequences$$1[jj]
      }
      var v773 = v815.substring(totalBasesShown, i$$12);
      var v704 = v773.replace(/\.|\-/g, "");
      var v585 = v704.length;
      v335[v336] = v584 + v585;
      var v586 = output + " ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v587 = positions[jj]
      }
      var v337 = v586 + v587;
      output = v337 + "\n";
      var v338 = outputWindow.document;
      JAMScript.call(v338.write, v338, [output]);
      output = "";
      i$$12 = totalBasesShown;
      columnCount = 0;
      jj = jj + 1;
      var v588 = arrayOfSequences$$1.length;
      v339 = jj < v588
    }
    totalBasesShown = totalBasesShown + basePerLine$$4;
    i$$12 = totalBasesShown;
    var v340 = outputWindow.document;
    JAMScript.call(v340.write, v340, ["\n"]);
    var v705 = arrayOfSequences$$1[0];
    var v589 = v705.length;
    v341 = totalBasesShown < v589
  }
  return true
}
JAMScript.set(document, "onload", v2);
var v342 = document.getElementById("submitbtn");
JAMScript.set(v342, "onclick", v3);
var v343 = document.getElementById("clearbtn");
JAMScript.set(v343, "onclick", v4);

