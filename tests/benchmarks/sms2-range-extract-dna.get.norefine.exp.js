function v12() {
  var v882 = document.forms;
  var v734 = v882[0];
  var v425 = v734.elements;
  var v13 = v425[0];
  v13.value = " ";
  var v883 = document.forms;
  var v735 = v883[0];
  var v426 = v735.elements;
  var v14 = v426[1];
  v14.value = " ";
  return
}
function v11() {
  try {
    rangeExtract(document)
  }catch(e$$7) {
    var v15 = "The following error was encountered: " + e$$7;
    alert(v15)
  }
  return
}
function v10() {
  var v427 = document.main_form;
  var v16 = v427.main_submit;
  v16.focus();
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
  var v17 = arrayOfSequences[0];
  var lengthOfAlign = v17.length;
  var v428 = arrayOfSequences.length;
  var v18 = v428 < 2;
  if(v18) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v429 = arrayOfTitles.length;
  var v20 = i$$1 < v429;
  for(;v20;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v884 = arrayOfTitles[i$$1]
    }
    var v736 = v884.search(/\S/);
    var v430 = v736 == -1;
    var v738 = !v430;
    if(v738) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v987 = arrayOfSequences[i$$1]
      }
      var v885 = v987.search(/\S/);
      var v737 = v885 == -1;
      var v887 = !v737;
      if(v887) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v988 = arrayOfSequences[i$$1]
        }
        var v886 = v988.length;
        v737 = v886 != lengthOfAlign
      }
      v430 = v737
    }
    var v19 = v430;
    if(v19) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v431 = arrayOfTitles.length;
    v20 = i$$1 < v431
  }
  return true
}
function checkCodonTable(codonTable) {
  var v739 = codonTable.search(/AmAcid/);
  var v432 = v739 == -1;
  var v741 = !v432;
  if(v741) {
    var v888 = codonTable.search(/Codon/);
    var v740 = v888 == -1;
    var v890 = !v740;
    if(v890) {
      var v989 = codonTable.search(/Number/);
      var v889 = v989 == -1;
      var v991 = !v889;
      if(v991) {
        var v1049 = codonTable.search(/\/1000/);
        var v990 = v1049 == -1;
        var v1051 = !v990;
        if(v1051) {
          var v1050 = codonTable.search(/Fraction\s*\.\./);
          v990 = v1050 == -1
        }
        v889 = v990
      }
      v740 = v889
    }
    v432 = v740
  }
  var v21 = v432;
  if(v21) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v742 = formElement.value;
  var v433 = v742.search(/\S/);
  var v22 = v433 == -1;
  if(v22) {
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
  var v434 = arrayOfPatterns.length;
  var v25 = z$$2 < v434;
  for(;v25;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v743 = arrayOfPatterns[z$$2]
    }
    var v435 = v743.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v23 = v435 == -1;
    if(v23) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v744 = arrayOfPatterns[z$$2]
    }
    var v436 = moreExpressionCheck(v744);
    var v24 = v436 == false;
    if(v24) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v437 = arrayOfPatterns.length;
    v25 = z$$2 < v437
  }
  var v26 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v26);
  var v27 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v27);
  var j = 0;
  var v438 = arrayOfPatterns.length;
  var v34 = j < v438;
  for(;v34;) {
    var v28 = geneticCodeMatchExp;
    var v29 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v891 = arrayOfPatterns[j]
    }
    var v745 = v891.match(/\/.+\//);
    var v439 = v745 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1172 = eval("introspect(JAMScript.introspectors.processAll) { " + v439 + " }")
    }else {
      var v1172 = JAMScript.call(eval, null, [v439])
    }
    v28[v29] = v1172;
    var v30 = geneticCodeMatchResult;
    var v31 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v746 = arrayOfPatterns[j]
    }
    var v440 = v746.match(/=[a-zA-Z\*]/);
    var v1173 = v440.toString();
    v30[v31] = v1173;
    var v32 = geneticCodeMatchResult;
    var v33 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v441 = geneticCodeMatchResult[j]
    }
    var v1174 = v441.replace(/=/g, "");
    v32[v33] = v1174;
    j = j + 1;
    var v442 = arrayOfPatterns.length;
    v34 = j < v442
  }
  var i$$2 = 0;
  var v747 = testSequence.length;
  var v443 = v747 - 3;
  var v41 = i$$2 <= v443;
  for(;v41;) {
    var v35 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v35);
    j = 0;
    var v444 = geneticCodeMatchExp.length;
    var v39 = j < v444;
    for(;v39;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v748 = geneticCodeMatchExp[j]
      }
      var v445 = codon.search(v748);
      var v38 = v445 != -1;
      if(v38) {
        var v37 = oneMatch == true;
        if(v37) {
          var v446 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v36 = v446 + ".";
          alert(v36);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v447 = geneticCodeMatchExp.length;
      v39 = j < v447
    }
    var v40 = oneMatch == false;
    if(v40) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v749 = testSequence.length;
    var v448 = v749 - 3;
    v41 = i$$2 <= v448
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v449 = arrayOfPatterns$$1.length;
  var v43 = z$$3 < v449;
  for(;v43;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v750 = arrayOfPatterns$$1[z$$3]
    }
    var v450 = v750.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v42 = v450 != -1;
    if(v42) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v451 = arrayOfPatterns$$1.length;
    v43 = z$$3 < v451
  }
  var i$$3 = 0;
  var v452 = arrayOfPatterns$$1.length;
  var v47 = i$$3 < v452;
  for(;v47;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v751 = arrayOfPatterns$$1[i$$3]
    }
    var v453 = "[" + v751;
    var v44 = v453 + "]";
    var re = new RegExp(v44, "gi");
    var j$$1 = i$$3 + 1;
    var v454 = arrayOfPatterns$$1.length;
    var v46 = j$$1 < v454;
    for(;v46;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v752 = arrayOfPatterns$$1[j$$1]
      }
      var v455 = v752.search(re);
      var v45 = v455 != -1;
      if(v45) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v456 = arrayOfPatterns$$1.length;
      v46 = j$$1 < v456
    }
    i$$3 = i$$3 + 1;
    var v457 = arrayOfPatterns$$1.length;
    v47 = i$$3 < v457
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v458 = arrayOfPatterns$$2.length;
  var v50 = z$$4 < v458;
  for(;v50;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v753 = arrayOfPatterns$$2[z$$4]
    }
    var v459 = v753.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v48 = v459 == -1;
    if(v48) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v754 = arrayOfPatterns$$2[z$$4]
    }
    var v460 = moreExpressionCheck(v754);
    var v49 = v460 == false;
    if(v49) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v461 = arrayOfPatterns$$2.length;
    v50 = z$$4 < v461
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v892 = getSequenceFromFasta(text$$7);
  var v755 = v892.replace(/[^A-Za-z]/g, "");
  var v462 = v755.length;
  var v52 = v462 > maxInput;
  if(v52) {
    var v463 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v51 = v463 + " characters.";
    alert(v51);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v464 = text$$8.length;
  var v54 = v464 > maxInput$$1;
  if(v54) {
    var v465 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v53 = v465 + " characters.";
    alert(v53);
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
  var v55 = outputWindow.document;
  JAMScript.call(v55.write, v55, ["</form>"]);
  return true
}
function closePre() {
  var v56 = outputWindow.document;
  JAMScript.call(v56.write, v56, ["</div>"]);
  var v57 = outputWindow.document;
  JAMScript.call(v57.write, v57, ["</pre>\n"]);
  return
}
function closeTextArea() {
  var v58 = outputWindow.document;
  JAMScript.call(v58.write, v58, ["</textarea>"]);
  return true
}
function closeWindow() {
  var v59 = outputWindow.document;
  JAMScript.call(v59.write, v59, ["</body>\n</html>\n"]);
  outputWindow.status = "Done.";
  var v60 = outputWindow.document;
  v60.close();
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
  var v466 = alignArray.length;
  var v61 = v466 < 3;
  if(v61) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v467 = alignArray.length;
  var v63 = i$$4 < v467;
  for(;v63;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v756 = alignArray[i$$4]
    }
    var v468 = v756.search(/[^\s]+\s/);
    var v62 = v468 == -1;
    if(v62) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v469 = alignArray.length;
    v63 = i$$4 < v469
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
  var v470 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v66 = v470 != -1;
  if(v66) {
    var v65 = matchArray = re$$1.exec(sequenceData);
    for(;v65;) {
      var v64 = matchArray[0];
      arrayOfFasta.push(v64);
      v65 = matchArray = re$$1.exec(sequenceData)
    }
  }else {
    arrayOfFasta[0] = sequenceData
  }
  return arrayOfFasta
}
function getFastaTitleFromTitleAndSequence(fastaSequenceTitle, sequence$$2) {
  var v471 = sequence$$2.length;
  var v67 = "&gt;results for " + v471;
  var stringToReturn = v67 + " residue sequence ";
  var v472 = fastaSequenceTitle.search(/[^\s]/);
  var v69 = v472 != -1;
  if(v69) {
    var v473 = stringToReturn + '"';
    var v68 = v473 + fastaSequenceTitle;
    stringToReturn = v68 + '"'
  }
  var v474 = stringToReturn + ' starting "';
  var v475 = sequence$$2.substring(0, 10);
  var v70 = v474 + v475;
  stringToReturn = v70 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v476 = sequenceOne.length;
  var v71 = "Search results for " + v476;
  var stringToReturn$$1 = v71 + " residue sequence ";
  var v477 = fastaSequenceTitleOne.search(/[^\s]/);
  var v73 = v477 != -1;
  if(v73) {
    var v478 = stringToReturn$$1 + '"';
    var v72 = v478 + fastaSequenceTitleOne;
    stringToReturn$$1 = v72 + '"'
  }
  var v479 = stringToReturn$$1 + ' starting "';
  var v480 = sequenceOne.substring(0, 10);
  var v74 = v479 + v480;
  stringToReturn$$1 = v74 + '"\n';
  var v481 = stringToReturn$$1 + "and ";
  var v482 = sequenceTwo.length;
  var v75 = v481 + v482;
  stringToReturn$$1 = v75 + " residue sequence ";
  var v483 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v77 = v483 != -1;
  if(v77) {
    var v484 = stringToReturn$$1 + '"';
    var v76 = v484 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v76 + '"'
  }
  var v485 = stringToReturn$$1 + ' starting "';
  var v486 = sequenceTwo.substring(0, 10);
  var v78 = v485 + v486;
  stringToReturn$$1 = v78 + '"';
  var v79 = '<div class="info">' + stringToReturn$$1;
  return v79 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v80 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v80);
  var j$$2 = 0;
  var v487 = arrayOfPatterns$$3.length;
  var v83 = j$$2 < v487;
  for(;v83;) {
    var v81 = geneticCodeMatchExp$$1;
    var v82 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v893 = arrayOfPatterns$$3[j$$2]
    }
    var v757 = v893.match(/\/.+\//);
    var v488 = v757 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1175 = eval("introspect(JAMScript.introspectors.processAll) { " + v488 + " }")
    }else {
      var v1175 = JAMScript.call(eval, null, [v488])
    }
    v81[v82] = v1175;
    j$$2 = j$$2 + 1;
    var v489 = arrayOfPatterns$$3.length;
    v83 = j$$2 < v489
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v84 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v84);
  var j$$3 = 0;
  var v490 = arrayOfPatterns$$4.length;
  var v89 = j$$3 < v490;
  for(;v89;) {
    var v85 = geneticCodeMatchResult$$1;
    var v86 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v758 = arrayOfPatterns$$4[j$$3]
    }
    var v491 = v758.match(/=[a-zA-Z\*]/);
    var v1176 = v491.toString();
    v85[v86] = v1176;
    var v87 = geneticCodeMatchResult$$1;
    var v88 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v492 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1177 = v492.replace(/=/g, "");
    v87[v88] = v1177;
    j$$3 = j$$3 + 1;
    var v493 = arrayOfPatterns$$4.length;
    v89 = j$$3 < v493
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v494 = sequence$$3.length;
  var v90 = "Results for " + v494;
  var stringToReturn$$2 = v90 + " residue sequence ";
  var v495 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v92 = v495 != -1;
  if(v92) {
    var v496 = stringToReturn$$2 + '"';
    var v91 = v496 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v91 + '"'
  }
  var v497 = stringToReturn$$2 + ' starting "';
  var v498 = sequence$$3.substring(0, 10);
  var v93 = v497 + v498;
  stringToReturn$$2 = v93 + '"';
  var v94 = '<div class="info">' + stringToReturn$$2;
  return v94 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v759 = "Results for " + topology;
  var v499 = v759 + " ";
  var v500 = sequence$$4.length;
  var v95 = v499 + v500;
  var stringToReturn$$3 = v95 + " residue sequence ";
  var v501 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v97 = v501 != -1;
  if(v97) {
    var v502 = stringToReturn$$3 + '"';
    var v96 = v502 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v96 + '"'
  }
  var v503 = stringToReturn$$3 + ' starting "';
  var v504 = sequence$$4.substring(0, 10);
  var v98 = v503 + v504;
  stringToReturn$$3 = v98 + '"';
  var v99 = '<div class="info">' + stringToReturn$$3;
  return v99 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v505 = sequenceOne$$1.length;
  var v100 = "Alignment results for " + v505;
  var stringToReturn$$4 = v100 + " residue sequence ";
  var v506 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v102 = v506 != -1;
  if(v102) {
    var v507 = stringToReturn$$4 + '"';
    var v101 = v507 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v101 + '"'
  }
  var v508 = stringToReturn$$4 + ' starting "';
  var v509 = sequenceOne$$1.substring(0, 10);
  var v103 = v508 + v509;
  stringToReturn$$4 = v103 + '"\n';
  var v510 = stringToReturn$$4 + "and ";
  var v511 = sequenceTwo$$1.length;
  var v104 = v510 + v511;
  stringToReturn$$4 = v104 + " residue sequence ";
  var v512 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v106 = v512 != -1;
  if(v106) {
    var v513 = stringToReturn$$4 + '"';
    var v105 = v513 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v105 + '"'
  }
  var v514 = stringToReturn$$4 + ' starting "';
  var v515 = sequenceTwo$$1.substring(0, 10);
  var v107 = v514 + v515;
  stringToReturn$$4 = v107 + '"';
  var v108 = '<div class="info">' + stringToReturn$$4;
  return v108 + "</div>\n"
}
function getRandomSequence(components, lengthOut) {
  var sequenceArray = new Array;
  var tempNum = 0;
  var tempChar = "";
  var j$$4 = 0;
  var v110 = j$$4 < lengthOut;
  for(;v110;) {
    var v516 = Math.random();
    var v517 = components.length;
    var v109 = v516 * v517;
    tempNum = Math.floor(v109);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v110 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v518 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v111 = v518 != -1;
  if(v111) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v519 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v113 = v519 != -1;
  if(v113) {
    var v112 = sequenceRecord$$1.match(/\>[^\f\n\r]+[\f\n\r]/, "");
    fastaTitle = v112.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v760 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v520 = v760 != -1;
  var v762 = !v520;
  if(v762) {
    var v894 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v761 = v894 != -1;
    var v896 = !v761;
    if(v896) {
      var v992 = expressionToCheck.search(/\[\]/);
      var v895 = v992 != -1;
      var v994 = !v895;
      if(v994) {
        var v1052 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v993 = v1052 != -1;
        var v1054 = !v993;
        if(v1054) {
          var v1090 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1053 = v1090 != -1;
          var v1092 = !v1053;
          if(v1092) {
            var v1112 = expressionToCheck.search(/\|\|/);
            var v1091 = v1112 != -1;
            var v1114 = !v1091;
            if(v1114) {
              var v1124 = expressionToCheck.search(/\/\|/);
              var v1113 = v1124 != -1;
              var v1126 = !v1113;
              if(v1126) {
                var v1134 = expressionToCheck.search(/\|\//);
                var v1125 = v1134 != -1;
                var v1136 = !v1125;
                if(v1136) {
                  var v1143 = expressionToCheck.search(/\[.\]/);
                  var v1135 = v1143 != -1;
                  var v1145 = !v1135;
                  if(v1145) {
                    var v1150 = expressionToCheck.search(/\</);
                    var v1144 = v1150 != -1;
                    var v1152 = !v1144;
                    if(v1152) {
                      var v1151 = expressionToCheck.search(/\>/);
                      v1144 = v1151 != -1
                    }
                    v1135 = v1144
                  }
                  v1125 = v1135
                }
                v1113 = v1125
              }
              v1091 = v1113
            }
            v1053 = v1091
          }
          v993 = v1053
        }
        v895 = v993
      }
      v761 = v895
    }
    v520 = v761
  }
  var v114 = v520;
  if(v114) {
    return false
  }
  return true
}
function openForm() {
  var v115 = outputWindow.document;
  JAMScript.call(v115.write, v115, ['<form action="">\n']);
  return true
}
function openPre() {
  var v116 = outputWindow.document;
  JAMScript.call(v116.write, v116, ["<pre>"]);
  var v117 = outputWindow.document;
  JAMScript.call(v117.write, v117, ['<div class="pre">']);
  return
}
function openTextArea() {
  var v118 = outputWindow.document;
  JAMScript.call(v118.write, v118, ['<br /><textarea rows="6" cols="61">\n']);
  return true
}
function openWindow(title$$6) {
  _openWindow(title$$6, true);
  return
}
function _openWindow(title$$7, isColor) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1189 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1189[2], v1189[1], v1189[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v897 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v763 = v897 + "<head>\n";
  var v521 = v763 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v521 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isColor) {
    var v121 = outputWindow.document;
    var v1165 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1161 = v1165 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1157 = v1161 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1153 = v1157 + "div.info {font-weight: bold}\n";
    var v1146 = v1153 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1137 = v1146 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1127 = v1137 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1115 = v1127 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1093 = v1115 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1055 = v1093 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v995 = v1055 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v898 = v995 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v764 = v898 + "td.many {color: #000000}\n";
    var v522 = v764 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v122 = v522 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v1169 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1166 = v1169 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1162 = v1166 + "div.title {display: none}\n";
    var v1158 = v1162 + "div.info {font-weight: bold}\n";
    var v1154 = v1158 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1147 = v1154 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1138 = v1147 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1128 = v1138 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1116 = v1128 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1094 = v1116 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1056 = v1094 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v996 = v1056 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v899 = v996 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v765 = v899 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v523 = v765 + "img {display: none}\n";
    var v124 = v523 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v900 = "</head>\n" + '<body class="main">\n';
  var v766 = v900 + '<div class="title">';
  var v524 = v766 + title$$7;
  var v126 = v524 + " results</div>\n";
  JAMScript.call(v125.write, v125, [v126]);
  outputWindow.status = "Please Wait.";
  return true
}
function openWindowAlign(title$$8) {
  _openWindowAlign(title$$8, true);
  return
}
function _openWindowAlign(title$$9, isBackground) {
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B074) {
    var v1190 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1190[2], v1190[1], v1190[0]);
  outputWindow.focus();
  var v127 = outputWindow.document;
  var v901 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v767 = v901 + "<head>\n";
  var v525 = v767 + "<title>Sequence Manipulation Suite</title>\n";
  var v128 = v525 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v127.write, v127, [v128]);
  if(isBackground) {
    var v129 = outputWindow.document;
    var v1167 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1163 = v1167 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1159 = v1163 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1155 = v1159 + "div.info {font-weight: bold}\n";
    var v1148 = v1155 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1139 = v1148 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1129 = v1139 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1117 = v1129 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1095 = v1117 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1057 = v1095 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v997 = v1057 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v902 = v997 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v768 = v902 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v526 = v768 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v130 = v526 + "</style>\n";
    JAMScript.call(v129.write, v129, [v130])
  }else {
    var v131 = outputWindow.document;
    var v1171 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1170 = v1171 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1168 = v1170 + "div.title {display: none}\n";
    var v1164 = v1168 + "div.info {font-weight: bold}\n";
    var v1160 = v1164 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1156 = v1160 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1149 = v1156 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1140 = v1149 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1130 = v1140 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1118 = v1130 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1096 = v1118 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1058 = v1096 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v998 = v1058 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v903 = v998 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v769 = v903 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v527 = v769 + "img {display: none}\n";
    var v132 = v527 + "</style>\n";
    JAMScript.call(v131.write, v131, [v132])
  }
  var v133 = outputWindow.document;
  var v904 = "</head>\n" + '<body class="main">\n';
  var v770 = v904 + '<div class="title">';
  var v528 = v770 + title$$9;
  var v134 = v528 + " results</div>\n";
  JAMScript.call(v133.write, v133, [v134]);
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
  var v529 = dnaSequence$$1.search(/./);
  var v135 = v529 != -1;
  if(v135) {
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
  var v136 = j$$5 < lengthOfColumn;
  for(;v136;) {
    tempString = tempString + " ";
    j$$5 = j$$5 + 1;
    v136 = j$$5 < lengthOfColumn
  }
  var v137 = tempString + theNumber;
  theNumber = v137 + " ";
  var v138 = sequenceToAppend + theNumber;
  sequenceToAppend = v138 + tabIn;
  return sequenceToAppend
}
function testScript() {
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v530 = testArray[0];
  var v139 = v530 != testString;
  if(v139) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v531 = testString.search(re$$2);
  var v140 = v531 == -1;
  if(v140) {
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
  var v141 = !caughtException;
  if(v141) {
    alert("Exception handling not supported. See browser compatibility page.")
  }
  testString = "123";
  testString = testString.replace(/(\d)/g, v1);
  var v142 = testString != "1X2X3X";
  if(v142) {
    alert("Nested function in String replace method not supported. See browser compatibility page.");
    return false
  }
  var testNum = 2489.8237;
  var v532 = testNum.toFixed(3);
  var v143 = v532 != 2489.824;
  if(v143) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v533 = testNum.toPrecision(5);
  var v144 = v533 != 2489.8;
  if(v144) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v534 = theNumber$$1.search(/\d/);
  var v145 = v534 == -1;
  if(v145) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v771 = emblFile.search(/ID/);
  var v535 = v771 == -1;
  var v773 = !v535;
  if(v773) {
    var v905 = emblFile.search(/AC/);
    var v772 = v905 == -1;
    var v907 = !v772;
    if(v907) {
      var v999 = emblFile.search(/DE/);
      var v906 = v999 == -1;
      var v1001 = !v906;
      if(v1001) {
        var v1000 = emblFile.search(/SQ/);
        v906 = v1000 == -1
      }
      v772 = v906
    }
    v535 = v772
  }
  var v146 = v535;
  if(v146) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v536 = theNumber$$2.search(/\d/);
  var v147 = v536 == -1;
  if(v147) {
    alert("Please enter a number.");
    return false
  }
  var v149 = theNumber$$2 > maxInput$$2;
  if(v149) {
    var v537 = "Please enter a number less than or equal to " + maxInput$$2;
    var v148 = v537 + ".";
    alert(v148);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v538 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v150 = v538 != -1;
  if(v150) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v539 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v151 = v539 != -1;
  if(v151) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v774 = genBankFile.search(/LOCUS/);
  var v540 = v774 == -1;
  var v776 = !v540;
  if(v776) {
    var v908 = genBankFile.search(/DEFINITION/);
    var v775 = v908 == -1;
    var v910 = !v775;
    if(v910) {
      var v1002 = genBankFile.search(/ACCESSION/);
      var v909 = v1002 == -1;
      var v1004 = !v909;
      if(v1004) {
        var v1003 = genBankFile.search(/ORIGIN/);
        v909 = v1003 == -1
      }
      v775 = v909
    }
    v540 = v775
  }
  var v152 = v540;
  if(v152) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v777 = genBankFile$$1.search(/LOCUS/);
  var v541 = v777 == -1;
  var v779 = !v541;
  if(v779) {
    var v911 = genBankFile$$1.search(/DEFINITION/);
    var v778 = v911 == -1;
    var v913 = !v778;
    if(v913) {
      var v1005 = genBankFile$$1.search(/ACCESSION/);
      var v912 = v1005 == -1;
      var v1007 = !v912;
      if(v1007) {
        var v1006 = genBankFile$$1.search(/ORIGIN/);
        v912 = v1006 == -1
      }
      v778 = v912
    }
    v541 = v778
  }
  var v153 = v541;
  if(v153) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v542 = genBankFile$$1.search(/FEATURES {13}/);
  var v154 = v542 == -1;
  if(v154) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v780 = emblFile$$1.search(/ID/);
  var v543 = v780 == -1;
  var v782 = !v543;
  if(v782) {
    var v914 = emblFile$$1.search(/AC/);
    var v781 = v914 == -1;
    var v916 = !v781;
    if(v916) {
      var v1008 = emblFile$$1.search(/DE/);
      var v915 = v1008 == -1;
      var v1010 = !v915;
      if(v1010) {
        var v1009 = emblFile$$1.search(/SQ/);
        v915 = v1009 == -1
      }
      v781 = v915
    }
    v543 = v781
  }
  var v155 = v543;
  if(v155) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v544 = emblFile$$1.search(/^FT/m);
  var v156 = v544 == -1;
  if(v156) {
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
  var v164 = i$$5 < stopBase;
  for(;v164;) {
    var v157 = i$$5 + 1;
    lineOfText = rightNum(v157, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v545 = basePerLine / groupSize;
    var v161 = j$$6 <= v545;
    for(;v161;) {
      var v160 = k < groupSize;
      for(;v160;) {
        var v158 = lineOfText;
        var v546 = k + i$$5;
        var v159 = text$$10.charAt(v546);
        lineOfText = v158 + v159;
        k = k + 1;
        v160 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v547 = basePerLine / groupSize;
      v161 = j$$6 <= v547
    }
    var v162 = outputWindow.document;
    var v163 = lineOfText + "\n";
    JAMScript.call(v162.write, v162, [v163]);
    lineOfText = "";
    v164 = i$$5 < stopBase
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
    var v548 = adjustment < 0;
    if(v548) {
      v548 = adjusted >= 0
    }
    var v165 = v548;
    if(v165) {
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
  var v198 = i$$6 < stopBase$$2;
  for(;v198;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v549 = basePerLine$$2 / groupSize$$2;
    var v174 = j$$7 <= v549;
    for(;v174;) {
      var v169 = k$$1 < groupSize$$2;
      for(;v169;) {
        var v550 = i$$6 + k$$1;
        var v166 = v550 >= stopBase$$2;
        if(v166) {
          break
        }
        var v167 = lineOfText$$1;
        var v551 = k$$1 + i$$6;
        var v168 = text$$12.charAt(v551);
        lineOfText$$1 = v167 + v168;
        k$$1 = k$$1 + 1;
        v169 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v172 = numberPosition$$1 == "above";
      if(v172) {
        var v170 = aboveNum;
        var v552 = adjustNumbering(i$$6, numberingAdjustment);
        var v171 = rightNum(v552, "", groupSize$$2, tabIn$$3);
        aboveNum = v170 + v171
      }
      var v173 = i$$6 >= stopBase$$2;
      if(v173) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v553 = basePerLine$$2 / groupSize$$2;
      v174 = j$$7 <= v553
    }
    var v197 = numberPosition$$1 == "left";
    if(v197) {
      var v175 = outputWindow.document;
      var v917 = adjustNumbering(lineNum, numberingAdjustment);
      var v783 = rightNum(v917, "", 8, tabIn$$3);
      var v554 = v783 + lineOfText$$1;
      var v176 = v554 + "\n";
      JAMScript.call(v175.write, v175, [v176]);
      var v180 = strands$$1 == "two";
      if(v180) {
        var v177 = outputWindow.document;
        var v918 = adjustNumbering(lineNum, numberingAdjustment);
        var v784 = rightNum(v918, "", 8, tabIn$$3);
        var v785 = complement(lineOfText$$1);
        var v555 = v784 + v785;
        var v178 = v555 + "\n";
        JAMScript.call(v177.write, v177, [v178]);
        var v179 = outputWindow.document;
        JAMScript.call(v179.write, v179, ["\n"])
      }
    }else {
      var v196 = numberPosition$$1 == "right";
      if(v196) {
        var v181 = outputWindow.document;
        var v786 = lineOfText$$1;
        var v787 = adjustNumbering(i$$6, numberingAdjustment);
        var v556 = v786 + v787;
        var v182 = v556 + "\n";
        JAMScript.call(v181.write, v181, [v182]);
        var v186 = strands$$1 == "two";
        if(v186) {
          var v183 = outputWindow.document;
          var v788 = complement(lineOfText$$1);
          var v789 = adjustNumbering(i$$6, numberingAdjustment);
          var v557 = v788 + v789;
          var v184 = v557 + "\n";
          JAMScript.call(v183.write, v183, [v184]);
          var v185 = outputWindow.document;
          JAMScript.call(v185.write, v185, ["\n"])
        }
      }else {
        var v195 = numberPosition$$1 == "above";
        if(v195) {
          var v187 = outputWindow.document;
          var v188 = aboveNum + "\n";
          JAMScript.call(v187.write, v187, [v188]);
          var v189 = outputWindow.document;
          var v190 = lineOfText$$1 + "\n";
          JAMScript.call(v189.write, v189, [v190]);
          var v194 = strands$$1 == "two";
          if(v194) {
            var v191 = outputWindow.document;
            var v558 = complement(lineOfText$$1);
            var v192 = v558 + "\n";
            JAMScript.call(v191.write, v191, [v192]);
            var v193 = outputWindow.document;
            JAMScript.call(v193.write, v193, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v198 = i$$6 < stopBase$$2
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
  var v219 = i$$7 < stopBase$$3;
  for(;v219;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v559 = basePerLine$$3 / groupSize$$3;
    var v207 = j$$8 <= v559;
    for(;v207;) {
      var v202 = k$$2 < groupSize$$3;
      for(;v202;) {
        var v560 = i$$7 + k$$2;
        var v199 = v560 >= stopBase$$3;
        if(v199) {
          break
        }
        var v200 = lineOfText$$2;
        var v561 = k$$2 + i$$7;
        var v201 = text$$13.charAt(v561);
        lineOfText$$2 = v200 + v201;
        k$$2 = k$$2 + 1;
        v202 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v205 = numberPosition$$2 == "above";
      if(v205) {
        var v203 = aboveNum$$1;
        var v204 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v203 + v204
      }
      var v206 = i$$7 >= stopBase$$3;
      if(v206) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v562 = basePerLine$$3 / groupSize$$3;
      v207 = j$$8 <= v562
    }
    var v218 = numberPosition$$2 == "left";
    if(v218) {
      var v208 = outputWindow.document;
      var v790 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v563 = v790 + lineOfText$$2;
      var v209 = v563 + "\n";
      JAMScript.call(v208.write, v208, [v209])
    }else {
      var v217 = numberPosition$$2 == "right";
      if(v217) {
        var v210 = outputWindow.document;
        var v564 = lineOfText$$2 + i$$7;
        var v211 = v564 + "\n";
        JAMScript.call(v210.write, v210, [v211])
      }else {
        var v216 = numberPosition$$2 == "above";
        if(v216) {
          var v212 = outputWindow.document;
          var v213 = aboveNum$$1 + "\n";
          JAMScript.call(v212.write, v212, [v213]);
          var v214 = outputWindow.document;
          var v215 = lineOfText$$2 + "\n";
          JAMScript.call(v214.write, v214, [v215])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v219 = i$$7 < stopBase$$3
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
  var v791 = sequence$$13.length;
  var v565 = v791 <= firstIndexToMutate;
  var v793 = !v565;
  if(v793) {
    var v792 = lastIndexToMutate < 0;
    var v919 = !v792;
    if(v919) {
      v792 = lastIndexToMutate <= firstIndexToMutate
    }
    v565 = v792
  }
  var v220 = v565;
  if(v220) {
    numMut = 0
  }
  var i$$8 = 0;
  var v228 = i$$8 < numMut;
  for(;v228;) {
    maxNum = sequence$$13.length;
    var v566 = Math.random();
    var v221 = v566 * maxNum;
    randNum = Math.floor(v221);
    var v567 = randNum < firstIndexToMutate;
    var v794 = !v567;
    if(v794) {
      v567 = randNum > lastIndexToMutate
    }
    var v222 = v567;
    if(v222) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v228 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v568 = Math.random();
      var v569 = components$$1.length;
      var v223 = v568 * v569;
      componentsIndex = Math.round(v223);
      var v570 = components$$1.length;
      var v224 = componentsIndex == v570;
      if(v224) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v571 = components$$1[componentsIndex]
      }
      var v225 = v571 != currentChar;
      if(v225) {
        needNewChar = false
      }
    }
    var v572 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v573 = components$$1[componentsIndex]
    }
    var v226 = v572 + v573;
    var v574 = randNum + 1;
    var v575 = sequence$$13.length;
    var v227 = sequence$$13.substring(v574, v575);
    sequence$$13 = v226 + v227;
    i$$8 = i$$8 + 1;
    v228 = i$$8 < numMut
  }
  var v229 = outputWindow.document;
  var v230 = addReturns(sequence$$13);
  JAMScript.call(v229.write, v229, [v230]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v235 = j$$9 < lengthOut$$1;
  for(;v235;) {
    var v576 = Math.random();
    var v577 = components$$2.length;
    var v231 = v576 * v577;
    tempNum$$1 = Math.floor(v231);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v578 = sequence$$14.length;
    var v234 = v578 == 60;
    if(v234) {
      var v232 = outputWindow.document;
      var v233 = sequence$$14 + "\n";
      JAMScript.call(v232.write, v232, [v233]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v235 = j$$9 < lengthOut$$1
  }
  var v236 = outputWindow.document;
  var v237 = sequence$$14 + "\n";
  JAMScript.call(v236.write, v236, [v237]);
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
  var v241 = dnaConformation == "circular";
  if(v241) {
    var v238 = sequence$$15.substring(0, lookAhead);
    shiftValue = v238.length;
    var v920 = sequence$$15.length;
    var v795 = v920 - lookAhead;
    var v796 = sequence$$15.length;
    var v579 = sequence$$15.substring(v795, v796);
    var v239 = v579 + sequence$$15;
    var v240 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v239 + v240;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v242 = outputWindow.document;
  JAMScript.call(v242.write, v242, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v243 = outputWindow.document;
  var v921 = '<tr><td class="title" width="200px">' + "Site:";
  var v797 = v921 + '</td><td class="title">';
  var v580 = v797 + "Positions:";
  var v244 = v580 + "</td></tr>\n";
  JAMScript.call(v243.write, v243, [v244]);
  var i$$9 = 0;
  var v581 = arrayOfItems.length;
  var v260 = i$$9 < v581;
  for(;v260;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v582 = arrayOfItems[i$$9]
    }
    var v245 = v582.match(/\/.+\//);
    matchExp = v245 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v922 = arrayOfItems[i$$9]
    }
    var v798 = v922.match(/\)\D*\d+/);
    var v583 = v798.toString();
    var v246 = v583.replace(/\)\D*/, "");
    cutDistance = parseFloat(v246);
    var v252 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v252;) {
      var v247 = matchExp.lastIndex;
      matchPosition = v247 - cutDistance;
      var v584 = matchPosition >= lowerLimit;
      if(v584) {
        v584 = matchPosition < upperLimit
      }
      var v250 = v584;
      if(v250) {
        timesFound = timesFound + 1;
        var v248 = tempString$$1 + ", ";
        var v585 = matchPosition - shiftValue;
        var v249 = v585 + 1;
        tempString$$1 = v248 + v249
      }
      var v586 = matchExp.lastIndex;
      var v799 = RegExp.lastMatch;
      var v587 = v799.length;
      var v251 = v586 - v587;
      matchExp.lastIndex = v251 + 1;
      v252 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v588 = tempString$$1.search(/\d/);
    var v253 = v588 != -1;
    if(v253) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v257 = timesFound == 0;
    if(v257) {
      backGroundClass = "none"
    }else {
      var v256 = timesFound == 1;
      if(v256) {
        backGroundClass = "one"
      }else {
        var v255 = timesFound == 2;
        if(v255) {
          backGroundClass = "two"
        }else {
          var v254 = timesFound == 3;
          if(v254) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v258 = outputWindow.document;
    var v1119 = '<tr><td class="' + backGroundClass;
    var v1097 = v1119 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1141 = arrayOfItems[i$$9]
    }
    var v1131 = v1141.match(/\([^\(]+\)/);
    var v1120 = v1131.toString();
    var v1098 = v1120.replace(/\(|\)/g, "");
    var v1059 = v1097 + v1098;
    var v1011 = v1059 + '</td><td class="';
    var v923 = v1011 + backGroundClass;
    var v800 = v923 + '">';
    var v589 = v800 + tempString$$1;
    var v259 = v589 + "</td></tr>\n";
    JAMScript.call(v258.write, v258, [v259]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v590 = arrayOfItems.length;
    v260 = i$$9 < v590
  }
  var v261 = outputWindow.document;
  JAMScript.call(v261.write, v261, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v262 = outputWindow.document;
  JAMScript.call(v262.write, v262, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v263 = outputWindow.document;
  var v1060 = '<tr><td class="title">' + "Pattern:";
  var v1012 = v1060 + '</td><td class="title">';
  var v924 = v1012 + "Times found:";
  var v801 = v924 + '</td><td class="title">';
  var v591 = v801 + "Percentage:";
  var v264 = v591 + "</td></tr>\n";
  JAMScript.call(v263.write, v263, [v264]);
  var i$$10 = 0;
  var v592 = arrayOfItems$$1.length;
  var v273 = i$$10 < v592;
  for(;v273;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v593 = arrayOfItems$$1[i$$10]
    }
    var v265 = v593.match(/\/[^\/]+\//);
    var matchExp$$1 = v265 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v594 = sequence$$16.search(matchExp$$1);
    var v267 = v594 != -1;
    if(v267) {
      var v266 = sequence$$16.match(matchExp$$1);
      tempNumber = v266.length
    }
    var percentage = 0;
    var v802 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1013 = arrayOfItems$$1[i$$10]
    }
    var v925 = v1013.match(/\d+/);
    var v803 = parseFloat(v925);
    var v595 = v802 - v803;
    var v270 = v595 > 0;
    if(v270) {
      var v268 = 100 * tempNumber;
      var v596 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v926 = arrayOfItems$$1[i$$10]
      }
      var v804 = v926.match(/\d+/);
      var v597 = parseFloat(v804);
      var v269 = v596 - v597;
      percentage = v268 / v269
    }
    var v271 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1142 = arrayOfItems$$1[i$$10]
    }
    var v1132 = v1142.match(/\([^\(]+\)\b/);
    var v1121 = v1132.toString();
    var v1099 = v1121.replace(/\(|\)/g, "");
    var v1061 = "<tr><td>" + v1099;
    var v1014 = v1061 + "</td><td>";
    var v927 = v1014 + tempNumber;
    var v805 = v927 + "</td><td>";
    var v806 = percentage.toFixed(2);
    var v598 = v805 + v806;
    var v272 = v598 + "</td></tr>\n";
    JAMScript.call(v271.write, v271, [v272]);
    i$$10 = i$$10 + 1;
    var v599 = arrayOfItems$$1.length;
    v273 = i$$10 < v599
  }
  var v274 = outputWindow.document;
  JAMScript.call(v274.write, v274, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v600 = sequence$$17.length;
  var v281 = v600 > 0;
  for(;v281;) {
    maxNum$$1 = sequence$$17.length;
    var v601 = Math.random();
    var v275 = v601 * maxNum$$1;
    randNum$$1 = Math.floor(v275);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v276 = randNum$$1 + 1;
    var v277 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v276, v277);
    sequence$$17 = tempString1 + tempString2;
    var v602 = tempSeq.length;
    var v280 = v602 == 60;
    if(v280) {
      var v278 = outputWindow.document;
      var v279 = tempSeq + "\n";
      JAMScript.call(v278.write, v278, [v279]);
      tempSeq = ""
    }
    var v603 = sequence$$17.length;
    v281 = v603 > 0
  }
  var v282 = outputWindow.document;
  var v283 = tempSeq + "\n";
  JAMScript.call(v282.write, v282, [v283]);
  return true
}
function rangeExtract(theDocument) {
  var newDna = "";
  var maxInput$$3 = 5E5;
  var matchFound = false;
  var ranges = new Array;
  var v604 = testScript();
  var v284 = v604 == false;
  if(v284) {
    return false
  }
  var v1100 = theDocument.forms;
  var v1062 = v1100[0];
  var v1015 = v1062.elements;
  var v928 = v1015[0];
  var v807 = checkFormElement(v928);
  var v605 = v807 == false;
  var v809 = !v605;
  if(v809) {
    var v1133 = theDocument.forms;
    var v1122 = v1133[0];
    var v1101 = v1122.elements;
    var v1063 = v1101[0];
    var v1016 = v1063.value;
    var v929 = checkSequenceLength(v1016, maxInput$$3);
    var v808 = v929 == false;
    var v931 = !v808;
    if(v931) {
      var v1123 = theDocument.forms;
      var v1102 = v1123[0];
      var v1064 = v1102.elements;
      var v1017 = v1064[1];
      var v930 = checkFormElement(v1017);
      v808 = v930 == false
    }
    v605 = v808
  }
  var v285 = v605;
  if(v285) {
    return false
  }
  var v1018 = theDocument.forms;
  var v932 = v1018[0];
  var v810 = v932.elements;
  var v606 = v810[1];
  var v286 = v606.value;
  var arrayOfRanges = v286.split(/,/);
  var arrayOfStartAndEnd;
  var i$$11 = 0;
  var v607 = arrayOfRanges.length;
  var v293 = i$$11 < v607;
  for(;v293;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v287 = arrayOfRanges[i$$11]
    }
    arrayOfStartAndEnd = v287.split(/\.\./);
    var v608 = arrayOfStartAndEnd.length;
    var v292 = v608 == 1;
    if(v292) {
      matchFound = true;
      var v609 = arrayOfStartAndEnd[0];
      var v610 = arrayOfStartAndEnd[0];
      var v288 = new Range(v609, v610);
      ranges.push(v288)
    }else {
      var v611 = arrayOfStartAndEnd.length;
      var v291 = v611 == 2;
      if(v291) {
        matchFound = true;
        var v612 = arrayOfStartAndEnd[0];
        var v613 = arrayOfStartAndEnd[1];
        var v289 = new Range(v612, v613);
        ranges.push(v289)
      }else {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v614 = arrayOfRanges[i$$11]
        }
        var v290 = "The following range entry was ignored: " + v614;
        alert(v290)
      }
    }
    i$$11 = i$$11 + 1;
    var v615 = arrayOfRanges.length;
    v293 = i$$11 < v615
  }
  var v294 = matchFound == false;
  if(v294) {
    alert("No ranges were entered.");
    return false
  }
  openWindow("Range Extractor DNA");
  openPre();
  var v1019 = theDocument.forms;
  var v933 = v1019[0];
  var v811 = v933.elements;
  var v616 = v811[0];
  var v295 = v616.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v295);
  i$$11 = 0;
  var v617 = arrayOfFasta$$1.length;
  var v302 = i$$11 < v617;
  for(;v302;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v296 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v296);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v297 = arrayOfFasta$$1[i$$11]
    }
    title = getTitleFromFasta(v297);
    verifyDna(newDna);
    newDna = removeNonDna(newDna);
    var v298 = outputWindow.document;
    var v299 = getFastaTitleFromTitleAndSequence(title, newDna);
    JAMScript.call(v298.write, v298, [v299]);
    var v1103 = theDocument.forms;
    var v1065 = v1103[0];
    var v1020 = v1065.elements;
    var v934 = v1020[5];
    var v812 = v934.options;
    var v1104 = theDocument.forms;
    var v1066 = v1104[0];
    var v1021 = v1066.elements;
    var v935 = v1021[5];
    var v813 = v935.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v618 = v812[v813]
    }
    var v300 = v618.value;
    var v1105 = theDocument.forms;
    var v1067 = v1105[0];
    var v1022 = v1067.elements;
    var v936 = v1022[6];
    var v814 = v936.options;
    var v1106 = theDocument.forms;
    var v1068 = v1106[0];
    var v1023 = v1068.elements;
    var v937 = v1023[6];
    var v815 = v937.selectedIndex;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v619 = v814[v815]
    }
    var v301 = v619.value;
    writeSequenceRanges(newDna, ranges, v300, v301);
    i$$11 = i$$11 + 1;
    var v620 = arrayOfFasta$$1.length;
    v302 = i$$11 < v620
  }
  closePre();
  closeWindow();
  return true
}
function writeSequenceRanges(sequence$$18, ranges$$1, strand, segmentType) {
  var rangeGroup = new RangeGroup(strand, segmentType);
  var v621 = sequence$$18.length;
  var v303 = v621 / 2;
  var center_base = Math.round(v303);
  var i$$12 = 0;
  var v622 = ranges$$1.length;
  var v317 = i$$12 < v622;
  for(;v317;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v304 = ranges$$1[i$$12]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v938 = ranges$$1[i$$12]
    }
    var v816 = v938.start;
    var v623 = v816.toString();
    var v1178 = v623.replace(/start|begin/gi, 1);
    v304.start = v1178;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v305 = ranges$$1[i$$12]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v939 = ranges$$1[i$$12]
    }
    var v817 = v939.start;
    var v624 = v817.toString();
    var v625 = sequence$$18.length;
    var v1179 = v624.replace(/stop|end/gi, v625);
    v305.start = v1179;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v306 = ranges$$1[i$$12]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v940 = ranges$$1[i$$12]
    }
    var v818 = v940.start;
    var v626 = v818.toString();
    var v627 = sequence$$18.length;
    var v1180 = v626.replace(/length/gi, v627);
    v306.start = v1180;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v307 = ranges$$1[i$$12]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v941 = ranges$$1[i$$12]
    }
    var v819 = v941.start;
    var v628 = v819.toString();
    var v1181 = v628.replace(/middle|center|centre/gi, center_base);
    v307.start = v1181;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v308 = ranges$$1[i$$12]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v942 = ranges$$1[i$$12]
    }
    var v820 = v942.stop;
    var v629 = v820.toString();
    var v1182 = v629.replace(/start|begin/gi, 1);
    v308.stop = v1182;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v309 = ranges$$1[i$$12]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v943 = ranges$$1[i$$12]
    }
    var v821 = v943.stop;
    var v630 = v821.toString();
    var v631 = sequence$$18.length;
    var v1183 = v630.replace(/stop|end/gi, v631);
    v309.stop = v1183;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v310 = ranges$$1[i$$12]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v944 = ranges$$1[i$$12]
    }
    var v822 = v944.stop;
    var v632 = v822.toString();
    var v633 = sequence$$18.length;
    var v1184 = v632.replace(/length/gi, v633);
    v310.stop = v1184;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v311 = ranges$$1[i$$12]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v945 = ranges$$1[i$$12]
    }
    var v823 = v945.stop;
    var v634 = v823.toString();
    var v1185 = v634.replace(/middle|center|centre/gi, center_base);
    v311.stop = v1185;
    try {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v312 = ranges$$1[i$$12]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1024 = ranges$$1[i$$12]
      }
      var v946 = v1024.start;
      var v824 = v946.toString();
      if(JAMScript.isEval(eval)) {
        var v635 = eval("introspect(JAMScript.introspectors.processAll) { " + v824 + " }")
      }else {
        var v635 = JAMScript.call(eval, null, [v824])
      }
      var v1186 = parseInt(v635);
      v312.start = v1186
    }catch(e$$5) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v825 = ranges$$1[i$$12]
      }
      var v636 = v825.start;
      var v313 = "Could not evaluate the following expression: " + v636;
      alert(v313);
      return false
    }
    try {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v314 = ranges$$1[i$$12]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1025 = ranges$$1[i$$12]
      }
      var v947 = v1025.stop;
      var v826 = v947.toString();
      if(JAMScript.isEval(eval)) {
        var v637 = eval("introspect(JAMScript.introspectors.processAll) { " + v826 + " }")
      }else {
        var v637 = JAMScript.call(eval, null, [v826])
      }
      var v1187 = parseInt(v637);
      v314.stop = v1187
    }catch(e$$6) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v827 = ranges$$1[i$$12]
      }
      var v638 = v827.stop;
      var v315 = "Could not evaluate the following expression: " + v638;
      alert(v315);
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v316 = ranges$$1[i$$12]
    }
    JAMScript.call(rangeGroup.addRange, rangeGroup, [v316]);
    i$$12 = i$$12 + 1;
    var v639 = ranges$$1.length;
    v317 = i$$12 < v639
  }
  JAMScript.call(rangeGroup.writeRanges, rangeGroup, [sequence$$18]);
  return
}
function getSequence(sequence$$19) {
  var problem = false;
  var warnings = new Array;
  var v640 = this.start;
  var v641 = this.stop;
  var v332 = v640 == v641;
  if(v332) {
    var v642 = this.start;
    var v319 = v642 < 1;
    if(v319) {
      problem = true;
      var v828 = this.start;
      var v643 = "position value of " + v828;
      var v318 = v643 + " is less than 1";
      warnings.push(v318)
    }
    var v644 = this.start;
    var v645 = sequence$$19.length;
    var v321 = v644 > v645;
    if(v321) {
      problem = true;
      var v829 = this.start;
      var v646 = "position value of " + v829;
      var v320 = v646 + " is greater than the sequence length";
      warnings.push(v320)
    }
  }else {
    var v647 = this.start;
    var v323 = v647 < 1;
    if(v323) {
      problem = true;
      var v830 = this.start;
      var v648 = "position value of " + v830;
      var v322 = v648 + " is less than 1";
      warnings.push(v322)
    }
    var v649 = this.stop;
    var v325 = v649 < 1;
    if(v325) {
      problem = true;
      var v831 = this.stop;
      var v650 = "position value of " + v831;
      var v324 = v650 + " is less than 1";
      warnings.push(v324)
    }
    var v651 = this.start;
    var v652 = sequence$$19.length;
    var v327 = v651 > v652;
    if(v327) {
      problem = true;
      var v832 = this.start;
      var v653 = "position value of " + v832;
      var v326 = v653 + " is greater than the sequence length";
      warnings.push(v326)
    }
    var v654 = this.stop;
    var v655 = sequence$$19.length;
    var v329 = v654 > v655;
    if(v329) {
      problem = true;
      var v833 = this.stop;
      var v656 = "position value of " + v833;
      var v328 = v656 + " is greater than the sequence length";
      warnings.push(v328)
    }
    var v657 = this.start;
    var v658 = this.stop;
    var v331 = v657 > v658;
    if(v331) {
      problem = true;
      var v948 = this.start;
      var v834 = "stop position is less than start position in range " + v948;
      var v659 = v834 + " to ";
      var v660 = this.stop;
      var v330 = v659 + v660;
      warnings.push(v330)
    }
  }
  if(problem) {
    var v661 = warnings.join(",\n");
    var v333 = "An entry was skipped because of the following:\n" + v661;
    alert(v333);
    return false
  }else {
    var v662 = this.start;
    var v663 = this.stop;
    var v337 = v662 == v663;
    if(v337) {
      var v664 = this.start;
      var v334 = v664 - 1;
      return sequence$$19.charAt(v334)
    }else {
      var v665 = this.start;
      var v335 = v665 - 1;
      var v336 = this.stop;
      return sequence$$19.substring(v335, v336)
    }
  }
  return
}
function getTitle() {
  var v666 = this.start;
  var v667 = this.stop;
  var v341 = v666 == v667;
  if(v341) {
    var v338 = this.start;
    return"&gt;base " + v338
  }else {
    var v835 = this.start;
    var v668 = "&gt;base " + v835;
    var v339 = v668 + " to ";
    var v340 = this.stop;
    return v339 + v340
  }
  return
}
function Range(start$$4, stop) {
  this.start = start$$4;
  this.stop = stop;
  return
}
function addRange(range$$5) {
  var v342 = this.ranges;
  v342.push(range$$5);
  return
}
function writeRanges(sequence$$20) {
  function v9(str$$15, p1$$9, offset$$21, s$$11) {
    var v669 = p1$$9.length;
    var v343 = offset$$21 + v669;
    return sequence$$20.substring(offset$$21, v343)
  }
  function v8(str$$14, p1$$8, p2$$3, offset$$20, s$$10) {
    var v344 = p1$$8;
    var v670 = p1$$8.length;
    var v836 = p1$$8.length;
    var v837 = p2$$3.length;
    var v671 = v836 + v837;
    var v345 = sequence$$20.substring(v670, v671);
    return v344 + v345
  }
  function v7(str$$13, p1$$7, offset$$19, s$$9) {
    var v346 = ["g", "a", "c", "t"];
    var v347 = p1$$7.length;
    return getRandomSequence(v346, v347)
  }
  function v6(str$$12, p1$$6, p2$$2, offset$$18, s$$8) {
    var v348 = p1$$6;
    var v672 = ["g", "a", "c", "t"];
    var v673 = p2$$2.length;
    var v349 = getRandomSequence(v672, v673);
    return v348 + v349
  }
  function v5(str$$11, p1$$5, offset$$17, s$$7) {
    return p1$$5.toLowerCase()
  }
  function v4(str$$10, p1$$4, p2$$1, offset$$16, s$$6) {
    var v350 = p1$$4;
    var v351 = p2$$1.toLowerCase();
    return v350 + v351
  }
  function v3(str$$9, p1$$3, offset$$15, s$$5) {
    return p1$$3.toUpperCase()
  }
  function v2(str$$8, p1$$2, p2, offset$$14, s$$4) {
    var v352 = p1$$2;
    var v353 = p2.toUpperCase();
    return v352 + v353
  }
  var sequenceArray$$1 = new Array;
  var v674 = this.type;
  var v362 = v674 == "new_sequence";
  if(v362) {
    var i$$13 = 0;
    var v838 = this.ranges;
    var v675 = v838.length;
    var v356 = i$$13 < v675;
    for(;v356;) {
      var v949 = this.ranges;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v839 = v949[i$$13]
      }
      var v676 = JAMScript.call(v839.getSequence, v839, [sequence$$20]);
      var v355 = v676 != "";
      if(v355) {
        var v840 = this.ranges;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v677 = v840[i$$13]
        }
        var v354 = JAMScript.call(v677.getSequence, v677, [sequence$$20]);
        sequenceArray$$1.push(v354)
      }
      i$$13 = i$$13 + 1;
      var v841 = this.ranges;
      var v678 = v841.length;
      v356 = i$$13 < v678
    }
    var v679 = this.strand;
    var v361 = v679 == "reverse";
    if(v361) {
      var v357 = outputWindow.document;
      var v1026 = sequenceArray$$1.join("");
      var v950 = complement(v1026);
      var v842 = reverse(v950);
      var v680 = addReturns(v842);
      var v358 = v680 + "\n\n";
      JAMScript.call(v357.write, v357, [v358])
    }else {
      var v359 = outputWindow.document;
      var v843 = sequenceArray$$1.join("");
      var v681 = addReturns(v843);
      var v360 = v681 + "\n\n";
      JAMScript.call(v359.write, v359, [v360])
    }
    return true
  }
  var v682 = this.type;
  var v372 = v682 == "separate";
  if(v372) {
    i$$13 = 0;
    var v844 = this.ranges;
    var v683 = v844.length;
    var v371 = i$$13 < v683;
    for(;v371;) {
      var v951 = this.ranges;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v845 = v951[i$$13]
      }
      var v684 = JAMScript.call(v845.getSequence, v845, [sequence$$20]);
      var v370 = v684 != "";
      if(v370) {
        var v363 = outputWindow.document;
        var v952 = this.ranges;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v846 = v952[i$$13]
        }
        var v685 = JAMScript.call(v846.getTitle, v846, []);
        var v364 = v685 + "\n";
        JAMScript.call(v363.write, v363, [v364]);
        var v686 = this.strand;
        var v369 = v686 == "reverse";
        if(v369) {
          var v365 = outputWindow.document;
          var v1107 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1069 = v1107[i$$13]
          }
          var v1027 = JAMScript.call(v1069.getSequence, v1069, [sequence$$20]);
          var v953 = addReturns(v1027);
          var v847 = complement(v953);
          var v687 = reverse(v847);
          var v366 = v687 + "\n\n";
          JAMScript.call(v365.write, v365, [v366])
        }else {
          var v367 = outputWindow.document;
          var v1028 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v954 = v1028[i$$13]
          }
          var v848 = JAMScript.call(v954.getSequence, v954, [sequence$$20]);
          var v688 = addReturns(v848);
          var v368 = v688 + "\n\n";
          JAMScript.call(v367.write, v367, [v368])
        }
      }
      i$$13 = i$$13 + 1;
      var v849 = this.ranges;
      var v689 = v849.length;
      v371 = i$$13 < v689
    }
    return true
  }
  var v690 = this.type;
  var v383 = v690 == "uppercased";
  if(v383) {
    var re$$3;
    sequence$$20 = sequence$$20.toLowerCase();
    i$$13 = 0;
    var v850 = this.ranges;
    var v691 = v850.length;
    var v377 = i$$13 < v691;
    for(;v377;) {
      var v955 = this.ranges;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v851 = v955[i$$13]
      }
      var v692 = JAMScript.call(v851.getSequence, v851, [sequence$$20]);
      var v376 = v692 != "";
      if(v376) {
        var v956 = this.ranges;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v852 = v956[i$$13]
        }
        var v693 = v852.start;
        var v375 = v693 > 1;
        if(v375) {
          var v1108 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1070 = v1108[i$$13]
          }
          var v1029 = v1070.start;
          var v957 = v1029 - 1;
          var v853 = "(.{" + v957;
          var v694 = v853 + "})\\B(.{";
          var v1071 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1030 = v1071[i$$13]
          }
          var v958 = v1030.stop;
          var v1072 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1031 = v1072[i$$13]
          }
          var v959 = v1031.start;
          var v854 = v958 - v959;
          var v695 = v854 + 1;
          var v373 = v694 + v695;
          re$$3 = v373 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v2)
        }else {
          var v1073 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1032 = v1073[i$$13]
          }
          var v960 = v1032.stop;
          var v1074 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1033 = v1074[i$$13]
          }
          var v961 = v1033.start;
          var v855 = v960 - v961;
          var v696 = v855 + 1;
          var v374 = "(.{" + v696;
          re$$3 = v374 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v3)
        }
      }
      i$$13 = i$$13 + 1;
      var v856 = this.ranges;
      var v697 = v856.length;
      v377 = i$$13 < v697
    }
    var v698 = this.strand;
    var v382 = v698 == "reverse";
    if(v382) {
      var v378 = outputWindow.document;
      var v962 = addReturns(sequence$$20);
      var v857 = complement(v962);
      var v699 = reverse(v857);
      var v379 = v699 + "\n\n";
      JAMScript.call(v378.write, v378, [v379])
    }else {
      var v380 = outputWindow.document;
      var v700 = addReturns(sequence$$20);
      var v381 = v700 + "\n\n";
      JAMScript.call(v380.write, v380, [v381])
    }
    return true
  }
  var v701 = this.type;
  var v394 = v701 == "lowercased";
  if(v394) {
    sequence$$20 = sequence$$20.toUpperCase();
    i$$13 = 0;
    var v858 = this.ranges;
    var v702 = v858.length;
    var v388 = i$$13 < v702;
    for(;v388;) {
      var v963 = this.ranges;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v859 = v963[i$$13]
      }
      var v703 = JAMScript.call(v859.getSequence, v859, [sequence$$20]);
      var v387 = v703 != "";
      if(v387) {
        var v964 = this.ranges;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v860 = v964[i$$13]
        }
        var v704 = v860.start;
        var v386 = v704 > 1;
        if(v386) {
          var v1109 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1075 = v1109[i$$13]
          }
          var v1034 = v1075.start;
          var v965 = v1034 - 1;
          var v861 = "(.{" + v965;
          var v705 = v861 + "})\\B(.{";
          var v1076 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1035 = v1076[i$$13]
          }
          var v966 = v1035.stop;
          var v1077 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1036 = v1077[i$$13]
          }
          var v967 = v1036.start;
          var v862 = v966 - v967;
          var v706 = v862 + 1;
          var v384 = v705 + v706;
          re$$3 = v384 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v4)
        }else {
          var v1078 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1037 = v1078[i$$13]
          }
          var v968 = v1037.stop;
          var v1079 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1038 = v1079[i$$13]
          }
          var v969 = v1038.start;
          var v863 = v968 - v969;
          var v707 = v863 + 1;
          var v385 = "(.{" + v707;
          re$$3 = v385 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v5)
        }
      }
      i$$13 = i$$13 + 1;
      var v864 = this.ranges;
      var v708 = v864.length;
      v388 = i$$13 < v708
    }
    var v709 = this.strand;
    var v393 = v709 == "reverse";
    if(v393) {
      var v389 = outputWindow.document;
      var v970 = addReturns(sequence$$20);
      var v865 = complement(v970);
      var v710 = reverse(v865);
      var v390 = v710 + "\n\n";
      JAMScript.call(v389.write, v389, [v390])
    }else {
      var v391 = outputWindow.document;
      var v711 = addReturns(sequence$$20);
      var v392 = v711 + "\n\n";
      JAMScript.call(v391.write, v391, [v392])
    }
    return true
  }
  var v712 = this.type;
  var v405 = v712 == "randomized";
  if(v405) {
    i$$13 = 0;
    var v866 = this.ranges;
    var v713 = v866.length;
    var v399 = i$$13 < v713;
    for(;v399;) {
      var v971 = this.ranges;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v867 = v971[i$$13]
      }
      var v714 = JAMScript.call(v867.getSequence, v867, [sequence$$20]);
      var v398 = v714 != "";
      if(v398) {
        var v972 = this.ranges;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v868 = v972[i$$13]
        }
        var v715 = v868.start;
        var v397 = v715 > 1;
        if(v397) {
          var v1110 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1080 = v1110[i$$13]
          }
          var v1039 = v1080.start;
          var v973 = v1039 - 1;
          var v869 = "(.{" + v973;
          var v716 = v869 + "})\\B(.{";
          var v1081 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1040 = v1081[i$$13]
          }
          var v974 = v1040.stop;
          var v1082 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1041 = v1082[i$$13]
          }
          var v975 = v1041.start;
          var v870 = v974 - v975;
          var v717 = v870 + 1;
          var v395 = v716 + v717;
          re$$3 = v395 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v6)
        }else {
          var v1083 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1042 = v1083[i$$13]
          }
          var v976 = v1042.stop;
          var v1084 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1043 = v1084[i$$13]
          }
          var v977 = v1043.start;
          var v871 = v976 - v977;
          var v718 = v871 + 1;
          var v396 = "(.{" + v718;
          re$$3 = v396 + "})";
          re$$3 = new RegExp(re$$3);
          sequence$$20 = sequence$$20.replace(re$$3, v7)
        }
      }
      i$$13 = i$$13 + 1;
      var v872 = this.ranges;
      var v719 = v872.length;
      v399 = i$$13 < v719
    }
    var v720 = this.strand;
    var v404 = v720 == "reverse";
    if(v404) {
      var v400 = outputWindow.document;
      var v978 = addReturns(sequence$$20);
      var v873 = complement(v978);
      var v721 = reverse(v873);
      var v401 = v721 + "\n\n";
      JAMScript.call(v400.write, v400, [v401])
    }else {
      var v402 = outputWindow.document;
      var v722 = addReturns(sequence$$20);
      var v403 = v722 + "\n\n";
      JAMScript.call(v402.write, v402, [v403])
    }
    return true
  }
  var v723 = this.type;
  var v418 = v723 == "preserved";
  if(v418) {
    var v406 = ["g", "a", "c", "t"];
    var v407 = sequence$$20.length;
    var randomSequence = getRandomSequence(v406, v407);
    i$$13 = 0;
    var v874 = this.ranges;
    var v724 = v874.length;
    var v412 = i$$13 < v724;
    for(;v412;) {
      var v979 = this.ranges;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v875 = v979[i$$13]
      }
      var v725 = JAMScript.call(v875.getSequence, v875, [sequence$$20]);
      var v411 = v725 != "";
      if(v411) {
        var v980 = this.ranges;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v876 = v980[i$$13]
        }
        var v726 = v876.start;
        var v410 = v726 > 1;
        if(v410) {
          var v1111 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1085 = v1111[i$$13]
          }
          var v1044 = v1085.start;
          var v981 = v1044 - 1;
          var v877 = "(.{" + v981;
          var v727 = v877 + "})\\B(.{";
          var v1086 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1045 = v1086[i$$13]
          }
          var v982 = v1045.stop;
          var v1087 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1046 = v1087[i$$13]
          }
          var v983 = v1046.start;
          var v878 = v982 - v983;
          var v728 = v878 + 1;
          var v408 = v727 + v728;
          re$$3 = v408 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v8)
        }else {
          var v1088 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1047 = v1088[i$$13]
          }
          var v984 = v1047.stop;
          var v1089 = this.ranges;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1048 = v1089[i$$13]
          }
          var v985 = v1048.start;
          var v879 = v984 - v985;
          var v729 = v879 + 1;
          var v409 = "(.{" + v729;
          re$$3 = v409 + "})";
          re$$3 = new RegExp(re$$3);
          randomSequence = randomSequence.replace(re$$3, v9)
        }
      }
      i$$13 = i$$13 + 1;
      var v880 = this.ranges;
      var v730 = v880.length;
      v412 = i$$13 < v730
    }
    var v731 = this.strand;
    var v417 = v731 == "reverse";
    if(v417) {
      var v413 = outputWindow.document;
      var v986 = addReturns(randomSequence);
      var v881 = complement(v986);
      var v732 = reverse(v881);
      var v414 = v732 + "\n\n";
      JAMScript.call(v413.write, v413, [v414])
    }else {
      var v415 = outputWindow.document;
      var v733 = addReturns(randomSequence);
      var v416 = v733 + "\n\n";
      JAMScript.call(v415.write, v415, [v416])
    }
    return true
  }
  return
}
function RangeGroup(strand$$1, type$$25) {
  this.strand = strand$$1;
  this.type = type$$25;
  var v1188 = new Array;
  this.ranges = v1188;
  return
}
new Range(0, 0);
var v419 = Range.prototype;
v419.getSequence = getSequence;
var v420 = Range.prototype;
v420.getTitle = getTitle;
new RangeGroup("", "");
var v421 = RangeGroup.prototype;
v421.addRange = addRange;
var v422 = RangeGroup.prototype;
v422.writeRanges = writeRanges;
JAMScript.set(document, "onload", v10);
var v423 = document.getElementById("submitbtn");
JAMScript.set(v423, "onclick", v11);
var v424 = document.getElementById("clearbtn");
JAMScript.set(v424, "onclick", v12);

