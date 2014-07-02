function v5() {
  var v738 = document.forms;
  var v607 = v738[0];
  var v359 = v607.elements;
  var v6 = v359[0];
  v6.value = " ";
  var v739 = document.forms;
  var v608 = v739[0];
  var v360 = v608.elements;
  var v7 = v360[4];
  v7.value = " ";
  return
}
function v4() {
  try {
    orfFind(document)
  }catch(e$$5) {
    var v8 = "The following error was encountered: " + e$$5;
    alert(v8)
  }
  return
}
function v3() {
  var v361 = document.main_form;
  var v9 = v361.main_submit;
  v9.focus();
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
  var v10 = arrayOfSequences[0];
  var lengthOfAlign = v10.length;
  var v362 = arrayOfSequences.length;
  var v11 = v362 < 2;
  if(v11) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v363 = arrayOfTitles.length;
  var v13 = i$$1 < v363;
  for(;v13;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v740 = arrayOfTitles[i$$1]
    }
    var v609 = v740.search(/\S/);
    var v364 = v609 == -1;
    var v611 = !v364;
    if(v611) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v834 = arrayOfSequences[i$$1]
      }
      var v741 = v834.search(/\S/);
      var v610 = v741 == -1;
      var v743 = !v610;
      if(v743) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v835 = arrayOfSequences[i$$1]
        }
        var v742 = v835.length;
        v610 = v742 != lengthOfAlign
      }
      v364 = v610
    }
    var v12 = v364;
    if(v12) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v365 = arrayOfTitles.length;
    v13 = i$$1 < v365
  }
  return true
}
function checkCodonTable(codonTable) {
  var v612 = codonTable.search(/AmAcid/);
  var v366 = v612 == -1;
  var v614 = !v366;
  if(v614) {
    var v744 = codonTable.search(/Codon/);
    var v613 = v744 == -1;
    var v746 = !v613;
    if(v746) {
      var v836 = codonTable.search(/Number/);
      var v745 = v836 == -1;
      var v838 = !v745;
      if(v838) {
        var v913 = codonTable.search(/\/1000/);
        var v837 = v913 == -1;
        var v915 = !v837;
        if(v915) {
          var v914 = codonTable.search(/Fraction\s*\.\./);
          v837 = v914 == -1
        }
        v745 = v837
      }
      v613 = v745
    }
    v366 = v613
  }
  var v14 = v366;
  if(v14) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v615 = formElement.value;
  var v367 = v615.search(/\S/);
  var v15 = v367 == -1;
  if(v15) {
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
  var v368 = arrayOfPatterns.length;
  var v18 = z$$2 < v368;
  for(;v18;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v616 = arrayOfPatterns[z$$2]
    }
    var v369 = v616.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v16 = v369 == -1;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v617 = arrayOfPatterns[z$$2]
    }
    var v370 = moreExpressionCheck(v617);
    var v17 = v370 == false;
    if(v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v371 = arrayOfPatterns.length;
    v18 = z$$2 < v371
  }
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v19);
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v20);
  var j = 0;
  var v372 = arrayOfPatterns.length;
  var v27 = j < v372;
  for(;v27;) {
    var v21 = geneticCodeMatchExp;
    var v22 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v747 = arrayOfPatterns[j]
    }
    var v618 = v747.match(/\/.+\//);
    var v373 = v618 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1295 = eval("introspect(JAMScript.introspectors.processAll) { " + v373 + " }")
    }else {
      var v1295 = JAMScript.call(eval, null, [v373])
    }
    v21[v22] = v1295;
    var v23 = geneticCodeMatchResult;
    var v24 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v619 = arrayOfPatterns[j]
    }
    var v374 = v619.match(/=[a-zA-Z\*]/);
    var v1296 = v374.toString();
    v23[v24] = v1296;
    var v25 = geneticCodeMatchResult;
    var v26 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v375 = geneticCodeMatchResult[j]
    }
    var v1297 = v375.replace(/=/g, "");
    v25[v26] = v1297;
    j = j + 1;
    var v376 = arrayOfPatterns.length;
    v27 = j < v376
  }
  var i$$2 = 0;
  var v620 = testSequence.length;
  var v377 = v620 - 3;
  var v34 = i$$2 <= v377;
  for(;v34;) {
    var v28 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v28);
    j = 0;
    var v378 = geneticCodeMatchExp.length;
    var v32 = j < v378;
    for(;v32;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v621 = geneticCodeMatchExp[j]
      }
      var v379 = codon.search(v621);
      var v31 = v379 != -1;
      if(v31) {
        var v30 = oneMatch == true;
        if(v30) {
          var v380 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v29 = v380 + ".";
          alert(v29);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v381 = geneticCodeMatchExp.length;
      v32 = j < v381
    }
    var v33 = oneMatch == false;
    if(v33) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v622 = testSequence.length;
    var v382 = v622 - 3;
    v34 = i$$2 <= v382
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v383 = arrayOfPatterns$$1.length;
  var v36 = z$$3 < v383;
  for(;v36;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v623 = arrayOfPatterns$$1[z$$3]
    }
    var v384 = v623.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v35 = v384 != -1;
    if(v35) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v385 = arrayOfPatterns$$1.length;
    v36 = z$$3 < v385
  }
  var i$$3 = 0;
  var v386 = arrayOfPatterns$$1.length;
  var v40 = i$$3 < v386;
  for(;v40;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v624 = arrayOfPatterns$$1[i$$3]
    }
    var v387 = "[" + v624;
    var v37 = v387 + "]";
    var re = new RegExp(v37, "gi");
    var j$$1 = i$$3 + 1;
    var v388 = arrayOfPatterns$$1.length;
    var v39 = j$$1 < v388;
    for(;v39;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v625 = arrayOfPatterns$$1[j$$1]
      }
      var v389 = v625.search(re);
      var v38 = v389 != -1;
      if(v38) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v390 = arrayOfPatterns$$1.length;
      v39 = j$$1 < v390
    }
    i$$3 = i$$3 + 1;
    var v391 = arrayOfPatterns$$1.length;
    v40 = i$$3 < v391
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v392 = arrayOfPatterns$$2.length;
  var v43 = z$$4 < v392;
  for(;v43;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v626 = arrayOfPatterns$$2[z$$4]
    }
    var v393 = v626.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v41 = v393 == -1;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v627 = arrayOfPatterns$$2[z$$4]
    }
    var v394 = moreExpressionCheck(v627);
    var v42 = v394 == false;
    if(v42) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v395 = arrayOfPatterns$$2.length;
    v43 = z$$4 < v395
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v748 = getSequenceFromFasta(text$$7);
  var v628 = v748.replace(/[^A-Za-z]/g, "");
  var v396 = v628.length;
  var v45 = v396 > maxInput;
  if(v45) {
    var v397 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v44 = v397 + " characters.";
    alert(v44);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v398 = text$$8.length;
  var v47 = v398 > maxInput$$1;
  if(v47) {
    var v399 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v46 = v399 + " characters.";
    alert(v46);
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
  var v48 = outputWindow.document;
  JAMScript.call(v48.write, v48, ["</form>"]);
  return true
}
function closePre() {
  var v49 = outputWindow.document;
  JAMScript.call(v49.write, v49, ["</div>"]);
  var v50 = outputWindow.document;
  JAMScript.call(v50.write, v50, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v51 = outputWindow.document;
  JAMScript.call(v51.write, v51, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v52 = outputWindow.document;
  JAMScript.call(v52.write, v52, ["</body>\n</html>\n"]);
  outputWindow.status = "Done.";
  var v53 = outputWindow.document;
  v53.close();
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
  var v400 = alignArray.length;
  var v54 = v400 < 3;
  if(v54) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v401 = alignArray.length;
  var v56 = i$$4 < v401;
  for(;v56;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v629 = alignArray[i$$4]
    }
    var v402 = v629.search(/[^\s]+\s/);
    var v55 = v402 == -1;
    if(v55) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v403 = alignArray.length;
    v56 = i$$4 < v403
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
  var v404 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v59 = v404 != -1;
  if(v59) {
    var v58 = matchArray = re$$1.exec(sequenceData);
    for(;v58;) {
      var v57 = matchArray[0];
      arrayOfFasta.push(v57);
      v58 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v405 = sequence$$2.length;
  var v60 = "&gt;results for " + v405;
  var stringToReturn = v60 + " residue sequence ";
  var v406 = fastaSequenceTitle.search(/[^\s]/);
  var v62 = v406 != -1;
  if(v62) {
    var v407 = stringToReturn + '"';
    var v61 = v407 + fastaSequenceTitle;
    stringToReturn = v61 + '"'
  }
  var v408 = stringToReturn + ' starting "';
  var v409 = sequence$$2.substring(0, 10);
  var v63 = v408 + v409;
  stringToReturn = v63 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v410 = sequenceOne.length;
  var v64 = "Search results for " + v410;
  var stringToReturn$$1 = v64 + " residue sequence ";
  var v411 = fastaSequenceTitleOne.search(/[^\s]/);
  var v66 = v411 != -1;
  if(v66) {
    var v412 = stringToReturn$$1 + '"';
    var v65 = v412 + fastaSequenceTitleOne;
    stringToReturn$$1 = v65 + '"'
  }
  var v413 = stringToReturn$$1 + ' starting "';
  var v414 = sequenceOne.substring(0, 10);
  var v67 = v413 + v414;
  stringToReturn$$1 = v67 + '"\n';
  var v415 = stringToReturn$$1 + "and ";
  var v416 = sequenceTwo.length;
  var v68 = v415 + v416;
  stringToReturn$$1 = v68 + " residue sequence ";
  var v417 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v70 = v417 != -1;
  if(v70) {
    var v418 = stringToReturn$$1 + '"';
    var v69 = v418 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v69 + '"'
  }
  var v419 = stringToReturn$$1 + ' starting "';
  var v420 = sequenceTwo.substring(0, 10);
  var v71 = v419 + v420;
  stringToReturn$$1 = v71 + '"';
  var v72 = '<div class="info">' + stringToReturn$$1;
  return v72 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v73 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v73);
  var j$$2 = 0;
  var v421 = arrayOfPatterns$$3.length;
  var v76 = j$$2 < v421;
  for(;v76;) {
    var v74 = geneticCodeMatchExp$$1;
    var v75 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v749 = arrayOfPatterns$$3[j$$2]
    }
    var v630 = v749.match(/\/.+\//);
    var v422 = v630 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1298 = eval("introspect(JAMScript.introspectors.processAll) { " + v422 + " }")
    }else {
      var v1298 = JAMScript.call(eval, null, [v422])
    }
    v74[v75] = v1298;
    j$$2 = j$$2 + 1;
    var v423 = arrayOfPatterns$$3.length;
    v76 = j$$2 < v423
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v77 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v77);
  var j$$3 = 0;
  var v424 = arrayOfPatterns$$4.length;
  var v82 = j$$3 < v424;
  for(;v82;) {
    var v78 = geneticCodeMatchResult$$1;
    var v79 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v631 = arrayOfPatterns$$4[j$$3]
    }
    var v425 = v631.match(/=[a-zA-Z\*]/);
    var v1299 = v425.toString();
    v78[v79] = v1299;
    var v80 = geneticCodeMatchResult$$1;
    var v81 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v426 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1300 = v426.replace(/=/g, "");
    v80[v81] = v1300;
    j$$3 = j$$3 + 1;
    var v427 = arrayOfPatterns$$4.length;
    v82 = j$$3 < v427
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v428 = sequence$$3.length;
  var v83 = "Results for " + v428;
  var stringToReturn$$2 = v83 + " residue sequence ";
  var v429 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v85 = v429 != -1;
  if(v85) {
    var v430 = stringToReturn$$2 + '"';
    var v84 = v430 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v84 + '"'
  }
  var v431 = stringToReturn$$2 + ' starting "';
  var v432 = sequence$$3.substring(0, 10);
  var v86 = v431 + v432;
  stringToReturn$$2 = v86 + '"';
  var v87 = '<div class="info">' + stringToReturn$$2;
  return v87 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v632 = "Results for " + topology;
  var v433 = v632 + " ";
  var v434 = sequence$$4.length;
  var v88 = v433 + v434;
  var stringToReturn$$3 = v88 + " residue sequence ";
  var v435 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v90 = v435 != -1;
  if(v90) {
    var v436 = stringToReturn$$3 + '"';
    var v89 = v436 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v89 + '"'
  }
  var v437 = stringToReturn$$3 + ' starting "';
  var v438 = sequence$$4.substring(0, 10);
  var v91 = v437 + v438;
  stringToReturn$$3 = v91 + '"';
  var v92 = '<div class="info">' + stringToReturn$$3;
  return v92 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v439 = sequenceOne$$1.length;
  var v93 = "Alignment results for " + v439;
  var stringToReturn$$4 = v93 + " residue sequence ";
  var v440 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v95 = v440 != -1;
  if(v95) {
    var v441 = stringToReturn$$4 + '"';
    var v94 = v441 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v94 + '"'
  }
  var v442 = stringToReturn$$4 + ' starting "';
  var v443 = sequenceOne$$1.substring(0, 10);
  var v96 = v442 + v443;
  stringToReturn$$4 = v96 + '"\n';
  var v444 = stringToReturn$$4 + "and ";
  var v445 = sequenceTwo$$1.length;
  var v97 = v444 + v445;
  stringToReturn$$4 = v97 + " residue sequence ";
  var v446 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v99 = v446 != -1;
  if(v99) {
    var v447 = stringToReturn$$4 + '"';
    var v98 = v447 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v98 + '"'
  }
  var v448 = stringToReturn$$4 + ' starting "';
  var v449 = sequenceTwo$$1.substring(0, 10);
  var v100 = v448 + v449;
  stringToReturn$$4 = v100 + '"';
  var v101 = '<div class="info">' + stringToReturn$$4;
  return v101 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v103 = j$$4 < lengthOut;
  for(;v103;) {
    var v450 = Math.random();
    var v451 = components.length;
    var v102 = v450 * v451;
    tempNum = Math.floor(v102);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v103 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v452 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v104 = v452 != -1;
  if(v104) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v453 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v106 = v453 != -1;
  if(v106) {
    var v105 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v105.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v633 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v454 = v633 != -1;
  var v635 = !v454;
  if(v635) {
    var v750 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v634 = v750 != -1;
    var v752 = !v634;
    if(v752) {
      var v839 = expressionToCheck.search(/\[\]/);
      var v751 = v839 != -1;
      var v841 = !v751;
      if(v841) {
        var v916 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v840 = v916 != -1;
        var v918 = !v840;
        if(v918) {
          var v970 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v917 = v970 != -1;
          var v972 = !v917;
          if(v972) {
            var v1024 = expressionToCheck.search(/\|\|/);
            var v971 = v1024 != -1;
            var v1026 = !v971;
            if(v1026) {
              var v1056 = expressionToCheck.search(/\/\|/);
              var v1025 = v1056 != -1;
              var v1058 = !v1025;
              if(v1058) {
                var v1084 = expressionToCheck.search(/\|\//);
                var v1057 = v1084 != -1;
                var v1086 = !v1057;
                if(v1086) {
                  var v1112 = expressionToCheck.search(/\[.\]/);
                  var v1085 = v1112 != -1;
                  var v1114 = !v1085;
                  if(v1114) {
                    var v1137 = expressionToCheck.search(/\</);
                    var v1113 = v1137 != -1;
                    var v1139 = !v1113;
                    if(v1139) {
                      var v1138 = expressionToCheck.search(/\>/);
                      v1113 = v1138 != -1
                    }
                    v1085 = v1113
                  }
                  v1057 = v1085
                }
                v1025 = v1057
              }
              v971 = v1025
            }
            v917 = v971
          }
          v840 = v917
        }
        v751 = v840
      }
      v634 = v751
    }
    v454 = v634
  }
  var v107 = v454;
  if(v107) {
    return false
  }
  return true
}
function openForm() {
  var v108 = outputWindow.document;
  JAMScript.call(v108.write, v108, ['<form action="">\n']);
  return true
}
function openPre() {
  var v109 = outputWindow.document;
  JAMScript.call(v109.write, v109, ["<pre>"]);
  var v110 = outputWindow.document;
  JAMScript.call(v110.write, v110, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v111 = outputWindow.document;
  JAMScript.call(v111.write, v111, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$5) {
  _openWindow(title$$5, true);
  return
}
function _openWindow(title$$6, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1301 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1301[2], v1301[1], v1301[0]);
  outputWindow.focus();
  var v112 = outputWindow.document;
  var v753 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v636 = v753 + "<head>\n";
  var v455 = v636 + "<title>Sequence Manipulation Suite</title>\n";
  var v113 = v455 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v112.write, v112, [v113]);
  if(isColor) {
    var v114 = outputWindow.document;
    var v1203 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1182 = v1203 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1161 = v1182 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1140 = v1161 + "div.info {font-weight: bold}\n";
    var v1115 = v1140 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1087 = v1115 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1059 = v1087 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1027 = v1059 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v973 = v1027 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v919 = v973 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v842 = v919 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v754 = v842 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v637 = v754 + "td.many {color: #000000}\n";
    var v456 = v637 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v115 = v456 + "</style>\n";
    JAMScript.call(v114.write, v114, [v115])
  }else {
    var v116 = outputWindow.document;
    var v1224 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1204 = v1224 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1183 = v1204 + "div.title {display: none}\n";
    var v1162 = v1183 + "div.info {font-weight: bold}\n";
    var v1141 = v1162 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1116 = v1141 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1088 = v1116 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1060 = v1088 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1028 = v1060 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v974 = v1028 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v920 = v974 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v843 = v920 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v755 = v843 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v638 = v755 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v457 = v638 + "img {display: none}\n";
    var v117 = v457 + "</style>\n";
    JAMScript.call(v116.write, v116, [v117])
  }
  var v118 = outputWindow.document;
  var v756 = "</head>\n" + '<body class="main">\n';
  var v639 = v756 + '<div class="title">';
  var v458 = v639 + title$$6;
  var v119 = v458 + " results</div>\n";
  JAMScript.call(v118.write, v118, [v119]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$7) {
  _openWindowAlign(title$$7, true);
  return
}
function _openWindowAlign(title$$8, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1302 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1302[2], v1302[1], v1302[0]);
  outputWindow.focus();
  var v120 = outputWindow.document;
  var v757 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v640 = v757 + "<head>\n";
  var v459 = v640 + "<title>Sequence Manipulation Suite</title>\n";
  var v121 = v459 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v120.write, v120, [v121]);
  if(isBackground) {
    var v122 = outputWindow.document;
    var v1205 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1184 = v1205 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1163 = v1184 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1142 = v1163 + "div.info {font-weight: bold}\n";
    var v1117 = v1142 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1089 = v1117 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1061 = v1089 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1029 = v1061 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v975 = v1029 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v921 = v975 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v844 = v921 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v758 = v844 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v641 = v758 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v460 = v641 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v123 = v460 + "</style>\n";
    JAMScript.call(v122.write, v122, [v123])
  }else {
    var v124 = outputWindow.document;
    var v1243 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1225 = v1243 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1206 = v1225 + "div.title {display: none}\n";
    var v1185 = v1206 + "div.info {font-weight: bold}\n";
    var v1164 = v1185 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1143 = v1164 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1118 = v1143 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1090 = v1118 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1062 = v1090 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1030 = v1062 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v976 = v1030 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v922 = v976 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v845 = v922 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v759 = v845 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v642 = v759 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v461 = v642 + "img {display: none}\n";
    var v125 = v461 + "</style>\n";
    JAMScript.call(v124.write, v124, [v125])
  }
  var v126 = outputWindow.document;
  var v760 = "</head>\n" + '<body class="main">\n';
  var v643 = v760 + '<div class="title">';
  var v462 = v643 + title$$8;
  var v127 = v462 + " results</div>\n";
  JAMScript.call(v126.write, v126, [v127]);
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
  var v463 = dnaSequence$$1.search(/./);
  var v128 = v463 != -1;
  if(v128) {
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
  var v129 = j$$5 < lengthOfColumn;
  for(;v129;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v129 = j$$5 < lengthOfColumn
  }
  var v130 = tempString + theNumber;
  theNumber = v130 + " ";
  var v131 = sequenceToAppend + theNumber;
  sequenceToAppend = v131 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v464 = testArray[0];
  var v132 = v464 != testString;
  if(v132) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v465 = testString.search(re$$2);
  var v133 = v465 == -1;
  if(v133) {
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
  var v134 = !caughtException;
  if(v134) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v135 = testString != "1X2X3X";
  if(v135) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v466 = testNum.toFixed(3);
  var v136 = v466 != 2489.824;
  if(v136) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v467 = testNum.toPrecision(5);
  var v137 = v467 != 2489.8;
  if(v137) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v468 = theNumber$$1.search(/\d/);
  var v138 = v468 == -1;
  if(v138) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v644 = emblFile.search(/ID/);
  var v469 = v644 == -1;
  var v646 = !v469;
  if(v646) {
    var v761 = emblFile.search(/AC/);
    var v645 = v761 == -1;
    var v763 = !v645;
    if(v763) {
      var v846 = emblFile.search(/DE/);
      var v762 = v846 == -1;
      var v848 = !v762;
      if(v848) {
        var v847 = emblFile.search(/SQ/);
        v762 = v847 == -1
      }
      v645 = v762
    }
    v469 = v645
  }
  var v139 = v469;
  if(v139) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v470 = theNumber$$2.search(/\d/);
  var v140 = v470 == -1;
  if(v140) {
    alert("Please enter a number.");
    return false
  }
  var v142 = theNumber$$2 > maxInput$$2;
  if(v142) {
    var v471 = "Please enter a number less than or equal to " + maxInput$$2;
    var v141 = v471 + ".";
    alert(v141);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v472 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v143 = v472 != -1;
  if(v143) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v473 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v144 = v473 != -1;
  if(v144) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v647 = genBankFile.search(/LOCUS/);
  var v474 = v647 == -1;
  var v649 = !v474;
  if(v649) {
    var v764 = genBankFile.search(/DEFINITION/);
    var v648 = v764 == -1;
    var v766 = !v648;
    if(v766) {
      var v849 = genBankFile.search(/ACCESSION/);
      var v765 = v849 == -1;
      var v851 = !v765;
      if(v851) {
        var v850 = genBankFile.search(/ORIGIN/);
        v765 = v850 == -1
      }
      v648 = v765
    }
    v474 = v648
  }
  var v145 = v474;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v650 = genBankFile$$1.search(/LOCUS/);
  var v475 = v650 == -1;
  var v652 = !v475;
  if(v652) {
    var v767 = genBankFile$$1.search(/DEFINITION/);
    var v651 = v767 == -1;
    var v769 = !v651;
    if(v769) {
      var v852 = genBankFile$$1.search(/ACCESSION/);
      var v768 = v852 == -1;
      var v854 = !v768;
      if(v854) {
        var v853 = genBankFile$$1.search(/ORIGIN/);
        v768 = v853 == -1
      }
      v651 = v768
    }
    v475 = v651
  }
  var v146 = v475;
  if(v146) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v476 = genBankFile$$1.search(/FEATURES {13}/);
  var v147 = v476 == -1;
  if(v147) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v653 = emblFile$$1.search(/ID/);
  var v477 = v653 == -1;
  var v655 = !v477;
  if(v655) {
    var v770 = emblFile$$1.search(/AC/);
    var v654 = v770 == -1;
    var v772 = !v654;
    if(v772) {
      var v855 = emblFile$$1.search(/DE/);
      var v771 = v855 == -1;
      var v857 = !v771;
      if(v857) {
        var v856 = emblFile$$1.search(/SQ/);
        v771 = v856 == -1
      }
      v654 = v771
    }
    v477 = v654
  }
  var v148 = v477;
  if(v148) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v478 = emblFile$$1.search(/^FT/m);
  var v149 = v478 == -1;
  if(v149) {
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
    var v150 = i$$5 + 1;
    lineOfText = rightNum(v150, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v479 = basePerLine / groupSize;
    var v154 = j$$6 <= v479;
    for(;v154;) {
      var v153 = k < groupSize;
      for(;v153;) {
        var v151 = lineOfText;
        var v480 = k + i$$5;
        var v152 = text$$10.charAt(v480);
        lineOfText = v151 + v152;
        k = k + 1;
        v153 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v481 = basePerLine / groupSize;
      v154 = j$$6 <= v481
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
    var v482 = adjustment < 0;
    if(v482) {
      v482 = adjusted >= 0
    }
    var v158 = v482;
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
  var v191 = i$$6 < stopBase$$2;
  for(;v191;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v483 = basePerLine$$2 / groupSize$$2;
    var v167 = j$$7 <= v483;
    for(;v167;) {
      var v162 = k$$1 < groupSize$$2;
      for(;v162;) {
        var v484 = i$$6 + k$$1;
        var v159 = v484 >= stopBase$$2;
        if(v159) {
          break
        }
        var v160 = lineOfText$$1;
        var v485 = k$$1 + i$$6;
        var v161 = text$$12.charAt(v485);
        lineOfText$$1 = v160 + v161;
        k$$1 = k$$1 + 1;
        v162 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v165 = numberPosition$$1 == "above";
      if(v165) {
        var v163 = aboveNum;
        var v486 = adjustNumbering(i$$6, numberingAdjustment);
        var v164 = rightNum(v486, "", groupSize$$2, tabIn$$3);
        aboveNum = v163 + v164
      }
      var v166 = i$$6 >= stopBase$$2;
      if(v166) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v487 = basePerLine$$2 / groupSize$$2;
      v167 = j$$7 <= v487
    }
    var v190 = numberPosition$$1 == "left";
    if(v190) {
      var v168 = outputWindow.document;
      var v773 = adjustNumbering(lineNum, numberingAdjustment);
      var v656 = rightNum(v773, "", 8, tabIn$$3);
      var v488 = v656 + lineOfText$$1;
      var v169 = v488 + "\n";
      JAMScript.call(v168.write, v168, [v169]);
      var v173 = strands$$1 == "two";
      if(v173) {
        var v170 = outputWindow.document;
        var v774 = adjustNumbering(lineNum, numberingAdjustment);
        var v657 = rightNum(v774, "", 8, tabIn$$3);
        var v658 = complement(lineOfText$$1);
        var v489 = v657 + v658;
        var v171 = v489 + "\n";
        JAMScript.call(v170.write, v170, [v171]);
        var v172 = outputWindow.document;
        JAMScript.call(v172.write, v172, ["\n"])
      }
    }else {
      var v189 = numberPosition$$1 == "right";
      if(v189) {
        var v174 = outputWindow.document;
        var v659 = lineOfText$$1;
        var v660 = adjustNumbering(i$$6, numberingAdjustment);
        var v490 = v659 + v660;
        var v175 = v490 + "\n";
        JAMScript.call(v174.write, v174, [v175]);
        var v179 = strands$$1 == "two";
        if(v179) {
          var v176 = outputWindow.document;
          var v661 = complement(lineOfText$$1);
          var v662 = adjustNumbering(i$$6, numberingAdjustment);
          var v491 = v661 + v662;
          var v177 = v491 + "\n";
          JAMScript.call(v176.write, v176, [v177]);
          var v178 = outputWindow.document;
          JAMScript.call(v178.write, v178, ["\n"])
        }
      }else {
        var v188 = numberPosition$$1 == "above";
        if(v188) {
          var v180 = outputWindow.document;
          var v181 = aboveNum + "\n";
          JAMScript.call(v180.write, v180, [v181]);
          var v182 = outputWindow.document;
          var v183 = lineOfText$$1 + "\n";
          JAMScript.call(v182.write, v182, [v183]);
          var v187 = strands$$1 == "two";
          if(v187) {
            var v184 = outputWindow.document;
            var v492 = complement(lineOfText$$1);
            var v185 = v492 + "\n";
            JAMScript.call(v184.write, v184, [v185]);
            var v186 = outputWindow.document;
            JAMScript.call(v186.write, v186, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v191 = i$$6 < stopBase$$2
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
  var v212 = i$$7 < stopBase$$3;
  for(;v212;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v493 = basePerLine$$3 / groupSize$$3;
    var v200 = j$$8 <= v493;
    for(;v200;) {
      var v195 = k$$2 < groupSize$$3;
      for(;v195;) {
        var v494 = i$$7 + k$$2;
        var v192 = v494 >= stopBase$$3;
        if(v192) {
          break
        }
        var v193 = lineOfText$$2;
        var v495 = k$$2 + i$$7;
        var v194 = text$$13.charAt(v495);
        lineOfText$$2 = v193 + v194;
        k$$2 = k$$2 + 1;
        v195 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v198 = numberPosition$$2 == "above";
      if(v198) {
        var v196 = aboveNum$$1;
        var v197 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v196 + v197
      }
      var v199 = i$$7 >= stopBase$$3;
      if(v199) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v496 = basePerLine$$3 / groupSize$$3;
      v200 = j$$8 <= v496
    }
    var v211 = numberPosition$$2 == "left";
    if(v211) {
      var v201 = outputWindow.document;
      var v663 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v497 = v663 + lineOfText$$2;
      var v202 = v497 + "\n";
      JAMScript.call(v201.write, v201, [v202])
    }else {
      var v210 = numberPosition$$2 == "right";
      if(v210) {
        var v203 = outputWindow.document;
        var v498 = lineOfText$$2 + i$$7;
        var v204 = v498 + "\n";
        JAMScript.call(v203.write, v203, [v204])
      }else {
        var v209 = numberPosition$$2 == "above";
        if(v209) {
          var v205 = outputWindow.document;
          var v206 = aboveNum$$1 + "\n";
          JAMScript.call(v205.write, v205, [v206]);
          var v207 = outputWindow.document;
          var v208 = lineOfText$$2 + "\n";
          JAMScript.call(v207.write, v207, [v208])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v212 = i$$7 < stopBase$$3
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
  var v664 = sequence$$13.length;
  var v499 = v664 <= firstIndexToMutate;
  var v666 = !v499;
  if(v666) {
    var v665 = lastIndexToMutate < 0;
    var v775 = !v665;
    if(v775) {
      v665 = lastIndexToMutate <= firstIndexToMutate
    }
    v499 = v665
  }
  var v213 = v499;
  if(v213) {
    numMut = 0
  }
  var i$$8 = 0;
  var v221 = i$$8 < numMut;
  for(;v221;) {
    maxNum = sequence$$13.length;
    var v500 = Math.random();
    var v214 = v500 * maxNum;
    randNum = Math.floor(v214);
    var v501 = randNum < firstIndexToMutate;
    var v667 = !v501;
    if(v667) {
      v501 = randNum > lastIndexToMutate
    }
    var v215 = v501;
    if(v215) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v221 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v502 = Math.random();
      var v503 = components$$1.length;
      var v216 = v502 * v503;
      componentsIndex = Math.round(v216);
      var v504 = components$$1.length;
      var v217 = componentsIndex == v504;
      if(v217) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v505 = components$$1[componentsIndex]
      }
      var v218 = v505 != currentChar;
      if(v218) {
        needNewChar = false
      }
    }
    var v506 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v507 = components$$1[componentsIndex]
    }
    var v219 = v506 + v507;
    var v508 = randNum + 1;
    var v509 = sequence$$13.length;
    var v220 = sequence$$13.substring(v508, v509);
    sequence$$13 = v219 + v220;
    i$$8 = i$$8 + 1;
    v221 = i$$8 < numMut
  }
  var v222 = outputWindow.document;
  var v223 = addReturns(sequence$$13);
  JAMScript.call(v222.write, v222, [v223]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v228 = j$$9 < lengthOut$$1;
  for(;v228;) {
    var v510 = Math.random();
    var v511 = components$$2.length;
    var v224 = v510 * v511;
    tempNum$$1 = Math.floor(v224);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v512 = sequence$$14.length;
    var v227 = v512 == 60;
    if(v227) {
      var v225 = outputWindow.document;
      var v226 = sequence$$14 + "\n";
      JAMScript.call(v225.write, v225, [v226]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v228 = j$$9 < lengthOut$$1
  }
  var v229 = outputWindow.document;
  var v230 = sequence$$14 + "\n";
  JAMScript.call(v229.write, v229, [v230]);
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
  var v234 = dnaConformation == "circular";
  if(v234) {
    var v231 = sequence$$15.substring(0, lookAhead);
    shiftValue = v231.length;
    var v776 = sequence$$15.length;
    var v668 = v776 - lookAhead;
    var v669 = sequence$$15.length;
    var v513 = sequence$$15.substring(v668, v669);
    var v232 = v513 + sequence$$15;
    var v233 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v232 + v233;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v235 = outputWindow.document;
  JAMScript.call(v235.write, v235, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v236 = outputWindow.document;
  var v777 = '<tr><td class="title" width="200px">' + "Site:";
  var v670 = v777 + '</td><td class="title">';
  var v514 = v670 + "Positions:";
  var v237 = v514 + "</td></tr>\n";
  JAMScript.call(v236.write, v236, [v237]);
  var i$$9 = 0;
  var v515 = arrayOfItems.length;
  var v253 = i$$9 < v515;
  for(;v253;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v516 = arrayOfItems[i$$9]
    }
    var v238 = v516.match(/\/.+\//);
    matchExp = v238 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v778 = arrayOfItems[i$$9]
    }
    var v671 = v778.match(/\)\D*\d+/);
    var v517 = v671.toString();
    var v239 = v517.replace(/\)\D*/, "");
    cutDistance = parseFloat(v239);
    var v245 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v245;) {
      var v240 = matchExp.lastIndex;
      matchPosition = v240 - cutDistance;
      var v518 = matchPosition >= lowerLimit;
      if(v518) {
        v518 = matchPosition < upperLimit
      }
      var v243 = v518;
      if(v243) {
        timesFound = timesFound + 1;
        var v241 = tempString$$1 + ", ";
        var v519 = matchPosition - shiftValue;
        var v242 = v519 + 1;
        tempString$$1 = v241 + v242
      }
      var v520 = matchExp.lastIndex;
      var v672 = RegExp.lastMatch;
      var v521 = v672.length;
      var v244 = v520 - v521;
      matchExp.lastIndex = v244 + 1;
      v245 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v522 = tempString$$1.search(/\d/);
    var v246 = v522 != -1;
    if(v246) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v250 = timesFound == 0;
    if(v250) {
      backGroundClass = "none"
    }else {
      var v249 = timesFound == 1;
      if(v249) {
        backGroundClass = "one"
      }else {
        var v248 = timesFound == 2;
        if(v248) {
          backGroundClass = "two"
        }else {
          var v247 = timesFound == 3;
          if(v247) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v251 = outputWindow.document;
    var v1031 = '<tr><td class="' + backGroundClass;
    var v977 = v1031 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1091 = arrayOfItems[i$$9]
    }
    var v1063 = v1091.match(/\([^\(]+\)/);
    var v1032 = v1063.toString();
    var v978 = v1032.replace(/\(|\)/g, "");
    var v923 = v977 + v978;
    var v858 = v923 + '</td><td class="';
    var v779 = v858 + backGroundClass;
    var v673 = v779 + '">';
    var v523 = v673 + tempString$$1;
    var v252 = v523 + "</td></tr>\n";
    JAMScript.call(v251.write, v251, [v252]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v524 = arrayOfItems.length;
    v253 = i$$9 < v524
  }
  var v254 = outputWindow.document;
  JAMScript.call(v254.write, v254, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v255 = outputWindow.document;
  JAMScript.call(v255.write, v255, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v256 = outputWindow.document;
  var v924 = '<tr><td class="title">' + "Pattern:";
  var v859 = v924 + '</td><td class="title">';
  var v780 = v859 + "Times found:";
  var v674 = v780 + '</td><td class="title">';
  var v525 = v674 + "Percentage:";
  var v257 = v525 + "</td></tr>\n";
  JAMScript.call(v256.write, v256, [v257]);
  var i$$10 = 0;
  var v526 = arrayOfItems$$1.length;
  var v266 = i$$10 < v526;
  for(;v266;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v527 = arrayOfItems$$1[i$$10]
    }
    var v258 = v527.match(/\/[^\/]+\//);
    var matchExp$$1 = v258 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v528 = sequence$$16.search(matchExp$$1);
    var v260 = v528 != -1;
    if(v260) {
      var v259 = sequence$$16.match(matchExp$$1);
      tempNumber = v259.length
    }
    var percentage = 0;
    var v675 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v860 = arrayOfItems$$1[i$$10]
    }
    var v781 = v860.match(/\d+/);
    var v676 = parseFloat(v781);
    var v529 = v675 - v676;
    var v263 = v529 > 0;
    if(v263) {
      var v261 = 100 * tempNumber;
      var v530 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v782 = arrayOfItems$$1[i$$10]
      }
      var v677 = v782.match(/\d+/);
      var v531 = parseFloat(v677);
      var v262 = v530 - v531;
      percentage = v261 / v262
    }
    var v264 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1092 = arrayOfItems$$1[i$$10]
    }
    var v1064 = v1092.match(/\([^\(]+\)\b/);
    var v1033 = v1064.toString();
    var v979 = v1033.replace(/\(|\)/g, "");
    var v925 = "<tr><td>" + v979;
    var v861 = v925 + "</td><td>";
    var v783 = v861 + tempNumber;
    var v678 = v783 + "</td><td>";
    var v679 = percentage.toFixed(2);
    var v532 = v678 + v679;
    var v265 = v532 + "</td></tr>\n";
    JAMScript.call(v264.write, v264, [v265]);
    i$$10 = i$$10 + 1;
    var v533 = arrayOfItems$$1.length;
    v266 = i$$10 < v533
  }
  var v267 = outputWindow.document;
  JAMScript.call(v267.write, v267, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v534 = sequence$$17.length;
  var v274 = v534 > 0;
  for(;v274;) {
    maxNum$$1 = sequence$$17.length;
    var v535 = Math.random();
    var v268 = v535 * maxNum$$1;
    randNum$$1 = Math.floor(v268);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v269 = randNum$$1 + 1;
    var v270 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v269, v270);
    sequence$$17 = tempString1 + tempString2;
    var v536 = tempSeq.length;
    var v273 = v536 == 60;
    if(v273) {
      var v271 = outputWindow.document;
      var v272 = tempSeq + "\n";
      JAMScript.call(v271.write, v271, [v272]);
      tempSeq = ""
    }
    var v537 = sequence$$17.length;
    v274 = v537 > 0
  }
  var v275 = outputWindow.document;
  var v276 = tempSeq + "\n";
  JAMScript.call(v275.write, v275, [v276]);
  return true
}
function getGeneticCodeString(type$$25) {
  var v680 = type$$25.toLowerCase();
  var v538 = v680 == "standard";
  var v682 = !v538;
  if(v682) {
    var v681 = type$$25.toLowerCase();
    v538 = v681 == "transl_table=1"
  }
  var v278 = v538;
  if(v278) {
    var v1278 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1261 = v1278 + "/ga[tcuy]/=D,";
    var v1244 = v1261 + "/ga[agr]/=E,";
    var v1226 = v1244 + "/[tu][tu][tcuy]/=F,";
    var v1207 = v1226 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1186 = v1207 + "/ca[tcuy]/=H,";
    var v1165 = v1186 + "/a[tu][atcuwmhy]/=I,";
    var v1144 = v1165 + "/aa[agr]/=K,";
    var v1119 = v1144 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1093 = v1119 + "/a[tu]g/=M,";
    var v1065 = v1093 + "/aa[tucy]/=N,";
    var v1034 = v1065 + "/cc[acgturyswkmbdhvn]/=P,";
    var v980 = v1034 + "/ca[agr]/=Q,";
    var v926 = v980 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v862 = v926 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v784 = v862 + "/ac[acgturyswkmbdhvn]/=T,";
    var v683 = v784 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v539 = v683 + "/[tu]gg/=W,";
    var v277 = v539 + "/[tu]a[ctuy]/=Y,";
    return v277 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v540 = type$$25.toLowerCase();
  var v280 = v540 == "transl_table=2";
  if(v280) {
    var v1279 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1262 = v1279 + "/ga[tcuy]/=D,";
    var v1245 = v1262 + "/ga[agr]/=E,";
    var v1227 = v1245 + "/[tu][tu][tcuy]/=F,";
    var v1208 = v1227 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1187 = v1208 + "/ca[tcuy]/=H,";
    var v1166 = v1187 + "/a[tu][tcuy]/=I,";
    var v1145 = v1166 + "/aa[agr]/=K,";
    var v1120 = v1145 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1094 = v1120 + "/a[tu][agr]/=M,";
    var v1066 = v1094 + "/aa[tucy]/=N,";
    var v1035 = v1066 + "/cc[acgturyswkmbdhvn]/=P,";
    var v981 = v1035 + "/ca[agr]/=Q,";
    var v927 = v981 + "/cg[acgturyswkmbdhvn]/=R,";
    var v863 = v927 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v785 = v863 + "/ac[acgturyswkmbdhvn]/=T,";
    var v684 = v785 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v541 = v684 + "/[tu]g[agr]/=W,";
    var v279 = v541 + "/[tu]a[ctuy]/=Y,";
    return v279 + "/[tu]a[agr]|ag[agr]/=*"
  }
  var v542 = type$$25.toLowerCase();
  var v282 = v542 == "transl_table=3";
  if(v282) {
    var v1280 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1263 = v1280 + "/ga[tcuy]/=D,";
    var v1246 = v1263 + "/ga[agr]/=E,";
    var v1228 = v1246 + "/[tu][tu][tcuy]/=F,";
    var v1209 = v1228 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1188 = v1209 + "/ca[tcuy]/=H,";
    var v1167 = v1188 + "/a[tu][tcuy]/=I,";
    var v1146 = v1167 + "/aa[agr]/=K,";
    var v1121 = v1146 + "/[tu][tu][agr]/=L,";
    var v1095 = v1121 + "/a[tu][agr]/=M,";
    var v1067 = v1095 + "/aa[tucy]/=N,";
    var v1036 = v1067 + "/cc[acgturyswkmbdhvn]/=P,";
    var v982 = v1036 + "/ca[agr]/=Q,";
    var v928 = v982 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v864 = v928 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v786 = v864 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v685 = v786 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v543 = v685 + "/[tu]g[agr]/=W,";
    var v281 = v543 + "/[tu]a[ctuy]/=Y,";
    return v281 + "/[tu]a[agr]/=*"
  }
  var v544 = type$$25.toLowerCase();
  var v284 = v544 == "transl_table=4";
  if(v284) {
    var v1281 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1264 = v1281 + "/ga[tcuy]/=D,";
    var v1247 = v1264 + "/ga[agr]/=E,";
    var v1229 = v1247 + "/[tu][tu][tcuy]/=F,";
    var v1210 = v1229 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1189 = v1210 + "/ca[tcuy]/=H,";
    var v1168 = v1189 + "/a[tu][atcuwmhy]/=I,";
    var v1147 = v1168 + "/aa[agr]/=K,";
    var v1122 = v1147 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1096 = v1122 + "/a[tu]g/=M,";
    var v1068 = v1096 + "/aa[tucy]/=N,";
    var v1037 = v1068 + "/cc[acgturyswkmbdhvn]/=P,";
    var v983 = v1037 + "/ca[agr]/=Q,";
    var v929 = v983 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v865 = v929 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v787 = v865 + "/ac[acgturyswkmbdhvn]/=T,";
    var v686 = v787 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v545 = v686 + "/[tu]g[agr]/=W,";
    var v283 = v545 + "/[tu]a[ctuy]/=Y,";
    return v283 + "/[tu]a[agr]/=*"
  }
  var v546 = type$$25.toLowerCase();
  var v286 = v546 == "transl_table=5";
  if(v286) {
    var v1282 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1265 = v1282 + "/ga[tcuy]/=D,";
    var v1248 = v1265 + "/ga[agr]/=E,";
    var v1230 = v1248 + "/[tu][tu][tcuy]/=F,";
    var v1211 = v1230 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1190 = v1211 + "/ca[tcuy]/=H,";
    var v1169 = v1190 + "/a[tu][tcuy]/=I,";
    var v1148 = v1169 + "/aa[agr]/=K,";
    var v1123 = v1148 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1097 = v1123 + "/a[tu][agr]/=M,";
    var v1069 = v1097 + "/aa[tucy]/=N,";
    var v1038 = v1069 + "/cc[acgturyswkmbdhvn]/=P,";
    var v984 = v1038 + "/ca[agr]/=Q,";
    var v930 = v984 + "/cg[acgturyswkmbdhvn]/=R,";
    var v866 = v930 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v788 = v866 + "/ac[acgturyswkmbdhvn]/=T,";
    var v687 = v788 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v547 = v687 + "/[tu]g[agr]/=W,";
    var v285 = v547 + "/[tu]a[ctuy]/=Y,";
    return v285 + "/[tu]a[agr]/=*"
  }
  var v548 = type$$25.toLowerCase();
  var v288 = v548 == "transl_table=6";
  if(v288) {
    var v1283 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1266 = v1283 + "/ga[tcuy]/=D,";
    var v1249 = v1266 + "/ga[agr]/=E,";
    var v1231 = v1249 + "/[tu][tu][tcuy]/=F,";
    var v1212 = v1231 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1191 = v1212 + "/ca[tcuy]/=H,";
    var v1170 = v1191 + "/a[tu][atcuwmhy]/=I,";
    var v1149 = v1170 + "/aa[agr]/=K,";
    var v1124 = v1149 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1098 = v1124 + "/a[tu]g/=M,";
    var v1070 = v1098 + "/aa[tucy]/=N,";
    var v1039 = v1070 + "/cc[acgturyswkmbdhvn]/=P,";
    var v985 = v1039 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v931 = v985 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v867 = v931 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v789 = v867 + "/ac[acgturyswkmbdhvn]/=T,";
    var v688 = v789 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v549 = v688 + "/[tu]gg/=W,";
    var v287 = v549 + "/[tu]a[ctuy]/=Y,";
    return v287 + "/[tu]ga/=*"
  }
  var v550 = type$$25.toLowerCase();
  var v290 = v550 == "transl_table=9";
  if(v290) {
    var v1284 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1267 = v1284 + "/ga[tcuy]/=D,";
    var v1250 = v1267 + "/ga[agr]/=E,";
    var v1232 = v1250 + "/[tu][tu][tcuy]/=F,";
    var v1213 = v1232 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1192 = v1213 + "/ca[tcuy]/=H,";
    var v1171 = v1192 + "/a[tu][atcuwmhy]/=I,";
    var v1150 = v1171 + "/aag/=K,";
    var v1125 = v1150 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1099 = v1125 + "/a[tu]g/=M,";
    var v1071 = v1099 + "/aa[atcuwmhy]/=N,";
    var v1040 = v1071 + "/cc[acgturyswkmbdhvn]/=P,";
    var v986 = v1040 + "/ca[agr]/=Q,";
    var v932 = v986 + "/cg[acgturyswkmbdhvn]/=R,";
    var v868 = v932 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v790 = v868 + "/ac[acgturyswkmbdhvn]/=T,";
    var v689 = v790 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v551 = v689 + "/[tu]g[agr]/=W,";
    var v289 = v551 + "/[tu]a[ctuy]/=Y,";
    return v289 + "/[tu]a[agr]/=*"
  }
  var v552 = type$$25.toLowerCase();
  var v292 = v552 == "transl_table=10";
  if(v292) {
    var v1285 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1268 = v1285 + "/ga[tcuy]/=D,";
    var v1251 = v1268 + "/ga[agr]/=E,";
    var v1233 = v1251 + "/[tu][tu][tcuy]/=F,";
    var v1214 = v1233 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1193 = v1214 + "/ca[tcuy]/=H,";
    var v1172 = v1193 + "/a[tu][atcuwmhy]/=I,";
    var v1151 = v1172 + "/aa[agr]/=K,";
    var v1126 = v1151 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1100 = v1126 + "/a[tu]g/=M,";
    var v1072 = v1100 + "/aa[tucy]/=N,";
    var v1041 = v1072 + "/cc[acgturyswkmbdhvn]/=P,";
    var v987 = v1041 + "/ca[agr]/=Q,";
    var v933 = v987 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v869 = v933 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v791 = v869 + "/ac[acgturyswkmbdhvn]/=T,";
    var v690 = v791 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v553 = v690 + "/[tu]gg/=W,";
    var v291 = v553 + "/[tu]a[ctuy]/=Y,";
    return v291 + "/[tu]a[agr]/=*"
  }
  var v554 = type$$25.toLowerCase();
  var v294 = v554 == "transl_table=11";
  if(v294) {
    var v1286 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1269 = v1286 + "/ga[tcuy]/=D,";
    var v1252 = v1269 + "/ga[agr]/=E,";
    var v1234 = v1252 + "/[tu][tu][tcuy]/=F,";
    var v1215 = v1234 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1194 = v1215 + "/ca[tcuy]/=H,";
    var v1173 = v1194 + "/a[tu][atcuwmhy]/=I,";
    var v1152 = v1173 + "/aa[agr]/=K,";
    var v1127 = v1152 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1101 = v1127 + "/a[tu]g/=M,";
    var v1073 = v1101 + "/aa[tucy]/=N,";
    var v1042 = v1073 + "/cc[acgturyswkmbdhvn]/=P,";
    var v988 = v1042 + "/ca[agr]/=Q,";
    var v934 = v988 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v870 = v934 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v792 = v870 + "/ac[acgturyswkmbdhvn]/=T,";
    var v691 = v792 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v555 = v691 + "/[tu]gg/=W,";
    var v293 = v555 + "/[tu]a[ctuy]/=Y,";
    return v293 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v556 = type$$25.toLowerCase();
  var v296 = v556 == "transl_table=12";
  if(v296) {
    var v1287 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1270 = v1287 + "/ga[tcuy]/=D,";
    var v1253 = v1270 + "/ga[agr]/=E,";
    var v1235 = v1253 + "/[tu][tu][tcuy]/=F,";
    var v1216 = v1235 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1195 = v1216 + "/ca[tcuy]/=H,";
    var v1174 = v1195 + "/a[tu][atcuwmhy]/=I,";
    var v1153 = v1174 + "/aa[agr]/=K,";
    var v1128 = v1153 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1102 = v1128 + "/a[tu]g/=M,";
    var v1074 = v1102 + "/aa[tucy]/=N,";
    var v1043 = v1074 + "/cc[acgturyswkmbdhvn]/=P,";
    var v989 = v1043 + "/ca[agr]/=Q,";
    var v935 = v989 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v871 = v935 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v793 = v871 + "/ac[acgturyswkmbdhvn]/=T,";
    var v692 = v793 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v557 = v692 + "/[tu]gg/=W,";
    var v295 = v557 + "/[tu]a[ctuy]/=Y,";
    return v295 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v558 = type$$25.toLowerCase();
  var v298 = v558 == "transl_table=13";
  if(v298) {
    var v1288 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1271 = v1288 + "/ga[tcuy]/=D,";
    var v1254 = v1271 + "/ga[agr]/=E,";
    var v1236 = v1254 + "/[tu][tu][tcuy]/=F,";
    var v1217 = v1236 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1196 = v1217 + "/ca[tcuy]/=H,";
    var v1175 = v1196 + "/a[tu][tcuy]/=I,";
    var v1154 = v1175 + "/aa[agr]/=K,";
    var v1129 = v1154 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1103 = v1129 + "/a[tu][agr]/=M,";
    var v1075 = v1103 + "/aa[tucy]/=N,";
    var v1044 = v1075 + "/cc[acgturyswkmbdhvn]/=P,";
    var v990 = v1044 + "/ca[agr]/=Q,";
    var v936 = v990 + "/cg[acgturyswkmbdhvn]/=R,";
    var v872 = v936 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v794 = v872 + "/ac[acgturyswkmbdhvn]/=T,";
    var v693 = v794 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v559 = v693 + "/[tu]g[agr]/=W,";
    var v297 = v559 + "/[tu]a[ctuy]/=Y,";
    return v297 + "/[tu]a[agr]/=*"
  }
  var v560 = type$$25.toLowerCase();
  var v300 = v560 == "transl_table=14";
  if(v300) {
    var v1289 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1272 = v1289 + "/ga[tcuy]/=D,";
    var v1255 = v1272 + "/ga[agr]/=E,";
    var v1237 = v1255 + "/[tu][tu][tcuy]/=F,";
    var v1218 = v1237 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1197 = v1218 + "/ca[tcuy]/=H,";
    var v1176 = v1197 + "/a[tu][atcuwmhy]/=I,";
    var v1155 = v1176 + "/aag/=K,";
    var v1130 = v1155 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1104 = v1130 + "/a[tu]g/=M,";
    var v1076 = v1104 + "/aa[atcuwmhy]/=N,";
    var v1045 = v1076 + "/cc[acgturyswkmbdhvn]/=P,";
    var v991 = v1045 + "/ca[agr]/=Q,";
    var v937 = v991 + "/cg[acgturyswkmbdhvn]/=R,";
    var v873 = v937 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v795 = v873 + "/ac[acgturyswkmbdhvn]/=T,";
    var v694 = v795 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v561 = v694 + "/[tu]g[agr]/=W,";
    var v299 = v561 + "/[tu]a[atcuwmhy]/=Y,";
    return v299 + "/[tu]ag/=*"
  }
  var v562 = type$$25.toLowerCase();
  var v302 = v562 == "transl_table=15";
  if(v302) {
    var v1290 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1273 = v1290 + "/ga[tcuy]/=D,";
    var v1256 = v1273 + "/ga[agr]/=E,";
    var v1238 = v1256 + "/[tu][tu][tcuy]/=F,";
    var v1219 = v1238 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1198 = v1219 + "/ca[tcuy]/=H,";
    var v1177 = v1198 + "/a[tu][atcuwmhy]/=I,";
    var v1156 = v1177 + "/aa[agr]/=K,";
    var v1131 = v1156 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1105 = v1131 + "/a[tu]g/=M,";
    var v1077 = v1105 + "/aa[tucy]/=N,";
    var v1046 = v1077 + "/cc[acgturyswkmbdhvn]/=P,";
    var v992 = v1046 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v938 = v992 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v874 = v938 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v796 = v874 + "/ac[acgturyswkmbdhvn]/=T,";
    var v695 = v796 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v563 = v695 + "/[tu]gg/=W,";
    var v301 = v563 + "/[tu]a[ctuy]/=Y,";
    return v301 + "/[tu][agr]a/=*"
  }
  var v564 = type$$25.toLowerCase();
  var v304 = v564 == "transl_table=16";
  if(v304) {
    var v1291 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1274 = v1291 + "/ga[tcuy]/=D,";
    var v1257 = v1274 + "/ga[agr]/=E,";
    var v1239 = v1257 + "/[tu][tu][tcuy]/=F,";
    var v1220 = v1239 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1199 = v1220 + "/ca[tcuy]/=H,";
    var v1178 = v1199 + "/a[tu][atcuwmhy]/=I,";
    var v1157 = v1178 + "/aa[agr]/=K,";
    var v1132 = v1157 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1106 = v1132 + "/a[tu]g/=M,";
    var v1078 = v1106 + "/aa[tucy]/=N,";
    var v1047 = v1078 + "/cc[acgturyswkmbdhvn]/=P,";
    var v993 = v1047 + "/ca[agr]/=Q,";
    var v939 = v993 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v875 = v939 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v797 = v875 + "/ac[acgturyswkmbdhvn]/=T,";
    var v696 = v797 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v565 = v696 + "/[tu]gg/=W,";
    var v303 = v565 + "/[tu]a[ctuy]/=Y,";
    return v303 + "/[tu][agr]a/=*"
  }
  var v566 = type$$25.toLowerCase();
  var v306 = v566 == "transl_table=21";
  if(v306) {
    var v1292 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1275 = v1292 + "/ga[tcuy]/=D,";
    var v1258 = v1275 + "/ga[agr]/=E,";
    var v1240 = v1258 + "/[tu][tu][tcuy]/=F,";
    var v1221 = v1240 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1200 = v1221 + "/ca[tcuy]/=H,";
    var v1179 = v1200 + "/a[tu][tcuy]/=I,";
    var v1158 = v1179 + "/aag/=K,";
    var v1133 = v1158 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1107 = v1133 + "/a[tu][agr]/=M,";
    var v1079 = v1107 + "/aa[atcuwmhy]/=N,";
    var v1048 = v1079 + "/cc[acgturyswkmbdhvn]/=P,";
    var v994 = v1048 + "/ca[agr]/=Q,";
    var v940 = v994 + "/cg[acgturyswkmbdhvn]/=R,";
    var v876 = v940 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v798 = v876 + "/ac[acgturyswkmbdhvn]/=T,";
    var v697 = v798 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v567 = v697 + "/[tu]g[agr]/=W,";
    var v305 = v567 + "/[tu]a[ctuy]/=Y,";
    return v305 + "/[tu]a[agr]/=*"
  }
  var v568 = type$$25.toLowerCase();
  var v308 = v568 == "transl_table=22";
  if(v308) {
    var v1293 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1276 = v1293 + "/ga[tcuy]/=D,";
    var v1259 = v1276 + "/ga[agr]/=E,";
    var v1241 = v1259 + "/[tu][tu][tcuy]/=F,";
    var v1222 = v1241 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1201 = v1222 + "/ca[tcuy]/=H,";
    var v1180 = v1201 + "/a[tu][atcuwmhy]/=I,";
    var v1159 = v1180 + "/aa[agr]/=K,";
    var v1134 = v1159 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1108 = v1134 + "/a[tu]g/=M,";
    var v1080 = v1108 + "/aa[tucy]/=N,";
    var v1049 = v1080 + "/cc[acgturyswkmbdhvn]/=P,";
    var v995 = v1049 + "/ca[agr]/=Q,";
    var v941 = v995 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v877 = v941 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v799 = v877 + "/ac[acgturyswkmbdhvn]/=T,";
    var v698 = v799 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v569 = v698 + "/[tu]gg/=W,";
    var v307 = v569 + "/[tu]a[ctuy]/=Y,";
    return v307 + "/[tu][agcrsmv]a/=*"
  }
  var v570 = type$$25.toLowerCase();
  var v310 = v570 == "transl_table=23";
  if(v310) {
    var v1294 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1277 = v1294 + "/ga[tcuy]/=D,";
    var v1260 = v1277 + "/ga[agr]/=E,";
    var v1242 = v1260 + "/[tu][tu][tcuy]/=F,";
    var v1223 = v1242 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1202 = v1223 + "/ca[tcuy]/=H,";
    var v1181 = v1202 + "/a[tu][atcuwmhy]/=I,";
    var v1160 = v1181 + "/aa[agr]/=K,";
    var v1135 = v1160 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1109 = v1135 + "/a[tu]g/=M,";
    var v1081 = v1109 + "/aa[tucy]/=N,";
    var v1050 = v1081 + "/cc[acgturyswkmbdhvn]/=P,";
    var v996 = v1050 + "/ca[agr]/=Q,";
    var v942 = v996 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v878 = v942 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v800 = v878 + "/ac[acgturyswkmbdhvn]/=T,";
    var v699 = v800 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v571 = v699 + "/[tu]gg/=W,";
    var v309 = v571 + "/[tu]a[ctuy]/=Y,";
    return v309 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function orfFind(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 1E5;
  var v572 = testScript();
  var v311 = v572 == false;
  if(v311) {
    return false
  }
  var v997 = theDocument.forms;
  var v943 = v997[0];
  var v879 = v943.elements;
  var v801 = v879[8];
  var v700 = v801.options;
  var v998 = theDocument.forms;
  var v944 = v998[0];
  var v880 = v944.elements;
  var v802 = v880[8];
  var v701 = v802.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v573 = v700[v701]
  }
  var v312 = v573.value;
  var geneticCode = getGeneticCodeString(v312);
  geneticCode = geneticCode.split(/,/);
  var v881 = theDocument.forms;
  var v803 = v881[0];
  var v702 = v803.elements;
  var v574 = v702[7];
  var v313 = v574.value;
  var enteredNumber = v313.replace(/[^\d]/g, "");
  var v999 = theDocument.forms;
  var v945 = v999[0];
  var v882 = v945.elements;
  var v804 = v882[0];
  var v703 = checkFormElement(v804);
  var v575 = v703 == false;
  var v705 = !v575;
  if(v705) {
    var v1051 = theDocument.forms;
    var v1000 = v1051[0];
    var v946 = v1000.elements;
    var v883 = v946[7];
    var v805 = checkFormElement(v883);
    var v704 = v805 == false;
    var v807 = !v704;
    if(v807) {
      var v884 = verifyDigits(enteredNumber);
      var v806 = v884 == false;
      var v886 = !v806;
      if(v886) {
        var v1110 = theDocument.forms;
        var v1082 = v1110[0];
        var v1052 = v1082.elements;
        var v1001 = v1052[0];
        var v947 = v1001.value;
        var v885 = checkSequenceLength(v947, maxInput$$3);
        v806 = v885 == false
      }
      v704 = v806
    }
    v575 = v704
  }
  var v314 = v575;
  if(v314) {
    return false
  }
  var v576 = checkGeneticCode(geneticCode);
  var v315 = v576 == false;
  if(v315) {
    return false
  }
  var v887 = theDocument.forms;
  var v808 = v887[0];
  var v706 = v808.elements;
  var v577 = v706[0];
  var v316 = v577.value;
  newDna = getSequenceFromFasta(v316);
  var v888 = theDocument.forms;
  var v809 = v888[0];
  var v707 = v809.elements;
  var v578 = v707[0];
  var v317 = v578.value;
  title$$9 = getTitleFromFasta(v317);
  verifyDna(newDna);
  newDna = removeNonDna(newDna);
  openWindow("ORF Finder");
  var v318 = outputWindow.document;
  var v319 = getInfoFromTitleAndSequence(title$$9, newDna);
  JAMScript.call(v318.write, v318, [v319]);
  openPre();
  var v1053 = theDocument.forms;
  var v1002 = v1053[0];
  var v948 = v1002.elements;
  var v889 = v948[5];
  var v810 = v889.options;
  var v1054 = theDocument.forms;
  var v1003 = v1054[0];
  var v949 = v1003.elements;
  var v890 = v949[5];
  var v811 = v890.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v708 = v810[v811]
  }
  var v579 = v708.value;
  var v329 = v579 == "all";
  if(v329) {
    var v1004 = theDocument.forms;
    var v950 = v1004[0];
    var v891 = v950.elements;
    var v812 = v891[4];
    var v709 = v812.options;
    var v1005 = theDocument.forms;
    var v951 = v1005[0];
    var v892 = v951.elements;
    var v813 = v892[4];
    var v710 = v813.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v580 = v709[v710]
    }
    var v320 = v580.value;
    var v1006 = theDocument.forms;
    var v952 = v1006[0];
    var v893 = v952.elements;
    var v814 = v893[6];
    var v711 = v814.options;
    var v1007 = theDocument.forms;
    var v953 = v1007[0];
    var v894 = v953.elements;
    var v815 = v894[6];
    var v712 = v815.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v581 = v711[v712]
    }
    var v321 = v581.value;
    writeOrfs(newDna, geneticCode, v320, 0, v321, enteredNumber);
    var v1008 = theDocument.forms;
    var v954 = v1008[0];
    var v895 = v954.elements;
    var v816 = v895[4];
    var v713 = v816.options;
    var v1009 = theDocument.forms;
    var v955 = v1009[0];
    var v896 = v955.elements;
    var v817 = v896[4];
    var v714 = v817.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v582 = v713[v714]
    }
    var v322 = v582.value;
    var v1010 = theDocument.forms;
    var v956 = v1010[0];
    var v897 = v956.elements;
    var v818 = v897[6];
    var v715 = v818.options;
    var v1011 = theDocument.forms;
    var v957 = v1011[0];
    var v898 = v957.elements;
    var v819 = v898[6];
    var v716 = v819.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v583 = v715[v716]
    }
    var v323 = v583.value;
    writeOrfs(newDna, geneticCode, v322, 1, v323, enteredNumber);
    var v1012 = theDocument.forms;
    var v958 = v1012[0];
    var v899 = v958.elements;
    var v820 = v899[4];
    var v717 = v820.options;
    var v1013 = theDocument.forms;
    var v959 = v1013[0];
    var v900 = v959.elements;
    var v821 = v900[4];
    var v718 = v821.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v584 = v717[v718]
    }
    var v324 = v584.value;
    var v1014 = theDocument.forms;
    var v960 = v1014[0];
    var v901 = v960.elements;
    var v822 = v901[6];
    var v719 = v822.options;
    var v1015 = theDocument.forms;
    var v961 = v1015[0];
    var v902 = v961.elements;
    var v823 = v902[6];
    var v720 = v823.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v585 = v719[v720]
    }
    var v325 = v585.value;
    writeOrfs(newDna, geneticCode, v324, 2, v325, enteredNumber)
  }else {
    var v1016 = theDocument.forms;
    var v962 = v1016[0];
    var v903 = v962.elements;
    var v824 = v903[4];
    var v721 = v824.options;
    var v1017 = theDocument.forms;
    var v963 = v1017[0];
    var v904 = v963.elements;
    var v825 = v904[4];
    var v722 = v825.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v586 = v721[v722]
    }
    var v326 = v586.value;
    var v1018 = theDocument.forms;
    var v964 = v1018[0];
    var v905 = v964.elements;
    var v826 = v905[5];
    var v723 = v826.options;
    var v1019 = theDocument.forms;
    var v965 = v1019[0];
    var v906 = v965.elements;
    var v827 = v906[5];
    var v724 = v827.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v587 = v723[v724]
    }
    var v327 = v587.value;
    var v1020 = theDocument.forms;
    var v966 = v1020[0];
    var v907 = v966.elements;
    var v828 = v907[6];
    var v725 = v828.options;
    var v1021 = theDocument.forms;
    var v967 = v1021[0];
    var v908 = v967.elements;
    var v829 = v908[6];
    var v726 = v829.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v588 = v725[v726]
    }
    var v328 = v588.value;
    writeOrfs(newDna, geneticCode, v326, v327, v328, enteredNumber)
  }
  closePre();
  closeWindow();
  return true
}
function writeOrfs(dnaSequence$$3, geneticCode$$1, startCodons, startPos, strand, theLength) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    var v330 = " " + p1$$2;
    return v330 + " "
  }
  var i$$11 = 0;
  var k$$3 = 0;
  var codon$$1 = "";
  var foundStart = false;
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  var proteinLength = 0;
  var foundStop = false;
  var geneticCodeMatchExpStop;
  var j$$10 = 0;
  var v589 = geneticCodeMatchExp$$2.length;
  var v332 = j$$10 < v589;
  for(;v332;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v590 = geneticCodeMatchResult$$2[j$$10]
    }
    var v331 = v590 == "*";
    if(v331) {
      geneticCodeMatchExpStop = geneticCodeMatchExp$$2[j$$10];
      break
    }
    j$$10 = j$$10 + 1;
    var v591 = geneticCodeMatchExp$$2.length;
    v332 = j$$10 < v591
  }
  var startRe = new RegExp(startCodons, "i");
  var sequenceToTranslate;
  startPos = parseInt(startPos);
  var rf = startPos + 1;
  theLength = parseInt(theLength);
  var v334 = strand == "reverse";
  if(v334) {
    var v333 = complement(dnaSequence$$3);
    dnaSequence$$3 = reverse(v333)
  }
  var v727 = dnaSequence$$3.length;
  var v592 = v727 - 3;
  var v353 = i$$11 <= v592;
  for(;v353;) {
    i$$11 = startPos;
    var v728 = dnaSequence$$3.length;
    var v593 = v728 - 3;
    var v352 = i$$11 <= v593;
    for(;v352;) {
      var v335 = i$$11 + 3;
      codon$$1 = dnaSequence$$3.substring(i$$11, v335);
      var v594 = startCodons != "any";
      if(v594) {
        var v729 = foundStart == false;
        if(v729) {
          var v830 = codon$$1.search(startRe);
          v729 = v830 == -1
        }
        v594 = v729
      }
      var v336 = v594;
      if(v336) {
        break
      }
      foundStart = true;
      var v595 = codon$$1.search(geneticCodeMatchExpStop);
      var v337 = v595 != -1;
      if(v337) {
        foundStop = true
      }
      proteinLength = proteinLength + 1;
      var v596 = foundStop;
      if(v596) {
        v596 = proteinLength < theLength
      }
      var v338 = v596;
      if(v338) {
        break
      }
      var v730 = foundStop;
      if(v730) {
        v730 = proteinLength >= theLength
      }
      var v597 = v730;
      var v732 = !v597;
      if(v732) {
        var v909 = dnaSequence$$3.length;
        var v831 = v909 - 5;
        var v731 = i$$11 >= v831;
        if(v731) {
          v731 = proteinLength >= theLength
        }
        v597 = v731
      }
      var v351 = v597;
      if(v351) {
        var v339 = i$$11 + 3;
        sequenceToTranslate = dnaSequence$$3.substring(startPos, v339);
        var v340 = outputWindow.document;
        var v1136 = k$$3 + 1;
        var v1111 = "&gt;ORF number " + v1136;
        var v1083 = v1111 + " in reading frame ";
        var v1055 = v1083 + rf;
        var v1022 = v1055 + " on the ";
        var v968 = v1022 + strand;
        var v910 = v968 + " strand extends from base ";
        var v911 = startPos + 1;
        var v832 = v910 + v911;
        var v733 = v832 + " to base ";
        var v734 = i$$11 + 3;
        var v598 = v733 + v734;
        var v341 = v598 + ".\n";
        JAMScript.call(v340.write, v340, [v341]);
        var v342 = outputWindow.document;
        var v599 = addReturns(sequenceToTranslate);
        var v343 = v599 + "\n\n";
        JAMScript.call(v342.write, v342, [v343]);
        var v344 = outputWindow.document;
        var v1023 = k$$3 + 1;
        var v969 = "&gt;Translation of ORF number " + v1023;
        var v912 = v969 + " in reading frame ";
        var v833 = v912 + rf;
        var v735 = v833 + " on the ";
        var v600 = v735 + strand;
        var v345 = v600 + " strand.\n";
        JAMScript.call(v344.write, v344, [v345]);
        sequenceToTranslate = sequenceToTranslate.replace(/(...)/g, v2);
        var m = 0;
        var v601 = geneticCodeMatchExp$$2.length;
        var v348 = m < v601;
        for(;v348;) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v346 = geneticCodeMatchExp$$2[m]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v347 = geneticCodeMatchResult$$2[m]
          }
          sequenceToTranslate = sequenceToTranslate.replace(v346, v347);
          m = m + 1;
          var v602 = geneticCodeMatchExp$$2.length;
          v348 = m < v602
        }
        sequenceToTranslate = sequenceToTranslate.replace(/\S{3}/g, "X");
        sequenceToTranslate = sequenceToTranslate.replace(/\s/g, "");
        sequenceToTranslate = sequenceToTranslate.replace(/[a-z]/g, "");
        var v349 = outputWindow.document;
        var v603 = addReturns(sequenceToTranslate);
        var v350 = v603 + "\n\n";
        JAMScript.call(v349.write, v349, [v350]);
        k$$3 = k$$3 + 1;
        break
      }
      i$$11 = i$$11 + 3;
      var v736 = dnaSequence$$3.length;
      var v604 = v736 - 3;
      v352 = i$$11 <= v604
    }
    startPos = i$$11 + 3;
    i$$11 = startPos;
    foundStart = false;
    foundStop = false;
    proteinLength = 0;
    var v737 = dnaSequence$$3.length;
    var v605 = v737 - 3;
    v353 = i$$11 <= v605
  }
  var v356 = k$$3 == 0;
  if(v356) {
    var v354 = outputWindow.document;
    var v606 = "No ORFs were found in reading frame " + rf;
    var v355 = v606 + ".\n\n";
    JAMScript.call(v354.write, v354, [v355])
  }
  return true
}
JAMScript.set(document, "onload", v3);
var v357 = document.getElementById("submitbtn");
JAMScript.set(v357, "onclick", v4);
var v358 = document.getElementById("clearbtn");
JAMScript.set(v358, "onclick", v5);

