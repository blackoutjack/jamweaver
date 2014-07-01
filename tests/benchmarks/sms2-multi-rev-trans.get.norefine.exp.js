function v4() {
  var v939 = document.forms;
  var v780 = v939[0];
  var v443 = v780.elements;
  var v5 = v443[0];
  v5.value = " ";
  var v940 = document.forms;
  var v781 = v940[0];
  var v444 = v781.elements;
  var v6 = v444[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    multiRevTrans(document)
  }catch(e$$8) {
    var v7 = "The following error was encountered: " + e$$8;
    alert(v7)
  }
  return
}
function v2() {
  var v445 = document.main_form;
  var v8 = v445.main_submit;
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
  var v446 = arrayOfSequences.length;
  var v10 = v446 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v447 = arrayOfTitles.length;
  var v12 = i$$1 < v447;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v941 = arrayOfTitles[i$$1]
    }
    var v782 = v941.search(/\S/);
    var v448 = v782 == -1;
    var v784 = !v448;
    if(v784) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1037 = arrayOfSequences[i$$1]
      }
      var v942 = v1037.search(/\S/);
      var v783 = v942 == -1;
      var v944 = !v783;
      if(v944) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1038 = arrayOfSequences[i$$1]
        }
        var v943 = v1038.length;
        v783 = v943 != lengthOfAlign
      }
      v448 = v783
    }
    var v11 = v448;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v449 = arrayOfTitles.length;
    v12 = i$$1 < v449
  }
  return true
}
function checkCodonTable(codonTable) {
  var v785 = codonTable.search(/AmAcid/);
  var v450 = v785 == -1;
  var v787 = !v450;
  if(v787) {
    var v945 = codonTable.search(/Codon/);
    var v786 = v945 == -1;
    var v947 = !v786;
    if(v947) {
      var v1039 = codonTable.search(/Number/);
      var v946 = v1039 == -1;
      var v1041 = !v946;
      if(v1041) {
        var v1093 = codonTable.search(/\/1000/);
        var v1040 = v1093 == -1;
        var v1095 = !v1040;
        if(v1095) {
          var v1094 = codonTable.search(/Fraction\s*\.\./);
          v1040 = v1094 == -1
        }
        v946 = v1040
      }
      v786 = v946
    }
    v450 = v786
  }
  var v13 = v450;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v788 = formElement.value;
  var v451 = v788.search(/\S/);
  var v14 = v451 == -1;
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
  var v452 = arrayOfPatterns.length;
  var v17 = z$$2 < v452;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v789 = arrayOfPatterns[z$$2]
    }
    var v453 = v789.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v453 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v790 = arrayOfPatterns[z$$2]
    }
    var v454 = moreExpressionCheck(v790);
    var v16 = v454 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v455 = arrayOfPatterns.length;
    v17 = z$$2 < v455
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v456 = arrayOfPatterns.length;
  var v26 = j < v456;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v948 = arrayOfPatterns[j]
    }
    var v791 = v948.match(/\/.+\//);
    var v457 = v791 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1262 = eval("introspect(JAMScript.introspectors.processAll) { " + v457 + " }")
    }else {
      var v1262 = JAMScript.call(eval, null, [v457])
    }
    v20[v21] = v1262;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v792 = arrayOfPatterns[j]
    }
    var v458 = v792.match(/=[a-zA-Z\*]/);
    var v1263 = v458.toString();
    v22[v23] = v1263;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v459 = geneticCodeMatchResult[j]
    }
    var v1264 = v459.replace(/=/g, "");
    v24[v25] = v1264;
    j = j + 1;
    var v460 = arrayOfPatterns.length;
    v26 = j < v460
  }
  var i$$2 = 0;
  var v793 = testSequence.length;
  var v461 = v793 - 3;
  var v33 = i$$2 <= v461;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v462 = geneticCodeMatchExp.length;
    var v31 = j < v462;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v794 = geneticCodeMatchExp[j]
      }
      var v463 = codon.search(v794);
      var v30 = v463 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v464 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v464 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v465 = geneticCodeMatchExp.length;
      v31 = j < v465
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v795 = testSequence.length;
    var v466 = v795 - 3;
    v33 = i$$2 <= v466
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v467 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v467;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v796 = arrayOfPatterns$$1[z$$3]
    }
    var v468 = v796.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v468 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v469 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v469
  }
  var i$$3 = 0;
  var v470 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v470;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v797 = arrayOfPatterns$$1[i$$3]
    }
    var v471 = "[" + v797;
    var v36 = v471 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v472 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v472;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v798 = arrayOfPatterns$$1[j$$1]
      }
      var v473 = v798.search(re);
      var v37 = v473 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v474 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v474
    }
    i$$3 = i$$3 + 1;
    var v475 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v475
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v476 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v476;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v799 = arrayOfPatterns$$2[z$$4]
    }
    var v477 = v799.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v477 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v800 = arrayOfPatterns$$2[z$$4]
    }
    var v478 = moreExpressionCheck(v800);
    var v41 = v478 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v479 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v479
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v949 = getSequenceFromFasta(text$$7);
  var v801 = v949.replace(/[^A-Za-z]/g, "");
  var v480 = v801.length;
  var v44 = v480 > maxInput;
  if(v44) {
    var v481 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v481 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v482 = text$$8.length;
  var v46 = v482 > maxInput$$1;
  if(v46) {
    var v483 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v483 + " characters.";
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
  var v484 = alignArray.length;
  var v53 = v484 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v485 = alignArray.length;
  var v55 = i$$4 < v485;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v802 = alignArray[i$$4]
    }
    var v486 = v802.search(/[^\s]+\s/);
    var v54 = v486 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v487 = alignArray.length;
    v55 = i$$4 < v487
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
  var v488 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v488 != -1;
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
  var v489 = sequence$$2.length;
  var v59 = "&gt;results for " + v489;
  var stringToReturn = v59 + " residue sequence ";
  var v490 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v490 != -1;
  if(v61) {
    var v491 = stringToReturn + '"';
    var v60 = v491 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v492 = stringToReturn + ' starting "';
  var v493 = sequence$$2.substring(0, 10);
  var v62 = v492 + v493;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v494 = sequenceOne.length;
  var v63 = "Search results for " + v494;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v495 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v495 != -1;
  if(v65) {
    var v496 = stringToReturn$$1 + '"';
    var v64 = v496 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v497 = stringToReturn$$1 + ' starting "';
  var v498 = sequenceOne.substring(0, 10);
  var v66 = v497 + v498;
  stringToReturn$$1 = v66 + '"\n';
  var v499 = stringToReturn$$1 + "and ";
  var v500 = sequenceTwo.length;
  var v67 = v499 + v500;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v501 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v501 != -1;
  if(v69) {
    var v502 = stringToReturn$$1 + '"';
    var v68 = v502 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v503 = stringToReturn$$1 + ' starting "';
  var v504 = sequenceTwo.substring(0, 10);
  var v70 = v503 + v504;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v505 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v505;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v950 = arrayOfPatterns$$3[j$$2]
    }
    var v803 = v950.match(/\/.+\//);
    var v506 = v803 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1265 = eval("introspect(JAMScript.introspectors.processAll) { " + v506 + " }")
    }else {
      var v1265 = JAMScript.call(eval, null, [v506])
    }
    v73[v74] = v1265;
    j$$2 = j$$2 + 1;
    var v507 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v507
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v508 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v508;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v804 = arrayOfPatterns$$4[j$$3]
    }
    var v509 = v804.match(/=[a-zA-Z\*]/);
    var v1266 = v509.toString();
    v77[v78] = v1266;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v510 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1267 = v510.replace(/=/g, "");
    v79[v80] = v1267;
    j$$3 = j$$3 + 1;
    var v511 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v511
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v512 = sequence$$3.length;
  var v82 = "Results for " + v512;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v513 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v513 != -1;
  if(v84) {
    var v514 = stringToReturn$$2 + '"';
    var v83 = v514 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v515 = stringToReturn$$2 + ' starting "';
  var v516 = sequence$$3.substring(0, 10);
  var v85 = v515 + v516;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v805 = "Results for " + topology;
  var v517 = v805 + " ";
  var v518 = sequence$$4.length;
  var v87 = v517 + v518;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v519 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v519 != -1;
  if(v89) {
    var v520 = stringToReturn$$3 + '"';
    var v88 = v520 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v521 = stringToReturn$$3 + ' starting "';
  var v522 = sequence$$4.substring(0, 10);
  var v90 = v521 + v522;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v523 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v523;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v524 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v524 != -1;
  if(v94) {
    var v525 = stringToReturn$$4 + '"';
    var v93 = v525 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v526 = stringToReturn$$4 + ' starting "';
  var v527 = sequenceOne$$1.substring(0, 10);
  var v95 = v526 + v527;
  stringToReturn$$4 = v95 + '"\n';
  var v528 = stringToReturn$$4 + "and ";
  var v529 = sequenceTwo$$1.length;
  var v96 = v528 + v529;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v530 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v530 != -1;
  if(v98) {
    var v531 = stringToReturn$$4 + '"';
    var v97 = v531 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v532 = stringToReturn$$4 + ' starting "';
  var v533 = sequenceTwo$$1.substring(0, 10);
  var v99 = v532 + v533;
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
    var v534 = Math.random();
    var v535 = components.length;
    var v101 = v534 * v535;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v536 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v536 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v537 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v537 != -1;
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
  var v806 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v538 = v806 != -1;
  var v808 = !v538;
  if(v808) {
    var v951 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v807 = v951 != -1;
    var v953 = !v807;
    if(v953) {
      var v1042 = expressionToCheck.search(/\[\]/);
      var v952 = v1042 != -1;
      var v1044 = !v952;
      if(v1044) {
        var v1096 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v1043 = v1096 != -1;
        var v1098 = !v1043;
        if(v1098) {
          var v1117 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1097 = v1117 != -1;
          var v1119 = !v1097;
          if(v1119) {
            var v1134 = expressionToCheck.search(/\|\|/);
            var v1118 = v1134 != -1;
            var v1136 = !v1118;
            if(v1136) {
              var v1154 = expressionToCheck.search(/\/\|/);
              var v1135 = v1154 != -1;
              var v1156 = !v1135;
              if(v1156) {
                var v1172 = expressionToCheck.search(/\|\//);
                var v1155 = v1172 != -1;
                var v1174 = !v1155;
                if(v1174) {
                  var v1188 = expressionToCheck.search(/\[.\]/);
                  var v1173 = v1188 != -1;
                  var v1190 = !v1173;
                  if(v1190) {
                    var v1198 = expressionToCheck.search(/\</);
                    var v1189 = v1198 != -1;
                    var v1200 = !v1189;
                    if(v1200) {
                      var v1199 = expressionToCheck.search(/\>/);
                      v1189 = v1199 != -1
                    }
                    v1173 = v1189
                  }
                  v1155 = v1173
                }
                v1135 = v1155
              }
              v1118 = v1135
            }
            v1097 = v1118
          }
          v1043 = v1097
        }
        v952 = v1043
      }
      v807 = v952
    }
    v538 = v807
  }
  var v106 = v538;
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
    var v1299 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1299[2], v1299[1], v1299[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v954 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v809 = v954 + "<head>\n";
  var v539 = v809 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v539 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v1228 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1218 = v1228 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1208 = v1218 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1201 = v1208 + "div.info {font-weight: bold}\n";
    var v1191 = v1201 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1175 = v1191 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1157 = v1175 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1137 = v1157 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1120 = v1137 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1099 = v1120 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1045 = v1099 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v955 = v1045 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v810 = v955 + "td.many {color: #000000}\n";
    var v540 = v810 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v540 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v1238 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1229 = v1238 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1219 = v1229 + "div.title {display: none}\n";
    var v1209 = v1219 + "div.info {font-weight: bold}\n";
    var v1202 = v1209 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1192 = v1202 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1176 = v1192 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1158 = v1176 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1138 = v1158 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1121 = v1138 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1100 = v1121 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1046 = v1100 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v956 = v1046 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v811 = v956 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v541 = v811 + "img {display: none}\n";
    var v116 = v541 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v957 = "</head>\n" + '<body class="main">\n';
  var v812 = v957 + '<div class="title">';
  var v542 = v812 + title$$6;
  var v118 = v542 + " results</div>\n";
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
    var v1300 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1300[2], v1300[1], v1300[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v958 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v813 = v958 + "<head>\n";
  var v543 = v813 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v543 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v1230 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1220 = v1230 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1210 = v1220 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1203 = v1210 + "div.info {font-weight: bold}\n";
    var v1193 = v1203 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1177 = v1193 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1159 = v1177 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1139 = v1159 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1122 = v1139 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1101 = v1122 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1047 = v1101 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v959 = v1047 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v814 = v959 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v544 = v814 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v544 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v1243 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1239 = v1243 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1231 = v1239 + "div.title {display: none}\n";
    var v1221 = v1231 + "div.info {font-weight: bold}\n";
    var v1211 = v1221 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1204 = v1211 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1194 = v1204 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1178 = v1194 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1160 = v1178 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1140 = v1160 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1123 = v1140 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1102 = v1123 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1048 = v1102 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v960 = v1048 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v815 = v960 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v545 = v815 + "img {display: none}\n";
    var v124 = v545 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v961 = "</head>\n" + '<body class="main">\n';
  var v816 = v961 + '<div class="title">';
  var v546 = v816 + title$$8;
  var v126 = v546 + " results</div>\n";
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
  var v547 = dnaSequence$$1.search(/./);
  var v127 = v547 != -1;
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
  var v548 = testArray[0];
  var v131 = v548 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v549 = testString.search(re$$2);
  var v132 = v549 == -1;
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
  var v550 = testNum.toFixed(3);
  var v135 = v550 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v551 = testNum.toPrecision(5);
  var v136 = v551 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v552 = theNumber$$1.search(/\d/);
  var v137 = v552 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v817 = emblFile.search(/ID/);
  var v553 = v817 == -1;
  var v819 = !v553;
  if(v819) {
    var v962 = emblFile.search(/AC/);
    var v818 = v962 == -1;
    var v964 = !v818;
    if(v964) {
      var v1049 = emblFile.search(/DE/);
      var v963 = v1049 == -1;
      var v1051 = !v963;
      if(v1051) {
        var v1050 = emblFile.search(/SQ/);
        v963 = v1050 == -1
      }
      v818 = v963
    }
    v553 = v818
  }
  var v138 = v553;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v554 = theNumber$$2.search(/\d/);
  var v139 = v554 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v555 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v555 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v556 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v556 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v557 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v557 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v820 = genBankFile.search(/LOCUS/);
  var v558 = v820 == -1;
  var v822 = !v558;
  if(v822) {
    var v965 = genBankFile.search(/DEFINITION/);
    var v821 = v965 == -1;
    var v967 = !v821;
    if(v967) {
      var v1052 = genBankFile.search(/ACCESSION/);
      var v966 = v1052 == -1;
      var v1054 = !v966;
      if(v1054) {
        var v1053 = genBankFile.search(/ORIGIN/);
        v966 = v1053 == -1
      }
      v821 = v966
    }
    v558 = v821
  }
  var v144 = v558;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v823 = genBankFile$$1.search(/LOCUS/);
  var v559 = v823 == -1;
  var v825 = !v559;
  if(v825) {
    var v968 = genBankFile$$1.search(/DEFINITION/);
    var v824 = v968 == -1;
    var v970 = !v824;
    if(v970) {
      var v1055 = genBankFile$$1.search(/ACCESSION/);
      var v969 = v1055 == -1;
      var v1057 = !v969;
      if(v1057) {
        var v1056 = genBankFile$$1.search(/ORIGIN/);
        v969 = v1056 == -1
      }
      v824 = v969
    }
    v559 = v824
  }
  var v145 = v559;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v560 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v560 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v826 = emblFile$$1.search(/ID/);
  var v561 = v826 == -1;
  var v828 = !v561;
  if(v828) {
    var v971 = emblFile$$1.search(/AC/);
    var v827 = v971 == -1;
    var v973 = !v827;
    if(v973) {
      var v1058 = emblFile$$1.search(/DE/);
      var v972 = v1058 == -1;
      var v1060 = !v972;
      if(v1060) {
        var v1059 = emblFile$$1.search(/SQ/);
        v972 = v1059 == -1
      }
      v827 = v972
    }
    v561 = v827
  }
  var v147 = v561;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v562 = emblFile$$1.search(/^FT/m);
  var v148 = v562 == -1;
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
    var v563 = basePerLine / groupSize;
    var v152 = j$$6 <= v563;
    for(;v152;) {
      var v151 = k < groupSize;
      for(;v151;) {
        var v564 = k + i$$5;
        var v150 = text$$10.charAt(v564);
        lineOfText = lineOfText + v150;
        k = k + 1;
        v151 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v565 = basePerLine / groupSize;
      v152 = j$$6 <= v565
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
    var v566 = adjustment < 0;
    if(v566) {
      v566 = adjusted >= 0
    }
    var v156 = v566;
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
    var v567 = basePerLine$$2 / groupSize$$2;
    var v163 = j$$7 <= v567;
    for(;v163;) {
      var v159 = k$$1 < groupSize$$2;
      for(;v159;) {
        var v568 = i$$6 + k$$1;
        var v157 = v568 >= stopBase$$2;
        if(v157) {
          break
        }
        var v569 = k$$1 + i$$6;
        var v158 = text$$12.charAt(v569);
        lineOfText$$1 = lineOfText$$1 + v158;
        k$$1 = k$$1 + 1;
        v159 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v161 = numberPosition$$1 == "above";
      if(v161) {
        var v570 = adjustNumbering(i$$6, numberingAdjustment);
        var v160 = rightNum(v570, "", groupSize$$2, tabIn$$3);
        aboveNum = aboveNum + v160
      }
      var v162 = i$$6 >= stopBase$$2;
      if(v162) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v571 = basePerLine$$2 / groupSize$$2;
      v163 = j$$7 <= v571
    }
    var v186 = numberPosition$$1 == "left";
    if(v186) {
      var v164 = outputWindow.document;
      var v974 = adjustNumbering(lineNum, numberingAdjustment);
      var v829 = rightNum(v974, "", 8, tabIn$$3);
      var v572 = v829 + lineOfText$$1;
      var v165 = v572 + "\n";
      JAMScript.call(v164.write, v164, [v165]);
      var v169 = strands$$1 == "two";
      if(v169) {
        var v166 = outputWindow.document;
        var v975 = adjustNumbering(lineNum, numberingAdjustment);
        var v830 = rightNum(v975, "", 8, tabIn$$3);
        var v831 = complement(lineOfText$$1);
        var v573 = v830 + v831;
        var v167 = v573 + "\n";
        JAMScript.call(v166.write, v166, [v167]);
        var v168 = outputWindow.document;
        JAMScript.call(v168.write, v168, ["\n"])
      }
    }else {
      var v185 = numberPosition$$1 == "right";
      if(v185) {
        var v170 = outputWindow.document;
        var v832 = adjustNumbering(i$$6, numberingAdjustment);
        var v574 = lineOfText$$1 + v832;
        var v171 = v574 + "\n";
        JAMScript.call(v170.write, v170, [v171]);
        var v175 = strands$$1 == "two";
        if(v175) {
          var v172 = outputWindow.document;
          var v833 = complement(lineOfText$$1);
          var v834 = adjustNumbering(i$$6, numberingAdjustment);
          var v575 = v833 + v834;
          var v173 = v575 + "\n";
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
            var v576 = complement(lineOfText$$1);
            var v181 = v576 + "\n";
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
    var v577 = basePerLine$$3 / groupSize$$3;
    var v194 = j$$8 <= v577;
    for(;v194;) {
      var v190 = k$$2 < groupSize$$3;
      for(;v190;) {
        var v578 = i$$7 + k$$2;
        var v188 = v578 >= stopBase$$3;
        if(v188) {
          break
        }
        var v579 = k$$2 + i$$7;
        var v189 = text$$13.charAt(v579);
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
      var v580 = basePerLine$$3 / groupSize$$3;
      v194 = j$$8 <= v580
    }
    var v205 = numberPosition$$2 == "left";
    if(v205) {
      var v195 = outputWindow.document;
      var v835 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v581 = v835 + lineOfText$$2;
      var v196 = v581 + "\n";
      JAMScript.call(v195.write, v195, [v196])
    }else {
      var v204 = numberPosition$$2 == "right";
      if(v204) {
        var v197 = outputWindow.document;
        var v582 = lineOfText$$2 + i$$7;
        var v198 = v582 + "\n";
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
  var v836 = sequence$$13.length;
  var v583 = v836 <= firstIndexToMutate;
  var v838 = !v583;
  if(v838) {
    var v837 = lastIndexToMutate < 0;
    var v976 = !v837;
    if(v976) {
      v837 = lastIndexToMutate <= firstIndexToMutate
    }
    v583 = v837
  }
  var v207 = v583;
  if(v207) {
    numMut = 0
  }
  var i$$8 = 0;
  var v215 = i$$8 < numMut;
  for(;v215;) {
    maxNum = sequence$$13.length;
    var v584 = Math.random();
    var v208 = v584 * maxNum;
    randNum = Math.floor(v208);
    var v585 = randNum < firstIndexToMutate;
    var v839 = !v585;
    if(v839) {
      v585 = randNum > lastIndexToMutate
    }
    var v209 = v585;
    if(v209) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v215 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v586 = Math.random();
      var v587 = components$$1.length;
      var v210 = v586 * v587;
      componentsIndex = Math.round(v210);
      var v588 = components$$1.length;
      var v211 = componentsIndex == v588;
      if(v211) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v589 = components$$1[componentsIndex]
      }
      var v212 = v589 != currentChar;
      if(v212) {
        needNewChar = false
      }
    }
    var v590 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v591 = components$$1[componentsIndex]
    }
    var v213 = v590 + v591;
    var v592 = randNum + 1;
    var v593 = sequence$$13.length;
    var v214 = sequence$$13.substring(v592, v593);
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
    var v594 = Math.random();
    var v595 = components$$2.length;
    var v218 = v594 * v595;
    tempNum$$1 = Math.floor(v218);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v596 = sequence$$14.length;
    var v221 = v596 == 60;
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
    var v977 = sequence$$15.length;
    var v840 = v977 - lookAhead;
    var v841 = sequence$$15.length;
    var v597 = sequence$$15.substring(v840, v841);
    var v226 = v597 + sequence$$15;
    var v227 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v226 + v227;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v229 = outputWindow.document;
  JAMScript.call(v229.write, v229, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v230 = outputWindow.document;
  var v978 = '<tr><td class="title" width="200px">' + "Site:";
  var v842 = v978 + '</td><td class="title">';
  var v598 = v842 + "Positions:";
  var v231 = v598 + "</td></tr>\n";
  JAMScript.call(v230.write, v230, [v231]);
  var i$$9 = 0;
  var v599 = arrayOfItems.length;
  var v247 = i$$9 < v599;
  for(;v247;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v600 = arrayOfItems[i$$9]
    }
    var v232 = v600.match(/\/.+\//);
    matchExp = v232 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v979 = arrayOfItems[i$$9]
    }
    var v843 = v979.match(/\)\D*\d+/);
    var v601 = v843.toString();
    var v233 = v601.replace(/\)\D*/, "");
    cutDistance = parseFloat(v233);
    var v239 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v239;) {
      var v234 = matchExp.lastIndex;
      matchPosition = v234 - cutDistance;
      var v602 = matchPosition >= lowerLimit;
      if(v602) {
        v602 = matchPosition < upperLimit
      }
      var v237 = v602;
      if(v237) {
        timesFound = timesFound + 1;
        var v235 = tempString$$1 + ", ";
        var v603 = matchPosition - shiftValue;
        var v236 = v603 + 1;
        tempString$$1 = v235 + v236
      }
      var v238 = matchExp;
      var v844 = matchExp.lastIndex;
      var v980 = RegExp.lastMatch;
      var v845 = v980.length;
      var v604 = v844 - v845;
      v238.lastIndex = v604 + 1;
      v239 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v605 = tempString$$1.search(/\d/);
    var v240 = v605 != -1;
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
    var v1141 = '<tr><td class="' + backGroundClass;
    var v1124 = v1141 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1179 = arrayOfItems[i$$9]
    }
    var v1161 = v1179.match(/\([^\(]+\)/);
    var v1142 = v1161.toString();
    var v1125 = v1142.replace(/\(|\)/g, "");
    var v1103 = v1124 + v1125;
    var v1061 = v1103 + '</td><td class="';
    var v981 = v1061 + backGroundClass;
    var v846 = v981 + '">';
    var v606 = v846 + tempString$$1;
    var v246 = v606 + "</td></tr>\n";
    JAMScript.call(v245.write, v245, [v246]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v607 = arrayOfItems.length;
    v247 = i$$9 < v607
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
  var v1104 = '<tr><td class="title">' + "Pattern:";
  var v1062 = v1104 + '</td><td class="title">';
  var v982 = v1062 + "Times found:";
  var v847 = v982 + '</td><td class="title">';
  var v608 = v847 + "Percentage:";
  var v251 = v608 + "</td></tr>\n";
  JAMScript.call(v250.write, v250, [v251]);
  var i$$10 = 0;
  var v609 = arrayOfItems$$1.length;
  var v260 = i$$10 < v609;
  for(;v260;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v610 = arrayOfItems$$1[i$$10]
    }
    var v252 = v610.match(/\/[^\/]+\//);
    var matchExp$$1 = v252 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v611 = sequence$$16.search(matchExp$$1);
    var v254 = v611 != -1;
    if(v254) {
      var v253 = sequence$$16.match(matchExp$$1);
      tempNumber = v253.length
    }
    var percentage = 0;
    var v848 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1063 = arrayOfItems$$1[i$$10]
    }
    var v983 = v1063.match(/\d+/);
    var v849 = parseFloat(v983);
    var v612 = v848 - v849;
    var v257 = v612 > 0;
    if(v257) {
      var v255 = 100 * tempNumber;
      var v613 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v984 = arrayOfItems$$1[i$$10]
      }
      var v850 = v984.match(/\d+/);
      var v614 = parseFloat(v850);
      var v256 = v613 - v614;
      percentage = v255 / v256
    }
    var v258 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1180 = arrayOfItems$$1[i$$10]
    }
    var v1162 = v1180.match(/\([^\(]+\)\b/);
    var v1143 = v1162.toString();
    var v1126 = v1143.replace(/\(|\)/g, "");
    var v1105 = "<tr><td>" + v1126;
    var v1064 = v1105 + "</td><td>";
    var v985 = v1064 + tempNumber;
    var v851 = v985 + "</td><td>";
    var v852 = percentage.toFixed(2);
    var v615 = v851 + v852;
    var v259 = v615 + "</td></tr>\n";
    JAMScript.call(v258.write, v258, [v259]);
    i$$10 = i$$10 + 1;
    var v616 = arrayOfItems$$1.length;
    v260 = i$$10 < v616
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
  var v617 = sequence$$17.length;
  var v268 = v617 > 0;
  for(;v268;) {
    maxNum$$1 = sequence$$17.length;
    var v618 = Math.random();
    var v262 = v618 * maxNum$$1;
    randNum$$1 = Math.floor(v262);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v263 = randNum$$1 + 1;
    var v264 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v263, v264);
    sequence$$17 = tempString1 + tempString2;
    var v619 = tempSeq.length;
    var v267 = v619 == 60;
    if(v267) {
      var v265 = outputWindow.document;
      var v266 = tempSeq + "\n";
      JAMScript.call(v265.write, v265, [v266]);
      tempSeq = ""
    }
    var v620 = sequence$$17.length;
    v268 = v620 > 0
  }
  var v269 = outputWindow.document;
  var v270 = tempSeq + "\n";
  JAMScript.call(v269.write, v269, [v270]);
  return true
}
function multiRevTrans(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 2E4;
  var codonTable$$1;
  var alignArray$$1 = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var v621 = testScript();
  var v271 = v621 == false;
  if(v271) {
    return false
  }
  var v1127 = theDocument.forms;
  var v1106 = v1127[0];
  var v1065 = v1106.elements;
  var v986 = v1065[0];
  var v853 = checkFormElement(v986);
  var v622 = v853 == false;
  var v855 = !v622;
  if(v855) {
    var v1163 = theDocument.forms;
    var v1144 = v1163[0];
    var v1128 = v1144.elements;
    var v1107 = v1128[0];
    var v1066 = v1107.value;
    var v987 = checkTextLength(v1066, maxInput$$3);
    var v854 = v987 == false;
    var v989 = !v854;
    if(v989) {
      var v1164 = theDocument.forms;
      var v1145 = v1164[0];
      var v1129 = v1145.elements;
      var v1108 = v1129[4];
      var v1067 = v1108.value;
      var v988 = checkCodonTable(v1067);
      v854 = v988 == false
    }
    v622 = v854
  }
  var v272 = v622;
  if(v272) {
    return false
  }
  var v1068 = theDocument.forms;
  var v990 = v1068[0];
  var v856 = v990.elements;
  var v623 = v856[0];
  var v273 = v623.value;
  theAlignment = "X" + v273;
  alignArray$$1 = theAlignment.split(/[>%#]/);
  var v624 = earlyCheckAlign(alignArray$$1);
  var v274 = v624 == false;
  if(v274) {
    return false
  }
  var i$$11 = 1;
  var v625 = alignArray$$1.length;
  var v289 = i$$11 < v625;
  for(;v289;) {
    var v275 = titleArray;
    var v276 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v626 = alignArray$$1[i$$11]
    }
    var v1268 = v626.match(/[^\f\n\r]+[\f\n\r]/);
    v275[v276] = v1268;
    var v277 = titleArray;
    var v278 = i$$11 - 1;
    var v1069 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v991 = titleArray[v1069]
    }
    var v857 = v991.toString();
    var v627 = filterFastaTitle(v857);
    var v1269 = v627.replace(/[\f\n\r]/g, "");
    v277[v278] = v1269;
    var v279 = titleArray;
    var v280 = i$$11 - 1;
    var v858 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v628 = titleArray[v858]
    }
    var v1270 = v628.substring(0, 20);
    v279[v280] = v1270;
    var v284 = i$$11 == 1;
    if(v284) {
      var v629 = i$$11 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v281 = titleArray[v629]
      }
      longestTitle = v281.length
    }else {
      var v992 = i$$11 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v859 = titleArray[v992]
      }
      var v630 = v859.length;
      var v283 = v630 > longestTitle;
      if(v283) {
        var v631 = i$$11 - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v282 = titleArray[v631]
        }
        longestTitle = v282.length
      }
    }
    var v285 = sequenceArray$$1;
    var v286 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v632 = alignArray$$1[i$$11]
    }
    var v1271 = v632.replace(/[^\f\n\r]+[\f\n\r]/, "");
    v285[v286] = v1271;
    var v287 = sequenceArray$$1;
    var v288 = i$$11 - 1;
    var v860 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v633 = sequenceArray$$1[v860]
    }
    var v1272 = filterAlignSeq(v633);
    v287[v288] = v1272;
    i$$11 = i$$11 + 1;
    var v634 = alignArray$$1.length;
    v289 = i$$11 < v634
  }
  var v1070 = theDocument.forms;
  var v993 = v1070[0];
  var v861 = v993.elements;
  var v635 = v861[4];
  var v290 = v635.value;
  codonTable$$1 = makeCodonTable(v290);
  var v291 = codonTable$$1 == false;
  if(v291) {
    return false
  }
  openWindow("Multi Rev Trans");
  i$$11 = 0;
  var v636 = titleArray.length;
  var v296 = i$$11 < v636;
  for(;v296;) {
    var v292 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v637 = titleArray[i$$11]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v638 = sequenceArray$$1[i$$11]
    }
    var v293 = getInfoFromTitleAndSequence(v637, v638);
    JAMScript.call(v292.write, v292, [v293]);
    var v862 = titleArray.length;
    var v639 = v862 - 1;
    var v295 = i$$11 < v639;
    if(v295) {
      var v294 = outputWindow.document;
      JAMScript.call(v294.write, v294, ['<div class="info">Combined with:</div>\n'])
    }
    i$$11 = i$$11 + 1;
    var v640 = titleArray.length;
    v296 = i$$11 < v640
  }
  openPre();
  writeConsensusSeq(sequenceArray$$1, codonTable$$1);
  var v297 = outputWindow.document;
  JAMScript.call(v297.write, v297, ["\n"]);
  writeMultiRevTrans(sequenceArray$$1, codonTable$$1);
  closePre();
  closeWindow();
  return true
}
function writeConsensusSeq(sequenceArray$$2, codonTable$$2) {
  var consensusSeq = new Array;
  var aminoAcid;
  var firstG;
  var firstA;
  var firstT;
  var firstC;
  var secondG;
  var secondA;
  var secondT;
  var secondC;
  var thirdG;
  var thirdA;
  var thirdT;
  var thirdC;
  var i$$12 = 0;
  var v863 = sequenceArray$$2[0];
  var v641 = v863.length;
  var v317 = i$$12 < v641;
  for(;v317;) {
    firstG = 0;
    firstA = 0;
    firstT = 0;
    firstC = 0;
    secondG = 0;
    secondA = 0;
    secondT = 0;
    secondC = 0;
    thirdG = 0;
    thirdA = 0;
    thirdT = 0;
    thirdC = 0;
    var j$$10 = 0;
    var v642 = sequenceArray$$2.length;
    var v313 = j$$10 < v642;
    for(;v313;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v994 = sequenceArray$$2[j$$10]
      }
      var v864 = v994.charAt(i$$12);
      var v643 = v864 == "-";
      var v866 = !v643;
      if(v866) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v995 = sequenceArray$$2[j$$10]
        }
        var v865 = v995.charAt(i$$12);
        v643 = v865 == "."
      }
      var v312 = v643;
      if(v312) {
        firstG = firstG + 0.25;
        firstA = firstA + 0.25;
        firstT = firstT + 0.25;
        firstC = firstC + 0.25;
        secondG = secondG + 0.25;
        secondA = secondA + 0.25;
        secondT = secondT + 0.25;
        secondC = secondC + 0.25;
        thirdG = thirdG + 0.25;
        thirdA = thirdA + 0.25;
        thirdT = thirdT + 0.25;
        thirdC = thirdC + 0.25
      }else {
        try {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v996 = sequenceArray$$2[j$$10]
          }
          var v867 = v996.charAt(i$$12);
          var v644 = v867.toString();
          var v298 = v644.toLowerCase();
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            aminoAcid = codonTable$$2[v298]
          }
        }catch(e$$5) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v868 = sequenceArray$$2[j$$10]
          }
          var v645 = v868.charAt(i$$12);
          var v299 = "A codon table entry wasn't found for " + v645;
          alert(v299);
          return false
        }
        var v646 = aminoAcid.baseFreqPosOne;
        var v300 = v646[0];
        firstG = firstG + v300;
        var v647 = aminoAcid.baseFreqPosOne;
        var v301 = v647[1];
        firstA = firstA + v301;
        var v648 = aminoAcid.baseFreqPosOne;
        var v302 = v648[2];
        firstT = firstT + v302;
        var v649 = aminoAcid.baseFreqPosOne;
        var v303 = v649[3];
        firstC = firstC + v303;
        var v650 = aminoAcid.baseFreqPosTwo;
        var v304 = v650[0];
        secondG = secondG + v304;
        var v651 = aminoAcid.baseFreqPosTwo;
        var v305 = v651[1];
        secondA = secondA + v305;
        var v652 = aminoAcid.baseFreqPosTwo;
        var v306 = v652[2];
        secondT = secondT + v306;
        var v653 = aminoAcid.baseFreqPosTwo;
        var v307 = v653[3];
        secondC = secondC + v307;
        var v654 = aminoAcid.baseFreqPosThree;
        var v308 = v654[0];
        thirdG = thirdG + v308;
        var v655 = aminoAcid.baseFreqPosThree;
        var v309 = v655[1];
        thirdA = thirdA + v309;
        var v656 = aminoAcid.baseFreqPosThree;
        var v310 = v656[2];
        thirdT = thirdT + v310;
        var v657 = aminoAcid.baseFreqPosThree;
        var v311 = v657[3];
        thirdC = thirdC + v311
      }
      j$$10 = j$$10 + 1;
      var v658 = sequenceArray$$2.length;
      v313 = j$$10 < v658
    }
    var v659 = [firstG, firstA, firstT, firstC];
    var v314 = _getConsensusBase(v659);
    consensusSeq.push(v314);
    var v660 = [secondG, secondA, secondT, secondC];
    var v315 = _getConsensusBase(v660);
    consensusSeq.push(v315);
    var v661 = [thirdG, thirdA, thirdT, thirdC];
    var v316 = _getConsensusBase(v661);
    consensusSeq.push(v316);
    i$$12 = i$$12 + 1;
    var v869 = sequenceArray$$2[0];
    var v662 = v869.length;
    v317 = i$$12 < v662
  }
  var v318 = outputWindow.document;
  var v870 = "&gt;" + "reverse translation of alignment to a ";
  var v871 = consensusSeq.length;
  var v663 = v870 + v871;
  var v319 = v663 + " base sequence of consensus codons.\n";
  JAMScript.call(v318.write, v318, [v319]);
  var v320 = outputWindow.document;
  var v664 = consensusSeq.join("");
  var v321 = addReturns(v664);
  JAMScript.call(v320.write, v320, [v321]);
  var v322 = outputWindow.document;
  JAMScript.call(v322.write, v322, ["\n"]);
  return true
}
function writeMultiRevTrans(sequenceArray$$3, codonTable$$3) {
  var markG = "gggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg";
  var markA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  var markT = "TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT";
  var markC = "CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC";
  var markLength = markG.length;
  var aminoAcid$$1;
  var columnSeq;
  var firstG$$1;
  var firstA$$1;
  var firstT$$1;
  var firstC$$1;
  var secondG$$1;
  var secondA$$1;
  var secondT$$1;
  var secondC$$1;
  var thirdG$$1;
  var thirdA$$1;
  var thirdT$$1;
  var thirdC$$1;
  var i$$13 = 0;
  var v872 = sequenceArray$$3[0];
  var v665 = v872.length;
  var v365 = i$$13 < v665;
  for(;v365;) {
    columnSeq = "";
    firstG$$1 = 0;
    firstA$$1 = 0;
    firstT$$1 = 0;
    firstC$$1 = 0;
    secondG$$1 = 0;
    secondA$$1 = 0;
    secondT$$1 = 0;
    secondC$$1 = 0;
    thirdG$$1 = 0;
    thirdA$$1 = 0;
    thirdT$$1 = 0;
    thirdC$$1 = 0;
    var j$$11 = 0;
    var v666 = sequenceArray$$3.length;
    var v339 = j$$11 < v666;
    for(;v339;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v667 = sequenceArray$$3[j$$11]
      }
      var v323 = v667.charAt(i$$13);
      columnSeq = columnSeq + v323;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v997 = sequenceArray$$3[j$$11]
      }
      var v873 = v997.charAt(i$$13);
      var v668 = v873 == "-";
      var v875 = !v668;
      if(v875) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v998 = sequenceArray$$3[j$$11]
        }
        var v874 = v998.charAt(i$$13);
        v668 = v874 == "."
      }
      var v338 = v668;
      if(v338) {
        firstG$$1 = firstG$$1 + 0.25;
        firstA$$1 = firstA$$1 + 0.25;
        firstT$$1 = firstT$$1 + 0.25;
        firstC$$1 = firstC$$1 + 0.25;
        secondG$$1 = secondG$$1 + 0.25;
        secondA$$1 = secondA$$1 + 0.25;
        secondT$$1 = secondT$$1 + 0.25;
        secondC$$1 = secondC$$1 + 0.25;
        thirdG$$1 = thirdG$$1 + 0.25;
        thirdA$$1 = thirdA$$1 + 0.25;
        thirdT$$1 = thirdT$$1 + 0.25;
        thirdC$$1 = thirdC$$1 + 0.25
      }else {
        try {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v999 = sequenceArray$$3[j$$11]
          }
          var v876 = v999.charAt(i$$13);
          var v669 = v876.toString();
          var v324 = v669.toLowerCase();
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            aminoAcid$$1 = codonTable$$3[v324]
          }
        }catch(e$$6) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v877 = sequenceArray$$3[j$$11]
          }
          var v670 = v877.charAt(i$$13);
          var v325 = "A codon table entry wasn't found for " + v670;
          alert(v325);
          return false
        }
        var v671 = aminoAcid$$1.baseFreqPosOne;
        var v326 = v671[0];
        firstG$$1 = firstG$$1 + v326;
        var v672 = aminoAcid$$1.baseFreqPosOne;
        var v327 = v672[1];
        firstA$$1 = firstA$$1 + v327;
        var v673 = aminoAcid$$1.baseFreqPosOne;
        var v328 = v673[2];
        firstT$$1 = firstT$$1 + v328;
        var v674 = aminoAcid$$1.baseFreqPosOne;
        var v329 = v674[3];
        firstC$$1 = firstC$$1 + v329;
        var v675 = aminoAcid$$1.baseFreqPosTwo;
        var v330 = v675[0];
        secondG$$1 = secondG$$1 + v330;
        var v676 = aminoAcid$$1.baseFreqPosTwo;
        var v331 = v676[1];
        secondA$$1 = secondA$$1 + v331;
        var v677 = aminoAcid$$1.baseFreqPosTwo;
        var v332 = v677[2];
        secondT$$1 = secondT$$1 + v332;
        var v678 = aminoAcid$$1.baseFreqPosTwo;
        var v333 = v678[3];
        secondC$$1 = secondC$$1 + v333;
        var v679 = aminoAcid$$1.baseFreqPosThree;
        var v334 = v679[0];
        thirdG$$1 = thirdG$$1 + v334;
        var v680 = aminoAcid$$1.baseFreqPosThree;
        var v335 = v680[1];
        thirdA$$1 = thirdA$$1 + v335;
        var v681 = aminoAcid$$1.baseFreqPosThree;
        var v336 = v681[2];
        thirdT$$1 = thirdT$$1 + v336;
        var v682 = aminoAcid$$1.baseFreqPosThree;
        var v337 = v682[3];
        thirdC$$1 = thirdC$$1 + v337
      }
      j$$11 = j$$11 + 1;
      var v683 = sequenceArray$$3.length;
      v339 = j$$11 < v683
    }
    var v684 = markLength * firstG$$1;
    var v685 = sequenceArray$$3.length;
    var v340 = v684 / v685;
    firstG$$1 = Math.round(v340);
    var v686 = markLength * firstA$$1;
    var v687 = sequenceArray$$3.length;
    var v341 = v686 / v687;
    firstA$$1 = Math.round(v341);
    var v688 = markLength * firstT$$1;
    var v689 = sequenceArray$$3.length;
    var v342 = v688 / v689;
    firstT$$1 = Math.round(v342);
    var v690 = markLength * firstC$$1;
    var v691 = sequenceArray$$3.length;
    var v343 = v690 / v691;
    firstC$$1 = Math.round(v343);
    var v692 = markLength * secondG$$1;
    var v693 = sequenceArray$$3.length;
    var v344 = v692 / v693;
    secondG$$1 = Math.round(v344);
    var v694 = markLength * secondA$$1;
    var v695 = sequenceArray$$3.length;
    var v345 = v694 / v695;
    secondA$$1 = Math.round(v345);
    var v696 = markLength * secondT$$1;
    var v697 = sequenceArray$$3.length;
    var v346 = v696 / v697;
    secondT$$1 = Math.round(v346);
    var v698 = markLength * secondC$$1;
    var v699 = sequenceArray$$3.length;
    var v347 = v698 / v699;
    secondC$$1 = Math.round(v347);
    var v700 = markLength * thirdG$$1;
    var v701 = sequenceArray$$3.length;
    var v348 = v700 / v701;
    thirdG$$1 = Math.round(v348);
    var v702 = markLength * thirdA$$1;
    var v703 = sequenceArray$$3.length;
    var v349 = v702 / v703;
    thirdA$$1 = Math.round(v349);
    var v704 = markLength * thirdT$$1;
    var v705 = sequenceArray$$3.length;
    var v350 = v704 / v705;
    thirdT$$1 = Math.round(v350);
    var v706 = markLength * thirdC$$1;
    var v707 = sequenceArray$$3.length;
    var v351 = v706 / v707;
    thirdC$$1 = Math.round(v351);
    var v352 = outputWindow.document;
    var v1109 = i$$13 + 1;
    var v1071 = "<b>" + v1109;
    var v1000 = v1071 + "_";
    var v878 = v1000 + columnSeq;
    var v708 = v878 + "_";
    var v353 = v708 + "first</b>\n";
    JAMScript.call(v352.write, v352, [v353]);
    var v354 = outputWindow.document;
    var v1259 = markG.substring(0, firstG$$1);
    var v1253 = "g" + v1259;
    var v1247 = v1253 + " ";
    var v1254 = firstG$$1 / markLength;
    var v1248 = v1254.toFixed(2);
    var v1244 = v1247 + v1248;
    var v1240 = v1244 + "\n";
    var v1232 = v1240 + "a";
    var v1233 = markA.substring(0, firstA$$1);
    var v1222 = v1232 + v1233;
    var v1212 = v1222 + " ";
    var v1223 = firstA$$1 / markLength;
    var v1213 = v1223.toFixed(2);
    var v1205 = v1212 + v1213;
    var v1195 = v1205 + "\n";
    var v1181 = v1195 + "T";
    var v1182 = markT.substring(0, firstT$$1);
    var v1165 = v1181 + v1182;
    var v1146 = v1165 + " ";
    var v1166 = firstT$$1 / markLength;
    var v1147 = v1166.toFixed(2);
    var v1130 = v1146 + v1147;
    var v1110 = v1130 + "\n";
    var v1072 = v1110 + "C";
    var v1073 = markC.substring(0, firstC$$1);
    var v1001 = v1072 + v1073;
    var v879 = v1001 + " ";
    var v1002 = firstC$$1 / markLength;
    var v880 = v1002.toFixed(2);
    var v709 = v879 + v880;
    var v355 = v709 + "\n";
    JAMScript.call(v354.write, v354, [v355]);
    var v356 = outputWindow.document;
    var v1111 = i$$13 + 1;
    var v1074 = "<b>" + v1111;
    var v1003 = v1074 + "_";
    var v881 = v1003 + columnSeq;
    var v710 = v881 + "_";
    var v357 = v710 + "second</b>\n";
    JAMScript.call(v356.write, v356, [v357]);
    var v358 = outputWindow.document;
    var v1260 = markG.substring(0, secondG$$1);
    var v1255 = "g" + v1260;
    var v1249 = v1255 + " ";
    var v1256 = secondG$$1 / markLength;
    var v1250 = v1256.toFixed(2);
    var v1245 = v1249 + v1250;
    var v1241 = v1245 + "\n";
    var v1234 = v1241 + "a";
    var v1235 = markA.substring(0, secondA$$1);
    var v1224 = v1234 + v1235;
    var v1214 = v1224 + " ";
    var v1225 = secondA$$1 / markLength;
    var v1215 = v1225.toFixed(2);
    var v1206 = v1214 + v1215;
    var v1196 = v1206 + "\n";
    var v1183 = v1196 + "T";
    var v1184 = markT.substring(0, secondT$$1);
    var v1167 = v1183 + v1184;
    var v1148 = v1167 + " ";
    var v1168 = secondT$$1 / markLength;
    var v1149 = v1168.toFixed(2);
    var v1131 = v1148 + v1149;
    var v1112 = v1131 + "\n";
    var v1075 = v1112 + "C";
    var v1076 = markC.substring(0, secondC$$1);
    var v1004 = v1075 + v1076;
    var v882 = v1004 + " ";
    var v1005 = secondC$$1 / markLength;
    var v883 = v1005.toFixed(2);
    var v711 = v882 + v883;
    var v359 = v711 + "\n";
    JAMScript.call(v358.write, v358, [v359]);
    var v360 = outputWindow.document;
    var v1113 = i$$13 + 1;
    var v1077 = "<b>" + v1113;
    var v1006 = v1077 + "_";
    var v884 = v1006 + columnSeq;
    var v712 = v884 + "_";
    var v361 = v712 + "third</b>\n";
    JAMScript.call(v360.write, v360, [v361]);
    var v362 = outputWindow.document;
    var v1261 = markG.substring(0, thirdG$$1);
    var v1257 = "g" + v1261;
    var v1251 = v1257 + " ";
    var v1258 = thirdG$$1 / markLength;
    var v1252 = v1258.toFixed(2);
    var v1246 = v1251 + v1252;
    var v1242 = v1246 + "\n";
    var v1236 = v1242 + "a";
    var v1237 = markA.substring(0, thirdA$$1);
    var v1226 = v1236 + v1237;
    var v1216 = v1226 + " ";
    var v1227 = thirdA$$1 / markLength;
    var v1217 = v1227.toFixed(2);
    var v1207 = v1216 + v1217;
    var v1197 = v1207 + "\n";
    var v1185 = v1197 + "T";
    var v1186 = markT.substring(0, thirdT$$1);
    var v1169 = v1185 + v1186;
    var v1150 = v1169 + " ";
    var v1170 = thirdT$$1 / markLength;
    var v1151 = v1170.toFixed(2);
    var v1132 = v1150 + v1151;
    var v1114 = v1132 + "\n";
    var v1078 = v1114 + "C";
    var v1079 = markC.substring(0, thirdC$$1);
    var v1007 = v1078 + v1079;
    var v885 = v1007 + " ";
    var v1008 = thirdC$$1 / markLength;
    var v886 = v1008.toFixed(2);
    var v713 = v885 + v886;
    var v363 = v713 + "\n";
    JAMScript.call(v362.write, v362, [v363]);
    var v364 = outputWindow.document;
    JAMScript.call(v364.write, v364, ["\n"]);
    i$$13 = i$$13 + 1;
    var v887 = sequenceArray$$3[0];
    var v714 = v887.length;
    v365 = i$$13 < v714
  }
  return true
}
function makeCodonTable(gcgTable) {
  gcgTable = gcgTable.replace(/[^\.]*\.\./, "");
  var tableArray = gcgTable.split(/[\f\n\r]/);
  var re$$3 = /(\w+)\s+(\w+)\s+(\S+)\s+(\S+)\s+(\S+)/g;
  var matchArray$$2;
  var codonTable$$4 = new CodonTable;
  var i$$14 = 0;
  var v715 = tableArray.length;
  var v370 = i$$14 < v715;
  for(;v370;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v716 = tableArray[i$$14]
    }
    var v369 = matchArray$$2 = re$$3.exec(v716);
    for(;v369;) {
      try {
        var v888 = matchArray$$2[1];
        var v717 = v888.toLowerCase();
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v366 = codonTable$$4[v717]
        }
        var v718 = matchArray$$2[2];
        var v889 = matchArray$$2[3];
        var v719 = parseFloat(v889);
        var v890 = matchArray$$2[4];
        var v720 = parseFloat(v890);
        var v891 = matchArray$$2[5];
        var v721 = parseFloat(v891);
        var v367 = new Codon(v718, v719, v720, v721);
        JAMScript.call(v366.addCodon, v366, [v367])
      }catch(e$$7) {
        var v1187 = matchArray$$2[1];
        var v1171 = "There is a problem with a line of the codon table: " + v1187;
        var v1152 = v1171 + " ";
        var v1153 = matchArray$$2[2];
        var v1133 = v1152 + v1153;
        var v1115 = v1133 + " ";
        var v1116 = matchArray$$2[3];
        var v1080 = v1115 + v1116;
        var v1009 = v1080 + " ";
        var v1010 = matchArray$$2[4];
        var v892 = v1009 + v1010;
        var v722 = v892 + " ";
        var v723 = matchArray$$2[4];
        var v368 = v722 + v723;
        alert(v368);
        return false
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v724 = tableArray[i$$14]
      }
      v369 = matchArray$$2 = re$$3.exec(v724)
    }
    i$$14 = i$$14 + 1;
    var v725 = tableArray.length;
    v370 = i$$14 < v725
  }
  var v371 = codonTable$$4.a;
  JAMScript.call(v371.determineBaseFreq, v371, []);
  var v372 = codonTable$$4.c;
  JAMScript.call(v372.determineBaseFreq, v372, []);
  var v373 = codonTable$$4.d;
  JAMScript.call(v373.determineBaseFreq, v373, []);
  var v374 = codonTable$$4.e;
  JAMScript.call(v374.determineBaseFreq, v374, []);
  var v375 = codonTable$$4.f;
  JAMScript.call(v375.determineBaseFreq, v375, []);
  var v376 = codonTable$$4.g;
  JAMScript.call(v376.determineBaseFreq, v376, []);
  var v377 = codonTable$$4.h;
  JAMScript.call(v377.determineBaseFreq, v377, []);
  var v378 = codonTable$$4.i;
  JAMScript.call(v378.determineBaseFreq, v378, []);
  var v379 = codonTable$$4.k;
  JAMScript.call(v379.determineBaseFreq, v379, []);
  var v380 = codonTable$$4.l;
  JAMScript.call(v380.determineBaseFreq, v380, []);
  var v381 = codonTable$$4.m;
  JAMScript.call(v381.determineBaseFreq, v381, []);
  var v382 = codonTable$$4.n;
  JAMScript.call(v382.determineBaseFreq, v382, []);
  var v383 = codonTable$$4.p;
  JAMScript.call(v383.determineBaseFreq, v383, []);
  var v384 = codonTable$$4.q;
  JAMScript.call(v384.determineBaseFreq, v384, []);
  var v385 = codonTable$$4.r;
  JAMScript.call(v385.determineBaseFreq, v385, []);
  var v386 = codonTable$$4.s;
  JAMScript.call(v386.determineBaseFreq, v386, []);
  var v387 = codonTable$$4.t;
  JAMScript.call(v387.determineBaseFreq, v387, []);
  var v388 = codonTable$$4.v;
  JAMScript.call(v388.determineBaseFreq, v388, []);
  var v389 = codonTable$$4.w;
  JAMScript.call(v389.determineBaseFreq, v389, []);
  var v390 = codonTable$$4.y;
  JAMScript.call(v390.determineBaseFreq, v390, []);
  var v391 = codonTable$$4.z;
  JAMScript.call(v391.determineBaseFreq, v391, []);
  return codonTable$$4
}
function CodonTable() {
  var v1273 = new AminoAcid;
  this.a = v1273;
  var v1274 = new AminoAcid;
  this.c = v1274;
  var v1275 = new AminoAcid;
  this.d = v1275;
  var v1276 = new AminoAcid;
  this.e = v1276;
  var v1277 = new AminoAcid;
  this.f = v1277;
  var v1278 = new AminoAcid;
  this.g = v1278;
  var v1279 = new AminoAcid;
  this.h = v1279;
  var v1280 = new AminoAcid;
  this.i = v1280;
  var v1281 = new AminoAcid;
  this.k = v1281;
  var v1282 = new AminoAcid;
  this.l = v1282;
  var v1283 = new AminoAcid;
  this.m = v1283;
  var v1284 = new AminoAcid;
  this.n = v1284;
  var v1285 = new AminoAcid;
  this.p = v1285;
  var v1286 = new AminoAcid;
  this.q = v1286;
  var v1287 = new AminoAcid;
  this.r = v1287;
  var v1288 = new AminoAcid;
  this.s = v1288;
  var v1289 = new AminoAcid;
  this.t = v1289;
  var v1290 = new AminoAcid;
  this.v = v1290;
  var v1291 = new AminoAcid;
  this.w = v1291;
  var v1292 = new AminoAcid;
  this.y = v1292;
  var v1293 = new AminoAcid;
  this.z = v1293;
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
  return
}
function addCodon(codon$$1) {
  var v392 = this.codons;
  v392.push(codon$$1);
  return
}
function determineBaseFreq() {
  JAMScript.call(this.fixFraction, this, []);
  var i$$15 = 0;
  var v893 = this.codons;
  var v726 = v893.length;
  var v417 = i$$15 < v726;
  for(;v417;) {
    var v1081 = this.codons;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1011 = v1081[i$$15]
    }
    var v894 = v1011.sequence;
    var v727 = v894.charAt(0);
    var v400 = v727 == "g";
    if(v400) {
      var v393 = this.baseFreqPosOne;
      var v895 = this.baseFreqPosOne;
      var v728 = v895[0];
      var v1012 = this.codons;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v896 = v1012[i$$15]
      }
      var v729 = v896.fraction;
      v393[0] = v728 + v729
    }else {
      var v1082 = this.codons;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1013 = v1082[i$$15]
      }
      var v897 = v1013.sequence;
      var v730 = v897.charAt(0);
      var v399 = v730 == "a";
      if(v399) {
        var v394 = this.baseFreqPosOne;
        var v898 = this.baseFreqPosOne;
        var v731 = v898[1];
        var v1014 = this.codons;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v899 = v1014[i$$15]
        }
        var v732 = v899.fraction;
        v394[1] = v731 + v732
      }else {
        var v1083 = this.codons;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1015 = v1083[i$$15]
        }
        var v900 = v1015.sequence;
        var v733 = v900.charAt(0);
        var v398 = v733 == "t";
        if(v398) {
          var v395 = this.baseFreqPosOne;
          var v901 = this.baseFreqPosOne;
          var v734 = v901[2];
          var v1016 = this.codons;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v902 = v1016[i$$15]
          }
          var v735 = v902.fraction;
          v395[2] = v734 + v735
        }else {
          var v1084 = this.codons;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1017 = v1084[i$$15]
          }
          var v903 = v1017.sequence;
          var v736 = v903.charAt(0);
          var v397 = v736 == "c";
          if(v397) {
            var v396 = this.baseFreqPosOne;
            var v904 = this.baseFreqPosOne;
            var v737 = v904[3];
            var v1018 = this.codons;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v905 = v1018[i$$15]
            }
            var v738 = v905.fraction;
            v396[3] = v737 + v738
          }
        }
      }
    }
    var v1085 = this.codons;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1019 = v1085[i$$15]
    }
    var v906 = v1019.sequence;
    var v739 = v906.charAt(1);
    var v408 = v739 == "g";
    if(v408) {
      var v401 = this.baseFreqPosTwo;
      var v907 = this.baseFreqPosTwo;
      var v740 = v907[0];
      var v1020 = this.codons;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v908 = v1020[i$$15]
      }
      var v741 = v908.fraction;
      v401[0] = v740 + v741
    }else {
      var v1086 = this.codons;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1021 = v1086[i$$15]
      }
      var v909 = v1021.sequence;
      var v742 = v909.charAt(1);
      var v407 = v742 == "a";
      if(v407) {
        var v402 = this.baseFreqPosTwo;
        var v910 = this.baseFreqPosTwo;
        var v743 = v910[1];
        var v1022 = this.codons;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v911 = v1022[i$$15]
        }
        var v744 = v911.fraction;
        v402[1] = v743 + v744
      }else {
        var v1087 = this.codons;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1023 = v1087[i$$15]
        }
        var v912 = v1023.sequence;
        var v745 = v912.charAt(1);
        var v406 = v745 == "t";
        if(v406) {
          var v403 = this.baseFreqPosTwo;
          var v913 = this.baseFreqPosTwo;
          var v746 = v913[2];
          var v1024 = this.codons;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v914 = v1024[i$$15]
          }
          var v747 = v914.fraction;
          v403[2] = v746 + v747
        }else {
          var v1088 = this.codons;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1025 = v1088[i$$15]
          }
          var v915 = v1025.sequence;
          var v748 = v915.charAt(1);
          var v405 = v748 == "c";
          if(v405) {
            var v404 = this.baseFreqPosTwo;
            var v916 = this.baseFreqPosTwo;
            var v749 = v916[3];
            var v1026 = this.codons;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v917 = v1026[i$$15]
            }
            var v750 = v917.fraction;
            v404[3] = v749 + v750
          }
        }
      }
    }
    var v1089 = this.codons;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1027 = v1089[i$$15]
    }
    var v918 = v1027.sequence;
    var v751 = v918.charAt(2);
    var v416 = v751 == "g";
    if(v416) {
      var v409 = this.baseFreqPosThree;
      var v919 = this.baseFreqPosThree;
      var v752 = v919[0];
      var v1028 = this.codons;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v920 = v1028[i$$15]
      }
      var v753 = v920.fraction;
      v409[0] = v752 + v753
    }else {
      var v1090 = this.codons;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1029 = v1090[i$$15]
      }
      var v921 = v1029.sequence;
      var v754 = v921.charAt(2);
      var v415 = v754 == "a";
      if(v415) {
        var v410 = this.baseFreqPosThree;
        var v922 = this.baseFreqPosThree;
        var v755 = v922[1];
        var v1030 = this.codons;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v923 = v1030[i$$15]
        }
        var v756 = v923.fraction;
        v410[1] = v755 + v756
      }else {
        var v1091 = this.codons;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1031 = v1091[i$$15]
        }
        var v924 = v1031.sequence;
        var v757 = v924.charAt(2);
        var v414 = v757 == "t";
        if(v414) {
          var v411 = this.baseFreqPosThree;
          var v925 = this.baseFreqPosThree;
          var v758 = v925[2];
          var v1032 = this.codons;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v926 = v1032[i$$15]
          }
          var v759 = v926.fraction;
          v411[2] = v758 + v759
        }else {
          var v1092 = this.codons;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1033 = v1092[i$$15]
          }
          var v927 = v1033.sequence;
          var v760 = v927.charAt(2);
          var v413 = v760 == "c";
          if(v413) {
            var v412 = this.baseFreqPosThree;
            var v928 = this.baseFreqPosThree;
            var v761 = v928[3];
            var v1034 = this.codons;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v929 = v1034[i$$15]
            }
            var v762 = v929.fraction;
            v412[3] = v761 + v762
          }
        }
      }
    }
    i$$15 = i$$15 + 1;
    var v930 = this.codons;
    var v763 = v930.length;
    v417 = i$$15 < v763
  }
  return true
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$16 = 0;
  var v931 = this.codons;
  var v764 = v931.length;
  var v419 = i$$16 < v764;
  for(;v419;) {
    var v932 = this.codons;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v765 = v932[i$$16]
    }
    var v418 = v765.perThou;
    perThouTotal = perThouTotal + v418;
    i$$16 = i$$16 + 1;
    var v933 = this.codons;
    var v766 = v933.length;
    v419 = i$$16 < v766
  }
  var v420 = perThouTotal == 0;
  if(v420) {
    return false
  }
  i$$16 = 0;
  var v934 = this.codons;
  var v767 = v934.length;
  var v422 = i$$16 < v767;
  for(;v422;) {
    var v768 = this.codons;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v421 = v768[i$$16]
    }
    var v1035 = this.codons;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v935 = v1035[i$$16]
    }
    var v769 = v935.perThou;
    v421.fraction = v769 / perThouTotal;
    i$$16 = i$$16 + 1;
    var v936 = this.codons;
    var v770 = v936.length;
    v422 = i$$16 < v770
  }
  return true
}
function AminoAcid() {
  var v1294 = new Array;
  this.codons = v1294;
  var v1295 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1295;
  var v1296 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1296;
  var v1297 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1297;
  return
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1298 = sequence$$18.toLowerCase();
  this.sequence = v1298;
  this.number = number;
  this.perThou = perThou;
  this.fraction = fraction;
  return
}
function _getConsensusBase(baseFreq) {
  var g;
  var a;
  var t;
  var c;
  var v771 = baseFreq[0];
  var v423 = v771 > 0;
  if(v423) {
    g = true
  }
  var v772 = baseFreq[1];
  var v424 = v772 > 0;
  if(v424) {
    a = true
  }
  var v773 = baseFreq[2];
  var v425 = v773 > 0;
  if(v425) {
    t = true
  }
  var v774 = baseFreq[3];
  var v426 = v774 > 0;
  if(v426) {
    c = true
  }
  var v775 = !g;
  if(v775) {
    var v937 = !a;
    if(v937) {
      var v1036 = !c;
      if(v1036) {
        v1036 = !t
      }
      v937 = v1036
    }
    v775 = v937
  }
  var v427 = v775;
  if(v427) {
    return"n"
  }
  var v776 = g;
  if(v776) {
    var v938 = a;
    if(v938) {
      v938 = c && t
    }
    v776 = v938
  }
  var v437 = v776;
  if(v437) {
    return"n"
  }else {
    var v777 = a;
    if(v777) {
      v777 = c && t
    }
    var v436 = v777;
    if(v436) {
      return"h"
    }else {
      var v778 = a;
      if(v778) {
        v778 = g && t
      }
      var v435 = v778;
      if(v435) {
        return"d"
      }else {
        var v779 = c;
        if(v779) {
          v779 = g && t
        }
        var v434 = v779;
        if(v434) {
          return"b"
        }else {
          var v433 = a && c;
          if(v433) {
            return"m"
          }else {
            var v432 = g && t;
            if(v432) {
              return"k"
            }else {
              var v431 = a && t;
              if(v431) {
                return"w"
              }else {
                var v430 = g && c;
                if(v430) {
                  return"s"
                }else {
                  var v429 = c && t;
                  if(v429) {
                    return"y"
                  }else {
                    var v428 = a && g;
                    if(v428) {
                      return"r"
                    }else {
                      if(t) {
                        return"t"
                      }else {
                        if(g) {
                          return"g"
                        }else {
                          if(c) {
                            return"c"
                          }else {
                            if(a) {
                              return"a"
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return"?"
}
new AminoAcid;
var v438 = AminoAcid.prototype;
v438.addCodon = addCodon;
var v439 = AminoAcid.prototype;
v439.determineBaseFreq = determineBaseFreq;
var v440 = AminoAcid.prototype;
v440.fixFraction = fixFraction;
JAMScript.set(document, "onload", v2);
var v441 = document.getElementById("submitbtn");
JAMScript.set(v441, "onclick", v3);
var v442 = document.getElementById("clearbtn");
JAMScript.set(v442, "onclick", v4);

