function v4() {
  var v1259 = document.forms;
  var v997 = v1259[0];
  var v577 = v997.elements;
  var v5 = v577[0];
  v5.value = " ";
  var v1260 = document.forms;
  var v998 = v1260[0];
  var v578 = v998.elements;
  var v6 = v578[4];
  v6.value = " ";
  return
}
function v3() {
  try {
    pairwiseAlignProtein(document)
  }catch(e$$5) {
    var v7 = "The following error was encountered: " + e$$5;
    alert(v7)
  }
  return
}
function v2() {
  var v579 = document.main_form;
  var v8 = v579.main_submit;
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
  var v580 = arrayOfSequences.length;
  var v10 = v580 < 2;
  if(v10) {
    alert("Please enter an alignment consisting of at least two sequences.");
    return false
  }
  var i$$1 = 0;
  var v581 = arrayOfTitles.length;
  var v12 = i$$1 < v581;
  for(;v12;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1261 = arrayOfTitles[i$$1]
    }
    var v999 = v1261.search(/\S/);
    var v582 = v999 == -1;
    var v1001 = !v582;
    if(v1001) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1407 = arrayOfSequences[i$$1]
      }
      var v1262 = v1407.search(/\S/);
      var v1000 = v1262 == -1;
      var v1264 = !v1000;
      if(v1264) {
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v1408 = arrayOfSequences[i$$1]
        }
        var v1263 = v1408.length;
        v1000 = v1263 != lengthOfAlign
      }
      v582 = v1000
    }
    var v11 = v582;
    if(v11) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$1 = i$$1 + 1;
    var v583 = arrayOfTitles.length;
    v12 = i$$1 < v583
  }
  return true
}
function checkCodonTable(codonTable) {
  var v1002 = codonTable.search(/AmAcid/);
  var v584 = v1002 == -1;
  var v1004 = !v584;
  if(v1004) {
    var v1265 = codonTable.search(/Codon/);
    var v1003 = v1265 == -1;
    var v1267 = !v1003;
    if(v1267) {
      var v1409 = codonTable.search(/Number/);
      var v1266 = v1409 == -1;
      var v1411 = !v1266;
      if(v1411) {
        var v1497 = codonTable.search(/\/1000/);
        var v1410 = v1497 == -1;
        var v1499 = !v1410;
        if(v1499) {
          var v1498 = codonTable.search(/Fraction\s*\.\./);
          v1410 = v1498 == -1
        }
        v1266 = v1410
      }
      v1003 = v1266
    }
    v584 = v1003
  }
  var v13 = v584;
  if(v13) {
    alert("The codon table has been entered incorrectly.");
    return false
  }
  return true
}
function checkFormElement(formElement) {
  var v1005 = formElement.value;
  var v585 = v1005.search(/\S/);
  var v14 = v585 == -1;
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
  var v586 = arrayOfPatterns.length;
  var v17 = z$$2 < v586;
  for(;v17;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1006 = arrayOfPatterns[z$$2]
    }
    var v587 = v1006.search(/^\s*\/[a-zA-Z\|\[\]]+\/=[a-zA-Z\*]/);
    var v15 = v587 == -1;
    if(v15) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1007 = arrayOfPatterns[z$$2]
    }
    var v588 = moreExpressionCheck(v1007);
    var v16 = v588 == false;
    if(v16) {
      alert("Genetic code error: one or more patterns have been entered incorrectly.");
      return false
    }
    z$$2 = z$$2 + 1;
    var v589 = arrayOfPatterns.length;
    v17 = z$$2 < v589
  }
  var v18 = arrayOfPatterns.length;
  var geneticCodeMatchResult = new Array(v18);
  var v19 = arrayOfPatterns.length;
  var geneticCodeMatchExp = new Array(v19);
  var j = 0;
  var v590 = arrayOfPatterns.length;
  var v26 = j < v590;
  for(;v26;) {
    var v20 = geneticCodeMatchExp;
    var v21 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1268 = arrayOfPatterns[j]
    }
    var v1008 = v1268.match(/\/.+\//);
    var v591 = v1008 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1618 = eval("introspect(JAMScript.introspectors.processAll) { " + v591 + " }")
    }else {
      var v1618 = JAMScript.call(eval, null, [v591])
    }
    v20[v21] = v1618;
    var v22 = geneticCodeMatchResult;
    var v23 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1009 = arrayOfPatterns[j]
    }
    var v592 = v1009.match(/=[a-zA-Z\*]/);
    var v1619 = v592.toString();
    v22[v23] = v1619;
    var v24 = geneticCodeMatchResult;
    var v25 = j;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v593 = geneticCodeMatchResult[j]
    }
    var v1620 = v593.replace(/=/g, "");
    v24[v25] = v1620;
    j = j + 1;
    var v594 = arrayOfPatterns.length;
    v26 = j < v594
  }
  var i$$2 = 0;
  var v1010 = testSequence.length;
  var v595 = v1010 - 3;
  var v33 = i$$2 <= v595;
  for(;v33;) {
    var v27 = i$$2 + 3;
    codon = testSequence.substring(i$$2, v27);
    j = 0;
    var v596 = geneticCodeMatchExp.length;
    var v31 = j < v596;
    for(;v31;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1011 = geneticCodeMatchExp[j]
      }
      var v597 = codon.search(v1011);
      var v30 = v597 != -1;
      if(v30) {
        var v29 = oneMatch == true;
        if(v29) {
          var v598 = "Genetic code error: more than one amino acid is coded by the codon: " + codon;
          var v28 = v598 + ".";
          alert(v28);
          return false
        }
        oneMatch = true
      }
      j = j + 1;
      var v599 = geneticCodeMatchExp.length;
      v31 = j < v599
    }
    var v32 = oneMatch == false;
    if(v32) {
      alert("The genetic code expressions are missing a codon.");
      return false
    }
    oneMatch = false;
    i$$2 = i$$2 + 3;
    var v1012 = testSequence.length;
    var v600 = v1012 - 3;
    v33 = i$$2 <= v600
  }
  return true
}
function checkGroupInput(arrayOfPatterns$$1) {
  var z$$3 = 0;
  var v601 = arrayOfPatterns$$1.length;
  var v35 = z$$3 < v601;
  for(;v35;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1013 = arrayOfPatterns$$1[z$$3]
    }
    var v602 = v1013.search(/[^acdefghiklmnpqrstvwyz]/i);
    var v34 = v602 != -1;
    if(v34) {
      alert("One or more groups have been entered incorrectly.");
      return false
    }
    z$$3 = z$$3 + 1;
    var v603 = arrayOfPatterns$$1.length;
    v35 = z$$3 < v603
  }
  var i$$3 = 0;
  var v604 = arrayOfPatterns$$1.length;
  var v39 = i$$3 < v604;
  for(;v39;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1014 = arrayOfPatterns$$1[i$$3]
    }
    var v605 = "[" + v1014;
    var v36 = v605 + "]";
    var re = new RegExp(v36, "gi");
    var j$$1 = i$$3 + 1;
    var v606 = arrayOfPatterns$$1.length;
    var v38 = j$$1 < v606;
    for(;v38;) {
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1015 = arrayOfPatterns$$1[j$$1]
      }
      var v607 = v1015.search(re);
      var v37 = v607 != -1;
      if(v37) {
        alert("The same amino acid is in more than one similarity group.");
        return false
      }
      j$$1 = j$$1 + 1;
      var v608 = arrayOfPatterns$$1.length;
      v38 = j$$1 < v608
    }
    i$$3 = i$$3 + 1;
    var v609 = arrayOfPatterns$$1.length;
    v39 = i$$3 < v609
  }
  return true
}
function checkRestPatterns(arrayOfPatterns$$2) {
  var z$$4 = 0;
  var v610 = arrayOfPatterns$$2.length;
  var v42 = z$$4 < v610;
  for(;v42;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1016 = arrayOfPatterns$$2[z$$4]
    }
    var v611 = v1016.search(/^\s*\/[acgturyswkmbdhvn\[\]]+\/\s+\([^\/]+\)\d+/i);
    var v40 = v611 == -1;
    if(v40) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1017 = arrayOfPatterns$$2[z$$4]
    }
    var v612 = moreExpressionCheck(v1017);
    var v41 = v612 == false;
    if(v41) {
      alert("One or more patterns have been entered incorrectly.");
      return false
    }
    z$$4 = z$$4 + 1;
    var v613 = arrayOfPatterns$$2.length;
    v42 = z$$4 < v613
  }
  return true
}
function checkSequenceLength(text$$7, maxInput) {
  var v1269 = getSequenceFromFasta(text$$7);
  var v1018 = v1269.replace(/[^A-Za-z]/g, "");
  var v614 = v1018.length;
  var v44 = v614 > maxInput;
  if(v44) {
    var v615 = "Please enter a sequence consisting of less than or equal to " + maxInput;
    var v43 = v615 + " characters.";
    alert(v43);
    return false
  }else {
    return true
  }
  return
}
function checkTextLength(text$$8, maxInput$$1) {
  var v616 = text$$8.length;
  var v46 = v616 > maxInput$$1;
  if(v46) {
    var v617 = "Please enter text consisting of less than or equal to " + maxInput$$1;
    var v45 = v617 + " characters.";
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
  var v618 = alignArray.length;
  var v53 = v618 < 3;
  if(v53) {
    alert("There is a problem with the alignment format.");
    return false
  }
  var i$$4 = 1;
  var v619 = alignArray.length;
  var v55 = i$$4 < v619;
  for(;v55;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1019 = alignArray[i$$4]
    }
    var v620 = v1019.search(/[^\s]+\s/);
    var v54 = v620 == -1;
    if(v54) {
      alert("There is a problem with the alignment format.");
      return false
    }
    i$$4 = i$$4 + 1;
    var v621 = alignArray.length;
    v55 = i$$4 < v621
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
  var v622 = sequenceData.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v58 = v622 != -1;
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
  var v623 = sequence$$2.length;
  var v59 = "&gt;results for " + v623;
  var stringToReturn = v59 + " residue sequence ";
  var v624 = fastaSequenceTitle.search(/[^\s]/);
  var v61 = v624 != -1;
  if(v61) {
    var v625 = stringToReturn + '"';
    var v60 = v625 + fastaSequenceTitle;
    stringToReturn = v60 + '"'
  }
  var v626 = stringToReturn + ' starting "';
  var v627 = sequence$$2.substring(0, 10);
  var v62 = v626 + v627;
  stringToReturn = v62 + '"';
  return stringToReturn + "\n"
}
function getFuzzySearchTitle(fastaSequenceTitleOne, sequenceOne, fastaSequenceTitleTwo, sequenceTwo) {
  var v628 = sequenceOne.length;
  var v63 = "Search results for " + v628;
  var stringToReturn$$1 = v63 + " residue sequence ";
  var v629 = fastaSequenceTitleOne.search(/[^\s]/);
  var v65 = v629 != -1;
  if(v65) {
    var v630 = stringToReturn$$1 + '"';
    var v64 = v630 + fastaSequenceTitleOne;
    stringToReturn$$1 = v64 + '"'
  }
  var v631 = stringToReturn$$1 + ' starting "';
  var v632 = sequenceOne.substring(0, 10);
  var v66 = v631 + v632;
  stringToReturn$$1 = v66 + '"\n';
  var v633 = stringToReturn$$1 + "and ";
  var v634 = sequenceTwo.length;
  var v67 = v633 + v634;
  stringToReturn$$1 = v67 + " residue sequence ";
  var v635 = fastaSequenceTitleTwo.search(/[^\s]/);
  var v69 = v635 != -1;
  if(v69) {
    var v636 = stringToReturn$$1 + '"';
    var v68 = v636 + fastaSequenceTitleTwo;
    stringToReturn$$1 = v68 + '"'
  }
  var v637 = stringToReturn$$1 + ' starting "';
  var v638 = sequenceTwo.substring(0, 10);
  var v70 = v637 + v638;
  stringToReturn$$1 = v70 + '"';
  var v71 = '<div class="info">' + stringToReturn$$1;
  return v71 + "</div>\n"
}
function getGeneticCodeMatchExp(arrayOfPatterns$$3) {
  var v72 = arrayOfPatterns$$3.length;
  var geneticCodeMatchExp$$1 = new Array(v72);
  var j$$2 = 0;
  var v639 = arrayOfPatterns$$3.length;
  var v75 = j$$2 < v639;
  for(;v75;) {
    var v73 = geneticCodeMatchExp$$1;
    var v74 = j$$2;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1270 = arrayOfPatterns$$3[j$$2]
    }
    var v1020 = v1270.match(/\/.+\//);
    var v640 = v1020 + "gi";
    if(JAMScript.isEval(eval)) {
      var v1621 = eval("introspect(JAMScript.introspectors.processAll) { " + v640 + " }")
    }else {
      var v1621 = JAMScript.call(eval, null, [v640])
    }
    v73[v74] = v1621;
    j$$2 = j$$2 + 1;
    var v641 = arrayOfPatterns$$3.length;
    v75 = j$$2 < v641
  }
  return geneticCodeMatchExp$$1
}
function getGeneticCodeMatchResult(arrayOfPatterns$$4) {
  var v76 = arrayOfPatterns$$4.length;
  var geneticCodeMatchResult$$1 = new Array(v76);
  var j$$3 = 0;
  var v642 = arrayOfPatterns$$4.length;
  var v81 = j$$3 < v642;
  for(;v81;) {
    var v77 = geneticCodeMatchResult$$1;
    var v78 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1021 = arrayOfPatterns$$4[j$$3]
    }
    var v643 = v1021.match(/=[a-zA-Z\*]/);
    var v1622 = v643.toString();
    v77[v78] = v1622;
    var v79 = geneticCodeMatchResult$$1;
    var v80 = j$$3;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v644 = geneticCodeMatchResult$$1[j$$3]
    }
    var v1623 = v644.replace(/=/g, "");
    v79[v80] = v1623;
    j$$3 = j$$3 + 1;
    var v645 = arrayOfPatterns$$4.length;
    v81 = j$$3 < v645
  }
  return geneticCodeMatchResult$$1
}
function getInfoFromTitleAndSequence(fastaSequenceTitle$$1, sequence$$3) {
  var v646 = sequence$$3.length;
  var v82 = "Results for " + v646;
  var stringToReturn$$2 = v82 + " residue sequence ";
  var v647 = fastaSequenceTitle$$1.search(/[^\s]/);
  var v84 = v647 != -1;
  if(v84) {
    var v648 = stringToReturn$$2 + '"';
    var v83 = v648 + fastaSequenceTitle$$1;
    stringToReturn$$2 = v83 + '"'
  }
  var v649 = stringToReturn$$2 + ' starting "';
  var v650 = sequence$$3.substring(0, 10);
  var v85 = v649 + v650;
  stringToReturn$$2 = v85 + '"';
  var v86 = '<div class="info">' + stringToReturn$$2;
  return v86 + "</div>\n"
}
function getInfoFromTitleAndSequenceAndTopology(fastaSequenceTitle$$2, sequence$$4, topology) {
  var v1022 = "Results for " + topology;
  var v651 = v1022 + " ";
  var v652 = sequence$$4.length;
  var v87 = v651 + v652;
  var stringToReturn$$3 = v87 + " residue sequence ";
  var v653 = fastaSequenceTitle$$2.search(/[^\s]/);
  var v89 = v653 != -1;
  if(v89) {
    var v654 = stringToReturn$$3 + '"';
    var v88 = v654 + fastaSequenceTitle$$2;
    stringToReturn$$3 = v88 + '"'
  }
  var v655 = stringToReturn$$3 + ' starting "';
  var v656 = sequence$$4.substring(0, 10);
  var v90 = v655 + v656;
  stringToReturn$$3 = v90 + '"';
  var v91 = '<div class="info">' + stringToReturn$$3;
  return v91 + "</div>\n"
}
function getPairwiseAlignTitle(fastaSequenceTitleOne$$1, sequenceOne$$1, fastaSequenceTitleTwo$$1, sequenceTwo$$1) {
  var v657 = sequenceOne$$1.length;
  var v92 = "Alignment results for " + v657;
  var stringToReturn$$4 = v92 + " residue sequence ";
  var v658 = fastaSequenceTitleOne$$1.search(/[^\s]/);
  var v94 = v658 != -1;
  if(v94) {
    var v659 = stringToReturn$$4 + '"';
    var v93 = v659 + fastaSequenceTitleOne$$1;
    stringToReturn$$4 = v93 + '"'
  }
  var v660 = stringToReturn$$4 + ' starting "';
  var v661 = sequenceOne$$1.substring(0, 10);
  var v95 = v660 + v661;
  stringToReturn$$4 = v95 + '"\n';
  var v662 = stringToReturn$$4 + "and ";
  var v663 = sequenceTwo$$1.length;
  var v96 = v662 + v663;
  stringToReturn$$4 = v96 + " residue sequence ";
  var v664 = fastaSequenceTitleTwo$$1.search(/[^\s]/);
  var v98 = v664 != -1;
  if(v98) {
    var v665 = stringToReturn$$4 + '"';
    var v97 = v665 + fastaSequenceTitleTwo$$1;
    stringToReturn$$4 = v97 + '"'
  }
  var v666 = stringToReturn$$4 + ' starting "';
  var v667 = sequenceTwo$$1.substring(0, 10);
  var v99 = v666 + v667;
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
    var v668 = Math.random();
    var v669 = components.length;
    var v101 = v668 * v669;
    tempNum = Math.floor(v101);
    tempChar = components[tempNum];
    sequenceArray.push(tempChar);
    j$$4 = j$$4 + 1;
    v102 = j$$4 < lengthOut
  }
  return sequenceArray.join("")
}
function getSequenceFromFasta(sequenceRecord) {
  var v670 = sequenceRecord.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v103 = v670 != -1;
  if(v103) {
    sequenceRecord = sequenceRecord.replace(/\>[^\f\n\r]+[\f\n\r]/, "")
  }
  return sequenceRecord
}
function getTitleFromFasta(sequenceRecord$$1) {
  var fastaTitle = "Untitled";
  var v671 = sequenceRecord$$1.search(/\>[^\f\n\r]+[\f\n\r]/);
  var v105 = v671 != -1;
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
  var v1023 = expressionToCheck.search(/\[[A-Za-z\|]*\[/);
  var v672 = v1023 != -1;
  var v1025 = !v672;
  if(v1025) {
    var v1271 = expressionToCheck.search(/\][A-Za-z\|]*\]/);
    var v1024 = v1271 != -1;
    var v1273 = !v1024;
    if(v1273) {
      var v1412 = expressionToCheck.search(/\[\]/);
      var v1272 = v1412 != -1;
      var v1414 = !v1272;
      if(v1414) {
        var v1500 = expressionToCheck.search(/\/[A-Za-z\|]*\]/);
        var v1413 = v1500 != -1;
        var v1502 = !v1413;
        if(v1502) {
          var v1532 = expressionToCheck.search(/\[[A-Za-z\|]*\//);
          var v1501 = v1532 != -1;
          var v1534 = !v1501;
          if(v1534) {
            var v1553 = expressionToCheck.search(/\|\|/);
            var v1533 = v1553 != -1;
            var v1555 = !v1533;
            if(v1555) {
              var v1567 = expressionToCheck.search(/\/\|/);
              var v1554 = v1567 != -1;
              var v1569 = !v1554;
              if(v1569) {
                var v1579 = expressionToCheck.search(/\|\//);
                var v1568 = v1579 != -1;
                var v1581 = !v1568;
                if(v1581) {
                  var v1589 = expressionToCheck.search(/\[.\]/);
                  var v1580 = v1589 != -1;
                  var v1591 = !v1580;
                  if(v1591) {
                    var v1596 = expressionToCheck.search(/\</);
                    var v1590 = v1596 != -1;
                    var v1598 = !v1590;
                    if(v1598) {
                      var v1597 = expressionToCheck.search(/\>/);
                      v1590 = v1597 != -1
                    }
                    v1580 = v1590
                  }
                  v1568 = v1580
                }
                v1554 = v1568
              }
              v1533 = v1554
            }
            v1501 = v1533
          }
          v1413 = v1501
        }
        v1272 = v1413
      }
      v1024 = v1272
    }
    v672 = v1024
  }
  var v106 = v672;
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
    var v1641 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1641[2], v1641[1], v1641[0]);
  outputWindow.focus();
  var v111 = outputWindow.document;
  var v1274 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1026 = v1274 + "<head>\n";
  var v673 = v1026 + "<title>Sequence Manipulation Suite</title>\n";
  var v112 = v673 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v111.write, v111, [v112]);
  if(isColor) {
    var v113 = outputWindow.document;
    var v1611 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1607 = v1611 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1603 = v1607 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1599 = v1603 + "div.info {font-weight: bold}\n";
    var v1592 = v1599 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1582 = v1592 + "span.one, td.one {color: #000000; background-color: #66FF00}\n";
    var v1570 = v1582 + "span.two, td.two {color: #000000; background-color: #FFFF66}\n";
    var v1556 = v1570 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1535 = v1556 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FF66FF}\n";
    var v1503 = v1535 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FF9933}\n";
    var v1415 = v1503 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1275 = v1415 + "span.mutated_sequence {color: #990066; background-color: #FFFFFF}\n";
    var v1027 = v1275 + "td.many {color: #000000}\n";
    var v674 = v1027 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v114 = v674 + "</style>\n";
    JAMScript.call(v113.write, v113, [v114])
  }else {
    var v115 = outputWindow.document;
    var v1615 = '<style type="text/css">\n' + "body.main {font-size: medium; font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF; margin: 0 auto; padding: 0}\n";
    var v1612 = v1615 + "div.pre {font-size: medium; color: #000000; background-color: #FFFFFF; font-family: courier, sans-serif; white-space: pre}\n";
    var v1608 = v1612 + "div.title {display: none}\n";
    var v1604 = v1608 + "div.info {font-weight: bold}\n";
    var v1600 = v1604 + "span.none, td.none {color: #000000; background-color: #FFFFFF}\n";
    var v1593 = v1600 + "span.one, td.one {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1583 = v1593 + "span.two, td.two {color: #000000; font-style: italic; background-color: #FFFFFF}\n";
    var v1571 = v1583 + "span.three, td.three {color: #000000; background-color: #FFFFFF}\n";
    var v1557 = v1571 + "span.forward_primer, td.forward_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1536 = v1557 + "span.reverse_primer, td.reverse_primer {color: #000000; background-color: #FFFFFF}\n";
    var v1504 = v1536 + "span.current_sequence {color: #000000; background-color: #FFFFFF}\n";
    var v1416 = v1504 + "span.mutated_sequence {color: #000000; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1276 = v1416 + "td.many {color: #000000; background-color: #FFFFFF}\n";
    var v1028 = v1276 + "td.title {font-weight: bold; color: #000000; background-color: #FFFFFF}\n";
    var v675 = v1028 + "img {display: none}\n";
    var v116 = v675 + "</style>\n";
    JAMScript.call(v115.write, v115, [v116])
  }
  var v117 = outputWindow.document;
  var v1277 = "</head>\n" + '<body class="main">\n';
  var v1029 = v1277 + '<div class="title">';
  var v676 = v1029 + title$$6;
  var v118 = v676 + " results</div>\n";
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
    var v1642 = [["", "my_new_window", "toolbar=no, location=no, directories=no, status=yes, menubar=yes, scrollbars=yes, resizable=yes, copyhistory=no, width=800, height=400"], window, window.open]
  }
  outputWindow = JAMScript.call(v1642[2], v1642[1], v1642[0]);
  outputWindow.focus();
  var v119 = outputWindow.document;
  var v1278 = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">\n' + '<html lang="en">\n';
  var v1030 = v1278 + "<head>\n";
  var v677 = v1030 + "<title>Sequence Manipulation Suite</title>\n";
  var v120 = v677 + '<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />\n';
  JAMScript.call(v119.write, v119, [v120]);
  if(isBackground) {
    var v121 = outputWindow.document;
    var v1613 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1609 = v1613 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1605 = v1609 + "div.title {font-size: x-large; color: #000000; text-align: left; background-color: #FFFFFF}\n";
    var v1601 = v1605 + "div.info {font-weight: bold}\n";
    var v1594 = v1601 + "span.ident {color: #FFFFFF; background-color: #000000}\n";
    var v1584 = v1594 + "span.sim {color: #FFFFFF; background-color: #666666}\n";
    var v1572 = v1584 + "span.g, span.a, span.v, span.l, span.i {color: #000000; background-color: #C0C0C0}\n";
    var v1558 = v1572 + "span.f, span.y, span.w {color: #000000; background-color: #FF6600}\n";
    var v1537 = v1558 + "span.c, span.m {color: #000000; background-color: #FFFF00}\n";
    var v1505 = v1537 + "span.s, span.t {color: #000000; background-color: #66FF00}\n";
    var v1417 = v1505 + "span.k, span.r, span.h {color: #000000; background-color: #FF0000}\n";
    var v1279 = v1417 + "span.d, span.e {color: #000000; background-color: #0066FF}\n";
    var v1031 = v1279 + "span.n, span.q {color: #000000; background-color: #996633}\n";
    var v678 = v1031 + "span.p {color: #000000; background-color: #FF99FF}\n";
    var v122 = v678 + "</style>\n";
    JAMScript.call(v121.write, v121, [v122])
  }else {
    var v123 = outputWindow.document;
    var v1617 = '<style type="text/css">\n' + "body.main {font-family: arial, sans-serif; color: #000000; background-color: #FFFFFF}\n";
    var v1616 = v1617 + "div.pre {font-size: medium; color: #000000; font-family: courier, sans-serif; white-space: pre}\n";
    var v1614 = v1616 + "div.title {display: none}\n";
    var v1610 = v1614 + "div.info {font-weight: bold}\n";
    var v1606 = v1610 + "span.ident {color: #000000; font-weight: bold; text-decoration: underline; background-color: #FFFFFF}\n";
    var v1602 = v1606 + "span.sim {color: #000000; font-weight: bold; background-color: #FFFFFF}\n";
    var v1595 = v1602 + "span.diff {color: #999999; background-color: #FFFFFF}\n";
    var v1585 = v1595 + "span.g, span.a, span.v, span.l, span.i {color: #CC33CC; background-color: #FFFFFF}\n";
    var v1573 = v1585 + "span.f, span.y, span.w {color: #FF6600; background-color: #FFFFFF}\n";
    var v1559 = v1573 + "span.c, span.m {color: #FFCC00; background-color: #FFFFFF}\n";
    var v1538 = v1559 + "span.s, span.t {color: #CCFF00; background-color: #FFFFFF}\n";
    var v1506 = v1538 + "span.k, span.r, span.h {color: #FF0000; background-color: #FFFFFF}\n";
    var v1418 = v1506 + "span.d, span.e {color: #0000FF; background-color: #FFFFFF}\n";
    var v1280 = v1418 + "span.n, span.q {color: #996633; background-color: #FFFFFF}\n";
    var v1032 = v1280 + "span.p {color: #00FFCC; background-color: #FFFFFF}\n";
    var v679 = v1032 + "img {display: none}\n";
    var v124 = v679 + "</style>\n";
    JAMScript.call(v123.write, v123, [v124])
  }
  var v125 = outputWindow.document;
  var v1281 = "</head>\n" + '<body class="main">\n';
  var v1033 = v1281 + '<div class="title">';
  var v680 = v1033 + title$$8;
  var v126 = v680 + " results</div>\n";
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
  var v681 = dnaSequence$$1.search(/./);
  var v127 = v681 != -1;
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
  var v682 = testArray[0];
  var v131 = v682 != testString;
  if(v131) {
    alert("Array object push method not supported. See browser compatibility page.");
    return false
  }
  testString = "1\n2\n3";
  var re$$2 = /^2$/m;
  var v683 = testString.search(re$$2);
  var v132 = v683 == -1;
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
  var v684 = testNum.toFixed(3);
  var v135 = v684 != 2489.824;
  if(v135) {
    alert("Number toFixed() method not supported. See browser compatibility page.");
    return false
  }
  var v685 = testNum.toPrecision(5);
  var v136 = v685 != 2489.8;
  if(v136) {
    alert("Number toPrecision() method not supported. See browser compatibility page.");
    return false
  }
  return true
}
function verifyDigits(theNumber$$1) {
  var v686 = theNumber$$1.search(/\d/);
  var v137 = v686 == -1;
  if(v137) {
    alert("Please enter a number");
    return false
  }
  return
}
function verifyEmbl(emblFile) {
  var v1034 = emblFile.search(/ID/);
  var v687 = v1034 == -1;
  var v1036 = !v687;
  if(v1036) {
    var v1282 = emblFile.search(/AC/);
    var v1035 = v1282 == -1;
    var v1284 = !v1035;
    if(v1284) {
      var v1419 = emblFile.search(/DE/);
      var v1283 = v1419 == -1;
      var v1421 = !v1283;
      if(v1421) {
        var v1420 = emblFile.search(/SQ/);
        v1283 = v1420 == -1
      }
      v1035 = v1283
    }
    v687 = v1035
  }
  var v138 = v687;
  if(v138) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  return true
}
function verifyMaxDigits(theNumber$$2, maxInput$$2) {
  var v688 = theNumber$$2.search(/\d/);
  var v139 = v688 == -1;
  if(v139) {
    alert("Please enter a number.");
    return false
  }
  var v141 = theNumber$$2 > maxInput$$2;
  if(v141) {
    var v689 = "Please enter a number less than or equal to " + maxInput$$2;
    var v140 = v689 + ".";
    alert(v140);
    return false
  }
  return
}
function verifyDna(dnaSequence$$2) {
  var v690 = dnaSequence$$2.search(/[^gatucryswkmbdhvnx\s]/i);
  var v142 = v690 != -1;
  if(v142) {
    alert("The sequence contains non-DNA characters, which will be omitted.")
  }
  return true
}
function verifyProtein(proteinSequence) {
  var v691 = proteinSequence.search(/[^acdefghiklmnpqrstvwyz\*\s]/i);
  var v143 = v691 != -1;
  if(v143) {
    alert("The sequence contains non-protein characters, which will be omitted.")
  }
  return true
}
function verifyGenBank(genBankFile) {
  var v1037 = genBankFile.search(/LOCUS/);
  var v692 = v1037 == -1;
  var v1039 = !v692;
  if(v1039) {
    var v1285 = genBankFile.search(/DEFINITION/);
    var v1038 = v1285 == -1;
    var v1287 = !v1038;
    if(v1287) {
      var v1422 = genBankFile.search(/ACCESSION/);
      var v1286 = v1422 == -1;
      var v1424 = !v1286;
      if(v1424) {
        var v1423 = genBankFile.search(/ORIGIN/);
        v1286 = v1423 == -1
      }
      v1038 = v1286
    }
    v692 = v1038
  }
  var v144 = v692;
  if(v144) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  return true
}
function verifyGenBankFeat(genBankFile$$1) {
  var v1040 = genBankFile$$1.search(/LOCUS/);
  var v693 = v1040 == -1;
  var v1042 = !v693;
  if(v1042) {
    var v1288 = genBankFile$$1.search(/DEFINITION/);
    var v1041 = v1288 == -1;
    var v1290 = !v1041;
    if(v1290) {
      var v1425 = genBankFile$$1.search(/ACCESSION/);
      var v1289 = v1425 == -1;
      var v1427 = !v1289;
      if(v1427) {
        var v1426 = genBankFile$$1.search(/ORIGIN/);
        v1289 = v1426 == -1
      }
      v1041 = v1289
    }
    v693 = v1041
  }
  var v145 = v693;
  if(v145) {
    alert("Please enter the contents of a GenBank file.");
    return false
  }
  var v694 = genBankFile$$1.search(/FEATURES {13}/);
  var v146 = v694 == -1;
  if(v146) {
    alert("The file has no defined features.");
    return false
  }
  return true
}
function verifyEmblFeat(emblFile$$1) {
  var v1043 = emblFile$$1.search(/ID/);
  var v695 = v1043 == -1;
  var v1045 = !v695;
  if(v1045) {
    var v1291 = emblFile$$1.search(/AC/);
    var v1044 = v1291 == -1;
    var v1293 = !v1044;
    if(v1293) {
      var v1428 = emblFile$$1.search(/DE/);
      var v1292 = v1428 == -1;
      var v1430 = !v1292;
      if(v1430) {
        var v1429 = emblFile$$1.search(/SQ/);
        v1292 = v1429 == -1
      }
      v1044 = v1292
    }
    v695 = v1044
  }
  var v147 = v695;
  if(v147) {
    alert("Please enter the contents of an EMBL file.");
    return false
  }
  var v696 = emblFile$$1.search(/^FT/m);
  var v148 = v696 == -1;
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
    var v697 = basePerLine / groupSize;
    var v153 = j$$6 <= v697;
    for(;v153;) {
      var v152 = k < groupSize;
      for(;v152;) {
        var v150 = lineOfText;
        var v698 = k + i$$5;
        var v151 = text$$10.charAt(v698);
        lineOfText = v150 + v151;
        k = k + 1;
        v152 = k < groupSize
      }
      i$$5 = i$$5 + groupSize;
      k = 0;
      lineOfText = lineOfText + sepChar;
      j$$6 = j$$6 + 1;
      var v699 = basePerLine / groupSize;
      v153 = j$$6 <= v699
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
    var v700 = adjustment < 0;
    if(v700) {
      v700 = adjusted >= 0
    }
    var v157 = v700;
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
    var v701 = basePerLine$$2 / groupSize$$2;
    var v166 = j$$7 <= v701;
    for(;v166;) {
      var v161 = k$$1 < groupSize$$2;
      for(;v161;) {
        var v702 = i$$6 + k$$1;
        var v158 = v702 >= stopBase$$2;
        if(v158) {
          break
        }
        var v159 = lineOfText$$1;
        var v703 = k$$1 + i$$6;
        var v160 = text$$12.charAt(v703);
        lineOfText$$1 = v159 + v160;
        k$$1 = k$$1 + 1;
        v161 = k$$1 < groupSize$$2
      }
      lineOfText$$1 = lineOfText$$1 + sepChar$$1;
      i$$6 = i$$6 + k$$1;
      var v164 = numberPosition$$1 == "above";
      if(v164) {
        var v162 = aboveNum;
        var v704 = adjustNumbering(i$$6, numberingAdjustment);
        var v163 = rightNum(v704, "", groupSize$$2, tabIn$$3);
        aboveNum = v162 + v163
      }
      var v165 = i$$6 >= stopBase$$2;
      if(v165) {
        break
      }
      k$$1 = 0;
      j$$7 = j$$7 + 1;
      var v705 = basePerLine$$2 / groupSize$$2;
      v166 = j$$7 <= v705
    }
    var v189 = numberPosition$$1 == "left";
    if(v189) {
      var v167 = outputWindow.document;
      var v1294 = adjustNumbering(lineNum, numberingAdjustment);
      var v1046 = rightNum(v1294, "", 8, tabIn$$3);
      var v706 = v1046 + lineOfText$$1;
      var v168 = v706 + "\n";
      JAMScript.call(v167.write, v167, [v168]);
      var v172 = strands$$1 == "two";
      if(v172) {
        var v169 = outputWindow.document;
        var v1295 = adjustNumbering(lineNum, numberingAdjustment);
        var v1047 = rightNum(v1295, "", 8, tabIn$$3);
        var v1048 = complement(lineOfText$$1);
        var v707 = v1047 + v1048;
        var v170 = v707 + "\n";
        JAMScript.call(v169.write, v169, [v170]);
        var v171 = outputWindow.document;
        JAMScript.call(v171.write, v171, ["\n"])
      }
    }else {
      var v188 = numberPosition$$1 == "right";
      if(v188) {
        var v173 = outputWindow.document;
        var v1049 = lineOfText$$1;
        var v1050 = adjustNumbering(i$$6, numberingAdjustment);
        var v708 = v1049 + v1050;
        var v174 = v708 + "\n";
        JAMScript.call(v173.write, v173, [v174]);
        var v178 = strands$$1 == "two";
        if(v178) {
          var v175 = outputWindow.document;
          var v1051 = complement(lineOfText$$1);
          var v1052 = adjustNumbering(i$$6, numberingAdjustment);
          var v709 = v1051 + v1052;
          var v176 = v709 + "\n";
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
            var v710 = complement(lineOfText$$1);
            var v184 = v710 + "\n";
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
    var v711 = basePerLine$$3 / groupSize$$3;
    var v199 = j$$8 <= v711;
    for(;v199;) {
      var v194 = k$$2 < groupSize$$3;
      for(;v194;) {
        var v712 = i$$7 + k$$2;
        var v191 = v712 >= stopBase$$3;
        if(v191) {
          break
        }
        var v192 = lineOfText$$2;
        var v713 = k$$2 + i$$7;
        var v193 = text$$13.charAt(v713);
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
      var v714 = basePerLine$$3 / groupSize$$3;
      v199 = j$$8 <= v714
    }
    var v210 = numberPosition$$2 == "left";
    if(v210) {
      var v200 = outputWindow.document;
      var v1053 = rightNum(lineNum$$1, "", 8, tabIn$$4);
      var v715 = v1053 + lineOfText$$2;
      var v201 = v715 + "\n";
      JAMScript.call(v200.write, v200, [v201])
    }else {
      var v209 = numberPosition$$2 == "right";
      if(v209) {
        var v202 = outputWindow.document;
        var v716 = lineOfText$$2 + i$$7;
        var v203 = v716 + "\n";
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
  var v1054 = sequence$$13.length;
  var v717 = v1054 <= firstIndexToMutate;
  var v1056 = !v717;
  if(v1056) {
    var v1055 = lastIndexToMutate < 0;
    var v1296 = !v1055;
    if(v1296) {
      v1055 = lastIndexToMutate <= firstIndexToMutate
    }
    v717 = v1055
  }
  var v212 = v717;
  if(v212) {
    numMut = 0
  }
  var i$$8 = 0;
  var v220 = i$$8 < numMut;
  for(;v220;) {
    maxNum = sequence$$13.length;
    var v718 = Math.random();
    var v213 = v718 * maxNum;
    randNum = Math.floor(v213);
    var v719 = randNum < firstIndexToMutate;
    var v1057 = !v719;
    if(v1057) {
      v719 = randNum > lastIndexToMutate
    }
    var v214 = v719;
    if(v214) {
      numMut = numMut + 1;
      i$$8 = i$$8 + 1;
      v220 = i$$8 < numMut;
      continue
    }
    currentChar = sequence$$13.charAt(randNum);
    needNewChar = true;
    for(;needNewChar;) {
      var v720 = Math.random();
      var v721 = components$$1.length;
      var v215 = v720 * v721;
      componentsIndex = Math.round(v215);
      var v722 = components$$1.length;
      var v216 = componentsIndex == v722;
      if(v216) {
        componentsIndex = 0
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v723 = components$$1[componentsIndex]
      }
      var v217 = v723 != currentChar;
      if(v217) {
        needNewChar = false
      }
    }
    var v724 = sequence$$13.substring(0, randNum);
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v725 = components$$1[componentsIndex]
    }
    var v218 = v724 + v725;
    var v726 = randNum + 1;
    var v727 = sequence$$13.length;
    var v219 = sequence$$13.substring(v726, v727);
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
    var v728 = Math.random();
    var v729 = components$$2.length;
    var v223 = v728 * v729;
    tempNum$$1 = Math.floor(v223);
    tempChar$$1 = components$$2[tempNum$$1];
    sequence$$14 = sequence$$14 + tempChar$$1;
    var v730 = sequence$$14.length;
    var v226 = v730 == 60;
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
    var v1297 = sequence$$15.length;
    var v1058 = v1297 - lookAhead;
    var v1059 = sequence$$15.length;
    var v731 = sequence$$15.substring(v1058, v1059);
    var v231 = v731 + sequence$$15;
    var v232 = sequence$$15.substring(0, lookAhead);
    sequence$$15 = v231 + v232;
    lowerLimit = 0 + shiftValue;
    upperLimit = upperLimit + shiftValue
  }
  var v234 = outputWindow.document;
  JAMScript.call(v234.write, v234, ['<table border="1" width="100%" cellspacing="0" cellpadding="2"><tbody>\n']);
  var v235 = outputWindow.document;
  var v1298 = '<tr><td class="title" width="200px">' + "Site:";
  var v1060 = v1298 + '</td><td class="title">';
  var v732 = v1060 + "Positions:";
  var v236 = v732 + "</td></tr>\n";
  JAMScript.call(v235.write, v235, [v236]);
  var i$$9 = 0;
  var v733 = arrayOfItems.length;
  var v252 = i$$9 < v733;
  for(;v252;) {
    tempString$$1 = "none";
    backGroundClass = "many";
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v734 = arrayOfItems[i$$9]
    }
    var v237 = v734.match(/\/.+\//);
    matchExp = v237 + "gi";
    matchPosition = 0;
    if(JAMScript.isEval(eval)) {
      matchExp = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp + " }")
    }else {
      matchExp = JAMScript.call(eval, null, [matchExp])
    }
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1299 = arrayOfItems[i$$9]
    }
    var v1061 = v1299.match(/\)\D*\d+/);
    var v735 = v1061.toString();
    var v238 = v735.replace(/\)\D*/, "");
    cutDistance = parseFloat(v238);
    var v244 = matchArray$$1 = matchExp.exec(sequence$$15);
    for(;v244;) {
      var v239 = matchExp.lastIndex;
      matchPosition = v239 - cutDistance;
      var v736 = matchPosition >= lowerLimit;
      if(v736) {
        v736 = matchPosition < upperLimit
      }
      var v242 = v736;
      if(v242) {
        timesFound = timesFound + 1;
        var v240 = tempString$$1 + ", ";
        var v737 = matchPosition - shiftValue;
        var v241 = v737 + 1;
        tempString$$1 = v240 + v241
      }
      var v738 = matchExp.lastIndex;
      var v1062 = RegExp.lastMatch;
      var v739 = v1062.length;
      var v243 = v738 - v739;
      matchExp.lastIndex = v243 + 1;
      v244 = matchArray$$1 = matchExp.exec(sequence$$15)
    }
    var v740 = tempString$$1.search(/\d/);
    var v245 = v740 != -1;
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
    var v1560 = '<tr><td class="' + backGroundClass;
    var v1539 = v1560 + '">';
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1586 = arrayOfItems[i$$9]
    }
    var v1574 = v1586.match(/\([^\(]+\)/);
    var v1561 = v1574.toString();
    var v1540 = v1561.replace(/\(|\)/g, "");
    var v1507 = v1539 + v1540;
    var v1431 = v1507 + '</td><td class="';
    var v1300 = v1431 + backGroundClass;
    var v1063 = v1300 + '">';
    var v741 = v1063 + tempString$$1;
    var v251 = v741 + "</td></tr>\n";
    JAMScript.call(v250.write, v250, [v251]);
    timesFound = 0;
    i$$9 = i$$9 + 1;
    var v742 = arrayOfItems.length;
    v252 = i$$9 < v742
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
  var v1508 = '<tr><td class="title">' + "Pattern:";
  var v1432 = v1508 + '</td><td class="title">';
  var v1301 = v1432 + "Times found:";
  var v1064 = v1301 + '</td><td class="title">';
  var v743 = v1064 + "Percentage:";
  var v256 = v743 + "</td></tr>\n";
  JAMScript.call(v255.write, v255, [v256]);
  var i$$10 = 0;
  var v744 = arrayOfItems$$1.length;
  var v265 = i$$10 < v744;
  for(;v265;) {
    var tempNumber = 0;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v745 = arrayOfItems$$1[i$$10]
    }
    var v257 = v745.match(/\/[^\/]+\//);
    var matchExp$$1 = v257 + "gi";
    if(JAMScript.isEval(eval)) {
      matchExp$$1 = eval("introspect(JAMScript.introspectors.processAll) { " + matchExp$$1 + " }")
    }else {
      matchExp$$1 = JAMScript.call(eval, null, [matchExp$$1])
    }
    var v746 = sequence$$16.search(matchExp$$1);
    var v259 = v746 != -1;
    if(v259) {
      var v258 = sequence$$16.match(matchExp$$1);
      tempNumber = v258.length
    }
    var percentage = 0;
    var v1065 = originalLength + 1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1433 = arrayOfItems$$1[i$$10]
    }
    var v1302 = v1433.match(/\d+/);
    var v1066 = parseFloat(v1302);
    var v747 = v1065 - v1066;
    var v262 = v747 > 0;
    if(v262) {
      var v260 = 100 * tempNumber;
      var v748 = originalLength + 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1303 = arrayOfItems$$1[i$$10]
      }
      var v1067 = v1303.match(/\d+/);
      var v749 = parseFloat(v1067);
      var v261 = v748 - v749;
      percentage = v260 / v261
    }
    var v263 = outputWindow.document;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1587 = arrayOfItems$$1[i$$10]
    }
    var v1575 = v1587.match(/\([^\(]+\)\b/);
    var v1562 = v1575.toString();
    var v1541 = v1562.replace(/\(|\)/g, "");
    var v1509 = "<tr><td>" + v1541;
    var v1434 = v1509 + "</td><td>";
    var v1304 = v1434 + tempNumber;
    var v1068 = v1304 + "</td><td>";
    var v1069 = percentage.toFixed(2);
    var v750 = v1068 + v1069;
    var v264 = v750 + "</td></tr>\n";
    JAMScript.call(v263.write, v263, [v264]);
    i$$10 = i$$10 + 1;
    var v751 = arrayOfItems$$1.length;
    v265 = i$$10 < v751
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
  var v752 = sequence$$17.length;
  var v273 = v752 > 0;
  for(;v273;) {
    maxNum$$1 = sequence$$17.length;
    var v753 = Math.random();
    var v267 = v753 * maxNum$$1;
    randNum$$1 = Math.floor(v267);
    tempChar$$2 = sequence$$17.charAt(randNum$$1);
    tempSeq = tempSeq + tempChar$$2;
    tempString1 = sequence$$17.substring(0, randNum$$1);
    var v268 = randNum$$1 + 1;
    var v269 = sequence$$17.length;
    tempString2 = sequence$$17.substring(v268, v269);
    sequence$$17 = tempString1 + tempString2;
    var v754 = tempSeq.length;
    var v272 = v754 == 60;
    if(v272) {
      var v270 = outputWindow.document;
      var v271 = tempSeq + "\n";
      JAMScript.call(v270.write, v270, [v271]);
      tempSeq = ""
    }
    var v755 = sequence$$17.length;
    v273 = v755 > 0
  }
  var v274 = outputWindow.document;
  var v275 = tempSeq + "\n";
  JAMScript.call(v274.write, v274, [v275]);
  return true
}
function pairwiseAlignProtein(theDocument) {
  var newProteinOne = "";
  var titleOne = "";
  var newProteinTwo = "";
  var titleTwo = "";
  var maxInput$$3 = 2E3;
  var v756 = testScript();
  var v276 = v756 == false;
  if(v276) {
    return false
  }
  var v1542 = theDocument.forms;
  var v1510 = v1542[0];
  var v1435 = v1510.elements;
  var v1305 = v1435[0];
  var v1070 = checkFormElement(v1305);
  var v757 = v1070 == false;
  var v1072 = !v757;
  if(v1072) {
    var v1576 = theDocument.forms;
    var v1563 = v1576[0];
    var v1543 = v1563.elements;
    var v1511 = v1543[0];
    var v1436 = v1511.value;
    var v1306 = checkSequenceLength(v1436, maxInput$$3);
    var v1071 = v1306 == false;
    var v1308 = !v1071;
    if(v1308) {
      var v1577 = theDocument.forms;
      var v1564 = v1577[0];
      var v1544 = v1564.elements;
      var v1512 = v1544[1];
      var v1437 = checkFormElement(v1512);
      var v1307 = v1437 == false;
      var v1439 = !v1307;
      if(v1439) {
        var v1588 = theDocument.forms;
        var v1578 = v1588[0];
        var v1565 = v1578.elements;
        var v1545 = v1565[1];
        var v1513 = v1545.value;
        var v1438 = checkSequenceLength(v1513, maxInput$$3);
        v1307 = v1438 == false
      }
      v1071 = v1307
    }
    v757 = v1071
  }
  var v277 = v757;
  if(v277) {
    return false
  }
  var v1514 = theDocument.forms;
  var v1440 = v1514[0];
  var v1309 = v1440.elements;
  var v1073 = v1309[5];
  var v758 = v1073.options;
  var v1515 = theDocument.forms;
  var v1441 = v1515[0];
  var v1310 = v1441.elements;
  var v1074 = v1310[5];
  var v759 = v1074.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v278 = v758[v759]
  }
  var MATRIX = v278.value;
  var v1546 = theDocument.forms;
  var v1516 = v1546[0];
  var v1442 = v1516.elements;
  var v1311 = v1442[6];
  var v1075 = v1311.options;
  var v1547 = theDocument.forms;
  var v1517 = v1547[0];
  var v1443 = v1517.elements;
  var v1312 = v1443[6];
  var v1076 = v1312.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v760 = v1075[v1076]
  }
  var v279 = v760.value;
  var BEGIN_GAP_PENALTY = parseInt(v279);
  var v1548 = theDocument.forms;
  var v1518 = v1548[0];
  var v1444 = v1518.elements;
  var v1313 = v1444[7];
  var v1077 = v1313.options;
  var v1549 = theDocument.forms;
  var v1519 = v1549[0];
  var v1445 = v1519.elements;
  var v1314 = v1445[7];
  var v1078 = v1314.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v761 = v1077[v1078]
  }
  var v280 = v761.value;
  var GAP_PENALTY = parseInt(v280);
  var v1550 = theDocument.forms;
  var v1520 = v1550[0];
  var v1446 = v1520.elements;
  var v1315 = v1446[8];
  var v1079 = v1315.options;
  var v1551 = theDocument.forms;
  var v1521 = v1551[0];
  var v1447 = v1521.elements;
  var v1316 = v1447[8];
  var v1080 = v1316.selectedIndex;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v762 = v1079[v1080]
  }
  var v281 = v762.value;
  var END_GAP_PENALTY = parseInt(v281);
  openWindow("Pairwise Align Protein");
  openPre();
  var v1448 = theDocument.forms;
  var v1317 = v1448[0];
  var v1081 = v1317.elements;
  var v763 = v1081[0];
  var v282 = v763.value;
  newProteinOne = getSequenceFromFasta(v282);
  newProteinOne = removeNonProtein(newProteinOne);
  var v1449 = theDocument.forms;
  var v1318 = v1449[0];
  var v1082 = v1318.elements;
  var v764 = v1082[0];
  var v283 = v764.value;
  titleOne = getTitleFromFasta(v283);
  var v1450 = theDocument.forms;
  var v1319 = v1450[0];
  var v1083 = v1319.elements;
  var v765 = v1083[1];
  var v284 = v765.value;
  newProteinTwo = getSequenceFromFasta(v284);
  newProteinTwo = removeNonProtein(newProteinTwo);
  var v1451 = theDocument.forms;
  var v1320 = v1451[0];
  var v1084 = v1320.elements;
  var v766 = v1084[1];
  var v285 = v766.value;
  titleTwo = getTitleFromFasta(v285);
  var v286 = outputWindow.document;
  var v287 = getPairwiseAlignTitle(titleOne, newProteinOne, titleTwo, newProteinTwo);
  JAMScript.call(v286.write, v286, [v287]);
  var v767 = newProteinOne.search(/./);
  var v288 = v767 != -1;
  if(v288) {
    newProteinOne = newProteinOne.match(/./g)
  }
  var v768 = newProteinTwo.search(/./);
  var v289 = v768 != -1;
  if(v289) {
    newProteinTwo = newProteinTwo.match(/./g)
  }
  pairwiseProtein(titleOne, newProteinOne, titleTwo, newProteinTwo, MATRIX, GAP_PENALTY, BEGIN_GAP_PENALTY, END_GAP_PENALTY);
  closePre();
  closeWindow();
  return true
}
function pairwiseProtein(titleOne$$1, newProteinOne$$1, titleTwo$$1, newProteinTwo$$1, matrix, gapPenalty, beginGapPenalty, endGapPenalty) {
  var useLinearSpace = true;
  var useQuadraticSpace = false;
  var scoringMatrix;
  var v294 = matrix == "pam30";
  if(v294) {
    scoringMatrix = new Pam30
  }else {
    var v293 = matrix == "pam70";
    if(v293) {
      scoringMatrix = new Pam70
    }else {
      var v292 = matrix == "blosum80";
      if(v292) {
        scoringMatrix = new Blosum80
      }else {
        var v291 = matrix == "blosum62";
        if(v291) {
          scoringMatrix = new Blosum62
        }else {
          var v290 = matrix == "blosum45";
          if(v290) {
            scoringMatrix = new Blosum45
          }
        }
      }
    }
  }
  var scoreSet = new ScoreSet;
  JAMScript.call(scoreSet.setScoreSetParam, scoreSet, [scoringMatrix, gapPenalty, beginGapPenalty, endGapPenalty]);
  var alignment;
  if(useLinearSpace) {
    alignment = new AlignPairLinear;
    JAMScript.call(alignment.setAlignParam, alignment, [newProteinOne$$1, newProteinTwo$$1, scoreSet]);
    JAMScript.call(alignment.align, alignment, []);
    var v295 = outputWindow.document;
    var v769 = ">" + titleOne$$1;
    var v296 = v769 + "\n";
    JAMScript.call(v295.write, v295, [v296]);
    var v297 = outputWindow.document;
    var v770 = JAMScript.call(alignment.getAlignedM, alignment, []);
    var v298 = addReturns(v770);
    JAMScript.call(v297.write, v297, [v298]);
    var v299 = outputWindow.document;
    JAMScript.call(v299.write, v299, ["\n"]);
    var v300 = outputWindow.document;
    JAMScript.call(v300.write, v300, ["\n"]);
    var v301 = outputWindow.document;
    var v771 = ">" + titleTwo$$1;
    var v302 = v771 + "\n";
    JAMScript.call(v301.write, v301, [v302]);
    var v303 = outputWindow.document;
    var v772 = JAMScript.call(alignment.getAlignedN, alignment, []);
    var v304 = addReturns(v772);
    JAMScript.call(v303.write, v303, [v304]);
    var v305 = outputWindow.document;
    JAMScript.call(v305.write, v305, ["\n\n"]);
    var v306 = outputWindow.document;
    var v1085 = alignment.score;
    var v773 = "Alignment score: " + v1085;
    var v307 = v773 + "\n\n";
    JAMScript.call(v306.write, v306, [v307])
  }
  if(useQuadraticSpace) {
    alignment = new AlignPairQuad;
    JAMScript.call(alignment.initializeMatrix, alignment, [newProteinOne$$1, newProteinTwo$$1, scoreSet]);
    JAMScript.call(alignment.fillMatrix, alignment, []);
    JAMScript.call(alignment.align, alignment, []);
    var v308 = outputWindow.document;
    var v774 = ">" + titleOne$$1;
    var v309 = v774 + "\n";
    JAMScript.call(v308.write, v308, [v309]);
    var v310 = outputWindow.document;
    var v775 = JAMScript.call(alignment.getAlignedM, alignment, []);
    var v311 = addReturns(v775);
    JAMScript.call(v310.write, v310, [v311]);
    var v312 = outputWindow.document;
    JAMScript.call(v312.write, v312, ["\n"]);
    var v313 = outputWindow.document;
    JAMScript.call(v313.write, v313, ["\n"]);
    var v314 = outputWindow.document;
    var v776 = ">" + titleTwo$$1;
    var v315 = v776 + "\n";
    JAMScript.call(v314.write, v314, [v315]);
    var v316 = outputWindow.document;
    var v777 = JAMScript.call(alignment.getAlignedN, alignment, []);
    var v317 = addReturns(v777);
    JAMScript.call(v316.write, v316, [v317]);
    var v318 = outputWindow.document;
    JAMScript.call(v318.write, v318, ["\n\n"]);
    var v319 = outputWindow.document;
    var v1086 = alignment.score;
    var v778 = "Alignment score: " + v1086;
    var v320 = v778 + "\n\n";
    JAMScript.call(v319.write, v319, [v320])
  }
  return
}
function getScore(r1$$1, r2) {
  var v321 = this.scoringMatrix;
  return JAMScript.call(v321.scoringMatrix_getScore, v321, [r1$$1, r2])
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
  var v1087 = this.scoreHash;
  var v1088 = r1$$2 + r2$$1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v779 = v1087[v1088]
  }
  var v325 = v779 == null;
  if(v325) {
    var v1089 = "Unrecognized residue pair: " + r1$$2;
    var v780 = v1089 + ", ";
    var v322 = v780 + r2$$1;
    throw v322 + ".";
  }else {
    var v323 = this.scoreHash;
    var v324 = r1$$2 + r2$$1;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      return v323[v324]
    }
  }
  return
}
function scoringMatrix_fillHash(matrix$$1) {
  var v326 = matrix$$1[0];
  var cols = v326.split(/\s+/);
  var cells;
  var i$$11 = 1;
  var v781 = matrix$$1.length;
  var v331 = i$$11 < v781;
  for(;v331;) {
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v327 = matrix$$1[i$$11]
    }
    cells = v327.split(/\s+/);
    var j$$10 = 1;
    var v1090 = cols.length;
    var v782 = v1090 + 1;
    var v330 = j$$10 < v782;
    for(;v330;) {
      var v328 = this.scoreHash;
      var v1091 = cells[0];
      var v783 = v1091.toLowerCase();
      var v1321 = j$$10 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1092 = cols[v1321]
      }
      var v784 = v1092.toLowerCase();
      var v329 = v783 + v784;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v785 = cells[j$$10]
      }
      var v1624 = parseInt(v785);
      JAMScript.set(v328, v329, v1624, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
      j$$10 = j$$10 + 1;
      var v1093 = cols.length;
      var v786 = v1093 + 1;
      v330 = j$$10 < v786
    }
    i$$11 = i$$11 + 1;
    var v787 = matrix$$1.length;
    v331 = i$$11 < v787
  }
  return
}
function ScoringMatrix() {
  this.scoreHash = {};
  return
}
function Blosum62() {
  var matrix$$2 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  4 -1 -2 -2  0 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -3 -2  0", "R -1  5  0 -2 -3  1  0 -2  0 -3 -2  2 -1 -3 -2 -1 -1 -3 -2 -3", "N -2  0  6  1 -3  0  0  0  1 -3 -3  0 -2 -3 -2  1  0 -4 -2 -3", "D -2 -2  1  6 -3  0  2 -1 -1 -3 -4 -1 -3 -3 -1  0 -1 -4 -3 -3", "C  0 -3 -3 -3  9 -3 -4 -3 -3 -1 -1 -3 -1 -2 -3 -1 -1 -2 -2 -1", "Q -1  1  0  0 -3  5  2 -2  0 -3 -2  1  0 -3 -1  0 -1 -2 -1 -2", "E -1  0  0  2 -4  2  5 -2  0 -3 -3  1 -2 -3 -1  0 -1 -3 -2 -2", 
  "G  0 -2  0 -1 -3 -2 -2  6 -2 -4 -4 -2 -3 -3 -2  0 -2 -2 -3 -3", "H -2  0  1 -1 -3  0  0 -2  8 -3 -3 -1 -2 -1 -2 -1 -2 -2  2 -3", "I -1 -3 -3 -3 -1 -3 -3 -4 -3  4  2 -3  1  0 -3 -2 -1 -3 -1  3", "L -1 -2 -3 -4 -1 -2 -3 -4 -3  2  4 -2  2  0 -3 -2 -1 -2 -1  1", "K -1  2  0 -1 -3  1  1 -2 -1 -3 -2  5 -1 -3 -1  0 -1 -3 -2 -2", "M -1 -1 -2 -3 -1  0 -2 -3 -2  1  2 -1  5  0 -2 -1 -1 -1 -1  1", "F -2 -3 -3 -3 -2 -3 -3 -3 -1  0  0 -3  0  6 -4 -2 -2  1  3 -1", "P -1 -2 -2 -1 -3 -1 -1 -2 -2 -3 -3 -1 -2 -4  7 -1 -1 -4 -3 -2", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -2  0 -1 -2 -1  4  1 -3 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -2 -1  1  5 -2 -2  0", "W -3 -3 -4 -4 -2 -2 -3 -2 -2 -3 -2 -3 -1  1 -4 -3 -2 11  2 -3", "Y -2 -2 -2 -3 -2 -1 -2 -3  2 -1 -1 -2 -1  3 -3 -2 -2  2  7 -1", "V  0 -3 -3 -3 -1 -2 -2 -3 -3  3  1 -2  1 -1 -2 -2  0 -3 -1  4");
  JAMScript.call(this.scoringMatrix_fillHash, this, [matrix$$2]);
  return
}
function Blosum45() {
  var matrix$$3 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -1 -2 -1 -1 -1  0 -2 -1 -1 -1 -1 -2 -1  1  0 -2 -2  0", "R -2  7  0 -1 -3  1  0 -2  0 -3 -2  3 -1 -2 -2 -1 -1 -2 -1 -2", "N -1  0  6  2 -2  0  0  0  1 -2 -3  0 -2 -2 -2  1  0 -4 -2 -3", "D -2 -1  2  7 -3  0  2 -1  0 -4 -3  0 -3 -4 -1  0 -1 -4 -2 -3", "C -1 -3 -2 -3 12 -3 -3 -3 -3 -3 -2 -3 -2 -2 -4 -1 -1 -5 -3 -1", "Q -1  1  0  0 -3  6  2 -2  1 -2 -2  1  0 -4 -1  0 -1 -2 -1 -3", "E -1  0  0  2 -3  2  6 -2  0 -3 -2  1 -2 -3  0  0 -1 -3 -2 -3", 
  "G  0 -2  0 -1 -3 -2 -2  7 -2 -4 -3 -2 -2 -3 -2  0 -2 -2 -3 -3", "H -2  0  1  0 -3  1  0 -2 10 -3 -2 -1  0 -2 -2 -1 -2 -3  2 -3", "I -1 -3 -2 -4 -3 -2 -3 -4 -3  5  2 -3  2  0 -2 -2 -1 -2  0  3", "L -1 -2 -3 -3 -2 -2 -2 -3 -2  2  5 -3  2  1 -3 -3 -1 -2  0  1", "K -1  3  0  0 -3  1  1 -2 -1 -3 -3  5 -1 -3 -1 -1 -1 -2 -1 -2", "M -1 -1 -2 -3 -2  0 -2 -2  0  2  2 -1  6  0 -2 -2 -1 -2  0  1", "F -2 -2 -2 -4 -2 -4 -3 -3 -2  0  1 -3  0  8 -3 -2 -1  1  3  0", "P -1 -2 -2 -1 -4 -1  0 -2 -2 -2 -3 -1 -2 -3  9 -1 -1 -3 -3 -3", 
  "S  1 -1  1  0 -1  0  0  0 -1 -2 -3 -1 -2 -2 -1  4  2 -4 -2 -1", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -1 -1 -1 -1 -1  2  5 -3 -1  0", "W -2 -2 -4 -4 -5 -2 -3 -2 -3 -2 -2 -2 -2  1 -3 -4 -3 15  3 -3", "Y -2 -1 -2 -2 -3 -1 -2 -3  2  0  0 -1  0  3 -3 -2 -1  3  8 -1", "V  0 -2 -3 -3 -1 -3 -3 -3 -3  3  1 -2  1  0 -3 -1  0 -3 -1  5");
  JAMScript.call(this.scoringMatrix_fillHash, this, [matrix$$3]);
  return
}
function Blosum80() {
  var matrix$$4 = new Array("A  R  N  D  C  Q  E  G  H  I  L  K  M  F  P  S  T  W  Y  V", "A  5 -2 -2 -2 -1 -1 -1  0 -2 -2 -2 -1 -1 -3 -1  1  0 -3 -2  0", "R -2  6 -1 -2 -4  1 -1 -3  0 -3 -3  2 -2 -4 -2 -1 -1 -4 -3 -3", "N -2 -1  6  1 -3  0 -1 -1  0 -4 -4  0 -3 -4 -3  0  0 -4 -3 -4", "D -2 -2  1  6 -4 -1  1 -2 -2 -4 -5 -1 -4 -4 -2 -1 -1 -6 -4 -4", "C -1 -4 -3 -4  9 -4 -5 -4 -4 -2 -2 -4 -2 -3 -4 -2 -1 -3 -3 -1", "Q -1  1  0 -1 -4  6  2 -2  1 -3 -3  1  0 -4 -2  0 -1 -3 -2 -3", "E -1 -1 -1  1 -5  2  6 -3  0 -4 -4  1 -2 -4 -2  0 -1 -4 -3 -3", 
  "G  0 -3 -1 -2 -4 -2 -3  6 -3 -5 -4 -2 -4 -4 -3 -1 -2 -4 -4 -4", "H -2  0  0 -2 -4  1  0 -3  8 -4 -3 -1 -2 -2 -3 -1 -2 -3  2 -4", "I -2 -3 -4 -4 -2 -3 -4 -5 -4  5  1 -3  1 -1 -4 -3 -1 -3 -2  3", "L -2 -3 -4 -5 -2 -3 -4 -4 -3  1  4 -3  2  0 -3 -3 -2 -2 -2  1", "K -1  2  0 -1 -4  1  1 -2 -1 -3 -3  5 -2 -4 -1 -1 -1 -4 -3 -3", "M -1 -2 -3 -4 -2  0 -2 -4 -2  1  2 -2  6  0 -3 -2 -1 -2 -2  1", "F -3 -4 -4 -4 -3 -4 -4 -4 -2 -1  0 -4  0  6 -4 -3 -2  0  3 -1", "P -1 -2 -3 -2 -4 -2 -2 -3 -3 -4 -3 -1 -3 -4  8 -1 -2 -5 -4 -3", 
  "S  1 -1  0 -1 -2  0  0 -1 -1 -3 -3 -1 -2 -3 -1  5  1 -4 -2 -2", "T  0 -1  0 -1 -1 -1 -1 -2 -2 -1 -2 -1 -1 -2 -2  1  5 -4 -2  0", "W -3 -4 -4 -6 -3 -3 -4 -4 -3 -3 -2 -4 -2  0 -5 -4 -4 11  2 -3", "Y -2 -3 -3 -4 -3 -2 -3 -4  2 -2 -2 -3 -2  3 -4 -2 -2  2  7 -2", "V  0 -3 -4 -4 -1 -3 -3 -4 -4  3  1 -3  1 -1 -3 -2  0 -3 -2  4");
  JAMScript.call(this.scoringMatrix_fillHash, this, [matrix$$4]);
  return
}
function Pam70() {
  var matrix$$5 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   5  -4  -2  -1  -4  -2  -1   0  -4  -2  -4  -4  -3  -6   0   1   1  -9  -5  -1", "R  -4   8  -3  -6  -5   0  -5  -6   0  -3  -6   2  -2  -7  -2  -1  -4   0  -7  -5", "N  -2  -3   6   3  -7  -1   0  -1   1  -3  -5   0  -5  -6  -3   1   0  -6  -3  -5", "D  -1  -6   3   6  -9   0   3  -1  -1  -5  -8  -2  -7 -10  -4  -1  -2 -10  -7  -5", "C  -4  -5  -7  -9   9  -9  -9  -6  -5  -4 -10  -9  -9  -8  -5  -1  -5 -11  -2  -4", 
  "Q  -2   0  -1   0  -9   7   2  -4   2  -5  -3  -1  -2  -9  -1  -3  -3  -8  -8  -4", "E  -1  -5   0   3  -9   2   6  -2  -2  -4  -6  -2  -4  -9  -3  -2  -3 -11  -6  -4", "G   0  -6  -1  -1  -6  -4  -2   6  -6  -6  -7  -5  -6  -7  -3   0  -3 -10  -9  -3", "H  -4   0   1  -1  -5   2  -2  -6   8  -6  -4  -3  -6  -4  -2  -3  -4  -5  -1  -4", "I  -2  -3  -3  -5  -4  -5  -4  -6  -6   7   1  -4   1   0  -5  -4  -1  -9  -4   3", "L  -4  -6  -5  -8 -10  -3  -6  -7  -4   1   6  -5   2  -1  -5  -6  -4  -4  -4   0", 
  "K  -4   2   0  -2  -9  -1  -2  -5  -3  -4  -5   6   0  -9  -4  -2  -1  -7  -7  -6", "M  -3  -2  -5  -7  -9  -2  -4  -6  -6   1   2   0  10  -2  -5  -3  -2  -8  -7   0", "F  -6  -7  -6 -10  -8  -9  -9  -7  -4   0  -1  -9  -2   8  -7  -4  -6  -2   4  -5", "P   0  -2  -3  -4  -5  -1  -3  -3  -2  -5  -5  -4  -5  -7   7   0  -2  -9  -9  -3", "S   1  -1   1  -1  -1  -3  -2   0  -3  -4  -6  -2  -3  -4   0   5   2  -3  -5  -3", "T   1  -4   0  -2  -5  -3  -3  -3  -4  -1  -4  -1  -2  -6  -2   2   6  -8  -4  -1", 
  "W  -9   0  -6 -10 -11  -8 -11 -10  -5  -9  -4  -7  -8  -2  -9  -3  -8  13  -3 -10", "Y  -5  -7  -3  -7  -2  -8  -6  -9  -1  -4  -4  -7  -7   4  -9  -5  -4  -3   9  -5", "V  -1  -5  -5  -5  -4  -4  -4  -3  -4   3   0  -6   0  -5  -3  -3  -1 -10  -5   6");
  JAMScript.call(this.scoringMatrix_fillHash, this, [matrix$$5]);
  return
}
function Pam30() {
  var matrix$$6 = new Array("A   R   N   D   C   Q   E   G   H   I   L   K   M   F   P   S   T   W   Y   V", "A   6  -7  -4  -3  -6  -4  -2  -2  -7  -5  -6  -7  -5  -8  -2   0  -1 -13  -8  -2", "R  -7   8  -6 -10  -8  -2  -9  -9  -2  -5  -8   0  -4  -9  -4  -3  -6  -2 -10  -8", "N  -4  -6   8   2 -11  -3  -2  -3   0  -5  -7  -1  -9  -9  -6   0  -2  -8  -4  -8", "D  -3 -10   2   8 -14  -2   2  -3  -4  -7 -12  -4 -11 -15  -8  -4  -5 -15 -11  -8", "C  -6  -8 -11 -14  10 -14 -14  -9  -7  -6 -15 -14 -13 -13  -8  -3  -8 -15  -4  -6", 
  "Q  -4  -2  -3  -2 -14   8   1  -7   1  -8  -5  -3  -4 -13  -3  -5  -5 -13 -12  -7", "E  -2  -9  -2   2 -14   1   8  -4  -5  -5  -9  -4  -7 -14  -5  -4  -6 -17  -8  -6", "G  -2  -9  -3  -3  -9  -7  -4   6  -9 -11 -10  -7  -8  -9  -6  -2  -6 -15 -14  -5", "H  -7  -2   0  -4  -7   1  -5  -9   9  -9  -6  -6 -10  -6  -4  -6  -7  -7  -3  -6", "I  -5  -5  -5  -7  -6  -8  -5 -11  -9   8  -1  -6  -1  -2  -8  -7  -2 -14  -6   2", "L  -6  -8  -7 -12 -15  -5  -9 -10  -6  -1   7  -8   1  -3  -7  -8  -7  -6  -7  -2", 
  "K  -7   0  -1  -4 -14  -3  -4  -7  -6  -6  -8   7  -2 -14  -6  -4  -3 -12  -9  -9", "M  -5  -4  -9 -11 -13  -4  -7  -8 -10  -1   1  -2  11  -4  -8  -5  -4 -13 -11  -1", "F  -8  -9  -9 -15 -13 -13 -14  -9  -6  -2  -3 -14  -4   9 -10  -6  -9  -4   2  -8", "P  -2  -4  -6  -8  -8  -3  -5  -6  -4  -8  -7  -6  -8 -10   8  -2  -4 -14 -13  -6", "S   0  -3   0  -4  -3  -5  -4  -2  -6  -7  -8  -4  -5  -6  -2   6   0  -5  -7  -6", "T  -1  -6  -2  -5  -8  -5  -6  -6  -7  -2  -7  -3  -4  -9  -4   0   7 -13  -6  -3", 
  "W -13  -2  -8 -15 -15 -13 -17 -15  -7 -14  -6 -12 -13  -4 -14  -5 -13  13  -5 -15", "Y  -8 -10  -4 -11  -4 -12  -8 -14  -3  -6  -7  -9 -11   2 -13  -7  -6  -5  10  -7", "V  -2  -8  -8  -8  -6  -7  -6  -5  -6   2  -2  -9  -1  -8  -6  -6  -3 -15  -7   7");
  JAMScript.call(this.scoringMatrix_fillHash, this, [matrix$$6]);
  return
}
function align() {
  var v1094 = this.M;
  var v788 = v1094.length;
  var v348 = v788 == 0;
  if(v348) {
    var j$$11 = 1;
    var v1095 = this.N;
    var v789 = v1095.length;
    var v337 = j$$11 <= v789;
    for(;v337;) {
      var v332 = this.alignedM;
      v332.push("-");
      var v333 = this.alignedN;
      var v790 = this.N;
      var v791 = j$$11 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v334 = v790[v791]
      }
      v333.push(v334);
      var v335 = this.score;
      var v792 = this.scoreSet;
      var v336 = v792.gap;
      this.score = v335 + v336;
      j$$11 = j$$11 + 1;
      var v1096 = this.N;
      var v793 = v1096.length;
      v337 = j$$11 <= v793
    }
  }else {
    var v1097 = this.N;
    var v794 = v1097.length;
    var v347 = v794 == 0;
    if(v347) {
      j$$11 = 1;
      var v1098 = this.M;
      var v795 = v1098.length;
      var v343 = j$$11 <= v795;
      for(;v343;) {
        var v338 = this.alignedN;
        v338.push("-");
        var v339 = this.alignedM;
        var v796 = this.M;
        var v797 = j$$11 - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v340 = v796[v797]
        }
        v339.push(v340);
        var v341 = this.score;
        var v798 = this.scoreSet;
        var v342 = v798.gap;
        this.score = v341 + v342;
        j$$11 = j$$11 + 1;
        var v1099 = this.M;
        var v799 = v1099.length;
        v343 = j$$11 <= v799
      }
    }else {
      var v1322 = this.M;
      var v1100 = v1322.length;
      var v800 = v1100 == 0;
      if(v800) {
        var v1323 = this.N;
        var v1101 = v1323.length;
        v800 = v1101 == 0
      }
      var v346 = v800;
      if(v346) {
      }else {
        var v801 = this.M;
        var v344 = v801.length;
        var v802 = this.N;
        var v345 = v802.length;
        JAMScript.call(this.path, this, [0, 0, v344, v345])
      }
    }
  }
  return
}
function path(i1, j1, i2, j2) {
  var v1102 = i1 + 1;
  var v803 = v1102 == i2;
  var v1103 = !v803;
  if(v1103) {
    v803 = j1 == j2
  }
  var v445 = v803;
  if(v445) {
    var subM = new Array;
    var subN = new Array;
    var i$$12 = i1 + 1;
    var v350 = i$$12 <= i2;
    for(;v350;) {
      var v804 = this.M;
      var v805 = i$$12 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v349 = v804[v805]
      }
      subM.push(v349);
      i$$12 = i$$12 + 1;
      v350 = i$$12 <= i2
    }
    var j$$12 = j1 + 1;
    var v352 = j$$12 <= j2;
    for(;v352;) {
      var v806 = this.N;
      var v807 = j$$12 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v351 = v806[v807]
      }
      subN.push(v351);
      j$$12 = j$$12 + 1;
      v352 = j$$12 <= j2
    }
    var alignment$$1 = new AlignPairQuad;
    subScoreSet = new ScoreSet;
    var v375 = j1 == j2;
    if(v375) {
      var v366 = j1 == 0;
      if(v366) {
        var v808 = this.scoreSet;
        var v353 = v808.scoringMatrix;
        var v809 = this.scoreSet;
        var v354 = v809.beginGap;
        var v810 = this.scoreSet;
        var v355 = v810.beginGap;
        var v811 = this.scoreSet;
        var v356 = v811.beginGap;
        JAMScript.call(subScoreSet.setScoreSetParam, subScoreSet, [v353, v354, v355, v356])
      }else {
        var v1104 = this.N;
        var v812 = v1104.length;
        var v365 = j1 == v812;
        if(v365) {
          var v813 = this.scoreSet;
          var v357 = v813.scoringMatrix;
          var v814 = this.scoreSet;
          var v358 = v814.endGap;
          var v815 = this.scoreSet;
          var v359 = v815.endGap;
          var v816 = this.scoreSet;
          var v360 = v816.endGap;
          JAMScript.call(subScoreSet.setScoreSetParam, subScoreSet, [v357, v358, v359, v360])
        }else {
          var v817 = this.scoreSet;
          var v361 = v817.scoringMatrix;
          var v818 = this.scoreSet;
          var v362 = v818.gap;
          var v819 = this.scoreSet;
          var v363 = v819.gap;
          var v820 = this.scoreSet;
          var v364 = v820.gap;
          JAMScript.call(subScoreSet.setScoreSetParam, subScoreSet, [v361, v362, v363, v364])
        }
      }
    }else {
      var v821 = this.scoreSet;
      var v367 = v821.scoringMatrix;
      var v822 = this.scoreSet;
      var v368 = v822.gap;
      var v823 = this.scoreSet;
      var v369 = v823.beginGap;
      var v824 = this.scoreSet;
      var v370 = v824.endGap;
      JAMScript.call(subScoreSet.setScoreSetParam, subScoreSet, [v367, v368, v369, v370]);
      subScoreSet.useBeginGapTop = false;
      subScoreSet.useBeginGapLeft = false;
      subScoreSet.useEndGapBottom = false;
      subScoreSet.useEndGapRight = false;
      var v371 = i1 == 0;
      if(v371) {
        subScoreSet.useBeginGapTop = true
      }
      var v372 = j1 == 0;
      if(v372) {
        subScoreSet.useBeginGapLeft = true
      }
      var v1105 = this.N;
      var v825 = v1105.length;
      var v373 = j2 == v825;
      if(v373) {
        subScoreSet.useEndGapRight = true
      }
      var v1106 = this.M;
      var v826 = v1106.length;
      var v374 = i2 == v826;
      if(v374) {
        subScoreSet.useEndGapBottom = true
      }
    }
    JAMScript.call(alignment$$1.initializeMatrix, alignment$$1, [subM, subN, subScoreSet]);
    JAMScript.call(alignment$$1.fillMatrix, alignment$$1, []);
    JAMScript.call(alignment$$1.align, alignment$$1, []);
    var v376 = this.alignedM;
    var v377 = JAMScript.call(alignment$$1.getAlignedM, alignment$$1, []);
    v376.push(v377);
    var v378 = this.alignedN;
    var v379 = JAMScript.call(alignment$$1.getAlignedN, alignment$$1, []);
    v378.push(v379);
    var v380 = this.score;
    var v381 = alignment$$1.score;
    this.score = v380 + v381
  }else {
    var v827 = i1 + i2;
    var v382 = v827 / 2;
    var middle = Math.floor(v382);
    var v383 = this.Sn;
    JAMScript.set(v383, j1, 0, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
    var v388 = i1 == 0;
    if(v388) {
      j$$12 = j1 + 1;
      var v385 = j$$12 <= j2;
      for(;v385;) {
        var v384 = this.Sn;
        var v1107 = this.Sn;
        var v1108 = j$$12 - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v828 = v1107[v1108]
        }
        var v1109 = this.scoreSet;
        var v829 = v1109.beginGap;
        JAMScript.set(v384, j$$12, v828 - v829, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$12 = j$$12 + 1;
        v385 = j$$12 <= j2
      }
    }else {
      j$$12 = j1 + 1;
      var v387 = j$$12 <= j2;
      for(;v387;) {
        var v386 = this.Sn;
        var v1110 = this.Sn;
        var v1111 = j$$12 - 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v830 = v1110[v1111]
        }
        var v1112 = this.scoreSet;
        var v831 = v1112.gap;
        JAMScript.set(v386, j$$12, v830 - v831, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$12 = j$$12 + 1;
        v387 = j$$12 <= j2
      }
    }
    var diag;
    var left$$2;
    i$$12 = i1 + 1;
    var v410 = i$$12 <= middle;
    for(;v410;) {
      var v389 = this.Sn;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        diag = v389[j1]
      }
      var v394 = j1 == 0;
      if(v394) {
        var v832 = this.Sn;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v390 = v832[j1]
        }
        var v833 = this.scoreSet;
        var v391 = v833.beginGap;
        left$$2 = v390 - v391
      }else {
        var v834 = this.Sn;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v392 = v834[j1]
        }
        var v835 = this.scoreSet;
        var v393 = v835.gap;
        left$$2 = v392 - v393
      }
      var v395 = this.Sn;
      JAMScript.set(v395, j1, left$$2, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
      j$$12 = j1 + 1;
      var v409 = j$$12 <= j2;
      for(;v409;) {
        var v1324 = this.N;
        var v1113 = v1324.length;
        var v836 = j$$12 == v1113;
        if(v836) {
          var v1325 = this.M;
          var v1114 = v1325.length;
          v836 = i$$12 == v1114
        }
        var v406 = v836;
        if(v406) {
          var v1115 = this.Sn;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v837 = v1115[j$$12]
          }
          var v1116 = this.scoreSet;
          var v838 = v1116.endGap;
          var v396 = v837 - v838;
          var v1326 = this.scoreSet;
          var v1117 = v1326.endGap;
          var v839 = left$$2 - v1117;
          var v1118 = diag;
          var v1327 = this.scoreSet;
          var v1452 = this.M;
          var v1453 = i$$12 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1328 = v1452[v1453]
          }
          var v1454 = this.N;
          var v1455 = j$$12 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1329 = v1454[v1455]
          }
          var v1119 = JAMScript.call(v1327.getScore, v1327, [v1328, v1329]);
          var v840 = v1118 + v1119;
          var v397 = Math.max(v839, v840);
          left$$2 = Math.max(v396, v397)
        }else {
          var v1120 = this.M;
          var v841 = v1120.length;
          var v405 = i$$12 == v841;
          if(v405) {
            var v1121 = this.Sn;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v842 = v1121[j$$12]
            }
            var v1122 = this.scoreSet;
            var v843 = v1122.gap;
            var v398 = v842 - v843;
            var v1330 = this.scoreSet;
            var v1123 = v1330.endGap;
            var v844 = left$$2 - v1123;
            var v1124 = diag;
            var v1331 = this.scoreSet;
            var v1456 = this.M;
            var v1457 = i$$12 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1332 = v1456[v1457]
            }
            var v1458 = this.N;
            var v1459 = j$$12 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1333 = v1458[v1459]
            }
            var v1125 = JAMScript.call(v1331.getScore, v1331, [v1332, v1333]);
            var v845 = v1124 + v1125;
            var v399 = Math.max(v844, v845);
            left$$2 = Math.max(v398, v399)
          }else {
            var v1126 = this.N;
            var v846 = v1126.length;
            var v404 = j$$12 == v846;
            if(v404) {
              var v1127 = this.Sn;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v847 = v1127[j$$12]
              }
              var v1128 = this.scoreSet;
              var v848 = v1128.endGap;
              var v400 = v847 - v848;
              var v1334 = this.scoreSet;
              var v1129 = v1334.gap;
              var v849 = left$$2 - v1129;
              var v1130 = diag;
              var v1335 = this.scoreSet;
              var v1460 = this.M;
              var v1461 = i$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1336 = v1460[v1461]
              }
              var v1462 = this.N;
              var v1463 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1337 = v1462[v1463]
              }
              var v1131 = JAMScript.call(v1335.getScore, v1335, [v1336, v1337]);
              var v850 = v1130 + v1131;
              var v401 = Math.max(v849, v850);
              left$$2 = Math.max(v400, v401)
            }else {
              var v1132 = this.Sn;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v851 = v1132[j$$12]
              }
              var v1133 = this.scoreSet;
              var v852 = v1133.gap;
              var v402 = v851 - v852;
              var v1338 = this.scoreSet;
              var v1134 = v1338.gap;
              var v853 = left$$2 - v1134;
              var v1135 = diag;
              var v1339 = this.scoreSet;
              var v1464 = this.M;
              var v1465 = i$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1340 = v1464[v1465]
              }
              var v1466 = this.N;
              var v1467 = j$$12 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1341 = v1466[v1467]
              }
              var v1136 = JAMScript.call(v1339.getScore, v1339, [v1340, v1341]);
              var v854 = v1135 + v1136;
              var v403 = Math.max(v853, v854);
              left$$2 = Math.max(v402, v403)
            }
          }
        }
        var v407 = this.Sn;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          diag = v407[j$$12]
        }
        var v408 = this.Sn;
        JAMScript.set(v408, j$$12, left$$2, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$12 = j$$12 + 1;
        v409 = j$$12 <= j2
      }
      i$$12 = i$$12 + 1;
      v410 = i$$12 <= middle
    }
    var v411 = this.Sp;
    JAMScript.set(v411, j2, 0, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
    var v1137 = this.M;
    var v855 = v1137.length;
    var v416 = i2 == v855;
    if(v416) {
      j$$12 = j2 - 1;
      var v413 = j$$12 >= j1;
      for(;v413;) {
        var v412 = this.Sp;
        var v1138 = this.Sp;
        var v1139 = j$$12 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v856 = v1138[v1139]
        }
        var v1140 = this.scoreSet;
        var v857 = v1140.endGap;
        JAMScript.set(v412, j$$12, v856 - v857, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$12 = j$$12 - 1;
        v413 = j$$12 >= j1
      }
    }else {
      j$$12 = j2 - 1;
      var v415 = j$$12 >= j1;
      for(;v415;) {
        var v414 = this.Sp;
        var v1141 = this.Sp;
        var v1142 = j$$12 + 1;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v858 = v1141[v1142]
        }
        var v1143 = this.scoreSet;
        var v859 = v1143.gap;
        JAMScript.set(v414, j$$12, v858 - v859, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$12 = j$$12 - 1;
        v415 = j$$12 >= j1
      }
    }
    var right$$2;
    i$$12 = i2 - 1;
    var v438 = i$$12 >= middle;
    for(;v438;) {
      var v417 = this.Sp;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        diag = v417[j2]
      }
      var v1144 = this.N;
      var v860 = v1144.length;
      var v422 = j2 == v860;
      if(v422) {
        var v861 = this.Sp;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v418 = v861[j2]
        }
        var v862 = this.scoreSet;
        var v419 = v862.endGap;
        right$$2 = v418 - v419
      }else {
        var v863 = this.Sp;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v420 = v863[j2]
        }
        var v864 = this.scoreSet;
        var v421 = v864.gap;
        right$$2 = v420 - v421
      }
      var v423 = this.Sp;
      JAMScript.set(v423, j2, right$$2, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
      j$$12 = j2 - 1;
      var v437 = j$$12 >= j1;
      for(;v437;) {
        var v865 = j$$12 == 0;
        if(v865) {
          v865 = i$$12 == 0
        }
        var v434 = v865;
        if(v434) {
          var v1145 = this.Sp;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v866 = v1145[j$$12]
          }
          var v1146 = this.scoreSet;
          var v867 = v1146.beginGap;
          var v424 = v866 - v867;
          var v1342 = this.scoreSet;
          var v1147 = v1342.beginGap;
          var v868 = right$$2 - v1147;
          var v1148 = diag;
          var v1343 = this.scoreSet;
          var v1468 = this.M;
          var v1522 = i$$12 + 1;
          var v1469 = v1522 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1344 = v1468[v1469]
          }
          var v1470 = this.N;
          var v1523 = j$$12 + 1;
          var v1471 = v1523 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1345 = v1470[v1471]
          }
          var v1149 = JAMScript.call(v1343.getScore, v1343, [v1344, v1345]);
          var v869 = v1148 + v1149;
          var v425 = Math.max(v868, v869);
          right$$2 = Math.max(v424, v425)
        }else {
          var v433 = j$$12 == 0;
          if(v433) {
            var v1150 = this.Sp;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v870 = v1150[j$$12]
            }
            var v1151 = this.scoreSet;
            var v871 = v1151.beginGap;
            var v426 = v870 - v871;
            var v1346 = this.scoreSet;
            var v1152 = v1346.gap;
            var v872 = right$$2 - v1152;
            var v1153 = diag;
            var v1347 = this.scoreSet;
            var v1472 = this.M;
            var v1524 = i$$12 + 1;
            var v1473 = v1524 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1348 = v1472[v1473]
            }
            var v1474 = this.N;
            var v1525 = j$$12 + 1;
            var v1475 = v1525 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1349 = v1474[v1475]
            }
            var v1154 = JAMScript.call(v1347.getScore, v1347, [v1348, v1349]);
            var v873 = v1153 + v1154;
            var v427 = Math.max(v872, v873);
            right$$2 = Math.max(v426, v427)
          }else {
            var v432 = i$$12 == 0;
            if(v432) {
              var v1155 = this.Sp;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v874 = v1155[j$$12]
              }
              var v1156 = this.scoreSet;
              var v875 = v1156.gap;
              var v428 = v874 - v875;
              var v1350 = this.scoreSet;
              var v1157 = v1350.beginGap;
              var v876 = right$$2 - v1157;
              var v1158 = diag;
              var v1351 = this.scoreSet;
              var v1476 = this.M;
              var v1526 = i$$12 + 1;
              var v1477 = v1526 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1352 = v1476[v1477]
              }
              var v1478 = this.N;
              var v1527 = j$$12 + 1;
              var v1479 = v1527 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1353 = v1478[v1479]
              }
              var v1159 = JAMScript.call(v1351.getScore, v1351, [v1352, v1353]);
              var v877 = v1158 + v1159;
              var v429 = Math.max(v876, v877);
              right$$2 = Math.max(v428, v429)
            }else {
              var v1160 = this.Sp;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v878 = v1160[j$$12]
              }
              var v1161 = this.scoreSet;
              var v879 = v1161.gap;
              var v430 = v878 - v879;
              var v1354 = this.scoreSet;
              var v1162 = v1354.gap;
              var v880 = right$$2 - v1162;
              var v1163 = diag;
              var v1355 = this.scoreSet;
              var v1480 = this.M;
              var v1528 = i$$12 + 1;
              var v1481 = v1528 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1356 = v1480[v1481]
              }
              var v1482 = this.N;
              var v1529 = j$$12 + 1;
              var v1483 = v1529 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1357 = v1482[v1483]
              }
              var v1164 = JAMScript.call(v1355.getScore, v1355, [v1356, v1357]);
              var v881 = v1163 + v1164;
              var v431 = Math.max(v880, v881);
              right$$2 = Math.max(v430, v431)
            }
          }
        }
        var v435 = this.Sp;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          diag = v435[j$$12]
        }
        var v436 = this.Sp;
        JAMScript.set(v436, j$$12, right$$2, JAMScript.introspectors.process352B9049850A13D6240C92FA86C9847A77C5E747FBD3A1264B9E51FB277A54E2B2676ECDC7756049C51DDFC22C8571C0FE27B1BC0B7671157BDF992D3D5BFF5DC7B69AF371F2F5D047B05F9905C5C2518D73029A35D0B675A79D1B1E133053ADEDD6839E9989B3C234729DDA7C0D11354CAD017B84EB04E8);
        j$$12 = j$$12 - 1;
        v437 = j$$12 >= j1
      }
      i$$12 = i$$12 - 1;
      v438 = i$$12 >= middle
    }
    var v882 = this.Sn;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v439 = v882[j1]
    }
    var v883 = this.Sp;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v440 = v883[j1]
    }
    var maxValue = v439 + v440;
    var maxJ = j1;
    j$$12 = j1 + 1;
    var v444 = j$$12 <= j2;
    for(;v444;) {
      var v1358 = this.Sn;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1165 = v1358[j$$12]
      }
      var v1359 = this.Sp;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1166 = v1359[j$$12]
      }
      var v884 = v1165 + v1166;
      var v443 = v884 >= maxValue;
      if(v443) {
        var v885 = this.Sn;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v441 = v885[j$$12]
        }
        var v886 = this.Sp;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v442 = v886[j$$12]
        }
        maxValue = v441 + v442;
        maxJ = j$$12
      }
      j$$12 = j$$12 + 1;
      v444 = j$$12 <= j2
    }
    JAMScript.call(this.path, this, [i1, j1, middle, maxJ]);
    JAMScript.call(this.path, this, [middle, maxJ, i2, j2])
  }
  return
}
function getAlignedM() {
  var v446 = this.alignedM;
  return v446.join("")
}
function getAlignedN() {
  var v447 = this.alignedN;
  return v447.join("")
}
function setAlignParam(M, N, scoreSet$$1) {
  this.M = M;
  this.N = N;
  var v1625 = new Array;
  this.alignedM = v1625;
  var v1626 = new Array;
  this.alignedN = v1626;
  this.scoreSet = scoreSet$$1;
  var v887 = this.N;
  var v448 = v887.length;
  var v1627 = new Array(v448);
  this.Sn = v1627;
  var v888 = this.N;
  var v449 = v888.length;
  var v1628 = new Array(v449);
  this.Sp = v1628;
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
  var v1167 = this.M;
  var v889 = v1167.length;
  var v450 = v889 + 1;
  var v1629 = new Array(v450);
  this.nodes = v1629;
  var i$$13 = 0;
  var v1168 = this.nodes;
  var v890 = v1168.length;
  var v456 = i$$13 < v890;
  for(;v456;) {
    var v451 = this.nodes;
    var v452 = i$$13;
    var v1360 = this.N;
    var v1169 = v1360.length;
    var v891 = v1169 + 1;
    var v1630 = new Array(v891);
    v451[v452] = v1630;
    var j$$13 = 0;
    var v1361 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1170 = v1361[i$$13]
    }
    var v892 = v1170.length;
    var v455 = j$$13 < v892;
    for(;v455;) {
      var v893 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v453 = v893[i$$13]
      }
      var v454 = j$$13;
      var v1631 = new Node;
      v453[v454] = v1631;
      j$$13 = j$$13 + 1;
      var v1362 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1171 = v1362[i$$13]
      }
      var v894 = v1171.length;
      v455 = j$$13 < v894
    }
    i$$13 = i$$13 + 1;
    var v1172 = this.nodes;
    var v895 = v1172.length;
    v456 = i$$13 < v895
  }
  var v1173 = this.nodes;
  var v896 = v1173[0];
  var v457 = v896[0];
  v457.value = 0;
  i$$13 = 1;
  var v1174 = this.nodes;
  var v897 = v1174.length;
  var v463 = i$$13 < v897;
  for(;v463;) {
    var v898 = this.scoreSet;
    var v460 = v898.useBeginGapLeft;
    if(v460) {
      var v1175 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v899 = v1175[i$$13]
      }
      var v458 = v899[0];
      var v1484 = this.nodes;
      var v1485 = i$$13 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1363 = v1484[v1485]
      }
      var v1176 = v1363[0];
      var v900 = v1176.value;
      var v1177 = this.scoreSet;
      var v901 = v1177.beginGap;
      v458.value = v900 - v901
    }else {
      var v1178 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v902 = v1178[i$$13]
      }
      var v459 = v902[0];
      var v1486 = this.nodes;
      var v1487 = i$$13 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1364 = v1486[v1487]
      }
      var v1179 = v1364[0];
      var v903 = v1179.value;
      var v1180 = this.scoreSet;
      var v904 = v1180.gap;
      v459.value = v903 - v904
    }
    var v1181 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v905 = v1181[i$$13]
    }
    var v461 = v905[0];
    v461.tracebackI = i$$13 - 1;
    var v1182 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v906 = v1182[i$$13]
    }
    var v462 = v906[0];
    v462.tracebackJ = 0;
    i$$13 = i$$13 + 1;
    var v1183 = this.nodes;
    var v907 = v1183.length;
    v463 = i$$13 < v907
  }
  j$$13 = 1;
  var v1365 = this.nodes;
  var v1184 = v1365[0];
  var v908 = v1184.length;
  var v469 = j$$13 < v908;
  for(;v469;) {
    var v909 = this.scoreSet;
    var v466 = v909.useBeginGapTop;
    if(v466) {
      var v1185 = this.nodes;
      var v910 = v1185[0];
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v464 = v910[j$$13]
      }
      var v1488 = this.nodes;
      var v1366 = v1488[0];
      var v1367 = j$$13 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1186 = v1366[v1367]
      }
      var v911 = v1186.value;
      var v1187 = this.scoreSet;
      var v912 = v1187.beginGap;
      v464.value = v911 - v912
    }else {
      var v1188 = this.nodes;
      var v913 = v1188[0];
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v465 = v913[j$$13]
      }
      var v1489 = this.nodes;
      var v1368 = v1489[0];
      var v1369 = j$$13 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1189 = v1368[v1369]
      }
      var v914 = v1189.value;
      var v1190 = this.scoreSet;
      var v915 = v1190.gap;
      v465.value = v914 - v915
    }
    var v1191 = this.nodes;
    var v916 = v1191[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v467 = v916[j$$13]
    }
    v467.tracebackI = 0;
    var v1192 = this.nodes;
    var v917 = v1192[0];
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v468 = v917[j$$13]
    }
    v468.tracebackJ = j$$13 - 1;
    j$$13 = j$$13 + 1;
    var v1370 = this.nodes;
    var v1193 = v1370[0];
    var v918 = v1193.length;
    v469 = j$$13 < v918
  }
  return
}
function dumpMatrix() {
  var v470 = outputWindow.document;
  var v1490 = this.nodes;
  var v1371 = v1490.length;
  var v1194 = "Dynamic programming matrix i=" + v1371;
  var v919 = v1194 + " and j=";
  var v1372 = this.nodes;
  var v1195 = v1372[0];
  var v920 = v1195.length;
  var v471 = v919 + v920;
  JAMScript.call(v470.write, v470, [v471]);
  var v472 = outputWindow.document;
  JAMScript.call(v472.write, v472, ["\n"]);
  var i$$14 = 0;
  var v1196 = this.nodes;
  var v921 = v1196.length;
  var v483 = i$$14 < v921;
  for(;v483;) {
    var j$$14 = 0;
    var v1373 = this.nodes;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v1197 = v1373[i$$14]
    }
    var v922 = v1197.length;
    var v481 = j$$14 < v922;
    for(;v481;) {
      var v1198 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v923 = v1198[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v473 = v923[j$$14]
      }
      var traceI = v473.tracebackI;
      var v1199 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v924 = v1199[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v474 = v924[j$$14]
      }
      var traceJ = v474.tracebackJ;
      var v475 = traceI == undefined;
      if(v475) {
        traceI = "u"
      }
      var v476 = traceJ == undefined;
      if(v476) {
        traceJ = "u"
      }
      var v1566 = "(" + i$$14;
      var v1552 = v1566 + ",";
      var v1530 = v1552 + j$$14;
      var v1491 = v1530 + ")[";
      var v1374 = v1491 + traceI;
      var v1200 = v1374 + ",";
      var v925 = v1200 + traceJ;
      var v477 = v925 + "]=";
      var v1375 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1201 = v1375[i$$14]
      }
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v926 = v1201[j$$14]
      }
      var v478 = v926.value;
      var output = v477 + v478;
      var v479 = outputWindow.document;
      var v480 = rightNum(output, "", 20, " ");
      JAMScript.call(v479.write, v479, [v480]);
      j$$14 = j$$14 + 1;
      var v1376 = this.nodes;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1202 = v1376[i$$14]
      }
      var v927 = v1202.length;
      v481 = j$$14 < v927
    }
    var v482 = outputWindow.document;
    JAMScript.call(v482.write, v482, ["\n"]);
    i$$14 = i$$14 + 1;
    var v1203 = this.nodes;
    var v928 = v1203.length;
    v483 = i$$14 < v928
  }
  var v484 = outputWindow.document;
  JAMScript.call(v484.write, v484, ["\n"]);
  return
}
function fillMatrix() {
  var i$$15 = 1;
  var v1204 = this.nodes;
  var v929 = v1204.length;
  var v530 = i$$15 < v929;
  for(;v530;) {
    var j$$15 = 1;
    var v1377 = this.nodes;
    var v1205 = v1377[0];
    var v930 = v1205.length;
    var v529 = j$$15 < v930;
    for(;v529;) {
      var a;
      var b;
      var c;
      var v1492 = this.nodes;
      var v1378 = v1492.length;
      var v1206 = v1378 - 1;
      var v931 = i$$15 == v1206;
      if(v931) {
        var v1531 = this.nodes;
        var v1493 = v1531[0];
        var v1379 = v1493.length;
        var v1207 = v1379 - 1;
        v931 = j$$15 == v1207
      }
      var v515 = v931;
      if(v515) {
        var v932 = this.scoreSet;
        var v489 = v932.useEndGapRight;
        if(v489) {
          var v1380 = this.nodes;
          var v1381 = i$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1208 = v1380[v1381]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v933 = v1208[j$$15]
          }
          var v485 = v933.value;
          var v934 = this.scoreSet;
          var v486 = v934.endGap;
          a = v485 - v486
        }else {
          var v1382 = this.nodes;
          var v1383 = i$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1209 = v1382[v1383]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v935 = v1209[j$$15]
          }
          var v487 = v935.value;
          var v936 = this.scoreSet;
          var v488 = v936.gap;
          a = v487 - v488
        }
        var v937 = this.scoreSet;
        var v494 = v937.useEndGapBottom;
        if(v494) {
          var v1384 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1210 = v1384[i$$15]
          }
          var v1211 = j$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v938 = v1210[v1211]
          }
          var v490 = v938.value;
          var v939 = this.scoreSet;
          var v491 = v939.endGap;
          b = v490 - v491
        }else {
          var v1385 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1212 = v1385[i$$15]
          }
          var v1213 = j$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v940 = v1212[v1213]
          }
          var v492 = v940.value;
          var v941 = this.scoreSet;
          var v493 = v941.gap;
          b = v492 - v493
        }
      }else {
        var v1386 = this.nodes;
        var v1214 = v1386.length;
        var v942 = v1214 - 1;
        var v514 = i$$15 == v942;
        if(v514) {
          var v1387 = this.nodes;
          var v1388 = i$$15 - 1;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v1215 = v1387[v1388]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v943 = v1215[j$$15]
          }
          var v495 = v943.value;
          var v944 = this.scoreSet;
          var v496 = v944.gap;
          a = v495 - v496;
          var v945 = this.scoreSet;
          var v501 = v945.useEndGapBottom;
          if(v501) {
            var v1389 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1216 = v1389[i$$15]
            }
            var v1217 = j$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v946 = v1216[v1217]
            }
            var v497 = v946.value;
            var v947 = this.scoreSet;
            var v498 = v947.endGap;
            b = v497 - v498
          }else {
            var v1390 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1218 = v1390[i$$15]
            }
            var v1219 = j$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v948 = v1218[v1219]
            }
            var v499 = v948.value;
            var v949 = this.scoreSet;
            var v500 = v949.gap;
            b = v499 - v500
          }
        }else {
          var v1494 = this.nodes;
          var v1391 = v1494[0];
          var v1220 = v1391.length;
          var v950 = v1220 - 1;
          var v513 = j$$15 == v950;
          if(v513) {
            var v951 = this.scoreSet;
            var v506 = v951.useEndGapRight;
            if(v506) {
              var v1392 = this.nodes;
              var v1393 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1221 = v1392[v1393]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v952 = v1221[j$$15]
              }
              var v502 = v952.value;
              var v953 = this.scoreSet;
              var v503 = v953.endGap;
              a = v502 - v503
            }else {
              var v1394 = this.nodes;
              var v1395 = i$$15 - 1;
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v1222 = v1394[v1395]
              }
              introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
                var v954 = v1222[j$$15]
              }
              var v504 = v954.value;
              var v955 = this.scoreSet;
              var v505 = v955.gap;
              a = v504 - v505
            }
            var v1396 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1223 = v1396[i$$15]
            }
            var v1224 = j$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v956 = v1223[v1224]
            }
            var v507 = v956.value;
            var v957 = this.scoreSet;
            var v508 = v957.gap;
            b = v507 - v508
          }else {
            var v1397 = this.nodes;
            var v1398 = i$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1225 = v1397[v1398]
            }
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v958 = v1225[j$$15]
            }
            var v509 = v958.value;
            var v959 = this.scoreSet;
            var v510 = v959.gap;
            a = v509 - v510;
            var v1399 = this.nodes;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v1226 = v1399[i$$15]
            }
            var v1227 = j$$15 - 1;
            introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
              var v960 = v1226[v1227]
            }
            var v511 = v960.value;
            var v961 = this.scoreSet;
            var v512 = v961.gap;
            b = v511 - v512
          }
        }
      }
      var v1400 = this.nodes;
      var v1401 = i$$15 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v1228 = v1400[v1401]
      }
      var v1229 = j$$15 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v962 = v1228[v1229]
      }
      var v516 = v962.value;
      var v963 = this.scoreSet;
      var v1230 = this.M;
      var v1231 = i$$15 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v964 = v1230[v1231]
      }
      var v1232 = this.N;
      var v1233 = j$$15 - 1;
      introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
        var v965 = v1232[v1233]
      }
      var v517 = JAMScript.call(v963.getScore, v963, [v964, v965]);
      c = v516 + v517;
      var v966 = a >= b;
      if(v966) {
        v966 = a >= c
      }
      var v528 = v966;
      if(v528) {
        var v1234 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v967 = v1234[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v518 = v967[j$$15]
        }
        v518.value = a;
        var v1235 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v968 = v1235[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v519 = v968[j$$15]
        }
        v519.tracebackI = i$$15 - 1;
        var v1236 = this.nodes;
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v969 = v1236[i$$15]
        }
        introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
          var v520 = v969[j$$15]
        }
        v520.tracebackJ = j$$15
      }else {
        var v970 = b >= c;
        if(v970) {
          v970 = b >= a
        }
        var v527 = v970;
        if(v527) {
          var v1237 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v971 = v1237[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v521 = v971[j$$15]
          }
          v521.value = b;
          var v1238 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v972 = v1238[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v522 = v972[j$$15]
          }
          v522.tracebackI = i$$15;
          var v1239 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v973 = v1239[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v523 = v973[j$$15]
          }
          v523.tracebackJ = j$$15 - 1
        }else {
          var v1240 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v974 = v1240[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v524 = v974[j$$15]
          }
          v524.value = c;
          var v1241 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v975 = v1241[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v525 = v975[j$$15]
          }
          v525.tracebackI = i$$15 - 1;
          var v1242 = this.nodes;
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v976 = v1242[i$$15]
          }
          introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
            var v526 = v976[j$$15]
          }
          v526.tracebackJ = j$$15 - 1
        }
      }
      j$$15 = j$$15 + 1;
      var v1402 = this.nodes;
      var v1243 = v1402[0];
      var v977 = v1243.length;
      v529 = j$$15 < v977
    }
    i$$15 = i$$15 + 1;
    var v1244 = this.nodes;
    var v978 = v1244.length;
    v530 = i$$15 < v978
  }
  var v1245 = this.nodes;
  var v1495 = this.nodes;
  var v1403 = v1495.length;
  var v1246 = v1403 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v979 = v1245[v1246]
  }
  var v1496 = this.nodes;
  var v1404 = v1496[0];
  var v1247 = v1404.length;
  var v980 = v1247 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v531 = v979[v980]
  }
  this.score = v531.value;
  return
}
function alignQuad() {
  var v1632 = new Array;
  this.alignedM = v1632;
  var v1633 = new Array;
  this.alignedN = v1633;
  var v981 = this.nodes;
  var v532 = v981.length;
  var currentI = v532 - 1;
  var v1248 = this.nodes;
  var v982 = v1248[0];
  var v533 = v982.length;
  var currentJ = v533 - 1;
  var v983 = this.nodes;
  var v1405 = this.nodes;
  var v1249 = v1405.length;
  var v984 = v1249 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var v534 = v983[v984]
  }
  var v1406 = this.nodes;
  var v1250 = v1406[0];
  var v985 = v1250.length;
  var v535 = v985 - 1;
  introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
    var currentNode = v534[v535]
  }
  var v1251 = currentNode.tracebackI;
  var v986 = v1251 != undefined;
  if(v986) {
    var v1252 = currentNode.tracebackJ;
    v986 = v1252 != undefined
  }
  var v550 = v986;
  for(;v550;) {
    var v1253 = currentNode.tracebackI;
    var v1254 = currentI - 1;
    var v987 = v1253 == v1254;
    if(v987) {
      var v1255 = currentNode.tracebackJ;
      var v1256 = currentJ - 1;
      v987 = v1255 == v1256
    }
    var v547 = v987;
    if(v547) {
      var v536 = this.alignedM;
      var v988 = this.M;
      var v537 = v988.pop();
      v536.push(v537);
      var v538 = this.alignedN;
      var v989 = this.N;
      var v539 = v989.pop();
      v538.push(v539)
    }else {
      var v990 = currentNode.tracebackJ;
      var v991 = currentJ - 1;
      var v546 = v990 == v991;
      if(v546) {
        var v540 = this.alignedM;
        v540.push("-");
        var v541 = this.alignedN;
        var v992 = this.N;
        var v542 = v992.pop();
        v541.push(v542)
      }else {
        var v543 = this.alignedM;
        var v993 = this.M;
        var v544 = v993.pop();
        v543.push(v544);
        var v545 = this.alignedN;
        v545.push("-")
      }
    }
    currentI = currentNode.tracebackI;
    currentJ = currentNode.tracebackJ;
    var v994 = this.nodes;
    var v995 = currentNode.tracebackI;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      var v548 = v994[v995]
    }
    var v549 = currentNode.tracebackJ;
    introspect(JAMScript.introspectors.processC545F199BE443C5FB0DC91C55134FB746FD8B0743DEE6A5A275B5D091C2C08764ED6875FB9CEF4A863AC168D7E4E5726382E87A6C5519EBB224F310826AD12417C5C1A4403544617DC12D12B77070FFE01B202FEF2A1FF3D4E691FF617A7A762C66E4CFB) {
      currentNode = v548[v549]
    }
    var v1257 = currentNode.tracebackI;
    var v996 = v1257 != undefined;
    if(v996) {
      var v1258 = currentNode.tracebackJ;
      v996 = v1258 != undefined
    }
    v550 = v996
  }
  var v551 = this.alignedM;
  var v1634 = v551.reverse();
  this.alignedM = v1634;
  var v552 = this.alignedN;
  var v1635 = v552.reverse();
  this.alignedN = v1635;
  return
}
function getAlignedM() {
  var v553 = this.alignedM;
  return v553.join("")
}
function getAlignedN() {
  var v554 = this.alignedN;
  return v554.join("")
}
function AlignPairQuad() {
  return
}
new ScoreSet;
var v555 = ScoreSet.prototype;
v555.getScore = getScore;
var v556 = ScoreSet.prototype;
v556.setScoreSetParam = setScoreSetParam;
new ScoringMatrix;
var v557 = ScoringMatrix.prototype;
v557.scoringMatrix_getScore = scoringMatrix_getScore;
var v558 = ScoringMatrix.prototype;
v558.scoringMatrix_fillHash = scoringMatrix_fillHash;
var v559 = Blosum62;
var v1636 = new ScoringMatrix;
v559.prototype = v1636;
var v560 = Blosum45;
var v1637 = new ScoringMatrix;
v560.prototype = v1637;
var v561 = Blosum80;
var v1638 = new ScoringMatrix;
v561.prototype = v1638;
var v562 = Pam70;
var v1639 = new ScoringMatrix;
v562.prototype = v1639;
var v563 = Pam30;
var v1640 = new ScoringMatrix;
v563.prototype = v1640;
new AlignPairLinear;
var v564 = AlignPairLinear.prototype;
v564.align = align;
var v565 = AlignPairLinear.prototype;
v565.path = path;
var v566 = AlignPairLinear.prototype;
v566.setAlignParam = setAlignParam;
var v567 = AlignPairLinear.prototype;
v567.getAlignedM = getAlignedM;
var v568 = AlignPairLinear.prototype;
v568.getAlignedN = getAlignedN;
new AlignPairQuad;
var v569 = AlignPairQuad.prototype;
v569.initializeMatrix = initializeMatrix;
var v570 = AlignPairQuad.prototype;
v570.fillMatrix = fillMatrix;
var v571 = AlignPairQuad.prototype;
v571.align = alignQuad;
var v572 = AlignPairQuad.prototype;
v572.getAlignedM = getAlignedM;
var v573 = AlignPairQuad.prototype;
v573.getAlignedN = getAlignedN;
var v574 = AlignPairQuad.prototype;
v574.dumpMatrix = dumpMatrix;
JAMScript.set(document, "onload", v2);
var v575 = document.getElementById("submitbtn");
JAMScript.set(v575, "onclick", v3);
var v576 = document.getElementById("clearbtn");
JAMScript.set(v576, "onclick", v4);

