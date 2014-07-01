function v4() {
  var v1229 = document.forms;
  var v972 = v1229[0];
  var v561 = v972.elements;
  var v5 = v561[0];
  v5.value = " ";
  var v1230 = document.forms;
  var v973 = v1230[0];
  var v562 = v973.elements;
  var v6 = v562[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    pairwiseAlignDna(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v2() {
  var v563 = document.main_form;
  var v8 = v563.main_submit;
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
  var v564 = arrayOfSequences.length;
  var v10 = v564 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v565 = arrayOfTitles.length;
  var v12 = i$$1 < v565;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1231 = arrayOfTitles[i$$1]
    }
    var v974 = v1231.search(/\S/);
    var v566 = v974 == -1;
    var v976 = !v566;
    if(v976) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1378 = arrayOfSequences[i$$1]
      }
      var v1232 = v1378.search(/\S/);
      var v975 = v1232 == -1;
      var v1234 = !v975;
      if(v1234) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1379 = arrayOfSequences[i$$1]
        }
        var v1233 = v1379.length;
        v975 = v1233 != lengthOfAlign
      }
      v566 = v975
    }
    var v11 = v566;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v567 = arrayOfTitles.length;
    v12 = i$$1 < v567
  }
  return true
}
function checkCodonTable(codonTable) {
  var v977 = codonTable.search(/AmAcid/);
  var v568 = v977 == -1;
  var v979 = !v568;
  if(v979) {
    var v1235 = codonTable.search(/Codon/);
    var v978 = v1235 == -1;
    var v1237 = !v978;
    if(v1237) {
      var v1380 = codonTable.search(/Number/);
      var v1236 = v1380 == -1;
      var v1382 = !v1236;
      if(v1382) {
        var v1470 = codonTable.search(/\/1000/);
        var v1381 = v1470 == -1;
        var v1472 = !v1381;
        if(v1472) {
          var v1471 = codonTable.search(/Fraction\s*\.\./);
          v1381 = v1471 == -1
        }
        v1236 = v1381
      }
      v978 = v1236
    }
    v568 = v978
  }
  var v13 = v568;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v980 = formElement.value;
  var v569 = v980.search(/\S/);
  var v14 = v569 == -1;
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
  var v570 = arrayOfPatterns.length;
  var v17 = z$$2 < v570;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v981 = arrayOfPatterns[z$$2]
    }
    var v571 = v981.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v571 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v982 = arrayOfPatterns[z$$2]
    }
    var v572 = moreExpressionCheck(v982);
    var v16 = v572 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v573 = arrayOfPatterns.length;
    v17 = z$$2 < v573
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v574 = arrayOfPatterns.length;
  var v26 = j < v574;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1238 = arrayOfPatterns[j]
    }
    var v983 = JAMScript.call(v1238.match, v1238, [/\/.+\//]);
    var v575 = v983 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1597 = eval("introspect(JAMScript.introspectors.processAll) { " + v575 + " }")
    }else {
      var v1597 = JAMScript.call(eval, null, [v575])
    }
    v20[v21] = v1597;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v984 = arrayOfPatterns[j]
    }
    var v576 = JAMScript.call(v984.match, v984, [/=[a-zA-Z\*]/]);
    var v1598 = v576.toString();
    v22[v23] = v1598;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v577 = geneticCodeMatchResult[j]
    }
    var v1599 = v577.replace(/=/g, "");
    v24[v25] = v1599;
    j = j + 1;
    var v578 = arrayOfPatterns.length;
    v26 = j < v578
  }
  var i$$2 = 0;
  var v985 = testSequence.length;
  var v579 = v985 - 3;
  var v33 = i$$2 <= v579;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v580 = geneticCodeMatchExp.length;
    var v31 = j < v580;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v986 = geneticCodeMatchExp[j]
      }
      var v581 = codon.search(v986);
      var v30 = v581 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v582 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v582 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v583 = geneticCodeMatchExp.length;
      v31 = j < v583
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v987 = testSequence.length;
    var v584 = v987 - 3;
    v33 = i$$2 <= v584
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v585 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v585;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v988 = arrayOfPatterns$$1[z$$3]
    }
    var v586 = v988.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v586 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v587 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v587
  }
  var i$$3 = 0;
  var v588 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v588;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v989 = arrayOfPatterns$$1[i$$3]
    }
    var v589 = "[" + v989;
    var v36 = v589 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v590 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v590;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v990 = arrayOfPatterns$$1[j$$1]
      }
      var v591 = v990.search(re);
      var v37 = v591 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v592 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v592
    }
    i$$3 = i$$3 + 1;
    var v593 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v593
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v594 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v594;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v991 = arrayOfPatterns$$2[z$$4]
    }
    var v595 = v991.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v595 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v992 = arrayOfPatterns$$2[z$$4]
    }
    var v596 = moreExpressionCheck(v992);
    var v41 = v596 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v597 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v597
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v1239 = getSequenceFromFasta(text$$7);
  var v993 = v1239.replace(/[^A-Za-z]/g, "");
  var v598 = v993.length;
  var v44 = v598 > maxInput;
  if(v44) {
    var v599 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v599 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v600 = text$$8.length;
  var v46 = v600 > maxInput$$1;
  if(v46) {
    var v601 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v601 + " characters.";
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
  var v602 = alignArray.length;
  var v53 = v602 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v603 = alignArray.length;
  var v55 = i$$4 < v603;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v994 = alignArray[i$$4]
    }
    var v604 = v994.search(/[^\s]+\s/);
    var v54 = v604 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v605 = alignArray.length;
    v55 = i$$4 < v605
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
  var v606 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v606 != -1;
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
  var v607 = sequence$$2.length;
  var v59 = "&gt;results for " + v607;
  var stringToReturn = v59 + " residue sequence ";
  var v608 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v608 != -1;
  if(v61) {
    var v609 = stringToReturn + '"';
    var v60 = v609 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v610 = stringToReturn + ' starting "';
  var v611 = sequence$$2.substring(0, 10);
  var v62 = v610 + v611;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v612 = sequenceOne.length;
  var v63 = "Search results for " + v612;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v613 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v613 != -1;
  if(v65) {
    var v614 = stringToReturn$$1 + '"';
    var v64 = v614 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v615 = stringToReturn$$1 + ' starting "';
  var v616 = sequenceOne.substring(0, 10);
  var v66 = v615 + v616;
  stringToReturn$$1 = v66 + '"\n';
  var v617 = stringToReturn$$1 + "and ";
  var v618 = sequenceTwo.length;
  var v67 = v617 + v618;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v619 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v619 != -1;
  if(v69) {
    var v620 = stringToReturn$$1 + '"';
    var v68 = v620 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v621 = stringToReturn$$1 + ' starting "';
  var v622 = sequenceTwo.substring(0, 10);
  var v70 = v621 + v622;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v623 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v623;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1240 = arrayOfPatterns$$3[j$$2]
    }
    var v995 = JAMScript.call(v1240.match, v1240, [/\/.+\//]);
    var v624 = v995 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1600 = eval("introspect(JAMScript.introspectors.processAll) { " + v624 + " }")
    }else {
      var v1600 = JAMScript.call(eval, null, [v624])
    }
    v73[v74] = v1600;
    j$$2 = j$$2 + 1;
    var v625 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v625
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v626 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v626;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v996 = arrayOfPatterns$$4[j$$3]
    }
    var v627 = JAMScript.call(v996.match, v996, [/=[a-zA-Z\*]/]);
    var v1601 = v627.toString();
    v77[v78] = v1601;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v628 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1602 = v628.replace(/=/g, "");
    v79[v80] = v1602;
    j$$3 = j$$3 + 1;
    var v629 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v629
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v630 = sequence$$3.length;
  var v82 = "Results for " + v630;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v631 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v631 != -1;
  if(v84) {
    var v632 = stringToReturn$$2 + '"';
    var v83 = v632 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v633 = stringToReturn$$2 + ' starting "';
  var v634 = sequence$$3.substring(0, 10);
  var v85 = v633 + v634;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v997 = "Results for " + topology;
  var v635 = v997 + " ";
  var v636 = sequence$$4.length;
  var v87 = v635 + v636;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v637 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v637 != -1;
  if(v89) {
    var v638 = stringToReturn$$3 + '"';
    var v88 = v638 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v639 = stringToReturn$$3 + ' starting "';
  var v640 = sequence$$4.substring(0, 10);
  var v90 = v639 + v640;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v641 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v641;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v642 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v642 != -1;
  if(v94) {
    var v643 = stringToReturn$$4 + '"';
    var v93 = v643 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v644 = stringToReturn$$4 + ' starting "';
  var v645 = sequenceOne$$1.substring(0, 10);
  var v95 = v644 + v645;
  stringToReturn$$4 = v95 + '"\n';
  var v646 = stringToReturn$$4 + "and ";
  var v647 = sequenceTwo$$1.length;
  var v96 = v646 + v647;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v648 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v648 != -1;
  if(v98) {
    var v649 = stringToReturn$$4 + '"';
    var v97 = v649 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v650 = stringToReturn$$4 + ' starting "';
  var v651 = sequenceTwo$$1.substring(0, 10);
  var v99 = v650 + v651;
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
    var v652 = Math.random();
    var v653 = components.length;
    var v101 = v652 * v653;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v654 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v654 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v655 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v655 != -1;
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
  var v998 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v656 = v998 != -1;
  var v1000 = !v656;
  if(v1000) {
    var v1241 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v999 = v1241 != -1;
    var v1243 = !v999;
    if(v1243) {
      var v1383 = expressionToCheck.search(/\[\]/);
      var v1242 = v1383 != -1;
      var v1385 = !v1242;
      if(v1385) {
        var v1473 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v1384 = v1473 != -1;
        var v1475 = !v1384;
        if(v1475) {
          var v1507 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1474 = v1507 != -1;
          var v1509 = !v1474;
          if(v1509) {
            var v1532 = expressionToCheck.search(/\|\|/);
            var v1508 = v1532 != -1;
            var v1534 = !v1508;
            if(v1534) {
              var v1546 = expressionToCheck.search(/\/\|/);
              var v1533 = v1546 != -1;
              var v1548 = !v1533;
              if(v1548) {
                var v1558 = expressionToCheck.search(/\|\//);
                var v1547 = v1558 != -1;
                var v1560 = !v1547;
                if(v1560) {
                  var v1568 = expressionToCheck.search(/\[.\]/);
                  var v1559 = v1568 != -1;
                  var v1570 = !v1559;
                  if(v1570) {
                    var v1575 = expressionToCheck.search(/\</);
                    var v1569 = v1575 != -1;
                    var v1577 = !v1569;
                    if(v1577) {
                      var v1576 = expressionToCheck.search(/\>/);
                      v1569 = v1576 != -1
                    }
                    v1559 = v1569
                  }
                  v1547 = v1559
                }
                v1533 = v1547
              }
              v1508 = v1533
            }
            v1474 = v1508
          }
          v1384 = v1474
        }
        v1242 = v1384
      }
      v999 = v1242
    }
    v656 = v999
  }
  var v106 = v656;
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
    var v1615 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1615[2], v1615[1], v1615[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v1244 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1001 = v1244 + "<head>\n";
  var v657 = v1001 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v657 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v1590 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1586 = v1590 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1582 = v1586 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1578 = v1582 + "div.info {font-weight: bold}\n";
    var v1571 = v1578 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1561 = v1571 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1549 = v1561 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1535 = v1549 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1510 = v1535 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1476 = v1510 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1386 = v1476 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1245 = v1386 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v1002 = v1245 + "td.many {color: #000000}\n";
    var v658 = v1002 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v658 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v1594 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1591 = v1594 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1587 = v1591 + "div.title {display: none}\n";
    var v1583 = v1587 + "div.info {font-weight: bold}\n";
    var v1579 = v1583 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1572 = v1579 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1562 = v1572 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1550 = v1562 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1536 = v1550 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1511 = v1536 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1477 = v1511 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1387 = v1477 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1246 = v1387 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v1003 = v1246 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v659 = v1003 + "img {display: none}\n";
    var v116 = v659 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v1247 = "</head>\n" + '<body class="main">\n';
  var v1004 = v1247 + '<div class="title">';
  var v660 = v1004 + title$$6;
  var v118 = v660 + " results</div>\n";
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
    var v1616 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1616[2], v1616[1], v1616[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v1248 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1005 = v1248 + "<head>\n";
  var v661 = v1005 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v661 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v1592 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1588 = v1592 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1584 = v1588 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1580 = v1584 + "div.info {font-weight: bold}\n";
    var v1573 = v1580 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1563 = v1573 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1551 = v1563 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1537 = v1551 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1512 = v1537 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1478 = v1512 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1388 = v1478 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1249 = v1388 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v1006 = v1249 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v662 = v1006 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v662 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v1596 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1595 = v1596 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1593 = v1595 + "div.title {display: none}\n";
    var v1589 = v1593 + "div.info {font-weight: bold}\n";
    var v1585 = v1589 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1581 = v1585 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1574 = v1581 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1564 = v1574 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1552 = v1564 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1538 = v1552 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1513 = v1538 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1479 = v1513 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1389 = v1479 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1250 = v1389 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v1007 = v1250 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v663 = v1007 + "img {display: none}\n";
    var v124 = v663 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v1251 = "</head>\n" + '<body class="main">\n';
  var v1008 = v1251 + '<div class="title">';
  var v664 = v1008 + title$$8;
  var v126 = v664 + " results</div>\n";
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
  var v665 = dnaSequence$$1.search(/./);
  var v127 = v665 != -1;
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
  var v666 = testArray[0];
  var v131 = v666 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v667 = testString.search(re$$2);
  var v132 = v667 == -1;
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
  var v668 = testNum.toFixed(3);
  var v135 = v668 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v669 = testNum.toPrecision(5);
  var v136 = v669 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v670 = theNumber$$1.search(/\d/);
  var v137 = v670 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v1009 = emblFile.search(/ID/);
  var v671 = v1009 == -1;
  var v1011 = !v671;
  if(v1011) {
    var v1252 = emblFile.search(/AC/);
    var v1010 = v1252 == -1;
    var v1254 = !v1010;
    if(v1254) {
      var v1390 = emblFile.search(/DE/);
      var v1253 = v1390 == -1;
      var v1392 = !v1253;
      if(v1392) {
        var v1391 = emblFile.search(/SQ/);
        v1253 = v1391 == -1
      }
      v1010 = v1253
    }
    v671 = v1010
  }
  var v138 = v671;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v672 = theNumber$$2.search(/\d/);
  var v139 = v672 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v673 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v673 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v674 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v674 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v675 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v675 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v1012 = genBankFile.search(/LOCUS/);
  var v676 = v1012 == -1;
  var v1014 = !v676;
  if(v1014) {
    var v1255 = genBankFile.search(/DEFINITION/);
    var v1013 = v1255 == -1;
    var v1257 = !v1013;
    if(v1257) {
      var v1393 = genBankFile.search(/ACCESSION/);
      var v1256 = v1393 == -1;
      var v1395 = !v1256;
      if(v1395) {
        var v1394 = genBankFile.search(/ORIGIN/);
        v1256 = v1394 == -1
      }
      v1013 = v1256
    }
    v676 = v1013
  }
  var v144 = v676;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1015 = genBankFile$$1.search(/LOCUS/);
  var v677 = v1015 == -1;
  var v1017 = !v677;
  if(v1017) {
    var v1258 = genBankFile$$1.search(/DEFINITION/);
    var v1016 = v1258 == -1;
    var v1260 = !v1016;
    if(v1260) {
      var v1396 = genBankFile$$1.search(/ACCESSION/);
      var v1259 = v1396 == -1;
      var v1398 = !v1259;
      if(v1398) {
        var v1397 = genBankFile$$1.search(/ORIGIN/);
        v1259 = v1397 == -1
      }
      v1016 = v1259
    }
    v677 = v1016
  }
  var v145 = v677;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v678 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v678 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v1018 = emblFile$$1.search(/ID/);
  var v679 = v1018 == -1;
  var v1020 = !v679;
  if(v1020) {
    var v1261 = emblFile$$1.search(/AC/);
    var v1019 = v1261 == -1;
    var v1263 = !v1019;
    if(v1263) {
      var v1399 = emblFile$$1.search(/DE/);
      var v1262 = v1399 == -1;
      var v1401 = !v1262;
      if(v1401) {
        var v1400 = emblFile$$1.search(/SQ/);
        v1262 = v1400 == -1
      }
      v1019 = v1262
    }
    v679 = v1019
  }
  var v147 = v679;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v680 = emblFile$$1.search(/^FT/m);
  var v148 = v680 == -1;
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
    var v681 = basePerLine / groupSize;
    var v153 = j$$6 <= v681;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v682 = k + i$$5;
        var v151 = text$$10.charAt(v682);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v683 = basePerLine / groupSize;
      v153 = j$$6 <= v683
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
    var v684 = adjustment < 0;
    if(v684) {
      v684 = adjusted >= 0
    }
    var v157 = v684;
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
    var v685 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v685;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v686 = i$$6 + k$$1;
        var v158 = v686 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v687 = k$$1 + i$$6;
        var v160 = text$$12.charAt(v687);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v688 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v688, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v689 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v689
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v1264 = adjustNumbering(lineNum, numberingAdjustment);
      var v1021 = rightNum(v1264, "", 8, tabIn$$3);
      var v690 = v1021 + lineOfText$$1;
      var v168 = v690 + "\n";
      JAMScript.call(v167.write, v167, [v168]);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v1265 = adjustNumbering(lineNum, numberingAdjustment);
        var v1022 = rightNum(v1265, "", 8, tabIn$$3);
        var v1023 = complement(lineOfText$$1);
        var v691 = v1022 + v1023;
        var v170 = v691 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v171 = outputWindow.document;
        JAMScript.call(v171.write, v171, ["\n"])
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v1024 = lineOfText$$1;
        var v1025 = adjustNumbering(i$$6, numberingAdjustment);
        var v692 = v1024 + v1025;
        var v174 = v692 + "\n";
        JAMScript.call(v173.write, v173, [v174]);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v1026 = complement(lineOfText$$1);
          var v1027 = adjustNumbering(i$$6, numberingAdjustment);
          var v693 = v1026 + v1027;
          var v176 = v693 + "\n";
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
            var v694 = complement(lineOfText$$1);
            var v184 = v694 + "\n";
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
    var v695 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v695;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v696 = i$$7 + k$$2;
        var v191 = v696 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v697 = k$$2 + i$$7;
        var v193 = text$$13.charAt(v697);
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
      var v698 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v698
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v1028 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v699 = v1028 + lineOfText$$2;
      var v201 = v699 + "\n";
      JAMScript.call(v200.write, v200, [v201])
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v700 = lineOfText$$2 + i$$7;
        var v203 = v700 + "\n";
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
  var v1029 = sequence$$13.length;
  var v701 = v1029 <= firstIndexToMutate;
  var v1031 = !v701;
  if(v1031) {
    var v1030 = lastIndexToMutate < 0;
    var v1266 = !v1030;
    if(v1266) {
      v1030 = lastIndexToMutate <= firstIndexToMutate
    }
    v701 = v1030
  }
  var v212 = v701;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v702 = Math.random();
    var v213 = v702 * maxNum;
    randNum = Math.floor(v213);
    var v703 = randNum < firstIndexToMutate;
    var v1032 = !v703;
    if(v1032) {
      v703 = randNum > lastIndexToMutate
    }
    var v214 = v703;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v704 = Math.random();
      var v705 = components$$1.length;
      var v215 = v704 * v705;
      componentsIndex = Math.round(v215);
      var v706 = components$$1.length;
      var v216 = componentsIndex == v706;
      if(v216) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v707 = components$$1[componentsIndex]
      }
      var v217 = v707 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v708 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v709 = components$$1[componentsIndex]
    }
    var v218 = v708 + v709;
    var v710 = randNum + 1;
    var v711 = sequence$$13.length;
    var v219 = sequence$$13.substring(v710, v711);
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
    var v712 = Math.random();
    var v713 = components$$2.length;
    var v223 = v712 * v713;
    tempNum$$1 = Math.floor(v223);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v714 = sequence$$14.length;
    var v226 = v714 == 60;
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
    var v1267 = sequence$$15.length;
    var v1033 = v1267 - lookAhead;
    var v1034 = sequence$$15.length;
    var v715 = sequence$$15.substring(v1033, v1034);
    var v231 = v715 + sequence$$15;
    var v232 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAMScript.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v235 = outputWindow.document;
  var v1268 = '<tr><td class="title" width="200px">' + "Site:";
  var v1035 = v1268 + '</td><td class="title">';
  var v716 = v1035 + "Positions:";
  var v236 = v716 + "</td></tr>\n";
  JAMScript.call(v235.write, v235, [v236]);
  var i$$9 = 0;
  var v717 = arrayOfItems.length;
  var v252 = i$$9 < v717;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v718 = arrayOfItems[i$$9]
    }
    var v237 = JAMScript.call(v718.match, v718, [/\/.+\//]);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1269 = arrayOfItems[i$$9]
    }
    var v1036 = JAMScript.call(v1269.match, v1269, [/\)\D*\d+/]);
    var v719 = v1036.toString();
    var v238 = v719.replace(/\)\D*/, "");
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v720 = matchPosition >= lowerLimit;
      if(v720) {
        v720 = matchPosition < upperLimit
      }
      var v242 = v720;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v721 = matchPosition - shiftValue;
        var v241 = v721 + 1;
        tempString$$1 = v240 + v241
      }
      var v722 = matchExp.lastIndex;
      var v1037 = RegExp.lastMatch;
      var v723 = v1037.length;
      var v243 = v722 - v723;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v724 = tempString$$1.search(/\d/);
    var v245 = v724 != -1;
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
    var v1539 = '<tr><td class="' + backGroundClass;
    var v1514 = v1539 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1565 = arrayOfItems[i$$9]
    }
    var v1553 = JAMScript.call(v1565.match, v1565, [/\([^\(]+\)/]);
    var v1540 = v1553.toString();
    var v1515 = v1540.replace(/\(|\)/g, "");
    var v1480 = v1514 + v1515;
    var v1402 = v1480 + '</td><td class="';
    var v1270 = v1402 + backGroundClass;
    var v1038 = v1270 + '">';
    var v725 = v1038 + tempString$$1;
    var v251 = v725 + "</td></tr>\n";
    JAMScript.call(v250.write, v250, [v251]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v726 = arrayOfItems.length;
    v252 = i$$9 < v726
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
  var v1481 = '<tr><td class="title">' + "Pattern:";
  var v1403 = v1481 + '</td><td class="title">';
  var v1271 = v1403 + "Times found:";
  var v1039 = v1271 + '</td><td class="title">';
  var v727 = v1039 + "Percentage:";
  var v256 = v727 + "</td></tr>\n";
  JAMScript.call(v255.write, v255, [v256]);
  var i$$10 = 0;
  var v728 = arrayOfItems$$1.length;
  var v265 = i$$10 < v728;
  for(;v265;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v729 = arrayOfItems$$1[i$$10]
    }
    var v257 = JAMScript.call(v729.match, v729, [/\/[^\/]+\//]);
    var matchExp$$1 = v257 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v730 = sequence$$16.search(matchExp$$1);
    var v259 = v730 != -1;
    if(v259) {
      var v258 = JAMScript.call(sequence$$16.match, sequence$$16, [matchExp$$1]);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v1040 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1404 = arrayOfItems$$1[i$$10]
    }
    var v1272 = JAMScript.call(v1404.match, v1404, [/\d+/]);
    var v1041 = parseFloat(v1272);
    var v731 = v1040 - v1041;
    var v262 = v731 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v732 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1273 = arrayOfItems$$1[i$$10]
      }
      var v1042 = JAMScript.call(v1273.match, v1273, [/\d+/]);
      var v733 = parseFloat(v1042);
      var v261 = v732 - v733;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1566 = arrayOfItems$$1[i$$10]
    }
    var v1554 = JAMScript.call(v1566.match, v1566, [/\([^\(]+\)\b/]);
    var v1541 = v1554.toString();
    var v1516 = v1541.replace(/\(|\)/g, "");
    var v1482 = "<tr><td>" + v1516;
    var v1405 = v1482 + "</td><td>";
    var v1274 = v1405 + tempNumber;
    var v1043 = v1274 + "</td><td>";
    var v1044 = percentage.toFixed(2);
    var v734 = v1043 + v1044;
    var v264 = v734 + "</td></tr>\n";
    JAMScript.call(v263.write, v263, [v264]);
    i$$10 = i$$10 + 1;
    var v735 = arrayOfItems$$1.length;
    v265 = i$$10 < v735
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
  var v736 = sequence$$17.length;
  var v273 = v736 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v737 = Math.random();
    var v267 = v737 * maxNum$$1;
    randNum$$1 = Math.floor(v267);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v268, v269);
    sequence$$17 = tempString1 + tempString2;
    var v738 = tempSeq.length;
    var v272 = v738 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAMScript.call(v270.write, v270, [v271]);
      tempSeq = ""
    }
    var v739 = sequence$$17.length;
    v273 = v739 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAMScript.call(v274.write, v274, [v275]);
  return true
}
function pairwiseAlignDna(theDocument) {
  var newDnaOne = "";
  var titleOne = "";
  var newDnaTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 2E3;
  var v740 = testScript();
  var v276 = v740 == false;
  if(v276) {
    return false
  }
  var v1517 = theDocument.forms;
  var v1483 = v1517[0];
  var v1406 = v1483.elements;
  var v1275 = v1406[0];
  var v1045 = checkFormElement(v1275);
  var v741 = v1045 == false;
  var v1047 = !v741;
  if(v1047) {
    var v1555 = theDocument.forms;
    var v1542 = v1555[0];
    var v1518 = v1542.elements;
    var v1484 = v1518[0];
    var v1407 = v1484.value;
    var v1276 = checkSequenceLength(v1407, maxInput$$3);
    var v1046 = v1276 == false;
    var v1278 = !v1046;
    if(v1278) {
      var v1556 = theDocument.forms;
      var v1543 = v1556[0];
      var v1519 = v1543.elements;
      var v1485 = v1519[1];
      var v1408 = checkFormElement(v1485);
      var v1277 = v1408 == false;
      var v1410 = !v1277;
      if(v1410) {
        var v1567 = theDocument.forms;
        var v1557 = v1567[0];
        var v1544 = v1557.elements;
        var v1520 = v1544[1];
        var v1486 = v1520.value;
        var v1409 = checkSequenceLength(v1486, maxInput$$3);
        v1277 = v1409 == false
      }
      v1046 = v1277
    }
    v741 = v1046
  }
  var v277 = v741;
  if(v277) {
    return false
  }
  var v1521 = theDocument.forms;
  var v1487 = v1521[0];
  var v1411 = v1487.elements;
  var v1279 = v1411[5];
  var v1048 = v1279.options;
  var v1522 = theDocument.forms;
  var v1488 = v1522[0];
  var v1412 = v1488.elements;
  var v1280 = v1412[5];
  var v1049 = v1280.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v742 = v1048[v1049]
  }
  var v278 = v742.value;
  var MATCH_SCORE = parseInt(v278);
  var v1523 = theDocument.forms;
  var v1489 = v1523[0];
  var v1413 = v1489.elements;
  var v1281 = v1413[6];
  var v1050 = v1281.options;
  var v1524 = theDocument.forms;
  var v1490 = v1524[0];
  var v1414 = v1490.elements;
  var v1282 = v1414[6];
  var v1051 = v1282.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v743 = v1050[v1051]
  }
  var v279 = v743.value;
  var MISMATCH_SCORE = parseInt(v279);
  var v1525 = theDocument.forms;
  var v1491 = v1525[0];
  var v1415 = v1491.elements;
  var v1283 = v1415[7];
  var v1052 = v1283.options;
  var v1526 = theDocument.forms;
  var v1492 = v1526[0];
  var v1416 = v1492.elements;
  var v1284 = v1416[7];
  var v1053 = v1284.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v744 = v1052[v1053]
  }
  var v280 = v744.value;
  var BEGIN_GAP_PENALTY = parseInt(v280);
  var v1527 = theDocument.forms;
  var v1493 = v1527[0];
  var v1417 = v1493.elements;
  var v1285 = v1417[8];
  var v1054 = v1285.options;
  var v1528 = theDocument.forms;
  var v1494 = v1528[0];
  var v1418 = v1494.elements;
  var v1286 = v1418[8];
  var v1055 = v1286.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v745 = v1054[v1055]
  }
  var v281 = v745.value;
  var GAP_PENALTY = parseInt(v281);
  var v1529 = theDocument.forms;
  var v1495 = v1529[0];
  var v1419 = v1495.elements;
  var v1287 = v1419[9];
  var v1056 = v1287.options;
  var v1530 = theDocument.forms;
  var v1496 = v1530[0];
  var v1420 = v1496.elements;
  var v1288 = v1420[9];
  var v1057 = v1288.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v746 = v1056[v1057]
  }
  var v282 = v746.value;
  var END_GAP_PENALTY = parseInt(v282);
  openWindow("Pairwise Align DNA");
  openPre();
  var v1421 = theDocument.forms;
  var v1289 = v1421[0];
  var v1058 = v1289.elements;
  var v747 = v1058[0];
  var v283 = v747.value;
  newDnaOne = getSequenceFromFasta(v283);
  newDnaOne = removeNonDna(newDnaOne);
  var v1422 = theDocument.forms;
  var v1290 = v1422[0];
  var v1059 = v1290.elements;
  var v748 = v1059[0];
  var v284 = v748.value;
  titleOne = getTitleFromFasta(v284);
  var v1423 = theDocument.forms;
  var v1291 = v1423[0];
  var v1060 = v1291.elements;
  var v749 = v1060[1];
  var v285 = v749.value;
  newDnaTwo = getSequenceFromFasta(v285);
  newDnaTwo = removeNonDna(newDnaTwo);
  var v1424 = theDocument.forms;
  var v1292 = v1424[0];
  var v1061 = v1292.elements;
  var v750 = v1061[1];
  var v286 = v750.value;
  titleTwo = getTitleFromFasta(v286);
  var v287 = outputWindow.document;
  var v288 = getPairwiseAlignTitle(titleOne, newDnaOne, titleTwo, newDnaTwo);
  JAMScript.call(v287.write, v287, [v288]);
  var v751 = newDnaOne.search(/./);
  var v289 = v751 != -1;
  if(v289) {
    newDnaOne = JAMScript.call(newDnaOne.match, newDnaOne, [/./g])
  }
  var v752 = newDnaTwo.search(/./);
  var v290 = v752 != -1;
  if(v290) {
    newDnaTwo = JAMScript.call(newDnaTwo.match, newDnaTwo, [/./g])
  }
  pairwiseDna(titleOne, newDnaOne, titleTwo, newDnaTwo, MATCH_SCORE, MISMATCH_SCORE, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY);
  closePre();
  closeWindow();
  return true
}
function pairwiseDna(titleOne$$1, newDnaOne$$1, titleTwo$$1, newDnaTwo$$1, matchScore, mismatchScore, gapPenalty, beginGapPenalty, endGapPenalty) {
  var useLinearSpace = true;
  var useQuadraticSpace = false;
  var matrix = new Identity;
  JAMScript.call(matrix.setMatch, matrix, [matchScore]);
  JAMScript.call(matrix.setMismatch, matrix, [mismatchScore]);
  var scoreSet = new ScoreSet;
  JAMScript.call(scoreSet.setScoreSetParam, scoreSet, [matrix, gapPenalty, beginGapPenalty, endGapPenalty]);
  var alignment;
  if(useLinearSpace) {
    alignment = new AlignPairLinear;
    JAMScript.call(alignment.setAlignParam, alignment, [newDnaOne$$1, newDnaTwo$$1, scoreSet]);
    JAMScript.call(alignment.align, alignment, []);
    var v291 = outputWindow.document;
    var v753 = ">" + titleOne$$1;
    var v292 = v753 + "\n";
    JAMScript.call(v291.write, v291, [v292]);
    var v293 = outputWindow.document;
    var v754 = JAMScript.call(alignment.getAlignedM, alignment, []);
    var v294 = addReturns(v754);
    JAMScript.call(v293.write, v293, [v294]);
    var v295 = outputWindow.document;
    JAMScript.call(v295.write, v295, ["\n"]);
    var v296 = outputWindow.document;
    JAMScript.call(v296.write, v296, ["\n"]);
    var v297 = outputWindow.document;
    var v755 = ">" + titleTwo$$1;
    var v298 = v755 + "\n";
    JAMScript.call(v297.write, v297, [v298]);
    var v299 = outputWindow.document;
    var v756 = JAMScript.call(alignment.getAlignedN, alignment, []);
    var v300 = addReturns(v756);
    JAMScript.call(v299.write, v299, [v300]);
    var v301 = outputWindow.document;
    JAMScript.call(v301.write, v301, ["\n\n"]);
    var v302 = outputWindow.document;
    var v1062 = alignment.score;
    var v757 = "Alignment score: " + v1062;
    var v303 = v757 + "\n\n";
    JAMScript.call(v302.write, v302, [v303])
  }
  if(useQuadraticSpace) {
    alignment = new AlignPairQuad;
    JAMScript.call(alignment.initializeMatrix, alignment, [newDnaOne$$1, newDnaTwo$$1, scoreSet]);
    JAMScript.call(alignment.fillMatrix, alignment, []);
    JAMScript.call(alignment.align, alignment, []);
    var v304 = outputWindow.document;
    var v758 = ">" + titleOne$$1;
    var v305 = v758 + "\n";
    JAMScript.call(v304.write, v304, [v305]);
    var v306 = outputWindow.document;
    var v759 = JAMScript.call(alignment.getAlignedM, alignment, []);
    var v307 = addReturns(v759);
    JAMScript.call(v306.write, v306, [v307]);
    var v308 = outputWindow.document;
    JAMScript.call(v308.write, v308, ["\n"]);
    var v309 = outputWindow.document;
    JAMScript.call(v309.write, v309, ["\n"]);
    var v310 = outputWindow.document;
    var v760 = ">" + titleTwo$$1;
    var v311 = v760 + "\n";
    JAMScript.call(v310.write, v310, [v311]);
    var v312 = outputWindow.document;
    var v761 = JAMScript.call(alignment.getAlignedN, alignment, []);
    var v313 = addReturns(v761);
    JAMScript.call(v312.write, v312, [v313]);
    var v314 = outputWindow.document;
    JAMScript.call(v314.write, v314, ["\n\n"]);
    var v315 = outputWindow.document;
    var v1063 = alignment.score;
    var v762 = "Alignment score: " + v1063;
    var v316 = v762 + "\n\n";
    JAMScript.call(v315.write, v315, [v316])
  }
  return
}
function getScore(r1$$1, r2) {
  var v317 = this.scoringMatrix;
  return JAMScript.call(v317.scoringMatrix_getScore, v317, [r1$$1, r2])
}
function setScoreSetParam(scoringMatrix, gapPenalty$$1, beginGapPenalty$$1, endGapPenalty$$1) {
  this.scoringMatrix = scoringMatrix;
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
  var v318 = r1$$2 == r2$$1;
  if(v318) {
    return this.match
  }else {
    return this.mismatch
  }
  return
}
function ScoringMatrix() {
  return
}
function setMismatch(mismatchScore$$1) {
  this.mismatch = mismatchScore$$1;
  return
}
function setMatch(matchScore$$1) {
  this.match = matchScore$$1;
  return
}
function Identity() {
  return
}
function align() {
  var v1064 = this.M;
  var v763 = v1064.length;
  var v335 = v763 == 0;
  if(v335) {
    var j$$10 = 1;
    var v1065 = this.N;
    var v764 = v1065.length;
    var v324 = j$$10 <= v764;
    for(;v324;) {
      var v319 = this.alignedM;
      v319.push("-");
      var v320 = this.alignedN;
      var v765 = this.N;
      var v766 = j$$10 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v321 = v765[v766]
      }
      v320.push(v321);
      var v322 = this.score;
      var v767 = this.scoreSet;
      var v323 = v767.gap;
      this.score = v322 + v323;
      j$$10 = j$$10 + 1;
      var v1066 = this.N;
      var v768 = v1066.length;
      v324 = j$$10 <= v768
    }
  }else {
    var v1067 = this.N;
    var v769 = v1067.length;
    var v334 = v769 == 0;
    if(v334) {
      j$$10 = 1;
      var v1068 = this.M;
      var v770 = v1068.length;
      var v330 = j$$10 <= v770;
      for(;v330;) {
        var v325 = this.alignedN;
        v325.push("-");
        var v326 = this.alignedM;
        var v771 = this.M;
        var v772 = j$$10 - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v327 = v771[v772]
        }
        v326.push(v327);
        var v328 = this.score;
        var v773 = this.scoreSet;
        var v329 = v773.gap;
        this.score = v328 + v329;
        j$$10 = j$$10 + 1;
        var v1069 = this.M;
        var v774 = v1069.length;
        v330 = j$$10 <= v774
      }
    }else {
      var v1293 = this.M;
      var v1070 = v1293.length;
      var v775 = v1070 == 0;
      if(v775) {
        var v1294 = this.N;
        var v1071 = v1294.length;
        v775 = v1071 == 0
      }
      var v333 = v775;
      if(v333) {
      }else {
        var v776 = this.M;
        var v331 = v776.length;
        var v777 = this.N;
        var v332 = v777.length;
        JAMScript.call(this.path, this, [0, 0, v331, v332])
      }
    }
  }
  return
}
function path(i1, j1, i2, j2) {
  var v1072 = i1 + 1;
  var v778 = v1072 == i2;
  var v1073 = !v778;
  if(v1073) {
    v778 = j1 == j2
  }
  var v432 = v778;
  if(v432) {
    var subM = new Array;
    var subN = new Array;
    var i$$11 = i1 + 1;
    var v337 = i$$11 <= i2;
    for(;v337;) {
      var v779 = this.M;
      var v780 = i$$11 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v336 = v779[v780]
      }
      subM.push(v336);
      i$$11 = i$$11 + 1;
      v337 = i$$11 <= i2
    }
    var j$$11 = j1 + 1;
    var v339 = j$$11 <= j2;
    for(;v339;) {
      var v781 = this.N;
      var v782 = j$$11 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v338 = v781[v782]
      }
      subN.push(v338);
      j$$11 = j$$11 + 1;
      v339 = j$$11 <= j2
    }
    var alignment$$1 = new AlignPairQuad;
    subScoreSet = new ScoreSet;
    var v362 = j1 == j2;
    if(v362) {
      var v353 = j1 == 0;
      if(v353) {
        var v783 = this.scoreSet;
        var v340 = v783.scoringMatrix;
        var v784 = this.scoreSet;
        var v341 = v784.beginGap;
        var v785 = this.scoreSet;
        var v342 = v785.beginGap;
        var v786 = this.scoreSet;
        var v343 = v786.beginGap;
        JAMScript.call(subScoreSet.setScoreSetParam, subScoreSet, [v340, v341, v342, v343])
      }else {
        var v1074 = this.N;
        var v787 = v1074.length;
        var v352 = j1 == v787;
        if(v352) {
          var v788 = this.scoreSet;
          var v344 = v788.scoringMatrix;
          var v789 = this.scoreSet;
          var v345 = v789.endGap;
          var v790 = this.scoreSet;
          var v346 = v790.endGap;
          var v791 = this.scoreSet;
          var v347 = v791.endGap;
          JAMScript.call(subScoreSet.setScoreSetParam, subScoreSet, [v344, v345, v346, v347])
        }else {
          var v792 = this.scoreSet;
          var v348 = v792.scoringMatrix;
          var v793 = this.scoreSet;
          var v349 = v793.gap;
          var v794 = this.scoreSet;
          var v350 = v794.gap;
          var v795 = this.scoreSet;
          var v351 = v795.gap;
          JAMScript.call(subScoreSet.setScoreSetParam, subScoreSet, [v348, v349, v350, v351])
        }
      }
    }else {
      var v796 = this.scoreSet;
      var v354 = v796.scoringMatrix;
      var v797 = this.scoreSet;
      var v355 = v797.gap;
      var v798 = this.scoreSet;
      var v356 = v798.beginGap;
      var v799 = this.scoreSet;
      var v357 = v799.endGap;
      JAMScript.call(subScoreSet.setScoreSetParam, subScoreSet, [v354, v355, v356, v357]);
      subScoreSet.useBeginGapTop = false;
      subScoreSet.useBeginGapLeft = false;
      subScoreSet.useEndGapBottom = false;
      subScoreSet.useEndGapRight = false;
      var v358 = i1 == 0;
      if(v358) {
        subScoreSet.useBeginGapTop = true
      }
      var v359 = j1 == 0;
      if(v359) {
        subScoreSet.useBeginGapLeft = true
      }
      var v1075 = this.N;
      var v800 = v1075.length;
      var v360 = j2 == v800;
      if(v360) {
        subScoreSet.useEndGapRight = true
      }
      var v1076 = this.M;
      var v801 = v1076.length;
      var v361 = i2 == v801;
      if(v361) {
        subScoreSet.useEndGapBottom = true
      }
    }
    JAMScript.call(alignment$$1.initializeMatrix, alignment$$1, [subM, subN, subScoreSet]);
    JAMScript.call(alignment$$1.fillMatrix, alignment$$1, []);
    JAMScript.call(alignment$$1.align, alignment$$1, []);
    var v363 = this.alignedM;
    var v364 = JAMScript.call(alignment$$1.getAlignedM, alignment$$1, []);
    v363.push(v364);
    var v365 = this.alignedN;
    var v366 = JAMScript.call(alignment$$1.getAlignedN, alignment$$1, []);
    v365.push(v366);
    var v367 = this.score;
    var v368 = alignment$$1.score;
    this.score = v367 + v368
  }else {
    var v802 = i1 + i2;
    var v369 = v802 / 2;
    var middle = Math.floor(v369);
    var v370 = this.Sn;
    JAMScript.set(v370, j1, 0, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
    var v375 = i1 == 0;
    if(v375) {
      j$$11 = j1 + 1;
      var v372 = j$$11 <= j2;
      for(;v372;) {
        var v371 = this.Sn;
        var v1077 = this.Sn;
        var v1078 = j$$11 - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v803 = v1077[v1078]
        }
        var v1079 = this.scoreSet;
        var v804 = v1079.beginGap;
        JAMScript.set(v371, j$$11, v803 - v804, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$11 = j$$11 + 1;
        v372 = j$$11 <= j2
      }
    }else {
      j$$11 = j1 + 1;
      var v374 = j$$11 <= j2;
      for(;v374;) {
        var v373 = this.Sn;
        var v1080 = this.Sn;
        var v1081 = j$$11 - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v805 = v1080[v1081]
        }
        var v1082 = this.scoreSet;
        var v806 = v1082.gap;
        JAMScript.set(v373, j$$11, v805 - v806, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$11 = j$$11 + 1;
        v374 = j$$11 <= j2
      }
    }
    var diag;
    var left$$2;
    i$$11 = i1 + 1;
    var v397 = i$$11 <= middle;
    for(;v397;) {
      var v376 = this.Sn;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        diag = v376[j1]
      }
      var v381 = j1 == 0;
      if(v381) {
        var v807 = this.Sn;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v377 = v807[j1]
        }
        var v808 = this.scoreSet;
        var v378 = v808.beginGap;
        left$$2 = v377 - v378
      }else {
        var v809 = this.Sn;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v379 = v809[j1]
        }
        var v810 = this.scoreSet;
        var v380 = v810.gap;
        left$$2 = v379 - v380
      }
      var v382 = this.Sn;
      JAMScript.set(v382, j1, left$$2, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
      j$$11 = j1 + 1;
      var v396 = j$$11 <= j2;
      for(;v396;) {
        var v1295 = this.N;
        var v1083 = v1295.length;
        var v811 = j$$11 == v1083;
        if(v811) {
          var v1296 = this.M;
          var v1084 = v1296.length;
          v811 = i$$11 == v1084
        }
        var v393 = v811;
        if(v393) {
          var v1085 = this.Sn;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v812 = v1085[j$$11]
          }
          var v1086 = this.scoreSet;
          var v813 = v1086.endGap;
          var v383 = v812 - v813;
          var v1297 = this.scoreSet;
          var v1087 = v1297.endGap;
          var v814 = left$$2 - v1087;
          var v1088 = diag;
          var v1298 = this.scoreSet;
          var v1425 = this.M;
          var v1426 = i$$11 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1299 = v1425[v1426]
          }
          var v1427 = this.N;
          var v1428 = j$$11 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1300 = v1427[v1428]
          }
          var v1089 = JAMScript.call(v1298.getScore, v1298, [v1299, v1300]);
          var v815 = v1088 + v1089;
          var v384 = Math.max(v814, v815);
          left$$2 = Math.max(v383, v384)
        }else {
          var v1090 = this.M;
          var v816 = v1090.length;
          var v392 = i$$11 == v816;
          if(v392) {
            var v1091 = this.Sn;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v817 = v1091[j$$11]
            }
            var v1092 = this.scoreSet;
            var v818 = v1092.gap;
            var v385 = v817 - v818;
            var v1301 = this.scoreSet;
            var v1093 = v1301.endGap;
            var v819 = left$$2 - v1093;
            var v1094 = diag;
            var v1302 = this.scoreSet;
            var v1429 = this.M;
            var v1430 = i$$11 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1303 = v1429[v1430]
            }
            var v1431 = this.N;
            var v1432 = j$$11 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1304 = v1431[v1432]
            }
            var v1095 = JAMScript.call(v1302.getScore, v1302, [v1303, v1304]);
            var v820 = v1094 + v1095;
            var v386 = Math.max(v819, v820);
            left$$2 = Math.max(v385, v386)
          }else {
            var v1096 = this.N;
            var v821 = v1096.length;
            var v391 = j$$11 == v821;
            if(v391) {
              var v1097 = this.Sn;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v822 = v1097[j$$11]
              }
              var v1098 = this.scoreSet;
              var v823 = v1098.endGap;
              var v387 = v822 - v823;
              var v1305 = this.scoreSet;
              var v1099 = v1305.gap;
              var v824 = left$$2 - v1099;
              var v1100 = diag;
              var v1306 = this.scoreSet;
              var v1433 = this.M;
              var v1434 = i$$11 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1307 = v1433[v1434]
              }
              var v1435 = this.N;
              var v1436 = j$$11 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1308 = v1435[v1436]
              }
              var v1101 = JAMScript.call(v1306.getScore, v1306, [v1307, v1308]);
              var v825 = v1100 + v1101;
              var v388 = Math.max(v824, v825);
              left$$2 = Math.max(v387, v388)
            }else {
              var v1102 = this.Sn;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v826 = v1102[j$$11]
              }
              var v1103 = this.scoreSet;
              var v827 = v1103.gap;
              var v389 = v826 - v827;
              var v1309 = this.scoreSet;
              var v1104 = v1309.gap;
              var v828 = left$$2 - v1104;
              var v1105 = diag;
              var v1310 = this.scoreSet;
              var v1437 = this.M;
              var v1438 = i$$11 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1311 = v1437[v1438]
              }
              var v1439 = this.N;
              var v1440 = j$$11 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1312 = v1439[v1440]
              }
              var v1106 = JAMScript.call(v1310.getScore, v1310, [v1311, v1312]);
              var v829 = v1105 + v1106;
              var v390 = Math.max(v828, v829);
              left$$2 = Math.max(v389, v390)
            }
          }
        }
        var v394 = this.Sn;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          diag = v394[j$$11]
        }
        var v395 = this.Sn;
        JAMScript.set(v395, j$$11, left$$2, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$11 = j$$11 + 1;
        v396 = j$$11 <= j2
      }
      i$$11 = i$$11 + 1;
      v397 = i$$11 <= middle
    }
    var v398 = this.Sp;
    JAMScript.set(v398, j2, 0, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
    var v1107 = this.M;
    var v830 = v1107.length;
    var v403 = i2 == v830;
    if(v403) {
      j$$11 = j2 - 1;
      var v400 = j$$11 >= j1;
      for(;v400;) {
        var v399 = this.Sp;
        var v1108 = this.Sp;
        var v1109 = j$$11 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v831 = v1108[v1109]
        }
        var v1110 = this.scoreSet;
        var v832 = v1110.endGap;
        JAMScript.set(v399, j$$11, v831 - v832, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$11 = j$$11 - 1;
        v400 = j$$11 >= j1
      }
    }else {
      j$$11 = j2 - 1;
      var v402 = j$$11 >= j1;
      for(;v402;) {
        var v401 = this.Sp;
        var v1111 = this.Sp;
        var v1112 = j$$11 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v833 = v1111[v1112]
        }
        var v1113 = this.scoreSet;
        var v834 = v1113.gap;
        JAMScript.set(v401, j$$11, v833 - v834, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$11 = j$$11 - 1;
        v402 = j$$11 >= j1
      }
    }
    var right$$2;
    i$$11 = i2 - 1;
    var v425 = i$$11 >= middle;
    for(;v425;) {
      var v404 = this.Sp;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        diag = v404[j2]
      }
      var v1114 = this.N;
      var v835 = v1114.length;
      var v409 = j2 == v835;
      if(v409) {
        var v836 = this.Sp;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v405 = v836[j2]
        }
        var v837 = this.scoreSet;
        var v406 = v837.endGap;
        right$$2 = v405 - v406
      }else {
        var v838 = this.Sp;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v407 = v838[j2]
        }
        var v839 = this.scoreSet;
        var v408 = v839.gap;
        right$$2 = v407 - v408
      }
      var v410 = this.Sp;
      JAMScript.set(v410, j2, right$$2, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
      j$$11 = j2 - 1;
      var v424 = j$$11 >= j1;
      for(;v424;) {
        var v840 = j$$11 == 0;
        if(v840) {
          v840 = i$$11 == 0
        }
        var v421 = v840;
        if(v421) {
          var v1115 = this.Sp;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v841 = v1115[j$$11]
          }
          var v1116 = this.scoreSet;
          var v842 = v1116.beginGap;
          var v411 = v841 - v842;
          var v1313 = this.scoreSet;
          var v1117 = v1313.beginGap;
          var v843 = right$$2 - v1117;
          var v1118 = diag;
          var v1314 = this.scoreSet;
          var v1441 = this.M;
          var v1497 = i$$11 + 1;
          var v1442 = v1497 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1315 = v1441[v1442]
          }
          var v1443 = this.N;
          var v1498 = j$$11 + 1;
          var v1444 = v1498 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1316 = v1443[v1444]
          }
          var v1119 = JAMScript.call(v1314.getScore, v1314, [v1315, v1316]);
          var v844 = v1118 + v1119;
          var v412 = Math.max(v843, v844);
          right$$2 = Math.max(v411, v412)
        }else {
          var v420 = j$$11 == 0;
          if(v420) {
            var v1120 = this.Sp;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v845 = v1120[j$$11]
            }
            var v1121 = this.scoreSet;
            var v846 = v1121.beginGap;
            var v413 = v845 - v846;
            var v1317 = this.scoreSet;
            var v1122 = v1317.gap;
            var v847 = right$$2 - v1122;
            var v1123 = diag;
            var v1318 = this.scoreSet;
            var v1445 = this.M;
            var v1499 = i$$11 + 1;
            var v1446 = v1499 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1319 = v1445[v1446]
            }
            var v1447 = this.N;
            var v1500 = j$$11 + 1;
            var v1448 = v1500 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1320 = v1447[v1448]
            }
            var v1124 = JAMScript.call(v1318.getScore, v1318, [v1319, v1320]);
            var v848 = v1123 + v1124;
            var v414 = Math.max(v847, v848);
            right$$2 = Math.max(v413, v414)
          }else {
            var v419 = i$$11 == 0;
            if(v419) {
              var v1125 = this.Sp;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v849 = v1125[j$$11]
              }
              var v1126 = this.scoreSet;
              var v850 = v1126.gap;
              var v415 = v849 - v850;
              var v1321 = this.scoreSet;
              var v1127 = v1321.beginGap;
              var v851 = right$$2 - v1127;
              var v1128 = diag;
              var v1322 = this.scoreSet;
              var v1449 = this.M;
              var v1501 = i$$11 + 1;
              var v1450 = v1501 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1323 = v1449[v1450]
              }
              var v1451 = this.N;
              var v1502 = j$$11 + 1;
              var v1452 = v1502 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1324 = v1451[v1452]
              }
              var v1129 = JAMScript.call(v1322.getScore, v1322, [v1323, v1324]);
              var v852 = v1128 + v1129;
              var v416 = Math.max(v851, v852);
              right$$2 = Math.max(v415, v416)
            }else {
              var v1130 = this.Sp;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v853 = v1130[j$$11]
              }
              var v1131 = this.scoreSet;
              var v854 = v1131.gap;
              var v417 = v853 - v854;
              var v1325 = this.scoreSet;
              var v1132 = v1325.gap;
              var v855 = right$$2 - v1132;
              var v1133 = diag;
              var v1326 = this.scoreSet;
              var v1453 = this.M;
              var v1503 = i$$11 + 1;
              var v1454 = v1503 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1327 = v1453[v1454]
              }
              var v1455 = this.N;
              var v1504 = j$$11 + 1;
              var v1456 = v1504 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1328 = v1455[v1456]
              }
              var v1134 = JAMScript.call(v1326.getScore, v1326, [v1327, v1328]);
              var v856 = v1133 + v1134;
              var v418 = Math.max(v855, v856);
              right$$2 = Math.max(v417, v418)
            }
          }
        }
        var v422 = this.Sp;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          diag = v422[j$$11]
        }
        var v423 = this.Sp;
        JAMScript.set(v423, j$$11, right$$2, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$11 = j$$11 - 1;
        v424 = j$$11 >= j1
      }
      i$$11 = i$$11 - 1;
      v425 = i$$11 >= middle
    }
    var v857 = this.Sn;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v426 = v857[j1]
    }
    var v858 = this.Sp;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v427 = v858[j1]
    }
    var maxValue = v426 + v427;
    var maxJ = j1;
    j$$11 = j1 + 1;
    var v431 = j$$11 <= j2;
    for(;v431;) {
      var v1329 = this.Sn;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1135 = v1329[j$$11]
      }
      var v1330 = this.Sp;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1136 = v1330[j$$11]
      }
      var v859 = v1135 + v1136;
      var v430 = v859 >= maxValue;
      if(v430) {
        var v860 = this.Sn;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v428 = v860[j$$11]
        }
        var v861 = this.Sp;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v429 = v861[j$$11]
        }
        maxValue = v428 + v429;
        maxJ = j$$11
      }
      j$$11 = j$$11 + 1;
      v431 = j$$11 <= j2
    }
    JAMScript.call(this.path, this, [i1, j1, middle, maxJ]);
    JAMScript.call(this.path, this, [middle, maxJ, i2, j2])
  }
  return
}
function getAlignedM() {
  var v433 = this.alignedM;
  return v433.join("")
}
function getAlignedN() {
  var v434 = this.alignedN;
  return v434.join("")
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1603 = new Array;
  this.alignedM = v1603;
  var v1604 = new Array;
  this.alignedN = v1604;
  this.scoreSet = scoreSet$$1;
  var v862 = this.N;
  var v435 = v862.length;
  var v1605 = new Array(v435);
  this.Sn = v1605;
  var v863 = this.N;
  var v436 = v863.length;
  var v1606 = new Array(v436);
  this.Sp = v1606;
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
  var v1137 = this.M;
  var v864 = v1137.length;
  var v437 = v864 + 1;
  var v1607 = new Array(v437);
  this.nodes = v1607;
  var i$$12 = 0;
  var v1138 = this.nodes;
  var v865 = v1138.length;
  var v443 = i$$12 < v865;
  for(;v443;) {
    var v438 = this.nodes;
    var v439 = i$$12;
    var v1331 = this.N;
    var v1139 = v1331.length;
    var v866 = v1139 + 1;
    var v1608 = new Array(v866);
    v438[v439] = v1608;
    var j$$12 = 0;
    var v1332 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1140 = v1332[i$$12]
    }
    var v867 = v1140.length;
    var v442 = j$$12 < v867;
    for(;v442;) {
      var v868 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v440 = v868[i$$12]
      }
      var v441 = j$$12;
      var v1609 = new Node;
      v440[v441] = v1609;
      j$$12 = j$$12 + 1;
      var v1333 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1141 = v1333[i$$12]
      }
      var v869 = v1141.length;
      v442 = j$$12 < v869
    }
    i$$12 = i$$12 + 1;
    var v1142 = this.nodes;
    var v870 = v1142.length;
    v443 = i$$12 < v870
  }
  var v1143 = this.nodes;
  var v871 = v1143[0];
  var v444 = v871[0];
  v444.value = 0;
  i$$12 = 1;
  var v1144 = this.nodes;
  var v872 = v1144.length;
  var v450 = i$$12 < v872;
  for(;v450;) {
    var v873 = this.scoreSet;
    var v447 = v873.useBeginGapLeft;
    if(v447) {
      var v1145 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v874 = v1145[i$$12]
      }
      var v445 = v874[0];
      var v1457 = this.nodes;
      var v1458 = i$$12 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1334 = v1457[v1458]
      }
      var v1146 = v1334[0];
      var v875 = v1146.value;
      var v1147 = this.scoreSet;
      var v876 = v1147.beginGap;
      v445.value = v875 - v876
    }else {
      var v1148 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v877 = v1148[i$$12]
      }
      var v446 = v877[0];
      var v1459 = this.nodes;
      var v1460 = i$$12 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1335 = v1459[v1460]
      }
      var v1149 = v1335[0];
      var v878 = v1149.value;
      var v1150 = this.scoreSet;
      var v879 = v1150.gap;
      v446.value = v878 - v879
    }
    var v1151 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v880 = v1151[i$$12]
    }
    var v448 = v880[0];
    v448.tracebackI = i$$12 - 1;
    var v1152 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v881 = v1152[i$$12]
    }
    var v449 = v881[0];
    v449.tracebackJ = 0;
    i$$12 = i$$12 + 1;
    var v1153 = this.nodes;
    var v882 = v1153.length;
    v450 = i$$12 < v882
  }
  j$$12 = 1;
  var v1336 = this.nodes;
  var v1154 = v1336[0];
  var v883 = v1154.length;
  var v456 = j$$12 < v883;
  for(;v456;) {
    var v884 = this.scoreSet;
    var v453 = v884.useBeginGapTop;
    if(v453) {
      var v1155 = this.nodes;
      var v885 = v1155[0];
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v451 = v885[j$$12]
      }
      var v1461 = this.nodes;
      var v1337 = v1461[0];
      var v1338 = j$$12 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1156 = v1337[v1338]
      }
      var v886 = v1156.value;
      var v1157 = this.scoreSet;
      var v887 = v1157.beginGap;
      v451.value = v886 - v887
    }else {
      var v1158 = this.nodes;
      var v888 = v1158[0];
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v452 = v888[j$$12]
      }
      var v1462 = this.nodes;
      var v1339 = v1462[0];
      var v1340 = j$$12 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1159 = v1339[v1340]
      }
      var v889 = v1159.value;
      var v1160 = this.scoreSet;
      var v890 = v1160.gap;
      v452.value = v889 - v890
    }
    var v1161 = this.nodes;
    var v891 = v1161[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v454 = v891[j$$12]
    }
    v454.tracebackI = 0;
    var v1162 = this.nodes;
    var v892 = v1162[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v455 = v892[j$$12]
    }
    v455.tracebackJ = j$$12 - 1;
    j$$12 = j$$12 + 1;
    var v1341 = this.nodes;
    var v1163 = v1341[0];
    var v893 = v1163.length;
    v456 = j$$12 < v893
  }
  return
}
function dumpMatrix() {
  var v457 = outputWindow.document;
  var v1463 = this.nodes;
  var v1342 = v1463.length;
  var v1164 = "Dynamic programming matrix i=" + v1342;
  var v894 = v1164 + " and j=";
  var v1343 = this.nodes;
  var v1165 = v1343[0];
  var v895 = v1165.length;
  var v458 = v894 + v895;
  JAMScript.call(v457.write, v457, [v458]);
  var v459 = outputWindow.document;
  JAMScript.call(v459.write, v459, ["\n"]);
  var i$$13 = 0;
  var v1166 = this.nodes;
  var v896 = v1166.length;
  var v470 = i$$13 < v896;
  for(;v470;) {
    var j$$13 = 0;
    var v1344 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1167 = v1344[i$$13]
    }
    var v897 = v1167.length;
    var v468 = j$$13 < v897;
    for(;v468;) {
      var v1168 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v898 = v1168[i$$13]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v460 = v898[j$$13]
      }
      var traceI = v460.tracebackI;
      var v1169 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v899 = v1169[i$$13]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v461 = v899[j$$13]
      }
      var traceJ = v461.tracebackJ;
      var v462 = traceI == undefined;
      if(v462) {
        traceI = "u"
      }
      var v463 = traceJ == undefined;
      if(v463) {
        traceJ = "u"
      }
      var v1545 = "(" + i$$13;
      var v1531 = v1545 + ",";
      var v1505 = v1531 + j$$13;
      var v1464 = v1505 + ")[";
      var v1345 = v1464 + traceI;
      var v1170 = v1345 + ",";
      var v900 = v1170 + traceJ;
      var v464 = v900 + "]=";
      var v1346 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1171 = v1346[i$$13]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v901 = v1171[j$$13]
      }
      var v465 = v901.value;
      var output = v464 + v465;
      var v466 = outputWindow.document;
      var v467 = rightNum(output, "", 20, " ");
      JAMScript.call(v466.write, v466, [v467]);
      j$$13 = j$$13 + 1;
      var v1347 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1172 = v1347[i$$13]
      }
      var v902 = v1172.length;
      v468 = j$$13 < v902
    }
    var v469 = outputWindow.document;
    JAMScript.call(v469.write, v469, ["\n"]);
    i$$13 = i$$13 + 1;
    var v1173 = this.nodes;
    var v903 = v1173.length;
    v470 = i$$13 < v903
  }
  var v471 = outputWindow.document;
  JAMScript.call(v471.write, v471, ["\n"]);
  return
}
function fillMatrix() {
  var i$$14 = 1;
  var v1174 = this.nodes;
  var v904 = v1174.length;
  var v517 = i$$14 < v904;
  for(;v517;) {
    var j$$14 = 1;
    var v1348 = this.nodes;
    var v1175 = v1348[0];
    var v905 = v1175.length;
    var v516 = j$$14 < v905;
    for(;v516;) {
      var a;
      var b;
      var c;
      var v1465 = this.nodes;
      var v1349 = v1465.length;
      var v1176 = v1349 - 1;
      var v906 = i$$14 == v1176;
      if(v906) {
        var v1506 = this.nodes;
        var v1466 = v1506[0];
        var v1350 = v1466.length;
        var v1177 = v1350 - 1;
        v906 = j$$14 == v1177
      }
      var v502 = v906;
      if(v502) {
        var v907 = this.scoreSet;
        var v476 = v907.useEndGapRight;
        if(v476) {
          var v1351 = this.nodes;
          var v1352 = i$$14 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1178 = v1351[v1352]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v908 = v1178[j$$14]
          }
          var v472 = v908.value;
          var v909 = this.scoreSet;
          var v473 = v909.endGap;
          a = v472 - v473
        }else {
          var v1353 = this.nodes;
          var v1354 = i$$14 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1179 = v1353[v1354]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v910 = v1179[j$$14]
          }
          var v474 = v910.value;
          var v911 = this.scoreSet;
          var v475 = v911.gap;
          a = v474 - v475
        }
        var v912 = this.scoreSet;
        var v481 = v912.useEndGapBottom;
        if(v481) {
          var v1355 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1180 = v1355[i$$14]
          }
          var v1181 = j$$14 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v913 = v1180[v1181]
          }
          var v477 = v913.value;
          var v914 = this.scoreSet;
          var v478 = v914.endGap;
          b = v477 - v478
        }else {
          var v1356 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1182 = v1356[i$$14]
          }
          var v1183 = j$$14 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v915 = v1182[v1183]
          }
          var v479 = v915.value;
          var v916 = this.scoreSet;
          var v480 = v916.gap;
          b = v479 - v480
        }
      }else {
        var v1357 = this.nodes;
        var v1184 = v1357.length;
        var v917 = v1184 - 1;
        var v501 = i$$14 == v917;
        if(v501) {
          var v1358 = this.nodes;
          var v1359 = i$$14 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1185 = v1358[v1359]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v918 = v1185[j$$14]
          }
          var v482 = v918.value;
          var v919 = this.scoreSet;
          var v483 = v919.gap;
          a = v482 - v483;
          var v920 = this.scoreSet;
          var v488 = v920.useEndGapBottom;
          if(v488) {
            var v1360 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1186 = v1360[i$$14]
            }
            var v1187 = j$$14 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v921 = v1186[v1187]
            }
            var v484 = v921.value;
            var v922 = this.scoreSet;
            var v485 = v922.endGap;
            b = v484 - v485
          }else {
            var v1361 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1188 = v1361[i$$14]
            }
            var v1189 = j$$14 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v923 = v1188[v1189]
            }
            var v486 = v923.value;
            var v924 = this.scoreSet;
            var v487 = v924.gap;
            b = v486 - v487
          }
        }else {
          var v1467 = this.nodes;
          var v1362 = v1467[0];
          var v1190 = v1362.length;
          var v925 = v1190 - 1;
          var v500 = j$$14 == v925;
          if(v500) {
            var v926 = this.scoreSet;
            var v493 = v926.useEndGapRight;
            if(v493) {
              var v1363 = this.nodes;
              var v1364 = i$$14 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1191 = v1363[v1364]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v927 = v1191[j$$14]
              }
              var v489 = v927.value;
              var v928 = this.scoreSet;
              var v490 = v928.endGap;
              a = v489 - v490
            }else {
              var v1365 = this.nodes;
              var v1366 = i$$14 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1192 = v1365[v1366]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v929 = v1192[j$$14]
              }
              var v491 = v929.value;
              var v930 = this.scoreSet;
              var v492 = v930.gap;
              a = v491 - v492
            }
            var v1367 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1193 = v1367[i$$14]
            }
            var v1194 = j$$14 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v931 = v1193[v1194]
            }
            var v494 = v931.value;
            var v932 = this.scoreSet;
            var v495 = v932.gap;
            b = v494 - v495
          }else {
            var v1368 = this.nodes;
            var v1369 = i$$14 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1195 = v1368[v1369]
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v933 = v1195[j$$14]
            }
            var v496 = v933.value;
            var v934 = this.scoreSet;
            var v497 = v934.gap;
            a = v496 - v497;
            var v1370 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1196 = v1370[i$$14]
            }
            var v1197 = j$$14 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v935 = v1196[v1197]
            }
            var v498 = v935.value;
            var v936 = this.scoreSet;
            var v499 = v936.gap;
            b = v498 - v499
          }
        }
      }
      var v1371 = this.nodes;
      var v1372 = i$$14 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1198 = v1371[v1372]
      }
      var v1199 = j$$14 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v937 = v1198[v1199]
      }
      var v503 = v937.value;
      var v938 = this.scoreSet;
      var v1200 = this.M;
      var v1201 = i$$14 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v939 = v1200[v1201]
      }
      var v1202 = this.N;
      var v1203 = j$$14 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v940 = v1202[v1203]
      }
      var v504 = JAMScript.call(v938.getScore, v938, [v939, v940]);
      c = v503 + v504;
      var v941 = a >= b;
      if(v941) {
        v941 = a >= c
      }
      var v515 = v941;
      if(v515) {
        var v1204 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v942 = v1204[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v505 = v942[j$$14]
        }
        v505.value = a;
        var v1205 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v943 = v1205[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v506 = v943[j$$14]
        }
        v506.tracebackI = i$$14 - 1;
        var v1206 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v944 = v1206[i$$14]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v507 = v944[j$$14]
        }
        v507.tracebackJ = j$$14
      }else {
        var v945 = b >= c;
        if(v945) {
          v945 = b >= a
        }
        var v514 = v945;
        if(v514) {
          var v1207 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v946 = v1207[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v508 = v946[j$$14]
          }
          v508.value = b;
          var v1208 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v947 = v1208[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v509 = v947[j$$14]
          }
          v509.tracebackI = i$$14;
          var v1209 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v948 = v1209[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v510 = v948[j$$14]
          }
          v510.tracebackJ = j$$14 - 1
        }else {
          var v1210 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v949 = v1210[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v511 = v949[j$$14]
          }
          v511.value = c;
          var v1211 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v950 = v1211[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v512 = v950[j$$14]
          }
          v512.tracebackI = i$$14 - 1;
          var v1212 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v951 = v1212[i$$14]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v513 = v951[j$$14]
          }
          v513.tracebackJ = j$$14 - 1
        }
      }
      j$$14 = j$$14 + 1;
      var v1373 = this.nodes;
      var v1213 = v1373[0];
      var v952 = v1213.length;
      v516 = j$$14 < v952
    }
    i$$14 = i$$14 + 1;
    var v1214 = this.nodes;
    var v953 = v1214.length;
    v517 = i$$14 < v953
  }
  var v1215 = this.nodes;
  var v1468 = this.nodes;
  var v1374 = v1468.length;
  var v1216 = v1374 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v954 = v1215[v1216]
  }
  var v1469 = this.nodes;
  var v1375 = v1469[0];
  var v1217 = v1375.length;
  var v955 = v1217 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v518 = v954[v955]
  }
  this.score = v518.value;
  return
}
function alignQuad() {
  var v1610 = new Array;
  this.alignedM = v1610;
  var v1611 = new Array;
  this.alignedN = v1611;
  var v956 = this.nodes;
  var v519 = v956.length;
  var currentI = v519 - 1;
  var v1218 = this.nodes;
  var v957 = v1218[0];
  var v520 = v957.length;
  var currentJ = v520 - 1;
  var v958 = this.nodes;
  var v1376 = this.nodes;
  var v1219 = v1376.length;
  var v959 = v1219 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v521 = v958[v959]
  }
  var v1377 = this.nodes;
  var v1220 = v1377[0];
  var v960 = v1220.length;
  var v522 = v960 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var currentNode = v521[v522]
  }
  var v1221 = currentNode.tracebackI;
  var v961 = v1221 != undefined;
  if(v961) {
    var v1222 = currentNode.tracebackJ;
    v961 = v1222 != undefined
  }
  var v537 = v961;
  for(;v537;) {
    var v1223 = currentNode.tracebackI;
    var v1224 = currentI - 1;
    var v962 = v1223 == v1224;
    if(v962) {
      var v1225 = currentNode.tracebackJ;
      var v1226 = currentJ - 1;
      v962 = v1225 == v1226
    }
    var v534 = v962;
    if(v534) {
      var v523 = this.alignedM;
      var v963 = this.M;
      var v524 = v963.pop();
      v523.push(v524);
      var v525 = this.alignedN;
      var v964 = this.N;
      var v526 = v964.pop();
      v525.push(v526)
    }else {
      var v965 = currentNode.tracebackJ;
      var v966 = currentJ - 1;
      var v533 = v965 == v966;
      if(v533) {
        var v527 = this.alignedM;
        v527.push("-");
        var v528 = this.alignedN;
        var v967 = this.N;
        var v529 = v967.pop();
        v528.push(v529)
      }else {
        var v530 = this.alignedM;
        var v968 = this.M;
        var v531 = v968.pop();
        v530.push(v531);
        var v532 = this.alignedN;
        v532.push("-")
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v969 = this.nodes;
    var v970 = currentNode.tracebackI;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v535 = v969[v970]
    }
    var v536 = currentNode.tracebackJ;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      currentNode = v535[v536]
    }
    var v1227 = currentNode.tracebackI;
    var v971 = v1227 != undefined;
    if(v971) {
      var v1228 = currentNode.tracebackJ;
      v971 = v1228 != undefined
    }
    v537 = v971
  }
  var v538 = this.alignedM;
  var v1612 = v538.reverse();
  this.alignedM = v1612;
  var v539 = this.alignedN;
  var v1613 = v539.reverse();
  this.alignedN = v1613;
  return
}
function getAlignedM() {
  var v540 = this.alignedM;
  return v540.join("")
}
function getAlignedN() {
  var v541 = this.alignedN;
  return v541.join("")
}
function AlignPairQuad() {
  return
}
new ScoreSet;
var v542 = ScoreSet.prototype;
v542.getScore = getScore;
var v543 = ScoreSet.prototype;
v543.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v544 = ScoringMatrix.prototype;
v544.scoringMatrix_getScore = scoringMatrix_getScore;
var v545 = Identity;
var v1614 = new ScoringMatrix;
v545.prototype = v1614;
var v546 = Identity.prototype;
v546.setMismatch = setMismatch;
var v547 = Identity.prototype;
v547.setMatch = setMatch;
new AlignPairLinear;
var v548 = AlignPairLinear.prototype;
v548.align = align;
var v549 = AlignPairLinear.prototype;
v549.path = path;
var v550 = AlignPairLinear.prototype;
v550.setAlignParam = setAlignParam;
var v551 = AlignPairLinear.prototype;
v551.getAlignedM = getAlignedM;
var v552 = AlignPairLinear.prototype;
v552.getAlignedN = getAlignedN;
new AlignPairQuad;
var v553 = AlignPairQuad.prototype;
v553.initializeMatrix = initializeMatrix;
var v554 = AlignPairQuad.prototype;
v554.fillMatrix = fillMatrix;
var v555 = AlignPairQuad.prototype;
v555.align = alignQuad;
var v556 = AlignPairQuad.prototype;
v556.getAlignedM = getAlignedM;
var v557 = AlignPairQuad.prototype;
v557.getAlignedN = getAlignedN;
var v558 = AlignPairQuad.prototype;
v558.dumpMatrix = dumpMatrix;
JAMScript.set(document, "onload", v2);
var v559 = document.getElementById("submitbtn");
JAMScript.set(v559, "onclick", v3);
var v560 = document.getElementById("clearbtn");
JAMScript.set(v560, "onclick", v4);

