function v4() {
  var v742 = document.forms;
  var v617 = v742[0];
  var v361 = v617.elements;
  var v5 = v361[0];
  v5.value = " ";
  return
}
function v3() {
  try {
    restDigest(document)
  }catch(e$$5) {
    var v6 = "The following error was encountered: " + e$$5;
    alert(v6)
  }
  return
}
function v2() {
  var v362 = document.main_form;
  var v7 = v362.main_submit;
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
  var v363 = arrayOfSequences.length;
  var v9 = v363 < 2;
  if(v9) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v364 = arrayOfTitles.length;
  var v11 = i$$1 < v364;
  for(;v11;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v743 = arrayOfTitles[i$$1]
    }
    var v618 = v743.search(/\S/);
    var v365 = v618 == -1;
    var v620 = !v365;
    if(v620) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v814 = arrayOfSequences[i$$1]
      }
      var v744 = v814.search(/\S/);
      var v619 = v744 == -1;
      var v746 = !v619;
      if(v746) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v815 = arrayOfSequences[i$$1]
        }
        var v745 = v815.length;
        v619 = v745 != lengthOfAlign
      }
      v365 = v619
    }
    var v10 = v365;
    if(v10) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v366 = arrayOfTitles.length;
    v11 = i$$1 < v366
  }
  return true
}
function checkCodonTable(codonTable) {
  var v621 = codonTable.search(/AmAcid/);
  var v367 = v621 == -1;
  var v623 = !v367;
  if(v623) {
    var v747 = codonTable.search(/Codon/);
    var v622 = v747 == -1;
    var v749 = !v622;
    if(v749) {
      var v816 = codonTable.search(/Number/);
      var v748 = v816 == -1;
      var v818 = !v748;
      if(v818) {
        var v867 = codonTable.search(/\/1000/);
        var v817 = v867 == -1;
        var v869 = !v817;
        if(v869) {
          var v868 = codonTable.search(/Fraction\s*\.\./);
          v817 = v868 == -1
        }
        v748 = v817
      }
      v622 = v748
    }
    v367 = v622
  }
  var v12 = v367;
  if(v12) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v624 = formElement.value;
  var v368 = v624.search(/\S/);
  var v13 = v368 == -1;
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
  var v369 = arrayOfPatterns.length;
  var v16 = z$$2 < v369;
  for(;v16;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v625 = arrayOfPatterns[z$$2]
    }
    var v370 = v625.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v14 = v370 == -1;
    if(v14) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v626 = arrayOfPatterns[z$$2]
    }
    var v371 = moreExpressionCheck(v626);
    var v15 = v371 == false;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v372 = arrayOfPatterns.length;
    v16 = z$$2 < v372
  }
  var v17 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v17);
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v18);
  var j = 0;
  var v373 = arrayOfPatterns.length;
  var v25 = j < v373;
  for(;v25;) {
    var v19 = geneticCodeMatchExp;
    var v20 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v750 = arrayOfPatterns[j]
    }
    var v627 = v750.match(/\/.+\//);
    var v374 = v627 + "gi";
    if(JAMScript.isEval(eval)) {
      var v992 = eval("introspect(JAMScript.introspectors.processAll) { " + v374 + " }")
    }else {
      var v992 = JAMScript.call(eval, null, [v374])
    }
    v19[v20] = v992;
    var v21 = geneticCodeMatchResult;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v628 = arrayOfPatterns[j]
    }
    var v375 = v628.match(/=[a-zA-Z\*]/);
    var v993 = v375.toString();
    v21[v22] = v993;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v376 = geneticCodeMatchResult[j]
    }
    var v994 = v376.replace(/=/g, "");
    v23[v24] = v994;
    j = j + 1;
    var v377 = arrayOfPatterns.length;
    v25 = j < v377
  }
  var i$$2 = 0;
  var v629 = testSequence.length;
  var v378 = v629 - 3;
  var v32 = i$$2 <= v378;
  for(;v32;) {
    var v26 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v26);
    j = 0;
    var v379 = geneticCodeMatchExp.length;
    var v30 = j < v379;
    for(;v30;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v630 = geneticCodeMatchExp[j]
      }
      var v380 = codon.search(v630);
      var v29 = v380 != -1;
      if(v29) {
        var v28 = oneMatch == true;
        if(v28) {
          var v381 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v27 = v381 + ".";
          alert(v27);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v382 = geneticCodeMatchExp.length;
      v30 = j < v382
    }
    var v31 = oneMatch == false;
    if(v31) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v631 = testSequence.length;
    var v383 = v631 - 3;
    v32 = i$$2 <= v383
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v384 = arrayOfPatterns$$1.length;
  var v34 = z$$3 < v384;
  for(;v34;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v632 = arrayOfPatterns$$1[z$$3]
    }
    var v385 = v632.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v33 = v385 != -1;
    if(v33) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v386 = arrayOfPatterns$$1.length;
    v34 = z$$3 < v386
  }
  var i$$3 = 0;
  var v387 = arrayOfPatterns$$1.length;
  var v38 = i$$3 < v387;
  for(;v38;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v633 = arrayOfPatterns$$1[i$$3]
    }
    var v388 = "[" + v633;
    var v35 = v388 + "]";
    var re = new RegExp(v35, "gi");
    var j$$1 = i$$3 + 1;
    var v389 = arrayOfPatterns$$1.length;
    var v37 = j$$1 < v389;
    for(;v37;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v634 = arrayOfPatterns$$1[j$$1]
      }
      var v390 = v634.search(re);
      var v36 = v390 != -1;
      if(v36) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v391 = arrayOfPatterns$$1.length;
      v37 = j$$1 < v391
    }
    i$$3 = i$$3 + 1;
    var v392 = arrayOfPatterns$$1.length;
    v38 = i$$3 < v392
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v393 = arrayOfPatterns$$2.length;
  var v41 = z$$4 < v393;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v635 = arrayOfPatterns$$2[z$$4]
    }
    var v394 = v635.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v39 = v394 == -1;
    if(v39) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v636 = arrayOfPatterns$$2[z$$4]
    }
    var v395 = moreExpressionCheck(v636);
    var v40 = v395 == false;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v396 = arrayOfPatterns$$2.length;
    v41 = z$$4 < v396
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v751 = getSequenceFromFasta(text$$7);
  var v637 = v751.replace(/[^A-Za-z]/g, "");
  var v397 = v637.length;
  var v43 = v397 > maxInput;
  if(v43) {
    var v398 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v42 = v398 + " characters.";
    alert(v42);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v399 = text$$8.length;
  var v45 = v399 > maxInput$$1;
  if(v45) {
    var v400 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v44 = v400 + " characters.";
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
  var v401 = alignArray.length;
  var v52 = v401 < 3;
  if(v52) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v402 = alignArray.length;
  var v54 = i$$4 < v402;
  for(;v54;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v638 = alignArray[i$$4]
    }
    var v403 = v638.search(/[^\s]+\s/);
    var v53 = v403 == -1;
    if(v53) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v404 = alignArray.length;
    v54 = i$$4 < v404
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
  var v405 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v57 = v405 != -1;
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
  var v406 = sequence$$2.length;
  var v58 = "&gt;results for " + v406;
  var stringToReturn = v58 + " residue sequence ";
  var v407 = fastaSequenceTitle.search(/[^\s]/);
  var v60 = v407 != -1;
  if(v60) {
    var v408 = stringToReturn + '"';
    var v59 = v408 + fastaSequenceTitle;
    stringToReturn = v59 + '"'
  }
  var v409 = stringToReturn + ' starting "';
  var v410 = sequence$$2.substring(0, 10);
  var v61 = v409 + v410;
  stringToReturn = v61 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v411 = sequenceOne.length;
  var v62 = "Search results for " + v411;
  var stringToReturn$$1 = v62 + " residue sequence ";
  var v412 = fastaSequenceTitleOne.search(/[^\s]/);
  var v64 = v412 != -1;
  if(v64) {
    var v413 = stringToReturn$$1 + '"';
    var v63 = v413 + fastaSequenceTitleOne;
    stringToReturn$$1 = v63 + '"'
  }
  var v414 = stringToReturn$$1 + ' starting "';
  var v415 = sequenceOne.substring(0, 10);
  var v65 = v414 + v415;
  stringToReturn$$1 = v65 + '"\n';
  var v416 = stringToReturn$$1 + "and ";
  var v417 = sequenceTwo.length;
  var v66 = v416 + v417;
  stringToReturn$$1 = v66 + " residue sequence ";
  var v418 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v68 = v418 != -1;
  if(v68) {
    var v419 = stringToReturn$$1 + '"';
    var v67 = v419 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v67 + '"'
  }
  var v420 = stringToReturn$$1 + ' starting "';
  var v421 = sequenceTwo.substring(0, 10);
  var v69 = v420 + v421;
  stringToReturn$$1 = v69 + '"';
  var v70 = '<div class="info">' + stringToReturn$$1;
  return v70 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v71 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v71);
  var j$$2 = 0;
  var v422 = arrayOfPatterns$$3.length;
  var v74 = j$$2 < v422;
  for(;v74;) {
    var v72 = geneticCodeMatchExp$$1;
    var v73 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v752 = arrayOfPatterns$$3[j$$2]
    }
    var v639 = v752.match(/\/.+\//);
    var v423 = v639 + "gi";
    if(JAMScript.isEval(eval)) {
      var v995 = eval("introspect(JAMScript.introspectors.processAll) { " + v423 + " }")
    }else {
      var v995 = JAMScript.call(eval, null, [v423])
    }
    v72[v73] = v995;
    j$$2 = j$$2 + 1;
    var v424 = arrayOfPatterns$$3.length;
    v74 = j$$2 < v424
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v75 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v75);
  var j$$3 = 0;
  var v425 = arrayOfPatterns$$4.length;
  var v80 = j$$3 < v425;
  for(;v80;) {
    var v76 = geneticCodeMatchResult$$1;
    var v77 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v640 = arrayOfPatterns$$4[j$$3]
    }
    var v426 = v640.match(/=[a-zA-Z\*]/);
    var v996 = v426.toString();
    v76[v77] = v996;
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v427 = geneticCodeMatchResult$$1[j$$3]
    }
    var v997 = v427.replace(/=/g, "");
    v78[v79] = v997;
    j$$3 = j$$3 + 1;
    var v428 = arrayOfPatterns$$4.length;
    v80 = j$$3 < v428
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v429 = sequence$$3.length;
  var v81 = "Results for " + v429;
  var stringToReturn$$2 = v81 + " residue sequence ";
  var v430 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v83 = v430 != -1;
  if(v83) {
    var v431 = stringToReturn$$2 + '"';
    var v82 = v431 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v82 + '"'
  }
  var v432 = stringToReturn$$2 + ' starting "';
  var v433 = sequence$$3.substring(0, 10);
  var v84 = v432 + v433;
  stringToReturn$$2 = v84 + '"';
  var v85 = '<div class="info">' + stringToReturn$$2;
  return v85 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v641 = "Results for " + topology;
  var v434 = v641 + " ";
  var v435 = sequence$$4.length;
  var v86 = v434 + v435;
  var stringToReturn$$3 = v86 + " residue sequence ";
  var v436 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v88 = v436 != -1;
  if(v88) {
    var v437 = stringToReturn$$3 + '"';
    var v87 = v437 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v87 + '"'
  }
  var v438 = stringToReturn$$3 + ' starting "';
  var v439 = sequence$$4.substring(0, 10);
  var v89 = v438 + v439;
  stringToReturn$$3 = v89 + '"';
  var v90 = '<div class="info">' + stringToReturn$$3;
  return v90 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v440 = sequenceOne$$1.length;
  var v91 = "Alignment results for " + v440;
  var stringToReturn$$4 = v91 + " residue sequence ";
  var v441 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v93 = v441 != -1;
  if(v93) {
    var v442 = stringToReturn$$4 + '"';
    var v92 = v442 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v92 + '"'
  }
  var v443 = stringToReturn$$4 + ' starting "';
  var v444 = sequenceOne$$1.substring(0, 10);
  var v94 = v443 + v444;
  stringToReturn$$4 = v94 + '"\n';
  var v445 = stringToReturn$$4 + "and ";
  var v446 = sequenceTwo$$1.length;
  var v95 = v445 + v446;
  stringToReturn$$4 = v95 + " residue sequence ";
  var v447 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v97 = v447 != -1;
  if(v97) {
    var v448 = stringToReturn$$4 + '"';
    var v96 = v448 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v96 + '"'
  }
  var v449 = stringToReturn$$4 + ' starting "';
  var v450 = sequenceTwo$$1.substring(0, 10);
  var v98 = v449 + v450;
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
    var v451 = Math.random();
    var v452 = components.length;
    var v100 = v451 * v452;
    tempNum = Math.floor(v100);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v101 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v453 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v102 = v453 != -1;
  if(v102) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v454 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v454 != -1;
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
  var v642 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v455 = v642 != -1;
  var v644 = !v455;
  if(v644) {
    var v753 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v643 = v753 != -1;
    var v755 = !v643;
    if(v755) {
      var v819 = expressionToCheck.search(/\[\]/);
      var v754 = v819 != -1;
      var v821 = !v754;
      if(v821) {
        var v870 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v820 = v870 != -1;
        var v872 = !v820;
        if(v872) {
          var v897 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v871 = v897 != -1;
          var v899 = !v871;
          if(v899) {
            var v922 = expressionToCheck.search(/\|\|/);
            var v898 = v922 != -1;
            var v924 = !v898;
            if(v924) {
              var v935 = expressionToCheck.search(/\/\|/);
              var v923 = v935 != -1;
              var v937 = !v923;
              if(v937) {
                var v946 = expressionToCheck.search(/\|\//);
                var v936 = v946 != -1;
                var v948 = !v936;
                if(v948) {
                  var v956 = expressionToCheck.search(/\[.\]/);
                  var v947 = v956 != -1;
                  var v958 = !v947;
                  if(v958) {
                    var v965 = expressionToCheck.search(/\</);
                    var v957 = v965 != -1;
                    var v967 = !v957;
                    if(v967) {
                      var v966 = expressionToCheck.search(/\>/);
                      v957 = v966 != -1
                    }
                    v947 = v957
                  }
                  v936 = v947
                }
                v923 = v936
              }
              v898 = v923
            }
            v871 = v898
          }
          v820 = v871
        }
        v754 = v820
      }
      v643 = v754
    }
    v455 = v643
  }
  var v105 = v455;
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
    var v998 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v998[2], v998[1], v998[0]);
  outputWindow.focus();
  var v110 = outputWindow.document;
  var v756 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v645 = v756 + "<head>\n";
  var v456 = v645 + "<title>Sequence Manipulation Suite</title>\n";
  var v111 = v456 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v110.write, v110, [v111]);
  if(isColor) {
    var v112 = outputWindow.document;
    var v983 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v978 = v983 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v973 = v978 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v968 = v973 + "div.info {font-weight: bold}\n";
    var v959 = v968 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v949 = v959 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v938 = v949 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v925 = v938 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v900 = v925 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v873 = v900 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v822 = v873 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v757 = v822 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v646 = v757 + "td.many {color: #000000}\n";
    var v457 = v646 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v113 = v457 + "</style>\n";
    JAMScript.call(v112.write, v112, [v113])
  }else {
    var v114 = outputWindow.document;
    var v988 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v984 = v988 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v979 = v984 + "div.title {display: none}\n";
    var v974 = v979 + "div.info {font-weight: bold}\n";
    var v969 = v974 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v960 = v969 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v950 = v960 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v939 = v950 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v926 = v939 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v901 = v926 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v874 = v901 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v823 = v874 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v758 = v823 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v647 = v758 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v458 = v647 + "img {display: none}\n";
    var v115 = v458 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }
  var v116 = outputWindow.document;
  var v759 = "</head>\n" + '<body class="main">\n';
  var v648 = v759 + '<div class="title">';
  var v459 = v648 + title$$7;
  var v117 = v459 + " results</div>\n";
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
    var v999 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v999[2], v999[1], v999[0]);
  outputWindow.focus();
  var v118 = outputWindow.document;
  var v760 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v649 = v760 + "<head>\n";
  var v460 = v649 + "<title>Sequence Manipulation Suite</title>\n";
  var v119 = v460 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v118.write, v118, [v119]);
  if(isBackground) {
    var v120 = outputWindow.document;
    var v985 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v980 = v985 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v975 = v980 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v970 = v975 + "div.info {font-weight: bold}\n";
    var v961 = v970 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v951 = v961 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v940 = v951 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v927 = v940 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v902 = v927 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v875 = v902 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v824 = v875 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v761 = v824 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v650 = v761 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v461 = v650 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v121 = v461 + "</style>\n";
    JAMScript.call(v120.write, v120, [v121])
  }else {
    var v122 = outputWindow.document;
    var v991 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v989 = v991 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v986 = v989 + "div.title {display: none}\n";
    var v981 = v986 + "div.info {font-weight: bold}\n";
    var v976 = v981 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v971 = v976 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v962 = v971 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v952 = v962 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v941 = v952 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v928 = v941 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v903 = v928 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v876 = v903 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v825 = v876 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v762 = v825 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v651 = v762 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v462 = v651 + "img {display: none}\n";
    var v123 = v462 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }
  var v124 = outputWindow.document;
  var v763 = "</head>\n" + '<body class="main">\n';
  var v652 = v763 + '<div class="title">';
  var v463 = v652 + title$$9;
  var v125 = v463 + " results</div>\n";
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
  var v464 = dnaSequence$$1.search(/./);
  var v126 = v464 != -1;
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
  var v465 = testArray[0];
  var v130 = v465 != testString;
  if(v130) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v466 = testString.search(re$$2);
  var v131 = v466 == -1;
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
  var v467 = testNum.toFixed(3);
  var v134 = v467 != 2489.824;
  if(v134) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v468 = testNum.toPrecision(5);
  var v135 = v468 != 2489.8;
  if(v135) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v469 = theNumber$$1.search(/\d/);
  var v136 = v469 == -1;
  if(v136) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v653 = emblFile.search(/ID/);
  var v470 = v653 == -1;
  var v655 = !v470;
  if(v655) {
    var v764 = emblFile.search(/AC/);
    var v654 = v764 == -1;
    var v766 = !v654;
    if(v766) {
      var v826 = emblFile.search(/DE/);
      var v765 = v826 == -1;
      var v828 = !v765;
      if(v828) {
        var v827 = emblFile.search(/SQ/);
        v765 = v827 == -1
      }
      v654 = v765
    }
    v470 = v654
  }
  var v137 = v470;
  if(v137) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v471 = theNumber$$2.search(/\d/);
  var v138 = v471 == -1;
  if(v138) {
    alert("Please enter a number.");
    return false
  }
  var v140 = theNumber$$2 > maxInput$$2;
  if(v140) {
    var v472 = "Please enter a number less than or equal to " + maxInput$$2;
    var v139 = v472 + ".";
    alert(v139);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v473 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v141 = v473 != -1;
  if(v141) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v474 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v142 = v474 != -1;
  if(v142) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v656 = genBankFile.search(/LOCUS/);
  var v475 = v656 == -1;
  var v658 = !v475;
  if(v658) {
    var v767 = genBankFile.search(/DEFINITION/);
    var v657 = v767 == -1;
    var v769 = !v657;
    if(v769) {
      var v829 = genBankFile.search(/ACCESSION/);
      var v768 = v829 == -1;
      var v831 = !v768;
      if(v831) {
        var v830 = genBankFile.search(/ORIGIN/);
        v768 = v830 == -1
      }
      v657 = v768
    }
    v475 = v657
  }
  var v143 = v475;
  if(v143) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v659 = genBankFile$$1.search(/LOCUS/);
  var v476 = v659 == -1;
  var v661 = !v476;
  if(v661) {
    var v770 = genBankFile$$1.search(/DEFINITION/);
    var v660 = v770 == -1;
    var v772 = !v660;
    if(v772) {
      var v832 = genBankFile$$1.search(/ACCESSION/);
      var v771 = v832 == -1;
      var v834 = !v771;
      if(v834) {
        var v833 = genBankFile$$1.search(/ORIGIN/);
        v771 = v833 == -1
      }
      v660 = v771
    }
    v476 = v660
  }
  var v144 = v476;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v477 = genBankFile$$1.search(/FEATURES {13}/);
  var v145 = v477 == -1;
  if(v145) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v662 = emblFile$$1.search(/ID/);
  var v478 = v662 == -1;
  var v664 = !v478;
  if(v664) {
    var v773 = emblFile$$1.search(/AC/);
    var v663 = v773 == -1;
    var v775 = !v663;
    if(v775) {
      var v835 = emblFile$$1.search(/DE/);
      var v774 = v835 == -1;
      var v837 = !v774;
      if(v837) {
        var v836 = emblFile$$1.search(/SQ/);
        v774 = v836 == -1
      }
      v663 = v774
    }
    v478 = v663
  }
  var v146 = v478;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v479 = emblFile$$1.search(/^FT/m);
  var v147 = v479 == -1;
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
    var v480 = basePerLine / groupSize;
    var v152 = j$$6 <= v480;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v149 = lineOfText;
        var v481 = k + i$$5;
        var v150 = text$$10.charAt(v481);
        lineOfText = v149 + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v482 = basePerLine / groupSize;
      v152 = j$$6 <= v482
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
    var v483 = adjustment < 0;
    if(v483) {
      v483 = adjusted >= 0
    }
    var v156 = v483;
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
    var v484 = basePerLine$$2 / groupSize$$2;
    var v165 = j$$7 <= v484;
    for(;v165;) {
      var v160 = k$$1 < groupSize$$2;
      for(;v160;) {
        var v485 = i$$6 + k$$1;
        var v157 = v485 >= stopBase$$2;
        if(v157) {
          break
        }
        var v158 = lineOfText$$1;
        var v486 = k$$1 + i$$6;
        var v159 = text$$12.charAt(v486);
        lineOfText$$1 = v158 + v159;
        k$$1 = k$$1 + 1;
        v160 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v163 = numberPosition$$1 == "above";
      if(v163) {
        var v161 = aboveNum;
        var v487 = adjustNumbering(i$$6, numberingAdjustment);
        var v162 = rightNum(v487, "", groupSize$$2, tabIn$$3);
        aboveNum = v161 + v162
      }
      var v164 = i$$6 >= stopBase$$2;
      if(v164) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v488 = basePerLine$$2 / groupSize$$2;
      v165 = j$$7 <= v488
    }
    var v188 = numberPosition$$1 == "left";
    if(v188) {
      var v166 = outputWindow.document;
      var v776 = adjustNumbering(lineNum, numberingAdjustment);
      var v665 = rightNum(v776, "", 8, tabIn$$3);
      var v489 = v665 + lineOfText$$1;
      var v167 = v489 + "\n";
      JAMScript.call(v166.write, v166, [v167]);
      var v171 = strands$$1 == "two";
      if(v171) {
        var v168 = outputWindow.document;
        var v777 = adjustNumbering(lineNum, numberingAdjustment);
        var v666 = rightNum(v777, "", 8, tabIn$$3);
        var v667 = complement(lineOfText$$1);
        var v490 = v666 + v667;
        var v169 = v490 + "\n";
        JAMScript.call(v168.write, v168, [v169]);
        var v170 = outputWindow.document;
        JAMScript.call(v170.write, v170, ["\n"])
      }
    }else {
      var v187 = numberPosition$$1 == "right";
      if(v187) {
        var v172 = outputWindow.document;
        var v668 = lineOfText$$1;
        var v669 = adjustNumbering(i$$6, numberingAdjustment);
        var v491 = v668 + v669;
        var v173 = v491 + "\n";
        JAMScript.call(v172.write, v172, [v173]);
        var v177 = strands$$1 == "two";
        if(v177) {
          var v174 = outputWindow.document;
          var v670 = complement(lineOfText$$1);
          var v671 = adjustNumbering(i$$6, numberingAdjustment);
          var v492 = v670 + v671;
          var v175 = v492 + "\n";
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
            var v493 = complement(lineOfText$$1);
            var v183 = v493 + "\n";
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
    var v494 = basePerLine$$3 / groupSize$$3;
    var v198 = j$$8 <= v494;
    for(;v198;) {
      var v193 = k$$2 < groupSize$$3;
      for(;v193;) {
        var v495 = i$$7 + k$$2;
        var v190 = v495 >= stopBase$$3;
        if(v190) {
          break
        }
        var v191 = lineOfText$$2;
        var v496 = k$$2 + i$$7;
        var v192 = text$$13.charAt(v496);
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
      var v497 = basePerLine$$3 / groupSize$$3;
      v198 = j$$8 <= v497
    }
    var v209 = numberPosition$$2 == "left";
    if(v209) {
      var v199 = outputWindow.document;
      var v672 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v498 = v672 + lineOfText$$2;
      var v200 = v498 + "\n";
      JAMScript.call(v199.write, v199, [v200])
    }else {
      var v208 = numberPosition$$2 == "right";
      if(v208) {
        var v201 = outputWindow.document;
        var v499 = lineOfText$$2 + i$$7;
        var v202 = v499 + "\n";
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
  var v673 = sequence$$13.length;
  var v500 = v673 <= firstIndexToMutate;
  var v675 = !v500;
  if(v675) {
    var v674 = lastIndexToMutate < 0;
    var v778 = !v674;
    if(v778) {
      v674 = lastIndexToMutate <= firstIndexToMutate
    }
    v500 = v674
  }
  var v211 = v500;
  if(v211) {
    numMut = 0
  }
  var i$$8 = 0;
  var v219 = i$$8 < numMut;
  for(;v219;) {
    maxNum = sequence$$13.length;
    var v501 = Math.random();
    var v212 = v501 * maxNum;
    randNum = Math.floor(v212);
    var v502 = randNum < firstIndexToMutate;
    var v676 = !v502;
    if(v676) {
      v502 = randNum > lastIndexToMutate
    }
    var v213 = v502;
    if(v213) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v219 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v503 = Math.random();
      var v504 = components$$1.length;
      var v214 = v503 * v504;
      componentsIndex = Math.round(v214);
      var v505 = components$$1.length;
      var v215 = componentsIndex == v505;
      if(v215) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v506 = components$$1[componentsIndex]
      }
      var v216 = v506 != currentChar;
      if(v216) {
        needNewChar = false
      }
    }
    var v507 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v508 = components$$1[componentsIndex]
    }
    var v217 = v507 + v508;
    var v509 = randNum + 1;
    var v510 = sequence$$13.length;
    var v218 = sequence$$13.substring(v509, v510);
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
    var v511 = Math.random();
    var v512 = components$$2.length;
    var v222 = v511 * v512;
    tempNum$$1 = Math.floor(v222);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v513 = sequence$$14.length;
    var v225 = v513 == 60;
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
    var v779 = sequence$$15.length;
    var v677 = v779 - lookAhead;
    var v678 = sequence$$15.length;
    var v514 = sequence$$15.substring(v677, v678);
    var v230 = v514 + sequence$$15;
    var v231 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v230 + v231;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v233 = outputWindow.document;
  JAMScript.call(v233.write, v233, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v234 = outputWindow.document;
  var v780 = '<tr><td class="title" width="200px">' + "Site:";
  var v679 = v780 + '</td><td class="title">';
  var v515 = v679 + "Positions:";
  var v235 = v515 + "</td></tr>\n";
  JAMScript.call(v234.write, v234, [v235]);
  var i$$9 = 0;
  var v516 = arrayOfItems.length;
  var v251 = i$$9 < v516;
  for(;v251;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v517 = arrayOfItems[i$$9]
    }
    var v236 = v517.match(/\/.+\//);
    matchExp = v236 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v781 = arrayOfItems[i$$9]
    }
    var v680 = v781.match(/\)\D*\d+/);
    var v518 = v680.toString();
    var v237 = v518.replace(/\)\D*/, "");
    cutDistance = parseFloat(v237);
    var v243 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v243;) {
      var v238 = matchExp.lastIndex;
      matchPosition = v238 - cutDistance;
      var v519 = matchPosition >= lowerLimit;
      if(v519) {
        v519 = matchPosition < upperLimit
      }
      var v241 = v519;
      if(v241) {
        timesFound = timesFound + 1;
        var v239 = tempString$$1 + ", ";
        var v520 = matchPosition - shiftValue;
        var v240 = v520 + 1;
        tempString$$1 = v239 + v240
      }
      var v521 = matchExp.lastIndex;
      var v681 = RegExp.lastMatch;
      var v522 = v681.length;
      var v242 = v521 - v522;
      matchExp.lastIndex = v242 + 1;
      v243 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v523 = tempString$$1.search(/\d/);
    var v244 = v523 != -1;
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
    var v929 = '<tr><td class="' + backGroundClass;
    var v904 = v929 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v953 = arrayOfItems[i$$9]
    }
    var v942 = v953.match(/\([^\(]+\)/);
    var v930 = v942.toString();
    var v905 = v930.replace(/\(|\)/g, "");
    var v877 = v904 + v905;
    var v838 = v877 + '</td><td class="';
    var v782 = v838 + backGroundClass;
    var v682 = v782 + '">';
    var v524 = v682 + tempString$$1;
    var v250 = v524 + "</td></tr>\n";
    JAMScript.call(v249.write, v249, [v250]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v525 = arrayOfItems.length;
    v251 = i$$9 < v525
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
  var v878 = '<tr><td class="title">' + "Pattern:";
  var v839 = v878 + '</td><td class="title">';
  var v783 = v839 + "Times found:";
  var v683 = v783 + '</td><td class="title">';
  var v526 = v683 + "Percentage:";
  var v255 = v526 + "</td></tr>\n";
  JAMScript.call(v254.write, v254, [v255]);
  var i$$10 = 0;
  var v527 = arrayOfItems$$1.length;
  var v264 = i$$10 < v527;
  for(;v264;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v528 = arrayOfItems$$1[i$$10]
    }
    var v256 = v528.match(/\/[^\/]+\//);
    var matchExp$$1 = v256 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v529 = sequence$$16.search(matchExp$$1);
    var v258 = v529 != -1;
    if(v258) {
      var v257 = sequence$$16.match(matchExp$$1);
      tempNumber = v257.length
    }
    var percentage = 0;
    var v684 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v840 = arrayOfItems$$1[i$$10]
    }
    var v784 = v840.match(/\d+/);
    var v685 = parseFloat(v784);
    var v530 = v684 - v685;
    var v261 = v530 > 0;
    if(v261) {
      var v259 = 100 * tempNumber;
      var v531 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v785 = arrayOfItems$$1[i$$10]
      }
      var v686 = v785.match(/\d+/);
      var v532 = parseFloat(v686);
      var v260 = v531 - v532;
      percentage = v259 / v260
    }
    var v262 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v954 = arrayOfItems$$1[i$$10]
    }
    var v943 = v954.match(/\([^\(]+\)\b/);
    var v931 = v943.toString();
    var v906 = v931.replace(/\(|\)/g, "");
    var v879 = "<tr><td>" + v906;
    var v841 = v879 + "</td><td>";
    var v786 = v841 + tempNumber;
    var v687 = v786 + "</td><td>";
    var v688 = percentage.toFixed(2);
    var v533 = v687 + v688;
    var v263 = v533 + "</td></tr>\n";
    JAMScript.call(v262.write, v262, [v263]);
    i$$10 = i$$10 + 1;
    var v534 = arrayOfItems$$1.length;
    v264 = i$$10 < v534
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
  var v535 = sequence$$17.length;
  var v272 = v535 > 0;
  for(;v272;) {
    maxNum$$1 = sequence$$17.length;
    var v536 = Math.random();
    var v266 = v536 * maxNum$$1;
    randNum$$1 = Math.floor(v266);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v267 = randNum$$1 + 1;
    var v268 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v267, v268);
    sequence$$17 = tempString1 + tempString2;
    var v537 = tempSeq.length;
    var v271 = v537 == 60;
    if(v271) {
      var v269 = outputWindow.document;
      var v270 = tempSeq + "\n";
      JAMScript.call(v269.write, v269, [v270]);
      tempSeq = ""
    }
    var v538 = sequence$$17.length;
    v272 = v538 > 0
  }
  var v273 = outputWindow.document;
  var v274 = tempSeq + "\n";
  JAMScript.call(v273.write, v273, [v274]);
  return true
}
function restDigest(theDocument) {
  var newDna = "";
  var maxInput$$3 = 1E5;
  var v539 = testScript();
  var v275 = v539 == false;
  if(v275) {
    return false
  }
  var restrictionFragments = new Array;
  var restrictionFragment;
  var v907 = theDocument.forms;
  var v880 = v907[0];
  var v842 = v880.elements;
  var v787 = v842[0];
  var v689 = checkFormElement(v787);
  var v540 = v689 == false;
  var v691 = !v540;
  if(v691) {
    var v932 = theDocument.forms;
    var v908 = v932[0];
    var v881 = v908.elements;
    var v843 = v881[0];
    var v788 = v843.value;
    var v690 = checkSequenceLength(v788, maxInput$$3);
    v540 = v690 == false
  }
  var v276 = v540;
  if(v276) {
    return false
  }
  var v844 = theDocument.forms;
  var v789 = v844[0];
  var v692 = v789.elements;
  var v541 = v692[0];
  var v277 = v541.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v277);
  var i$$11 = 0;
  var v542 = arrayOfFasta$$1.length;
  var v283 = i$$11 < v542;
  for(;v283;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v278 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v278);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v279 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v279);
    newDna = removeNonDna(newDna);
    var v909 = theDocument.forms;
    var v882 = v909[0];
    var v845 = v882.elements;
    var v790 = v845[4];
    var v693 = v790.options;
    var v910 = theDocument.forms;
    var v883 = v910[0];
    var v846 = v883.elements;
    var v791 = v846[4];
    var v694 = v791.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v543 = v693[v694]
    }
    var v280 = v543.value;
    var v281 = newDna.length;
    var v282 = newDna.length;
    restrictionFragment = new RestrictionFragment(v280, title, newDna, 1, v281, "sequence start", "sequence end", v282);
    restrictionFragments.push(restrictionFragment);
    i$$11 = i$$11 + 1;
    var v544 = arrayOfFasta$$1.length;
    v283 = i$$11 < v544
  }
  var v911 = theDocument.forms;
  var v884 = v911[0];
  var v847 = v884.elements;
  var v792 = v847[5];
  var v695 = v792.options;
  var v912 = theDocument.forms;
  var v885 = v912[0];
  var v848 = v885.elements;
  var v793 = v848[5];
  var v696 = v793.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v545 = v695[v696]
  }
  var v284 = v545.value;
  restrictionFragments = digest(restrictionFragments, v284);
  var v913 = theDocument.forms;
  var v886 = v913[0];
  var v849 = v886.elements;
  var v794 = v849[6];
  var v697 = v794.options;
  var v914 = theDocument.forms;
  var v887 = v914[0];
  var v850 = v887.elements;
  var v795 = v850[6];
  var v698 = v795.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v546 = v697[v698]
  }
  var v285 = v546.value;
  restrictionFragments = digest(restrictionFragments, v285);
  var v915 = theDocument.forms;
  var v888 = v915[0];
  var v851 = v888.elements;
  var v796 = v851[7];
  var v699 = v796.options;
  var v916 = theDocument.forms;
  var v889 = v916[0];
  var v852 = v889.elements;
  var v797 = v852[7];
  var v700 = v797.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v547 = v699[v700]
  }
  var v286 = v547.value;
  restrictionFragments = digest(restrictionFragments, v286);
  restrictionFragments.sort(restrictionFragmentSorter);
  openWindow("Restriction Digest");
  openPre();
  i$$11 = 0;
  var v548 = restrictionFragments.length;
  var v290 = i$$11 < v548;
  for(;v290;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v287 = restrictionFragments[i$$11]
    }
    JAMScript.call(v287.correctPositions, v287, []);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v288 = restrictionFragments[i$$11]
    }
    var v917 = theDocument.forms;
    var v890 = v917[0];
    var v853 = v890.elements;
    var v798 = v853[4];
    var v701 = v798.options;
    var v918 = theDocument.forms;
    var v891 = v918[0];
    var v854 = v891.elements;
    var v799 = v854[4];
    var v702 = v799.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v549 = v701[v702]
    }
    var v289 = v549.value;
    JAMScript.call(v288.writeFragment, v288, [v289]);
    i$$11 = i$$11 + 1;
    var v550 = restrictionFragments.length;
    v290 = i$$11 < v550
  }
  closePre();
  closeWindow();
  return true
}
function digest(arrayOfRestrictionFragments, enzyme) {
  var v291 = enzyme == "";
  if(v291) {
    return arrayOfRestrictionFragments
  }
  var newFragments = new Array;
  var positions = new Array;
  var matchPosition$$1 = 0;
  var v292 = enzyme.match(/\/.+\//);
  var matchExp$$2 = v292.toString();
  matchExp$$2 = matchExp$$2.replace(/\//g, "");
  matchExp$$2 = new RegExp(matchExp$$2, "gi");
  var v703 = enzyme.match(/\)\D*\d+/);
  var v551 = v703.toString();
  var v293 = v551.replace(/\)\D*/, "");
  var cutDistance$$1 = parseInt(v293);
  var v552 = enzyme.match(/\([^\(]+\)/);
  var v294 = v552.toString();
  var enzymeName = v294.replace(/\(|\)/g, "");
  var matchArray$$2;
  var wasCut = false;
  var restrictionFragmentOne;
  var restrictionFragmentTwo;
  var previousCutPosition;
  var previousEnzyme;
  var previousStartPosition;
  var startRestrictionFragment;
  var lookAhead$$1 = 50;
  var lowerLimit$$1;
  var upperLimit$$1;
  var shiftValue$$1;
  var i$$12 = 0;
  var v553 = arrayOfRestrictionFragments.length;
  var v337 = i$$12 < v553;
  for(;v337;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v704 = arrayOfRestrictionFragments[i$$12]
    }
    var v554 = v704.topology;
    var v305 = v554 == "circular";
    if(v305) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v705 = arrayOfRestrictionFragments[i$$12]
      }
      var v555 = v705.sequence;
      var v295 = v555.substring(0, lookAhead$$1);
      shiftValue$$1 = v295.length;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v800 = arrayOfRestrictionFragments[i$$12]
      }
      var v706 = v800.sequence;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v892 = arrayOfRestrictionFragments[i$$12]
      }
      var v855 = v892.sequence;
      var v801 = v855.length;
      var v707 = v801 - lookAhead$$1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v856 = arrayOfRestrictionFragments[i$$12]
      }
      var v802 = v856.sequence;
      var v708 = v802.length;
      var v556 = v706.substring(v707, v708);
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v709 = arrayOfRestrictionFragments[i$$12]
      }
      var v557 = v709.sequence;
      var v296 = v556 + v557;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v710 = arrayOfRestrictionFragments[i$$12]
      }
      var v558 = v710.sequence;
      var v297 = v558.substring(0, lookAhead$$1);
      var extendedSequence = v296 + v297;
      lowerLimit$$1 = 0 + shiftValue$$1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v711 = arrayOfRestrictionFragments[i$$12]
      }
      var v559 = v711.sequence;
      var v298 = v559.length;
      upperLimit$$1 = v298 + shiftValue$$1;
      var v302 = matchArray$$2 = matchExp$$2.exec(extendedSequence);
      for(;v302;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        var v560 = matchPosition$$1 >= lowerLimit$$1;
        if(v560) {
          v560 = matchPosition$$1 < upperLimit$$1
        }
        var v300 = v560;
        if(v300) {
          var v299 = matchPosition$$1 - shiftValue$$1;
          positions.push(v299);
          wasCut = true
        }
        var v561 = matchExp$$2.lastIndex;
        var v712 = RegExp.lastMatch;
        var v562 = v712.length;
        var v301 = v561 - v562;
        matchExp$$2.lastIndex = v301 + 1;
        v302 = matchArray$$2 = matchExp$$2.exec(extendedSequence)
      }
    }else {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v713 = arrayOfRestrictionFragments[i$$12]
      }
      var v563 = v713.sequence;
      var v304 = matchArray$$2 = matchExp$$2.exec(v563);
      for(;v304;) {
        matchPosition$$1 = matchExp$$2.lastIndex;
        matchPosition$$1 = matchPosition$$1 - cutDistance$$1;
        positions.push(matchPosition$$1);
        wasCut = true;
        var v564 = matchExp$$2.lastIndex;
        var v714 = RegExp.lastMatch;
        var v565 = v714.length;
        var v303 = v564 - v565;
        matchExp$$2.lastIndex = v303 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v715 = arrayOfRestrictionFragments[i$$12]
        }
        var v566 = v715.sequence;
        v304 = matchArray$$2 = matchExp$$2.exec(v566)
      }
    }
    var v336 = !wasCut;
    if(v336) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v306 = arrayOfRestrictionFragments[i$$12]
      }
      newFragments.push(v306)
    }else {
      wasCut = false;
      previousCutPosition = 0;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v307 = arrayOfRestrictionFragments[i$$12]
      }
      previousEnzyme = v307.startEnzyme;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v308 = arrayOfRestrictionFragments[i$$12]
      }
      previousStartPosition = v308.start;
      var j$$10 = 0;
      var v567 = positions.length;
      var v335 = j$$10 < v567;
      for(;v335;) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v716 = arrayOfRestrictionFragments[i$$12]
        }
        var v568 = v716.topology;
        var v318 = v568 == "circular";
        if(v318) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v309 = arrayOfRestrictionFragments[i$$12]
          }
          v309.topology = "linear";
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v569 = arrayOfRestrictionFragments[i$$12]
          }
          var v310 = v569.sourceName;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v717 = arrayOfRestrictionFragments[i$$12]
          }
          var v570 = v717.sequence;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v571 = positions[j$$10]
          }
          var v311 = v570.substring(previousCutPosition, v571);
          var v718 = previousStartPosition;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v893 = arrayOfRestrictionFragments[i$$12]
          }
          var v857 = v893.sequence;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v858 = positions[j$$10]
          }
          var v803 = v857.substring(previousCutPosition, v858);
          var v719 = v803.length;
          var v572 = v718 + v719;
          var v312 = v572 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v573 = arrayOfRestrictionFragments[i$$12]
          }
          var v313 = v573.originalLength;
          startRestrictionFragment = new RestrictionFragment("linear", v310, v311, previousStartPosition, v312, previousEnzyme, enzymeName, v313)
        }else {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v574 = arrayOfRestrictionFragments[i$$12]
          }
          var v314 = v574.sourceName;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v720 = arrayOfRestrictionFragments[i$$12]
          }
          var v575 = v720.sequence;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v576 = positions[j$$10]
          }
          var v315 = v575.substring(previousCutPosition, v576);
          var v721 = previousStartPosition;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v894 = arrayOfRestrictionFragments[i$$12]
          }
          var v859 = v894.sequence;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v860 = positions[j$$10]
          }
          var v804 = v859.substring(previousCutPosition, v860);
          var v722 = v804.length;
          var v577 = v721 + v722;
          var v316 = v577 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v578 = arrayOfRestrictionFragments[i$$12]
          }
          var v317 = v578.originalLength;
          restrictionFragmentOne = new RestrictionFragment("linear", v314, v315, previousStartPosition, v316, previousEnzyme, enzymeName, v317);
          newFragments.push(restrictionFragmentOne)
        }
        var v723 = positions.length;
        var v579 = v723 - 1;
        var v332 = j$$10 == v579;
        if(v332) {
          var v331 = startRestrictionFragment == null;
          if(v331) {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v580 = arrayOfRestrictionFragments[i$$12]
            }
            var v319 = v580.sourceName;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v724 = arrayOfRestrictionFragments[i$$12]
            }
            var v581 = v724.sequence;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v582 = positions[j$$10]
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v805 = arrayOfRestrictionFragments[i$$12]
            }
            var v725 = v805.sequence;
            var v583 = v725.length;
            var v320 = v581.substring(v582, v583);
            var v584 = previousStartPosition;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v861 = arrayOfRestrictionFragments[i$$12]
            }
            var v806 = v861.sequence;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v807 = positions[j$$10]
            }
            var v726 = v806.substring(previousCutPosition, v807);
            var v585 = v726.length;
            var v321 = v584 + v585;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v586 = arrayOfRestrictionFragments[i$$12]
            }
            var v322 = v586.stop;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v587 = arrayOfRestrictionFragments[i$$12]
            }
            var v323 = v587.stopEnzyme;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v588 = arrayOfRestrictionFragments[i$$12]
            }
            var v324 = v588.originalLength;
            restrictionFragmentTwo = new RestrictionFragment("linear", v319, v320, v321, v322, enzymeName, v323, v324);
            newFragments.push(restrictionFragmentTwo)
          }else {
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v589 = arrayOfRestrictionFragments[i$$12]
            }
            var v325 = v589.sourceName;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v808 = arrayOfRestrictionFragments[i$$12]
            }
            var v727 = v808.sequence;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v728 = positions[j$$10]
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v862 = arrayOfRestrictionFragments[i$$12]
            }
            var v809 = v862.sequence;
            var v729 = v809.length;
            var v590 = v727.substring(v728, v729);
            var v591 = startRestrictionFragment.sequence;
            var v326 = v590 + v591;
            var v592 = previousStartPosition;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v863 = arrayOfRestrictionFragments[i$$12]
            }
            var v810 = v863.sequence;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v811 = positions[j$$10]
            }
            var v730 = v810.substring(previousCutPosition, v811);
            var v593 = v730.length;
            var v327 = v592 + v593;
            var v328 = startRestrictionFragment.stop;
            var v329 = startRestrictionFragment.stopEnzyme;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v594 = arrayOfRestrictionFragments[i$$12]
            }
            var v330 = v594.originalLength;
            restrictionFragmentTwo = new RestrictionFragment("linear", v325, v326, v327, v328, enzymeName, v329, v330);
            newFragments.push(restrictionFragmentTwo)
          }
        }
        previousCutPosition = positions[j$$10];
        previousEnzyme = enzymeName;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v595 = arrayOfRestrictionFragments[i$$12]
        }
        var v333 = v595.start;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v334 = positions[j$$10]
        }
        previousStartPosition = v333 + v334;
        j$$10 = j$$10 + 1;
        var v596 = positions.length;
        v335 = j$$10 < v596
      }
    }
    positions = new Array;
    startRestrictionFragment = null;
    i$$12 = i$$12 + 1;
    var v597 = arrayOfRestrictionFragments.length;
    v337 = i$$12 < v597
  }
  return newFragments
}
function restrictionFragmentSorter(a, b) {
  var v731 = a.sequence;
  var v598 = v731.length;
  var v732 = b.sequence;
  var v599 = v732.length;
  var v338 = v598 < v599;
  if(v338) {
    return 1
  }
  var v733 = a.sequence;
  var v600 = v733.length;
  var v734 = b.sequence;
  var v601 = v734.length;
  var v339 = v600 > v601;
  if(v339) {
    return-1
  }
  var v735 = a.sequence;
  var v602 = v735.length;
  var v736 = b.sequence;
  var v603 = v736.length;
  var v342 = v602 == v603;
  if(v342) {
    var v604 = a.start;
    var v605 = b.start;
    var v340 = v604 < v605;
    if(v340) {
      return-1
    }
    var v606 = a.start;
    var v607 = b.start;
    var v341 = v606 > v607;
    if(v341) {
      return 1
    }else {
      return 0
    }
  }
  return
}
function writeFragment(topology$$1) {
  var v608 = this.topology;
  var v347 = v608 == "linear";
  if(v347) {
    var v343 = outputWindow.document;
    var v990 = this.sequence;
    var v987 = v990.length;
    var v982 = "&gt;" + v987;
    var v977 = v982 + " bp linear fragment from ";
    var v972 = v977 + topology$$1;
    var v963 = v972 + " parent ";
    var v964 = this.sourceName;
    var v955 = v963 + v964;
    var v944 = v955 + ", base ";
    var v945 = this.start;
    var v933 = v944 + v945;
    var v919 = v933 + " to base ";
    var v920 = this.stop;
    var v895 = v919 + v920;
    var v864 = v895 + " (";
    var v865 = this.startEnzyme;
    var v812 = v864 + v865;
    var v737 = v812 + " - ";
    var v738 = this.stopEnzyme;
    var v609 = v737 + v738;
    var v344 = v609 + ").\n";
    JAMScript.call(v343.write, v343, [v344])
  }else {
    var v345 = outputWindow.document;
    var v934 = this.sequence;
    var v921 = v934.length;
    var v896 = "&gt;" + v921;
    var v866 = v896 + " bp circular molecule from ";
    var v813 = v866 + topology$$1;
    var v739 = v813 + " parent ";
    var v740 = this.sourceName;
    var v610 = v739 + v740;
    var v346 = v610 + ".\n";
    JAMScript.call(v345.write, v345, [v346])
  }
  var v348 = outputWindow.document;
  var v741 = this.sequence;
  var v611 = addReturns(v741);
  var v349 = v611 + "\n\n";
  JAMScript.call(v348.write, v348, [v349]);
  return
}
function correctPositions() {
  var v612 = this.start;
  var v613 = this.originalLength;
  var v352 = v612 > v613;
  if(v352) {
    var v350 = this.start;
    var v351 = this.originalLength;
    this.start = v350 - v351
  }
  var v614 = this.stop;
  var v615 = this.originalLength;
  var v355 = v614 > v615;
  if(v355) {
    var v353 = this.stop;
    var v354 = this.originalLength;
    this.stop = v353 - v354
  }
  var v616 = this.stop;
  var v356 = v616 == 0;
  if(v356) {
    this.stop = this.originalLength
  }
  return
}
function RestrictionFragment(topology$$2, sourceName, sequence$$18, start$$4, stop, startEnzyme, stopEnzyme, originalLength$$1) {
  this.topology = topology$$2;
  this.sourceName = sourceName;
  this.sequence = sequence$$18;
  this.start = start$$4;
  this.stop = stop;
  this.startEnzyme = startEnzyme;
  this.stopEnzyme = stopEnzyme;
  this.originalLength = originalLength$$1;
  return
}
new RestrictionFragment("", "", "", 0, 0, "", "", 0);
var v357 = RestrictionFragment.prototype;
v357.writeFragment = writeFragment;
var v358 = RestrictionFragment.prototype;
v358.correctPositions = correctPositions;
JAMScript.set(document, "onload", v2);
var v359 = document.getElementById("submitbtn");
JAMScript.set(v359, "onclick", v3);
var v360 = document.getElementById("clearbtn");
JAMScript.set(v360, "onclick", v4);

