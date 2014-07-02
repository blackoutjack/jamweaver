function v4() {
  var v949 = document.forms;
  var v790 = v949[0];
  var v451 = v790.elements;
  var v5 = v451[0];
  v5.value = " ";
  var v950 = document.forms;
  var v791 = v950[0];
  var v452 = v791.elements;
  var v6 = v452[4];
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
  var v453 = document.main_form;
  var v8 = v453.main_submit;
  v8.focus();
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
  var v9 = arrayOfSequences[0];
  var lengthOfAlign = v9.length;
  var v454 = arrayOfSequences.length;
  var v10 = v454 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v455 = arrayOfTitles.length;
  var v12 = i$$1 < v455;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v951 = arrayOfTitles[i$$1]
    }
    var v792 = v951.search(/\S/);
    var v456 = v792 == -1;
    var v794 = !v456;
    if(v794) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1046 = arrayOfSequences[i$$1]
      }
      var v952 = v1046.search(/\S/);
      var v793 = v952 == -1;
      var v954 = !v793;
      if(v954) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1047 = arrayOfSequences[i$$1]
        }
        var v953 = v1047.length;
        v793 = v953 != lengthOfAlign
      }
      v456 = v793
    }
    var v11 = v456;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v457 = arrayOfTitles.length;
    v12 = i$$1 < v457
  }
  return true
}
function checkCodonTable(codonTable) {
  var v795 = codonTable.search(/AmAcid/);
  var v458 = v795 == -1;
  var v797 = !v458;
  if(v797) {
    var v955 = codonTable.search(/Codon/);
    var v796 = v955 == -1;
    var v957 = !v796;
    if(v957) {
      var v1048 = codonTable.search(/Number/);
      var v956 = v1048 == -1;
      var v1050 = !v956;
      if(v1050) {
        var v1102 = codonTable.search(/\/1000/);
        var v1049 = v1102 == -1;
        var v1104 = !v1049;
        if(v1104) {
          var v1103 = codonTable.search(/Fraction\s*\.\./);
          v1049 = v1103 == -1
        }
        v956 = v1049
      }
      v796 = v956
    }
    v458 = v796
  }
  var v13 = v458;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v798 = formElement.value;
  var v459 = v798.search(/\S/);
  var v14 = v459 == -1;
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
  var v460 = arrayOfPatterns.length;
  var v17 = z$$2 < v460;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v799 = arrayOfPatterns[z$$2]
    }
    var v461 = v799.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v461 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v800 = arrayOfPatterns[z$$2]
    }
    var v462 = moreExpressionCheck(v800);
    var v16 = v462 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v463 = arrayOfPatterns.length;
    v17 = z$$2 < v463
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v464 = arrayOfPatterns.length;
  var v26 = j < v464;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v958 = arrayOfPatterns[j]
    }
    var v801 = v958.match(/\/.+\//);
    var v465 = v801 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1271 = eval("introspect(JAMScript.introspectors.processAll) { " + v465 + " }")
    }else {
      var v1271 = JAMScript.call(eval, null, [v465])
    }
    v20[v21] = v1271;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v802 = arrayOfPatterns[j]
    }
    var v466 = v802.match(/=[a-zA-Z\*]/);
    var v1272 = v466.toString();
    v22[v23] = v1272;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v467 = geneticCodeMatchResult[j]
    }
    var v1273 = v467.replace(/=/g, "");
    v24[v25] = v1273;
    j = j + 1;
    var v468 = arrayOfPatterns.length;
    v26 = j < v468
  }
  var i$$2 = 0;
  var v803 = testSequence.length;
  var v469 = v803 - 3;
  var v33 = i$$2 <= v469;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v470 = geneticCodeMatchExp.length;
    var v31 = j < v470;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v804 = geneticCodeMatchExp[j]
      }
      var v471 = codon.search(v804);
      var v30 = v471 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v472 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v472 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v473 = geneticCodeMatchExp.length;
      v31 = j < v473
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v805 = testSequence.length;
    var v474 = v805 - 3;
    v33 = i$$2 <= v474
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v475 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v475;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v806 = arrayOfPatterns$$1[z$$3]
    }
    var v476 = v806.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v476 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v477 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v477
  }
  var i$$3 = 0;
  var v478 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v478;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v807 = arrayOfPatterns$$1[i$$3]
    }
    var v479 = "[" + v807;
    var v36 = v479 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v480 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v480;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v808 = arrayOfPatterns$$1[j$$1]
      }
      var v481 = v808.search(re);
      var v37 = v481 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v482 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v482
    }
    i$$3 = i$$3 + 1;
    var v483 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v483
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v484 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v484;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v809 = arrayOfPatterns$$2[z$$4]
    }
    var v485 = v809.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v485 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v810 = arrayOfPatterns$$2[z$$4]
    }
    var v486 = moreExpressionCheck(v810);
    var v41 = v486 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v487 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v487
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v959 = getSequenceFromFasta(text$$7);
  var v811 = v959.replace(/[^A-Za-z]/g, "");
  var v488 = v811.length;
  var v44 = v488 > maxInput;
  if(v44) {
    var v489 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v489 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v490 = text$$8.length;
  var v46 = v490 > maxInput$$1;
  if(v46) {
    var v491 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v491 + " characters.";
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
  var v492 = alignArray.length;
  var v53 = v492 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v493 = alignArray.length;
  var v55 = i$$4 < v493;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v812 = alignArray[i$$4]
    }
    var v494 = v812.search(/[^\s]+\s/);
    var v54 = v494 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v495 = alignArray.length;
    v55 = i$$4 < v495
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
  var v496 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v496 != -1;
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
  var v497 = sequence$$2.length;
  var v59 = "&gt;results for " + v497;
  var stringToReturn = v59 + " residue sequence ";
  var v498 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v498 != -1;
  if(v61) {
    var v499 = stringToReturn + '"';
    var v60 = v499 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v500 = stringToReturn + ' starting "';
  var v501 = sequence$$2.substring(0, 10);
  var v62 = v500 + v501;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v502 = sequenceOne.length;
  var v63 = "Search results for " + v502;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v503 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v503 != -1;
  if(v65) {
    var v504 = stringToReturn$$1 + '"';
    var v64 = v504 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v505 = stringToReturn$$1 + ' starting "';
  var v506 = sequenceOne.substring(0, 10);
  var v66 = v505 + v506;
  stringToReturn$$1 = v66 + '"\n';
  var v507 = stringToReturn$$1 + "and ";
  var v508 = sequenceTwo.length;
  var v67 = v507 + v508;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v509 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v509 != -1;
  if(v69) {
    var v510 = stringToReturn$$1 + '"';
    var v68 = v510 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v511 = stringToReturn$$1 + ' starting "';
  var v512 = sequenceTwo.substring(0, 10);
  var v70 = v511 + v512;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v513 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v513;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v960 = arrayOfPatterns$$3[j$$2]
    }
    var v813 = v960.match(/\/.+\//);
    var v514 = v813 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1274 = eval("introspect(JAMScript.introspectors.processAll) { " + v514 + " }")
    }else {
      var v1274 = JAMScript.call(eval, null, [v514])
    }
    v73[v74] = v1274;
    j$$2 = j$$2 + 1;
    var v515 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v515
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v516 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v516;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v814 = arrayOfPatterns$$4[j$$3]
    }
    var v517 = v814.match(/=[a-zA-Z\*]/);
    var v1275 = v517.toString();
    v77[v78] = v1275;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v518 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1276 = v518.replace(/=/g, "");
    v79[v80] = v1276;
    j$$3 = j$$3 + 1;
    var v519 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v519
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v520 = sequence$$3.length;
  var v82 = "Results for " + v520;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v521 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v521 != -1;
  if(v84) {
    var v522 = stringToReturn$$2 + '"';
    var v83 = v522 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v523 = stringToReturn$$2 + ' starting "';
  var v524 = sequence$$3.substring(0, 10);
  var v85 = v523 + v524;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v815 = "Results for " + topology;
  var v525 = v815 + " ";
  var v526 = sequence$$4.length;
  var v87 = v525 + v526;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v527 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v527 != -1;
  if(v89) {
    var v528 = stringToReturn$$3 + '"';
    var v88 = v528 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v529 = stringToReturn$$3 + ' starting "';
  var v530 = sequence$$4.substring(0, 10);
  var v90 = v529 + v530;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v531 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v531;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v532 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v532 != -1;
  if(v94) {
    var v533 = stringToReturn$$4 + '"';
    var v93 = v533 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v534 = stringToReturn$$4 + ' starting "';
  var v535 = sequenceOne$$1.substring(0, 10);
  var v95 = v534 + v535;
  stringToReturn$$4 = v95 + '"\n';
  var v536 = stringToReturn$$4 + "and ";
  var v537 = sequenceTwo$$1.length;
  var v96 = v536 + v537;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v538 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v538 != -1;
  if(v98) {
    var v539 = stringToReturn$$4 + '"';
    var v97 = v539 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v540 = stringToReturn$$4 + ' starting "';
  var v541 = sequenceTwo$$1.substring(0, 10);
  var v99 = v540 + v541;
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
    var v542 = Math.random();
    var v543 = components.length;
    var v101 = v542 * v543;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v544 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v544 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v545 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v545 != -1;
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
  var v816 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v546 = v816 != -1;
  var v818 = !v546;
  if(v818) {
    var v961 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v817 = v961 != -1;
    var v963 = !v817;
    if(v963) {
      var v1051 = expressionToCheck.search(/\[\]/);
      var v962 = v1051 != -1;
      var v1053 = !v962;
      if(v1053) {
        var v1105 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v1052 = v1105 != -1;
        var v1107 = !v1052;
        if(v1107) {
          var v1126 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1106 = v1126 != -1;
          var v1128 = !v1106;
          if(v1128) {
            var v1143 = expressionToCheck.search(/\|\|/);
            var v1127 = v1143 != -1;
            var v1145 = !v1127;
            if(v1145) {
              var v1163 = expressionToCheck.search(/\/\|/);
              var v1144 = v1163 != -1;
              var v1165 = !v1144;
              if(v1165) {
                var v1181 = expressionToCheck.search(/\|\//);
                var v1164 = v1181 != -1;
                var v1183 = !v1164;
                if(v1183) {
                  var v1197 = expressionToCheck.search(/\[.\]/);
                  var v1182 = v1197 != -1;
                  var v1199 = !v1182;
                  if(v1199) {
                    var v1207 = expressionToCheck.search(/\</);
                    var v1198 = v1207 != -1;
                    var v1209 = !v1198;
                    if(v1209) {
                      var v1208 = expressionToCheck.search(/\>/);
                      v1198 = v1208 != -1
                    }
                    v1182 = v1198
                  }
                  v1164 = v1182
                }
                v1144 = v1164
              }
              v1127 = v1144
            }
            v1106 = v1127
          }
          v1052 = v1106
        }
        v962 = v1052
      }
      v817 = v962
    }
    v546 = v817
  }
  var v106 = v546;
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
    var v1308 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1308[2], v1308[1], v1308[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v964 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v819 = v964 + "<head>\n";
  var v547 = v819 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v547 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v1237 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1227 = v1237 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1217 = v1227 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1210 = v1217 + "div.info {font-weight: bold}\n";
    var v1200 = v1210 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1184 = v1200 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1166 = v1184 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1146 = v1166 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1129 = v1146 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1108 = v1129 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1054 = v1108 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v965 = v1054 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v820 = v965 + "td.many {color: #000000}\n";
    var v548 = v820 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v548 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v1247 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1238 = v1247 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1228 = v1238 + "div.title {display: none}\n";
    var v1218 = v1228 + "div.info {font-weight: bold}\n";
    var v1211 = v1218 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1201 = v1211 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1185 = v1201 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1167 = v1185 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1147 = v1167 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1130 = v1147 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1109 = v1130 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1055 = v1109 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v966 = v1055 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v821 = v966 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v549 = v821 + "img {display: none}\n";
    var v116 = v549 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v967 = "</head>\n" + '<body class="main">\n';
  var v822 = v967 + '<div class="title">';
  var v550 = v822 + title$$6;
  var v118 = v550 + " results</div>\n";
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
    var v1309 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1309[2], v1309[1], v1309[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v968 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v823 = v968 + "<head>\n";
  var v551 = v823 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v551 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v1239 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1229 = v1239 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1219 = v1229 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1212 = v1219 + "div.info {font-weight: bold}\n";
    var v1202 = v1212 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1186 = v1202 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1168 = v1186 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1148 = v1168 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1131 = v1148 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1110 = v1131 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1056 = v1110 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v969 = v1056 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v824 = v969 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v552 = v824 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v552 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v1252 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1248 = v1252 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1240 = v1248 + "div.title {display: none}\n";
    var v1230 = v1240 + "div.info {font-weight: bold}\n";
    var v1220 = v1230 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1213 = v1220 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1203 = v1213 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1187 = v1203 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1169 = v1187 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1149 = v1169 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1132 = v1149 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1111 = v1132 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1057 = v1111 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v970 = v1057 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v825 = v970 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v553 = v825 + "img {display: none}\n";
    var v124 = v553 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v971 = "</head>\n" + '<body class="main">\n';
  var v826 = v971 + '<div class="title">';
  var v554 = v826 + title$$8;
  var v126 = v554 + " results</div>\n";
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
  var v555 = dnaSequence$$1.search(/./);
  var v127 = v555 != -1;
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
  function v1(str$$7, p1$$1, offset$$13, s$$3) {
    return p1$$1 + "X"
  }
  var testArray = new Array;
  var testString = "1234567890";
  testArray.push(testString);
  var v556 = testArray[0];
  var v131 = v556 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v557 = testString.search(re$$2);
  var v132 = v557 == -1;
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
  var v558 = testNum.toFixed(3);
  var v135 = v558 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v559 = testNum.toPrecision(5);
  var v136 = v559 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v560 = theNumber$$1.search(/\d/);
  var v137 = v560 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v827 = emblFile.search(/ID/);
  var v561 = v827 == -1;
  var v829 = !v561;
  if(v829) {
    var v972 = emblFile.search(/AC/);
    var v828 = v972 == -1;
    var v974 = !v828;
    if(v974) {
      var v1058 = emblFile.search(/DE/);
      var v973 = v1058 == -1;
      var v1060 = !v973;
      if(v1060) {
        var v1059 = emblFile.search(/SQ/);
        v973 = v1059 == -1
      }
      v828 = v973
    }
    v561 = v828
  }
  var v138 = v561;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v562 = theNumber$$2.search(/\d/);
  var v139 = v562 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v563 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v563 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v564 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v564 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v565 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v565 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v830 = genBankFile.search(/LOCUS/);
  var v566 = v830 == -1;
  var v832 = !v566;
  if(v832) {
    var v975 = genBankFile.search(/DEFINITION/);
    var v831 = v975 == -1;
    var v977 = !v831;
    if(v977) {
      var v1061 = genBankFile.search(/ACCESSION/);
      var v976 = v1061 == -1;
      var v1063 = !v976;
      if(v1063) {
        var v1062 = genBankFile.search(/ORIGIN/);
        v976 = v1062 == -1
      }
      v831 = v976
    }
    v566 = v831
  }
  var v144 = v566;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v833 = genBankFile$$1.search(/LOCUS/);
  var v567 = v833 == -1;
  var v835 = !v567;
  if(v835) {
    var v978 = genBankFile$$1.search(/DEFINITION/);
    var v834 = v978 == -1;
    var v980 = !v834;
    if(v980) {
      var v1064 = genBankFile$$1.search(/ACCESSION/);
      var v979 = v1064 == -1;
      var v1066 = !v979;
      if(v1066) {
        var v1065 = genBankFile$$1.search(/ORIGIN/);
        v979 = v1065 == -1
      }
      v834 = v979
    }
    v567 = v834
  }
  var v145 = v567;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v568 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v568 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v836 = emblFile$$1.search(/ID/);
  var v569 = v836 == -1;
  var v838 = !v569;
  if(v838) {
    var v981 = emblFile$$1.search(/AC/);
    var v837 = v981 == -1;
    var v983 = !v837;
    if(v983) {
      var v1067 = emblFile$$1.search(/DE/);
      var v982 = v1067 == -1;
      var v1069 = !v982;
      if(v1069) {
        var v1068 = emblFile$$1.search(/SQ/);
        v982 = v1068 == -1
      }
      v837 = v982
    }
    v569 = v837
  }
  var v147 = v569;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v570 = emblFile$$1.search(/^FT/m);
  var v148 = v570 == -1;
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
  var v156 = i$$5 < stopBase;
  for(;v156;) {
    var v149 = i$$5 + 1;
    lineOfText = rightNum(v149, lineOfText, 8, tabIn$$1);
    var j$$6 = 1;
    var v571 = basePerLine / groupSize;
    var v153 = j$$6 <= v571;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v572 = k + i$$5;
        var v151 = text$$10.charAt(v572);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v573 = basePerLine / groupSize;
      v153 = j$$6 <= v573
    }
    var v154 = outputWindow.document;
    var v155 = lineOfText + "\n";
    JAMScript.call(v154.write, v154, [v155]);
    lineOfText = "";
    v156 = i$$5 < stopBase
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
    var v574 = adjustment < 0;
    if(v574) {
      v574 = adjusted >= 0
    }
    var v157 = v574;
    if(v157) {
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
  var v190 = i$$6 < stopBase$$2;
  for(;v190;) {
    lineNum = i$$6 + 1;
    var j$$7 = 1;
    var v575 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v575;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v576 = i$$6 + k$$1;
        var v158 = v576 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v577 = k$$1 + i$$6;
        var v160 = text$$12.charAt(v577);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v578 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v578, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v579 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v579
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v984 = adjustNumbering(lineNum, numberingAdjustment);
      var v839 = rightNum(v984, "", 8, tabIn$$3);
      var v580 = v839 + lineOfText$$1;
      var v168 = v580 + "\n";
      JAMScript.call(v167.write, v167, [v168]);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v985 = adjustNumbering(lineNum, numberingAdjustment);
        var v840 = rightNum(v985, "", 8, tabIn$$3);
        var v841 = complement(lineOfText$$1);
        var v581 = v840 + v841;
        var v170 = v581 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v171 = outputWindow.document;
        JAMScript.call(v171.write, v171, ["\n"])
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v842 = lineOfText$$1;
        var v843 = adjustNumbering(i$$6, numberingAdjustment);
        var v582 = v842 + v843;
        var v174 = v582 + "\n";
        JAMScript.call(v173.write, v173, [v174]);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v844 = complement(lineOfText$$1);
          var v845 = adjustNumbering(i$$6, numberingAdjustment);
          var v583 = v844 + v845;
          var v176 = v583 + "\n";
          JAMScript.call(v175.write, v175, [v176]);
          var v177 = outputWindow.document;
          JAMScript.call(v177.write, v177, ["\n"])
        }
      }else {
        var v187 = numberPosition$$1 == "above";
        if(v187) {
          var v179 = outputWindow.document;
          var v180 = aboveNum + "\n";
          JAMScript.call(v179.write, v179, [v180]);
          var v181 = outputWindow.document;
          var v182 = lineOfText$$1 + "\n";
          JAMScript.call(v181.write, v181, [v182]);
          var v186 = strands$$1 == "two";
          if(v186) {
            var v183 = outputWindow.document;
            var v584 = complement(lineOfText$$1);
            var v184 = v584 + "\n";
            JAMScript.call(v183.write, v183, [v184]);
            var v185 = outputWindow.document;
            JAMScript.call(v185.write, v185, ["\n"])
          }
        }
      }
    }
    aboveNum = "";
    lineOfText$$1 = "";
    v190 = i$$6 < stopBase$$2
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
  var v211 = i$$7 < stopBase$$3;
  for(;v211;) {
    lineNum$$1 = i$$7 + 1;
    var j$$8 = 1;
    var v585 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v585;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v586 = i$$7 + k$$2;
        var v191 = v586 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v587 = k$$2 + i$$7;
        var v193 = text$$13.charAt(v587);
        lineOfText$$2 = v192 + v193;
        k$$2 = k$$2 + 1;
        v194 = k$$2 < groupSize$$3
      }
      lineOfText$$2 = lineOfText$$2 + sepChar$$2;
      i$$7 = i$$7 + k$$2;
      var v197 = numberPosition$$2 == "above";
      if(v197) {
        var v195 = aboveNum$$1;
        var v196 = rightNum(i$$7, "", groupSize$$3, tabIn$$4);
        aboveNum$$1 = v195 + v196
      }
      var v198 = i$$7 >= stopBase$$3;
      if(v198) {
        break
      }
      k$$2 = 0;
      j$$8 = j$$8 + 1;
      var v588 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v588
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v846 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v589 = v846 + lineOfText$$2;
      var v201 = v589 + "\n";
      JAMScript.call(v200.write, v200, [v201])
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v590 = lineOfText$$2 + i$$7;
        var v203 = v590 + "\n";
        JAMScript.call(v202.write, v202, [v203])
      }else {
        var v208 = numberPosition$$2 == "above";
        if(v208) {
          var v204 = outputWindow.document;
          var v205 = aboveNum$$1 + "\n";
          JAMScript.call(v204.write, v204, [v205]);
          var v206 = outputWindow.document;
          var v207 = lineOfText$$2 + "\n";
          JAMScript.call(v206.write, v206, [v207])
        }
      }
    }
    aboveNum$$1 = "";
    lineOfText$$2 = "";
    v211 = i$$7 < stopBase$$3
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
  var v847 = sequence$$13.length;
  var v591 = v847 <= firstIndexToMutate;
  var v849 = !v591;
  if(v849) {
    var v848 = lastIndexToMutate < 0;
    var v986 = !v848;
    if(v986) {
      v848 = lastIndexToMutate <= firstIndexToMutate
    }
    v591 = v848
  }
  var v212 = v591;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v592 = Math.random();
    var v213 = v592 * maxNum;
    randNum = Math.floor(v213);
    var v593 = randNum < firstIndexToMutate;
    var v850 = !v593;
    if(v850) {
      v593 = randNum > lastIndexToMutate
    }
    var v214 = v593;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v594 = Math.random();
      var v595 = components$$1.length;
      var v215 = v594 * v595;
      componentsIndex = Math.round(v215);
      var v596 = components$$1.length;
      var v216 = componentsIndex == v596;
      if(v216) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v597 = components$$1[componentsIndex]
      }
      var v217 = v597 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v598 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v599 = components$$1[componentsIndex]
    }
    var v218 = v598 + v599;
    var v600 = randNum + 1;
    var v601 = sequence$$13.length;
    var v219 = sequence$$13.substring(v600, v601);
    sequence$$13 = v218 + v219;
    i$$8 = i$$8 + 1;
    v220 = i$$8 < numMut
  }
  var v221 = outputWindow.document;
  var v222 = addReturns(sequence$$13);
  JAMScript.call(v221.write, v221, [v222]);
  return true
}
function writeRandomSequence(components$$2, lengthOut$$1) {
  var sequence$$14 = "";
  var tempNum$$1 = 0;
  var tempChar$$1 = "";
  var j$$9 = 0;
  var v227 = j$$9 < lengthOut$$1;
  for(;v227;) {
    var v602 = Math.random();
    var v603 = components$$2.length;
    var v223 = v602 * v603;
    tempNum$$1 = Math.floor(v223);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v604 = sequence$$14.length;
    var v226 = v604 == 60;
    if(v226) {
      var v224 = outputWindow.document;
      var v225 = sequence$$14 + "\n";
      JAMScript.call(v224.write, v224, [v225]);
      sequence$$14 = ""
    }
    j$$9 = j$$9 + 1;
    v227 = j$$9 < lengthOut$$1
  }
  var v228 = outputWindow.document;
  var v229 = sequence$$14 + "\n";
  JAMScript.call(v228.write, v228, [v229]);
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
  var v233 = dnaConformation == "circular";
  if(v233) {
    var v230 = sequence$$15.substring(0, lookAhead);
    shiftValue = v230.length;
    var v987 = sequence$$15.length;
    var v851 = v987 - lookAhead;
    var v852 = sequence$$15.length;
    var v605 = sequence$$15.substring(v851, v852);
    var v231 = v605 + sequence$$15;
    var v232 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAMScript.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v235 = outputWindow.document;
  var v988 = '<tr><td class="title" width="200px">' + "Site:";
  var v853 = v988 + '</td><td class="title">';
  var v606 = v853 + "Positions:";
  var v236 = v606 + "</td></tr>\n";
  JAMScript.call(v235.write, v235, [v236]);
  var i$$9 = 0;
  var v607 = arrayOfItems.length;
  var v252 = i$$9 < v607;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v608 = arrayOfItems[i$$9]
    }
    var v237 = v608.match(/\/.+\//);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v989 = arrayOfItems[i$$9]
    }
    var v854 = v989.match(/\)\D*\d+/);
    var v609 = v854.toString();
    var v238 = v609.replace(/\)\D*/, "");
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v610 = matchPosition >= lowerLimit;
      if(v610) {
        v610 = matchPosition < upperLimit
      }
      var v242 = v610;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v611 = matchPosition - shiftValue;
        var v241 = v611 + 1;
        tempString$$1 = v240 + v241
      }
      var v612 = matchExp.lastIndex;
      var v855 = RegExp.lastMatch;
      var v613 = v855.length;
      var v243 = v612 - v613;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v614 = tempString$$1.search(/\d/);
    var v245 = v614 != -1;
    if(v245) {
      tempString$$1 = tempString$$1.replace(/none,\s*/, "")
    }
    var v249 = timesFound == 0;
    if(v249) {
      backGroundClass = "none"
    }else {
      var v248 = timesFound == 1;
      if(v248) {
        backGroundClass = "one"
      }else {
        var v247 = timesFound == 2;
        if(v247) {
          backGroundClass = "two"
        }else {
          var v246 = timesFound == 3;
          if(v246) {
            backGroundClass = "three"
          }else {
            backGroundClass = "many"
          }
        }
      }
    }
    var v250 = outputWindow.document;
    var v1150 = '<tr><td class="' + backGroundClass;
    var v1133 = v1150 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1188 = arrayOfItems[i$$9]
    }
    var v1170 = v1188.match(/\([^\(]+\)/);
    var v1151 = v1170.toString();
    var v1134 = v1151.replace(/\(|\)/g, "");
    var v1112 = v1133 + v1134;
    var v1070 = v1112 + '</td><td class="';
    var v990 = v1070 + backGroundClass;
    var v856 = v990 + '">';
    var v615 = v856 + tempString$$1;
    var v251 = v615 + "</td></tr>\n";
    JAMScript.call(v250.write, v250, [v251]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v616 = arrayOfItems.length;
    v252 = i$$9 < v616
  }
  var v253 = outputWindow.document;
  JAMScript.call(v253.write, v253, ["</tbody></table>\n"]);
  return true
}
function writeSequenceStats(sequence$$16, arrayOfItems$$1) {
  var originalLength = sequence$$16.length;
  var v254 = outputWindow.document;
  JAMScript.call(v254.write, v254, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v255 = outputWindow.document;
  var v1113 = '<tr><td class="title">' + "Pattern:";
  var v1071 = v1113 + '</td><td class="title">';
  var v991 = v1071 + "Times found:";
  var v857 = v991 + '</td><td class="title">';
  var v617 = v857 + "Percentage:";
  var v256 = v617 + "</td></tr>\n";
  JAMScript.call(v255.write, v255, [v256]);
  var i$$10 = 0;
  var v618 = arrayOfItems$$1.length;
  var v265 = i$$10 < v618;
  for(;v265;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v619 = arrayOfItems$$1[i$$10]
    }
    var v257 = v619.match(/\/[^\/]+\//);
    var matchExp$$1 = v257 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v620 = sequence$$16.search(matchExp$$1);
    var v259 = v620 != -1;
    if(v259) {
      var v258 = sequence$$16.match(matchExp$$1);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v858 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1072 = arrayOfItems$$1[i$$10]
    }
    var v992 = v1072.match(/\d+/);
    var v859 = parseFloat(v992);
    var v621 = v858 - v859;
    var v262 = v621 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v622 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v993 = arrayOfItems$$1[i$$10]
      }
      var v860 = v993.match(/\d+/);
      var v623 = parseFloat(v860);
      var v261 = v622 - v623;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1189 = arrayOfItems$$1[i$$10]
    }
    var v1171 = v1189.match(/\([^\(]+\)\b/);
    var v1152 = v1171.toString();
    var v1135 = v1152.replace(/\(|\)/g, "");
    var v1114 = "<tr><td>" + v1135;
    var v1073 = v1114 + "</td><td>";
    var v994 = v1073 + tempNumber;
    var v861 = v994 + "</td><td>";
    var v862 = percentage.toFixed(2);
    var v624 = v861 + v862;
    var v264 = v624 + "</td></tr>\n";
    JAMScript.call(v263.write, v263, [v264]);
    i$$10 = i$$10 + 1;
    var v625 = arrayOfItems$$1.length;
    v265 = i$$10 < v625
  }
  var v266 = outputWindow.document;
  JAMScript.call(v266.write, v266, ["</tbody></table>\n"]);
  return true
}
function writeShuffledSequence(sequence$$17) {
  var tempSeq = "";
  var tempChar$$2 = "";
  var tempString1 = "";
  var tempString2 = "";
  var randNum$$1 = 0;
  var maxNum$$1 = 0;
  var v626 = sequence$$17.length;
  var v273 = v626 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v627 = Math.random();
    var v267 = v627 * maxNum$$1;
    randNum$$1 = Math.floor(v267);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v268, v269);
    sequence$$17 = tempString1 + tempString2;
    var v628 = tempSeq.length;
    var v272 = v628 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAMScript.call(v270.write, v270, [v271]);
      tempSeq = ""
    }
    var v629 = sequence$$17.length;
    v273 = v629 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAMScript.call(v274.write, v274, [v275]);
  return true
}
function multiRevTrans(theDocument) {
  var newProtein = "";
  var maxInput$$3 = 2E4;
  var codonTable$$1;
  var alignArray$$1 = new Array;
  var titleArray = new Array;
  var sequenceArray$$1 = new Array;
  var v630 = testScript();
  var v276 = v630 == false;
  if(v276) {
    return false
  }
  var v1136 = theDocument.forms;
  var v1115 = v1136[0];
  var v1074 = v1115.elements;
  var v995 = v1074[0];
  var v863 = checkFormElement(v995);
  var v631 = v863 == false;
  var v865 = !v631;
  if(v865) {
    var v1172 = theDocument.forms;
    var v1153 = v1172[0];
    var v1137 = v1153.elements;
    var v1116 = v1137[0];
    var v1075 = v1116.value;
    var v996 = checkTextLength(v1075, maxInput$$3);
    var v864 = v996 == false;
    var v998 = !v864;
    if(v998) {
      var v1173 = theDocument.forms;
      var v1154 = v1173[0];
      var v1138 = v1154.elements;
      var v1117 = v1138[4];
      var v1076 = v1117.value;
      var v997 = checkCodonTable(v1076);
      v864 = v997 == false
    }
    v631 = v864
  }
  var v277 = v631;
  if(v277) {
    return false
  }
  var v1077 = theDocument.forms;
  var v999 = v1077[0];
  var v866 = v999.elements;
  var v632 = v866[0];
  var v278 = v632.value;
  theAlignment = "X" + v278;
  alignArray$$1 = theAlignment.split(/[>%#]/);
  var v633 = earlyCheckAlign(alignArray$$1);
  var v279 = v633 == false;
  if(v279) {
    return false
  }
  var i$$11 = 1;
  var v634 = alignArray$$1.length;
  var v294 = i$$11 < v634;
  for(;v294;) {
    var v280 = titleArray;
    var v281 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v635 = alignArray$$1[i$$11]
    }
    var v1277 = v635.match(/[^\f\n\r]+[\f\n\r]/);
    v280[v281] = v1277;
    var v282 = titleArray;
    var v283 = i$$11 - 1;
    var v1078 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1000 = titleArray[v1078]
    }
    var v867 = v1000.toString();
    var v636 = filterFastaTitle(v867);
    var v1278 = v636.replace(/[\f\n\r]/g, "");
    v282[v283] = v1278;
    var v284 = titleArray;
    var v285 = i$$11 - 1;
    var v868 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v637 = titleArray[v868]
    }
    var v1279 = v637.substring(0, 20);
    v284[v285] = v1279;
    var v289 = i$$11 == 1;
    if(v289) {
      var v638 = i$$11 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v286 = titleArray[v638]
      }
      longestTitle = v286.length
    }else {
      var v1001 = i$$11 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v869 = titleArray[v1001]
      }
      var v639 = v869.length;
      var v288 = v639 > longestTitle;
      if(v288) {
        var v640 = i$$11 - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v287 = titleArray[v640]
        }
        longestTitle = v287.length
      }
    }
    var v290 = sequenceArray$$1;
    var v291 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v641 = alignArray$$1[i$$11]
    }
    var v1280 = v641.replace(/[^\f\n\r]+[\f\n\r]/, "");
    v290[v291] = v1280;
    var v292 = sequenceArray$$1;
    var v293 = i$$11 - 1;
    var v870 = i$$11 - 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v642 = sequenceArray$$1[v870]
    }
    var v1281 = filterAlignSeq(v642);
    v292[v293] = v1281;
    i$$11 = i$$11 + 1;
    var v643 = alignArray$$1.length;
    v294 = i$$11 < v643
  }
  var v1079 = theDocument.forms;
  var v1002 = v1079[0];
  var v871 = v1002.elements;
  var v644 = v871[4];
  var v295 = v644.value;
  codonTable$$1 = makeCodonTable(v295);
  var v296 = codonTable$$1 == false;
  if(v296) {
    return false
  }
  openWindow("Multi Rev Trans");
  i$$11 = 0;
  var v645 = titleArray.length;
  var v301 = i$$11 < v645;
  for(;v301;) {
    var v297 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v646 = titleArray[i$$11]
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v647 = sequenceArray$$1[i$$11]
    }
    var v298 = getInfoFromTitleAndSequence(v646, v647);
    JAMScript.call(v297.write, v297, [v298]);
    var v872 = titleArray.length;
    var v648 = v872 - 1;
    var v300 = i$$11 < v648;
    if(v300) {
      var v299 = outputWindow.document;
      JAMScript.call(v299.write, v299, ['<div class="info">Combined with:</div>\n'])
    }
    i$$11 = i$$11 + 1;
    var v649 = titleArray.length;
    v301 = i$$11 < v649
  }
  openPre();
  writeConsensusSeq(sequenceArray$$1, codonTable$$1);
  var v302 = outputWindow.document;
  JAMScript.call(v302.write, v302, ["\n"]);
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
  var v873 = sequenceArray$$2[0];
  var v650 = v873.length;
  var v323 = i$$12 < v650;
  for(;v323;) {
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
    var v651 = sequenceArray$$2.length;
    var v319 = j$$10 < v651;
    for(;v319;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1003 = sequenceArray$$2[j$$10]
      }
      var v874 = v1003.charAt(i$$12);
      var v652 = v874 == "-";
      var v876 = !v652;
      if(v876) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1004 = sequenceArray$$2[j$$10]
        }
        var v875 = v1004.charAt(i$$12);
        v652 = v875 == "."
      }
      var v318 = v652;
      if(v318) {
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
          var v303 = codonTable$$2;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1005 = sequenceArray$$2[j$$10]
          }
          var v877 = v1005.charAt(i$$12);
          var v653 = v877.toString();
          var v304 = v653.toLowerCase();
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            aminoAcid = v303[v304]
          }
        }catch(e$$5) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v878 = sequenceArray$$2[j$$10]
          }
          var v654 = v878.charAt(i$$12);
          var v305 = "A codon table entry wasn't found for " + v654;
          alert(v305);
          return false
        }
        var v655 = aminoAcid.baseFreqPosOne;
        var v306 = v655[0];
        firstG = firstG + v306;
        var v656 = aminoAcid.baseFreqPosOne;
        var v307 = v656[1];
        firstA = firstA + v307;
        var v657 = aminoAcid.baseFreqPosOne;
        var v308 = v657[2];
        firstT = firstT + v308;
        var v658 = aminoAcid.baseFreqPosOne;
        var v309 = v658[3];
        firstC = firstC + v309;
        var v659 = aminoAcid.baseFreqPosTwo;
        var v310 = v659[0];
        secondG = secondG + v310;
        var v660 = aminoAcid.baseFreqPosTwo;
        var v311 = v660[1];
        secondA = secondA + v311;
        var v661 = aminoAcid.baseFreqPosTwo;
        var v312 = v661[2];
        secondT = secondT + v312;
        var v662 = aminoAcid.baseFreqPosTwo;
        var v313 = v662[3];
        secondC = secondC + v313;
        var v663 = aminoAcid.baseFreqPosThree;
        var v314 = v663[0];
        thirdG = thirdG + v314;
        var v664 = aminoAcid.baseFreqPosThree;
        var v315 = v664[1];
        thirdA = thirdA + v315;
        var v665 = aminoAcid.baseFreqPosThree;
        var v316 = v665[2];
        thirdT = thirdT + v316;
        var v666 = aminoAcid.baseFreqPosThree;
        var v317 = v666[3];
        thirdC = thirdC + v317
      }
      j$$10 = j$$10 + 1;
      var v667 = sequenceArray$$2.length;
      v319 = j$$10 < v667
    }
    var v668 = [firstG, firstA, firstT, firstC];
    var v320 = _getConsensusBase(v668);
    consensusSeq.push(v320);
    var v669 = [secondG, secondA, secondT, secondC];
    var v321 = _getConsensusBase(v669);
    consensusSeq.push(v321);
    var v670 = [thirdG, thirdA, thirdT, thirdC];
    var v322 = _getConsensusBase(v670);
    consensusSeq.push(v322);
    i$$12 = i$$12 + 1;
    var v879 = sequenceArray$$2[0];
    var v671 = v879.length;
    v323 = i$$12 < v671
  }
  var v324 = outputWindow.document;
  var v880 = "&gt;" + "reverse translation of alignment to a ";
  var v881 = consensusSeq.length;
  var v672 = v880 + v881;
  var v325 = v672 + " base sequence of consensus codons.\n";
  JAMScript.call(v324.write, v324, [v325]);
  var v326 = outputWindow.document;
  var v673 = consensusSeq.join("");
  var v327 = addReturns(v673);
  JAMScript.call(v326.write, v326, [v327]);
  var v328 = outputWindow.document;
  JAMScript.call(v328.write, v328, ["\n"]);
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
  var v882 = sequenceArray$$3[0];
  var v674 = v882.length;
  var v373 = i$$13 < v674;
  for(;v373;) {
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
    var v675 = sequenceArray$$3.length;
    var v347 = j$$11 < v675;
    for(;v347;) {
      var v329 = columnSeq;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v676 = sequenceArray$$3[j$$11]
      }
      var v330 = v676.charAt(i$$13);
      columnSeq = v329 + v330;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1006 = sequenceArray$$3[j$$11]
      }
      var v883 = v1006.charAt(i$$13);
      var v677 = v883 == "-";
      var v885 = !v677;
      if(v885) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1007 = sequenceArray$$3[j$$11]
        }
        var v884 = v1007.charAt(i$$13);
        v677 = v884 == "."
      }
      var v346 = v677;
      if(v346) {
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
          var v331 = codonTable$$3;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1008 = sequenceArray$$3[j$$11]
          }
          var v886 = v1008.charAt(i$$13);
          var v678 = v886.toString();
          var v332 = v678.toLowerCase();
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            aminoAcid$$1 = v331[v332]
          }
        }catch(e$$6) {
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v887 = sequenceArray$$3[j$$11]
          }
          var v679 = v887.charAt(i$$13);
          var v333 = "A codon table entry wasn't found for " + v679;
          alert(v333);
          return false
        }
        var v680 = aminoAcid$$1.baseFreqPosOne;
        var v334 = v680[0];
        firstG$$1 = firstG$$1 + v334;
        var v681 = aminoAcid$$1.baseFreqPosOne;
        var v335 = v681[1];
        firstA$$1 = firstA$$1 + v335;
        var v682 = aminoAcid$$1.baseFreqPosOne;
        var v336 = v682[2];
        firstT$$1 = firstT$$1 + v336;
        var v683 = aminoAcid$$1.baseFreqPosOne;
        var v337 = v683[3];
        firstC$$1 = firstC$$1 + v337;
        var v684 = aminoAcid$$1.baseFreqPosTwo;
        var v338 = v684[0];
        secondG$$1 = secondG$$1 + v338;
        var v685 = aminoAcid$$1.baseFreqPosTwo;
        var v339 = v685[1];
        secondA$$1 = secondA$$1 + v339;
        var v686 = aminoAcid$$1.baseFreqPosTwo;
        var v340 = v686[2];
        secondT$$1 = secondT$$1 + v340;
        var v687 = aminoAcid$$1.baseFreqPosTwo;
        var v341 = v687[3];
        secondC$$1 = secondC$$1 + v341;
        var v688 = aminoAcid$$1.baseFreqPosThree;
        var v342 = v688[0];
        thirdG$$1 = thirdG$$1 + v342;
        var v689 = aminoAcid$$1.baseFreqPosThree;
        var v343 = v689[1];
        thirdA$$1 = thirdA$$1 + v343;
        var v690 = aminoAcid$$1.baseFreqPosThree;
        var v344 = v690[2];
        thirdT$$1 = thirdT$$1 + v344;
        var v691 = aminoAcid$$1.baseFreqPosThree;
        var v345 = v691[3];
        thirdC$$1 = thirdC$$1 + v345
      }
      j$$11 = j$$11 + 1;
      var v692 = sequenceArray$$3.length;
      v347 = j$$11 < v692
    }
    var v693 = markLength * firstG$$1;
    var v694 = sequenceArray$$3.length;
    var v348 = v693 / v694;
    firstG$$1 = Math.round(v348);
    var v695 = markLength * firstA$$1;
    var v696 = sequenceArray$$3.length;
    var v349 = v695 / v696;
    firstA$$1 = Math.round(v349);
    var v697 = markLength * firstT$$1;
    var v698 = sequenceArray$$3.length;
    var v350 = v697 / v698;
    firstT$$1 = Math.round(v350);
    var v699 = markLength * firstC$$1;
    var v700 = sequenceArray$$3.length;
    var v351 = v699 / v700;
    firstC$$1 = Math.round(v351);
    var v701 = markLength * secondG$$1;
    var v702 = sequenceArray$$3.length;
    var v352 = v701 / v702;
    secondG$$1 = Math.round(v352);
    var v703 = markLength * secondA$$1;
    var v704 = sequenceArray$$3.length;
    var v353 = v703 / v704;
    secondA$$1 = Math.round(v353);
    var v705 = markLength * secondT$$1;
    var v706 = sequenceArray$$3.length;
    var v354 = v705 / v706;
    secondT$$1 = Math.round(v354);
    var v707 = markLength * secondC$$1;
    var v708 = sequenceArray$$3.length;
    var v355 = v707 / v708;
    secondC$$1 = Math.round(v355);
    var v709 = markLength * thirdG$$1;
    var v710 = sequenceArray$$3.length;
    var v356 = v709 / v710;
    thirdG$$1 = Math.round(v356);
    var v711 = markLength * thirdA$$1;
    var v712 = sequenceArray$$3.length;
    var v357 = v711 / v712;
    thirdA$$1 = Math.round(v357);
    var v713 = markLength * thirdT$$1;
    var v714 = sequenceArray$$3.length;
    var v358 = v713 / v714;
    thirdT$$1 = Math.round(v358);
    var v715 = markLength * thirdC$$1;
    var v716 = sequenceArray$$3.length;
    var v359 = v715 / v716;
    thirdC$$1 = Math.round(v359);
    var v360 = outputWindow.document;
    var v1118 = i$$13 + 1;
    var v1080 = "<b>" + v1118;
    var v1009 = v1080 + "_";
    var v888 = v1009 + columnSeq;
    var v717 = v888 + "_";
    var v361 = v717 + "first</b>\n";
    JAMScript.call(v360.write, v360, [v361]);
    var v362 = outputWindow.document;
    var v1268 = markG.substring(0, firstG$$1);
    var v1262 = "g" + v1268;
    var v1256 = v1262 + " ";
    var v1263 = firstG$$1 / markLength;
    var v1257 = v1263.toFixed(2);
    var v1253 = v1256 + v1257;
    var v1249 = v1253 + "\n";
    var v1241 = v1249 + "a";
    var v1242 = markA.substring(0, firstA$$1);
    var v1231 = v1241 + v1242;
    var v1221 = v1231 + " ";
    var v1232 = firstA$$1 / markLength;
    var v1222 = v1232.toFixed(2);
    var v1214 = v1221 + v1222;
    var v1204 = v1214 + "\n";
    var v1190 = v1204 + "T";
    var v1191 = markT.substring(0, firstT$$1);
    var v1174 = v1190 + v1191;
    var v1155 = v1174 + " ";
    var v1175 = firstT$$1 / markLength;
    var v1156 = v1175.toFixed(2);
    var v1139 = v1155 + v1156;
    var v1119 = v1139 + "\n";
    var v1081 = v1119 + "C";
    var v1082 = markC.substring(0, firstC$$1);
    var v1010 = v1081 + v1082;
    var v889 = v1010 + " ";
    var v1011 = firstC$$1 / markLength;
    var v890 = v1011.toFixed(2);
    var v718 = v889 + v890;
    var v363 = v718 + "\n";
    JAMScript.call(v362.write, v362, [v363]);
    var v364 = outputWindow.document;
    var v1120 = i$$13 + 1;
    var v1083 = "<b>" + v1120;
    var v1012 = v1083 + "_";
    var v891 = v1012 + columnSeq;
    var v719 = v891 + "_";
    var v365 = v719 + "second</b>\n";
    JAMScript.call(v364.write, v364, [v365]);
    var v366 = outputWindow.document;
    var v1269 = markG.substring(0, secondG$$1);
    var v1264 = "g" + v1269;
    var v1258 = v1264 + " ";
    var v1265 = secondG$$1 / markLength;
    var v1259 = v1265.toFixed(2);
    var v1254 = v1258 + v1259;
    var v1250 = v1254 + "\n";
    var v1243 = v1250 + "a";
    var v1244 = markA.substring(0, secondA$$1);
    var v1233 = v1243 + v1244;
    var v1223 = v1233 + " ";
    var v1234 = secondA$$1 / markLength;
    var v1224 = v1234.toFixed(2);
    var v1215 = v1223 + v1224;
    var v1205 = v1215 + "\n";
    var v1192 = v1205 + "T";
    var v1193 = markT.substring(0, secondT$$1);
    var v1176 = v1192 + v1193;
    var v1157 = v1176 + " ";
    var v1177 = secondT$$1 / markLength;
    var v1158 = v1177.toFixed(2);
    var v1140 = v1157 + v1158;
    var v1121 = v1140 + "\n";
    var v1084 = v1121 + "C";
    var v1085 = markC.substring(0, secondC$$1);
    var v1013 = v1084 + v1085;
    var v892 = v1013 + " ";
    var v1014 = secondC$$1 / markLength;
    var v893 = v1014.toFixed(2);
    var v720 = v892 + v893;
    var v367 = v720 + "\n";
    JAMScript.call(v366.write, v366, [v367]);
    var v368 = outputWindow.document;
    var v1122 = i$$13 + 1;
    var v1086 = "<b>" + v1122;
    var v1015 = v1086 + "_";
    var v894 = v1015 + columnSeq;
    var v721 = v894 + "_";
    var v369 = v721 + "third</b>\n";
    JAMScript.call(v368.write, v368, [v369]);
    var v370 = outputWindow.document;
    var v1270 = markG.substring(0, thirdG$$1);
    var v1266 = "g" + v1270;
    var v1260 = v1266 + " ";
    var v1267 = thirdG$$1 / markLength;
    var v1261 = v1267.toFixed(2);
    var v1255 = v1260 + v1261;
    var v1251 = v1255 + "\n";
    var v1245 = v1251 + "a";
    var v1246 = markA.substring(0, thirdA$$1);
    var v1235 = v1245 + v1246;
    var v1225 = v1235 + " ";
    var v1236 = thirdA$$1 / markLength;
    var v1226 = v1236.toFixed(2);
    var v1216 = v1225 + v1226;
    var v1206 = v1216 + "\n";
    var v1194 = v1206 + "T";
    var v1195 = markT.substring(0, thirdT$$1);
    var v1178 = v1194 + v1195;
    var v1159 = v1178 + " ";
    var v1179 = thirdT$$1 / markLength;
    var v1160 = v1179.toFixed(2);
    var v1141 = v1159 + v1160;
    var v1123 = v1141 + "\n";
    var v1087 = v1123 + "C";
    var v1088 = markC.substring(0, thirdC$$1);
    var v1016 = v1087 + v1088;
    var v895 = v1016 + " ";
    var v1017 = thirdC$$1 / markLength;
    var v896 = v1017.toFixed(2);
    var v722 = v895 + v896;
    var v371 = v722 + "\n";
    JAMScript.call(v370.write, v370, [v371]);
    var v372 = outputWindow.document;
    JAMScript.call(v372.write, v372, ["\n"]);
    i$$13 = i$$13 + 1;
    var v897 = sequenceArray$$3[0];
    var v723 = v897.length;
    v373 = i$$13 < v723
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
  var v724 = tableArray.length;
  var v378 = i$$14 < v724;
  for(;v378;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v725 = tableArray[i$$14]
    }
    var v377 = matchArray$$2 = re$$3.exec(v725);
    for(;v377;) {
      try {
        var v726 = codonTable$$4;
        var v898 = matchArray$$2[1];
        var v727 = v898.toLowerCase();
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v374 = v726[v727]
        }
        var v728 = matchArray$$2[2];
        var v899 = matchArray$$2[3];
        var v729 = parseFloat(v899);
        var v900 = matchArray$$2[4];
        var v730 = parseFloat(v900);
        var v901 = matchArray$$2[5];
        var v731 = parseFloat(v901);
        var v375 = new Codon(v728, v729, v730, v731);
        JAMScript.call(v374.addCodon, v374, [v375])
      }catch(e$$7) {
        var v1196 = matchArray$$2[1];
        var v1180 = "There is a problem with a line of the codon table: " + v1196;
        var v1161 = v1180 + " ";
        var v1162 = matchArray$$2[2];
        var v1142 = v1161 + v1162;
        var v1124 = v1142 + " ";
        var v1125 = matchArray$$2[3];
        var v1089 = v1124 + v1125;
        var v1018 = v1089 + " ";
        var v1019 = matchArray$$2[4];
        var v902 = v1018 + v1019;
        var v732 = v902 + " ";
        var v733 = matchArray$$2[4];
        var v376 = v732 + v733;
        alert(v376);
        return false
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v734 = tableArray[i$$14]
      }
      v377 = matchArray$$2 = re$$3.exec(v734)
    }
    i$$14 = i$$14 + 1;
    var v735 = tableArray.length;
    v378 = i$$14 < v735
  }
  var v379 = codonTable$$4.a;
  JAMScript.call(v379.determineBaseFreq, v379, []);
  var v380 = codonTable$$4.c;
  JAMScript.call(v380.determineBaseFreq, v380, []);
  var v381 = codonTable$$4.d;
  JAMScript.call(v381.determineBaseFreq, v381, []);
  var v382 = codonTable$$4.e;
  JAMScript.call(v382.determineBaseFreq, v382, []);
  var v383 = codonTable$$4.f;
  JAMScript.call(v383.determineBaseFreq, v383, []);
  var v384 = codonTable$$4.g;
  JAMScript.call(v384.determineBaseFreq, v384, []);
  var v385 = codonTable$$4.h;
  JAMScript.call(v385.determineBaseFreq, v385, []);
  var v386 = codonTable$$4.i;
  JAMScript.call(v386.determineBaseFreq, v386, []);
  var v387 = codonTable$$4.k;
  JAMScript.call(v387.determineBaseFreq, v387, []);
  var v388 = codonTable$$4.l;
  JAMScript.call(v388.determineBaseFreq, v388, []);
  var v389 = codonTable$$4.m;
  JAMScript.call(v389.determineBaseFreq, v389, []);
  var v390 = codonTable$$4.n;
  JAMScript.call(v390.determineBaseFreq, v390, []);
  var v391 = codonTable$$4.p;
  JAMScript.call(v391.determineBaseFreq, v391, []);
  var v392 = codonTable$$4.q;
  JAMScript.call(v392.determineBaseFreq, v392, []);
  var v393 = codonTable$$4.r;
  JAMScript.call(v393.determineBaseFreq, v393, []);
  var v394 = codonTable$$4.s;
  JAMScript.call(v394.determineBaseFreq, v394, []);
  var v395 = codonTable$$4.t;
  JAMScript.call(v395.determineBaseFreq, v395, []);
  var v396 = codonTable$$4.v;
  JAMScript.call(v396.determineBaseFreq, v396, []);
  var v397 = codonTable$$4.w;
  JAMScript.call(v397.determineBaseFreq, v397, []);
  var v398 = codonTable$$4.y;
  JAMScript.call(v398.determineBaseFreq, v398, []);
  var v399 = codonTable$$4.z;
  JAMScript.call(v399.determineBaseFreq, v399, []);
  return codonTable$$4
}
function CodonTable() {
  var v1282 = new AminoAcid;
  this.a = v1282;
  var v1283 = new AminoAcid;
  this.c = v1283;
  var v1284 = new AminoAcid;
  this.d = v1284;
  var v1285 = new AminoAcid;
  this.e = v1285;
  var v1286 = new AminoAcid;
  this.f = v1286;
  var v1287 = new AminoAcid;
  this.g = v1287;
  var v1288 = new AminoAcid;
  this.h = v1288;
  var v1289 = new AminoAcid;
  this.i = v1289;
  var v1290 = new AminoAcid;
  this.k = v1290;
  var v1291 = new AminoAcid;
  this.l = v1291;
  var v1292 = new AminoAcid;
  this.m = v1292;
  var v1293 = new AminoAcid;
  this.n = v1293;
  var v1294 = new AminoAcid;
  this.p = v1294;
  var v1295 = new AminoAcid;
  this.q = v1295;
  var v1296 = new AminoAcid;
  this.r = v1296;
  var v1297 = new AminoAcid;
  this.s = v1297;
  var v1298 = new AminoAcid;
  this.t = v1298;
  var v1299 = new AminoAcid;
  this.v = v1299;
  var v1300 = new AminoAcid;
  this.w = v1300;
  var v1301 = new AminoAcid;
  this.y = v1301;
  var v1302 = new AminoAcid;
  this.z = v1302;
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
  var v400 = this.codons;
  v400.push(codon$$1);
  return
}
function determineBaseFreq() {
  JAMScript.call(this.fixFraction, this, []);
  var i$$15 = 0;
  var v903 = this.codons;
  var v736 = v903.length;
  var v425 = i$$15 < v736;
  for(;v425;) {
    var v1090 = this.codons;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1020 = v1090[i$$15]
    }
    var v904 = v1020.sequence;
    var v737 = v904.charAt(0);
    var v408 = v737 == "g";
    if(v408) {
      var v401 = this.baseFreqPosOne;
      var v905 = this.baseFreqPosOne;
      var v738 = v905[0];
      var v1021 = this.codons;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v906 = v1021[i$$15]
      }
      var v739 = v906.fraction;
      v401[0] = v738 + v739
    }else {
      var v1091 = this.codons;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1022 = v1091[i$$15]
      }
      var v907 = v1022.sequence;
      var v740 = v907.charAt(0);
      var v407 = v740 == "a";
      if(v407) {
        var v402 = this.baseFreqPosOne;
        var v908 = this.baseFreqPosOne;
        var v741 = v908[1];
        var v1023 = this.codons;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v909 = v1023[i$$15]
        }
        var v742 = v909.fraction;
        v402[1] = v741 + v742
      }else {
        var v1092 = this.codons;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1024 = v1092[i$$15]
        }
        var v910 = v1024.sequence;
        var v743 = v910.charAt(0);
        var v406 = v743 == "t";
        if(v406) {
          var v403 = this.baseFreqPosOne;
          var v911 = this.baseFreqPosOne;
          var v744 = v911[2];
          var v1025 = this.codons;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v912 = v1025[i$$15]
          }
          var v745 = v912.fraction;
          v403[2] = v744 + v745
        }else {
          var v1093 = this.codons;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1026 = v1093[i$$15]
          }
          var v913 = v1026.sequence;
          var v746 = v913.charAt(0);
          var v405 = v746 == "c";
          if(v405) {
            var v404 = this.baseFreqPosOne;
            var v914 = this.baseFreqPosOne;
            var v747 = v914[3];
            var v1027 = this.codons;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v915 = v1027[i$$15]
            }
            var v748 = v915.fraction;
            v404[3] = v747 + v748
          }
        }
      }
    }
    var v1094 = this.codons;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1028 = v1094[i$$15]
    }
    var v916 = v1028.sequence;
    var v749 = v916.charAt(1);
    var v416 = v749 == "g";
    if(v416) {
      var v409 = this.baseFreqPosTwo;
      var v917 = this.baseFreqPosTwo;
      var v750 = v917[0];
      var v1029 = this.codons;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v918 = v1029[i$$15]
      }
      var v751 = v918.fraction;
      v409[0] = v750 + v751
    }else {
      var v1095 = this.codons;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1030 = v1095[i$$15]
      }
      var v919 = v1030.sequence;
      var v752 = v919.charAt(1);
      var v415 = v752 == "a";
      if(v415) {
        var v410 = this.baseFreqPosTwo;
        var v920 = this.baseFreqPosTwo;
        var v753 = v920[1];
        var v1031 = this.codons;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v921 = v1031[i$$15]
        }
        var v754 = v921.fraction;
        v410[1] = v753 + v754
      }else {
        var v1096 = this.codons;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1032 = v1096[i$$15]
        }
        var v922 = v1032.sequence;
        var v755 = v922.charAt(1);
        var v414 = v755 == "t";
        if(v414) {
          var v411 = this.baseFreqPosTwo;
          var v923 = this.baseFreqPosTwo;
          var v756 = v923[2];
          var v1033 = this.codons;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v924 = v1033[i$$15]
          }
          var v757 = v924.fraction;
          v411[2] = v756 + v757
        }else {
          var v1097 = this.codons;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1034 = v1097[i$$15]
          }
          var v925 = v1034.sequence;
          var v758 = v925.charAt(1);
          var v413 = v758 == "c";
          if(v413) {
            var v412 = this.baseFreqPosTwo;
            var v926 = this.baseFreqPosTwo;
            var v759 = v926[3];
            var v1035 = this.codons;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v927 = v1035[i$$15]
            }
            var v760 = v927.fraction;
            v412[3] = v759 + v760
          }
        }
      }
    }
    var v1098 = this.codons;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1036 = v1098[i$$15]
    }
    var v928 = v1036.sequence;
    var v761 = v928.charAt(2);
    var v424 = v761 == "g";
    if(v424) {
      var v417 = this.baseFreqPosThree;
      var v929 = this.baseFreqPosThree;
      var v762 = v929[0];
      var v1037 = this.codons;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v930 = v1037[i$$15]
      }
      var v763 = v930.fraction;
      v417[0] = v762 + v763
    }else {
      var v1099 = this.codons;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1038 = v1099[i$$15]
      }
      var v931 = v1038.sequence;
      var v764 = v931.charAt(2);
      var v423 = v764 == "a";
      if(v423) {
        var v418 = this.baseFreqPosThree;
        var v932 = this.baseFreqPosThree;
        var v765 = v932[1];
        var v1039 = this.codons;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v933 = v1039[i$$15]
        }
        var v766 = v933.fraction;
        v418[1] = v765 + v766
      }else {
        var v1100 = this.codons;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1040 = v1100[i$$15]
        }
        var v934 = v1040.sequence;
        var v767 = v934.charAt(2);
        var v422 = v767 == "t";
        if(v422) {
          var v419 = this.baseFreqPosThree;
          var v935 = this.baseFreqPosThree;
          var v768 = v935[2];
          var v1041 = this.codons;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v936 = v1041[i$$15]
          }
          var v769 = v936.fraction;
          v419[2] = v768 + v769
        }else {
          var v1101 = this.codons;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1042 = v1101[i$$15]
          }
          var v937 = v1042.sequence;
          var v770 = v937.charAt(2);
          var v421 = v770 == "c";
          if(v421) {
            var v420 = this.baseFreqPosThree;
            var v938 = this.baseFreqPosThree;
            var v771 = v938[3];
            var v1043 = this.codons;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v939 = v1043[i$$15]
            }
            var v772 = v939.fraction;
            v420[3] = v771 + v772
          }
        }
      }
    }
    i$$15 = i$$15 + 1;
    var v940 = this.codons;
    var v773 = v940.length;
    v425 = i$$15 < v773
  }
  return true
}
function fixFraction() {
  var perThouTotal = 0;
  var i$$16 = 0;
  var v941 = this.codons;
  var v774 = v941.length;
  var v427 = i$$16 < v774;
  for(;v427;) {
    var v942 = this.codons;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v775 = v942[i$$16]
    }
    var v426 = v775.perThou;
    perThouTotal = perThouTotal + v426;
    i$$16 = i$$16 + 1;
    var v943 = this.codons;
    var v776 = v943.length;
    v427 = i$$16 < v776
  }
  var v428 = perThouTotal == 0;
  if(v428) {
    return false
  }
  i$$16 = 0;
  var v944 = this.codons;
  var v777 = v944.length;
  var v430 = i$$16 < v777;
  for(;v430;) {
    var v778 = this.codons;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v429 = v778[i$$16]
    }
    var v1044 = this.codons;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v945 = v1044[i$$16]
    }
    var v779 = v945.perThou;
    v429.fraction = v779 / perThouTotal;
    i$$16 = i$$16 + 1;
    var v946 = this.codons;
    var v780 = v946.length;
    v430 = i$$16 < v780
  }
  return true
}
function AminoAcid() {
  var v1303 = new Array;
  this.codons = v1303;
  var v1304 = new Array(0, 0, 0, 0);
  this.baseFreqPosOne = v1304;
  var v1305 = new Array(0, 0, 0, 0);
  this.baseFreqPosTwo = v1305;
  var v1306 = new Array(0, 0, 0, 0);
  this.baseFreqPosThree = v1306;
  return
}
function Codon(sequence$$18, number, perThou, fraction) {
  var v1307 = sequence$$18.toLowerCase();
  this.sequence = v1307;
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
  var v781 = baseFreq[0];
  var v431 = v781 > 0;
  if(v431) {
    g = true
  }
  var v782 = baseFreq[1];
  var v432 = v782 > 0;
  if(v432) {
    a = true
  }
  var v783 = baseFreq[2];
  var v433 = v783 > 0;
  if(v433) {
    t = true
  }
  var v784 = baseFreq[3];
  var v434 = v784 > 0;
  if(v434) {
    c = true
  }
  var v785 = !g;
  if(v785) {
    var v947 = !a;
    if(v947) {
      var v1045 = !c;
      if(v1045) {
        v1045 = !t
      }
      v947 = v1045
    }
    v785 = v947
  }
  var v435 = v785;
  if(v435) {
    return"n"
  }
  var v786 = g;
  if(v786) {
    var v948 = a;
    if(v948) {
      v948 = c && t
    }
    v786 = v948
  }
  var v445 = v786;
  if(v445) {
    return"n"
  }else {
    var v787 = a;
    if(v787) {
      v787 = c && t
    }
    var v444 = v787;
    if(v444) {
      return"h"
    }else {
      var v788 = a;
      if(v788) {
        v788 = g && t
      }
      var v443 = v788;
      if(v443) {
        return"d"
      }else {
        var v789 = c;
        if(v789) {
          v789 = g && t
        }
        var v442 = v789;
        if(v442) {
          return"b"
        }else {
          var v441 = a && c;
          if(v441) {
            return"m"
          }else {
            var v440 = g && t;
            if(v440) {
              return"k"
            }else {
              var v439 = a && t;
              if(v439) {
                return"w"
              }else {
                var v438 = g && c;
                if(v438) {
                  return"s"
                }else {
                  var v437 = c && t;
                  if(v437) {
                    return"y"
                  }else {
                    var v436 = a && g;
                    if(v436) {
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
var v446 = AminoAcid.prototype;
v446.addCodon = addCodon;
var v447 = AminoAcid.prototype;
v447.determineBaseFreq = determineBaseFreq;
var v448 = AminoAcid.prototype;
v448.fixFraction = fixFraction;
JAMScript.set(document, "onload", v2);
var v449 = document.getElementById("submitbtn");
JAMScript.set(v449, "onclick", v3);
var v450 = document.getElementById("clearbtn");
JAMScript.set(v450, "onclick", v4);

