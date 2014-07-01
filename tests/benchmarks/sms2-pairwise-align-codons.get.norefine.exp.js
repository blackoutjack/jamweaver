function v4() {
  var v1251 = document.forms;
  var v988 = v1251[0];
  var v569 = v988.elements;
  var v5 = v569[0];
  v5.value = " ";
  var v1252 = document.forms;
  var v989 = v1252[0];
  var v570 = v989.elements;
  var v6 = v570[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    pairwiseAlignCodons(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v2() {
  var v571 = document.main_form;
  var v8 = v571.main_submit;
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
  var v572 = arrayOfSequences.length;
  var v10 = v572 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v573 = arrayOfTitles.length;
  var v12 = i$$1 < v573;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1253 = arrayOfTitles[i$$1]
    }
    var v990 = v1253.search(/\S/);
    var v574 = v990 == -1;
    var v992 = !v574;
    if(v992) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1399 = arrayOfSequences[i$$1]
      }
      var v1254 = v1399.search(/\S/);
      var v991 = v1254 == -1;
      var v1256 = !v991;
      if(v1256) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1400 = arrayOfSequences[i$$1]
        }
        var v1255 = v1400.length;
        v991 = v1255 != lengthOfAlign
      }
      v574 = v991
    }
    var v11 = v574;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v575 = arrayOfTitles.length;
    v12 = i$$1 < v575
  }
  return true
}
function checkCodonTable(codonTable) {
  var v993 = codonTable.search(/AmAcid/);
  var v576 = v993 == -1;
  var v995 = !v576;
  if(v995) {
    var v1257 = codonTable.search(/Codon/);
    var v994 = v1257 == -1;
    var v1259 = !v994;
    if(v1259) {
      var v1401 = codonTable.search(/Number/);
      var v1258 = v1401 == -1;
      var v1403 = !v1258;
      if(v1403) {
        var v1487 = codonTable.search(/\/1000/);
        var v1402 = v1487 == -1;
        var v1489 = !v1402;
        if(v1489) {
          var v1488 = codonTable.search(/Fraction\s*\.\./);
          v1402 = v1488 == -1
        }
        v1258 = v1402
      }
      v994 = v1258
    }
    v576 = v994
  }
  var v13 = v576;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v996 = formElement.value;
  var v577 = v996.search(/\S/);
  var v14 = v577 == -1;
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
  var v578 = arrayOfPatterns.length;
  var v17 = z$$2 < v578;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v997 = arrayOfPatterns[z$$2]
    }
    var v579 = v997.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v579 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v998 = arrayOfPatterns[z$$2]
    }
    var v580 = moreExpressionCheck(v998);
    var v16 = v580 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v581 = arrayOfPatterns.length;
    v17 = z$$2 < v581
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v582 = arrayOfPatterns.length;
  var v26 = j < v582;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1260 = arrayOfPatterns[j]
    }
    var v999 = v1260.match(/\/.+\//);
    var v583 = v999 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1606 = eval("introspect(JAMScript.introspectors.processAll) { " + v583 + " }")
    }else {
      var v1606 = JAMScript.call(eval, null, [v583])
    }
    v20[v21] = v1606;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1000 = arrayOfPatterns[j]
    }
    var v584 = v1000.match(/=[a-zA-Z\*]/);
    var v1607 = v584.toString();
    v22[v23] = v1607;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v585 = geneticCodeMatchResult[j]
    }
    var v1608 = v585.replace(/=/g, "");
    v24[v25] = v1608;
    j = j + 1;
    var v586 = arrayOfPatterns.length;
    v26 = j < v586
  }
  var i$$2 = 0;
  var v1001 = testSequence.length;
  var v587 = v1001 - 3;
  var v33 = i$$2 <= v587;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v588 = geneticCodeMatchExp.length;
    var v31 = j < v588;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1002 = geneticCodeMatchExp[j]
      }
      var v589 = codon.search(v1002);
      var v30 = v589 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v590 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v590 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v591 = geneticCodeMatchExp.length;
      v31 = j < v591
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v1003 = testSequence.length;
    var v592 = v1003 - 3;
    v33 = i$$2 <= v592
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v593 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v593;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1004 = arrayOfPatterns$$1[z$$3]
    }
    var v594 = v1004.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v594 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v595 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v595
  }
  var i$$3 = 0;
  var v596 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v596;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1005 = arrayOfPatterns$$1[i$$3]
    }
    var v597 = "[" + v1005;
    var v36 = v597 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v598 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v598;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1006 = arrayOfPatterns$$1[j$$1]
      }
      var v599 = v1006.search(re);
      var v37 = v599 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v600 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v600
    }
    i$$3 = i$$3 + 1;
    var v601 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v601
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v602 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v602;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1007 = arrayOfPatterns$$2[z$$4]
    }
    var v603 = v1007.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v603 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1008 = arrayOfPatterns$$2[z$$4]
    }
    var v604 = moreExpressionCheck(v1008);
    var v41 = v604 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v605 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v605
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v1261 = getSequenceFromFasta(text$$7);
  var v1009 = v1261.replace(/[^A-Za-z]/g, "");
  var v606 = v1009.length;
  var v44 = v606 > maxInput;
  if(v44) {
    var v607 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v607 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v608 = text$$8.length;
  var v46 = v608 > maxInput$$1;
  if(v46) {
    var v609 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v609 + " characters.";
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
  var v610 = alignArray.length;
  var v53 = v610 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v611 = alignArray.length;
  var v55 = i$$4 < v611;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1010 = alignArray[i$$4]
    }
    var v612 = v1010.search(/[^\s]+\s/);
    var v54 = v612 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v613 = alignArray.length;
    v55 = i$$4 < v613
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
  var v614 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v614 != -1;
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
  var v615 = sequence$$2.length;
  var v59 = "&gt;results for " + v615;
  var stringToReturn = v59 + " residue sequence ";
  var v616 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v616 != -1;
  if(v61) {
    var v617 = stringToReturn + '"';
    var v60 = v617 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v618 = stringToReturn + ' starting "';
  var v619 = sequence$$2.substring(0, 10);
  var v62 = v618 + v619;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v620 = sequenceOne.length;
  var v63 = "Search results for " + v620;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v621 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v621 != -1;
  if(v65) {
    var v622 = stringToReturn$$1 + '"';
    var v64 = v622 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v623 = stringToReturn$$1 + ' starting "';
  var v624 = sequenceOne.substring(0, 10);
  var v66 = v623 + v624;
  stringToReturn$$1 = v66 + '"\n';
  var v625 = stringToReturn$$1 + "and ";
  var v626 = sequenceTwo.length;
  var v67 = v625 + v626;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v627 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v627 != -1;
  if(v69) {
    var v628 = stringToReturn$$1 + '"';
    var v68 = v628 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v629 = stringToReturn$$1 + ' starting "';
  var v630 = sequenceTwo.substring(0, 10);
  var v70 = v629 + v630;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v631 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v631;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1262 = arrayOfPatterns$$3[j$$2]
    }
    var v1011 = v1262.match(/\/.+\//);
    var v632 = v1011 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1609 = eval("introspect(JAMScript.introspectors.processAll) { " + v632 + " }")
    }else {
      var v1609 = JAMScript.call(eval, null, [v632])
    }
    v73[v74] = v1609;
    j$$2 = j$$2 + 1;
    var v633 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v633
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v634 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v634;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1012 = arrayOfPatterns$$4[j$$3]
    }
    var v635 = v1012.match(/=[a-zA-Z\*]/);
    var v1610 = v635.toString();
    v77[v78] = v1610;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v636 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1611 = v636.replace(/=/g, "");
    v79[v80] = v1611;
    j$$3 = j$$3 + 1;
    var v637 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v637
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v638 = sequence$$3.length;
  var v82 = "Results for " + v638;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v639 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v639 != -1;
  if(v84) {
    var v640 = stringToReturn$$2 + '"';
    var v83 = v640 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v641 = stringToReturn$$2 + ' starting "';
  var v642 = sequence$$3.substring(0, 10);
  var v85 = v641 + v642;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v1013 = "Results for " + topology;
  var v643 = v1013 + " ";
  var v644 = sequence$$4.length;
  var v87 = v643 + v644;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v645 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v645 != -1;
  if(v89) {
    var v646 = stringToReturn$$3 + '"';
    var v88 = v646 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v647 = stringToReturn$$3 + ' starting "';
  var v648 = sequence$$4.substring(0, 10);
  var v90 = v647 + v648;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v649 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v649;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v650 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v650 != -1;
  if(v94) {
    var v651 = stringToReturn$$4 + '"';
    var v93 = v651 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v652 = stringToReturn$$4 + ' starting "';
  var v653 = sequenceOne$$1.substring(0, 10);
  var v95 = v652 + v653;
  stringToReturn$$4 = v95 + '"\n';
  var v654 = stringToReturn$$4 + "and ";
  var v655 = sequenceTwo$$1.length;
  var v96 = v654 + v655;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v656 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v656 != -1;
  if(v98) {
    var v657 = stringToReturn$$4 + '"';
    var v97 = v657 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v658 = stringToReturn$$4 + ' starting "';
  var v659 = sequenceTwo$$1.substring(0, 10);
  var v99 = v658 + v659;
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
    var v660 = Math.random();
    var v661 = components.length;
    var v101 = v660 * v661;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v662 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v662 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v663 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v663 != -1;
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
  var v1014 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v664 = v1014 != -1;
  var v1016 = !v664;
  if(v1016) {
    var v1263 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v1015 = v1263 != -1;
    var v1265 = !v1015;
    if(v1265) {
      var v1404 = expressionToCheck.search(/\[\]/);
      var v1264 = v1404 != -1;
      var v1406 = !v1264;
      if(v1406) {
        var v1490 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v1405 = v1490 != -1;
        var v1492 = !v1405;
        if(v1492) {
          var v1520 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1491 = v1520 != -1;
          var v1522 = !v1491;
          if(v1522) {
            var v1541 = expressionToCheck.search(/\|\|/);
            var v1521 = v1541 != -1;
            var v1543 = !v1521;
            if(v1543) {
              var v1555 = expressionToCheck.search(/\/\|/);
              var v1542 = v1555 != -1;
              var v1557 = !v1542;
              if(v1557) {
                var v1567 = expressionToCheck.search(/\|\//);
                var v1556 = v1567 != -1;
                var v1569 = !v1556;
                if(v1569) {
                  var v1577 = expressionToCheck.search(/\[.\]/);
                  var v1568 = v1577 != -1;
                  var v1579 = !v1568;
                  if(v1579) {
                    var v1584 = expressionToCheck.search(/\</);
                    var v1578 = v1584 != -1;
                    var v1586 = !v1578;
                    if(v1586) {
                      var v1585 = expressionToCheck.search(/\>/);
                      v1578 = v1585 != -1
                    }
                    v1568 = v1578
                  }
                  v1556 = v1568
                }
                v1542 = v1556
              }
              v1521 = v1542
            }
            v1491 = v1521
          }
          v1405 = v1491
        }
        v1264 = v1405
      }
      v1015 = v1264
    }
    v664 = v1015
  }
  var v106 = v664;
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
    var v1625 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1625[2], v1625[1], v1625[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v1266 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1017 = v1266 + "<head>\n";
  var v665 = v1017 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v665 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v1599 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1595 = v1599 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1591 = v1595 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1587 = v1591 + "div.info {font-weight: bold}\n";
    var v1580 = v1587 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1570 = v1580 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1558 = v1570 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1544 = v1558 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1523 = v1544 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1493 = v1523 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1407 = v1493 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1267 = v1407 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v1018 = v1267 + "td.many {color: #000000}\n";
    var v666 = v1018 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v666 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v1603 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1600 = v1603 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1596 = v1600 + "div.title {display: none}\n";
    var v1592 = v1596 + "div.info {font-weight: bold}\n";
    var v1588 = v1592 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1581 = v1588 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1571 = v1581 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1559 = v1571 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1545 = v1559 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1524 = v1545 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1494 = v1524 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1408 = v1494 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1268 = v1408 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v1019 = v1268 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v667 = v1019 + "img {display: none}\n";
    var v116 = v667 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v1269 = "</head>\n" + '<body class="main">\n';
  var v1020 = v1269 + '<div class="title">';
  var v668 = v1020 + title$$6;
  var v118 = v668 + " results</div>\n";
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
    var v1626 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1626[2], v1626[1], v1626[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v1270 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1021 = v1270 + "<head>\n";
  var v669 = v1021 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v669 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v1601 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1597 = v1601 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1593 = v1597 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1589 = v1593 + "div.info {font-weight: bold}\n";
    var v1582 = v1589 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1572 = v1582 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1560 = v1572 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1546 = v1560 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1525 = v1546 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1495 = v1525 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1409 = v1495 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1271 = v1409 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v1022 = v1271 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v670 = v1022 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v670 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v1605 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1604 = v1605 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1602 = v1604 + "div.title {display: none}\n";
    var v1598 = v1602 + "div.info {font-weight: bold}\n";
    var v1594 = v1598 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1590 = v1594 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1583 = v1590 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1573 = v1583 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1561 = v1573 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1547 = v1561 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1526 = v1547 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1496 = v1526 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1410 = v1496 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1272 = v1410 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v1023 = v1272 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v671 = v1023 + "img {display: none}\n";
    var v124 = v671 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v1273 = "</head>\n" + '<body class="main">\n';
  var v1024 = v1273 + '<div class="title">';
  var v672 = v1024 + title$$8;
  var v126 = v672 + " results</div>\n";
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
  var v673 = dnaSequence$$1.search(/./);
  var v127 = v673 != -1;
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
  var v674 = testArray[0];
  var v131 = v674 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v675 = testString.search(re$$2);
  var v132 = v675 == -1;
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
  var v676 = testNum.toFixed(3);
  var v135 = v676 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v677 = testNum.toPrecision(5);
  var v136 = v677 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v678 = theNumber$$1.search(/\d/);
  var v137 = v678 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v1025 = emblFile.search(/ID/);
  var v679 = v1025 == -1;
  var v1027 = !v679;
  if(v1027) {
    var v1274 = emblFile.search(/AC/);
    var v1026 = v1274 == -1;
    var v1276 = !v1026;
    if(v1276) {
      var v1411 = emblFile.search(/DE/);
      var v1275 = v1411 == -1;
      var v1413 = !v1275;
      if(v1413) {
        var v1412 = emblFile.search(/SQ/);
        v1275 = v1412 == -1
      }
      v1026 = v1275
    }
    v679 = v1026
  }
  var v138 = v679;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v680 = theNumber$$2.search(/\d/);
  var v139 = v680 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v681 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v681 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v682 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v682 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v683 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v683 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v1028 = genBankFile.search(/LOCUS/);
  var v684 = v1028 == -1;
  var v1030 = !v684;
  if(v1030) {
    var v1277 = genBankFile.search(/DEFINITION/);
    var v1029 = v1277 == -1;
    var v1279 = !v1029;
    if(v1279) {
      var v1414 = genBankFile.search(/ACCESSION/);
      var v1278 = v1414 == -1;
      var v1416 = !v1278;
      if(v1416) {
        var v1415 = genBankFile.search(/ORIGIN/);
        v1278 = v1415 == -1
      }
      v1029 = v1278
    }
    v684 = v1029
  }
  var v144 = v684;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1031 = genBankFile$$1.search(/LOCUS/);
  var v685 = v1031 == -1;
  var v1033 = !v685;
  if(v1033) {
    var v1280 = genBankFile$$1.search(/DEFINITION/);
    var v1032 = v1280 == -1;
    var v1282 = !v1032;
    if(v1282) {
      var v1417 = genBankFile$$1.search(/ACCESSION/);
      var v1281 = v1417 == -1;
      var v1419 = !v1281;
      if(v1419) {
        var v1418 = genBankFile$$1.search(/ORIGIN/);
        v1281 = v1418 == -1
      }
      v1032 = v1281
    }
    v685 = v1032
  }
  var v145 = v685;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v686 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v686 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v1034 = emblFile$$1.search(/ID/);
  var v687 = v1034 == -1;
  var v1036 = !v687;
  if(v1036) {
    var v1283 = emblFile$$1.search(/AC/);
    var v1035 = v1283 == -1;
    var v1285 = !v1035;
    if(v1285) {
      var v1420 = emblFile$$1.search(/DE/);
      var v1284 = v1420 == -1;
      var v1422 = !v1284;
      if(v1422) {
        var v1421 = emblFile$$1.search(/SQ/);
        v1284 = v1421 == -1
      }
      v1035 = v1284
    }
    v687 = v1035
  }
  var v147 = v687;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v688 = emblFile$$1.search(/^FT/m);
  var v148 = v688 == -1;
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
    var v689 = basePerLine / groupSize;
    var v153 = j$$6 <= v689;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v690 = k + i$$5;
        var v151 = text$$10.charAt(v690);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v691 = basePerLine / groupSize;
      v153 = j$$6 <= v691
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
    var v692 = adjustment < 0;
    if(v692) {
      v692 = adjusted >= 0
    }
    var v157 = v692;
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
    var v693 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v693;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v694 = i$$6 + k$$1;
        var v158 = v694 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v695 = k$$1 + i$$6;
        var v160 = text$$12.charAt(v695);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v696 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v696, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v697 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v697
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v1286 = adjustNumbering(lineNum, numberingAdjustment);
      var v1037 = rightNum(v1286, "", 8, tabIn$$3);
      var v698 = v1037 + lineOfText$$1;
      var v168 = v698 + "\n";
      JAMScript.call(v167.write, v167, [v168]);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v1287 = adjustNumbering(lineNum, numberingAdjustment);
        var v1038 = rightNum(v1287, "", 8, tabIn$$3);
        var v1039 = complement(lineOfText$$1);
        var v699 = v1038 + v1039;
        var v170 = v699 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v171 = outputWindow.document;
        JAMScript.call(v171.write, v171, ["\n"])
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v1040 = lineOfText$$1;
        var v1041 = adjustNumbering(i$$6, numberingAdjustment);
        var v700 = v1040 + v1041;
        var v174 = v700 + "\n";
        JAMScript.call(v173.write, v173, [v174]);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v1042 = complement(lineOfText$$1);
          var v1043 = adjustNumbering(i$$6, numberingAdjustment);
          var v701 = v1042 + v1043;
          var v176 = v701 + "\n";
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
            var v702 = complement(lineOfText$$1);
            var v184 = v702 + "\n";
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
    var v703 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v703;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v704 = i$$7 + k$$2;
        var v191 = v704 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v705 = k$$2 + i$$7;
        var v193 = text$$13.charAt(v705);
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
      var v706 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v706
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v1044 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v707 = v1044 + lineOfText$$2;
      var v201 = v707 + "\n";
      JAMScript.call(v200.write, v200, [v201])
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v708 = lineOfText$$2 + i$$7;
        var v203 = v708 + "\n";
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
  var v1045 = sequence$$13.length;
  var v709 = v1045 <= firstIndexToMutate;
  var v1047 = !v709;
  if(v1047) {
    var v1046 = lastIndexToMutate < 0;
    var v1288 = !v1046;
    if(v1288) {
      v1046 = lastIndexToMutate <= firstIndexToMutate
    }
    v709 = v1046
  }
  var v212 = v709;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v710 = Math.random();
    var v213 = v710 * maxNum;
    randNum = Math.floor(v213);
    var v711 = randNum < firstIndexToMutate;
    var v1048 = !v711;
    if(v1048) {
      v711 = randNum > lastIndexToMutate
    }
    var v214 = v711;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v712 = Math.random();
      var v713 = components$$1.length;
      var v215 = v712 * v713;
      componentsIndex = Math.round(v215);
      var v714 = components$$1.length;
      var v216 = componentsIndex == v714;
      if(v216) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v715 = components$$1[componentsIndex]
      }
      var v217 = v715 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v716 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v717 = components$$1[componentsIndex]
    }
    var v218 = v716 + v717;
    var v718 = randNum + 1;
    var v719 = sequence$$13.length;
    var v219 = sequence$$13.substring(v718, v719);
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
    var v720 = Math.random();
    var v721 = components$$2.length;
    var v223 = v720 * v721;
    tempNum$$1 = Math.floor(v223);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v722 = sequence$$14.length;
    var v226 = v722 == 60;
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
    var v1289 = sequence$$15.length;
    var v1049 = v1289 - lookAhead;
    var v1050 = sequence$$15.length;
    var v723 = sequence$$15.substring(v1049, v1050);
    var v231 = v723 + sequence$$15;
    var v232 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAMScript.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v235 = outputWindow.document;
  var v1290 = '<tr><td class="title" width="200px">' + "Site:";
  var v1051 = v1290 + '</td><td class="title">';
  var v724 = v1051 + "Positions:";
  var v236 = v724 + "</td></tr>\n";
  JAMScript.call(v235.write, v235, [v236]);
  var i$$9 = 0;
  var v725 = arrayOfItems.length;
  var v252 = i$$9 < v725;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v726 = arrayOfItems[i$$9]
    }
    var v237 = v726.match(/\/.+\//);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1291 = arrayOfItems[i$$9]
    }
    var v1052 = v1291.match(/\)\D*\d+/);
    var v727 = v1052.toString();
    var v238 = v727.replace(/\)\D*/, "");
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v728 = matchPosition >= lowerLimit;
      if(v728) {
        v728 = matchPosition < upperLimit
      }
      var v242 = v728;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v729 = matchPosition - shiftValue;
        var v241 = v729 + 1;
        tempString$$1 = v240 + v241
      }
      var v730 = matchExp.lastIndex;
      var v1053 = RegExp.lastMatch;
      var v731 = v1053.length;
      var v243 = v730 - v731;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v732 = tempString$$1.search(/\d/);
    var v245 = v732 != -1;
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
    var v1548 = '<tr><td class="' + backGroundClass;
    var v1527 = v1548 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1574 = arrayOfItems[i$$9]
    }
    var v1562 = v1574.match(/\([^\(]+\)/);
    var v1549 = v1562.toString();
    var v1528 = v1549.replace(/\(|\)/g, "");
    var v1497 = v1527 + v1528;
    var v1423 = v1497 + '</td><td class="';
    var v1292 = v1423 + backGroundClass;
    var v1054 = v1292 + '">';
    var v733 = v1054 + tempString$$1;
    var v251 = v733 + "</td></tr>\n";
    JAMScript.call(v250.write, v250, [v251]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v734 = arrayOfItems.length;
    v252 = i$$9 < v734
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
  var v1498 = '<tr><td class="title">' + "Pattern:";
  var v1424 = v1498 + '</td><td class="title">';
  var v1293 = v1424 + "Times found:";
  var v1055 = v1293 + '</td><td class="title">';
  var v735 = v1055 + "Percentage:";
  var v256 = v735 + "</td></tr>\n";
  JAMScript.call(v255.write, v255, [v256]);
  var i$$10 = 0;
  var v736 = arrayOfItems$$1.length;
  var v265 = i$$10 < v736;
  for(;v265;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v737 = arrayOfItems$$1[i$$10]
    }
    var v257 = v737.match(/\/[^\/]+\//);
    var matchExp$$1 = v257 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v738 = sequence$$16.search(matchExp$$1);
    var v259 = v738 != -1;
    if(v259) {
      var v258 = sequence$$16.match(matchExp$$1);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v1056 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1425 = arrayOfItems$$1[i$$10]
    }
    var v1294 = v1425.match(/\d+/);
    var v1057 = parseFloat(v1294);
    var v739 = v1056 - v1057;
    var v262 = v739 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v740 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1295 = arrayOfItems$$1[i$$10]
      }
      var v1058 = v1295.match(/\d+/);
      var v741 = parseFloat(v1058);
      var v261 = v740 - v741;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1575 = arrayOfItems$$1[i$$10]
    }
    var v1563 = v1575.match(/\([^\(]+\)\b/);
    var v1550 = v1563.toString();
    var v1529 = v1550.replace(/\(|\)/g, "");
    var v1499 = "<tr><td>" + v1529;
    var v1426 = v1499 + "</td><td>";
    var v1296 = v1426 + tempNumber;
    var v1059 = v1296 + "</td><td>";
    var v1060 = percentage.toFixed(2);
    var v742 = v1059 + v1060;
    var v264 = v742 + "</td></tr>\n";
    JAMScript.call(v263.write, v263, [v264]);
    i$$10 = i$$10 + 1;
    var v743 = arrayOfItems$$1.length;
    v265 = i$$10 < v743
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
  var v744 = sequence$$17.length;
  var v273 = v744 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v745 = Math.random();
    var v267 = v745 * maxNum$$1;
    randNum$$1 = Math.floor(v267);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v268, v269);
    sequence$$17 = tempString1 + tempString2;
    var v746 = tempSeq.length;
    var v272 = v746 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAMScript.call(v270.write, v270, [v271]);
      tempSeq = ""
    }
    var v747 = sequence$$17.length;
    v273 = v747 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAMScript.call(v274.write, v274, [v275]);
  return true
}
function pairwiseAlignCodons(theDocument) {
  var newCodonsOne = "";
  var titleOne = "";
  var newCodonsTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 6E3;
  var v748 = testScript();
  var v276 = v748 == false;
  if(v276) {
    return false
  }
  var v1530 = theDocument.forms;
  var v1500 = v1530[0];
  var v1427 = v1500.elements;
  var v1297 = v1427[0];
  var v1061 = checkFormElement(v1297);
  var v749 = v1061 == false;
  var v1063 = !v749;
  if(v1063) {
    var v1564 = theDocument.forms;
    var v1551 = v1564[0];
    var v1531 = v1551.elements;
    var v1501 = v1531[0];
    var v1428 = v1501.value;
    var v1298 = checkSequenceLength(v1428, maxInput$$3);
    var v1062 = v1298 == false;
    var v1300 = !v1062;
    if(v1300) {
      var v1565 = theDocument.forms;
      var v1552 = v1565[0];
      var v1532 = v1552.elements;
      var v1502 = v1532[1];
      var v1429 = checkFormElement(v1502);
      var v1299 = v1429 == false;
      var v1431 = !v1299;
      if(v1431) {
        var v1576 = theDocument.forms;
        var v1566 = v1576[0];
        var v1553 = v1566.elements;
        var v1533 = v1553[1];
        var v1503 = v1533.value;
        var v1430 = checkSequenceLength(v1503, maxInput$$3);
        v1299 = v1430 == false
      }
      v1062 = v1299
    }
    v749 = v1062
  }
  var v277 = v749;
  if(v277) {
    return false
  }
  var MATRIX = "codon";
  var v1534 = theDocument.forms;
  var v1504 = v1534[0];
  var v1432 = v1504.elements;
  var v1301 = v1432[5];
  var v1064 = v1301.options;
  var v1535 = theDocument.forms;
  var v1505 = v1535[0];
  var v1433 = v1505.elements;
  var v1302 = v1433[5];
  var v1065 = v1302.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v750 = v1064[v1065]
  }
  var v278 = v750.value;
  var BEGIN_GAP_PENALTY = parseInt(v278);
  var v1536 = theDocument.forms;
  var v1506 = v1536[0];
  var v1434 = v1506.elements;
  var v1303 = v1434[6];
  var v1066 = v1303.options;
  var v1537 = theDocument.forms;
  var v1507 = v1537[0];
  var v1435 = v1507.elements;
  var v1304 = v1435[6];
  var v1067 = v1304.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v751 = v1066[v1067]
  }
  var v279 = v751.value;
  var GAP_PENALTY = parseInt(v279);
  var v1538 = theDocument.forms;
  var v1508 = v1538[0];
  var v1436 = v1508.elements;
  var v1305 = v1436[7];
  var v1068 = v1305.options;
  var v1539 = theDocument.forms;
  var v1509 = v1539[0];
  var v1437 = v1509.elements;
  var v1306 = v1437[7];
  var v1069 = v1306.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v752 = v1068[v1069]
  }
  var v280 = v752.value;
  var END_GAP_PENALTY = parseInt(v280);
  var v1438 = theDocument.forms;
  var v1307 = v1438[0];
  var v1070 = v1307.elements;
  var v753 = v1070[0];
  var v281 = v753.value;
  newCodonsOne = getSequenceFromFasta(v281);
  newCodonsOne = removeNonDna(newCodonsOne);
  newCodonsOne = newCodonsOne.replace(/u/g, "t");
  newCodonsOne = newCodonsOne.replace(/U/g, "T");
  newCodonsTwo = removeNonDnaStrict(newCodonsOne);
  var v1439 = theDocument.forms;
  var v1308 = v1439[0];
  var v1071 = v1308.elements;
  var v754 = v1071[0];
  var v282 = v754.value;
  titleOne = getTitleFromFasta(v282);
  var v1440 = theDocument.forms;
  var v1309 = v1440[0];
  var v1072 = v1309.elements;
  var v755 = v1072[1];
  var v283 = v755.value;
  newCodonsTwo = getSequenceFromFasta(v283);
  newCodonsTwo = removeNonDna(newCodonsTwo);
  newCodonsTwo = newCodonsTwo.replace(/u/gi, "t");
  newCodonsTwo = newCodonsTwo.replace(/U/gi, "T");
  newCodonsTwo = removeNonDnaStrict(newCodonsTwo);
  var v1441 = theDocument.forms;
  var v1310 = v1441[0];
  var v1073 = v1310.elements;
  var v756 = v1073[1];
  var v284 = v756.value;
  titleTwo = getTitleFromFasta(v284);
  var v1311 = newCodonsOne.length;
  var v1074 = v1311 % 3;
  var v757 = v1074 != 0;
  var v1076 = !v757;
  if(v1076) {
    var v1312 = newCodonsTwo.length;
    var v1075 = v1312 % 3;
    v757 = v1075 != 0
  }
  var v286 = v757;
  if(v286) {
    var v285 = newCodonsOne.length;
    alert(v285);
    alert(newCodonsTwo);
    alert("The sequences must be evenly divisible by 3. ");
    return false
  }
  openWindow("Pairwise Align Codons");
  openPre();
  var v287 = outputWindow.document;
  var v288 = getPairwiseAlignTitle(titleOne, newCodonsOne, titleTwo, newCodonsTwo);
  JAMScript.call(v287.write, v287, [v288]);
  var v758 = newCodonsOne.search(/.../);
  var v289 = v758 != -1;
  if(v289) {
    newCodonsOne = newCodonsOne.match(/.../g)
  }
  var v759 = newCodonsTwo.search(/.../);
  var v290 = v759 != -1;
  if(v290) {
    newCodonsTwo = newCodonsTwo.match(/.../g)
  }
  pairwiseCodon(titleOne, newCodonsOne, titleTwo, newCodonsTwo, MATRIX, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY);
  closePre();
  closeWindow();
  return true
}
function pairwiseCodon(titleOne$$1, newCodonsOne$$1, titleTwo$$1, newCodonsTwo$$1, matrix, gapPenalty, beginGapPenalty, endGapPenalty) {
  var useLinearSpace = true;
  var useQuadraticSpace = false;
  var scoringMatrix;
  scoringMatrix = new Codon;
  var scoreSet = new ScoreSet;
  JAMScript.call(scoreSet.setScoreSetParam, scoreSet, [scoringMatrix, gapPenalty, beginGapPenalty, endGapPenalty]);
  var alignment;
  if(useLinearSpace) {
    alignment = new AlignPairLinear;
    JAMScript.call(alignment.setAlignParam, alignment, [newCodonsOne$$1, newCodonsTwo$$1, scoreSet]);
    JAMScript.call(alignment.align, alignment, []);
    var v291 = outputWindow.document;
    var v760 = ">" + titleOne$$1;
    var v292 = v760 + "\n";
    JAMScript.call(v291.write, v291, [v292]);
    var v293 = outputWindow.document;
    var v761 = JAMScript.call(alignment.getAlignedM, alignment, []);
    var v294 = addReturns(v761);
    JAMScript.call(v293.write, v293, [v294]);
    var v295 = outputWindow.document;
    JAMScript.call(v295.write, v295, ["\n"]);
    var v296 = outputWindow.document;
    JAMScript.call(v296.write, v296, ["\n"]);
    var v297 = outputWindow.document;
    var v762 = ">" + titleTwo$$1;
    var v298 = v762 + "\n";
    JAMScript.call(v297.write, v297, [v298]);
    var v299 = outputWindow.document;
    var v763 = JAMScript.call(alignment.getAlignedN, alignment, []);
    var v300 = addReturns(v763);
    JAMScript.call(v299.write, v299, [v300]);
    var v301 = outputWindow.document;
    JAMScript.call(v301.write, v301, ["\n\n"]);
    var v302 = outputWindow.document;
    var v1077 = alignment.score;
    var v764 = "Alignment score: " + v1077;
    var v303 = v764 + "\n\n";
    JAMScript.call(v302.write, v302, [v303])
  }
  if(useQuadraticSpace) {
    alignment = new AlignPairQuad;
    JAMScript.call(alignment.initializeMatrix, alignment, [newCodonsOne$$1, newCodonsTwo$$1, scoreSet]);
    JAMScript.call(alignment.fillMatrix, alignment, []);
    JAMScript.call(alignment.align, alignment, []);
    var v304 = outputWindow.document;
    var v765 = ">" + titleOne$$1;
    var v305 = v765 + "\n";
    JAMScript.call(v304.write, v304, [v305]);
    var v306 = outputWindow.document;
    var v766 = JAMScript.call(alignment.getAlignedM, alignment, []);
    var v307 = addReturns(v766);
    JAMScript.call(v306.write, v306, [v307]);
    var v308 = outputWindow.document;
    JAMScript.call(v308.write, v308, ["\n"]);
    var v309 = outputWindow.document;
    JAMScript.call(v309.write, v309, ["\n"]);
    var v310 = outputWindow.document;
    var v767 = ">" + titleTwo$$1;
    var v311 = v767 + "\n";
    JAMScript.call(v310.write, v310, [v311]);
    var v312 = outputWindow.document;
    var v768 = JAMScript.call(alignment.getAlignedN, alignment, []);
    var v313 = addReturns(v768);
    JAMScript.call(v312.write, v312, [v313]);
    var v314 = outputWindow.document;
    JAMScript.call(v314.write, v314, ["\n\n"]);
    var v315 = outputWindow.document;
    var v1078 = alignment.score;
    var v769 = "Alignment score: " + v1078;
    var v316 = v769 + "\n\n";
    JAMScript.call(v315.write, v315, [v316])
  }
  return
}
function getScore(r1$$1, r2) {
  var v317 = this.scoringMatrix;
  return JAMScript.call(v317.scoringMatrix_getScore, v317, [r1$$1, r2])
}
function setScoreSetParam(scoringMatrix$$1, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1) {
  this.scoringMatrix = scoringMatrix$$1;
  this.gap = gapPenalty$$1;
  this.beginGap = beginGapPenalty$$1;
  this.endGap = endGapPenalty$$1;
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
  var v1079 = this.scoreHash;
  var v1080 = r1$$2 + r2$$1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v770 = v1079[v1080]
  }
  var v321 = v770 == null;
  if(v321) {
    var v1081 = "Unrecognized residue pair: " + r1$$2;
    var v771 = v1081 + ", ";
    var v318 = v771 + r2$$1;
    throw v318 + ".";
  }else {
    var v319 = this.scoreHash;
    var v320 = r1$$2 + r2$$1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      return v319[v320]
    }
  }
  return
}
function scoringMatrix_fillHash(matrix$$1) {
  var v322 = matrix$$1[0];
  var cols = v322.split(/\s+/);
  var cells;
  var i$$11 = 1;
  var v772 = matrix$$1.length;
  var v327 = i$$11 < v772;
  for(;v327;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v323 = matrix$$1[i$$11]
    }
    cells = v323.split(/\s+/);
    var j$$10 = 1;
    var v1082 = cols.length;
    var v773 = v1082 + 1;
    var v326 = j$$10 < v773;
    for(;v326;) {
      var v324 = this.scoreHash;
      var v1083 = cells[0];
      var v774 = v1083.toLowerCase();
      var v1313 = j$$10 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1084 = cols[v1313]
      }
      var v775 = v1084.toLowerCase();
      var v325 = v774 + v775;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v776 = cells[j$$10]
      }
      var v1612 = parseInt(v776);
      JAMScript.set(v324, v325, v1612, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
      j$$10 = j$$10 + 1;
      var v1085 = cols.length;
      var v777 = v1085 + 1;
      v326 = j$$10 < v777
    }
    i$$11 = i$$11 + 1;
    var v778 = matrix$$1.length;
    v327 = i$$11 < v778
  }
  return
}
function ScoringMatrix() {
  this.scoreHash = {};
  return
}
function Codon() {
  var matrix$$2 = new Array("AAA  AAC  AAG  AAT  ACA  ACC  ACG  ACT  AGA  AGC  AGG  AGT  ATA  ATC  ATG  ATT  CAA  CAC  CAG  CAT  CCA  CCC  CCG  CCT  CGA  CGC  CGG  CGT  CTA  CTC  CTG  CTT  GAA  GAC  GAG  GAT  GCA  GCC  GCG  GCT  GGA  GGC  GGG  GGT  GTA  GTC  GTG  GTT  TAA  TAC  TAG  TAT  TCA  TCC  TCG  TCT  TGA  TGC  TGG  TGT  TTA  TTC  TTG  TTT", "AAA 11.6 -2.7 9.7 -1.7 -2.7 -6.4 -3.9 -5.6 5.1 -5.0 3.6 -4.2 -6.3 -13.0 -7.1 -11.5 0.4 -6.0 -1.9 -5.3 -8.5 -11.2 -8.9 -10.8 2.1 0.0 1.4 0.2 -10.2 -13.5 -13.0 -12.5 -2.6 -8.5 -5.0 -8.1 -6.3 -9.9 -7.5 -9.0 -7.1 -10.2 -8.2 -9.2 -8.2 -12.5 -11.1 -11.4 -50.0 -14.8 -50.0 -13.8 -7.3 -10.1 -8.4 -9.1 -50.0 -13.0 -13.5 -12.4 -10.7 -18.1 -11.8 -17.2", 
  "AAC -2.7 13.0 -3.3 10.9 -3.5 -0.4 -3.3 -1.8 -5.4 4.6 -5.5 3.0 -10.2 -7.9 -9.9 -9.6 -5.0 0.5 -5.5 -1.0 -10.3 -8.1 -9.4 -9.6 -8.1 -5.0 -7.3 -6.3 -13.4 -11.3 -14.4 -12.9 -6.3 0.8 -6.4 -1.1 -7.4 -5.0 -6.2 -6.5 -5.6 -1.6 -4.7 -3.0 -10.8 -8.7 -11.9 -10.0 -50.0 -6.2 -50.0 -7.5 -6.3 -4.3 -6.2 -5.4 -50.0 -7.0 -16.3 -8.2 -13.2 -12.3 -13.1 -13.3", "AAG 9.7 -3.3 11.6 -2.8 -4.5 -6.7 -3.1 -6.9 3.3 -5.5 4.8 -5.1 -8.9 -13.2 -5.7 -12.6 -1.5 -6.1 -0.6 -6.1 -10.0 -11.8 -8.6 -11.9 1.2 0.5 2.2 0.1 -11.8 -14.0 -11.9 -13.4 -4.9 -9.1 -3.4 -8.9 -8.0 -10.0 -7.2 -10.0 -9.1 -10.2 -7.1 -9.9 -10.1 -13.0 -10.6 -12.7 -50.0 -14.9 -50.0 -14.4 -8.9 -10.8 -8.9 -10.4 -50.0 -13.1 -11.8 -13.0 -12.4 -19.4 -11.5 -17.8", 
  "AAT -1.7 10.9 -2.8 12.9 -2.7 -2.2 -2.8 0.2 -4.8 2.9 -5.2 5.2 -9.1 -9.5 -9.0 -7.0 -4.0 -1.0 -5.0 1.0 -9.0 -8.8 -8.9 -7.7 -7.0 -6.8 -7.1 -4.3 -12.4 -12.9 -13.9 -10.0 -4.9 -0.7 -5.6 1.4 -6.0 -6.5 -6.2 -4.8 -5.1 -3.2 -5.0 -1.2 -9.8 -9.9 -11.3 -8.2 -50.0 -7.6 -50.0 -5.1 -5.5 -5.8 -5.9 -4.2 -50.0 -8.3 -15.5 -5.9 -11.6 -14.2 -12.0 -11.6", "ACA -2.7 -3.5 -4.5 -2.7 11.7 9.0 10.6 9.6 -3.2 -0.7 -5.1 -0.4 0.7 -4.6 -0.4 -3.6 -4.8 -8.9 -6.5 -7.8 -1.4 -4.1 -2.9 -3.3 -8.0 -9.1 -8.0 -8.2 -6.0 -9.3 -7.7 -8.5 -6.4 -10.1 -7.5 -8.6 2.8 -0.7 0.9 0.1 -5.9 -7.3 -6.5 -6.5 -0.4 -3.9 -2.6 -3.1 -50.0 -14.6 -50.0 -12.6 2.9 0.1 1.8 1.0 -50.0 -9.2 -13.6 -7.7 -4.8 -12.2 -6.2 -11.0", 
  "ACC -6.4 -0.4 -6.7 -2.2 9.0 12.3 9.8 9.6 -7.1 2.4 -7.2 0.3 -2.9 -1.2 -3.0 -3.3 -7.6 -6.7 -8.1 -7.9 -4.9 -1.9 -4.5 -3.8 -9.5 -7.8 -9.3 -8.9 -9.4 -7.1 -9.0 -9.0 -9.4 -7.5 -9.3 -9.2 -0.7 2.6 0.2 -0.1 -8.0 -4.6 -7.7 -6.1 -3.6 -1.0 -4.1 -3.1 -50.0 -11.6 -50.0 -11.6 0.2 2.3 0.4 0.5 -50.0 -6.5 -15.3 -7.8 -8.4 -9.5 -8.3 -11.1", "ACG -3.9 -3.3 -3.1 -2.8 10.6 9.8 12.2 9.8 -4.9 0.1 -3.6 -0.2 -1.7 -4.1 0.9 -3.5 -5.9 -8.9 -5.6 -8.5 -3.9 -3.9 -2.2 -4.5 -7.3 -7.5 -6.4 -8.5 -7.1 -8.2 -6.7 -7.8 -7.9 -9.1 -7.1 -9.4 0.9 -0.2 2.5 -0.3 -6.9 -6.5 -5.5 -6.8 -1.7 -3.4 -1.7 -2.8 -50.0 -13.0 -50.0 -11.5 1.5 0.7 2.7 0.6 -50.0 -8.9 -12.1 -7.4 -6.1 -11.5 -5.4 -10.4", 
  "ACT -5.6 -1.8 -6.9 0.2 9.6 9.6 9.8 11.6 -6.6 0.9 -7.2 2.5 -2.3 -3.4 -2.3 -0.6 -6.5 -8.2 -8.0 -6.3 -3.7 -3.5 -3.9 -1.6 -9.9 -8.9 -9.6 -7.0 -8.6 -8.9 -8.8 -6.8 -8.6 -8.2 -8.8 -6.8 0.3 0.1 0.2 2.4 -7.4 -6.2 -6.9 -4.4 -2.9 -2.9 -3.5 -0.9 -50.0 -12.2 -50.0 -10.1 1.2 0.6 1.2 2.4 -50.0 -7.6 -16.1 -5.8 -7.2 -10.8 -7.4 -9.0", "AGA 5.1 -5.4 3.3 -4.8 -3.2 -7.1 -4.9 -6.6 13.3 -2.8 11.2 -1.9 -5.7 -12.5 -7.2 -11.6 -0.7 -4.8 -3.1 -4.3 -10.0 -11.6 -8.8 -11.7 10.5 7.7 9.1 8.5 -9.8 -12.7 -11.7 -11.8 -6.3 -11.4 -8.8 -11.0 -7.5 -10.3 -8.3 -9.9 -1.9 -6.7 -4.1 -6.4 -7.9 -12.5 -11.4 -11.7 -50.0 -14.0 -50.0 -13.2 -8.5 -10.4 -9.1 -9.6 -50.0 -9.8 -7.7 -8.8 -10.3 -17.9 -11.8 -16.0", 
  "AGC -5.0 4.6 -5.5 2.9 -0.7 2.4 0.1 0.9 -2.8 12.8 -2.6 11.0 -8.4 -6.3 -8.3 -7.7 -6.1 -2.9 -6.5 -4.2 -8.5 -5.9 -7.5 -7.7 -5.5 -2.4 -5.5 -4.1 -12.9 -10.3 -12.7 -11.3 -7.4 -3.1 -7.4 -4.9 -4.4 -1.8 -3.5 -3.5 -1.6 3.0 -0.8 0.9 -8.4 -6.3 -9.6 -7.3 -50.0 -9.0 -50.0 -9.7 -2.3 -0.2 -1.2 -1.5 -50.0 -0.7 -13.3 -2.0 -11.8 -11.9 -12.3 -12.7", "AGG 3.6 -5.5 4.8 -5.2 -5.1 -7.2 -3.6 -7.2 11.2 -2.6 13.4 -2.1 -7.7 -12.5 -5.3 -11.9 -2.2 -4.4 -1.9 -4.8 -10.2 -11.5 -8.1 -12.0 9.3 8.2 10.0 8.0 -10.8 -11.9 -10.7 -12.4 -8.2 -11.8 -6.9 -11.5 -8.4 -9.9 -7.1 -10.6 -4.7 -6.8 -1.2 -7.0 -9.8 -11.6 -9.6 -12.1 -50.0 -14.1 -50.0 -12.7 -10.0 -10.8 -8.8 -10.5 -50.0 -9.2 -4.2 -9.3 -11.0 -18.2 -11.1 -16.1", 
  "AGT -4.2 3.0 -5.1 5.2 -0.4 0.3 -0.2 2.5 -1.9 11.0 -2.1 13.2 -7.6 -8.5 -8.0 -5.3 -5.6 -4.5 -6.8 -2.4 -7.8 -7.9 -7.9 -6.2 -5.7 -5.1 -5.4 -2.1 -12.4 -12.3 -13.1 -10.1 -6.6 -4.4 -6.9 -2.6 -3.6 -3.8 -3.7 -2.0 -1.4 0.8 -0.9 3.0 -8.2 -8.1 -9.2 -5.8 -50.0 -10.1 -50.0 -7.4 -1.7 -2.0 -1.5 -0.5 -50.0 -2.1 -12.6 -0.4 -11.6 -13.9 -11.4 -11.1", "ATA -6.3 -10.2 -8.9 -9.1 0.7 -2.9 -1.7 -2.3 -5.7 -8.4 -7.7 -7.6 13.2 9.6 3.5 9.7 -8.7 -12.4 -10.7 -10.7 -7.8 -10.2 -8.8 -9.6 -9.5 -11.9 -10.9 -10.5 2.3 -0.4 -0.2 -0.3 -9.7 -15.5 -11.4 -13.7 -3.0 -6.4 -4.1 -5.4 -9.6 -11.9 -10.5 -11.8 6.2 3.3 3.7 3.6 -50.0 -13.6 -50.0 -11.9 -5.6 -8.8 -7.2 -8.9 -50.0 -12.4 -14.1 -11.6 2.8 -6.4 0.5 -5.2", 
  "ATC -13.0 -7.9 -13.2 -9.5 -4.6 -1.2 -4.1 -3.4 -12.5 -6.3 -12.5 -8.5 9.6 12.7 0.2 10.5 -12.4 -11.6 -13.2 -12.0 -12.4 -10.1 -11.6 -12.0 -15.1 -13.1 -14.3 -13.4 -1.4 1.4 -1.6 -0.5 -14.9 -14.3 -15.2 -16.8 -7.7 -4.7 -6.3 -6.6 -14.6 -10.8 -12.8 -13.0 2.3 6.0 2.5 3.6 -50.0 -11.2 -50.0 -11.9 -10.5 -9.2 -10.5 -10.5 -50.0 -10.3 -16.2 -11.3 -1.7 -3.7 -2.5 -5.4", "ATG -7.1 -9.9 -5.7 -9.0 -0.4 -3.0 0.9 -2.3 -7.2 -8.3 -5.3 -8.0 3.5 0.2 14.3 1.0 -7.3 -11.2 -6.9 -9.7 -8.5 -10.2 -7.7 -9.8 -10.0 -10.4 -8.4 -10.2 1.0 -0.6 1.7 -0.5 -11.1 -14.8 -9.7 -14.5 -3.7 -5.8 -3.1 -5.6 -10.4 -11.5 -8.2 -11.1 0.6 -1.6 1.6 -1.1 -50.0 -12.4 -50.0 -11.5 -5.5 -8.0 -4.9 -7.2 -50.0 -12.4 -10.3 -11.6 0.7 -6.8 2.4 -6.0", 
  "ATT -11.5 -9.6 -12.6 -7.0 -3.6 -3.3 -3.5 -0.6 -11.6 -7.7 -11.9 -5.3 9.7 10.5 1.0 12.6 -12.0 -12.2 -12.5 -9.7 -11.1 -11.2 -11.9 -9.4 -12.9 -14.3 -14.0 -11.9 -1.0 -0.4 -1.6 1.2 -13.9 -15.4 -13.7 -12.6 -6.2 -6.7 -6.3 -4.4 -13.0 -12.2 -13.0 -10.4 2.9 3.8 2.5 5.8 -50.0 -12.5 -50.0 -10.2 -9.6 -9.7 -9.6 -8.3 -50.0 -11.6 -15.4 -9.4 -1.1 -5.4 -1.6 -3.3", "CAA 0.4 -5.0 -1.5 -4.0 -4.8 -7.6 -5.9 -6.5 -0.7 -6.1 -2.2 -5.6 -8.7 -12.4 -7.3 -12.0 12.8 2.3 10.2 3.0 0.0 -3.4 -0.7 -3.2 2.5 -0.8 0.9 0.2 -3.0 -7.2 -5.7 -6.1 -0.2 -6.6 -1.8 -6.0 -5.3 -8.2 -5.7 -7.6 -6.7 -9.6 -7.5 -9.3 -7.1 -10.5 -9.6 -9.4 -50.0 -8.1 -50.0 -7.2 -4.3 -6.8 -5.7 -6.3 -50.0 -9.5 -9.6 -8.9 -6.2 -12.8 -6.8 -11.8", 
  "CAC -6.0 0.5 -6.1 -1.0 -8.9 -6.7 -8.9 -8.2 -4.8 -2.9 -4.4 -4.5 -12.4 -11.6 -11.2 -12.2 2.3 14.6 1.9 12.9 -5.5 -2.6 -4.1 -4.7 -1.2 3.0 -1.1 1.6 -8.0 -4.7 -8.7 -6.0 -8.2 -4.7 -7.8 -6.7 -10.0 -8.3 -8.9 -9.9 -10.8 -7.1 -10.0 -9.2 -11.6 -10.1 -12.3 -11.9 -50.0 2.2 -50.0 0.9 -7.9 -5.9 -7.4 -6.9 -50.0 -4.6 -11.6 -5.6 -9.7 -5.9 -9.9 -7.3", "CAG -1.9 -5.5 -0.6 -5.0 -6.5 -8.1 -5.6 -8.0 -3.1 -6.5 -1.9 -6.8 -10.7 -13.2 -6.9 -12.5 10.2 1.9 11.9 2.1 -2.3 -4.1 -0.5 -4.6 -0.1 -0.9 2.4 -0.8 -5.1 -6.9 -4.8 -6.7 -2.3 -7.1 -0.8 -7.2 -7.2 -8.0 -5.6 -8.5 -9.4 -9.7 -7.2 -9.8 -9.2 -11.1 -9.5 -10.7 -50.0 -8.7 -50.0 -8.6 -6.1 -7.5 -5.5 -7.7 -50.0 -10.4 -7.7 -10.0 -7.3 -13.6 -6.4 -13.3", 
  "CAT -5.3 -1.0 -6.1 1.0 -7.8 -7.9 -8.5 -6.3 -4.3 -4.2 -4.8 -2.4 -10.7 -12.0 -9.7 -9.7 3.0 12.9 2.1 14.7 -4.9 -3.8 -4.0 -2.4 -1.0 0.8 -1.3 3.4 -7.6 -5.7 -8.1 -3.5 -6.8 -5.8 -7.2 -4.2 -8.9 -10.2 -8.4 -8.2 -9.9 -8.4 -9.7 -6.4 -11.1 -11.1 -11.8 -10.0 -50.0 0.4 -50.0 2.6 -7.2 -7.0 -7.4 -5.1 -50.0 -5.7 -9.8 -3.2 -8.4 -7.4 -8.9 -5.9", "CCA -8.5 -10.3 -10.0 -9.0 -1.4 -4.9 -3.9 -3.7 -10.0 -8.5 -10.2 -7.8 -7.8 -12.4 -8.5 -11.1 0.0 -5.5 -2.3 -4.9 12.6 10.0 11.1 10.5 -6.0 -8.3 -6.9 -7.5 -2.2 -7.4 -5.3 -5.9 -8.9 -12.5 -9.4 -11.6 -0.7 -3.9 -2.3 -3.0 -9.1 -9.8 -9.2 -9.5 -5.6 -9.0 -8.0 -8.5 -50.0 -15.3 -50.0 -14.1 2.3 -1.4 0.3 -0.5 -50.0 -13.6 -14.3 -11.5 -5.3 -13.7 -6.1 -12.7", 
  "CCC -11.2 -8.1 -11.8 -8.8 -4.1 -1.9 -3.9 -3.5 -11.6 -5.9 -11.5 -7.9 -10.2 -10.1 -10.2 -11.2 -3.4 -2.6 -4.1 -3.8 10.0 13.1 10.7 10.6 -8.1 -5.2 -8.0 -6.7 -6.1 -3.7 -7.5 -5.6 -11.1 -10.3 -10.6 -11.9 -3.2 -1.0 -2.2 -2.8 -10.5 -8.1 -9.4 -9.5 -8.3 -6.9 -9.4 -8.8 -50.0 -11.3 -50.0 -12.8 -0.6 2.2 -0.3 0.1 -50.0 -10.1 -17.5 -11.1 -8.6 -9.9 -8.6 -11.9", "CCG -8.9 -9.4 -8.6 -8.9 -2.9 -4.5 -2.2 -3.9 -8.8 -7.5 -8.1 -7.9 -8.8 -11.6 -7.7 -11.9 -0.7 -4.1 -0.5 -4.0 11.1 10.7 13.2 10.4 -5.7 -5.8 -3.5 -6.1 -3.6 -6.5 -3.3 -5.5 -9.4 -11.0 -8.7 -11.2 -1.8 -2.7 0.7 -3.0 -9.1 -8.2 -7.3 -9.4 -7.2 -8.2 -7.2 -8.2 -50.0 -13.2 -50.0 -13.3 0.5 -0.9 1.8 -0.6 -50.0 -11.4 -11.1 -10.5 -6.1 -12.9 -5.0 -11.9", 
  "CCT -10.8 -9.6 -11.9 -7.7 -3.3 -3.8 -4.5 -1.6 -11.7 -7.7 -12.0 -6.2 -9.6 -12.0 -9.8 -9.4 -3.2 -4.7 -4.6 -2.4 10.5 10.6 10.4 12.6 -8.2 -7.9 -9.0 -4.7 -6.1 -6.0 -7.5 -2.9 -10.9 -12.2 -11.2 -10.9 -2.4 -2.9 -2.7 -0.9 -10.4 -9.7 -10.2 -8.0 -8.4 -9.1 -9.3 -6.5 -50.0 -13.3 -50.0 -11.0 -0.0 -0.4 -0.4 2.3 -50.0 -10.9 -17.2 -8.3 -8.3 -12.7 -7.8 -9.3", "CGA 2.1 -8.1 1.2 -7.0 -8.0 -9.5 -7.3 -9.9 10.5 -5.5 9.3 -5.7 -9.5 -15.1 -10.0 -12.9 2.5 -1.2 -0.1 -1.0 -6.0 -8.1 -5.7 -8.2 13.8 11.3 11.8 12.1 -6.0 -9.1 -9.0 -9.5 -8.9 -13.4 -10.0 -13.1 -9.9 -11.7 -9.8 -12.8 -5.9 -9.4 -6.5 -8.1 -10.7 -14.0 -13.3 -13.9 -50.0 -11.9 -50.0 -9.7 -8.9 -10.8 -9.0 -11.1 -50.0 -6.5 -5.3 -6.3 -10.5 -16.2 -10.4 -15.2", 
  "CGC 0.0 -5.0 0.5 -6.8 -9.1 -7.8 -7.5 -8.9 7.7 -2.4 8.2 -5.1 -11.9 -13.1 -10.4 -14.3 -0.8 3.0 -0.9 0.8 -8.3 -5.2 -5.8 -7.9 11.3 15.0 11.2 12.8 -9.7 -5.3 -9.2 -7.8 -11.7 -10.6 -10.1 -12.2 -11.7 -8.8 -8.9 -11.8 -9.3 -5.0 -8.0 -8.2 -13.6 -11.4 -12.8 -13.0 -50.0 -7.2 -50.0 -8.4 -11.0 -7.7 -8.7 -10.2 -50.0 -1.5 -7.1 -4.9 -11.2 -11.6 -11.6 -15.0", "CGG 1.4 -7.3 2.2 -7.1 -8.0 -9.3 -6.4 -9.6 9.1 -5.5 10.0 -5.4 -10.9 -14.3 -8.4 -14.0 0.9 -1.1 2.4 -1.3 -6.9 -8.0 -3.5 -9.0 11.8 11.2 13.4 11.4 -7.3 -8.8 -6.5 -8.5 -10.0 -12.5 -7.8 -12.5 -9.6 -11.0 -7.1 -10.7 -7.9 -8.0 -4.3 -9.4 -11.4 -12.3 -10.9 -12.9 -50.0 -11.8 -50.0 -11.2 -9.4 -9.8 -7.3 -10.5 -50.0 -6.2 -2.2 -6.7 -9.8 -15.2 -8.5 -14.9", 
  "CGT 0.2 -6.3 0.1 -4.3 -8.2 -8.9 -8.5 -7.0 8.5 -4.1 8.0 -2.1 -10.5 -13.4 -10.2 -11.9 0.2 1.6 -0.8 3.4 -7.5 -6.7 -6.1 -4.7 12.1 12.8 11.4 14.7 -8.7 -7.4 -9.4 -5.3 -9.9 -11.8 -10.5 -10.3 -9.9 -10.1 -9.3 -9.3 -8.1 -7.2 -8.0 -5.2 -12.0 -12.1 -12.6 -10.9 -50.0 -7.9 -50.0 -5.3 -9.3 -8.8 -8.9 -7.0 -50.0 -3.6 -7.1 -1.2 -10.2 -12.7 -9.9 -11.0", "CTA -10.2 -13.4 -11.8 -12.4 -6.0 -9.4 -7.1 -8.6 -9.8 -12.9 -10.8 -12.4 2.3 -1.4 1.0 -1.0 -3.0 -8.0 -5.1 -7.6 -2.2 -6.1 -3.6 -6.1 -6.0 -9.7 -7.3 -8.7 11.2 7.9 8.9 8.1 -12.1 -17.4 -13.2 -16.8 -6.3 -9.5 -7.5 -8.8 -12.7 -15.2 -13.1 -14.2 0.0 -3.1 -1.8 -3.1 -50.0 -10.7 -50.0 -9.3 -4.6 -8.9 -5.9 -8.3 -50.0 -12.8 -9.6 -10.6 9.5 -3.2 8.2 -2.8", 
  "CTC -13.5 -11.3 -14.0 -12.9 -9.3 -7.1 -8.2 -8.9 -12.7 -10.3 -11.9 -12.3 -0.4 1.4 -0.6 -0.4 -7.2 -4.7 -6.9 -5.7 -7.4 -3.7 -6.5 -6.0 -9.1 -5.3 -8.8 -7.4 7.9 11.9 7.8 9.3 -15.2 -15.1 -14.6 -17.2 -9.7 -7.3 -8.2 -9.2 -15.0 -12.8 -14.1 -14.9 -2.8 0.2 -2.9 -2.3 -50.0 -7.4 -50.0 -8.7 -9.4 -7.3 -9.4 -9.4 -50.0 -8.0 -11.9 -9.7 6.5 0.5 6.4 -1.8", "CTG -13.0 -14.4 -11.9 -13.9 -7.7 -9.0 -6.7 -8.8 -11.7 -12.7 -10.7 -13.1 -0.2 -1.6 1.7 -1.6 -5.7 -8.7 -4.8 -8.1 -5.3 -7.5 -3.3 -7.5 -9.0 -9.2 -6.5 -9.4 8.9 7.8 10.1 7.8 -14.3 -17.7 -13.0 -17.8 -8.0 -9.4 -6.2 -9.2 -15.1 -14.9 -12.2 -14.9 -1.8 -3.2 -0.8 -3.2 -50.0 -10.8 -50.0 -9.9 -7.3 -9.6 -6.4 -9.4 -50.0 -12.3 -8.7 -11.3 7.6 -3.3 8.7 -2.9", 
  "CTT -12.5 -12.9 -13.4 -10.0 -8.5 -9.0 -7.8 -6.8 -11.8 -11.3 -12.4 -10.1 -0.3 -0.5 -0.5 1.2 -6.1 -6.0 -6.7 -3.5 -5.9 -5.6 -5.5 -2.9 -9.5 -7.8 -8.5 -5.3 8.1 9.3 7.8 11.8 -14.4 -15.7 -14.5 -14.6 -8.4 -8.7 -7.9 -7.1 -14.3 -13.8 -13.8 -12.3 -2.4 -2.2 -2.9 -0.2 -50.0 -8.9 -50.0 -7.1 -8.1 -9.1 -8.7 -6.6 -50.0 -9.7 -11.4 -8.0 6.8 -1.8 6.9 0.4", "GAA -2.6 -6.3 -4.9 -4.9 -6.4 -9.4 -7.9 -8.6 -6.3 -7.4 -8.2 -6.6 -9.7 -14.9 -11.1 -13.9 -0.2 -8.2 -2.3 -6.8 -8.9 -11.1 -9.4 -10.9 -8.9 -11.7 -10.0 -9.9 -12.1 -15.2 -14.3 -14.4 11.1 2.9 9.2 3.5 -3.0 -7.0 -4.3 -6.2 -2.2 -6.6 -3.7 -5.7 -6.0 -10.4 -8.6 -9.5 -50.0 -15.5 -50.0 -13.9 -7.8 -10.5 -8.7 -9.6 -50.0 -16.5 -17.1 -14.8 -12.1 -18.9 -12.4 -17.4", 
  "GAC -8.5 0.8 -9.1 -0.7 -10.1 -7.5 -9.1 -8.2 -11.4 -3.1 -11.8 -4.4 -15.5 -14.3 -14.8 -15.4 -6.6 -4.7 -7.1 -5.8 -12.5 -10.3 -11.0 -12.2 -13.4 -10.6 -12.5 -11.8 -17.4 -15.1 -17.7 -15.7 2.9 12.5 3.1 10.3 -7.7 -5.2 -6.2 -7.3 -5.4 -1.7 -5.4 -3.7 -11.6 -9.1 -13.0 -10.8 -50.0 -10.3 -50.0 -11.2 -9.8 -8.3 -9.1 -9.7 -50.0 -12.7 -20.6 -13.1 -16.0 -16.6 -17.0 -18.4", "GAG -5.0 -6.4 -3.4 -5.6 -7.5 -9.3 -7.1 -8.8 -8.8 -7.4 -6.9 -6.9 -11.4 -15.2 -9.7 -13.7 -1.8 -7.8 -0.8 -7.2 -9.4 -10.6 -8.7 -11.2 -10.0 -10.1 -7.8 -10.5 -13.2 -14.6 -13.0 -14.5 9.2 3.1 10.8 3.0 -4.5 -6.7 -2.7 -6.7 -5.0 -6.8 -2.5 -6.7 -7.5 -10.4 -7.4 -10.2 -50.0 -15.5 -50.0 -14.2 -8.9 -10.2 -8.5 -10.0 -50.0 -15.6 -15.3 -15.5 -13.0 -18.8 -12.6 -18.3", 
  "GAT -8.1 -1.1 -8.9 1.4 -8.6 -9.2 -9.4 -6.8 -11.0 -4.9 -11.5 -2.6 -13.7 -16.8 -14.5 -12.6 -6.0 -6.7 -7.2 -4.2 -11.6 -11.9 -11.2 -10.9 -13.1 -12.2 -12.5 -10.3 -16.8 -17.2 -17.8 -14.6 3.5 10.3 3.0 12.4 -6.9 -7.5 -6.8 -4.9 -5.4 -4.2 -5.4 -1.3 -10.8 -11.5 -12.4 -8.2 -50.0 -12.5 -50.0 -8.9 -9.2 -10.0 -9.4 -7.9 -50.0 -14.3 -19.9 -11.4 -16.2 -19.2 -15.8 -15.9", "GCA -6.3 -7.4 -8.0 -6.0 2.8 -0.7 0.9 0.3 -7.5 -4.4 -8.4 -3.6 -3.0 -7.7 -3.7 -6.2 -5.3 -10.0 -7.2 -8.9 -0.7 -3.2 -1.8 -2.4 -9.9 -11.7 -9.6 -9.9 -6.3 -9.7 -8.0 -8.4 -3.0 -7.7 -4.5 -6.9 11.3 8.2 9.4 9.1 -1.0 -3.3 -1.8 -2.4 1.5 -2.1 -0.4 -1.1 -50.0 -14.5 -50.0 -12.9 2.8 -0.0 1.4 0.7 -50.0 -8.7 -14.1 -7.5 -5.2 -12.5 -6.5 -10.7", 
  "GCC -9.9 -5.0 -10.0 -6.5 -0.7 2.6 -0.2 0.1 -10.3 -1.8 -9.9 -3.8 -6.4 -4.7 -5.8 -6.7 -8.2 -8.3 -8.0 -10.2 -3.9 -1.0 -2.7 -2.9 -11.7 -8.8 -11.0 -10.1 -9.5 -7.3 -9.4 -8.7 -7.0 -5.2 -6.7 -7.5 8.2 11.6 8.8 9.1 -3.7 -0.9 -3.1 -3.0 -2.0 1.2 -2.3 -1.3 -50.0 -12.1 -50.0 -12.6 0.1 2.5 0.7 0.6 -50.0 -6.0 -14.8 -7.5 -8.6 -9.4 -8.5 -11.2", "GCG -7.5 -6.2 -7.2 -6.2 0.9 0.2 2.5 0.2 -8.3 -3.5 -7.1 -3.7 -4.1 -6.3 -3.1 -6.3 -5.7 -8.9 -5.6 -8.4 -2.3 -2.2 0.7 -2.7 -9.8 -8.9 -7.1 -9.3 -7.5 -8.2 -6.2 -7.9 -4.3 -6.2 -2.7 -6.8 9.4 8.8 12.1 8.8 -2.1 -2.0 0.1 -2.4 0.0 -1.1 1.3 -0.8 -50.0 -11.9 -50.0 -12.6 1.2 0.7 3.5 0.8 -50.0 -7.1 -12.4 -7.1 -7.1 -10.6 -5.0 -10.6", 
  "GCT -9.0 -6.5 -10.0 -4.8 0.1 -0.1 -0.3 2.4 -9.9 -3.5 -10.6 -2.0 -5.4 -6.6 -5.6 -4.4 -7.6 -9.9 -8.5 -8.2 -3.0 -2.8 -3.0 -0.9 -12.8 -11.8 -10.7 -9.3 -8.8 -9.2 -9.2 -7.1 -6.2 -7.3 -6.7 -4.9 9.1 9.1 8.8 11.2 -3.1 -3.0 -3.3 -1.0 -1.1 -1.4 -2.0 1.2 -50.0 -12.8 -50.0 -10.9 0.8 0.5 0.7 2.3 -50.0 -7.5 -16.5 -5.9 -7.8 -11.1 -7.8 -9.0", "GGA -7.1 -5.6 -9.1 -5.1 -5.9 -8.0 -6.9 -7.4 -1.9 -1.6 -4.7 -1.4 -9.6 -14.6 -10.4 -13.0 -6.7 -10.8 -9.4 -9.9 -9.1 -10.5 -9.1 -10.4 -5.9 -9.3 -7.9 -8.1 -12.7 -15.0 -15.1 -14.3 -2.2 -5.4 -5.0 -5.4 -1.0 -3.7 -2.1 -3.1 12.8 9.6 11.1 10.1 -4.8 -9.4 -8.1 -8.6 -50.0 -18.3 -50.0 -15.4 -5.9 -7.5 -6.6 -7.1 -50.0 -9.5 -11.7 -8.4 -12.5 -17.3 -13.2 -15.4", 
  "GGC -10.2 -1.6 -10.2 -3.2 -7.3 -4.6 -6.5 -6.2 -6.7 3.0 -6.8 0.8 -11.9 -10.8 -11.5 -12.2 -9.6 -7.1 -9.7 -8.4 -9.8 -8.1 -8.2 -9.7 -9.4 -5.0 -8.0 -7.2 -15.2 -12.8 -14.9 -13.8 -6.6 -1.7 -6.8 -4.2 -3.3 -0.9 -2.0 -3.0 9.6 12.8 9.7 10.5 -8.5 -5.6 -9.3 -7.8 -50.0 -12.7 -50.0 -13.8 -6.8 -5.1 -5.3 -6.5 -50.0 -4.1 -12.8 -5.8 -14.4 -14.1 -13.6 -14.8", "GGG -8.2 -4.7 -7.1 -5.0 -6.5 -7.7 -5.5 -6.9 -4.1 -0.8 -1.2 -0.9 -10.5 -12.8 -8.2 -13.0 -7.5 -10.0 -7.2 -9.7 -9.2 -9.4 -7.3 -10.2 -6.5 -8.0 -4.3 -8.0 -13.1 -14.1 -12.2 -13.8 -3.7 -5.4 -2.5 -5.4 -1.8 -3.1 0.1 -3.3 11.1 9.7 12.9 9.8 -5.5 -8.1 -5.4 -7.8 -50.0 -16.4 -50.0 -14.8 -5.9 -7.1 -4.7 -7.2 -50.0 -8.4 -6.4 -8.1 -12.1 -16.2 -10.3 -15.8", 
  "GGT -9.2 -3.0 -9.9 -1.2 -6.5 -6.1 -6.8 -4.4 -6.4 0.9 -7.0 3.0 -11.8 -13.0 -11.1 -10.4 -9.3 -9.2 -9.8 -6.4 -9.5 -9.5 -9.4 -8.0 -8.1 -8.2 -9.4 -5.2 -14.2 -14.9 -14.9 -12.3 -5.7 -3.7 -6.7 -1.3 -2.4 -3.0 -2.4 -1.0 10.1 10.5 9.8 13.1 -7.2 -8.0 -8.4 -5.0 -50.0 -14.7 -50.0 -11.4 -6.3 -6.7 -5.8 -5.0 -50.0 -6.1 -13.4 -3.6 -13.0 -16.0 -13.7 -13.3", "GTA -8.2 -10.8 -10.1 -9.8 -0.4 -3.6 -1.7 -2.9 -7.9 -8.4 -9.8 -8.2 6.2 2.3 0.6 2.9 -7.1 -11.6 -9.2 -11.1 -5.6 -8.3 -7.2 -8.4 -10.7 -13.6 -11.4 -12.0 0.0 -2.8 -1.8 -2.4 -6.0 -11.6 -7.5 -10.8 1.5 -2.0 0.0 -1.1 -4.8 -8.5 -5.5 -7.2 11.9 8.6 10.0 9.0 -50.0 -14.2 -50.0 -12.8 -4.1 -7.4 -5.7 -6.5 -50.0 -11.0 -14.3 -9.9 1.4 -7.9 -0.7 -6.8", 
  "GTC -12.5 -8.7 -13.0 -9.9 -3.9 -1.0 -3.4 -2.9 -12.5 -6.3 -11.6 -8.1 3.3 6.0 -1.6 3.8 -10.5 -10.1 -11.1 -11.1 -9.0 -6.9 -8.2 -9.1 -14.0 -11.4 -12.3 -12.1 -3.1 0.2 -3.2 -2.2 -10.4 -9.1 -10.4 -11.5 -2.1 1.2 -1.1 -1.4 -9.4 -5.6 -8.1 -8.0 8.6 12.4 8.6 9.5 -50.0 -10.4 -50.0 -11.6 -7.2 -5.7 -7.5 -7.4 -50.0 -8.6 -15.7 -9.7 -3.0 -3.7 -3.2 -5.9", "GTG -11.1 -11.9 -10.6 -11.3 -2.6 -4.1 -1.7 -3.5 -11.4 -9.6 -9.6 -9.2 3.7 2.5 1.6 2.5 -9.6 -12.3 -9.5 -11.8 -8.0 -9.4 -7.2 -9.3 -13.3 -12.8 -10.9 -12.6 -1.8 -2.9 -0.8 -2.9 -8.6 -13.0 -7.4 -12.4 -0.4 -2.3 1.3 -2.0 -8.1 -9.3 -5.4 -8.4 10.0 8.6 11.4 8.9 -50.0 -13.7 -50.0 -13.2 -6.1 -8.1 -5.5 -7.5 -50.0 -11.3 -12.7 -10.1 -1.6 -7.8 -0.3 -7.2", 
  "GTT -11.4 -10.0 -12.7 -8.2 -3.1 -3.1 -2.8 -0.9 -11.7 -7.3 -12.1 -5.8 3.6 3.6 -1.1 5.8 -9.4 -11.9 -10.7 -10.0 -8.5 -8.8 -8.2 -6.5 -13.9 -13.0 -12.9 -10.9 -3.1 -2.3 -3.2 -0.2 -9.5 -10.8 -10.2 -8.2 -1.1 -1.3 -0.8 1.2 -8.6 -7.8 -7.8 -5.0 9.0 9.5 8.9 12.0 -50.0 -13.0 -50.0 -10.3 -6.2 -7.0 -7.1 -5.4 -50.0 -9.3 -14.0 -8.2 -2.4 -6.3 -2.4 -3.9", "TAA -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 33.3 -50.0 30.6 -50.0 -50.0 -50.0 -50.0 -50.0 29.2 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0", 
  "TAC -14.8 -6.2 -14.9 -7.6 -14.6 -11.6 -13.0 -12.2 -14.0 -9.0 -14.1 -10.1 -13.6 -11.2 -12.4 -12.5 -8.1 2.2 -8.7 0.4 -15.3 -11.3 -13.2 -13.3 -11.9 -7.2 -11.8 -7.9 -10.7 -7.4 -10.8 -8.9 -15.5 -10.3 -15.5 -12.5 -14.5 -12.1 -11.9 -12.8 -18.3 -12.7 -16.4 -14.7 -14.2 -10.4 -13.7 -13.0 -50.0 15.1 -50.0 13.3 -9.9 -5.8 -8.9 -7.6 -50.0 -1.5 -7.8 -3.0 -8.1 3.6 -9.4 2.0", "TAG -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 30.6 -50.0 35.2 -50.0 -50.0 -50.0 -50.0 -50.0 28.5 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0", 
  "TAT -13.8 -7.5 -14.4 -5.1 -12.6 -11.6 -11.5 -10.1 -13.2 -9.7 -12.7 -7.4 -11.9 -11.9 -11.5 -10.2 -7.2 0.9 -8.6 2.6 -14.1 -12.8 -13.3 -11.0 -9.7 -8.4 -11.2 -5.3 -9.3 -8.7 -9.9 -7.1 -13.9 -11.2 -14.2 -8.9 -12.9 -12.6 -12.6 -10.9 -15.4 -13.8 -14.8 -11.4 -12.8 -11.6 -13.2 -10.3 -50.0 13.3 -50.0 15.2 -8.6 -7.0 -8.4 -4.8 -50.0 -3.0 -7.1 -0.1 -7.3 2.3 -8.7 3.9", "TCA -7.3 -6.3 -8.9 -5.5 2.9 0.2 1.5 1.2 -8.5 -2.3 -10.0 -1.7 -5.6 -10.5 -5.5 -9.6 -4.3 -7.9 -6.1 -7.2 2.3 -0.6 0.5 -0.0 -8.9 -11.0 -9.4 -9.3 -4.6 -9.4 -7.3 -8.1 -7.8 -9.8 -8.9 -9.2 2.8 0.1 1.2 0.8 -5.9 -6.8 -5.9 -6.3 -4.1 -7.2 -6.1 -6.2 -50.0 -9.9 -50.0 -8.6 12.5 9.4 11.0 9.8 -50.0 -4.8 -8.7 -3.5 -0.0 -8.6 -2.1 -7.0", 
  "TCC -10.1 -4.3 -10.8 -5.8 0.1 2.3 0.7 0.6 -10.4 -0.2 -10.8 -2.0 -8.8 -9.2 -8.0 -9.7 -6.8 -5.9 -7.5 -7.0 -1.4 2.2 -0.9 -0.4 -10.8 -7.7 -9.8 -8.8 -8.9 -7.3 -9.6 -9.1 -10.5 -8.3 -10.2 -10.0 -0.0 2.5 0.7 0.5 -7.5 -5.1 -7.1 -6.7 -7.4 -5.7 -8.1 -7.0 -50.0 -5.8 -50.0 -7.0 9.4 12.7 10.1 10.0 -50.0 -1.5 -11.3 -3.3 -5.4 -4.2 -5.6 -6.8", "TCG -8.4 -6.2 -8.9 -5.9 1.8 0.4 2.7 1.2 -9.1 -1.2 -8.8 -1.5 -7.2 -10.5 -4.9 -9.6 -5.7 -7.4 -5.5 -7.4 0.3 -0.3 1.8 -0.4 -9.0 -8.7 -7.3 -8.9 -5.9 -9.4 -6.4 -8.7 -8.7 -9.1 -8.5 -9.4 1.4 0.7 3.5 0.7 -6.6 -5.3 -4.7 -5.8 -5.7 -7.5 -5.5 -7.1 -50.0 -8.9 -50.0 -8.4 11.0 10.1 13.2 10.2 -50.0 -4.2 -6.1 -3.6 -3.5 -8.4 -1.2 -6.8", 
  "TCT -9.1 -5.4 -10.4 -4.2 1.0 0.5 0.6 2.4 -9.6 -1.5 -10.5 -0.5 -8.9 -10.5 -7.2 -8.3 -6.3 -6.9 -7.7 -5.1 -0.5 0.1 -0.6 2.3 -11.1 -10.2 -10.5 -7.0 -8.3 -9.4 -9.4 -6.6 -9.6 -9.7 -10.0 -7.9 0.7 0.6 0.8 2.3 -7.1 -6.5 -7.2 -5.0 -6.5 -7.4 -7.5 -5.4 -50.0 -7.6 -50.0 -4.8 9.8 10.0 10.2 12.1 -50.0 -3.1 -11.4 -0.7 -4.6 -6.6 -4.9 -3.9", "TGA -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 29.2 -50.0 28.5 -50.0 -50.0 -50.0 -50.0 -50.0 33.3 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0 -50.0", 
  "TGC -13.0 -7.0 -13.1 -8.3 -9.2 -6.5 -8.9 -7.6 -9.8 -0.7 -9.2 -2.1 -12.4 -10.3 -12.4 -11.6 -9.5 -4.6 -10.4 -5.7 -13.6 -10.1 -11.4 -10.9 -6.5 -1.5 -6.2 -3.6 -12.8 -8.0 -12.3 -9.7 -16.5 -12.7 -15.6 -14.3 -8.7 -6.0 -7.1 -7.5 -9.5 -4.1 -8.4 -6.1 -11.0 -8.6 -11.3 -9.3 -50.0 -1.5 -50.0 -3.0 -4.8 -1.5 -4.2 -3.1 -50.0 16.4 -5.1 14.2 -10.1 -4.3 -10.0 -5.4", "TGG -13.5 -16.3 -11.8 -15.5 -13.6 -15.3 -12.1 -16.1 -7.7 -13.3 -4.2 -12.6 -14.1 -16.2 -10.3 -15.4 -9.6 -11.6 -7.7 -9.8 -14.3 -17.5 -11.1 -17.2 -5.3 -7.1 -2.2 -7.1 -9.6 -11.9 -8.7 -11.4 -17.1 -20.6 -15.3 -19.9 -14.1 -14.8 -12.4 -16.5 -11.7 -12.8 -6.4 -13.4 -14.3 -15.7 -12.7 -14.0 -50.0 -7.8 -50.0 -7.1 -8.7 -11.3 -6.1 -11.4 -50.0 -5.1 18.6 -4.8 -8.6 -8.1 -4.5 -7.3", 
  "TGT -12.4 -8.2 -13.0 -5.9 -7.7 -7.8 -7.4 -5.8 -8.8 -2.0 -9.3 -0.4 -11.6 -11.3 -11.6 -9.4 -8.9 -5.6 -10.0 -3.2 -11.5 -11.1 -10.5 -8.3 -6.3 -4.9 -6.7 -1.2 -10.6 -9.7 -11.3 -8.0 -14.8 -13.1 -15.5 -11.4 -7.5 -7.5 -7.1 -5.9 -8.4 -5.8 -8.1 -3.6 -9.9 -9.7 -10.1 -8.2 -50.0 -3.0 -50.0 -0.1 -3.5 -3.3 -3.6 -0.7 -50.0 14.2 -4.8 16.4 -8.9 -5.8 -8.9 -3.4", "TTA -10.7 -13.2 -12.4 -11.6 -4.8 -8.4 -6.1 -7.2 -10.3 -11.8 -11.0 -11.6 2.8 -1.7 0.7 -1.1 -6.2 -9.7 -7.3 -8.4 -5.3 -8.6 -6.1 -8.3 -10.5 -11.2 -9.8 -10.2 9.5 6.5 7.6 6.8 -12.1 -16.0 -13.0 -16.2 -5.2 -8.6 -7.1 -7.8 -12.5 -14.4 -12.1 -13.0 1.4 -3.0 -1.6 -2.4 -50.0 -8.1 -50.0 -7.3 -0.0 -5.4 -3.5 -4.6 -50.0 -10.1 -8.6 -8.9 13.2 -0.9 9.7 -0.3", 
  "TTC -18.1 -12.3 -19.4 -14.2 -12.2 -9.5 -11.5 -10.8 -17.9 -11.9 -18.2 -13.9 -6.4 -3.7 -6.8 -5.4 -12.8 -5.9 -13.6 -7.4 -13.7 -9.9 -12.9 -12.7 -16.2 -11.6 -15.2 -12.7 -3.2 0.5 -3.3 -1.8 -18.9 -16.6 -18.8 -19.2 -12.5 -9.4 -10.6 -11.1 -17.3 -14.1 -16.2 -16.0 -7.9 -3.7 -7.8 -6.3 -50.0 3.6 -50.0 2.3 -8.6 -4.2 -8.4 -6.6 -50.0 -4.3 -8.1 -5.8 -0.9 14.2 -1.8 11.6", "TTG -11.8 -13.1 -11.5 -12.0 -6.2 -8.3 -5.4 -7.4 -11.8 -12.3 -11.1 -11.4 0.5 -2.5 2.4 -1.6 -6.8 -9.9 -6.4 -8.9 -6.1 -8.6 -5.0 -7.8 -10.4 -11.6 -8.5 -9.9 8.2 6.4 8.7 6.9 -12.4 -17.0 -12.6 -15.8 -6.5 -8.5 -5.0 -7.8 -13.2 -13.6 -10.3 -13.7 -0.7 -3.2 -0.3 -2.4 -50.0 -9.4 -50.0 -8.7 -2.1 -5.6 -1.2 -4.9 -50.0 -10.0 -4.5 -8.9 9.7 -1.8 11.3 -0.9", 
  "TTT -17.2 -13.3 -17.8 -11.6 -11.0 -11.1 -10.4 -9.0 -16.0 -12.7 -16.1 -11.1 -5.2 -5.4 -6.0 -3.3 -11.8 -7.3 -13.3 -5.9 -12.7 -11.9 -11.9 -9.3 -15.2 -15.0 -14.9 -11.0 -2.8 -1.8 -2.9 0.4 -17.4 -18.4 -18.3 -15.9 -10.7 -11.2 -10.6 -9.0 -15.4 -14.8 -15.8 -13.3 -6.8 -5.9 -7.2 -3.9 -50.0 2.0 -50.0 3.9 -7.0 -6.8 -6.8 -3.9 -50.0 -5.4 -7.3 -3.4 -0.3 11.6 -0.9 14.1");
  JAMScript.call(this.scoringMatrix_fillHash, this, [matrix$$2]);
  return
}
function align() {
  var v1086 = this.M;
  var v779 = v1086.length;
  var v344 = v779 == 0;
  if(v344) {
    var j$$11 = 1;
    var v1087 = this.N;
    var v780 = v1087.length;
    var v333 = j$$11 <= v780;
    for(;v333;) {
      var v328 = this.alignedM;
      v328.push(".--");
      var v329 = this.alignedN;
      var v781 = this.N;
      var v782 = j$$11 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v330 = v781[v782]
      }
      v329.push(v330);
      var v331 = this.score;
      var v783 = this.scoreSet;
      var v332 = v783.gap;
      this.score = v331 + v332;
      j$$11 = j$$11 + 1;
      var v1088 = this.N;
      var v784 = v1088.length;
      v333 = j$$11 <= v784
    }
  }else {
    var v1089 = this.N;
    var v785 = v1089.length;
    var v343 = v785 == 0;
    if(v343) {
      j$$11 = 1;
      var v1090 = this.M;
      var v786 = v1090.length;
      var v339 = j$$11 <= v786;
      for(;v339;) {
        var v334 = this.alignedN;
        v334.push(".--");
        var v335 = this.alignedM;
        var v787 = this.M;
        var v788 = j$$11 - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v336 = v787[v788]
        }
        v335.push(v336);
        var v337 = this.score;
        var v789 = this.scoreSet;
        var v338 = v789.gap;
        this.score = v337 + v338;
        j$$11 = j$$11 + 1;
        var v1091 = this.M;
        var v790 = v1091.length;
        v339 = j$$11 <= v790
      }
    }else {
      var v1314 = this.M;
      var v1092 = v1314.length;
      var v791 = v1092 == 0;
      if(v791) {
        var v1315 = this.N;
        var v1093 = v1315.length;
        v791 = v1093 == 0
      }
      var v342 = v791;
      if(v342) {
      }else {
        var v792 = this.M;
        var v340 = v792.length;
        var v793 = this.N;
        var v341 = v793.length;
        JAMScript.call(this.path, this, [0, 0, v340, v341])
      }
    }
  }
  return
}
function path(i1, j1, i2, j2) {
  var v1094 = i1 + 1;
  var v794 = v1094 == i2;
  var v1095 = !v794;
  if(v1095) {
    v794 = j1 == j2
  }
  var v441 = v794;
  if(v441) {
    var subM = new Array;
    var subN = new Array;
    var i$$12 = i1 + 1;
    var v346 = i$$12 <= i2;
    for(;v346;) {
      var v795 = this.M;
      var v796 = i$$12 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v345 = v795[v796]
      }
      subM.push(v345);
      i$$12 = i$$12 + 1;
      v346 = i$$12 <= i2
    }
    var j$$12 = j1 + 1;
    var v348 = j$$12 <= j2;
    for(;v348;) {
      var v797 = this.N;
      var v798 = j$$12 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v347 = v797[v798]
      }
      subN.push(v347);
      j$$12 = j$$12 + 1;
      v348 = j$$12 <= j2
    }
    var alignment$$1 = new AlignPairQuad;
    subScoreSet = new ScoreSet;
    var v371 = j1 == j2;
    if(v371) {
      var v362 = j1 == 0;
      if(v362) {
        var v799 = this.scoreSet;
        var v349 = v799.scoringMatrix;
        var v800 = this.scoreSet;
        var v350 = v800.beginGap;
        var v801 = this.scoreSet;
        var v351 = v801.beginGap;
        var v802 = this.scoreSet;
        var v352 = v802.beginGap;
        JAMScript.call(subScoreSet.setScoreSetParam, subScoreSet, [v349, v350, v351, v352])
      }else {
        var v1096 = this.N;
        var v803 = v1096.length;
        var v361 = j1 == v803;
        if(v361) {
          var v804 = this.scoreSet;
          var v353 = v804.scoringMatrix;
          var v805 = this.scoreSet;
          var v354 = v805.endGap;
          var v806 = this.scoreSet;
          var v355 = v806.endGap;
          var v807 = this.scoreSet;
          var v356 = v807.endGap;
          JAMScript.call(subScoreSet.setScoreSetParam, subScoreSet, [v353, v354, v355, v356])
        }else {
          var v808 = this.scoreSet;
          var v357 = v808.scoringMatrix;
          var v809 = this.scoreSet;
          var v358 = v809.gap;
          var v810 = this.scoreSet;
          var v359 = v810.gap;
          var v811 = this.scoreSet;
          var v360 = v811.gap;
          JAMScript.call(subScoreSet.setScoreSetParam, subScoreSet, [v357, v358, v359, v360])
        }
      }
    }else {
      var v812 = this.scoreSet;
      var v363 = v812.scoringMatrix;
      var v813 = this.scoreSet;
      var v364 = v813.gap;
      var v814 = this.scoreSet;
      var v365 = v814.beginGap;
      var v815 = this.scoreSet;
      var v366 = v815.endGap;
      JAMScript.call(subScoreSet.setScoreSetParam, subScoreSet, [v363, v364, v365, v366]);
      subScoreSet.useBeginGapTop = false;
      subScoreSet.useBeginGapLeft = false;
      subScoreSet.useEndGapBottom = false;
      subScoreSet.useEndGapRight = false;
      var v367 = i1 == 0;
      if(v367) {
        subScoreSet.useBeginGapTop = true
      }
      var v368 = j1 == 0;
      if(v368) {
        subScoreSet.useBeginGapLeft = true
      }
      var v1097 = this.N;
      var v816 = v1097.length;
      var v369 = j2 == v816;
      if(v369) {
        subScoreSet.useEndGapRight = true
      }
      var v1098 = this.M;
      var v817 = v1098.length;
      var v370 = i2 == v817;
      if(v370) {
        subScoreSet.useEndGapBottom = true
      }
    }
    JAMScript.call(alignment$$1.initializeMatrix, alignment$$1, [subM, subN, subScoreSet]);
    JAMScript.call(alignment$$1.fillMatrix, alignment$$1, []);
    JAMScript.call(alignment$$1.align, alignment$$1, []);
    var v372 = this.alignedM;
    var v373 = JAMScript.call(alignment$$1.getAlignedM, alignment$$1, []);
    v372.push(v373);
    var v374 = this.alignedN;
    var v375 = JAMScript.call(alignment$$1.getAlignedN, alignment$$1, []);
    v374.push(v375);
    var v376 = this.score;
    var v377 = alignment$$1.score;
    this.score = v376 + v377
  }else {
    var v818 = i1 + i2;
    var v378 = v818 / 2;
    var middle = Math.floor(v378);
    var v379 = this.Sn;
    JAMScript.set(v379, j1, 0, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
    var v384 = i1 == 0;
    if(v384) {
      j$$12 = j1 + 1;
      var v381 = j$$12 <= j2;
      for(;v381;) {
        var v380 = this.Sn;
        var v1099 = this.Sn;
        var v1100 = j$$12 - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v819 = v1099[v1100]
        }
        var v1101 = this.scoreSet;
        var v820 = v1101.beginGap;
        JAMScript.set(v380, j$$12, v819 - v820, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$12 = j$$12 + 1;
        v381 = j$$12 <= j2
      }
    }else {
      j$$12 = j1 + 1;
      var v383 = j$$12 <= j2;
      for(;v383;) {
        var v382 = this.Sn;
        var v1102 = this.Sn;
        var v1103 = j$$12 - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v821 = v1102[v1103]
        }
        var v1104 = this.scoreSet;
        var v822 = v1104.gap;
        JAMScript.set(v382, j$$12, v821 - v822, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$12 = j$$12 + 1;
        v383 = j$$12 <= j2
      }
    }
    var diag;
    var left$$2;
    i$$12 = i1 + 1;
    var v406 = i$$12 <= middle;
    for(;v406;) {
      var v385 = this.Sn;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        diag = v385[j1]
      }
      var v390 = j1 == 0;
      if(v390) {
        var v823 = this.Sn;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v386 = v823[j1]
        }
        var v824 = this.scoreSet;
        var v387 = v824.beginGap;
        left$$2 = v386 - v387
      }else {
        var v825 = this.Sn;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v388 = v825[j1]
        }
        var v826 = this.scoreSet;
        var v389 = v826.gap;
        left$$2 = v388 - v389
      }
      var v391 = this.Sn;
      JAMScript.set(v391, j1, left$$2, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
      j$$12 = j1 + 1;
      var v405 = j$$12 <= j2;
      for(;v405;) {
        var v1316 = this.N;
        var v1105 = v1316.length;
        var v827 = j$$12 == v1105;
        if(v827) {
          var v1317 = this.M;
          var v1106 = v1317.length;
          v827 = i$$12 == v1106
        }
        var v402 = v827;
        if(v402) {
          var v1107 = this.Sn;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v828 = v1107[j$$12]
          }
          var v1108 = this.scoreSet;
          var v829 = v1108.endGap;
          var v392 = v828 - v829;
          var v1318 = this.scoreSet;
          var v1109 = v1318.endGap;
          var v830 = left$$2 - v1109;
          var v1110 = diag;
          var v1319 = this.scoreSet;
          var v1442 = this.M;
          var v1443 = i$$12 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1320 = v1442[v1443]
          }
          var v1444 = this.N;
          var v1445 = j$$12 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1321 = v1444[v1445]
          }
          var v1111 = JAMScript.call(v1319.getScore, v1319, [v1320, v1321]);
          var v831 = v1110 + v1111;
          var v393 = Math.max(v830, v831);
          left$$2 = Math.max(v392, v393)
        }else {
          var v1112 = this.M;
          var v832 = v1112.length;
          var v401 = i$$12 == v832;
          if(v401) {
            var v1113 = this.Sn;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v833 = v1113[j$$12]
            }
            var v1114 = this.scoreSet;
            var v834 = v1114.gap;
            var v394 = v833 - v834;
            var v1322 = this.scoreSet;
            var v1115 = v1322.endGap;
            var v835 = left$$2 - v1115;
            var v1116 = diag;
            var v1323 = this.scoreSet;
            var v1446 = this.M;
            var v1447 = i$$12 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1324 = v1446[v1447]
            }
            var v1448 = this.N;
            var v1449 = j$$12 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1325 = v1448[v1449]
            }
            var v1117 = JAMScript.call(v1323.getScore, v1323, [v1324, v1325]);
            var v836 = v1116 + v1117;
            var v395 = Math.max(v835, v836);
            left$$2 = Math.max(v394, v395)
          }else {
            var v1118 = this.N;
            var v837 = v1118.length;
            var v400 = j$$12 == v837;
            if(v400) {
              var v1119 = this.Sn;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v838 = v1119[j$$12]
              }
              var v1120 = this.scoreSet;
              var v839 = v1120.endGap;
              var v396 = v838 - v839;
              var v1326 = this.scoreSet;
              var v1121 = v1326.gap;
              var v840 = left$$2 - v1121;
              var v1122 = diag;
              var v1327 = this.scoreSet;
              var v1450 = this.M;
              var v1451 = i$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1328 = v1450[v1451]
              }
              var v1452 = this.N;
              var v1453 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1329 = v1452[v1453]
              }
              var v1123 = JAMScript.call(v1327.getScore, v1327, [v1328, v1329]);
              var v841 = v1122 + v1123;
              var v397 = Math.max(v840, v841);
              left$$2 = Math.max(v396, v397)
            }else {
              var v1124 = this.Sn;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v842 = v1124[j$$12]
              }
              var v1125 = this.scoreSet;
              var v843 = v1125.gap;
              var v398 = v842 - v843;
              var v1330 = this.scoreSet;
              var v1126 = v1330.gap;
              var v844 = left$$2 - v1126;
              var v1127 = diag;
              var v1331 = this.scoreSet;
              var v1454 = this.M;
              var v1455 = i$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1332 = v1454[v1455]
              }
              var v1456 = this.N;
              var v1457 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1333 = v1456[v1457]
              }
              var v1128 = JAMScript.call(v1331.getScore, v1331, [v1332, v1333]);
              var v845 = v1127 + v1128;
              var v399 = Math.max(v844, v845);
              left$$2 = Math.max(v398, v399)
            }
          }
        }
        var v403 = this.Sn;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          diag = v403[j$$12]
        }
        var v404 = this.Sn;
        JAMScript.set(v404, j$$12, left$$2, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$12 = j$$12 + 1;
        v405 = j$$12 <= j2
      }
      i$$12 = i$$12 + 1;
      v406 = i$$12 <= middle
    }
    var v407 = this.Sp;
    JAMScript.set(v407, j2, 0, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
    var v1129 = this.M;
    var v846 = v1129.length;
    var v412 = i2 == v846;
    if(v412) {
      j$$12 = j2 - 1;
      var v409 = j$$12 >= j1;
      for(;v409;) {
        var v408 = this.Sp;
        var v1130 = this.Sp;
        var v1131 = j$$12 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v847 = v1130[v1131]
        }
        var v1132 = this.scoreSet;
        var v848 = v1132.endGap;
        JAMScript.set(v408, j$$12, v847 - v848, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$12 = j$$12 - 1;
        v409 = j$$12 >= j1
      }
    }else {
      j$$12 = j2 - 1;
      var v411 = j$$12 >= j1;
      for(;v411;) {
        var v410 = this.Sp;
        var v1133 = this.Sp;
        var v1134 = j$$12 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v849 = v1133[v1134]
        }
        var v1135 = this.scoreSet;
        var v850 = v1135.gap;
        JAMScript.set(v410, j$$12, v849 - v850, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$12 = j$$12 - 1;
        v411 = j$$12 >= j1
      }
    }
    var right$$2;
    i$$12 = i2 - 1;
    var v434 = i$$12 >= middle;
    for(;v434;) {
      var v413 = this.Sp;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        diag = v413[j2]
      }
      var v1136 = this.N;
      var v851 = v1136.length;
      var v418 = j2 == v851;
      if(v418) {
        var v852 = this.Sp;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v414 = v852[j2]
        }
        var v853 = this.scoreSet;
        var v415 = v853.endGap;
        right$$2 = v414 - v415
      }else {
        var v854 = this.Sp;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v416 = v854[j2]
        }
        var v855 = this.scoreSet;
        var v417 = v855.gap;
        right$$2 = v416 - v417
      }
      var v419 = this.Sp;
      JAMScript.set(v419, j2, right$$2, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
      j$$12 = j2 - 1;
      var v433 = j$$12 >= j1;
      for(;v433;) {
        var v856 = j$$12 == 0;
        if(v856) {
          v856 = i$$12 == 0
        }
        var v430 = v856;
        if(v430) {
          var v1137 = this.Sp;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v857 = v1137[j$$12]
          }
          var v1138 = this.scoreSet;
          var v858 = v1138.beginGap;
          var v420 = v857 - v858;
          var v1334 = this.scoreSet;
          var v1139 = v1334.beginGap;
          var v859 = right$$2 - v1139;
          var v1140 = diag;
          var v1335 = this.scoreSet;
          var v1458 = this.M;
          var v1510 = i$$12 + 1;
          var v1459 = v1510 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1336 = v1458[v1459]
          }
          var v1460 = this.N;
          var v1511 = j$$12 + 1;
          var v1461 = v1511 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1337 = v1460[v1461]
          }
          var v1141 = JAMScript.call(v1335.getScore, v1335, [v1336, v1337]);
          var v860 = v1140 + v1141;
          var v421 = Math.max(v859, v860);
          right$$2 = Math.max(v420, v421)
        }else {
          var v429 = j$$12 == 0;
          if(v429) {
            var v1142 = this.Sp;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v861 = v1142[j$$12]
            }
            var v1143 = this.scoreSet;
            var v862 = v1143.beginGap;
            var v422 = v861 - v862;
            var v1338 = this.scoreSet;
            var v1144 = v1338.gap;
            var v863 = right$$2 - v1144;
            var v1145 = diag;
            var v1339 = this.scoreSet;
            var v1462 = this.M;
            var v1512 = i$$12 + 1;
            var v1463 = v1512 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1340 = v1462[v1463]
            }
            var v1464 = this.N;
            var v1513 = j$$12 + 1;
            var v1465 = v1513 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1341 = v1464[v1465]
            }
            var v1146 = JAMScript.call(v1339.getScore, v1339, [v1340, v1341]);
            var v864 = v1145 + v1146;
            var v423 = Math.max(v863, v864);
            right$$2 = Math.max(v422, v423)
          }else {
            var v428 = i$$12 == 0;
            if(v428) {
              var v1147 = this.Sp;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v865 = v1147[j$$12]
              }
              var v1148 = this.scoreSet;
              var v866 = v1148.gap;
              var v424 = v865 - v866;
              var v1342 = this.scoreSet;
              var v1149 = v1342.beginGap;
              var v867 = right$$2 - v1149;
              var v1150 = diag;
              var v1343 = this.scoreSet;
              var v1466 = this.M;
              var v1514 = i$$12 + 1;
              var v1467 = v1514 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1344 = v1466[v1467]
              }
              var v1468 = this.N;
              var v1515 = j$$12 + 1;
              var v1469 = v1515 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1345 = v1468[v1469]
              }
              var v1151 = JAMScript.call(v1343.getScore, v1343, [v1344, v1345]);
              var v868 = v1150 + v1151;
              var v425 = Math.max(v867, v868);
              right$$2 = Math.max(v424, v425)
            }else {
              var v1152 = this.Sp;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v869 = v1152[j$$12]
              }
              var v1153 = this.scoreSet;
              var v870 = v1153.gap;
              var v426 = v869 - v870;
              var v1346 = this.scoreSet;
              var v1154 = v1346.gap;
              var v871 = right$$2 - v1154;
              var v1155 = diag;
              var v1347 = this.scoreSet;
              var v1470 = this.M;
              var v1516 = i$$12 + 1;
              var v1471 = v1516 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1348 = v1470[v1471]
              }
              var v1472 = this.N;
              var v1517 = j$$12 + 1;
              var v1473 = v1517 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1349 = v1472[v1473]
              }
              var v1156 = JAMScript.call(v1347.getScore, v1347, [v1348, v1349]);
              var v872 = v1155 + v1156;
              var v427 = Math.max(v871, v872);
              right$$2 = Math.max(v426, v427)
            }
          }
        }
        var v431 = this.Sp;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          diag = v431[j$$12]
        }
        var v432 = this.Sp;
        JAMScript.set(v432, j$$12, right$$2, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$12 = j$$12 - 1;
        v433 = j$$12 >= j1
      }
      i$$12 = i$$12 - 1;
      v434 = i$$12 >= middle
    }
    var v873 = this.Sn;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v435 = v873[j1]
    }
    var v874 = this.Sp;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v436 = v874[j1]
    }
    var maxValue = v435 + v436;
    var maxJ = j1;
    j$$12 = j1 + 1;
    var v440 = j$$12 <= j2;
    for(;v440;) {
      var v1350 = this.Sn;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1157 = v1350[j$$12]
      }
      var v1351 = this.Sp;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1158 = v1351[j$$12]
      }
      var v875 = v1157 + v1158;
      var v439 = v875 >= maxValue;
      if(v439) {
        var v876 = this.Sn;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v437 = v876[j$$12]
        }
        var v877 = this.Sp;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v438 = v877[j$$12]
        }
        maxValue = v437 + v438;
        maxJ = j$$12
      }
      j$$12 = j$$12 + 1;
      v440 = j$$12 <= j2
    }
    JAMScript.call(this.path, this, [i1, j1, middle, maxJ]);
    JAMScript.call(this.path, this, [middle, maxJ, i2, j2])
  }
  return
}
function getAlignedM() {
  var v442 = this.alignedM;
  return v442.join("")
}
function getAlignedN() {
  var v443 = this.alignedN;
  return v443.join("")
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1613 = new Array;
  this.alignedM = v1613;
  var v1614 = new Array;
  this.alignedN = v1614;
  this.scoreSet = scoreSet$$1;
  var v878 = this.N;
  var v444 = v878.length;
  var v1615 = new Array(v444);
  this.Sn = v1615;
  var v879 = this.N;
  var v445 = v879.length;
  var v1616 = new Array(v445);
  this.Sp = v1616;
  this.score = 0;
  return
}
function AlignPairLinear() {
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
  var v1159 = this.M;
  var v880 = v1159.length;
  var v446 = v880 + 1;
  var v1617 = new Array(v446);
  this.nodes = v1617;
  var i$$13 = 0;
  var v1160 = this.nodes;
  var v881 = v1160.length;
  var v452 = i$$13 < v881;
  for(;v452;) {
    var v447 = this.nodes;
    var v448 = i$$13;
    var v1352 = this.N;
    var v1161 = v1352.length;
    var v882 = v1161 + 1;
    var v1618 = new Array(v882);
    v447[v448] = v1618;
    var j$$13 = 0;
    var v1353 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1162 = v1353[i$$13]
    }
    var v883 = v1162.length;
    var v451 = j$$13 < v883;
    for(;v451;) {
      var v884 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v449 = v884[i$$13]
      }
      var v450 = j$$13;
      var v1619 = new Node;
      v449[v450] = v1619;
      j$$13 = j$$13 + 1;
      var v1354 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1163 = v1354[i$$13]
      }
      var v885 = v1163.length;
      v451 = j$$13 < v885
    }
    i$$13 = i$$13 + 1;
    var v1164 = this.nodes;
    var v886 = v1164.length;
    v452 = i$$13 < v886
  }
  var v1165 = this.nodes;
  var v887 = v1165[0];
  var v453 = v887[0];
  v453.value = 0;
  i$$13 = 1;
  var v1166 = this.nodes;
  var v888 = v1166.length;
  var v459 = i$$13 < v888;
  for(;v459;) {
    var v889 = this.scoreSet;
    var v456 = v889.useBeginGapLeft;
    if(v456) {
      var v1167 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v890 = v1167[i$$13]
      }
      var v454 = v890[0];
      var v1474 = this.nodes;
      var v1475 = i$$13 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1355 = v1474[v1475]
      }
      var v1168 = v1355[0];
      var v891 = v1168.value;
      var v1169 = this.scoreSet;
      var v892 = v1169.beginGap;
      v454.value = v891 - v892
    }else {
      var v1170 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v893 = v1170[i$$13]
      }
      var v455 = v893[0];
      var v1476 = this.nodes;
      var v1477 = i$$13 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1356 = v1476[v1477]
      }
      var v1171 = v1356[0];
      var v894 = v1171.value;
      var v1172 = this.scoreSet;
      var v895 = v1172.gap;
      v455.value = v894 - v895
    }
    var v1173 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v896 = v1173[i$$13]
    }
    var v457 = v896[0];
    v457.tracebackI = i$$13 - 1;
    var v1174 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v897 = v1174[i$$13]
    }
    var v458 = v897[0];
    v458.tracebackJ = 0;
    i$$13 = i$$13 + 1;
    var v1175 = this.nodes;
    var v898 = v1175.length;
    v459 = i$$13 < v898
  }
  j$$13 = 1;
  var v1357 = this.nodes;
  var v1176 = v1357[0];
  var v899 = v1176.length;
  var v465 = j$$13 < v899;
  for(;v465;) {
    var v900 = this.scoreSet;
    var v462 = v900.useBeginGapTop;
    if(v462) {
      var v1177 = this.nodes;
      var v901 = v1177[0];
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v460 = v901[j$$13]
      }
      var v1478 = this.nodes;
      var v1358 = v1478[0];
      var v1359 = j$$13 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1178 = v1358[v1359]
      }
      var v902 = v1178.value;
      var v1179 = this.scoreSet;
      var v903 = v1179.beginGap;
      v460.value = v902 - v903
    }else {
      var v1180 = this.nodes;
      var v904 = v1180[0];
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v461 = v904[j$$13]
      }
      var v1479 = this.nodes;
      var v1360 = v1479[0];
      var v1361 = j$$13 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1181 = v1360[v1361]
      }
      var v905 = v1181.value;
      var v1182 = this.scoreSet;
      var v906 = v1182.gap;
      v461.value = v905 - v906
    }
    var v1183 = this.nodes;
    var v907 = v1183[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v463 = v907[j$$13]
    }
    v463.tracebackI = 0;
    var v1184 = this.nodes;
    var v908 = v1184[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v464 = v908[j$$13]
    }
    v464.tracebackJ = j$$13 - 1;
    j$$13 = j$$13 + 1;
    var v1362 = this.nodes;
    var v1185 = v1362[0];
    var v909 = v1185.length;
    v465 = j$$13 < v909
  }
  return
}
function dumpMatrix() {
  var v466 = outputWindow.document;
  var v1480 = this.nodes;
  var v1363 = v1480.length;
  var v1186 = "Dynamic programming matrix i=" + v1363;
  var v910 = v1186 + " and j=";
  var v1364 = this.nodes;
  var v1187 = v1364[0];
  var v911 = v1187.length;
  var v467 = v910 + v911;
  JAMScript.call(v466.write, v466, [v467]);
  var v468 = outputWindow.document;
  JAMScript.call(v468.write, v468, ["\n"]);
  var i$$14 = 0;
  var v1188 = this.nodes;
  var v912 = v1188.length;
  var v479 = i$$14 < v912;
  for(;v479;) {
    var j$$14 = 0;
    var v1365 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1189 = v1365[i$$14]
    }
    var v913 = v1189.length;
    var v477 = j$$14 < v913;
    for(;v477;) {
      var v1190 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v914 = v1190[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v469 = v914[j$$14]
      }
      var traceI = v469.tracebackI;
      var v1191 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v915 = v1191[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v470 = v915[j$$14]
      }
      var traceJ = v470.tracebackJ;
      var v471 = traceI == undefined;
      if(v471) {
        traceI = "u"
      }
      var v472 = traceJ == undefined;
      if(v472) {
        traceJ = "u"
      }
      var v1554 = "(" + i$$14;
      var v1540 = v1554 + ",";
      var v1518 = v1540 + j$$14;
      var v1481 = v1518 + ")[";
      var v1366 = v1481 + traceI;
      var v1192 = v1366 + ",";
      var v916 = v1192 + traceJ;
      var v473 = v916 + "]=";
      var v1367 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1193 = v1367[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v917 = v1193[j$$14]
      }
      var v474 = v917.value;
      var output = v473 + v474;
      var v475 = outputWindow.document;
      var v476 = rightNum(output, "", 20, " ");
      JAMScript.call(v475.write, v475, [v476]);
      j$$14 = j$$14 + 1;
      var v1368 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1194 = v1368[i$$14]
      }
      var v918 = v1194.length;
      v477 = j$$14 < v918
    }
    var v478 = outputWindow.document;
    JAMScript.call(v478.write, v478, ["\n"]);
    i$$14 = i$$14 + 1;
    var v1195 = this.nodes;
    var v919 = v1195.length;
    v479 = i$$14 < v919
  }
  var v480 = outputWindow.document;
  JAMScript.call(v480.write, v480, ["\n"]);
  return
}
function fillMatrix() {
  var i$$15 = 1;
  var v1196 = this.nodes;
  var v920 = v1196.length;
  var v526 = i$$15 < v920;
  for(;v526;) {
    var j$$15 = 1;
    var v1369 = this.nodes;
    var v1197 = v1369[0];
    var v921 = v1197.length;
    var v525 = j$$15 < v921;
    for(;v525;) {
      var a;
      var b;
      var c;
      var v1482 = this.nodes;
      var v1370 = v1482.length;
      var v1198 = v1370 - 1;
      var v922 = i$$15 == v1198;
      if(v922) {
        var v1519 = this.nodes;
        var v1483 = v1519[0];
        var v1371 = v1483.length;
        var v1199 = v1371 - 1;
        v922 = j$$15 == v1199
      }
      var v511 = v922;
      if(v511) {
        var v923 = this.scoreSet;
        var v485 = v923.useEndGapRight;
        if(v485) {
          var v1372 = this.nodes;
          var v1373 = i$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1200 = v1372[v1373]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v924 = v1200[j$$15]
          }
          var v481 = v924.value;
          var v925 = this.scoreSet;
          var v482 = v925.endGap;
          a = v481 - v482
        }else {
          var v1374 = this.nodes;
          var v1375 = i$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1201 = v1374[v1375]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v926 = v1201[j$$15]
          }
          var v483 = v926.value;
          var v927 = this.scoreSet;
          var v484 = v927.gap;
          a = v483 - v484
        }
        var v928 = this.scoreSet;
        var v490 = v928.useEndGapBottom;
        if(v490) {
          var v1376 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1202 = v1376[i$$15]
          }
          var v1203 = j$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v929 = v1202[v1203]
          }
          var v486 = v929.value;
          var v930 = this.scoreSet;
          var v487 = v930.endGap;
          b = v486 - v487
        }else {
          var v1377 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1204 = v1377[i$$15]
          }
          var v1205 = j$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v931 = v1204[v1205]
          }
          var v488 = v931.value;
          var v932 = this.scoreSet;
          var v489 = v932.gap;
          b = v488 - v489
        }
      }else {
        var v1378 = this.nodes;
        var v1206 = v1378.length;
        var v933 = v1206 - 1;
        var v510 = i$$15 == v933;
        if(v510) {
          var v1379 = this.nodes;
          var v1380 = i$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1207 = v1379[v1380]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v934 = v1207[j$$15]
          }
          var v491 = v934.value;
          var v935 = this.scoreSet;
          var v492 = v935.gap;
          a = v491 - v492;
          var v936 = this.scoreSet;
          var v497 = v936.useEndGapBottom;
          if(v497) {
            var v1381 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1208 = v1381[i$$15]
            }
            var v1209 = j$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v937 = v1208[v1209]
            }
            var v493 = v937.value;
            var v938 = this.scoreSet;
            var v494 = v938.endGap;
            b = v493 - v494
          }else {
            var v1382 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1210 = v1382[i$$15]
            }
            var v1211 = j$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v939 = v1210[v1211]
            }
            var v495 = v939.value;
            var v940 = this.scoreSet;
            var v496 = v940.gap;
            b = v495 - v496
          }
        }else {
          var v1484 = this.nodes;
          var v1383 = v1484[0];
          var v1212 = v1383.length;
          var v941 = v1212 - 1;
          var v509 = j$$15 == v941;
          if(v509) {
            var v942 = this.scoreSet;
            var v502 = v942.useEndGapRight;
            if(v502) {
              var v1384 = this.nodes;
              var v1385 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1213 = v1384[v1385]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v943 = v1213[j$$15]
              }
              var v498 = v943.value;
              var v944 = this.scoreSet;
              var v499 = v944.endGap;
              a = v498 - v499
            }else {
              var v1386 = this.nodes;
              var v1387 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1214 = v1386[v1387]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v945 = v1214[j$$15]
              }
              var v500 = v945.value;
              var v946 = this.scoreSet;
              var v501 = v946.gap;
              a = v500 - v501
            }
            var v1388 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1215 = v1388[i$$15]
            }
            var v1216 = j$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v947 = v1215[v1216]
            }
            var v503 = v947.value;
            var v948 = this.scoreSet;
            var v504 = v948.gap;
            b = v503 - v504
          }else {
            var v1389 = this.nodes;
            var v1390 = i$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1217 = v1389[v1390]
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v949 = v1217[j$$15]
            }
            var v505 = v949.value;
            var v950 = this.scoreSet;
            var v506 = v950.gap;
            a = v505 - v506;
            var v1391 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1218 = v1391[i$$15]
            }
            var v1219 = j$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v951 = v1218[v1219]
            }
            var v507 = v951.value;
            var v952 = this.scoreSet;
            var v508 = v952.gap;
            b = v507 - v508
          }
        }
      }
      var v1392 = this.nodes;
      var v1393 = i$$15 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1220 = v1392[v1393]
      }
      var v1221 = j$$15 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v953 = v1220[v1221]
      }
      var v512 = v953.value;
      var v954 = this.scoreSet;
      var v1222 = this.M;
      var v1223 = i$$15 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v955 = v1222[v1223]
      }
      var v1224 = this.N;
      var v1225 = j$$15 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v956 = v1224[v1225]
      }
      var v513 = JAMScript.call(v954.getScore, v954, [v955, v956]);
      c = v512 + v513;
      var v957 = a >= b;
      if(v957) {
        v957 = a >= c
      }
      var v524 = v957;
      if(v524) {
        var v1226 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v958 = v1226[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v514 = v958[j$$15]
        }
        v514.value = a;
        var v1227 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v959 = v1227[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v515 = v959[j$$15]
        }
        v515.tracebackI = i$$15 - 1;
        var v1228 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v960 = v1228[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v516 = v960[j$$15]
        }
        v516.tracebackJ = j$$15
      }else {
        var v961 = b >= c;
        if(v961) {
          v961 = b >= a
        }
        var v523 = v961;
        if(v523) {
          var v1229 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v962 = v1229[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v517 = v962[j$$15]
          }
          v517.value = b;
          var v1230 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v963 = v1230[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v518 = v963[j$$15]
          }
          v518.tracebackI = i$$15;
          var v1231 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v964 = v1231[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v519 = v964[j$$15]
          }
          v519.tracebackJ = j$$15 - 1
        }else {
          var v1232 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v965 = v1232[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v520 = v965[j$$15]
          }
          v520.value = c;
          var v1233 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v966 = v1233[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v521 = v966[j$$15]
          }
          v521.tracebackI = i$$15 - 1;
          var v1234 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v967 = v1234[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v522 = v967[j$$15]
          }
          v522.tracebackJ = j$$15 - 1
        }
      }
      j$$15 = j$$15 + 1;
      var v1394 = this.nodes;
      var v1235 = v1394[0];
      var v968 = v1235.length;
      v525 = j$$15 < v968
    }
    i$$15 = i$$15 + 1;
    var v1236 = this.nodes;
    var v969 = v1236.length;
    v526 = i$$15 < v969
  }
  var v1237 = this.nodes;
  var v1485 = this.nodes;
  var v1395 = v1485.length;
  var v1238 = v1395 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v970 = v1237[v1238]
  }
  var v1486 = this.nodes;
  var v1396 = v1486[0];
  var v1239 = v1396.length;
  var v971 = v1239 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v527 = v970[v971]
  }
  this.score = v527.value;
  return
}
function alignQuad() {
  var v1620 = new Array;
  this.alignedM = v1620;
  var v1621 = new Array;
  this.alignedN = v1621;
  var v972 = this.nodes;
  var v528 = v972.length;
  var currentI = v528 - 1;
  var v1240 = this.nodes;
  var v973 = v1240[0];
  var v529 = v973.length;
  var currentJ = v529 - 1;
  var v974 = this.nodes;
  var v1397 = this.nodes;
  var v1241 = v1397.length;
  var v975 = v1241 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v530 = v974[v975]
  }
  var v1398 = this.nodes;
  var v1242 = v1398[0];
  var v976 = v1242.length;
  var v531 = v976 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var currentNode = v530[v531]
  }
  var v1243 = currentNode.tracebackI;
  var v977 = v1243 != undefined;
  if(v977) {
    var v1244 = currentNode.tracebackJ;
    v977 = v1244 != undefined
  }
  var v546 = v977;
  for(;v546;) {
    var v1245 = currentNode.tracebackI;
    var v1246 = currentI - 1;
    var v978 = v1245 == v1246;
    if(v978) {
      var v1247 = currentNode.tracebackJ;
      var v1248 = currentJ - 1;
      v978 = v1247 == v1248
    }
    var v543 = v978;
    if(v543) {
      var v532 = this.alignedM;
      var v979 = this.M;
      var v533 = v979.pop();
      v532.push(v533);
      var v534 = this.alignedN;
      var v980 = this.N;
      var v535 = v980.pop();
      v534.push(v535)
    }else {
      var v981 = currentNode.tracebackJ;
      var v982 = currentJ - 1;
      var v542 = v981 == v982;
      if(v542) {
        var v536 = this.alignedM;
        v536.push(".--");
        var v537 = this.alignedN;
        var v983 = this.N;
        var v538 = v983.pop();
        v537.push(v538)
      }else {
        var v539 = this.alignedM;
        var v984 = this.M;
        var v540 = v984.pop();
        v539.push(v540);
        var v541 = this.alignedN;
        v541.push(".--")
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v985 = this.nodes;
    var v986 = currentNode.tracebackI;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v544 = v985[v986]
    }
    var v545 = currentNode.tracebackJ;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      currentNode = v544[v545]
    }
    var v1249 = currentNode.tracebackI;
    var v987 = v1249 != undefined;
    if(v987) {
      var v1250 = currentNode.tracebackJ;
      v987 = v1250 != undefined
    }
    v546 = v987
  }
  var v547 = this.alignedM;
  var v1622 = v547.reverse();
  this.alignedM = v1622;
  var v548 = this.alignedN;
  var v1623 = v548.reverse();
  this.alignedN = v1623;
  return
}
function getAlignedM() {
  var v549 = this.alignedM;
  return v549.join("")
}
function getAlignedN() {
  var v550 = this.alignedN;
  return v550.join("")
}
function AlignPairQuad() {
  return
}
new ScoreSet;
var v551 = ScoreSet.prototype;
v551.getScore = getScore;
var v552 = ScoreSet.prototype;
v552.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v553 = ScoringMatrix.prototype;
v553.scoringMatrix_getScore = scoringMatrix_getScore;
var v554 = ScoringMatrix.prototype;
v554.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v555 = Codon;
var v1624 = new ScoringMatrix;
v555.prototype = v1624;
new AlignPairLinear;
var v556 = AlignPairLinear.prototype;
v556.align = align;
var v557 = AlignPairLinear.prototype;
v557.path = path;
var v558 = AlignPairLinear.prototype;
v558.setAlignParam = setAlignParam;
var v559 = AlignPairLinear.prototype;
v559.getAlignedM = getAlignedM;
var v560 = AlignPairLinear.prototype;
v560.getAlignedN = getAlignedN;
new AlignPairQuad;
var v561 = AlignPairQuad.prototype;
v561.initializeMatrix = initializeMatrix;
var v562 = AlignPairQuad.prototype;
v562.fillMatrix = fillMatrix;
var v563 = AlignPairQuad.prototype;
v563.align = alignQuad;
var v564 = AlignPairQuad.prototype;
v564.getAlignedM = getAlignedM;
var v565 = AlignPairQuad.prototype;
v565.getAlignedN = getAlignedN;
var v566 = AlignPairQuad.prototype;
v566.dumpMatrix = dumpMatrix;
JAMScript.set(document, "onload", v2);
var v567 = document.getElementById("submitbtn");
JAMScript.set(v567, "onclick", v3);
var v568 = document.getElementById("clearbtn");
JAMScript.set(v568, "onclick", v4);

