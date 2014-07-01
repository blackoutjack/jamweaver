function v6() {
  var v783 = document.forms;
  var v659 = v783[0];
  var v391 = v659.elements;
  var v7 = v391[0];
  v7.value = " ";
  var v784 = document.forms;
  var v660 = v784[0];
  var v392 = v660.elements;
  var v8 = v392[4];
  v8.value = " ";
  return
}
function v5() {
  try {
    codonUsage(document)
  }catch(e$$5) {
    var v9 = "The following error was encountered: " + e$$5;
    alert(v9)
  }
  return
}
function v4() {
  var v393 = document.main_form;
  var v10 = v393.main_submit;
  v10.focus();
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
  var v11 = arrayOfSequences[0];
  var lengthOfAlign = v11.length;
  var v394 = arrayOfSequences.length;
  var v12 = v394 < 2;
  if(v12) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v395 = arrayOfTitles.length;
  var v14 = i$$1 < v395;
  for(;v14;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v785 = arrayOfTitles[i$$1]
    }
    var v661 = v785.search(/\S/);
    var v396 = v661 == -1;
    var v663 = !v396;
    if(v663) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v859 = arrayOfSequences[i$$1]
      }
      var v786 = v859.search(/\S/);
      var v662 = v786 == -1;
      var v788 = !v662;
      if(v788) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v860 = arrayOfSequences[i$$1]
        }
        var v787 = v860.length;
        v662 = v787 != lengthOfAlign
      }
      v396 = v662
    }
    var v13 = v396;
    if(v13) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v397 = arrayOfTitles.length;
    v14 = i$$1 < v397
  }
  return true
}
function checkCodonTable(codonTable) {
  var v664 = codonTable.search(/AmAcid/);
  var v398 = v664 == -1;
  var v666 = !v398;
  if(v666) {
    var v789 = codonTable.search(/Codon/);
    var v665 = v789 == -1;
    var v791 = !v665;
    if(v791) {
      var v861 = codonTable.search(/Number/);
      var v790 = v861 == -1;
      var v863 = !v790;
      if(v863) {
        var v915 = codonTable.search(/\/1000/);
        var v862 = v915 == -1;
        var v917 = !v862;
        if(v917) {
          var v916 = codonTable.search(/Fraction\s*\.\./);
          v862 = v916 == -1
        }
        v790 = v862
      }
      v665 = v790
    }
    v398 = v665
  }
  var v15 = v398;
  if(v15) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v667 = formElement.value;
  var v399 = v667.search(/\S/);
  var v16 = v399 == -1;
  if(v16) {
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
  var v400 = arrayOfPatterns.length;
  var v19 = z$$2 < v400;
  for(;v19;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v668 = arrayOfPatterns[z$$2]
    }
    var v401 = v668.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v17 = v401 == -1;
    if(v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v669 = arrayOfPatterns[z$$2]
    }
    var v402 = moreExpressionCheck(v669);
    var v18 = v402 == false;
    if(v18) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v403 = arrayOfPatterns.length;
    v19 = z$$2 < v403
  }
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v20);
  var v21 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v21);
  var j = 0;
  var v404 = arrayOfPatterns.length;
  var v28 = j < v404;
  for(;v28;) {
    var v22 = geneticCodeMatchExp;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v792 = arrayOfPatterns[j]
    }
    var v670 = v792.match(/\/.+\//);
    var v405 = v670 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1258 = eval("introspect(JAMScript.introspectors.processAll) { " + v405 + " }")
    }else {
      var v1258 = JAMScript.call(eval, null, [v405])
    }
    v22[v23] = v1258;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v671 = arrayOfPatterns[j]
    }
    var v406 = v671.match(/=[a-zA-Z\*]/);
    var v1259 = v406.toString();
    v24[v25] = v1259;
    var v26 = geneticCodeMatchResult;
    var v27 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v407 = geneticCodeMatchResult[j]
    }
    var v1260 = v407.replace(/=/g, "");
    v26[v27] = v1260;
    j = j + 1;
    var v408 = arrayOfPatterns.length;
    v28 = j < v408
  }
  var i$$2 = 0;
  var v672 = testSequence.length;
  var v409 = v672 - 3;
  var v35 = i$$2 <= v409;
  for(;v35;) {
    var v29 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v29);
    j = 0;
    var v410 = geneticCodeMatchExp.length;
    var v33 = j < v410;
    for(;v33;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v673 = geneticCodeMatchExp[j]
      }
      var v411 = codon.search(v673);
      var v32 = v411 != -1;
      if(v32) {
        var v31 = oneMatch == true;
        if(v31) {
          var v412 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v30 = v412 + ".";
          alert(v30);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v413 = geneticCodeMatchExp.length;
      v33 = j < v413
    }
    var v34 = oneMatch == false;
    if(v34) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v674 = testSequence.length;
    var v414 = v674 - 3;
    v35 = i$$2 <= v414
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v415 = arrayOfPatterns$$1.length;
  var v37 = z$$3 < v415;
  for(;v37;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v675 = arrayOfPatterns$$1[z$$3]
    }
    var v416 = v675.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v36 = v416 != -1;
    if(v36) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v417 = arrayOfPatterns$$1.length;
    v37 = z$$3 < v417
  }
  var i$$3 = 0;
  var v418 = arrayOfPatterns$$1.length;
  var v41 = i$$3 < v418;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v676 = arrayOfPatterns$$1[i$$3]
    }
    var v419 = "[" + v676;
    var v38 = v419 + "]";
    var re = new RegExp(v38, "gi");
    var j$$1 = i$$3 + 1;
    var v420 = arrayOfPatterns$$1.length;
    var v40 = j$$1 < v420;
    for(;v40;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v677 = arrayOfPatterns$$1[j$$1]
      }
      var v421 = v677.search(re);
      var v39 = v421 != -1;
      if(v39) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v422 = arrayOfPatterns$$1.length;
      v40 = j$$1 < v422
    }
    i$$3 = i$$3 + 1;
    var v423 = arrayOfPatterns$$1.length;
    v41 = i$$3 < v423
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v424 = arrayOfPatterns$$2.length;
  var v44 = z$$4 < v424;
  for(;v44;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v678 = arrayOfPatterns$$2[z$$4]
    }
    var v425 = v678.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v42 = v425 == -1;
    if(v42) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v679 = arrayOfPatterns$$2[z$$4]
    }
    var v426 = moreExpressionCheck(v679);
    var v43 = v426 == false;
    if(v43) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v427 = arrayOfPatterns$$2.length;
    v44 = z$$4 < v427
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v793 = getSequenceFromFasta(text$$7);
  var v680 = v793.replace(/[^A-Za-z]/g, "");
  var v428 = v680.length;
  var v46 = v428 > maxInput;
  if(v46) {
    var v429 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v45 = v429 + " characters.";
    alert(v45);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v430 = text$$8.length;
  var v48 = v430 > maxInput$$1;
  if(v48) {
    var v431 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v47 = v431 + " characters.";
    alert(v47);
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
  var v49 = outputWindow.document;
  JAMScript.call(v49.write, v49, ["</form>"]);
  return true
}
function closePre() {
  var v50 = outputWindow.document;
  JAMScript.call(v50.write, v50, ["</div>"]);
  var v51 = outputWindow.document;
  JAMScript.call(v51.write, v51, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v52 = outputWindow.document;
  JAMScript.call(v52.write, v52, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v53 = outputWindow.document;
  JAMScript.call(v53.write, v53, ["</body>\n</html>\n"]);
  outputWindow.status = "Done.";
  var v54 = outputWindow.document;
  v54.close();
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
  var v432 = alignArray.length;
  var v55 = v432 < 3;
  if(v55) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v433 = alignArray.length;
  var v57 = i$$4 < v433;
  for(;v57;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v681 = alignArray[i$$4]
    }
    var v434 = v681.search(/[^\s]+\s/);
    var v56 = v434 == -1;
    if(v56) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v435 = alignArray.length;
    v57 = i$$4 < v435
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
  var v436 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v60 = v436 != -1;
  if(v60) {
    var v59 = matchArray = re$$1.exec(sequenceData);
    for(;v59;) {
      var v58 = matchArray[0];
      arrayOfFasta.push(v58);
      v59 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v437 = sequence$$2.length;
  var v61 = "&gt;results for " + v437;
  var stringToReturn = v61 + " residue sequence ";
  var v438 = fastaSequenceTitle.search(/[^\s]/);
  var v63 = v438 != -1;
  if(v63) {
    var v439 = stringToReturn + '"';
    var v62 = v439 + fastaSequenceTitle;
    stringToReturn = v62 + '"'
  }
  var v440 = stringToReturn + ' starting "';
  var v441 = sequence$$2.substring(0, 10);
  var v64 = v440 + v441;
  stringToReturn = v64 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v442 = sequenceOne.length;
  var v65 = "Search results for " + v442;
  var stringToReturn$$1 = v65 + " residue sequence ";
  var v443 = fastaSequenceTitleOne.search(/[^\s]/);
  var v67 = v443 != -1;
  if(v67) {
    var v444 = stringToReturn$$1 + '"';
    var v66 = v444 + fastaSequenceTitleOne;
    stringToReturn$$1 = v66 + '"'
  }
  var v445 = stringToReturn$$1 + ' starting "';
  var v446 = sequenceOne.substring(0, 10);
  var v68 = v445 + v446;
  stringToReturn$$1 = v68 + '"\n';
  var v447 = stringToReturn$$1 + "and ";
  var v448 = sequenceTwo.length;
  var v69 = v447 + v448;
  stringToReturn$$1 = v69 + " residue sequence ";
  var v449 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v71 = v449 != -1;
  if(v71) {
    var v450 = stringToReturn$$1 + '"';
    var v70 = v450 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v70 + '"'
  }
  var v451 = stringToReturn$$1 + ' starting "';
  var v452 = sequenceTwo.substring(0, 10);
  var v72 = v451 + v452;
  stringToReturn$$1 = v72 + '"';
  var v73 = '<div class="info">' + stringToReturn$$1;
  return v73 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v74 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v74);
  var j$$2 = 0;
  var v453 = arrayOfPatterns$$3.length;
  var v77 = j$$2 < v453;
  for(;v77;) {
    var v75 = geneticCodeMatchExp$$1;
    var v76 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v794 = arrayOfPatterns$$3[j$$2]
    }
    var v682 = v794.match(/\/.+\//);
    var v454 = v682 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1261 = eval("introspect(JAMScript.introspectors.processAll) { " + v454 + " }")
    }else {
      var v1261 = JAMScript.call(eval, null, [v454])
    }
    v75[v76] = v1261;
    j$$2 = j$$2 + 1;
    var v455 = arrayOfPatterns$$3.length;
    v77 = j$$2 < v455
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v78 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v78);
  var j$$3 = 0;
  var v456 = arrayOfPatterns$$4.length;
  var v83 = j$$3 < v456;
  for(;v83;) {
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v683 = arrayOfPatterns$$4[j$$3]
    }
    var v457 = v683.match(/=[a-zA-Z\*]/);
    var v1262 = v457.toString();
    v79[v80] = v1262;
    var v81 = geneticCodeMatchResult$$1;
    var v82 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v458 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1263 = v458.replace(/=/g, "");
    v81[v82] = v1263;
    j$$3 = j$$3 + 1;
    var v459 = arrayOfPatterns$$4.length;
    v83 = j$$3 < v459
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v460 = sequence$$3.length;
  var v84 = "Results for " + v460;
  var stringToReturn$$2 = v84 + " residue sequence ";
  var v461 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v86 = v461 != -1;
  if(v86) {
    var v462 = stringToReturn$$2 + '"';
    var v85 = v462 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v85 + '"'
  }
  var v463 = stringToReturn$$2 + ' starting "';
  var v464 = sequence$$3.substring(0, 10);
  var v87 = v463 + v464;
  stringToReturn$$2 = v87 + '"';
  var v88 = '<div class="info">' + stringToReturn$$2;
  return v88 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v684 = "Results for " + topology;
  var v465 = v684 + " ";
  var v466 = sequence$$4.length;
  var v89 = v465 + v466;
  var stringToReturn$$3 = v89 + " residue sequence ";
  var v467 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v91 = v467 != -1;
  if(v91) {
    var v468 = stringToReturn$$3 + '"';
    var v90 = v468 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v90 + '"'
  }
  var v469 = stringToReturn$$3 + ' starting "';
  var v470 = sequence$$4.substring(0, 10);
  var v92 = v469 + v470;
  stringToReturn$$3 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$3;
  return v93 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v471 = sequenceOne$$1.length;
  var v94 = "Alignment results for " + v471;
  var stringToReturn$$4 = v94 + " residue sequence ";
  var v472 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v96 = v472 != -1;
  if(v96) {
    var v473 = stringToReturn$$4 + '"';
    var v95 = v473 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v95 + '"'
  }
  var v474 = stringToReturn$$4 + ' starting "';
  var v475 = sequenceOne$$1.substring(0, 10);
  var v97 = v474 + v475;
  stringToReturn$$4 = v97 + '"\n';
  var v476 = stringToReturn$$4 + "and ";
  var v477 = sequenceTwo$$1.length;
  var v98 = v476 + v477;
  stringToReturn$$4 = v98 + " residue sequence ";
  var v478 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v100 = v478 != -1;
  if(v100) {
    var v479 = stringToReturn$$4 + '"';
    var v99 = v479 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v99 + '"'
  }
  var v480 = stringToReturn$$4 + ' starting "';
  var v481 = sequenceTwo$$1.substring(0, 10);
  var v101 = v480 + v481;
  stringToReturn$$4 = v101 + '"';
  var v102 = '<div class="info">' + stringToReturn$$4;
  return v102 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v104 = j$$4 < lengthOut;
  for(;v104;) {
    var v482 = Math.random();
    var v483 = components.length;
    var v103 = v482 * v483;
    tempNum = Math.floor(v103);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v104 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v484 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v484 != -1;
  if(v105) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v485 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v107 = v485 != -1;
  if(v107) {
    var v106 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v106.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v685 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v486 = v685 != -1;
  var v687 = !v486;
  if(v687) {
    var v795 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v686 = v795 != -1;
    var v797 = !v686;
    if(v797) {
      var v864 = expressionToCheck.search(/\[\]/);
      var v796 = v864 != -1;
      var v866 = !v796;
      if(v866) {
        var v918 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v865 = v918 != -1;
        var v920 = !v865;
        if(v920) {
          var v956 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v919 = v956 != -1;
          var v958 = !v919;
          if(v958) {
            var v991 = expressionToCheck.search(/\|\|/);
            var v957 = v991 != -1;
            var v993 = !v957;
            if(v993) {
              var v1022 = expressionToCheck.search(/\/\|/);
              var v992 = v1022 != -1;
              var v1024 = !v992;
              if(v1024) {
                var v1050 = expressionToCheck.search(/\|\//);
                var v1023 = v1050 != -1;
                var v1052 = !v1023;
                if(v1052) {
                  var v1076 = expressionToCheck.search(/\[.\]/);
                  var v1051 = v1076 != -1;
                  var v1078 = !v1051;
                  if(v1078) {
                    var v1100 = expressionToCheck.search(/\</);
                    var v1077 = v1100 != -1;
                    var v1102 = !v1077;
                    if(v1102) {
                      var v1101 = expressionToCheck.search(/\>/);
                      v1077 = v1101 != -1
                    }
                    v1051 = v1077
                  }
                  v1023 = v1051
                }
                v992 = v1023
              }
              v957 = v992
            }
            v919 = v957
          }
          v865 = v919
        }
        v796 = v865
      }
      v686 = v796
    }
    v486 = v686
  }
  var v108 = v486;
  if(v108) {
    return false
  }
  return true
}
function openForm() {
  var v109 = outputWindow.document;
  JAMScript.call(v109.write, v109, ['<form action="">\n']);
  return true
}
function openPre() {
  var v110 = outputWindow.document;
  JAMScript.call(v110.write, v110, ["<pre>"]);
  var v111 = outputWindow.document;
  JAMScript.call(v111.write, v111, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v112 = outputWindow.document;
  JAMScript.call(v112.write, v112, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1288 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1288[2], v1288[1], v1288[0]);
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v798 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v688 = v798 + "<head>\n";
  var v487 = v688 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v487 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v113.write, v113, [v114]);
  if(isColor) {
    var v115 = outputWindow.document;
    var v1166 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1145 = v1166 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1124 = v1145 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1103 = v1124 + "div.info {font-weight: bold}\n";
    var v1079 = v1103 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1053 = v1079 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1025 = v1053 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v994 = v1025 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v959 = v994 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v921 = v959 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v867 = v921 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v799 = v867 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v689 = v799 + "td.many {color: #000000}\n";
    var v488 = v689 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v116 = v488 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }else {
    var v117 = outputWindow.document;
    var v1187 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1167 = v1187 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1146 = v1167 + "div.title {display: none}\n";
    var v1125 = v1146 + "div.info {font-weight: bold}\n";
    var v1104 = v1125 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1080 = v1104 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1054 = v1080 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1026 = v1054 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v995 = v1026 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v960 = v995 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v922 = v960 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v868 = v922 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v800 = v868 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v690 = v800 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v489 = v690 + "img {display: none}\n";
    var v118 = v489 + "</style>\n";
    JAMScript.call(v117.write, v117, [v118])
  }
  var v119 = outputWindow.document;
  var v801 = "</head>\n" + '<body class="main">\n';
  var v691 = v801 + '<div class="title">';
  var v490 = v691 + title$$7;
  var v120 = v490 + " results</div>\n";
  JAMScript.call(v119.write, v119, [v120]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1289 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1289[2], v1289[1], v1289[0]);
  outputWindow.focus();
  var v121 = outputWindow.document;
  var v802 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v692 = v802 + "<head>\n";
  var v491 = v692 + "<title>Sequence Manipulation Suite</title>\n";
  var v122 = v491 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v121.write, v121, [v122]);
  if(isBackground) {
    var v123 = outputWindow.document;
    var v1168 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1147 = v1168 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1126 = v1147 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1105 = v1126 + "div.info {font-weight: bold}\n";
    var v1081 = v1105 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1055 = v1081 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1027 = v1055 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v996 = v1027 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v961 = v996 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v923 = v961 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v869 = v923 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v803 = v869 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v693 = v803 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v492 = v693 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v124 = v492 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }else {
    var v125 = outputWindow.document;
    var v1206 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1188 = v1206 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1169 = v1188 + "div.title {display: none}\n";
    var v1148 = v1169 + "div.info {font-weight: bold}\n";
    var v1127 = v1148 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1106 = v1127 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1082 = v1106 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1056 = v1082 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1028 = v1056 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v997 = v1028 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v962 = v997 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v924 = v962 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v870 = v924 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v804 = v870 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v694 = v804 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v493 = v694 + "img {display: none}\n";
    var v126 = v493 + "</style>\n";
    JAMScript.call(v125.write, v125, [v126])
  }
  var v127 = outputWindow.document;
  var v805 = "</head>\n" + '<body class="main">\n';
  var v695 = v805 + '<div class="title">';
  var v494 = v695 + title$$9;
  var v128 = v494 + " results</div>\n";
  JAMScript.call(v127.write, v127, [v128]);
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
  var v495 = dnaSequence$$1.search(/./);
  var v129 = v495 != -1;
  if(v129) {
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
  var v130 = j$$5 < lengthOfColumn;
  for(;v130;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v130 = j$$5 < lengthOfColumn
  }
  var v131 = tempString + theNumber;
  theNumber = v131 + " ";
  var v132 = sequenceToAppend + theNumber;
  sequenceToAppend = v132 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$8, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v496 = testArray[0];
  var v133 = v496 != testString;
  if(v133) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v497 = testString.search(re$$2);
  var v134 = v497 == -1;
  if(v134) {
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
  var v135 = !caughtException;
  if(v135) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v136 = testString != "1X2X3X";
  if(v136) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v498 = testNum.toFixed(3);
  var v137 = v498 != 2489.824;
  if(v137) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v499 = testNum.toPrecision(5);
  var v138 = v499 != 2489.8;
  if(v138) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v500 = theNumber$$1.search(/\d/);
  var v139 = v500 == -1;
  if(v139) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v696 = emblFile.search(/ID/);
  var v501 = v696 == -1;
  var v698 = !v501;
  if(v698) {
    var v806 = emblFile.search(/AC/);
    var v697 = v806 == -1;
    var v808 = !v697;
    if(v808) {
      var v871 = emblFile.search(/DE/);
      var v807 = v871 == -1;
      var v873 = !v807;
      if(v873) {
        var v872 = emblFile.search(/SQ/);
        v807 = v872 == -1
      }
      v697 = v807
    }
    v501 = v697
  }
  var v140 = v501;
  if(v140) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v502 = theNumber$$2.search(/\d/);
  var v141 = v502 == -1;
  if(v141) {
    alert("Please enter a number.");
    return false
  }
  var v143 = theNumber$$2 > maxInput$$2;
  if(v143) {
    var v503 = "Please enter a number less than or equal to " + maxInput$$2;
    var v142 = v503 + ".";
    alert(v142);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v504 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v144 = v504 != -1;
  if(v144) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v505 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v145 = v505 != -1;
  if(v145) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v699 = genBankFile.search(/LOCUS/);
  var v506 = v699 == -1;
  var v701 = !v506;
  if(v701) {
    var v809 = genBankFile.search(/DEFINITION/);
    var v700 = v809 == -1;
    var v811 = !v700;
    if(v811) {
      var v874 = genBankFile.search(/ACCESSION/);
      var v810 = v874 == -1;
      var v876 = !v810;
      if(v876) {
        var v875 = genBankFile.search(/ORIGIN/);
        v810 = v875 == -1
      }
      v700 = v810
    }
    v506 = v700
  }
  var v146 = v506;
  if(v146) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v702 = genBankFile$$1.search(/LOCUS/);
  var v507 = v702 == -1;
  var v704 = !v507;
  if(v704) {
    var v812 = genBankFile$$1.search(/DEFINITION/);
    var v703 = v812 == -1;
    var v814 = !v703;
    if(v814) {
      var v877 = genBankFile$$1.search(/ACCESSION/);
      var v813 = v877 == -1;
      var v879 = !v813;
      if(v879) {
        var v878 = genBankFile$$1.search(/ORIGIN/);
        v813 = v878 == -1
      }
      v703 = v813
    }
    v507 = v703
  }
  var v147 = v507;
  if(v147) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v508 = genBankFile$$1.search(/FEATURES {13}/);
  var v148 = v508 == -1;
  if(v148) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v705 = emblFile$$1.search(/ID/);
  var v509 = v705 == -1;
  var v707 = !v509;
  if(v707) {
    var v815 = emblFile$$1.search(/AC/);
    var v706 = v815 == -1;
    var v817 = !v706;
    if(v817) {
      var v880 = emblFile$$1.search(/DE/);
      var v816 = v880 == -1;
      var v882 = !v816;
      if(v882) {
        var v881 = emblFile$$1.search(/SQ/);
        v816 = v881 == -1
      }
      v706 = v816
    }
    v509 = v706
  }
  var v149 = v509;
  if(v149) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v510 = emblFile$$1.search(/^FT/m);
  var v150 = v510 == -1;
  if(v150) {
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
  var v157 = i$$5 < stopBase;
  for(;v157;) {
    var v151 = i$$5 + 1;
    lineOfText = rightNum(v151, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v511 = basePerLine / groupSize;
    var v154 = j$$6 <= v511;
    for(;v154;) {
      var v153 = k < groupSize;
      for(;v153;) {
        var v512 = k + i$$5;
        var v152 = text$$10.charAt(v512);
        lineOfText = lineOfText + v152;
        k = k + 1;
        v153 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v513 = basePerLine / groupSize;
      v154 = j$$6 <= v513
    }
    var v155 = outputWindow.document;
    var v156 = lineOfText + "\n";
    JAMScript.call(v155.write, v155, [v156]);
    lineOfText = "";
    v157 = i$$5 < stopBase
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
    var v514 = adjustment < 0;
    if(v514) {
      v514 = adjusted >= 0
    }
    var v158 = v514;
    if(v158) {
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
    var v515 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v515;
    for(;v165;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v516 = i$$6 + k$$1;
        var v159 = v516 >= stopBase$$2;
        if(v159) {
          break
        }
        var v517 = k$$1 + i$$6;
        var v160 = text$$12.charAt(v517);
        lineOfText$$1 = lineOfText$$1 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v518 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v518, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v519 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v519
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v818 = adjustNumbering(lineNum, numberingAdjustment);
      var v708 = rightNum(v818, "", 8, tabIn$$3);
      var v520 = v708 + lineOfText$$1;
      var v167 = v520 + "\n";
      JAMScript.call(v166.write, v166, [v167]);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v819 = adjustNumbering(lineNum, numberingAdjustment);
        var v709 = rightNum(v819, "", 8, tabIn$$3);
        var v710 = complement(lineOfText$$1);
        var v521 = v709 + v710;
        var v169 = v521 + "\n";
        JAMScript.call(v168.write, v168, [v169]);
        var v170 = outputWindow.document;
        JAMScript.call(v170.write, v170, ["\n"])
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v711 = adjustNumbering(i$$6, numberingAdjustment);
        var v522 = lineOfText$$1 + v711;
        var v173 = v522 + "\n";
        JAMScript.call(v172.write, v172, [v173]);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v712 = complement(lineOfText$$1);
          var v713 = adjustNumbering(i$$6, numberingAdjustment);
          var v523 = v712 + v713;
          var v175 = v523 + "\n";
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
            var v524 = complement(lineOfText$$1);
            var v183 = v524 + "\n";
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
  var v208 = i$$7 < stopBase$$3;
  for(;v208;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v525 = basePerLine$$3 / groupSize$$3;
    var v196 = j$$8 <= v525;
    for(;v196;) {
      var v192 = k$$2 < groupSize$$3;
      for(;v192;) {
        var v526 = i$$7 + k$$2;
        var v190 = v526 >= stopBase$$3;
        if(v190) {
          break
        }
        var v527 = k$$2 + i$$7;
        var v191 = text$$13.charAt(v527);
        lineOfText$$2 = lineOfText$$2 + v191;
        k$$2 = k$$2 + 1;
        v192 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v194 = numberPosition$$2 == "above";
      if(v194) {
        var v193 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = aboveNum$$1 + v193
      }
      var v195 = i$$7 >= stopBase$$3;
      if(v195) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v528 = basePerLine$$3 / groupSize$$3;
      v196 = j$$8 <= v528
    }
    var v207 = numberPosition$$2 == "left";
    if(v207) {
      var v197 = outputWindow.document;
      var v714 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v529 = v714 + lineOfText$$2;
      var v198 = v529 + "\n";
      JAMScript.call(v197.write, v197, [v198])
    }else {
      var v206 = numberPosition$$2 == "right";
      if(v206) {
        var v199 = outputWindow.document;
        var v530 = lineOfText$$2 + i$$7;
        var v200 = v530 + "\n";
        JAMScript.call(v199.write, v199, [v200])
      }else {
        var v205 = numberPosition$$2 == "above";
        if(v205) {
          var v201 = outputWindow.document;
          var v202 = aboveNum$$1 + "\n";
          JAMScript.call(v201.write, v201, [v202]);
          var v203 = outputWindow.document;
          var v204 = lineOfText$$2 + "\n";
          JAMScript.call(v203.write, v203, [v204])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v208 = i$$7 < stopBase$$3
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
  var v715 = sequence$$13.length;
  var v531 = v715 <= firstIndexToMutate;
  var v717 = !v531;
  if(v717) {
    var v716 = lastIndexToMutate < 0;
    var v820 = !v716;
    if(v820) {
      v716 = lastIndexToMutate <= firstIndexToMutate
    }
    v531 = v716
  }
  var v209 = v531;
  if(v209) {
    numMut = 0
  }
  var i$$8 = 0;
  var v217 = i$$8 < numMut;
  for(;v217;) {
    maxNum = sequence$$13.length;
    var v532 = Math.random();
    var v210 = v532 * maxNum;
    randNum = Math.floor(v210);
    var v533 = randNum < firstIndexToMutate;
    var v718 = !v533;
    if(v718) {
      v533 = randNum > lastIndexToMutate
    }
    var v211 = v533;
    if(v211) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v217 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v534 = Math.random();
      var v535 = components$$1.length;
      var v212 = v534 * v535;
      componentsIndex = Math.round(v212);
      var v536 = components$$1.length;
      var v213 = componentsIndex == v536;
      if(v213) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v537 = components$$1[componentsIndex]
      }
      var v214 = v537 != currentChar;
      if(v214) {
        needNewChar = false
      }
    }
    var v538 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v539 = components$$1[componentsIndex]
    }
    var v215 = v538 + v539;
    var v540 = randNum + 1;
    var v541 = sequence$$13.length;
    var v216 = sequence$$13.substring(v540, v541);
    sequence$$13 = v215 + v216;
    i$$8 = i$$8 + 1;
    v217 = i$$8 < numMut
  }
  var v218 = outputWindow.document;
  var v219 = addReturns(sequence$$13);
  JAMScript.call(v218.write, v218, [v219]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v224 = j$$9 < lengthOut$$1;
  for(;v224;) {
    var v542 = Math.random();
    var v543 = components$$2.length;
    var v220 = v542 * v543;
    tempNum$$1 = Math.floor(v220);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v544 = sequence$$14.length;
    var v223 = v544 == 60;
    if(v223) {
      var v221 = outputWindow.document;
      var v222 = sequence$$14 + "\n";
      JAMScript.call(v221.write, v221, [v222]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v224 = j$$9 < lengthOut$$1
  }
  var v225 = outputWindow.document;
  var v226 = sequence$$14 + "\n";
  JAMScript.call(v225.write, v225, [v226]);
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
  var v230 = dnaConformation == "circular";
  if(v230) {
    var v227 = sequence$$15.substring(0, lookAhead);
    shiftValue = v227.length;
    var v821 = sequence$$15.length;
    var v719 = v821 - lookAhead;
    var v720 = sequence$$15.length;
    var v545 = sequence$$15.substring(v719, v720);
    var v228 = v545 + sequence$$15;
    var v229 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v228 + v229;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v231 = outputWindow.document;
  JAMScript.call(v231.write, v231, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v232 = outputWindow.document;
  var v822 = '<tr><td class="title" width="200px">' + "Site:";
  var v721 = v822 + '</td><td class="title">';
  var v546 = v721 + "Positions:";
  var v233 = v546 + "</td></tr>\n";
  JAMScript.call(v232.write, v232, [v233]);
  var i$$9 = 0;
  var v547 = arrayOfItems.length;
  var v249 = i$$9 < v547;
  for(;v249;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v548 = arrayOfItems[i$$9]
    }
    var v234 = v548.match(/\/.+\//);
    matchExp = v234 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v823 = arrayOfItems[i$$9]
    }
    var v722 = v823.match(/\)\D*\d+/);
    var v549 = v722.toString();
    var v235 = v549.replace(/\)\D*/, "");
    cutDistance = parseFloat(v235);
    var v241 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v241;) {
      var v236 = matchExp.lastIndex;
      matchPosition = v236 - cutDistance;
      var v550 = matchPosition >= lowerLimit;
      if(v550) {
        v550 = matchPosition < upperLimit
      }
      var v239 = v550;
      if(v239) {
        timesFound = timesFound + 1;
        var v237 = tempString$$1 + ", ";
        var v551 = matchPosition - shiftValue;
        var v238 = v551 + 1;
        tempString$$1 = v237 + v238
      }
      var v240 = matchExp;
      var v723 = matchExp.lastIndex;
      var v824 = RegExp.lastMatch;
      var v724 = v824.length;
      var v552 = v723 - v724;
      v240.lastIndex = v552 + 1;
      v241 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v553 = tempString$$1.search(/\d/);
    var v242 = v553 != -1;
    if(v242) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v246 = timesFound == 0;
    if(v246) {
      backGroundClass = "none"
    }else {
      var v245 = timesFound == 1;
      if(v245) {
        backGroundClass = "one"
      }else {
        var v244 = timesFound == 2;
        if(v244) {
          backGroundClass = "two"
        }else {
          var v243 = timesFound == 3;
          if(v243) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v247 = outputWindow.document;
    var v998 = '<tr><td class="' + backGroundClass;
    var v963 = v998 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1057 = arrayOfItems[i$$9]
    }
    var v1029 = v1057.match(/\([^\(]+\)/);
    var v999 = v1029.toString();
    var v964 = v999.replace(/\(|\)/g, "");
    var v925 = v963 + v964;
    var v883 = v925 + '</td><td class="';
    var v825 = v883 + backGroundClass;
    var v725 = v825 + '">';
    var v554 = v725 + tempString$$1;
    var v248 = v554 + "</td></tr>\n";
    JAMScript.call(v247.write, v247, [v248]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v555 = arrayOfItems.length;
    v249 = i$$9 < v555
  }
  var v250 = outputWindow.document;
  JAMScript.call(v250.write, v250, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v251 = outputWindow.document;
  JAMScript.call(v251.write, v251, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v252 = outputWindow.document;
  var v926 = '<tr><td class="title">' + "Pattern:";
  var v884 = v926 + '</td><td class="title">';
  var v826 = v884 + "Times found:";
  var v726 = v826 + '</td><td class="title">';
  var v556 = v726 + "Percentage:";
  var v253 = v556 + "</td></tr>\n";
  JAMScript.call(v252.write, v252, [v253]);
  var i$$10 = 0;
  var v557 = arrayOfItems$$1.length;
  var v262 = i$$10 < v557;
  for(;v262;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v558 = arrayOfItems$$1[i$$10]
    }
    var v254 = v558.match(/\/[^\/]+\//);
    var matchExp$$1 = v254 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v559 = sequence$$16.search(matchExp$$1);
    var v256 = v559 != -1;
    if(v256) {
      var v255 = sequence$$16.match(matchExp$$1);
      tempNumber = v255.length
    }
    var percentage = 0;
    var v727 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v885 = arrayOfItems$$1[i$$10]
    }
    var v827 = v885.match(/\d+/);
    var v728 = parseFloat(v827);
    var v560 = v727 - v728;
    var v259 = v560 > 0;
    if(v259) {
      var v257 = 100 * tempNumber;
      var v561 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v828 = arrayOfItems$$1[i$$10]
      }
      var v729 = v828.match(/\d+/);
      var v562 = parseFloat(v729);
      var v258 = v561 - v562;
      percentage = v257 / v258
    }
    var v260 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1058 = arrayOfItems$$1[i$$10]
    }
    var v1030 = v1058.match(/\([^\(]+\)\b/);
    var v1000 = v1030.toString();
    var v965 = v1000.replace(/\(|\)/g, "");
    var v927 = "<tr><td>" + v965;
    var v886 = v927 + "</td><td>";
    var v829 = v886 + tempNumber;
    var v730 = v829 + "</td><td>";
    var v731 = percentage.toFixed(2);
    var v563 = v730 + v731;
    var v261 = v563 + "</td></tr>\n";
    JAMScript.call(v260.write, v260, [v261]);
    i$$10 = i$$10 + 1;
    var v564 = arrayOfItems$$1.length;
    v262 = i$$10 < v564
  }
  var v263 = outputWindow.document;
  JAMScript.call(v263.write, v263, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v565 = sequence$$17.length;
  var v270 = v565 > 0;
  for(;v270;) {
    maxNum$$1 = sequence$$17.length;
    var v566 = Math.random();
    var v264 = v566 * maxNum$$1;
    randNum$$1 = Math.floor(v264);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v265 = randNum$$1 + 1;
    var v266 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v265, v266);
    sequence$$17 = tempString1 + tempString2;
    var v567 = tempSeq.length;
    var v269 = v567 == 60;
    if(v269) {
      var v267 = outputWindow.document;
      var v268 = tempSeq + "\n";
      JAMScript.call(v267.write, v267, [v268]);
      tempSeq = ""
    }
    var v568 = sequence$$17.length;
    v270 = v568 > 0
  }
  var v271 = outputWindow.document;
  var v272 = tempSeq + "\n";
  JAMScript.call(v271.write, v271, [v272]);
  return true
}
function getGeneticCodeString(type$$25) {
  var v732 = type$$25.toLowerCase();
  var v569 = v732 == "standard";
  var v734 = !v569;
  if(v734) {
    var v733 = type$$25.toLowerCase();
    v569 = v733 == "transl_table=1"
  }
  var v274 = v569;
  if(v274) {
    var v1241 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1224 = v1241 + "/ga[tcuy]/=D,";
    var v1207 = v1224 + "/ga[agr]/=E,";
    var v1189 = v1207 + "/[tu][tu][tcuy]/=F,";
    var v1170 = v1189 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1149 = v1170 + "/ca[tcuy]/=H,";
    var v1128 = v1149 + "/a[tu][atcuwmhy]/=I,";
    var v1107 = v1128 + "/aa[agr]/=K,";
    var v1083 = v1107 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1059 = v1083 + "/a[tu]g/=M,";
    var v1031 = v1059 + "/aa[tucy]/=N,";
    var v1001 = v1031 + "/cc[acgturyswkmbdhvn]/=P,";
    var v966 = v1001 + "/ca[agr]/=Q,";
    var v928 = v966 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v887 = v928 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v830 = v887 + "/ac[acgturyswkmbdhvn]/=T,";
    var v735 = v830 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v570 = v735 + "/[tu]gg/=W,";
    var v273 = v570 + "/[tu]a[ctuy]/=Y,";
    return v273 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v571 = type$$25.toLowerCase();
  var v276 = v571 == "transl_table=2";
  if(v276) {
    var v1242 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1225 = v1242 + "/ga[tcuy]/=D,";
    var v1208 = v1225 + "/ga[agr]/=E,";
    var v1190 = v1208 + "/[tu][tu][tcuy]/=F,";
    var v1171 = v1190 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1150 = v1171 + "/ca[tcuy]/=H,";
    var v1129 = v1150 + "/a[tu][tcuy]/=I,";
    var v1108 = v1129 + "/aa[agr]/=K,";
    var v1084 = v1108 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1060 = v1084 + "/a[tu][agr]/=M,";
    var v1032 = v1060 + "/aa[tucy]/=N,";
    var v1002 = v1032 + "/cc[acgturyswkmbdhvn]/=P,";
    var v967 = v1002 + "/ca[agr]/=Q,";
    var v929 = v967 + "/cg[acgturyswkmbdhvn]/=R,";
    var v888 = v929 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v831 = v888 + "/ac[acgturyswkmbdhvn]/=T,";
    var v736 = v831 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v572 = v736 + "/[tu]g[agr]/=W,";
    var v275 = v572 + "/[tu]a[ctuy]/=Y,";
    return v275 + "/[tu]a[agr]|ag[agr]/=*"
  }
  var v573 = type$$25.toLowerCase();
  var v278 = v573 == "transl_table=3";
  if(v278) {
    var v1243 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1226 = v1243 + "/ga[tcuy]/=D,";
    var v1209 = v1226 + "/ga[agr]/=E,";
    var v1191 = v1209 + "/[tu][tu][tcuy]/=F,";
    var v1172 = v1191 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1151 = v1172 + "/ca[tcuy]/=H,";
    var v1130 = v1151 + "/a[tu][tcuy]/=I,";
    var v1109 = v1130 + "/aa[agr]/=K,";
    var v1085 = v1109 + "/[tu][tu][agr]/=L,";
    var v1061 = v1085 + "/a[tu][agr]/=M,";
    var v1033 = v1061 + "/aa[tucy]/=N,";
    var v1003 = v1033 + "/cc[acgturyswkmbdhvn]/=P,";
    var v968 = v1003 + "/ca[agr]/=Q,";
    var v930 = v968 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v889 = v930 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v832 = v889 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v737 = v832 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v574 = v737 + "/[tu]g[agr]/=W,";
    var v277 = v574 + "/[tu]a[ctuy]/=Y,";
    return v277 + "/[tu]a[agr]/=*"
  }
  var v575 = type$$25.toLowerCase();
  var v280 = v575 == "transl_table=4";
  if(v280) {
    var v1244 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1227 = v1244 + "/ga[tcuy]/=D,";
    var v1210 = v1227 + "/ga[agr]/=E,";
    var v1192 = v1210 + "/[tu][tu][tcuy]/=F,";
    var v1173 = v1192 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1152 = v1173 + "/ca[tcuy]/=H,";
    var v1131 = v1152 + "/a[tu][atcuwmhy]/=I,";
    var v1110 = v1131 + "/aa[agr]/=K,";
    var v1086 = v1110 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1062 = v1086 + "/a[tu]g/=M,";
    var v1034 = v1062 + "/aa[tucy]/=N,";
    var v1004 = v1034 + "/cc[acgturyswkmbdhvn]/=P,";
    var v969 = v1004 + "/ca[agr]/=Q,";
    var v931 = v969 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v890 = v931 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v833 = v890 + "/ac[acgturyswkmbdhvn]/=T,";
    var v738 = v833 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v576 = v738 + "/[tu]g[agr]/=W,";
    var v279 = v576 + "/[tu]a[ctuy]/=Y,";
    return v279 + "/[tu]a[agr]/=*"
  }
  var v577 = type$$25.toLowerCase();
  var v282 = v577 == "transl_table=5";
  if(v282) {
    var v1245 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1228 = v1245 + "/ga[tcuy]/=D,";
    var v1211 = v1228 + "/ga[agr]/=E,";
    var v1193 = v1211 + "/[tu][tu][tcuy]/=F,";
    var v1174 = v1193 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1153 = v1174 + "/ca[tcuy]/=H,";
    var v1132 = v1153 + "/a[tu][tcuy]/=I,";
    var v1111 = v1132 + "/aa[agr]/=K,";
    var v1087 = v1111 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1063 = v1087 + "/a[tu][agr]/=M,";
    var v1035 = v1063 + "/aa[tucy]/=N,";
    var v1005 = v1035 + "/cc[acgturyswkmbdhvn]/=P,";
    var v970 = v1005 + "/ca[agr]/=Q,";
    var v932 = v970 + "/cg[acgturyswkmbdhvn]/=R,";
    var v891 = v932 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v834 = v891 + "/ac[acgturyswkmbdhvn]/=T,";
    var v739 = v834 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v578 = v739 + "/[tu]g[agr]/=W,";
    var v281 = v578 + "/[tu]a[ctuy]/=Y,";
    return v281 + "/[tu]a[agr]/=*"
  }
  var v579 = type$$25.toLowerCase();
  var v284 = v579 == "transl_table=6";
  if(v284) {
    var v1246 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1229 = v1246 + "/ga[tcuy]/=D,";
    var v1212 = v1229 + "/ga[agr]/=E,";
    var v1194 = v1212 + "/[tu][tu][tcuy]/=F,";
    var v1175 = v1194 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1154 = v1175 + "/ca[tcuy]/=H,";
    var v1133 = v1154 + "/a[tu][atcuwmhy]/=I,";
    var v1112 = v1133 + "/aa[agr]/=K,";
    var v1088 = v1112 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1064 = v1088 + "/a[tu]g/=M,";
    var v1036 = v1064 + "/aa[tucy]/=N,";
    var v1006 = v1036 + "/cc[acgturyswkmbdhvn]/=P,";
    var v971 = v1006 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v933 = v971 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v892 = v933 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v835 = v892 + "/ac[acgturyswkmbdhvn]/=T,";
    var v740 = v835 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v580 = v740 + "/[tu]gg/=W,";
    var v283 = v580 + "/[tu]a[ctuy]/=Y,";
    return v283 + "/[tu]ga/=*"
  }
  var v581 = type$$25.toLowerCase();
  var v286 = v581 == "transl_table=9";
  if(v286) {
    var v1247 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1230 = v1247 + "/ga[tcuy]/=D,";
    var v1213 = v1230 + "/ga[agr]/=E,";
    var v1195 = v1213 + "/[tu][tu][tcuy]/=F,";
    var v1176 = v1195 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1155 = v1176 + "/ca[tcuy]/=H,";
    var v1134 = v1155 + "/a[tu][atcuwmhy]/=I,";
    var v1113 = v1134 + "/aag/=K,";
    var v1089 = v1113 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1065 = v1089 + "/a[tu]g/=M,";
    var v1037 = v1065 + "/aa[atcuwmhy]/=N,";
    var v1007 = v1037 + "/cc[acgturyswkmbdhvn]/=P,";
    var v972 = v1007 + "/ca[agr]/=Q,";
    var v934 = v972 + "/cg[acgturyswkmbdhvn]/=R,";
    var v893 = v934 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v836 = v893 + "/ac[acgturyswkmbdhvn]/=T,";
    var v741 = v836 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v582 = v741 + "/[tu]g[agr]/=W,";
    var v285 = v582 + "/[tu]a[ctuy]/=Y,";
    return v285 + "/[tu]a[agr]/=*"
  }
  var v583 = type$$25.toLowerCase();
  var v288 = v583 == "transl_table=10";
  if(v288) {
    var v1248 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1231 = v1248 + "/ga[tcuy]/=D,";
    var v1214 = v1231 + "/ga[agr]/=E,";
    var v1196 = v1214 + "/[tu][tu][tcuy]/=F,";
    var v1177 = v1196 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1156 = v1177 + "/ca[tcuy]/=H,";
    var v1135 = v1156 + "/a[tu][atcuwmhy]/=I,";
    var v1114 = v1135 + "/aa[agr]/=K,";
    var v1090 = v1114 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1066 = v1090 + "/a[tu]g/=M,";
    var v1038 = v1066 + "/aa[tucy]/=N,";
    var v1008 = v1038 + "/cc[acgturyswkmbdhvn]/=P,";
    var v973 = v1008 + "/ca[agr]/=Q,";
    var v935 = v973 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v894 = v935 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v837 = v894 + "/ac[acgturyswkmbdhvn]/=T,";
    var v742 = v837 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v584 = v742 + "/[tu]gg/=W,";
    var v287 = v584 + "/[tu]a[ctuy]/=Y,";
    return v287 + "/[tu]a[agr]/=*"
  }
  var v585 = type$$25.toLowerCase();
  var v290 = v585 == "transl_table=11";
  if(v290) {
    var v1249 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1232 = v1249 + "/ga[tcuy]/=D,";
    var v1215 = v1232 + "/ga[agr]/=E,";
    var v1197 = v1215 + "/[tu][tu][tcuy]/=F,";
    var v1178 = v1197 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1157 = v1178 + "/ca[tcuy]/=H,";
    var v1136 = v1157 + "/a[tu][atcuwmhy]/=I,";
    var v1115 = v1136 + "/aa[agr]/=K,";
    var v1091 = v1115 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1067 = v1091 + "/a[tu]g/=M,";
    var v1039 = v1067 + "/aa[tucy]/=N,";
    var v1009 = v1039 + "/cc[acgturyswkmbdhvn]/=P,";
    var v974 = v1009 + "/ca[agr]/=Q,";
    var v936 = v974 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v895 = v936 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v838 = v895 + "/ac[acgturyswkmbdhvn]/=T,";
    var v743 = v838 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v586 = v743 + "/[tu]gg/=W,";
    var v289 = v586 + "/[tu]a[ctuy]/=Y,";
    return v289 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v587 = type$$25.toLowerCase();
  var v292 = v587 == "transl_table=12";
  if(v292) {
    var v1250 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1233 = v1250 + "/ga[tcuy]/=D,";
    var v1216 = v1233 + "/ga[agr]/=E,";
    var v1198 = v1216 + "/[tu][tu][tcuy]/=F,";
    var v1179 = v1198 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1158 = v1179 + "/ca[tcuy]/=H,";
    var v1137 = v1158 + "/a[tu][atcuwmhy]/=I,";
    var v1116 = v1137 + "/aa[agr]/=K,";
    var v1092 = v1116 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1068 = v1092 + "/a[tu]g/=M,";
    var v1040 = v1068 + "/aa[tucy]/=N,";
    var v1010 = v1040 + "/cc[acgturyswkmbdhvn]/=P,";
    var v975 = v1010 + "/ca[agr]/=Q,";
    var v937 = v975 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v896 = v937 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v839 = v896 + "/ac[acgturyswkmbdhvn]/=T,";
    var v744 = v839 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v588 = v744 + "/[tu]gg/=W,";
    var v291 = v588 + "/[tu]a[ctuy]/=Y,";
    return v291 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v589 = type$$25.toLowerCase();
  var v294 = v589 == "transl_table=13";
  if(v294) {
    var v1251 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1234 = v1251 + "/ga[tcuy]/=D,";
    var v1217 = v1234 + "/ga[agr]/=E,";
    var v1199 = v1217 + "/[tu][tu][tcuy]/=F,";
    var v1180 = v1199 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1159 = v1180 + "/ca[tcuy]/=H,";
    var v1138 = v1159 + "/a[tu][tcuy]/=I,";
    var v1117 = v1138 + "/aa[agr]/=K,";
    var v1093 = v1117 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1069 = v1093 + "/a[tu][agr]/=M,";
    var v1041 = v1069 + "/aa[tucy]/=N,";
    var v1011 = v1041 + "/cc[acgturyswkmbdhvn]/=P,";
    var v976 = v1011 + "/ca[agr]/=Q,";
    var v938 = v976 + "/cg[acgturyswkmbdhvn]/=R,";
    var v897 = v938 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v840 = v897 + "/ac[acgturyswkmbdhvn]/=T,";
    var v745 = v840 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v590 = v745 + "/[tu]g[agr]/=W,";
    var v293 = v590 + "/[tu]a[ctuy]/=Y,";
    return v293 + "/[tu]a[agr]/=*"
  }
  var v591 = type$$25.toLowerCase();
  var v296 = v591 == "transl_table=14";
  if(v296) {
    var v1252 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1235 = v1252 + "/ga[tcuy]/=D,";
    var v1218 = v1235 + "/ga[agr]/=E,";
    var v1200 = v1218 + "/[tu][tu][tcuy]/=F,";
    var v1181 = v1200 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1160 = v1181 + "/ca[tcuy]/=H,";
    var v1139 = v1160 + "/a[tu][atcuwmhy]/=I,";
    var v1118 = v1139 + "/aag/=K,";
    var v1094 = v1118 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1070 = v1094 + "/a[tu]g/=M,";
    var v1042 = v1070 + "/aa[atcuwmhy]/=N,";
    var v1012 = v1042 + "/cc[acgturyswkmbdhvn]/=P,";
    var v977 = v1012 + "/ca[agr]/=Q,";
    var v939 = v977 + "/cg[acgturyswkmbdhvn]/=R,";
    var v898 = v939 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v841 = v898 + "/ac[acgturyswkmbdhvn]/=T,";
    var v746 = v841 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v592 = v746 + "/[tu]g[agr]/=W,";
    var v295 = v592 + "/[tu]a[atcuwmhy]/=Y,";
    return v295 + "/[tu]ag/=*"
  }
  var v593 = type$$25.toLowerCase();
  var v298 = v593 == "transl_table=15";
  if(v298) {
    var v1253 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1236 = v1253 + "/ga[tcuy]/=D,";
    var v1219 = v1236 + "/ga[agr]/=E,";
    var v1201 = v1219 + "/[tu][tu][tcuy]/=F,";
    var v1182 = v1201 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1161 = v1182 + "/ca[tcuy]/=H,";
    var v1140 = v1161 + "/a[tu][atcuwmhy]/=I,";
    var v1119 = v1140 + "/aa[agr]/=K,";
    var v1095 = v1119 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1071 = v1095 + "/a[tu]g/=M,";
    var v1043 = v1071 + "/aa[tucy]/=N,";
    var v1013 = v1043 + "/cc[acgturyswkmbdhvn]/=P,";
    var v978 = v1013 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v940 = v978 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v899 = v940 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v842 = v899 + "/ac[acgturyswkmbdhvn]/=T,";
    var v747 = v842 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v594 = v747 + "/[tu]gg/=W,";
    var v297 = v594 + "/[tu]a[ctuy]/=Y,";
    return v297 + "/[tu][agr]a/=*"
  }
  var v595 = type$$25.toLowerCase();
  var v300 = v595 == "transl_table=16";
  if(v300) {
    var v1254 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1237 = v1254 + "/ga[tcuy]/=D,";
    var v1220 = v1237 + "/ga[agr]/=E,";
    var v1202 = v1220 + "/[tu][tu][tcuy]/=F,";
    var v1183 = v1202 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1162 = v1183 + "/ca[tcuy]/=H,";
    var v1141 = v1162 + "/a[tu][atcuwmhy]/=I,";
    var v1120 = v1141 + "/aa[agr]/=K,";
    var v1096 = v1120 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1072 = v1096 + "/a[tu]g/=M,";
    var v1044 = v1072 + "/aa[tucy]/=N,";
    var v1014 = v1044 + "/cc[acgturyswkmbdhvn]/=P,";
    var v979 = v1014 + "/ca[agr]/=Q,";
    var v941 = v979 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v900 = v941 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v843 = v900 + "/ac[acgturyswkmbdhvn]/=T,";
    var v748 = v843 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v596 = v748 + "/[tu]gg/=W,";
    var v299 = v596 + "/[tu]a[ctuy]/=Y,";
    return v299 + "/[tu][agr]a/=*"
  }
  var v597 = type$$25.toLowerCase();
  var v302 = v597 == "transl_table=21";
  if(v302) {
    var v1255 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1238 = v1255 + "/ga[tcuy]/=D,";
    var v1221 = v1238 + "/ga[agr]/=E,";
    var v1203 = v1221 + "/[tu][tu][tcuy]/=F,";
    var v1184 = v1203 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1163 = v1184 + "/ca[tcuy]/=H,";
    var v1142 = v1163 + "/a[tu][tcuy]/=I,";
    var v1121 = v1142 + "/aag/=K,";
    var v1097 = v1121 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1073 = v1097 + "/a[tu][agr]/=M,";
    var v1045 = v1073 + "/aa[atcuwmhy]/=N,";
    var v1015 = v1045 + "/cc[acgturyswkmbdhvn]/=P,";
    var v980 = v1015 + "/ca[agr]/=Q,";
    var v942 = v980 + "/cg[acgturyswkmbdhvn]/=R,";
    var v901 = v942 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v844 = v901 + "/ac[acgturyswkmbdhvn]/=T,";
    var v749 = v844 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v598 = v749 + "/[tu]g[agr]/=W,";
    var v301 = v598 + "/[tu]a[ctuy]/=Y,";
    return v301 + "/[tu]a[agr]/=*"
  }
  var v599 = type$$25.toLowerCase();
  var v304 = v599 == "transl_table=22";
  if(v304) {
    var v1256 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1239 = v1256 + "/ga[tcuy]/=D,";
    var v1222 = v1239 + "/ga[agr]/=E,";
    var v1204 = v1222 + "/[tu][tu][tcuy]/=F,";
    var v1185 = v1204 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1164 = v1185 + "/ca[tcuy]/=H,";
    var v1143 = v1164 + "/a[tu][atcuwmhy]/=I,";
    var v1122 = v1143 + "/aa[agr]/=K,";
    var v1098 = v1122 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1074 = v1098 + "/a[tu]g/=M,";
    var v1046 = v1074 + "/aa[tucy]/=N,";
    var v1016 = v1046 + "/cc[acgturyswkmbdhvn]/=P,";
    var v981 = v1016 + "/ca[agr]/=Q,";
    var v943 = v981 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v902 = v943 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v845 = v902 + "/ac[acgturyswkmbdhvn]/=T,";
    var v750 = v845 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v600 = v750 + "/[tu]gg/=W,";
    var v303 = v600 + "/[tu]a[ctuy]/=Y,";
    return v303 + "/[tu][agcrsmv]a/=*"
  }
  var v601 = type$$25.toLowerCase();
  var v306 = v601 == "transl_table=23";
  if(v306) {
    var v1257 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1240 = v1257 + "/ga[tcuy]/=D,";
    var v1223 = v1240 + "/ga[agr]/=E,";
    var v1205 = v1223 + "/[tu][tu][tcuy]/=F,";
    var v1186 = v1205 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1165 = v1186 + "/ca[tcuy]/=H,";
    var v1144 = v1165 + "/a[tu][atcuwmhy]/=I,";
    var v1123 = v1144 + "/aa[agr]/=K,";
    var v1099 = v1123 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1075 = v1099 + "/a[tu]g/=M,";
    var v1047 = v1075 + "/aa[tucy]/=N,";
    var v1017 = v1047 + "/cc[acgturyswkmbdhvn]/=P,";
    var v982 = v1017 + "/ca[agr]/=Q,";
    var v944 = v982 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v903 = v944 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v846 = v903 + "/ac[acgturyswkmbdhvn]/=T,";
    var v751 = v846 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v602 = v751 + "/[tu]gg/=W,";
    var v305 = v602 + "/[tu]a[ctuy]/=Y,";
    return v305 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function codonUsage(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var codonTable$$1;
  var v603 = testScript();
  var v307 = v603 == false;
  if(v307) {
    return false
  }
  var v983 = theDocument.forms;
  var v945 = v983[0];
  var v904 = v945.elements;
  var v847 = v904[0];
  var v752 = checkFormElement(v847);
  var v604 = v752 == false;
  var v754 = !v604;
  if(v754) {
    var v1018 = theDocument.forms;
    var v984 = v1018[0];
    var v946 = v984.elements;
    var v905 = v946[0];
    var v848 = v905.value;
    var v753 = checkTextLength(v848, maxInput$$3);
    v604 = v753 == false
  }
  var v308 = v604;
  if(v308) {
    return false
  }
  var v985 = theDocument.forms;
  var v947 = v985[0];
  var v906 = v947.elements;
  var v849 = v906[4];
  var v755 = v849.options;
  var v986 = theDocument.forms;
  var v948 = v986[0];
  var v907 = v948.elements;
  var v850 = v907[4];
  var v756 = v850.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v605 = v755[v756]
  }
  var v309 = v605.value;
  var geneticCode = getGeneticCodeString(v309);
  geneticCode = geneticCode.split(/,/);
  var v606 = checkGeneticCode(geneticCode);
  var v310 = v606 == false;
  if(v310) {
    return false
  }
  codonTable$$1 = makeCodonTable(geneticCode);
  var v311 = codonTable$$1 == false;
  if(v311) {
    return false
  }
  resetCounts(codonTable$$1);
  openWindow("Codon Usage");
  openPre();
  var v908 = theDocument.forms;
  var v851 = v908[0];
  var v757 = v851.elements;
  var v607 = v757[0];
  var v312 = v607.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v312);
  var i$$11 = 0;
  var v608 = arrayOfFasta$$1.length;
  var v318 = i$$11 < v608;
  for(;v318;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v313 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v313);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v314 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v314);
    newDna = removeNonDna(newDna);
    var v315 = outputWindow.document;
    var v316 = getInfoFromTitleAndSequence(title, newDna);
    JAMScript.call(v315.write, v315, [v316]);
    addCodons(codonTable$$1, newDna);
    JAMScript.call(codonTable$$1.determineValues, codonTable$$1, []);
    writeCodonTable(codonTable$$1);
    resetCounts(codonTable$$1);
    var v317 = outputWindow.document;
    JAMScript.call(v317.write, v317, ["\n\n"]);
    i$$11 = i$$11 + 1;
    var v609 = arrayOfFasta$$1.length;
    v318 = i$$11 < v609
  }
  closePre();
  closeWindow();
  return true
}
function writeCodonTable(codonTable$$2) {
  var v319 = outputWindow.document;
  var v949 = rightNum("AmAcid", "", 6, "");
  var v950 = rightNum("Codon", "", 7, "");
  var v909 = v949 + v950;
  var v910 = rightNum("Number", "", 10, "");
  var v852 = v909 + v910;
  var v853 = rightNum("/1000", "", 12, "");
  var v758 = v852 + v853;
  var v759 = rightNum("Fraction   ..", "", 17, "");
  var v610 = v758 + v759;
  var v320 = v610 + "\n\n";
  JAMScript.call(v319.write, v319, [v320]);
  var i$$12 = 0;
  var v760 = codonTable$$2.aminoAcids;
  var v611 = v760.length;
  var v326 = i$$12 < v611;
  for(;v326;) {
    var v612 = codonTable$$2.aminoAcids;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v321 = v612[i$$12]
    }
    arrayOfCodons = v321.codons;
    var j$$10 = 0;
    var v613 = arrayOfCodons.length;
    var v324 = j$$10 < v613;
    for(;v324;) {
      var v322 = outputWindow.document;
      var v1048 = codonTable$$2.aminoAcids;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1019 = v1048[i$$12]
      }
      var v987 = v1019.name;
      var v951 = rightNum(v987, "", 3, "");
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1049 = arrayOfCodons[j$$10]
      }
      var v1020 = v1049.sequence;
      var v988 = v1020.toUpperCase();
      var v952 = rightNum(v988, "", 8, "");
      var v911 = v951 + v952;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1021 = arrayOfCodons[j$$10]
      }
      var v989 = v1021.number;
      var v953 = v989.toFixed(2);
      var v912 = rightNum(v953, "", 12, "");
      var v854 = v911 + v912;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v990 = arrayOfCodons[j$$10]
      }
      var v954 = v990.perThou;
      var v913 = v954.toFixed(2);
      var v855 = rightNum(v913, "", 12, "");
      var v761 = v854 + v855;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v955 = arrayOfCodons[j$$10]
      }
      var v914 = v955.fraction;
      var v856 = v914.toFixed(2);
      var v762 = rightNum(v856, "", 12, "");
      var v614 = v761 + v762;
      var v323 = v614 + "\n";
      JAMScript.call(v322.write, v322, [v323]);
      j$$10 = j$$10 + 1;
      var v615 = arrayOfCodons.length;
      v324 = j$$10 < v615
    }
    var v325 = outputWindow.document;
    JAMScript.call(v325.write, v325, ["\n"]);
    i$$12 = i$$12 + 1;
    var v763 = codonTable$$2.aminoAcids;
    var v616 = v763.length;
    v326 = i$$12 < v616
  }
  return
}
function addCodons(codonTable$$3, dnaSequence$$3) {
  function v2(str$$9, p1$$2, offset$$14, s$$4) {
    var v327 = " " + p1$$2;
    return v327 + " "
  }
  dnaSequence$$3 = dnaSequence$$3.replace(/u/gi, "t");
  dnaSequence$$3 = dnaSequence$$3.replace(/(...)/g, v2);
  var matchExp$$2;
  var arrayOfCodons$$1;
  var i$$13 = 0;
  var v764 = codonTable$$3.aminoAcids;
  var v617 = v764.length;
  var v333 = i$$13 < v617;
  for(;v333;) {
    var v618 = codonTable$$3.aminoAcids;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v328 = v618[i$$13]
    }
    arrayOfCodons$$1 = v328.codons;
    var j$$11 = 0;
    var v619 = arrayOfCodons$$1.length;
    var v332 = j$$11 < v619;
    for(;v332;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v620 = arrayOfCodons$$1[j$$11]
      }
      var v329 = v620.sequence;
      matchExp$$2 = new RegExp(v329, "gi");
      var v621 = dnaSequence$$3.search(matchExp$$2);
      var v331 = v621 != -1;
      if(v331) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v330 = arrayOfCodons$$1[j$$11]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v765 = arrayOfCodons$$1[j$$11]
        }
        var v622 = v765.number;
        var v766 = dnaSequence$$3.match(matchExp$$2);
        var v623 = v766.length;
        v330.number = v622 + v623
      }
      j$$11 = j$$11 + 1;
      var v624 = arrayOfCodons$$1.length;
      v332 = j$$11 < v624
    }
    i$$13 = i$$13 + 1;
    var v767 = codonTable$$3.aminoAcids;
    var v625 = v767.length;
    v333 = i$$13 < v625
  }
  return
}
function resetCounts(codonTable$$4) {
  var i$$14 = 0;
  var v768 = codonTable$$4.aminoAcids;
  var v626 = v768.length;
  var v337 = i$$14 < v626;
  for(;v337;) {
    var v627 = codonTable$$4.aminoAcids;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v334 = v627[i$$14]
    }
    arrayOfCodons = v334.codons;
    var j$$12 = 0;
    var v628 = arrayOfCodons.length;
    var v336 = j$$12 < v628;
    for(;v336;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v335 = arrayOfCodons[j$$12]
      }
      JAMScript.call(v335.resetValues, v335, []);
      j$$12 = j$$12 + 1;
      var v629 = arrayOfCodons.length;
      v336 = j$$12 < v629
    }
    i$$14 = i$$14 + 1;
    var v769 = codonTable$$4.aminoAcids;
    var v630 = v769.length;
    v337 = i$$14 < v630
  }
  return
}
function makeCodonTable(geneticCode$$1) {
  function v3(str$$10, p1$$3, offset$$15, s$$5) {
    var v338 = " " + p1$$3;
    return v338 + " "
  }
  var codonSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var proteinSequence$$1;
  var codonTable$$5 = new CodonTable;
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  codonSequence = codonSequence.replace(/(...)/g, v3);
  var codonSequenceCopy = codonSequence;
  var i$$15 = 0;
  var v631 = geneticCodeMatchExp$$2.length;
  var v341 = i$$15 < v631;
  for(;v341;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v339 = geneticCodeMatchExp$$2[i$$15]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v340 = geneticCodeMatchResult$$2[i$$15]
    }
    codonSequence = codonSequence.replace(v339, v340);
    i$$15 = i$$15 + 1;
    var v632 = geneticCodeMatchExp$$2.length;
    v341 = i$$15 < v632
  }
  var codonArray = codonSequenceCopy.split(/\s+/);
  codonSequence = codonSequence.replace(/\*/g, "Z");
  var proteinArray = codonSequence.split(/\s+/);
  i$$15 = 0;
  var v633 = codonArray.length;
  var v345 = i$$15 < v633;
  for(;v345;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v770 = proteinArray[i$$15]
    }
    var v634 = v770 == "";
    if(v634) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v771 = codonArray[i$$15]
      }
      v634 = v771 == ""
    }
    var v342 = v634;
    if(v342) {
      i$$15 = i$$15 + 1;
      var v635 = codonArray.length;
      v345 = i$$15 < v635;
      continue
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v772 = proteinArray[i$$15]
    }
    var v636 = v772.toLowerCase();
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v343 = codonTable$$5[v636]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v637 = codonArray[i$$15]
    }
    var v344 = new Codon(v637, 0, 0, 0);
    JAMScript.call(v343.addCodon, v343, [v344]);
    i$$15 = i$$15 + 1;
    var v638 = codonArray.length;
    v345 = i$$15 < v638
  }
  return codonTable$$5
}
function determineValues() {
  var totalAminoAcids = 0;
  var aminoAcid = 0;
  var arrayOfCodons$$2;
  var i$$16 = 0;
  var v773 = this.aminoAcids;
  var v639 = v773.length;
  var v351 = i$$16 < v639;
  for(;v351;) {
    var v640 = this.aminoAcids;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v346 = v640[i$$16]
    }
    arrayOfCodons$$2 = v346.codons;
    var j$$13 = 0;
    var v641 = arrayOfCodons$$2.length;
    var v349 = j$$13 < v641;
    for(;v349;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v642 = arrayOfCodons$$2[j$$13]
      }
      var v347 = v642.number;
      totalAminoAcids = totalAminoAcids + v347;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v643 = arrayOfCodons$$2[j$$13]
      }
      var v348 = v643.number;
      aminoAcid = aminoAcid + v348;
      j$$13 = j$$13 + 1;
      var v644 = arrayOfCodons$$2.length;
      v349 = j$$13 < v644
    }
    var v645 = this.aminoAcids;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v350 = v645[i$$16]
    }
    v350.count = aminoAcid;
    aminoAcid = 0;
    i$$16 = i$$16 + 1;
    var v774 = this.aminoAcids;
    var v646 = v774.length;
    v351 = i$$16 < v646
  }
  i$$16 = 0;
  var v775 = this.aminoAcids;
  var v647 = v775.length;
  var v359 = i$$16 < v647;
  for(;v359;) {
    var v648 = this.aminoAcids;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v352 = v648[i$$16]
    }
    arrayOfCodons$$2 = v352.codons;
    j$$13 = 0;
    var v649 = arrayOfCodons$$2.length;
    var v358 = j$$13 < v649;
    for(;v358;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v776 = arrayOfCodons$$2[j$$13]
      }
      var v650 = v776.number;
      var v357 = v650 > 0;
      if(v357) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v353 = arrayOfCodons$$2[j$$13]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v777 = arrayOfCodons$$2[j$$13]
        }
        var v651 = v777.number;
        var v857 = this.aminoAcids;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v778 = v857[i$$16]
        }
        var v652 = v778.count;
        v353.fraction = v651 / v652;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v354 = arrayOfCodons$$2[j$$13]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v858 = arrayOfCodons$$2[j$$13]
        }
        var v779 = v858.number;
        var v653 = v779 / totalAminoAcids;
        v354.perThou = 1E3 * v653
      }else {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v355 = arrayOfCodons$$2[j$$13]
        }
        v355.fraction = 0;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v356 = arrayOfCodons$$2[j$$13]
        }
        v356.perThou = 0
      }
      j$$13 = j$$13 + 1;
      var v654 = arrayOfCodons$$2.length;
      v358 = j$$13 < v654
    }
    i$$16 = i$$16 + 1;
    var v780 = this.aminoAcids;
    var v655 = v780.length;
    v359 = i$$16 < v655
  }
  return
}
function count() {
  var i$$17 = 0;
  var v781 = this.codons;
  var v656 = v781.length;
  var v362 = i$$17 < v656;
  for(;v362;) {
    var v360 = this.number;
    var v657 = this.codons;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v361 = v657[i$$17]
    }
    this.number = v360 + v361;
    i$$17 = i$$17 + 1;
    var v782 = this.codons;
    var v658 = v782.length;
    v362 = i$$17 < v658
  }
  return
}
function addCodon(codon$$1) {
  var v363 = this.codons;
  v363.push(codon$$1);
  return
}
function AminoAcid(name$$32) {
  this.name = name$$32;
  var v1264 = new Array;
  this.codons = v1264;
  this.number = 0;
  return
}
function CodonTable() {
  var v1265 = new AminoAcid("Ala");
  this.a = v1265;
  var v1266 = new AminoAcid("Cys");
  this.c = v1266;
  var v1267 = new AminoAcid("Asp");
  this.d = v1267;
  var v1268 = new AminoAcid("Glu");
  this.e = v1268;
  var v1269 = new AminoAcid("Phe");
  this.f = v1269;
  var v1270 = new AminoAcid("Gly");
  this.g = v1270;
  var v1271 = new AminoAcid("His");
  this.h = v1271;
  var v1272 = new AminoAcid("Ile");
  this.i = v1272;
  var v1273 = new AminoAcid("Lys");
  this.k = v1273;
  var v1274 = new AminoAcid("Leu");
  this.l = v1274;
  var v1275 = new AminoAcid("Met");
  this.m = v1275;
  var v1276 = new AminoAcid("Asn");
  this.n = v1276;
  var v1277 = new AminoAcid("Pro");
  this.p = v1277;
  var v1278 = new AminoAcid("Gln");
  this.q = v1278;
  var v1279 = new AminoAcid("Arg");
  this.r = v1279;
  var v1280 = new AminoAcid("Ser");
  this.s = v1280;
  var v1281 = new AminoAcid("Thr");
  this.t = v1281;
  var v1282 = new AminoAcid("Val");
  this.v = v1282;
  var v1283 = new AminoAcid("Trp");
  this.w = v1283;
  var v1284 = new AminoAcid("Tyr");
  this.y = v1284;
  var v1285 = new AminoAcid("End");
  this.z = v1285;
  this.ala = this.a;
  this.cys = this.c;
  this.asp = this.d;
  this.glu = this.e;
  this.phe = this.f;
  this.gly = this.g;
  this.his = this.h;
  this.ile = this.i;
  this.lys = this.k;
  this.leu = this.l;
  this.met = this.m;
  this.asn = this.n;
  this.pro = this.p;
  this.gln = this.q;
  this.arg = this.r;
  this.ser = this.s;
  this.thr = this.t;
  this.val = this.v;
  this.trp = this.w;
  this.tyr = this.y;
  this.end = this.z;
  var v364 = this.a;
  var v365 = this.c;
  var v366 = this.d;
  var v367 = this.e;
  var v368 = this.f;
  var v369 = this.g;
  var v370 = this.h;
  var v371 = this.i;
  var v372 = this.k;
  var v373 = this.l;
  var v374 = this.m;
  var v375 = this.n;
  var v376 = this.p;
  var v377 = this.q;
  var v378 = this.r;
  var v379 = this.s;
  var v380 = this.t;
  var v381 = this.v;
  var v382 = this.w;
  var v383 = this.y;
  var v384 = this.z;
  var v1286 = new Array(v364, v365, v366, v367, v368, v369, v370, v371, v372, v373, v374, v375, v376, v377, v378, v379, v380, v381, v382, v383, v384);
  this.aminoAcids = v1286;
  return
}
function resetValues() {
  this.number = 0;
  this.perThou = 0;
  this.fraction = 0;
  return
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1287 = sequence$$18.toLowerCase();
  this.sequence = v1287;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return
}
new AminoAcid("");
var v385 = AminoAcid.prototype;
v385.addCodon = addCodon;
var v386 = AminoAcid.prototype;
v386.count = count;
new CodonTable;
var v387 = CodonTable.prototype;
v387.determineValues = determineValues;
new Codon("", 0, 0, 0);
var v388 = Codon.prototype;
v388.resetValues = resetValues;
JAMScript.set(document, "onload", v4);
var v389 = document.getElementById("submitbtn");
JAMScript.set(v389, "onclick", v5);
var v390 = document.getElementById("clearbtn");
JAMScript.set(v390, "onclick", v6);

