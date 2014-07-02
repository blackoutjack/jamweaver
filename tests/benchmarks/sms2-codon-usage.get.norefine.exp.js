function v6() {
  var v790 = document.forms;
  var v666 = v790[0];
  var v396 = v666.elements;
  var v7 = v396[0];
  v7.value = " ";
  var v791 = document.forms;
  var v667 = v791[0];
  var v397 = v667.elements;
  var v8 = v397[4];
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
  var v398 = document.main_form;
  var v10 = v398.main_submit;
  v10.focus();
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
  var v11 = arrayOfSequences[0];
  var lengthOfAlign = v11.length;
  var v399 = arrayOfSequences.length;
  var v12 = v399 < 2;
  if(v12) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v400 = arrayOfTitles.length;
  var v14 = i$$1 < v400;
  for(;v14;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v792 = arrayOfTitles[i$$1]
    }
    var v668 = v792.search(/\S/);
    var v401 = v668 == -1;
    var v670 = !v401;
    if(v670) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v865 = arrayOfSequences[i$$1]
      }
      var v793 = v865.search(/\S/);
      var v669 = v793 == -1;
      var v795 = !v669;
      if(v795) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v866 = arrayOfSequences[i$$1]
        }
        var v794 = v866.length;
        v669 = v794 != lengthOfAlign
      }
      v401 = v669
    }
    var v13 = v401;
    if(v13) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v402 = arrayOfTitles.length;
    v14 = i$$1 < v402
  }
  return true
}
function checkCodonTable(codonTable) {
  var v671 = codonTable.search(/AmAcid/);
  var v403 = v671 == -1;
  var v673 = !v403;
  if(v673) {
    var v796 = codonTable.search(/Codon/);
    var v672 = v796 == -1;
    var v798 = !v672;
    if(v798) {
      var v867 = codonTable.search(/Number/);
      var v797 = v867 == -1;
      var v869 = !v797;
      if(v869) {
        var v921 = codonTable.search(/\/1000/);
        var v868 = v921 == -1;
        var v923 = !v868;
        if(v923) {
          var v922 = codonTable.search(/Fraction\s*\.\./);
          v868 = v922 == -1
        }
        v797 = v868
      }
      v672 = v797
    }
    v403 = v672
  }
  var v15 = v403;
  if(v15) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v674 = formElement.value;
  var v404 = v674.search(/\S/);
  var v16 = v404 == -1;
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
  var v405 = arrayOfPatterns.length;
  var v19 = z$$2 < v405;
  for(;v19;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v675 = arrayOfPatterns[z$$2]
    }
    var v406 = v675.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v17 = v406 == -1;
    if(v17) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v676 = arrayOfPatterns[z$$2]
    }
    var v407 = moreExpressionCheck(v676);
    var v18 = v407 == false;
    if(v18) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v408 = arrayOfPatterns.length;
    v19 = z$$2 < v408
  }
  var v20 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v20);
  var v21 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v21);
  var j = 0;
  var v409 = arrayOfPatterns.length;
  var v28 = j < v409;
  for(;v28;) {
    var v22 = geneticCodeMatchExp;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v799 = arrayOfPatterns[j]
    }
    var v677 = v799.match(/\/.+\//);
    var v410 = v677 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1264 = eval("introspect(JAMScript.introspectors.processAll) { " + v410 + " }")
    }else {
      var v1264 = JAMScript.call(eval, null, [v410])
    }
    v22[v23] = v1264;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v678 = arrayOfPatterns[j]
    }
    var v411 = v678.match(/=[a-zA-Z\*]/);
    var v1265 = v411.toString();
    v24[v25] = v1265;
    var v26 = geneticCodeMatchResult;
    var v27 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v412 = geneticCodeMatchResult[j]
    }
    var v1266 = v412.replace(/=/g, "");
    v26[v27] = v1266;
    j = j + 1;
    var v413 = arrayOfPatterns.length;
    v28 = j < v413
  }
  var i$$2 = 0;
  var v679 = testSequence.length;
  var v414 = v679 - 3;
  var v35 = i$$2 <= v414;
  for(;v35;) {
    var v29 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v29);
    j = 0;
    var v415 = geneticCodeMatchExp.length;
    var v33 = j < v415;
    for(;v33;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v680 = geneticCodeMatchExp[j]
      }
      var v416 = codon.search(v680);
      var v32 = v416 != -1;
      if(v32) {
        var v31 = oneMatch == true;
        if(v31) {
          var v417 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v30 = v417 + ".";
          alert(v30);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v418 = geneticCodeMatchExp.length;
      v33 = j < v418
    }
    var v34 = oneMatch == false;
    if(v34) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v681 = testSequence.length;
    var v419 = v681 - 3;
    v35 = i$$2 <= v419
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v420 = arrayOfPatterns$$1.length;
  var v37 = z$$3 < v420;
  for(;v37;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v682 = arrayOfPatterns$$1[z$$3]
    }
    var v421 = v682.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v36 = v421 != -1;
    if(v36) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v422 = arrayOfPatterns$$1.length;
    v37 = z$$3 < v422
  }
  var i$$3 = 0;
  var v423 = arrayOfPatterns$$1.length;
  var v41 = i$$3 < v423;
  for(;v41;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v683 = arrayOfPatterns$$1[i$$3]
    }
    var v424 = "[" + v683;
    var v38 = v424 + "]";
    var re = new RegExp(v38, "gi");
    var j$$1 = i$$3 + 1;
    var v425 = arrayOfPatterns$$1.length;
    var v40 = j$$1 < v425;
    for(;v40;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v684 = arrayOfPatterns$$1[j$$1]
      }
      var v426 = v684.search(re);
      var v39 = v426 != -1;
      if(v39) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v427 = arrayOfPatterns$$1.length;
      v40 = j$$1 < v427
    }
    i$$3 = i$$3 + 1;
    var v428 = arrayOfPatterns$$1.length;
    v41 = i$$3 < v428
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v429 = arrayOfPatterns$$2.length;
  var v44 = z$$4 < v429;
  for(;v44;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v685 = arrayOfPatterns$$2[z$$4]
    }
    var v430 = v685.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v42 = v430 == -1;
    if(v42) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v686 = arrayOfPatterns$$2[z$$4]
    }
    var v431 = moreExpressionCheck(v686);
    var v43 = v431 == false;
    if(v43) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v432 = arrayOfPatterns$$2.length;
    v44 = z$$4 < v432
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v800 = getSequenceFromFasta(text$$7);
  var v687 = v800.replace(/[^A-Za-z]/g, "");
  var v433 = v687.length;
  var v46 = v433 > maxInput;
  if(v46) {
    var v434 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v45 = v434 + " characters.";
    alert(v45);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v435 = text$$8.length;
  var v48 = v435 > maxInput$$1;
  if(v48) {
    var v436 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v47 = v436 + " characters.";
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
  var v437 = alignArray.length;
  var v55 = v437 < 3;
  if(v55) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v438 = alignArray.length;
  var v57 = i$$4 < v438;
  for(;v57;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v688 = alignArray[i$$4]
    }
    var v439 = v688.search(/[^\s]+\s/);
    var v56 = v439 == -1;
    if(v56) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v440 = alignArray.length;
    v57 = i$$4 < v440
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
  var v441 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v60 = v441 != -1;
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
  var v442 = sequence$$2.length;
  var v61 = "&gt;results for " + v442;
  var stringToReturn = v61 + " residue sequence ";
  var v443 = fastaSequenceTitle.search(/[^\s]/);
  var v63 = v443 != -1;
  if(v63) {
    var v444 = stringToReturn + '"';
    var v62 = v444 + fastaSequenceTitle;
    stringToReturn = v62 + '"'
  }
  var v445 = stringToReturn + ' starting "';
  var v446 = sequence$$2.substring(0, 10);
  var v64 = v445 + v446;
  stringToReturn = v64 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v447 = sequenceOne.length;
  var v65 = "Search results for " + v447;
  var stringToReturn$$1 = v65 + " residue sequence ";
  var v448 = fastaSequenceTitleOne.search(/[^\s]/);
  var v67 = v448 != -1;
  if(v67) {
    var v449 = stringToReturn$$1 + '"';
    var v66 = v449 + fastaSequenceTitleOne;
    stringToReturn$$1 = v66 + '"'
  }
  var v450 = stringToReturn$$1 + ' starting "';
  var v451 = sequenceOne.substring(0, 10);
  var v68 = v450 + v451;
  stringToReturn$$1 = v68 + '"\n';
  var v452 = stringToReturn$$1 + "and ";
  var v453 = sequenceTwo.length;
  var v69 = v452 + v453;
  stringToReturn$$1 = v69 + " residue sequence ";
  var v454 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v71 = v454 != -1;
  if(v71) {
    var v455 = stringToReturn$$1 + '"';
    var v70 = v455 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v70 + '"'
  }
  var v456 = stringToReturn$$1 + ' starting "';
  var v457 = sequenceTwo.substring(0, 10);
  var v72 = v456 + v457;
  stringToReturn$$1 = v72 + '"';
  var v73 = '<div class="info">' + stringToReturn$$1;
  return v73 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v74 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v74);
  var j$$2 = 0;
  var v458 = arrayOfPatterns$$3.length;
  var v77 = j$$2 < v458;
  for(;v77;) {
    var v75 = geneticCodeMatchExp$$1;
    var v76 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v801 = arrayOfPatterns$$3[j$$2]
    }
    var v689 = v801.match(/\/.+\//);
    var v459 = v689 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1267 = eval("introspect(JAMScript.introspectors.processAll) { " + v459 + " }")
    }else {
      var v1267 = JAMScript.call(eval, null, [v459])
    }
    v75[v76] = v1267;
    j$$2 = j$$2 + 1;
    var v460 = arrayOfPatterns$$3.length;
    v77 = j$$2 < v460
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v78 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v78);
  var j$$3 = 0;
  var v461 = arrayOfPatterns$$4.length;
  var v83 = j$$3 < v461;
  for(;v83;) {
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v690 = arrayOfPatterns$$4[j$$3]
    }
    var v462 = v690.match(/=[a-zA-Z\*]/);
    var v1268 = v462.toString();
    v79[v80] = v1268;
    var v81 = geneticCodeMatchResult$$1;
    var v82 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v463 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1269 = v463.replace(/=/g, "");
    v81[v82] = v1269;
    j$$3 = j$$3 + 1;
    var v464 = arrayOfPatterns$$4.length;
    v83 = j$$3 < v464
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v465 = sequence$$3.length;
  var v84 = "Results for " + v465;
  var stringToReturn$$2 = v84 + " residue sequence ";
  var v466 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v86 = v466 != -1;
  if(v86) {
    var v467 = stringToReturn$$2 + '"';
    var v85 = v467 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v85 + '"'
  }
  var v468 = stringToReturn$$2 + ' starting "';
  var v469 = sequence$$3.substring(0, 10);
  var v87 = v468 + v469;
  stringToReturn$$2 = v87 + '"';
  var v88 = '<div class="info">' + stringToReturn$$2;
  return v88 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v691 = "Results for " + topology;
  var v470 = v691 + " ";
  var v471 = sequence$$4.length;
  var v89 = v470 + v471;
  var stringToReturn$$3 = v89 + " residue sequence ";
  var v472 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v91 = v472 != -1;
  if(v91) {
    var v473 = stringToReturn$$3 + '"';
    var v90 = v473 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v90 + '"'
  }
  var v474 = stringToReturn$$3 + ' starting "';
  var v475 = sequence$$4.substring(0, 10);
  var v92 = v474 + v475;
  stringToReturn$$3 = v92 + '"';
  var v93 = '<div class="info">' + stringToReturn$$3;
  return v93 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v476 = sequenceOne$$1.length;
  var v94 = "Alignment results for " + v476;
  var stringToReturn$$4 = v94 + " residue sequence ";
  var v477 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v96 = v477 != -1;
  if(v96) {
    var v478 = stringToReturn$$4 + '"';
    var v95 = v478 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v95 + '"'
  }
  var v479 = stringToReturn$$4 + ' starting "';
  var v480 = sequenceOne$$1.substring(0, 10);
  var v97 = v479 + v480;
  stringToReturn$$4 = v97 + '"\n';
  var v481 = stringToReturn$$4 + "and ";
  var v482 = sequenceTwo$$1.length;
  var v98 = v481 + v482;
  stringToReturn$$4 = v98 + " residue sequence ";
  var v483 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v100 = v483 != -1;
  if(v100) {
    var v484 = stringToReturn$$4 + '"';
    var v99 = v484 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v99 + '"'
  }
  var v485 = stringToReturn$$4 + ' starting "';
  var v486 = sequenceTwo$$1.substring(0, 10);
  var v101 = v485 + v486;
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
    var v487 = Math.random();
    var v488 = components.length;
    var v103 = v487 * v488;
    tempNum = Math.floor(v103);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v104 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v489 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v489 != -1;
  if(v105) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v490 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v107 = v490 != -1;
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
  var v692 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v491 = v692 != -1;
  var v694 = !v491;
  if(v694) {
    var v802 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v693 = v802 != -1;
    var v804 = !v693;
    if(v804) {
      var v870 = expressionToCheck.search(/\[\]/);
      var v803 = v870 != -1;
      var v872 = !v803;
      if(v872) {
        var v924 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v871 = v924 != -1;
        var v926 = !v871;
        if(v926) {
          var v962 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v925 = v962 != -1;
          var v964 = !v925;
          if(v964) {
            var v997 = expressionToCheck.search(/\|\|/);
            var v963 = v997 != -1;
            var v999 = !v963;
            if(v999) {
              var v1028 = expressionToCheck.search(/\/\|/);
              var v998 = v1028 != -1;
              var v1030 = !v998;
              if(v1030) {
                var v1056 = expressionToCheck.search(/\|\//);
                var v1029 = v1056 != -1;
                var v1058 = !v1029;
                if(v1058) {
                  var v1082 = expressionToCheck.search(/\[.\]/);
                  var v1057 = v1082 != -1;
                  var v1084 = !v1057;
                  if(v1084) {
                    var v1106 = expressionToCheck.search(/\</);
                    var v1083 = v1106 != -1;
                    var v1108 = !v1083;
                    if(v1108) {
                      var v1107 = expressionToCheck.search(/\>/);
                      v1083 = v1107 != -1
                    }
                    v1057 = v1083
                  }
                  v1029 = v1057
                }
                v998 = v1029
              }
              v963 = v998
            }
            v925 = v963
          }
          v871 = v925
        }
        v803 = v871
      }
      v693 = v803
    }
    v491 = v693
  }
  var v108 = v491;
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
    var v1294 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1294[2], v1294[1], v1294[0]);
  outputWindow.focus();
  var v113 = outputWindow.document;
  var v805 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v695 = v805 + "<head>\n";
  var v492 = v695 + "<title>Sequence Manipulation Suite</title>\n";
  var v114 = v492 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v113.write, v113, [v114]);
  if(isColor) {
    var v115 = outputWindow.document;
    var v1172 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1151 = v1172 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1130 = v1151 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1109 = v1130 + "div.info {font-weight: bold}\n";
    var v1085 = v1109 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1059 = v1085 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1031 = v1059 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1000 = v1031 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v965 = v1000 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v927 = v965 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v873 = v927 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v806 = v873 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v696 = v806 + "td.many {color: #000000}\n";
    var v493 = v696 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v116 = v493 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }else {
    var v117 = outputWindow.document;
    var v1193 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1173 = v1193 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1152 = v1173 + "div.title {display: none}\n";
    var v1131 = v1152 + "div.info {font-weight: bold}\n";
    var v1110 = v1131 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1086 = v1110 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1060 = v1086 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1032 = v1060 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1001 = v1032 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v966 = v1001 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v928 = v966 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v874 = v928 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v807 = v874 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v697 = v807 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v494 = v697 + "img {display: none}\n";
    var v118 = v494 + "</style>\n";
    JAMScript.call(v117.write, v117, [v118])
  }
  var v119 = outputWindow.document;
  var v808 = "</head>\n" + '<body class="main">\n';
  var v698 = v808 + '<div class="title">';
  var v495 = v698 + title$$7;
  var v120 = v495 + " results</div>\n";
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
    var v1295 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1295[2], v1295[1], v1295[0]);
  outputWindow.focus();
  var v121 = outputWindow.document;
  var v809 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v699 = v809 + "<head>\n";
  var v496 = v699 + "<title>Sequence Manipulation Suite</title>\n";
  var v122 = v496 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v121.write, v121, [v122]);
  if(isBackground) {
    var v123 = outputWindow.document;
    var v1174 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1153 = v1174 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1132 = v1153 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1111 = v1132 + "div.info {font-weight: bold}\n";
    var v1087 = v1111 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1061 = v1087 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1033 = v1061 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1002 = v1033 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v967 = v1002 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v929 = v967 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v875 = v929 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v810 = v875 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v700 = v810 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v497 = v700 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v124 = v497 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }else {
    var v125 = outputWindow.document;
    var v1212 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1194 = v1212 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1175 = v1194 + "div.title {display: none}\n";
    var v1154 = v1175 + "div.info {font-weight: bold}\n";
    var v1133 = v1154 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1112 = v1133 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1088 = v1112 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1062 = v1088 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1034 = v1062 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1003 = v1034 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v968 = v1003 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v930 = v968 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v876 = v930 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v811 = v876 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v701 = v811 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v498 = v701 + "img {display: none}\n";
    var v126 = v498 + "</style>\n";
    JAMScript.call(v125.write, v125, [v126])
  }
  var v127 = outputWindow.document;
  var v812 = "</head>\n" + '<body class="main">\n';
  var v702 = v812 + '<div class="title">';
  var v499 = v702 + title$$9;
  var v128 = v499 + " results</div>\n";
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
  var v500 = dnaSequence$$1.search(/./);
  var v129 = v500 != -1;
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
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v501 = testArray[0];
  var v133 = v501 != testString;
  if(v133) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v502 = testString.search(re$$2);
  var v134 = v502 == -1;
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
  var v503 = testNum.toFixed(3);
  var v137 = v503 != 2489.824;
  if(v137) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v504 = testNum.toPrecision(5);
  var v138 = v504 != 2489.8;
  if(v138) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v505 = theNumber$$1.search(/\d/);
  var v139 = v505 == -1;
  if(v139) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v703 = emblFile.search(/ID/);
  var v506 = v703 == -1;
  var v705 = !v506;
  if(v705) {
    var v813 = emblFile.search(/AC/);
    var v704 = v813 == -1;
    var v815 = !v704;
    if(v815) {
      var v877 = emblFile.search(/DE/);
      var v814 = v877 == -1;
      var v879 = !v814;
      if(v879) {
        var v878 = emblFile.search(/SQ/);
        v814 = v878 == -1
      }
      v704 = v814
    }
    v506 = v704
  }
  var v140 = v506;
  if(v140) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v507 = theNumber$$2.search(/\d/);
  var v141 = v507 == -1;
  if(v141) {
    alert("Please enter a number.");
    return false
  }
  var v143 = theNumber$$2 > maxInput$$2;
  if(v143) {
    var v508 = "Please enter a number less than or equal to " + maxInput$$2;
    var v142 = v508 + ".";
    alert(v142);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v509 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v144 = v509 != -1;
  if(v144) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v510 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v145 = v510 != -1;
  if(v145) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v706 = genBankFile.search(/LOCUS/);
  var v511 = v706 == -1;
  var v708 = !v511;
  if(v708) {
    var v816 = genBankFile.search(/DEFINITION/);
    var v707 = v816 == -1;
    var v818 = !v707;
    if(v818) {
      var v880 = genBankFile.search(/ACCESSION/);
      var v817 = v880 == -1;
      var v882 = !v817;
      if(v882) {
        var v881 = genBankFile.search(/ORIGIN/);
        v817 = v881 == -1
      }
      v707 = v817
    }
    v511 = v707
  }
  var v146 = v511;
  if(v146) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v709 = genBankFile$$1.search(/LOCUS/);
  var v512 = v709 == -1;
  var v711 = !v512;
  if(v711) {
    var v819 = genBankFile$$1.search(/DEFINITION/);
    var v710 = v819 == -1;
    var v821 = !v710;
    if(v821) {
      var v883 = genBankFile$$1.search(/ACCESSION/);
      var v820 = v883 == -1;
      var v885 = !v820;
      if(v885) {
        var v884 = genBankFile$$1.search(/ORIGIN/);
        v820 = v884 == -1
      }
      v710 = v820
    }
    v512 = v710
  }
  var v147 = v512;
  if(v147) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v513 = genBankFile$$1.search(/FEATURES {13}/);
  var v148 = v513 == -1;
  if(v148) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v712 = emblFile$$1.search(/ID/);
  var v514 = v712 == -1;
  var v714 = !v514;
  if(v714) {
    var v822 = emblFile$$1.search(/AC/);
    var v713 = v822 == -1;
    var v824 = !v713;
    if(v824) {
      var v886 = emblFile$$1.search(/DE/);
      var v823 = v886 == -1;
      var v888 = !v823;
      if(v888) {
        var v887 = emblFile$$1.search(/SQ/);
        v823 = v887 == -1
      }
      v713 = v823
    }
    v514 = v713
  }
  var v149 = v514;
  if(v149) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v515 = emblFile$$1.search(/^FT/m);
  var v150 = v515 == -1;
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
  var v158 = i$$5 < stopBase;
  for(;v158;) {
    var v151 = i$$5 + 1;
    lineOfText = rightNum(v151, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v516 = basePerLine / groupSize;
    var v155 = j$$6 <= v516;
    for(;v155;) {
      var v154 = k < groupSize;
      for(;v154;) {
        var v152 = lineOfText;
        var v517 = k + i$$5;
        var v153 = text$$10.charAt(v517);
        lineOfText = v152 + v153;
        k = k + 1;
        v154 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v518 = basePerLine / groupSize;
      v155 = j$$6 <= v518
    }
    var v156 = outputWindow.document;
    var v157 = lineOfText + "\n";
    JAMScript.call(v156.write, v156, [v157]);
    lineOfText = "";
    v158 = i$$5 < stopBase
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
    var v519 = adjustment < 0;
    if(v519) {
      v519 = adjusted >= 0
    }
    var v159 = v519;
    if(v159) {
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
  var v192 = i$$6 < stopBase$$2;
  for(;v192;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v520 = basePerLine$$2 / groupSize$$2;
    var v168 = j$$7 <= v520;
    for(;v168;) {
      var v163 = k$$1 < groupSize$$2;
      for(;v163;) {
        var v521 = i$$6 + k$$1;
        var v160 = v521 >= stopBase$$2;
        if(v160) {
          break
        }
        var v161 = lineOfText$$1;
        var v522 = k$$1 + i$$6;
        var v162 = text$$12.charAt(v522);
        lineOfText$$1 = v161 + v162;
        k$$1 = k$$1 + 1;
        v163 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v166 = numberPosition$$1 == "above";
      if(v166) {
        var v164 = aboveNum;
        var v523 = adjustNumbering(i$$6, numberingAdjustment);
        var v165 = rightNum(v523, "", groupSize$$2, tabIn$$3);
        aboveNum = v164 + v165
      }
      var v167 = i$$6 >= stopBase$$2;
      if(v167) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v524 = basePerLine$$2 / groupSize$$2;
      v168 = j$$7 <= v524
    }
    var v191 = numberPosition$$1 == "left";
    if(v191) {
      var v169 = outputWindow.document;
      var v825 = adjustNumbering(lineNum, numberingAdjustment);
      var v715 = rightNum(v825, "", 8, tabIn$$3);
      var v525 = v715 + lineOfText$$1;
      var v170 = v525 + "\n";
      JAMScript.call(v169.write, v169, [v170]);
      var v174 = strands$$1 == "two";
      if(v174) {
        var v171 = outputWindow.document;
        var v826 = adjustNumbering(lineNum, numberingAdjustment);
        var v716 = rightNum(v826, "", 8, tabIn$$3);
        var v717 = complement(lineOfText$$1);
        var v526 = v716 + v717;
        var v172 = v526 + "\n";
        JAMScript.call(v171.write, v171, [v172]);
        var v173 = outputWindow.document;
        JAMScript.call(v173.write, v173, ["\n"])
      }
    }else {
      var v190 = numberPosition$$1 == "right";
      if(v190) {
        var v175 = outputWindow.document;
        var v718 = lineOfText$$1;
        var v719 = adjustNumbering(i$$6, numberingAdjustment);
        var v527 = v718 + v719;
        var v176 = v527 + "\n";
        JAMScript.call(v175.write, v175, [v176]);
        var v180 = strands$$1 == "two";
        if(v180) {
          var v177 = outputWindow.document;
          var v720 = complement(lineOfText$$1);
          var v721 = adjustNumbering(i$$6, numberingAdjustment);
          var v528 = v720 + v721;
          var v178 = v528 + "\n";
          JAMScript.call(v177.write, v177, [v178]);
          var v179 = outputWindow.document;
          JAMScript.call(v179.write, v179, ["\n"])
        }
      }else {
        var v189 = numberPosition$$1 == "above";
        if(v189) {
          var v181 = outputWindow.document;
          var v182 = aboveNum + "\n";
          JAMScript.call(v181.write, v181, [v182]);
          var v183 = outputWindow.document;
          var v184 = lineOfText$$1 + "\n";
          JAMScript.call(v183.write, v183, [v184]);
          var v188 = strands$$1 == "two";
          if(v188) {
            var v185 = outputWindow.document;
            var v529 = complement(lineOfText$$1);
            var v186 = v529 + "\n";
            JAMScript.call(v185.write, v185, [v186]);
            var v187 = outputWindow.document;
            JAMScript.call(v187.write, v187, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v192 = i$$6 < stopBase$$2
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
  var v213 = i$$7 < stopBase$$3;
  for(;v213;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v530 = basePerLine$$3 / groupSize$$3;
    var v201 = j$$8 <= v530;
    for(;v201;) {
      var v196 = k$$2 < groupSize$$3;
      for(;v196;) {
        var v531 = i$$7 + k$$2;
        var v193 = v531 >= stopBase$$3;
        if(v193) {
          break
        }
        var v194 = lineOfText$$2;
        var v532 = k$$2 + i$$7;
        var v195 = text$$13.charAt(v532);
        lineOfText$$2 = v194 + v195;
        k$$2 = k$$2 + 1;
        v196 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v199 = numberPosition$$2 == "above";
      if(v199) {
        var v197 = aboveNum$$1;
        var v198 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v197 + v198
      }
      var v200 = i$$7 >= stopBase$$3;
      if(v200) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v533 = basePerLine$$3 / groupSize$$3;
      v201 = j$$8 <= v533
    }
    var v212 = numberPosition$$2 == "left";
    if(v212) {
      var v202 = outputWindow.document;
      var v722 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v534 = v722 + lineOfText$$2;
      var v203 = v534 + "\n";
      JAMScript.call(v202.write, v202, [v203])
    }else {
      var v211 = numberPosition$$2 == "right";
      if(v211) {
        var v204 = outputWindow.document;
        var v535 = lineOfText$$2 + i$$7;
        var v205 = v535 + "\n";
        JAMScript.call(v204.write, v204, [v205])
      }else {
        var v210 = numberPosition$$2 == "above";
        if(v210) {
          var v206 = outputWindow.document;
          var v207 = aboveNum$$1 + "\n";
          JAMScript.call(v206.write, v206, [v207]);
          var v208 = outputWindow.document;
          var v209 = lineOfText$$2 + "\n";
          JAMScript.call(v208.write, v208, [v209])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v213 = i$$7 < stopBase$$3
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
  var v723 = sequence$$13.length;
  var v536 = v723 <= firstIndexToMutate;
  var v725 = !v536;
  if(v725) {
    var v724 = lastIndexToMutate < 0;
    var v827 = !v724;
    if(v827) {
      v724 = lastIndexToMutate <= firstIndexToMutate
    }
    v536 = v724
  }
  var v214 = v536;
  if(v214) {
    numMut = 0
  }
  var i$$8 = 0;
  var v222 = i$$8 < numMut;
  for(;v222;) {
    maxNum = sequence$$13.length;
    var v537 = Math.random();
    var v215 = v537 * maxNum;
    randNum = Math.floor(v215);
    var v538 = randNum < firstIndexToMutate;
    var v726 = !v538;
    if(v726) {
      v538 = randNum > lastIndexToMutate
    }
    var v216 = v538;
    if(v216) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v222 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v539 = Math.random();
      var v540 = components$$1.length;
      var v217 = v539 * v540;
      componentsIndex = Math.round(v217);
      var v541 = components$$1.length;
      var v218 = componentsIndex == v541;
      if(v218) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v542 = components$$1[componentsIndex]
      }
      var v219 = v542 != currentChar;
      if(v219) {
        needNewChar = false
      }
    }
    var v543 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v544 = components$$1[componentsIndex]
    }
    var v220 = v543 + v544;
    var v545 = randNum + 1;
    var v546 = sequence$$13.length;
    var v221 = sequence$$13.substring(v545, v546);
    sequence$$13 = v220 + v221;
    i$$8 = i$$8 + 1;
    v222 = i$$8 < numMut
  }
  var v223 = outputWindow.document;
  var v224 = addReturns(sequence$$13);
  JAMScript.call(v223.write, v223, [v224]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v229 = j$$9 < lengthOut$$1;
  for(;v229;) {
    var v547 = Math.random();
    var v548 = components$$2.length;
    var v225 = v547 * v548;
    tempNum$$1 = Math.floor(v225);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v549 = sequence$$14.length;
    var v228 = v549 == 60;
    if(v228) {
      var v226 = outputWindow.document;
      var v227 = sequence$$14 + "\n";
      JAMScript.call(v226.write, v226, [v227]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v229 = j$$9 < lengthOut$$1
  }
  var v230 = outputWindow.document;
  var v231 = sequence$$14 + "\n";
  JAMScript.call(v230.write, v230, [v231]);
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
  var v235 = dnaConformation == "circular";
  if(v235) {
    var v232 = sequence$$15.substring(0, lookAhead);
    shiftValue = v232.length;
    var v828 = sequence$$15.length;
    var v727 = v828 - lookAhead;
    var v728 = sequence$$15.length;
    var v550 = sequence$$15.substring(v727, v728);
    var v233 = v550 + sequence$$15;
    var v234 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v233 + v234;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v236 = outputWindow.document;
  JAMScript.call(v236.write, v236, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v237 = outputWindow.document;
  var v829 = '<tr><td class="title" width="200px">' + "Site:";
  var v729 = v829 + '</td><td class="title">';
  var v551 = v729 + "Positions:";
  var v238 = v551 + "</td></tr>\n";
  JAMScript.call(v237.write, v237, [v238]);
  var i$$9 = 0;
  var v552 = arrayOfItems.length;
  var v254 = i$$9 < v552;
  for(;v254;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v553 = arrayOfItems[i$$9]
    }
    var v239 = v553.match(/\/.+\//);
    matchExp = v239 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v830 = arrayOfItems[i$$9]
    }
    var v730 = v830.match(/\)\D*\d+/);
    var v554 = v730.toString();
    var v240 = v554.replace(/\)\D*/, "");
    cutDistance = parseFloat(v240);
    var v246 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v246;) {
      var v241 = matchExp.lastIndex;
      matchPosition = v241 - cutDistance;
      var v555 = matchPosition >= lowerLimit;
      if(v555) {
        v555 = matchPosition < upperLimit
      }
      var v244 = v555;
      if(v244) {
        timesFound = timesFound + 1;
        var v242 = tempString$$1 + ", ";
        var v556 = matchPosition - shiftValue;
        var v243 = v556 + 1;
        tempString$$1 = v242 + v243
      }
      var v557 = matchExp.lastIndex;
      var v731 = RegExp.lastMatch;
      var v558 = v731.length;
      var v245 = v557 - v558;
      matchExp.lastIndex = v245 + 1;
      v246 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v559 = tempString$$1.search(/\d/);
    var v247 = v559 != -1;
    if(v247) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v251 = timesFound == 0;
    if(v251) {
      backGroundClass = "none"
    }else {
      var v250 = timesFound == 1;
      if(v250) {
        backGroundClass = "one"
      }else {
        var v249 = timesFound == 2;
        if(v249) {
          backGroundClass = "two"
        }else {
          var v248 = timesFound == 3;
          if(v248) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v252 = outputWindow.document;
    var v1004 = '<tr><td class="' + backGroundClass;
    var v969 = v1004 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1063 = arrayOfItems[i$$9]
    }
    var v1035 = v1063.match(/\([^\(]+\)/);
    var v1005 = v1035.toString();
    var v970 = v1005.replace(/\(|\)/g, "");
    var v931 = v969 + v970;
    var v889 = v931 + '</td><td class="';
    var v831 = v889 + backGroundClass;
    var v732 = v831 + '">';
    var v560 = v732 + tempString$$1;
    var v253 = v560 + "</td></tr>\n";
    JAMScript.call(v252.write, v252, [v253]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v561 = arrayOfItems.length;
    v254 = i$$9 < v561
  }
  var v255 = outputWindow.document;
  JAMScript.call(v255.write, v255, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v256 = outputWindow.document;
  JAMScript.call(v256.write, v256, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v257 = outputWindow.document;
  var v932 = '<tr><td class="title">' + "Pattern:";
  var v890 = v932 + '</td><td class="title">';
  var v832 = v890 + "Times found:";
  var v733 = v832 + '</td><td class="title">';
  var v562 = v733 + "Percentage:";
  var v258 = v562 + "</td></tr>\n";
  JAMScript.call(v257.write, v257, [v258]);
  var i$$10 = 0;
  var v563 = arrayOfItems$$1.length;
  var v267 = i$$10 < v563;
  for(;v267;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v564 = arrayOfItems$$1[i$$10]
    }
    var v259 = v564.match(/\/[^\/]+\//);
    var matchExp$$1 = v259 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v565 = sequence$$16.search(matchExp$$1);
    var v261 = v565 != -1;
    if(v261) {
      var v260 = sequence$$16.match(matchExp$$1);
      tempNumber = v260.length
    }
    var percentage = 0;
    var v734 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v891 = arrayOfItems$$1[i$$10]
    }
    var v833 = v891.match(/\d+/);
    var v735 = parseFloat(v833);
    var v566 = v734 - v735;
    var v264 = v566 > 0;
    if(v264) {
      var v262 = 100 * tempNumber;
      var v567 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v834 = arrayOfItems$$1[i$$10]
      }
      var v736 = v834.match(/\d+/);
      var v568 = parseFloat(v736);
      var v263 = v567 - v568;
      percentage = v262 / v263
    }
    var v265 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1064 = arrayOfItems$$1[i$$10]
    }
    var v1036 = v1064.match(/\([^\(]+\)\b/);
    var v1006 = v1036.toString();
    var v971 = v1006.replace(/\(|\)/g, "");
    var v933 = "<tr><td>" + v971;
    var v892 = v933 + "</td><td>";
    var v835 = v892 + tempNumber;
    var v737 = v835 + "</td><td>";
    var v738 = percentage.toFixed(2);
    var v569 = v737 + v738;
    var v266 = v569 + "</td></tr>\n";
    JAMScript.call(v265.write, v265, [v266]);
    i$$10 = i$$10 + 1;
    var v570 = arrayOfItems$$1.length;
    v267 = i$$10 < v570
  }
  var v268 = outputWindow.document;
  JAMScript.call(v268.write, v268, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v571 = sequence$$17.length;
  var v275 = v571 > 0;
  for(;v275;) {
    maxNum$$1 = sequence$$17.length;
    var v572 = Math.random();
    var v269 = v572 * maxNum$$1;
    randNum$$1 = Math.floor(v269);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v270 = randNum$$1 + 1;
    var v271 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v270, v271);
    sequence$$17 = tempString1 + tempString2;
    var v573 = tempSeq.length;
    var v274 = v573 == 60;
    if(v274) {
      var v272 = outputWindow.document;
      var v273 = tempSeq + "\n";
      JAMScript.call(v272.write, v272, [v273]);
      tempSeq = ""
    }
    var v574 = sequence$$17.length;
    v275 = v574 > 0
  }
  var v276 = outputWindow.document;
  var v277 = tempSeq + "\n";
  JAMScript.call(v276.write, v276, [v277]);
  return true
}
function getGeneticCodeString(type$$25) {
  var v739 = type$$25.toLowerCase();
  var v575 = v739 == "standard";
  var v741 = !v575;
  if(v741) {
    var v740 = type$$25.toLowerCase();
    v575 = v740 == "transl_table=1"
  }
  var v279 = v575;
  if(v279) {
    var v1247 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1230 = v1247 + "/ga[tcuy]/=D,";
    var v1213 = v1230 + "/ga[agr]/=E,";
    var v1195 = v1213 + "/[tu][tu][tcuy]/=F,";
    var v1176 = v1195 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1155 = v1176 + "/ca[tcuy]/=H,";
    var v1134 = v1155 + "/a[tu][atcuwmhy]/=I,";
    var v1113 = v1134 + "/aa[agr]/=K,";
    var v1089 = v1113 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1065 = v1089 + "/a[tu]g/=M,";
    var v1037 = v1065 + "/aa[tucy]/=N,";
    var v1007 = v1037 + "/cc[acgturyswkmbdhvn]/=P,";
    var v972 = v1007 + "/ca[agr]/=Q,";
    var v934 = v972 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v893 = v934 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v836 = v893 + "/ac[acgturyswkmbdhvn]/=T,";
    var v742 = v836 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v576 = v742 + "/[tu]gg/=W,";
    var v278 = v576 + "/[tu]a[ctuy]/=Y,";
    return v278 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v577 = type$$25.toLowerCase();
  var v281 = v577 == "transl_table=2";
  if(v281) {
    var v1248 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1231 = v1248 + "/ga[tcuy]/=D,";
    var v1214 = v1231 + "/ga[agr]/=E,";
    var v1196 = v1214 + "/[tu][tu][tcuy]/=F,";
    var v1177 = v1196 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1156 = v1177 + "/ca[tcuy]/=H,";
    var v1135 = v1156 + "/a[tu][tcuy]/=I,";
    var v1114 = v1135 + "/aa[agr]/=K,";
    var v1090 = v1114 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1066 = v1090 + "/a[tu][agr]/=M,";
    var v1038 = v1066 + "/aa[tucy]/=N,";
    var v1008 = v1038 + "/cc[acgturyswkmbdhvn]/=P,";
    var v973 = v1008 + "/ca[agr]/=Q,";
    var v935 = v973 + "/cg[acgturyswkmbdhvn]/=R,";
    var v894 = v935 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v837 = v894 + "/ac[acgturyswkmbdhvn]/=T,";
    var v743 = v837 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v578 = v743 + "/[tu]g[agr]/=W,";
    var v280 = v578 + "/[tu]a[ctuy]/=Y,";
    return v280 + "/[tu]a[agr]|ag[agr]/=*"
  }
  var v579 = type$$25.toLowerCase();
  var v283 = v579 == "transl_table=3";
  if(v283) {
    var v1249 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1232 = v1249 + "/ga[tcuy]/=D,";
    var v1215 = v1232 + "/ga[agr]/=E,";
    var v1197 = v1215 + "/[tu][tu][tcuy]/=F,";
    var v1178 = v1197 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1157 = v1178 + "/ca[tcuy]/=H,";
    var v1136 = v1157 + "/a[tu][tcuy]/=I,";
    var v1115 = v1136 + "/aa[agr]/=K,";
    var v1091 = v1115 + "/[tu][tu][agr]/=L,";
    var v1067 = v1091 + "/a[tu][agr]/=M,";
    var v1039 = v1067 + "/aa[tucy]/=N,";
    var v1009 = v1039 + "/cc[acgturyswkmbdhvn]/=P,";
    var v974 = v1009 + "/ca[agr]/=Q,";
    var v936 = v974 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v895 = v936 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v838 = v895 + "/ac[acgturyswkmbdhvn]|c[tu][acgturyswkmbdhvn]/=T,";
    var v744 = v838 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v580 = v744 + "/[tu]g[agr]/=W,";
    var v282 = v580 + "/[tu]a[ctuy]/=Y,";
    return v282 + "/[tu]a[agr]/=*"
  }
  var v581 = type$$25.toLowerCase();
  var v285 = v581 == "transl_table=4";
  if(v285) {
    var v1250 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1233 = v1250 + "/ga[tcuy]/=D,";
    var v1216 = v1233 + "/ga[agr]/=E,";
    var v1198 = v1216 + "/[tu][tu][tcuy]/=F,";
    var v1179 = v1198 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1158 = v1179 + "/ca[tcuy]/=H,";
    var v1137 = v1158 + "/a[tu][atcuwmhy]/=I,";
    var v1116 = v1137 + "/aa[agr]/=K,";
    var v1092 = v1116 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1068 = v1092 + "/a[tu]g/=M,";
    var v1040 = v1068 + "/aa[tucy]/=N,";
    var v1010 = v1040 + "/cc[acgturyswkmbdhvn]/=P,";
    var v975 = v1010 + "/ca[agr]/=Q,";
    var v937 = v975 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v896 = v937 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v839 = v896 + "/ac[acgturyswkmbdhvn]/=T,";
    var v745 = v839 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v582 = v745 + "/[tu]g[agr]/=W,";
    var v284 = v582 + "/[tu]a[ctuy]/=Y,";
    return v284 + "/[tu]a[agr]/=*"
  }
  var v583 = type$$25.toLowerCase();
  var v287 = v583 == "transl_table=5";
  if(v287) {
    var v1251 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1234 = v1251 + "/ga[tcuy]/=D,";
    var v1217 = v1234 + "/ga[agr]/=E,";
    var v1199 = v1217 + "/[tu][tu][tcuy]/=F,";
    var v1180 = v1199 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1159 = v1180 + "/ca[tcuy]/=H,";
    var v1138 = v1159 + "/a[tu][tcuy]/=I,";
    var v1117 = v1138 + "/aa[agr]/=K,";
    var v1093 = v1117 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1069 = v1093 + "/a[tu][agr]/=M,";
    var v1041 = v1069 + "/aa[tucy]/=N,";
    var v1011 = v1041 + "/cc[acgturyswkmbdhvn]/=P,";
    var v976 = v1011 + "/ca[agr]/=Q,";
    var v938 = v976 + "/cg[acgturyswkmbdhvn]/=R,";
    var v897 = v938 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v840 = v897 + "/ac[acgturyswkmbdhvn]/=T,";
    var v746 = v840 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v584 = v746 + "/[tu]g[agr]/=W,";
    var v286 = v584 + "/[tu]a[ctuy]/=Y,";
    return v286 + "/[tu]a[agr]/=*"
  }
  var v585 = type$$25.toLowerCase();
  var v289 = v585 == "transl_table=6";
  if(v289) {
    var v1252 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1235 = v1252 + "/ga[tcuy]/=D,";
    var v1218 = v1235 + "/ga[agr]/=E,";
    var v1200 = v1218 + "/[tu][tu][tcuy]/=F,";
    var v1181 = v1200 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1160 = v1181 + "/ca[tcuy]/=H,";
    var v1139 = v1160 + "/a[tu][atcuwmhy]/=I,";
    var v1118 = v1139 + "/aa[agr]/=K,";
    var v1094 = v1118 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1070 = v1094 + "/a[tu]g/=M,";
    var v1042 = v1070 + "/aa[tucy]/=N,";
    var v1012 = v1042 + "/cc[acgturyswkmbdhvn]/=P,";
    var v977 = v1012 + "/ca[agr]|[tu]a[agr]|[tcuy]a[agr]/=Q,";
    var v939 = v977 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v898 = v939 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v841 = v898 + "/ac[acgturyswkmbdhvn]/=T,";
    var v747 = v841 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v586 = v747 + "/[tu]gg/=W,";
    var v288 = v586 + "/[tu]a[ctuy]/=Y,";
    return v288 + "/[tu]ga/=*"
  }
  var v587 = type$$25.toLowerCase();
  var v291 = v587 == "transl_table=9";
  if(v291) {
    var v1253 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1236 = v1253 + "/ga[tcuy]/=D,";
    var v1219 = v1236 + "/ga[agr]/=E,";
    var v1201 = v1219 + "/[tu][tu][tcuy]/=F,";
    var v1182 = v1201 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1161 = v1182 + "/ca[tcuy]/=H,";
    var v1140 = v1161 + "/a[tu][atcuwmhy]/=I,";
    var v1119 = v1140 + "/aag/=K,";
    var v1095 = v1119 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1071 = v1095 + "/a[tu]g/=M,";
    var v1043 = v1071 + "/aa[atcuwmhy]/=N,";
    var v1013 = v1043 + "/cc[acgturyswkmbdhvn]/=P,";
    var v978 = v1013 + "/ca[agr]/=Q,";
    var v940 = v978 + "/cg[acgturyswkmbdhvn]/=R,";
    var v899 = v940 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v842 = v899 + "/ac[acgturyswkmbdhvn]/=T,";
    var v748 = v842 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v588 = v748 + "/[tu]g[agr]/=W,";
    var v290 = v588 + "/[tu]a[ctuy]/=Y,";
    return v290 + "/[tu]a[agr]/=*"
  }
  var v589 = type$$25.toLowerCase();
  var v293 = v589 == "transl_table=10";
  if(v293) {
    var v1254 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[atcuwmhy]/=C,";
    var v1237 = v1254 + "/ga[tcuy]/=D,";
    var v1220 = v1237 + "/ga[agr]/=E,";
    var v1202 = v1220 + "/[tu][tu][tcuy]/=F,";
    var v1183 = v1202 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1162 = v1183 + "/ca[tcuy]/=H,";
    var v1141 = v1162 + "/a[tu][atcuwmhy]/=I,";
    var v1120 = v1141 + "/aa[agr]/=K,";
    var v1096 = v1120 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1072 = v1096 + "/a[tu]g/=M,";
    var v1044 = v1072 + "/aa[tucy]/=N,";
    var v1014 = v1044 + "/cc[acgturyswkmbdhvn]/=P,";
    var v979 = v1014 + "/ca[agr]/=Q,";
    var v941 = v979 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v900 = v941 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v843 = v900 + "/ac[acgturyswkmbdhvn]/=T,";
    var v749 = v843 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v590 = v749 + "/[tu]gg/=W,";
    var v292 = v590 + "/[tu]a[ctuy]/=Y,";
    return v292 + "/[tu]a[agr]/=*"
  }
  var v591 = type$$25.toLowerCase();
  var v295 = v591 == "transl_table=11";
  if(v295) {
    var v1255 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1238 = v1255 + "/ga[tcuy]/=D,";
    var v1221 = v1238 + "/ga[agr]/=E,";
    var v1203 = v1221 + "/[tu][tu][tcuy]/=F,";
    var v1184 = v1203 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1163 = v1184 + "/ca[tcuy]/=H,";
    var v1142 = v1163 + "/a[tu][atcuwmhy]/=I,";
    var v1121 = v1142 + "/aa[agr]/=K,";
    var v1097 = v1121 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1073 = v1097 + "/a[tu]g/=M,";
    var v1045 = v1073 + "/aa[tucy]/=N,";
    var v1015 = v1045 + "/cc[acgturyswkmbdhvn]/=P,";
    var v980 = v1015 + "/ca[agr]/=Q,";
    var v942 = v980 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v901 = v942 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v844 = v901 + "/ac[acgturyswkmbdhvn]/=T,";
    var v750 = v844 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v592 = v750 + "/[tu]gg/=W,";
    var v294 = v592 + "/[tu]a[ctuy]/=Y,";
    return v294 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v593 = type$$25.toLowerCase();
  var v297 = v593 == "transl_table=12";
  if(v297) {
    var v1256 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1239 = v1256 + "/ga[tcuy]/=D,";
    var v1222 = v1239 + "/ga[agr]/=E,";
    var v1204 = v1222 + "/[tu][tu][tcuy]/=F,";
    var v1185 = v1204 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1164 = v1185 + "/ca[tcuy]/=H,";
    var v1143 = v1164 + "/a[tu][atcuwmhy]/=I,";
    var v1122 = v1143 + "/aa[agr]/=K,";
    var v1098 = v1122 + "/c[tu][atcuwmhy]|[tu][tu][agr]|[ctuy][tu]a/=L,";
    var v1074 = v1098 + "/a[tu]g/=M,";
    var v1046 = v1074 + "/aa[tucy]/=N,";
    var v1016 = v1046 + "/cc[acgturyswkmbdhvn]/=P,";
    var v981 = v1016 + "/ca[agr]/=Q,";
    var v943 = v981 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v902 = v943 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]|c[tu]g/=S,";
    var v845 = v902 + "/ac[acgturyswkmbdhvn]/=T,";
    var v751 = v845 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v594 = v751 + "/[tu]gg/=W,";
    var v296 = v594 + "/[tu]a[ctuy]/=Y,";
    return v296 + "/[tu]a[agr]|[tu]ga|[tu][agr]a/=*"
  }
  var v595 = type$$25.toLowerCase();
  var v299 = v595 == "transl_table=13";
  if(v299) {
    var v1257 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1240 = v1257 + "/ga[tcuy]/=D,";
    var v1223 = v1240 + "/ga[agr]/=E,";
    var v1205 = v1223 + "/[tu][tu][tcuy]/=F,";
    var v1186 = v1205 + "/gg[acgturyswkmbdhvn]|ag[agr]|[agr]g[agr]/=G,";
    var v1165 = v1186 + "/ca[tcuy]/=H,";
    var v1144 = v1165 + "/a[tu][tcuy]/=I,";
    var v1123 = v1144 + "/aa[agr]/=K,";
    var v1099 = v1123 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1075 = v1099 + "/a[tu][agr]/=M,";
    var v1047 = v1075 + "/aa[tucy]/=N,";
    var v1017 = v1047 + "/cc[acgturyswkmbdhvn]/=P,";
    var v982 = v1017 + "/ca[agr]/=Q,";
    var v944 = v982 + "/cg[acgturyswkmbdhvn]/=R,";
    var v903 = v944 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v846 = v903 + "/ac[acgturyswkmbdhvn]/=T,";
    var v752 = v846 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v596 = v752 + "/[tu]g[agr]/=W,";
    var v298 = v596 + "/[tu]a[ctuy]/=Y,";
    return v298 + "/[tu]a[agr]/=*"
  }
  var v597 = type$$25.toLowerCase();
  var v301 = v597 == "transl_table=14";
  if(v301) {
    var v1258 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1241 = v1258 + "/ga[tcuy]/=D,";
    var v1224 = v1241 + "/ga[agr]/=E,";
    var v1206 = v1224 + "/[tu][tu][tcuy]/=F,";
    var v1187 = v1206 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1166 = v1187 + "/ca[tcuy]/=H,";
    var v1145 = v1166 + "/a[tu][atcuwmhy]/=I,";
    var v1124 = v1145 + "/aag/=K,";
    var v1100 = v1124 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1076 = v1100 + "/a[tu]g/=M,";
    var v1048 = v1076 + "/aa[atcuwmhy]/=N,";
    var v1018 = v1048 + "/cc[acgturyswkmbdhvn]/=P,";
    var v983 = v1018 + "/ca[agr]/=Q,";
    var v945 = v983 + "/cg[acgturyswkmbdhvn]/=R,";
    var v904 = v945 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v847 = v904 + "/ac[acgturyswkmbdhvn]/=T,";
    var v753 = v847 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v598 = v753 + "/[tu]g[agr]/=W,";
    var v300 = v598 + "/[tu]a[atcuwmhy]/=Y,";
    return v300 + "/[tu]ag/=*"
  }
  var v599 = type$$25.toLowerCase();
  var v303 = v599 == "transl_table=15";
  if(v303) {
    var v1259 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1242 = v1259 + "/ga[tcuy]/=D,";
    var v1225 = v1242 + "/ga[agr]/=E,";
    var v1207 = v1225 + "/[tu][tu][tcuy]/=F,";
    var v1188 = v1207 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1167 = v1188 + "/ca[tcuy]/=H,";
    var v1146 = v1167 + "/a[tu][atcuwmhy]/=I,";
    var v1125 = v1146 + "/aa[agr]/=K,";
    var v1101 = v1125 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1077 = v1101 + "/a[tu]g/=M,";
    var v1049 = v1077 + "/aa[tucy]/=N,";
    var v1019 = v1049 + "/cc[acgturyswkmbdhvn]/=P,";
    var v984 = v1019 + "/ca[agr]|[tu]ag|[tcuy]ag/=Q,";
    var v946 = v984 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v905 = v946 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v848 = v905 + "/ac[acgturyswkmbdhvn]/=T,";
    var v754 = v848 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v600 = v754 + "/[tu]gg/=W,";
    var v302 = v600 + "/[tu]a[ctuy]/=Y,";
    return v302 + "/[tu][agr]a/=*"
  }
  var v601 = type$$25.toLowerCase();
  var v305 = v601 == "transl_table=16";
  if(v305) {
    var v1260 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1243 = v1260 + "/ga[tcuy]/=D,";
    var v1226 = v1243 + "/ga[agr]/=E,";
    var v1208 = v1226 + "/[tu][tu][tcuy]/=F,";
    var v1189 = v1208 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1168 = v1189 + "/ca[tcuy]/=H,";
    var v1147 = v1168 + "/a[tu][atcuwmhy]/=I,";
    var v1126 = v1147 + "/aa[agr]/=K,";
    var v1102 = v1126 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1078 = v1102 + "/a[tu]g/=M,";
    var v1050 = v1078 + "/aa[tucy]/=N,";
    var v1020 = v1050 + "/cc[acgturyswkmbdhvn]/=P,";
    var v985 = v1020 + "/ca[agr]/=Q,";
    var v947 = v985 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v906 = v947 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v849 = v906 + "/ac[acgturyswkmbdhvn]/=T,";
    var v755 = v849 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v602 = v755 + "/[tu]gg/=W,";
    var v304 = v602 + "/[tu]a[ctuy]/=Y,";
    return v304 + "/[tu][agr]a/=*"
  }
  var v603 = type$$25.toLowerCase();
  var v307 = v603 == "transl_table=21";
  if(v307) {
    var v1261 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1244 = v1261 + "/ga[tcuy]/=D,";
    var v1227 = v1244 + "/ga[agr]/=E,";
    var v1209 = v1227 + "/[tu][tu][tcuy]/=F,";
    var v1190 = v1209 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1169 = v1190 + "/ca[tcuy]/=H,";
    var v1148 = v1169 + "/a[tu][tcuy]/=I,";
    var v1127 = v1148 + "/aag/=K,";
    var v1103 = v1127 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]/=L,";
    var v1079 = v1103 + "/a[tu][agr]/=M,";
    var v1051 = v1079 + "/aa[atcuwmhy]/=N,";
    var v1021 = v1051 + "/cc[acgturyswkmbdhvn]/=P,";
    var v986 = v1021 + "/ca[agr]/=Q,";
    var v948 = v986 + "/cg[acgturyswkmbdhvn]/=R,";
    var v907 = v948 + "/[tu]c[acgturyswkmbdhvn]|ag[acgturyswkmbdhvn]/=S,";
    var v850 = v907 + "/ac[acgturyswkmbdhvn]/=T,";
    var v756 = v850 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v604 = v756 + "/[tu]g[agr]/=W,";
    var v306 = v604 + "/[tu]a[ctuy]/=Y,";
    return v306 + "/[tu]a[agr]/=*"
  }
  var v605 = type$$25.toLowerCase();
  var v309 = v605 == "transl_table=22";
  if(v309) {
    var v1262 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1245 = v1262 + "/ga[tcuy]/=D,";
    var v1228 = v1245 + "/ga[agr]/=E,";
    var v1210 = v1228 + "/[tu][tu][tcuy]/=F,";
    var v1191 = v1210 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1170 = v1191 + "/ca[tcuy]/=H,";
    var v1149 = v1170 + "/a[tu][atcuwmhy]/=I,";
    var v1128 = v1149 + "/aa[agr]/=K,";
    var v1104 = v1128 + "/c[tu][acgturyswkmbdhvn]|[tu][tu][agr]|[ctuy][tu][agr]|[tu]ag|[tu][atuw]g/=L,";
    var v1080 = v1104 + "/a[tu]g/=M,";
    var v1052 = v1080 + "/aa[tucy]/=N,";
    var v1022 = v1052 + "/cc[acgturyswkmbdhvn]/=P,";
    var v987 = v1022 + "/ca[agr]/=Q,";
    var v949 = v987 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v908 = v949 + "/[tu]c[cgtyskb]|ag[ct]/=S,";
    var v851 = v908 + "/ac[acgturyswkmbdhvn]/=T,";
    var v757 = v851 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v606 = v757 + "/[tu]gg/=W,";
    var v308 = v606 + "/[tu]a[ctuy]/=Y,";
    return v308 + "/[tu][agcrsmv]a/=*"
  }
  var v607 = type$$25.toLowerCase();
  var v311 = v607 == "transl_table=23";
  if(v311) {
    var v1263 = "/gc[acgturyswkmbdhvn]/=A," + "/[tu]g[ctuy]/=C,";
    var v1246 = v1263 + "/ga[tcuy]/=D,";
    var v1229 = v1246 + "/ga[agr]/=E,";
    var v1211 = v1229 + "/[tu][tu][tcuy]/=F,";
    var v1192 = v1211 + "/gg[acgturyswkmbdhvn]/=G,";
    var v1171 = v1192 + "/ca[tcuy]/=H,";
    var v1150 = v1171 + "/a[tu][atcuwmhy]/=I,";
    var v1129 = v1150 + "/aa[agr]/=K,";
    var v1105 = v1129 + "/c[tu][acgturyswkmbdhvn]|[ctuy][tu]g/=L,";
    var v1081 = v1105 + "/a[tu]g/=M,";
    var v1053 = v1081 + "/aa[tucy]/=N,";
    var v1023 = v1053 + "/cc[acgturyswkmbdhvn]/=P,";
    var v988 = v1023 + "/ca[agr]/=Q,";
    var v950 = v988 + "/cg[acgturyswkmbdhvn]|ag[agr]|[cam]g[agr]/=R,";
    var v909 = v950 + "/[tu]c[acgturyswkmbdhvn]|ag[ct]/=S,";
    var v852 = v909 + "/ac[acgturyswkmbdhvn]/=T,";
    var v758 = v852 + "/g[tu][acgturyswkmbdhvn]/=V,";
    var v608 = v758 + "/[tu]gg/=W,";
    var v310 = v608 + "/[tu]a[ctuy]/=Y,";
    return v310 + "/[tu]a[agr]|[tu]ga|[tu][agtrwkd]a/=*"
  }
  return true
}
function codonUsage(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var codonTable$$1;
  var v609 = testScript();
  var v312 = v609 == false;
  if(v312) {
    return false
  }
  var v989 = theDocument.forms;
  var v951 = v989[0];
  var v910 = v951.elements;
  var v853 = v910[0];
  var v759 = checkFormElement(v853);
  var v610 = v759 == false;
  var v761 = !v610;
  if(v761) {
    var v1024 = theDocument.forms;
    var v990 = v1024[0];
    var v952 = v990.elements;
    var v911 = v952[0];
    var v854 = v911.value;
    var v760 = checkTextLength(v854, maxInput$$3);
    v610 = v760 == false
  }
  var v313 = v610;
  if(v313) {
    return false
  }
  var v991 = theDocument.forms;
  var v953 = v991[0];
  var v912 = v953.elements;
  var v855 = v912[4];
  var v762 = v855.options;
  var v992 = theDocument.forms;
  var v954 = v992[0];
  var v913 = v954.elements;
  var v856 = v913[4];
  var v763 = v856.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v611 = v762[v763]
  }
  var v314 = v611.value;
  var geneticCode = getGeneticCodeString(v314);
  geneticCode = geneticCode.split(/,/);
  var v612 = checkGeneticCode(geneticCode);
  var v315 = v612 == false;
  if(v315) {
    return false
  }
  codonTable$$1 = makeCodonTable(geneticCode);
  var v316 = codonTable$$1 == false;
  if(v316) {
    return false
  }
  resetCounts(codonTable$$1);
  openWindow("Codon Usage");
  openPre();
  var v914 = theDocument.forms;
  var v857 = v914[0];
  var v764 = v857.elements;
  var v613 = v764[0];
  var v317 = v613.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v317);
  var i$$11 = 0;
  var v614 = arrayOfFasta$$1.length;
  var v323 = i$$11 < v614;
  for(;v323;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v318 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v318);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v319 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v319);
    newDna = removeNonDna(newDna);
    var v320 = outputWindow.document;
    var v321 = getInfoFromTitleAndSequence(title, newDna);
    JAMScript.call(v320.write, v320, [v321]);
    addCodons(codonTable$$1, newDna);
    JAMScript.call(codonTable$$1.determineValues, codonTable$$1, []);
    writeCodonTable(codonTable$$1);
    resetCounts(codonTable$$1);
    var v322 = outputWindow.document;
    JAMScript.call(v322.write, v322, ["\n\n"]);
    i$$11 = i$$11 + 1;
    var v615 = arrayOfFasta$$1.length;
    v323 = i$$11 < v615
  }
  closePre();
  closeWindow();
  return true
}
function writeCodonTable(codonTable$$2) {
  var v324 = outputWindow.document;
  var v955 = rightNum("AmAcid", "", 6, "");
  var v956 = rightNum("Codon", "", 7, "");
  var v915 = v955 + v956;
  var v916 = rightNum("Number", "", 10, "");
  var v858 = v915 + v916;
  var v859 = rightNum("/1000", "", 12, "");
  var v765 = v858 + v859;
  var v766 = rightNum("Fraction   ..", "", 17, "");
  var v616 = v765 + v766;
  var v325 = v616 + "\n\n";
  JAMScript.call(v324.write, v324, [v325]);
  var i$$12 = 0;
  var v767 = codonTable$$2.aminoAcids;
  var v617 = v767.length;
  var v331 = i$$12 < v617;
  for(;v331;) {
    var v618 = codonTable$$2.aminoAcids;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v326 = v618[i$$12]
    }
    arrayOfCodons = v326.codons;
    var j$$10 = 0;
    var v619 = arrayOfCodons.length;
    var v329 = j$$10 < v619;
    for(;v329;) {
      var v327 = outputWindow.document;
      var v1054 = codonTable$$2.aminoAcids;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1025 = v1054[i$$12]
      }
      var v993 = v1025.name;
      var v957 = rightNum(v993, "", 3, "");
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1055 = arrayOfCodons[j$$10]
      }
      var v1026 = v1055.sequence;
      var v994 = v1026.toUpperCase();
      var v958 = rightNum(v994, "", 8, "");
      var v917 = v957 + v958;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1027 = arrayOfCodons[j$$10]
      }
      var v995 = v1027.number;
      var v959 = v995.toFixed(2);
      var v918 = rightNum(v959, "", 12, "");
      var v860 = v917 + v918;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v996 = arrayOfCodons[j$$10]
      }
      var v960 = v996.perThou;
      var v919 = v960.toFixed(2);
      var v861 = rightNum(v919, "", 12, "");
      var v768 = v860 + v861;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v961 = arrayOfCodons[j$$10]
      }
      var v920 = v961.fraction;
      var v862 = v920.toFixed(2);
      var v769 = rightNum(v862, "", 12, "");
      var v620 = v768 + v769;
      var v328 = v620 + "\n";
      JAMScript.call(v327.write, v327, [v328]);
      j$$10 = j$$10 + 1;
      var v621 = arrayOfCodons.length;
      v329 = j$$10 < v621
    }
    var v330 = outputWindow.document;
    JAMScript.call(v330.write, v330, ["\n"]);
    i$$12 = i$$12 + 1;
    var v770 = codonTable$$2.aminoAcids;
    var v622 = v770.length;
    v331 = i$$12 < v622
  }
  return
}
function addCodons(codonTable$$3, dnaSequence$$3) {
  function v2(str$$8, p1$$2, offset$$14, s$$4) {
    var v332 = " " + p1$$2;
    return v332 + " "
  }
  dnaSequence$$3 = dnaSequence$$3.replace(/u/gi, "t");
  dnaSequence$$3 = dnaSequence$$3.replace(/(...)/g, v2);
  var matchExp$$2;
  var arrayOfCodons$$1;
  var i$$13 = 0;
  var v771 = codonTable$$3.aminoAcids;
  var v623 = v771.length;
  var v338 = i$$13 < v623;
  for(;v338;) {
    var v624 = codonTable$$3.aminoAcids;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v333 = v624[i$$13]
    }
    arrayOfCodons$$1 = v333.codons;
    var j$$11 = 0;
    var v625 = arrayOfCodons$$1.length;
    var v337 = j$$11 < v625;
    for(;v337;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v626 = arrayOfCodons$$1[j$$11]
      }
      var v334 = v626.sequence;
      matchExp$$2 = new RegExp(v334, "gi");
      var v627 = dnaSequence$$3.search(matchExp$$2);
      var v336 = v627 != -1;
      if(v336) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v335 = arrayOfCodons$$1[j$$11]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v772 = arrayOfCodons$$1[j$$11]
        }
        var v628 = v772.number;
        var v773 = dnaSequence$$3.match(matchExp$$2);
        var v629 = v773.length;
        v335.number = v628 + v629
      }
      j$$11 = j$$11 + 1;
      var v630 = arrayOfCodons$$1.length;
      v337 = j$$11 < v630
    }
    i$$13 = i$$13 + 1;
    var v774 = codonTable$$3.aminoAcids;
    var v631 = v774.length;
    v338 = i$$13 < v631
  }
  return
}
function resetCounts(codonTable$$4) {
  var i$$14 = 0;
  var v775 = codonTable$$4.aminoAcids;
  var v632 = v775.length;
  var v342 = i$$14 < v632;
  for(;v342;) {
    var v633 = codonTable$$4.aminoAcids;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v339 = v633[i$$14]
    }
    arrayOfCodons = v339.codons;
    var j$$12 = 0;
    var v634 = arrayOfCodons.length;
    var v341 = j$$12 < v634;
    for(;v341;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v340 = arrayOfCodons[j$$12]
      }
      JAMScript.call(v340.resetValues, v340, []);
      j$$12 = j$$12 + 1;
      var v635 = arrayOfCodons.length;
      v341 = j$$12 < v635
    }
    i$$14 = i$$14 + 1;
    var v776 = codonTable$$4.aminoAcids;
    var v636 = v776.length;
    v342 = i$$14 < v636
  }
  return
}
function makeCodonTable(geneticCode$$1) {
  function v3(str$$9, p1$$3, offset$$15, s$$5) {
    var v343 = " " + p1$$3;
    return v343 + " "
  }
  var codonSequence = "gggggaggtggcgaggaagatgacgtggtagttgtcgcggcagctgccaggagaagtagcaagaaaaataacatgataattatcacgacaactacctggtgatgttgctagtaatattacttgttatttttctcgtcatcttcccggcgacgtcgccagcaacatcacctgctacttctcccgccacctccc";
  var proteinSequence$$1;
  var codonTable$$5 = new CodonTable;
  var geneticCodeMatchExp$$2 = getGeneticCodeMatchExp(geneticCode$$1);
  var geneticCodeMatchResult$$2 = getGeneticCodeMatchResult(geneticCode$$1);
  codonSequence = codonSequence.replace(/(...)/g, v3);
  var codonSequenceCopy = codonSequence;
  var i$$15 = 0;
  var v637 = geneticCodeMatchExp$$2.length;
  var v346 = i$$15 < v637;
  for(;v346;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v344 = geneticCodeMatchExp$$2[i$$15]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v345 = geneticCodeMatchResult$$2[i$$15]
    }
    codonSequence = codonSequence.replace(v344, v345);
    i$$15 = i$$15 + 1;
    var v638 = geneticCodeMatchExp$$2.length;
    v346 = i$$15 < v638
  }
  var codonArray = codonSequenceCopy.split(/\s+/);
  codonSequence = codonSequence.replace(/\*/g, "Z");
  var proteinArray = codonSequence.split(/\s+/);
  i$$15 = 0;
  var v639 = codonArray.length;
  var v350 = i$$15 < v639;
  for(;v350;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v777 = proteinArray[i$$15]
    }
    var v640 = v777 == "";
    if(v640) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v778 = codonArray[i$$15]
      }
      v640 = v778 == ""
    }
    var v347 = v640;
    if(v347) {
      i$$15 = i$$15 + 1;
      var v641 = codonArray.length;
      v350 = i$$15 < v641;
      continue
    }
    var v642 = codonTable$$5;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v779 = proteinArray[i$$15]
    }
    var v643 = v779.toLowerCase();
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v348 = v642[v643]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v644 = codonArray[i$$15]
    }
    var v349 = new Codon(v644, 0, 0, 0);
    JAMScript.call(v348.addCodon, v348, [v349]);
    i$$15 = i$$15 + 1;
    var v645 = codonArray.length;
    v350 = i$$15 < v645
  }
  return codonTable$$5
}
function determineValues() {
  var totalAminoAcids = 0;
  var aminoAcid = 0;
  var arrayOfCodons$$2;
  var i$$16 = 0;
  var v780 = this.aminoAcids;
  var v646 = v780.length;
  var v356 = i$$16 < v646;
  for(;v356;) {
    var v647 = this.aminoAcids;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v351 = v647[i$$16]
    }
    arrayOfCodons$$2 = v351.codons;
    var j$$13 = 0;
    var v648 = arrayOfCodons$$2.length;
    var v354 = j$$13 < v648;
    for(;v354;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v649 = arrayOfCodons$$2[j$$13]
      }
      var v352 = v649.number;
      totalAminoAcids = totalAminoAcids + v352;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v650 = arrayOfCodons$$2[j$$13]
      }
      var v353 = v650.number;
      aminoAcid = aminoAcid + v353;
      j$$13 = j$$13 + 1;
      var v651 = arrayOfCodons$$2.length;
      v354 = j$$13 < v651
    }
    var v652 = this.aminoAcids;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v355 = v652[i$$16]
    }
    v355.count = aminoAcid;
    aminoAcid = 0;
    i$$16 = i$$16 + 1;
    var v781 = this.aminoAcids;
    var v653 = v781.length;
    v356 = i$$16 < v653
  }
  i$$16 = 0;
  var v782 = this.aminoAcids;
  var v654 = v782.length;
  var v364 = i$$16 < v654;
  for(;v364;) {
    var v655 = this.aminoAcids;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v357 = v655[i$$16]
    }
    arrayOfCodons$$2 = v357.codons;
    j$$13 = 0;
    var v656 = arrayOfCodons$$2.length;
    var v363 = j$$13 < v656;
    for(;v363;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v783 = arrayOfCodons$$2[j$$13]
      }
      var v657 = v783.number;
      var v362 = v657 > 0;
      if(v362) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v358 = arrayOfCodons$$2[j$$13]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v784 = arrayOfCodons$$2[j$$13]
        }
        var v658 = v784.number;
        var v863 = this.aminoAcids;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v785 = v863[i$$16]
        }
        var v659 = v785.count;
        v358.fraction = v658 / v659;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v359 = arrayOfCodons$$2[j$$13]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v864 = arrayOfCodons$$2[j$$13]
        }
        var v786 = v864.number;
        var v660 = v786 / totalAminoAcids;
        v359.perThou = 1E3 * v660
      }else {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v360 = arrayOfCodons$$2[j$$13]
        }
        v360.fraction = 0;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v361 = arrayOfCodons$$2[j$$13]
        }
        v361.perThou = 0
      }
      j$$13 = j$$13 + 1;
      var v661 = arrayOfCodons$$2.length;
      v363 = j$$13 < v661
    }
    i$$16 = i$$16 + 1;
    var v787 = this.aminoAcids;
    var v662 = v787.length;
    v364 = i$$16 < v662
  }
  return
}
function count() {
  var i$$17 = 0;
  var v788 = this.codons;
  var v663 = v788.length;
  var v367 = i$$17 < v663;
  for(;v367;) {
    var v365 = this.number;
    var v664 = this.codons;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v366 = v664[i$$17]
    }
    this.number = v365 + v366;
    i$$17 = i$$17 + 1;
    var v789 = this.codons;
    var v665 = v789.length;
    v367 = i$$17 < v665
  }
  return
}
function addCodon(codon$$1) {
  var v368 = this.codons;
  v368.push(codon$$1);
  return
}
function AminoAcid(name$$31) {
  this.name = name$$31;
  var v1270 = new Array;
  this.codons = v1270;
  this.number = 0;
  return
}
function CodonTable() {
  var v1271 = new AminoAcid("Ala");
  this.a = v1271;
  var v1272 = new AminoAcid("Cys");
  this.c = v1272;
  var v1273 = new AminoAcid("Asp");
  this.d = v1273;
  var v1274 = new AminoAcid("Glu");
  this.e = v1274;
  var v1275 = new AminoAcid("Phe");
  this.f = v1275;
  var v1276 = new AminoAcid("Gly");
  this.g = v1276;
  var v1277 = new AminoAcid("His");
  this.h = v1277;
  var v1278 = new AminoAcid("Ile");
  this.i = v1278;
  var v1279 = new AminoAcid("Lys");
  this.k = v1279;
  var v1280 = new AminoAcid("Leu");
  this.l = v1280;
  var v1281 = new AminoAcid("Met");
  this.m = v1281;
  var v1282 = new AminoAcid("Asn");
  this.n = v1282;
  var v1283 = new AminoAcid("Pro");
  this.p = v1283;
  var v1284 = new AminoAcid("Gln");
  this.q = v1284;
  var v1285 = new AminoAcid("Arg");
  this.r = v1285;
  var v1286 = new AminoAcid("Ser");
  this.s = v1286;
  var v1287 = new AminoAcid("Thr");
  this.t = v1287;
  var v1288 = new AminoAcid("Val");
  this.v = v1288;
  var v1289 = new AminoAcid("Trp");
  this.w = v1289;
  var v1290 = new AminoAcid("Tyr");
  this.y = v1290;
  var v1291 = new AminoAcid("End");
  this.z = v1291;
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
  var v369 = this.a;
  var v370 = this.c;
  var v371 = this.d;
  var v372 = this.e;
  var v373 = this.f;
  var v374 = this.g;
  var v375 = this.h;
  var v376 = this.i;
  var v377 = this.k;
  var v378 = this.l;
  var v379 = this.m;
  var v380 = this.n;
  var v381 = this.p;
  var v382 = this.q;
  var v383 = this.r;
  var v384 = this.s;
  var v385 = this.t;
  var v386 = this.v;
  var v387 = this.w;
  var v388 = this.y;
  var v389 = this.z;
  var v1292 = new Array(v369, v370, v371, v372, v373, v374, v375, v376, v377, v378, v379, v380, v381, v382, v383, v384, v385, v386, v387, v388, v389);
  this.aminoAcids = v1292;
  return
}
function resetValues() {
  this.number = 0;
  this.perThou = 0;
  this.fraction = 0;
  return
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1293 = sequence$$18.toLowerCase();
  this.sequence = v1293;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return
}
new AminoAcid("");
var v390 = AminoAcid.prototype;
v390.addCodon = addCodon;
var v391 = AminoAcid.prototype;
v391.count = count;
new CodonTable;
var v392 = CodonTable.prototype;
v392.determineValues = determineValues;
new Codon("", 0, 0, 0);
var v393 = Codon.prototype;
v393.resetValues = resetValues;
JAMScript.set(document, "onload", v4);
var v394 = document.getElementById("submitbtn");
JAMScript.set(v394, "onclick", v5);
var v395 = document.getElementById("clearbtn");
JAMScript.set(v395, "onclick", v6);

