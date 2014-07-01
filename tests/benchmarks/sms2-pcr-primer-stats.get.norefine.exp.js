function v4() {
  var v1294 = document.forms;
  var v1035 = v1294[0];
  var v611 = v1035.elements;
  var v5 = v611[0];
  v5.value = " ";
  var v1295 = document.forms;
  var v1036 = v1295[0];
  var v612 = v1036.elements;
  var v6 = v612[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    pcrPrimerStats(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v2() {
  var v613 = document.main_form;
  var v8 = v613.main_submit;
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
  var v614 = arrayOfSequences.length;
  var v10 = v614 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v615 = arrayOfTitles.length;
  var v12 = i$$1 < v615;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1296 = arrayOfTitles[i$$1]
    }
    var v1037 = v1296.search(/\S/);
    var v616 = v1037 == -1;
    var v1039 = !v616;
    if(v1039) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1406 = arrayOfSequences[i$$1]
      }
      var v1297 = v1406.search(/\S/);
      var v1038 = v1297 == -1;
      var v1299 = !v1038;
      if(v1299) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1407 = arrayOfSequences[i$$1]
        }
        var v1298 = v1407.length;
        v1038 = v1298 != lengthOfAlign
      }
      v616 = v1038
    }
    var v11 = v616;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v617 = arrayOfTitles.length;
    v12 = i$$1 < v617
  }
  return true
}
function checkCodonTable(codonTable) {
  var v1040 = codonTable.search(/AmAcid/);
  var v618 = v1040 == -1;
  var v1042 = !v618;
  if(v1042) {
    var v1300 = codonTable.search(/Codon/);
    var v1041 = v1300 == -1;
    var v1302 = !v1041;
    if(v1302) {
      var v1408 = codonTable.search(/Number/);
      var v1301 = v1408 == -1;
      var v1410 = !v1301;
      if(v1410) {
        var v1457 = codonTable.search(/\/1000/);
        var v1409 = v1457 == -1;
        var v1459 = !v1409;
        if(v1459) {
          var v1458 = codonTable.search(/Fraction\s*\.\./);
          v1409 = v1458 == -1
        }
        v1301 = v1409
      }
      v1041 = v1301
    }
    v618 = v1041
  }
  var v13 = v618;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v1043 = formElement.value;
  var v619 = v1043.search(/\S/);
  var v14 = v619 == -1;
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
  var v620 = arrayOfPatterns.length;
  var v17 = z$$2 < v620;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1044 = arrayOfPatterns[z$$2]
    }
    var v621 = v1044.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v621 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1045 = arrayOfPatterns[z$$2]
    }
    var v622 = moreExpressionCheck(v1045);
    var v16 = v622 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v623 = arrayOfPatterns.length;
    v17 = z$$2 < v623
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v624 = arrayOfPatterns.length;
  var v26 = j < v624;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1303 = arrayOfPatterns[j]
    }
    var v1046 = JAMScript.call(v1303.match, v1303, [/\/.+\//]);
    var v625 = v1046 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1551 = eval("introspect(JAMScript.introspectors.processAll) { " + v625 + " }")
    }else {
      var v1551 = JAMScript.call(eval, null, [v625])
    }
    v20[v21] = v1551;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1047 = arrayOfPatterns[j]
    }
    var v626 = JAMScript.call(v1047.match, v1047, [/=[a-zA-Z\*]/]);
    var v1552 = v626.toString();
    v22[v23] = v1552;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v627 = geneticCodeMatchResult[j]
    }
    var v1553 = v627.replace(/=/g, "");
    v24[v25] = v1553;
    j = j + 1;
    var v628 = arrayOfPatterns.length;
    v26 = j < v628
  }
  var i$$2 = 0;
  var v1048 = testSequence.length;
  var v629 = v1048 - 3;
  var v33 = i$$2 <= v629;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v630 = geneticCodeMatchExp.length;
    var v31 = j < v630;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1049 = geneticCodeMatchExp[j]
      }
      var v631 = codon.search(v1049);
      var v30 = v631 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v632 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v632 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v633 = geneticCodeMatchExp.length;
      v31 = j < v633
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v1050 = testSequence.length;
    var v634 = v1050 - 3;
    v33 = i$$2 <= v634
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v635 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v635;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1051 = arrayOfPatterns$$1[z$$3]
    }
    var v636 = v1051.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v636 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v637 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v637
  }
  var i$$3 = 0;
  var v638 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v638;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1052 = arrayOfPatterns$$1[i$$3]
    }
    var v639 = "[" + v1052;
    var v36 = v639 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v640 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v640;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1053 = arrayOfPatterns$$1[j$$1]
      }
      var v641 = v1053.search(re);
      var v37 = v641 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v642 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v642
    }
    i$$3 = i$$3 + 1;
    var v643 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v643
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v644 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v644;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1054 = arrayOfPatterns$$2[z$$4]
    }
    var v645 = v1054.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v645 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1055 = arrayOfPatterns$$2[z$$4]
    }
    var v646 = moreExpressionCheck(v1055);
    var v41 = v646 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v647 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v647
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v1304 = getSequenceFromFasta(text$$7);
  var v1056 = v1304.replace(/[^A-Za-z]/g, "");
  var v648 = v1056.length;
  var v44 = v648 > maxInput;
  if(v44) {
    var v649 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v649 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v650 = text$$8.length;
  var v46 = v650 > maxInput$$1;
  if(v46) {
    var v651 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v651 + " characters.";
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
  var v652 = alignArray.length;
  var v53 = v652 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v653 = alignArray.length;
  var v55 = i$$4 < v653;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1057 = alignArray[i$$4]
    }
    var v654 = v1057.search(/[^\s]+\s/);
    var v54 = v654 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v655 = alignArray.length;
    v55 = i$$4 < v655
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
  var v656 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v656 != -1;
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
  var v657 = sequence$$2.length;
  var v59 = "&gt;results for " + v657;
  var stringToReturn = v59 + " residue sequence ";
  var v658 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v658 != -1;
  if(v61) {
    var v659 = stringToReturn + '"';
    var v60 = v659 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v660 = stringToReturn + ' starting "';
  var v661 = sequence$$2.substring(0, 10);
  var v62 = v660 + v661;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v662 = sequenceOne.length;
  var v63 = "Search results for " + v662;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v663 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v663 != -1;
  if(v65) {
    var v664 = stringToReturn$$1 + '"';
    var v64 = v664 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v665 = stringToReturn$$1 + ' starting "';
  var v666 = sequenceOne.substring(0, 10);
  var v66 = v665 + v666;
  stringToReturn$$1 = v66 + '"\n';
  var v667 = stringToReturn$$1 + "and ";
  var v668 = sequenceTwo.length;
  var v67 = v667 + v668;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v669 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v669 != -1;
  if(v69) {
    var v670 = stringToReturn$$1 + '"';
    var v68 = v670 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v671 = stringToReturn$$1 + ' starting "';
  var v672 = sequenceTwo.substring(0, 10);
  var v70 = v671 + v672;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v673 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v673;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1305 = arrayOfPatterns$$3[j$$2]
    }
    var v1058 = JAMScript.call(v1305.match, v1305, [/\/.+\//]);
    var v674 = v1058 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1554 = eval("introspect(JAMScript.introspectors.processAll) { " + v674 + " }")
    }else {
      var v1554 = JAMScript.call(eval, null, [v674])
    }
    v73[v74] = v1554;
    j$$2 = j$$2 + 1;
    var v675 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v675
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v676 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v676;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1059 = arrayOfPatterns$$4[j$$3]
    }
    var v677 = JAMScript.call(v1059.match, v1059, [/=[a-zA-Z\*]/]);
    var v1555 = v677.toString();
    v77[v78] = v1555;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v678 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1556 = v678.replace(/=/g, "");
    v79[v80] = v1556;
    j$$3 = j$$3 + 1;
    var v679 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v679
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v680 = sequence$$3.length;
  var v82 = "Results for " + v680;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v681 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v681 != -1;
  if(v84) {
    var v682 = stringToReturn$$2 + '"';
    var v83 = v682 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v683 = stringToReturn$$2 + ' starting "';
  var v684 = sequence$$3.substring(0, 10);
  var v85 = v683 + v684;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v1060 = "Results for " + topology;
  var v685 = v1060 + " ";
  var v686 = sequence$$4.length;
  var v87 = v685 + v686;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v687 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v687 != -1;
  if(v89) {
    var v688 = stringToReturn$$3 + '"';
    var v88 = v688 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v689 = stringToReturn$$3 + ' starting "';
  var v690 = sequence$$4.substring(0, 10);
  var v90 = v689 + v690;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v691 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v691;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v692 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v692 != -1;
  if(v94) {
    var v693 = stringToReturn$$4 + '"';
    var v93 = v693 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v694 = stringToReturn$$4 + ' starting "';
  var v695 = sequenceOne$$1.substring(0, 10);
  var v95 = v694 + v695;
  stringToReturn$$4 = v95 + '"\n';
  var v696 = stringToReturn$$4 + "and ";
  var v697 = sequenceTwo$$1.length;
  var v96 = v696 + v697;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v698 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v698 != -1;
  if(v98) {
    var v699 = stringToReturn$$4 + '"';
    var v97 = v699 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v700 = stringToReturn$$4 + ' starting "';
  var v701 = sequenceTwo$$1.substring(0, 10);
  var v99 = v700 + v701;
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
    var v702 = Math.random();
    var v703 = components.length;
    var v101 = v702 * v703;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v704 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v704 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v705 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v705 != -1;
  if(v105) {
    var v104 = JAMScript.call(sequenceRecord$$1.match, sequenceRecord$$1, [/\>[^\f\n\r]+[\f\n\r]/, ""]);
    fastaTitle = v104.toString();
    fastaTitle = fastaTitle.replace(/\>|[\f\n\r]/g, "");
    fastaTitle = fastaTitle.replace(/\s{2,}/g, " ");
    fastaTitle = fastaTitle.replace(/[\<\>]/gi, "")
  }
  return fastaTitle
}
function moreExpressionCheck(expressionToCheck) {
  var v1061 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v706 = v1061 != -1;
  var v1063 = !v706;
  if(v1063) {
    var v1306 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v1062 = v1306 != -1;
    var v1308 = !v1062;
    if(v1308) {
      var v1411 = expressionToCheck.search(/\[\]/);
      var v1307 = v1411 != -1;
      var v1413 = !v1307;
      if(v1413) {
        var v1460 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v1412 = v1460 != -1;
        var v1462 = !v1412;
        if(v1462) {
          var v1476 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1461 = v1476 != -1;
          var v1478 = !v1461;
          if(v1478) {
            var v1490 = expressionToCheck.search(/\|\|/);
            var v1477 = v1490 != -1;
            var v1492 = !v1477;
            if(v1492) {
              var v1503 = expressionToCheck.search(/\/\|/);
              var v1491 = v1503 != -1;
              var v1505 = !v1491;
              if(v1505) {
                var v1513 = expressionToCheck.search(/\|\//);
                var v1504 = v1513 != -1;
                var v1515 = !v1504;
                if(v1515) {
                  var v1522 = expressionToCheck.search(/\[.\]/);
                  var v1514 = v1522 != -1;
                  var v1524 = !v1514;
                  if(v1524) {
                    var v1529 = expressionToCheck.search(/\</);
                    var v1523 = v1529 != -1;
                    var v1531 = !v1523;
                    if(v1531) {
                      var v1530 = expressionToCheck.search(/\>/);
                      v1523 = v1530 != -1
                    }
                    v1514 = v1523
                  }
                  v1504 = v1514
                }
                v1491 = v1504
              }
              v1477 = v1491
            }
            v1461 = v1477
          }
          v1412 = v1461
        }
        v1307 = v1412
      }
      v1062 = v1307
    }
    v706 = v1062
  }
  var v106 = v706;
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
    var v1566 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1566[2], v1566[1], v1566[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v1309 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1064 = v1309 + "<head>\n";
  var v707 = v1064 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v707 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v1544 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1540 = v1544 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1536 = v1540 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1532 = v1536 + "div.info {font-weight: bold}\n";
    var v1525 = v1532 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1516 = v1525 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1506 = v1516 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1493 = v1506 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1479 = v1493 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1463 = v1479 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1414 = v1463 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1310 = v1414 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v1065 = v1310 + "td.many {color: #000000}\n";
    var v708 = v1065 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v708 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v1548 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1545 = v1548 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1541 = v1545 + "div.title {display: none}\n";
    var v1537 = v1541 + "div.info {font-weight: bold}\n";
    var v1533 = v1537 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1526 = v1533 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1517 = v1526 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1507 = v1517 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1494 = v1507 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1480 = v1494 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1464 = v1480 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1415 = v1464 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1311 = v1415 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v1066 = v1311 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v709 = v1066 + "img {display: none}\n";
    var v116 = v709 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v1312 = "</head>\n" + '<body class="main">\n';
  var v1067 = v1312 + '<div class="title">';
  var v710 = v1067 + title$$6;
  var v118 = v710 + " results</div>\n";
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
    var v1567 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1567[2], v1567[1], v1567[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v1313 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1068 = v1313 + "<head>\n";
  var v711 = v1068 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v711 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v1546 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1542 = v1546 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1538 = v1542 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1534 = v1538 + "div.info {font-weight: bold}\n";
    var v1527 = v1534 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1518 = v1527 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1508 = v1518 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1495 = v1508 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1481 = v1495 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1465 = v1481 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1416 = v1465 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1314 = v1416 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v1069 = v1314 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v712 = v1069 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v712 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v1550 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1549 = v1550 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1547 = v1549 + "div.title {display: none}\n";
    var v1543 = v1547 + "div.info {font-weight: bold}\n";
    var v1539 = v1543 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1535 = v1539 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1528 = v1535 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1519 = v1528 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1509 = v1519 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1496 = v1509 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1482 = v1496 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1466 = v1482 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1417 = v1466 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1315 = v1417 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v1070 = v1315 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v713 = v1070 + "img {display: none}\n";
    var v124 = v713 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v1316 = "</head>\n" + '<body class="main">\n';
  var v1071 = v1316 + '<div class="title">';
  var v714 = v1071 + title$$8;
  var v126 = v714 + " results</div>\n";
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
  var v715 = dnaSequence$$1.search(/./);
  var v127 = v715 != -1;
  if(v127) {
    tempDnaArray = JAMScript.call(dnaSequence$$1.match, dnaSequence$$1, [/./g]);
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
  var v716 = testArray[0];
  var v131 = v716 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v717 = testString.search(re$$2);
  var v132 = v717 == -1;
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
  var v718 = testNum.toFixed(3);
  var v135 = v718 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v719 = testNum.toPrecision(5);
  var v136 = v719 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v720 = theNumber$$1.search(/\d/);
  var v137 = v720 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v1072 = emblFile.search(/ID/);
  var v721 = v1072 == -1;
  var v1074 = !v721;
  if(v1074) {
    var v1317 = emblFile.search(/AC/);
    var v1073 = v1317 == -1;
    var v1319 = !v1073;
    if(v1319) {
      var v1418 = emblFile.search(/DE/);
      var v1318 = v1418 == -1;
      var v1420 = !v1318;
      if(v1420) {
        var v1419 = emblFile.search(/SQ/);
        v1318 = v1419 == -1
      }
      v1073 = v1318
    }
    v721 = v1073
  }
  var v138 = v721;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v722 = theNumber$$2.search(/\d/);
  var v139 = v722 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v723 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v723 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v724 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v724 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v725 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v725 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v1075 = genBankFile.search(/LOCUS/);
  var v726 = v1075 == -1;
  var v1077 = !v726;
  if(v1077) {
    var v1320 = genBankFile.search(/DEFINITION/);
    var v1076 = v1320 == -1;
    var v1322 = !v1076;
    if(v1322) {
      var v1421 = genBankFile.search(/ACCESSION/);
      var v1321 = v1421 == -1;
      var v1423 = !v1321;
      if(v1423) {
        var v1422 = genBankFile.search(/ORIGIN/);
        v1321 = v1422 == -1
      }
      v1076 = v1321
    }
    v726 = v1076
  }
  var v144 = v726;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1078 = genBankFile$$1.search(/LOCUS/);
  var v727 = v1078 == -1;
  var v1080 = !v727;
  if(v1080) {
    var v1323 = genBankFile$$1.search(/DEFINITION/);
    var v1079 = v1323 == -1;
    var v1325 = !v1079;
    if(v1325) {
      var v1424 = genBankFile$$1.search(/ACCESSION/);
      var v1324 = v1424 == -1;
      var v1426 = !v1324;
      if(v1426) {
        var v1425 = genBankFile$$1.search(/ORIGIN/);
        v1324 = v1425 == -1
      }
      v1079 = v1324
    }
    v727 = v1079
  }
  var v145 = v727;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v728 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v728 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v1081 = emblFile$$1.search(/ID/);
  var v729 = v1081 == -1;
  var v1083 = !v729;
  if(v1083) {
    var v1326 = emblFile$$1.search(/AC/);
    var v1082 = v1326 == -1;
    var v1328 = !v1082;
    if(v1328) {
      var v1427 = emblFile$$1.search(/DE/);
      var v1327 = v1427 == -1;
      var v1429 = !v1327;
      if(v1429) {
        var v1428 = emblFile$$1.search(/SQ/);
        v1327 = v1428 == -1
      }
      v1082 = v1327
    }
    v729 = v1082
  }
  var v147 = v729;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v730 = emblFile$$1.search(/^FT/m);
  var v148 = v730 == -1;
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
    var v731 = basePerLine / groupSize;
    var v153 = j$$6 <= v731;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v732 = k + i$$5;
        var v151 = text$$10.charAt(v732);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v733 = basePerLine / groupSize;
      v153 = j$$6 <= v733
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
    var v734 = adjustment < 0;
    if(v734) {
      v734 = adjusted >= 0
    }
    var v157 = v734;
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
    var v735 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v735;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v736 = i$$6 + k$$1;
        var v158 = v736 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v737 = k$$1 + i$$6;
        var v160 = text$$12.charAt(v737);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v738 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v738, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v739 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v739
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v1329 = adjustNumbering(lineNum, numberingAdjustment);
      var v1084 = rightNum(v1329, "", 8, tabIn$$3);
      var v740 = v1084 + lineOfText$$1;
      var v168 = v740 + "\n";
      JAMScript.call(v167.write, v167, [v168]);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v1330 = adjustNumbering(lineNum, numberingAdjustment);
        var v1085 = rightNum(v1330, "", 8, tabIn$$3);
        var v1086 = complement(lineOfText$$1);
        var v741 = v1085 + v1086;
        var v170 = v741 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v171 = outputWindow.document;
        JAMScript.call(v171.write, v171, ["\n"])
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v1087 = lineOfText$$1;
        var v1088 = adjustNumbering(i$$6, numberingAdjustment);
        var v742 = v1087 + v1088;
        var v174 = v742 + "\n";
        JAMScript.call(v173.write, v173, [v174]);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v1089 = complement(lineOfText$$1);
          var v1090 = adjustNumbering(i$$6, numberingAdjustment);
          var v743 = v1089 + v1090;
          var v176 = v743 + "\n";
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
            var v744 = complement(lineOfText$$1);
            var v184 = v744 + "\n";
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
    var v745 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v745;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v746 = i$$7 + k$$2;
        var v191 = v746 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v747 = k$$2 + i$$7;
        var v193 = text$$13.charAt(v747);
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
      var v748 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v748
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v1091 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v749 = v1091 + lineOfText$$2;
      var v201 = v749 + "\n";
      JAMScript.call(v200.write, v200, [v201])
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v750 = lineOfText$$2 + i$$7;
        var v203 = v750 + "\n";
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
  var v1092 = sequence$$13.length;
  var v751 = v1092 <= firstIndexToMutate;
  var v1094 = !v751;
  if(v1094) {
    var v1093 = lastIndexToMutate < 0;
    var v1331 = !v1093;
    if(v1331) {
      v1093 = lastIndexToMutate <= firstIndexToMutate
    }
    v751 = v1093
  }
  var v212 = v751;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v752 = Math.random();
    var v213 = v752 * maxNum;
    randNum = Math.floor(v213);
    var v753 = randNum < firstIndexToMutate;
    var v1095 = !v753;
    if(v1095) {
      v753 = randNum > lastIndexToMutate
    }
    var v214 = v753;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v754 = Math.random();
      var v755 = components$$1.length;
      var v215 = v754 * v755;
      componentsIndex = Math.round(v215);
      var v756 = components$$1.length;
      var v216 = componentsIndex == v756;
      if(v216) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v757 = components$$1[componentsIndex]
      }
      var v217 = v757 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v758 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v759 = components$$1[componentsIndex]
    }
    var v218 = v758 + v759;
    var v760 = randNum + 1;
    var v761 = sequence$$13.length;
    var v219 = sequence$$13.substring(v760, v761);
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
    var v762 = Math.random();
    var v763 = components$$2.length;
    var v223 = v762 * v763;
    tempNum$$1 = Math.floor(v223);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v764 = sequence$$14.length;
    var v226 = v764 == 60;
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
    var v1332 = sequence$$15.length;
    var v1096 = v1332 - lookAhead;
    var v1097 = sequence$$15.length;
    var v765 = sequence$$15.substring(v1096, v1097);
    var v231 = v765 + sequence$$15;
    var v232 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAMScript.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v235 = outputWindow.document;
  var v1333 = '<tr><td class="title" width="200px">' + "Site:";
  var v1098 = v1333 + '</td><td class="title">';
  var v766 = v1098 + "Positions:";
  var v236 = v766 + "</td></tr>\n";
  JAMScript.call(v235.write, v235, [v236]);
  var i$$9 = 0;
  var v767 = arrayOfItems.length;
  var v252 = i$$9 < v767;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v768 = arrayOfItems[i$$9]
    }
    var v237 = JAMScript.call(v768.match, v768, [/\/.+\//]);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1334 = arrayOfItems[i$$9]
    }
    var v1099 = JAMScript.call(v1334.match, v1334, [/\)\D*\d+/]);
    var v769 = v1099.toString();
    var v238 = v769.replace(/\)\D*/, "");
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v770 = matchPosition >= lowerLimit;
      if(v770) {
        v770 = matchPosition < upperLimit
      }
      var v242 = v770;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v771 = matchPosition - shiftValue;
        var v241 = v771 + 1;
        tempString$$1 = v240 + v241
      }
      var v772 = matchExp.lastIndex;
      var v1100 = RegExp.lastMatch;
      var v773 = v1100.length;
      var v243 = v772 - v773;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v774 = tempString$$1.search(/\d/);
    var v245 = v774 != -1;
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
    var v1497 = '<tr><td class="' + backGroundClass;
    var v1483 = v1497 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1520 = arrayOfItems[i$$9]
    }
    var v1510 = JAMScript.call(v1520.match, v1520, [/\([^\(]+\)/]);
    var v1498 = v1510.toString();
    var v1484 = v1498.replace(/\(|\)/g, "");
    var v1467 = v1483 + v1484;
    var v1430 = v1467 + '</td><td class="';
    var v1335 = v1430 + backGroundClass;
    var v1101 = v1335 + '">';
    var v775 = v1101 + tempString$$1;
    var v251 = v775 + "</td></tr>\n";
    JAMScript.call(v250.write, v250, [v251]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v776 = arrayOfItems.length;
    v252 = i$$9 < v776
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
  var v1468 = '<tr><td class="title">' + "Pattern:";
  var v1431 = v1468 + '</td><td class="title">';
  var v1336 = v1431 + "Times found:";
  var v1102 = v1336 + '</td><td class="title">';
  var v777 = v1102 + "Percentage:";
  var v256 = v777 + "</td></tr>\n";
  JAMScript.call(v255.write, v255, [v256]);
  var i$$10 = 0;
  var v778 = arrayOfItems$$1.length;
  var v265 = i$$10 < v778;
  for(;v265;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v779 = arrayOfItems$$1[i$$10]
    }
    var v257 = JAMScript.call(v779.match, v779, [/\/[^\/]+\//]);
    var matchExp$$1 = v257 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v780 = sequence$$16.search(matchExp$$1);
    var v259 = v780 != -1;
    if(v259) {
      var v258 = JAMScript.call(sequence$$16.match, sequence$$16, [matchExp$$1]);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v1103 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1432 = arrayOfItems$$1[i$$10]
    }
    var v1337 = JAMScript.call(v1432.match, v1432, [/\d+/]);
    var v1104 = parseFloat(v1337);
    var v781 = v1103 - v1104;
    var v262 = v781 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v782 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1338 = arrayOfItems$$1[i$$10]
      }
      var v1105 = JAMScript.call(v1338.match, v1338, [/\d+/]);
      var v783 = parseFloat(v1105);
      var v261 = v782 - v783;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1521 = arrayOfItems$$1[i$$10]
    }
    var v1511 = JAMScript.call(v1521.match, v1521, [/\([^\(]+\)\b/]);
    var v1499 = v1511.toString();
    var v1485 = v1499.replace(/\(|\)/g, "");
    var v1469 = "<tr><td>" + v1485;
    var v1433 = v1469 + "</td><td>";
    var v1339 = v1433 + tempNumber;
    var v1106 = v1339 + "</td><td>";
    var v1107 = percentage.toFixed(2);
    var v784 = v1106 + v1107;
    var v264 = v784 + "</td></tr>\n";
    JAMScript.call(v263.write, v263, [v264]);
    i$$10 = i$$10 + 1;
    var v785 = arrayOfItems$$1.length;
    v265 = i$$10 < v785
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
  var v786 = sequence$$17.length;
  var v273 = v786 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v787 = Math.random();
    var v267 = v787 * maxNum$$1;
    randNum$$1 = Math.floor(v267);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v268, v269);
    sequence$$17 = tempString1 + tempString2;
    var v788 = tempSeq.length;
    var v272 = v788 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAMScript.call(v270.write, v270, [v271]);
      tempSeq = ""
    }
    var v789 = sequence$$17.length;
    v273 = v789 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAMScript.call(v274.write, v274, [v275]);
  return true
}
function pcrPrimerStats(theDocument) {
  var newDna = "";
  var title$$9 = "";
  var maxInput$$3 = 5E3;
  var maxPrimerLength = 50;
  var milliMolarSalt = 50;
  var milliMolarMagnesium = 1.5;
  var nanoMolarPrimerTotal = 200;
  var isPhosphorylated = false;
  var v790 = testScript();
  var v276 = v790 == false;
  if(v276) {
    return false
  }
  var v1486 = theDocument.forms;
  var v1470 = v1486[0];
  var v1434 = v1470.elements;
  var v1340 = v1434[0];
  var v1108 = checkFormElement(v1340);
  var v791 = v1108 == false;
  var v1110 = !v791;
  if(v1110) {
    var v1500 = theDocument.forms;
    var v1487 = v1500[0];
    var v1471 = v1487.elements;
    var v1435 = v1471[0];
    var v1341 = v1435.value;
    var v1109 = checkSequenceLength(v1341, maxInput$$3);
    v791 = v1109 == false
  }
  var v277 = v791;
  if(v277) {
    return false
  }
  molarSalt = milliMolarSalt / 1E3;
  molarMagnesium = milliMolarMagnesium / 1E3;
  molarPrimerTotal = nanoMolarPrimerTotal / 1E9;
  isPhosphorylated = false;
  openWindow("PCR Primer Stats");
  openPre();
  var v1436 = theDocument.forms;
  var v1342 = v1436[0];
  var v1111 = v1342.elements;
  var v792 = v1111[0];
  var v278 = v792.value;
  var arrayOfFasta$$1 = getArrayOfFasta(v278);
  var v279 = outputWindow.document;
  JAMScript.call(v279.write, v279, ["Global settings:\n"]);
  if(isPhosphorylated) {
    var v280 = outputWindow.document;
    JAMScript.call(v280.write, v280, ["-The primers have a 5'-phosphate group.\n"])
  }else {
    var v281 = outputWindow.document;
    JAMScript.call(v281.write, v281, ["-The primers do not have a 5'-phosphate group.\n"])
  }
  var v282 = outputWindow.document;
  var v793 = "-Combined concentration of K+ and Na+ in the reaction = " + milliMolarSalt;
  var v283 = v793 + " millimolar.\n";
  JAMScript.call(v282.write, v282, [v283]);
  var v284 = outputWindow.document;
  var v794 = "-Mg+2 concentration in the reaction = " + milliMolarMagnesium;
  var v285 = v794 + " millimolar.\n";
  JAMScript.call(v284.write, v284, [v285]);
  var v286 = outputWindow.document;
  var v795 = "-Primer concentration in the reaction = " + nanoMolarPrimerTotal;
  var v287 = v795 + " nanomolar.\n";
  JAMScript.call(v286.write, v286, [v287]);
  var v288 = outputWindow.document;
  JAMScript.call(v288.write, v288, ["\n"]);
  var v289 = outputWindow.document;
  JAMScript.call(v289.write, v289, ["------------------------------------------------------------\n"]);
  var i$$11 = 0;
  var v796 = arrayOfFasta$$1.length;
  var v354 = i$$11 < v796;
  for(;v354;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v290 = arrayOfFasta$$1[i$$11]
    }
    newDna = getSequenceFromFasta(v290);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v291 = arrayOfFasta$$1[i$$11]
    }
    title$$9 = getTitleFromFasta(v291);
    newDna = _removeNonPrimer(newDna);
    var v797 = newDna.length;
    var v292 = v797 == 0;
    if(v292) {
      i$$11 = i$$11 + 1;
      var v798 = arrayOfFasta$$1.length;
      v354 = i$$11 < v798;
      continue
    }
    var v799 = newDna.length;
    var v293 = v799 > maxPrimerLength;
    if(v293) {
      i$$11 = i$$11 + 1;
      var v800 = arrayOfFasta$$1.length;
      v354 = i$$11 < v800;
      continue
    }
    var percentGC = _percentGC(newDna);
    var nearestNeighborTm = _nearestNeighborTm(newDna, molarSalt, molarPrimerTotal, molarMagnesium);
    var selfCompHash = _getSelfComplementarityReport(newDna, 3, 50);
    var hairpinHash = _getHairpinReport(newDna, 3, 50);
    var v294 = outputWindow.document;
    JAMScript.call(v294.write, v294, ["------------------------------------------------------------\n"]);
    var v295 = outputWindow.document;
    JAMScript.call(v295.write, v295, ["General properties:\n"]);
    var v296 = outputWindow.document;
    JAMScript.call(v296.write, v296, ["-------------------\n"]);
    var v297 = outputWindow.document;
    var v1112 = rightNum("Primer name:", "", 32, "");
    var v801 = v1112 + title$$9;
    var v298 = v801 + "\n";
    JAMScript.call(v297.write, v297, [v298]);
    var v299 = outputWindow.document;
    var v1113 = rightNum("Primer sequence:", "", 32, "");
    var v802 = v1113 + newDna;
    var v300 = v802 + "\n";
    JAMScript.call(v299.write, v299, [v300]);
    var v301 = outputWindow.document;
    var v1114 = rightNum("Sequence length:", "", 32, "");
    var v1115 = newDna.length;
    var v803 = v1114 + v1115;
    var v302 = v803 + "\n";
    JAMScript.call(v301.write, v301, [v302]);
    var v303 = outputWindow.document;
    var v1116 = rightNum("Base counts:", "", 32, "");
    var v1117 = _baseCounts(newDna);
    var v804 = v1116 + v1117;
    var v304 = v804 + "\n";
    JAMScript.call(v303.write, v303, [v304]);
    var v305 = outputWindow.document;
    var v1118 = rightNum("GC content (%):", "", 32, "");
    var v805 = v1118 + percentGC;
    var v306 = v805 + "\n";
    JAMScript.call(v305.write, v305, [v306]);
    var v307 = outputWindow.document;
    var v1119 = rightNum("Molecular weight (Daltons):", "", 32, "");
    var v1120 = _molecularWeight(newDna, isPhosphorylated);
    var v806 = v1119 + v1120;
    var v308 = v806 + "\n";
    JAMScript.call(v307.write, v307, [v308]);
    var v309 = outputWindow.document;
    var v1121 = rightNum("nmol/A260:", "", 32, "");
    var v1122 = _nmolPerA260(newDna);
    var v807 = v1121 + v1122;
    var v310 = v807 + "\n";
    JAMScript.call(v309.write, v309, [v310]);
    var v311 = outputWindow.document;
    var v1123 = rightNum("micrograms/A260:", "", 32, "");
    var v1124 = _microgramsPerA260(newDna, isPhosphorylated);
    var v808 = v1123 + v1124;
    var v312 = v808 + "\n";
    JAMScript.call(v311.write, v311, [v312]);
    var v313 = outputWindow.document;
    var v1125 = rightNum("Basic Tm (degrees C):", "", 32, "");
    var v1126 = _basicTm(newDna);
    var v809 = v1125 + v1126;
    var v314 = v809 + "\n";
    JAMScript.call(v313.write, v313, [v314]);
    var v315 = outputWindow.document;
    var v1127 = rightNum("Salt adjusted Tm (degrees C):", "", 32, "");
    var v1128 = _molarSaltAdjustedTm(newDna, molarSalt);
    var v810 = v1127 + v1128;
    var v316 = v810 + "\n";
    JAMScript.call(v315.write, v315, [v316]);
    var v317 = outputWindow.document;
    var v1129 = rightNum("Nearest neighbor Tm (degrees C):", "", 32, "");
    var v811 = v1129 + nearestNeighborTm;
    var v318 = v811 + "\n";
    JAMScript.call(v317.write, v317, [v318]);
    var v319 = outputWindow.document;
    JAMScript.call(v319.write, v319, ["\n"]);
    var v320 = outputWindow.document;
    JAMScript.call(v320.write, v320, ["PCR suitability tests (Pass / Warning):\n"]);
    var v321 = outputWindow.document;
    JAMScript.call(v321.write, v321, ["------------------------------------\n"]);
    var v322 = outputWindow.document;
    var v1130 = rightNum("Single base runs:", "", 32, "");
    var v1131 = _getBaseRunsReport(newDna, 5);
    var v812 = v1130 + v1131;
    var v323 = v812 + "\n";
    JAMScript.call(v322.write, v322, [v323]);
    var v324 = outputWindow.document;
    var v1132 = rightNum("Dinucleotide base runs:", "", 32, "");
    var v1133 = _getDiNucleotideRunsReport(newDna, 5);
    var v813 = v1132 + v1133;
    var v325 = v813 + "\n";
    JAMScript.call(v324.write, v324, [v325]);
    var v326 = outputWindow.document;
    var v1134 = rightNum("Length:", "", 32, "");
    var v1135 = _getSuitableLengthReport(newDna, 14, 30);
    var v814 = v1134 + v1135;
    var v327 = v814 + "\n";
    JAMScript.call(v326.write, v326, [v327]);
    var v328 = outputWindow.document;
    var v1136 = rightNum("Percent GC:", "", 32, "");
    var v1137 = _getSuitableGCReport(newDna, percentGC, 40, 60);
    var v815 = v1136 + v1137;
    var v329 = v815 + "\n";
    JAMScript.call(v328.write, v328, [v329]);
    var v330 = outputWindow.document;
    var v1138 = rightNum("Tm (Nearest neighbor):", "", 32, "");
    var v1139 = _getSuitableTmReport(newDna, nearestNeighborTm, 50, 58);
    var v816 = v1138 + v1139;
    var v331 = v816 + "\n";
    JAMScript.call(v330.write, v330, [v331]);
    var v332 = outputWindow.document;
    var v1140 = rightNum("GC clamp:", "", 32, "");
    var v1141 = _getSuitableThreePrimeGC(newDna, 1, 3);
    var v817 = v1140 + v1141;
    var v333 = v817 + "\n";
    JAMScript.call(v332.write, v332, [v333]);
    var v334 = outputWindow.document;
    var v1142 = rightNum("Self-annealing:", "", 32, "");
    var v1143 = selfCompHash["report"];
    var v818 = v1142 + v1143;
    var v335 = v818 + "\n";
    JAMScript.call(v334.write, v334, [v335]);
    var v819 = selfCompHash["report"];
    var v342 = v819 != "Pass";
    if(v342) {
      var v336 = outputWindow.document;
      var v1144 = rightNum(":", "", 32, "");
      var v1145 = selfCompHash["upper"];
      var v820 = v1144 + v1145;
      var v337 = v820 + "\n";
      JAMScript.call(v336.write, v336, [v337]);
      var v338 = outputWindow.document;
      var v1146 = rightNum(":", "", 32, "");
      var v1147 = selfCompHash["divider"];
      var v821 = v1146 + v1147;
      var v339 = v821 + "\n";
      JAMScript.call(v338.write, v338, [v339]);
      var v340 = outputWindow.document;
      var v1148 = rightNum(":", "", 32, "");
      var v1149 = selfCompHash["lower"];
      var v822 = v1148 + v1149;
      var v341 = v822 + "\n";
      JAMScript.call(v340.write, v340, [v341])
    }
    var v343 = outputWindow.document;
    var v1150 = rightNum("Hairpin formation:", "", 32, "");
    var v1151 = hairpinHash["report"];
    var v823 = v1150 + v1151;
    var v344 = v823 + "\n";
    JAMScript.call(v343.write, v343, [v344]);
    var v824 = hairpinHash["report"];
    var v351 = v824 != "Pass";
    if(v351) {
      var v345 = outputWindow.document;
      var v1152 = rightNum(":", "", 32, "");
      var v1153 = hairpinHash["upper"];
      var v825 = v1152 + v1153;
      var v346 = v825 + "\n";
      JAMScript.call(v345.write, v345, [v346]);
      var v347 = outputWindow.document;
      var v1154 = rightNum(":", "", 32, "");
      var v1155 = hairpinHash["divider"];
      var v826 = v1154 + v1155;
      var v348 = v826 + "\n";
      JAMScript.call(v347.write, v347, [v348]);
      var v349 = outputWindow.document;
      var v1156 = rightNum(":", "", 32, "");
      var v1157 = hairpinHash["lower"];
      var v827 = v1156 + v1157;
      var v350 = v827 + "\n";
      JAMScript.call(v349.write, v349, [v350])
    }
    var v352 = outputWindow.document;
    JAMScript.call(v352.write, v352, ["------------------------------------------------------------\n"]);
    var v353 = outputWindow.document;
    JAMScript.call(v353.write, v353, ["\n"]);
    i$$11 = i$$11 + 1;
    var v828 = arrayOfFasta$$1.length;
    v354 = i$$11 < v828
  }
  closePre();
  closeWindow();
  return true
}
function _removeNonPrimer(sequence$$18) {
  sequence$$18.replace(/u/g, "t");
  sequence$$18.replace(/U/g, "T");
  return sequence$$18.replace(/[^gatcryswkmbdhvnGATCRYSWKMBDHVN]/g, "")
}
function _containsOnlyNonDegenerates(sequence$$19) {
  var v829 = sequence$$19.search(/[^gatc]/i);
  var v355 = v829 == -1;
  if(v355) {
    return true
  }
  return false
}
function _baseCounts(sequence$$20) {
  var numG = _getBaseCount(sequence$$20, "g");
  var numA = _getBaseCount(sequence$$20, "a");
  var numT = _getBaseCount(sequence$$20, "t");
  var numC = _getBaseCount(sequence$$20, "c");
  var v356 = sequence$$20.length;
  var v1158 = numG + numA;
  var v830 = v1158 + numT;
  var v357 = v830 + numC;
  var numOther = v356 - v357;
  var v1512 = "G=" + numG;
  var v1501 = v1512 + "; A=";
  var v1488 = v1501 + numA;
  var v1472 = v1488 + "; T=";
  var v1437 = v1472 + numT;
  var v1343 = v1437 + "; C=";
  var v1159 = v1343 + numC;
  var v831 = v1159 + "; Other=";
  var v358 = v831 + numOther;
  return v358 + ";"
}
function _microgramsPerA260(sequence$$21, isPhosphorylated$$1) {
  var v359 = _containsOnlyNonDegenerates(sequence$$21);
  if(v359) {
    return _microgramsPerA260NonDegen(sequence$$21, isPhosphorylated$$1)
  }else {
    return _microgramsPerA260Degen(sequence$$21, isPhosphorylated$$1)
  }
  return
}
function _microgramsPerA260NonDegen(sequence$$22, isPhosphorylated$$2) {
  var mw = _mw(sequence$$22, isPhosphorylated$$2);
  var v360 = mw;
  var v361 = _getExtinctionCoefficient(sequence$$22);
  var result = v360 / v361;
  return result.toFixed(2)
}
function _microgramsPerA260Degen(sequence$$23, isPhosphorylated$$3) {
  var lowerBoundsSequence = sequence$$23;
  var upperBoundsSequence = sequence$$23;
  lowerBoundsSequence = lowerBoundsSequence.replace(/r/gi, "g");
  lowerBoundsSequence = lowerBoundsSequence.replace(/y/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/s/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/w/gi, "t");
  lowerBoundsSequence = lowerBoundsSequence.replace(/k/gi, "t");
  lowerBoundsSequence = lowerBoundsSequence.replace(/m/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/b/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/d/gi, "t");
  lowerBoundsSequence = lowerBoundsSequence.replace(/h/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/v/gi, "c");
  lowerBoundsSequence = lowerBoundsSequence.replace(/n/gi, "c");
  upperBoundsSequence = upperBoundsSequence.replace(/r/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/y/gi, "t");
  upperBoundsSequence = upperBoundsSequence.replace(/s/gi, "g");
  upperBoundsSequence = upperBoundsSequence.replace(/w/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/k/gi, "g");
  upperBoundsSequence = upperBoundsSequence.replace(/m/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/b/gi, "g");
  upperBoundsSequence = upperBoundsSequence.replace(/d/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/h/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/v/gi, "a");
  upperBoundsSequence = upperBoundsSequence.replace(/n/gi, "a");
  var v832 = _microgramsPerA260NonDegen(upperBoundsSequence, isPhosphorylated$$3);
  var v362 = v832 + " to ";
  var v363 = _microgramsPerA260NonDegen(lowerBoundsSequence, isPhosphorylated$$3);
  return v362 + v363
}
function _nmolPerA260(sequence$$24) {
  var v364 = _containsOnlyNonDegenerates(sequence$$24);
  if(v364) {
    return _nmolPerA260NonDegen(sequence$$24)
  }else {
    return _nmolPerA260Degen(sequence$$24)
  }
  return
}
function _nmolPerA260NonDegen(sequence$$25) {
  var result$$1 = _getExtinctionCoefficient(sequence$$25);
  var v365 = 1 / result$$1;
  result$$1 = v365 * 1E3;
  return result$$1.toFixed(2)
}
function _getExtinctionCoefficient(sequence$$26) {
  var dimerValues = _getDimerExtinctionCoefficients();
  var singleValues = _getSingleExtinctionCoefficients();
  var dimerSum = 0;
  var singleSum = 0;
  sequence$$26 = sequence$$26.toLowerCase();
  var i$$12 = 0;
  var v1160 = sequence$$26.length;
  var v833 = v1160 - 1;
  var v368 = i$$12 < v833;
  for(;v368;) {
    var v366 = dimerSum;
    var v834 = dimerValues;
    var v1161 = sequence$$26.charAt(i$$12);
    var v1344 = i$$12 + 1;
    var v1162 = sequence$$26.charAt(v1344);
    var v835 = v1161 + v1162;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v367 = v834[v835]
    }
    dimerSum = v366 + v367;
    i$$12 = i$$12 + 1;
    var v1163 = sequence$$26.length;
    var v836 = v1163 - 1;
    v368 = i$$12 < v836
  }
  i$$12 = 1;
  var v1164 = sequence$$26.length;
  var v837 = v1164 - 1;
  var v371 = i$$12 < v837;
  for(;v371;) {
    var v369 = singleSum;
    var v838 = singleValues;
    var v839 = sequence$$26.charAt(i$$12);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v370 = v838[v839]
    }
    singleSum = v369 + v370;
    i$$12 = i$$12 + 1;
    var v1165 = sequence$$26.length;
    var v840 = v1165 - 1;
    v371 = i$$12 < v840
  }
  var v372 = 2 * dimerSum;
  return v372 - singleSum
}
function _nmolPerA260Degen(sequence$$27) {
  var lowerBoundsSequence$$1 = sequence$$27;
  var upperBoundsSequence$$1 = sequence$$27;
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/r/gi, "g");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/y/gi, "c");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/s/gi, "c");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/w/gi, "t");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/k/gi, "t");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/m/gi, "c");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/b/gi, "c");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/d/gi, "t");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/h/gi, "c");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/v/gi, "c");
  lowerBoundsSequence$$1 = lowerBoundsSequence$$1.replace(/n/gi, "c");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/r/gi, "a");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/y/gi, "t");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/s/gi, "g");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/w/gi, "a");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/k/gi, "g");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/m/gi, "a");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/b/gi, "g");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/d/gi, "a");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/h/gi, "a");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/v/gi, "a");
  upperBoundsSequence$$1 = upperBoundsSequence$$1.replace(/n/gi, "a");
  var v841 = _nmolPerA260NonDegen(upperBoundsSequence$$1);
  var v373 = v841 + " to ";
  var v374 = _nmolPerA260NonDegen(lowerBoundsSequence$$1);
  return v373 + v374
}
function _percentGC(sequence$$28) {
  var v375 = _containsOnlyNonDegenerates(sequence$$28);
  if(v375) {
    return _percentGCNonDegen(sequence$$28)
  }else {
    return _percentGCDegen(sequence$$28)
  }
  return
}
function _percentGCNonDegen(sequence$$29) {
  var v376 = _getBaseCount(sequence$$29, "g");
  var v377 = _getBaseCount(sequence$$29, "c");
  var numHits = v376 + v377;
  var v1166 = sequence$$29.length;
  var v842 = numHits / v1166;
  var v378 = v842 * 100;
  return v378.toFixed(2)
}
function _percentGCDegen(sequence$$30) {
  var lowerBoundsSequence$$2 = sequence$$30;
  var upperBoundsSequence$$2 = sequence$$30;
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/s/gi, "g");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/s/gi, "g");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/w/gi, "a");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/w/gi, "a");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/r/gi, "a");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/y/gi, "t");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/k/gi, "t");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/m/gi, "a");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/b/gi, "t");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/d/gi, "a");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/h/gi, "a");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/v/gi, "a");
  lowerBoundsSequence$$2 = lowerBoundsSequence$$2.replace(/n/gi, "a");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/r/gi, "g");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/y/gi, "c");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/k/gi, "g");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/m/gi, "c");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/b/gi, "g");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/d/gi, "g");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/h/gi, "c");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/v/gi, "g");
  upperBoundsSequence$$2 = upperBoundsSequence$$2.replace(/n/gi, "g");
  var v843 = _percentGCNonDegen(lowerBoundsSequence$$2);
  var v379 = v843 + " to ";
  var v380 = _percentGCNonDegen(upperBoundsSequence$$2);
  return v379 + v380
}
function _molecularWeight(sequence$$31, isPhosphorylated$$4) {
  var v381 = _containsOnlyNonDegenerates(sequence$$31);
  if(v381) {
    return _molecularWeightNonDegen(sequence$$31, isPhosphorylated$$4)
  }else {
    return _molecularWeightDegen(sequence$$31, isPhosphorylated$$4)
  }
  return
}
function _molecularWeightNonDegen(sequence$$32, isPhosphorylated$$5) {
  var v382 = _mw(sequence$$32, isPhosphorylated$$5);
  return v382.toFixed(2)
}
function _mw(sequence$$33, isPhosphorylated$$6) {
  var g = _getBaseCount(sequence$$33, "g");
  var a = _getBaseCount(sequence$$33, "a");
  var t = _getBaseCount(sequence$$33, "t");
  var c = _getBaseCount(sequence$$33, "c");
  var phosAdjust = 0;
  if(isPhosphorylated$$6) {
    phosAdjust = 79
  }
  var v1438 = g * 329.21;
  var v1439 = a * 313.21;
  var v1345 = v1438 + v1439;
  var v1346 = t * 304.2;
  var v1167 = v1345 + v1346;
  var v1168 = c * 289.18;
  var v844 = v1167 + v1168;
  var v383 = v844 - 61.96;
  return v383 + phosAdjust
}
function _molecularWeightDegen(sequence$$34, isPhosphorylated$$7) {
  var lowerBoundsSequence$$3 = sequence$$34;
  var upperBoundsSequence$$3 = sequence$$34;
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/r/gi, "a");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/y/gi, "c");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/s/gi, "c");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/w/gi, "t");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/k/gi, "t");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/m/gi, "c");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/b/gi, "c");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/d/gi, "t");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/h/gi, "c");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/v/gi, "c");
  lowerBoundsSequence$$3 = lowerBoundsSequence$$3.replace(/n/gi, "c");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/r/gi, "g");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/y/gi, "t");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/s/gi, "g");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/w/gi, "a");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/k/gi, "g");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/m/gi, "a");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/b/gi, "g");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/d/gi, "g");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/h/gi, "a");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/v/gi, "g");
  upperBoundsSequence$$3 = upperBoundsSequence$$3.replace(/n/gi, "g");
  var v845 = _molecularWeightNonDegen(lowerBoundsSequence$$3, isPhosphorylated$$7);
  var v384 = v845 + " to ";
  var v385 = _molecularWeightNonDegen(upperBoundsSequence$$3, isPhosphorylated$$7);
  return v384 + v385
}
function _basicTm(sequence$$35) {
  var v386 = _containsOnlyNonDegenerates(sequence$$35);
  if(v386) {
    return _basicTmNonDegen(sequence$$35)
  }else {
    return _basicTmDegen(sequence$$35)
  }
  return
}
function _basicTmNonDegen(sequence$$36) {
  var v846 = sequence$$36.length;
  var v389 = v846 < 14;
  if(v389) {
    var numG$$1 = _getBaseCount(sequence$$36, "g");
    var numC$$1 = _getBaseCount(sequence$$36, "c");
    var numA$$1 = _getBaseCount(sequence$$36, "a");
    var numT$$1 = _getBaseCount(sequence$$36, "t");
    var v1169 = numG$$1 + numC$$1;
    var v847 = 4 * v1169;
    var v1170 = numA$$1 + numT$$1;
    var v848 = 2 * v1170;
    var v387 = v847 + v848;
    return v387.toFixed(0)
  }else {
    numG$$1 = _getBaseCount(sequence$$36, "g");
    numC$$1 = _getBaseCount(sequence$$36, "c");
    var v1440 = numG$$1 + numC$$1;
    var v1347 = v1440 - 16.4;
    var v1171 = 41 * v1347;
    var v1172 = sequence$$36.length;
    var v849 = v1171 / v1172;
    var v388 = 64.9 + v849;
    return v388.toFixed(0)
  }
  return
}
function _basicTmDegen(sequence$$37) {
  var lowerBoundsSequence$$4 = sequence$$37;
  var upperBoundsSequence$$4 = sequence$$37;
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/s/gi, "g");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/s/gi, "g");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/w/gi, "a");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/w/gi, "a");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/r/gi, "a");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/y/gi, "t");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/k/gi, "t");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/m/gi, "a");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/b/gi, "t");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/d/gi, "a");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/h/gi, "a");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/v/gi, "a");
  lowerBoundsSequence$$4 = lowerBoundsSequence$$4.replace(/n/gi, "a");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/r/gi, "g");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/y/gi, "c");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/k/gi, "g");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/m/gi, "c");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/b/gi, "g");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/d/gi, "g");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/h/gi, "c");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/v/gi, "g");
  upperBoundsSequence$$4 = upperBoundsSequence$$4.replace(/n/gi, "g");
  var v850 = _basicTmNonDegen(lowerBoundsSequence$$4);
  var v390 = v850 + " to ";
  var v391 = _basicTmNonDegen(upperBoundsSequence$$4);
  return v390 + v391
}
function _molarSaltAdjustedTm(sequence$$38, molarSalt$$1) {
  var v392 = _containsOnlyNonDegenerates(sequence$$38);
  if(v392) {
    return _molarSaltAdjustedTmNonDegen(sequence$$38, molarSalt$$1)
  }else {
    return _molarSaltAdjustedTmDegen(sequence$$38, molarSalt$$1)
  }
  return
}
function _molarSaltAdjustedTmNonDegen(sequence$$39, molarSalt$$2) {
  var v393 = _getBaseCount(sequence$$39, "g");
  var v394 = _getBaseCount(sequence$$39, "c");
  var gcHits = v393 + v394;
  var v851 = sequence$$39.length;
  var v395 = gcHits / v851;
  var pGC = v395 * 100;
  var v1441 = Math.log(molarSalt$$2);
  var v1348 = 7.21 * v1441;
  var v1173 = 81.5 + v1348;
  var v1174 = 0.41 * pGC;
  var v852 = v1173 + v1174;
  var v1175 = sequence$$39.length;
  var v853 = 675 / v1175;
  var v396 = v852 - v853;
  return v396.toFixed(0)
}
function _molarSaltAdjustedTmDegen(sequence$$40, molarSalt$$3) {
  var lowerBoundsSequence$$5 = sequence$$40;
  var upperBoundsSequence$$5 = sequence$$40;
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/s/gi, "g");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/s/gi, "g");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/w/gi, "a");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/w/gi, "a");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/r/gi, "a");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/y/gi, "t");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/k/gi, "t");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/m/gi, "a");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/b/gi, "t");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/d/gi, "a");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/h/gi, "a");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/v/gi, "a");
  lowerBoundsSequence$$5 = lowerBoundsSequence$$5.replace(/n/gi, "a");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/r/gi, "g");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/y/gi, "c");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/k/gi, "g");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/m/gi, "c");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/b/gi, "g");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/d/gi, "g");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/h/gi, "c");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/v/gi, "g");
  upperBoundsSequence$$5 = upperBoundsSequence$$5.replace(/n/gi, "g");
  var v854 = _molarSaltAdjustedTmNonDegen(lowerBoundsSequence$$5, molarSalt$$3);
  var v397 = v854 + " to ";
  var v398 = _molarSaltAdjustedTmNonDegen(upperBoundsSequence$$5, molarSalt$$3);
  return v397 + v398
}
function _nearestNeighborTm(sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1) {
  var v399 = _containsOnlyNonDegenerates(sequence$$41);
  if(v399) {
    return _nearestNeighborTmNonDegen(sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1)
  }else {
    return _nearestNeighborTmDegen(sequence$$41, molarSalt$$4, molarPrimerTotal$$1, molarMagnesium$$1)
  }
  return
}
function _nearestNeighborTmNonDegen(sequence$$42, molarSalt$$5, molarPrimerTotal$$2, molarMagnesium$$2) {
  sequence$$42 = sequence$$42.toLowerCase();
  var R = 1.987;
  var ds = 0;
  var dh = 0;
  var v400 = molarMagnesium$$2 * 140;
  var correctedSalt = molarSalt$$5 + v400;
  var v401 = ds;
  var v1349 = sequence$$42.length;
  var v1176 = v1349 - 1;
  var v855 = 0.368 * v1176;
  var v856 = Math.log(correctedSalt);
  var v402 = v855 * v856;
  ds = v401 + v402;
  var termDsCorr = _getTerminalCorrectionsDsHash();
  var v403 = ds;
  var v857 = termDsCorr;
  var v858 = sequence$$42.charAt(0);
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v404 = v857[v858]
  }
  ds = v403 + v404;
  var v405 = ds;
  var v859 = termDsCorr;
  var v1350 = sequence$$42.length;
  var v1177 = v1350 - 1;
  var v860 = sequence$$42.charAt(v1177);
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v406 = v859[v860]
  }
  ds = v405 + v406;
  var termDhCorr = _getTerminalCorrectionsDhHash();
  var v407 = dh;
  var v861 = termDhCorr;
  var v862 = sequence$$42.charAt(0);
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v408 = v861[v862]
  }
  dh = v407 + v408;
  var v409 = dh;
  var v863 = termDhCorr;
  var v1351 = sequence$$42.length;
  var v1178 = v1351 - 1;
  var v864 = sequence$$42.charAt(v1178);
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v410 = v863[v864]
  }
  dh = v409 + v410;
  var dsValues = _getDsHash();
  var dhValues = _getDhHash();
  var i$$13 = 0;
  var v1179 = sequence$$42.length;
  var v865 = v1179 - 1;
  var v415 = i$$13 < v865;
  for(;v415;) {
    var v411 = ds;
    var v866 = dsValues;
    var v1180 = sequence$$42.charAt(i$$13);
    var v1352 = i$$13 + 1;
    var v1181 = sequence$$42.charAt(v1352);
    var v867 = v1180 + v1181;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v412 = v866[v867]
    }
    ds = v411 + v412;
    var v413 = dh;
    var v868 = dhValues;
    var v1182 = sequence$$42.charAt(i$$13);
    var v1353 = i$$13 + 1;
    var v1183 = sequence$$42.charAt(v1353);
    var v869 = v1182 + v1183;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v414 = v868[v869]
    }
    dh = v413 + v414;
    i$$13 = i$$13 + 1;
    var v1184 = sequence$$42.length;
    var v870 = v1184 - 1;
    v415 = i$$13 < v870
  }
  var v1185 = 1E3 * dh;
  var v1354 = ds;
  var v1442 = R;
  var v1473 = molarPrimerTotal$$2 / 2;
  var v1443 = Math.log(v1473);
  var v1355 = v1442 * v1443;
  var v1186 = v1354 + v1355;
  var v871 = v1185 / v1186;
  var v416 = v871 - 273.15;
  return v416.toFixed(2)
}
function _nearestNeighborTmDegen(sequence$$43, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3) {
  var lowerBoundsSequence$$6 = sequence$$43;
  var upperBoundsSequence$$6 = sequence$$43;
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/s/gi, "g");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/s/gi, "g");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/w/gi, "a");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/w/gi, "a");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/r/gi, "a");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/y/gi, "t");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/k/gi, "t");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/m/gi, "a");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/b/gi, "t");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/d/gi, "a");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/h/gi, "a");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/v/gi, "a");
  lowerBoundsSequence$$6 = lowerBoundsSequence$$6.replace(/n/gi, "a");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/r/gi, "g");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/y/gi, "c");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/k/gi, "g");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/m/gi, "c");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/b/gi, "g");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/d/gi, "g");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/h/gi, "c");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/v/gi, "g");
  upperBoundsSequence$$6 = upperBoundsSequence$$6.replace(/n/gi, "g");
  var v872 = _nearestNeighborTmNonDegen(lowerBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3);
  var v417 = v872 + " to ";
  var v418 = _nearestNeighborTmNonDegen(upperBoundsSequence$$6, molarSalt$$6, molarPrimerTotal$$3, molarMagnesium$$3);
  return v417 + v418
}
function _getBaseCount(sequence$$44, base$$1) {
  var basePattern = new RegExp(base$$1, "gi");
  var v873 = sequence$$44.search(basePattern);
  var v420 = v873 != -1;
  if(v420) {
    var v419 = JAMScript.call(sequence$$44.match, sequence$$44, [basePattern]);
    return v419.length
  }else {
    return 0
  }
  return
}
function _getTerminalCorrectionsDsHash() {
  var hash = {};
  hash["g"] = -2.8;
  hash["a"] = 4.1;
  hash["t"] = 4.1;
  hash["c"] = -2.8;
  return hash
}
function _getTerminalCorrectionsDhHash() {
  var hash$$1 = {};
  hash$$1["g"] = 0.1;
  hash$$1["a"] = 2.3;
  hash$$1["t"] = 2.3;
  hash$$1["c"] = 0.1;
  return hash$$1
}
function _getDsHash() {
  var hash$$2 = {};
  hash$$2["gg"] = -19.9;
  hash$$2["ga"] = -22.2;
  hash$$2["gt"] = -22.4;
  hash$$2["gc"] = -27.2;
  hash$$2["ag"] = -21;
  hash$$2["aa"] = -22.2;
  hash$$2["at"] = -20.4;
  hash$$2["ac"] = -22.4;
  hash$$2["tg"] = -22.7;
  hash$$2["ta"] = -21.3;
  hash$$2["tt"] = -22.2;
  hash$$2["tc"] = -22.2;
  hash$$2["cg"] = -27.2;
  hash$$2["ca"] = -22.7;
  hash$$2["ct"] = -21;
  hash$$2["cc"] = -19.9;
  return hash$$2
}
function _getDhHash() {
  var hash$$3 = {};
  hash$$3["gg"] = -8;
  hash$$3["ga"] = -8.2;
  hash$$3["gt"] = -8.4;
  hash$$3["gc"] = -10.6;
  hash$$3["ag"] = -7.8;
  hash$$3["aa"] = -7.9;
  hash$$3["at"] = -7.2;
  hash$$3["ac"] = -8.4;
  hash$$3["tg"] = -8.5;
  hash$$3["ta"] = -7.2;
  hash$$3["tt"] = -7.9;
  hash$$3["tc"] = -8.2;
  hash$$3["cg"] = -10.6;
  hash$$3["ca"] = -8.5;
  hash$$3["ct"] = -7.8;
  hash$$3["cc"] = -8;
  return hash$$3
}
function _getDimerExtinctionCoefficients() {
  var hash$$4 = {};
  hash$$4["gg"] = 10.8;
  hash$$4["ga"] = 12.6;
  hash$$4["gt"] = 10;
  hash$$4["gc"] = 8.8;
  hash$$4["ag"] = 12.5;
  hash$$4["aa"] = 13.7;
  hash$$4["at"] = 11.4;
  hash$$4["ac"] = 10.6;
  hash$$4["tg"] = 9.5;
  hash$$4["ta"] = 11.7;
  hash$$4["tt"] = 8.4;
  hash$$4["tc"] = 8.1;
  hash$$4["cg"] = 9;
  hash$$4["ca"] = 10.6;
  hash$$4["ct"] = 7.6;
  hash$$4["cc"] = 7.3;
  return hash$$4
}
function _getSingleExtinctionCoefficients() {
  var hash$$5 = {};
  hash$$5["g"] = 11.5;
  hash$$5["a"] = 15.4;
  hash$$5["t"] = 8.7;
  hash$$5["c"] = 7.4;
  return hash$$5
}
function _getBaseRunsReport(sequence$$45, minRunLength) {
  var report = "";
  var hasRun = false;
  var nucleotides = ["G", "A", "T", "C"];
  var i$$14 = 0;
  var v874 = nucleotides.length;
  var v423 = i$$14 < v874;
  for(;v423;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v875 = nucleotides[i$$14]
    }
    var v422 = _hasRunOfBases(sequence$$45, v875, minRunLength);
    if(v422) {
      hasRun = true;
      var v876 = report + "Contains run of ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v877 = nucleotides[i$$14]
      }
      var v421 = v876 + v877;
      report = v421 + "'s; "
    }
    i$$14 = i$$14 + 1;
    var v878 = nucleotides.length;
    v423 = i$$14 < v878
  }
  if(hasRun) {
    return"Warning: " + report
  }else {
    return"Pass"
  }
  return
}
function _getDiNucleotideRunsReport(sequence$$46, minRunLength$$1) {
  var report$$1 = "";
  var hasRun$$1 = false;
  var diNucleotides = ["GA", "GT", "GC", "AG", "AT", "AC", "TG", "TA", "TC", "CG", "CA", "CT"];
  var i$$15 = 0;
  var v879 = diNucleotides.length;
  var v426 = i$$15 < v879;
  for(;v426;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v880 = diNucleotides[i$$15]
    }
    var v425 = _hasRunOfBases(sequence$$46, v880, minRunLength$$1);
    if(v425) {
      hasRun$$1 = true;
      var v881 = report$$1 + "Contains run of ";
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v882 = diNucleotides[i$$15]
      }
      var v424 = v881 + v882;
      report$$1 = v424 + "'s; "
    }
    i$$15 = i$$15 + 1;
    var v883 = diNucleotides.length;
    v426 = i$$15 < v883
  }
  if(hasRun$$1) {
    return"Warning: " + report$$1
  }else {
    return"Pass"
  }
  return
}
function _hasRunOfBases(sequence$$47, base$$2, minRunLength$$2) {
  var v1356 = "(?:" + base$$2;
  var v1187 = v1356 + "){";
  var v884 = v1187 + minRunLength$$2;
  var v427 = v884 + ",}";
  var basePattern$$1 = new RegExp(v427, "gi");
  var v885 = sequence$$47.search(basePattern$$1);
  var v429 = v885 != -1;
  if(v429) {
    var v428 = JAMScript.call(sequence$$47.match, sequence$$47, [basePattern$$1]);
    return v428.length
  }else {
    return 0
  }
  return
}
function _getSuitableLengthReport(sequence$$48, minSuitableLength, maxSuitableLength) {
  var report$$2 = "";
  var hasProblem = false;
  var v886 = sequence$$48.length;
  var v431 = v886 < minSuitableLength;
  if(v431) {
    hasProblem = true;
    var v887 = report$$2 + "Contains fewer than ";
    var v430 = v887 + minSuitableLength;
    report$$2 = v430 + " bases; "
  }
  var v888 = sequence$$48.length;
  var v433 = v888 > maxSuitableLength;
  if(v433) {
    hasProblem = true;
    var v889 = report$$2 + "Contains more than ";
    var v432 = v889 + maxSuitableLength;
    report$$2 = v432 + " bases; "
  }
  if(hasProblem) {
    return"Warning: " + report$$2
  }else {
    return"Pass"
  }
  return
}
function _getSuitableGCReport(sequence$$49, percentGCRange, minSuitableGC, maxSuitableGC) {
  var report$$3 = "";
  var hasProblem$$1 = false;
  var lowerCalculated;
  var upperCalculated;
  var rangePattern = new RegExp("([d.]+)D+([d.]+)", "gi");
  var v890 = percentGCRange.search(rangePattern);
  var v434 = v890 != -1;
  if(v434) {
    lowerCalculated = parseFloat($1);
    upperCalculated = parseFloat($2)
  }else {
    lowerCalculated = parseFloat(percentGCRange);
    upperCalculated = parseFloat(percentGCRange)
  }
  var v436 = lowerCalculated < minSuitableGC;
  if(v436) {
    hasProblem$$1 = true;
    var v891 = report$$3 + "%GC is less than ";
    var v435 = v891 + minSuitableGC;
    report$$3 = v435 + "; "
  }
  var v438 = upperCalculated > maxSuitableGC;
  if(v438) {
    hasProblem$$1 = true;
    var v892 = report$$3 + "%GC is greater than ";
    var v437 = v892 + maxSuitableGC;
    report$$3 = v437 + "; "
  }
  if(hasProblem$$1) {
    return"Warning: " + report$$3
  }else {
    return"Pass"
  }
  return
}
function _getSuitableLengthReport(sequence$$50, minSuitableLength$$1, maxSuitableLength$$1) {
  var report$$4 = "";
  var hasProblem$$2 = false;
  var v893 = sequence$$50.length;
  var v440 = v893 < minSuitableLength$$1;
  if(v440) {
    hasProblem$$2 = true;
    var v894 = report$$4 + "Contains fewer than ";
    var v439 = v894 + minSuitableLength$$1;
    report$$4 = v439 + " bases; "
  }
  var v895 = sequence$$50.length;
  var v442 = v895 > maxSuitableLength$$1;
  if(v442) {
    hasProblem$$2 = true;
    var v896 = report$$4 + "Contains more than ";
    var v441 = v896 + maxSuitableLength$$1;
    report$$4 = v441 + " bases; "
  }
  if(hasProblem$$2) {
    return"Warning: " + report$$4
  }else {
    return"Pass"
  }
  return
}
function _getSuitableTmReport(sequence$$51, range$$5, minSuitable, maxSuitable) {
  var report$$5 = "";
  var hasProblem$$3 = false;
  var lowerCalculated$$1;
  var upperCalculated$$1;
  var rangePattern$$1 = new RegExp("([d.]+)D+([d.]+)", "gi");
  var v897 = range$$5.search(rangePattern$$1);
  var v443 = v897 != -1;
  if(v443) {
    lowerCalculated$$1 = parseFloat($1);
    upperCalculated$$1 = parseFloat($2)
  }else {
    lowerCalculated$$1 = parseFloat(range$$5);
    upperCalculated$$1 = parseFloat(range$$5)
  }
  var v445 = lowerCalculated$$1 < minSuitable;
  if(v445) {
    hasProblem$$3 = true;
    var v898 = report$$5 + "Tm is less than ";
    var v444 = v898 + minSuitable;
    report$$5 = v444 + "; "
  }
  var v447 = upperCalculated$$1 > maxSuitable;
  if(v447) {
    hasProblem$$3 = true;
    var v899 = report$$5 + "Tm is greater than ";
    var v446 = v899 + maxSuitable;
    report$$5 = v446 + "; "
  }
  if(hasProblem$$3) {
    return"Warning: " + report$$5
  }else {
    return"Pass"
  }
  return
}
function _getSuitableThreePrimeGC(sequence$$52, minSuitable$$1, maxSuitable$$1) {
  var threePrimeEnd;
  var desiredThreePrimeEndSize = 5;
  var report$$6 = "";
  var gcCounts;
  var hasProblem$$4 = false;
  var v900 = sequence$$52.length;
  var v449 = v900 >= desiredThreePrimeEndSize;
  if(v449) {
    var v901 = sequence$$52.length;
    var v448 = v901 - desiredThreePrimeEndSize;
    threePrimeEnd = sequence$$52.substr(v448, 5)
  }else {
    threePrimeEnd = sequence$$52
  }
  var v450 = _getBaseCount(threePrimeEnd, "g");
  var v451 = _getBaseCount(threePrimeEnd, "c");
  gcCounts = v450 + v451;
  var v453 = gcCounts < minSuitable$$1;
  if(v453) {
    hasProblem$$4 = true;
    var v1357 = report$$6 + "There are less than ";
    var v1188 = v1357 + minSuitable$$1;
    var v902 = v1188 + " G's or C's in the last ";
    var v903 = threePrimeEnd.length;
    var v452 = v902 + v903;
    report$$6 = v452 + " bases; "
  }
  var v455 = gcCounts > maxSuitable$$1;
  if(v455) {
    hasProblem$$4 = true;
    var v1358 = report$$6 + "There are more than ";
    var v1189 = v1358 + maxSuitable$$1;
    var v904 = v1189 + " G's or C's in the last ";
    var v905 = threePrimeEnd.length;
    var v454 = v904 + v905;
    report$$6 = v454 + " bases; "
  }
  if(hasProblem$$4) {
    return"Warning: " + report$$6
  }else {
    return"Pass"
  }
  return
}
function _getSelfComplementarityReport(sequence$$53, maxContig, maxPercentIdent) {
  var matchScore = 1;
  var mismatchScore = -1;
  var gapPenalty = 99;
  var beginGapPenalty = 0;
  var endGapPenalty = 0;
  var returnHash = {};
  returnHash["report"] = "";
  returnHash["upper"] = "";
  returnHash["lower"] = "";
  returnHash["divider"] = "";
  var report$$7 = "";
  var hasProblem$$5 = false;
  var sequenceLength = sequence$$53.length;
  var matrix = new Complementarity;
  JAMScript.call(matrix.setMatch, matrix, [matchScore]);
  JAMScript.call(matrix.setMismatch, matrix, [mismatchScore]);
  var scoreSet = new ScoreSet;
  JAMScript.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, beginGapPenalty, endGapPenalty]);
  var rev = reverse(sequence$$53);
  sequence$$53 = JAMScript.call(sequence$$53.match, sequence$$53, [/./g]);
  rev = JAMScript.call(rev.match, rev, [/./g]);
  alignment = new AlignPairQuad;
  JAMScript.call(alignment.initializeMatrix, alignment, [sequence$$53, rev, scoreSet]);
  JAMScript.call(alignment.fillMatrix, alignment, []);
  JAMScript.call(alignment.align, alignment, []);
  var v456 = JAMScript.call(alignment.getAlignedM, alignment, []);
  var seqAligned = v456.replace(/\-/g, " ");
  var v457 = JAMScript.call(alignment.getAlignedN, alignment, []);
  var revAligned = v457.replace(/\-/g, " ");
  var score = alignment.score;
  var divider = new Array;
  var maxContiguous = 0;
  var totalMatches = 0;
  var contiguous = 0;
  var i$$16 = 0;
  var v906 = seqAligned.length;
  var v460 = i$$16 < v906;
  for(;v460;) {
    var v1190 = seqAligned.charAt(i$$16);
    var v1191 = revAligned.charAt(i$$16);
    var v907 = JAMScript.call(scoreSet.getScore, scoreSet, [v1190, v1191]);
    var v458 = v907 == matchScore;
    if(v458) {
      divider.push("|");
      contiguous = contiguous + 1;
      totalMatches = totalMatches + 1
    }else {
      divider.push(" ");
      contiguous = 0
    }
    var v459 = contiguous > maxContiguous;
    if(v459) {
      maxContiguous = contiguous
    }
    i$$16 = i$$16 + 1;
    var v908 = seqAligned.length;
    v460 = i$$16 < v908
  }
  var v462 = maxContiguous > maxContig;
  if(v462) {
    hasProblem$$5 = true;
    var v909 = report$$7 + "There are more than ";
    var v461 = v909 + maxContig;
    report$$7 = v461 + " self-annealing bases in a row; "
  }
  var v1192 = totalMatches / sequenceLength;
  var v910 = v1192 * 100;
  var v464 = v910 > maxPercentIdent;
  if(v464) {
    hasProblem$$5 = true;
    var v911 = report$$7 + "More than ";
    var v463 = v911 + maxPercentIdent;
    report$$7 = v463 + " percent of the bases are self-annealing; "
  }
  if(hasProblem$$5) {
    report$$7 = "Warning: " + report$$7
  }else {
    report$$7 = "Pass"
  }
  returnHash["report"] = report$$7;
  returnHash["upper"] = seqAligned;
  returnHash["lower"] = revAligned;
  var v465 = returnHash;
  var v1557 = divider.join("");
  v465["divider"] = v1557;
  return returnHash
}
function _getHairpinReport(sequence$$54, maxContig$$1, maxPercentIdent$$1) {
  var upper = sequence$$54;
  upper = JAMScript.call(upper.match, upper, [/./g]);
  var loop = "";
  var lower = new Array;
  var returnHash$$1 = {};
  returnHash$$1["report"] = "";
  returnHash$$1["upper"] = "";
  returnHash$$1["lower"] = "";
  returnHash$$1["divider"] = "";
  var topScore = 0;
  var score$$1;
  var u;
  var l;
  var topScoreUpper = sequence$$54;
  var topScoreLower = "";
  var topScoreLoop = "";
  var matchScore$$1 = 1;
  var mismatchScore$$1 = -1;
  var gapPenalty$$1 = 99;
  var beginGapPenalty$$1 = 0;
  var endGapPenalty$$1 = 0;
  var report$$8 = "";
  var hasProblem$$6 = false;
  var sequenceLength$$1 = sequence$$54.length;
  var matrix$$1 = new Complementarity;
  JAMScript.call(matrix$$1.setMatch, matrix$$1, [matchScore$$1]);
  JAMScript.call(matrix$$1.setMismatch, matrix$$1, [mismatchScore$$1]);
  var scoreSet$$1 = new ScoreSet;
  JAMScript.call(scoreSet$$1.setScoreSetParam, scoreSet$$1, [matrix$$1, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1]);
  var v912 = upper.length;
  var v473 = v912 > 0;
  for(;v473;) {
    score$$1 = 0;
    var v466 = loop == "";
    if(v466) {
      loop = upper.pop()
    }else {
      lower.push(loop);
      loop = ""
    }
    var v467 = upper.length;
    u = v467 - 1;
    var v468 = lower.length;
    l = v468 - 1;
    var v913 = u >= 0;
    if(v913) {
      v913 = l >= 0
    }
    var v471 = v913;
    for(;v471;) {
      var v469 = score$$1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v914 = upper[u]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v915 = lower[l]
      }
      var v470 = JAMScript.call(scoreSet$$1.getScore, scoreSet$$1, [v914, v915]);
      score$$1 = v469 + v470;
      u = u - 1;
      l = l - 1;
      var v916 = u >= 0;
      if(v916) {
        v916 = l >= 0
      }
      v471 = v916
    }
    var v472 = score$$1 > topScore;
    if(v472) {
      topScore = score$$1;
      topScoreUpper = upper.join("");
      topScoreLower = lower.join("");
      topScoreLoop = loop
    }
    var v917 = upper.length;
    v473 = v917 > 0
  }
  var v474 = topScoreUpper.length;
  var v475 = topScoreLower.length;
  var upperLowerDiff = v474 - v475;
  var v479 = upperLowerDiff > 0;
  if(v479) {
    var i$$17 = 0;
    var v476 = i$$17 < upperLowerDiff;
    for(;v476;) {
      topScoreLower = " " + topScoreLower;
      i$$17 = i$$17 + 1;
      v476 = i$$17 < upperLowerDiff
    }
  }else {
    var v478 = upperLowerDiff < 0;
    if(v478) {
      i$$17 = upperLowerDiff;
      var v477 = i$$17 < 0;
      for(;v477;) {
        topScoreUpper = " " + topScoreUpper;
        i$$17 = i$$17 + 1;
        v477 = i$$17 < 0
      }
    }
  }
  var maxContiguous$$1 = 0;
  var totalMatches$$1 = 0;
  var contiguous$$1 = 0;
  var divider$$1 = new Array;
  i$$17 = 0;
  var v918 = topScoreUpper.length;
  var v482 = i$$17 < v918;
  for(;v482;) {
    var v1193 = topScoreUpper.charAt(i$$17);
    var v1194 = topScoreLower.charAt(i$$17);
    var v919 = JAMScript.call(scoreSet$$1.getScore, scoreSet$$1, [v1193, v1194]);
    var v480 = v919 == matchScore$$1;
    if(v480) {
      divider$$1.push("|");
      contiguous$$1 = contiguous$$1 + 1;
      totalMatches$$1 = totalMatches$$1 + 1
    }else {
      divider$$1.push(" ");
      contiguous$$1 = 0
    }
    var v481 = contiguous$$1 > maxContiguous$$1;
    if(v481) {
      maxContiguous$$1 = contiguous$$1
    }
    i$$17 = i$$17 + 1;
    var v920 = topScoreUpper.length;
    v482 = i$$17 < v920
  }
  var v484 = maxContiguous$$1 > maxContig$$1;
  if(v484) {
    hasProblem$$6 = true;
    var v921 = report$$8 + "There are more than ";
    var v483 = v921 + maxContig$$1;
    report$$8 = v483 + " hairpin bases in a row; "
  }
  var v1195 = totalMatches$$1 / sequenceLength$$1;
  var v922 = v1195 * 100;
  var v486 = v922 > maxPercentIdent$$1;
  if(v486) {
    hasProblem$$6 = true;
    var v923 = report$$8 + "More than ";
    var v485 = v923 + maxPercentIdent$$1;
    report$$8 = v485 + " percent of the bases are in a hairpin; "
  }
  if(hasProblem$$6) {
    report$$8 = "Warning: " + report$$8
  }else {
    report$$8 = "Pass"
  }
  var v487 = topScoreLoop == "";
  if(v487) {
    topScoreLoop = ")"
  }
  returnHash$$1["report"] = report$$8;
  returnHash$$1["upper"] = topScoreUpper;
  var v488 = returnHash$$1;
  var v924 = divider$$1.join("");
  v488["divider"] = v924 + topScoreLoop;
  returnHash$$1["lower"] = topScoreLower;
  return returnHash$$1
}
function getScore(r1$$1, r2) {
  var v489 = this.scoringMatrix;
  return JAMScript.call(v489.scoringMatrix_getScore, v489, [r1$$1, r2])
}
function setScoreSetParam(scoringMatrix, gapPenalty$$2, beginGapPenalty$$2, endGapPenalty$$2) {
  this.scoringMatrix = scoringMatrix;
  this.gap = gapPenalty$$2;
  this.beginGap = beginGapPenalty$$2;
  this.endGap = endGapPenalty$$2;
  return
}
function ScoreSet() {
  this.useBeginGapTop = true;
  this.useBeginGapLeft = true;
  this.useEndGapBottom = true;
  this.useEndGapRight = true;
  return
}
function scoringMatrix_getScore(r1$$2, r2$$1) {
  r1$$2 = r1$$2.toLowerCase();
  r2$$1 = r2$$1.toLowerCase();
  var v1196 = r1$$2 == "g";
  if(v1196) {
    v1196 = r2$$1 == "c"
  }
  var v925 = v1196;
  var v1198 = !v925;
  if(v1198) {
    var v1197 = r2$$1 == "g";
    if(v1197) {
      v1197 = r1$$2 == "c"
    }
    v925 = v1197
  }
  var v491 = v925;
  if(v491) {
    return this.match
  }else {
    var v1199 = r1$$2 == "a";
    if(v1199) {
      v1199 = r2$$1 == "t"
    }
    var v926 = v1199;
    var v1201 = !v926;
    if(v1201) {
      var v1200 = r2$$1 == "a";
      if(v1200) {
        v1200 = r1$$2 == "t"
      }
      v926 = v1200
    }
    var v490 = v926;
    if(v490) {
      return this.match
    }else {
      return this.mismatch
    }
  }
  return
}
function ScoringMatrix() {
  return
}
function setMismatch(mismatchScore$$2) {
  this.mismatch = mismatchScore$$2;
  return
}
function setMatch(matchScore$$2) {
  this.match = matchScore$$2;
  return
}
function Complementarity() {
  return
}
function Node() {
  return
}
function initializeMatrix(sequenceOne$$2, sequenceTwo$$2, scoreSet$$2) {
  this.scoreSet = scoreSet$$2;
  this.M = sequenceOne$$2;
  this.N = sequenceTwo$$2;
  this.score = 0;
  var v1202 = this.M;
  var v927 = v1202.length;
  var v492 = v927 + 1;
  var v1558 = new Array(v492);
  this.nodes = v1558;
  var i$$18 = 0;
  var v1203 = this.nodes;
  var v928 = v1203.length;
  var v498 = i$$18 < v928;
  for(;v498;) {
    var v493 = this.nodes;
    var v494 = i$$18;
    var v1359 = this.N;
    var v1204 = v1359.length;
    var v929 = v1204 + 1;
    var v1559 = new Array(v929);
    v493[v494] = v1559;
    var j$$10 = 0;
    var v1360 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1205 = v1360[i$$18]
    }
    var v930 = v1205.length;
    var v497 = j$$10 < v930;
    for(;v497;) {
      var v931 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v495 = v931[i$$18]
      }
      var v496 = j$$10;
      var v1560 = new Node;
      v495[v496] = v1560;
      j$$10 = j$$10 + 1;
      var v1361 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1206 = v1361[i$$18]
      }
      var v932 = v1206.length;
      v497 = j$$10 < v932
    }
    i$$18 = i$$18 + 1;
    var v1207 = this.nodes;
    var v933 = v1207.length;
    v498 = i$$18 < v933
  }
  var v1208 = this.nodes;
  var v934 = v1208[0];
  var v499 = v934[0];
  v499.value = 0;
  i$$18 = 1;
  var v1209 = this.nodes;
  var v935 = v1209.length;
  var v505 = i$$18 < v935;
  for(;v505;) {
    var v936 = this.scoreSet;
    var v502 = v936.useBeginGapLeft;
    if(v502) {
      var v1210 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v937 = v1210[i$$18]
      }
      var v500 = v937[0];
      var v1444 = this.nodes;
      var v1445 = i$$18 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1362 = v1444[v1445]
      }
      var v1211 = v1362[0];
      var v938 = v1211.value;
      var v1212 = this.scoreSet;
      var v939 = v1212.beginGap;
      v500.value = v938 - v939
    }else {
      var v1213 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v940 = v1213[i$$18]
      }
      var v501 = v940[0];
      var v1446 = this.nodes;
      var v1447 = i$$18 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1363 = v1446[v1447]
      }
      var v1214 = v1363[0];
      var v941 = v1214.value;
      var v1215 = this.scoreSet;
      var v942 = v1215.gap;
      v501.value = v941 - v942
    }
    var v1216 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v943 = v1216[i$$18]
    }
    var v503 = v943[0];
    v503.tracebackI = i$$18 - 1;
    var v1217 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v944 = v1217[i$$18]
    }
    var v504 = v944[0];
    v504.tracebackJ = 0;
    i$$18 = i$$18 + 1;
    var v1218 = this.nodes;
    var v945 = v1218.length;
    v505 = i$$18 < v945
  }
  j$$10 = 1;
  var v1364 = this.nodes;
  var v1219 = v1364[0];
  var v946 = v1219.length;
  var v511 = j$$10 < v946;
  for(;v511;) {
    var v947 = this.scoreSet;
    var v508 = v947.useBeginGapTop;
    if(v508) {
      var v1220 = this.nodes;
      var v948 = v1220[0];
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v506 = v948[j$$10]
      }
      var v1448 = this.nodes;
      var v1365 = v1448[0];
      var v1366 = j$$10 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1221 = v1365[v1366]
      }
      var v949 = v1221.value;
      var v1222 = this.scoreSet;
      var v950 = v1222.beginGap;
      v506.value = v949 - v950
    }else {
      var v1223 = this.nodes;
      var v951 = v1223[0];
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v507 = v951[j$$10]
      }
      var v1449 = this.nodes;
      var v1367 = v1449[0];
      var v1368 = j$$10 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1224 = v1367[v1368]
      }
      var v952 = v1224.value;
      var v1225 = this.scoreSet;
      var v953 = v1225.gap;
      v507.value = v952 - v953
    }
    var v1226 = this.nodes;
    var v954 = v1226[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v509 = v954[j$$10]
    }
    v509.tracebackI = 0;
    var v1227 = this.nodes;
    var v955 = v1227[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v510 = v955[j$$10]
    }
    v510.tracebackJ = j$$10 - 1;
    j$$10 = j$$10 + 1;
    var v1369 = this.nodes;
    var v1228 = v1369[0];
    var v956 = v1228.length;
    v511 = j$$10 < v956
  }
  return
}
function dumpMatrix() {
  var v512 = outputWindow.document;
  var v1450 = this.nodes;
  var v1370 = v1450.length;
  var v1229 = "Dynamic programming matrix i=" + v1370;
  var v957 = v1229 + " and j=";
  var v1371 = this.nodes;
  var v1230 = v1371[0];
  var v958 = v1230.length;
  var v513 = v957 + v958;
  JAMScript.call(v512.write, v512, [v513]);
  var v514 = outputWindow.document;
  JAMScript.call(v514.write, v514, ["\n"]);
  var i$$19 = 0;
  var v1231 = this.nodes;
  var v959 = v1231.length;
  var v525 = i$$19 < v959;
  for(;v525;) {
    var j$$11 = 0;
    var v1372 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1232 = v1372[i$$19]
    }
    var v960 = v1232.length;
    var v523 = j$$11 < v960;
    for(;v523;) {
      var v1233 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v961 = v1233[i$$19]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v515 = v961[j$$11]
      }
      var traceI = v515.tracebackI;
      var v1234 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v962 = v1234[i$$19]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v516 = v962[j$$11]
      }
      var traceJ = v516.tracebackJ;
      var v517 = traceI == undefined;
      if(v517) {
        traceI = "u"
      }
      var v518 = traceJ == undefined;
      if(v518) {
        traceJ = "u"
      }
      var v1502 = "(" + i$$19;
      var v1489 = v1502 + ",";
      var v1474 = v1489 + j$$11;
      var v1451 = v1474 + ")[";
      var v1373 = v1451 + traceI;
      var v1235 = v1373 + ",";
      var v963 = v1235 + traceJ;
      var v519 = v963 + "]=";
      var v1374 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1236 = v1374[i$$19]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v964 = v1236[j$$11]
      }
      var v520 = v964.value;
      var output = v519 + v520;
      var v521 = outputWindow.document;
      var v522 = rightNum(output, "", 20, " ");
      JAMScript.call(v521.write, v521, [v522]);
      j$$11 = j$$11 + 1;
      var v1375 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1237 = v1375[i$$19]
      }
      var v965 = v1237.length;
      v523 = j$$11 < v965
    }
    var v524 = outputWindow.document;
    JAMScript.call(v524.write, v524, ["\n"]);
    i$$19 = i$$19 + 1;
    var v1238 = this.nodes;
    var v966 = v1238.length;
    v525 = i$$19 < v966
  }
  var v526 = outputWindow.document;
  JAMScript.call(v526.write, v526, ["\n"]);
  return
}
function fillMatrix() {
  var i$$20 = 1;
  var v1239 = this.nodes;
  var v967 = v1239.length;
  var v572 = i$$20 < v967;
  for(;v572;) {
    var j$$12 = 1;
    var v1376 = this.nodes;
    var v1240 = v1376[0];
    var v968 = v1240.length;
    var v571 = j$$12 < v968;
    for(;v571;) {
      var a$$1;
      var b;
      var c$$1;
      var v1452 = this.nodes;
      var v1377 = v1452.length;
      var v1241 = v1377 - 1;
      var v969 = i$$20 == v1241;
      if(v969) {
        var v1475 = this.nodes;
        var v1453 = v1475[0];
        var v1378 = v1453.length;
        var v1242 = v1378 - 1;
        v969 = j$$12 == v1242
      }
      var v557 = v969;
      if(v557) {
        var v970 = this.scoreSet;
        var v531 = v970.useEndGapRight;
        if(v531) {
          var v1379 = this.nodes;
          var v1380 = i$$20 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1243 = v1379[v1380]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v971 = v1243[j$$12]
          }
          var v527 = v971.value;
          var v972 = this.scoreSet;
          var v528 = v972.endGap;
          a$$1 = v527 - v528
        }else {
          var v1381 = this.nodes;
          var v1382 = i$$20 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1244 = v1381[v1382]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v973 = v1244[j$$12]
          }
          var v529 = v973.value;
          var v974 = this.scoreSet;
          var v530 = v974.gap;
          a$$1 = v529 - v530
        }
        var v975 = this.scoreSet;
        var v536 = v975.useEndGapBottom;
        if(v536) {
          var v1383 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1245 = v1383[i$$20]
          }
          var v1246 = j$$12 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v976 = v1245[v1246]
          }
          var v532 = v976.value;
          var v977 = this.scoreSet;
          var v533 = v977.endGap;
          b = v532 - v533
        }else {
          var v1384 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1247 = v1384[i$$20]
          }
          var v1248 = j$$12 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v978 = v1247[v1248]
          }
          var v534 = v978.value;
          var v979 = this.scoreSet;
          var v535 = v979.gap;
          b = v534 - v535
        }
      }else {
        var v1385 = this.nodes;
        var v1249 = v1385.length;
        var v980 = v1249 - 1;
        var v556 = i$$20 == v980;
        if(v556) {
          var v1386 = this.nodes;
          var v1387 = i$$20 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1250 = v1386[v1387]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v981 = v1250[j$$12]
          }
          var v537 = v981.value;
          var v982 = this.scoreSet;
          var v538 = v982.gap;
          a$$1 = v537 - v538;
          var v983 = this.scoreSet;
          var v543 = v983.useEndGapBottom;
          if(v543) {
            var v1388 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1251 = v1388[i$$20]
            }
            var v1252 = j$$12 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v984 = v1251[v1252]
            }
            var v539 = v984.value;
            var v985 = this.scoreSet;
            var v540 = v985.endGap;
            b = v539 - v540
          }else {
            var v1389 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1253 = v1389[i$$20]
            }
            var v1254 = j$$12 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v986 = v1253[v1254]
            }
            var v541 = v986.value;
            var v987 = this.scoreSet;
            var v542 = v987.gap;
            b = v541 - v542
          }
        }else {
          var v1454 = this.nodes;
          var v1390 = v1454[0];
          var v1255 = v1390.length;
          var v988 = v1255 - 1;
          var v555 = j$$12 == v988;
          if(v555) {
            var v989 = this.scoreSet;
            var v548 = v989.useEndGapRight;
            if(v548) {
              var v1391 = this.nodes;
              var v1392 = i$$20 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1256 = v1391[v1392]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v990 = v1256[j$$12]
              }
              var v544 = v990.value;
              var v991 = this.scoreSet;
              var v545 = v991.endGap;
              a$$1 = v544 - v545
            }else {
              var v1393 = this.nodes;
              var v1394 = i$$20 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1257 = v1393[v1394]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v992 = v1257[j$$12]
              }
              var v546 = v992.value;
              var v993 = this.scoreSet;
              var v547 = v993.gap;
              a$$1 = v546 - v547
            }
            var v1395 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1258 = v1395[i$$20]
            }
            var v1259 = j$$12 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v994 = v1258[v1259]
            }
            var v549 = v994.value;
            var v995 = this.scoreSet;
            var v550 = v995.gap;
            b = v549 - v550
          }else {
            var v1396 = this.nodes;
            var v1397 = i$$20 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1260 = v1396[v1397]
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v996 = v1260[j$$12]
            }
            var v551 = v996.value;
            var v997 = this.scoreSet;
            var v552 = v997.gap;
            a$$1 = v551 - v552;
            var v1398 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1261 = v1398[i$$20]
            }
            var v1262 = j$$12 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v998 = v1261[v1262]
            }
            var v553 = v998.value;
            var v999 = this.scoreSet;
            var v554 = v999.gap;
            b = v553 - v554
          }
        }
      }
      var v1399 = this.nodes;
      var v1400 = i$$20 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1263 = v1399[v1400]
      }
      var v1264 = j$$12 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1000 = v1263[v1264]
      }
      var v558 = v1000.value;
      var v1001 = this.scoreSet;
      var v1265 = this.M;
      var v1266 = i$$20 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1002 = v1265[v1266]
      }
      var v1267 = this.N;
      var v1268 = j$$12 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1003 = v1267[v1268]
      }
      var v559 = JAMScript.call(v1001.getScore, v1001, [v1002, v1003]);
      c$$1 = v558 + v559;
      var v1004 = a$$1 >= b;
      if(v1004) {
        v1004 = a$$1 >= c$$1
      }
      var v570 = v1004;
      if(v570) {
        var v1269 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1005 = v1269[i$$20]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v560 = v1005[j$$12]
        }
        v560.value = a$$1;
        var v1270 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1006 = v1270[i$$20]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v561 = v1006[j$$12]
        }
        v561.tracebackI = i$$20 - 1;
        var v1271 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1007 = v1271[i$$20]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v562 = v1007[j$$12]
        }
        v562.tracebackJ = j$$12
      }else {
        var v1008 = b >= c$$1;
        if(v1008) {
          v1008 = b >= a$$1
        }
        var v569 = v1008;
        if(v569) {
          var v1272 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1009 = v1272[i$$20]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v563 = v1009[j$$12]
          }
          v563.value = b;
          var v1273 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1010 = v1273[i$$20]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v564 = v1010[j$$12]
          }
          v564.tracebackI = i$$20;
          var v1274 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1011 = v1274[i$$20]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v565 = v1011[j$$12]
          }
          v565.tracebackJ = j$$12 - 1
        }else {
          var v1275 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1012 = v1275[i$$20]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v566 = v1012[j$$12]
          }
          v566.value = c$$1;
          var v1276 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1013 = v1276[i$$20]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v567 = v1013[j$$12]
          }
          v567.tracebackI = i$$20 - 1;
          var v1277 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1014 = v1277[i$$20]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v568 = v1014[j$$12]
          }
          v568.tracebackJ = j$$12 - 1
        }
      }
      j$$12 = j$$12 + 1;
      var v1401 = this.nodes;
      var v1278 = v1401[0];
      var v1015 = v1278.length;
      v571 = j$$12 < v1015
    }
    i$$20 = i$$20 + 1;
    var v1279 = this.nodes;
    var v1016 = v1279.length;
    v572 = i$$20 < v1016
  }
  var v1280 = this.nodes;
  var v1455 = this.nodes;
  var v1402 = v1455.length;
  var v1281 = v1402 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v1017 = v1280[v1281]
  }
  var v1456 = this.nodes;
  var v1403 = v1456[0];
  var v1282 = v1403.length;
  var v1018 = v1282 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v573 = v1017[v1018]
  }
  this.score = v573.value;
  return
}
function alignQuad() {
  var v1561 = new Array;
  this.alignedM = v1561;
  var v1562 = new Array;
  this.alignedN = v1562;
  var v1019 = this.nodes;
  var v574 = v1019.length;
  var currentI = v574 - 1;
  var v1283 = this.nodes;
  var v1020 = v1283[0];
  var v575 = v1020.length;
  var currentJ = v575 - 1;
  var v1021 = this.nodes;
  var v1404 = this.nodes;
  var v1284 = v1404.length;
  var v1022 = v1284 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v576 = v1021[v1022]
  }
  var v1405 = this.nodes;
  var v1285 = v1405[0];
  var v1023 = v1285.length;
  var v577 = v1023 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var currentNode = v576[v577]
  }
  var v1286 = currentNode.tracebackI;
  var v1024 = v1286 != undefined;
  if(v1024) {
    var v1287 = currentNode.tracebackJ;
    v1024 = v1287 != undefined
  }
  var v592 = v1024;
  for(;v592;) {
    var v1288 = currentNode.tracebackI;
    var v1289 = currentI - 1;
    var v1025 = v1288 == v1289;
    if(v1025) {
      var v1290 = currentNode.tracebackJ;
      var v1291 = currentJ - 1;
      v1025 = v1290 == v1291
    }
    var v589 = v1025;
    if(v589) {
      var v578 = this.alignedM;
      var v1026 = this.M;
      var v579 = v1026.pop();
      v578.push(v579);
      var v580 = this.alignedN;
      var v1027 = this.N;
      var v581 = v1027.pop();
      v580.push(v581)
    }else {
      var v1028 = currentNode.tracebackJ;
      var v1029 = currentJ - 1;
      var v588 = v1028 == v1029;
      if(v588) {
        var v582 = this.alignedM;
        v582.push("-");
        var v583 = this.alignedN;
        var v1030 = this.N;
        var v584 = v1030.pop();
        v583.push(v584)
      }else {
        var v585 = this.alignedM;
        var v1031 = this.M;
        var v586 = v1031.pop();
        v585.push(v586);
        var v587 = this.alignedN;
        v587.push("-")
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v1032 = this.nodes;
    var v1033 = currentNode.tracebackI;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v590 = v1032[v1033]
    }
    var v591 = currentNode.tracebackJ;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      currentNode = v590[v591]
    }
    var v1292 = currentNode.tracebackI;
    var v1034 = v1292 != undefined;
    if(v1034) {
      var v1293 = currentNode.tracebackJ;
      v1034 = v1293 != undefined
    }
    v592 = v1034
  }
  var v593 = this.alignedM;
  var v1563 = v593.reverse();
  this.alignedM = v1563;
  var v594 = this.alignedN;
  var v1564 = v594.reverse();
  this.alignedN = v1564;
  return
}
function getAlignedM() {
  var v595 = this.alignedM;
  return v595.join("")
}
function getAlignedN() {
  var v596 = this.alignedN;
  return v596.join("")
}
function AlignPairQuad() {
  return
}
new ScoreSet;
var v597 = ScoreSet.prototype;
v597.getScore = getScore;
var v598 = ScoreSet.prototype;
v598.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v599 = ScoringMatrix.prototype;
v599.scoringMatrix_getScore = scoringMatrix_getScore;
var v600 = Complementarity;
var v1565 = new ScoringMatrix;
v600.prototype = v1565;
var v601 = Complementarity.prototype;
v601.setMismatch = setMismatch;
var v602 = Complementarity.prototype;
v602.setMatch = setMatch;
new AlignPairQuad;
var v603 = AlignPairQuad.prototype;
v603.initializeMatrix = initializeMatrix;
var v604 = AlignPairQuad.prototype;
v604.fillMatrix = fillMatrix;
var v605 = AlignPairQuad.prototype;
v605.align = alignQuad;
var v606 = AlignPairQuad.prototype;
v606.getAlignedM = getAlignedM;
var v607 = AlignPairQuad.prototype;
v607.getAlignedN = getAlignedN;
var v608 = AlignPairQuad.prototype;
v608.dumpMatrix = dumpMatrix;
JAMScript.set(document, "onload", v2);
var v609 = document.getElementById("submitbtn");
JAMScript.set(v609, "onclick", v3);
var v610 = document.getElementById("clearbtn");
JAMScript.set(v610, "onclick", v4);

